/* 临时校验脚本：验证断点回归引擎的数值正确性（不参与构建） */
import { getDataset } from './src/data/generator';
import {
  buildSample,
  candidateBandwidths,
  selectBandwidth,
  estimateRdd,
  binMeans,
  fitCurve,
  bandwidthSensitivity,
  placeboTest,
  densityTest,
  covariateBalance,
  tPValue,
  RUNNING_OPTIONS,
  OUTCOME_OPTIONS,
} from './src/services/rdd';
import type { FilterState } from './src/types';

console.log('tPValue(1.96, 1000) =', tPValue(1.96, 1000).toFixed(4), '(期望 ≈ 0.0502)');
console.log('tPValue(2.0, 60)    =', tPValue(2.0, 60).toFixed(4), '(期望 ≈ 0.0500)');
console.log('tPValue(0, 30)      =', tPValue(0, 30).toFixed(4), '(期望 = 1)');
console.log('tPValue(3.5, 5000)  =', tPValue(3.5, 5000).toExponential(3), '(期望 ≈ 4.7e-4)');

const ds = getDataset();
const f: FilterState = {
  fromDay: Math.max(0, ds.days - 30),
  toDay: ds.days - 1,
  channels: [],
  versions: [],
  regions: [],
};

for (const ro of RUNNING_OPTIONS) {
  for (const oo of OUTCOME_OPTIONS) {
    const t0 = Date.now();
    const sample = buildSample(ds, f, ro.key, oo.key);
    const cands = candidateBandwidths(sample, ro.cutoff);
    const bw = selectBandwidth(sample, ro.cutoff, 1, 'uniform', cands);
    const cfg = {
      running: ro.key,
      outcome: oo.key,
      cutoff: ro.cutoff,
      bandwidth: 'auto' as const,
      poly: 1 as const,
      kernel: 'uniform' as const,
    };
    const est = estimateRdd(sample, cfg);
    const ms = Date.now() - t0;
    if (!est) {
      console.log(`${ro.label} / ${oo.label}: 无法估计 (n=${sample.n})`);
      continue;
    }
    console.log(
      `${ro.label} / ${oo.label}: n=${sample.n} 候选带宽=${cands.length} h=${bw?.toFixed(2)} τ=${est.tau.toFixed(4)} se=${est.se.toFixed(4)} t=${est.t.toFixed(2)} p=${est.p.toFixed(4)} 左=${est.fitLeft.toFixed(3)} 右=${est.fitRight.toFixed(3)} nEff=${est.nEff} [${ms}ms]`,
    );
  }
  break;
}

// 主场景详细输出
const sample = buildSample(ds, f, 'level7', 'postActive');
const cfg = {
  running: 'level7' as const,
  outcome: 'postActive' as const,
  cutoff: 30,
  bandwidth: 'auto' as const,
  poly: 1 as const,
  kernel: 'uniform' as const,
};
const cands = candidateBandwidths(sample, 30);
console.log('\n候选带宽:', cands.map((c) => c.toFixed(1)).join(', '));
const bw = selectBandwidth(sample, 30, 1, 'uniform', cands);
console.log('CV 选中带宽:', bw);
const est = estimateRdd(sample, cfg)!;
console.log('估计:', {
  tau: +est.tau.toFixed(4),
  se: +est.se.toFixed(4),
  t: +est.t.toFixed(3),
  p: +est.p.toFixed(5),
  ci: [+est.ciLow.toFixed(4), +est.ciHigh.toFixed(4)],
  nLeft: est.nLeft,
  nRight: est.nRight,
  df: est.df,
  bandwidth: est.bandwidth,
  fitLeft: +est.fitLeft.toFixed(3),
  fitRight: +est.fitRight.toFixed(3),
});

for (const poly of [1, 2] as const) {
  for (const kernel of ['uniform', 'triangular'] as const) {
    const e = estimateRdd(sample, { ...cfg, poly, kernel });
    console.log(`poly=${poly} kernel=${kernel}: τ=${e?.tau.toFixed(4)} se=${e?.se.toFixed(4)} p=${e?.p.toFixed(5)} h=${e?.bandwidth.toFixed(2)}`);
  }
}

const bins = binMeans(sample, 30, est.bandwidth);
console.log('\n分箱均值:', bins.map((b) => `${b.x.toFixed(1)}:${b.y.toFixed(2)}(${b.n})`).join(' '));
const curve = fitCurve(sample, cfg, est.bandwidth, 5);
console.log('拟合左:', curve.left.map((p) => `${p.x.toFixed(1)}:${p.y.toFixed(2)}`).join(' '));
console.log('拟合右:', curve.right.map((p) => `${p.x.toFixed(1)}:${p.y.toFixed(2)}`).join(' '));

const sens = bandwidthSensitivity(sample, cfg);
console.log('\n带宽敏感性:', sens.length, '行');
for (const r of sens) console.log(`  h=${r.bandwidth.toFixed(2)} τ=${r.tau.toFixed(4)} p=${r.p.toFixed(4)} n=${r.nEff}${r.optimal ? '  ← CV 选中' : ''}`);

const pla = placeboTest(sample, cfg);
console.log('\n安慰剂检验:');
for (const r of pla) console.log(`  c=${r.cutoff} τ=${r.tau.toFixed(4)} p=${r.p.toFixed(4)}${r.real ? '  ← 真实断点' : ''}`);

const den = densityTest(sample, 30, est.bandwidth);
console.log('\n密度检验: θ=', den?.theta.toFixed(4), 'se=', den?.se.toFixed(4), 'z=', den?.z.toFixed(3), 'p=', den?.p.toFixed(4), 'bins=', den?.bins.length);

const cov = covariateBalance(sample, cfg);
console.log('协变量平衡:');
for (const c of cov) console.log(`  ${c.name}: τ=${c.tau.toFixed(4)} se=${c.se.toFixed(4)} p=${c.p.toFixed(4)}`);
console.log('剔除（观察期不足）:', sample.dropped);
