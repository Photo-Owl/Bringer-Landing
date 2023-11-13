(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3492], {
        75667: function(t, r, e) {
            "use strict";
            e.d(r, {
                $: function() {
                    return f
                }
            });
            var o = e(14141),
                n = e(16678),
                i = e(25394),
                s = e(25110),
                a = e(22674),
                u = e(45919),
                h = e(30116),
                l = (0, e(47098).h)(h.x),
                f = (0, o.ZP)(l).withConfig({
                    displayName: "Widget",
                    componentId: "rui__sc-1vzekdg-0"
                })(["", " ", " & &{background-color:", ";}", ""], s.k, (0, u.fw)(i.G.TABLE_ROW_X_BORDER_WIDTH, "1px"), a.W.color.greyTone5, n.$_);
            f.defaultProps = {
                bg: a.W.color.widgetBackground,
                color: a.W.color.foreground,
                radius: a.W.radius.widget,
                display: "block"
            }
        },
        36876: function(t, r, e) {
            var o = e(14450),
                n = e(49381),
                i = function(t, r) {
                    r = r || {};
                    var e = new o(r.typeNumber || -1, r.errorCorrectLevel || n.H);
                    return e.addData(t), e.make(), e
                };
            i.ErrorCorrectLevel = n, t.exports = i
        },
        3655: function(t, r, e) {
            var o = e(32792);

            function n(t) {
                this.mode = o.MODE_8BIT_BYTE, this.data = t
            }
            n.prototype = {
                getLength: function(t) {
                    return this.data.length
                },
                write: function(t) {
                    for (var r = 0; r < this.data.length; r++) t.put(this.data.charCodeAt(r), 8)
                }
            }, t.exports = n
        },
        27321: function(t) {
            function r() {
                this.buffer = [], this.length = 0
            }
            r.prototype = {
                get: function(t) {
                    var r = Math.floor(t / 8);
                    return (this.buffer[r] >>> 7 - t % 8 & 1) == 1
                },
                put: function(t, r) {
                    for (var e = 0; e < r; e++) this.putBit((t >>> r - e - 1 & 1) == 1)
                },
                getLengthInBits: function() {
                    return this.length
                },
                putBit: function(t) {
                    var r = Math.floor(this.length / 8);
                    this.buffer.length <= r && this.buffer.push(0), t && (this.buffer[r] |= 128 >>> this.length % 8), this.length++
                }
            }, t.exports = r
        },
        49381: function(t) {
            t.exports = {
                L: 1,
                M: 0,
                Q: 3,
                H: 2
            }
        },
        32832: function(t, r, e) {
            var o = e(11518);

            function n(t, r) {
                if (void 0 == t.length) throw Error(t.length + "/" + r);
                for (var e = 0; e < t.length && 0 == t[e];) e++;
                this.num = Array(t.length - e + r);
                for (var o = 0; o < t.length - e; o++) this.num[o] = t[o + e]
            }
            n.prototype = {
                get: function(t) {
                    return this.num[t]
                },
                getLength: function() {
                    return this.num.length
                },
                multiply: function(t) {
                    for (var r = Array(this.getLength() + t.getLength() - 1), e = 0; e < this.getLength(); e++)
                        for (var i = 0; i < t.getLength(); i++) r[e + i] ^= o.gexp(o.glog(this.get(e)) + o.glog(t.get(i)));
                    return new n(r, 0)
                },
                mod: function(t) {
                    if (this.getLength() - t.getLength() < 0) return this;
                    for (var r = o.glog(this.get(0)) - o.glog(t.get(0)), e = Array(this.getLength()), i = 0; i < this.getLength(); i++) e[i] = this.get(i);
                    for (var i = 0; i < t.getLength(); i++) e[i] ^= o.gexp(o.glog(t.get(i)) + r);
                    return new n(e, 0).mod(t)
                }
            }, t.exports = n
        },
        14450: function(t, r, e) {
            var o = e(3655),
                n = e(17611),
                i = e(27321),
                s = e(93160),
                a = e(32832);

            function u(t, r) {
                this.typeNumber = t, this.errorCorrectLevel = r, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = []
            }
            var h = u.prototype;
            h.addData = function(t) {
                var r = new o(t);
                this.dataList.push(r), this.dataCache = null
            }, h.isDark = function(t, r) {
                if (t < 0 || this.moduleCount <= t || r < 0 || this.moduleCount <= r) throw Error(t + "," + r);
                return this.modules[t][r]
            }, h.getModuleCount = function() {
                return this.moduleCount
            }, h.make = function() {
                if (this.typeNumber < 1) {
                    var t = 1;
                    for (t = 1; t < 40; t++) {
                        for (var r = n.getRSBlocks(t, this.errorCorrectLevel), e = new i, o = 0, a = 0; a < r.length; a++) o += r[a].dataCount;
                        for (var a = 0; a < this.dataList.length; a++) {
                            var u = this.dataList[a];
                            e.put(u.mode, 4), e.put(u.getLength(), s.getLengthInBits(u.mode, t)), u.write(e)
                        }
                        if (e.getLengthInBits() <= 8 * o) break
                    }
                    this.typeNumber = t
                }
                this.makeImpl(!1, this.getBestMaskPattern())
            }, h.makeImpl = function(t, r) {
                this.moduleCount = 4 * this.typeNumber + 17, this.modules = Array(this.moduleCount);
                for (var e = 0; e < this.moduleCount; e++) {
                    this.modules[e] = Array(this.moduleCount);
                    for (var o = 0; o < this.moduleCount; o++) this.modules[e][o] = null
                }
                this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(t, r), this.typeNumber >= 7 && this.setupTypeNumber(t), null == this.dataCache && (this.dataCache = u.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, r)
            }, h.setupPositionProbePattern = function(t, r) {
                for (var e = -1; e <= 7; e++)
                    if (!(t + e <= -1) && !(this.moduleCount <= t + e))
                        for (var o = -1; o <= 7; o++) r + o <= -1 || this.moduleCount <= r + o || (0 <= e && e <= 6 && (0 == o || 6 == o) || 0 <= o && o <= 6 && (0 == e || 6 == e) || 2 <= e && e <= 4 && 2 <= o && o <= 4 ? this.modules[t + e][r + o] = !0 : this.modules[t + e][r + o] = !1)
            }, h.getBestMaskPattern = function() {
                for (var t = 0, r = 0, e = 0; e < 8; e++) {
                    this.makeImpl(!0, e);
                    var o = s.getLostPoint(this);
                    (0 == e || t > o) && (t = o, r = e)
                }
                return r
            }, h.createMovieClip = function(t, r, e) {
                var o = t.createEmptyMovieClip(r, e);
                this.make();
                for (var n = 0; n < this.modules.length; n++)
                    for (var i = 1 * n, s = 0; s < this.modules[n].length; s++) {
                        var a = 1 * s;
                        this.modules[n][s] && (o.beginFill(0, 100), o.moveTo(a, i), o.lineTo(a + 1, i), o.lineTo(a + 1, i + 1), o.lineTo(a, i + 1), o.endFill())
                    }
                return o
            }, h.setupTimingPattern = function() {
                for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[t][6] && (this.modules[t][6] = t % 2 == 0);
                for (var r = 8; r < this.moduleCount - 8; r++) null == this.modules[6][r] && (this.modules[6][r] = r % 2 == 0)
            }, h.setupPositionAdjustPattern = function() {
                for (var t = s.getPatternPosition(this.typeNumber), r = 0; r < t.length; r++)
                    for (var e = 0; e < t.length; e++) {
                        var o = t[r],
                            n = t[e];
                        if (null == this.modules[o][n])
                            for (var i = -2; i <= 2; i++)
                                for (var a = -2; a <= 2; a++) - 2 == i || 2 == i || -2 == a || 2 == a || 0 == i && 0 == a ? this.modules[o + i][n + a] = !0 : this.modules[o + i][n + a] = !1
                    }
            }, h.setupTypeNumber = function(t) {
                for (var r = s.getBCHTypeNumber(this.typeNumber), e = 0; e < 18; e++) {
                    var o = !t && (r >> e & 1) == 1;
                    this.modules[Math.floor(e / 3)][e % 3 + this.moduleCount - 8 - 3] = o
                }
                for (var e = 0; e < 18; e++) {
                    var o = !t && (r >> e & 1) == 1;
                    this.modules[e % 3 + this.moduleCount - 8 - 3][Math.floor(e / 3)] = o
                }
            }, h.setupTypeInfo = function(t, r) {
                for (var e = this.errorCorrectLevel << 3 | r, o = s.getBCHTypeInfo(e), n = 0; n < 15; n++) {
                    var i = !t && (o >> n & 1) == 1;
                    n < 6 ? this.modules[n][8] = i : n < 8 ? this.modules[n + 1][8] = i : this.modules[this.moduleCount - 15 + n][8] = i
                }
                for (var n = 0; n < 15; n++) {
                    var i = !t && (o >> n & 1) == 1;
                    n < 8 ? this.modules[8][this.moduleCount - n - 1] = i : n < 9 ? this.modules[8][15 - n - 1 + 1] = i : this.modules[8][15 - n - 1] = i
                }
                this.modules[this.moduleCount - 8][8] = !t
            }, h.mapData = function(t, r) {
                for (var e = -1, o = this.moduleCount - 1, n = 7, i = 0, a = this.moduleCount - 1; a > 0; a -= 2)
                    for (6 == a && a--;;) {
                        for (var u = 0; u < 2; u++)
                            if (null == this.modules[o][a - u]) {
                                var h = !1;
                                i < t.length && (h = (t[i] >>> n & 1) == 1), s.getMask(r, o, a - u) && (h = !h), this.modules[o][a - u] = h, -1 == --n && (i++, n = 7)
                            }
                        if ((o += e) < 0 || this.moduleCount <= o) {
                            o -= e, e = -e;
                            break
                        }
                    }
            }, u.PAD0 = 236, u.PAD1 = 17, u.createData = function(t, r, e) {
                for (var o = n.getRSBlocks(t, r), a = new i, h = 0; h < e.length; h++) {
                    var l = e[h];
                    a.put(l.mode, 4), a.put(l.getLength(), s.getLengthInBits(l.mode, t)), l.write(a)
                }
                for (var f = 0, h = 0; h < o.length; h++) f += o[h].dataCount;
                if (a.getLengthInBits() > 8 * f) throw Error("code length overflow. (" + a.getLengthInBits() + ">" + 8 * f + ")");
                for (a.getLengthInBits() + 4 <= 8 * f && a.put(0, 4); a.getLengthInBits() % 8 != 0;) a.putBit(!1);
                for (; !(a.getLengthInBits() >= 8 * f) && (a.put(u.PAD0, 8), !(a.getLengthInBits() >= 8 * f));) a.put(u.PAD1, 8);
                return u.createBytes(a, o)
            }, u.createBytes = function(t, r) {
                for (var e = 0, o = 0, n = 0, i = Array(r.length), u = Array(r.length), h = 0; h < r.length; h++) {
                    var l = r[h].dataCount,
                        f = r[h].totalCount - l;
                    o = Math.max(o, l), n = Math.max(n, f), i[h] = Array(l);
                    for (var g = 0; g < i[h].length; g++) i[h][g] = 255 & t.buffer[g + e];
                    e += l;
                    var c = s.getErrorCorrectPolynomial(f),
                        d = new a(i[h], c.getLength() - 1).mod(c);
                    u[h] = Array(c.getLength() - 1);
                    for (var g = 0; g < u[h].length; g++) {
                        var m = g + d.getLength() - u[h].length;
                        u[h][g] = m >= 0 ? d.get(m) : 0
                    }
                }
                for (var v = 0, g = 0; g < r.length; g++) v += r[g].totalCount;
                for (var E = Array(v), p = 0, g = 0; g < o; g++)
                    for (var h = 0; h < r.length; h++) g < i[h].length && (E[p++] = i[h][g]);
                for (var g = 0; g < n; g++)
                    for (var h = 0; h < r.length; h++) g < u[h].length && (E[p++] = u[h][g]);
                return E
            }, t.exports = u
        },
        17611: function(t, r, e) {
            var o = e(49381);

            function n(t, r) {
                this.totalCount = t, this.dataCount = r
            }
            n.RS_BLOCK_TABLE = [
                [1, 26, 19],
                [1, 26, 16],
                [1, 26, 13],
                [1, 26, 9],
                [1, 44, 34],
                [1, 44, 28],
                [1, 44, 22],
                [1, 44, 16],
                [1, 70, 55],
                [1, 70, 44],
                [2, 35, 17],
                [2, 35, 13],
                [1, 100, 80],
                [2, 50, 32],
                [2, 50, 24],
                [4, 25, 9],
                [1, 134, 108],
                [2, 67, 43],
                [2, 33, 15, 2, 34, 16],
                [2, 33, 11, 2, 34, 12],
                [2, 86, 68],
                [4, 43, 27],
                [4, 43, 19],
                [4, 43, 15],
                [2, 98, 78],
                [4, 49, 31],
                [2, 32, 14, 4, 33, 15],
                [4, 39, 13, 1, 40, 14],
                [2, 121, 97],
                [2, 60, 38, 2, 61, 39],
                [4, 40, 18, 2, 41, 19],
                [4, 40, 14, 2, 41, 15],
                [2, 146, 116],
                [3, 58, 36, 2, 59, 37],
                [4, 36, 16, 4, 37, 17],
                [4, 36, 12, 4, 37, 13],
                [2, 86, 68, 2, 87, 69],
                [4, 69, 43, 1, 70, 44],
                [6, 43, 19, 2, 44, 20],
                [6, 43, 15, 2, 44, 16],
                [4, 101, 81],
                [1, 80, 50, 4, 81, 51],
                [4, 50, 22, 4, 51, 23],
                [3, 36, 12, 8, 37, 13],
                [2, 116, 92, 2, 117, 93],
                [6, 58, 36, 2, 59, 37],
                [4, 46, 20, 6, 47, 21],
                [7, 42, 14, 4, 43, 15],
                [4, 133, 107],
                [8, 59, 37, 1, 60, 38],
                [8, 44, 20, 4, 45, 21],
                [12, 33, 11, 4, 34, 12],
                [3, 145, 115, 1, 146, 116],
                [4, 64, 40, 5, 65, 41],
                [11, 36, 16, 5, 37, 17],
                [11, 36, 12, 5, 37, 13],
                [5, 109, 87, 1, 110, 88],
                [5, 65, 41, 5, 66, 42],
                [5, 54, 24, 7, 55, 25],
                [11, 36, 12],
                [5, 122, 98, 1, 123, 99],
                [7, 73, 45, 3, 74, 46],
                [15, 43, 19, 2, 44, 20],
                [3, 45, 15, 13, 46, 16],
                [1, 135, 107, 5, 136, 108],
                [10, 74, 46, 1, 75, 47],
                [1, 50, 22, 15, 51, 23],
                [2, 42, 14, 17, 43, 15],
                [5, 150, 120, 1, 151, 121],
                [9, 69, 43, 4, 70, 44],
                [17, 50, 22, 1, 51, 23],
                [2, 42, 14, 19, 43, 15],
                [3, 141, 113, 4, 142, 114],
                [3, 70, 44, 11, 71, 45],
                [17, 47, 21, 4, 48, 22],
                [9, 39, 13, 16, 40, 14],
                [3, 135, 107, 5, 136, 108],
                [3, 67, 41, 13, 68, 42],
                [15, 54, 24, 5, 55, 25],
                [15, 43, 15, 10, 44, 16],
                [4, 144, 116, 4, 145, 117],
                [17, 68, 42],
                [17, 50, 22, 6, 51, 23],
                [19, 46, 16, 6, 47, 17],
                [2, 139, 111, 7, 140, 112],
                [17, 74, 46],
                [7, 54, 24, 16, 55, 25],
                [34, 37, 13],
                [4, 151, 121, 5, 152, 122],
                [4, 75, 47, 14, 76, 48],
                [11, 54, 24, 14, 55, 25],
                [16, 45, 15, 14, 46, 16],
                [6, 147, 117, 4, 148, 118],
                [6, 73, 45, 14, 74, 46],
                [11, 54, 24, 16, 55, 25],
                [30, 46, 16, 2, 47, 17],
                [8, 132, 106, 4, 133, 107],
                [8, 75, 47, 13, 76, 48],
                [7, 54, 24, 22, 55, 25],
                [22, 45, 15, 13, 46, 16],
                [10, 142, 114, 2, 143, 115],
                [19, 74, 46, 4, 75, 47],
                [28, 50, 22, 6, 51, 23],
                [33, 46, 16, 4, 47, 17],
                [8, 152, 122, 4, 153, 123],
                [22, 73, 45, 3, 74, 46],
                [8, 53, 23, 26, 54, 24],
                [12, 45, 15, 28, 46, 16],
                [3, 147, 117, 10, 148, 118],
                [3, 73, 45, 23, 74, 46],
                [4, 54, 24, 31, 55, 25],
                [11, 45, 15, 31, 46, 16],
                [7, 146, 116, 7, 147, 117],
                [21, 73, 45, 7, 74, 46],
                [1, 53, 23, 37, 54, 24],
                [19, 45, 15, 26, 46, 16],
                [5, 145, 115, 10, 146, 116],
                [19, 75, 47, 10, 76, 48],
                [15, 54, 24, 25, 55, 25],
                [23, 45, 15, 25, 46, 16],
                [13, 145, 115, 3, 146, 116],
                [2, 74, 46, 29, 75, 47],
                [42, 54, 24, 1, 55, 25],
                [23, 45, 15, 28, 46, 16],
                [17, 145, 115],
                [10, 74, 46, 23, 75, 47],
                [10, 54, 24, 35, 55, 25],
                [19, 45, 15, 35, 46, 16],
                [17, 145, 115, 1, 146, 116],
                [14, 74, 46, 21, 75, 47],
                [29, 54, 24, 19, 55, 25],
                [11, 45, 15, 46, 46, 16],
                [13, 145, 115, 6, 146, 116],
                [14, 74, 46, 23, 75, 47],
                [44, 54, 24, 7, 55, 25],
                [59, 46, 16, 1, 47, 17],
                [12, 151, 121, 7, 152, 122],
                [12, 75, 47, 26, 76, 48],
                [39, 54, 24, 14, 55, 25],
                [22, 45, 15, 41, 46, 16],
                [6, 151, 121, 14, 152, 122],
                [6, 75, 47, 34, 76, 48],
                [46, 54, 24, 10, 55, 25],
                [2, 45, 15, 64, 46, 16],
                [17, 152, 122, 4, 153, 123],
                [29, 74, 46, 14, 75, 47],
                [49, 54, 24, 10, 55, 25],
                [24, 45, 15, 46, 46, 16],
                [4, 152, 122, 18, 153, 123],
                [13, 74, 46, 32, 75, 47],
                [48, 54, 24, 14, 55, 25],
                [42, 45, 15, 32, 46, 16],
                [20, 147, 117, 4, 148, 118],
                [40, 75, 47, 7, 76, 48],
                [43, 54, 24, 22, 55, 25],
                [10, 45, 15, 67, 46, 16],
                [19, 148, 118, 6, 149, 119],
                [18, 75, 47, 31, 76, 48],
                [34, 54, 24, 34, 55, 25],
                [20, 45, 15, 61, 46, 16]
            ], n.getRSBlocks = function(t, r) {
                var e = n.getRsBlockTable(t, r);
                if (void 0 == e) throw Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + r);
                for (var o = e.length / 3, i = [], s = 0; s < o; s++)
                    for (var a = e[3 * s + 0], u = e[3 * s + 1], h = e[3 * s + 2], l = 0; l < a; l++) i.push(new n(u, h));
                return i
            }, n.getRsBlockTable = function(t, r) {
                switch (r) {
                    case o.L:
                        return n.RS_BLOCK_TABLE[(t - 1) * 4 + 0];
                    case o.M:
                        return n.RS_BLOCK_TABLE[(t - 1) * 4 + 1];
                    case o.Q:
                        return n.RS_BLOCK_TABLE[(t - 1) * 4 + 2];
                    case o.H:
                        return n.RS_BLOCK_TABLE[(t - 1) * 4 + 3];
                    default:
                        return
                }
            }, t.exports = n
        },
        11518: function(t) {
            for (var r = {
                    glog: function(t) {
                        if (t < 1) throw Error("glog(" + t + ")");
                        return r.LOG_TABLE[t]
                    },
                    gexp: function(t) {
                        for (; t < 0;) t += 255;
                        for (; t >= 256;) t -= 255;
                        return r.EXP_TABLE[t]
                    },
                    EXP_TABLE: Array(256),
                    LOG_TABLE: Array(256)
                }, e = 0; e < 8; e++) r.EXP_TABLE[e] = 1 << e;
            for (var e = 8; e < 256; e++) r.EXP_TABLE[e] = r.EXP_TABLE[e - 4] ^ r.EXP_TABLE[e - 5] ^ r.EXP_TABLE[e - 6] ^ r.EXP_TABLE[e - 8];
            for (var e = 0; e < 255; e++) r.LOG_TABLE[r.EXP_TABLE[e]] = e;
            t.exports = r
        },
        32792: function(t) {
            t.exports = {
                MODE_NUMBER: 1,
                MODE_ALPHA_NUM: 2,
                MODE_8BIT_BYTE: 4,
                MODE_KANJI: 8
            }
        },
        93160: function(t, r, e) {
            var o = e(32792),
                n = e(32832),
                i = e(11518),
                s = {
                    PATTERN000: 0,
                    PATTERN001: 1,
                    PATTERN010: 2,
                    PATTERN011: 3,
                    PATTERN100: 4,
                    PATTERN101: 5,
                    PATTERN110: 6,
                    PATTERN111: 7
                },
                a = {
                    PATTERN_POSITION_TABLE: [
                        [],
                        [6, 18],
                        [6, 22],
                        [6, 26],
                        [6, 30],
                        [6, 34],
                        [6, 22, 38],
                        [6, 24, 42],
                        [6, 26, 46],
                        [6, 28, 50],
                        [6, 30, 54],
                        [6, 32, 58],
                        [6, 34, 62],
                        [6, 26, 46, 66],
                        [6, 26, 48, 70],
                        [6, 26, 50, 74],
                        [6, 30, 54, 78],
                        [6, 30, 56, 82],
                        [6, 30, 58, 86],
                        [6, 34, 62, 90],
                        [6, 28, 50, 72, 94],
                        [6, 26, 50, 74, 98],
                        [6, 30, 54, 78, 102],
                        [6, 28, 54, 80, 106],
                        [6, 32, 58, 84, 110],
                        [6, 30, 58, 86, 114],
                        [6, 34, 62, 90, 118],
                        [6, 26, 50, 74, 98, 122],
                        [6, 30, 54, 78, 102, 126],
                        [6, 26, 52, 78, 104, 130],
                        [6, 30, 56, 82, 108, 134],
                        [6, 34, 60, 86, 112, 138],
                        [6, 30, 58, 86, 114, 142],
                        [6, 34, 62, 90, 118, 146],
                        [6, 30, 54, 78, 102, 126, 150],
                        [6, 24, 50, 76, 102, 128, 154],
                        [6, 28, 54, 80, 106, 132, 158],
                        [6, 32, 58, 84, 110, 136, 162],
                        [6, 26, 54, 82, 110, 138, 166],
                        [6, 30, 58, 86, 114, 142, 170]
                    ],
                    G15: 1335,
                    G18: 7973,
                    G15_MASK: 21522,
                    getBCHTypeInfo: function(t) {
                        for (var r = t << 10; a.getBCHDigit(r) - a.getBCHDigit(a.G15) >= 0;) r ^= a.G15 << a.getBCHDigit(r) - a.getBCHDigit(a.G15);
                        return (t << 10 | r) ^ a.G15_MASK
                    },
                    getBCHTypeNumber: function(t) {
                        for (var r = t << 12; a.getBCHDigit(r) - a.getBCHDigit(a.G18) >= 0;) r ^= a.G18 << a.getBCHDigit(r) - a.getBCHDigit(a.G18);
                        return t << 12 | r
                    },
                    getBCHDigit: function(t) {
                        for (var r = 0; 0 != t;) r++, t >>>= 1;
                        return r
                    },
                    getPatternPosition: function(t) {
                        return a.PATTERN_POSITION_TABLE[t - 1]
                    },
                    getMask: function(t, r, e) {
                        switch (t) {
                            case s.PATTERN000:
                                return (r + e) % 2 == 0;
                            case s.PATTERN001:
                                return r % 2 == 0;
                            case s.PATTERN010:
                                return e % 3 == 0;
                            case s.PATTERN011:
                                return (r + e) % 3 == 0;
                            case s.PATTERN100:
                                return (Math.floor(r / 2) + Math.floor(e / 3)) % 2 == 0;
                            case s.PATTERN101:
                                return r * e % 2 + r * e % 3 == 0;
                            case s.PATTERN110:
                                return (r * e % 2 + r * e % 3) % 2 == 0;
                            case s.PATTERN111:
                                return (r * e % 3 + (r + e) % 2) % 2 == 0;
                            default:
                                throw Error("bad maskPattern:" + t)
                        }
                    },
                    getErrorCorrectPolynomial: function(t) {
                        for (var r = new n([1], 0), e = 0; e < t; e++) r = r.multiply(new n([1, i.gexp(e)], 0));
                        return r
                    },
                    getLengthInBits: function(t, r) {
                        if (1 <= r && r < 10) switch (t) {
                            case o.MODE_NUMBER:
                                return 10;
                            case o.MODE_ALPHA_NUM:
                                return 9;
                            case o.MODE_8BIT_BYTE:
                            case o.MODE_KANJI:
                                return 8;
                            default:
                                throw Error("mode:" + t)
                        } else if (r < 27) switch (t) {
                            case o.MODE_NUMBER:
                                return 12;
                            case o.MODE_ALPHA_NUM:
                                return 11;
                            case o.MODE_8BIT_BYTE:
                                return 16;
                            case o.MODE_KANJI:
                                return 10;
                            default:
                                throw Error("mode:" + t)
                        } else if (r < 41) switch (t) {
                            case o.MODE_NUMBER:
                                return 14;
                            case o.MODE_ALPHA_NUM:
                                return 13;
                            case o.MODE_8BIT_BYTE:
                                return 16;
                            case o.MODE_KANJI:
                                return 12;
                            default:
                                throw Error("mode:" + t)
                        } else throw Error("type:" + r)
                    },
                    getLostPoint: function(t) {
                        for (var r = t.getModuleCount(), e = 0, o = 0; o < r; o++)
                            for (var n = 0; n < r; n++) {
                                for (var i = 0, s = t.isDark(o, n), a = -1; a <= 1; a++)
                                    if (!(o + a < 0) && !(r <= o + a))
                                        for (var u = -1; u <= 1; u++) !(n + u < 0) && !(r <= n + u) && (0 != a || 0 != u) && s == t.isDark(o + a, n + u) && i++;
                                i > 5 && (e += 3 + i - 5)
                            }
                        for (var o = 0; o < r - 1; o++)
                            for (var n = 0; n < r - 1; n++) {
                                var h = 0;
                                t.isDark(o, n) && h++, t.isDark(o + 1, n) && h++, t.isDark(o, n + 1) && h++, t.isDark(o + 1, n + 1) && h++, (0 == h || 4 == h) && (e += 3)
                            }
                        for (var o = 0; o < r; o++)
                            for (var n = 0; n < r - 6; n++) t.isDark(o, n) && !t.isDark(o, n + 1) && t.isDark(o, n + 2) && t.isDark(o, n + 3) && t.isDark(o, n + 4) && !t.isDark(o, n + 5) && t.isDark(o, n + 6) && (e += 40);
                        for (var n = 0; n < r; n++)
                            for (var o = 0; o < r - 6; o++) t.isDark(o, n) && !t.isDark(o + 1, n) && t.isDark(o + 2, n) && t.isDark(o + 3, n) && t.isDark(o + 4, n) && !t.isDark(o + 5, n) && t.isDark(o + 6, n) && (e += 40);
                        for (var l = 0, n = 0; n < r; n++)
                            for (var o = 0; o < r; o++) t.isDark(o, n) && l++;
                        return e + 10 * (Math.abs(100 * l / r / r - 50) / 5)
                    }
                };
            t.exports = a
        }
    }
]);