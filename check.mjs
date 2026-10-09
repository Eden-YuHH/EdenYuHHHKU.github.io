import { generateDataset } from './gen.mjs';

const ds = generateDataset();
console.log('users', ds.users.length, 'orders', ds.orders.length, 'days', ds.days);

let elig = 0;
let treated = 0;
const hist = new Map();
for (const u of ds.users) {
  if (u.regDay > ds.days - 1 - 14) continue;
  if (u.level7 <= 0) continue;
  elig++;
  if (u.level7 >= 30) treated++;
  const k = Math.floor(u.level7 / 5) * 5;
  hist.set(k, (hist.get(k) || 0) + 1);
}
console.log('eligible(观察期>=14天)', elig, '| treated', treated, '| share', (treated / elig * 100).toFixed(2) + '%');
console.log('level7 分布(每5级):');
for (const k of [...hist.keys()].sort((a, b) => a - b)) console.log('  ', k + '-' + (k + 4), hist.get(k));

for (const h of [3, 5, 8, 12]) {
  let n = 0;
  for (const u of ds.users) {
    if (u.regDay > ds.days - 1 - 14) continue;
    if (Math.abs(u.level7 - 30) <= h) n++;
  }
  console.log('带宽 ±' + h + ' 样本', n);
}

function outcome(u) {
  let c = 0;
  for (const d of u.activeDays) if (d >= u.regDay + 8 && d <= u.regDay + 14) c++;
  return c;
}
let sT = 0, nT = 0, sC = 0, nC = 0;
for (const u of ds.users) {
  if (u.regDay > ds.days - 1 - 14) continue;
  const o = outcome(u);
  if (u.level7 >= 30) { sT += o; nT++; } else { sC += o; nC++; }
}
console.log('D8-D14 活跃天数: 处理组', (sT / nT).toFixed(3), 'n=' + nT, '| 控制组', (sC / nC).toFixed(3), 'n=' + nC);

// 局部对比：断点附近 ±3
let a = 0, na = 0, b = 0, nb = 0;
for (const u of ds.users) {
  if (u.regDay > ds.days - 1 - 14) continue;
  const d = u.level7 - 30;
  if (d < -3 || d > 2) continue;
  if (u.level7 >= 30) { a += outcome(u); na++; } else { b += outcome(u); nb++; }
}
console.log('局部 ±3: 右侧', (a / na).toFixed(3), 'n=' + na, '| 左侧', (b / nb).toFixed(3), 'n=' + nb);
