!function() {
    function t() {
        for (var t = 0, e = m.length; t < e; t++)
            v[t].updateSectionPos()
    }
    function e() {
        var t;
        140 <= pageYOffset ? d.classList.add("terms-aside--sticky") : d.classList.remove("terms-aside--sticky");
        for (var e = 0, i = v.length; e < i; e++)
            if ((t = v[e]).sectionOffset.bottom - 80 > window.pageYOffset) {
                n(t);
                break
            }
    }
    function n(t) {
        l = (t.isActive || (l.diactivate(),
        t.activate()),
        t)
    }
    function i(t) {
        d.style.top = t
    }
    function o(e, i) {
        var n = null;
        return function() {
            var t = function() {
                e(),
                n = null
            };
            n && clearTimeout(n),
            n = setTimeout(t, i)
        }
    }
    function r(i) {
        var n = Date.now();
        requestAnimationFrame(function o() {
            var t, e = (Date.now() - n) / i.duration;
            1 < e && (e = 1),
            t = i.timing(e),
            i.draw(t),
            e < 1 && requestAnimationFrame(o)
        })
    }
    function u(t) {
        function e(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
        var i = t.elem
          , n = t.duration || 1e3
          , o = t.timingFunc || e
          , a = t.margin || 0;
        if ("string" == typeof i && (i = document.body.querySelector(i)),
        i) {
            var l = i.getBoundingClientRect()
              , c = window.pageYOffset
              , s = c + l.top - c - a;
            r({
                duration: n,
                timing: o,
                draw: function(t) {
                    window.scrollTo(0, c + t * s)
                }
            })
        }
    }
    function a(t, e) {
        function i() {
            l = a.section.getBoundingClientRect(),
            c.top = l.top + pageYOffset,
            c.bottom = l.bottom + pageYOffset
        }
        function n() {
            a.link.classList.add(e.activeClass),
            s = !0,
            r.onActive && r.onActive(r)
        }
        function o() {
            a.link.classList.remove(e.activeClass),
            s = !1,
            r.onDiactivate && r.onDiactivate(r)
        }
        var a = {
            link: t,
            section: document.querySelector(t.hash)
        }
          , l = a.section.getBoundingClientRect()
          , c = {
            top: l.top + pageYOffset,
            bottom: l.bottom + pageYOffset
        }
          , s = !1
          , r = this;
        Object.defineProperties(this, {
            elems: {
                value: a
            },
            sectionOffset: {
                value: c
            },
            activate: {
                value: n
            },
            diactivate: {
                value: o
            },
            updateSectionPos: {
                value: i
            },
            isActive: {
                get: function() {
                    return s
                }
            },
            onActive: {
                value: e.onActive,
                writable: !0
            },
            onDiactivate: {
                value: e.onDiactivate,
                writable: !0
            }
        }),
        a.link.addEventListener("click", function(t) {
            return u({
                elem: a.section,
                duration: 600,
                timingFunc: null,
                margin: 80
            }),
            history.pushState(null, null, location.origin + location.pathname + location.search + this.hash),
            t.preventDefault(),
            !1
        })
    }
    var l, c, s, d = document.body.querySelector(".terms-aside"), m = document.body.querySelectorAll(".terms-aside__title"), v = [];
    for (c = 0,
    s = m.length; c < s; c++)
        v.push(new a(m[c],{
            activeClass: "terms-aside__title--active"
        }));
    v[0].onActive = i.bind(null, "100px"),
    v[1].onActive = i.bind(null, "32px"),
    v[2].onActive = i.bind(null, "-36px"),
    v[3].onActive = i.bind(null, "-104px"),
    v[4].onActive = i.bind(null, "-172px"),
    v[5].onActive = i.bind(null, "-240px"),
    v[6].onActive = i.bind(null, "-308px"),
    n(l = v[0]),
    e(),
    window.addEventListener("scroll", e),
    window.addEventListener("resize", o(t), 200);
    document.body.querySelectorAll(".terms-article__title"),
    document.body.querySelectorAll(".terms-article");
    var f, g = document.getElementsByClassName("terms-article__title");
    for (f = 0; f < g.length; f++)
        g[f].addEventListener("click", function() {
            this.classList.toggle("terms-article__title--active");
            var t = this.nextElementSibling;
            t.style.maxHeight ? t.style.maxHeight = null : t.style.maxHeight = t.scrollHeight + "px"
        })
}(),
window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
