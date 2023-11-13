(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1664], {
        81516: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getDomainLocale = function(e, t, l, n) {
                {
                    let r = o(13162).normalizeLocalePath,
                        a = o(2249).detectDomainLocale,
                        u = t || r(e, l).detectedLocale,
                        c = a(n, void 0, u);
                    if (c) {
                        let t = "http".concat(c.http ? "" : "s", "://"),
                            o = u === c.defaultLocale ? "" : "/".concat(u);
                        return "".concat(t).concat(c.domain).concat("").concat(o).concat(e)
                    }
                    return !1
                }
            }, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        95569: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = o(92648).Z,
                n = o(17273).Z,
                r = l(o(67294)),
                a = o(14532),
                u = o(83353),
                c = o(61410),
                f = o(79064),
                i = o(370),
                s = o(69955),
                d = o(24224),
                p = o(80508),
                h = o(81516),
                v = o(64266);
            let y = new Set;

            function b(e, t, o, l, n) {
                if (n || u.isLocalURL(t)) {
                    if (!l.bypassPrefetchedCheck) {
                        let n = void 0 !== l.locale ? l.locale : "locale" in e ? e.locale : void 0,
                            r = t + "%" + o + "%" + n;
                        if (y.has(r)) return;
                        y.add(r)
                    }
                    Promise.resolve(e.prefetch(t, o, l)).catch(e => {})
                }
            }

            function _(e) {
                return "string" == typeof e ? e : c.formatUrl(e)
            }
            let g = r.default.forwardRef(function(e, t) {
                let o, l;
                let {
                    href: c,
                    as: y,
                    children: g,
                    prefetch: m,
                    passHref: M,
                    replace: C,
                    shallow: j,
                    scroll: P,
                    locale: L,
                    onClick: k,
                    onMouseEnter: O,
                    onTouchStart: E,
                    legacyBehavior: x = !1
                } = e, w = n(e, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
                o = g, x && ("string" == typeof o || "number" == typeof o) && (o = r.default.createElement("a", null, o));
                let R = !1 !== m,
                    I = r.default.useContext(s.RouterContext),
                    S = r.default.useContext(d.AppRouterContext),
                    T = null != I ? I : S,
                    z = !I,
                    {
                        href: D,
                        as: U
                    } = r.default.useMemo(() => {
                        if (!I) {
                            let e = _(c);
                            return {
                                href: e,
                                as: y ? _(y) : e
                            }
                        }
                        let [e, t] = a.resolveHref(I, c, !0);
                        return {
                            href: e,
                            as: y ? a.resolveHref(I, y) : t || e
                        }
                    }, [I, c, y]),
                    A = r.default.useRef(D),
                    K = r.default.useRef(U);
                x && (l = r.default.Children.only(o));
                let N = x ? l && "object" == typeof l && l.ref : t,
                    [H, B, Z] = p.useIntersection({
                        rootMargin: "200px"
                    }),
                    q = r.default.useCallback(e => {
                        (K.current !== U || A.current !== D) && (Z(), K.current = U, A.current = D), H(e), N && ("function" == typeof N ? N(e) : "object" == typeof N && (N.current = e))
                    }, [U, N, D, Z, H]);
                r.default.useEffect(() => {
                    T && B && R && b(T, D, U, {
                        locale: L
                    }, z)
                }, [U, D, B, L, R, null == I ? void 0 : I.locale, T, z]);
                let F = {
                    ref: q,
                    onClick(e) {
                        x || "function" != typeof k || k(e), x && l.props && "function" == typeof l.props.onClick && l.props.onClick(e), T && !e.defaultPrevented && function(e, t, o, l, n, a, c, f, i, s) {
                            let {
                                nodeName: d
                            } = e.currentTarget, p = "A" === d.toUpperCase();
                            if (p && (function(e) {
                                    let t = e.currentTarget,
                                        o = t.getAttribute("target");
                                    return o && "_self" !== o || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                                }(e) || !i && !u.isLocalURL(o))) return;
                            e.preventDefault();
                            let h = () => {
                                "beforePopState" in t ? t[n ? "replace" : "push"](o, l, {
                                    shallow: a,
                                    locale: f,
                                    scroll: c
                                }) : t[n ? "replace" : "push"](l || o, {
                                    forceOptimisticNavigation: !s
                                })
                            };
                            i ? r.default.startTransition(h) : h()
                        }(e, T, D, U, C, j, P, L, z, R)
                    },
                    onMouseEnter(e) {
                        x || "function" != typeof O || O(e), x && l.props && "function" == typeof l.props.onMouseEnter && l.props.onMouseEnter(e), T && (R || !z) && b(T, D, U, {
                            locale: L,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        }, z)
                    },
                    onTouchStart(e) {
                        x || "function" != typeof E || E(e), x && l.props && "function" == typeof l.props.onTouchStart && l.props.onTouchStart(e), T && (R || !z) && b(T, D, U, {
                            locale: L,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        }, z)
                    }
                };
                if (f.isAbsoluteUrl(U)) F.href = U;
                else if (!x || M || "a" === l.type && !("href" in l.props)) {
                    let e = void 0 !== L ? L : null == I ? void 0 : I.locale,
                        t = (null == I ? void 0 : I.isLocaleDomain) && h.getDomainLocale(U, e, null == I ? void 0 : I.locales, null == I ? void 0 : I.domainLocales);
                    F.href = t || v.addBasePath(i.addLocale(U, e, null == I ? void 0 : I.defaultLocale))
                }
                return x ? r.default.cloneElement(l, F) : r.default.createElement("a", Object.assign({}, w, F), o)
            });
            t.default = g, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        13162: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.normalizeLocalePath = void 0;
            let l = (e, t) => o(34842).normalizeLocalePath(e, t);
            t.normalizeLocalePath = l, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        80508: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.useIntersection = function(e) {
                let {
                    rootRef: t,
                    rootMargin: o,
                    disabled: c
                } = e, f = c || !r, [i, s] = l.useState(!1), d = l.useRef(null), p = l.useCallback(e => {
                    d.current = e
                }, []);
                l.useEffect(() => {
                    if (r) {
                        if (f || i) return;
                        let e = d.current;
                        if (e && e.tagName) {
                            let l = function(e, t, o) {
                                let {
                                    id: l,
                                    observer: n,
                                    elements: r
                                } = function(e) {
                                    let t;
                                    let o = {
                                            root: e.root || null,
                                            margin: e.rootMargin || ""
                                        },
                                        l = u.find(e => e.root === o.root && e.margin === o.margin);
                                    if (l && (t = a.get(l))) return t;
                                    let n = new Map,
                                        r = new IntersectionObserver(e => {
                                            e.forEach(e => {
                                                let t = n.get(e.target),
                                                    o = e.isIntersecting || e.intersectionRatio > 0;
                                                t && o && t(o)
                                            })
                                        }, e);
                                    return t = {
                                        id: o,
                                        observer: r,
                                        elements: n
                                    }, u.push(o), a.set(o, t), t
                                }(o);
                                return r.set(e, t), n.observe(e),
                                    function() {
                                        if (r.delete(e), n.unobserve(e), 0 === r.size) {
                                            n.disconnect(), a.delete(l);
                                            let e = u.findIndex(e => e.root === l.root && e.margin === l.margin);
                                            e > -1 && u.splice(e, 1)
                                        }
                                    }
                            }(e, e => e && s(e), {
                                root: null == t ? void 0 : t.current,
                                rootMargin: o
                            });
                            return l
                        }
                    } else if (!i) {
                        let e = n.requestIdleCallback(() => s(!0));
                        return () => n.cancelIdleCallback(e)
                    }
                }, [f, o, t, i, d.current]);
                let h = l.useCallback(() => {
                    s(!1)
                }, []);
                return [p, i, h]
            };
            var l = o(67294),
                n = o(10029);
            let r = "function" == typeof IntersectionObserver,
                a = new Map,
                u = [];
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        41664: function(e, t, o) {
            e.exports = o(95569)
        }
    }
]);