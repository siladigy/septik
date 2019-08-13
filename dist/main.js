! function (e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var c = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(c.exports, c, c.exports, n), c.l = !0, c.exports
    }
    n.m = e, n.c = t, n.d = function (e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var c in e) n.d(o, c, function (t) {
                return e[t]
            }.bind(null, c));
        return o
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 0)
}([function (e, t, n) {
    "use strict";
    n.r(t);
    var o = () => {
        const e = document.querySelector(".popup-check");
        document.querySelector(".check-btn").addEventListener("click", () => {
            e.style.display = "block"
        }), e.addEventListener("click", t => {
            let n = t.target;
            (n.classList.contains("popup-close") || n.classList.contains("popup")) && (e.style.display = "none")
        })
    };
    var c = () => {
        const e = document.querySelector(".popup-discount");
        document.querySelectorAll(".discount-btn").forEach(t => {
            t.addEventListener("click", () => {
                e.style.display = "block"
            })
        }), e.addEventListener("click", t => {
            let n = t.target;
            (n.classList.contains("popup-close") || n.classList.contains("popup")) && (e.style.display = "none")
        })
    };
    var l = () => {
        const e = document.querySelector(".add-sentence-btn"),
            t = document.querySelectorAll(".sentence-block");
        e.addEventListener("click", () => {
            t.forEach(t => {
                t.classList.remove("hidden"), t.classList.remove("visible-sm-block"), e.style.display = "none"
            })
        })
    };
    var r = () => {
        const e = document.querySelector(".questions"),
            t = e.querySelectorAll(".panel-heading"),
            n = e.querySelectorAll(".panel-collapse");
        e.querySelectorAll("a").forEach(e => {
            e.href = "#!"
        });
        for (let e = 0; e < t.length; e++) t[e].addEventListener("click", () => {
            n.forEach(e => {
                e.classList.remove("in")
            }), n[e].classList.add("in")
        })
    };
    var s = () => {
        const e = document.querySelector(".constructor"),
            t = e.querySelectorAll(".panel-heading"),
            n = e.querySelectorAll(".panel-collapse"),
            o = e.querySelectorAll(".construct-btn");
        e.querySelectorAll("a").forEach(e => {
            e.href = "#!"
        });
        for (let e = 0; e < t.length; e++) t[e].addEventListener("click", () => {
            n.forEach(e => {
                e.classList.remove("in")
            }), n[e].classList.add("in")
        }), o[e].addEventListener("click", () => {
            3 !== e && (n.forEach(e => {
                e.classList.remove("in")
            }), n[e + 1].classList.add("in"))
        })
    };
    var a = () => {
        document.querySelectorAll(".phone-user").forEach(e => {
            e.addEventListener("input", () => {
                e.value = e.value.replace(/[^+0-9]+/gi, "")
            })
        });
        (() => {
            const e = document.querySelectorAll("form"),
                t = document.createElement("div");
            e.forEach(e => {
                e.classList.contains("consultation-form") || e.classList.contains("discount-form") || e.addEventListener("submit", o => {
                    o.preventDefault(), e.appendChild(t), t.textContent = "идет отправка..";
                    const c = new FormData(e);
                    let l = {};
                    for (let e of c.entries()) l[e[0]] = e[1];
                    n(l).then(n => {
                        if (200 !== n.status) throw new Error("status network not 200");
                        t.textContent = "спасибо! мы скоро с вами свяжемся", e.reset()
                    }).catch(e => {
                        t.textContent = "что то пошло не так..", console.log(e)
                    })
                })
            });
            const n = e => fetch("./server.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(e)
            })
        })()
    };
    var i = () => {
        const e = document.querySelector(".director-btn"),
            t = document.querySelector(".popup-consultation"),
            n = document.querySelector(".consultation-form"),
            o = document.querySelector(".question-form");
        e.addEventListener("click", e => {
            e.preventDefault(), t.style.display = "block"
        }), t.addEventListener("click", e => {
            let n = e.target;
            (n.classList.contains("popup-close") || n.classList.contains("popup")) && (t.style.display = "none")
        });
        (() => {
            const e = document.createElement("div");
            n.addEventListener("submit", c => {
                const l = {
                        question: document.querySelector(".question-form").value,
                        name: document.getElementById("name_13").value,
                        phone: document.getElementById("phone_13").value
                    },
                    r = JSON.stringify(l);
                c.preventDefault(), n.appendChild(e), e.textContent = "идет отправка..";
                const s = new FormData;
                let a = r;
                for (let e of s.entries()) a[e[0]] = e[1];
                t(a).then(t => {
                    if (200 !== t.status) throw new Error("status network not 200");
                    e.textContent = "спасибо! мы скоро с вами свяжемся", n.reset(), o.value = ""
                }).catch(t => {
                    e.textContent = "что то пошло не так..", console.log(t)
                })
            });
            const t = e => fetch("./server.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(e)
            })
        })()
    };
    var u = () => {
        const e = document.querySelector(".constructor"),
            t = e.querySelectorAll(".onoffswitch-checkbox"),
            n = e.querySelector(".second-well"),
            o = document.getElementById("calc-result"),
            c = document.querySelectorAll(".form-control"),
            l = document.querySelector(".discount-form"),
            r = e.querySelector(".distance");
        n.style.display = "none", t[1].checked = !1;
        let s = 0;
        e.addEventListener("change", () => {
            if (t[0].checked) {
                n.style.display = "none", s = 1e4;
                let e = document.querySelectorAll(".form-control-2 option");
                for (let t = 0, n = e.length; t < n; t++) e[t].selected = e[t].defaultSelected
            } else n.style.display = "block", s = 15e3;
            c.forEach(e => {
                1 != e.value && (s += s * +e.value)
            }), t[0].checked ? t[1].checked && (s += 1e3) : t[1].checked && (s += 2e3), o.value = s
        }), r.addEventListener("input", () => {
            r.value = r.value.replace(/[^+0-9]+/gi, "")
        });
        const a = document.querySelector(".popup-discount");
        document.querySelector(".send-construct").addEventListener("click", () => {
            a.style.display = "block"
        }), a.addEventListener("click", e => {
            let t = e.target;
            (t.classList.contains("popup-close") || t.classList.contains("popup")) && (a.style.display = "none")
        });
        (() => {
            const e = document.createElement("div");
            l.addEventListener("submit", s => {
                const a = {
                        type: t[0].value,
                        firstWellDiametr: c[0].options[c[0].selectedIndex].text,
                        firstWellCircle: c[1].options[c[1].selectedIndex].text,
                        secondWellDiametr: c[2].options[c[2].selectedIndex].text,
                        secondWellCircle: c[3].options[c[3].selectedIndex].text,
                        wellBottom: t[1].value,
                        distance: r.value,
                        result: o.value,
                        name: document.getElementById("name_11").value,
                        phone: document.getElementById("phone_11").value
                    },
                    i = JSON.stringify(a);
                s.preventDefault(), l.appendChild(e), e.textContent = "идет отправка..";
                const u = new FormData;
                let d = i;
                for (let e of u.entries()) d[e[0]] = e[1];
                n(d).then(t => {
                    if (200 !== t.status) throw new Error("status network not 200");
                    e.textContent = "спасибо! мы скоро с вами свяжемся", l.reset()
                }).catch(t => {
                    e.textContent = "что то пошло не так..", console.log(t)
                })
            });
            const n = e => fetch("./server.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(e)
            })
        })()
    };
    (() => {
        const e = document.querySelector(".popup-call");
        document.querySelectorAll(".call-btn").forEach(t => {
            t.addEventListener("click", () => {
                e.style.display = "block"
            })
        }), e.addEventListener("click", t => {
            let n = t.target;
            (n.classList.contains("popup-close") || n.classList.contains("popup")) && (e.style.display = "none")
        })
    })(), o(), c(), l(), r(), s(), a(), i(), u()
}]);