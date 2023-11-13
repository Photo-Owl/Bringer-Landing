"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4170], {
        44170: function(e, t, r) {
            r.d(t, {
                C: function() {
                    return eB
                }
            });
            var i, n, o, h, s, a, u, c, l, p, f, E, m = function(e, t) {
                return (m = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                })(e, t)
            };

            function b(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function r() {
                    this.constructor = e
                }
                m(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
            var g = function() {
                return (g = Object.assign || function(e) {
                    for (var t, r = 1, i = arguments.length; r < i; r++)
                        for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e
                }).apply(this, arguments)
            };

            function y(e, t, r) {
                if (r || 2 == arguments.length)
                    for (var i, n = 0, o = t.length; n < o; n++) !i && n in t || (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
                return e.concat(i || Array.prototype.slice.call(t))
            }

            function H(e) {
                return e.type === u.literal
            }

            function T(e) {
                return e.type === u.number
            }

            function B(e) {
                return e.type === u.date
            }

            function v(e) {
                return e.type === u.time
            }

            function _(e) {
                return e.type === u.select
            }

            function A(e) {
                return e.type === u.plural
            }

            function d(e) {
                return e.type === u.tag
            }

            function P(e) {
                return !!(e && "object" == typeof e && e.type === c.number)
            }

            function L(e) {
                return !!(e && "object" == typeof e && e.type === c.dateTime)
            }
            "function" == typeof SuppressedError && SuppressedError, (i = a || (a = {}))[i.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", i[i.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", i[i.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", i[i.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", i[i.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", i[i.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", i[i.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", i[i.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", i[i.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", i[i.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", i[i.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", i[i.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", i[i.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", i[i.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", i[i.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", i[i.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", i[i.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", i[i.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", i[i.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", i[i.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", i[i.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", i[i.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", i[i.INVALID_TAG = 23] = "INVALID_TAG", i[i.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", i[i.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", i[i.UNCLOSED_TAG = 27] = "UNCLOSED_TAG", (n = u || (u = {}))[n.literal = 0] = "literal", n[n.argument = 1] = "argument", n[n.number = 2] = "number", n[n.date = 3] = "date", n[n.time = 4] = "time", n[n.select = 5] = "select", n[n.plural = 6] = "plural", n[n.pound = 7] = "pound", n[n.tag = 8] = "tag", (o = c || (c = {}))[o.number = 0] = "number", o[o.dateTime = 1] = "dateTime";
            var S = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
                N = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g,
                I = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i,
                C = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
                R = /^(@+)?(\+|#+)?[rs]?$/g,
                O = /(\*)(0+)|(#+)(0+)|(0+)/g,
                M = /^(0+)$/;

            function U(e) {
                var t = {};
                return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(R, function(e, r, i) {
                    return "string" != typeof i ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : "+" === i ? t.minimumSignificantDigits = r.length : "#" === r[0] ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + ("string" == typeof i ? i.length : 0)), ""
                }), t
            }

            function G(e) {
                switch (e) {
                    case "sign-auto":
                        return {
                            signDisplay: "auto"
                        };
                    case "sign-accounting":
                    case "()":
                        return {
                            currencySign: "accounting"
                        };
                    case "sign-always":
                    case "+!":
                        return {
                            signDisplay: "always"
                        };
                    case "sign-accounting-always":
                    case "()!":
                        return {
                            signDisplay: "always",
                            currencySign: "accounting"
                        };
                    case "sign-except-zero":
                    case "+?":
                        return {
                            signDisplay: "exceptZero"
                        };
                    case "sign-accounting-except-zero":
                    case "()?":
                        return {
                            signDisplay: "exceptZero",
                            currencySign: "accounting"
                        };
                    case "sign-never":
                    case "+_":
                        return {
                            signDisplay: "never"
                        }
                }
            }

            function D(e) {
                return G(e) || {}
            }
            var w = {
                    "001": ["H", "h"],
                    AC: ["H", "h", "hb", "hB"],
                    AD: ["H", "hB"],
                    AE: ["h", "hB", "hb", "H"],
                    AF: ["H", "hb", "hB", "h"],
                    AG: ["h", "hb", "H", "hB"],
                    AI: ["H", "h", "hb", "hB"],
                    AL: ["h", "H", "hB"],
                    AM: ["H", "hB"],
                    AO: ["H", "hB"],
                    AR: ["H", "h", "hB", "hb"],
                    AS: ["h", "H"],
                    AT: ["H", "hB"],
                    AU: ["h", "hb", "H", "hB"],
                    AW: ["H", "hB"],
                    AX: ["H"],
                    AZ: ["H", "hB", "h"],
                    BA: ["H", "hB", "h"],
                    BB: ["h", "hb", "H", "hB"],
                    BD: ["h", "hB", "H"],
                    BE: ["H", "hB"],
                    BF: ["H", "hB"],
                    BG: ["H", "hB", "h"],
                    BH: ["h", "hB", "hb", "H"],
                    BJ: ["H", "hB"],
                    BL: ["H", "hB"],
                    BM: ["h", "hb", "H", "hB"],
                    BN: ["hb", "hB", "h", "H"],
                    BO: ["H", "hB", "h", "hb"],
                    BQ: ["H"],
                    BR: ["H", "hB"],
                    BS: ["h", "hb", "H", "hB"],
                    BT: ["h", "H"],
                    BW: ["H", "h", "hb", "hB"],
                    BZ: ["H", "h", "hb", "hB"],
                    CA: ["h", "hb", "H", "hB"],
                    CC: ["H", "h", "hb", "hB"],
                    CD: ["hB", "H"],
                    CF: ["H", "h", "hB"],
                    CG: ["H", "hB"],
                    CH: ["H", "hB", "h"],
                    CI: ["H", "hB"],
                    CK: ["H", "h", "hb", "hB"],
                    CL: ["H", "h", "hB", "hb"],
                    CM: ["H", "h", "hB"],
                    CN: ["H", "hB", "hb", "h"],
                    CO: ["h", "H", "hB", "hb"],
                    CP: ["H"],
                    CR: ["H", "h", "hB", "hb"],
                    CU: ["H", "h", "hB", "hb"],
                    CV: ["H", "hB"],
                    CX: ["H", "h", "hb", "hB"],
                    CY: ["h", "H", "hb", "hB"],
                    CZ: ["H"],
                    DE: ["H", "hB"],
                    DG: ["H", "h", "hb", "hB"],
                    DJ: ["h", "H"],
                    DK: ["H"],
                    DM: ["h", "hb", "H", "hB"],
                    DO: ["h", "H", "hB", "hb"],
                    DZ: ["h", "hB", "hb", "H"],
                    EA: ["H", "h", "hB", "hb"],
                    EC: ["H", "hB", "h", "hb"],
                    EE: ["H", "hB"],
                    EG: ["h", "hB", "hb", "H"],
                    EH: ["h", "hB", "hb", "H"],
                    ER: ["h", "H"],
                    ES: ["H", "hB", "h", "hb"],
                    ET: ["hB", "hb", "h", "H"],
                    FI: ["H"],
                    FJ: ["h", "hb", "H", "hB"],
                    FK: ["H", "h", "hb", "hB"],
                    FM: ["h", "hb", "H", "hB"],
                    FR: ["H", "hB"],
                    GA: ["H", "hB"],
                    GB: ["H", "h", "hb", "hB"],
                    GD: ["h", "hb", "H", "hB"],
                    GE: ["H", "hB", "h"],
                    GF: ["H", "hB"],
                    GG: ["H", "h", "hb", "hB"],
                    GH: ["h", "H"],
                    GI: ["H", "h", "hb", "hB"],
                    GM: ["h", "hb", "H", "hB"],
                    GN: ["H", "hB"],
                    GP: ["H", "hB"],
                    GQ: ["H", "hB", "h", "hb"],
                    GR: ["h", "H", "hb", "hB"],
                    GT: ["H", "h", "hB", "hb"],
                    GU: ["h", "hb", "H", "hB"],
                    GW: ["H", "hB"],
                    GY: ["h", "hb", "H", "hB"],
                    HK: ["h", "hB", "hb", "H"],
                    HN: ["H", "h", "hB", "hb"],
                    HR: ["H", "hB"],
                    IC: ["H", "h", "hB", "hb"],
                    ID: ["H"],
                    IE: ["H", "h", "hb", "hB"],
                    IL: ["H", "hB"],
                    IM: ["H", "h", "hb", "hB"],
                    IN: ["h", "H"],
                    IO: ["H", "h", "hb", "hB"],
                    IQ: ["h", "hB", "hb", "H"],
                    IR: ["hB", "H"],
                    IS: ["H"],
                    IT: ["H", "hB"],
                    JE: ["H", "h", "hb", "hB"],
                    JM: ["h", "hb", "H", "hB"],
                    JO: ["h", "hB", "hb", "H"],
                    JP: ["H", "h", "K"],
                    KE: ["hB", "hb", "H", "h"],
                    KG: ["H", "h", "hB", "hb"],
                    KH: ["hB", "h", "H", "hb"],
                    KI: ["h", "hb", "H", "hB"],
                    KM: ["H", "h", "hB", "hb"],
                    KN: ["h", "hb", "H", "hB"],
                    KP: ["h", "H", "hB", "hb"],
                    KR: ["h", "H", "hB", "hb"],
                    KW: ["h", "hB", "hb", "H"],
                    KY: ["h", "hb", "H", "hB"],
                    KZ: ["H", "hB"],
                    LA: ["H", "hb", "hB", "h"],
                    LB: ["h", "hB", "hb", "H"],
                    LC: ["h", "hb", "H", "hB"],
                    LI: ["H", "hB", "h"],
                    LK: ["H", "h", "hB", "hb"],
                    LR: ["h", "hb", "H", "hB"],
                    LS: ["h", "H"],
                    LT: ["H", "h", "hb", "hB"],
                    LU: ["H", "h", "hB"],
                    LV: ["H", "hB", "hb", "h"],
                    LY: ["h", "hB", "hb", "H"],
                    MA: ["H", "h", "hB", "hb"],
                    MC: ["H", "hB"],
                    MD: ["H", "hB"],
                    ME: ["H", "hB", "h"],
                    MF: ["H", "hB"],
                    MH: ["h", "hb", "H", "hB"],
                    MK: ["H", "h", "hb", "hB"],
                    ML: ["H"],
                    MM: ["hB", "hb", "H", "h"],
                    MN: ["H", "h", "hb", "hB"],
                    MO: ["h", "hB", "hb", "H"],
                    MP: ["h", "hb", "H", "hB"],
                    MQ: ["H", "hB"],
                    MR: ["h", "hB", "hb", "H"],
                    MS: ["H", "h", "hb", "hB"],
                    MW: ["h", "hb", "H", "hB"],
                    MX: ["H", "h", "hB", "hb"],
                    MY: ["hb", "hB", "h", "H"],
                    MZ: ["H", "hB"],
                    NA: ["h", "H", "hB", "hb"],
                    NC: ["H", "hB"],
                    NE: ["H"],
                    NF: ["H", "h", "hb", "hB"],
                    NG: ["H", "h", "hb", "hB"],
                    NI: ["H", "h", "hB", "hb"],
                    NL: ["H", "hB"],
                    NP: ["H", "h", "hB"],
                    NR: ["H", "h", "hb", "hB"],
                    NU: ["H", "h", "hb", "hB"],
                    NZ: ["h", "hb", "H", "hB"],
                    OM: ["h", "hB", "hb", "H"],
                    PA: ["h", "H", "hB", "hb"],
                    PE: ["H", "hB", "h", "hb"],
                    PF: ["H", "h", "hB"],
                    PG: ["h", "H"],
                    PH: ["h", "hB", "hb", "H"],
                    PK: ["h", "hB", "H"],
                    PM: ["H", "hB"],
                    PN: ["H", "h", "hb", "hB"],
                    PR: ["h", "H", "hB", "hb"],
                    PS: ["h", "hB", "hb", "H"],
                    PT: ["H", "hB"],
                    PW: ["h", "H"],
                    PY: ["H", "h", "hB", "hb"],
                    QA: ["h", "hB", "hb", "H"],
                    RE: ["H", "hB"],
                    RO: ["H", "hB"],
                    RS: ["H", "hB", "h"],
                    RU: ["H"],
                    SA: ["h", "hB", "hb", "H"],
                    SB: ["h", "hb", "H", "hB"],
                    SC: ["H", "h", "hB"],
                    SD: ["h", "hB", "hb", "H"],
                    SE: ["H"],
                    SG: ["h", "hb", "H", "hB"],
                    SH: ["H", "h", "hb", "hB"],
                    SI: ["H", "hB"],
                    SJ: ["H"],
                    SK: ["H"],
                    SL: ["h", "hb", "H", "hB"],
                    SM: ["H", "h", "hB"],
                    SN: ["H", "h", "hB"],
                    SO: ["h", "H"],
                    SR: ["H", "hB"],
                    SS: ["h", "hb", "H", "hB"],
                    ST: ["H", "hB"],
                    SV: ["H", "h", "hB", "hb"],
                    SX: ["H", "h", "hb", "hB"],
                    SY: ["h", "hB", "hb", "H"],
                    SZ: ["h", "hb", "H", "hB"],
                    TA: ["H", "h", "hb", "hB"],
                    TC: ["h", "hb", "H", "hB"],
                    TD: ["h", "H", "hB"],
                    TF: ["H", "h", "hB"],
                    TG: ["H", "hB"],
                    TL: ["H", "hB", "hb", "h"],
                    TN: ["h", "hB", "hb", "H"],
                    TO: ["h", "H"],
                    TR: ["H", "hB"],
                    TT: ["h", "hb", "H", "hB"],
                    TW: ["hB", "hb", "h", "H"],
                    TZ: ["hB", "hb", "H", "h"],
                    UA: ["H", "hB", "h"],
                    UG: ["hB", "hb", "H", "h"],
                    UM: ["h", "hb", "H", "hB"],
                    US: ["h", "hb", "H", "hB"],
                    UY: ["H", "h", "hB", "hb"],
                    UZ: ["H", "hB", "h"],
                    VA: ["H", "h", "hB"],
                    VC: ["h", "hb", "H", "hB"],
                    VE: ["h", "H", "hB", "hb"],
                    VG: ["h", "hb", "H", "hB"],
                    VI: ["h", "hb", "H", "hB"],
                    VU: ["h", "H"],
                    WF: ["H", "hB"],
                    WS: ["h", "H"],
                    XK: ["H", "hB", "h"],
                    YE: ["h", "hB", "hb", "H"],
                    YT: ["H", "hB"],
                    ZA: ["H", "h", "hb", "hB"],
                    ZM: ["h", "hb", "H", "hB"],
                    "af-ZA": ["H", "h", "hB", "hb"],
                    "ar-001": ["h", "hB", "hb", "H"],
                    "ca-ES": ["H", "h", "hB"],
                    "en-001": ["h", "hb", "H", "hB"],
                    "es-BO": ["H", "h", "hB", "hb"],
                    "es-BR": ["H", "h", "hB", "hb"],
                    "es-EC": ["H", "h", "hB", "hb"],
                    "es-ES": ["H", "h", "hB", "hb"],
                    "es-GQ": ["H", "h", "hB", "hb"],
                    "es-PE": ["H", "h", "hB", "hb"],
                    "fr-CA": ["H", "h", "hB"],
                    "gl-ES": ["H", "h", "hB"],
                    "gu-IN": ["hB", "hb", "h", "H"],
                    "hi-IN": ["hB", "h", "H"],
                    "it-CH": ["H", "h", "hB"],
                    "it-IT": ["H", "h", "hB"],
                    "kn-IN": ["hB", "h", "H"],
                    "ml-IN": ["hB", "h", "H"],
                    "mr-IN": ["hB", "hb", "h", "H"],
                    "pa-IN": ["hB", "hb", "h", "H"],
                    "ta-IN": ["hB", "h", "hb", "H"],
                    "te-IN": ["hB", "h", "H"],
                    "zu-ZA": ["H", "hB", "hb", "h"]
                },
                F = RegExp("^".concat(S.source, "*")),
                k = RegExp("".concat(S.source, "*$"));

            function V(e, t) {
                return {
                    start: e,
                    end: t
                }
            }
            var X = !!String.prototype.startsWith && "_a".startsWith("a", 1),
                K = !!String.fromCodePoint,
                x = !!Object.fromEntries,
                j = !!String.prototype.codePointAt,
                Y = !!String.prototype.trimStart,
                Z = !!String.prototype.trimEnd,
                W = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
                    return "number" == typeof e && isFinite(e) && Math.floor(e) === e && 9007199254740991 >= Math.abs(e)
                },
                z = !0;
            try {
                var Q = RegExp("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
                z = (null === (l = Q.exec("a")) || void 0 === l ? void 0 : l[0]) === "a"
            } catch (e) {
                z = !1
            }
            var J = X ? function(e, t, r) {
                    return e.startsWith(t, r)
                } : function(e, t, r) {
                    return e.slice(r, r + t.length) === t
                },
                q = K ? String.fromCodePoint : function() {
                    for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                    for (var i = "", n = t.length, o = 0; n > o;) {
                        if ((e = t[o++]) > 1114111) throw RangeError(e + " is not a valid code point");
                        i += e < 65536 ? String.fromCharCode(e) : String.fromCharCode(((e -= 65536) >> 10) + 55296, e % 1024 + 56320)
                    }
                    return i
                },
                $ = x ? Object.fromEntries : function(e) {
                    for (var t = {}, r = 0; r < e.length; r++) {
                        var i = e[r],
                            n = i[0],
                            o = i[1];
                        t[n] = o
                    }
                    return t
                },
                ee = j ? function(e, t) {
                    return e.codePointAt(t)
                } : function(e, t) {
                    var r, i = e.length;
                    if (!(t < 0) && !(t >= i)) {
                        var n = e.charCodeAt(t);
                        return n < 55296 || n > 56319 || t + 1 === i || (r = e.charCodeAt(t + 1)) < 56320 || r > 57343 ? n : (n - 55296 << 10) + (r - 56320) + 65536
                    }
                },
                et = Y ? function(e) {
                    return e.trimStart()
                } : function(e) {
                    return e.replace(F, "")
                },
                er = Z ? function(e) {
                    return e.trimEnd()
                } : function(e) {
                    return e.replace(k, "")
                };
            if (z) {
                var ei = RegExp("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
                p = function(e, t) {
                    var r;
                    return ei.lastIndex = t, null !== (r = ei.exec(e)[1]) && void 0 !== r ? r : ""
                }
            } else p = function(e, t) {
                for (var r = [];;) {
                    var i, n = ee(e, t);
                    if (void 0 === n || eh(n) || (i = n) >= 33 && i <= 35 || 36 === i || i >= 37 && i <= 39 || 40 === i || 41 === i || 42 === i || 43 === i || 44 === i || 45 === i || i >= 46 && i <= 47 || i >= 58 && i <= 59 || i >= 60 && i <= 62 || i >= 63 && i <= 64 || 91 === i || 92 === i || 93 === i || 94 === i || 96 === i || 123 === i || 124 === i || 125 === i || 126 === i || 161 === i || i >= 162 && i <= 165 || 166 === i || 167 === i || 169 === i || 171 === i || 172 === i || 174 === i || 176 === i || 177 === i || 182 === i || 187 === i || 191 === i || 215 === i || 247 === i || i >= 8208 && i <= 8213 || i >= 8214 && i <= 8215 || 8216 === i || 8217 === i || 8218 === i || i >= 8219 && i <= 8220 || 8221 === i || 8222 === i || 8223 === i || i >= 8224 && i <= 8231 || i >= 8240 && i <= 8248 || 8249 === i || 8250 === i || i >= 8251 && i <= 8254 || i >= 8257 && i <= 8259 || 8260 === i || 8261 === i || 8262 === i || i >= 8263 && i <= 8273 || 8274 === i || 8275 === i || i >= 8277 && i <= 8286 || i >= 8592 && i <= 8596 || i >= 8597 && i <= 8601 || i >= 8602 && i <= 8603 || i >= 8604 && i <= 8607 || 8608 === i || i >= 8609 && i <= 8610 || 8611 === i || i >= 8612 && i <= 8613 || 8614 === i || i >= 8615 && i <= 8621 || 8622 === i || i >= 8623 && i <= 8653 || i >= 8654 && i <= 8655 || i >= 8656 && i <= 8657 || 8658 === i || 8659 === i || 8660 === i || i >= 8661 && i <= 8691 || i >= 8692 && i <= 8959 || i >= 8960 && i <= 8967 || 8968 === i || 8969 === i || 8970 === i || 8971 === i || i >= 8972 && i <= 8991 || i >= 8992 && i <= 8993 || i >= 8994 && i <= 9e3 || 9001 === i || 9002 === i || i >= 9003 && i <= 9083 || 9084 === i || i >= 9085 && i <= 9114 || i >= 9115 && i <= 9139 || i >= 9140 && i <= 9179 || i >= 9180 && i <= 9185 || i >= 9186 && i <= 9254 || i >= 9255 && i <= 9279 || i >= 9280 && i <= 9290 || i >= 9291 && i <= 9311 || i >= 9472 && i <= 9654 || 9655 === i || i >= 9656 && i <= 9664 || 9665 === i || i >= 9666 && i <= 9719 || i >= 9720 && i <= 9727 || i >= 9728 && i <= 9838 || 9839 === i || i >= 9840 && i <= 10087 || 10088 === i || 10089 === i || 10090 === i || 10091 === i || 10092 === i || 10093 === i || 10094 === i || 10095 === i || 10096 === i || 10097 === i || 10098 === i || 10099 === i || 10100 === i || 10101 === i || i >= 10132 && i <= 10175 || i >= 10176 && i <= 10180 || 10181 === i || 10182 === i || i >= 10183 && i <= 10213 || 10214 === i || 10215 === i || 10216 === i || 10217 === i || 10218 === i || 10219 === i || 10220 === i || 10221 === i || 10222 === i || 10223 === i || i >= 10224 && i <= 10239 || i >= 10240 && i <= 10495 || i >= 10496 && i <= 10626 || 10627 === i || 10628 === i || 10629 === i || 10630 === i || 10631 === i || 10632 === i || 10633 === i || 10634 === i || 10635 === i || 10636 === i || 10637 === i || 10638 === i || 10639 === i || 10640 === i || 10641 === i || 10642 === i || 10643 === i || 10644 === i || 10645 === i || 10646 === i || 10647 === i || 10648 === i || i >= 10649 && i <= 10711 || 10712 === i || 10713 === i || 10714 === i || 10715 === i || i >= 10716 && i <= 10747 || 10748 === i || 10749 === i || i >= 10750 && i <= 11007 || i >= 11008 && i <= 11055 || i >= 11056 && i <= 11076 || i >= 11077 && i <= 11078 || i >= 11079 && i <= 11084 || i >= 11085 && i <= 11123 || i >= 11124 && i <= 11125 || i >= 11126 && i <= 11157 || 11158 === i || i >= 11159 && i <= 11263 || i >= 11776 && i <= 11777 || 11778 === i || 11779 === i || 11780 === i || 11781 === i || i >= 11782 && i <= 11784 || 11785 === i || 11786 === i || 11787 === i || 11788 === i || 11789 === i || i >= 11790 && i <= 11798 || 11799 === i || i >= 11800 && i <= 11801 || 11802 === i || 11803 === i || 11804 === i || 11805 === i || i >= 11806 && i <= 11807 || 11808 === i || 11809 === i || 11810 === i || 11811 === i || 11812 === i || 11813 === i || 11814 === i || 11815 === i || 11816 === i || 11817 === i || i >= 11818 && i <= 11822 || 11823 === i || i >= 11824 && i <= 11833 || i >= 11834 && i <= 11835 || i >= 11836 && i <= 11839 || 11840 === i || 11841 === i || 11842 === i || i >= 11843 && i <= 11855 || i >= 11856 && i <= 11857 || 11858 === i || i >= 11859 && i <= 11903 || i >= 12289 && i <= 12291 || 12296 === i || 12297 === i || 12298 === i || 12299 === i || 12300 === i || 12301 === i || 12302 === i || 12303 === i || 12304 === i || 12305 === i || i >= 12306 && i <= 12307 || 12308 === i || 12309 === i || 12310 === i || 12311 === i || 12312 === i || 12313 === i || 12314 === i || 12315 === i || 12316 === i || 12317 === i || i >= 12318 && i <= 12319 || 12320 === i || 12336 === i || 64830 === i || 64831 === i || i >= 65093 && i <= 65094) break;
                    r.push(n), t += n >= 65536 ? 2 : 1
                }
                return q.apply(void 0, r)
            };
            var en = function() {
                function e(e, t) {
                    void 0 === t && (t = {}), this.message = e, this.position = {
                        offset: 0,
                        line: 1,
                        column: 1
                    }, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons
                }
                return e.prototype.parse = function() {
                    if (0 !== this.offset()) throw Error("parser can only be used once");
                    return this.parseMessage(0, "", !1)
                }, e.prototype.parseMessage = function(e, t, r) {
                    for (var i = []; !this.isEOF();) {
                        var n = this.char();
                        if (123 === n) {
                            var o = this.parseArgument(e, r);
                            if (o.err) return o;
                            i.push(o.val)
                        } else if (125 === n && e > 0) break;
                        else if (35 === n && ("plural" === t || "selectordinal" === t)) {
                            var h = this.clonePosition();
                            this.bump(), i.push({
                                type: u.pound,
                                location: V(h, this.clonePosition())
                            })
                        } else if (60 !== n || this.ignoreTag || 47 !== this.peek()) {
                            if (60 === n && !this.ignoreTag && eo(this.peek() || 0)) {
                                var o = this.parseTag(e, t);
                                if (o.err) return o;
                                i.push(o.val)
                            } else {
                                var o = this.parseLiteral(e, t);
                                if (o.err) return o;
                                i.push(o.val)
                            }
                        } else {
                            if (!r) return this.error(a.UNMATCHED_CLOSING_TAG, V(this.clonePosition(), this.clonePosition()));
                            break
                        }
                    }
                    return {
                        val: i,
                        err: null
                    }
                }, e.prototype.parseTag = function(e, t) {
                    var r = this.clonePosition();
                    this.bump();
                    var i = this.parseTagName();
                    if (this.bumpSpace(), this.bumpIf("/>")) return {
                        val: {
                            type: u.literal,
                            value: "<".concat(i, "/>"),
                            location: V(r, this.clonePosition())
                        },
                        err: null
                    };
                    if (!this.bumpIf(">")) return this.error(a.INVALID_TAG, V(r, this.clonePosition()));
                    var n = this.parseMessage(e + 1, t, !0);
                    if (n.err) return n;
                    var o = n.val,
                        h = this.clonePosition();
                    if (!this.bumpIf("</")) return this.error(a.UNCLOSED_TAG, V(r, this.clonePosition()));
                    if (this.isEOF() || !eo(this.char())) return this.error(a.INVALID_TAG, V(h, this.clonePosition()));
                    var s = this.clonePosition();
                    return i !== this.parseTagName() ? this.error(a.UNMATCHED_CLOSING_TAG, V(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">")) ? {
                        val: {
                            type: u.tag,
                            value: i,
                            children: o,
                            location: V(r, this.clonePosition())
                        },
                        err: null
                    } : this.error(a.INVALID_TAG, V(h, this.clonePosition()))
                }, e.prototype.parseTagName = function() {
                    var e, t = this.offset();
                    for (this.bump(); !this.isEOF() && (45 === (e = this.char()) || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039);) this.bump();
                    return this.message.slice(t, this.offset())
                }, e.prototype.parseLiteral = function(e, t) {
                    for (var r = this.clonePosition(), i = "";;) {
                        var n = this.tryParseQuote(t);
                        if (n) {
                            i += n;
                            continue
                        }
                        var o = this.tryParseUnquoted(e, t);
                        if (o) {
                            i += o;
                            continue
                        }
                        var h = this.tryParseLeftAngleBracket();
                        if (h) {
                            i += h;
                            continue
                        }
                        break
                    }
                    var s = V(r, this.clonePosition());
                    return {
                        val: {
                            type: u.literal,
                            value: i,
                            location: s
                        },
                        err: null
                    }
                }, e.prototype.tryParseLeftAngleBracket = function() {
                    var e;
                    return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (eo(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<")
                }, e.prototype.tryParseQuote = function(e) {
                    if (this.isEOF() || 39 !== this.char()) return null;
                    switch (this.peek()) {
                        case 39:
                            return this.bump(), this.bump(), "'";
                        case 123:
                        case 60:
                        case 62:
                        case 125:
                            break;
                        case 35:
                            if ("plural" === e || "selectordinal" === e) break;
                            return null;
                        default:
                            return null
                    }
                    this.bump();
                    var t = [this.char()];
                    for (this.bump(); !this.isEOF();) {
                        var r = this.char();
                        if (39 === r) {
                            if (39 === this.peek()) t.push(39), this.bump();
                            else {
                                this.bump();
                                break
                            }
                        } else t.push(r);
                        this.bump()
                    }
                    return q.apply(void 0, t)
                }, e.prototype.tryParseUnquoted = function(e, t) {
                    if (this.isEOF()) return null;
                    var r = this.char();
                    return 60 === r || 123 === r || 35 === r && ("plural" === t || "selectordinal" === t) || 125 === r && e > 0 ? null : (this.bump(), q(r))
                }, e.prototype.parseArgument = function(e, t) {
                    var r = this.clonePosition();
                    if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(a.EXPECT_ARGUMENT_CLOSING_BRACE, V(r, this.clonePosition()));
                    if (125 === this.char()) return this.bump(), this.error(a.EMPTY_ARGUMENT, V(r, this.clonePosition()));
                    var i = this.parseIdentifierIfPossible().value;
                    if (!i) return this.error(a.MALFORMED_ARGUMENT, V(r, this.clonePosition()));
                    if (this.bumpSpace(), this.isEOF()) return this.error(a.EXPECT_ARGUMENT_CLOSING_BRACE, V(r, this.clonePosition()));
                    switch (this.char()) {
                        case 125:
                            return this.bump(), {
                                val: {
                                    type: u.argument,
                                    value: i,
                                    location: V(r, this.clonePosition())
                                },
                                err: null
                            };
                        case 44:
                            if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(a.EXPECT_ARGUMENT_CLOSING_BRACE, V(r, this.clonePosition()));
                            return this.parseArgumentOptions(e, t, i, r);
                        default:
                            return this.error(a.MALFORMED_ARGUMENT, V(r, this.clonePosition()))
                    }
                }, e.prototype.parseIdentifierIfPossible = function() {
                    var e = this.clonePosition(),
                        t = this.offset(),
                        r = p(this.message, t),
                        i = t + r.length;
                    return this.bumpTo(i), {
                        value: r,
                        location: V(e, this.clonePosition())
                    }
                }, e.prototype.parseArgumentOptions = function(e, t, r, i) {
                    var n, o = this.clonePosition(),
                        h = this.parseIdentifierIfPossible().value,
                        s = this.clonePosition();
                    switch (h) {
                        case "":
                            return this.error(a.EXPECT_ARGUMENT_TYPE, V(o, s));
                        case "number":
                        case "date":
                        case "time":
                            this.bumpSpace();
                            var l = null;
                            if (this.bumpIf(",")) {
                                this.bumpSpace();
                                var p = this.clonePosition(),
                                    f = this.parseSimpleArgStyleIfPossible();
                                if (f.err) return f;
                                var E = er(f.val);
                                if (0 === E.length) return this.error(a.EXPECT_ARGUMENT_STYLE, V(this.clonePosition(), this.clonePosition()));
                                l = {
                                    style: E,
                                    styleLocation: V(p, this.clonePosition())
                                }
                            }
                            var m = this.tryParseArgumentClose(i);
                            if (m.err) return m;
                            var b = V(i, this.clonePosition());
                            if (l && J(null == l ? void 0 : l.style, "::", 0)) {
                                var y, H = et(l.style.slice(2));
                                if ("number" === h) {
                                    var f = this.parseNumberSkeletonFromString(H, l.styleLocation);
                                    if (f.err) return f;
                                    return {
                                        val: {
                                            type: u.number,
                                            value: r,
                                            location: b,
                                            style: f.val
                                        },
                                        err: null
                                    }
                                }
                                if (0 === H.length) return this.error(a.EXPECT_DATE_TIME_SKELETON, b);
                                var T = H;
                                this.locale && (T = function(e, t) {
                                    for (var r = "", i = 0; i < e.length; i++) {
                                        var n = e.charAt(i);
                                        if ("j" === n) {
                                            for (var o = 0; i + 1 < e.length && e.charAt(i + 1) === n;) o++, i++;
                                            var h = 1 + (1 & o),
                                                s = o < 2 ? 1 : 3 + (o >> 1),
                                                a = function(e) {
                                                    var t, r = e.hourCycle;
                                                    if (void 0 === r && e.hourCycles && e.hourCycles.length && (r = e.hourCycles[0]), r) switch (r) {
                                                        case "h24":
                                                            return "k";
                                                        case "h23":
                                                            return "H";
                                                        case "h12":
                                                            return "h";
                                                        case "h11":
                                                            return "K";
                                                        default:
                                                            throw Error("Invalid hourCycle")
                                                    }
                                                    var i = e.language;
                                                    return "root" !== i && (t = e.maximize().region), (w[t || ""] || w[i || ""] || w["".concat(i, "-001")] || w["001"])[0]
                                                }(t);
                                            for (("H" == a || "k" == a) && (s = 0); s-- > 0;) r += "a";
                                            for (; h-- > 0;) r = a + r
                                        } else "J" === n ? r += "H" : r += n
                                    }
                                    return r
                                }(H, this.locale));
                                var E = {
                                    type: c.dateTime,
                                    pattern: T,
                                    location: l.styleLocation,
                                    parsedOptions: this.shouldParseSkeletons ? (y = {}, T.replace(N, function(e) {
                                        var t = e.length;
                                        switch (e[0]) {
                                            case "G":
                                                y.era = 4 === t ? "long" : 5 === t ? "narrow" : "short";
                                                break;
                                            case "y":
                                                y.year = 2 === t ? "2-digit" : "numeric";
                                                break;
                                            case "Y":
                                            case "u":
                                            case "U":
                                            case "r":
                                                throw RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
                                            case "q":
                                            case "Q":
                                                throw RangeError("`q/Q` (quarter) patterns are not supported");
                                            case "M":
                                            case "L":
                                                y.month = ["numeric", "2-digit", "short", "long", "narrow"][t - 1];
                                                break;
                                            case "w":
                                            case "W":
                                                throw RangeError("`w/W` (week) patterns are not supported");
                                            case "d":
                                                y.day = ["numeric", "2-digit"][t - 1];
                                                break;
                                            case "D":
                                            case "F":
                                            case "g":
                                                throw RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
                                            case "E":
                                                y.weekday = 4 === t ? "short" : 5 === t ? "narrow" : "short";
                                                break;
                                            case "e":
                                                if (t < 4) throw RangeError("`e..eee` (weekday) patterns are not supported");
                                                y.weekday = ["short", "long", "narrow", "short"][t - 4];
                                                break;
                                            case "c":
                                                if (t < 4) throw RangeError("`c..ccc` (weekday) patterns are not supported");
                                                y.weekday = ["short", "long", "narrow", "short"][t - 4];
                                                break;
                                            case "a":
                                                y.hour12 = !0;
                                                break;
                                            case "b":
                                            case "B":
                                                throw RangeError("`b/B` (period) patterns are not supported, use `a` instead");
                                            case "h":
                                                y.hourCycle = "h12", y.hour = ["numeric", "2-digit"][t - 1];
                                                break;
                                            case "H":
                                                y.hourCycle = "h23", y.hour = ["numeric", "2-digit"][t - 1];
                                                break;
                                            case "K":
                                                y.hourCycle = "h11", y.hour = ["numeric", "2-digit"][t - 1];
                                                break;
                                            case "k":
                                                y.hourCycle = "h24", y.hour = ["numeric", "2-digit"][t - 1];
                                                break;
                                            case "j":
                                            case "J":
                                            case "C":
                                                throw RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
                                            case "m":
                                                y.minute = ["numeric", "2-digit"][t - 1];
                                                break;
                                            case "s":
                                                y.second = ["numeric", "2-digit"][t - 1];
                                                break;
                                            case "S":
                                            case "A":
                                                throw RangeError("`S/A` (second) patterns are not supported, use `s` instead");
                                            case "z":
                                                y.timeZoneName = t < 4 ? "short" : "long";
                                                break;
                                            case "Z":
                                            case "O":
                                            case "v":
                                            case "V":
                                            case "X":
                                            case "x":
                                                throw RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")
                                        }
                                        return ""
                                    }), y) : {}
                                };
                                return {
                                    val: {
                                        type: "date" === h ? u.date : u.time,
                                        value: r,
                                        location: b,
                                        style: E
                                    },
                                    err: null
                                }
                            }
                            return {
                                val: {
                                    type: "number" === h ? u.number : "date" === h ? u.date : u.time,
                                    value: r,
                                    location: b,
                                    style: null !== (n = null == l ? void 0 : l.style) && void 0 !== n ? n : null
                                },
                                err: null
                            };
                        case "plural":
                        case "selectordinal":
                        case "select":
                            var B = this.clonePosition();
                            if (this.bumpSpace(), !this.bumpIf(",")) return this.error(a.EXPECT_SELECT_ARGUMENT_OPTIONS, V(B, g({}, B)));
                            this.bumpSpace();
                            var v = this.parseIdentifierIfPossible(),
                                _ = 0;
                            if ("select" !== h && "offset" === v.value) {
                                if (!this.bumpIf(":")) return this.error(a.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, V(this.clonePosition(), this.clonePosition()));
                                this.bumpSpace();
                                var f = this.tryParseDecimalInteger(a.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, a.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
                                if (f.err) return f;
                                this.bumpSpace(), v = this.parseIdentifierIfPossible(), _ = f.val
                            }
                            var A = this.tryParsePluralOrSelectOptions(e, h, t, v);
                            if (A.err) return A;
                            var m = this.tryParseArgumentClose(i);
                            if (m.err) return m;
                            var d = V(i, this.clonePosition());
                            if ("select" === h) return {
                                val: {
                                    type: u.select,
                                    value: r,
                                    options: $(A.val),
                                    location: d
                                },
                                err: null
                            };
                            return {
                                val: {
                                    type: u.plural,
                                    value: r,
                                    options: $(A.val),
                                    offset: _,
                                    pluralType: "plural" === h ? "cardinal" : "ordinal",
                                    location: d
                                },
                                err: null
                            };
                        default:
                            return this.error(a.INVALID_ARGUMENT_TYPE, V(o, s))
                    }
                }, e.prototype.tryParseArgumentClose = function(e) {
                    return this.isEOF() || 125 !== this.char() ? this.error(a.EXPECT_ARGUMENT_CLOSING_BRACE, V(e, this.clonePosition())) : (this.bump(), {
                        val: !0,
                        err: null
                    })
                }, e.prototype.parseSimpleArgStyleIfPossible = function() {
                    for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
                        case 39:
                            this.bump();
                            var r = this.clonePosition();
                            if (!this.bumpUntil("'")) return this.error(a.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, V(r, this.clonePosition()));
                            this.bump();
                            break;
                        case 123:
                            e += 1, this.bump();
                            break;
                        case 125:
                            if (!(e > 0)) return {
                                val: this.message.slice(t.offset, this.offset()),
                                err: null
                            };
                            e -= 1;
                            break;
                        default:
                            this.bump()
                    }
                    return {
                        val: this.message.slice(t.offset, this.offset()),
                        err: null
                    }
                }, e.prototype.parseNumberSkeletonFromString = function(e, t) {
                    var r = [];
                    try {
                        r = function(e) {
                            if (0 === e.length) throw Error("Number skeleton cannot be empty");
                            for (var t = e.split(I).filter(function(e) {
                                    return e.length > 0
                                }), r = [], i = 0; i < t.length; i++) {
                                var n = t[i].split("/");
                                if (0 === n.length) throw Error("Invalid number skeleton");
                                for (var o = n[0], h = n.slice(1), s = 0; s < h.length; s++)
                                    if (0 === h[s].length) throw Error("Invalid number skeleton");
                                r.push({
                                    stem: o,
                                    options: h
                                })
                            }
                            return r
                        }(e)
                    } catch (e) {
                        return this.error(a.INVALID_NUMBER_SKELETON, t)
                    }
                    return {
                        val: {
                            type: c.number,
                            tokens: r,
                            location: t,
                            parsedOptions: this.shouldParseSkeletons ? function(e) {
                                for (var t = {}, r = 0; r < e.length; r++) {
                                    var i = e[r];
                                    switch (i.stem) {
                                        case "percent":
                                        case "%":
                                            t.style = "percent";
                                            continue;
                                        case "%x100":
                                            t.style = "percent", t.scale = 100;
                                            continue;
                                        case "currency":
                                            t.style = "currency", t.currency = i.options[0];
                                            continue;
                                        case "group-off":
                                        case ",_":
                                            t.useGrouping = !1;
                                            continue;
                                        case "precision-integer":
                                        case ".":
                                            t.maximumFractionDigits = 0;
                                            continue;
                                        case "measure-unit":
                                        case "unit":
                                            t.style = "unit", t.unit = i.options[0].replace(/^(.*?)-/, "");
                                            continue;
                                        case "compact-short":
                                        case "K":
                                            t.notation = "compact", t.compactDisplay = "short";
                                            continue;
                                        case "compact-long":
                                        case "KK":
                                            t.notation = "compact", t.compactDisplay = "long";
                                            continue;
                                        case "scientific":
                                            t = g(g(g({}, t), {
                                                notation: "scientific"
                                            }), i.options.reduce(function(e, t) {
                                                return g(g({}, e), G(t) || {})
                                            }, {}));
                                            continue;
                                        case "engineering":
                                            t = g(g(g({}, t), {
                                                notation: "engineering"
                                            }), i.options.reduce(function(e, t) {
                                                return g(g({}, e), G(t) || {})
                                            }, {}));
                                            continue;
                                        case "notation-simple":
                                            t.notation = "standard";
                                            continue;
                                        case "unit-width-narrow":
                                            t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
                                            continue;
                                        case "unit-width-short":
                                            t.currencyDisplay = "code", t.unitDisplay = "short";
                                            continue;
                                        case "unit-width-full-name":
                                            t.currencyDisplay = "name", t.unitDisplay = "long";
                                            continue;
                                        case "unit-width-iso-code":
                                            t.currencyDisplay = "symbol";
                                            continue;
                                        case "scale":
                                            t.scale = parseFloat(i.options[0]);
                                            continue;
                                        case "integer-width":
                                            if (i.options.length > 1) throw RangeError("integer-width stems only accept a single optional option");
                                            i.options[0].replace(O, function(e, r, i, n, o, h) {
                                                if (r) t.minimumIntegerDigits = i.length;
                                                else if (n && o) throw Error("We currently do not support maximum integer digits");
                                                else if (h) throw Error("We currently do not support exact integer digits");
                                                return ""
                                            });
                                            continue
                                    }
                                    if (M.test(i.stem)) {
                                        t.minimumIntegerDigits = i.stem.length;
                                        continue
                                    }
                                    if (C.test(i.stem)) {
                                        if (i.options.length > 1) throw RangeError("Fraction-precision stems only accept a single optional option");
                                        i.stem.replace(C, function(e, r, i, n, o, h) {
                                            return "*" === i ? t.minimumFractionDigits = r.length : n && "#" === n[0] ? t.maximumFractionDigits = n.length : o && h ? (t.minimumFractionDigits = o.length, t.maximumFractionDigits = o.length + h.length) : (t.minimumFractionDigits = r.length, t.maximumFractionDigits = r.length), ""
                                        });
                                        var n = i.options[0];
                                        "w" === n ? t = g(g({}, t), {
                                            trailingZeroDisplay: "stripIfInteger"
                                        }) : n && (t = g(g({}, t), U(n)));
                                        continue
                                    }
                                    if (R.test(i.stem)) {
                                        t = g(g({}, t), U(i.stem));
                                        continue
                                    }
                                    var o = G(i.stem);
                                    o && (t = g(g({}, t), o));
                                    var h = function(e) {
                                        var t;
                                        if ("E" === e[0] && "E" === e[1] ? (t = {
                                                notation: "engineering"
                                            }, e = e.slice(2)) : "E" === e[0] && (t = {
                                                notation: "scientific"
                                            }, e = e.slice(1)), t) {
                                            var r = e.slice(0, 2);
                                            if ("+!" === r ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === r && (t.signDisplay = "exceptZero", e = e.slice(2)), !M.test(e)) throw Error("Malformed concise eng/scientific notation");
                                            t.minimumIntegerDigits = e.length
                                        }
                                        return t
                                    }(i.stem);
                                    h && (t = g(g({}, t), h))
                                }
                                return t
                            }(r) : {}
                        },
                        err: null
                    }
                }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, r, i) {
                    for (var n, o = !1, h = [], s = new Set, u = i.value, c = i.location;;) {
                        if (0 === u.length) {
                            var l = this.clonePosition();
                            if ("select" !== t && this.bumpIf("=")) {
                                var p = this.tryParseDecimalInteger(a.EXPECT_PLURAL_ARGUMENT_SELECTOR, a.INVALID_PLURAL_ARGUMENT_SELECTOR);
                                if (p.err) return p;
                                c = V(l, this.clonePosition()), u = this.message.slice(l.offset, this.offset())
                            } else break
                        }
                        if (s.has(u)) return this.error("select" === t ? a.DUPLICATE_SELECT_ARGUMENT_SELECTOR : a.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
                        "other" === u && (o = !0), this.bumpSpace();
                        var f = this.clonePosition();
                        if (!this.bumpIf("{")) return this.error("select" === t ? a.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : a.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, V(this.clonePosition(), this.clonePosition()));
                        var E = this.parseMessage(e + 1, t, r);
                        if (E.err) return E;
                        var m = this.tryParseArgumentClose(f);
                        if (m.err) return m;
                        h.push([u, {
                            value: E.val,
                            location: V(f, this.clonePosition())
                        }]), s.add(u), this.bumpSpace(), u = (n = this.parseIdentifierIfPossible()).value, c = n.location
                    }
                    return 0 === h.length ? this.error("select" === t ? a.EXPECT_SELECT_ARGUMENT_SELECTOR : a.EXPECT_PLURAL_ARGUMENT_SELECTOR, V(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(a.MISSING_OTHER_CLAUSE, V(this.clonePosition(), this.clonePosition())) : {
                        val: h,
                        err: null
                    }
                }, e.prototype.tryParseDecimalInteger = function(e, t) {
                    var r = 1,
                        i = this.clonePosition();
                    this.bumpIf("+") || this.bumpIf("-") && (r = -1);
                    for (var n = !1, o = 0; !this.isEOF();) {
                        var h = this.char();
                        if (h >= 48 && h <= 57) n = !0, o = 10 * o + (h - 48), this.bump();
                        else break
                    }
                    var s = V(i, this.clonePosition());
                    return n ? W(o *= r) ? {
                        val: o,
                        err: null
                    } : this.error(t, s) : this.error(e, s)
                }, e.prototype.offset = function() {
                    return this.position.offset
                }, e.prototype.isEOF = function() {
                    return this.offset() === this.message.length
                }, e.prototype.clonePosition = function() {
                    return {
                        offset: this.position.offset,
                        line: this.position.line,
                        column: this.position.column
                    }
                }, e.prototype.char = function() {
                    var e = this.position.offset;
                    if (e >= this.message.length) throw Error("out of bound");
                    var t = ee(this.message, e);
                    if (void 0 === t) throw Error("Offset ".concat(e, " is at invalid UTF-16 code unit boundary"));
                    return t
                }, e.prototype.error = function(e, t) {
                    return {
                        val: null,
                        err: {
                            kind: e,
                            message: this.message,
                            location: t
                        }
                    }
                }, e.prototype.bump = function() {
                    if (!this.isEOF()) {
                        var e = this.char();
                        10 === e ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2)
                    }
                }, e.prototype.bumpIf = function(e) {
                    if (J(this.message, e, this.offset())) {
                        for (var t = 0; t < e.length; t++) this.bump();
                        return !0
                    }
                    return !1
                }, e.prototype.bumpUntil = function(e) {
                    var t = this.offset(),
                        r = this.message.indexOf(e, t);
                    return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1)
                }, e.prototype.bumpTo = function(e) {
                    if (this.offset() > e) throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
                    for (e = Math.min(e, this.message.length);;) {
                        var t = this.offset();
                        if (t === e) break;
                        if (t > e) throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
                        if (this.bump(), this.isEOF()) break
                    }
                }, e.prototype.bumpSpace = function() {
                    for (; !this.isEOF() && eh(this.char());) this.bump()
                }, e.prototype.peek = function() {
                    if (this.isEOF()) return null;
                    var e = this.char(),
                        t = this.offset(),
                        r = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
                    return null != r ? r : null
                }, e
            }();

            function eo(e) {
                return e >= 97 && e <= 122 || e >= 65 && e <= 90
            }

            function eh(e) {
                return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
            }

            function es(e, t) {
                void 0 === t && (t = {}), t = g({
                    shouldParseSkeletons: !0,
                    requiresOtherClause: !0
                }, t);
                var r = new en(e, t).parse();
                if (r.err) {
                    var i = SyntaxError(a[r.err.kind]);
                    throw i.location = r.err.location, i.originalMessage = r.err.message, i
                }
                return (null == t ? void 0 : t.captureLocation) || function e(t) {
                    t.forEach(function(t) {
                        if (delete t.location, _(t) || A(t))
                            for (var r in t.options) delete t.options[r].location, e(t.options[r].value);
                        else T(t) && P(t.style) ? delete t.style.location : (B(t) || v(t)) && L(t.style) ? delete t.style.location : d(t) && e(t.children)
                    })
                }(r.val), r.val
            }

            function ea(e, t) {
                var r = t && t.cache ? t.cache : eE,
                    i = t && t.serializer ? t.serializer : ep;
                return (t && t.strategy ? t.strategy : el)(e, {
                    cache: r,
                    serializer: i
                })
            }

            function eu(e, t, r, i) {
                var n = null == i || "number" == typeof i || "boolean" == typeof i ? i : r(i),
                    o = t.get(n);
                return void 0 === o && (o = e.call(this, i), t.set(n, o)), o
            }

            function ec(e, t, r) {
                var i = Array.prototype.slice.call(arguments, 3),
                    n = r(i),
                    o = t.get(n);
                return void 0 === o && (o = e.apply(this, i), t.set(n, o)), o
            }

            function el(e, t) {
                var r, i, n = 1 === e.length ? eu : ec;
                return r = t.cache.create(), i = t.serializer, n.bind(this, e, r, i)
            }
            var ep = function() {
                return JSON.stringify(arguments)
            };

            function ef() {
                this.cache = Object.create(null)
            }
            ef.prototype.get = function(e) {
                return this.cache[e]
            }, ef.prototype.set = function(e, t) {
                this.cache[e] = t
            };
            var eE = {
                    create: function() {
                        return new ef
                    }
                },
                em = {
                    variadic: function(e, t) {
                        var r, i;
                        return r = t.cache.create(), i = t.serializer, ec.bind(this, e, r, i)
                    },
                    monadic: function(e, t) {
                        var r, i;
                        return r = t.cache.create(), i = t.serializer, eu.bind(this, e, r, i)
                    }
                };
            (h = f || (f = {})).MISSING_VALUE = "MISSING_VALUE", h.INVALID_VALUE = "INVALID_VALUE", h.MISSING_INTL_API = "MISSING_INTL_API";
            var eb = function(e) {
                    function t(t, r, i) {
                        var n = e.call(this, t) || this;
                        return n.code = r, n.originalMessage = i, n
                    }
                    return b(t, e), t.prototype.toString = function() {
                        return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
                    }, t
                }(Error),
                eg = function(e) {
                    function t(t, r, i, n) {
                        return e.call(this, 'Invalid values for "'.concat(t, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), f.INVALID_VALUE, n) || this
                    }
                    return b(t, e), t
                }(eb),
                ey = function(e) {
                    function t(t, r, i) {
                        return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(r), f.INVALID_VALUE, i) || this
                    }
                    return b(t, e), t
                }(eb),
                eH = function(e) {
                    function t(t, r) {
                        return e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(r, '"'), f.MISSING_VALUE, r) || this
                    }
                    return b(t, e), t
                }(eb);

            function eT(e) {
                return {
                    create: function() {
                        return {
                            get: function(t) {
                                return e[t]
                            },
                            set: function(t, r) {
                                e[t] = r
                            }
                        }
                    }
                }
            }(s = E || (E = {}))[s.literal = 0] = "literal", s[s.object = 1] = "object";
            var eB = function() {
                function e(t, r, i, n) {
                    void 0 === r && (r = e.defaultLocale);
                    var o, h, s = this;
                    if (this.formatterCache = {
                            number: {},
                            dateTime: {},
                            pluralRules: {}
                        }, this.format = function(e) {
                            var t = s.formatToParts(e);
                            if (1 === t.length) return t[0].value;
                            var r = t.reduce(function(e, t) {
                                return e.length && t.type === E.literal && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e
                            }, []);
                            return r.length <= 1 ? r[0] || "" : r
                        }, this.formatToParts = function(e) {
                            return function e(t, r, i, n, o, h, s) {
                                if (1 === t.length && H(t[0])) return [{
                                    type: E.literal,
                                    value: t[0].value
                                }];
                                for (var a = [], c = 0; c < t.length; c++) {
                                    var l = t[c];
                                    if (H(l)) {
                                        a.push({
                                            type: E.literal,
                                            value: l.value
                                        });
                                        continue
                                    }
                                    if (l.type === u.pound) {
                                        "number" == typeof h && a.push({
                                            type: E.literal,
                                            value: i.getNumberFormat(r).format(h)
                                        });
                                        continue
                                    }
                                    var p = l.value;
                                    if (!(o && p in o)) throw new eH(p, s);
                                    var m = o[p];
                                    if (l.type === u.argument) {
                                        m && "string" != typeof m && "number" != typeof m || (m = "string" == typeof m || "number" == typeof m ? String(m) : ""), a.push({
                                            type: "string" == typeof m ? E.literal : E.object,
                                            value: m
                                        });
                                        continue
                                    }
                                    if (B(l)) {
                                        var b = "string" == typeof l.style ? n.date[l.style] : L(l.style) ? l.style.parsedOptions : void 0;
                                        a.push({
                                            type: E.literal,
                                            value: i.getDateTimeFormat(r, b).format(m)
                                        });
                                        continue
                                    }
                                    if (v(l)) {
                                        var b = "string" == typeof l.style ? n.time[l.style] : L(l.style) ? l.style.parsedOptions : n.time.medium;
                                        a.push({
                                            type: E.literal,
                                            value: i.getDateTimeFormat(r, b).format(m)
                                        });
                                        continue
                                    }
                                    if (T(l)) {
                                        var b = "string" == typeof l.style ? n.number[l.style] : P(l.style) ? l.style.parsedOptions : void 0;
                                        b && b.scale && (m *= b.scale || 1), a.push({
                                            type: E.literal,
                                            value: i.getNumberFormat(r, b).format(m)
                                        });
                                        continue
                                    }
                                    if (d(l)) {
                                        var g = l.children,
                                            y = l.value,
                                            S = o[y];
                                        if ("function" != typeof S) throw new ey(y, "function", s);
                                        var N = S(e(g, r, i, n, o, h).map(function(e) {
                                            return e.value
                                        }));
                                        Array.isArray(N) || (N = [N]), a.push.apply(a, N.map(function(e) {
                                            return {
                                                type: "string" == typeof e ? E.literal : E.object,
                                                value: e
                                            }
                                        }))
                                    }
                                    if (_(l)) {
                                        var I = l.options[m] || l.options.other;
                                        if (!I) throw new eg(l.value, m, Object.keys(l.options), s);
                                        a.push.apply(a, e(I.value, r, i, n, o));
                                        continue
                                    }
                                    if (A(l)) {
                                        var I = l.options["=".concat(m)];
                                        if (!I) {
                                            if (!Intl.PluralRules) throw new eb('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', f.MISSING_INTL_API, s);
                                            var C = i.getPluralRules(r, {
                                                type: l.pluralType
                                            }).select(m - (l.offset || 0));
                                            I = l.options[C] || l.options.other
                                        }
                                        if (!I) throw new eg(l.value, m, Object.keys(l.options), s);
                                        a.push.apply(a, e(I.value, r, i, n, o, m - (l.offset || 0)));
                                        continue
                                    }
                                }
                                return a.length < 2 ? a : a.reduce(function(e, t) {
                                    var r = e[e.length - 1];
                                    return r && r.type === E.literal && t.type === E.literal ? r.value += t.value : e.push(t), e
                                }, [])
                            }(s.ast, s.locales, s.formatters, s.formats, e, void 0, s.message)
                        }, this.resolvedOptions = function() {
                            var e;
                            return {
                                locale: (null === (e = s.resolvedLocale) || void 0 === e ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(s.locales)[0]
                            }
                        }, this.getAst = function() {
                            return s.ast
                        }, this.locales = r, this.resolvedLocale = e.resolveLocale(r), "string" == typeof t) {
                        if (this.message = t, !e.__parse) throw TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
                        var a = n || {},
                            c = (a.formatters, function(e, t) {
                                var r = {};
                                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (r[i] = e[i]);
                                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                                    for (var n = 0, i = Object.getOwnPropertySymbols(e); n < i.length; n++) 0 > t.indexOf(i[n]) && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]]);
                                return r
                            }(a, ["formatters"]));
                        this.ast = e.__parse(t, g(g({}, c), {
                            locale: this.resolvedLocale
                        }))
                    } else this.ast = t;
                    if (!Array.isArray(this.ast)) throw TypeError("A message must be provided as a String or AST.");
                    this.formats = (o = e.formats, i ? Object.keys(o).reduce(function(e, t) {
                        var r, n;
                        return e[t] = (r = o[t], (n = i[t]) ? g(g(g({}, r || {}), n || {}), Object.keys(r).reduce(function(e, t) {
                            return e[t] = g(g({}, r[t]), n[t] || {}), e
                        }, {})) : r), e
                    }, g({}, o)) : o), this.formatters = n && n.formatters || (void 0 === (h = this.formatterCache) && (h = {
                        number: {},
                        dateTime: {},
                        pluralRules: {}
                    }), {
                        getNumberFormat: ea(function() {
                            for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                            return new((e = Intl.NumberFormat).bind.apply(e, y([void 0], t, !1)))
                        }, {
                            cache: eT(h.number),
                            strategy: em.variadic
                        }),
                        getDateTimeFormat: ea(function() {
                            for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                            return new((e = Intl.DateTimeFormat).bind.apply(e, y([void 0], t, !1)))
                        }, {
                            cache: eT(h.dateTime),
                            strategy: em.variadic
                        }),
                        getPluralRules: ea(function() {
                            for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                            return new((e = Intl.PluralRules).bind.apply(e, y([void 0], t, !1)))
                        }, {
                            cache: eT(h.pluralRules),
                            strategy: em.variadic
                        })
                    })
                }
                return Object.defineProperty(e, "defaultLocale", {
                    get: function() {
                        return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), e.memoizedDefaultLocale
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.memoizedDefaultLocale = null, e.resolveLocale = function(e) {
                    if (void 0 !== Intl.Locale) {
                        var t = Intl.NumberFormat.supportedLocalesOf(e);
                        return new Intl.Locale(t.length > 0 ? t[0] : "string" == typeof e ? e : e[0])
                    }
                }, e.__parse = es, e.formats = {
                    number: {
                        integer: {
                            maximumFractionDigits: 0
                        },
                        currency: {
                            style: "currency"
                        },
                        percent: {
                            style: "percent"
                        }
                    },
                    date: {
                        short: {
                            month: "numeric",
                            day: "numeric",
                            year: "2-digit"
                        },
                        medium: {
                            month: "short",
                            day: "numeric",
                            year: "numeric"
                        },
                        long: {
                            month: "long",
                            day: "numeric",
                            year: "numeric"
                        },
                        full: {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                            year: "numeric"
                        }
                    },
                    time: {
                        short: {
                            hour: "numeric",
                            minute: "numeric"
                        },
                        medium: {
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric"
                        },
                        long: {
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric",
                            timeZoneName: "short"
                        },
                        full: {
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric",
                            timeZoneName: "short"
                        }
                    }
                }, e
            }()
        }
    }
]);