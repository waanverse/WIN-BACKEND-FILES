/*!
 * CookieConsent 3.0.1
 * https://github.com/orestbida/cookieconsent
 * Author Orest Bida
 * Released under the MIT License
 */
var e, t;
(e = this),
    (t = function (e) {
        "use strict";
        const t = "opt-in",
            o = "opt-out",
            n = "show--consent",
            c = "show--preferences",
            s = "disable--interaction",
            r = "data-category",
            a = "div",
            i = "button",
            l = "aria-hidden",
            d = "btn-group",
            u = "click",
            f = "data-role",
            p = "consentModal",
            h = "preferencesModal";
        class m {
            constructor() {
                (this.t = { mode: t, revision: 0, autoShow: !0, lazyHtmlGeneration: !0, autoClearCookies: !0, manageScriptTags: !0, hideFromBots: !0, cookie: { name: "cc_cookie", expiresAfterDays: 182, domain: "", path: "/", sameSite: "Lax" } }),
                    (this.o = { i: {}, l: "", _: {}, u: {}, p: {}, m: [], v: !1, h: null, C: null, S: null, M: "", T: !0, D: !1, k: !1, A: !1, N: !1, H: [], V: !1, j: !0, I: [], L: !1, F: "", P: !1, O: [], R: [], B: [], G: [], J: !1, U: !1, $: !1, q: [], K: [], W: [], X: {}, Y: {}, Z: {}, ee: {}, te: {}, oe: [] }),
                    (this.ne = { se: {}, ae: {} }),
                    (this.ce = {}),
                    (this.re = { ie: "cc:onFirstConsent", le: "cc:onConsent", de: "cc:onChange", fe: "cc:onModalShow", _e: "cc:onModalHide", ue: "cc:onModalReady" });
            }
        }
        const g = new m(),
            y = (e, t) => e.indexOf(t),
            b = (e, t) => -1 !== y(e, t),
            w = (e) => Array.isArray(e),
            v = (e) => "string" == typeof e,
            k = (e) => !!e && "object" == typeof e && !w(e),
            C = (e) => "function" == typeof e,
            T = (e) => Object.keys(e),
            L = (e) => Array.from(new Set(e)),
            M = () => document.activeElement,
            S = (e) => e.preventDefault(),
            _ = (e, t) => e.querySelectorAll(t),
            x = (e) => e.dispatchEvent(new Event("change")),
            A = (e) => {
                const t = document.createElement(e);
                return e === i && (t.type = e), t;
            },
            H = (e, t, o) => e.setAttribute(t, o),
            O = (e, t, o) => {
                e.removeAttribute(o ? "data-" + t : t);
            },
            P = (e, t, o) => e.getAttribute(o ? "data-" + t : t),
            I = (e, t) => e.appendChild(t),
            R = (e, t) => e.classList.add(t),
            B = (e, t) => R(e, "cm__" + t),
            j = (e, t) => R(e, "pm__" + t),
            N = (e, t) => e.classList.remove(t),
            D = (e) => {
                if ("object" != typeof e) return e;
                if (e instanceof Date) return new Date(e.getTime());
                let t = Array.isArray(e) ? [] : {};
                for (let o in e) {
                    let n = e[o];
                    t[o] = D(n);
                }
                return t;
            },
            E = () => {
                const e = {},
                    { O: t, X: o, Y: n } = g.o;
                for (const c of t) e[c] = G(n[c], T(o[c]));
                return e;
            },
            Y = (e, t) => dispatchEvent(new CustomEvent(e, { detail: t })),
            F = (e, t, o, n) => {
                e.addEventListener(t, o), n && g.o.m.push({ pe: e, ge: t, me: o });
            },
            Z = () => {
                const e = g.t.cookie.expiresAfterDays;
                return C(e) ? e(g.o.F) : e;
            },
            G = (e, t) => {
                const o = e || [],
                    n = t || [];
                return o.filter((e) => !b(n, e)).concat(n.filter((e) => !b(o, e)));
            },
            U = (e) => {
                (g.o.R = L(e)),
                    (g.o.F = (() => {
                        let e = "custom";
                        const { R: t, O: o, B: n } = g.o,
                            c = t.length;
                        return c === o.length ? (e = "all") : c === n.length && (e = "necessary"), e;
                    })());
            },
            X = (e, t, o, n) => {
                const c = "accept-",
                    { show: s, showPreferences: r, hide: a, hidePreferences: i, acceptCategory: l } = t,
                    d = e || document,
                    f = (e) => _(d, `[data-cc="${e}"]`),
                    p = (e, t) => {
                        S(e), l(t), i(), a();
                    },
                    h = f("show-preferencesModal"),
                    m = f("show-consentModal"),
                    y = f(c + "all"),
                    b = f(c + "necessary"),
                    w = f(c + "custom"),
                    v = g.t.lazyHtmlGeneration;
                for (const e of h)
                    H(e, "aria-haspopup", "dialog"),
                        F(e, u, (e) => {
                            S(e), r();
                        }),
                        v &&
                            (F(
                                e,
                                "mouseenter",
                                (e) => {
                                    S(e), g.o.N || o(t, n);
                                },
                                !0
                            ),
                            F(e, "focus", () => {
                                g.o.N || o(t, n);
                            }));
                for (let e of m)
                    H(e, "aria-haspopup", "dialog"),
                        F(
                            e,
                            u,
                            (e) => {
                                S(e), s(!0);
                            },
                            !0
                        );
                for (let e of y)
                    F(
                        e,
                        u,
                        (e) => {
                            p(e, "all");
                        },
                        !0
                    );
                for (let e of w)
                    F(
                        e,
                        u,
                        (e) => {
                            p(e);
                        },
                        !0
                    );
                for (let e of b)
                    F(
                        e,
                        u,
                        (e) => {
                            p(e, []);
                        },
                        !0
                    );
            },
            q = (e, t) => {
                e && (t && (e.tabIndex = -1), e.focus(), t && e.removeAttribute("tabindex"));
            },
            z = (e, t) => {
                const o = (n) => {
                    n.target.removeEventListener("transitionend", o), "opacity" === n.propertyName && "1" === getComputedStyle(e).opacity && q(((e) => (1 === e ? g.ne.be : g.ne.ve))(t));
                };
                F(e, "transitionend", o);
            };
        let W;
        const V = (e) => {
                clearTimeout(W),
                    e
                        ? R(g.ne.ye, s)
                        : (W = setTimeout(() => {
                              N(g.ne.ye, s);
                          }, 500));
            },
            J = ["M 19.5 4.5 L 4.5 19.5 M 4.5 4.501 L 19.5 19.5", "M 3.572 13.406 L 8.281 18.115 L 20.428 5.885", "M 21.999 6.94 L 11.639 17.18 L 2.001 6.82 "],
            $ = (e = 0, t = 1.5) => `<svg viewBox="0 0 24 24" stroke-width="${t}"><path d="${J[e]}"/></svg>`,
            K = (e) => {
                const t = g.ne,
                    o = g.o;
                ((e) => {
                    const n = e === t.he,
                        c = o.i.disablePageInteraction ? t.ye : n ? t.Ce : t.ye;
                    F(
                        c,
                        "keydown",
                        (t) => {
                            if ("Tab" !== t.key || !(n ? o.k && !o.A : o.A)) return;
                            const c = M(),
                                s = n ? o.q : o.K;
                            0 !== s.length && (t.shiftKey ? (c !== s[0] && e.contains(c)) || (S(t), q(s[1])) : (c !== s[1] && e.contains(c)) || (S(t), q(s[0])));
                        },
                        !0
                    );
                })(e);
            },
            Q = ["[href]", i, "input", "details", "[tabindex]"].map((e) => e + ':not([tabindex="-1"])').join(","),
            ee = (e) => {
                const { o: t, ne: o } = g,
                    n = (e, t) => {
                        const o = _(e, Q);
                        (t[0] = o[0]), (t[1] = o[o.length - 1]);
                    };
                1 === e && t.D && n(o.he, t.q), 2 === e && t.N && n(o.we, t.K);
            },
            te = (e, t, o) => {
                const { de: n, le: c, ie: s, _e: r, ue: a, fe: i } = g.ce,
                    l = g.re;
                if (t) {
                    const n = { modalName: t };
                    return e === l.fe ? C(i) && i(n) : e === l._e ? C(r) && r(n) : ((n.modal = o), C(a) && a(n)), Y(e, n);
                }
                const d = { cookie: g.o.p };
                e === l.ie ? C(s) && s(D(d)) : e === l.le ? C(c) && c(D(d)) : ((d.changedCategories = g.o.I), (d.changedServices = g.o.ee), C(n) && n(D(d))), Y(e, D(d));
            },
            oe = (e, t) => {
                try {
                    return e();
                } catch (e) {
                    return !1;
                }
            },
            ne = (e) => {
                const { Y: t, ee: o, O: n, X: c, oe: s, p: a, I: i } = g.o;
                for (const e of n) {
                    const n = o[e] || t[e] || [];
                    for (const o of n) {
                        const n = c[e][o];
                        if (!n) continue;
                        const { onAccept: s, onReject: r } = n;
                        !n.Se && b(t[e], o) ? ((n.Se = !0), C(s) && s()) : n.Se && !b(t[e], o) && ((n.Se = !1), C(r) && r());
                    }
                }
                if (!g.t.manageScriptTags) return;
                const l = s,
                    d = e || a.categories || [],
                    u = (e, n) => {
                        if (n >= e.length) return;
                        const c = s[n];
                        if (c.xe) return u(e, n + 1);
                        const a = c.Me,
                            l = c.Te,
                            f = c.De,
                            p = b(d, l),
                            h = !!f && b(t[l], f);
                        if ((!f && !c.ke && p) || (!f && c.ke && !p && b(i, l)) || (f && !c.ke && h) || (f && c.ke && !h && b(o[l] || [], f))) {
                            c.xe = !0;
                            const t = P(a, "type", !0);
                            O(a, "type", !!t), O(a, r);
                            let o = P(a, "src", !0);
                            o && O(a, "src", !0);
                            const s = A("script");
                            s.textContent = a.innerHTML;
                            for (const { nodeName: e } of a.attributes) H(s, e, a[e] || P(a, e));
                            t && (s.type = t), o ? (s.src = o) : (o = a.src);
                            const i = !!o && (!t || ["text/javascript", "module"].includes(t));
                            if (
                                (i &&
                                    (s.onload = s.onerror =
                                        () => {
                                            u(e, ++n);
                                        }),
                                a.replaceWith(s),
                                i)
                            )
                                return;
                        }
                        u(e, ++n);
                    };
                u(l, 0);
            },
            ce = "bottom",
            se = "left",
            re = "center",
            ae = "right",
            ie = "inline",
            le = "wide",
            de = "pm--",
            ue = ["middle", "top", ce],
            fe = [se, re, ae],
            pe = { box: { Ee: [le, ie], Ae: ue, Ne: fe, He: ce, Ve: ae }, cloud: { Ee: [ie], Ae: ue, Ne: fe, He: ce, Ve: re }, bar: { Ee: [ie], Ae: ue.slice(1), Ne: [], He: ce, Ve: "" } },
            he = { box: { Ee: [], Ae: [], Ne: [], He: "", Ve: "" }, bar: { Ee: [le], Ae: [], Ne: [se, ae], He: "", Ve: se } },
            me = (e) => {
                const t = g.o.i.guiOptions,
                    o = t && t.consentModal,
                    n = t && t.preferencesModal;
                0 === e && ge(g.ne.he, pe, o, "cm--", "box", "cm"), 1 === e && ge(g.ne.we, he, n, de, "box", "pm");
            },
            ge = (e, t, o, n, c, s) => {
                e.className = s;
                const r = o && o.layout,
                    a = o && o.position,
                    i = o && o.flipButtons,
                    l = !o || !1 !== o.equalWeightButtons,
                    d = (r && r.split(" ")) || [],
                    u = d[0],
                    f = d[1],
                    p = u in t ? u : c,
                    h = t[p],
                    m = b(h.Ee, f) && f,
                    y = (a && a.split(" ")) || [],
                    w = y[0],
                    v = n === de ? y[0] : y[1],
                    k = b(h.Ae, w) ? w : h.He,
                    C = b(h.Ne, v) ? v : h.Ve,
                    T = (t) => {
                        t && R(e, n + t);
                    };
                T(p), T(m), T(k), T(C), i && T("flip");
                const L = s + "__btn--secondary";
                if ("cm" === s) {
                    const { je: e, Ie: t } = g.ne;
                    e && (l ? N(e, L) : R(e, L)), t && (l ? N(t, L) : R(t, L));
                } else {
                    const { Le: e } = g.ne;
                    e && (l ? N(e, L) : R(e, L));
                }
            },
            ye = (e, t) => {
                const o = g.o,
                    n = g.ne,
                    { hide: c, hidePreferences: s, acceptCategory: r } = e,
                    p = (e) => {
                        r(e), s(), c();
                    },
                    m = o.u && o.u.preferencesModal;
                if (!m) return;
                const y = m.title,
                    b = m.closeIconLabel,
                    w = m.acceptAllBtn,
                    C = m.acceptNecessaryBtn,
                    L = m.savePreferencesBtn,
                    M = m.sections || [],
                    S = w || C || L;
                if (n.Fe) (n.Pe = A(a)), j(n.Pe, "body");
                else {
                    (n.Fe = A(a)), R(n.Fe, "pm-wrapper");
                    const e = A("div");
                    R(e, "pm-overlay"),
                        I(n.Fe, e),
                        F(e, u, s),
                        (n.we = A(a)),
                        R(n.we, "pm"),
                        H(n.we, "role", "dialog"),
                        H(n.we, l, !0),
                        H(n.we, "aria-modal", !0),
                        H(n.we, "aria-labelledby", "pm__title"),
                        F(
                            n.ye,
                            "keydown",
                            (e) => {
                                27 === e.keyCode && s();
                            },
                            !0
                        ),
                        (n.Oe = A(a)),
                        j(n.Oe, "header"),
                        (n.Re = A("h2")),
                        j(n.Re, "title"),
                        (n.Re.id = "pm__title"),
                        (n.Be = A(i)),
                        j(n.Be, "close-btn"),
                        H(n.Be, "aria-label", m.closeIconLabel || ""),
                        F(n.Be, u, s),
                        (n.Ge = A("span")),
                        (n.Ge.innerHTML = $()),
                        I(n.Be, n.Ge),
                        (n.Je = A(a)),
                        j(n.Je, "body"),
                        (n.Ue = A(a)),
                        j(n.Ue, "footer");
                    var _ = A(a);
                    R(_, "btns");
                    var x = A(a),
                        O = A(a);
                    j(x, d), j(O, d), I(n.Ue, x), I(n.Ue, O), I(n.Oe, n.Re), I(n.Oe, n.Be), (n.ve = A(a)), H(n.ve, "tabIndex", -1), I(n.we, n.ve), I(n.we, n.Oe), I(n.we, n.Je), S && I(n.we, n.Ue), I(n.Fe, n.we);
                }
                let P;
                y && ((n.Re.innerHTML = y), b && H(n.Be, "aria-label", b)),
                    M.forEach((e, t) => {
                        const c = e.title,
                            s = e.description,
                            r = e.linkedCategory,
                            d = r && o.P[r],
                            f = e.cookieTable,
                            p = f && f.body,
                            h = f && f.caption,
                            g = p && p.length > 0,
                            y = !!d,
                            b = y && o.X[r],
                            w = (k(b) && T(b)) || [],
                            C = y && (!!s || !!g || T(b).length > 0);
                        var L = A(a);
                        if ((j(L, "section"), C || s)) {
                            var M = A(a);
                            j(M, "section-desc-wrapper");
                        }
                        let S = w.length;
                        if (C && S > 0) {
                            const e = A(a);
                            j(e, "section-services");
                            for (const t of w) {
                                const o = b[t],
                                    n = (o && o.label) || t,
                                    c = A(a),
                                    s = A(a),
                                    i = A(a),
                                    l = A(a);
                                j(c, "service"), j(l, "service-title"), j(s, "service-header"), j(i, "service-icon");
                                const u = be(n, t, d, !0, r);
                                (l.innerHTML = n), I(s, i), I(s, l), I(c, s), I(c, u), I(e, c);
                            }
                            I(M, e);
                        }
                        if (c) {
                            var _ = A(a),
                                x = A(y ? i : a);
                            if ((j(_, "section-title-wrapper"), j(x, "section-title"), (x.innerHTML = c), I(_, x), y)) {
                                const e = A("span");
                                (e.innerHTML = $(2, 3.5)), j(e, "section-arrow"), I(_, e), (L.className += "--toggle");
                                const t = be(c, r, d);
                                let o = m.serviceCounterLabel;
                                if (S > 0 && v(o)) {
                                    let e = A("span");
                                    j(e, "badge"), j(e, "service-counter"), H(e, l, !0), H(e, "data-servicecounter", S), o && ((o = o.split("|")), (o = o.length > 1 && S > 1 ? o[1] : o[0]), H(e, "data-counterlabel", o)), (e.innerHTML = S + (o ? " " + o : "")), I(x, e);
                                }
                                if (C) {
                                    j(L, "section--expandable");
                                    var O = r + "-desc";
                                    H(x, "aria-expanded", !1), H(x, "aria-controls", O);
                                }
                                I(_, t);
                            } else H(x, "role", "heading"), H(x, "aria-level", "3");
                            I(L, _);
                        }
                        if (s) {
                            var B = A("p");
                            j(B, "section-desc"), (B.innerHTML = s), I(M, B);
                        }
                        if (
                            C &&
                            (H(M, l, "true"),
                            (M.id = O),
                            ((e, t, o) => {
                                F(x, u, () => {
                                    t.classList.contains("is-expanded") ? (N(t, "is-expanded"), H(o, "aria-expanded", "false"), H(e, l, "true")) : (R(t, "is-expanded"), H(o, "aria-expanded", "true"), H(e, l, "false"));
                                });
                            })(M, L, x),
                            g)
                        ) {
                            const e = A("table"),
                                o = A("thead"),
                                c = A("tbody");
                            if (h) {
                                const t = A("caption");
                                j(t, "table-caption"), (t.innerHTML = h), e.appendChild(t);
                            }
                            j(e, "section-table"), j(o, "table-head"), j(c, "table-body");
                            const s = f.headers,
                                r = T(s),
                                i = n.$e.createDocumentFragment(),
                                l = A("tr");
                            for (const e of r) {
                                const o = s[e],
                                    n = A("th");
                                (n.id = "cc__row-" + o + t), H(n, "scope", "col"), j(n, "table-th"), (n.innerHTML = o), I(i, n);
                            }
                            I(l, i), I(o, l);
                            const d = n.$e.createDocumentFragment();
                            for (const e of p) {
                                const o = A("tr");
                                j(o, "table-tr");
                                for (const n of r) {
                                    const c = s[n],
                                        r = e[n],
                                        i = A("td"),
                                        l = A(a);
                                    j(i, "table-td"), H(i, "data-column", c), H(i, "headers", "cc__row-" + c + t), l.insertAdjacentHTML("beforeend", r), I(i, l), I(o, i);
                                }
                                I(d, o);
                            }
                            I(c, d), I(e, o), I(e, c), I(M, e);
                        }
                        (C || s) && I(L, M);
                        const D = n.Pe || n.Je;
                        y ? (P || ((P = A(a)), j(P, "section-toggles")), P.appendChild(L)) : (P = null), I(D, P || L);
                    }),
                    w && (n.ze || ((n.ze = A(i)), j(n.ze, "btn"), H(n.ze, f, "all"), I(x, n.ze), F(n.ze, u, () => p("all"))), (n.ze.innerHTML = w)),
                    C && (n.Le || ((n.Le = A(i)), j(n.Le, "btn"), H(n.Le, f, "necessary"), I(x, n.Le), F(n.Le, u, () => p([]))), (n.Le.innerHTML = C)),
                    L && (n.qe || ((n.qe = A(i)), j(n.qe, "btn"), j(n.qe, "btn--secondary"), H(n.qe, f, "save"), I(O, n.qe), F(n.qe, u, () => p())), (n.qe.innerHTML = L)),
                    n.Pe && (n.we.replaceChild(n.Pe, n.Je), (n.Je = n.Pe)),
                    me(1),
                    o.N || ((o.N = !0), te(g.re.ue, h, n.we), t(e), I(n.Ce, n.Fe), K(n.we), setTimeout(() => R(n.Fe, "cc--anim"), 100)),
                    ee(2);
            };
        function be(e, t, o, n, c) {
            const s = g.o,
                a = g.ne,
                i = A("label"),
                d = A("input"),
                f = A("span"),
                p = A("span"),
                h = A("span"),
                m = A("span"),
                y = A("span");
            if (
                ((m.innerHTML = $(1, 3)),
                (y.innerHTML = $(0, 3)),
                (d.type = "checkbox"),
                R(i, "section__toggle-wrapper"),
                R(d, "section__toggle"),
                R(m, "toggle__icon-on"),
                R(y, "toggle__icon-off"),
                R(f, "toggle__icon"),
                R(p, "toggle__icon-circle"),
                R(h, "toggle__label"),
                H(f, l, "true"),
                n ? (R(i, "toggle-service"), H(d, r, c), (a.ae[c][t] = d)) : (a.se[t] = d),
                n
                    ? ((e) => {
                          F(d, "change", () => {
                              const t = a.ae[e],
                                  o = a.se[e];
                              s.Z[e] = [];
                              for (let o in t) {
                                  const n = t[o];
                                  n.checked && s.Z[e].push(n.value);
                              }
                              o.checked = s.Z[e].length > 0;
                          });
                      })(c)
                    : ((e) => {
                          F(d, u, () => {
                              const t = a.ae[e],
                                  o = d.checked;
                              s.Z[e] = [];
                              for (let n in t) (t[n].checked = o), o && s.Z[e].push(n);
                          });
                      })(t),
                (d.value = t),
                (h.textContent = e.replace(/<.*>.*<\/.*>/gm, "")),
                I(p, y),
                I(p, m),
                I(f, p),
                s.T)
            )
                (o.readOnly || o.enabled) && (d.checked = !0);
            else if (n) {
                const e = s.Y[c];
                d.checked = o.readOnly || b(e, t);
            } else b(s.R, t) && (d.checked = !0);
            return o.readOnly && (d.disabled = !0), I(i, d), I(i, f), I(i, h), i;
        }
        const we = () => {
                const e = A("span");
                return g.ne.Ke || (g.ne.Ke = e), e;
            },
            ve = (e, t) => {
                const o = g.o,
                    n = g.ne,
                    { hide: c, showPreferences: s, acceptCategory: r } = e,
                    h = o.u && o.u.consentModal;
                if (!h) return;
                const m = h.acceptAllBtn,
                    y = h.acceptNecessaryBtn,
                    b = h.showPreferencesBtn,
                    w = h.closeIconLabel,
                    v = h.footer,
                    k = h.label,
                    C = h.title,
                    T = (e) => {
                        c(), r(e);
                    };
                if (!n.Qe) {
                    (n.Qe = A(a)), (n.he = A(a)), (n.We = A(a)), (n.Xe = A(a)), (n.Ye = A(a)), R(n.Qe, "cm-wrapper"), R(n.he, "cm"), B(n.We, "body"), B(n.Xe, "texts"), B(n.Ye, "btns"), H(n.he, "role", "dialog"), H(n.he, "aria-modal", "true"), H(n.he, l, "false"), H(n.he, "aria-describedby", "cm__desc"), k ? H(n.he, "aria-label", k) : C && H(n.he, "aria-labelledby", "cm__title");
                    const e = "box",
                        t = o.i.guiOptions,
                        c = t && t.consentModal,
                        s = ((c && c.layout) || e).split(" ")[0] === e;
                    C &&
                        w &&
                        s &&
                        (n.Ie ||
                            ((n.Ie = A(i)),
                            (n.Ie.innerHTML = $()),
                            B(n.Ie, "btn"),
                            B(n.Ie, "btn--close"),
                            F(n.Ie, u, () => {
                                T([]);
                            }),
                            I(n.We, n.Ie)),
                        H(n.Ie, "aria-label", w)),
                        I(n.We, n.Xe),
                        (m || y || b) && I(n.We, n.Ye),
                        (n.be = A(a)),
                        H(n.be, "tabIndex", -1),
                        I(n.he, n.be),
                        I(n.he, n.We),
                        I(n.Qe, n.he);
                }
                C && (n.Ze || ((n.Ze = A("h2")), (n.Ze.className = n.Ze.id = "cm__title"), I(n.Xe, n.Ze)), (n.Ze.innerHTML = C));
                let L = h.description;
                if (
                    (L && (o.V && (L = L.replace("{{revisionMessage}}", o.j ? "" : h.revisionMessage || "")), n.et || ((n.et = A("p")), (n.et.className = n.et.id = "cm__desc"), I(n.Xe, n.et)), (n.et.innerHTML = L)),
                    m &&
                        (n.tt ||
                            ((n.tt = A(i)),
                            I(n.tt, we()),
                            B(n.tt, "btn"),
                            H(n.tt, f, "all"),
                            F(n.tt, u, () => {
                                T("all");
                            })),
                        (n.tt.firstElementChild.innerHTML = m)),
                    y &&
                        (n.je ||
                            ((n.je = A(i)),
                            I(n.je, we()),
                            B(n.je, "btn"),
                            H(n.je, f, "necessary"),
                            F(n.je, u, () => {
                                T([]);
                            })),
                        (n.je.firstElementChild.innerHTML = y)),
                    b &&
                        (n.ot ||
                            ((n.ot = A(i)),
                            I(n.ot, we()),
                            B(n.ot, "btn"),
                            B(n.ot, "btn--secondary"),
                            H(n.ot, f, "show"),
                            F(n.ot, "mouseenter", () => {
                                o.N || ye(e, t);
                            }),
                            F(n.ot, u, s)),
                        (n.ot.firstElementChild.innerHTML = b)),
                    n.nt || ((n.nt = A(a)), B(n.nt, d), m && I(n.nt, n.tt), y && I(n.nt, n.je), (m || y) && I(n.We, n.nt), I(n.Ye, n.nt)),
                    n.ot && !n.st && ((n.st = A(a)), n.je && n.tt ? (B(n.st, d), I(n.st, n.ot), I(n.Ye, n.st)) : (I(n.nt, n.ot), B(n.nt, d + "--uneven"))),
                    v)
                ) {
                    if (!n.ct) {
                        let e = A(a),
                            t = A(a);
                        (n.ct = A(a)), B(e, "footer"), B(t, "links"), B(n.ct, "link-group"), I(t, n.ct), I(e, t), I(n.he, e);
                    }
                    n.ct.innerHTML = v;
                }
                me(0), o.D || ((o.D = !0), te(g.re.ue, p, n.he), t(e), I(n.Ce, n.Qe), K(n.he), setTimeout(() => R(n.Qe, "cc--anim"), 100)), ee(1), X(n.We, e, ye, t);
            },
            ke = (e) => {
                if (!v(e)) return null;
                if (e in g.o._) return e;
                let t = e.slice(0, 2);
                return t in g.o._ ? t : null;
            },
            Ce = () => g.o.l || g.o.i.language.default,
            Te = (e) => {
                e && (g.o.l = e);
            },
            Le = async (e) => {
                const t = g.o;
                let o = ke(e) ? e : Ce(),
                    n = t._[o];
                return (
                    v(n)
                        ? (n = await (async (e) => {
                              try {
                                  const t = await fetch(e);
                                  return await t.json();
                              } catch (e) {
                                  return !1;
                              }
                          })(n))
                        : C(n) && (n = await n()),
                    !!n && ((t.u = n), Te(o), !0)
                );
            },
            Me = () => {
                let e = g.o.i.language.rtl,
                    t = g.ne.Ce;
                e && t && (w(e) || (e = [e]), b(e, g.o.l) ? R(t, "cc--rtl") : N(t, "cc--rtl"));
            },
            Se = () => {
                const e = g.ne;
                if (e.Ce) return;
                (e.Ce = A(a)), (e.Ce.id = "cc-main"), e.Ce.setAttribute("data-nosnippet", ""), Me();
                let t = g.o.i.root;
                t && v(t) && (t = document.querySelector(t)), (t || e.$e.body).appendChild(e.Ce);
            },
            _e = (e) => oe(() => localStorage.removeItem(e)),
            xe = (e, t) => {
                if (t instanceof RegExp) return e.filter((e) => t.test(e));
                {
                    const o = y(e, t);
                    return o > -1 ? [e[o]] : [];
                }
            },
            Ae = (e) => {
                const { hostname: t, protocol: o } = location,
                    { name: n, path: c, domain: s, sameSite: r, useLocalStorage: a } = g.t.cookie,
                    i = e
                        ? (() => {
                              const e = g.o.S,
                                  t = e ? new Date() - e : 0;
                              return 864e5 * Z() - t;
                          })()
                        : 864e5 * Z(),
                    l = new Date();
                l.setTime(l.getTime() + i), (g.o.p.expirationTime = l.getTime());
                const d = JSON.stringify(g.o.p);
                let u = n + "=" + encodeURIComponent(d) + (0 !== i ? "; expires=" + l.toUTCString() : "") + "; Path=" + c + "; SameSite=" + r;
                b(t, ".") && (u += "; Domain=" + s),
                    "https:" === o && (u += "; Secure"),
                    a
                        ? ((e, t) => {
                              oe(() => localStorage.setItem(e, t));
                          })(n, d)
                        : (document.cookie = u),
                    g.o.p;
            },
            He = (e, t, o) => {
                if (0 === e.length) return;
                const n = o || g.t.cookie.domain,
                    c = t || g.t.cookie.path,
                    s = "www." === n.slice(0, 4),
                    r = s && n.substring(4),
                    a = (e, t) => {
                        document.cookie = e + "=; path=" + c + (t ? "; domain=." + t : "") + "; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
                    };
                for (const t of e) a(t), a(t, n), s && a(t, r);
            },
            Oe = (e) => {
                const t = e || g.t.cookie.name,
                    o = g.t.cookie.useLocalStorage;
                return ((e, t) => {
                    let o;
                    return (o = oe(() => JSON.parse(t ? e : decodeURIComponent(e))) || {}), o;
                })(o ? ((n = t), oe(() => localStorage.getItem(n)) || "") : Pe(t, !0), o);
                var n;
            },
            Pe = (e, t) => {
                const o = document.cookie.match("(^|;)\\s*" + e + "\\s*=\\s*([^;]+)");
                return o ? (t ? o.pop() : e) : "";
            },
            Ie = (e) => {
                const t = document.cookie.split(/;\s*/),
                    o = [];
                for (const n of t) {
                    let t = n.split("=")[0];
                    e
                        ? oe(() => {
                              e.test(t) && o.push(t);
                          })
                        : o.push(t);
                }
                return o;
            },
            Re = (e, n = []) => {
                ((e, t) => {
                    const { O: o, R: n, B: c, N: s, Z: r, G: a, X: i } = g.o;
                    let l = [];
                    if (e) {
                        w(e) ? l.push(...e) : v(e) && (l = "all" === e ? o : [e]);
                        for (const e of o) r[e] = b(l, e) ? T(i[e]) : [];
                    } else
                        (l = [...n, ...a]),
                            s &&
                                (l = (() => {
                                    const e = g.ne.se;
                                    if (!e) return [];
                                    let t = [];
                                    for (let o in e) e[o].checked && t.push(o);
                                    return t;
                                })());
                    (l = l.filter((e) => !b(o, e) || !b(t, e))), l.push(...c), U(l);
                })(e, n),
                    ((e) => {
                        const t = g.o,
                            { Z: o, B: n, Y: c, X: s, O: r } = t,
                            a = r;
                        t.te = D(c);
                        for (const e of a) {
                            const r = s[e],
                                a = T(r),
                                i = o[e] && o[e].length > 0,
                                l = b(n, e);
                            if (0 !== a.length) {
                                if (((c[e] = []), l)) c[e].push(...a);
                                else if (i) {
                                    const t = o[e];
                                    c[e].push(...t);
                                } else c[e] = t.Z[e];
                                c[e] = L(c[e]);
                            }
                        }
                    })(),
                    (() => {
                        const e = g.o;
                        e.I = g.t.mode === o && e.T ? G(e.G, e.R) : G(e.R, e.p.categories);
                        let n = e.I.length > 0,
                            c = !1;
                        for (const t of e.O) (e.ee[t] = G(e.Y[t], e.te[t])), e.ee[t].length > 0 && (c = !0);
                        const s = g.ne.se;
                        for (const t in s) s[t].checked = b(e.R, t);
                        for (const t of e.O) {
                            const o = g.ne.ae[t],
                                n = e.Y[t];
                            for (const e in o) o[e].checked = b(n, e);
                        }
                        e.C || (e.C = new Date()), e.M || (e.M = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (e) => (e ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (e / 4)))).toString(16))), (e.p = { categories: D(e.R), revision: g.t.revision, data: e.h, consentTimestamp: e.C.toISOString(), consentId: e.M, services: D(e.Y) });
                        let r = !1;
                        const a = n || c;
                        (e.T || a) &&
                            (e.T && ((e.T = !1), (r = !0)),
                            (e.S = e.S ? new Date() : e.C),
                            (e.p.lastConsentTimestamp = e.S.toISOString()),
                            Ae(),
                            g.t.autoClearCookies &&
                                (r || a) &&
                                ((e) => {
                                    const t = g.o,
                                        o = Ie(),
                                        n = ((e) => {
                                            const t = g.o;
                                            return (e ? t.O : t.I).filter((e) => {
                                                const o = t.P[e];
                                                return !!o && !o.readOnly && !!o.autoClear;
                                            });
                                        })(e);
                                    for (const e in t.ee)
                                        for (const n of t.ee[e]) {
                                            const c = t.X[e][n].cookies;
                                            if (!b(t.Y[e], n) && c)
                                                for (const e of c) {
                                                    const t = xe(o, e.name);
                                                    He(t, e.path, e.domain);
                                                }
                                        }
                                    for (const c of n) {
                                        const n = t.P[c].autoClear,
                                            s = (n && n.cookies) || [],
                                            r = b(t.I, c),
                                            a = !b(t.R, c),
                                            i = r && a;
                                        if (e ? a : i) {
                                            n.reloadPage && i && (t.L = !0);
                                            for (const e of s) {
                                                const t = xe(o, e.name);
                                                He(t, e.path, e.domain);
                                            }
                                        }
                                    }
                                })(r),
                            ne()),
                            (r && (te(g.re.ie), te(g.re.le), g.t.mode === t)) || (a && te(g.re.de), e.L && ((e.L = !1), location.reload()));
                    })();
            },
            Be = (e) => {
                const t = g.o.T ? [] : g.o.R;
                return b(t, e);
            },
            je = (e, t) => {
                const o = g.o.T ? [] : g.o.Y[t] || [];
                return b(o, e);
            },
            Ne = (e, t, o) => {
                let n = [];
                const c = (e) => {
                    if (v(e)) {
                        let t = Pe(e);
                        "" !== t && n.push(t);
                    } else n.push(...Ie(e));
                };
                if (w(e)) for (let t of e) c(t);
                else c(e);
                He(n, t, o);
            },
            De = (e) => {
                const { ne: t, o: o } = g;
                if (!o.k) {
                    if (!o.D) {
                        if (!e) return;
                        ve(Ze, Se);
                    }
                    (o.k = !0),
                        (o.U = M()),
                        o.v && V(!0),
                        z(t.he, 1),
                        R(t.ye, n),
                        H(t.he, l, "false"),
                        setTimeout(() => {
                            q(g.ne.be);
                        }, 100),
                        te(g.re.fe, p);
                }
            },
            Ee = () => {
                const { ne: e, o: t, re: o } = g;
                t.k && ((t.k = !1), t.v && V(), q(e.Ke, !0), N(e.ye, n), H(e.he, l, "true"), q(t.U), (t.U = null), te(o._e, p));
            },
            Ye = () => {
                const e = g.o;
                e.A ||
                    (e.N || ye(Ze, Se),
                    (e.A = !0),
                    e.k ? (e.$ = M()) : (e.U = M()),
                    z(g.ne.we, 2),
                    R(g.ne.ye, c),
                    H(g.ne.we, l, "false"),
                    setTimeout(() => {
                        q(g.ne.ve);
                    }, 100),
                    te(g.re.fe, h));
            },
            Fe = () => {
                const e = g.o;
                e.A &&
                    ((e.A = !1),
                    (() => {
                        const e = Ue(),
                            t = g.o.P,
                            o = g.ne.se,
                            n = g.ne.ae,
                            c = (e) => b(g.o.G, e);
                        for (const s in o) {
                            const r = !!t[s].readOnly;
                            o[s].checked = r || (e ? Be(s) : c(s));
                            for (const t in n[s]) n[s][t].checked = r || (e ? je(t, s) : c(s));
                        }
                    })(),
                    q(g.ne.Ge, !0),
                    N(g.ne.ye, c),
                    H(g.ne.we, l, "true"),
                    e.k ? (q(e.$), (e.$ = null)) : (q(e.U), (e.U = null)),
                    te(g.re._e, h));
            };
        var Ze = { show: De, hide: Ee, showPreferences: Ye, hidePreferences: Fe, acceptCategory: Re };
        const Ge = (e, t) => {
                const o = Oe(t);
                return e ? o[e] : o;
            },
            Ue = () => !g.o.T;
        (e.acceptCategory = Re),
            (e.acceptService = (e, t) => {
                const { O: o, X: n } = g.o;
                if (!(e && t && v(t) && b(o, t) && 0 !== T(n[t]).length)) return !1;
                ((e, t) => {
                    const o = g.o,
                        { X: n, Z: c, N: s } = o,
                        r = g.ne.ae[t] || {},
                        a = g.ne.se[t] || {},
                        i = T(n[t]);
                    if (((c[t] = []), v(e))) {
                        if ("all" === e) {
                            if ((c[t].push(...i), s)) for (let e in r) (r[e].checked = !0), x(r[e]);
                        } else if ((b(i, e) && c[t].push(e), s)) for (let t in r) (r[t].checked = e === t), x(r[t]);
                    } else if (w(e))
                        for (let o of i) {
                            const n = b(e, o);
                            n && c[t].push(o), s && ((r[o].checked = n), x(r[o]));
                        }
                    const l = 0 === c[t].length;
                    (o.R = l ? o.R.filter((e) => e !== t) : L([...o.R, t])), s && ((a.checked = !l), x(a));
                })(e, t),
                    Re();
            }),
            (e.acceptedCategory = Be),
            (e.acceptedService = je),
            (e.eraseCookies = Ne),
            (e.getConfig = (e) => {
                const t = g.t,
                    o = g.o.i;
                return e ? t[e] || o[e] : { ...t, ...o, cookie: { ...t.cookie } };
            }),
            (e.getCookie = Ge),
            (e.getUserPreferences = () => {
                const { F: e, Y: t } = g.o,
                    { accepted: o, rejected: n } = (() => {
                        const { T: e, R: t, O: o } = g.o;
                        return { accepted: t, rejected: e ? [] : o.filter((e) => !b(t, e)) };
                    })();
                return D({ acceptType: e, acceptedCategories: o, rejectedCategories: n, acceptedServices: t, rejectedServices: E() });
            }),
            (e.hide = Ee),
            (e.hidePreferences = Fe),
            (e.loadScript = (e, t) => {
                let o = document.querySelector('script[src="' + e + '"]');
                return new Promise((n) => {
                    if (o) return n(!0);
                    if (((o = A("script")), k(t))) for (const e in t) H(o, e, t[e]);
                    (o.onload = () => n(!0)),
                        (o.onerror = () => {
                            o.remove(), n(!1);
                        }),
                        (o.src = e),
                        I(document.head, o);
                });
            }),
            (e.reset = (e) => {
                const { Ce: t, ye: o } = g.ne,
                    { name: r, path: a, domain: i, useLocalStorage: l } = g.t.cookie;
                e && (l ? _e(r) : Ne(r, a, i));
                for (const { pe: e, ge: t, me: o } of g.o.m) e.removeEventListener(t, o);
                t && t.remove(), o && o.classList.remove(s, c, n);
                const d = new m();
                for (const e in g) g[e] = d[e];
                window._ccRun = !1;
            }),
            (e.run = async (e) => {
                const { o: t, t: n, re: c } = g,
                    s = window;
                if (!s._ccRun) {
                    if (
                        ((s._ccRun = !0),
                        ((e) => {
                            const { ne: t, t: n, o: c } = g,
                                s = n,
                                a = c,
                                { cookie: i } = s,
                                l = g.ce,
                                d = e.cookie,
                                u = e.categories,
                                f = T(u) || [],
                                p = navigator,
                                h = document;
                            (t.$e = h), (t.ye = h.documentElement), (i.domain = location.hostname), (a.i = e), (a.P = u), (a.O = f), (a._ = e.language.translations), (a.v = !!e.disablePageInteraction), (l.ie = e.onFirstConsent), (l.le = e.onConsent), (l.de = e.onChange), (l._e = e.onModalHide), (l.fe = e.onModalShow), (l.ue = e.onModalReady);
                            const { mode: m, autoShow: y, lazyHtmlGeneration: w, autoClearCookies: v, revision: C, manageScriptTags: L, hideFromBots: M } = e;
                            m === o && (s.mode = m),
                                "boolean" == typeof v && (s.autoClearCookies = v),
                                "boolean" == typeof L && (s.manageScriptTags = L),
                                "number" == typeof C && C >= 0 && ((s.revision = C), (a.V = !0)),
                                "boolean" == typeof y && (s.autoShow = y),
                                "boolean" == typeof w && (s.lazyHtmlGeneration = w),
                                !1 === M && (s.hideFromBots = !1),
                                !0 === s.hideFromBots && p && (a.J = (p.userAgent && /bot|crawl|spider|slurp|teoma/i.test(p.userAgent)) || p.webdriver),
                                k(d) && (s.cookie = { ...i, ...d }),
                                s.autoClearCookies,
                                a.V,
                                s.manageScriptTags,
                                ((e) => {
                                    const { P: t, X: o, Y: n, Z: c, B: s } = g.o;
                                    for (let r of e) {
                                        const e = t[r],
                                            a = e.services || {},
                                            i = (k(a) && T(a)) || [];
                                        (o[r] = {}), (n[r] = []), (c[r] = []), e.readOnly && (s.push(r), (n[r] = i)), (g.ne.ae[r] = {});
                                        for (let e of i) {
                                            const t = a[e];
                                            (t.Se = !1), (o[r][e] = t);
                                        }
                                    }
                                })(f),
                                (() => {
                                    if (!g.t.manageScriptTags) return;
                                    const e = g.o,
                                        t = _(document, "script[" + r + "]");
                                    for (const o of t) {
                                        let t = P(o, r),
                                            n = o.dataset.service || "",
                                            c = !1;
                                        if ((t && "!" === t.charAt(0) && ((t = t.slice(1)), (c = !0)), "!" === n.charAt(0) && ((n = n.slice(1)), (c = !0)), b(e.O, t) && (e.oe.push({ Me: o, xe: !1, ke: c, Te: t, De: n }), n))) {
                                            const o = e.X[t];
                                            o[n] || (o[n] = { Se: !1 });
                                        }
                                    }
                                })(),
                                Te(
                                    (() => {
                                        const e = g.o.i.language.autoDetect;
                                        if (e) {
                                            const t = { browser: navigator.language, document: document.documentElement.lang },
                                                o = ke(t[e]);
                                            if (o) return o;
                                        }
                                        return Ce();
                                    })()
                                );
                        })(e),
                        t.J)
                    )
                        return;
                    (() => {
                        const e = g.o,
                            t = g.t,
                            n = Oe(),
                            { categories: c, services: s, consentId: r, consentTimestamp: a, lastConsentTimestamp: i, data: l, revision: d } = n,
                            u = w(c);
                        (e.p = n), (e.M = r);
                        const f = !!r && v(r);
                        (e.C = a),
                            e.C && (e.C = new Date(a)),
                            (e.S = i),
                            e.S && (e.S = new Date(i)),
                            (e.h = void 0 !== l ? l : null),
                            e.V && f && d !== t.revision && (e.j = !1),
                            (e.T = !(f && e.j && e.C && e.S && u)),
                            t.cookie.useLocalStorage && !e.T && ((e.T = new Date().getTime() > (n.expirationTime || 0)), e.T && _e(t.cookie.name)),
                            e.T,
                            (() => {
                                const e = g.o;
                                for (const t of e.O) {
                                    const n = e.P[t];
                                    if (n.readOnly || n.enabled) {
                                        e.G.push(t);
                                        const n = e.X[t] || {};
                                        for (let c in n) e.Z[t].push(c), e.i.mode === o && e.Y[t].push(c);
                                    }
                                }
                            })(),
                            e.T ? t.mode === o && (e.R = [...e.G]) : ((e.Z = { ...e.Y }), (e.Y = { ...e.Y, ...s }), U([...e.B, ...c]));
                    })();
                    const i = Ue();
                    if (!(await Le())) return !1;
                    if ((X(null, (a = Ze), ye, Se), g.o.T && ve(a, Se), g.t.lazyHtmlGeneration || ye(a, Se), n.autoShow && !i && De(!0), i)) return ne(), te(c.le);
                    n.mode === o && ne(t.G);
                }
                var a;
            }),
            (e.setCookieData = (e) => {
                let t,
                    o = e.value,
                    n = e.mode,
                    c = !1;
                const s = g.o;
                if ("update" === n) {
                    s.h = t = Ge("data");
                    const e = typeof t == typeof o;
                    if (e && "object" == typeof t) {
                        !t && (t = {});
                        for (let e in o) t[e] !== o[e] && ((t[e] = o[e]), (c = !0));
                    } else (!e && t) || t === o || ((t = o), (c = !0));
                } else (t = o), (c = !0);
                return c && ((s.h = t), (s.p.data = t), Ae(!0)), c;
            }),
            (e.setLanguage = async (e, t) => {
                if (!ke(e)) return !1;
                const o = g.o;
                return !((e === Ce() && !0 !== t) || !(await Le(e)) || (Te(e), o.D && ve(Ze, Se), o.N && ye(Ze, Se), Me(), 0));
            }),
            (e.show = De),
            (e.showPreferences = Ye),
            (e.validConsent = Ue),
            (e.validCookie = (e) => "" !== Pe(e, !0));
    }),
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(((e = "undefined" != typeof globalThis ? globalThis : e || self).CookieConsent = {})),
    document.addEventListener("DOMContentLoaded", function () {
        CookieConsent.run({
            categories: {
                necessary: { enabled: true, readOnly: true }, // Necessary cookies are always enabled and read-only
                analytics: { enabled: false }, // Default to analytics disabled, user can opt in
            },
            language: {
                default: "en",
                translations: {
                    en: {
                        consentModal: {
                            title: "We Value Your Privacy",
                            description: "We use cookies to enhance your experience, analyze site performance, and deliver personalized content. By accepting, you consent to the use of cookies.",
                            acceptAllBtn: "Accept All",
                            showPreferencesBtn: "Manage Preferences", // Allow users to manage preferences
                        },
                        preferencesModal: {
                            title: "Cookie Preferences",
                            description: "We use cookies to ensure that our website works correctly and to improve your experience. You can choose which types of cookies you want to allow. Please note that blocking some types of cookies may impact your experience on our site.",
                            acceptAllBtn: "Accept All Cookies", // Button for accepting all cookies
                            savePreferencesBtn: "Save Preferences", // Button to save user-selected preferences
                            closeIconLabel: "Close modal", // Label for the close button
                            sections: [
                                {
                                    title: "Manage Your Cookie Preferences",
                                    description: "Choose your preferences for cookies below. You can adjust the cookie categories as per your preference. You can also withdraw your consent at any time.",
                                },
                                {
                                    title: "Essential Cookies",
                                    description: "These cookies are necessary for the website to function and cannot be disabled. They are set in response to actions like logging in, setting privacy preferences, or filling out forms.",
                                    linkedCategory: "necessary", // Linking the necessary cookies category
                                },
                                {
                                    title: "Performance and Analytics Cookies",
                                    description: "These cookies help us understand how visitors interact with our website by collecting and reporting anonymous information. These cookies are not essential but help us improve our site.",
                                    linkedCategory: "analytics", // Linking analytics cookies category
                                },
                                {
                                    title: "More Information",
                                    description: "For any questions related to our cookie policy, please contact us at support@waanverse.com. We take your privacy seriously and strive to be transparent about our data usage.",
                                },
                            ],
                        },
                    },
                },
            },
            onAccept: function () {
                // Action to perform when the user accepts the cookies
                console.log("User accepted all cookies");
            },
            onSavePreferences: function (preferences) {
                // Action to perform when user saves their cookie preferences
                console.log("User saved preferences: ", preferences);
            },
            onDecline: function () {
                // Action to perform when the user declines cookies
                console.log("User declined cookies");
            },
            autoEnable: true,
            expiryDays: 365, // Set the expiry date for the cookie consent
            position: "bottom", // Position of the consent banner on the page
            theme: "classic", // Banner theme, options: classic, flat, edgeless
            buttonPosition: "center", // Button position in the consent banner
            closeIcon: true, // Show close icon on the banner for easier dismissal
            style: {
                backgroundColor: "#333", // Banner background color
                color: "#fff", // Text color
                fontFamily: "'Arial', sans-serif", // Font family for text
                fontSize: "16px", // Font size for text
                padding: "15px", // Padding around the consent banner
                borderRadius: "8px", // Rounded corners for the banner
                maxWidth: "700px", // Set maximum width for the banner
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", // Add a subtle shadow effect
            },
        });
    });
