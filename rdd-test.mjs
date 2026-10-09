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

// node_modules/dayjs/dayjs.min.js
var require_dayjs_min = __commonJS({
  "node_modules/dayjs/dayjs.min.js"(exports, module) {
    !function(t, e) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs = e();
    }(exports, function() {
      "use strict";
      var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f2 = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t2) {
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
        return { M: c, y: h, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: f2 }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
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
          var n2 = this, r2 = !!b.u(e2) || e2, f3 = b.p(t2), l2 = function(t3, e3) {
            var i2 = b.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
            return r2 ? i2 : i2.endOf(a);
          }, $2 = function(t3, e3) {
            return b.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
          }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
          switch (f3) {
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
          var n2, o2 = b.p(t2), f3 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a] = f3 + "Date", n2[d] = f3 + "Date", n2[c] = f3 + "Month", n2[h] = f3 + "FullYear", n2[u] = f3 + "Hours", n2[s] = f3 + "Minutes", n2[i] = f3 + "Seconds", n2[r] = f3 + "Milliseconds", n2)[o2], $2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
          if (o2 === c || o2 === h) {
            var y2 = this.clone().set(d, 1);
            y2.$d[l2]($2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
          } else l2 && this.$d[l2]($2);
          return this.init(), this;
        }, m2.set = function(t2, e2) {
          return this.clone().$set(t2, e2);
        }, m2.get = function(t2) {
          return this[b.p(t2)]();
        }, m2.add = function(r2, f3) {
          var d2, l2 = this;
          r2 = Number(r2);
          var $2 = b.p(f3), y2 = function(t2) {
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
          var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = b.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, c2 = n2.months, f3 = n2.meridiem, h2 = function(t3, n3, i3, s3) {
            return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
          }, d2 = function(t3) {
            return b.s(s2 % 12 || 12, t3, "0");
          }, $2 = f3 || function(t3, e3, n3) {
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
            case f2:
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

// src/data/generator.ts
var import_dayjs = __toESM(require_dayjs_min(), 1);

// src/data/constants.ts
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
var RDD_WINDOW = 14;

// src/data/random.ts
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

// src/data/generator.ts
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
  let f2 = 1;
  for (const u of UPDATE_DAYS) {
    const gap = day - u;
    if (gap >= 0 && gap < PULSE_FACTOR.length) f2 *= PULSE_FACTOR[gap];
  }
  return f2;
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

// src/utils/format.ts
var import_dayjs2 = __toESM(require_dayjs_min(), 1);

// src/services/analytics.ts
function toSet(arr) {
  return arr.length ? new Set(arr) : null;
}
function buildRegMask(ds2, f2) {
  const mask = new Uint8Array(ds2.users.length);
  const ch = toSet(f2.channels);
  const ver = toSet(f2.versions);
  const reg = toSet(f2.regions);
  for (let i = 0; i < ds2.users.length; i++) {
    const u = ds2.users[i];
    if (u.regDay < f2.fromDay || u.regDay > f2.toDay) continue;
    if (ch && !ch.has(u.channel)) continue;
    if (ver && !ver.has(u.version)) continue;
    if (reg && !reg.has(u.region)) continue;
    mask[i] = 1;
  }
  return mask;
}

// src/services/rdd.ts
var RUNNING_OPTIONS = [
  {
    key: "level7",
    label: "D7 \u89D2\u8272\u7B49\u7EA7",
    cutoff: 30,
    predetermined: true,
    hint: "\u5185\u7F6E\u89C4\u5219\uFF1AD7 \u7B49\u7EA7 \u2265 30 \u81EA\u52A8\u89E3\u9501\u300C\u79D8\u5883\u8FDC\u5F81\u300D\u3002\u7B49\u7EA7\u5728\u5E72\u9884\u524D\u7ED3\u7B97\uFF0C\u4E25\u683C\u524D\u5B9A\u3002"
  },
  {
    key: "first7",
    label: "\u524D 7 \u5929\u6D3B\u8DC3\u5929\u6570",
    cutoff: 5,
    predetermined: true,
    hint: "\u540C\u4E3A D7 \u7ED3\u7B97\u7684\u524D\u5B9A\u53D8\u91CF\uFF0C\u53EF\u4F5C\u4E3A\u914D\u7F6E\u53D8\u91CF\u7684\u7A33\u5065\u6027\u66FF\u4EE3\u3002"
  },
  {
    key: "guideStep",
    label: "\u65B0\u624B\u5F15\u5BFC\u8FDB\u5EA6",
    cutoff: 4,
    predetermined: true,
    hint: "\u5F15\u5BFC\u5B8C\u6210\u5EA6 0-5\uFF0C\u53D6\u503C\u7A00\u758F\uFF0C\u5E26\u5BBD\u5185\u9700\u4FDD\u7559\u8DB3\u591F\u591A\u7684\u53D6\u503C\u70B9\u3002"
  },
  {
    key: "level",
    label: "\u5F53\u524D\u7B49\u7EA7\uFF08\u5185\u751F\uFF09",
    cutoff: 40,
    predetermined: false,
    hint: "\u5F53\u524D\u7B49\u7EA7\u4F1A\u88AB\u5E72\u9884\u540E\u7684\u884C\u4E3A\u53CD\u5411\u5F71\u54CD\uFF0C\u4E0D\u6EE1\u8DB3\u524D\u5B9A\u6027\uFF0C\u4EC5\u4F5C\u5BF9\u7167\u6F14\u793A\u3002"
  }
];
var OUTCOME_OPTIONS = [
  { key: "postActive", label: "\u7B2C 8\u201314 \u5929\u6D3B\u8DC3\u5929\u6570", unit: "\u5929", binary: false },
  { key: "retained814", label: "\u7B2C 8\u201314 \u5929\u662F\u5426\u7559\u5B58", unit: "", binary: true },
  { key: "pay14", label: "\u6CE8\u518C\u540E 14 \u5929\u7D2F\u8BA1\u4ED8\u8D39", unit: "\u5143", binary: false },
  { key: "payer14", label: "14 \u5929\u5185\u662F\u5426\u4ED8\u8D39", unit: "", binary: true }
];
var LANCZOS = [
  76.18009172947146,
  -86.50532032941678,
  24.01409824083091,
  -1.231739572450155,
  0.001208650973866179,
  -5395239384953e-18
];
function logGamma(x) {
  let y = x;
  const tmp = x + 5.5 - (x + 0.5) * Math.log(x + 5.5);
  let ser = 1.000000000190015;
  for (let j = 0; j < 6; j++) {
    y += 1;
    ser += LANCZOS[j] / y;
  }
  return -tmp + Math.log(2.5066282746310007 * ser / x);
}
function betaCf(a, b, x) {
  const MAXIT = 300;
  const EPS = 3e-12;
  const FPMIN = 1e-300;
  const qab = a + b;
  const qap = a + 1;
  const qam = a - 1;
  let c = 1;
  let d = 1 - qab * x / qap;
  if (Math.abs(d) < FPMIN) d = FPMIN;
  d = 1 / d;
  let h = d;
  for (let m = 1; m <= MAXIT; m++) {
    const m2 = 2 * m;
    let aa = m * (b - m) * x / ((qam + m2) * (a + m2));
    d = 1 + aa * d;
    if (Math.abs(d) < FPMIN) d = FPMIN;
    c = 1 + aa / c;
    if (Math.abs(c) < FPMIN) c = FPMIN;
    d = 1 / d;
    h *= d * c;
    aa = -(a + m) * (qab + m) * x / ((a + m2) * (qap + m2));
    d = 1 + aa * d;
    if (Math.abs(d) < FPMIN) d = FPMIN;
    c = 1 + aa / c;
    if (Math.abs(c) < FPMIN) c = FPMIN;
    d = 1 / d;
    const del = d * c;
    h *= del;
    if (Math.abs(del - 1) < EPS) break;
  }
  return h;
}
function betai(a, b, x) {
  if (x <= 0) return 0;
  if (x >= 1) return 1;
  const bt = Math.exp(
    logGamma(a + b) - logGamma(a) - logGamma(b) + a * Math.log(x) + b * Math.log(1 - x)
  );
  if (x < (a + 1) / (a + b + 2)) return bt * betaCf(a, b, x) / a;
  return 1 - bt * betaCf(b, a, 1 - x) / b;
}
function tPValue(t, df) {
  if (!Number.isFinite(t) || df <= 0) return 1;
  const x = df / (df + t * t);
  return Math.min(1, Math.max(0, betai(df / 2, 0.5, x)));
}
function tCritical(df, level = 0.05) {
  let lo = 0;
  let hi = 100;
  for (let i = 0; i < 80; i++) {
    const mid = (lo + hi) / 2;
    if (tPValue(mid, df) > level) lo = mid;
    else hi = mid;
  }
  return (lo + hi) / 2;
}
function invertMatrix(A, k) {
  const M = [];
  for (let i = 0; i < k; i++) {
    const row = new Array(2 * k).fill(0);
    for (let j = 0; j < k; j++) row[j] = A[i][j];
    row[k + i] = 1;
    M.push(row);
  }
  for (let col = 0; col < k; col++) {
    let piv = col;
    for (let r = col + 1; r < k; r++) {
      if (Math.abs(M[r][col]) > Math.abs(M[piv][col])) piv = r;
    }
    if (Math.abs(M[piv][col]) < 1e-10) return null;
    if (piv !== col) {
      const t = M[piv];
      M[piv] = M[col];
      M[col] = t;
    }
    const d = M[col][col];
    for (let j = 0; j < 2 * k; j++) M[col][j] /= d;
    for (let r = 0; r < k; r++) {
      if (r === col) continue;
      const f2 = M[r][col];
      if (f2 === 0) continue;
      for (let j = 0; j < 2 * k; j++) M[r][j] -= f2 * M[col][j];
    }
  }
  return M.map((row) => row.slice(k));
}
function fillDesign(z, d, poly) {
  z.fill(0);
  const right = d >= 0 ? 1 : 0;
  const base = right * (poly + 1);
  z[base] = 1;
  let p = d;
  for (let q = 1; q <= poly; q++) {
    z[base + q] = p;
    p *= d;
  }
}
function kernelWeight(u, kernel) {
  if (u > 1) return 0;
  return kernel === "uniform" ? 1 : 1 - u;
}
function fitLocal(x, y, n, cutoff, h, poly, kernel, withVcov) {
  if (!(h > 0)) return null;
  const k = 2 * (poly + 1);
  const A = Array.from({ length: k }, () => new Array(k).fill(0));
  const b = new Array(k).fill(0);
  const z = new Array(k).fill(0);
  const idx = [];
  const w = new Float64Array(n);
  let nLeft = 0;
  let nRight = 0;
  for (let i = 0; i < n; i++) {
    const d = x[i] - cutoff;
    const wi = kernelWeight(Math.abs(d) / h, kernel);
    if (wi <= 0) continue;
    w[i] = wi;
    idx.push(i);
    if (d < 0) nLeft++;
    else nRight++;
    fillDesign(z, d, poly);
    for (let r = 0; r < k; r++) {
      const wz = wi * z[r];
      if (wz === 0) continue;
      for (let s = r; s < k; s++) A[r][s] += wz * z[s];
      b[r] += wz * y[i];
    }
  }
  const nEff = idx.length;
  if (nLeft < poly + 5 || nRight < poly + 5 || nEff < 4 * k) return null;
  for (let r = 0; r < k; r++) {
    for (let s = r + 1; s < k; s++) A[s][r] = A[r][s];
  }
  const Ainv = invertMatrix(A, k);
  if (!Ainv) return null;
  const beta = new Array(k).fill(0);
  for (let r = 0; r < k; r++) {
    let s = 0;
    for (let c = 0; c < k; c++) s += Ainv[r][c] * b[c];
    beta[r] = s;
  }
  const resid = new Float64Array(n);
  const hat = new Float64Array(n);
  const meat = withVcov ? Array.from({ length: k }, () => new Array(k).fill(0)) : [];
  for (const i of idx) {
    const d = x[i] - cutoff;
    fillDesign(z, d, poly);
    let pred = 0;
    for (let r = 0; r < k; r++) pred += z[r] * beta[r];
    const e = y[i] - pred;
    resid[i] = e;
    let hii = 0;
    for (let r = 0; r < k; r++) {
      let s = 0;
      for (let c = 0; c < k; c++) s += Ainv[r][c] * z[c];
      hii += z[r] * s;
    }
    hii *= w[i];
    hat[i] = hii;
    if (withVcov) {
      const w2e2 = w[i] * w[i] * e * e;
      for (let r = 0; r < k; r++) {
        const wz = w2e2 * z[r];
        if (wz === 0) continue;
        for (let s = r; s < k; s++) meat[r][s] += wz * z[s];
      }
    }
  }
  let vcov = null;
  if (withVcov) {
    for (let r = 0; r < k; r++) {
      for (let s = r + 1; s < k; s++) meat[s][r] = meat[r][s];
    }
    const scale = nEff / Math.max(1, nEff - k);
    vcov = Array.from({ length: k }, () => new Array(k).fill(0));
    for (let r = 0; r < k; r++) {
      for (let s = 0; s < k; s++) {
        let sum = 0;
        for (let p = 0; p < k; p++) {
          const ap = Ainv[r][p];
          if (ap === 0) continue;
          for (let q = 0; q < k; q++) sum += ap * meat[p][q] * Ainv[q][s];
        }
        vcov[r][s] = sum * scale;
      }
    }
  }
  return { beta, vcov, nEff, nLeft, nRight, df: Math.max(1, nEff - k), resid, hat, idx };
}
function extractTau(fit, poly, alpha = 0.05) {
  const r = poly + 1;
  const tau = fit.beta[r] - fit.beta[0];
  let se = NaN;
  if (fit.vcov) {
    const v = fit.vcov;
    const varTau = v[r][r] + v[0][0] - 2 * v[0][r];
    se = varTau > 0 ? Math.sqrt(varTau) : NaN;
  }
  const t = se > 0 ? tau / se : NaN;
  const p = Number.isFinite(t) ? tPValue(t, fit.df) : 1;
  const tc = tCritical(fit.df, alpha);
  return { tau, se, t, p, ciLow: tau - tc * se, ciHigh: tau + tc * se };
}
var sampleCache = /* @__PURE__ */ new Map();
function sampleKey(f2, running, outcome) {
  return [
    f2.fromDay,
    f2.toDay,
    f2.channels.join(","),
    f2.versions.join(","),
    f2.regions.join(","),
    running,
    outcome
  ].join("|");
}
function buildSample(ds2, f2, running, outcome) {
  const key = sampleKey(f2, running, outcome);
  const hit = sampleCache.get(key);
  if (hit) return hit;
  const mask = buildRegMask(ds2, f2);
  const userCount = ds2.users.length;
  const lastDay = ds2.days - 1;
  const payWindow = new Float64Array(userCount);
  for (const o of ds2.orders) {
    const u = ds2.users[o.userId];
    const offset = o.day - u.regDay;
    if (offset < 0 || offset > RDD_WINDOW) continue;
    payWindow[o.userId] += o.amount;
  }
  const xs = [];
  const ys = [];
  const qs = [];
  const rs = [];
  let dropped = 0;
  for (let i = 0; i < userCount; i++) {
    if (!mask[i]) continue;
    const u = ds2.users[i];
    if (u.regDay + RDD_WINDOW > lastDay) {
      dropped++;
      continue;
    }
    let x2;
    if (running === "level7") x2 = u.level7;
    else if (running === "level") x2 = u.level;
    else if (running === "guideStep") x2 = u.guideStep;
    else {
      let c = 0;
      for (const d of u.activeDays) {
        if (d <= u.regDay + UNLOCK_EFFECT_FROM - 1) c++;
        else break;
      }
      x2 = c;
    }
    if (!Number.isFinite(x2)) continue;
    let y2;
    if (outcome === "postActive" || outcome === "retained814") {
      let c = 0;
      for (const d of u.activeDays) {
        if (d >= u.regDay + UNLOCK_EFFECT_FROM && d <= u.regDay + RDD_WINDOW) c++;
      }
      y2 = outcome === "postActive" ? c : c > 0 ? 1 : 0;
    } else if (outcome === "pay14") {
      y2 = payWindow[i];
    } else {
      y2 = payWindow[i] > 0 ? 1 : 0;
    }
    xs.push(x2);
    ys.push(y2);
    qs.push(CHANNEL_MAP[u.channel]?.quality ?? 1);
    rs.push(u.regDay);
  }
  const n = xs.length;
  const x = new Float64Array(xs);
  const y = new Float64Array(ys);
  let xMin = Infinity;
  let xMax = -Infinity;
  const set = /* @__PURE__ */ new Set();
  for (let i = 0; i < n; i++) {
    if (x[i] < xMin) xMin = x[i];
    if (x[i] > xMax) xMax = x[i];
    set.add(x[i]);
  }
  const sample2 = {
    n,
    x,
    y,
    covQuality: new Float64Array(qs),
    covRegDay: new Float64Array(rs),
    xMin: n ? xMin : 0,
    xMax: n ? xMax : 0,
    values: [...set].sort((a, b) => a - b),
    dropped
  };
  if (sampleCache.size > 40) sampleCache.clear();
  sampleCache.set(key, sample2);
  return sample2;
}
function candidateBandwidths(sample2, cutoff) {
  const vals = sample2.values;
  if (vals.length < 6) return [];
  const out = [];
  const maxStep = Math.floor((vals.length - 2) / 2);
  const distAt = (m) => {
    let left = 0;
    let right = 0;
    let lCount = 0;
    let rCount = 0;
    for (let i = vals.length - 1; i >= 0; i--) {
      if (vals[i] < cutoff && lCount < m) {
        left = cutoff - vals[i];
        lCount++;
      }
    }
    for (let i = 0; i < vals.length; i++) {
      if (vals[i] >= cutoff && rCount < m) {
        right = vals[i] - cutoff;
        rCount++;
      }
    }
    if (lCount < m || rCount < m) return null;
    return Math.max(left, right, 1e-6);
  };
  const span = Math.min(cutoff - sample2.xMin, sample2.xMax - cutoff);
  const cap = Math.max(span * 0.6, (sample2.xMax - sample2.xMin) * 0.05);
  const start = 3;
  for (let m = start; m <= maxStep; m++) {
    const h = distAt(m);
    if (h === null || h > cap) break;
    if (!out.length || h > out[out.length - 1] * 1.02) out.push(h);
  }
  return out;
}
function selectBandwidth(sample2, cutoff, poly, kernel, candidates) {
  let best = null;
  let bestCv = Infinity;
  for (const h of candidates) {
    const fit = fitLocal(sample2.x, sample2.y, sample2.n, cutoff, h, poly, kernel, false);
    if (!fit) continue;
    let sum = 0;
    let cnt = 0;
    for (const i of fit.idx) {
      const denom = 1 - fit.hat[i];
      if (denom < 1e-4) continue;
      const loo = fit.resid[i] / denom;
      sum += loo * loo;
      cnt++;
    }
    if (cnt < fit.idx.length * 0.9) continue;
    const cv = sum / cnt;
    if (cv < bestCv) {
      bestCv = cv;
      best = h;
    }
  }
  return best;
}
function fallbackBandwidth(candidates) {
  if (!candidates.length) return 1;
  return candidates[Math.min(candidates.length - 1, Math.floor(candidates.length / 3))];
}
function resolveBandwidth(sample2, cfg2) {
  const candidates = candidateBandwidths(sample2, cfg2.cutoff);
  if (cfg2.bandwidth !== "auto") {
    return { bandwidth: cfg2.bandwidth, candidates, auto: false };
  }
  const picked = selectBandwidth(sample2, cfg2.cutoff, cfg2.poly, cfg2.kernel, candidates);
  return {
    bandwidth: picked ?? fallbackBandwidth(candidates),
    candidates,
    auto: true
  };
}
function estimateRdd(sample2, cfg2) {
  const { bandwidth } = resolveBandwidth(sample2, cfg2);
  const fit = fitLocal(
    sample2.x,
    sample2.y,
    sample2.n,
    cfg2.cutoff,
    bandwidth,
    cfg2.poly,
    cfg2.kernel,
    true
  );
  if (!fit) return null;
  const stat = extractTau(fit, cfg2.poly);
  return {
    cutoff: cfg2.cutoff,
    bandwidth,
    poly: cfg2.poly,
    kernel: cfg2.kernel,
    fitLeft: fit.beta[0],
    fitRight: fit.beta[cfg2.poly + 1],
    nLeft: fit.nLeft,
    nRight: fit.nRight,
    nEff: fit.nEff,
    df: fit.df,
    ...stat
  };
}
function binMeans(sample2, cutoff, bandwidth, binsPerSide = 12) {
  const out = [];
  for (const side of [-1, 1]) {
    const edges = [];
    for (let i = 0; i <= binsPerSide; i++) {
      edges.push(cutoff + side * bandwidth * i / binsPerSide);
    }
    const sumX = new Array(binsPerSide).fill(0);
    const sumY = new Array(binsPerSide).fill(0);
    const cnt = new Array(binsPerSide).fill(0);
    for (let i = 0; i < sample2.n; i++) {
      const d = sample2.x[i] - cutoff;
      if (side < 0 ? !(d < 0 && d >= -bandwidth) : !(d >= 0 && d <= bandwidth)) continue;
      const ratio = Math.abs(d) / bandwidth;
      let b = Math.floor(ratio * binsPerSide);
      if (b >= binsPerSide) b = binsPerSide - 1;
      sumX[b] += sample2.x[i];
      sumY[b] += sample2.y[i];
      cnt[b]++;
    }
    for (let b = 0; b < binsPerSide; b++) {
      if (cnt[b] === 0) continue;
      out.push({ x: sumX[b] / cnt[b], y: sumY[b] / cnt[b], n: cnt[b] });
    }
  }
  return out.sort((a, b) => a.x - b.x);
}
function fitCurve(sample2, cfg2, bandwidth, steps = 60) {
  const fit = fitLocal(sample2.x, sample2.y, sample2.n, cfg2.cutoff, bandwidth, cfg2.poly, cfg2.kernel, true);
  if (!fit) return { left: [], right: [] };
  const k = 2 * (cfg2.poly + 1);
  const z = new Array(k).fill(0);
  const evalAt = (d) => {
    z.fill(0);
    const right2 = d >= 0 ? 1 : 0;
    const base = right2 * (cfg2.poly + 1);
    z[base] = 1;
    let p = d;
    for (let q = 1; q <= cfg2.poly; q++) {
      z[base + q] = p;
      p *= d;
    }
    let s = 0;
    for (let r = 0; r < k; r++) s += z[r] * fit.beta[r];
    return s;
  };
  const left = [];
  const right = [];
  for (let i = 0; i <= steps; i++) {
    const d = i === steps ? -1e-9 : -bandwidth * (steps - i) / steps;
    left.push({ x: cfg2.cutoff + d, y: evalAt(d) });
  }
  for (let i = 0; i <= steps; i++) {
    const d = bandwidth * i / steps;
    right.push({ x: cfg2.cutoff + d, y: evalAt(d) });
  }
  return { left, right };
}
function bandwidthSensitivity(sample2, cfg2) {
  const { bandwidth: used, candidates } = resolveBandwidth(sample2, cfg2);
  const pool = candidates.length ? candidates : [used * 0.5, used * 0.75, used, used * 1.5, used * 2];
  const rows = [];
  for (const h of pool) {
    const fit = fitLocal(sample2.x, sample2.y, sample2.n, cfg2.cutoff, h, cfg2.poly, cfg2.kernel, true);
    if (!fit) continue;
    const s = extractTau(fit, cfg2.poly);
    rows.push({
      bandwidth: h,
      tau: s.tau,
      se: s.se,
      p: s.p,
      nEff: fit.nEff,
      optimal: Math.abs(h - used) < 1e-9
    });
  }
  if (!rows.some((r) => r.optimal)) {
    const fit = fitLocal(sample2.x, sample2.y, sample2.n, cfg2.cutoff, used, cfg2.poly, cfg2.kernel, true);
    if (fit) {
      const s = extractTau(fit, cfg2.poly);
      rows.push({ bandwidth: used, tau: s.tau, se: s.se, p: s.p, nEff: fit.nEff, optimal: true });
      rows.sort((a, b) => a.bandwidth - b.bandwidth);
    }
  }
  return rows;
}
function placeboTest(sample2, cfg2) {
  const { bandwidth } = resolveBandwidth(sample2, cfg2);
  const rows = [];
  const run = (sub, cutoff) => {
    const fit = fitLocal(sub.x, sub.y, sub.n, cutoff, bandwidth, cfg2.poly, cfg2.kernel, true);
    if (!fit || fit.nEff < 200) return;
    const s = extractTau(fit, cfg2.poly);
    rows.push({ cutoff: round2(cutoff), tau: s.tau, se: s.se, p: s.p, nEff: fit.nEff, real: false });
  };
  const leftSub = filterSample(sample2, (v) => v < cfg2.cutoff);
  const rightSub = filterSample(sample2, (v) => v >= cfg2.cutoff);
  for (const mult of [1.2, 1.6, 2, 2.4]) {
    run(leftSub, cfg2.cutoff - mult * bandwidth);
    run(rightSub, cfg2.cutoff + mult * bandwidth);
  }
  const real = fitLocal(sample2.x, sample2.y, sample2.n, cfg2.cutoff, bandwidth, cfg2.poly, cfg2.kernel, true);
  if (real) {
    const s = extractTau(real, cfg2.poly);
    rows.push({ cutoff: cfg2.cutoff, tau: s.tau, se: s.se, p: s.p, nEff: real.nEff, real: true });
  }
  return rows.sort((a, b) => a.cutoff - b.cutoff);
}
function filterSample(sample2, predicate) {
  const xs = [];
  const ys = [];
  for (let i = 0; i < sample2.n; i++) {
    if (!predicate(sample2.x[i])) continue;
    xs.push(sample2.x[i]);
    ys.push(sample2.y[i]);
  }
  return { x: new Float64Array(xs), y: new Float64Array(ys), n: xs.length };
}
function round2(v) {
  return Math.round(v * 100) / 100;
}
function densityTest(sample2, cutoff, bandwidth) {
  const vals = sample2.values;
  if (vals.length < 8) return null;
  const binCount = Math.min(60, Math.max(16, Math.round(Math.sqrt(sample2.n))));
  const bw2 = Math.max((sample2.xMax - sample2.xMin) / binCount, 1e-6);
  const cnt = new Array(binCount).fill(0);
  for (let i = 0; i < sample2.n; i++) {
    let b = Math.floor((sample2.x[i] - sample2.xMin) / bw2);
    if (b >= binCount) b = binCount - 1;
    if (b < 0) b = 0;
    cnt[b]++;
  }
  const bx = new Float64Array(binCount);
  const by = new Float64Array(binCount);
  const bins2 = [];
  for (let b = 0; b < binCount; b++) {
    const center = sample2.xMin + (b + 0.5) * bw2;
    const density = (cnt[b] + 0.5) / (sample2.n * bw2);
    bx[b] = center;
    by[b] = Math.log(density);
    bins2.push({ x: center, density: cnt[b] / (sample2.n * bw2) });
  }
  const hDen = Math.max(bandwidth, bw2 * 2);
  const fit = fitLocal(bx, by, binCount, cutoff, hDen, 1, "uniform", true);
  if (!fit) return { theta: NaN, se: NaN, z: NaN, p: 1, bins: bins2 };
  const s = extractTau(fit, 1);
  const z = s.se > 0 ? s.tau / s.se : NaN;
  return {
    theta: s.tau,
    se: s.se,
    z,
    // 密度检验是双侧的正态检验
    p: Number.isFinite(z) ? 2 * (1 - normalCdf(Math.abs(z))) : 1,
    bins: bins2
  };
}
function normalCdf(z) {
  const t = 1 / (1 + 0.2316419 * z);
  const d = 0.3989422804014327 * Math.exp(-z * z / 2);
  const poly = t * (0.31938153 + t * (-0.356563782 + t * (1.781477937 + t * (-1.821255978 + t * 1.330274429))));
  return 1 - d * poly;
}
function covariateBalance(sample2, cfg2) {
  const { bandwidth } = resolveBandwidth(sample2, cfg2);
  const run = (y, name) => {
    const fit = fitLocal(sample2.x, y, sample2.n, cfg2.cutoff, bandwidth, cfg2.poly, cfg2.kernel, true);
    if (!fit) return null;
    const s = extractTau(fit, cfg2.poly);
    return { name, tau: s.tau, se: s.se, p: s.p };
  };
  const rows = [];
  const q = run(sample2.covQuality, "\u6E20\u9053\u8D28\u91CF\u7CFB\u6570");
  if (q) rows.push(q);
  const r = run(sample2.covRegDay, "\u6CE8\u518C\u65E5\u7D22\u5F15");
  if (r) rows.push(r);
  return rows;
}

// .rddexam.ts
console.log("tPValue(1.96, 1000) =", tPValue(1.96, 1e3).toFixed(4), "(\u671F\u671B \u2248 0.0502)");
console.log("tPValue(2.0, 60)    =", tPValue(2, 60).toFixed(4), "(\u671F\u671B \u2248 0.0500)");
console.log("tPValue(0, 30)      =", tPValue(0, 30).toFixed(4), "(\u671F\u671B = 1)");
console.log("tPValue(3.5, 5000)  =", tPValue(3.5, 5e3).toExponential(3), "(\u671F\u671B \u2248 4.7e-4)");
var ds = getDataset();
var f = {
  fromDay: Math.max(0, ds.days - 30),
  toDay: ds.days - 1,
  channels: [],
  versions: [],
  regions: []
};
for (const ro of RUNNING_OPTIONS) {
  for (const oo of OUTCOME_OPTIONS) {
    const t0 = Date.now();
    const sample2 = buildSample(ds, f, ro.key, oo.key);
    const cands2 = candidateBandwidths(sample2, ro.cutoff);
    const bw2 = selectBandwidth(sample2, ro.cutoff, 1, "uniform", cands2);
    const cfg2 = {
      running: ro.key,
      outcome: oo.key,
      cutoff: ro.cutoff,
      bandwidth: "auto",
      poly: 1,
      kernel: "uniform"
    };
    const est2 = estimateRdd(sample2, cfg2);
    const ms = Date.now() - t0;
    if (!est2) {
      console.log(`${ro.label} / ${oo.label}: \u65E0\u6CD5\u4F30\u8BA1 (n=${sample2.n})`);
      continue;
    }
    console.log(
      `${ro.label} / ${oo.label}: n=${sample2.n} \u5019\u9009\u5E26\u5BBD=${cands2.length} h=${bw2?.toFixed(2)} \u03C4=${est2.tau.toFixed(4)} se=${est2.se.toFixed(4)} t=${est2.t.toFixed(2)} p=${est2.p.toFixed(4)} \u5DE6=${est2.fitLeft.toFixed(3)} \u53F3=${est2.fitRight.toFixed(3)} nEff=${est2.nEff} [${ms}ms]`
    );
  }
  break;
}
var sample = buildSample(ds, f, "level7", "postActive");
var cfg = {
  running: "level7",
  outcome: "postActive",
  cutoff: 30,
  bandwidth: "auto",
  poly: 1,
  kernel: "uniform"
};
var cands = candidateBandwidths(sample, 30);
console.log("\n\u5019\u9009\u5E26\u5BBD:", cands.map((c) => c.toFixed(1)).join(", "));
var bw = selectBandwidth(sample, 30, 1, "uniform", cands);
console.log("CV \u9009\u4E2D\u5E26\u5BBD:", bw);
var est = estimateRdd(sample, cfg);
console.log("\u4F30\u8BA1:", {
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
  fitRight: +est.fitRight.toFixed(3)
});
for (const poly of [1, 2]) {
  for (const kernel of ["uniform", "triangular"]) {
    const e = estimateRdd(sample, { ...cfg, poly, kernel });
    console.log(`poly=${poly} kernel=${kernel}: \u03C4=${e?.tau.toFixed(4)} se=${e?.se.toFixed(4)} p=${e?.p.toFixed(5)} h=${e?.bandwidth.toFixed(2)}`);
  }
}
var bins = binMeans(sample, 30, est.bandwidth);
console.log("\n\u5206\u7BB1\u5747\u503C:", bins.map((b) => `${b.x.toFixed(1)}:${b.y.toFixed(2)}(${b.n})`).join(" "));
var curve = fitCurve(sample, cfg, est.bandwidth, 5);
console.log("\u62DF\u5408\u5DE6:", curve.left.map((p) => `${p.x.toFixed(1)}:${p.y.toFixed(2)}`).join(" "));
console.log("\u62DF\u5408\u53F3:", curve.right.map((p) => `${p.x.toFixed(1)}:${p.y.toFixed(2)}`).join(" "));
var sens = bandwidthSensitivity(sample, cfg);
console.log("\n\u5E26\u5BBD\u654F\u611F\u6027:", sens.length, "\u884C");
for (const r of sens) console.log(`  h=${r.bandwidth.toFixed(2)} \u03C4=${r.tau.toFixed(4)} p=${r.p.toFixed(4)} n=${r.nEff}${r.optimal ? "  \u2190 CV \u9009\u4E2D" : ""}`);
var pla = placeboTest(sample, cfg);
console.log("\n\u5B89\u6170\u5242\u68C0\u9A8C:");
for (const r of pla) console.log(`  c=${r.cutoff} \u03C4=${r.tau.toFixed(4)} p=${r.p.toFixed(4)}${r.real ? "  \u2190 \u771F\u5B9E\u65AD\u70B9" : ""}`);
var den = densityTest(sample, 30, est.bandwidth);
console.log("\n\u5BC6\u5EA6\u68C0\u9A8C: \u03B8=", den?.theta.toFixed(4), "se=", den?.se.toFixed(4), "z=", den?.z.toFixed(3), "p=", den?.p.toFixed(4), "bins=", den?.bins.length);
var cov = covariateBalance(sample, cfg);
console.log("\u534F\u53D8\u91CF\u5E73\u8861:");
for (const c of cov) console.log(`  ${c.name}: \u03C4=${c.tau.toFixed(4)} se=${c.se.toFixed(4)} p=${c.p.toFixed(4)}`);
console.log("\u5254\u9664\uFF08\u89C2\u5BDF\u671F\u4E0D\u8DB3\uFF09:", sample.dropped);
