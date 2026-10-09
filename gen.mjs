var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// game-analytics/node_modules/dayjs/dayjs.min.js
var require_dayjs_min = __commonJS({
  "game-analytics/node_modules/dayjs/dayjs.min.js"(exports, module) {
    !function(t, e) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs = e();
    }(exports, function() {
      "use strict";
      var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t2) {
        var e2 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
        return "[" + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
      } }, m = function(t2, e2, n2) {
        var r2 = String(t2);
        return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
      }, v = { s: m, z: function(t2) {
        var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
        return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
      }, m: function t2(e2, n2) {
        if (e2.date() < n2.date()) return -t2(n2, e2);
        var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, c), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), c);
        return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
      }, a: function(t2) {
        return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
      }, p: function(t2) {
        return { M: c, y: h, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: f }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
      }, u: function(t2) {
        return void 0 === t2;
      } }, g = "en", D = {};
      D[g] = M;
      var p = "$isDayjsObject", S = function(t2) {
        return t2 instanceof _ || !(!t2 || !t2[p]);
      }, w = function t2(e2, n2, r2) {
        var i2;
        if (!e2) return g;
        if ("string" == typeof e2) {
          var s2 = e2.toLowerCase();
          D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
          var u2 = e2.split("-");
          if (!i2 && u2.length > 1) return t2(u2[0]);
        } else {
          var a2 = e2.name;
          D[a2] = e2, i2 = a2;
        }
        return !r2 && i2 && (g = i2), i2 || !r2 && g;
      }, O = function(t2, e2) {
        if (S(t2)) return t2.clone();
        var n2 = "object" == typeof e2 ? e2 : {};
        return n2.date = t2, n2.args = arguments, new _(n2);
      }, b = v;
      b.l = w, b.i = S, b.w = function(t2, e2) {
        return O(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
      };
      var _ = function() {
        function M2(t2) {
          this.$L = w(t2.locale, null, true), this.parse(t2), this.$x = this.$x || t2.x || {}, this[p] = true;
        }
        var m2 = M2.prototype;
        return m2.parse = function(t2) {
          this.$d = function(t3) {
            var e2 = t3.date, n2 = t3.utc;
            if (null === e2) return /* @__PURE__ */ new Date(NaN);
            if (b.u(e2)) return /* @__PURE__ */ new Date();
            if (e2 instanceof Date) return new Date(e2);
            if ("string" == typeof e2 && !/Z$/i.test(e2)) {
              var r2 = e2.match($);
              if (r2) {
                var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
                return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
              }
            }
            return new Date(e2);
          }(t2), this.init();
        }, m2.init = function() {
          var t2 = this.$d;
          this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
        }, m2.$utils = function() {
          return b;
        }, m2.isValid = function() {
          return !(this.$d.toString() === l);
        }, m2.isSame = function(t2, e2) {
          var n2 = O(t2);
          return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
        }, m2.isAfter = function(t2, e2) {
          return O(t2) < this.startOf(e2);
        }, m2.isBefore = function(t2, e2) {
          return this.endOf(e2) < O(t2);
        }, m2.$g = function(t2, e2, n2) {
          return b.u(t2) ? this[e2] : this.set(n2, t2);
        }, m2.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, m2.valueOf = function() {
          return this.$d.getTime();
        }, m2.startOf = function(t2, e2) {
          var n2 = this, r2 = !!b.u(e2) || e2, f2 = b.p(t2), l2 = function(t3, e3) {
            var i2 = b.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
            return r2 ? i2 : i2.endOf(a);
          }, $2 = function(t3, e3) {
            return b.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
          }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
          switch (f2) {
            case h:
              return r2 ? l2(1, 0) : l2(31, 11);
            case c:
              return r2 ? l2(1, M3) : l2(0, M3 + 1);
            case o:
              var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
              return l2(r2 ? m3 - D2 : m3 + (6 - D2), M3);
            case a:
            case d:
              return $2(v2 + "Hours", 0);
            case u:
              return $2(v2 + "Minutes", 1);
            case s:
              return $2(v2 + "Seconds", 2);
            case i:
              return $2(v2 + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, m2.endOf = function(t2) {
          return this.startOf(t2, false);
        }, m2.$set = function(t2, e2) {
          var n2, o2 = b.p(t2), f2 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a] = f2 + "Date", n2[d] = f2 + "Date", n2[c] = f2 + "Month", n2[h] = f2 + "FullYear", n2[u] = f2 + "Hours", n2[s] = f2 + "Minutes", n2[i] = f2 + "Seconds", n2[r] = f2 + "Milliseconds", n2)[o2], $2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
          if (o2 === c || o2 === h) {
            var y2 = this.clone().set(d, 1);
            y2.$d[l2]($2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
          } else l2 && this.$d[l2]($2);
          return this.init(), this;
        }, m2.set = function(t2, e2) {
          return this.clone().$set(t2, e2);
        }, m2.get = function(t2) {
          return this[b.p(t2)]();
        }, m2.add = function(r2, f2) {
          var d2, l2 = this;
          r2 = Number(r2);
          var $2 = b.p(f2), y2 = function(t2) {
            var e2 = O(l2);
            return b.w(e2.date(e2.date() + Math.round(t2 * r2)), l2);
          };
          if ($2 === c) return this.set(c, this.$M + r2);
          if ($2 === h) return this.set(h, this.$y + r2);
          if ($2 === a) return y2(1);
          if ($2 === o) return y2(7);
          var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[$2] || 1, m3 = this.$d.getTime() + r2 * M3;
          return b.w(m3, this);
        }, m2.subtract = function(t2, e2) {
          return this.add(-1 * t2, e2);
        }, m2.format = function(t2) {
          var e2 = this, n2 = this.$locale();
          if (!this.isValid()) return n2.invalidDate || l;
          var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = b.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, c2 = n2.months, f2 = n2.meridiem, h2 = function(t3, n3, i3, s3) {
            return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
          }, d2 = function(t3) {
            return b.s(s2 % 12 || 12, t3, "0");
          }, $2 = f2 || function(t3, e3, n3) {
            var r3 = t3 < 12 ? "AM" : "PM";
            return n3 ? r3.toLowerCase() : r3;
          };
          return r2.replace(y, function(t3, r3) {
            return r3 || function(t4) {
              switch (t4) {
                case "YY":
                  return String(e2.$y).slice(-2);
                case "YYYY":
                  return b.s(e2.$y, 4, "0");
                case "M":
                  return a2 + 1;
                case "MM":
                  return b.s(a2 + 1, 2, "0");
                case "MMM":
                  return h2(n2.monthsShort, a2, c2, 3);
                case "MMMM":
                  return h2(c2, a2);
                case "D":
                  return e2.$D;
                case "DD":
                  return b.s(e2.$D, 2, "0");
                case "d":
                  return String(e2.$W);
                case "dd":
                  return h2(n2.weekdaysMin, e2.$W, o2, 2);
                case "ddd":
                  return h2(n2.weekdaysShort, e2.$W, o2, 3);
                case "dddd":
                  return o2[e2.$W];
                case "H":
                  return String(s2);
                case "HH":
                  return b.s(s2, 2, "0");
                case "h":
                  return d2(1);
                case "hh":
                  return d2(2);
                case "a":
                  return $2(s2, u2, true);
                case "A":
                  return $2(s2, u2, false);
                case "m":
                  return String(u2);
                case "mm":
                  return b.s(u2, 2, "0");
                case "s":
                  return String(e2.$s);
                case "ss":
                  return b.s(e2.$s, 2, "0");
                case "SSS":
                  return b.s(e2.$ms, 3, "0");
                case "Z":
                  return i2;
              }
              return null;
            }(t3) || i2.replace(":", "");
          });
        }, m2.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m2.diff = function(r2, d2, l2) {
          var $2, y2 = this, M3 = b.p(d2), m3 = O(r2), v2 = (m3.utcOffset() - this.utcOffset()) * e, g2 = this - m3, D2 = function() {
            return b.m(y2, m3);
          };
          switch (M3) {
            case h:
              $2 = D2() / 12;
              break;
            case c:
              $2 = D2();
              break;
            case f:
              $2 = D2() / 3;
              break;
            case o:
              $2 = (g2 - v2) / 6048e5;
              break;
            case a:
              $2 = (g2 - v2) / 864e5;
              break;
            case u:
              $2 = g2 / n;
              break;
            case s:
              $2 = g2 / e;
              break;
            case i:
              $2 = g2 / t;
              break;
            default:
              $2 = g2;
          }
          return l2 ? $2 : b.a($2);
        }, m2.daysInMonth = function() {
          return this.endOf(c).$D;
        }, m2.$locale = function() {
          return D[this.$L];
        }, m2.locale = function(t2, e2) {
          if (!t2) return this.$L;
          var n2 = this.clone(), r2 = w(t2, e2, true);
          return r2 && (n2.$L = r2), n2;
        }, m2.clone = function() {
          return b.w(this.$d, this);
        }, m2.toDate = function() {
          return new Date(this.valueOf());
        }, m2.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, m2.toISOString = function() {
          return this.$d.toISOString();
        }, m2.toString = function() {
          return this.$d.toUTCString();
        }, M2;
      }(), Y = _.prototype;
      return O.prototype = Y, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c], ["$y", h], ["$D", d]].forEach(function(t2) {
        Y[t2[1]] = function(e2) {
          return this.$g(e2, t2[0], t2[1]);
        };
      }), O.extend = function(t2, e2) {
        return t2.$i || (t2(e2, _, O), t2.$i = true), O;
      }, O.locale = w, O.isDayjs = S, O.unix = function(t2) {
        return O(1e3 * t2);
      }, O.en = D[g], O.Ls = D, O.p = {}, O;
    });
  }
});

// game-analytics/src/data/generator.ts
var import_dayjs = __toESM(require_dayjs_min(), 1);

// game-analytics/src/data/constants.ts
var CHANNELS = [
  { id: "ocean", name: "\u5DE8\u91CF\u5F15\u64CE", type: "\u4E70\u91CF", quality: 0.88, cpa: 24, weight: 22 },
  { id: "tencentad", name: "\u817E\u8BAF\u5E7F\u544A", type: "\u4E70\u91CF", quality: 0.9, cpa: 22, weight: 18 },
  { id: "kuaishou", name: "\u5FEB\u624B\u78C1\u529B", type: "\u4E70\u91CF", quality: 0.82, cpa: 18, weight: 12 },
  { id: "baidu", name: "\u767E\u5EA6\u8425\u9500", type: "\u4E70\u91CF", quality: 0.8, cpa: 20, weight: 7 },
  { id: "xiaomi", name: "\u5C0F\u7C73\u5E94\u7528\u5546\u5E97", type: "\u5546\u5E97", quality: 1.06, cpa: 0, weight: 8 },
  { id: "huawei", name: "\u534E\u4E3A\u5E94\u7528\u5E02\u573A", type: "\u5546\u5E97", quality: 1.1, cpa: 0, weight: 9 },
  { id: "appstore", name: "App Store", type: "\u5546\u5E97", quality: 1.18, cpa: 0, weight: 7 },
  { id: "taptap", name: "TapTap", type: "\u81EA\u7136", quality: 1.28, cpa: 0, weight: 6 },
  { id: "bilibili", name: "\u54D4\u54E9\u54D4\u54E9", type: "\u81EA\u7136", quality: 1.22, cpa: 0, weight: 5 },
  { id: "organic", name: "\u81EA\u7136\u91CF", type: "\u81EA\u7136", quality: 1.12, cpa: 0, weight: 6 }
];
var CHANNEL_MAP = Object.fromEntries(
  CHANNELS.map((c) => [c.id, c])
);
var VERSIONS = ["1.4.2", "1.4.1", "1.4.0", "1.3.6", "1.3.2", "1.2.8"];
var VERSION_WEIGHTS = [46, 18, 12, 10, 8, 6];
var REGIONS = [
  "\u5E7F\u4E1C",
  "\u6C5F\u82CF",
  "\u6D59\u6C5F",
  "\u5C71\u4E1C",
  "\u6CB3\u5357",
  "\u56DB\u5DDD",
  "\u6E56\u5317",
  "\u6E56\u5357",
  "\u6CB3\u5317",
  "\u798F\u5EFA",
  "\u4E0A\u6D77",
  "\u5317\u4EAC",
  "\u5B89\u5FBD",
  "\u9655\u897F",
  "\u8FBD\u5B81",
  "\u6C5F\u897F",
  "\u91CD\u5E86",
  "\u5E7F\u897F",
  "\u5C71\u897F",
  "\u4E91\u5357",
  "\u4E2D\u56FD\u9999\u6E2F",
  "\u4E2D\u56FD\u53F0\u6E7E",
  "\u6D77\u5916"
];
var REGION_WEIGHTS = [
  13,
  9,
  9,
  8,
  7,
  6,
  5,
  5,
  5,
  5,
  4,
  4,
  4,
  3,
  3,
  3,
  3,
  2,
  2,
  2,
  1,
  1,
  3
];
var PAY_TIERS = [
  6,
  12,
  25,
  30,
  45,
  68,
  98,
  128,
  198,
  328,
  648,
  1298,
  3298
];
var PAY_TIER_WEIGHTS = [26, 18, 12, 11, 9, 7, 6, 4, 3, 2, 1.4, 0.45, 0.15];
var PRODUCT_NAMES = [
  "\u65B0\u624B\u793C\u5305",
  "\u6708\u5361",
  "\u6210\u957F\u57FA\u91D1",
  "\u94BB\u77F3\xD7600",
  "\u94BB\u77F3\xD71280",
  "\u9650\u5B9A\u76AE\u80A4",
  "\u6218\u4EE4\u8FDB\u9636",
  "\u94BB\u77F3\xD73280",
  "\u81F3\u5C0A\u5B9D\u7BB1",
  "\u8D5B\u5B63\u901A\u884C\u8BC1"
];
var IOS_DEVICES = [
  "iPhone 15 Pro Max",
  "iPhone 15 Pro",
  "iPhone 15",
  "iPhone 14 Pro",
  "iPhone 14",
  "iPhone 13",
  "iPhone 12",
  "iPad Pro 11"
];
var IOS_WEIGHTS = [18, 16, 20, 14, 12, 9, 7, 4];
var ANDROID_DEVICES = [
  "Xiaomi 14",
  "Redmi K70",
  "HUAWEI Mate 60",
  "HUAWEI P60",
  " vivo X100",
  "OPPO Find X7",
  "iQOO 12",
  "OnePlus 12",
  "Honor Magic6",
  "realme GT5"
];
var ANDROID_WEIGHTS = [14, 16, 13, 11, 10, 9, 8, 7, 7, 5];
var IOS_SHARE = 0.31;
var RETENTION_R1 = 0.42;
var RETENTION_K = 0.42;
var BASE_PAY_RATE = 0.095;
var LEVEL_CUTOFF = 30;
var UNLOCK_RETENTION_BOOST = 1.5;
var UNLOCK_PAY_BOOST = 1.4;
var UNLOCK_EFFECT_FROM = 8;

// game-analytics/src/data/random.ts
function createRng(seed) {
  let a = seed >>> 0;
  return function rng() {
    a = a + 1831565813 >>> 0;
    let t = a;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function randRange(rng, min, max) {
  return min + rng() * (max - min);
}
function weightedPick(rng, weights) {
  let total = 0;
  for (const w of weights) total += w;
  let r = rng() * total;
  for (let i = 0; i < weights.length; i++) {
    r -= weights[i];
    if (r <= 0) return i;
  }
  return weights.length - 1;
}
function randNormal(rng) {
  let u = 0;
  let v = 0;
  while (u === 0) u = rng();
  while (v === 0) v = rng();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

// game-analytics/src/data/generator.ts
var DAYS = 90;
var SEED = 20260831;
var UPDATE_DAYS = [20, 52];
var PULSE_FACTOR = [1.42, 1.26, 1.13, 1.05];
var GUIDE_RATES = [0.93, 0.87, 0.8, 0.73, 0.66];
var HOUR_WEIGHTS = [
  0.28,
  0.2,
  0.15,
  0.12,
  0.11,
  0.13,
  0.2,
  0.32,
  0.42,
  0.5,
  0.56,
  0.62,
  0.7,
  0.66,
  0.6,
  0.62,
  0.68,
  0.76,
  0.85,
  0.94,
  1,
  0.96,
  0.72,
  0.46
];
var CHANNEL_WEIGHTS = CHANNELS.map((c) => c.weight);
function pulseAt(day) {
  let f = 1;
  for (const u of UPDATE_DAYS) {
    const gap = day - u;
    if (gap >= 0 && gap < PULSE_FACTOR.length) f *= PULSE_FACTOR[gap];
  }
  return f;
}
function generateDataset() {
  const rng = createRng(SEED);
  const end = (0, import_dayjs.default)();
  const start = end.subtract(DAYS - 1, "day");
  const decay = new Float64Array(DAYS);
  for (let n = 1; n < DAYS; n++) decay[n] = Math.pow(n, -RETENTION_K);
  const dailyNew = new Array(DAYS);
  for (let d = 0; d < DAYS; d++) {
    const dow = start.add(d, "day").day();
    const weekend = dow === 0 || dow === 6 ? 1.24 : 1;
    const trend = 1 + d / (DAYS - 1) * 0.45;
    const noise = 1 + randNormal(rng) * 0.07;
    dailyNew[d] = Math.max(30, Math.round(430 * weekend * trend * pulseAt(d) * noise));
  }
  const users = [];
  const orders = [];
  const ordersByDay = new Array(DAYS).fill(0);
  let userId = 0;
  let orderSeq = 0;
  for (let d = 0; d < DAYS; d++) {
    const count = dailyNew[d];
    for (let i = 0; i < count; i++) {
      const id = userId++;
      const channel = CHANNELS[weightedPick(rng, CHANNEL_WEIGHTS)];
      const version = VERSIONS[weightedPick(rng, VERSION_WEIGHTS)];
      const region = REGIONS[weightedPick(rng, REGION_WEIGHTS)];
      const ios = rng() < IOS_SHARE;
      const device = ios ? IOS_DEVICES[weightedPick(rng, IOS_WEIGHTS)] : ANDROID_DEVICES[weightedPick(rng, ANDROID_WEIGHTS)];
      const q = channel.quality * (0.25 + 2.7 * Math.pow(rng(), 2.6));
      let guideStep = 0;
      for (const rate of GUIDE_RATES) {
        if (rng() < rate * Math.min(1.15, q * 0.92)) guideStep++;
        else break;
      }
      const maxGap = DAYS - 1 - d;
      const activeDays = [d];
      const earlyEnd = Math.min(UNLOCK_EFFECT_FROM - 1, maxGap);
      for (let n = 1; n <= earlyEnd; n++) {
        const p = RETENTION_R1 * decay[n] * q;
        if (p > 0 && rng() < Math.min(0.95, p)) activeDays.push(d + n);
      }
      let earlyActive = 0;
      for (const ad of activeDays) if (ad <= d + UNLOCK_EFFECT_FROM - 1) earlyActive++;
      const level7 = maxGap >= UNLOCK_EFFECT_FROM - 1 ? Math.min(60, 1 + Math.floor(earlyActive * 4.2 + guideStep * 2.4 + rng() * 6)) : 0;
      const unlocked = level7 >= LEVEL_CUTOFF;
      for (let n = UNLOCK_EFFECT_FROM; n <= maxGap; n++) {
        const p = RETENTION_R1 * decay[n] * q * (unlocked ? UNLOCK_RETENTION_BOOST : 1);
        if (p > 0 && rng() < Math.min(0.95, p)) activeDays.push(d + n);
      }
      const activeCount = activeDays.length;
      const payChance = BASE_PAY_RATE * Math.pow(channel.quality, 1.6) * (0.35 + 0.65 * Math.min(activeCount, 14) / 14) * (unlocked ? UNLOCK_PAY_BOOST : 1);
      const isPayer = rng() < payChance;
      let totalPay = 0;
      let payCount = 0;
      let firstPayDay = -1;
      if (isPayer && activeCount > 0) {
        const payPower = Math.pow(rng(), 3.2);
        const expectedCount = payPower * 8 + 0.35;
        const rawCount = 1 + Math.floor(expectedCount * -Math.log(1 - rng() * 0.999));
        payCount = Math.min(42, Math.max(1, rawCount));
        const bias = payPower * 3;
        const tierCount = PAY_TIERS.length;
        const tiers = new Array(tierCount);
        for (let t = 0; t < tierCount; t++) {
          const skew = Math.exp(bias * (t / (tierCount - 1) * 2 - 1) * 0.85);
          tiers[t] = PAY_TIER_WEIGHTS[t] * skew;
        }
        for (let k = 0; k < payCount; k++) {
          const idx = k === 0 ? Math.floor(activeCount * Math.pow(rng(), 2)) : Math.floor(rng() * activeCount);
          const day = activeDays[Math.min(idx, activeCount - 1)];
          const amount = PAY_TIERS[weightedPick(rng, tiers)];
          totalPay += amount;
          ordersByDay[day] += amount;
          if (k === 0) firstPayDay = day;
          orders.push({
            id: `ORD${String(++orderSeq).padStart(7, "0")}`,
            userId: id,
            day,
            amount,
            product: PRODUCT_NAMES[Math.floor(rng() * PRODUCT_NAMES.length)],
            channel: channel.id
          });
        }
      }
      const level = Math.max(
        level7,
        Math.min(80, 1 + Math.floor(activeCount * 0.9 + totalPay / 60 + rng() * 6))
      );
      users.push({
        id,
        uid: `P${String(1e7 + id).slice(1)}`,
        regDay: d,
        channel: channel.id,
        version,
        region,
        os: ios ? "iOS" : "Android",
        device,
        activeDays,
        isPayer,
        firstPayDay,
        totalPay: Math.round(totalPay * 100) / 100,
        payCount,
        level,
        level7,
        guideStep
      });
    }
  }
  const newByChannelDay = /* @__PURE__ */ new Map();
  for (const ch of CHANNELS) newByChannelDay.set(ch.id, new Array(DAYS).fill(0));
  for (const u of users) {
    const arr = newByChannelDay.get(u.channel);
    if (arr) arr[u.regDay] += 1;
  }
  const costs = [];
  for (const ch of CHANNELS) {
    if (ch.cpa <= 0) continue;
    const arr = newByChannelDay.get(ch.id);
    if (!arr) continue;
    for (let d = 0; d < DAYS; d++) {
      const installs = arr[d];
      if (installs === 0) continue;
      const cpa = ch.cpa * randRange(rng, 0.82, 1.22) * (1 + d / DAYS * 0.28);
      const cost = installs * cpa;
      const cpm = randRange(rng, 18, 34);
      const impressions = Math.round(cost / cpm * 1e3);
      const ctr = randRange(rng, 0.012, 0.031);
      costs.push({
        day: d,
        channel: ch.id,
        cost: Math.round(cost * 100) / 100,
        impressions,
        clicks: Math.round(impressions * ctr)
      });
    }
  }
  const lastDay = DAYS - 1;
  let lastDau = 0;
  for (const u of users) {
    const arr = u.activeDays;
    if (arr.length && arr[arr.length - 1] >= lastDay && binarySearch(arr, lastDay)) lastDau++;
  }
  const pcu = lastDau * 0.19;
  const todayOnline = HOUR_WEIGHTS.map((w) => Math.round(pcu * w * randRange(rng, 0.94, 1.06)));
  return {
    startDate: start.format("YYYY-MM-DD"),
    days: DAYS,
    channels: CHANNELS,
    versions: VERSIONS,
    regions: REGIONS,
    users,
    orders,
    costs,
    todayOnline
  };
}
var singleton = null;
function getDataset() {
  if (!singleton) singleton = generateDataset();
  return singleton;
}
function binarySearch(sorted, target) {
  let lo = 0;
  let hi = sorted.length - 1;
  while (lo <= hi) {
    const mid = lo + hi >> 1;
    if (sorted[mid] === target) return true;
    if (sorted[mid] < target) lo = mid + 1;
    else hi = mid - 1;
  }
  return false;
}
export {
  binarySearch,
  generateDataset,
  getDataset
};
