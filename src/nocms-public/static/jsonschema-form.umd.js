(function (P, qr) {
  typeof exports == "object" && typeof module < "u"
    ? (module.exports = qr(require("react")))
    : typeof define == "function" && define.amd
    ? define(["react"], qr)
    : ((P = typeof globalThis < "u" ? globalThis : P || self),
      (P.JSONSchemaForm = qr(P.React)));
})(this, function (P) {
  "use strict";
  function qr(e, r) {
    for (var t = -1, n = e == null ? 0 : e.length, a = Array(n); ++t < n;) {
      a[t] = r(e[t], t, e);
    }
    return a;
  }
  function ks(e, r) {
    var t = -1,
      n = e.length;
    for (r || (r = Array(n)); ++t < n;) r[t] = e[t];
    return r;
  }
  var ch = Array.isArray;
  const ze = ch;
  var fh = typeof global == "object" && global && global.Object === Object &&
    global;
  const Ls = fh;
  var dh = typeof self == "object" && self && self.Object === Object && self,
    hh = Ls || dh || Function("return this")();
  const ur = hh;
  var mh = ur.Symbol;
  const He = mh;
  var xs = Object.prototype,
    ph = xs.hasOwnProperty,
    vh = xs.toString,
    Ht = He ? He.toStringTag : void 0;
  function yh(e) {
    var r = ph.call(e, Ht),
      t = e[Ht];
    try {
      e[Ht] = void 0;
      var n = !0;
    } catch {}
    var a = vh.call(e);
    return n && (r ? (e[Ht] = t) : delete e[Ht]), a;
  }
  var gh = Object.prototype,
    $h = gh.toString;
  function _h(e) {
    return $h.call(e);
  }
  var bh = "[object Null]",
    Sh = "[object Undefined]",
    qs = He ? He.toStringTag : void 0;
  function Pr(e) {
    return e == null
      ? e === void 0 ? Sh : bh
      : qs && qs in Object(e)
      ? yh(e)
      : _h(e);
  }
  function rr(e) {
    return e != null && typeof e == "object";
  }
  var Eh = "[object Symbol]";
  function qn(e) {
    return typeof e == "symbol" || (rr(e) && Pr(e) == Eh);
  }
  function Fe(e) {
    var r = typeof e;
    return e != null && (r == "object" || r == "function");
  }
  var wh = "[object AsyncFunction]",
    Oh = "[object Function]",
    Ah = "[object GeneratorFunction]",
    Th = "[object Proxy]";
  function Bs(e) {
    if (!Fe(e)) return !1;
    var r = Pr(e);
    return r == Oh || r == Ah || r == wh || r == Th;
  }
  var Ph = ur["__core-js_shared__"];
  const ii = Ph;
  var Vs = (function () {
    var e = /[^.]+$/.exec((ii && ii.keys && ii.keys.IE_PROTO) || "");
    return e ? "Symbol(src)_1." + e : "";
  })();
  function Ch(e) {
    return !!Vs && Vs in e;
  }
  var Ih = Function.prototype,
    Nh = Ih.toString;
  function Br(e) {
    if (e != null) {
      try {
        return Nh.call(e);
      } catch {}
      try {
        return e + "";
      } catch {}
    }
    return "";
  }
  var Dh = /[\\^$.*+?()[\]{}|]/g,
    Fh = /^\[object .+?Constructor\]$/,
    jh = Function.prototype,
    Mh = Object.prototype,
    Rh = jh.toString,
    Uh = Mh.hasOwnProperty,
    kh = RegExp(
      "^" +
        Rh.call(Uh)
          .replace(Dh, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?",
          ) +
        "$",
    );
  function Lh(e) {
    if (!Fe(e) || Ch(e)) return !1;
    var r = Bs(e) ? kh : Fh;
    return r.test(Br(e));
  }
  function xh(e, r) {
    return e == null ? void 0 : e[r];
  }
  function Vr(e, r) {
    var t = xh(e, r);
    return Lh(t) ? t : void 0;
  }
  var qh = Vr(Object, "create");
  const Yt = qh;
  function Bh() {
    (this.__data__ = Yt ? Yt(null) : {}), (this.size = 0);
  }
  function Vh(e) {
    var r = this.has(e) && delete this.__data__[e];
    return (this.size -= r ? 1 : 0), r;
  }
  var Kh = "__lodash_hash_undefined__",
    zh = Object.prototype,
    Gh = zh.hasOwnProperty;
  function Wh(e) {
    var r = this.__data__;
    if (Yt) {
      var t = r[e];
      return t === Kh ? void 0 : t;
    }
    return Gh.call(r, e) ? r[e] : void 0;
  }
  var Hh = Object.prototype,
    Yh = Hh.hasOwnProperty;
  function Jh(e) {
    var r = this.__data__;
    return Yt ? r[e] !== void 0 : Yh.call(r, e);
  }
  var Xh = "__lodash_hash_undefined__";
  function Zh(e, r) {
    var t = this.__data__;
    return (
      (this.size += this.has(e) ? 0 : 1),
        (t[e] = Yt && r === void 0 ? Xh : r),
        this
    );
  }
  function Kr(e) {
    var r = -1,
      t = e == null ? 0 : e.length;
    for (this.clear(); ++r < t;) {
      var n = e[r];
      this.set(n[0], n[1]);
    }
  }
  (Kr.prototype.clear = Bh),
    (Kr.prototype.delete = Vh),
    (Kr.prototype.get = Wh),
    (Kr.prototype.has = Jh),
    (Kr.prototype.set = Zh);
  function Qh() {
    (this.__data__ = []), (this.size = 0);
  }
  function oi(e, r) {
    return e === r || (e !== e && r !== r);
  }
  function Bn(e, r) {
    for (var t = e.length; t--;) if (oi(e[t][0], r)) return t;
    return -1;
  }
  var em = Array.prototype,
    rm = em.splice;
  function tm(e) {
    var r = this.__data__,
      t = Bn(r, e);
    if (t < 0) return !1;
    var n = r.length - 1;
    return t == n ? r.pop() : rm.call(r, t, 1), --this.size, !0;
  }
  function nm(e) {
    var r = this.__data__,
      t = Bn(r, e);
    return t < 0 ? void 0 : r[t][1];
  }
  function am(e) {
    return Bn(this.__data__, e) > -1;
  }
  function im(e, r) {
    var t = this.__data__,
      n = Bn(t, e);
    return n < 0 ? (++this.size, t.push([e, r])) : (t[n][1] = r), this;
  }
  function br(e) {
    var r = -1,
      t = e == null ? 0 : e.length;
    for (this.clear(); ++r < t;) {
      var n = e[r];
      this.set(n[0], n[1]);
    }
  }
  (br.prototype.clear = Qh),
    (br.prototype.delete = tm),
    (br.prototype.get = nm),
    (br.prototype.has = am),
    (br.prototype.set = im);
  var om = Vr(ur, "Map");
  const Jt = om;
  function sm() {
    (this.size = 0),
      (this.__data__ = {
        hash: new Kr(),
        map: new (Jt || br)(),
        string: new Kr(),
      });
  }
  function um(e) {
    var r = typeof e;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean"
      ? e !== "__proto__"
      : e === null;
  }
  function Vn(e, r) {
    var t = e.__data__;
    return um(r) ? t[typeof r == "string" ? "string" : "hash"] : t.map;
  }
  function lm(e) {
    var r = Vn(this, e).delete(e);
    return (this.size -= r ? 1 : 0), r;
  }
  function cm(e) {
    return Vn(this, e).get(e);
  }
  function fm(e) {
    return Vn(this, e).has(e);
  }
  function dm(e, r) {
    var t = Vn(this, e),
      n = t.size;
    return t.set(e, r), (this.size += t.size == n ? 0 : 1), this;
  }
  function Sr(e) {
    var r = -1,
      t = e == null ? 0 : e.length;
    for (this.clear(); ++r < t;) {
      var n = e[r];
      this.set(n[0], n[1]);
    }
  }
  (Sr.prototype.clear = sm),
    (Sr.prototype.delete = lm),
    (Sr.prototype.get = cm),
    (Sr.prototype.has = fm),
    (Sr.prototype.set = dm);
  var hm = "Expected a function";
  function si(e, r) {
    if (typeof e != "function" || (r != null && typeof r != "function")) {
      throw new TypeError(hm);
    }
    var t = function () {
      var n = arguments,
        a = r ? r.apply(this, n) : n[0],
        i = t.cache;
      if (i.has(a)) return i.get(a);
      var o = e.apply(this, n);
      return (t.cache = i.set(a, o) || i), o;
    };
    return (t.cache = new (si.Cache || Sr)()), t;
  }
  si.Cache = Sr;
  var mm = 500;
  function pm(e) {
    var r = si(e, function (n) {
        return t.size === mm && t.clear(), n;
      }),
      t = r.cache;
    return r;
  }
  var vm =
      /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    ym = /\\(\\)?/g,
    gm = pm(function (e) {
      var r = [];
      return (
        e.charCodeAt(0) === 46 && r.push(""),
          e.replace(vm, function (t, n, a, i) {
            r.push(a ? i.replace(ym, "$1") : n || t);
          }),
          r
      );
    });
  const Ks = gm;
  var $m = 1 / 0;
  function Xt(e) {
    if (typeof e == "string" || qn(e)) return e;
    var r = e + "";
    return r == "0" && 1 / e == -$m ? "-0" : r;
  }
  var _m = 1 / 0,
    zs = He ? He.prototype : void 0,
    Gs = zs ? zs.toString : void 0;
  function Ws(e) {
    if (typeof e == "string") return e;
    if (ze(e)) return qr(e, Ws) + "";
    if (qn(e)) return Gs ? Gs.call(e) : "";
    var r = e + "";
    return r == "0" && 1 / e == -_m ? "-0" : r;
  }
  function Hs(e) {
    return e == null ? "" : Ws(e);
  }
  function bm(e) {
    return ze(e) ? qr(e, Xt) : qn(e) ? [e] : ks(Ks(Hs(e)));
  }
  function Sm() {
    (this.__data__ = new br()), (this.size = 0);
  }
  function Em(e) {
    var r = this.__data__,
      t = r.delete(e);
    return (this.size = r.size), t;
  }
  function wm(e) {
    return this.__data__.get(e);
  }
  function Om(e) {
    return this.__data__.has(e);
  }
  var Am = 200;
  function Tm(e, r) {
    var t = this.__data__;
    if (t instanceof br) {
      var n = t.__data__;
      if (!Jt || n.length < Am - 1) {
        return n.push([e, r]), (this.size = ++t.size), this;
      }
      t = this.__data__ = new Sr(n);
    }
    return t.set(e, r), (this.size = t.size), this;
  }
  function Er(e) {
    var r = (this.__data__ = new br(e));
    this.size = r.size;
  }
  (Er.prototype.clear = Sm),
    (Er.prototype.delete = Em),
    (Er.prototype.get = wm),
    (Er.prototype.has = Om),
    (Er.prototype.set = Tm);
  function Pm(e, r) {
    for (
      var t = -1, n = e == null ? 0 : e.length;
      ++t < n && r(e[t], t, e) !== !1;
    );
    return e;
  }
  var Cm = (function () {
    try {
      var e = Vr(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {}
  })();
  const Kn = Cm;
  function Ys(e, r, t) {
    r == "__proto__" && Kn
      ? Kn(e, r, { configurable: !0, enumerable: !0, value: t, writable: !0 })
      : (e[r] = t);
  }
  var Im = Object.prototype,
    Nm = Im.hasOwnProperty;
  function ui(e, r, t) {
    var n = e[r];
    (!(Nm.call(e, r) && oi(n, t)) || (t === void 0 && !(r in e))) &&
      Ys(e, r, t);
  }
  function Zt(e, r, t, n) {
    var a = !t;
    t || (t = {});
    for (var i = -1, o = r.length; ++i < o;) {
      var s = r[i],
        u = n ? n(t[s], e[s], s, t, e) : void 0;
      u === void 0 && (u = e[s]), a ? Ys(t, s, u) : ui(t, s, u);
    }
    return t;
  }
  function Dm(e, r) {
    for (var t = -1, n = Array(e); ++t < e;) n[t] = r(t);
    return n;
  }
  var Fm = "[object Arguments]";
  function Js(e) {
    return rr(e) && Pr(e) == Fm;
  }
  var Xs = Object.prototype,
    jm = Xs.hasOwnProperty,
    Mm = Xs.propertyIsEnumerable,
    Rm = Js(
        (function () {
          return arguments;
        })(),
      )
      ? Js
      : function (e) {
        return rr(e) && jm.call(e, "callee") && !Mm.call(e, "callee");
      };
  const zn = Rm;
  function Um() {
    return !1;
  }
  var Zs = typeof exports == "object" && exports && !exports.nodeType &&
      exports,
    Qs = Zs && typeof module == "object" && module && !module.nodeType &&
      module,
    km = Qs && Qs.exports === Zs,
    eu = km ? ur.Buffer : void 0,
    Lm = eu ? eu.isBuffer : void 0,
    xm = Lm || Um;
  const Qt = xm;
  var qm = 9007199254740991,
    Bm = /^(?:0|[1-9]\d*)$/;
  function li(e, r) {
    var t = typeof e;
    return (
      (r = r ?? qm),
        !!r &&
        (t == "number" || (t != "symbol" && Bm.test(e))) &&
        e > -1 &&
        e % 1 == 0 &&
        e < r
    );
  }
  var Vm = 9007199254740991;
  function ci(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Vm;
  }
  var Km = "[object Arguments]",
    zm = "[object Array]",
    Gm = "[object Boolean]",
    Wm = "[object Date]",
    Hm = "[object Error]",
    Ym = "[object Function]",
    Jm = "[object Map]",
    Xm = "[object Number]",
    Zm = "[object Object]",
    Qm = "[object RegExp]",
    ep = "[object Set]",
    rp = "[object String]",
    tp = "[object WeakMap]",
    np = "[object ArrayBuffer]",
    ap = "[object DataView]",
    ip = "[object Float32Array]",
    op = "[object Float64Array]",
    sp = "[object Int8Array]",
    up = "[object Int16Array]",
    lp = "[object Int32Array]",
    cp = "[object Uint8Array]",
    fp = "[object Uint8ClampedArray]",
    dp = "[object Uint16Array]",
    hp = "[object Uint32Array]",
    _e = {};
  (_e[ip] =
    _e[op] =
    _e[sp] =
    _e[up] =
    _e[lp] =
    _e[cp] =
    _e[fp] =
    _e[dp] =
    _e[hp] =
      !0),
    (_e[Km] =
      _e[zm] =
      _e[np] =
      _e[Gm] =
      _e[ap] =
      _e[Wm] =
      _e[Hm] =
      _e[Ym] =
      _e[Jm] =
      _e[Xm] =
      _e[Zm] =
      _e[Qm] =
      _e[ep] =
      _e[rp] =
      _e[tp] =
        !1);
  function mp(e) {
    return rr(e) && ci(e.length) && !!_e[Pr(e)];
  }
  function fi(e) {
    return function (r) {
      return e(r);
    };
  }
  var ru = typeof exports == "object" && exports && !exports.nodeType &&
      exports,
    en = ru && typeof module == "object" && module && !module.nodeType &&
      module,
    pp = en && en.exports === ru,
    di = pp && Ls.process,
    vp = (function () {
      try {
        var e = en && en.require && en.require("util").types;
        return e || (di && di.binding && di.binding("util"));
      } catch {}
    })();
  const ct = vp;
  var tu = ct && ct.isTypedArray,
    yp = tu ? fi(tu) : mp;
  const hi = yp;
  var gp = Object.prototype,
    $p = gp.hasOwnProperty;
  function nu(e, r) {
    var t = ze(e),
      n = !t && zn(e),
      a = !t && !n && Qt(e),
      i = !t && !n && !a && hi(e),
      o = t || n || a || i,
      s = o ? Dm(e.length, String) : [],
      u = s.length;
    for (var l in e) {
      (r || $p.call(e, l)) &&
        !(
          o &&
          (l == "length" ||
            (a && (l == "offset" || l == "parent")) ||
            (i && (l == "buffer" || l == "byteLength" || l == "byteOffset")) ||
            li(l, u))
        ) &&
        s.push(l);
    }
    return s;
  }
  var _p = Object.prototype;
  function Gn(e) {
    var r = e && e.constructor,
      t = (typeof r == "function" && r.prototype) || _p;
    return e === t;
  }
  function au(e, r) {
    return function (t) {
      return e(r(t));
    };
  }
  var bp = au(Object.keys, Object);
  const Sp = bp;
  var Ep = Object.prototype,
    wp = Ep.hasOwnProperty;
  function iu(e) {
    if (!Gn(e)) return Sp(e);
    var r = [];
    for (var t in Object(e)) wp.call(e, t) && t != "constructor" && r.push(t);
    return r;
  }
  function Wn(e) {
    return e != null && ci(e.length) && !Bs(e);
  }
  function mi(e) {
    return Wn(e) ? nu(e) : iu(e);
  }
  function Op(e, r) {
    return e && Zt(r, mi(r), e);
  }
  function Ap(e) {
    var r = [];
    if (e != null) for (var t in Object(e)) r.push(t);
    return r;
  }
  var Tp = Object.prototype,
    Pp = Tp.hasOwnProperty;
  function Cp(e) {
    if (!Fe(e)) return Ap(e);
    var r = Gn(e),
      t = [];
    for (var n in e) (n == "constructor" && (r || !Pp.call(e, n))) || t.push(n);
    return t;
  }
  function pi(e) {
    return Wn(e) ? nu(e, !0) : Cp(e);
  }
  function Ip(e, r) {
    return e && Zt(r, pi(r), e);
  }
  var ou = typeof exports == "object" && exports && !exports.nodeType &&
      exports,
    su = ou && typeof module == "object" && module && !module.nodeType &&
      module,
    Np = su && su.exports === ou,
    uu = Np ? ur.Buffer : void 0,
    lu = uu ? uu.allocUnsafe : void 0;
  function Dp(e, r) {
    if (r) return e.slice();
    var t = e.length,
      n = lu ? lu(t) : new e.constructor(t);
    return e.copy(n), n;
  }
  function Fp(e, r) {
    for (var t = -1, n = e == null ? 0 : e.length, a = 0, i = []; ++t < n;) {
      var o = e[t];
      r(o, t, e) && (i[a++] = o);
    }
    return i;
  }
  function cu() {
    return [];
  }
  var jp = Object.prototype,
    Mp = jp.propertyIsEnumerable,
    fu = Object.getOwnPropertySymbols,
    Rp = fu
      ? function (e) {
        return e == null ? [] : ((e = Object(e)),
          Fp(fu(e), function (r) {
            return Mp.call(e, r);
          }));
      }
      : cu;
  const vi = Rp;
  function Up(e, r) {
    return Zt(e, vi(e), r);
  }
  function yi(e, r) {
    for (var t = -1, n = r.length, a = e.length; ++t < n;) e[a + t] = r[t];
    return e;
  }
  var kp = au(Object.getPrototypeOf, Object);
  const gi = kp;
  var Lp = Object.getOwnPropertySymbols,
    xp = Lp
      ? function (e) {
        for (var r = []; e;) yi(r, vi(e)), (e = gi(e));
        return r;
      }
      : cu;
  const du = xp;
  function qp(e, r) {
    return Zt(e, du(e), r);
  }
  function hu(e, r, t) {
    var n = r(e);
    return ze(e) ? n : yi(n, t(e));
  }
  function $i(e) {
    return hu(e, mi, vi);
  }
  function mu(e) {
    return hu(e, pi, du);
  }
  var Bp = Vr(ur, "DataView");
  const _i = Bp;
  var Vp = Vr(ur, "Promise");
  const bi = Vp;
  var Kp = Vr(ur, "Set");
  const ft = Kp;
  var zp = Vr(ur, "WeakMap");
  const Si = zp;
  var pu = "[object Map]",
    Gp = "[object Object]",
    vu = "[object Promise]",
    yu = "[object Set]",
    gu = "[object WeakMap]",
    $u = "[object DataView]",
    Wp = Br(_i),
    Hp = Br(Jt),
    Yp = Br(bi),
    Jp = Br(ft),
    Xp = Br(Si),
    zr = Pr;
  ((_i && zr(new _i(new ArrayBuffer(1))) != $u) ||
    (Jt && zr(new Jt()) != pu) ||
    (bi && zr(bi.resolve()) != vu) ||
    (ft && zr(new ft()) != yu) ||
    (Si && zr(new Si()) != gu)) &&
    (zr = function (e) {
      var r = Pr(e),
        t = r == Gp ? e.constructor : void 0,
        n = t ? Br(t) : "";
      if (n) {
        switch (n) {
          case Wp:
            return $u;
          case Hp:
            return pu;
          case Yp:
            return vu;
          case Jp:
            return yu;
          case Xp:
            return gu;
        }
      }
      return r;
    });
  const dt = zr;
  var Zp = Object.prototype,
    Qp = Zp.hasOwnProperty;
  function ev(e) {
    var r = e.length,
      t = new e.constructor(r);
    return (
      r &&
      typeof e[0] == "string" &&
      Qp.call(e, "index") &&
      ((t.index = e.index), (t.input = e.input)), t
    );
  }
  var rv = ur.Uint8Array;
  const Hn = rv;
  function Ei(e) {
    var r = new e.constructor(e.byteLength);
    return new Hn(r).set(new Hn(e)), r;
  }
  function tv(e, r) {
    var t = r ? Ei(e.buffer) : e.buffer;
    return new e.constructor(t, e.byteOffset, e.byteLength);
  }
  var nv = /\w*$/;
  function av(e) {
    var r = new e.constructor(e.source, nv.exec(e));
    return (r.lastIndex = e.lastIndex), r;
  }
  var _u = He ? He.prototype : void 0,
    bu = _u ? _u.valueOf : void 0;
  function iv(e) {
    return bu ? Object(bu.call(e)) : {};
  }
  function ov(e, r) {
    var t = r ? Ei(e.buffer) : e.buffer;
    return new e.constructor(t, e.byteOffset, e.length);
  }
  var sv = "[object Boolean]",
    uv = "[object Date]",
    lv = "[object Map]",
    cv = "[object Number]",
    fv = "[object RegExp]",
    dv = "[object Set]",
    hv = "[object String]",
    mv = "[object Symbol]",
    pv = "[object ArrayBuffer]",
    vv = "[object DataView]",
    yv = "[object Float32Array]",
    gv = "[object Float64Array]",
    $v = "[object Int8Array]",
    _v = "[object Int16Array]",
    bv = "[object Int32Array]",
    Sv = "[object Uint8Array]",
    Ev = "[object Uint8ClampedArray]",
    wv = "[object Uint16Array]",
    Ov = "[object Uint32Array]";
  function Av(e, r, t) {
    var n = e.constructor;
    switch (r) {
      case pv:
        return Ei(e);
      case sv:
      case uv:
        return new n(+e);
      case vv:
        return tv(e, t);
      case yv:
      case gv:
      case $v:
      case _v:
      case bv:
      case Sv:
      case Ev:
      case wv:
      case Ov:
        return ov(e, t);
      case lv:
        return new n();
      case cv:
      case hv:
        return new n(e);
      case fv:
        return av(e);
      case dv:
        return new n();
      case mv:
        return iv(e);
    }
  }
  var Su = Object.create,
    Tv = (function () {
      function e() {}
      return function (r) {
        if (!Fe(r)) return {};
        if (Su) return Su(r);
        e.prototype = r;
        var t = new e();
        return (e.prototype = void 0), t;
      };
    })();
  const Pv = Tv;
  function Cv(e) {
    return typeof e.constructor == "function" && !Gn(e) ? Pv(gi(e)) : {};
  }
  var Iv = "[object Map]";
  function Nv(e) {
    return rr(e) && dt(e) == Iv;
  }
  var Eu = ct && ct.isMap,
    Dv = Eu ? fi(Eu) : Nv;
  const Fv = Dv;
  var jv = "[object Set]";
  function Mv(e) {
    return rr(e) && dt(e) == jv;
  }
  var wu = ct && ct.isSet,
    Rv = wu ? fi(wu) : Mv;
  const Uv = Rv;
  var kv = 1,
    Lv = 2,
    xv = 4,
    Ou = "[object Arguments]",
    qv = "[object Array]",
    Bv = "[object Boolean]",
    Vv = "[object Date]",
    Kv = "[object Error]",
    Au = "[object Function]",
    zv = "[object GeneratorFunction]",
    Gv = "[object Map]",
    Wv = "[object Number]",
    Tu = "[object Object]",
    Hv = "[object RegExp]",
    Yv = "[object Set]",
    Jv = "[object String]",
    Xv = "[object Symbol]",
    Zv = "[object WeakMap]",
    Qv = "[object ArrayBuffer]",
    ey = "[object DataView]",
    ry = "[object Float32Array]",
    ty = "[object Float64Array]",
    ny = "[object Int8Array]",
    ay = "[object Int16Array]",
    iy = "[object Int32Array]",
    oy = "[object Uint8Array]",
    sy = "[object Uint8ClampedArray]",
    uy = "[object Uint16Array]",
    ly = "[object Uint32Array]",
    ye = {};
  (ye[Ou] =
    ye[qv] =
    ye[Qv] =
    ye[ey] =
    ye[Bv] =
    ye[Vv] =
    ye[ry] =
    ye[ty] =
    ye[ny] =
    ye[ay] =
    ye[iy] =
    ye[Gv] =
    ye[Wv] =
    ye[Tu] =
    ye[Hv] =
    ye[Yv] =
    ye[Jv] =
    ye[Xv] =
    ye[oy] =
    ye[sy] =
    ye[uy] =
    ye[ly] =
      !0), (ye[Kv] = ye[Au] = ye[Zv] = !1);
  function ht(e, r, t, n, a, i) {
    var o,
      s = r & kv,
      u = r & Lv,
      l = r & xv;
    if ((t && (o = a ? t(e, n, a, i) : t(e)), o !== void 0)) return o;
    if (!Fe(e)) return e;
    var c = ze(e);
    if (c) {
      if (((o = ev(e)), !s)) return ks(e, o);
    } else {
      var f = dt(e),
        h = f == Au || f == zv;
      if (Qt(e)) return Dp(e, s);
      if (f == Tu || f == Ou || (h && !a)) {
        if (((o = u || h ? {} : Cv(e)), !s)) {
          return u ? qp(e, Ip(o, e)) : Up(e, Op(o, e));
        }
      } else {
        if (!ye[f]) return a ? e : {};
        o = Av(e, f, s);
      }
    }
    i || (i = new Er());
    var m = i.get(e);
    if (m) return m;
    i.set(e, o),
      Uv(e)
        ? e.forEach(function (d) {
          o.add(ht(d, r, t, d, e, i));
        })
        : Fv(e) &&
          e.forEach(function (d, p) {
            o.set(p, ht(d, r, t, p, e, i));
          });
    var v = l ? (u ? mu : $i) : u ? pi : mi,
      y = c ? void 0 : v(e);
    return (
      Pm(y || e, function (d, p) {
        y && ((p = d), (d = e[p])), ui(o, p, ht(d, r, t, p, e, i));
      }), o
    );
  }
  var cy = 4;
  function fy(e) {
    return ht(e, cy);
  }
  var dy = "__lodash_hash_undefined__";
  function hy(e) {
    return this.__data__.set(e, dy), this;
  }
  function my(e) {
    return this.__data__.has(e);
  }
  function rn(e) {
    var r = -1,
      t = e == null ? 0 : e.length;
    for (this.__data__ = new Sr(); ++r < t;) this.add(e[r]);
  }
  (rn.prototype.add = rn.prototype.push = hy), (rn.prototype.has = my);
  function py(e, r) {
    for (var t = -1, n = e == null ? 0 : e.length; ++t < n;) {
      if (r(e[t], t, e)) return !0;
    }
    return !1;
  }
  function Pu(e, r) {
    return e.has(r);
  }
  var vy = 1,
    yy = 2;
  function Cu(e, r, t, n, a, i) {
    var o = t & vy,
      s = e.length,
      u = r.length;
    if (s != u && !(o && u > s)) return !1;
    var l = i.get(e),
      c = i.get(r);
    if (l && c) return l == r && c == e;
    var f = -1,
      h = !0,
      m = t & yy ? new rn() : void 0;
    for (i.set(e, r), i.set(r, e); ++f < s;) {
      var v = e[f],
        y = r[f];
      if (n) var d = o ? n(y, v, f, r, e, i) : n(v, y, f, e, r, i);
      if (d !== void 0) {
        if (d) continue;
        h = !1;
        break;
      }
      if (m) {
        if (
          !py(r, function (p, $) {
            if (!Pu(m, $) && (v === p || a(v, p, t, n, i))) return m.push($);
          })
        ) {
          h = !1;
          break;
        }
      } else if (!(v === y || a(v, y, t, n, i))) {
        h = !1;
        break;
      }
    }
    return i.delete(e), i.delete(r), h;
  }
  function gy(e) {
    var r = -1,
      t = Array(e.size);
    return (
      e.forEach(function (n, a) {
        t[++r] = [a, n];
      }), t
    );
  }
  function wi(e) {
    var r = -1,
      t = Array(e.size);
    return (
      e.forEach(function (n) {
        t[++r] = n;
      }), t
    );
  }
  var $y = 1,
    _y = 2,
    by = "[object Boolean]",
    Sy = "[object Date]",
    Ey = "[object Error]",
    wy = "[object Map]",
    Oy = "[object Number]",
    Ay = "[object RegExp]",
    Ty = "[object Set]",
    Py = "[object String]",
    Cy = "[object Symbol]",
    Iy = "[object ArrayBuffer]",
    Ny = "[object DataView]",
    Iu = He ? He.prototype : void 0,
    Oi = Iu ? Iu.valueOf : void 0;
  function Dy(e, r, t, n, a, i, o) {
    switch (t) {
      case Ny:
        if (e.byteLength != r.byteLength || e.byteOffset != r.byteOffset) {
          return !1;
        }
        (e = e.buffer), (r = r.buffer);
      case Iy:
        return !(e.byteLength != r.byteLength || !i(new Hn(e), new Hn(r)));
      case by:
      case Sy:
      case Oy:
        return oi(+e, +r);
      case Ey:
        return e.name == r.name && e.message == r.message;
      case Ay:
      case Py:
        return e == r + "";
      case wy:
        var s = gy;
      case Ty:
        var u = n & $y;
        if ((s || (s = wi), e.size != r.size && !u)) return !1;
        var l = o.get(e);
        if (l) return l == r;
        (n |= _y), o.set(e, r);
        var c = Cu(s(e), s(r), n, a, i, o);
        return o.delete(e), c;
      case Cy:
        if (Oi) return Oi.call(e) == Oi.call(r);
    }
    return !1;
  }
  var Fy = 1,
    jy = Object.prototype,
    My = jy.hasOwnProperty;
  function Ry(e, r, t, n, a, i) {
    var o = t & Fy,
      s = $i(e),
      u = s.length,
      l = $i(r),
      c = l.length;
    if (u != c && !o) return !1;
    for (var f = u; f--;) {
      var h = s[f];
      if (!(o ? h in r : My.call(r, h))) return !1;
    }
    var m = i.get(e),
      v = i.get(r);
    if (m && v) return m == r && v == e;
    var y = !0;
    i.set(e, r), i.set(r, e);
    for (var d = o; ++f < u;) {
      h = s[f];
      var p = e[h],
        $ = r[h];
      if (n) var b = o ? n($, p, h, r, e, i) : n(p, $, h, e, r, i);
      if (!(b === void 0 ? p === $ || a(p, $, t, n, i) : b)) {
        y = !1;
        break;
      }
      d || (d = h == "constructor");
    }
    if (y && !d) {
      var w = e.constructor,
        N = r.constructor;
      w != N &&
        "constructor" in e &&
        "constructor" in r &&
        !(
          typeof w == "function" &&
          w instanceof w &&
          typeof N == "function" &&
          N instanceof N
        ) &&
        (y = !1);
    }
    return i.delete(e), i.delete(r), y;
  }
  var Uy = 1,
    Nu = "[object Arguments]",
    Du = "[object Array]",
    Yn = "[object Object]",
    ky = Object.prototype,
    Fu = ky.hasOwnProperty;
  function Ly(e, r, t, n, a, i) {
    var o = ze(e),
      s = ze(r),
      u = o ? Du : dt(e),
      l = s ? Du : dt(r);
    (u = u == Nu ? Yn : u), (l = l == Nu ? Yn : l);
    var c = u == Yn,
      f = l == Yn,
      h = u == l;
    if (h && Qt(e)) {
      if (!Qt(r)) return !1;
      (o = !0), (c = !1);
    }
    if (h && !c) {
      return (
        i || (i = new Er()),
          o || hi(e) ? Cu(e, r, t, n, a, i) : Dy(e, r, u, t, n, a, i)
      );
    }
    if (!(t & Uy)) {
      var m = c && Fu.call(e, "__wrapped__"),
        v = f && Fu.call(r, "__wrapped__");
      if (m || v) {
        var y = m ? e.value() : e,
          d = v ? r.value() : r;
        return i || (i = new Er()), a(y, d, t, n, i);
      }
    }
    return h ? (i || (i = new Er()), Ry(e, r, t, n, a, i)) : !1;
  }
  function ju(e, r, t, n, a) {
    return e === r
      ? !0
      : e == null || r == null || (!rr(e) && !rr(r))
      ? e !== e && r !== r
      : Ly(e, r, t, n, ju, a);
  }
  function xy(e, r, t) {
    t = typeof t == "function" ? t : void 0;
    var n = t ? t(e, r) : void 0;
    return n === void 0 ? ju(e, r, void 0, t) : !!n;
  }
  var qy = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    By = /^\w*$/;
  function Vy(e, r) {
    if (ze(e)) return !1;
    var t = typeof e;
    return t == "number" ||
        t == "symbol" ||
        t == "boolean" ||
        e == null ||
        qn(e)
      ? !0
      : By.test(e) || !qy.test(e) || (r != null && e in Object(r));
  }
  function mt(e, r) {
    return ze(e) ? e : Vy(e, r) ? [e] : Ks(Hs(e));
  }
  function Ai(e, r) {
    r = mt(r, e);
    for (var t = 0, n = r.length; e != null && t < n;) e = e[Xt(r[t++])];
    return t && t == n ? e : void 0;
  }
  function fe(e, r, t) {
    var n = e == null ? void 0 : Ai(e, r);
    return n === void 0 ? t : n;
  }
  var Ky = "[object Map]",
    zy = "[object Set]",
    Gy = Object.prototype,
    Wy = Gy.hasOwnProperty;
  function tn(e) {
    if (e == null) return !0;
    if (
      Wn(e) &&
      (ze(e) ||
        typeof e == "string" ||
        typeof e.splice == "function" ||
        Qt(e) ||
        hi(e) ||
        zn(e))
    ) {
      return !e.length;
    }
    var r = dt(e);
    if (r == Ky || r == zy) return !e.size;
    if (Gn(e)) return !iu(e).length;
    for (var t in e) if (Wy.call(e, t)) return !1;
    return !0;
  }
  var nn = typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
  function Ti(e) {
    return e &&
        e.__esModule &&
        Object.prototype.hasOwnProperty.call(e, "default")
      ? e.default
      : e;
  }
  var Jn = {},
    Hy = /~/,
    Yy = /~[01]/g;
  function Jy(e) {
    switch (e) {
      case "~1":
        return "/";
      case "~0":
        return "~";
    }
    throw new Error("Invalid tilde escape: " + e);
  }
  function Mu(e) {
    return Hy.test(e) ? e.replace(Yy, Jy) : e;
  }
  function Xy(e, r, t) {
    for (var n, a, i = 1, o = r.length; i < o;) {
      if (
        r[i] === "constructor" ||
        r[i] === "prototype" ||
        r[i] === "__proto__"
      ) {
        return e;
      }
      if (
        ((n = Mu(r[i++])),
          (a = o > i),
          typeof e[n] > "u" &&
          (Array.isArray(e) && n === "-" && (n = e.length),
            a &&
            ((r[i] !== "" && r[i] < 1 / 0) || r[i] === "-"
              ? (e[n] = [])
              : (e[n] = {}))),
          !a)
      ) {
        break;
      }
      e = e[n];
    }
    var s = e[n];
    return t === void 0 ? delete e[n] : (e[n] = t), s;
  }
  function Pi(e) {
    if (typeof e == "string") {
      if (((e = e.split("/")), e[0] === "")) return e;
      throw new Error("Invalid JSON pointer.");
    } else if (Array.isArray(e)) {
      for (const r of e) {
        if (typeof r != "string" && typeof r != "number") {
          throw new Error(
            "Invalid JSON pointer. Must be of type string or number.",
          );
        }
      }
      return e;
    }
    throw new Error("Invalid JSON pointer.");
  }
  function Ru(e, r) {
    if (typeof e != "object") throw new Error("Invalid input object.");
    r = Pi(r);
    var t = r.length;
    if (t === 1) return e;
    for (var n = 1; n < t;) {
      if (((e = e[Mu(r[n++])]), t === n)) return e;
      if (typeof e != "object" || e === null) return;
    }
  }
  function Uu(e, r, t) {
    if (typeof e != "object") throw new Error("Invalid input object.");
    if (((r = Pi(r)), r.length === 0)) {
      throw new Error("Invalid JSON pointer for set.");
    }
    return Xy(e, r, t);
  }
  function Zy(e) {
    var r = Pi(e);
    return {
      get: function (t) {
        return Ru(t, r);
      },
      set: function (t, n) {
        return Uu(t, r, n);
      },
    };
  }
  (Jn.get = Ru), (Jn.set = Uu), (Jn.compile = Zy);
  function Qy(e) {
    var r = e == null ? 0 : e.length;
    return r ? e[r - 1] : void 0;
  }
  function eg(e, r, t) {
    var n = -1,
      a = e.length;
    r < 0 && (r = -r > a ? 0 : a + r),
      (t = t > a ? a : t),
      t < 0 && (t += a),
      (a = r > t ? 0 : (t - r) >>> 0),
      (r >>>= 0);
    for (var i = Array(a); ++n < a;) i[n] = e[n + r];
    return i;
  }
  function rg(e, r) {
    return r.length < 2 ? e : Ai(e, eg(r, 0, -1));
  }
  function ku(e, r) {
    return (r = mt(r, e)), (e = rg(e, r)), e == null || delete e[Xt(Qy(r))];
  }
  var tg = "[object Object]",
    ng = Function.prototype,
    ag = Object.prototype,
    Lu = ng.toString,
    ig = ag.hasOwnProperty,
    og = Lu.call(Object);
  function sg(e) {
    if (!rr(e) || Pr(e) != tg) return !1;
    var r = gi(e);
    if (r === null) return !0;
    var t = ig.call(r, "constructor") && r.constructor;
    return typeof t == "function" && t instanceof t && Lu.call(t) == og;
  }
  function ug(e) {
    return sg(e) ? void 0 : e;
  }
  var xu = He ? He.isConcatSpreadable : void 0;
  function lg(e) {
    return ze(e) || zn(e) || !!(xu && e && e[xu]);
  }
  function Ci(e, r, t, n, a) {
    var i = -1,
      o = e.length;
    for (t || (t = lg), a || (a = []); ++i < o;) {
      var s = e[i];
      r > 0 && t(s)
        ? r > 1 ? Ci(s, r - 1, t, n, a) : yi(a, s)
        : n || (a[a.length] = s);
    }
    return a;
  }
  function cg(e) {
    var r = e == null ? 0 : e.length;
    return r ? Ci(e, 1) : [];
  }
  function fg(e, r, t) {
    switch (t.length) {
      case 0:
        return e.call(r);
      case 1:
        return e.call(r, t[0]);
      case 2:
        return e.call(r, t[0], t[1]);
      case 3:
        return e.call(r, t[0], t[1], t[2]);
    }
    return e.apply(r, t);
  }
  var qu = Math.max;
  function Bu(e, r, t) {
    return (
      (r = qu(r === void 0 ? e.length - 1 : r, 0)), function () {
        for (
          var n = arguments, a = -1, i = qu(n.length - r, 0), o = Array(i);
          ++a < i;
        ) {
          o[a] = n[r + a];
        }
        a = -1;
        for (var s = Array(r + 1); ++a < r;) s[a] = n[a];
        return (s[r] = t(o)), fg(e, this, s);
      }
    );
  }
  function dg(e) {
    return function () {
      return e;
    };
  }
  function Vu(e) {
    return e;
  }
  var hg = Kn
    ? function (e, r) {
      return Kn(e, "toString", {
        configurable: !0,
        enumerable: !1,
        value: dg(r),
        writable: !0,
      });
    }
    : Vu;
  const mg = hg;
  var pg = 800,
    vg = 16,
    yg = Date.now;
  function gg(e) {
    var r = 0,
      t = 0;
    return function () {
      var n = yg(),
        a = vg - (n - t);
      if (((t = n), a > 0)) {
        if (++r >= pg) return arguments[0];
      } else r = 0;
      return e.apply(void 0, arguments);
    };
  }
  var $g = gg(mg);
  const Ku = $g;
  function zu(e) {
    return Ku(Bu(e, void 0, cg), e + "");
  }
  var _g = 1,
    bg = 2,
    Sg = 4,
    Eg = zu(function (e, r) {
      var t = {};
      if (e == null) return t;
      var n = !1;
      (r = qr(r, function (i) {
        return (i = mt(i, e)), n || (n = i.length > 1), i;
      })),
        Zt(e, mu(e), t),
        n && (t = ht(t, _g | bg | Sg, ug));
      for (var a = r.length; a--;) ku(t, r[a]);
      return t;
    });
  const Ii = Eg;
  function Gu(e, r, t, n) {
    if (!Fe(e)) return e;
    r = mt(r, e);
    for (var a = -1, i = r.length, o = i - 1, s = e; s != null && ++a < i;) {
      var u = Xt(r[a]),
        l = t;
      if (u === "__proto__" || u === "constructor" || u === "prototype") {
        return e;
      }
      if (a != o) {
        var c = s[u];
        (l = n ? n(c, u, s) : void 0),
          l === void 0 && (l = Fe(c) ? c : li(r[a + 1]) ? [] : {});
      }
      ui(s, u, l), (s = s[u]);
    }
    return e;
  }
  function Ye(e, r, t) {
    return e == null ? e : Gu(e, r, t);
  }
  function wg() {
    (this.__data__ = []), (this.size = 0);
  }
  var Og = wg;
  function Ag(e, r) {
    return e === r || (e !== e && r !== r);
  }
  var pt = Ag,
    Tg = pt;
  function Pg(e, r) {
    for (var t = e.length; t--;) if (Tg(e[t][0], r)) return t;
    return -1;
  }
  var Xn = Pg,
    Cg = Xn,
    Ig = Array.prototype,
    Ng = Ig.splice;
  function Dg(e) {
    var r = this.__data__,
      t = Cg(r, e);
    if (t < 0) return !1;
    var n = r.length - 1;
    return t == n ? r.pop() : Ng.call(r, t, 1), --this.size, !0;
  }
  var Fg = Dg,
    jg = Xn;
  function Mg(e) {
    var r = this.__data__,
      t = jg(r, e);
    return t < 0 ? void 0 : r[t][1];
  }
  var Rg = Mg,
    Ug = Xn;
  function kg(e) {
    return Ug(this.__data__, e) > -1;
  }
  var Lg = kg,
    xg = Xn;
  function qg(e, r) {
    var t = this.__data__,
      n = xg(t, e);
    return n < 0 ? (++this.size, t.push([e, r])) : (t[n][1] = r), this;
  }
  var Bg = qg,
    Vg = Og,
    Kg = Fg,
    zg = Rg,
    Gg = Lg,
    Wg = Bg;
  function vt(e) {
    var r = -1,
      t = e == null ? 0 : e.length;
    for (this.clear(); ++r < t;) {
      var n = e[r];
      this.set(n[0], n[1]);
    }
  }
  (vt.prototype.clear = Vg),
    (vt.prototype.delete = Kg),
    (vt.prototype.get = zg),
    (vt.prototype.has = Gg),
    (vt.prototype.set = Wg);
  var Zn = vt,
    Hg = Zn;
  function Yg() {
    (this.__data__ = new Hg()), (this.size = 0);
  }
  var Jg = Yg;
  function Xg(e) {
    var r = this.__data__,
      t = r.delete(e);
    return (this.size = r.size), t;
  }
  var Zg = Xg;
  function Qg(e) {
    return this.__data__.get(e);
  }
  var e$ = Qg;
  function r$(e) {
    return this.__data__.has(e);
  }
  var t$ = r$,
    n$ = typeof nn == "object" && nn && nn.Object === Object && nn,
    Wu = n$,
    a$ = Wu,
    i$ = typeof self == "object" && self && self.Object === Object && self,
    o$ = a$ || i$ || Function("return this")(),
    lr = o$,
    s$ = lr,
    u$ = s$.Symbol,
    yt = u$,
    Hu = yt,
    Yu = Object.prototype,
    l$ = Yu.hasOwnProperty,
    c$ = Yu.toString,
    an = Hu ? Hu.toStringTag : void 0;
  function f$(e) {
    var r = l$.call(e, an),
      t = e[an];
    try {
      e[an] = void 0;
      var n = !0;
    } catch {}
    var a = c$.call(e);
    return n && (r ? (e[an] = t) : delete e[an]), a;
  }
  var d$ = f$,
    h$ = Object.prototype,
    m$ = h$.toString;
  function p$(e) {
    return m$.call(e);
  }
  var v$ = p$,
    Ju = yt,
    y$ = d$,
    g$ = v$,
    $$ = "[object Null]",
    _$ = "[object Undefined]",
    Xu = Ju ? Ju.toStringTag : void 0;
  function b$(e) {
    return e == null
      ? e === void 0 ? _$ : $$
      : Xu && Xu in Object(e)
      ? y$(e)
      : g$(e);
  }
  var Gr = b$;
  function S$(e) {
    var r = typeof e;
    return e != null && (r == "object" || r == "function");
  }
  var cr = S$,
    E$ = Gr,
    w$ = cr,
    O$ = "[object AsyncFunction]",
    A$ = "[object Function]",
    T$ = "[object GeneratorFunction]",
    P$ = "[object Proxy]";
  function C$(e) {
    if (!w$(e)) return !1;
    var r = E$(e);
    return r == A$ || r == T$ || r == O$ || r == P$;
  }
  var Ni = C$,
    I$ = lr,
    N$ = I$["__core-js_shared__"],
    D$ = N$,
    Di = D$,
    Zu = (function () {
      var e = /[^.]+$/.exec((Di && Di.keys && Di.keys.IE_PROTO) || "");
      return e ? "Symbol(src)_1." + e : "";
    })();
  function F$(e) {
    return !!Zu && Zu in e;
  }
  var j$ = F$,
    M$ = Function.prototype,
    R$ = M$.toString;
  function U$(e) {
    if (e != null) {
      try {
        return R$.call(e);
      } catch {}
      try {
        return e + "";
      } catch {}
    }
    return "";
  }
  var Qu = U$,
    k$ = Ni,
    L$ = j$,
    x$ = cr,
    q$ = Qu,
    B$ = /[\\^$.*+?()[\]{}|]/g,
    V$ = /^\[object .+?Constructor\]$/,
    K$ = Function.prototype,
    z$ = Object.prototype,
    G$ = K$.toString,
    W$ = z$.hasOwnProperty,
    H$ = RegExp(
      "^" +
        G$.call(W$)
          .replace(B$, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?",
          ) +
        "$",
    );
  function Y$(e) {
    if (!x$(e) || L$(e)) return !1;
    var r = k$(e) ? H$ : V$;
    return r.test(q$(e));
  }
  var J$ = Y$;
  function X$(e, r) {
    return e == null ? void 0 : e[r];
  }
  var Z$ = X$,
    Q$ = J$,
    e_ = Z$;
  function r_(e, r) {
    var t = e_(e, r);
    return Q$(t) ? t : void 0;
  }
  var Wr = r_,
    t_ = Wr,
    n_ = lr,
    a_ = t_(n_, "Map"),
    Fi = a_,
    i_ = Wr,
    o_ = i_(Object, "create"),
    Qn = o_,
    el = Qn;
  function s_() {
    (this.__data__ = el ? el(null) : {}), (this.size = 0);
  }
  var u_ = s_;
  function l_(e) {
    var r = this.has(e) && delete this.__data__[e];
    return (this.size -= r ? 1 : 0), r;
  }
  var c_ = l_,
    f_ = Qn,
    d_ = "__lodash_hash_undefined__",
    h_ = Object.prototype,
    m_ = h_.hasOwnProperty;
  function p_(e) {
    var r = this.__data__;
    if (f_) {
      var t = r[e];
      return t === d_ ? void 0 : t;
    }
    return m_.call(r, e) ? r[e] : void 0;
  }
  var v_ = p_,
    y_ = Qn,
    g_ = Object.prototype,
    $_ = g_.hasOwnProperty;
  function __(e) {
    var r = this.__data__;
    return y_ ? r[e] !== void 0 : $_.call(r, e);
  }
  var b_ = __,
    S_ = Qn,
    E_ = "__lodash_hash_undefined__";
  function w_(e, r) {
    var t = this.__data__;
    return (
      (this.size += this.has(e) ? 0 : 1),
        (t[e] = S_ && r === void 0 ? E_ : r),
        this
    );
  }
  var O_ = w_,
    A_ = u_,
    T_ = c_,
    P_ = v_,
    C_ = b_,
    I_ = O_;
  function gt(e) {
    var r = -1,
      t = e == null ? 0 : e.length;
    for (this.clear(); ++r < t;) {
      var n = e[r];
      this.set(n[0], n[1]);
    }
  }
  (gt.prototype.clear = A_),
    (gt.prototype.delete = T_),
    (gt.prototype.get = P_),
    (gt.prototype.has = C_),
    (gt.prototype.set = I_);
  var N_ = gt,
    rl = N_,
    D_ = Zn,
    F_ = Fi;
  function j_() {
    (this.size = 0),
      (this.__data__ = {
        hash: new rl(),
        map: new (F_ || D_)(),
        string: new rl(),
      });
  }
  var M_ = j_;
  function R_(e) {
    var r = typeof e;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean"
      ? e !== "__proto__"
      : e === null;
  }
  var U_ = R_,
    k_ = U_;
  function L_(e, r) {
    var t = e.__data__;
    return k_(r) ? t[typeof r == "string" ? "string" : "hash"] : t.map;
  }
  var ea = L_,
    x_ = ea;
  function q_(e) {
    var r = x_(this, e).delete(e);
    return (this.size -= r ? 1 : 0), r;
  }
  var B_ = q_,
    V_ = ea;
  function K_(e) {
    return V_(this, e).get(e);
  }
  var z_ = K_,
    G_ = ea;
  function W_(e) {
    return G_(this, e).has(e);
  }
  var H_ = W_,
    Y_ = ea;
  function J_(e, r) {
    var t = Y_(this, e),
      n = t.size;
    return t.set(e, r), (this.size += t.size == n ? 0 : 1), this;
  }
  var X_ = J_,
    Z_ = M_,
    Q_ = B_,
    e0 = z_,
    r0 = H_,
    t0 = X_;
  function $t(e) {
    var r = -1,
      t = e == null ? 0 : e.length;
    for (this.clear(); ++r < t;) {
      var n = e[r];
      this.set(n[0], n[1]);
    }
  }
  ($t.prototype.clear = Z_),
    ($t.prototype.delete = Q_),
    ($t.prototype.get = e0),
    ($t.prototype.has = r0),
    ($t.prototype.set = t0);
  var ji = $t,
    n0 = Zn,
    a0 = Fi,
    i0 = ji,
    o0 = 200;
  function s0(e, r) {
    var t = this.__data__;
    if (t instanceof n0) {
      var n = t.__data__;
      if (!a0 || n.length < o0 - 1) {
        return n.push([e, r]), (this.size = ++t.size), this;
      }
      t = this.__data__ = new i0(n);
    }
    return t.set(e, r), (this.size = t.size), this;
  }
  var u0 = s0,
    l0 = Zn,
    c0 = Jg,
    f0 = Zg,
    d0 = e$,
    h0 = t$,
    m0 = u0;
  function _t(e) {
    var r = (this.__data__ = new l0(e));
    this.size = r.size;
  }
  (_t.prototype.clear = c0),
    (_t.prototype.delete = f0),
    (_t.prototype.get = d0),
    (_t.prototype.has = h0),
    (_t.prototype.set = m0);
  var ra = _t;
  function p0(e, r) {
    for (
      var t = -1, n = e == null ? 0 : e.length;
      ++t < n && r(e[t], t, e) !== !1;
    );
    return e;
  }
  var tl = p0,
    v0 = Wr,
    y0 = (function () {
      try {
        var e = v0(Object, "defineProperty");
        return e({}, "", {}), e;
      } catch {}
    })(),
    nl = y0,
    al = nl;
  function g0(e, r, t) {
    r == "__proto__" && al
      ? al(e, r, { configurable: !0, enumerable: !0, value: t, writable: !0 })
      : (e[r] = t);
  }
  var Mi = g0,
    $0 = Mi,
    _0 = pt,
    b0 = Object.prototype,
    S0 = b0.hasOwnProperty;
  function E0(e, r, t) {
    var n = e[r];
    (!(S0.call(e, r) && _0(n, t)) || (t === void 0 && !(r in e))) &&
      $0(e, r, t);
  }
  var il = E0,
    w0 = il,
    O0 = Mi;
  function A0(e, r, t, n) {
    var a = !t;
    t || (t = {});
    for (var i = -1, o = r.length; ++i < o;) {
      var s = r[i],
        u = n ? n(t[s], e[s], s, t, e) : void 0;
      u === void 0 && (u = e[s]), a ? O0(t, s, u) : w0(t, s, u);
    }
    return t;
  }
  var on = A0;
  function T0(e, r) {
    for (var t = -1, n = Array(e); ++t < e;) n[t] = r(t);
    return n;
  }
  var P0 = T0;
  function C0(e) {
    return e != null && typeof e == "object";
  }
  var fr = C0,
    I0 = Gr,
    N0 = fr,
    D0 = "[object Arguments]";
  function F0(e) {
    return N0(e) && I0(e) == D0;
  }
  var j0 = F0,
    ol = j0,
    M0 = fr,
    sl = Object.prototype,
    R0 = sl.hasOwnProperty,
    U0 = sl.propertyIsEnumerable,
    k0 = ol(
        (function () {
          return arguments;
        })(),
      )
      ? ol
      : function (e) {
        return M0(e) && R0.call(e, "callee") && !U0.call(e, "callee");
      },
    ta = k0,
    L0 = Array.isArray,
    Ge = L0,
    Hr = {},
    x0 = {
      get exports() {
        return Hr;
      },
      set exports(e) {
        Hr = e;
      },
    };
  function q0() {
    return !1;
  }
  var B0 = q0;
  (function (e, r) {
    var t = lr,
      n = B0,
      a = r && !r.nodeType && r,
      i = a && !0 && e && !e.nodeType && e,
      o = i && i.exports === a,
      s = o ? t.Buffer : void 0,
      u = s ? s.isBuffer : void 0,
      l = u || n;
    e.exports = l;
  })(x0, Hr);
  var V0 = 9007199254740991,
    K0 = /^(?:0|[1-9]\d*)$/;
  function z0(e, r) {
    var t = typeof e;
    return (
      (r = r ?? V0),
        !!r &&
        (t == "number" || (t != "symbol" && K0.test(e))) &&
        e > -1 &&
        e % 1 == 0 &&
        e < r
    );
  }
  var Ri = z0,
    G0 = 9007199254740991;
  function W0(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= G0;
  }
  var Ui = W0,
    H0 = Gr,
    Y0 = Ui,
    J0 = fr,
    X0 = "[object Arguments]",
    Z0 = "[object Array]",
    Q0 = "[object Boolean]",
    eb = "[object Date]",
    rb = "[object Error]",
    tb = "[object Function]",
    nb = "[object Map]",
    ab = "[object Number]",
    ib = "[object Object]",
    ob = "[object RegExp]",
    sb = "[object Set]",
    ub = "[object String]",
    lb = "[object WeakMap]",
    cb = "[object ArrayBuffer]",
    fb = "[object DataView]",
    db = "[object Float32Array]",
    hb = "[object Float64Array]",
    mb = "[object Int8Array]",
    pb = "[object Int16Array]",
    vb = "[object Int32Array]",
    yb = "[object Uint8Array]",
    gb = "[object Uint8ClampedArray]",
    $b = "[object Uint16Array]",
    _b = "[object Uint32Array]",
    be = {};
  (be[db] =
    be[hb] =
    be[mb] =
    be[pb] =
    be[vb] =
    be[yb] =
    be[gb] =
    be[$b] =
    be[_b] =
      !0),
    (be[X0] =
      be[Z0] =
      be[cb] =
      be[Q0] =
      be[fb] =
      be[eb] =
      be[rb] =
      be[tb] =
      be[nb] =
      be[ab] =
      be[ib] =
      be[ob] =
      be[sb] =
      be[ub] =
      be[lb] =
        !1);
  function bb(e) {
    return J0(e) && Y0(e.length) && !!be[H0(e)];
  }
  var Sb = bb;
  function Eb(e) {
    return function (r) {
      return e(r);
    };
  }
  var Yr = Eb,
    bt = {},
    wb = {
      get exports() {
        return bt;
      },
      set exports(e) {
        bt = e;
      },
    };
  (function (e, r) {
    var t = Wu,
      n = r && !r.nodeType && r,
      a = n && !0 && e && !e.nodeType && e,
      i = a && a.exports === n,
      o = i && t.process,
      s = (function () {
        try {
          var u = a && a.require && a.require("util").types;
          return u || (o && o.binding && o.binding("util"));
        } catch {}
      })();
    e.exports = s;
  })(wb, bt);
  var Ob = Sb,
    Ab = Yr,
    ul = bt,
    ll = ul && ul.isTypedArray,
    Tb = ll ? Ab(ll) : Ob,
    ki = Tb,
    Pb = P0,
    Cb = ta,
    Ib = Ge,
    Nb = Hr,
    Db = Ri,
    Fb = ki,
    jb = Object.prototype,
    Mb = jb.hasOwnProperty;
  function Rb(e, r) {
    var t = Ib(e),
      n = !t && Cb(e),
      a = !t && !n && Nb(e),
      i = !t && !n && !a && Fb(e),
      o = t || n || a || i,
      s = o ? Pb(e.length, String) : [],
      u = s.length;
    for (var l in e) {
      (r || Mb.call(e, l)) &&
        !(
          o &&
          (l == "length" ||
            (a && (l == "offset" || l == "parent")) ||
            (i && (l == "buffer" || l == "byteLength" || l == "byteOffset")) ||
            Db(l, u))
        ) &&
        s.push(l);
    }
    return s;
  }
  var cl = Rb,
    Ub = Object.prototype;
  function kb(e) {
    var r = e && e.constructor,
      t = (typeof r == "function" && r.prototype) || Ub;
    return e === t;
  }
  var Li = kb;
  function Lb(e, r) {
    return function (t) {
      return e(r(t));
    };
  }
  var fl = Lb,
    xb = fl,
    qb = xb(Object.keys, Object),
    Bb = qb,
    Vb = Li,
    Kb = Bb,
    zb = Object.prototype,
    Gb = zb.hasOwnProperty;
  function Wb(e) {
    if (!Vb(e)) return Kb(e);
    var r = [];
    for (var t in Object(e)) Gb.call(e, t) && t != "constructor" && r.push(t);
    return r;
  }
  var Hb = Wb,
    Yb = Ni,
    Jb = Ui;
  function Xb(e) {
    return e != null && Jb(e.length) && !Yb(e);
  }
  var St = Xb,
    Zb = cl,
    Qb = Hb,
    eS = St;
  function rS(e) {
    return eS(e) ? Zb(e) : Qb(e);
  }
  var sn = rS,
    tS = on,
    nS = sn;
  function aS(e, r) {
    return e && tS(r, nS(r), e);
  }
  var iS = aS;
  function oS(e) {
    var r = [];
    if (e != null) for (var t in Object(e)) r.push(t);
    return r;
  }
  var sS = oS,
    uS = cr,
    lS = Li,
    cS = sS,
    fS = Object.prototype,
    dS = fS.hasOwnProperty;
  function hS(e) {
    if (!uS(e)) return cS(e);
    var r = lS(e),
      t = [];
    for (var n in e) (n == "constructor" && (r || !dS.call(e, n))) || t.push(n);
    return t;
  }
  var mS = hS,
    pS = cl,
    vS = mS,
    yS = St;
  function gS(e) {
    return yS(e) ? pS(e, !0) : vS(e);
  }
  var Et = gS,
    $S = on,
    _S = Et;
  function bS(e, r) {
    return e && $S(r, _S(r), e);
  }
  var SS = bS,
    un = {},
    ES = {
      get exports() {
        return un;
      },
      set exports(e) {
        un = e;
      },
    };
  (function (e, r) {
    var t = lr,
      n = r && !r.nodeType && r,
      a = n && !0 && e && !e.nodeType && e,
      i = a && a.exports === n,
      o = i ? t.Buffer : void 0,
      s = o ? o.allocUnsafe : void 0;
    function u(l, c) {
      if (c) return l.slice();
      var f = l.length,
        h = s ? s(f) : new l.constructor(f);
      return l.copy(h), h;
    }
    e.exports = u;
  })(ES, un);
  function wS(e, r) {
    var t = -1,
      n = e.length;
    for (r || (r = Array(n)); ++t < n;) r[t] = e[t];
    return r;
  }
  var xi = wS;
  function OS(e, r) {
    for (var t = -1, n = e == null ? 0 : e.length, a = 0, i = []; ++t < n;) {
      var o = e[t];
      r(o, t, e) && (i[a++] = o);
    }
    return i;
  }
  var AS = OS;
  function TS() {
    return [];
  }
  var dl = TS,
    PS = AS,
    CS = dl,
    IS = Object.prototype,
    NS = IS.propertyIsEnumerable,
    hl = Object.getOwnPropertySymbols,
    DS = hl
      ? function (e) {
        return e == null ? [] : ((e = Object(e)),
          PS(hl(e), function (r) {
            return NS.call(e, r);
          }));
      }
      : CS,
    qi = DS,
    FS = on,
    jS = qi;
  function MS(e, r) {
    return FS(e, jS(e), r);
  }
  var RS = MS;
  function US(e, r) {
    for (var t = -1, n = r.length, a = e.length; ++t < n;) e[a + t] = r[t];
    return e;
  }
  var Bi = US,
    kS = fl,
    LS = kS(Object.getPrototypeOf, Object),
    Vi = LS,
    xS = Bi,
    qS = Vi,
    BS = qi,
    VS = dl,
    KS = Object.getOwnPropertySymbols,
    zS = KS
      ? function (e) {
        for (var r = []; e;) xS(r, BS(e)), (e = qS(e));
        return r;
      }
      : VS,
    ml = zS,
    GS = on,
    WS = ml;
  function HS(e, r) {
    return GS(e, WS(e), r);
  }
  var YS = HS,
    JS = Bi,
    XS = Ge;
  function ZS(e, r, t) {
    var n = r(e);
    return XS(e) ? n : JS(n, t(e));
  }
  var pl = ZS,
    QS = pl,
    e1 = qi,
    r1 = sn;
  function t1(e) {
    return QS(e, r1, e1);
  }
  var vl = t1,
    n1 = pl,
    a1 = ml,
    i1 = Et;
  function o1(e) {
    return n1(e, i1, a1);
  }
  var s1 = o1,
    u1 = Wr,
    l1 = lr,
    c1 = u1(l1, "DataView"),
    f1 = c1,
    d1 = Wr,
    h1 = lr,
    m1 = d1(h1, "Promise"),
    p1 = m1,
    v1 = Wr,
    y1 = lr,
    g1 = v1(y1, "Set"),
    yl = g1,
    $1 = Wr,
    _1 = lr,
    b1 = $1(_1, "WeakMap"),
    S1 = b1,
    Ki = f1,
    zi = Fi,
    Gi = p1,
    Wi = yl,
    Hi = S1,
    gl = Gr,
    wt = Qu,
    $l = "[object Map]",
    E1 = "[object Object]",
    _l = "[object Promise]",
    bl = "[object Set]",
    Sl = "[object WeakMap]",
    El = "[object DataView]",
    w1 = wt(Ki),
    O1 = wt(zi),
    A1 = wt(Gi),
    T1 = wt(Wi),
    P1 = wt(Hi),
    Jr = gl;
  ((Ki && Jr(new Ki(new ArrayBuffer(1))) != El) ||
    (zi && Jr(new zi()) != $l) ||
    (Gi && Jr(Gi.resolve()) != _l) ||
    (Wi && Jr(new Wi()) != bl) ||
    (Hi && Jr(new Hi()) != Sl)) &&
    (Jr = function (e) {
      var r = gl(e),
        t = r == E1 ? e.constructor : void 0,
        n = t ? wt(t) : "";
      if (n) {
        switch (n) {
          case w1:
            return El;
          case O1:
            return $l;
          case A1:
            return _l;
          case T1:
            return bl;
          case P1:
            return Sl;
        }
      }
      return r;
    });
  var na = Jr,
    C1 = Object.prototype,
    I1 = C1.hasOwnProperty;
  function N1(e) {
    var r = e.length,
      t = new e.constructor(r);
    return (
      r &&
      typeof e[0] == "string" &&
      I1.call(e, "index") &&
      ((t.index = e.index), (t.input = e.input)), t
    );
  }
  var D1 = N1,
    F1 = lr,
    j1 = F1.Uint8Array,
    wl = j1,
    Ol = wl;
  function M1(e) {
    var r = new e.constructor(e.byteLength);
    return new Ol(r).set(new Ol(e)), r;
  }
  var Yi = M1,
    R1 = Yi;
  function U1(e, r) {
    var t = r ? R1(e.buffer) : e.buffer;
    return new e.constructor(t, e.byteOffset, e.byteLength);
  }
  var k1 = U1,
    L1 = /\w*$/;
  function x1(e) {
    var r = new e.constructor(e.source, L1.exec(e));
    return (r.lastIndex = e.lastIndex), r;
  }
  var q1 = x1,
    Al = yt,
    Tl = Al ? Al.prototype : void 0,
    Pl = Tl ? Tl.valueOf : void 0;
  function B1(e) {
    return Pl ? Object(Pl.call(e)) : {};
  }
  var V1 = B1,
    K1 = Yi;
  function z1(e, r) {
    var t = r ? K1(e.buffer) : e.buffer;
    return new e.constructor(t, e.byteOffset, e.length);
  }
  var Cl = z1,
    G1 = Yi,
    W1 = k1,
    H1 = q1,
    Y1 = V1,
    J1 = Cl,
    X1 = "[object Boolean]",
    Z1 = "[object Date]",
    Q1 = "[object Map]",
    eE = "[object Number]",
    rE = "[object RegExp]",
    tE = "[object Set]",
    nE = "[object String]",
    aE = "[object Symbol]",
    iE = "[object ArrayBuffer]",
    oE = "[object DataView]",
    sE = "[object Float32Array]",
    uE = "[object Float64Array]",
    lE = "[object Int8Array]",
    cE = "[object Int16Array]",
    fE = "[object Int32Array]",
    dE = "[object Uint8Array]",
    hE = "[object Uint8ClampedArray]",
    mE = "[object Uint16Array]",
    pE = "[object Uint32Array]";
  function vE(e, r, t) {
    var n = e.constructor;
    switch (r) {
      case iE:
        return G1(e);
      case X1:
      case Z1:
        return new n(+e);
      case oE:
        return W1(e, t);
      case sE:
      case uE:
      case lE:
      case cE:
      case fE:
      case dE:
      case hE:
      case mE:
      case pE:
        return J1(e, t);
      case Q1:
        return new n();
      case eE:
      case nE:
        return new n(e);
      case rE:
        return H1(e);
      case tE:
        return new n();
      case aE:
        return Y1(e);
    }
  }
  var yE = vE,
    gE = cr,
    Il = Object.create,
    $E = (function () {
      function e() {}
      return function (r) {
        if (!gE(r)) return {};
        if (Il) return Il(r);
        e.prototype = r;
        var t = new e();
        return (e.prototype = void 0), t;
      };
    })(),
    _E = $E,
    bE = _E,
    SE = Vi,
    EE = Li;
  function wE(e) {
    return typeof e.constructor == "function" && !EE(e) ? bE(SE(e)) : {};
  }
  var Nl = wE,
    OE = na,
    AE = fr,
    TE = "[object Map]";
  function PE(e) {
    return AE(e) && OE(e) == TE;
  }
  var CE = PE,
    IE = CE,
    NE = Yr,
    Dl = bt,
    Fl = Dl && Dl.isMap,
    DE = Fl ? NE(Fl) : IE,
    FE = DE,
    jE = na,
    ME = fr,
    RE = "[object Set]";
  function UE(e) {
    return ME(e) && jE(e) == RE;
  }
  var kE = UE,
    LE = kE,
    xE = Yr,
    jl = bt,
    Ml = jl && jl.isSet,
    qE = Ml ? xE(Ml) : LE,
    BE = qE,
    VE = ra,
    KE = tl,
    zE = il,
    GE = iS,
    WE = SS,
    HE = un,
    YE = xi,
    JE = RS,
    XE = YS,
    ZE = vl,
    QE = s1,
    ew = na,
    rw = D1,
    tw = yE,
    nw = Nl,
    aw = Ge,
    iw = Hr,
    ow = FE,
    sw = cr,
    uw = BE,
    lw = sn,
    cw = Et,
    fw = 1,
    dw = 2,
    hw = 4,
    Rl = "[object Arguments]",
    mw = "[object Array]",
    pw = "[object Boolean]",
    vw = "[object Date]",
    yw = "[object Error]",
    Ul = "[object Function]",
    gw = "[object GeneratorFunction]",
    $w = "[object Map]",
    _w = "[object Number]",
    kl = "[object Object]",
    bw = "[object RegExp]",
    Sw = "[object Set]",
    Ew = "[object String]",
    ww = "[object Symbol]",
    Ow = "[object WeakMap]",
    Aw = "[object ArrayBuffer]",
    Tw = "[object DataView]",
    Pw = "[object Float32Array]",
    Cw = "[object Float64Array]",
    Iw = "[object Int8Array]",
    Nw = "[object Int16Array]",
    Dw = "[object Int32Array]",
    Fw = "[object Uint8Array]",
    jw = "[object Uint8ClampedArray]",
    Mw = "[object Uint16Array]",
    Rw = "[object Uint32Array]",
    ge = {};
  (ge[Rl] =
    ge[mw] =
    ge[Aw] =
    ge[Tw] =
    ge[pw] =
    ge[vw] =
    ge[Pw] =
    ge[Cw] =
    ge[Iw] =
    ge[Nw] =
    ge[Dw] =
    ge[$w] =
    ge[_w] =
    ge[kl] =
    ge[bw] =
    ge[Sw] =
    ge[Ew] =
    ge[ww] =
    ge[Fw] =
    ge[jw] =
    ge[Mw] =
    ge[Rw] =
      !0), (ge[yw] = ge[Ul] = ge[Ow] = !1);
  function aa(e, r, t, n, a, i) {
    var o,
      s = r & fw,
      u = r & dw,
      l = r & hw;
    if ((t && (o = a ? t(e, n, a, i) : t(e)), o !== void 0)) return o;
    if (!sw(e)) return e;
    var c = aw(e);
    if (c) {
      if (((o = rw(e)), !s)) return YE(e, o);
    } else {
      var f = ew(e),
        h = f == Ul || f == gw;
      if (iw(e)) return HE(e, s);
      if (f == kl || f == Rl || (h && !a)) {
        if (((o = u || h ? {} : nw(e)), !s)) {
          return u ? XE(e, WE(o, e)) : JE(e, GE(o, e));
        }
      } else {
        if (!ge[f]) return a ? e : {};
        o = tw(e, f, s);
      }
    }
    i || (i = new VE());
    var m = i.get(e);
    if (m) return m;
    i.set(e, o),
      uw(e)
        ? e.forEach(function (d) {
          o.add(aa(d, r, t, d, e, i));
        })
        : ow(e) &&
          e.forEach(function (d, p) {
            o.set(p, aa(d, r, t, p, e, i));
          });
    var v = l ? (u ? QE : ZE) : u ? cw : lw,
      y = c ? void 0 : v(e);
    return (
      KE(y || e, function (d, p) {
        y && ((p = d), (d = e[p])), zE(o, p, aa(d, r, t, p, e, i));
      }), o
    );
  }
  var Uw = aa,
    kw = Uw,
    Lw = 1,
    xw = 4;
  function qw(e) {
    return kw(e, Lw | xw);
  }
  var Bw = qw,
    Vw = "__lodash_hash_undefined__";
  function Kw(e) {
    return this.__data__.set(e, Vw), this;
  }
  var zw = Kw;
  function Gw(e) {
    return this.__data__.has(e);
  }
  var Ww = Gw,
    Hw = ji,
    Yw = zw,
    Jw = Ww;
  function ia(e) {
    var r = -1,
      t = e == null ? 0 : e.length;
    for (this.__data__ = new Hw(); ++r < t;) this.add(e[r]);
  }
  (ia.prototype.add = ia.prototype.push = Yw), (ia.prototype.has = Jw);
  var oa = ia;
  function Xw(e, r) {
    for (var t = -1, n = e == null ? 0 : e.length; ++t < n;) {
      if (r(e[t], t, e)) return !0;
    }
    return !1;
  }
  var Zw = Xw;
  function Qw(e, r) {
    return e.has(r);
  }
  var sa = Qw,
    eO = oa,
    rO = Zw,
    tO = sa,
    nO = 1,
    aO = 2;
  function iO(e, r, t, n, a, i) {
    var o = t & nO,
      s = e.length,
      u = r.length;
    if (s != u && !(o && u > s)) return !1;
    var l = i.get(e),
      c = i.get(r);
    if (l && c) return l == r && c == e;
    var f = -1,
      h = !0,
      m = t & aO ? new eO() : void 0;
    for (i.set(e, r), i.set(r, e); ++f < s;) {
      var v = e[f],
        y = r[f];
      if (n) var d = o ? n(y, v, f, r, e, i) : n(v, y, f, e, r, i);
      if (d !== void 0) {
        if (d) continue;
        h = !1;
        break;
      }
      if (m) {
        if (
          !rO(r, function (p, $) {
            if (!tO(m, $) && (v === p || a(v, p, t, n, i))) return m.push($);
          })
        ) {
          h = !1;
          break;
        }
      } else if (!(v === y || a(v, y, t, n, i))) {
        h = !1;
        break;
      }
    }
    return i.delete(e), i.delete(r), h;
  }
  var Ll = iO;
  function oO(e) {
    var r = -1,
      t = Array(e.size);
    return (
      e.forEach(function (n, a) {
        t[++r] = [a, n];
      }), t
    );
  }
  var sO = oO;
  function uO(e) {
    var r = -1,
      t = Array(e.size);
    return (
      e.forEach(function (n) {
        t[++r] = n;
      }), t
    );
  }
  var Ji = uO,
    xl = yt,
    ql = wl,
    lO = pt,
    cO = Ll,
    fO = sO,
    dO = Ji,
    hO = 1,
    mO = 2,
    pO = "[object Boolean]",
    vO = "[object Date]",
    yO = "[object Error]",
    gO = "[object Map]",
    $O = "[object Number]",
    _O = "[object RegExp]",
    bO = "[object Set]",
    SO = "[object String]",
    EO = "[object Symbol]",
    wO = "[object ArrayBuffer]",
    OO = "[object DataView]",
    Bl = xl ? xl.prototype : void 0,
    Xi = Bl ? Bl.valueOf : void 0;
  function AO(e, r, t, n, a, i, o) {
    switch (t) {
      case OO:
        if (e.byteLength != r.byteLength || e.byteOffset != r.byteOffset) {
          return !1;
        }
        (e = e.buffer), (r = r.buffer);
      case wO:
        return !(e.byteLength != r.byteLength || !i(new ql(e), new ql(r)));
      case pO:
      case vO:
      case $O:
        return lO(+e, +r);
      case yO:
        return e.name == r.name && e.message == r.message;
      case _O:
      case SO:
        return e == r + "";
      case gO:
        var s = fO;
      case bO:
        var u = n & hO;
        if ((s || (s = dO), e.size != r.size && !u)) return !1;
        var l = o.get(e);
        if (l) return l == r;
        (n |= mO), o.set(e, r);
        var c = cO(s(e), s(r), n, a, i, o);
        return o.delete(e), c;
      case EO:
        if (Xi) return Xi.call(e) == Xi.call(r);
    }
    return !1;
  }
  var TO = AO,
    Vl = vl,
    PO = 1,
    CO = Object.prototype,
    IO = CO.hasOwnProperty;
  function NO(e, r, t, n, a, i) {
    var o = t & PO,
      s = Vl(e),
      u = s.length,
      l = Vl(r),
      c = l.length;
    if (u != c && !o) return !1;
    for (var f = u; f--;) {
      var h = s[f];
      if (!(o ? h in r : IO.call(r, h))) return !1;
    }
    var m = i.get(e),
      v = i.get(r);
    if (m && v) return m == r && v == e;
    var y = !0;
    i.set(e, r), i.set(r, e);
    for (var d = o; ++f < u;) {
      h = s[f];
      var p = e[h],
        $ = r[h];
      if (n) var b = o ? n($, p, h, r, e, i) : n(p, $, h, e, r, i);
      if (!(b === void 0 ? p === $ || a(p, $, t, n, i) : b)) {
        y = !1;
        break;
      }
      d || (d = h == "constructor");
    }
    if (y && !d) {
      var w = e.constructor,
        N = r.constructor;
      w != N &&
        "constructor" in e &&
        "constructor" in r &&
        !(
          typeof w == "function" &&
          w instanceof w &&
          typeof N == "function" &&
          N instanceof N
        ) &&
        (y = !1);
    }
    return i.delete(e), i.delete(r), y;
  }
  var DO = NO,
    Zi = ra,
    FO = Ll,
    jO = TO,
    MO = DO,
    Kl = na,
    zl = Ge,
    Gl = Hr,
    RO = ki,
    UO = 1,
    Wl = "[object Arguments]",
    Hl = "[object Array]",
    ua = "[object Object]",
    kO = Object.prototype,
    Yl = kO.hasOwnProperty;
  function LO(e, r, t, n, a, i) {
    var o = zl(e),
      s = zl(r),
      u = o ? Hl : Kl(e),
      l = s ? Hl : Kl(r);
    (u = u == Wl ? ua : u), (l = l == Wl ? ua : l);
    var c = u == ua,
      f = l == ua,
      h = u == l;
    if (h && Gl(e)) {
      if (!Gl(r)) return !1;
      (o = !0), (c = !1);
    }
    if (h && !c) {
      return (
        i || (i = new Zi()),
          o || RO(e) ? FO(e, r, t, n, a, i) : jO(e, r, u, t, n, a, i)
      );
    }
    if (!(t & UO)) {
      var m = c && Yl.call(e, "__wrapped__"),
        v = f && Yl.call(r, "__wrapped__");
      if (m || v) {
        var y = m ? e.value() : e,
          d = v ? r.value() : r;
        return i || (i = new Zi()), a(y, d, t, n, i);
      }
    }
    return h ? (i || (i = new Zi()), MO(e, r, t, n, a, i)) : !1;
  }
  var xO = LO,
    qO = xO,
    Jl = fr;
  function Xl(e, r, t, n, a) {
    return e === r
      ? !0
      : e == null || r == null || (!Jl(e) && !Jl(r))
      ? e !== e && r !== r
      : qO(e, r, t, n, Xl, a);
  }
  var Qi = Xl,
    BO = Qi;
  function VO(e, r) {
    return BO(e, r);
  }
  var Zl = VO,
    Ql = yt,
    KO = ta,
    zO = Ge,
    ec = Ql ? Ql.isConcatSpreadable : void 0;
  function GO(e) {
    return zO(e) || KO(e) || !!(ec && e && e[ec]);
  }
  var WO = GO,
    HO = Bi,
    YO = WO;
  function rc(e, r, t, n, a) {
    var i = -1,
      o = e.length;
    for (t || (t = YO), a || (a = []); ++i < o;) {
      var s = e[i];
      r > 0 && t(s)
        ? r > 1 ? rc(s, r - 1, t, n, a) : HO(a, s)
        : n || (a[a.length] = s);
    }
    return a;
  }
  var eo = rc;
  function JO(e, r) {
    for (var t = -1, n = e == null ? 0 : e.length, a = Array(n); ++t < n;) {
      a[t] = r(e[t], t, e);
    }
    return a;
  }
  var Xr = JO,
    XO = Gr,
    ZO = fr,
    QO = "[object Symbol]";
  function eA(e) {
    return typeof e == "symbol" || (ZO(e) && XO(e) == QO);
  }
  var la = eA,
    rA = Ge,
    tA = la,
    nA = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    aA = /^\w*$/;
  function iA(e, r) {
    if (rA(e)) return !1;
    var t = typeof e;
    return t == "number" ||
        t == "symbol" ||
        t == "boolean" ||
        e == null ||
        tA(e)
      ? !0
      : aA.test(e) || !nA.test(e) || (r != null && e in Object(r));
  }
  var ro = iA,
    tc = ji,
    oA = "Expected a function";
  function to(e, r) {
    if (typeof e != "function" || (r != null && typeof r != "function")) {
      throw new TypeError(oA);
    }
    var t = function () {
      var n = arguments,
        a = r ? r.apply(this, n) : n[0],
        i = t.cache;
      if (i.has(a)) return i.get(a);
      var o = e.apply(this, n);
      return (t.cache = i.set(a, o) || i), o;
    };
    return (t.cache = new (to.Cache || tc)()), t;
  }
  to.Cache = tc;
  var sA = to,
    uA = sA,
    lA = 500;
  function cA(e) {
    var r = uA(e, function (n) {
        return t.size === lA && t.clear(), n;
      }),
      t = r.cache;
    return r;
  }
  var fA = cA,
    dA = fA,
    hA =
      /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    mA = /\\(\\)?/g,
    pA = dA(function (e) {
      var r = [];
      return (
        e.charCodeAt(0) === 46 && r.push(""),
          e.replace(hA, function (t, n, a, i) {
            r.push(a ? i.replace(mA, "$1") : n || t);
          }),
          r
      );
    }),
    vA = pA,
    nc = yt,
    yA = Xr,
    gA = Ge,
    $A = la,
    _A = 1 / 0,
    ac = nc ? nc.prototype : void 0,
    ic = ac ? ac.toString : void 0;
  function oc(e) {
    if (typeof e == "string") return e;
    if (gA(e)) return yA(e, oc) + "";
    if ($A(e)) return ic ? ic.call(e) : "";
    var r = e + "";
    return r == "0" && 1 / e == -_A ? "-0" : r;
  }
  var bA = oc,
    SA = bA;
  function EA(e) {
    return e == null ? "" : SA(e);
  }
  var wA = EA,
    OA = Ge,
    AA = ro,
    TA = vA,
    PA = wA;
  function CA(e, r) {
    return OA(e) ? e : AA(e, r) ? [e] : TA(PA(e));
  }
  var sc = CA,
    IA = la,
    NA = 1 / 0;
  function DA(e) {
    if (typeof e == "string" || IA(e)) return e;
    var r = e + "";
    return r == "0" && 1 / e == -NA ? "-0" : r;
  }
  var ca = DA,
    FA = sc,
    jA = ca;
  function MA(e, r) {
    r = FA(r, e);
    for (var t = 0, n = r.length; e != null && t < n;) e = e[jA(r[t++])];
    return t && t == n ? e : void 0;
  }
  var no = MA,
    RA = ra,
    UA = Qi,
    kA = 1,
    LA = 2;
  function xA(e, r, t, n) {
    var a = t.length,
      i = a,
      o = !n;
    if (e == null) return !i;
    for (e = Object(e); a--;) {
      var s = t[a];
      if (o && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
    }
    for (; ++a < i;) {
      s = t[a];
      var u = s[0],
        l = e[u],
        c = s[1];
      if (o && s[2]) {
        if (l === void 0 && !(u in e)) return !1;
      } else {
        var f = new RA();
        if (n) var h = n(l, c, u, e, r, f);
        if (!(h === void 0 ? UA(c, l, kA | LA, n, f) : h)) return !1;
      }
    }
    return !0;
  }
  var qA = xA,
    BA = cr;
  function VA(e) {
    return e === e && !BA(e);
  }
  var uc = VA,
    KA = uc,
    zA = sn;
  function GA(e) {
    for (var r = zA(e), t = r.length; t--;) {
      var n = r[t],
        a = e[n];
      r[t] = [n, a, KA(a)];
    }
    return r;
  }
  var WA = GA;
  function HA(e, r) {
    return function (t) {
      return t == null ? !1 : t[e] === r && (r !== void 0 || e in Object(t));
    };
  }
  var lc = HA,
    YA = qA,
    JA = WA,
    XA = lc;
  function ZA(e) {
    var r = JA(e);
    return r.length == 1 && r[0][2] ? XA(r[0][0], r[0][1]) : function (t) {
      return t === e || YA(t, e, r);
    };
  }
  var QA = ZA,
    eT = no;
  function rT(e, r, t) {
    var n = e == null ? void 0 : eT(e, r);
    return n === void 0 ? t : n;
  }
  var tT = rT;
  function nT(e, r) {
    return e != null && r in Object(e);
  }
  var aT = nT,
    iT = sc,
    oT = ta,
    sT = Ge,
    uT = Ri,
    lT = Ui,
    cT = ca;
  function fT(e, r, t) {
    r = iT(r, e);
    for (var n = -1, a = r.length, i = !1; ++n < a;) {
      var o = cT(r[n]);
      if (!(i = e != null && t(e, o))) break;
      e = e[o];
    }
    return i || ++n != a
      ? i
      : ((a = e == null ? 0 : e.length),
        !!a && lT(a) && uT(o, a) && (sT(e) || oT(e)));
  }
  var dT = fT,
    hT = aT,
    mT = dT;
  function pT(e, r) {
    return e != null && mT(e, r, hT);
  }
  var vT = pT,
    yT = Qi,
    gT = tT,
    $T = vT,
    _T = ro,
    bT = uc,
    ST = lc,
    ET = ca,
    wT = 1,
    OT = 2;
  function AT(e, r) {
    return _T(e) && bT(r) ? ST(ET(e), r) : function (t) {
      var n = gT(t, e);
      return n === void 0 && n === r ? $T(t, e) : yT(r, n, wT | OT);
    };
  }
  var TT = AT;
  function PT(e) {
    return e;
  }
  var ln = PT;
  function CT(e) {
    return function (r) {
      return r == null ? void 0 : r[e];
    };
  }
  var IT = CT,
    NT = no;
  function DT(e) {
    return function (r) {
      return NT(r, e);
    };
  }
  var FT = DT,
    jT = IT,
    MT = FT,
    RT = ro,
    UT = ca;
  function kT(e) {
    return RT(e) ? jT(UT(e)) : MT(e);
  }
  var LT = kT,
    xT = QA,
    qT = TT,
    BT = ln,
    VT = Ge,
    KT = LT;
  function zT(e) {
    return typeof e == "function"
      ? e
      : e == null
      ? BT
      : typeof e == "object"
      ? VT(e) ? qT(e[0], e[1]) : xT(e)
      : KT(e);
  }
  var GT = zT;
  function WT(e) {
    return function (r, t, n) {
      for (var a = -1, i = Object(r), o = n(r), s = o.length; s--;) {
        var u = o[e ? s : ++a];
        if (t(i[u], u, i) === !1) break;
      }
      return r;
    };
  }
  var HT = WT,
    YT = HT,
    JT = YT(),
    cc = JT,
    XT = cc,
    ZT = sn;
  function QT(e, r) {
    return e && XT(e, r, ZT);
  }
  var eP = QT,
    rP = St;
  function tP(e, r) {
    return function (t, n) {
      if (t == null) return t;
      if (!rP(t)) return e(t, n);
      for (
        var a = t.length, i = r ? a : -1, o = Object(t);
        (r ? i-- : ++i < a) && n(o[i], i, o) !== !1;
      );
      return t;
    };
  }
  var nP = tP,
    aP = eP,
    iP = nP,
    oP = iP(aP),
    fc = oP,
    sP = fc,
    uP = St;
  function lP(e, r) {
    var t = -1,
      n = uP(e) ? Array(e.length) : [];
    return (
      sP(e, function (a, i, o) {
        n[++t] = r(a, i, o);
      }), n
    );
  }
  var cP = lP;
  function fP(e, r) {
    var t = e.length;
    for (e.sort(r); t--;) e[t] = e[t].value;
    return e;
  }
  var dP = fP,
    dc = la;
  function hP(e, r) {
    if (e !== r) {
      var t = e !== void 0,
        n = e === null,
        a = e === e,
        i = dc(e),
        o = r !== void 0,
        s = r === null,
        u = r === r,
        l = dc(r);
      if (
        (!s && !l && !i && e > r) ||
        (i && o && u && !s && !l) ||
        (n && o && u) ||
        (!t && u) ||
        !a
      ) {
        return 1;
      }
      if (
        (!n && !i && !l && e < r) ||
        (l && t && a && !n && !i) ||
        (s && t && a) ||
        (!o && a) ||
        !u
      ) {
        return -1;
      }
    }
    return 0;
  }
  var mP = hP,
    pP = mP;
  function vP(e, r, t) {
    for (
      var n = -1, a = e.criteria, i = r.criteria, o = a.length, s = t.length;
      ++n < o;
    ) {
      var u = pP(a[n], i[n]);
      if (u) {
        if (n >= s) return u;
        var l = t[n];
        return u * (l == "desc" ? -1 : 1);
      }
    }
    return e.index - r.index;
  }
  var yP = vP,
    ao = Xr,
    gP = no,
    $P = GT,
    _P = cP,
    bP = dP,
    SP = Yr,
    EP = yP,
    wP = ln,
    OP = Ge;
  function AP(e, r, t) {
    r.length
      ? (r = ao(r, function (i) {
        return OP(i)
          ? function (o) {
            return gP(o, i.length === 1 ? i[0] : i);
          }
          : i;
      }))
      : (r = [wP]);
    var n = -1;
    r = ao(r, SP($P));
    var a = _P(e, function (i, o, s) {
      var u = ao(r, function (l) {
        return l(i);
      });
      return { criteria: u, index: ++n, value: i };
    });
    return bP(a, function (i, o) {
      return EP(i, o, t);
    });
  }
  var TP = AP;
  function PP(e, r, t) {
    switch (t.length) {
      case 0:
        return e.call(r);
      case 1:
        return e.call(r, t[0]);
      case 2:
        return e.call(r, t[0], t[1]);
      case 3:
        return e.call(r, t[0], t[1], t[2]);
    }
    return e.apply(r, t);
  }
  var hc = PP,
    CP = hc,
    mc = Math.max;
  function IP(e, r, t) {
    return (
      (r = mc(r === void 0 ? e.length - 1 : r, 0)), function () {
        for (
          var n = arguments, a = -1, i = mc(n.length - r, 0), o = Array(i);
          ++a < i;
        ) {
          o[a] = n[r + a];
        }
        a = -1;
        for (var s = Array(r + 1); ++a < r;) s[a] = n[a];
        return (s[r] = t(o)), CP(e, this, s);
      }
    );
  }
  var NP = IP;
  function DP(e) {
    return function () {
      return e;
    };
  }
  var FP = DP,
    jP = FP,
    pc = nl,
    MP = ln,
    RP = pc
      ? function (e, r) {
        return pc(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: jP(r),
          writable: !0,
        });
      }
      : MP,
    UP = RP,
    kP = 800,
    LP = 16,
    xP = Date.now;
  function qP(e) {
    var r = 0,
      t = 0;
    return function () {
      var n = xP(),
        a = LP - (n - t);
      if (((t = n), a > 0)) {
        if (++r >= kP) return arguments[0];
      } else r = 0;
      return e.apply(void 0, arguments);
    };
  }
  var BP = qP,
    VP = UP,
    KP = BP,
    zP = KP(VP),
    GP = zP,
    WP = ln,
    HP = NP,
    YP = GP;
  function JP(e, r) {
    return YP(HP(e, r, WP), e + "");
  }
  var Zr = JP,
    XP = pt,
    ZP = St,
    QP = Ri,
    eC = cr;
  function rC(e, r, t) {
    if (!eC(t)) return !1;
    var n = typeof r;
    return (n == "number" ? ZP(t) && QP(r, t.length) : n == "string" && r in t)
      ? XP(t[r], e)
      : !1;
  }
  var io = rC,
    tC = eo,
    nC = TP,
    aC = Zr,
    vc = io,
    iC = aC(function (e, r) {
      if (e == null) return [];
      var t = r.length;
      return (
        t > 1 && vc(e, r[0], r[1])
          ? (r = [])
          : t > 2 && vc(r[0], r[1], r[2]) && (r = [r[0]]), nC(e, tC(r, 1), [])
      );
    }),
    yc = iC;
  function oC(e, r, t, n) {
    for (var a = e.length, i = t + (n ? 1 : -1); n ? i-- : ++i < a;) {
      if (r(e[i], i, e)) return i;
    }
    return -1;
  }
  var sC = oC;
  function uC(e) {
    return e !== e;
  }
  var lC = uC;
  function cC(e, r, t) {
    for (var n = t - 1, a = e.length; ++n < a;) if (e[n] === r) return n;
    return -1;
  }
  var fC = cC,
    dC = sC,
    hC = lC,
    mC = fC;
  function pC(e, r, t) {
    return r === r ? mC(e, r, t) : dC(e, hC, t);
  }
  var gc = pC,
    vC = gc;
  function yC(e, r) {
    var t = e == null ? 0 : e.length;
    return !!t && vC(e, r, 0) > -1;
  }
  var oo = yC;
  function gC(e, r, t) {
    for (var n = -1, a = e == null ? 0 : e.length; ++n < a;) {
      if (t(r, e[n])) return !0;
    }
    return !1;
  }
  var so = gC;
  function $C() {}
  var _C = $C,
    uo = yl,
    bC = _C,
    SC = Ji,
    EC = 1 / 0,
    wC = uo && 1 / SC(new uo([, -0]))[1] == EC
      ? function (e) {
        return new uo(e);
      }
      : bC,
    OC = wC,
    AC = oa,
    TC = oo,
    PC = so,
    CC = sa,
    IC = OC,
    NC = Ji,
    DC = 200;
  function FC(e, r, t) {
    var n = -1,
      a = TC,
      i = e.length,
      o = !0,
      s = [],
      u = s;
    if (t) (o = !1), (a = PC);
    else if (i >= DC) {
      var l = r ? null : IC(e);
      if (l) return NC(l);
      (o = !1), (a = CC), (u = new AC());
    } else u = r ? [] : s;
    e:
    for (; ++n < i;) {
      var c = e[n],
        f = r ? r(c) : c;
      if (((c = t || c !== 0 ? c : 0), o && f === f)) {
        for (var h = u.length; h--;) if (u[h] === f) continue e;
        r && u.push(f), s.push(c);
      } else a(u, f, t) || (u !== s && u.push(f), s.push(c));
    }
    return s;
  }
  var $c = FC,
    jC = $c;
  function MC(e) {
    return e && e.length ? jC(e) : [];
  }
  var lo = MC,
    RC = $c;
  function UC(e, r) {
    return (
      (r = typeof r == "function" ? r : void 0),
        e && e.length ? RC(e, void 0, r) : []
    );
  }
  var co = UC,
    kC = Zr,
    LC = pt,
    xC = io,
    qC = Et,
    _c = Object.prototype,
    BC = _c.hasOwnProperty,
    VC = kC(function (e, r) {
      e = Object(e);
      var t = -1,
        n = r.length,
        a = n > 2 ? r[2] : void 0;
      for (a && xC(r[0], r[1], a) && (n = 1); ++t < n;) {
        for (var i = r[t], o = qC(i), s = -1, u = o.length; ++s < u;) {
          var l = o[s],
            c = e[l];
          (c === void 0 || (LC(c, _c[l]) && !BC.call(e, l))) && (e[l] = i[l]);
        }
      }
      return e;
    }),
    KC = VC,
    zC = oa,
    GC = oo,
    WC = so,
    HC = Xr,
    YC = Yr,
    bc = sa,
    JC = Math.min;
  function XC(e, r, t) {
    for (
      var n = t ? WC : GC,
        a = e[0].length,
        i = e.length,
        o = i,
        s = Array(i),
        u = 1 / 0,
        l = [];
      o--;
    ) {
      var c = e[o];
      o && r && (c = HC(c, YC(r))),
        (u = JC(c.length, u)),
        (s[o] = !t && (r || (a >= 120 && c.length >= 120))
          ? new zC(o && c)
          : void 0);
    }
    c = e[0];
    var f = -1,
      h = s[0];
    e:
    for (; ++f < a && l.length < u;) {
      var m = c[f],
        v = r ? r(m) : m;
      if (((m = t || m !== 0 ? m : 0), !(h ? bc(h, v) : n(l, v, t)))) {
        for (o = i; --o;) {
          var y = s[o];
          if (!(y ? bc(y, v) : n(e[o], v, t))) continue e;
        }
        h && h.push(v), l.push(m);
      }
    }
    return l;
  }
  var Sc = XC,
    ZC = St,
    QC = fr;
  function eI(e) {
    return QC(e) && ZC(e);
  }
  var fo = eI,
    rI = fo;
  function tI(e) {
    return rI(e) ? e : [];
  }
  var Ec = tI;
  function nI(e) {
    var r = e == null ? 0 : e.length;
    return r ? e[r - 1] : void 0;
  }
  var aI = nI,
    iI = Xr,
    oI = Sc,
    sI = Zr,
    uI = Ec,
    lI = aI,
    cI = sI(function (e) {
      var r = lI(e),
        t = iI(e, uI);
      return (
        (r = typeof r == "function" ? r : void 0),
          r && t.pop(),
          t.length && t[0] === e[0] ? oI(t, void 0, r) : []
      );
    }),
    wc = cI,
    fI = Gr,
    dI = Vi,
    hI = fr,
    mI = "[object Object]",
    pI = Function.prototype,
    vI = Object.prototype,
    Oc = pI.toString,
    yI = vI.hasOwnProperty,
    gI = Oc.call(Object);
  function $I(e) {
    if (!hI(e) || fI(e) != mI) return !1;
    var r = dI(e);
    if (r === null) return !0;
    var t = yI.call(r, "constructor") && r.constructor;
    return typeof t == "function" && t instanceof t && Oc.call(t) == gI;
  }
  var fa = $I,
    _I = Gr,
    bI = fr,
    SI = "[object Boolean]";
  function EI(e) {
    return e === !0 || e === !1 || (bI(e) && _I(e) == SI);
  }
  var wI = EI,
    tr = Zl,
    OI = yc,
    ho = lo,
    Ac = co,
    AI = KC,
    TI = wc,
    da = fa,
    mo = wI,
    Tc = (e) => (Array.isArray(e) ? e : [e]),
    Je = (e) => e === void 0,
    ha = (e) => (da(e) || Array.isArray(e) ? Object.keys(e) : []),
    Ot = (e, r) => e.hasOwnProperty(r),
    At = (e) => OI(ho(e)),
    Pc = (e) => Je(e) || (Array.isArray(e) && e.length === 0),
    PI = (e, r, t, n) => r && Ot(r, t) && e && Ot(e, t) && n(e[t], r[t]),
    po = (e, r) => (Je(e) && r === 0) || (Je(r) && e === 0) || tr(e, r),
    CI = (e, r) => (Je(e) && r === !1) || (Je(r) && e === !1) || tr(e, r),
    Cc = (e) => Je(e) || tr(e, {}) || e === !0,
    ma = (e) => Je(e) || tr(e, {}),
    Ic = (e) => Je(e) || da(e) || e === !0 || e === !1;
  function Nc(e, r) {
    return Pc(e) && Pc(r) ? !0 : tr(At(e), At(r));
  }
  function II(e, r) {
    return (e = Tc(e)), (r = Tc(r)), tr(At(e), At(r));
  }
  function pa(e, r, t, n) {
    var a = ho(ha(e).concat(ha(r)));
    return ma(e) && ma(r)
      ? !0
      : (ma(e) && ha(r).length) || (ma(r) && ha(e).length)
      ? !1
      : a.every(function (i) {
        var o = e[i],
          s = r[i];
        return Array.isArray(o) && Array.isArray(s)
          ? tr(At(e), At(r))
          : (Array.isArray(o) && !Array.isArray(s)) ||
              (Array.isArray(s) && !Array.isArray(o))
          ? !1
          : PI(e, r, i, n);
      });
  }
  function NI(e, r, t, n) {
    return da(e) && da(r)
      ? n(e, r)
      : Array.isArray(e) && Array.isArray(r)
      ? pa(e, r, t, n)
      : tr(e, r);
  }
  function vo(e, r, t, n) {
    var a = Ac(e, n),
      i = Ac(r, n),
      o = TI(a, i, n);
    return o.length === Math.max(a.length, i.length);
  }
  var DI = {
      title: tr,
      uniqueItems: CI,
      minLength: po,
      minItems: po,
      minProperties: po,
      required: Nc,
      enum: Nc,
      type: II,
      items: NI,
      anyOf: vo,
      allOf: vo,
      oneOf: vo,
      properties: pa,
      patternProperties: pa,
      dependencies: pa,
    },
    FI = [
      "properties",
      "patternProperties",
      "dependencies",
      "uniqueItems",
      "minLength",
      "minItems",
      "minProperties",
      "required",
    ],
    jI = [
      "additionalProperties",
      "additionalItems",
      "contains",
      "propertyNames",
      "not",
    ];
  function yo(e, r, t) {
    if (((t = AI(t, { ignore: [] })), Cc(e) && Cc(r))) return !0;
    if (!Ic(e) || !Ic(r)) {
      throw new Error("Either of the values are not a JSON schema.");
    }
    if (e === r) return !0;
    if (mo(e) && mo(r)) return e === r;
    if (
      (e === void 0 && r === !1) ||
      (r === void 0 && e === !1) ||
      (Je(e) && !Je(r)) ||
      (!Je(e) && Je(r))
    ) {
      return !1;
    }
    var n = ho(Object.keys(e).concat(Object.keys(r)));
    if (
      (t.ignore.length && (n = n.filter((i) => t.ignore.indexOf(i) === -1)),
        !n.length)
    ) {
      return !0;
    }
    function a(i, o) {
      return yo(i, o, t);
    }
    return n.every(function (i) {
      var o = e[i],
        s = r[i];
      if (jI.indexOf(i) !== -1) return yo(o, s, t);
      var u = DI[i];
      if ((u || (u = tr), tr(o, s))) return !0;
      if (
        FI.indexOf(i) === -1 &&
        ((!Ot(e, i) && Ot(r, i)) || (Ot(e, i) && !Ot(r, i)))
      ) {
        return o === s;
      }
      var l = u(o, s, i, a);
      if (!mo(l)) throw new Error("Comparer must return true or false");
      return l;
    });
  }
  var go = yo;
  function MI(e) {
    return Object.prototype.toString.call(e) === "[object Array]";
  }
  var $o = Array.isArray || MI;
  function RI(e) {
    return (
      (typeof e == "number" ||
        Object.prototype.toString.call(e) === "[object Number]") &&
      e.valueOf() === e.valueOf()
    );
  }
  var UI = RI,
    kI = UI;
  function LI(e) {
    return kI(e) && e % 1 === 0;
  }
  var xI = LI,
    qI = $o,
    BI = xI;
  function VI(e) {
    var r;
    if (!qI(e) || ((r = e.length), !r)) return !1;
    for (var t = 0; t < r; t++) if (!BI(e[t])) return !1;
    return !0;
  }
  var Dc = VI;
  function KI(e) {
    return typeof e == "function";
  }
  var Fc = KI,
    zI = $o,
    jc = Dc,
    GI = Fc,
    va = Math.pow(2, 31) - 1;
  function Mc(e, r) {
    var t = 1,
      n;
    if (e === 0) return r;
    if (r === 0) return e;
    for (; e % 2 === 0 && r % 2 === 0;) (e = e / 2), (r = r / 2), (t = t * 2);
    for (; e % 2 === 0;) e = e / 2;
    for (; r;) {
      for (; r % 2 === 0;) r = r / 2;
      e > r && ((n = r), (r = e), (e = n)), (r = r - e);
    }
    return t * e;
  }
  function Rc(e, r) {
    var t = 0,
      n;
    if (e === 0) return r;
    if (r === 0) return e;
    for (; !(e & 1) && !(r & 1);) (e >>>= 1), (r >>>= 1), t++;
    for (; !(e & 1);) e >>>= 1;
    for (; r;) {
      for (; !(r & 1);) r >>>= 1;
      e > r && ((n = r), (r = e), (e = n)), (r = r - e);
    }
    return e << t;
  }
  function WI() {
    var e = arguments.length,
      r,
      t,
      n,
      a,
      i,
      o,
      s;
    for (r = new Array(e), s = 0; s < e; s++) r[s] = arguments[s];
    if (jc(r)) {
      if (e === 2) {
        return (
          (i = r[0]),
            (o = r[1]),
            i < 0 && (i = -i),
            o < 0 && (o = -o),
            i <= va && o <= va ? Rc(i, o) : Mc(i, o)
        );
      }
      n = r;
    } else if (zI(r[0])) {
      if (e > 1) {
        if (((n = r[0]), (t = r[1]), !GI(t))) {
          throw new TypeError(
            "gcd()::invalid input argument. Accessor must be a function. Value: `" +
              t +
              "`.",
          );
        }
      } else n = r[0];
    } else {
      throw new TypeError(
        "gcd()::invalid input argument. Must provide an array of integers. Value: `" +
          r[0] +
          "`.",
      );
    }
    if (((a = n.length), a < 2)) return null;
    if (t) {
      for (i = new Array(a), s = 0; s < a; s++) i[s] = t(n[s], s);
      n = i;
    }
    if (e < 3 && !jc(n)) {
      throw new TypeError(
        "gcd()::invalid input argument. Accessed array values must be integers. Value: `" +
          n +
          "`.",
      );
    }
    for (s = 0; s < a; s++) (i = n[s]), i < 0 && (n[s] = -i);
    for (i = n[0], s = 1; s < a; s++) {
      (o = n[s]), o <= va && i <= va ? (i = Rc(i, o)) : (i = Mc(i, o));
    }
    return i;
  }
  var HI = WI,
    Uc = HI,
    YI = $o,
    kc = Dc,
    JI = Fc;
  function XI() {
    var e = arguments.length,
      r,
      t,
      n,
      a,
      i,
      o,
      s;
    for (r = new Array(e), s = 0; s < e; s++) r[s] = arguments[s];
    if (kc(r)) {
      if (e === 2) {
        return (
          (i = r[0]),
            (o = r[1]),
            i < 0 && (i = -i),
            o < 0 && (o = -o),
            i === 0 || o === 0 ? 0 : (i / Uc(i, o)) * o
        );
      }
      n = r;
    } else if (YI(r[0])) {
      if (e > 1) {
        if (((n = r[0]), (t = r[1]), !JI(t))) {
          throw new TypeError(
            "lcm()::invalid input argument. Accessor must be a function. Value: `" +
              t +
              "`.",
          );
        }
      } else n = r[0];
    } else {
      throw new TypeError(
        "lcm()::invalid input argument. Must provide an array of integers. Value: `" +
          r[0] +
          "`.",
      );
    }
    if (((a = n.length), a < 2)) return null;
    if (t) {
      for (i = new Array(a), s = 0; s < a; s++) i[s] = t(n[s], s);
      n = i;
    }
    if (e < 3 && !kc(n)) {
      throw new TypeError(
        "lcm()::invalid input argument. Accessed array values must be integers. Value: `" +
          n +
          "`.",
      );
    }
    for (s = 0; s < a; s++) (i = n[s]), i < 0 && (n[s] = -i);
    for (i = n[0], s = 1; s < a; s++) {
      if (((o = n[s]), i === 0 || o === 0)) return 0;
      i = (i / Uc(i, o)) * o;
    }
    return i;
  }
  var ZI = XI,
    QI = Mi,
    eN = pt;
  function rN(e, r, t) {
    ((t !== void 0 && !eN(e[r], t)) || (t === void 0 && !(r in e))) &&
      QI(e, r, t);
  }
  var Lc = rN;
  function tN(e, r) {
    if (
      !(r === "constructor" && typeof e[r] == "function") && r != "__proto__"
    ) {
      return e[r];
    }
  }
  var xc = tN,
    nN = on,
    aN = Et;
  function iN(e) {
    return nN(e, aN(e));
  }
  var oN = iN,
    qc = Lc,
    sN = un,
    uN = Cl,
    lN = xi,
    cN = Nl,
    Bc = ta,
    Vc = Ge,
    fN = fo,
    dN = Hr,
    hN = Ni,
    mN = cr,
    pN = fa,
    vN = ki,
    Kc = xc,
    yN = oN;
  function gN(e, r, t, n, a, i, o) {
    var s = Kc(e, t),
      u = Kc(r, t),
      l = o.get(u);
    if (l) {
      qc(e, t, l);
      return;
    }
    var c = i ? i(s, u, t + "", e, r, o) : void 0,
      f = c === void 0;
    if (f) {
      var h = Vc(u),
        m = !h && dN(u),
        v = !h && !m && vN(u);
      (c = u),
        h || m || v
          ? Vc(s)
            ? (c = s)
            : fN(s)
            ? (c = lN(s))
            : m
            ? ((f = !1), (c = sN(u, !0)))
            : v
            ? ((f = !1), (c = uN(u, !0)))
            : (c = [])
          : pN(u) || Bc(u)
          ? ((c = s), Bc(s) ? (c = yN(s)) : (!mN(s) || hN(s)) && (c = cN(u)))
          : (f = !1);
    }
    f && (o.set(u, c), a(c, u, n, i, o), o.delete(u)), qc(e, t, c);
  }
  var $N = gN,
    _N = ra,
    bN = Lc,
    SN = cc,
    EN = $N,
    wN = cr,
    ON = Et,
    AN = xc;
  function zc(e, r, t, n, a) {
    e !== r &&
      SN(
        r,
        function (i, o) {
          if ((a || (a = new _N()), wN(i))) EN(e, r, o, t, zc, n, a);
          else {
            var s = n ? n(AN(e, o), i, o + "", e, r, a) : void 0;
            s === void 0 && (s = i), bN(e, o, s);
          }
        },
        ON,
      );
  }
  var Gc = zc,
    TN = Gc,
    Wc = cr;
  function Hc(e, r, t, n, a, i) {
    return (
      Wc(e) && Wc(r) && (i.set(r, e), TN(e, r, void 0, Hc, i), i.delete(r)), e
    );
  }
  var PN = Hc,
    CN = Zr,
    IN = io;
  function NN(e) {
    return CN(function (r, t) {
      var n = -1,
        a = t.length,
        i = a > 1 ? t[a - 1] : void 0,
        o = a > 2 ? t[2] : void 0;
      for (
        i = e.length > 3 && typeof i == "function" ? (a--, i) : void 0,
          o && IN(t[0], t[1], o) && ((i = a < 3 ? void 0 : i), (a = 1)),
          r = Object(r);
        ++n < a;
      ) {
        var s = t[n];
        s && e(r, s, n, i);
      }
      return r;
    });
  }
  var DN = NN,
    FN = Gc,
    jN = DN,
    MN = jN(function (e, r, t, n) {
      FN(e, r, t, n);
    }),
    RN = MN,
    UN = hc,
    kN = Zr,
    LN = PN,
    xN = RN,
    qN = kN(function (e) {
      return e.push(void 0, LN), UN(xN, void 0, e);
    }),
    BN = qN,
    VN = eo;
  function KN(e) {
    var r = e == null ? 0 : e.length;
    return r ? VN(e, 1) : [];
  }
  var Yc = KN,
    zN = eo,
    GN = 1 / 0;
  function WN(e) {
    var r = e == null ? 0 : e.length;
    return r ? zN(e, GN) : [];
  }
  var Jc = WN,
    HN = Xr,
    YN = Sc,
    JN = Zr,
    XN = Ec,
    ZN = JN(function (e) {
      var r = HN(e, XN);
      return r.length && r[0] === e[0] ? YN(r) : [];
    }),
    QN = ZN;
  function eD(e, r, t, n) {
    for (var a = t - 1, i = e.length; ++a < i;) if (n(e[a], r)) return a;
    return -1;
  }
  var rD = eD,
    tD = Xr,
    nD = gc,
    aD = rD,
    iD = Yr,
    oD = xi,
    sD = Array.prototype,
    Xc = sD.splice;
  function uD(e, r, t, n) {
    var a = n ? aD : nD,
      i = -1,
      o = r.length,
      s = e;
    for (e === r && (r = oD(r)), t && (s = tD(e, iD(t))); ++i < o;) {
      for (var u = 0, l = r[i], c = t ? t(l) : l; (u = a(s, c, u, n)) > -1;) {
        s !== e && Xc.call(s, u, 1), Xc.call(e, u, 1);
      }
    }
    return e;
  }
  var lD = uD,
    cD = lD;
  function fD(e, r) {
    return e && e.length && r && r.length ? cD(e, r) : e;
  }
  var dD = fD,
    hD = ln;
  function mD(e) {
    return typeof e == "function" ? e : hD;
  }
  var pD = mD,
    vD = tl,
    yD = fc,
    gD = pD,
    $D = Ge;
  function _D(e, r) {
    var t = $D(e) ? vD : yD;
    return t(e, gD(r));
  }
  var Zc = _D,
    bD = oa,
    SD = oo,
    ED = so,
    wD = Xr,
    OD = Yr,
    AD = sa,
    TD = 200;
  function PD(e, r, t, n) {
    var a = -1,
      i = SD,
      o = !0,
      s = e.length,
      u = [],
      l = r.length;
    if (!s) return u;
    t && (r = wD(r, OD(t))),
      n
        ? ((i = ED), (o = !1))
        : r.length >= TD && ((i = AD), (o = !1), (r = new bD(r)));
    e:
    for (; ++a < s;) {
      var c = e[a],
        f = t == null ? c : t(c);
      if (((c = n || c !== 0 ? c : 0), o && f === f)) {
        for (var h = l; h--;) if (r[h] === f) continue e;
        u.push(c);
      } else i(r, f, n) || u.push(c);
    }
    return u;
  }
  var CD = PD,
    ID = CD,
    ND = Zr,
    DD = fo,
    FD = ND(function (e, r) {
      return DD(e) ? ID(e, r) : [];
    }),
    jD = FD;
  const MD = Yc,
    RD = Jc,
    Qc = fa,
    UD = lo,
    kD = co,
    LD = jD;
  function xD(e) {
    for (const r in e) ef(e, r) && rf(e[r]) && delete e[r];
    return e;
  }
  const qD = (e) => UD(RD(e.map(_o))),
    BD = (e, r) => e.map((t) => t && t[r]),
    ef = (e, r) => Object.prototype.hasOwnProperty.call(e, r),
    _o = (e) => (Qc(e) || Array.isArray(e) ? Object.keys(e) : []),
    VD = (e) => e !== void 0,
    KD = (e) => Qc(e) || e === !0 || e === !1,
    rf = (e) => !_o(e).length && e !== !1 && e !== !0;
  var tf = {
    allUniqueKeys: qD,
    deleteUndefinedProps: xD,
    getValues: BD,
    has: ef,
    isEmptySchema: rf,
    isSchema: KD,
    keys: _o,
    notUndefined: VD,
    uniqWith: kD,
    withoutArr: (e, ...r) => LD.apply(null, [e].concat(MD(r))),
  };
  const zD = go,
    GD = Zc,
    {
      allUniqueKeys: WD,
      deleteUndefinedProps: HD,
      getValues: YD,
      keys: cn,
      notUndefined: JD,
      uniqWith: XD,
      withoutArr: nf,
    } = tf;
  function ZD(e) {
    GD(e, function (r, t) {
      r === !1 && delete e[t];
    });
  }
  function af(e, r) {
    return WD(e).reduce(function (n, a) {
      const i = YD(e, a),
        o = XD(i.filter(JD), zD);
      return (n[a] = r(o, a)), n;
    }, {});
  }
  var QD = {
    keywords: ["properties", "patternProperties", "additionalProperties"],
    resolver(e, r, t, n) {
      n.ignoreAdditionalProperties ||
        (e.forEach(function (i) {
          const o = e.filter((c) => c !== i),
            s = cn(i.properties),
            l = cn(i.patternProperties).map((c) => new RegExp(c));
          o.forEach(function (c) {
            const f = cn(c.properties),
              h = f.filter((v) => l.some((y) => y.test(v)));
            nf(f, s, h).forEach(function (v) {
              c.properties[v] = t.properties(
                [c.properties[v], i.additionalProperties],
                v,
              );
            });
          });
        }),
          e.forEach(function (i) {
            const o = e.filter((u) => u !== i),
              s = cn(i.patternProperties);
            i.additionalProperties === !1 &&
              o.forEach(function (u) {
                const l = cn(u.patternProperties);
                nf(l, s).forEach((f) => delete u.patternProperties[f]);
              });
          }));
      const a = {
        additionalProperties: t.additionalProperties(
          e.map((i) => i.additionalProperties),
        ),
        patternProperties: af(
          e.map((i) => i.patternProperties),
          t.patternProperties,
        ),
        properties: af(
          e.map((i) => i.properties),
          t.properties,
        ),
      };
      return a.additionalProperties === !1 && ZD(a.properties), HD(a);
    },
  };
  const eF = go,
    rF = Zc,
    {
      allUniqueKeys: tF,
      deleteUndefinedProps: nF,
      has: aF,
      isSchema: of,
      notUndefined: sf,
      uniqWith: iF,
    } = tf;
  function oF(e) {
    rF(e, function (r, t) {
      r === !1 && e.splice(t, 1);
    });
  }
  function sF(e, r) {
    return e.map(function (t) {
      if (t) {
        if (Array.isArray(t.items)) {
          const n = t.items[r];
          if (of(n)) return n;
          if (aF(t, "additionalItems")) return t.additionalItems;
        } else return t.items;
      }
    });
  }
  function uF(e) {
    return e.map(function (r) {
      if (r) return Array.isArray(r.items) ? r.additionalItems : r.items;
    });
  }
  function lF(e, r, t) {
    return tF(t).reduce(function (a, i) {
      const o = sF(e, i),
        s = iF(o.filter(sf), eF);
      return (a[i] = r(s, i)), a;
    }, []);
  }
  var cF = {
    keywords: ["items", "additionalItems"],
    resolver(e, r, t) {
      const n = e.map((s) => s.items),
        a = n.filter(sf),
        i = {};
      a.every(of) ? (i.items = t.items(n)) : (i.items = lF(e, t.items, n));
      let o;
      return (
        a.every(Array.isArray)
          ? (o = e.map((s) => s.additionalItems))
          : a.some(Array.isArray) && (o = uF(e)),
          o && (i.additionalItems = t.additionalItems(o)),
          i.additionalItems === !1 && Array.isArray(i.items) && oF(i.items),
          nF(i)
      );
    },
  };
  const uf = Bw,
    ya = go,
    fF = ZI,
    dF = BN,
    lf = Yc,
    bo = Jc,
    hF = QN,
    mF = wc,
    So = Zl,
    Tt = fa,
    pF = dD,
    cf = yc,
    Eo = lo,
    Pt = co,
    ff = QD,
    df = cF,
    ga = (e, r) => e.indexOf(r) !== -1,
    vF = (e) => Tt(e) || e === !0 || e === !1,
    yF = (e) => e === !1,
    hf = (e) => e === !0,
    $a = (e, r, t) => t(e),
    mf = (e) => cf(Eo(bo(e))),
    _a = (e) => e !== void 0,
    pf = (e) => Eo(bo(e.map(EF))),
    Ct = (e) => e[0],
    gF = (e) => mf(e),
    fn = (e) => Math.max.apply(Math, e),
    dn = (e) => Math.min.apply(Math, e),
    $F = (e) => e.some(hf),
    _F = (e) => Pt(lf(e), So);
  function bF(e) {
    return function (r, t) {
      return ya({ [e]: r }, { [e]: t });
    };
  }
  function vf(e) {
    let { allOf: r = [], ...t } = e;
    return (t = Tt(e) ? t : e), [t, ...r.map(vf)];
  }
  function yf(e, r) {
    return e.map((t) => t && t[r]);
  }
  function SF(e, r) {
    return e
      .map(function (t, n) {
        try {
          return r(t, n);
        } catch {
          return;
        }
      })
      .filter(_a);
  }
  function EF(e) {
    return Tt(e) || Array.isArray(e) ? Object.keys(e) : [];
  }
  function wo(e, r) {
    if (((r = r || []), !e.length)) return r;
    const t = e.slice(0).shift(),
      n = e.slice(1);
    return r.length ? wo(n, lf(r.map((a) => t.map((i) => [i].concat(a))))) : wo(
      n,
      t.map((a) => a),
    );
  }
  function gf(e, r) {
    let t;
    try {
      t = e.map(function (n) {
        return JSON.stringify(n, null, 2);
      }).join(`
`);
    } catch {
      t = e.join(", ");
    }
    throw new Error(
      'Could not resolve values for path:"' +
        r.join(".") +
        `". They are probably incompatible. Values: 
` +
        t,
    );
  }
  function wF(e, r, t, n, a, i) {
    if (e.length) {
      const o = a.complexResolvers[r];
      if (!o || !o.resolver) throw new Error("No resolver found for " + r);
      const s = t.map((f) =>
          e.reduce((h, m) => (f[m] !== void 0 && (h[m] = f[m]), h), {})
        ),
        u = Pt(s, ya),
        l = o.keywords.reduce(
          (f, h) => ({ ...f, [h]: (m, v = []) => n(m, null, i.concat(h, v)) }),
          {},
        ),
        c = o.resolver(u, i.concat(r), l, a);
      return Tt(c) || gf(u, i.concat(r)), c;
    }
  }
  function OF(e) {
    return { required: e };
  }
  const AF = ["properties", "patternProperties", "definitions", "dependencies"],
    TF = ["anyOf", "oneOf"],
    PF = [
      "additionalProperties",
      "additionalItems",
      "contains",
      "propertyNames",
      "not",
      "items",
    ],
    ue = {
      type(e) {
        if (e.some(Array.isArray)) {
          const r = e.map(function (n) {
              return Array.isArray(n) ? n : [n];
            }),
            t = hF.apply(null, r);
          if (t.length === 1) return t[0];
          if (t.length > 1) return Eo(t);
        }
      },
      dependencies(e, r, t) {
        return pf(e).reduce(function (a, i) {
          const o = yf(e, i);
          let s = Pt(o.filter(_a), So);
          const u = s.filter(Array.isArray);
          if (u.length) {
            if (u.length === s.length) a[i] = mf(s);
            else {
              const l = s.filter(vF),
                c = u.map(OF);
              a[i] = t(l.concat(c), i);
            }
            return a;
          }
          return (s = Pt(s, ya)), (a[i] = t(s, i)), a;
        }, {});
      },
      oneOf(e, r, t) {
        const n = wo(uf(e)),
          a = SF(n, t),
          i = Pt(a, ya);
        if (i.length) return i;
      },
      not(e) {
        return { anyOf: e };
      },
      pattern(e) {
        return e.map((r) => "(?=" + r + ")").join("");
      },
      multipleOf(e) {
        let r = e.slice(0),
          t = 1;
        for (; r.some((n) => !Number.isInteger(n));) {
          (r = r.map((n) => n * 10)), (t = t * 10);
        }
        return fF(r) / t;
      },
      enum(e) {
        const r = mF.apply(null, e.concat(So));
        if (r.length) return cf(r);
      },
    };
  (ue.$id = Ct),
    (ue.$ref = Ct),
    (ue.$schema = Ct),
    (ue.additionalItems = $a),
    (ue.additionalProperties = $a),
    (ue.anyOf = ue.oneOf),
    (ue.contains = $a),
    (ue.default = Ct),
    (ue.definitions = ue.dependencies),
    (ue.description = Ct),
    (ue.examples = _F),
    (ue.exclusiveMaximum = dn),
    (ue.exclusiveMinimum = fn),
    (ue.items = df),
    (ue.maximum = dn),
    (ue.maxItems = dn),
    (ue.maxLength = dn),
    (ue.maxProperties = dn),
    (ue.minimum = fn),
    (ue.minItems = fn),
    (ue.minLength = fn),
    (ue.minProperties = fn),
    (ue.properties = ff),
    (ue.propertyNames = $a),
    (ue.required = gF),
    (ue.title = Ct),
    (ue.uniqueItems = $F);
  const CF = { properties: ff, items: df };
  function Oo(e, r, t) {
    r = dF(r, {
      ignoreAdditionalProperties: !1,
      resolvers: ue,
      complexResolvers: CF,
      deep: !0,
    });
    const n = Object.entries(r.complexResolvers);
    function a(s, u, l) {
      (s = uf(s.filter(_a))), (l = l || []);
      const c = Tt(u) ? u : {};
      if (!s.length) return;
      if (s.some(yF)) return !1;
      if (s.every(hf)) return !0;
      s = s.filter(Tt);
      const f = pf(s);
      if (r.deep && ga(f, "allOf")) return Oo({ allOf: s }, r);
      const h = n.map(([m, v]) => f.filter((y) => v.keywords.includes(y)));
      return (
        h.forEach((m) => pF(f, m)),
          f.forEach(function (m) {
            const v = yf(s, m),
              y = Pt(v.filter(_a), bF(m));
            if (y.length === 1 && ga(TF, m)) c[m] = y[0].map((d) => a([d], d));
            else if (y.length === 1 && !ga(AF, m) && !ga(PF, m)) c[m] = y[0];
            else {
              const d = r.resolvers[m] || r.resolvers.defaultResolver;
              if (!d) {
                throw new Error(
                  "No resolver found for key " +
                    m +
                    ". You can provide a resolver for this keyword in the options, or provide a default resolver.",
                );
              }
              const p = ($, b = []) => a($, null, l.concat(m, b));
              (c[m] = d(y, l.concat(m), p, r)),
                c[m] === void 0
                  ? gf(y, l.concat(m))
                  : c[m] === void 0 && delete c[m];
            }
          }),
          n.reduce((m, [v, y], d) => ({ ...m, ...wF(h[d], v, s, a, r, l) }), c)
      );
    }
    const i = bo(vf(e));
    return a(i);
  }
  Oo.options = { resolvers: ue };
  var IF = Oo;
  function NF(e, r) {
    return Ku(Bu(e, r, Vu), e + "");
  }
  function DF(e, r, t, n) {
    for (var a = e.length, i = t + (n ? 1 : -1); n ? i-- : ++i < a;) {
      if (r(e[i], i, e)) return i;
    }
    return -1;
  }
  function FF(e) {
    return e !== e;
  }
  function jF(e, r, t) {
    for (var n = t - 1, a = e.length; ++n < a;) if (e[n] === r) return n;
    return -1;
  }
  function MF(e, r, t) {
    return r === r ? jF(e, r, t) : DF(e, FF, t);
  }
  function RF(e, r) {
    var t = e == null ? 0 : e.length;
    return !!t && MF(e, r, 0) > -1;
  }
  function UF(e, r, t) {
    for (var n = -1, a = e == null ? 0 : e.length; ++n < a;) {
      if (t(r, e[n])) return !0;
    }
    return !1;
  }
  function kF() {}
  var LF = 1 / 0,
    xF = ft && 1 / wi(new ft([, -0]))[1] == LF
      ? function (e) {
        return new ft(e);
      }
      : kF;
  const qF = xF;
  var BF = 200;
  function VF(e, r, t) {
    var n = -1,
      a = RF,
      i = e.length,
      o = !0,
      s = [],
      u = s;
    if (t) (o = !1), (a = UF);
    else if (i >= BF) {
      var l = r ? null : qF(e);
      if (l) return wi(l);
      (o = !1), (a = Pu), (u = new rn());
    } else u = r ? [] : s;
    e:
    for (; ++n < i;) {
      var c = e[n],
        f = r ? r(c) : c;
      if (((c = t || c !== 0 ? c : 0), o && f === f)) {
        for (var h = u.length; h--;) if (u[h] === f) continue e;
        r && u.push(f), s.push(c);
      } else a(u, f, t) || (u !== s && u.push(f), s.push(c));
    }
    return s;
  }
  function KF(e) {
    return rr(e) && Wn(e);
  }
  var zF = NF(function (e) {
    return VF(Ci(e, 1, KF, !0));
  });
  const GF = zF;
  var WF = 1,
    HF = 4;
  function YF(e) {
    return ht(e, WF | HF);
  }
  var Ao = {},
    JF = {
      get exports() {
        return Ao;
      },
      set exports(e) {
        Ao = e;
      },
    },
    de = {};
  /**
   * @license React
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var $f;
  function XF() {
    if ($f) return de;
    $f = 1;
    var e = Symbol.for("react.element"),
      r = Symbol.for("react.portal"),
      t = Symbol.for("react.fragment"),
      n = Symbol.for("react.strict_mode"),
      a = Symbol.for("react.profiler"),
      i = Symbol.for("react.provider"),
      o = Symbol.for("react.context"),
      s = Symbol.for("react.server_context"),
      u = Symbol.for("react.forward_ref"),
      l = Symbol.for("react.suspense"),
      c = Symbol.for("react.suspense_list"),
      f = Symbol.for("react.memo"),
      h = Symbol.for("react.lazy"),
      m = Symbol.for("react.offscreen"),
      v;
    v = Symbol.for("react.module.reference");
    function y(d) {
      if (typeof d == "object" && d !== null) {
        var p = d.$$typeof;
        switch (p) {
          case e:
            switch (((d = d.type), d)) {
              case t:
              case a:
              case n:
              case l:
              case c:
                return d;
              default:
                switch (((d = d && d.$$typeof), d)) {
                  case s:
                  case o:
                  case u:
                  case h:
                  case f:
                  case i:
                    return d;
                  default:
                    return p;
                }
            }
          case r:
            return p;
        }
      }
    }
    return (
      (de.ContextConsumer = o),
        (de.ContextProvider = i),
        (de.Element = e),
        (de.ForwardRef = u),
        (de.Fragment = t),
        (de.Lazy = h),
        (de.Memo = f),
        (de.Portal = r),
        (de.Profiler = a),
        (de.StrictMode = n),
        (de.Suspense = l),
        (de.SuspenseList = c),
        (de.isAsyncMode = function () {
          return !1;
        }),
        (de.isConcurrentMode = function () {
          return !1;
        }),
        (de.isContextConsumer = function (d) {
          return y(d) === o;
        }),
        (de.isContextProvider = function (d) {
          return y(d) === i;
        }),
        (de.isElement = function (d) {
          return typeof d == "object" && d !== null && d.$$typeof === e;
        }),
        (de.isForwardRef = function (d) {
          return y(d) === u;
        }),
        (de.isFragment = function (d) {
          return y(d) === t;
        }),
        (de.isLazy = function (d) {
          return y(d) === h;
        }),
        (de.isMemo = function (d) {
          return y(d) === f;
        }),
        (de.isPortal = function (d) {
          return y(d) === r;
        }),
        (de.isProfiler = function (d) {
          return y(d) === a;
        }),
        (de.isStrictMode = function (d) {
          return y(d) === n;
        }),
        (de.isSuspense = function (d) {
          return y(d) === l;
        }),
        (de.isSuspenseList = function (d) {
          return y(d) === c;
        }),
        (de.isValidElementType = function (d) {
          return (
            typeof d == "string" ||
            typeof d == "function" ||
            d === t ||
            d === a ||
            d === n ||
            d === l ||
            d === c ||
            d === m ||
            (typeof d == "object" &&
              d !== null &&
              (d.$$typeof === h ||
                d.$$typeof === f ||
                d.$$typeof === i ||
                d.$$typeof === o ||
                d.$$typeof === u ||
                d.$$typeof === v ||
                d.getModuleId !== void 0))
          );
        }),
        (de.typeOf = y),
        de
    );
  }
  var he = {};
  /**
   * @license React
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var _f;
  function ZF() {
    return (
      _f ||
      ((_f = 1),
        {}.NODE_ENV !== "production" &&
        (function () {
          var e = Symbol.for("react.element"),
            r = Symbol.for("react.portal"),
            t = Symbol.for("react.fragment"),
            n = Symbol.for("react.strict_mode"),
            a = Symbol.for("react.profiler"),
            i = Symbol.for("react.provider"),
            o = Symbol.for("react.context"),
            s = Symbol.for("react.server_context"),
            u = Symbol.for("react.forward_ref"),
            l = Symbol.for("react.suspense"),
            c = Symbol.for("react.suspense_list"),
            f = Symbol.for("react.memo"),
            h = Symbol.for("react.lazy"),
            m = Symbol.for("react.offscreen"),
            v = !1,
            y = !1,
            d = !1,
            p = !1,
            $ = !1,
            b;
          b = Symbol.for("react.module.reference");
          function w(K) {
            return !!(
              typeof K == "string" ||
              typeof K == "function" ||
              K === t ||
              K === a ||
              $ ||
              K === n ||
              K === l ||
              K === c ||
              p ||
              K === m ||
              v ||
              y ||
              d ||
              (typeof K == "object" &&
                K !== null &&
                (K.$$typeof === h ||
                  K.$$typeof === f ||
                  K.$$typeof === i ||
                  K.$$typeof === o ||
                  K.$$typeof === u ||
                  K.$$typeof === b ||
                  K.getModuleId !== void 0))
            );
          }
          function N(K) {
            if (typeof K == "object" && K !== null) {
              var We = K.$$typeof;
              switch (We) {
                case e:
                  var Te = K.type;
                  switch (Te) {
                    case t:
                    case a:
                    case n:
                    case l:
                    case c:
                      return Te;
                    default:
                      var pr = Te && Te.$$typeof;
                      switch (pr) {
                        case s:
                        case o:
                        case u:
                        case h:
                        case f:
                        case i:
                          return pr;
                        default:
                          return We;
                      }
                  }
                case r:
                  return We;
              }
            }
          }
          var O = o,
            E = i,
            D = e,
            R = u,
            k = t,
            B = h,
            q = f,
            z = r,
            G = a,
            H = n,
            pe = l,
            we = c,
            le = !1,
            ne = !1;
          function x(K) {
            return (
              le ||
              ((le = !0),
                console.warn(
                  "The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.",
                )), !1
            );
          }
          function I(K) {
            return (
              ne ||
              ((ne = !0),
                console.warn(
                  "The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.",
                )), !1
            );
          }
          function U(K) {
            return N(K) === o;
          }
          function C(K) {
            return N(K) === i;
          }
          function g(K) {
            return typeof K == "object" && K !== null && K.$$typeof === e;
          }
          function S(K) {
            return N(K) === u;
          }
          function F(K) {
            return N(K) === t;
          }
          function L(K) {
            return N(K) === h;
          }
          function V(K) {
            return N(K) === f;
          }
          function ee(K) {
            return N(K) === r;
          }
          function Q(K) {
            return N(K) === a;
          }
          function ce(K) {
            return N(K) === n;
          }
          function Ue(K) {
            return N(K) === l;
          }
          function Ze(K) {
            return N(K) === c;
          }
          (he.ContextConsumer = O),
            (he.ContextProvider = E),
            (he.Element = D),
            (he.ForwardRef = R),
            (he.Fragment = k),
            (he.Lazy = B),
            (he.Memo = q),
            (he.Portal = z),
            (he.Profiler = G),
            (he.StrictMode = H),
            (he.Suspense = pe),
            (he.SuspenseList = we),
            (he.isAsyncMode = x),
            (he.isConcurrentMode = I),
            (he.isContextConsumer = U),
            (he.isContextProvider = C),
            (he.isElement = g),
            (he.isForwardRef = S),
            (he.isFragment = F),
            (he.isLazy = L),
            (he.isMemo = V),
            (he.isPortal = ee),
            (he.isProfiler = Q),
            (he.isStrictMode = ce),
            (he.isSuspense = Ue),
            (he.isSuspenseList = Ze),
            (he.isValidElementType = w),
            (he.typeOf = N);
        })()), he
    );
  }
  (function (e) {
    ({}).NODE_ENV === "production" ? (e.exports = XF()) : (e.exports = ZF());
  })(JF);
  const bf = Ti(Ao);
  var QF = "[object String]";
  function e2(e) {
    return typeof e == "string" || (!ze(e) && rr(e) && Pr(e) == QF);
  }
  function Ne(e) {
    return (typeof File < "u" && e instanceof File) ||
        (typeof Date < "u" && e instanceof Date)
      ? !1
      : typeof e == "object" && e !== null && !Array.isArray(e);
  }
  function r2(e) {
    return (
      e.additionalItems === !0 &&
      console.warn("additionalItems=true is currently not supported"),
        Ne(e.additionalItems)
    );
  }
  function hn(e) {
    if (e !== "") {
      if (e === null) return null;
      if (/\.$/.test(e) || /\.0$/.test(e) || /\.\d*0$/.test(e)) return e;
      var r = Number(e),
        t = typeof r == "number" && !Number.isNaN(r);
      return t ? r : e;
    }
  }
  function Sf(e, r) {
    for (var t = 0; t < r.length; t++) {
      var n = r[t];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, i2(n.key), n);
    }
  }
  function t2(e, r, t) {
    return (
      r && Sf(e.prototype, r),
        t && Sf(e, t),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        e
    );
  }
  function je() {
    return (
      (je = Object.assign ? Object.assign.bind() : function (e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = arguments[r];
          for (var n in t) {
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          }
        }
        return e;
      }), je.apply(this, arguments)
    );
  }
  function n2(e) {
    if (e == null) throw new TypeError("Cannot destructure " + e);
  }
  function It(e, r) {
    if (e == null) return {};
    var t = {},
      n = Object.keys(e),
      a,
      i;
    for (i = 0; i < n.length; i++) {
      (a = n[i]), !(r.indexOf(a) >= 0) && (t[a] = e[a]);
    }
    return t;
  }
  function a2(e, r) {
    if (typeof e != "object" || e === null) return e;
    var t = e[Symbol.toPrimitive];
    if (t !== void 0) {
      var n = t.call(e, r || "default");
      if (typeof n != "object") return n;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (r === "string" ? String : Number)(e);
  }
  function i2(e) {
    var r = a2(e, "string");
    return typeof r == "symbol" ? r : String(r);
  }
  var mn = "__additional_property",
    To = "additionalProperties",
    ba = "allOf",
    o2 = "anyOf",
    Ef = "const",
    s2 = "default",
    Sa = "dependencies",
    u2 = "enum",
    Cr = "__errors",
    Ea = "$id",
    Qr = "items",
    wa = "$name",
    l2 = "oneOf",
    Ir = "properties",
    c2 = "required",
    wf = "submitButtonOptions",
    qe = "$ref",
    Po = "__rjsf_additionalProperties",
    f2 = "ui:field",
    Co = "ui:widget",
    Oa = "ui:options";
  function me(e) {
    return (
      e === void 0 && (e = {}),
        Object.keys(e)
          .filter(function (r) {
            return r.indexOf("ui:") === 0;
          })
          .reduce(function (r, t) {
            var n,
              a = e[t];
            return t === Co && Ne(a)
              ? (console.error(
                "Setting options via ui:widget object is no longer supported, use ui:options instead",
              ),
                r)
              : t === Oa && Ne(a)
              ? je({}, r, a)
              : je({}, r, ((n = {}), (n[t.substring(3)] = a), n));
          }, {})
    );
  }
  function d2(e, r, t) {
    if ((r === void 0 && (r = {}), !e.additionalProperties)) return !1;
    var n = me(r),
      a = n.expandable,
      i = a === void 0 ? !0 : a;
    return i === !1
      ? i
      : e.maxProperties !== void 0 && t
      ? Object.keys(t).length < e.maxProperties
      : !0;
  }
  function Nr(e, r) {
    return xy(e, r, function (t, n) {
      if (typeof t == "function" && typeof n == "function") return !0;
    });
  }
  function Io(e, r) {
    var t = r[e],
      n = Ii(r, [e]);
    return [n, t];
  }
  function No(e, r) {
    r === void 0 && (r = {});
    var t = e || "";
    if (t.startsWith("#")) t = decodeURIComponent(t.substring(1));
    else throw new Error("Could not find a definition for " + e + ".");
    var n = Jn.get(r, t);
    if (n === void 0) {
      throw new Error("Could not find a definition for " + e + ".");
    }
    if (n[qe]) {
      var a = Io(qe, n),
        i = a[0],
        o = a[1],
        s = No(o, r);
      return Object.keys(i).length > 0 ? je({}, i, s) : s;
    }
    return n;
  }
  function pn(e, r, t, n) {
    if (r === void 0) return 0;
    for (var a = 0; a < t.length; a++) {
      var i = t[a];
      if (i.properties) {
        var o = {
            anyOf: Object.keys(i.properties).map(function (l) {
              return { required: [l] };
            }),
          },
          s = void 0;
        if (i.anyOf) {
          var u = je({}, (n2(i), i));
          u.allOf ? (u.allOf = u.allOf.slice()) : (u.allOf = []),
            u.allOf.push(o),
            (s = u);
        } else s = Object.assign({}, i, o);
        if ((delete s.required, e.isValid(s, r, n))) return a;
      } else if (e.isValid(i, r, n)) return a;
    }
    return 0;
  }
  function Nt(e) {
    return Array.isArray(e)
      ? "array"
      : typeof e == "string"
      ? "string"
      : e == null
      ? "null"
      : typeof e == "boolean"
      ? "boolean"
      : isNaN(e)
      ? typeof e == "object" ? "object" : "string"
      : "number";
  }
  function Dt(e) {
    var r = e.type;
    return !r && e.const
      ? Nt(e.const)
      : !r && e.enum
      ? "string"
      : !r && (e.properties || e.additionalProperties)
      ? "object"
      : (Array.isArray(r) &&
        r.length === 2 &&
        r.includes("null") &&
        (r = r.find(function (t) {
          return t !== "null";
        })),
        r);
  }
  function Do(e) {
    return (
      Array.isArray(e.items) &&
      e.items.length > 0 &&
      e.items.every(function (r) {
        return Ne(r);
      })
    );
  }
  function Aa(e, r) {
    if (Array.isArray(r)) {
      var t = Array.isArray(e) ? e : [],
        n = r.map(function (i, o) {
          return t[o] ? Aa(t[o], i) : i;
        });
      return n;
    }
    if (Ne(r)) {
      var a = Object.assign({}, e);
      return Object.keys(r).reduce(function (i, o) {
        return (i[o] = Aa(e ? fe(e, o) : {}, fe(r, o))), i;
      }, a);
    }
    return r;
  }
  function vn(e, r, t) {
    return (
      t === void 0 && (t = !1),
        Object.keys(r).reduce(function (n, a) {
          var i = e ? e[a] : {},
            o = r[a];
          if (e && a in e && Ne(o)) n[a] = vn(i, o, t);
          else if (t && Array.isArray(i) && Array.isArray(o)) {
            var s = o;
            t === "preventDuplicates" &&
            (s = o.reduce(function (u, l) {
              return i.includes(l) || u.push(l), u;
            }, [])), (n[a] = i.concat(s));
          } else n[a] = o;
          return n;
        }, Object.assign({}, e))
    );
  }
  function h2(e) {
    return (Array.isArray(e.enum) && e.enum.length === 1) || Ef in e;
  }
  function Ta(e, r) {
    var t = Object.assign({}, e);
    return Object.keys(r).reduce(function (n, a) {
      var i = e ? e[a] : {},
        o = r[a];
      return (
        e && a in e && Ne(o) ? (n[a] = Ta(i, o)) : e &&
            r &&
            (Dt(e) === "object" || Dt(r) === "object") &&
            a === c2 &&
            Array.isArray(i) &&
            Array.isArray(o)
          ? (n[a] = GF(i, o))
          : (n[a] = o), n
      );
    }, t);
  }
  var m2 = ["if", "then", "else"],
    p2 = ["$ref"],
    v2 = ["allOf"],
    y2 = ["dependencies"],
    g2 = ["oneOf"];
  function $2(e, r, t, n) {
    var a = r.if,
      i = r.then,
      o = r.else,
      s = It(r, m2),
      u = e.isValid(a, n, t) ? i : o;
    return u && typeof u != "boolean"
      ? Le(e, Ta(s, Le(e, u, t, n)), t, n)
      : Le(e, s, t, n);
  }
  function _2(e, r, t, n) {
    if ((t === void 0 && (t = {}), qe in r)) return Of(e, r, t, n);
    if (Sa in r) {
      var a = Af(e, r, t, n);
      return Le(e, a, t, n);
    }
    return ba in r
      ? je({}, r, {
        allOf: r.allOf.map(function (i) {
          return Le(e, i, t, n);
        }),
      })
      : r;
  }
  function Of(e, r, t, n) {
    var a = No(r.$ref, t),
      i = It(r, p2);
    return Le(e, je({}, a, i), t, n);
  }
  function b2(e, r, t, n) {
    var a = je({}, r, { properties: je({}, r.properties) }),
      i = n && Ne(n) ? n : {};
    return (
      Object.keys(i).forEach(function (o) {
        if (!(o in a.properties)) {
          var s = {};
          typeof a.additionalProperties != "boolean"
            ? qe in a.additionalProperties
              ? (s = Le(e, { $ref: fe(a.additionalProperties, [qe]) }, t, i))
              : "type" in a.additionalProperties
              ? (s = je({}, a.additionalProperties))
              : (s = { type: Nt(fe(i, [o])) })
            : (s = { type: Nt(fe(i, [o])) }),
            (a.properties[o] = s),
            Ye(a.properties, [o, mn], !0);
        }
      }), a
    );
  }
  function Le(e, r, t, n) {
    if ((t === void 0 && (t = {}), !Ne(r))) return {};
    var a = _2(e, r, t, n);
    if ("if" in r) return $2(e, r, t, n);
    var i = n || {};
    if (ba in r) {
      try {
        a = IF(a, { deep: !1 });
      } catch (l) {
        console.warn(
          `could not merge subschemas in allOf:
` + l,
        );
        var o = a,
          s = It(o, v2);
        return s;
      }
    }
    var u = To in a && a.additionalProperties !== !1;
    return u ? b2(e, a, t, i) : a;
  }
  function Af(e, r, t, n) {
    var a = r.dependencies,
      i = It(r, y2),
      o = i;
    return (
      Array.isArray(o.oneOf)
        ? (o = o.oneOf[pn(e, n, o.oneOf, t)])
        : Array.isArray(o.anyOf) && (o = o.anyOf[pn(e, n, o.anyOf, t)]),
        Tf(e, a, o, t, n)
    );
  }
  function Tf(e, r, t, n, a) {
    var i = t;
    for (var o in r) {
      if (fe(a, [o]) !== void 0 && !(i.properties && !(o in i.properties))) {
        var s = Io(o, r),
          u = s[0],
          l = s[1];
        return (
          Array.isArray(l)
            ? (i = S2(i, l))
            : Ne(l) && (i = E2(e, i, n, o, l, a)), Tf(e, u, i, n, a)
        );
      }
    }
    return i;
  }
  function S2(e, r) {
    if (!r) return e;
    var t = Array.isArray(e.required)
      ? Array.from(new Set([].concat(e.required, r)))
      : r;
    return je({}, e, { required: t });
  }
  function E2(e, r, t, n, a, i) {
    var o = Le(e, a, t, i),
      s = o.oneOf,
      u = It(o, g2);
    if (((r = Ta(r, u)), s === void 0)) return r;
    var l = s.map(function (c) {
      return typeof c == "boolean" || !(qe in c) ? c : Of(e, c, t, i);
    });
    return w2(e, r, t, n, l, i);
  }
  function w2(e, r, t, n, a, i) {
    var o = a.filter(function (f) {
      if (typeof f == "boolean" || !f || !f.properties) return !1;
      var h = f.properties[n];
      if (h) {
        var m,
          v = { type: "object", properties: ((m = {}), (m[n] = h), m) },
          y = e.validateFormData(i, v),
          d = y.errors;
        return d.length === 0;
      }
      return !1;
    });
    if (o.length !== 1) {
      return (
        console.warn(
          "ignoring oneOf in dependencies because there isn't exactly one subschema that is valid",
        ), r
      );
    }
    var s = o[0],
      u = Io(n, s.properties),
      l = u[0],
      c = je({}, s, { properties: l });
    return Ta(r, Le(e, c, t, i));
  }
  function Pf(e, r, t) {
    t === void 0 && (t = {});
    var n = Le(e, r, t, void 0),
      a = n.oneOf || n.anyOf;
    return Array.isArray(n.enum)
      ? !0
      : Array.isArray(a)
      ? a.every(function (i) {
        return typeof i != "boolean" && h2(i);
      })
      : !1;
  }
  function Fo(e, r, t) {
    return !r.uniqueItems || !r.items || typeof r.items == "boolean"
      ? !1
      : Pf(e, r.items, t);
  }
  var Ft;
  (function (e) {
    (e[e.Ignore = 0] = "Ignore"),
      (e[e.Invert = 1] = "Invert"),
      (e[e.Fallback = 2] = "Fallback");
  })(Ft || (Ft = {}));
  function jo(e, r, t) {
    if ((r === void 0 && (r = Ft.Ignore), t === void 0 && (t = -1), t >= 0)) {
      if (Array.isArray(e.items) && t < e.items.length) {
        var n = e.items[t];
        if (typeof n != "boolean") return n;
      }
    } else if (
      e.items && !Array.isArray(e.items) && typeof e.items != "boolean"
    ) return e.items;
    return r !== Ft.Ignore && Ne(e.additionalItems) ? e.additionalItems : {};
  }
  function Dr(e, r, t, n, a, i) {
    n === void 0 && (n = {}), i === void 0 && (i = !1);
    var o = Ne(a) ? a : {},
      s = Ne(r) ? r : {},
      u = t;
    if (Ne(u) && Ne(s.default)) u = vn(u, s.default);
    else if (s2 in s) u = s.default;
    else if (qe in s) {
      var l = No(s[qe], n);
      return Dr(e, l, u, n, o, i);
    } else if (Sa in s) {
      var c = Af(e, s, n, o);
      return Dr(e, c, u, n, o, i);
    } else {
      Do(s)
        ? (u = s.items.map(function (p, $) {
          return Dr(e, p, Array.isArray(t) ? t[$] : void 0, n, o, i);
        }))
        : l2 in s
        ? (s = s.oneOf[pn(e, tn(o) ? void 0 : o, s.oneOf, n)])
        : o2 in s && (s = s.anyOf[pn(e, tn(o) ? void 0 : o, s.anyOf, n)]);
    }
    switch ((typeof u > "u" && (u = s.default), Dt(s))) {
      case "object":
        return Object.keys(s.properties || {}).reduce(function (p, $) {
          var b = Dr(
            e,
            fe(s, [Ir, $]),
            fe(u, [$]),
            n,
            fe(o, [$]),
            i === "excludeObjectChildren" ? !1 : i,
          );
          return (
            i
              ? (p[$] = b)
              : Ne(b)
              ? tn(b) || (p[$] = b)
              : b !== void 0 && (p[$] = b), p
          );
        }, {});
      case "array":
        if (
          (Array.isArray(u) &&
            (u = u.map(function (p, $) {
              var b = jo(s, Ft.Fallback, $);
              return Dr(e, b, p, n);
            })),
            Array.isArray(a))
        ) {
          var f = jo(s);
          u = a.map(function (p, $) {
            return Dr(e, f, fe(u, [$]), n, p);
          });
        }
        if (s.minItems) {
          if (!Fo(e, s, n)) {
            var h = Array.isArray(u) ? u.length : 0;
            if (s.minItems > h) {
              var m = u || [],
                v = jo(s, Ft.Invert),
                y = v.default,
                d = new Array(s.minItems - h).fill(Dr(e, v, y, n));
              return m.concat(d);
            }
          }
          return u || [];
        }
    }
    return u;
  }
  function Cf(e, r, t, n, a) {
    if ((a === void 0 && (a = !1), !Ne(r))) {
      throw new Error("Invalid schema: " + r);
    }
    var i = Le(e, r, n, t),
      o = Dr(e, i, void 0, n, t, a);
    return typeof t > "u" || t === null || (typeof t == "number" && isNaN(t))
      ? o
      : Ne(t) || Array.isArray(t)
      ? Aa(o, t)
      : t;
  }
  function If(e) {
    return (
      e === void 0 && (e = {}), "widget" in me(e) && me(e).widget !== "hidden"
    );
  }
  function Nf(e, r, t, n) {
    if ((t === void 0 && (t = {}), t[Co] === "files")) return !0;
    if (r.items) {
      var a = Le(e, r.items, n);
      return a.type === "string" && a.format === "data-url";
    }
    return !1;
  }
  function O2(e, r, t, n) {
    t === void 0 && (t = {});
    var a = me(t),
      i = a.label,
      o = i === void 0 ? !0 : i,
      s = !!o,
      u = Dt(r);
    return (
      u === "array" && (s = Fo(e, r, n) || Nf(e, r, t, n) || If(t)),
        u === "object" && (s = !1),
        u === "boolean" && !t[Co] && (s = !1),
        t[f2] && (s = !1),
        s
    );
  }
  function Df(e, r, t) {
    if (!t) return r;
    var n = r.errors,
      a = r.errorSchema,
      i = e.toErrorList(t),
      o = t;
    return (
      tn(a) || ((o = vn(a, t, !0)), (i = [].concat(n).concat(i))),
        { errorSchema: o, errors: i }
    );
  }
  function Pa(e, r, t, n, a, i, o) {
    if (
      (i === void 0 && (i = "root"),
        o === void 0 && (o = "_"),
        qe in r || Sa in r || ba in r)
    ) {
      var s = Le(e, r, n, a);
      return Pa(e, s, t, n, a, i, o);
    }
    if (Qr in r && !fe(r, [Qr, qe])) return Pa(e, fe(r, Qr), t, n, a, i, o);
    var u = t || i,
      l = { $id: u };
    if (r.type === "object" && Ir in r) {
      for (var c in r.properties) {
        var f = fe(r, [Ir, c]),
          h = l[Ea] + o + c;
        l[c] = Pa(e, Ne(f) ? f : {}, h, n, fe(a, [c]), i, o);
      }
    }
    return l;
  }
  function Ca(e, r, t, n, a) {
    var i;
    if ((t === void 0 && (t = ""), qe in r || Sa in r || ba in r)) {
      var o = Le(e, r, n, a);
      return Ca(e, o, t, n, a);
    }
    var s = ((i = {}), (i[wa] = t.replace(/^\./, "")), i);
    if (
      (To in r && r[To] !== !1 && Ye(s, Po, !0), Qr in r && Array.isArray(a))
    ) {
      a.forEach(function (c, f) {
        s[f] = Ca(e, r.items, t + "." + f, n, c);
      });
    } else if (Ir in r) {
      for (var u in r.properties) {
        var l = fe(r, [Ir, u]);
        s[u] = Ca(e, l, t + "." + u, n, fe(a, [u]));
      }
    }
    return s;
  }
  var A2 = (function () {
    function e(t, n) {
      (this.rootSchema = void 0),
        (this.validator = void 0),
        (this.rootSchema = n),
        (this.validator = t);
    }
    var r = e.prototype;
    return (
      (r.getValidator = function () {
        return this.validator;
      }),
        (r.doesSchemaUtilsDiffer = function (n, a) {
          return !n || !a
            ? !1
            : this.validator !== n || !Nr(this.rootSchema, a);
        }),
        (r.getDefaultFormState = function (n, a, i) {
          return (
            i === void 0 && (i = !1),
              Cf(this.validator, n, a, this.rootSchema, i)
          );
        }),
        (r.getDisplayLabel = function (n, a) {
          return O2(this.validator, n, a, this.rootSchema);
        }),
        (r.getMatchingOption = function (n, a) {
          return pn(this.validator, n, a, this.rootSchema);
        }),
        (r.isFilesArray = function (n, a) {
          return Nf(this.validator, n, a, this.rootSchema);
        }),
        (r.isMultiSelect = function (n) {
          return Fo(this.validator, n, this.rootSchema);
        }),
        (r.isSelect = function (n) {
          return Pf(this.validator, n, this.rootSchema);
        }),
        (r.mergeValidationData = function (n, a) {
          return Df(this.validator, n, a);
        }),
        (r.retrieveSchema = function (n, a) {
          return Le(this.validator, n, this.rootSchema, a);
        }),
        (r.toIdSchema = function (n, a, i, o, s) {
          return (
            o === void 0 && (o = "root"),
              s === void 0 && (s = "_"),
              Pa(this.validator, n, a, this.rootSchema, i, o, s)
          );
        }),
        (r.toPathSchema = function (n, a, i) {
          return Ca(this.validator, n, a, this.rootSchema, i);
        }),
        e
    );
  })();
  function T2(e, r) {
    return new A2(e, r);
  }
  function P2(e) {
    var r = e.split(","),
      t = r[0].split(";"),
      n = t[0].replace("data:", ""),
      a = t.filter(function (c) {
        return c.split("=")[0] === "name";
      }),
      i;
    a.length !== 1 ? (i = "unknown") : (i = a[0].split("=")[1]);
    for (var o = atob(r[1]), s = [], u = 0; u < o.length; u++) {
      s.push(o.charCodeAt(u));
    }
    var l = new window.Blob([new Uint8Array(s)], { type: n });
    return { blob: l, name: i };
  }
  function C2(e, r) {
    return r.filter(function (t) {
      return t !== e;
    });
  }
  function I2(e, r, t) {
    t === void 0 && (t = []);
    var n = t.map(function (o) {
        var s = o.value;
        return s;
      }),
      a = n.indexOf(e),
      i = a === -1 ? r.concat(e) : r.slice(0, a).concat(e, r.slice(a));
    return i.sort(function (o, s) {
      return Number(n.indexOf(o) > n.indexOf(s));
    });
  }
  var N2 = (function () {
    function e(t) {
      (this.errorSchema = {}), this.resetAllErrors(t);
    }
    var r = e.prototype;
    return (
      (r.getOrCreateErrorBlock = function (n) {
        var a = (Array.isArray(n) && n.length > 0) || typeof n == "string",
          i = a ? fe(this.errorSchema, n) : this.errorSchema;
        return !i && n && ((i = {}), Ye(this.errorSchema, n, i)), i;
      }),
        (r.resetAllErrors = function (n) {
          return (this.errorSchema = n ? YF(n) : {}), this;
        }),
        (r.addErrors = function (n, a) {
          var i = this.getOrCreateErrorBlock(a),
            o = fe(i, Cr);
          if ((Array.isArray(o) || ((o = []), (i[Cr] = o)), Array.isArray(n))) {
            var s;
            (s = o).push.apply(s, n);
          } else o.push(n);
          return this;
        }),
        (r.setErrors = function (n, a) {
          var i = this.getOrCreateErrorBlock(a),
            o = Array.isArray(n) ? [].concat(n) : [n];
          return Ye(i, Cr, o), this;
        }),
        (r.clearErrors = function (n) {
          var a = this.getOrCreateErrorBlock(n);
          return Ye(a, Cr, []), this;
        }),
        t2(e, [
          {
            key: "ErrorSchema",
            get: function () {
              return this.errorSchema;
            },
          },
        ]),
        e
    );
  })();
  function D2(e) {
    var r = {};
    return (
      e.multipleOf && (r.step = e.multipleOf),
        (e.minimum || e.minimum === 0) && (r.min = e.minimum),
        (e.maximum || e.maximum === 0) && (r.max = e.maximum),
        r
    );
  }
  function F2(e, r, t, n) {
    t === void 0 && (t = {}), n === void 0 && (n = !0);
    var a = je({ type: r || "text" }, D2(e));
    return (
      t.inputType ? (a.type = t.inputType) : r ||
        (e.type === "number"
          ? ((a.type = "number"), n && a.step === void 0 && (a.step = "any"))
          : e.type === "integer" &&
            ((a.type = "number"), a.step === void 0 && (a.step = 1))),
        t.autocomplete && (a.autoComplete = t.autocomplete),
        a
    );
  }
  var Ff = { props: { disabled: !1 }, submitText: "Submit", norender: !1 };
  function j2(e) {
    e === void 0 && (e = {});
    var r = me(e);
    if (r && r[wf]) {
      var t = r[wf];
      return je({}, Ff, t);
    }
    return Ff;
  }
  function ve(e, r, t) {
    t === void 0 && (t = {});
    var n = r.templates;
    return e === "ButtonTemplates" ? n[e] : t[e] || n[e];
  }
  var M2 = ["options"],
    Mo = {
      boolean: {
        checkbox: "CheckboxWidget",
        radio: "RadioWidget",
        select: "SelectWidget",
        hidden: "HiddenWidget",
      },
      string: {
        text: "TextWidget",
        password: "PasswordWidget",
        email: "EmailWidget",
        hostname: "TextWidget",
        ipv4: "TextWidget",
        ipv6: "TextWidget",
        uri: "URLWidget",
        "data-url": "FileWidget",
        radio: "RadioWidget",
        select: "SelectWidget",
        textarea: "TextareaWidget",
        hidden: "HiddenWidget",
        date: "DateWidget",
        datetime: "DateTimeWidget",
        "date-time": "DateTimeWidget",
        "alt-date": "AltDateWidget",
        "alt-datetime": "AltDateTimeWidget",
        color: "ColorWidget",
        file: "FileWidget",
      },
      number: {
        text: "TextWidget",
        select: "SelectWidget",
        updown: "UpDownWidget",
        range: "RangeWidget",
        radio: "RadioWidget",
        hidden: "HiddenWidget",
      },
      integer: {
        text: "TextWidget",
        select: "SelectWidget",
        updown: "UpDownWidget",
        range: "RangeWidget",
        radio: "RadioWidget",
        hidden: "HiddenWidget",
      },
      array: {
        select: "SelectWidget",
        checkboxes: "CheckboxesWidget",
        files: "FileWidget",
        hidden: "HiddenWidget",
      },
    };
  function R2(e) {
    var r = fe(e, "MergedWidget");
    if (!r) {
      var t = (e.defaultProps && e.defaultProps.options) || {};
      (r = function (a) {
        var i = a.options,
          o = It(a, M2);
        return P.createElement(e, je({ options: je({}, t, i) }, o));
      }), Ye(e, "MergedWidget", r);
    }
    return r;
  }
  function wr(e, r, t) {
    t === void 0 && (t = {});
    var n = Dt(e);
    if (
      typeof r == "function" ||
      (r && bf.isForwardRef(P.createElement(r))) ||
      bf.isMemo(r)
    ) {
      return R2(r);
    }
    if (typeof r != "string") {
      throw new Error("Unsupported widget definition: " + typeof r);
    }
    if (r in t) {
      var a = t[r];
      return wr(e, a, t);
    }
    if (typeof n == "string") {
      if (!(n in Mo)) throw new Error("No widget for type '" + n + "'");
      if (r in Mo[n]) {
        var i = t[Mo[n][r]];
        return wr(e, i, t);
      }
    }
    throw new Error("No widget '" + r + "' for type '" + n + "'");
  }
  function U2(e, r, t) {
    t === void 0 && (t = {});
    try {
      return wr(e, r, t), !0;
    } catch (a) {
      var n = a;
      if (
        n.message &&
        (n.message.startsWith("No widget") ||
          n.message.startsWith("Unsupported widget"))
      ) {
        return !1;
      }
      throw a;
    }
  }
  function yn(e, r) {
    var t = e2(e) ? e : e[Ea];
    return t + "__" + r;
  }
  function gn(e) {
    return yn(e, "description");
  }
  function jf(e) {
    return yn(e, "error");
  }
  function Ro(e) {
    return yn(e, "examples");
  }
  function Mf(e) {
    return yn(e, "help");
  }
  function Rf(e) {
    return yn(e, "title");
  }
  function Fr(e, r) {
    r === void 0 && (r = !1);
    var t = r ? " " + Ro(e) : "";
    return jf(e) + " " + gn(e) + " " + Mf(e) + t;
  }
  function Uf(e, r) {
    return e + "-" + r.value;
  }
  function k2(e) {
    return e ? new Date(e).toJSON() : void 0;
  }
  function L2(e) {
    if (u2 in e && Array.isArray(e.enum) && e.enum.length === 1) {
      return e.enum[0];
    }
    if (Ef in e) return e.const;
    throw new Error("schema cannot be inferred as a constant");
  }
  function Ia(e) {
    var r = e;
    if (
      (r.enumNames &&
        {}.NODE_ENV !== "production" &&
        console.warn(
          "The enumNames property is deprecated and may be removed in a future major release.",
        ),
        e.enum)
    ) {
      return e.enum.map(function (n, a) {
        var i = (r.enumNames && r.enumNames[a]) || String(n);
        return { label: i, value: n };
      });
    }
    var t = e.oneOf || e.anyOf;
    return (
      t &&
      t.map(function (n) {
        var a = n,
          i = L2(a),
          o = a.title || String(i);
        return { schema: a, label: o, value: i };
      })
    );
  }
  function x2(e, r) {
    if (!Array.isArray(r)) return e;
    var t = function (f) {
        return f.reduce(function (h, m) {
          return (h[m] = !0), h;
        }, {});
      },
      n = function (f) {
        return f.length > 1
          ? "properties '" + f.join("', '") + "'"
          : "property '" + f[0] + "'";
      },
      a = t(e),
      i = r.filter(function (c) {
        return c === "*" || a[c];
      }),
      o = t(i),
      s = e.filter(function (c) {
        return !o[c];
      }),
      u = i.indexOf("*");
    if (u === -1) {
      if (s.length) {
        throw new Error("uiSchema order list does not contain " + n(s));
      }
      return i;
    }
    if (u !== i.lastIndexOf("*")) {
      throw new Error(
        "uiSchema order list contains more than one wildcard item",
      );
    }
    var l = [].concat(i);
    return l.splice.apply(l, [u, 1].concat(s)), l;
  }
  function jr(e, r) {
    for (var t = String(e); t.length < r;) t = "0" + t;
    return t;
  }
  function Na(e, r) {
    if ((r === void 0 && (r = !0), !e)) {
      return {
        year: -1,
        month: -1,
        day: -1,
        hour: r ? -1 : 0,
        minute: r ? -1 : 0,
        second: r ? -1 : 0,
      };
    }
    var t = new Date(e);
    if (Number.isNaN(t.getTime())) throw new Error("Unable to parse date " + e);
    return {
      year: t.getUTCFullYear(),
      month: t.getUTCMonth() + 1,
      day: t.getUTCDate(),
      hour: r ? t.getUTCHours() : 0,
      minute: r ? t.getUTCMinutes() : 0,
      second: r ? t.getUTCSeconds() : 0,
    };
  }
  var Uo = new Set(["number", "integer"]);
  function ko(e, r, t) {
    var n = e.enum,
      a = e.type,
      i = e.items;
    if (r === "") return t && t.emptyValue !== void 0 ? t.emptyValue : void 0;
    if (a === "array" && i && Uo.has(fe(i, "type"))) return r.map(hn);
    if (a === "boolean") return r === "true";
    if (Uo.has(a)) return hn(r);
    if (Array.isArray(n)) {
      if (
        n.every(function (o) {
          return Uo.has(Nt(o));
        })
      ) {
        return hn(r);
      }
      if (
        n.every(function (o) {
          return Nt(o) === "boolean";
        })
      ) {
        return r === "true";
      }
    }
    return r;
  }
  function Da(e) {
    if (e.const || (e.enum && e.enum.length === 1 && e.enum[0] === !0)) {
      return !0;
    }
    if (e.anyOf && e.anyOf.length === 1) return Da(e.anyOf[0]);
    if (e.oneOf && e.oneOf.length === 1) return Da(e.oneOf[0]);
    if (e.allOf) {
      var r = function (n) {
        return Da(n);
      };
      return e.allOf.some(r);
    }
    return !1;
  }
  function q2(e, r, t) {
    var n = e.props,
      a = e.state;
    return !Nr(n, r) || !Nr(a, t);
  }
  function kf(e, r) {
    r === void 0 && (r = !0);
    var t = e.year,
      n = e.month,
      a = e.day,
      i = e.hour,
      o = i === void 0 ? 0 : i,
      s = e.minute,
      u = s === void 0 ? 0 : s,
      l = e.second,
      c = l === void 0 ? 0 : l,
      f = Date.UTC(t, n - 1, a, o, u, c),
      h = new Date(f).toJSON();
    return r ? h : h.slice(0, 10);
  }
  function B2(e) {
    if (!e) return "";
    var r = new Date(e),
      t = jr(r.getFullYear(), 4),
      n = jr(r.getMonth() + 1, 2),
      a = jr(r.getDate(), 2),
      i = jr(r.getHours(), 2),
      o = jr(r.getMinutes(), 2),
      s = jr(r.getSeconds(), 2),
      u = jr(r.getMilliseconds(), 3);
    return t + "-" + n + "-" + a + "T" + i + ":" + o + ":" + s + "." + u;
  }
  var $n = {},
    V2 = {
      get exports() {
        return $n;
      },
      set exports(e) {
        $n = e;
      },
    },
    Lf = {},
    nr = {},
    jt = {},
    _n = {},
    te = {},
    bn = {};
  (function (e) {
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.regexpCode =
        e.getEsmExportName =
        e.getProperty =
        e.safeStringify =
        e.stringify =
        e.strConcat =
        e.addCodeArg =
        e.str =
        e._ =
        e.nil =
        e._Code =
        e.Name =
        e.IDENTIFIER =
        e._CodeOrName =
          void 0);
    class r {}
    (e._CodeOrName = r), (e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i);
    class t extends r {
      constructor($) {
        if ((super(), !e.IDENTIFIER.test($))) {
          throw new Error("CodeGen: name must be a valid identifier");
        }
        this.str = $;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        return !1;
      }
      get names() {
        return { [this.str]: 1 };
      }
    }
    e.Name = t;
    class n extends r {
      constructor($) {
        super(), (this._items = typeof $ == "string" ? [$] : $);
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        if (this._items.length > 1) return !1;
        const $ = this._items[0];
        return $ === "" || $ === '""';
      }
      get str() {
        var $;
        return ($ = this._str) !== null && $ !== void 0
          ? $
          : (this._str = this._items.reduce((b, w) => `${b}${w}`, ""));
      }
      get names() {
        var $;
        return ($ = this._names) !== null && $ !== void 0
          ? $
          : (this._names = this._items.reduce(
            (b, w) => (w instanceof t && (b[w.str] = (b[w.str] || 0) + 1), b),
            {},
          ));
      }
    }
    (e._Code = n), (e.nil = new n(""));
    function a(p, ...$) {
      const b = [p[0]];
      let w = 0;
      for (; w < $.length;) s(b, $[w]), b.push(p[++w]);
      return new n(b);
    }
    e._ = a;
    const i = new n("+");
    function o(p, ...$) {
      const b = [m(p[0])];
      let w = 0;
      for (; w < $.length;) b.push(i), s(b, $[w]), b.push(i, m(p[++w]));
      return u(b), new n(b);
    }
    e.str = o;
    function s(p, $) {
      $ instanceof n
        ? p.push(...$._items)
        : $ instanceof t
        ? p.push($)
        : p.push(f($));
    }
    e.addCodeArg = s;
    function u(p) {
      let $ = 1;
      for (; $ < p.length - 1;) {
        if (p[$] === i) {
          const b = l(p[$ - 1], p[$ + 1]);
          if (b !== void 0) {
            p.splice($ - 1, 3, b);
            continue;
          }
          p[$++] = "+";
        }
        $++;
      }
    }
    function l(p, $) {
      if ($ === '""') return p;
      if (p === '""') return $;
      if (typeof p == "string") {
        return $ instanceof t || p[p.length - 1] !== '"'
          ? void 0
          : typeof $ != "string"
          ? `${p.slice(0, -1)}${$}"`
          : $[0] === '"'
          ? p.slice(0, -1) + $.slice(1)
          : void 0;
      }
      if (typeof $ == "string" && $[0] === '"' && !(p instanceof t)) {
        return `"${p}${$.slice(1)}`;
      }
    }
    function c(p, $) {
      return $.emptyStr() ? p : p.emptyStr() ? $ : o`${p}${$}`;
    }
    e.strConcat = c;
    function f(p) {
      return typeof p == "number" || typeof p == "boolean" || p === null
        ? p
        : m(Array.isArray(p) ? p.join(",") : p);
    }
    function h(p) {
      return new n(m(p));
    }
    e.stringify = h;
    function m(p) {
      return JSON.stringify(p)
        .replace(/\u2028/g, "\\u2028")
        .replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = m;
    function v(p) {
      return typeof p == "string" && e.IDENTIFIER.test(p)
        ? new n(`.${p}`)
        : a`[${p}]`;
    }
    e.getProperty = v;
    function y(p) {
      if (typeof p == "string" && e.IDENTIFIER.test(p)) return new n(`${p}`);
      throw new Error(
        `CodeGen: invalid export name: ${p}, use explicit $id name mapping`,
      );
    }
    e.getEsmExportName = y;
    function d(p) {
      return new n(p.toString());
    }
    e.regexpCode = d;
  })(bn);
  var Lo = {};
  (function (e) {
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.ValueScope =
        e.ValueScopeName =
        e.Scope =
        e.varKinds =
        e.UsedValueState =
          void 0);
    const r = bn;
    class t extends Error {
      constructor(l) {
        super(`CodeGen: "code" for ${l} not defined`), (this.value = l.value);
      }
    }
    var n;
    (function (u) {
      (u[u.Started = 0] = "Started"), (u[u.Completed = 1] = "Completed");
    })(n = e.UsedValueState || (e.UsedValueState = {})),
      (e.varKinds = {
        const: new r.Name("const"),
        let: new r.Name("let"),
        var: new r.Name("var"),
      });
    class a {
      constructor({ prefixes: l, parent: c } = {}) {
        (this._names = {}), (this._prefixes = l), (this._parent = c);
      }
      toName(l) {
        return l instanceof r.Name ? l : this.name(l);
      }
      name(l) {
        return new r.Name(this._newName(l));
      }
      _newName(l) {
        const c = this._names[l] || this._nameGroup(l);
        return `${l}${c.index++}`;
      }
      _nameGroup(l) {
        var c, f;
        if (
          (!(
            (f = (c = this._parent) === null || c === void 0
                ? void 0
                : c._prefixes) === null || f === void 0
          ) &&
            f.has(l)) ||
          (this._prefixes && !this._prefixes.has(l))
        ) {
          throw new Error(
            `CodeGen: prefix "${l}" is not allowed in this scope`,
          );
        }
        return (this._names[l] = { prefix: l, index: 0 });
      }
    }
    e.Scope = a;
    class i extends r.Name {
      constructor(l, c) {
        super(c), (this.prefix = l);
      }
      setValue(l, { property: c, itemIndex: f }) {
        (this.value = l), (this.scopePath = (0, r._)`.${new r.Name(c)}[${f}]`);
      }
    }
    e.ValueScopeName = i;
    const o = (0, r._)`\n`;
    class s extends a {
      constructor(l) {
        super(l),
          (this._values = {}),
          (this._scope = l.scope),
          (this.opts = { ...l, _n: l.lines ? o : r.nil });
      }
      get() {
        return this._scope;
      }
      name(l) {
        return new i(l, this._newName(l));
      }
      value(l, c) {
        var f;
        if (c.ref === void 0) {
          throw new Error("CodeGen: ref must be passed in value");
        }
        const h = this.toName(l),
          { prefix: m } = h,
          v = (f = c.key) !== null && f !== void 0 ? f : c.ref;
        let y = this._values[m];
        if (y) {
          const $ = y.get(v);
          if ($) return $;
        } else y = this._values[m] = new Map();
        y.set(v, h);
        const d = this._scope[m] || (this._scope[m] = []),
          p = d.length;
        return (d[p] = c.ref), h.setValue(c, { property: m, itemIndex: p }), h;
      }
      getValue(l, c) {
        const f = this._values[l];
        if (f) return f.get(c);
      }
      scopeRefs(l, c = this._values) {
        return this._reduceValues(c, (f) => {
          if (f.scopePath === void 0) {
            throw new Error(`CodeGen: name "${f}" has no value`);
          }
          return (0, r._)`${l}${f.scopePath}`;
        });
      }
      scopeCode(l = this._values, c, f) {
        return this._reduceValues(
          l,
          (h) => {
            if (h.value === void 0) {
              throw new Error(`CodeGen: name "${h}" has no value`);
            }
            return h.value.code;
          },
          c,
          f,
        );
      }
      _reduceValues(l, c, f = {}, h) {
        let m = r.nil;
        for (const v in l) {
          const y = l[v];
          if (!y) continue;
          const d = (f[v] = f[v] || new Map());
          y.forEach((p) => {
            if (d.has(p)) return;
            d.set(p, n.Started);
            let $ = c(p);
            if ($) {
              const b = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              m = (0, r._)`${m}${b} ${p} = ${$};${this.opts._n}`;
            } else if (($ = h == null ? void 0 : h(p))) {
              m = (0, r._)`${m}${$}${this.opts._n}`;
            } else throw new t(p);
            d.set(p, n.Completed);
          });
        }
        return m;
      }
    }
    e.ValueScope = s;
  })(Lo),
    (function (e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.or =
          e.and =
          e.not =
          e.CodeGen =
          e.operators =
          e.varKinds =
          e.ValueScopeName =
          e.ValueScope =
          e.Scope =
          e.Name =
          e.regexpCode =
          e.stringify =
          e.getProperty =
          e.nil =
          e.strConcat =
          e.str =
          e._ =
            void 0);
      const r = bn,
        t = Lo;
      var n = bn;
      Object.defineProperty(e, "_", {
        enumerable: !0,
        get: function () {
          return n._;
        },
      }),
        Object.defineProperty(e, "str", {
          enumerable: !0,
          get: function () {
            return n.str;
          },
        }),
        Object.defineProperty(e, "strConcat", {
          enumerable: !0,
          get: function () {
            return n.strConcat;
          },
        }),
        Object.defineProperty(e, "nil", {
          enumerable: !0,
          get: function () {
            return n.nil;
          },
        }),
        Object.defineProperty(e, "getProperty", {
          enumerable: !0,
          get: function () {
            return n.getProperty;
          },
        }),
        Object.defineProperty(e, "stringify", {
          enumerable: !0,
          get: function () {
            return n.stringify;
          },
        }),
        Object.defineProperty(e, "regexpCode", {
          enumerable: !0,
          get: function () {
            return n.regexpCode;
          },
        }),
        Object.defineProperty(e, "Name", {
          enumerable: !0,
          get: function () {
            return n.Name;
          },
        });
      var a = Lo;
      Object.defineProperty(e, "Scope", {
        enumerable: !0,
        get: function () {
          return a.Scope;
        },
      }),
        Object.defineProperty(e, "ValueScope", {
          enumerable: !0,
          get: function () {
            return a.ValueScope;
          },
        }),
        Object.defineProperty(e, "ValueScopeName", {
          enumerable: !0,
          get: function () {
            return a.ValueScopeName;
          },
        }),
        Object.defineProperty(e, "varKinds", {
          enumerable: !0,
          get: function () {
            return a.varKinds;
          },
        }),
        (e.operators = {
          GT: new r._Code(">"),
          GTE: new r._Code(">="),
          LT: new r._Code("<"),
          LTE: new r._Code("<="),
          EQ: new r._Code("==="),
          NEQ: new r._Code("!=="),
          NOT: new r._Code("!"),
          OR: new r._Code("||"),
          AND: new r._Code("&&"),
          ADD: new r._Code("+"),
        });
      class i {
        optimizeNodes() {
          return this;
        }
        optimizeNames(g, S) {
          return this;
        }
      }
      class o extends i {
        constructor(g, S, F) {
          super(), (this.varKind = g), (this.name = S), (this.rhs = F);
        }
        render({ es5: g, _n: S }) {
          const F = g ? t.varKinds.var : this.varKind,
            L = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
          return `${F} ${this.name}${L};` + S;
        }
        optimizeNames(g, S) {
          if (g[this.name.str]) {
            return this.rhs && (this.rhs = G(this.rhs, g, S)), this;
          }
        }
        get names() {
          return this.rhs instanceof r._CodeOrName ? this.rhs.names : {};
        }
      }
      class s extends i {
        constructor(g, S, F) {
          super(), (this.lhs = g), (this.rhs = S), (this.sideEffects = F);
        }
        render({ _n: g }) {
          return `${this.lhs} = ${this.rhs};` + g;
        }
        optimizeNames(g, S) {
          if (
            !(
              this.lhs instanceof r.Name &&
              !g[this.lhs.str] &&
              !this.sideEffects
            )
          ) {
            return (this.rhs = G(this.rhs, g, S)), this;
          }
        }
        get names() {
          const g = this.lhs instanceof r.Name ? {} : { ...this.lhs.names };
          return z(g, this.rhs);
        }
      }
      class u extends s {
        constructor(g, S, F, L) {
          super(g, F, L), (this.op = S);
        }
        render({ _n: g }) {
          return `${this.lhs} ${this.op}= ${this.rhs};` + g;
        }
      }
      class l extends i {
        constructor(g) {
          super(), (this.label = g), (this.names = {});
        }
        render({ _n: g }) {
          return `${this.label}:` + g;
        }
      }
      class c extends i {
        constructor(g) {
          super(), (this.label = g), (this.names = {});
        }
        render({ _n: g }) {
          return `break${this.label ? ` ${this.label}` : ""};` + g;
        }
      }
      class f extends i {
        constructor(g) {
          super(), (this.error = g);
        }
        render({ _n: g }) {
          return `throw ${this.error};` + g;
        }
        get names() {
          return this.error.names;
        }
      }
      class h extends i {
        constructor(g) {
          super(), (this.code = g);
        }
        render({ _n: g }) {
          return `${this.code};` + g;
        }
        optimizeNodes() {
          return `${this.code}` ? this : void 0;
        }
        optimizeNames(g, S) {
          return (this.code = G(this.code, g, S)), this;
        }
        get names() {
          return this.code instanceof r._CodeOrName ? this.code.names : {};
        }
      }
      class m extends i {
        constructor(g = []) {
          super(), (this.nodes = g);
        }
        render(g) {
          return this.nodes.reduce((S, F) => S + F.render(g), "");
        }
        optimizeNodes() {
          const { nodes: g } = this;
          let S = g.length;
          for (; S--;) {
            const F = g[S].optimizeNodes();
            Array.isArray(F)
              ? g.splice(S, 1, ...F)
              : F
              ? (g[S] = F)
              : g.splice(S, 1);
          }
          return g.length > 0 ? this : void 0;
        }
        optimizeNames(g, S) {
          const { nodes: F } = this;
          let L = F.length;
          for (; L--;) {
            const V = F[L];
            V.optimizeNames(g, S) || (H(g, V.names), F.splice(L, 1));
          }
          return F.length > 0 ? this : void 0;
        }
        get names() {
          return this.nodes.reduce((g, S) => q(g, S.names), {});
        }
      }
      class v extends m {
        render(g) {
          return "{" + g._n + super.render(g) + "}" + g._n;
        }
      }
      class y extends m {}
      class d extends v {}
      d.kind = "else";
      class p extends v {
        constructor(g, S) {
          super(S), (this.condition = g);
        }
        render(g) {
          let S = `if(${this.condition})` + super.render(g);
          return this.else && (S += "else " + this.else.render(g)), S;
        }
        optimizeNodes() {
          super.optimizeNodes();
          const g = this.condition;
          if (g === !0) return this.nodes;
          let S = this.else;
          if (S) {
            const F = S.optimizeNodes();
            S = this.else = Array.isArray(F) ? new d(F) : F;
          }
          if (S) {
            return g === !1
              ? S instanceof p ? S : S.nodes
              : this.nodes.length
              ? this
              : new p(pe(g), S instanceof p ? [S] : S.nodes);
          }
          if (!(g === !1 || !this.nodes.length)) return this;
        }
        optimizeNames(g, S) {
          var F;
          if (
            ((this.else = (F = this.else) === null || F === void 0
              ? void 0
              : F.optimizeNames(g, S)),
              !!(super.optimizeNames(g, S) || this.else))
          ) {
            return (this.condition = G(this.condition, g, S)), this;
          }
        }
        get names() {
          const g = super.names;
          return z(g, this.condition), this.else && q(g, this.else.names), g;
        }
      }
      p.kind = "if";
      class $ extends v {}
      $.kind = "for";
      class b extends $ {
        constructor(g) {
          super(), (this.iteration = g);
        }
        render(g) {
          return `for(${this.iteration})` + super.render(g);
        }
        optimizeNames(g, S) {
          if (super.optimizeNames(g, S)) {
            return (this.iteration = G(this.iteration, g, S)), this;
          }
        }
        get names() {
          return q(super.names, this.iteration.names);
        }
      }
      class w extends $ {
        constructor(g, S, F, L) {
          super(),
            (this.varKind = g),
            (this.name = S),
            (this.from = F),
            (this.to = L);
        }
        render(g) {
          const S = g.es5 ? t.varKinds.var : this.varKind,
            { name: F, from: L, to: V } = this;
          return `for(${S} ${F}=${L}; ${F}<${V}; ${F}++)` + super.render(g);
        }
        get names() {
          const g = z(super.names, this.from);
          return z(g, this.to);
        }
      }
      class N extends $ {
        constructor(g, S, F, L) {
          super(),
            (this.loop = g),
            (this.varKind = S),
            (this.name = F),
            (this.iterable = L);
        }
        render(g) {
          return (
            `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` +
            super.render(g)
          );
        }
        optimizeNames(g, S) {
          if (super.optimizeNames(g, S)) {
            return (this.iterable = G(this.iterable, g, S)), this;
          }
        }
        get names() {
          return q(super.names, this.iterable.names);
        }
      }
      class O extends v {
        constructor(g, S, F) {
          super(), (this.name = g), (this.args = S), (this.async = F);
        }
        render(g) {
          return (
            `${this.async ? "async " : ""}function ${this.name}(${this.args})` +
            super.render(g)
          );
        }
      }
      O.kind = "func";
      class E extends m {
        render(g) {
          return "return " + super.render(g);
        }
      }
      E.kind = "return";
      class D extends v {
        render(g) {
          let S = "try" + super.render(g);
          return (
            this.catch && (S += this.catch.render(g)),
              this.finally && (S += this.finally.render(g)),
              S
          );
        }
        optimizeNodes() {
          var g, S;
          return (
            super.optimizeNodes(),
              (g = this.catch) === null || g === void 0 || g.optimizeNodes(),
              (S = this.finally) === null || S === void 0 || S.optimizeNodes(),
              this
          );
        }
        optimizeNames(g, S) {
          var F, L;
          return (
            super.optimizeNames(g, S),
              (F = this.catch) === null || F === void 0 ||
              F.optimizeNames(g, S),
              (L = this.finally) === null ||
              L === void 0 ||
              L.optimizeNames(g, S),
              this
          );
        }
        get names() {
          const g = super.names;
          return (
            this.catch && q(g, this.catch.names),
              this.finally && q(g, this.finally.names),
              g
          );
        }
      }
      class R extends v {
        constructor(g) {
          super(), (this.error = g);
        }
        render(g) {
          return `catch(${this.error})` + super.render(g);
        }
      }
      R.kind = "catch";
      class k extends v {
        render(g) {
          return "finally" + super.render(g);
        }
      }
      k.kind = "finally";
      class B {
        constructor(g, S = {}) {
          (this._values = {}),
            (this._blockStarts = []),
            (this._constants = {}),
            (this.opts = {
              ...S,
              _n: S.lines
                ? `
`
                : "",
            }),
            (this._extScope = g),
            (this._scope = new t.Scope({ parent: g })),
            (this._nodes = [new y()]);
        }
        toString() {
          return this._root.render(this.opts);
        }
        name(g) {
          return this._scope.name(g);
        }
        scopeName(g) {
          return this._extScope.name(g);
        }
        scopeValue(g, S) {
          const F = this._extScope.value(g, S);
          return (
            (
              this._values[F.prefix] || (this._values[F.prefix] = new Set())
            ).add(F), F
          );
        }
        getScopeValue(g, S) {
          return this._extScope.getValue(g, S);
        }
        scopeRefs(g) {
          return this._extScope.scopeRefs(g, this._values);
        }
        scopeCode() {
          return this._extScope.scopeCode(this._values);
        }
        _def(g, S, F, L) {
          const V = this._scope.toName(S);
          return (
            F !== void 0 && L && (this._constants[V.str] = F),
              this._leafNode(new o(g, V, F)),
              V
          );
        }
        const(g, S, F) {
          return this._def(t.varKinds.const, g, S, F);
        }
        let(g, S, F) {
          return this._def(t.varKinds.let, g, S, F);
        }
        var(g, S, F) {
          return this._def(t.varKinds.var, g, S, F);
        }
        assign(g, S, F) {
          return this._leafNode(new s(g, S, F));
        }
        add(g, S) {
          return this._leafNode(new u(g, e.operators.ADD, S));
        }
        code(g) {
          return (
            typeof g == "function"
              ? g()
              : g !== r.nil && this._leafNode(new h(g)), this
          );
        }
        object(...g) {
          const S = ["{"];
          for (const [F, L] of g) {
            S.length > 1 && S.push(","),
              S.push(F),
              (F !== L || this.opts.es5) &&
              (S.push(":"), (0, r.addCodeArg)(S, L));
          }
          return S.push("}"), new r._Code(S);
        }
        if(g, S, F) {
          if ((this._blockNode(new p(g)), S && F)) {
            this.code(S).else().code(F).endIf();
          } else if (S) this.code(S).endIf();
          else if (F) {
            throw new Error('CodeGen: "else" body without "then" body');
          }
          return this;
        }
        elseIf(g) {
          return this._elseNode(new p(g));
        }
        else() {
          return this._elseNode(new d());
        }
        endIf() {
          return this._endBlockNode(p, d);
        }
        _for(g, S) {
          return this._blockNode(g), S && this.code(S).endFor(), this;
        }
        for(g, S) {
          return this._for(new b(g), S);
        }
        forRange(
          g,
          S,
          F,
          L,
          V = this.opts.es5 ? t.varKinds.var : t.varKinds.let,
        ) {
          const ee = this._scope.toName(g);
          return this._for(new w(V, ee, S, F), () => L(ee));
        }
        forOf(g, S, F, L = t.varKinds.const) {
          const V = this._scope.toName(g);
          if (this.opts.es5) {
            const ee = S instanceof r.Name ? S : this.var("_arr", S);
            return this.forRange("_i", 0, (0, r._)`${ee}.length`, (Q) => {
              this.var(V, (0, r._)`${ee}[${Q}]`), F(V);
            });
          }
          return this._for(new N("of", L, V, S), () => F(V));
        }
        forIn(g, S, F, L = this.opts.es5 ? t.varKinds.var : t.varKinds.const) {
          if (this.opts.ownProperties) {
            return this.forOf(g, (0, r._)`Object.keys(${S})`, F);
          }
          const V = this._scope.toName(g);
          return this._for(new N("in", L, V, S), () => F(V));
        }
        endFor() {
          return this._endBlockNode($);
        }
        label(g) {
          return this._leafNode(new l(g));
        }
        break(g) {
          return this._leafNode(new c(g));
        }
        return(g) {
          const S = new E();
          if ((this._blockNode(S), this.code(g), S.nodes.length !== 1)) {
            throw new Error('CodeGen: "return" should have one node');
          }
          return this._endBlockNode(E);
        }
        try(g, S, F) {
          if (!S && !F) {
            throw new Error('CodeGen: "try" without "catch" and "finally"');
          }
          const L = new D();
          if ((this._blockNode(L), this.code(g), S)) {
            const V = this.name("e");
            (this._currNode = L.catch = new R(V)), S(V);
          }
          return (
            F && ((this._currNode = L.finally = new k()), this.code(F)),
              this._endBlockNode(R, k)
          );
        }
        throw(g) {
          return this._leafNode(new f(g));
        }
        block(g, S) {
          return (
            this._blockStarts.push(this._nodes.length),
              g && this.code(g).endBlock(S),
              this
          );
        }
        endBlock(g) {
          const S = this._blockStarts.pop();
          if (S === void 0) {
            throw new Error("CodeGen: not in self-balancing block");
          }
          const F = this._nodes.length - S;
          if (F < 0 || (g !== void 0 && F !== g)) {
            throw new Error(
              `CodeGen: wrong number of nodes: ${F} vs ${g} expected`,
            );
          }
          return (this._nodes.length = S), this;
        }
        func(g, S = r.nil, F, L) {
          return (
            this._blockNode(new O(g, S, F)), L && this.code(L).endFunc(), this
          );
        }
        endFunc() {
          return this._endBlockNode(O);
        }
        optimize(g = 1) {
          for (; g-- > 0;) {
            this._root.optimizeNodes(),
              this._root.optimizeNames(this._root.names, this._constants);
          }
        }
        _leafNode(g) {
          return this._currNode.nodes.push(g), this;
        }
        _blockNode(g) {
          this._currNode.nodes.push(g), this._nodes.push(g);
        }
        _endBlockNode(g, S) {
          const F = this._currNode;
          if (F instanceof g || (S && F instanceof S)) {
            return this._nodes.pop(), this;
          }
          throw new Error(
            `CodeGen: not in block "${S ? `${g.kind}/${S.kind}` : g.kind}"`,
          );
        }
        _elseNode(g) {
          const S = this._currNode;
          if (!(S instanceof p)) {
            throw new Error('CodeGen: "else" without "if"');
          }
          return (this._currNode = S.else = g), this;
        }
        get _root() {
          return this._nodes[0];
        }
        get _currNode() {
          const g = this._nodes;
          return g[g.length - 1];
        }
        set _currNode(g) {
          const S = this._nodes;
          S[S.length - 1] = g;
        }
      }
      e.CodeGen = B;
      function q(C, g) {
        for (const S in g) C[S] = (C[S] || 0) + (g[S] || 0);
        return C;
      }
      function z(C, g) {
        return g instanceof r._CodeOrName ? q(C, g.names) : C;
      }
      function G(C, g, S) {
        if (C instanceof r.Name) return F(C);
        if (!L(C)) return C;
        return new r._Code(
          C._items.reduce(
            (V, ee) => (
              ee instanceof r.Name && (ee = F(ee)),
                ee instanceof r._Code ? V.push(...ee._items) : V.push(ee),
                V
            ),
            [],
          ),
        );
        function F(V) {
          const ee = S[V.str];
          return ee === void 0 || g[V.str] !== 1 ? V : (delete g[V.str], ee);
        }
        function L(V) {
          return (
            V instanceof r._Code &&
            V._items.some(
              (ee) =>
                ee instanceof r.Name && g[ee.str] === 1 && S[ee.str] !== void 0,
            )
          );
        }
      }
      function H(C, g) {
        for (const S in g) C[S] = (C[S] || 0) - (g[S] || 0);
      }
      function pe(C) {
        return typeof C == "boolean" || typeof C == "number" || C === null
          ? !C
          : (0, r._)`!${U(C)}`;
      }
      e.not = pe;
      const we = I(e.operators.AND);
      function le(...C) {
        return C.reduce(we);
      }
      e.and = le;
      const ne = I(e.operators.OR);
      function x(...C) {
        return C.reduce(ne);
      }
      e.or = x;
      function I(C) {
        return (g, S) =>
          g === r.nil ? S : S === r.nil ? g : (0, r._)`${U(g)} ${C} ${U(S)}`;
      }
      function U(C) {
        return C instanceof r.Name ? C : (0, r._)`(${C})`;
      }
    })(te);
  var se = {};
  (function (e) {
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.checkStrictMode =
        e.getErrorPath =
        e.Type =
        e.useFunc =
        e.setEvaluated =
        e.evaluatedPropsToName =
        e.mergeEvaluated =
        e.eachItem =
        e.unescapeJsonPointer =
        e.escapeJsonPointer =
        e.escapeFragment =
        e.unescapeFragment =
        e.schemaRefOrVal =
        e.schemaHasRulesButRef =
        e.schemaHasRules =
        e.checkUnknownRules =
        e.alwaysValidSchema =
        e.toHash =
          void 0);
    const r = te,
      t = bn;
    function n(O) {
      const E = {};
      for (const D of O) E[D] = !0;
      return E;
    }
    e.toHash = n;
    function a(O, E) {
      return typeof E == "boolean"
        ? E
        : Object.keys(E).length === 0
        ? !0
        : (i(O, E), !o(E, O.self.RULES.all));
    }
    e.alwaysValidSchema = a;
    function i(O, E = O.schema) {
      const { opts: D, self: R } = O;
      if (!D.strictSchema || typeof E == "boolean") return;
      const k = R.RULES.keywords;
      for (const B in E) k[B] || N(O, `unknown keyword: "${B}"`);
    }
    e.checkUnknownRules = i;
    function o(O, E) {
      if (typeof O == "boolean") return !O;
      for (const D in O) if (E[D]) return !0;
      return !1;
    }
    e.schemaHasRules = o;
    function s(O, E) {
      if (typeof O == "boolean") return !O;
      for (const D in O) if (D !== "$ref" && E.all[D]) return !0;
      return !1;
    }
    e.schemaHasRulesButRef = s;
    function u({ topSchemaRef: O, schemaPath: E }, D, R, k) {
      if (!k) {
        if (typeof D == "number" || typeof D == "boolean") return D;
        if (typeof D == "string") return (0, r._)`${D}`;
      }
      return (0, r._)`${O}${E}${(0, r.getProperty)(R)}`;
    }
    e.schemaRefOrVal = u;
    function l(O) {
      return h(decodeURIComponent(O));
    }
    e.unescapeFragment = l;
    function c(O) {
      return encodeURIComponent(f(O));
    }
    e.escapeFragment = c;
    function f(O) {
      return typeof O == "number"
        ? `${O}`
        : O.replace(/~/g, "~0").replace(/\//g, "~1");
    }
    e.escapeJsonPointer = f;
    function h(O) {
      return O.replace(/~1/g, "/").replace(/~0/g, "~");
    }
    e.unescapeJsonPointer = h;
    function m(O, E) {
      if (Array.isArray(O)) for (const D of O) E(D);
      else E(O);
    }
    e.eachItem = m;
    function v({
      mergeNames: O,
      mergeToName: E,
      mergeValues: D,
      resultToName: R,
    }) {
      return (k, B, q, z) => {
        const G = q === void 0
          ? B
          : q instanceof r.Name
          ? (B instanceof r.Name ? O(k, B, q) : E(k, B, q), q)
          : B instanceof r.Name
          ? (E(k, q, B), B)
          : D(B, q);
        return z === r.Name && !(G instanceof r.Name) ? R(k, G) : G;
      };
    }
    e.mergeEvaluated = {
      props: v({
        mergeNames: (O, E, D) =>
          O.if((0, r._)`${D} !== true && ${E} !== undefined`, () => {
            O.if(
              (0, r._)`${E} === true`,
              () => O.assign(D, !0),
              () =>
                O.assign(D, (0, r._)`${D} || {}`).code(
                  (0, r._)`Object.assign(${D}, ${E})`,
                ),
            );
          }),
        mergeToName: (O, E, D) =>
          O.if((0, r._)`${D} !== true`, () => {
            E === !0
              ? O.assign(D, !0)
              : (O.assign(D, (0, r._)`${D} || {}`), d(O, D, E));
          }),
        mergeValues: (O, E) => (O === !0 ? !0 : { ...O, ...E }),
        resultToName: y,
      }),
      items: v({
        mergeNames: (O, E, D) =>
          O.if((0, r._)`${D} !== true && ${E} !== undefined`, () =>
            O.assign(
              D,
              (0, r._)`${E} === true ? true : ${D} > ${E} ? ${D} : ${E}`,
            )),
        mergeToName: (O, E, D) =>
          O.if(
            (0, r._)`${D} !== true`,
            () =>
              O.assign(D, E === !0 ? !0 : (0, r._)`${D} > ${E} ? ${D} : ${E}`),
          ),
        mergeValues: (O, E) => (O === !0 ? !0 : Math.max(O, E)),
        resultToName: (O, E) => O.var("items", E),
      }),
    };
    function y(O, E) {
      if (E === !0) return O.var("props", !0);
      const D = O.var("props", (0, r._)`{}`);
      return E !== void 0 && d(O, D, E), D;
    }
    e.evaluatedPropsToName = y;
    function d(O, E, D) {
      Object.keys(D).forEach((R) =>
        O.assign((0, r._)`${E}${(0, r.getProperty)(R)}`, !0)
      );
    }
    e.setEvaluated = d;
    const p = {};
    function $(O, E) {
      return O.scopeValue("func", {
        ref: E,
        code: p[E.code] || (p[E.code] = new t._Code(E.code)),
      });
    }
    e.useFunc = $;
    var b;
    (function (O) {
      (O[O.Num = 0] = "Num"), (O[O.Str = 1] = "Str");
    })(b = e.Type || (e.Type = {}));
    function w(O, E, D) {
      if (O instanceof r.Name) {
        const R = E === b.Num;
        return D
          ? R ? (0, r._)`"[" + ${O} + "]"` : (0, r._)`"['" + ${O} + "']"`
          : R
          ? (0, r._)`"/" + ${O}`
          : (0, r._)`"/" + ${O}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
      }
      return D ? (0, r.getProperty)(O).toString() : "/" + f(O);
    }
    e.getErrorPath = w;
    function N(O, E, D = O.opts.strictSchema) {
      if (D) {
        if (((E = `strict mode: ${E}`), D === !0)) throw new Error(E);
        O.self.logger.warn(E);
      }
    }
    e.checkStrictMode = N;
  })(se);
  var dr = {};
  Object.defineProperty(dr, "__esModule", { value: !0 });
  const ke = te,
    K2 = {
      data: new ke.Name("data"),
      valCxt: new ke.Name("valCxt"),
      instancePath: new ke.Name("instancePath"),
      parentData: new ke.Name("parentData"),
      parentDataProperty: new ke.Name("parentDataProperty"),
      rootData: new ke.Name("rootData"),
      dynamicAnchors: new ke.Name("dynamicAnchors"),
      vErrors: new ke.Name("vErrors"),
      errors: new ke.Name("errors"),
      this: new ke.Name("this"),
      self: new ke.Name("self"),
      scope: new ke.Name("scope"),
      json: new ke.Name("json"),
      jsonPos: new ke.Name("jsonPos"),
      jsonLen: new ke.Name("jsonLen"),
      jsonPart: new ke.Name("jsonPart"),
    };
  (dr.default = K2),
    (function (e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.extendErrors =
          e.resetErrorsCount =
          e.reportExtraError =
          e.reportError =
          e.keyword$DataError =
          e.keywordError =
            void 0);
      const r = te,
        t = se,
        n = dr;
      (e.keywordError = {
        message: ({ keyword: d }) =>
          (0, r.str)`must pass "${d}" keyword validation`,
      }),
        (e.keyword$DataError = {
          message: ({ keyword: d, schemaType: p }) =>
            p
              ? (0, r.str)`"${d}" keyword must be ${p} ($data)`
              : (0, r.str)`"${d}" keyword is invalid ($data)`,
        });
      function a(d, p = e.keywordError, $, b) {
        const { it: w } = d,
          { gen: N, compositeRule: O, allErrors: E } = w,
          D = f(d, p, $);
        b ?? (O || E) ? u(N, D) : l(w, (0, r._)`[${D}]`);
      }
      e.reportError = a;
      function i(d, p = e.keywordError, $) {
        const { it: b } = d,
          { gen: w, compositeRule: N, allErrors: O } = b,
          E = f(d, p, $);
        u(w, E), N || O || l(b, n.default.vErrors);
      }
      e.reportExtraError = i;
      function o(d, p) {
        d.assign(n.default.errors, p),
          d.if((0, r._)`${n.default.vErrors} !== null`, () =>
            d.if(
              p,
              () => d.assign((0, r._)`${n.default.vErrors}.length`, p),
              () => d.assign(n.default.vErrors, null),
            ));
      }
      e.resetErrorsCount = o;
      function s({
        gen: d,
        keyword: p,
        schemaValue: $,
        data: b,
        errsCount: w,
        it: N,
      }) {
        if (w === void 0) throw new Error("ajv implementation error");
        const O = d.name("err");
        d.forRange("i", w, n.default.errors, (E) => {
          d.const(O, (0, r._)`${n.default.vErrors}[${E}]`),
            d.if((0, r._)`${O}.instancePath === undefined`, () =>
              d.assign(
                (0, r._)`${O}.instancePath`,
                (0, r.strConcat)(n.default.instancePath, N.errorPath),
              )),
            d.assign(
              (0, r._)`${O}.schemaPath`,
              (0, r.str)`${N.errSchemaPath}/${p}`,
            ),
            N.opts.verbose &&
            (d.assign((0, r._)`${O}.schema`, $),
              d.assign((0, r._)`${O}.data`, b));
        });
      }
      e.extendErrors = s;
      function u(d, p) {
        const $ = d.const("err", p);
        d.if(
          (0, r._)`${n.default.vErrors} === null`,
          () => d.assign(n.default.vErrors, (0, r._)`[${$}]`),
          (0, r._)`${n.default.vErrors}.push(${$})`,
        ), d.code((0, r._)`${n.default.errors}++`);
      }
      function l(d, p) {
        const { gen: $, validateName: b, schemaEnv: w } = d;
        w.$async
          ? $.throw((0, r._)`new ${d.ValidationError}(${p})`)
          : ($.assign((0, r._)`${b}.errors`, p), $.return(!1));
      }
      const c = {
        keyword: new r.Name("keyword"),
        schemaPath: new r.Name("schemaPath"),
        params: new r.Name("params"),
        propertyName: new r.Name("propertyName"),
        message: new r.Name("message"),
        schema: new r.Name("schema"),
        parentSchema: new r.Name("parentSchema"),
      };
      function f(d, p, $) {
        const { createErrors: b } = d.it;
        return b === !1 ? (0, r._)`{}` : h(d, p, $);
      }
      function h(d, p, $ = {}) {
        const { gen: b, it: w } = d,
          N = [m(w, $), v(d, $)];
        return y(d, p, N), b.object(...N);
      }
      function m({ errorPath: d }, { instancePath: p }) {
        const $ = p ? (0, r.str)`${d}${(0, t.getErrorPath)(p, t.Type.Str)}` : d;
        return [
          n.default.instancePath,
          (0, r.strConcat)(n.default.instancePath, $),
        ];
      }
      function v(
        { keyword: d, it: { errSchemaPath: p } },
        { schemaPath: $, parentSchema: b },
      ) {
        let w = b ? p : (0, r.str)`${p}/${d}`;
        return (
          $ && (w = (0, r.str)`${w}${(0, t.getErrorPath)($, t.Type.Str)}`),
            [c.schemaPath, w]
        );
      }
      function y(d, { params: p, message: $ }, b) {
        const { keyword: w, data: N, schemaValue: O, it: E } = d,
          { opts: D, propertyName: R, topSchemaRef: k, schemaPath: B } = E;
        b.push(
          [c.keyword, w],
          [c.params, typeof p == "function" ? p(d) : p || (0, r._)`{}`],
        ),
          D.messages && b.push([c.message, typeof $ == "function" ? $(d) : $]),
          D.verbose &&
          b.push(
            [c.schema, O],
            [c.parentSchema, (0, r._)`${k}${B}`],
            [n.default.data, N],
          ),
          R && b.push([c.propertyName, R]);
      }
    })(_n),
    Object.defineProperty(jt, "__esModule", { value: !0 }),
    (jt.boolOrEmptySchema = jt.topBoolOrEmptySchema = void 0);
  const z2 = _n,
    G2 = te,
    W2 = dr,
    H2 = { message: "boolean schema is false" };
  function Y2(e) {
    const { gen: r, schema: t, validateName: n } = e;
    t === !1
      ? xf(e, !1)
      : typeof t == "object" && t.$async === !0
      ? r.return(W2.default.data)
      : (r.assign((0, G2._)`${n}.errors`, null), r.return(!0));
  }
  jt.topBoolOrEmptySchema = Y2;
  function J2(e, r) {
    const { gen: t, schema: n } = e;
    n === !1 ? (t.var(r, !1), xf(e)) : t.var(r, !0);
  }
  jt.boolOrEmptySchema = J2;
  function xf(e, r) {
    const { gen: t, data: n } = e,
      a = {
        gen: t,
        keyword: "false schema",
        data: n,
        schema: !1,
        schemaCode: !1,
        schemaValue: !1,
        params: {},
        it: e,
      };
    (0, z2.reportError)(a, H2, void 0, r);
  }
  var Sn = {},
    et = {};
  Object.defineProperty(et, "__esModule", { value: !0 }),
    (et.getRules = et.isJSONType = void 0);
  const X2 = [
      "string",
      "number",
      "integer",
      "boolean",
      "null",
      "object",
      "array",
    ],
    Z2 = new Set(X2);
  function Q2(e) {
    return typeof e == "string" && Z2.has(e);
  }
  et.isJSONType = Q2;
  function ej() {
    const e = {
      number: { type: "number", rules: [] },
      string: { type: "string", rules: [] },
      array: { type: "array", rules: [] },
      object: { type: "object", rules: [] },
    };
    return {
      types: { ...e, integer: !0, boolean: !0, null: !0 },
      rules: [{ rules: [] }, e.number, e.string, e.array, e.object],
      post: { rules: [] },
      all: {},
      keywords: {},
    };
  }
  et.getRules = ej;
  var Or = {};
  Object.defineProperty(Or, "__esModule", { value: !0 }),
    (Or.shouldUseRule = Or.shouldUseGroup = Or.schemaHasRulesForType = void 0);
  function rj({ schema: e, self: r }, t) {
    const n = r.RULES.types[t];
    return n && n !== !0 && qf(e, n);
  }
  Or.schemaHasRulesForType = rj;
  function qf(e, r) {
    return r.rules.some((t) => Bf(e, t));
  }
  Or.shouldUseGroup = qf;
  function Bf(e, r) {
    var t;
    return (
      e[r.keyword] !== void 0 ||
      ((t = r.definition.implements) === null || t === void 0
        ? void 0
        : t.some((n) => e[n] !== void 0))
    );
  }
  (Or.shouldUseRule = Bf),
    (function (e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.reportTypeError =
          e.checkDataTypes =
          e.checkDataType =
          e.coerceAndCheckDataType =
          e.getJSONTypes =
          e.getSchemaTypes =
          e.DataType =
            void 0);
      const r = et,
        t = Or,
        n = _n,
        a = te,
        i = se;
      var o;
      (function (b) {
        (b[b.Correct = 0] = "Correct"), (b[b.Wrong = 1] = "Wrong");
      })(o = e.DataType || (e.DataType = {}));
      function s(b) {
        const w = u(b.type);
        if (w.includes("null")) {
          if (b.nullable === !1) {
            throw new Error("type: null contradicts nullable: false");
          }
        } else {
          if (!w.length && b.nullable !== void 0) {
            throw new Error('"nullable" cannot be used without "type"');
          }
          b.nullable === !0 && w.push("null");
        }
        return w;
      }
      e.getSchemaTypes = s;
      function u(b) {
        const w = Array.isArray(b) ? b : b ? [b] : [];
        if (w.every(r.isJSONType)) return w;
        throw new Error("type must be JSONType or JSONType[]: " + w.join(","));
      }
      e.getJSONTypes = u;
      function l(b, w) {
        const { gen: N, data: O, opts: E } = b,
          D = f(w, E.coerceTypes),
          R = w.length > 0 &&
            !(
              D.length === 0 &&
              w.length === 1 &&
              (0, t.schemaHasRulesForType)(b, w[0])
            );
        if (R) {
          const k = y(w, O, E.strictNumbers, o.Wrong);
          N.if(k, () => {
            D.length ? h(b, w, D) : p(b);
          });
        }
        return R;
      }
      e.coerceAndCheckDataType = l;
      const c = new Set(["string", "number", "integer", "boolean", "null"]);
      function f(b, w) {
        return w
          ? b.filter((N) => c.has(N) || (w === "array" && N === "array"))
          : [];
      }
      function h(b, w, N) {
        const { gen: O, data: E, opts: D } = b,
          R = O.let("dataType", (0, a._)`typeof ${E}`),
          k = O.let("coerced", (0, a._)`undefined`);
        D.coerceTypes === "array" &&
        O.if(
          (0, a._)`${R} == 'object' && Array.isArray(${E}) && ${E}.length == 1`,
          () =>
            O.assign(E, (0, a._)`${E}[0]`)
              .assign(R, (0, a._)`typeof ${E}`)
              .if(y(w, E, D.strictNumbers), () => O.assign(k, E)),
        ), O.if((0, a._)`${k} !== undefined`);
        for (const q of N) {
          (c.has(q) || (q === "array" && D.coerceTypes === "array")) && B(q);
        }
        O.else(),
          p(b),
          O.endIf(),
          O.if((0, a._)`${k} !== undefined`, () => {
            O.assign(E, k), m(b, k);
          });
        function B(q) {
          switch (q) {
            case "string":
              O.elseIf((0, a._)`${R} == "number" || ${R} == "boolean"`)
                .assign(k, (0, a._)`"" + ${E}`)
                .elseIf((0, a._)`${E} === null`)
                .assign(k, (0, a._)`""`);
              return;
            case "number":
              O.elseIf(
                (0, a._)`${R} == "boolean" || ${E} === null
              || (${R} == "string" && ${E} && ${E} == +${E})`,
              ).assign(k, (0, a._)`+${E}`);
              return;
            case "integer":
              O.elseIf(
                (0, a._)`${R} === "boolean" || ${E} === null
              || (${R} === "string" && ${E} && ${E} == +${E} && !(${E} % 1))`,
              ).assign(k, (0, a._)`+${E}`);
              return;
            case "boolean":
              O.elseIf(
                (0, a._)`${E} === "false" || ${E} === 0 || ${E} === null`,
              )
                .assign(k, !1)
                .elseIf((0, a._)`${E} === "true" || ${E} === 1`)
                .assign(k, !0);
              return;
            case "null":
              O.elseIf((0, a._)`${E} === "" || ${E} === 0 || ${E} === false`),
                O.assign(k, null);
              return;
            case "array":
              O.elseIf(
                (0, a._)`${R} === "string" || ${R} === "number"
              || ${R} === "boolean" || ${E} === null`,
              ).assign(k, (0, a._)`[${E}]`);
          }
        }
      }
      function m({ gen: b, parentData: w, parentDataProperty: N }, O) {
        b.if((0, a._)`${w} !== undefined`, () =>
          b.assign((0, a._)`${w}[${N}]`, O));
      }
      function v(b, w, N, O = o.Correct) {
        const E = O === o.Correct ? a.operators.EQ : a.operators.NEQ;
        let D;
        switch (b) {
          case "null":
            return (0, a._)`${w} ${E} null`;
          case "array":
            D = (0, a._)`Array.isArray(${w})`;
            break;
          case "object":
            D =
              (0, a._)`${w} && typeof ${w} == "object" && !Array.isArray(${w})`;
            break;
          case "integer":
            D = R((0, a._)`!(${w} % 1) && !isNaN(${w})`);
            break;
          case "number":
            D = R();
            break;
          default:
            return (0, a._)`typeof ${w} ${E} ${b}`;
        }
        return O === o.Correct ? D : (0, a.not)(D);
        function R(k = a.nil) {
          return (0, a.and)(
            (0, a._)`typeof ${w} == "number"`,
            k,
            N ? (0, a._)`isFinite(${w})` : a.nil,
          );
        }
      }
      e.checkDataType = v;
      function y(b, w, N, O) {
        if (b.length === 1) return v(b[0], w, N, O);
        let E;
        const D = (0, i.toHash)(b);
        if (D.array && D.object) {
          const R = (0, a._)`typeof ${w} != "object"`;
          (E = D.null ? R : (0, a._)`!${w} || ${R}`),
            delete D.null,
            delete D.array,
            delete D.object;
        } else E = a.nil;
        D.number && delete D.integer;
        for (const R in D) E = (0, a.and)(E, v(R, w, N, O));
        return E;
      }
      e.checkDataTypes = y;
      const d = {
        message: ({ schema: b }) => `must be ${b}`,
        params: ({ schema: b, schemaValue: w }) =>
          typeof b == "string"
            ? (0, a._)`{type: ${b}}`
            : (0, a._)`{type: ${w}}`,
      };
      function p(b) {
        const w = $(b);
        (0, n.reportError)(w, d);
      }
      e.reportTypeError = p;
      function $(b) {
        const { gen: w, data: N, schema: O } = b,
          E = (0, i.schemaRefOrVal)(b, O, "type");
        return {
          gen: w,
          keyword: "type",
          data: N,
          schema: O.type,
          schemaCode: E,
          schemaValue: E,
          parentSchema: O,
          params: {},
          it: b,
        };
      }
    })(Sn);
  var Fa = {};
  Object.defineProperty(Fa, "__esModule", { value: !0 }),
    (Fa.assignDefaults = void 0);
  const Mt = te,
    tj = se;
  function nj(e, r) {
    const { properties: t, items: n } = e.schema;
    if (r === "object" && t) for (const a in t) Vf(e, a, t[a].default);
    else {
      r === "array" &&
        Array.isArray(n) &&
        n.forEach((a, i) => Vf(e, i, a.default));
    }
  }
  Fa.assignDefaults = nj;
  function Vf(e, r, t) {
    const { gen: n, compositeRule: a, data: i, opts: o } = e;
    if (t === void 0) return;
    const s = (0, Mt._)`${i}${(0, Mt.getProperty)(r)}`;
    if (a) {
      (0, tj.checkStrictMode)(e, `default is ignored for: ${s}`);
      return;
    }
    let u = (0, Mt._)`${s} === undefined`;
    o.useDefaults === "empty" &&
    (u = (0, Mt._)`${u} || ${s} === null || ${s} === ""`),
      n.if(u, (0, Mt._)`${s} = ${(0, Mt.stringify)(t)}`);
  }
  var hr = {},
    ae = {};
  Object.defineProperty(ae, "__esModule", { value: !0 }),
    (ae.validateUnion =
      ae.validateArray =
      ae.usePattern =
      ae.callValidateCode =
      ae.schemaProperties =
      ae.allSchemaProperties =
      ae.noPropertyInData =
      ae.propertyInData =
      ae.isOwnProperty =
      ae.hasPropFunc =
      ae.reportMissingProp =
      ae.checkMissingProp =
      ae.checkReportMissingProp =
        void 0);
  const Se = te,
    xo = se,
    Mr = dr,
    aj = se;
  function ij(e, r) {
    const { gen: t, data: n, it: a } = e;
    t.if(Bo(t, n, r, a.opts.ownProperties), () => {
      e.setParams({ missingProperty: (0, Se._)`${r}` }, !0), e.error();
    });
  }
  ae.checkReportMissingProp = ij;
  function oj({ gen: e, data: r, it: { opts: t } }, n, a) {
    return (0, Se.or)(
      ...n.map((i) =>
        (0, Se.and)(Bo(e, r, i, t.ownProperties), (0, Se._)`${a} = ${i}`)
      ),
    );
  }
  ae.checkMissingProp = oj;
  function sj(e, r) {
    e.setParams({ missingProperty: r }, !0), e.error();
  }
  ae.reportMissingProp = sj;
  function Kf(e) {
    return e.scopeValue("func", {
      ref: Object.prototype.hasOwnProperty,
      code: (0, Se._)`Object.prototype.hasOwnProperty`,
    });
  }
  ae.hasPropFunc = Kf;
  function qo(e, r, t) {
    return (0, Se._)`${Kf(e)}.call(${r}, ${t})`;
  }
  ae.isOwnProperty = qo;
  function uj(e, r, t, n) {
    const a = (0, Se._)`${r}${(0, Se.getProperty)(t)} !== undefined`;
    return n ? (0, Se._)`${a} && ${qo(e, r, t)}` : a;
  }
  ae.propertyInData = uj;
  function Bo(e, r, t, n) {
    const a = (0, Se._)`${r}${(0, Se.getProperty)(t)} === undefined`;
    return n ? (0, Se.or)(a, (0, Se.not)(qo(e, r, t))) : a;
  }
  ae.noPropertyInData = Bo;
  function zf(e) {
    return e ? Object.keys(e).filter((r) => r !== "__proto__") : [];
  }
  ae.allSchemaProperties = zf;
  function lj(e, r) {
    return zf(r).filter((t) => !(0, xo.alwaysValidSchema)(e, r[t]));
  }
  ae.schemaProperties = lj;
  function cj(
    {
      schemaCode: e,
      data: r,
      it: { gen: t, topSchemaRef: n, schemaPath: a, errorPath: i },
      it: o,
    },
    s,
    u,
    l,
  ) {
    const c = l ? (0, Se._)`${e}, ${r}, ${n}${a}` : r,
      f = [
        [
          Mr.default.instancePath,
          (0, Se.strConcat)(Mr.default.instancePath, i),
        ],
        [Mr.default.parentData, o.parentData],
        [Mr.default.parentDataProperty, o.parentDataProperty],
        [Mr.default.rootData, Mr.default.rootData],
      ];
    o.opts.dynamicRef &&
      f.push([Mr.default.dynamicAnchors, Mr.default.dynamicAnchors]);
    const h = (0, Se._)`${c}, ${t.object(...f)}`;
    return u !== Se.nil
      ? (0, Se._)`${s}.call(${u}, ${h})`
      : (0, Se._)`${s}(${h})`;
  }
  ae.callValidateCode = cj;
  const fj = (0, Se._)`new RegExp`;
  function dj({ gen: e, it: { opts: r } }, t) {
    const n = r.unicodeRegExp ? "u" : "",
      { regExp: a } = r.code,
      i = a(t, n);
    return e.scopeValue("pattern", {
      key: i.toString(),
      ref: i,
      code: (0, Se._)`${
        a.code === "new RegExp" ? fj : (0, aj.useFunc)(e, a)
      }(${t}, ${n})`,
    });
  }
  ae.usePattern = dj;
  function hj(e) {
    const { gen: r, data: t, keyword: n, it: a } = e,
      i = r.name("valid");
    if (a.allErrors) {
      const s = r.let("valid", !0);
      return o(() => r.assign(s, !1)), s;
    }
    return r.var(i, !0), o(() => r.break()), i;
    function o(s) {
      const u = r.const("len", (0, Se._)`${t}.length`);
      r.forRange("i", 0, u, (l) => {
        e.subschema({ keyword: n, dataProp: l, dataPropType: xo.Type.Num }, i),
          r.if((0, Se.not)(i), s);
      });
    }
  }
  ae.validateArray = hj;
  function mj(e) {
    const { gen: r, schema: t, keyword: n, it: a } = e;
    if (!Array.isArray(t)) throw new Error("ajv implementation error");
    if (t.some((u) => (0, xo.alwaysValidSchema)(a, u)) && !a.opts.unevaluated) {
      return;
    }
    const o = r.let("valid", !1),
      s = r.name("_valid");
    r.block(() =>
      t.forEach((u, l) => {
        const c = e.subschema(
          { keyword: n, schemaProp: l, compositeRule: !0 },
          s,
        );
        r.assign(o, (0, Se._)`${o} || ${s}`),
          e.mergeValidEvaluated(c, s) || r.if((0, Se.not)(o));
      })
    ),
      e.result(
        o,
        () => e.reset(),
        () => e.error(!0),
      );
  }
  (ae.validateUnion = mj),
    Object.defineProperty(hr, "__esModule", { value: !0 }),
    (hr.validateKeywordUsage =
      hr.validSchemaType =
      hr.funcKeywordCode =
      hr.macroKeywordCode =
        void 0);
  const xe = te,
    rt = dr,
    pj = ae,
    vj = _n;
  function yj(e, r) {
    const { gen: t, keyword: n, schema: a, parentSchema: i, it: o } = e,
      s = r.macro.call(o.self, a, i, o),
      u = Wf(t, n, s);
    o.opts.validateSchema !== !1 && o.self.validateSchema(s, !0);
    const l = t.name("valid");
    e.subschema(
      {
        schema: s,
        schemaPath: xe.nil,
        errSchemaPath: `${o.errSchemaPath}/${n}`,
        topSchemaRef: u,
        compositeRule: !0,
      },
      l,
    ), e.pass(l, () => e.error(!0));
  }
  hr.macroKeywordCode = yj;
  function gj(e, r) {
    var t;
    const {
      gen: n,
      keyword: a,
      schema: i,
      parentSchema: o,
      $data: s,
      it: u,
    } = e;
    _j(u, r);
    const l = !s && r.compile ? r.compile.call(u.self, i, o, u) : r.validate,
      c = Wf(n, a, l),
      f = n.let("valid");
    e.block$data(f, h), e.ok((t = r.valid) !== null && t !== void 0 ? t : f);
    function h() {
      if (r.errors === !1) y(), r.modifying && Gf(e), d(() => e.error());
      else {
        const p = r.async ? m() : v();
        r.modifying && Gf(e), d(() => $j(e, p));
      }
    }
    function m() {
      const p = n.let("ruleErrs", null);
      return (
        n.try(
          () => y((0, xe._)`await `),
          ($) =>
            n.assign(f, !1).if(
              (0, xe._)`${$} instanceof ${u.ValidationError}`,
              () => n.assign(p, (0, xe._)`${$}.errors`),
              () => n.throw($),
            ),
        ), p
      );
    }
    function v() {
      const p = (0, xe._)`${c}.errors`;
      return n.assign(p, null), y(xe.nil), p;
    }
    function y(p = r.async ? (0, xe._)`await ` : xe.nil) {
      const $ = u.opts.passContext ? rt.default.this : rt.default.self,
        b = !(("compile" in r && !s) || r.schema === !1);
      n.assign(
        f,
        (0, xe._)`${p}${(0, pj.callValidateCode)(e, c, $, b)}`,
        r.modifying,
      );
    }
    function d(p) {
      var $;
      n.if((0, xe.not)(($ = r.valid) !== null && $ !== void 0 ? $ : f), p);
    }
  }
  hr.funcKeywordCode = gj;
  function Gf(e) {
    const { gen: r, data: t, it: n } = e;
    r.if(
      n.parentData,
      () => r.assign(t, (0, xe._)`${n.parentData}[${n.parentDataProperty}]`),
    );
  }
  function $j(e, r) {
    const { gen: t } = e;
    t.if(
      (0, xe._)`Array.isArray(${r})`,
      () => {
        t
          .assign(
            rt.default.vErrors,
            (0,
              xe._)`${rt.default.vErrors} === null ? ${r} : ${rt.default.vErrors}.concat(${r})`,
          )
          .assign(rt.default.errors, (0, xe._)`${rt.default.vErrors}.length`),
          (0, vj.extendErrors)(e);
      },
      () => e.error(),
    );
  }
  function _j({ schemaEnv: e }, r) {
    if (r.async && !e.$async) throw new Error("async keyword in sync schema");
  }
  function Wf(e, r, t) {
    if (t === void 0) throw new Error(`keyword "${r}" failed to compile`);
    return e.scopeValue(
      "keyword",
      typeof t == "function"
        ? { ref: t }
        : { ref: t, code: (0, xe.stringify)(t) },
    );
  }
  function bj(e, r, t = !1) {
    return (
      !r.length ||
      r.some((n) =>
        n === "array"
          ? Array.isArray(e)
          : n === "object"
          ? e && typeof e == "object" && !Array.isArray(e)
          : typeof e == n || (t && typeof e > "u")
      )
    );
  }
  hr.validSchemaType = bj;
  function Sj({ schema: e, opts: r, self: t, errSchemaPath: n }, a, i) {
    if (Array.isArray(a.keyword) ? !a.keyword.includes(i) : a.keyword !== i) {
      throw new Error("ajv implementation error");
    }
    const o = a.dependencies;
    if (
      o != null && o.some((s) => !Object.prototype.hasOwnProperty.call(e, s))
    ) {
      throw new Error(
        `parent schema must have dependencies of ${i}: ${o.join(",")}`,
      );
    }
    if (a.validateSchema && !a.validateSchema(e[i])) {
      const u = `keyword "${i}" value is invalid at path "${n}": ` +
        t.errorsText(a.validateSchema.errors);
      if (r.validateSchema === "log") t.logger.error(u);
      else throw new Error(u);
    }
  }
  hr.validateKeywordUsage = Sj;
  var Rr = {};
  Object.defineProperty(Rr, "__esModule", { value: !0 }),
    (Rr.extendSubschemaMode =
      Rr.extendSubschemaData =
      Rr.getSubschema =
        void 0);
  const mr = te,
    Hf = se;
  function Ej(
    e,
    {
      keyword: r,
      schemaProp: t,
      schema: n,
      schemaPath: a,
      errSchemaPath: i,
      topSchemaRef: o,
    },
  ) {
    if (r !== void 0 && n !== void 0) {
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    }
    if (r !== void 0) {
      const s = e.schema[r];
      return t === void 0
        ? {
          schema: s,
          schemaPath: (0, mr._)`${e.schemaPath}${(0, mr.getProperty)(r)}`,
          errSchemaPath: `${e.errSchemaPath}/${r}`,
        }
        : {
          schema: s[t],
          schemaPath: (0, mr._)`${e.schemaPath}${(0, mr.getProperty)(r)}${
            (0, mr.getProperty)(t)
          }`,
          errSchemaPath: `${e.errSchemaPath}/${r}/${
            (0, Hf.escapeFragment)(
              t,
            )
          }`,
        };
    }
    if (n !== void 0) {
      if (a === void 0 || i === void 0 || o === void 0) {
        throw new Error(
          '"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"',
        );
      }
      return { schema: n, schemaPath: a, topSchemaRef: o, errSchemaPath: i };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  Rr.getSubschema = Ej;
  function wj(
    e,
    r,
    { dataProp: t, dataPropType: n, data: a, dataTypes: i, propertyName: o },
  ) {
    if (a !== void 0 && t !== void 0) {
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    }
    const { gen: s } = r;
    if (t !== void 0) {
      const { errorPath: l, dataPathArr: c, opts: f } = r,
        h = s.let("data", (0, mr._)`${r.data}${(0, mr.getProperty)(t)}`, !0);
      u(h),
        (e.errorPath = (0, mr.str)`${l}${
          (0, Hf.getErrorPath)(
            t,
            n,
            f.jsPropertySyntax,
          )
        }`),
        (e.parentDataProperty = (0, mr._)`${t}`),
        (e.dataPathArr = [...c, e.parentDataProperty]);
    }
    if (a !== void 0) {
      const l = a instanceof mr.Name ? a : s.let("data", a, !0);
      u(l), o !== void 0 && (e.propertyName = o);
    }
    i && (e.dataTypes = i);
    function u(l) {
      (e.data = l),
        (e.dataLevel = r.dataLevel + 1),
        (e.dataTypes = []),
        (r.definedProperties = new Set()),
        (e.parentData = r.data),
        (e.dataNames = [...r.dataNames, l]);
    }
  }
  Rr.extendSubschemaData = wj;
  function Oj(
    e,
    {
      jtdDiscriminator: r,
      jtdMetadata: t,
      compositeRule: n,
      createErrors: a,
      allErrors: i,
    },
  ) {
    n !== void 0 && (e.compositeRule = n),
      a !== void 0 && (e.createErrors = a),
      i !== void 0 && (e.allErrors = i),
      (e.jtdDiscriminator = r),
      (e.jtdMetadata = t);
  }
  Rr.extendSubschemaMode = Oj;
  var Me = {},
    Yf = function e(r, t) {
      if (r === t) return !0;
      if (r && t && typeof r == "object" && typeof t == "object") {
        if (r.constructor !== t.constructor) return !1;
        var n, a, i;
        if (Array.isArray(r)) {
          if (((n = r.length), n != t.length)) return !1;
          for (a = n; a-- !== 0;) if (!e(r[a], t[a])) return !1;
          return !0;
        }
        if (r.constructor === RegExp) {
          return r.source === t.source && r.flags === t.flags;
        }
        if (r.valueOf !== Object.prototype.valueOf) {
          return r.valueOf() === t.valueOf();
        }
        if (r.toString !== Object.prototype.toString) {
          return r.toString() === t.toString();
        }
        if (
          ((i = Object.keys(r)), (n = i.length), n !== Object.keys(t).length)
        ) {
          return !1;
        }
        for (a = n; a-- !== 0;) {
          if (!Object.prototype.hasOwnProperty.call(t, i[a])) return !1;
        }
        for (a = n; a-- !== 0;) {
          var o = i[a];
          if (!e(r[o], t[o])) return !1;
        }
        return !0;
      }
      return r !== r && t !== t;
    },
    Vo = {},
    Aj = {
      get exports() {
        return Vo;
      },
      set exports(e) {
        Vo = e;
      },
    },
    Ur = (Aj.exports = function (e, r, t) {
      typeof r == "function" && ((t = r), (r = {})), (t = r.cb || t);
      var n = typeof t == "function" ? t : t.pre || function () {},
        a = t.post || function () {};
      ja(r, n, a, e, "", e);
    });
  (Ur.keywords = {
    additionalItems: !0,
    items: !0,
    contains: !0,
    additionalProperties: !0,
    propertyNames: !0,
    not: !0,
    if: !0,
    then: !0,
    else: !0,
  }),
    (Ur.arrayKeywords = { items: !0, allOf: !0, anyOf: !0, oneOf: !0 }),
    (Ur.propsKeywords = {
      $defs: !0,
      definitions: !0,
      properties: !0,
      patternProperties: !0,
      dependencies: !0,
    }),
    (Ur.skipKeywords = {
      default: !0,
      enum: !0,
      const: !0,
      required: !0,
      maximum: !0,
      minimum: !0,
      exclusiveMaximum: !0,
      exclusiveMinimum: !0,
      multipleOf: !0,
      maxLength: !0,
      minLength: !0,
      pattern: !0,
      format: !0,
      maxItems: !0,
      minItems: !0,
      uniqueItems: !0,
      maxProperties: !0,
      minProperties: !0,
    });
  function ja(e, r, t, n, a, i, o, s, u, l) {
    if (n && typeof n == "object" && !Array.isArray(n)) {
      r(n, a, i, o, s, u, l);
      for (var c in n) {
        var f = n[c];
        if (Array.isArray(f)) {
          if (c in Ur.arrayKeywords) {
            for (var h = 0; h < f.length; h++) {
              ja(e, r, t, f[h], a + "/" + c + "/" + h, i, a, c, n, h);
            }
          }
        } else if (c in Ur.propsKeywords) {
          if (f && typeof f == "object") {
            for (var m in f) {
              ja(e, r, t, f[m], a + "/" + c + "/" + Tj(m), i, a, c, n, m);
            }
          }
        } else {
          (c in Ur.keywords || (e.allKeys && !(c in Ur.skipKeywords))) &&
            ja(e, r, t, f, a + "/" + c, i, a, c, n);
        }
      }
      t(n, a, i, o, s, u, l);
    }
  }
  function Tj(e) {
    return e.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  Object.defineProperty(Me, "__esModule", { value: !0 }),
    (Me.getSchemaRefs =
      Me.resolveUrl =
      Me.normalizeId =
      Me._getFullPath =
      Me.getFullPath =
      Me.inlineRef =
        void 0);
  const Pj = se,
    Cj = Yf,
    Ij = Vo,
    Nj = new Set([
      "type",
      "format",
      "pattern",
      "maxLength",
      "minLength",
      "maxProperties",
      "minProperties",
      "maxItems",
      "minItems",
      "maximum",
      "minimum",
      "uniqueItems",
      "multipleOf",
      "required",
      "enum",
      "const",
    ]);
  function Dj(e, r = !0) {
    return typeof e == "boolean" ? !0 : r === !0 ? !Ko(e) : r ? Jf(e) <= r : !1;
  }
  Me.inlineRef = Dj;
  const Fj = new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor",
  ]);
  function Ko(e) {
    for (const r in e) {
      if (Fj.has(r)) return !0;
      const t = e[r];
      if ((Array.isArray(t) && t.some(Ko)) || (typeof t == "object" && Ko(t))) {
        return !0;
      }
    }
    return !1;
  }
  function Jf(e) {
    let r = 0;
    for (const t in e) {
      if (t === "$ref") return 1 / 0;
      if (
        (r++,
          !Nj.has(t) &&
          (typeof e[t] == "object" &&
            (0, Pj.eachItem)(e[t], (n) => (r += Jf(n))),
            r === 1 / 0))
      ) {
        return 1 / 0;
      }
    }
    return r;
  }
  function Xf(e, r = "", t) {
    t !== !1 && (r = Rt(r));
    const n = e.parse(r);
    return Zf(e, n);
  }
  Me.getFullPath = Xf;
  function Zf(e, r) {
    return e.serialize(r).split("#")[0] + "#";
  }
  Me._getFullPath = Zf;
  const jj = /#\/?$/;
  function Rt(e) {
    return e ? e.replace(jj, "") : "";
  }
  Me.normalizeId = Rt;
  function Mj(e, r, t) {
    return (t = Rt(t)), e.resolve(r, t);
  }
  Me.resolveUrl = Mj;
  const Rj = /^[a-z_][-a-z0-9._]*$/i;
  function Uj(e, r) {
    if (typeof e == "boolean") return {};
    const { schemaId: t, uriResolver: n } = this.opts,
      a = Rt(e[t] || r),
      i = { "": a },
      o = Xf(n, a, !1),
      s = {},
      u = new Set();
    return (
      Ij(e, { allKeys: !0 }, (f, h, m, v) => {
        if (v === void 0) return;
        const y = o + h;
        let d = i[v];
        typeof f[t] == "string" && (d = p.call(this, f[t])),
          $.call(this, f.$anchor),
          $.call(this, f.$dynamicAnchor),
          (i[h] = d);
        function p(b) {
          const w = this.opts.uriResolver.resolve;
          if (((b = Rt(d ? w(d, b) : b)), u.has(b))) throw c(b);
          u.add(b);
          let N = this.refs[b];
          return (
            typeof N == "string" && (N = this.refs[N]),
              typeof N == "object" ? l(f, N.schema, b) : b !== Rt(y) &&
                (b[0] === "#"
                  ? (l(f, s[b], b), (s[b] = f))
                  : (this.refs[b] = y)),
              b
          );
        }
        function $(b) {
          if (typeof b == "string") {
            if (!Rj.test(b)) throw new Error(`invalid anchor "${b}"`);
            p.call(this, `#${b}`);
          }
        }
      }), s
    );
    function l(f, h, m) {
      if (h !== void 0 && !Cj(f, h)) throw c(m);
    }
    function c(f) {
      return new Error(`reference "${f}" resolves to more than one schema`);
    }
  }
  (Me.getSchemaRefs = Uj),
    Object.defineProperty(nr, "__esModule", { value: !0 }),
    (nr.getData = nr.KeywordCxt = nr.validateFunctionCode = void 0);
  const Qf = jt,
    ed = Sn,
    zo = Or,
    Ma = Sn,
    kj = Fa,
    En = hr,
    Go = Rr,
    W = te,
    Z = dr,
    Lj = Me,
    Ar = se,
    wn = _n;
  function xj(e) {
    if (ad(e) && (id(e), nd(e))) {
      Vj(e);
      return;
    }
    rd(e, () => (0, Qf.topBoolOrEmptySchema)(e));
  }
  nr.validateFunctionCode = xj;
  function rd(
    { gen: e, validateName: r, schema: t, schemaEnv: n, opts: a },
    i,
  ) {
    a.code.es5
      ? e.func(
        r,
        (0, W._)`${Z.default.data}, ${Z.default.valCxt}`,
        n.$async,
        () => {
          e.code((0, W._)`"use strict"; ${td(t, a)}`), Bj(e, a), e.code(i);
        },
      )
      : e.func(
        r,
        (0, W._)`${Z.default.data}, ${qj(a)}`,
        n.$async,
        () => e.code(td(t, a)).code(i),
      );
  }
  function qj(e) {
    return (0,
      W._)`{${Z.default.instancePath}="", ${Z.default.parentData}, ${Z.default.parentDataProperty}, ${Z.default.rootData}=${Z.default.data}${
      e.dynamicRef ? (0, W._)`, ${Z.default.dynamicAnchors}={}` : W.nil
    }}={}`;
  }
  function Bj(e, r) {
    e.if(
      Z.default.valCxt,
      () => {
        e.var(
          Z.default.instancePath,
          (0, W._)`${Z.default.valCxt}.${Z.default.instancePath}`,
        ),
          e.var(
            Z.default.parentData,
            (0, W._)`${Z.default.valCxt}.${Z.default.parentData}`,
          ),
          e.var(
            Z.default.parentDataProperty,
            (0, W._)`${Z.default.valCxt}.${Z.default.parentDataProperty}`,
          ),
          e.var(
            Z.default.rootData,
            (0, W._)`${Z.default.valCxt}.${Z.default.rootData}`,
          ),
          r.dynamicRef &&
          e.var(
            Z.default.dynamicAnchors,
            (0, W._)`${Z.default.valCxt}.${Z.default.dynamicAnchors}`,
          );
      },
      () => {
        e.var(Z.default.instancePath, (0, W._)`""`),
          e.var(Z.default.parentData, (0, W._)`undefined`),
          e.var(Z.default.parentDataProperty, (0, W._)`undefined`),
          e.var(Z.default.rootData, Z.default.data),
          r.dynamicRef && e.var(Z.default.dynamicAnchors, (0, W._)`{}`);
      },
    );
  }
  function Vj(e) {
    const { schema: r, opts: t, gen: n } = e;
    rd(e, () => {
      t.$comment && r.$comment && sd(e),
        Hj(e),
        n.let(Z.default.vErrors, null),
        n.let(Z.default.errors, 0),
        t.unevaluated && Kj(e),
        od(e),
        Xj(e);
    });
  }
  function Kj(e) {
    const { gen: r, validateName: t } = e;
    (e.evaluated = r.const("evaluated", (0, W._)`${t}.evaluated`)),
      r.if(
        (0, W._)`${e.evaluated}.dynamicProps`,
        () => r.assign((0, W._)`${e.evaluated}.props`, (0, W._)`undefined`),
      ),
      r.if(
        (0, W._)`${e.evaluated}.dynamicItems`,
        () => r.assign((0, W._)`${e.evaluated}.items`, (0, W._)`undefined`),
      );
  }
  function td(e, r) {
    const t = typeof e == "object" && e[r.schemaId];
    return t && (r.code.source || r.code.process)
      ? (0, W._)`/*# sourceURL=${t} */`
      : W.nil;
  }
  function zj(e, r) {
    if (ad(e) && (id(e), nd(e))) {
      Gj(e, r);
      return;
    }
    (0, Qf.boolOrEmptySchema)(e, r);
  }
  function nd({ schema: e, self: r }) {
    if (typeof e == "boolean") return !e;
    for (const t in e) if (r.RULES.all[t]) return !0;
    return !1;
  }
  function ad(e) {
    return typeof e.schema != "boolean";
  }
  function Gj(e, r) {
    const { schema: t, gen: n, opts: a } = e;
    a.$comment && t.$comment && sd(e), Yj(e), Jj(e);
    const i = n.const("_errs", Z.default.errors);
    od(e, i), n.var(r, (0, W._)`${i} === ${Z.default.errors}`);
  }
  function id(e) {
    (0, Ar.checkUnknownRules)(e), Wj(e);
  }
  function od(e, r) {
    if (e.opts.jtd) return ud(e, [], !1, r);
    const t = (0, ed.getSchemaTypes)(e.schema),
      n = (0, ed.coerceAndCheckDataType)(e, t);
    ud(e, t, !n, r);
  }
  function Wj(e) {
    const { schema: r, errSchemaPath: t, opts: n, self: a } = e;
    r.$ref &&
      n.ignoreKeywordsWithRef &&
      (0, Ar.schemaHasRulesButRef)(r, a.RULES) &&
      a.logger.warn(`$ref: keywords ignored in schema at path "${t}"`);
  }
  function Hj(e) {
    const { schema: r, opts: t } = e;
    r.default !== void 0 &&
      t.useDefaults &&
      t.strictSchema &&
      (0, Ar.checkStrictMode)(e, "default is ignored in the schema root");
  }
  function Yj(e) {
    const r = e.schema[e.opts.schemaId];
    r && (e.baseId = (0, Lj.resolveUrl)(e.opts.uriResolver, e.baseId, r));
  }
  function Jj(e) {
    if (e.schema.$async && !e.schemaEnv.$async) {
      throw new Error("async schema in sync schema");
    }
  }
  function sd({ gen: e, schemaEnv: r, schema: t, errSchemaPath: n, opts: a }) {
    const i = t.$comment;
    if (a.$comment === !0) e.code((0, W._)`${Z.default.self}.logger.log(${i})`);
    else if (typeof a.$comment == "function") {
      const o = (0, W.str)`${n}/$comment`,
        s = e.scopeValue("root", { ref: r.root });
      e.code(
        (0, W._)`${Z.default.self}.opts.$comment(${i}, ${o}, ${s}.schema)`,
      );
    }
  }
  function Xj(e) {
    const {
      gen: r,
      schemaEnv: t,
      validateName: n,
      ValidationError: a,
      opts: i,
    } = e;
    t.$async
      ? r.if(
        (0, W._)`${Z.default.errors} === 0`,
        () => r.return(Z.default.data),
        () => r.throw((0, W._)`new ${a}(${Z.default.vErrors})`),
      )
      : (r.assign((0, W._)`${n}.errors`, Z.default.vErrors),
        i.unevaluated && Zj(e),
        r.return((0, W._)`${Z.default.errors} === 0`));
  }
  function Zj({ gen: e, evaluated: r, props: t, items: n }) {
    t instanceof W.Name && e.assign((0, W._)`${r}.props`, t),
      n instanceof W.Name && e.assign((0, W._)`${r}.items`, n);
  }
  function ud(e, r, t, n) {
    const { gen: a, schema: i, data: o, allErrors: s, opts: u, self: l } = e,
      { RULES: c } = l;
    if (
      i.$ref &&
      (u.ignoreKeywordsWithRef || !(0, Ar.schemaHasRulesButRef)(i, c))
    ) {
      a.block(() => dd(e, "$ref", c.all.$ref.definition));
      return;
    }
    u.jtd || Qj(e, r),
      a.block(() => {
        for (const h of c.rules) f(h);
        f(c.post);
      });
    function f(h) {
      (0, zo.shouldUseGroup)(i, h) &&
        (h.type
          ? (a.if((0, Ma.checkDataType)(h.type, o, u.strictNumbers)),
            ld(e, h),
            r.length === 1 &&
            r[0] === h.type &&
            t &&
            (a.else(), (0, Ma.reportTypeError)(e)),
            a.endIf())
          : ld(e, h),
          s || a.if((0, W._)`${Z.default.errors} === ${n || 0}`));
    }
  }
  function ld(e, r) {
    const {
      gen: t,
      schema: n,
      opts: { useDefaults: a },
    } = e;
    a && (0, kj.assignDefaults)(e, r.type),
      t.block(() => {
        for (const i of r.rules) {
          (0, zo.shouldUseRule)(n, i) && dd(e, i.keyword, i.definition, r.type);
        }
      });
  }
  function Qj(e, r) {
    e.schemaEnv.meta ||
      !e.opts.strictTypes ||
      (eM(e, r), e.opts.allowUnionTypes || rM(e, r), tM(e, e.dataTypes));
  }
  function eM(e, r) {
    if (r.length) {
      if (!e.dataTypes.length) {
        e.dataTypes = r;
        return;
      }
      r.forEach((t) => {
        cd(e.dataTypes, t) ||
          Wo(
            e,
            `type "${t}" not allowed by context "${e.dataTypes.join(",")}"`,
          );
      }), aM(e, r);
    }
  }
  function rM(e, r) {
    r.length > 1 &&
      !(r.length === 2 && r.includes("null")) &&
      Wo(e, "use allowUnionTypes to allow union type keyword");
  }
  function tM(e, r) {
    const t = e.self.RULES.all;
    for (const n in t) {
      const a = t[n];
      if (typeof a == "object" && (0, zo.shouldUseRule)(e.schema, a)) {
        const { type: i } = a.definition;
        i.length &&
          !i.some((o) => nM(r, o)) &&
          Wo(e, `missing type "${i.join(",")}" for keyword "${n}"`);
      }
    }
  }
  function nM(e, r) {
    return e.includes(r) || (r === "number" && e.includes("integer"));
  }
  function cd(e, r) {
    return e.includes(r) || (r === "integer" && e.includes("number"));
  }
  function aM(e, r) {
    const t = [];
    for (const n of e.dataTypes) {
      cd(r, n)
        ? t.push(n)
        : r.includes("integer") && n === "number" && t.push("integer");
    }
    e.dataTypes = t;
  }
  function Wo(e, r) {
    const t = e.schemaEnv.baseId + e.errSchemaPath;
    (r += ` at "${t}" (strictTypes)`),
      (0, Ar.checkStrictMode)(e, r, e.opts.strictTypes);
  }
  class fd {
    constructor(r, t, n) {
      if (
        ((0, En.validateKeywordUsage)(r, t, n),
          (this.gen = r.gen),
          (this.allErrors = r.allErrors),
          (this.keyword = n),
          (this.data = r.data),
          (this.schema = r.schema[n]),
          (this.$data = t.$data && r.opts.$data && this.schema &&
            this.schema.$data),
          (this.schemaValue = (0, Ar.schemaRefOrVal)(
            r,
            this.schema,
            n,
            this.$data,
          )),
          (this.schemaType = t.schemaType),
          (this.parentSchema = r.schema),
          (this.params = {}),
          (this.it = r),
          (this.def = t),
          this.$data)
      ) {
        this.schemaCode = r.gen.const("vSchema", hd(this.$data, r));
      } else if (
        ((this.schemaCode = this.schemaValue),
          !(0, En.validSchemaType)(this.schema, t.schemaType, t.allowUndefined))
      ) {
        throw new Error(`${n} value must be ${JSON.stringify(t.schemaType)}`);
      }
      ("code" in t ? t.trackErrors : t.errors !== !1) &&
        (this.errsCount = r.gen.const("_errs", Z.default.errors));
    }
    result(r, t, n) {
      this.failResult((0, W.not)(r), t, n);
    }
    failResult(r, t, n) {
      this.gen.if(r),
        n ? n() : this.error(),
        t
          ? (this.gen.else(), t(), this.allErrors && this.gen.endIf())
          : this.allErrors
          ? this.gen.endIf()
          : this.gen.else();
    }
    pass(r, t) {
      this.failResult((0, W.not)(r), void 0, t);
    }
    fail(r) {
      if (r === void 0) {
        this.error(), this.allErrors || this.gen.if(!1);
        return;
      }
      this.gen.if(r),
        this.error(),
        this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    fail$data(r) {
      if (!this.$data) return this.fail(r);
      const { schemaCode: t } = this;
      this.fail(
        (0, W._)`${t} !== undefined && (${(0, W.or)(this.invalid$data(), r)})`,
      );
    }
    error(r, t, n) {
      if (t) {
        this.setParams(t), this._error(r, n), this.setParams({});
        return;
      }
      this._error(r, n);
    }
    _error(r, t) {
      (r ? wn.reportExtraError : wn.reportError)(this, this.def.error, t);
    }
    $dataError() {
      (0, wn.reportError)(this, this.def.$dataError || wn.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0) {
        throw new Error('add "trackErrors" to keyword definition');
      }
      (0, wn.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(r) {
      this.allErrors || this.gen.if(r);
    }
    setParams(r, t) {
      t ? Object.assign(this.params, r) : (this.params = r);
    }
    block$data(r, t, n = W.nil) {
      this.gen.block(() => {
        this.check$data(r, n), t();
      });
    }
    check$data(r = W.nil, t = W.nil) {
      if (!this.$data) return;
      const { gen: n, schemaCode: a, schemaType: i, def: o } = this;
      n.if((0, W.or)((0, W._)`${a} === undefined`, t)),
        r !== W.nil && n.assign(r, !0),
        (i.length || o.validateSchema) &&
        (n.elseIf(this.invalid$data()),
          this.$dataError(),
          r !== W.nil && n.assign(r, !1)),
        n.else();
    }
    invalid$data() {
      const { gen: r, schemaCode: t, schemaType: n, def: a, it: i } = this;
      return (0, W.or)(o(), s());
      function o() {
        if (n.length) {
          if (!(t instanceof W.Name)) {
            throw new Error("ajv implementation error");
          }
          const u = Array.isArray(n) ? n : [n];
          return (0, W._)`${
            (0, Ma.checkDataTypes)(
              u,
              t,
              i.opts.strictNumbers,
              Ma.DataType.Wrong,
            )
          }`;
        }
        return W.nil;
      }
      function s() {
        if (a.validateSchema) {
          const u = r.scopeValue("validate$data", { ref: a.validateSchema });
          return (0, W._)`!${u}(${t})`;
        }
        return W.nil;
      }
    }
    subschema(r, t) {
      const n = (0, Go.getSubschema)(this.it, r);
      (0, Go.extendSubschemaData)(n, this.it, r),
        (0, Go.extendSubschemaMode)(n, r);
      const a = { ...this.it, ...n, items: void 0, props: void 0 };
      return zj(a, t), a;
    }
    mergeEvaluated(r, t) {
      const { it: n, gen: a } = this;
      n.opts.unevaluated &&
        (n.props !== !0 &&
          r.props !== void 0 &&
          (n.props = Ar.mergeEvaluated.props(a, r.props, n.props, t)),
          n.items !== !0 &&
          r.items !== void 0 &&
          (n.items = Ar.mergeEvaluated.items(a, r.items, n.items, t)));
    }
    mergeValidEvaluated(r, t) {
      const { it: n, gen: a } = this;
      if (n.opts.unevaluated && (n.props !== !0 || n.items !== !0)) {
        return a.if(t, () => this.mergeEvaluated(r, W.Name)), !0;
      }
    }
  }
  nr.KeywordCxt = fd;
  function dd(e, r, t, n) {
    const a = new fd(e, t, r);
    "code" in t
      ? t.code(a, n)
      : a.$data && t.validate
      ? (0, En.funcKeywordCode)(a, t)
      : "macro" in t
      ? (0, En.macroKeywordCode)(a, t)
      : (t.compile || t.validate) && (0, En.funcKeywordCode)(a, t);
  }
  const iM = /^\/(?:[^~]|~0|~1)*$/,
    oM = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function hd(e, { dataLevel: r, dataNames: t, dataPathArr: n }) {
    let a, i;
    if (e === "") return Z.default.rootData;
    if (e[0] === "/") {
      if (!iM.test(e)) throw new Error(`Invalid JSON-pointer: ${e}`);
      (a = e), (i = Z.default.rootData);
    } else {
      const l = oM.exec(e);
      if (!l) throw new Error(`Invalid JSON-pointer: ${e}`);
      const c = +l[1];
      if (((a = l[2]), a === "#")) {
        if (c >= r) throw new Error(u("property/index", c));
        return n[r - c];
      }
      if (c > r) throw new Error(u("data", c));
      if (((i = t[r - c]), !a)) return i;
    }
    let o = i;
    const s = a.split("/");
    for (const l of s) {
      l &&
        ((i = (0, W._)`${i}${
          (0, W.getProperty)(
            (0, Ar.unescapeJsonPointer)(l),
          )
        }`),
          (o = (0, W._)`${o} && ${i}`));
    }
    return o;
    function u(l, c) {
      return `Cannot access ${l} ${c} levels up, current level is ${r}`;
    }
  }
  nr.getData = hd;
  var On = {};
  Object.defineProperty(On, "__esModule", { value: !0 });
  class sM extends Error {
    constructor(r) {
      super("validation failed"),
        (this.errors = r),
        (this.ajv = this.validation = !0);
    }
  }
  On.default = sM;
  var An = {};
  Object.defineProperty(An, "__esModule", { value: !0 });
  const Ho = Me;
  class uM extends Error {
    constructor(r, t, n, a) {
      super(a || `can't resolve reference ${n} from id ${t}`),
        (this.missingRef = (0, Ho.resolveUrl)(r, t, n)),
        (this.missingSchema = (0, Ho.normalizeId)(
          (0, Ho.getFullPath)(r, this.missingRef),
        ));
    }
  }
  An.default = uM;
  var Be = {};
  Object.defineProperty(Be, "__esModule", { value: !0 }),
    (Be.resolveSchema =
      Be.getCompilingSchema =
      Be.resolveRef =
      Be.compileSchema =
      Be.SchemaEnv =
        void 0);
  const ar = te,
    lM = On,
    tt = dr,
    ir = Me,
    md = se,
    cM = nr;
  class Ra {
    constructor(r) {
      var t;
      (this.refs = {}), (this.dynamicAnchors = {});
      let n;
      typeof r.schema == "object" && (n = r.schema),
        (this.schema = r.schema),
        (this.schemaId = r.schemaId),
        (this.root = r.root || this),
        (this.baseId = (t = r.baseId) !== null && t !== void 0
          ? t
          : (0, ir.normalizeId)(n == null ? void 0 : n[r.schemaId || "$id"])),
        (this.schemaPath = r.schemaPath),
        (this.localRefs = r.localRefs),
        (this.meta = r.meta),
        (this.$async = n == null ? void 0 : n.$async),
        (this.refs = {});
    }
  }
  Be.SchemaEnv = Ra;
  function Yo(e) {
    const r = pd.call(this, e);
    if (r) return r;
    const t = (0, ir.getFullPath)(this.opts.uriResolver, e.root.baseId),
      { es5: n, lines: a } = this.opts.code,
      { ownProperties: i } = this.opts,
      o = new ar.CodeGen(this.scope, { es5: n, lines: a, ownProperties: i });
    let s;
    e.$async &&
      (s = o.scopeValue("Error", {
        ref: lM.default,
        code: (0, ar._)`require("ajv/dist/runtime/validation_error").default`,
      }));
    const u = o.scopeName("validate");
    e.validateName = u;
    const l = {
      gen: o,
      allErrors: this.opts.allErrors,
      data: tt.default.data,
      parentData: tt.default.parentData,
      parentDataProperty: tt.default.parentDataProperty,
      dataNames: [tt.default.data],
      dataPathArr: [ar.nil],
      dataLevel: 0,
      dataTypes: [],
      definedProperties: new Set(),
      topSchemaRef: o.scopeValue(
        "schema",
        this.opts.code.source === !0
          ? { ref: e.schema, code: (0, ar.stringify)(e.schema) }
          : { ref: e.schema },
      ),
      validateName: u,
      ValidationError: s,
      schema: e.schema,
      schemaEnv: e,
      rootId: t,
      baseId: e.baseId || t,
      schemaPath: ar.nil,
      errSchemaPath: e.schemaPath || (this.opts.jtd ? "" : "#"),
      errorPath: (0, ar._)`""`,
      opts: this.opts,
      self: this,
    };
    let c;
    try {
      this._compilations.add(e),
        (0, cM.validateFunctionCode)(l),
        o.optimize(this.opts.code.optimize);
      const f = o.toString();
      (c = `${o.scopeRefs(tt.default.scope)}return ${f}`),
        this.opts.code.process && (c = this.opts.code.process(c, e));
      const m = new Function(`${tt.default.self}`, `${tt.default.scope}`, c)(
        this,
        this.scope.get(),
      );
      if (
        (this.scope.value(u, { ref: m }),
          (m.errors = null),
          (m.schema = e.schema),
          (m.schemaEnv = e),
          e.$async && (m.$async = !0),
          this.opts.code.source === !0 &&
          (m.source = {
            validateName: u,
            validateCode: f,
            scopeValues: o._values,
          }),
          this.opts.unevaluated)
      ) {
        const { props: v, items: y } = l;
        (m.evaluated = {
          props: v instanceof ar.Name ? void 0 : v,
          items: y instanceof ar.Name ? void 0 : y,
          dynamicProps: v instanceof ar.Name,
          dynamicItems: y instanceof ar.Name,
        }), m.source && (m.source.evaluated = (0, ar.stringify)(m.evaluated));
      }
      return (e.validate = m), e;
    } catch (f) {
      throw (
        (delete e.validate,
          delete e.validateName,
          c && this.logger.error("Error compiling schema, function code:", c),
          f)
      );
    } finally {
      this._compilations.delete(e);
    }
  }
  Be.compileSchema = Yo;
  function fM(e, r, t) {
    var n;
    t = (0, ir.resolveUrl)(this.opts.uriResolver, r, t);
    const a = e.refs[t];
    if (a) return a;
    let i = mM.call(this, e, t);
    if (i === void 0) {
      const o = (n = e.localRefs) === null || n === void 0 ? void 0 : n[t],
        { schemaId: s } = this.opts;
      o && (i = new Ra({ schema: o, schemaId: s, root: e, baseId: r }));
    }
    if (i !== void 0) return (e.refs[t] = dM.call(this, i));
  }
  Be.resolveRef = fM;
  function dM(e) {
    return (0, ir.inlineRef)(e.schema, this.opts.inlineRefs)
      ? e.schema
      : e.validate
      ? e
      : Yo.call(this, e);
  }
  function pd(e) {
    for (const r of this._compilations) if (hM(r, e)) return r;
  }
  Be.getCompilingSchema = pd;
  function hM(e, r) {
    return e.schema === r.schema && e.root === r.root && e.baseId === r.baseId;
  }
  function mM(e, r) {
    let t;
    for (; typeof (t = this.refs[r]) == "string";) r = t;
    return t || this.schemas[r] || Ua.call(this, e, r);
  }
  function Ua(e, r) {
    const t = this.opts.uriResolver.parse(r),
      n = (0, ir._getFullPath)(this.opts.uriResolver, t);
    let a = (0, ir.getFullPath)(this.opts.uriResolver, e.baseId, void 0);
    if (Object.keys(e.schema).length > 0 && n === a) return Jo.call(this, t, e);
    const i = (0, ir.normalizeId)(n),
      o = this.refs[i] || this.schemas[i];
    if (typeof o == "string") {
      const s = Ua.call(this, e, o);
      return typeof (s == null ? void 0 : s.schema) != "object"
        ? void 0
        : Jo.call(this, t, s);
    }
    if (typeof (o == null ? void 0 : o.schema) == "object") {
      if ((o.validate || Yo.call(this, o), i === (0, ir.normalizeId)(r))) {
        const { schema: s } = o,
          { schemaId: u } = this.opts,
          l = s[u];
        return (
          l && (a = (0, ir.resolveUrl)(this.opts.uriResolver, a, l)),
            new Ra({ schema: s, schemaId: u, root: e, baseId: a })
        );
      }
      return Jo.call(this, t, o);
    }
  }
  Be.resolveSchema = Ua;
  const pM = new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions",
  ]);
  function Jo(e, { baseId: r, schema: t, root: n }) {
    var a;
    if (((a = e.fragment) === null || a === void 0 ? void 0 : a[0]) !== "/") {
      return;
    }
    for (const s of e.fragment.slice(1).split("/")) {
      if (typeof t == "boolean") return;
      const u = t[(0, md.unescapeFragment)(s)];
      if (u === void 0) return;
      t = u;
      const l = typeof t == "object" && t[this.opts.schemaId];
      !pM.has(s) && l && (r = (0, ir.resolveUrl)(this.opts.uriResolver, r, l));
    }
    let i;
    if (
      typeof t != "boolean" &&
      t.$ref &&
      !(0, md.schemaHasRulesButRef)(t, this.RULES)
    ) {
      const s = (0, ir.resolveUrl)(this.opts.uriResolver, r, t.$ref);
      i = Ua.call(this, n, s);
    }
    const { schemaId: o } = this.opts;
    if (
      ((i = i || new Ra({ schema: t, schemaId: o, root: n, baseId: r })),
        i.schema !== i.root.schema)
    ) {
      return i;
    }
  }
  const vM = {
    $id:
      "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#",
    description:
      "Meta-schema for $data reference (JSON AnySchema extension proposal)",
    type: "object",
    required: ["$data"],
    properties: {
      $data: {
        type: "string",
        anyOf: [
          { format: "relative-json-pointer" },
          { format: "json-pointer" },
        ],
      },
    },
    additionalProperties: !1,
  };
  var Xo = {},
    ka = {},
    yM = {
      get exports() {
        return ka;
      },
      set exports(e) {
        ka = e;
      },
    };
  /** @license URI.js v4.4.1 (c) 2011 Gary Court. License: http://github.com/garycourt/uri-js */ (function (
    e,
    r,
  ) {
    (function (t, n) {
      n(r);
    })(nn, function (t) {
      function n() {
        for (var A = arguments.length, _ = Array(A), T = 0; T < A; T++) {
          _[T] = arguments[T];
        }
        if (_.length > 1) {
          _[0] = _[0].slice(0, -1);
          for (var M = _.length - 1, j = 1; j < M; ++j) {
            _[j] = _[j].slice(1, -1);
          }
          return (_[M] = _[M].slice(1)), _.join("");
        } else return _[0];
      }
      function a(A) {
        return "(?:" + A + ")";
      }
      function i(A) {
        return A === void 0
          ? "undefined"
          : A === null
          ? "null"
          : Object.prototype.toString
            .call(A)
            .split(" ")
            .pop()
            .split("]")
            .shift()
            .toLowerCase();
      }
      function o(A) {
        return A.toUpperCase();
      }
      function s(A) {
        return A != null
          ? A instanceof Array
            ? A
            : typeof A.length != "number" || A.split || A.setInterval || A.call
            ? [A]
            : Array.prototype.slice.call(A)
          : [];
      }
      function u(A, _) {
        var T = A;
        if (_) for (var M in _) T[M] = _[M];
        return T;
      }
      function l(A) {
        var _ = "[A-Za-z]",
          T = "[0-9]",
          M = n(T, "[A-Fa-f]"),
          j = a(
            a("%[EFef]" + M + "%" + M + M + "%" + M + M) +
              "|" +
              a("%[89A-Fa-f]" + M + "%" + M + M) +
              "|" +
              a("%" + M + M),
          ),
          Y = "[\\:\\/\\?\\#\\[\\]\\@]",
          J = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]",
          oe = n(Y, J),
          Ee = A
            ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]"
            : "[]",
          Ce = A ? "[\\uE000-\\uF8FF]" : "[]",
          ie = n(_, T, "[\\-\\.\\_\\~]", Ee);
        a(_ + n(_, T, "[\\+\\-\\.]") + "*"),
          a(a(j + "|" + n(ie, J, "[\\:]")) + "*");
        var $e = a(
            a("25[0-5]") +
              "|" +
              a("2[0-4]" + T) +
              "|" +
              a("1" + T + T) +
              "|" +
              a("0?[1-9]" + T) +
              "|0?0?" +
              T,
          ),
          Ie = a($e + "\\." + $e + "\\." + $e + "\\." + $e),
          re = a(M + "{1,4}"),
          Oe = a(a(re + "\\:" + re) + "|" + Ie),
          De = a(a(re + "\\:") + "{6}" + Oe),
          Ae = a("\\:\\:" + a(re + "\\:") + "{5}" + Oe),
          xr = a(a(re) + "?\\:\\:" + a(re + "\\:") + "{4}" + Oe),
          gr = a(
            a(a(re + "\\:") + "{0,1}" + re) +
              "?\\:\\:" +
              a(re + "\\:") +
              "{3}" +
              Oe,
          ),
          $r = a(
            a(a(re + "\\:") + "{0,2}" + re) +
              "?\\:\\:" +
              a(re + "\\:") +
              "{2}" +
              Oe,
          ),
          Wt = a(a(a(re + "\\:") + "{0,3}" + re) + "?\\:\\:" + re + "\\:" + Oe),
          ut = a(a(a(re + "\\:") + "{0,4}" + re) + "?\\:\\:" + Oe),
          er = a(a(a(re + "\\:") + "{0,5}" + re) + "?\\:\\:" + re),
          _r = a(a(a(re + "\\:") + "{0,6}" + re) + "?\\:\\:"),
          lt = a([De, Ae, xr, gr, $r, Wt, ut, er, _r].join("|")),
          Tr = a(a(ie + "|" + j) + "+");
        a("[vV]" + M + "+\\." + n(ie, J, "[\\:]") + "+"),
          a(a(j + "|" + n(ie, J)) + "*");
        var Ln = a(j + "|" + n(ie, J, "[\\:\\@]"));
        return (
          a(a(j + "|" + n(ie, J, "[\\@]")) + "+"),
            a(a(Ln + "|" + n("[\\/\\?]", Ce)) + "*"),
            {
              NOT_SCHEME: new RegExp(n("[^]", _, T, "[\\+\\-\\.]"), "g"),
              NOT_USERINFO: new RegExp(n("[^\\%\\:]", ie, J), "g"),
              NOT_HOST: new RegExp(n("[^\\%\\[\\]\\:]", ie, J), "g"),
              NOT_PATH: new RegExp(n("[^\\%\\/\\:\\@]", ie, J), "g"),
              NOT_PATH_NOSCHEME: new RegExp(n("[^\\%\\/\\@]", ie, J), "g"),
              NOT_QUERY: new RegExp(
                n("[^\\%]", ie, J, "[\\:\\@\\/\\?]", Ce),
                "g",
              ),
              NOT_FRAGMENT: new RegExp(
                n("[^\\%]", ie, J, "[\\:\\@\\/\\?]"),
                "g",
              ),
              ESCAPE: new RegExp(n("[^]", ie, J), "g"),
              UNRESERVED: new RegExp(ie, "g"),
              OTHER_CHARS: new RegExp(n("[^\\%]", ie, oe), "g"),
              PCT_ENCODED: new RegExp(j, "g"),
              IPV4ADDRESS: new RegExp("^(" + Ie + ")$"),
              IPV6ADDRESS: new RegExp(
                "^\\[?(" +
                  lt +
                  ")" +
                  a(a("\\%25|\\%(?!" + M + "{2})") + "(" + Tr + ")") +
                  "?\\]?$",
              ),
            }
        );
      }
      var c = l(!1),
        f = l(!0),
        h = (function () {
          function A(_, T) {
            var M = [],
              j = !0,
              Y = !1,
              J = void 0;
            try {
              for (
                var oe = _[Symbol.iterator](), Ee;
                !(j = (Ee = oe.next()).done) &&
                (M.push(Ee.value), !(T && M.length === T));
                j = !0
              );
            } catch (Ce) {
              (Y = !0), (J = Ce);
            } finally {
              try {
                !j && oe.return && oe.return();
              } finally {
                if (Y) throw J;
              }
            }
            return M;
          }
          return function (_, T) {
            if (Array.isArray(_)) return _;
            if (Symbol.iterator in Object(_)) return A(_, T);
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance",
            );
          };
        })(),
        m = function (A) {
          if (Array.isArray(A)) {
            for (var _ = 0, T = Array(A.length); _ < A.length; _++) T[_] = A[_];
            return T;
          } else return Array.from(A);
        },
        v = 2147483647,
        y = 36,
        d = 1,
        p = 26,
        $ = 38,
        b = 700,
        w = 72,
        N = 128,
        O = "-",
        E = /^xn--/,
        D = /[^\0-\x7E]/,
        R = /[\x2E\u3002\uFF0E\uFF61]/g,
        k = {
          overflow: "Overflow: input needs wider integers to process",
          "not-basic": "Illegal input >= 0x80 (not a basic code point)",
          "invalid-input": "Invalid input",
        },
        B = y - d,
        q = Math.floor,
        z = String.fromCharCode;
      function G(A) {
        throw new RangeError(k[A]);
      }
      function H(A, _) {
        for (var T = [], M = A.length; M--;) T[M] = _(A[M]);
        return T;
      }
      function pe(A, _) {
        var T = A.split("@"),
          M = "";
        T.length > 1 && ((M = T[0] + "@"), (A = T[1])), (A = A.replace(R, "."));
        var j = A.split("."),
          Y = H(j, _).join(".");
        return M + Y;
      }
      function we(A) {
        for (var _ = [], T = 0, M = A.length; T < M;) {
          var j = A.charCodeAt(T++);
          if (j >= 55296 && j <= 56319 && T < M) {
            var Y = A.charCodeAt(T++);
            (Y & 64512) == 56320
              ? _.push(((j & 1023) << 10) + (Y & 1023) + 65536)
              : (_.push(j), T--);
          } else _.push(j);
        }
        return _;
      }
      var le = function (_) {
          return String.fromCodePoint.apply(String, m(_));
        },
        ne = function (_) {
          return _ - 48 < 10
            ? _ - 22
            : _ - 65 < 26
            ? _ - 65
            : _ - 97 < 26
            ? _ - 97
            : y;
        },
        x = function (_, T) {
          return _ + 22 + 75 * (_ < 26) - ((T != 0) << 5);
        },
        I = function (_, T, M) {
          var j = 0;
          for (
            _ = M ? q(_ / b) : _ >> 1, _ += q(_ / T);
            _ > (B * p) >> 1;
            j += y
          ) {
            _ = q(_ / B);
          }
          return q(j + ((B + 1) * _) / (_ + $));
        },
        U = function (_) {
          var T = [],
            M = _.length,
            j = 0,
            Y = N,
            J = w,
            oe = _.lastIndexOf(O);
          oe < 0 && (oe = 0);
          for (var Ee = 0; Ee < oe; ++Ee) {
            _.charCodeAt(Ee) >= 128 && G("not-basic"), T.push(_.charCodeAt(Ee));
          }
          for (var Ce = oe > 0 ? oe + 1 : 0; Ce < M;) {
            for (var ie = j, $e = 1, Ie = y;; Ie += y) {
              Ce >= M && G("invalid-input");
              var re = ne(_.charCodeAt(Ce++));
              (re >= y || re > q((v - j) / $e)) && G("overflow"),
                (j += re * $e);
              var Oe = Ie <= J ? d : Ie >= J + p ? p : Ie - J;
              if (re < Oe) break;
              var De = y - Oe;
              $e > q(v / De) && G("overflow"), ($e *= De);
            }
            var Ae = T.length + 1;
            (J = I(j - ie, Ae, ie == 0)),
              q(j / Ae) > v - Y && G("overflow"),
              (Y += q(j / Ae)),
              (j %= Ae),
              T.splice(j++, 0, Y);
          }
          return String.fromCodePoint.apply(String, T);
        },
        C = function (_) {
          var T = [];
          _ = we(_);
          var M = _.length,
            j = N,
            Y = 0,
            J = w,
            oe = !0,
            Ee = !1,
            Ce = void 0;
          try {
            for (
              var ie = _[Symbol.iterator](), $e;
              !(oe = ($e = ie.next()).done);
              oe = !0
            ) {
              var Ie = $e.value;
              Ie < 128 && T.push(z(Ie));
            }
          } catch (xn) {
            (Ee = !0), (Ce = xn);
          } finally {
            try {
              !oe && ie.return && ie.return();
            } finally {
              if (Ee) throw Ce;
            }
          }
          var re = T.length,
            Oe = re;
          for (re && T.push(O); Oe < M;) {
            var De = v,
              Ae = !0,
              xr = !1,
              gr = void 0;
            try {
              for (
                var $r = _[Symbol.iterator](), Wt;
                !(Ae = (Wt = $r.next()).done);
                Ae = !0
              ) {
                var ut = Wt.value;
                ut >= j && ut < De && (De = ut);
              }
            } catch (xn) {
              (xr = !0), (gr = xn);
            } finally {
              try {
                !Ae && $r.return && $r.return();
              } finally {
                if (xr) throw gr;
              }
            }
            var er = Oe + 1;
            De - j > q((v - Y) / er) && G("overflow"),
              (Y += (De - j) * er),
              (j = De);
            var _r = !0,
              lt = !1,
              Tr = void 0;
            try {
              for (
                var Ln = _[Symbol.iterator](), oh;
                !(_r = (oh = Ln.next()).done);
                _r = !0
              ) {
                var sh = oh.value;
                if ((sh < j && ++Y > v && G("overflow"), sh == j)) {
                  for (var ti = Y, ni = y;; ni += y) {
                    var ai = ni <= J ? d : ni >= J + p ? p : ni - J;
                    if (ti < ai) break;
                    var uh = ti - ai,
                      lh = y - ai;
                    T.push(z(x(ai + (uh % lh), 0))), (ti = q(uh / lh));
                  }
                  T.push(z(x(ti, 0))), (J = I(Y, er, Oe == re)), (Y = 0), ++Oe;
                }
              }
            } catch (xn) {
              (lt = !0), (Tr = xn);
            } finally {
              try {
                !_r && Ln.return && Ln.return();
              } finally {
                if (lt) throw Tr;
              }
            }
            ++Y, ++j;
          }
          return T.join("");
        },
        g = function (_) {
          return pe(_, function (T) {
            return E.test(T) ? U(T.slice(4).toLowerCase()) : T;
          });
        },
        S = function (_) {
          return pe(_, function (T) {
            return D.test(T) ? "xn--" + C(T) : T;
          });
        },
        F = {
          version: "2.1.0",
          ucs2: { decode: we, encode: le },
          decode: U,
          encode: C,
          toASCII: S,
          toUnicode: g,
        },
        L = {};
      function V(A) {
        var _ = A.charCodeAt(0),
          T = void 0;
        return (
          _ < 16
            ? (T = "%0" + _.toString(16).toUpperCase())
            : _ < 128
            ? (T = "%" + _.toString(16).toUpperCase())
            : _ < 2048
            ? (T = "%" +
              ((_ >> 6) | 192).toString(16).toUpperCase() +
              "%" +
              ((_ & 63) | 128).toString(16).toUpperCase())
            : (T = "%" +
              ((_ >> 12) | 224).toString(16).toUpperCase() +
              "%" +
              (((_ >> 6) & 63) | 128).toString(16).toUpperCase() +
              "%" +
              ((_ & 63) | 128).toString(16).toUpperCase()), T
        );
      }
      function ee(A) {
        for (var _ = "", T = 0, M = A.length; T < M;) {
          var j = parseInt(A.substr(T + 1, 2), 16);
          if (j < 128) (_ += String.fromCharCode(j)), (T += 3);
          else if (j >= 194 && j < 224) {
            if (M - T >= 6) {
              var Y = parseInt(A.substr(T + 4, 2), 16);
              _ += String.fromCharCode(((j & 31) << 6) | (Y & 63));
            } else _ += A.substr(T, 6);
            T += 6;
          } else if (j >= 224) {
            if (M - T >= 9) {
              var J = parseInt(A.substr(T + 4, 2), 16),
                oe = parseInt(A.substr(T + 7, 2), 16);
              _ += String.fromCharCode(
                ((j & 15) << 12) | ((J & 63) << 6) | (oe & 63),
              );
            } else _ += A.substr(T, 9);
            T += 9;
          } else (_ += A.substr(T, 3)), (T += 3);
        }
        return _;
      }
      function Q(A, _) {
        function T(M) {
          var j = ee(M);
          return j.match(_.UNRESERVED) ? j : M;
        }
        return (
          A.scheme &&
          (A.scheme = String(A.scheme)
            .replace(_.PCT_ENCODED, T)
            .toLowerCase()
            .replace(_.NOT_SCHEME, "")),
            A.userinfo !== void 0 &&
            (A.userinfo = String(A.userinfo)
              .replace(_.PCT_ENCODED, T)
              .replace(_.NOT_USERINFO, V)
              .replace(_.PCT_ENCODED, o)),
            A.host !== void 0 &&
            (A.host = String(A.host)
              .replace(_.PCT_ENCODED, T)
              .toLowerCase()
              .replace(_.NOT_HOST, V)
              .replace(_.PCT_ENCODED, o)),
            A.path !== void 0 &&
            (A.path = String(A.path)
              .replace(_.PCT_ENCODED, T)
              .replace(A.scheme ? _.NOT_PATH : _.NOT_PATH_NOSCHEME, V)
              .replace(_.PCT_ENCODED, o)),
            A.query !== void 0 &&
            (A.query = String(A.query)
              .replace(_.PCT_ENCODED, T)
              .replace(_.NOT_QUERY, V)
              .replace(_.PCT_ENCODED, o)),
            A.fragment !== void 0 &&
            (A.fragment = String(A.fragment)
              .replace(_.PCT_ENCODED, T)
              .replace(_.NOT_FRAGMENT, V)
              .replace(_.PCT_ENCODED, o)),
            A
        );
      }
      function ce(A) {
        return A.replace(/^0*(.*)/, "$1") || "0";
      }
      function Ue(A, _) {
        var T = A.match(_.IPV4ADDRESS) || [],
          M = h(T, 2),
          j = M[1];
        return j ? j.split(".").map(ce).join(".") : A;
      }
      function Ze(A, _) {
        var T = A.match(_.IPV6ADDRESS) || [],
          M = h(T, 3),
          j = M[1],
          Y = M[2];
        if (j) {
          for (
            var J = j.toLowerCase().split("::").reverse(),
              oe = h(J, 2),
              Ee = oe[0],
              Ce = oe[1],
              ie = Ce ? Ce.split(":").map(ce) : [],
              $e = Ee.split(":").map(ce),
              Ie = _.IPV4ADDRESS.test($e[$e.length - 1]),
              re = Ie ? 7 : 8,
              Oe = $e.length - re,
              De = Array(re),
              Ae = 0;
            Ae < re;
            ++Ae
          ) {
            De[Ae] = ie[Ae] || $e[Oe + Ae] || "";
          }
          Ie && (De[re - 1] = Ue(De[re - 1], _));
          var xr = De.reduce(function (er, _r, lt) {
              if (!_r || _r === "0") {
                var Tr = er[er.length - 1];
                Tr && Tr.index + Tr.length === lt
                  ? Tr.length++
                  : er.push({ index: lt, length: 1 });
              }
              return er;
            }, []),
            gr = xr.sort(function (er, _r) {
              return _r.length - er.length;
            })[0],
            $r = void 0;
          if (gr && gr.length > 1) {
            var Wt = De.slice(0, gr.index),
              ut = De.slice(gr.index + gr.length);
            $r = Wt.join(":") + "::" + ut.join(":");
          } else $r = De.join(":");
          return Y && ($r += "%" + Y), $r;
        } else return A;
      }
      var K =
          /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i,
        We = "".match(/(){0}/)[1] === void 0;
      function Te(A) {
        var _ = arguments.length > 1 && arguments[1] !== void 0
            ? arguments[1]
            : {},
          T = {},
          M = _.iri !== !1 ? f : c;
        _.reference === "suffix" &&
          (A = (_.scheme ? _.scheme + ":" : "") + "//" + A);
        var j = A.match(K);
        if (j) {
          We
            ? ((T.scheme = j[1]),
              (T.userinfo = j[3]),
              (T.host = j[4]),
              (T.port = parseInt(j[5], 10)),
              (T.path = j[6] || ""),
              (T.query = j[7]),
              (T.fragment = j[8]),
              isNaN(T.port) && (T.port = j[5]))
            : ((T.scheme = j[1] || void 0),
              (T.userinfo = A.indexOf("@") !== -1 ? j[3] : void 0),
              (T.host = A.indexOf("//") !== -1 ? j[4] : void 0),
              (T.port = parseInt(j[5], 10)),
              (T.path = j[6] || ""),
              (T.query = A.indexOf("?") !== -1 ? j[7] : void 0),
              (T.fragment = A.indexOf("#") !== -1 ? j[8] : void 0),
              isNaN(T.port) &&
              (T.port = A.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/)
                ? j[4]
                : void 0)),
            T.host && (T.host = Ze(Ue(T.host, M), M)),
            T.scheme === void 0 &&
              T.userinfo === void 0 &&
              T.host === void 0 &&
              T.port === void 0 &&
              !T.path &&
              T.query === void 0
              ? (T.reference = "same-document")
              : T.scheme === void 0
              ? (T.reference = "relative")
              : T.fragment === void 0
              ? (T.reference = "absolute")
              : (T.reference = "uri"),
            _.reference &&
            _.reference !== "suffix" &&
            _.reference !== T.reference &&
            (T.error = T.error ||
              "URI is not a " + _.reference + " reference.");
          var Y = L[(_.scheme || T.scheme || "").toLowerCase()];
          if (!_.unicodeSupport && (!Y || !Y.unicodeSupport)) {
            if (T.host && (_.domainHost || (Y && Y.domainHost))) {
              try {
                T.host = F.toASCII(
                  T.host.replace(M.PCT_ENCODED, ee).toLowerCase(),
                );
              } catch (J) {
                T.error = T.error ||
                  "Host's domain name can not be converted to ASCII via punycode: " +
                    J;
              }
            }
            Q(T, c);
          } else Q(T, M);
          Y && Y.parse && Y.parse(T, _);
        } else T.error = T.error || "URI can not be parsed.";
        return T;
      }
      function pr(A, _) {
        var T = _.iri !== !1 ? f : c,
          M = [];
        return (
          A.userinfo !== void 0 && (M.push(A.userinfo), M.push("@")),
            A.host !== void 0 &&
            M.push(
              Ze(Ue(String(A.host), T), T).replace(
                T.IPV6ADDRESS,
                function (j, Y, J) {
                  return "[" + Y + (J ? "%25" + J : "") + "]";
                },
              ),
            ),
            (typeof A.port == "number" || typeof A.port == "string") &&
            (M.push(":"), M.push(String(A.port))),
            M.length ? M.join("") : void 0
        );
      }
      var Bt = /^\.\.?\//,
        Vt = /^\/\.(\/|$)/,
        Kt = /^\/\.\.(\/|$)/,
        Mn = /^\/?(?:.|\n)*?(?=\/|$)/;
      function vr(A) {
        for (var _ = []; A.length;) {
          if (A.match(Bt)) A = A.replace(Bt, "");
          else if (A.match(Vt)) A = A.replace(Vt, "/");
          else if (A.match(Kt)) (A = A.replace(Kt, "/")), _.pop();
          else if (A === "." || A === "..") A = "";
          else {
            var T = A.match(Mn);
            if (T) {
              var M = T[0];
              (A = A.slice(M.length)), _.push(M);
            } else throw new Error("Unexpected dot segment condition");
          }
        }
        return _.join("");
      }
      function Ke(A) {
        var _ = arguments.length > 1 && arguments[1] !== void 0
            ? arguments[1]
            : {},
          T = _.iri ? f : c,
          M = [],
          j = L[(_.scheme || A.scheme || "").toLowerCase()];
        if (
          (j && j.serialize && j.serialize(A, _),
            A.host && !T.IPV6ADDRESS.test(A.host))
        ) {
          if (_.domainHost || (j && j.domainHost)) {
            try {
              A.host = _.iri
                ? F.toUnicode(A.host)
                : F.toASCII(A.host.replace(T.PCT_ENCODED, ee).toLowerCase());
            } catch (oe) {
              A.error = A.error ||
                "Host's domain name can not be converted to " +
                  (_.iri ? "Unicode" : "ASCII") +
                  " via punycode: " +
                  oe;
            }
          }
        }
        Q(A, T),
          _.reference !== "suffix" &&
          A.scheme &&
          (M.push(A.scheme), M.push(":"));
        var Y = pr(A, _);
        if (
          (Y !== void 0 &&
            (_.reference !== "suffix" && M.push("//"),
              M.push(Y),
              A.path && A.path.charAt(0) !== "/" && M.push("/")),
            A.path !== void 0)
        ) {
          var J = A.path;
          !_.absolutePath && (!j || !j.absolutePath) && (J = vr(J)),
            Y === void 0 && (J = J.replace(/^\/\//, "/%2F")),
            M.push(J);
        }
        return (
          A.query !== void 0 && (M.push("?"), M.push(A.query)),
            A.fragment !== void 0 && (M.push("#"), M.push(A.fragment)),
            M.join("")
        );
      }
      function zt(A, _) {
        var T = arguments.length > 2 && arguments[2] !== void 0
            ? arguments[2]
            : {},
          M = arguments[3],
          j = {};
        return (
          M || ((A = Te(Ke(A, T), T)), (_ = Te(Ke(_, T), T))),
            (T = T || {}),
            !T.tolerant && _.scheme
              ? ((j.scheme = _.scheme),
                (j.userinfo = _.userinfo),
                (j.host = _.host),
                (j.port = _.port),
                (j.path = vr(_.path || "")),
                (j.query = _.query))
              : (_.userinfo !== void 0 || _.host !== void 0 || _.port !== void 0
                ? ((j.userinfo = _.userinfo),
                  (j.host = _.host),
                  (j.port = _.port),
                  (j.path = vr(_.path || "")),
                  (j.query = _.query))
                : (_.path
                  ? (_.path.charAt(0) === "/"
                    ? (j.path = vr(_.path))
                    : ((A.userinfo !== void 0 ||
                        A.host !== void 0 ||
                        A.port !== void 0) &&
                        !A.path
                      ? (j.path = "/" + _.path)
                      : A.path
                      ? (j.path = A.path.slice(0, A.path.lastIndexOf("/") + 1) +
                        _.path)
                      : (j.path = _.path),
                      (j.path = vr(j.path))),
                    (j.query = _.query))
                  : ((j.path = A.path),
                    _.query !== void 0
                      ? (j.query = _.query)
                      : (j.query = A.query)),
                  (j.userinfo = A.userinfo),
                  (j.host = A.host),
                  (j.port = A.port)),
                (j.scheme = A.scheme)),
            (j.fragment = _.fragment),
            j
        );
      }
      function Rn(A, _, T) {
        var M = u({ scheme: "null" }, T);
        return Ke(zt(Te(A, M), Te(_, M), M, !0), M);
      }
      function ot(A, _) {
        return (
          typeof A == "string"
            ? (A = Ke(Te(A, _), _))
            : i(A) === "object" && (A = Te(Ke(A, _), _)), A
        );
      }
      function Un(A, _, T) {
        return (
          typeof A == "string"
            ? (A = Ke(Te(A, T), T))
            : i(A) === "object" && (A = Ke(A, T)),
            typeof _ == "string"
              ? (_ = Ke(Te(_, T), T))
              : i(_) === "object" && (_ = Ke(_, T)),
            A === _
        );
      }
      function ri(A, _) {
        return A && A.toString().replace(!_ || !_.iri ? c.ESCAPE : f.ESCAPE, V);
      }
      function Qe(A, _) {
        return (
          A &&
          A.toString().replace(!_ || !_.iri ? c.PCT_ENCODED : f.PCT_ENCODED, ee)
        );
      }
      var st = {
          scheme: "http",
          domainHost: !0,
          parse: function (_, T) {
            return (
              _.host || (_.error = _.error || "HTTP URIs must have a host."), _
            );
          },
          serialize: function (_, T) {
            var M = String(_.scheme).toLowerCase() === "https";
            return (
              (_.port === (M ? 443 : 80) || _.port === "") && (_.port = void 0),
                _.path || (_.path = "/"),
                _
            );
          },
        },
        Zd = {
          scheme: "https",
          domainHost: st.domainHost,
          parse: st.parse,
          serialize: st.serialize,
        };
      function Qd(A) {
        return typeof A.secure == "boolean"
          ? A.secure
          : String(A.scheme).toLowerCase() === "wss";
      }
      var kn = {
          scheme: "ws",
          domainHost: !0,
          parse: function (_, T) {
            var M = _;
            return (
              (M.secure = Qd(M)),
                (M.resourceName = (M.path || "/") +
                  (M.query ? "?" + M.query : "")),
                (M.path = void 0),
                (M.query = void 0),
                M
            );
          },
          serialize: function (_, T) {
            if (
              ((_.port === (Qd(_) ? 443 : 80) || _.port === "") &&
                (_.port = void 0),
                typeof _.secure == "boolean" &&
                ((_.scheme = _.secure ? "wss" : "ws"), (_.secure = void 0)),
                _.resourceName)
            ) {
              var M = _.resourceName.split("?"),
                j = h(M, 2),
                Y = j[0],
                J = j[1];
              (_.path = Y && Y !== "/" ? Y : void 0),
                (_.query = J),
                (_.resourceName = void 0);
            }
            return (_.fragment = void 0), _;
          },
        },
        eh = {
          scheme: "wss",
          domainHost: kn.domainHost,
          parse: kn.parse,
          serialize: kn.serialize,
        },
        Yk = {},
        rh =
          "[A-Za-z0-9\\-\\.\\_\\~\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]",
        yr = "[0-9A-Fa-f]",
        Jk = a(
          a("%[EFef]" + yr + "%" + yr + yr + "%" + yr + yr) +
            "|" +
            a("%[89A-Fa-f]" + yr + "%" + yr + yr) +
            "|" +
            a("%" + yr + yr),
        ),
        Xk = "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]",
        Zk = "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]",
        Qk = n(Zk, '[\\"\\\\]'),
        eL = "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]",
        rL = new RegExp(rh, "g"),
        Gt = new RegExp(Jk, "g"),
        tL = new RegExp(n("[^]", Xk, "[\\.]", '[\\"]', Qk), "g"),
        th = new RegExp(n("[^]", rh, eL), "g"),
        nL = th;
      function Us(A) {
        var _ = ee(A);
        return _.match(rL) ? _ : A;
      }
      var nh = {
          scheme: "mailto",
          parse: function (_, T) {
            var M = _,
              j = (M.to = M.path ? M.path.split(",") : []);
            if (((M.path = void 0), M.query)) {
              for (
                var Y = !1,
                  J = {},
                  oe = M.query.split("&"),
                  Ee = 0,
                  Ce = oe.length;
                Ee < Ce;
                ++Ee
              ) {
                var ie = oe[Ee].split("=");
                switch (ie[0]) {
                  case "to":
                    for (
                      var $e = ie[1].split(","), Ie = 0, re = $e.length;
                      Ie < re;
                      ++Ie
                    ) {
                      j.push($e[Ie]);
                    }
                    break;
                  case "subject":
                    M.subject = Qe(ie[1], T);
                    break;
                  case "body":
                    M.body = Qe(ie[1], T);
                    break;
                  default:
                    (Y = !0), (J[Qe(ie[0], T)] = Qe(ie[1], T));
                    break;
                }
              }
              Y && (M.headers = J);
            }
            M.query = void 0;
            for (var Oe = 0, De = j.length; Oe < De; ++Oe) {
              var Ae = j[Oe].split("@");
              if (((Ae[0] = Qe(Ae[0])), T.unicodeSupport)) {
                Ae[1] = Qe(Ae[1], T).toLowerCase();
              } else {
                try {
                  Ae[1] = F.toASCII(Qe(Ae[1], T).toLowerCase());
                } catch (xr) {
                  M.error = M.error ||
                    "Email address's domain name can not be converted to ASCII via punycode: " +
                      xr;
                }
              }
              j[Oe] = Ae.join("@");
            }
            return M;
          },
          serialize: function (_, T) {
            var M = _,
              j = s(_.to);
            if (j) {
              for (var Y = 0, J = j.length; Y < J; ++Y) {
                var oe = String(j[Y]),
                  Ee = oe.lastIndexOf("@"),
                  Ce = oe
                    .slice(0, Ee)
                    .replace(Gt, Us)
                    .replace(Gt, o)
                    .replace(tL, V),
                  ie = oe.slice(Ee + 1);
                try {
                  ie = T.iri
                    ? F.toUnicode(ie)
                    : F.toASCII(Qe(ie, T).toLowerCase());
                } catch (Oe) {
                  M.error = M.error ||
                    "Email address's domain name can not be converted to " +
                      (T.iri ? "Unicode" : "ASCII") +
                      " via punycode: " +
                      Oe;
                }
                j[Y] = Ce + "@" + ie;
              }
              M.path = j.join(",");
            }
            var $e = (_.headers = _.headers || {});
            _.subject && ($e.subject = _.subject), _.body && ($e.body = _.body);
            var Ie = [];
            for (var re in $e) {
              $e[re] !== Yk[re] &&
                Ie.push(
                  re.replace(Gt, Us).replace(Gt, o).replace(th, V) +
                    "=" +
                    $e[re].replace(Gt, Us).replace(Gt, o).replace(nL, V),
                );
            }
            return Ie.length && (M.query = Ie.join("&")), M;
          },
        },
        aL = /^([^\:]+)\:(.*)/,
        ah = {
          scheme: "urn",
          parse: function (_, T) {
            var M = _.path && _.path.match(aL),
              j = _;
            if (M) {
              var Y = T.scheme || j.scheme || "urn",
                J = M[1].toLowerCase(),
                oe = M[2],
                Ee = Y + ":" + (T.nid || J),
                Ce = L[Ee];
              (j.nid = J),
                (j.nss = oe),
                (j.path = void 0),
                Ce && (j = Ce.parse(j, T));
            } else j.error = j.error || "URN can not be parsed.";
            return j;
          },
          serialize: function (_, T) {
            var M = T.scheme || _.scheme || "urn",
              j = _.nid,
              Y = M + ":" + (T.nid || j),
              J = L[Y];
            J && (_ = J.serialize(_, T));
            var oe = _,
              Ee = _.nss;
            return (oe.path = (j || T.nid) + ":" + Ee), oe;
          },
        },
        iL = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/,
        ih = {
          scheme: "urn:uuid",
          parse: function (_, T) {
            var M = _;
            return (
              (M.uuid = M.nss),
                (M.nss = void 0),
                !T.tolerant &&
                (!M.uuid || !M.uuid.match(iL)) &&
                (M.error = M.error || "UUID is not valid."),
                M
            );
          },
          serialize: function (_, T) {
            var M = _;
            return (M.nss = (_.uuid || "").toLowerCase()), M;
          },
        };
      (L[st.scheme] = st),
        (L[Zd.scheme] = Zd),
        (L[kn.scheme] = kn),
        (L[eh.scheme] = eh),
        (L[nh.scheme] = nh),
        (L[ah.scheme] = ah),
        (L[ih.scheme] = ih),
        (t.SCHEMES = L),
        (t.pctEncChar = V),
        (t.pctDecChars = ee),
        (t.parse = Te),
        (t.removeDotSegments = vr),
        (t.serialize = Ke),
        (t.resolveComponents = zt),
        (t.resolve = Rn),
        (t.normalize = ot),
        (t.equal = Un),
        (t.escapeComponent = ri),
        (t.unescapeComponent = Qe),
        Object.defineProperty(t, "__esModule", { value: !0 });
    });
  })(yM, ka),
    Object.defineProperty(Xo, "__esModule", { value: !0 });
  const vd = ka;
  (vd.code = 'require("ajv/dist/runtime/uri").default'),
    (Xo.default = vd),
    (function (e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.CodeGen =
          e.Name =
          e.nil =
          e.stringify =
          e.str =
          e._ =
          e.KeywordCxt =
            void 0);
      var r = nr;
      Object.defineProperty(e, "KeywordCxt", {
        enumerable: !0,
        get: function () {
          return r.KeywordCxt;
        },
      });
      var t = te;
      Object.defineProperty(e, "_", {
        enumerable: !0,
        get: function () {
          return t._;
        },
      }),
        Object.defineProperty(e, "str", {
          enumerable: !0,
          get: function () {
            return t.str;
          },
        }),
        Object.defineProperty(e, "stringify", {
          enumerable: !0,
          get: function () {
            return t.stringify;
          },
        }),
        Object.defineProperty(e, "nil", {
          enumerable: !0,
          get: function () {
            return t.nil;
          },
        }),
        Object.defineProperty(e, "Name", {
          enumerable: !0,
          get: function () {
            return t.Name;
          },
        }),
        Object.defineProperty(e, "CodeGen", {
          enumerable: !0,
          get: function () {
            return t.CodeGen;
          },
        });
      const n = On,
        a = An,
        i = et,
        o = Be,
        s = te,
        u = Me,
        l = Sn,
        c = se,
        f = vM,
        h = Xo,
        m = (x, I) => new RegExp(x, I);
      m.code = "new RegExp";
      const v = ["removeAdditional", "useDefaults", "coerceTypes"],
        y = new Set([
          "validate",
          "serialize",
          "parse",
          "wrapper",
          "root",
          "schema",
          "keyword",
          "pattern",
          "formats",
          "validate$data",
          "func",
          "obj",
          "Error",
        ]),
        d = {
          errorDataPath: "",
          format: "`validateFormats: false` can be used instead.",
          nullable: '"nullable" keyword is supported by default.',
          jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
          extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
          missingRefs:
            "Pass empty schema with $id that should be ignored to ajv.addSchema.",
          processCode:
            "Use option `code: {process: (code, schemaEnv: object) => string}`",
          sourceCode: "Use option `code: {source: true}`",
          strictDefaults: "It is default now, see option `strict`.",
          strictKeywords: "It is default now, see option `strict`.",
          uniqueItems: '"uniqueItems" keyword is always validated.',
          unknownFormats:
            "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
          cache: "Map is used as cache, schema object as key.",
          serialize: "Map is used as cache, schema object as key.",
          ajvErrors: "It is default now.",
        },
        p = {
          ignoreKeywordsWithRef: "",
          jsPropertySyntax: "",
          unicode:
            '"minLength"/"maxLength" account for unicode characters by default.',
        },
        $ = 200;
      function b(x) {
        var I,
          U,
          C,
          g,
          S,
          F,
          L,
          V,
          ee,
          Q,
          ce,
          Ue,
          Ze,
          K,
          We,
          Te,
          pr,
          Bt,
          Vt,
          Kt,
          Mn,
          vr,
          Ke,
          zt,
          Rn;
        const ot = x.strict,
          Un = (I = x.code) === null || I === void 0 ? void 0 : I.optimize,
          ri = Un === !0 || Un === void 0 ? 1 : Un || 0,
          Qe =
            (C = (U = x.code) === null || U === void 0 ? void 0 : U.regExp) !==
                null && C !== void 0
              ? C
              : m,
          st = (g = x.uriResolver) !== null && g !== void 0 ? g : h.default;
        return {
          strictSchema:
            (F = (S = x.strictSchema) !== null && S !== void 0 ? S : ot) !==
                null && F !== void 0
              ? F
              : !0,
          strictNumbers:
            (V = (L = x.strictNumbers) !== null && L !== void 0 ? L : ot) !==
                null && V !== void 0
              ? V
              : !0,
          strictTypes:
            (Q = (ee = x.strictTypes) !== null && ee !== void 0 ? ee : ot) !==
                null && Q !== void 0
              ? Q
              : "log",
          strictTuples:
            (Ue = (ce = x.strictTuples) !== null && ce !== void 0 ? ce : ot) !==
                null && Ue !== void 0
              ? Ue
              : "log",
          strictRequired: (K = (Ze = x.strictRequired) !== null && Ze !== void 0
                  ? Ze
                  : ot) !==
                null && K !== void 0
            ? K
            : !1,
          code: x.code
            ? { ...x.code, optimize: ri, regExp: Qe }
            : { optimize: ri, regExp: Qe },
          loopRequired: (We = x.loopRequired) !== null && We !== void 0
            ? We
            : $,
          loopEnum: (Te = x.loopEnum) !== null && Te !== void 0 ? Te : $,
          meta: (pr = x.meta) !== null && pr !== void 0 ? pr : !0,
          messages: (Bt = x.messages) !== null && Bt !== void 0 ? Bt : !0,
          inlineRefs: (Vt = x.inlineRefs) !== null && Vt !== void 0 ? Vt : !0,
          schemaId: (Kt = x.schemaId) !== null && Kt !== void 0 ? Kt : "$id",
          addUsedSchema: (Mn = x.addUsedSchema) !== null && Mn !== void 0
            ? Mn
            : !0,
          validateSchema: (vr = x.validateSchema) !== null && vr !== void 0
            ? vr
            : !0,
          validateFormats: (Ke = x.validateFormats) !== null && Ke !== void 0
            ? Ke
            : !0,
          unicodeRegExp: (zt = x.unicodeRegExp) !== null && zt !== void 0
            ? zt
            : !0,
          int32range: (Rn = x.int32range) !== null && Rn !== void 0 ? Rn : !0,
          uriResolver: st,
        };
      }
      class w {
        constructor(I = {}) {
          (this.schemas = {}),
            (this.refs = {}),
            (this.formats = {}),
            (this._compilations = new Set()),
            (this._loading = {}),
            (this._cache = new Map()),
            (I = this.opts = { ...I, ...b(I) });
          const { es5: U, lines: C } = this.opts.code;
          (this.scope = new s.ValueScope({
            scope: {},
            prefixes: y,
            es5: U,
            lines: C,
          })), (this.logger = q(I.logger));
          const g = I.validateFormats;
          (I.validateFormats = !1),
            (this.RULES = (0, i.getRules)()),
            N.call(this, d, I, "NOT SUPPORTED"),
            N.call(this, p, I, "DEPRECATED", "warn"),
            (this._metaOpts = k.call(this)),
            I.formats && D.call(this),
            this._addVocabularies(),
            this._addDefaultMetaSchema(),
            I.keywords && R.call(this, I.keywords),
            typeof I.meta == "object" && this.addMetaSchema(I.meta),
            E.call(this),
            (I.validateFormats = g);
        }
        _addVocabularies() {
          this.addKeyword("$async");
        }
        _addDefaultMetaSchema() {
          const { $data: I, meta: U, schemaId: C } = this.opts;
          let g = f;
          C === "id" && ((g = { ...f }), (g.id = g.$id), delete g.$id),
            U && I && this.addMetaSchema(g, g[C], !1);
        }
        defaultMeta() {
          const { meta: I, schemaId: U } = this.opts;
          return (this.opts.defaultMeta = typeof I == "object"
            ? I[U] || I
            : void 0);
        }
        validate(I, U) {
          let C;
          if (typeof I == "string") {
            if (((C = this.getSchema(I)), !C)) {
              throw new Error(`no schema with key or ref "${I}"`);
            }
          } else C = this.compile(I);
          const g = C(U);
          return "$async" in C || (this.errors = C.errors), g;
        }
        compile(I, U) {
          const C = this._addSchema(I, U);
          return C.validate || this._compileSchemaEnv(C);
        }
        compileAsync(I, U) {
          if (typeof this.opts.loadSchema != "function") {
            throw new Error("options.loadSchema should be a function");
          }
          const { loadSchema: C } = this.opts;
          return g.call(this, I, U);
          async function g(Q, ce) {
            await S.call(this, Q.$schema);
            const Ue = this._addSchema(Q, ce);
            return Ue.validate || F.call(this, Ue);
          }
          async function S(Q) {
            Q && !this.getSchema(Q) && (await g.call(this, { $ref: Q }, !0));
          }
          async function F(Q) {
            try {
              return this._compileSchemaEnv(Q);
            } catch (ce) {
              if (!(ce instanceof a.default)) throw ce;
              return (
                L.call(this, ce),
                  await V.call(this, ce.missingSchema),
                  F.call(this, Q)
              );
            }
          }
          function L({ missingSchema: Q, missingRef: ce }) {
            if (this.refs[Q]) {
              throw new Error(
                `AnySchema ${Q} is loaded but ${ce} cannot be resolved`,
              );
            }
          }
          async function V(Q) {
            const ce = await ee.call(this, Q);
            this.refs[Q] || (await S.call(this, ce.$schema)),
              this.refs[Q] || this.addSchema(ce, Q, U);
          }
          async function ee(Q) {
            const ce = this._loading[Q];
            if (ce) return ce;
            try {
              return await (this._loading[Q] = C(Q));
            } finally {
              delete this._loading[Q];
            }
          }
        }
        addSchema(I, U, C, g = this.opts.validateSchema) {
          if (Array.isArray(I)) {
            for (const F of I) this.addSchema(F, void 0, C, g);
            return this;
          }
          let S;
          if (typeof I == "object") {
            const { schemaId: F } = this.opts;
            if (((S = I[F]), S !== void 0 && typeof S != "string")) {
              throw new Error(`schema ${F} must be string`);
            }
          }
          return (
            (U = (0, u.normalizeId)(U || S)),
              this._checkUnique(U),
              (this.schemas[U] = this._addSchema(I, C, U, g, !0)),
              this
          );
        }
        addMetaSchema(I, U, C = this.opts.validateSchema) {
          return this.addSchema(I, U, !0, C), this;
        }
        validateSchema(I, U) {
          if (typeof I == "boolean") return !0;
          let C;
          if (((C = I.$schema), C !== void 0 && typeof C != "string")) {
            throw new Error("$schema must be a string");
          }
          if (((C = C || this.opts.defaultMeta || this.defaultMeta()), !C)) {
            return (
              this.logger.warn("meta-schema not available"),
                (this.errors = null),
                !0
            );
          }
          const g = this.validate(C, I);
          if (!g && U) {
            const S = "schema is invalid: " + this.errorsText();
            if (this.opts.validateSchema === "log") this.logger.error(S);
            else throw new Error(S);
          }
          return g;
        }
        getSchema(I) {
          let U;
          for (; typeof (U = O.call(this, I)) == "string";) I = U;
          if (U === void 0) {
            const { schemaId: C } = this.opts,
              g = new o.SchemaEnv({ schema: {}, schemaId: C });
            if (((U = o.resolveSchema.call(this, g, I)), !U)) return;
            this.refs[I] = U;
          }
          return U.validate || this._compileSchemaEnv(U);
        }
        removeSchema(I) {
          if (I instanceof RegExp) {
            return (
              this._removeAllSchemas(this.schemas, I),
                this._removeAllSchemas(this.refs, I),
                this
            );
          }
          switch (typeof I) {
            case "undefined":
              return (
                this._removeAllSchemas(this.schemas),
                  this._removeAllSchemas(this.refs),
                  this._cache.clear(),
                  this
              );
            case "string": {
              const U = O.call(this, I);
              return (
                typeof U == "object" && this._cache.delete(U.schema),
                  delete this.schemas[I],
                  delete this.refs[I],
                  this
              );
            }
            case "object": {
              const U = I;
              this._cache.delete(U);
              let C = I[this.opts.schemaId];
              return (
                C &&
                ((C = (0, u.normalizeId)(C)),
                  delete this.schemas[C],
                  delete this.refs[C]), this
              );
            }
            default:
              throw new Error("ajv.removeSchema: invalid parameter");
          }
        }
        addVocabulary(I) {
          for (const U of I) this.addKeyword(U);
          return this;
        }
        addKeyword(I, U) {
          let C;
          if (typeof I == "string") {
            (C = I),
              typeof U == "object" &&
              (this.logger.warn(
                "these parameters are deprecated, see docs for addKeyword",
              ),
                (U.keyword = C));
          } else if (typeof I == "object" && U === void 0) {
            if (((U = I), (C = U.keyword), Array.isArray(C) && !C.length)) {
              throw new Error(
                "addKeywords: keyword must be string or non-empty array",
              );
            }
          } else throw new Error("invalid addKeywords parameters");
          if ((G.call(this, C, U), !U)) {
            return (0, c.eachItem)(C, (S) => H.call(this, S)), this;
          }
          we.call(this, U);
          const g = {
            ...U,
            type: (0, l.getJSONTypes)(U.type),
            schemaType: (0, l.getJSONTypes)(U.schemaType),
          };
          return (
            (0, c.eachItem)(
              C,
              g.type.length === 0
                ? (S) => H.call(this, S, g)
                : (S) => g.type.forEach((F) => H.call(this, S, g, F)),
            ), this
          );
        }
        getKeyword(I) {
          const U = this.RULES.all[I];
          return typeof U == "object" ? U.definition : !!U;
        }
        removeKeyword(I) {
          const { RULES: U } = this;
          delete U.keywords[I], delete U.all[I];
          for (const C of U.rules) {
            const g = C.rules.findIndex((S) => S.keyword === I);
            g >= 0 && C.rules.splice(g, 1);
          }
          return this;
        }
        addFormat(I, U) {
          return (
            typeof U == "string" && (U = new RegExp(U)),
              (this.formats[I] = U),
              this
          );
        }
        errorsText(
          I = this.errors,
          { separator: U = ", ", dataVar: C = "data" } = {},
        ) {
          return !I || I.length === 0
            ? "No errors"
            : I.map((g) => `${C}${g.instancePath} ${g.message}`).reduce(
              (g, S) => g + U + S,
            );
        }
        $dataMetaSchema(I, U) {
          const C = this.RULES.all;
          I = JSON.parse(JSON.stringify(I));
          for (const g of U) {
            const S = g.split("/").slice(1);
            let F = I;
            for (const L of S) F = F[L];
            for (const L in C) {
              const V = C[L];
              if (typeof V != "object") continue;
              const { $data: ee } = V.definition,
                Q = F[L];
              ee && Q && (F[L] = ne(Q));
            }
          }
          return I;
        }
        _removeAllSchemas(I, U) {
          for (const C in I) {
            const g = I[C];
            (!U || U.test(C)) &&
              (typeof g == "string"
                ? delete I[C]
                : g && !g.meta && (this._cache.delete(g.schema), delete I[C]));
          }
        }
        _addSchema(
          I,
          U,
          C,
          g = this.opts.validateSchema,
          S = this.opts.addUsedSchema,
        ) {
          let F;
          const { schemaId: L } = this.opts;
          if (typeof I == "object") F = I[L];
          else {
            if (this.opts.jtd) throw new Error("schema must be object");
            if (typeof I != "boolean") {
              throw new Error("schema must be object or boolean");
            }
          }
          let V = this._cache.get(I);
          if (V !== void 0) return V;
          C = (0, u.normalizeId)(F || C);
          const ee = u.getSchemaRefs.call(this, I, C);
          return (
            (V = new o.SchemaEnv({
              schema: I,
              schemaId: L,
              meta: U,
              baseId: C,
              localRefs: ee,
            })),
              this._cache.set(V.schema, V),
              S &&
              !C.startsWith("#") &&
              (C && this._checkUnique(C), (this.refs[C] = V)),
              g && this.validateSchema(I, !0),
              V
          );
        }
        _checkUnique(I) {
          if (this.schemas[I] || this.refs[I]) {
            throw new Error(`schema with key or id "${I}" already exists`);
          }
        }
        _compileSchemaEnv(I) {
          if (
            (I.meta
              ? this._compileMetaSchema(I)
              : o.compileSchema.call(this, I),
              !I.validate)
          ) {
            throw new Error("ajv implementation error");
          }
          return I.validate;
        }
        _compileMetaSchema(I) {
          const U = this.opts;
          this.opts = this._metaOpts;
          try {
            o.compileSchema.call(this, I);
          } finally {
            this.opts = U;
          }
        }
      }
      (e.default = w),
        (w.ValidationError = n.default),
        (w.MissingRefError = a.default);
      function N(x, I, U, C = "error") {
        for (const g in x) {
          const S = g;
          S in I && this.logger[C](`${U}: option ${g}. ${x[S]}`);
        }
      }
      function O(x) {
        return (x = (0, u.normalizeId)(x)), this.schemas[x] || this.refs[x];
      }
      function E() {
        const x = this.opts.schemas;
        if (x) {
          if (Array.isArray(x)) this.addSchema(x);
          else for (const I in x) this.addSchema(x[I], I);
        }
      }
      function D() {
        for (const x in this.opts.formats) {
          const I = this.opts.formats[x];
          I && this.addFormat(x, I);
        }
      }
      function R(x) {
        if (Array.isArray(x)) {
          this.addVocabulary(x);
          return;
        }
        this.logger.warn("keywords option as map is deprecated, pass array");
        for (const I in x) {
          const U = x[I];
          U.keyword || (U.keyword = I), this.addKeyword(U);
        }
      }
      function k() {
        const x = { ...this.opts };
        for (const I of v) delete x[I];
        return x;
      }
      const B = { log() {}, warn() {}, error() {} };
      function q(x) {
        if (x === !1) return B;
        if (x === void 0) return console;
        if (x.log && x.warn && x.error) return x;
        throw new Error("logger must implement log, warn and error methods");
      }
      const z = /^[a-z_$][a-z0-9_$:-]*$/i;
      function G(x, I) {
        const { RULES: U } = this;
        if (
          ((0, c.eachItem)(x, (C) => {
            if (U.keywords[C]) {
              throw new Error(`Keyword ${C} is already defined`);
            }
            if (!z.test(C)) throw new Error(`Keyword ${C} has invalid name`);
          }),
            !!I && I.$data && !("code" in I || "validate" in I))
        ) {
          throw new Error(
            '$data keyword must have "code" or "validate" function',
          );
        }
      }
      function H(x, I, U) {
        var C;
        const g = I == null ? void 0 : I.post;
        if (U && g) {
          throw new Error('keyword with "post" flag cannot have "type"');
        }
        const { RULES: S } = this;
        let F = g ? S.post : S.rules.find(({ type: V }) => V === U);
        if (
          (F || ((F = { type: U, rules: [] }), S.rules.push(F)),
            (S.keywords[x] = !0),
            !I)
        ) {
          return;
        }
        const L = {
          keyword: x,
          definition: {
            ...I,
            type: (0, l.getJSONTypes)(I.type),
            schemaType: (0, l.getJSONTypes)(I.schemaType),
          },
        };
        I.before ? pe.call(this, F, L, I.before) : F.rules.push(L),
          (S.all[x] = L),
          (C = I.implements) === null ||
          C === void 0 ||
          C.forEach((V) => this.addKeyword(V));
      }
      function pe(x, I, U) {
        const C = x.rules.findIndex((g) => g.keyword === U);
        C >= 0
          ? x.rules.splice(C, 0, I)
          : (x.rules.push(I), this.logger.warn(`rule ${U} is not defined`));
      }
      function we(x) {
        let { metaSchema: I } = x;
        I !== void 0 &&
          (x.$data && this.opts.$data && (I = ne(I)),
            (x.validateSchema = this.compile(I, !0)));
      }
      const le = {
        $ref:
          "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#",
      };
      function ne(x) {
        return { anyOf: [x, le] };
      }
    })(Lf);
  var Zo = {},
    Qo = {},
    es = {};
  Object.defineProperty(es, "__esModule", { value: !0 });
  const gM = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    },
  };
  es.default = gM;
  var nt = {};
  Object.defineProperty(nt, "__esModule", { value: !0 }),
    (nt.callRef = nt.getValidate = void 0);
  const $M = An,
    yd = ae,
    Ve = te,
    Ut = dr,
    gd = Be,
    La = se,
    _M = {
      keyword: "$ref",
      schemaType: "string",
      code(e) {
        const { gen: r, schema: t, it: n } = e,
          { baseId: a, schemaEnv: i, validateName: o, opts: s, self: u } = n,
          { root: l } = i;
        if ((t === "#" || t === "#/") && a === l.baseId) return f();
        const c = gd.resolveRef.call(u, l, a, t);
        if (c === void 0) throw new $M.default(n.opts.uriResolver, a, t);
        if (c instanceof gd.SchemaEnv) return h(c);
        return m(c);
        function f() {
          if (i === l) return xa(e, o, i, i.$async);
          const v = r.scopeValue("root", { ref: l });
          return xa(e, (0, Ve._)`${v}.validate`, l, l.$async);
        }
        function h(v) {
          const y = $d(e, v);
          xa(e, y, v, v.$async);
        }
        function m(v) {
          const y = r.scopeValue(
              "schema",
              s.code.source === !0
                ? { ref: v, code: (0, Ve.stringify)(v) }
                : { ref: v },
            ),
            d = r.name("valid"),
            p = e.subschema(
              {
                schema: v,
                dataTypes: [],
                schemaPath: Ve.nil,
                topSchemaRef: y,
                errSchemaPath: t,
              },
              d,
            );
          e.mergeEvaluated(p), e.ok(d);
        }
      },
    };
  function $d(e, r) {
    const { gen: t } = e;
    return r.validate
      ? t.scopeValue("validate", { ref: r.validate })
      : (0, Ve._)`${t.scopeValue("wrapper", { ref: r })}.validate`;
  }
  nt.getValidate = $d;
  function xa(e, r, t, n) {
    const { gen: a, it: i } = e,
      { allErrors: o, schemaEnv: s, opts: u } = i,
      l = u.passContext ? Ut.default.this : Ve.nil;
    n ? c() : f();
    function c() {
      if (!s.$async) throw new Error("async schema referenced by sync schema");
      const v = a.let("valid");
      a.try(
        () => {
          a.code((0, Ve._)`await ${(0, yd.callValidateCode)(e, r, l)}`),
            m(r),
            o || a.assign(v, !0);
        },
        (y) => {
          a.if(
            (0, Ve._)`!(${y} instanceof ${i.ValidationError})`,
            () => a.throw(y),
          ),
            h(y),
            o || a.assign(v, !1);
        },
      ), e.ok(v);
    }
    function f() {
      e.result(
        (0, yd.callValidateCode)(e, r, l),
        () => m(r),
        () => h(r),
      );
    }
    function h(v) {
      const y = (0, Ve._)`${v}.errors`;
      a.assign(
        Ut.default.vErrors,
        (0,
          Ve._)`${Ut.default.vErrors} === null ? ${y} : ${Ut.default.vErrors}.concat(${y})`,
      ), a.assign(Ut.default.errors, (0, Ve._)`${Ut.default.vErrors}.length`);
    }
    function m(v) {
      var y;
      if (!i.opts.unevaluated) return;
      const d = (y = t == null ? void 0 : t.validate) === null || y === void 0
        ? void 0
        : y.evaluated;
      if (i.props !== !0) {
        if (d && !d.dynamicProps) {
          d.props !== void 0 &&
            (i.props = La.mergeEvaluated.props(a, d.props, i.props));
        } else {
          const p = a.var("props", (0, Ve._)`${v}.evaluated.props`);
          i.props = La.mergeEvaluated.props(a, p, i.props, Ve.Name);
        }
      }
      if (i.items !== !0) {
        if (d && !d.dynamicItems) {
          d.items !== void 0 &&
            (i.items = La.mergeEvaluated.items(a, d.items, i.items));
        } else {
          const p = a.var("items", (0, Ve._)`${v}.evaluated.items`);
          i.items = La.mergeEvaluated.items(a, p, i.items, Ve.Name);
        }
      }
    }
  }
  (nt.callRef = xa),
    (nt.default = _M),
    Object.defineProperty(Qo, "__esModule", { value: !0 });
  const bM = es,
    SM = nt,
    EM = [
      "$schema",
      "$id",
      "$defs",
      "$vocabulary",
      { keyword: "$comment" },
      "definitions",
      bM.default,
      SM.default,
    ];
  Qo.default = EM;
  var rs = {},
    ts = {};
  Object.defineProperty(ts, "__esModule", { value: !0 });
  const qa = te,
    kr = qa.operators,
    Ba = {
      maximum: { okStr: "<=", ok: kr.LTE, fail: kr.GT },
      minimum: { okStr: ">=", ok: kr.GTE, fail: kr.LT },
      exclusiveMaximum: { okStr: "<", ok: kr.LT, fail: kr.GTE },
      exclusiveMinimum: { okStr: ">", ok: kr.GT, fail: kr.LTE },
    },
    wM = {
      message: ({ keyword: e, schemaCode: r }) =>
        (0, qa.str)`must be ${Ba[e].okStr} ${r}`,
      params: ({ keyword: e, schemaCode: r }) =>
        (0, qa._)`{comparison: ${Ba[e].okStr}, limit: ${r}}`,
    },
    OM = {
      keyword: Object.keys(Ba),
      type: "number",
      schemaType: "number",
      $data: !0,
      error: wM,
      code(e) {
        const { keyword: r, data: t, schemaCode: n } = e;
        e.fail$data((0, qa._)`${t} ${Ba[r].fail} ${n} || isNaN(${t})`);
      },
    };
  ts.default = OM;
  var ns = {};
  Object.defineProperty(ns, "__esModule", { value: !0 });
  const Tn = te,
    AM = {
      keyword: "multipleOf",
      type: "number",
      schemaType: "number",
      $data: !0,
      error: {
        message: ({ schemaCode: e }) => (0, Tn.str)`must be multiple of ${e}`,
        params: ({ schemaCode: e }) => (0, Tn._)`{multipleOf: ${e}}`,
      },
      code(e) {
        const { gen: r, data: t, schemaCode: n, it: a } = e,
          i = a.opts.multipleOfPrecision,
          o = r.let("res"),
          s = i
            ? (0, Tn._)`Math.abs(Math.round(${o}) - ${o}) > 1e-${i}`
            : (0, Tn._)`${o} !== parseInt(${o})`;
        e.fail$data((0, Tn._)`(${n} === 0 || (${o} = ${t}/${n}, ${s}))`);
      },
    };
  ns.default = AM;
  var as = {},
    is = {};
  Object.defineProperty(is, "__esModule", { value: !0 });
  function _d(e) {
    const r = e.length;
    let t = 0,
      n = 0,
      a;
    for (; n < r;) {
      t++,
        (a = e.charCodeAt(n++)),
        a >= 55296 &&
        a <= 56319 &&
        n < r &&
        ((a = e.charCodeAt(n)), (a & 64512) === 56320 && n++);
    }
    return t;
  }
  (is.default = _d),
    (_d.code = 'require("ajv/dist/runtime/ucs2length").default'),
    Object.defineProperty(as, "__esModule", { value: !0 });
  const at = te,
    TM = se,
    PM = is,
    CM = {
      keyword: ["maxLength", "minLength"],
      type: "string",
      schemaType: "number",
      $data: !0,
      error: {
        message({ keyword: e, schemaCode: r }) {
          const t = e === "maxLength" ? "more" : "fewer";
          return (0, at.str)`must NOT have ${t} than ${r} characters`;
        },
        params: ({ schemaCode: e }) => (0, at._)`{limit: ${e}}`,
      },
      code(e) {
        const { keyword: r, data: t, schemaCode: n, it: a } = e,
          i = r === "maxLength" ? at.operators.GT : at.operators.LT,
          o = a.opts.unicode === !1
            ? (0, at._)`${t}.length`
            : (0, at._)`${(0, TM.useFunc)(e.gen, PM.default)}(${t})`;
        e.fail$data((0, at._)`${o} ${i} ${n}`);
      },
    };
  as.default = CM;
  var os = {};
  Object.defineProperty(os, "__esModule", { value: !0 });
  const IM = ae,
    Va = te,
    NM = {
      keyword: "pattern",
      type: "string",
      schemaType: "string",
      $data: !0,
      error: {
        message: ({ schemaCode: e }) => (0, Va.str)`must match pattern "${e}"`,
        params: ({ schemaCode: e }) => (0, Va._)`{pattern: ${e}}`,
      },
      code(e) {
        const { data: r, $data: t, schema: n, schemaCode: a, it: i } = e,
          o = i.opts.unicodeRegExp ? "u" : "",
          s = t
            ? (0, Va._)`(new RegExp(${a}, ${o}))`
            : (0, IM.usePattern)(e, n);
        e.fail$data((0, Va._)`!${s}.test(${r})`);
      },
    };
  os.default = NM;
  var ss = {};
  Object.defineProperty(ss, "__esModule", { value: !0 });
  const Pn = te,
    DM = {
      keyword: ["maxProperties", "minProperties"],
      type: "object",
      schemaType: "number",
      $data: !0,
      error: {
        message({ keyword: e, schemaCode: r }) {
          const t = e === "maxProperties" ? "more" : "fewer";
          return (0, Pn.str)`must NOT have ${t} than ${r} properties`;
        },
        params: ({ schemaCode: e }) => (0, Pn._)`{limit: ${e}}`,
      },
      code(e) {
        const { keyword: r, data: t, schemaCode: n } = e,
          a = r === "maxProperties" ? Pn.operators.GT : Pn.operators.LT;
        e.fail$data((0, Pn._)`Object.keys(${t}).length ${a} ${n}`);
      },
    };
  ss.default = DM;
  var us = {};
  Object.defineProperty(us, "__esModule", { value: !0 });
  const Cn = ae,
    In = te,
    FM = se,
    jM = {
      keyword: "required",
      type: "object",
      schemaType: "array",
      $data: !0,
      error: {
        message: ({ params: { missingProperty: e } }) =>
          (0, In.str)`must have required property '${e}'`,
        params: ({ params: { missingProperty: e } }) =>
          (0, In._)`{missingProperty: ${e}}`,
      },
      code(e) {
        const {
            gen: r,
            schema: t,
            schemaCode: n,
            data: a,
            $data: i,
            it: o,
          } = e,
          { opts: s } = o;
        if (!i && t.length === 0) return;
        const u = t.length >= s.loopRequired;
        if ((o.allErrors ? l() : c(), s.strictRequired)) {
          const m = e.parentSchema.properties,
            { definedProperties: v } = e.it;
          for (const y of t) {
            if ((m == null ? void 0 : m[y]) === void 0 && !v.has(y)) {
              const d = o.schemaEnv.baseId + o.errSchemaPath,
                p =
                  `required property "${y}" is not defined at "${d}" (strictRequired)`;
              (0, FM.checkStrictMode)(o, p, o.opts.strictRequired);
            }
          }
        }
        function l() {
          if (u || i) e.block$data(In.nil, f);
          else for (const m of t) (0, Cn.checkReportMissingProp)(e, m);
        }
        function c() {
          const m = r.let("missing");
          if (u || i) {
            const v = r.let("valid", !0);
            e.block$data(v, () => h(m, v)), e.ok(v);
          } else {
            r.if((0, Cn.checkMissingProp)(e, t, m)),
              (0, Cn.reportMissingProp)(e, m),
              r.else();
          }
        }
        function f() {
          r.forOf("prop", n, (m) => {
            e.setParams({ missingProperty: m }),
              r.if(
                (0, Cn.noPropertyInData)(r, a, m, s.ownProperties),
                () => e.error(),
              );
          });
        }
        function h(m, v) {
          e.setParams({ missingProperty: m }),
            r.forOf(
              m,
              n,
              () => {
                r.assign(v, (0, Cn.propertyInData)(r, a, m, s.ownProperties)),
                  r.if((0, In.not)(v), () => {
                    e.error(), r.break();
                  });
              },
              In.nil,
            );
        }
      },
    };
  us.default = jM;
  var ls = {};
  Object.defineProperty(ls, "__esModule", { value: !0 });
  const Nn = te,
    MM = {
      keyword: ["maxItems", "minItems"],
      type: "array",
      schemaType: "number",
      $data: !0,
      error: {
        message({ keyword: e, schemaCode: r }) {
          const t = e === "maxItems" ? "more" : "fewer";
          return (0, Nn.str)`must NOT have ${t} than ${r} items`;
        },
        params: ({ schemaCode: e }) => (0, Nn._)`{limit: ${e}}`,
      },
      code(e) {
        const { keyword: r, data: t, schemaCode: n } = e,
          a = r === "maxItems" ? Nn.operators.GT : Nn.operators.LT;
        e.fail$data((0, Nn._)`${t}.length ${a} ${n}`);
      },
    };
  ls.default = MM;
  var cs = {},
    Dn = {};
  Object.defineProperty(Dn, "__esModule", { value: !0 });
  const bd = Yf;
  (bd.code = 'require("ajv/dist/runtime/equal").default'),
    (Dn.default = bd),
    Object.defineProperty(cs, "__esModule", { value: !0 });
  const fs = Sn,
    Re = te,
    RM = se,
    UM = Dn,
    kM = {
      keyword: "uniqueItems",
      type: "array",
      schemaType: "boolean",
      $data: !0,
      error: {
        message: ({ params: { i: e, j: r } }) =>
          (0,
            Re.str)`must NOT have duplicate items (items ## ${r} and ${e} are identical)`,
        params: ({ params: { i: e, j: r } }) => (0, Re._)`{i: ${e}, j: ${r}}`,
      },
      code(e) {
        const {
          gen: r,
          data: t,
          $data: n,
          schema: a,
          parentSchema: i,
          schemaCode: o,
          it: s,
        } = e;
        if (!n && !a) return;
        const u = r.let("valid"),
          l = i.items ? (0, fs.getSchemaTypes)(i.items) : [];
        e.block$data(u, c, (0, Re._)`${o} === false`), e.ok(u);
        function c() {
          const v = r.let("i", (0, Re._)`${t}.length`),
            y = r.let("j");
          e.setParams({ i: v, j: y }),
            r.assign(u, !0),
            r.if((0, Re._)`${v} > 1`, () => (f() ? h : m)(v, y));
        }
        function f() {
          return (
            l.length > 0 && !l.some((v) => v === "object" || v === "array")
          );
        }
        function h(v, y) {
          const d = r.name("item"),
            p = (0, fs.checkDataTypes)(
              l,
              d,
              s.opts.strictNumbers,
              fs.DataType.Wrong,
            ),
            $ = r.const("indices", (0, Re._)`{}`);
          r.for((0, Re._)`;${v}--;`, () => {
            r.let(d, (0, Re._)`${t}[${v}]`),
              r.if(p, (0, Re._)`continue`),
              l.length > 1 &&
              r.if(
                (0, Re._)`typeof ${d} == "string"`,
                (0, Re._)`${d} += "_"`,
              ),
              r
                .if((0, Re._)`typeof ${$}[${d}] == "number"`, () => {
                  r.assign(y, (0, Re._)`${$}[${d}]`),
                    e.error(),
                    r.assign(u, !1).break();
                })
                .code((0, Re._)`${$}[${d}] = ${v}`);
          });
        }
        function m(v, y) {
          const d = (0, RM.useFunc)(r, UM.default),
            p = r.name("outer");
          r.label(p).for(
            (0, Re._)`;${v}--;`,
            () =>
              r.for(
                (0, Re._)`${y} = ${v}; ${y}--;`,
                () =>
                  r.if((0, Re._)`${d}(${t}[${v}], ${t}[${y}])`, () => {
                    e.error(), r.assign(u, !1).break(p);
                  }),
              ),
          );
        }
      },
    };
  cs.default = kM;
  var ds = {};
  Object.defineProperty(ds, "__esModule", { value: !0 });
  const hs = te,
    LM = se,
    xM = Dn,
    qM = {
      keyword: "const",
      $data: !0,
      error: {
        message: "must be equal to constant",
        params: ({ schemaCode: e }) => (0, hs._)`{allowedValue: ${e}}`,
      },
      code(e) {
        const { gen: r, data: t, $data: n, schemaCode: a, schema: i } = e;
        n || (i && typeof i == "object")
          ? e.fail$data(
            (0, hs._)`!${(0, LM.useFunc)(r, xM.default)}(${t}, ${a})`,
          )
          : e.fail((0, hs._)`${i} !== ${t}`);
      },
    };
  ds.default = qM;
  var ms = {};
  Object.defineProperty(ms, "__esModule", { value: !0 });
  const Fn = te,
    BM = se,
    VM = Dn,
    KM = {
      keyword: "enum",
      schemaType: "array",
      $data: !0,
      error: {
        message: "must be equal to one of the allowed values",
        params: ({ schemaCode: e }) => (0, Fn._)`{allowedValues: ${e}}`,
      },
      code(e) {
        const {
          gen: r,
          data: t,
          $data: n,
          schema: a,
          schemaCode: i,
          it: o,
        } = e;
        if (!n && a.length === 0) {
          throw new Error("enum must have non-empty array");
        }
        const s = a.length >= o.opts.loopEnum;
        let u;
        const l = () => u ?? (u = (0, BM.useFunc)(r, VM.default));
        let c;
        if (s || n) (c = r.let("valid")), e.block$data(c, f);
        else {
          if (!Array.isArray(a)) throw new Error("ajv implementation error");
          const m = r.const("vSchema", i);
          c = (0, Fn.or)(...a.map((v, y) => h(m, y)));
        }
        e.pass(c);
        function f() {
          r.assign(c, !1),
            r.forOf(
              "v",
              i,
              (m) =>
                r.if(
                  (0, Fn._)`${l()}(${t}, ${m})`,
                  () => r.assign(c, !0).break(),
                ),
            );
        }
        function h(m, v) {
          const y = a[v];
          return typeof y == "object" && y !== null
            ? (0, Fn._)`${l()}(${t}, ${m}[${v}])`
            : (0, Fn._)`${t} === ${y}`;
        }
      },
    };
  (ms.default = KM), Object.defineProperty(rs, "__esModule", { value: !0 });
  const zM = ts,
    GM = ns,
    WM = as,
    HM = os,
    YM = ss,
    JM = us,
    XM = ls,
    ZM = cs,
    QM = ds,
    eR = ms,
    rR = [
      zM.default,
      GM.default,
      WM.default,
      HM.default,
      YM.default,
      JM.default,
      XM.default,
      ZM.default,
      { keyword: "type", schemaType: ["string", "array"] },
      { keyword: "nullable", schemaType: "boolean" },
      QM.default,
      eR.default,
    ];
  rs.default = rR;
  var ps = {},
    kt = {};
  Object.defineProperty(kt, "__esModule", { value: !0 }),
    (kt.validateAdditionalItems = void 0);
  const it = te,
    vs = se,
    tR = {
      keyword: "additionalItems",
      type: "array",
      schemaType: ["boolean", "object"],
      before: "uniqueItems",
      error: {
        message: ({ params: { len: e } }) =>
          (0, it.str)`must NOT have more than ${e} items`,
        params: ({ params: { len: e } }) => (0, it._)`{limit: ${e}}`,
      },
      code(e) {
        const { parentSchema: r, it: t } = e,
          { items: n } = r;
        if (!Array.isArray(n)) {
          (0, vs.checkStrictMode)(
            t,
            '"additionalItems" is ignored when "items" is not an array of schemas',
          );
          return;
        }
        Sd(e, n);
      },
    };
  function Sd(e, r) {
    const { gen: t, schema: n, data: a, keyword: i, it: o } = e;
    o.items = !0;
    const s = t.const("len", (0, it._)`${a}.length`);
    if (n === !1) {
      e.setParams({ len: r.length }), e.pass((0, it._)`${s} <= ${r.length}`);
    } else if (typeof n == "object" && !(0, vs.alwaysValidSchema)(o, n)) {
      const l = t.var("valid", (0, it._)`${s} <= ${r.length}`);
      t.if((0, it.not)(l), () => u(l)), e.ok(l);
    }
    function u(l) {
      t.forRange("i", r.length, s, (c) => {
        e.subschema({ keyword: i, dataProp: c, dataPropType: vs.Type.Num }, l),
          o.allErrors || t.if((0, it.not)(l), () => t.break());
      });
    }
  }
  (kt.validateAdditionalItems = Sd), (kt.default = tR);
  var ys = {},
    Lt = {};
  Object.defineProperty(Lt, "__esModule", { value: !0 }),
    (Lt.validateTuple = void 0);
  const Ed = te,
    Ka = se,
    nR = ae,
    aR = {
      keyword: "items",
      type: "array",
      schemaType: ["object", "array", "boolean"],
      before: "uniqueItems",
      code(e) {
        const { schema: r, it: t } = e;
        if (Array.isArray(r)) return wd(e, "additionalItems", r);
        (t.items = !0),
          !(0, Ka.alwaysValidSchema)(t, r) && e.ok((0, nR.validateArray)(e));
      },
    };
  function wd(e, r, t = e.schema) {
    const { gen: n, parentSchema: a, data: i, keyword: o, it: s } = e;
    c(a),
      s.opts.unevaluated &&
      t.length &&
      s.items !== !0 &&
      (s.items = Ka.mergeEvaluated.items(n, t.length, s.items));
    const u = n.name("valid"),
      l = n.const("len", (0, Ed._)`${i}.length`);
    t.forEach((f, h) => {
      (0, Ka.alwaysValidSchema)(s, f) ||
        (n.if(
          (0, Ed._)`${l} > ${h}`,
          () => e.subschema({ keyword: o, schemaProp: h, dataProp: h }, u),
        ),
          e.ok(u));
    });
    function c(f) {
      const { opts: h, errSchemaPath: m } = s,
        v = t.length,
        y = v === f.minItems && (v === f.maxItems || f[r] === !1);
      if (h.strictTuples && !y) {
        const d =
          `"${o}" is ${v}-tuple, but minItems or maxItems/${r} are not specified or different at path "${m}"`;
        (0, Ka.checkStrictMode)(s, d, h.strictTuples);
      }
    }
  }
  (Lt.validateTuple = wd),
    (Lt.default = aR),
    Object.defineProperty(ys, "__esModule", { value: !0 });
  const iR = Lt,
    oR = {
      keyword: "prefixItems",
      type: "array",
      schemaType: ["array"],
      before: "uniqueItems",
      code: (e) => (0, iR.validateTuple)(e, "items"),
    };
  ys.default = oR;
  var gs = {};
  Object.defineProperty(gs, "__esModule", { value: !0 });
  const Od = te,
    sR = se,
    uR = ae,
    lR = kt,
    cR = {
      keyword: "items",
      type: "array",
      schemaType: ["object", "boolean"],
      before: "uniqueItems",
      error: {
        message: ({ params: { len: e } }) =>
          (0, Od.str)`must NOT have more than ${e} items`,
        params: ({ params: { len: e } }) => (0, Od._)`{limit: ${e}}`,
      },
      code(e) {
        const { schema: r, parentSchema: t, it: n } = e,
          { prefixItems: a } = t;
        (n.items = !0),
          !(0, sR.alwaysValidSchema)(n, r) &&
          (a
            ? (0, lR.validateAdditionalItems)(e, a)
            : e.ok((0, uR.validateArray)(e)));
      },
    };
  gs.default = cR;
  var $s = {};
  Object.defineProperty($s, "__esModule", { value: !0 });
  const Xe = te,
    za = se,
    fR = {
      keyword: "contains",
      type: "array",
      schemaType: ["object", "boolean"],
      before: "uniqueItems",
      trackErrors: !0,
      error: {
        message: ({ params: { min: e, max: r } }) =>
          r === void 0
            ? (0, Xe.str)`must contain at least ${e} valid item(s)`
            : (0,
              Xe.str)`must contain at least ${e} and no more than ${r} valid item(s)`,
        params: ({ params: { min: e, max: r } }) =>
          r === void 0
            ? (0, Xe._)`{minContains: ${e}}`
            : (0, Xe._)`{minContains: ${e}, maxContains: ${r}}`,
      },
      code(e) {
        const { gen: r, schema: t, parentSchema: n, data: a, it: i } = e;
        let o, s;
        const { minContains: u, maxContains: l } = n;
        i.opts.next ? ((o = u === void 0 ? 1 : u), (s = l)) : (o = 1);
        const c = r.const("len", (0, Xe._)`${a}.length`);
        if ((e.setParams({ min: o, max: s }), s === void 0 && o === 0)) {
          (0, za.checkStrictMode)(
            i,
            '"minContains" == 0 without "maxContains": "contains" keyword ignored',
          );
          return;
        }
        if (s !== void 0 && o > s) {
          (0, za.checkStrictMode)(
            i,
            '"minContains" > "maxContains" is always invalid',
          ), e.fail();
          return;
        }
        if ((0, za.alwaysValidSchema)(i, t)) {
          let y = (0, Xe._)`${c} >= ${o}`;
          s !== void 0 && (y = (0, Xe._)`${y} && ${c} <= ${s}`), e.pass(y);
          return;
        }
        i.items = !0;
        const f = r.name("valid");
        s === void 0 && o === 1
          ? m(f, () => r.if(f, () => r.break()))
          : o === 0
          ? (r.let(f, !0), s !== void 0 && r.if((0, Xe._)`${a}.length > 0`, h))
          : (r.let(f, !1), h()), e.result(f, () => e.reset());
        function h() {
          const y = r.name("_valid"),
            d = r.let("count", 0);
          m(y, () => r.if(y, () => v(d)));
        }
        function m(y, d) {
          r.forRange("i", 0, c, (p) => {
            e.subschema(
              {
                keyword: "contains",
                dataProp: p,
                dataPropType: za.Type.Num,
                compositeRule: !0,
              },
              y,
            ), d();
          });
        }
        function v(y) {
          r.code((0, Xe._)`${y}++`),
            s === void 0
              ? r.if((0, Xe._)`${y} >= ${o}`, () => r.assign(f, !0).break())
              : (r.if((0, Xe._)`${y} > ${s}`, () => r.assign(f, !1).break()),
                o === 1
                  ? r.assign(f, !0)
                  : r.if((0, Xe._)`${y} >= ${o}`, () => r.assign(f, !0)));
        }
      },
    };
  $s.default = fR;
  var Ad = {};
  (function (e) {
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0);
    const r = te,
      t = se,
      n = ae;
    e.error = {
      message: ({ params: { property: u, depsCount: l, deps: c } }) => {
        const f = l === 1 ? "property" : "properties";
        return (0, r.str)`must have ${f} ${c} when property ${u} is present`;
      },
      params: ({
        params: { property: u, depsCount: l, deps: c, missingProperty: f },
      }) =>
        (0, r._)`{property: ${u},
    missingProperty: ${f},
    depsCount: ${l},
    deps: ${c}}`,
    };
    const a = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(u) {
        const [l, c] = i(u);
        o(u, l), s(u, c);
      },
    };
    function i({ schema: u }) {
      const l = {},
        c = {};
      for (const f in u) {
        if (f === "__proto__") continue;
        const h = Array.isArray(u[f]) ? l : c;
        h[f] = u[f];
      }
      return [l, c];
    }
    function o(u, l = u.schema) {
      const { gen: c, data: f, it: h } = u;
      if (Object.keys(l).length === 0) return;
      const m = c.let("missing");
      for (const v in l) {
        const y = l[v];
        if (y.length === 0) continue;
        const d = (0, n.propertyInData)(c, f, v, h.opts.ownProperties);
        u.setParams({ property: v, depsCount: y.length, deps: y.join(", ") }),
          h.allErrors
            ? c.if(d, () => {
              for (const p of y) (0, n.checkReportMissingProp)(u, p);
            })
            : (c.if((0, r._)`${d} && (${(0, n.checkMissingProp)(u, y, m)})`),
              (0, n.reportMissingProp)(u, m),
              c.else());
      }
    }
    e.validatePropertyDeps = o;
    function s(u, l = u.schema) {
      const { gen: c, data: f, keyword: h, it: m } = u,
        v = c.name("valid");
      for (const y in l) {
        (0, t.alwaysValidSchema)(m, l[y]) ||
          (c.if(
            (0, n.propertyInData)(c, f, y, m.opts.ownProperties),
            () => {
              const d = u.subschema({ keyword: h, schemaProp: y }, v);
              u.mergeValidEvaluated(d, v);
            },
            () => c.var(v, !0),
          ),
            u.ok(v));
      }
    }
    (e.validateSchemaDeps = s), (e.default = a);
  })(Ad);
  var _s = {};
  Object.defineProperty(_s, "__esModule", { value: !0 });
  const Td = te,
    dR = se,
    hR = {
      keyword: "propertyNames",
      type: "object",
      schemaType: ["object", "boolean"],
      error: {
        message: "property name must be valid",
        params: ({ params: e }) => (0, Td._)`{propertyName: ${e.propertyName}}`,
      },
      code(e) {
        const { gen: r, schema: t, data: n, it: a } = e;
        if ((0, dR.alwaysValidSchema)(a, t)) return;
        const i = r.name("valid");
        r.forIn("key", n, (o) => {
          e.setParams({ propertyName: o }),
            e.subschema(
              {
                keyword: "propertyNames",
                data: o,
                dataTypes: ["string"],
                propertyName: o,
                compositeRule: !0,
              },
              i,
            ),
            r.if((0, Td.not)(i), () => {
              e.error(!0), a.allErrors || r.break();
            });
        }), e.ok(i);
      },
    };
  _s.default = hR;
  var Ga = {};
  Object.defineProperty(Ga, "__esModule", { value: !0 });
  const Wa = ae,
    or = te,
    mR = dr,
    Ha = se,
    pR = {
      keyword: "additionalProperties",
      type: ["object"],
      schemaType: ["boolean", "object"],
      allowUndefined: !0,
      trackErrors: !0,
      error: {
        message: "must NOT have additional properties",
        params: ({ params: e }) =>
          (0, or._)`{additionalProperty: ${e.additionalProperty}}`,
      },
      code(e) {
        const {
          gen: r,
          schema: t,
          parentSchema: n,
          data: a,
          errsCount: i,
          it: o,
        } = e;
        if (!i) throw new Error("ajv implementation error");
        const { allErrors: s, opts: u } = o;
        if (
          ((o.props = !0),
            u.removeAdditional !== "all" && (0, Ha.alwaysValidSchema)(o, t))
        ) {
          return;
        }
        const l = (0, Wa.allSchemaProperties)(n.properties),
          c = (0, Wa.allSchemaProperties)(n.patternProperties);
        f(), e.ok((0, or._)`${i} === ${mR.default.errors}`);
        function f() {
          r.forIn("key", a, (d) => {
            !l.length && !c.length ? v(d) : r.if(h(d), () => v(d));
          });
        }
        function h(d) {
          let p;
          if (l.length > 8) {
            const $ = (0, Ha.schemaRefOrVal)(o, n.properties, "properties");
            p = (0, Wa.isOwnProperty)(r, $, d);
          } else {
            l.length
              ? (p = (0, or.or)(...l.map(($) => (0, or._)`${d} === ${$}`)))
              : (p = or.nil);
          }
          return (
            c.length &&
            (p = (0, or.or)(
              p,
              ...c.map(
                ($) => (0, or._)`${(0, Wa.usePattern)(e, $)}.test(${d})`,
              ),
            )), (0, or.not)(p)
          );
        }
        function m(d) {
          r.code((0, or._)`delete ${a}[${d}]`);
        }
        function v(d) {
          if (
            u.removeAdditional === "all" ||
            (u.removeAdditional && t === !1)
          ) {
            m(d);
            return;
          }
          if (t === !1) {
            e.setParams({ additionalProperty: d }), e.error(), s || r.break();
            return;
          }
          if (typeof t == "object" && !(0, Ha.alwaysValidSchema)(o, t)) {
            const p = r.name("valid");
            u.removeAdditional === "failing"
              ? (y(d, p, !1),
                r.if((0, or.not)(p), () => {
                  e.reset(), m(d);
                }))
              : (y(d, p), s || r.if((0, or.not)(p), () => r.break()));
          }
        }
        function y(d, p, $) {
          const b = {
            keyword: "additionalProperties",
            dataProp: d,
            dataPropType: Ha.Type.Str,
          };
          $ === !1 &&
          Object.assign(b, {
            compositeRule: !0,
            createErrors: !1,
            allErrors: !1,
          }), e.subschema(b, p);
        }
      },
    };
  Ga.default = pR;
  var bs = {};
  Object.defineProperty(bs, "__esModule", { value: !0 });
  const vR = nr,
    Pd = ae,
    Ss = se,
    Cd = Ga,
    yR = {
      keyword: "properties",
      type: "object",
      schemaType: "object",
      code(e) {
        const { gen: r, schema: t, parentSchema: n, data: a, it: i } = e;
        i.opts.removeAdditional === "all" &&
          n.additionalProperties === void 0 &&
          Cd.default.code(
            new vR.KeywordCxt(i, Cd.default, "additionalProperties"),
          );
        const o = (0, Pd.allSchemaProperties)(t);
        for (const f of o) i.definedProperties.add(f);
        i.opts.unevaluated &&
          o.length &&
          i.props !== !0 &&
          (i.props = Ss.mergeEvaluated.props(r, (0, Ss.toHash)(o), i.props));
        const s = o.filter((f) => !(0, Ss.alwaysValidSchema)(i, t[f]));
        if (s.length === 0) return;
        const u = r.name("valid");
        for (const f of s) {
          l(f)
            ? c(f)
            : (r.if((0, Pd.propertyInData)(r, a, f, i.opts.ownProperties)),
              c(f),
              i.allErrors || r.else().var(u, !0),
              r.endIf()),
            e.it.definedProperties.add(f),
            e.ok(u);
        }
        function l(f) {
          return (
            i.opts.useDefaults && !i.compositeRule && t[f].default !== void 0
          );
        }
        function c(f) {
          e.subschema({ keyword: "properties", schemaProp: f, dataProp: f }, u);
        }
      },
    };
  bs.default = yR;
  var Es = {};
  Object.defineProperty(Es, "__esModule", { value: !0 });
  const Id = ae,
    Ya = te,
    Nd = se,
    Dd = se,
    gR = {
      keyword: "patternProperties",
      type: "object",
      schemaType: "object",
      code(e) {
        const { gen: r, schema: t, data: n, parentSchema: a, it: i } = e,
          { opts: o } = i,
          s = (0, Id.allSchemaProperties)(t),
          u = s.filter((y) => (0, Nd.alwaysValidSchema)(i, t[y]));
        if (
          s.length === 0 ||
          (u.length === s.length && (!i.opts.unevaluated || i.props === !0))
        ) {
          return;
        }
        const l = o.strictSchema && !o.allowMatchingProperties && a.properties,
          c = r.name("valid");
        i.props !== !0 &&
          !(i.props instanceof Ya.Name) &&
          (i.props = (0, Dd.evaluatedPropsToName)(r, i.props));
        const { props: f } = i;
        h();
        function h() {
          for (const y of s) {
            l && m(y), i.allErrors ? v(y) : (r.var(c, !0), v(y), r.if(c));
          }
        }
        function m(y) {
          for (const d in l) {
            new RegExp(y).test(d) &&
              (0, Nd.checkStrictMode)(
                i,
                `property ${d} matches pattern ${y} (use allowMatchingProperties)`,
              );
          }
        }
        function v(y) {
          r.forIn("key", n, (d) => {
            r.if((0, Ya._)`${(0, Id.usePattern)(e, y)}.test(${d})`, () => {
              const p = u.includes(y);
              p ||
              e.subschema(
                {
                  keyword: "patternProperties",
                  schemaProp: y,
                  dataProp: d,
                  dataPropType: Dd.Type.Str,
                },
                c,
              ),
                i.opts.unevaluated && f !== !0
                  ? r.assign((0, Ya._)`${f}[${d}]`, !0)
                  : !p && !i.allErrors && r.if((0, Ya.not)(c), () => r.break());
            });
          });
        }
      },
    };
  Es.default = gR;
  var ws = {};
  Object.defineProperty(ws, "__esModule", { value: !0 });
  const $R = se,
    _R = {
      keyword: "not",
      schemaType: ["object", "boolean"],
      trackErrors: !0,
      code(e) {
        const { gen: r, schema: t, it: n } = e;
        if ((0, $R.alwaysValidSchema)(n, t)) {
          e.fail();
          return;
        }
        const a = r.name("valid");
        e.subschema(
          {
            keyword: "not",
            compositeRule: !0,
            createErrors: !1,
            allErrors: !1,
          },
          a,
        ),
          e.failResult(
            a,
            () => e.reset(),
            () => e.error(),
          );
      },
      error: { message: "must NOT be valid" },
    };
  ws.default = _R;
  var Os = {};
  Object.defineProperty(Os, "__esModule", { value: !0 });
  const bR = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: ae.validateUnion,
    error: { message: "must match a schema in anyOf" },
  };
  Os.default = bR;
  var As = {};
  Object.defineProperty(As, "__esModule", { value: !0 });
  const Ja = te,
    SR = se,
    ER = {
      keyword: "oneOf",
      schemaType: "array",
      trackErrors: !0,
      error: {
        message: "must match exactly one schema in oneOf",
        params: ({ params: e }) => (0, Ja._)`{passingSchemas: ${e.passing}}`,
      },
      code(e) {
        const { gen: r, schema: t, parentSchema: n, it: a } = e;
        if (!Array.isArray(t)) throw new Error("ajv implementation error");
        if (a.opts.discriminator && n.discriminator) return;
        const i = t,
          o = r.let("valid", !1),
          s = r.let("passing", null),
          u = r.name("_valid");
        e.setParams({ passing: s }),
          r.block(l),
          e.result(
            o,
            () => e.reset(),
            () => e.error(!0),
          );
        function l() {
          i.forEach((c, f) => {
            let h;
            (0, SR.alwaysValidSchema)(a, c) ? r.var(u, !0) : (h = e.subschema(
              { keyword: "oneOf", schemaProp: f, compositeRule: !0 },
              u,
            )),
              f > 0 &&
              r
                .if((0, Ja._)`${u} && ${o}`)
                .assign(o, !1)
                .assign(s, (0, Ja._)`[${s}, ${f}]`)
                .else(),
              r.if(u, () => {
                r.assign(o, !0),
                  r.assign(s, f),
                  h && e.mergeEvaluated(h, Ja.Name);
              });
          });
        }
      },
    };
  As.default = ER;
  var Ts = {};
  Object.defineProperty(Ts, "__esModule", { value: !0 });
  const wR = se,
    OR = {
      keyword: "allOf",
      schemaType: "array",
      code(e) {
        const { gen: r, schema: t, it: n } = e;
        if (!Array.isArray(t)) throw new Error("ajv implementation error");
        const a = r.name("valid");
        t.forEach((i, o) => {
          if ((0, wR.alwaysValidSchema)(n, i)) return;
          const s = e.subschema({ keyword: "allOf", schemaProp: o }, a);
          e.ok(a), e.mergeEvaluated(s);
        });
      },
    };
  Ts.default = OR;
  var Ps = {};
  Object.defineProperty(Ps, "__esModule", { value: !0 });
  const Xa = te,
    Fd = se,
    AR = {
      keyword: "if",
      schemaType: ["object", "boolean"],
      trackErrors: !0,
      error: {
        message: ({ params: e }) =>
          (0, Xa.str)`must match "${e.ifClause}" schema`,
        params: ({ params: e }) => (0, Xa._)`{failingKeyword: ${e.ifClause}}`,
      },
      code(e) {
        const { gen: r, parentSchema: t, it: n } = e;
        t.then === void 0 &&
          t.else === void 0 &&
          (0, Fd.checkStrictMode)(
            n,
            '"if" without "then" and "else" is ignored',
          );
        const a = jd(n, "then"),
          i = jd(n, "else");
        if (!a && !i) return;
        const o = r.let("valid", !0),
          s = r.name("_valid");
        if ((u(), e.reset(), a && i)) {
          const c = r.let("ifClause");
          e.setParams({ ifClause: c }), r.if(s, l("then", c), l("else", c));
        } else a ? r.if(s, l("then")) : r.if((0, Xa.not)(s), l("else"));
        e.pass(o, () => e.error(!0));
        function u() {
          const c = e.subschema(
            {
              keyword: "if",
              compositeRule: !0,
              createErrors: !1,
              allErrors: !1,
            },
            s,
          );
          e.mergeEvaluated(c);
        }
        function l(c, f) {
          return () => {
            const h = e.subschema({ keyword: c }, s);
            r.assign(o, s),
              e.mergeValidEvaluated(h, o),
              f ? r.assign(f, (0, Xa._)`${c}`) : e.setParams({ ifClause: c });
          };
        }
      },
    };
  function jd(e, r) {
    const t = e.schema[r];
    return t !== void 0 && !(0, Fd.alwaysValidSchema)(e, t);
  }
  Ps.default = AR;
  var Cs = {};
  Object.defineProperty(Cs, "__esModule", { value: !0 });
  const TR = se,
    PR = {
      keyword: ["then", "else"],
      schemaType: ["object", "boolean"],
      code({ keyword: e, parentSchema: r, it: t }) {
        r.if === void 0 &&
          (0, TR.checkStrictMode)(t, `"${e}" without "if" is ignored`);
      },
    };
  (Cs.default = PR), Object.defineProperty(ps, "__esModule", { value: !0 });
  const CR = kt,
    IR = ys,
    NR = Lt,
    DR = gs,
    FR = $s,
    jR = Ad,
    MR = _s,
    RR = Ga,
    UR = bs,
    kR = Es,
    LR = ws,
    xR = Os,
    qR = As,
    BR = Ts,
    VR = Ps,
    KR = Cs;
  function zR(e = !1) {
    const r = [
      LR.default,
      xR.default,
      qR.default,
      BR.default,
      VR.default,
      KR.default,
      MR.default,
      RR.default,
      jR.default,
      UR.default,
      kR.default,
    ];
    return (
      e ? r.push(IR.default, DR.default) : r.push(CR.default, NR.default),
        r.push(FR.default),
        r
    );
  }
  ps.default = zR;
  var Is = {},
    Ns = {};
  Object.defineProperty(Ns, "__esModule", { value: !0 });
  const Pe = te,
    GR = {
      keyword: "format",
      type: ["number", "string"],
      schemaType: "string",
      $data: !0,
      error: {
        message: ({ schemaCode: e }) => (0, Pe.str)`must match format "${e}"`,
        params: ({ schemaCode: e }) => (0, Pe._)`{format: ${e}}`,
      },
      code(e, r) {
        const {
            gen: t,
            data: n,
            $data: a,
            schema: i,
            schemaCode: o,
            it: s,
          } = e,
          { opts: u, errSchemaPath: l, schemaEnv: c, self: f } = s;
        if (!u.validateFormats) return;
        a ? h() : m();
        function h() {
          const v = t.scopeValue("formats", {
              ref: f.formats,
              code: u.code.formats,
            }),
            y = t.const("fDef", (0, Pe._)`${v}[${o}]`),
            d = t.let("fType"),
            p = t.let("format");
          t.if(
            (0, Pe._)`typeof ${y} == "object" && !(${y} instanceof RegExp)`,
            () =>
              t
                .assign(d, (0, Pe._)`${y}.type || "string"`)
                .assign(p, (0, Pe._)`${y}.validate`),
            () => t.assign(d, (0, Pe._)`"string"`).assign(p, y),
          ), e.fail$data((0, Pe.or)($(), b()));
          function $() {
            return u.strictSchema === !1 ? Pe.nil : (0, Pe._)`${o} && !${p}`;
          }
          function b() {
            const w = c.$async
                ? (0, Pe._)`(${y}.async ? await ${p}(${n}) : ${p}(${n}))`
                : (0, Pe._)`${p}(${n})`,
              N =
                (0, Pe._)`(typeof ${p} == "function" ? ${w} : ${p}.test(${n}))`;
            return (0, Pe._)`${p} && ${p} !== true && ${d} === ${r} && !${N}`;
          }
        }
        function m() {
          const v = f.formats[i];
          if (!v) {
            $();
            return;
          }
          if (v === !0) return;
          const [y, d, p] = b(v);
          y === r && e.pass(w());
          function $() {
            if (u.strictSchema === !1) {
              f.logger.warn(N());
              return;
            }
            throw new Error(N());
            function N() {
              return `unknown format "${i}" ignored in schema at path "${l}"`;
            }
          }
          function b(N) {
            const O = N instanceof RegExp
                ? (0, Pe.regexpCode)(N)
                : u.code.formats
                ? (0, Pe._)`${u.code.formats}${(0, Pe.getProperty)(i)}`
                : void 0,
              E = t.scopeValue("formats", { key: i, ref: N, code: O });
            return typeof N == "object" && !(N instanceof RegExp)
              ? [N.type || "string", N.validate, (0, Pe._)`${E}.validate`]
              : ["string", N, E];
          }
          function w() {
            if (typeof v == "object" && !(v instanceof RegExp) && v.async) {
              if (!c.$async) throw new Error("async format in sync schema");
              return (0, Pe._)`await ${p}(${n})`;
            }
            return typeof d == "function"
              ? (0, Pe._)`${p}(${n})`
              : (0, Pe._)`${p}.test(${n})`;
          }
        }
      },
    };
  (Ns.default = GR), Object.defineProperty(Is, "__esModule", { value: !0 });
  const WR = [Ns.default];
  Is.default = WR;
  var xt = {};
  Object.defineProperty(xt, "__esModule", { value: !0 }),
    (xt.contentVocabulary = xt.metadataVocabulary = void 0),
    (xt.metadataVocabulary = [
      "title",
      "description",
      "default",
      "deprecated",
      "readOnly",
      "writeOnly",
      "examples",
    ]),
    (xt.contentVocabulary = [
      "contentMediaType",
      "contentEncoding",
      "contentSchema",
    ]),
    Object.defineProperty(Zo, "__esModule", { value: !0 });
  const HR = Qo,
    YR = rs,
    JR = ps,
    XR = Is,
    Md = xt,
    ZR = [
      HR.default,
      YR.default,
      (0, JR.default)(),
      XR.default,
      Md.metadataVocabulary,
      Md.contentVocabulary,
    ];
  Zo.default = ZR;
  var Ds = {},
    Rd = {};
  (function (e) {
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.DiscrError = void 0),
      (function (r) {
        (r.Tag = "tag"), (r.Mapping = "mapping");
      })(e.DiscrError || (e.DiscrError = {}));
  })(Rd), Object.defineProperty(Ds, "__esModule", { value: !0 });
  const qt = te,
    Fs = Rd,
    Ud = Be,
    QR = se,
    eU = {
      keyword: "discriminator",
      type: "object",
      schemaType: "object",
      error: {
        message: ({ params: { discrError: e, tagName: r } }) =>
          e === Fs.DiscrError.Tag
            ? `tag "${r}" must be string`
            : `value of tag "${r}" must be in oneOf`,
        params: ({ params: { discrError: e, tag: r, tagName: t } }) =>
          (0, qt._)`{error: ${e}, tag: ${t}, tagValue: ${r}}`,
      },
      code(e) {
        const { gen: r, data: t, schema: n, parentSchema: a, it: i } = e,
          { oneOf: o } = a;
        if (!i.opts.discriminator) {
          throw new Error("discriminator: requires discriminator option");
        }
        const s = n.propertyName;
        if (typeof s != "string") {
          throw new Error("discriminator: requires propertyName");
        }
        if (n.mapping) {
          throw new Error("discriminator: mapping is not supported");
        }
        if (!o) throw new Error("discriminator: requires oneOf keyword");
        const u = r.let("valid", !1),
          l = r.const("tag", (0, qt._)`${t}${(0, qt.getProperty)(s)}`);
        r.if(
          (0, qt._)`typeof ${l} == "string"`,
          () => c(),
          () =>
            e.error(!1, { discrError: Fs.DiscrError.Tag, tag: l, tagName: s }),
        ), e.ok(u);
        function c() {
          const m = h();
          r.if(!1);
          for (const v in m) {
            r.elseIf((0, qt._)`${l} === ${v}`), r.assign(u, f(m[v]));
          }
          r.else(),
            e.error(!1, {
              discrError: Fs.DiscrError.Mapping,
              tag: l,
              tagName: s,
            }),
            r.endIf();
        }
        function f(m) {
          const v = r.name("valid"),
            y = e.subschema({ keyword: "oneOf", schemaProp: m }, v);
          return e.mergeEvaluated(y, qt.Name), v;
        }
        function h() {
          var m;
          const v = {},
            y = p(a);
          let d = !0;
          for (let w = 0; w < o.length; w++) {
            let N = o[w];
            N != null &&
              N.$ref &&
              !(0, QR.schemaHasRulesButRef)(N, i.self.RULES) &&
              ((N = Ud.resolveRef.call(
                i.self,
                i.schemaEnv.root,
                i.baseId,
                N == null ? void 0 : N.$ref,
              )),
                N instanceof Ud.SchemaEnv && (N = N.schema));
            const O =
              (m = N == null ? void 0 : N.properties) === null || m === void 0
                ? void 0
                : m[s];
            if (typeof O != "object") {
              throw new Error(
                `discriminator: oneOf subschemas (or referenced schemas) must have "properties/${s}"`,
              );
            }
            (d = d && (y || p(N))), $(O, w);
          }
          if (!d) throw new Error(`discriminator: "${s}" must be required`);
          return v;
          function p({ required: w }) {
            return Array.isArray(w) && w.includes(s);
          }
          function $(w, N) {
            if (w.const) b(w.const, N);
            else if (w.enum) for (const O of w.enum) b(O, N);
            else {
              throw new Error(
                `discriminator: "properties/${s}" must have "const" or "enum"`,
              );
            }
          }
          function b(w, N) {
            if (typeof w != "string" || w in v) {
              throw new Error(
                `discriminator: "${s}" values must be unique strings`,
              );
            }
            v[w] = N;
          }
        }
      },
    };
  Ds.default = eU;
  const rU = {
    $schema: "http://json-schema.org/draft-07/schema#",
    $id: "http://json-schema.org/draft-07/schema#",
    title: "Core schema meta-schema",
    definitions: {
      schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } },
      nonNegativeInteger: { type: "integer", minimum: 0 },
      nonNegativeIntegerDefault0: {
        allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }],
      },
      simpleTypes: {
        enum: [
          "array",
          "boolean",
          "integer",
          "null",
          "number",
          "object",
          "string",
        ],
      },
      stringArray: {
        type: "array",
        items: { type: "string" },
        uniqueItems: !0,
        default: [],
      },
    },
    type: ["object", "boolean"],
    properties: {
      $id: { type: "string", format: "uri-reference" },
      $schema: { type: "string", format: "uri" },
      $ref: { type: "string", format: "uri-reference" },
      $comment: { type: "string" },
      title: { type: "string" },
      description: { type: "string" },
      default: !0,
      readOnly: { type: "boolean", default: !1 },
      examples: { type: "array", items: !0 },
      multipleOf: { type: "number", exclusiveMinimum: 0 },
      maximum: { type: "number" },
      exclusiveMaximum: { type: "number" },
      minimum: { type: "number" },
      exclusiveMinimum: { type: "number" },
      maxLength: { $ref: "#/definitions/nonNegativeInteger" },
      minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
      pattern: { type: "string", format: "regex" },
      additionalItems: { $ref: "#" },
      items: {
        anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }],
        default: !0,
      },
      maxItems: { $ref: "#/definitions/nonNegativeInteger" },
      minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
      uniqueItems: { type: "boolean", default: !1 },
      contains: { $ref: "#" },
      maxProperties: { $ref: "#/definitions/nonNegativeInteger" },
      minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
      required: { $ref: "#/definitions/stringArray" },
      additionalProperties: { $ref: "#" },
      definitions: {
        type: "object",
        additionalProperties: { $ref: "#" },
        default: {},
      },
      properties: {
        type: "object",
        additionalProperties: { $ref: "#" },
        default: {},
      },
      patternProperties: {
        type: "object",
        additionalProperties: { $ref: "#" },
        propertyNames: { format: "regex" },
        default: {},
      },
      dependencies: {
        type: "object",
        additionalProperties: {
          anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }],
        },
      },
      propertyNames: { $ref: "#" },
      const: !0,
      enum: { type: "array", items: !0, minItems: 1, uniqueItems: !0 },
      type: {
        anyOf: [
          { $ref: "#/definitions/simpleTypes" },
          {
            type: "array",
            items: { $ref: "#/definitions/simpleTypes" },
            minItems: 1,
            uniqueItems: !0,
          },
        ],
      },
      format: { type: "string" },
      contentMediaType: { type: "string" },
      contentEncoding: { type: "string" },
      if: { $ref: "#" },
      then: { $ref: "#" },
      else: { $ref: "#" },
      allOf: { $ref: "#/definitions/schemaArray" },
      anyOf: { $ref: "#/definitions/schemaArray" },
      oneOf: { $ref: "#/definitions/schemaArray" },
      not: { $ref: "#" },
    },
    default: !0,
  };
  (function (e, r) {
    Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.MissingRefError =
        r.ValidationError =
        r.CodeGen =
        r.Name =
        r.nil =
        r.stringify =
        r.str =
        r._ =
        r.KeywordCxt =
          void 0);
    const t = Lf,
      n = Zo,
      a = Ds,
      i = rU,
      o = ["/properties"],
      s = "http://json-schema.org/draft-07/schema";
    class u extends t.default {
      _addVocabularies() {
        super._addVocabularies(),
          n.default.forEach((v) => this.addVocabulary(v)),
          this.opts.discriminator && this.addKeyword(a.default);
      }
      _addDefaultMetaSchema() {
        if ((super._addDefaultMetaSchema(), !this.opts.meta)) return;
        const v = this.opts.$data ? this.$dataMetaSchema(i, o) : i;
        this.addMetaSchema(v, s, !1),
          (this.refs["http://json-schema.org/schema"] = s);
      }
      defaultMeta() {
        return (this.opts.defaultMeta = super.defaultMeta() ||
          (this.getSchema(s) ? s : void 0));
      }
    }
    (e.exports = r = u),
      Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.default = u);
    var l = nr;
    Object.defineProperty(r, "KeywordCxt", {
      enumerable: !0,
      get: function () {
        return l.KeywordCxt;
      },
    });
    var c = te;
    Object.defineProperty(r, "_", {
      enumerable: !0,
      get: function () {
        return c._;
      },
    }),
      Object.defineProperty(r, "str", {
        enumerable: !0,
        get: function () {
          return c.str;
        },
      }),
      Object.defineProperty(r, "stringify", {
        enumerable: !0,
        get: function () {
          return c.stringify;
        },
      }),
      Object.defineProperty(r, "nil", {
        enumerable: !0,
        get: function () {
          return c.nil;
        },
      }),
      Object.defineProperty(r, "Name", {
        enumerable: !0,
        get: function () {
          return c.Name;
        },
      }),
      Object.defineProperty(r, "CodeGen", {
        enumerable: !0,
        get: function () {
          return c.CodeGen;
        },
      });
    var f = On;
    Object.defineProperty(r, "ValidationError", {
      enumerable: !0,
      get: function () {
        return f.default;
      },
    });
    var h = An;
    Object.defineProperty(r, "MissingRefError", {
      enumerable: !0,
      get: function () {
        return h.default;
      },
    });
  })(V2, $n);
  const tU = Ti($n);
  var Za = {},
    nU = {
      get exports() {
        return Za;
      },
      set exports(e) {
        Za = e;
      },
    },
    kd = {};
  (function (e) {
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.formatNames = e.fastFormats = e.fullFormats = void 0);
    function r(R, k) {
      return { validate: R, compare: k };
    }
    (e.fullFormats = {
      date: r(i, o),
      time: r(u, l),
      "date-time": r(f, h),
      duration:
        /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,
      uri: y,
      "uri-reference":
        /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
      "uri-template":
        /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
      url:
        /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu,
      email:
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
      hostname:
        /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
      ipv4:
        /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
      ipv6:
        /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,
      regex: D,
      uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
      "json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/,
      "json-pointer-uri-fragment":
        /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
      "relative-json-pointer":
        /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,
      byte: p,
      int32: { type: "number", validate: w },
      int64: { type: "number", validate: N },
      float: { type: "number", validate: O },
      double: { type: "number", validate: O },
      password: !0,
      binary: !0,
    }),
      (e.fastFormats = {
        ...e.fullFormats,
        date: r(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, o),
        time: r(
          /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i,
          l,
        ),
        "date-time": r(
          /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i,
          h,
        ),
        uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
        "uri-reference":
          /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
        email:
          /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i,
      }),
      (e.formatNames = Object.keys(e.fullFormats));
    function t(R) {
      return R % 4 === 0 && (R % 100 !== 0 || R % 400 === 0);
    }
    const n = /^(\d\d\d\d)-(\d\d)-(\d\d)$/,
      a = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function i(R) {
      const k = n.exec(R);
      if (!k) return !1;
      const B = +k[1],
        q = +k[2],
        z = +k[3];
      return q >= 1 && q <= 12 && z >= 1 && z <= (q === 2 && t(B) ? 29 : a[q]);
    }
    function o(R, k) {
      if (R && k) return R > k ? 1 : R < k ? -1 : 0;
    }
    const s = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i;
    function u(R, k) {
      const B = s.exec(R);
      if (!B) return !1;
      const q = +B[1],
        z = +B[2],
        G = +B[3],
        H = B[5];
      return (
        ((q <= 23 && z <= 59 && G <= 59) ||
          (q === 23 && z === 59 && G === 60)) &&
        (!k || H !== "")
      );
    }
    function l(R, k) {
      if (!(R && k)) return;
      const B = s.exec(R),
        q = s.exec(k);
      if (B && q) {
        return (
          (R = B[1] + B[2] + B[3] + (B[4] || "")),
            (k = q[1] + q[2] + q[3] + (q[4] || "")),
            R > k ? 1 : R < k ? -1 : 0
        );
      }
    }
    const c = /t|\s/i;
    function f(R) {
      const k = R.split(c);
      return k.length === 2 && i(k[0]) && u(k[1], !0);
    }
    function h(R, k) {
      if (!(R && k)) return;
      const [B, q] = R.split(c),
        [z, G] = k.split(c),
        H = o(B, z);
      if (H !== void 0) return H || l(q, G);
    }
    const m = /\/|:/,
      v =
        /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
    function y(R) {
      return m.test(R) && v.test(R);
    }
    const d =
      /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
    function p(R) {
      return (d.lastIndex = 0), d.test(R);
    }
    const $ = -(2 ** 31),
      b = 2 ** 31 - 1;
    function w(R) {
      return Number.isInteger(R) && R <= b && R >= $;
    }
    function N(R) {
      return Number.isInteger(R);
    }
    function O() {
      return !0;
    }
    const E = /[^\\]\\Z/;
    function D(R) {
      if (E.test(R)) return !1;
      try {
        return new RegExp(R), !0;
      } catch {
        return !1;
      }
    }
  })(kd);
  var Ld = {};
  (function (e) {
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.formatLimitDefinition = void 0);
    const r = $n,
      t = te,
      n = t.operators,
      a = {
        formatMaximum: { okStr: "<=", ok: n.LTE, fail: n.GT },
        formatMinimum: { okStr: ">=", ok: n.GTE, fail: n.LT },
        formatExclusiveMaximum: { okStr: "<", ok: n.LT, fail: n.GTE },
        formatExclusiveMinimum: { okStr: ">", ok: n.GT, fail: n.LTE },
      },
      i = {
        message: ({ keyword: s, schemaCode: u }) =>
          t.str`should be ${a[s].okStr} ${u}`,
        params: ({ keyword: s, schemaCode: u }) =>
          t._`{comparison: ${a[s].okStr}, limit: ${u}}`,
      };
    e.formatLimitDefinition = {
      keyword: Object.keys(a),
      type: "string",
      schemaType: "string",
      $data: !0,
      error: i,
      code(s) {
        const { gen: u, data: l, schemaCode: c, keyword: f, it: h } = s,
          { opts: m, self: v } = h;
        if (!m.validateFormats) return;
        const y = new r.KeywordCxt(h, v.RULES.all.format.definition, "format");
        y.$data ? d() : p();
        function d() {
          const b = u.scopeValue("formats", {
              ref: v.formats,
              code: m.code.formats,
            }),
            w = u.const("fmt", t._`${b}[${y.schemaCode}]`);
          s.fail$data(
            t.or(
              t._`typeof ${w} != "object"`,
              t._`${w} instanceof RegExp`,
              t._`typeof ${w}.compare != "function"`,
              $(w),
            ),
          );
        }
        function p() {
          const b = y.schema,
            w = v.formats[b];
          if (!w || w === !0) return;
          if (
            typeof w != "object" ||
            w instanceof RegExp ||
            typeof w.compare != "function"
          ) {
            throw new Error(
              `"${f}": format "${b}" does not define "compare" function`,
            );
          }
          const N = u.scopeValue("formats", {
            key: b,
            ref: w,
            code: m.code.formats
              ? t._`${m.code.formats}${t.getProperty(b)}`
              : void 0,
          });
          s.fail$data($(N));
        }
        function $(b) {
          return t._`${b}.compare(${l}, ${c}) ${a[f].fail} 0`;
        }
      },
      dependencies: ["format"],
    };
    const o = (s) => (s.addKeyword(e.formatLimitDefinition), s);
    e.default = o;
  })(Ld),
    (function (e, r) {
      Object.defineProperty(r, "__esModule", { value: !0 });
      const t = kd,
        n = Ld,
        a = te,
        i = new a.Name("fullFormats"),
        o = new a.Name("fastFormats"),
        s = (l, c = { keywords: !0 }) => {
          if (Array.isArray(c)) return u(l, c, t.fullFormats, i), l;
          const [f, h] = c.mode === "fast"
              ? [t.fastFormats, o]
              : [t.fullFormats, i],
            m = c.formats || t.formatNames;
          return u(l, m, f, h), c.keywords && n.default(l), l;
        };
      s.get = (l, c = "full") => {
        const h = (c === "fast" ? t.fastFormats : t.fullFormats)[l];
        if (!h) throw new Error(`Unknown format "${l}"`);
        return h;
      };
      function u(l, c, f, h) {
        var m, v;
        ((m = (v = l.opts.code).formats) !== null && m !== void 0) ||
          (v.formats = a._`require("ajv-formats/dist/formats").${h}`);
        for (const y of c) l.addFormat(y, f[y]);
      }
      (e.exports = r = s),
        Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.default = s);
    })(nU, Za);
  const xd = Ti(Za);
  function Lr() {
    return (
      (Lr = Object.assign ? Object.assign.bind() : function (e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = arguments[r];
          for (var n in t) {
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          }
        }
        return e;
      }), Lr.apply(this, arguments)
    );
  }
  function aU(e, r) {
    if (e == null) return {};
    var t = {},
      n = Object.keys(e),
      a,
      i;
    for (i = 0; i < n.length; i++) {
      (a = n[i]), !(r.indexOf(a) >= 0) && (t[a] = e[a]);
    }
    return t;
  }
  var iU = { allErrors: !0, multipleOfPrecision: 8, strict: !1, verbose: !0 },
    oU =
      /^(#?([0-9A-Fa-f]{3}){1,2}\b|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\)))$/,
    sU = /^data:([a-z]+\/[a-z0-9-+.]+)?;(?:name=(.*);)?base64,(.*)$/;
  function uU(e, r, t, n, a) {
    t === void 0 && (t = {}), a === void 0 && (a = tU);
    var i = new a(Lr({}, iU, t));
    return (
      n ? xd(i, n) : n !== !1 && xd(i),
        i.addFormat("data-url", sU),
        i.addFormat("color", oU),
        i.addKeyword(mn),
        i.addKeyword(Po),
        Array.isArray(e) && i.addMetaSchema(e),
        Fe(r) &&
        Object.keys(r).forEach(function (o) {
          i.addFormat(o, r[o]);
        }),
        i
    );
  }
  var lU = ["instancePath", "keyword", "params", "schemaPath", "parentSchema"],
    qd = "__rjsf_rootSchema",
    cU = (function () {
      function e(t, n) {
        (this.ajv = void 0), (this.localizer = void 0);
        var a = t.additionalMetaSchemas,
          i = t.customFormats,
          o = t.ajvOptionsOverrides,
          s = t.ajvFormatOptions,
          u = t.AjvClass;
        (this.ajv = uU(a, i, o, s, u)), (this.localizer = n);
      }
      var r = e.prototype;
      return (
        (r.toErrorSchema = function (n) {
          var a = new N2();
          return (
            n.length &&
            n.forEach(function (i) {
              var o = i.property,
                s = i.message,
                u = bm(o);
              u.length > 0 && u[0] === "" && u.splice(0, 1),
                s && a.addErrors(s, u);
            }), a.ErrorSchema
          );
        }),
          (r.toErrorList = function (n, a) {
            var i = this;
            if ((a === void 0 && (a = []), !n)) return [];
            var o = [];
            return (
              Cr in n &&
              (o = o.concat(
                n[Cr].map(function (s) {
                  var u = "." + a.join(".");
                  return { property: u, message: s, stack: u + " " + s };
                }),
              )),
                Object.keys(n).reduce(function (s, u) {
                  return (
                    u !== Cr &&
                    (s = s.concat(i.toErrorList(n[u], [].concat(a, [u])))), s
                  );
                }, o)
            );
          }),
          (r.createErrorHandler = function (n) {
            var a = this,
              i = {
                __errors: [],
                addError: function (u) {
                  this.__errors.push(u);
                },
              };
            if (Array.isArray(n)) {
              return n.reduce(function (s, u, l) {
                var c;
                return Lr(
                  {},
                  s,
                  ((c = {}), (c[l] = a.createErrorHandler(u)), c),
                );
              }, i);
            }
            if (Fe(n)) {
              var o = n;
              return Object.keys(o).reduce(function (s, u) {
                var l;
                return Lr(
                  {},
                  s,
                  ((l = {}), (l[u] = a.createErrorHandler(o[u])), l),
                );
              }, i);
            }
            return i;
          }),
          (r.unwrapErrorHandler = function (n) {
            var a = this;
            return Object.keys(n).reduce(function (i, o) {
              var s;
              if (o === "addError") return i;
              if (o === Cr) {
                var u;
                return Lr({}, i, ((u = {}), (u[o] = n[o]), u));
              }
              return Lr(
                {},
                i,
                ((s = {}), (s[o] = a.unwrapErrorHandler(n[o])), s),
              );
            }, {});
          }),
          (r.transformRJSFValidationErrors = function (n, a) {
            return (
              n === void 0 && (n = []),
                n.map(function (i) {
                  var o = i.instancePath,
                    s = i.keyword,
                    u = i.params,
                    l = i.schemaPath,
                    c = i.parentSchema,
                    f = aU(i, lU),
                    h = f.message,
                    m = h === void 0 ? "" : h,
                    v = o.replace(/\//g, "."),
                    y = (v + " " + m).trim();
                  if ("missingProperty" in u) {
                    v = v ? v + "." + u.missingProperty : u.missingProperty;
                    var d = u.missingProperty,
                      p = me(fe(a, "" + v.replace(/^\./, ""))).title;
                    if (p) m = m.replace(d, p);
                    else {
                      var $ = fe(c, [Ir, d, "title"]);
                      $ && (m = m.replace(d, $));
                    }
                    y = m;
                  } else {
                    var b = me(fe(a, "" + v.replace(/^\./, ""))).title;
                    if (b) y = ("'" + b + "' " + m).trim();
                    else {
                      var w = c == null ? void 0 : c.title;
                      w && (y = ("'" + w + "' " + m).trim());
                    }
                  }
                  return {
                    name: s,
                    property: v,
                    message: m,
                    params: u,
                    stack: y,
                    schemaPath: l,
                  };
                })
            );
          }),
          (r.rawValidation = function (n, a) {
            var i = void 0,
              o;
            n.$id && (o = this.ajv.getSchema(n.$id));
            try {
              o === void 0 && (o = this.ajv.compile(n)), o(a);
            } catch (u) {
              i = u;
            }
            var s;
            return (
              o &&
              (typeof this.localizer == "function" && this.localizer(o.errors),
                (s = o.errors || void 0),
                (o.errors = null)), { errors: s, validationError: i }
            );
          }),
          (r.validateFormData = function (n, a, i, o, s) {
            var u = this.rawValidation(a, n),
              l = u.validationError,
              c = this.transformRJSFValidationErrors(u.errors, s);
            l && (c = [].concat(c, [{ stack: l.message }])),
              typeof o == "function" && (c = o(c, s));
            var f = this.toErrorSchema(c);
            if (
              (l && (f = Lr({}, f, { $schema: { __errors: [l.message] } })),
                typeof i != "function")
            ) {
              return { errors: c, errorSchema: f };
            }
            var h = Cf(this, a, n, a, !0),
              m = i(h, this.createErrorHandler(h), s),
              v = this.unwrapErrorHandler(m);
            return Df(this, { errors: c, errorSchema: f }, v);
          }),
          (r.withIdRefPrefixObject = function (n) {
            for (var a in n) {
              var i = n,
                o = i[a];
              a === qe && typeof o == "string" && o.startsWith("#")
                ? (i[a] = qd + o)
                : (i[a] = this.withIdRefPrefix(o));
            }
            return n;
          }),
          (r.withIdRefPrefixArray = function (n) {
            for (var a = 0; a < n.length; a++) {
              n[a] = this.withIdRefPrefix(n[a]);
            }
            return n;
          }),
          (r.isValid = function (n, a, i) {
            var o,
              s = (o = i.$id) != null ? o : qd;
            try {
              this.ajv.getSchema(s) === void 0 && this.ajv.addSchema(i, s);
              var u = this.withIdRefPrefix(n),
                l;
              u.$id && (l = this.ajv.getSchema(u.$id)),
                l === void 0 && (l = this.ajv.compile(u));
              var c = l(a);
              return c;
            } catch (f) {
              return console.warn("Error encountered compiling schema:", f), !1;
            } finally {
              this.ajv.removeSchema(s);
            }
          }),
          (r.withIdRefPrefix = function (n) {
            return Array.isArray(n)
              ? this.withIdRefPrefixArray([].concat(n))
              : Fe(n)
              ? this.withIdRefPrefixObject(fy(n))
              : n;
          }),
          e
      );
    })();
  function fU(e, r) {
    return e === void 0 && (e = {}), new cU(e, r);
  }
  var dU = fU();
  function hU(e, r, t) {
    for (var n = -1, a = r.length, i = {}; ++n < a;) {
      var o = r[n],
        s = Ai(e, o);
      t(s, o) && Gu(i, mt(o, e), s);
    }
    return i;
  }
  function mU(e, r) {
    return e != null && r in Object(e);
  }
  function Bd(e, r, t) {
    r = mt(r, e);
    for (var n = -1, a = r.length, i = !1; ++n < a;) {
      var o = Xt(r[n]);
      if (!(i = e != null && t(e, o))) break;
      e = e[o];
    }
    return i || ++n != a
      ? i
      : ((a = e == null ? 0 : e.length),
        !!a && ci(a) && li(o, a) && (ze(e) || zn(e)));
  }
  function pU(e, r) {
    return e != null && Bd(e, r, mU);
  }
  function vU(e, r) {
    return hU(e, r, function (t, n) {
      return pU(e, n);
    });
  }
  var yU = zu(function (e, r) {
    return e == null ? {} : vU(e, r);
  });
  const gU = yU;
  let $U = (e = 21) =>
    crypto
      .getRandomValues(new Uint8Array(e))
      .reduce(
        (r, t) => (
          (t &= 63),
            t < 36
              ? (r += t.toString(36))
              : t < 62
              ? (r += (t - 26).toString(36).toUpperCase())
              : t > 62
              ? (r += "-")
              : (r += "_"),
            r
        ),
        "",
      );
  var _U = Object.prototype,
    bU = _U.hasOwnProperty;
  function SU(e, r) {
    return e != null && bU.call(e, r);
  }
  function js(e, r) {
    return e != null && Bd(e, r, SU);
  }
  function Vd(e, r) {
    return e == null ? !0 : ku(e, r);
  }
  function Kd(e, r) {
    for (var t = 0; t < r.length; t++) {
      var n = r[t];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, TU(n.key), n);
    }
  }
  function EU(e, r, t) {
    return (
      r && Kd(e.prototype, r),
        t && Kd(e, t),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        e
    );
  }
  function X() {
    return (
      (X = Object.assign ? Object.assign.bind() : function (e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = arguments[r];
          for (var n in t) {
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          }
        }
        return e;
      }), X.apply(this, arguments)
    );
  }
  function jn(e, r) {
    (e.prototype = Object.create(r.prototype)),
      (e.prototype.constructor = e),
      Ms(e, r);
  }
  function Ms(e, r) {
    return (
      (Ms = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (n, a) {
          return (n.__proto__ = a), n;
        }), Ms(e, r)
    );
  }
  function sr(e, r) {
    if (e == null) return {};
    var t = {},
      n = Object.keys(e),
      a,
      i;
    for (i = 0; i < n.length; i++) {
      (a = n[i]), !(r.indexOf(a) >= 0) && (t[a] = e[a]);
    }
    return t;
  }
  function wU(e, r) {
    if (e) {
      if (typeof e == "string") return zd(e, r);
      var t = Object.prototype.toString.call(e).slice(8, -1);
      if (
        (t === "Object" && e.constructor && (t = e.constructor.name),
          t === "Map" || t === "Set")
      ) {
        return Array.from(e);
      }
      if (
        t === "Arguments" ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
      ) {
        return zd(e, r);
      }
    }
  }
  function zd(e, r) {
    (r == null || r > e.length) && (r = e.length);
    for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
    return n;
  }
  function OU(e, r) {
    var t = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
    if (t) return (t = t.call(e)).next.bind(t);
    if (
      Array.isArray(e) ||
      (t = wU(e)) ||
      (r && e && typeof e.length == "number")
    ) {
      t && (e = t);
      var n = 0;
      return function () {
        return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function AU(e, r) {
    if (typeof e != "object" || e === null) return e;
    var t = e[Symbol.toPrimitive];
    if (t !== void 0) {
      var n = t.call(e, r || "default");
      if (typeof n != "object") return n;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (r === "string" ? String : Number)(e);
  }
  function TU(e) {
    var r = AU(e, "string");
    return typeof r == "symbol" ? r : String(r);
  }
  var PU = ["widget"],
    CU = ["widget"],
    IU = ["widget"];
  function Gd() {
    return $U();
  }
  function Wd(e) {
    return Array.isArray(e)
      ? e.map(function (r) {
        return { key: Gd(), item: r };
      })
      : [];
  }
  function Qa(e) {
    return Array.isArray(e)
      ? e.map(function (r) {
        return r.item;
      })
      : [];
  }
  var NU = (function (e) {
      jn(r, e);
      function r(n) {
        var a;
        (a = e.call(this, n) || this),
          (a._getNewFormDataRow = function () {
            var u = a.props,
              l = u.schema,
              c = u.registry,
              f = c.schemaUtils,
              h = l.items;
            return (
              Do(l) && r2(l) && (h = l.additionalItems),
                f.getDefaultFormState(h)
            );
          }),
          (a.onAddClick = function (u) {
            a._handleAddClick(u);
          }),
          (a.onAddIndexClick = function (u) {
            return function (l) {
              a._handleAddClick(l, u);
            };
          }),
          (a.onDropIndexClick = function (u) {
            return function (l) {
              l && l.preventDefault();
              var c = a.props,
                f = c.onChange,
                h = c.errorSchema,
                m = a.state.keyedFormData,
                v;
              if (h) {
                v = {};
                for (var y in h) {
                  var d = parseInt(y);
                  d < u ? Ye(v, [d], h[y]) : d > u && Ye(v, [d - 1], h[y]);
                }
              }
              var p = m.filter(function ($, b) {
                return b !== u;
              });
              a.setState(
                { keyedFormData: p, updatedKeyedFormData: !0 },
                function () {
                  return f(Qa(p), v);
                },
              );
            };
          }),
          (a.onReorderClick = function (u, l) {
            return function (c) {
              c && (c.preventDefault(), c.currentTarget.blur());
              var f = a.props,
                h = f.onChange,
                m = f.errorSchema,
                v;
              if (a.props.errorSchema) {
                v = {};
                for (var y in m) {
                  var d = parseInt(y);
                  d == u
                    ? Ye(v, [l], m[u])
                    : d == l
                    ? Ye(v, [u], m[l])
                    : Ye(v, [y], m[d]);
                }
              }
              var p = a.state.keyedFormData;
              function $() {
                var w = p.slice();
                return w.splice(u, 1), w.splice(l, 0, p[u]), w;
              }
              var b = $();
              a.setState({ keyedFormData: b }, function () {
                return h(Qa(b), v);
              });
            };
          }),
          (a.onChangeForIndex = function (u) {
            return function (l, c, f) {
              var h,
                m = a.props,
                v = m.formData,
                y = m.onChange,
                d = m.errorSchema,
                p = Array.isArray(v) ? v : [],
                $ = p.map(function (b, w) {
                  var N = typeof l > "u" ? null : l;
                  return u === w ? N : b;
                });
              y($, d && d && X({}, d, ((h = {}), (h[u] = c), h)), f);
            };
          }),
          (a.onSelectChange = function (u) {
            var l = a.props,
              c = l.onChange,
              f = l.idSchema;
            c(u, void 0, f && f.$id);
          });
        var i = n.formData,
          o = i === void 0 ? [] : i,
          s = Wd(o);
        return (a.state = { keyedFormData: s, updatedKeyedFormData: !1 }), a;
      }
      r.getDerivedStateFromProps = function (a, i) {
        if (i.updatedKeyedFormData) return { updatedKeyedFormData: !1 };
        var o = Array.isArray(a.formData) ? a.formData : [],
          s = i.keyedFormData || [],
          u = o.length === s.length
            ? s.map(function (l, c) {
              return { key: l.key, item: o[c] };
            })
            : Wd(o);
        return { keyedFormData: u };
      };
      var t = r.prototype;
      return (
        (t.isItemRequired = function (a) {
          return Array.isArray(a.type)
            ? !a.type.includes("null")
            : a.type !== "null";
        }),
          (t.canAddItem = function (a) {
            var i = this.props,
              o = i.schema,
              s = i.uiSchema,
              u = me(s),
              l = u.addable;
            return (
              l !== !1 &&
              (o.maxItems !== void 0 ? (l = a.length < o.maxItems) : (l = !0)),
                l
            );
          }),
          (t._handleAddClick = function (a, i) {
            a && a.preventDefault();
            var o = this.props.onChange,
              s = this.state.keyedFormData,
              u = { key: Gd(), item: this._getNewFormDataRow() },
              l = [].concat(s);
            i !== void 0 ? l.splice(i, 0, u) : l.push(u),
              this.setState(
                { keyedFormData: l, updatedKeyedFormData: !0 },
                function () {
                  return o(Qa(l));
                },
              );
          }),
          (t.render = function () {
            var a = this.props,
              i = a.schema,
              o = a.uiSchema,
              s = a.idSchema,
              u = a.registry,
              l = u.schemaUtils;
            if (!(Qr in i)) {
              var c = me(o),
                f = ve("UnsupportedFieldTemplate", u, c);
              return P.createElement(f, {
                schema: i,
                idSchema: s,
                reason: "Missing items definition",
                registry: u,
              });
            }
            return l.isMultiSelect(i)
              ? this.renderMultiSelect()
              : If(o)
              ? this.renderCustomWidget()
              : Do(i)
              ? this.renderFixedArray()
              : l.isFilesArray(i, o)
              ? this.renderFiles()
              : this.renderNormalArray();
          }),
          (t.renderNormalArray = function () {
            var a = this,
              i = this.props,
              o = i.schema,
              s = i.uiSchema,
              u = s === void 0 ? {} : s,
              l = i.errorSchema,
              c = i.idSchema,
              f = i.name,
              h = i.disabled,
              m = h === void 0 ? !1 : h,
              v = i.readonly,
              y = v === void 0 ? !1 : v,
              d = i.autofocus,
              p = d === void 0 ? !1 : d,
              $ = i.required,
              b = $ === void 0 ? !1 : $,
              w = i.registry,
              N = i.onBlur,
              O = i.onFocus,
              E = i.idPrefix,
              D = i.idSeparator,
              R = D === void 0 ? "_" : D,
              k = i.rawErrors,
              B = this.state.keyedFormData,
              q = o.title === void 0 ? f : o.title,
              z = w.schemaUtils,
              G = w.formContext,
              H = me(u),
              pe = Fe(o.items) ? o.items : {},
              we = z.retrieveSchema(pe),
              le = Qa(this.state.keyedFormData),
              ne = this.canAddItem(le),
              x = {
                canAdd: ne,
                items: B.map(function (U, C) {
                  var g = U.key,
                    S = U.item,
                    F = S,
                    L = z.retrieveSchema(pe, F),
                    V = l ? l[C] : void 0,
                    ee = c.$id + R + C,
                    Q = z.toIdSchema(L, ee, F, E, R);
                  return a.renderArrayFieldItem({
                    key: g,
                    index: C,
                    name: f && f + "-" + C,
                    canAdd: ne,
                    canMoveUp: C > 0,
                    canMoveDown: C < le.length - 1,
                    itemSchema: L,
                    itemIdSchema: Q,
                    itemErrorSchema: V,
                    itemData: F,
                    itemUiSchema: u.items,
                    autofocus: p && C === 0,
                    onBlur: N,
                    onFocus: O,
                    rawErrors: k,
                    totalItems: B.length,
                  });
                }),
                className: "field field-array field-array-of-" + we.type,
                disabled: m,
                idSchema: c,
                uiSchema: u,
                onAddClick: this.onAddClick,
                readonly: y,
                required: b,
                schema: o,
                title: q,
                formContext: G,
                formData: le,
                rawErrors: k,
                registry: w,
              },
              I = ve("ArrayFieldTemplate", w, H);
            return P.createElement(I, X({}, x));
          }),
          (t.renderCustomWidget = function () {
            var a = this.props,
              i = a.schema,
              o = a.idSchema,
              s = a.uiSchema,
              u = a.disabled,
              l = u === void 0 ? !1 : u,
              c = a.readonly,
              f = c === void 0 ? !1 : c,
              h = a.autofocus,
              m = h === void 0 ? !1 : h,
              v = a.required,
              y = v === void 0 ? !1 : v,
              d = a.hideError,
              p = a.placeholder,
              $ = a.onBlur,
              b = a.onFocus,
              w = a.formData,
              N = w === void 0 ? [] : w,
              O = a.registry,
              E = a.rawErrors,
              D = a.name,
              R = O.widgets,
              k = O.formContext,
              B = i.title || D,
              q = me(s),
              z = q.widget,
              G = sr(q, PU),
              H = wr(i, z, R);
            return P.createElement(H, {
              id: o.$id,
              multiple: !0,
              onChange: this.onSelectChange,
              onBlur: $,
              onFocus: b,
              options: G,
              schema: i,
              uiSchema: s,
              registry: O,
              value: N,
              disabled: l,
              readonly: f,
              hideError: d,
              required: y,
              label: B,
              placeholder: p,
              formContext: k,
              autofocus: m,
              rawErrors: E,
            });
          }),
          (t.renderMultiSelect = function () {
            var a = this.props,
              i = a.schema,
              o = a.idSchema,
              s = a.uiSchema,
              u = a.formData,
              l = u === void 0 ? [] : u,
              c = a.disabled,
              f = c === void 0 ? !1 : c,
              h = a.readonly,
              m = h === void 0 ? !1 : h,
              v = a.autofocus,
              y = v === void 0 ? !1 : v,
              d = a.required,
              p = d === void 0 ? !1 : d,
              $ = a.placeholder,
              b = a.onBlur,
              w = a.onFocus,
              N = a.registry,
              O = a.rawErrors,
              E = a.name,
              D = N.widgets,
              R = N.schemaUtils,
              k = N.formContext,
              B = R.retrieveSchema(i.items, l),
              q = i.title || E,
              z = Ia(B),
              G = me(s),
              H = G.widget,
              pe = H === void 0 ? "select" : H,
              we = sr(G, CU),
              le = wr(i, pe, D);
            return P.createElement(le, {
              id: o.$id,
              multiple: !0,
              onChange: this.onSelectChange,
              onBlur: b,
              onFocus: w,
              options: X({}, we, { enumOptions: z }),
              schema: i,
              uiSchema: s,
              registry: N,
              value: l,
              disabled: f,
              readonly: m,
              required: p,
              label: q,
              placeholder: $,
              formContext: k,
              autofocus: y,
              rawErrors: O,
            });
          }),
          (t.renderFiles = function () {
            var a = this.props,
              i = a.schema,
              o = a.uiSchema,
              s = a.idSchema,
              u = a.name,
              l = a.disabled,
              c = l === void 0 ? !1 : l,
              f = a.readonly,
              h = f === void 0 ? !1 : f,
              m = a.autofocus,
              v = m === void 0 ? !1 : m,
              y = a.required,
              d = y === void 0 ? !1 : y,
              p = a.onBlur,
              $ = a.onFocus,
              b = a.registry,
              w = a.formData,
              N = w === void 0 ? [] : w,
              O = a.rawErrors,
              E = i.title || u,
              D = b.widgets,
              R = b.formContext,
              k = me(o),
              B = k.widget,
              q = B === void 0 ? "files" : B,
              z = sr(k, IU),
              G = wr(i, q, D);
            return P.createElement(G, {
              options: z,
              id: s.$id,
              multiple: !0,
              onChange: this.onSelectChange,
              onBlur: p,
              onFocus: $,
              schema: i,
              uiSchema: o,
              title: E,
              value: N,
              disabled: c,
              readonly: h,
              required: d,
              registry: b,
              formContext: R,
              autofocus: v,
              rawErrors: O,
              label: "",
            });
          }),
          (t.renderFixedArray = function () {
            var a = this,
              i = this.props,
              o = i.schema,
              s = i.uiSchema,
              u = s === void 0 ? {} : s,
              l = i.formData,
              c = l === void 0 ? [] : l,
              f = i.errorSchema,
              h = i.idPrefix,
              m = i.idSeparator,
              v = m === void 0 ? "_" : m,
              y = i.idSchema,
              d = i.name,
              p = i.disabled,
              $ = p === void 0 ? !1 : p,
              b = i.readonly,
              w = b === void 0 ? !1 : b,
              N = i.autofocus,
              O = N === void 0 ? !1 : N,
              E = i.required,
              D = E === void 0 ? !1 : E,
              R = i.registry,
              k = i.onBlur,
              B = i.onFocus,
              q = i.rawErrors,
              z = this.state.keyedFormData,
              G = this.props.formData,
              H = G === void 0 ? [] : G,
              pe = o.title || d,
              we = me(u),
              le = R.schemaUtils,
              ne = R.formContext,
              x = Fe(o.items) ? o.items : [],
              I = x.map(function (F, L) {
                return le.retrieveSchema(F, c[L]);
              }),
              U = Fe(o.additionalItems)
                ? le.retrieveSchema(o.additionalItems, c)
                : null;
            (!H || H.length < I.length) &&
              ((H = H || []), (H = H.concat(new Array(I.length - H.length))));
            var C = this.canAddItem(H) && !!U,
              g = {
                canAdd: C,
                className: "field field-array field-array-fixed-items",
                disabled: $,
                idSchema: y,
                formData: c,
                items: z.map(function (F, L) {
                  var V = F.key,
                    ee = F.item,
                    Q = ee,
                    ce = L >= I.length,
                    Ue = ce && Fe(o.additionalItems)
                      ? le.retrieveSchema(o.additionalItems, Q)
                      : I[L],
                    Ze = y.$id + v + L,
                    K = le.toIdSchema(Ue, Ze, Q, h, v),
                    We = ce
                      ? u.additionalItems || {}
                      : Array.isArray(u.items)
                      ? u.items[L]
                      : u.items || {},
                    Te = f ? f[L] : void 0;
                  return a.renderArrayFieldItem({
                    key: V,
                    index: L,
                    name: d && d + "-" + L,
                    canAdd: C,
                    canRemove: ce,
                    canMoveUp: L >= I.length + 1,
                    canMoveDown: ce && L < H.length - 1,
                    itemSchema: Ue,
                    itemData: Q,
                    itemUiSchema: We,
                    itemIdSchema: K,
                    itemErrorSchema: Te,
                    autofocus: O && L === 0,
                    onBlur: k,
                    onFocus: B,
                    rawErrors: q,
                    totalItems: z.length,
                  });
                }),
                onAddClick: this.onAddClick,
                readonly: w,
                required: D,
                registry: R,
                schema: o,
                uiSchema: u,
                title: pe,
                formContext: ne,
                rawErrors: q,
              },
              S = ve("ArrayFieldTemplate", R, we);
            return P.createElement(S, X({}, g));
          }),
          (t.renderArrayFieldItem = function (a) {
            var i = a.key,
              o = a.index,
              s = a.name,
              u = a.canAdd,
              l = a.canRemove,
              c = l === void 0 ? !0 : l,
              f = a.canMoveUp,
              h = f === void 0 ? !0 : f,
              m = a.canMoveDown,
              v = m === void 0 ? !0 : m,
              y = a.itemSchema,
              d = a.itemData,
              p = a.itemUiSchema,
              $ = a.itemIdSchema,
              b = a.itemErrorSchema,
              w = a.autofocus,
              N = a.onBlur,
              O = a.onFocus,
              E = a.rawErrors,
              D = a.totalItems,
              R = this.props,
              k = R.disabled,
              B = R.hideError,
              q = R.idPrefix,
              z = R.idSeparator,
              G = R.readonly,
              H = R.uiSchema,
              pe = R.registry,
              we = R.formContext,
              le = pe.fields,
              ne = le.ArraySchemaField,
              x = le.SchemaField,
              I = ne || x,
              U = me(H),
              C = U.orderable,
              g = C === void 0 ? !0 : C,
              S = U.removable,
              F = S === void 0 ? !0 : S,
              L = {
                moveUp: g && h,
                moveDown: g && v,
                remove: F && c,
                toolbar: !1,
              };
            return (
              (L.toolbar = Object.keys(L).some(function (V) {
                return L[V];
              })), {
                children: P.createElement(I, {
                  name: s,
                  index: o,
                  schema: y,
                  uiSchema: p,
                  formData: d,
                  formContext: we,
                  errorSchema: b,
                  idPrefix: q,
                  idSeparator: z,
                  idSchema: $,
                  required: this.isItemRequired(y),
                  onChange: this.onChangeForIndex(o),
                  onBlur: N,
                  onFocus: O,
                  registry: pe,
                  disabled: k,
                  readonly: G,
                  hideError: B,
                  autofocus: w,
                  rawErrors: E,
                }),
                className: "array-item",
                disabled: k,
                canAdd: u,
                hasToolbar: L.toolbar,
                hasMoveUp: L.moveUp,
                hasMoveDown: L.moveDown,
                hasRemove: L.remove,
                index: o,
                totalItems: D,
                key: i,
                onAddIndexClick: this.onAddIndexClick,
                onDropIndexClick: this.onDropIndexClick,
                onReorderClick: this.onReorderClick,
                readonly: G,
                registry: pe,
                schema: y,
                uiSchema: p,
              }
            );
          }),
          EU(r, [
            {
              key: "itemTitle",
              get: function () {
                var a = this.props.schema;
                return fe(a, [Qr, "title"], fe(a, [Qr, "description"], "Item"));
              },
            },
          ]),
          r
      );
    })(P.Component),
    DU = ["widget"];
  function FU(e) {
    var r = e.schema,
      t = e.name,
      n = e.uiSchema,
      a = e.idSchema,
      i = e.formData,
      o = e.registry,
      s = e.required,
      u = e.disabled,
      l = e.readonly,
      c = e.autofocus,
      f = e.onChange,
      h = e.onFocus,
      m = e.onBlur,
      v = e.rawErrors,
      y = r.title,
      d = o.widgets,
      p = o.formContext,
      $ = me(n),
      b = $.widget,
      w = b === void 0 ? "checkbox" : b,
      N = sr($, DU),
      O = wr(r, w, d),
      E;
    if (Array.isArray(r.oneOf)) {
      E = Ia({
        oneOf: r.oneOf
          .map(function (B) {
            if (Fe(B)) {
              return X({}, B, {
                title: B.title || (B.const === !0 ? "Yes" : "No"),
              });
            }
          })
          .filter(function (B) {
            return B;
          }),
      });
    } else {
      var D,
        R = r,
        k = (D = r.enum) != null ? D : [!0, !1];
      !R.enumNames &&
        k.length === 2 &&
        k.every(function (B) {
          return typeof B == "boolean";
        })
        ? (E = [
          { value: k[0], label: k[0] ? "Yes" : "No" },
          { value: k[1], label: k[1] ? "Yes" : "No" },
        ])
        : (E = Ia({ enum: k, enumNames: R.enumNames }));
    }
    return P.createElement(O, {
      options: X({}, N, { enumOptions: E }),
      schema: r,
      uiSchema: n,
      id: a.$id,
      onChange: f,
      onFocus: h,
      onBlur: m,
      label: y === void 0 ? t : y,
      value: i,
      required: s,
      disabled: u,
      readonly: l,
      registry: o,
      formContext: p,
      autofocus: c,
      rawErrors: v,
    });
  }
  var jU = ["widget"],
    Hd = (function (e) {
      jn(r, e);
      function r(n) {
        var a;
        (a = e.call(this, n) || this),
          (a.onOptionChange = function (u) {
            var l = parseInt(u, 10),
              c = a.props,
              f = c.formData,
              h = c.onChange,
              m = c.options,
              v = c.registry,
              y = v.schemaUtils,
              d = y.retrieveSchema(m[l], f),
              p = void 0;
            if (Nt(f) === "object" && (d.type === "object" || d.properties)) {
              p = Object.assign({}, f);
              var $ = m.slice();
              $.splice(l, 1);
              for (var b = OU($), w; !(w = b()).done;) {
                var N = w.value;
                if (N.properties) {
                  for (var O in N.properties) js(p, O) && Vd(p, O);
                }
              }
            }
            h(
              y.getDefaultFormState(m[l], p, "excludeObjectChildren"),
              void 0,
              a.getFieldId(),
            ), a.setState({ selectedOption: parseInt(u, 10) });
          });
        var i = a.props,
          o = i.formData,
          s = i.options;
        return (a.state = { selectedOption: a.getMatchingOption(0, o, s) }), a;
      }
      var t = r.prototype;
      return (
        (t.componentDidUpdate = function (a, i) {
          var o = this.props,
            s = o.formData,
            u = o.options,
            l = o.idSchema,
            c = this.state.selectedOption;
          if (!Nr(s, a.formData) && l.$id === a.idSchema.$id) {
            var f = this.getMatchingOption(c, s, u);
            if (!i || f === c) return;
            this.setState({ selectedOption: f });
          }
        }),
          (t.getMatchingOption = function (a, i, o) {
            var s = this.props.registry.schemaUtils,
              u = s.getMatchingOption(i, o);
            return u !== 0 ? u : a || 0;
          }),
          (t.getFieldId = function () {
            var a = this.props,
              i = a.idSchema,
              o = a.schema;
            return "" + i.$id + (o.oneOf ? "__oneof_select" : "__anyof_select");
          }),
          (t.render = function () {
            var a = this.props,
              i = a.name,
              o = a.baseType,
              s = a.disabled,
              u = s === void 0 ? !1 : s,
              l = a.readonly,
              c = l === void 0 ? !1 : l,
              f = a.hideError,
              h = f === void 0 ? !1 : f,
              m = a.errorSchema,
              v = m === void 0 ? {} : m,
              y = a.formData,
              d = a.formContext,
              p = a.idPrefix,
              $ = a.idSeparator,
              b = a.idSchema,
              w = a.onBlur,
              N = a.onChange,
              O = a.onFocus,
              E = a.options,
              D = a.registry,
              R = a.uiSchema,
              k = D.widgets,
              B = D.fields,
              q = B.SchemaField,
              z = this.state.selectedOption,
              G = me(R),
              H = G.widget,
              pe = H === void 0 ? "select" : H,
              we = sr(G, jU),
              le = wr({ type: "number" }, pe, k),
              ne = E[z] || null,
              x;
            ne && (x = ne.type ? ne : Object.assign({}, ne, { type: o }));
            var I = E.map(function (U, C) {
              return { label: U.title || "Option " + (C + 1), value: C };
            });
            return P.createElement(
              "div",
              { className: "panel panel-default panel-body" },
              P.createElement(
                "div",
                { className: "form-group" },
                P.createElement(
                  le,
                  X(
                    {
                      id: this.getFieldId(),
                      schema: { type: "number", default: 0 },
                      onChange: this.onOptionChange,
                      onBlur: w,
                      onFocus: O,
                      value: z,
                      options: { enumOptions: I },
                      registry: D,
                      formContext: d,
                    },
                    we,
                    { label: "" },
                  ),
                ),
              ),
              ne !== null &&
                P.createElement(q, {
                  name: i,
                  schema: x,
                  uiSchema: R,
                  errorSchema: v,
                  idSchema: b,
                  idPrefix: p,
                  idSeparator: $,
                  formData: y,
                  formContext: d,
                  onChange: N,
                  onBlur: w,
                  onFocus: O,
                  registry: D,
                  disabled: u,
                  readonly: c,
                  hideError: h,
                }),
            );
          }),
          r
      );
    })(P.Component),
    MU = /\.([0-9]*0)*$/,
    RU = /[0.]0*$/;
  function UU(e) {
    var r = e.registry,
      t = e.onChange,
      n = e.formData,
      a = e.value,
      i = P.useState(a),
      o = i[0],
      s = i[1],
      u = r.fields.StringField,
      l = n,
      c = P.useCallback(
        function (h) {
          s(h), ("" + h).charAt(0) === "." && (h = "0" + h);
          var m = typeof h == "string" && h.match(MU)
            ? hn(h.replace(RU, ""))
            : hn(h);
          t(m);
        },
        [t],
      );
    if (typeof o == "string" && typeof l == "number") {
      var f = new RegExp(("" + l).replace(".", "\\.") + "\\.?0*$");
      o.match(f) && (l = o);
    }
    return P.createElement(u, X({}, e, { formData: l, onChange: c }));
  }
  var kU = (function (e) {
      jn(r, e);
      function r() {
        for (var n, a = arguments.length, i = new Array(a), o = 0; o < a; o++) {
          i[o] = arguments[o];
        }
        return (
          (n = e.call.apply(e, [this].concat(i)) || this),
            (n.state = {
              wasPropertyKeyModified: !1,
              additionalProperties: {},
            }),
            (n.onPropertyChange = function (s, u) {
              return (
                u === void 0 && (u = !1), function (l, c, f) {
                  var h,
                    m,
                    v = n.props,
                    y = v.formData,
                    d = v.onChange,
                    p = v.errorSchema;
                  l === void 0 && u && (l = "");
                  var $ = X({}, y, ((h = {}), (h[s] = l), h));
                  d($, p && p && X({}, p, ((m = {}), (m[s] = c), m)), f);
                }
              );
            }),
            (n.onDropPropertyClick = function (s) {
              return function (u) {
                u.preventDefault();
                var l = n.props,
                  c = l.onChange,
                  f = l.formData,
                  h = X({}, f);
                Vd(h, s), c(h);
              };
            }),
            (n.getAvailableKey = function (s, u) {
              for (
                var l = n.props.uiSchema,
                  c = me(l),
                  f = c.duplicateKeySuffixSeparator,
                  h = f === void 0 ? "-" : f,
                  m = 0,
                  v = s;
                js(u, v);
              ) {
                v = "" + s + h + ++m;
              }
              return v;
            }),
            (n.onKeyChange = function (s) {
              return function (u, l) {
                var c, f;
                if (s !== u) {
                  var h = n.props,
                    m = h.formData,
                    v = h.onChange,
                    y = h.errorSchema;
                  u = n.getAvailableKey(u, m);
                  var d = X({}, m),
                    p = ((c = {}), (c[s] = u), c),
                    $ = Object.keys(d).map(function (w) {
                      var N,
                        O = p[w] || w;
                      return (N = {}), (N[O] = d[w]), N;
                    }),
                    b = Object.assign.apply(Object, [{}].concat($));
                  n.setState({ wasPropertyKeyModified: !0 }),
                    v(b, y && y && X({}, y, ((f = {}), (f[u] = l), f)));
                }
              };
            }),
            (n.handleAddClick = function (s) {
              return function () {
                if (s.additionalProperties) {
                  var u = n.props,
                    l = u.formData,
                    c = u.onChange,
                    f = u.registry,
                    h = X({}, l),
                    m = void 0;
                  if (
                    Fe(s.additionalProperties) &&
                    ((m = s.additionalProperties.type),
                      qe in s.additionalProperties)
                  ) {
                    var v = f.schemaUtils,
                      y = v.retrieveSchema(
                        { $ref: s.additionalProperties[qe] },
                        l,
                      );
                    m = y.type;
                  }
                  var d = n.getAvailableKey("newKey", h);
                  Ye(h, d, n.getDefaultValue(m)), c(h);
                }
              };
            }),
            n
        );
      }
      var t = r.prototype;
      return (
        (t.isRequired = function (a) {
          var i = this.props.schema;
          return Array.isArray(i.required) && i.required.indexOf(a) !== -1;
        }),
          (t.getDefaultValue = function (a) {
            switch (a) {
              case "string":
                return "New Value";
              case "array":
                return [];
              case "boolean":
                return !1;
              case "null":
                return null;
              case "number":
                return 0;
              case "object":
                return {};
              default:
                return "New Value";
            }
          }),
          (t.render = function () {
            var a = this,
              i = this.props,
              o = i.schema,
              s = i.uiSchema,
              u = s === void 0 ? {} : s,
              l = i.formData,
              c = i.errorSchema,
              f = i.idSchema,
              h = i.name,
              m = i.required,
              v = m === void 0 ? !1 : m,
              y = i.disabled,
              d = y === void 0 ? !1 : y,
              p = i.readonly,
              $ = p === void 0 ? !1 : p,
              b = i.hideError,
              w = i.idPrefix,
              N = i.idSeparator,
              O = i.onBlur,
              E = i.onFocus,
              D = i.registry,
              R = D.fields,
              k = D.formContext,
              B = D.schemaUtils,
              q = R.SchemaField,
              z = B.retrieveSchema(o, l),
              G = me(u),
              H = z.properties,
              pe = H === void 0 ? {} : H,
              we = z.title === void 0 ? h : z.title,
              le = G.description || z.description,
              ne;
            try {
              var x = Object.keys(pe);
              ne = x2(x, G.order);
            } catch (C) {
              return P.createElement(
                "div",
                null,
                P.createElement(
                  "p",
                  { className: "config-error", style: { color: "red" } },
                  "Invalid ",
                  h || "root",
                  " object field configuration:",
                  P.createElement("em", null, C.message),
                  ".",
                ),
                P.createElement("pre", null, JSON.stringify(z)),
              );
            }
            var I = ve("ObjectFieldTemplate", D, G),
              U = {
                title: G.title || we,
                description: le,
                properties: ne.map(function (C) {
                  var g = js(z, [Ir, C, mn]),
                    S = g ? u.additionalProperties : u[C],
                    F = me(S).widget === "hidden",
                    L = fe(f, [C], {});
                  return {
                    content: P.createElement(q, {
                      key: C,
                      name: C,
                      required: a.isRequired(C),
                      schema: fe(z, [Ir, C], {}),
                      uiSchema: S,
                      errorSchema: fe(c, C),
                      idSchema: L,
                      idPrefix: w,
                      idSeparator: N,
                      formData: fe(l, C),
                      formContext: k,
                      wasPropertyKeyModified: a.state.wasPropertyKeyModified,
                      onKeyChange: a.onKeyChange(C),
                      onChange: a.onPropertyChange(C, g),
                      onBlur: O,
                      onFocus: E,
                      registry: D,
                      disabled: d,
                      readonly: $,
                      hideError: b,
                      onDropPropertyClick: a.onDropPropertyClick,
                    }),
                    name: C,
                    readonly: $,
                    disabled: d,
                    required: v,
                    hidden: F,
                  };
                }),
                readonly: $,
                disabled: d,
                required: v,
                idSchema: f,
                uiSchema: u,
                schema: z,
                formData: l,
                formContext: k,
                registry: D,
              };
            return P.createElement(
              I,
              X({}, U, { onAddClick: this.handleAddClick }),
            );
          }),
          r
      );
    })(P.Component),
    LU = ["__errors"],
    xU = {
      array: "ArrayField",
      boolean: "BooleanField",
      integer: "NumberField",
      number: "NumberField",
      object: "ObjectField",
      string: "StringField",
      null: "NullField",
    };
  function qU(e, r, t, n) {
    var a = r.field,
      i = n.fields;
    if (typeof a == "function") return a;
    if (typeof a == "string" && a in i) return i[a];
    var o = Dt(e),
      s = Array.isArray(o) ? o[0] : o || "",
      u = xU[s];
    return !u && (e.anyOf || e.oneOf)
      ? function () {
        return null;
      }
      : u in i
      ? i[u]
      : function () {
        var l = ve("UnsupportedFieldTemplate", n, r);
        return P.createElement(l, {
          schema: e,
          idSchema: t,
          reason: "Unknown field type " + e.type,
          registry: n,
        });
      };
  }
  function BU(e) {
    var r = e.schema,
      t = e.idSchema,
      n = e.uiSchema,
      a = e.formData,
      i = e.errorSchema,
      o = e.idPrefix,
      s = e.idSeparator,
      u = e.name,
      l = e.onChange,
      c = e.onKeyChange,
      f = e.onDropPropertyClick,
      h = e.required,
      m = e.registry,
      v = e.wasPropertyKeyModified,
      y = v === void 0 ? !1 : v,
      d = m.formContext,
      p = m.schemaUtils,
      $ = me(n),
      b = ve("FieldTemplate", m, $),
      w = ve("DescriptionFieldTemplate", m, $),
      N = ve("FieldHelpTemplate", m, $),
      O = ve("FieldErrorTemplate", m, $),
      E = p.retrieveSchema(r, a),
      D = t[Ea],
      R = vn(p.toIdSchema(E, D, a, o, s), t),
      k = P.useCallback(
        function (K, We, Te) {
          var pr = Te || D;
          return l(K, We, pr);
        },
        [D, l],
      ),
      B = qU(E, $, R, m),
      q = Boolean(e.disabled || $.disabled),
      z = Boolean(e.readonly || $.readonly || e.schema.readOnly || E.readOnly),
      G = $.hideError,
      H = G === void 0 ? e.hideError : Boolean(G),
      pe = Boolean(e.autofocus || $.autofocus);
    if (Object.keys(E).length === 0) return null;
    var we = p.getDisplayLabel(E, n),
      le = i || {},
      ne = le.__errors,
      x = sr(le, LU),
      I = Ii(n, ["ui:classNames", "classNames", "ui:style"]);
    Oa in I && (I[Oa] = Ii(I[Oa], ["classNames", "style"]));
    var U = P.createElement(
        B,
        X({}, e, {
          onChange: k,
          idSchema: R,
          schema: E,
          uiSchema: I,
          disabled: q,
          readonly: z,
          hideError: H,
          autofocus: pe,
          errorSchema: x,
          formContext: d,
          rawErrors: ne,
        }),
      ),
      C = R[Ea],
      g;
    y ? (g = u) : (g = mn in E ? u : $.title || e.schema.title || E.title || u);
    var S = $.description || e.schema.description || E.description || "",
      F = $.help,
      L = $.widget === "hidden",
      V = ["form-group", "field", "field-" + E.type];
    !H && ne && ne.length > 0 && V.push("field-error has-error has-danger"),
      n != null &&
      n.classNames &&
      ({}.NODE_ENV !== "production" &&
        console.warn(
          "'uiSchema.classNames' is deprecated and may be removed in a major release; Use 'ui:classNames' instead.",
        ),
        V.push(n.classNames)),
      $.classNames && V.push($.classNames);
    var ee = P.createElement(N, {
        help: F,
        idSchema: R,
        schema: E,
        uiSchema: n,
        hasErrors: !H && ne && ne.length > 0,
        registry: m,
      }),
      Q = H ? void 0 : P.createElement(O, {
        errors: ne,
        errorSchema: i,
        idSchema: R,
        schema: E,
        uiSchema: n,
        registry: m,
      }),
      ce = {
        description: P.createElement(w, {
          id: gn(C),
          description: S,
          schema: E,
          uiSchema: n,
          registry: m,
        }),
        rawDescription: S,
        help: ee,
        rawHelp: typeof F == "string" ? F : void 0,
        errors: Q,
        rawErrors: H ? void 0 : ne,
        id: C,
        label: g,
        hidden: L,
        onChange: l,
        onKeyChange: c,
        onDropPropertyClick: f,
        required: h,
        disabled: q,
        readonly: z,
        hideError: H,
        displayLabel: we,
        classNames: V.join(" ").trim(),
        style: $.style,
        formContext: d,
        formData: a,
        schema: E,
        uiSchema: n,
        registry: m,
      },
      Ue = m.fields.AnyOfField,
      Ze = m.fields.OneOfField;
    return P.createElement(
      b,
      X({}, ce),
      P.createElement(
        P.Fragment,
        null,
        U,
        E.anyOf &&
          !(n != null && n["ui:field"]) &&
          !p.isSelect(E) &&
          P.createElement(Ue, {
            name: u,
            disabled: q,
            readonly: z,
            hideError: H,
            errorSchema: i,
            formData: a,
            formContext: d,
            idPrefix: o,
            idSchema: R,
            idSeparator: s,
            onBlur: e.onBlur,
            onChange: e.onChange,
            onFocus: e.onFocus,
            options: E.anyOf.map(function (K) {
              return p.retrieveSchema(Fe(K) ? K : {}, a);
            }),
            baseType: E.type,
            registry: m,
            schema: E,
            uiSchema: n,
          }),
        E.oneOf &&
          !(n != null && n["ui:field"]) &&
          !p.isSelect(E) &&
          P.createElement(Ze, {
            name: u,
            disabled: q,
            readonly: z,
            hideError: H,
            errorSchema: i,
            formData: a,
            formContext: d,
            idPrefix: o,
            idSchema: R,
            idSeparator: s,
            onBlur: e.onBlur,
            onChange: e.onChange,
            onFocus: e.onFocus,
            options: E.oneOf.map(function (K) {
              return p.retrieveSchema(Fe(K) ? K : {}, a);
            }),
            baseType: E.type,
            registry: m,
            schema: E,
            uiSchema: n,
          }),
      ),
    );
  }
  var VU = (function (e) {
      jn(r, e);
      function r() {
        return e.apply(this, arguments) || this;
      }
      var t = r.prototype;
      return (
        (t.shouldComponentUpdate = function (a) {
          return !Nr(this.props, a);
        }),
          (t.render = function () {
            return P.createElement(BU, X({}, this.props));
          }),
          r
      );
    })(P.Component),
    KU = ["widget", "placeholder"];
  function zU(e) {
    var r = e.schema,
      t = e.name,
      n = e.uiSchema,
      a = e.idSchema,
      i = e.formData,
      o = e.required,
      s = e.disabled,
      u = s === void 0 ? !1 : s,
      l = e.readonly,
      c = l === void 0 ? !1 : l,
      f = e.autofocus,
      h = f === void 0 ? !1 : f,
      m = e.onChange,
      v = e.onBlur,
      y = e.onFocus,
      d = e.registry,
      p = e.rawErrors,
      $ = r.title,
      b = r.format,
      w = d.widgets,
      N = d.formContext,
      O = d.schemaUtils,
      E = O.isSelect(r) ? Ia(r) : void 0,
      D = E ? "select" : "text";
    b && U2(r, b, w) && (D = b);
    var R = me(n),
      k = R.widget,
      B = k === void 0 ? D : k,
      q = R.placeholder,
      z = q === void 0 ? "" : q,
      G = sr(R, KU),
      H = wr(r, B, w);
    return P.createElement(H, {
      options: X({}, G, { enumOptions: E }),
      schema: r,
      uiSchema: n,
      id: a.$id,
      label: $ === void 0 ? t : $,
      value: i,
      onChange: m,
      onBlur: v,
      onFocus: y,
      required: o,
      disabled: u,
      readonly: c,
      formContext: N,
      autofocus: h,
      registry: d,
      placeholder: z,
      rawErrors: p,
    });
  }
  function GU(e) {
    var r = e.formData,
      t = e.onChange;
    return (
      P.useEffect(
        function () {
          r === void 0 && t(null);
        },
        [r, t],
      ), null
    );
  }
  function WU() {
    return {
      AnyOfField: Hd,
      ArrayField: NU,
      BooleanField: FU,
      NumberField: UU,
      ObjectField: kU,
      OneOfField: Hd,
      SchemaField: VU,
      StringField: zU,
      NullField: GU,
    };
  }
  function HU(e) {
    var r = e.idSchema,
      t = e.description,
      n = e.registry,
      a = e.schema,
      i = e.uiSchema,
      o = me(i),
      s = o.label,
      u = s === void 0 ? !0 : s;
    if (!t || !u) return null;
    var l = ve("DescriptionFieldTemplate", n, o);
    return P.createElement(l, {
      id: gn(r),
      description: t,
      schema: a,
      uiSchema: i,
      registry: n,
    });
  }
  function YU(e) {
    var r = e.children,
      t = e.className,
      n = e.disabled,
      a = e.hasToolbar,
      i = e.hasMoveDown,
      o = e.hasMoveUp,
      s = e.hasRemove,
      u = e.index,
      l = e.onDropIndexClick,
      c = e.onReorderClick,
      f = e.readonly,
      h = e.registry,
      m = e.uiSchema,
      v = h.templates.ButtonTemplates,
      y = v.MoveDownButton,
      d = v.MoveUpButton,
      p = v.RemoveButton,
      $ = { flex: 1, paddingLeft: 6, paddingRight: 6, fontWeight: "bold" };
    return P.createElement(
      "div",
      { className: t },
      P.createElement("div", { className: a ? "col-xs-9" : "col-xs-12" }, r),
      a &&
        P.createElement(
          "div",
          { className: "col-xs-3 array-item-toolbox" },
          P.createElement(
            "div",
            {
              className: "btn-group",
              style: { display: "flex", justifyContent: "space-around" },
            },
            (o || i) &&
              P.createElement(d, {
                style: $,
                disabled: n || f || !o,
                onClick: c(u, u - 1),
                uiSchema: m,
                registry: h,
              }),
            (o || i) &&
              P.createElement(y, {
                style: $,
                disabled: n || f || !i,
                onClick: c(u, u + 1),
                uiSchema: m,
                registry: h,
              }),
            s &&
              P.createElement(p, {
                style: $,
                disabled: n || f,
                onClick: l(u),
                uiSchema: m,
                registry: h,
              }),
          ),
        ),
    );
  }
  var JU = ["key"];
  function XU(e) {
    var r = e.canAdd,
      t = e.className,
      n = e.disabled,
      a = e.idSchema,
      i = e.uiSchema,
      o = e.items,
      s = e.onAddClick,
      u = e.readonly,
      l = e.registry,
      c = e.required,
      f = e.schema,
      h = e.title,
      m = me(i),
      v = ve("ArrayFieldDescriptionTemplate", l, m),
      y = ve("ArrayFieldItemTemplate", l, m),
      d = ve("ArrayFieldTitleTemplate", l, m),
      p = l.templates.ButtonTemplates.AddButton;
    return P.createElement(
      "fieldset",
      { className: t, id: a.$id },
      P.createElement(d, {
        idSchema: a,
        title: m.title || h,
        required: c,
        schema: f,
        uiSchema: i,
        registry: l,
      }),
      P.createElement(v, {
        idSchema: a,
        description: m.description || f.description,
        schema: f,
        uiSchema: i,
        registry: l,
      }),
      P.createElement(
        "div",
        { className: "row array-item-list" },
        o &&
          o.map(function ($) {
            var b = $.key,
              w = sr($, JU);
            return P.createElement(y, X({ key: b }, w));
          }),
      ),
      r &&
        P.createElement(p, {
          className: "array-item-add",
          onClick: s,
          disabled: n || u,
          uiSchema: i,
          registry: l,
        }),
    );
  }
  function ZU(e) {
    var r = e.idSchema,
      t = e.title,
      n = e.schema,
      a = e.uiSchema,
      i = e.required,
      o = e.registry,
      s = me(a),
      u = s.label,
      l = u === void 0 ? !0 : u;
    if (!t || !l) return null;
    var c = ve("TitleFieldTemplate", o, s);
    return P.createElement(c, {
      id: Rf(r),
      title: t,
      required: i,
      schema: n,
      uiSchema: a,
      registry: o,
    });
  }
  var QU = [
    "id",
    "value",
    "readonly",
    "disabled",
    "autofocus",
    "onBlur",
    "onFocus",
    "onChange",
    "options",
    "schema",
    "uiSchema",
    "formContext",
    "registry",
    "rawErrors",
    "type",
  ];
  function ek(e) {
    var r = e.id,
      t = e.value,
      n = e.readonly,
      a = e.disabled,
      i = e.autofocus,
      o = e.onBlur,
      s = e.onFocus,
      u = e.onChange,
      l = e.options,
      c = e.schema,
      f = e.type,
      h = sr(e, QU);
    if (!r) {
      throw (
        (console.log("No id for", e),
          new Error("no id for props " + JSON.stringify(e)))
      );
    }
    var m = X({}, h, F2(c, f, l)),
      v;
    m.type === "number" || m.type === "integer"
      ? (v = t || t === 0 ? t : "")
      : (v = t ?? "");
    var y = P.useCallback(
        function ($) {
          var b = $.target.value;
          return u(b === "" ? l.emptyValue : b);
        },
        [u, l],
      ),
      d = P.useCallback(
        function ($) {
          var b = $.target.value;
          return o(r, b);
        },
        [o, r],
      ),
      p = P.useCallback(
        function ($) {
          var b = $.target.value;
          return s(r, b);
        },
        [s, r],
      );
    return P.createElement(
      P.Fragment,
      null,
      P.createElement(
        "input",
        X(
          {
            id: r,
            name: r,
            className: "form-control",
            readOnly: n,
            disabled: a,
            autoFocus: i,
            value: v,
          },
          m,
          {
            list: c.examples ? Ro(r) : void 0,
            onChange: y,
            onBlur: d,
            onFocus: p,
            "aria-describedby": Fr(r, !!c.examples),
          },
        ),
      ),
      Array.isArray(c.examples) &&
        P.createElement(
          "datalist",
          { key: "datalist_" + r, id: Ro(r) },
          []
            .concat(new Set(c.examples.concat(c.default ? [c.default] : [])))
            .map(function ($) {
              return P.createElement("option", { key: $, value: $ });
            }),
        ),
    );
  }
  function rk(e) {
    var r = e.uiSchema,
      t = j2(r),
      n = t.submitText,
      a = t.norender,
      i = t.props,
      o = i === void 0 ? {} : i;
    return a ? null : P.createElement(
      "div",
      null,
      P.createElement(
        "button",
        X({ type: "submit" }, o, {
          className: "btn btn-info " + o.className,
        }),
        n,
      ),
    );
  }
  var tk = ["iconType", "icon", "className", "uiSchema", "registry"];
  function ei(e) {
    var r = e.iconType,
      t = r === void 0 ? "default" : r,
      n = e.icon,
      a = e.className,
      i = sr(e, tk);
    return P.createElement(
      "button",
      X({ type: "button", className: "btn btn-" + t + " " + a }, i),
      P.createElement("i", { className: "glyphicon glyphicon-" + n }),
    );
  }
  function nk(e) {
    return P.createElement(
      ei,
      X({ title: "Move down", className: "array-item-move-down" }, e, {
        icon: "arrow-down",
      }),
    );
  }
  function ak(e) {
    return P.createElement(
      ei,
      X({ title: "Move up", className: "array-item-move-up" }, e, {
        icon: "arrow-up",
      }),
    );
  }
  function ik(e) {
    return P.createElement(
      ei,
      X({ title: "Remove", className: "array-item-remove" }, e, {
        iconType: "danger",
        icon: "remove",
      }),
    );
  }
  function ok(e) {
    var r = e.className,
      t = e.onClick,
      n = e.disabled,
      a = e.registry;
    return P.createElement(
      "div",
      { className: "row" },
      P.createElement(
        "p",
        { className: "col-xs-3 col-xs-offset-9 text-right " + r },
        P.createElement(ei, {
          iconType: "info",
          icon: "plus",
          className: "btn-add col-xs-12",
          title: "Add",
          onClick: t,
          disabled: n,
          registry: a,
        }),
      ),
    );
  }
  function sk() {
    return {
      SubmitButton: rk,
      AddButton: ok,
      MoveDownButton: nk,
      MoveUpButton: ak,
      RemoveButton: ik,
    };
  }
  function uk(e) {
    var r = e.id,
      t = e.description;
    return t
      ? typeof t == "string"
        ? P.createElement("p", { id: r, className: "field-description" }, t)
        : P.createElement("div", { id: r, className: "field-description" }, t)
      : null;
  }
  function lk(e) {
    var r = e.errors;
    return P.createElement(
      "div",
      { className: "panel panel-danger errors" },
      P.createElement(
        "div",
        { className: "panel-heading" },
        P.createElement("h3", { className: "panel-title" }, "Errors"),
      ),
      P.createElement(
        "ul",
        { className: "list-group" },
        r.map(function (t, n) {
          return P.createElement(
            "li",
            { key: n, className: "list-group-item text-danger" },
            t.stack,
          );
        }),
      ),
    );
  }
  var ck = "*";
  function Yd(e) {
    var r = e.label,
      t = e.required,
      n = e.id;
    return r
      ? P.createElement(
        "label",
        { className: "control-label", htmlFor: n },
        r,
        t && P.createElement("span", { className: "required" }, ck),
      )
      : null;
  }
  function fk(e) {
    var r = e.id,
      t = e.label,
      n = e.children,
      a = e.errors,
      i = e.help,
      o = e.description,
      s = e.hidden,
      u = e.required,
      l = e.displayLabel,
      c = e.registry,
      f = e.uiSchema,
      h = me(f),
      m = ve("WrapIfAdditionalTemplate", c, h);
    return s
      ? P.createElement("div", { className: "hidden" }, n)
      : P.createElement(
        m,
        X({}, e),
        l && P.createElement(Yd, { label: t, required: u, id: r }),
        l && o ? o : null,
        n,
        a,
        i,
      );
  }
  function dk(e) {
    var r = e.errors,
      t = r === void 0 ? [] : r,
      n = e.idSchema;
    if (t.length === 0) return null;
    var a = jf(n);
    return P.createElement(
      "div",
      null,
      P.createElement(
        "ul",
        { id: a, className: "error-detail bs-callout bs-callout-info" },
        t
          .filter(function (i) {
            return !!i;
          })
          .map(function (i, o) {
            return P.createElement(
              "li",
              { className: "text-danger", key: o },
              i,
            );
          }),
      ),
    );
  }
  function hk(e) {
    var r = e.idSchema,
      t = e.help;
    if (!t) return null;
    var n = Mf(r);
    return typeof t == "string"
      ? P.createElement("p", { id: n, className: "help-block" }, t)
      : P.createElement("div", { id: n, className: "help-block" }, t);
  }
  function mk(e) {
    var r = e.description,
      t = e.disabled,
      n = e.formData,
      a = e.idSchema,
      i = e.onAddClick,
      o = e.properties,
      s = e.readonly,
      u = e.registry,
      l = e.required,
      c = e.schema,
      f = e.title,
      h = e.uiSchema,
      m = me(h),
      v = ve("TitleFieldTemplate", u, m),
      y = ve("DescriptionFieldTemplate", u, m),
      d = u.templates.ButtonTemplates.AddButton;
    return P.createElement(
      "fieldset",
      { id: a.$id },
      (m.title || f) &&
        P.createElement(v, {
          id: Rf(a),
          title: m.title || f,
          required: l,
          schema: c,
          uiSchema: h,
          registry: u,
        }),
      (m.description || r) &&
        P.createElement(y, {
          id: gn(a),
          description: m.description || r,
          schema: c,
          uiSchema: h,
          registry: u,
        }),
      o.map(function (p) {
        return p.content;
      }),
      d2(c, h, n) &&
        P.createElement(d, {
          className: "object-property-expand",
          onClick: i(c),
          disabled: t || s,
          uiSchema: h,
          registry: u,
        }),
    );
  }
  var pk = "*";
  function vk(e) {
    var r = e.id,
      t = e.title,
      n = e.required;
    return P.createElement(
      "legend",
      { id: r },
      t,
      n && P.createElement("span", { className: "required" }, pk),
    );
  }
  function yk(e) {
    var r = e.schema,
      t = e.idSchema,
      n = e.reason;
    return P.createElement(
      "div",
      { className: "unsupported-field" },
      P.createElement(
        "p",
        null,
        "Unsupported field schema",
        t &&
          t.$id &&
          P.createElement(
            "span",
            null,
            " for",
            " field ",
            P.createElement("code", null, t.$id),
          ),
        n && P.createElement("em", null, ": ", n),
        ".",
      ),
      r && P.createElement("pre", null, JSON.stringify(r, null, 2)),
    );
  }
  function gk(e) {
    var r = e.id,
      t = e.classNames,
      n = e.style,
      a = e.disabled,
      i = e.label,
      o = e.onKeyChange,
      s = e.onDropPropertyClick,
      u = e.readonly,
      l = e.required,
      c = e.schema,
      f = e.children,
      h = e.uiSchema,
      m = e.registry,
      v = m.templates.ButtonTemplates.RemoveButton,
      y = i + " Key",
      d = mn in c;
    return d
      ? P.createElement(
        "div",
        { className: t, style: n },
        P.createElement(
          "div",
          { className: "row" },
          P.createElement(
            "div",
            { className: "col-xs-5 form-additional" },
            P.createElement(
              "div",
              { className: "form-group" },
              P.createElement(Yd, { label: y, required: l, id: r + "-key" }),
              P.createElement("input", {
                className: "form-control",
                type: "text",
                id: r + "-key",
                onBlur: function ($) {
                  return o($.target.value);
                },
                defaultValue: i,
              }),
            ),
          ),
          P.createElement(
            "div",
            { className: "form-additional form-group col-xs-5" },
            f,
          ),
          P.createElement(
            "div",
            { className: "col-xs-2" },
            P.createElement(v, {
              className: "array-item-remove btn-block",
              style: { border: "0" },
              disabled: a || u,
              onClick: s(i),
              uiSchema: h,
              registry: m,
            }),
          ),
        ),
      )
      : P.createElement("div", { className: t, style: n }, f);
  }
  function $k() {
    return {
      ArrayFieldDescriptionTemplate: HU,
      ArrayFieldItemTemplate: YU,
      ArrayFieldTemplate: XU,
      ArrayFieldTitleTemplate: ZU,
      ButtonTemplates: sk(),
      BaseInputTemplate: ek,
      DescriptionFieldTemplate: uk,
      ErrorListTemplate: lk,
      FieldTemplate: fk,
      FieldErrorTemplate: dk,
      FieldHelpTemplate: hk,
      ObjectFieldTemplate: mk,
      TitleFieldTemplate: vk,
      UnsupportedFieldTemplate: yk,
      WrapIfAdditionalTemplate: gk,
    };
  }
  function _k(e, r) {
    for (var t = [], n = e; n <= r; n++) t.push({ value: n, label: jr(n, 2) });
    return t;
  }
  function bk(e) {
    return Object.values(e).every(function (r) {
      return r !== -1;
    });
  }
  function Sk(e, r, t) {
    t === void 0 && (t = [1900, new Date().getFullYear() + 2]);
    var n = e.year,
      a = e.month,
      i = e.day,
      o = e.hour,
      s = e.minute,
      u = e.second,
      l = [
        { type: "year", range: t, value: n },
        { type: "month", range: [1, 12], value: a },
        { type: "day", range: [1, 31], value: i },
      ];
    return (
      r &&
      l.push(
        { type: "hour", range: [0, 23], value: o },
        { type: "minute", range: [0, 59], value: s },
        { type: "second", range: [0, 59], value: u },
      ), l
    );
  }
  function Ek(e) {
    var r = e.type,
      t = e.range,
      n = e.value,
      a = e.select,
      i = e.rootId,
      o = e.disabled,
      s = e.readonly,
      u = e.autofocus,
      l = e.registry,
      c = e.onBlur,
      f = e.onFocus,
      h = i + "_" + r,
      m = l.widgets.SelectWidget;
    return P.createElement(m, {
      schema: { type: "integer" },
      id: h,
      className: "form-control",
      options: { enumOptions: _k(t[0], t[1]) },
      placeholder: r,
      value: n,
      disabled: o,
      readonly: s,
      autofocus: u,
      onChange: function (y) {
        return a(r, y);
      },
      onBlur: c,
      onFocus: f,
      registry: l,
      label: "",
      "aria-describedby": Fr(i),
    });
  }
  function wk(e) {
    var r = e.time,
      t = r === void 0 ? !1 : r,
      n = e.disabled,
      a = n === void 0 ? !1 : n,
      i = e.readonly,
      o = i === void 0 ? !1 : i,
      s = e.autofocus,
      u = s === void 0 ? !1 : s,
      l = e.options,
      c = e.id,
      f = e.registry,
      h = e.onBlur,
      m = e.onFocus,
      v = e.onChange,
      y = e.value,
      d = P.useReducer(function (O, E) {
        return X({}, O, E);
      }, Na(y, t)),
      p = d[0],
      $ = d[1];
    P.useEffect(
      function () {
        y && y !== kf(p, t) && $(Na(y, t));
      },
      [y, p, t],
    ),
      P.useEffect(
        function () {
          bk(p) && v(kf(p, t));
        },
        [p, t, v],
      );
    var b = P.useCallback(function (O, E) {
        var D;
        $(((D = {}), (D[O] = E), D));
      }, []),
      w = P.useCallback(
        function (O) {
          if ((O.preventDefault(), !(a || o))) {
            var E = Na(new Date().toJSON(), t);
            $(E);
          }
        },
        [a, o, t],
      ),
      N = P.useCallback(
        function (O) {
          O.preventDefault(), !(a || o) && ($(Na("", t)), v(void 0));
        },
        [a, o, t, v],
      );
    return P.createElement(
      "ul",
      { className: "list-inline" },
      Sk(p, t, l.yearsRange).map(function (O, E) {
        return P.createElement(
          "li",
          { key: E },
          P.createElement(
            Ek,
            X({ rootId: c, select: b }, O, {
              disabled: a,
              readonly: o,
              registry: f,
              onBlur: h,
              onFocus: m,
              autofocus: u && E === 0,
            }),
          ),
        );
      }),
      (l.hideNowButton !== "undefined" ? !l.hideNowButton : !0) &&
        P.createElement(
          "li",
          null,
          P.createElement(
            "a",
            { href: "#", className: "btn btn-info btn-now", onClick: w },
            "Now",
          ),
        ),
      (l.hideClearButton !== "undefined" ? !l.hideClearButton : !0) &&
        P.createElement(
          "li",
          null,
          P.createElement(
            "a",
            { href: "#", className: "btn btn-warning btn-clear", onClick: N },
            "Clear",
          ),
        ),
    );
  }
  var Ok = ["time"];
  function Ak(e) {
    var r = e.time,
      t = r === void 0 ? !0 : r,
      n = sr(e, Ok),
      a = n.registry.widgets.AltDateWidget;
    return P.createElement(a, X({ time: t }, n));
  }
  function Tk(e) {
    var r = e.schema,
      t = e.uiSchema,
      n = e.options,
      a = e.id,
      i = e.value,
      o = e.disabled,
      s = e.readonly,
      u = e.label,
      l = e.autofocus,
      c = l === void 0 ? !1 : l,
      f = e.onBlur,
      h = e.onFocus,
      m = e.onChange,
      v = e.registry,
      y = ve("DescriptionFieldTemplate", v, n),
      d = Da(r),
      p = P.useCallback(
        function (w) {
          return m(w.target.checked);
        },
        [m],
      ),
      $ = P.useCallback(
        function (w) {
          return f(a, w.target.checked);
        },
        [f, a],
      ),
      b = P.useCallback(
        function (w) {
          return h(a, w.target.checked);
        },
        [h, a],
      );
    return P.createElement(
      "div",
      { className: "checkbox " + (o || s ? "disabled" : "") },
      r.description &&
        P.createElement(y, {
          id: gn(a),
          description: r.description,
          schema: r,
          uiSchema: t,
          registry: v,
        }),
      P.createElement(
        "label",
        null,
        P.createElement("input", {
          type: "checkbox",
          id: a,
          name: a,
          checked: typeof i > "u" ? !1 : i,
          required: d,
          disabled: o || s,
          autoFocus: c,
          onChange: p,
          onBlur: $,
          onFocus: b,
          "aria-describedby": Fr(a),
        }),
        P.createElement("span", null, u),
      ),
    );
  }
  function Pk(e) {
    var r = e.id,
      t = e.disabled,
      n = e.options,
      a = n.inline,
      i = a === void 0 ? !1 : a,
      o = n.enumOptions,
      s = n.enumDisabled,
      u = e.value,
      l = e.autofocus,
      c = l === void 0 ? !1 : l,
      f = e.readonly,
      h = e.onChange,
      m = Array.isArray(u) ? u : [u];
    return P.createElement(
      "div",
      { className: "checkboxes", id: r },
      Array.isArray(o) &&
        o.map(function (v, y) {
          var d = m.includes(v.value),
            p = Array.isArray(s) && s.indexOf(v.value) != -1,
            $ = t || p || f ? "disabled" : "",
            b = function (O) {
              O.target.checked ? h(I2(v.value, m, o)) : h(C2(v.value, m));
            },
            w = P.createElement(
              "span",
              null,
              P.createElement("input", {
                type: "checkbox",
                id: Uf(r, v),
                name: r,
                checked: d,
                disabled: t || p || f,
                autoFocus: c && y === 0,
                onChange: b,
                "aria-describedby": Fr(r),
              }),
              P.createElement("span", null, v.label),
            );
          return i
            ? P.createElement(
              "label",
              { key: v.value, className: "checkbox-inline " + $ },
              w,
            )
            : P.createElement(
              "div",
              { key: v.value, className: "checkbox " + $ },
              P.createElement("label", null, w),
            );
        }),
    );
  }
  function Ck(e) {
    var r = e.disabled,
      t = e.readonly,
      n = e.options,
      a = e.registry,
      i = ve("BaseInputTemplate", a, n);
    return P.createElement(i, X({ type: "color" }, e, { disabled: r || t }));
  }
  function Ik(e) {
    var r = e.onChange,
      t = e.options,
      n = e.registry,
      a = ve("BaseInputTemplate", n, t),
      i = P.useCallback(
        function (o) {
          return r(o || void 0);
        },
        [r],
      );
    return P.createElement(a, X({ type: "date" }, e, { onChange: i }));
  }
  function Nk(e) {
    var r = e.onChange,
      t = e.value,
      n = e.options,
      a = e.registry,
      i = ve("BaseInputTemplate", a, n);
    return P.createElement(
      i,
      X({ type: "datetime-local" }, e, {
        value: B2(t),
        onChange: function (s) {
          return r(k2(s));
        },
      }),
    );
  }
  function Dk(e) {
    var r = e.options,
      t = e.registry,
      n = ve("BaseInputTemplate", t, r);
    return P.createElement(n, X({ type: "email" }, e));
  }
  function Fk(e, r) {
    return e === null
      ? null
      : e.replace(";base64", ";name=" + encodeURIComponent(r) + ";base64");
  }
  function jk(e) {
    var r = e.name,
      t = e.size,
      n = e.type;
    return new Promise(function (a, i) {
      var o = new window.FileReader();
      (o.onerror = i),
        (o.onload = function (s) {
          var u;
          typeof ((u = s.target) === null || u === void 0
              ? void 0
              : u.result) == "string"
            ? a({ dataURL: Fk(s.target.result, r), name: r, size: t, type: n })
            : a({ dataURL: null, name: r, size: t, type: n });
        }),
        o.readAsDataURL(e);
    });
  }
  function Mk(e) {
    return Promise.all(Array.from(e).map(jk));
  }
  function Rk(e) {
    var r = e.filesInfo;
    return r.length === 0 ? null : P.createElement(
      "ul",
      { className: "file-info" },
      r.map(function (t, n) {
        var a = t.name,
          i = t.size,
          o = t.type;
        return P.createElement(
          "li",
          { key: n },
          P.createElement("strong", null, a),
          " (",
          o,
          ", ",
          i,
          " bytes)",
        );
      }),
    );
  }
  function Jd(e) {
    return e
      .filter(function (r) {
        return typeof r < "u";
      })
      .map(function (r) {
        var t = P2(r),
          n = t.blob,
          a = t.name;
        return { name: a, size: n.size, type: n.type };
      });
  }
  function Uk(e) {
    var r = e.multiple,
      t = e.id,
      n = e.readonly,
      a = e.disabled,
      i = e.onChange,
      o = e.value,
      s = e.autofocus,
      u = s === void 0 ? !1 : s,
      l = e.options,
      c = P.useMemo(
        function () {
          return Array.isArray(o) ? Jd(o) : Jd([o]);
        },
        [o],
      ),
      f = P.useState(c),
      h = f[0],
      m = f[1],
      v = P.useCallback(
        function (y) {
          y.target.files &&
            Mk(y.target.files).then(function (d) {
              m(d);
              var p = d.map(function ($) {
                return $.dataURL;
              });
              i(r ? p : p[0]);
            });
        },
        [r, i],
      );
    return P.createElement(
      "div",
      null,
      P.createElement(
        "p",
        null,
        P.createElement("input", {
          id: t,
          name: t,
          type: "file",
          disabled: n || a,
          onChange: v,
          defaultValue: "",
          autoFocus: u,
          multiple: r,
          accept: l.accept ? String(l.accept) : void 0,
          "aria-describedby": Fr(t),
        }),
      ),
      P.createElement(Rk, { filesInfo: h }),
    );
  }
  function kk(e) {
    var r = e.id,
      t = e.value;
    return P.createElement("input", {
      type: "hidden",
      id: r,
      name: r,
      value: typeof t > "u" ? "" : t,
    });
  }
  function Lk(e) {
    var r = e.options,
      t = e.registry,
      n = ve("BaseInputTemplate", t, r);
    return P.createElement(n, X({ type: "password" }, e));
  }
  function xk(e) {
    var r = e.options,
      t = e.value,
      n = e.required,
      a = e.disabled,
      i = e.readonly,
      o = e.autofocus,
      s = o === void 0 ? !1 : o,
      u = e.onBlur,
      l = e.onFocus,
      c = e.onChange,
      f = e.id,
      h = Math.random().toString(),
      m = r.enumOptions,
      v = r.enumDisabled,
      y = r.inline,
      d = P.useCallback(
        function ($) {
          return u(f, $.target.value);
        },
        [u, f],
      ),
      p = P.useCallback(
        function ($) {
          return l(f, $.target.value);
        },
        [l, f],
      );
    return P.createElement(
      "div",
      { className: "field-radio-group", id: f },
      Array.isArray(m) &&
        m.map(function ($, b) {
          var w = $.value === t,
            N = Array.isArray(v) && v.indexOf($.value) != -1,
            O = a || N || i ? "disabled" : "",
            E = function () {
              return c($.value);
            },
            D = P.createElement(
              "span",
              null,
              P.createElement("input", {
                type: "radio",
                id: Uf(f, $),
                checked: w,
                name: h,
                required: n,
                value: $.value,
                disabled: a || N || i,
                autoFocus: s && b === 0,
                onChange: E,
                onBlur: d,
                onFocus: p,
                "aria-describedby": Fr(f),
              }),
              P.createElement("span", null, $.label),
            );
          return y
            ? P.createElement(
              "label",
              { key: $.value, className: "radio-inline " + O },
              D,
            )
            : P.createElement(
              "div",
              { key: $.value, className: "radio " + O },
              P.createElement("label", null, D),
            );
        }),
    );
  }
  function qk(e) {
    var r = e.value,
      t = e.registry.templates.BaseInputTemplate;
    return P.createElement(
      "div",
      { className: "field-range-wrapper" },
      P.createElement(t, X({ type: "range" }, e)),
      P.createElement("span", { className: "range-view" }, r),
    );
  }
  function Rs(e, r) {
    return r
      ? Array.from(e.target.options)
        .slice()
        .filter(function (t) {
          return t.selected;
        })
        .map(function (t) {
          return t.value;
        })
      : e.target.value;
  }
  function Bk(e) {
    var r = e.schema,
      t = e.id,
      n = e.options,
      a = e.value,
      i = e.required,
      o = e.disabled,
      s = e.readonly,
      u = e.multiple,
      l = u === void 0 ? !1 : u,
      c = e.autofocus,
      f = c === void 0 ? !1 : c,
      h = e.onChange,
      m = e.onBlur,
      v = e.onFocus,
      y = e.placeholder,
      d = n.enumOptions,
      p = n.enumDisabled,
      $ = l ? [] : "",
      b = P.useCallback(
        function (O) {
          var E = Rs(O, l);
          return v(t, ko(r, E, n));
        },
        [v, t, r, l, n],
      ),
      w = P.useCallback(
        function (O) {
          var E = Rs(O, l);
          return m(t, ko(r, E, n));
        },
        [m, t, r, l, n],
      ),
      N = P.useCallback(
        function (O) {
          var E = Rs(O, l);
          return h(ko(r, E, n));
        },
        [h, r, l, n],
      );
    return P.createElement(
      "select",
      {
        id: t,
        name: t,
        multiple: l,
        className: "form-control",
        value: typeof a > "u" ? $ : a,
        required: i,
        disabled: o || s,
        autoFocus: f,
        onBlur: w,
        onFocus: b,
        onChange: N,
        "aria-describedby": Fr(t),
      },
      !l && r.default === void 0 && P.createElement("option", { value: "" }, y),
      Array.isArray(d) &&
        d.map(function (O, E) {
          var D = O.value,
            R = O.label,
            k = p && p.indexOf(D) != -1;
          return P.createElement(
            "option",
            { key: E, value: D, disabled: k },
            R,
          );
        }),
    );
  }
  function Xd(e) {
    var r = e.id,
      t = e.options,
      n = t === void 0 ? {} : t,
      a = e.placeholder,
      i = e.value,
      o = e.required,
      s = e.disabled,
      u = e.readonly,
      l = e.autofocus,
      c = l === void 0 ? !1 : l,
      f = e.onChange,
      h = e.onBlur,
      m = e.onFocus,
      v = P.useCallback(
        function (p) {
          var $ = p.target.value;
          return f($ === "" ? n.emptyValue : $);
        },
        [f, n.emptyValue],
      ),
      y = P.useCallback(
        function (p) {
          var $ = p.target.value;
          return h(r, $);
        },
        [h, r],
      ),
      d = P.useCallback(
        function (p) {
          var $ = p.target.value;
          return m(r, $);
        },
        [r, m],
      );
    return P.createElement("textarea", {
      id: r,
      name: r,
      className: "form-control",
      value: i || "",
      placeholder: a,
      required: o,
      disabled: s,
      readOnly: u,
      autoFocus: c,
      rows: n.rows,
      onBlur: y,
      onFocus: d,
      onChange: v,
      "aria-describedby": Fr(r),
    });
  }
  Xd.defaultProps = { autofocus: !1, options: {} };
  function Vk(e) {
    var r = e.options,
      t = e.registry,
      n = ve("BaseInputTemplate", t, r);
    return P.createElement(n, X({}, e));
  }
  function Kk(e) {
    var r = e.options,
      t = e.registry,
      n = ve("BaseInputTemplate", t, r);
    return P.createElement(n, X({ type: "url" }, e));
  }
  function zk(e) {
    var r = e.options,
      t = e.registry,
      n = ve("BaseInputTemplate", t, r);
    return P.createElement(n, X({ type: "number" }, e));
  }
  function Gk() {
    return {
      PasswordWidget: Lk,
      RadioWidget: xk,
      UpDownWidget: zk,
      RangeWidget: qk,
      SelectWidget: Bk,
      TextWidget: Vk,
      DateWidget: Ik,
      DateTimeWidget: Nk,
      AltDateWidget: wk,
      AltDateTimeWidget: Ak,
      EmailWidget: Dk,
      URLWidget: Kk,
      TextareaWidget: Xd,
      HiddenWidget: kk,
      ColorWidget: Ck,
      FileWidget: Uk,
      CheckboxWidget: Tk,
      CheckboxesWidget: Pk,
    };
  }
  function Wk() {
    return {
      fields: WU(),
      templates: $k(),
      widgets: Gk(),
      rootSchema: {},
      formContext: {},
    };
  }
  var Hk = (function (e) {
    jn(r, e);
    function r(n) {
      var a;
      if (
        ((a = e.call(this, n) || this),
          (a.formElement = void 0),
          (a.getUsedFormData = function (i, o) {
            if (o.length === 0 && typeof i != "object") return i;
            var s = gU(i, o);
            return Array.isArray(i)
              ? Object.keys(s).map(function (u) {
                return s[u];
              })
              : s;
          }),
          (a.getFieldNames = function (i, o) {
            var s = function u(l, c, f) {
              return (
                c === void 0 && (c = []),
                  f === void 0 && (f = [[]]),
                  Object.keys(l).forEach(function (h) {
                    if (typeof l[h] == "object") {
                      var m = f.map(function (v) {
                        return [].concat(v, [h]);
                      });
                      l[h][Po] && l[h][wa] !== ""
                        ? c.push(l[h][wa])
                        : u(l[h], c, m);
                    } else {
                      h === wa &&
                        l[h] !== "" &&
                        f.forEach(function (v) {
                          var y = fe(o, v);
                          (typeof y != "object" || tn(y)) && c.push(v);
                        });
                    }
                  }),
                  c
              );
            };
            return s(i);
          }),
          (a.onChange = function (i, o, s) {
            var u = a.props,
              l = u.extraErrors,
              c = u.omitExtraData,
              f = u.liveOmit,
              h = u.noValidate,
              m = u.liveValidate,
              v = u.onChange,
              y = a.state,
              d = y.schemaUtils,
              p = y.schema;
            if (Ne(i) || Array.isArray(i)) {
              var $ = a.getStateFromProps(a.props, i);
              i = $.formData;
            }
            var b = !h && m,
              w = { formData: i, schema: p },
              N = i;
            if (c === !0 && f === !0) {
              var O = d.retrieveSchema(p, i),
                E = d.toPathSchema(O, "", i),
                D = a.getFieldNames(E, i);
              (N = a.getUsedFormData(i, D)), (w = { formData: N });
            }
            if (b) {
              var R = a.validate(N),
                k = R.errors,
                B = R.errorSchema,
                q = k,
                z = B;
              if (l) {
                var G = d.mergeValidationData(R, l);
                (B = G.errorSchema), (k = G.errors);
              }
              w = {
                formData: N,
                errors: k,
                errorSchema: B,
                schemaValidationErrors: q,
                schemaValidationErrorSchema: z,
              };
            } else if (!h && o) {
              var H = l ? vn(o, l, "preventDuplicates") : o;
              w = {
                formData: N,
                errorSchema: H,
                errors: d.getValidator().toErrorList(H),
              };
            }
            a.setState(w, function () {
              return v && v(X({}, a.state, w), s);
            });
          }),
          (a.onBlur = function (i, o) {
            var s = a.props.onBlur;
            s && s(i, o);
          }),
          (a.onFocus = function (i, o) {
            var s = a.props.onFocus;
            s && s(i, o);
          }),
          (a.onSubmit = function (i) {
            if ((i.preventDefault(), i.target === i.currentTarget)) {
              i.persist();
              var o = a.props,
                s = o.omitExtraData,
                u = o.extraErrors,
                l = o.noValidate,
                c = o.onSubmit,
                f = a.state.formData,
                h = a.state,
                m = h.schema,
                v = h.schemaUtils;
              if (s === !0) {
                var y = v.retrieveSchema(m, f),
                  d = v.toPathSchema(y, "", f),
                  p = a.getFieldNames(d, f);
                f = a.getUsedFormData(f, p);
              }
              if (l || a.validateForm()) {
                var $ = u || {},
                  b = u ? v.getValidator().toErrorList(u) : [];
                a.setState(
                  {
                    formData: f,
                    errors: b,
                    errorSchema: $,
                    schemaValidationErrors: [],
                    schemaValidationErrorSchema: {},
                  },
                  function () {
                    c &&
                      c(
                        X({}, a.state, { formData: f, status: "submitted" }),
                        i,
                      );
                  },
                );
              }
            }
          }),
          !n.validator)
      ) {
        throw new Error(
          "A validator is required for Form functionality to work",
        );
      }
      return (
        (a.state = a.getStateFromProps(n, n.formData)),
          a.props.onChange &&
          !Nr(a.state.formData, a.props.formData) &&
          a.props.onChange(a.state),
          (a.formElement = P.createRef()),
          a
      );
    }
    var t = r.prototype;
    return (
      (t.UNSAFE_componentWillReceiveProps = function (a) {
        var i = this.getStateFromProps(a, a.formData);
        !Nr(i.formData, a.formData) &&
        !Nr(i.formData, this.state.formData) &&
        a.onChange &&
        a.onChange(i), this.setState(i);
      }),
        (t.getStateFromProps = function (a, i) {
          var o = this.state || {},
            s = "schema" in a ? a.schema : this.props.schema,
            u = ("uiSchema" in a ? a.uiSchema : this.props.uiSchema) || {},
            l = typeof i < "u",
            c = "liveValidate" in a ? a.liveValidate : this.props.liveValidate,
            f = l && !a.noValidate && c,
            h = s,
            m = o.schemaUtils;
          (!m || m.doesSchemaUtilsDiffer(a.validator, h)) &&
            (m = T2(a.validator, h));
          var v = m.getDefaultFormState(s, i),
            y = m.retrieveSchema(s, v),
            d = function () {
              return a.noValidate
                ? { errors: [], errorSchema: {} }
                : a.liveValidate
                ? { errors: o.errors || [], errorSchema: o.errorSchema || {} }
                : {
                  errors: o.schemaValidationErrors || [],
                  errorSchema: o.schemaValidationErrorSchema || {},
                };
            },
            p,
            $,
            b = o.schemaValidationErrors,
            w = o.schemaValidationErrorSchema;
          if (f) {
            var N = this.validate(v, s, m);
            (p = N.errors), ($ = N.errorSchema), (b = p), (w = $);
          } else {
            var O = d();
            (p = O.errors), ($ = O.errorSchema);
          }
          if (a.extraErrors) {
            var E = m.mergeValidationData(
              { errorSchema: $, errors: p },
              a.extraErrors,
            );
            ($ = E.errorSchema), (p = E.errors);
          }
          var D = m.toIdSchema(
              y,
              u["ui:rootFieldId"],
              v,
              a.idPrefix,
              a.idSeparator,
            ),
            R = {
              schemaUtils: m,
              schema: s,
              uiSchema: u,
              idSchema: D,
              formData: v,
              edit: l,
              errors: p,
              errorSchema: $,
              schemaValidationErrors: b,
              schemaValidationErrorSchema: w,
            };
          return R;
        }),
        (t.shouldComponentUpdate = function (a, i) {
          return q2(this, a, i);
        }),
        (t.validate = function (a, i, o) {
          i === void 0 && (i = this.props.schema);
          var s = o || this.state.schemaUtils,
            u = this.props,
            l = u.customValidate,
            c = u.transformErrors,
            f = u.uiSchema,
            h = s.retrieveSchema(i, a);
          return s.getValidator().validateFormData(a, h, l, c, f);
        }),
        (t.renderErrors = function (a) {
          var i = this.state,
            o = i.errors,
            s = i.errorSchema,
            u = i.schema,
            l = i.uiSchema,
            c = this.props.formContext,
            f = me(l),
            h = ve("ErrorListTemplate", a, f);
          return o && o.length
            ? P.createElement(h, {
              errors: o,
              errorSchema: s || {},
              schema: u,
              uiSchema: l,
              formContext: c,
            })
            : null;
        }),
        (t.getRegistry = function () {
          var a,
            i = this.state.schemaUtils,
            o = Wk(),
            s = o.fields,
            u = o.templates,
            l = o.widgets,
            c = o.formContext;
          return {
            fields: X({}, s, this.props.fields),
            templates: X({}, u, this.props.templates, {
              ButtonTemplates: X(
                {},
                u.ButtonTemplates,
                (a = this.props.templates) === null || a === void 0
                  ? void 0
                  : a.ButtonTemplates,
              ),
            }),
            widgets: X({}, l, this.props.widgets),
            rootSchema: this.props.schema,
            formContext: this.props.formContext || c,
            schemaUtils: i,
          };
        }),
        (t.submit = function () {
          this.formElement.current &&
            (this.formElement.current.dispatchEvent(
              new CustomEvent("submit", { cancelable: !0 }),
            ),
              this.formElement.current.requestSubmit());
        }),
        (t.validateForm = function () {
          var a = this.props,
            i = a.extraErrors,
            o = a.onError,
            s = this.state.formData,
            u = this.state.schemaUtils,
            l = this.validate(s),
            c = l.errors,
            f = l.errorSchema,
            h = c,
            m = f;
          if (c.length > 0) {
            if (i) {
              var v = u.mergeValidationData(l, i);
              (f = v.errorSchema), (c = v.errors);
            }
            return (
              this.setState(
                {
                  errors: c,
                  errorSchema: f,
                  schemaValidationErrors: h,
                  schemaValidationErrorSchema: m,
                },
                function () {
                  o ? o(c) : console.error("Form validation failed", c);
                },
              ), !1
            );
          }
          return !0;
        }),
        (t.render = function () {
          var a = this.props,
            i = a.children,
            o = a.id,
            s = a.idPrefix,
            u = a.idSeparator,
            l = a.className,
            c = l === void 0 ? "" : l,
            f = a.tagName,
            h = a.name,
            m = a.method,
            v = a.target,
            y = a.action,
            d = a.autoComplete,
            p = a.enctype,
            $ = a.acceptcharset,
            b = a.noHtml5Validate,
            w = b === void 0 ? !1 : b,
            N = a.disabled,
            O = N === void 0 ? !1 : N,
            E = a.readonly,
            D = E === void 0 ? !1 : E,
            R = a.formContext,
            k = a.showErrorList,
            B = k === void 0 ? "top" : k,
            q = a._internalFormWrapper,
            z = this.state,
            G = z.schema,
            H = z.uiSchema,
            pe = z.formData,
            we = z.errorSchema,
            le = z.idSchema,
            ne = this.getRegistry(),
            x = ne.fields.SchemaField,
            I = ne.templates.ButtonTemplates.SubmitButton,
            U = q ? f : void 0,
            C = q || f || "form";
          return P.createElement(
            C,
            {
              className: c || "rjsf",
              id: o,
              name: h,
              method: m,
              target: v,
              action: y,
              autoComplete: d,
              encType: p,
              acceptCharset: $,
              noValidate: w,
              onSubmit: this.onSubmit,
              as: U,
              ref: this.formElement,
            },
            B === "top" && this.renderErrors(ne),
            P.createElement(x, {
              name: "",
              schema: G,
              uiSchema: H,
              errorSchema: we,
              idSchema: le,
              idPrefix: s,
              idSeparator: u,
              formContext: R,
              formData: pe,
              onChange: this.onChange,
              onBlur: this.onBlur,
              onFocus: this.onFocus,
              registry: ne,
              disabled: O,
              readonly: D,
            }),
            i || P.createElement(I, { uiSchema: H, registry: ne }),
            B === "bottom" && this.renderErrors(ne),
          );
        }),
        r
    );
  })(P.Component);
  return { Form: Hk, validator: dU };
});
