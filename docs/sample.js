/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */ ! function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e)
  } : t(e)
}("undefined" != typeof window ? window : this, function (S, e) {
  "use strict";
  var t = [],
    T = S.document,
    i = Object.getPrototypeOf,
    o = t.slice,
    g = t.concat,
    l = t.push,
    r = t.indexOf,
    n = {},
    a = n.toString,
    m = n.hasOwnProperty,
    s = m.toString,
    u = s.call(Object),
    v = {},
    y = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType
    },
    b = function (e) {
      return null != e && e === e.window
    },
    c = {
      type: !0,
      src: !0,
      noModule: !0
    };

  function x(e, t, n) {
    var i, r = (t = t || T).createElement("script");
    if (r.text = e, n)
      for (i in c) n[i] && (r[i] = n[i]);
    t.head.appendChild(r).parentNode.removeChild(r)
  }

  function w(e) {
    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[a.call(e)] || "object" : typeof e
  }
  var E = function (e, t) {
      return new E.fn.init(e, t)
    },
    d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

  function h(e) {
    var t = !!e && "length" in e && e.length,
      n = w(e);
    return !y(e) && !b(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
  }
  E.fn = E.prototype = {
    jquery: "3.3.1",
    constructor: E,
    length: 0,
    toArray: function () {
      return o.call(this)
    },
    get: function (e) {
      return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
    },
    pushStack: function (e) {
      var t = E.merge(this.constructor(), e);
      return t.prevObject = this, t
    },
    each: function (e) {
      return E.each(this, e)
    },
    map: function (n) {
      return this.pushStack(E.map(this, function (e, t) {
        return n.call(e, t, e)
      }))
    },
    slice: function () {
      return this.pushStack(o.apply(this, arguments))
    },
    first: function () {
      return this.eq(0)
    },
    last: function () {
      return this.eq(-1)
    },
    eq: function (e) {
      var t = this.length,
        n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : [])
    },
    end: function () {
      return this.prevObject || this.constructor()
    },
    push: l,
    sort: t.sort,
    splice: t.splice
  }, E.extend = E.fn.extend = function () {
    var e, t, n, i, r, a, s = arguments[0] || {},
      o = 1,
      l = arguments.length,
      u = !1;
    for ("boolean" == typeof s && (u = s, s = arguments[o] || {}, o++), "object" == typeof s || y(s) || (s = {}), o === l && (s = this, o--); o < l; o++)
      if (null != (e = arguments[o]))
        for (t in e) n = s[t], s !== (i = e[t]) && (u && i && (E.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1, a = n && Array.isArray(n) ? n : []) : a = n && E.isPlainObject(n) ? n : {}, s[t] = E.extend(u, a, i)) : void 0 !== i && (s[t] = i));
    return s
  }, E.extend({
    expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function (e) {
      throw new Error(e)
    },
    noop: function () {},
    isPlainObject: function (e) {
      var t, n;
      return !(!e || "[object Object]" !== a.call(e) || (t = i(e)) && ("function" != typeof (n = m.call(t, "constructor") && t.constructor) || s.call(n) !== u))
    },
    isEmptyObject: function (e) {
      var t;
      for (t in e) return !1;
      return !0
    },
    globalEval: function (e) {
      x(e)
    },
    each: function (e, t) {
      var n, i = 0;
      if (h(e))
        for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
      else
        for (i in e)
          if (!1 === t.call(e[i], i, e[i])) break;
      return e
    },
    trim: function (e) {
      return null == e ? "" : (e + "").replace(d, "")
    },
    makeArray: function (e, t) {
      var n = t || [];
      return null != e && (h(Object(e)) ? E.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)), n
    },
    inArray: function (e, t, n) {
      return null == t ? -1 : r.call(t, e, n)
    },
    merge: function (e, t) {
      for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
      return e.length = r, e
    },
    grep: function (e, t, n) {
      for (var i = [], r = 0, a = e.length, s = !n; r < a; r++) !t(e[r], r) !== s && i.push(e[r]);
      return i
    },
    map: function (e, t, n) {
      var i, r, a = 0,
        s = [];
      if (h(e))
        for (i = e.length; a < i; a++) null != (r = t(e[a], a, n)) && s.push(r);
      else
        for (a in e) null != (r = t(e[a], a, n)) && s.push(r);
      return g.apply([], s)
    },
    guid: 1,
    support: v
  }), "function" == typeof Symbol && (E.fn[Symbol.iterator] = t[Symbol.iterator]), E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    n["[object " + t + "]"] = t.toLowerCase()
  });
  var p = function (n) {
    var e, p, x, a, r, f, d, g, w, l, u, C, S, s, T, m, o, c, v, E = "sizzle" + 1 * new Date,
      y = n.document,
      k = 0,
      i = 0,
      h = se(),
      b = se(),
      M = se(),
      P = function (e, t) {
        return e === t && (u = !0), 0
      },
      A = {}.hasOwnProperty,
      t = [],
      L = t.pop,
      z = t.push,
      D = t.push,
      F = t.slice,
      N = function (e, t) {
        for (var n = 0, i = e.length; n < i; n++)
          if (e[n] === t) return n;
        return -1
      },
      O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      _ = "[\\x20\\t\\r\\n\\f]",
      I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      j = "\\[" + _ + "*(" + I + ")(?:" + _ + "*([*^$|!~]?=)" + _ + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + _ + "*\\]",
      $ = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + j + ")*)|.*)\\)|)",
      H = new RegExp(_ + "+", "g"),
      q = new RegExp("^" + _ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + _ + "+$", "g"),
      V = new RegExp("^" + _ + "*," + _ + "*"),
      B = new RegExp("^" + _ + "*([>+~]|" + _ + ")" + _ + "*"),
      R = new RegExp("=" + _ + "*([^\\]'\"]*?)" + _ + "*\\]", "g"),
      G = new RegExp($),
      X = new RegExp("^" + I + "$"),
      W = {
        ID: new RegExp("^#(" + I + ")"),
        CLASS: new RegExp("^\\.(" + I + ")"),
        TAG: new RegExp("^(" + I + "|[*])"),
        ATTR: new RegExp("^" + j),
        PSEUDO: new RegExp("^" + $),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + _ + "*(even|odd|(([+-]|)(\\d*)n|)" + _ + "*(?:([+-]|)" + _ + "*(\\d+)|))" + _ + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + O + ")$", "i"),
        needsContext: new RegExp("^" + _ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + _ + "*((?:-\\d)?\\d*)" + _ + "*\\)|)(?=[^-]|$)", "i")
      },
      Y = /^(?:input|select|textarea|button)$/i,
      Z = /^h\d$/i,
      U = /^[^{]+\{\s*\[native \w/,
      Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      K = /[+~]/,
      J = new RegExp("\\\\([\\da-f]{1,6}" + _ + "?|(" + _ + ")|.)", "ig"),
      ee = function (e, t, n) {
        var i = "0x" + t - 65536;
        return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
      },
      te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ne = function (e, t) {
        return t ? "\0" === e ? "�ｽ" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
      },
      ie = function () {
        C()
      },
      re = ye(function (e) {
        return !0 === e.disabled && ("form" in e || "label" in e)
      }, {
        dir: "parentNode",
        next: "legend"
      });
    try {
      D.apply(t = F.call(y.childNodes), y.childNodes), t[y.childNodes.length].nodeType
    } catch (n) {
      D = {
        apply: t.length ? function (e, t) {
          z.apply(e, F.call(t))
        } : function (e, t) {
          for (var n = e.length, i = 0; e[n++] = t[i++];);
          e.length = n - 1
        }
      }
    }

    function ae(e, t, n, i) {
      var r, a, s, o, l, u, c, d = t && t.ownerDocument,
        h = t ? t.nodeType : 9;
      if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
      if (!i && ((t ? t.ownerDocument || t : y) !== S && C(t), t = t || S, T)) {
        if (11 !== h && (l = Q.exec(e)))
          if (r = l[1]) {
            if (9 === h) {
              if (!(s = t.getElementById(r))) return n;
              if (s.id === r) return n.push(s), n
            } else if (d && (s = d.getElementById(r)) && v(t, s) && s.id === r) return n.push(s), n
          } else {
            if (l[2]) return D.apply(n, t.getElementsByTagName(e)), n;
            if ((r = l[3]) && p.getElementsByClassName && t.getElementsByClassName) return D.apply(n, t.getElementsByClassName(r)), n
          }
        if (p.qsa && !M[e + " "] && (!m || !m.test(e))) {
          if (1 !== h) d = t, c = e;
          else if ("object" !== t.nodeName.toLowerCase()) {
            for ((o = t.getAttribute("id")) ? o = o.replace(te, ne) : t.setAttribute("id", o = E), a = (u = f(e)).length; a--;) u[a] = "#" + o + " " + ve(u[a]);
            c = u.join(","), d = K.test(e) && ge(t.parentNode) || t
          }
          if (c) try {
            return D.apply(n, d.querySelectorAll(c)), n
          } catch (e) {} finally {
            o === E && t.removeAttribute("id")
          }
        }
      }
      return g(e.replace(q, "$1"), t, n, i)
    }

    function se() {
      var i = [];
      return function e(t, n) {
        return i.push(t + " ") > x.cacheLength && delete e[i.shift()], e[t + " "] = n
      }
    }

    function oe(e) {
      return e[E] = !0, e
    }

    function le(e) {
      var t = S.createElement("fieldset");
      try {
        return !!e(t)
      } catch (e) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null
      }
    }

    function ue(e, t) {
      for (var n = e.split("|"), i = n.length; i--;) x.attrHandle[n[i]] = t
    }

    function ce(e, t) {
      var n = t && e,
        i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (i) return i;
      if (n)
        for (; n = n.nextSibling;)
          if (n === t) return -1;
      return e ? 1 : -1
    }

    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t
      }
    }

    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n
      }
    }

    function pe(t) {
      return function (e) {
        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && re(e) === t : e.disabled === t : "label" in e && e.disabled === t
      }
    }

    function fe(s) {
      return oe(function (a) {
        return a = +a, oe(function (e, t) {
          for (var n, i = s([], e.length, a), r = i.length; r--;) e[n = i[r]] && (e[n] = !(t[n] = e[n]))
        })
      })
    }

    function ge(e) {
      return e && void 0 !== e.getElementsByTagName && e
    }
    for (e in p = ae.support = {}, r = ae.isXML = function (e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return !!t && "HTML" !== t.nodeName
      }, C = ae.setDocument = function (e) {
        var t, n, i = e ? e.ownerDocument || e : y;
        return i !== S && 9 === i.nodeType && i.documentElement && (s = (S = i).documentElement, T = !r(S), y !== S && (n = S.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ie, !1) : n.attachEvent && n.attachEvent("onunload", ie)), p.attributes = le(function (e) {
          return e.className = "i", !e.getAttribute("className")
        }), p.getElementsByTagName = le(function (e) {
          return e.appendChild(S.createComment("")), !e.getElementsByTagName("*").length
        }), p.getElementsByClassName = U.test(S.getElementsByClassName), p.getById = le(function (e) {
          return s.appendChild(e).id = E, !S.getElementsByName || !S.getElementsByName(E).length
        }), p.getById ? (x.filter.ID = function (e) {
          var t = e.replace(J, ee);
          return function (e) {
            return e.getAttribute("id") === t
          }
        }, x.find.ID = function (e, t) {
          if (void 0 !== t.getElementById && T) {
            var n = t.getElementById(e);
            return n ? [n] : []
          }
        }) : (x.filter.ID = function (e) {
          var n = e.replace(J, ee);
          return function (e) {
            var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
            return t && t.value === n
          }
        }, x.find.ID = function (e, t) {
          if (void 0 !== t.getElementById && T) {
            var n, i, r, a = t.getElementById(e);
            if (a) {
              if ((n = a.getAttributeNode("id")) && n.value === e) return [a];
              for (r = t.getElementsByName(e), i = 0; a = r[i++];)
                if ((n = a.getAttributeNode("id")) && n.value === e) return [a]
            }
            return []
          }
        }), x.find.TAG = p.getElementsByTagName ? function (e, t) {
          return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) : void 0
        } : function (e, t) {
          var n, i = [],
            r = 0,
            a = t.getElementsByTagName(e);
          if ("*" === e) {
            for (; n = a[r++];) 1 === n.nodeType && i.push(n);
            return i
          }
          return a
        }, x.find.CLASS = p.getElementsByClassName && function (e, t) {
          if (void 0 !== t.getElementsByClassName && T) return t.getElementsByClassName(e)
        }, o = [], m = [], (p.qsa = U.test(S.querySelectorAll)) && (le(function (e) {
          s.appendChild(e).innerHTML = "<a id='" + E + "'></a><select id='" + E + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + _ + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + _ + "*(?:value|" + O + ")"), e.querySelectorAll("[id~=" + E + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + E + "+*").length || m.push(".#.+[+~]")
        }), le(function (e) {
          e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
          var t = S.createElement("input");
          t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + _ + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), s.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
        })), (p.matchesSelector = U.test(c = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && le(function (e) {
          p.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), o.push("!=", $)
        }), m = m.length && new RegExp(m.join("|")), o = o.length && new RegExp(o.join("|")), t = U.test(s.compareDocumentPosition), v = t || U.test(s.contains) ? function (e, t) {
          var n = 9 === e.nodeType ? e.documentElement : e,
            i = t && t.parentNode;
          return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
        } : function (e, t) {
          if (t)
            for (; t = t.parentNode;)
              if (t === e) return !0;
          return !1
        }, P = t ? function (e, t) {
          if (e === t) return u = !0, 0;
          var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
          return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !p.sortDetached && t.compareDocumentPosition(e) === n ? e === S || e.ownerDocument === y && v(y, e) ? -1 : t === S || t.ownerDocument === y && v(y, t) ? 1 : l ? N(l, e) - N(l, t) : 0 : 4 & n ? -1 : 1)
        } : function (e, t) {
          if (e === t) return u = !0, 0;
          var n, i = 0,
            r = e.parentNode,
            a = t.parentNode,
            s = [e],
            o = [t];
          if (!r || !a) return e === S ? -1 : t === S ? 1 : r ? -1 : a ? 1 : l ? N(l, e) - N(l, t) : 0;
          if (r === a) return ce(e, t);
          for (n = e; n = n.parentNode;) s.unshift(n);
          for (n = t; n = n.parentNode;) o.unshift(n);
          for (; s[i] === o[i];) i++;
          return i ? ce(s[i], o[i]) : s[i] === y ? -1 : o[i] === y ? 1 : 0
        }), S
      }, ae.matches = function (e, t) {
        return ae(e, null, null, t)
      }, ae.matchesSelector = function (e, t) {
        if ((e.ownerDocument || e) !== S && C(e), t = t.replace(R, "='$1']"), p.matchesSelector && T && !M[t + " "] && (!o || !o.test(t)) && (!m || !m.test(t))) try {
          var n = c.call(e, t);
          if (n || p.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
        } catch (e) {}
        return 0 < ae(t, S, null, [e]).length
      }, ae.contains = function (e, t) {
        return (e.ownerDocument || e) !== S && C(e), v(e, t)
      }, ae.attr = function (e, t) {
        (e.ownerDocument || e) !== S && C(e);
        var n = x.attrHandle[t.toLowerCase()],
          i = n && A.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !T) : void 0;
        return void 0 !== i ? i : p.attributes || !T ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
      }, ae.escape = function (e) {
        return (e + "").replace(te, ne)
      }, ae.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e)
      }, ae.uniqueSort = function (e) {
        var t, n = [],
          i = 0,
          r = 0;
        if (u = !p.detectDuplicates, l = !p.sortStable && e.slice(0), e.sort(P), u) {
          for (; t = e[r++];) t === e[r] && (i = n.push(r));
          for (; i--;) e.splice(n[i], 1)
        }
        return l = null, e
      }, a = ae.getText = function (e) {
        var t, n = "",
          i = 0,
          r = e.nodeType;
        if (r) {
          if (1 === r || 9 === r || 11 === r) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += a(e)
          } else if (3 === r || 4 === r) return e.nodeValue
        } else
          for (; t = e[i++];) n += a(t);
        return n
      }, (x = ae.selectors = {
        cacheLength: 50,
        createPseudo: oe,
        match: W,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: !0
          },
          " ": {
            dir: "parentNode"
          },
          "+": {
            dir: "previousSibling",
            first: !0
          },
          "~": {
            dir: "previousSibling"
          }
        },
        preFilter: {
          ATTR: function (e) {
            return e[1] = e[1].replace(J, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(J, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
          },
          CHILD: function (e) {
            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
          },
          PSEUDO: function (e) {
            var t, n = !e[6] && e[2];
            return W.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && G.test(n) && (t = f(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
          }
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(J, ee).toLowerCase();
            return "*" === e ? function () {
              return !0
            } : function (e) {
              return e.nodeName && e.nodeName.toLowerCase() === t
            }
          },
          CLASS: function (e) {
            var t = h[e + " "];
            return t || (t = new RegExp("(^|" + _ + ")" + e + "(" + _ + "|$)")) && h(e, function (e) {
              return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
            })
          },
          ATTR: function (n, i, r) {
            return function (e) {
              var t = ae.attr(e, n);
              return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === r : "!=" === i ? t !== r : "^=" === i ? r && 0 === t.indexOf(r) : "*=" === i ? r && -1 < t.indexOf(r) : "$=" === i ? r && t.slice(-r.length) === r : "~=" === i ? -1 < (" " + t.replace(H, " ") + " ").indexOf(r) : "|=" === i && (t === r || t.slice(0, r.length + 1) === r + "-"))
            }
          },
          CHILD: function (f, e, t, g, m) {
            var v = "nth" !== f.slice(0, 3),
              y = "last" !== f.slice(-4),
              b = "of-type" === e;
            return 1 === g && 0 === m ? function (e) {
              return !!e.parentNode
            } : function (e, t, n) {
              var i, r, a, s, o, l, u = v !== y ? "nextSibling" : "previousSibling",
                c = e.parentNode,
                d = b && e.nodeName.toLowerCase(),
                h = !n && !b,
                p = !1;
              if (c) {
                if (v) {
                  for (; u;) {
                    for (s = e; s = s[u];)
                      if (b ? s.nodeName.toLowerCase() === d : 1 === s.nodeType) return !1;
                    l = u = "only" === f && !l && "nextSibling"
                  }
                  return !0
                }
                if (l = [y ? c.firstChild : c.lastChild], y && h) {
                  for (p = (o = (i = (r = (a = (s = c)[E] || (s[E] = {}))[s.uniqueID] || (a[s.uniqueID] = {}))[f] || [])[0] === k && i[1]) && i[2], s = o && c.childNodes[o]; s = ++o && s && s[u] || (p = o = 0) || l.pop();)
                    if (1 === s.nodeType && ++p && s === e) {
                      r[f] = [k, o, p];
                      break
                    }
                } else if (h && (p = o = (i = (r = (a = (s = e)[E] || (s[E] = {}))[s.uniqueID] || (a[s.uniqueID] = {}))[f] || [])[0] === k && i[1]), !1 === p)
                  for (;
                    (s = ++o && s && s[u] || (p = o = 0) || l.pop()) && ((b ? s.nodeName.toLowerCase() !== d : 1 !== s.nodeType) || !++p || (h && ((r = (a = s[E] || (s[E] = {}))[s.uniqueID] || (a[s.uniqueID] = {}))[f] = [k, p]), s !== e)););
                return (p -= m) === g || p % g == 0 && 0 <= p / g
              }
            }
          },
          PSEUDO: function (e, a) {
            var t, s = x.pseudos[e] || x.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
            return s[E] ? s(a) : 1 < s.length ? (t = [e, e, "", a], x.setFilters.hasOwnProperty(e.toLowerCase()) ? oe(function (e, t) {
              for (var n, i = s(e, a), r = i.length; r--;) e[n = N(e, i[r])] = !(t[n] = i[r])
            }) : function (e) {
              return s(e, 0, t)
            }) : s
          }
        },
        pseudos: {
          not: oe(function (e) {
            var i = [],
              r = [],
              o = d(e.replace(q, "$1"));
            return o[E] ? oe(function (e, t, n, i) {
              for (var r, a = o(e, null, i, []), s = e.length; s--;)(r = a[s]) && (e[s] = !(t[s] = r))
            }) : function (e, t, n) {
              return i[0] = e, o(i, null, n, r), i[0] = null, !r.pop()
            }
          }),
          has: oe(function (t) {
            return function (e) {
              return 0 < ae(t, e).length
            }
          }),
          contains: oe(function (t) {
            return t = t.replace(J, ee),
              function (e) {
                return -1 < (e.textContent || e.innerText || a(e)).indexOf(t)
              }
          }),
          lang: oe(function (n) {
            return X.test(n || "") || ae.error("unsupported lang: " + n), n = n.replace(J, ee).toLowerCase(),
              function (e) {
                var t;
                do {
                  if (t = T ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1
              }
          }),
          target: function (e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id
          },
          root: function (e) {
            return e === s
          },
          focus: function (e) {
            return e === S.activeElement && (!S.hasFocus || S.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
          },
          enabled: pe(!1),
          disabled: pe(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && !!e.checked || "option" === t && !!e.selected
          },
          selected: function (e) {
            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0
          },
          parent: function (e) {
            return !x.pseudos.empty(e)
          },
          header: function (e) {
            return Z.test(e.nodeName)
          },
          input: function (e) {
            return Y.test(e.nodeName)
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && "button" === e.type || "button" === t
          },
          text: function (e) {
            var t;
            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
          },
          first: fe(function () {
            return [0]
          }),
          last: fe(function (e, t) {
            return [t - 1]
          }),
          eq: fe(function (e, t, n) {
            return [n < 0 ? n + t : n]
          }),
          even: fe(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e
          }),
          odd: fe(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e
          }),
          lt: fe(function (e, t, n) {
            for (var i = n < 0 ? n + t : n; 0 <= --i;) e.push(i);
            return e
          }),
          gt: fe(function (e, t, n) {
            for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
            return e
          })
        }
      }).pseudos.nth = x.pseudos.eq, {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) x.pseudos[e] = de(e);
    for (e in {
        submit: !0,
        reset: !0
      }) x.pseudos[e] = he(e);

    function me() {}

    function ve(e) {
      for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
      return i
    }

    function ye(o, e, t) {
      var l = e.dir,
        u = e.next,
        c = u || l,
        d = t && "parentNode" === c,
        h = i++;
      return e.first ? function (e, t, n) {
        for (; e = e[l];)
          if (1 === e.nodeType || d) return o(e, t, n);
        return !1
      } : function (e, t, n) {
        var i, r, a, s = [k, h];
        if (n) {
          for (; e = e[l];)
            if ((1 === e.nodeType || d) && o(e, t, n)) return !0
        } else
          for (; e = e[l];)
            if (1 === e.nodeType || d)
              if (r = (a = e[E] || (e[E] = {}))[e.uniqueID] || (a[e.uniqueID] = {}), u && u === e.nodeName.toLowerCase()) e = e[l] || e;
              else {
                if ((i = r[c]) && i[0] === k && i[1] === h) return s[2] = i[2];
                if ((r[c] = s)[2] = o(e, t, n)) return !0
              } return !1
      }
    }

    function be(r) {
      return 1 < r.length ? function (e, t, n) {
        for (var i = r.length; i--;)
          if (!r[i](e, t, n)) return !1;
        return !0
      } : r[0]
    }

    function xe(e, t, n, i, r) {
      for (var a, s = [], o = 0, l = e.length, u = null != t; o < l; o++)(a = e[o]) && (n && !n(a, i, r) || (s.push(a), u && t.push(o)));
      return s
    }

    function we(p, f, g, m, v, e) {
      return m && !m[E] && (m = we(m)), v && !v[E] && (v = we(v, e)), oe(function (e, t, n, i) {
        var r, a, s, o = [],
          l = [],
          u = t.length,
          c = e || function (e, t, n) {
            for (var i = 0, r = t.length; i < r; i++) ae(e, t[i], n);
            return n
          }(f || "*", n.nodeType ? [n] : n, []),
          d = !p || !e && f ? c : xe(c, o, p, n, i),
          h = g ? v || (e ? p : u || m) ? [] : t : d;
        if (g && g(d, h, n, i), m)
          for (r = xe(h, l), m(r, [], n, i), a = r.length; a--;)(s = r[a]) && (h[l[a]] = !(d[l[a]] = s));
        if (e) {
          if (v || p) {
            if (v) {
              for (r = [], a = h.length; a--;)(s = h[a]) && r.push(d[a] = s);
              v(null, h = [], r, i)
            }
            for (a = h.length; a--;)(s = h[a]) && -1 < (r = v ? N(e, s) : o[a]) && (e[r] = !(t[r] = s))
          }
        } else h = xe(h === t ? h.splice(u, h.length) : h), v ? v(null, t, h, i) : D.apply(t, h)
      })
    }

    function Ce(e) {
      for (var r, t, n, i = e.length, a = x.relative[e[0].type], s = a || x.relative[" "], o = a ? 1 : 0, l = ye(function (e) {
          return e === r
        }, s, !0), u = ye(function (e) {
          return -1 < N(r, e)
        }, s, !0), c = [function (e, t, n) {
          var i = !a && (n || t !== w) || ((r = t).nodeType ? l(e, t, n) : u(e, t, n));
          return r = null, i
        }]; o < i; o++)
        if (t = x.relative[e[o].type]) c = [ye(be(c), t)];
        else {
          if ((t = x.filter[e[o].type].apply(null, e[o].matches))[E]) {
            for (n = ++o; n < i && !x.relative[e[n].type]; n++);
            return we(1 < o && be(c), 1 < o && ve(e.slice(0, o - 1).concat({
              value: " " === e[o - 2].type ? "*" : ""
            })).replace(q, "$1"), t, o < n && Ce(e.slice(o, n)), n < i && Ce(e = e.slice(n)), n < i && ve(e))
          }
          c.push(t)
        }
      return be(c)
    }
    return me.prototype = x.filters = x.pseudos, x.setFilters = new me, f = ae.tokenize = function (e, t) {
      var n, i, r, a, s, o, l, u = b[e + " "];
      if (u) return t ? 0 : u.slice(0);
      for (s = e, o = [], l = x.preFilter; s;) {
        for (a in n && !(i = V.exec(s)) || (i && (s = s.slice(i[0].length) || s), o.push(r = [])), n = !1, (i = B.exec(s)) && (n = i.shift(), r.push({
            value: n,
            type: i[0].replace(q, " ")
          }), s = s.slice(n.length)), x.filter) !(i = W[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), r.push({
          value: n,
          type: a,
          matches: i
        }), s = s.slice(n.length));
        if (!n) break
      }
      return t ? s.length : s ? ae.error(e) : b(e, o).slice(0)
    }, d = ae.compile = function (e, t) {
      var n, m, v, y, b, i, r = [],
        a = [],
        s = M[e + " "];
      if (!s) {
        for (t || (t = f(e)), n = t.length; n--;)(s = Ce(t[n]))[E] ? r.push(s) : a.push(s);
        (s = M(e, (m = a, v = r, y = 0 < v.length, b = 0 < m.length, i = function (e, t, n, i, r) {
          var a, s, o, l = 0,
            u = "0",
            c = e && [],
            d = [],
            h = w,
            p = e || b && x.find.TAG("*", r),
            f = k += null == h ? 1 : Math.random() || .1,
            g = p.length;
          for (r && (w = t === S || t || r); u !== g && null != (a = p[u]); u++) {
            if (b && a) {
              for (s = 0, t || a.ownerDocument === S || (C(a), n = !T); o = m[s++];)
                if (o(a, t || S, n)) {
                  i.push(a);
                  break
                }
              r && (k = f)
            }
            y && ((a = !o && a) && l--, e && c.push(a))
          }
          if (l += u, y && u !== l) {
            for (s = 0; o = v[s++];) o(c, d, t, n);
            if (e) {
              if (0 < l)
                for (; u--;) c[u] || d[u] || (d[u] = L.call(i));
              d = xe(d)
            }
            D.apply(i, d), r && !e && 0 < d.length && 1 < l + v.length && ae.uniqueSort(i)
          }
          return r && (k = f, w = h), c
        }, y ? oe(i) : i))).selector = e
      }
      return s
    }, g = ae.select = function (e, t, n, i) {
      var r, a, s, o, l, u = "function" == typeof e && e,
        c = !i && f(e = u.selector || e);
      if (n = n || [], 1 === c.length) {
        if (2 < (a = c[0] = c[0].slice(0)).length && "ID" === (s = a[0]).type && 9 === t.nodeType && T && x.relative[a[1].type]) {
          if (!(t = (x.find.ID(s.matches[0].replace(J, ee), t) || [])[0])) return n;
          u && (t = t.parentNode), e = e.slice(a.shift().value.length)
        }
        for (r = W.needsContext.test(e) ? 0 : a.length; r-- && (s = a[r], !x.relative[o = s.type]);)
          if ((l = x.find[o]) && (i = l(s.matches[0].replace(J, ee), K.test(a[0].type) && ge(t.parentNode) || t))) {
            if (a.splice(r, 1), !(e = i.length && ve(a))) return D.apply(n, i), n;
            break
          }
      }
      return (u || d(e, c))(i, t, !T, n, !t || K.test(e) && ge(t.parentNode) || t), n
    }, p.sortStable = E.split("").sort(P).join("") === E, p.detectDuplicates = !!u, C(), p.sortDetached = le(function (e) {
      return 1 & e.compareDocumentPosition(S.createElement("fieldset"))
    }), le(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
    }) || ue("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
    }), p.attributes && le(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
    }) || ue("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
    }), le(function (e) {
      return null == e.getAttribute("disabled")
    }) || ue(O, function (e, t, n) {
      var i;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
    }), ae
  }(S);
  E.find = p, E.expr = p.selectors, E.expr[":"] = E.expr.pseudos, E.uniqueSort = E.unique = p.uniqueSort, E.text = p.getText, E.isXMLDoc = p.isXML, E.contains = p.contains, E.escapeSelector = p.escape;
  var f = function (e, t, n) {
      for (var i = [], r = void 0 !== n;
        (e = e[t]) && 9 !== e.nodeType;)
        if (1 === e.nodeType) {
          if (r && E(e).is(n)) break;
          i.push(e)
        }
      return i
    },
    C = function (e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n
    },
    k = E.expr.match.needsContext;

  function M(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
  }
  var P = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function A(e, n, i) {
    return y(n) ? E.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== i
    }) : n.nodeType ? E.grep(e, function (e) {
      return e === n !== i
    }) : "string" != typeof n ? E.grep(e, function (e) {
      return -1 < r.call(n, e) !== i
    }) : E.filter(n, e, i)
  }
  E.filter = function (e, t, n) {
    var i = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? E.find.matchesSelector(i, e) ? [i] : [] : E.find.matches(e, E.grep(t, function (e) {
      return 1 === e.nodeType
    }))
  }, E.fn.extend({
    find: function (e) {
      var t, n, i = this.length,
        r = this;
      if ("string" != typeof e) return this.pushStack(E(e).filter(function () {
        for (t = 0; t < i; t++)
          if (E.contains(r[t], this)) return !0
      }));
      for (n = this.pushStack([]), t = 0; t < i; t++) E.find(e, r[t], n);
      return 1 < i ? E.uniqueSort(n) : n
    },
    filter: function (e) {
      return this.pushStack(A(this, e || [], !1))
    },
    not: function (e) {
      return this.pushStack(A(this, e || [], !0))
    },
    is: function (e) {
      return !!A(this, "string" == typeof e && k.test(e) ? E(e) : e || [], !1).length
    }
  });
  var L, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (E.fn.init = function (e, t, n) {
    var i, r;
    if (!e) return this;
    if (n = n || L, "string" == typeof e) {
      if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : z.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (i[1]) {
        if (t = t instanceof E ? t[0] : t, E.merge(this, E.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : T, !0)), P.test(i[1]) && E.isPlainObject(t))
          for (i in t) y(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        return this
      }
      return (r = T.getElementById(i[2])) && (this[0] = r, this.length = 1), this
    }
    return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : E.makeArray(e, this)
  }).prototype = E.fn, L = E(T);
  var D = /^(?:parents|prev(?:Until|All))/,
    F = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };

  function N(e, t) {
    for (;
      (e = e[t]) && 1 !== e.nodeType;);
    return e
  }
  E.fn.extend({
    has: function (e) {
      var t = E(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++)
          if (E.contains(this, t[e])) return !0
      })
    },
    closest: function (e, t) {
      var n, i = 0,
        r = this.length,
        a = [],
        s = "string" != typeof e && E(e);
      if (!k.test(e))
        for (; i < r; i++)
          for (n = this[i]; n && n !== t; n = n.parentNode)
            if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
              a.push(n);
              break
            }
      return this.pushStack(1 < a.length ? E.uniqueSort(a) : a)
    },
    index: function (e) {
      return e ? "string" == typeof e ? r.call(E(e), this[0]) : r.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function (e, t) {
      return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))))
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
  }), E.each({
    parent: function (e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null
    },
    parents: function (e) {
      return f(e, "parentNode")
    },
    parentsUntil: function (e, t, n) {
      return f(e, "parentNode", n)
    },
    next: function (e) {
      return N(e, "nextSibling")
    },
    prev: function (e) {
      return N(e, "previousSibling")
    },
    nextAll: function (e) {
      return f(e, "nextSibling")
    },
    prevAll: function (e) {
      return f(e, "previousSibling")
    },
    nextUntil: function (e, t, n) {
      return f(e, "nextSibling", n)
    },
    prevUntil: function (e, t, n) {
      return f(e, "previousSibling", n)
    },
    siblings: function (e) {
      return C((e.parentNode || {}).firstChild, e)
    },
    children: function (e) {
      return C(e.firstChild)
    },
    contents: function (e) {
      return M(e, "iframe") ? e.contentDocument : (M(e, "template") && (e = e.content || e), E.merge([], e.childNodes))
    }
  }, function (i, r) {
    E.fn[i] = function (e, t) {
      var n = E.map(this, r, e);
      return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = E.filter(t, n)), 1 < this.length && (F[i] || E.uniqueSort(n), D.test(i) && n.reverse()), this.pushStack(n)
    }
  });
  var O = /[^\x20\t\r\n\f]+/g;

  function _(e) {
    return e
  }

  function I(e) {
    throw e
  }

  function j(e, t, n, i) {
    var r;
    try {
      e && y(r = e.promise) ? r.call(e).done(t).fail(n) : e && y(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
    } catch (e) {
      n.apply(void 0, [e])
    }
  }
  E.Callbacks = function (i) {
    var e, n;
    i = "string" == typeof i ? (e = i, n = {}, E.each(e.match(O) || [], function (e, t) {
      n[t] = !0
    }), n) : E.extend({}, i);
    var r, t, a, s, o = [],
      l = [],
      u = -1,
      c = function () {
        for (s = s || i.once, a = r = !0; l.length; u = -1)
          for (t = l.shift(); ++u < o.length;) !1 === o[u].apply(t[0], t[1]) && i.stopOnFalse && (u = o.length, t = !1);
        i.memory || (t = !1), r = !1, s && (o = t ? [] : "")
      },
      d = {
        add: function () {
          return o && (t && !r && (u = o.length - 1, l.push(t)), function n(e) {
            E.each(e, function (e, t) {
              y(t) ? i.unique && d.has(t) || o.push(t) : t && t.length && "string" !== w(t) && n(t)
            })
          }(arguments), t && !r && c()), this
        },
        remove: function () {
          return E.each(arguments, function (e, t) {
            for (var n; - 1 < (n = E.inArray(t, o, n));) o.splice(n, 1), n <= u && u--
          }), this
        },
        has: function (e) {
          return e ? -1 < E.inArray(e, o) : 0 < o.length
        },
        empty: function () {
          return o && (o = []), this
        },
        disable: function () {
          return s = l = [], o = t = "", this
        },
        disabled: function () {
          return !o
        },
        lock: function () {
          return s = l = [], t || r || (o = t = ""), this
        },
        locked: function () {
          return !!s
        },
        fireWith: function (e, t) {
          return s || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), r || c()), this
        },
        fire: function () {
          return d.fireWith(this, arguments), this
        },
        fired: function () {
          return !!a
        }
      };
    return d
  }, E.extend({
    Deferred: function (e) {
      var a = [
          ["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2],
          ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"],
          ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]
        ],
        r = "pending",
        s = {
          state: function () {
            return r
          },
          always: function () {
            return o.done(arguments).fail(arguments), this
          },
          catch: function (e) {
            return s.then(null, e)
          },
          pipe: function () {
            var r = arguments;
            return E.Deferred(function (i) {
              E.each(a, function (e, t) {
                var n = y(r[t[4]]) && r[t[4]];
                o[t[1]](function () {
                  var e = n && n.apply(this, arguments);
                  e && y(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [e] : arguments)
                })
              }), r = null
            }).promise()
          },
          then: function (t, n, i) {
            var l = 0;

            function u(r, a, s, o) {
              return function () {
                var n = this,
                  i = arguments,
                  e = function () {
                    var e, t;
                    if (!(r < l)) {
                      if ((e = s.apply(n, i)) === a.promise()) throw new TypeError("Thenable self-resolution");
                      t = e && ("object" == typeof e || "function" == typeof e) && e.then, y(t) ? o ? t.call(e, u(l, a, _, o), u(l, a, I, o)) : (l++, t.call(e, u(l, a, _, o), u(l, a, I, o), u(l, a, _, a.notifyWith))) : (s !== _ && (n = void 0, i = [e]), (o || a.resolveWith)(n, i))
                    }
                  },
                  t = o ? e : function () {
                    try {
                      e()
                    } catch (e) {
                      E.Deferred.exceptionHook && E.Deferred.exceptionHook(e, t.stackTrace), l <= r + 1 && (s !== I && (n = void 0, i = [e]), a.rejectWith(n, i))
                    }
                  };
                r ? t() : (E.Deferred.getStackHook && (t.stackTrace = E.Deferred.getStackHook()), S.setTimeout(t))
              }
            }
            return E.Deferred(function (e) {
              a[0][3].add(u(0, e, y(i) ? i : _, e.notifyWith)), a[1][3].add(u(0, e, y(t) ? t : _)), a[2][3].add(u(0, e, y(n) ? n : I))
            }).promise()
          },
          promise: function (e) {
            return null != e ? E.extend(e, s) : s
          }
        },
        o = {};
      return E.each(a, function (e, t) {
        var n = t[2],
          i = t[5];
        s[t[1]] = n.add, i && n.add(function () {
          r = i
        }, a[3 - e][2].disable, a[3 - e][3].disable, a[0][2].lock, a[0][3].lock), n.add(t[3].fire), o[t[0]] = function () {
          return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
        }, o[t[0] + "With"] = n.fireWith
      }), s.promise(o), e && e.call(o, o), o
    },
    when: function (e) {
      var n = arguments.length,
        t = n,
        i = Array(t),
        r = o.call(arguments),
        a = E.Deferred(),
        s = function (t) {
          return function (e) {
            i[t] = this, r[t] = 1 < arguments.length ? o.call(arguments) : e, --n || a.resolveWith(i, r)
          }
        };
      if (n <= 1 && (j(e, a.done(s(t)).resolve, a.reject, !n), "pending" === a.state() || y(r[t] && r[t].then))) return a.then();
      for (; t--;) j(r[t], s(t), a.reject);
      return a.promise()
    }
  });
  var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  E.Deferred.exceptionHook = function (e, t) {
    S.console && S.console.warn && e && $.test(e.name) && S.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
  }, E.readyException = function (e) {
    S.setTimeout(function () {
      throw e
    })
  };
  var H = E.Deferred();

  function q() {
    T.removeEventListener("DOMContentLoaded", q), S.removeEventListener("load", q), E.ready()
  }
  E.fn.ready = function (e) {
    return H.then(e).catch(function (e) {
      E.readyException(e)
    }), this
  }, E.extend({
    isReady: !1,
    readyWait: 1,
    ready: function (e) {
      (!0 === e ? --E.readyWait : E.isReady) || ((E.isReady = !0) !== e && 0 < --E.readyWait || H.resolveWith(T, [E]))
    }
  }), E.ready.then = H.then, "complete" === T.readyState || "loading" !== T.readyState && !T.documentElement.doScroll ? S.setTimeout(E.ready) : (T.addEventListener("DOMContentLoaded", q), S.addEventListener("load", q));
  var V = function (e, t, n, i, r, a, s) {
      var o = 0,
        l = e.length,
        u = null == n;
      if ("object" === w(n))
        for (o in r = !0, n) V(e, t, o, n[o], !0, a, s);
      else if (void 0 !== i && (r = !0, y(i) || (s = !0), u && (s ? (t.call(e, i), t = null) : (u = t, t = function (e, t, n) {
          return u.call(E(e), n)
        })), t))
        for (; o < l; o++) t(e[o], n, s ? i : i.call(e[o], o, t(e[o], n)));
      return r ? e : u ? t.call(e) : l ? t(e[0], n) : a
    },
    B = /^-ms-/,
    R = /-([a-z])/g;

  function G(e, t) {
    return t.toUpperCase()
  }

  function X(e) {
    return e.replace(B, "ms-").replace(R, G)
  }
  var W = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
  };

  function Y() {
    this.expando = E.expando + Y.uid++
  }
  Y.uid = 1, Y.prototype = {
    cache: function (e) {
      var t = e[this.expando];
      return t || (t = {}, W(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t
    },
    set: function (e, t, n) {
      var i, r = this.cache(e);
      if ("string" == typeof t) r[X(t)] = n;
      else
        for (i in t) r[X(i)] = t[i];
      return r
    },
    get: function (e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
    },
    access: function (e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
    },
    remove: function (e, t) {
      var n, i = e[this.expando];
      if (void 0 !== i) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in i ? [t] : t.match(O) || []).length;
          for (; n--;) delete i[t[n]]
        }(void 0 === t || E.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
      }
    },
    hasData: function (e) {
      var t = e[this.expando];
      return void 0 !== t && !E.isEmptyObject(t)
    }
  };
  var Z = new Y,
    U = new Y,
    Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    K = /[A-Z]/g;

  function J(e, t, n) {
    var i, r;
    if (void 0 === n && 1 === e.nodeType)
      if (i = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
        try {
          n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : Q.test(r) ? JSON.parse(r) : r)
        } catch (e) {}
        U.set(e, t, n)
      } else n = void 0;
    return n
  }
  E.extend({
    hasData: function (e) {
      return U.hasData(e) || Z.hasData(e)
    },
    data: function (e, t, n) {
      return U.access(e, t, n)
    },
    removeData: function (e, t) {
      U.remove(e, t)
    },
    _data: function (e, t, n) {
      return Z.access(e, t, n)
    },
    _removeData: function (e, t) {
      Z.remove(e, t)
    }
  }), E.fn.extend({
    data: function (n, e) {
      var t, i, r, a = this[0],
        s = a && a.attributes;
      if (void 0 === n) {
        if (this.length && (r = U.get(a), 1 === a.nodeType && !Z.get(a, "hasDataAttrs"))) {
          for (t = s.length; t--;) s[t] && 0 === (i = s[t].name).indexOf("data-") && (i = X(i.slice(5)), J(a, i, r[i]));
          Z.set(a, "hasDataAttrs", !0)
        }
        return r
      }
      return "object" == typeof n ? this.each(function () {
        U.set(this, n)
      }) : V(this, function (e) {
        var t;
        if (a && void 0 === e) {
          if (void 0 !== (t = U.get(a, n))) return t;
          if (void 0 !== (t = J(a, n))) return t
        } else this.each(function () {
          U.set(this, n, e)
        })
      }, null, e, 1 < arguments.length, null, !0)
    },
    removeData: function (e) {
      return this.each(function () {
        U.remove(this, e)
      })
    }
  }), E.extend({
    queue: function (e, t, n) {
      var i;
      if (e) return t = (t || "fx") + "queue", i = Z.get(e, t), n && (!i || Array.isArray(n) ? i = Z.access(e, t, E.makeArray(n)) : i.push(n)), i || []
    },
    dequeue: function (e, t) {
      t = t || "fx";
      var n = E.queue(e, t),
        i = n.length,
        r = n.shift(),
        a = E._queueHooks(e, t);
      "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete a.stop, r.call(e, function () {
        E.dequeue(e, t)
      }, a)), !i && a && a.empty.fire()
    },
    _queueHooks: function (e, t) {
      var n = t + "queueHooks";
      return Z.get(e, n) || Z.access(e, n, {
        empty: E.Callbacks("once memory").add(function () {
          Z.remove(e, [t + "queue", n])
        })
      })
    }
  }), E.fn.extend({
    queue: function (t, n) {
      var e = 2;
      return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? E.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = E.queue(this, t, n);
        E._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && E.dequeue(this, t)
      })
    },
    dequeue: function (e) {
      return this.each(function () {
        E.dequeue(this, e)
      })
    },
    clearQueue: function (e) {
      return this.queue(e || "fx", [])
    },
    promise: function (e, t) {
      var n, i = 1,
        r = E.Deferred(),
        a = this,
        s = this.length,
        o = function () {
          --i || r.resolveWith(a, [a])
        };
      for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = Z.get(a[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(o));
      return o(), r.promise(t)
    }
  });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
    ne = ["Top", "Right", "Bottom", "Left"],
    ie = function (e, t) {
      return "none" === (e = t || e).style.display || "" === e.style.display && E.contains(e.ownerDocument, e) && "none" === E.css(e, "display")
    },
    re = function (e, t, n, i) {
      var r, a, s = {};
      for (a in t) s[a] = e.style[a], e.style[a] = t[a];
      for (a in r = n.apply(e, i || []), t) e.style[a] = s[a];
      return r
    };

  function ae(e, t, n, i) {
    var r, a, s = 20,
      o = i ? function () {
        return i.cur()
      } : function () {
        return E.css(e, t, "")
      },
      l = o(),
      u = n && n[3] || (E.cssNumber[t] ? "" : "px"),
      c = (E.cssNumber[t] || "px" !== u && +l) && te.exec(E.css(e, t));
    if (c && c[3] !== u) {
      for (l /= 2, u = u || c[3], c = +l || 1; s--;) E.style(e, t, c + u), (1 - a) * (1 - (a = o() / l || .5)) <= 0 && (s = 0), c /= a;
      c *= 2, E.style(e, t, c + u), n = n || []
    }
    return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
  }
  var se = {};

  function oe(e, t) {
    for (var n, i, r = [], a = 0, s = e.length; a < s; a++)(i = e[a]).style && (n = i.style.display, t ? ("none" === n && (r[a] = Z.get(i, "display") || null, r[a] || (i.style.display = "")), "" === i.style.display && ie(i) && (r[a] = (d = u = l = void 0, u = (o = i).ownerDocument, c = o.nodeName, (d = se[c]) || (l = u.body.appendChild(u.createElement(c)), d = E.css(l, "display"), l.parentNode.removeChild(l), "none" === d && (d = "block"), se[c] = d)))) : "none" !== n && (r[a] = "none", Z.set(i, "display", n)));
    var o, l, u, c, d;
    for (a = 0; a < s; a++) null != r[a] && (e[a].style.display = r[a]);
    return e
  }
  E.fn.extend({
    show: function () {
      return oe(this, !0)
    },
    hide: function () {
      return oe(this)
    },
    toggle: function (e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ie(this) ? E(this).show() : E(this).hide()
      })
    }
  });
  var le = /^(?:checkbox|radio)$/i,
    ue = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    ce = /^$|^module$|\/(?:java|ecma)script/i,
    de = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };

  function he(e, t) {
    var n;
    return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && M(e, t) ? E.merge([e], n) : n
  }

  function pe(e, t) {
    for (var n = 0, i = e.length; n < i; n++) Z.set(e[n], "globalEval", !t || Z.get(t[n], "globalEval"))
  }
  de.optgroup = de.option, de.tbody = de.tfoot = de.colgroup = de.caption = de.thead, de.th = de.td;
  var fe, ge, me = /<|&#?\w+;/;

  function ve(e, t, n, i, r) {
    for (var a, s, o, l, u, c, d = t.createDocumentFragment(), h = [], p = 0, f = e.length; p < f; p++)
      if ((a = e[p]) || 0 === a)
        if ("object" === w(a)) E.merge(h, a.nodeType ? [a] : a);
        else if (me.test(a)) {
      for (s = s || d.appendChild(t.createElement("div")), o = (ue.exec(a) || ["", ""])[1].toLowerCase(), l = de[o] || de._default, s.innerHTML = l[1] + E.htmlPrefilter(a) + l[2], c = l[0]; c--;) s = s.lastChild;
      E.merge(h, s.childNodes), (s = d.firstChild).textContent = ""
    } else h.push(t.createTextNode(a));
    for (d.textContent = "", p = 0; a = h[p++];)
      if (i && -1 < E.inArray(a, i)) r && r.push(a);
      else if (u = E.contains(a.ownerDocument, a), s = he(d.appendChild(a), "script"), u && pe(s), n)
      for (c = 0; a = s[c++];) ce.test(a.type || "") && n.push(a);
    return d
  }
  fe = T.createDocumentFragment().appendChild(T.createElement("div")), (ge = T.createElement("input")).setAttribute("type", "radio"), ge.setAttribute("checked", "checked"), ge.setAttribute("name", "t"), fe.appendChild(ge), v.checkClone = fe.cloneNode(!0).cloneNode(!0).lastChild.checked, fe.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!fe.cloneNode(!0).lastChild.defaultValue;
  var ye = T.documentElement,
    be = /^key/,
    xe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    we = /^([^.]*)(?:\.(.+)|)/;

  function Ce() {
    return !0
  }

  function Se() {
    return !1
  }

  function Te() {
    try {
      return T.activeElement
    } catch (e) {}
  }

  function Ee(e, t, n, i, r, a) {
    var s, o;
    if ("object" == typeof t) {
      for (o in "string" != typeof n && (i = i || n, n = void 0), t) Ee(e, o, n, i, t[o], a);
      return e
    }
    if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = Se;
    else if (!r) return e;
    return 1 === a && (s = r, (r = function (e) {
      return E().off(e), s.apply(this, arguments)
    }).guid = s.guid || (s.guid = E.guid++)), e.each(function () {
      E.event.add(this, t, r, i, n)
    })
  }
  E.event = {
    global: {},
    add: function (t, e, n, i, r) {
      var a, s, o, l, u, c, d, h, p, f, g, m = Z.get(t);
      if (m)
        for (n.handler && (n = (a = n).handler, r = a.selector), r && E.find.matchesSelector(ye, r), n.guid || (n.guid = E.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function (e) {
            return void 0 !== E && E.event.triggered !== e.type ? E.event.dispatch.apply(t, arguments) : void 0
          }), u = (e = (e || "").match(O) || [""]).length; u--;) p = g = (o = we.exec(e[u]) || [])[1], f = (o[2] || "").split(".").sort(), p && (d = E.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, d = E.event.special[p] || {}, c = E.extend({
          type: p,
          origType: g,
          data: i,
          handler: n,
          guid: n.guid,
          selector: r,
          needsContext: r && E.expr.match.needsContext.test(r),
          namespace: f.join(".")
        }, a), (h = l[p]) || ((h = l[p] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, i, f, s) || t.addEventListener && t.addEventListener(p, s)), d.add && (d.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, c) : h.push(c), E.event.global[p] = !0)
    },
    remove: function (e, t, n, i, r) {
      var a, s, o, l, u, c, d, h, p, f, g, m = Z.hasData(e) && Z.get(e);
      if (m && (l = m.events)) {
        for (u = (t = (t || "").match(O) || [""]).length; u--;)
          if (p = g = (o = we.exec(t[u]) || [])[1], f = (o[2] || "").split(".").sort(), p) {
            for (d = E.event.special[p] || {}, h = l[p = (i ? d.delegateType : d.bindType) || p] || [], o = o[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = a = h.length; a--;) c = h[a], !r && g !== c.origType || n && n.guid !== c.guid || o && !o.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (h.splice(a, 1), c.selector && h.delegateCount--, d.remove && d.remove.call(e, c));
            s && !h.length && (d.teardown && !1 !== d.teardown.call(e, f, m.handle) || E.removeEvent(e, p, m.handle), delete l[p])
          } else
            for (p in l) E.event.remove(e, p + t[u], n, i, !0);
        E.isEmptyObject(l) && Z.remove(e, "handle events")
      }
    },
    dispatch: function (e) {
      var t, n, i, r, a, s, o = E.event.fix(e),
        l = new Array(arguments.length),
        u = (Z.get(this, "events") || {})[o.type] || [],
        c = E.event.special[o.type] || {};
      for (l[0] = o, t = 1; t < arguments.length; t++) l[t] = arguments[t];
      if (o.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, o)) {
        for (s = E.event.handlers.call(this, o, u), t = 0;
          (r = s[t++]) && !o.isPropagationStopped();)
          for (o.currentTarget = r.elem, n = 0;
            (a = r.handlers[n++]) && !o.isImmediatePropagationStopped();) o.rnamespace && !o.rnamespace.test(a.namespace) || (o.handleObj = a, o.data = a.data, void 0 !== (i = ((E.event.special[a.origType] || {}).handle || a.handler).apply(r.elem, l)) && !1 === (o.result = i) && (o.preventDefault(), o.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, o), o.result
      }
    },
    handlers: function (e, t) {
      var n, i, r, a, s, o = [],
        l = t.delegateCount,
        u = e.target;
      if (l && u.nodeType && !("click" === e.type && 1 <= e.button))
        for (; u !== this; u = u.parentNode || this)
          if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
            for (a = [], s = {}, n = 0; n < l; n++) void 0 === s[r = (i = t[n]).selector + " "] && (s[r] = i.needsContext ? -1 < E(r, this).index(u) : E.find(r, this, null, [u]).length), s[r] && a.push(i);
            a.length && o.push({
              elem: u,
              handlers: a
            })
          }
      return u = this, l < t.length && o.push({
        elem: u,
        handlers: t.slice(l)
      }), o
    },
    addProp: function (t, e) {
      Object.defineProperty(E.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: y(e) ? function () {
          if (this.originalEvent) return e(this.originalEvent)
        } : function () {
          if (this.originalEvent) return this.originalEvent[t]
        },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
          })
        }
      })
    },
    fix: function (e) {
      return e[E.expando] ? e : new E.Event(e)
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function () {
          if (this !== Te() && this.focus) return this.focus(), !1
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function () {
          if (this === Te() && this.blur) return this.blur(), !1
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function () {
          if ("checkbox" === this.type && this.click && M(this, "input")) return this.click(), !1
        },
        _default: function (e) {
          return M(e.target, "a")
        }
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
        }
      }
    }
  }, E.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n)
  }, E.Event = function (e, t) {
    if (!(this instanceof E.Event)) return new E.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && E.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[E.expando] = !0
  }, E.Event.prototype = {
    constructor: E.Event,
    isDefaultPrevented: Se,
    isPropagationStopped: Se,
    isImmediatePropagationStopped: Se,
    isSimulated: !1,
    preventDefault: function () {
      var e = this.originalEvent;
      this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault()
    },
    stopPropagation: function () {
      var e = this.originalEvent;
      this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation()
    },
    stopImmediatePropagation: function () {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
    }
  }, E.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    char: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: function (e) {
      var t = e.button;
      return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && xe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
    }
  }, E.event.addProp), E.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, r) {
    E.event.special[e] = {
      delegateType: r,
      bindType: r,
      handle: function (e) {
        var t, n = e.relatedTarget,
          i = e.handleObj;
        return n && (n === this || E.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = r), t
      }
    }
  }), E.fn.extend({
    on: function (e, t, n, i) {
      return Ee(this, e, t, n, i)
    },
    one: function (e, t, n, i) {
      return Ee(this, e, t, n, i, 1)
    },
    off: function (e, t, n) {
      var i, r;
      if (e && e.preventDefault && e.handleObj) return i = e.handleObj, E(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
      if ("object" == typeof e) {
        for (r in e) this.off(r, t, e[r]);
        return this
      }
      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each(function () {
        E.event.remove(this, e, n, t)
      })
    }
  });
  var ke = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    Me = /<script|<style|<link/i,
    Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function Le(e, t) {
    return M(e, "table") && M(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0] || e
  }

  function ze(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
  }

  function De(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
  }

  function Fe(e, t) {
    var n, i, r, a, s, o, l, u;
    if (1 === t.nodeType) {
      if (Z.hasData(e) && (a = Z.access(e), s = Z.set(t, a), u = a.events))
        for (r in delete s.handle, s.events = {}, u)
          for (n = 0, i = u[r].length; n < i; n++) E.event.add(t, r, u[r][n]);
      U.hasData(e) && (o = U.access(e), l = E.extend({}, o), U.set(t, l))
    }
  }

  function Ne(n, i, r, a) {
    i = g.apply([], i);
    var e, t, s, o, l, u, c = 0,
      d = n.length,
      h = d - 1,
      p = i[0],
      f = y(p);
    if (f || 1 < d && "string" == typeof p && !v.checkClone && Pe.test(p)) return n.each(function (e) {
      var t = n.eq(e);
      f && (i[0] = p.call(this, e, t.html())), Ne(t, i, r, a)
    });
    if (d && (t = (e = ve(i, n[0].ownerDocument, !1, n, a)).firstChild, 1 === e.childNodes.length && (e = t), t || a)) {
      for (o = (s = E.map(he(e, "script"), ze)).length; c < d; c++) l = e, c !== h && (l = E.clone(l, !0, !0), o && E.merge(s, he(l, "script"))), r.call(n[c], l, c);
      if (o)
        for (u = s[s.length - 1].ownerDocument, E.map(s, De), c = 0; c < o; c++) l = s[c], ce.test(l.type || "") && !Z.access(l, "globalEval") && E.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? E._evalUrl && E._evalUrl(l.src) : x(l.textContent.replace(Ae, ""), u, l))
    }
    return n
  }

  function Oe(e, t, n) {
    for (var i, r = t ? E.filter(t, e) : e, a = 0; null != (i = r[a]); a++) n || 1 !== i.nodeType || E.cleanData(he(i)), i.parentNode && (n && E.contains(i.ownerDocument, i) && pe(he(i, "script")), i.parentNode.removeChild(i));
    return e
  }
  E.extend({
    htmlPrefilter: function (e) {
      return e.replace(ke, "<$1></$2>")
    },
    clone: function (e, t, n) {
      var i, r, a, s, o, l, u, c = e.cloneNode(!0),
        d = E.contains(e.ownerDocument, e);
      if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e)))
        for (s = he(c), i = 0, r = (a = he(e)).length; i < r; i++) o = a[i], l = s[i], void 0, "input" === (u = l.nodeName.toLowerCase()) && le.test(o.type) ? l.checked = o.checked : "input" !== u && "textarea" !== u || (l.defaultValue = o.defaultValue);
      if (t)
        if (n)
          for (a = a || he(e), s = s || he(c), i = 0, r = a.length; i < r; i++) Fe(a[i], s[i]);
        else Fe(e, c);
      return 0 < (s = he(c, "script")).length && pe(s, !d && he(e, "script")), c
    },
    cleanData: function (e) {
      for (var t, n, i, r = E.event.special, a = 0; void 0 !== (n = e[a]); a++)
        if (W(n)) {
          if (t = n[Z.expando]) {
            if (t.events)
              for (i in t.events) r[i] ? E.event.remove(n, i) : E.removeEvent(n, i, t.handle);
            n[Z.expando] = void 0
          }
          n[U.expando] && (n[U.expando] = void 0)
        }
    }
  }), E.fn.extend({
    detach: function (e) {
      return Oe(this, e, !0)
    },
    remove: function (e) {
      return Oe(this, e)
    },
    text: function (e) {
      return V(this, function (e) {
        return void 0 === e ? E.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
        })
      }, null, e, arguments.length)
    },
    append: function () {
      return Ne(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
      })
    },
    prepend: function () {
      return Ne(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Le(this, e);
          t.insertBefore(e, t.firstChild)
        }
      })
    },
    before: function () {
      return Ne(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this)
      })
    },
    after: function () {
      return Ne(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
      })
    },
    empty: function () {
      for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (E.cleanData(he(e, !1)), e.textContent = "");
      return this
    },
    clone: function (e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return E.clone(this, e, t)
      })
    },
    html: function (e) {
      return V(this, function (e) {
        var t = this[0] || {},
          n = 0,
          i = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
        if ("string" == typeof e && !Me.test(e) && !de[(ue.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = E.htmlPrefilter(e);
          try {
            for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (E.cleanData(he(t, !1)), t.innerHTML = e);
            t = 0
          } catch (e) {}
        }
        t && this.empty().append(e)
      }, null, e, arguments.length)
    },
    replaceWith: function () {
      var n = [];
      return Ne(this, arguments, function (e) {
        var t = this.parentNode;
        E.inArray(this, n) < 0 && (E.cleanData(he(this)), t && t.replaceChild(e, this))
      }, n)
    }
  }), E.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, s) {
    E.fn[e] = function (e) {
      for (var t, n = [], i = E(e), r = i.length - 1, a = 0; a <= r; a++) t = a === r ? this : this.clone(!0), E(i[a])[s](t), l.apply(n, t.get());
      return this.pushStack(n)
    }
  });
  var _e = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
    Ie = function (e) {
      var t = e.ownerDocument.defaultView;
      return t && t.opener || (t = S), t.getComputedStyle(e)
    },
    je = new RegExp(ne.join("|"), "i");

  function $e(e, t, n) {
    var i, r, a, s, o = e.style;
    return (n = n || Ie(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || E.contains(e.ownerDocument, e) || (s = E.style(e, t)), !v.pixelBoxStyles() && _e.test(s) && je.test(t) && (i = o.width, r = o.minWidth, a = o.maxWidth, o.minWidth = o.maxWidth = o.width = s, s = n.width, o.width = i, o.minWidth = r, o.maxWidth = a)), void 0 !== s ? s + "" : s
  }

  function He(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get
      }
    }
  }! function () {
    function e() {
      if (l) {
        o.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ye.appendChild(o).appendChild(l);
        var e = S.getComputedStyle(l);
        n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", a = 36 === t(e.right), i = 36 === t(e.width), l.style.position = "absolute", r = 36 === l.offsetWidth || "absolute", ye.removeChild(o), l = null
      }
    }

    function t(e) {
      return Math.round(parseFloat(e))
    }
    var n, i, r, a, s, o = T.createElement("div"),
      l = T.createElement("div");
    l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === l.style.backgroundClip, E.extend(v, {
      boxSizingReliable: function () {
        return e(), i
      },
      pixelBoxStyles: function () {
        return e(), a
      },
      pixelPosition: function () {
        return e(), n
      },
      reliableMarginLeft: function () {
        return e(), s
      },
      scrollboxSize: function () {
        return e(), r
      }
    }))
  }();
  var qe = /^(none|table(?!-c[ea]).+)/,
    Ve = /^--/,
    Be = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    Re = {
      letterSpacing: "0",
      fontWeight: "400"
    },
    Ge = ["Webkit", "Moz", "ms"],
    Xe = T.createElement("div").style;

  function We(e) {
    var t = E.cssProps[e];
    return t || (t = E.cssProps[e] = function (e) {
      if (e in Xe) return e;
      for (var t = e[0].toUpperCase() + e.slice(1), n = Ge.length; n--;)
        if ((e = Ge[n] + t) in Xe) return e
    }(e) || e), t
  }

  function Ye(e, t, n) {
    var i = te.exec(t);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
  }

  function Ze(e, t, n, i, r, a) {
    var s = "width" === t ? 1 : 0,
      o = 0,
      l = 0;
    if (n === (i ? "border" : "content")) return 0;
    for (; s < 4; s += 2) "margin" === n && (l += E.css(e, n + ne[s], !0, r)), i ? ("content" === n && (l -= E.css(e, "padding" + ne[s], !0, r)), "margin" !== n && (l -= E.css(e, "border" + ne[s] + "Width", !0, r))) : (l += E.css(e, "padding" + ne[s], !0, r), "padding" !== n ? l += E.css(e, "border" + ne[s] + "Width", !0, r) : o += E.css(e, "border" + ne[s] + "Width", !0, r));
    return !i && 0 <= a && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - a - l - o - .5))), l
  }

  function Ue(e, t, n) {
    var i = Ie(e),
      r = $e(e, t, i),
      a = "border-box" === E.css(e, "boxSizing", !1, i),
      s = a;
    if (_e.test(r)) {
      if (!n) return r;
      r = "auto"
    }
    return s = s && (v.boxSizingReliable() || r === e.style[t]), ("auto" === r || !parseFloat(r) && "inline" === E.css(e, "display", !1, i)) && (r = e["offset" + t[0].toUpperCase() + t.slice(1)], s = !0), (r = parseFloat(r) || 0) + Ze(e, t, n || (a ? "border" : "content"), s, i, r) + "px"
  }

  function Qe(e, t, n, i, r) {
    return new Qe.prototype.init(e, t, n, i, r)
  }
  E.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = $e(e, "opacity");
            return "" === n ? "1" : n
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function (e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var r, a, s, o = X(t),
          l = Ve.test(t),
          u = e.style;
        if (l || (t = We(o)), s = E.cssHooks[t] || E.cssHooks[o], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : u[t];
        "string" == (a = typeof n) && (r = te.exec(n)) && r[1] && (n = ae(e, t, r), a = "number"), null != n && n == n && ("number" === a && (n += r && r[3] || (E.cssNumber[o] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? u.setProperty(t, n) : u[t] = n))
      }
    },
    css: function (e, t, n, i) {
      var r, a, s, o = X(t);
      return Ve.test(t) || (t = We(o)), (s = E.cssHooks[t] || E.cssHooks[o]) && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = $e(e, t, i)), "normal" === r && t in Re && (r = Re[t]), "" === n || n ? (a = parseFloat(r), !0 === n || isFinite(a) ? a || 0 : r) : r
    }
  }), E.each(["height", "width"], function (e, o) {
    E.cssHooks[o] = {
      get: function (e, t, n) {
        if (t) return !qe.test(E.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ue(e, o, n) : re(e, Be, function () {
          return Ue(e, o, n)
        })
      },
      set: function (e, t, n) {
        var i, r = Ie(e),
          a = "border-box" === E.css(e, "boxSizing", !1, r),
          s = n && Ze(e, o, n, a, r);
        return a && v.scrollboxSize() === r.position && (s -= Math.ceil(e["offset" + o[0].toUpperCase() + o.slice(1)] - parseFloat(r[o]) - Ze(e, o, "border", !1, r) - .5)), s && (i = te.exec(t)) && "px" !== (i[3] || "px") && (e.style[o] = t, t = E.css(e, o)), Ye(0, t, s)
      }
    }
  }), E.cssHooks.marginLeft = He(v.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat($e(e, "marginLeft")) || e.getBoundingClientRect().left - re(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left
    })) + "px"
  }), E.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (r, a) {
    E.cssHooks[r + a] = {
      expand: function (e) {
        for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[r + ne[t] + a] = i[t] || i[t - 2] || i[0];
        return n
      }
    }, "margin" !== r && (E.cssHooks[r + a].set = Ye)
  }), E.fn.extend({
    css: function (e, t) {
      return V(this, function (e, t, n) {
        var i, r, a = {},
          s = 0;
        if (Array.isArray(t)) {
          for (i = Ie(e), r = t.length; s < r; s++) a[t[s]] = E.css(e, t[s], !1, i);
          return a
        }
        return void 0 !== n ? E.style(e, t, n) : E.css(e, t)
      }, e, t, 1 < arguments.length)
    }
  }), ((E.Tween = Qe).prototype = {
    constructor: Qe,
    init: function (e, t, n, i, r, a) {
      this.elem = e, this.prop = n, this.easing = r || E.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = a || (E.cssNumber[n] ? "" : "px")
    },
    cur: function () {
      var e = Qe.propHooks[this.prop];
      return e && e.get ? e.get(this) : Qe.propHooks._default.get(this)
    },
    run: function (e) {
      var t, n = Qe.propHooks[this.prop];
      return this.options.duration ? this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Qe.propHooks._default.set(this), this
    }
  }).init.prototype = Qe.prototype, (Qe.propHooks = {
    _default: {
      get: function (e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = E.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
      },
      set: function (e) {
        E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[E.cssProps[e.prop]] && !E.cssHooks[e.prop] ? e.elem[e.prop] = e.now : E.style(e.elem, e.prop, e.now + e.unit)
      }
    }
  }).scrollTop = Qe.propHooks.scrollLeft = {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }
  }, E.easing = {
    linear: function (e) {
      return e
    },
    swing: function (e) {
      return .5 - Math.cos(e * Math.PI) / 2
    },
    _default: "swing"
  }, E.fx = Qe.prototype.init, E.fx.step = {};
  var Ke, Je, et, tt, nt = /^(?:toggle|show|hide)$/,
    it = /queueHooks$/;

  function rt() {
    Je && (!1 === T.hidden && S.requestAnimationFrame ? S.requestAnimationFrame(rt) : S.setTimeout(rt, E.fx.interval), E.fx.tick())
  }

  function at() {
    return S.setTimeout(function () {
      Ke = void 0
    }), Ke = Date.now()
  }

  function st(e, t) {
    var n, i = 0,
      r = {
        height: e
      };
    for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = ne[i])] = r["padding" + n] = e;
    return t && (r.opacity = r.width = e), r
  }

  function ot(e, t, n) {
    for (var i, r = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), a = 0, s = r.length; a < s; a++)
      if (i = r[a].call(n, t, e)) return i
  }

  function lt(a, e, t) {
    var n, s, i = 0,
      r = lt.prefilters.length,
      o = E.Deferred().always(function () {
        delete l.elem
      }),
      l = function () {
        if (s) return !1;
        for (var e = Ke || at(), t = Math.max(0, u.startTime + u.duration - e), n = 1 - (t / u.duration || 0), i = 0, r = u.tweens.length; i < r; i++) u.tweens[i].run(n);
        return o.notifyWith(a, [u, n, t]), n < 1 && r ? t : (r || o.notifyWith(a, [u, 1, 0]), o.resolveWith(a, [u]), !1)
      },
      u = o.promise({
        elem: a,
        props: E.extend({}, e),
        opts: E.extend(!0, {
          specialEasing: {},
          easing: E.easing._default
        }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: Ke || at(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = E.Tween(a, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing);
          return u.tweens.push(n), n
        },
        stop: function (e) {
          var t = 0,
            n = e ? u.tweens.length : 0;
          if (s) return this;
          for (s = !0; t < n; t++) u.tweens[t].run(1);
          return e ? (o.notifyWith(a, [u, 1, 0]), o.resolveWith(a, [u, e])) : o.rejectWith(a, [u, e]), this
        }
      }),
      c = u.props;
    for (function (e, t) {
        var n, i, r, a, s;
        for (n in e)
          if (r = t[i = X(n)], a = e[n], Array.isArray(a) && (r = a[1], a = e[n] = a[0]), n !== i && (e[i] = a, delete e[n]), (s = E.cssHooks[i]) && "expand" in s)
            for (n in a = s.expand(a), delete e[i], a) n in e || (e[n] = a[n], t[n] = r);
          else t[i] = r
      }(c, u.opts.specialEasing); i < r; i++)
      if (n = lt.prefilters[i].call(u, a, c, u.opts)) return y(n.stop) && (E._queueHooks(u.elem, u.opts.queue).stop = n.stop.bind(n)), n;
    return E.map(c, ot, u), y(u.opts.start) && u.opts.start.call(a, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), E.fx.timer(E.extend(l, {
      elem: a,
      anim: u,
      queue: u.opts.queue
    })), u
  }
  E.Animation = E.extend(lt, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return ae(n.elem, e, te.exec(t), n), n
      }]
    },
    tweener: function (e, t) {
      y(e) ? (t = e, e = ["*"]) : e = e.match(O);
      for (var n, i = 0, r = e.length; i < r; i++) n = e[i], lt.tweeners[n] = lt.tweeners[n] || [], lt.tweeners[n].unshift(t)
    },
    prefilters: [function (e, t, n) {
      var i, r, a, s, o, l, u, c, d = "width" in t || "height" in t,
        h = this,
        p = {},
        f = e.style,
        g = e.nodeType && ie(e),
        m = Z.get(e, "fxshow");
      for (i in n.queue || (null == (s = E._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, o = s.empty.fire, s.empty.fire = function () {
          s.unqueued || o()
        }), s.unqueued++, h.always(function () {
          h.always(function () {
            s.unqueued--, E.queue(e, "fx").length || s.empty.fire()
          })
        })), t)
        if (r = t[i], nt.test(r)) {
          if (delete t[i], a = a || "toggle" === r, r === (g ? "hide" : "show")) {
            if ("show" !== r || !m || void 0 === m[i]) continue;
            g = !0
          }
          p[i] = m && m[i] || E.style(e, i)
        }
      if ((l = !E.isEmptyObject(t)) || !E.isEmptyObject(p))
        for (i in d && 1 === e.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], null == (u = m && m.display) && (u = Z.get(e, "display")), "none" === (c = E.css(e, "display")) && (u ? c = u : (oe([e], !0), u = e.style.display || u, c = E.css(e, "display"), oe([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === E.css(e, "float") && (l || (h.done(function () {
            f.display = u
          }), null == u && (c = f.display, u = "none" === c ? "" : c)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", h.always(function () {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
          })), l = !1, p) l || (m ? "hidden" in m && (g = m.hidden) : m = Z.access(e, "fxshow", {
          display: u
        }), a && (m.hidden = !g), g && oe([e], !0), h.done(function () {
          for (i in g || oe([e]), Z.remove(e, "fxshow"), p) E.style(e, i, p[i])
        })), l = ot(g ? m[i] : 0, i, h), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
    }],
    prefilter: function (e, t) {
      t ? lt.prefilters.unshift(e) : lt.prefilters.push(e)
    }
  }), E.speed = function (e, t, n) {
    var i = e && "object" == typeof e ? E.extend({}, e) : {
      complete: n || !n && t || y(e) && e,
      duration: e,
      easing: n && t || t && !y(t) && t
    };
    return E.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in E.fx.speeds ? i.duration = E.fx.speeds[i.duration] : i.duration = E.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
      y(i.old) && i.old.call(this), i.queue && E.dequeue(this, i.queue)
    }, i
  }, E.fn.extend({
    fadeTo: function (e, t, n, i) {
      return this.filter(ie).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, i)
    },
    animate: function (t, e, n, i) {
      var r = E.isEmptyObject(t),
        a = E.speed(e, n, i),
        s = function () {
          var e = lt(this, E.extend({}, t), a);
          (r || Z.get(this, "finish")) && e.stop(!0)
        };
      return s.finish = s, r || !1 === a.queue ? this.each(s) : this.queue(a.queue, s)
    },
    stop: function (r, e, a) {
      var s = function (e) {
        var t = e.stop;
        delete e.stop, t(a)
      };
      return "string" != typeof r && (a = e, e = r, r = void 0), e && !1 !== r && this.queue(r || "fx", []), this.each(function () {
        var e = !0,
          t = null != r && r + "queueHooks",
          n = E.timers,
          i = Z.get(this);
        if (t) i[t] && i[t].stop && s(i[t]);
        else
          for (t in i) i[t] && i[t].stop && it.test(t) && s(i[t]);
        for (t = n.length; t--;) n[t].elem !== this || null != r && n[t].queue !== r || (n[t].anim.stop(a), e = !1, n.splice(t, 1));
        !e && a || E.dequeue(this, r)
      })
    },
    finish: function (s) {
      return !1 !== s && (s = s || "fx"), this.each(function () {
        var e, t = Z.get(this),
          n = t[s + "queue"],
          i = t[s + "queueHooks"],
          r = E.timers,
          a = n ? n.length : 0;
        for (t.finish = !0, E.queue(this, s, []), i && i.stop && i.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === s && (r[e].anim.stop(!0), r.splice(e, 1));
        for (e = 0; e < a; e++) n[e] && n[e].finish && n[e].finish.call(this);
        delete t.finish
      })
    }
  }), E.each(["toggle", "show", "hide"], function (e, i) {
    var r = E.fn[i];
    E.fn[i] = function (e, t, n) {
      return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(st(i, !0), e, t, n)
    }
  }), E.each({
    slideDown: st("show"),
    slideUp: st("hide"),
    slideToggle: st("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, i) {
    E.fn[e] = function (e, t, n) {
      return this.animate(i, e, t, n)
    }
  }), E.timers = [], E.fx.tick = function () {
    var e, t = 0,
      n = E.timers;
    for (Ke = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
    n.length || E.fx.stop(), Ke = void 0
  }, E.fx.timer = function (e) {
    E.timers.push(e), E.fx.start()
  }, E.fx.interval = 13, E.fx.start = function () {
    Je || (Je = !0, rt())
  }, E.fx.stop = function () {
    Je = null
  }, E.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, E.fn.delay = function (i, e) {
    return i = E.fx && E.fx.speeds[i] || i, e = e || "fx", this.queue(e, function (e, t) {
      var n = S.setTimeout(e, i);
      t.stop = function () {
        S.clearTimeout(n)
      }
    })
  }, et = T.createElement("input"), tt = T.createElement("select").appendChild(T.createElement("option")), et.type = "checkbox", v.checkOn = "" !== et.value, v.optSelected = tt.selected, (et = T.createElement("input")).value = "t", et.type = "radio", v.radioValue = "t" === et.value;
  var ut, ct = E.expr.attrHandle;
  E.fn.extend({
    attr: function (e, t) {
      return V(this, E.attr, e, t, 1 < arguments.length)
    },
    removeAttr: function (e) {
      return this.each(function () {
        E.removeAttr(this, e)
      })
    }
  }), E.extend({
    attr: function (e, t, n) {
      var i, r, a = e.nodeType;
      if (3 !== a && 8 !== a && 2 !== a) return void 0 === e.getAttribute ? E.prop(e, t, n) : (1 === a && E.isXMLDoc(e) || (r = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? ut : void 0)), void 0 !== n ? null === n ? void E.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = E.find.attr(e, t)) ? void 0 : i)
    },
    attrHooks: {
      type: {
        set: function (e, t) {
          if (!v.radioValue && "radio" === t && M(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t
          }
        }
      }
    },
    removeAttr: function (e, t) {
      var n, i = 0,
        r = t && t.match(O);
      if (r && 1 === e.nodeType)
        for (; n = r[i++];) e.removeAttribute(n)
    }
  }), ut = {
    set: function (e, t, n) {
      return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n
    }
  }, E.each(E.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var s = ct[t] || E.find.attr;
    ct[t] = function (e, t, n) {
      var i, r, a = t.toLowerCase();
      return n || (r = ct[a], ct[a] = i, i = null != s(e, t, n) ? a : null, ct[a] = r), i
    }
  });
  var dt = /^(?:input|select|textarea|button)$/i,
    ht = /^(?:a|area)$/i;

  function pt(e) {
    return (e.match(O) || []).join(" ")
  }

  function ft(e) {
    return e.getAttribute && e.getAttribute("class") || ""
  }

  function gt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(O) || []
  }
  E.fn.extend({
    prop: function (e, t) {
      return V(this, E.prop, e, t, 1 < arguments.length)
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[E.propFix[e] || e]
      })
    }
  }), E.extend({
    prop: function (e, t, n) {
      var i, r, a = e.nodeType;
      if (3 !== a && 8 !== a && 2 !== a) return 1 === a && E.isXMLDoc(e) || (t = E.propFix[t] || t, r = E.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
    },
    propHooks: {
      tabIndex: {
        get: function (e) {
          var t = E.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : dt.test(e.nodeName) || ht.test(e.nodeName) && e.href ? 0 : -1
        }
      }
    },
    propFix: {
      for: "htmlFor",
      class: "className"
    }
  }), v.optSelected || (E.propHooks.selected = {
    get: function (e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null
    },
    set: function (e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
    }
  }), E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    E.propFix[this.toLowerCase()] = this
  }), E.fn.extend({
    addClass: function (t) {
      var e, n, i, r, a, s, o, l = 0;
      if (y(t)) return this.each(function (e) {
        E(this).addClass(t.call(this, e, ft(this)))
      });
      if ((e = gt(t)).length)
        for (; n = this[l++];)
          if (r = ft(n), i = 1 === n.nodeType && " " + pt(r) + " ") {
            for (s = 0; a = e[s++];) i.indexOf(" " + a + " ") < 0 && (i += a + " ");
            r !== (o = pt(i)) && n.setAttribute("class", o)
          }
      return this
    },
    removeClass: function (t) {
      var e, n, i, r, a, s, o, l = 0;
      if (y(t)) return this.each(function (e) {
        E(this).removeClass(t.call(this, e, ft(this)))
      });
      if (!arguments.length) return this.attr("class", "");
      if ((e = gt(t)).length)
        for (; n = this[l++];)
          if (r = ft(n), i = 1 === n.nodeType && " " + pt(r) + " ") {
            for (s = 0; a = e[s++];)
              for (; - 1 < i.indexOf(" " + a + " ");) i = i.replace(" " + a + " ", " ");
            r !== (o = pt(i)) && n.setAttribute("class", o)
          }
      return this
    },
    toggleClass: function (r, t) {
      var a = typeof r,
        s = "string" === a || Array.isArray(r);
      return "boolean" == typeof t && s ? t ? this.addClass(r) : this.removeClass(r) : y(r) ? this.each(function (e) {
        E(this).toggleClass(r.call(this, e, ft(this), t), t)
      }) : this.each(function () {
        var e, t, n, i;
        if (s)
          for (t = 0, n = E(this), i = gt(r); e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
        else void 0 !== r && "boolean" !== a || ((e = ft(this)) && Z.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === r ? "" : Z.get(this, "__className__") || ""))
      })
    },
    hasClass: function (e) {
      var t, n, i = 0;
      for (t = " " + e + " "; n = this[i++];)
        if (1 === n.nodeType && -1 < (" " + pt(ft(n)) + " ").indexOf(t)) return !0;
      return !1
    }
  });
  var mt = /\r/g;
  E.fn.extend({
    val: function (n) {
      var i, e, r, t = this[0];
      return arguments.length ? (r = y(n), this.each(function (e) {
        var t;
        1 === this.nodeType && (null == (t = r ? n.call(this, e, E(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = E.map(t, function (e) {
          return null == e ? "" : e + ""
        })), (i = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t))
      })) : t ? (i = E.valHooks[t.type] || E.valHooks[t.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(mt, "") : null == e ? "" : e : void 0
    }
  }), E.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = E.find.attr(e, "value");
          return null != t ? t : pt(E.text(e))
        }
      },
      select: {
        get: function (e) {
          var t, n, i, r = e.options,
            a = e.selectedIndex,
            s = "select-one" === e.type,
            o = s ? null : [],
            l = s ? a + 1 : r.length;
          for (i = a < 0 ? l : s ? a : 0; i < l; i++)
            if (((n = r[i]).selected || i === a) && !n.disabled && (!n.parentNode.disabled || !M(n.parentNode, "optgroup"))) {
              if (t = E(n).val(), s) return t;
              o.push(t)
            }
          return o
        },
        set: function (e, t) {
          for (var n, i, r = e.options, a = E.makeArray(t), s = r.length; s--;)((i = r[s]).selected = -1 < E.inArray(E.valHooks.option.get(i), a)) && (n = !0);
          return n || (e.selectedIndex = -1), a
        }
      }
    }
  }), E.each(["radio", "checkbox"], function () {
    E.valHooks[this] = {
      set: function (e, t) {
        if (Array.isArray(t)) return e.checked = -1 < E.inArray(E(e).val(), t)
      }
    }, v.checkOn || (E.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value
    })
  }), v.focusin = "onfocusin" in S;
  var vt = /^(?:focusinfocus|focusoutblur)$/,
    yt = function (e) {
      e.stopPropagation()
    };
  E.extend(E.event, {
    trigger: function (e, t, n, i) {
      var r, a, s, o, l, u, c, d, h = [n || T],
        p = m.call(e, "type") ? e.type : e,
        f = m.call(e, "namespace") ? e.namespace.split(".") : [];
      if (a = d = s = n = n || T, 3 !== n.nodeType && 8 !== n.nodeType && !vt.test(p + E.event.triggered) && (-1 < p.indexOf(".") && (p = (f = p.split(".")).shift(), f.sort()), l = p.indexOf(":") < 0 && "on" + p, (e = e[E.expando] ? e : new E.Event(p, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : E.makeArray(t, [e]), c = E.event.special[p] || {}, i || !c.trigger || !1 !== c.trigger.apply(n, t))) {
        if (!i && !c.noBubble && !b(n)) {
          for (o = c.delegateType || p, vt.test(o + p) || (a = a.parentNode); a; a = a.parentNode) h.push(a), s = a;
          s === (n.ownerDocument || T) && h.push(s.defaultView || s.parentWindow || S)
        }
        for (r = 0;
          (a = h[r++]) && !e.isPropagationStopped();) d = a, e.type = 1 < r ? o : c.bindType || p, (u = (Z.get(a, "events") || {})[e.type] && Z.get(a, "handle")) && u.apply(a, t), (u = l && a[l]) && u.apply && W(a) && (e.result = u.apply(a, t), !1 === e.result && e.preventDefault());
        return e.type = p, i || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(h.pop(), t) || !W(n) || l && y(n[p]) && !b(n) && ((s = n[l]) && (n[l] = null), E.event.triggered = p, e.isPropagationStopped() && d.addEventListener(p, yt), n[p](), e.isPropagationStopped() && d.removeEventListener(p, yt), E.event.triggered = void 0, s && (n[l] = s)), e.result
      }
    },
    simulate: function (e, t, n) {
      var i = E.extend(new E.Event, n, {
        type: e,
        isSimulated: !0
      });
      E.event.trigger(i, null, t)
    }
  }), E.fn.extend({
    trigger: function (e, t) {
      return this.each(function () {
        E.event.trigger(e, t, this)
      })
    },
    triggerHandler: function (e, t) {
      var n = this[0];
      if (n) return E.event.trigger(e, t, n, !0)
    }
  }), v.focusin || E.each({
    focus: "focusin",
    blur: "focusout"
  }, function (n, i) {
    var r = function (e) {
      E.event.simulate(i, e.target, E.event.fix(e))
    };
    E.event.special[i] = {
      setup: function () {
        var e = this.ownerDocument || this,
          t = Z.access(e, i);
        t || e.addEventListener(n, r, !0), Z.access(e, i, (t || 0) + 1)
      },
      teardown: function () {
        var e = this.ownerDocument || this,
          t = Z.access(e, i) - 1;
        t ? Z.access(e, i, t) : (e.removeEventListener(n, r, !0), Z.remove(e, i))
      }
    }
  });
  var bt = S.location,
    xt = Date.now(),
    wt = /\?/;
  E.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;
    try {
      t = (new S.DOMParser).parseFromString(e, "text/xml")
    } catch (e) {
      t = void 0
    }
    return t && !t.getElementsByTagName("parsererror").length || E.error("Invalid XML: " + e), t
  };
  var Ct = /\[\]$/,
    St = /\r?\n/g,
    Tt = /^(?:submit|button|image|reset|file)$/i,
    Et = /^(?:input|select|textarea|keygen)/i;

  function kt(n, e, i, r) {
    var t;
    if (Array.isArray(e)) E.each(e, function (e, t) {
      i || Ct.test(n) ? r(n, t) : kt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, r)
    });
    else if (i || "object" !== w(e)) r(n, e);
    else
      for (t in e) kt(n + "[" + t + "]", e[t], i, r)
  }
  E.param = function (e, t) {
    var n, i = [],
      r = function (e, t) {
        var n = y(t) ? t() : t;
        i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
      };
    if (Array.isArray(e) || e.jquery && !E.isPlainObject(e)) E.each(e, function () {
      r(this.name, this.value)
    });
    else
      for (n in e) kt(n, e[n], t, r);
    return i.join("&")
  }, E.fn.extend({
    serialize: function () {
      return E.param(this.serializeArray())
    },
    serializeArray: function () {
      return this.map(function () {
        var e = E.prop(this, "elements");
        return e ? E.makeArray(e) : this
      }).filter(function () {
        var e = this.type;
        return this.name && !E(this).is(":disabled") && Et.test(this.nodeName) && !Tt.test(e) && (this.checked || !le.test(e))
      }).map(function (e, t) {
        var n = E(this).val();
        return null == n ? null : Array.isArray(n) ? E.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(St, "\r\n")
          }
        }) : {
          name: t.name,
          value: n.replace(St, "\r\n")
        }
      }).get()
    }
  });
  var Mt = /%20/g,
    Pt = /#.*$/,
    At = /([?&])_=[^&]*/,
    Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    zt = /^(?:GET|HEAD)$/,
    Dt = /^\/\//,
    Ft = {},
    Nt = {},
    Ot = "*/".concat("*"),
    _t = T.createElement("a");

  function It(a) {
    return function (e, t) {
      "string" != typeof e && (t = e, e = "*");
      var n, i = 0,
        r = e.toLowerCase().match(O) || [];
      if (y(t))
        for (; n = r[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (a[n] = a[n] || []).unshift(t)) : (a[n] = a[n] || []).push(t)
    }
  }

  function jt(t, r, a, s) {
    var o = {},
      l = t === Nt;

    function u(e) {
      var i;
      return o[e] = !0, E.each(t[e] || [], function (e, t) {
        var n = t(r, a, s);
        return "string" != typeof n || l || o[n] ? l ? !(i = n) : void 0 : (r.dataTypes.unshift(n), u(n), !1)
      }), i
    }
    return u(r.dataTypes[0]) || !o["*"] && u("*")
  }

  function $t(e, t) {
    var n, i, r = E.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
    return i && E.extend(!0, e, i), e
  }
  _t.href = bt.href, E.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: bt.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Ot,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": E.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function (e, t) {
      return t ? $t($t(e, E.ajaxSettings), t) : $t(E.ajaxSettings, e)
    },
    ajaxPrefilter: It(Ft),
    ajaxTransport: It(Nt),
    ajax: function (e, t) {
      "object" == typeof e && (t = e, e = void 0), t = t || {};
      var c, d, h, n, p, i, f, g, r, a, m = E.ajaxSetup({}, t),
        v = m.context || m,
        y = m.context && (v.nodeType || v.jquery) ? E(v) : E.event,
        b = E.Deferred(),
        x = E.Callbacks("once memory"),
        w = m.statusCode || {},
        s = {},
        o = {},
        l = "canceled",
        C = {
          readyState: 0,
          getResponseHeader: function (e) {
            var t;
            if (f) {
              if (!n)
                for (n = {}; t = Lt.exec(h);) n[t[1].toLowerCase()] = t[2];
              t = n[e.toLowerCase()]
            }
            return null == t ? null : t
          },
          getAllResponseHeaders: function () {
            return f ? h : null
          },
          setRequestHeader: function (e, t) {
            return null == f && (e = o[e.toLowerCase()] = o[e.toLowerCase()] || e, s[e] = t), this
          },
          overrideMimeType: function (e) {
            return null == f && (m.mimeType = e), this
          },
          statusCode: function (e) {
            var t;
            if (e)
              if (f) C.always(e[C.status]);
              else
                for (t in e) w[t] = [w[t], e[t]];
            return this
          },
          abort: function (e) {
            var t = e || l;
            return c && c.abort(t), u(0, t), this
          }
        };
      if (b.promise(C), m.url = ((e || m.url || bt.href) + "").replace(Dt, bt.protocol + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = (m.dataType || "*").toLowerCase().match(O) || [""], null == m.crossDomain) {
        i = T.createElement("a");
        try {
          i.href = m.url, i.href = i.href, m.crossDomain = _t.protocol + "//" + _t.host != i.protocol + "//" + i.host
        } catch (e) {
          m.crossDomain = !0
        }
      }
      if (m.data && m.processData && "string" != typeof m.data && (m.data = E.param(m.data, m.traditional)), jt(Ft, m, t, C), f) return C;
      for (r in (g = E.event && m.global) && 0 == E.active++ && E.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !zt.test(m.type), d = m.url.replace(Pt, ""), m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(Mt, "+")) : (a = m.url.slice(d.length), m.data && (m.processData || "string" == typeof m.data) && (d += (wt.test(d) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (d = d.replace(At, "$1"), a = (wt.test(d) ? "&" : "?") + "_=" + xt++ + a), m.url = d + a), m.ifModified && (E.lastModified[d] && C.setRequestHeader("If-Modified-Since", E.lastModified[d]), E.etag[d] && C.setRequestHeader("If-None-Match", E.etag[d])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && C.setRequestHeader("Content-Type", m.contentType), C.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Ot + "; q=0.01" : "") : m.accepts["*"]), m.headers) C.setRequestHeader(r, m.headers[r]);
      if (m.beforeSend && (!1 === m.beforeSend.call(v, C, m) || f)) return C.abort();
      if (l = "abort", x.add(m.complete), C.done(m.success), C.fail(m.error), c = jt(Nt, m, t, C)) {
        if (C.readyState = 1, g && y.trigger("ajaxSend", [C, m]), f) return C;
        m.async && 0 < m.timeout && (p = S.setTimeout(function () {
          C.abort("timeout")
        }, m.timeout));
        try {
          f = !1, c.send(s, u)
        } catch (e) {
          if (f) throw e;
          u(-1, e)
        }
      } else u(-1, "No Transport");

      function u(e, t, n, i) {
        var r, a, s, o, l, u = t;
        f || (f = !0, p && S.clearTimeout(p), c = void 0, h = i || "", C.readyState = 0 < e ? 4 : 0, r = 200 <= e && e < 300 || 304 === e, n && (o = function (e, t, n) {
          for (var i, r, a, s, o = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
          if (i)
            for (r in o)
              if (o[r] && o[r].test(i)) {
                l.unshift(r);
                break
              }
          if (l[0] in n) a = l[0];
          else {
            for (r in n) {
              if (!l[0] || e.converters[r + " " + l[0]]) {
                a = r;
                break
              }
              s || (s = r)
            }
            a = a || s
          }
          if (a) return a !== l[0] && l.unshift(a), n[a]
        }(m, C, n)), o = function (e, t, n, i) {
          var r, a, s, o, l, u = {},
            c = e.dataTypes.slice();
          if (c[1])
            for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
          for (a = c.shift(); a;)
            if (e.responseFields[a] && (n[e.responseFields[a]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = c.shift())
              if ("*" === a) a = l;
              else if ("*" !== l && l !== a) {
            if (!(s = u[l + " " + a] || u["* " + a]))
              for (r in u)
                if ((o = r.split(" "))[1] === a && (s = u[l + " " + o[0]] || u["* " + o[0]])) {
                  !0 === s ? s = u[r] : !0 !== u[r] && (a = o[0], c.unshift(o[1]));
                  break
                }
            if (!0 !== s)
              if (s && e.throws) t = s(t);
              else try {
                t = s(t)
              } catch (e) {
                return {
                  state: "parsererror",
                  error: s ? e : "No conversion from " + l + " to " + a
                }
              }
          }
          return {
            state: "success",
            data: t
          }
        }(m, o, C, r), r ? (m.ifModified && ((l = C.getResponseHeader("Last-Modified")) && (E.lastModified[d] = l), (l = C.getResponseHeader("etag")) && (E.etag[d] = l)), 204 === e || "HEAD" === m.type ? u = "nocontent" : 304 === e ? u = "notmodified" : (u = o.state, a = o.data, r = !(s = o.error))) : (s = u, !e && u || (u = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (t || u) + "", r ? b.resolveWith(v, [a, u, C]) : b.rejectWith(v, [C, u, s]), C.statusCode(w), w = void 0, g && y.trigger(r ? "ajaxSuccess" : "ajaxError", [C, m, r ? a : s]), x.fireWith(v, [C, u]), g && (y.trigger("ajaxComplete", [C, m]), --E.active || E.event.trigger("ajaxStop")))
      }
      return C
    },
    getJSON: function (e, t, n) {
      return E.get(e, t, n, "json")
    },
    getScript: function (e, t) {
      return E.get(e, void 0, t, "script")
    }
  }), E.each(["get", "post"], function (e, r) {
    E[r] = function (e, t, n, i) {
      return y(t) && (i = i || n, n = t, t = void 0), E.ajax(E.extend({
        url: e,
        type: r,
        dataType: i,
        data: t,
        success: n
      }, E.isPlainObject(e) && e))
    }
  }), E._evalUrl = function (e) {
    return E.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      throws: !0
    })
  }, E.fn.extend({
    wrapAll: function (e) {
      var t;
      return this[0] && (y(e) && (e = e.call(this[0])), t = E(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
        return e
      }).append(this)), this
    },
    wrapInner: function (n) {
      return y(n) ? this.each(function (e) {
        E(this).wrapInner(n.call(this, e))
      }) : this.each(function () {
        var e = E(this),
          t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n)
      })
    },
    wrap: function (t) {
      var n = y(t);
      return this.each(function (e) {
        E(this).wrapAll(n ? t.call(this, e) : t)
      })
    },
    unwrap: function (e) {
      return this.parent(e).not("body").each(function () {
        E(this).replaceWith(this.childNodes)
      }), this
    }
  }), E.expr.pseudos.hidden = function (e) {
    return !E.expr.pseudos.visible(e)
  }, E.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
  }, E.ajaxSettings.xhr = function () {
    try {
      return new S.XMLHttpRequest
    } catch (e) {}
  };
  var Ht = {
      0: 200,
      1223: 204
    },
    qt = E.ajaxSettings.xhr();
  v.cors = !!qt && "withCredentials" in qt, v.ajax = qt = !!qt, E.ajaxTransport(function (r) {
    var a, s;
    if (v.cors || qt && !r.crossDomain) return {
      send: function (e, t) {
        var n, i = r.xhr();
        if (i.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
          for (n in r.xhrFields) i[n] = r.xhrFields[n];
        for (n in r.mimeType && i.overrideMimeType && i.overrideMimeType(r.mimeType), r.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) i.setRequestHeader(n, e[n]);
        a = function (e) {
          return function () {
            a && (a = s = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null, "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(Ht[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
              binary: i.response
            } : {
              text: i.responseText
            }, i.getAllResponseHeaders()))
          }
        }, i.onload = a(), s = i.onerror = i.ontimeout = a("error"), void 0 !== i.onabort ? i.onabort = s : i.onreadystatechange = function () {
          4 === i.readyState && S.setTimeout(function () {
            a && s()
          })
        }, a = a("abort");
        try {
          i.send(r.hasContent && r.data || null)
        } catch (e) {
          if (a) throw e
        }
      },
      abort: function () {
        a && a()
      }
    }
  }), E.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1)
  }), E.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function (e) {
        return E.globalEval(e), e
      }
    }
  }), E.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
  }), E.ajaxTransport("script", function (n) {
    var i, r;
    if (n.crossDomain) return {
      send: function (e, t) {
        i = E("<script>").prop({
          charset: n.scriptCharset,
          src: n.url
        }).on("load error", r = function (e) {
          i.remove(), r = null, e && t("error" === e.type ? 404 : 200, e.type)
        }), T.head.appendChild(i[0])
      },
      abort: function () {
        r && r()
      }
    }
  });
  var Vt, Bt = [],
    Rt = /(=)\?(?=&|$)|\?\?/;
  E.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Bt.pop() || E.expando + "_" + xt++;
      return this[e] = !0, e
    }
  }), E.ajaxPrefilter("json jsonp", function (e, t, n) {
    var i, r, a, s = !1 !== e.jsonp && (Rt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Rt.test(e.data) && "data");
    if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Rt, "$1" + i) : !1 !== e.jsonp && (e.url += (wt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
      return a || E.error(i + " was not called"), a[0]
    }, e.dataTypes[0] = "json", r = S[i], S[i] = function () {
      a = arguments
    }, n.always(function () {
      void 0 === r ? E(S).removeProp(i) : S[i] = r, e[i] && (e.jsonpCallback = t.jsonpCallback, Bt.push(i)), a && y(r) && r(a[0]), a = r = void 0
    }), "script"
  }), v.createHTMLDocument = ((Vt = T.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Vt.childNodes.length), E.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((i = (t = T.implementation.createHTMLDocument("")).createElement("base")).href = T.location.href, t.head.appendChild(i)) : t = T), a = !n && [], (r = P.exec(e)) ? [t.createElement(r[1])] : (r = ve([e], t, a), a && a.length && E(a).remove(), E.merge([], r.childNodes)));
    var i, r, a
  }, E.fn.load = function (e, t, n) {
    var i, r, a, s = this,
      o = e.indexOf(" ");
    return -1 < o && (i = pt(e.slice(o)), e = e.slice(0, o)), y(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), 0 < s.length && E.ajax({
      url: e,
      type: r || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      a = arguments, s.html(i ? E("<div>").append(E.parseHTML(e)).find(i) : e)
    }).always(n && function (e, t) {
      s.each(function () {
        n.apply(this, a || [e.responseText, t, e])
      })
    }), this
  }, E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    E.fn[t] = function (e) {
      return this.on(t, e)
    }
  }), E.expr.pseudos.animated = function (t) {
    return E.grep(E.timers, function (e) {
      return t === e.elem
    }).length
  }, E.offset = {
    setOffset: function (e, t, n) {
      var i, r, a, s, o, l, u = E.css(e, "position"),
        c = E(e),
        d = {};
      "static" === u && (e.style.position = "relative"), o = c.offset(), a = E.css(e, "top"), l = E.css(e, "left"), ("absolute" === u || "fixed" === u) && -1 < (a + l).indexOf("auto") ? (s = (i = c.position()).top, r = i.left) : (s = parseFloat(a) || 0, r = parseFloat(l) || 0), y(t) && (t = t.call(e, n, E.extend({}, o))), null != t.top && (d.top = t.top - o.top + s), null != t.left && (d.left = t.left - o.left + r), "using" in t ? t.using.call(e, d) : c.css(d)
    }
  }, E.fn.extend({
    offset: function (t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        E.offset.setOffset(this, t, e)
      });
      var e, n, i = this[0];
      return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
        top: e.top + n.pageYOffset,
        left: e.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      } : void 0
    },
    position: function () {
      if (this[0]) {
        var e, t, n, i = this[0],
          r = {
            top: 0,
            left: 0
          };
        if ("fixed" === E.css(i, "position")) t = i.getBoundingClientRect();
        else {
          for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === E.css(e, "position");) e = e.parentNode;
          e && e !== i && 1 === e.nodeType && ((r = E(e).offset()).top += E.css(e, "borderTopWidth", !0), r.left += E.css(e, "borderLeftWidth", !0))
        }
        return {
          top: t.top - r.top - E.css(i, "marginTop", !0),
          left: t.left - r.left - E.css(i, "marginLeft", !0)
        }
      }
    },
    offsetParent: function () {
      return this.map(function () {
        for (var e = this.offsetParent; e && "static" === E.css(e, "position");) e = e.offsetParent;
        return e || ye
      })
    }
  }), E.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (t, r) {
    var a = "pageYOffset" === r;
    E.fn[t] = function (e) {
      return V(this, function (e, t, n) {
        var i;
        if (b(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === n) return i ? i[r] : e[t];
        i ? i.scrollTo(a ? i.pageXOffset : n, a ? n : i.pageYOffset) : e[t] = n
      }, t, e, arguments.length)
    }
  }), E.each(["top", "left"], function (e, n) {
    E.cssHooks[n] = He(v.pixelPosition, function (e, t) {
      if (t) return t = $e(e, n), _e.test(t) ? E(e).position()[n] + "px" : t
    })
  }), E.each({
    Height: "height",
    Width: "width"
  }, function (s, o) {
    E.each({
      padding: "inner" + s,
      content: o,
      "": "outer" + s
    }, function (i, a) {
      E.fn[a] = function (e, t) {
        var n = arguments.length && (i || "boolean" != typeof e),
          r = i || (!0 === e || !0 === t ? "margin" : "border");
        return V(this, function (e, t, n) {
          var i;
          return b(e) ? 0 === a.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + s], i["scroll" + s], e.body["offset" + s], i["offset" + s], i["client" + s])) : void 0 === n ? E.css(e, t, r) : E.style(e, t, n, r)
        }, o, n ? e : void 0, n)
      }
    })
  }), E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
    E.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
    }
  }), E.fn.extend({
    hover: function (e, t) {
      return this.mouseenter(e).mouseleave(t || e)
    }
  }), E.fn.extend({
    bind: function (e, t, n) {
      return this.on(e, null, t, n)
    },
    unbind: function (e, t) {
      return this.off(e, null, t)
    },
    delegate: function (e, t, n, i) {
      return this.on(t, e, n, i)
    },
    undelegate: function (e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
    }
  }), E.proxy = function (e, t) {
    var n, i, r;
    if ("string" == typeof t && (n = e[t], t = e, e = n), y(e)) return i = o.call(arguments, 2), (r = function () {
      return e.apply(t || this, i.concat(o.call(arguments)))
    }).guid = e.guid = e.guid || E.guid++, r
  }, E.holdReady = function (e) {
    e ? E.readyWait++ : E.ready(!0)
  }, E.isArray = Array.isArray, E.parseJSON = JSON.parse, E.nodeName = M, E.isFunction = y, E.isWindow = b, E.camelCase = X, E.type = w, E.now = Date.now, E.isNumeric = function (e) {
    var t = E.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return E
  });
  var Gt = S.jQuery,
    Xt = S.$;
  return E.noConflict = function (e) {
    return S.$ === E && (S.$ = Xt), e && S.jQuery === E && (S.jQuery = Gt), E
  }, e || (S.jQuery = S.$ = E), E
}), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (e, t, n, i, r) {
      return jQuery.easing[jQuery.easing.def](e, t, n, i, r)
    },
    easeInQuad: function (e, t, n, i, r) {
      return i * (t /= r) * t + n
    },
    easeOutQuad: function (e, t, n, i, r) {
      return -i * (t /= r) * (t - 2) + n
    },
    easeInOutQuad: function (e, t, n, i, r) {
      return (t /= r / 2) < 1 ? i / 2 * t * t + n : -i / 2 * (--t * (t - 2) - 1) + n
    },
    easeInCubic: function (e, t, n, i, r) {
      return i * (t /= r) * t * t + n
    },
    easeOutCubic: function (e, t, n, i, r) {
      return i * ((t = t / r - 1) * t * t + 1) + n
    },
    easeInOutCubic: function (e, t, n, i, r) {
      return (t /= r / 2) < 1 ? i / 2 * t * t * t + n : i / 2 * ((t -= 2) * t * t + 2) + n
    },
    easeInQuart: function (e, t, n, i, r) {
      return i * (t /= r) * t * t * t + n
    },
    easeOutQuart: function (e, t, n, i, r) {
      return -i * ((t = t / r - 1) * t * t * t - 1) + n
    },
    easeInOutQuart: function (e, t, n, i, r) {
      return (t /= r / 2) < 1 ? i / 2 * t * t * t * t + n : -i / 2 * ((t -= 2) * t * t * t - 2) + n
    },
    easeInQuint: function (e, t, n, i, r) {
      return i * (t /= r) * t * t * t * t + n
    },
    easeOutQuint: function (e, t, n, i, r) {
      return i * ((t = t / r - 1) * t * t * t * t + 1) + n
    },
    easeInOutQuint: function (e, t, n, i, r) {
      return (t /= r / 2) < 1 ? i / 2 * t * t * t * t * t + n : i / 2 * ((t -= 2) * t * t * t * t + 2) + n
    },
    easeInSine: function (e, t, n, i, r) {
      return -i * Math.cos(t / r * (Math.PI / 2)) + i + n
    },
    easeOutSine: function (e, t, n, i, r) {
      return i * Math.sin(t / r * (Math.PI / 2)) + n
    },
    easeInOutSine: function (e, t, n, i, r) {
      return -i / 2 * (Math.cos(Math.PI * t / r) - 1) + n
    },
    easeInExpo: function (e, t, n, i, r) {
      return 0 == t ? n : i * Math.pow(2, 10 * (t / r - 1)) + n
    },
    easeOutExpo: function (e, t, n, i, r) {
      return t == r ? n + i : i * (1 - Math.pow(2, -10 * t / r)) + n
    },
    easeInOutExpo: function (e, t, n, i, r) {
      return 0 == t ? n : t == r ? n + i : (t /= r / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + n : i / 2 * (2 - Math.pow(2, -10 * --t)) + n
    },
    easeInCirc: function (e, t, n, i, r) {
      return -i * (Math.sqrt(1 - (t /= r) * t) - 1) + n
    },
    easeOutCirc: function (e, t, n, i, r) {
      return i * Math.sqrt(1 - (t = t / r - 1) * t) + n
    },
    easeInOutCirc: function (e, t, n, i, r) {
      return (t /= r / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + n : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
    },
    easeInElastic: function (e, t, n, i, r) {
      var a = 1.70158,
        s = 0,
        o = i;
      if (0 == t) return n;
      if (1 == (t /= r)) return n + i;
      if (s || (s = .3 * r), o < Math.abs(i)) {
        o = i;
        a = s / 4
      } else a = s / (2 * Math.PI) * Math.asin(i / o);
      return -o * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * r - a) * Math.PI / s) + n
    },
    easeOutElastic: function (e, t, n, i, r) {
      var a = 1.70158,
        s = 0,
        o = i;
      if (0 == t) return n;
      if (1 == (t /= r)) return n + i;
      if (s || (s = .3 * r), o < Math.abs(i)) {
        o = i;
        a = s / 4
      } else a = s / (2 * Math.PI) * Math.asin(i / o);
      return o * Math.pow(2, -10 * t) * Math.sin(2 * (t * r - a) * Math.PI / s) + i + n
    },
    easeInOutElastic: function (e, t, n, i, r) {
      var a = 1.70158,
        s = 0,
        o = i;
      if (0 == t) return n;
      if (2 == (t /= r / 2)) return n + i;
      if (s || (s = .3 * r * 1.5), o < Math.abs(i)) {
        o = i;
        a = s / 4
      } else a = s / (2 * Math.PI) * Math.asin(i / o);
      return t < 1 ? -.5 * o * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * r - a) * Math.PI / s) + n : o * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t * r - a) * Math.PI / s) * .5 + i + n
    },
    easeInBack: function (e, t, n, i, r, a) {
      return null == a && (a = 1.70158), i * (t /= r) * t * ((a + 1) * t - a) + n
    },
    easeOutBack: function (e, t, n, i, r, a) {
      return null == a && (a = 1.70158), i * ((t = t / r - 1) * t * ((a + 1) * t + a) + 1) + n
    },
    easeInOutBack: function (e, t, n, i, r, a) {
      return null == a && (a = 1.70158), (t /= r / 2) < 1 ? i / 2 * t * t * ((1 + (a *= 1.525)) * t - a) + n : i / 2 * ((t -= 2) * t * ((1 + (a *= 1.525)) * t + a) + 2) + n
    },
    easeInBounce: function (e, t, n, i, r) {
      return i - jQuery.easing.easeOutBounce(e, r - t, 0, i, r) + n
    },
    easeOutBounce: function (e, t, n, i, r) {
      return (t /= r) < 1 / 2.75 ? 7.5625 * i * t * t + n : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
    },
    easeInOutBounce: function (e, t, n, i, r) {
      return t < r / 2 ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, i, r) + n : .5 * jQuery.easing.easeOutBounce(e, 2 * t - r, 0, i, r) + .5 * i + n
    }
  }),
  function (s) {
    s.ex = s.ex || {}, s.ex.resize = function (e, t, n) {
      s.isFunction(n) && (n = {
        callback: n
      });
      var i = this.config = s.extend({}, s.ex.resize.defaults, n);
      i.targets = t, i.target = i.watchTarget = i.targets.eq(e), i.index = e, i.oldBrowser = void 0 === window.addEventListener && void 0 === document.querySelectorAll, i.key = {
        height: "",
        width: ""
      }, i.contentsWatch && this._createContentsWrapper(), i.currentSize = i.newSize = this.getSize(), i.resizeWatch && this._resizeWatch()
    }, s.extend(s.ex.resize.prototype, {
      _createContentsWrapper: function () {
        var e = this.config,
          t = e.oldBrowser ? "zoom:1;display:inline" : "display:inline-block";
        return e.watchTarget = e.target.wrapInner('<div style="' + t + ";width:" + e.target.css("width") + '"/>').children(), this
      },
      _resizeWatch: function () {
        var e = this,
          t = e.config;
        setTimeout(function () {
          t.contentsWatch && (0 < t.watchTarget.prev().size() || 0 < t.watchTarget.next().size() || t.watchTarget.parent().get(0) != t.target.get(0)) && (t.watchTarget.replaceWith(t.watchTarget.get(0).childNodes), e._createContentsWrapper()), e._isResize() && (t.currentSize = t.newSize, t.callback.call(t.watchTarget.get(0), e)), e._resizeWatch()
        }, t.resizeWatch)
      },
      _isResize: function () {
        var e = this.config,
          t = !1;
        for (var n in e.newSize = this.getSize(), e.key) t = t || e.newSize[n] != e.currentSize[n];
        return t
      },
      getTargets: function () {
        return this.config.targets
      },
      getTarget: function () {
        return this.config.target
      },
      getSize: function () {
        var e = this.config;
        e.contentsWatch && e.watchTarget.css("width", "auto");
        var t = {};
        for (var n in e.key) t[n] = e.watchTarget[n]();
        return e.contentsWatch && e.watchTarget.css("width", e.target.css("width")), t
      }
    }), s.ex.resize.defaults = {
      contentsWatch: !1,
      resizeWatch: 100,
      callback: function () {}
    }, s.fn.exResize = function (i) {
      var r = this,
        a = [];
      return r.each(function (e) {
        var t = r.eq(e),
          n = t.data("ex-resize") || new s.ex.resize(e, r, i);
        a.push(n), t.data("ex-resize", n)
      }), i && i.api ? function (r) {
        var e = (r = s(r))[0];
        for (var t in e) ! function (i) {
          s.isFunction(e[i]) && (r[i] = /^get[^a-z]/.test(i) ? function () {
            return e[i].apply(e, arguments)
          } : function () {
            var n = arguments;
            return r.each(function (e) {
              var t = r[e];
              t[i].apply(t, n)
            }), r
          })
        }(t);
        return r
      }(a) : r
    }
  }(jQuery),
  function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
  }(function (l) {
    var i = -1,
      r = -1,
      u = function (e) {
        return parseFloat(e) || 0
      },
      c = function (e) {
        var t = l(e),
          i = null,
          r = [];
        return t.each(function () {
          var e = l(this),
            t = e.offset().top - u(e.css("margin-top")),
            n = 0 < r.length ? r[r.length - 1] : null;
          null === n ? r.push(e) : Math.floor(Math.abs(i - t)) <= 1 ? r[r.length - 1] = n.add(e) : r.push(e), i = t
        }), r
      },
      d = function (e) {
        var t = {
          byRow: !0,
          property: "height",
          target: null,
          remove: !1
        };
        return "object" == typeof e ? l.extend(t, e) : ("boolean" == typeof e ? t.byRow = e : "remove" === e && (t.remove = !0), t)
      },
      h = l.fn.matchHeight = function (e) {
        var t = d(e);
        if (t.remove) {
          var n = this;
          return this.css(t.property, ""), l.each(h._groups, function (e, t) {
            t.elements = t.elements.not(n)
          }), this
        }
        return this.length <= 1 && !t.target || (h._groups.push({
          elements: this,
          options: t
        }), h._apply(this, t)), this
      };
    h.version = "0.7.2", h._groups = [], h._throttle = 80, h._maintainScroll = !1, h._beforeUpdate = null, h._afterUpdate = null, h._rows = c, h._parse = u, h._parseOptions = d, h._apply = function (e, t) {
      var a = d(t),
        n = l(e),
        i = [n],
        r = l(window).scrollTop(),
        s = l("html").outerHeight(!0),
        o = n.parents().filter(":hidden");
      return o.each(function () {
        var e = l(this);
        e.data("style-cache", e.attr("style"))
      }), o.css("display", "block"), a.byRow && !a.target && (n.each(function () {
        var e = l(this),
          t = e.css("display");
        "inline-block" !== t && "flex" !== t && "inline-flex" !== t && (t = "block"), e.data("style-cache", e.attr("style")), e.css({
          display: t,
          "padding-top": "0",
          "padding-bottom": "0",
          "margin-top": "0",
          "margin-bottom": "0",
          "border-top-width": "0",
          "border-bottom-width": "0",
          height: "100px",
          overflow: "hidden"
        })
      }), i = c(n), n.each(function () {
        var e = l(this);
        e.attr("style", e.data("style-cache") || "")
      })), l.each(i, function (e, t) {
        var n = l(t),
          r = 0;
        if (a.target) r = a.target.outerHeight(!1);
        else {
          if (a.byRow && n.length <= 1) return void n.css(a.property, "");
          n.each(function () {
            var e = l(this),
              t = e.attr("style"),
              n = e.css("display");
            "inline-block" !== n && "flex" !== n && "inline-flex" !== n && (n = "block");
            var i = {
              display: n
            };
            i[a.property] = "", e.css(i), e.outerHeight(!1) > r && (r = e.outerHeight(!1)), t ? e.attr("style", t) : e.css("display", "")
          })
        }
        n.each(function () {
          var e = l(this),
            t = 0;
          a.target && e.is(a.target) || ("border-box" !== e.css("box-sizing") && (t += u(e.css("border-top-width")) + u(e.css("border-bottom-width")), t += u(e.css("padding-top")) + u(e.css("padding-bottom"))), e.css(a.property, r - t + "px"))
        })
      }), o.each(function () {
        var e = l(this);
        e.attr("style", e.data("style-cache") || null)
      }), h._maintainScroll && l(window).scrollTop(r / s * l("html").outerHeight(!0)), this
    }, h._applyDataApi = function () {
      var n = {};
      l("[data-match-height], [data-mh]").each(function () {
        var e = l(this),
          t = e.attr("data-mh") || e.attr("data-match-height");
        n[t] = t in n ? n[t].add(e) : e
      }), l.each(n, function () {
        this.matchHeight(!0)
      })
    };
    var a = function (e) {
      h._beforeUpdate && h._beforeUpdate(e, h._groups), l.each(h._groups, function () {
        h._apply(this.elements, this.options)
      }), h._afterUpdate && h._afterUpdate(e, h._groups)
    };
    h._update = function (e, t) {
      if (t && "resize" === t.type) {
        var n = l(window).width();
        if (n === i) return;
        i = n
      }
      e ? -1 === r && (r = setTimeout(function () {
        a(t), r = -1
      }, h._throttle)) : a(t)
    }, l(h._applyDataApi);
    var e = l.fn.on ? "on" : "bind";
    l(window)[e]("load", function (e) {
      h._update(!1, e)
    }), l(window)[e]("resize orientationchange", function (e) {
      h._update(!0, e)
    })
  }),
  function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
  }(function (h) {
    function t(e) {
      var t = e || window.event,
        n = v.call(arguments, 1),
        i = 0,
        r = 0,
        a = 0,
        s = 0,
        o = 0,
        l = 0;
      if ((e = h.event.fix(t)).type = "mousewheel", "detail" in t && (a = -1 * t.detail), "wheelDelta" in t && (a = t.wheelDelta), "wheelDeltaY" in t && (a = t.wheelDeltaY), "wheelDeltaX" in t && (r = -1 * t.wheelDeltaX), "axis" in t && t.axis === t.HORIZONTAL_AXIS && (r = -1 * a, a = 0), i = 0 === a ? r : a, "deltaY" in t && (i = a = -1 * t.deltaY), "deltaX" in t && (r = t.deltaX, 0 === a && (i = -1 * r)), 0 !== a || 0 !== r) {
        if (1 === t.deltaMode) {
          var u = h.data(this, "mousewheel-line-height");
          i *= u, a *= u, r *= u
        } else if (2 === t.deltaMode) {
          var c = h.data(this, "mousewheel-page-height");
          i *= c, a *= c, r *= c
        }
        if (s = Math.max(Math.abs(a), Math.abs(r)), (!m || s < m) && (f(t, m = s) && (m /= 40)), f(t, s) && (i /= 40, r /= 40, a /= 40), i = Math[1 <= i ? "floor" : "ceil"](i / m), r = Math[1 <= r ? "floor" : "ceil"](r / m), a = Math[1 <= a ? "floor" : "ceil"](a / m), y.settings.normalizeOffset && this.getBoundingClientRect) {
          var d = this.getBoundingClientRect();
          o = e.clientX - d.left, l = e.clientY - d.top
        }
        return e.deltaX = r, e.deltaY = a, e.deltaFactor = m, e.offsetX = o, e.offsetY = l, e.deltaMode = 0, n.unshift(e, i, r, a), g && clearTimeout(g), g = setTimeout(p, 200), (h.event.dispatch || h.event.handle).apply(this, n)
      }
    }

    function p() {
      m = null
    }

    function f(e, t) {
      return y.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0
    }
    var g, m, e = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
      n = "onwheel" in document || 9 <= document.documentMode ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
      v = Array.prototype.slice;
    if (h.event.fixHooks)
      for (var i = e.length; i;) h.event.fixHooks[e[--i]] = h.event.mouseHooks;
    var y = h.event.special.mousewheel = {
      version: "3.1.12",
      setup: function () {
        if (this.addEventListener)
          for (var e = n.length; e;) this.addEventListener(n[--e], t, !1);
        else this.onmousewheel = t;
        h.data(this, "mousewheel-line-height", y.getLineHeight(this)), h.data(this, "mousewheel-page-height", y.getPageHeight(this))
      },
      teardown: function () {
        if (this.removeEventListener)
          for (var e = n.length; e;) this.removeEventListener(n[--e], t, !1);
        else this.onmousewheel = null;
        h.removeData(this, "mousewheel-line-height"), h.removeData(this, "mousewheel-page-height")
      },
      getLineHeight: function (e) {
        var t = h(e),
          n = t["offsetParent" in h.fn ? "offsetParent" : "parent"]();
        return n.length || (n = h("body")), parseInt(n.css("fontSize"), 10) || parseInt(t.css("fontSize"), 10) || 16
      },
      getPageHeight: function (e) {
        return h(e).height()
      },
      settings: {
        adjustOldDeltas: !0,
        normalizeOffset: !0
      }
    };
    h.fn.extend({
      mousewheel: function (e) {
        return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
      },
      unmousewheel: function (e) {
        return this.unbind("mousewheel", e)
      }
    })
  }),
  function (u, a, s, e) {
    "use strict";
    var t = {
      speed: 500,
      activeClass: "active",
      menuTop: 0,
      onItemSelected: null,
      stickyClass: "sticky",
      menuItemSelector: "a",
      stickyBarSelector: null,
      stickyBarHeight: null
    };

    function r(e, t, n) {
      this.hash = e, this.top = t, this.bottom = n
    }

    function c(e, t, n, i) {
      this.$item = e, this.section = new r(t, n, i)
    }

    function n(e, t) {
      this.$menu = e, this.$stickyBar = t.stickyBarSelector && u(t.stickyBarSelector) || e, this.menuOffsetTop = e.offset().top, this.stickyBarHeight = t.stickyBarHeight || this.$stickyBar.height(), this.options = t, this.menuItems = [], this.getMenuItems(), this.bindEvent()
    }
    "function" != typeof Array.prototype.indexOf && (Array.prototype.indexOf = function (e, t) {
      var n = -1;
      t = 1 * t || 0;
      for (var i = 0, r = this.length; i < r; i++)
        if (t <= i && this[i] === e) {
          n = i;
          break
        }
      return n
    }), c.prototype.scrollToSection = function (e, t) {
      t && t.call(this.$item), u("html,body").stop().animate({
        scrollTop: this.section.top
      }, e)
    }, c.prototype.setMenuItem = function (e) {
      this.$item.addClass(e).siblings().removeClass(e)
    }, n.prototype = {
      constructor: n,
      getMenuItems: function () {
        var o = this.menuItems,
          e = this.$menu.find(this.options.menuItemSelector + ":not(.exceptLink)"),
          l = this.stickyBarHeight;
        e.each(function (e, t) {
          var n = u(this),
            i = (n.hasAttr("href") ? n : n.find("[href]").eq(0)).attr("href");
          if (!(i.indexOf("#") < 0)) {
            var r = i.substr(1),
              a = u("." + r);
            if (a.length) {
              var s = a.offset().top;
              o.push(new c(n, r, s - l, s + a.outerHeight()))
            }
          }
        })
      },
      setStickyMenu: function () {
        var t = u(a),
          e = (u(s.body), this.$menu),
          n = (this.$stickyBar, this.options),
          i = t.scrollTop(),
          r = (this.stickyBarHeight, this.menuOffsetTop, this.menuItems);
        n.menuTop, e.css("position"), e.css("left"), e.css("top");
        ! function () {
          for (var e = 0; e < r.length; e++)
            if (r[e].section.top <= i && r[e].section.bottom >= i) {
              r[e + 1] && r[e + 1].section.top <= i ? r[e + 1].setMenuItem(n.activeClass) : r[e].setMenuItem(n.activeClass);
              break
            }
          0 == i && r[0].setMenuItem(n.activeClass), i >= u(s).height() - t.height() && r[r.length - 1].setMenuItem(n.activeClass)
        }()
      },
      bindEvent: function () {
        var e = u(a),
          t = this.menuItems,
          n = this.options;
        this.$menu.on("click", n.menuItemSelector + ":not(.exceptLink)", function () {
          var e = u(this).index();
          t[e] && t[e].scrollToSection(n.speed, n.onItemSelected)
        });
        var i = this;
        e.on({
          scroll: function () {
            i.setStickyMenu()
          }
        }), 0 < e.scrollTop() && i.setStickyMenu()
      }
    }, u.fn.hasAttr = function (e) {
      return void 0 !== u(this).attr(e)
    }, u.fn.stickymenu = function (e) {
      return e = u.extend(t, e || {}), new n(u(this), e)
    }
  }($, window, document),
  function (e) {
    var p, f, h = "hasOwnProperty",
      g = /[\.\/]/,
      m = /\s*,\s*/,
      v = function (e, t) {
        return e - t
      },
      y = {
        n: {}
      },
      b = function () {
        for (var e = 0, t = this.length; e < t; e++)
          if (void 0 !== this[e]) return this[e]
      },
      x = function () {
        for (var e = this.length; --e;)
          if (void 0 !== this[e]) return this[e]
      },
      w = function (e, t) {
        e = String(e);
        var n, i = f,
          r = Array.prototype.slice.call(arguments, 2),
          a = w.listeners(e),
          s = 0,
          o = [],
          l = {},
          u = [],
          c = p;
        u.firstDefined = b, u.lastDefined = x, p = e;
        for (var d = f = 0, h = a.length; d < h; d++) "zIndex" in a[d] && (o.push(a[d].zIndex), a[d].zIndex < 0 && (l[a[d].zIndex] = a[d]));
        for (o.sort(v); o[s] < 0;)
          if (n = l[o[s++]], u.push(n.apply(t, r)), f) return f = i, u;
        for (d = 0; d < h; d++)
          if ("zIndex" in (n = a[d]))
            if (n.zIndex == o[s]) {
              if (u.push(n.apply(t, r)), f) break;
              do {
                if ((n = l[o[++s]]) && u.push(n.apply(t, r)), f) break
              } while (n)
            } else l[n.zIndex] = n;
        else if (u.push(n.apply(t, r)), f) break;
        return f = i, p = c, u
      };
    w._events = y, w.listeners = function (e) {
      var t, n, i, r, a, s, o, l, u = e.split(g),
        c = y,
        d = [c],
        h = [];
      for (r = 0, a = u.length; r < a; r++) {
        for (l = [], s = 0, o = d.length; s < o; s++)
          for (n = [(c = d[s].n)[u[r]], c["*"]], i = 2; i--;)(t = n[i]) && (l.push(t), h = h.concat(t.f || []));
        d = l
      }
      return h
    }, w.on = function (e, s) {
      if (e = String(e), "function" != typeof s) return function () {};
      for (var o = e.split(m), l = 0, t = o.length; l < t; l++) ! function (e) {
        for (var t, n = o[l].split(g), i = y, r = 0, a = n.length; r < a; r++) i = (i = i.n).hasOwnProperty(n[r]) && i[n[r]] || (i[n[r]] = {
          n: {}
        });
        for (i.f = i.f || [], r = 0, a = i.f.length; r < a; r++)
          if (i.f[r] == s) {
            t = !0;
            break
          }!t && i.f.push(s)
      }();
      return function (e) {
        +e == +e && (s.zIndex = +e)
      }
    }, w.f = function (e) {
      var t = [].slice.call(arguments, 1);
      return function () {
        w.apply(null, [e, null].concat(t).concat([].slice.call(arguments, 0)))
      }
    }, w.stop = function () {
      f = 1
    }, w.nt = function (e) {
      return e ? new RegExp("(?:\\.|\\/|^)" + e + "(?:\\.|\\/|$)").test(p) : p
    }, w.nts = function () {
      return p.split(g)
    }, w.off = w.unbind = function (e, t) {
      if (e) {
        var n = e.split(m);
        if (1 < n.length)
          for (var i = 0, r = n.length; i < r; i++) w.off(n[i], t);
        else {
          n = e.split(g);
          var a, s, o, l, u, c = [y];
          for (i = 0, r = n.length; i < r; i++)
            for (l = 0; l < c.length; l += o.length - 2) {
              if (o = [l, 1], a = c[l].n, "*" != n[i]) a[n[i]] && o.push(a[n[i]]);
              else
                for (s in a) a[h](s) && o.push(a[s]);
              c.splice.apply(c, o)
            }
          for (i = 0, r = c.length; i < r; i++)
            for (a = c[i]; a.n;) {
              if (t) {
                if (a.f) {
                  for (l = 0, u = a.f.length; l < u; l++)
                    if (a.f[l] == t) {
                      a.f.splice(l, 1);
                      break
                    }!a.f.length && delete a.f
                }
                for (s in a.n)
                  if (a.n[h](s) && a.n[s].f) {
                    var d = a.n[s].f;
                    for (l = 0, u = d.length; l < u; l++)
                      if (d[l] == t) {
                        d.splice(l, 1);
                        break
                      }!d.length && delete a.n[s].f
                  }
              } else
                for (s in delete a.f, a.n) a.n[h](s) && a.n[s].f && delete a.n[s].f;
              a = a.n
            }
        }
      } else w._events = y = {
        n: {}
      }
    }, w.once = function (e, t) {
      var n = function () {
        return w.unbind(e, n), t.apply(this, arguments)
      };
      return w.on(e, n)
    }, w.version = "0.4.2", w.toString = function () {
      return "You are running Eve 0.4.2"
    }, "undefined" != typeof module && module.exports ? module.exports = w : "function" == typeof define && define.amd ? define("eve", [], function () {
      return w
    }) : e.eve = w
  }(this),
  function (t, n) {
    "function" == typeof define && define.amd ? define(["eve"], function (e) {
      return n(t, e)
    }) : n(t, t.eve)
  }(this, function (ee, te) {
    var r, c, d, a, h, p, e, f, m, v, y, b, x, w, C, S, ne = (r = void 0 === te ? function () {} : te, c = {}, d = ee.requestAnimationFrame || ee.webkitRequestAnimationFrame || ee.mozRequestAnimationFrame || ee.oRequestAnimationFrame || ee.msRequestAnimationFrame || function (e) {
        setTimeout(e, 16)
      }, a = Array.isArray || function (e) {
        return e instanceof Array || "[object Array]" == Object.prototype.toString.call(e)
      }, h = 0, p = "M" + (+new Date).toString(36), e = Date.now || function () {
        return +new Date
      }, f = function (e) {
        var t = this;
        if (null == e) return t.s;
        var n = t.s - e;
        t.b += t.dur * n, t.B += t.dur * n, t.s = e
      }, m = function (e) {
        return null == e ? this.spd : void(this.spd = e)
      }, v = function (e) {
        var t = this;
        return null == e ? t.dur : (t.s = t.s * e / t.dur, void(t.dur = e))
      }, y = function () {
        delete c[this.id], this.update(), r("mina.stop." + this.id, this)
      }, b = function () {
        var e = this;
        e.pdif || (delete c[e.id], e.update(), e.pdif = e.get() - e.b)
      }, x = function () {
        var e = this;
        e.pdif && (e.b = e.get() - e.pdif, delete e.pdif, c[e.id] = e)
      }, w = function () {
        var e, t = this;
        if (a(t.start)) {
          e = [];
          for (var n = 0, i = t.start.length; n < i; n++) e[n] = +t.start[n] + (t.end[n] - t.start[n]) * t.easing(t.s)
        } else e = +t.start + (t.end - t.start) * t.easing(t.s);
        t.set(e)
      }, C = function () {
        var e = 0;
        for (var t in c)
          if (c.hasOwnProperty(t)) {
            var n = c[t],
              i = n.get();
            e++, n.s = (i - n.b) / (n.dur / n.spd), 1 <= n.s && (delete c[t], n.s = 1, e--, function (e) {
              setTimeout(function () {
                r("mina.finish." + e.id, e)
              })
            }(n)), n.update()
          }
        e && d(C)
      }, (S = function (e, t, n, i, r, a, s) {
        var o = {
          id: p + (h++).toString(36),
          start: e,
          end: t,
          b: n,
          s: 0,
          dur: i - n,
          spd: 1,
          get: r,
          set: a,
          easing: s || S.linear,
          status: f,
          speed: m,
          duration: v,
          stop: y,
          pause: b,
          resume: x,
          update: w
        };
        c[o.id] = o;
        var l, u = 0;
        for (l in c)
          if (c.hasOwnProperty(l) && 2 == ++u) break;
        return 1 == u && d(C), o
      }).time = e, S.getById = function (e) {
        return c[e] || null
      }, S.linear = function (e) {
        return e
      }, S.easeout = function (e) {
        return Math.pow(e, 1.7)
      }, S.easein = function (e) {
        return Math.pow(e, .48)
      }, S.easeinout = function (e) {
        if (1 == e) return 1;
        if (0 == e) return 0;
        var t = .48 - e / 1.04,
          n = Math.sqrt(.1734 + t * t),
          i = n - t,
          r = -n - t,
          a = Math.pow(Math.abs(i), 1 / 3) * (i < 0 ? -1 : 1) + Math.pow(Math.abs(r), 1 / 3) * (r < 0 ? -1 : 1) + .5;
        return 3 * (1 - a) * a * a + a * a * a
      }, S.backin = function (e) {
        return 1 == e ? 1 : e * e * (2.70158 * e - 1.70158)
      }, S.backout = function (e) {
        return 0 == e ? 0 : (e -= 1) * e * (2.70158 * e + 1.70158) + 1
      }, S.elastic = function (e) {
        return e == !!e ? e : Math.pow(2, -10 * e) * Math.sin(2 * (e - .075) * Math.PI / .3) + 1
      }, S.bounce = function (e) {
        var t = 7.5625,
          n = 2.75;
        return e < 1 / n ? t * e * e : e < 2 / n ? t * (e -= 1.5 / n) * e + .75 : e < 2.5 / n ? t * (e -= 2.25 / n) * e + .9375 : t * (e -= 2.625 / n) * e + .984375
      }, ee.mina = S),
      t = function () {
        function y(e, t) {
          if (e) {
            if (e.tagName) return x(e);
            if (b(e, "array") && y.set) return y.set.apply(y, e);
            if (e instanceof c) return e;
            if (null == t) return x(e = v.doc.querySelector(e))
          }
          return new m(e = null == e ? "100%" : e, t = null == t ? "100%" : t)
        }

        function f(e, t) {
          if (t) {
            if ("#text" == e && (e = v.doc.createTextNode(t.text || "")), "string" == typeof e && (e = f(e)), "string" == typeof t) return "xlink:" == t.substring(0, 6) ? e.getAttributeNS(V, t.substring(6)) : "xml:" == t.substring(0, 4) ? e.getAttributeNS(B, t.substring(4)) : e.getAttribute(t);
            for (var n in t)
              if (t[C](n)) {
                var i = S(t[n]);
                i ? "xlink:" == n.substring(0, 6) ? e.setAttributeNS(V, n.substring(6), i) : "xml:" == n.substring(0, 4) ? e.setAttributeNS(B, n.substring(4), i) : e.setAttribute(n, i) : e.removeAttribute(n)
              }
          } else e = v.doc.createElementNS(B, e);
          return e
        }

        function b(e, t) {
          return "finite" == (t = S.prototype.toLowerCase.call(t)) ? isFinite(e) : !("array" != t || !(e instanceof Array || Array.isArray && Array.isArray(e))) || ("null" == t && null === e || t == typeof e && null !== e || "object" == t && e === Object(e) || D.call(e).slice(8, -1).toLowerCase() == t)
        }

        function t(a, s, o) {
          return function e() {
            var t = Array.prototype.slice.call(arguments, 0),
              n = t.join("â€"),
              i = e.cache = e.cache || {},
              r = e.count = e.count || [];
            return i[C](n) ? function (e, t) {
              for (var n = 0, i = e.length; n < i; n++)
                if (e[n] === t) return e.push(e.splice(n, 1)[0])
            }(r, n) : (1e3 <= r.length && delete i[r.shift()], r.push(n), i[n] = a.apply(s, t)), o ? o(i[n]) : i[n]
          }
        }

        function r(e) {
          return e % 360 * L / 180
        }

        function a(e) {
          var i = [];
          return e = e.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function (e, t, n) {
            return n = n.split(/\s*,\s*|\s+/), "rotate" == t && 1 == n.length && n.push(0, 0), "scale" == t && (2 < n.length ? n = n.slice(0, 2) : 2 == n.length && n.push(0, 0), 1 == n.length && n.push(n[0], 0, 0)), i.push("skewX" == t ? ["m", 1, 0, k.tan(r(n[0])), 1, 0, 0] : "skewY" == t ? ["m", 1, k.tan(r(n[0])), 0, 1, 0, 0] : [t.charAt(0)].concat(n)), e
          }), i
        }

        function s(e, t) {
          var n = K(e),
            i = new y.Matrix;
          if (n)
            for (var r = 0, a = n.length; r < a; r++) {
              var s, o, l, u, c, d = n[r],
                h = d.length,
                p = S(d[0]).toLowerCase(),
                f = d[0] != p,
                g = f ? i.invert() : 0;
              "t" == p && 2 == h ? i.translate(d[1], 0) : "t" == p && 3 == h ? f ? (s = g.x(0, 0), o = g.y(0, 0), l = g.x(d[1], d[2]), u = g.y(d[1], d[2]), i.translate(l - s, u - o)) : i.translate(d[1], d[2]) : "r" == p ? 2 == h ? (c = c || t, i.rotate(d[1], c.x + c.width / 2, c.y + c.height / 2)) : 4 == h && (f ? (l = g.x(d[2], d[3]), u = g.y(d[2], d[3]), i.rotate(d[1], l, u)) : i.rotate(d[1], d[2], d[3])) : "s" == p ? 2 == h || 3 == h ? (c = c || t, i.scale(d[1], d[h - 1], c.x + c.width / 2, c.y + c.height / 2)) : 4 == h ? f ? (l = g.x(d[2], d[3]), u = g.y(d[2], d[3]), i.scale(d[1], d[1], l, u)) : i.scale(d[1], d[1], d[2], d[3]) : 5 == h && (f ? (l = g.x(d[3], d[4]), u = g.y(d[3], d[4]), i.scale(d[1], d[2], l, u)) : i.scale(d[1], d[2], d[3], d[4])) : "m" == p && 7 == h && i.add(d[1], d[2], d[3], d[4], d[5], d[6])
            }
          return i
        }

        function h(e, t) {
          if (null == t) {
            var n = !0;
            if (!(t = e.node.getAttribute("linearGradient" == e.type || "radialGradient" == e.type ? "gradientTransform" : "pattern" == e.type ? "patternTransform" : "transform"))) return new y.Matrix;
            t = a(t)
          } else b(t = y._.rgTransform.test(t) ? S(t).replace(/\.{3}|\u2026/g, e._.transform || z) : a(t), "array") && (t = y.path ? y.path.toString.call(t) : S(t)), e._.transform = t;
          var i = s(t, e.getBBox(1));
          return n ? i : void(e.matrix = i)
        }

        function o(e) {
          var t = e.node.ownerSVGElement && x(e.node.ownerSVGElement) || e.node.parentNode && x(e.node.parentNode) || y.select("svg") || y(0, 0),
            n = t.select("defs"),
            i = null != n && n.node;
          return i || (i = p("defs", t.node).node), i
        }

        function u(e) {
          return e.node.ownerSVGElement && x(e.node.ownerSVGElement) || y.select("svg")
        }

        function n(n, i, r) {
          function e(e) {
            if (null == e) return z;
            if (e == +e) return e;
            f(l, {
              width: e
            });
            try {
              return l.getBBox().width
            } catch (e) {
              return 0
            }
          }

          function t(e) {
            if (null == e) return z;
            if (e == +e) return e;
            f(l, {
              height: e
            });
            try {
              return l.getBBox().height
            } catch (e) {
              return 0
            }
          }

          function a(e, t) {
            null == i ? o[e] = t(n.attr(e) || 0) : e == i && (o = t(null == r ? n.attr(e) || 0 : r))
          }
          var s = u(n).node,
            o = {},
            l = s.querySelector(".svg---mgr");
          switch (l || (f(l = f("rect"), {
            x: -9e9,
            y: -9e9,
            width: 10,
            height: 10,
            class: "svg---mgr",
            fill: "none"
          }), s.appendChild(l)), n.type) {
          case "rect":
            a("rx", e), a("ry", t);
          case "image":
            a("width", e), a("height", t);
          case "text":
            a("x", e), a("y", t);
            break;
          case "circle":
            a("cx", e), a("cy", t), a("r", e);
            break;
          case "ellipse":
            a("cx", e), a("cy", t), a("rx", e), a("ry", t);
            break;
          case "line":
            a("x1", e), a("x2", e), a("y1", t), a("y2", t);
            break;
          case "marker":
            a("refX", e), a("markerWidth", e), a("refY", t), a("markerHeight", t);
            break;
          case "radialGradient":
            a("fx", e), a("fy", t);
            break;
          case "tspan":
            a("dx", e), a("dy", t);
            break;
          default:
            a(i, e)
          }
          return s.removeChild(l), o
        }

        function l(e) {
          b(e, "array") || (e = Array.prototype.slice.call(arguments, 0));
          for (var t = 0, n = 0, i = this.node; this[t];) delete this[t++];
          for (t = 0; t < e.length; t++) "set" == e[t].type ? e[t].forEach(function (e) {
            i.appendChild(e.node)
          }) : i.appendChild(e[t].node);
          var r = i.childNodes;
          for (t = 0; t < r.length; t++) this[n++] = x(r[t]);
          return this
        }

        function c(e) {
          if (e.snap in R) return R[e.snap];
          var t, n = this.id = q();
          try {
            t = e.ownerSVGElement
          } catch (e) {}
          if (this.node = e, t && (this.paper = new m(t)), this.type = e.tagName, this.anims = {}, this._ = {
              transform: []
            }, e.snap = n, "g" == (R[n] = this).type && (this.add = l), this.type in {
              g: 1,
              mask: 1,
              pattern: 1
            })
            for (var i in m.prototype) m.prototype[C](i) && (this[i] = m.prototype[i])
        }

        function d(e) {
          this.node = e
        }

        function p(e, t) {
          var n = f(e);
          return t.appendChild(n), x(n)
        }

        function m(e, t) {
          var n, i, r, a = m.prototype;
          if (e && "svg" == e.tagName) {
            if (e.snap in R) return R[e.snap];
            var s = e.ownerDocument;
            for (var o in n = new c(e), i = e.getElementsByTagName("desc")[0], r = e.getElementsByTagName("defs")[0], i || ((i = f("desc")).appendChild(s.createTextNode("Created with Snap")), n.node.appendChild(i)), r || (r = f("defs"), n.node.appendChild(r)), n.defs = r, a) a[C](o) && (n[o] = a[o]);
            n.paper = n.root = n
          } else f((n = p("svg", v.doc.body)).node, {
            height: t,
            version: 1.1,
            width: e,
            xmlns: B
          });
          return n
        }

        function x(e) {
          return e ? e instanceof c || e instanceof d ? e : e.tagName && "svg" == e.tagName.toLowerCase() ? new m(e) : e.tagName && "object" == e.tagName.toLowerCase() && "image/svg+xml" == e.type ? new m(e.contentDocument.getElementsByTagName("svg")[0]) : new c(e) : e
        }
        y.version = "0.3.0", y.toString = function () {
          return "Snap v" + this.version
        }, y._ = {};
        var v = {
          win: ee,
          doc: ee.document
        };
        y._.glob = v;
        var i, w, C = "hasOwnProperty",
          S = String,
          T = parseFloat,
          E = parseInt,
          k = Math,
          M = k.max,
          P = k.min,
          A = k.abs,
          L = (k.pow, k.PI),
          z = (k.round, ""),
          D = Object.prototype.toString,
          F = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
          e = "\t\n\v\f\r  áš€á Žâ€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€  ",
          N = (y._.separator = new RegExp("[," + e + "]+"), new RegExp("[" + e + "]", "g"), new RegExp("[" + e + "]*,[" + e + "]*")),
          O = {
            hs: 1,
            rg: 1
          },
          _ = new RegExp("([a-z])[" + e + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + e + "]*,?[" + e + "]*)+)", "ig"),
          I = new RegExp("([rstm])[" + e + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + e + "]*,?[" + e + "]*)+)", "ig"),
          j = new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[" + e + "]*,?[" + e + "]*", "ig"),
          $ = 0,
          H = "S" + (+new Date).toString(36),
          q = function () {
            return H + ($++).toString(36)
          },
          V = "http://www.w3.org/1999/xlink",
          B = "http://www.w3.org/2000/svg",
          R = {},
          G = y.url = function (e) {
            return "url('#" + e + "')"
          };
        y._.$ = f, y._.id = q, y.format = (i = /\{([^\}]+)\}/g, w = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g, function (e, r) {
          return S(e).replace(i, function (e, t) {
            return n = e, a = i = r, t.replace(w, function (e, t, n, i, r) {
              t = t || i, a && (t in a && (a = a[t]), "function" == typeof a && r && (a = a()))
            }), a = (null == a || a == i ? n : a) + "";
            var n, i, a
          })
        }), y._.clone = function e(t) {
          if ("function" == typeof t || Object(t) !== t) return t;
          var n = new t.constructor;
          for (var i in t) t[C](i) && (n[i] = e(t[i]));
          return n
        }, y._.cacher = t, y.rad = r, y.deg = function (e) {
          return 180 * e / L % 360
        }, y.angle = function e(t, n, i, r, a, s) {
          if (null == a) {
            var o = t - i,
              l = n - r;
            return o || l ? (180 + 180 * k.atan2(-l, -o) / L + 360) % 360 : 0
          }
          return e(t, n, a, s) - e(i, r, a, s)
        }, y.is = b, y.snapTo = function (e, t, n) {
          if (n = b(n, "finite") ? n : 10, b(e, "array")) {
            for (var i = e.length; i--;)
              if (A(e[i] - t) <= n) return e[i]
          } else {
            var r = t % (e = +e);
            if (r < n) return t - r;
            if (e - n < r) return t - r + e
          }
          return t
        }, y.getRGB = t(function (e) {
          if (!e || (e = S(e)).indexOf("-") + 1) return {
            r: -1,
            g: -1,
            b: -1,
            hex: "none",
            error: 1,
            toString: Z
          };
          if ("none" == e) return {
            r: -1,
            g: -1,
            b: -1,
            hex: "none",
            toString: Z
          };
          if (!(O[C](e.toLowerCase().substring(0, 2)) || "#" == e.charAt()) && (e = X(e)), !e) return {
            r: -1,
            g: -1,
            b: -1,
            hex: "none",
            error: 1,
            toString: Z
          };
          var t, n, i, r, a, s, o = e.match(F);
          return o ? (o[2] && (i = E(o[2].substring(5), 16), n = E(o[2].substring(3, 5), 16), t = E(o[2].substring(1, 3), 16)), o[3] && (i = E((a = o[3].charAt(3)) + a, 16), n = E((a = o[3].charAt(2)) + a, 16), t = E((a = o[3].charAt(1)) + a, 16)), o[4] && (s = o[4].split(N), t = T(s[0]), "%" == s[0].slice(-1) && (t *= 2.55), n = T(s[1]), "%" == s[1].slice(-1) && (n *= 2.55), i = T(s[2]), "%" == s[2].slice(-1) && (i *= 2.55), "rgba" == o[1].toLowerCase().slice(0, 4) && (r = T(s[3])), s[3] && "%" == s[3].slice(-1) && (r /= 100)), o[5] ? (s = o[5].split(N), t = T(s[0]), "%" == s[0].slice(-1) && (t /= 100), n = T(s[1]), "%" == s[1].slice(-1) && (n /= 100), i = T(s[2]), "%" == s[2].slice(-1) && (i /= 100), ("deg" == s[0].slice(-3) || "Â°" == s[0].slice(-1)) && (t /= 360), "hsba" == o[1].toLowerCase().slice(0, 4) && (r = T(s[3])), s[3] && "%" == s[3].slice(-1) && (r /= 100), y.hsb2rgb(t, n, i, r)) : o[6] ? (s = o[6].split(N), t = T(s[0]), "%" == s[0].slice(-1) && (t /= 100), n = T(s[1]), "%" == s[1].slice(-1) && (n /= 100), i = T(s[2]), "%" == s[2].slice(-1) && (i /= 100), ("deg" == s[0].slice(-3) || "Â°" == s[0].slice(-1)) && (t /= 360), "hsla" == o[1].toLowerCase().slice(0, 4) && (r = T(s[3])), s[3] && "%" == s[3].slice(-1) && (r /= 100), y.hsl2rgb(t, n, i, r)) : (t = P(k.round(t), 255), n = P(k.round(n), 255), i = P(k.round(i), 255), r = P(M(r, 0), 1), (o = {
            r: t,
            g: n,
            b: i,
            toString: Z
          }).hex = "#" + (16777216 | i | n << 8 | t << 16).toString(16).slice(1), o.opacity = b(r, "finite") ? r : 1, o)) : {
            r: -1,
            g: -1,
            b: -1,
            hex: "none",
            error: 1,
            toString: Z
          }
        }, y), y.hsb = t(function (e, t, n) {
          return y.hsb2rgb(e, t, n).hex
        }), y.hsl = t(function (e, t, n) {
          return y.hsl2rgb(e, t, n).hex
        }), y.rgb = t(function (e, t, n, i) {
          if (b(i, "finite")) {
            var r = k.round;
            return "rgba(" + [r(e), r(t), r(n), +i.toFixed(2)] + ")"
          }
          return "#" + (16777216 | n | t << 8 | e << 16).toString(16).slice(1)
        });
        var X = function (e) {
            var n = v.doc.getElementsByTagName("head")[0] || v.doc.getElementsByTagName("svg")[0],
              i = "rgb(255, 0, 0)";
            return (X = t(function (e) {
              if ("red" == e.toLowerCase()) return i;
              n.style.color = i, n.style.color = e;
              var t = v.doc.defaultView.getComputedStyle(n, z).getPropertyValue("color");
              return t == i ? null : t
            }))(e)
          },
          W = function () {
            return "hsb(" + [this.h, this.s, this.b] + ")"
          },
          Y = function () {
            return "hsl(" + [this.h, this.s, this.l] + ")"
          },
          Z = function () {
            return 1 == this.opacity || null == this.opacity ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")"
          },
          U = function (e, t, n) {
            if (null == t && b(e, "object") && "r" in e && "g" in e && "b" in e && (n = e.b, t = e.g, e = e.r), null == t && b(e, string)) {
              var i = y.getRGB(e);
              e = i.r, t = i.g, n = i.b
            }
            return (1 < e || 1 < t || 1 < n) && (e /= 255, t /= 255, n /= 255), [e, t, n]
          },
          Q = function (e, t, n, i) {
            var r = {
              r: e = k.round(255 * e),
              g: t = k.round(255 * t),
              b: n = k.round(255 * n),
              opacity: b(i, "finite") ? i : 1,
              hex: y.rgb(e, t, n),
              toString: Z
            };
            return b(i, "finite") && (r.opacity = i), r
          };
        y.color = function (e) {
          var t;
          return b(e, "object") && "h" in e && "s" in e && "b" in e ? (t = y.hsb2rgb(e), e.r = t.r, e.g = t.g, e.b = t.b, e.opacity = 1, e.hex = t.hex) : b(e, "object") && "h" in e && "s" in e && "l" in e ? (t = y.hsl2rgb(e), e.r = t.r, e.g = t.g, e.b = t.b, e.opacity = 1, e.hex = t.hex) : (b(e, "string") && (e = y.getRGB(e)), b(e, "object") && "r" in e && "g" in e && "b" in e && !("error" in e) ? (t = y.rgb2hsl(e), e.h = t.h, e.s = t.s, e.l = t.l, t = y.rgb2hsb(e), e.v = t.b) : ((e = {
            hex: "none"
          }).r = e.g = e.b = e.h = e.s = e.v = e.l = -1, e.error = 1)), e.toString = Z, e
        }, y.hsb2rgb = function (e, t, n, i) {
          var r, a, s, o, l;
          return b(e, "object") && "h" in e && "s" in e && "b" in e && (n = e.b, t = e.s, i = (e = e.h).o), o = (l = n * t) * (1 - A((e = (e *= 360) % 360 / 60) % 2 - 1)), r = a = s = n - l, Q(r += [l, o, 0, 0, o, l][e = ~~e], a += [o, l, l, o, 0, 0][e], s += [0, 0, o, l, l, o][e], i)
        }, y.hsl2rgb = function (e, t, n, i) {
          var r, a, s, o, l;
          return b(e, "object") && "h" in e && "s" in e && "l" in e && (n = e.l, t = e.s, e = e.h), (1 < e || 1 < t || 1 < n) && (e /= 360, t /= 100, n /= 100), o = (l = 2 * t * (n < .5 ? n : 1 - n)) * (1 - A((e = (e *= 360) % 360 / 60) % 2 - 1)), r = a = s = n - l / 2, Q(r += [l, o, 0, 0, o, l][e = ~~e], a += [o, l, l, o, 0, 0][e], s += [0, 0, o, l, l, o][e], i)
        }, y.rgb2hsb = function (e, t, n) {
          var i, r;
          return e = (n = U(e, t, n))[0], t = n[1], n = n[2], {
            h: ((0 == (r = (i = M(e, t, n)) - P(e, t, n)) ? null : i == e ? (t - n) / r : i == t ? (n - e) / r + 2 : (e - t) / r + 4) + 360) % 6 * 60 / 360,
            s: 0 == r ? 0 : r / i,
            b: i,
            toString: W
          }
        }, y.rgb2hsl = function (e, t, n) {
          var i, r, a, s;
          return e = (n = U(e, t, n))[0], t = n[1], n = n[2], i = ((r = M(e, t, n)) + (a = P(e, t, n))) / 2, {
            h: ((0 == (s = r - a) ? null : r == e ? (t - n) / s : r == t ? (n - e) / s + 2 : (e - t) / s + 4) + 360) % 6 * 60 / 360,
            s: 0 == s ? 0 : i < .5 ? s / (2 * i) : s / (2 - 2 * i),
            l: i,
            toString: Y
          }
        }, y.parsePathString = function (e) {
          if (!e) return null;
          var t = y.path(e);
          if (t.arr) return y.path.clone(t.arr);
          var a = {
              a: 7,
              c: 6,
              o: 2,
              h: 1,
              l: 2,
              m: 2,
              r: 4,
              q: 4,
              s: 4,
              t: 2,
              v: 1,
              u: 3,
              z: 0
            },
            s = [];
          return b(e, "array") && b(e[0], "array") && (s = y.path.clone(e)), s.length || S(e).replace(_, function (e, t, n) {
            var i = [],
              r = t.toLowerCase();
            if (n.replace(j, function (e, t) {
                t && i.push(+t)
              }), "m" == r && 2 < i.length && (s.push([t].concat(i.splice(0, 2))), r = "l", t = "m" == t ? "l" : "L"), "o" == r && 1 == i.length && s.push([t, i[0]]), "r" == r) s.push([t].concat(i));
            else
              for (; i.length >= a[r] && (s.push([t].concat(i.splice(0, a[r]))), a[r]););
          }), s.toString = y.path.toString, t.arr = y.path.clone(s), s
        };
        var K = y.parseTransformString = function (e) {
          if (!e) return null;
          var r = [];
          return b(e, "array") && b(e[0], "array") && (r = y.path.clone(e)), r.length || S(e).replace(I, function (e, t, n) {
            var i = [];
            t.toLowerCase(), n.replace(j, function (e, t) {
              t && i.push(+t)
            }), r.push([t].concat(i))
          }), r.toString = y.path.toString, r
        };
        y._.svgTransform2string = a, y._.rgTransform = new RegExp("^[a-z][" + e + "]*-?\\.?\\d", "i"), y._.transform2matrix = s, y._unit2px = n, v.doc.contains || v.doc.compareDocumentPosition, y._.getSomeDefs = o, y._.getSomeSVG = u, y.select = function (e) {
            return x(v.doc.querySelector(e))
          }, y.selectAll = function (e) {
            for (var t = v.doc.querySelectorAll(e), n = (y.set || Array)(), i = 0; i < t.length; i++) n.push(x(t[i]));
            return n
          }, setInterval(function () {
            for (var e in R)
              if (R[C](e)) {
                var t = R[e],
                  n = t.node;
                ("svg" != t.type && !n.ownerSVGElement || "svg" == t.type && (!n.parentNode || "ownerSVGElement" in n.parentNode && !n.ownerSVGElement)) && delete R[e]
              }
          }, 1e4),
          function (e) {
            function m(n, i, r) {
              return function (e) {
                var t = e.slice(n, i);
                return 1 == t.length && (t = t[0]), r ? r(t) : t
              }
            }

            function t(a) {
              return function () {
                var e = a ? "<" + this.type : "",
                  t = this.node.attributes,
                  n = this.node.childNodes;
                if (a)
                  for (var i = 0, r = t.length; i < r; i++) e += " " + t[i].name + '="' + t[i].value.replace(/"/g, '\\"') + '"';
                if (n.length) {
                  for (a && (e += ">"), i = 0, r = n.length; i < r; i++) 3 == n[i].nodeType ? e += n[i].nodeValue : 1 == n[i].nodeType && (e += x(n[i]).toString());
                  a && (e += "</" + this.type + ">")
                } else a && (e += "/>");
                return e
              }
            }
            e.attr = function (e, t) {
              var n = this;
              if (n.node, !e) return n;
              if (b(e, "string")) {
                if (!(1 < arguments.length)) return te("snap.util.getattr." + e, n).firstDefined();
                var i = {};
                i[e] = t, e = i
              }
              for (var r in e) e[C](r) && te("snap.util.attr." + r, n, e[r]);
              return n
            }, e.getBBox = function (e) {
              if (!y.Matrix || !y.path) return this.node.getBBox();
              var t = this,
                n = new y.Matrix;
              if (t.removed) return y._.box();
              for (;
                "use" == t.type;)
                if (e || (n = n.add(t.transform().localMatrix.translate(t.attr("x") || 0, t.attr("y") || 0))), t.original) t = t.original;
                else {
                  var i = t.attr("xlink:href");
                  t = t.original = t.node.ownerDocument.getElementById(i.substring(i.indexOf("#") + 1))
                }
              var r = t._,
                a = y.path.get[t.type] || y.path.get.deflt;
              try {
                return e ? (r.bboxwt = a ? y.path.getBBox(t.realPath = a(t)) : y._.box(t.node.getBBox()), y._.box(r.bboxwt)) : (t.realPath = a(t), t.matrix = t.transform().localMatrix, r.bbox = y.path.getBBox(y.path.map(t.realPath, n.add(t.matrix))), y._.box(r.bbox))
              } catch (e) {
                return y._.box()
              }
            };
            var c = function () {
              return this.string
            };
            e.transform = function (e) {
              var t = this._;
              if (null == e) {
                for (var n, i = this, r = new y.Matrix(this.node.getCTM()), a = h(this), s = [a], o = new y.Matrix, l = a.toTransformString(), u = S(a) == S(this.matrix) ? S(t.transform) : l;
                  "svg" != i.type && (i = i.parent());) s.push(h(i));
                for (n = s.length; n--;) o.add(s[n]);
                return {
                  string: u,
                  globalMatrix: r,
                  totalMatrix: o,
                  localMatrix: a,
                  diffMatrix: r.clone().add(a.invert()),
                  global: r.toTransformString(),
                  total: o.toTransformString(),
                  local: l,
                  toString: c
                }
              }
              return e instanceof y.Matrix ? this.matrix = e : h(this, e), this.node && ("linearGradient" == this.type || "radialGradient" == this.type ? f(this.node, {
                gradientTransform: this.matrix
              }) : "pattern" == this.type ? f(this.node, {
                patternTransform: this.matrix
              }) : f(this.node, {
                transform: this.matrix
              })), this
            }, e.parent = function () {
              return x(this.node.parentNode)
            }, e.append = e.add = function (e) {
              if (e) {
                if ("set" == e.type) {
                  var t = this;
                  return e.forEach(function (e) {
                    t.add(e)
                  }), this
                }
                e = x(e), this.node.appendChild(e.node), e.paper = this.paper
              }
              return this
            }, e.appendTo = function (e) {
              return e && (e = x(e)).append(this), this
            }, e.prepend = function (e) {
              if (e) {
                if ("set" == e.type) {
                  var t, n = this;
                  return e.forEach(function (e) {
                    t ? t.after(e) : n.prepend(e), t = e
                  }), this
                }
                var i = (e = x(e)).parent();
                this.node.insertBefore(e.node, this.node.firstChild), this.add && this.add(), e.paper = this.paper, this.parent() && this.parent().add(), i && i.add()
              }
              return this
            }, e.prependTo = function (e) {
              return (e = x(e)).prepend(this), this
            }, e.before = function (e) {
              if ("set" == e.type) {
                var n = this;
                return e.forEach(function (e) {
                  var t = e.parent();
                  n.node.parentNode.insertBefore(e.node, n.node), t && t.add()
                }), this.parent().add(), this
              }
              var t = (e = x(e)).parent();
              return this.node.parentNode.insertBefore(e.node, this.node), this.parent() && this.parent().add(), t && t.add(), e.paper = this.paper, this
            }, e.after = function (e) {
              var t = (e = x(e)).parent();
              return this.node.nextSibling ? this.node.parentNode.insertBefore(e.node, this.node.nextSibling) : this.node.parentNode.appendChild(e.node), this.parent() && this.parent().add(), t && t.add(), e.paper = this.paper, this
            }, e.insertBefore = function (e) {
              e = x(e);
              var t = this.parent();
              return e.node.parentNode.insertBefore(this.node, e.node), this.paper = e.paper, t && t.add(), e.parent() && e.parent().add(), this
            }, e.insertAfter = function (e) {
              e = x(e);
              var t = this.parent();
              return e.node.parentNode.insertBefore(this.node, e.node.nextSibling), this.paper = e.paper, t && t.add(), e.parent() && e.parent().add(), this
            }, e.remove = function () {
              var e = this.parent();
              return this.node.parentNode && this.node.parentNode.removeChild(this.node), delete this.paper, this.removed = !0, e && e.add(), this
            }, e.select = function (e) {
              return x(this.node.querySelector(e))
            }, e.selectAll = function (e) {
              for (var t = this.node.querySelectorAll(e), n = (y.set || Array)(), i = 0; i < t.length; i++) n.push(x(t[i]));
              return n
            }, e.asPX = function (e, t) {
              return null == t && (t = this.attr(e)), +n(this, e, t)
            }, e.use = function () {
              var e, t = this.node.id;
              return t || (t = this.id, f(this.node, {
                id: t
              })), f((e = "linearGradient" == this.type || "radialGradient" == this.type || "pattern" == this.type ? p(this.type, this.node.parentNode) : p("use", this.node.parentNode)).node, {
                "xlink:href": "#" + t
              }), e.original = this, e
            };
            var d = /\S+/g;
            e.addClass = function (e) {
              var t, n, i, r = (e || "").match(d) || [],
                a = this.node,
                s = a.className.baseVal,
                o = s.match(d) || [];
              if (r.length) {
                for (t = 0; n = r[t++];) ~o.indexOf(n) || o.push(n);
                s != (i = o.join(" ")) && (a.className.baseVal = i)
              }
              return this
            }, e.removeClass = function (e) {
              var t, n, i, r, a = (e || "").match(d) || [],
                s = this.node,
                o = s.className.baseVal,
                l = o.match(d) || [];
              if (l.length) {
                for (t = 0; i = a[t++];) ~(n = l.indexOf(i)) && l.splice(n, 1);
                o != (r = l.join(" ")) && (s.className.baseVal = r)
              }
              return this
            }, e.hasClass = function (e) {
              return !!~(this.node.className.baseVal.match(d) || []).indexOf(e)
            }, e.toggleClass = function (e, t) {
              if (null != t) return t ? this.addClass(e) : this.removeClass(e);
              var n, i, r, a, s = (e || "").match(d) || [],
                o = this.node,
                l = o.className.baseVal,
                u = l.match(d) || [];
              for (n = 0; r = s[n++];) ~(i = u.indexOf(r)) ? u.splice(i, 1) : u.push(r);
              return l != (a = u.join(" ")) && (o.className.baseVal = a), this
            }, e.clone = function () {
              var e = x(this.node.cloneNode(!0));
              return f(e.node, "id") && f(e.node, {
                  id: e.id
                }),
                function (e) {
                  function t(n, i) {
                    var e = f(n.node, i);
                    (e = (e = e && e.match(a)) && e[2]) && "#" == e.charAt() && (e = e.substring(1)) && (o[e] = (o[e] || []).concat(function (e) {
                      var t = {};
                      t[i] = G(e), f(n.node, t)
                    }))
                  }

                  function n(t) {
                    var e = f(t.node, "xlink:href");
                    e && "#" == e.charAt() && (e = e.substring(1)) && (o[e] = (o[e] || []).concat(function (e) {
                      t.attr("xlink:href", "#" + e)
                    }))
                  }
                  for (var i, r = e.selectAll("*"), a = /^\s*url\(("|'|)(.*)\1\)\s*$/, s = [], o = {}, l = 0, u = r.length; l < u; l++) {
                    t(i = r[l], "fill"), t(i, "stroke"), t(i, "filter"), t(i, "mask"), t(i, "clip-path"), n(i);
                    var c = f(i.node, "id");
                    c && (f(i.node, {
                      id: i.id
                    }), s.push({
                      old: c,
                      id: i.id
                    }))
                  }
                  for (l = 0, u = s.length; l < u; l++) {
                    var d = o[s[l].old];
                    if (d)
                      for (var h = 0, p = d.length; h < p; h++) d[h](s[l].id)
                  }
                }(e), e.insertAfter(this), e
            }, e.toDefs = function () {
              return o(this).appendChild(this.node), this
            }, e.pattern = e.toPattern = function (e, t, n, i) {
              var r = p("pattern", o(this));
              return null == e && (e = this.getBBox()), b(e, "object") && "x" in e && (t = e.y, n = e.width, i = e.height, e = e.x), f(r.node, {
                x: e,
                y: t,
                width: n,
                height: i,
                patternUnits: "userSpaceOnUse",
                id: r.id,
                viewBox: [e, t, n, i].join(" ")
              }), r.node.appendChild(this.node), r
            }, e.marker = function (e, t, n, i, r, a) {
              var s = p("marker", o(this));
              return null == e && (e = this.getBBox()), b(e, "object") && "x" in e && (t = e.y, n = e.width, i = e.height, r = e.refX || e.cx, a = e.refY || e.cy, e = e.x), f(s.node, {
                viewBox: [e, t, n, i].join(" "),
                markerWidth: n,
                markerHeight: i,
                orient: "auto",
                refX: r || 0,
                refY: a || 0,
                id: s.id
              }), s.node.appendChild(this.node), s
            };
            var v = function (e, t, n, i) {
              "function" != typeof n || n.length || (i = n, n = ne.linear), this.attr = e, this.dur = t, n && (this.easing = n), i && (this.callback = i)
            };
            y._.Animation = v, y.animation = function (e, t, n, i) {
              return new v(e, t, n, i)
            }, e.inAnim = function () {
              var e = [];
              for (var t in this.anims) this.anims[C](t) && function (t) {
                e.push({
                  anim: new v(t._attrs, t.dur, t.easing, t._callback),
                  mina: t,
                  curStatus: t.status(),
                  status: function (e) {
                    return t.status(e)
                  },
                  stop: function () {
                    t.stop()
                  }
                })
              }(this.anims[t]);
              return e
            }, y.animate = function (e, t, n, i, r, a) {
              "function" != typeof r || r.length || (a = r, r = ne.linear);
              var s = ne.time(),
                o = ne(e, t, s, s + i, ne.time, n, r);
              return a && te.once("mina.finish." + o.id, a), o
            }, e.stop = function () {
              for (var e = this.inAnim(), t = 0, n = e.length; t < n; t++) e[t].stop();
              return this
            }, e.animate = function (e, t, n, i) {
              "function" != typeof n || n.length || (i = n, n = ne.linear), e instanceof v && (i = e.callback, t = (n = e.easing).dur, e = e.attr);
              var r, a, s, o, l = [],
                u = [],
                c = {},
                d = this;
              for (var h in e)
                if (e[C](h)) {
                  d.equal ? (r = (o = d.equal(h, S(e[h]))).from, a = o.to, s = o.f) : (r = +d.attr(h), a = +e[h]);
                  var p = b(r, "array") ? r.length : 1;
                  c[h] = m(l.length, l.length + p, s), l = l.concat(r), u = u.concat(a)
                }
              var f = ne.time(),
                g = ne(l, u, f, f + t, ne.time, function (e) {
                  var t = {};
                  for (var n in c) c[C](n) && (t[n] = c[n](e));
                  d.attr(t)
                }, n);
              return (d.anims[g.id] = g)._attrs = e, g._callback = i, te("snap.animcreated." + d.id, g), te.once("mina.finish." + g.id, function () {
                delete d.anims[g.id], i && i.call(d)
              }), te.once("mina.stop." + g.id, function () {
                delete d.anims[g.id]
              }), d
            };
            var r = {};
            e.data = function (e, t) {
              var n = r[this.id] = r[this.id] || {};
              if (0 == arguments.length) return te("snap.data.get." + this.id, this, n, null), n;
              if (1 == arguments.length) {
                if (y.is(e, "object")) {
                  for (var i in e) e[C](i) && this.data(i, e[i]);
                  return this
                }
                return te("snap.data.get." + this.id, this, n[e], e), n[e]
              }
              return n[e] = t, te("snap.data.set." + this.id, this, t, e), this
            }, e.removeData = function (e) {
              return null == e ? r[this.id] = {} : r[this.id] && delete r[this.id][e], this
            }, e.outerSVG = e.toString = t(1), e.innerSVG = t()
          }(c.prototype), y.parse = function (e) {
            var t = v.doc.createDocumentFragment(),
              n = !0,
              i = v.doc.createElement("div");
            if ((e = S(e)).match(/^\s*<\s*svg(?:\s|>)/) || (e = "<svg>" + e + "</svg>", n = !1), i.innerHTML = e, e = i.getElementsByTagName("svg")[0])
              if (n) t = e;
              else
                for (; e.firstChild;) t.appendChild(e.firstChild);
            return i.innerHTML = z, new d(t)
          }, d.prototype.select = c.prototype.select, d.prototype.selectAll = c.prototype.selectAll, y.fragment = function () {
            for (var e = Array.prototype.slice.call(arguments, 0), t = v.doc.createDocumentFragment(), n = 0, i = e.length; n < i; n++) {
              var r = e[n];
              r.node && r.node.nodeType && t.appendChild(r.node), r.nodeType && t.appendChild(r), "string" == typeof r && t.appendChild(y.parse(r).node)
            }
            return new d(t)
          }, y._.make = p, y._.wrap = x, m.prototype.el = function (e, t) {
            var n = p(e, this.node);
            return t && n.attr(t), n
          }, te.on("snap.util.getattr", function () {
            var e = te.nt(),
              t = (e = e.substring(e.lastIndexOf(".") + 1)).replace(/[A-Z]/g, function (e) {
                return "-" + e.toLowerCase()
              });
            return J[C](t) ? this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(t) : f(this.node, e)
          });
        var J = {
          "alignment-baseline": 0,
          "baseline-shift": 0,
          clip: 0,
          "clip-path": 0,
          "clip-rule": 0,
          color: 0,
          "color-interpolation": 0,
          "color-interpolation-filters": 0,
          "color-profile": 0,
          "color-rendering": 0,
          cursor: 0,
          direction: 0,
          display: 0,
          "dominant-baseline": 0,
          "enable-background": 0,
          fill: 0,
          "fill-opacity": 0,
          "fill-rule": 0,
          filter: 0,
          "flood-color": 0,
          "flood-opacity": 0,
          font: 0,
          "font-family": 0,
          "font-size": 0,
          "font-size-adjust": 0,
          "font-stretch": 0,
          "font-style": 0,
          "font-variant": 0,
          "font-weight": 0,
          "glyph-orientation-horizontal": 0,
          "glyph-orientation-vertical": 0,
          "image-rendering": 0,
          kerning: 0,
          "letter-spacing": 0,
          "lighting-color": 0,
          marker: 0,
          "marker-end": 0,
          "marker-mid": 0,
          "marker-start": 0,
          mask: 0,
          opacity: 0,
          overflow: 0,
          "pointer-events": 0,
          "shape-rendering": 0,
          "stop-color": 0,
          "stop-opacity": 0,
          stroke: 0,
          "stroke-dasharray": 0,
          "stroke-dashoffset": 0,
          "stroke-linecap": 0,
          "stroke-linejoin": 0,
          "stroke-miterlimit": 0,
          "stroke-opacity": 0,
          "stroke-width": 0,
          "text-anchor": 0,
          "text-decoration": 0,
          "text-rendering": 0,
          "unicode-bidi": 0,
          visibility: 0,
          "word-spacing": 0,
          "writing-mode": 0
        };
        te.on("snap.util.attr", function (e) {
          var t = te.nt(),
            n = {};
          n[t = t.substring(t.lastIndexOf(".") + 1)] = e;
          var i = t.replace(/-(\w)/gi, function (e, t) {
              return t.toUpperCase()
            }),
            r = t.replace(/[A-Z]/g, function (e) {
              return "-" + e.toLowerCase()
            });
          J[C](r) ? this.node.style[i] = null == e ? z : e : f(this.node, n)
        }), y.ajax = function (e, t, n, i) {
          var r = new XMLHttpRequest,
            a = q();
          if (r) {
            if (b(t, "function")) i = n, n = t, t = null;
            else if (b(t, "object")) {
              var s = [];
              for (var o in t) t.hasOwnProperty(o) && s.push(encodeURIComponent(o) + "=" + encodeURIComponent(t[o]));
              t = s.join("&")
            }
            return r.open(t ? "POST" : "GET", e, !0), t && (r.setRequestHeader("X-Requested-With", "XMLHttpRequest"), r.setRequestHeader("Content-type", "application/x-www-form-urlencoded")), n && (te.once("snap.ajax." + a + ".0", n), te.once("snap.ajax." + a + ".200", n), te.once("snap.ajax." + a + ".304", n)), r.onreadystatechange = function () {
              4 == r.readyState && te("snap.ajax." + a + "." + r.status, i, r)
            }, 4 == r.readyState || r.send(t), r
          }
        }, y.load = function (e, n, i) {
          y.ajax(e, function (e) {
            var t = y.parse(e.responseText);
            i ? n.call(i, t) : n(t)
          })
        };
        return y.getElementByPoint = function (e, t) {
          var n, i, r, a, s, o, l, u = (this.canvas, v.doc.elementFromPoint(e, t));
          if (v.win.opera && "svg" == u.tagName) {
            var c = (i = (n = u).getBoundingClientRect(), r = n.ownerDocument, a = r.body, s = r.documentElement, o = s.clientTop || a.clientTop || 0, l = s.clientLeft || a.clientLeft || 0, {
                y: i.top + (g.win.pageYOffset || s.scrollTop || a.scrollTop) - o,
                x: i.left + (g.win.pageXOffset || s.scrollLeft || a.scrollLeft) - l
              }),
              d = u.createSVGRect();
            d.x = e - c.x, d.y = t - c.y, d.width = d.height = 1;
            var h = u.getIntersectionList(d, null);
            h.length && (u = h[h.length - 1])
          }
          return u ? x(u) : null
        }, y.plugin = function (e) {
          e(y, c, m, v, d)
        }, v.win.Snap = y
      }();
    return t.plugin(function (s) {
      function p(e, t, n, i, r, a) {
        return null == t && "[object SVGMatrix]" == o.call(e) ? (this.a = e.a, this.b = e.b, this.c = e.c, this.d = e.d, this.e = e.e, void(this.f = e.f)) : void(null != e ? (this.a = +e, this.b = +t, this.c = +n, this.d = +i, this.e = +r, this.f = +a) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0))
      }
      var o = Object.prototype.toString,
        t = String,
        l = Math;
      ! function (e) {
        function r(e) {
          return e[0] * e[0] + e[1] * e[1]
        }

        function a(e) {
          var t = l.sqrt(r(e));
          e[0] && (e[0] /= t), e[1] && (e[1] /= t)
        }
        e.add = function (e, t, n, i, r, a) {
          var s, o, l, u, c = [
              [],
              [],
              []
            ],
            d = [
              [this.a, this.c, this.e],
              [this.b, this.d, this.f],
              [0, 0, 1]
            ],
            h = [
              [e, n, r],
              [t, i, a],
              [0, 0, 1]
            ];
          for (e && e instanceof p && (h = [
              [e.a, e.c, e.e],
              [e.b, e.d, e.f],
              [0, 0, 1]
            ]), s = 0; s < 3; s++)
            for (o = 0; o < 3; o++) {
              for (l = u = 0; l < 3; l++) u += d[s][l] * h[l][o];
              c[s][o] = u
            }
          return this.a = c[0][0], this.b = c[1][0], this.c = c[0][1], this.d = c[1][1], this.e = c[0][2], this.f = c[1][2], this
        }, e.invert = function () {
          var e = this,
            t = e.a * e.d - e.b * e.c;
          return new p(e.d / t, -e.b / t, -e.c / t, e.a / t, (e.c * e.f - e.d * e.e) / t, (e.b * e.e - e.a * e.f) / t)
        }, e.clone = function () {
          return new p(this.a, this.b, this.c, this.d, this.e, this.f)
        }, e.translate = function (e, t) {
          return this.add(1, 0, 0, 1, e, t)
        }, e.scale = function (e, t, n, i) {
          return null == t && (t = e), (n || i) && this.add(1, 0, 0, 1, n, i), this.add(e, 0, 0, t, 0, 0), (n || i) && this.add(1, 0, 0, 1, -n, -i), this
        }, e.rotate = function (e, t, n) {
          e = s.rad(e), t = t || 0, n = n || 0;
          var i = +l.cos(e).toFixed(9),
            r = +l.sin(e).toFixed(9);
          return this.add(i, r, -r, i, t, n), this.add(1, 0, 0, 1, -t, -n)
        }, e.x = function (e, t) {
          return e * this.a + t * this.c + this.e
        }, e.y = function (e, t) {
          return e * this.b + t * this.d + this.f
        }, e.get = function (e) {
          return +this[t.fromCharCode(97 + e)].toFixed(4)
        }, e.toString = function () {
          return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")"
        }, e.offset = function () {
          return [this.e.toFixed(4), this.f.toFixed(4)]
        }, e.determinant = function () {
          return this.a * this.d - this.b * this.c
        }, e.split = function () {
          var e = {};
          e.dx = this.e, e.dy = this.f;
          var t = [
            [this.a, this.c],
            [this.b, this.d]
          ];
          e.scalex = l.sqrt(r(t[0])), a(t[0]), e.shear = t[0][0] * t[1][0] + t[0][1] * t[1][1], t[1] = [t[1][0] - t[0][0] * e.shear, t[1][1] - t[0][1] * e.shear], e.scaley = l.sqrt(r(t[1])), a(t[1]), e.shear /= e.scaley, this.determinant() < 0 && (e.scalex = -e.scalex);
          var n = -t[0][1],
            i = t[1][1];
          return i < 0 ? (e.rotate = s.deg(l.acos(i)), n < 0 && (e.rotate = 360 - e.rotate)) : e.rotate = s.deg(l.asin(n)), e.isSimple = !(+e.shear.toFixed(9) || e.scalex.toFixed(9) != e.scaley.toFixed(9) && e.rotate), e.isSuperSimple = !+e.shear.toFixed(9) && e.scalex.toFixed(9) == e.scaley.toFixed(9) && !e.rotate, e.noRotation = !+e.shear.toFixed(9) && !e.rotate, e
        }, e.toTransformString = function (e) {
          var t = e || this.split();
          return +t.shear.toFixed(9) ? "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)] : (t.scalex = +t.scalex.toFixed(4), t.scaley = +t.scaley.toFixed(4), t.rotate = +t.rotate.toFixed(4), (t.dx || t.dy ? "t" + [+t.dx.toFixed(4), +t.dy.toFixed(4)] : "") + (1 != t.scalex || 1 != t.scaley ? "s" + [t.scalex, t.scaley, 0, 0] : "") + (t.rotate ? "r" + [+t.rotate.toFixed(4), 0, 0] : ""))
        }
      }(p.prototype), s.Matrix = p, s.matrix = function (e, t, n, i, r, a) {
        return new p(e, t, n, i, r, a)
      }
    }), t.plugin(function (a, s, e, r, o) {
      function t(r) {
        return function (e) {
          if (te.stop(), e instanceof o && 1 == e.node.childNodes.length && ("radialGradient" == e.node.firstChild.tagName || "linearGradient" == e.node.firstChild.tagName || "pattern" == e.node.firstChild.tagName) && (e = e.node.firstChild, h(this).appendChild(e), e = c(e)), e instanceof s)
            if ("radialGradient" == e.type || "linearGradient" == e.type || "pattern" == e.type) {
              e.node.id || f(e.node, {
                id: e.id
              });
              var t = g(e.node.id)
            } else t = e.attr(r);
          else if ((t = a.color(e)).error) {
            var n = a(h(this).ownerSVGElement).gradient(e);
            n ? (n.node.id || f(n.node, {
              id: n.id
            }), t = g(n.node.id)) : t = e
          } else t = m(t);
          var i = {};
          i[r] = t, f(this.node, i), this.node.style[r] = ""
        }
      }

      function n(e) {
        te.stop(), e == +e && (e += "px"), this.node.style.fontSize = e
      }

      function i() {
        return te.stop(), this.node.style.fontSize
      }
      var l, u = a._.make,
        c = a._.wrap,
        d = a.is,
        h = a._.getSomeDefs,
        p = /^url\(#?([^)]+)\)$/,
        f = a._.$,
        g = a.url,
        m = String,
        v = a._.separator;
      te.on("snap.util.attr.mask", function (e) {
        if (e instanceof s || e instanceof o) {
          if (te.stop(), e instanceof o && 1 == e.node.childNodes.length && (e = e.node.firstChild, h(this).appendChild(e), e = c(e)), "mask" == e.type) var t = e;
          else(t = u("mask", h(this))).node.appendChild(e.node);
          !t.node.id && f(t.node, {
            id: t.id
          }), f(this.node, {
            mask: g(t.id)
          })
        }
      }), l = function (e) {
        if (e instanceof s || e instanceof o) {
          if (te.stop(), "clipPath" == e.type) var t = e;
          else(t = u("clipPath", h(this))).node.appendChild(e.node), !t.node.id && f(t.node, {
            id: t.id
          });
          f(this.node, {
            "clip-path": g(t.id)
          })
        }
      }, te.on("snap.util.attr.clip", l), te.on("snap.util.attr.clip-path", l), te.on("snap.util.attr.clipPath", l), te.on("snap.util.attr.fill", t("fill")), te.on("snap.util.attr.stroke", t("stroke"));
      var y = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
      te.on("snap.util.grad.parse", function (e) {
          var t = (e = m(e)).match(y);
          if (!t) return null;
          var n = t[1],
            i = t[2],
            r = t[3];
          return 1 == (i = i.split(/\s*,\s*/).map(function (e) {
            return +e == e ? +e : e
          })).length && 0 == i[0] && (i = []), {
            type: n,
            params: i,
            stops: r = (r = r.split("-")).map(function (e) {
              var t = {
                color: (e = e.split(":"))[0]
              };
              return e[1] && (t.offset = parseFloat(e[1])), t
            })
          }
        }), te.on("snap.util.attr.d", function (e) {
          te.stop(), d(e, "array") && d(e[0], "array") && (e = a.path.toString.call(e)), (e = m(e)).match(/[ruo]/i) && (e = a.path.toAbsolute(e)), f(this.node, {
            d: e
          })
        })(-1), te.on("snap.util.attr.#text", function (e) {
          te.stop(), e = m(e);
          for (var t = r.doc.createTextNode(e); this.node.firstChild;) this.node.removeChild(this.node.firstChild);
          this.node.appendChild(t)
        })(-1), te.on("snap.util.attr.path", function (e) {
          te.stop(), this.attr({
            d: e
          })
        })(-1), te.on("snap.util.attr.class", function (e) {
          te.stop(), this.node.className.baseVal = e
        })(-1), te.on("snap.util.attr.viewBox", function (e) {
          var t;
          t = d(e, "object") && "x" in e ? [e.x, e.y, e.width, e.height].join(" ") : d(e, "array") ? e.join(" ") : e, f(this.node, {
            viewBox: t
          }), te.stop()
        })(-1), te.on("snap.util.attr.transform", function (e) {
          this.transform(e), te.stop()
        })(-1), te.on("snap.util.attr.r", function (e) {
          "rect" == this.type && (te.stop(), f(this.node, {
            rx: e,
            ry: e
          }))
        })(-1), te.on("snap.util.attr.textpath", function (e) {
          if (te.stop(), "text" == this.type) {
            var t, n, i;
            if (!e && this.textPath) {
              for (n = this.textPath; n.node.firstChild;) this.node.appendChild(n.node.firstChild);
              return n.remove(), void delete this.textPath
            }
            if (d(e, "string")) {
              var r = h(this),
                a = c(r.parentNode).path(e);
              r.appendChild(a.node), t = a.id, a.attr({
                id: t
              })
            } else(e = c(e)) instanceof s && ((t = e.attr("id")) || (t = e.id, e.attr({
              id: t
            })));
            if (t)
              if (n = this.textPath, i = this.node, n) n.attr({
                "xlink:href": "#" + t
              });
              else {
                for (n = f("textPath", {
                    "xlink:href": "#" + t
                  }); i.firstChild;) n.appendChild(i.firstChild);
                i.appendChild(n), this.textPath = c(n)
              }
          }
        })(-1), te.on("snap.util.attr.text", function (e) {
          if ("text" == this.type) {
            for (var t = this.node, i = function (e) {
                var t = f("tspan");
                if (d(e, "array"))
                  for (var n = 0; n < e.length; n++) t.appendChild(i(e[n]));
                else t.appendChild(r.doc.createTextNode(e));
                return t.normalize && t.normalize(), t
              }; t.firstChild;) t.removeChild(t.firstChild);
            for (var n = i(e); n.firstChild;) t.appendChild(n.firstChild)
          }
          te.stop()
        })(-1), te.on("snap.util.attr.fontSize", n)(-1), te.on("snap.util.attr.font-size", n)(-1), te.on("snap.util.getattr.transform", function () {
          return te.stop(), this.transform()
        })(-1), te.on("snap.util.getattr.textpath", function () {
          return te.stop(), this.textPath
        })(-1),
        function () {
          function e(t) {
            return function () {
              te.stop();
              var e = r.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + t);
              return "none" == e ? e : a(r.doc.getElementById(e.match(p)[1]))
            }
          }

          function t(i) {
            return function (e) {
              te.stop();
              var t = "marker" + i.charAt(0).toUpperCase() + i.substring(1);
              if ("" != e && e) {
                if ("marker" == e.type) {
                  var n = e.node.id;
                  return n || f(e.node, {
                    id: e.id
                  }), void(this.node.style[t] = g(n))
                }
              } else this.node.style[t] = "none"
            }
          }
          te.on("snap.util.getattr.marker-end", e("end"))(-1), te.on("snap.util.getattr.markerEnd", e("end"))(-1), te.on("snap.util.getattr.marker-start", e("start"))(-1), te.on("snap.util.getattr.markerStart", e("start"))(-1), te.on("snap.util.getattr.marker-mid", e("mid"))(-1), te.on("snap.util.getattr.markerMid", e("mid"))(-1), te.on("snap.util.attr.marker-end", t("end"))(-1), te.on("snap.util.attr.markerEnd", t("end"))(-1), te.on("snap.util.attr.marker-start", t("start"))(-1), te.on("snap.util.attr.markerStart", t("start"))(-1), te.on("snap.util.attr.marker-mid", t("mid"))(-1), te.on("snap.util.attr.markerMid", t("mid"))(-1)
        }(), te.on("snap.util.getattr.r", function () {
          return "rect" == this.type && f(this.node, "rx") == f(this.node, "ry") ? (te.stop(), f(this.node, "rx")) : void 0
        })(-1), te.on("snap.util.getattr.text", function () {
          if ("text" == this.type || "tspan" == this.type) {
            te.stop();
            var e = function e(t) {
              for (var n = [], i = t.childNodes, r = 0, a = i.length; r < a; r++) {
                var s = i[r];
                3 == s.nodeType && n.push(s.nodeValue), "tspan" == s.tagName && n.push(1 == s.childNodes.length && 3 == s.firstChild.nodeType ? s.firstChild.nodeValue : e(s))
              }
              return n
            }(this.node);
            return 1 == e.length ? e[0] : e
          }
        })(-1), te.on("snap.util.getattr.#text", function () {
          return this.node.textContent
        })(-1), te.on("snap.util.getattr.viewBox", function () {
          te.stop();
          var e = f(this.node, "viewBox");
          return e ? (e = e.split(v), a._.box(+e[0], +e[1], +e[2], +e[3])) : void 0
        })(-1), te.on("snap.util.getattr.points", function () {
          var e = f(this.node, "points");
          return te.stop(), e ? e.split(v) : void 0
        })(-1), te.on("snap.util.getattr.path", function () {
          var e = f(this.node, "d");
          return te.stop(), e
        })(-1), te.on("snap.util.getattr.class", function () {
          return this.node.className.baseVal
        })(-1), te.on("snap.util.getattr.fontSize", i)(-1), te.on("snap.util.getattr.font-size", i)(-1)
    }), t.plugin(function () {
      function l(e) {
        return e
      }
      var u = {
          "+": function (e, t) {
            return e + t
          },
          "-": function (e, t) {
            return e - t
          },
          "/": function (e, t) {
            return e / t
          },
          "*": function (e, t) {
            return e * t
          }
        },
        c = String,
        d = /[a-z]+$/i,
        h = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
      te.on("snap.util.attr", function (e) {
        var t = c(e).match(h);
        if (t) {
          var n = te.nt(),
            i = n.substring(n.lastIndexOf(".") + 1),
            r = this.attr(i),
            a = {};
          te.stop();
          var s = t[3] || "",
            o = r.match(d),
            l = u[t[1]];
          if (o && o == s ? e = l(parseFloat(r), +t[2]) : (r = this.asPX(i), e = l(this.asPX(i), this.asPX(i, t[2] + s))), isNaN(r) || isNaN(e)) return;
          a[i] = e, this.attr(a)
        }
      })(-10), te.on("snap.util.equal", function (e, t) {
        var n, i = c(this.attr(e) || ""),
          r = c(t).match(h);
        if (r) {
          te.stop();
          var a = r[3] || "",
            s = i.match(d),
            o = u[r[1]];
          return s && s == a ? {
            from: parseFloat(i),
            to: o(parseFloat(i), +r[2]),
            f: (n = s, function (e) {
              return +e.toFixed(3) + n
            })
          } : {
            from: i = this.asPX(e),
            to: o(i, this.asPX(e, r[2] + a)),
            f: l
          }
        }
      })(-10)
    }), t.plugin(function (c, t, e, a) {
      var n = e.prototype,
        u = c.is;
      n.rect = function (e, t, n, i, r, a) {
        var s;
        return null == a && (a = r), u(e, "object") && "[object Object]" == e ? s = e : null != e && (s = {
          x: e,
          y: t,
          width: n,
          height: i
        }, null != r && (s.rx = r, s.ry = a)), this.el("rect", s)
      }, n.circle = function (e, t, n) {
        var i;
        return u(e, "object") && "[object Object]" == e ? i = e : null != e && (i = {
          cx: e,
          cy: t,
          r: n
        }), this.el("circle", i)
      };
      var o = function () {
        function r() {
          this.parentNode.removeChild(this)
        }
        return function (e, t) {
          var n = a.doc.createElement("img"),
            i = a.doc.body;
          n.style.cssText = "position:absolute;left:-9999em;top:-9999em", n.onload = function () {
            t.call(n), n.onload = n.onerror = null, i.removeChild(n)
          }, n.onerror = r, i.appendChild(n), n.src = e
        }
      }();
      n.image = function (e, t, n, i, r) {
          var a = this.el("image");
          if (u(e, "object") && "src" in e) a.attr(e);
          else if (null != e) {
            var s = {
              "xlink:href": e,
              preserveAspectRatio: "none"
            };
            null != t && null != n && (s.x = t, s.y = n), null != i && null != r ? (s.width = i, s.height = r) : o(e, function () {
              c._.$(a.node, {
                width: this.offsetWidth,
                height: this.offsetHeight
              })
            }), c._.$(a.node, s)
          }
          return a
        }, n.ellipse = function (e, t, n, i) {
          var r;
          return u(e, "object") && "[object Object]" == e ? r = e : null != e && (r = {
            cx: e,
            cy: t,
            rx: n,
            ry: i
          }), this.el("ellipse", r)
        }, n.path = function (e) {
          var t;
          return u(e, "object") && !u(e, "array") ? t = e : e && (t = {
            d: e
          }), this.el("path", t)
        }, n.group = n.g = function (e) {
          var t = this.el("g");
          return 1 == arguments.length && e && !e.type ? t.attr(e) : arguments.length && t.add(Array.prototype.slice.call(arguments, 0)), t
        }, n.svg = function (e, t, n, i, r, a, s, o) {
          var l = {};
          return u(e, "object") && null == t ? l = e : (null != e && (l.x = e), null != t && (l.y = t), null != n && (l.width = n), null != i && (l.height = i), null != r && null != a && null != s && null != o && (l.viewBox = [r, a, s, o])), this.el("svg", l)
        }, n.mask = function (e) {
          var t = this.el("mask");
          return 1 == arguments.length && e && !e.type ? t.attr(e) : arguments.length && t.add(Array.prototype.slice.call(arguments, 0)), t
        }, n.ptrn = function (e, t, n, i, r, a, s, o) {
          if (u(e, "object")) var l = e;
          else arguments.length ? (l = {}, null != e && (l.x = e), null != t && (l.y = t), null != n && (l.width = n), null != i && (l.height = i), null != r && null != a && null != s && null != o && (l.viewBox = [r, a, s, o])) : l = {
            patternUnits: "userSpaceOnUse"
          };
          return this.el("pattern", l)
        }, n.use = function (e) {
          return null != e ? (make("use", this.node), e instanceof t && (e.attr("id") || e.attr({
            id: ID()
          }), e = e.attr("id")), this.el("use", {
            "xlink:href": e
          })) : t.prototype.use.call(this)
        }, n.text = function (e, t, n) {
          var i = {};
          return u(e, "object") ? i = e : null != e && (i = {
            x: e,
            y: t,
            text: n || ""
          }), this.el("text", i)
        }, n.line = function (e, t, n, i) {
          var r = {};
          return u(e, "object") ? r = e : null != e && (r = {
            x1: e,
            x2: n,
            y1: t,
            y2: i
          }), this.el("line", r)
        }, n.polyline = function (e) {
          1 < arguments.length && (e = Array.prototype.slice.call(arguments, 0));
          var t = {};
          return u(e, "object") && !u(e, "array") ? t = e : null != e && (t = {
            points: e
          }), this.el("polyline", t)
        }, n.polygon = function (e) {
          1 < arguments.length && (e = Array.prototype.slice.call(arguments, 0));
          var t = {};
          return u(e, "object") && !u(e, "array") ? t = e : null != e && (t = {
            points: e
          }), this.el("polygon", t)
        },
        function () {
          function o() {
            return this.selectAll("stop")
          }

          function l(e, t) {
            var n = p("stop"),
              i = {
                offset: +t + "%"
              };
            return e = c.color(e), i["stop-color"] = e.hex, e.opacity < 1 && (i["stop-opacity"] = e.opacity), p(n, i), this.node.appendChild(n), this
          }

          function u() {
            if ("linearGradient" == this.type) {
              var e = p(this.node, "x1") || 0,
                t = p(this.node, "x2") || 1,
                n = p(this.node, "y1") || 0,
                i = p(this.node, "y2") || 0;
              return c._.box(e, n, math.abs(t - e), math.abs(i - n))
            }
            var r = this.node.cx || .5,
              a = this.node.cy || .5,
              s = this.node.r || 0;
            return c._.box(r - s, a - s, 2 * s, 2 * s)
          }

          function d(e, t, n, i, r) {
            var a = c._.make("linearGradient", e);
            return a.stops = o, a.addStop = l, a.getBBox = u, null != t && p(a.node, {
              x1: t,
              y1: n,
              x2: i,
              y2: r
            }), a
          }

          function h(e, t, n, i, r, a) {
            var s = c._.make("radialGradient", e);
            return s.stops = o, s.addStop = l, s.getBBox = u, null != t && p(s.node, {
              cx: t,
              cy: n,
              r: i
            }), null != r && null != a && p(s.node, {
              fx: r,
              fy: a
            }), s
          }
          var p = c._.$;
          n.gradient = function (e) {
            return function (e, t) {
              function n(e, t) {
                for (var n = (t - o) / (e - l), i = l; i < e; i++) a[i].offset = +(+o + n * (i - l)).toFixed(2);
                l = e, o = t
              }
              var i, r = te("snap.util.grad.parse", null, t).firstDefined();
              if (!r) return null;
              r.params.unshift(e), i = "l" == r.type.toLowerCase() ? d.apply(0, r.params) : h.apply(0, r.params), r.type != r.type.toLowerCase() && p(i.node, {
                gradientUnits: "userSpaceOnUse"
              });
              var a = r.stops,
                s = a.length,
                o = 0,
                l = 0;
              s--;
              for (var u = 0; u < s; u++) "offset" in a[u] && n(u, a[u].offset);
              for (a[s].offset = a[s].offset || 100, n(s, a[s].offset), u = 0; u <= s; u++) {
                var c = a[u];
                i.addStop(c.color, c.offset)
              }
              return i
            }(this.defs, e)
          }, n.gradientLinear = function (e, t, n, i) {
            return d(this.defs, e, t, n, i)
          }, n.gradientRadial = function (e, t, n, i, r) {
            return h(this.defs, e, t, n, i, r)
          }, n.toString = function () {
            var e, t = this.node.ownerDocument,
              n = t.createDocumentFragment(),
              i = t.createElement("div"),
              r = this.node.cloneNode(!0);
            return n.appendChild(i), i.appendChild(r), c._.$(r, {
              xmlns: "http://www.w3.org/2000/svg"
            }), e = i.innerHTML, n.removeChild(n.firstChild), e
          }, n.clear = function () {
            for (var e, t = this.node.firstChild; t;) e = t.nextSibling, "defs" != t.tagName ? t.parentNode.removeChild(t) : n.clear.call({
              node: t
            }), t = e
          }
        }()
    }), t.plugin(function (R, m) {
      function x(t) {
        var n = x.ps = x.ps || {};
        return n[t] ? n[t].sleep = 100 : n[t] = {
          sleep: 100
        }, setTimeout(function () {
          for (var e in n) n[i](e) && e != t && (n[e].sleep--, !n[e].sleep && delete n[e])
        }), n[t]
      }

      function p(e, t, n, i) {
        return null == e && (e = t = n = i = 0), null == t && (t = e.y, n = e.width, i = e.height, e = e.x), {
          x: e,
          y: t,
          width: n,
          w: n,
          height: i,
          h: i,
          x2: e + n,
          y2: t + i,
          cx: e + n / 2,
          cy: t + i / 2,
          r1: G.min(n, i) / 2,
          r2: G.max(n, i) / 2,
          r0: G.sqrt(n * n + i * i) / 2,
          path: o(e, t, n, i),
          vb: [e, t, n, i].join(" ")
        }
      }

      function b() {
        return this.join(",").replace(n, "$1")
      }

      function w(e) {
        var t = g(e);
        return t.toString = b, t
      }

      function v(e, t, n, i, r, a, s, o, l) {
        return null == l ? E(e, t, n, i, r, a, s, o) : C(e, t, n, i, r, a, s, o, function (e, t, n, i, r, a, s, o, l) {
          if (!(l < 0 || E(e, t, n, i, r, a, s, o) < l)) {
            var u, c = .5,
              d = 1 - c;
            for (u = E(e, t, n, i, r, a, s, o, d); .01 < W(u - l);) u = E(e, t, n, i, r, a, s, o, d += (u < l ? 1 : -1) * (c /= 2));
            return d
          }
        }(e, t, n, i, r, a, s, o, l))
      }

      function e(p, f) {
        function g(e) {
          return +(+e).toFixed(3)
        }
        return R._.cacher(function (e, t, n) {
          e instanceof m && (e = e.attr("d"));
          for (var i, r, a, s, o, l = "", u = {}, c = 0, d = 0, h = (e = D(e)).length; d < h; d++) {
            if ("M" == (a = e[d])[0]) i = +a[1], r = +a[2];
            else {
              if (t < c + (s = v(i, r, a[1], a[2], a[3], a[4], a[5], a[6]))) {
                if (f && !u.start) {
                  if (l += ["C" + g((o = v(i, r, a[1], a[2], a[3], a[4], a[5], a[6], t - c)).start.x), g(o.start.y), g(o.m.x), g(o.m.y), g(o.x), g(o.y)], n) return l;
                  u.start = l, l = ["M" + g(o.x), g(o.y) + "C" + g(o.n.x), g(o.n.y), g(o.end.x), g(o.end.y), g(a[5]), g(a[6])].join(), c += s, i = +a[5], r = +a[6];
                  continue
                }
                if (!p && !f) return v(i, r, a[1], a[2], a[3], a[4], a[5], a[6], t - c)
              }
              c += s, i = +a[5], r = +a[6]
            }
            l += a.shift() + a
          }
          return u.end = l, p ? c : f ? u : C(i, r, a[0], a[1], a[2], a[3], a[4], a[5], 1)
        }, null, R._.clone)
      }

      function C(e, t, n, i, r, a, s, o, l) {
        var u = 1 - l,
          c = j(u, 3),
          d = j(u, 2),
          h = l * l,
          p = h * l,
          f = e + 2 * l * (n - e) + h * (r - 2 * n + e),
          g = t + 2 * l * (i - t) + h * (a - 2 * i + t),
          m = n + 2 * l * (r - n) + h * (s - 2 * r + n),
          v = i + 2 * l * (a - i) + h * (o - 2 * a + i);
        return {
          x: c * e + 3 * d * l * n + 3 * u * l * l * r + p * s,
          y: c * t + 3 * d * l * i + 3 * u * l * l * a + p * o,
          m: {
            x: f,
            y: g
          },
          n: {
            x: m,
            y: v
          },
          start: {
            x: u * e + l * n,
            y: u * t + l * i
          },
          end: {
            x: u * r + l * s,
            y: u * a + l * o
          },
          alpha: 90 - 180 * G.atan2(f - m, g - v) / X
        }
      }

      function S(e, t, n, i, r, a, s, o) {
        R.is(e, "array") || (e = [e, t, n, i, r, a, s, o]);
        var l = f.apply(null, e);
        return p(l.min.x, l.min.y, l.max.x - l.min.x, l.max.y - l.min.y)
      }

      function r(e, t, n) {
        return t >= e.x && t <= e.x + e.width && n >= e.y && n <= e.y + e.height
      }

      function T(e, t) {
        return e = p(e), r(t = p(t), e.x, e.y) || r(t, e.x2, e.y) || r(t, e.x, e.y2) || r(t, e.x2, e.y2) || r(e, t.x, t.y) || r(e, t.x2, t.y) || r(e, t.x, t.y2) || r(e, t.x2, t.y2) || (e.x < t.x2 && e.x > t.x || t.x < e.x2 && t.x > e.x) && (e.y < t.y2 && e.y > t.y || t.y < e.y2 && t.y > e.y)
      }

      function y(e, t, n, i, r) {
        return e * (e * (-3 * t + 9 * n - 9 * i + 3 * r) + 6 * t - 12 * n + 6 * i) - 3 * t + 3 * n
      }

      function E(e, t, n, i, r, a, s, o, l) {
        null == l && (l = 1);
        for (var u = (l = 1 < l ? 1 : l < 0 ? 0 : l) / 2, c = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], d = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], h = 0, p = 0; p < 12; p++) {
          var f = u * c[p] + u,
            g = y(f, e, n, r, s),
            m = y(f, t, i, a, o),
            v = g * g + m * m;
          h += d[p] * G.sqrt(v)
        }
        return u * h
      }

      function k(e, t, n, i, r, a, s, o) {
        if (!(I(e, n) < _(r, s) || _(e, n) > I(r, s) || I(t, i) < _(a, o) || _(t, i) > I(a, o))) {
          var l = (e - n) * (a - o) - (t - i) * (r - s);
          if (l) {
            var u = ((e * i - t * n) * (r - s) - (e - n) * (r * o - a * s)) / l,
              c = ((e * i - t * n) * (a - o) - (t - i) * (r * o - a * s)) / l,
              d = +u.toFixed(2),
              h = +c.toFixed(2);
            if (!(d < +_(e, n).toFixed(2) || d > +I(e, n).toFixed(2) || d < +_(r, s).toFixed(2) || d > +I(r, s).toFixed(2) || h < +_(t, i).toFixed(2) || h > +I(t, i).toFixed(2) || h < +_(a, o).toFixed(2) || h > +I(a, o).toFixed(2))) return {
              x: u,
              y: c
            }
          }
        }
      }

      function M(e, t, n) {
        if (!T(S(e), S(t))) return n ? 0 : [];
        for (var i = ~~(E.apply(0, e) / 8), r = ~~(E.apply(0, t) / 8), a = [], s = [], o = {}, l = n ? 0 : [], u = 0; u < i + 1; u++) {
          var c = C.apply(0, e.concat(u / i));
          a.push({
            x: c.x,
            y: c.y,
            t: u / i
          })
        }
        for (u = 0; u < r + 1; u++) c = C.apply(0, t.concat(u / r)), s.push({
          x: c.x,
          y: c.y,
          t: u / r
        });
        for (u = 0; u < i; u++)
          for (var d = 0; d < r; d++) {
            var h = a[u],
              p = a[u + 1],
              f = s[d],
              g = s[d + 1],
              m = W(p.x - h.x) < .001 ? "y" : "x",
              v = W(g.x - f.x) < .001 ? "y" : "x",
              y = k(h.x, h.y, p.x, p.y, f.x, f.y, g.x, g.y);
            if (y) {
              if (o[y.x.toFixed(4)] == y.y.toFixed(4)) continue;
              o[y.x.toFixed(4)] = y.y.toFixed(4);
              var b = h.t + W((y[m] - h[m]) / (p[m] - h[m])) * (p.t - h.t),
                x = f.t + W((y[v] - f[v]) / (g[v] - f[v])) * (g.t - f.t);
              0 <= b && b <= 1 && 0 <= x && x <= 1 && (n ? l++ : l.push({
                x: y.x,
                y: y.y,
                t1: b,
                t2: x
              }))
            }
          }
        return l
      }

      function a(e, t, n) {
        e = D(e), t = D(t);
        for (var i, r, a, s, o, l, u, c, d, h, p = n ? 0 : [], f = 0, g = e.length; f < g; f++) {
          var m = e[f];
          if ("M" == m[0]) i = o = m[1], r = l = m[2];
          else {
            "C" == m[0] ? (i = (d = [i, r].concat(m.slice(1)))[6], r = d[7]) : (d = [i, r, i, r, o, l, o, l], i = o, r = l);
            for (var v = 0, y = t.length; v < y; v++) {
              var b = t[v];
              if ("M" == b[0]) a = u = b[1], s = c = b[2];
              else {
                "C" == b[0] ? (a = (h = [a, s].concat(b.slice(1)))[6], s = h[7]) : (h = [a, s, a, s, u, c, u, c], a = u, s = c);
                var x = M(d, h, n);
                if (n) p += x;
                else {
                  for (var w = 0, C = x.length; w < C; w++) x[w].segment1 = f, x[w].segment2 = v, x[w].bez1 = d, x[w].bez2 = h;
                  p = p.concat(x)
                }
              }
            }
          }
        }
        return p
      }

      function s(e) {
        var t = x(e);
        if (t.bbox) return g(t.bbox);
        if (!e) return p();
        for (var n, i = 0, r = 0, a = [], s = [], o = 0, l = (e = D(e)).length; o < l; o++)
          if ("M" == (n = e[o])[0]) i = n[1], r = n[2], a.push(i), s.push(r);
          else {
            var u = f(i, r, n[1], n[2], n[3], n[4], n[5], n[6]);
            a = a.concat(u.min.x, u.max.x), s = s.concat(u.min.y, u.max.y), i = n[5], r = n[6]
          }
        var c = _.apply(0, a),
          d = _.apply(0, s),
          h = p(c, d, I.apply(0, a) - c, I.apply(0, s) - d);
        return t.bbox = g(h), h
      }

      function o(e, t, n, i, r) {
        if (r) return [
          ["M", +e + +r, t],
          ["l", n - 2 * r, 0],
          ["a", r, r, 0, 0, 1, r, r],
          ["l", 0, i - 2 * r],
          ["a", r, r, 0, 0, 1, -r, r],
          ["l", 2 * r - n, 0],
          ["a", r, r, 0, 0, 1, -r, -r],
          ["l", 0, 2 * r - i],
          ["a", r, r, 0, 0, 1, r, -r],
          ["z"]
        ];
        var a = [
          ["M", e, t],
          ["l", n, 0],
          ["l", 0, i],
          ["l", -n, 0],
          ["z"]
        ];
        return a.toString = b, a
      }

      function P(e, t, n, i, r) {
        if (null == r && null == i && (i = n), e = +e, t = +t, n = +n, i = +i, null != r) var a = Math.PI / 180,
          s = e + n * Math.cos(-i * a),
          o = e + n * Math.cos(-r * a),
          l = [
            ["M", s, t + n * Math.sin(-i * a)],
            ["A", n, n, 0, +(180 < r - i), 0, o, t + n * Math.sin(-r * a)]
          ];
        else l = [
          ["M", e, t],
          ["m", 0, -i],
          ["a", n, i, 0, 1, 1, 0, 2 * i],
          ["a", n, i, 0, 1, 1, 0, -2 * i],
          ["z"]
        ];
        return l.toString = b, l
      }

      function A(e) {
        var t = x(e);
        if (t.abs) return w(t.abs);
        if (N(e, "array") && N(e && e[0], "array") || (e = R.parsePathString(e)), !e || !e.length) return [
          ["M", 0, 0]
        ];
        var n, i = [],
          r = 0,
          a = 0,
          s = 0,
          o = 0,
          l = 0;
        "M" == e[0][0] && (s = r = +e[0][1], o = a = +e[0][2], l++, i[0] = ["M", r, a]);
        for (var u, c, d = 3 == e.length && "M" == e[0][0] && "R" == e[1][0].toUpperCase() && "Z" == e[2][0].toUpperCase(), h = l, p = e.length; h < p; h++) {
          if (i.push(u = []), (n = (c = e[h])[0]) != n.toUpperCase()) switch (u[0] = n.toUpperCase(), u[0]) {
            case "A":
              u[1] = c[1], u[2] = c[2], u[3] = c[3], u[4] = c[4], u[5] = c[5], u[6] = +c[6] + r, u[7] = +c[7] + a;
              break;
            case "V":
              u[1] = +c[1] + a;
              break;
            case "H":
              u[1] = +c[1] + r;
              break;
            case "R":
              for (var f = [r, a].concat(c.slice(1)), g = 2, m = f.length; g < m; g++) f[g] = +f[g] + r, f[++g] = +f[g] + a;
              i.pop(), i = i.concat(F(f, d));
              break;
            case "O":
              i.pop(), (f = P(r, a, c[1], c[2])).push(f[0]), i = i.concat(f);
              break;
            case "U":
              i.pop(), i = i.concat(P(r, a, c[1], c[2], c[3])), u = ["U"].concat(i[i.length - 1].slice(-2));
              break;
            case "M":
              s = +c[1] + r, o = +c[2] + a;
            default:
              for (g = 1, m = c.length; g < m; g++) u[g] = +c[g] + (g % 2 ? r : a)
            } else if ("R" == n) f = [r, a].concat(c.slice(1)), i.pop(), i = i.concat(F(f, d)), u = ["R"].concat(c.slice(-2));
            else if ("O" == n) i.pop(), (f = P(r, a, c[1], c[2])).push(f[0]), i = i.concat(f);
          else if ("U" == n) i.pop(), i = i.concat(P(r, a, c[1], c[2], c[3])), u = ["U"].concat(i[i.length - 1].slice(-2));
          else
            for (var v = 0, y = c.length; v < y; v++) u[v] = c[v];
          if ("O" != (n = n.toUpperCase())) switch (u[0]) {
          case "Z":
            r = +s, a = +o;
            break;
          case "H":
            r = u[1];
            break;
          case "V":
            a = u[1];
            break;
          case "M":
            s = u[u.length - 2], o = u[u.length - 1];
          default:
            r = u[u.length - 2], a = u[u.length - 1]
          }
        }
        return i.toString = b, t.abs = w(i), i
      }

      function L(e, t, n, i) {
        return [e, t, n, i, n, i]
      }

      function z(e, t, n, i, r, a) {
        return [1 / 3 * e + 2 / 3 * n, 1 / 3 * t + 2 / 3 * i, 1 / 3 * r + 2 / 3 * n, 1 / 3 * a + 2 / 3 * i, r, a]
      }

      function f(e, t, n, i, r, a, s, o) {
        for (var l, u, c, d, h, p, f, g, m = [], v = [
            [],
            []
          ], y = 0; y < 2; ++y)
          if (0 == y ? (u = 6 * e - 12 * n + 6 * r, l = -3 * e + 9 * n - 9 * r + 3 * s, c = 3 * n - 3 * e) : (u = 6 * t - 12 * i + 6 * a, l = -3 * t + 9 * i - 9 * a + 3 * o, c = 3 * i - 3 * t), W(l) < 1e-12) {
            if (W(u) < 1e-12) continue;
            0 < (d = -c / u) && d < 1 && m.push(d)
          } else f = u * u - 4 * c * l, g = G.sqrt(f), f < 0 || (0 < (h = (-u + g) / (2 * l)) && h < 1 && m.push(h), 0 < (p = (-u - g) / (2 * l)) && p < 1 && m.push(p));
        for (var b, x = m.length, w = x; x--;) b = 1 - (d = m[x]), v[0][x] = b * b * b * e + 3 * b * b * d * n + 3 * b * d * d * r + d * d * d * s, v[1][x] = b * b * b * t + 3 * b * b * d * i + 3 * b * d * d * a + d * d * d * o;
        return v[0][w] = e, v[1][w] = t, v[0][w + 1] = s, v[1][w + 1] = o, v[0].length = v[1].length = w + 2, {
          min: {
            x: _.apply(0, v[0]),
            y: _.apply(0, v[1])
          },
          max: {
            x: I.apply(0, v[0]),
            y: I.apply(0, v[1])
          }
        }
      }

      function D(e, t) {
        var n = !t && x(e);
        if (!t && n.curve) return w(n.curve);
        for (var a = A(e), s = t && A(t), i = {
            x: 0,
            y: 0,
            bx: 0,
            by: 0,
            X: 0,
            Y: 0,
            qx: null,
            qy: null
          }, r = {
            x: 0,
            y: 0,
            bx: 0,
            by: 0,
            X: 0,
            Y: 0,
            qx: null,
            qy: null
          }, o = function (e, t, n) {
            var i, r;
            if (!e) return ["C", t.x, t.y, t.x, t.y, t.x, t.y];
            switch (!(e[0] in {
              T: 1,
              Q: 1
            }) && (t.qx = t.qy = null), e[0]) {
            case "M":
              t.X = e[1], t.Y = e[2];
              break;
            case "A":
              e = ["C"].concat(function e(t, n, i, r, a, s, o, l, u, c) {
                var d, h = 120 * X / 180,
                  p = X / 180 * (+a || 0),
                  f = [],
                  g = R._.cacher(function (e, t, n) {
                    return {
                      x: e * G.cos(n) - t * G.sin(n),
                      y: e * G.sin(n) + t * G.cos(n)
                    }
                  });
                if (c) T = c[0], E = c[1], C = c[2], S = c[3];
                else {
                  t = (d = g(t, n, -p)).x, n = d.y, l = (d = g(l, u, -p)).x, u = d.y;
                  var m = (G.cos(X / 180 * a), G.sin(X / 180 * a), (t - l) / 2),
                    v = (n - u) / 2,
                    y = m * m / (i * i) + v * v / (r * r);
                  1 < y && (i *= y = G.sqrt(y), r *= y);
                  var b = i * i,
                    x = r * r,
                    w = (s == o ? -1 : 1) * G.sqrt(W((b * x - b * v * v - x * m * m) / (b * v * v + x * m * m))),
                    C = w * i * v / r + (t + l) / 2,
                    S = w * -r * m / i + (n + u) / 2,
                    T = G.asin(((n - S) / r).toFixed(9)),
                    E = G.asin(((u - S) / r).toFixed(9));
                  (T = t < C ? X - T : T) < 0 && (T = 2 * X + T), (E = l < C ? X - E : E) < 0 && (E = 2 * X + E), o && E < T && (T -= 2 * X), !o && T < E && (E -= 2 * X)
                }
                var k = E - T;
                if (W(k) > h) {
                  var M = E,
                    P = l,
                    A = u;
                  E = T + h * (o && T < E ? 1 : -1), f = e(l = C + i * G.cos(E), u = S + r * G.sin(E), i, r, a, 0, o, P, A, [E, M, C, S])
                }
                k = E - T;
                var L = G.cos(T),
                  z = G.sin(T),
                  D = G.cos(E),
                  F = G.sin(E),
                  N = G.tan(k / 4),
                  O = 4 / 3 * i * N,
                  _ = 4 / 3 * r * N,
                  I = [t, n],
                  j = [t + O * z, n - _ * L],
                  $ = [l + O * F, u - _ * D],
                  H = [l, u];
                if (j[0] = 2 * I[0] - j[0], j[1] = 2 * I[1] - j[1], c) return [j, $, H].concat(f);
                for (var q = [], V = 0, B = (f = [j, $, H].concat(f).join().split(",")).length; V < B; V++) q[V] = V % 2 ? g(f[V - 1], f[V], p).y : g(f[V], f[V + 1], p).x;
                return q
              }.apply(0, [t.x, t.y].concat(e.slice(1))));
              break;
            case "S":
              "C" == n || "S" == n ? (i = 2 * t.x - t.bx, r = 2 * t.y - t.by) : (i = t.x, r = t.y), e = ["C", i, r].concat(e.slice(1));
              break;
            case "T":
              "Q" == n || "T" == n ? (t.qx = 2 * t.x - t.qx, t.qy = 2 * t.y - t.qy) : (t.qx = t.x, t.qy = t.y), e = ["C"].concat(z(t.x, t.y, t.qx, t.qy, e[1], e[2]));
              break;
            case "Q":
              t.qx = e[1], t.qy = e[2], e = ["C"].concat(z(t.x, t.y, e[1], e[2], e[3], e[4]));
              break;
            case "L":
              e = ["C"].concat(L(t.x, t.y, e[1], e[2]));
              break;
            case "H":
              e = ["C"].concat(L(t.x, t.y, e[1], t.y));
              break;
            case "V":
              e = ["C"].concat(L(t.x, t.y, t.x, e[1]));
              break;
            case "Z":
              e = ["C"].concat(L(t.x, t.y, t.X, t.Y))
            }
            return e
          }, l = function (e, t) {
            if (7 < e[t].length) {
              e[t].shift();
              for (var n = e[t]; n.length;) c[t] = "A", s && (d[t] = "A"), e.splice(t++, 0, ["C"].concat(n.splice(0, 6)));
              e.splice(t, 1), g = I(a.length, s && s.length || 0)
            }
          }, u = function (e, t, n, i, r) {
            e && t && "M" == e[r][0] && "M" != t[r][0] && (t.splice(r, 0, ["M", i.x, i.y]), n.bx = 0, n.by = 0, n.x = e[r][1], n.y = e[r][2], g = I(a.length, s && s.length || 0))
          }, c = [], d = [], h = "", p = "", f = 0, g = I(a.length, s && s.length || 0); f < g; f++) {
          a[f] && (h = a[f][0]), "C" != h && (c[f] = h, f && (p = c[f - 1])), a[f] = o(a[f], i, p), "A" != c[f] && "C" == h && (c[f] = "C"), l(a, f), s && (s[f] && (h = s[f][0]), "C" != h && (d[f] = h, f && (p = d[f - 1])), s[f] = o(s[f], r, p), "A" != d[f] && "C" == h && (d[f] = "C"), l(s, f)), u(a, s, i, r, f), u(s, a, r, i, f);
          var m = a[f],
            v = s && s[f],
            y = m.length,
            b = s && v.length;
          i.x = m[y - 2], i.y = m[y - 1], i.bx = O(m[y - 4]) || i.x, i.by = O(m[y - 3]) || i.y, r.bx = s && (O(v[b - 4]) || r.x), r.by = s && (O(v[b - 3]) || r.y), r.x = s && v[b - 2], r.y = s && v[b - 1]
        }
        return s || (n.curve = w(a)), s ? [a, s] : a
      }

      function F(e, t) {
        for (var n = [], i = 0, r = e.length; i < r - 2 * !t; i += 2) {
          var a = [{
            x: +e[i - 2],
            y: +e[i - 1]
          }, {
            x: +e[i],
            y: +e[i + 1]
          }, {
            x: +e[i + 2],
            y: +e[i + 3]
          }, {
            x: +e[i + 4],
            y: +e[i + 5]
          }];
          t ? i ? r - 4 == i ? a[3] = {
            x: +e[0],
            y: +e[1]
          } : r - 2 == i && (a[2] = {
            x: +e[0],
            y: +e[1]
          }, a[3] = {
            x: +e[2],
            y: +e[3]
          }) : a[0] = {
            x: +e[r - 2],
            y: +e[r - 1]
          } : r - 4 == i ? a[3] = a[2] : i || (a[0] = {
            x: +e[i],
            y: +e[i + 1]
          }), n.push(["C", (-a[0].x + 6 * a[1].x + a[2].x) / 6, (-a[0].y + 6 * a[1].y + a[2].y) / 6, (a[1].x + 6 * a[2].x - a[3].x) / 6, (a[1].y + 6 * a[2].y - a[3].y) / 6, a[2].x, a[2].y])
        }
        return n
      }
      var t = m.prototype,
        N = R.is,
        g = R._.clone,
        i = "hasOwnProperty",
        n = /,?([a-z]),?/gi,
        O = parseFloat,
        G = Math,
        X = G.PI,
        _ = G.min,
        I = G.max,
        j = G.pow,
        W = G.abs,
        l = e(1),
        u = e(),
        c = e(0, 1),
        d = R._unit2px,
        h = {
          path: function (e) {
            return e.attr("path")
          },
          circle: function (e) {
            var t = d(e);
            return P(t.cx, t.cy, t.r)
          },
          ellipse: function (e) {
            var t = d(e);
            return P(t.cx || 0, t.cy || 0, t.rx, t.ry)
          },
          rect: function (e) {
            var t = d(e);
            return o(t.x || 0, t.y || 0, t.width, t.height, t.rx, t.ry)
          },
          image: function (e) {
            var t = d(e);
            return o(t.x || 0, t.y || 0, t.width, t.height)
          },
          line: function (e) {
            return "M" + [e.attr("x1") || 0, e.attr("y1") || 0, e.attr("x2"), e.attr("y2")]
          },
          polyline: function (e) {
            return "M" + e.attr("points")
          },
          polygon: function (e) {
            return "M" + e.attr("points") + "z"
          },
          deflt: function (e) {
            var t = e.node.getBBox();
            return o(t.x, t.y, t.width, t.height)
          }
        };
      R.path = x, R.path.getTotalLength = l, R.path.getPointAtLength = u, R.path.getSubpath = function (e, t, n) {
        if (this.getTotalLength(e) - n < 1e-6) return c(e, t).end;
        var i = c(e, n, 1);
        return t ? c(i, t).end : i
      }, t.getTotalLength = function () {
        return this.node.getTotalLength ? this.node.getTotalLength() : void 0
      }, t.getPointAtLength = function (e) {
        return u(this.attr("d"), e)
      }, t.getSubpath = function (e, t) {
        return R.path.getSubpath(this.attr("d"), e, t)
      }, R._.box = p, R.path.findDotsAtSegment = C, R.path.bezierBBox = S, R.path.isPointInsideBBox = r, R.path.isBBoxIntersect = T, R.path.intersection = function (e, t) {
        return a(e, t)
      }, R.path.intersectionNumber = function (e, t) {
        return a(e, t, 1)
      }, R.path.isPointInside = function (e, t, n) {
        var i = s(e);
        return r(i, t, n) && a(e, [
          ["M", t, n],
          ["H", i.x2 + 10]
        ], 1) % 2 == 1
      }, R.path.getBBox = s, R.path.get = h, R.path.toRelative = function (e) {
        var t = x(e),
          n = String.prototype.toLowerCase;
        if (t.rel) return w(t.rel);
        R.is(e, "array") && R.is(e && e[0], "array") || (e = R.parsePathString(e));
        var i = [],
          r = 0,
          a = 0,
          s = 0,
          o = 0,
          l = 0;
        "M" == e[0][0] && (s = r = e[0][1], o = a = e[0][2], l++, i.push(["M", r, a]));
        for (var u = l, c = e.length; u < c; u++) {
          var d = i[u] = [],
            h = e[u];
          if (h[0] != n.call(h[0])) switch (d[0] = n.call(h[0]), d[0]) {
          case "a":
            d[1] = h[1], d[2] = h[2], d[3] = h[3], d[4] = h[4], d[5] = h[5], d[6] = +(h[6] - r).toFixed(3), d[7] = +(h[7] - a).toFixed(3);
            break;
          case "v":
            d[1] = +(h[1] - a).toFixed(3);
            break;
          case "m":
            s = h[1], o = h[2];
          default:
            for (var p = 1, f = h.length; p < f; p++) d[p] = +(h[p] - (p % 2 ? r : a)).toFixed(3)
          } else {
            d = i[u] = [], "m" == h[0] && (s = h[1] + r, o = h[2] + a);
            for (var g = 0, m = h.length; g < m; g++) i[u][g] = h[g]
          }
          var v = i[u].length;
          switch (i[u][0]) {
          case "z":
            r = s, a = o;
            break;
          case "h":
            r += +i[u][v - 1];
            break;
          case "v":
            a += +i[u][v - 1];
            break;
          default:
            r += +i[u][v - 2], a += +i[u][v - 1]
          }
        }
        return i.toString = b, t.rel = w(i), i
      }, R.path.toAbsolute = A, R.path.toCubic = D, R.path.map = function (e, t) {
        if (!t) return e;
        var n, i, r, a, s, o, l;
        for (r = 0, s = (e = D(e)).length; r < s; r++)
          for (a = 1, o = (l = e[r]).length; a < o; a += 2) n = t.x(l[a], l[a + 1]), i = t.y(l[a], l[a + 1]), l[a] = n, l[a + 1] = i;
        return e
      }, R.path.toString = b, R.path.clone = w
    }), t.plugin(function (c) {
      var o = Math.max,
        l = Math.min,
        u = function (e) {
          if (this.items = [], this.bindings = {}, this.length = 0, this.type = "set", e)
            for (var t = 0, n = e.length; t < n; t++) e[t] && (this[this.items.length] = this.items[this.items.length] = e[t], this.length++)
        },
        e = u.prototype;
      e.push = function () {
        for (var e, t, n = 0, i = arguments.length; n < i; n++)(e = arguments[n]) && (this[t = this.items.length] = this.items[t] = e, this.length++);
        return this
      }, e.pop = function () {
        return this.length && delete this[this.length--], this.items.pop()
      }, e.forEach = function (e, t) {
        for (var n = 0, i = this.items.length; n < i; n++)
          if (!1 === e.call(t, this.items[n], n)) return this;
        return this
      }, e.animate = function (n, i, r, e) {
        "function" != typeof r || r.length || (e = r, r = ne.linear), n instanceof c._.Animation && (e = n.callback, r = n.easing, i = r.dur, n = n.attr);
        var a = arguments;
        if (c.is(n, "array") && c.is(a[a.length - 1], "array")) var s = !0;
        var t, o = function () {
            t ? this.b = t : t = this.b
          },
          l = 0,
          u = e && function () {
            l++ == this.length && e.call(this)
          };
        return this.forEach(function (e, t) {
          te.once("snap.animcreated." + e.id, o), s ? a[t] && e.animate.apply(e, a[t]) : e.animate(n, i, r, u)
        })
      }, e.remove = function () {
        for (; this.length;) this.pop().remove();
        return this
      }, e.bind = function (e, t, n) {
        var i = {};
        if ("function" == typeof t) this.bindings[e] = t;
        else {
          var r = n || e;
          this.bindings[e] = function (e) {
            i[r] = e, t.attr(i)
          }
        }
        return this
      }, e.attr = function (e) {
        var t = {};
        for (var n in e) this.bindings[n] ? this.bindings[n](e[n]) : t[n] = e[n];
        for (var i = 0, r = this.items.length; i < r; i++) this.items[i].attr(t);
        return this
      }, e.clear = function () {
        for (; this.length;) this.pop()
      }, e.splice = function (e, t) {
        e = e < 0 ? o(this.length + e, 0) : e, t = o(0, l(this.length - e, t));
        var n, i = [],
          r = [],
          a = [];
        for (n = 2; n < arguments.length; n++) a.push(arguments[n]);
        for (n = 0; n < t; n++) r.push(this[e + n]);
        for (; n < this.length - e; n++) i.push(this[e + n]);
        var s = a.length;
        for (n = 0; n < s + i.length; n++) this.items[e + n] = this[e + n] = n < s ? a[n] : i[n - s];
        for (n = this.items.length = this.length -= t - s; this[n];) delete this[n++];
        return new u(r)
      }, e.exclude = function (e) {
        for (var t = 0, n = this.length; t < n; t++)
          if (this[t] == e) return this.splice(t, 1), !0;
        return !1
      }, e.insertAfter = function (e) {
        for (var t = this.items.length; t--;) this.items[t].insertAfter(e);
        return this
      }, e.getBBox = function () {
        for (var e = [], t = [], n = [], i = [], r = this.items.length; r--;)
          if (!this.items[r].removed) {
            var a = this.items[r].getBBox();
            e.push(a.x), t.push(a.y), n.push(a.x + a.width), i.push(a.y + a.height)
          }
        return {
          x: e = l.apply(0, e),
          y: t = l.apply(0, t),
          x2: n = o.apply(0, n),
          y2: i = o.apply(0, i),
          width: n - e,
          height: i - t,
          cx: e + (n - e) / 2,
          cy: t + (i - t) / 2
        }
      }, e.clone = function (e) {
        e = new u;
        for (var t = 0, n = this.items.length; t < n; t++) e.push(this.items[t].clone());
        return e
      }, e.toString = function () {
        return "Snapâ€˜s set"
      }, e.type = "set", c.set = function () {
        var e = new u;
        return arguments.length && e.push.apply(e, Array.prototype.slice.call(arguments, 0)), e
      }
    }), t.plugin(function (d, e) {
      function h(e) {
        var t = e[0];
        switch (t.toLowerCase()) {
        case "t":
          return [t, 0, 0];
        case "m":
          return [t, 1, 0, 0, 1, 0, 0];
        case "r":
          return 4 == e.length ? [t, 0, e[2], e[3]] : [t, 0];
        case "s":
          return 5 == e.length ? [t, 1, 1, e[3], e[4]] : 3 == e.length ? [t, 1, 1] : [t, 1]
        }
      }

      function l(e) {
        return e
      }

      function u(e) {
        return d.rgb(e[0], e[1], e[2])
      }

      function p(e) {
        var t, n, i, r, a, s, o = 0,
          l = [];
        for (t = 0, n = e.length; t < n; t++) {
          for (a = "[", s = ['"' + e[t][0] + '"'], i = 1, r = e[t].length; i < r; i++) s[i] = "val[" + o++ + "]";
          a += s + "]", l[t] = a
        }
        return Function("val", "return Snap.path.toString.call([" + l + "])")
      }

      function f(e) {
        for (var t = [], n = 0, i = e.length; n < i; n++)
          for (var r = 1, a = e[n].length; r < a; r++) t.push(e[n][r]);
        return t
      }
      var c = {},
        g = /[a-z]+$/i,
        m = String;
      c.stroke = c.fill = "colour", e.prototype.equal = function (e, t) {
        return te("snap.util.equal", this, e, t).firstDefined()
      }, te.on("snap.util.equal", function (e, t) {
        var n, i, r = m(this.attr(e) || ""),
          a = this;
        if (r == +r && t == +t) return {
          from: +r,
          to: +t,
          f: l
        };
        if ("colour" == c[e]) return n = d.color(r), i = d.color(t), {
          from: [n.r, n.g, n.b, n.opacity],
          to: [i.r, i.g, i.b, i.opacity],
          f: u
        };
        if ("transform" == e || "gradientTransform" == e || "patternTransform" == e) return t instanceof d.Matrix && (t = t.toTransformString()), d._.rgTransform.test(t) || (t = d._.svgTransform2string(t)),
          function (e, t, n) {
            t = m(t).replace(/\.{3}|\u2026/g, e), e = d.parseTransformString(e) || [], t = d.parseTransformString(t) || [];
            for (var i, r, a, s, o = Math.max(e.length, t.length), l = [], u = [], c = 0; c < o; c++) {
              if (a = e[c] || h(t[c]), s = t[c] || h(a), a[0] != s[0] || "r" == a[0].toLowerCase() && (a[2] != s[2] || a[3] != s[3]) || "s" == a[0].toLowerCase() && (a[3] != s[3] || a[4] != s[4])) {
                e = d._.transform2matrix(e, n()), t = d._.transform2matrix(t, n()), l = [
                  ["m", e.a, e.b, e.c, e.d, e.e, e.f]
                ], u = [
                  ["m", t.a, t.b, t.c, t.d, t.e, t.f]
                ];
                break
              }
              for (l[c] = [], u[c] = [], i = 0, r = Math.max(a.length, s.length); i < r; i++) i in a && (l[c][i] = a[i]), i in s && (u[c][i] = s[i])
            }
            return {
              from: f(l),
              to: f(u),
              f: p(l)
            }
          }(r, t, function () {
            return a.getBBox(1)
          });
        if ("d" == e || "path" == e) return {
          from: f((n = d.path.toCubic(r, t))[0]),
          to: f(n[1]),
          f: p(n[0])
        };
        if ("points" == e) return {
          from: n = m(r).split(d._.separator),
          to: i = m(t).split(d._.separator),
          f: function (e) {
            return e
          }
        };
        aUnit = r.match(g);
        var s, o = m(t).match(g);
        return aUnit && aUnit == o ? {
          from: parseFloat(r),
          to: parseFloat(t),
          f: (s = aUnit, function (e) {
            return +e.toFixed(3) + s
          })
        } : {
          from: this.asPX(e),
          to: this.asPX(e, t),
          f: l
        }
      })
    }), t.plugin(function (u, e, t, r) {
      for (var n = e.prototype, h = ("createTouch" in r.doc), i = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"], p = {
          mousedown: "touchstart",
          mousemove: "touchmove",
          mouseup: "touchend"
        }, f = function (e, t) {
          var n = "y" == e ? "scrollTop" : "scrollLeft",
            i = t && t.node ? t.node.ownerDocument : r.doc;
          return i[n in i.documentElement ? "documentElement" : "body"][n]
        }, o = function () {
          this.returnValue = !1
        }, g = function () {
          return this.originalEvent.preventDefault()
        }, l = function () {
          this.cancelBubble = !0
        }, m = function () {
          return this.originalEvent.stopPropagation()
        }, a = r.doc.addEventListener ? function (l, u, c, d) {
          var e = h && p[u] ? p[u] : u,
            t = function (e) {
              var t = f("y", d),
                n = f("x", d);
              if (h && p.hasOwnProperty(u))
                for (var i = 0, r = e.targetTouches && e.targetTouches.length; i < r; i++)
                  if (e.targetTouches[i].target == l || l.contains(e.targetTouches[i].target)) {
                    var a = e;
                    (e = e.targetTouches[i]).originalEvent = a, e.preventDefault = g, e.stopPropagation = m;
                    break
                  }
              var s = e.clientX + n,
                o = e.clientY + t;
              return c.call(d, e, s, o)
            };
          return u !== e && l.addEventListener(u, t, !1), l.addEventListener(e, t, !1),
            function () {
              return u !== e && l.removeEventListener(u, t, !1), l.removeEventListener(e, t, !1), !0
            }
        } : r.doc.attachEvent ? function (e, t, a, s) {
          var n = function (e) {
            e = e || s.node.ownerDocument.window.event;
            var t = f("y", s),
              n = f("x", s),
              i = e.clientX + n,
              r = e.clientY + t;
            return e.preventDefault = e.preventDefault || o, e.stopPropagation = e.stopPropagation || l, a.call(s, e, i, r)
          };
          return e.attachEvent("on" + t, n),
            function () {
              return e.detachEvent("on" + t, n), !0
            }
        } : void 0, c = [], d = function (e) {
          for (var t, n = e.clientX, i = e.clientY, r = f("y"), a = f("x"), s = c.length; s--;) {
            if (t = c[s], h) {
              for (var o, l = e.touches && e.touches.length; l--;)
                if ((o = e.touches[l]).identifier == t.el._drag.id || t.el.node.contains(o.target)) {
                  n = o.clientX, i = o.clientY, (e.originalEvent ? e.originalEvent : e).preventDefault();
                  break
                }
            } else e.preventDefault();
            var u = t.el.node;
            u.nextSibling, u.parentNode, u.style.display, n += a, i += r, te("snap.drag.move." + t.el.id, t.move_scope || t.el, n - t.el._drag.x, i - t.el._drag.y, n, i, e)
          }
        }, v = function (e) {
          u.unmousemove(d).unmouseup(v);
          for (var t, n = c.length; n--;)(t = c[n]).el._drag = {}, te("snap.drag.end." + t.el.id, t.end_scope || t.start_scope || t.move_scope || t.el, e);
          c = []
        }, s = i.length; s--;) ! function (i) {
        u[i] = n[i] = function (e, t) {
          return u.is(e, "function") && (this.events = this.events || [], this.events.push({
            name: i,
            f: e,
            unbind: a(this.node || document, i, e, t || this)
          })), this
        }, u["un" + i] = n["un" + i] = function (e) {
          for (var t = this.events || [], n = t.length; n--;)
            if (t[n].name == i && (t[n].f == e || !e)) return t[n].unbind(), t.splice(n, 1), !t.length && delete this.events, this;
          return this
        }
      }(i[s]);
      n.hover = function (e, t, n, i) {
        return this.mouseover(e, n).mouseout(t, i || n)
      }, n.unhover = function (e, t) {
        return this.unmouseover(e).unmouseout(t)
      };
      var y = [];
      n.drag = function (i, r, a, s, o, l) {
        function e(e, t, n) {
          (e.originalEvent || e).preventDefault(), this._drag.x = t, this._drag.y = n, this._drag.id = e.identifier, !c.length && u.mousemove(d).mouseup(v), c.push({
            el: this,
            move_scope: s,
            start_scope: o,
            end_scope: l
          }), r && te.on("snap.drag.start." + this.id, r), i && te.on("snap.drag.move." + this.id, i), a && te.on("snap.drag.end." + this.id, a), te("snap.drag.start." + this.id, o || s || this, t, n, e)
        }
        var n;
        return arguments.length ? (this._drag = {}, y.push({
          el: this,
          start: e
        }), this.mousedown(e), this) : this.drag(function (e, t) {
          this.attr({
            transform: n + (n ? "T" : "t") + [e, t]
          })
        }, function () {
          n = this.transform().local
        })
      }, n.undrag = function () {
        for (var e = y.length; e--;) y[e].el == this && (this.unmousedown(y[e].start), y.splice(e, 1), te.unbind("snap.drag.*." + this.id));
        return !y.length && u.unmousemove(d).unmouseup(v), this
      }
    }), t.plugin(function (a, s, e) {
      var t = (s.prototype, e.prototype),
        n = /^\s*url\((.+)\)/,
        o = String,
        l = a._.$;
      a.filter = {}, t.filter = function (e) {
        var t = this;
        "svg" != t.type && (t = t.paper);
        var n = a.parse(o(e)),
          i = a._.id(),
          r = (t.node.offsetWidth, t.node.offsetHeight, l("filter"));
        return l(r, {
          id: i,
          filterUnits: "userSpaceOnUse"
        }), r.appendChild(n.node), t.defs.appendChild(r), new s(r)
      }, te.on("snap.util.getattr.filter", function () {
        te.stop();
        var e = l(this.node, "filter");
        if (e) {
          var t = o(e).match(n);
          return t && a.select(t[1])
        }
      }), te.on("snap.util.attr.filter", function (e) {
        if (e instanceof s && "filter" == e.type) {
          te.stop();
          var t = e.node.id;
          t || (l(e.node, {
            id: e.id
          }), t = e.id), l(this.node, {
            filter: a.url(t)
          })
        }
        e && "none" != e || (te.stop(), this.node.removeAttribute("filter"))
      }), a.filter.blur = function (e, t) {
        null == e && (e = 2);
        var n = null == t ? e : [e, t];
        return a.format('<feGaussianBlur stdDeviation="{def}"/>', {
          def: n
        })
      }, a.filter.blur.toString = function () {
        return this()
      }, a.filter.shadow = function (e, t, n, i, r) {
        return "string" == typeof n && (r = i = n, n = 4), "string" != typeof i && (r = i, i = "#000"), i = i || "#000", null == n && (n = 4), null == r && (r = 1), null == e && (e = 0, t = 2), null == t && (t = e), i = a.color(i), a.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
          color: i,
          dx: e,
          dy: t,
          blur: n,
          opacity: r
        })
      }, a.filter.shadow.toString = function () {
        return this()
      }, a.filter.grayscale = function (e) {
        return null == e && (e = 1), a.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
          a: .2126 + .7874 * (1 - e),
          b: .7152 - .7152 * (1 - e),
          c: .0722 - .0722 * (1 - e),
          d: .2126 - .2126 * (1 - e),
          e: .7152 + .2848 * (1 - e),
          f: .0722 - .0722 * (1 - e),
          g: .2126 - .2126 * (1 - e),
          h: .0722 + .9278 * (1 - e)
        })
      }, a.filter.grayscale.toString = function () {
        return this()
      }, a.filter.sepia = function (e) {
        return null == e && (e = 1), a.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
          a: .393 + .607 * (1 - e),
          b: .769 - .769 * (1 - e),
          c: .189 - .189 * (1 - e),
          d: .349 - .349 * (1 - e),
          e: .686 + .314 * (1 - e),
          f: .168 - .168 * (1 - e),
          g: .272 - .272 * (1 - e),
          h: .534 - .534 * (1 - e),
          i: .131 + .869 * (1 - e)
        })
      }, a.filter.sepia.toString = function () {
        return this()
      }, a.filter.saturate = function (e) {
        return null == e && (e = 1), a.format('<feColorMatrix type="saturate" values="{amount}"/>', {
          amount: 1 - e
        })
      }, a.filter.saturate.toString = function () {
        return this()
      }, a.filter.hueRotate = function (e) {
        return e = e || 0, a.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
          angle: e
        })
      }, a.filter.hueRotate.toString = function () {
        return this()
      }, a.filter.invert = function (e) {
        return null == e && (e = 1), a.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
          amount: e,
          amount2: 1 - e
        })
      }, a.filter.invert.toString = function () {
        return this()
      }, a.filter.brightness = function (e) {
        return null == e && (e = 1), a.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
          amount: e
        })
      }, a.filter.brightness.toString = function () {
        return this()
      }, a.filter.contrast = function (e) {
        return null == e && (e = 1), a.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
          amount: e,
          amount2: .5 - e / 2
        })
      }, a.filter.contrast.toString = function () {
        return this()
      }
    }), t
  }),
  function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Swiper = t()
  }(this, function () {
    "use strict";
    var g = "undefined" == typeof document ? {
        body: {},
        addEventListener: function () {},
        removeEventListener: function () {},
        activeElement: {
          blur: function () {},
          nodeName: ""
        },
        querySelector: function () {
          return null
        },
        querySelectorAll: function () {
          return []
        },
        getElementById: function () {
          return null
        },
        createEvent: function () {
          return {
            initEvent: function () {}
          }
        },
        createElement: function () {
          return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute: function () {},
            getElementsByTagName: function () {
              return []
            }
          }
        },
        location: {
          hash: ""
        }
      } : document,
      N = "undefined" == typeof window ? {
        document: g,
        navigator: {
          userAgent: ""
        },
        location: {},
        history: {},
        CustomEvent: function () {
          return this
        },
        addEventListener: function () {},
        removeEventListener: function () {},
        getComputedStyle: function () {
          return {
            getPropertyValue: function () {
              return ""
            }
          }
        },
        Image: function () {},
        Date: function () {},
        screen: {},
        setTimeout: function () {},
        clearTimeout: function () {}
      } : window,
      l = function (e) {
        for (var t = 0; t < e.length; t += 1) this[t] = e[t];
        return this.length = e.length, this
      };

    function z(e, t) {
      var n = [],
        i = 0;
      if (e && !t && e instanceof l) return e;
      if (e)
        if ("string" == typeof e) {
          var r, a, s = e.trim();
          if (0 <= s.indexOf("<") && 0 <= s.indexOf(">")) {
            var o = "div";
            for (0 === s.indexOf("<li") && (o = "ul"), 0 === s.indexOf("<tr") && (o = "tbody"), 0 !== s.indexOf("<td") && 0 !== s.indexOf("<th") || (o = "tr"), 0 === s.indexOf("<tbody") && (o = "table"), 0 === s.indexOf("<option") && (o = "select"), (a = g.createElement(o)).innerHTML = s, i = 0; i < a.childNodes.length; i += 1) n.push(a.childNodes[i])
          } else
            for (r = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || g).querySelectorAll(e.trim()) : [g.getElementById(e.trim().split("#")[1])], i = 0; i < r.length; i += 1) r[i] && n.push(r[i])
        } else if (e.nodeType || e === N || e === g) n.push(e);
      else if (0 < e.length && e[0].nodeType)
        for (i = 0; i < e.length; i += 1) n.push(e[i]);
      return new l(n)
    }

    function a(e) {
      for (var t = [], n = 0; n < e.length; n += 1) - 1 === t.indexOf(e[n]) && t.push(e[n]);
      return t
    }
    z.fn = l.prototype, z.Class = l, z.Dom7 = l;
    var t = {
      addClass: function (e) {
        if (void 0 === e) return this;
        for (var t = e.split(" "), n = 0; n < t.length; n += 1)
          for (var i = 0; i < this.length; i += 1) void 0 !== this[i].classList && this[i].classList.add(t[n]);
        return this
      },
      removeClass: function (e) {
        for (var t = e.split(" "), n = 0; n < t.length; n += 1)
          for (var i = 0; i < this.length; i += 1) void 0 !== this[i].classList && this[i].classList.remove(t[n]);
        return this
      },
      hasClass: function (e) {
        return !!this[0] && this[0].classList.contains(e)
      },
      toggleClass: function (e) {
        for (var t = e.split(" "), n = 0; n < t.length; n += 1)
          for (var i = 0; i < this.length; i += 1) void 0 !== this[i].classList && this[i].classList.toggle(t[n]);
        return this
      },
      attr: function (e, t) {
        var n = arguments;
        if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
        for (var i = 0; i < this.length; i += 1)
          if (2 === n.length) this[i].setAttribute(e, t);
          else
            for (var r in e) this[i][r] = e[r], this[i].setAttribute(r, e[r]);
        return this
      },
      removeAttr: function (e) {
        for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this
      },
      data: function (e, t) {
        var n;
        if (void 0 !== t) {
          for (var i = 0; i < this.length; i += 1)(n = this[i]).dom7ElementDataStorage || (n.dom7ElementDataStorage = {}), n.dom7ElementDataStorage[e] = t;
          return this
        }
        if (n = this[0]) {
          if (n.dom7ElementDataStorage && e in n.dom7ElementDataStorage) return n.dom7ElementDataStorage[e];
          var r = n.getAttribute("data-" + e);
          return r || void 0
        }
      },
      transform: function (e) {
        for (var t = 0; t < this.length; t += 1) {
          var n = this[t].style;
          n.webkitTransform = e, n.transform = e
        }
        return this
      },
      transition: function (e) {
        "string" != typeof e && (e += "ms");
        for (var t = 0; t < this.length; t += 1) {
          var n = this[t].style;
          n.webkitTransitionDuration = e, n.transitionDuration = e
        }
        return this
      },
      on: function () {
        for (var e, t = [], n = arguments.length; n--;) t[n] = arguments[n];
        var i = t[0],
          a = t[1],
          s = t[2],
          r = t[3];

        function o(e) {
          var t = e.target;
          if (t) {
            var n = e.target.dom7EventData || [];
            if (n.unshift(e), z(t).is(a)) s.apply(t, n);
            else
              for (var i = z(t).parents(), r = 0; r < i.length; r += 1) z(i[r]).is(a) && s.apply(i[r], n)
          }
        }

        function l(e) {
          var t = e && e.target && e.target.dom7EventData || [];
          t.unshift(e), s.apply(this, t)
        }
        "function" == typeof t[1] && (i = (e = t)[0], s = e[1], r = e[2], a = void 0), r || (r = !1);
        for (var u, c = i.split(" "), d = 0; d < this.length; d += 1) {
          var h = this[d];
          if (a)
            for (u = 0; u < c.length; u += 1) h.dom7LiveListeners || (h.dom7LiveListeners = []), h.dom7LiveListeners.push({
              type: i,
              listener: s,
              proxyListener: o
            }), h.addEventListener(c[u], o, r);
          else
            for (u = 0; u < c.length; u += 1) h.dom7Listeners || (h.dom7Listeners = []), h.dom7Listeners.push({
              type: i,
              listener: s,
              proxyListener: l
            }), h.addEventListener(c[u], l, r)
        }
        return this
      },
      off: function () {
        for (var e, t = [], n = arguments.length; n--;) t[n] = arguments[n];
        var i = t[0],
          r = t[1],
          a = t[2],
          s = t[3];
        "function" == typeof t[1] && (i = (e = t)[0], a = e[1], s = e[2], r = void 0), s || (s = !1);
        for (var o = i.split(" "), l = 0; l < o.length; l += 1)
          for (var u = 0; u < this.length; u += 1) {
            var c = this[u];
            if (r) {
              if (c.dom7LiveListeners)
                for (var d = 0; d < c.dom7LiveListeners.length; d += 1) a ? c.dom7LiveListeners[d].listener === a && c.removeEventListener(o[l], c.dom7LiveListeners[d].proxyListener, s) : c.dom7LiveListeners[d].type === o[l] && c.removeEventListener(o[l], c.dom7LiveListeners[d].proxyListener, s)
            } else if (c.dom7Listeners)
              for (var h = 0; h < c.dom7Listeners.length; h += 1) a ? c.dom7Listeners[h].listener === a && c.removeEventListener(o[l], c.dom7Listeners[h].proxyListener, s) : c.dom7Listeners[h].type === o[l] && c.removeEventListener(o[l], c.dom7Listeners[h].proxyListener, s)
          }
        return this
      },
      trigger: function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        for (var n = e[0].split(" "), i = e[1], r = 0; r < n.length; r += 1)
          for (var a = 0; a < this.length; a += 1) {
            var s = void 0;
            try {
              s = new N.CustomEvent(n[r], {
                detail: i,
                bubbles: !0,
                cancelable: !0
              })
            } catch (e) {
              (s = g.createEvent("Event")).initEvent(n[r], !0, !0), s.detail = i
            }
            this[a].dom7EventData = e.filter(function (e, t) {
              return 0 < t
            }), this[a].dispatchEvent(s), this[a].dom7EventData = [], delete this[a].dom7EventData
          }
        return this
      },
      transitionEnd: function (t) {
        var n, i = ["webkitTransitionEnd", "transitionend"],
          r = this;

        function a(e) {
          if (e.target === this)
            for (t.call(this, e), n = 0; n < i.length; n += 1) r.off(i[n], a)
        }
        if (t)
          for (n = 0; n < i.length; n += 1) r.on(i[n], a);
        return this
      },
      outerWidth: function (e) {
        if (0 < this.length) {
          if (e) {
            var t = this.styles();
            return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
          }
          return this[0].offsetWidth
        }
        return null
      },
      outerHeight: function (e) {
        if (0 < this.length) {
          if (e) {
            var t = this.styles();
            return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
          }
          return this[0].offsetHeight
        }
        return null
      },
      offset: function () {
        if (0 < this.length) {
          var e = this[0],
            t = e.getBoundingClientRect(),
            n = g.body,
            i = e.clientTop || n.clientTop || 0,
            r = e.clientLeft || n.clientLeft || 0,
            a = e === N ? N.scrollY : e.scrollTop,
            s = e === N ? N.scrollX : e.scrollLeft;
          return {
            top: t.top + a - i,
            left: t.left + s - r
          }
        }
        return null
      },
      css: function (e, t) {
        var n;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (n = 0; n < this.length; n += 1)
              for (var i in e) this[n].style[i] = e[i];
            return this
          }
          if (this[0]) return N.getComputedStyle(this[0], null).getPropertyValue(e)
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
          return this
        }
        return this
      },
      each: function (e) {
        if (!e) return this;
        for (var t = 0; t < this.length; t += 1)
          if (!1 === e.call(this[t], t, this[t])) return this;
        return this
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
        for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this
      },
      is: function (e) {
        var t, n, i = this[0];
        if (!i || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (i.matches) return i.matches(e);
          if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
          if (i.msMatchesSelector) return i.msMatchesSelector(e);
          for (t = z(e), n = 0; n < t.length; n += 1)
            if (t[n] === i) return !0;
          return !1
        }
        if (e === g) return i === g;
        if (e === N) return i === N;
        if (e.nodeType || e instanceof l) {
          for (t = e.nodeType ? [e] : e, n = 0; n < t.length; n += 1)
            if (t[n] === i) return !0;
          return !1
        }
        return !1
      },
      index: function () {
        var e, t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
          return e
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        var t, n = this.length;
        return new l(n - 1 < e ? [] : e < 0 ? (t = n + e) < 0 ? [] : [this[t]] : [this[e]])
      },
      append: function () {
        for (var e, t = [], n = arguments.length; n--;) t[n] = arguments[n];
        for (var i = 0; i < t.length; i += 1) {
          e = t[i];
          for (var r = 0; r < this.length; r += 1)
            if ("string" == typeof e) {
              var a = g.createElement("div");
              for (a.innerHTML = e; a.firstChild;) this[r].appendChild(a.firstChild)
            } else if (e instanceof l)
            for (var s = 0; s < e.length; s += 1) this[r].appendChild(e[s]);
          else this[r].appendChild(e)
        }
        return this
      },
      prepend: function (e) {
        var t, n;
        for (t = 0; t < this.length; t += 1)
          if ("string" == typeof e) {
            var i = g.createElement("div");
            for (i.innerHTML = e, n = i.childNodes.length - 1; 0 <= n; n -= 1) this[t].insertBefore(i.childNodes[n], this[t].childNodes[0])
          } else if (e instanceof l)
          for (n = 0; n < e.length; n += 1) this[t].insertBefore(e[n], this[t].childNodes[0]);
        else this[t].insertBefore(e, this[t].childNodes[0]);
        return this
      },
      next: function (e) {
        return 0 < this.length ? e ? this[0].nextElementSibling && z(this[0].nextElementSibling).is(e) ? new l([this[0].nextElementSibling]) : new l([]) : this[0].nextElementSibling ? new l([this[0].nextElementSibling]) : new l([]) : new l([])
      },
      nextAll: function (e) {
        var t = [],
          n = this[0];
        if (!n) return new l([]);
        for (; n.nextElementSibling;) {
          var i = n.nextElementSibling;
          e ? z(i).is(e) && t.push(i) : t.push(i), n = i
        }
        return new l(t)
      },
      prev: function (e) {
        if (0 < this.length) {
          var t = this[0];
          return e ? t.previousElementSibling && z(t.previousElementSibling).is(e) ? new l([t.previousElementSibling]) : new l([]) : t.previousElementSibling ? new l([t.previousElementSibling]) : new l([])
        }
        return new l([])
      },
      prevAll: function (e) {
        var t = [],
          n = this[0];
        if (!n) return new l([]);
        for (; n.previousElementSibling;) {
          var i = n.previousElementSibling;
          e ? z(i).is(e) && t.push(i) : t.push(i), n = i
        }
        return new l(t)
      },
      parent: function (e) {
        for (var t = [], n = 0; n < this.length; n += 1) null !== this[n].parentNode && (e ? z(this[n].parentNode).is(e) && t.push(this[n].parentNode) : t.push(this[n].parentNode));
        return z(a(t))
      },
      parents: function (e) {
        for (var t = [], n = 0; n < this.length; n += 1)
          for (var i = this[n].parentNode; i;) e ? z(i).is(e) && t.push(i) : t.push(i), i = i.parentNode;
        return z(a(t))
      },
      closest: function (e) {
        var t = this;
        return void 0 === e ? new l([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
      },
      find: function (e) {
        for (var t = [], n = 0; n < this.length; n += 1)
          for (var i = this[n].querySelectorAll(e), r = 0; r < i.length; r += 1) t.push(i[r]);
        return new l(t)
      },
      children: function (e) {
        for (var t = [], n = 0; n < this.length; n += 1)
          for (var i = this[n].childNodes, r = 0; r < i.length; r += 1) e ? 1 === i[r].nodeType && z(i[r]).is(e) && t.push(i[r]) : 1 === i[r].nodeType && t.push(i[r]);
        return new l(a(t))
      },
      remove: function () {
        for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this
      },
      add: function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var n, i;
        for (n = 0; n < e.length; n += 1) {
          var r = z(e[n]);
          for (i = 0; i < r.length; i += 1) this[this.length] = r[i], this.length += 1
        }
        return this
      },
      styles: function () {
        return this[0] ? N.getComputedStyle(this[0], null) : {}
      }
    };
    Object.keys(t).forEach(function (e) {
      z.fn[e] = t[e]
    });
    var e, n, i, O = {
        deleteProps: function (e) {
          var t = e;
          Object.keys(t).forEach(function (e) {
            try {
              t[e] = null
            } catch (e) {}
            try {
              delete t[e]
            } catch (e) {}
          })
        },
        nextTick: function (e, t) {
          return void 0 === t && (t = 0), setTimeout(e, t)
        },
        now: function () {
          return Date.now()
        },
        getTranslate: function (e, t) {
          var n, i, r;
          void 0 === t && (t = "x");
          var a = N.getComputedStyle(e, null);
          return N.WebKitCSSMatrix ? (6 < (i = a.transform || a.webkitTransform).split(",").length && (i = i.split(", ").map(function (e) {
            return e.replace(",", ".")
          }).join(", ")), r = new N.WebKitCSSMatrix("none" === i ? "" : i)) : n = (r = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (i = N.WebKitCSSMatrix ? r.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === t && (i = N.WebKitCSSMatrix ? r.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), i || 0
        },
        parseUrlQuery: function (e) {
          var t, n, i, r, a = {},
            s = e || N.location.href;
          if ("string" == typeof s && s.length)
            for (r = (n = (s = -1 < s.indexOf("?") ? s.replace(/\S*\?/, "") : "").split("&").filter(function (e) {
                return "" !== e
              })).length, t = 0; t < r; t += 1) i = n[t].replace(/#\S+/g, "").split("="), a[decodeURIComponent(i[0])] = void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || "";
          return a
        },
        isObject: function (e) {
          return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
        },
        extend: function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          for (var n = Object(e[0]), i = 1; i < e.length; i += 1) {
            var r = e[i];
            if (null != r)
              for (var a = Object.keys(Object(r)), s = 0, o = a.length; s < o; s += 1) {
                var l = a[s],
                  u = Object.getOwnPropertyDescriptor(r, l);
                void 0 !== u && u.enumerable && (O.isObject(n[l]) && O.isObject(r[l]) ? O.extend(n[l], r[l]) : !O.isObject(n[l]) && O.isObject(r[l]) ? (n[l] = {}, O.extend(n[l], r[l])) : n[l] = r[l])
              }
          }
          return n
        }
      },
      _ = (i = g.createElement("div"), {
        touch: N.Modernizr && !0 === N.Modernizr.touch || !!("ontouchstart" in N || N.DocumentTouch && g instanceof N.DocumentTouch),
        pointerEvents: !(!N.navigator.pointerEnabled && !N.PointerEvent),
        prefixedPointerEvents: !!N.navigator.msPointerEnabled,
        transition: (n = i.style, "transition" in n || "webkitTransition" in n || "MozTransition" in n),
        transforms3d: N.Modernizr && !0 === N.Modernizr.csstransforms3d || (e = i.style, "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e),
        flexbox: function () {
          for (var e = i.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), n = 0; n < t.length; n += 1)
            if (t[n] in e) return !0;
          return !1
        }(),
        observer: "MutationObserver" in N || "WebkitMutationObserver" in N,
        passiveListener: function () {
          var e = !1;
          try {
            var t = Object.defineProperty({}, "passive", {
              get: function () {
                e = !0
              }
            });
            N.addEventListener("testPassiveListener", null, t)
          } catch (e) {}
          return e
        }(),
        gestures: "ongesturestart" in N
      }),
      r = function (e) {
        void 0 === e && (e = {});
        var t = this;
        t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function (e) {
          t.on(e, t.params.on[e])
        })
      },
      s = {
        components: {
          configurable: !0
        }
      };
    r.prototype.on = function (e, t, n) {
      var i = this;
      if ("function" != typeof t) return i;
      var r = n ? "unshift" : "push";
      return e.split(" ").forEach(function (e) {
        i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][r](t)
      }), i
    }, r.prototype.once = function (i, r, e) {
      var a = this;
      if ("function" != typeof r) return a;
      return a.on(i, function e() {
        for (var t = [], n = arguments.length; n--;) t[n] = arguments[n];
        r.apply(a, t), a.off(i, e)
      }, e)
    }, r.prototype.off = function (e, i) {
      var r = this;
      return r.eventsListeners && e.split(" ").forEach(function (n) {
        void 0 === i ? r.eventsListeners[n] = [] : r.eventsListeners[n].forEach(function (e, t) {
          e === i && r.eventsListeners[n].splice(t, 1)
        })
      }), r
    }, r.prototype.emit = function () {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      var n, i, r, a = this;
      return a.eventsListeners && ("string" == typeof e[0] || Array.isArray(e[0]) ? (n = e[0], i = e.slice(1, e.length), r = a) : (n = e[0].events, i = e[0].data, r = e[0].context || a), (Array.isArray(n) ? n : n.split(" ")).forEach(function (e) {
        if (a.eventsListeners && a.eventsListeners[e]) {
          var t = [];
          a.eventsListeners[e].forEach(function (e) {
            t.push(e)
          }), t.forEach(function (e) {
            e.apply(r, i)
          })
        }
      })), a
    }, r.prototype.useModulesParams = function (n) {
      var i = this;
      i.modules && Object.keys(i.modules).forEach(function (e) {
        var t = i.modules[e];
        t.params && O.extend(n, t.params)
      })
    }, r.prototype.useModules = function (i) {
      void 0 === i && (i = {});
      var r = this;
      r.modules && Object.keys(r.modules).forEach(function (e) {
        var n = r.modules[e],
          t = i[e] || {};
        n.instance && Object.keys(n.instance).forEach(function (e) {
          var t = n.instance[e];
          r[e] = "function" == typeof t ? t.bind(r) : t
        }), n.on && r.on && Object.keys(n.on).forEach(function (e) {
          r.on(e, n.on[e])
        }), n.create && n.create.bind(r)(t)
      })
    }, s.components.set = function (e) {
      this.use && this.use(e)
    }, r.installModule = function (t) {
      for (var e = [], n = arguments.length - 1; 0 < n--;) e[n] = arguments[n + 1];
      var i = this;
      i.prototype.modules || (i.prototype.modules = {});
      var r = t.name || Object.keys(i.prototype.modules).length + "_" + O.now();
      return (i.prototype.modules[r] = t).proto && Object.keys(t.proto).forEach(function (e) {
        i.prototype[e] = t.proto[e]
      }), t.static && Object.keys(t.static).forEach(function (e) {
        i[e] = t.static[e]
      }), t.install && t.install.apply(i, e), i
    }, r.use = function (e) {
      for (var t = [], n = arguments.length - 1; 0 < n--;) t[n] = arguments[n + 1];
      var i = this;
      return Array.isArray(e) ? (e.forEach(function (e) {
        return i.installModule(e)
      }), i) : i.installModule.apply(i, [e].concat(t))
    }, Object.defineProperties(r, s);
    var o = {
      updateSize: function () {
        var e, t, n = this.$el;
        e = void 0 !== this.params.width ? this.params.width : n[0].clientWidth, t = void 0 !== this.params.height ? this.params.height : n[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(n.css("padding-left"), 10) - parseInt(n.css("padding-right"), 10), t = t - parseInt(n.css("padding-top"), 10) - parseInt(n.css("padding-bottom"), 10), O.extend(this, {
          width: e,
          height: t,
          size: this.isHorizontal() ? e : t
        }))
      },
      updateSlides: function () {
        var e = this,
          t = e.params,
          n = e.$wrapperEl,
          i = e.size,
          r = e.rtlTranslate,
          a = e.wrongRTL,
          s = n.children("." + e.params.slideClass),
          o = e.virtual && t.virtual.enabled ? e.virtual.slides.length : s.length,
          l = [],
          u = [],
          c = [],
          d = t.slidesOffsetBefore;
        "function" == typeof d && (d = t.slidesOffsetBefore.call(e));
        var h = t.slidesOffsetAfter;
        "function" == typeof h && (h = t.slidesOffsetAfter.call(e));
        var p = o,
          f = e.snapGrid.length,
          g = e.snapGrid.length,
          m = t.spaceBetween,
          v = -d,
          y = 0,
          b = 0;
        if (void 0 !== i) {
          var x, w;
          "string" == typeof m && 0 <= m.indexOf("%") && (m = parseFloat(m.replace("%", "")) / 100 * i), e.virtualSize = -m, r ? s.css({
            marginLeft: "",
            marginTop: ""
          }) : s.css({
            marginRight: "",
            marginBottom: ""
          }), 1 < t.slidesPerColumn && (x = Math.floor(o / t.slidesPerColumn) === o / e.params.slidesPerColumn ? o : Math.ceil(o / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (x = Math.max(x, t.slidesPerView * t.slidesPerColumn)));
          for (var C, S = t.slidesPerColumn, T = x / S, E = T - (t.slidesPerColumn * T - o), k = 0; k < o; k += 1) {
            w = 0;
            var M = s.eq(k);
            if (1 < t.slidesPerColumn) {
              var P = void 0,
                A = void 0,
                L = void 0;
              "column" === t.slidesPerColumnFill ? (L = k - (A = Math.floor(k / S)) * S, (E < A || A === E && L === S - 1) && S <= (L += 1) && (L = 0, A += 1), P = A + L * x / S, M.css({
                "-webkit-box-ordinal-group": P,
                "-moz-box-ordinal-group": P,
                "-ms-flex-order": P,
                "-webkit-order": P,
                order: P
              })) : A = k - (L = Math.floor(k / T)) * T, M.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== L && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", A).attr("data-swiper-row", L)
            }
            if ("none" !== M.css("display")) {
              if ("auto" === t.slidesPerView) {
                var z = N.getComputedStyle(M[0], null);
                w = e.isHorizontal() ? M[0].getBoundingClientRect().width + parseFloat(z.getPropertyValue("margin-left")) + parseFloat(z.getPropertyValue("margin-right")) : M[0].getBoundingClientRect().height + parseFloat(z.getPropertyValue("margin-top")) + parseFloat(z.getPropertyValue("margin-bottom")), t.roundLengths && (w = Math.floor(w))
              } else w = (i - (t.slidesPerView - 1) * m) / t.slidesPerView, t.roundLengths && (w = Math.floor(w)), s[k] && (e.isHorizontal() ? s[k].style.width = w + "px" : s[k].style.height = w + "px");
              s[k] && (s[k].swiperSlideSize = w), c.push(w), t.centeredSlides ? (v = v + w / 2 + y / 2 + m, 0 === y && 0 !== k && (v = v - i / 2 - m), 0 === k && (v = v - i / 2 - m), Math.abs(v) < .001 && (v = 0), b % t.slidesPerGroup == 0 && l.push(v), u.push(v)) : (b % t.slidesPerGroup == 0 && l.push(v), u.push(v), v = v + w + m), e.virtualSize += w + m, y = w, b += 1
            }
          }
          if (e.virtualSize = Math.max(e.virtualSize, i) + h, r && a && ("slide" === t.effect || "coverflow" === t.effect) && n.css({
              width: e.virtualSize + t.spaceBetween + "px"
            }), _.flexbox && !t.setWrapperSize || (e.isHorizontal() ? n.css({
              width: e.virtualSize + t.spaceBetween + "px"
            }) : n.css({
              height: e.virtualSize + t.spaceBetween + "px"
            })), 1 < t.slidesPerColumn && (e.virtualSize = (w + t.spaceBetween) * x, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? n.css({
              width: e.virtualSize + t.spaceBetween + "px"
            }) : n.css({
              height: e.virtualSize + t.spaceBetween + "px"
            }), t.centeredSlides)) {
            C = [];
            for (var D = 0; D < l.length; D += 1) l[D] < e.virtualSize + l[0] && C.push(l[D]);
            l = C
          }
          if (!t.centeredSlides) {
            C = [];
            for (var F = 0; F < l.length; F += 1) l[F] <= e.virtualSize - i && C.push(l[F]);
            l = C, 1 < Math.floor(e.virtualSize - i) - Math.floor(l[l.length - 1]) && l.push(e.virtualSize - i)
          }
          0 === l.length && (l = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? r ? s.css({
            marginLeft: m + "px"
          }) : s.css({
            marginRight: m + "px"
          }) : s.css({
            marginBottom: m + "px"
          })), O.extend(e, {
            slides: s,
            snapGrid: l,
            slidesGrid: u,
            slidesSizesGrid: c
          }), o !== p && e.emit("slidesLengthChange"), l.length !== f && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), u.length !== g && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
        }
      },
      updateAutoHeight: function (e) {
        var t, n = this,
          i = [],
          r = 0;
        if ("number" == typeof e ? n.setTransition(e) : !0 === e && n.setTransition(n.params.speed), "auto" !== n.params.slidesPerView && 1 < n.params.slidesPerView)
          for (t = 0; t < Math.ceil(n.params.slidesPerView); t += 1) {
            var a = n.activeIndex + t;
            if (a > n.slides.length) break;
            i.push(n.slides.eq(a)[0])
          } else i.push(n.slides.eq(n.activeIndex)[0]);
        for (t = 0; t < i.length; t += 1)
          if (void 0 !== i[t]) {
            var s = i[t].offsetHeight;
            r = r < s ? s : r
          }
        r && n.$wrapperEl.css("height", r + "px")
      },
      updateSlidesOffset: function () {
        for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
      },
      updateSlidesProgress: function (e) {
        void 0 === e && (e = this.translate || 0);
        var t = this.params,
          n = this.slides,
          i = this.rtlTranslate;
        if (0 !== n.length) {
          void 0 === n[0].swiperSlideOffset && this.updateSlidesOffset();
          var r = -e;
          i && (r = e), n.removeClass(t.slideVisibleClass);
          for (var a = 0; a < n.length; a += 1) {
            var s = n[a],
              o = (r + (t.centeredSlides ? this.minTranslate() : 0) - s.swiperSlideOffset) / (s.swiperSlideSize + t.spaceBetween);
            if (t.watchSlidesVisibility) {
              var l = -(r - s.swiperSlideOffset),
                u = l + this.slidesSizesGrid[a];
              (0 <= l && l < this.size || 0 < u && u <= this.size || l <= 0 && u >= this.size) && n.eq(a).addClass(t.slideVisibleClass)
            }
            s.progress = i ? -o : o
          }
        }
      },
      updateProgress: function (e) {
        void 0 === e && (e = this.translate || 0);
        var t = this,
          n = t.params,
          i = t.maxTranslate() - t.minTranslate(),
          r = t.progress,
          a = t.isBeginning,
          s = t.isEnd,
          o = a,
          l = s;
        0 === i ? s = a = !(r = 0) : (a = (r = (e - t.minTranslate()) / i) <= 0, s = 1 <= r), O.extend(t, {
          progress: r,
          isBeginning: a,
          isEnd: s
        }), (n.watchSlidesProgress || n.watchSlidesVisibility) && t.updateSlidesProgress(e), a && !o && t.emit("reachBeginning toEdge"), s && !l && t.emit("reachEnd toEdge"), (o && !a || l && !s) && t.emit("fromEdge"), t.emit("progress", r)
      },
      updateSlidesClasses: function () {
        var e, t = this.slides,
          n = this.params,
          i = this.$wrapperEl,
          r = this.activeIndex,
          a = this.realIndex,
          s = this.virtual && n.virtual.enabled;
        t.removeClass(n.slideActiveClass + " " + n.slideNextClass + " " + n.slidePrevClass + " " + n.slideDuplicateActiveClass + " " + n.slideDuplicateNextClass + " " + n.slideDuplicatePrevClass), (e = s ? this.$wrapperEl.find("." + n.slideClass + '[data-swiper-slide-index="' + r + '"]') : t.eq(r)).addClass(n.slideActiveClass), n.loop && (e.hasClass(n.slideDuplicateClass) ? i.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + a + '"]').addClass(n.slideDuplicateActiveClass) : i.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + a + '"]').addClass(n.slideDuplicateActiveClass));
        var o = e.nextAll("." + n.slideClass).eq(0).addClass(n.slideNextClass);
        n.loop && 0 === o.length && (o = t.eq(0)).addClass(n.slideNextClass);
        var l = e.prevAll("." + n.slideClass).eq(0).addClass(n.slidePrevClass);
        n.loop && 0 === l.length && (l = t.eq(-1)).addClass(n.slidePrevClass), n.loop && (o.hasClass(n.slideDuplicateClass) ? i.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicateNextClass) : i.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicateNextClass), l.hasClass(n.slideDuplicateClass) ? i.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicatePrevClass) : i.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicatePrevClass))
      },
      updateActiveIndex: function (e) {
        var t, n = this,
          i = n.rtlTranslate ? n.translate : -n.translate,
          r = n.slidesGrid,
          a = n.snapGrid,
          s = n.params,
          o = n.activeIndex,
          l = n.realIndex,
          u = n.snapIndex,
          c = e;
        if (void 0 === c) {
          for (var d = 0; d < r.length; d += 1) void 0 !== r[d + 1] ? i >= r[d] && i < r[d + 1] - (r[d + 1] - r[d]) / 2 ? c = d : i >= r[d] && i < r[d + 1] && (c = d + 1) : i >= r[d] && (c = d);
          s.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
        }
        if ((t = 0 <= a.indexOf(i) ? a.indexOf(i) : Math.floor(c / s.slidesPerGroup)) >= a.length && (t = a.length - 1), c !== o) {
          var h = parseInt(n.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
          O.extend(n, {
            snapIndex: t,
            realIndex: h,
            previousIndex: o,
            activeIndex: c
          }), n.emit("activeIndexChange"), n.emit("snapIndexChange"), l !== h && n.emit("realIndexChange"), n.emit("slideChange")
        } else t !== u && (n.snapIndex = t, n.emit("snapIndexChange"))
      },
      updateClickedSlide: function (e) {
        var t = this,
          n = t.params,
          i = z(e.target).closest("." + n.slideClass)[0],
          r = !1;
        if (i)
          for (var a = 0; a < t.slides.length; a += 1) t.slides[a] === i && (r = !0);
        if (!i || !r) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
        t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(z(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = z(i).index(), n.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
      }
    };
    var u = {
      getTranslate: function (e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        var t = this.params,
          n = this.rtlTranslate,
          i = this.translate,
          r = this.$wrapperEl;
        if (t.virtualTranslate) return n ? -i : i;
        var a = O.getTranslate(r[0], e);
        return n && (a = -a), a || 0
      },
      setTranslate: function (e, t) {
        var n = this,
          i = n.rtlTranslate,
          r = n.params,
          a = n.$wrapperEl,
          s = n.progress,
          o = 0,
          l = 0;
        n.isHorizontal() ? o = i ? -e : e : l = e, r.roundLengths && (o = Math.floor(o), l = Math.floor(l)), r.virtualTranslate || (_.transforms3d ? a.transform("translate3d(" + o + "px, " + l + "px, 0px)") : a.transform("translate(" + o + "px, " + l + "px)")), n.translate = n.isHorizontal() ? o : l;
        var u = n.maxTranslate() - n.minTranslate();
        (0 === u ? 0 : (e - n.minTranslate()) / u) !== s && n.updateProgress(e), n.emit("setTranslate", n.translate, t)
      },
      minTranslate: function () {
        return -this.snapGrid[0]
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1]
      }
    };
    var c = {
      setTransition: function (e, t) {
        this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
      },
      transitionStart: function (e, t) {
        void 0 === e && (e = !0);
        var n = this.activeIndex,
          i = this.params,
          r = this.previousIndex;
        i.autoHeight && this.updateAutoHeight();
        var a = t;
        if (a || (a = r < n ? "next" : n < r ? "prev" : "reset"), this.emit("transitionStart"), e && n !== r) {
          if ("reset" === a) return void this.emit("slideResetTransitionStart");
          this.emit("slideChangeTransitionStart"), "next" === a ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
        }
      },
      transitionEnd: function (e, t) {
        void 0 === e && (e = !0);
        var n = this.activeIndex,
          i = this.previousIndex;
        this.animating = !1, this.setTransition(0);
        var r = t;
        if (r || (r = i < n ? "next" : n < i ? "prev" : "reset"), this.emit("transitionEnd"), e && n !== i) {
          if ("reset" === r) return void this.emit("slideResetTransitionEnd");
          this.emit("slideChangeTransitionEnd"), "next" === r ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")
        }
      }
    };
    var d = {
      slideTo: function (e, t, n, i) {
        void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0);
        var r = this,
          a = e;
        a < 0 && (a = 0);
        var s = r.params,
          o = r.snapGrid,
          l = r.slidesGrid,
          u = r.previousIndex,
          c = r.activeIndex,
          d = r.rtlTranslate,
          h = r.$wrapperEl;
        if (r.animating && s.preventIntercationOnTransition) return !1;
        var p = Math.floor(a / s.slidesPerGroup);
        p >= o.length && (p = o.length - 1), (c || s.initialSlide || 0) === (u || 0) && n && r.emit("beforeSlideChangeStart");
        var f, g = -o[p];
        if (r.updateProgress(g), s.normalizeSlideIndex)
          for (var m = 0; m < l.length; m += 1) - Math.floor(100 * g) >= Math.floor(100 * l[m]) && (a = m);
        if (r.initialized && a !== c) {
          if (!r.allowSlideNext && g < r.translate && g < r.minTranslate()) return !1;
          if (!r.allowSlidePrev && g > r.translate && g > r.maxTranslate() && (c || 0) !== a) return !1
        }
        return f = c < a ? "next" : a < c ? "prev" : "reset", d && -g === r.translate || !d && g === r.translate ? (r.updateActiveIndex(a), s.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== s.effect && r.setTranslate(g), "reset" !== f && (r.transitionStart(n, f), r.transitionEnd(n, f)), !1) : (0 !== t && _.transition ? (r.setTransition(t), r.setTranslate(g), r.updateActiveIndex(a), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, i), r.transitionStart(n, f), r.animating || (r.animating = !0, h.transitionEnd(function () {
          r && !r.destroyed && r.transitionEnd(n, f)
        }))) : (r.setTransition(0), r.setTranslate(g), r.updateActiveIndex(a), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, i), r.transitionStart(n, f), r.transitionEnd(n, f)), !0)
      },
      slideToLoop: function (e, t, n, i) {
        void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0);
        var r = e;
        return this.params.loop && (r += this.loopedSlides), this.slideTo(r, t, n, i)
      },
      slideNext: function (e, t, n) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        var i = this.params,
          r = this.animating;
        return i.loop ? !r && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, this.slideTo(this.activeIndex + i.slidesPerGroup, e, t, n)) : this.slideTo(this.activeIndex + i.slidesPerGroup, e, t, n)
      },
      slidePrev: function (e, t, n) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        var i = this,
          r = i.params,
          a = i.animating,
          s = i.snapGrid,
          o = i.slidesGrid,
          l = i.rtlTranslate;
        if (r.loop) {
          if (a) return !1;
          i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
        }
        var u, c = l ? i.translate : -i.translate,
          d = (s[s.indexOf(c)], s[s.indexOf(c) - 1]);
        return d && (u = o.indexOf(d)) < 0 && (u = i.activeIndex - 1), i.slideTo(u, e, t, n)
      },
      slideReset: function (e, t, n) {
        return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, n)
      },
      slideToClosest: function (e, t, n) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        var i = this,
          r = i.activeIndex,
          a = Math.floor(r / i.params.slidesPerGroup);
        if (a < i.snapGrid.length - 1) {
          var s = i.rtlTranslate ? i.translate : -i.translate,
            o = i.snapGrid[a];
          (i.snapGrid[a + 1] - o) / 2 < s - o && (r = i.params.slidesPerGroup)
        }
        return i.slideTo(r, e, t, n)
      },
      slideToClickedSlide: function () {
        var e, t = this,
          n = t.params,
          i = t.$wrapperEl,
          r = "auto" === n.slidesPerView ? t.slidesPerViewDynamic() : n.slidesPerView,
          a = t.clickedIndex;
        if (n.loop) {
          if (t.animating) return;
          e = parseInt(z(t.clickedSlide).attr("data-swiper-slide-index"), 10), n.centeredSlides ? a < t.loopedSlides - r / 2 || a > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(), a = i.children("." + n.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + n.slideDuplicateClass + ")").eq(0).index(), O.nextTick(function () {
            t.slideTo(a)
          })) : t.slideTo(a) : a > t.slides.length - r ? (t.loopFix(), a = i.children("." + n.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + n.slideDuplicateClass + ")").eq(0).index(), O.nextTick(function () {
            t.slideTo(a)
          })) : t.slideTo(a)
        } else t.slideTo(a)
      }
    };
    var h = {
      loopCreate: function () {
        var i = this,
          e = i.params,
          t = i.$wrapperEl;
        t.children("." + e.slideClass + "." + e.slideDuplicateClass).remove();
        var r = t.children("." + e.slideClass);
        if (e.loopFillGroupWithBlank) {
          var n = e.slidesPerGroup - r.length % e.slidesPerGroup;
          if (n !== e.slidesPerGroup) {
            for (var a = 0; a < n; a += 1) {
              var s = z(g.createElement("div")).addClass(e.slideClass + " " + e.slideBlankClass);
              t.append(s)
            }
            r = t.children("." + e.slideClass)
          }
        }
        "auto" !== e.slidesPerView || e.loopedSlides || (e.loopedSlides = r.length), i.loopedSlides = parseInt(e.loopedSlides || e.slidesPerView, 10), i.loopedSlides += e.loopAdditionalSlides, i.loopedSlides > r.length && (i.loopedSlides = r.length);
        var o = [],
          l = [];
        r.each(function (e, t) {
          var n = z(t);
          e < i.loopedSlides && l.push(t), e < r.length && e >= r.length - i.loopedSlides && o.push(t), n.attr("data-swiper-slide-index", e)
        });
        for (var u = 0; u < l.length; u += 1) t.append(z(l[u].cloneNode(!0)).addClass(e.slideDuplicateClass));
        for (var c = o.length - 1; 0 <= c; c -= 1) t.prepend(z(o[c].cloneNode(!0)).addClass(e.slideDuplicateClass))
      },
      loopFix: function () {
        var e, t = this,
          n = t.params,
          i = t.activeIndex,
          r = t.slides,
          a = t.loopedSlides,
          s = t.allowSlidePrev,
          o = t.allowSlideNext,
          l = t.snapGrid,
          u = t.rtlTranslate;
        t.allowSlidePrev = !0, t.allowSlideNext = !0;
        var c = -l[i] - t.getTranslate();
        i < a ? (e = r.length - 3 * a + i, e += a, t.slideTo(e, 0, !1, !0) && 0 !== c && t.setTranslate((u ? -t.translate : t.translate) - c)) : ("auto" === n.slidesPerView && 2 * a <= i || i > r.length - 2 * n.slidesPerView) && (e = -r.length + i + a, e += a, t.slideTo(e, 0, !1, !0) && 0 !== c && t.setTranslate((u ? -t.translate : t.translate) - c));
        t.allowSlidePrev = s, t.allowSlideNext = o
      },
      loopDestroy: function () {
        var e = this.$wrapperEl,
          t = this.params,
          n = this.slides;
        e.children("." + t.slideClass + "." + t.slideDuplicateClass).remove(), n.removeAttr("data-swiper-slide-index")
      }
    };
    var p = {
      setGrabCursor: function (e) {
        if (!_.touch && this.params.simulateTouch) {
          var t = this.el;
          t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
        }
      },
      unsetGrabCursor: function () {
        _.touch || (this.el.style.cursor = "")
      }
    };
    var f = {
        appendSlide: function (e) {
          var t = this.$wrapperEl,
            n = this.params;
          if (n.loop && this.loopDestroy(), "object" == typeof e && "length" in e)
            for (var i = 0; i < e.length; i += 1) e[i] && t.append(e[i]);
          else t.append(e);
          n.loop && this.loopCreate(), n.observer && _.observer || this.update()
        },
        prependSlide: function (e) {
          var t = this.params,
            n = this.$wrapperEl,
            i = this.activeIndex;
          t.loop && this.loopDestroy();
          var r = i + 1;
          if ("object" == typeof e && "length" in e) {
            for (var a = 0; a < e.length; a += 1) e[a] && n.prepend(e[a]);
            r = i + e.length
          } else n.prepend(e);
          t.loop && this.loopCreate(), t.observer && _.observer || this.update(), this.slideTo(r, 0, !1)
        },
        removeSlide: function (e) {
          var t = this,
            n = t.params,
            i = t.$wrapperEl,
            r = t.activeIndex;
          n.loop && (t.loopDestroy(), t.slides = i.children("." + n.slideClass));
          var a, s = r;
          if ("object" == typeof e && "length" in e) {
            for (var o = 0; o < e.length; o += 1) a = e[o], t.slides[a] && t.slides.eq(a).remove(), a < s && (s -= 1);
            s = Math.max(s, 0)
          } else a = e, t.slides[a] && t.slides.eq(a).remove(), a < s && (s -= 1), s = Math.max(s, 0);
          n.loop && t.loopCreate(), n.observer && _.observer || t.update(), n.loop ? t.slideTo(s + t.loopedSlides, 0, !1) : t.slideTo(s, 0, !1)
        },
        removeAllSlides: function () {
          for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
          this.removeSlide(e)
        }
      },
      m = function () {
        var e = N.navigator.userAgent,
          t = {
            ios: !1,
            android: !1,
            androidChrome: !1,
            desktop: !1,
            windows: !1,
            iphone: !1,
            ipod: !1,
            ipad: !1,
            cordova: N.cordova || N.phonegap,
            phonegap: N.cordova || N.phonegap
          },
          n = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
          i = e.match(/(Android);?[\s\/]+([\d.]+)?/),
          r = e.match(/(iPad).*OS\s([\d_]+)/),
          a = e.match(/(iPod)(.*OS\s([\d_]+))?/),
          s = !r && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
        if (n && (t.os = "windows", t.osVersion = n[2], t.windows = !0), i && !n && (t.os = "android", t.osVersion = i[2], t.android = !0, t.androidChrome = 0 <= e.toLowerCase().indexOf("chrome")), (r || s || a) && (t.os = "ios", t.ios = !0), s && !a && (t.osVersion = s[2].replace(/_/g, "."), t.iphone = !0), r && (t.osVersion = r[2].replace(/_/g, "."), t.ipad = !0), a && (t.osVersion = a[3] ? a[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && 0 <= e.indexOf("Version/") && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (s || r || a) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
          var o = t.osVersion.split("."),
            l = g.querySelector('meta[name="viewport"]');
          t.minimalUi = !t.webView && (a || s) && (1 * o[0] == 7 ? 1 <= 1 * o[1] : 7 < 1 * o[0]) && l && 0 <= l.getAttribute("content").indexOf("minimal-ui")
        }
        return t.pixelRatio = N.devicePixelRatio || 1, t
      }();

    function v() {
      var e = this,
        t = e.params,
        n = e.el;
      if (!n || 0 !== n.offsetWidth) {
        t.breakpoints && e.setBreakpoint();
        var i = e.allowSlideNext,
          r = e.allowSlidePrev,
          a = e.snapGrid;
        if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
          var s = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
          e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight()
        } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || 1 < t.slidesPerView) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
        e.allowSlidePrev = r, e.allowSlideNext = i, e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow()
      }
    }
    var y = {
      attachEvents: function () {
        var e = this,
          t = e.params,
          n = e.touchEvents,
          i = e.el,
          r = e.wrapperEl;
        e.onTouchStart = function (e) {
          var t = this,
            n = t.touchEventsData,
            i = t.params,
            r = t.touches;
          if (!t.animating || !i.preventIntercationOnTransition) {
            var a = e;
            if (a.originalEvent && (a = a.originalEvent), n.isTouchEvent = "touchstart" === a.type, (n.isTouchEvent || !("which" in a) || 3 !== a.which) && (!n.isTouched || !n.isMoved))
              if (i.noSwiping && z(a.target).closest(i.noSwipingSelector ? i.noSwipingSelector : "." + i.noSwipingClass)[0]) t.allowClick = !0;
              else if (!i.swipeHandler || z(a).closest(i.swipeHandler)[0]) {
              r.currentX = "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX, r.currentY = "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY;
              var s = r.currentX,
                o = r.currentY;
              if (!(m.ios && !m.cordova && i.iOSEdgeSwipeDetection && s <= i.iOSEdgeSwipeThreshold && s >= N.screen.width - i.iOSEdgeSwipeThreshold)) {
                if (O.extend(n, {
                    isTouched: !0,
                    isMoved: !1,
                    allowTouchCallbacks: !0,
                    isScrolling: void 0,
                    startMoving: void 0
                  }), r.startX = s, r.startY = o, n.touchStartTime = O.now(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, 0 < i.threshold && (n.allowThresholdMove = !1), "touchstart" !== a.type) {
                  var l = !0;
                  z(a.target).is(n.formElements) && (l = !1), g.activeElement && z(g.activeElement).is(n.formElements) && g.activeElement !== a.target && g.activeElement.blur(), l && t.allowTouchMove && a.preventDefault()
                }
                t.emit("touchStart", a)
              }
            }
          }
        }.bind(e), e.onTouchMove = function (e) {
          var t = this,
            n = t.touchEventsData,
            i = t.params,
            r = t.touches,
            a = t.rtlTranslate,
            s = e;
          if (s.originalEvent && (s = s.originalEvent), n.isTouched) {
            if (!n.isTouchEvent || "mousemove" !== s.type) {
              var o = "touchmove" === s.type ? s.targetTouches[0].pageX : s.pageX,
                l = "touchmove" === s.type ? s.targetTouches[0].pageY : s.pageY;
              if (s.preventedByNestedSwiper) return r.startX = o, void(r.startY = l);
              if (!t.allowTouchMove) return t.allowClick = !1, void(n.isTouched && (O.extend(r, {
                startX: o,
                startY: l,
                currentX: o,
                currentY: l
              }), n.touchStartTime = O.now()));
              if (n.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
                if (t.isVertical()) {
                  if (l < r.startY && t.translate <= t.maxTranslate() || l > r.startY && t.translate >= t.minTranslate()) return n.isTouched = !1, void(n.isMoved = !1)
                } else if (o < r.startX && t.translate <= t.maxTranslate() || o > r.startX && t.translate >= t.minTranslate()) return;
              if (n.isTouchEvent && g.activeElement && s.target === g.activeElement && z(s.target).is(n.formElements)) return n.isMoved = !0, void(t.allowClick = !1);
              if (n.allowTouchCallbacks && t.emit("touchMove", s), !(s.targetTouches && 1 < s.targetTouches.length)) {
                r.currentX = o, r.currentY = l;
                var u, c = r.currentX - r.startX,
                  d = r.currentY - r.startY;
                if (void 0 === n.isScrolling && (t.isHorizontal() && r.currentY === r.startY || t.isVertical() && r.currentX === r.startX ? n.isScrolling = !1 : 25 <= c * c + d * d && (u = 180 * Math.atan2(Math.abs(d), Math.abs(c)) / Math.PI, n.isScrolling = t.isHorizontal() ? u > i.touchAngle : 90 - u > i.touchAngle)), n.isScrolling && t.emit("touchMoveOpposite", s), "undefined" == typeof startMoving && (r.currentX === r.startX && r.currentY === r.startY || (n.startMoving = !0)), n.isScrolling) n.isTouched = !1;
                else if (n.startMoving) {
                  t.allowClick = !1, s.preventDefault(), i.touchMoveStopPropagation && !i.nested && s.stopPropagation(), n.isMoved || (i.loop && t.loopFix(), n.startTranslate = t.getTranslate(), t.setTransition(0), t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"), n.allowMomentumBounce = !1, !i.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0), t.emit("sliderFirstMove", s)), t.emit("sliderMove", s), n.isMoved = !0;
                  var h = t.isHorizontal() ? c : d;
                  r.diff = h, h *= i.touchRatio, a && (h = -h), t.swipeDirection = 0 < h ? "prev" : "next", n.currentTranslate = h + n.startTranslate;
                  var p = !0,
                    f = i.resistanceRatio;
                  if (i.touchReleaseOnEdges && (f = 0), 0 < h && n.currentTranslate > t.minTranslate() ? (p = !1, i.resistance && (n.currentTranslate = t.minTranslate() - 1 + Math.pow(-t.minTranslate() + n.startTranslate + h, f))) : h < 0 && n.currentTranslate < t.maxTranslate() && (p = !1, i.resistance && (n.currentTranslate = t.maxTranslate() + 1 - Math.pow(t.maxTranslate() - n.startTranslate - h, f))), p && (s.preventedByNestedSwiper = !0), !t.allowSlideNext && "next" === t.swipeDirection && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate), !t.allowSlidePrev && "prev" === t.swipeDirection && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate), 0 < i.threshold) {
                    if (!(Math.abs(h) > i.threshold || n.allowThresholdMove)) return void(n.currentTranslate = n.startTranslate);
                    if (!n.allowThresholdMove) return n.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, n.currentTranslate = n.startTranslate, void(r.diff = t.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
                  }
                  i.followFinger && ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) && (t.updateActiveIndex(), t.updateSlidesClasses()), i.freeMode && (0 === n.velocities.length && n.velocities.push({
                    position: r[t.isHorizontal() ? "startX" : "startY"],
                    time: n.touchStartTime
                  }), n.velocities.push({
                    position: r[t.isHorizontal() ? "currentX" : "currentY"],
                    time: O.now()
                  })), t.updateProgress(n.currentTranslate), t.setTranslate(n.currentTranslate))
                }
              }
            }
          } else n.startMoving && n.isScrolling && t.emit("touchMoveOpposite", s)
        }.bind(e), e.onTouchEnd = function (e) {
          var t = this,
            n = t.touchEventsData,
            i = t.params,
            r = t.touches,
            a = t.rtlTranslate,
            s = t.$wrapperEl,
            o = t.slidesGrid,
            l = t.snapGrid,
            u = e;
          if (u.originalEvent && (u = u.originalEvent), n.allowTouchCallbacks && t.emit("touchEnd", u), n.allowTouchCallbacks = !1, !n.isTouched) return n.isMoved && i.grabCursor && t.setGrabCursor(!1), n.isMoved = !1, void(n.startMoving = !1);
          i.grabCursor && n.isMoved && n.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
          var c, d = O.now(),
            h = d - n.touchStartTime;
          if (t.allowClick && (t.updateClickedSlide(u), t.emit("tap", u), h < 300 && 300 < d - n.lastClickTime && (n.clickTimeout && clearTimeout(n.clickTimeout), n.clickTimeout = O.nextTick(function () {
              t && !t.destroyed && t.emit("click", u)
            }, 300)), h < 300 && d - n.lastClickTime < 300 && (n.clickTimeout && clearTimeout(n.clickTimeout), t.emit("doubleTap", u))), n.lastClickTime = O.now(), O.nextTick(function () {
              t.destroyed || (t.allowClick = !0)
            }), !n.isTouched || !n.isMoved || !t.swipeDirection || 0 === r.diff || n.currentTranslate === n.startTranslate) return n.isTouched = !1, n.isMoved = !1, void(n.startMoving = !1);
          if (n.isTouched = !1, n.isMoved = !1, n.startMoving = !1, c = i.followFinger ? a ? t.translate : -t.translate : -n.currentTranslate, i.freeMode) {
            if (c < -t.minTranslate()) return void t.slideTo(t.activeIndex);
            if (c > -t.maxTranslate()) return void(t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
            if (i.freeModeMomentum) {
              if (1 < n.velocities.length) {
                var p = n.velocities.pop(),
                  f = n.velocities.pop(),
                  g = p.position - f.position,
                  m = p.time - f.time;
                t.velocity = g / m, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (150 < m || 300 < O.now() - p.time) && (t.velocity = 0)
              } else t.velocity = 0;
              t.velocity *= i.freeModeMomentumVelocityRatio, n.velocities.length = 0;
              var v = 1e3 * i.freeModeMomentumRatio,
                y = t.velocity * v,
                b = t.translate + y;
              a && (b = -b);
              var x, w, C = !1,
                S = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
              if (b < t.maxTranslate()) i.freeModeMomentumBounce ? (b + t.maxTranslate() < -S && (b = t.maxTranslate() - S), x = t.maxTranslate(), C = !0, n.allowMomentumBounce = !0) : b = t.maxTranslate(), i.loop && i.centeredSlides && (w = !0);
              else if (b > t.minTranslate()) i.freeModeMomentumBounce ? (b - t.minTranslate() > S && (b = t.minTranslate() + S), x = t.minTranslate(), C = !0, n.allowMomentumBounce = !0) : b = t.minTranslate(), i.loop && i.centeredSlides && (w = !0);
              else if (i.freeModeSticky) {
                for (var T, E = 0; E < l.length; E += 1)
                  if (l[E] > -b) {
                    T = E;
                    break
                  }
                b = -(b = Math.abs(l[T] - b) < Math.abs(l[T - 1] - b) || "next" === t.swipeDirection ? l[T] : l[T - 1])
              }
              if (w && t.once("transitionEnd", function () {
                  t.loopFix()
                }), 0 !== t.velocity) v = a ? Math.abs((-b - t.translate) / t.velocity) : Math.abs((b - t.translate) / t.velocity);
              else if (i.freeModeSticky) return void t.slideToClosest();
              i.freeModeMomentumBounce && C ? (t.updateProgress(x), t.setTransition(v), t.setTranslate(b), t.transitionStart(!0, t.swipeDirection), t.animating = !0, s.transitionEnd(function () {
                t && !t.destroyed && n.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), t.setTranslate(x), s.transitionEnd(function () {
                  t && !t.destroyed && t.transitionEnd()
                }))
              })) : t.velocity ? (t.updateProgress(b), t.setTransition(v), t.setTranslate(b), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, s.transitionEnd(function () {
                t && !t.destroyed && t.transitionEnd()
              }))) : t.updateProgress(b), t.updateActiveIndex(), t.updateSlidesClasses()
            } else if (i.freeModeSticky) return void t.slideToClosest();
            (!i.freeModeMomentum || h >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
          } else {
            for (var k = 0, M = t.slidesSizesGrid[0], P = 0; P < o.length; P += i.slidesPerGroup) void 0 !== o[P + i.slidesPerGroup] ? c >= o[P] && c < o[P + i.slidesPerGroup] && (M = o[(k = P) + i.slidesPerGroup] - o[P]) : c >= o[P] && (k = P, M = o[o.length - 1] - o[o.length - 2]);
            var A = (c - o[k]) / M;
            if (h > i.longSwipesMs) {
              if (!i.longSwipes) return void t.slideTo(t.activeIndex);
              "next" === t.swipeDirection && (A >= i.longSwipesRatio ? t.slideTo(k + i.slidesPerGroup) : t.slideTo(k)), "prev" === t.swipeDirection && (A > 1 - i.longSwipesRatio ? t.slideTo(k + i.slidesPerGroup) : t.slideTo(k))
            } else {
              if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
              "next" === t.swipeDirection && t.slideTo(k + i.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(k)
            }
          }
        }.bind(e), e.onClick = function (e) {
          this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
        }.bind(e);
        var a = "container" === t.touchEventsTarget ? i : r,
          s = !!t.nested;
        if (_.touch || !_.pointerEvents && !_.prefixedPointerEvents) {
          if (_.touch) {
            var o = !("touchstart" !== n.start || !_.passiveListener || !t.passiveListeners) && {
              passive: !0,
              capture: !1
            };
            a.addEventListener(n.start, e.onTouchStart, o), a.addEventListener(n.move, e.onTouchMove, _.passiveListener ? {
              passive: !1,
              capture: s
            } : s), a.addEventListener(n.end, e.onTouchEnd, o)
          }(t.simulateTouch && !m.ios && !m.android || t.simulateTouch && !_.touch && m.ios) && (a.addEventListener("mousedown", e.onTouchStart, !1), g.addEventListener("mousemove", e.onTouchMove, s), g.addEventListener("mouseup", e.onTouchEnd, !1))
        } else a.addEventListener(n.start, e.onTouchStart, !1), g.addEventListener(n.move, e.onTouchMove, s), g.addEventListener(n.end, e.onTouchEnd, !1);
        (t.preventClicks || t.preventClicksPropagation) && a.addEventListener("click", e.onClick, !0), e.on("resize observerUpdate", v, !0)
      },
      detachEvents: function () {
        var e = this,
          t = e.params,
          n = e.touchEvents,
          i = e.el,
          r = e.wrapperEl,
          a = "container" === t.touchEventsTarget ? i : r,
          s = !!t.nested;
        if (_.touch || !_.pointerEvents && !_.prefixedPointerEvents) {
          if (_.touch) {
            var o = !("onTouchStart" !== n.start || !_.passiveListener || !t.passiveListeners) && {
              passive: !0,
              capture: !1
            };
            a.removeEventListener(n.start, e.onTouchStart, o), a.removeEventListener(n.move, e.onTouchMove, s), a.removeEventListener(n.end, e.onTouchEnd, o)
          }(t.simulateTouch && !m.ios && !m.android || t.simulateTouch && !_.touch && m.ios) && (a.removeEventListener("mousedown", e.onTouchStart, !1), g.removeEventListener("mousemove", e.onTouchMove, s), g.removeEventListener("mouseup", e.onTouchEnd, !1))
        } else a.removeEventListener(n.start, e.onTouchStart, !1), g.removeEventListener(n.move, e.onTouchMove, s), g.removeEventListener(n.end, e.onTouchEnd, !1);
        (t.preventClicks || t.preventClicksPropagation) && a.removeEventListener("click", e.onClick, !0), e.off("resize observerUpdate", v)
      }
    };
    var b, x = {
        setBreakpoint: function () {
          var e = this,
            t = e.activeIndex,
            n = e.loopedSlides;
          void 0 === n && (n = 0);
          var i = e.params,
            r = i.breakpoints;
          if (r && (!r || 0 !== Object.keys(r).length)) {
            var a = e.getBreakpoint(r);
            if (a && e.currentBreakpoint !== a) {
              var s = a in r ? r[a] : e.originalParams,
                o = i.loop && s.slidesPerView !== i.slidesPerView;
              O.extend(e.params, s), O.extend(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev
              }), e.currentBreakpoint = a, o && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - n + e.loopedSlides, 0, !1)), e.emit("breakpoint", s)
            }
          }
        },
        getBreakpoint: function (e) {
          if (e) {
            var t = !1,
              n = [];
            Object.keys(e).forEach(function (e) {
              n.push(e)
            }), n.sort(function (e, t) {
              return parseInt(e, 10) - parseInt(t, 10)
            });
            for (var i = 0; i < n.length; i += 1) {
              var r = n[i];
              r >= N.innerWidth && !t && (t = r)
            }
            return t || "max"
          }
        }
      },
      D = {
        isIE: !!N.navigator.userAgent.match(/Trident/g) || !!N.navigator.userAgent.match(/MSIE/g),
        isSafari: (b = N.navigator.userAgent.toLowerCase(), 0 <= b.indexOf("safari") && b.indexOf("chrome") < 0 && b.indexOf("android") < 0),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(N.navigator.userAgent)
      };
    var w = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        preventIntercationOnTransition: !1,
        iOSEdgeSwipeDetection: !1,
        iOSEdgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: .02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        centeredSlides: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !0,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0
      },
      C = {
        update: o,
        translate: u,
        transition: c,
        slide: d,
        loop: h,
        grabCursor: p,
        manipulation: f,
        events: y,
        breakpoints: x,
        checkOverflow: {
          checkOverflow: function () {
            var e = this,
              t = e.isLocked;
            e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), t && t !== e.isLocked && (e.isEnd = !1, e.navigation.update())
          }
        },
        classes: {
          addClasses: function () {
            var t = this.classNames,
              n = this.params,
              e = this.rtl,
              i = this.$el,
              r = [];
            r.push(n.direction), n.freeMode && r.push("free-mode"), _.flexbox || r.push("no-flexbox"), n.autoHeight && r.push("autoheight"), e && r.push("rtl"), 1 < n.slidesPerColumn && r.push("multirow"), m.android && r.push("android"), m.ios && r.push("ios"), D.isIE && (_.pointerEvents || _.prefixedPointerEvents) && r.push("wp8-" + n.direction), r.forEach(function (e) {
              t.push(n.containerModifierClass + e)
            }), i.addClass(t.join(" "))
          },
          removeClasses: function () {
            var e = this.$el,
              t = this.classNames;
            e.removeClass(t.join(" "))
          }
        },
        images: {
          loadImage: function (e, t, n, i, r, a) {
            var s;

            function o() {
              a && a()
            }
            e.complete && r ? o() : t ? ((s = new N.Image).onload = o, s.onerror = o, i && (s.sizes = i), n && (s.srcset = n), t && (s.src = t)) : o()
          },
          preloadImages: function () {
            var e = this;

            function t() {
              null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
            }
            e.imagesToLoad = e.$el.find("img");
            for (var n = 0; n < e.imagesToLoad.length; n += 1) {
              var i = e.imagesToLoad[n];
              e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
            }
          }
        }
      },
      S = {},
      T = function (h) {
        function p() {
          for (var e, t, r, n = [], i = arguments.length; i--;) n[i] = arguments[i];
          1 === n.length && n[0].constructor && n[0].constructor === Object ? r = n[0] : (t = (e = n)[0], r = e[1]), r || (r = {}), r = O.extend({}, r), t && !r.el && (r.el = t), h.call(this, r), Object.keys(C).forEach(function (t) {
            Object.keys(C[t]).forEach(function (e) {
              p.prototype[e] || (p.prototype[e] = C[t][e])
            })
          });
          var a = this;
          void 0 === a.modules && (a.modules = {}), Object.keys(a.modules).forEach(function (e) {
            var t = a.modules[e];
            if (t.params) {
              var n = Object.keys(t.params)[0],
                i = t.params[n];
              if ("object" != typeof i) return;
              if (!(n in r && "enabled" in i)) return;
              !0 === r[n] && (r[n] = {
                enabled: !0
              }), "object" != typeof r[n] || "enabled" in r[n] || (r[n].enabled = !0), r[n] || (r[n] = {
                enabled: !1
              })
            }
          });
          var s = O.extend({}, w);
          a.useModulesParams(s), a.params = O.extend({}, s, S, r), a.originalParams = O.extend({}, a.params), a.passedParams = O.extend({}, r);
          var o = (a.$ = z)(a.params.el);
          if (t = o[0]) {
            if (1 < o.length) {
              var l = [];
              return o.each(function (e, t) {
                var n = O.extend({}, r, {
                  el: t
                });
                l.push(new p(n))
              }), l
            }
            t.swiper = a, o.data("swiper", a);
            var u, c, d = o.children("." + a.params.wrapperClass);
            return O.extend(a, {
              $el: o,
              el: t,
              $wrapperEl: d,
              wrapperEl: d[0],
              classNames: [],
              slides: z(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: function () {
                return "horizontal" === a.params.direction
              },
              isVertical: function () {
                return "vertical" === a.params.direction
              },
              rtl: "rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction"),
              rtlTranslate: "horizontal" === a.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction")),
              wrongRTL: "-webkit-box" === d.css("display"),
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: a.params.allowSlideNext,
              allowSlidePrev: a.params.allowSlidePrev,
              touchEvents: (u = ["touchstart", "touchmove", "touchend"], c = ["mousedown", "mousemove", "mouseup"], _.pointerEvents ? c = ["pointerdown", "pointermove", "pointerup"] : _.prefixedPointerEvents && (c = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), a.touchEventsTouch = {
                start: u[0],
                move: u[1],
                end: u[2]
              }, a.touchEventsDesktop = {
                start: c[0],
                move: c[1],
                end: c[2]
              }, _.touch || !a.params.simulateTouch ? a.touchEventsTouch : a.touchEventsDesktop),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                formElements: "input, select, option, textarea, button, video",
                lastClickTime: O.now(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0
              },
              allowClick: !0,
              allowTouchMove: a.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
              },
              imagesToLoad: [],
              imagesLoaded: 0
            }), a.useModules(), a.params.init && a.init(), a
          }
        }
        h && (p.__proto__ = h);
        var e = {
          extendedDefaults: {
            configurable: !0
          },
          defaults: {
            configurable: !0
          },
          Class: {
            configurable: !0
          },
          $: {
            configurable: !0
          }
        };
        return ((p.prototype = Object.create(h && h.prototype)).constructor = p).prototype.slidesPerViewDynamic = function () {
          var e = this.params,
            t = this.slides,
            n = this.slidesGrid,
            i = this.size,
            r = this.activeIndex,
            a = 1;
          if (e.centeredSlides) {
            for (var s, o = t[r].swiperSlideSize, l = r + 1; l < t.length; l += 1) t[l] && !s && (a += 1, i < (o += t[l].swiperSlideSize) && (s = !0));
            for (var u = r - 1; 0 <= u; u -= 1) t[u] && !s && (a += 1, i < (o += t[u].swiperSlideSize) && (s = !0))
          } else
            for (var c = r + 1; c < t.length; c += 1) n[c] - n[r] < i && (a += 1);
          return a
        }, p.prototype.update = function () {
          var n = this;
          if (n && !n.destroyed) {
            var e = n.snapGrid,
              t = n.params;
            t.breakpoints && n.setBreakpoint(), n.updateSize(), n.updateSlides(), n.updateProgress(), n.updateSlidesClasses(), n.params.freeMode ? (i(), n.params.autoHeight && n.updateAutoHeight()) : (("auto" === n.params.slidesPerView || 1 < n.params.slidesPerView) && n.isEnd && !n.params.centeredSlides ? n.slideTo(n.slides.length - 1, 0, !1, !0) : n.slideTo(n.activeIndex, 0, !1, !0)) || i(), t.watchOverflow && e !== n.snapGrid && n.checkOverflow(), n.emit("update")
          }

          function i() {
            var e = n.rtlTranslate ? -1 * n.translate : n.translate,
              t = Math.min(Math.max(e, n.maxTranslate()), n.minTranslate());
            n.setTranslate(t), n.updateActiveIndex(), n.updateSlidesClasses()
          }
        }, p.prototype.init = function () {
          var e = this;
          e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"))
        }, p.prototype.destroy = function (e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          var n = this,
            i = n.params,
            r = n.$el,
            a = n.$wrapperEl,
            s = n.slides;
          n.emit("beforeDestroy"), n.initialized = !1, n.detachEvents(), i.loop && n.loopDestroy(), t && (n.removeClasses(), r.removeAttr("style"), a.removeAttr("style"), s && s.length && s.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), n.emit("destroy"), Object.keys(n.eventsListeners).forEach(function (e) {
            n.off(e)
          }), !1 !== e && (n.$el[0].swiper = null, n.$el.data("swiper", null), O.deleteProps(n)), n.destroyed = !0
        }, p.extendDefaults = function (e) {
          O.extend(S, e)
        }, e.extendedDefaults.get = function () {
          return S
        }, e.defaults.get = function () {
          return w
        }, e.Class.get = function () {
          return h
        }, e.$.get = function () {
          return z
        }, Object.defineProperties(p, e), p
      }(r),
      E = {
        name: "device",
        proto: {
          device: m
        },
        static: {
          device: m
        }
      },
      k = {
        name: "support",
        proto: {
          support: _
        },
        static: {
          support: _
        }
      },
      M = {
        name: "browser",
        proto: {
          browser: D
        },
        static: {
          browser: D
        }
      },
      P = {
        name: "resize",
        create: function () {
          var e = this;
          O.extend(e, {
            resize: {
              resizeHandler: function () {
                e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
              },
              orientationChangeHandler: function () {
                e && !e.destroyed && e.initialized && e.emit("orientationchange")
              }
            }
          })
        },
        on: {
          init: function () {
            N.addEventListener("resize", this.resize.resizeHandler), N.addEventListener("orientationchange", this.resize.orientationChangeHandler)
          },
          destroy: function () {
            N.removeEventListener("resize", this.resize.resizeHandler), N.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
          }
        }
      },
      A = {
        func: N.MutationObserver || N.WebkitMutationObserver,
        attach: function (e, t) {
          void 0 === t && (t = {});
          var n = this,
            i = new A.func(function (e) {
              e.forEach(function (e) {
                n.emit("observerUpdate", e)
              })
            });
          i.observe(e, {
            attributes: void 0 === t.attributes || t.attributes,
            childList: void 0 === t.childList || t.childList,
            characterData: void 0 === t.characterData || t.characterData
          }), n.observer.observers.push(i)
        },
        init: function () {
          if (_.observer && this.params.observer) {
            if (this.params.observeParents)
              for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
            this.observer.attach(this.$el[0], {
              childList: !1
            }), this.observer.attach(this.$wrapperEl[0], {
              attributes: !1
            })
          }
        },
        destroy: function () {
          this.observer.observers.forEach(function (e) {
            e.disconnect()
          }), this.observer.observers = []
        }
      },
      L = {
        name: "observer",
        params: {
          observer: !1,
          observeParents: !1
        },
        create: function () {
          O.extend(this, {
            observer: {
              init: A.init.bind(this),
              attach: A.attach.bind(this),
              destroy: A.destroy.bind(this),
              observers: []
            }
          })
        },
        on: {
          init: function () {
            this.observer.init()
          },
          destroy: function () {
            this.observer.destroy()
          }
        }
      },
      F = {
        update: function (e) {
          var t = this,
            n = t.params,
            i = n.slidesPerView,
            r = n.slidesPerGroup,
            a = n.centeredSlides,
            s = t.virtual,
            o = s.from,
            l = s.to,
            u = s.slides,
            c = s.slidesGrid,
            d = s.renderSlide,
            h = s.offset;
          t.updateActiveIndex();
          var p, f, g, m = t.activeIndex || 0;
          p = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", a ? (f = Math.floor(i / 2) + r, g = Math.floor(i / 2) + r) : (f = i + (r - 1), g = r);
          var v = Math.max((m || 0) - g, 0),
            y = Math.min((m || 0) + f, u.length - 1),
            b = (t.slidesGrid[v] || 0) - (t.slidesGrid[0] || 0);

          function x() {
            t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
          }
          if (O.extend(t.virtual, {
              from: v,
              to: y,
              offset: b,
              slidesGrid: t.slidesGrid
            }), o === v && l === y && !e) return t.slidesGrid !== c && b !== h && t.slides.css(p, b + "px"), void t.updateProgress();
          if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
            offset: b,
            from: v,
            to: y,
            slides: function () {
              for (var e = [], t = v; t <= y; t += 1) e.push(u[t]);
              return e
            }()
          }), void x();
          var w = [],
            C = [];
          if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
          else
            for (var S = o; S <= l; S += 1)(S < v || y < S) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + S + '"]').remove();
          for (var T = 0; T < u.length; T += 1) v <= T && T <= y && (void 0 === l || e ? C.push(T) : (l < T && C.push(T), T < o && w.push(T)));
          C.forEach(function (e) {
            t.$wrapperEl.append(d(u[e], e))
          }), w.sort(function (e, t) {
            return e < t
          }).forEach(function (e) {
            t.$wrapperEl.prepend(d(u[e], e))
          }), t.$wrapperEl.children(".swiper-slide").css(p, b + "px"), x()
        },
        renderSlide: function (e, t) {
          var n = this.params.virtual;
          if (n.cache && this.virtual.cache[t]) return this.virtual.cache[t];
          var i = n.renderSlide ? z(n.renderSlide.call(this, e, t)) : z('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
          return i.attr("data-swiper-slide-index") || i.attr("data-swiper-slide-index", t), n.cache && (this.virtual.cache[t] = i), i
        },
        appendSlide: function (e) {
          this.virtual.slides.push(e), this.virtual.update(!0)
        },
        prependSlide: function (e) {
          if (this.virtual.slides.unshift(e), this.params.virtual.cache) {
            var t = this.virtual.cache,
              n = {};
            Object.keys(t).forEach(function (e) {
              n[e + 1] = t[e]
            }), this.virtual.cache = n
          }
          this.virtual.update(!0), this.slideNext(0)
        }
      },
      I = {
        name: "virtual",
        params: {
          virtual: {
            enabled: !1,
            slides: [],
            cache: !0,
            renderSlide: null,
            renderExternal: null
          }
        },
        create: function () {
          O.extend(this, {
            virtual: {
              update: F.update.bind(this),
              appendSlide: F.appendSlide.bind(this),
              prependSlide: F.prependSlide.bind(this),
              renderSlide: F.renderSlide.bind(this),
              slides: this.params.virtual.slides,
              cache: {}
            }
          })
        },
        on: {
          beforeInit: function () {
            if (this.params.virtual.enabled) {
              this.classNames.push(this.params.containerModifierClass + "virtual");
              var e = {
                watchSlidesProgress: !0
              };
              O.extend(this.params, e), O.extend(this.originalParams, e), this.virtual.update()
            }
          },
          setTranslate: function () {
            this.params.virtual.enabled && this.virtual.update()
          }
        }
      },
      j = {
        handle: function (e) {
          var t = this,
            n = t.rtlTranslate,
            i = e;
          i.originalEvent && (i = i.originalEvent);
          var r = i.keyCode || i.charCode;
          if (!t.allowSlideNext && (t.isHorizontal() && 39 === r || t.isVertical() && 40 === r)) return !1;
          if (!t.allowSlidePrev && (t.isHorizontal() && 37 === r || t.isVertical() && 38 === r)) return !1;
          if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || g.activeElement && g.activeElement.nodeName && ("input" === g.activeElement.nodeName.toLowerCase() || "textarea" === g.activeElement.nodeName.toLowerCase()))) {
            if (t.params.keyboard.onlyInViewport && (37 === r || 39 === r || 38 === r || 40 === r)) {
              var a = !1;
              if (0 < t.$el.parents("." + t.params.slideClass).length && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
              var s = N.innerWidth,
                o = N.innerHeight,
                l = t.$el.offset();
              n && (l.left -= t.$el[0].scrollLeft);
              for (var u = [
                  [l.left, l.top],
                  [l.left + t.width, l.top],
                  [l.left, l.top + t.height],
                  [l.left + t.width, l.top + t.height]
                ], c = 0; c < u.length; c += 1) {
                var d = u[c];
                0 <= d[0] && d[0] <= s && 0 <= d[1] && d[1] <= o && (a = !0)
              }
              if (!a) return
            }
            t.isHorizontal() ? (37 !== r && 39 !== r || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (39 === r && !n || 37 === r && n) && t.slideNext(), (37 === r && !n || 39 === r && n) && t.slidePrev()) : (38 !== r && 40 !== r || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), 40 === r && t.slideNext(), 38 === r && t.slidePrev()), t.emit("keyPress", r)
          }
        },
        enable: function () {
          this.keyboard.enabled || (z(g).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
        },
        disable: function () {
          this.keyboard.enabled && (z(g).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
        }
      },
      $ = {
        name: "keyboard",
        params: {
          keyboard: {
            enabled: !1,
            onlyInViewport: !0
          }
        },
        create: function () {
          O.extend(this, {
            keyboard: {
              enabled: !1,
              enable: j.enable.bind(this),
              disable: j.disable.bind(this),
              handle: j.handle.bind(this)
            }
          })
        },
        on: {
          init: function () {
            this.params.keyboard.enabled && this.keyboard.enable()
          },
          destroy: function () {
            this.keyboard.enabled && this.keyboard.disable()
          }
        }
      };
    var H = {
        lastScrollTime: O.now(),
        event: -1 < N.navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function () {
          var e = "onwheel",
            t = e in g;
          if (!t) {
            var n = g.createElement("div");
            n.setAttribute(e, "return;"), t = "function" == typeof n[e]
          }
          return !t && g.implementation && g.implementation.hasFeature && !0 !== g.implementation.hasFeature("", "") && (t = g.implementation.hasFeature("Events.wheel", "3.0")), t
        }() ? "wheel" : "mousewheel",
        normalize: function (e) {
          var t = 0,
            n = 0,
            i = 0,
            r = 0;
          return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0), i = 10 * t, r = 10 * n, "deltaY" in e && (r = e.deltaY), "deltaX" in e && (i = e.deltaX), (i || r) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, r *= 40) : (i *= 800, r *= 800)), i && !t && (t = i < 1 ? -1 : 1), r && !n && (n = r < 1 ? -1 : 1), {
            spinX: t,
            spinY: n,
            pixelX: i,
            pixelY: r
          }
        },
        handleMouseEnter: function () {
          this.mouseEntered = !0
        },
        handleMouseLeave: function () {
          this.mouseEntered = !1
        },
        handle: function (e) {
          var t = e,
            n = this,
            i = n.params.mousewheel;
          if (!n.mouseEntered && !i.releaseOnEdges) return !0;
          t.originalEvent && (t = t.originalEvent);
          var r = 0,
            a = n.rtlTranslate ? -1 : 1,
            s = H.normalize(t);
          if (i.forceToAxis)
            if (n.isHorizontal()) {
              if (!(Math.abs(s.pixelX) > Math.abs(s.pixelY))) return !0;
              r = s.pixelX * a
            } else {
              if (!(Math.abs(s.pixelY) > Math.abs(s.pixelX))) return !0;
              r = s.pixelY
            }
          else r = Math.abs(s.pixelX) > Math.abs(s.pixelY) ? -s.pixelX * a : -s.pixelY;
          if (0 === r) return !0;
          if (i.invert && (r = -r), n.params.freeMode) {
            n.params.loop && n.loopFix();
            var o = n.getTranslate() + r * i.sensitivity,
              l = n.isBeginning,
              u = n.isEnd;
            if (o >= n.minTranslate() && (o = n.minTranslate()), o <= n.maxTranslate() && (o = n.maxTranslate()), n.setTransition(0), n.setTranslate(o), n.updateProgress(), n.updateActiveIndex(), n.updateSlidesClasses(), (!l && n.isBeginning || !u && n.isEnd) && n.updateSlidesClasses(), n.params.freeModeSticky && (clearTimeout(n.mousewheel.timeout), n.mousewheel.timeout = O.nextTick(function () {
                n.slideToClosest()
              }, 300)), n.emit("scroll", t), n.params.autoplay && n.params.autoplayDisableOnInteraction && n.stopAutoplay(), o === n.minTranslate() || o === n.maxTranslate()) return !0
          } else {
            if (60 < O.now() - n.mousewheel.lastScrollTime)
              if (r < 0)
                if (n.isEnd && !n.params.loop || n.animating) {
                  if (i.releaseOnEdges) return !0
                } else n.slideNext(), n.emit("scroll", t);
            else if (n.isBeginning && !n.params.loop || n.animating) {
              if (i.releaseOnEdges) return !0
            } else n.slidePrev(), n.emit("scroll", t);
            n.mousewheel.lastScrollTime = (new N.Date).getTime()
          }
          return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
        },
        enable: function () {
          if (!H.event) return !1;
          if (this.mousewheel.enabled) return !1;
          var e = this.$el;
          return "container" !== this.params.mousewheel.eventsTarged && (e = z(this.params.mousewheel.eventsTarged)), e.on("mouseenter", this.mousewheel.handleMouseEnter), e.on("mouseleave", this.mousewheel.handleMouseLeave), e.on(H.event, this.mousewheel.handle), this.mousewheel.enabled = !0
        },
        disable: function () {
          if (!H.event) return !1;
          if (!this.mousewheel.enabled) return !1;
          var e = this.$el;
          return "container" !== this.params.mousewheel.eventsTarged && (e = z(this.params.mousewheel.eventsTarged)), e.off(H.event, this.mousewheel.handle), !(this.mousewheel.enabled = !1)
        }
      },
      q = {
        update: function () {
          var e = this.params.navigation;
          if (!this.params.loop) {
            var t = this.navigation,
              n = t.$nextEl,
              i = t.$prevEl;
            i && 0 < i.length && (this.isBeginning ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), n && 0 < n.length && (this.isEnd ? n.addClass(e.disabledClass) : n.removeClass(e.disabledClass), n[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass))
          }
        },
        init: function () {
          var e, t, n = this,
            i = n.params.navigation;
          (i.nextEl || i.prevEl) && (i.nextEl && (e = z(i.nextEl), n.params.uniqueNavElements && "string" == typeof i.nextEl && 1 < e.length && 1 === n.$el.find(i.nextEl).length && (e = n.$el.find(i.nextEl))), i.prevEl && (t = z(i.prevEl), n.params.uniqueNavElements && "string" == typeof i.prevEl && 1 < t.length && 1 === n.$el.find(i.prevEl).length && (t = n.$el.find(i.prevEl))), e && 0 < e.length && e.on("click", function (e) {
            e.preventDefault(), n.isEnd && !n.params.loop || n.slideNext()
          }), t && 0 < t.length && t.on("click", function (e) {
            e.preventDefault(), n.isBeginning && !n.params.loop || n.slidePrev()
          }), O.extend(n.navigation, {
            $nextEl: e,
            nextEl: e && e[0],
            $prevEl: t,
            prevEl: t && t[0]
          }))
        },
        destroy: function () {
          var e = this.navigation,
            t = e.$nextEl,
            n = e.$prevEl;
          t && t.length && (t.off("click"), t.removeClass(this.params.navigation.disabledClass)), n && n.length && (n.off("click"), n.removeClass(this.params.navigation.disabledClass))
        }
      },
      V = {
        update: function () {
          var e = this,
            t = e.rtl,
            r = e.params.pagination;
          if (r.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
            var a, n = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
              i = e.pagination.$el,
              s = e.params.loop ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
            if (e.params.loop ? ((a = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > n - 1 - 2 * e.loopedSlides && (a -= n - 2 * e.loopedSlides), s - 1 < a && (a -= s), a < 0 && "bullets" !== e.params.paginationType && (a = s + a)) : a = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === r.type && e.pagination.bullets && 0 < e.pagination.bullets.length) {
              var o, l, u, c = e.pagination.bullets;
              if (r.dynamicBullets && (e.pagination.bulletSize = c.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), i.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (r.dynamicMainBullets + 4) + "px"), 1 < r.dynamicMainBullets && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += a - e.previousIndex, e.pagination.dynamicBulletIndex > r.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = r.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), o = a - e.pagination.dynamicBulletIndex, u = ((l = o + (Math.min(c.length, r.dynamicMainBullets) - 1)) + o) / 2), c.removeClass(r.bulletActiveClass + " " + r.bulletActiveClass + "-next " + r.bulletActiveClass + "-next-next " + r.bulletActiveClass + "-prev " + r.bulletActiveClass + "-prev-prev " + r.bulletActiveClass + "-main"), 1 < i.length) c.each(function (e, t) {
                var n = z(t),
                  i = n.index();
                i === a && n.addClass(r.bulletActiveClass), r.dynamicBullets && (o <= i && i <= l && n.addClass(r.bulletActiveClass + "-main"), i === o && n.prev().addClass(r.bulletActiveClass + "-prev").prev().addClass(r.bulletActiveClass + "-prev-prev"), i === l && n.next().addClass(r.bulletActiveClass + "-next").next().addClass(r.bulletActiveClass + "-next-next"))
              });
              else if (c.eq(a).addClass(r.bulletActiveClass), r.dynamicBullets) {
                for (var d = c.eq(o), h = c.eq(l), p = o; p <= l; p += 1) c.eq(p).addClass(r.bulletActiveClass + "-main");
                d.prev().addClass(r.bulletActiveClass + "-prev").prev().addClass(r.bulletActiveClass + "-prev-prev"), h.next().addClass(r.bulletActiveClass + "-next").next().addClass(r.bulletActiveClass + "-next-next")
              }
              if (r.dynamicBullets) {
                var f = Math.min(c.length, r.dynamicMainBullets + 4),
                  g = (e.pagination.bulletSize * f - e.pagination.bulletSize) / 2 - u * e.pagination.bulletSize,
                  m = t ? "right" : "left";
                c.css(e.isHorizontal() ? m : "top", g + "px")
              }
            }
            if ("fraction" === r.type && (i.find("." + r.currentClass).text(a + 1), i.find("." + r.totalClass).text(s)), "progressbar" === r.type) {
              var v;
              v = r.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
              var y = (a + 1) / s,
                b = 1,
                x = 1;
              "horizontal" === v ? b = y : x = y, i.find("." + r.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + b + ") scaleY(" + x + ")").transition(e.params.speed)
            }
            "custom" === r.type && r.renderCustom ? (i.html(r.renderCustom(e, a + 1, s)), e.emit("paginationRender", e, i[0])) : e.emit("paginationUpdate", e, i[0]), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](r.lockClass)
          }
        },
        render: function () {
          var e = this,
            t = e.params.pagination;
          if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
            var n = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
              i = e.pagination.$el,
              r = "";
            if ("bullets" === t.type) {
              for (var a = e.params.loop ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, s = 0; s < a; s += 1) t.renderBullet ? r += t.renderBullet.call(e, s, t.bulletClass) : r += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
              i.html(r), e.pagination.bullets = i.find("." + t.bulletClass)
            }
            "fraction" === t.type && (r = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(r)), "progressbar" === t.type && (r = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(r)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
          }
        },
        init: function () {
          var n = this,
            e = n.params.pagination;
          if (e.el) {
            var t = z(e.el);
            0 !== t.length && (n.params.uniqueNavElements && "string" == typeof e.el && 1 < t.length && 1 === n.$el.find(e.el).length && (t = n.$el.find(e.el)), "bullets" === e.type && e.clickable && t.addClass(e.clickableClass), t.addClass(e.modifierClass + e.type), "bullets" === e.type && e.dynamicBullets && (t.addClass("" + e.modifierClass + e.type + "-dynamic"), n.pagination.dynamicBulletIndex = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && t.addClass(e.progressbarOppositeClass), e.clickable && t.on("click", "." + e.bulletClass, function (e) {
              e.preventDefault();
              var t = z(this).index() * n.params.slidesPerGroup;
              n.params.loop && (t += n.loopedSlides), n.slideTo(t)
            }), O.extend(n.pagination, {
              $el: t,
              el: t[0]
            }))
          }
        },
        destroy: function () {
          var e = this.params.pagination;
          if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
            var t = this.pagination.$el;
            t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass)
          }
        }
      },
      B = {
        setTranslate: function () {
          if (this.params.scrollbar.el && this.scrollbar.el) {
            var e = this.scrollbar,
              t = this.rtlTranslate,
              n = this.progress,
              i = e.dragSize,
              r = e.trackSize,
              a = e.$dragEl,
              s = e.$el,
              o = this.params.scrollbar,
              l = i,
              u = (r - i) * n;
            t ? 0 < (u = -u) ? (l = i - u, u = 0) : r < -u + i && (l = r + u) : u < 0 ? (l = i + u, u = 0) : r < u + i && (l = r - u), this.isHorizontal() ? (_.transforms3d ? a.transform("translate3d(" + u + "px, 0, 0)") : a.transform("translateX(" + u + "px)"), a[0].style.width = l + "px") : (_.transforms3d ? a.transform("translate3d(0px, " + u + "px, 0)") : a.transform("translateY(" + u + "px)"), a[0].style.height = l + "px"), o.hide && (clearTimeout(this.scrollbar.timeout), s[0].style.opacity = 1, this.scrollbar.timeout = setTimeout(function () {
              s[0].style.opacity = 0, s.transition(400)
            }, 1e3))
          }
        },
        setTransition: function (e) {
          this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
        },
        updateSize: function () {
          var e = this;
          if (e.params.scrollbar.el && e.scrollbar.el) {
            var t = e.scrollbar,
              n = t.$dragEl,
              i = t.$el;
            n[0].style.width = "", n[0].style.height = "";
            var r, a = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
              s = e.size / e.virtualSize,
              o = s * (a / e.size);
            r = "auto" === e.params.scrollbar.dragSize ? a * s : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? n[0].style.width = r + "px" : n[0].style.height = r + "px", i[0].style.display = 1 <= s ? "none" : "", e.params.scrollbarHide && (i[0].style.opacity = 0), O.extend(t, {
              trackSize: a,
              divider: s,
              moveDivider: o,
              dragSize: r
            }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
          }
        },
        setDragPosition: function (e) {
          var t, n = this,
            i = n.scrollbar,
            r = n.rtlTranslate,
            a = i.$el,
            s = i.dragSize,
            o = i.trackSize;
          t = ((n.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - a.offset()[n.isHorizontal() ? "left" : "top"] - s / 2) / (o - s), t = Math.max(Math.min(t, 1), 0), r && (t = 1 - t);
          var l = n.minTranslate() + (n.maxTranslate() - n.minTranslate()) * t;
          n.updateProgress(l), n.setTranslate(l), n.updateActiveIndex(), n.updateSlidesClasses()
        },
        onDragStart: function (e) {
          var t = this.params.scrollbar,
            n = this.scrollbar,
            i = this.$wrapperEl,
            r = n.$el,
            a = n.$dragEl;
          this.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), i.transition(100), a.transition(100), n.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), r.transition(0), t.hide && r.css("opacity", 1), this.emit("scrollbarDragStart", e)
        },
        onDragMove: function (e) {
          var t = this.scrollbar,
            n = this.$wrapperEl,
            i = t.$el,
            r = t.$dragEl;
          this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), n.transition(0), i.transition(0), r.transition(0), this.emit("scrollbarDragMove", e))
        },
        onDragEnd: function (e) {
          var t = this.params.scrollbar,
            n = this.scrollbar.$el;
          this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = O.nextTick(function () {
            n.css("opacity", 0), n.transition(400)
          }, 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest())
        },
        enableDraggable: function () {
          var e = this;
          if (e.params.scrollbar.el) {
            var t = e.scrollbar,
              n = e.touchEvents,
              i = e.touchEventsDesktop,
              r = e.params,
              a = t.$el[0],
              s = !(!_.passiveListener || !r.passiveListener) && {
                passive: !1,
                capture: !1
              },
              o = !(!_.passiveListener || !r.passiveListener) && {
                passive: !0,
                capture: !1
              };
            _.touch || !_.pointerEvents && !_.prefixedPointerEvents ? (_.touch && (a.addEventListener(n.start, e.scrollbar.onDragStart, s), a.addEventListener(n.move, e.scrollbar.onDragMove, s), a.addEventListener(n.end, e.scrollbar.onDragEnd, o)), (r.simulateTouch && !m.ios && !m.android || r.simulateTouch && !_.touch && m.ios) && (a.addEventListener("mousedown", e.scrollbar.onDragStart, s), g.addEventListener("mousemove", e.scrollbar.onDragMove, s), g.addEventListener("mouseup", e.scrollbar.onDragEnd, o))) : (a.addEventListener(i.start, e.scrollbar.onDragStart, s), g.addEventListener(i.move, e.scrollbar.onDragMove, s), g.addEventListener(i.end, e.scrollbar.onDragEnd, o))
          }
        },
        disableDraggable: function () {
          var e = this;
          if (e.params.scrollbar.el) {
            var t = e.scrollbar,
              n = e.touchEvents,
              i = e.touchEventsDesktop,
              r = e.params,
              a = t.$el[0],
              s = !(!_.passiveListener || !r.passiveListener) && {
                passive: !1,
                capture: !1
              },
              o = !(!_.passiveListener || !r.passiveListener) && {
                passive: !0,
                capture: !1
              };
            _.touch || !_.pointerEvents && !_.prefixedPointerEvents ? (_.touch && (a.removeEventListener(n.start, e.scrollbar.onDragStart, s), a.removeEventListener(n.move, e.scrollbar.onDragMove, s), a.removeEventListener(n.end, e.scrollbar.onDragEnd, o)), (r.simulateTouch && !m.ios && !m.android || r.simulateTouch && !_.touch && m.ios) && (a.removeEventListener("mousedown", e.scrollbar.onDragStart, s), g.removeEventListener("mousemove", e.scrollbar.onDragMove, s), g.removeEventListener("mouseup", e.scrollbar.onDragEnd, o))) : (a.removeEventListener(i.start, e.scrollbar.onDragStart, s), g.removeEventListener(i.move, e.scrollbar.onDragMove, s), g.removeEventListener(i.end, e.scrollbar.onDragEnd, o))
          }
        },
        init: function () {
          if (this.params.scrollbar.el) {
            var e = this.scrollbar,
              t = this.$el,
              n = this.params.scrollbar,
              i = z(n.el);
            this.params.uniqueNavElements && "string" == typeof n.el && 1 < i.length && 1 === t.find(n.el).length && (i = t.find(n.el));
            var r = i.find("." + this.params.scrollbar.dragClass);
            0 === r.length && (r = z('<div class="' + this.params.scrollbar.dragClass + '"></div>'), i.append(r)), O.extend(e, {
              $el: i,
              el: i[0],
              $dragEl: r,
              dragEl: r[0]
            }), n.draggable && e.enableDraggable()
          }
        },
        destroy: function () {
          this.scrollbar.disableDraggable()
        }
      },
      R = {
        setTransform: function (e, t) {
          var n = this.rtl,
            i = z(e),
            r = n ? -1 : 1,
            a = i.attr("data-swiper-parallax") || "0",
            s = i.attr("data-swiper-parallax-x"),
            o = i.attr("data-swiper-parallax-y"),
            l = i.attr("data-swiper-parallax-scale"),
            u = i.attr("data-swiper-parallax-opacity");
          if (s || o ? (s = s || "0", o = o || "0") : this.isHorizontal() ? (s = a, o = "0") : (o = a, s = "0"), s = 0 <= s.indexOf("%") ? parseInt(s, 10) * t * r + "%" : s * t * r + "px", o = 0 <= o.indexOf("%") ? parseInt(o, 10) * t + "%" : o * t + "px", null != u) {
            var c = u - (u - 1) * (1 - Math.abs(t));
            i[0].style.opacity = c
          }
          if (null == l) i.transform("translate3d(" + s + ", " + o + ", 0px)");
          else {
            var d = l - (l - 1) * (1 - Math.abs(t));
            i.transform("translate3d(" + s + ", " + o + ", 0px) scale(" + d + ")")
          }
        },
        setTranslate: function () {
          var i = this,
            e = i.$el,
            t = i.slides,
            r = i.progress,
            a = i.snapGrid;
          e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, t) {
            i.parallax.setTransform(t, r)
          }), t.each(function (e, t) {
            var n = t.progress;
            1 < i.params.slidesPerGroup && "auto" !== i.params.slidesPerView && (n += Math.ceil(e / 2) - r * (a.length - 1)), n = Math.min(Math.max(n, -1), 1), z(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, t) {
              i.parallax.setTransform(t, n)
            })
          })
        },
        setTransition: function (r) {
          void 0 === r && (r = this.params.speed);
          this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, t) {
            var n = z(t),
              i = parseInt(n.attr("data-swiper-parallax-duration"), 10) || r;
            0 === r && (i = 0), n.transition(i)
          })
        }
      },
      G = {
        getDistanceBetweenTouches: function (e) {
          if (e.targetTouches.length < 2) return 1;
          var t = e.targetTouches[0].pageX,
            n = e.targetTouches[0].pageY,
            i = e.targetTouches[1].pageX,
            r = e.targetTouches[1].pageY;
          return Math.sqrt(Math.pow(i - t, 2) + Math.pow(r - n, 2))
        },
        onGestureStart: function (e) {
          var t = this.params.zoom,
            n = this.zoom,
            i = n.gesture;
          if (n.fakeGestureTouched = !1, n.fakeGestureMoved = !1, !_.gestures) {
            if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
            n.fakeGestureTouched = !0, i.scaleStart = G.getDistanceBetweenTouches(e)
          }
          i.$slideEl && i.$slideEl.length || (i.$slideEl = z(e.target).closest(".swiper-slide"), 0 === i.$slideEl.length && (i.$slideEl = this.slides.eq(this.activeIndex)), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass), i.maxRatio = i.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio, 0 !== i.$imageWrapEl.length) ? (i.$imageEl.transition(0), this.zoom.isScaling = !0) : i.$imageEl = void 0
        },
        onGestureChange: function (e) {
          var t = this.params.zoom,
            n = this.zoom,
            i = n.gesture;
          if (!_.gestures) {
            if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
            n.fakeGestureMoved = !0, i.scaleMove = G.getDistanceBetweenTouches(e)
          }
          i.$imageEl && 0 !== i.$imageEl.length && (_.gestures ? this.zoom.scale = e.scale * n.currentScale : n.scale = i.scaleMove / i.scaleStart * n.currentScale, n.scale > i.maxRatio && (n.scale = i.maxRatio - 1 + Math.pow(n.scale - i.maxRatio + 1, .5)), n.scale < t.minRatio && (n.scale = t.minRatio + 1 - Math.pow(t.minRatio - n.scale + 1, .5)), i.$imageEl.transform("translate3d(0,0,0) scale(" + n.scale + ")"))
        },
        onGestureEnd: function (e) {
          var t = this.params.zoom,
            n = this.zoom,
            i = n.gesture;
          if (!_.gestures) {
            if (!n.fakeGestureTouched || !n.fakeGestureMoved) return;
            if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !m.android) return;
            n.fakeGestureTouched = !1, n.fakeGestureMoved = !1
          }
          i.$imageEl && 0 !== i.$imageEl.length && (n.scale = Math.max(Math.min(n.scale, i.maxRatio), t.minRatio), i.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + n.scale + ")"), n.currentScale = n.scale, n.isScaling = !1, 1 === n.scale && (i.$slideEl = void 0))
        },
        onTouchStart: function (e) {
          var t = this.zoom,
            n = t.gesture,
            i = t.image;
          n.$imageEl && 0 !== n.$imageEl.length && (i.isTouched || (m.android && e.preventDefault(), i.isTouched = !0, i.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, i.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
        },
        onTouchMove: function (e) {
          var t = this.zoom,
            n = t.gesture,
            i = t.image,
            r = t.velocity;
          if (n.$imageEl && 0 !== n.$imageEl.length && (this.allowClick = !1, i.isTouched && n.$slideEl)) {
            i.isMoved || (i.width = n.$imageEl[0].offsetWidth, i.height = n.$imageEl[0].offsetHeight, i.startX = O.getTranslate(n.$imageWrapEl[0], "x") || 0, i.startY = O.getTranslate(n.$imageWrapEl[0], "y") || 0, n.slideWidth = n.$slideEl[0].offsetWidth, n.slideHeight = n.$slideEl[0].offsetHeight, n.$imageWrapEl.transition(0), this.rtl && (i.startX = -i.startX, i.startY = -i.startY));
            var a = i.width * t.scale,
              s = i.height * t.scale;
            if (!(a < n.slideWidth && s < n.slideHeight)) {
              if (i.minX = Math.min(n.slideWidth / 2 - a / 2, 0), i.maxX = -i.minX, i.minY = Math.min(n.slideHeight / 2 - s / 2, 0), i.maxY = -i.minY, i.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, i.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !i.isMoved && !t.isScaling) {
                if (this.isHorizontal() && (Math.floor(i.minX) === Math.floor(i.startX) && i.touchesCurrent.x < i.touchesStart.x || Math.floor(i.maxX) === Math.floor(i.startX) && i.touchesCurrent.x > i.touchesStart.x)) return void(i.isTouched = !1);
                if (!this.isHorizontal() && (Math.floor(i.minY) === Math.floor(i.startY) && i.touchesCurrent.y < i.touchesStart.y || Math.floor(i.maxY) === Math.floor(i.startY) && i.touchesCurrent.y > i.touchesStart.y)) return void(i.isTouched = !1)
              }
              e.preventDefault(), e.stopPropagation(), i.isMoved = !0, i.currentX = i.touchesCurrent.x - i.touchesStart.x + i.startX, i.currentY = i.touchesCurrent.y - i.touchesStart.y + i.startY, i.currentX < i.minX && (i.currentX = i.minX + 1 - Math.pow(i.minX - i.currentX + 1, .8)), i.currentX > i.maxX && (i.currentX = i.maxX - 1 + Math.pow(i.currentX - i.maxX + 1, .8)), i.currentY < i.minY && (i.currentY = i.minY + 1 - Math.pow(i.minY - i.currentY + 1, .8)), i.currentY > i.maxY && (i.currentY = i.maxY - 1 + Math.pow(i.currentY - i.maxY + 1, .8)), r.prevPositionX || (r.prevPositionX = i.touchesCurrent.x), r.prevPositionY || (r.prevPositionY = i.touchesCurrent.y), r.prevTime || (r.prevTime = Date.now()), r.x = (i.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2, r.y = (i.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2, Math.abs(i.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0), Math.abs(i.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0), r.prevPositionX = i.touchesCurrent.x, r.prevPositionY = i.touchesCurrent.y, r.prevTime = Date.now(), n.$imageWrapEl.transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
            }
          }
        },
        onTouchEnd: function () {
          var e = this.zoom,
            t = e.gesture,
            n = e.image,
            i = e.velocity;
          if (t.$imageEl && 0 !== t.$imageEl.length) {
            if (!n.isTouched || !n.isMoved) return n.isTouched = !1, void(n.isMoved = !1);
            n.isTouched = !1, n.isMoved = !1;
            var r = 300,
              a = 300,
              s = i.x * r,
              o = n.currentX + s,
              l = i.y * a,
              u = n.currentY + l;
            0 !== i.x && (r = Math.abs((o - n.currentX) / i.x)), 0 !== i.y && (a = Math.abs((u - n.currentY) / i.y));
            var c = Math.max(r, a);
            n.currentX = o, n.currentY = u;
            var d = n.width * e.scale,
              h = n.height * e.scale;
            n.minX = Math.min(t.slideWidth / 2 - d / 2, 0), n.maxX = -n.minX, n.minY = Math.min(t.slideHeight / 2 - h / 2, 0), n.maxY = -n.minY, n.currentX = Math.max(Math.min(n.currentX, n.maxX), n.minX), n.currentY = Math.max(Math.min(n.currentY, n.maxY), n.minY), t.$imageWrapEl.transition(c).transform("translate3d(" + n.currentX + "px, " + n.currentY + "px,0)")
          }
        },
        onTransitionEnd: function () {
          var e = this.zoom,
            t = e.gesture;
          t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0, e.scale = 1, e.currentScale = 1)
        },
        toggle: function (e) {
          var t = this.zoom;
          t.scale && 1 !== t.scale ? t.out() : t.in(e)
        },
        in : function (e) {
          var t, n, i, r, a, s, o, l, u, c, d, h, p, f, g, m, v = this.zoom,
            y = this.params.zoom,
            b = v.gesture,
            x = v.image;
          (b.$slideEl || (b.$slideEl = this.clickedSlide ? z(this.clickedSlide) : this.slides.eq(this.activeIndex), b.$imageEl = b.$slideEl.find("img, svg, canvas"), b.$imageWrapEl = b.$imageEl.parent("." + y.containerClass)), b.$imageEl && 0 !== b.$imageEl.length) && (b.$slideEl.addClass("" + y.zoomedSlideClass), void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, n = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x, n = x.touchesStart.y), v.scale = b.$imageWrapEl.attr("data-swiper-zoom") || y.maxRatio, v.currentScale = b.$imageWrapEl.attr("data-swiper-zoom") || y.maxRatio, e ? (g = b.$slideEl[0].offsetWidth, m = b.$slideEl[0].offsetHeight, i = b.$slideEl.offset().left + g / 2 - t, r = b.$slideEl.offset().top + m / 2 - n, o = b.$imageEl[0].offsetWidth, l = b.$imageEl[0].offsetHeight, u = o * v.scale, c = l * v.scale, p = -(d = Math.min(g / 2 - u / 2, 0)), f = -(h = Math.min(m / 2 - c / 2, 0)), (a = i * v.scale) < d && (a = d), p < a && (a = p), (s = r * v.scale) < h && (s = h), f < s && (s = f)) : s = a = 0, b.$imageWrapEl.transition(300).transform("translate3d(" + a + "px, " + s + "px,0)"), b.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + v.scale + ")"))
        },
        out: function () {
          var e = this.zoom,
            t = this.params.zoom,
            n = e.gesture;
          n.$slideEl || (n.$slideEl = this.clickedSlide ? z(this.clickedSlide) : this.slides.eq(this.activeIndex), n.$imageEl = n.$slideEl.find("img, svg, canvas"), n.$imageWrapEl = n.$imageEl.parent("." + t.containerClass)), n.$imageEl && 0 !== n.$imageEl.length && (e.scale = 1, e.currentScale = 1, n.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), n.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), n.$slideEl.removeClass("" + t.zoomedSlideClass), n.$slideEl = void 0)
        },
        enable: function () {
          var e = this,
            t = e.zoom;
          if (!t.enabled) {
            t.enabled = !0;
            var n = !("touchstart" !== e.touchEvents.start || !_.passiveListener || !e.params.passiveListeners) && {
              passive: !0,
              capture: !1
            };
            _.gestures ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, n), e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, n), e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, n)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, n), e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, n), e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, n)), e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
          }
        },
        disable: function () {
          var e = this,
            t = e.zoom;
          if (t.enabled) {
            e.zoom.enabled = !1;
            var n = !("touchstart" !== e.touchEvents.start || !_.passiveListener || !e.params.passiveListeners) && {
              passive: !0,
              capture: !1
            };
            _.gestures ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, n), e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, n), e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, n)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, n), e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, n), e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, n)), e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
          }
        }
      },
      X = {
        loadInSlide: function (e, l) {
          void 0 === l && (l = !0);
          var u = this,
            c = u.params.lazy;
          if (void 0 !== e && 0 !== u.slides.length) {
            var d = u.virtual && u.params.virtual.enabled ? u.$wrapperEl.children("." + u.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : u.slides.eq(e),
              t = d.find("." + c.elementClass + ":not(." + c.loadedClass + "):not(." + c.loadingClass + ")");
            !d.hasClass(c.elementClass) || d.hasClass(c.loadedClass) || d.hasClass(c.loadingClass) || (t = t.add(d[0])), 0 !== t.length && t.each(function (e, t) {
              var i = z(t);
              i.addClass(c.loadingClass);
              var r = i.attr("data-background"),
                a = i.attr("data-src"),
                s = i.attr("data-srcset"),
                o = i.attr("data-sizes");
              u.loadImage(i[0], a || r, s, o, !1, function () {
                if (null != u && u && (!u || u.params) && !u.destroyed) {
                  if (r ? (i.css("background-image", 'url("' + r + '")'), i.removeAttr("data-background")) : (s && (i.attr("srcset", s), i.removeAttr("data-srcset")), o && (i.attr("sizes", o), i.removeAttr("data-sizes")), a && (i.attr("src", a), i.removeAttr("data-src"))), i.addClass(c.loadedClass).removeClass(c.loadingClass), d.find("." + c.preloaderClass).remove(), u.params.loop && l) {
                    var e = d.attr("data-swiper-slide-index");
                    if (d.hasClass(u.params.slideDuplicateClass)) {
                      var t = u.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + u.params.slideDuplicateClass + ")");
                      u.lazy.loadInSlide(t.index(), !1)
                    } else {
                      var n = u.$wrapperEl.children("." + u.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                      u.lazy.loadInSlide(n.index(), !1)
                    }
                  }
                  u.emit("lazyImageReady", d[0], i[0])
                }
              }), u.emit("lazyImageLoad", d[0], i[0])
            })
          }
        },
        load: function () {
          var i = this,
            t = i.$wrapperEl,
            n = i.params,
            r = i.slides,
            e = i.activeIndex,
            a = i.virtual && n.virtual.enabled,
            s = n.lazy,
            o = n.slidesPerView;

          function l(e) {
            if (a) {
              if (t.children("." + n.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
            } else if (r[e]) return !0;
            return !1
          }

          function u(e) {
            return a ? z(e).attr("data-swiper-slide-index") : z(e).index()
          }
          if ("auto" === o && (o = 0), i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0), i.params.watchSlidesVisibility) t.children("." + n.slideVisibleClass).each(function (e, t) {
            var n = a ? z(t).attr("data-swiper-slide-index") : z(t).index();
            i.lazy.loadInSlide(n)
          });
          else if (1 < o)
            for (var c = e; c < e + o; c += 1) l(c) && i.lazy.loadInSlide(c);
          else i.lazy.loadInSlide(e);
          if (s.loadPrevNext)
            if (1 < o || s.loadPrevNextAmount && 1 < s.loadPrevNextAmount) {
              for (var d = s.loadPrevNextAmount, h = o, p = Math.min(e + h + Math.max(d, h), r.length), f = Math.max(e - Math.max(h, d), 0), g = e + o; g < p; g += 1) l(g) && i.lazy.loadInSlide(g);
              for (var m = f; m < e; m += 1) l(m) && i.lazy.loadInSlide(m)
            } else {
              var v = t.children("." + n.slideNextClass);
              0 < v.length && i.lazy.loadInSlide(u(v));
              var y = t.children("." + n.slidePrevClass);
              0 < y.length && i.lazy.loadInSlide(u(y))
            }
        }
      },
      W = {
        LinearSpline: function (e, t) {
          var n, i, r, a, s, o = function (e, t) {
            for (i = -1, n = e.length; 1 < n - i;) e[r = n + i >> 1] <= t ? i = r : n = r;
            return n
          };
          return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
            return e ? (s = o(this.x, e), a = s - 1, (e - this.x[a]) * (this.y[s] - this.y[a]) / (this.x[s] - this.x[a]) + this.y[a]) : 0
          }, this
        },
        getInterpolateFunction: function (e) {
          this.controller.spline || (this.controller.spline = this.params.loop ? new W.LinearSpline(this.slidesGrid, e.slidesGrid) : new W.LinearSpline(this.snapGrid, e.snapGrid))
        },
        setTranslate: function (e, t) {
          var n, i, r = this,
            a = r.controller.control;

          function s(e) {
            var t = r.rtlTranslate ? -r.translate : r.translate;
            "slide" === r.params.controller.by && (r.controller.getInterpolateFunction(e), i = -r.controller.spline.interpolate(-t)), i && "container" !== r.params.controller.by || (n = (e.maxTranslate() - e.minTranslate()) / (r.maxTranslate() - r.minTranslate()), i = (t - r.minTranslate()) * n + e.minTranslate()), r.params.controller.inverse && (i = e.maxTranslate() - i), e.updateProgress(i), e.setTranslate(i, r), e.updateActiveIndex(), e.updateSlidesClasses()
          }
          if (Array.isArray(a))
            for (var o = 0; o < a.length; o += 1) a[o] !== t && a[o] instanceof T && s(a[o]);
          else a instanceof T && t !== a && s(a)
        },
        setTransition: function (t, e) {
          var n, i = this,
            r = i.controller.control;

          function a(e) {
            e.setTransition(t, i), 0 !== t && (e.transitionStart(), e.$wrapperEl.transitionEnd(function () {
              r && (e.params.loop && "slide" === i.params.controller.by && e.loopFix(), e.transitionEnd())
            }))
          }
          if (Array.isArray(r))
            for (n = 0; n < r.length; n += 1) r[n] !== e && r[n] instanceof T && a(r[n]);
          else r instanceof T && e !== r && a(r)
        }
      },
      Y = {
        makeElFocusable: function (e) {
          return e.attr("tabIndex", "0"), e
        },
        addElRole: function (e, t) {
          return e.attr("role", t), e
        },
        addElLabel: function (e, t) {
          return e.attr("aria-label", t), e
        },
        disableEl: function (e) {
          return e.attr("aria-disabled", !0), e
        },
        enableEl: function (e) {
          return e.attr("aria-disabled", !1), e
        },
        onEnterKey: function (e) {
          var t = this,
            n = t.params.a11y;
          if (13 === e.keyCode) {
            var i = z(e.target);
            t.navigation && t.navigation.$nextEl && i.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(n.lastSlideMessage) : t.a11y.notify(n.nextSlideMessage)), t.navigation && t.navigation.$prevEl && i.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(n.firstSlideMessage) : t.a11y.notify(n.prevSlideMessage)), t.pagination && i.is("." + t.params.pagination.bulletClass) && i[0].click()
          }
        },
        notify: function (e) {
          var t = this.a11y.liveRegion;
          0 !== t.length && (t.html(""), t.html(e))
        },
        updateNavigation: function () {
          if (!this.params.loop) {
            var e = this.navigation,
              t = e.$nextEl,
              n = e.$prevEl;
            n && 0 < n.length && (this.isBeginning ? this.a11y.disableEl(n) : this.a11y.enableEl(n)), t && 0 < t.length && (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t))
          }
        },
        updatePagination: function () {
          var i = this,
            r = i.params.a11y;
          i.pagination && i.params.pagination.clickable && i.pagination.bullets && i.pagination.bullets.length && i.pagination.bullets.each(function (e, t) {
            var n = z(t);
            i.a11y.makeElFocusable(n), i.a11y.addElRole(n, "button"), i.a11y.addElLabel(n, r.paginationBulletMessage.replace(/{{index}}/, n.index() + 1))
          })
        },
        init: function () {
          var e = this;
          e.$el.append(e.a11y.liveRegion);
          var t, n, i = e.params.a11y;
          e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (n = e.navigation.$prevEl), t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, i.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)), n && (e.a11y.makeElFocusable(n), e.a11y.addElRole(n, "button"), e.a11y.addElLabel(n, i.prevSlideMessage), n.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
        },
        destroy: function () {
          var e, t, n = this;
          n.a11y.liveRegion && 0 < n.a11y.liveRegion.length && n.a11y.liveRegion.remove(), n.navigation && n.navigation.$nextEl && (e = n.navigation.$nextEl), n.navigation && n.navigation.$prevEl && (t = n.navigation.$prevEl), e && e.off("keydown", n.a11y.onEnterKey), t && t.off("keydown", n.a11y.onEnterKey), n.pagination && n.params.pagination.clickable && n.pagination.bullets && n.pagination.bullets.length && n.pagination.$el.off("keydown", "." + n.params.pagination.bulletClass, n.a11y.onEnterKey)
        }
      },
      Z = {
        init: function () {
          if (this.params.history) {
            if (!N.history || !N.history.pushState) return this.params.history.enabled = !1, void(this.params.hashNavigation.enabled = !0);
            var e = this.history;
            e.initialized = !0, e.paths = Z.getPathValues(), (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || N.addEventListener("popstate", this.history.setHistoryPopState))
          }
        },
        destroy: function () {
          this.params.history.replaceState || N.removeEventListener("popstate", this.history.setHistoryPopState)
        },
        setHistoryPopState: function () {
          this.history.paths = Z.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
        },
        getPathValues: function () {
          var e = N.location.pathname.slice(1).split("/").filter(function (e) {
              return "" !== e
            }),
            t = e.length;
          return {
            key: e[t - 2],
            value: e[t - 1]
          }
        },
        setHistory: function (e, t) {
          if (this.history.initialized && this.params.history.enabled) {
            var n = this.slides.eq(t),
              i = Z.slugify(n.attr("data-history"));
            N.location.pathname.includes(e) || (i = e + "/" + i);
            var r = N.history.state;
            r && r.value === i || (this.params.history.replaceState ? N.history.replaceState({
              value: i
            }, null, i) : N.history.pushState({
              value: i
            }, null, i))
          }
        },
        slugify: function (e) {
          return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
        },
        scrollToSlide: function (e, t, n) {
          if (t)
            for (var i = 0, r = this.slides.length; i < r; i += 1) {
              var a = this.slides.eq(i);
              if (Z.slugify(a.attr("data-history")) === t && !a.hasClass(this.params.slideDuplicateClass)) {
                var s = a.index();
                this.slideTo(s, e, n)
              }
            } else this.slideTo(0, e, n)
        }
      },
      U = {
        onHashCange: function () {
          var e = g.location.hash.replace("#", "");
          e !== this.slides.eq(this.activeIndex).attr("data-hash") && this.slideTo(this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + e + '"]').index())
        },
        setHash: function () {
          if (this.hashNavigation.initialized && this.params.hashNavigation.enabled)
            if (this.params.hashNavigation.replaceState && N.history && N.history.replaceState) N.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || "");
            else {
              var e = this.slides.eq(this.activeIndex),
                t = e.attr("data-hash") || e.attr("data-history");
              g.location.hash = t || ""
            }
        },
        init: function () {
          var e = this;
          if (!(!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)) {
            e.hashNavigation.initialized = !0;
            var t = g.location.hash.replace("#", "");
            if (t)
              for (var n = 0, i = e.slides.length; n < i; n += 1) {
                var r = e.slides.eq(n);
                if ((r.attr("data-hash") || r.attr("data-history")) === t && !r.hasClass(e.params.slideDuplicateClass)) {
                  var a = r.index();
                  e.slideTo(a, 0, e.params.runCallbacksOnInit, !0)
                }
              }
            e.params.hashNavigation.watchState && z(N).on("hashchange", e.hashNavigation.onHashCange)
          }
        },
        destroy: function () {
          this.params.hashNavigation.watchState && z(N).off("hashchange", this.hashNavigation.onHashCange)
        }
      },
      Q = {
        run: function () {
          var e = this,
            t = e.slides.eq(e.activeIndex),
            n = e.params.autoplay.delay;
          t.attr("data-swiper-autoplay") && (n = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = O.nextTick(function () {
            e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
          }, n)
        },
        start: function () {
          return void 0 === this.autoplay.timeout && (!this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0))
        },
        stop: function () {
          return !!this.autoplay.running && (void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0))
        },
        pause: function (e) {
          var t = this;
          t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? t.$wrapperEl.transitionEnd(function () {
            t && !t.destroyed && (t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
          }) : (t.autoplay.paused = !1, t.autoplay.run())))
        }
      },
      K = {
        setTranslate: function () {
          for (var e = this.slides, t = 0; t < e.length; t += 1) {
            var n = this.slides.eq(t),
              i = -n[0].swiperSlideOffset;
            this.params.virtualTranslate || (i -= this.translate);
            var r = 0;
            this.isHorizontal() || (r = i, i = 0);
            var a = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(n[0].progress), 0) : 1 + Math.min(Math.max(n[0].progress, -1), 0);
            n.css({
              opacity: a
            }).transform("translate3d(" + i + "px, " + r + "px, 0px)")
          }
        },
        setTransition: function (e) {
          var n = this,
            t = n.slides,
            i = n.$wrapperEl;
          if (t.transition(e), n.params.virtualTranslate && 0 !== e) {
            var r = !1;
            t.transitionEnd(function () {
              if (!r && n && !n.destroyed) {
                r = !0, n.animating = !1;
                for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) i.trigger(e[t])
              }
            })
          }
        }
      },
      J = {
        setTranslate: function () {
          var e, t = this,
            n = t.$el,
            i = t.$wrapperEl,
            r = t.slides,
            a = t.width,
            s = t.height,
            o = t.rtlTranslate,
            l = t.size,
            u = t.params.cubeEffect,
            c = t.isHorizontal(),
            d = t.virtual && t.params.virtual.enabled,
            h = 0;
          u.shadow && (c ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = z('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
            height: a + "px"
          })) : 0 === (e = n.find(".swiper-cube-shadow")).length && (e = z('<div class="swiper-cube-shadow"></div>'), n.append(e)));
          for (var p = 0; p < r.length; p += 1) {
            var f = r.eq(p),
              g = p;
            d && (g = parseInt(f.attr("data-swiper-slide-index"), 10));
            var m = 90 * g,
              v = Math.floor(m / 360);
            o && (m = -m, v = Math.floor(-m / 360));
            var y = Math.max(Math.min(f[0].progress, 1), -1),
              b = 0,
              x = 0,
              w = 0;
            g % 4 == 0 ? (b = 4 * -v * l, w = 0) : (g - 1) % 4 == 0 ? (b = 0, w = 4 * -v * l) : (g - 2) % 4 == 0 ? (b = l + 4 * v * l, w = l) : (g - 3) % 4 == 0 && (b = -l, w = 3 * l + 4 * l * v), o && (b = -b), c || (x = b, b = 0);
            var C = "rotateX(" + (c ? 0 : -m) + "deg) rotateY(" + (c ? m : 0) + "deg) translate3d(" + b + "px, " + x + "px, " + w + "px)";
            if (y <= 1 && -1 < y && (h = 90 * g + 90 * y, o && (h = 90 * -g - 90 * y)), f.transform(C), u.slideShadows) {
              var S = c ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
                T = c ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
              0 === S.length && (S = z('<div class="swiper-slide-shadow-' + (c ? "left" : "top") + '"></div>'), f.append(S)), 0 === T.length && (T = z('<div class="swiper-slide-shadow-' + (c ? "right" : "bottom") + '"></div>'), f.append(T)), S.length && (S[0].style.opacity = Math.max(-y, 0)), T.length && (T[0].style.opacity = Math.max(y, 0))
            }
          }
          if (i.css({
              "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
              "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
              "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
              "transform-origin": "50% 50% -" + l / 2 + "px"
            }), u.shadow)
            if (c) e.transform("translate3d(0px, " + (a / 2 + u.shadowOffset) + "px, " + -a / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + u.shadowScale + ")");
            else {
              var E = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
                k = 1.5 - (Math.sin(2 * E * Math.PI / 360) / 2 + Math.cos(2 * E * Math.PI / 360) / 2),
                M = u.shadowScale,
                P = u.shadowScale / k,
                A = u.shadowOffset;
              e.transform("scale3d(" + M + ", 1, " + P + ") translate3d(0px, " + (s / 2 + A) + "px, " + -s / 2 / P + "px) rotateX(-90deg)")
            }
          var L = D.isSafari || D.isUiWebView ? -l / 2 : 0;
          i.transform("translate3d(0px,0," + L + "px) rotateX(" + (t.isHorizontal() ? 0 : h) + "deg) rotateY(" + (t.isHorizontal() ? -h : 0) + "deg)")
        },
        setTransition: function (e) {
          var t = this.$el;
          this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
        }
      },
      ee = {
        setTranslate: function () {
          for (var e = this.slides, t = this.rtlTranslate, n = 0; n < e.length; n += 1) {
            var i = e.eq(n),
              r = i[0].progress;
            this.params.flipEffect.limitRotation && (r = Math.max(Math.min(i[0].progress, 1), -1));
            var a = -180 * r,
              s = 0,
              o = -i[0].swiperSlideOffset,
              l = 0;
            if (this.isHorizontal() ? t && (a = -a) : (l = o, s = -a, a = o = 0), i[0].style.zIndex = -Math.abs(Math.round(r)) + e.length, this.params.flipEffect.slideShadows) {
              var u = this.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top"),
                c = this.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");
              0 === u.length && (u = z('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), i.append(u)), 0 === c.length && (c = z('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), i.append(c)), u.length && (u[0].style.opacity = Math.max(-r, 0)), c.length && (c[0].style.opacity = Math.max(r, 0))
            }
            i.transform("translate3d(" + o + "px, " + l + "px, 0px) rotateX(" + s + "deg) rotateY(" + a + "deg)")
          }
        },
        setTransition: function (e) {
          var n = this,
            t = n.slides,
            i = n.activeIndex,
            r = n.$wrapperEl;
          if (t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), n.params.virtualTranslate && 0 !== e) {
            var a = !1;
            t.eq(i).transitionEnd(function () {
              if (!a && n && !n.destroyed) {
                a = !0, n.animating = !1;
                for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) r.trigger(e[t])
              }
            })
          }
        }
      },
      te = {
        setTranslate: function () {
          for (var e = this.width, t = this.height, n = this.slides, i = this.$wrapperEl, r = this.slidesSizesGrid, a = this.params.coverflowEffect, s = this.isHorizontal(), o = this.translate, l = s ? e / 2 - o : t / 2 - o, u = s ? a.rotate : -a.rotate, c = a.depth, d = 0, h = n.length; d < h; d += 1) {
            var p = n.eq(d),
              f = r[d],
              g = (l - p[0].swiperSlideOffset - f / 2) / f * a.modifier,
              m = s ? u * g : 0,
              v = s ? 0 : u * g,
              y = -c * Math.abs(g),
              b = s ? 0 : a.stretch * g,
              x = s ? a.stretch * g : 0;
            Math.abs(x) < .001 && (x = 0), Math.abs(b) < .001 && (b = 0), Math.abs(y) < .001 && (y = 0), Math.abs(m) < .001 && (m = 0), Math.abs(v) < .001 && (v = 0);
            var w = "translate3d(" + x + "px," + b + "px," + y + "px)  rotateX(" + v + "deg) rotateY(" + m + "deg)";
            if (p.transform(w), p[0].style.zIndex = 1 - Math.abs(Math.round(g)), a.slideShadows) {
              var C = s ? p.find(".swiper-slide-shadow-left") : p.find(".swiper-slide-shadow-top"),
                S = s ? p.find(".swiper-slide-shadow-right") : p.find(".swiper-slide-shadow-bottom");
              0 === C.length && (C = z('<div class="swiper-slide-shadow-' + (s ? "left" : "top") + '"></div>'), p.append(C)), 0 === S.length && (S = z('<div class="swiper-slide-shadow-' + (s ? "right" : "bottom") + '"></div>'), p.append(S)), C.length && (C[0].style.opacity = 0 < g ? g : 0), S.length && (S[0].style.opacity = 0 < -g ? -g : 0)
            }
          }(_.pointerEvents || _.prefixedPointerEvents) && (i[0].style.perspectiveOrigin = l + "px 50%")
        },
        setTransition: function (e) {
          this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
        }
      },
      ne = [E, k, M, P, L, I, $, {
        name: "mousewheel",
        params: {
          mousewheel: {
            enabled: !1,
            releaseOnEdges: !1,
            invert: !1,
            forceToAxis: !1,
            sensitivity: 1,
            eventsTarged: "container"
          }
        },
        create: function () {
          O.extend(this, {
            mousewheel: {
              enabled: !1,
              enable: H.enable.bind(this),
              disable: H.disable.bind(this),
              handle: H.handle.bind(this),
              handleMouseEnter: H.handleMouseEnter.bind(this),
              handleMouseLeave: H.handleMouseLeave.bind(this),
              lastScrollTime: O.now()
            }
          })
        },
        on: {
          init: function () {
            this.params.mousewheel.enabled && this.mousewheel.enable()
          },
          destroy: function () {
            this.mousewheel.enabled && this.mousewheel.disable()
          }
        }
      }, {
        name: "navigation",
        params: {
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock"
          }
        },
        create: function () {
          O.extend(this, {
            navigation: {
              init: q.init.bind(this),
              update: q.update.bind(this),
              destroy: q.destroy.bind(this)
            }
          })
        },
        on: {
          init: function () {
            this.navigation.init(), this.navigation.update()
          },
          toEdge: function () {
            this.navigation.update()
          },
          fromEdge: function () {
            this.navigation.update()
          },
          destroy: function () {
            this.navigation.destroy()
          },
          click: function (e) {
            var t = this.navigation,
              n = t.$nextEl,
              i = t.$prevEl;
            !this.params.navigation.hideOnClick || z(e.target).is(i) || z(e.target).is(n) || (n && n.toggleClass(this.params.navigation.hiddenClass), i && i.toggleClass(this.params.navigation.hiddenClass))
          }
        }
      }, {
        name: "pagination",
        params: {
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            modifierClass: "swiper-pagination-",
            currentClass: "swiper-pagination-current",
            totalClass: "swiper-pagination-total",
            hiddenClass: "swiper-pagination-hidden",
            progressbarFillClass: "swiper-pagination-progressbar-fill",
            progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
            clickableClass: "swiper-pagination-clickable",
            lockClass: "swiper-pagination-lock"
          }
        },
        create: function () {
          O.extend(this, {
            pagination: {
              init: V.init.bind(this),
              render: V.render.bind(this),
              update: V.update.bind(this),
              destroy: V.destroy.bind(this),
              dynamicBulletIndex: 0
            }
          })
        },
        on: {
          init: function () {
            this.pagination.init(), this.pagination.render(), this.pagination.update()
          },
          activeIndexChange: function () {
            this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
          },
          snapIndexChange: function () {
            this.params.loop || this.pagination.update()
          },
          slidesLengthChange: function () {
            this.params.loop && (this.pagination.render(), this.pagination.update())
          },
          snapGridLengthChange: function () {
            this.params.loop || (this.pagination.render(), this.pagination.update())
          },
          destroy: function () {
            this.pagination.destroy()
          },
          click: function (e) {
            this.params.pagination.el && this.params.pagination.hideOnClick && 0 < this.pagination.$el.length && !z(e.target).hasClass(this.params.pagination.bulletClass) && this.pagination.$el.toggleClass(this.params.pagination.hiddenClass)
          }
        }
      }, {
        name: "scrollbar",
        params: {
          scrollbar: {
            el: null,
            dragSize: "auto",
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag"
          }
        },
        create: function () {
          var e = this;
          O.extend(e, {
            scrollbar: {
              init: B.init.bind(e),
              destroy: B.destroy.bind(e),
              updateSize: B.updateSize.bind(e),
              setTranslate: B.setTranslate.bind(e),
              setTransition: B.setTransition.bind(e),
              enableDraggable: B.enableDraggable.bind(e),
              disableDraggable: B.disableDraggable.bind(e),
              setDragPosition: B.setDragPosition.bind(e),
              onDragStart: B.onDragStart.bind(e),
              onDragMove: B.onDragMove.bind(e),
              onDragEnd: B.onDragEnd.bind(e),
              isTouched: !1,
              timeout: null,
              dragTimeout: null
            }
          })
        },
        on: {
          init: function () {
            this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
          },
          update: function () {
            this.scrollbar.updateSize()
          },
          resize: function () {
            this.scrollbar.updateSize()
          },
          observerUpdate: function () {
            this.scrollbar.updateSize()
          },
          setTranslate: function () {
            this.scrollbar.setTranslate()
          },
          setTransition: function (e) {
            this.scrollbar.setTransition(e)
          },
          destroy: function () {
            this.scrollbar.destroy()
          }
        }
      }, {
        name: "parallax",
        params: {
          parallax: {
            enabled: !1
          }
        },
        create: function () {
          O.extend(this, {
            parallax: {
              setTransform: R.setTransform.bind(this),
              setTranslate: R.setTranslate.bind(this),
              setTransition: R.setTransition.bind(this)
            }
          })
        },
        on: {
          beforeInit: function () {
            this.params.parallax.enabled && (this.params.watchSlidesProgress = !0)
          },
          init: function () {
            this.params.parallax && this.parallax.setTranslate()
          },
          setTranslate: function () {
            this.params.parallax && this.parallax.setTranslate()
          },
          setTransition: function (e) {
            this.params.parallax && this.parallax.setTransition(e)
          }
        }
      }, {
        name: "zoom",
        params: {
          zoom: {
            enabled: !1,
            maxRatio: 3,
            minRatio: 1,
            toggle: !0,
            containerClass: "swiper-zoom-container",
            zoomedSlideClass: "swiper-slide-zoomed"
          }
        },
        create: function () {
          var t = this,
            n = {
              enabled: !1,
              scale: 1,
              currentScale: 1,
              isScaling: !1,
              gesture: {
                $slideEl: void 0,
                slideWidth: void 0,
                slideHeight: void 0,
                $imageEl: void 0,
                $imageWrapEl: void 0,
                maxRatio: 3
              },
              image: {
                isTouched: void 0,
                isMoved: void 0,
                currentX: void 0,
                currentY: void 0,
                minX: void 0,
                minY: void 0,
                maxX: void 0,
                maxY: void 0,
                width: void 0,
                height: void 0,
                startX: void 0,
                startY: void 0,
                touchesStart: {},
                touchesCurrent: {}
              },
              velocity: {
                x: void 0,
                y: void 0,
                prevPositionX: void 0,
                prevPositionY: void 0,
                prevTime: void 0
              }
            };
          "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (e) {
            n[e] = G[e].bind(t)
          }), O.extend(t, {
            zoom: n
          })
        },
        on: {
          init: function () {
            this.params.zoom.enabled && this.zoom.enable()
          },
          destroy: function () {
            this.zoom.disable()
          },
          touchStart: function (e) {
            this.zoom.enabled && this.zoom.onTouchStart(e)
          },
          touchEnd: function (e) {
            this.zoom.enabled && this.zoom.onTouchEnd(e)
          },
          doubleTap: function (e) {
            this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
          },
          transitionEnd: function () {
            this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
          }
        }
      }, {
        name: "lazy",
        params: {
          lazy: {
            enabled: !1,
            loadPrevNext: !1,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: !1,
            elementClass: "swiper-lazy",
            loadingClass: "swiper-lazy-loading",
            loadedClass: "swiper-lazy-loaded",
            preloaderClass: "swiper-lazy-preloader"
          }
        },
        create: function () {
          O.extend(this, {
            lazy: {
              initialImageLoaded: !1,
              load: X.load.bind(this),
              loadInSlide: X.loadInSlide.bind(this)
            }
          })
        },
        on: {
          beforeInit: function () {
            this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
          },
          init: function () {
            this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
          },
          scroll: function () {
            this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
          },
          resize: function () {
            this.params.lazy.enabled && this.lazy.load()
          },
          scrollbarDragMove: function () {
            this.params.lazy.enabled && this.lazy.load()
          },
          transitionStart: function () {
            this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load()
          },
          transitionEnd: function () {
            this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
          }
        }
      }, {
        name: "controller",
        params: {
          controller: {
            control: void 0,
            inverse: !1,
            by: "slide"
          }
        },
        create: function () {
          O.extend(this, {
            controller: {
              control: this.params.controller.control,
              getInterpolateFunction: W.getInterpolateFunction.bind(this),
              setTranslate: W.setTranslate.bind(this),
              setTransition: W.setTransition.bind(this)
            }
          })
        },
        on: {
          update: function () {
            this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
          },
          resize: function () {
            this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
          },
          observerUpdate: function () {
            this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
          },
          setTranslate: function (e, t) {
            this.controller.control && this.controller.setTranslate(e, t)
          },
          setTransition: function (e, t) {
            this.controller.control && this.controller.setTransition(e, t)
          }
        }
      }, {
        name: "a11y",
        params: {
          a11y: {
            enabled: !0,
            notificationClass: "swiper-notification",
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}"
          }
        },
        create: function () {
          var t = this;
          O.extend(t, {
            a11y: {
              liveRegion: z('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
            }
          }), Object.keys(Y).forEach(function (e) {
            t.a11y[e] = Y[e].bind(t)
          })
        },
        on: {
          init: function () {
            this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
          },
          toEdge: function () {
            this.params.a11y.enabled && this.a11y.updateNavigation()
          },
          fromEdge: function () {
            this.params.a11y.enabled && this.a11y.updateNavigation()
          },
          paginationUpdate: function () {
            this.params.a11y.enabled && this.a11y.updatePagination()
          },
          destroy: function () {
            this.params.a11y.enabled && this.a11y.destroy()
          }
        }
      }, {
        name: "history",
        params: {
          history: {
            enabled: !1,
            replaceState: !1,
            key: "slides"
          }
        },
        create: function () {
          O.extend(this, {
            history: {
              init: Z.init.bind(this),
              setHistory: Z.setHistory.bind(this),
              setHistoryPopState: Z.setHistoryPopState.bind(this),
              scrollToSlide: Z.scrollToSlide.bind(this),
              destroy: Z.destroy.bind(this)
            }
          })
        },
        on: {
          init: function () {
            this.params.history.enabled && this.history.init()
          },
          destroy: function () {
            this.params.history.enabled && this.history.destroy()
          },
          transitionEnd: function () {
            this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
          }
        }
      }, {
        name: "hash-navigation",
        params: {
          hashNavigation: {
            enabled: !1,
            replaceState: !1,
            watchState: !1
          }
        },
        create: function () {
          O.extend(this, {
            hashNavigation: {
              initialized: !1,
              init: U.init.bind(this),
              destroy: U.destroy.bind(this),
              setHash: U.setHash.bind(this),
              onHashCange: U.onHashCange.bind(this)
            }
          })
        },
        on: {
          init: function () {
            this.params.hashNavigation.enabled && this.hashNavigation.init()
          },
          destroy: function () {
            this.params.hashNavigation.enabled && this.hashNavigation.destroy()
          },
          transitionEnd: function () {
            this.hashNavigation.initialized && this.hashNavigation.setHash()
          }
        }
      }, {
        name: "autoplay",
        params: {
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1
          }
        },
        create: function () {
          O.extend(this, {
            autoplay: {
              running: !1,
              paused: !1,
              run: Q.run.bind(this),
              start: Q.start.bind(this),
              stop: Q.stop.bind(this),
              pause: Q.pause.bind(this)
            }
          })
        },
        on: {
          init: function () {
            this.params.autoplay.enabled && this.autoplay.start()
          },
          beforeTransitionStart: function (e, t) {
            this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
          },
          sliderFirstMove: function () {
            this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
          },
          destroy: function () {
            this.autoplay.running && this.autoplay.stop()
          }
        }
      }, {
        name: "effect-fade",
        params: {
          fadeEffect: {
            crossFade: !1
          }
        },
        create: function () {
          O.extend(this, {
            fadeEffect: {
              setTranslate: K.setTranslate.bind(this),
              setTransition: K.setTransition.bind(this)
            }
          })
        },
        on: {
          beforeInit: function () {
            if ("fade" === this.params.effect) {
              this.classNames.push(this.params.containerModifierClass + "fade");
              var e = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0
              };
              O.extend(this.params, e), O.extend(this.originalParams, e)
            }
          },
          setTranslate: function () {
            "fade" === this.params.effect && this.fadeEffect.setTranslate()
          },
          setTransition: function (e) {
            "fade" === this.params.effect && this.fadeEffect.setTransition(e)
          }
        }
      }, {
        name: "effect-cube",
        params: {
          cubeEffect: {
            slideShadows: !0,
            shadow: !0,
            shadowOffset: 20,
            shadowScale: .94
          }
        },
        create: function () {
          O.extend(this, {
            cubeEffect: {
              setTranslate: J.setTranslate.bind(this),
              setTransition: J.setTransition.bind(this)
            }
          })
        },
        on: {
          beforeInit: function () {
            if ("cube" === this.params.effect) {
              this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d");
              var e = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0
              };
              O.extend(this.params, e), O.extend(this.originalParams, e)
            }
          },
          setTranslate: function () {
            "cube" === this.params.effect && this.cubeEffect.setTranslate()
          },
          setTransition: function (e) {
            "cube" === this.params.effect && this.cubeEffect.setTransition(e)
          }
        }
      }, {
        name: "effect-flip",
        params: {
          flipEffect: {
            slideShadows: !0,
            limitRotation: !0
          }
        },
        create: function () {
          O.extend(this, {
            flipEffect: {
              setTranslate: ee.setTranslate.bind(this),
              setTransition: ee.setTransition.bind(this)
            }
          })
        },
        on: {
          beforeInit: function () {
            if ("flip" === this.params.effect) {
              this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d");
              var e = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0
              };
              O.extend(this.params, e), O.extend(this.originalParams, e)
            }
          },
          setTranslate: function () {
            "flip" === this.params.effect && this.flipEffect.setTranslate()
          },
          setTransition: function (e) {
            "flip" === this.params.effect && this.flipEffect.setTransition(e)
          }
        }
      }, {
        name: "effect-coverflow",
        params: {
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: !0
          }
        },
        create: function () {
          O.extend(this, {
            coverflowEffect: {
              setTranslate: te.setTranslate.bind(this),
              setTransition: te.setTransition.bind(this)
            }
          })
        },
        on: {
          beforeInit: function () {
            "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
          },
          setTranslate: function () {
            "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
          },
          setTransition: function (e) {
            "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
          }
        }
      }];
    return void 0 === T.use && (T.use = T.Class.use, T.installModule = T.Class.installModule), T.use(ne), T
  }),
  function (t) {
    function o(e) {
      var t = e.length,
        n = c.type(e);
      return "function" !== n && !c.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e))
    }
    if (!t.jQuery) {
      var c = function (e, t) {
        return new c.fn.init(e, t)
      };
      c.isWindow = function (e) {
        return null != e && e == e.window
      }, c.type = function (e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[r.call(e)] || "object" : typeof e
      }, c.isArray = Array.isArray || function (e) {
        return "array" === c.type(e)
      }, c.isPlainObject = function (e) {
        var t;
        if (!e || "object" !== c.type(e) || e.nodeType || c.isWindow(e)) return !1;
        try {
          if (e.constructor && !i.call(e, "constructor") && !i.call(e.constructor.prototype, "isPrototypeOf")) return !1
        } catch (e) {
          return !1
        }
        for (t in e);
        return void 0 === t || i.call(e, t)
      }, c.each = function (e, t, n) {
        var i = 0,
          r = e.length,
          a = o(e);
        if (n) {
          if (a)
            for (; i < r && !1 !== t.apply(e[i], n); i++);
          else
            for (i in e)
              if (!1 === t.apply(e[i], n)) break
        } else if (a)
          for (; i < r && !1 !== t.call(e[i], i, e[i]); i++);
        else
          for (i in e)
            if (!1 === t.call(e[i], i, e[i])) break;
        return e
      }, c.data = function (e, t, n) {
        if (void 0 === n) {
          var i = (r = e[c.expando]) && a[r];
          if (void 0 === t) return i;
          if (i && t in i) return i[t]
        } else if (void 0 !== t) {
          var r = e[c.expando] || (e[c.expando] = ++c.uuid);
          return a[r] = a[r] || {}, a[r][t] = n
        }
      }, c.removeData = function (e, t) {
        var n = e[c.expando],
          i = n && a[n];
        i && c.each(t, function (e, t) {
          delete i[t]
        })
      }, c.extend = function () {
        var e, t, n, i, r, a, s = arguments[0] || {},
          o = 1,
          l = arguments.length,
          u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[o] || {}, o++), "object" != typeof s && "function" !== c.type(s) && (s = {}), o === l && (s = this, o--); o < l; o++)
          if (null != (r = arguments[o]))
            for (i in r) e = s[i], s !== (n = r[i]) && (u && n && (c.isPlainObject(n) || (t = c.isArray(n))) ? (t ? (t = !1, a = e && c.isArray(e) ? e : []) : a = e && c.isPlainObject(e) ? e : {}, s[i] = c.extend(u, a, n)) : void 0 !== n && (s[i] = n));
        return s
      }, c.queue = function (e, t, n) {
        if (e) {
          t = (t || "fx") + "queue";
          var i = c.data(e, t);
          return n ? (!i || c.isArray(n) ? i = c.data(e, t, (s = a || [], null != (r = n) && (o(Object(r)) ? function (e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n;) e[r++] = t[i++];
            if (n != n)
              for (; void 0 !== t[i];) e[r++] = t[i++];
            e.length = r
          }(s, "string" == typeof r ? [r] : r) : [].push.call(s, r)), s)) : i.push(n), i) : i || []
        }
        var r, a, s
      }, c.dequeue = function (e, r) {
        c.each(e.nodeType ? [e] : e, function (e, t) {
          r = r || "fx";
          var n = c.queue(t, r),
            i = n.shift();
          "inprogress" === i && (i = n.shift()), i && ("fx" === r && n.unshift("inprogress"), i.call(t, function () {
            c.dequeue(t, r)
          }))
        })
      }, c.fn = c.prototype = {
        init: function (e) {
          if (e.nodeType) return this[0] = e, this;
          throw new Error("Not a DOM node.")
        },
        offset: function () {
          var e = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
            top: 0,
            left: 0
          };
          return {
            top: e.top + (t.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
            left: e.left + (t.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
          }
        },
        position: function () {
          function e() {
            for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position;) e = e.offsetParent;
            return e || document
          }
          var t = this[0],
            e = e.apply(t),
            n = this.offset(),
            i = /^(?:body|html)$/i.test(e.nodeName) ? {
              top: 0,
              left: 0
            } : c(e).offset();
          return n.top -= parseFloat(t.style.marginTop) || 0, n.left -= parseFloat(t.style.marginLeft) || 0, e.style && (i.top += parseFloat(e.style.borderTopWidth) || 0, i.left += parseFloat(e.style.borderLeftWidth) || 0), {
            top: n.top - i.top,
            left: n.left - i.left
          }
        }
      };
      var a = {};
      c.expando = "velocity" + (new Date).getTime(), c.uuid = 0;
      for (var n = {}, i = n.hasOwnProperty, r = n.toString, e = "Boolean Number String Function Array Date RegExp Object Error".split(" "), s = 0; s < e.length; s++) n["[object " + e[s] + "]"] = e[s].toLowerCase();
      c.fn.init.prototype = c.fn, t.Velocity = {
        Utilities: c
      }
    }
  }(window),
  function (e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
  }(function () {
    return function (e, _, I, j) {
      function f(e) {
        return B.isWrapped(e) ? e = [].slice.call(e) : B.isNode(e) && (e = [e]), e
      }

      function $(e) {
        var t = V.data(e, "velocity");
        return null === t ? j : t
      }

      function i(s, t, o, n) {
        function i(e, t) {
          return 1 - 3 * t + 3 * e
        }

        function r(e, t) {
          return 3 * t - 6 * e
        }

        function a(e) {
          return 3 * e
        }

        function l(e, t, n) {
          return ((i(t, n) * e + r(t, n)) * e + a(t)) * e
        }

        function u(e, t, n) {
          return 3 * i(t, n) * e * e + 2 * r(t, n) * e + a(t)
        }

        function c(e) {
          for (var t = 0, n = 1, i = g - 1; n != i && y[n] <= e; ++n) t += m;
          var r = t + (e - y[--n]) / (y[n + 1] - y[n]) * m,
            a = u(r, s, o);
          return .001 <= a ? function (e, t) {
            for (var n = 0; n < h; ++n) {
              var i = u(t, s, o);
              if (0 === i) return t;
              t -= (l(t, s, o) - e) / i
            }
            return t
          }(e, r) : 0 == a ? r : function (e, t, n) {
            for (var i, r, a = 0; 0 < (i = l(r = t + (n - t) / 2, s, o) - e) ? n = r : t = r, Math.abs(i) > p && ++a < f;);
            return r
          }(e, t, t + m)
        }

        function d() {
          b = !0, (s != t || o != n) && function () {
            for (var e = 0; e < g; ++e) y[e] = l(e * m, s, o)
          }()
        }
        var h = 4,
          p = 1e-7,
          f = 10,
          g = 11,
          m = 1 / (g - 1),
          e = "Float32Array" in _;
        if (4 !== arguments.length) return !1;
        for (var v = 0; v < 4; ++v)
          if ("number" != typeof arguments[v] || isNaN(arguments[v]) || !isFinite(arguments[v])) return !1;
        s = Math.min(s, 1), o = Math.min(o, 1), s = Math.max(s, 0), o = Math.max(o, 0);
        var y = e ? new Float32Array(g) : new Array(g),
          b = !1,
          x = function (e) {
            return b || d(), s === t && o === n ? e : 0 === e ? 0 : 1 === e ? 1 : l(c(e), t, n)
          };
        x.getControlPoints = function () {
          return [{
            x: s,
            y: t
          }, {
            x: o,
            y: n
          }]
        };
        var w = "generateBezier(" + [s, t, o, n] + ")";
        return x.toString = function () {
          return w
        }, x
      }

      function H(e, t) {
        var n = e;
        return B.isString(e) ? R.Easings[e] || (n = !1) : n = B.isArray(e) && 1 === e.length ? function (t) {
          return function (e) {
            return Math.round(e * t) * (1 / t)
          }
        }.apply(null, e) : B.isArray(e) && 2 === e.length ? s.apply(null, e.concat([t])) : !(!B.isArray(e) || 4 !== e.length) && i.apply(null, e), !1 === n && (n = R.Easings[R.defaults.easing] ? R.defaults.easing : a), n
      }

      function q(e) {
        if (e) {
          var t = (new Date).getTime(),
            n = R.State.calls.length;
          1e4 < n && (R.State.calls = function (e) {
            for (var t = -1, n = e ? e.length : 0, i = []; ++t < n;) {
              var r = e[t];
              r && i.push(r)
            }
            return i
          }(R.State.calls));
          for (var i = 0; i < n; i++)
            if (R.State.calls[i]) {
              var r = R.State.calls[i],
                a = r[0],
                s = r[2],
                o = r[3],
                l = !!o,
                u = null;
              o || (o = R.State.calls[i][3] = t - 16);
              for (var c = Math.min((t - o) / s.duration, 1), d = 0, h = a.length; d < h; d++) {
                var p = a[d],
                  f = p.element;
                if ($(f)) {
                  var g = !1;
                  if (s.display !== j && null !== s.display && "none" !== s.display) {
                    if ("flex" === s.display) {
                      V.each(["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"], function (e, t) {
                        G.setPropertyValue(f, "display", t)
                      })
                    }
                    G.setPropertyValue(f, "display", s.display)
                  }
                  for (var m in s.visibility !== j && "hidden" !== s.visibility && G.setPropertyValue(f, "visibility", s.visibility), p)
                    if ("element" !== m) {
                      var v, y = p[m],
                        b = B.isString(y.easing) ? R.Easings[y.easing] : y.easing;
                      if (1 === c) v = y.endValue;
                      else {
                        var x = y.endValue - y.startValue;
                        if (v = y.startValue + x * b(c, s, x), !l && v === y.currentValue) continue
                      }
                      if (y.currentValue = v, "tween" === m) u = v;
                      else {
                        if (G.Hooks.registered[m]) {
                          var w = G.Hooks.getRoot(m),
                            C = $(f).rootPropertyValueCache[w];
                          C && (y.rootPropertyValue = C)
                        }
                        var S = G.setPropertyValue(f, m, y.currentValue + (0 === parseFloat(v) ? "" : y.unitType), y.rootPropertyValue, y.scrollData);
                        G.Hooks.registered[m] && ($(f).rootPropertyValueCache[w] = G.Normalizations.registered[w] ? G.Normalizations.registered[w]("extract", null, S[1]) : S[1]), "transform" === S[0] && (g = !0)
                      }
                    }
                  s.mobileHA && $(f).transformCache.translate3d === j && ($(f).transformCache.translate3d = "(0px, 0px, 0px)", g = !0), g && G.flushTransformCache(f)
                }
              }
              s.display !== j && "none" !== s.display && (R.State.calls[i][2].display = !1), s.visibility !== j && "hidden" !== s.visibility && (R.State.calls[i][2].visibility = !1), s.progress && s.progress.call(r[1], r[1], c, Math.max(0, o + s.duration - t), o, u), 1 === c && T(i)
            }
        }
        R.State.isTicking && E(q)
      }

      function T(e, t) {
        if (!R.State.calls[e]) return !1;
        for (var n = R.State.calls[e][0], i = R.State.calls[e][1], r = R.State.calls[e][2], a = R.State.calls[e][4], s = !1, o = 0, l = n.length; o < l; o++) {
          var u = n[o].element;
          if (t || r.loop || ("none" === r.display && G.setPropertyValue(u, "display", r.display), "hidden" === r.visibility && G.setPropertyValue(u, "visibility", r.visibility)), !0 !== r.loop && (V.queue(u)[1] === j || !/\.velocityQueueEntryFlag/i.test(V.queue(u)[1])) && $(u)) {
            $(u).isAnimating = !1;
            var c = !($(u).rootPropertyValueCache = {});
            V.each(G.Lists.transforms3D, function (e, t) {
              var n = /^scale/.test(t) ? 1 : 0,
                i = $(u).transformCache[t];
              $(u).transformCache[t] !== j && new RegExp("^\\(" + n + "[^.]").test(i) && (c = !0, delete $(u).transformCache[t])
            }), r.mobileHA && (c = !0, delete $(u).transformCache.translate3d), c && G.flushTransformCache(u), G.Values.removeClass(u, "velocity-animating")
          }
          if (!t && r.complete && !r.loop && o === l - 1) try {
            r.complete.call(i, i)
          } catch (e) {
            setTimeout(function () {
              throw e
            }, 1)
          }
          a && !0 !== r.loop && a(i), $(u) && !0 === r.loop && !t && (V.each($(u).tweensContainer, function (e, t) {
            /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360), /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
          }), R(u, "reverse", {
            loop: !0,
            delay: r.delay
          })), !1 !== r.queue && V.dequeue(u, r.queue)
        }
        R.State.calls[e] = !1;
        for (var d = 0, h = R.State.calls.length; d < h; d++)
          if (!1 !== R.State.calls[d]) {
            s = !0;
            break
          }!1 === s && (R.State.isTicking = !1, delete R.State.calls, R.State.calls = [])
      }
      var V, r, d = function () {
          if (I.documentMode) return I.documentMode;
          for (var e = 7; 4 < e; e--) {
            var t = I.createElement("div");
            if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length) return t = null, e
          }
          return j
        }(),
        t = (r = 0, _.webkitRequestAnimationFrame || _.mozRequestAnimationFrame || function (e) {
          var t, n = (new Date).getTime();
          return t = Math.max(0, 16 - (n - r)), r = n + t, setTimeout(function () {
            e(n + t)
          }, t)
        }),
        B = {
          isString: function (e) {
            return "string" == typeof e
          },
          isArray: Array.isArray || function (e) {
            return "[object Array]" === Object.prototype.toString.call(e)
          },
          isFunction: function (e) {
            return "[object Function]" === Object.prototype.toString.call(e)
          },
          isNode: function (e) {
            return e && e.nodeType
          },
          isNodeList: function (e) {
            return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== j && (0 === e.length || "object" == typeof e[0] && 0 < e[0].nodeType)
          },
          isWrapped: function (e) {
            return e && (e.jquery || _.Zepto && _.Zepto.zepto.isZ(e))
          },
          isSVG: function (e) {
            return _.SVGElement && e instanceof _.SVGElement
          },
          isEmptyObject: function (e) {
            for (var t in e) return !1;
            return !0
          }
        },
        n = !1;
      if (e.fn && e.fn.jquery ? (V = e, n = !0) : V = _.Velocity.Utilities, d <= 8 && !n) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
      if (!(d <= 7)) {
        var a = "swing",
          R = {
            State: {
              isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
              isAndroid: /Android/i.test(navigator.userAgent),
              isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
              isChrome: _.chrome,
              isFirefox: /Firefox/i.test(navigator.userAgent),
              prefixElement: I.createElement("div"),
              prefixMatches: {},
              scrollAnchor: null,
              scrollPropertyLeft: null,
              scrollPropertyTop: null,
              isTicking: !1,
              calls: []
            },
            CSS: {},
            Utilities: V,
            Redirects: {},
            Easings: {},
            Promise: _.Promise,
            defaults: {
              queue: "",
              duration: 400,
              easing: a,
              begin: j,
              complete: j,
              progress: j,
              display: j,
              visibility: j,
              loop: !1,
              delay: !1,
              mobileHA: !0,
              _cacheValues: !0
            },
            init: function (e) {
              V.data(e, "velocity", {
                isSVG: B.isSVG(e),
                isAnimating: !1,
                computedStyle: null,
                tweensContainer: null,
                rootPropertyValueCache: {},
                transformCache: {}
              })
            },
            hook: null,
            mock: !1,
            version: {
              major: 1,
              minor: 2,
              patch: 2
            },
            debug: !1
          };
        _.pageYOffset !== j ? (R.State.scrollAnchor = _, R.State.scrollPropertyLeft = "pageXOffset", R.State.scrollPropertyTop = "pageYOffset") : (R.State.scrollAnchor = I.documentElement || I.body.parentNode || I.body, R.State.scrollPropertyLeft = "scrollLeft", R.State.scrollPropertyTop = "scrollTop");
        var s = function () {
          function y(e) {
            return -e.tension * e.x - e.friction * e.v
          }

          function b(e, t, n) {
            var i = {
              x: e.x + n.dx * t,
              v: e.v + n.dv * t,
              tension: e.tension,
              friction: e.friction
            };
            return {
              dx: i.v,
              dv: y(i)
            }
          }
          return function e(t, n, i) {
            var r, a, s, o, l, u, c, d, h, p, f, g = {
                x: -1,
                v: 0,
                tension: null,
                friction: null
              },
              m = [0],
              v = 0;
            for (t = parseFloat(t) || 500, n = parseFloat(n) || 20, i = i || null, g.tension = t, g.friction = n, (r = null !== i) ? a = (v = e(t, n)) / i * .016 : a = .016; l = a, void 0, u = {
                dx: (o = s || g).v,
                dv: y(o)
              }, c = b(o, .5 * l, u), d = b(o, .5 * l, c), h = b(o, l, d), p = 1 / 6 * (u.dx + 2 * (c.dx + d.dx) + h.dx), f = 1 / 6 * (u.dv + 2 * (c.dv + d.dv) + h.dv), o.x = o.x + p * l, o.v = o.v + f * l, s = o, m.push(1 + s.x), v += 16, 1e-4 < Math.abs(s.x) && 1e-4 < Math.abs(s.v););
            return r ? function (e) {
              return m[e * (m.length - 1) | 0]
            } : v
          }
        }();
        R.Easings = {
          linear: function (e) {
            return e
          },
          swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
          },
          spring: function (e) {
            return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
          }
        }, V.each([
          ["ease", [.25, .1, .25, 1]],
          ["ease-in", [.42, 0, 1, 1]],
          ["ease-out", [0, 0, .58, 1]],
          ["ease-in-out", [.42, 0, .58, 1]],
          ["easeInSine", [.47, 0, .745, .715]],
          ["easeOutSine", [.39, .575, .565, 1]],
          ["easeInOutSine", [.445, .05, .55, .95]],
          ["easeInQuad", [.55, .085, .68, .53]],
          ["easeOutQuad", [.25, .46, .45, .94]],
          ["easeInOutQuad", [.455, .03, .515, .955]],
          ["easeInCubic", [.55, .055, .675, .19]],
          ["easeOutCubic", [.215, .61, .355, 1]],
          ["easeInOutCubic", [.645, .045, .355, 1]],
          ["easeInQuart", [.895, .03, .685, .22]],
          ["easeOutQuart", [.165, .84, .44, 1]],
          ["easeInOutQuart", [.77, 0, .175, 1]],
          ["easeInQuint", [.755, .05, .855, .06]],
          ["easeOutQuint", [.23, 1, .32, 1]],
          ["easeInOutQuint", [.86, 0, .07, 1]],
          ["easeInExpo", [.95, .05, .795, .035]],
          ["easeOutExpo", [.19, 1, .22, 1]],
          ["easeInOutExpo", [1, 0, 0, 1]],
          ["easeInCirc", [.6, .04, .98, .335]],
          ["easeOutCirc", [.075, .82, .165, 1]],
          ["easeInOutCirc", [.785, .135, .15, .86]]
        ], function (e, t) {
          R.Easings[t[0]] = i.apply(null, t[1])
        });
        var G = R.CSS = {
          RegEx: {
            isHex: /^#([A-f\d]{3}){1,2}$/i,
            valueUnwrap: /^[A-z]+\((.*)\)$/i,
            wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
            valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
          },
          Lists: {
            colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
            transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
            transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
          },
          Hooks: {
            templates: {
              textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
              boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
              clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
              backgroundPosition: ["X Y", "0% 0%"],
              transformOrigin: ["X Y Z", "50% 50% 0px"],
              perspectiveOrigin: ["X Y", "50% 50%"]
            },
            registered: {},
            register: function () {
              for (var e = 0; e < G.Lists.colors.length; e++) {
                var t = "color" === G.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                G.Hooks.templates[G.Lists.colors[e]] = ["Red Green Blue Alpha", t]
              }
              var n, i, r;
              if (d)
                for (n in G.Hooks.templates) {
                  r = (i = G.Hooks.templates[n])[0].split(" ");
                  var a = i[1].match(G.RegEx.valueSplit);
                  "Color" === r[0] && (r.push(r.shift()), a.push(a.shift()), G.Hooks.templates[n] = [r.join(" "), a.join(" ")])
                }
              for (n in G.Hooks.templates)
                for (var e in r = (i = G.Hooks.templates[n])[0].split(" ")) {
                  var s = n + r[e],
                    o = e;
                  G.Hooks.registered[s] = [n, o]
                }
            },
            getRoot: function (e) {
              var t = G.Hooks.registered[e];
              return t ? t[0] : e
            },
            cleanRootPropertyValue: function (e, t) {
              return G.RegEx.valueUnwrap.test(t) && (t = t.match(G.RegEx.valueUnwrap)[1]), G.Values.isCSSNullValue(t) && (t = G.Hooks.templates[e][1]), t
            },
            extractValue: function (e, t) {
              var n = G.Hooks.registered[e];
              if (n) {
                var i = n[0],
                  r = n[1];
                return (t = G.Hooks.cleanRootPropertyValue(i, t)).toString().match(G.RegEx.valueSplit)[r]
              }
              return t
            },
            injectValue: function (e, t, n) {
              var i = G.Hooks.registered[e];
              if (i) {
                var r, a = i[0],
                  s = i[1];
                return (r = (n = G.Hooks.cleanRootPropertyValue(a, n)).toString().match(G.RegEx.valueSplit))[s] = t, r.join(" ")
              }
              return n
            }
          },
          Normalizations: {
            registered: {
              clip: function (e, t, n) {
                switch (e) {
                case "name":
                  return "clip";
                case "extract":
                  var i;
                  return G.RegEx.wrappedValueAlreadyExtracted.test(n) ? i = n : i = (i = n.toString().match(G.RegEx.valueUnwrap)) ? i[1].replace(/,(\s+)?/g, " ") : n, i;
                case "inject":
                  return "rect(" + n + ")"
                }
              },
              blur: function (e, t, n) {
                switch (e) {
                case "name":
                  return R.State.isFirefox ? "filter" : "-webkit-filter";
                case "extract":
                  var i = parseFloat(n);
                  if (!i && 0 !== i) {
                    var r = n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                    i = r ? r[1] : 0
                  }
                  return i;
                case "inject":
                  return parseFloat(n) ? "blur(" + n + ")" : "none"
                }
              },
              opacity: function (e, t, n) {
                if (d <= 8) switch (e) {
                case "name":
                  return "filter";
                case "extract":
                  var i = n.toString().match(/alpha\(opacity=(.*)\)/i);
                  return i ? i[1] / 100 : 1;
                case "inject":
                  return (t.style.zoom = 1) <= parseFloat(n) ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(n), 10) + ")"
                } else switch (e) {
                case "name":
                  return "opacity";
                case "extract":
                case "inject":
                  return n
                }
              }
            },
            register: function () {
              d <= 9 || R.State.isGingerbread || (G.Lists.transformsBase = G.Lists.transformsBase.concat(G.Lists.transforms3D));
              for (var e = 0; e < G.Lists.transformsBase.length; e++) ! function () {
                var r = G.Lists.transformsBase[e];
                G.Normalizations.registered[r] = function (e, t, n) {
                  switch (e) {
                  case "name":
                    return "transform";
                  case "extract":
                    return $(t) === j || $(t).transformCache[r] === j ? /^scale/i.test(r) ? 1 : 0 : $(t).transformCache[r].replace(/[()]/g, "");
                  case "inject":
                    var i = !1;
                    switch (r.substr(0, r.length - 1)) {
                    case "translate":
                      i = !/(%|px|em|rem|vw|vh|\d)$/i.test(n);
                      break;
                    case "scal":
                    case "scale":
                      R.State.isAndroid && $(t).transformCache[r] === j && n < 1 && (n = 1), i = !/(\d)$/i.test(n);
                      break;
                    case "skew":
                      i = !/(deg|\d)$/i.test(n);
                      break;
                    case "rotate":
                      i = !/(deg|\d)$/i.test(n)
                    }
                    return i || ($(t).transformCache[r] = "(" + n + ")"), $(t).transformCache[r]
                  }
                }
              }();
              for (e = 0; e < G.Lists.colors.length; e++) ! function () {
                var s = G.Lists.colors[e];
                G.Normalizations.registered[s] = function (e, t, n) {
                  switch (e) {
                  case "name":
                    return s;
                  case "extract":
                    var i;
                    if (G.RegEx.wrappedValueAlreadyExtracted.test(n)) i = n;
                    else {
                      var r, a = {
                        black: "rgb(0, 0, 0)",
                        blue: "rgb(0, 0, 255)",
                        gray: "rgb(128, 128, 128)",
                        green: "rgb(0, 128, 0)",
                        red: "rgb(255, 0, 0)",
                        white: "rgb(255, 255, 255)"
                      };
                      /^[A-z]+$/i.test(n) ? r = a[n] !== j ? a[n] : a.black : G.RegEx.isHex.test(n) ? r = "rgb(" + G.Values.hexToRgb(n).join(" ") + ")" : /^rgba?\(/i.test(n) || (r = a.black), i = (r || n).toString().match(G.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                    }
                    return d <= 8 || 3 !== i.split(" ").length || (i += " 1"), i;
                  case "inject":
                    return d <= 8 ? 4 === n.split(" ").length && (n = n.split(/\s+/).slice(0, 3).join(" ")) : 3 === n.split(" ").length && (n += " 1"), (d <= 8 ? "rgb" : "rgba") + "(" + n.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                  }
                }
              }()
            }
          },
          Names: {
            camelCase: function (e) {
              return e.replace(/-(\w)/g, function (e, t) {
                return t.toUpperCase()
              })
            },
            SVGAttribute: function (e) {
              var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
              return (d || R.State.isAndroid && !R.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
            },
            prefixCheck: function (e) {
              if (R.State.prefixMatches[e]) return [R.State.prefixMatches[e], !0];
              for (var t = ["", "Webkit", "Moz", "ms", "O"], n = 0, i = t.length; n < i; n++) {
                var r;
                if (r = 0 === n ? e : t[n] + e.replace(/^\w/, function (e) {
                    return e.toUpperCase()
                  }), B.isString(R.State.prefixElement.style[r])) return [R.State.prefixMatches[e] = r, !0]
              }
              return [e, !1]
            }
          },
          Values: {
            hexToRgb: function (e) {
              var t;
              return e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, t, n, i) {
                return t + t + n + n + i + i
              }), (t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e)) ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
            },
            isCSSNullValue: function (e) {
              return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
            },
            getUnitType: function (e) {
              return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
            },
            getDisplayType: function (e) {
              var t = e && e.tagName.toString().toLowerCase();
              return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
            },
            addClass: function (e, t) {
              e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t
            },
            removeClass: function (e, t) {
              e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ")
            }
          },
          getPropertyValue: function (e, t, n, u) {
            function c(e, t) {
              function n() {
                a && G.setPropertyValue(e, "display", "none")
              }
              var i = 0;
              if (d <= 8) i = V.css(e, t);
              else {
                var r, a = !1;
                if (/^(width|height)$/.test(t) && 0 === G.getPropertyValue(e, "display") && (a = !0, G.setPropertyValue(e, "display", G.Values.getDisplayType(e))), !u) {
                  if ("height" === t && "border-box" !== G.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                    var s = e.offsetHeight - (parseFloat(G.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(G.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(G.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(G.getPropertyValue(e, "paddingBottom")) || 0);
                    return n(), s
                  }
                  if ("width" === t && "border-box" !== G.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                    var o = e.offsetWidth - (parseFloat(G.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(G.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(G.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(G.getPropertyValue(e, "paddingRight")) || 0);
                    return n(), o
                  }
                }
                r = $(e) === j ? _.getComputedStyle(e, null) : $(e).computedStyle ? $(e).computedStyle : $(e).computedStyle = _.getComputedStyle(e, null), "borderColor" === t && (t = "borderTopColor"), ("" === (i = 9 === d && "filter" === t ? r.getPropertyValue(t) : r[t]) || null === i) && (i = e.style[t]), n()
              }
              if ("auto" === i && /^(top|right|bottom|left)$/i.test(t)) {
                var l = c(e, "position");
                ("fixed" === l || "absolute" === l && /top|left/i.test(t)) && (i = V(e).position()[t] + "px")
              }
              return i
            }
            var i;
            if (G.Hooks.registered[t]) {
              var r = t,
                a = G.Hooks.getRoot(r);
              n === j && (n = G.getPropertyValue(e, G.Names.prefixCheck(a)[0])), G.Normalizations.registered[a] && (n = G.Normalizations.registered[a]("extract", e, n)), i = G.Hooks.extractValue(r, n)
            } else if (G.Normalizations.registered[t]) {
              var s, o;
              "transform" !== (s = G.Normalizations.registered[t]("name", e)) && (o = c(e, G.Names.prefixCheck(s)[0]), G.Values.isCSSNullValue(o) && G.Hooks.templates[t] && (o = G.Hooks.templates[t][1])), i = G.Normalizations.registered[t]("extract", e, o)
            }
            if (!/^[\d-]/.test(i))
              if ($(e) && $(e).isSVG && G.Names.SVGAttribute(t))
                if (/^(height|width)$/i.test(t)) try {
                  i = e.getBBox()[t]
                } catch (e) {
                  i = 0
                } else i = e.getAttribute(t);
                else i = c(e, G.Names.prefixCheck(t)[0]);
            return G.Values.isCSSNullValue(i) && (i = 0), 2 <= R.debug && console.log("Get " + t + ": " + i), i
          },
          setPropertyValue: function (e, t, n, i, r) {
            var a = t;
            if ("scroll" === t) r.container ? r.container["scroll" + r.direction] = n : "Left" === r.direction ? _.scrollTo(n, r.alternateValue) : _.scrollTo(r.alternateValue, n);
            else if (G.Normalizations.registered[t] && "transform" === G.Normalizations.registered[t]("name", e)) G.Normalizations.registered[t]("inject", e, n), a = "transform", n = $(e).transformCache[t];
            else {
              if (G.Hooks.registered[t]) {
                var s = t,
                  o = G.Hooks.getRoot(t);
                i = i || G.getPropertyValue(e, o), n = G.Hooks.injectValue(s, n, i), t = o
              }
              if (G.Normalizations.registered[t] && (n = G.Normalizations.registered[t]("inject", e, n), t = G.Normalizations.registered[t]("name", e)), a = G.Names.prefixCheck(t)[0], d <= 8) try {
                e.style[a] = n
              } catch (e) {
                R.debug && console.log("Browser does not support [" + n + "] for [" + a + "]")
              } else $(e) && $(e).isSVG && G.Names.SVGAttribute(t) ? e.setAttribute(t, n) : e.style[a] = n;
              2 <= R.debug && console.log("Set " + t + " (" + a + "): " + n)
            }
            return [a, n]
          },
          flushTransformCache: function (t) {
            function e(e) {
              return parseFloat(G.getPropertyValue(t, e))
            }
            var n = "";
            if ((d || R.State.isAndroid && !R.State.isChrome) && $(t).isSVG) {
              var i = {
                translate: [e("translateX"), e("translateY")],
                skewX: [e("skewX")],
                skewY: [e("skewY")],
                scale: 1 !== e("scale") ? [e("scale"), e("scale")] : [e("scaleX"), e("scaleY")],
                rotate: [e("rotateZ"), 0, 0]
              };
              V.each($(t).transformCache, function (e) {
                /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), i[e] && (n += e + "(" + i[e].join(" ") + ") ", delete i[e])
              })
            } else {
              var r, a;
              V.each($(t).transformCache, function (e) {
                return r = $(t).transformCache[e], "transformPerspective" === e ? (a = r, !0) : (9 === d && "rotateZ" === e && (e = "rotate"), void(n += e + r + " "))
              }), a && (n = "perspective" + a + " " + n)
            }
            G.setPropertyValue(t, "transform", n)
          }
        };
        G.Hooks.register(), G.Normalizations.register(), R.hook = function (e, i, r) {
          var a = j;
          return e = f(e), V.each(e, function (e, t) {
            if ($(t) === j && R.init(t), r === j) a === j && (a = R.CSS.getPropertyValue(t, i));
            else {
              var n = R.CSS.setPropertyValue(t, i, r);
              "transform" === n[0] && R.CSS.flushTransformCache(t), a = n
            }
          }), a
        };
        var g = function () {
          function e() {
            return t ? F.promise || null : n
          }
          var t, n, i, M, P, A, r = arguments[0] && (arguments[0].p || V.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || B.isString(arguments[0].properties));
          if (B.isWrapped(this) ? (t = !1, i = 0, n = M = this) : (t = !0, i = 1, M = r ? arguments[0].elements || arguments[0].e : arguments[0]), M = f(M)) {
            r ? (P = arguments[0].properties || arguments[0].p, A = arguments[0].options || arguments[0].o) : (P = arguments[i], A = arguments[i + 1]);
            var L = M.length,
              z = 0;
            if (!/^(stop|finish|finishAll)$/i.test(P) && !V.isPlainObject(A)) {
              A = {};
              for (var a = i + 1; a < arguments.length; a++) B.isArray(arguments[a]) || !/^(fast|normal|slow)$/i.test(arguments[a]) && !/^\d/.test(arguments[a]) ? B.isString(arguments[a]) || B.isArray(arguments[a]) ? A.easing = arguments[a] : B.isFunction(arguments[a]) && (A.complete = arguments[a]) : A.duration = arguments[a]
            }
            var D, F = {
              promise: null,
              resolver: null,
              rejecter: null
            };
            switch (t && R.Promise && (F.promise = new R.Promise(function (e, t) {
              F.resolver = e, F.rejecter = t
            })), P) {
            case "scroll":
              D = "scroll";
              break;
            case "reverse":
              D = "reverse";
              break;
            case "finish":
            case "finishAll":
            case "stop":
              V.each(M, function (e, t) {
                $(t) && $(t).delayTimer && (clearTimeout($(t).delayTimer.setTimeout), $(t).delayTimer.next && $(t).delayTimer.next(), delete $(t).delayTimer), "finishAll" !== P || !0 !== A && !B.isString(A) || (V.each(V.queue(t, B.isString(A) ? A : ""), function (e, t) {
                  B.isFunction(t) && t()
                }), V.queue(t, B.isString(A) ? A : "", []))
              });
              var s = [];
              return V.each(R.State.calls, function (r, a) {
                a && V.each(a[1], function (e, n) {
                  var i = A === j ? "" : A;
                  return !0 !== i && a[2].queue !== i && (A !== j || !1 !== a[2].queue) || void V.each(M, function (e, t) {
                    t === n && ((!0 === A || B.isString(A)) && (V.each(V.queue(t, B.isString(A) ? A : ""), function (e, t) {
                      B.isFunction(t) && t(null, !0)
                    }), V.queue(t, B.isString(A) ? A : "", [])), "stop" === P ? ($(t) && $(t).tweensContainer && !1 !== i && V.each($(t).tweensContainer, function (e, t) {
                      t.endValue = t.currentValue
                    }), s.push(r)) : ("finish" === P || "finishAll" === P) && (a[2].duration = 1))
                  })
                })
              }), "stop" === P && (V.each(s, function (e, t) {
                T(t, !0)
              }), F.promise && F.resolver(M)), e();
            default:
              if (!V.isPlainObject(P) || B.isEmptyObject(P)) {
                if (B.isString(P) && R.Redirects[P]) {
                  var o = (d = V.extend({}, A)).duration,
                    l = d.delay || 0;
                  return !0 === d.backwards && (M = V.extend(!0, [], M).reverse()), V.each(M, function (e, t) {
                    parseFloat(d.stagger) ? d.delay = l + parseFloat(d.stagger) * e : B.isFunction(d.stagger) && (d.delay = l + d.stagger.call(t, e, L)), d.drag && (d.duration = parseFloat(o) || (/^(callout|transition)/.test(P) ? 1e3 : 400), d.duration = Math.max(d.duration * (d.backwards ? 1 - e / L : (e + 1) / L), .75 * d.duration, 200)), R.Redirects[P].call(t, t, d || {}, e, L, M, F.promise ? F : j)
                  }), e()
                }
                var u = "Velocity: First argument (" + P + ") was not a property map, a known action, or a registered redirect. Aborting.";
                return F.promise ? F.rejecter(new Error(u)) : console.log(u), e()
              }
              D = "start"
            }
            var c, d, N = {
                lastParent: null,
                lastPosition: null,
                lastFontSize: null,
                lastPercentToPxWidth: null,
                lastPercentToPxHeight: null,
                lastEmToPx: null,
                remToPx: null,
                vwToPx: null,
                vhToPx: null
              },
              O = [];
            if (V.each(M, function (e, t) {
                B.isNode(t) && function () {
                  function n() {
                    function d(e, t) {
                      var n = j,
                        i = j,
                        r = j;
                      return B.isArray(e) ? (n = e[0], !B.isArray(e[1]) && /^[\d-]/.test(e[1]) || B.isFunction(e[1]) || G.RegEx.isHex.test(e[1]) ? r = e[1] : (B.isString(e[1]) && !G.RegEx.isHex.test(e[1]) || B.isArray(e[1])) && (i = t ? e[1] : H(e[1], E.duration), e[2] !== j && (r = e[2]))) : n = e, t || (i = i || E.easing), B.isFunction(n) && (n = n.call(T, z, L)), B.isFunction(r) && (r = r.call(T, z, L)), [n || 0, i, r]
                    }

                    function e(e, t) {
                      var n, i;
                      return i = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function (e) {
                        return n = e, ""
                      }), n || (n = G.Values.getUnitType(e)), [i, n]
                    }

                    function t() {
                      var e = {
                          myParent: T.parentNode || I.body,
                          position: G.getPropertyValue(T, "position"),
                          fontSize: G.getPropertyValue(T, "fontSize")
                        },
                        t = e.position === N.lastPosition && e.myParent === N.lastParent,
                        n = e.fontSize === N.lastFontSize;
                      N.lastParent = e.myParent, N.lastPosition = e.position, N.lastFontSize = e.fontSize;
                      var i = {};
                      if (n && t) i.emToPx = N.lastEmToPx, i.percentToPxWidth = N.lastPercentToPxWidth, i.percentToPxHeight = N.lastPercentToPxHeight;
                      else {
                        var r = $(T).isSVG ? I.createElementNS("http://www.w3.org/2000/svg", "rect") : I.createElement("div");
                        R.init(r), e.myParent.appendChild(r), V.each(["overflow", "overflowX", "overflowY"], function (e, t) {
                          R.CSS.setPropertyValue(r, t, "hidden")
                        }), R.CSS.setPropertyValue(r, "position", e.position), R.CSS.setPropertyValue(r, "fontSize", e.fontSize), R.CSS.setPropertyValue(r, "boxSizing", "content-box"), V.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (e, t) {
                          R.CSS.setPropertyValue(r, t, "100%")
                        }), R.CSS.setPropertyValue(r, "paddingLeft", "100em"), i.percentToPxWidth = N.lastPercentToPxWidth = (parseFloat(G.getPropertyValue(r, "width", null, !0)) || 1) / 100, i.percentToPxHeight = N.lastPercentToPxHeight = (parseFloat(G.getPropertyValue(r, "height", null, !0)) || 1) / 100, i.emToPx = N.lastEmToPx = (parseFloat(G.getPropertyValue(r, "paddingLeft")) || 1) / 100, e.myParent.removeChild(r)
                      }
                      return null === N.remToPx && (N.remToPx = parseFloat(G.getPropertyValue(I.body, "fontSize")) || 16), null === N.vwToPx && (N.vwToPx = parseFloat(_.innerWidth) / 100, N.vhToPx = parseFloat(_.innerHeight) / 100), i.remToPx = N.remToPx, i.vwToPx = N.vwToPx, i.vhToPx = N.vhToPx, 1 <= R.debug && console.log("Unit ratios: " + JSON.stringify(i), T), i
                    }
                    if (E.begin && 0 === z) try {
                      E.begin.call(M, M)
                    } catch (e) {
                      setTimeout(function () {
                        throw e
                      }, 1)
                    }
                    if ("scroll" === D) {
                      var n, i, r, a = /^x$/i.test(E.axis) ? "Left" : "Top",
                        s = parseFloat(E.offset) || 0;
                      E.container ? B.isWrapped(E.container) || B.isNode(E.container) ? (E.container = E.container[0] || E.container, r = (n = E.container["scroll" + a]) + V(T).position()[a.toLowerCase()] + s) : E.container = null : (n = R.State.scrollAnchor[R.State["scrollProperty" + a]], i = R.State.scrollAnchor[R.State["scrollProperty" + ("Left" === a ? "Top" : "Left")]], r = V(T).offset()[a.toLowerCase()] + s), k = {
                        scroll: {
                          rootPropertyValue: !1,
                          startValue: n,
                          currentValue: n,
                          endValue: r,
                          unitType: "",
                          easing: E.easing,
                          scrollData: {
                            container: E.container,
                            direction: a,
                            alternateValue: i
                          }
                        },
                        element: T
                      }, R.debug && console.log("tweensContainer (scroll): ", k.scroll, T)
                    } else if ("reverse" === D) {
                      if (!$(T).tweensContainer) return void V.dequeue(T, E.queue);
                      "none" === $(T).opts.display && ($(T).opts.display = "auto"), "hidden" === $(T).opts.visibility && ($(T).opts.visibility = "visible"), $(T).opts.loop = !1, $(T).opts.begin = null, $(T).opts.complete = null, A.easing || delete E.easing, A.duration || delete E.duration, E = V.extend({}, $(T).opts, E);
                      var o = V.extend(!0, {}, $(T).tweensContainer);
                      for (var l in o)
                        if ("element" !== l) {
                          var u = o[l].startValue;
                          o[l].startValue = o[l].currentValue = o[l].endValue, o[l].endValue = u, B.isEmptyObject(A) || (o[l].easing = E.easing), R.debug && console.log("reverse tweensContainer (" + l + "): " + JSON.stringify(o[l]), T)
                        }
                      k = o
                    } else if ("start" === D) {
                      for (var c in $(T).tweensContainer && !0 === $(T).isAnimating && (o = $(T).tweensContainer), V.each(P, function (e, t) {
                          if (RegExp("^" + G.Lists.colors.join("$|^") + "$").test(e)) {
                            var n = d(t, !0),
                              i = n[0],
                              r = n[1],
                              a = n[2];
                            if (G.RegEx.isHex.test(i)) {
                              for (var s = ["Red", "Green", "Blue"], o = G.Values.hexToRgb(i), l = a ? G.Values.hexToRgb(a) : j, u = 0; u < s.length; u++) {
                                var c = [o[u]];
                                r && c.push(r), l !== j && c.push(l[u]), P[e + s[u]] = c
                              }
                              delete P[e]
                            }
                          }
                        }), P) {
                        var h = d(P[c]),
                          p = h[0],
                          f = h[1],
                          g = h[2];
                        c = G.Names.camelCase(c);
                        var m = G.Hooks.getRoot(c),
                          v = !1;
                        if ($(T).isSVG || "tween" === m || !1 !== G.Names.prefixCheck(m)[1] || G.Normalizations.registered[m] !== j) {
                          (E.display !== j && null !== E.display && "none" !== E.display || E.visibility !== j && "hidden" !== E.visibility) && /opacity|filter/.test(c) && !g && 0 !== p && (g = 0), E._cacheValues && o && o[c] ? (g === j && (g = o[c].endValue + o[c].unitType), v = $(T).rootPropertyValueCache[m]) : G.Hooks.registered[c] ? g === j ? (v = G.getPropertyValue(T, m), g = G.getPropertyValue(T, c, v)) : v = G.Hooks.templates[m][1] : g === j && (g = G.getPropertyValue(T, c));
                          var y, b, x, w = !1;
                          if (g = (y = e(c, g))[0], x = y[1], p = (y = e(c, p))[0].replace(/^([+-\/*])=/, function (e, t) {
                              return w = t, ""
                            }), b = y[1], g = parseFloat(g) || 0, p = parseFloat(p) || 0, "%" === b && (/^(fontSize|lineHeight)$/.test(c) ? (p /= 100, b = "em") : /^scale/.test(c) ? (p /= 100, b = "") : /(Red|Green|Blue)$/i.test(c) && (p = p / 100 * 255, b = "")), /[\/*]/.test(w)) b = x;
                          else if (x !== b && 0 !== g)
                            if (0 === p) b = x;
                            else {
                              S = S || t();
                              var C = /margin|padding|left|right|width|text|word|letter/i.test(c) || /X$/.test(c) || "x" === c ? "x" : "y";
                              switch (x) {
                              case "%":
                                g *= "x" === C ? S.percentToPxWidth : S.percentToPxHeight;
                                break;
                              case "px":
                                break;
                              default:
                                g *= S[x + "ToPx"]
                              }
                              switch (b) {
                              case "%":
                                g *= 1 / ("x" === C ? S.percentToPxWidth : S.percentToPxHeight);
                                break;
                              case "px":
                                break;
                              default:
                                g *= 1 / S[b + "ToPx"]
                              }
                            }
                          switch (w) {
                          case "+":
                            p = g + p;
                            break;
                          case "-":
                            p = g - p;
                            break;
                          case "*":
                            p *= g;
                            break;
                          case "/":
                            p = g / p
                          }
                          k[c] = {
                            rootPropertyValue: v,
                            startValue: g,
                            currentValue: g,
                            endValue: p,
                            unitType: b,
                            easing: f
                          }, R.debug && console.log("tweensContainer (" + c + "): " + JSON.stringify(k[c]), T)
                        } else R.debug && console.log("Skipping [" + m + "] due to a lack of browser support.")
                      }
                      k.element = T
                    }
                    k.element && (G.Values.addClass(T, "velocity-animating"), O.push(k), "" === E.queue && ($(T).tweensContainer = k, $(T).opts = E), $(T).isAnimating = !0, z === L - 1 ? (R.State.calls.push([O, M, E, null, F.resolver]), !1 === R.State.isTicking && (R.State.isTicking = !0, q())) : z++)
                  }
                  var S, T = this,
                    E = V.extend({}, R.defaults, A),
                    k = {};
                  switch ($(T) === j && R.init(T), parseFloat(E.delay) && !1 !== E.queue && V.queue(T, E.queue, function (e) {
                    R.velocityQueueEntryFlag = !0, $(T).delayTimer = {
                      setTimeout: setTimeout(e, parseFloat(E.delay)),
                      next: e
                    }
                  }), E.duration.toString().toLowerCase()) {
                  case "fast":
                    E.duration = 200;
                    break;
                  case "normal":
                    E.duration = 400;
                    break;
                  case "slow":
                    E.duration = 600;
                    break;
                  default:
                    E.duration = parseFloat(E.duration) || 1
                  }!1 !== R.mock && (!0 === R.mock ? E.duration = E.delay = 1 : (E.duration *= parseFloat(R.mock) || 1, E.delay *= parseFloat(R.mock) || 1)), E.easing = H(E.easing, E.duration), E.begin && !B.isFunction(E.begin) && (E.begin = null), E.progress && !B.isFunction(E.progress) && (E.progress = null), E.complete && !B.isFunction(E.complete) && (E.complete = null), E.display !== j && null !== E.display && (E.display = E.display.toString().toLowerCase(), "auto" === E.display && (E.display = R.CSS.Values.getDisplayType(T))), E.visibility !== j && null !== E.visibility && (E.visibility = E.visibility.toString().toLowerCase()), E.mobileHA = E.mobileHA && R.State.isMobile && !R.State.isGingerbread, !1 === E.queue ? E.delay ? setTimeout(n, E.delay) : n() : V.queue(T, E.queue, function (e, t) {
                    return !0 === t ? (F.promise && F.resolver(M), !0) : (R.velocityQueueEntryFlag = !0, void n())
                  }), "" !== E.queue && "fx" !== E.queue || "inprogress" === V.queue(T)[0] || V.dequeue(T)
                }.call(t)
              }), (d = V.extend({}, R.defaults, A)).loop = parseInt(d.loop), c = 2 * d.loop - 1, d.loop)
              for (var h = 0; h < c; h++) {
                var p = {
                  delay: d.delay,
                  progress: d.progress
                };
                h === c - 1 && (p.display = d.display, p.visibility = d.visibility, p.complete = d.complete), g(M, "reverse", p)
              }
            return e()
          }
        };
        (R = V.extend(g, R)).animate = g;
        var E = _.requestAnimationFrame || t;
        return R.State.isMobile || I.hidden === j || I.addEventListener("visibilitychange", function () {
          I.hidden ? (E = function (e) {
            return setTimeout(function () {
              e(!0)
            }, 16)
          }, q()) : E = _.requestAnimationFrame || t
        }), e.Velocity = R, e !== _ && (e.fn.velocity = g, e.fn.velocity.defaults = R.defaults), V.each(["Down", "Up"], function (e, d) {
          R.Redirects["slide" + d] = function (n, e, t, i, r, a) {
            var s = V.extend({}, e),
              o = s.begin,
              l = s.complete,
              u = {
                height: "",
                marginTop: "",
                marginBottom: "",
                paddingTop: "",
                paddingBottom: ""
              },
              c = {};
            s.display === j && (s.display = "Down" === d ? "inline" === R.CSS.Values.getDisplayType(n) ? "inline-block" : "block" : "none"), s.begin = function () {
              for (var e in o && o.call(r, r), u) {
                c[e] = n.style[e];
                var t = R.CSS.getPropertyValue(n, e);
                u[e] = "Down" === d ? [t, 0] : [0, t]
              }
              c.overflow = n.style.overflow, n.style.overflow = "hidden"
            }, s.complete = function () {
              for (var e in c) n.style[e] = c[e];
              l && l.call(r, r), a && a.resolver(r)
            }, R(n, u, s)
          }
        }), V.each(["In", "Out"], function (e, u) {
          R.Redirects["fade" + u] = function (e, t, n, i, r, a) {
            var s = V.extend({}, t),
              o = {
                opacity: "In" === u ? 1 : 0
              },
              l = s.complete;
            s.complete = n !== i - 1 ? s.begin = null : function () {
              l && l.call(r, r), a && a.resolver(r)
            }, s.display === j && (s.display = "In" === u ? "auto" : "none"), R(this, o, s)
          }
        }), R
      }
      jQuery.fn.velocity = jQuery.fn.animate
    }(window.jQuery || window.Zepto || window, window, document)
  }), window.Modernizr = function (i, d, s) {
    function n(e) {
      g.cssText = e
    }

    function a(e, t) {
      return typeof e === t
    }

    function r(e, t) {
      return !!~("" + e).indexOf(t)
    }

    function o(e, t) {
      for (var n in e) {
        var i = e[n];
        if (!r(i, "-") && g[i] !== s) return "pfx" != t || i
      }
      return !1
    }

    function e(e, t, n) {
      var i = e.charAt(0).toUpperCase() + e.slice(1),
        r = (e + " " + w.join(i + " ") + i).split(" ");
      return a(t, "string") || a(t, "undefined") ? o(r, t) : function (e, t, n) {
        for (var i in e) {
          var r = t[e[i]];
          if (r !== s) return !1 === n ? e[i] : a(r, "function") ? r.bind(n || t) : r
        }
        return !1
      }(r = (e + " " + C.join(i + " ") + i).split(" "), t, n)
    }
    var t, l, u, c = {},
      h = d.documentElement,
      p = "modernizr",
      f = d.createElement(p),
      g = f.style,
      m = d.createElement("input"),
      v = ":)",
      y = {}.toString,
      b = " -webkit- -moz- -o- -ms- ".split(" "),
      x = "Webkit Moz O ms",
      w = x.split(" "),
      C = x.toLowerCase().split(" "),
      S = "http://www.w3.org/2000/svg",
      T = {},
      E = {},
      k = {},
      M = [],
      P = M.slice,
      A = function (e, t, n, i) {
        var r, a, s, o, l = d.createElement("div"),
          u = d.body,
          c = u || d.createElement("body");
        if (parseInt(n, 10))
          for (; n--;)(s = d.createElement("div")).id = i ? i[n] : p + (n + 1), l.appendChild(s);
        return r = ["&#173;", '<style id="s', p, '">', e, "</style>"].join(""), l.id = p, (u ? l : c).innerHTML += r, c.appendChild(l), u || (c.style.background = "", c.style.overflow = "hidden", o = h.style.overflow, h.style.overflow = "hidden", h.appendChild(c)), a = t(l, e), u ? l.parentNode.removeChild(l) : (c.parentNode.removeChild(c), h.style.overflow = o), !!a
      },
      L = (u = {
        select: "input",
        change: "input",
        submit: "form",
        reset: "form",
        error: "img",
        load: "img",
        abort: "img"
      }, function (e, t) {
        t = t || d.createElement(u[e] || "div");
        var n = (e = "on" + e) in t;
        return n || (t.setAttribute || (t = d.createElement("div")), t.setAttribute && t.removeAttribute && (t.setAttribute(e, ""), n = a(t[e], "function"), a(t[e], "undefined") || (t[e] = s), t.removeAttribute(e))), t = null, n
      }),
      z = {}.hasOwnProperty;
    for (var D in l = a(z, "undefined") || a(z.call, "undefined") ? function (e, t) {
        return t in e && a(e.constructor.prototype[t], "undefined")
      } : function (e, t) {
        return z.call(e, t)
      }, Function.prototype.bind || (Function.prototype.bind = function (i) {
        var r = this;
        if ("function" != typeof r) throw new TypeError;
        var a = P.call(arguments, 1),
          s = function () {
            if (this instanceof s) {
              var e = function () {};
              e.prototype = r.prototype;
              var t = new e,
                n = r.apply(t, a.concat(P.call(arguments)));
              return Object(n) === n ? n : t
            }
            return r.apply(i, a.concat(P.call(arguments)))
          };
        return s
      }), T.flexbox = function () {
        return e("flexWrap")
      }, T.flexboxlegacy = function () {
        return e("boxDirection")
      }, T.canvas = function () {
        var e = d.createElement("canvas");
        return !!e.getContext && !!e.getContext("2d")
      }, T.canvastext = function () {
        return !!c.canvas && !!a(d.createElement("canvas").getContext("2d").fillText, "function")
      }, T.webgl = function () {
        return !!i.WebGLRenderingContext
      }, T.touch = function () {
        var t;
        return "ontouchstart" in i || i.DocumentTouch && d instanceof DocumentTouch ? t = !0 : A(["@media (", b.join("touch-enabled),("), p, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (e) {
          t = 9 === e.offsetTop
        }), t
      }, T.geolocation = function () {
        return "geolocation" in navigator
      }, T.postmessage = function () {
        return !!i.postMessage
      }, T.websqldatabase = function () {
        return !!i.openDatabase
      }, T.indexedDB = function () {
        return !!e("indexedDB", i)
      }, T.hashchange = function () {
        return L("hashchange", i) && (d.documentMode === s || 7 < d.documentMode)
      }, T.history = function () {
        return !!i.history && !!history.pushState
      }, T.draganddrop = function () {
        var e = d.createElement("div");
        return "draggable" in e || "ondragstart" in e && "ondrop" in e
      }, T.websockets = function () {
        return "WebSocket" in i || "MozWebSocket" in i
      }, T.rgba = function () {
        return n("background-color:rgba(150,255,150,.5)"), r(g.backgroundColor, "rgba")
      }, T.hsla = function () {
        return n("background-color:hsla(120,40%,100%,.5)"), r(g.backgroundColor, "rgba") || r(g.backgroundColor, "hsla")
      }, T.multiplebgs = function () {
        return n("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(g.background)
      }, T.backgroundsize = function () {
        return e("backgroundSize")
      }, T.borderimage = function () {
        return e("borderImage")
      }, T.borderradius = function () {
        return e("borderRadius")
      }, T.boxshadow = function () {
        return e("boxShadow")
      }, T.textshadow = function () {
        return "" === d.createElement("div").style.textShadow
      }, T.opacity = function () {
        return e = "opacity:.55", n(b.join(e + ";") + (t || "")), /^0.55$/.test(g.opacity);
        var e, t
      }, T.cssanimations = function () {
        return e("animationName")
      }, T.csscolumns = function () {
        return e("columnCount")
      }, T.cssgradients = function () {
        var e = "background-image:";
        return n((e + "-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));" + e) + b.join("linear-gradient(left top,#9f9, white);" + e)).slice(0, -e.length)), r(g.backgroundImage, "gradient")
      }, T.cssreflections = function () {
        return e("boxReflect")
      }, T.csstransforms = function () {
        return !!e("transform")
      }, T.csstransforms3d = function () {
        var n = !!e("perspective");
        return n && "webkitPerspective" in h.style && A("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (e, t) {
          n = 9 === e.offsetLeft && 3 === e.offsetHeight
        }), n
      }, T.csstransitions = function () {
        return e("transition")
      }, T.fontface = function () {
        var a;
        return A('@font-face {font-family:"font";src:url("https://")}', function (e, t) {
          var n = d.getElementById("smodernizr"),
            i = n.sheet || n.styleSheet,
            r = i ? i.cssRules && i.cssRules[0] ? i.cssRules[0].cssText : i.cssText || "" : "";
          a = /src/i.test(r) && 0 === r.indexOf(t.split(" ")[0])
        }), a
      }, T.generatedcontent = function () {
        var t;
        return A(["#", p, "{font:0/0 a}#", p, ':after{content:"', v, '";visibility:hidden;font:3px/1 a}'].join(""), function (e) {
          t = 3 <= e.offsetHeight
        }), t
      }, T.video = function () {
        var e = d.createElement("video"),
          t = !1;
        try {
          (t = !!e.canPlayType) && ((t = new Boolean(t)).ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), t.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), t.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
        } catch (e) {}
        return t
      }, T.audio = function () {
        var e = d.createElement("audio"),
          t = !1;
        try {
          (t = !!e.canPlayType) && ((t = new Boolean(t)).ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), t.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), t.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), t.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (e) {}
        return t
      }, T.localstorage = function () {
        try {
          return localStorage.setItem(p, p), localStorage.removeItem(p), !0
        } catch (e) {
          return !1
        }
      }, T.sessionstorage = function () {
        try {
          return sessionStorage.setItem(p, p), sessionStorage.removeItem(p), !0
        } catch (e) {
          return !1
        }
      }, T.webworkers = function () {
        return !!i.Worker
      }, T.applicationcache = function () {
        return !!i.applicationCache
      }, T.svg = function () {
        return !!d.createElementNS && !!d.createElementNS(S, "svg").createSVGRect
      }, T.inlinesvg = function () {
        var e = d.createElement("div");
        return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == S
      }, T.smil = function () {
        return !!d.createElementNS && /SVGAnimate/.test(y.call(d.createElementNS(S, "animate")))
      }, T.svgclippaths = function () {
        return !!d.createElementNS && /SVGClipPath/.test(y.call(d.createElementNS(S, "clipPath")))
      }, T) l(T, D) && (t = D.toLowerCase(), c[t] = T[D](), M.push((c[t] ? "" : "no-") + t));
    return c.input || (c.input = function (e) {
      for (var t = 0, n = e.length; t < n; t++) k[e[t]] = e[t] in m;
      return k.list && (k.list = !!d.createElement("datalist") && !!i.HTMLDataListElement), k
    }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), c.inputtypes = function (e) {
      for (var t, n, i, r = 0, a = e.length; r < a; r++) m.setAttribute("type", n = e[r]), (t = "text" !== m.type) && (m.value = v, m.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(n) && m.style.WebkitAppearance !== s ? (h.appendChild(m), t = (i = d.defaultView).getComputedStyle && "textfield" !== i.getComputedStyle(m, null).WebkitAppearance && 0 !== m.offsetHeight, h.removeChild(m)) : /^(search|tel)$/.test(n) || (t = /^(url|email)$/.test(n) ? m.checkValidity && !1 === m.checkValidity() : m.value != v)), E[e[r]] = !!t;
      return E
    }("search tel url email datetime date month week time datetime-local number range color".split(" "))), c.addTest = function (e, t) {
      if ("object" == typeof e)
        for (var n in e) l(e, n) && c.addTest(n, e[n]);
      else {
        if (e = e.toLowerCase(), c[e] !== s) return c;
        t = "function" == typeof t ? t() : t, h.className += " " + (t ? "" : "no-") + e, c[e] = t
      }
      return c
    }, n(""), f = m = null, c._version = "2.8.3", c._prefixes = b, c._domPrefixes = C, c._cssomPrefixes = w, c.hasEvent = L, c.testProp = function (e) {
      return o([e])
    }, c.testAllProps = e, c.testStyles = A, h.className = h.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + " js " + M.join(" "), c
  }(this, this.document),
  /*!
   * jQuery Validation Plugin v1.13.0
   *
   * http://jqueryvalidation.org/
   *
   * Copyright (c) 2014 JÃ¶rn Zaefferer
   * Released under the MIT license
   */
  function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
  }(function (u) {
    u.extend(u.fn, {
      validate: function (e) {
        if (this.length) {
          var n = u.data(this[0], "validator");
          return n || (this.attr("novalidate", "novalidate"), n = new u.validator(e, this[0]), u.data(this[0], "validator", n), n.settings.onsubmit && (this.validateDelegate(":submit", "click", function (e) {
            n.settings.submitHandler && (n.submitButton = e.target), u(e.target).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== u(e.target).attr("formnovalidate") && (n.cancelSubmit = !0)
          }), this.submit(function (t) {
            function e() {
              var e;
              return !n.settings.submitHandler || (n.submitButton && (e = u("<input type='hidden'/>").attr("name", n.submitButton.name).val(u(n.submitButton).val()).appendTo(n.currentForm)), n.settings.submitHandler.call(n, n.currentForm, t), n.submitButton && e.remove(), !1)
            }
            return n.settings.debug && t.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, e()) : n.form() ? n.pendingRequest ? !(n.formSubmitted = !0) : e() : (n.focusInvalid(), !1)
          })), n)
        }
        e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
      },
      valid: function () {
        var e, t;
        return u(this[0]).is("form") ? e = this.validate().form() : (e = !0, t = u(this[0].form).validate(), this.each(function () {
          e = t.element(this) && e
        })), e
      },
      removeAttrs: function (e) {
        var n = {},
          i = this;
        return u.each(e.split(/\s/), function (e, t) {
          n[t] = i.attr(t), i.removeAttr(t)
        }), n
      },
      rules: function (e, t) {
        var n, i, r, a, s, o, l = this[0];
        if (e) switch (i = (n = u.data(l.form, "validator").settings).rules, r = u.validator.staticRules(l), e) {
        case "add":
          u.extend(r, u.validator.normalizeRule(t)), delete r.messages, i[l.name] = r, t.messages && (n.messages[l.name] = u.extend(n.messages[l.name], t.messages));
          break;
        case "remove":
          return t ? (o = {}, u.each(t.split(/\s/), function (e, t) {
            o[t] = r[t], delete r[t], "required" === t && u(l).removeAttr("aria-required")
          }), o) : (delete i[l.name], r)
        }
        return (a = u.validator.normalizeRules(u.extend({}, u.validator.classRules(l), u.validator.attributeRules(l), u.validator.dataRules(l), u.validator.staticRules(l)), l)).required && (s = a.required, delete a.required, a = u.extend({
          required: s
        }, a), u(l).attr("aria-required", "true")), a.remote && (s = a.remote, delete a.remote, a = u.extend(a, {
          remote: s
        })), a
      }
    }), u.extend(u.expr[":"], {
      blank: function (e) {
        return !u.trim("" + u(e).val())
      },
      filled: function (e) {
        return !!u.trim("" + u(e).val())
      },
      unchecked: function (e) {
        return !u(e).prop("checked")
      }
    }), u.validator = function (e, t) {
      this.settings = u.extend(!0, {}, u.validator.defaults, e), this.currentForm = t, this.init()
    }, u.validator.format = function (n, e) {
      return 1 === arguments.length ? function () {
        var e = u.makeArray(arguments);
        return e.unshift(n), u.validator.format.apply(this, e)
      } : (2 < arguments.length && e.constructor !== Array && (e = u.makeArray(arguments).slice(1)), e.constructor !== Array && (e = [e]), u.each(e, function (e, t) {
        n = n.replace(new RegExp("\\{" + e + "\\}", "g"), function () {
          return t
        })
      }), n)
    }, u.extend(u.validator, {
      defaults: {
        messages: {},
        groups: {},
        rules: {},
        errorClass: "error",
        validClass: "valid",
        errorElement: "label",
        focusInvalid: !0,
        errorContainer: u([]),
        errorLabelContainer: u([]),
        onsubmit: !0,
        ignore: ":hidden",
        ignoreTitle: !1,
        onfocusin: function (e) {
          this.lastActive = e, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(e)))
        },
        onfocusout: function (e) {
          this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e)
        },
        onkeyup: function (e, t) {
          9 === t.which && "" === this.elementValue(e) || (e.name in this.submitted || e === this.lastElement) && this.element(e)
        },
        onclick: function (e) {
          e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
        },
        highlight: function (e, t, n) {
          "radio" === e.type ? this.findByName(e.name).addClass(t).removeClass(n) : u(e).addClass(t).removeClass(n)
        },
        unhighlight: function (e, t, n) {
          "radio" === e.type ? this.findByName(e.name).removeClass(t).addClass(n) : u(e).removeClass(t).addClass(n)
        }
      },
      setDefaults: function (e) {
        u.extend(u.validator.defaults, e)
      },
      messages: {
        required: "This field is required.",
        remote: "Please fix this field.",
        email: "Please enter a valid email address.",
        url: "Please enter a valid URL.",
        date: "Please enter a valid date.",
        dateISO: "Please enter a valid date ( ISO ).",
        number: "Please enter a valid number.",
        digits: "Please enter only digits.",
        creditcard: "Please enter a valid credit card number.",
        equalTo: "Please enter the same value again.",
        maxlength: u.validator.format("Please enter no more than {0} characters."),
        minlength: u.validator.format("Please enter at least {0} characters."),
        rangelength: u.validator.format("Please enter a value between {0} and {1} characters long."),
        range: u.validator.format("Please enter a value between {0} and {1}."),
        max: u.validator.format("Please enter a value less than or equal to {0}."),
        min: u.validator.format("Please enter a value greater than or equal to {0}.")
      },
      autoCreateRanges: !1,
      prototype: {
        init: function () {
          this.labelContainer = u(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || u(this.currentForm), this.containers = u(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
          var n, i = this.groups = {};

          function e(e) {
            var t = u.data(this[0].form, "validator"),
              n = "on" + e.type.replace(/^validate/, ""),
              i = t.settings;
            i[n] && !this.is(i.ignore) && i[n].call(t, this[0], e)
          }
          u.each(this.settings.groups, function (n, e) {
            "string" == typeof e && (e = e.split(/\s/)), u.each(e, function (e, t) {
              i[t] = n
            })
          }), n = this.settings.rules, u.each(n, function (e, t) {
            n[e] = u.validator.normalizeRule(t)
          }), u(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", "focusin focusout keyup", e).validateDelegate("select, option, [type='radio'], [type='checkbox']", "click", e), this.settings.invalidHandler && u(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler), u(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
        },
        form: function () {
          return this.checkForm(), u.extend(this.submitted, this.errorMap), this.invalid = u.extend({}, this.errorMap), this.valid() || u(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
        },
        checkForm: function () {
          this.prepareForm();
          for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) this.check(t[e]);
          return this.valid()
        },
        element: function (e) {
          var t = this.clean(e),
            n = this.validationTargetFor(t),
            i = !0;
          return void 0 === (this.lastElement = n) ? delete this.invalid[t.name] : (this.prepareElement(n), this.currentElements = u(n), (i = !1 !== this.check(n)) ? delete this.invalid[n.name] : this.invalid[n.name] = !0), u(e).attr("aria-invalid", !i), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), i
        },
        showErrors: function (t) {
          if (t) {
            for (var e in u.extend(this.errorMap, t), this.errorList = [], t) this.errorList.push({
              message: t[e],
              element: this.findByName(e)[0]
            });
            this.successList = u.grep(this.successList, function (e) {
              return !(e.name in t)
            })
          }
          this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
        },
        resetForm: function () {
          u.fn.resetForm && u(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")
        },
        numberOfInvalids: function () {
          return this.objectLength(this.invalid)
        },
        objectLength: function (e) {
          var t, n = 0;
          for (t in e) n++;
          return n
        },
        hideErrors: function () {
          this.hideThese(this.toHide)
        },
        hideThese: function (e) {
          e.not(this.containers).text(""), this.addWrapper(e).hide()
        },
        valid: function () {
          return 0 === this.size()
        },
        size: function () {
          return this.errorList.length
        },
        focusInvalid: function () {
          if (this.settings.focusInvalid) try {
            u(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
          } catch (e) {}
        },
        findLastActive: function () {
          var t = this.lastActive;
          return t && 1 === u.grep(this.errorList, function (e) {
            return e.element.name === t.name
          }).length && t
        },
        elements: function () {
          var e = this,
            t = {};
          return u(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function () {
            return !this.name && e.settings.debug && window.console && console.error("%o has no name assigned", this), !(this.name in t || !e.objectLength(u(this).rules())) && (t[this.name] = !0)
          })
        },
        clean: function (e) {
          return u(e)[0]
        },
        errors: function () {
          var e = this.settings.errorClass.split(" ").join(".");
          return u(this.settings.errorElement + "." + e, this.errorContext)
        },
        reset: function () {
          this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = u([]), this.toHide = u([]), this.currentElements = u([])
        },
        prepareForm: function () {
          this.reset(), this.toHide = this.errors().add(this.containers)
        },
        prepareElement: function (e) {
          this.reset(), this.toHide = this.errorsFor(e)
        },
        elementValue: function (e) {
          var t, n = u(e),
            i = e.type;
          return "radio" === i || "checkbox" === i ? u("input[name='" + e.name + "']:checked").val() : "number" === i && void 0 !== e.validity ? !e.validity.badInput && n.val() : "string" == typeof (t = n.val()) ? t.replace(/\r/g, "") : t
        },
        check: function (t) {
          t = this.validationTargetFor(this.clean(t));
          var e, n, i, r = u(t).rules(),
            a = u.map(r, function (e, t) {
              return t
            }).length,
            s = !1,
            o = this.elementValue(t);
          for (n in r) {
            i = {
              method: n,
              parameters: r[n]
            };
            try {
              if ("dependency-mismatch" === (e = u.validator.methods[n].call(this, o, t, i.parameters)) && 1 === a) {
                s = !0;
                continue
              }
              if (s = !1, "pending" === e) return void(this.toHide = this.toHide.not(this.errorsFor(t)));
              if (!e) return this.formatAndAdd(t, i), !1
            } catch (e) {
              throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + i.method + "' method.", e), e
            }
          }
          if (!s) return this.objectLength(r) && this.successList.push(t), !0
        },
        customDataMessage: function (e, t) {
          return u(e).data("msg" + t.charAt(0).toUpperCase() + t.substring(1).toLowerCase()) || u(e).data("msg")
        },
        customMessage: function (e, t) {
          var n = this.settings.messages[e];
          return n && (n.constructor === String ? n : n[t])
        },
        findDefined: function () {
          for (var e = 0; e < arguments.length; e++)
            if (void 0 !== arguments[e]) return arguments[e]
        },
        defaultMessage: function (e, t) {
          return this.findDefined(this.customMessage(e.name, t), this.customDataMessage(e, t), !this.settings.ignoreTitle && e.title || void 0, u.validator.messages[t], "<strong>Warning: No message defined for " + e.name + "</strong>")
        },
        formatAndAdd: function (e, t) {
          var n = this.defaultMessage(e, t.method),
            i = /\$?\{(\d+)\}/g;
          "function" == typeof n ? n = n.call(this, t.parameters, e) : i.test(n) && (n = u.validator.format(n.replace(i, "{$1}"), t.parameters)), this.errorList.push({
            message: n,
            element: e,
            method: t.method
          }), this.errorMap[e.name] = n, this.submitted[e.name] = n
        },
        addWrapper: function (e) {
          return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e
        },
        defaultShowErrors: function () {
          var e, t, n;
          for (e = 0; this.errorList[e]; e++) n = this.errorList[e], this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message);
          if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
            for (e = 0; this.successList[e]; e++) this.showLabel(this.successList[e]);
          if (this.settings.unhighlight)
            for (e = 0, t = this.validElements(); t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
          this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
        },
        validElements: function () {
          return this.currentElements.not(this.invalidElements())
        },
        invalidElements: function () {
          return u(this.errorList).map(function () {
            return this.element
          })
        },
        showLabel: function (e, t) {
          var n, i, r, a = this.errorsFor(e),
            s = this.idOrName(e),
            o = u(e).attr("aria-describedby");
          a.length ? (a.removeClass(this.settings.validClass).addClass(this.settings.errorClass), a.html(t)) : (n = a = u("<" + this.settings.errorElement + ">").attr("id", s + "-error").addClass(this.settings.errorClass).html(t || ""), this.settings.wrapper && (n = a.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(n) : this.settings.errorPlacement ? this.settings.errorPlacement(n, u(e)) : n.insertAfter(e), a.is("label") ? a.attr("for", s) : 0 === a.parents("label[for='" + s + "']").length && (r = a.attr("id"), o ? o.match(new RegExp("\b" + r + "\b")) || (o += " " + r) : o = r, u(e).attr("aria-describedby", o), (i = this.groups[e.name]) && u.each(this.groups, function (e, t) {
            t === i && u("[name='" + e + "']", this.currentForm).attr("aria-describedby", a.attr("id"))
          }))), !t && this.settings.success && (a.text(""), "string" == typeof this.settings.success ? a.addClass(this.settings.success) : this.settings.success(a, e)), this.toShow = this.toShow.add(a)
        },
        errorsFor: function (e) {
          var t = this.idOrName(e),
            n = u(e).attr("aria-describedby"),
            i = "label[for='" + t + "'], label[for='" + t + "'] *";
          return n && (i = i + ", #" + n.replace(/\s+/g, ", #")), this.errors().filter(i)
        },
        idOrName: function (e) {
          return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name)
        },
        validationTargetFor: function (e) {
          return this.checkable(e) && (e = this.findByName(e.name).not(this.settings.ignore)[0]), e
        },
        checkable: function (e) {
          return /radio|checkbox/i.test(e.type)
        },
        findByName: function (e) {
          return u(this.currentForm).find("[name='" + e + "']")
        },
        getLength: function (e, t) {
          switch (t.nodeName.toLowerCase()) {
          case "select":
            return u("option:selected", t).length;
          case "input":
            if (this.checkable(t)) return this.findByName(t.name).filter(":checked").length
          }
          return e.length
        },
        depend: function (e, t) {
          return !this.dependTypes[typeof e] || this.dependTypes[typeof e](e, t)
        },
        dependTypes: {
          boolean: function (e) {
            return e
          },
          string: function (e, t) {
            return !!u(e, t.form).length
          },
          function: function (e, t) {
            return e(t)
          }
        },
        optional: function (e) {
          var t = this.elementValue(e);
          return !u.validator.methods.required.call(this, t, e) && "dependency-mismatch"
        },
        startRequest: function (e) {
          this.pending[e.name] || (this.pendingRequest++, this.pending[e.name] = !0)
        },
        stopRequest: function (e, t) {
          this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], t && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (u(this.currentForm).submit(), this.formSubmitted = !1) : !t && 0 === this.pendingRequest && this.formSubmitted && (u(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
        },
        previousValue: function (e) {
          return u.data(e, "previousValue") || u.data(e, "previousValue", {
            old: null,
            valid: !0,
            message: this.defaultMessage(e, "remote")
          })
        }
      },
      classRuleSettings: {
        required: {
          required: !0
        },
        email: {
          email: !0
        },
        url: {
          url: !0
        },
        date: {
          date: !0
        },
        dateISO: {
          dateISO: !0
        },
        number: {
          number: !0
        },
        digits: {
          digits: !0
        },
        creditcard: {
          creditcard: !0
        }
      },
      addClassRules: function (e, t) {
        e.constructor === String ? this.classRuleSettings[e] = t : u.extend(this.classRuleSettings, e)
      },
      classRules: function (e) {
        var t = {},
          n = u(e).attr("class");
        return n && u.each(n.split(" "), function () {
          this in u.validator.classRuleSettings && u.extend(t, u.validator.classRuleSettings[this])
        }), t
      },
      attributeRules: function (e) {
        var t, n, i = {},
          r = u(e),
          a = e.getAttribute("type");
        for (t in u.validator.methods) "required" === t ? ("" === (n = e.getAttribute(t)) && (n = !0), n = !!n) : n = r.attr(t), /min|max/.test(t) && (null === a || /number|range|text/.test(a)) && (n = Number(n)), n || 0 === n ? i[t] = n : a === t && "range" !== a && (i[t] = !0);
        return i.maxlength && /-1|2147483647|524288/.test(i.maxlength) && delete i.maxlength, i
      },
      dataRules: function (e) {
        var t, n, i = {},
          r = u(e);
        for (t in u.validator.methods) void 0 !== (n = r.data("rule" + t.charAt(0).toUpperCase() + t.substring(1).toLowerCase())) && (i[t] = n);
        return i
      },
      staticRules: function (e) {
        var t = {},
          n = u.data(e.form, "validator");
        return n.settings.rules && (t = u.validator.normalizeRule(n.settings.rules[e.name]) || {}), t
      },
      normalizeRules: function (i, r) {
        return u.each(i, function (e, t) {
          if (!1 !== t) {
            if (t.param || t.depends) {
              var n = !0;
              switch (typeof t.depends) {
              case "string":
                n = !!u(t.depends, r.form).length;
                break;
              case "function":
                n = t.depends.call(r, r)
              }
              n ? i[e] = void 0 === t.param || t.param : delete i[e]
            }
          } else delete i[e]
        }), u.each(i, function (e, t) {
          i[e] = u.isFunction(t) ? t(r) : t
        }), u.each(["minlength", "maxlength"], function () {
          i[this] && (i[this] = Number(i[this]))
        }), u.each(["rangelength", "range"], function () {
          var e;
          i[this] && (u.isArray(i[this]) ? i[this] = [Number(i[this][0]), Number(i[this][1])] : "string" == typeof i[this] && (e = i[this].replace(/[\[\]]/g, "").split(/[\s,]+/), i[this] = [Number(e[0]), Number(e[1])]))
        }), u.validator.autoCreateRanges && (i.min && i.max && (i.range = [i.min, i.max], delete i.min, delete i.max), i.minlength && i.maxlength && (i.rangelength = [i.minlength, i.maxlength], delete i.minlength, delete i.maxlength)), i
      },
      normalizeRule: function (e) {
        if ("string" == typeof e) {
          var t = {};
          u.each(e.split(/\s/), function () {
            t[this] = !0
          }), e = t
        }
        return e
      },
      addMethod: function (e, t, n) {
        u.validator.methods[e] = t, u.validator.messages[e] = void 0 !== n ? n : u.validator.messages[e], t.length < 3 && u.validator.addClassRules(e, u.validator.normalizeRule(e))
      },
      methods: {
        required: function (e, t, n) {
          if (!this.depend(n, t)) return "dependency-mismatch";
          if ("select" === t.nodeName.toLowerCase()) {
            var i = u(t).val();
            return i && 0 < i.length
          }
          return this.checkable(t) ? 0 < this.getLength(e, t) : 0 < u.trim(e).length
        },
        email: function (e, t) {
          return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)
        },
        url: function (e, t) {
          return this.optional(t) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(e)
        },
        date: function (e, t) {
          return this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString())
        },
        dateISO: function (e, t) {
          return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e)
        },
        number: function (e, t) {
          return this.optional(t) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
        },
        digits: function (e, t) {
          return this.optional(t) || /^\d+$/.test(e)
        },
        creditcard: function (e, t) {
          if (this.optional(t)) return "dependency-mismatch";
          if (/[^0-9 \-]+/.test(e)) return !1;
          var n, i, r = 0,
            a = 0,
            s = !1;
          if ((e = e.replace(/\D/g, "")).length < 13 || 19 < e.length) return !1;
          for (n = e.length - 1; 0 <= n; n--) i = e.charAt(n), a = parseInt(i, 10), s && 9 < (a *= 2) && (a -= 9), r += a, s = !s;
          return r % 10 == 0
        },
        minlength: function (e, t, n) {
          var i = u.isArray(e) ? e.length : this.getLength(u.trim(e), t);
          return this.optional(t) || n <= i
        },
        maxlength: function (e, t, n) {
          var i = u.isArray(e) ? e.length : this.getLength(u.trim(e), t);
          return this.optional(t) || i <= n
        },
        rangelength: function (e, t, n) {
          var i = u.isArray(e) ? e.length : this.getLength(u.trim(e), t);
          return this.optional(t) || i >= n[0] && i <= n[1]
        },
        min: function (e, t, n) {
          return this.optional(t) || n <= e
        },
        max: function (e, t, n) {
          return this.optional(t) || e <= n
        },
        range: function (e, t, n) {
          return this.optional(t) || e >= n[0] && e <= n[1]
        },
        equalTo: function (e, t, n) {
          var i = u(n);
          return this.settings.onfocusout && i.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
            u(t).valid()
          }), e === i.val()
        },
        remote: function (a, s, e) {
          if (this.optional(s)) return "dependency-mismatch";
          var o, t, l = this.previousValue(s);
          return this.settings.messages[s.name] || (this.settings.messages[s.name] = {}), l.originalMessage = this.settings.messages[s.name].remote, this.settings.messages[s.name].remote = l.message, e = "string" == typeof e && {
            url: e
          } || e, l.old === a ? l.valid : (l.old = a, (o = this).startRequest(s), (t = {})[s.name] = a, u.ajax(u.extend(!0, {
            url: e,
            mode: "abort",
            port: "validate" + s.name,
            dataType: "json",
            data: t,
            context: o.currentForm,
            success: function (e) {
              var t, n, i, r = !0 === e || "true" === e;
              o.settings.messages[s.name].remote = l.originalMessage, r ? (i = o.formSubmitted, o.prepareElement(s), o.formSubmitted = i, o.successList.push(s), delete o.invalid[s.name], o.showErrors()) : (t = {}, n = e || o.defaultMessage(s, "remote"), t[s.name] = l.message = u.isFunction(n) ? n(a) : n, o.invalid[s.name] = !0, o.showErrors(t)), l.valid = r, o.stopRequest(s, r)
            }
          }, e)), "pending")
        }
      }
    }), u.format = function () {
      throw "$.format has been deprecated. Please use $.validator.format instead."
    };
    var i, r = {};
    u.ajaxPrefilter ? u.ajaxPrefilter(function (e, t, n) {
      var i = e.port;
      "abort" === e.mode && (r[i] && r[i].abort(), r[i] = n)
    }) : (i = u.ajax, u.ajax = function (e) {
      var t = ("mode" in e ? e : u.ajaxSettings).mode,
        n = ("port" in e ? e : u.ajaxSettings).port;
      return "abort" === t ? (r[n] && r[n].abort(), r[n] = i.apply(this, arguments), r[n]) : i.apply(this, arguments)
    }), u.extend(u.fn, {
      validateDelegate: function (n, e, i) {
        return this.bind(e, function (e) {
          var t = u(e.target);
          if (t.is(n)) return i.apply(t, arguments)
        })
      }
    })
  }),
  function (e) {
    "function" == typeof define && define.amd ? define(["jquery", "../jquery.validate"], e) : e(jQuery)
  }(function (e) {
    e.extend(e.validator.messages, {
      required: "ã“ã®é …ç›®ã¯å¿…é ˆã§ã™ã€‚",
      remote: "ã“ã®é …ç›®ã‚’ä¿®æ­£ã—ã¦ãã ã•ã„ã€‚",
      email: "ãƒ¡ãƒ¼ãƒ«ã‚¢ãƒ‰ãƒ¬ã‚¹ã‚’å…¥åŠ›ã—ã¦ãã ã•ã„ã€‚",
      url: "æœ‰åŠ¹ãªURLã‚’å…¥åŠ›ã—ã¦ãã ã•ã„ã€‚",
      date: "æœ‰åŠ¹ãªæ—¥ä»˜ã‚’å…¥åŠ›ã—ã¦ãã ã•ã„ã€‚",
      dateISO: "æœ‰åŠ¹ãªæ—¥ä»˜ï¼ˆISOï¼‰ã‚’å…¥åŠ›ã—ã¦ãã ã•ã„ã€‚",
      number: "æœ‰åŠ¹ãªæ•°å­—ã‚’å…¥åŠ›ã—ã¦ãã ã•ã„ã€‚",
      digits: "æ•°å­—ã®ã¿ã‚’å…¥åŠ›ã—ã¦ãã ã•ã„ã€‚",
      creditcard: "æœ‰åŠ¹ãªã‚¯ãƒ¬ã‚¸ãƒƒãƒˆã‚«ãƒ¼ãƒ‰ç•ªå·ã‚’å…¥åŠ›ã—ã¦ãã ã•ã„ã€‚",
      equalTo: "åŒã˜å€¤ã‚’ã‚‚ã†ä¸€åº¦å…¥åŠ›ã—ã¦ãã ã•ã„ã€‚",
      extension: "æœ‰åŠ¹ãªæ‹¡å¼µå­ã‚’å«ã‚€å€¤ã‚’å…¥åŠ›ã—ã¦ãã ã•ã„ã€‚",
      maxlength: e.validator.format("{0} æ–‡å­—ä»¥å†…ã§å…¥åŠ›ã—ã¦ãã ã•ã„ã€‚"),
      minlength: e.validator.format("{0} æ–‡å­—ä»¥ä¸Šã§å…¥åŠ›ã—ã¦ãã ã•ã„ã€‚"),
      rangelength: e.validator.format("{0} æ–‡å­—ã‹ã‚‰ {1} æ–‡å­—ã¾ã§ã®å€¤ã‚’å…¥åŠ›ã—ã¦ãã ã•ã„ã€‚"),
      range: e.validator.format("{0} ã‹ã‚‰ {1} ã¾ã§ã®å€¤ã‚’å…¥åŠ›ã—ã¦ãã ã•ã„ã€‚"),
      max: e.validator.format("{0} ä»¥ä¸‹ã®å€¤ã‚’å…¥åŠ›ã—ã¦ãã ã•ã„ã€‚"),
      min: e.validator.format("{0} ä»¥ä¸Šã®å€¤ã‚’å…¥åŠ›ã—ã¦ãã ã•ã„ã€‚")
    })
  }),
  function (u) {
    u.fn.pageLoading = function (e) {
      var t, n = u(this),
        i = (u(n.find(".wrapper")), 0),
        r = u(n.find("img")),
        a = r.length,
        s = [],
        o = 0 < u(".loader__progress").length ? u(".loader__progress") : u('<div class="loader__progress"></div>').appendTo(n),
        l = 0 < u(".loader__progress .loader__progress--bar").length ? u(".loader__progress .loader__progress--bar") : u('<div class="loader__progress--bar"></div>').appendTo(o);
      e = u.extend({}, e);
      return r.each(function () {
        s.push(u(this).attr("src"))
      }), u.merge(s, e.src), a = s.length, u.each(s, function (e, t) {
        var n = new Image;
        n.onload = function () {
          i++
        }, n.src = t
      }), t = setInterval(function () {
        l.css({
          width: i / a * 100 + "%"
        }), i / a * 100 == 100 && (clearInterval(t), setTimeout(function () {
          u("body").removeClass("loading--head")
        }, 250), setTimeout(function () {
          u("body").removeClass("loading--foot")
        }, 500), setTimeout(function () {
          u("body").removeClass("loading")
        }, 750), setTimeout(function () {
          u("body").removeClass("preload"), o.remove(), 0 < u("[data-typewriter]").length && (u(".article01__ttl--02").velocity({
            opacity: [1, "easeOutQuart", 0],
            translateX: ["0px", "easeOutQuart", "-60px"],
            scale: ["1", "easeOutQuart", "5"],
            rotateZ: ["0deg", "easeOutQuart", "-360deg"]
          }, {
            duration: 800
          }), u(".article01__ttl--01").velocity({
            opacity: [1, "easeOutQuart", 0],
            translateY: ["0px", "easeOutQuart", "-60px"],
            scale: ["1", "easeOutQuart", "5"],
            rotateZ: ["90deg", "easeOutQuart", "-360deg"]
          }, {
            duration: 800,
            delay: 400
          }))
        }, 1e3))
      }, 5), this
    }
  }(jQuery), jQuery(function (t) {
    var i;
    t.uniformHeightInit("uh-", {
      resize: !1
    }), t.anchor(), t('a, a img, button, input[type="submit"], input[type="image"], .top__sec__works--inner, .works__item__card').customHover(), t(window).on("scroll", function () {
      0 < t(this).scrollTop() ? (t(".header").addClass("min"), t(".header").removeClass("open"), t("[data-nav-trigger]").removeClass("open"), t('[data-nav="hnav"]').removeClass("open")) : t(".header").removeClass("min")
    }), 0 < t("[data-nav-trigger]").length && t("[data-nav-trigger]").nav({
      tg: ".header"
    }), 0 < t("[data-hanv-acc]").length && t("[data-hanv-acc]").hnavAcc(), 0 < t(".top__sec__docs--item .top__sec__docs--card").length && t(".top__sec__docs--item .top__sec__docs--card").matchHeight(), 0 < t("#bg").length && (i = t("#bg").bgMorphing()), 0 < t("#top__localnav").length && t("#top__localnav .top__localnav__items").stickyNav().on("sn.change", function (e, t, n) {
      i.data("bgMorphing").morphing(n)
    }), 0 < t(".top__sec__works--item [data-mask]").length && t(".top__sec__works--item [data-mask]").worksMaskAlpha({
      item: ".top__sec__works--inner",
      thmb: ".top__sec__works--thumb"
    }), 0 < t(".works__item [data-mask]").length && t("[data-mask]").worksMaskAlpha({
      item: ".works__item__card",
      thmb: ".works__item__thumb"
    });
    var e;
    void 0 !== t("[data-article-slider]")[length] && t(window).on("load resize", function () {
      window.matchMedia(viewport.sp).matches ? e = new Swiper("[data-article-slider]", {
        slidesPerView: 3,
        grabCursor: !0,
        spped: 100,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        breakpoints: {
          750: {
            slidesPerView: 1
          }
        }
      }) : t.each(e, function () {
        this.destroy(!0, !0)
      })
    }), 0 < t("body.top").length && (t("body").hasClass("preload") || t("body").addClass("preload"), t("body").hasClass("loading") || t("body").addClass("loading"), t("body").hasClass("loading--head") || t("body").addClass("loading--head"), t("body").hasClass("loading--foot") || t("body").addClass("loading--foot"), t("body.top").pageLoading({
      src: []
    })), t(function () {
      var e = t("[data-inview]").inViewCheck();
      e.data("inViewCheck") && setTimeout(function () {
        e.data("inViewCheck").inCheck()
      }, 200)
    })
  }),
  function (o) {
    o.extend({
      anchor: function (s) {
        o('a[href^="#"]').each(function () {
          o(this).hasClass("no-ancher") || o(this).hasClass("carousel-control-prev") || o(this).hasClass("carousel-control-next") || "tab" == o(this).data("toggle") || "modal" == o(this).data("toggle") || "plan-modal" == o(this).data("toggle") || "#" == o(this).attr("href") || o(this).on("click.ancher", function (e) {
            e.preventDefault();
            var t = this.hash,
              n = ["#"],
              i = 0,
              r = o("header.header .navbar.fixed-top");
            if (s && o.merge(n, s), o.inArray(t, n) < 0) {
              var a = o(this.hash);
              return 0 < r.length && (i = -1 * r.outerHeight()), a.velocity("scroll", {
                duration: 500,
                easing: "easeOutCubic",
                offset: i
              }), o("html body").mousewheel(function () {
                a.velocity("stop")
              }), !1
            }
          })
        })
      }
    })
  }(jQuery),
  function (c) {
    function n(e, t) {
      var n = this,
        i = function (e, r) {
          var t = c(e),
            a = r.tg ? c(r.tg) : t,
            n = function () {
              var n = 0,
                i = 0;
              c(t).css("height", ""), c(t).css("line-height", ""), c.each(t, function () {
                var e = c(this).height(),
                  t = c(this).height();
                "innerHeight" == r.mode ? e = c(this).innerHeight() : "outerHeight" == r.mode && (e = c(this).outerHeight()), n < e && (n = e), i < t && (i = t)
              }), c(a).css("height", n + "px"), c(a).data("uh-lh") && c(a).css("line-height", i + "px")
            };
          c(window).on("load", function () {
            n()
          }), !1 !== r.resize && c(window).on("resize", function () {
            n()
          }), n()
        };
      this.resize = function (e, t) {
        i(e, t)
      };
      return i(e), t.resize && c(window).on("resize", function () {
        i(e)
      }), n
    }
    c.extend({
      uniformHeightInit: function (e, t) {
        var n = e || "uh-",
          i = new RegExp("^" + n + ".+$", "g"),
          r = c('[class*="' + n + '"]'),
          a = (c(r).selector, []),
          s = [],
          o = t || {},
          l = o.mode ? o.mode : null,
          u = void 0 === o.resize || o.resize;
        c.each(r, function (e, t) {
          var n = c(t).attr("class").split(" ");
          c.each(n, function (e, t) {
            a.push(t)
          })
        }), c.each(a, function (e, t) {
          t.match(i) && s.push(t)
        }), s = c.unique(c.unique(s)), c.each(s, function (e, t) {
          uniformHeightResize(c("." + t), {
            mode: l,
            resize: u
          })
        })
      }
    }), c.fn.uhResize = function (e) {
      var t = c.extend({}, c.fn.uhResize.defaults, e);
      return this.each(function () {
        c(this).data("uhResize", new n(c(this), t))
      }), this
    }, c.fn.uhResize.defaults = {
      resize: !1
    }
  }(jQuery),
  function (i) {
    function n(e, t) {
      var n = this;
      return e.on("mouseover touchstart", function () {
        i(this).addClass(t.class)
      }).on("mouseout touchend", function () {
        i(this).removeClass(t.class)
      }), n
    }
    i.fn.customHover = function (e) {
      var t = i.extend({}, i.fn.customHover.defaults, e);
      return this.each(function () {
        i(this).data("customHover", new n(i(this), t))
      }), this
    }, i.fn.customHover.defaults = {
      class: "hover"
    }
  }(jQuery),
  function (r) {
    function n(e, t) {
      var n = this,
        i = r(window);
      this.lock = function () {
        var e = i.scrollTop();
        r("body").data("scroll-top", e), r("html").css("overflow", "hidden"), r("body").css({
          position: "fixed",
          width: "100%",
          top: "-" + e + "px"
        })
      }, this.unlock = function () {
        r("html").css("overflow", ""), r("body").css({
          position: "",
          width: "",
          top: ""
        }), r("html,body").scrollTop(r("body").data("scroll-top"))
      };
      return n
    }
    r.fn.windowScrollLock = function (e) {
      var t = r.extend({}, r.fn.windowScrollLock.defaults, e);
      return this.each(function () {
        r(this).data("windowScrollLock", new n(r(this), t))
      }), this
    }, r.fn.windowScrollLock.defaults = {}
  }(jQuery),
  function (l) {
    function n(e, t) {
      var n, i, r, a = this,
        s = l(window),
        o = function () {
          e.each(function () {
            _check(l(this))
          })
        };
      _check = function (e) {
        n = s.scrollTop(), i = window.innerHeight ? window.innerHeight : s.height(), r = n + .8 * i, ot = e.get(0).offsetTop, r > ot && !e.attr(t.data) && e.attr(t.data, "done")
      }, this.inCheck = function () {
        o()
      };
      return s.on("scroll resize", o), a
    }
    l.fn.inViewCheck = function (e) {
      var t = l.extend({}, l.fn.inViewCheck.defaults, e);
      return this.each(function () {
        l(this).data("inViewCheck", new n(l(this), t))
      }), this
    }, l.fn.inViewCheck.defaults = {
      data: "data-inview"
    }
  }(jQuery),
  function (a) {
    function n(e, t) {
      var n = this,
        i = a(window).windowScrollLock(),
        r = a('[data-nav="' + e.data("nav-trigger") + '"]');
      return e.on("click.nav", function () {
        var e = a(this);
        return e.hasClass("open") ? (e.removeClass("open"), r.removeClass("open"), a(t.tg).removeClass("open"), i.data("windowScrollLock").unlock()) : (window.matchMedia(t.viewport.sp).matches && i.data("windowScrollLock").lock(), e.addClass("open"), r.addClass("open"), a(t.tg).addClass("open")), !1
      }), n
    }
    a.fn.nav = function (e) {
      var t = a.extend({}, a.fn.nav.defaults, e);
      return this.each(function () {
        a(this).data("nav", new n(a(this), t))
      }), this
    }, a.fn.nav.defaults = {
      tg: "",
      viewport: {
        pc: "(min-width: 960px)",
        sp: "(max-width: 959px)"
      }
    }
  }(jQuery),
  function (i) {
    function n(e, t) {
      var n = this;
      return e.on("click.acc", function () {
        var e = i(this);
        return e.toggleClass("active"), e.parent().toggleClass("active"), e.find("+ ul").toggleClass("open"), !1
      }), n
    }
    i.fn.hnavAcc = function (e) {
      var t = i.extend({}, i.fn.hnavAcc.defaults, e);
      return this.each(function () {
        i(this).data("hnavAcc", new n(i(this), t))
      }), this
    }, i.fn.hnavAcc.defaults = {}
  }(jQuery),
  function (h) {
    function n(c, d) {
      var e = this;
      $window = h(window), $items = c.find("> *"), current = $items.eq(0).find("a").attr("href");
      return c.on("sn.change", function (e, t) {}), $window.on("load scroll resize", function () {
        var e, t, n, i, r = $window.scrollTop(),
          a = window.innerHeight ? window.innerHeight : $window.height(),
          s = r,
          o = $items.length,
          l = 0,
          u = {};
        $items.each(function () {
          l++;
          var e = h(this).find("a").attr("href"),
            t = h(e).offset().top;
          _sa = s - t, l == o && s + a > t + .5 * h(e).height() && (_sa = 0), u[e] = _sa < 0 ? -1 * _sa : _sa
        }), t = u, h.each(t, function (e, t) {
          (void 0 === i || t < i) && (i = t, n = e)
        }), e = n, current != e && (current = e, $items.removeClass("current"), c.find('a[href="' + current + '"]').closest("li").addClass("current"), c.trigger(d.event, [e, c.find('a[href="' + current + '"]').data("article")]))
      }), e
    }
    h.fn.stickyNav = function (e) {
      var t = h.extend({}, h.fn.stickyNav.defaults, e);
      return this.each(function () {
        h(this).data("stickyNav", new n(h(this), t))
      }), this
    }, h.fn.stickyNav.defaults = {
      data: "data-inview",
      event: "sn.change"
    }
  }(jQuery),
  function (c) {
    function n(t, n) {
      var e, i, r, a, s = this,
        o = t.find(".svg-mask"),
        l = c('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1331 1527"><defs><clipPath><path d="" /></clipPath></defs><image clip-path="" width="100%" height="100%" xlink:href="/smz_om/cms/msz_media/img/top/top_mv_a.jpg" class="ph--a" /><image clip-path="" width="100%" height="100%" xlink:href="/smz_om/cms/msz_media/img/top/top_mv_s.jpg" class="ph--s" /><image clip-path="" width="100%" height="100%" xlink:href="/smz_om/cms/msz_media/img/top/top_mv_w.jpg" class="ph--w" /><image clip-path="" width="100%" height="100%" xlink:href="/smz_om/cms/msz_media/img/top/top_mv_n.jpg" class="ph--n" /><image clip-path="" width="100%" height="100%" xlink:href="/smz_om/cms/msz_media/img/top/top_mv_j.jpg" class="ph--j" /></svg>'),
        u = o.find(".bg--img");
      this.morphing = function (e) {
        return a.stop().animate({
          path: n.mask[e],
          fill: "#f5f5f5"
        }, 500, mina.easeinout), t.removeClass("bg--a bg--s bg--w bg--n bg--j"), t.addClass("bg--" + e), !0
      };
      return u.remove(), c(".bg__parts svg > *").removeAttr("style"), e = (new Date).getTime().toString(16) + Math.floor(n.rand_str * Math.random()).toString(16), (i = l.clone().attr("id", "mask-" + e)).find("clipPath").attr("id", "path-" + e), i.find("image").attr("clip-path", "url(#path-" + e + ")"), o.prepend(i), r = Snap("#mask-" + e), (a = r.select("path")).animate({
        path: n.mask.a,
        fill: "#f5f5f5"
      }, 0, mina.easeinout), s
    }
    c.fn.bgMorphing = function (e) {
      var t = c.extend({}, c.fn.bgMorphing.defaults, e);
      return this.each(function () {
        c(this).data("bgMorphing", new n(c(this), t))
      }), this
    }, c.fn.bgMorphing.defaults = {
      rand_str: 1e3,
      mask: {
        a: "M811,136,520,136,83.5,1392,400.26,1392,467.87,1177.36,863.13,1177.36,930.74,1392,1247.5,1392,811,136Z",
        s: "M1304.5,680.48S1287.65,421,1046.77,243.72,594.65,126.9,482.44,288.11,377.62,587,532.8,809.56c35.27,55.63,123.05,194.29,65.67,255.92s-97.34,52.63-181.29,5.45C273.31,981.15,301,846.81,301,846.81l-276.48,0s22.92,275.6,257.77,437.88,432.18,134.82,564.33-44.38,67.62-360.83-42.5-508.94C719,611.27,688,515.3,730.57,463c16.36-17.64,60.33-85.62,181.29-5.46,144.83,94.78,116.28,223,116.28,223Z",
        w: "M83,303.87,761.64,427.62,83,641.51,83,883.49,761.64,1097.38,83,1221.13,83,1525,1248,1312.57,1248,1008.7,466.87,762.5,1248,516.3,1248,212.43,83,0,83,303.87Z",
        n: "M876.6,136,876.6,832.15,427.1,136,170.5,136,170.5,1392,454.4,1392,454.4,695.85,903.9,1392,1160.5,1392,1160.5,136,876.6,136Z",
        j: "M803.16,136V935.91c0,82.92-67.08,150.13-149.83,150.13A149.91,149.91,0,0,1,512.5,987.29L225.5,1092c63.61,175,231.14,300,427.83,300,251.38,0,455.17-204.2,455.17-456.09V136Z"
      }
    }
  }(jQuery),
  function (h) {
    function n(e, c) {
      var t = this,
        d = h('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 288 240"><defs><clipPath><path d="" /></clipPath></defs><image clip-path="" width="100%" height="100%" xlink:href=""/></svg>');
      return e.each(function () {
        var e, t, n = h(this).parents(c.item),
          i = h(this),
          r = i.find("img"),
          a = i.data("mask"),
          s = (t = 1e3, e && (t = e), (new Date).getTime().toString(16) + Math.floor(t * Math.random()).toString(16)),
          o = d.clone().attr("id", "mask-" + s);
        o.find("clipPath").attr("id", "path-" + s), o.find("image").attr("xlink:href", r.attr("src")).attr("clip-path", "url(#path-" + s + ")"), h(this).prepend(o);
        var l = Snap("#mask-" + s),
          u = l.select("path");
        u.animate({
          path: c.mask["id_" + a],
          fill: "#000000"
        }, 0, mina.easeinout), n.on("mouseover touchstart", function () {
          (u = l.select("path")).animate({
            path: c.mask["square_" + a],
            fill: "#000000"
          }, c.speed, mina.easeinout)
        }).on("mouseout touchend", function () {
          (u = l.select("path")).animate({
            path: c.mask["id_" + a],
            fill: "#000000"
          }, c.speed, mina.easeinout)
        }), r.remove()
      }), t
    }
    h.fn.worksMaskAlpha = function (e) {
      var t = h.extend({}, h.fn.worksMaskAlpha.defaults, e);
      return this.each(function () {
        h(this).data("worksMaskAlpha", new n(h(this), t))
      }), this
    }, h.fn.worksMaskAlpha.defaults = {
      speed: 150,
      item: "",
      thmb: "",
      mask: {
        id_1: "MZ",
        square_1: "MZ",
        id_2: "MZ",
        square_2: "MZ",
        id_3: "MZ",
        square_3: "MZ",
        id_4: "M194.72 0 122.46 160 156.85 160 156.85 103.3 211.4 103.3 211.4 160 238.5 160 238.5 208 211.4 208 211.4 240 156.85 240 156.85 208 49.5 208 49.5 168.69 130.45 0 194.72 0Z",
        square_4: "M194.72 0 288 0 288 80 288 105 288 122 288 142 288 160 288 240 234 240 211.4 240 156.85 240 112 240 0 240 0 168.69 0 0 194.72 0Z",
        id_5: "MZ",
        square_5: "MZ",
        id_6: "MZ",
        square_6: "MZ",
        id_7: "MZ",
        square_7: "MZ",
        id_8: "MZ",
        square_8: "MZ",
        id_9: "MZ",
        square_9: "MZ",
        id_0: "MZ",
        square_10: "MZ",
        id_a: "M171.88,0H116.13L32.5,240H93.19l13-41h75.72l12.95,41H255.5ZM121.33,151,144,80.87,166.67,151Z",
        square_a: "M288,0H0V240H288ZM1,2V1H2Z",
        id_b: "M213.74,113.59A72.05,72.05,0,0,0,155,0H49.5V240H166.55a72.05,72.05,0,0,0,47.19-126.41ZM103.7,48H155c8.61,0,23.89,7.09,23.89,24.06S163.58,96,155,96H103.7ZM166.55,192H103.7V144h62.85c8.61,0,23.89,6.95,23.89,24S175.16,192,166.55,192Z",
        square_b: "M288,113.59V0H0V240H288V113.59ZM1,1H3L2,2H1ZM2,4H1V3H3Z",
        id_c: "M144,185.74a40.33,40.33,0,0,1-40.3-40.35V94.61a40.3,40.3,0,1,1,80.6,0h54.2a94.5,94.5,0,1,0-189,0v50.78a94.5,94.5,0,1,0,189,0H184.3A40.33,40.33,0,0,1,144,185.74Z",
        square_c: "M288 185.74 288 145.39 288 94.61 288 54.26 288 18 288 0 144 0 0 0 0 240 144 240 288 240 288 222 288 185.74Z",
        id_d: "MZ",
        square_d: "MZ",
        id_e: "M238.5 47.97 238.5 0 49.5 0 49.5 240 238.5 240 238.5 192.03 103.7 192.03 103.7 143.99 226.92 143.99 226.92 96.01 103.7 96.01 103.7 47.97 238.5 47.97Z",
        square_e: "M288 47.97 288 0 0 0 0 240 288 240 288 192 288 182 288 154 288 143.99 288 96.01 288 86 288 58 288 47.97Z",
        id_f: "MZ",
        square_f: "MZ",
        id_g: "MZ",
        square_g: "MZ",
        id_h: "M184.3 0 184.3 96.01 103.7 96.01 103.7 0 49.5 0 49.5 240 103.7 240 103.7 143.99 184.3 143.99 184.3 240 238.5 240 238.5 0 184.3 0Z",
        square_h: "M184.3 0 154 0 135 0 103.7 0 0 0 0 240 103.7 240 134 240 154 240 184.3 240 288 240 288 0 184.3 0Z",
        id_i: "MZ",
        square_i: "MZ",
        id_j: "M170.06,0V152.85a28.68,28.68,0,0,1-55.63,9.82l-54.93,20a87.13,87.13,0,0,0,169-29.82V0Z",
        square_j: "M0 0 0 152.85 0 181.54 0 215 0 240 141.38 240 288 240 288 0 0 0Z",
        id_k: "M161.7 97.04 232.58 0 168.72 0 103.68 89.04 103.68 0 49.5 0 49.5 240 103.68 240 103.68 176.35 124.53 147.83 174.04 240 238.5 240 161.7 97.04Z",
        square_k: "M288 97.04 288 0 168.72 0 122 0 103.68 0 0 0 0 240 103.68 240 112 240 124.53 240 174.04 240 288 240 288 97.04Z",
        id_l: "MZ",
        square_l: "MZ",
        id_m: "MZ",
        square_m: "MZ",
        id_n: "MZ",
        square_n: "MZ",
        id_o: "M144,0A94.56,94.56,0,0,0,49.5,94.61v50.78a94.5,94.5,0,1,0,189,0V94.61A94.56,94.56,0,0,0,144,0Zm40.3,145.39a40.3,40.3,0,1,1-80.6,0V94.61a40.3,40.3,0,1,1,80.6,0Z",
        square_o: "M144,0H0V240H288V0ZM3,1V2H1V1H3Z",
        id_p: "M166.55,0H49.5V240h54.2V144l62.85.07A72,72,0,0,0,166.55,0Zm0,96H103.7V48h62.85c8.61,0,23.89,7.09,23.89,24.06S175.16,96,166.55,96Z",
        square_p: "M288,0H0V240H288V0ZM2,2H1V1H3Z",
        id_q: "MZ",
        square_q: "MZ",
        id_r: "MZ",
        square_r: "MZ",
        id_s: "M121.48,67.3c0-11.61,8.17-20.4,26.87-20.4,34.08,0,41.82,21.42,41.82,21.42L232,38.4S200.4,0,145.7,0C128.53,0,65,3.84,65,67.64c-.4,80.78,101.42,66.82,101.48,105.06,0,2.64-.06,20.4-26.87,20.4-34.08,0-41.82-21.42-41.82-21.42L56,201.6S87.6,240,142.3,240c62.09,0,80.66-35.75,80.66-67.64C223,90.59,121.48,107.54,121.48,67.3Z",
        square_s: "M288 146 288 86 288 39 288 0 145.7 0 0 0 0 116 0 175 0 202 0 240 142.3 240 288 240 288 146Z",
        id_t: "M238.5 0 49.5 0 49.5 47.97 116.9 47.97 116.9 240 171.1 240 171.1 47.97 238.5 47.97 238.5 0Z",
        square_t: "M288 0 0 0 0 47.97 0 240 116.9 240 171.1 240 288 240 288 47.97 288 0Z",
        id_u: "MZ",
        square_u: "MZ",
        id_v: "MZ",
        square_v: "MZ",
        id_w: "MZ",
        square_w: "MZ",
        id_x: "MZ",
        square_x: "MZ",
        id_y: "MZ",
        square_y: "MZ",
        id_z: "MZ",
        square_z: "MZ"
      }
    }
  }(jQuery),
  function () {
    window._uac = {};
    var e = window.navigator.userAgent.toLowerCase(),
      t = window.navigator.appVersion.toLowerCase();
    _uac.browser = -1 !== e.indexOf("edge") ? "edge" : -1 !== e.indexOf("iemobile") ? "iemobile" : -1 !== e.indexOf("trident/7") ? "ie11" : -1 === e.indexOf("msie") || -1 !== e.indexOf("opera") ? -1 !== e.indexOf("chrome") && -1 === e.indexOf("edge") ? "chrome" : -1 !== e.indexOf("safari") && -1 === e.indexOf("chrome") ? "safari" : -1 !== e.indexOf("opera") ? "opera" : -1 !== e.indexOf("firefox") ? "firefox" : "unknown_browser" : -1 !== t.indexOf("msie 6.") ? "ie6" : -1 !== t.indexOf("msie 7.") ? "ie7" : -1 !== t.indexOf("msie 8.") ? "ie8" : -1 !== t.indexOf("msie 9.") ? "ie9" : -1 !== t.indexOf("msie 10.") ? "ie10" : void 0, _uac.device = -1 !== e.indexOf("iphone") || -1 !== e.indexOf("ipod") ? "iphone" : -1 !== e.indexOf("ipad") ? "ipad" : -1 !== e.indexOf("android") ? "android" : -1 !== e.indexOf("windows") && -1 !== e.indexOf("phone") ? "windows_phone" : "", _uac.iosVer = function () {
      if (/iP(hone|od|ad)/.test(navigator.platform)) {
        var e = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
        return [parseInt(e[1], 10), parseInt(e[2], 10), parseInt(e[3] || 0, 10)][0]
      }
      return 0
    }(), _uac.isIE = "ie" === _uac.browser.substr(0, 2) && "iemobile" !== _uac.browser, _uac.isiOS = "iphone" === _uac.device || "ipad" === _uac.device, _uac.isMobile = -1 !== e.indexOf("mobi") || "iphone" === _uac.device || "windows_phone" === _uac.device && -1 === e.indexOf("wpdesktop") || "iemobile" === _uac.device, _uac.isTablet = "ipad" === _uac.device || "android" === _uac.device && !_uac.isMobile, _uac.isTouch = "ontouchstart" in window, _uac.isModern = !("ie6" === _uac.browser || "ie7" === _uac.browser || "ie8" === _uac.browser || "ie9" === _uac.browser || 0 < _uac.iosVer && _uac.iosVer < 8);
    document.addEventListener("DOMContentLoaded", function () {
      var e;
      document.documentElement.className += (e = " ", e += "" !== _uac.browser ? _uac.browser + " " : "browser-unknown ", e += "" !== _uac.device ? _uac.device + " " : "device-unknown ", e += _uac.isMobile ? "mobile " : "desktop ", e += _uac.isTouch ? "touch " : "mouse ", e += _uac.isiOS ? "ios " : "", e += _uac.isIE ? "ie " : "", e += _uac.isModern ? "modern " : "old ")
    })
  }(), $(function () {
    var e, t, n;
    if (0 < $("body.contact").length) return $.validator.addMethod("phoneJP", function (e, t) {
      return e && /^\d{2,5}\-?\d{2,4}\-?\d{4}$/.test(e)
    }, "Please specify a valid phone number"), 0 < (e = $("#contactForm")).length && e.validate({
      errorPlacement: function (e, t) {
        return "contact[contact_categories][]" === t.attr("name") ? e.appendTo("#contactCategory") : "contact[interested_categories][]" === t.attr("name") ? e.appendTo("#interestedCategory") : e.insertAfter(t)
      },
      messages: {
        "contact[contact_categories][]": {
          required: "ãŠå•åˆã›ã®æ–¹ã‚’é¸æŠžã—ã¦ãã ã•ã„"
        },
        "contact[company]": {
          required: "ä¼šç¤¾åã‚’å…¥åŠ›ã—ã¦ãã ã•ã„"
        },
        "contact[name]": {
          required: "åå‰ã‚’å…¥åŠ›ã—ã¦ãã ã•ã„"
        },
        "contact[tel]": {
          required: "é›»è©±ç•ªå·ã‚’å…¥åŠ›ã—ã¦ãã ã•ã„",
          phoneJP: "é›»è©±ç•ªå·ãŒä¸æ­£ã§ã™"
        },
        "contact[email]": {
          required: "ãƒ¡ãƒ¼ãƒ«ã‚¢ãƒ‰ãƒ¬ã‚¹ã‚’å…¥åŠ›ã—ã¦ãã ã•ã„"
        },
        "contact[interested_categories][]": {
          required: "èˆˆå‘³ã®ã‚ã‚‹å†…å®¹ã‚’é¸æŠžã—ã¦ãã ã•ã„"
        },
        "contact[content]": {
          required: "ãŠå•åˆã›å†…å®¹ã‚’å…¥åŠ›ã—ã¦ãã ã•ã„"
        }
      },
      rules: {
        "contact[contact_categories][]": {
          required: !0
        },
        "contact[company]": {
          required: !0
        },
        "contact[name]": {
          required: !0
        },
        "contact[tel]": {
          required: !0,
          phoneJP: !0
        },
        "contact[email]": {
          email: !0,
          required: !0
        },
        "contact[interested_categories][]": {
          required: !0
        },
        "contact[content]": {
          required: !0
        }
      }
    }), t = $("#contactFormConfirm"), n = function (e) {
      return t.attr({
        action: e
      }), t.submit()
    }, $("#contactFormConfirm .back").on("click", function () {
      var e;
      return e = $("#contactFormConfirm .back").attr("data-url"), n(e)
    }), $("#giftFormConfirm .back").on("click", function () {
      var e;
      return e = $("#giftFormConfirm .back").attr("data-url"), n(e)
    })
  });
