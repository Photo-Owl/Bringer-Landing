"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1074], {
        9166: function(d, $, e) {
            e.d($, {
                a: function() {
                    return p
                }
            });
            var t = e(44547),
                n = e(14141),
                r = e(25348),
                o = e(79500),
                i = e(41530),
                a = e(72465),
                c = e(22674),
                u = e(45919),
                l = e(11261),
                s = e(19550),
                p = (0, n.ZP)(l._).attrs(function(d) {
                    return {
                        contentWrapper: !!d.iconOnly && s.T
                    }
                }).withConfig({
                    displayName: "Action",
                    componentId: "rui__sc-1q34a5u-0"
                })(["color:", ";", " width:max-content;max-width:100%;&:disabled,&[aria-disabled='true']{opacity:0.5;}", " ", ""], c.W.color.blue, (0, t.By)({
                    color: {
                        property: "color",
                        scale: r.C.COLORS
                    }
                }), function(d) {
                    return {
                        alignItems: (0, a.G)(d.align || "center")
                    }
                }, function(d) {
                    return d.inherit ? null : (0, u.Ou)(o.p.ACTION)
                });
            p.defaultProps = {
                size: i.q.SM
            }
        },
        84353: function(d, $, e) {
            e.d($, {
                o: function() {
                    return f
                }
            });
            var t = e(67294),
                n = e(14141),
                r = e(16678),
                o = e(25394),
                i = e(45919),
                a = e(30116),
                c = ["ratio", "children"];

            function u() {
                return (u = Object.assign ? Object.assign.bind() : function(d) {
                    for (var $ = 1; $ < arguments.length; $++) {
                        var e = arguments[$];
                        for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (d[t] = e[t])
                    }
                    return d
                }).apply(this, arguments)
            }
            var l = n.ZP.div.withConfig({
                    displayName: "AspectRatio__Spacer",
                    componentId: "rui__sc-3p9atg-0"
                })(["", " width:100%;height:0;padding-bottom:calc(1 / ", " * 100%);"], (0, r.By)({
                    ratio: {
                        property: o.G.RATIO,
                        transform: function(d) {
                            return "" + d
                        }
                    }
                }), (0, i.z3)(o.G.RATIO)),
                s = n.ZP.div.withConfig({
                    displayName: "AspectRatio__Content",
                    componentId: "rui__sc-3p9atg-1"
                })(["position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:hidden;& > :first-child{width:100%;height:100%;}& > img,& > video{object-fit:cover;}"]),
                p = (0, n.ZP)(a.x).withConfig({
                    displayName: "AspectRatio__Base",
                    componentId: "rui__sc-3p9atg-2"
                })(["position:relative;padding:unset;& > ", "{", "}"], s, r.o3),
                f = (0, t.forwardRef)(function(d, $) {
                    var e = d.ratio,
                        n = d.children,
                        r = function(d, $) {
                            if (null == d) return {};
                            var e, t, n = {},
                                r = Object.keys(d);
                            for (t = 0; t < r.length; t++) e = r[t], $.indexOf(e) >= 0 || (n[e] = d[e]);
                            return n
                        }(d, c);
                    return t.createElement(p, u({
                        ref: $,
                        overflow: "hidden"
                    }, r), t.createElement(s, null, n), t.createElement(l, {
                        role: "none",
                        ratio: void 0 === e ? 1 : e
                    }))
                })
        },
        80571: function(d, $, e) {
            e.d($, {
                k: function() {
                    return n
                },
                u: function() {
                    return t
                }
            });
            var t = function(d) {
                    return d ? "header-label-" + d : void 0
                },
                n = function(d) {
                    return d ? "header-desc-" + d : void 0
                }
        },
        8954: function(d, $, e) {
            e.d($, {
                Ee: function() {
                    return s
                },
                s1: function() {
                    return l
                }
            });
            var t = e(67294),
                n = e(25394),
                r = e(45919),
                o = e(69526),
                i = e(30116),
                a = ["role", "scale", "sizes", "src", "srcSet", "image", "alt", "style", "variant"];

            function c() {
                return (c = Object.assign ? Object.assign.bind() : function(d) {
                    for (var $ = 1; $ < arguments.length; $++) {
                        var e = arguments[$];
                        for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (d[t] = e[t])
                    }
                    return d
                }).apply(this, arguments)
            }
            var u = {
                    ROUND: "round"
                },
                l = {
                    COVER: "cover",
                    CONTAIN: "contain"
                },
                s = (0, t.forwardRef)(function(d, $) {
                    var e, l = d.role,
                        s = d.scale,
                        p = d.sizes,
                        f = d.src,
                        h = d.srcSet,
                        g = d.image,
                        C = d.alt,
                        v = d.style,
                        E = d.variant,
                        T = function(d, $) {
                            if (null == d) return {};
                            var e, t, n = {},
                                r = Object.keys(d);
                            for (t = 0; t < r.length; t++) e = r[t], $.indexOf(e) >= 0 || (n[e] = d[e]);
                            return n
                        }(d, a);
                    return t.createElement(i.x, c({
                        use: "img",
                        ref: $,
                        role: l,
                        display: "block",
                        width: "100%",
                        height: "auto",
                        maxWidth: "100%",
                        radius: E === u.ROUND ? (0, r.z3)(n.G.RADIUS_IMAGE) : void 0,
                        sizes: p,
                        alt: C,
                        style: c({
                            objectFit: s
                        }, v)
                    }, "image" in (e = {
                        src: f,
                        srcSet: h,
                        image: g
                    }) && void 0 !== e.image ? (0, o.Nf)(e.image) : e, T))
                })
        },
        51303: function(d, $, e) {
            e.d($, {
                G: function() {
                    return E
                }
            });
            var t = e(67294),
                n = e(45919),
                r = e(29341),
                o = e(80571),
                i = e(49133),
                a = e(21759),
                c = e(33154),
                u = e(94166),
                l = e(96944),
                s = e(67035),
                p = e(22674),
                f = ["children"];

            function h() {
                return (h = Object.assign ? Object.assign.bind() : function(d) {
                    for (var $ = 1; $ < arguments.length; $++) {
                        var e = arguments[$];
                        for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (d[t] = e[t])
                    }
                    return d
                }).apply(this, arguments)
            }
            var g = (0, t.createContext)(null),
                C = e(24397),
                v = function(d) {
                    return d ? "popup-overlay-button-" + d : void 0
                };

            function E(d) {
                var $ = d.children,
                    e = d.defaultOpen,
                    s = void 0 !== e && e,
                    p = d.open,
                    f = d.labelButtonClose,
                    h = d.shouldKeepMaxHeight,
                    E = void 0 !== h && h,
                    T = d.variant,
                    S = void 0 === T ? C.wT.MODAL_VIEW : T,
                    M = d.size,
                    O = d.scrollRef,
                    A = d.onClose,
                    G = void 0 === A ? n.ZT : A,
                    _ = d.onExited,
                    R = d.onScroll,
                    m = d.preventUserClose,
                    b = void 0 !== m && m,
                    B = d.focusTrap,
                    W = void 0 === B || B,
                    N = d.scrollLock,
                    I = void 0 === N || N,
                    L = d.closeOnEsc,
                    P = void 0 === L || L,
                    y = d.closeOnOverlayClick,
                    K = void 0 === y || y,
                    U = d["aria-label"],
                    w = (0, t.useRef)(null),
                    D = (0, t.useState)(!1),
                    H = D[0],
                    Z = D[1],
                    F = (0, t.useCallback)(function(d) {
                        d || G()
                    }, [G]);
                return t.createElement(g.Provider, {
                    value: S
                }, t.createElement(r.z8, null, function(d) {
                    var e = d.id;
                    return t.createElement(u.Z, {
                        defaultState: s,
                        state: p,
                        onChange: F
                    }, function(d) {
                        var r = d.state,
                            u = d.toggle;
                        return t.createElement(c.f, {
                            elevated: !0,
                            attributes: "child"
                        }, t.createElement(i.u, {
                            open: r,
                            onClose: function() {
                                return u(!1)
                            },
                            __variants: C.ol,
                            variant: S,
                            onExited: _,
                            focusTrap: W && H,
                            scrollLock: I,
                            closeOnEsc: !b && P && H,
                            closeOnOverlayClick: !b && K,
                            __layerFilter: !0
                        }, t.createElement(l.n, {
                            nodeRef: w,
                            in: r,
                            offsetY: -100,
                            onEntered: function() {
                                return Z(!0)
                            },
                            onExited: function() {
                                return Z(!1)
                            }
                        }, t.createElement(a.X, {
                            ref: w,
                            role: "dialog",
                            "aria-modal": !0,
                            "aria-labelledby": (0, o.u)(e),
                            "aria-describedby": (0, o.k)(e),
                            "aria-label": U,
                            "aria-owns": v(e),
                            height: E ? "100%" : S === C.wT.BOTTOM_SHEET || S === C.wT.RESULT ? "auto" : {
                                all: "100%",
                                __popup: "auto"
                            },
                            "data-size": M
                        }, t.createElement(a.X.Content, {
                            ref: O,
                            onScroll: R
                        }, (0, n.mf)($) ? $({
                            isEntered: H,
                            open: r,
                            toggle: u
                        }) : $))), !b && K && t.createElement(i.u.CloseButton, {
                            id: v(e),
                            "aria-label": f,
                            onClick: function() {
                                return u(!1)
                            },
                            hide: "*-md"
                        })))
                    })
                }))
            }
            E.Actions = function(d) {
                var $ = d.children,
                    e = function(d, $) {
                        if (null == d) return {};
                        var e, t, n = {},
                            r = Object.keys(d);
                        for (t = 0; t < r.length; t++) e = r[t], $.indexOf(e) >= 0 || (n[e] = d[e]);
                        return n
                    }(d, f);
                return t.createElement(a.X.Actions, h({
                    px: {
                        all: p.W.space.s16,
                        __popup: p.W.space.s24
                    },
                    mx: {
                        all: p.W.space.n16,
                        __popup: p.W.space.n24
                    },
                    gradient: s.G.Full
                }, e), $)
            }
        },
        24397: function(d, $, e) {
            e.d($, {
                ol: function() {
                    return I
                },
                wT: function() {
                    return O
                }
            });
            var t, n, r, o, i, a, c, u, l, s, p, f = e(25394),
                h = e(67035),
                g = e(22674),
                C = e(45919),
                v = e(14571),
                E = e(49133),
                T = e(21759),
                S = e(11317);

            function M() {
                return (M = Object.assign ? Object.assign.bind() : function(d) {
                    for (var $ = 1; $ < arguments.length; $++) {
                        var e = arguments[$];
                        for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (d[t] = e[t])
                    }
                    return d
                }).apply(this, arguments)
            }
            var O = {
                    MODAL_VIEW: "modal-view",
                    BOTTOM_SHEET: "bottom-sheet",
                    RESULT: "result"
                },
                A = {
                    backgroundColor: g.W.color.groupedBackground,
                    color: g.W.color.foreground,
                    borderRadius: (0, C.bp)({
                        all: (0, C.z3)(f.G.RADIUS_POPUP_TOP),
                        __popup: g.W.radius.popup
                    }),
                    paddingX: (0, C.bp)({
                        all: g.W.space.s16,
                        __popup: g.W.space.s24
                    }),
                    paddingY: (0, C.bp)({
                        all: g.W.space.s16,
                        __popup: g.W.space.s24
                    }),
                    overflowX: "hidden"
                },
                G = ((t = {
                    marginX: "auto",
                    marginTop: "auto",
                    marginBottom: (0, C.bp)({
                        all: g.W.space.none,
                        __popup: "auto"
                    }),
                    width: "100%",
                    maxWidth: (0, C.bp)({
                        __popup: (0, v.h)(400)
                    }),
                    maxHeight: (0, C.bp)({
                        __popup: (0, v.h)(640)
                    })
                })[f.G.HEADER_BACKGROUND_COLOR] = g.W.color.groupedBackground, t[T.X.Content] = A, t),
                _ = M({}, G, ((r = {
                    minHeight: (0, C.bp)({
                        __popup: "min(37.5rem, 100%)"
                    })
                })[T.X.Content] = M({}, A, {
                    borderRadius: (0, C.bp)({
                        all: (0, C.z3)(f.G.RADIUS_POPUP_FULL_SCREEN),
                        __popup: g.W.radius.popup
                    })
                }), r["@media " + g.b.media.popup] = {
                    "&[data-size]": ((n = {
                        maxWidth: "calc(100vw - " + g.W.space.s64 + ")",
                        minHeight: "unset",
                        maxHeight: "calc(" + (0, v.vh)(100) + " - " + g.W.space.s64 + ")"
                    })[S._] = {
                        paddingX: "calc((100% - " + (0, v.h)(400) + ") / 2 + " + g.W.space.s48 + ")",
                        backgroundImage: (0, h.i)(h.G.High)
                    }, n),
                    '&[data-size="sm"]': {
                        width: (0, v.h)(400)
                    },
                    '&[data-size="md"]': {
                        width: (0, v.h)(768)
                    },
                    '&[data-size="lg"]': {
                        width: (0, v.h)(1152)
                    }
                }, r)),
                R = M({}, G, {
                    overflowY: "hidden"
                }),
                m = M({}, R, ((i = {})[T.X.Content] = M({}, A, ((o = {
                    paddingTop: (0, C.bp)({
                        all: g.W.space.s32,
                        __popup: g.W.space.s32
                    }),
                    paddingLeft: g.W.space.s24,
                    paddingRight: g.W.space.s24,
                    paddingBottom: g.W.space.s24,
                    borderRadius: (0, C.z3)(f.G.RADIUS_STATUS_POPUP),
                    backgroundColor: g.W.color.widgetBackground
                })[f.G.GRADIENT_CHANNEL] = g.W.colorChannel.widgetBackground, o)), i)),
                b = M(((a = {
                    display: "flex",
                    flexDirection: "column",
                    paddingTop: (0, C.bp)({
                        all: g.W.space.s8,
                        __popup: g.W.space.s32
                    }),
                    paddingBottom: (0, C.bp)({
                        all: g.W.space.none,
                        __popup: g.W.space.s32
                    })
                })[T.X] = _, a[E.u.CloseButton + ":not(:focus)"] = {
                    opacity: 0,
                    transition: "opacity 0.3s"
                }, a), ((c = {})["&:hover " + T.X + ":not(:hover) ~ " + E.u.CloseButton] = {
                    opacity: 1
                }, c), ((u = {})["@media " + g.b.media.lowHeight] = {
                    paddingY: (0, C.bp)({
                        __popup: g.W.space.s16
                    })
                }, u["&[data-is-tail-layer='true'] > " + T.X + " > " + T.X.Content] = {
                    borderRadius: g.W.radius.popup
                }, u)),
                B = M({}, b),
                W = M({}, b, ((l = {
                    paddingTop: (0, C.bp)({
                        all: "min(" + (0, v.vh)(40) + ", 3rem)",
                        __popup: g.W.space.s32
                    })
                })[T.X] = R, l)),
                N = M({}, b, ((s = {
                    paddingBottom: g.W.space.s24,
                    paddingX: g.W.space.s16
                })[T.X] = m, s)),
                I = ((p = {})[O.MODAL_VIEW] = B, p[O.BOTTOM_SHEET] = W, p[O.RESULT] = N, p)
        },
        92303: function(d, $, e) {
            e.d($, {
                y: function() {
                    return r
                }
            });
            var t = e(67294),
                n = e(45919);

            function r(d, $) {
                void 0 === $ && ($ = !0);
                var e = (0, t.useState)({
                        width: 0,
                        height: 0
                    }),
                    r = e[0],
                    o = e[1];
                return (0, t.useEffect)(function() {
                    var e = d.current;
                    if (e && $) {
                        var t = (0, n.Xe)(e);
                        if (t.ResizeObserver) {
                            var r = new t.ResizeObserver(function(d) {
                                var $ = d[0];
                                if ($.target instanceof t.HTMLElement) {
                                    var e = $.target.getBoundingClientRect();
                                    o(function(d) {
                                        return e.width === d.width && e.height === d.height ? d : {
                                            width: e.width,
                                            height: e.height
                                        }
                                    })
                                }
                            });
                            return r.observe(e),
                                function() {
                                    return r.disconnect()
                                }
                        }
                    }
                }, [d, $]), r
            }
        },
        9522: function(d, $, e) {
            e.d($, {
                G: function() {
                    return r
                }
            });
            var t = e(99583),
                n = e(27691);

            function r() {
                return (0, t.Z)(n.Gg, arguments)
            }
        },
        45004: function(d, $, e) {
            e.d($, {
                y: function() {
                    return r
                }
            });
            var t = e(99583),
                n = e(6500);

            function r() {
                return (0, t.Z)(n.Z, arguments)
            }
        },
        99583: function(d, $, e) {
            e.d($, {
                Z: function() {
                    return n
                }
            });
            var t = {
                version: 4,
                country_calling_codes: {
                    1: ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"],
                    7: ["RU", "KZ"],
                    20: ["EG"],
                    27: ["ZA"],
                    30: ["GR"],
                    31: ["NL"],
                    32: ["BE"],
                    33: ["FR"],
                    34: ["ES"],
                    36: ["HU"],
                    39: ["IT", "VA"],
                    40: ["RO"],
                    41: ["CH"],
                    43: ["AT"],
                    44: ["GB", "GG", "IM", "JE"],
                    45: ["DK"],
                    46: ["SE"],
                    47: ["NO", "SJ"],
                    48: ["PL"],
                    49: ["DE"],
                    51: ["PE"],
                    52: ["MX"],
                    53: ["CU"],
                    54: ["AR"],
                    55: ["BR"],
                    56: ["CL"],
                    57: ["CO"],
                    58: ["VE"],
                    60: ["MY"],
                    61: ["AU", "CC", "CX"],
                    62: ["ID"],
                    63: ["PH"],
                    64: ["NZ"],
                    65: ["SG"],
                    66: ["TH"],
                    81: ["JP"],
                    82: ["KR"],
                    84: ["VN"],
                    86: ["CN"],
                    90: ["TR"],
                    91: ["IN"],
                    92: ["PK"],
                    93: ["AF"],
                    94: ["LK"],
                    95: ["MM"],
                    98: ["IR"],
                    211: ["SS"],
                    212: ["MA", "EH"],
                    213: ["DZ"],
                    216: ["TN"],
                    218: ["LY"],
                    220: ["GM"],
                    221: ["SN"],
                    222: ["MR"],
                    223: ["ML"],
                    224: ["GN"],
                    225: ["CI"],
                    226: ["BF"],
                    227: ["NE"],
                    228: ["TG"],
                    229: ["BJ"],
                    230: ["MU"],
                    231: ["LR"],
                    232: ["SL"],
                    233: ["GH"],
                    234: ["NG"],
                    235: ["TD"],
                    236: ["CF"],
                    237: ["CM"],
                    238: ["CV"],
                    239: ["ST"],
                    240: ["GQ"],
                    241: ["GA"],
                    242: ["CG"],
                    243: ["CD"],
                    244: ["AO"],
                    245: ["GW"],
                    246: ["IO"],
                    247: ["AC"],
                    248: ["SC"],
                    249: ["SD"],
                    250: ["RW"],
                    251: ["ET"],
                    252: ["SO"],
                    253: ["DJ"],
                    254: ["KE"],
                    255: ["TZ"],
                    256: ["UG"],
                    257: ["BI"],
                    258: ["MZ"],
                    260: ["ZM"],
                    261: ["MG"],
                    262: ["RE", "YT"],
                    263: ["ZW"],
                    264: ["NA"],
                    265: ["MW"],
                    266: ["LS"],
                    267: ["BW"],
                    268: ["SZ"],
                    269: ["KM"],
                    290: ["SH", "TA"],
                    291: ["ER"],
                    297: ["AW"],
                    298: ["FO"],
                    299: ["GL"],
                    350: ["GI"],
                    351: ["PT"],
                    352: ["LU"],
                    353: ["IE"],
                    354: ["IS"],
                    355: ["AL"],
                    356: ["MT"],
                    357: ["CY"],
                    358: ["FI", "AX"],
                    359: ["BG"],
                    370: ["LT"],
                    371: ["LV"],
                    372: ["EE"],
                    373: ["MD"],
                    374: ["AM"],
                    375: ["BY"],
                    376: ["AD"],
                    377: ["MC"],
                    378: ["SM"],
                    380: ["UA"],
                    381: ["RS"],
                    382: ["ME"],
                    383: ["XK"],
                    385: ["HR"],
                    386: ["SI"],
                    387: ["BA"],
                    389: ["MK"],
                    420: ["CZ"],
                    421: ["SK"],
                    423: ["LI"],
                    500: ["FK"],
                    501: ["BZ"],
                    502: ["GT"],
                    503: ["SV"],
                    504: ["HN"],
                    505: ["NI"],
                    506: ["CR"],
                    507: ["PA"],
                    508: ["PM"],
                    509: ["HT"],
                    590: ["GP", "BL", "MF"],
                    591: ["BO"],
                    592: ["GY"],
                    593: ["EC"],
                    594: ["GF"],
                    595: ["PY"],
                    596: ["MQ"],
                    597: ["SR"],
                    598: ["UY"],
                    599: ["CW", "BQ"],
                    670: ["TL"],
                    672: ["NF"],
                    673: ["BN"],
                    674: ["NR"],
                    675: ["PG"],
                    676: ["TO"],
                    677: ["SB"],
                    678: ["VU"],
                    679: ["FJ"],
                    680: ["PW"],
                    681: ["WF"],
                    682: ["CK"],
                    683: ["NU"],
                    685: ["WS"],
                    686: ["KI"],
                    687: ["NC"],
                    688: ["TV"],
                    689: ["PF"],
                    690: ["TK"],
                    691: ["FM"],
                    692: ["MH"],
                    850: ["KP"],
                    852: ["HK"],
                    853: ["MO"],
                    855: ["KH"],
                    856: ["LA"],
                    880: ["BD"],
                    886: ["TW"],
                    960: ["MV"],
                    961: ["LB"],
                    962: ["JO"],
                    963: ["SY"],
                    964: ["IQ"],
                    965: ["KW"],
                    966: ["SA"],
                    967: ["YE"],
                    968: ["OM"],
                    970: ["PS"],
                    971: ["AE"],
                    972: ["IL"],
                    973: ["BH"],
                    974: ["QA"],
                    975: ["BT"],
                    976: ["MN"],
                    977: ["NP"],
                    992: ["TJ"],
                    993: ["TM"],
                    994: ["AZ"],
                    995: ["GE"],
                    996: ["KG"],
                    998: ["UZ"]
                },
                countries: {
                    AC: ["247", "00", "(?:[01589]\\d|[46])\\d{4}", [5, 6]],
                    AD: ["376", "00", "(?:1|6\\d)\\d{7}|[135-9]\\d{5}", [6, 8, 9],
                        [
                            ["(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["1"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]
                        ]
                    ],
                    AE: ["971", "00", "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", [5, 6, 7, 8, 9, 10, 11, 12],
                        [
                            ["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]],
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"],
                            ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]
                        ], "0"
                    ],
                    AF: ["93", "00", "[2-7]\\d{8}", [9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]
                        ], "0"
                    ],
                    AG: ["1", "011", "(?:268|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([457]\\d{6})$|1", "268$1", 0, "268"],
                    AI: ["1", "011", "(?:264|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2457]\\d{6})$|1", "264$1", 0, "264"],
                    AL: ["355", "00", "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}", [6, 7, 8, 9],
                        [
                            ["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"],
                            ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]
                        ], "0"
                    ],
                    AM: ["374", "00", "(?:[1-489]\\d|55|60|77)\\d{6}", [8],
                        [
                            ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"],
                            ["(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"],
                            ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"],
                            ["(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"]
                        ], "0"
                    ],
                    AO: ["244", "00", "[29]\\d{8}", [9],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]
                        ]
                    ],
                    AR: ["54", "00", "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}", [10, 11],
                        [
                            ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 1],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1],
                            ["(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 0, "$1 $2 $3-$4"],
                            ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1", 0, "$1 $2 $3-$4"],
                            ["(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", ["8"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1", 0, "$1 $2 $3-$4"]
                        ], "0", 0, "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1"
                    ],
                    AS: ["1", "011", "(?:[58]\\d\\d|684|900)\\d{7}", [10], 0, "1", 0, "([267]\\d{6})$|1", "684$1", 0, "684"],
                    AT: ["43", "00", "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
                        [
                            ["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"],
                            ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"],
                            ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"],
                            ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"],
                            ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"],
                            ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]
                        ], "0"
                    ],
                    AU: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}", [5, 6, 7, 8, 9, 10, 12],
                        [
                            ["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"],
                            ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"],
                            ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]
                        ], "0", 0, "(183[12])|0", 0, 0, 0, [
                            ["(?:(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|3(?:[0-3589]\\d|4[0-578]|6[1-9]|7[0-35-9])|7(?:[013-57-9]\\d|2[0-8]))\\d{3}|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4]))|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}", [9]],
                            ["4(?:(?:79|94)[01]|83[0-389])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[016-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]],
                            ["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
                            ["190[0-26]\\d{6}", [10]], 0, 0, 0, ["163\\d{2,6}", [5, 6, 7, 8, 9]],
                            ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]],
                            ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]
                        ], "0011"
                    ],
                    AW: ["297", "00", "(?:[25-79]\\d\\d|800)\\d{4}", [7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]
                        ]
                    ],
                    AX: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}", [5, 6, 7, 8, 9, 10, 11, 12], 0, "0", 0, 0, 0, 0, "18", 0, "00"],
                    AZ: ["994", "00", "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}", [9],
                        [
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365[45]|46", "1[28]|2|365(?:4|5[02])|46"], "(0$1)"],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"]
                        ], "0"
                    ],
                    BA: ["387", "00", "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", [8, 9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]
                        ], "0"
                    ],
                    BB: ["1", "011", "(?:246|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "246$1", 0, "246"],
                    BD: ["880", "00", "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}", [6, 7, 8, 9, 10],
                        [
                            ["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"],
                            ["(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:[15]|28|4[14])|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"], "0$1"],
                            ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]|22"], "0$1"],
                            ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]
                        ], "0"
                    ],
                    BE: ["32", "00", "4\\d{8}|[1-9]\\d{7}", [8, 9],
                        [
                            ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]
                        ], "0"
                    ],
                    BF: ["226", "00", "[025-7]\\d{7}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[025-7]"]]
                        ]
                    ],
                    BG: ["359", "00", "00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", [6, 7, 8, 9, 12],
                        [
                            ["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"],
                            ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]
                        ], "0"
                    ],
                    BH: ["973", "00", "[136-9]\\d{7}", [8],
                        [
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[02-4679]"]]
                        ]
                    ],
                    BI: ["257", "00", "(?:[267]\\d|31)\\d{6}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]
                        ]
                    ],
                    BJ: ["229", "00", "[24-689]\\d{7}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-689]"]]
                        ]
                    ],
                    BL: ["590", "00", "590\\d{6}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [
                        ["590(?:2[7-9]|3[3-7]|5[12]|87)\\d{4}"],
                        ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"],
                        ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:395|76[018])\\d|475[0-5])\\d{4}"]
                    ]],
                    BM: ["1", "011", "(?:441|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "441$1", 0, "441"],
                    BN: ["673", "00", "[2-578]\\d{6}", [7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]
                        ]
                    ],
                    BO: ["591", "00(?:1\\d)?", "(?:[2-467]\\d\\d|8001)\\d{5}", [8, 9],
                        [
                            ["(\\d)(\\d{7})", "$1 $2", ["[23]|4[46]"]],
                            ["(\\d{8})", "$1", ["[67]"]],
                            ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]]
                        ], "0", 0, "0(1\\d)?"
                    ],
                    BQ: ["599", "00", "(?:[34]1|7\\d)\\d{5}", [7], 0, 0, 0, 0, 0, 0, "[347]"],
                    BR: ["55", "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-46-9]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}", [8, 9, 10, 11],
                        [
                            ["(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37)", "4(?:02|37)0|[34]00"]],
                            ["(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)"],
                            ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)"]
                        ], "0", 0, "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2"
                    ],
                    BS: ["1", "011", "(?:242|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([3-8]\\d{6})$|1", "242$1", 0, "242"],
                    BT: ["975", "00", "[17]\\d{7}|[2-8]\\d{6}", [7, 8],
                        [
                            ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|7"]]
                        ]
                    ],
                    BW: ["267", "00", "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}", [7, 8, 10],
                        [
                            ["(\\d{2})(\\d{5})", "$1 $2", ["90"]],
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[24-6]|3[15-9]"]],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37]"]],
                            ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]],
                            ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["8"]]
                        ]
                    ],
                    BY: ["375", "810", "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", [6, 7, 8, 9, 10, 11],
                        [
                            ["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"],
                            ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"],
                            ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"],
                            ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]
                        ], "8", 0, "0|80?", 0, 0, 0, 0, "8~10"
                    ],
                    BZ: ["501", "00", "(?:0800\\d|[2-8])\\d{6}", [7, 11],
                        [
                            ["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]],
                            ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]
                        ]
                    ],
                    CA: ["1", "011", "(?:[2-8]\\d|90)\\d{8}|3\\d{6}", [7, 10], 0, "1", 0, 0, 0, 0, 0, [
                        ["(?:2(?:04|[23]6|[48]9|50|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}", [10]],
                        ["", [10]],
                        ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", [10]],
                        ["900[2-9]\\d{6}", [10]],
                        ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:00|2[125-9]|33|44|66|77|88)|622)[2-9]\\d{6}", [10]], 0, ["310\\d{4}", [7]], 0, ["600[2-9]\\d{6}", [10]]
                    ]],
                    CC: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [
                        ["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", [9]],
                        ["4(?:(?:79|94)[01]|83[0-389])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[016-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]],
                        ["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
                        ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]],
                        ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]
                    ], "0011"],
                    CD: ["243", "00", "[189]\\d{8}|[1-68]\\d{6}", [7, 9],
                        [
                            ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"],
                            ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"]
                        ], "0"
                    ],
                    CF: ["236", "00", "(?:[27]\\d{3}|8776)\\d{4}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]
                        ]
                    ],
                    CG: ["242", "00", "222\\d{6}|(?:0\\d|80)\\d{7}", [9],
                        [
                            ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]
                        ]
                    ],
                    CH: ["41", "00", "8\\d{11}|[2-9]\\d{8}", [9],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]
                        ], "0"
                    ],
                    CI: ["225", "00", "[02]\\d{9}", [10],
                        [
                            ["(\\d{2})(\\d{2})(\\d)(\\d{5})", "$1 $2 $3 $4", ["2"]],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3 $4", ["0"]]
                        ]
                    ],
                    CK: ["682", "00", "[2-578]\\d{4}", [5],
                        [
                            ["(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]
                        ]
                    ],
                    CL: ["56", "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0", "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}", [9, 10, 11],
                        [
                            ["(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]],
                            ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-36]"], "($1)"],
                            ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"], "($1)"],
                            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]],
                            ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
                            ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]
                        ]
                    ],
                    CM: ["237", "00", "[26]\\d{8}|88\\d{6,7}", [8, 9],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]],
                            ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]|88"]]
                        ]
                    ],
                    CN: ["86", "00|1(?:[12]\\d|79)\\d\\d00", "1[127]\\d{8,9}|2\\d{9}(?:\\d{2})?|[12]\\d{6,7}|86\\d{6}|(?:1[03-689]\\d|6)\\d{7,9}|(?:[3-579]\\d|8[0-57-9])\\d{6,9}", [7, 8, 9, 10, 11, 12],
                        [
                            ["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]", "(?:10|2[0-57-9])(?:10|9[56])", "10(?:10|9[56])|2[0-57-9](?:100|9[56])"], "0$1"],
                            ["(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", 1],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", 1],
                            ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]],
                            ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1],
                            ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", 1],
                            ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]],
                            ["(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", 1]
                        ], "0", 0, "(1(?:[12]\\d|79)\\d\\d)|0", 0, 0, 0, 0, "00"
                    ],
                    CO: ["57", "00(?:4(?:[14]4|56)|[579])", "(?:60\\d\\d|9101)\\d{6}|(?:1\\d|3)\\d{9}", [10, 11],
                        [
                            ["(\\d{3})(\\d{7})", "$1 $2", ["6"], "($1)"],
                            ["(\\d{3})(\\d{7})", "$1 $2", ["3[0-357]|91"]],
                            ["(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1"], "0$1", 0, "$1 $2 $3"]
                        ], "0", 0, "0(4(?:[14]4|56)|[579])?"
                    ],
                    CR: ["506", "00", "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}", [8, 10],
                        [
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"]],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]]
                        ], 0, 0, "(19(?:0[0-2468]|1[09]|20|66|77|99))"
                    ],
                    CU: ["53", "119", "[27]\\d{6,7}|[34]\\d{5,7}|63\\d{6}|(?:5|8\\d\\d)\\d{7}", [6, 7, 8, 10],
                        [
                            ["(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"],
                            ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"],
                            ["(\\d)(\\d{7})", "$1 $2", ["[56]"], "0$1"],
                            ["(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"]
                        ], "0"
                    ],
                    CV: ["238", "0", "(?:[2-59]\\d\\d|800)\\d{4}", [7],
                        [
                            ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]
                        ]
                    ],
                    CW: ["599", "00", "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", [7, 8],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]],
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]
                        ], 0, 0, 0, 0, 0, "[69]"
                    ],
                    CX: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [
                        ["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", [9]],
                        ["4(?:(?:79|94)[01]|83[0-389])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[016-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]],
                        ["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
                        ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]],
                        ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]
                    ], "0011"],
                    CY: ["357", "00", "(?:[279]\\d|[58]0)\\d{6}", [8],
                        [
                            ["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]
                        ]
                    ],
                    CZ: ["420", "00", "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", [9],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]],
                            ["(\\d{2})(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["96"]],
                            ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]],
                            ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]
                        ]
                    ],
                    DE: ["49", "00", "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                        [
                            ["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"],
                            ["(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"], "0$1"],
                            ["(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"], "0$1"],
                            ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"],
                            ["(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"],
                            ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"],
                            ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"],
                            ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"],
                            ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"],
                            ["(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"],
                            ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                            ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"],
                            ["(\\d{5})(\\d{6})", "$1 $2", ["15[0568]"], "0$1"],
                            ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"],
                            ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"],
                            ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]
                        ], "0"
                    ],
                    DJ: ["253", "00", "(?:2\\d|77)\\d{6}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]
                        ]
                    ],
                    DK: ["45", "00", "[2-9]\\d{7}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]
                        ]
                    ],
                    DM: ["1", "011", "(?:[58]\\d\\d|767|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "767$1", 0, "767"],
                    DO: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "8001|8[024]9"],
                    DZ: ["213", "00", "(?:[1-4]|[5-79]\\d|80)\\d{7}", [8, 9],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]
                        ], "0"
                    ],
                    EC: ["593", "00", "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}", [8, 9, 10, 11],
                        [
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)", 0, "$1-$2-$3"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"],
                            ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]
                        ], "0"
                    ],
                    EE: ["372", "00", "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}", [7, 8, 10],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]],
                            ["(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"]],
                            ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]],
                            ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]
                        ]
                    ],
                    EG: ["20", "00", "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}", [8, 9, 10],
                        [
                            ["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"],
                            ["(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"],
                            ["(\\d{2})(\\d{8})", "$1 $2", ["1"], "0$1"]
                        ], "0"
                    ],
                    EH: ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, "528[89]"],
                    ER: ["291", "00", "[178]\\d{6}", [7],
                        [
                            ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]
                        ], "0"
                    ],
                    ES: ["34", "00", "[5-9]\\d{8}", [9],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]
                        ]
                    ],
                    ET: ["251", "00", "(?:11|[2-579]\\d)\\d{7}", [9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-579]"], "0$1"]
                        ], "0"
                    ],
                    FI: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}", [5, 6, 7, 8, 9, 10, 11, 12],
                        [
                            ["(\\d)(\\d{4,9})", "$1 $2", ["[2568][1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"],
                            ["(\\d{3})(\\d{3,7})", "$1 $2", ["[12]00|[368]|70[07-9]"], "0$1"],
                            ["(\\d{2})(\\d{4,8})", "$1 $2", ["[1245]|7[135]"], "0$1"],
                            ["(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"]
                        ], "0", 0, 0, 0, 0, "1[03-79]|[2-9]", 0, "00"
                    ],
                    FJ: ["679", "0(?:0|52)", "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", [7, 11],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]],
                            ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]
                        ], 0, 0, 0, 0, 0, 0, 0, "00"
                    ],
                    FK: ["500", "00", "[2-7]\\d{4}", [5]],
                    FM: ["691", "00", "(?:[39]\\d\\d|820)\\d{4}", [7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]
                        ]
                    ],
                    FO: ["298", "00", "[2-9]\\d{5}", [6],
                        [
                            ["(\\d{6})", "$1", ["[2-9]"]]
                        ], 0, 0, "(10(?:01|[12]0|88))"
                    ],
                    FR: ["33", "00", "[1-9]\\d{8}", [9],
                        [
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"],
                            ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]
                        ], "0"
                    ],
                    GA: ["241", "00", "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}", [7, 8],
                        [
                            ["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["11|[67]"], "0$1"]
                        ], 0, 0, "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})", "$1"
                    ],
                    GB: ["44", "00", "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", [7, 9, 10],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"],
                            ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"],
                            ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"],
                            ["(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"], "0$1"],
                            ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [
                            ["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0235])|4(?:[0-5]\\d\\d|69[7-9]|70[0-79])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|50))\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[0-2]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}", [9, 10]],
                            ["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", [10]],
                            ["80[08]\\d{7}|800\\d{6}|8001111"],
                            ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", [7, 10]],
                            ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]],
                            ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]],
                            ["56\\d{8}", [10]]
                        ], 0, " x"
                    ],
                    GD: ["1", "011", "(?:473|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "473$1", 0, "473"],
                    GE: ["995", "00", "(?:[3-57]\\d\\d|800)\\d{6}", [9],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]
                        ], "0"
                    ],
                    GF: ["594", "00", "[56]94\\d{6}|(?:80|9\\d)\\d{7}", [9],
                        [
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[56]|9[47]"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[89]"], "0$1"]
                        ], "0"
                    ],
                    GG: ["44", "00", "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", [7, 9, 10], 0, "0", 0, "([25-9]\\d{5})$|0", "1481$1", 0, 0, [
                        ["1481[25-9]\\d{5}", [10]],
                        ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]],
                        ["80[08]\\d{7}|800\\d{6}|8001111"],
                        ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", [7, 10]],
                        ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]],
                        ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]],
                        ["56\\d{8}", [10]]
                    ]],
                    GH: ["233", "00", "(?:[235]\\d{3}|800)\\d{5}", [8, 9],
                        [
                            ["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]
                        ], "0"
                    ],
                    GI: ["350", "00", "(?:[25]\\d|60)\\d{6}", [8],
                        [
                            ["(\\d{3})(\\d{5})", "$1 $2", ["2"]]
                        ]
                    ],
                    GL: ["299", "00", "(?:19|[2-689]\\d|70)\\d{4}", [6],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-9]"]]
                        ]
                    ],
                    GM: ["220", "00", "[2-9]\\d{6}", [7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]
                        ]
                    ],
                    GN: ["224", "00", "722\\d{6}|(?:3|6\\d)\\d{7}", [8, 9],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]
                        ]
                    ],
                    GP: ["590", "00", "590\\d{6}|(?:69|80|9\\d)\\d{7}", [9],
                        [
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [
                            ["590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1-9]|5[3-579]|[68][0-689]|7[08]|9\\d)\\d{4}"],
                            ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"],
                            ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:395|76[018])\\d|475[0-5])\\d{4}"]
                        ]
                    ],
                    GQ: ["240", "00", "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", [9],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]],
                            ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]
                        ]
                    ],
                    GR: ["30", "00", "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}", [10, 11, 12],
                        [
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]],
                            ["(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]],
                            ["(\\d{3})(\\d{3,4})(\\d{5})", "$1 $2 $3", ["8"]]
                        ]
                    ],
                    GT: ["502", "00", "(?:1\\d{3}|[2-7])\\d{7}", [8, 11],
                        [
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]"]],
                            ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]
                        ]
                    ],
                    GU: ["1", "011", "(?:[58]\\d\\d|671|900)\\d{7}", [10], 0, "1", 0, "([3-9]\\d{6})$|1", "671$1", 0, "671"],
                    GW: ["245", "00", "[49]\\d{8}|4\\d{6}", [7, 9],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["40"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]
                        ]
                    ],
                    GY: ["592", "001", "9008\\d{3}|(?:[2-467]\\d\\d|510|862)\\d{4}", [7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]
                        ]
                    ],
                    HK: ["852", "00(?:30|5[09]|[126-9]?)", "8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}", [5, 6, 7, 8, 9, 11],
                        [
                            ["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]],
                            ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]
                        ], 0, 0, 0, 0, 0, 0, 0, "00"
                    ],
                    HN: ["504", "00", "8\\d{10}|[237-9]\\d{7}", [8, 11],
                        [
                            ["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]
                        ]
                    ],
                    HR: ["385", "00", "(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}", [6, 7, 8, 9],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[01]"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"],
                            ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[67]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-5]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]
                        ], "0"
                    ],
                    HT: ["509", "00", "(?:[2-489]\\d|55)\\d{6}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-589]"]]
                        ]
                    ],
                    HU: ["36", "00", "[235-7]\\d{8}|[1-9]\\d{7}", [8, 9],
                        [
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"], "(06 $1)"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "06 $1"]
                        ], "06"
                    ],
                    ID: ["62", "00[89]", "(?:(?:00[1-9]|8\\d)\\d{4}|[1-36])\\d{6}|00\\d{10}|[1-9]\\d{8,10}|[2-9]\\d{7}", [7, 8, 9, 10, 11, 12, 13],
                        [
                            ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]],
                            ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"],
                            ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"],
                            ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"],
                            ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"],
                            ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"],
                            ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"],
                            ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]
                        ], "0"
                    ],
                    IE: ["353", "00", "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", [7, 8, 9, 10],
                        [
                            ["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"],
                            ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"],
                            ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"],
                            ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"],
                            ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"]
                        ], "0"
                    ],
                    IL: ["972", "0(?:0|1[2-9])", "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", [7, 8, 9, 10, 11, 12],
                        [
                            ["(\\d{4})(\\d{3})", "$1-$2", ["125"]],
                            ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]],
                            ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"],
                            ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]],
                            ["(\\d{4})(\\d{6})", "$1-$2", ["159"]],
                            ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]],
                            ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]
                        ], "0"
                    ],
                    IM: ["44", "00", "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([25-8]\\d{5})$|0", "1624$1", 0, "74576|(?:16|7[56])24"],
                    IN: ["91", "00", "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", [8, 9, 10, 11, 12, 13],
                        [
                            ["(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], 0, 1],
                            ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", 1],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"], "0$1", 1],
                            ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1", 1],
                            ["(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", 1],
                            ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], 0, 1],
                            ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], 0, 1]
                        ], "0"
                    ],
                    IO: ["246", "00", "3\\d{6}", [7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["3"]]
                        ]
                    ],
                    IQ: ["964", "00", "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}", [8, 9, 10],
                        [
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]
                        ], "0"
                    ],
                    IR: ["98", "00", "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", [4, 5, 6, 7, 10],
                        [
                            ["(\\d{4,5})", "$1", ["96"], "0$1"],
                            ["(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]
                        ], "0"
                    ],
                    IS: ["354", "00|1(?:0(?:01|[12]0)|100)", "(?:38\\d|[4-9])\\d{6}", [7, 9],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]
                        ], 0, 0, 0, 0, 0, 0, 0, "00"
                    ],
                    IT: ["39", "00", "0\\d{5,10}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?", [6, 7, 8, 9, 10, 11],
                        [
                            ["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]],
                            ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]],
                            ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["894"]],
                            ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]],
                            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1(?:44|[679])|[378]"]],
                            ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]|14"]],
                            ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]],
                            ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]],
                            ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["3"]]
                        ], 0, 0, 0, 0, 0, 0, [
                            ["0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"],
                            ["3[1-9]\\d{8}|3[2-9]\\d{7}", [9, 10]],
                            ["80(?:0\\d{3}|3)\\d{3}", [6, 9]],
                            ["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}", [6, 8, 9, 10]],
                            ["1(?:78\\d|99)\\d{6}", [9, 10]], 0, 0, 0, ["55\\d{8}", [10]],
                            ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]
                        ]
                    ],
                    JE: ["44", "00", "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([0-24-8]\\d{5})$|0", "1534$1", 0, 0, [
                        ["1534[0-24-8]\\d{5}"],
                        ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97[7-9]))\\d{5}"],
                        ["80(?:07(?:35|81)|8901)\\d{4}"],
                        ["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"],
                        ["701511\\d{4}"], 0, ["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"],
                        ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"],
                        ["56\\d{8}"]
                    ]],
                    JM: ["1", "011", "(?:[58]\\d\\d|658|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "658|876"],
                    JO: ["962", "00", "(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}", [8, 9],
                        [
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"],
                            ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"],
                            ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"],
                            ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]
                        ], "0"
                    ],
                    JP: ["81", "010", "00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", [8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"],
                            ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"],
                            ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["[36]|4(?:2[09]|7[01])", "[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[289][2-9]|5[3-9]|7[2-4679]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[257-9]"], "0$1"]
                        ], "0", 0, "(000[259]\\d{6})$|(?:(?:003768)0?)|0", "$1"
                    ],
                    KE: ["254", "000", "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", [7, 8, 9, 10],
                        [
                            ["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"],
                            ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]
                        ], "0"
                    ],
                    KG: ["996", "00", "8\\d{9}|[235-9]\\d{8}", [9, 10],
                        [
                            ["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]
                        ], "0"
                    ],
                    KH: ["855", "00[14-9]", "1\\d{9}|[1-9]\\d{7,8}", [8, 9, 10],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"],
                            ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]
                        ], "0"
                    ],
                    KI: ["686", "00", "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", [5, 8], 0, "0"],
                    KM: ["269", "00", "[3478]\\d{6}", [7],
                        [
                            ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]
                        ]
                    ],
                    KN: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "869$1", 0, "869"],
                    KP: ["850", "00|99", "85\\d{6}|(?:19\\d|[2-7])\\d{7}", [8, 10],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]
                        ], "0"
                    ],
                    KR: ["82", "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", [5, 6, 8, 9, 10, 11, 12, 13, 14],
                        [
                            ["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1"],
                            ["(\\d{4})(\\d{4})", "$1-$2", ["1"]],
                            ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60|8"], "0$1"],
                            ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1"],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"],
                            ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"]
                        ], "0", 0, "0(8(?:[1-46-8]|5\\d\\d))?"
                    ],
                    KW: ["965", "00", "18\\d{5}|(?:[2569]\\d|41)\\d{6}", [7, 8],
                        [
                            ["(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]],
                            ["(\\d{3})(\\d{5})", "$1 $2", ["[245]"]]
                        ]
                    ],
                    KY: ["1", "011", "(?:345|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "345$1", 0, "345"],
                    KZ: ["7", "810", "(?:33622|8\\d{8})\\d{5}|[78]\\d{9}", [10, 14], 0, "8", 0, 0, 0, 0, "33|7", 0, "8~10"],
                    LA: ["856", "00", "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}", [8, 9, 10],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["30[013-9]"], "0$1"],
                            ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[23]"], "0$1"]
                        ], "0"
                    ],
                    LB: ["961", "00", "[27-9]\\d{7}|[13-9]\\d{6}", [7, 8],
                        [
                            ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27-9]"]]
                        ], "0"
                    ],
                    LC: ["1", "011", "(?:[58]\\d\\d|758|900)\\d{7}", [10], 0, "1", 0, "([2-8]\\d{6})$|1", "758$1", 0, "758"],
                    LI: ["423", "00", "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}", [7, 9],
                        [
                            ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]
                        ], "0", 0, "(1001)|0"
                    ],
                    LK: ["94", "00", "[1-9]\\d{8}", [9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]
                        ], "0"
                    ],
                    LR: ["231", "00", "(?:[25]\\d|33|77|88)\\d{7}|(?:2\\d|[4-6])\\d{6}", [7, 8, 9],
                        [
                            ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[4-6]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23578]"], "0$1"]
                        ], "0"
                    ],
                    LS: ["266", "00", "(?:[256]\\d\\d|800)\\d{5}", [8],
                        [
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]
                        ]
                    ],
                    LT: ["370", "00", "(?:[3469]\\d|52|[78]0)\\d{6}", [8],
                        [
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-7]"], "(8-$1)", 1],
                            ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "8 $1", 1],
                            ["(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(8-$1)", 1],
                            ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(8-$1)", 1]
                        ], "8", 0, "[08]"
                    ],
                    LU: ["352", "00", "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", [4, 5, 6, 7, 8, 9, 10, 11],
                        [
                            ["(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],
                            ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],
                            ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"]],
                            ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"]],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]]
                        ], 0, 0, "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"
                    ],
                    LV: ["371", "00", "(?:[268]\\d|90)\\d{6}", [8],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[269]|8[01]"]]
                        ]
                    ],
                    LY: ["218", "00", "[2-9]\\d{8}", [9],
                        [
                            ["(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]
                        ], "0"
                    ],
                    MA: ["212", "00", "[5-8]\\d{8}", [9],
                        [
                            ["(\\d{5})(\\d{4})", "$1-$2", ["5(?:29|38)", "5(?:29[1289]|389)", "529(?:1[1-46-9]|2[013-8]|90)|5(?:298|389)[0-46-9]"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[45]"], "0$1"],
                            ["(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-489]|3[5-9]|9)|892", "5(?:2(?:[2-49]|8[235-9])|3[5-9]|9)|892"], "0$1"],
                            ["(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"],
                            ["(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [
                            ["5293[01]\\d{4}|5(?:2(?:[0-25-7]\\d|3[1-578]|4[02-46-8]|8[0235-7]|9[0-289])|3(?:[0-47]\\d|5[02-9]|6[02-8]|8[0189]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"],
                            ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[017]\\d|2[0-2]|6[0-8]|8[0-3]))\\d{6}"],
                            ["80\\d{7}"],
                            ["89\\d{7}"], 0, 0, 0, 0, ["592(?:4[0-2]|93)\\d{4}"]
                        ]
                    ],
                    MC: ["377", "00", "(?:[3489]|6\\d)\\d{7}", [8, 9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[389]"]],
                            ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]
                        ], "0"
                    ],
                    MD: ["373", "00", "(?:[235-7]\\d|[89]0)\\d{6}", [8],
                        [
                            ["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]
                        ], "0"
                    ],
                    ME: ["382", "00", "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", [8, 9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]
                        ], "0"
                    ],
                    MF: ["590", "00", "590\\d{6}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [
                        ["590(?:0[079]|[14]3|[27][79]|3[03-7]|5[0-268]|87)\\d{4}"],
                        ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"],
                        ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:395|76[018])\\d|475[0-5])\\d{4}"]
                    ]],
                    MG: ["261", "00", "[23]\\d{8}", [9],
                        [
                            ["(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]
                        ], "0", 0, "([24-9]\\d{6})$|0", "20$1"
                    ],
                    MH: ["692", "011", "329\\d{4}|(?:[256]\\d|45)\\d{5}", [7],
                        [
                            ["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]
                        ], "1"
                    ],
                    MK: ["389", "00", "[2-578]\\d{7}", [8],
                        [
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2|34[47]|4(?:[37]7|5[47]|64)"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"],
                            ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]
                        ], "0"
                    ],
                    ML: ["223", "00", "[24-9]\\d{7}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]
                        ]
                    ],
                    MM: ["95", "00", "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", [6, 7, 8, 9, 10],
                        [
                            ["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"],
                            ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"],
                            ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"],
                            ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]
                        ], "0"
                    ],
                    MN: ["976", "001", "[12]\\d{7,9}|[5-9]\\d{7}", [8, 9, 10],
                        [
                            ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[5-9]"]],
                            ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"],
                            ["(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"],
                            ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]
                        ], "0"
                    ],
                    MO: ["853", "00", "0800\\d{3}|(?:28|[68]\\d)\\d{6}", [7, 8],
                        [
                            ["(\\d{4})(\\d{3})", "$1 $2", ["0"]],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]
                        ]
                    ],
                    MP: ["1", "011", "[58]\\d{9}|(?:67|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "670$1", 0, "670"],
                    MQ: ["596", "00", "596\\d{6}|(?:69|80|9\\d)\\d{7}", [9],
                        [
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]
                        ], "0"
                    ],
                    MR: ["222", "00", "(?:[2-4]\\d\\d|800)\\d{5}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]
                        ]
                    ],
                    MS: ["1", "011", "(?:[58]\\d\\d|664|900)\\d{7}", [10], 0, "1", 0, "([34]\\d{6})$|1", "664$1", 0, "664"],
                    MT: ["356", "00", "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", [8],
                        [
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]
                        ]
                    ],
                    MU: ["230", "0(?:0|[24-7]0|3[03])", "(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}", [7, 8, 10],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[57]"]],
                            ["(\\d{5})(\\d{5})", "$1 $2", ["8"]]
                        ], 0, 0, 0, 0, 0, 0, 0, "020"
                    ],
                    MV: ["960", "0(?:0|19)", "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", [7, 10],
                        [
                            ["(\\d{3})(\\d{4})", "$1-$2", ["[34679]"]],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]
                        ], 0, 0, 0, 0, 0, 0, 0, "00"
                    ],
                    MW: ["265", "00", "(?:[1289]\\d|31|77)\\d{7}|1\\d{6}", [7, 9],
                        [
                            ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[137-9]"], "0$1"]
                        ], "0"
                    ],
                    MX: ["52", "0[09]", "1(?:(?:[27]2|44|99)[1-9]|65[0-689])\\d{7}|(?:1(?:[01]\\d|2[13-9]|[35][1-9]|4[0-35-9]|6[0-46-9]|7[013-9]|8[1-79]|9[1-8])|[2-9]\\d)\\d{8}", [10, 11],
                        [
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"], 0, 1],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"], 0, 1],
                            ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 $3 $4", ["1(?:33|5[56]|81)"], 0, 1],
                            ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 $3 $4", ["1"], 0, 1]
                        ], "01", 0, "0(?:[12]|4[45])|1", 0, 0, 0, 0, "00"
                    ],
                    MY: ["60", "00", "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}", [8, 9, 10],
                        [
                            ["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[02469]|[378][1-9]|53)|8", "1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"], "0$1"],
                            ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1(?:[367]|80)"]],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]
                        ], "0"
                    ],
                    MZ: ["258", "00", "(?:2|8\\d)\\d{7}", [8, 9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-79]"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]
                        ]
                    ],
                    NA: ["264", "00", "[68]\\d{7,8}", [8, 9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]
                        ], "0"
                    ],
                    NC: ["687", "00", "(?:050|[2-57-9]\\d\\d)\\d{3}", [6],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[02-57-9]"]]
                        ]
                    ],
                    NE: ["227", "00", "[027-9]\\d{7}", [8],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[013]|7[047]"]]
                        ]
                    ],
                    NF: ["672", "00", "[13]\\d{5}", [6],
                        [
                            ["(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]],
                            ["(\\d)(\\d{5})", "$1 $2", ["[13]"]]
                        ], 0, 0, "([0-258]\\d{4})$", "3$1"
                    ],
                    NG: ["234", "009", "(?:[124-7]|9\\d{3})\\d{6}|[1-9]\\d{7}|[78]\\d{9,13}", [7, 8, 10, 11, 12, 13, 14],
                        [
                            ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["78"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|9(?:0[3-9]|[1-9])"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[3-7]|8[2-9]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"],
                            ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"],
                            ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]
                        ], "0"
                    ],
                    NI: ["505", "00", "(?:1800|[25-8]\\d{3})\\d{4}", [8],
                        [
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]
                        ]
                    ],
                    NL: ["31", "00", "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}", [5, 6, 7, 8, 9, 10, 11],
                        [
                            ["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"],
                            ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"],
                            ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-578]|91"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", ["9"], "0$1"]
                        ], "0"
                    ],
                    NO: ["47", "00", "(?:0|[2-9]\\d{3})\\d{4}", [5, 8],
                        [
                            ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["8"]],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]"]]
                        ], 0, 0, 0, 0, 0, "[02-689]|7[0-8]"
                    ],
                    NP: ["977", "00", "(?:1\\d|9)\\d{9}|[1-9]\\d{7}", [8, 10, 11],
                        [
                            ["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"],
                            ["(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"], "0$1"],
                            ["(\\d{3})(\\d{7})", "$1-$2", ["9"]]
                        ], "0"
                    ],
                    NR: ["674", "00", "(?:444|(?:55|8\\d)\\d|666)\\d{4}", [7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[4-68]"]]
                        ]
                    ],
                    NU: ["683", "00", "(?:[47]|888\\d)\\d{3}", [4, 7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["8"]]
                        ]
                    ],
                    NZ: ["64", "0(?:0|161)", "[1289]\\d{9}|50\\d{5}(?:\\d{2,3})?|[27-9]\\d{7,8}|(?:[34]\\d|6[0-35-9])\\d{6}|8\\d{4,6}", [5, 6, 7, 8, 9, 10],
                        [
                            ["(\\d{2})(\\d{3,8})", "$1 $2", ["8[1-79]"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["50[036-8]|8|90", "50(?:[0367]|88)|8|90"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[589]"], "0$1"],
                            ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1|2[028]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, 0, "00"
                    ],
                    OM: ["968", "00", "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}", [7, 8, 9],
                        [
                            ["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]],
                            ["(\\d{2})(\\d{6})", "$1 $2", ["2"]],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[179]"]]
                        ]
                    ],
                    PA: ["507", "00", "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}", [7, 8, 10, 11],
                        [
                            ["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]],
                            ["(\\d{4})(\\d{4})", "$1-$2", ["[68]"]],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]
                        ]
                    ],
                    PE: ["51", "00|19(?:1[124]|77|90)00", "(?:[14-8]|9\\d)\\d{7}", [8, 9],
                        [
                            ["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"],
                            ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"],
                            ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]
                        ], "0", 0, 0, 0, 0, 0, 0, "00", " Anexo "
                    ],
                    PF: ["689", "00", "4\\d{5}(?:\\d{2})?|8\\d{7,8}", [6, 8, 9],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4|8[7-9]"]],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]
                        ]
                    ],
                    PG: ["675", "00|140[1-3]", "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", [7, 8],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]
                        ], 0, 0, 0, 0, 0, 0, 0, "00"
                    ],
                    PH: ["63", "00", "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}", [6, 8, 9, 10, 11, 12, 13],
                        [
                            ["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"],
                            ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"],
                            ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"],
                            ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"],
                            ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
                            ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]
                        ], "0"
                    ],
                    PK: ["92", "00", "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", [8, 9, 10, 11, 12],
                        [
                            ["(\\d{3})(\\d{3})(\\d{2,7})", "$1 $2 $3", ["[89]0"], "0$1"],
                            ["(\\d{4})(\\d{5})", "$1 $2", ["1"]],
                            ["(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"], "(0$1)"],
                            ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"],
                            ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"],
                            ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"],
                            ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]
                        ], "0"
                    ],
                    PL: ["48", "00", "(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}", [6, 7, 8, 9, 10],
                        [
                            ["(\\d{5})", "$1", ["19"]],
                            ["(\\d{3})(\\d{3})", "$1 $2", ["11|20|64"]],
                            ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]],
                            ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-7]|8[1-79]|9[145]"]],
                            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["8"]]
                        ]
                    ],
                    PM: ["508", "00", "[45]\\d{5}|(?:708|80\\d)\\d{6}", [6, 9],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]
                        ], "0"
                    ],
                    PR: ["1", "011", "(?:[589]\\d\\d|787)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "787|939"],
                    PS: ["970", "00", "[2489]2\\d{6}|(?:1\\d|5)\\d{8}", [8, 9, 10],
                        [
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"],
                            ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]
                        ], "0"
                    ],
                    PT: ["351", "00", "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}", [9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["16|[236-9]"]]
                        ]
                    ],
                    PW: ["680", "01[12]", "(?:[24-8]\\d\\d|345|900)\\d{4}", [7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]
                        ]
                    ],
                    PY: ["595", "00", "59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}", [6, 7, 8, 9, 10, 11],
                        [
                            ["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"],
                            ["(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"],
                            ["(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"], "(0$1)"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"], "(0$1)"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]],
                            ["(\\d{3})(\\d{6})", "$1 $2", ["9(?:[5-79]|8[1-6])"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"],
                            ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]
                        ], "0"
                    ],
                    QA: ["974", "00", "800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}", [7, 8, 9, 11],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["2[16]|8"]],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[3-7]"]]
                        ]
                    ],
                    RE: ["262", "00", "(?:26|[689]\\d)\\d{7}", [9],
                        [
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2689]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [
                            ["26(?:2\\d\\d|3(?:0\\d|1[0-5]))\\d{4}"],
                            ["69(?:2\\d\\d|3(?:[06][0-6]|1[013]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-27]|8[0-8]|9[0-479]))\\d{4}"],
                            ["80\\d{7}"],
                            ["89[1-37-9]\\d{6}"], 0, 0, 0, 0, ["9(?:399[0-3]|479[0-5]|76(?:2[27]|3[0-37]))\\d{4}"],
                            ["8(?:1[019]|2[0156]|84|90)\\d{6}"]
                        ]
                    ],
                    RO: ["40", "00", "(?:[2378]\\d|90)\\d{7}|[23]\\d{5}", [6, 9],
                        [
                            ["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"],
                            ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[237-9]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, 0, 0, " int "
                    ],
                    RS: ["381", "00", "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", [6, 7, 8, 9, 10, 11, 12],
                        [
                            ["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"],
                            ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]
                        ], "0"
                    ],
                    RU: ["7", "810", "8\\d{13}|[347-9]\\d{9}", [10, 14],
                        [
                            ["(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", 1],
                            ["(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", 1],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1],
                            ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[349]|8(?:[02-7]|1[1-8])"], "8 ($1)", 1],
                            ["(\\d{4})(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["8"], "8 ($1)"]
                        ], "8", 0, 0, 0, 0, "3[04-689]|[489]", 0, "8~10"
                    ],
                    RW: ["250", "00", "(?:06|[27]\\d\\d|[89]00)\\d{6}", [8, 9],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"]
                        ], "0"
                    ],
                    SA: ["966", "00", "92\\d{7}|(?:[15]|8\\d)\\d{8}", [9, 10],
                        [
                            ["(\\d{4})(\\d{5})", "$1 $2", ["9"]],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["81"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]
                        ], "0"
                    ],
                    SB: ["677", "0[01]", "(?:[1-6]|[7-9]\\d\\d)\\d{4}", [5, 7],
                        [
                            ["(\\d{2})(\\d{5})", "$1 $2", ["7|8[4-9]|9(?:[1-8]|9[0-8])"]]
                        ]
                    ],
                    SC: ["248", "010|0[0-2]", "800\\d{4}|(?:[249]\\d|64)\\d{5}", [7],
                        [
                            ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]
                        ], 0, 0, 0, 0, 0, 0, 0, "00"
                    ],
                    SD: ["249", "00", "[19]\\d{8}", [9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]
                        ], "0"
                    ],
                    SE: ["46", "00", "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", [6, 7, 8, 9, 10],
                        [
                            ["(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1", 0, "$1 $2 $3"],
                            ["(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44|9)"], "0$1", 0, "$1 $2"],
                            ["(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3"],
                            ["(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"],
                            ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3"],
                            ["(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1", 0, "$1 $2 $3"],
                            ["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3 $4"],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["10|7"], "0$1", 0, "$1 $2 $3 $4"],
                            ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3 $4"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1", 0, "$1 $2 $3 $4"],
                            ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1", 0, "$1 $2 $3 $4 $5"]
                        ], "0"
                    ],
                    SG: ["65", "0[0-3]\\d", "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", [8, 10, 11],
                        [
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-8]|[1-9])"]],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]],
                            ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]],
                            ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]
                        ]
                    ],
                    SH: ["290", "00", "(?:[256]\\d|8)\\d{3}", [4, 5], 0, 0, 0, 0, 0, 0, "[256]"],
                    SI: ["386", "00|10(?:22|66|88|99)", "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", [5, 6, 7, 8],
                        [
                            ["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"],
                            ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]
                        ], "0", 0, 0, 0, 0, 0, 0, "00"
                    ],
                    SJ: ["47", "00", "0\\d{4}|(?:[489]\\d|79)\\d{6}", [5, 8], 0, 0, 0, 0, 0, 0, "79"],
                    SK: ["421", "00", "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", [6, 7, 9],
                        [
                            ["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"],
                            ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]
                        ], "0"
                    ],
                    SL: ["232", "00", "(?:[237-9]\\d|66)\\d{6}", [8],
                        [
                            ["(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]
                        ], "0"
                    ],
                    SM: ["378", "00", "(?:0549|[5-7]\\d)\\d{6}", [8, 10],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]],
                            ["(\\d{4})(\\d{6})", "$1 $2", ["0"]]
                        ], 0, 0, "([89]\\d{5})$", "0549$1"
                    ],
                    SN: ["221", "00", "(?:[378]\\d|93)\\d{7}", [9],
                        [
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]
                        ]
                    ],
                    SO: ["252", "00", "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}", [6, 7, 8, 9],
                        [
                            ["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]],
                            ["(\\d{6})", "$1", ["[134]"]],
                            ["(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]],
                            ["(\\d)(\\d{7})", "$1 $2", ["(?:2|90)4|[67]"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[348]|64|79|90"]],
                            ["(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6[0-35-9]|77|9[2-9]"]]
                        ], "0"
                    ],
                    SR: ["597", "00", "(?:[2-5]|68|[78]\\d)\\d{5}", [6, 7],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]],
                            ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]],
                            ["(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"]]
                        ]
                    ],
                    SS: ["211", "00", "[19]\\d{8}", [9],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]
                        ], "0"
                    ],
                    ST: ["239", "00", "(?:22|9\\d)\\d{5}", [7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]
                        ]
                    ],
                    SV: ["503", "00", "[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?", [7, 8, 11],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]],
                            ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]
                        ]
                    ],
                    SX: ["1", "011", "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "(5\\d{6})$|1", "721$1", 0, "721"],
                    SY: ["963", "00", "[1-39]\\d{8}|[1-5]\\d{7}", [8, 9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-5]"], "0$1", 1],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1", 1]
                        ], "0"
                    ],
                    SZ: ["268", "00", "0800\\d{4}|(?:[237]\\d|900)\\d{6}", [8, 9],
                        [
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]],
                            ["(\\d{5})(\\d{4})", "$1 $2", ["9"]]
                        ]
                    ],
                    TA: ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8"],
                    TC: ["1", "011", "(?:[58]\\d\\d|649|900)\\d{7}", [10], 0, "1", 0, "([2-479]\\d{6})$|1", "649$1", 0, "649"],
                    TD: ["235", "00|16", "(?:22|[69]\\d|77)\\d{6}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2679]"]]
                        ], 0, 0, 0, 0, 0, 0, 0, "00"
                    ],
                    TG: ["228", "00", "[279]\\d{7}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]
                        ]
                    ],
                    TH: ["66", "00[1-9]", "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}", [8, 9, 10, 13],
                        [
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]"], "0$1"],
                            ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]
                        ], "0"
                    ],
                    TJ: ["992", "810", "[0-57-9]\\d{8}", [9],
                        [
                            ["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"]],
                            ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["44[04]|[34]7"]],
                            ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3[1-5]"]],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[0-57-9]"]]
                        ], 0, 0, 0, 0, 0, 0, 0, "8~10"
                    ],
                    TK: ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7]],
                    TL: ["670", "00", "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", [7, 8],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["7"]]
                        ]
                    ],
                    TM: ["993", "810", "[1-6]\\d{7}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"],
                            ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"],
                            ["(\\d{2})(\\d{6})", "$1 $2", ["6"], "8 $1"]
                        ], "8", 0, 0, 0, 0, 0, 0, "8~10"
                    ],
                    TN: ["216", "00", "[2-57-9]\\d{7}", [8],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]
                        ]
                    ],
                    TO: ["676", "00", "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}", [5, 7],
                        [
                            ["(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]],
                            ["(\\d{4})(\\d{3})", "$1 $2", ["0"]],
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[5-9]"]]
                        ]
                    ],
                    TR: ["90", "00", "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}", [7, 10, 12, 13],
                        [
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[01589]|90"], "0$1", 1],
                            ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|616)", "5(?:[0-59]|6161)"], "0$1", 1],
                            ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", 1],
                            ["(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", 1]
                        ], "0"
                    ],
                    TT: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-46-8]\\d{6})$|1", "868$1", 0, "868"],
                    TV: ["688", "00", "(?:2|7\\d\\d|90)\\d{4}", [5, 6, 7],
                        [
                            ["(\\d{2})(\\d{3})", "$1 $2", ["2"]],
                            ["(\\d{2})(\\d{4})", "$1 $2", ["90"]],
                            ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]
                        ]
                    ],
                    TW: ["886", "0(?:0[25-79]|19)", "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}", [7, 8, 9, 10, 11],
                        [
                            ["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[258]0"], "0$1"],
                            ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]", "[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"],
                            ["(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, 0, 0, "#"
                    ],
                    TZ: ["255", "00[056]", "(?:[25-8]\\d|41|90)\\d{7}", [9],
                        [
                            ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"],
                            ["(\\d{2})(\\d{7})", "$1 $2", ["5"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]
                        ], "0"
                    ],
                    UA: ["380", "00", "[89]\\d{9}|[3-9]\\d{8}", [9, 10],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"],
                            ["(\\d{4})(\\d{5})", "$1 $2", ["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])", "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|89|9[1-9]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, 0, "0~0"
                    ],
                    UG: ["256", "00[057]", "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", [9],
                        [
                            ["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"],
                            ["(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"],
                            ["(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"]
                        ], "0"
                    ],
                    US: ["1", "011", "[2-9]\\d{9}|3\\d{6}", [10],
                        [
                            ["(\\d{3})(\\d{4})", "$1-$2", ["310"], 0, 1],
                            ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], 0, 1, "$1-$2-$3"]
                        ], "1", 0, 0, 0, 0, 0, [
                            ["5056(?:[0-35-9]\\d|4[46])\\d{4}|(?:4722|505[2-57-9]|983[29])\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[01356]|3[0-24679]|4[167]|5[0-2]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-47-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[01679]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[068]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}"],
                            [""],
                            ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
                            ["900[2-9]\\d{6}"],
                            ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"]
                        ]
                    ],
                    UY: ["598", "0(?:0|1[3-9]\\d)", "(?:0004|4)\\d{9}|[1249]\\d{7}|(?:[49]\\d|80)\\d{5}", [7, 8, 10, 13],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["405|8|90"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[124]"]],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["4"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["0"]]
                        ], "0", 0, 0, 0, 0, 0, 0, "00", " int. "
                    ],
                    UZ: ["998", "810", "200\\d{6}|(?:33|[5-79]\\d|88)\\d{7}", [9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-9]"], "8 $1"]
                        ], "8", 0, 0, 0, 0, 0, 0, "8~10"
                    ],
                    VA: ["39", "00", "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11], 0, 0, 0, 0, 0, 0, "06698"],
                    VC: ["1", "011", "(?:[58]\\d\\d|784|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "784$1", 0, "784"],
                    VE: ["58", "00", "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}", [10],
                        [
                            ["(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1"]
                        ], "0"
                    ],
                    VG: ["1", "011", "(?:284|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-578]\\d{6})$|1", "284$1", 0, "284"],
                    VI: ["1", "011", "[58]\\d{9}|(?:34|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "340$1", 0, "340"],
                    VN: ["84", "00", "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}", [7, 8, 9, 10],
                        [
                            ["(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", 1],
                            ["(\\d{4})(\\d{4,6})", "$1 $2", ["1"], 0, 1],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["6"], "0$1", 1],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[357-9]"], "0$1", 1],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1],
                            ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1]
                        ], "0"
                    ],
                    VU: ["678", "00", "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}", [5, 7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[57-9]"]]
                        ]
                    ],
                    WF: ["681", "00", "(?:40|72)\\d{4}|8\\d{5}(?:\\d{3})?", [6, 9],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[478]"]],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]
                        ]
                    ],
                    WS: ["685", "0", "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}", [5, 6, 7, 10],
                        [
                            ["(\\d{5})", "$1", ["[2-5]|6[1-9]"]],
                            ["(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]],
                            ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]
                        ]
                    ],
                    XK: ["383", "00", "[23]\\d{7,8}|(?:4\\d\\d|[89]00)\\d{5}", [8, 9],
                        [
                            ["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[23]"], "0$1"]
                        ], "0"
                    ],
                    YE: ["967", "00", "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", [7, 8, 9],
                        [
                            ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7(?:[24-6]|8[0-7])"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]
                        ], "0"
                    ],
                    YT: ["262", "00", "(?:80|9\\d)\\d{7}|(?:26|63)9\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [
                        ["269(?:0[0-467]|5[0-4]|6\\d|[78]0)\\d{4}"],
                        ["639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])\\d{4}"],
                        ["80\\d{7}"], 0, 0, 0, 0, 0, ["9(?:(?:39|47)8[01]|769\\d)\\d{4}"]
                    ]],
                    ZA: ["27", "00", "[1-79]\\d{8}|8\\d{4,9}", [5, 6, 7, 8, 9, 10],
                        [
                            ["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]
                        ], "0"
                    ],
                    ZM: ["260", "00", "800\\d{6}|(?:21|63|[79]\\d)\\d{7}", [9],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"],
                            ["(\\d{2})(\\d{7})", "$1 $2", ["[79]"], "0$1"]
                        ], "0"
                    ],
                    ZW: ["263", "00", "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", [5, 6, 7, 8, 9, 10],
                        [
                            ["(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"],
                            ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"],
                            ["(\\d{2})(\\d{7})", "$1 $2", ["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"], "(0$1)"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"],
                            ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"],
                            ["(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"], "0$1"],
                            ["(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"]
                        ], "0"
                    ]
                },
                nonGeographic: {
                    800: ["800", 0, "(?:00|[1-9]\\d)\\d{6}", [8],
                        [
                            ["(\\d{4})(\\d{4})", "$1 $2", ["\\d"]]
                        ], 0, 0, 0, 0, 0, 0, [0, 0, ["(?:00|[1-9]\\d)\\d{6}"]]
                    ],
                    808: ["808", 0, "[1-9]\\d{7}", [8],
                        [
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, ["[1-9]\\d{7}"]]
                    ],
                    870: ["870", 0, "7\\d{11}|[35-7]\\d{8}", [9, 12],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[35-7]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"]]
                    ],
                    878: ["878", 0, "10\\d{10}", [12],
                        [
                            ["(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]
                        ], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["10\\d{10}"]]
                    ],
                    881: ["881", 0, "[0-36-9]\\d{8}", [9],
                        [
                            ["(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-36-9]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["[0-36-9]\\d{8}"]]
                    ],
                    882: ["882", 0, "[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?", [7, 8, 9, 10, 11, 12],
                        [
                            ["(\\d{2})(\\d{5})", "$1 $2", ["16|342"]],
                            ["(\\d{2})(\\d{6})", "$1 $2", ["49"]],
                            ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["1[36]|9"]],
                            ["(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]],
                            ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["16"]],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|23|3(?:[15]|4[57])|4|51"]],
                            ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]],
                            ["(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-35]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|50\\d{3})\\d{7}", [7, 8, 9, 10, 12]], 0, 0, 0, 0, 0, 0, ["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}"]]
                    ],
                    883: ["883", 0, "(?:[1-4]\\d|51)\\d{6,10}", [8, 9, 10, 11, 12],
                        [
                            ["(\\d{3})(\\d{3})(\\d{2,8})", "$1 $2 $3", ["[14]|2[24-689]|3[02-689]|51[24-9]"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["21"]],
                            ["(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]],
                            ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[235]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[013-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}"]]
                    ],
                    888: ["888", 0, "\\d{11}", [11],
                        [
                            ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]
                        ], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, ["\\d{11}"]]
                    ],
                    979: ["979", 0, "[1359]\\d{8}", [9],
                        [
                            ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, 0, 0, ["[1359]\\d{8}"]]
                    ]
                }
            };

            function n(d, $) {
                var e = Array.prototype.slice.call($);
                return e.push(t), d.apply(this, e)
            }
        }
    }
]);