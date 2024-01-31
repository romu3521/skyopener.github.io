var R2 = Object.defineProperty;
var M2 = (t, e, n) => e in t ? R2(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Z = (t, e, n) => (M2(t, typeof e != "symbol" ? e + "" : e, n), n);
function Sv(t, e) {
  for (var n = 0; n < e.length; n++) {
    const r = e[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in t)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o && Object.defineProperty(t, i, o.get ? o : {
            enumerable: !0,
            get: () => r[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var Ur = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Tp(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var kv = { exports: {} }, Zc = {}, Ev = { exports: {} }, we = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fs = Symbol.for("react.element"), O2 = Symbol.for("react.portal"), D2 = Symbol.for("react.fragment"), A2 = Symbol.for("react.strict_mode"), L2 = Symbol.for("react.profiler"), N2 = Symbol.for("react.provider"), I2 = Symbol.for("react.context"), z2 = Symbol.for("react.forward_ref"), j2 = Symbol.for("react.suspense"), $2 = Symbol.for("react.memo"), F2 = Symbol.for("react.lazy"), Sm = Symbol.iterator;
function U2(t) {
  return t === null || typeof t != "object" ? null : (t = Sm && t[Sm] || t["@@iterator"], typeof t == "function" ? t : null);
}
var Cv = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Tv = Object.assign, bv = {};
function Kl(t, e, n) {
  this.props = t, this.context = e, this.refs = bv, this.updater = n || Cv;
}
Kl.prototype.isReactComponent = {};
Kl.prototype.setState = function(t, e) {
  if (typeof t != "object" && typeof t != "function" && t != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, t, e, "setState");
};
Kl.prototype.forceUpdate = function(t) {
  this.updater.enqueueForceUpdate(this, t, "forceUpdate");
};
function Pv() {
}
Pv.prototype = Kl.prototype;
function bp(t, e, n) {
  this.props = t, this.context = e, this.refs = bv, this.updater = n || Cv;
}
var Pp = bp.prototype = new Pv();
Pp.constructor = bp;
Tv(Pp, Kl.prototype);
Pp.isPureReactComponent = !0;
var km = Array.isArray, Rv = Object.prototype.hasOwnProperty, Rp = { current: null }, Mv = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ov(t, e, n) {
  var r, i = {}, o = null, l = null;
  if (e != null)
    for (r in e.ref !== void 0 && (l = e.ref), e.key !== void 0 && (o = "" + e.key), e)
      Rv.call(e, r) && !Mv.hasOwnProperty(r) && (i[r] = e[r]);
  var a = arguments.length - 2;
  if (a === 1)
    i.children = n;
  else if (1 < a) {
    for (var s = Array(a), u = 0; u < a; u++)
      s[u] = arguments[u + 2];
    i.children = s;
  }
  if (t && t.defaultProps)
    for (r in a = t.defaultProps, a)
      i[r] === void 0 && (i[r] = a[r]);
  return { $$typeof: Fs, type: t, key: o, ref: l, props: i, _owner: Rp.current };
}
function B2(t, e) {
  return { $$typeof: Fs, type: t.type, key: e, ref: t.ref, props: t.props, _owner: t._owner };
}
function Mp(t) {
  return typeof t == "object" && t !== null && t.$$typeof === Fs;
}
function V2(t) {
  var e = { "=": "=0", ":": "=2" };
  return "$" + t.replace(/[=:]/g, function(n) {
    return e[n];
  });
}
var Em = /\/+/g;
function Ff(t, e) {
  return typeof t == "object" && t !== null && t.key != null ? V2("" + t.key) : e.toString(36);
}
function zu(t, e, n, r, i) {
  var o = typeof t;
  (o === "undefined" || o === "boolean") && (t = null);
  var l = !1;
  if (t === null)
    l = !0;
  else
    switch (o) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (t.$$typeof) {
          case Fs:
          case O2:
            l = !0;
        }
    }
  if (l)
    return l = t, i = i(l), t = r === "" ? "." + Ff(l, 0) : r, km(i) ? (n = "", t != null && (n = t.replace(Em, "$&/") + "/"), zu(i, e, n, "", function(u) {
      return u;
    })) : i != null && (Mp(i) && (i = B2(i, n + (!i.key || l && l.key === i.key ? "" : ("" + i.key).replace(Em, "$&/") + "/") + t)), e.push(i)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", km(t))
    for (var a = 0; a < t.length; a++) {
      o = t[a];
      var s = r + Ff(o, a);
      l += zu(o, e, n, s, i);
    }
  else if (s = U2(t), typeof s == "function")
    for (t = s.call(t), a = 0; !(o = t.next()).done; )
      o = o.value, s = r + Ff(o, a++), l += zu(o, e, n, s, i);
  else if (o === "object")
    throw e = String(t), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function Js(t, e, n) {
  if (t == null)
    return t;
  var r = [], i = 0;
  return zu(t, r, "", "", function(o) {
    return e.call(n, o, i++);
  }), r;
}
function W2(t) {
  if (t._status === -1) {
    var e = t._result;
    e = e(), e.then(function(n) {
      (t._status === 0 || t._status === -1) && (t._status = 1, t._result = n);
    }, function(n) {
      (t._status === 0 || t._status === -1) && (t._status = 2, t._result = n);
    }), t._status === -1 && (t._status = 0, t._result = e);
  }
  if (t._status === 1)
    return t._result.default;
  throw t._result;
}
var sn = { current: null }, ju = { transition: null }, H2 = { ReactCurrentDispatcher: sn, ReactCurrentBatchConfig: ju, ReactCurrentOwner: Rp };
we.Children = { map: Js, forEach: function(t, e, n) {
  Js(t, function() {
    e.apply(this, arguments);
  }, n);
}, count: function(t) {
  var e = 0;
  return Js(t, function() {
    e++;
  }), e;
}, toArray: function(t) {
  return Js(t, function(e) {
    return e;
  }) || [];
}, only: function(t) {
  if (!Mp(t))
    throw Error("React.Children.only expected to receive a single React element child.");
  return t;
} };
we.Component = Kl;
we.Fragment = D2;
we.Profiler = L2;
we.PureComponent = bp;
we.StrictMode = A2;
we.Suspense = j2;
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = H2;
we.cloneElement = function(t, e, n) {
  if (t == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
  var r = Tv({}, t.props), i = t.key, o = t.ref, l = t._owner;
  if (e != null) {
    if (e.ref !== void 0 && (o = e.ref, l = Rp.current), e.key !== void 0 && (i = "" + e.key), t.type && t.type.defaultProps)
      var a = t.type.defaultProps;
    for (s in e)
      Rv.call(e, s) && !Mv.hasOwnProperty(s) && (r[s] = e[s] === void 0 && a !== void 0 ? a[s] : e[s]);
  }
  var s = arguments.length - 2;
  if (s === 1)
    r.children = n;
  else if (1 < s) {
    a = Array(s);
    for (var u = 0; u < s; u++)
      a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Fs, type: t.type, key: i, ref: o, props: r, _owner: l };
};
we.createContext = function(t) {
  return t = { $$typeof: I2, _currentValue: t, _currentValue2: t, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, t.Provider = { $$typeof: N2, _context: t }, t.Consumer = t;
};
we.createElement = Ov;
we.createFactory = function(t) {
  var e = Ov.bind(null, t);
  return e.type = t, e;
};
we.createRef = function() {
  return { current: null };
};
we.forwardRef = function(t) {
  return { $$typeof: z2, render: t };
};
we.isValidElement = Mp;
we.lazy = function(t) {
  return { $$typeof: F2, _payload: { _status: -1, _result: t }, _init: W2 };
};
we.memo = function(t, e) {
  return { $$typeof: $2, type: t, compare: e === void 0 ? null : e };
};
we.startTransition = function(t) {
  var e = ju.transition;
  ju.transition = {};
  try {
    t();
  } finally {
    ju.transition = e;
  }
};
we.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
we.useCallback = function(t, e) {
  return sn.current.useCallback(t, e);
};
we.useContext = function(t) {
  return sn.current.useContext(t);
};
we.useDebugValue = function() {
};
we.useDeferredValue = function(t) {
  return sn.current.useDeferredValue(t);
};
we.useEffect = function(t, e) {
  return sn.current.useEffect(t, e);
};
we.useId = function() {
  return sn.current.useId();
};
we.useImperativeHandle = function(t, e, n) {
  return sn.current.useImperativeHandle(t, e, n);
};
we.useInsertionEffect = function(t, e) {
  return sn.current.useInsertionEffect(t, e);
};
we.useLayoutEffect = function(t, e) {
  return sn.current.useLayoutEffect(t, e);
};
we.useMemo = function(t, e) {
  return sn.current.useMemo(t, e);
};
we.useReducer = function(t, e, n) {
  return sn.current.useReducer(t, e, n);
};
we.useRef = function(t) {
  return sn.current.useRef(t);
};
we.useState = function(t) {
  return sn.current.useState(t);
};
we.useSyncExternalStore = function(t, e, n) {
  return sn.current.useSyncExternalStore(t, e, n);
};
we.useTransition = function() {
  return sn.current.useTransition();
};
we.version = "18.2.0";
Ev.exports = we;
var S = Ev.exports;
const Dv = /* @__PURE__ */ Tp(S), Y2 = /* @__PURE__ */ Sv({
  __proto__: null,
  default: Dv
}, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var X2 = S, G2 = Symbol.for("react.element"), Q2 = Symbol.for("react.fragment"), q2 = Object.prototype.hasOwnProperty, K2 = X2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Z2 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Av(t, e, n) {
  var r, i = {}, o = null, l = null;
  n !== void 0 && (o = "" + n), e.key !== void 0 && (o = "" + e.key), e.ref !== void 0 && (l = e.ref);
  for (r in e)
    q2.call(e, r) && !Z2.hasOwnProperty(r) && (i[r] = e[r]);
  if (t && t.defaultProps)
    for (r in e = t.defaultProps, e)
      i[r] === void 0 && (i[r] = e[r]);
  return { $$typeof: G2, type: t, key: o, ref: l, props: i, _owner: K2.current };
}
Zc.Fragment = Q2;
Zc.jsx = Av;
Zc.jsxs = Av;
kv.exports = Zc;
var E = kv.exports, Ud = {}, Lv = { exports: {} }, Wn = {}, Nv = { exports: {} }, Iv = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(t) {
  function e(A, U) {
    var C = A.length;
    A.push(U);
    e:
      for (; 0 < C; ) {
        var re = C - 1 >>> 1, oe = A[re];
        if (0 < i(oe, U))
          A[re] = U, A[C] = oe, C = re;
        else
          break e;
      }
  }
  function n(A) {
    return A.length === 0 ? null : A[0];
  }
  function r(A) {
    if (A.length === 0)
      return null;
    var U = A[0], C = A.pop();
    if (C !== U) {
      A[0] = C;
      e:
        for (var re = 0, oe = A.length, We = oe >>> 1; re < We; ) {
          var ue = 2 * (re + 1) - 1, de = A[ue], ge = ue + 1, he = A[ge];
          if (0 > i(de, C))
            ge < oe && 0 > i(he, de) ? (A[re] = he, A[ge] = C, re = ge) : (A[re] = de, A[ue] = C, re = ue);
          else if (ge < oe && 0 > i(he, C))
            A[re] = he, A[ge] = C, re = ge;
          else
            break e;
        }
    }
    return U;
  }
  function i(A, U) {
    var C = A.sortIndex - U.sortIndex;
    return C !== 0 ? C : A.id - U.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    t.unstable_now = function() {
      return o.now();
    };
  } else {
    var l = Date, a = l.now();
    t.unstable_now = function() {
      return l.now() - a;
    };
  }
  var s = [], u = [], c = 1, f = null, d = 3, p = !1, m = !1, h = !1, y = typeof setTimeout == "function" ? setTimeout : null, g = typeof clearTimeout == "function" ? clearTimeout : null, v = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function _(A) {
    for (var U = n(u); U !== null; ) {
      if (U.callback === null)
        r(u);
      else if (U.startTime <= A)
        r(u), U.sortIndex = U.expirationTime, e(s, U);
      else
        break;
      U = n(u);
    }
  }
  function w(A) {
    if (h = !1, _(A), !m)
      if (n(s) !== null)
        m = !0, ne(T);
      else {
        var U = n(u);
        U !== null && V(w, U.startTime - A);
      }
  }
  function T(A, U) {
    m = !1, h && (h = !1, g(b), b = -1), p = !0;
    var C = d;
    try {
      for (_(U), f = n(s); f !== null && (!(f.expirationTime > U) || A && !B()); ) {
        var re = f.callback;
        if (typeof re == "function") {
          f.callback = null, d = f.priorityLevel;
          var oe = re(f.expirationTime <= U);
          U = t.unstable_now(), typeof oe == "function" ? f.callback = oe : f === n(s) && r(s), _(U);
        } else
          r(s);
        f = n(s);
      }
      if (f !== null)
        var We = !0;
      else {
        var ue = n(u);
        ue !== null && V(w, ue.startTime - U), We = !1;
      }
      return We;
    } finally {
      f = null, d = C, p = !1;
    }
  }
  var x = !1, k = null, b = -1, R = 5, M = -1;
  function B() {
    return !(t.unstable_now() - M < R);
  }
  function I() {
    if (k !== null) {
      var A = t.unstable_now();
      M = A;
      var U = !0;
      try {
        U = k(!0, A);
      } finally {
        U ? te() : (x = !1, k = null);
      }
    } else
      x = !1;
  }
  var te;
  if (typeof v == "function")
    te = function() {
      v(I);
    };
  else if (typeof MessageChannel < "u") {
    var z = new MessageChannel(), Y = z.port2;
    z.port1.onmessage = I, te = function() {
      Y.postMessage(null);
    };
  } else
    te = function() {
      y(I, 0);
    };
  function ne(A) {
    k = A, x || (x = !0, te());
  }
  function V(A, U) {
    b = y(function() {
      A(t.unstable_now());
    }, U);
  }
  t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(A) {
    A.callback = null;
  }, t.unstable_continueExecution = function() {
    m || p || (m = !0, ne(T));
  }, t.unstable_forceFrameRate = function(A) {
    0 > A || 125 < A ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : R = 0 < A ? Math.floor(1e3 / A) : 5;
  }, t.unstable_getCurrentPriorityLevel = function() {
    return d;
  }, t.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, t.unstable_next = function(A) {
    switch (d) {
      case 1:
      case 2:
      case 3:
        var U = 3;
        break;
      default:
        U = d;
    }
    var C = d;
    d = U;
    try {
      return A();
    } finally {
      d = C;
    }
  }, t.unstable_pauseExecution = function() {
  }, t.unstable_requestPaint = function() {
  }, t.unstable_runWithPriority = function(A, U) {
    switch (A) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        A = 3;
    }
    var C = d;
    d = A;
    try {
      return U();
    } finally {
      d = C;
    }
  }, t.unstable_scheduleCallback = function(A, U, C) {
    var re = t.unstable_now();
    switch (typeof C == "object" && C !== null ? (C = C.delay, C = typeof C == "number" && 0 < C ? re + C : re) : C = re, A) {
      case 1:
        var oe = -1;
        break;
      case 2:
        oe = 250;
        break;
      case 5:
        oe = 1073741823;
        break;
      case 4:
        oe = 1e4;
        break;
      default:
        oe = 5e3;
    }
    return oe = C + oe, A = { id: c++, callback: U, priorityLevel: A, startTime: C, expirationTime: oe, sortIndex: -1 }, C > re ? (A.sortIndex = C, e(u, A), n(s) === null && A === n(u) && (h ? (g(b), b = -1) : h = !0, V(w, C - re))) : (A.sortIndex = oe, e(s, A), m || p || (m = !0, ne(T))), A;
  }, t.unstable_shouldYield = B, t.unstable_wrapCallback = function(A) {
    var U = d;
    return function() {
      var C = d;
      d = U;
      try {
        return A.apply(this, arguments);
      } finally {
        d = C;
      }
    };
  };
})(Iv);
Nv.exports = Iv;
var J2 = Nv.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zv = S, Bn = J2;
function F(t) {
  for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1; n < arguments.length; n++)
    e += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var jv = /* @__PURE__ */ new Set(), ls = {};
function Xo(t, e) {
  zl(t, e), zl(t + "Capture", e);
}
function zl(t, e) {
  for (ls[t] = e, t = 0; t < e.length; t++)
    jv.add(e[t]);
}
var di = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Bd = Object.prototype.hasOwnProperty, eS = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Cm = {}, Tm = {};
function tS(t) {
  return Bd.call(Tm, t) ? !0 : Bd.call(Cm, t) ? !1 : eS.test(t) ? Tm[t] = !0 : (Cm[t] = !0, !1);
}
function nS(t, e, n, r) {
  if (n !== null && n.type === 0)
    return !1;
  switch (typeof e) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (t = t.toLowerCase().slice(0, 5), t !== "data-" && t !== "aria-");
    default:
      return !1;
  }
}
function rS(t, e, n, r) {
  if (e === null || typeof e > "u" || nS(t, e, n, r))
    return !0;
  if (r)
    return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !e;
      case 4:
        return e === !1;
      case 5:
        return isNaN(e);
      case 6:
        return isNaN(e) || 1 > e;
    }
  return !1;
}
function un(t, e, n, r, i, o, l) {
  this.acceptsBooleans = e === 2 || e === 3 || e === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = t, this.type = e, this.sanitizeURL = o, this.removeEmptyString = l;
}
var It = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
  It[t] = new un(t, 0, !1, t, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
  var e = t[0];
  It[e] = new un(e, 1, !1, t[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
  It[t] = new un(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
  It[t] = new un(t, 2, !1, t, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
  It[t] = new un(t, 3, !1, t.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(t) {
  It[t] = new un(t, 3, !0, t, null, !1, !1);
});
["capture", "download"].forEach(function(t) {
  It[t] = new un(t, 4, !1, t, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(t) {
  It[t] = new un(t, 6, !1, t, null, !1, !1);
});
["rowSpan", "start"].forEach(function(t) {
  It[t] = new un(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var Op = /[\-:]([a-z])/g;
function Dp(t) {
  return t[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
  var e = t.replace(
    Op,
    Dp
  );
  It[e] = new un(e, 1, !1, t, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
  var e = t.replace(Op, Dp);
  It[e] = new un(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
  var e = t.replace(Op, Dp);
  It[e] = new un(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(t) {
  It[t] = new un(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
It.xlinkHref = new un("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(t) {
  It[t] = new un(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function Ap(t, e, n, r) {
  var i = It.hasOwnProperty(e) ? It[e] : null;
  (i !== null ? i.type !== 0 : r || !(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (rS(e, n, i, r) && (n = null), r || i === null ? tS(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n)) : i.mustUseProperty ? t[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (e = i.attributeName, r = i.attributeNamespace, n === null ? t.removeAttribute(e) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))));
}
var _i = zv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, eu = Symbol.for("react.element"), il = Symbol.for("react.portal"), ol = Symbol.for("react.fragment"), Lp = Symbol.for("react.strict_mode"), Vd = Symbol.for("react.profiler"), $v = Symbol.for("react.provider"), Fv = Symbol.for("react.context"), Np = Symbol.for("react.forward_ref"), Wd = Symbol.for("react.suspense"), Hd = Symbol.for("react.suspense_list"), Ip = Symbol.for("react.memo"), Ti = Symbol.for("react.lazy"), Uv = Symbol.for("react.offscreen"), bm = Symbol.iterator;
function ia(t) {
  return t === null || typeof t != "object" ? null : (t = bm && t[bm] || t["@@iterator"], typeof t == "function" ? t : null);
}
var nt = Object.assign, Uf;
function ka(t) {
  if (Uf === void 0)
    try {
      throw Error();
    } catch (n) {
      var e = n.stack.trim().match(/\n( *(at )?)/);
      Uf = e && e[1] || "";
    }
  return `
` + Uf + t;
}
var Bf = !1;
function Vf(t, e) {
  if (!t || Bf)
    return "";
  Bf = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (e)
      if (e = function() {
        throw Error();
      }, Object.defineProperty(e.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(e, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(t, [], e);
      } else {
        try {
          e.call();
        } catch (u) {
          r = u;
        }
        t.call(e.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      t();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (var i = u.stack.split(`
`), o = r.stack.split(`
`), l = i.length - 1, a = o.length - 1; 1 <= l && 0 <= a && i[l] !== o[a]; )
        a--;
      for (; 1 <= l && 0 <= a; l--, a--)
        if (i[l] !== o[a]) {
          if (l !== 1 || a !== 1)
            do
              if (l--, a--, 0 > a || i[l] !== o[a]) {
                var s = `
` + i[l].replace(" at new ", " at ");
                return t.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", t.displayName)), s;
              }
            while (1 <= l && 0 <= a);
          break;
        }
    }
  } finally {
    Bf = !1, Error.prepareStackTrace = n;
  }
  return (t = t ? t.displayName || t.name : "") ? ka(t) : "";
}
function iS(t) {
  switch (t.tag) {
    case 5:
      return ka(t.type);
    case 16:
      return ka("Lazy");
    case 13:
      return ka("Suspense");
    case 19:
      return ka("SuspenseList");
    case 0:
    case 2:
    case 15:
      return t = Vf(t.type, !1), t;
    case 11:
      return t = Vf(t.type.render, !1), t;
    case 1:
      return t = Vf(t.type, !0), t;
    default:
      return "";
  }
}
function Yd(t) {
  if (t == null)
    return null;
  if (typeof t == "function")
    return t.displayName || t.name || null;
  if (typeof t == "string")
    return t;
  switch (t) {
    case ol:
      return "Fragment";
    case il:
      return "Portal";
    case Vd:
      return "Profiler";
    case Lp:
      return "StrictMode";
    case Wd:
      return "Suspense";
    case Hd:
      return "SuspenseList";
  }
  if (typeof t == "object")
    switch (t.$$typeof) {
      case Fv:
        return (t.displayName || "Context") + ".Consumer";
      case $v:
        return (t._context.displayName || "Context") + ".Provider";
      case Np:
        var e = t.render;
        return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
      case Ip:
        return e = t.displayName || null, e !== null ? e : Yd(t.type) || "Memo";
      case Ti:
        e = t._payload, t = t._init;
        try {
          return Yd(t(e));
        } catch {
        }
    }
  return null;
}
function oS(t) {
  var e = t.type;
  switch (t.tag) {
    case 24:
      return "Cache";
    case 9:
      return (e.displayName || "Context") + ".Consumer";
    case 10:
      return (e._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return t = e.render, t = t.displayName || t.name || "", e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return e;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Yd(e);
    case 8:
      return e === Lp ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
  }
  return null;
}
function Ki(t) {
  switch (typeof t) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return t;
    case "object":
      return t;
    default:
      return "";
  }
}
function Bv(t) {
  var e = t.type;
  return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
}
function lS(t) {
  var e = Bv(t) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e), r = "" + t[e];
  if (!t.hasOwnProperty(e) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var i = n.get, o = n.set;
    return Object.defineProperty(t, e, { configurable: !0, get: function() {
      return i.call(this);
    }, set: function(l) {
      r = "" + l, o.call(this, l);
    } }), Object.defineProperty(t, e, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(l) {
      r = "" + l;
    }, stopTracking: function() {
      t._valueTracker = null, delete t[e];
    } };
  }
}
function tu(t) {
  t._valueTracker || (t._valueTracker = lS(t));
}
function Vv(t) {
  if (!t)
    return !1;
  var e = t._valueTracker;
  if (!e)
    return !0;
  var n = e.getValue(), r = "";
  return t && (r = Bv(t) ? t.checked ? "true" : "false" : t.value), t = r, t !== n ? (e.setValue(t), !0) : !1;
}
function ac(t) {
  if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u")
    return null;
  try {
    return t.activeElement || t.body;
  } catch {
    return t.body;
  }
}
function Xd(t, e) {
  var n = e.checked;
  return nt({}, e, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? t._wrapperState.initialChecked });
}
function Pm(t, e) {
  var n = e.defaultValue == null ? "" : e.defaultValue, r = e.checked != null ? e.checked : e.defaultChecked;
  n = Ki(e.value != null ? e.value : n), t._wrapperState = { initialChecked: r, initialValue: n, controlled: e.type === "checkbox" || e.type === "radio" ? e.checked != null : e.value != null };
}
function Wv(t, e) {
  e = e.checked, e != null && Ap(t, "checked", e, !1);
}
function Gd(t, e) {
  Wv(t, e);
  var n = Ki(e.value), r = e.type;
  if (n != null)
    r === "number" ? (n === 0 && t.value === "" || t.value != n) && (t.value = "" + n) : t.value !== "" + n && (t.value = "" + n);
  else if (r === "submit" || r === "reset") {
    t.removeAttribute("value");
    return;
  }
  e.hasOwnProperty("value") ? Qd(t, e.type, n) : e.hasOwnProperty("defaultValue") && Qd(t, e.type, Ki(e.defaultValue)), e.checked == null && e.defaultChecked != null && (t.defaultChecked = !!e.defaultChecked);
}
function Rm(t, e, n) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var r = e.type;
    if (!(r !== "submit" && r !== "reset" || e.value !== void 0 && e.value !== null))
      return;
    e = "" + t._wrapperState.initialValue, n || e === t.value || (t.value = e), t.defaultValue = e;
  }
  n = t.name, n !== "" && (t.name = ""), t.defaultChecked = !!t._wrapperState.initialChecked, n !== "" && (t.name = n);
}
function Qd(t, e, n) {
  (e !== "number" || ac(t.ownerDocument) !== t) && (n == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + n && (t.defaultValue = "" + n));
}
var Ea = Array.isArray;
function kl(t, e, n, r) {
  if (t = t.options, e) {
    e = {};
    for (var i = 0; i < n.length; i++)
      e["$" + n[i]] = !0;
    for (n = 0; n < t.length; n++)
      i = e.hasOwnProperty("$" + t[n].value), t[n].selected !== i && (t[n].selected = i), i && r && (t[n].defaultSelected = !0);
  } else {
    for (n = "" + Ki(n), e = null, i = 0; i < t.length; i++) {
      if (t[i].value === n) {
        t[i].selected = !0, r && (t[i].defaultSelected = !0);
        return;
      }
      e !== null || t[i].disabled || (e = t[i]);
    }
    e !== null && (e.selected = !0);
  }
}
function qd(t, e) {
  if (e.dangerouslySetInnerHTML != null)
    throw Error(F(91));
  return nt({}, e, { value: void 0, defaultValue: void 0, children: "" + t._wrapperState.initialValue });
}
function Mm(t, e) {
  var n = e.value;
  if (n == null) {
    if (n = e.children, e = e.defaultValue, n != null) {
      if (e != null)
        throw Error(F(92));
      if (Ea(n)) {
        if (1 < n.length)
          throw Error(F(93));
        n = n[0];
      }
      e = n;
    }
    e == null && (e = ""), n = e;
  }
  t._wrapperState = { initialValue: Ki(n) };
}
function Hv(t, e) {
  var n = Ki(e.value), r = Ki(e.defaultValue);
  n != null && (n = "" + n, n !== t.value && (t.value = n), e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)), r != null && (t.defaultValue = "" + r);
}
function Om(t) {
  var e = t.textContent;
  e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e);
}
function Yv(t) {
  switch (t) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Kd(t, e) {
  return t == null || t === "http://www.w3.org/1999/xhtml" ? Yv(e) : t === "http://www.w3.org/2000/svg" && e === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t;
}
var nu, Xv = function(t) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(e, n, r, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return t(e, n, r, i);
    });
  } : t;
}(function(t, e) {
  if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t)
    t.innerHTML = e;
  else {
    for (nu = nu || document.createElement("div"), nu.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>", e = nu.firstChild; t.firstChild; )
      t.removeChild(t.firstChild);
    for (; e.firstChild; )
      t.appendChild(e.firstChild);
  }
});
function as(t, e) {
  if (e) {
    var n = t.firstChild;
    if (n && n === t.lastChild && n.nodeType === 3) {
      n.nodeValue = e;
      return;
    }
  }
  t.textContent = e;
}
var La = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, aS = ["Webkit", "ms", "Moz", "O"];
Object.keys(La).forEach(function(t) {
  aS.forEach(function(e) {
    e = e + t.charAt(0).toUpperCase() + t.substring(1), La[e] = La[t];
  });
});
function Gv(t, e, n) {
  return e == null || typeof e == "boolean" || e === "" ? "" : n || typeof e != "number" || e === 0 || La.hasOwnProperty(t) && La[t] ? ("" + e).trim() : e + "px";
}
function Qv(t, e) {
  t = t.style;
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, i = Gv(n, e[n], r);
      n === "float" && (n = "cssFloat"), r ? t.setProperty(n, i) : t[n] = i;
    }
}
var sS = nt({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Zd(t, e) {
  if (e) {
    if (sS[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
      throw Error(F(137, t));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null)
        throw Error(F(60));
      if (typeof e.dangerouslySetInnerHTML != "object" || !("__html" in e.dangerouslySetInnerHTML))
        throw Error(F(61));
    }
    if (e.style != null && typeof e.style != "object")
      throw Error(F(62));
  }
}
function Jd(t, e) {
  if (t.indexOf("-") === -1)
    return typeof e.is == "string";
  switch (t) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var eh = null;
function zp(t) {
  return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
}
var th = null, El = null, Cl = null;
function Dm(t) {
  if (t = Vs(t)) {
    if (typeof th != "function")
      throw Error(F(280));
    var e = t.stateNode;
    e && (e = rf(e), th(t.stateNode, t.type, e));
  }
}
function qv(t) {
  El ? Cl ? Cl.push(t) : Cl = [t] : El = t;
}
function Kv() {
  if (El) {
    var t = El, e = Cl;
    if (Cl = El = null, Dm(t), e)
      for (t = 0; t < e.length; t++)
        Dm(e[t]);
  }
}
function Zv(t, e) {
  return t(e);
}
function Jv() {
}
var Wf = !1;
function ey(t, e, n) {
  if (Wf)
    return t(e, n);
  Wf = !0;
  try {
    return Zv(t, e, n);
  } finally {
    Wf = !1, (El !== null || Cl !== null) && (Jv(), Kv());
  }
}
function ss(t, e) {
  var n = t.stateNode;
  if (n === null)
    return null;
  var r = rf(n);
  if (r === null)
    return null;
  n = r[e];
  e:
    switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (t = t.type, r = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !r;
        break e;
      default:
        t = !1;
    }
  if (t)
    return null;
  if (n && typeof n != "function")
    throw Error(F(231, e, typeof n));
  return n;
}
var nh = !1;
if (di)
  try {
    var oa = {};
    Object.defineProperty(oa, "passive", { get: function() {
      nh = !0;
    } }), window.addEventListener("test", oa, oa), window.removeEventListener("test", oa, oa);
  } catch {
    nh = !1;
  }
function uS(t, e, n, r, i, o, l, a, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Na = !1, sc = null, uc = !1, rh = null, cS = { onError: function(t) {
  Na = !0, sc = t;
} };
function fS(t, e, n, r, i, o, l, a, s) {
  Na = !1, sc = null, uS.apply(cS, arguments);
}
function dS(t, e, n, r, i, o, l, a, s) {
  if (fS.apply(this, arguments), Na) {
    if (Na) {
      var u = sc;
      Na = !1, sc = null;
    } else
      throw Error(F(198));
    uc || (uc = !0, rh = u);
  }
}
function Go(t) {
  var e = t, n = t;
  if (t.alternate)
    for (; e.return; )
      e = e.return;
  else {
    t = e;
    do
      e = t, e.flags & 4098 && (n = e.return), t = e.return;
    while (t);
  }
  return e.tag === 3 ? n : null;
}
function ty(t) {
  if (t.tag === 13) {
    var e = t.memoizedState;
    if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null)
      return e.dehydrated;
  }
  return null;
}
function Am(t) {
  if (Go(t) !== t)
    throw Error(F(188));
}
function hS(t) {
  var e = t.alternate;
  if (!e) {
    if (e = Go(t), e === null)
      throw Error(F(188));
    return e !== t ? null : t;
  }
  for (var n = t, r = e; ; ) {
    var i = n.return;
    if (i === null)
      break;
    var o = i.alternate;
    if (o === null) {
      if (r = i.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n)
          return Am(i), t;
        if (o === r)
          return Am(i), e;
        o = o.sibling;
      }
      throw Error(F(188));
    }
    if (n.return !== r.return)
      n = i, r = o;
    else {
      for (var l = !1, a = i.child; a; ) {
        if (a === n) {
          l = !0, n = i, r = o;
          break;
        }
        if (a === r) {
          l = !0, r = i, n = o;
          break;
        }
        a = a.sibling;
      }
      if (!l) {
        for (a = o.child; a; ) {
          if (a === n) {
            l = !0, n = o, r = i;
            break;
          }
          if (a === r) {
            l = !0, r = o, n = i;
            break;
          }
          a = a.sibling;
        }
        if (!l)
          throw Error(F(189));
      }
    }
    if (n.alternate !== r)
      throw Error(F(190));
  }
  if (n.tag !== 3)
    throw Error(F(188));
  return n.stateNode.current === n ? t : e;
}
function ny(t) {
  return t = hS(t), t !== null ? ry(t) : null;
}
function ry(t) {
  if (t.tag === 5 || t.tag === 6)
    return t;
  for (t = t.child; t !== null; ) {
    var e = ry(t);
    if (e !== null)
      return e;
    t = t.sibling;
  }
  return null;
}
var iy = Bn.unstable_scheduleCallback, Lm = Bn.unstable_cancelCallback, pS = Bn.unstable_shouldYield, mS = Bn.unstable_requestPaint, pt = Bn.unstable_now, gS = Bn.unstable_getCurrentPriorityLevel, jp = Bn.unstable_ImmediatePriority, oy = Bn.unstable_UserBlockingPriority, cc = Bn.unstable_NormalPriority, vS = Bn.unstable_LowPriority, ly = Bn.unstable_IdlePriority, Jc = null, Vr = null;
function yS(t) {
  if (Vr && typeof Vr.onCommitFiberRoot == "function")
    try {
      Vr.onCommitFiberRoot(Jc, t, void 0, (t.current.flags & 128) === 128);
    } catch {
    }
}
var Tr = Math.clz32 ? Math.clz32 : xS, _S = Math.log, wS = Math.LN2;
function xS(t) {
  return t >>>= 0, t === 0 ? 32 : 31 - (_S(t) / wS | 0) | 0;
}
var ru = 64, iu = 4194304;
function Ca(t) {
  switch (t & -t) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return t & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return t;
  }
}
function fc(t, e) {
  var n = t.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, i = t.suspendedLanes, o = t.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var a = l & ~i;
    a !== 0 ? r = Ca(a) : (o &= l, o !== 0 && (r = Ca(o)));
  } else
    l = n & ~i, l !== 0 ? r = Ca(l) : o !== 0 && (r = Ca(o));
  if (r === 0)
    return 0;
  if (e !== 0 && e !== r && !(e & i) && (i = r & -r, o = e & -e, i >= o || i === 16 && (o & 4194240) !== 0))
    return e;
  if (r & 4 && (r |= n & 16), e = t.entangledLanes, e !== 0)
    for (t = t.entanglements, e &= r; 0 < e; )
      n = 31 - Tr(e), i = 1 << n, r |= t[n], e &= ~i;
  return r;
}
function SS(t, e) {
  switch (t) {
    case 1:
    case 2:
    case 4:
      return e + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function kS(t, e) {
  for (var n = t.suspendedLanes, r = t.pingedLanes, i = t.expirationTimes, o = t.pendingLanes; 0 < o; ) {
    var l = 31 - Tr(o), a = 1 << l, s = i[l];
    s === -1 ? (!(a & n) || a & r) && (i[l] = SS(a, e)) : s <= e && (t.expiredLanes |= a), o &= ~a;
  }
}
function ih(t) {
  return t = t.pendingLanes & -1073741825, t !== 0 ? t : t & 1073741824 ? 1073741824 : 0;
}
function ay() {
  var t = ru;
  return ru <<= 1, !(ru & 4194240) && (ru = 64), t;
}
function Hf(t) {
  for (var e = [], n = 0; 31 > n; n++)
    e.push(t);
  return e;
}
function Us(t, e, n) {
  t.pendingLanes |= e, e !== 536870912 && (t.suspendedLanes = 0, t.pingedLanes = 0), t = t.eventTimes, e = 31 - Tr(e), t[e] = n;
}
function ES(t, e) {
  var n = t.pendingLanes & ~e;
  t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.expiredLanes &= e, t.mutableReadLanes &= e, t.entangledLanes &= e, e = t.entanglements;
  var r = t.eventTimes;
  for (t = t.expirationTimes; 0 < n; ) {
    var i = 31 - Tr(n), o = 1 << i;
    e[i] = 0, r[i] = -1, t[i] = -1, n &= ~o;
  }
}
function $p(t, e) {
  var n = t.entangledLanes |= e;
  for (t = t.entanglements; n; ) {
    var r = 31 - Tr(n), i = 1 << r;
    i & e | t[r] & e && (t[r] |= e), n &= ~i;
  }
}
var De = 0;
function sy(t) {
  return t &= -t, 1 < t ? 4 < t ? t & 268435455 ? 16 : 536870912 : 4 : 1;
}
var uy, Fp, cy, fy, dy, oh = !1, ou = [], $i = null, Fi = null, Ui = null, us = /* @__PURE__ */ new Map(), cs = /* @__PURE__ */ new Map(), Pi = [], CS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Nm(t, e) {
  switch (t) {
    case "focusin":
    case "focusout":
      $i = null;
      break;
    case "dragenter":
    case "dragleave":
      Fi = null;
      break;
    case "mouseover":
    case "mouseout":
      Ui = null;
      break;
    case "pointerover":
    case "pointerout":
      us.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      cs.delete(e.pointerId);
  }
}
function la(t, e, n, r, i, o) {
  return t === null || t.nativeEvent !== o ? (t = { blockedOn: e, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }, e !== null && (e = Vs(e), e !== null && Fp(e)), t) : (t.eventSystemFlags |= r, e = t.targetContainers, i !== null && e.indexOf(i) === -1 && e.push(i), t);
}
function TS(t, e, n, r, i) {
  switch (e) {
    case "focusin":
      return $i = la($i, t, e, n, r, i), !0;
    case "dragenter":
      return Fi = la(Fi, t, e, n, r, i), !0;
    case "mouseover":
      return Ui = la(Ui, t, e, n, r, i), !0;
    case "pointerover":
      var o = i.pointerId;
      return us.set(o, la(us.get(o) || null, t, e, n, r, i)), !0;
    case "gotpointercapture":
      return o = i.pointerId, cs.set(o, la(cs.get(o) || null, t, e, n, r, i)), !0;
  }
  return !1;
}
function hy(t) {
  var e = vo(t.target);
  if (e !== null) {
    var n = Go(e);
    if (n !== null) {
      if (e = n.tag, e === 13) {
        if (e = ty(n), e !== null) {
          t.blockedOn = e, dy(t.priority, function() {
            cy(n);
          });
          return;
        }
      } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  t.blockedOn = null;
}
function $u(t) {
  if (t.blockedOn !== null)
    return !1;
  for (var e = t.targetContainers; 0 < e.length; ) {
    var n = lh(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
    if (n === null) {
      n = t.nativeEvent;
      var r = new n.constructor(n.type, n);
      eh = r, n.target.dispatchEvent(r), eh = null;
    } else
      return e = Vs(n), e !== null && Fp(e), t.blockedOn = n, !1;
    e.shift();
  }
  return !0;
}
function Im(t, e, n) {
  $u(t) && n.delete(e);
}
function bS() {
  oh = !1, $i !== null && $u($i) && ($i = null), Fi !== null && $u(Fi) && (Fi = null), Ui !== null && $u(Ui) && (Ui = null), us.forEach(Im), cs.forEach(Im);
}
function aa(t, e) {
  t.blockedOn === e && (t.blockedOn = null, oh || (oh = !0, Bn.unstable_scheduleCallback(Bn.unstable_NormalPriority, bS)));
}
function fs(t) {
  function e(i) {
    return aa(i, t);
  }
  if (0 < ou.length) {
    aa(ou[0], t);
    for (var n = 1; n < ou.length; n++) {
      var r = ou[n];
      r.blockedOn === t && (r.blockedOn = null);
    }
  }
  for ($i !== null && aa($i, t), Fi !== null && aa(Fi, t), Ui !== null && aa(Ui, t), us.forEach(e), cs.forEach(e), n = 0; n < Pi.length; n++)
    r = Pi[n], r.blockedOn === t && (r.blockedOn = null);
  for (; 0 < Pi.length && (n = Pi[0], n.blockedOn === null); )
    hy(n), n.blockedOn === null && Pi.shift();
}
var Tl = _i.ReactCurrentBatchConfig, dc = !0;
function PS(t, e, n, r) {
  var i = De, o = Tl.transition;
  Tl.transition = null;
  try {
    De = 1, Up(t, e, n, r);
  } finally {
    De = i, Tl.transition = o;
  }
}
function RS(t, e, n, r) {
  var i = De, o = Tl.transition;
  Tl.transition = null;
  try {
    De = 4, Up(t, e, n, r);
  } finally {
    De = i, Tl.transition = o;
  }
}
function Up(t, e, n, r) {
  if (dc) {
    var i = lh(t, e, n, r);
    if (i === null)
      td(t, e, r, hc, n), Nm(t, r);
    else if (TS(i, t, e, n, r))
      r.stopPropagation();
    else if (Nm(t, r), e & 4 && -1 < CS.indexOf(t)) {
      for (; i !== null; ) {
        var o = Vs(i);
        if (o !== null && uy(o), o = lh(t, e, n, r), o === null && td(t, e, r, hc, n), o === i)
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else
      td(t, e, r, null, n);
  }
}
var hc = null;
function lh(t, e, n, r) {
  if (hc = null, t = zp(r), t = vo(t), t !== null)
    if (e = Go(t), e === null)
      t = null;
    else if (n = e.tag, n === 13) {
      if (t = ty(e), t !== null)
        return t;
      t = null;
    } else if (n === 3) {
      if (e.stateNode.current.memoizedState.isDehydrated)
        return e.tag === 3 ? e.stateNode.containerInfo : null;
      t = null;
    } else
      e !== t && (t = null);
  return hc = t, null;
}
function py(t) {
  switch (t) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (gS()) {
        case jp:
          return 1;
        case oy:
          return 4;
        case cc:
        case vS:
          return 16;
        case ly:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Mi = null, Bp = null, Fu = null;
function my() {
  if (Fu)
    return Fu;
  var t, e = Bp, n = e.length, r, i = "value" in Mi ? Mi.value : Mi.textContent, o = i.length;
  for (t = 0; t < n && e[t] === i[t]; t++)
    ;
  var l = n - t;
  for (r = 1; r <= l && e[n - r] === i[o - r]; r++)
    ;
  return Fu = i.slice(t, 1 < r ? 1 - r : void 0);
}
function Uu(t) {
  var e = t.keyCode;
  return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
}
function lu() {
  return !0;
}
function zm() {
  return !1;
}
function Hn(t) {
  function e(n, r, i, o, l) {
    this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = l, this.currentTarget = null;
    for (var a in t)
      t.hasOwnProperty(a) && (n = t[a], this[a] = n ? n(o) : o[a]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? lu : zm, this.isPropagationStopped = zm, this;
  }
  return nt(e.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = lu);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = lu);
  }, persist: function() {
  }, isPersistent: lu }), e;
}
var Zl = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(t) {
  return t.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Vp = Hn(Zl), Bs = nt({}, Zl, { view: 0, detail: 0 }), MS = Hn(Bs), Yf, Xf, sa, ef = nt({}, Bs, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Wp, button: 0, buttons: 0, relatedTarget: function(t) {
  return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
}, movementX: function(t) {
  return "movementX" in t ? t.movementX : (t !== sa && (sa && t.type === "mousemove" ? (Yf = t.screenX - sa.screenX, Xf = t.screenY - sa.screenY) : Xf = Yf = 0, sa = t), Yf);
}, movementY: function(t) {
  return "movementY" in t ? t.movementY : Xf;
} }), jm = Hn(ef), OS = nt({}, ef, { dataTransfer: 0 }), DS = Hn(OS), AS = nt({}, Bs, { relatedTarget: 0 }), Gf = Hn(AS), LS = nt({}, Zl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), NS = Hn(LS), IS = nt({}, Zl, { clipboardData: function(t) {
  return "clipboardData" in t ? t.clipboardData : window.clipboardData;
} }), zS = Hn(IS), jS = nt({}, Zl, { data: 0 }), $m = Hn(jS), $S = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, FS = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, US = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function BS(t) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(t) : (t = US[t]) ? !!e[t] : !1;
}
function Wp() {
  return BS;
}
var VS = nt({}, Bs, { key: function(t) {
  if (t.key) {
    var e = $S[t.key] || t.key;
    if (e !== "Unidentified")
      return e;
  }
  return t.type === "keypress" ? (t = Uu(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? FS[t.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Wp, charCode: function(t) {
  return t.type === "keypress" ? Uu(t) : 0;
}, keyCode: function(t) {
  return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
}, which: function(t) {
  return t.type === "keypress" ? Uu(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
} }), WS = Hn(VS), HS = nt({}, ef, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Fm = Hn(HS), YS = nt({}, Bs, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Wp }), XS = Hn(YS), GS = nt({}, Zl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), QS = Hn(GS), qS = nt({}, ef, {
  deltaX: function(t) {
    return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
  },
  deltaY: function(t) {
    return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), KS = Hn(qS), ZS = [9, 13, 27, 32], Hp = di && "CompositionEvent" in window, Ia = null;
di && "documentMode" in document && (Ia = document.documentMode);
var JS = di && "TextEvent" in window && !Ia, gy = di && (!Hp || Ia && 8 < Ia && 11 >= Ia), Um = String.fromCharCode(32), Bm = !1;
function vy(t, e) {
  switch (t) {
    case "keyup":
      return ZS.indexOf(e.keyCode) !== -1;
    case "keydown":
      return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function yy(t) {
  return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
}
var ll = !1;
function ek(t, e) {
  switch (t) {
    case "compositionend":
      return yy(e);
    case "keypress":
      return e.which !== 32 ? null : (Bm = !0, Um);
    case "textInput":
      return t = e.data, t === Um && Bm ? null : t;
    default:
      return null;
  }
}
function tk(t, e) {
  if (ll)
    return t === "compositionend" || !Hp && vy(t, e) ? (t = my(), Fu = Bp = Mi = null, ll = !1, t) : null;
  switch (t) {
    case "paste":
      return null;
    case "keypress":
      if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
        if (e.char && 1 < e.char.length)
          return e.char;
        if (e.which)
          return String.fromCharCode(e.which);
      }
      return null;
    case "compositionend":
      return gy && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var nk = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Vm(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e === "input" ? !!nk[t.type] : e === "textarea";
}
function _y(t, e, n, r) {
  qv(r), e = pc(e, "onChange"), 0 < e.length && (n = new Vp("onChange", "change", null, n, r), t.push({ event: n, listeners: e }));
}
var za = null, ds = null;
function rk(t) {
  My(t, 0);
}
function tf(t) {
  var e = ul(t);
  if (Vv(e))
    return t;
}
function ik(t, e) {
  if (t === "change")
    return e;
}
var wy = !1;
if (di) {
  var Qf;
  if (di) {
    var qf = "oninput" in document;
    if (!qf) {
      var Wm = document.createElement("div");
      Wm.setAttribute("oninput", "return;"), qf = typeof Wm.oninput == "function";
    }
    Qf = qf;
  } else
    Qf = !1;
  wy = Qf && (!document.documentMode || 9 < document.documentMode);
}
function Hm() {
  za && (za.detachEvent("onpropertychange", xy), ds = za = null);
}
function xy(t) {
  if (t.propertyName === "value" && tf(ds)) {
    var e = [];
    _y(e, ds, t, zp(t)), ey(rk, e);
  }
}
function ok(t, e, n) {
  t === "focusin" ? (Hm(), za = e, ds = n, za.attachEvent("onpropertychange", xy)) : t === "focusout" && Hm();
}
function lk(t) {
  if (t === "selectionchange" || t === "keyup" || t === "keydown")
    return tf(ds);
}
function ak(t, e) {
  if (t === "click")
    return tf(e);
}
function sk(t, e) {
  if (t === "input" || t === "change")
    return tf(e);
}
function uk(t, e) {
  return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
}
var Rr = typeof Object.is == "function" ? Object.is : uk;
function hs(t, e) {
  if (Rr(t, e))
    return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null)
    return !1;
  var n = Object.keys(t), r = Object.keys(e);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Bd.call(e, i) || !Rr(t[i], e[i]))
      return !1;
  }
  return !0;
}
function Ym(t) {
  for (; t && t.firstChild; )
    t = t.firstChild;
  return t;
}
function Xm(t, e) {
  var n = Ym(t);
  t = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = t + n.textContent.length, t <= e && r >= e)
        return { node: n, offset: e - t };
      t = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ym(n);
  }
}
function Sy(t, e) {
  return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Sy(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
}
function ky() {
  for (var t = window, e = ac(); e instanceof t.HTMLIFrameElement; ) {
    try {
      var n = typeof e.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      t = e.contentWindow;
    else
      break;
    e = ac(t.document);
  }
  return e;
}
function Yp(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
}
function ck(t) {
  var e = ky(), n = t.focusedElem, r = t.selectionRange;
  if (e !== n && n && n.ownerDocument && Sy(n.ownerDocument.documentElement, n)) {
    if (r !== null && Yp(n)) {
      if (e = r.start, t = r.end, t === void 0 && (t = e), "selectionStart" in n)
        n.selectionStart = e, n.selectionEnd = Math.min(t, n.value.length);
      else if (t = (e = n.ownerDocument || document) && e.defaultView || window, t.getSelection) {
        t = t.getSelection();
        var i = n.textContent.length, o = Math.min(r.start, i);
        r = r.end === void 0 ? o : Math.min(r.end, i), !t.extend && o > r && (i = r, r = o, o = i), i = Xm(n, o);
        var l = Xm(
          n,
          r
        );
        i && l && (t.rangeCount !== 1 || t.anchorNode !== i.node || t.anchorOffset !== i.offset || t.focusNode !== l.node || t.focusOffset !== l.offset) && (e = e.createRange(), e.setStart(i.node, i.offset), t.removeAllRanges(), o > r ? (t.addRange(e), t.extend(l.node, l.offset)) : (e.setEnd(l.node, l.offset), t.addRange(e)));
      }
    }
    for (e = [], t = n; t = t.parentNode; )
      t.nodeType === 1 && e.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < e.length; n++)
      t = e[n], t.element.scrollLeft = t.left, t.element.scrollTop = t.top;
  }
}
var fk = di && "documentMode" in document && 11 >= document.documentMode, al = null, ah = null, ja = null, sh = !1;
function Gm(t, e, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  sh || al == null || al !== ac(r) || (r = al, "selectionStart" in r && Yp(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ja && hs(ja, r) || (ja = r, r = pc(ah, "onSelect"), 0 < r.length && (e = new Vp("onSelect", "select", null, e, n), t.push({ event: e, listeners: r }), e.target = al)));
}
function au(t, e) {
  var n = {};
  return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n;
}
var sl = { animationend: au("Animation", "AnimationEnd"), animationiteration: au("Animation", "AnimationIteration"), animationstart: au("Animation", "AnimationStart"), transitionend: au("Transition", "TransitionEnd") }, Kf = {}, Ey = {};
di && (Ey = document.createElement("div").style, "AnimationEvent" in window || (delete sl.animationend.animation, delete sl.animationiteration.animation, delete sl.animationstart.animation), "TransitionEvent" in window || delete sl.transitionend.transition);
function nf(t) {
  if (Kf[t])
    return Kf[t];
  if (!sl[t])
    return t;
  var e = sl[t], n;
  for (n in e)
    if (e.hasOwnProperty(n) && n in Ey)
      return Kf[t] = e[n];
  return t;
}
var Cy = nf("animationend"), Ty = nf("animationiteration"), by = nf("animationstart"), Py = nf("transitionend"), Ry = /* @__PURE__ */ new Map(), Qm = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function no(t, e) {
  Ry.set(t, e), Xo(e, [t]);
}
for (var Zf = 0; Zf < Qm.length; Zf++) {
  var Jf = Qm[Zf], dk = Jf.toLowerCase(), hk = Jf[0].toUpperCase() + Jf.slice(1);
  no(dk, "on" + hk);
}
no(Cy, "onAnimationEnd");
no(Ty, "onAnimationIteration");
no(by, "onAnimationStart");
no("dblclick", "onDoubleClick");
no("focusin", "onFocus");
no("focusout", "onBlur");
no(Py, "onTransitionEnd");
zl("onMouseEnter", ["mouseout", "mouseover"]);
zl("onMouseLeave", ["mouseout", "mouseover"]);
zl("onPointerEnter", ["pointerout", "pointerover"]);
zl("onPointerLeave", ["pointerout", "pointerover"]);
Xo("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Xo("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Xo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Xo("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Xo("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Xo("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ta = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), pk = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ta));
function qm(t, e, n) {
  var r = t.type || "unknown-event";
  t.currentTarget = n, dS(r, e, void 0, t), t.currentTarget = null;
}
function My(t, e) {
  e = (e & 4) !== 0;
  for (var n = 0; n < t.length; n++) {
    var r = t[n], i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (e)
        for (var l = r.length - 1; 0 <= l; l--) {
          var a = r[l], s = a.instance, u = a.currentTarget;
          if (a = a.listener, s !== o && i.isPropagationStopped())
            break e;
          qm(i, a, u), o = s;
        }
      else
        for (l = 0; l < r.length; l++) {
          if (a = r[l], s = a.instance, u = a.currentTarget, a = a.listener, s !== o && i.isPropagationStopped())
            break e;
          qm(i, a, u), o = s;
        }
    }
  }
  if (uc)
    throw t = rh, uc = !1, rh = null, t;
}
function Ue(t, e) {
  var n = e[hh];
  n === void 0 && (n = e[hh] = /* @__PURE__ */ new Set());
  var r = t + "__bubble";
  n.has(r) || (Oy(e, t, 2, !1), n.add(r));
}
function ed(t, e, n) {
  var r = 0;
  e && (r |= 4), Oy(n, t, r, e);
}
var su = "_reactListening" + Math.random().toString(36).slice(2);
function ps(t) {
  if (!t[su]) {
    t[su] = !0, jv.forEach(function(n) {
      n !== "selectionchange" && (pk.has(n) || ed(n, !1, t), ed(n, !0, t));
    });
    var e = t.nodeType === 9 ? t : t.ownerDocument;
    e === null || e[su] || (e[su] = !0, ed("selectionchange", !1, e));
  }
}
function Oy(t, e, n, r) {
  switch (py(e)) {
    case 1:
      var i = PS;
      break;
    case 4:
      i = RS;
      break;
    default:
      i = Up;
  }
  n = i.bind(null, e, n, t), i = void 0, !nh || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (i = !0), r ? i !== void 0 ? t.addEventListener(e, n, { capture: !0, passive: i }) : t.addEventListener(e, n, !0) : i !== void 0 ? t.addEventListener(e, n, { passive: i }) : t.addEventListener(e, n, !1);
}
function td(t, e, n, r, i) {
  var o = r;
  if (!(e & 1) && !(e & 2) && r !== null)
    e:
      for (; ; ) {
        if (r === null)
          return;
        var l = r.tag;
        if (l === 3 || l === 4) {
          var a = r.stateNode.containerInfo;
          if (a === i || a.nodeType === 8 && a.parentNode === i)
            break;
          if (l === 4)
            for (l = r.return; l !== null; ) {
              var s = l.tag;
              if ((s === 3 || s === 4) && (s = l.stateNode.containerInfo, s === i || s.nodeType === 8 && s.parentNode === i))
                return;
              l = l.return;
            }
          for (; a !== null; ) {
            if (l = vo(a), l === null)
              return;
            if (s = l.tag, s === 5 || s === 6) {
              r = o = l;
              continue e;
            }
            a = a.parentNode;
          }
        }
        r = r.return;
      }
  ey(function() {
    var u = o, c = zp(n), f = [];
    e: {
      var d = Ry.get(t);
      if (d !== void 0) {
        var p = Vp, m = t;
        switch (t) {
          case "keypress":
            if (Uu(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            p = WS;
            break;
          case "focusin":
            m = "focus", p = Gf;
            break;
          case "focusout":
            m = "blur", p = Gf;
            break;
          case "beforeblur":
          case "afterblur":
            p = Gf;
            break;
          case "click":
            if (n.button === 2)
              break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            p = jm;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = DS;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = XS;
            break;
          case Cy:
          case Ty:
          case by:
            p = NS;
            break;
          case Py:
            p = QS;
            break;
          case "scroll":
            p = MS;
            break;
          case "wheel":
            p = KS;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = zS;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = Fm;
        }
        var h = (e & 4) !== 0, y = !h && t === "scroll", g = h ? d !== null ? d + "Capture" : null : d;
        h = [];
        for (var v = u, _; v !== null; ) {
          _ = v;
          var w = _.stateNode;
          if (_.tag === 5 && w !== null && (_ = w, g !== null && (w = ss(v, g), w != null && h.push(ms(v, w, _)))), y)
            break;
          v = v.return;
        }
        0 < h.length && (d = new p(d, m, null, n, c), f.push({ event: d, listeners: h }));
      }
    }
    if (!(e & 7)) {
      e: {
        if (d = t === "mouseover" || t === "pointerover", p = t === "mouseout" || t === "pointerout", d && n !== eh && (m = n.relatedTarget || n.fromElement) && (vo(m) || m[hi]))
          break e;
        if ((p || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window, p ? (m = n.relatedTarget || n.toElement, p = u, m = m ? vo(m) : null, m !== null && (y = Go(m), m !== y || m.tag !== 5 && m.tag !== 6) && (m = null)) : (p = null, m = u), p !== m)) {
          if (h = jm, w = "onMouseLeave", g = "onMouseEnter", v = "mouse", (t === "pointerout" || t === "pointerover") && (h = Fm, w = "onPointerLeave", g = "onPointerEnter", v = "pointer"), y = p == null ? d : ul(p), _ = m == null ? d : ul(m), d = new h(w, v + "leave", p, n, c), d.target = y, d.relatedTarget = _, w = null, vo(c) === u && (h = new h(g, v + "enter", m, n, c), h.target = _, h.relatedTarget = y, w = h), y = w, p && m)
            t: {
              for (h = p, g = m, v = 0, _ = h; _; _ = Ko(_))
                v++;
              for (_ = 0, w = g; w; w = Ko(w))
                _++;
              for (; 0 < v - _; )
                h = Ko(h), v--;
              for (; 0 < _ - v; )
                g = Ko(g), _--;
              for (; v--; ) {
                if (h === g || g !== null && h === g.alternate)
                  break t;
                h = Ko(h), g = Ko(g);
              }
              h = null;
            }
          else
            h = null;
          p !== null && Km(f, d, p, h, !1), m !== null && y !== null && Km(f, y, m, h, !0);
        }
      }
      e: {
        if (d = u ? ul(u) : window, p = d.nodeName && d.nodeName.toLowerCase(), p === "select" || p === "input" && d.type === "file")
          var T = ik;
        else if (Vm(d))
          if (wy)
            T = sk;
          else {
            T = lk;
            var x = ok;
          }
        else
          (p = d.nodeName) && p.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (T = ak);
        if (T && (T = T(t, u))) {
          _y(f, T, n, c);
          break e;
        }
        x && x(t, d, u), t === "focusout" && (x = d._wrapperState) && x.controlled && d.type === "number" && Qd(d, "number", d.value);
      }
      switch (x = u ? ul(u) : window, t) {
        case "focusin":
          (Vm(x) || x.contentEditable === "true") && (al = x, ah = u, ja = null);
          break;
        case "focusout":
          ja = ah = al = null;
          break;
        case "mousedown":
          sh = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          sh = !1, Gm(f, n, c);
          break;
        case "selectionchange":
          if (fk)
            break;
        case "keydown":
        case "keyup":
          Gm(f, n, c);
      }
      var k;
      if (Hp)
        e: {
          switch (t) {
            case "compositionstart":
              var b = "onCompositionStart";
              break e;
            case "compositionend":
              b = "onCompositionEnd";
              break e;
            case "compositionupdate":
              b = "onCompositionUpdate";
              break e;
          }
          b = void 0;
        }
      else
        ll ? vy(t, n) && (b = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
      b && (gy && n.locale !== "ko" && (ll || b !== "onCompositionStart" ? b === "onCompositionEnd" && ll && (k = my()) : (Mi = c, Bp = "value" in Mi ? Mi.value : Mi.textContent, ll = !0)), x = pc(u, b), 0 < x.length && (b = new $m(b, t, null, n, c), f.push({ event: b, listeners: x }), k ? b.data = k : (k = yy(n), k !== null && (b.data = k)))), (k = JS ? ek(t, n) : tk(t, n)) && (u = pc(u, "onBeforeInput"), 0 < u.length && (c = new $m("onBeforeInput", "beforeinput", null, n, c), f.push({ event: c, listeners: u }), c.data = k));
    }
    My(f, e);
  });
}
function ms(t, e, n) {
  return { instance: t, listener: e, currentTarget: n };
}
function pc(t, e) {
  for (var n = e + "Capture", r = []; t !== null; ) {
    var i = t, o = i.stateNode;
    i.tag === 5 && o !== null && (i = o, o = ss(t, n), o != null && r.unshift(ms(t, o, i)), o = ss(t, e), o != null && r.push(ms(t, o, i))), t = t.return;
  }
  return r;
}
function Ko(t) {
  if (t === null)
    return null;
  do
    t = t.return;
  while (t && t.tag !== 5);
  return t || null;
}
function Km(t, e, n, r, i) {
  for (var o = e._reactName, l = []; n !== null && n !== r; ) {
    var a = n, s = a.alternate, u = a.stateNode;
    if (s !== null && s === r)
      break;
    a.tag === 5 && u !== null && (a = u, i ? (s = ss(n, o), s != null && l.unshift(ms(n, s, a))) : i || (s = ss(n, o), s != null && l.push(ms(n, s, a)))), n = n.return;
  }
  l.length !== 0 && t.push({ event: e, listeners: l });
}
var mk = /\r\n?/g, gk = /\u0000|\uFFFD/g;
function Zm(t) {
  return (typeof t == "string" ? t : "" + t).replace(mk, `
`).replace(gk, "");
}
function uu(t, e, n) {
  if (e = Zm(e), Zm(t) !== e && n)
    throw Error(F(425));
}
function mc() {
}
var uh = null, ch = null;
function fh(t, e) {
  return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
}
var dh = typeof setTimeout == "function" ? setTimeout : void 0, vk = typeof clearTimeout == "function" ? clearTimeout : void 0, Jm = typeof Promise == "function" ? Promise : void 0, yk = typeof queueMicrotask == "function" ? queueMicrotask : typeof Jm < "u" ? function(t) {
  return Jm.resolve(null).then(t).catch(_k);
} : dh;
function _k(t) {
  setTimeout(function() {
    throw t;
  });
}
function nd(t, e) {
  var n = e, r = 0;
  do {
    var i = n.nextSibling;
    if (t.removeChild(n), i && i.nodeType === 8)
      if (n = i.data, n === "/$") {
        if (r === 0) {
          t.removeChild(i), fs(e);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = i;
  } while (n);
  fs(e);
}
function Bi(t) {
  for (; t != null; t = t.nextSibling) {
    var e = t.nodeType;
    if (e === 1 || e === 3)
      break;
    if (e === 8) {
      if (e = t.data, e === "$" || e === "$!" || e === "$?")
        break;
      if (e === "/$")
        return null;
    }
  }
  return t;
}
function eg(t) {
  t = t.previousSibling;
  for (var e = 0; t; ) {
    if (t.nodeType === 8) {
      var n = t.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (e === 0)
          return t;
        e--;
      } else
        n === "/$" && e++;
    }
    t = t.previousSibling;
  }
  return null;
}
var Jl = Math.random().toString(36).slice(2), $r = "__reactFiber$" + Jl, gs = "__reactProps$" + Jl, hi = "__reactContainer$" + Jl, hh = "__reactEvents$" + Jl, wk = "__reactListeners$" + Jl, xk = "__reactHandles$" + Jl;
function vo(t) {
  var e = t[$r];
  if (e)
    return e;
  for (var n = t.parentNode; n; ) {
    if (e = n[hi] || n[$r]) {
      if (n = e.alternate, e.child !== null || n !== null && n.child !== null)
        for (t = eg(t); t !== null; ) {
          if (n = t[$r])
            return n;
          t = eg(t);
        }
      return e;
    }
    t = n, n = t.parentNode;
  }
  return null;
}
function Vs(t) {
  return t = t[$r] || t[hi], !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t;
}
function ul(t) {
  if (t.tag === 5 || t.tag === 6)
    return t.stateNode;
  throw Error(F(33));
}
function rf(t) {
  return t[gs] || null;
}
var ph = [], cl = -1;
function ro(t) {
  return { current: t };
}
function Ve(t) {
  0 > cl || (t.current = ph[cl], ph[cl] = null, cl--);
}
function Fe(t, e) {
  cl++, ph[cl] = t.current, t.current = e;
}
var Zi = {}, Gt = ro(Zi), xn = ro(!1), No = Zi;
function jl(t, e) {
  var n = t.type.contextTypes;
  if (!n)
    return Zi;
  var r = t.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {}, o;
  for (o in n)
    i[o] = e[o];
  return r && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = e, t.__reactInternalMemoizedMaskedChildContext = i), i;
}
function Sn(t) {
  return t = t.childContextTypes, t != null;
}
function gc() {
  Ve(xn), Ve(Gt);
}
function tg(t, e, n) {
  if (Gt.current !== Zi)
    throw Error(F(168));
  Fe(Gt, e), Fe(xn, n);
}
function Dy(t, e, n) {
  var r = t.stateNode;
  if (e = e.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var i in r)
    if (!(i in e))
      throw Error(F(108, oS(t) || "Unknown", i));
  return nt({}, n, r);
}
function vc(t) {
  return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || Zi, No = Gt.current, Fe(Gt, t), Fe(xn, xn.current), !0;
}
function ng(t, e, n) {
  var r = t.stateNode;
  if (!r)
    throw Error(F(169));
  n ? (t = Dy(t, e, No), r.__reactInternalMemoizedMergedChildContext = t, Ve(xn), Ve(Gt), Fe(Gt, t)) : Ve(xn), Fe(xn, n);
}
var ri = null, of = !1, rd = !1;
function Ay(t) {
  ri === null ? ri = [t] : ri.push(t);
}
function Sk(t) {
  of = !0, Ay(t);
}
function io() {
  if (!rd && ri !== null) {
    rd = !0;
    var t = 0, e = De;
    try {
      var n = ri;
      for (De = 1; t < n.length; t++) {
        var r = n[t];
        do
          r = r(!0);
        while (r !== null);
      }
      ri = null, of = !1;
    } catch (i) {
      throw ri !== null && (ri = ri.slice(t + 1)), iy(jp, io), i;
    } finally {
      De = e, rd = !1;
    }
  }
  return null;
}
var fl = [], dl = 0, yc = null, _c = 0, Zn = [], Jn = 0, Io = null, li = 1, ai = "";
function co(t, e) {
  fl[dl++] = _c, fl[dl++] = yc, yc = t, _c = e;
}
function Ly(t, e, n) {
  Zn[Jn++] = li, Zn[Jn++] = ai, Zn[Jn++] = Io, Io = t;
  var r = li;
  t = ai;
  var i = 32 - Tr(r) - 1;
  r &= ~(1 << i), n += 1;
  var o = 32 - Tr(e) + i;
  if (30 < o) {
    var l = i - i % 5;
    o = (r & (1 << l) - 1).toString(32), r >>= l, i -= l, li = 1 << 32 - Tr(e) + i | n << i | r, ai = o + t;
  } else
    li = 1 << o | n << i | r, ai = t;
}
function Xp(t) {
  t.return !== null && (co(t, 1), Ly(t, 1, 0));
}
function Gp(t) {
  for (; t === yc; )
    yc = fl[--dl], fl[dl] = null, _c = fl[--dl], fl[dl] = null;
  for (; t === Io; )
    Io = Zn[--Jn], Zn[Jn] = null, ai = Zn[--Jn], Zn[Jn] = null, li = Zn[--Jn], Zn[Jn] = null;
}
var Fn = null, $n = null, Qe = !1, Sr = null;
function Ny(t, e) {
  var n = ir(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = e, n.return = t, e = t.deletions, e === null ? (t.deletions = [n], t.flags |= 16) : e.push(n);
}
function rg(t, e) {
  switch (t.tag) {
    case 5:
      var n = t.type;
      return e = e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase() ? null : e, e !== null ? (t.stateNode = e, Fn = t, $n = Bi(e.firstChild), !0) : !1;
    case 6:
      return e = t.pendingProps === "" || e.nodeType !== 3 ? null : e, e !== null ? (t.stateNode = e, Fn = t, $n = null, !0) : !1;
    case 13:
      return e = e.nodeType !== 8 ? null : e, e !== null ? (n = Io !== null ? { id: li, overflow: ai } : null, t.memoizedState = { dehydrated: e, treeContext: n, retryLane: 1073741824 }, n = ir(18, null, null, 0), n.stateNode = e, n.return = t, t.child = n, Fn = t, $n = null, !0) : !1;
    default:
      return !1;
  }
}
function mh(t) {
  return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function gh(t) {
  if (Qe) {
    var e = $n;
    if (e) {
      var n = e;
      if (!rg(t, e)) {
        if (mh(t))
          throw Error(F(418));
        e = Bi(n.nextSibling);
        var r = Fn;
        e && rg(t, e) ? Ny(r, n) : (t.flags = t.flags & -4097 | 2, Qe = !1, Fn = t);
      }
    } else {
      if (mh(t))
        throw Error(F(418));
      t.flags = t.flags & -4097 | 2, Qe = !1, Fn = t;
    }
  }
}
function ig(t) {
  for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
    t = t.return;
  Fn = t;
}
function cu(t) {
  if (t !== Fn)
    return !1;
  if (!Qe)
    return ig(t), Qe = !0, !1;
  var e;
  if ((e = t.tag !== 3) && !(e = t.tag !== 5) && (e = t.type, e = e !== "head" && e !== "body" && !fh(t.type, t.memoizedProps)), e && (e = $n)) {
    if (mh(t))
      throw Iy(), Error(F(418));
    for (; e; )
      Ny(t, e), e = Bi(e.nextSibling);
  }
  if (ig(t), t.tag === 13) {
    if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t)
      throw Error(F(317));
    e: {
      for (t = t.nextSibling, e = 0; t; ) {
        if (t.nodeType === 8) {
          var n = t.data;
          if (n === "/$") {
            if (e === 0) {
              $n = Bi(t.nextSibling);
              break e;
            }
            e--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || e++;
        }
        t = t.nextSibling;
      }
      $n = null;
    }
  } else
    $n = Fn ? Bi(t.stateNode.nextSibling) : null;
  return !0;
}
function Iy() {
  for (var t = $n; t; )
    t = Bi(t.nextSibling);
}
function $l() {
  $n = Fn = null, Qe = !1;
}
function Qp(t) {
  Sr === null ? Sr = [t] : Sr.push(t);
}
var kk = _i.ReactCurrentBatchConfig;
function _r(t, e) {
  if (t && t.defaultProps) {
    e = nt({}, e), t = t.defaultProps;
    for (var n in t)
      e[n] === void 0 && (e[n] = t[n]);
    return e;
  }
  return e;
}
var wc = ro(null), xc = null, hl = null, qp = null;
function Kp() {
  qp = hl = xc = null;
}
function Zp(t) {
  var e = wc.current;
  Ve(wc), t._currentValue = e;
}
function vh(t, e, n) {
  for (; t !== null; ) {
    var r = t.alternate;
    if ((t.childLanes & e) !== e ? (t.childLanes |= e, r !== null && (r.childLanes |= e)) : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e), t === n)
      break;
    t = t.return;
  }
}
function bl(t, e) {
  xc = t, qp = hl = null, t = t.dependencies, t !== null && t.firstContext !== null && (t.lanes & e && (wn = !0), t.firstContext = null);
}
function cr(t) {
  var e = t._currentValue;
  if (qp !== t)
    if (t = { context: t, memoizedValue: e, next: null }, hl === null) {
      if (xc === null)
        throw Error(F(308));
      hl = t, xc.dependencies = { lanes: 0, firstContext: t };
    } else
      hl = hl.next = t;
  return e;
}
var yo = null;
function Jp(t) {
  yo === null ? yo = [t] : yo.push(t);
}
function zy(t, e, n, r) {
  var i = e.interleaved;
  return i === null ? (n.next = n, Jp(e)) : (n.next = i.next, i.next = n), e.interleaved = n, pi(t, r);
}
function pi(t, e) {
  t.lanes |= e;
  var n = t.alternate;
  for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null; )
    t.childLanes |= e, n = t.alternate, n !== null && (n.childLanes |= e), n = t, t = t.return;
  return n.tag === 3 ? n.stateNode : null;
}
var bi = !1;
function e0(t) {
  t.updateQueue = { baseState: t.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function jy(t, e) {
  t = t.updateQueue, e.updateQueue === t && (e.updateQueue = { baseState: t.baseState, firstBaseUpdate: t.firstBaseUpdate, lastBaseUpdate: t.lastBaseUpdate, shared: t.shared, effects: t.effects });
}
function ci(t, e) {
  return { eventTime: t, lane: e, tag: 0, payload: null, callback: null, next: null };
}
function Vi(t, e, n) {
  var r = t.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, Re & 2) {
    var i = r.pending;
    return i === null ? e.next = e : (e.next = i.next, i.next = e), r.pending = e, pi(t, n);
  }
  return i = r.interleaved, i === null ? (e.next = e, Jp(r)) : (e.next = i.next, i.next = e), r.interleaved = e, pi(t, n);
}
function Bu(t, e, n) {
  if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194240) !== 0)) {
    var r = e.lanes;
    r &= t.pendingLanes, n |= r, e.lanes = n, $p(t, n);
  }
}
function og(t, e) {
  var n = t.updateQueue, r = t.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var i = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var l = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? i = o = l : o = o.next = l, n = n.next;
      } while (n !== null);
      o === null ? i = o = e : o = o.next = e;
    } else
      i = o = e;
    n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, t.updateQueue = n;
    return;
  }
  t = n.lastBaseUpdate, t === null ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e;
}
function Sc(t, e, n, r) {
  var i = t.updateQueue;
  bi = !1;
  var o = i.firstBaseUpdate, l = i.lastBaseUpdate, a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var s = a, u = s.next;
    s.next = null, l === null ? o = u : l.next = u, l = s;
    var c = t.alternate;
    c !== null && (c = c.updateQueue, a = c.lastBaseUpdate, a !== l && (a === null ? c.firstBaseUpdate = u : a.next = u, c.lastBaseUpdate = s));
  }
  if (o !== null) {
    var f = i.baseState;
    l = 0, c = u = s = null, a = o;
    do {
      var d = a.lane, p = a.eventTime;
      if ((r & d) === d) {
        c !== null && (c = c.next = {
          eventTime: p,
          lane: 0,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        });
        e: {
          var m = t, h = a;
          switch (d = e, p = n, h.tag) {
            case 1:
              if (m = h.payload, typeof m == "function") {
                f = m.call(p, f, d);
                break e;
              }
              f = m;
              break e;
            case 3:
              m.flags = m.flags & -65537 | 128;
            case 0:
              if (m = h.payload, d = typeof m == "function" ? m.call(p, f, d) : m, d == null)
                break e;
              f = nt({}, f, d);
              break e;
            case 2:
              bi = !0;
          }
        }
        a.callback !== null && a.lane !== 0 && (t.flags |= 64, d = i.effects, d === null ? i.effects = [a] : d.push(a));
      } else
        p = { eventTime: p, lane: d, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, c === null ? (u = c = p, s = f) : c = c.next = p, l |= d;
      if (a = a.next, a === null) {
        if (a = i.shared.pending, a === null)
          break;
        d = a, a = d.next, d.next = null, i.lastBaseUpdate = d, i.shared.pending = null;
      }
    } while (1);
    if (c === null && (s = f), i.baseState = s, i.firstBaseUpdate = u, i.lastBaseUpdate = c, e = i.shared.interleaved, e !== null) {
      i = e;
      do
        l |= i.lane, i = i.next;
      while (i !== e);
    } else
      o === null && (i.shared.lanes = 0);
    jo |= l, t.lanes = l, t.memoizedState = f;
  }
}
function lg(t, e, n) {
  if (t = e.effects, e.effects = null, t !== null)
    for (e = 0; e < t.length; e++) {
      var r = t[e], i = r.callback;
      if (i !== null) {
        if (r.callback = null, r = n, typeof i != "function")
          throw Error(F(191, i));
        i.call(r);
      }
    }
}
var $y = new zv.Component().refs;
function yh(t, e, n, r) {
  e = t.memoizedState, n = n(r, e), n = n == null ? e : nt({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
}
var lf = { isMounted: function(t) {
  return (t = t._reactInternals) ? Go(t) === t : !1;
}, enqueueSetState: function(t, e, n) {
  t = t._reactInternals;
  var r = an(), i = Hi(t), o = ci(r, i);
  o.payload = e, n != null && (o.callback = n), e = Vi(t, o, i), e !== null && (br(e, t, i, r), Bu(e, t, i));
}, enqueueReplaceState: function(t, e, n) {
  t = t._reactInternals;
  var r = an(), i = Hi(t), o = ci(r, i);
  o.tag = 1, o.payload = e, n != null && (o.callback = n), e = Vi(t, o, i), e !== null && (br(e, t, i, r), Bu(e, t, i));
}, enqueueForceUpdate: function(t, e) {
  t = t._reactInternals;
  var n = an(), r = Hi(t), i = ci(n, r);
  i.tag = 2, e != null && (i.callback = e), e = Vi(t, i, r), e !== null && (br(e, t, r, n), Bu(e, t, r));
} };
function ag(t, e, n, r, i, o, l) {
  return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(r, o, l) : e.prototype && e.prototype.isPureReactComponent ? !hs(n, r) || !hs(i, o) : !0;
}
function Fy(t, e, n) {
  var r = !1, i = Zi, o = e.contextType;
  return typeof o == "object" && o !== null ? o = cr(o) : (i = Sn(e) ? No : Gt.current, r = e.contextTypes, o = (r = r != null) ? jl(t, i) : Zi), e = new e(n, o), t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null, e.updater = lf, t.stateNode = e, e._reactInternals = t, r && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = i, t.__reactInternalMemoizedMaskedChildContext = o), e;
}
function sg(t, e, n, r) {
  t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, r), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, r), e.state !== t && lf.enqueueReplaceState(e, e.state, null);
}
function _h(t, e, n, r) {
  var i = t.stateNode;
  i.props = n, i.state = t.memoizedState, i.refs = $y, e0(t);
  var o = e.contextType;
  typeof o == "object" && o !== null ? i.context = cr(o) : (o = Sn(e) ? No : Gt.current, i.context = jl(t, o)), i.state = t.memoizedState, o = e.getDerivedStateFromProps, typeof o == "function" && (yh(t, e, o, n), i.state = t.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (e = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), e !== i.state && lf.enqueueReplaceState(i, i.state, null), Sc(t, n, i, r), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308);
}
function ua(t, e, n) {
  if (t = n.ref, t !== null && typeof t != "function" && typeof t != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error(F(309));
        var r = n.stateNode;
      }
      if (!r)
        throw Error(F(147, t));
      var i = r, o = "" + t;
      return e !== null && e.ref !== null && typeof e.ref == "function" && e.ref._stringRef === o ? e.ref : (e = function(l) {
        var a = i.refs;
        a === $y && (a = i.refs = {}), l === null ? delete a[o] : a[o] = l;
      }, e._stringRef = o, e);
    }
    if (typeof t != "string")
      throw Error(F(284));
    if (!n._owner)
      throw Error(F(290, t));
  }
  return t;
}
function fu(t, e) {
  throw t = Object.prototype.toString.call(e), Error(F(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t));
}
function ug(t) {
  var e = t._init;
  return e(t._payload);
}
function Uy(t) {
  function e(g, v) {
    if (t) {
      var _ = g.deletions;
      _ === null ? (g.deletions = [v], g.flags |= 16) : _.push(v);
    }
  }
  function n(g, v) {
    if (!t)
      return null;
    for (; v !== null; )
      e(g, v), v = v.sibling;
    return null;
  }
  function r(g, v) {
    for (g = /* @__PURE__ */ new Map(); v !== null; )
      v.key !== null ? g.set(v.key, v) : g.set(v.index, v), v = v.sibling;
    return g;
  }
  function i(g, v) {
    return g = Yi(g, v), g.index = 0, g.sibling = null, g;
  }
  function o(g, v, _) {
    return g.index = _, t ? (_ = g.alternate, _ !== null ? (_ = _.index, _ < v ? (g.flags |= 2, v) : _) : (g.flags |= 2, v)) : (g.flags |= 1048576, v);
  }
  function l(g) {
    return t && g.alternate === null && (g.flags |= 2), g;
  }
  function a(g, v, _, w) {
    return v === null || v.tag !== 6 ? (v = cd(_, g.mode, w), v.return = g, v) : (v = i(v, _), v.return = g, v);
  }
  function s(g, v, _, w) {
    var T = _.type;
    return T === ol ? c(g, v, _.props.children, w, _.key) : v !== null && (v.elementType === T || typeof T == "object" && T !== null && T.$$typeof === Ti && ug(T) === v.type) ? (w = i(v, _.props), w.ref = ua(g, v, _), w.return = g, w) : (w = Gu(_.type, _.key, _.props, null, g.mode, w), w.ref = ua(g, v, _), w.return = g, w);
  }
  function u(g, v, _, w) {
    return v === null || v.tag !== 4 || v.stateNode.containerInfo !== _.containerInfo || v.stateNode.implementation !== _.implementation ? (v = fd(_, g.mode, w), v.return = g, v) : (v = i(v, _.children || []), v.return = g, v);
  }
  function c(g, v, _, w, T) {
    return v === null || v.tag !== 7 ? (v = To(_, g.mode, w, T), v.return = g, v) : (v = i(v, _), v.return = g, v);
  }
  function f(g, v, _) {
    if (typeof v == "string" && v !== "" || typeof v == "number")
      return v = cd("" + v, g.mode, _), v.return = g, v;
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case eu:
          return _ = Gu(v.type, v.key, v.props, null, g.mode, _), _.ref = ua(g, null, v), _.return = g, _;
        case il:
          return v = fd(v, g.mode, _), v.return = g, v;
        case Ti:
          var w = v._init;
          return f(g, w(v._payload), _);
      }
      if (Ea(v) || ia(v))
        return v = To(v, g.mode, _, null), v.return = g, v;
      fu(g, v);
    }
    return null;
  }
  function d(g, v, _, w) {
    var T = v !== null ? v.key : null;
    if (typeof _ == "string" && _ !== "" || typeof _ == "number")
      return T !== null ? null : a(g, v, "" + _, w);
    if (typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case eu:
          return _.key === T ? s(g, v, _, w) : null;
        case il:
          return _.key === T ? u(g, v, _, w) : null;
        case Ti:
          return T = _._init, d(
            g,
            v,
            T(_._payload),
            w
          );
      }
      if (Ea(_) || ia(_))
        return T !== null ? null : c(g, v, _, w, null);
      fu(g, _);
    }
    return null;
  }
  function p(g, v, _, w, T) {
    if (typeof w == "string" && w !== "" || typeof w == "number")
      return g = g.get(_) || null, a(v, g, "" + w, T);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case eu:
          return g = g.get(w.key === null ? _ : w.key) || null, s(v, g, w, T);
        case il:
          return g = g.get(w.key === null ? _ : w.key) || null, u(v, g, w, T);
        case Ti:
          var x = w._init;
          return p(g, v, _, x(w._payload), T);
      }
      if (Ea(w) || ia(w))
        return g = g.get(_) || null, c(v, g, w, T, null);
      fu(v, w);
    }
    return null;
  }
  function m(g, v, _, w) {
    for (var T = null, x = null, k = v, b = v = 0, R = null; k !== null && b < _.length; b++) {
      k.index > b ? (R = k, k = null) : R = k.sibling;
      var M = d(g, k, _[b], w);
      if (M === null) {
        k === null && (k = R);
        break;
      }
      t && k && M.alternate === null && e(g, k), v = o(M, v, b), x === null ? T = M : x.sibling = M, x = M, k = R;
    }
    if (b === _.length)
      return n(g, k), Qe && co(g, b), T;
    if (k === null) {
      for (; b < _.length; b++)
        k = f(g, _[b], w), k !== null && (v = o(k, v, b), x === null ? T = k : x.sibling = k, x = k);
      return Qe && co(g, b), T;
    }
    for (k = r(g, k); b < _.length; b++)
      R = p(k, g, b, _[b], w), R !== null && (t && R.alternate !== null && k.delete(R.key === null ? b : R.key), v = o(R, v, b), x === null ? T = R : x.sibling = R, x = R);
    return t && k.forEach(function(B) {
      return e(g, B);
    }), Qe && co(g, b), T;
  }
  function h(g, v, _, w) {
    var T = ia(_);
    if (typeof T != "function")
      throw Error(F(150));
    if (_ = T.call(_), _ == null)
      throw Error(F(151));
    for (var x = T = null, k = v, b = v = 0, R = null, M = _.next(); k !== null && !M.done; b++, M = _.next()) {
      k.index > b ? (R = k, k = null) : R = k.sibling;
      var B = d(g, k, M.value, w);
      if (B === null) {
        k === null && (k = R);
        break;
      }
      t && k && B.alternate === null && e(g, k), v = o(B, v, b), x === null ? T = B : x.sibling = B, x = B, k = R;
    }
    if (M.done)
      return n(
        g,
        k
      ), Qe && co(g, b), T;
    if (k === null) {
      for (; !M.done; b++, M = _.next())
        M = f(g, M.value, w), M !== null && (v = o(M, v, b), x === null ? T = M : x.sibling = M, x = M);
      return Qe && co(g, b), T;
    }
    for (k = r(g, k); !M.done; b++, M = _.next())
      M = p(k, g, b, M.value, w), M !== null && (t && M.alternate !== null && k.delete(M.key === null ? b : M.key), v = o(M, v, b), x === null ? T = M : x.sibling = M, x = M);
    return t && k.forEach(function(I) {
      return e(g, I);
    }), Qe && co(g, b), T;
  }
  function y(g, v, _, w) {
    if (typeof _ == "object" && _ !== null && _.type === ol && _.key === null && (_ = _.props.children), typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case eu:
          e: {
            for (var T = _.key, x = v; x !== null; ) {
              if (x.key === T) {
                if (T = _.type, T === ol) {
                  if (x.tag === 7) {
                    n(g, x.sibling), v = i(x, _.props.children), v.return = g, g = v;
                    break e;
                  }
                } else if (x.elementType === T || typeof T == "object" && T !== null && T.$$typeof === Ti && ug(T) === x.type) {
                  n(g, x.sibling), v = i(x, _.props), v.ref = ua(g, x, _), v.return = g, g = v;
                  break e;
                }
                n(g, x);
                break;
              } else
                e(g, x);
              x = x.sibling;
            }
            _.type === ol ? (v = To(_.props.children, g.mode, w, _.key), v.return = g, g = v) : (w = Gu(_.type, _.key, _.props, null, g.mode, w), w.ref = ua(g, v, _), w.return = g, g = w);
          }
          return l(g);
        case il:
          e: {
            for (x = _.key; v !== null; ) {
              if (v.key === x)
                if (v.tag === 4 && v.stateNode.containerInfo === _.containerInfo && v.stateNode.implementation === _.implementation) {
                  n(g, v.sibling), v = i(v, _.children || []), v.return = g, g = v;
                  break e;
                } else {
                  n(g, v);
                  break;
                }
              else
                e(g, v);
              v = v.sibling;
            }
            v = fd(_, g.mode, w), v.return = g, g = v;
          }
          return l(g);
        case Ti:
          return x = _._init, y(g, v, x(_._payload), w);
      }
      if (Ea(_))
        return m(g, v, _, w);
      if (ia(_))
        return h(g, v, _, w);
      fu(g, _);
    }
    return typeof _ == "string" && _ !== "" || typeof _ == "number" ? (_ = "" + _, v !== null && v.tag === 6 ? (n(g, v.sibling), v = i(v, _), v.return = g, g = v) : (n(g, v), v = cd(_, g.mode, w), v.return = g, g = v), l(g)) : n(g, v);
  }
  return y;
}
var Fl = Uy(!0), By = Uy(!1), Ws = {}, Wr = ro(Ws), vs = ro(Ws), ys = ro(Ws);
function _o(t) {
  if (t === Ws)
    throw Error(F(174));
  return t;
}
function t0(t, e) {
  switch (Fe(ys, e), Fe(vs, t), Fe(Wr, Ws), t = e.nodeType, t) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : Kd(null, "");
      break;
    default:
      t = t === 8 ? e.parentNode : e, e = t.namespaceURI || null, t = t.tagName, e = Kd(e, t);
  }
  Ve(Wr), Fe(Wr, e);
}
function Ul() {
  Ve(Wr), Ve(vs), Ve(ys);
}
function Vy(t) {
  _o(ys.current);
  var e = _o(Wr.current), n = Kd(e, t.type);
  e !== n && (Fe(vs, t), Fe(Wr, n));
}
function n0(t) {
  vs.current === t && (Ve(Wr), Ve(vs));
}
var Ze = ro(0);
function kc(t) {
  for (var e = t; e !== null; ) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!"))
        return e;
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128)
        return e;
    } else if (e.child !== null) {
      e.child.return = e, e = e.child;
      continue;
    }
    if (e === t)
      break;
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === t)
        return null;
      e = e.return;
    }
    e.sibling.return = e.return, e = e.sibling;
  }
  return null;
}
var id = [];
function r0() {
  for (var t = 0; t < id.length; t++)
    id[t]._workInProgressVersionPrimary = null;
  id.length = 0;
}
var Vu = _i.ReactCurrentDispatcher, od = _i.ReactCurrentBatchConfig, zo = 0, tt = null, wt = null, Ct = null, Ec = !1, $a = !1, _s = 0, Ek = 0;
function Ut() {
  throw Error(F(321));
}
function i0(t, e) {
  if (e === null)
    return !1;
  for (var n = 0; n < e.length && n < t.length; n++)
    if (!Rr(t[n], e[n]))
      return !1;
  return !0;
}
function o0(t, e, n, r, i, o) {
  if (zo = o, tt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, Vu.current = t === null || t.memoizedState === null ? Pk : Rk, t = n(r, i), $a) {
    o = 0;
    do {
      if ($a = !1, _s = 0, 25 <= o)
        throw Error(F(301));
      o += 1, Ct = wt = null, e.updateQueue = null, Vu.current = Mk, t = n(r, i);
    } while ($a);
  }
  if (Vu.current = Cc, e = wt !== null && wt.next !== null, zo = 0, Ct = wt = tt = null, Ec = !1, e)
    throw Error(F(300));
  return t;
}
function l0() {
  var t = _s !== 0;
  return _s = 0, t;
}
function Ir() {
  var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Ct === null ? tt.memoizedState = Ct = t : Ct = Ct.next = t, Ct;
}
function fr() {
  if (wt === null) {
    var t = tt.alternate;
    t = t !== null ? t.memoizedState : null;
  } else
    t = wt.next;
  var e = Ct === null ? tt.memoizedState : Ct.next;
  if (e !== null)
    Ct = e, wt = t;
  else {
    if (t === null)
      throw Error(F(310));
    wt = t, t = { memoizedState: wt.memoizedState, baseState: wt.baseState, baseQueue: wt.baseQueue, queue: wt.queue, next: null }, Ct === null ? tt.memoizedState = Ct = t : Ct = Ct.next = t;
  }
  return Ct;
}
function ws(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function ld(t) {
  var e = fr(), n = e.queue;
  if (n === null)
    throw Error(F(311));
  n.lastRenderedReducer = t;
  var r = wt, i = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var l = i.next;
      i.next = o.next, o.next = l;
    }
    r.baseQueue = i = o, n.pending = null;
  }
  if (i !== null) {
    o = i.next, r = r.baseState;
    var a = l = null, s = null, u = o;
    do {
      var c = u.lane;
      if ((zo & c) === c)
        s !== null && (s = s.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : t(r, u.action);
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        s === null ? (a = s = f, l = r) : s = s.next = f, tt.lanes |= c, jo |= c;
      }
      u = u.next;
    } while (u !== null && u !== o);
    s === null ? l = r : s.next = a, Rr(r, e.memoizedState) || (wn = !0), e.memoizedState = r, e.baseState = l, e.baseQueue = s, n.lastRenderedState = r;
  }
  if (t = n.interleaved, t !== null) {
    i = t;
    do
      o = i.lane, tt.lanes |= o, jo |= o, i = i.next;
    while (i !== t);
  } else
    i === null && (n.lanes = 0);
  return [e.memoizedState, n.dispatch];
}
function ad(t) {
  var e = fr(), n = e.queue;
  if (n === null)
    throw Error(F(311));
  n.lastRenderedReducer = t;
  var r = n.dispatch, i = n.pending, o = e.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = i = i.next;
    do
      o = t(o, l.action), l = l.next;
    while (l !== i);
    Rr(o, e.memoizedState) || (wn = !0), e.memoizedState = o, e.baseQueue === null && (e.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function Wy() {
}
function Hy(t, e) {
  var n = tt, r = fr(), i = e(), o = !Rr(r.memoizedState, i);
  if (o && (r.memoizedState = i, wn = !0), r = r.queue, a0(Gy.bind(null, n, r, t), [t]), r.getSnapshot !== e || o || Ct !== null && Ct.memoizedState.tag & 1) {
    if (n.flags |= 2048, xs(9, Xy.bind(null, n, r, i, e), void 0, null), Tt === null)
      throw Error(F(349));
    zo & 30 || Yy(n, e, i);
  }
  return i;
}
function Yy(t, e, n) {
  t.flags |= 16384, t = { getSnapshot: e, value: n }, e = tt.updateQueue, e === null ? (e = { lastEffect: null, stores: null }, tt.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t));
}
function Xy(t, e, n, r) {
  e.value = n, e.getSnapshot = r, Qy(e) && qy(t);
}
function Gy(t, e, n) {
  return n(function() {
    Qy(e) && qy(t);
  });
}
function Qy(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var n = e();
    return !Rr(t, n);
  } catch {
    return !0;
  }
}
function qy(t) {
  var e = pi(t, 1);
  e !== null && br(e, t, 1, -1);
}
function cg(t) {
  var e = Ir();
  return typeof t == "function" && (t = t()), e.memoizedState = e.baseState = t, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ws, lastRenderedState: t }, e.queue = t, t = t.dispatch = bk.bind(null, tt, t), [e.memoizedState, t];
}
function xs(t, e, n, r) {
  return t = { tag: t, create: e, destroy: n, deps: r, next: null }, e = tt.updateQueue, e === null ? (e = { lastEffect: null, stores: null }, tt.updateQueue = e, e.lastEffect = t.next = t) : (n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (r = n.next, n.next = t, t.next = r, e.lastEffect = t)), t;
}
function Ky() {
  return fr().memoizedState;
}
function Wu(t, e, n, r) {
  var i = Ir();
  tt.flags |= t, i.memoizedState = xs(1 | e, n, void 0, r === void 0 ? null : r);
}
function af(t, e, n, r) {
  var i = fr();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (wt !== null) {
    var l = wt.memoizedState;
    if (o = l.destroy, r !== null && i0(r, l.deps)) {
      i.memoizedState = xs(e, n, o, r);
      return;
    }
  }
  tt.flags |= t, i.memoizedState = xs(1 | e, n, o, r);
}
function fg(t, e) {
  return Wu(8390656, 8, t, e);
}
function a0(t, e) {
  return af(2048, 8, t, e);
}
function Zy(t, e) {
  return af(4, 2, t, e);
}
function Jy(t, e) {
  return af(4, 4, t, e);
}
function e_(t, e) {
  if (typeof e == "function")
    return t = t(), e(t), function() {
      e(null);
    };
  if (e != null)
    return t = t(), e.current = t, function() {
      e.current = null;
    };
}
function t_(t, e, n) {
  return n = n != null ? n.concat([t]) : null, af(4, 4, e_.bind(null, e, t), n);
}
function s0() {
}
function n_(t, e) {
  var n = fr();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && i0(e, r[1]) ? r[0] : (n.memoizedState = [t, e], t);
}
function r_(t, e) {
  var n = fr();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && i0(e, r[1]) ? r[0] : (t = t(), n.memoizedState = [t, e], t);
}
function i_(t, e, n) {
  return zo & 21 ? (Rr(n, e) || (n = ay(), tt.lanes |= n, jo |= n, t.baseState = !0), e) : (t.baseState && (t.baseState = !1, wn = !0), t.memoizedState = n);
}
function Ck(t, e) {
  var n = De;
  De = n !== 0 && 4 > n ? n : 4, t(!0);
  var r = od.transition;
  od.transition = {};
  try {
    t(!1), e();
  } finally {
    De = n, od.transition = r;
  }
}
function o_() {
  return fr().memoizedState;
}
function Tk(t, e, n) {
  var r = Hi(t);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, l_(t))
    a_(e, n);
  else if (n = zy(t, e, n, r), n !== null) {
    var i = an();
    br(n, t, r, i), s_(n, e, r);
  }
}
function bk(t, e, n) {
  var r = Hi(t), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (l_(t))
    a_(e, i);
  else {
    var o = t.alternate;
    if (t.lanes === 0 && (o === null || o.lanes === 0) && (o = e.lastRenderedReducer, o !== null))
      try {
        var l = e.lastRenderedState, a = o(l, n);
        if (i.hasEagerState = !0, i.eagerState = a, Rr(a, l)) {
          var s = e.interleaved;
          s === null ? (i.next = i, Jp(e)) : (i.next = s.next, s.next = i), e.interleaved = i;
          return;
        }
      } catch {
      } finally {
      }
    n = zy(t, e, i, r), n !== null && (i = an(), br(n, t, r, i), s_(n, e, r));
  }
}
function l_(t) {
  var e = t.alternate;
  return t === tt || e !== null && e === tt;
}
function a_(t, e) {
  $a = Ec = !0;
  var n = t.pending;
  n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
}
function s_(t, e, n) {
  if (n & 4194240) {
    var r = e.lanes;
    r &= t.pendingLanes, n |= r, e.lanes = n, $p(t, n);
  }
}
var Cc = { readContext: cr, useCallback: Ut, useContext: Ut, useEffect: Ut, useImperativeHandle: Ut, useInsertionEffect: Ut, useLayoutEffect: Ut, useMemo: Ut, useReducer: Ut, useRef: Ut, useState: Ut, useDebugValue: Ut, useDeferredValue: Ut, useTransition: Ut, useMutableSource: Ut, useSyncExternalStore: Ut, useId: Ut, unstable_isNewReconciler: !1 }, Pk = { readContext: cr, useCallback: function(t, e) {
  return Ir().memoizedState = [t, e === void 0 ? null : e], t;
}, useContext: cr, useEffect: fg, useImperativeHandle: function(t, e, n) {
  return n = n != null ? n.concat([t]) : null, Wu(
    4194308,
    4,
    e_.bind(null, e, t),
    n
  );
}, useLayoutEffect: function(t, e) {
  return Wu(4194308, 4, t, e);
}, useInsertionEffect: function(t, e) {
  return Wu(4, 2, t, e);
}, useMemo: function(t, e) {
  var n = Ir();
  return e = e === void 0 ? null : e, t = t(), n.memoizedState = [t, e], t;
}, useReducer: function(t, e, n) {
  var r = Ir();
  return e = n !== void 0 ? n(e) : e, r.memoizedState = r.baseState = e, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: e }, r.queue = t, t = t.dispatch = Tk.bind(null, tt, t), [r.memoizedState, t];
}, useRef: function(t) {
  var e = Ir();
  return t = { current: t }, e.memoizedState = t;
}, useState: cg, useDebugValue: s0, useDeferredValue: function(t) {
  return Ir().memoizedState = t;
}, useTransition: function() {
  var t = cg(!1), e = t[0];
  return t = Ck.bind(null, t[1]), Ir().memoizedState = t, [e, t];
}, useMutableSource: function() {
}, useSyncExternalStore: function(t, e, n) {
  var r = tt, i = Ir();
  if (Qe) {
    if (n === void 0)
      throw Error(F(407));
    n = n();
  } else {
    if (n = e(), Tt === null)
      throw Error(F(349));
    zo & 30 || Yy(r, e, n);
  }
  i.memoizedState = n;
  var o = { value: n, getSnapshot: e };
  return i.queue = o, fg(Gy.bind(
    null,
    r,
    o,
    t
  ), [t]), r.flags |= 2048, xs(9, Xy.bind(null, r, o, n, e), void 0, null), n;
}, useId: function() {
  var t = Ir(), e = Tt.identifierPrefix;
  if (Qe) {
    var n = ai, r = li;
    n = (r & ~(1 << 32 - Tr(r) - 1)).toString(32) + n, e = ":" + e + "R" + n, n = _s++, 0 < n && (e += "H" + n.toString(32)), e += ":";
  } else
    n = Ek++, e = ":" + e + "r" + n.toString(32) + ":";
  return t.memoizedState = e;
}, unstable_isNewReconciler: !1 }, Rk = {
  readContext: cr,
  useCallback: n_,
  useContext: cr,
  useEffect: a0,
  useImperativeHandle: t_,
  useInsertionEffect: Zy,
  useLayoutEffect: Jy,
  useMemo: r_,
  useReducer: ld,
  useRef: Ky,
  useState: function() {
    return ld(ws);
  },
  useDebugValue: s0,
  useDeferredValue: function(t) {
    var e = fr();
    return i_(e, wt.memoizedState, t);
  },
  useTransition: function() {
    var t = ld(ws)[0], e = fr().memoizedState;
    return [t, e];
  },
  useMutableSource: Wy,
  useSyncExternalStore: Hy,
  useId: o_,
  unstable_isNewReconciler: !1
}, Mk = { readContext: cr, useCallback: n_, useContext: cr, useEffect: a0, useImperativeHandle: t_, useInsertionEffect: Zy, useLayoutEffect: Jy, useMemo: r_, useReducer: ad, useRef: Ky, useState: function() {
  return ad(ws);
}, useDebugValue: s0, useDeferredValue: function(t) {
  var e = fr();
  return wt === null ? e.memoizedState = t : i_(e, wt.memoizedState, t);
}, useTransition: function() {
  var t = ad(ws)[0], e = fr().memoizedState;
  return [t, e];
}, useMutableSource: Wy, useSyncExternalStore: Hy, useId: o_, unstable_isNewReconciler: !1 };
function Bl(t, e) {
  try {
    var n = "", r = e;
    do
      n += iS(r), r = r.return;
    while (r);
    var i = n;
  } catch (o) {
    i = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: t, source: e, stack: i, digest: null };
}
function sd(t, e, n) {
  return { value: t, source: null, stack: n ?? null, digest: e ?? null };
}
function wh(t, e) {
  try {
    console.error(e.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Ok = typeof WeakMap == "function" ? WeakMap : Map;
function u_(t, e, n) {
  n = ci(-1, n), n.tag = 3, n.payload = { element: null };
  var r = e.value;
  return n.callback = function() {
    bc || (bc = !0, Mh = r), wh(t, e);
  }, n;
}
function c_(t, e, n) {
  n = ci(-1, n), n.tag = 3;
  var r = t.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = e.value;
    n.payload = function() {
      return r(i);
    }, n.callback = function() {
      wh(t, e);
    };
  }
  var o = t.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    wh(t, e), typeof r != "function" && (Wi === null ? Wi = /* @__PURE__ */ new Set([this]) : Wi.add(this));
    var l = e.stack;
    this.componentDidCatch(e.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function dg(t, e, n) {
  var r = t.pingCache;
  if (r === null) {
    r = t.pingCache = new Ok();
    var i = /* @__PURE__ */ new Set();
    r.set(e, i);
  } else
    i = r.get(e), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(e, i));
  i.has(n) || (i.add(n), t = Hk.bind(null, t, e, n), e.then(t, t));
}
function hg(t) {
  do {
    var e;
    if ((e = t.tag === 13) && (e = t.memoizedState, e = e !== null ? e.dehydrated !== null : !0), e)
      return t;
    t = t.return;
  } while (t !== null);
  return null;
}
function pg(t, e, n, r, i) {
  return t.mode & 1 ? (t.flags |= 65536, t.lanes = i, t) : (t === e ? t.flags |= 65536 : (t.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (e = ci(-1, 1), e.tag = 2, Vi(n, e, 1))), n.lanes |= 1), t);
}
var Dk = _i.ReactCurrentOwner, wn = !1;
function Jt(t, e, n, r) {
  e.child = t === null ? By(e, null, n, r) : Fl(e, t.child, n, r);
}
function mg(t, e, n, r, i) {
  n = n.render;
  var o = e.ref;
  return bl(e, i), r = o0(t, e, n, r, o, i), n = l0(), t !== null && !wn ? (e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~i, mi(t, e, i)) : (Qe && n && Xp(e), e.flags |= 1, Jt(t, e, r, i), e.child);
}
function gg(t, e, n, r, i) {
  if (t === null) {
    var o = n.type;
    return typeof o == "function" && !g0(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (e.tag = 15, e.type = o, f_(t, e, o, r, i)) : (t = Gu(n.type, null, r, e, e.mode, i), t.ref = e.ref, t.return = e, e.child = t);
  }
  if (o = t.child, !(t.lanes & i)) {
    var l = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : hs, n(l, r) && t.ref === e.ref)
      return mi(t, e, i);
  }
  return e.flags |= 1, t = Yi(o, r), t.ref = e.ref, t.return = e, e.child = t;
}
function f_(t, e, n, r, i) {
  if (t !== null) {
    var o = t.memoizedProps;
    if (hs(o, r) && t.ref === e.ref)
      if (wn = !1, e.pendingProps = r = o, (t.lanes & i) !== 0)
        t.flags & 131072 && (wn = !0);
      else
        return e.lanes = t.lanes, mi(t, e, i);
  }
  return xh(t, e, n, r, i);
}
function d_(t, e, n) {
  var r = e.pendingProps, i = r.children, o = t !== null ? t.memoizedState : null;
  if (r.mode === "hidden")
    if (!(e.mode & 1))
      e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Fe(ml, Ln), Ln |= n;
    else {
      if (!(n & 1073741824))
        return t = o !== null ? o.baseLanes | n : n, e.lanes = e.childLanes = 1073741824, e.memoizedState = { baseLanes: t, cachePool: null, transitions: null }, e.updateQueue = null, Fe(ml, Ln), Ln |= t, null;
      e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, Fe(ml, Ln), Ln |= r;
    }
  else
    o !== null ? (r = o.baseLanes | n, e.memoizedState = null) : r = n, Fe(ml, Ln), Ln |= r;
  return Jt(t, e, i, n), e.child;
}
function h_(t, e) {
  var n = e.ref;
  (t === null && n !== null || t !== null && t.ref !== n) && (e.flags |= 512, e.flags |= 2097152);
}
function xh(t, e, n, r, i) {
  var o = Sn(n) ? No : Gt.current;
  return o = jl(e, o), bl(e, i), n = o0(t, e, n, r, o, i), r = l0(), t !== null && !wn ? (e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~i, mi(t, e, i)) : (Qe && r && Xp(e), e.flags |= 1, Jt(t, e, n, i), e.child);
}
function vg(t, e, n, r, i) {
  if (Sn(n)) {
    var o = !0;
    vc(e);
  } else
    o = !1;
  if (bl(e, i), e.stateNode === null)
    Hu(t, e), Fy(e, n, r), _h(e, n, r, i), r = !0;
  else if (t === null) {
    var l = e.stateNode, a = e.memoizedProps;
    l.props = a;
    var s = l.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = cr(u) : (u = Sn(n) ? No : Gt.current, u = jl(e, u));
    var c = n.getDerivedStateFromProps, f = typeof c == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    f || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (a !== r || s !== u) && sg(e, l, r, u), bi = !1;
    var d = e.memoizedState;
    l.state = d, Sc(e, r, l, i), s = e.memoizedState, a !== r || d !== s || xn.current || bi ? (typeof c == "function" && (yh(e, n, c, r), s = e.memoizedState), (a = bi || ag(e, n, a, r, d, s, u)) ? (f || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = r, e.memoizedState = s), l.props = r, l.state = s, l.context = u, r = a) : (typeof l.componentDidMount == "function" && (e.flags |= 4194308), r = !1);
  } else {
    l = e.stateNode, jy(t, e), a = e.memoizedProps, u = e.type === e.elementType ? a : _r(e.type, a), l.props = u, f = e.pendingProps, d = l.context, s = n.contextType, typeof s == "object" && s !== null ? s = cr(s) : (s = Sn(n) ? No : Gt.current, s = jl(e, s));
    var p = n.getDerivedStateFromProps;
    (c = typeof p == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (a !== f || d !== s) && sg(e, l, r, s), bi = !1, d = e.memoizedState, l.state = d, Sc(e, r, l, i);
    var m = e.memoizedState;
    a !== f || d !== m || xn.current || bi ? (typeof p == "function" && (yh(e, n, p, r), m = e.memoizedState), (u = bi || ag(e, n, u, r, d, m, s) || !1) ? (c || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, m, s), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, m, s)), typeof l.componentDidUpdate == "function" && (e.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || a === t.memoizedProps && d === t.memoizedState || (e.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || a === t.memoizedProps && d === t.memoizedState || (e.flags |= 1024), e.memoizedProps = r, e.memoizedState = m), l.props = r, l.state = m, l.context = s, r = u) : (typeof l.componentDidUpdate != "function" || a === t.memoizedProps && d === t.memoizedState || (e.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || a === t.memoizedProps && d === t.memoizedState || (e.flags |= 1024), r = !1);
  }
  return Sh(t, e, n, r, o, i);
}
function Sh(t, e, n, r, i, o) {
  h_(t, e);
  var l = (e.flags & 128) !== 0;
  if (!r && !l)
    return i && ng(e, n, !1), mi(t, e, o);
  r = e.stateNode, Dk.current = e;
  var a = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return e.flags |= 1, t !== null && l ? (e.child = Fl(e, t.child, null, o), e.child = Fl(e, null, a, o)) : Jt(t, e, a, o), e.memoizedState = r.state, i && ng(e, n, !0), e.child;
}
function p_(t) {
  var e = t.stateNode;
  e.pendingContext ? tg(t, e.pendingContext, e.pendingContext !== e.context) : e.context && tg(t, e.context, !1), t0(t, e.containerInfo);
}
function yg(t, e, n, r, i) {
  return $l(), Qp(i), e.flags |= 256, Jt(t, e, n, r), e.child;
}
var kh = { dehydrated: null, treeContext: null, retryLane: 0 };
function Eh(t) {
  return { baseLanes: t, cachePool: null, transitions: null };
}
function m_(t, e, n) {
  var r = e.pendingProps, i = Ze.current, o = !1, l = (e.flags & 128) !== 0, a;
  if ((a = l) || (a = t !== null && t.memoizedState === null ? !1 : (i & 2) !== 0), a ? (o = !0, e.flags &= -129) : (t === null || t.memoizedState !== null) && (i |= 1), Fe(Ze, i & 1), t === null)
    return gh(e), t = e.memoizedState, t !== null && (t = t.dehydrated, t !== null) ? (e.mode & 1 ? t.data === "$!" ? e.lanes = 8 : e.lanes = 1073741824 : e.lanes = 1, null) : (l = r.children, t = r.fallback, o ? (r = e.mode, o = e.child, l = { mode: "hidden", children: l }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = l) : o = cf(l, r, 0, null), t = To(t, r, n, null), o.return = e, t.return = e, o.sibling = t, e.child = o, e.child.memoizedState = Eh(n), e.memoizedState = kh, t) : u0(e, l));
  if (i = t.memoizedState, i !== null && (a = i.dehydrated, a !== null))
    return Ak(t, e, l, r, a, i, n);
  if (o) {
    o = r.fallback, l = e.mode, i = t.child, a = i.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(l & 1) && e.child !== i ? (r = e.child, r.childLanes = 0, r.pendingProps = s, e.deletions = null) : (r = Yi(i, s), r.subtreeFlags = i.subtreeFlags & 14680064), a !== null ? o = Yi(a, o) : (o = To(o, l, n, null), o.flags |= 2), o.return = e, r.return = e, r.sibling = o, e.child = r, r = o, o = e.child, l = t.child.memoizedState, l = l === null ? Eh(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, o.memoizedState = l, o.childLanes = t.childLanes & ~n, e.memoizedState = kh, r;
  }
  return o = t.child, t = o.sibling, r = Yi(o, { mode: "visible", children: r.children }), !(e.mode & 1) && (r.lanes = n), r.return = e, r.sibling = null, t !== null && (n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t)), e.child = r, e.memoizedState = null, r;
}
function u0(t, e) {
  return e = cf({ mode: "visible", children: e }, t.mode, 0, null), e.return = t, t.child = e;
}
function du(t, e, n, r) {
  return r !== null && Qp(r), Fl(e, t.child, null, n), t = u0(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t;
}
function Ak(t, e, n, r, i, o, l) {
  if (n)
    return e.flags & 256 ? (e.flags &= -257, r = sd(Error(F(422))), du(t, e, l, r)) : e.memoizedState !== null ? (e.child = t.child, e.flags |= 128, null) : (o = r.fallback, i = e.mode, r = cf({ mode: "visible", children: r.children }, i, 0, null), o = To(o, i, l, null), o.flags |= 2, r.return = e, o.return = e, r.sibling = o, e.child = r, e.mode & 1 && Fl(e, t.child, null, l), e.child.memoizedState = Eh(l), e.memoizedState = kh, o);
  if (!(e.mode & 1))
    return du(t, e, l, null);
  if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r)
      var a = r.dgst;
    return r = a, o = Error(F(419)), r = sd(o, r, void 0), du(t, e, l, r);
  }
  if (a = (l & t.childLanes) !== 0, wn || a) {
    if (r = Tt, r !== null) {
      switch (l & -l) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      i = i & (r.suspendedLanes | l) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, pi(t, i), br(r, t, i, -1));
    }
    return m0(), r = sd(Error(F(421))), du(t, e, l, r);
  }
  return i.data === "$?" ? (e.flags |= 128, e.child = t.child, e = Yk.bind(null, t), i._reactRetry = e, null) : (t = o.treeContext, $n = Bi(i.nextSibling), Fn = e, Qe = !0, Sr = null, t !== null && (Zn[Jn++] = li, Zn[Jn++] = ai, Zn[Jn++] = Io, li = t.id, ai = t.overflow, Io = e), e = u0(e, r.children), e.flags |= 4096, e);
}
function _g(t, e, n) {
  t.lanes |= e;
  var r = t.alternate;
  r !== null && (r.lanes |= e), vh(t.return, e, n);
}
function ud(t, e, n, r, i) {
  var o = t.memoizedState;
  o === null ? t.memoizedState = { isBackwards: e, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (o.isBackwards = e, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i);
}
function g_(t, e, n) {
  var r = e.pendingProps, i = r.revealOrder, o = r.tail;
  if (Jt(t, e, r.children, n), r = Ze.current, r & 2)
    r = r & 1 | 2, e.flags |= 128;
  else {
    if (t !== null && t.flags & 128)
      e:
        for (t = e.child; t !== null; ) {
          if (t.tag === 13)
            t.memoizedState !== null && _g(t, n, e);
          else if (t.tag === 19)
            _g(t, n, e);
          else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
          }
          if (t === e)
            break e;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
              break e;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
    r &= 1;
  }
  if (Fe(Ze, r), !(e.mode & 1))
    e.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = e.child, i = null; n !== null; )
          t = n.alternate, t !== null && kc(t) === null && (i = n), n = n.sibling;
        n = i, n === null ? (i = e.child, e.child = null) : (i = n.sibling, n.sibling = null), ud(e, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = e.child, e.child = null; i !== null; ) {
          if (t = i.alternate, t !== null && kc(t) === null) {
            e.child = i;
            break;
          }
          t = i.sibling, i.sibling = n, n = i, i = t;
        }
        ud(e, !0, n, null, o);
        break;
      case "together":
        ud(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
  return e.child;
}
function Hu(t, e) {
  !(e.mode & 1) && t !== null && (t.alternate = null, e.alternate = null, e.flags |= 2);
}
function mi(t, e, n) {
  if (t !== null && (e.dependencies = t.dependencies), jo |= e.lanes, !(n & e.childLanes))
    return null;
  if (t !== null && e.child !== t.child)
    throw Error(F(153));
  if (e.child !== null) {
    for (t = e.child, n = Yi(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; )
      t = t.sibling, n = n.sibling = Yi(t, t.pendingProps), n.return = e;
    n.sibling = null;
  }
  return e.child;
}
function Lk(t, e, n) {
  switch (e.tag) {
    case 3:
      p_(e), $l();
      break;
    case 5:
      Vy(e);
      break;
    case 1:
      Sn(e.type) && vc(e);
      break;
    case 4:
      t0(e, e.stateNode.containerInfo);
      break;
    case 10:
      var r = e.type._context, i = e.memoizedProps.value;
      Fe(wc, r._currentValue), r._currentValue = i;
      break;
    case 13:
      if (r = e.memoizedState, r !== null)
        return r.dehydrated !== null ? (Fe(Ze, Ze.current & 1), e.flags |= 128, null) : n & e.child.childLanes ? m_(t, e, n) : (Fe(Ze, Ze.current & 1), t = mi(t, e, n), t !== null ? t.sibling : null);
      Fe(Ze, Ze.current & 1);
      break;
    case 19:
      if (r = (n & e.childLanes) !== 0, t.flags & 128) {
        if (r)
          return g_(t, e, n);
        e.flags |= 128;
      }
      if (i = e.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Fe(Ze, Ze.current), r)
        break;
      return null;
    case 22:
    case 23:
      return e.lanes = 0, d_(t, e, n);
  }
  return mi(t, e, n);
}
var v_, Ch, y_, __;
v_ = function(t, e) {
  for (var n = e.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6)
      t.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === e)
      break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e)
        return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
Ch = function() {
};
y_ = function(t, e, n, r) {
  var i = t.memoizedProps;
  if (i !== r) {
    t = e.stateNode, _o(Wr.current);
    var o = null;
    switch (n) {
      case "input":
        i = Xd(t, i), r = Xd(t, r), o = [];
        break;
      case "select":
        i = nt({}, i, { value: void 0 }), r = nt({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        i = qd(t, i), r = qd(t, r), o = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (t.onclick = mc);
    }
    Zd(n, r);
    var l;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (l in a)
            a.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
        } else
          u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (ls.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
    for (u in r) {
      var s = r[u];
      if (a = i != null ? i[u] : void 0, r.hasOwnProperty(u) && s !== a && (s != null || a != null))
        if (u === "style")
          if (a) {
            for (l in a)
              !a.hasOwnProperty(l) || s && s.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
            for (l in s)
              s.hasOwnProperty(l) && a[l] !== s[l] && (n || (n = {}), n[l] = s[l]);
          } else
            n || (o || (o = []), o.push(
              u,
              n
            )), n = s;
        else
          u === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, a = a ? a.__html : void 0, s != null && a !== s && (o = o || []).push(u, s)) : u === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(u, "" + s) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (ls.hasOwnProperty(u) ? (s != null && u === "onScroll" && Ue("scroll", t), o || a === s || (o = [])) : (o = o || []).push(u, s));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (e.updateQueue = u) && (e.flags |= 4);
  }
};
__ = function(t, e, n, r) {
  n !== r && (e.flags |= 4);
};
function ca(t, e) {
  if (!Qe)
    switch (t.tailMode) {
      case "hidden":
        e = t.tail;
        for (var n = null; e !== null; )
          e.alternate !== null && (n = e), e = e.sibling;
        n === null ? t.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = t.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), n = n.sibling;
        r === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : r.sibling = null;
    }
}
function Bt(t) {
  var e = t.alternate !== null && t.alternate.child === t.child, n = 0, r = 0;
  if (e)
    for (var i = t.child; i !== null; )
      n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = t, i = i.sibling;
  else
    for (i = t.child; i !== null; )
      n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = t, i = i.sibling;
  return t.subtreeFlags |= r, t.childLanes = n, e;
}
function Nk(t, e, n) {
  var r = e.pendingProps;
  switch (Gp(e), e.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Bt(e), null;
    case 1:
      return Sn(e.type) && gc(), Bt(e), null;
    case 3:
      return r = e.stateNode, Ul(), Ve(xn), Ve(Gt), r0(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (t === null || t.child === null) && (cu(e) ? e.flags |= 4 : t === null || t.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024, Sr !== null && (Ah(Sr), Sr = null))), Ch(t, e), Bt(e), null;
    case 5:
      n0(e);
      var i = _o(ys.current);
      if (n = e.type, t !== null && e.stateNode != null)
        y_(t, e, n, r, i), t.ref !== e.ref && (e.flags |= 512, e.flags |= 2097152);
      else {
        if (!r) {
          if (e.stateNode === null)
            throw Error(F(166));
          return Bt(e), null;
        }
        if (t = _o(Wr.current), cu(e)) {
          r = e.stateNode, n = e.type;
          var o = e.memoizedProps;
          switch (r[$r] = e, r[gs] = o, t = (e.mode & 1) !== 0, n) {
            case "dialog":
              Ue("cancel", r), Ue("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Ue("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Ta.length; i++)
                Ue(Ta[i], r);
              break;
            case "source":
              Ue("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Ue(
                "error",
                r
              ), Ue("load", r);
              break;
            case "details":
              Ue("toggle", r);
              break;
            case "input":
              Pm(r, o), Ue("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, Ue("invalid", r);
              break;
            case "textarea":
              Mm(r, o), Ue("invalid", r);
          }
          Zd(n, o), i = null;
          for (var l in o)
            if (o.hasOwnProperty(l)) {
              var a = o[l];
              l === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && uu(r.textContent, a, t), i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && uu(
                r.textContent,
                a,
                t
              ), i = ["children", "" + a]) : ls.hasOwnProperty(l) && a != null && l === "onScroll" && Ue("scroll", r);
            }
          switch (n) {
            case "input":
              tu(r), Rm(r, o, !0);
              break;
            case "textarea":
              tu(r), Om(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = mc);
          }
          r = i, e.updateQueue = r, r !== null && (e.flags |= 4);
        } else {
          l = i.nodeType === 9 ? i : i.ownerDocument, t === "http://www.w3.org/1999/xhtml" && (t = Yv(n)), t === "http://www.w3.org/1999/xhtml" ? n === "script" ? (t = l.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild)) : typeof r.is == "string" ? t = l.createElement(n, { is: r.is }) : (t = l.createElement(n), n === "select" && (l = t, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : t = l.createElementNS(t, n), t[$r] = e, t[gs] = r, v_(t, e, !1, !1), e.stateNode = t;
          e: {
            switch (l = Jd(n, r), n) {
              case "dialog":
                Ue("cancel", t), Ue("close", t), i = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                Ue("load", t), i = r;
                break;
              case "video":
              case "audio":
                for (i = 0; i < Ta.length; i++)
                  Ue(Ta[i], t);
                i = r;
                break;
              case "source":
                Ue("error", t), i = r;
                break;
              case "img":
              case "image":
              case "link":
                Ue(
                  "error",
                  t
                ), Ue("load", t), i = r;
                break;
              case "details":
                Ue("toggle", t), i = r;
                break;
              case "input":
                Pm(t, r), i = Xd(t, r), Ue("invalid", t);
                break;
              case "option":
                i = r;
                break;
              case "select":
                t._wrapperState = { wasMultiple: !!r.multiple }, i = nt({}, r, { value: void 0 }), Ue("invalid", t);
                break;
              case "textarea":
                Mm(t, r), i = qd(t, r), Ue("invalid", t);
                break;
              default:
                i = r;
            }
            Zd(n, i), a = i;
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var s = a[o];
                o === "style" ? Qv(t, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Xv(t, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && as(t, s) : typeof s == "number" && as(t, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (ls.hasOwnProperty(o) ? s != null && o === "onScroll" && Ue("scroll", t) : s != null && Ap(t, o, s, l));
              }
            switch (n) {
              case "input":
                tu(t), Rm(t, r, !1);
                break;
              case "textarea":
                tu(t), Om(t);
                break;
              case "option":
                r.value != null && t.setAttribute("value", "" + Ki(r.value));
                break;
              case "select":
                t.multiple = !!r.multiple, o = r.value, o != null ? kl(t, !!r.multiple, o, !1) : r.defaultValue != null && kl(
                  t,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof i.onClick == "function" && (t.onclick = mc);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (e.flags |= 4);
        }
        e.ref !== null && (e.flags |= 512, e.flags |= 2097152);
      }
      return Bt(e), null;
    case 6:
      if (t && e.stateNode != null)
        __(t, e, t.memoizedProps, r);
      else {
        if (typeof r != "string" && e.stateNode === null)
          throw Error(F(166));
        if (n = _o(ys.current), _o(Wr.current), cu(e)) {
          if (r = e.stateNode, n = e.memoizedProps, r[$r] = e, (o = r.nodeValue !== n) && (t = Fn, t !== null))
            switch (t.tag) {
              case 3:
                uu(r.nodeValue, n, (t.mode & 1) !== 0);
                break;
              case 5:
                t.memoizedProps.suppressHydrationWarning !== !0 && uu(r.nodeValue, n, (t.mode & 1) !== 0);
            }
          o && (e.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[$r] = e, e.stateNode = r;
      }
      return Bt(e), null;
    case 13:
      if (Ve(Ze), r = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
        if (Qe && $n !== null && e.mode & 1 && !(e.flags & 128))
          Iy(), $l(), e.flags |= 98560, o = !1;
        else if (o = cu(e), r !== null && r.dehydrated !== null) {
          if (t === null) {
            if (!o)
              throw Error(F(318));
            if (o = e.memoizedState, o = o !== null ? o.dehydrated : null, !o)
              throw Error(F(317));
            o[$r] = e;
          } else
            $l(), !(e.flags & 128) && (e.memoizedState = null), e.flags |= 4;
          Bt(e), o = !1;
        } else
          Sr !== null && (Ah(Sr), Sr = null), o = !0;
        if (!o)
          return e.flags & 65536 ? e : null;
      }
      return e.flags & 128 ? (e.lanes = n, e) : (r = r !== null, r !== (t !== null && t.memoizedState !== null) && r && (e.child.flags |= 8192, e.mode & 1 && (t === null || Ze.current & 1 ? St === 0 && (St = 3) : m0())), e.updateQueue !== null && (e.flags |= 4), Bt(e), null);
    case 4:
      return Ul(), Ch(t, e), t === null && ps(e.stateNode.containerInfo), Bt(e), null;
    case 10:
      return Zp(e.type._context), Bt(e), null;
    case 17:
      return Sn(e.type) && gc(), Bt(e), null;
    case 19:
      if (Ve(Ze), o = e.memoizedState, o === null)
        return Bt(e), null;
      if (r = (e.flags & 128) !== 0, l = o.rendering, l === null)
        if (r)
          ca(o, !1);
        else {
          if (St !== 0 || t !== null && t.flags & 128)
            for (t = e.child; t !== null; ) {
              if (l = kc(t), l !== null) {
                for (e.flags |= 128, ca(o, !1), r = l.updateQueue, r !== null && (e.updateQueue = r, e.flags |= 4), e.subtreeFlags = 0, r = n, n = e.child; n !== null; )
                  o = n, t = r, o.flags &= 14680066, l = o.alternate, l === null ? (o.childLanes = 0, o.lanes = t, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = l.childLanes, o.lanes = l.lanes, o.child = l.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = l.memoizedProps, o.memoizedState = l.memoizedState, o.updateQueue = l.updateQueue, o.type = l.type, t = l.dependencies, o.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), n = n.sibling;
                return Fe(Ze, Ze.current & 1 | 2), e.child;
              }
              t = t.sibling;
            }
          o.tail !== null && pt() > Vl && (e.flags |= 128, r = !0, ca(o, !1), e.lanes = 4194304);
        }
      else {
        if (!r)
          if (t = kc(l), t !== null) {
            if (e.flags |= 128, r = !0, n = t.updateQueue, n !== null && (e.updateQueue = n, e.flags |= 4), ca(o, !0), o.tail === null && o.tailMode === "hidden" && !l.alternate && !Qe)
              return Bt(e), null;
          } else
            2 * pt() - o.renderingStartTime > Vl && n !== 1073741824 && (e.flags |= 128, r = !0, ca(o, !1), e.lanes = 4194304);
        o.isBackwards ? (l.sibling = e.child, e.child = l) : (n = o.last, n !== null ? n.sibling = l : e.child = l, o.last = l);
      }
      return o.tail !== null ? (e = o.tail, o.rendering = e, o.tail = e.sibling, o.renderingStartTime = pt(), e.sibling = null, n = Ze.current, Fe(Ze, r ? n & 1 | 2 : n & 1), e) : (Bt(e), null);
    case 22:
    case 23:
      return p0(), r = e.memoizedState !== null, t !== null && t.memoizedState !== null !== r && (e.flags |= 8192), r && e.mode & 1 ? Ln & 1073741824 && (Bt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Bt(e), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(F(156, e.tag));
}
function Ik(t, e) {
  switch (Gp(e), e.tag) {
    case 1:
      return Sn(e.type) && gc(), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
    case 3:
      return Ul(), Ve(xn), Ve(Gt), r0(), t = e.flags, t & 65536 && !(t & 128) ? (e.flags = t & -65537 | 128, e) : null;
    case 5:
      return n0(e), null;
    case 13:
      if (Ve(Ze), t = e.memoizedState, t !== null && t.dehydrated !== null) {
        if (e.alternate === null)
          throw Error(F(340));
        $l();
      }
      return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
    case 19:
      return Ve(Ze), null;
    case 4:
      return Ul(), null;
    case 10:
      return Zp(e.type._context), null;
    case 22:
    case 23:
      return p0(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var hu = !1, Wt = !1, zk = typeof WeakSet == "function" ? WeakSet : Set, J = null;
function pl(t, e) {
  var n = t.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        at(t, e, r);
      }
    else
      n.current = null;
}
function Th(t, e, n) {
  try {
    n();
  } catch (r) {
    at(t, e, r);
  }
}
var wg = !1;
function jk(t, e) {
  if (uh = dc, t = ky(), Yp(t)) {
    if ("selectionStart" in t)
      var n = { start: t.selectionStart, end: t.selectionEnd };
    else
      e: {
        n = (n = t.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset, o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0, a = -1, s = -1, u = 0, c = 0, f = t, d = null;
          t:
            for (; ; ) {
              for (var p; f !== n || i !== 0 && f.nodeType !== 3 || (a = l + i), f !== o || r !== 0 && f.nodeType !== 3 || (s = l + r), f.nodeType === 3 && (l += f.nodeValue.length), (p = f.firstChild) !== null; )
                d = f, f = p;
              for (; ; ) {
                if (f === t)
                  break t;
                if (d === n && ++u === i && (a = l), d === o && ++c === r && (s = l), (p = f.nextSibling) !== null)
                  break;
                f = d, d = f.parentNode;
              }
              f = p;
            }
          n = a === -1 || s === -1 ? null : { start: a, end: s };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (ch = { focusedElem: t, selectionRange: n }, dc = !1, J = e; J !== null; )
    if (e = J, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
      t.return = e, J = t;
    else
      for (; J !== null; ) {
        e = J;
        try {
          var m = e.alternate;
          if (e.flags & 1024)
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (m !== null) {
                  var h = m.memoizedProps, y = m.memoizedState, g = e.stateNode, v = g.getSnapshotBeforeUpdate(e.elementType === e.type ? h : _r(e.type, h), y);
                  g.__reactInternalSnapshotBeforeUpdate = v;
                }
                break;
              case 3:
                var _ = e.stateNode.containerInfo;
                _.nodeType === 1 ? _.textContent = "" : _.nodeType === 9 && _.documentElement && _.removeChild(_.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(F(163));
            }
        } catch (w) {
          at(e, e.return, w);
        }
        if (t = e.sibling, t !== null) {
          t.return = e.return, J = t;
          break;
        }
        J = e.return;
      }
  return m = wg, wg = !1, m;
}
function Fa(t, e, n) {
  var r = e.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
      if ((i.tag & t) === t) {
        var o = i.destroy;
        i.destroy = void 0, o !== void 0 && Th(e, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function sf(t, e) {
  if (e = e.updateQueue, e = e !== null ? e.lastEffect : null, e !== null) {
    var n = e = e.next;
    do {
      if ((n.tag & t) === t) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== e);
  }
}
function bh(t) {
  var e = t.ref;
  if (e !== null) {
    var n = t.stateNode;
    switch (t.tag) {
      case 5:
        t = n;
        break;
      default:
        t = n;
    }
    typeof e == "function" ? e(t) : e.current = t;
  }
}
function w_(t) {
  var e = t.alternate;
  e !== null && (t.alternate = null, w_(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && (delete e[$r], delete e[gs], delete e[hh], delete e[wk], delete e[xk])), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
}
function x_(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function xg(t) {
  e:
    for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || x_(t.return))
          return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.flags & 2 || t.child === null || t.tag === 4)
          continue e;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2))
        return t.stateNode;
    }
}
function Ph(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6)
    t = t.stateNode, e ? n.nodeType === 8 ? n.parentNode.insertBefore(t, e) : n.insertBefore(t, e) : (n.nodeType === 8 ? (e = n.parentNode, e.insertBefore(t, n)) : (e = n, e.appendChild(t)), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = mc));
  else if (r !== 4 && (t = t.child, t !== null))
    for (Ph(t, e, n), t = t.sibling; t !== null; )
      Ph(t, e, n), t = t.sibling;
}
function Rh(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6)
    t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t);
  else if (r !== 4 && (t = t.child, t !== null))
    for (Rh(t, e, n), t = t.sibling; t !== null; )
      Rh(t, e, n), t = t.sibling;
}
var Dt = null, wr = !1;
function xi(t, e, n) {
  for (n = n.child; n !== null; )
    S_(t, e, n), n = n.sibling;
}
function S_(t, e, n) {
  if (Vr && typeof Vr.onCommitFiberUnmount == "function")
    try {
      Vr.onCommitFiberUnmount(Jc, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      Wt || pl(n, e);
    case 6:
      var r = Dt, i = wr;
      Dt = null, xi(t, e, n), Dt = r, wr = i, Dt !== null && (wr ? (t = Dt, n = n.stateNode, t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n)) : Dt.removeChild(n.stateNode));
      break;
    case 18:
      Dt !== null && (wr ? (t = Dt, n = n.stateNode, t.nodeType === 8 ? nd(t.parentNode, n) : t.nodeType === 1 && nd(t, n), fs(t)) : nd(Dt, n.stateNode));
      break;
    case 4:
      r = Dt, i = wr, Dt = n.stateNode.containerInfo, wr = !0, xi(t, e, n), Dt = r, wr = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Wt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        i = r = r.next;
        do {
          var o = i, l = o.destroy;
          o = o.tag, l !== void 0 && (o & 2 || o & 4) && Th(n, e, l), i = i.next;
        } while (i !== r);
      }
      xi(t, e, n);
      break;
    case 1:
      if (!Wt && (pl(n, e), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (a) {
          at(n, e, a);
        }
      xi(t, e, n);
      break;
    case 21:
      xi(t, e, n);
      break;
    case 22:
      n.mode & 1 ? (Wt = (r = Wt) || n.memoizedState !== null, xi(t, e, n), Wt = r) : xi(t, e, n);
      break;
    default:
      xi(t, e, n);
  }
}
function Sg(t) {
  var e = t.updateQueue;
  if (e !== null) {
    t.updateQueue = null;
    var n = t.stateNode;
    n === null && (n = t.stateNode = new zk()), e.forEach(function(r) {
      var i = Xk.bind(null, t, r);
      n.has(r) || (n.add(r), r.then(i, i));
    });
  }
}
function vr(t, e) {
  var n = e.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = t, l = e, a = l;
        e:
          for (; a !== null; ) {
            switch (a.tag) {
              case 5:
                Dt = a.stateNode, wr = !1;
                break e;
              case 3:
                Dt = a.stateNode.containerInfo, wr = !0;
                break e;
              case 4:
                Dt = a.stateNode.containerInfo, wr = !0;
                break e;
            }
            a = a.return;
          }
        if (Dt === null)
          throw Error(F(160));
        S_(o, l, i), Dt = null, wr = !1;
        var s = i.alternate;
        s !== null && (s.return = null), i.return = null;
      } catch (u) {
        at(i, e, u);
      }
    }
  if (e.subtreeFlags & 12854)
    for (e = e.child; e !== null; )
      k_(e, t), e = e.sibling;
}
function k_(t, e) {
  var n = t.alternate, r = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (vr(e, t), Nr(t), r & 4) {
        try {
          Fa(3, t, t.return), sf(3, t);
        } catch (h) {
          at(t, t.return, h);
        }
        try {
          Fa(5, t, t.return);
        } catch (h) {
          at(t, t.return, h);
        }
      }
      break;
    case 1:
      vr(e, t), Nr(t), r & 512 && n !== null && pl(n, n.return);
      break;
    case 5:
      if (vr(e, t), Nr(t), r & 512 && n !== null && pl(n, n.return), t.flags & 32) {
        var i = t.stateNode;
        try {
          as(i, "");
        } catch (h) {
          at(t, t.return, h);
        }
      }
      if (r & 4 && (i = t.stateNode, i != null)) {
        var o = t.memoizedProps, l = n !== null ? n.memoizedProps : o, a = t.type, s = t.updateQueue;
        if (t.updateQueue = null, s !== null)
          try {
            a === "input" && o.type === "radio" && o.name != null && Wv(i, o), Jd(a, l);
            var u = Jd(a, o);
            for (l = 0; l < s.length; l += 2) {
              var c = s[l], f = s[l + 1];
              c === "style" ? Qv(i, f) : c === "dangerouslySetInnerHTML" ? Xv(i, f) : c === "children" ? as(i, f) : Ap(i, c, f, u);
            }
            switch (a) {
              case "input":
                Gd(i, o);
                break;
              case "textarea":
                Hv(i, o);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var p = o.value;
                p != null ? kl(i, !!o.multiple, p, !1) : d !== !!o.multiple && (o.defaultValue != null ? kl(
                  i,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : kl(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[gs] = o;
          } catch (h) {
            at(t, t.return, h);
          }
      }
      break;
    case 6:
      if (vr(e, t), Nr(t), r & 4) {
        if (t.stateNode === null)
          throw Error(F(162));
        i = t.stateNode, o = t.memoizedProps;
        try {
          i.nodeValue = o;
        } catch (h) {
          at(t, t.return, h);
        }
      }
      break;
    case 3:
      if (vr(e, t), Nr(t), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          fs(e.containerInfo);
        } catch (h) {
          at(t, t.return, h);
        }
      break;
    case 4:
      vr(e, t), Nr(t);
      break;
    case 13:
      vr(e, t), Nr(t), i = t.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (d0 = pt())), r & 4 && Sg(t);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, t.mode & 1 ? (Wt = (u = Wt) || c, vr(e, t), Wt = u) : vr(e, t), Nr(t), r & 8192) {
        if (u = t.memoizedState !== null, (t.stateNode.isHidden = u) && !c && t.mode & 1)
          for (J = t, c = t.child; c !== null; ) {
            for (f = J = c; J !== null; ) {
              switch (d = J, p = d.child, d.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Fa(4, d, d.return);
                  break;
                case 1:
                  pl(d, d.return);
                  var m = d.stateNode;
                  if (typeof m.componentWillUnmount == "function") {
                    r = d, n = d.return;
                    try {
                      e = r, m.props = e.memoizedProps, m.state = e.memoizedState, m.componentWillUnmount();
                    } catch (h) {
                      at(r, n, h);
                    }
                  }
                  break;
                case 5:
                  pl(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Eg(f);
                    continue;
                  }
              }
              p !== null ? (p.return = d, J = p) : Eg(f);
            }
            c = c.sibling;
          }
        e:
          for (c = null, f = t; ; ) {
            if (f.tag === 5) {
              if (c === null) {
                c = f;
                try {
                  i = f.stateNode, u ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = f.stateNode, s = f.memoizedProps.style, l = s != null && s.hasOwnProperty("display") ? s.display : null, a.style.display = Gv("display", l));
                } catch (h) {
                  at(t, t.return, h);
                }
              }
            } else if (f.tag === 6) {
              if (c === null)
                try {
                  f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                } catch (h) {
                  at(t, t.return, h);
                }
            } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === t) && f.child !== null) {
              f.child.return = f, f = f.child;
              continue;
            }
            if (f === t)
              break e;
            for (; f.sibling === null; ) {
              if (f.return === null || f.return === t)
                break e;
              c === f && (c = null), f = f.return;
            }
            c === f && (c = null), f.sibling.return = f.return, f = f.sibling;
          }
      }
      break;
    case 19:
      vr(e, t), Nr(t), r & 4 && Sg(t);
      break;
    case 21:
      break;
    default:
      vr(
        e,
        t
      ), Nr(t);
  }
}
function Nr(t) {
  var e = t.flags;
  if (e & 2) {
    try {
      e: {
        for (var n = t.return; n !== null; ) {
          if (x_(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(F(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (as(i, ""), r.flags &= -33);
          var o = xg(t);
          Rh(t, o, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, a = xg(t);
          Ph(t, a, l);
          break;
        default:
          throw Error(F(161));
      }
    } catch (s) {
      at(t, t.return, s);
    }
    t.flags &= -3;
  }
  e & 4096 && (t.flags &= -4097);
}
function $k(t, e, n) {
  J = t, E_(t);
}
function E_(t, e, n) {
  for (var r = (t.mode & 1) !== 0; J !== null; ) {
    var i = J, o = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || hu;
      if (!l) {
        var a = i.alternate, s = a !== null && a.memoizedState !== null || Wt;
        a = hu;
        var u = Wt;
        if (hu = l, (Wt = s) && !u)
          for (J = i; J !== null; )
            l = J, s = l.child, l.tag === 22 && l.memoizedState !== null ? Cg(i) : s !== null ? (s.return = l, J = s) : Cg(i);
        for (; o !== null; )
          J = o, E_(o), o = o.sibling;
        J = i, hu = a, Wt = u;
      }
      kg(t);
    } else
      i.subtreeFlags & 8772 && o !== null ? (o.return = i, J = o) : kg(t);
  }
}
function kg(t) {
  for (; J !== null; ) {
    var e = J;
    if (e.flags & 8772) {
      var n = e.alternate;
      try {
        if (e.flags & 8772)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              Wt || sf(5, e);
              break;
            case 1:
              var r = e.stateNode;
              if (e.flags & 4 && !Wt)
                if (n === null)
                  r.componentDidMount();
                else {
                  var i = e.elementType === e.type ? n.memoizedProps : _r(e.type, n.memoizedProps);
                  r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var o = e.updateQueue;
              o !== null && lg(e, o, r);
              break;
            case 3:
              var l = e.updateQueue;
              if (l !== null) {
                if (n = null, e.child !== null)
                  switch (e.child.tag) {
                    case 5:
                      n = e.child.stateNode;
                      break;
                    case 1:
                      n = e.child.stateNode;
                  }
                lg(e, l, n);
              }
              break;
            case 5:
              var a = e.stateNode;
              if (n === null && e.flags & 4) {
                n = a;
                var s = e.memoizedProps;
                switch (e.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (e.memoizedState === null) {
                var u = e.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && fs(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(F(163));
          }
        Wt || e.flags & 512 && bh(e);
      } catch (d) {
        at(e, e.return, d);
      }
    }
    if (e === t) {
      J = null;
      break;
    }
    if (n = e.sibling, n !== null) {
      n.return = e.return, J = n;
      break;
    }
    J = e.return;
  }
}
function Eg(t) {
  for (; J !== null; ) {
    var e = J;
    if (e === t) {
      J = null;
      break;
    }
    var n = e.sibling;
    if (n !== null) {
      n.return = e.return, J = n;
      break;
    }
    J = e.return;
  }
}
function Cg(t) {
  for (; J !== null; ) {
    var e = J;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var n = e.return;
          try {
            sf(4, e);
          } catch (s) {
            at(e, n, s);
          }
          break;
        case 1:
          var r = e.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = e.return;
            try {
              r.componentDidMount();
            } catch (s) {
              at(e, i, s);
            }
          }
          var o = e.return;
          try {
            bh(e);
          } catch (s) {
            at(e, o, s);
          }
          break;
        case 5:
          var l = e.return;
          try {
            bh(e);
          } catch (s) {
            at(e, l, s);
          }
      }
    } catch (s) {
      at(e, e.return, s);
    }
    if (e === t) {
      J = null;
      break;
    }
    var a = e.sibling;
    if (a !== null) {
      a.return = e.return, J = a;
      break;
    }
    J = e.return;
  }
}
var Fk = Math.ceil, Tc = _i.ReactCurrentDispatcher, c0 = _i.ReactCurrentOwner, sr = _i.ReactCurrentBatchConfig, Re = 0, Tt = null, yt = null, Nt = 0, Ln = 0, ml = ro(0), St = 0, Ss = null, jo = 0, uf = 0, f0 = 0, Ua = null, yn = null, d0 = 0, Vl = 1 / 0, ei = null, bc = !1, Mh = null, Wi = null, pu = !1, Oi = null, Pc = 0, Ba = 0, Oh = null, Yu = -1, Xu = 0;
function an() {
  return Re & 6 ? pt() : Yu !== -1 ? Yu : Yu = pt();
}
function Hi(t) {
  return t.mode & 1 ? Re & 2 && Nt !== 0 ? Nt & -Nt : kk.transition !== null ? (Xu === 0 && (Xu = ay()), Xu) : (t = De, t !== 0 || (t = window.event, t = t === void 0 ? 16 : py(t.type)), t) : 1;
}
function br(t, e, n, r) {
  if (50 < Ba)
    throw Ba = 0, Oh = null, Error(F(185));
  Us(t, n, r), (!(Re & 2) || t !== Tt) && (t === Tt && (!(Re & 2) && (uf |= n), St === 4 && Ri(t, Nt)), kn(t, r), n === 1 && Re === 0 && !(e.mode & 1) && (Vl = pt() + 500, of && io()));
}
function kn(t, e) {
  var n = t.callbackNode;
  kS(t, e);
  var r = fc(t, t === Tt ? Nt : 0);
  if (r === 0)
    n !== null && Lm(n), t.callbackNode = null, t.callbackPriority = 0;
  else if (e = r & -r, t.callbackPriority !== e) {
    if (n != null && Lm(n), e === 1)
      t.tag === 0 ? Sk(Tg.bind(null, t)) : Ay(Tg.bind(null, t)), yk(function() {
        !(Re & 6) && io();
      }), n = null;
    else {
      switch (sy(r)) {
        case 1:
          n = jp;
          break;
        case 4:
          n = oy;
          break;
        case 16:
          n = cc;
          break;
        case 536870912:
          n = ly;
          break;
        default:
          n = cc;
      }
      n = D_(n, C_.bind(null, t));
    }
    t.callbackPriority = e, t.callbackNode = n;
  }
}
function C_(t, e) {
  if (Yu = -1, Xu = 0, Re & 6)
    throw Error(F(327));
  var n = t.callbackNode;
  if (Pl() && t.callbackNode !== n)
    return null;
  var r = fc(t, t === Tt ? Nt : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & t.expiredLanes || e)
    e = Rc(t, r);
  else {
    e = r;
    var i = Re;
    Re |= 2;
    var o = b_();
    (Tt !== t || Nt !== e) && (ei = null, Vl = pt() + 500, Co(t, e));
    do
      try {
        Vk();
        break;
      } catch (a) {
        T_(t, a);
      }
    while (1);
    Kp(), Tc.current = o, Re = i, yt !== null ? e = 0 : (Tt = null, Nt = 0, e = St);
  }
  if (e !== 0) {
    if (e === 2 && (i = ih(t), i !== 0 && (r = i, e = Dh(t, i))), e === 1)
      throw n = Ss, Co(t, 0), Ri(t, r), kn(t, pt()), n;
    if (e === 6)
      Ri(t, r);
    else {
      if (i = t.current.alternate, !(r & 30) && !Uk(i) && (e = Rc(t, r), e === 2 && (o = ih(t), o !== 0 && (r = o, e = Dh(t, o))), e === 1))
        throw n = Ss, Co(t, 0), Ri(t, r), kn(t, pt()), n;
      switch (t.finishedWork = i, t.finishedLanes = r, e) {
        case 0:
        case 1:
          throw Error(F(345));
        case 2:
          fo(t, yn, ei);
          break;
        case 3:
          if (Ri(t, r), (r & 130023424) === r && (e = d0 + 500 - pt(), 10 < e)) {
            if (fc(t, 0) !== 0)
              break;
            if (i = t.suspendedLanes, (i & r) !== r) {
              an(), t.pingedLanes |= t.suspendedLanes & i;
              break;
            }
            t.timeoutHandle = dh(fo.bind(null, t, yn, ei), e);
            break;
          }
          fo(t, yn, ei);
          break;
        case 4:
          if (Ri(t, r), (r & 4194240) === r)
            break;
          for (e = t.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - Tr(r);
            o = 1 << l, l = e[l], l > i && (i = l), r &= ~o;
          }
          if (r = i, r = pt() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Fk(r / 1960)) - r, 10 < r) {
            t.timeoutHandle = dh(fo.bind(null, t, yn, ei), r);
            break;
          }
          fo(t, yn, ei);
          break;
        case 5:
          fo(t, yn, ei);
          break;
        default:
          throw Error(F(329));
      }
    }
  }
  return kn(t, pt()), t.callbackNode === n ? C_.bind(null, t) : null;
}
function Dh(t, e) {
  var n = Ua;
  return t.current.memoizedState.isDehydrated && (Co(t, e).flags |= 256), t = Rc(t, e), t !== 2 && (e = yn, yn = n, e !== null && Ah(e)), t;
}
function Ah(t) {
  yn === null ? yn = t : yn.push.apply(yn, t);
}
function Uk(t) {
  for (var e = t; ; ) {
    if (e.flags & 16384) {
      var n = e.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r], o = i.getSnapshot;
          i = i.value;
          try {
            if (!Rr(o(), i))
              return !1;
          } catch {
            return !1;
          }
        }
    }
    if (n = e.child, e.subtreeFlags & 16384 && n !== null)
      n.return = e, e = n;
    else {
      if (e === t)
        break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t)
          return !0;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
  }
  return !0;
}
function Ri(t, e) {
  for (e &= ~f0, e &= ~uf, t.suspendedLanes |= e, t.pingedLanes &= ~e, t = t.expirationTimes; 0 < e; ) {
    var n = 31 - Tr(e), r = 1 << n;
    t[n] = -1, e &= ~r;
  }
}
function Tg(t) {
  if (Re & 6)
    throw Error(F(327));
  Pl();
  var e = fc(t, 0);
  if (!(e & 1))
    return kn(t, pt()), null;
  var n = Rc(t, e);
  if (t.tag !== 0 && n === 2) {
    var r = ih(t);
    r !== 0 && (e = r, n = Dh(t, r));
  }
  if (n === 1)
    throw n = Ss, Co(t, 0), Ri(t, e), kn(t, pt()), n;
  if (n === 6)
    throw Error(F(345));
  return t.finishedWork = t.current.alternate, t.finishedLanes = e, fo(t, yn, ei), kn(t, pt()), null;
}
function h0(t, e) {
  var n = Re;
  Re |= 1;
  try {
    return t(e);
  } finally {
    Re = n, Re === 0 && (Vl = pt() + 500, of && io());
  }
}
function $o(t) {
  Oi !== null && Oi.tag === 0 && !(Re & 6) && Pl();
  var e = Re;
  Re |= 1;
  var n = sr.transition, r = De;
  try {
    if (sr.transition = null, De = 1, t)
      return t();
  } finally {
    De = r, sr.transition = n, Re = e, !(Re & 6) && io();
  }
}
function p0() {
  Ln = ml.current, Ve(ml);
}
function Co(t, e) {
  t.finishedWork = null, t.finishedLanes = 0;
  var n = t.timeoutHandle;
  if (n !== -1 && (t.timeoutHandle = -1, vk(n)), yt !== null)
    for (n = yt.return; n !== null; ) {
      var r = n;
      switch (Gp(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && gc();
          break;
        case 3:
          Ul(), Ve(xn), Ve(Gt), r0();
          break;
        case 5:
          n0(r);
          break;
        case 4:
          Ul();
          break;
        case 13:
          Ve(Ze);
          break;
        case 19:
          Ve(Ze);
          break;
        case 10:
          Zp(r.type._context);
          break;
        case 22:
        case 23:
          p0();
      }
      n = n.return;
    }
  if (Tt = t, yt = t = Yi(t.current, null), Nt = Ln = e, St = 0, Ss = null, f0 = uf = jo = 0, yn = Ua = null, yo !== null) {
    for (e = 0; e < yo.length; e++)
      if (n = yo[e], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var i = r.next, o = n.pending;
        if (o !== null) {
          var l = o.next;
          o.next = i, r.next = l;
        }
        n.pending = r;
      }
    yo = null;
  }
  return t;
}
function T_(t, e) {
  do {
    var n = yt;
    try {
      if (Kp(), Vu.current = Cc, Ec) {
        for (var r = tt.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), r = r.next;
        }
        Ec = !1;
      }
      if (zo = 0, Ct = wt = tt = null, $a = !1, _s = 0, c0.current = null, n === null || n.return === null) {
        St = 1, Ss = e, yt = null;
        break;
      }
      e: {
        var o = t, l = n.return, a = n, s = e;
        if (e = Nt, a.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var u = s, c = a, f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d ? (c.updateQueue = d.updateQueue, c.memoizedState = d.memoizedState, c.lanes = d.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var p = hg(l);
          if (p !== null) {
            p.flags &= -257, pg(p, l, a, o, e), p.mode & 1 && dg(o, u, e), e = p, s = u;
            var m = e.updateQueue;
            if (m === null) {
              var h = /* @__PURE__ */ new Set();
              h.add(s), e.updateQueue = h;
            } else
              m.add(s);
            break e;
          } else {
            if (!(e & 1)) {
              dg(o, u, e), m0();
              break e;
            }
            s = Error(F(426));
          }
        } else if (Qe && a.mode & 1) {
          var y = hg(l);
          if (y !== null) {
            !(y.flags & 65536) && (y.flags |= 256), pg(y, l, a, o, e), Qp(Bl(s, a));
            break e;
          }
        }
        o = s = Bl(s, a), St !== 4 && (St = 2), Ua === null ? Ua = [o] : Ua.push(o), o = l;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, e &= -e, o.lanes |= e;
              var g = u_(o, s, e);
              og(o, g);
              break e;
            case 1:
              a = s;
              var v = o.type, _ = o.stateNode;
              if (!(o.flags & 128) && (typeof v.getDerivedStateFromError == "function" || _ !== null && typeof _.componentDidCatch == "function" && (Wi === null || !Wi.has(_)))) {
                o.flags |= 65536, e &= -e, o.lanes |= e;
                var w = c_(o, a, e);
                og(o, w);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      R_(n);
    } catch (T) {
      e = T, yt === n && n !== null && (yt = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function b_() {
  var t = Tc.current;
  return Tc.current = Cc, t === null ? Cc : t;
}
function m0() {
  (St === 0 || St === 3 || St === 2) && (St = 4), Tt === null || !(jo & 268435455) && !(uf & 268435455) || Ri(Tt, Nt);
}
function Rc(t, e) {
  var n = Re;
  Re |= 2;
  var r = b_();
  (Tt !== t || Nt !== e) && (ei = null, Co(t, e));
  do
    try {
      Bk();
      break;
    } catch (i) {
      T_(t, i);
    }
  while (1);
  if (Kp(), Re = n, Tc.current = r, yt !== null)
    throw Error(F(261));
  return Tt = null, Nt = 0, St;
}
function Bk() {
  for (; yt !== null; )
    P_(yt);
}
function Vk() {
  for (; yt !== null && !pS(); )
    P_(yt);
}
function P_(t) {
  var e = O_(t.alternate, t, Ln);
  t.memoizedProps = t.pendingProps, e === null ? R_(t) : yt = e, c0.current = null;
}
function R_(t) {
  var e = t;
  do {
    var n = e.alternate;
    if (t = e.return, e.flags & 32768) {
      if (n = Ik(n, e), n !== null) {
        n.flags &= 32767, yt = n;
        return;
      }
      if (t !== null)
        t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null;
      else {
        St = 6, yt = null;
        return;
      }
    } else if (n = Nk(n, e, Ln), n !== null) {
      yt = n;
      return;
    }
    if (e = e.sibling, e !== null) {
      yt = e;
      return;
    }
    yt = e = t;
  } while (e !== null);
  St === 0 && (St = 5);
}
function fo(t, e, n) {
  var r = De, i = sr.transition;
  try {
    sr.transition = null, De = 1, Wk(t, e, n, r);
  } finally {
    sr.transition = i, De = r;
  }
  return null;
}
function Wk(t, e, n, r) {
  do
    Pl();
  while (Oi !== null);
  if (Re & 6)
    throw Error(F(327));
  n = t.finishedWork;
  var i = t.finishedLanes;
  if (n === null)
    return null;
  if (t.finishedWork = null, t.finishedLanes = 0, n === t.current)
    throw Error(F(177));
  t.callbackNode = null, t.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (ES(t, o), t === Tt && (yt = Tt = null, Nt = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || pu || (pu = !0, D_(cc, function() {
    return Pl(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = sr.transition, sr.transition = null;
    var l = De;
    De = 1;
    var a = Re;
    Re |= 4, c0.current = null, jk(t, n), k_(n, t), ck(ch), dc = !!uh, ch = uh = null, t.current = n, $k(n), mS(), Re = a, De = l, sr.transition = o;
  } else
    t.current = n;
  if (pu && (pu = !1, Oi = t, Pc = i), o = t.pendingLanes, o === 0 && (Wi = null), yS(n.stateNode), kn(t, pt()), e !== null)
    for (r = t.onRecoverableError, n = 0; n < e.length; n++)
      i = e[n], r(i.value, { componentStack: i.stack, digest: i.digest });
  if (bc)
    throw bc = !1, t = Mh, Mh = null, t;
  return Pc & 1 && t.tag !== 0 && Pl(), o = t.pendingLanes, o & 1 ? t === Oh ? Ba++ : (Ba = 0, Oh = t) : Ba = 0, io(), null;
}
function Pl() {
  if (Oi !== null) {
    var t = sy(Pc), e = sr.transition, n = De;
    try {
      if (sr.transition = null, De = 16 > t ? 16 : t, Oi === null)
        var r = !1;
      else {
        if (t = Oi, Oi = null, Pc = 0, Re & 6)
          throw Error(F(331));
        var i = Re;
        for (Re |= 4, J = t.current; J !== null; ) {
          var o = J, l = o.child;
          if (J.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var s = 0; s < a.length; s++) {
                var u = a[s];
                for (J = u; J !== null; ) {
                  var c = J;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Fa(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null)
                    f.return = c, J = f;
                  else
                    for (; J !== null; ) {
                      c = J;
                      var d = c.sibling, p = c.return;
                      if (w_(c), c === u) {
                        J = null;
                        break;
                      }
                      if (d !== null) {
                        d.return = p, J = d;
                        break;
                      }
                      J = p;
                    }
                }
              }
              var m = o.alternate;
              if (m !== null) {
                var h = m.child;
                if (h !== null) {
                  m.child = null;
                  do {
                    var y = h.sibling;
                    h.sibling = null, h = y;
                  } while (h !== null);
                }
              }
              J = o;
            }
          }
          if (o.subtreeFlags & 2064 && l !== null)
            l.return = o, J = l;
          else
            e:
              for (; J !== null; ) {
                if (o = J, o.flags & 2048)
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Fa(9, o, o.return);
                  }
                var g = o.sibling;
                if (g !== null) {
                  g.return = o.return, J = g;
                  break e;
                }
                J = o.return;
              }
        }
        var v = t.current;
        for (J = v; J !== null; ) {
          l = J;
          var _ = l.child;
          if (l.subtreeFlags & 2064 && _ !== null)
            _.return = l, J = _;
          else
            e:
              for (l = v; J !== null; ) {
                if (a = J, a.flags & 2048)
                  try {
                    switch (a.tag) {
                      case 0:
                      case 11:
                      case 15:
                        sf(9, a);
                    }
                  } catch (T) {
                    at(a, a.return, T);
                  }
                if (a === l) {
                  J = null;
                  break e;
                }
                var w = a.sibling;
                if (w !== null) {
                  w.return = a.return, J = w;
                  break e;
                }
                J = a.return;
              }
        }
        if (Re = i, io(), Vr && typeof Vr.onPostCommitFiberRoot == "function")
          try {
            Vr.onPostCommitFiberRoot(Jc, t);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      De = n, sr.transition = e;
    }
  }
  return !1;
}
function bg(t, e, n) {
  e = Bl(n, e), e = u_(t, e, 1), t = Vi(t, e, 1), e = an(), t !== null && (Us(t, 1, e), kn(t, e));
}
function at(t, e, n) {
  if (t.tag === 3)
    bg(t, t, n);
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        bg(e, t, n);
        break;
      } else if (e.tag === 1) {
        var r = e.stateNode;
        if (typeof e.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Wi === null || !Wi.has(r))) {
          t = Bl(n, t), t = c_(e, t, 1), e = Vi(e, t, 1), t = an(), e !== null && (Us(e, 1, t), kn(e, t));
          break;
        }
      }
      e = e.return;
    }
}
function Hk(t, e, n) {
  var r = t.pingCache;
  r !== null && r.delete(e), e = an(), t.pingedLanes |= t.suspendedLanes & n, Tt === t && (Nt & n) === n && (St === 4 || St === 3 && (Nt & 130023424) === Nt && 500 > pt() - d0 ? Co(t, 0) : f0 |= n), kn(t, e);
}
function M_(t, e) {
  e === 0 && (t.mode & 1 ? (e = iu, iu <<= 1, !(iu & 130023424) && (iu = 4194304)) : e = 1);
  var n = an();
  t = pi(t, e), t !== null && (Us(t, e, n), kn(t, n));
}
function Yk(t) {
  var e = t.memoizedState, n = 0;
  e !== null && (n = e.retryLane), M_(t, n);
}
function Xk(t, e) {
  var n = 0;
  switch (t.tag) {
    case 13:
      var r = t.stateNode, i = t.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = t.stateNode;
      break;
    default:
      throw Error(F(314));
  }
  r !== null && r.delete(e), M_(t, n);
}
var O_;
O_ = function(t, e, n) {
  if (t !== null)
    if (t.memoizedProps !== e.pendingProps || xn.current)
      wn = !0;
    else {
      if (!(t.lanes & n) && !(e.flags & 128))
        return wn = !1, Lk(t, e, n);
      wn = !!(t.flags & 131072);
    }
  else
    wn = !1, Qe && e.flags & 1048576 && Ly(e, _c, e.index);
  switch (e.lanes = 0, e.tag) {
    case 2:
      var r = e.type;
      Hu(t, e), t = e.pendingProps;
      var i = jl(e, Gt.current);
      bl(e, n), i = o0(null, e, r, t, i, n);
      var o = l0();
      return e.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (e.tag = 1, e.memoizedState = null, e.updateQueue = null, Sn(r) ? (o = !0, vc(e)) : o = !1, e.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, e0(e), i.updater = lf, e.stateNode = i, i._reactInternals = e, _h(e, r, t, n), e = Sh(null, e, r, !0, o, n)) : (e.tag = 0, Qe && o && Xp(e), Jt(null, e, i, n), e = e.child), e;
    case 16:
      r = e.elementType;
      e: {
        switch (Hu(t, e), t = e.pendingProps, i = r._init, r = i(r._payload), e.type = r, i = e.tag = Qk(r), t = _r(r, t), i) {
          case 0:
            e = xh(null, e, r, t, n);
            break e;
          case 1:
            e = vg(null, e, r, t, n);
            break e;
          case 11:
            e = mg(null, e, r, t, n);
            break e;
          case 14:
            e = gg(null, e, r, _r(r.type, t), n);
            break e;
        }
        throw Error(F(
          306,
          r,
          ""
        ));
      }
      return e;
    case 0:
      return r = e.type, i = e.pendingProps, i = e.elementType === r ? i : _r(r, i), xh(t, e, r, i, n);
    case 1:
      return r = e.type, i = e.pendingProps, i = e.elementType === r ? i : _r(r, i), vg(t, e, r, i, n);
    case 3:
      e: {
        if (p_(e), t === null)
          throw Error(F(387));
        r = e.pendingProps, o = e.memoizedState, i = o.element, jy(t, e), Sc(e, r, null, n);
        var l = e.memoizedState;
        if (r = l.element, o.isDehydrated)
          if (o = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, e.updateQueue.baseState = o, e.memoizedState = o, e.flags & 256) {
            i = Bl(Error(F(423)), e), e = yg(t, e, r, n, i);
            break e;
          } else if (r !== i) {
            i = Bl(Error(F(424)), e), e = yg(t, e, r, n, i);
            break e;
          } else
            for ($n = Bi(e.stateNode.containerInfo.firstChild), Fn = e, Qe = !0, Sr = null, n = By(e, null, r, n), e.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if ($l(), r === i) {
            e = mi(t, e, n);
            break e;
          }
          Jt(t, e, r, n);
        }
        e = e.child;
      }
      return e;
    case 5:
      return Vy(e), t === null && gh(e), r = e.type, i = e.pendingProps, o = t !== null ? t.memoizedProps : null, l = i.children, fh(r, i) ? l = null : o !== null && fh(r, o) && (e.flags |= 32), h_(t, e), Jt(t, e, l, n), e.child;
    case 6:
      return t === null && gh(e), null;
    case 13:
      return m_(t, e, n);
    case 4:
      return t0(e, e.stateNode.containerInfo), r = e.pendingProps, t === null ? e.child = Fl(e, null, r, n) : Jt(t, e, r, n), e.child;
    case 11:
      return r = e.type, i = e.pendingProps, i = e.elementType === r ? i : _r(r, i), mg(t, e, r, i, n);
    case 7:
      return Jt(t, e, e.pendingProps, n), e.child;
    case 8:
      return Jt(t, e, e.pendingProps.children, n), e.child;
    case 12:
      return Jt(t, e, e.pendingProps.children, n), e.child;
    case 10:
      e: {
        if (r = e.type._context, i = e.pendingProps, o = e.memoizedProps, l = i.value, Fe(wc, r._currentValue), r._currentValue = l, o !== null)
          if (Rr(o.value, l)) {
            if (o.children === i.children && !xn.current) {
              e = mi(t, e, n);
              break e;
            }
          } else
            for (o = e.child, o !== null && (o.return = e); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                l = o.child;
                for (var s = a.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      s = ci(-1, n & -n), s.tag = 2;
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null ? s.next = s : (s.next = c.next, c.next = s), u.pending = s;
                      }
                    }
                    o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), vh(
                      o.return,
                      n,
                      e
                    ), a.lanes |= n;
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10)
                l = o.type === e.type ? null : o.child;
              else if (o.tag === 18) {
                if (l = o.return, l === null)
                  throw Error(F(341));
                l.lanes |= n, a = l.alternate, a !== null && (a.lanes |= n), vh(l, n, e), l = o.sibling;
              } else
                l = o.child;
              if (l !== null)
                l.return = o;
              else
                for (l = o; l !== null; ) {
                  if (l === e) {
                    l = null;
                    break;
                  }
                  if (o = l.sibling, o !== null) {
                    o.return = l.return, l = o;
                    break;
                  }
                  l = l.return;
                }
              o = l;
            }
        Jt(t, e, i.children, n), e = e.child;
      }
      return e;
    case 9:
      return i = e.type, r = e.pendingProps.children, bl(e, n), i = cr(i), r = r(i), e.flags |= 1, Jt(t, e, r, n), e.child;
    case 14:
      return r = e.type, i = _r(r, e.pendingProps), i = _r(r.type, i), gg(t, e, r, i, n);
    case 15:
      return f_(t, e, e.type, e.pendingProps, n);
    case 17:
      return r = e.type, i = e.pendingProps, i = e.elementType === r ? i : _r(r, i), Hu(t, e), e.tag = 1, Sn(r) ? (t = !0, vc(e)) : t = !1, bl(e, n), Fy(e, r, i), _h(e, r, i, n), Sh(null, e, r, !0, t, n);
    case 19:
      return g_(t, e, n);
    case 22:
      return d_(t, e, n);
  }
  throw Error(F(156, e.tag));
};
function D_(t, e) {
  return iy(t, e);
}
function Gk(t, e, n, r) {
  this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function ir(t, e, n, r) {
  return new Gk(t, e, n, r);
}
function g0(t) {
  return t = t.prototype, !(!t || !t.isReactComponent);
}
function Qk(t) {
  if (typeof t == "function")
    return g0(t) ? 1 : 0;
  if (t != null) {
    if (t = t.$$typeof, t === Np)
      return 11;
    if (t === Ip)
      return 14;
  }
  return 2;
}
function Yi(t, e) {
  var n = t.alternate;
  return n === null ? (n = ir(t.tag, e, t.key, t.mode), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 14680064, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n;
}
function Gu(t, e, n, r, i, o) {
  var l = 2;
  if (r = t, typeof t == "function")
    g0(t) && (l = 1);
  else if (typeof t == "string")
    l = 5;
  else
    e:
      switch (t) {
        case ol:
          return To(n.children, i, o, e);
        case Lp:
          l = 8, i |= 8;
          break;
        case Vd:
          return t = ir(12, n, e, i | 2), t.elementType = Vd, t.lanes = o, t;
        case Wd:
          return t = ir(13, n, e, i), t.elementType = Wd, t.lanes = o, t;
        case Hd:
          return t = ir(19, n, e, i), t.elementType = Hd, t.lanes = o, t;
        case Uv:
          return cf(n, i, o, e);
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case $v:
                l = 10;
                break e;
              case Fv:
                l = 9;
                break e;
              case Np:
                l = 11;
                break e;
              case Ip:
                l = 14;
                break e;
              case Ti:
                l = 16, r = null;
                break e;
            }
          throw Error(F(130, t == null ? t : typeof t, ""));
      }
  return e = ir(l, n, e, i), e.elementType = t, e.type = r, e.lanes = o, e;
}
function To(t, e, n, r) {
  return t = ir(7, t, r, e), t.lanes = n, t;
}
function cf(t, e, n, r) {
  return t = ir(22, t, r, e), t.elementType = Uv, t.lanes = n, t.stateNode = { isHidden: !1 }, t;
}
function cd(t, e, n) {
  return t = ir(6, t, null, e), t.lanes = n, t;
}
function fd(t, e, n) {
  return e = ir(4, t.children !== null ? t.children : [], t.key, e), e.lanes = n, e.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }, e;
}
function qk(t, e, n, r, i) {
  this.tag = e, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Hf(0), this.expirationTimes = Hf(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Hf(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function v0(t, e, n, r, i, o, l, a, s) {
  return t = new qk(t, e, n, a, s), e === 1 ? (e = 1, o === !0 && (e |= 8)) : e = 0, o = ir(3, null, null, e), t.current = o, o.stateNode = t, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, e0(o), t;
}
function Kk(t, e, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: il, key: r == null ? null : "" + r, children: t, containerInfo: e, implementation: n };
}
function A_(t) {
  if (!t)
    return Zi;
  t = t._reactInternals;
  e: {
    if (Go(t) !== t || t.tag !== 1)
      throw Error(F(170));
    var e = t;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break e;
        case 1:
          if (Sn(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error(F(171));
  }
  if (t.tag === 1) {
    var n = t.type;
    if (Sn(n))
      return Dy(t, n, e);
  }
  return e;
}
function L_(t, e, n, r, i, o, l, a, s) {
  return t = v0(n, r, !0, t, i, o, l, a, s), t.context = A_(null), n = t.current, r = an(), i = Hi(n), o = ci(r, i), o.callback = e ?? null, Vi(n, o, i), t.current.lanes = i, Us(t, i, r), kn(t, r), t;
}
function ff(t, e, n, r) {
  var i = e.current, o = an(), l = Hi(i);
  return n = A_(n), e.context === null ? e.context = n : e.pendingContext = n, e = ci(o, l), e.payload = { element: t }, r = r === void 0 ? null : r, r !== null && (e.callback = r), t = Vi(i, e, l), t !== null && (br(t, i, l, o), Bu(t, i, l)), l;
}
function Mc(t) {
  if (t = t.current, !t.child)
    return null;
  switch (t.child.tag) {
    case 5:
      return t.child.stateNode;
    default:
      return t.child.stateNode;
  }
}
function Pg(t, e) {
  if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
    var n = t.retryLane;
    t.retryLane = n !== 0 && n < e ? n : e;
  }
}
function y0(t, e) {
  Pg(t, e), (t = t.alternate) && Pg(t, e);
}
function Zk() {
  return null;
}
var N_ = typeof reportError == "function" ? reportError : function(t) {
  console.error(t);
};
function _0(t) {
  this._internalRoot = t;
}
df.prototype.render = _0.prototype.render = function(t) {
  var e = this._internalRoot;
  if (e === null)
    throw Error(F(409));
  ff(t, e, null, null);
};
df.prototype.unmount = _0.prototype.unmount = function() {
  var t = this._internalRoot;
  if (t !== null) {
    this._internalRoot = null;
    var e = t.containerInfo;
    $o(function() {
      ff(null, t, null, null);
    }), e[hi] = null;
  }
};
function df(t) {
  this._internalRoot = t;
}
df.prototype.unstable_scheduleHydration = function(t) {
  if (t) {
    var e = fy();
    t = { blockedOn: null, target: t, priority: e };
    for (var n = 0; n < Pi.length && e !== 0 && e < Pi[n].priority; n++)
      ;
    Pi.splice(n, 0, t), n === 0 && hy(t);
  }
};
function w0(t) {
  return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
}
function hf(t) {
  return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "));
}
function Rg() {
}
function Jk(t, e, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var u = Mc(l);
        o.call(u);
      };
    }
    var l = L_(e, r, t, 0, null, !1, !1, "", Rg);
    return t._reactRootContainer = l, t[hi] = l.current, ps(t.nodeType === 8 ? t.parentNode : t), $o(), l;
  }
  for (; i = t.lastChild; )
    t.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var u = Mc(s);
      a.call(u);
    };
  }
  var s = v0(t, 0, !1, null, null, !1, !1, "", Rg);
  return t._reactRootContainer = s, t[hi] = s.current, ps(t.nodeType === 8 ? t.parentNode : t), $o(function() {
    ff(e, s, n, r);
  }), s;
}
function pf(t, e, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var l = o;
    if (typeof i == "function") {
      var a = i;
      i = function() {
        var s = Mc(l);
        a.call(s);
      };
    }
    ff(e, l, t, i);
  } else
    l = Jk(n, e, t, i, r);
  return Mc(l);
}
uy = function(t) {
  switch (t.tag) {
    case 3:
      var e = t.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var n = Ca(e.pendingLanes);
        n !== 0 && ($p(e, n | 1), kn(e, pt()), !(Re & 6) && (Vl = pt() + 500, io()));
      }
      break;
    case 13:
      $o(function() {
        var r = pi(t, 1);
        if (r !== null) {
          var i = an();
          br(r, t, 1, i);
        }
      }), y0(t, 1);
  }
};
Fp = function(t) {
  if (t.tag === 13) {
    var e = pi(t, 134217728);
    if (e !== null) {
      var n = an();
      br(e, t, 134217728, n);
    }
    y0(t, 134217728);
  }
};
cy = function(t) {
  if (t.tag === 13) {
    var e = Hi(t), n = pi(t, e);
    if (n !== null) {
      var r = an();
      br(n, t, e, r);
    }
    y0(t, e);
  }
};
fy = function() {
  return De;
};
dy = function(t, e) {
  var n = De;
  try {
    return De = t, e();
  } finally {
    De = n;
  }
};
th = function(t, e, n) {
  switch (e) {
    case "input":
      if (Gd(t, n), e = n.name, n.type === "radio" && e != null) {
        for (n = t; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'), e = 0; e < n.length; e++) {
          var r = n[e];
          if (r !== t && r.form === t.form) {
            var i = rf(r);
            if (!i)
              throw Error(F(90));
            Vv(r), Gd(r, i);
          }
        }
      }
      break;
    case "textarea":
      Hv(t, n);
      break;
    case "select":
      e = n.value, e != null && kl(t, !!n.multiple, e, !1);
  }
};
Zv = h0;
Jv = $o;
var eE = { usingClientEntryPoint: !1, Events: [Vs, ul, rf, qv, Kv, h0] }, fa = { findFiberByHostInstance: vo, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, tE = { bundleType: fa.bundleType, version: fa.version, rendererPackageName: fa.rendererPackageName, rendererConfig: fa.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: _i.ReactCurrentDispatcher, findHostInstanceByFiber: function(t) {
  return t = ny(t), t === null ? null : t.stateNode;
}, findFiberByHostInstance: fa.findFiberByHostInstance || Zk, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var mu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!mu.isDisabled && mu.supportsFiber)
    try {
      Jc = mu.inject(tE), Vr = mu;
    } catch {
    }
}
Wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = eE;
Wn.createPortal = function(t, e) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!w0(e))
    throw Error(F(200));
  return Kk(t, e, null, n);
};
Wn.createRoot = function(t, e) {
  if (!w0(t))
    throw Error(F(299));
  var n = !1, r = "", i = N_;
  return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (r = e.identifierPrefix), e.onRecoverableError !== void 0 && (i = e.onRecoverableError)), e = v0(t, 1, !1, null, null, n, !1, r, i), t[hi] = e.current, ps(t.nodeType === 8 ? t.parentNode : t), new _0(e);
};
Wn.findDOMNode = function(t) {
  if (t == null)
    return null;
  if (t.nodeType === 1)
    return t;
  var e = t._reactInternals;
  if (e === void 0)
    throw typeof t.render == "function" ? Error(F(188)) : (t = Object.keys(t).join(","), Error(F(268, t)));
  return t = ny(e), t = t === null ? null : t.stateNode, t;
};
Wn.flushSync = function(t) {
  return $o(t);
};
Wn.hydrate = function(t, e, n) {
  if (!hf(e))
    throw Error(F(200));
  return pf(null, t, e, !0, n);
};
Wn.hydrateRoot = function(t, e, n) {
  if (!w0(t))
    throw Error(F(405));
  var r = n != null && n.hydratedSources || null, i = !1, o = "", l = N_;
  if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), e = L_(e, null, t, 1, n ?? null, i, !1, o, l), t[hi] = e.current, ps(t), r)
    for (t = 0; t < r.length; t++)
      n = r[t], i = n._getVersion, i = i(n._source), e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [n, i] : e.mutableSourceEagerHydrationData.push(
        n,
        i
      );
  return new df(e);
};
Wn.render = function(t, e, n) {
  if (!hf(e))
    throw Error(F(200));
  return pf(null, t, e, !1, n);
};
Wn.unmountComponentAtNode = function(t) {
  if (!hf(t))
    throw Error(F(40));
  return t._reactRootContainer ? ($o(function() {
    pf(null, null, t, !1, function() {
      t._reactRootContainer = null, t[hi] = null;
    });
  }), !0) : !1;
};
Wn.unstable_batchedUpdates = h0;
Wn.unstable_renderSubtreeIntoContainer = function(t, e, n, r) {
  if (!hf(n))
    throw Error(F(200));
  if (t == null || t._reactInternals === void 0)
    throw Error(F(38));
  return pf(t, e, n, !1, r);
};
Wn.version = "18.2.0-next-9e3b772b8-20220608";
function I_() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(I_);
    } catch (t) {
      console.error(t);
    }
}
I_(), Lv.exports = Wn;
var mf = Lv.exports;
const nE = /* @__PURE__ */ Tp(mf), rE = /* @__PURE__ */ Sv({
  __proto__: null,
  default: nE
}, [mf]);
var Mg = mf;
Ud.createRoot = Mg.createRoot, Ud.hydrateRoot = Mg.hydrateRoot;
var x0 = Ys(), ce = (t) => Hs(t, x0), S0 = Ys();
ce.write = (t) => Hs(t, S0);
var gf = Ys();
ce.onStart = (t) => Hs(t, gf);
var k0 = Ys();
ce.onFrame = (t) => Hs(t, k0);
var E0 = Ys();
ce.onFinish = (t) => Hs(t, E0);
var Rl = [];
ce.setTimeout = (t, e) => {
  let n = ce.now() + e, r = () => {
    let o = Rl.findIndex((l) => l.cancel == r);
    ~o && Rl.splice(o, 1), Ai -= ~o ? 1 : 0;
  }, i = { time: n, handler: t, cancel: r };
  return Rl.splice(z_(n), 0, i), Ai += 1, j_(), i;
};
var z_ = (t) => ~(~Rl.findIndex((e) => e.time > t) || ~Rl.length);
ce.cancel = (t) => {
  gf.delete(t), k0.delete(t), E0.delete(t), x0.delete(t), S0.delete(t);
};
ce.sync = (t) => {
  Lh = !0, ce.batchedUpdates(t), Lh = !1;
};
ce.throttle = (t) => {
  let e;
  function n() {
    try {
      t(...e);
    } finally {
      e = null;
    }
  }
  function r(...i) {
    e = i, ce.onStart(n);
  }
  return r.handler = t, r.cancel = () => {
    gf.delete(n), e = null;
  }, r;
};
var C0 = typeof window < "u" ? window.requestAnimationFrame : () => {
};
ce.use = (t) => C0 = t;
ce.now = typeof performance < "u" ? () => performance.now() : Date.now;
ce.batchedUpdates = (t) => t();
ce.catch = console.error;
ce.frameLoop = "always";
ce.advance = () => {
  ce.frameLoop !== "demand" ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : F_();
};
var Di = -1, Ai = 0, Lh = !1;
function Hs(t, e) {
  Lh ? (e.delete(t), t(0)) : (e.add(t), j_());
}
function j_() {
  Di < 0 && (Di = 0, ce.frameLoop !== "demand" && C0($_));
}
function iE() {
  Di = -1;
}
function $_() {
  ~Di && (C0($_), ce.batchedUpdates(F_));
}
function F_() {
  let t = Di;
  Di = ce.now();
  let e = z_(Di);
  if (e && (U_(Rl.splice(0, e), (n) => n.handler()), Ai -= e), !Ai) {
    iE();
    return;
  }
  gf.flush(), x0.flush(t ? Math.min(64, Di - t) : 16.667), k0.flush(), S0.flush(), E0.flush();
}
function Ys() {
  let t = /* @__PURE__ */ new Set(), e = t;
  return { add(n) {
    Ai += e == t && !t.has(n) ? 1 : 0, t.add(n);
  }, delete(n) {
    return Ai -= e == t && t.has(n) ? 1 : 0, t.delete(n);
  }, flush(n) {
    e.size && (t = /* @__PURE__ */ new Set(), Ai -= e.size, U_(e, (r) => r(n) && t.add(r)), Ai += t.size, e = t);
  } };
}
function U_(t, e) {
  t.forEach((n) => {
    try {
      e(n);
    } catch (r) {
      ce.catch(r);
    }
  });
}
var oE = Object.defineProperty, lE = (t, e) => {
  for (var n in e)
    oE(t, n, { get: e[n], enumerable: !0 });
}, Mr = {};
lE(Mr, { assign: () => sE, colors: () => Xi, createStringInterpolator: () => b0, skipAnimation: () => V_, to: () => B_, willAdvance: () => P0 });
function Nh() {
}
var aE = (t, e, n) => Object.defineProperty(t, e, { value: n, writable: !0, configurable: !0 }), $ = { arr: Array.isArray, obj: (t) => !!t && t.constructor.name === "Object", fun: (t) => typeof t == "function", str: (t) => typeof t == "string", num: (t) => typeof t == "number", und: (t) => t === void 0 };
function ti(t, e) {
  if ($.arr(t)) {
    if (!$.arr(e) || t.length !== e.length)
      return !1;
    for (let n = 0; n < t.length; n++)
      if (t[n] !== e[n])
        return !1;
    return !0;
  }
  return t === e;
}
var ae = (t, e) => t.forEach(e);
function Xr(t, e, n) {
  if ($.arr(t)) {
    for (let r = 0; r < t.length; r++)
      e.call(n, t[r], `${r}`);
    return;
  }
  for (let r in t)
    t.hasOwnProperty(r) && e.call(n, t[r], r);
}
var ln = (t) => $.und(t) ? [] : $.arr(t) ? t : [t];
function Va(t, e) {
  if (t.size) {
    let n = Array.from(t);
    t.clear(), ae(n, e);
  }
}
var ba = (t, ...e) => Va(t, (n) => n(...e)), T0 = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent), b0, B_, Xi = null, V_ = !1, P0 = Nh, sE = (t) => {
  t.to && (B_ = t.to), t.now && (ce.now = t.now), t.colors !== void 0 && (Xi = t.colors), t.skipAnimation != null && (V_ = t.skipAnimation), t.createStringInterpolator && (b0 = t.createStringInterpolator), t.requestAnimationFrame && ce.use(t.requestAnimationFrame), t.batchedUpdates && (ce.batchedUpdates = t.batchedUpdates), t.willAdvance && (P0 = t.willAdvance), t.frameLoop && (ce.frameLoop = t.frameLoop);
}, Wa = /* @__PURE__ */ new Set(), rr = [], dd = [], Oc = 0, vf = { get idle() {
  return !Wa.size && !rr.length;
}, start(t) {
  Oc > t.priority ? (Wa.add(t), ce.onStart(uE)) : (W_(t), ce(Ih));
}, advance: Ih, sort(t) {
  if (Oc)
    ce.onFrame(() => vf.sort(t));
  else {
    let e = rr.indexOf(t);
    ~e && (rr.splice(e, 1), H_(t));
  }
}, clear() {
  rr = [], Wa.clear();
} };
function uE() {
  Wa.forEach(W_), Wa.clear(), ce(Ih);
}
function W_(t) {
  rr.includes(t) || H_(t);
}
function H_(t) {
  rr.splice(cE(rr, (e) => e.priority > t.priority), 0, t);
}
function Ih(t) {
  let e = dd;
  for (let n = 0; n < rr.length; n++) {
    let r = rr[n];
    Oc = r.priority, r.idle || (P0(r), r.advance(t), r.idle || e.push(r));
  }
  return Oc = 0, dd = rr, dd.length = 0, rr = e, rr.length > 0;
}
function cE(t, e) {
  let n = t.findIndex(e);
  return n < 0 ? t.length : n;
}
var fE = (t, e, n) => Math.min(Math.max(n, t), e), dE = { transparent: 0, aliceblue: 4042850303, antiquewhite: 4209760255, aqua: 16777215, aquamarine: 2147472639, azure: 4043309055, beige: 4126530815, bisque: 4293182719, black: 255, blanchedalmond: 4293643775, blue: 65535, blueviolet: 2318131967, brown: 2771004159, burlywood: 3736635391, burntsienna: 3934150143, cadetblue: 1604231423, chartreuse: 2147418367, chocolate: 3530104575, coral: 4286533887, cornflowerblue: 1687547391, cornsilk: 4294499583, crimson: 3692313855, cyan: 16777215, darkblue: 35839, darkcyan: 9145343, darkgoldenrod: 3095792639, darkgray: 2846468607, darkgreen: 6553855, darkgrey: 2846468607, darkkhaki: 3182914559, darkmagenta: 2332068863, darkolivegreen: 1433087999, darkorange: 4287365375, darkorchid: 2570243327, darkred: 2332033279, darksalmon: 3918953215, darkseagreen: 2411499519, darkslateblue: 1211993087, darkslategray: 793726975, darkslategrey: 793726975, darkturquoise: 13554175, darkviolet: 2483082239, deeppink: 4279538687, deepskyblue: 12582911, dimgray: 1768516095, dimgrey: 1768516095, dodgerblue: 512819199, firebrick: 2988581631, floralwhite: 4294635775, forestgreen: 579543807, fuchsia: 4278255615, gainsboro: 3705462015, ghostwhite: 4177068031, gold: 4292280575, goldenrod: 3668254975, gray: 2155905279, green: 8388863, greenyellow: 2919182335, grey: 2155905279, honeydew: 4043305215, hotpink: 4285117695, indianred: 3445382399, indigo: 1258324735, ivory: 4294963455, khaki: 4041641215, lavender: 3873897215, lavenderblush: 4293981695, lawngreen: 2096890111, lemonchiffon: 4294626815, lightblue: 2916673279, lightcoral: 4034953471, lightcyan: 3774873599, lightgoldenrodyellow: 4210742015, lightgray: 3553874943, lightgreen: 2431553791, lightgrey: 3553874943, lightpink: 4290167295, lightsalmon: 4288707327, lightseagreen: 548580095, lightskyblue: 2278488831, lightslategray: 2005441023, lightslategrey: 2005441023, lightsteelblue: 2965692159, lightyellow: 4294959359, lime: 16711935, limegreen: 852308735, linen: 4210091775, magenta: 4278255615, maroon: 2147483903, mediumaquamarine: 1724754687, mediumblue: 52735, mediumorchid: 3126187007, mediumpurple: 2473647103, mediumseagreen: 1018393087, mediumslateblue: 2070474495, mediumspringgreen: 16423679, mediumturquoise: 1221709055, mediumvioletred: 3340076543, midnightblue: 421097727, mintcream: 4127193855, mistyrose: 4293190143, moccasin: 4293178879, navajowhite: 4292783615, navy: 33023, oldlace: 4260751103, olive: 2155872511, olivedrab: 1804477439, orange: 4289003775, orangered: 4282712319, orchid: 3664828159, palegoldenrod: 4008225535, palegreen: 2566625535, paleturquoise: 2951671551, palevioletred: 3681588223, papayawhip: 4293907967, peachpuff: 4292524543, peru: 3448061951, pink: 4290825215, plum: 3718307327, powderblue: 2967529215, purple: 2147516671, rebeccapurple: 1714657791, red: 4278190335, rosybrown: 3163525119, royalblue: 1097458175, saddlebrown: 2336560127, salmon: 4202722047, sandybrown: 4104413439, seagreen: 780883967, seashell: 4294307583, sienna: 2689740287, silver: 3233857791, skyblue: 2278484991, slateblue: 1784335871, slategray: 1887473919, slategrey: 1887473919, snow: 4294638335, springgreen: 16744447, steelblue: 1182971135, tan: 3535047935, teal: 8421631, thistle: 3636451583, tomato: 4284696575, turquoise: 1088475391, violet: 4001558271, wheat: 4125012991, white: 4294967295, whitesmoke: 4126537215, yellow: 4294902015, yellowgreen: 2597139199 }, Cr = "[-+]?\\d*\\.?\\d+", Dc = Cr + "%";
function yf(...t) {
  return "\\(\\s*(" + t.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var hE = new RegExp("rgb" + yf(Cr, Cr, Cr)), pE = new RegExp("rgba" + yf(Cr, Cr, Cr, Cr)), mE = new RegExp("hsl" + yf(Cr, Dc, Dc)), gE = new RegExp("hsla" + yf(Cr, Dc, Dc, Cr)), vE = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, yE = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, _E = /^#([0-9a-fA-F]{6})$/, wE = /^#([0-9a-fA-F]{8})$/;
function xE(t) {
  let e;
  return typeof t == "number" ? t >>> 0 === t && t >= 0 && t <= 4294967295 ? t : null : (e = _E.exec(t)) ? parseInt(e[1] + "ff", 16) >>> 0 : Xi && Xi[t] !== void 0 ? Xi[t] : (e = hE.exec(t)) ? (Zo(e[1]) << 24 | Zo(e[2]) << 16 | Zo(e[3]) << 8 | 255) >>> 0 : (e = pE.exec(t)) ? (Zo(e[1]) << 24 | Zo(e[2]) << 16 | Zo(e[3]) << 8 | Ag(e[4])) >>> 0 : (e = vE.exec(t)) ? parseInt(e[1] + e[1] + e[2] + e[2] + e[3] + e[3] + "ff", 16) >>> 0 : (e = wE.exec(t)) ? parseInt(e[1], 16) >>> 0 : (e = yE.exec(t)) ? parseInt(e[1] + e[1] + e[2] + e[2] + e[3] + e[3] + e[4] + e[4], 16) >>> 0 : (e = mE.exec(t)) ? (Og(Dg(e[1]), gu(e[2]), gu(e[3])) | 255) >>> 0 : (e = gE.exec(t)) ? (Og(Dg(e[1]), gu(e[2]), gu(e[3])) | Ag(e[4])) >>> 0 : null;
}
function hd(t, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
}
function Og(t, e, n) {
  let r = n < 0.5 ? n * (1 + e) : n + e - n * e, i = 2 * n - r, o = hd(i, r, t + 1 / 3), l = hd(i, r, t), a = hd(i, r, t - 1 / 3);
  return Math.round(o * 255) << 24 | Math.round(l * 255) << 16 | Math.round(a * 255) << 8;
}
function Zo(t) {
  let e = parseInt(t, 10);
  return e < 0 ? 0 : e > 255 ? 255 : e;
}
function Dg(t) {
  return (parseFloat(t) % 360 + 360) % 360 / 360;
}
function Ag(t) {
  let e = parseFloat(t);
  return e < 0 ? 0 : e > 1 ? 255 : Math.round(e * 255);
}
function gu(t) {
  let e = parseFloat(t);
  return e < 0 ? 0 : e > 100 ? 1 : e / 100;
}
function Lg(t) {
  let e = xE(t);
  if (e === null)
    return t;
  e = e || 0;
  let n = (e & 4278190080) >>> 24, r = (e & 16711680) >>> 16, i = (e & 65280) >>> 8, o = (e & 255) / 255;
  return `rgba(${n}, ${r}, ${i}, ${o})`;
}
var ks = (t, e, n) => {
  if ($.fun(t))
    return t;
  if ($.arr(t))
    return ks({ range: t, output: e, extrapolate: n });
  if ($.str(t.output[0]))
    return b0(t);
  let r = t, i = r.output, o = r.range || [0, 1], l = r.extrapolateLeft || r.extrapolate || "extend", a = r.extrapolateRight || r.extrapolate || "extend", s = r.easing || ((u) => u);
  return (u) => {
    let c = kE(u, o);
    return SE(u, o[c], o[c + 1], i[c], i[c + 1], s, l, a, r.map);
  };
};
function SE(t, e, n, r, i, o, l, a, s) {
  let u = s ? s(t) : t;
  if (u < e) {
    if (l === "identity")
      return u;
    l === "clamp" && (u = e);
  }
  if (u > n) {
    if (a === "identity")
      return u;
    a === "clamp" && (u = n);
  }
  return r === i ? r : e === n ? t <= e ? r : i : (e === -1 / 0 ? u = -u : n === 1 / 0 ? u = u - e : u = (u - e) / (n - e), u = o(u), r === -1 / 0 ? u = -u : i === 1 / 0 ? u = u + r : u = u * (i - r) + r, u);
}
function kE(t, e) {
  for (var n = 1; n < e.length - 1 && !(e[n] >= t); ++n)
    ;
  return n - 1;
}
var EE = (t, e = "end") => (n) => {
  n = e === "end" ? Math.min(n, 0.999) : Math.max(n, 1e-3);
  let r = n * t, i = e === "end" ? Math.floor(r) : Math.ceil(r);
  return fE(0, 1, i / t);
}, Ac = 1.70158, vu = Ac * 1.525, Ng = Ac + 1, Ig = 2 * Math.PI / 3, zg = 2 * Math.PI / 4.5, yu = (t) => t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375, R0 = { linear: (t) => t, easeInQuad: (t) => t * t, easeOutQuad: (t) => 1 - (1 - t) * (1 - t), easeInOutQuad: (t) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2, easeInCubic: (t) => t * t * t, easeOutCubic: (t) => 1 - Math.pow(1 - t, 3), easeInOutCubic: (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2, easeInQuart: (t) => t * t * t * t, easeOutQuart: (t) => 1 - Math.pow(1 - t, 4), easeInOutQuart: (t) => t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2, easeInQuint: (t) => t * t * t * t * t, easeOutQuint: (t) => 1 - Math.pow(1 - t, 5), easeInOutQuint: (t) => t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2, easeInSine: (t) => 1 - Math.cos(t * Math.PI / 2), easeOutSine: (t) => Math.sin(t * Math.PI / 2), easeInOutSine: (t) => -(Math.cos(Math.PI * t) - 1) / 2, easeInExpo: (t) => t === 0 ? 0 : Math.pow(2, 10 * t - 10), easeOutExpo: (t) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t), easeInOutExpo: (t) => t === 0 ? 0 : t === 1 ? 1 : t < 0.5 ? Math.pow(2, 20 * t - 10) / 2 : (2 - Math.pow(2, -20 * t + 10)) / 2, easeInCirc: (t) => 1 - Math.sqrt(1 - Math.pow(t, 2)), easeOutCirc: (t) => Math.sqrt(1 - Math.pow(t - 1, 2)), easeInOutCirc: (t) => t < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * t, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * t + 2, 2)) + 1) / 2, easeInBack: (t) => Ng * t * t * t - Ac * t * t, easeOutBack: (t) => 1 + Ng * Math.pow(t - 1, 3) + Ac * Math.pow(t - 1, 2), easeInOutBack: (t) => t < 0.5 ? Math.pow(2 * t, 2) * ((vu + 1) * 2 * t - vu) / 2 : (Math.pow(2 * t - 2, 2) * ((vu + 1) * (t * 2 - 2) + vu) + 2) / 2, easeInElastic: (t) => t === 0 ? 0 : t === 1 ? 1 : -Math.pow(2, 10 * t - 10) * Math.sin((t * 10 - 10.75) * Ig), easeOutElastic: (t) => t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * Ig) + 1, easeInOutElastic: (t) => t === 0 ? 0 : t === 1 ? 1 : t < 0.5 ? -(Math.pow(2, 20 * t - 10) * Math.sin((20 * t - 11.125) * zg)) / 2 : Math.pow(2, -20 * t + 10) * Math.sin((20 * t - 11.125) * zg) / 2 + 1, easeInBounce: (t) => 1 - yu(1 - t), easeOutBounce: yu, easeInOutBounce: (t) => t < 0.5 ? (1 - yu(1 - 2 * t)) / 2 : (1 + yu(2 * t - 1)) / 2, steps: EE }, Wl = Symbol.for("FluidValue.get"), Fo = Symbol.for("FluidValue.observers"), er = (t) => !!(t && t[Wl]), gn = (t) => t && t[Wl] ? t[Wl]() : t, jg = (t) => t[Fo] || null;
function CE(t, e) {
  t.eventObserved ? t.eventObserved(e) : t(e);
}
function Es(t, e) {
  let n = t[Fo];
  n && n.forEach((r) => {
    CE(r, e);
  });
}
var v5, y5, xv, Y_ = (xv = class {
  constructor(t) {
    Z(this, v5);
    Z(this, y5);
    if (!t && !(t = this.get))
      throw Error("Unknown getter");
    TE(this, t);
  }
}, v5 = Wl, y5 = Fo, xv), TE = (t, e) => X_(t, Wl, e);
function ea(t, e) {
  if (t[Wl]) {
    let n = t[Fo];
    n || X_(t, Fo, n = /* @__PURE__ */ new Set()), n.has(e) || (n.add(e), t.observerAdded && t.observerAdded(n.size, e));
  }
  return e;
}
function Cs(t, e) {
  let n = t[Fo];
  if (n && n.has(e)) {
    let r = n.size - 1;
    r ? n.delete(e) : t[Fo] = null, t.observerRemoved && t.observerRemoved(r, e);
  }
}
var X_ = (t, e, n) => Object.defineProperty(t, e, { value: n, writable: !0, configurable: !0 }), Qu = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, bE = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, $g = new RegExp(`(${Qu.source})(%|[a-z]+)`, "i"), PE = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, _f = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/, G_ = (t) => {
  let [e, n] = RE(t);
  if (!e || T0())
    return t;
  let r = window.getComputedStyle(document.documentElement).getPropertyValue(e);
  return r ? r.trim() : n && n.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(n) || t : n && _f.test(n) ? G_(n) : n || t;
}, RE = (t) => {
  let e = _f.exec(t);
  if (!e)
    return [,];
  let [, n, r] = e;
  return [n, r];
}, pd, ME = (t, e, n, r, i) => `rgba(${Math.round(e)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`, Q_ = (t) => {
  pd || (pd = Xi ? new RegExp(`(${Object.keys(Xi).join("|")})(?!\\w)`, "g") : /^\b$/);
  let e = t.output.map((i) => gn(i).replace(_f, G_).replace(bE, Lg).replace(pd, Lg)), n = e.map((i) => i.match(Qu).map(Number)), r = n[0].map((i, o) => n.map((l) => {
    if (!(o in l))
      throw Error('The arity of each "output" value must be equal');
    return l[o];
  })).map((i) => ks({ ...t, output: i }));
  return (i) => {
    var a;
    let o = !$g.test(e[0]) && ((a = e.find((s) => $g.test(s))) == null ? void 0 : a.replace(Qu, "")), l = 0;
    return e[0].replace(Qu, () => `${r[l++](i)}${o || ""}`).replace(PE, ME);
  };
}, M0 = "react-spring: ", q_ = (t) => {
  let e = t, n = !1;
  if (typeof e != "function")
    throw new TypeError(`${M0}once requires a function parameter`);
  return (...r) => {
    n || (e(...r), n = !0);
  };
}, OE = q_(console.warn);
function DE() {
  OE(`${M0}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
var AE = q_(console.warn);
function LE() {
  AE(`${M0}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
}
function wf(t) {
  return $.str(t) && (t[0] == "#" || /\d/.test(t) || !T0() && _f.test(t) || t in (Xi || {}));
}
var wo = T0() ? S.useEffect : S.useLayoutEffect, NE = () => {
  let t = S.useRef(!1);
  return wo(() => (t.current = !0, () => {
    t.current = !1;
  }), []), t;
};
function O0() {
  let t = S.useState()[1], e = NE();
  return () => {
    e.current && t(Math.random());
  };
}
function IE(t, e) {
  let [n] = S.useState(() => ({ inputs: e, result: t() })), r = S.useRef(), i = r.current, o = i;
  return o ? e && o.inputs && zE(e, o.inputs) || (o = { inputs: e, result: t() }) : o = n, S.useEffect(() => {
    r.current = o, i == n && (n.inputs = n.result = void 0);
  }, [o]), o.result;
}
function zE(t, e) {
  if (t.length !== e.length)
    return !1;
  for (let n = 0; n < t.length; n++)
    if (t[n] !== e[n])
      return !1;
  return !0;
}
var D0 = (t) => S.useEffect(t, jE), jE = [];
function zh(t) {
  let e = S.useRef();
  return S.useEffect(() => {
    e.current = t;
  }), e.current;
}
var Ts = Symbol.for("Animated:node"), $E = (t) => !!t && t[Ts] === t, zr = (t) => t && t[Ts], A0 = (t, e) => aE(t, Ts, e), xf = (t) => t && t[Ts] && t[Ts].getPayload(), K_ = class {
  constructor() {
    Z(this, "payload");
    A0(this, this);
  }
  getPayload() {
    return this.payload || [];
  }
}, Xs = class extends K_ {
  constructor(e) {
    super();
    Z(this, "done", !0);
    Z(this, "elapsedTime");
    Z(this, "lastPosition");
    Z(this, "lastVelocity");
    Z(this, "v0");
    Z(this, "durationProgress", 0);
    this._value = e, $.num(this._value) && (this.lastPosition = this._value);
  }
  static create(e) {
    return new Xs(e);
  }
  getPayload() {
    return [this];
  }
  getValue() {
    return this._value;
  }
  setValue(e, n) {
    return $.num(e) && (this.lastPosition = e, n && (e = Math.round(e / n) * n, this.done && (this.lastPosition = e))), this._value === e ? !1 : (this._value = e, !0);
  }
  reset() {
    let { done: e } = this;
    this.done = !1, $.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null);
  }
}, bs = class extends Xs {
  constructor(e) {
    super(0);
    Z(this, "_string", null);
    Z(this, "_toString");
    this._toString = ks({ output: [e, e] });
  }
  static create(e) {
    return new bs(e);
  }
  getValue() {
    return this._string ?? (this._string = this._toString(this._value));
  }
  setValue(e) {
    if ($.str(e)) {
      if (e == this._string)
        return !1;
      this._string = e, this._value = 1;
    } else if (super.setValue(e))
      this._string = null;
    else
      return !1;
    return !0;
  }
  reset(e) {
    e && (this._toString = ks({ output: [this.getValue(), e] })), this._value = 0, super.reset();
  }
}, Lc = { dependencies: null }, Sf = class extends K_ {
  constructor(t) {
    super(), this.source = t, this.setValue(t);
  }
  getValue(t) {
    let e = {};
    return Xr(this.source, (n, r) => {
      $E(n) ? e[r] = n.getValue(t) : er(n) ? e[r] = gn(n) : t || (e[r] = n);
    }), e;
  }
  setValue(t) {
    this.source = t, this.payload = this._makePayload(t);
  }
  reset() {
    this.payload && ae(this.payload, (t) => t.reset());
  }
  _makePayload(t) {
    if (t) {
      let e = /* @__PURE__ */ new Set();
      return Xr(t, this._addToPayload, e), Array.from(e);
    }
  }
  _addToPayload(t) {
    Lc.dependencies && er(t) && Lc.dependencies.add(t);
    let e = xf(t);
    e && ae(e, (n) => this.add(n));
  }
}, Z_ = class extends Sf {
  constructor(e) {
    super(e);
  }
  static create(e) {
    return new Z_(e);
  }
  getValue() {
    return this.source.map((e) => e.getValue());
  }
  setValue(e) {
    let n = this.getPayload();
    return e.length == n.length ? n.map((r, i) => r.setValue(e[i])).some(Boolean) : (super.setValue(e.map(FE)), !0);
  }
};
function FE(t) {
  return (wf(t) ? bs : Xs).create(t);
}
function jh(t) {
  let e = zr(t);
  return e ? e.constructor : $.arr(t) ? Z_ : wf(t) ? bs : Xs;
}
var Fg = (t, e) => {
  let n = !$.fun(t) || t.prototype && t.prototype.isReactComponent;
  return S.forwardRef((r, i) => {
    let o = S.useRef(null), l = n && S.useCallback((m) => {
      o.current = VE(i, m);
    }, [i]), [a, s] = BE(r, e), u = O0(), c = () => {
      let m = o.current;
      n && !m || (m ? e.applyAnimatedValues(m, a.getValue(!0)) : !1) === !1 && u();
    }, f = new UE(c, s), d = S.useRef();
    wo(() => (d.current = f, ae(s, (m) => ea(m, f)), () => {
      d.current && (ae(d.current.deps, (m) => Cs(m, d.current)), ce.cancel(d.current.update));
    })), S.useEffect(c, []), D0(() => () => {
      let m = d.current;
      ae(m.deps, (h) => Cs(h, m));
    });
    let p = e.getComponentProps(a.getValue());
    return S.createElement(t, { ...p, ref: l });
  });
}, UE = class {
  constructor(t, e) {
    this.update = t, this.deps = e;
  }
  eventObserved(t) {
    t.type == "change" && ce.write(this.update);
  }
};
function BE(t, e) {
  let n = /* @__PURE__ */ new Set();
  return Lc.dependencies = n, t.style && (t = { ...t, style: e.createAnimatedStyle(t.style) }), t = new Sf(t), Lc.dependencies = null, [t, n];
}
function VE(t, e) {
  return t && ($.fun(t) ? t(e) : t.current = e), e;
}
var Ug = Symbol.for("AnimatedComponent"), WE = (t, { applyAnimatedValues: e = () => !1, createAnimatedStyle: n = (i) => new Sf(i), getComponentProps: r = (i) => i } = {}) => {
  let i = { applyAnimatedValues: e, createAnimatedStyle: n, getComponentProps: r }, o = (l) => {
    let a = Bg(l) || "Anonymous";
    return $.str(l) ? l = o[l] || (o[l] = Fg(l, i)) : l = l[Ug] || (l[Ug] = Fg(l, i)), l.displayName = `Animated(${a})`, l;
  };
  return Xr(t, (l, a) => {
    $.arr(t) && (a = Bg(l)), o[a] = o(l);
  }), { animated: o };
}, Bg = (t) => $.str(t) ? t : t && $.str(t.displayName) ? t.displayName : $.fun(t) && t.name || null;
function vn(t, ...e) {
  return $.fun(t) ? t(...e) : t;
}
var Ha = (t, e) => t === !0 || !!(e && t && ($.fun(t) ? t(e) : ln(t).includes(e))), J_ = (t, e) => $.obj(t) ? e && t[e] : t, ew = (t, e) => t.default === !0 ? t[e] : t.default ? t.default[e] : void 0, HE = (t) => t, kf = (t, e = HE) => {
  let n = YE;
  t.default && t.default !== !0 && (t = t.default, n = Object.keys(t));
  let r = {};
  for (let i of n) {
    let o = e(t[i], i);
    $.und(o) || (r[i] = o);
  }
  return r;
}, YE = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"], XE = { config: 1, from: 1, to: 1, ref: 1, loop: 1, reset: 1, pause: 1, cancel: 1, reverse: 1, immediate: 1, default: 1, delay: 1, onProps: 1, onStart: 1, onChange: 1, onPause: 1, onResume: 1, onRest: 1, onResolve: 1, items: 1, trail: 1, sort: 1, expires: 1, initial: 1, enter: 1, update: 1, leave: 1, children: 1, onDestroyed: 1, keys: 1, callId: 1, parentId: 1 };
function GE(t) {
  let e = {}, n = 0;
  if (Xr(t, (r, i) => {
    XE[i] || (e[i] = r, n++);
  }), n)
    return e;
}
function L0(t) {
  let e = GE(t);
  if (e) {
    let n = { to: e };
    return Xr(t, (r, i) => i in e || (n[i] = r)), n;
  }
  return { ...t };
}
function Ps(t) {
  return t = gn(t), $.arr(t) ? t.map(Ps) : wf(t) ? Mr.createStringInterpolator({ range: [0, 1], output: [t, t] })(1) : t;
}
function tw(t) {
  for (let e in t)
    return !0;
  return !1;
}
function $h(t) {
  return $.fun(t) || $.arr(t) && $.obj(t[0]);
}
function Fh(t, e) {
  var n;
  (n = t.ref) == null || n.delete(t), e == null || e.delete(t);
}
function nw(t, e) {
  var n;
  e && t.ref !== e && ((n = t.ref) == null || n.delete(t), e.add(t), t.ref = e);
}
var QE = { default: { tension: 170, friction: 26 }, gentle: { tension: 120, friction: 14 }, wobbly: { tension: 180, friction: 12 }, stiff: { tension: 210, friction: 20 }, slow: { tension: 280, friction: 60 }, molasses: { tension: 280, friction: 120 } }, Uh = { ...QE.default, mass: 1, damping: 1, easing: R0.linear, clamp: !1 }, qE = class {
  constructor() {
    Z(this, "tension");
    Z(this, "friction");
    Z(this, "frequency");
    Z(this, "damping");
    Z(this, "mass");
    Z(this, "velocity", 0);
    Z(this, "restVelocity");
    Z(this, "precision");
    Z(this, "progress");
    Z(this, "duration");
    Z(this, "easing");
    Z(this, "clamp");
    Z(this, "bounce");
    Z(this, "decay");
    Z(this, "round");
    Object.assign(this, Uh);
  }
};
function KE(t, e, n) {
  n && (n = { ...n }, Vg(n, e), e = { ...n, ...e }), Vg(t, e), Object.assign(t, e);
  for (let l in Uh)
    t[l] == null && (t[l] = Uh[l]);
  let { frequency: r, damping: i } = t, { mass: o } = t;
  return $.und(r) || (r < 0.01 && (r = 0.01), i < 0 && (i = 0), t.tension = Math.pow(2 * Math.PI / r, 2) * o, t.friction = 4 * Math.PI * i * o / r), t;
}
function Vg(t, e) {
  if (!$.und(e.decay))
    t.duration = void 0;
  else {
    let n = !$.und(e.tension) || !$.und(e.friction);
    (n || !$.und(e.frequency) || !$.und(e.damping) || !$.und(e.mass)) && (t.duration = void 0, t.decay = void 0), n && (t.frequency = void 0);
  }
}
var Wg = [], ZE = class {
  constructor() {
    Z(this, "changed", !1);
    Z(this, "values", Wg);
    Z(this, "toValues", null);
    Z(this, "fromValues", Wg);
    Z(this, "to");
    Z(this, "from");
    Z(this, "config", new qE());
    Z(this, "immediate", !1);
  }
};
function rw(t, { key: e, props: n, defaultProps: r, state: i, actions: o }) {
  return new Promise((l, a) => {
    let s, u, c = Ha(n.cancel ?? (r == null ? void 0 : r.cancel), e);
    if (c)
      p();
    else {
      $.und(n.pause) || (i.paused = Ha(n.pause, e));
      let m = r == null ? void 0 : r.pause;
      m !== !0 && (m = i.paused || Ha(m, e)), s = vn(n.delay || 0, e), m ? (i.resumeQueue.add(d), o.pause()) : (o.resume(), d());
    }
    function f() {
      i.resumeQueue.add(d), i.timeouts.delete(u), u.cancel(), s = u.time - ce.now();
    }
    function d() {
      s > 0 && !Mr.skipAnimation ? (i.delayed = !0, u = ce.setTimeout(p, s), i.pauseQueue.add(f), i.timeouts.add(u)) : p();
    }
    function p() {
      i.delayed && (i.delayed = !1), i.pauseQueue.delete(f), i.timeouts.delete(u), t <= (i.cancelId || 0) && (c = !0);
      try {
        o.start({ ...n, callId: t, cancel: c }, l);
      } catch (m) {
        a(m);
      }
    }
  });
}
var N0 = (t, e) => e.length == 1 ? e[0] : e.some((n) => n.cancelled) ? Ml(t.get()) : e.every((n) => n.noop) ? iw(t.get()) : kr(t.get(), e.every((n) => n.finished)), iw = (t) => ({ value: t, noop: !0, finished: !0, cancelled: !1 }), kr = (t, e, n = !1) => ({ value: t, finished: e, cancelled: n }), Ml = (t) => ({ value: t, cancelled: !0, finished: !1 });
function ow(t, e, n, r) {
  let { callId: i, parentId: o, onRest: l } = e, { asyncTo: a, promise: s } = n;
  return !o && t === a && !e.reset ? s : n.promise = (async () => {
    n.asyncId = i, n.asyncTo = t;
    let u = kf(e, (y, g) => g === "onRest" ? void 0 : y), c, f, d = new Promise((y, g) => (c = y, f = g)), p = (y) => {
      let g = i <= (n.cancelId || 0) && Ml(r) || i !== n.asyncId && kr(r, !1);
      if (g)
        throw y.result = g, f(y), y;
    }, m = (y, g) => {
      let v = new Hg(), _ = new Yg();
      return (async () => {
        if (Mr.skipAnimation)
          throw Rs(n), _.result = kr(r, !1), f(_), _;
        p(v);
        let w = $.obj(y) ? { ...y } : { ...g, to: y };
        w.parentId = i, Xr(u, (x, k) => {
          $.und(w[k]) && (w[k] = x);
        });
        let T = await r.start(w);
        return p(v), n.paused && await new Promise((x) => {
          n.resumeQueue.add(x);
        }), T;
      })();
    }, h;
    if (Mr.skipAnimation)
      return Rs(n), kr(r, !1);
    try {
      let y;
      $.arr(t) ? y = (async (g) => {
        for (let v of g)
          await m(v);
      })(t) : y = Promise.resolve(t(m, r.stop.bind(r))), await Promise.all([y.then(c), d]), h = kr(r.get(), !0, !1);
    } catch (y) {
      if (y instanceof Hg)
        h = y.result;
      else if (y instanceof Yg)
        h = y.result;
      else
        throw y;
    } finally {
      i == n.asyncId && (n.asyncId = o, n.asyncTo = o ? a : void 0, n.promise = o ? s : void 0);
    }
    return $.fun(l) && ce.batchedUpdates(() => {
      l(h, r, r.item);
    }), h;
  })();
}
function Rs(t, e) {
  Va(t.timeouts, (n) => n.cancel()), t.pauseQueue.clear(), t.resumeQueue.clear(), t.asyncId = t.asyncTo = t.promise = void 0, e && (t.cancelId = e);
}
var Hg = class extends Error {
  constructor() {
    super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.");
    Z(this, "result");
  }
}, Yg = class extends Error {
  constructor() {
    super("SkipAnimationSignal");
    Z(this, "result");
  }
}, Bh = (t) => t instanceof I0, JE = 1, I0 = class extends Y_ {
  constructor() {
    super(...arguments);
    Z(this, "id", JE++);
    Z(this, "_priority", 0);
  }
  get priority() {
    return this._priority;
  }
  set priority(e) {
    this._priority != e && (this._priority = e, this._onPriorityChange(e));
  }
  get() {
    let e = zr(this);
    return e && e.getValue();
  }
  to(...e) {
    return Mr.to(this, e);
  }
  interpolate(...e) {
    return DE(), Mr.to(this, e);
  }
  toJSON() {
    return this.get();
  }
  observerAdded(e) {
    e == 1 && this._attach();
  }
  observerRemoved(e) {
    e == 0 && this._detach();
  }
  _attach() {
  }
  _detach() {
  }
  _onChange(e, n = !1) {
    Es(this, { type: "change", parent: this, value: e, idle: n });
  }
  _onPriorityChange(e) {
    this.idle || vf.sort(this), Es(this, { type: "priority", parent: this, priority: e });
  }
}, Uo = Symbol.for("SpringPhase"), lw = 1, Vh = 2, Wh = 4, md = (t) => (t[Uo] & lw) > 0, Si = (t) => (t[Uo] & Vh) > 0, da = (t) => (t[Uo] & Wh) > 0, Xg = (t, e) => e ? t[Uo] |= Vh | lw : t[Uo] &= ~Vh, Gg = (t, e) => e ? t[Uo] |= Wh : t[Uo] &= ~Wh, eC = class extends I0 {
  constructor(e, n) {
    super();
    Z(this, "key");
    Z(this, "animation", new ZE());
    Z(this, "queue");
    Z(this, "defaultProps", {});
    Z(this, "_state", { paused: !1, delayed: !1, pauseQueue: /* @__PURE__ */ new Set(), resumeQueue: /* @__PURE__ */ new Set(), timeouts: /* @__PURE__ */ new Set() });
    Z(this, "_pendingCalls", /* @__PURE__ */ new Set());
    Z(this, "_lastCallId", 0);
    Z(this, "_lastToId", 0);
    Z(this, "_memoizedDuration", 0);
    if (!$.und(e) || !$.und(n)) {
      let r = $.obj(e) ? { ...e } : { ...n, from: e };
      $.und(r.default) && (r.default = !0), this.start(r);
    }
  }
  get idle() {
    return !(Si(this) || this._state.asyncTo) || da(this);
  }
  get goal() {
    return gn(this.animation.to);
  }
  get velocity() {
    let e = zr(this);
    return e instanceof Xs ? e.lastVelocity || 0 : e.getPayload().map((n) => n.lastVelocity || 0);
  }
  get hasAnimated() {
    return md(this);
  }
  get isAnimating() {
    return Si(this);
  }
  get isPaused() {
    return da(this);
  }
  get isDelayed() {
    return this._state.delayed;
  }
  advance(e) {
    let n = !0, r = !1, i = this.animation, { toValues: o } = i, { config: l } = i, a = xf(i.to);
    !a && er(i.to) && (o = ln(gn(i.to))), i.values.forEach((c, f) => {
      if (c.done)
        return;
      let d = c.constructor == bs ? 1 : a ? a[f].lastPosition : o[f], p = i.immediate, m = d;
      if (!p) {
        if (m = c.lastPosition, l.tension <= 0) {
          c.done = !0;
          return;
        }
        let h = c.elapsedTime += e, y = i.fromValues[f], g = c.v0 != null ? c.v0 : c.v0 = $.arr(l.velocity) ? l.velocity[f] : l.velocity, v, _ = l.precision || (y == d ? 5e-3 : Math.min(1, Math.abs(d - y) * 1e-3));
        if ($.und(l.duration))
          if (l.decay) {
            let w = l.decay === !0 ? 0.998 : l.decay, T = Math.exp(-(1 - w) * h);
            m = y + g / (1 - w) * (1 - T), p = Math.abs(c.lastPosition - m) <= _, v = g * T;
          } else {
            v = c.lastVelocity == null ? g : c.lastVelocity;
            let w = l.restVelocity || _ / 10, T = l.clamp ? 0 : l.bounce, x = !$.und(T), k = y == d ? c.v0 > 0 : y < d, b, R = !1, M = 1, B = Math.ceil(e / M);
            for (let I = 0; I < B && (b = Math.abs(v) > w, !(!b && (p = Math.abs(d - m) <= _, p))); ++I) {
              x && (R = m == d || m > d == k, R && (v = -v * T, m = d));
              let te = -l.tension * 1e-6 * (m - d), z = -l.friction * 1e-3 * v, Y = (te + z) / l.mass;
              v = v + Y * M, m = m + v * M;
            }
          }
        else {
          let w = 1;
          l.duration > 0 && (this._memoizedDuration !== l.duration && (this._memoizedDuration = l.duration, c.durationProgress > 0 && (c.elapsedTime = l.duration * c.durationProgress, h = c.elapsedTime += e)), w = (l.progress || 0) + h / this._memoizedDuration, w = w > 1 ? 1 : w < 0 ? 0 : w, c.durationProgress = w), m = y + l.easing(w) * (d - y), v = (m - c.lastPosition) / e, p = w == 1;
        }
        c.lastVelocity = v, Number.isNaN(m) && (console.warn("Got NaN while animating:", this), p = !0);
      }
      a && !a[f].done && (p = !1), p ? c.done = !0 : n = !1, c.setValue(m, l.round) && (r = !0);
    });
    let s = zr(this), u = s.getValue();
    if (n) {
      let c = gn(i.to);
      (u !== c || r) && !l.decay ? (s.setValue(c), this._onChange(c)) : r && l.decay && this._onChange(u), this._stop();
    } else
      r && this._onChange(u);
  }
  set(e) {
    return ce.batchedUpdates(() => {
      this._stop(), this._focus(e), this._set(e);
    }), this;
  }
  pause() {
    this._update({ pause: !0 });
  }
  resume() {
    this._update({ pause: !1 });
  }
  finish() {
    if (Si(this)) {
      let { to: e, config: n } = this.animation;
      ce.batchedUpdates(() => {
        this._onStart(), n.decay || this._set(e, !1), this._stop();
      });
    }
    return this;
  }
  update(e) {
    return (this.queue || (this.queue = [])).push(e), this;
  }
  start(e, n) {
    let r;
    return $.und(e) ? (r = this.queue || [], this.queue = []) : r = [$.obj(e) ? e : { ...n, to: e }], Promise.all(r.map((i) => this._update(i))).then((i) => N0(this, i));
  }
  stop(e) {
    let { to: n } = this.animation;
    return this._focus(this.get()), Rs(this._state, e && this._lastCallId), ce.batchedUpdates(() => this._stop(n, e)), this;
  }
  reset() {
    this._update({ reset: !0 });
  }
  eventObserved(e) {
    e.type == "change" ? this._start() : e.type == "priority" && (this.priority = e.priority + 1);
  }
  _prepareNode(e) {
    let n = this.key || "", { to: r, from: i } = e;
    r = $.obj(r) ? r[n] : r, (r == null || $h(r)) && (r = void 0), i = $.obj(i) ? i[n] : i, i == null && (i = void 0);
    let o = { to: r, from: i };
    return md(this) || (e.reverse && ([r, i] = [i, r]), i = gn(i), $.und(i) ? zr(this) || this._set(r) : this._set(i)), o;
  }
  _update({ ...e }, n) {
    let { key: r, defaultProps: i } = this;
    e.default && Object.assign(i, kf(e, (a, s) => /^on/.test(s) ? J_(a, r) : a)), qg(this, e, "onProps"), pa(this, "onProps", e, this);
    let o = this._prepareNode(e);
    if (Object.isFrozen(this))
      throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
    let l = this._state;
    return rw(++this._lastCallId, { key: r, props: e, defaultProps: i, state: l, actions: { pause: () => {
      da(this) || (Gg(this, !0), ba(l.pauseQueue), pa(this, "onPause", kr(this, ha(this, this.animation.to)), this));
    }, resume: () => {
      da(this) && (Gg(this, !1), Si(this) && this._resume(), ba(l.resumeQueue), pa(this, "onResume", kr(this, ha(this, this.animation.to)), this));
    }, start: this._merge.bind(this, o) } }).then((a) => {
      if (e.loop && a.finished && !(n && a.noop)) {
        let s = aw(e);
        if (s)
          return this._update(s, !0);
      }
      return a;
    });
  }
  _merge(e, n, r) {
    if (n.cancel)
      return this.stop(!0), r(Ml(this));
    let i = !$.und(e.to), o = !$.und(e.from);
    if (i || o)
      if (n.callId > this._lastToId)
        this._lastToId = n.callId;
      else
        return r(Ml(this));
    let { key: l, defaultProps: a, animation: s } = this, { to: u, from: c } = s, { to: f = u, from: d = c } = e;
    o && !i && (!n.default || $.und(f)) && (f = d), n.reverse && ([f, d] = [d, f]);
    let p = !ti(d, c);
    p && (s.from = d), d = gn(d);
    let m = !ti(f, u);
    m && this._focus(f);
    let h = $h(n.to), { config: y } = s, { decay: g, velocity: v } = y;
    (i || o) && (y.velocity = 0), n.config && !h && KE(y, vn(n.config, l), n.config !== a.config ? vn(a.config, l) : void 0);
    let _ = zr(this);
    if (!_ || $.und(f))
      return r(kr(this, !0));
    let w = $.und(n.reset) ? o && !n.default : !$.und(d) && Ha(n.reset, l), T = w ? d : this.get(), x = Ps(f), k = $.num(x) || $.arr(x) || wf(x), b = !h && (!k || Ha(a.immediate || n.immediate, l));
    if (m) {
      let I = jh(f);
      if (I !== _.constructor)
        if (b)
          _ = this._set(x);
        else
          throw Error(`Cannot animate between ${_.constructor.name} and ${I.name}, as the "to" prop suggests`);
    }
    let R = _.constructor, M = er(f), B = !1;
    if (!M) {
      let I = w || !md(this) && p;
      (m || I) && (B = ti(Ps(T), x), M = !B), (!ti(s.immediate, b) && !b || !ti(y.decay, g) || !ti(y.velocity, v)) && (M = !0);
    }
    if (B && Si(this) && (s.changed && !w ? M = !0 : M || this._stop(u)), !h && ((M || er(u)) && (s.values = _.getPayload(), s.toValues = er(f) ? null : R == bs ? [1] : ln(x)), s.immediate != b && (s.immediate = b, !b && !w && this._set(u)), M)) {
      let { onRest: I } = s;
      ae(nC, (z) => qg(this, n, z));
      let te = kr(this, ha(this, u));
      ba(this._pendingCalls, te), this._pendingCalls.add(r), s.changed && ce.batchedUpdates(() => {
        var z;
        s.changed = !w, I == null || I(te, this), w ? vn(a.onRest, te) : (z = s.onStart) == null || z.call(s, te, this);
      });
    }
    w && this._set(T), h ? r(ow(n.to, n, this._state, this)) : M ? this._start() : Si(this) && !m ? this._pendingCalls.add(r) : r(iw(T));
  }
  _focus(e) {
    let n = this.animation;
    e !== n.to && (jg(this) && this._detach(), n.to = e, jg(this) && this._attach());
  }
  _attach() {
    let e = 0, { to: n } = this.animation;
    er(n) && (ea(n, this), Bh(n) && (e = n.priority + 1)), this.priority = e;
  }
  _detach() {
    let { to: e } = this.animation;
    er(e) && Cs(e, this);
  }
  _set(e, n = !0) {
    let r = gn(e);
    if (!$.und(r)) {
      let i = zr(this);
      if (!i || !ti(r, i.getValue())) {
        let o = jh(r);
        !i || i.constructor != o ? A0(this, o.create(r)) : i.setValue(r), i && ce.batchedUpdates(() => {
          this._onChange(r, n);
        });
      }
    }
    return zr(this);
  }
  _onStart() {
    let e = this.animation;
    e.changed || (e.changed = !0, pa(this, "onStart", kr(this, ha(this, e.to)), this));
  }
  _onChange(e, n) {
    n || (this._onStart(), vn(this.animation.onChange, e, this)), vn(this.defaultProps.onChange, e, this), super._onChange(e, n);
  }
  _start() {
    let e = this.animation;
    zr(this).reset(gn(e.to)), e.immediate || (e.fromValues = e.values.map((n) => n.lastPosition)), Si(this) || (Xg(this, !0), da(this) || this._resume());
  }
  _resume() {
    Mr.skipAnimation ? this.finish() : vf.start(this);
  }
  _stop(e, n) {
    if (Si(this)) {
      Xg(this, !1);
      let r = this.animation;
      ae(r.values, (o) => {
        o.done = !0;
      }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), Es(this, { type: "idle", parent: this });
      let i = n ? Ml(this.get()) : kr(this.get(), ha(this, e ?? r.to));
      ba(this._pendingCalls, i), r.changed && (r.changed = !1, pa(this, "onRest", i, this));
    }
  }
};
function ha(t, e) {
  let n = Ps(e), r = Ps(t.get());
  return ti(r, n);
}
function aw(t, e = t.loop, n = t.to) {
  let r = vn(e);
  if (r) {
    let i = r !== !0 && L0(r), o = (i || t).reverse, l = !i || i.reset;
    return Ms({ ...t, loop: e, default: !1, pause: void 0, to: !o || $h(n) ? n : void 0, from: l ? t.from : void 0, reset: l, ...i });
  }
}
function Ms(t) {
  let { to: e, from: n } = t = L0(t), r = /* @__PURE__ */ new Set();
  return $.obj(e) && Qg(e, r), $.obj(n) && Qg(n, r), t.keys = r.size ? Array.from(r) : null, t;
}
function tC(t) {
  let e = Ms(t);
  return $.und(e.default) && (e.default = kf(e)), e;
}
function Qg(t, e) {
  Xr(t, (n, r) => n != null && e.add(r));
}
var nC = ["onStart", "onRest", "onChange", "onPause", "onResume"];
function qg(t, e, n) {
  t.animation[n] = e[n] !== ew(e, n) ? J_(e[n], t.key) : void 0;
}
function pa(t, e, ...n) {
  var r, i, o, l;
  (i = (r = t.animation)[e]) == null || i.call(r, ...n), (l = (o = t.defaultProps)[e]) == null || l.call(o, ...n);
}
var rC = ["onStart", "onChange", "onRest"], iC = 1, sw = class {
  constructor(t, e) {
    Z(this, "id", iC++);
    Z(this, "springs", {});
    Z(this, "queue", []);
    Z(this, "ref");
    Z(this, "_flush");
    Z(this, "_initialProps");
    Z(this, "_lastAsyncId", 0);
    Z(this, "_active", /* @__PURE__ */ new Set());
    Z(this, "_changed", /* @__PURE__ */ new Set());
    Z(this, "_started", !1);
    Z(this, "_item");
    Z(this, "_state", { paused: !1, pauseQueue: /* @__PURE__ */ new Set(), resumeQueue: /* @__PURE__ */ new Set(), timeouts: /* @__PURE__ */ new Set() });
    Z(this, "_events", { onStart: /* @__PURE__ */ new Map(), onChange: /* @__PURE__ */ new Map(), onRest: /* @__PURE__ */ new Map() });
    this._onFrame = this._onFrame.bind(this), e && (this._flush = e), t && this.start({ default: !0, ...t });
  }
  get idle() {
    return !this._state.asyncTo && Object.values(this.springs).every((t) => t.idle && !t.isDelayed && !t.isPaused);
  }
  get item() {
    return this._item;
  }
  set item(t) {
    this._item = t;
  }
  get() {
    let t = {};
    return this.each((e, n) => t[n] = e.get()), t;
  }
  set(t) {
    for (let e in t) {
      let n = t[e];
      $.und(n) || this.springs[e].set(n);
    }
  }
  update(t) {
    return t && this.queue.push(Ms(t)), this;
  }
  start(t) {
    let { queue: e } = this;
    return t ? e = ln(t).map(Ms) : this.queue = [], this._flush ? this._flush(this, e) : (hw(this, e), Hh(this, e));
  }
  stop(t, e) {
    if (t !== !!t && (e = t), e) {
      let n = this.springs;
      ae(ln(e), (r) => n[r].stop(!!t));
    } else
      Rs(this._state, this._lastAsyncId), this.each((n) => n.stop(!!t));
    return this;
  }
  pause(t) {
    if ($.und(t))
      this.start({ pause: !0 });
    else {
      let e = this.springs;
      ae(ln(t), (n) => e[n].pause());
    }
    return this;
  }
  resume(t) {
    if ($.und(t))
      this.start({ pause: !1 });
    else {
      let e = this.springs;
      ae(ln(t), (n) => e[n].resume());
    }
    return this;
  }
  each(t) {
    Xr(this.springs, t);
  }
  _onFrame() {
    let { onStart: t, onChange: e, onRest: n } = this._events, r = this._active.size > 0, i = this._changed.size > 0;
    (r && !this._started || i && !this._started) && (this._started = !0, Va(t, ([a, s]) => {
      s.value = this.get(), a(s, this, this._item);
    }));
    let o = !r && this._started, l = i || o && n.size ? this.get() : null;
    i && e.size && Va(e, ([a, s]) => {
      s.value = l, a(s, this, this._item);
    }), o && (this._started = !1, Va(n, ([a, s]) => {
      s.value = l, a(s, this, this._item);
    }));
  }
  eventObserved(t) {
    if (t.type == "change")
      this._changed.add(t.parent), t.idle || this._active.add(t.parent);
    else if (t.type == "idle")
      this._active.delete(t.parent);
    else
      return;
    ce.onFrame(this._onFrame);
  }
};
function Hh(t, e) {
  return Promise.all(e.map((n) => uw(t, n))).then((n) => N0(t, n));
}
async function uw(t, e, n) {
  let { keys: r, to: i, from: o, loop: l, onRest: a, onResolve: s } = e, u = $.obj(e.default) && e.default;
  l && (e.loop = !1), i === !1 && (e.to = null), o === !1 && (e.from = null);
  let c = $.arr(i) || $.fun(i) ? i : void 0;
  c ? (e.to = void 0, e.onRest = void 0, u && (u.onRest = void 0)) : ae(rC, (h) => {
    let y = e[h];
    if ($.fun(y)) {
      let g = t._events[h];
      e[h] = ({ finished: v, cancelled: _ }) => {
        let w = g.get(y);
        w ? (v || (w.finished = !1), _ && (w.cancelled = !0)) : g.set(y, { value: null, finished: v || !1, cancelled: _ || !1 });
      }, u && (u[h] = e[h]);
    }
  });
  let f = t._state;
  e.pause === !f.paused ? (f.paused = e.pause, ba(e.pause ? f.pauseQueue : f.resumeQueue)) : f.paused && (e.pause = !0);
  let d = (r || Object.keys(t.springs)).map((h) => t.springs[h].start(e)), p = e.cancel === !0 || ew(e, "cancel") === !0;
  (c || p && f.asyncId) && d.push(rw(++t._lastAsyncId, { props: e, state: f, actions: { pause: Nh, resume: Nh, start(h, y) {
    p ? (Rs(f, t._lastAsyncId), y(Ml(t))) : (h.onRest = a, y(ow(c, h, f, t)));
  } } })), f.paused && await new Promise((h) => {
    f.resumeQueue.add(h);
  });
  let m = N0(t, await Promise.all(d));
  if (l && m.finished && !(n && m.noop)) {
    let h = aw(e, l, i);
    if (h)
      return hw(t, [h]), uw(t, h, !0);
  }
  return s && ce.batchedUpdates(() => s(m, t, t.item)), m;
}
function Yh(t, e) {
  let n = { ...t.springs };
  return e && ae(ln(e), (r) => {
    $.und(r.keys) && (r = Ms(r)), $.obj(r.to) || (r = { ...r, to: void 0 }), dw(n, r, (i) => fw(i));
  }), cw(t, n), n;
}
function cw(t, e) {
  Xr(e, (n, r) => {
    t.springs[r] || (t.springs[r] = n, ea(n, t));
  });
}
function fw(t, e) {
  let n = new eC();
  return n.key = t, e && ea(n, e), n;
}
function dw(t, e, n) {
  e.keys && ae(e.keys, (r) => {
    (t[r] || (t[r] = n(r)))._prepareNode(e);
  });
}
function hw(t, e) {
  ae(e, (n) => {
    dw(t.springs, n, (r) => fw(r, t));
  });
}
var Gs = ({ children: t, ...e }) => {
  let n = S.useContext(Nc), r = e.pause || !!n.pause, i = e.immediate || !!n.immediate;
  e = IE(() => ({ pause: r, immediate: i }), [r, i]);
  let { Provider: o } = Nc;
  return S.createElement(o, { value: e }, t);
}, Nc = oC(Gs, {});
Gs.Provider = Nc.Provider;
Gs.Consumer = Nc.Consumer;
function oC(t, e) {
  return Object.assign(t, S.createContext(e)), t.Provider._context = t, t.Consumer._context = t, t;
}
var z0 = () => {
  let t = [], e = function(r) {
    LE();
    let i = [];
    return ae(t, (o, l) => {
      if ($.und(r))
        i.push(o.start());
      else {
        let a = n(r, o, l);
        a && i.push(o.start(a));
      }
    }), i;
  };
  e.current = t, e.add = function(r) {
    t.includes(r) || t.push(r);
  }, e.delete = function(r) {
    let i = t.indexOf(r);
    ~i && t.splice(i, 1);
  }, e.pause = function() {
    return ae(t, (r) => r.pause(...arguments)), this;
  }, e.resume = function() {
    return ae(t, (r) => r.resume(...arguments)), this;
  }, e.set = function(r) {
    ae(t, (i, o) => {
      let l = $.fun(r) ? r(o, i) : r;
      l && i.set(l);
    });
  }, e.start = function(r) {
    let i = [];
    return ae(t, (o, l) => {
      if ($.und(r))
        i.push(o.start());
      else {
        let a = this._getProps(r, o, l);
        a && i.push(o.start(a));
      }
    }), i;
  }, e.stop = function() {
    return ae(t, (r) => r.stop(...arguments)), this;
  }, e.update = function(r) {
    return ae(t, (i, o) => i.update(this._getProps(r, i, o))), this;
  };
  let n = function(r, i, o) {
    return $.fun(r) ? r(o, i) : r;
  };
  return e._getProps = n, e;
};
function lC(t, e, n) {
  let r = $.fun(e) && e;
  r && !n && (n = []);
  let i = S.useMemo(() => r || arguments.length == 3 ? z0() : void 0, []), o = S.useRef(0), l = O0(), a = S.useMemo(() => ({ ctrls: [], queue: [], flush(g, v) {
    let _ = Yh(g, v);
    return o.current > 0 && !a.queue.length && !Object.keys(_).some((w) => !g.springs[w]) ? Hh(g, v) : new Promise((w) => {
      cw(g, _), a.queue.push(() => {
        w(Hh(g, v));
      }), l();
    });
  } }), []), s = S.useRef([...a.ctrls]), u = [], c = zh(t) || 0;
  S.useMemo(() => {
    ae(s.current.slice(t, c), (g) => {
      Fh(g, i), g.stop(!0);
    }), s.current.length = t, f(c, t);
  }, [t]), S.useMemo(() => {
    f(0, Math.min(c, t));
  }, n);
  function f(g, v) {
    for (let _ = g; _ < v; _++) {
      let w = s.current[_] || (s.current[_] = new sw(null, a.flush)), T = r ? r(_, w) : e[_];
      T && (u[_] = tC(T));
    }
  }
  let d = s.current.map((g, v) => Yh(g, u[v])), p = S.useContext(Gs), m = zh(p), h = p !== m && tw(p);
  wo(() => {
    o.current++, a.ctrls = s.current;
    let { queue: g } = a;
    g.length && (a.queue = [], ae(g, (v) => v())), ae(s.current, (v, _) => {
      i == null || i.add(v), h && v.start({ default: p });
      let w = u[_];
      w && (nw(v, w.ref), v.ref ? v.queue.push(w) : v.start(w));
    });
  }), D0(() => () => {
    ae(a.ctrls, (g) => g.stop(!0));
  });
  let y = d.map((g) => ({ ...g }));
  return i ? [y, i] : y;
}
function se(t, e) {
  let n = $.fun(t), [[r], i] = lC(1, n ? t : [t], n ? e || [] : e);
  return n || arguments.length == 2 ? [r, i] : r;
}
var aC = () => z0(), Kg = () => S.useState(aC)[0];
function sC(t, e, n) {
  let r = $.fun(e) && e, { reset: i, sort: o, trail: l = 0, expires: a = !0, exitBeforeEnter: s = !1, onDestroyed: u, ref: c, config: f } = r ? r() : e, d = S.useMemo(() => r || arguments.length == 3 ? z0() : void 0, []), p = ln(t), m = [], h = S.useRef(null), y = i ? null : h.current;
  wo(() => {
    h.current = m;
  }), D0(() => (ae(m, (z) => {
    d == null || d.add(z.ctrl), z.ctrl.ref = d;
  }), () => {
    ae(h.current, (z) => {
      z.expired && clearTimeout(z.expirationId), Fh(z.ctrl, d), z.ctrl.stop(!0);
    });
  }));
  let g = cC(p, r ? r() : e, y), v = i && h.current || [];
  wo(() => ae(v, ({ ctrl: z, item: Y, key: ne }) => {
    Fh(z, d), vn(u, Y, ne);
  }));
  let _ = [];
  if (y && ae(y, (z, Y) => {
    z.expired ? (clearTimeout(z.expirationId), v.push(z)) : (Y = _[Y] = g.indexOf(z.key), ~Y && (m[Y] = z));
  }), ae(p, (z, Y) => {
    m[Y] || (m[Y] = { key: g[Y], item: z, phase: "mount", ctrl: new sw() }, m[Y].ctrl.item = z);
  }), _.length) {
    let z = -1, { leave: Y } = r ? r() : e;
    ae(_, (ne, V) => {
      let A = y[V];
      ~ne ? (z = m.indexOf(A), m[z] = { ...A, item: p[ne] }) : Y && m.splice(++z, 0, A);
    });
  }
  $.fun(o) && m.sort((z, Y) => o(z.item, Y.item));
  let w = -l, T = O0(), x = kf(e), k = /* @__PURE__ */ new Map(), b = S.useRef(/* @__PURE__ */ new Map()), R = S.useRef(!1);
  ae(m, (z, Y) => {
    let ne = z.key, V = z.phase, A = r ? r() : e, U, C, re = vn(A.delay || 0, ne);
    if (V == "mount")
      U = A.enter, C = "enter";
    else {
      let de = g.indexOf(ne) < 0;
      if (V != "leave")
        if (de)
          U = A.leave, C = "leave";
        else if (U = A.update)
          C = "update";
        else
          return;
      else if (!de)
        U = A.enter, C = "enter";
      else
        return;
    }
    if (U = vn(U, z.item, Y), U = $.obj(U) ? L0(U) : { to: U }, !U.config) {
      let de = f || x.config;
      U.config = vn(de, z.item, Y, C);
    }
    w += l;
    let oe = { ...x, delay: re + w, ref: c, immediate: A.immediate, reset: !1, ...U };
    if (C == "enter" && $.und(oe.from)) {
      let de = r ? r() : e, ge = $.und(de.initial) || y ? de.from : de.initial;
      oe.from = vn(ge, z.item, Y);
    }
    let { onResolve: We } = oe;
    oe.onResolve = (de) => {
      vn(We, de);
      let ge = h.current, he = ge.find((rt) => rt.key === ne);
      if (he && !(de.cancelled && he.phase != "update") && he.ctrl.idle) {
        let rt = ge.every((je) => je.ctrl.idle);
        if (he.phase == "leave") {
          let je = vn(a, he.item);
          if (je !== !1) {
            let fn = je === !0 ? 0 : je;
            if (he.expired = !0, !rt && fn > 0) {
              fn <= 2147483647 && (he.expirationId = setTimeout(T, fn));
              return;
            }
          }
        }
        rt && ge.some((je) => je.expired) && (b.current.delete(he), s && (R.current = !0), T());
      }
    };
    let ue = Yh(z.ctrl, oe);
    C === "leave" && s ? b.current.set(z, { phase: C, springs: ue, payload: oe }) : k.set(z, { phase: C, springs: ue, payload: oe });
  });
  let M = S.useContext(Gs), B = zh(M), I = M !== B && tw(M);
  wo(() => {
    I && ae(m, (z) => {
      z.ctrl.start({ default: M });
    });
  }, [M]), ae(k, (z, Y) => {
    if (b.current.size) {
      let ne = m.findIndex((V) => V.key === Y.key);
      m.splice(ne, 1);
    }
  }), wo(() => {
    ae(b.current.size ? b.current : k, ({ phase: z, payload: Y }, ne) => {
      let { ctrl: V } = ne;
      ne.phase = z, d == null || d.add(V), I && z == "enter" && V.start({ default: M }), Y && (nw(V, Y.ref), (V.ref || d) && !R.current ? V.update(Y) : (V.start(Y), R.current && (R.current = !1)));
    });
  }, i ? void 0 : n);
  let te = (z) => S.createElement(S.Fragment, null, m.map((Y, ne) => {
    let { springs: V } = k.get(Y) || Y.ctrl, A = z({ ...V }, Y.item, Y, ne);
    return A && A.type ? S.createElement(A.type, { ...A.props, key: $.str(Y.key) || $.num(Y.key) ? Y.key : Y.ctrl.id, ref: A.ref }) : A;
  }));
  return d ? [te, d] : te;
}
var uC = 1;
function cC(t, { key: e, keys: n = e }, r) {
  if (n === null) {
    let i = /* @__PURE__ */ new Set();
    return t.map((o) => {
      let l = r && r.find((a) => a.item === o && a.phase !== "leave" && !i.has(a));
      return l ? (i.add(l), l.key) : uC++;
    });
  }
  return $.und(n) ? t : $.fun(n) ? t.map(n) : ln(n);
}
var fC = class extends I0 {
  constructor(e, n) {
    super();
    Z(this, "key");
    Z(this, "idle", !0);
    Z(this, "calc");
    Z(this, "_active", /* @__PURE__ */ new Set());
    this.source = e, this.calc = ks(...n);
    let r = this._get(), i = jh(r);
    A0(this, i.create(r));
  }
  advance(e) {
    let n = this._get(), r = this.get();
    ti(n, r) || (zr(this).setValue(n), this._onChange(n, this.idle)), !this.idle && Zg(this._active) && gd(this);
  }
  _get() {
    let e = $.arr(this.source) ? this.source.map(gn) : ln(gn(this.source));
    return this.calc(...e);
  }
  _start() {
    this.idle && !Zg(this._active) && (this.idle = !1, ae(xf(this), (e) => {
      e.done = !1;
    }), Mr.skipAnimation ? (ce.batchedUpdates(() => this.advance()), gd(this)) : vf.start(this));
  }
  _attach() {
    let e = 1;
    ae(ln(this.source), (n) => {
      er(n) && ea(n, this), Bh(n) && (n.idle || this._active.add(n), e = Math.max(e, n.priority + 1));
    }), this.priority = e, this._start();
  }
  _detach() {
    ae(ln(this.source), (e) => {
      er(e) && Cs(e, this);
    }), this._active.clear(), gd(this);
  }
  eventObserved(e) {
    e.type == "change" ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : e.type == "idle" ? this._active.delete(e.parent) : e.type == "priority" && (this.priority = ln(this.source).reduce((n, r) => Math.max(n, (Bh(r) ? r.priority : 0) + 1), 0));
  }
};
function dC(t) {
  return t.idle !== !1;
}
function Zg(t) {
  return !t.size || Array.from(t).every(dC);
}
function gd(t) {
  t.idle || (t.idle = !0, ae(xf(t), (e) => {
    e.done = !0;
  }), Es(t, { type: "idle", parent: t }));
}
Mr.assign({ createStringInterpolator: Q_, to: (t, e) => new fC(t, e) });
var pw = /^--/;
function hC(t, e) {
  return e == null || typeof e == "boolean" || e === "" ? "" : typeof e == "number" && e !== 0 && !pw.test(t) && !(Ya.hasOwnProperty(t) && Ya[t]) ? e + "px" : ("" + e).trim();
}
var Jg = {};
function pC(t, e) {
  if (!t.nodeType || !t.setAttribute)
    return !1;
  let n = t.nodeName === "filter" || t.parentNode && t.parentNode.nodeName === "filter", { style: r, children: i, scrollTop: o, scrollLeft: l, viewBox: a, ...s } = e, u = Object.values(s), c = Object.keys(s).map((f) => n || t.hasAttribute(f) ? f : Jg[f] || (Jg[f] = f.replace(/([A-Z])/g, (d) => "-" + d.toLowerCase())));
  i !== void 0 && (t.textContent = i);
  for (let f in r)
    if (r.hasOwnProperty(f)) {
      let d = hC(f, r[f]);
      pw.test(f) ? t.style.setProperty(f, d) : t.style[f] = d;
    }
  c.forEach((f, d) => {
    t.setAttribute(f, u[d]);
  }), o !== void 0 && (t.scrollTop = o), l !== void 0 && (t.scrollLeft = l), a !== void 0 && t.setAttribute("viewBox", a);
}
var Ya = { animationIterationCount: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 }, mC = (t, e) => t + e.charAt(0).toUpperCase() + e.substring(1), gC = ["Webkit", "Ms", "Moz", "O"];
Ya = Object.keys(Ya).reduce((t, e) => (gC.forEach((n) => t[mC(n, e)] = t[e]), t), Ya);
var vC = /^(matrix|translate|scale|rotate|skew)/, yC = /^(translate)/, _C = /^(rotate|skew)/, vd = (t, e) => $.num(t) && t !== 0 ? t + e : t, qu = (t, e) => $.arr(t) ? t.every((n) => qu(n, e)) : $.num(t) ? t === e : parseFloat(t) === e, wC = class extends Sf {
  constructor({ x: t, y: e, z: n, ...r }) {
    let i = [], o = [];
    (t || e || n) && (i.push([t || 0, e || 0, n || 0]), o.push((l) => [`translate3d(${l.map((a) => vd(a, "px")).join(",")})`, qu(l, 0)])), Xr(r, (l, a) => {
      if (a === "transform")
        i.push([l || ""]), o.push((s) => [s, s === ""]);
      else if (vC.test(a)) {
        if (delete r[a], $.und(l))
          return;
        let s = yC.test(a) ? "px" : _C.test(a) ? "deg" : "";
        i.push(ln(l)), o.push(a === "rotate3d" ? ([u, c, f, d]) => [`rotate3d(${u},${c},${f},${vd(d, s)})`, qu(d, 0)] : (u) => [`${a}(${u.map((c) => vd(c, s)).join(",")})`, qu(u, a.startsWith("scale") ? 1 : 0)]);
      }
    }), i.length && (r.transform = new xC(i, o)), super(r);
  }
}, xC = class extends Y_ {
  constructor(e, n) {
    super();
    Z(this, "_value", null);
    this.inputs = e, this.transforms = n;
  }
  get() {
    return this._value || (this._value = this._get());
  }
  _get() {
    let e = "", n = !0;
    return ae(this.inputs, (r, i) => {
      let o = gn(r[0]), [l, a] = this.transforms[i]($.arr(o) ? o : r.map(gn));
      e += " " + l, n = n && a;
    }), n ? "none" : e;
  }
  observerAdded(e) {
    e == 1 && ae(this.inputs, (n) => ae(n, (r) => er(r) && ea(r, this)));
  }
  observerRemoved(e) {
    e == 0 && ae(this.inputs, (n) => ae(n, (r) => er(r) && Cs(r, this)));
  }
  eventObserved(e) {
    e.type == "change" && (this._value = null), Es(this, e);
  }
}, SC = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"];
Mr.assign({ batchedUpdates: mf.unstable_batchedUpdates, createStringInterpolator: Q_, colors: dE });
var kC = WE(SC, { applyAnimatedValues: pC, createAnimatedStyle: (t) => new wC(t), getComponentProps: ({ scrollTop: t, scrollLeft: e, ...n }) => n }), fe = kC.animated, j0 = {}, $0 = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.Doctype = t.CDATA = t.Tag = t.Style = t.Script = t.Comment = t.Directive = t.Text = t.Root = t.isTag = t.ElementType = void 0;
  var e;
  (function(r) {
    r.Root = "root", r.Text = "text", r.Directive = "directive", r.Comment = "comment", r.Script = "script", r.Style = "style", r.Tag = "tag", r.CDATA = "cdata", r.Doctype = "doctype";
  })(e = t.ElementType || (t.ElementType = {}));
  function n(r) {
    return r.type === e.Tag || r.type === e.Script || r.type === e.Style;
  }
  t.isTag = n, t.Root = e.Root, t.Text = e.Text, t.Directive = e.Directive, t.Comment = e.Comment, t.Script = e.Script, t.Style = e.Style, t.Tag = e.Tag, t.CDATA = e.CDATA, t.Doctype = e.Doctype;
})($0);
var ve = {}, oo = Ur && Ur.__extends || function() {
  var t = function(e, n) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
      r.__proto__ = i;
    } || function(r, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o]);
    }, t(e, n);
  };
  return function(e, n) {
    if (typeof n != "function" && n !== null)
      throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
    t(e, n);
    function r() {
      this.constructor = e;
    }
    e.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}(), Xa = Ur && Ur.__assign || function() {
  return Xa = Object.assign || function(t) {
    for (var e, n = 1, r = arguments.length; n < r; n++) {
      e = arguments[n];
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
  }, Xa.apply(this, arguments);
};
Object.defineProperty(ve, "__esModule", { value: !0 });
ve.cloneNode = ve.hasChildren = ve.isDocument = ve.isDirective = ve.isComment = ve.isText = ve.isCDATA = ve.isTag = ve.Element = ve.Document = ve.CDATA = ve.NodeWithChildren = ve.ProcessingInstruction = ve.Comment = ve.Text = ve.DataNode = ve.Node = void 0;
var En = $0, F0 = (
  /** @class */
  function() {
    function t() {
      this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
    }
    return Object.defineProperty(t.prototype, "parentNode", {
      // Read-write aliases for properties
      /**
       * Same as {@link parent}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.parent;
      },
      set: function(e) {
        this.parent = e;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "previousSibling", {
      /**
       * Same as {@link prev}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.prev;
      },
      set: function(e) {
        this.prev = e;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "nextSibling", {
      /**
       * Same as {@link next}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.next;
      },
      set: function(e) {
        this.next = e;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.cloneNode = function(e) {
      return e === void 0 && (e = !1), U0(this, e);
    }, t;
  }()
);
ve.Node = F0;
var Ef = (
  /** @class */
  function(t) {
    oo(e, t);
    function e(n) {
      var r = t.call(this) || this;
      return r.data = n, r;
    }
    return Object.defineProperty(e.prototype, "nodeValue", {
      /**
       * Same as {@link data}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.data;
      },
      set: function(n) {
        this.data = n;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(F0)
);
ve.DataNode = Ef;
var mw = (
  /** @class */
  function(t) {
    oo(e, t);
    function e() {
      var n = t !== null && t.apply(this, arguments) || this;
      return n.type = En.ElementType.Text, n;
    }
    return Object.defineProperty(e.prototype, "nodeType", {
      get: function() {
        return 3;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(Ef)
);
ve.Text = mw;
var gw = (
  /** @class */
  function(t) {
    oo(e, t);
    function e() {
      var n = t !== null && t.apply(this, arguments) || this;
      return n.type = En.ElementType.Comment, n;
    }
    return Object.defineProperty(e.prototype, "nodeType", {
      get: function() {
        return 8;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(Ef)
);
ve.Comment = gw;
var vw = (
  /** @class */
  function(t) {
    oo(e, t);
    function e(n, r) {
      var i = t.call(this, r) || this;
      return i.name = n, i.type = En.ElementType.Directive, i;
    }
    return Object.defineProperty(e.prototype, "nodeType", {
      get: function() {
        return 1;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(Ef)
);
ve.ProcessingInstruction = vw;
var Cf = (
  /** @class */
  function(t) {
    oo(e, t);
    function e(n) {
      var r = t.call(this) || this;
      return r.children = n, r;
    }
    return Object.defineProperty(e.prototype, "firstChild", {
      // Aliases
      /** First child of the node. */
      get: function() {
        var n;
        return (n = this.children[0]) !== null && n !== void 0 ? n : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "lastChild", {
      /** Last child of the node. */
      get: function() {
        return this.children.length > 0 ? this.children[this.children.length - 1] : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "childNodes", {
      /**
       * Same as {@link children}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.children;
      },
      set: function(n) {
        this.children = n;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(F0)
);
ve.NodeWithChildren = Cf;
var yw = (
  /** @class */
  function(t) {
    oo(e, t);
    function e() {
      var n = t !== null && t.apply(this, arguments) || this;
      return n.type = En.ElementType.CDATA, n;
    }
    return Object.defineProperty(e.prototype, "nodeType", {
      get: function() {
        return 4;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(Cf)
);
ve.CDATA = yw;
var _w = (
  /** @class */
  function(t) {
    oo(e, t);
    function e() {
      var n = t !== null && t.apply(this, arguments) || this;
      return n.type = En.ElementType.Root, n;
    }
    return Object.defineProperty(e.prototype, "nodeType", {
      get: function() {
        return 9;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(Cf)
);
ve.Document = _w;
var ww = (
  /** @class */
  function(t) {
    oo(e, t);
    function e(n, r, i, o) {
      i === void 0 && (i = []), o === void 0 && (o = n === "script" ? En.ElementType.Script : n === "style" ? En.ElementType.Style : En.ElementType.Tag);
      var l = t.call(this, i) || this;
      return l.name = n, l.attribs = r, l.type = o, l;
    }
    return Object.defineProperty(e.prototype, "nodeType", {
      get: function() {
        return 1;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "tagName", {
      // DOM Level 1 aliases
      /**
       * Same as {@link name}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.name;
      },
      set: function(n) {
        this.name = n;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "attributes", {
      get: function() {
        var n = this;
        return Object.keys(this.attribs).map(function(r) {
          var i, o;
          return {
            name: r,
            value: n.attribs[r],
            namespace: (i = n["x-attribsNamespace"]) === null || i === void 0 ? void 0 : i[r],
            prefix: (o = n["x-attribsPrefix"]) === null || o === void 0 ? void 0 : o[r]
          };
        });
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(Cf)
);
ve.Element = ww;
function xw(t) {
  return (0, En.isTag)(t);
}
ve.isTag = xw;
function Sw(t) {
  return t.type === En.ElementType.CDATA;
}
ve.isCDATA = Sw;
function kw(t) {
  return t.type === En.ElementType.Text;
}
ve.isText = kw;
function Ew(t) {
  return t.type === En.ElementType.Comment;
}
ve.isComment = Ew;
function Cw(t) {
  return t.type === En.ElementType.Directive;
}
ve.isDirective = Cw;
function Tw(t) {
  return t.type === En.ElementType.Root;
}
ve.isDocument = Tw;
function EC(t) {
  return Object.prototype.hasOwnProperty.call(t, "children");
}
ve.hasChildren = EC;
function U0(t, e) {
  e === void 0 && (e = !1);
  var n;
  if (kw(t))
    n = new mw(t.data);
  else if (Ew(t))
    n = new gw(t.data);
  else if (xw(t)) {
    var r = e ? yd(t.children) : [], i = new ww(t.name, Xa({}, t.attribs), r);
    r.forEach(function(s) {
      return s.parent = i;
    }), t.namespace != null && (i.namespace = t.namespace), t["x-attribsNamespace"] && (i["x-attribsNamespace"] = Xa({}, t["x-attribsNamespace"])), t["x-attribsPrefix"] && (i["x-attribsPrefix"] = Xa({}, t["x-attribsPrefix"])), n = i;
  } else if (Sw(t)) {
    var r = e ? yd(t.children) : [], o = new yw(r);
    r.forEach(function(u) {
      return u.parent = o;
    }), n = o;
  } else if (Tw(t)) {
    var r = e ? yd(t.children) : [], l = new _w(r);
    r.forEach(function(u) {
      return u.parent = l;
    }), t["x-mode"] && (l["x-mode"] = t["x-mode"]), n = l;
  } else if (Cw(t)) {
    var a = new vw(t.name, t.data);
    t["x-name"] != null && (a["x-name"] = t["x-name"], a["x-publicId"] = t["x-publicId"], a["x-systemId"] = t["x-systemId"]), n = a;
  } else
    throw new Error("Not implemented yet: ".concat(t.type));
  return n.startIndex = t.startIndex, n.endIndex = t.endIndex, t.sourceCodeLocation != null && (n.sourceCodeLocation = t.sourceCodeLocation), n;
}
ve.cloneNode = U0;
function yd(t) {
  for (var e = t.map(function(r) {
    return U0(r, !0);
  }), n = 1; n < e.length; n++)
    e[n].prev = e[n - 1], e[n - 1].next = e[n];
  return e;
}
(function(t) {
  var e = Ur && Ur.__createBinding || (Object.create ? function(a, s, u, c) {
    c === void 0 && (c = u);
    var f = Object.getOwnPropertyDescriptor(s, u);
    (!f || ("get" in f ? !s.__esModule : f.writable || f.configurable)) && (f = { enumerable: !0, get: function() {
      return s[u];
    } }), Object.defineProperty(a, c, f);
  } : function(a, s, u, c) {
    c === void 0 && (c = u), a[c] = s[u];
  }), n = Ur && Ur.__exportStar || function(a, s) {
    for (var u in a)
      u !== "default" && !Object.prototype.hasOwnProperty.call(s, u) && e(s, a, u);
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.DomHandler = void 0;
  var r = $0, i = ve;
  n(ve, t);
  var o = {
    withStartIndices: !1,
    withEndIndices: !1,
    xmlMode: !1
  }, l = (
    /** @class */
    function() {
      function a(s, u, c) {
        this.dom = [], this.root = new i.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof u == "function" && (c = u, u = o), typeof s == "object" && (u = s, s = void 0), this.callback = s ?? null, this.options = u ?? o, this.elementCB = c ?? null;
      }
      return a.prototype.onparserinit = function(s) {
        this.parser = s;
      }, a.prototype.onreset = function() {
        this.dom = [], this.root = new i.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
      }, a.prototype.onend = function() {
        this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
      }, a.prototype.onerror = function(s) {
        this.handleCallback(s);
      }, a.prototype.onclosetag = function() {
        this.lastNode = null;
        var s = this.tagStack.pop();
        this.options.withEndIndices && (s.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(s);
      }, a.prototype.onopentag = function(s, u) {
        var c = this.options.xmlMode ? r.ElementType.Tag : void 0, f = new i.Element(s, u, void 0, c);
        this.addNode(f), this.tagStack.push(f);
      }, a.prototype.ontext = function(s) {
        var u = this.lastNode;
        if (u && u.type === r.ElementType.Text)
          u.data += s, this.options.withEndIndices && (u.endIndex = this.parser.endIndex);
        else {
          var c = new i.Text(s);
          this.addNode(c), this.lastNode = c;
        }
      }, a.prototype.oncomment = function(s) {
        if (this.lastNode && this.lastNode.type === r.ElementType.Comment) {
          this.lastNode.data += s;
          return;
        }
        var u = new i.Comment(s);
        this.addNode(u), this.lastNode = u;
      }, a.prototype.oncommentend = function() {
        this.lastNode = null;
      }, a.prototype.oncdatastart = function() {
        var s = new i.Text(""), u = new i.CDATA([s]);
        this.addNode(u), s.parent = u, this.lastNode = s;
      }, a.prototype.oncdataend = function() {
        this.lastNode = null;
      }, a.prototype.onprocessinginstruction = function(s, u) {
        var c = new i.ProcessingInstruction(s, u);
        this.addNode(c);
      }, a.prototype.handleCallback = function(s) {
        if (typeof this.callback == "function")
          this.callback(s, this.dom);
        else if (s)
          throw s;
      }, a.prototype.addNode = function(s) {
        var u = this.tagStack[this.tagStack.length - 1], c = u.children[u.children.length - 1];
        this.options.withStartIndices && (s.startIndex = this.parser.startIndex), this.options.withEndIndices && (s.endIndex = this.parser.endIndex), u.children.push(s), c && (s.prev = c, c.next = s), s.parent = u, this.lastNode = null;
      }, a;
    }()
  );
  t.DomHandler = l, t.default = l;
})(j0);
var e1 = "html", t1 = "head", _u = "body", CC = /<([a-zA-Z]+[0-9]?)/, n1 = /<head[^]*>/i, r1 = /<body[^]*>/i, Ic = function() {
  throw new Error(
    "This browser does not support `document.implementation.createHTMLDocument`"
  );
}, Xh = function() {
  throw new Error(
    "This browser does not support `DOMParser.prototype.parseFromString`"
  );
}, i1 = typeof window == "object" && window.DOMParser;
if (typeof i1 == "function") {
  var TC = new i1(), bC = "text/html";
  Xh = function(t, e) {
    return e && (t = "<" + e + ">" + t + "</" + e + ">"), TC.parseFromString(t, bC);
  }, Ic = Xh;
}
if (typeof document == "object" && document.implementation) {
  var wu = document.implementation.createHTMLDocument();
  Ic = function(t, e) {
    if (e) {
      var n = wu.documentElement.querySelector(e);
      return n.innerHTML = t, wu;
    }
    return wu.documentElement.innerHTML = t, wu;
  };
}
var _d = typeof document == "object" ? document.createElement("template") : {}, Gh;
_d.content && (Gh = function(t) {
  return _d.innerHTML = t, _d.content.childNodes;
});
function PC(t) {
  var e, n = t.match(CC);
  n && n[1] && (e = n[1].toLowerCase());
  var r, i, o;
  switch (e) {
    case e1:
      return r = Xh(t), n1.test(t) || (i = r.querySelector(t1), i && i.parentNode.removeChild(i)), r1.test(t) || (i = r.querySelector(_u), i && i.parentNode.removeChild(i)), r.querySelectorAll(e1);
    case t1:
    case _u:
      return r = Ic(t), o = r.querySelectorAll(e), r1.test(t) && n1.test(t) ? o[0].parentNode.childNodes : o;
    default:
      return Gh ? Gh(t) : (i = Ic(t, _u).querySelector(_u), i.childNodes);
  }
}
var RC = PC, B0 = {}, bw = {};
bw.CASE_SENSITIVE_TAG_NAMES = [
  "animateMotion",
  "animateTransform",
  "clipPath",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "foreignObject",
  "linearGradient",
  "radialGradient",
  "textPath"
];
var Tf = j0, MC = bw, o1 = MC.CASE_SENSITIVE_TAG_NAMES, OC = Tf.Comment, DC = Tf.Element, AC = Tf.ProcessingInstruction, LC = Tf.Text, Pw = {}, wd;
for (var xd = 0, NC = o1.length; xd < NC; xd++)
  wd = o1[xd], Pw[wd.toLowerCase()] = wd;
function IC(t) {
  return Pw[t];
}
function Rw(t) {
  for (var e = {}, n, r = 0, i = t.length; r < i; r++)
    n = t[r], e[n.name] = n.value;
  return e;
}
function zC(t) {
  t = t.toLowerCase();
  var e = IC(t);
  return e || t;
}
function Mw(t, e, n) {
  e = e || null;
  for (var r = [], i, o = 0, l = t.length; o < l; o++) {
    var a = t[o], s;
    switch (a.nodeType) {
      case 1:
        i = zC(a.nodeName), s = new DC(i, Rw(a.attributes)), s.children = Mw(
          // template children are on content
          i === "template" ? a.content.childNodes : a.childNodes,
          s
        );
        break;
      case 3:
        s = new LC(a.nodeValue);
        break;
      case 8:
        s = new OC(a.nodeValue);
        break;
      default:
        continue;
    }
    var u = r[o - 1] || null;
    u && (u.next = s), s.parent = e, s.prev = u, s.next = null, r.push(s);
  }
  return n && (s = new AC(
    n.substring(0, n.indexOf(" ")).toLowerCase(),
    n
  ), s.next = r[0] || null, s.parent = e, r.unshift(s), r[1] && (r[1].prev = r[0])), r;
}
B0.formatAttributes = Rw;
B0.formatDOM = Mw;
var jC = RC, $C = B0, FC = $C.formatDOM, UC = /<(![a-zA-Z\s]+)>/;
function BC(t) {
  if (typeof t != "string")
    throw new TypeError("First argument must be a string");
  if (t === "")
    return [];
  var e = t.match(UC), n;
  return e && e[1] && (n = e[1]), FC(jC(t), null, n);
}
var VC = BC, hr = {}, bf = {}, WC = 0;
bf.SAME = WC;
var HC = 1;
bf.CAMELCASE = HC;
bf.possibleStandardNames = {
  accept: 0,
  acceptCharset: 1,
  "accept-charset": "acceptCharset",
  accessKey: 1,
  action: 0,
  allowFullScreen: 1,
  alt: 0,
  as: 0,
  async: 0,
  autoCapitalize: 1,
  autoComplete: 1,
  autoCorrect: 1,
  autoFocus: 1,
  autoPlay: 1,
  autoSave: 1,
  capture: 0,
  cellPadding: 1,
  cellSpacing: 1,
  challenge: 0,
  charSet: 1,
  checked: 0,
  children: 0,
  cite: 0,
  class: "className",
  classID: 1,
  className: 1,
  cols: 0,
  colSpan: 1,
  content: 0,
  contentEditable: 1,
  contextMenu: 1,
  controls: 0,
  controlsList: 1,
  coords: 0,
  crossOrigin: 1,
  dangerouslySetInnerHTML: 1,
  data: 0,
  dateTime: 1,
  default: 0,
  defaultChecked: 1,
  defaultValue: 1,
  defer: 0,
  dir: 0,
  disabled: 0,
  disablePictureInPicture: 1,
  disableRemotePlayback: 1,
  download: 0,
  draggable: 0,
  encType: 1,
  enterKeyHint: 1,
  for: "htmlFor",
  form: 0,
  formMethod: 1,
  formAction: 1,
  formEncType: 1,
  formNoValidate: 1,
  formTarget: 1,
  frameBorder: 1,
  headers: 0,
  height: 0,
  hidden: 0,
  high: 0,
  href: 0,
  hrefLang: 1,
  htmlFor: 1,
  httpEquiv: 1,
  "http-equiv": "httpEquiv",
  icon: 0,
  id: 0,
  innerHTML: 1,
  inputMode: 1,
  integrity: 0,
  is: 0,
  itemID: 1,
  itemProp: 1,
  itemRef: 1,
  itemScope: 1,
  itemType: 1,
  keyParams: 1,
  keyType: 1,
  kind: 0,
  label: 0,
  lang: 0,
  list: 0,
  loop: 0,
  low: 0,
  manifest: 0,
  marginWidth: 1,
  marginHeight: 1,
  max: 0,
  maxLength: 1,
  media: 0,
  mediaGroup: 1,
  method: 0,
  min: 0,
  minLength: 1,
  multiple: 0,
  muted: 0,
  name: 0,
  noModule: 1,
  nonce: 0,
  noValidate: 1,
  open: 0,
  optimum: 0,
  pattern: 0,
  placeholder: 0,
  playsInline: 1,
  poster: 0,
  preload: 0,
  profile: 0,
  radioGroup: 1,
  readOnly: 1,
  referrerPolicy: 1,
  rel: 0,
  required: 0,
  reversed: 0,
  role: 0,
  rows: 0,
  rowSpan: 1,
  sandbox: 0,
  scope: 0,
  scoped: 0,
  scrolling: 0,
  seamless: 0,
  selected: 0,
  shape: 0,
  size: 0,
  sizes: 0,
  span: 0,
  spellCheck: 1,
  src: 0,
  srcDoc: 1,
  srcLang: 1,
  srcSet: 1,
  start: 0,
  step: 0,
  style: 0,
  summary: 0,
  tabIndex: 1,
  target: 0,
  title: 0,
  type: 0,
  useMap: 1,
  value: 0,
  width: 0,
  wmode: 0,
  wrap: 0,
  about: 0,
  accentHeight: 1,
  "accent-height": "accentHeight",
  accumulate: 0,
  additive: 0,
  alignmentBaseline: 1,
  "alignment-baseline": "alignmentBaseline",
  allowReorder: 1,
  alphabetic: 0,
  amplitude: 0,
  arabicForm: 1,
  "arabic-form": "arabicForm",
  ascent: 0,
  attributeName: 1,
  attributeType: 1,
  autoReverse: 1,
  azimuth: 0,
  baseFrequency: 1,
  baselineShift: 1,
  "baseline-shift": "baselineShift",
  baseProfile: 1,
  bbox: 0,
  begin: 0,
  bias: 0,
  by: 0,
  calcMode: 1,
  capHeight: 1,
  "cap-height": "capHeight",
  clip: 0,
  clipPath: 1,
  "clip-path": "clipPath",
  clipPathUnits: 1,
  clipRule: 1,
  "clip-rule": "clipRule",
  color: 0,
  colorInterpolation: 1,
  "color-interpolation": "colorInterpolation",
  colorInterpolationFilters: 1,
  "color-interpolation-filters": "colorInterpolationFilters",
  colorProfile: 1,
  "color-profile": "colorProfile",
  colorRendering: 1,
  "color-rendering": "colorRendering",
  contentScriptType: 1,
  contentStyleType: 1,
  cursor: 0,
  cx: 0,
  cy: 0,
  d: 0,
  datatype: 0,
  decelerate: 0,
  descent: 0,
  diffuseConstant: 1,
  direction: 0,
  display: 0,
  divisor: 0,
  dominantBaseline: 1,
  "dominant-baseline": "dominantBaseline",
  dur: 0,
  dx: 0,
  dy: 0,
  edgeMode: 1,
  elevation: 0,
  enableBackground: 1,
  "enable-background": "enableBackground",
  end: 0,
  exponent: 0,
  externalResourcesRequired: 1,
  fill: 0,
  fillOpacity: 1,
  "fill-opacity": "fillOpacity",
  fillRule: 1,
  "fill-rule": "fillRule",
  filter: 0,
  filterRes: 1,
  filterUnits: 1,
  floodOpacity: 1,
  "flood-opacity": "floodOpacity",
  floodColor: 1,
  "flood-color": "floodColor",
  focusable: 0,
  fontFamily: 1,
  "font-family": "fontFamily",
  fontSize: 1,
  "font-size": "fontSize",
  fontSizeAdjust: 1,
  "font-size-adjust": "fontSizeAdjust",
  fontStretch: 1,
  "font-stretch": "fontStretch",
  fontStyle: 1,
  "font-style": "fontStyle",
  fontVariant: 1,
  "font-variant": "fontVariant",
  fontWeight: 1,
  "font-weight": "fontWeight",
  format: 0,
  from: 0,
  fx: 0,
  fy: 0,
  g1: 0,
  g2: 0,
  glyphName: 1,
  "glyph-name": "glyphName",
  glyphOrientationHorizontal: 1,
  "glyph-orientation-horizontal": "glyphOrientationHorizontal",
  glyphOrientationVertical: 1,
  "glyph-orientation-vertical": "glyphOrientationVertical",
  glyphRef: 1,
  gradientTransform: 1,
  gradientUnits: 1,
  hanging: 0,
  horizAdvX: 1,
  "horiz-adv-x": "horizAdvX",
  horizOriginX: 1,
  "horiz-origin-x": "horizOriginX",
  ideographic: 0,
  imageRendering: 1,
  "image-rendering": "imageRendering",
  in2: 0,
  in: 0,
  inlist: 0,
  intercept: 0,
  k1: 0,
  k2: 0,
  k3: 0,
  k4: 0,
  k: 0,
  kernelMatrix: 1,
  kernelUnitLength: 1,
  kerning: 0,
  keyPoints: 1,
  keySplines: 1,
  keyTimes: 1,
  lengthAdjust: 1,
  letterSpacing: 1,
  "letter-spacing": "letterSpacing",
  lightingColor: 1,
  "lighting-color": "lightingColor",
  limitingConeAngle: 1,
  local: 0,
  markerEnd: 1,
  "marker-end": "markerEnd",
  markerHeight: 1,
  markerMid: 1,
  "marker-mid": "markerMid",
  markerStart: 1,
  "marker-start": "markerStart",
  markerUnits: 1,
  markerWidth: 1,
  mask: 0,
  maskContentUnits: 1,
  maskUnits: 1,
  mathematical: 0,
  mode: 0,
  numOctaves: 1,
  offset: 0,
  opacity: 0,
  operator: 0,
  order: 0,
  orient: 0,
  orientation: 0,
  origin: 0,
  overflow: 0,
  overlinePosition: 1,
  "overline-position": "overlinePosition",
  overlineThickness: 1,
  "overline-thickness": "overlineThickness",
  paintOrder: 1,
  "paint-order": "paintOrder",
  panose1: 0,
  "panose-1": "panose1",
  pathLength: 1,
  patternContentUnits: 1,
  patternTransform: 1,
  patternUnits: 1,
  pointerEvents: 1,
  "pointer-events": "pointerEvents",
  points: 0,
  pointsAtX: 1,
  pointsAtY: 1,
  pointsAtZ: 1,
  prefix: 0,
  preserveAlpha: 1,
  preserveAspectRatio: 1,
  primitiveUnits: 1,
  property: 0,
  r: 0,
  radius: 0,
  refX: 1,
  refY: 1,
  renderingIntent: 1,
  "rendering-intent": "renderingIntent",
  repeatCount: 1,
  repeatDur: 1,
  requiredExtensions: 1,
  requiredFeatures: 1,
  resource: 0,
  restart: 0,
  result: 0,
  results: 0,
  rotate: 0,
  rx: 0,
  ry: 0,
  scale: 0,
  security: 0,
  seed: 0,
  shapeRendering: 1,
  "shape-rendering": "shapeRendering",
  slope: 0,
  spacing: 0,
  specularConstant: 1,
  specularExponent: 1,
  speed: 0,
  spreadMethod: 1,
  startOffset: 1,
  stdDeviation: 1,
  stemh: 0,
  stemv: 0,
  stitchTiles: 1,
  stopColor: 1,
  "stop-color": "stopColor",
  stopOpacity: 1,
  "stop-opacity": "stopOpacity",
  strikethroughPosition: 1,
  "strikethrough-position": "strikethroughPosition",
  strikethroughThickness: 1,
  "strikethrough-thickness": "strikethroughThickness",
  string: 0,
  stroke: 0,
  strokeDasharray: 1,
  "stroke-dasharray": "strokeDasharray",
  strokeDashoffset: 1,
  "stroke-dashoffset": "strokeDashoffset",
  strokeLinecap: 1,
  "stroke-linecap": "strokeLinecap",
  strokeLinejoin: 1,
  "stroke-linejoin": "strokeLinejoin",
  strokeMiterlimit: 1,
  "stroke-miterlimit": "strokeMiterlimit",
  strokeWidth: 1,
  "stroke-width": "strokeWidth",
  strokeOpacity: 1,
  "stroke-opacity": "strokeOpacity",
  suppressContentEditableWarning: 1,
  suppressHydrationWarning: 1,
  surfaceScale: 1,
  systemLanguage: 1,
  tableValues: 1,
  targetX: 1,
  targetY: 1,
  textAnchor: 1,
  "text-anchor": "textAnchor",
  textDecoration: 1,
  "text-decoration": "textDecoration",
  textLength: 1,
  textRendering: 1,
  "text-rendering": "textRendering",
  to: 0,
  transform: 0,
  typeof: 0,
  u1: 0,
  u2: 0,
  underlinePosition: 1,
  "underline-position": "underlinePosition",
  underlineThickness: 1,
  "underline-thickness": "underlineThickness",
  unicode: 0,
  unicodeBidi: 1,
  "unicode-bidi": "unicodeBidi",
  unicodeRange: 1,
  "unicode-range": "unicodeRange",
  unitsPerEm: 1,
  "units-per-em": "unitsPerEm",
  unselectable: 0,
  vAlphabetic: 1,
  "v-alphabetic": "vAlphabetic",
  values: 0,
  vectorEffect: 1,
  "vector-effect": "vectorEffect",
  version: 0,
  vertAdvY: 1,
  "vert-adv-y": "vertAdvY",
  vertOriginX: 1,
  "vert-origin-x": "vertOriginX",
  vertOriginY: 1,
  "vert-origin-y": "vertOriginY",
  vHanging: 1,
  "v-hanging": "vHanging",
  vIdeographic: 1,
  "v-ideographic": "vIdeographic",
  viewBox: 1,
  viewTarget: 1,
  visibility: 0,
  vMathematical: 1,
  "v-mathematical": "vMathematical",
  vocab: 0,
  widths: 0,
  wordSpacing: 1,
  "word-spacing": "wordSpacing",
  writingMode: 1,
  "writing-mode": "writingMode",
  x1: 0,
  x2: 0,
  x: 0,
  xChannelSelector: 1,
  xHeight: 1,
  "x-height": "xHeight",
  xlinkActuate: 1,
  "xlink:actuate": "xlinkActuate",
  xlinkArcrole: 1,
  "xlink:arcrole": "xlinkArcrole",
  xlinkHref: 1,
  "xlink:href": "xlinkHref",
  xlinkRole: 1,
  "xlink:role": "xlinkRole",
  xlinkShow: 1,
  "xlink:show": "xlinkShow",
  xlinkTitle: 1,
  "xlink:title": "xlinkTitle",
  xlinkType: 1,
  "xlink:type": "xlinkType",
  xmlBase: 1,
  "xml:base": "xmlBase",
  xmlLang: 1,
  "xml:lang": "xmlLang",
  xmlns: 0,
  "xml:space": "xmlSpace",
  xmlnsXlink: 1,
  "xmlns:xlink": "xmlnsXlink",
  xmlSpace: 1,
  y1: 0,
  y2: 0,
  y: 0,
  yChannelSelector: 1,
  z: 0,
  zoomAndPan: 1
};
Object.defineProperty(hr, "__esModule", { value: !0 });
function YC(t, e) {
  return XC(t) || GC(t, e) || QC(t, e) || qC();
}
function XC(t) {
  if (Array.isArray(t))
    return t;
}
function GC(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var r = [], i = !0, o = !1, l, a;
    try {
      for (n = n.call(t); !(i = (l = n.next()).done) && (r.push(l.value), !(e && r.length === e)); i = !0)
        ;
    } catch (s) {
      o = !0, a = s;
    } finally {
      try {
        !i && n.return != null && n.return();
      } finally {
        if (o)
          throw a;
      }
    }
    return r;
  }
}
function QC(t, e) {
  if (t) {
    if (typeof t == "string")
      return l1(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set")
      return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return l1(t, e);
  }
}
function l1(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++)
    r[n] = t[n];
  return r;
}
function qC() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Ow = 0, lo = 1, Pf = 2, Rf = 3, V0 = 4, Dw = 5, Aw = 6;
function KC(t) {
  return zt.hasOwnProperty(t) ? zt[t] : null;
}
function cn(t, e, n, r, i, o, l) {
  this.acceptsBooleans = e === Pf || e === Rf || e === V0, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = t, this.type = e, this.sanitizeURL = o, this.removeEmptyString = l;
}
var zt = {}, ZC = [
  "children",
  "dangerouslySetInnerHTML",
  // TODO: This prevents the assignment of defaultValue to regular
  // elements (not just inputs). Now that ReactDOMInput assigns to the
  // defaultValue property -- do we need this?
  "defaultValue",
  "defaultChecked",
  "innerHTML",
  "suppressContentEditableWarning",
  "suppressHydrationWarning",
  "style"
];
ZC.forEach(function(t) {
  zt[t] = new cn(
    t,
    Ow,
    !1,
    // mustUseProperty
    t,
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
  );
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
  var e = YC(t, 2), n = e[0], r = e[1];
  zt[n] = new cn(
    n,
    lo,
    !1,
    // mustUseProperty
    r,
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
  );
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
  zt[t] = new cn(
    t,
    Pf,
    !1,
    // mustUseProperty
    t.toLowerCase(),
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
  );
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
  zt[t] = new cn(
    t,
    Pf,
    !1,
    // mustUseProperty
    t,
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
  );
});
[
  "allowFullScreen",
  "async",
  // Note: there is a special case that prevents it from being written to the DOM
  // on the client side because the browsers are inconsistent. Instead we call focus().
  "autoFocus",
  "autoPlay",
  "controls",
  "default",
  "defer",
  "disabled",
  "disablePictureInPicture",
  "disableRemotePlayback",
  "formNoValidate",
  "hidden",
  "loop",
  "noModule",
  "noValidate",
  "open",
  "playsInline",
  "readOnly",
  "required",
  "reversed",
  "scoped",
  "seamless",
  // Microdata
  "itemScope"
].forEach(function(t) {
  zt[t] = new cn(
    t,
    Rf,
    !1,
    // mustUseProperty
    t.toLowerCase(),
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
  );
});
[
  "checked",
  // Note: `option.selected` is not updated if `select.multiple` is
  // disabled with `removeAttribute`. We have special logic for handling this.
  "multiple",
  "muted",
  "selected"
  // NOTE: if you add a camelCased prop to this list,
  // you'll need to set attributeName to name.toLowerCase()
  // instead in the assignment below.
].forEach(function(t) {
  zt[t] = new cn(
    t,
    Rf,
    !0,
    // mustUseProperty
    t,
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
  );
});
[
  "capture",
  "download"
  // NOTE: if you add a camelCased prop to this list,
  // you'll need to set attributeName to name.toLowerCase()
  // instead in the assignment below.
].forEach(function(t) {
  zt[t] = new cn(
    t,
    V0,
    !1,
    // mustUseProperty
    t,
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
  );
});
[
  "cols",
  "rows",
  "size",
  "span"
  // NOTE: if you add a camelCased prop to this list,
  // you'll need to set attributeName to name.toLowerCase()
  // instead in the assignment below.
].forEach(function(t) {
  zt[t] = new cn(
    t,
    Aw,
    !1,
    // mustUseProperty
    t,
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
  );
});
["rowSpan", "start"].forEach(function(t) {
  zt[t] = new cn(
    t,
    Dw,
    !1,
    // mustUseProperty
    t.toLowerCase(),
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
  );
});
var W0 = /[\-\:]([a-z])/g, H0 = function(e) {
  return e[1].toUpperCase();
};
[
  "accent-height",
  "alignment-baseline",
  "arabic-form",
  "baseline-shift",
  "cap-height",
  "clip-path",
  "clip-rule",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "dominant-baseline",
  "enable-background",
  "fill-opacity",
  "fill-rule",
  "flood-color",
  "flood-opacity",
  "font-family",
  "font-size",
  "font-size-adjust",
  "font-stretch",
  "font-style",
  "font-variant",
  "font-weight",
  "glyph-name",
  "glyph-orientation-horizontal",
  "glyph-orientation-vertical",
  "horiz-adv-x",
  "horiz-origin-x",
  "image-rendering",
  "letter-spacing",
  "lighting-color",
  "marker-end",
  "marker-mid",
  "marker-start",
  "overline-position",
  "overline-thickness",
  "paint-order",
  "panose-1",
  "pointer-events",
  "rendering-intent",
  "shape-rendering",
  "stop-color",
  "stop-opacity",
  "strikethrough-position",
  "strikethrough-thickness",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke-width",
  "text-anchor",
  "text-decoration",
  "text-rendering",
  "underline-position",
  "underline-thickness",
  "unicode-bidi",
  "unicode-range",
  "units-per-em",
  "v-alphabetic",
  "v-hanging",
  "v-ideographic",
  "v-mathematical",
  "vector-effect",
  "vert-adv-y",
  "vert-origin-x",
  "vert-origin-y",
  "word-spacing",
  "writing-mode",
  "xmlns:xlink",
  "x-height"
  // NOTE: if you add a camelCased prop to this list,
  // you'll need to set attributeName to name.toLowerCase()
  // instead in the assignment below.
].forEach(function(t) {
  var e = t.replace(W0, H0);
  zt[e] = new cn(
    e,
    lo,
    !1,
    // mustUseProperty
    t,
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
  );
});
[
  "xlink:actuate",
  "xlink:arcrole",
  "xlink:role",
  "xlink:show",
  "xlink:title",
  "xlink:type"
  // NOTE: if you add a camelCased prop to this list,
  // you'll need to set attributeName to name.toLowerCase()
  // instead in the assignment below.
].forEach(function(t) {
  var e = t.replace(W0, H0);
  zt[e] = new cn(
    e,
    lo,
    !1,
    // mustUseProperty
    t,
    "http://www.w3.org/1999/xlink",
    !1,
    // sanitizeURL
    !1
  );
});
[
  "xml:base",
  "xml:lang",
  "xml:space"
  // NOTE: if you add a camelCased prop to this list,
  // you'll need to set attributeName to name.toLowerCase()
  // instead in the assignment below.
].forEach(function(t) {
  var e = t.replace(W0, H0);
  zt[e] = new cn(
    e,
    lo,
    !1,
    // mustUseProperty
    t,
    "http://www.w3.org/XML/1998/namespace",
    !1,
    // sanitizeURL
    !1
  );
});
["tabIndex", "crossOrigin"].forEach(function(t) {
  zt[t] = new cn(
    t,
    lo,
    !1,
    // mustUseProperty
    t.toLowerCase(),
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
  );
});
var JC = "xlinkHref";
zt[JC] = new cn(
  "xlinkHref",
  lo,
  !1,
  // mustUseProperty
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  // sanitizeURL
  !1
);
["src", "href", "action", "formAction"].forEach(function(t) {
  zt[t] = new cn(
    t,
    lo,
    !1,
    // mustUseProperty
    t.toLowerCase(),
    // attributeName
    null,
    // attributeNamespace
    !0,
    // sanitizeURL
    !0
  );
});
var Y0 = bf, eT = Y0.CAMELCASE, tT = Y0.SAME, a1 = Y0.possibleStandardNames, nT = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", rT = nT + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", iT = RegExp.prototype.test.bind(
  // eslint-disable-next-line no-misleading-character-class
  new RegExp("^(data|aria)-[" + rT + "]*$")
), oT = Object.keys(a1).reduce(function(t, e) {
  var n = a1[e];
  return n === tT ? t[e] = e : n === eT ? t[e.toLowerCase()] = e : t[e] = n, t;
}, {});
hr.BOOLEAN = Rf;
hr.BOOLEANISH_STRING = Pf;
hr.NUMERIC = Dw;
hr.OVERLOADED_BOOLEAN = V0;
hr.POSITIVE_NUMERIC = Aw;
hr.RESERVED = Ow;
hr.STRING = lo;
hr.getPropertyInfo = KC;
hr.isCustomAttribute = iT;
hr.possibleStandardNames = oT;
var Lw = {}, X0 = { exports: {} }, s1 = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, lT = /\n/g, aT = /^\s*/, sT = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, uT = /^:\s*/, cT = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, fT = /^[;\s]*/, dT = /^\s+|\s+$/g, hT = `
`, u1 = "/", c1 = "*", go = "", pT = "comment", mT = "declaration", gT = function(t, e) {
  if (typeof t != "string")
    throw new TypeError("First argument must be a string");
  if (!t)
    return [];
  e = e || {};
  var n = 1, r = 1;
  function i(m) {
    var h = m.match(lT);
    h && (n += h.length);
    var y = m.lastIndexOf(hT);
    r = ~y ? m.length - y : r + m.length;
  }
  function o() {
    var m = { line: n, column: r };
    return function(h) {
      return h.position = new l(m), u(), h;
    };
  }
  function l(m) {
    this.start = m, this.end = { line: n, column: r }, this.source = e.source;
  }
  l.prototype.content = t;
  function a(m) {
    var h = new Error(
      e.source + ":" + n + ":" + r + ": " + m
    );
    if (h.reason = m, h.filename = e.source, h.line = n, h.column = r, h.source = t, !e.silent)
      throw h;
  }
  function s(m) {
    var h = m.exec(t);
    if (h) {
      var y = h[0];
      return i(y), t = t.slice(y.length), h;
    }
  }
  function u() {
    s(aT);
  }
  function c(m) {
    var h;
    for (m = m || []; h = f(); )
      h !== !1 && m.push(h);
    return m;
  }
  function f() {
    var m = o();
    if (!(u1 != t.charAt(0) || c1 != t.charAt(1))) {
      for (var h = 2; go != t.charAt(h) && (c1 != t.charAt(h) || u1 != t.charAt(h + 1)); )
        ++h;
      if (h += 2, go === t.charAt(h - 1))
        return a("End of comment missing");
      var y = t.slice(2, h - 2);
      return r += 2, i(y), t = t.slice(h), r += 2, m({
        type: pT,
        comment: y
      });
    }
  }
  function d() {
    var m = o(), h = s(sT);
    if (h) {
      if (f(), !s(uT))
        return a("property missing ':'");
      var y = s(cT), g = m({
        type: mT,
        property: f1(h[0].replace(s1, go)),
        value: y ? f1(y[0].replace(s1, go)) : go
      });
      return s(fT), g;
    }
  }
  function p() {
    var m = [];
    c(m);
    for (var h; h = d(); )
      h !== !1 && (m.push(h), c(m));
    return m;
  }
  return u(), p();
};
function f1(t) {
  return t ? t.replace(dT, go) : go;
}
var vT = gT;
function Nw(t, e) {
  var n = null;
  if (!t || typeof t != "string")
    return n;
  for (var r, i = vT(t), o = typeof e == "function", l, a, s = 0, u = i.length; s < u; s++)
    r = i[s], l = r.property, a = r.value, o ? e(l, a, r) : a && (n || (n = {}), n[l] = a);
  return n;
}
X0.exports = Nw;
X0.exports.default = Nw;
var yT = X0.exports, Mf = {};
Mf.__esModule = !0;
Mf.camelCase = void 0;
var _T = /^--[a-zA-Z0-9-]+$/, wT = /-([a-z])/g, xT = /^[^-]+$/, ST = /^-(webkit|moz|ms|o|khtml)-/, kT = /^-(ms)-/, ET = function(t) {
  return !t || xT.test(t) || _T.test(t);
}, CT = function(t, e) {
  return e.toUpperCase();
}, d1 = function(t, e) {
  return "".concat(e, "-");
}, TT = function(t, e) {
  return e === void 0 && (e = {}), ET(t) ? t : (t = t.toLowerCase(), e.reactCompat ? t = t.replace(kT, d1) : t = t.replace(ST, d1), t.replace(wT, CT));
};
Mf.camelCase = TT;
(function(t) {
  var e = Ur && Ur.__importDefault || function(o) {
    return o && o.__esModule ? o : { default: o };
  };
  t.__esModule = !0;
  var n = e(yT), r = Mf;
  function i(o, l) {
    var a = {};
    return !o || typeof o != "string" || (0, n.default)(o, function(s, u) {
      s && u && (a[(0, r.camelCase)(s, l)] = u);
    }), a;
  }
  t.default = i;
})(Lw);
var bT = S, PT = Lw.default;
function RT(t, e) {
  if (!t || typeof t != "object")
    throw new TypeError("First argument must be an object");
  var n, r, i = typeof e == "function", o = {}, l = {};
  for (n in t) {
    if (r = t[n], i && (o = e(n, r), o && o.length === 2)) {
      l[o[0]] = o[1];
      continue;
    }
    typeof r == "string" && (l[r] = n);
  }
  return l;
}
function MT(t, e) {
  if (t.indexOf("-") === -1)
    return e && typeof e.is == "string";
  switch (t) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var OT = { reactCompat: !0 };
function DT(t, e) {
  if (t != null)
    try {
      e.style = PT(t, OT);
    } catch {
      e.style = {};
    }
}
var AT = bT.version.split(".")[0] >= 16, Iw = /* @__PURE__ */ new Set([
  "tr",
  "tbody",
  "thead",
  "tfoot",
  "colgroup",
  "table",
  "head",
  "html",
  "frameset"
]);
function LT(t) {
  return !Iw.has(t.name);
}
var zw = {
  PRESERVE_CUSTOM_ATTRIBUTES: AT,
  invertObject: RT,
  isCustomComponent: MT,
  setStyleProp: DT,
  canTextBeChildOfNode: LT,
  elementsWithNoTextChildren: Iw
}, Pa = hr, h1 = zw, NT = ["checked", "value"], IT = ["input", "select", "textarea"], zT = {
  reset: !0,
  submit: !0
}, jw = function(e, n) {
  e = e || {};
  var r, i, o, l, a, s = {}, u = e.type && zT[e.type];
  for (r in e) {
    if (o = e[r], Pa.isCustomAttribute(r)) {
      s[r] = o;
      continue;
    }
    if (i = r.toLowerCase(), l = p1(i), l) {
      switch (a = Pa.getPropertyInfo(l), NT.indexOf(l) !== -1 && IT.indexOf(n) !== -1 && !u && (l = p1("default" + i)), s[l] = o, a && a.type) {
        case Pa.BOOLEAN:
          s[l] = !0;
          break;
        case Pa.OVERLOADED_BOOLEAN:
          o === "" && (s[l] = !0);
          break;
      }
      continue;
    }
    h1.PRESERVE_CUSTOM_ATTRIBUTES && (s[r] = o);
  }
  return h1.setStyleProp(e.style, s), s;
};
function p1(t) {
  return Pa.possibleStandardNames[t];
}
var jT = S, $T = jw, zc = zw, FT = zc.setStyleProp, UT = zc.canTextBeChildOfNode;
function $w(t, e) {
  e = e || {};
  for (var n = e.library || jT, r = n.cloneElement, i = n.createElement, o = n.isValidElement, l = [], a, s, u = typeof e.replace == "function", c, f, d, p = e.trim, m = 0, h = t.length; m < h; m++) {
    if (a = t[m], u && (c = e.replace(a), o(c))) {
      h > 1 && (c = r(c, {
        key: c.key || m
      })), l.push(c);
      continue;
    }
    if (a.type === "text") {
      if (s = !a.data.trim().length, s && a.parent && !UT(a.parent) || p && s)
        continue;
      l.push(a.data);
      continue;
    }
    switch (f = a.attribs, BT(a) ? FT(f.style, f) : f && (f = $T(f, a.name)), d = null, a.type) {
      case "script":
      case "style":
        a.children[0] && (f.dangerouslySetInnerHTML = {
          __html: a.children[0].data
        });
        break;
      case "tag":
        a.name === "textarea" && a.children[0] ? f.defaultValue = a.children[0].data : a.children && a.children.length && (d = $w(a.children, e));
        break;
      default:
        continue;
    }
    h > 1 && (f.key = m), l.push(i(a.name, f, d));
  }
  return l.length === 1 ? l[0] : l;
}
function BT(t) {
  return zc.PRESERVE_CUSTOM_ATTRIBUTES && t.type === "tag" && zc.isCustomComponent(t.name, t.attribs);
}
var VT = $w, Of = j0, gl = VC, WT = jw, Fw = VT;
gl = /* istanbul ignore next */
typeof gl.default == "function" ? gl.default : gl;
var HT = { lowerCaseAttributeNames: !1 };
function Gr(t, e) {
  if (typeof t != "string")
    throw new TypeError("First argument must be a string");
  return t === "" ? [] : (e = e || {}, Fw(
    gl(t, e.htmlparser2 || HT),
    e
  ));
}
Gr.domToReact = Fw;
Gr.htmlToDOM = gl;
Gr.attributesToProps = WT;
Gr.Comment = Of.Comment;
Gr.Element = Of.Element;
Gr.ProcessingInstruction = Of.ProcessingInstruction;
Gr.Text = Of.Text;
var YT = Gr;
Gr.default = Gr;
const Qo = /* @__PURE__ */ Tp(YT);
Qo.domToReact;
Qo.htmlToDOM;
Qo.attributesToProps;
Qo.Comment;
Qo.Element;
Qo.ProcessingInstruction;
Qo.Text;
const Qh = /* @__PURE__ */ new Map(), xu = /* @__PURE__ */ new WeakMap();
let m1 = 0, XT;
function GT(t) {
  return t ? (xu.has(t) || (m1 += 1, xu.set(t, m1.toString())), xu.get(t)) : "0";
}
function QT(t) {
  return Object.keys(t).sort().filter((e) => t[e] !== void 0).map((e) => `${e}_${e === "root" ? GT(t.root) : t[e]}`).toString();
}
function qT(t) {
  let e = QT(t), n = Qh.get(e);
  if (!n) {
    const r = /* @__PURE__ */ new Map();
    let i;
    const o = new IntersectionObserver((l) => {
      l.forEach((a) => {
        var s;
        const u = a.isIntersecting && i.some((c) => a.intersectionRatio >= c);
        t.trackVisibility && typeof a.isVisible > "u" && (a.isVisible = u), (s = r.get(a.target)) == null || s.forEach((c) => {
          c(u, a);
        });
      });
    }, t);
    i = o.thresholds || (Array.isArray(t.threshold) ? t.threshold : [t.threshold || 0]), n = {
      id: e,
      observer: o,
      elements: r
    }, Qh.set(e, n);
  }
  return n;
}
function KT(t, e, n = {}, r = XT) {
  if (typeof window.IntersectionObserver > "u" && r !== void 0) {
    const s = t.getBoundingClientRect();
    return e(r, {
      isIntersecting: r,
      target: t,
      intersectionRatio: typeof n.threshold == "number" ? n.threshold : 0,
      time: 0,
      boundingClientRect: s,
      intersectionRect: s,
      rootBounds: s
    }), () => {
    };
  }
  const {
    id: i,
    observer: o,
    elements: l
  } = qT(n);
  let a = l.get(t) || [];
  return l.has(t) || l.set(t, a), a.push(e), o.observe(t), function() {
    a.splice(a.indexOf(e), 1), a.length === 0 && (l.delete(t), o.unobserve(t)), l.size === 0 && (o.disconnect(), Qh.delete(i));
  };
}
function Df({
  threshold: t,
  delay: e,
  trackVisibility: n,
  rootMargin: r,
  root: i,
  triggerOnce: o,
  skip: l,
  initialInView: a,
  fallbackInView: s,
  onChange: u
} = {}) {
  const c = S.useRef(), f = S.useRef(), [d, p] = S.useState({
    inView: !!a
  });
  f.current = u;
  const m = S.useCallback(
    (y) => {
      c.current !== void 0 && (c.current(), c.current = void 0), !l && y && (c.current = KT(y, (g, v) => {
        p({
          inView: g,
          entry: v
        }), f.current && f.current(g, v), v.isIntersecting && o && c.current && (c.current(), c.current = void 0);
      }, {
        root: i,
        rootMargin: r,
        threshold: t,
        // @ts-ignore
        trackVisibility: n,
        // @ts-ignore
        delay: e
      }, s));
    },
    // We break the rule here, because we aren't including the actual `threshold` variable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // If the threshold is an array, convert it to a string so it won't change between renders.
      // eslint-disable-next-line react-hooks/exhaustive-deps
      Array.isArray(t) ? t.toString() : t,
      i,
      r,
      o,
      l,
      n,
      s,
      e
    ]
  );
  S.useEffect(() => {
    !c.current && d.entry && !o && !l && p({
      inView: !!a
    });
  });
  const h = [m, d.inView, d.entry];
  return h.ref = h[0], h.inView = h[1], h.entry = h[2], h;
}
S.createContext({
  val: { title: "タイトル", content: "コンテンツ" },
  setVal: (t) => {
  }
});
Dv.forwardRef((t, e) => {
  const [n, r] = se(() => ({
    from: { rotate: 0 },
    to: { rotate: 360 },
    loop: !0,
    config: {
      easing: R0.easeLinear,
      duration: 1e3,
      delay: 0
    }
  })), i = {
    backgroundSize: "contain",
    backgroundImage: `url("${t.uri}/load.svg")`,
    backgroundRepeat: "no-repeat",
    width: t.width,
    height: t.width,
    position: "absolute",
    top: "-20px",
    right: "180px"
  };
  return S.useEffect(() => {
    t.spin ? r.resume() : r.pause();
  }, [t.spin]), /* @__PURE__ */ E.jsx(fe.div, { ref: e, style: { ...i, ...n, transformOrigin: "center center" }, children: t.children });
});
function ni(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Uw(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
}
/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Un = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, Hl = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, G0, Yt, ut, or = 1e8, ze = 1 / or, qh = Math.PI * 2, ZT = qh / 4, JT = 0, Bw = Math.sqrt, eb = Math.cos, tb = Math.sin, bt = function(e) {
  return typeof e == "string";
}, ct = function(e) {
  return typeof e == "function";
}, gi = function(e) {
  return typeof e == "number";
}, Q0 = function(e) {
  return typeof e > "u";
}, Qr = function(e) {
  return typeof e == "object";
}, Cn = function(e) {
  return e !== !1;
}, q0 = function() {
  return typeof window < "u";
}, Su = function(e) {
  return ct(e) || bt(e);
}, Vw = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, Xt = Array.isArray, Kh = /(?:-?\.?\d|\.)+/gi, Ww = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, vl = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Sd = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Hw = /[+-]=-?[.\d]+/, Yw = /[^,'"\[\]\s]+/gi, nb = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, Je, qn, Zh, K0, Vn = {}, jc = {}, Xw, Gw = function(e) {
  return (jc = Bo(e, Vn)) && Pn;
}, Z0 = function(e, n) {
  return console.warn("Invalid property", e, "set to", n, "Missing plugin? gsap.registerPlugin()");
}, $c = function(e, n) {
  return !n && console.warn(e);
}, Qw = function(e, n) {
  return e && (Vn[e] = n) && jc && (jc[e] = n) || Vn;
}, Os = function() {
  return 0;
}, rb = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, Ku = {
  suppressEvents: !0,
  kill: !1
}, ib = {
  suppressEvents: !0
}, J0 = {}, Gi = [], Jh = {}, qw, In = {}, kd = {}, g1 = 30, Zu = [], em = "", tm = function(e) {
  var n = e[0], r, i;
  if (Qr(n) || ct(n) || (e = [e]), !(r = (n._gsap || {}).harness)) {
    for (i = Zu.length; i-- && !Zu[i].targetTest(n); )
      ;
    r = Zu[i];
  }
  for (i = e.length; i--; )
    e[i] && (e[i]._gsap || (e[i]._gsap = new wx(e[i], r))) || e.splice(i, 1);
  return e;
}, bo = function(e) {
  return e._gsap || tm(lr(e))[0]._gsap;
}, Kw = function(e, n, r) {
  return (r = e[n]) && ct(r) ? e[n]() : Q0(r) && e.getAttribute && e.getAttribute(n) || r;
}, Tn = function(e, n) {
  return (e = e.split(",")).forEach(n) || e;
}, ht = function(e) {
  return Math.round(e * 1e5) / 1e5 || 0;
}, At = function(e) {
  return Math.round(e * 1e7) / 1e7 || 0;
}, Ol = function(e, n) {
  var r = n.charAt(0), i = parseFloat(n.substr(2));
  return e = parseFloat(e), r === "+" ? e + i : r === "-" ? e - i : r === "*" ? e * i : e / i;
}, ob = function(e, n) {
  for (var r = n.length, i = 0; e.indexOf(n[i]) < 0 && ++i < r; )
    ;
  return i < r;
}, Fc = function() {
  var e = Gi.length, n = Gi.slice(0), r, i;
  for (Jh = {}, Gi.length = 0, r = 0; r < e; r++)
    i = n[r], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
}, Zw = function(e, n, r, i) {
  Gi.length && !Yt && Fc(), e.render(n, r, i || Yt && n < 0 && (e._initted || e._startAt)), Gi.length && !Yt && Fc();
}, Jw = function(e) {
  var n = parseFloat(e);
  return (n || n === 0) && (e + "").match(Yw).length < 2 ? n : bt(e) ? e.trim() : e;
}, ex = function(e) {
  return e;
}, dr = function(e, n) {
  for (var r in n)
    r in e || (e[r] = n[r]);
  return e;
}, lb = function(e) {
  return function(n, r) {
    for (var i in r)
      i in n || i === "duration" && e || i === "ease" || (n[i] = r[i]);
  };
}, Bo = function(e, n) {
  for (var r in n)
    e[r] = n[r];
  return e;
}, v1 = function t(e, n) {
  for (var r in n)
    r !== "__proto__" && r !== "constructor" && r !== "prototype" && (e[r] = Qr(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r]);
  return e;
}, Uc = function(e, n) {
  var r = {}, i;
  for (i in e)
    i in n || (r[i] = e[i]);
  return r;
}, Ga = function(e) {
  var n = e.parent || Je, r = e.keyframes ? lb(Xt(e.keyframes)) : dr;
  if (Cn(e.inherit))
    for (; n; )
      r(e, n.vars.defaults), n = n.parent || n._dp;
  return e;
}, ab = function(e, n) {
  for (var r = e.length, i = r === n.length; i && r-- && e[r] === n[r]; )
    ;
  return r < 0;
}, tx = function(e, n, r, i, o) {
  r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
  var l = e[i], a;
  if (o)
    for (a = n[o]; l && l[o] > a; )
      l = l._prev;
  return l ? (n._next = l._next, l._next = n) : (n._next = e[r], e[r] = n), n._next ? n._next._prev = n : e[i] = n, n._prev = l, n.parent = n._dp = e, n;
}, Af = function(e, n, r, i) {
  r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
  var o = n._prev, l = n._next;
  o ? o._next = l : e[r] === n && (e[r] = l), l ? l._prev = o : e[i] === n && (e[i] = o), n._next = n._prev = n.parent = null;
}, Ji = function(e, n) {
  e.parent && (!n || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0;
}, Po = function(e, n) {
  if (e && (!n || n._end > e._dur || n._start < 0))
    for (var r = e; r; )
      r._dirty = 1, r = r.parent;
  return e;
}, sb = function(e) {
  for (var n = e.parent; n && n.parent; )
    n._dirty = 1, n.totalDuration(), n = n.parent;
  return e;
}, ep = function(e, n, r, i) {
  return e._startAt && (Yt ? e._startAt.revert(Ku) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(n, !0, i));
}, ub = function t(e) {
  return !e || e._ts && t(e.parent);
}, y1 = function(e) {
  return e._repeat ? Yl(e._tTime, e = e.duration() + e._rDelay) * e : 0;
}, Yl = function(e, n) {
  var r = Math.floor(e /= n);
  return e && r === e ? r - 1 : r;
}, Bc = function(e, n) {
  return (e - n._start) * n._ts + (n._ts >= 0 ? 0 : n._dirty ? n.totalDuration() : n._tDur);
}, Lf = function(e) {
  return e._end = At(e._start + (e._tDur / Math.abs(e._ts || e._rts || ze) || 0));
}, Nf = function(e, n) {
  var r = e._dp;
  return r && r.smoothChildTiming && e._ts && (e._start = At(r._time - (e._ts > 0 ? n / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - n) / -e._ts)), Lf(e), r._dirty || Po(r, e)), e;
}, nx = function(e, n) {
  var r;
  if ((n._time || !n._dur && n._initted || n._start < e._time && (n._dur || !n.add)) && (r = Bc(e.rawTime(), n), (!n._dur || Qs(0, n.totalDuration(), r) - n._tTime > ze) && n.render(r, !0)), Po(e, n)._dp && e._initted && e._time >= e._dur && e._ts) {
    if (e._dur < e.duration())
      for (r = e; r._dp; )
        r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
    e._zTime = -ze;
  }
}, Fr = function(e, n, r, i) {
  return n.parent && Ji(n), n._start = At((gi(r) ? r : r || e !== Je ? Qn(e, r, n) : e._time) + n._delay), n._end = At(n._start + (n.totalDuration() / Math.abs(n.timeScale()) || 0)), tx(e, n, "_first", "_last", e._sort ? "_start" : 0), tp(n) || (e._recent = n), i || nx(e, n), e._ts < 0 && Nf(e, e._tTime), e;
}, rx = function(e, n) {
  return (Vn.ScrollTrigger || Z0("scrollTrigger", n)) && Vn.ScrollTrigger.create(n, e);
}, ix = function(e, n, r, i, o) {
  if (rm(e, n, o), !e._initted)
    return 1;
  if (!r && e._pt && !Yt && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && qw !== zn.frame)
    return Gi.push(e), e._lazy = [o, i], 1;
}, cb = function t(e) {
  var n = e.parent;
  return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n));
}, tp = function(e) {
  var n = e.data;
  return n === "isFromStart" || n === "isStart";
}, fb = function(e, n, r, i) {
  var o = e.ratio, l = n < 0 || !n && (!e._start && cb(e) && !(!e._initted && tp(e)) || (e._ts < 0 || e._dp._ts < 0) && !tp(e)) ? 0 : 1, a = e._rDelay, s = 0, u, c, f;
  if (a && e._repeat && (s = Qs(0, e._tDur, n), c = Yl(s, a), e._yoyo && c & 1 && (l = 1 - l), c !== Yl(e._tTime, a) && (o = 1 - l, e.vars.repeatRefresh && e._initted && e.invalidate())), l !== o || Yt || i || e._zTime === ze || !n && e._zTime) {
    if (!e._initted && ix(e, n, i, r, s))
      return;
    for (f = e._zTime, e._zTime = n || (r ? ze : 0), r || (r = n && !f), e.ratio = l, e._from && (l = 1 - l), e._time = 0, e._tTime = s, u = e._pt; u; )
      u.r(l, u.d), u = u._next;
    n < 0 && ep(e, n, r, !0), e._onUpdate && !r && ar(e, "onUpdate"), s && e._repeat && !r && e.parent && ar(e, "onRepeat"), (n >= e._tDur || n < 0) && e.ratio === l && (l && Ji(e, 1), !r && !Yt && (ar(e, l ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()));
  } else
    e._zTime || (e._zTime = n);
}, db = function(e, n, r) {
  var i;
  if (r > n)
    for (i = e._first; i && i._start <= r; ) {
      if (i.data === "isPause" && i._start > n)
        return i;
      i = i._next;
    }
  else
    for (i = e._last; i && i._start >= r; ) {
      if (i.data === "isPause" && i._start < n)
        return i;
      i = i._prev;
    }
}, Xl = function(e, n, r, i) {
  var o = e._repeat, l = At(n) || 0, a = e._tTime / e._tDur;
  return a && !i && (e._time *= l / e._dur), e._dur = l, e._tDur = o ? o < 0 ? 1e10 : At(l * (o + 1) + e._rDelay * o) : l, a > 0 && !i && Nf(e, e._tTime = e._tDur * a), e.parent && Lf(e), r || Po(e.parent, e), e;
}, _1 = function(e) {
  return e instanceof _n ? Po(e) : Xl(e, e._dur);
}, hb = {
  _start: 0,
  endTime: Os,
  totalDuration: Os
}, Qn = function t(e, n, r) {
  var i = e.labels, o = e._recent || hb, l = e.duration() >= or ? o.endTime(!1) : e._dur, a, s, u;
  return bt(n) && (isNaN(n) || n in i) ? (s = n.charAt(0), u = n.substr(-1) === "%", a = n.indexOf("="), s === "<" || s === ">" ? (a >= 0 && (n = n.replace(/=/, "")), (s === "<" ? o._start : o.endTime(o._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (u ? (a < 0 ? o : r).totalDuration() / 100 : 1)) : a < 0 ? (n in i || (i[n] = l), i[n]) : (s = parseFloat(n.charAt(a - 1) + n.substr(a + 1)), u && r && (s = s / 100 * (Xt(r) ? r[0] : r).totalDuration()), a > 1 ? t(e, n.substr(0, a - 1), r) + s : l + s)) : n == null ? l : +n;
}, Qa = function(e, n, r) {
  var i = gi(n[1]), o = (i ? 2 : 1) + (e < 2 ? 0 : 1), l = n[o], a, s;
  if (i && (l.duration = n[1]), l.parent = r, e) {
    for (a = l, s = r; s && !("immediateRender" in a); )
      a = s.vars.defaults || {}, s = Cn(s.vars.inherit) && s.parent;
    l.immediateRender = Cn(a.immediateRender), e < 2 ? l.runBackwards = 1 : l.startAt = n[o - 1];
  }
  return new vt(n[0], l, n[o + 1]);
}, ao = function(e, n) {
  return e || e === 0 ? n(e) : n;
}, Qs = function(e, n, r) {
  return r < e ? e : r > n ? n : r;
}, Ht = function(e, n) {
  return !bt(e) || !(n = nb.exec(e)) ? "" : n[1];
}, pb = function(e, n, r) {
  return ao(r, function(i) {
    return Qs(e, n, i);
  });
}, np = [].slice, ox = function(e, n) {
  return e && Qr(e) && "length" in e && (!n && !e.length || e.length - 1 in e && Qr(e[0])) && !e.nodeType && e !== qn;
}, mb = function(e, n, r) {
  return r === void 0 && (r = []), e.forEach(function(i) {
    var o;
    return bt(i) && !n || ox(i, 1) ? (o = r).push.apply(o, lr(i)) : r.push(i);
  }) || r;
}, lr = function(e, n, r) {
  return ut && !n && ut.selector ? ut.selector(e) : bt(e) && !r && (Zh || !Gl()) ? np.call((n || K0).querySelectorAll(e), 0) : Xt(e) ? mb(e, r) : ox(e) ? np.call(e, 0) : e ? [e] : [];
}, rp = function(e) {
  return e = lr(e)[0] || $c("Invalid scope") || {}, function(n) {
    var r = e.current || e.nativeElement || e;
    return lr(n, r.querySelectorAll ? r : r === e ? $c("Invalid scope") || K0.createElement("div") : e);
  };
}, lx = function(e) {
  return e.sort(function() {
    return 0.5 - Math.random();
  });
}, ax = function(e) {
  if (ct(e))
    return e;
  var n = Qr(e) ? e : {
    each: e
  }, r = Ro(n.ease), i = n.from || 0, o = parseFloat(n.base) || 0, l = {}, a = i > 0 && i < 1, s = isNaN(i) || a, u = n.axis, c = i, f = i;
  return bt(i) ? c = f = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[i] || 0 : !a && s && (c = i[0], f = i[1]), function(d, p, m) {
    var h = (m || n).length, y = l[h], g, v, _, w, T, x, k, b, R;
    if (!y) {
      if (R = n.grid === "auto" ? 0 : (n.grid || [1, or])[1], !R) {
        for (k = -or; k < (k = m[R++].getBoundingClientRect().left) && R < h; )
          ;
        R--;
      }
      for (y = l[h] = [], g = s ? Math.min(R, h) * c - 0.5 : i % R, v = R === or ? 0 : s ? h * f / R - 0.5 : i / R | 0, k = 0, b = or, x = 0; x < h; x++)
        _ = x % R - g, w = v - (x / R | 0), y[x] = T = u ? Math.abs(u === "y" ? w : _) : Bw(_ * _ + w * w), T > k && (k = T), T < b && (b = T);
      i === "random" && lx(y), y.max = k - b, y.min = b, y.v = h = (parseFloat(n.amount) || parseFloat(n.each) * (R > h ? h - 1 : u ? u === "y" ? h / R : R : Math.max(R, h / R)) || 0) * (i === "edges" ? -1 : 1), y.b = h < 0 ? o - h : o, y.u = Ht(n.amount || n.each) || 0, r = r && h < 0 ? vx(r) : r;
    }
    return h = (y[d] - y.min) / y.max || 0, At(y.b + (r ? r(h) : h) * y.v) + y.u;
  };
}, ip = function(e) {
  var n = Math.pow(10, ((e + "").split(".")[1] || "").length);
  return function(r) {
    var i = At(Math.round(parseFloat(r) / e) * e * n);
    return (i - i % 1) / n + (gi(r) ? 0 : Ht(r));
  };
}, sx = function(e, n) {
  var r = Xt(e), i, o;
  return !r && Qr(e) && (i = r = e.radius || or, e.values ? (e = lr(e.values), (o = !gi(e[0])) && (i *= i)) : e = ip(e.increment)), ao(n, r ? ct(e) ? function(l) {
    return o = e(l), Math.abs(o - l) <= i ? o : l;
  } : function(l) {
    for (var a = parseFloat(o ? l.x : l), s = parseFloat(o ? l.y : 0), u = or, c = 0, f = e.length, d, p; f--; )
      o ? (d = e[f].x - a, p = e[f].y - s, d = d * d + p * p) : d = Math.abs(e[f] - a), d < u && (u = d, c = f);
    return c = !i || u <= i ? e[c] : l, o || c === l || gi(l) ? c : c + Ht(l);
  } : ip(e));
}, ux = function(e, n, r, i) {
  return ao(Xt(e) ? !n : r === !0 ? !!(r = 0) : !i, function() {
    return Xt(e) ? e[~~(Math.random() * e.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((e - r / 2 + Math.random() * (n - e + r * 0.99)) / r) * r * i) / i;
  });
}, gb = function() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return function(i) {
    return n.reduce(function(o, l) {
      return l(o);
    }, i);
  };
}, vb = function(e, n) {
  return function(r) {
    return e(parseFloat(r)) + (n || Ht(r));
  };
}, yb = function(e, n, r) {
  return fx(e, n, 0, 1, r);
}, cx = function(e, n, r) {
  return ao(r, function(i) {
    return e[~~n(i)];
  });
}, _b = function t(e, n, r) {
  var i = n - e;
  return Xt(e) ? cx(e, t(0, e.length), n) : ao(r, function(o) {
    return (i + (o - e) % i) % i + e;
  });
}, wb = function t(e, n, r) {
  var i = n - e, o = i * 2;
  return Xt(e) ? cx(e, t(0, e.length - 1), n) : ao(r, function(l) {
    return l = (o + (l - e) % o) % o || 0, e + (l > i ? o - l : l);
  });
}, Ds = function(e) {
  for (var n = 0, r = "", i, o, l, a; ~(i = e.indexOf("random(", n)); )
    l = e.indexOf(")", i), a = e.charAt(i + 7) === "[", o = e.substr(i + 7, l - i - 7).match(a ? Yw : Kh), r += e.substr(n, i - n) + ux(a ? o : +o[0], a ? 0 : +o[1], +o[2] || 1e-5), n = l + 1;
  return r + e.substr(n, e.length - n);
}, fx = function(e, n, r, i, o) {
  var l = n - e, a = i - r;
  return ao(o, function(s) {
    return r + ((s - e) / l * a || 0);
  });
}, xb = function t(e, n, r, i) {
  var o = isNaN(e + n) ? 0 : function(p) {
    return (1 - p) * e + p * n;
  };
  if (!o) {
    var l = bt(e), a = {}, s, u, c, f, d;
    if (r === !0 && (i = 1) && (r = null), l)
      e = {
        p: e
      }, n = {
        p: n
      };
    else if (Xt(e) && !Xt(n)) {
      for (c = [], f = e.length, d = f - 2, u = 1; u < f; u++)
        c.push(t(e[u - 1], e[u]));
      f--, o = function(m) {
        m *= f;
        var h = Math.min(d, ~~m);
        return c[h](m - h);
      }, r = n;
    } else
      i || (e = Bo(Xt(e) ? [] : {}, e));
    if (!c) {
      for (s in n)
        nm.call(a, e, s, "get", n[s]);
      o = function(m) {
        return lm(m, a) || (l ? e.p : e);
      };
    }
  }
  return ao(r, o);
}, w1 = function(e, n, r) {
  var i = e.labels, o = or, l, a, s;
  for (l in i)
    a = i[l] - n, a < 0 == !!r && a && o > (a = Math.abs(a)) && (s = l, o = a);
  return s;
}, ar = function(e, n, r) {
  var i = e.vars, o = i[n], l = ut, a = e._ctx, s, u, c;
  if (o)
    return s = i[n + "Params"], u = i.callbackScope || e, r && Gi.length && Fc(), a && (ut = a), c = s ? o.apply(u, s) : o.call(u), ut = l, c;
}, Ra = function(e) {
  return Ji(e), e.scrollTrigger && e.scrollTrigger.kill(!!Yt), e.progress() < 1 && ar(e, "onInterrupt"), e;
}, yl, dx = [], hx = function(e) {
  if (q0() && e) {
    e = !e.name && e.default || e;
    var n = e.name, r = ct(e), i = n && !r && e.init ? function() {
      this._props = [];
    } : e, o = {
      init: Os,
      render: lm,
      add: nm,
      kill: zb,
      modifier: Ib,
      rawVars: 0
    }, l = {
      targetTest: 0,
      get: 0,
      getSetter: om,
      aliases: {},
      register: 0
    };
    if (Gl(), e !== i) {
      if (In[n])
        return;
      dr(i, dr(Uc(e, o), l)), Bo(i.prototype, Bo(o, Uc(e, l))), In[i.prop = n] = i, e.targetTest && (Zu.push(i), J0[n] = 1), n = (n === "css" ? "CSS" : n.charAt(0).toUpperCase() + n.substr(1)) + "Plugin";
    }
    Qw(n, i), e.register && e.register(Pn, i, bn);
  } else
    e && dx.push(e);
}, Ie = 255, Ma = {
  aqua: [0, Ie, Ie],
  lime: [0, Ie, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, Ie],
  navy: [0, 0, 128],
  white: [Ie, Ie, Ie],
  olive: [128, 128, 0],
  yellow: [Ie, Ie, 0],
  orange: [Ie, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [Ie, 0, 0],
  pink: [Ie, 192, 203],
  cyan: [0, Ie, Ie],
  transparent: [Ie, Ie, Ie, 0]
}, Ed = function(e, n, r) {
  return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? n + (r - n) * e * 6 : e < 0.5 ? r : e * 3 < 2 ? n + (r - n) * (2 / 3 - e) * 6 : n) * Ie + 0.5 | 0;
}, px = function(e, n, r) {
  var i = e ? gi(e) ? [e >> 16, e >> 8 & Ie, e & Ie] : 0 : Ma.black, o, l, a, s, u, c, f, d, p, m;
  if (!i) {
    if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Ma[e])
      i = Ma[e];
    else if (e.charAt(0) === "#") {
      if (e.length < 6 && (o = e.charAt(1), l = e.charAt(2), a = e.charAt(3), e = "#" + o + o + l + l + a + a + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9)
        return i = parseInt(e.substr(1, 6), 16), [i >> 16, i >> 8 & Ie, i & Ie, parseInt(e.substr(7), 16) / 255];
      e = parseInt(e.substr(1), 16), i = [e >> 16, e >> 8 & Ie, e & Ie];
    } else if (e.substr(0, 3) === "hsl") {
      if (i = m = e.match(Kh), !n)
        s = +i[0] % 360 / 360, u = +i[1] / 100, c = +i[2] / 100, l = c <= 0.5 ? c * (u + 1) : c + u - c * u, o = c * 2 - l, i.length > 3 && (i[3] *= 1), i[0] = Ed(s + 1 / 3, o, l), i[1] = Ed(s, o, l), i[2] = Ed(s - 1 / 3, o, l);
      else if (~e.indexOf("="))
        return i = e.match(Ww), r && i.length < 4 && (i[3] = 1), i;
    } else
      i = e.match(Kh) || Ma.transparent;
    i = i.map(Number);
  }
  return n && !m && (o = i[0] / Ie, l = i[1] / Ie, a = i[2] / Ie, f = Math.max(o, l, a), d = Math.min(o, l, a), c = (f + d) / 2, f === d ? s = u = 0 : (p = f - d, u = c > 0.5 ? p / (2 - f - d) : p / (f + d), s = f === o ? (l - a) / p + (l < a ? 6 : 0) : f === l ? (a - o) / p + 2 : (o - l) / p + 4, s *= 60), i[0] = ~~(s + 0.5), i[1] = ~~(u * 100 + 0.5), i[2] = ~~(c * 100 + 0.5)), r && i.length < 4 && (i[3] = 1), i;
}, mx = function(e) {
  var n = [], r = [], i = -1;
  return e.split(Qi).forEach(function(o) {
    var l = o.match(vl) || [];
    n.push.apply(n, l), r.push(i += l.length + 1);
  }), n.c = r, n;
}, x1 = function(e, n, r) {
  var i = "", o = (e + i).match(Qi), l = n ? "hsla(" : "rgba(", a = 0, s, u, c, f;
  if (!o)
    return e;
  if (o = o.map(function(d) {
    return (d = px(d, n, 1)) && l + (n ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : d.join(",")) + ")";
  }), r && (c = mx(e), s = r.c, s.join(i) !== c.c.join(i)))
    for (u = e.replace(Qi, "1").split(vl), f = u.length - 1; a < f; a++)
      i += u[a] + (~s.indexOf(a) ? o.shift() || l + "0,0,0,0)" : (c.length ? c : o.length ? o : r).shift());
  if (!u)
    for (u = e.split(Qi), f = u.length - 1; a < f; a++)
      i += u[a] + o[a];
  return i + u[f];
}, Qi = function() {
  var t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
  for (e in Ma)
    t += "|" + e + "\\b";
  return new RegExp(t + ")", "gi");
}(), Sb = /hsl[a]?\(/, gx = function(e) {
  var n = e.join(" "), r;
  if (Qi.lastIndex = 0, Qi.test(n))
    return r = Sb.test(n), e[1] = x1(e[1], r), e[0] = x1(e[0], r, mx(e[1])), !0;
}, As, zn = function() {
  var t = Date.now, e = 500, n = 33, r = t(), i = r, o = 1e3 / 240, l = o, a = [], s, u, c, f, d, p, m = function h(y) {
    var g = t() - i, v = y === !0, _, w, T, x;
    if (g > e && (r += g - n), i += g, T = i - r, _ = T - l, (_ > 0 || v) && (x = ++f.frame, d = T - f.time * 1e3, f.time = T = T / 1e3, l += _ + (_ >= o ? 4 : o - _), w = 1), v || (s = u(h)), w)
      for (p = 0; p < a.length; p++)
        a[p](T, d, x, y);
  };
  return f = {
    time: 0,
    frame: 0,
    tick: function() {
      m(!0);
    },
    deltaRatio: function(y) {
      return d / (1e3 / (y || 60));
    },
    wake: function() {
      Xw && (!Zh && q0() && (qn = Zh = window, K0 = qn.document || {}, Vn.gsap = Pn, (qn.gsapVersions || (qn.gsapVersions = [])).push(Pn.version), Gw(jc || qn.GreenSockGlobals || !qn.gsap && qn || {}), c = qn.requestAnimationFrame, dx.forEach(hx)), s && f.sleep(), u = c || function(y) {
        return setTimeout(y, l - f.time * 1e3 + 1 | 0);
      }, As = 1, m(2));
    },
    sleep: function() {
      (c ? qn.cancelAnimationFrame : clearTimeout)(s), As = 0, u = Os;
    },
    lagSmoothing: function(y, g) {
      e = y || 1 / 0, n = Math.min(g || 33, e);
    },
    fps: function(y) {
      o = 1e3 / (y || 240), l = f.time * 1e3 + o;
    },
    add: function(y, g, v) {
      var _ = g ? function(w, T, x, k) {
        y(w, T, x, k), f.remove(_);
      } : y;
      return f.remove(y), a[v ? "unshift" : "push"](_), Gl(), _;
    },
    remove: function(y, g) {
      ~(g = a.indexOf(y)) && a.splice(g, 1) && p >= g && p--;
    },
    _listeners: a
  }, f;
}(), Gl = function() {
  return !As && zn.wake();
}, Ee = {}, kb = /^[\d.\-M][\d.\-,\s]/, Eb = /["']/g, Cb = function(e) {
  for (var n = {}, r = e.substr(1, e.length - 3).split(":"), i = r[0], o = 1, l = r.length, a, s, u; o < l; o++)
    s = r[o], a = o !== l - 1 ? s.lastIndexOf(",") : s.length, u = s.substr(0, a), n[i] = isNaN(u) ? u.replace(Eb, "").trim() : +u, i = s.substr(a + 1).trim();
  return n;
}, Tb = function(e) {
  var n = e.indexOf("(") + 1, r = e.indexOf(")"), i = e.indexOf("(", n);
  return e.substring(n, ~i && i < r ? e.indexOf(")", r + 1) : r);
}, bb = function(e) {
  var n = (e + "").split("("), r = Ee[n[0]];
  return r && n.length > 1 && r.config ? r.config.apply(null, ~e.indexOf("{") ? [Cb(n[1])] : Tb(e).split(",").map(Jw)) : Ee._CE && kb.test(e) ? Ee._CE("", e) : r;
}, vx = function(e) {
  return function(n) {
    return 1 - e(1 - n);
  };
}, yx = function t(e, n) {
  for (var r = e._first, i; r; )
    r instanceof _n ? t(r, n) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== n && (r.timeline ? t(r.timeline, n) : (i = r._ease, r._ease = r._yEase, r._yEase = i, r._yoyo = n)), r = r._next;
}, Ro = function(e, n) {
  return e && (ct(e) ? e : Ee[e] || bb(e)) || n;
}, qo = function(e, n, r, i) {
  r === void 0 && (r = function(s) {
    return 1 - n(1 - s);
  }), i === void 0 && (i = function(s) {
    return s < 0.5 ? n(s * 2) / 2 : 1 - n((1 - s) * 2) / 2;
  });
  var o = {
    easeIn: n,
    easeOut: r,
    easeInOut: i
  }, l;
  return Tn(e, function(a) {
    Ee[a] = Vn[a] = o, Ee[l = a.toLowerCase()] = r;
    for (var s in o)
      Ee[l + (s === "easeIn" ? ".in" : s === "easeOut" ? ".out" : ".inOut")] = Ee[a + "." + s] = o[s];
  }), o;
}, _x = function(e) {
  return function(n) {
    return n < 0.5 ? (1 - e(1 - n * 2)) / 2 : 0.5 + e((n - 0.5) * 2) / 2;
  };
}, Cd = function t(e, n, r) {
  var i = n >= 1 ? n : 1, o = (r || (e ? 0.3 : 0.45)) / (n < 1 ? n : 1), l = o / qh * (Math.asin(1 / i) || 0), a = function(c) {
    return c === 1 ? 1 : i * Math.pow(2, -10 * c) * tb((c - l) * o) + 1;
  }, s = e === "out" ? a : e === "in" ? function(u) {
    return 1 - a(1 - u);
  } : _x(a);
  return o = qh / o, s.config = function(u, c) {
    return t(e, u, c);
  }, s;
}, Td = function t(e, n) {
  n === void 0 && (n = 1.70158);
  var r = function(l) {
    return l ? --l * l * ((n + 1) * l + n) + 1 : 0;
  }, i = e === "out" ? r : e === "in" ? function(o) {
    return 1 - r(1 - o);
  } : _x(r);
  return i.config = function(o) {
    return t(e, o);
  }, i;
};
Tn("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
  var n = e < 5 ? e + 1 : e;
  qo(t + ",Power" + (n - 1), e ? function(r) {
    return Math.pow(r, n);
  } : function(r) {
    return r;
  }, function(r) {
    return 1 - Math.pow(1 - r, n);
  }, function(r) {
    return r < 0.5 ? Math.pow(r * 2, n) / 2 : 1 - Math.pow((1 - r) * 2, n) / 2;
  });
});
Ee.Linear.easeNone = Ee.none = Ee.Linear.easeIn;
qo("Elastic", Cd("in"), Cd("out"), Cd());
(function(t, e) {
  var n = 1 / e, r = 2 * n, i = 2.5 * n, o = function(a) {
    return a < n ? t * a * a : a < r ? t * Math.pow(a - 1.5 / e, 2) + 0.75 : a < i ? t * (a -= 2.25 / e) * a + 0.9375 : t * Math.pow(a - 2.625 / e, 2) + 0.984375;
  };
  qo("Bounce", function(l) {
    return 1 - o(1 - l);
  }, o);
})(7.5625, 2.75);
qo("Expo", function(t) {
  return t ? Math.pow(2, 10 * (t - 1)) : 0;
});
qo("Circ", function(t) {
  return -(Bw(1 - t * t) - 1);
});
qo("Sine", function(t) {
  return t === 1 ? 1 : -eb(t * ZT) + 1;
});
qo("Back", Td("in"), Td("out"), Td());
Ee.SteppedEase = Ee.steps = Vn.SteppedEase = {
  config: function(e, n) {
    e === void 0 && (e = 1);
    var r = 1 / e, i = e + (n ? 0 : 1), o = n ? 1 : 0, l = 1 - ze;
    return function(a) {
      return ((i * Qs(0, l, a) | 0) + o) * r;
    };
  }
};
Hl.ease = Ee["quad.out"];
Tn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
  return em += t + "," + t + "Params,";
});
var wx = function(e, n) {
  this.id = JT++, e._gsap = this, this.target = e, this.harness = n, this.get = n ? n.get : Kw, this.set = n ? n.getSetter : om;
}, Ls = /* @__PURE__ */ function() {
  function t(n) {
    this.vars = n, this._delay = +n.delay || 0, (this._repeat = n.repeat === 1 / 0 ? -2 : n.repeat || 0) && (this._rDelay = n.repeatDelay || 0, this._yoyo = !!n.yoyo || !!n.yoyoEase), this._ts = 1, Xl(this, +n.duration, 1, 1), this.data = n.data, ut && (this._ctx = ut, ut.data.push(this)), As || zn.wake();
  }
  var e = t.prototype;
  return e.delay = function(r) {
    return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay), this._delay = r, this) : this._delay;
  }, e.duration = function(r) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur;
  }, e.totalDuration = function(r) {
    return arguments.length ? (this._dirty = 0, Xl(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, e.totalTime = function(r, i) {
    if (Gl(), !arguments.length)
      return this._tTime;
    var o = this._dp;
    if (o && o.smoothChildTiming && this._ts) {
      for (Nf(this, r), !o._dp || o.parent || nx(o, this); o && o.parent; )
        o.parent._time !== o._start + (o._ts >= 0 ? o._tTime / o._ts : (o.totalDuration() - o._tTime) / -o._ts) && o.totalTime(o._tTime, !0), o = o.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && Fr(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== r || !this._dur && !i || this._initted && Math.abs(this._zTime) === ze || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r), Zw(this, r, i)), this;
  }, e.time = function(r, i) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + y1(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), i) : this._time;
  }, e.totalProgress = function(r, i) {
    return arguments.length ? this.totalTime(this.totalDuration() * r, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
  }, e.progress = function(r, i) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + y1(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
  }, e.iteration = function(r, i) {
    var o = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (r - 1) * o, i) : this._repeat ? Yl(this._tTime, o) + 1 : 1;
  }, e.timeScale = function(r) {
    if (!arguments.length)
      return this._rts === -ze ? 0 : this._rts;
    if (this._rts === r)
      return this;
    var i = this.parent && this._ts ? Bc(this.parent._time, this) : this._tTime;
    return this._rts = +r || 0, this._ts = this._ps || r === -ze ? 0 : this._rts, this.totalTime(Qs(-Math.abs(this._delay), this._tDur, i), !0), Lf(this), sb(this);
  }, e.paused = function(r) {
    return arguments.length ? (this._ps !== r && (this._ps = r, r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Gl(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== ze && (this._tTime -= ze)))), this) : this._ps;
  }, e.startTime = function(r) {
    if (arguments.length) {
      this._start = r;
      var i = this.parent || this._dp;
      return i && (i._sort || !this.parent) && Fr(i, this, r - this._delay), this;
    }
    return this._start;
  }, e.endTime = function(r) {
    return this._start + (Cn(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, e.rawTime = function(r) {
    var i = this.parent || this._dp;
    return i ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Bc(i.rawTime(r), this) : this._tTime : this._tTime;
  }, e.revert = function(r) {
    r === void 0 && (r = ib);
    var i = Yt;
    return Yt = r, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(r), this.totalTime(-0.01, r.suppressEvents)), this.data !== "nested" && r.kill !== !1 && this.kill(), Yt = i, this;
  }, e.globalTime = function(r) {
    for (var i = this, o = arguments.length ? r : i.rawTime(); i; )
      o = i._start + o / (i._ts || 1), i = i._dp;
    return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 / 0 : this._sat.globalTime(r) : o;
  }, e.repeat = function(r) {
    return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r, _1(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, e.repeatDelay = function(r) {
    if (arguments.length) {
      var i = this._time;
      return this._rDelay = r, _1(this), i ? this.time(i) : this;
    }
    return this._rDelay;
  }, e.yoyo = function(r) {
    return arguments.length ? (this._yoyo = r, this) : this._yoyo;
  }, e.seek = function(r, i) {
    return this.totalTime(Qn(this, r), Cn(i));
  }, e.restart = function(r, i) {
    return this.play().totalTime(r ? -this._delay : 0, Cn(i));
  }, e.play = function(r, i) {
    return r != null && this.seek(r, i), this.reversed(!1).paused(!1);
  }, e.reverse = function(r, i) {
    return r != null && this.seek(r || this.totalDuration(), i), this.reversed(!0).paused(!1);
  }, e.pause = function(r, i) {
    return r != null && this.seek(r, i), this.paused(!0);
  }, e.resume = function() {
    return this.paused(!1);
  }, e.reversed = function(r) {
    return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -ze : 0)), this) : this._rts < 0;
  }, e.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -ze, this;
  }, e.isActive = function() {
    var r = this.parent || this._dp, i = this._start, o;
    return !!(!r || this._ts && this._initted && r.isActive() && (o = r.rawTime(!0)) >= i && o < this.endTime(!0) - ze);
  }, e.eventCallback = function(r, i, o) {
    var l = this.vars;
    return arguments.length > 1 ? (i ? (l[r] = i, o && (l[r + "Params"] = o), r === "onUpdate" && (this._onUpdate = i)) : delete l[r], this) : l[r];
  }, e.then = function(r) {
    var i = this;
    return new Promise(function(o) {
      var l = ct(r) ? r : ex, a = function() {
        var u = i.then;
        i.then = null, ct(l) && (l = l(i)) && (l.then || l === i) && (i.then = u), o(l), i.then = u;
      };
      i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? a() : i._prom = a;
    });
  }, e.kill = function() {
    Ra(this);
  }, t;
}();
dr(Ls.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -ze,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var _n = /* @__PURE__ */ function(t) {
  Uw(e, t);
  function e(r, i) {
    var o;
    return r === void 0 && (r = {}), o = t.call(this, r) || this, o.labels = {}, o.smoothChildTiming = !!r.smoothChildTiming, o.autoRemoveChildren = !!r.autoRemoveChildren, o._sort = Cn(r.sortChildren), Je && Fr(r.parent || Je, ni(o), i), r.reversed && o.reverse(), r.paused && o.paused(!0), r.scrollTrigger && rx(ni(o), r.scrollTrigger), o;
  }
  var n = e.prototype;
  return n.to = function(i, o, l) {
    return Qa(0, arguments, this), this;
  }, n.from = function(i, o, l) {
    return Qa(1, arguments, this), this;
  }, n.fromTo = function(i, o, l, a) {
    return Qa(2, arguments, this), this;
  }, n.set = function(i, o, l) {
    return o.duration = 0, o.parent = this, Ga(o).repeatDelay || (o.repeat = 0), o.immediateRender = !!o.immediateRender, new vt(i, o, Qn(this, l), 1), this;
  }, n.call = function(i, o, l) {
    return Fr(this, vt.delayedCall(0, i, o), l);
  }, n.staggerTo = function(i, o, l, a, s, u, c) {
    return l.duration = o, l.stagger = l.stagger || a, l.onComplete = u, l.onCompleteParams = c, l.parent = this, new vt(i, l, Qn(this, s)), this;
  }, n.staggerFrom = function(i, o, l, a, s, u, c) {
    return l.runBackwards = 1, Ga(l).immediateRender = Cn(l.immediateRender), this.staggerTo(i, o, l, a, s, u, c);
  }, n.staggerFromTo = function(i, o, l, a, s, u, c, f) {
    return a.startAt = l, Ga(a).immediateRender = Cn(a.immediateRender), this.staggerTo(i, o, a, s, u, c, f);
  }, n.render = function(i, o, l) {
    var a = this._time, s = this._dirty ? this.totalDuration() : this._tDur, u = this._dur, c = i <= 0 ? 0 : At(i), f = this._zTime < 0 != i < 0 && (this._initted || !u), d, p, m, h, y, g, v, _, w, T, x, k;
    if (this !== Je && c > s && i >= 0 && (c = s), c !== this._tTime || l || f) {
      if (a !== this._time && u && (c += this._time - a, i += this._time - a), d = c, w = this._start, _ = this._ts, g = !_, f && (u || (a = this._zTime), (i || !o) && (this._zTime = i)), this._repeat) {
        if (x = this._yoyo, y = u + this._rDelay, this._repeat < -1 && i < 0)
          return this.totalTime(y * 100 + i, o, l);
        if (d = At(c % y), c === s ? (h = this._repeat, d = u) : (h = ~~(c / y), h && h === c / y && (d = u, h--), d > u && (d = u)), T = Yl(this._tTime, y), !a && this._tTime && T !== h && this._tTime - T * y - this._dur <= 0 && (T = h), x && h & 1 && (d = u - d, k = 1), h !== T && !this._lock) {
          var b = x && T & 1, R = b === (x && h & 1);
          if (h < T && (b = !b), a = b ? 0 : c % u ? u : c, this._lock = 1, this.render(a || (k ? 0 : At(h * y)), o, !u)._lock = 0, this._tTime = c, !o && this.parent && ar(this, "onRepeat"), this.vars.repeatRefresh && !k && (this.invalidate()._lock = 1), a && a !== this._time || g !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (u = this._dur, s = this._tDur, R && (this._lock = 2, a = b ? u : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !k && this.invalidate()), this._lock = 0, !this._ts && !g)
            return this;
          yx(this, k);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (v = db(this, At(a), At(d)), v && (c -= d - (d = v._start))), this._tTime = c, this._time = d, this._act = !_, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, a = 0), !a && d && !o && !h && (ar(this, "onStart"), this._tTime !== c))
        return this;
      if (d >= a && i >= 0)
        for (p = this._first; p; ) {
          if (m = p._next, (p._act || d >= p._start) && p._ts && v !== p) {
            if (p.parent !== this)
              return this.render(i, o, l);
            if (p.render(p._ts > 0 ? (d - p._start) * p._ts : (p._dirty ? p.totalDuration() : p._tDur) + (d - p._start) * p._ts, o, l), d !== this._time || !this._ts && !g) {
              v = 0, m && (c += this._zTime = -ze);
              break;
            }
          }
          p = m;
        }
      else {
        p = this._last;
        for (var M = i < 0 ? i : d; p; ) {
          if (m = p._prev, (p._act || M <= p._end) && p._ts && v !== p) {
            if (p.parent !== this)
              return this.render(i, o, l);
            if (p.render(p._ts > 0 ? (M - p._start) * p._ts : (p._dirty ? p.totalDuration() : p._tDur) + (M - p._start) * p._ts, o, l || Yt && (p._initted || p._startAt)), d !== this._time || !this._ts && !g) {
              v = 0, m && (c += this._zTime = M ? -ze : ze);
              break;
            }
          }
          p = m;
        }
      }
      if (v && !o && (this.pause(), v.render(d >= a ? 0 : -ze)._zTime = d >= a ? 1 : -1, this._ts))
        return this._start = w, Lf(this), this.render(i, o, l);
      this._onUpdate && !o && ar(this, "onUpdate", !0), (c === s && this._tTime >= this.totalDuration() || !c && a) && (w === this._start || Math.abs(_) !== Math.abs(this._ts)) && (this._lock || ((i || !u) && (c === s && this._ts > 0 || !c && this._ts < 0) && Ji(this, 1), !o && !(i < 0 && !a) && (c || a || !s) && (ar(this, c === s && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(c < s && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, n.add = function(i, o) {
    var l = this;
    if (gi(o) || (o = Qn(this, o, i)), !(i instanceof Ls)) {
      if (Xt(i))
        return i.forEach(function(a) {
          return l.add(a, o);
        }), this;
      if (bt(i))
        return this.addLabel(i, o);
      if (ct(i))
        i = vt.delayedCall(0, i);
      else
        return this;
    }
    return this !== i ? Fr(this, i, o) : this;
  }, n.getChildren = function(i, o, l, a) {
    i === void 0 && (i = !0), o === void 0 && (o = !0), l === void 0 && (l = !0), a === void 0 && (a = -or);
    for (var s = [], u = this._first; u; )
      u._start >= a && (u instanceof vt ? o && s.push(u) : (l && s.push(u), i && s.push.apply(s, u.getChildren(!0, o, l)))), u = u._next;
    return s;
  }, n.getById = function(i) {
    for (var o = this.getChildren(1, 1, 1), l = o.length; l--; )
      if (o[l].vars.id === i)
        return o[l];
  }, n.remove = function(i) {
    return bt(i) ? this.removeLabel(i) : ct(i) ? this.killTweensOf(i) : (Af(this, i), i === this._recent && (this._recent = this._last), Po(this));
  }, n.totalTime = function(i, o) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = At(zn.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), t.prototype.totalTime.call(this, i, o), this._forcing = 0, this) : this._tTime;
  }, n.addLabel = function(i, o) {
    return this.labels[i] = Qn(this, o), this;
  }, n.removeLabel = function(i) {
    return delete this.labels[i], this;
  }, n.addPause = function(i, o, l) {
    var a = vt.delayedCall(0, o || Os, l);
    return a.data = "isPause", this._hasPause = 1, Fr(this, a, Qn(this, i));
  }, n.removePause = function(i) {
    var o = this._first;
    for (i = Qn(this, i); o; )
      o._start === i && o.data === "isPause" && Ji(o), o = o._next;
  }, n.killTweensOf = function(i, o, l) {
    for (var a = this.getTweensOf(i, l), s = a.length; s--; )
      Li !== a[s] && a[s].kill(i, o);
    return this;
  }, n.getTweensOf = function(i, o) {
    for (var l = [], a = lr(i), s = this._first, u = gi(o), c; s; )
      s instanceof vt ? ob(s._targets, a) && (u ? (!Li || s._initted && s._ts) && s.globalTime(0) <= o && s.globalTime(s.totalDuration()) > o : !o || s.isActive()) && l.push(s) : (c = s.getTweensOf(a, o)).length && l.push.apply(l, c), s = s._next;
    return l;
  }, n.tweenTo = function(i, o) {
    o = o || {};
    var l = this, a = Qn(l, i), s = o, u = s.startAt, c = s.onStart, f = s.onStartParams, d = s.immediateRender, p, m = vt.to(l, dr({
      ease: o.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: a,
      overwrite: "auto",
      duration: o.duration || Math.abs((a - (u && "time" in u ? u.time : l._time)) / l.timeScale()) || ze,
      onStart: function() {
        if (l.pause(), !p) {
          var y = o.duration || Math.abs((a - (u && "time" in u ? u.time : l._time)) / l.timeScale());
          m._dur !== y && Xl(m, y, 0, 1).render(m._time, !0, !0), p = 1;
        }
        c && c.apply(m, f || []);
      }
    }, o));
    return d ? m.render(0) : m;
  }, n.tweenFromTo = function(i, o, l) {
    return this.tweenTo(o, dr({
      startAt: {
        time: Qn(this, i)
      }
    }, l));
  }, n.recent = function() {
    return this._recent;
  }, n.nextLabel = function(i) {
    return i === void 0 && (i = this._time), w1(this, Qn(this, i));
  }, n.previousLabel = function(i) {
    return i === void 0 && (i = this._time), w1(this, Qn(this, i), 1);
  }, n.currentLabel = function(i) {
    return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + ze);
  }, n.shiftChildren = function(i, o, l) {
    l === void 0 && (l = 0);
    for (var a = this._first, s = this.labels, u; a; )
      a._start >= l && (a._start += i, a._end += i), a = a._next;
    if (o)
      for (u in s)
        s[u] >= l && (s[u] += i);
    return Po(this);
  }, n.invalidate = function(i) {
    var o = this._first;
    for (this._lock = 0; o; )
      o.invalidate(i), o = o._next;
    return t.prototype.invalidate.call(this, i);
  }, n.clear = function(i) {
    i === void 0 && (i = !0);
    for (var o = this._first, l; o; )
      l = o._next, this.remove(o), o = l;
    return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), Po(this);
  }, n.totalDuration = function(i) {
    var o = 0, l = this, a = l._last, s = or, u, c, f;
    if (arguments.length)
      return l.timeScale((l._repeat < 0 ? l.duration() : l.totalDuration()) / (l.reversed() ? -i : i));
    if (l._dirty) {
      for (f = l.parent; a; )
        u = a._prev, a._dirty && a.totalDuration(), c = a._start, c > s && l._sort && a._ts && !l._lock ? (l._lock = 1, Fr(l, a, c - a._delay, 1)._lock = 0) : s = c, c < 0 && a._ts && (o -= c, (!f && !l._dp || f && f.smoothChildTiming) && (l._start += c / l._ts, l._time -= c, l._tTime -= c), l.shiftChildren(-c, !1, -1 / 0), s = 0), a._end > o && a._ts && (o = a._end), a = u;
      Xl(l, l === Je && l._time > o ? l._time : o, 1, 1), l._dirty = 0;
    }
    return l._tDur;
  }, e.updateRoot = function(i) {
    if (Je._ts && (Zw(Je, Bc(i, Je)), qw = zn.frame), zn.frame >= g1) {
      g1 += Un.autoSleep || 120;
      var o = Je._first;
      if ((!o || !o._ts) && Un.autoSleep && zn._listeners.length < 2) {
        for (; o && !o._ts; )
          o = o._next;
        o || zn.sleep();
      }
    }
  }, e;
}(Ls);
dr(_n.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var Pb = function(e, n, r, i, o, l, a) {
  var s = new bn(this._pt, e, n, 0, 1, Tx, null, o), u = 0, c = 0, f, d, p, m, h, y, g, v;
  for (s.b = r, s.e = i, r += "", i += "", (g = ~i.indexOf("random(")) && (i = Ds(i)), l && (v = [r, i], l(v, e, n), r = v[0], i = v[1]), d = r.match(Sd) || []; f = Sd.exec(i); )
    m = f[0], h = i.substring(u, f.index), p ? p = (p + 1) % 5 : h.substr(-5) === "rgba(" && (p = 1), m !== d[c++] && (y = parseFloat(d[c - 1]) || 0, s._pt = {
      _next: s._pt,
      p: h || c === 1 ? h : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: y,
      c: m.charAt(1) === "=" ? Ol(y, m) - y : parseFloat(m) - y,
      m: p && p < 4 ? Math.round : 0
    }, u = Sd.lastIndex);
  return s.c = u < i.length ? i.substring(u, i.length) : "", s.fp = a, (Hw.test(i) || g) && (s.e = 0), this._pt = s, s;
}, nm = function(e, n, r, i, o, l, a, s, u, c) {
  ct(i) && (i = i(o || 0, e, l));
  var f = e[n], d = r !== "get" ? r : ct(f) ? u ? e[n.indexOf("set") || !ct(e["get" + n.substr(3)]) ? n : "get" + n.substr(3)](u) : e[n]() : f, p = ct(f) ? u ? Ab : Ex : im, m;
  if (bt(i) && (~i.indexOf("random(") && (i = Ds(i)), i.charAt(1) === "=" && (m = Ol(d, i) + (Ht(d) || 0), (m || m === 0) && (i = m))), !c || d !== i || op)
    return !isNaN(d * i) && i !== "" ? (m = new bn(this._pt, e, n, +d || 0, i - (d || 0), typeof f == "boolean" ? Nb : Cx, 0, p), u && (m.fp = u), a && m.modifier(a, this, e), this._pt = m) : (!f && !(n in e) && Z0(n, i), Pb.call(this, e, n, d, i, p, s || Un.stringFilter, u));
}, Rb = function(e, n, r, i, o) {
  if (ct(e) && (e = qa(e, o, n, r, i)), !Qr(e) || e.style && e.nodeType || Xt(e) || Vw(e))
    return bt(e) ? qa(e, o, n, r, i) : e;
  var l = {}, a;
  for (a in e)
    l[a] = qa(e[a], o, n, r, i);
  return l;
}, xx = function(e, n, r, i, o, l) {
  var a, s, u, c;
  if (In[e] && (a = new In[e]()).init(o, a.rawVars ? n[e] : Rb(n[e], i, o, l, r), r, i, l) !== !1 && (r._pt = s = new bn(r._pt, o, e, 0, 1, a.render, a, 0, a.priority), r !== yl))
    for (u = r._ptLookup[r._targets.indexOf(o)], c = a._props.length; c--; )
      u[a._props[c]] = s;
  return a;
}, Li, op, rm = function t(e, n, r) {
  var i = e.vars, o = i.ease, l = i.startAt, a = i.immediateRender, s = i.lazy, u = i.onUpdate, c = i.onUpdateParams, f = i.callbackScope, d = i.runBackwards, p = i.yoyoEase, m = i.keyframes, h = i.autoRevert, y = e._dur, g = e._startAt, v = e._targets, _ = e.parent, w = _ && _.data === "nested" ? _.vars.targets : v, T = e._overwrite === "auto" && !G0, x = e.timeline, k, b, R, M, B, I, te, z, Y, ne, V, A, U;
  if (x && (!m || !o) && (o = "none"), e._ease = Ro(o, Hl.ease), e._yEase = p ? vx(Ro(p === !0 ? o : p, Hl.ease)) : 0, p && e._yoyo && !e._repeat && (p = e._yEase, e._yEase = e._ease, e._ease = p), e._from = !x && !!i.runBackwards, !x || m && !i.stagger) {
    if (z = v[0] ? bo(v[0]).harness : 0, A = z && i[z.prop], k = Uc(i, J0), g && (g._zTime < 0 && g.progress(1), n < 0 && d && a && !h ? g.render(-1, !0) : g.revert(d && y ? Ku : rb), g._lazy = 0), l) {
      if (Ji(e._startAt = vt.set(v, dr({
        data: "isStart",
        overwrite: !1,
        parent: _,
        immediateRender: !0,
        lazy: !g && Cn(s),
        startAt: null,
        delay: 0,
        onUpdate: u,
        onUpdateParams: c,
        callbackScope: f,
        stagger: 0
      }, l))), e._startAt._dp = 0, e._startAt._sat = e, n < 0 && (Yt || !a && !h) && e._startAt.revert(Ku), a && y && n <= 0 && r <= 0) {
        n && (e._zTime = n);
        return;
      }
    } else if (d && y && !g) {
      if (n && (a = !1), R = dr({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: a && !g && Cn(s),
        immediateRender: a,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: _
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, k), A && (R[z.prop] = A), Ji(e._startAt = vt.set(v, R)), e._startAt._dp = 0, e._startAt._sat = e, n < 0 && (Yt ? e._startAt.revert(Ku) : e._startAt.render(-1, !0)), e._zTime = n, !a)
        t(e._startAt, ze, ze);
      else if (!n)
        return;
    }
    for (e._pt = e._ptCache = 0, s = y && Cn(s) || s && !y, b = 0; b < v.length; b++) {
      if (B = v[b], te = B._gsap || tm(v)[b]._gsap, e._ptLookup[b] = ne = {}, Jh[te.id] && Gi.length && Fc(), V = w === v ? b : w.indexOf(B), z && (Y = new z()).init(B, A || k, e, V, w) !== !1 && (e._pt = M = new bn(e._pt, B, Y.name, 0, 1, Y.render, Y, 0, Y.priority), Y._props.forEach(function(C) {
        ne[C] = M;
      }), Y.priority && (I = 1)), !z || A)
        for (R in k)
          In[R] && (Y = xx(R, k, e, V, B, w)) ? Y.priority && (I = 1) : ne[R] = M = nm.call(e, B, R, "get", k[R], V, w, 0, i.stringFilter);
      e._op && e._op[b] && e.kill(B, e._op[b]), T && e._pt && (Li = e, Je.killTweensOf(B, ne, e.globalTime(n)), U = !e.parent, Li = 0), e._pt && s && (Jh[te.id] = 1);
    }
    I && bx(e), e._onInit && e._onInit(e);
  }
  e._onUpdate = u, e._initted = (!e._op || e._pt) && !U, m && n <= 0 && x.render(or, !0, !0);
}, Mb = function(e, n, r, i, o, l, a) {
  var s = (e._pt && e._ptCache || (e._ptCache = {}))[n], u, c, f, d;
  if (!s)
    for (s = e._ptCache[n] = [], f = e._ptLookup, d = e._targets.length; d--; ) {
      if (u = f[d][n], u && u.d && u.d._pt)
        for (u = u.d._pt; u && u.p !== n && u.fp !== n; )
          u = u._next;
      if (!u)
        return op = 1, e.vars[n] = "+=0", rm(e, a), op = 0, 1;
      s.push(u);
    }
  for (d = s.length; d--; )
    c = s[d], u = c._pt || c, u.s = (i || i === 0) && !o ? i : u.s + (i || 0) + l * u.c, u.c = r - u.s, c.e && (c.e = ht(r) + Ht(c.e)), c.b && (c.b = u.s + Ht(c.b));
}, Ob = function(e, n) {
  var r = e[0] ? bo(e[0]).harness : 0, i = r && r.aliases, o, l, a, s;
  if (!i)
    return n;
  o = Bo({}, n);
  for (l in i)
    if (l in o)
      for (s = i[l].split(","), a = s.length; a--; )
        o[s[a]] = o[l];
  return o;
}, Db = function(e, n, r, i) {
  var o = n.ease || i || "power1.inOut", l, a;
  if (Xt(n))
    a = r[e] || (r[e] = []), n.forEach(function(s, u) {
      return a.push({
        t: u / (n.length - 1) * 100,
        v: s,
        e: o
      });
    });
  else
    for (l in n)
      a = r[l] || (r[l] = []), l === "ease" || a.push({
        t: parseFloat(e),
        v: n[l],
        e: o
      });
}, qa = function(e, n, r, i, o) {
  return ct(e) ? e.call(n, r, i, o) : bt(e) && ~e.indexOf("random(") ? Ds(e) : e;
}, Sx = em + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", kx = {};
Tn(Sx + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
  return kx[t] = 1;
});
var vt = /* @__PURE__ */ function(t) {
  Uw(e, t);
  function e(r, i, o, l) {
    var a;
    typeof i == "number" && (o.duration = i, i = o, o = null), a = t.call(this, l ? i : Ga(i)) || this;
    var s = a.vars, u = s.duration, c = s.delay, f = s.immediateRender, d = s.stagger, p = s.overwrite, m = s.keyframes, h = s.defaults, y = s.scrollTrigger, g = s.yoyoEase, v = i.parent || Je, _ = (Xt(r) || Vw(r) ? gi(r[0]) : "length" in i) ? [r] : lr(r), w, T, x, k, b, R, M, B;
    if (a._targets = _.length ? tm(_) : $c("GSAP target " + r + " not found. https://greensock.com", !Un.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = p, m || d || Su(u) || Su(c)) {
      if (i = a.vars, w = a.timeline = new _n({
        data: "nested",
        defaults: h || {},
        targets: v && v.data === "nested" ? v.vars.targets : _
      }), w.kill(), w.parent = w._dp = ni(a), w._start = 0, d || Su(u) || Su(c)) {
        if (k = _.length, M = d && ax(d), Qr(d))
          for (b in d)
            ~Sx.indexOf(b) && (B || (B = {}), B[b] = d[b]);
        for (T = 0; T < k; T++)
          x = Uc(i, kx), x.stagger = 0, g && (x.yoyoEase = g), B && Bo(x, B), R = _[T], x.duration = +qa(u, ni(a), T, R, _), x.delay = (+qa(c, ni(a), T, R, _) || 0) - a._delay, !d && k === 1 && x.delay && (a._delay = c = x.delay, a._start += c, x.delay = 0), w.to(R, x, M ? M(T, R, _) : 0), w._ease = Ee.none;
        w.duration() ? u = c = 0 : a.timeline = 0;
      } else if (m) {
        Ga(dr(w.vars.defaults, {
          ease: "none"
        })), w._ease = Ro(m.ease || i.ease || "none");
        var I = 0, te, z, Y;
        if (Xt(m))
          m.forEach(function(ne) {
            return w.to(_, ne, ">");
          }), w.duration();
        else {
          x = {};
          for (b in m)
            b === "ease" || b === "easeEach" || Db(b, m[b], x, m.easeEach);
          for (b in x)
            for (te = x[b].sort(function(ne, V) {
              return ne.t - V.t;
            }), I = 0, T = 0; T < te.length; T++)
              z = te[T], Y = {
                ease: z.e,
                duration: (z.t - (T ? te[T - 1].t : 0)) / 100 * u
              }, Y[b] = z.v, w.to(_, Y, I), I += Y.duration;
          w.duration() < u && w.to({}, {
            duration: u - w.duration()
          });
        }
      }
      u || a.duration(u = w.duration());
    } else
      a.timeline = 0;
    return p === !0 && !G0 && (Li = ni(a), Je.killTweensOf(_), Li = 0), Fr(v, ni(a), o), i.reversed && a.reverse(), i.paused && a.paused(!0), (f || !u && !m && a._start === At(v._time) && Cn(f) && ub(ni(a)) && v.data !== "nested") && (a._tTime = -ze, a.render(Math.max(0, -c) || 0)), y && rx(ni(a), y), a;
  }
  var n = e.prototype;
  return n.render = function(i, o, l) {
    var a = this._time, s = this._tDur, u = this._dur, c = i < 0, f = i > s - ze && !c ? s : i < ze ? 0 : i, d, p, m, h, y, g, v, _, w;
    if (!u)
      fb(this, i, o, l);
    else if (f !== this._tTime || !i || l || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== c) {
      if (d = f, _ = this.timeline, this._repeat) {
        if (h = u + this._rDelay, this._repeat < -1 && c)
          return this.totalTime(h * 100 + i, o, l);
        if (d = At(f % h), f === s ? (m = this._repeat, d = u) : (m = ~~(f / h), m && m === f / h && (d = u, m--), d > u && (d = u)), g = this._yoyo && m & 1, g && (w = this._yEase, d = u - d), y = Yl(this._tTime, h), d === a && !l && this._initted)
          return this._tTime = f, this;
        m !== y && (_ && this._yEase && yx(_, g), this.vars.repeatRefresh && !g && !this._lock && (this._lock = l = 1, this.render(At(h * m), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (ix(this, c ? i : d, l, o, f))
          return this._tTime = 0, this;
        if (a !== this._time)
          return this;
        if (u !== this._dur)
          return this.render(i, o, l);
      }
      if (this._tTime = f, this._time = d, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = v = (w || this._ease)(d / u), this._from && (this.ratio = v = 1 - v), d && !a && !o && !m && (ar(this, "onStart"), this._tTime !== f))
        return this;
      for (p = this._pt; p; )
        p.r(v, p.d), p = p._next;
      _ && _.render(i < 0 ? i : !d && g ? -ze : _._dur * _._ease(d / this._dur), o, l) || this._startAt && (this._zTime = i), this._onUpdate && !o && (c && ep(this, i, o, l), ar(this, "onUpdate")), this._repeat && m !== y && this.vars.onRepeat && !o && this.parent && ar(this, "onRepeat"), (f === this._tDur || !f) && this._tTime === f && (c && !this._onUpdate && ep(this, i, !0, !0), (i || !u) && (f === this._tDur && this._ts > 0 || !f && this._ts < 0) && Ji(this, 1), !o && !(c && !a) && (f || a || g) && (ar(this, f === s ? "onComplete" : "onReverseComplete", !0), this._prom && !(f < s && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, n.targets = function() {
    return this._targets;
  }, n.invalidate = function(i) {
    return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), t.prototype.invalidate.call(this, i);
  }, n.resetTo = function(i, o, l, a) {
    As || zn.wake(), this._ts || this.play();
    var s = Math.min(this._dur, (this._dp._time - this._start) * this._ts), u;
    return this._initted || rm(this, s), u = this._ease(s / this._dur), Mb(this, i, o, l, a, u, s) ? this.resetTo(i, o, l, a) : (Nf(this, 0), this.parent || tx(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, n.kill = function(i, o) {
    if (o === void 0 && (o = "all"), !i && (!o || o === "all"))
      return this._lazy = this._pt = 0, this.parent ? Ra(this) : this;
    if (this.timeline) {
      var l = this.timeline.totalDuration();
      return this.timeline.killTweensOf(i, o, Li && Li.vars.overwrite !== !0)._first || Ra(this), this.parent && l !== this.timeline.totalDuration() && Xl(this, this._dur * this.timeline._tDur / l, 0, 1), this;
    }
    var a = this._targets, s = i ? lr(i) : a, u = this._ptLookup, c = this._pt, f, d, p, m, h, y, g;
    if ((!o || o === "all") && ab(a, s))
      return o === "all" && (this._pt = 0), Ra(this);
    for (f = this._op = this._op || [], o !== "all" && (bt(o) && (h = {}, Tn(o, function(v) {
      return h[v] = 1;
    }), o = h), o = Ob(a, o)), g = a.length; g--; )
      if (~s.indexOf(a[g])) {
        d = u[g], o === "all" ? (f[g] = o, m = d, p = {}) : (p = f[g] = f[g] || {}, m = o);
        for (h in m)
          y = d && d[h], y && ((!("kill" in y.d) || y.d.kill(h) === !0) && Af(this, y, "_pt"), delete d[h]), p !== "all" && (p[h] = 1);
      }
    return this._initted && !this._pt && c && Ra(this), this;
  }, e.to = function(i, o) {
    return new e(i, o, arguments[2]);
  }, e.from = function(i, o) {
    return Qa(1, arguments);
  }, e.delayedCall = function(i, o, l, a) {
    return new e(o, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: i,
      onComplete: o,
      onReverseComplete: o,
      onCompleteParams: l,
      onReverseCompleteParams: l,
      callbackScope: a
    });
  }, e.fromTo = function(i, o, l) {
    return Qa(2, arguments);
  }, e.set = function(i, o) {
    return o.duration = 0, o.repeatDelay || (o.repeat = 0), new e(i, o);
  }, e.killTweensOf = function(i, o, l) {
    return Je.killTweensOf(i, o, l);
  }, e;
}(Ls);
dr(vt.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
Tn("staggerTo,staggerFrom,staggerFromTo", function(t) {
  vt[t] = function() {
    var e = new _n(), n = np.call(arguments, 0);
    return n.splice(t === "staggerFromTo" ? 5 : 4, 0, 0), e[t].apply(e, n);
  };
});
var im = function(e, n, r) {
  return e[n] = r;
}, Ex = function(e, n, r) {
  return e[n](r);
}, Ab = function(e, n, r, i) {
  return e[n](i.fp, r);
}, Lb = function(e, n, r) {
  return e.setAttribute(n, r);
}, om = function(e, n) {
  return ct(e[n]) ? Ex : Q0(e[n]) && e.setAttribute ? Lb : im;
}, Cx = function(e, n) {
  return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e6) / 1e6, n);
}, Nb = function(e, n) {
  return n.set(n.t, n.p, !!(n.s + n.c * e), n);
}, Tx = function(e, n) {
  var r = n._pt, i = "";
  if (!e && n.b)
    i = n.b;
  else if (e === 1 && n.e)
    i = n.e;
  else {
    for (; r; )
      i = r.p + (r.m ? r.m(r.s + r.c * e) : Math.round((r.s + r.c * e) * 1e4) / 1e4) + i, r = r._next;
    i += n.c;
  }
  n.set(n.t, n.p, i, n);
}, lm = function(e, n) {
  for (var r = n._pt; r; )
    r.r(e, r.d), r = r._next;
}, Ib = function(e, n, r, i) {
  for (var o = this._pt, l; o; )
    l = o._next, o.p === i && o.modifier(e, n, r), o = l;
}, zb = function(e) {
  for (var n = this._pt, r, i; n; )
    i = n._next, n.p === e && !n.op || n.op === e ? Af(this, n, "_pt") : n.dep || (r = 1), n = i;
  return !r;
}, jb = function(e, n, r, i) {
  i.mSet(e, n, i.m.call(i.tween, r, i.mt), i);
}, bx = function(e) {
  for (var n = e._pt, r, i, o, l; n; ) {
    for (r = n._next, i = o; i && i.pr > n.pr; )
      i = i._next;
    (n._prev = i ? i._prev : l) ? n._prev._next = n : o = n, (n._next = i) ? i._prev = n : l = n, n = r;
  }
  e._pt = o;
}, bn = /* @__PURE__ */ function() {
  function t(n, r, i, o, l, a, s, u, c) {
    this.t = r, this.s = o, this.c = l, this.p = i, this.r = a || Cx, this.d = s || this, this.set = u || im, this.pr = c || 0, this._next = n, n && (n._prev = this);
  }
  var e = t.prototype;
  return e.modifier = function(r, i, o) {
    this.mSet = this.mSet || this.set, this.set = jb, this.m = r, this.mt = o, this.tween = i;
  }, t;
}();
Tn(em + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
  return J0[t] = 1;
});
Vn.TweenMax = Vn.TweenLite = vt;
Vn.TimelineLite = Vn.TimelineMax = _n;
Je = new _n({
  sortChildren: !1,
  defaults: Hl,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
Un.stringFilter = gx;
var Mo = [], Ju = {}, $b = [], S1 = 0, Fb = 0, bd = function(e) {
  return (Ju[e] || $b).map(function(n) {
    return n();
  });
}, lp = function() {
  var e = Date.now(), n = [];
  e - S1 > 2 && (bd("matchMediaInit"), Mo.forEach(function(r) {
    var i = r.queries, o = r.conditions, l, a, s, u;
    for (a in i)
      l = qn.matchMedia(i[a]).matches, l && (s = 1), l !== o[a] && (o[a] = l, u = 1);
    u && (r.revert(), s && n.push(r));
  }), bd("matchMediaRevert"), n.forEach(function(r) {
    return r.onMatch(r);
  }), S1 = e, bd("matchMedia"));
}, Px = /* @__PURE__ */ function() {
  function t(n, r) {
    this.selector = r && rp(r), this.data = [], this._r = [], this.isReverted = !1, this.id = Fb++, n && this.add(n);
  }
  var e = t.prototype;
  return e.add = function(r, i, o) {
    ct(r) && (o = i, i = r, r = ct);
    var l = this, a = function() {
      var u = ut, c = l.selector, f;
      return u && u !== l && u.data.push(l), o && (l.selector = rp(o)), ut = l, f = i.apply(l, arguments), ct(f) && l._r.push(f), ut = u, l.selector = c, l.isReverted = !1, f;
    };
    return l.last = a, r === ct ? a(l) : r ? l[r] = a : a;
  }, e.ignore = function(r) {
    var i = ut;
    ut = null, r(this), ut = i;
  }, e.getTweens = function() {
    var r = [];
    return this.data.forEach(function(i) {
      return i instanceof t ? r.push.apply(r, i.getTweens()) : i instanceof vt && !(i.parent && i.parent.data === "nested") && r.push(i);
    }), r;
  }, e.clear = function() {
    this._r.length = this.data.length = 0;
  }, e.kill = function(r, i) {
    var o = this;
    if (r) {
      var l = this.getTweens();
      this.data.forEach(function(s) {
        s.data === "isFlip" && (s.revert(), s.getChildren(!0, !0, !1).forEach(function(u) {
          return l.splice(l.indexOf(u), 1);
        }));
      }), l.map(function(s) {
        return {
          g: s.globalTime(0),
          t: s
        };
      }).sort(function(s, u) {
        return u.g - s.g || -1 / 0;
      }).forEach(function(s) {
        return s.t.revert(r);
      }), this.data.forEach(function(s) {
        return !(s instanceof vt) && s.revert && s.revert(r);
      }), this._r.forEach(function(s) {
        return s(r, o);
      }), this.isReverted = !0;
    } else
      this.data.forEach(function(s) {
        return s.kill && s.kill();
      });
    if (this.clear(), i)
      for (var a = Mo.length; a--; )
        Mo[a].id === this.id && Mo.splice(a, 1);
  }, e.revert = function(r) {
    this.kill(r || {});
  }, t;
}(), Ub = /* @__PURE__ */ function() {
  function t(n) {
    this.contexts = [], this.scope = n;
  }
  var e = t.prototype;
  return e.add = function(r, i, o) {
    Qr(r) || (r = {
      matches: r
    });
    var l = new Px(0, o || this.scope), a = l.conditions = {}, s, u, c;
    ut && !l.selector && (l.selector = ut.selector), this.contexts.push(l), i = l.add("onMatch", i), l.queries = r;
    for (u in r)
      u === "all" ? c = 1 : (s = qn.matchMedia(r[u]), s && (Mo.indexOf(l) < 0 && Mo.push(l), (a[u] = s.matches) && (c = 1), s.addListener ? s.addListener(lp) : s.addEventListener("change", lp)));
    return c && i(l), this;
  }, e.revert = function(r) {
    this.kill(r || {});
  }, e.kill = function(r) {
    this.contexts.forEach(function(i) {
      return i.kill(r, !0);
    });
  }, t;
}(), Vc = {
  registerPlugin: function() {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r];
    n.forEach(function(i) {
      return hx(i);
    });
  },
  timeline: function(e) {
    return new _n(e);
  },
  getTweensOf: function(e, n) {
    return Je.getTweensOf(e, n);
  },
  getProperty: function(e, n, r, i) {
    bt(e) && (e = lr(e)[0]);
    var o = bo(e || {}).get, l = r ? ex : Jw;
    return r === "native" && (r = ""), e && (n ? l((In[n] && In[n].get || o)(e, n, r, i)) : function(a, s, u) {
      return l((In[a] && In[a].get || o)(e, a, s, u));
    });
  },
  quickSetter: function(e, n, r) {
    if (e = lr(e), e.length > 1) {
      var i = e.map(function(c) {
        return Pn.quickSetter(c, n, r);
      }), o = i.length;
      return function(c) {
        for (var f = o; f--; )
          i[f](c);
      };
    }
    e = e[0] || {};
    var l = In[n], a = bo(e), s = a.harness && (a.harness.aliases || {})[n] || n, u = l ? function(c) {
      var f = new l();
      yl._pt = 0, f.init(e, r ? c + r : c, yl, 0, [e]), f.render(1, f), yl._pt && lm(1, yl);
    } : a.set(e, s);
    return l ? u : function(c) {
      return u(e, s, r ? c + r : c, a, 1);
    };
  },
  quickTo: function(e, n, r) {
    var i, o = Pn.to(e, Bo((i = {}, i[n] = "+=0.1", i.paused = !0, i), r || {})), l = function(s, u, c) {
      return o.resetTo(n, s, u, c);
    };
    return l.tween = o, l;
  },
  isTweening: function(e) {
    return Je.getTweensOf(e, !0).length > 0;
  },
  defaults: function(e) {
    return e && e.ease && (e.ease = Ro(e.ease, Hl.ease)), v1(Hl, e || {});
  },
  config: function(e) {
    return v1(Un, e || {});
  },
  registerEffect: function(e) {
    var n = e.name, r = e.effect, i = e.plugins, o = e.defaults, l = e.extendTimeline;
    (i || "").split(",").forEach(function(a) {
      return a && !In[a] && !Vn[a] && $c(n + " effect requires " + a + " plugin.");
    }), kd[n] = function(a, s, u) {
      return r(lr(a), dr(s || {}, o), u);
    }, l && (_n.prototype[n] = function(a, s, u) {
      return this.add(kd[n](a, Qr(s) ? s : (u = s) && {}, this), u);
    });
  },
  registerEase: function(e, n) {
    Ee[e] = Ro(n);
  },
  parseEase: function(e, n) {
    return arguments.length ? Ro(e, n) : Ee;
  },
  getById: function(e) {
    return Je.getById(e);
  },
  exportRoot: function(e, n) {
    e === void 0 && (e = {});
    var r = new _n(e), i, o;
    for (r.smoothChildTiming = Cn(e.smoothChildTiming), Je.remove(r), r._dp = 0, r._time = r._tTime = Je._time, i = Je._first; i; )
      o = i._next, (n || !(!i._dur && i instanceof vt && i.vars.onComplete === i._targets[0])) && Fr(r, i, i._start - i._delay), i = o;
    return Fr(Je, r, 0), r;
  },
  context: function(e, n) {
    return e ? new Px(e, n) : ut;
  },
  matchMedia: function(e) {
    return new Ub(e);
  },
  matchMediaRefresh: function() {
    return Mo.forEach(function(e) {
      var n = e.conditions, r, i;
      for (i in n)
        n[i] && (n[i] = !1, r = 1);
      r && e.revert();
    }) || lp();
  },
  addEventListener: function(e, n) {
    var r = Ju[e] || (Ju[e] = []);
    ~r.indexOf(n) || r.push(n);
  },
  removeEventListener: function(e, n) {
    var r = Ju[e], i = r && r.indexOf(n);
    i >= 0 && r.splice(i, 1);
  },
  utils: {
    wrap: _b,
    wrapYoyo: wb,
    distribute: ax,
    random: ux,
    snap: sx,
    normalize: yb,
    getUnit: Ht,
    clamp: pb,
    splitColor: px,
    toArray: lr,
    selector: rp,
    mapRange: fx,
    pipe: gb,
    unitize: vb,
    interpolate: xb,
    shuffle: lx
  },
  install: Gw,
  effects: kd,
  ticker: zn,
  updateRoot: _n.updateRoot,
  plugins: In,
  globalTimeline: Je,
  core: {
    PropTween: bn,
    globals: Qw,
    Tween: vt,
    Timeline: _n,
    Animation: Ls,
    getCache: bo,
    _removeLinkedListItem: Af,
    reverting: function() {
      return Yt;
    },
    context: function(e) {
      return e && ut && (ut.data.push(e), e._ctx = ut), ut;
    },
    suppressOverwrites: function(e) {
      return G0 = e;
    }
  }
};
Tn("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
  return Vc[t] = vt[t];
});
zn.add(_n.updateRoot);
yl = Vc.to({}, {
  duration: 0
});
var Bb = function(e, n) {
  for (var r = e._pt; r && r.p !== n && r.op !== n && r.fp !== n; )
    r = r._next;
  return r;
}, Vb = function(e, n) {
  var r = e._targets, i, o, l;
  for (i in n)
    for (o = r.length; o--; )
      l = e._ptLookup[o][i], l && (l = l.d) && (l._pt && (l = Bb(l, i)), l && l.modifier && l.modifier(n[i], e, r[o], i));
}, Pd = function(e, n) {
  return {
    name: e,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(i, o, l) {
      l._onInit = function(a) {
        var s, u;
        if (bt(o) && (s = {}, Tn(o, function(c) {
          return s[c] = 1;
        }), o = s), n) {
          s = {};
          for (u in o)
            s[u] = n(o[u]);
          o = s;
        }
        Vb(a, o);
      };
    }
  };
}, Pn = Vc.registerPlugin({
  name: "attr",
  init: function(e, n, r, i, o) {
    var l, a, s;
    this.tween = r;
    for (l in n)
      s = e.getAttribute(l) || "", a = this.add(e, "setAttribute", (s || 0) + "", n[l], i, o, 0, 0, l), a.op = l, a.b = s, this._props.push(l);
  },
  render: function(e, n) {
    for (var r = n._pt; r; )
      Yt ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), r = r._next;
  }
}, {
  name: "endArray",
  init: function(e, n) {
    for (var r = n.length; r--; )
      this.add(e, r, e[r] || 0, n[r], 0, 0, 0, 0, 0, 1);
  }
}, Pd("roundProps", ip), Pd("modifiers"), Pd("snap", sx)) || Vc;
vt.version = _n.version = Pn.version = "3.12.2";
Xw = 1;
q0() && Gl();
Ee.Power0;
Ee.Power1;
Ee.Power2;
Ee.Power3;
Ee.Power4;
Ee.Linear;
Ee.Quad;
Ee.Cubic;
Ee.Quart;
Ee.Quint;
Ee.Strong;
Ee.Elastic;
Ee.Back;
Ee.SteppedEase;
Ee.Bounce;
Ee.Sine;
Ee.Expo;
Ee.Circ;
/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var k1, Ni, Dl, am, xo, E1, sm, Wb = function() {
  return typeof window < "u";
}, vi = {}, ho = 180 / Math.PI, Al = Math.PI / 180, Jo = Math.atan2, C1 = 1e8, um = /([A-Z])/g, Hb = /(left|right|width|margin|padding|x)/i, Yb = /[\s,\(]\S/, Br = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, ap = function(e, n) {
  return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n);
}, Xb = function(e, n) {
  return n.set(n.t, n.p, e === 1 ? n.e : Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n);
}, Gb = function(e, n) {
  return n.set(n.t, n.p, e ? Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u : n.b, n);
}, Qb = function(e, n) {
  var r = n.s + n.c * e;
  n.set(n.t, n.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + n.u, n);
}, Rx = function(e, n) {
  return n.set(n.t, n.p, e ? n.e : n.b, n);
}, Mx = function(e, n) {
  return n.set(n.t, n.p, e !== 1 ? n.b : n.e, n);
}, qb = function(e, n, r) {
  return e.style[n] = r;
}, Kb = function(e, n, r) {
  return e.style.setProperty(n, r);
}, Zb = function(e, n, r) {
  return e._gsap[n] = r;
}, Jb = function(e, n, r) {
  return e._gsap.scaleX = e._gsap.scaleY = r;
}, eP = function(e, n, r, i, o) {
  var l = e._gsap;
  l.scaleX = l.scaleY = r, l.renderTransform(o, l);
}, tP = function(e, n, r, i, o) {
  var l = e._gsap;
  l[n] = r, l.renderTransform(o, l);
}, et = "transform", Pr = et + "Origin", nP = function t(e, n) {
  var r = this, i = this.target, o = i.style;
  if (e in vi && o) {
    if (this.tfm = this.tfm || {}, e !== "transform")
      e = Br[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(l) {
        return r.tfm[l] = ii(i, l);
      }) : this.tfm[e] = i._gsap.x ? i._gsap[e] : ii(i, e);
    else
      return Br.transform.split(",").forEach(function(l) {
        return t.call(r, l, n);
      });
    if (this.props.indexOf(et) >= 0)
      return;
    i._gsap.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(Pr, n, "")), e = et;
  }
  (o || n) && this.props.push(e, n, o[e]);
}, Ox = function(e) {
  e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
}, rP = function() {
  var e = this.props, n = this.target, r = n.style, i = n._gsap, o, l;
  for (o = 0; o < e.length; o += 3)
    e[o + 1] ? n[e[o]] = e[o + 2] : e[o + 2] ? r[e[o]] = e[o + 2] : r.removeProperty(e[o].substr(0, 2) === "--" ? e[o] : e[o].replace(um, "-$1").toLowerCase());
  if (this.tfm) {
    for (l in this.tfm)
      i[l] = this.tfm[l];
    i.svg && (i.renderTransform(), n.setAttribute("data-svg-origin", this.svgo || "")), o = sm(), (!o || !o.isStart) && !r[et] && (Ox(r), i.uncache = 1);
  }
}, Dx = function(e, n) {
  var r = {
    target: e,
    props: [],
    revert: rP,
    save: nP
  };
  return e._gsap || Pn.core.getCache(e), n && n.split(",").forEach(function(i) {
    return r.save(i);
  }), r;
}, Ax, sp = function(e, n) {
  var r = Ni.createElementNS ? Ni.createElementNS((n || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Ni.createElement(e);
  return r.style ? r : Ni.createElement(e);
}, Hr = function t(e, n, r) {
  var i = getComputedStyle(e);
  return i[n] || i.getPropertyValue(n.replace(um, "-$1").toLowerCase()) || i.getPropertyValue(n) || !r && t(e, Ql(n) || n, 1) || "";
}, T1 = "O,Moz,ms,Ms,Webkit".split(","), Ql = function(e, n, r) {
  var i = n || xo, o = i.style, l = 5;
  if (e in o && !r)
    return e;
  for (e = e.charAt(0).toUpperCase() + e.substr(1); l-- && !(T1[l] + e in o); )
    ;
  return l < 0 ? null : (l === 3 ? "ms" : l >= 0 ? T1[l] : "") + e;
}, up = function() {
  Wb() && window.document && (k1 = window, Ni = k1.document, Dl = Ni.documentElement, xo = sp("div") || {
    style: {}
  }, sp("div"), et = Ql(et), Pr = et + "Origin", xo.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Ax = !!Ql("perspective"), sm = Pn.core.reverting, am = 1);
}, Rd = function t(e) {
  var n = sp("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = this.parentNode, i = this.nextSibling, o = this.style.cssText, l;
  if (Dl.appendChild(n), n.appendChild(this), this.style.display = "block", e)
    try {
      l = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t;
    } catch {
    }
  else
    this._gsapBBox && (l = this._gsapBBox());
  return r && (i ? r.insertBefore(this, i) : r.appendChild(this)), Dl.removeChild(n), this.style.cssText = o, l;
}, b1 = function(e, n) {
  for (var r = n.length; r--; )
    if (e.hasAttribute(n[r]))
      return e.getAttribute(n[r]);
}, Lx = function(e) {
  var n;
  try {
    n = e.getBBox();
  } catch {
    n = Rd.call(e, !0);
  }
  return n && (n.width || n.height) || e.getBBox === Rd || (n = Rd.call(e, !0)), n && !n.width && !n.x && !n.y ? {
    x: +b1(e, ["x", "cx", "x1"]) || 0,
    y: +b1(e, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : n;
}, Nx = function(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Lx(e));
}, Ns = function(e, n) {
  if (n) {
    var r = e.style;
    n in vi && n !== Pr && (n = et), r.removeProperty ? ((n.substr(0, 2) === "ms" || n.substr(0, 6) === "webkit") && (n = "-" + n), r.removeProperty(n.replace(um, "-$1").toLowerCase())) : r.removeAttribute(n);
  }
}, Ii = function(e, n, r, i, o, l) {
  var a = new bn(e._pt, n, r, 0, 1, l ? Mx : Rx);
  return e._pt = a, a.b = i, a.e = o, e._props.push(r), a;
}, P1 = {
  deg: 1,
  rad: 1,
  turn: 1
}, iP = {
  grid: 1,
  flex: 1
}, eo = function t(e, n, r, i) {
  var o = parseFloat(r) || 0, l = (r + "").trim().substr((o + "").length) || "px", a = xo.style, s = Hb.test(n), u = e.tagName.toLowerCase() === "svg", c = (u ? "client" : "offset") + (s ? "Width" : "Height"), f = 100, d = i === "px", p = i === "%", m, h, y, g;
  return i === l || !o || P1[i] || P1[l] ? o : (l !== "px" && !d && (o = t(e, n, r, "px")), g = e.getCTM && Nx(e), (p || l === "%") && (vi[n] || ~n.indexOf("adius")) ? (m = g ? e.getBBox()[s ? "width" : "height"] : e[c], ht(p ? o / m * f : o / 100 * m)) : (a[s ? "width" : "height"] = f + (d ? l : i), h = ~n.indexOf("adius") || i === "em" && e.appendChild && !u ? e : e.parentNode, g && (h = (e.ownerSVGElement || {}).parentNode), (!h || h === Ni || !h.appendChild) && (h = Ni.body), y = h._gsap, y && p && y.width && s && y.time === zn.time && !y.uncache ? ht(o / y.width * f) : ((p || l === "%") && !iP[Hr(h, "display")] && (a.position = Hr(e, "position")), h === e && (a.position = "static"), h.appendChild(xo), m = xo[c], h.removeChild(xo), a.position = "absolute", s && p && (y = bo(h), y.time = zn.time, y.width = h[c]), ht(d ? m * o / f : m && o ? f / m * o : 0))));
}, ii = function(e, n, r, i) {
  var o;
  return am || up(), n in Br && n !== "transform" && (n = Br[n], ~n.indexOf(",") && (n = n.split(",")[0])), vi[n] && n !== "transform" ? (o = zs(e, i), o = n !== "transformOrigin" ? o[n] : o.svg ? o.origin : Hc(Hr(e, Pr)) + " " + o.zOrigin + "px") : (o = e.style[n], (!o || o === "auto" || i || ~(o + "").indexOf("calc(")) && (o = Wc[n] && Wc[n](e, n, r) || Hr(e, n) || Kw(e, n) || (n === "opacity" ? 1 : 0))), r && !~(o + "").trim().indexOf(" ") ? eo(e, n, o, r) + r : o;
}, oP = function(e, n, r, i) {
  if (!r || r === "none") {
    var o = Ql(n, e, 1), l = o && Hr(e, o, 1);
    l && l !== r ? (n = o, r = l) : n === "borderColor" && (r = Hr(e, "borderTopColor"));
  }
  var a = new bn(this._pt, e.style, n, 0, 1, Tx), s = 0, u = 0, c, f, d, p, m, h, y, g, v, _, w, T;
  if (a.b = r, a.e = i, r += "", i += "", i === "auto" && (e.style[n] = i, i = Hr(e, n) || i, e.style[n] = r), c = [r, i], gx(c), r = c[0], i = c[1], d = r.match(vl) || [], T = i.match(vl) || [], T.length) {
    for (; f = vl.exec(i); )
      y = f[0], v = i.substring(s, f.index), m ? m = (m + 1) % 5 : (v.substr(-5) === "rgba(" || v.substr(-5) === "hsla(") && (m = 1), y !== (h = d[u++] || "") && (p = parseFloat(h) || 0, w = h.substr((p + "").length), y.charAt(1) === "=" && (y = Ol(p, y) + w), g = parseFloat(y), _ = y.substr((g + "").length), s = vl.lastIndex - _.length, _ || (_ = _ || Un.units[n] || w, s === i.length && (i += _, a.e += _)), w !== _ && (p = eo(e, n, h, _) || 0), a._pt = {
        _next: a._pt,
        p: v || u === 1 ? v : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: p,
        c: g - p,
        m: m && m < 4 || n === "zIndex" ? Math.round : 0
      });
    a.c = s < i.length ? i.substring(s, i.length) : "";
  } else
    a.r = n === "display" && i === "none" ? Mx : Rx;
  return Hw.test(i) && (a.e = 0), this._pt = a, a;
}, R1 = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, lP = function(e) {
  var n = e.split(" "), r = n[0], i = n[1] || "50%";
  return (r === "top" || r === "bottom" || i === "left" || i === "right") && (e = r, r = i, i = e), n[0] = R1[r] || r, n[1] = R1[i] || i, n.join(" ");
}, aP = function(e, n) {
  if (n.tween && n.tween._time === n.tween._dur) {
    var r = n.t, i = r.style, o = n.u, l = r._gsap, a, s, u;
    if (o === "all" || o === !0)
      i.cssText = "", s = 1;
    else
      for (o = o.split(","), u = o.length; --u > -1; )
        a = o[u], vi[a] && (s = 1, a = a === "transformOrigin" ? Pr : et), Ns(r, a);
    s && (Ns(r, et), l && (l.svg && r.removeAttribute("transform"), zs(r, 1), l.uncache = 1, Ox(i)));
  }
}, Wc = {
  clearProps: function(e, n, r, i, o) {
    if (o.data !== "isFromStart") {
      var l = e._pt = new bn(e._pt, n, r, 0, 0, aP);
      return l.u = i, l.pr = -10, l.tween = o, e._props.push(r), 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://greensock.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */
}, Is = [1, 0, 0, 1, 0, 0], Ix = {}, zx = function(e) {
  return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
}, M1 = function(e) {
  var n = Hr(e, et);
  return zx(n) ? Is : n.substr(7).match(Ww).map(ht);
}, cm = function(e, n) {
  var r = e._gsap || bo(e), i = e.style, o = M1(e), l, a, s, u;
  return r.svg && e.getAttribute("transform") ? (s = e.transform.baseVal.consolidate().matrix, o = [s.a, s.b, s.c, s.d, s.e, s.f], o.join(",") === "1,0,0,1,0,0" ? Is : o) : (o === Is && !e.offsetParent && e !== Dl && !r.svg && (s = i.display, i.display = "block", l = e.parentNode, (!l || !e.offsetParent) && (u = 1, a = e.nextElementSibling, Dl.appendChild(e)), o = M1(e), s ? i.display = s : Ns(e, "display"), u && (a ? l.insertBefore(e, a) : l ? l.appendChild(e) : Dl.removeChild(e))), n && o.length > 6 ? [o[0], o[1], o[4], o[5], o[12], o[13]] : o);
}, cp = function(e, n, r, i, o, l) {
  var a = e._gsap, s = o || cm(e, !0), u = a.xOrigin || 0, c = a.yOrigin || 0, f = a.xOffset || 0, d = a.yOffset || 0, p = s[0], m = s[1], h = s[2], y = s[3], g = s[4], v = s[5], _ = n.split(" "), w = parseFloat(_[0]) || 0, T = parseFloat(_[1]) || 0, x, k, b, R;
  r ? s !== Is && (k = p * y - m * h) && (b = w * (y / k) + T * (-h / k) + (h * v - y * g) / k, R = w * (-m / k) + T * (p / k) - (p * v - m * g) / k, w = b, T = R) : (x = Lx(e), w = x.x + (~_[0].indexOf("%") ? w / 100 * x.width : w), T = x.y + (~(_[1] || _[0]).indexOf("%") ? T / 100 * x.height : T)), i || i !== !1 && a.smooth ? (g = w - u, v = T - c, a.xOffset = f + (g * p + v * h) - g, a.yOffset = d + (g * m + v * y) - v) : a.xOffset = a.yOffset = 0, a.xOrigin = w, a.yOrigin = T, a.smooth = !!i, a.origin = n, a.originIsAbsolute = !!r, e.style[Pr] = "0px 0px", l && (Ii(l, a, "xOrigin", u, w), Ii(l, a, "yOrigin", c, T), Ii(l, a, "xOffset", f, a.xOffset), Ii(l, a, "yOffset", d, a.yOffset)), e.setAttribute("data-svg-origin", w + " " + T);
}, zs = function(e, n) {
  var r = e._gsap || new wx(e);
  if ("x" in r && !n && !r.uncache)
    return r;
  var i = e.style, o = r.scaleX < 0, l = "px", a = "deg", s = getComputedStyle(e), u = Hr(e, Pr) || "0", c, f, d, p, m, h, y, g, v, _, w, T, x, k, b, R, M, B, I, te, z, Y, ne, V, A, U, C, re, oe, We, ue, de;
  return c = f = d = h = y = g = v = _ = w = 0, p = m = 1, r.svg = !!(e.getCTM && Nx(e)), s.translate && ((s.translate !== "none" || s.scale !== "none" || s.rotate !== "none") && (i[et] = (s.translate !== "none" ? "translate3d(" + (s.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (s.rotate !== "none" ? "rotate(" + s.rotate + ") " : "") + (s.scale !== "none" ? "scale(" + s.scale.split(" ").join(",") + ") " : "") + (s[et] !== "none" ? s[et] : "")), i.scale = i.rotate = i.translate = "none"), k = cm(e, r.svg), r.svg && (r.uncache ? (A = e.getBBox(), u = r.xOrigin - A.x + "px " + (r.yOrigin - A.y) + "px", V = "") : V = !n && e.getAttribute("data-svg-origin"), cp(e, V || u, !!V || r.originIsAbsolute, r.smooth !== !1, k)), T = r.xOrigin || 0, x = r.yOrigin || 0, k !== Is && (B = k[0], I = k[1], te = k[2], z = k[3], c = Y = k[4], f = ne = k[5], k.length === 6 ? (p = Math.sqrt(B * B + I * I), m = Math.sqrt(z * z + te * te), h = B || I ? Jo(I, B) * ho : 0, v = te || z ? Jo(te, z) * ho + h : 0, v && (m *= Math.abs(Math.cos(v * Al))), r.svg && (c -= T - (T * B + x * te), f -= x - (T * I + x * z))) : (de = k[6], We = k[7], C = k[8], re = k[9], oe = k[10], ue = k[11], c = k[12], f = k[13], d = k[14], b = Jo(de, oe), y = b * ho, b && (R = Math.cos(-b), M = Math.sin(-b), V = Y * R + C * M, A = ne * R + re * M, U = de * R + oe * M, C = Y * -M + C * R, re = ne * -M + re * R, oe = de * -M + oe * R, ue = We * -M + ue * R, Y = V, ne = A, de = U), b = Jo(-te, oe), g = b * ho, b && (R = Math.cos(-b), M = Math.sin(-b), V = B * R - C * M, A = I * R - re * M, U = te * R - oe * M, ue = z * M + ue * R, B = V, I = A, te = U), b = Jo(I, B), h = b * ho, b && (R = Math.cos(b), M = Math.sin(b), V = B * R + I * M, A = Y * R + ne * M, I = I * R - B * M, ne = ne * R - Y * M, B = V, Y = A), y && Math.abs(y) + Math.abs(h) > 359.9 && (y = h = 0, g = 180 - g), p = ht(Math.sqrt(B * B + I * I + te * te)), m = ht(Math.sqrt(ne * ne + de * de)), b = Jo(Y, ne), v = Math.abs(b) > 2e-4 ? b * ho : 0, w = ue ? 1 / (ue < 0 ? -ue : ue) : 0), r.svg && (V = e.getAttribute("transform"), r.forceCSS = e.setAttribute("transform", "") || !zx(Hr(e, et)), V && e.setAttribute("transform", V))), Math.abs(v) > 90 && Math.abs(v) < 270 && (o ? (p *= -1, v += h <= 0 ? 180 : -180, h += h <= 0 ? 180 : -180) : (m *= -1, v += v <= 0 ? 180 : -180)), n = n || r.uncache, r.x = c - ((r.xPercent = c && (!n && r.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0))) ? e.offsetWidth * r.xPercent / 100 : 0) + l, r.y = f - ((r.yPercent = f && (!n && r.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-f) ? -50 : 0))) ? e.offsetHeight * r.yPercent / 100 : 0) + l, r.z = d + l, r.scaleX = ht(p), r.scaleY = ht(m), r.rotation = ht(h) + a, r.rotationX = ht(y) + a, r.rotationY = ht(g) + a, r.skewX = v + a, r.skewY = _ + a, r.transformPerspective = w + l, (r.zOrigin = parseFloat(u.split(" ")[2]) || 0) && (i[Pr] = Hc(u)), r.xOffset = r.yOffset = 0, r.force3D = Un.force3D, r.renderTransform = r.svg ? uP : Ax ? jx : sP, r.uncache = 0, r;
}, Hc = function(e) {
  return (e = e.split(" "))[0] + " " + e[1];
}, Md = function(e, n, r) {
  var i = Ht(n);
  return ht(parseFloat(n) + parseFloat(eo(e, "x", r + "px", i))) + i;
}, sP = function(e, n) {
  n.z = "0px", n.rotationY = n.rotationX = "0deg", n.force3D = 0, jx(e, n);
}, so = "0deg", ma = "0px", uo = ") ", jx = function(e, n) {
  var r = n || this, i = r.xPercent, o = r.yPercent, l = r.x, a = r.y, s = r.z, u = r.rotation, c = r.rotationY, f = r.rotationX, d = r.skewX, p = r.skewY, m = r.scaleX, h = r.scaleY, y = r.transformPerspective, g = r.force3D, v = r.target, _ = r.zOrigin, w = "", T = g === "auto" && e && e !== 1 || g === !0;
  if (_ && (f !== so || c !== so)) {
    var x = parseFloat(c) * Al, k = Math.sin(x), b = Math.cos(x), R;
    x = parseFloat(f) * Al, R = Math.cos(x), l = Md(v, l, k * R * -_), a = Md(v, a, -Math.sin(x) * -_), s = Md(v, s, b * R * -_ + _);
  }
  y !== ma && (w += "perspective(" + y + uo), (i || o) && (w += "translate(" + i + "%, " + o + "%) "), (T || l !== ma || a !== ma || s !== ma) && (w += s !== ma || T ? "translate3d(" + l + ", " + a + ", " + s + ") " : "translate(" + l + ", " + a + uo), u !== so && (w += "rotate(" + u + uo), c !== so && (w += "rotateY(" + c + uo), f !== so && (w += "rotateX(" + f + uo), (d !== so || p !== so) && (w += "skew(" + d + ", " + p + uo), (m !== 1 || h !== 1) && (w += "scale(" + m + ", " + h + uo), v.style[et] = w || "translate(0, 0)";
}, uP = function(e, n) {
  var r = n || this, i = r.xPercent, o = r.yPercent, l = r.x, a = r.y, s = r.rotation, u = r.skewX, c = r.skewY, f = r.scaleX, d = r.scaleY, p = r.target, m = r.xOrigin, h = r.yOrigin, y = r.xOffset, g = r.yOffset, v = r.forceCSS, _ = parseFloat(l), w = parseFloat(a), T, x, k, b, R;
  s = parseFloat(s), u = parseFloat(u), c = parseFloat(c), c && (c = parseFloat(c), u += c, s += c), s || u ? (s *= Al, u *= Al, T = Math.cos(s) * f, x = Math.sin(s) * f, k = Math.sin(s - u) * -d, b = Math.cos(s - u) * d, u && (c *= Al, R = Math.tan(u - c), R = Math.sqrt(1 + R * R), k *= R, b *= R, c && (R = Math.tan(c), R = Math.sqrt(1 + R * R), T *= R, x *= R)), T = ht(T), x = ht(x), k = ht(k), b = ht(b)) : (T = f, b = d, x = k = 0), (_ && !~(l + "").indexOf("px") || w && !~(a + "").indexOf("px")) && (_ = eo(p, "x", l, "px"), w = eo(p, "y", a, "px")), (m || h || y || g) && (_ = ht(_ + m - (m * T + h * k) + y), w = ht(w + h - (m * x + h * b) + g)), (i || o) && (R = p.getBBox(), _ = ht(_ + i / 100 * R.width), w = ht(w + o / 100 * R.height)), R = "matrix(" + T + "," + x + "," + k + "," + b + "," + _ + "," + w + ")", p.setAttribute("transform", R), v && (p.style[et] = R);
}, cP = function(e, n, r, i, o) {
  var l = 360, a = bt(o), s = parseFloat(o) * (a && ~o.indexOf("rad") ? ho : 1), u = s - i, c = i + u + "deg", f, d;
  return a && (f = o.split("_")[1], f === "short" && (u %= l, u !== u % (l / 2) && (u += u < 0 ? l : -l)), f === "cw" && u < 0 ? u = (u + l * C1) % l - ~~(u / l) * l : f === "ccw" && u > 0 && (u = (u - l * C1) % l - ~~(u / l) * l)), e._pt = d = new bn(e._pt, n, r, i, u, Xb), d.e = c, d.u = "deg", e._props.push(r), d;
}, O1 = function(e, n) {
  for (var r in n)
    e[r] = n[r];
  return e;
}, fP = function(e, n, r) {
  var i = O1({}, r._gsap), o = "perspective,force3D,transformOrigin,svgOrigin", l = r.style, a, s, u, c, f, d, p, m;
  i.svg ? (u = r.getAttribute("transform"), r.setAttribute("transform", ""), l[et] = n, a = zs(r, 1), Ns(r, et), r.setAttribute("transform", u)) : (u = getComputedStyle(r)[et], l[et] = n, a = zs(r, 1), l[et] = u);
  for (s in vi)
    u = i[s], c = a[s], u !== c && o.indexOf(s) < 0 && (p = Ht(u), m = Ht(c), f = p !== m ? eo(r, s, u, m) : parseFloat(u), d = parseFloat(c), e._pt = new bn(e._pt, a, s, f, d - f, ap), e._pt.u = m || 0, e._props.push(s));
  O1(a, i);
};
Tn("padding,margin,Width,Radius", function(t, e) {
  var n = "Top", r = "Right", i = "Bottom", o = "Left", l = (e < 3 ? [n, r, i, o] : [n + o, n + r, i + r, i + o]).map(function(a) {
    return e < 2 ? t + a : "border" + a + t;
  });
  Wc[e > 1 ? "border" + t : t] = function(a, s, u, c, f) {
    var d, p;
    if (arguments.length < 4)
      return d = l.map(function(m) {
        return ii(a, m, u);
      }), p = d.join(" "), p.split(d[0]).length === 5 ? d[0] : p;
    d = (c + "").split(" "), p = {}, l.forEach(function(m, h) {
      return p[m] = d[h] = d[h] || d[(h - 1) / 2 | 0];
    }), a.init(s, p, f);
  };
});
var $x = {
  name: "css",
  register: up,
  targetTest: function(e) {
    return e.style && e.nodeType;
  },
  init: function(e, n, r, i, o) {
    var l = this._props, a = e.style, s = r.vars.startAt, u, c, f, d, p, m, h, y, g, v, _, w, T, x, k, b;
    am || up(), this.styles = this.styles || Dx(e), b = this.styles.props, this.tween = r;
    for (h in n)
      if (h !== "autoRound" && (c = n[h], !(In[h] && xx(h, n, r, i, e, o)))) {
        if (p = typeof c, m = Wc[h], p === "function" && (c = c.call(r, i, e, o), p = typeof c), p === "string" && ~c.indexOf("random(") && (c = Ds(c)), m)
          m(this, e, h, c, r) && (k = 1);
        else if (h.substr(0, 2) === "--")
          u = (getComputedStyle(e).getPropertyValue(h) + "").trim(), c += "", Qi.lastIndex = 0, Qi.test(u) || (y = Ht(u), g = Ht(c)), g ? y !== g && (u = eo(e, h, u, g) + g) : y && (c += y), this.add(a, "setProperty", u, c, i, o, 0, 0, h), l.push(h), b.push(h, 0, a[h]);
        else if (p !== "undefined") {
          if (s && h in s ? (u = typeof s[h] == "function" ? s[h].call(r, i, e, o) : s[h], bt(u) && ~u.indexOf("random(") && (u = Ds(u)), Ht(u + "") || (u += Un.units[h] || Ht(ii(e, h)) || ""), (u + "").charAt(1) === "=" && (u = ii(e, h))) : u = ii(e, h), d = parseFloat(u), v = p === "string" && c.charAt(1) === "=" && c.substr(0, 2), v && (c = c.substr(2)), f = parseFloat(c), h in Br && (h === "autoAlpha" && (d === 1 && ii(e, "visibility") === "hidden" && f && (d = 0), b.push("visibility", 0, a.visibility), Ii(this, a, "visibility", d ? "inherit" : "hidden", f ? "inherit" : "hidden", !f)), h !== "scale" && h !== "transform" && (h = Br[h], ~h.indexOf(",") && (h = h.split(",")[0]))), _ = h in vi, _) {
            if (this.styles.save(h), w || (T = e._gsap, T.renderTransform && !n.parseTransform || zs(e, n.parseTransform), x = n.smoothOrigin !== !1 && T.smooth, w = this._pt = new bn(this._pt, a, et, 0, 1, T.renderTransform, T, 0, -1), w.dep = 1), h === "scale")
              this._pt = new bn(this._pt, T, "scaleY", T.scaleY, (v ? Ol(T.scaleY, v + f) : f) - T.scaleY || 0, ap), this._pt.u = 0, l.push("scaleY", h), h += "X";
            else if (h === "transformOrigin") {
              b.push(Pr, 0, a[Pr]), c = lP(c), T.svg ? cp(e, c, 0, x, 0, this) : (g = parseFloat(c.split(" ")[2]) || 0, g !== T.zOrigin && Ii(this, T, "zOrigin", T.zOrigin, g), Ii(this, a, h, Hc(u), Hc(c)));
              continue;
            } else if (h === "svgOrigin") {
              cp(e, c, 1, x, 0, this);
              continue;
            } else if (h in Ix) {
              cP(this, T, h, d, v ? Ol(d, v + c) : c);
              continue;
            } else if (h === "smoothOrigin") {
              Ii(this, T, "smooth", T.smooth, c);
              continue;
            } else if (h === "force3D") {
              T[h] = c;
              continue;
            } else if (h === "transform") {
              fP(this, c, e);
              continue;
            }
          } else
            h in a || (h = Ql(h) || h);
          if (_ || (f || f === 0) && (d || d === 0) && !Yb.test(c) && h in a)
            y = (u + "").substr((d + "").length), f || (f = 0), g = Ht(c) || (h in Un.units ? Un.units[h] : y), y !== g && (d = eo(e, h, u, g)), this._pt = new bn(this._pt, _ ? T : a, h, d, (v ? Ol(d, v + f) : f) - d, !_ && (g === "px" || h === "zIndex") && n.autoRound !== !1 ? Qb : ap), this._pt.u = g || 0, y !== g && g !== "%" && (this._pt.b = u, this._pt.r = Gb);
          else if (h in a)
            oP.call(this, e, h, u, v ? v + c : c);
          else if (h in e)
            this.add(e, h, u || e[h], v ? v + c : c, i, o);
          else if (h !== "parseTransform") {
            Z0(h, c);
            continue;
          }
          _ || (h in a ? b.push(h, 0, a[h]) : b.push(h, 1, u || e[h])), l.push(h);
        }
      }
    k && bx(this);
  },
  render: function(e, n) {
    if (n.tween._time || !sm())
      for (var r = n._pt; r; )
        r.r(e, r.d), r = r._next;
    else
      n.styles.revert();
  },
  get: ii,
  aliases: Br,
  getSetter: function(e, n, r) {
    var i = Br[n];
    return i && i.indexOf(",") < 0 && (n = i), n in vi && n !== Pr && (e._gsap.x || ii(e, "x")) ? r && E1 === r ? n === "scale" ? Jb : Zb : (E1 = r || {}) && (n === "scale" ? eP : tP) : e.style && !Q0(e.style[n]) ? qb : ~n.indexOf("-") ? Kb : om(e, n);
  },
  core: {
    _removeProperty: Ns,
    _getMatrix: cm
  }
};
Pn.utils.checkPrefix = Ql;
Pn.core.getStyleSaver = Dx;
(function(t, e, n, r) {
  var i = Tn(t + "," + e + "," + n, function(o) {
    vi[o] = 1;
  });
  Tn(e, function(o) {
    Un.units[o] = "deg", Ix[o] = 1;
  }), Br[i[13]] = t + "," + e, Tn(r, function(o) {
    var l = o.split(":");
    Br[l[1]] = i[l[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Tn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
  Un.units[t] = "px";
});
Pn.registerPlugin($x);
var yi = Pn.registerPlugin($x) || Pn;
yi.core.Tween;
function D1(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
  }
}
function dP(t, e, n) {
  return e && D1(t.prototype, e), n && D1(t, n), t;
}
/*!
 * Observer 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Lt, fp, jn, zi, ji, Ll, Fx, po, Ka, Ux, si, yr, Bx, Vx = function() {
  return Lt || typeof window < "u" && (Lt = window.gsap) && Lt.registerPlugin && Lt;
}, Wx = 1, _l = [], ye = [], Yr = [], Za = Date.now, dp = function(e, n) {
  return n;
}, hP = function() {
  var e = Ka.core, n = e.bridge || {}, r = e._scrollers, i = e._proxies;
  r.push.apply(r, ye), i.push.apply(i, Yr), ye = r, Yr = i, dp = function(l, a) {
    return n[l](a);
  };
}, qi = function(e, n) {
  return ~Yr.indexOf(e) && Yr[Yr.indexOf(e) + 1][n];
}, Ja = function(e) {
  return !!~Ux.indexOf(e);
}, Zt = function(e, n, r, i, o) {
  return e.addEventListener(n, r, {
    passive: !i,
    capture: !!o
  });
}, Kt = function(e, n, r, i) {
  return e.removeEventListener(n, r, !!i);
}, ku = "scrollLeft", Eu = "scrollTop", hp = function() {
  return si && si.isPressed || ye.cache++;
}, Yc = function(e, n) {
  var r = function i(o) {
    if (o || o === 0) {
      Wx && (jn.history.scrollRestoration = "manual");
      var l = si && si.isPressed;
      o = i.v = Math.round(o) || (si && si.iOS ? 1 : 0), e(o), i.cacheID = ye.cache, l && dp("ss", o);
    } else
      (n || ye.cache !== i.cacheID || dp("ref")) && (i.cacheID = ye.cache, i.v = e());
    return i.v + i.offset;
  };
  return r.offset = 0, e && r;
}, rn = {
  s: ku,
  p: "left",
  p2: "Left",
  os: "right",
  os2: "Right",
  d: "width",
  d2: "Width",
  a: "x",
  sc: Yc(function(t) {
    return arguments.length ? jn.scrollTo(t, xt.sc()) : jn.pageXOffset || zi[ku] || ji[ku] || Ll[ku] || 0;
  })
}, xt = {
  s: Eu,
  p: "top",
  p2: "Top",
  os: "bottom",
  os2: "Bottom",
  d: "height",
  d2: "Height",
  a: "y",
  op: rn,
  sc: Yc(function(t) {
    return arguments.length ? jn.scrollTo(rn.sc(), t) : jn.pageYOffset || zi[Eu] || ji[Eu] || Ll[Eu] || 0;
  })
}, mn = function(e, n) {
  return (n && n._ctx && n._ctx.selector || Lt.utils.toArray)(e)[0] || (typeof e == "string" && Lt.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null);
}, to = function(e, n) {
  var r = n.s, i = n.sc;
  Ja(e) && (e = zi.scrollingElement || ji);
  var o = ye.indexOf(e), l = i === xt.sc ? 1 : 2;
  !~o && (o = ye.push(e) - 1), ye[o + l] || Zt(e, "scroll", hp);
  var a = ye[o + l], s = a || (ye[o + l] = Yc(qi(e, r), !0) || (Ja(e) ? i : Yc(function(u) {
    return arguments.length ? e[r] = u : e[r];
  })));
  return s.target = e, a || (s.smooth = Lt.getProperty(e, "scrollBehavior") === "smooth"), s;
}, pp = function(e, n, r) {
  var i = e, o = e, l = Za(), a = l, s = n || 50, u = Math.max(500, s * 3), c = function(m, h) {
    var y = Za();
    h || y - l > s ? (o = i, i = m, a = l, l = y) : r ? i += m : i = o + (m - o) / (y - a) * (l - a);
  }, f = function() {
    o = i = r ? 0 : i, a = l = 0;
  }, d = function(m) {
    var h = a, y = o, g = Za();
    return (m || m === 0) && m !== i && c(m), l === a || g - a > u ? 0 : (i + (r ? y : -y)) / ((r ? g : l) - h) * 1e3;
  };
  return {
    update: c,
    reset: f,
    getVelocity: d
  };
}, ga = function(e, n) {
  return n && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e;
}, A1 = function(e) {
  var n = Math.max.apply(Math, e), r = Math.min.apply(Math, e);
  return Math.abs(n) >= Math.abs(r) ? n : r;
}, Hx = function() {
  Ka = Lt.core.globals().ScrollTrigger, Ka && Ka.core && hP();
}, Yx = function(e) {
  return Lt = e || Vx(), Lt && typeof document < "u" && document.body && (jn = window, zi = document, ji = zi.documentElement, Ll = zi.body, Ux = [jn, zi, ji, Ll], Lt.utils.clamp, Bx = Lt.core.context || function() {
  }, po = "onpointerenter" in Ll ? "pointer" : "mouse", Fx = _t.isTouch = jn.matchMedia && jn.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in jn || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, yr = _t.eventTypes = ("ontouchstart" in ji ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in ji ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
    return Wx = 0;
  }, 500), Hx(), fp = 1), fp;
};
rn.op = xt;
ye.cache = 0;
var _t = /* @__PURE__ */ function() {
  function t(n) {
    this.init(n);
  }
  var e = t.prototype;
  return e.init = function(r) {
    fp || Yx(Lt) || console.warn("Please gsap.registerPlugin(Observer)"), Ka || Hx();
    var i = r.tolerance, o = r.dragMinimum, l = r.type, a = r.target, s = r.lineHeight, u = r.debounce, c = r.preventDefault, f = r.onStop, d = r.onStopDelay, p = r.ignore, m = r.wheelSpeed, h = r.event, y = r.onDragStart, g = r.onDragEnd, v = r.onDrag, _ = r.onPress, w = r.onRelease, T = r.onRight, x = r.onLeft, k = r.onUp, b = r.onDown, R = r.onChangeX, M = r.onChangeY, B = r.onChange, I = r.onToggleX, te = r.onToggleY, z = r.onHover, Y = r.onHoverEnd, ne = r.onMove, V = r.ignoreCheck, A = r.isNormalizer, U = r.onGestureStart, C = r.onGestureEnd, re = r.onWheel, oe = r.onEnable, We = r.onDisable, ue = r.onClick, de = r.scrollSpeed, ge = r.capture, he = r.allowClicks, rt = r.lockAxis, je = r.onLockAxis;
    this.target = a = mn(a) || ji, this.vars = r, p && (p = Lt.utils.toArray(p)), i = i || 1e-9, o = o || 0, m = m || 1, de = de || 1, l = l || "wheel,touch,pointer", u = u !== !1, s || (s = parseFloat(jn.getComputedStyle(Ll).lineHeight) || 22);
    var fn, Ae, jt, xe, it, ot, Qt, D = this, qt = 0, pr = 0, qr = to(a, rn), $e = to(a, xt), Or = qr(), mr = $e(), dn = ~l.indexOf("touch") && !~l.indexOf("pointer") && yr[0] === "pointerdown", qe = Ja(a), He = a.ownerDocument || zi, $t = [0, 0, 0], Rn = [0, 0, 0], Ft = 0, Yn = function() {
      return Ft = Za();
    }, Mn = function(W, X) {
      return (D.event = W) && p && ~p.indexOf(W.target) || X && dn && W.pointerType !== "touch" || V && V(W, X);
    }, Pt = function() {
      D._vx.reset(), D._vy.reset(), Ae.pause(), f && f(D);
    }, Kr = function() {
      var W = D.deltaX = A1($t), X = D.deltaY = A1(Rn), Q = Math.abs(W) >= i, N = Math.abs(X) >= i;
      B && (Q || N) && B(D, W, X, $t, Rn), Q && (T && D.deltaX > 0 && T(D), x && D.deltaX < 0 && x(D), R && R(D), I && D.deltaX < 0 != qt < 0 && I(D), qt = D.deltaX, $t[0] = $t[1] = $t[2] = 0), N && (b && D.deltaY > 0 && b(D), k && D.deltaY < 0 && k(D), M && M(D), te && D.deltaY < 0 != pr < 0 && te(D), pr = D.deltaY, Rn[0] = Rn[1] = Rn[2] = 0), (xe || jt) && (ne && ne(D), jt && (v(D), jt = !1), xe = !1), ot && !(ot = !1) && je && je(D), it && (re(D), it = !1), fn = 0;
    }, Zr = function(W, X, Q) {
      $t[Q] += W, Rn[Q] += X, D._vx.update(W), D._vy.update(X), u ? fn || (fn = requestAnimationFrame(Kr)) : Kr();
    }, gr = function(W, X) {
      rt && !Qt && (D.axis = Qt = Math.abs(W) > Math.abs(X) ? "x" : "y", ot = !0), Qt !== "y" && ($t[2] += W, D._vx.update(W, !0)), Qt !== "x" && (Rn[2] += X, D._vy.update(X, !0)), u ? fn || (fn = requestAnimationFrame(Kr)) : Kr();
    }, Dr = function(W) {
      if (!Mn(W, 1)) {
        W = ga(W, c);
        var X = W.clientX, Q = W.clientY, N = X - D.x, q = Q - D.y, K = D.isDragging;
        D.x = X, D.y = Q, (K || Math.abs(D.startX - X) >= o || Math.abs(D.startY - Q) >= o) && (v && (jt = !0), K || (D.isDragging = !0), gr(N, q), K || y && y(D));
      }
    }, Xn = D.onPress = function(j) {
      Mn(j, 1) || j && j.button || (D.axis = Qt = null, Ae.pause(), D.isPressed = !0, j = ga(j), qt = pr = 0, D.startX = D.x = j.clientX, D.startY = D.y = j.clientY, D._vx.reset(), D._vy.reset(), Zt(A ? a : He, yr[1], Dr, c, !0), D.deltaX = D.deltaY = 0, _ && _(D));
    }, Ar = D.onRelease = function(j) {
      if (!Mn(j, 1)) {
        Kt(A ? a : He, yr[1], Dr, !0);
        var W = !isNaN(D.y - D.startY), X = D.isDragging && (Math.abs(D.x - D.startX) > 3 || Math.abs(D.y - D.startY) > 3), Q = ga(j);
        !X && W && (D._vx.reset(), D._vy.reset(), c && he && Lt.delayedCall(0.08, function() {
          if (Za() - Ft > 300 && !j.defaultPrevented) {
            if (j.target.click)
              j.target.click();
            else if (He.createEvent) {
              var N = He.createEvent("MouseEvents");
              N.initMouseEvent("click", !0, !0, jn, 1, Q.screenX, Q.screenY, Q.clientX, Q.clientY, !1, !1, !1, !1, 0, null), j.target.dispatchEvent(N);
            }
          }
        })), D.isDragging = D.isGesturing = D.isPressed = !1, f && !A && Ae.restart(!0), g && X && g(D), w && w(D, X);
      }
    }, _e = function(W) {
      return W.touches && W.touches.length > 1 && (D.isGesturing = !0) && U(W, D.isDragging);
    }, Jr = function() {
      return (D.isGesturing = !1) || C(D);
    }, hn = function(W) {
      if (!Mn(W)) {
        var X = qr(), Q = $e();
        Zr((X - Or) * de, (Q - mr) * de, 1), Or = X, mr = Q, f && Ae.restart(!0);
      }
    }, On = function(W) {
      if (!Mn(W)) {
        W = ga(W, c), re && (it = !0);
        var X = (W.deltaMode === 1 ? s : W.deltaMode === 2 ? jn.innerHeight : 1) * m;
        Zr(W.deltaX * X, W.deltaY * X, 0), f && !A && Ae.restart(!0);
      }
    }, P = function(W) {
      if (!Mn(W)) {
        var X = W.clientX, Q = W.clientY, N = X - D.x, q = Q - D.y;
        D.x = X, D.y = Q, xe = !0, (N || q) && gr(N, q);
      }
    }, O = function(W) {
      D.event = W, z(D);
    }, L = function(W) {
      D.event = W, Y(D);
    }, H = function(W) {
      return Mn(W) || ga(W, c) && ue(D);
    };
    Ae = D._dc = Lt.delayedCall(d || 0.25, Pt).pause(), D.deltaX = D.deltaY = 0, D._vx = pp(0, 50, !0), D._vy = pp(0, 50, !0), D.scrollX = qr, D.scrollY = $e, D.isDragging = D.isGesturing = D.isPressed = !1, Bx(this), D.enable = function(j) {
      return D.isEnabled || (Zt(qe ? He : a, "scroll", hp), l.indexOf("scroll") >= 0 && Zt(qe ? He : a, "scroll", hn, c, ge), l.indexOf("wheel") >= 0 && Zt(a, "wheel", On, c, ge), (l.indexOf("touch") >= 0 && Fx || l.indexOf("pointer") >= 0) && (Zt(a, yr[0], Xn, c, ge), Zt(He, yr[2], Ar), Zt(He, yr[3], Ar), he && Zt(a, "click", Yn, !1, !0), ue && Zt(a, "click", H), U && Zt(He, "gesturestart", _e), C && Zt(He, "gestureend", Jr), z && Zt(a, po + "enter", O), Y && Zt(a, po + "leave", L), ne && Zt(a, po + "move", P)), D.isEnabled = !0, j && j.type && Xn(j), oe && oe(D)), D;
    }, D.disable = function() {
      D.isEnabled && (_l.filter(function(j) {
        return j !== D && Ja(j.target);
      }).length || Kt(qe ? He : a, "scroll", hp), D.isPressed && (D._vx.reset(), D._vy.reset(), Kt(A ? a : He, yr[1], Dr, !0)), Kt(qe ? He : a, "scroll", hn, ge), Kt(a, "wheel", On, ge), Kt(a, yr[0], Xn, ge), Kt(He, yr[2], Ar), Kt(He, yr[3], Ar), Kt(a, "click", Yn, !0), Kt(a, "click", H), Kt(He, "gesturestart", _e), Kt(He, "gestureend", Jr), Kt(a, po + "enter", O), Kt(a, po + "leave", L), Kt(a, po + "move", P), D.isEnabled = D.isPressed = D.isDragging = !1, We && We(D));
    }, D.kill = D.revert = function() {
      D.disable();
      var j = _l.indexOf(D);
      j >= 0 && _l.splice(j, 1), si === D && (si = 0);
    }, _l.push(D), A && Ja(a) && (si = D), D.enable(h);
  }, dP(t, [{
    key: "velocityX",
    get: function() {
      return this._vx.getVelocity();
    }
  }, {
    key: "velocityY",
    get: function() {
      return this._vy.getVelocity();
    }
  }]), t;
}();
_t.version = "3.12.2";
_t.create = function(t) {
  return new _t(t);
};
_t.register = Yx;
_t.getAll = function() {
  return _l.slice();
};
_t.getById = function(t) {
  return _l.filter(function(e) {
    return e.vars.id === t;
  })[0];
};
Vx() && Lt.registerPlugin(_t);
/*!
 * ScrollTrigger 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var ee, nl, ke, Ke, Er, Be, Xx, Xc, Gc, wl, ec, Cu, Vt, If, mp, en, L1, N1, rl, Gx, Od, Qx, Dn, qx, Kx, Zx, Ei, gp, fm, Nl, dm, Dd, Tu = 1, nn = Date.now, Ad = nn(), ur = 0, Oa = 0, I1 = function(e, n, r) {
  var i = Nn(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
  return r["_" + n + "Clamp"] = i, i ? e.substr(6, e.length - 7) : e;
}, z1 = function(e, n) {
  return n && (!Nn(e) || e.substr(0, 6) !== "clamp(") ? "clamp(" + e + ")" : e;
}, pP = function t() {
  return Oa && requestAnimationFrame(t);
}, j1 = function() {
  return If = 1;
}, $1 = function() {
  return If = 0;
}, jr = function(e) {
  return e;
}, Da = function(e) {
  return Math.round(e * 1e5) / 1e5 || 0;
}, Jx = function() {
  return typeof window < "u";
}, e2 = function() {
  return ee || Jx() && (ee = window.gsap) && ee.registerPlugin && ee;
}, Vo = function(e) {
  return !!~Xx.indexOf(e);
}, t2 = function(e) {
  return (e === "Height" ? dm : ke["inner" + e]) || Er["client" + e] || Be["client" + e];
}, n2 = function(e) {
  return qi(e, "getBoundingClientRect") || (Vo(e) ? function() {
    return lc.width = ke.innerWidth, lc.height = dm, lc;
  } : function() {
    return oi(e);
  });
}, mP = function(e, n, r) {
  var i = r.d, o = r.d2, l = r.a;
  return (l = qi(e, "getBoundingClientRect")) ? function() {
    return l()[i];
  } : function() {
    return (n ? t2(o) : e["client" + o]) || 0;
  };
}, gP = function(e, n) {
  return !n || ~Yr.indexOf(e) ? n2(e) : function() {
    return lc;
  };
}, ui = function(e, n) {
  var r = n.s, i = n.d2, o = n.d, l = n.a;
  return Math.max(0, (r = "scroll" + i) && (l = qi(e, r)) ? l() - n2(e)()[o] : Vo(e) ? (Er[r] || Be[r]) - t2(i) : e[r] - e["offset" + i]);
}, bu = function(e, n) {
  for (var r = 0; r < rl.length; r += 3)
    (!n || ~n.indexOf(rl[r + 1])) && e(rl[r], rl[r + 1], rl[r + 2]);
}, Nn = function(e) {
  return typeof e == "string";
}, on = function(e) {
  return typeof e == "function";
}, tc = function(e) {
  return typeof e == "number";
}, mo = function(e) {
  return typeof e == "object";
}, va = function(e, n, r) {
  return e && e.progress(n ? 0 : 1) && r && e.pause();
}, Ld = function(e, n) {
  if (e.enabled) {
    var r = n(e);
    r && r.totalTime && (e.callbackAnimation = r);
  }
}, el = Math.abs, r2 = "left", i2 = "top", hm = "right", pm = "bottom", Oo = "width", Do = "height", es = "Right", ts = "Left", ns = "Top", rs = "Bottom", gt = "padding", tr = "margin", ql = "Width", mm = "Height", Ot = "px", nr = function(e) {
  return ke.getComputedStyle(e);
}, vP = function(e) {
  var n = nr(e).position;
  e.style.position = n === "absolute" || n === "fixed" ? n : "relative";
}, F1 = function(e, n) {
  for (var r in n)
    r in e || (e[r] = n[r]);
  return e;
}, oi = function(e, n) {
  var r = n && nr(e)[mp] !== "matrix(1, 0, 0, 1, 0, 0)" && ee.to(e, {
    x: 0,
    y: 0,
    xPercent: 0,
    yPercent: 0,
    rotation: 0,
    rotationX: 0,
    rotationY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0
  }).progress(1), i = e.getBoundingClientRect();
  return r && r.progress(0).kill(), i;
}, vp = function(e, n) {
  var r = n.d2;
  return e["offset" + r] || e["client" + r] || 0;
}, o2 = function(e) {
  var n = [], r = e.labels, i = e.duration(), o;
  for (o in r)
    n.push(r[o] / i);
  return n;
}, yP = function(e) {
  return function(n) {
    return ee.utils.snap(o2(e), n);
  };
}, gm = function(e) {
  var n = ee.utils.snap(e), r = Array.isArray(e) && e.slice(0).sort(function(i, o) {
    return i - o;
  });
  return r ? function(i, o, l) {
    l === void 0 && (l = 1e-3);
    var a;
    if (!o)
      return n(i);
    if (o > 0) {
      for (i -= l, a = 0; a < r.length; a++)
        if (r[a] >= i)
          return r[a];
      return r[a - 1];
    } else
      for (a = r.length, i += l; a--; )
        if (r[a] <= i)
          return r[a];
    return r[0];
  } : function(i, o, l) {
    l === void 0 && (l = 1e-3);
    var a = n(i);
    return !o || Math.abs(a - i) < l || a - i < 0 == o < 0 ? a : n(o < 0 ? i - e : i + e);
  };
}, _P = function(e) {
  return function(n, r) {
    return gm(o2(e))(n, r.direction);
  };
}, Pu = function(e, n, r, i) {
  return r.split(",").forEach(function(o) {
    return e(n, o, i);
  });
}, Et = function(e, n, r, i, o) {
  return e.addEventListener(n, r, {
    passive: !i,
    capture: !!o
  });
}, kt = function(e, n, r, i) {
  return e.removeEventListener(n, r, !!i);
}, Ru = function(e, n, r) {
  r = r && r.wheelHandler, r && (e(n, "wheel", r), e(n, "touchmove", r));
}, U1 = {
  startColor: "green",
  endColor: "red",
  indent: 0,
  fontSize: "16px",
  fontWeight: "normal"
}, Mu = {
  toggleActions: "play",
  anticipatePin: 0
}, Qc = {
  top: 0,
  left: 0,
  center: 0.5,
  bottom: 1,
  right: 1
}, nc = function(e, n) {
  if (Nn(e)) {
    var r = e.indexOf("="), i = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
    ~r && (e.indexOf("%") > r && (i *= n / 100), e = e.substr(0, r - 1)), e = i + (e in Qc ? Qc[e] * n : ~e.indexOf("%") ? parseFloat(e) * n / 100 : parseFloat(e) || 0);
  }
  return e;
}, Ou = function(e, n, r, i, o, l, a, s) {
  var u = o.startColor, c = o.endColor, f = o.fontSize, d = o.indent, p = o.fontWeight, m = Ke.createElement("div"), h = Vo(r) || qi(r, "pinType") === "fixed", y = e.indexOf("scroller") !== -1, g = h ? Be : r, v = e.indexOf("start") !== -1, _ = v ? u : c, w = "border-color:" + _ + ";font-size:" + f + ";color:" + _ + ";font-weight:" + p + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
  return w += "position:" + ((y || s) && h ? "fixed;" : "absolute;"), (y || s || !h) && (w += (i === xt ? hm : pm) + ":" + (l + parseFloat(d)) + "px;"), a && (w += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), m._isStart = v, m.setAttribute("class", "gsap-marker-" + e + (n ? " marker-" + n : "")), m.style.cssText = w, m.innerText = n || n === 0 ? e + "-" + n : e, g.children[0] ? g.insertBefore(m, g.children[0]) : g.appendChild(m), m._offset = m["offset" + i.op.d2], rc(m, 0, i, v), m;
}, rc = function(e, n, r, i) {
  var o = {
    display: "block"
  }, l = r[i ? "os2" : "p2"], a = r[i ? "p2" : "os2"];
  e._isFlipped = i, o[r.a + "Percent"] = i ? -100 : 0, o[r.a] = i ? "1px" : 0, o["border" + l + ql] = 1, o["border" + a + ql] = 0, o[r.p] = n + "px", ee.set(e, o);
}, pe = [], yp = {}, js, B1 = function() {
  return nn() - ur > 34 && (js || (js = requestAnimationFrame(fi)));
}, tl = function() {
  (!Dn || !Dn.isPressed || Dn.startX > Be.clientWidth) && (ye.cache++, Dn ? js || (js = requestAnimationFrame(fi)) : fi(), ur || Ho("scrollStart"), ur = nn());
}, Nd = function() {
  Zx = ke.innerWidth, Kx = ke.innerHeight;
}, Aa = function() {
  ye.cache++, !Vt && !Qx && !Ke.fullscreenElement && !Ke.webkitFullscreenElement && (!qx || Zx !== ke.innerWidth || Math.abs(ke.innerHeight - Kx) > ke.innerHeight * 0.25) && Xc.restart(!0);
}, Wo = {}, wP = [], l2 = function t() {
  return kt(me, "scrollEnd", t) || So(!0);
}, Ho = function(e) {
  return Wo[e] && Wo[e].map(function(n) {
    return n();
  }) || wP;
}, An = [], a2 = function(e) {
  for (var n = 0; n < An.length; n += 5)
    (!e || An[n + 4] && An[n + 4].query === e) && (An[n].style.cssText = An[n + 1], An[n].getBBox && An[n].setAttribute("transform", An[n + 2] || ""), An[n + 3].uncache = 1);
}, vm = function(e, n) {
  var r;
  for (en = 0; en < pe.length; en++)
    r = pe[en], r && (!n || r._ctx === n) && (e ? r.kill(1) : r.revert(!0, !0));
  n && a2(n), n || Ho("revert");
}, s2 = function(e, n) {
  ye.cache++, (n || !tn) && ye.forEach(function(r) {
    return on(r) && r.cacheID++ && (r.rec = 0);
  }), Nn(e) && (ke.history.scrollRestoration = fm = e);
}, tn, Ao = 0, V1, xP = function() {
  if (V1 !== Ao) {
    var e = V1 = Ao;
    requestAnimationFrame(function() {
      return e === Ao && So(!0);
    });
  }
}, u2 = function() {
  Be.appendChild(Nl), dm = Nl.offsetHeight || ke.innerHeight, Be.removeChild(Nl);
}, So = function(e, n) {
  if (ur && !e) {
    Et(me, "scrollEnd", l2);
    return;
  }
  u2(), tn = me.isRefreshing = !0, ye.forEach(function(i) {
    return on(i) && ++i.cacheID && (i.rec = i());
  });
  var r = Ho("refreshInit");
  Gx && me.sort(), n || vm(), ye.forEach(function(i) {
    on(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"), i(0));
  }), pe.slice(0).forEach(function(i) {
    return i.refresh();
  }), pe.forEach(function(i, o) {
    if (i._subPinOffset && i.pin) {
      var l = i.vars.horizontal ? "offsetWidth" : "offsetHeight", a = i.pin[l];
      i.revert(!0, 1), i.adjustPinSpacing(i.pin[l] - a), i.refresh();
    }
  }), pe.forEach(function(i) {
    var o = ui(i.scroller, i._dir);
    (i.vars.end === "max" || i._endClamp && i.end > o) && i.setPositions(i.start, Math.max(i.start + 1, o), !0);
  }), r.forEach(function(i) {
    return i && i.render && i.render(-1);
  }), ye.forEach(function(i) {
    on(i) && (i.smooth && requestAnimationFrame(function() {
      return i.target.style.scrollBehavior = "smooth";
    }), i.rec && i(i.rec));
  }), s2(fm, 1), Xc.pause(), Ao++, tn = 2, fi(2), pe.forEach(function(i) {
    return on(i.vars.onRefresh) && i.vars.onRefresh(i);
  }), tn = me.isRefreshing = !1, Ho("refresh");
}, _p = 0, ic = 1, is, fi = function(e) {
  if (!tn || e === 2) {
    me.isUpdating = !0, is && is.update(0);
    var n = pe.length, r = nn(), i = r - Ad >= 50, o = n && pe[0].scroll();
    if (ic = _p > o ? -1 : 1, tn || (_p = o), i && (ur && !If && r - ur > 200 && (ur = 0, Ho("scrollEnd")), ec = Ad, Ad = r), ic < 0) {
      for (en = n; en-- > 0; )
        pe[en] && pe[en].update(0, i);
      ic = 1;
    } else
      for (en = 0; en < n; en++)
        pe[en] && pe[en].update(0, i);
    me.isUpdating = !1;
  }
  js = 0;
}, wp = [r2, i2, pm, hm, tr + rs, tr + es, tr + ns, tr + ts, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], oc = wp.concat([Oo, Do, "boxSizing", "max" + ql, "max" + mm, "position", tr, gt, gt + ns, gt + es, gt + rs, gt + ts]), SP = function(e, n, r) {
  Il(r);
  var i = e._gsap;
  if (i.spacerIsNative)
    Il(i.spacerState);
  else if (e._gsap.swappedIn) {
    var o = n.parentNode;
    o && (o.insertBefore(e, n), o.removeChild(n));
  }
  e._gsap.swappedIn = !1;
}, Id = function(e, n, r, i) {
  if (!e._gsap.swappedIn) {
    for (var o = wp.length, l = n.style, a = e.style, s; o--; )
      s = wp[o], l[s] = r[s];
    l.position = r.position === "absolute" ? "absolute" : "relative", r.display === "inline" && (l.display = "inline-block"), a[pm] = a[hm] = "auto", l.flexBasis = r.flexBasis || "auto", l.overflow = "visible", l.boxSizing = "border-box", l[Oo] = vp(e, rn) + Ot, l[Do] = vp(e, xt) + Ot, l[gt] = a[tr] = a[i2] = a[r2] = "0", Il(i), a[Oo] = a["max" + ql] = r[Oo], a[Do] = a["max" + mm] = r[Do], a[gt] = r[gt], e.parentNode !== n && (e.parentNode.insertBefore(n, e), n.appendChild(e)), e._gsap.swappedIn = !0;
  }
}, kP = /([A-Z])/g, Il = function(e) {
  if (e) {
    var n = e.t.style, r = e.length, i = 0, o, l;
    for ((e.t._gsap || ee.core.getCache(e.t)).uncache = 1; i < r; i += 2)
      l = e[i + 1], o = e[i], l ? n[o] = l : n[o] && n.removeProperty(o.replace(kP, "-$1").toLowerCase());
  }
}, Du = function(e) {
  for (var n = oc.length, r = e.style, i = [], o = 0; o < n; o++)
    i.push(oc[o], r[oc[o]]);
  return i.t = e, i;
}, EP = function(e, n, r) {
  for (var i = [], o = e.length, l = r ? 8 : 0, a; l < o; l += 2)
    a = e[l], i.push(a, a in n ? n[a] : e[l + 1]);
  return i.t = e.t, i;
}, lc = {
  left: 0,
  top: 0
}, W1 = function(e, n, r, i, o, l, a, s, u, c, f, d, p, m) {
  on(e) && (e = e(s)), Nn(e) && e.substr(0, 3) === "max" && (e = d + (e.charAt(4) === "=" ? nc("0" + e.substr(3), r) : 0));
  var h = p ? p.time() : 0, y, g, v;
  if (p && p.seek(0), isNaN(e) || (e = +e), tc(e))
    p && (e = ee.utils.mapRange(p.scrollTrigger.start, p.scrollTrigger.end, 0, d, e)), a && rc(a, r, i, !0);
  else {
    on(n) && (n = n(s));
    var _ = (e || "0").split(" "), w, T, x, k;
    v = mn(n, s) || Be, w = oi(v) || {}, (!w || !w.left && !w.top) && nr(v).display === "none" && (k = v.style.display, v.style.display = "block", w = oi(v), k ? v.style.display = k : v.style.removeProperty("display")), T = nc(_[0], w[i.d]), x = nc(_[1] || "0", r), e = w[i.p] - u[i.p] - c + T + o - x, a && rc(a, x, i, r - x < 20 || a._isStart && x > 20), r -= r - x;
  }
  if (m && (s[m] = e || -1e-3, e < 0 && (e = 0)), l) {
    var b = e + r, R = l._isStart;
    y = "scroll" + i.d2, rc(l, b, i, R && b > 20 || !R && (f ? Math.max(Be[y], Er[y]) : l.parentNode[y]) <= b + 1), f && (u = oi(a), f && (l.style[i.op.p] = u[i.op.p] - i.op.m - l._offset + Ot));
  }
  return p && v && (y = oi(v), p.seek(d), g = oi(v), p._caScrollDist = y[i.p] - g[i.p], e = e / p._caScrollDist * d), p && p.seek(h), p ? e : Math.round(e);
}, CP = /(webkit|moz|length|cssText|inset)/i, H1 = function(e, n, r, i) {
  if (e.parentNode !== n) {
    var o = e.style, l, a;
    if (n === Be) {
      e._stOrig = o.cssText, a = nr(e);
      for (l in a)
        !+l && !CP.test(l) && a[l] && typeof o[l] == "string" && l !== "0" && (o[l] = a[l]);
      o.top = r, o.left = i;
    } else
      o.cssText = e._stOrig;
    ee.core.getCache(e).uncache = 1, n.appendChild(e);
  }
}, c2 = function(e, n, r) {
  var i = n, o = i;
  return function(l) {
    var a = Math.round(e());
    return a !== i && a !== o && Math.abs(a - i) > 3 && Math.abs(a - o) > 3 && (l = a, r && r()), o = i, i = l, l;
  };
}, Au = function(e, n, r) {
  var i = {};
  i[n.p] = "+=" + r, ee.set(e, i);
}, Y1 = function(e, n) {
  var r = to(e, n), i = "_scroll" + n.p2, o = function l(a, s, u, c, f) {
    var d = l.tween, p = s.onComplete, m = {};
    u = u || r();
    var h = c2(r, u, function() {
      d.kill(), l.tween = 0;
    });
    return f = c && f || 0, c = c || a - u, d && d.kill(), s[i] = a, s.modifiers = m, m[i] = function() {
      return h(u + c * d.ratio + f * d.ratio * d.ratio);
    }, s.onUpdate = function() {
      ye.cache++, fi();
    }, s.onComplete = function() {
      l.tween = 0, p && p.call(d);
    }, d = l.tween = ee.to(e, s), d;
  };
  return e[i] = r, r.wheelHandler = function() {
    return o.tween && o.tween.kill() && (o.tween = 0);
  }, Et(e, "wheel", r.wheelHandler), me.isTouch && Et(e, "touchmove", r.wheelHandler), o;
}, me = /* @__PURE__ */ function() {
  function t(n, r) {
    nl || t.register(ee) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), gp(this), this.init(n, r);
  }
  var e = t.prototype;
  return e.init = function(r, i) {
    if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !Oa) {
      this.update = this.refresh = this.kill = jr;
      return;
    }
    r = F1(Nn(r) || tc(r) || r.nodeType ? {
      trigger: r
    } : r, Mu);
    var o = r, l = o.onUpdate, a = o.toggleClass, s = o.id, u = o.onToggle, c = o.onRefresh, f = o.scrub, d = o.trigger, p = o.pin, m = o.pinSpacing, h = o.invalidateOnRefresh, y = o.anticipatePin, g = o.onScrubComplete, v = o.onSnapComplete, _ = o.once, w = o.snap, T = o.pinReparent, x = o.pinSpacer, k = o.containerAnimation, b = o.fastScrollEnd, R = o.preventOverlaps, M = r.horizontal || r.containerAnimation && r.horizontal !== !1 ? rn : xt, B = !f && f !== 0, I = mn(r.scroller || ke), te = ee.core.getCache(I), z = Vo(I), Y = ("pinType" in r ? r.pinType : qi(I, "pinType") || z && "fixed") === "fixed", ne = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack], V = B && r.toggleActions.split(" "), A = "markers" in r ? r.markers : Mu.markers, U = z ? 0 : parseFloat(nr(I)["border" + M.p2 + ql]) || 0, C = this, re = r.onRefreshInit && function() {
      return r.onRefreshInit(C);
    }, oe = mP(I, z, M), We = gP(I, z), ue = 0, de = 0, ge = 0, he = to(I, M), rt, je, fn, Ae, jt, xe, it, ot, Qt, D, qt, pr, qr, $e, Or, mr, dn, qe, He, $t, Rn, Ft, Yn, Mn, Pt, Kr, Zr, gr, Dr, Xn, Ar, _e, Jr, hn, On, P, O, L, H;
    if (C._startClamp = C._endClamp = !1, C._dir = M, y *= 45, C.scroller = I, C.scroll = k ? k.time.bind(k) : he, Ae = he(), C.vars = r, i = i || r.animation, "refreshPriority" in r && (Gx = 1, r.refreshPriority === -9999 && (is = C)), te.tweenScroll = te.tweenScroll || {
      top: Y1(I, xt),
      left: Y1(I, rn)
    }, C.tweenTo = rt = te.tweenScroll[M.p], C.scrubDuration = function(N) {
      Jr = tc(N) && N, Jr ? _e ? _e.duration(N) : _e = ee.to(i, {
        ease: "expo",
        totalProgress: "+=0",
        duration: Jr,
        paused: !0,
        onComplete: function() {
          return g && g(C);
        }
      }) : (_e && _e.progress(1).kill(), _e = 0);
    }, i && (i.vars.lazy = !1, i._initted && !C.isReverted || i.vars.immediateRender !== !1 && r.immediateRender !== !1 && i.duration() && i.render(0, !0, !0), C.animation = i.pause(), i.scrollTrigger = C, C.scrubDuration(f), Xn = 0, s || (s = i.vars.id)), w && ((!mo(w) || w.push) && (w = {
      snapTo: w
    }), "scrollBehavior" in Be.style && ee.set(z ? [Be, Er] : I, {
      scrollBehavior: "auto"
    }), ye.forEach(function(N) {
      return on(N) && N.target === (z ? Ke.scrollingElement || Er : I) && (N.smooth = !1);
    }), fn = on(w.snapTo) ? w.snapTo : w.snapTo === "labels" ? yP(i) : w.snapTo === "labelsDirectional" ? _P(i) : w.directional !== !1 ? function(N, q) {
      return gm(w.snapTo)(N, nn() - de < 500 ? 0 : q.direction);
    } : ee.utils.snap(w.snapTo), hn = w.duration || {
      min: 0.1,
      max: 2
    }, hn = mo(hn) ? wl(hn.min, hn.max) : wl(hn, hn), On = ee.delayedCall(w.delay || Jr / 2 || 0.1, function() {
      var N = he(), q = nn() - de < 500, K = rt.tween;
      if ((q || Math.abs(C.getVelocity()) < 10) && !K && !If && ue !== N) {
        var G = (N - xe) / $e, le = i && !B ? i.totalProgress() : G, ie = q ? 0 : (le - Ar) / (nn() - ec) * 1e3 || 0, Ce = ee.utils.clamp(-G, 1 - G, el(ie / 2) * ie / 0.185), Te = G + (w.inertia === !1 ? 0 : Ce), Ye = wl(0, 1, fn(Te, C)), Le = Math.round(xe + Ye * $e), be = w, mt = be.onStart, Me = be.onInterrupt, Rt = be.onComplete;
        if (N <= it && N >= xe && Le !== N) {
          if (K && !K._initted && K.data <= el(Le - N))
            return;
          w.inertia === !1 && (Ce = Ye - G), rt(Le, {
            duration: hn(el(Math.max(el(Te - le), el(Ye - le)) * 0.185 / ie / 0.05 || 0)),
            ease: w.ease || "power3",
            data: el(Le - N),
            // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
            onInterrupt: function() {
              return On.restart(!0) && Me && Me(C);
            },
            onComplete: function() {
              C.update(), ue = he(), Xn = Ar = i && !B ? i.totalProgress() : C.progress, v && v(C), Rt && Rt(C);
            }
          }, N, Ce * $e, Le - N - Ce * $e), mt && mt(C, rt.tween);
        }
      } else
        C.isActive && ue !== N && On.restart(!0);
    }).pause()), s && (yp[s] = C), d = C.trigger = mn(d || p !== !0 && p), H = d && d._gsap && d._gsap.stRevert, H && (H = H(C)), p = p === !0 ? d : mn(p), Nn(a) && (a = {
      targets: d,
      className: a
    }), p && (m === !1 || m === tr || (m = !m && p.parentNode && p.parentNode.style && nr(p.parentNode).display === "flex" ? !1 : gt), C.pin = p, je = ee.core.getCache(p), je.spacer ? Or = je.pinState : (x && (x = mn(x), x && !x.nodeType && (x = x.current || x.nativeElement), je.spacerIsNative = !!x, x && (je.spacerState = Du(x))), je.spacer = qe = x || Ke.createElement("div"), qe.classList.add("pin-spacer"), s && qe.classList.add("pin-spacer-" + s), je.pinState = Or = Du(p)), r.force3D !== !1 && ee.set(p, {
      force3D: !0
    }), C.spacer = qe = je.spacer, Dr = nr(p), Mn = Dr[m + M.os2], $t = ee.getProperty(p), Rn = ee.quickSetter(p, M.a, Ot), Id(p, qe, Dr), dn = Du(p)), A) {
      pr = mo(A) ? F1(A, U1) : U1, D = Ou("scroller-start", s, I, M, pr, 0), qt = Ou("scroller-end", s, I, M, pr, 0, D), He = D["offset" + M.op.d2];
      var j = mn(qi(I, "content") || I);
      ot = this.markerStart = Ou("start", s, j, M, pr, He, 0, k), Qt = this.markerEnd = Ou("end", s, j, M, pr, He, 0, k), k && (L = ee.quickSetter([ot, Qt], M.a, Ot)), !Y && !(Yr.length && qi(I, "fixedMarkers") === !0) && (vP(z ? Be : I), ee.set([D, qt], {
        force3D: !0
      }), Kr = ee.quickSetter(D, M.a, Ot), gr = ee.quickSetter(qt, M.a, Ot));
    }
    if (k) {
      var W = k.vars.onUpdate, X = k.vars.onUpdateParams;
      k.eventCallback("onUpdate", function() {
        C.update(0, 0, 1), W && W.apply(k, X || []);
      });
    }
    if (C.previous = function() {
      return pe[pe.indexOf(C) - 1];
    }, C.next = function() {
      return pe[pe.indexOf(C) + 1];
    }, C.revert = function(N, q) {
      if (!q)
        return C.kill(!0);
      var K = N !== !1 || !C.enabled, G = Vt;
      K !== C.isReverted && (K && (P = Math.max(he(), C.scroll.rec || 0), ge = C.progress, O = i && i.progress()), ot && [ot, Qt, D, qt].forEach(function(le) {
        return le.style.display = K ? "none" : "block";
      }), K && (Vt = C, C.update(K)), p && (!T || !C.isActive) && (K ? SP(p, qe, Or) : Id(p, qe, nr(p), Pt)), K || C.update(K), Vt = G, C.isReverted = K);
    }, C.refresh = function(N, q, K, G) {
      if (!((Vt || !C.enabled) && !q)) {
        if (p && N && ur) {
          Et(t, "scrollEnd", l2);
          return;
        }
        !tn && re && re(C), Vt = C, rt.tween && !K && (rt.tween.kill(), rt.tween = 0), _e && _e.pause(), h && i && i.revert({
          kill: !1
        }).invalidate(), C.isReverted || C.revert(!0, !0), C._subPinOffset = !1;
        var le = oe(), ie = We(), Ce = k ? k.duration() : ui(I, M), Te = $e <= 0.01, Ye = 0, Le = G || 0, be = mo(K) ? K.end : r.end, mt = r.endTrigger || d, Me = mo(K) ? K.start : r.start || (r.start === 0 || !d ? 0 : p ? "0 0" : "0 100%"), Rt = C.pinnedContainer = r.pinnedContainer && mn(r.pinnedContainer, C), pn = d && Math.max(0, pe.indexOf(C)) || 0, Mt = pn, Xe, ft, Se, Oe, Ne, Ge, Gn, $f, xm, ta, Lr, na, Zs;
        for (A && mo(K) && (na = ee.getProperty(D, M.p), Zs = ee.getProperty(qt, M.p)); Mt--; )
          Ge = pe[Mt], Ge.end || Ge.refresh(0, 1) || (Vt = C), Gn = Ge.pin, Gn && (Gn === d || Gn === p || Gn === Rt) && !Ge.isReverted && (ta || (ta = []), ta.unshift(Ge), Ge.revert(!0, !0)), Ge !== pe[Mt] && (pn--, Mt--);
        for (on(Me) && (Me = Me(C)), Me = I1(Me, "start", C), xe = W1(Me, d, le, M, he(), ot, D, C, ie, U, Y, Ce, k, C._startClamp && "_startClamp") || (p ? -1e-3 : 0), on(be) && (be = be(C)), Nn(be) && !be.indexOf("+=") && (~be.indexOf(" ") ? be = (Nn(Me) ? Me.split(" ")[0] : "") + be : (Ye = nc(be.substr(2), le), be = Nn(Me) ? Me : (k ? ee.utils.mapRange(0, k.duration(), k.scrollTrigger.start, k.scrollTrigger.end, xe) : xe) + Ye, mt = d)), be = I1(be, "end", C), it = Math.max(xe, W1(be || (mt ? "100% 0" : Ce), mt, le, M, he() + Ye, Qt, qt, C, ie, U, Y, Ce, k, C._endClamp && "_endClamp")) || -1e-3, Ye = 0, Mt = pn; Mt--; )
          Ge = pe[Mt], Gn = Ge.pin, Gn && Ge.start - Ge._pinPush <= xe && !k && Ge.end > 0 && (Xe = Ge.end - (C._startClamp ? Math.max(0, Ge.start) : Ge.start), (Gn === d && Ge.start - Ge._pinPush < xe || Gn === Rt) && isNaN(Me) && (Ye += Xe * (1 - Ge.progress)), Gn === p && (Le += Xe));
        if (xe += Ye, it += Ye, C._startClamp && (C._startClamp += Ye), C._endClamp && !tn && (C._endClamp = it || -1e-3, it = Math.min(it, ui(I, M))), $e = it - xe || (xe -= 0.01) && 1e-3, Te && (ge = ee.utils.clamp(0, 1, ee.utils.normalize(xe, it, P))), C._pinPush = Le, ot && Ye && (Xe = {}, Xe[M.a] = "+=" + Ye, Rt && (Xe[M.p] = "-=" + he()), ee.set([ot, Qt], Xe)), p)
          Xe = nr(p), Oe = M === xt, Se = he(), Ft = parseFloat($t(M.a)) + Le, !Ce && it > 1 && (Lr = (z ? Ke.scrollingElement || Er : I).style, Lr = {
            style: Lr,
            value: Lr["overflow" + M.a.toUpperCase()]
          }, z && nr(Be)["overflow" + M.a.toUpperCase()] !== "scroll" && (Lr.style["overflow" + M.a.toUpperCase()] = "scroll")), Id(p, qe, Xe), dn = Du(p), ft = oi(p, !0), $f = Y && to(I, Oe ? rn : xt)(), m && (Pt = [m + M.os2, $e + Le + Ot], Pt.t = qe, Mt = m === gt ? vp(p, M) + $e + Le : 0, Mt && Pt.push(M.d, Mt + Ot), Il(Pt), Rt && pe.forEach(function(ra) {
            ra.pin === Rt && ra.vars.pinSpacing !== !1 && (ra._subPinOffset = !0);
          }), Y && he(P)), Y && (Ne = {
            top: ft.top + (Oe ? Se - xe : $f) + Ot,
            left: ft.left + (Oe ? $f : Se - xe) + Ot,
            boxSizing: "border-box",
            position: "fixed"
          }, Ne[Oo] = Ne["max" + ql] = Math.ceil(ft.width) + Ot, Ne[Do] = Ne["max" + mm] = Math.ceil(ft.height) + Ot, Ne[tr] = Ne[tr + ns] = Ne[tr + es] = Ne[tr + rs] = Ne[tr + ts] = "0", Ne[gt] = Xe[gt], Ne[gt + ns] = Xe[gt + ns], Ne[gt + es] = Xe[gt + es], Ne[gt + rs] = Xe[gt + rs], Ne[gt + ts] = Xe[gt + ts], mr = EP(Or, Ne, T), tn && he(0)), i ? (xm = i._initted, Od(1), i.render(i.duration(), !0, !0), Yn = $t(M.a) - Ft + $e + Le, Zr = Math.abs($e - Yn) > 1, Y && Zr && mr.splice(mr.length - 2, 2), i.render(0, !0, !0), xm || i.invalidate(!0), i.parent || i.totalTime(i.totalTime()), Od(0)) : Yn = $e, Lr && (Lr.value ? Lr.style["overflow" + M.a.toUpperCase()] = Lr.value : Lr.style.removeProperty("overflow-" + M.a));
        else if (d && he() && !k)
          for (ft = d.parentNode; ft && ft !== Be; )
            ft._pinOffset && (xe -= ft._pinOffset, it -= ft._pinOffset), ft = ft.parentNode;
        ta && ta.forEach(function(ra) {
          return ra.revert(!1, !0);
        }), C.start = xe, C.end = it, Ae = jt = tn ? P : he(), !k && !tn && (Ae < P && he(P), C.scroll.rec = 0), C.revert(!1, !0), de = nn(), On && (ue = -1, On.restart(!0)), Vt = 0, i && B && (i._initted || O) && i.progress() !== O && i.progress(O || 0, !0).render(i.time(), !0, !0), (Te || ge !== C.progress || k) && (i && !B && i.totalProgress(k && xe < -1e-3 && !ge ? ee.utils.normalize(xe, it, 0) : ge, !0), C.progress = Te || (Ae - xe) / $e === ge ? 0 : ge), p && m && (qe._pinOffset = Math.round(C.progress * Yn)), _e && _e.invalidate(), isNaN(na) || (na -= ee.getProperty(D, M.p), Zs -= ee.getProperty(qt, M.p), Au(D, M, na), Au(ot, M, na - (G || 0)), Au(qt, M, Zs), Au(Qt, M, Zs - (G || 0))), Te && !tn && C.update(), c && !tn && !qr && (qr = !0, c(C), qr = !1);
      }
    }, C.getVelocity = function() {
      return (he() - jt) / (nn() - ec) * 1e3 || 0;
    }, C.endAnimation = function() {
      va(C.callbackAnimation), i && (_e ? _e.progress(1) : i.paused() ? B || va(i, C.direction < 0, 1) : va(i, i.reversed()));
    }, C.labelToScroll = function(N) {
      return i && i.labels && (xe || C.refresh() || xe) + i.labels[N] / i.duration() * $e || 0;
    }, C.getTrailing = function(N) {
      var q = pe.indexOf(C), K = C.direction > 0 ? pe.slice(0, q).reverse() : pe.slice(q + 1);
      return (Nn(N) ? K.filter(function(G) {
        return G.vars.preventOverlaps === N;
      }) : K).filter(function(G) {
        return C.direction > 0 ? G.end <= xe : G.start >= it;
      });
    }, C.update = function(N, q, K) {
      if (!(k && !K && !N)) {
        var G = tn === !0 ? P : C.scroll(), le = N ? 0 : (G - xe) / $e, ie = le < 0 ? 0 : le > 1 ? 1 : le || 0, Ce = C.progress, Te, Ye, Le, be, mt, Me, Rt, pn;
        if (q && (jt = Ae, Ae = k ? he() : G, w && (Ar = Xn, Xn = i && !B ? i.totalProgress() : ie)), y && !ie && p && !Vt && !Tu && ur && xe < G + (G - jt) / (nn() - ec) * y && (ie = 1e-4), ie !== Ce && C.enabled) {
          if (Te = C.isActive = !!ie && ie < 1, Ye = !!Ce && Ce < 1, Me = Te !== Ye, mt = Me || !!ie != !!Ce, C.direction = ie > Ce ? 1 : -1, C.progress = ie, mt && !Vt && (Le = ie && !Ce ? 0 : ie === 1 ? 1 : Ce === 1 ? 2 : 3, B && (be = !Me && V[Le + 1] !== "none" && V[Le + 1] || V[Le], pn = i && (be === "complete" || be === "reset" || be in i))), R && (Me || pn) && (pn || f || !i) && (on(R) ? R(C) : C.getTrailing(R).forEach(function(Se) {
            return Se.endAnimation();
          })), B || (_e && !Vt && !Tu ? (_e._dp._time - _e._start !== _e._time && _e.render(_e._dp._time - _e._start), _e.resetTo ? _e.resetTo("totalProgress", ie, i._tTime / i._tDur) : (_e.vars.totalProgress = ie, _e.invalidate().restart())) : i && i.totalProgress(ie, !!(Vt && (de || N)))), p) {
            if (N && m && (qe.style[m + M.os2] = Mn), !Y)
              Rn(Da(Ft + Yn * ie));
            else if (mt) {
              if (Rt = !N && ie > Ce && it + 1 > G && G + 1 >= ui(I, M), T)
                if (!N && (Te || Rt)) {
                  var Mt = oi(p, !0), Xe = G - xe;
                  H1(p, Be, Mt.top + (M === xt ? Xe : 0) + Ot, Mt.left + (M === xt ? 0 : Xe) + Ot);
                } else
                  H1(p, qe);
              Il(Te || Rt ? mr : dn), Zr && ie < 1 && Te || Rn(Ft + (ie === 1 && !Rt ? Yn : 0));
            }
          }
          w && !rt.tween && !Vt && !Tu && On.restart(!0), a && (Me || _ && ie && (ie < 1 || !Dd)) && Gc(a.targets).forEach(function(Se) {
            return Se.classList[Te || _ ? "add" : "remove"](a.className);
          }), l && !B && !N && l(C), mt && !Vt ? (B && (pn && (be === "complete" ? i.pause().totalProgress(1) : be === "reset" ? i.restart(!0).pause() : be === "restart" ? i.restart(!0) : i[be]()), l && l(C)), (Me || !Dd) && (u && Me && Ld(C, u), ne[Le] && Ld(C, ne[Le]), _ && (ie === 1 ? C.kill(!1, 1) : ne[Le] = 0), Me || (Le = ie === 1 ? 1 : 3, ne[Le] && Ld(C, ne[Le]))), b && !Te && Math.abs(C.getVelocity()) > (tc(b) ? b : 2500) && (va(C.callbackAnimation), _e ? _e.progress(1) : va(i, be === "reverse" ? 1 : !ie, 1))) : B && l && !Vt && l(C);
        }
        if (gr) {
          var ft = k ? G / k.duration() * (k._caScrollDist || 0) : G;
          Kr(ft + (D._isFlipped ? 1 : 0)), gr(ft);
        }
        L && L(-G / k.duration() * (k._caScrollDist || 0));
      }
    }, C.enable = function(N, q) {
      C.enabled || (C.enabled = !0, Et(I, "resize", Aa), z || Et(I, "scroll", tl), re && Et(t, "refreshInit", re), N !== !1 && (C.progress = ge = 0, Ae = jt = ue = he()), q !== !1 && C.refresh());
    }, C.getTween = function(N) {
      return N && rt ? rt.tween : _e;
    }, C.setPositions = function(N, q, K, G) {
      if (k) {
        var le = k.scrollTrigger, ie = k.duration(), Ce = le.end - le.start;
        N = le.start + Ce * N / ie, q = le.start + Ce * q / ie;
      }
      C.refresh(!1, !1, {
        start: z1(N, K && !!C._startClamp),
        end: z1(q, K && !!C._endClamp)
      }, G), C.update();
    }, C.adjustPinSpacing = function(N) {
      if (Pt && N) {
        var q = Pt.indexOf(M.d) + 1;
        Pt[q] = parseFloat(Pt[q]) + N + Ot, Pt[1] = parseFloat(Pt[1]) + N + Ot, Il(Pt);
      }
    }, C.disable = function(N, q) {
      if (C.enabled && (N !== !1 && C.revert(!0, !0), C.enabled = C.isActive = !1, q || _e && _e.pause(), P = 0, je && (je.uncache = 1), re && kt(t, "refreshInit", re), On && (On.pause(), rt.tween && rt.tween.kill() && (rt.tween = 0)), !z)) {
        for (var K = pe.length; K--; )
          if (pe[K].scroller === I && pe[K] !== C)
            return;
        kt(I, "resize", Aa), z || kt(I, "scroll", tl);
      }
    }, C.kill = function(N, q) {
      C.disable(N, q), _e && !q && _e.kill(), s && delete yp[s];
      var K = pe.indexOf(C);
      K >= 0 && pe.splice(K, 1), K === en && ic > 0 && en--, K = 0, pe.forEach(function(G) {
        return G.scroller === C.scroller && (K = 1);
      }), K || tn || (C.scroll.rec = 0), i && (i.scrollTrigger = null, N && i.revert({
        kill: !1
      }), q || i.kill()), ot && [ot, Qt, D, qt].forEach(function(G) {
        return G.parentNode && G.parentNode.removeChild(G);
      }), is === C && (is = 0), p && (je && (je.uncache = 1), K = 0, pe.forEach(function(G) {
        return G.pin === p && K++;
      }), K || (je.spacer = 0)), r.onKill && r.onKill(C);
    }, pe.push(C), C.enable(!1, !1), H && H(C), i && i.add && !$e) {
      var Q = C.update;
      C.update = function() {
        C.update = Q, xe || it || C.refresh();
      }, ee.delayedCall(0.01, C.update), $e = 0.01, xe = it = 0;
    } else
      C.refresh();
    p && xP();
  }, t.register = function(r) {
    return nl || (ee = r || e2(), Jx() && window.document && t.enable(), nl = Oa), nl;
  }, t.defaults = function(r) {
    if (r)
      for (var i in r)
        Mu[i] = r[i];
    return Mu;
  }, t.disable = function(r, i) {
    Oa = 0, pe.forEach(function(l) {
      return l[i ? "kill" : "disable"](r);
    }), kt(ke, "wheel", tl), kt(Ke, "scroll", tl), clearInterval(Cu), kt(Ke, "touchcancel", jr), kt(Be, "touchstart", jr), Pu(kt, Ke, "pointerdown,touchstart,mousedown", j1), Pu(kt, Ke, "pointerup,touchend,mouseup", $1), Xc.kill(), bu(kt);
    for (var o = 0; o < ye.length; o += 3)
      Ru(kt, ye[o], ye[o + 1]), Ru(kt, ye[o], ye[o + 2]);
  }, t.enable = function() {
    if (ke = window, Ke = document, Er = Ke.documentElement, Be = Ke.body, ee && (Gc = ee.utils.toArray, wl = ee.utils.clamp, gp = ee.core.context || jr, Od = ee.core.suppressOverwrites || jr, fm = ke.history.scrollRestoration || "auto", _p = ke.pageYOffset, ee.core.globals("ScrollTrigger", t), Be)) {
      Oa = 1, Nl = document.createElement("div"), Nl.style.height = "100vh", Nl.style.position = "absolute", u2(), pP(), _t.register(ee), t.isTouch = _t.isTouch, Ei = _t.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Et(ke, "wheel", tl), Xx = [ke, Ke, Er, Be], ee.matchMedia ? (t.matchMedia = function(s) {
        var u = ee.matchMedia(), c;
        for (c in s)
          u.add(c, s[c]);
        return u;
      }, ee.addEventListener("matchMediaInit", function() {
        return vm();
      }), ee.addEventListener("matchMediaRevert", function() {
        return a2();
      }), ee.addEventListener("matchMedia", function() {
        So(0, 1), Ho("matchMedia");
      }), ee.matchMedia("(orientation: portrait)", function() {
        return Nd(), Nd;
      })) : console.warn("Requires GSAP 3.11.0 or later"), Nd(), Et(Ke, "scroll", tl);
      var r = Be.style, i = r.borderTopStyle, o = ee.core.Animation.prototype, l, a;
      for (o.revert || Object.defineProperty(o, "revert", {
        value: function() {
          return this.time(-0.01, !0);
        }
      }), r.borderTopStyle = "solid", l = oi(Be), xt.m = Math.round(l.top + xt.sc()) || 0, rn.m = Math.round(l.left + rn.sc()) || 0, i ? r.borderTopStyle = i : r.removeProperty("border-top-style"), Cu = setInterval(B1, 250), ee.delayedCall(0.5, function() {
        return Tu = 0;
      }), Et(Ke, "touchcancel", jr), Et(Be, "touchstart", jr), Pu(Et, Ke, "pointerdown,touchstart,mousedown", j1), Pu(Et, Ke, "pointerup,touchend,mouseup", $1), mp = ee.utils.checkPrefix("transform"), oc.push(mp), nl = nn(), Xc = ee.delayedCall(0.2, So).pause(), rl = [Ke, "visibilitychange", function() {
        var s = ke.innerWidth, u = ke.innerHeight;
        Ke.hidden ? (L1 = s, N1 = u) : (L1 !== s || N1 !== u) && Aa();
      }, Ke, "DOMContentLoaded", So, ke, "load", So, ke, "resize", Aa], bu(Et), pe.forEach(function(s) {
        return s.enable(0, 1);
      }), a = 0; a < ye.length; a += 3)
        Ru(kt, ye[a], ye[a + 1]), Ru(kt, ye[a], ye[a + 2]);
    }
  }, t.config = function(r) {
    "limitCallbacks" in r && (Dd = !!r.limitCallbacks);
    var i = r.syncInterval;
    i && clearInterval(Cu) || (Cu = i) && setInterval(B1, i), "ignoreMobileResize" in r && (qx = t.isTouch === 1 && r.ignoreMobileResize), "autoRefreshEvents" in r && (bu(kt) || bu(Et, r.autoRefreshEvents || "none"), Qx = (r.autoRefreshEvents + "").indexOf("resize") === -1);
  }, t.scrollerProxy = function(r, i) {
    var o = mn(r), l = ye.indexOf(o), a = Vo(o);
    ~l && ye.splice(l, a ? 6 : 2), i && (a ? Yr.unshift(ke, i, Be, i, Er, i) : Yr.unshift(o, i));
  }, t.clearMatchMedia = function(r) {
    pe.forEach(function(i) {
      return i._ctx && i._ctx.query === r && i._ctx.kill(!0, !0);
    });
  }, t.isInViewport = function(r, i, o) {
    var l = (Nn(r) ? mn(r) : r).getBoundingClientRect(), a = l[o ? Oo : Do] * i || 0;
    return o ? l.right - a > 0 && l.left + a < ke.innerWidth : l.bottom - a > 0 && l.top + a < ke.innerHeight;
  }, t.positionInViewport = function(r, i, o) {
    Nn(r) && (r = mn(r));
    var l = r.getBoundingClientRect(), a = l[o ? Oo : Do], s = i == null ? a / 2 : i in Qc ? Qc[i] * a : ~i.indexOf("%") ? parseFloat(i) * a / 100 : parseFloat(i) || 0;
    return o ? (l.left + s) / ke.innerWidth : (l.top + s) / ke.innerHeight;
  }, t.killAll = function(r) {
    if (pe.slice(0).forEach(function(o) {
      return o.vars.id !== "ScrollSmoother" && o.kill();
    }), r !== !0) {
      var i = Wo.killAll || [];
      Wo = {}, i.forEach(function(o) {
        return o();
      });
    }
  }, t;
}();
me.version = "3.12.2";
me.saveStyles = function(t) {
  return t ? Gc(t).forEach(function(e) {
    if (e && e.style) {
      var n = An.indexOf(e);
      n >= 0 && An.splice(n, 5), An.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), ee.core.getCache(e), gp());
    }
  }) : An;
};
me.revert = function(t, e) {
  return vm(!t, e);
};
me.create = function(t, e) {
  return new me(t, e);
};
me.refresh = function(t) {
  return t ? Aa() : (nl || me.register()) && So(!0);
};
me.update = function(t) {
  return ++ye.cache && fi(t === !0 ? 2 : 0);
};
me.clearScrollMemory = s2;
me.maxScroll = function(t, e) {
  return ui(t, e ? rn : xt);
};
me.getScrollFunc = function(t, e) {
  return to(mn(t), e ? rn : xt);
};
me.getById = function(t) {
  return yp[t];
};
me.getAll = function() {
  return pe.filter(function(t) {
    return t.vars.id !== "ScrollSmoother";
  });
};
me.isScrolling = function() {
  return !!ur;
};
me.snapDirectional = gm;
me.addEventListener = function(t, e) {
  var n = Wo[t] || (Wo[t] = []);
  ~n.indexOf(e) || n.push(e);
};
me.removeEventListener = function(t, e) {
  var n = Wo[t], r = n && n.indexOf(e);
  r >= 0 && n.splice(r, 1);
};
me.batch = function(t, e) {
  var n = [], r = {}, i = e.interval || 0.016, o = e.batchMax || 1e9, l = function(u, c) {
    var f = [], d = [], p = ee.delayedCall(i, function() {
      c(f, d), f = [], d = [];
    }).pause();
    return function(m) {
      f.length || p.restart(!0), f.push(m.trigger), d.push(m), o <= f.length && p.progress(1);
    };
  }, a;
  for (a in e)
    r[a] = a.substr(0, 2) === "on" && on(e[a]) && a !== "onRefreshInit" ? l(a, e[a]) : e[a];
  return on(o) && (o = o(), Et(me, "refresh", function() {
    return o = e.batchMax();
  })), Gc(t).forEach(function(s) {
    var u = {};
    for (a in r)
      u[a] = r[a];
    u.trigger = s, n.push(me.create(u));
  }), n;
};
var X1 = function(e, n, r, i) {
  return n > i ? e(i) : n < 0 && e(0), r > i ? (i - n) / (r - n) : r < 0 ? n / (n - r) : 1;
}, zd = function t(e, n) {
  n === !0 ? e.style.removeProperty("touch-action") : e.style.touchAction = n === !0 ? "auto" : n ? "pan-" + n + (_t.isTouch ? " pinch-zoom" : "") : "none", e === Er && t(Be, n);
}, Lu = {
  auto: 1,
  scroll: 1
}, TP = function(e) {
  var n = e.event, r = e.target, i = e.axis, o = (n.changedTouches ? n.changedTouches[0] : n).target, l = o._gsap || ee.core.getCache(o), a = nn(), s;
  if (!l._isScrollT || a - l._isScrollT > 2e3) {
    for (; o && o !== Be && (o.scrollHeight <= o.clientHeight && o.scrollWidth <= o.clientWidth || !(Lu[(s = nr(o)).overflowY] || Lu[s.overflowX])); )
      o = o.parentNode;
    l._isScroll = o && o !== r && !Vo(o) && (Lu[(s = nr(o)).overflowY] || Lu[s.overflowX]), l._isScrollT = a;
  }
  (l._isScroll || i === "x") && (n.stopPropagation(), n._gsapAllow = !0);
}, f2 = function(e, n, r, i) {
  return _t.create({
    target: e,
    capture: !0,
    debounce: !1,
    lockAxis: !0,
    type: n,
    onWheel: i = i && TP,
    onPress: i,
    onDrag: i,
    onScroll: i,
    onEnable: function() {
      return r && Et(Ke, _t.eventTypes[0], Q1, !1, !0);
    },
    onDisable: function() {
      return kt(Ke, _t.eventTypes[0], Q1, !0);
    }
  });
}, bP = /(input|label|select|textarea)/i, G1, Q1 = function(e) {
  var n = bP.test(e.target.tagName);
  (n || G1) && (e._gsapAllow = !0, G1 = n);
}, PP = function(e) {
  mo(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
  var n = e, r = n.normalizeScrollX, i = n.momentum, o = n.allowNestedScroll, l = n.onRelease, a, s, u = mn(e.target) || Er, c = ee.core.globals().ScrollSmoother, f = c && c.get(), d = Ei && (e.content && mn(e.content) || f && e.content !== !1 && !f.smooth() && f.content()), p = to(u, xt), m = to(u, rn), h = 1, y = (_t.isTouch && ke.visualViewport ? ke.visualViewport.scale * ke.visualViewport.width : ke.outerWidth) / ke.innerWidth, g = 0, v = on(i) ? function() {
    return i(a);
  } : function() {
    return i || 2.8;
  }, _, w, T = f2(u, e.type, !0, o), x = function() {
    return w = !1;
  }, k = jr, b = jr, R = function() {
    s = ui(u, xt), b = wl(Ei ? 1 : 0, s), r && (k = wl(0, ui(u, rn))), _ = Ao;
  }, M = function() {
    d._gsap.y = Da(parseFloat(d._gsap.y) + p.offset) + "px", d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(d._gsap.y) + ", 0, 1)", p.offset = p.cacheID = 0;
  }, B = function() {
    if (w) {
      requestAnimationFrame(x);
      var A = Da(a.deltaY / 2), U = b(p.v - A);
      if (d && U !== p.v + p.offset) {
        p.offset = U - p.v;
        var C = Da((parseFloat(d && d._gsap.y) || 0) - p.offset);
        d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + C + ", 0, 1)", d._gsap.y = C + "px", p.cacheID = ye.cache, fi();
      }
      return !0;
    }
    p.offset && M(), w = !0;
  }, I, te, z, Y, ne = function() {
    R(), I.isActive() && I.vars.scrollY > s && (p() > s ? I.progress(1) && p(s) : I.resetTo("scrollY", s));
  };
  return d && ee.set(d, {
    y: "+=0"
  }), e.ignoreCheck = function(V) {
    return Ei && V.type === "touchmove" && B() || h > 1.05 && V.type !== "touchstart" || a.isGesturing || V.touches && V.touches.length > 1;
  }, e.onPress = function() {
    w = !1;
    var V = h;
    h = Da((ke.visualViewport && ke.visualViewport.scale || 1) / y), I.pause(), V !== h && zd(u, h > 1.01 ? !0 : r ? !1 : "x"), te = m(), z = p(), R(), _ = Ao;
  }, e.onRelease = e.onGestureStart = function(V, A) {
    if (p.offset && M(), !A)
      Y.restart(!0);
    else {
      ye.cache++;
      var U = v(), C, re;
      r && (C = m(), re = C + U * 0.05 * -V.velocityX / 0.227, U *= X1(m, C, re, ui(u, rn)), I.vars.scrollX = k(re)), C = p(), re = C + U * 0.05 * -V.velocityY / 0.227, U *= X1(p, C, re, ui(u, xt)), I.vars.scrollY = b(re), I.invalidate().duration(U).play(0.01), (Ei && I.vars.scrollY >= s || C >= s - 1) && ee.to({}, {
        onUpdate: ne,
        duration: U
      });
    }
    l && l(V);
  }, e.onWheel = function() {
    I._ts && I.pause(), nn() - g > 1e3 && (_ = 0, g = nn());
  }, e.onChange = function(V, A, U, C, re) {
    if (Ao !== _ && R(), A && r && m(k(C[2] === A ? te + (V.startX - V.x) : m() + A - C[1])), U) {
      p.offset && M();
      var oe = re[2] === U, We = oe ? z + V.startY - V.y : p() + U - re[1], ue = b(We);
      oe && We !== ue && (z += ue - We), p(ue);
    }
    (U || A) && fi();
  }, e.onEnable = function() {
    zd(u, r ? !1 : "x"), me.addEventListener("refresh", ne), Et(ke, "resize", ne), p.smooth && (p.target.style.scrollBehavior = "auto", p.smooth = m.smooth = !1), T.enable();
  }, e.onDisable = function() {
    zd(u, !0), kt(ke, "resize", ne), me.removeEventListener("refresh", ne), T.kill();
  }, e.lockAxis = e.lockAxis !== !1, a = new _t(e), a.iOS = Ei, Ei && !p() && p(1), Ei && ee.ticker.add(jr), Y = a._dc, I = ee.to(a, {
    ease: "power4",
    paused: !0,
    scrollX: r ? "+=0.1" : "+=0",
    scrollY: "+=0.1",
    modifiers: {
      scrollY: c2(p, p(), function() {
        return I.pause();
      })
    },
    onUpdate: fi,
    onComplete: Y.vars.onComplete
  }), a;
};
me.sort = function(t) {
  return pe.sort(t || function(e, n) {
    return (e.vars.refreshPriority || 0) * -1e6 + e.start - (n.start + (n.vars.refreshPriority || 0) * -1e6);
  });
};
me.observe = function(t) {
  return new _t(t);
};
me.normalizeScroll = function(t) {
  if (typeof t > "u")
    return Dn;
  if (t === !0 && Dn)
    return Dn.enable();
  if (t === !1)
    return Dn && Dn.kill();
  var e = t instanceof _t ? t : PP(t);
  return Dn && Dn.target === e.target && Dn.kill(), Vo(e.target) && (Dn = e), e;
};
me.core = {
  // smaller file size way to leverage in ScrollSmoother and Observer
  _getVelocityProp: pp,
  _inputObserver: f2,
  _scrollers: ye,
  _proxies: Yr,
  bridge: {
    // when normalizeScroll sets the scroll position (ss = setScroll)
    ss: function() {
      ur || Ho("scrollStart"), ur = nn();
    },
    // a way to get the _refreshing value in Observer
    ref: function() {
      return Vt;
    }
  }
};
e2() && ee.registerPlugin(me);
yi.registerPlugin(me);
const d2 = (t) => {
  const e = t.hasOwnProperty("fadestate") ? t.fadestate : S.useState(!1);
  var n = Array.from(t.children).map((r, i, o) => {
    var l = 800, a = t.hasOwnProperty("basedelay") ? t.basedelay : 100;
    S.useEffect(() => {
      t.hasOwnProperty("fadestate") || e[1](!0);
    }, []);
    const s = se(() => ({
      from: { y: 0 },
      config: {
        duration: l / o.length
      }
      //,loop:true
    }));
    return S.useEffect(() => {
      e[0] ? s[1]({ y: 100, delay: i * l / o.length + a }) : s[1]({ y: 0 });
    }, [e[0]]), /* @__PURE__ */ E.jsx(
      fe.div,
      {
        style: { opacity: s[0].y.to({ range: [0, 40, 70, 100], output: [0, 0.4, 0.7, 1] }), display: "inline-block" },
        children: r
      }
    );
  });
  return /* @__PURE__ */ E.jsx(
    "div",
    {
      style: { display: "inline" },
      children: n
    }
  );
}, Nu = (t) => {
  const e = {
    userSelect: "none",
    display: "inline-block",
    textAlign: "center",
    verticalAlign: "bottom",
    lineHeight: "3em",
    color: "white",
    fontSize: "1.7em",
    height: "3em",
    width: "10em",
    fontWeight: 100,
    zIndex: -5,
    position: "relative",
    pointerEvents: "none"
  }, n = {
    fontFamily: "'DotGothic16'",
    width: "10em",
    height: "3em",
    textAlign: "center",
    verticalAlign: "bottom",
    lineHeight: "3em",
    position: "absolute",
    pointerEvents: "auto"
  }, r = S.useRef(null), i = S.useState(!1), o = se({
    color: i[0] ? "black" : "white"
  });
  se({
    backgroundColor: i[0] ? "rgba(1,1,1,0)" : "black"
  });
  var l = null;
  const a = () => {
    clearTimeout(l), i[1](!0);
  }, s = () => {
    clearTimeout(l), l = window.setTimeout(() => {
      i[1](!1);
    }, 200);
  };
  S.useEffect(() => {
    r.current.addEventListener("selectstart", (c) => {
      c.preventDefault();
    }), screen.availWidth < 500 || window.innerWidth < 500 ? (r.current.addEventListener("touchstart", () => {
      a();
    }), r.current.addEventListener("touchend", () => {
      s();
    })) : (r.current.addEventListener("click", () => {
      location.href = t.link;
    }), r.current.addEventListener("mouseenter", () => {
      a();
    }), r.current.addEventListener("mouseleave", () => {
      s();
    }));
  }, []);
  const u = se({
    x: i[0] ? "10em" : "0em",
    duration: 1
  });
  return /* @__PURE__ */ E.jsxs(
    fe.div,
    {
      className: "menu",
      ref: r,
      style: {
        ...e,
        backgroundColor: "black",
        overflow: "hidden",
        boxShadow: "0px 1px 2px 2px rgba(255,255,255,1)"
      },
      children: [
        /* @__PURE__ */ E.jsx(fe.div, { style: { backgroundColor: "rgba(0,0,0,0)", ...o, ...n, zIndex: 8 }, children: /* @__PURE__ */ E.jsx(d2, { children: t.children }) }),
        /* @__PURE__ */ E.jsx(fe.div, { style: { ...u, backgroundColor: "black", ...n, zIndex: 7 } }),
        /* @__PURE__ */ E.jsx(fe.div, { style: { ...u, backgroundColor: "white", ...n, left: "-10em", zIndex: 7 } })
      ]
    }
  );
}, h2 = (t) => {
  t.phonestate;
  const e = S.useState(!1), [n, r] = S.useState(!1), { burgx: i, ...o } = se({
    burgx: n ? "30em" : "0em"
  }), [l, a] = S.useState([window.innerWidth, window.innerHeight]), s = {
    position: "fixed",
    width: `${l[0]}px`,
    top: 0,
    left: 0,
    height: "100%"
    //,pointerEvents:"none"
  }, u = se({
    lighting: n ? 1 : 0
  }), c = [
    { strurl: "サイトオープン", url: "/" },
    { strurl: "サイトオープン", url: "/" }
  ];
  return S.useEffect(() => {
    screen.availWidth < 500 || window.innerHeight < 500 || (r(!0), e[1](!0));
  }, []), /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
    /* @__PURE__ */ E.jsxs("div", { className: "navi", style: {
      position: "fixed",
      width: `${l[0]}px`,
      height: "3em",
      backgroundColor: "rgba(240,240,240,1)",
      zIndex: 1502
    }, children: [
      /* @__PURE__ */ E.jsx(RP, { height: "3em", data: c }),
      /* @__PURE__ */ E.jsx("div", { style: { position: "absolute", top: "0px", right: "0px", backgroundColor: "rgba(240,240,240,1)", margin: "0px", textAlign: "center", display: "inline-block", height: "100%", verticalAlign: "top" }, children: /* @__PURE__ */ E.jsx(MP, { height: 3, setburg: r }) })
    ] }),
    /* @__PURE__ */ E.jsx(fe.div, { className: "colormass", style: { pointerEvents: "none", zIndex: 500, opacity: u.lighting, backgroundColor: "rgba(1,1,1,.4)", ...s, display: e[0] ? "none" : "block" } }),
    /* @__PURE__ */ E.jsx(fe.div, { className: "base2", style: { pointerEvents: "none", width: "100%", left: "0px", top: "3em", position: "fixed", margin: "0px", padding: "0px", zIndex: 1501, height: i, overflow: "hidden" }, children: /* @__PURE__ */ E.jsxs("div", { style: { zIndex: 501, margin: "0px", display: "inline-block", verticalAlign: "top", height: "100%", overflow: "hidden", position: "relative", pointerEvents: "none" }, children: [
      /* @__PURE__ */ E.jsx(Nu, { height: 3, link: "/", children: "ご案内" }),
      /* @__PURE__ */ E.jsx(Nu, { height: 3, link: "/", children: "活動紹介" }),
      /* @__PURE__ */ E.jsx(Nu, { height: 3, link: "/irai", children: "依頼報告" }),
      /* @__PURE__ */ E.jsx(Nu, { height: 3, link: "/", children: "スペシャルサンクス" })
    ] }) })
  ] });
}, RP = (t) => {
  const e = se(() => ({ from: { x: `${-window.innerWidth}px` }, to: { x: `${window.innerWidth}px` }, loop: !0, config: { duration: 3e4 } })), n = {
    display: "inline-block",
    height: t.height,
    lineHeight: t.height,
    verticalAlign: "baseline",
    backgroundColor: "rgba(240,240,240,1)",
    position: "relative",
    marginLeft: "5em",
    marginRight: "5em"
  }, r = {
    userSelect: "none",
    backgroundColor: "rgba(240,240,240,1)",
    height: "94%",
    whiteSpace: "nowrap"
  }, i = t.data.map((o) => /* @__PURE__ */ E.jsx(
    fe.div,
    {
      style: { ...n },
      onClick: () => {
        location.href = `${o.url}`;
      },
      children: o.strurl
    }
  ));
  return /* @__PURE__ */ E.jsx(fe.div, { style: { ...r, ...e[0] }, children: i });
}, MP = (t) => {
  const [e, n] = S.useState(!0), [r, i] = S.useState(!1), { l1v: o, l3v: l, l2v: a, l2v2: s, ...u } = se({
    l1v: e ? "20%" : "80%",
    l2v: e ? "20%" : "50%",
    l2v2: e ? "80%" : "50%",
    l3v: e ? "80%" : "20%"
  });
  var c = window.innerHeight, f = window.innerWidth;
  S.useEffect(() => {
    c = window.innerHeight, f = window.innerWidth, f / c < 1 ? i(!0) : i(!1);
  }, []);
  const d = (h) => {
    h.preventDefault();
  }, p = S.useCallback(() => {
    document.addEventListener("touchmove", d, { useCapture: !1, passive: !1 }), document.addEventListener("wheel", d, { useCapture: !1, passive: !1 });
  }, []), m = S.useCallback(() => {
    document.removeEventListener("touchmove", d, { useCapture: !1, passive: !1 }), document.removeEventListener("wheel", d, { useCapture: !1, passive: !1 });
  }, []);
  return /* @__PURE__ */ E.jsx("div", { className: "burg", onClick: () => {
    t.setburg((h) => !h), n((h) => !h), e ? p() : m();
  }, style: {
    boxSizing: "border-box",
    width: `${t.height}.5em`,
    height: `${t.height}em`,
    display: r ? "inline-block" : "none",
    position: "relative",
    right: "20px",
    border: "double 2px rgba(1,1,1,0.1)",
    backgroundColor: "rgba(240,240,240,1)"
  }, children: /* @__PURE__ */ E.jsxs("svg", { style: { left: 0, top: 0, width: "100%", height: "100%", position: "absolute" }, children: [
    /* @__PURE__ */ E.jsx(fe.line, { x1: "20%", y1: "20%", x2: "80%", y2: o, style: { strokeWidth: "5px", stroke: "black" } }),
    /* @__PURE__ */ E.jsx(fe.line, { x1: a, y1: "50%", x2: s, y2: "50%", style: { strokeWidth: "5px", stroke: "black" } }),
    /* @__PURE__ */ E.jsx(fe.line, { x1: "20%", y1: "80%", x2: "80%", y2: l, style: { strokeWidth: "5px", stroke: "black" } })
  ] }) });
};
yi.registerPlugin(me);
const q1 = S.createContext(null), OP = (t) => {
  const e = S.useState(!1), n = S.useRef(null);
  var r = window.innerWidth;
  S.useEffect(() => {
    window.addEventListener("mouseover", (o) => {
    }), window.addEventListener("resize", () => {
      r == window.innerWidth || (r = window.innerWidth, window.location.reload());
    }), screen.availWidth < 500 || window.innerHeight < 500 ? e[1](!0) : e[1](!1);
  }, []);
  const i = S.useRef(null);
  return S.useContext(q1), /* @__PURE__ */ E.jsx(q1.Provider, { value: { viewent: i }, children: /* @__PURE__ */ E.jsxs("div", { className: "base", ref: n, style: { overflow: "hidden", padding: "0px", margin: "0px", textAlign: "center" }, children: [
    /* @__PURE__ */ E.jsx(h2, { phonestate: e }),
    /* @__PURE__ */ E.jsx("div", { style: { width: "100%", height: "30vh" } }),
    /* @__PURE__ */ E.jsx(DP, { phonestate: e }),
    /* @__PURE__ */ E.jsx("style", { children: `
   @import url('https://fonts.googleapis.com/css?family=Bungee+Shade');
   @import url('https://fonts.googleapis.com/css?family=DotGothic16');
   @import url('https://fonts.googleapis.com/css?family=Kosugi Maru');
   @import url('https://fonts.googleapis.com/css?family=Kiwi+Maru');

   .aabbcc&::-webkit-scrollbar{
  display: none;
  -webkit-appearance: none;
  }
  .aabbcc{
  -webkit-overflow-scrolling: touch;
  overflow-scrolling: touch;
}

` })
  ] }) });
}, DP = (t) => {
  const e = {
    display: "inline-block",
    textAlign: "left",
    width: "500px"
  }, n = S.useState(!1), r = t.phonestate, i = S.useState({
    name: localStorage.getItem("name") === null ? "" : localStorage.getItem("name"),
    adress: localStorage.getItem("adress") === null ? "" : localStorage.getItem("adress"),
    limit: localStorage.getItem("limit") === null ? "" : localStorage.getItem("limit"),
    problem: localStorage.getItem("problem") === null ? "" : localStorage.getItem("problem"),
    purpose: localStorage.getItem("purpose") === null ? "" : localStorage.getItem("purpose"),
    etc: localStorage.getItem("etc") === null ? "" : localStorage.getItem("etc")
  });
  S.useEffect(() => {
  }, [i[0]]), S.useEffect(() => {
    setTimeout(() => {
      u();
    }, 100);
  }, []);
  const o = (f, d) => {
    if (d == "name") {
      var { name: p, ...m } = i[0];
      i[1]({ [d]: f.value, ...m }), localStorage.setItem(d, f.value);
    } else if (d == "adress") {
      var { adress: h, ...m } = i[0];
      i[1]({ [d]: f.value, ...m }), localStorage.setItem(d, f.value);
    } else if (d == "limit") {
      var { limit: y, ...m } = i[0];
      i[1]({ [d]: f.value, ...m }), localStorage.setItem(d, f.value);
    } else if (d == "problem") {
      var { problem: g, ...m } = i[0];
      i[1]({ [d]: f.value, ...m }), localStorage.setItem(d, f.value);
    } else if (d == "purpose") {
      var { purpose: v, ...m } = i[0];
      i[1]({ [d]: f.value, ...m }), localStorage.setItem(d, f.value);
    } else if (d == "etc") {
      var { etc: _, ...m } = i[0];
      i[1]({ [d]: f.value, ...m }), localStorage.setItem(d, f.value);
    }
    n[1](!n[0]);
  };
  var l = null, a = null;
  const s = (f, d, p, m, h, y, g, v, _, w) => {
    f.font = `${_}px Kosugi Maru`;
    for (let T = 0; T < g; T++)
      f.fillText(` ${w.substring(0 + y * T, y * (T + 1))}`, d, p + _ * T);
    f.font = `${v}px Kosugi Maru`;
  }, u = () => {
    l = document.getElementById("canvas"), a = l.getContext("2d");
    var f = 100, d = 100, p = 500, m = 2894, h = 4093;
    a.clearRect(0, 0, 2894, 4093), a.font = `${f}px Kosugi Maru`, a.fillStyle = "white", a.fillRect(0, 0, m, h), a.fillStyle = "black", a.fillText("簡易依頼書", d + f * 11, p - f * 1.5), a.fillText(`氏名　${i[0].name}`, d + f * 2, p + f * 1), a.fillText("連絡先", d + f * 1, p + f * 4), s(a, d + f * 5, p + f * 4, 0, 0, 128, 1, f, 70, i[0].adress), a.fillText("希望納期", d, p + f * 6), s(a, d + f * 5, p + f * 6, 0, 0, 64, 1, f, 70, i[0].limit), a.fillText("課題", d, p + f * 10), s(a, d + f * 2, p + f * 11, 0, 0, 32, 8, f, 66, i[0].problem), a.fillText("目的", d, p + f * 17), s(a, d + f * 2, p + f * 18, 0, 0, 32, 8, f, 66, i[0].purpose), a.fillText("その他", d, p + f * 25), s(a, d + f * 2, p + f * 26, 0, 0, 32, 10, f, 66, i[0].etc);
    let y = /* @__PURE__ */ new Date();
    a.fillText(`作成日:${y.getFullYear()}/${y.getUTCMonth() + 1}/${y.getDate()}`, m - f * 8 - d, h - p * 0 - f * 1);
  };
  var c = "";
  return /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
    /* @__PURE__ */ E.jsxs("form", { onSubmit: null, style: { width: "100%", textAlign: "center" }, children: [
      /* @__PURE__ */ E.jsx("div", { children: /* @__PURE__ */ E.jsxs("label", { text: "", style: { ...e }, children: [
        /* @__PURE__ */ E.jsx("div", { style: {}, children: "氏名" }),
        /* @__PURE__ */ E.jsx("input", { type: "text", name: "name", value: i[0].name, onChange: (f) => {
          o(f.target, f.target.name);
        } })
      ] }) }),
      /* @__PURE__ */ E.jsx("div", { children: /* @__PURE__ */ E.jsxs("label", { style: { ...e }, children: [
        /* @__PURE__ */ E.jsx("div", { children: "連絡先" }),
        /* @__PURE__ */ E.jsx("input", { type: "text", name: "adress", value: i[0].adress, onChange: (f) => {
          o(f.target, f.target.name);
        } })
      ] }) }),
      /* @__PURE__ */ E.jsx("div", { children: /* @__PURE__ */ E.jsxs("label", { style: { ...e }, children: [
        /* @__PURE__ */ E.jsx("div", { children: "希望納期" }),
        /* @__PURE__ */ E.jsx("input", { type: "text", name: "limit", value: i[0].limit, onChange: (f) => {
          o(f.target, f.target.name);
        } })
      ] }) }),
      /* @__PURE__ */ E.jsx("div", { children: /* @__PURE__ */ E.jsxs("label", { style: { ...e }, children: [
        /* @__PURE__ */ E.jsx("div", { children: "システム開発で解決したい課題" }),
        /* @__PURE__ */ E.jsx("textarea", { style: {
          width: "100%",
          resize: "vertical"
        }, rows: "4", cols: "40", name: "problem", value: i[0].problem, onChange: (f) => {
          o(f.target, f.target.name);
        } })
      ] }) }),
      /* @__PURE__ */ E.jsx("div", { children: /* @__PURE__ */ E.jsxs("label", { style: { ...e }, children: [
        /* @__PURE__ */ E.jsx("div", { children: "システム開発で達成したい目標" }),
        /* @__PURE__ */ E.jsx("textarea", { style: {
          width: "100%",
          resize: "vertical"
        }, rows: "4", cols: "40", name: "purpose", value: i[0].purpose, onChange: (f) => {
          o(f.target, f.target.name);
        } })
      ] }) }),
      /* @__PURE__ */ E.jsx("div", { children: /* @__PURE__ */ E.jsxs("label", { style: { ...e }, children: [
        /* @__PURE__ */ E.jsx("div", { children: "自由記述欄" }),
        /* @__PURE__ */ E.jsx("textarea", { style: {
          width: "100%",
          resize: "vertical"
        }, rows: "4", cols: "40", value: i[0].etc, name: "etc", onChange: (f) => {
          o(f.target, f.target.name);
        } })
      ] }) }),
      /* @__PURE__ */ E.jsx("div", { children: "save で入力内容をブラウザに保存。" }),
      /* @__PURE__ */ E.jsxs("div", { children: [
        /* @__PURE__ */ E.jsx(
          "input",
          {
            type: "submit",
            onClick: (f) => {
              f.preventDefault(), setTimeout(() => {
                u();
              }, 100);
            },
            value: "プレビュー"
          }
        ),
        /* @__PURE__ */ E.jsx(
          "input",
          {
            type: "submit",
            onClick: (f) => {
              f.preventDefault(), URL.revokeObjectURL(c);
              var d = document.getElementById("canvas");
              d.toBlob((p) => {
                const m = document.createElement("img"), h = URL.createObjectURL(p);
                c = h, m.src = h;
                const y = document.createElement("a");
                y.href = h, y.download = "依頼書.png", y.click();
              });
            },
            value: "画像を保存"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ E.jsx("div", { style: { margin: "1em", textAlign: "center", backgroundColor: "" }, children: /* @__PURE__ */ E.jsx("canvas", { style: {
      backgroundColor: "rgba(211,211,211,1)",
      border: "solid 2px black",
      width: r[0] ? "100%" : "30%",
      display: "inline-block"
    }, width: "2894", height: "4093", id: "canvas" }) }),
    /* @__PURE__ */ E.jsx("br", {}),
    /* @__PURE__ */ E.jsx("br", {}),
    /* @__PURE__ */ E.jsx("br", {}),
    /* @__PURE__ */ E.jsx("br", {}),
    /* @__PURE__ */ E.jsx("br", {}),
    /* @__PURE__ */ E.jsx("br", {}),
    /* @__PURE__ */ E.jsx("br", {}),
    /* @__PURE__ */ E.jsx("br", {}),
    /* @__PURE__ */ E.jsx("br", {}),
    /* @__PURE__ */ E.jsx("br", {}),
    /* @__PURE__ */ E.jsx("br", {}),
    /* @__PURE__ */ E.jsx("br", {}),
    /* @__PURE__ */ E.jsx("br", {})
  ] });
}, AP = (t) => {
  const e = S.useRef(null), n = S.useState(!1), [r, i] = S.useState([window.innerWidth, window.innerHeight]);
  S.useEffect(() => {
    window.setTimeout(() => {
      i([e.current.clientWidth, window.innerHeight]);
    }, 300), screen.availWidth < 500 || window.innerWidth < 500 ? n[1](!0) : n[1](!1);
  }, []), S.useEffect(() => {
  }, [r]);
  const o = {
    width: "100%",
    height: `${r[0] * 1}px`,
    position: "relative",
    backgroundColor: "rgba(1,1,1,0)",
    textAlign: "center"
  }, l = [
    { picurl: "https://user0514.cdnw.net/shared/img/thumb/hana-ikeda_FP03499-497_TP_V.jpg", url: "/" },
    { picurl: "https://user0514.cdnw.net/shared/img/thumb/rinmon625-9597_TP_V.jpg", url: "/" },
    { picurl: "https://user0514.cdnw.net/shared/img/thumb/rinmon625-9598_TP_V.jpg", url: "/" },
    { picurl: "https://user0514.cdnw.net/shared/img/thumb/rinmon625-9599_TP_V.jpg", url: "/" },
    { picurl: "https://user0514.cdnw.net/shared/img/thumb/rinmon625-9598_TP_V.jpg", url: "/" }
  ], a = S.useRef(null);
  return /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
    /* @__PURE__ */ E.jsxs("div", { ref: e, style: {
      ...o,
      overflow: "hidden",
      whiteSpace: "nowrap"
    }, children: [
      /* @__PURE__ */ E.jsx(LP, { ref: a, imgurl: l, width: r[0], height: r[0], setmergin: 0.05 }),
      /* @__PURE__ */ E.jsx(K1, { lr: "l", clicktriger: () => {
        a.current("l", "l");
      } }),
      /* @__PURE__ */ E.jsx(K1, { lr: "r", clicktriger: () => {
        a.current("r", "r");
      } })
    ] }),
    /* @__PURE__ */ E.jsx("div", { style: { width: "100%", height: "2em", backgroundColor: "" } })
  ] });
}, LP = S.forwardRef((t, e) => {
  const n = S.useState(!1), r = S.useState(!1);
  var i = 0, o = 1, l = t.imgurl.length - 1;
  console.log(t.imgurl), S.useImperativeHandle(
    e,
    () => (m, h) => (m == "s" && n[1](!0), console.log("最大値", l), console.log(o), m == "l" ? o <= 0 ? (i = t.width * (-l + 1), a[1]({ x: i }), o = l) : (a[1]({ x: i += t.width }), o--) : m == "r" && (o >= l ? (i = 0, a[1]({ x: i }), o = 1) : (a[1]({ x: i -= t.width }), o++)), 1)
  );
  const a = se(
    () => ({ x: 0 })
  ), s = {
    ...a[0],
    left: `${-t.width}px`,
    marginLeft: `${t.width * t.setmergin / 2}px`,
    marginRight: `${t.width * t.setmergin / 2}px`,
    width: `${t.width * (1 - t.setmergin)}px`,
    height: `${t.height * (1 - t.setmergin)}px`,
    position: "relative",
    bottom: `${-t.width * t.setmergin / 2}px`,
    backgroundSize: "cover",
    display: "inline-block"
  };
  S.useEffect(() => {
    screen.availWidth < 500 || window.innerWidth < 500 ? r[1](!0) : r[1](!1);
  }, []);
  const u = S.useState(!1), c = se({
    transform: u[0] ? "scale(0.99,0.99)" : "scale(1,1)",
    filter: u[0] ? "grayscale(20%)" : "grayscale(0%)"
  }), f = S.useCallback(
    () => {
      u[1](!0);
    }
  ), p = t.imgurl.map((m) => /* @__PURE__ */ E.jsx(
    fe.div,
    {
      onMouseEnter: () => f(),
      onMouseLeave: () => {
        u[1](!1);
      },
      onTouchStart: () => f(),
      onTouchEnd: () => {
        u[1](!1);
      },
      onClick: () => {
        window.setTimeout(() => {
          location.href = `${m.url}`;
        }, 300);
      },
      style: { ...c, ...s, backgroundImage: `url("${m.picurl}")` }
    }
  ));
  return /* @__PURE__ */ E.jsx(E.Fragment, { children: p });
}), K1 = (t) => {
  const e = S.useState(0);
  t.lr, S.useEffect(() => {
  });
  const n = t.lr == "l" ? { left: 0, rotate: 90 } : { right: 0, rotate: -90 }, r = se({
    //backgroundColor:btnst[0]==0?"rgba(0,100,100,1)":"rgba(200,100,100,1)"
  }), i = se(() => t.lr == "l" ? {
    to: { x: 20 },
    from: { x: -20 },
    loop: { reverse: !0 },
    config: { duration: 1e3 }
  } : {
    to: { x: -20 },
    from: { x: 20 },
    loop: { reverse: !0 },
    config: { duration: 1e3 }
  }), o = {
    width: "100px",
    height: "100px",
    position: "absolute",
    backgroundImage: 'url("./dist/yajirushi.png")',
    backgroundSize: "cover",
    zIndex: 1111,
    bottom: "30px"
  }, l = S.useCallback(
    () => {
      e[0] == 0 ? e[1](1) : e[0] == 1 && e[1](0);
    }
  );
  return /* @__PURE__ */ E.jsx(fe.div, { className: "yajirushi", onClick: () => {
    l(), t.clicktriger();
  }, style: {
    ...n,
    ...i[0],
    ...r,
    ...o
  } });
}, NP = () => {
  const [t, e] = S.useState(!1), n = (r) => {
    e(!0);
  };
  return S.useEffect(() => {
    if (document.readyState === "complete") {
      n();
      return;
    }
    return window.addEventListener("load", n), () => {
      window.removeEventListener("load", n);
    };
  }, []), t;
}, IP = (t) => {
  const e = NP(), n = {
    position: "fixed",
    width: "100%",
    top: 0,
    left: 0,
    height: "100%",
    pointerEvents: "none"
  }, r = t.phonestate, i = S.useRef(null);
  S.useEffect(() => {
    console.log("読み込み開始：FrameArt", e), console.log(e), i.current.addEventListener("selectstart", (y) => {
      y.preventDefault();
    });
    const h = yi.timeline({
      delay: 0,
      scrollTrigger: { scrub: 1 }
    });
    h.to(i.current.getElementsByClassName("gearS")[0], { rotate: "+=730", duration: 1 }), h.to(i.current.getElementsByClassName("gearL")[0], { rotate: "-=360", duration: 1 }, "-=1"), s[1]({ x: 100 }), console.log("読み込みEnd：FrameArt", e);
  }, []);
  const [o, l] = S.useState(2), a = se({
    eyes: o,
    delay: 100,
    config: { duration: 800 }
  }), s = se(
    () => ({ x: 0 })
  ), u = S.useState(!1), c = se({
    opacity: u[0] ? 0 : 1
  }), f = se({
    opacity: u[0] ? 1 : 0,
    delay: 1e3
  });
  S.useEffect(() => {
    e && window.setTimeout(() => {
      l((h) => 600), u[1](!0), console.log("処理");
    }, 800);
  }, [e]);
  const d = {
    opacity: 0.1,
    pointerEvents: "none",
    position: "fixed",
    zIndex: 1,
    backgroundImage: 'url("https://icon-pit.com/wp-content/uploads/2018/12/haguruma_gear_icon_3742.png")',
    backgroundSize: "cover"
  };
  Kg();
  const p = Kg(), m = S.useState(0);
  return se(
    { ref: p, to: { scale: m[0] ? 0.5 : 1 }, from: { scale: m[0] ? 1 : 0.5 }, config: { duration: 2e3 } }
  ), sC([], {
    ref: null,
    from: { scale: 1 },
    enter: { scale: 1 },
    leave: { scale: 1 }
  }), /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
    /* @__PURE__ */ E.jsxs("div", { ref: i, className: "FrameArt", style: { position: "fixed", zIndex: 1500 }, children: [
      /* @__PURE__ */ E.jsx(fe.div, { style: {
        ...c,
        width: "400px",
        height: "20px",
        backgroundColor: "rgba(200,200,0,1)",
        position: "fixed",
        zIndex: 1e4,
        top: `${window.innerHeight / 2 - 10}px`,
        left: `${window.innerWidth / 2 - 200}px`
      } }),
      /* @__PURE__ */ E.jsx(fe.div, { style: {
        ...c,
        width: s[0].x.to({ range: [0, 100], output: ["0px", "400px"] }),
        height: "20px",
        backgroundColor: "rgba(200,0,0,1)",
        position: "fixed",
        zIndex: 10001,
        top: `${window.innerHeight / 2 - 10}px`,
        left: `${window.innerWidth / 2 - 200}px`
      } }),
      /* @__PURE__ */ E.jsx(jP, { phonestate: r, opa_r: f }),
      /* @__PURE__ */ E.jsx("div", { className: "gearL", style: { ...d, width: r[0] ? "100px" : "300px", height: r[0] ? "100px" : "300px", right: r[0] ? "-35px" : "-100px", bottom: r[0] ? "-20px" : "-80px" } }),
      /* @__PURE__ */ E.jsx("div", { className: "gearS", style: { ...d, width: `${(r[0] ? 1 / 3 : 1) * 500}px`, height: `${(r[0] ? 1 / 3 : 1) * 500}px`, right: `${-200 * (r[0] ? 0.25 : 1)}px`, bottom: `${-25 * (r[0] ? 0.1 : 1)}px` } }),
      /* @__PURE__ */ E.jsx(zP, { loadingstate: u, phonestate: r })
    ] }),
    /* @__PURE__ */ E.jsxs("svg", { style: { ...n, zIndex: 1012 }, children: [
      /* @__PURE__ */ E.jsx("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: "rgba(200,255,255,1)", style: { mask: "url(#mask)" } }),
      /* @__PURE__ */ E.jsxs("mask", { id: "mask", x: "0px", y: "0px", width: `${window.innerWidth}px`, height: `${window.innerHeight}px`, children: [
        /* @__PURE__ */ E.jsx("rect", { x: "0", y: "0", width: `${window.innerWidth}px`, height: `${window.innerHeight}px`, fill: "#ffffff" }),
        /* @__PURE__ */ E.jsx(fe.ellipse, { cx: "50vw", cy: "50vh", rx: "70vw", ry: a.eyes, fill: "black", style: { opacity: 1 } }),
        /* @__PURE__ */ E.jsx("text", { x: "50%", y: "10%", textAnchor: "middle", dominantBaseline: "central", fill: "black" })
      ] })
    ] })
  ] });
}, zP = (t) => {
  const n = t.phonestate[0] ? 50 : 200, r = t.loadingstate, i = se({
    opacity: r[0] ? 0.5 : 0,
    delay: 1e3
  }), o = se(() => ({ from: { x: -n / 4, rotate: 0 }, to: { x: n / 3, rotate: 20 }, config: { duration: 4e3 }, loop: { reverse: !0 } })), l = se(() => ({ from: { y: 0 }, config: { duration: 2e3 } }));
  var a = 200, s = null;
  const u = () => {
    clearTimeout(s), s = window.setTimeout(() => {
      a = 200;
    }, 1e3), window.scrollBy({
      top: a,
      behavior: "smooth"
    }), a *= 1.1;
  };
  var c = null;
  return /* @__PURE__ */ E.jsx(fe.div, { className: "ball", onClick: () => {
    clearTimeout(c), o[1].pause(), u(), l[1].stop(), l[1]({
      y: 50,
      config: { duration: 25 * 1 },
      onResolve: () => {
        l[1]({
          y: 100,
          config: { duration: 75 * 2, easing: R0.easeOutBounce },
          onResolve: () => {
            l[1]({ y: 0, config: { duration: 0 } }), c = window.setTimeout(() => {
              o[1].resume();
            }, 2e3);
          }
        });
      }
    });
  }, style: {
    ...i,
    y: l[0].y.to({ range: [0, 50, 100], output: [0, -100, 0] }),
    ...o[0],
    width: `${n}px`,
    height: `${n}px`,
    position: "fixed",
    left: 0,
    bottom: `${-n / 100}px`,
    zIndex: 1011,
    backgroundImage: 'url("https://3.bp.blogspot.com/-rOvA6A1E6NA/VJF_SS2Lb8I/AAAAAAAAp1E/PphqZFh5pLY/s800/ball01_red.png")',
    backgroundSize: "cover"
  } });
}, jP = (t) => {
  const e = t.phonestate, n = e[0] ? 50 : 150, r = S.useState(!1), i = se({
    rotate: r[0] ? 1800 : 0
    // ,opacity:spinswitch[0]?0.5:1
  }), o = S.useCallback(() => {
    r[1](!r[0]), window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }), l = se(() => ({ from: { x: 0 }, to: { x: 10 }, loop: { reverse: !0 } }));
  return se({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      duration: 2e3
    }
  }), /* @__PURE__ */ E.jsx(fe.div, { className: "CtlBtn", onClick: () => o(), style: {
    ...t.opa_r,
    ...i,
    pointerEvents: "auto",
    width: `${n}px`,
    height: `${n}px`,
    position: "fixed",
    right: e[0] ? "15px" : "40px",
    bottom: e[0] ? "10px" : "50px",
    zIndex: 2011,
    backgroundColor: "rgba(0,255,0,.0)"
  }, children: /* @__PURE__ */ E.jsxs("svg", { style: { left: 0, top: 0, width: `${n}px`, height: `${n}px`, position: "absolute" }, children: [
    /* @__PURE__ */ E.jsx("rect", { x: `${n * 0.45}px`, y: `${n * 0.45}px`, width: `${n * 0.1}px`, height: `${n * 0.1}px`, fill: "white" }),
    /* @__PURE__ */ E.jsx(fe.path, { strokeWidth: 10, d: `M${n / 2},${n / 15} L${n * 0.1},${n / 3} Z`, style: { x: "0", y: l[0].x.to({ range: [0, 10], output: [0, 10] }), fill: "rgba(200,200,100,.6)", stroke: "rgba(200,255,200,1)" } }),
    /* @__PURE__ */ E.jsx(fe.path, { strokeWidth: 10, d: `M${n / 2 - 1},${n / 15} L${n - n * 0.1},${n / 3} Z`, style: { x: "0", y: l[0].x, fill: "rgba(200,200,100,.6)", stroke: "rgba(100,255,100,1)" } }),
    /* @__PURE__ */ E.jsx(fe.path, { strokeWidth: 5, d: `M${n / 2},${n / 15 * 3} L${n * 0.1},${n / 3} Z`, style: { x: "0", y: l[0].x.to({ range: [0, 10], output: [0, 20] }), fill: "rgba(200,200,100,.6)", stroke: "rgba(200,255,200,1)" } }),
    /* @__PURE__ */ E.jsx(fe.path, { strokeWidth: 5, d: `M${n / 2 - 1},${n / 15 * 3} L${n - n * 0.1},${n / 3} Z`, style: { x: "0", y: l[0].x.to({ range: [0, 10], output: [0, 20] }), fill: "rgba(200,200,100,.6)", stroke: "rgba(100,255,100,1)" } })
  ] }) });
}, $P = (t) => {
  const [e, n] = S.useState(!0);
  return S.useEffect(() => {
    setTimeout(() => n(!1), t);
  }, []), e;
}, FP = (t) => {
  const e = ["私達の声明", "顧客様のニーズに沿ったウェブサービスを設計することを誓います。"], n = ["我々の使命", "より多くの存在をウェブデザインし、ウェブ上からその存在を発信できるようにします。"], r = ["企画・クリエイト", "社会に新しいシステムを創造することに常に向き合い続けます。"], i = ["サービス", "顧客とやりとりしやすい距離からの制作をさせて頂きます。"], l = S.useRef(null), a = [window.innerWidth, window.innerHeight];
  $P(200);
  const s = se(
    () => ({
      from: { y: 0 },
      to: { y: 20 },
      loop: { reverse: !0 },
      config: {
        duration: 2e3
      }
    })
  ), u = t.phonestate, c = (m, h) => {
    var y = l.current.getElementsByClassName(m + h)[0];
    const g = yi.timeline({
      scrollTrigger: {
        trigger: y,
        start: "center center",
        end: "+=4000",
        //end: "top bottom", 
        scrub: !0,
        pin: !0
      }
    });
    g.to("." + m + h, { opacity: 1 }), g.to(y.getElementsByClassName("halo")[0], { strokeDashoffset: 2 * f * 3.3 * 3 / 4 }).to(y.getElementsByClassName("halokl")[0], { filter: "blur(0px)" }, "<"), h == "phone" && g.to("." + m + h, { x: -a[0] / 2, onComplete: () => {
    } }, "<"), g.to(y.getElementsByClassName("halo")[0], { strokeDashoffset: 2 * f * 3.3 * 2 / 4 }).to(y.getElementsByClassName("halojl")[0], { filter: "blur(0px)" }, "<"), h == "phone" && g.to("." + m + h, { x: 0 }), g.to(y.getElementsByClassName("halo")[0], { strokeDashoffset: 2 * f * 3.3 * 1 / 4 + 0 }).to(y.getElementsByClassName("halohj")[0], { filter: "blur(0px)" }, "<"), h == "phone" && g.to("." + m + h, { x: a[0] / 2 }, "<"), g.to(y.getElementsByClassName("halo")[0], { strokeDashoffset: 2 * f * 3.3 * 0 / 4 - 0 }).to(y.getElementsByClassName("halohk")[0], { filter: "blur(0px)", stroke: "red" }, "<"), h == "phone" && g.to("." + m + h, { x: 0 }), g.to(y.getElementsByClassName("halo")[0], { opacity: 1 });
  };
  S.useEffect(() => {
    window.setTimeout(() => {
      c("halo", "phone"), c("halo", "pc");
    }, 300);
  }, []), S.useEffect(() => {
  }, [u[0]]);
  const f = 100;
  se({
    from: { x: 2 * f * 3.14 },
    to: { x: 0 },
    loop: !0,
    config: { duration: 3e3 }
  });
  const d = {
    width: u[0] ? a[0] : a[0] / 2 - 11,
    height: a[1] / 2 - 11,
    backgroundColor: "rgba(110,110,190,1)",
    filter: "blur(0px)",
    position: "absolute",
    //padding:"6em"
    boxSizing: "border-box",
    color: "white",
    overflow: "hidden",
    left: u[0] ? `${a[0] / 2}px` : "0px"
  }, p = {
    width: u[0] ? a[0] : a[0] / 2 - 11,
    height: a[1] / 2 - 11,
    backgroundColor: "rgba(110,110,190,1)",
    filter: "blur(0px)",
    position: "absolute",
    //padding:"6em"
    boxSizing: "border-box",
    color: "white",
    overflow: "hidden",
    right: u[0] ? `${a[0] / 2}px` : "0px"
  };
  return /* @__PURE__ */ E.jsxs("div", { ref: l, className: t.className, style: { position: "relative", zIndex: 11 }, children: [
    /* @__PURE__ */ E.jsx("div", { className: "switch", style: { display: u[0] ? "block" : "none", position: "relative" }, children: /* @__PURE__ */ E.jsxs("div", { className: "halophone", style: { width: "100vw", height: "100vh", backgroundColor: "rgba(100,100,100,.9)", position: "relative" }, children: [
      /* @__PURE__ */ E.jsx("div", { className: "halohk", style: { top: "0em", ...p }, children: /* @__PURE__ */ E.jsx(ki, { phonestate: u, part: "2nd", delay: 0, title: n[0], children: n[1] }) }),
      /* @__PURE__ */ E.jsx("div", { className: "halojl", style: { bottom: "10px", ...d }, children: /* @__PURE__ */ E.jsx(ki, { phonestate: u, part: "4th", delay: 1e3, title: i[0], children: i[1] }) }),
      /* @__PURE__ */ E.jsx("div", { className: "halokl", style: { top: "0em", ...d }, children: /* @__PURE__ */ E.jsx(ki, { phonestate: u, part: "1st", delay: 0, title: e[0], children: e[1] }) }),
      /* @__PURE__ */ E.jsx("div", { className: "halohj", style: { bottom: "10px", ...p }, children: /* @__PURE__ */ E.jsx(ki, { phonestate: u, part: "3rd", delay: 1e3, title: r[0], children: r[1] }) }),
      /* @__PURE__ */ E.jsxs("svg", { width: "100vw", height: "100vh", style: { backgroundColor: "rgba(1,1,1,0)", position: "relative" }, children: [
        /* @__PURE__ */ E.jsx(fe.circle, { className: "halo", cx: a[0] / 2, cy: a[1] / 2, r: s[0].y.to({ range: [0, 20], output: [f - 3, f] }), strokeWidth: "12", stroke: "yellow", fill: "rgba(1,1,1,0)", transform: `rotate(-90 ${a[0] / 2} ${a[1] / 2})`, style: { backgroundColor: "red", filter: "blur(4px)", zIndex: 1e5 }, strokeDasharray: `${2 * f * 3.3}`, strokeDashoffset: 2 * f * 3.3, opacity: 0.5 }),
        /* @__PURE__ */ E.jsx(fe.circle, { cx: a[0] / 2, cy: a[1] / 2, r: f - 4, strokeWidth: "0.8", stroke: "rgba(1,1,1,0.5)", fill: "red" })
      ] }),
      t.children
    ] }) }),
    /* @__PURE__ */ E.jsx("div", { className: "switch", style: { display: u[0] ? "none" : "block", position: "relative" }, children: /* @__PURE__ */ E.jsxs("div", { className: "halopc", style: { bottom: 0, display: u[0] ? "none" : "block", width: "100vw", height: "100vh", backgroundColor: "rgba(100,100,100,.9)", position: "relative" }, children: [
      /* @__PURE__ */ E.jsx("div", { className: "halohk", style: { top: "50px", ...d }, children: /* @__PURE__ */ E.jsx(ki, { phonestate: u, part: "2nd", delay: 1e3, title: n[0], children: n[1] }) }),
      /* @__PURE__ */ E.jsx("div", { className: "halojl", style: { bottom: "-30px", ...p }, children: /* @__PURE__ */ E.jsx(ki, { phonestate: u, part: "4th", delay: 1e3, title: i[0], children: i[1] }) }),
      /* @__PURE__ */ E.jsx("div", { className: "halokl", style: { top: "50px", ...p }, children: /* @__PURE__ */ E.jsx(ki, { phonestate: u, part: "1st", delay: 1e3, title: e[0], children: e[1] }) }),
      /* @__PURE__ */ E.jsx("div", { className: "halohj", style: { bottom: "-30px", ...d }, children: /* @__PURE__ */ E.jsx(ki, { phonestate: u, part: "3rd", delay: 1e3, title: r[0], children: r[1] }) }),
      /* @__PURE__ */ E.jsxs("svg", { width: "100vw", height: "100vh", style: { top: "50px", backgroundColor: "rgba(1,1,1,0)", position: "relative" }, children: [
        /* @__PURE__ */ E.jsx(fe.circle, { className: "halo", cx: a[0] / 2, cy: a[1] / 2, r: s[0].y.to({ range: [0, 20], output: [f + 12, f + 15] }), strokeWidth: "20", stroke: "yellow", fill: "rgba(1,1,1,0)", transform: `rotate(-90 ${a[0] / 2} ${a[1] / 2})`, style: { backgroundColor: "red", filter: "blur(4px)", zIndex: 1e5 }, strokeDasharray: `${2 * (f + 12) * 3.3}`, strokeDashoffset: 2 * f * 3.3, opacity: 0.5 }),
        /* @__PURE__ */ E.jsx(fe.circle, { onClick: () => {
        }, cx: a[0] / 2, cy: a[1] / 2, r: f + 9, strokeWidth: "0.5", stroke: "rgba(1,1,1,0.5)", fill: "green" })
      ] }),
      t.children
    ] }) })
  ] });
}, ki = (t) => {
  const e = t.phonestate;
  S.useEffect(() => {
  });
  const n = {
    position: "absolute",
    width: "90%",
    height: "50%",
    paddingLeft: e[0] ? "0.4em" : "1em",
    boxSizing: "border-box",
    paddingRight: e[0] ? "0.4em" : "1em",
    boxSizing: "border-box",
    backgroundColor: "gray",
    fontSize: e[0] ? "1.2em" : "1.5em",
    border: "solid 3px black"
  }, r = {
    top: "40%",
    right: e[0] ? "2px" : "5%"
  }, i = {
    top: "40%",
    left: e[0] ? "2px" : "5%"
  }, o = {
    bottom: e[0] ? "25%" : "40%",
    left: e[0] ? "2px" : "5%"
  }, l = {
    bottom: e[0] ? "25%" : "40%",
    right: e[0] ? "2px" : "5%"
  }, a = {
    right: "10px"
  }, s = {
    left: "10px"
  }, u = {
    left: "10px"
  }, c = {
    right: "10px"
  }, f = Object.assign(t.part == "1st" ? r : t.part == "2nd" ? i : t.part == "3rd" ? o : t.part == "4th" ? l : {}), d = Object.assign(t.part == "1st" ? a : t.part == "2nd" ? s : t.part == "3rd" ? u : t.part == "4th" ? c : {}), p = Object.assign(t.part == "1st" ? { top: "2em", textAlign: "right" } : t.part == "2nd" ? { top: "2em", textAlign: "left" } : t.part == "3rd" ? { bottom: e[0] ? "1em" : "2em", textAlign: "left" } : t.part == "4th" ? { bottom: e[0] ? "1em" : "2em", textAlign: "right" } : {}), m = Df({
    rootMarginLeft: "1000px",
    threshold: 0.2,
    triggerOnce: !1
  });
  S.useEffect(() => {
  }, [m]);
  const h = se({
    opacity: m.inView ? 1 : 0,
    y: m.inView ? 0 : 200,
    delay: 100,
    config: { duration: 1e3 }
  }), y = se({
    boxShadow: m.inView ? "10px 5px 5px black" : "10px 5px 5px rgba(1,1,1,0)",
    delay: 1100,
    config: { duration: 1e3 }
  }), v = {
    ...se({
      //opacity:inview.inView?1:1,
      color: m.inView ? "white" : "black",
      delay: 0
    }),
    position: "absolute",
    width: "100%",
    height: "1.2em",
    lineHeight: "1em",
    display: "inline",
    fontSize: "2.5em",
    backgroundColor: "black",
    boxSizing: "border-box",
    paddingRight: "20px",
    paddingLeft: "20px",
    whiteSpace: "nowrap"
  }, _ = {
    position: "absolute",
    left: 0,
    top: 0,
    display: "inline-block",
    fontSize: "1.1em",
    height: "3.15em",
    lineHeight: "1em",
    width: "98%",
    margin: "auto"
    //,background:"red"
  };
  return /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
    /* @__PURE__ */ E.jsxs(fe.div, { style: { fontFamily: "'DotGothic16'", ...v, ...p, left: "0px", zIndex: 5 }, children: [
      " ",
      t.title,
      " "
    ] }),
    /* @__PURE__ */ E.jsx("div", { ref: m.ref, className: "viewpart", style: { position: "absolute", zIndex: 1, height: "100%", width: "40px", ...d, backgroundColor: "rgba(221,221,221,0.8)" } }),
    /* @__PURE__ */ E.jsxs(fe.div, { style: { overflow: "hidden", fontFamily: "'DotGothic16'", ...h, ...y, ...n, ...f, zIndex: 4 }, children: [
      /* @__PURE__ */ E.jsx(
        "div",
        {
          className: "alias",
          style: {
            position: "absolute",
            height: "100%",
            width: "100%",
            backgroundImage: 'url("https://ggo.ismcdn.jp/mwimgs/7/8/-/img_78922843936c6130e63c254919422062100941.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "right 0% bottom 0%",
            left: 0,
            opacity: 0.7,
            filter: "blur(4px) grayscale(96%)"
          }
        }
      ),
      /* @__PURE__ */ E.jsx(
        "div",
        {
          className: "wrap2",
          style: {
            ..._,
            transform: e[0] ? "translateY(53%) translateX(4%)" : "translateY(58%) translateX(4%)",
            color: "rgba(0,0,0,0.2)"
          },
          children: t.children
        }
      ),
      /* @__PURE__ */ E.jsx(
        "div",
        {
          className: "wrap",
          style: {
            ..._,
            transform: e[0] ? "translateY(50%) translateX(1%)" : "translateY(56%) translateX(2%)",
            color: "white"
          },
          children: t.children
        }
      )
    ] })
  ] });
}, UP = (t) => {
  const r = S.useRef(null), i = S.useRef(null), o = t.phonestate, l = () => {
    yi.timeline({
      scrollTrigger: {
        trigger: r.current,
        start: "center center",
        end: '"+=10000"',
        scrub: !0
      }
    }).fromTo(
      r.current.getElementsByClassName("comaX")[0],
      { y: "0px", opacity: 1 },
      { y: "-200vh" }
    );
    var c = 0;
    const f = yi.timeline({
      scrollTrigger: {
        trigger: r.current,
        start: "center center",
        end: '"+=10000"',
        //end: "top bottom", 
        scrub: !0,
        pin: !0
      }
    });
    f.fromTo(
      r.current,
      { backgroundPosition: `top ${-200 / 4 * c}vh  right 0px` },
      {
        backgroundPosition: `top ${-200 / 4 * (c + 1)}vh  right 0px`,
        onStart: () => {
          i.current(!1);
        }
      }
    ), c = c + 1, f.fromTo(
      r.current,
      { backgroundPosition: `top ${-200 / 4 * c}vh  right 0px` },
      { backgroundPosition: `top ${-200 / 4 * (c + 1)}vh  right 0px` }
    ), c = c + 1, f.to(
      r.current.getElementsByClassName("coma1")[0],
      {
        opacity: 1,
        bottom: `${a[1] / 2 - 200}px`
      },
      "<"
    ), f.fromTo(
      r.current,
      { backgroundPosition: `top ${-200 / 4 * c}vh  right 0px` },
      { backgroundPosition: `top ${-200 / 4 * (c + 1)}vh  right 0px` }
    ), c = c + 1, f.to(
      r.current.getElementsByClassName("coma2")[0],
      {
        opacity: 1,
        bottom: "100vh"
      },
      "<"
    ), f.fromTo(r.current, { backgroundPosition: `top ${-200 / 4 * c}vh  right 0px` }, {
      backgroundPosition: `top ${-200 / 4 * (c + 1)}vh  right 0px`,
      onComplete: () => {
        i.current(!0);
      }
    }), c = c + 1, f.to(
      r.current.getElementsByClassName("coma1")[0],
      {
        opacity: 0,
        bottom: "100vh"
      },
      "<"
    );
  };
  S.useEffect(() => {
    window.setTimeout(() => {
      l();
    }, 300);
  }, []);
  const a = [window.innerWidth, window.innerHeight], s = {
    position: "absolute",
    color: "white",
    width: `${a[0] * 0.6}px`,
    height: "300px",
    backgroundColor: "rgba(1,1,1,0)",
    border: "double 6px rgba(233,2,2,1)",
    opacity: 1,
    zIndex: 1
  };
  return /* @__PURE__ */ E.jsx(E.Fragment, { children: /* @__PURE__ */ E.jsxs("div", { ref: r, className: t.className, style: {
    backgroundImage: 'url("https://static.rtrp.jp/article/92597/images/92597a5de3dba-2a02-4ff9-90ca-b352d48cec80_m.jpg")',
    backgroundPosition: "top 0px right 0px",
    backgroundSize: "100vw 300vh",
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(100,100,100,.9)",
    position: "relative",
    zIndex: 10
  }, children: [
    /* @__PURE__ */ E.jsxs("div", { className: "comaX", style: {
      boxShadow: "10px 5px 5px black",
      paddingTop: "100px",
      minWidth: "300px",
      width: `${o[0] ? a[0] - 20 : a[0] * 0.4}px`,
      height: `${200 + 100}vh`,
      left: `${o[0] ? 5 : a[0] * 0.3}px`,
      backgroundColor: "rgba(60,60,200,0.9)",
      position: "absolute",
      zIndex: 2
    }, children: [
      t.children[0],
      /* @__PURE__ */ E.jsx("div", { style: { width: "100%", height: "20vh" } }),
      t.children[1]
    ] }),
    /* @__PURE__ */ E.jsx(BP, { ref: i, phonestate: o }),
    /* @__PURE__ */ E.jsx("div", { className: "coma1", style: { ...s, left: `${a[0] * 0.1}px`, bottom: "-300px" } }),
    /* @__PURE__ */ E.jsx("div", { className: "coma1", style: { ...s, left: `${a[0] * 0.7}px`, bottom: "100px" } }),
    /* @__PURE__ */ E.jsx("div", { className: "coma2", style: { ...s, left: `${a[0] * 0.6}px`, bottom: "-130px" } }),
    /* @__PURE__ */ E.jsx("div", { className: "coma2", style: { ...s, left: "71%", bottom: "400px" } }),
    /* @__PURE__ */ E.jsx("div", { className: "coma3", style: { ...s, left: `${a[0] * 0.8}px`, bottom: "30px" }, children: " " }),
    /* @__PURE__ */ E.jsx("div", { className: "coma3", style: { ...s, left: "-10%", bottom: "400px" } })
  ] }) });
}, BP = S.forwardRef((t, e) => {
  S.useImperativeHandle(
    e,
    () => (a, s) => (r[1](a), r[0])
  );
  const n = t.phonestate, r = S.useState(!1), i = se({
    bottom: r[0] ? "0" : "-60vh"
  });
  S.useEffect(() => {
    screen.availWidth < 500 || window.innerHeight < 500 ? n[1](!0) : n[1](!1);
  }, []);
  const o = {
    position: "relative",
    left: 0,
    textAlign: "left",
    lineHeight: "1.5em",
    verticalAlign: "bottom",
    boxShadow: "2px 1px 5px 5px rgba(255,255,255,0.1)",
    marginBottom: "3px",
    marginLeft: `${n[0] ? 0 : 1}em`,
    marginright: `${n[0] ? 0 : 1}em`,
    width: n[0] ? "100%" : "15em",
    textAlign: n[0] ? "left" : "center",
    display: "inline-block"
  }, l = {
    width: "75px",
    height: "75px",
    borderRadius: "10px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "inline-block",
    position: "relative",
    margin: "4px"
  };
  return /* @__PURE__ */ E.jsxs(fe.div, { className: "footer", style: {
    ...i,
    fontSize: "1.5em",
    boxSizing: "border-box",
    padding: "10px",
    position: "absolute",
    color: "white",
    backgroundColor: "rgba(10,10,100,1)",
    width: "100%",
    height: n ? "60vh" : "30vh",
    zIndex: 1503
  }, children: [
    /* @__PURE__ */ E.jsx("div", { onClick: () => {
      r[1](!r[0]);
    }, style: {
      backgroundColor: "rgba(221,221,221,1.5)",
      bottom: `${(n ? 60 : 30) - 1}vh`,
      left: `${innerWidth * 0.5 - 50}px`,
      position: "absolute",
      borderRadius: "5px",
      width: "100px",
      height: "15px"
    } }),
    /* @__PURE__ */ E.jsx("div", { style: {
      position: "absolute",
      zIndex: 2,
      fontFamily: "'Kiwi Maru','serif','DotGothic16'",
      fontWeight: 900,
      left: `${window.innerWidth * 0.05}px`,
      top: `${window.innerWidth * (n[0] ? 0.1 : 0.04)}px`,
      fontSize: "1.5em",
      transform: "scale(0.9,1.1)"
    }, children: "Rommet" }),
    /* @__PURE__ */ E.jsxs("div", { style: {
      backgroundColor: "rgba(1,1,1,0)",
      width: `${innerWidth * 0.9}px`,
      height: "75%",
      position: "absolute",
      zIndex: 1,
      bottom: "20px",
      left: `${window.innerWidth * 0.05}px`,
      top: `${window.innerWidth * (n[0] ? 0.3 : 0.06)}px`,
      textAlign: n[0] ? "left" : "center",
      border: "double 2px rgba(1,1,1,0.1)",
      fontSize: "0.8em",
      boxSizing: "border-box"
    }, children: [
      /* @__PURE__ */ E.jsx("div", { style: { ...o }, children: "ウェブサイトご利用条件" }),
      /* @__PURE__ */ E.jsx("div", { style: { ...o }, children: "ソーシャルメディアポリシー" }),
      /* @__PURE__ */ E.jsx("div", { style: { ...o }, children: "個人情報保護方針" }),
      /* @__PURE__ */ E.jsx("div", { style: { ...o }, children: "お問い合わせ" }),
      /* @__PURE__ */ E.jsx("div", { style: {
        width: "100%",
        height: "200px",
        position: "absolute",
        top: `${window.innerWidth * (n[0] ? 0.5 : 0.14)}px`
      }, children: /* @__PURE__ */ E.jsxs("div", { style: {
        backgroundColor: "rgba(200,220,220,0.9)",
        display: "inline-block",
        position: "relative",
        height: "82px"
      }, children: [
        /* @__PURE__ */ E.jsx(Z1, { children: /* @__PURE__ */ E.jsx("div", { className: "imagecmp", style: {
          ...l,
          backgroundImage: 'url("https://github.githubassets.com/assets/apple-touch-icon-180x180-a80b8e11abe2.png")'
        } }) }),
        /* @__PURE__ */ E.jsx(Z1, { children: /* @__PURE__ */ E.jsx("div", { className: "imagecmp", style: {
          ...l,
          backgroundColor: "white",
          backgroundImage: 'url("https://cdn.qiita.com/assets/public/push_notification/image-qiitan-572179a3bbde375850422ea48b2b6272.png")'
        } }) })
      ] }) })
    ] })
  ] });
}), Z1 = (t) => {
  const e = S.useState(!1), n = se({
    transform: e[0] ? "scale(1.2,1.2)" : "scale(1,1)"
  });
  return /* @__PURE__ */ E.jsx(
    fe.div,
    {
      onMouseEnter: () => {
        e[1](!0);
      },
      onMouseLeave: () => {
        e[1](!1);
      },
      style: { ...n, display: "inline-block", position: "relative" },
      children: t.children
    }
  );
}, p2 = S.createContext({ lite: "bbb" }), VP = () => {
  const [t, e] = S.useState(!1), n = () => e(!0);
  return S.useEffect(() => {
    if (document.readyState === "complete") {
      n();
      return;
    }
    return window.addEventListener("load", n), () => {
      window.removeEventListener("load", n);
    };
  }, []), t;
}, WP = S.forwardRef((t, e) => {
  VP();
  const n = S.useState(0), r = S.useState(0), i = S.useState([0, 0]), o = S.useState(!0), l = S.useRef(null);
  S.useContext(p2);
  var a = null;
  S.useImperativeHandle(
    e,
    () => (g, v) => (clearTimeout(a), a = window.setTimeout(() => {
      (screen.availWidth < 500 || window.innerWidth < 500) && d[1](!1);
    }, 3e3), (screen.availWidth < 500 || window.innerWidth < 500) && d[1](!0), p[1](!p[0]), p[0])
  );
  const s = t.lr == "L" ? { left: `${n[0]}px` } : { right: `${n[0]}px` }, u = {
    fontSize: "80px",
    lineHeight: "1em",
    fontFamily: "'Dela Gothic One','Kiwi Maru','serif','DotGothic16'",
    color: "rgba(250,250,250,1)"
  }, c = {
    fontSize: "40px",
    lineHeight: "1em",
    fontFamily: "'Dela Gothic One','Kiwi Maru','serif','DotGothic16'",
    color: "rgba(250,250,250,1)"
  }, f = {
    fontSize: "20px",
    lineHeight: "1em",
    fontFamily: "'Dela Gothic One','Kiwi Maru','serif','DotGothic16'",
    color: "rgba(250,250,250,1)"
  };
  S.useEffect(() => {
    screen.availWidth < 500 || window.innerWidth < 500 ? (o[1](!0), n[1](0), r[1](window.innerHeight / 2 - window.innerHeight * 0.45), i[1]([0, window.innerHeight / 2 - window.innerHeight * 0.6 / 2])) : (o[1](!1), n[1](20), r[1](130), i[1]([100, window.innerHeight / 2 - window.innerHeight * 0.45])), window.setTimeout(() => {
      (screen.availWidth < 500 || window.innerWidth < 500) && d[1](!1);
    }, 3e3), l.current.addEventListener("selectstart", (g) => {
      g.preventDefault();
    });
  }, []);
  const d = S.useState(!0);
  S.useEffect(() => {
    (screen.availWidth < 500 || window.innerWidth < 500) && p[1](!0);
  }, [d]), se(() => ({
    to: { rotate: 360 },
    from: { rotate: 0 },
    config: { duration: 2e3 },
    loop: !0
  }));
  const p = S.useState(!0), m = se({
    boxShadow: p[0] ? "0px 0px 25px 22px rgba(220, 220, 220, .8)" : "10px 5px 5px 10px rgba(220, 220, 220, 0)",
    filter: p[0] ? "brightness(100%)" : "brightness(60%)"
  });
  S.useEffect(() => {
  }, [p[0]]);
  const h = se({
    opacity: d[0] ? 1 : 0,
    config: { duration: 1e3 }
  }), y = {
    position: "absolute",
    width: `${o[0] ? window.innerWidth / 1 : window.innerWidth / 2 - 100}px`,
    height: `${o[0] ? window.innerHeight / 1 : window.innerHeight / 1 - 200}px`,
    backgroundColor: "rgba(1,1,1,1)",
    border: "double rgba(255,0,0,0.7) 10px",
    boxSizing: "border-box",
    zIndex: 100,
    bottom: `${o[0] ? 0 : i[0][1]}px`
  };
  return /* @__PURE__ */ E.jsxs(fe.div, { ref: l, style: {
    ...m,
    pointerEvents: "none",
    ...h,
    ...s,
    userSelect: "none",
    textAlign: "center",
    ...y
  }, children: [
    /* @__PURE__ */ E.jsxs("div", { style: {
      position: "relative",
      top: `${o[0] ? window.innerHeight * 0.2 : (window.innerHeight - 150) * 0.25}px`
    }, children: [
      /* @__PURE__ */ E.jsx("div", { style: { ...u, marginBottom: "20px" }, children: "Origin Club" }),
      /* @__PURE__ */ E.jsx("div", { style: { ...c }, children: "オリジナリティあふれるサイトを作ろう！" }),
      /* @__PURE__ */ E.jsxs("div", { className: "", style: {
        left: "-10px",
        ...f,
        marginTop: "5px",
        height: "5em",
        width: o[0] ? `${window.innerWidth * 0.9}px` : `${window.innerWidth / 2 - 100}px`,
        display: "inline-block",
        overflow: "hidden"
      }, children: [
        "はじめまして！ようこそOrigin Clubへ。",
        /* @__PURE__ */ E.jsx("br", {}),
        "我々は人々のくらしをコンピューターの力でさらに豊かな方向へ導くことを",
        /* @__PURE__ */ E.jsx("br", {}),
        "目的としたプログラマー集団です。"
      ] })
    ] }),
    /* @__PURE__ */ E.jsx("style", { children: `
   @import url('https://fonts.googleapis.com/css?family=Dela Gothic One');

` })
  ] });
}), HP = (t) => {
  const [e, n] = S.useState([window.innerWidth / 2 - 100, window.innerHeight / 1.3]), r = S.useState([0, 0]), i = S.useRef(null);
  S.useState(!1);
  const o = S.useState(!1), l = Df({
    rootMargin: "0px",
    triggerOnce: !1
  });
  console.log([l.inView, l[0]], o), console.log(l), S.useEffect(() => {
    screen.availWidth < 500 || window.innerWidth < 500 ? (n([window.innerWidth * 1, window.innerHeight * 0.7]), r[1]([0, window.innerHeight / 2 - window.innerHeight * 0.6 / 2])) : (n([window.innerWidth / 2 - 100, window.innerHeight / 1.3]), r[1]([100, window.innerHeight / 2 - window.innerHeight * 0.45]));
    var y = 0;
    c.current(!0, !0), setInterval(() => {
      y++, y % 4 == 1 ? c.current(!1, !1) || f.current(!1, !1) || d.current(!1, !1) || p.current(!1, !1) || (c.current(!0, !0), f.current(!1, !0), d.current(!1, !0), p.current(!1, !0)) : y % 4 == 2 ? c.current(!1, !1) || f.current(!1, !1) || d.current(!1, !1) || p.current(!1, !1) || (c.current(!1, !0), f.current(!0, !0), d.current(!1, !0), p.current(!1, !0)) : y % 4 == 3 ? c.current(!1, !1) || f.current(!1, !1) || d.current(!1, !1) || p.current(!1, !1) || (c.current(!1, !0), f.current(!1, !0), d.current(!0, !0), p.current(!1, !0)) : y % 4 == 0 && (c.current(!1, !1) || f.current(!1, !1) || d.current(!1, !1) || p.current(!1, !1) || (c.current(!1, !0), f.current(!1, !0), d.current(!1, !0), p.current(!0, !0)));
    }, 2e3);
  }, []);
  const a = t.lr == "L" ? { left: `${r[0][0]}px` } : { right: `${r[0][0]}px` }, s = se({
    opacity: o[0] ? 0 : 1,
    pointerEvents: o[0] ? "none" : "auto",
    y: o[0] ? -100 : 0,
    x: o[0] ? 10 : 0,
    rotate: o[0] ? 10 : 0,
    delay: 400,
    config: {
      duration: 500
    }
  }), u = (y) => {
    y == "footer" ? window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    }) : document.getElementsByClassName(y)[0].scrollIntoView(
      { behavior: "smooth", block: "nearest" }
    );
  }, c = S.useRef(null), f = S.useRef(null), d = S.useRef(null), p = S.useRef(null);
  S.useContext(p2);
  const m = {
    backgroundColor: "rgba(110,110,190,1)",
    borderTop: "solid 1px rgba(0,0,0,0.8)",
    borderLeft: "solid 1px rgba(0,0,0,0.8)",
    borderRight: "solid 5px rgba(0,0,0,0.8)",
    borderBottom: "solid 5px rgba(0,0,0,0.8)",
    margin: "0px",
    paddingTop: "2em",
    width: `${e[0] - 0}px`,
    height: `${e[1]}px`,
    boxShadow: "0px 0px 0px 0px black",
    overflow: "visible",
    boxSizing: "border-box",
    bottom: `${r[0][1]}px`
  }, h = (y) => {
    y == 0 ? (c.current(!0, !0), f.current(!1, !0), d.current(!1, !0), p.current(!1, !0)) : y == 1 ? (c.current(!1, !0), f.current(!0, !0), d.current(!1, !0), p.current(!1, !0)) : y == 2 ? (c.current(!1, !0), f.current(!1, !0), d.current(!0, !0), p.current(!1, !0)) : y == 3 && (c.current(!1, !0), f.current(!1, !0), d.current(!1, !0), p.current(!0, !0)), console.log(y);
  };
  return /* @__PURE__ */ E.jsxs(fe.div, { onClick: () => {
  }, ref: i, style: {
    ...s,
    position: "absolute",
    color: "rgba(113, 36, 0,1)",
    ...m,
    filter: "blur(0px)",
    ...a,
    zIndex: 1
  }, children: [
    /* @__PURE__ */ E.jsx(Iu, { ref: c, delay: 200 * 0, btnid: 0, alloff: (y) => {
      h(y);
    }, btmright: [0, e[1] / 20], invokefunc: () => {
      u("aboutcomp");
    }, children: "メッセージ" }),
    /* @__PURE__ */ E.jsx(Iu, { ref: f, delay: 200 * 1, btnid: 1, alloff: (y) => {
      h(y);
    }, btmright: [0, e[1] / 5 + e[1] / 20], invokefunc: () => {
      t.setfunc.current();
    }, children: "私たちについて" }),
    /* @__PURE__ */ E.jsx(Iu, { ref: d, delay: 200 * 2, btnid: 2, alloff: (y) => {
      h(y);
    }, btmright: [0, e[1] * 2 / 5 + e[1] / 20], invokefunc: () => {
      u("updatelog");
    }, children: "Update Log" }),
    /* @__PURE__ */ E.jsx(Iu, { ref: p, delay: 200 * 3, btnid: 3, alloff: (y) => {
      h(y);
    }, btmright: [0, e[1] * 3 / 5 + e[1] / 20], invokefunc: () => {
      u("footer");
    }, children: "コンタクト" })
  ] });
}, Iu = S.forwardRef((t, e) => {
  const n = S.useRef(null), r = S.useState(!1), i = S.useState(!1), o = S.useState(!1);
  S.useImperativeHandle(
    e,
    () => (m, h) => (i[0] || r[1](!1), h && r[1](m), i[0])
  );
  const [l, a] = S.useState([window.innerWidth / 2 - 100, window.innerHeight / 1.3]), s = S.useState([0, 0]), u = se({
    opacity: o[0] ? 1 : 0,
    y: o[0] ? 0 : -300,
    delay: t.delay,
    config: {
      duration: 200
    }
  }), c = se({
    transform: r[0] ? "translate(0px,-7px)" : "translate(0px,0px)",
    borderTop: r[0] ? "double 14px rgba(255,255,255,1)" : "solid 7px rgba(255,255,255,1)",
    borderBottom: r[0] ? "double 14px rgba(255,255,255,1)" : "solid 7px rgba(255,255,255,1)",
    color: r[0] ? "rgba(220,220,220,1)" : "rgba(50,50,50,0.3)",
    backgroundColor: r[0] ? "rgba(80,80,80,0.7)" : "rgba(210,210,210,1)",
    config: {
      duration: 1e3
    }
  }), f = se({
    width: r[0] ? "5px" : "20px",
    height: r[0] ? "20px" : "5px",
    left: r[0] ? "-0px" : "-10px",
    top: r[0] ? `${l[1] / 2 - 10}px` : `${l[1] / 2 - 2.5}px`,
    config: {
      duration: 500
    }
  });
  se(() => ({ from: { x: 0 }, to: { x: 10 }, loop: { reverse: !0 }, config: { duration: 3e3 } }));
  const d = S.useState(!0), p = {
    height: `${l[1] * (d[0] ? 1.3 : 1)}px`,
    whiteSpace: "nowrap",
    lineHeight: `${l[1] * (d[0] ? 1.3 : 1)}px`,
    fontSize: `${l[1] / 2 * (d[0] ? 1.3 : 1)}px`,
    position: "absolute",
    verticalAlign: "top",
    display: "inline-block",
    width: `${l[0]}px`,
    maxWidth: "100%",
    filter: "blur(0px)"
  };
  return S.useEffect(() => {
    if (o[1](!0), screen.availWidth < 500 || window.innerWidth < 500) {
      a([window.innerWidth, window.innerHeight * 0.7 / 8]), s[1]([0, window.innerHeight / 2 - window.innerHeight * 0.6 / 2]), d[1](!0);
      var m = null;
      n.current.addEventListener("touchstart", () => {
        clearTimeout(m), m = window.setTimeout(() => {
          t.invokefunc(!0), t.alloff(t.btnid), r[1](!1), i[1](!1);
        }, 1e3), r[1](!0), i[1](!0);
      }), n.current.addEventListener("touchend", () => {
        clearTimeout(m), r[1](!1), i[1](!1);
      });
    } else
      a([window.innerWidth / 2 - 100 / 8, window.innerHeight / 1.3 / 8]), s[1]([100, window.innerHeight / 2 - window.innerHeight * 0.45]), d[1](!1), n.current.addEventListener("click", () => {
        r[1](!0), i[1](!0), t.invokefunc(!0);
      }), n.current.addEventListener("mouseenter", () => {
        r[1](!0), t.alloff(t.btnid), i[1](!0);
      }), n.current.addEventListener("mouseleave", () => {
        r[1](!1), i[1](!1);
      });
    n.current.addEventListener("selectstart", (h) => {
      h.preventDefault();
    });
  }, []), /* @__PURE__ */ E.jsxs(fe.div, { ref: n, style: {
    ...p,
    ...c,
    ...u,
    userSelect: "none",
    right: `${t.btmright[0]}px`,
    zIndex: 3e4,
    top: `${t.btmright[1]}px`
  }, children: [
    /* @__PURE__ */ E.jsx(fe.div, { style: {
      ...f,
      display: "inline-block",
      position: "absolute",
      backgroundColor: "white"
    } }),
    /* @__PURE__ */ E.jsx("div", { style: { display: "inline-block", fontFamily: "'DotGothic16'" }, children: t.children })
  ] });
}), YP = (t) => {
  const [e, n] = S.useState([1e3, 300]), r = S.useState(!0), i = S.useState(0), o = S.useState(0), l = Df({
    rootMargin: "2px",
    triggerOnce: !1
  });
  S.useEffect(() => {
    screen.availWidth < 500 || window.innerWidth < 500 ? (r[1](!0), n([window.innerWidth * 1, window.innerHeight * 0.6]), i[1](0), o[1](window.innerHeight / 2 - window.innerHeight * 0.6 / 2)) : (r[1](!1), n([window.innerWidth / 2 - 240, window.innerHeight / 2]), i[1](150), o[1](window.innerHeight / 2 - window.innerHeight / 2 / 2));
  }, []);
  const a = t.lr == "L" ? { left: `${i[0]}px` } : t.lr == "R" ? { right: `${i[0]}px` } : {}, s = t.children.slice(0, 4).map((d, p) => /* @__PURE__ */ E.jsx(J1, { fontsize: 0.5, i: p, title: d.title, link: d.link }));
  t.children.slice(2).map((d, p) => /* @__PURE__ */ E.jsx(J1, { fontsize: 0.9, i: p, title: d.title, link: d.link }));
  const u = se(() => ({
    from: { backgroundSize: "50px", backgroundPosition: "0px 0px" },
    to: { backgroundSize: "50.5px", backgroundPosition: "-1px -1px" },
    loop: { reverse: !0 },
    config: { duration: 2e3 }
  })), c = {
    opacity: 1,
    paddingTop: "1em",
    overflow: "visible",
    boxSizing: "border-box",
    zIndex: 1,
    display: "inline-block",
    position: "relative",
    boxShadow: "1px 3px 5px black",
    borderRadius: "10px",
    color: "rgba(113, 36, 0,1)",
    width: "100%",
    height: "100%",
    textAlign: "center"
  }, f = {
    paddingTop: "0px",
    textAlign: "center",
    boxSizing: "border-box",
    backgroundColor: "rgba(220,220,220,1)",
    width: r[0] ? "99%" : "95%",
    display: "inline-block",
    opacity: 1
  };
  return /* @__PURE__ */ E.jsxs(fe.div, { ref: l.ref, className: "updatelog", style: {
    ...c,
    ...u[0],
    ...a
  }, children: [
    /* @__PURE__ */ E.jsx(fe.div, { style: {
      position: "absolute",
      textAlign: "left",
      top: r[0] ? "-0.5em" : "-5px",
      left: r[0] ? "0.1em" : "1em",
      leftdd: "1em",
      boxSizing: "border-box",
      padding: "10px",
      fontSize: r[0] ? "1em" : "0.6em",
      color: "white",
      fontFamily: "'Kosugi Maru'"
    }, children: /* @__PURE__ */ E.jsx(d2, { fadestate: [l[1], null], basedelay: 500, children: "-Update Log-" }) }),
    /* @__PURE__ */ E.jsx("div", { style: { ...f, height: "75%", paddingTop: "0.4em", overflowY: "scroll" }, children: s }),
    /* @__PURE__ */ E.jsx(fe.div, { style: {
      backgroundColor: "rgba(200,90,90,1)",
      boxSizing: "border-box",
      padding: "8px",
      fontSize: r[0] ? "1.2em" : "0.5em",
      color: "rgba(100,100,100,1)",
      WebkitTextStrokeColor: "rgba(220,220,220,1)",
      fontFamily: "'Kosugi Maru'"
    }, children: "残りのログ" }),
    /* @__PURE__ */ E.jsx(fe.div, { style: { position: "relative", top: "0" } })
  ] });
}, J1 = (t) => {
  const e = S.useRef(null), n = S.useState(!0), r = S.useState(!1), i = se(() => ({
    from: { transform: "scale(1,1)", backgroundColor: "rgba(220,220,220,1)" },
    config: {
      duration: 200
    }
  }));
  var o = null;
  const l = S.useCallback(() => {
    r[1](!0), i[1]({ transform: "scale(1.2,1.2)", backgroundColor: "white" }), o = window.setTimeout(() => {
    }, 250);
  }), a = S.useCallback(() => {
    clearTimeout(o), r[1](!1), i[1]({ delay: 1e3, transform: "scale(1,1)", backgroundColor: "rgba(220,220,220,1)" });
  });
  return S.useEffect(() => {
    screen.availWidth < 500 || window.innerWidth < 500 ? (n[1](!0), e.current.addEventListener("touchstart", () => {
      l();
    }), e.current.addEventListener("touchend", () => {
      a();
    })) : (n[1](!1), e.current.addEventListener("click", () => {
    }), e.current.addEventListener("mouseenter", () => {
      l();
    }), e.current.addEventListener("mouseleave", () => {
      a();
    }));
  }, []), /* @__PURE__ */ E.jsx(fe.div, { ref: e, style: {
    //,...hovanime[0]
    textAlign: "left",
    width: (n[0], "100%"),
    height: "200px",
    zIndex: -t.i + 10,
    position: "relative",
    userSelect: "none",
    borderTop: "dashed 2px green",
    paddingTop: "20px",
    paddingBottom: "20px",
    borderBottom: "dashed 2px green",
    display: "inline-block",
    overflow: "hidden"
  }, children: /* @__PURE__ */ E.jsxs("div", { style: {
    fontFamily: "'DotGothic16'",
    whiteSpace: "nowrap",
    height: "100%",
    width: "100%",
    backgroundColor: "",
    overflowWrap: "break-word;",
    boxSizing: "border-box",
    display: "block",
    fontSize: `${n[0] ? t.fontsize * 0.6 : t.fontsize}em`
  }, children: [
    /* @__PURE__ */ E.jsx("div", { style: {
      display: "inline-block",
      width: "45%",
      height: "100%",
      verticalAlign: "middle",
      backgroundColor: "red",
      backgroundPosition: "50%",
      backgroundSize: "cover",
      backgroundImage: 'url("https://www.shoshinsha-design.com/wp-content/uploads/2020/05/noimage-760x460.png")',
      marginLeft: "5px",
      marginRight: "15px",
      overflow: "hidden"
    } }),
    /* @__PURE__ */ E.jsx(XP, { text: t.title })
  ] }, `key${t.i}`) });
}, XP = (t) => {
  const e = S.useState(!1), n = S.useState(!0), r = se(
    {
      color: e[0] ? "blue" : "black",
      config: {
        duration: 1e3
      }
    }
  ), i = t.text.length > 30 ? Array.from(t.text).slice(0, 60).join("") + "..." : t.text;
  return S.useEffect(() => {
    screen.availWidth < 500 || window.innerWidth < 500 ? n[1](!0) : n[1](!1);
  }, []), /* @__PURE__ */ E.jsx(fe.div, { style: {
    ...r,
    maxHeight: "100%",
    lineHeight: n[0] ? "2em" : "1.5em",
    fontSize: n[0] ? "2em" : "1.5em",
    verticalAlign: "middle",
    textDecoration: "none",
    display: "inline-block",
    width: "50%",
    paddingRight: "0px",
    overflow: "hidden",
    overflowWrap: "break-word",
    whiteSpace: "normal"
  }, children: i });
};
yi.registerPlugin(me);
const ev = S.createContext(null), tv = (t) => {
  const e = S.useState(!1);
  S.useState(!1);
  const n = S.useRef(null);
  var r = window.innerWidth;
  S.useEffect(() => {
    console.log("読み込み開始：CoolBox"), window.addEventListener("mouseover", (l) => {
    }), window.addEventListener("resize", () => {
      r == window.innerWidth || (r = window.innerWidth, window.location.reload());
    }), screen.availWidth < 500 || window.innerHeight < 500 ? e[1](!0) : e[1](!1);
  }, []);
  const i = [
    { link: "/", title: "サイトオープン" },
    { link: "/", title: "サイト2オープン" },
    { link: "/", title: "サイト3オープン" },
    { link: "/", title: "" }
  ], o = S.useRef(null);
  return S.useContext(ev), /* @__PURE__ */ E.jsx(ev.Provider, { value: { viewent: o }, children: /* @__PURE__ */ E.jsxs("div", { className: "base", ref: n, style: { overflow: "hidden", padding: "0px", margin: "0px", textAlign: "center" }, children: [
    /* @__PURE__ */ E.jsx(h2, { phonestate: e }),
    /* @__PURE__ */ E.jsx(IP, { phonestate: e }),
    /* @__PURE__ */ E.jsxs(QP, { className: "aboutcomp2", children: [
      /* @__PURE__ */ E.jsx(WP, { ref: o, lr: "L" }),
      /* @__PURE__ */ E.jsx(HP, { lr: "R", setfunc: o })
    ] }),
    /* @__PURE__ */ E.jsx(FP, { phonestate: e, className: "aboutcomp" }),
    /* @__PURE__ */ E.jsxs(UP, { phonestate: e, className: "productcomp4", children: [
      /* @__PURE__ */ E.jsx(GP, { ht: "800", delay: 200, children: /* @__PURE__ */ E.jsx(YP, { lr: "F", children: i }) }),
      /* @__PURE__ */ E.jsx(AP, { width: "", children: " " })
    ] }),
    /* @__PURE__ */ E.jsx("style", { children: `
   @import url('https://fonts.googleapis.com/css?family=Bungee+Shade');
   @import url('https://fonts.googleapis.com/css?family=DotGothic16');
   @import url('https://fonts.googleapis.com/css?family=Kosugi Maru');
   @import url('https://fonts.googleapis.com/css?family=Kiwi+Maru');

   .aabbcc&::-webkit-scrollbar{
  display: none;
  -webkit-appearance: none;
  }
  .aabbcc{
  -webkit-overflow-scrolling: touch;
  overflow-scrolling: touch;
}

` })
  ] }) });
}, GP = (t) => {
  const e = t.hasOwnProperty("paddingtop") ? t.paddingtop : 0, n = t.hasOwnProperty("paddingbottom") ? t.paddingbottom : 0, r = Df({
    rootMarginLeft: "1000px",
    threshold: 0.2,
    triggerOnce: !0
  }), i = se({
    opacity: r.inView ? 1 : 0,
    x: r.inView ? 0 : -40,
    delay: t.delay,
    config: { duration: 700 }
  });
  return /* @__PURE__ */ E.jsx(fe.div, { ref: r.ref, style: {
    ...i,
    paddingTop: `${e}px`,
    paddingBottom: `${n}px`,
    fontSize: "2em",
    color: "white",
    fontFamily: "'Kiwi Maru','serif','DotGothic16'",
    width: "100%",
    height: `${t.ht}px`,
    backgroundColor: "rgba(1,1,1,0.001)",
    overflow: "hidden"
  }, children: t.children });
}, QP = (t) => {
  const n = S.useRef(null);
  S.useState(!1);
  const r = () => {
    yi.timeline({
      scrollTrigger: {
        trigger: n.current,
        start: "center center",
        end: "+=100",
        //end: "top bottom", 
        scrub: !0,
        pin: !0
      }
    });
  };
  return S.useEffect(() => {
    console.log("読み込み開始：Hikitsuke"), window.setTimeout(() => {
      r();
    }, 300), console.log("読み込みend：Hikitsuke");
  }, []), se({
    from: { x: 2 * 100 * 3.14 },
    to: { x: 0 },
    loop: !0,
    config: { duration: 3e3 }
  }), /* @__PURE__ */ E.jsx(E.Fragment, { children: /* @__PURE__ */ E.jsx("div", { ref: n, className: t.className + " Hiki3", style: { width: "100vw", height: "100vh", backgroundColor: "rgba(100,100,100,.9)", position: "relative", zIndex: 1 }, children: t.children }) });
};
/**
 * @remix-run/router v1.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function st() {
  return st = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, st.apply(this, arguments);
}
var dt;
(function(t) {
  t.Pop = "POP", t.Push = "PUSH", t.Replace = "REPLACE";
})(dt || (dt = {}));
const nv = "popstate";
function qP(t) {
  t === void 0 && (t = {});
  function e(r, i) {
    let {
      pathname: o,
      search: l,
      hash: a
    } = r.location;
    return $s(
      "",
      {
        pathname: o,
        search: l,
        hash: a
      },
      // state defaults to `null` because `window.history.state` does
      i.state && i.state.usr || null,
      i.state && i.state.key || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : qs(i);
  }
  return ZP(e, n, null, t);
}
function Pe(t, e) {
  if (t === !1 || t === null || typeof t > "u")
    throw new Error(e);
}
function Yo(t, e) {
  if (!t) {
    typeof console < "u" && console.warn(e);
    try {
      throw new Error(e);
    } catch {
    }
  }
}
function KP() {
  return Math.random().toString(36).substr(2, 8);
}
function rv(t, e) {
  return {
    usr: t.state,
    key: t.key,
    idx: e
  };
}
function $s(t, e, n, r) {
  return n === void 0 && (n = null), st({
    pathname: typeof t == "string" ? t : t.pathname,
    search: "",
    hash: ""
  }, typeof e == "string" ? wi(e) : e, {
    state: n,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: e && e.key || r || KP()
  });
}
function qs(t) {
  let {
    pathname: e = "/",
    search: n = "",
    hash: r = ""
  } = t;
  return n && n !== "?" && (e += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (e += r.charAt(0) === "#" ? r : "#" + r), e;
}
function wi(t) {
  let e = {};
  if (t) {
    let n = t.indexOf("#");
    n >= 0 && (e.hash = t.substr(n), t = t.substr(0, n));
    let r = t.indexOf("?");
    r >= 0 && (e.search = t.substr(r), t = t.substr(0, r)), t && (e.pathname = t);
  }
  return e;
}
function ZP(t, e, n, r) {
  r === void 0 && (r = {});
  let {
    window: i = document.defaultView,
    v5Compat: o = !1
  } = r, l = i.history, a = dt.Pop, s = null, u = c();
  u == null && (u = 0, l.replaceState(st({}, l.state, {
    idx: u
  }), ""));
  function c() {
    return (l.state || {
      idx: null
    }).idx;
  }
  function f() {
    a = dt.Pop;
    let y = c(), g = y == null ? null : y - u;
    u = y, s && s({
      action: a,
      location: h.location,
      delta: g
    });
  }
  function d(y, g) {
    a = dt.Push;
    let v = $s(h.location, y, g);
    n && n(v, y), u = c() + 1;
    let _ = rv(v, u), w = h.createHref(v);
    try {
      l.pushState(_, "", w);
    } catch (T) {
      if (T instanceof DOMException && T.name === "DataCloneError")
        throw T;
      i.location.assign(w);
    }
    o && s && s({
      action: a,
      location: h.location,
      delta: 1
    });
  }
  function p(y, g) {
    a = dt.Replace;
    let v = $s(h.location, y, g);
    n && n(v, y), u = c();
    let _ = rv(v, u), w = h.createHref(v);
    l.replaceState(_, "", w), o && s && s({
      action: a,
      location: h.location,
      delta: 0
    });
  }
  function m(y) {
    let g = i.location.origin !== "null" ? i.location.origin : i.location.href, v = typeof y == "string" ? y : qs(y);
    return Pe(g, "No window.location.(origin|href) available to create URL for href: " + v), new URL(v, g);
  }
  let h = {
    get action() {
      return a;
    },
    get location() {
      return t(i, l);
    },
    listen(y) {
      if (s)
        throw new Error("A history only accepts one active listener");
      return i.addEventListener(nv, f), s = y, () => {
        i.removeEventListener(nv, f), s = null;
      };
    },
    createHref(y) {
      return e(i, y);
    },
    createURL: m,
    encodeLocation(y) {
      let g = m(y);
      return {
        pathname: g.pathname,
        search: g.search,
        hash: g.hash
      };
    },
    push: d,
    replace: p,
    go(y) {
      return l.go(y);
    }
  };
  return h;
}
var lt;
(function(t) {
  t.data = "data", t.deferred = "deferred", t.redirect = "redirect", t.error = "error";
})(lt || (lt = {}));
const JP = /* @__PURE__ */ new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function e3(t) {
  return t.index === !0;
}
function xp(t, e, n, r) {
  return n === void 0 && (n = []), r === void 0 && (r = {}), t.map((i, o) => {
    let l = [...n, o], a = typeof i.id == "string" ? i.id : l.join("-");
    if (Pe(i.index !== !0 || !i.children, "Cannot specify children on an index route"), Pe(!r[a], 'Found a route id collision on id "' + a + `".  Route id's must be globally unique within Data Router usages`), e3(i)) {
      let s = st({}, i, e(i), {
        id: a
      });
      return r[a] = s, s;
    } else {
      let s = st({}, i, e(i), {
        id: a,
        children: void 0
      });
      return r[a] = s, i.children && (s.children = xp(i.children, e, l, r)), s;
    }
  });
}
function xl(t, e, n) {
  n === void 0 && (n = "/");
  let r = typeof e == "string" ? wi(e) : e, i = Ks(r.pathname || "/", n);
  if (i == null)
    return null;
  let o = m2(t);
  n3(o);
  let l = null;
  for (let a = 0; l == null && a < o.length; ++a)
    l = f3(
      o[a],
      // Incoming pathnames are generally encoded from either window.location
      // or from router.navigate, but we want to match against the unencoded
      // paths in the route definitions.  Memory router locations won't be
      // encoded here but there also shouldn't be anything to decode so this
      // should be a safe operation.  This avoids needing matchRoutes to be
      // history-aware.
      p3(i)
    );
  return l;
}
function t3(t, e) {
  let {
    route: n,
    pathname: r,
    params: i
  } = t;
  return {
    id: n.id,
    pathname: r,
    params: i,
    data: e[n.id],
    handle: n.handle
  };
}
function m2(t, e, n, r) {
  e === void 0 && (e = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, l, a) => {
    let s = {
      relativePath: a === void 0 ? o.path || "" : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: l,
      route: o
    };
    s.relativePath.startsWith("/") && (Pe(s.relativePath.startsWith(r), 'Absolute route path "' + s.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), s.relativePath = s.relativePath.slice(r.length));
    let u = Lo([r, s.relativePath]), c = n.concat(s);
    o.children && o.children.length > 0 && (Pe(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      o.index !== !0,
      "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')
    ), m2(o.children, e, c, u)), !(o.path == null && !o.index) && e.push({
      path: u,
      score: u3(u, o.index),
      routesMeta: c
    });
  };
  return t.forEach((o, l) => {
    var a;
    if (o.path === "" || !((a = o.path) != null && a.includes("?")))
      i(o, l);
    else
      for (let s of g2(o.path))
        i(o, l, s);
  }), e;
}
function g2(t) {
  let e = t.split("/");
  if (e.length === 0)
    return [];
  let [n, ...r] = e, i = n.endsWith("?"), o = n.replace(/\?$/, "");
  if (r.length === 0)
    return i ? [o, ""] : [o];
  let l = g2(r.join("/")), a = [];
  return a.push(...l.map((s) => s === "" ? o : [o, s].join("/"))), i && a.push(...l), a.map((s) => t.startsWith("/") && s === "" ? "/" : s);
}
function n3(t) {
  t.sort((e, n) => e.score !== n.score ? n.score - e.score : c3(e.routesMeta.map((r) => r.childrenIndex), n.routesMeta.map((r) => r.childrenIndex)));
}
const r3 = /^:[\w-]+$/, i3 = 3, o3 = 2, l3 = 1, a3 = 10, s3 = -2, iv = (t) => t === "*";
function u3(t, e) {
  let n = t.split("/"), r = n.length;
  return n.some(iv) && (r += s3), e && (r += o3), n.filter((i) => !iv(i)).reduce((i, o) => i + (r3.test(o) ? i3 : o === "" ? l3 : a3), r);
}
function c3(t, e) {
  return t.length === e.length && t.slice(0, -1).every((r, i) => r === e[i]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    t[t.length - 1] - e[e.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function f3(t, e) {
  let {
    routesMeta: n
  } = t, r = {}, i = "/", o = [];
  for (let l = 0; l < n.length; ++l) {
    let a = n[l], s = l === n.length - 1, u = i === "/" ? e : e.slice(i.length) || "/", c = d3({
      path: a.relativePath,
      caseSensitive: a.caseSensitive,
      end: s
    }, u);
    if (!c)
      return null;
    Object.assign(r, c.params);
    let f = a.route;
    o.push({
      // TODO: Can this as be avoided?
      params: r,
      pathname: Lo([i, c.pathname]),
      pathnameBase: w3(Lo([i, c.pathnameBase])),
      route: f
    }), c.pathnameBase !== "/" && (i = Lo([i, c.pathnameBase]));
  }
  return o;
}
function d3(t, e) {
  typeof t == "string" && (t = {
    path: t,
    caseSensitive: !1,
    end: !0
  });
  let [n, r] = h3(t.path, t.caseSensitive, t.end), i = e.match(n);
  if (!i)
    return null;
  let o = i[0], l = o.replace(/(.)\/+$/, "$1"), a = i.slice(1);
  return {
    params: r.reduce((u, c, f) => {
      let {
        paramName: d,
        isOptional: p
      } = c;
      if (d === "*") {
        let h = a[f] || "";
        l = o.slice(0, o.length - h.length).replace(/(.)\/+$/, "$1");
      }
      const m = a[f];
      return p && !m ? u[d] = void 0 : u[d] = m3(m || "", d), u;
    }, {}),
    pathname: o,
    pathnameBase: l,
    pattern: t
  };
}
function h3(t, e, n) {
  e === void 0 && (e = !1), n === void 0 && (n = !0), Yo(t === "*" || !t.endsWith("*") || t.endsWith("/*"), 'Route path "' + t + '" will be treated as if it were ' + ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + t.replace(/\*$/, "/*") + '".'));
  let r = [], i = "^" + t.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (l, a, s) => (r.push({
    paramName: a,
    isOptional: s != null
  }), s ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return t.endsWith("*") ? (r.push({
    paramName: "*"
  }), i += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : t !== "" && t !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, e ? void 0 : "i"), r];
}
function p3(t) {
  try {
    return decodeURI(t);
  } catch (e) {
    return Yo(!1, 'The URL path "' + t + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + e + ").")), t;
  }
}
function m3(t, e) {
  try {
    return decodeURIComponent(t);
  } catch (n) {
    return Yo(!1, 'The value for the URL param "' + e + '" will not be decoded because' + (' the string "' + t + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + n + ").")), t;
  }
}
function Ks(t, e) {
  if (e === "/")
    return t;
  if (!t.toLowerCase().startsWith(e.toLowerCase()))
    return null;
  let n = e.endsWith("/") ? e.length - 1 : e.length, r = t.charAt(n);
  return r && r !== "/" ? null : t.slice(n) || "/";
}
function g3(t, e) {
  e === void 0 && (e = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = ""
  } = typeof t == "string" ? wi(t) : t;
  return {
    pathname: n ? n.startsWith("/") ? n : v3(n, e) : e,
    search: x3(r),
    hash: S3(i)
  };
}
function v3(t, e) {
  let n = e.replace(/\/+$/, "").split("/");
  return t.split("/").forEach((i) => {
    i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
  }), n.length > 1 ? n.join("/") : "/";
}
function jd(t, e, n, r) {
  return "Cannot include a '" + t + "' character in a manually specified " + ("`to." + e + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function v2(t) {
  return t.filter((e, n) => n === 0 || e.route.path && e.route.path.length > 0);
}
function y3(t, e) {
  let n = v2(t);
  return e ? n.map((r, i) => i === t.length - 1 ? r.pathname : r.pathnameBase) : n.map((r) => r.pathnameBase);
}
function _3(t, e, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof t == "string" ? i = wi(t) : (i = st({}, t), Pe(!i.pathname || !i.pathname.includes("?"), jd("?", "pathname", "search", i)), Pe(!i.pathname || !i.pathname.includes("#"), jd("#", "pathname", "hash", i)), Pe(!i.search || !i.search.includes("#"), jd("#", "search", "hash", i)));
  let o = t === "" || i.pathname === "", l = o ? "/" : i.pathname, a;
  if (l == null)
    a = n;
  else {
    let f = e.length - 1;
    if (!r && l.startsWith("..")) {
      let d = l.split("/");
      for (; d[0] === ".."; )
        d.shift(), f -= 1;
      i.pathname = d.join("/");
    }
    a = f >= 0 ? e[f] : "/";
  }
  let s = g3(i, a), u = l && l !== "/" && l.endsWith("/"), c = (o || l === ".") && n.endsWith("/");
  return !s.pathname.endsWith("/") && (u || c) && (s.pathname += "/"), s;
}
const Lo = (t) => t.join("/").replace(/\/\/+/g, "/"), w3 = (t) => t.replace(/\/+$/, "").replace(/^\/*/, "/"), x3 = (t) => !t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t, S3 = (t) => !t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t;
class ym {
  constructor(e, n, r, i) {
    i === void 0 && (i = !1), this.status = e, this.statusText = n || "", this.internal = i, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r;
  }
}
function y2(t) {
  return t != null && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.internal == "boolean" && "data" in t;
}
const _2 = ["post", "put", "patch", "delete"], k3 = new Set(_2), E3 = ["get", ..._2], C3 = new Set(E3), T3 = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]), b3 = /* @__PURE__ */ new Set([307, 308]), $d = {
  state: "idle",
  location: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
}, P3 = {
  state: "idle",
  data: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
}, ya = {
  state: "unblocked",
  proceed: void 0,
  reset: void 0,
  location: void 0
}, w2 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, R3 = (t) => ({
  hasErrorBoundary: !!t.hasErrorBoundary
}), x2 = "remix-router-transitions";
function M3(t) {
  const e = t.window ? t.window : typeof window < "u" ? window : void 0, n = typeof e < "u" && typeof e.document < "u" && typeof e.document.createElement < "u", r = !n;
  Pe(t.routes.length > 0, "You must provide a non-empty routes array to createRouter");
  let i;
  if (t.mapRouteProperties)
    i = t.mapRouteProperties;
  else if (t.detectErrorBoundary) {
    let P = t.detectErrorBoundary;
    i = (O) => ({
      hasErrorBoundary: P(O)
    });
  } else
    i = R3;
  let o = {}, l = xp(t.routes, i, void 0, o), a, s = t.basename || "/", u = st({
    v7_fetcherPersist: !1,
    v7_normalizeFormMethod: !1,
    v7_partialHydration: !1,
    v7_prependBasename: !1,
    v7_relativeSplatPath: !1
  }, t.future), c = null, f = /* @__PURE__ */ new Set(), d = null, p = null, m = null, h = t.hydrationData != null, y = xl(l, t.history.location, s), g = null;
  if (y == null) {
    let P = Kn(404, {
      pathname: t.history.location.pathname
    }), {
      matches: O,
      route: L
    } = dv(l);
    y = O, g = {
      [L.id]: P
    };
  }
  let v, _ = y.some((P) => P.route.lazy), w = y.some((P) => P.route.loader);
  if (_)
    v = !1;
  else if (!w)
    v = !0;
  else if (u.v7_partialHydration) {
    let P = t.hydrationData ? t.hydrationData.loaderData : null, O = t.hydrationData ? t.hydrationData.errors : null;
    v = y.every((L) => L.route.loader && L.route.loader.hydrate !== !0 && (P && P[L.route.id] !== void 0 || O && O[L.route.id] !== void 0));
  } else
    v = t.hydrationData != null;
  let T, x = {
    historyAction: t.history.action,
    location: t.history.location,
    matches: y,
    initialized: v,
    navigation: $d,
    // Don't restore on initial updateState() if we were SSR'd
    restoreScrollPosition: t.hydrationData != null ? !1 : null,
    preventScrollReset: !1,
    revalidation: "idle",
    loaderData: t.hydrationData && t.hydrationData.loaderData || {},
    actionData: t.hydrationData && t.hydrationData.actionData || null,
    errors: t.hydrationData && t.hydrationData.errors || g,
    fetchers: /* @__PURE__ */ new Map(),
    blockers: /* @__PURE__ */ new Map()
  }, k = dt.Pop, b = !1, R, M = !1, B = /* @__PURE__ */ new Map(), I = null, te = !1, z = !1, Y = [], ne = [], V = /* @__PURE__ */ new Map(), A = 0, U = -1, C = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Set(), oe = /* @__PURE__ */ new Map(), We = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Set(), de = /* @__PURE__ */ new Map(), ge = /* @__PURE__ */ new Map(), he = !1;
  function rt() {
    if (c = t.history.listen((P) => {
      let {
        action: O,
        location: L,
        delta: H
      } = P;
      if (he) {
        he = !1;
        return;
      }
      Yo(ge.size === 0 || H != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
      let j = Dr({
        currentLocation: x.location,
        nextLocation: L,
        historyAction: O
      });
      if (j && H != null) {
        he = !0, t.history.go(H * -1), gr(j, {
          state: "blocked",
          location: L,
          proceed() {
            gr(j, {
              state: "proceeding",
              proceed: void 0,
              reset: void 0,
              location: L
            }), t.history.go(H);
          },
          reset() {
            let W = new Map(x.blockers);
            W.set(j, ya), Ae({
              blockers: W
            });
          }
        });
        return;
      }
      return ot(O, L);
    }), n) {
      U3(e, B);
      let P = () => B3(e, B);
      e.addEventListener("pagehide", P), I = () => e.removeEventListener("pagehide", P);
    }
    return x.initialized || ot(dt.Pop, x.location, {
      initialHydration: !0
    }), T;
  }
  function je() {
    c && c(), I && I(), f.clear(), R && R.abort(), x.fetchers.forEach((P, O) => $t(O)), x.blockers.forEach((P, O) => Zr(O));
  }
  function fn(P) {
    return f.add(P), () => f.delete(P);
  }
  function Ae(P, O) {
    O === void 0 && (O = {}), x = st({}, x, P);
    let L = [], H = [];
    u.v7_fetcherPersist && x.fetchers.forEach((j, W) => {
      j.state === "idle" && (ue.has(W) ? H.push(W) : L.push(W));
    }), [...f].forEach((j) => j(x, {
      deletedFetchers: H,
      unstable_viewTransitionOpts: O.viewTransitionOpts,
      unstable_flushSync: O.flushSync === !0
    })), u.v7_fetcherPersist && (L.forEach((j) => x.fetchers.delete(j)), H.forEach((j) => $t(j)));
  }
  function jt(P, O, L) {
    var H, j;
    let {
      flushSync: W
    } = L === void 0 ? {} : L, X = x.actionData != null && x.navigation.formMethod != null && xr(x.navigation.formMethod) && x.navigation.state === "loading" && ((H = P.state) == null ? void 0 : H._isRedirect) !== !0, Q;
    O.actionData ? Object.keys(O.actionData).length > 0 ? Q = O.actionData : Q = null : X ? Q = x.actionData : Q = null;
    let N = O.loaderData ? fv(x.loaderData, O.loaderData, O.matches || [], O.errors) : x.loaderData, q = x.blockers;
    q.size > 0 && (q = new Map(q), q.forEach((le, ie) => q.set(ie, ya)));
    let K = b === !0 || x.navigation.formMethod != null && xr(x.navigation.formMethod) && ((j = P.state) == null ? void 0 : j._isRedirect) !== !0;
    a && (l = a, a = void 0), te || k === dt.Pop || (k === dt.Push ? t.history.push(P, P.state) : k === dt.Replace && t.history.replace(P, P.state));
    let G;
    if (k === dt.Pop) {
      let le = B.get(x.location.pathname);
      le && le.has(P.pathname) ? G = {
        currentLocation: x.location,
        nextLocation: P
      } : B.has(P.pathname) && (G = {
        currentLocation: P,
        nextLocation: x.location
      });
    } else if (M) {
      let le = B.get(x.location.pathname);
      le ? le.add(P.pathname) : (le = /* @__PURE__ */ new Set([P.pathname]), B.set(x.location.pathname, le)), G = {
        currentLocation: x.location,
        nextLocation: P
      };
    }
    Ae(st({}, O, {
      actionData: Q,
      loaderData: N,
      historyAction: k,
      location: P,
      initialized: !0,
      navigation: $d,
      revalidation: "idle",
      restoreScrollPosition: hn(P, O.matches || x.matches),
      preventScrollReset: K,
      blockers: q
    }), {
      viewTransitionOpts: G,
      flushSync: W === !0
    }), k = dt.Pop, b = !1, M = !1, te = !1, z = !1, Y = [], ne = [];
  }
  async function xe(P, O) {
    if (typeof P == "number") {
      t.history.go(P);
      return;
    }
    let L = Sp(x.location, x.matches, s, u.v7_prependBasename, P, u.v7_relativeSplatPath, O == null ? void 0 : O.fromRouteId, O == null ? void 0 : O.relative), {
      path: H,
      submission: j,
      error: W
    } = ov(u.v7_normalizeFormMethod, !1, L, O), X = x.location, Q = $s(x.location, H, O && O.state);
    Q = st({}, Q, t.history.encodeLocation(Q));
    let N = O && O.replace != null ? O.replace : void 0, q = dt.Push;
    N === !0 ? q = dt.Replace : N === !1 || j != null && xr(j.formMethod) && j.formAction === x.location.pathname + x.location.search && (q = dt.Replace);
    let K = O && "preventScrollReset" in O ? O.preventScrollReset === !0 : void 0, G = (O && O.unstable_flushSync) === !0, le = Dr({
      currentLocation: X,
      nextLocation: Q,
      historyAction: q
    });
    if (le) {
      gr(le, {
        state: "blocked",
        location: Q,
        proceed() {
          gr(le, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: Q
          }), xe(P, O);
        },
        reset() {
          let ie = new Map(x.blockers);
          ie.set(le, ya), Ae({
            blockers: ie
          });
        }
      });
      return;
    }
    return await ot(q, Q, {
      submission: j,
      // Send through the formData serialization error if we have one so we can
      // render at the right error boundary after we match routes
      pendingError: W,
      preventScrollReset: K,
      replace: O && O.replace,
      enableViewTransition: O && O.unstable_viewTransition,
      flushSync: G
    });
  }
  function it() {
    if (mr(), Ae({
      revalidation: "loading"
    }), x.navigation.state !== "submitting") {
      if (x.navigation.state === "idle") {
        ot(x.historyAction, x.location, {
          startUninterruptedRevalidation: !0
        });
        return;
      }
      ot(k || x.historyAction, x.navigation.location, {
        overrideNavigation: x.navigation
      });
    }
  }
  async function ot(P, O, L) {
    R && R.abort(), R = null, k = P, te = (L && L.startUninterruptedRevalidation) === !0, Jr(x.location, x.matches), b = (L && L.preventScrollReset) === !0, M = (L && L.enableViewTransition) === !0;
    let H = a || l, j = L && L.overrideNavigation, W = xl(H, O, s), X = (L && L.flushSync) === !0;
    if (!W) {
      let ie = Kn(404, {
        pathname: O.pathname
      }), {
        matches: Ce,
        route: Te
      } = dv(H);
      Xn(), jt(O, {
        matches: Ce,
        loaderData: {},
        errors: {
          [Te.id]: ie
        }
      }, {
        flushSync: X
      });
      return;
    }
    if (x.initialized && !z && N3(x.location, O) && !(L && L.submission && xr(L.submission.formMethod))) {
      jt(O, {
        matches: W
      }, {
        flushSync: X
      });
      return;
    }
    R = new AbortController();
    let Q = wa(t.history, O, R.signal, L && L.submission), N, q;
    if (L && L.pendingError)
      q = {
        [os(W).route.id]: L.pendingError
      };
    else if (L && L.submission && xr(L.submission.formMethod)) {
      let ie = await Qt(Q, O, L.submission, W, {
        replace: L.replace,
        flushSync: X
      });
      if (ie.shortCircuited)
        return;
      N = ie.pendingActionData, q = ie.pendingActionError, j = Fd(O, L.submission), X = !1, Q = new Request(Q.url, {
        signal: Q.signal
      });
    }
    let {
      shortCircuited: K,
      loaderData: G,
      errors: le
    } = await D(Q, O, W, j, L && L.submission, L && L.fetcherSubmission, L && L.replace, L && L.initialHydration === !0, X, N, q);
    K || (R = null, jt(O, st({
      matches: W
    }, N ? {
      actionData: N
    } : {}, {
      loaderData: G,
      errors: le
    })));
  }
  async function Qt(P, O, L, H, j) {
    j === void 0 && (j = {}), mr();
    let W = $3(O, L);
    Ae({
      navigation: W
    }, {
      flushSync: j.flushSync === !0
    });
    let X, Q = Ep(H, O);
    if (!Q.route.action && !Q.route.lazy)
      X = {
        type: lt.error,
        error: Kn(405, {
          method: P.method,
          pathname: O.pathname,
          routeId: Q.route.id
        })
      };
    else if (X = await _a("action", P, Q, H, o, i, s, u.v7_relativeSplatPath), P.signal.aborted)
      return {
        shortCircuited: !0
      };
    if (Eo(X)) {
      let N;
      return j && j.replace != null ? N = j.replace : N = X.location === x.location.pathname + x.location.search, await $e(x, X, {
        submission: L,
        replace: N
      }), {
        shortCircuited: !0
      };
    }
    if (Sl(X)) {
      let N = os(H, Q.route.id);
      return (j && j.replace) !== !0 && (k = dt.Push), {
        // Send back an empty object we can use to clear out any prior actionData
        pendingActionData: {},
        pendingActionError: {
          [N.route.id]: X.error
        }
      };
    }
    if (ko(X))
      throw Kn(400, {
        type: "defer-action"
      });
    return {
      pendingActionData: {
        [Q.route.id]: X.data
      }
    };
  }
  async function D(P, O, L, H, j, W, X, Q, N, q, K) {
    let G = H || Fd(O, j), le = j || W || mv(G), ie = a || l, [Ce, Te] = lv(t.history, x, L, le, O, u.v7_partialHydration && Q === !0, z, Y, ne, ue, oe, re, ie, s, q, K);
    if (Xn((Se) => !(L && L.some((Oe) => Oe.route.id === Se)) || Ce && Ce.some((Oe) => Oe.route.id === Se)), U = ++A, Ce.length === 0 && Te.length === 0) {
      let Se = Mn();
      return jt(O, st({
        matches: L,
        loaderData: {},
        // Commit pending error if we're short circuiting
        errors: K || null
      }, q ? {
        actionData: q
      } : {}, Se ? {
        fetchers: new Map(x.fetchers)
      } : {}), {
        flushSync: N
      }), {
        shortCircuited: !0
      };
    }
    if (!te && (!u.v7_partialHydration || !Q)) {
      Te.forEach((Oe) => {
        let Ne = x.fetchers.get(Oe.key), Ge = xa(void 0, Ne ? Ne.data : void 0);
        x.fetchers.set(Oe.key, Ge);
      });
      let Se = q || x.actionData;
      Ae(st({
        navigation: G
      }, Se ? Object.keys(Se).length === 0 ? {
        actionData: null
      } : {
        actionData: Se
      } : {}, Te.length > 0 ? {
        fetchers: new Map(x.fetchers)
      } : {}), {
        flushSync: N
      });
    }
    Te.forEach((Se) => {
      V.has(Se.key) && Ft(Se.key), Se.controller && V.set(Se.key, Se.controller);
    });
    let Ye = () => Te.forEach((Se) => Ft(Se.key));
    R && R.signal.addEventListener("abort", Ye);
    let {
      results: Le,
      loaderResults: be,
      fetcherResults: mt
    } = await Or(x.matches, L, Ce, Te, P);
    if (P.signal.aborted)
      return {
        shortCircuited: !0
      };
    R && R.signal.removeEventListener("abort", Ye), Te.forEach((Se) => V.delete(Se.key));
    let Me = hv(Le);
    if (Me) {
      if (Me.idx >= Ce.length) {
        let Se = Te[Me.idx - Ce.length].key;
        re.add(Se);
      }
      return await $e(x, Me.result, {
        replace: X
      }), {
        shortCircuited: !0
      };
    }
    let {
      loaderData: Rt,
      errors: pn
    } = cv(x, L, Ce, be, K, Te, mt, de);
    de.forEach((Se, Oe) => {
      Se.subscribe((Ne) => {
        (Ne || Se.done) && de.delete(Oe);
      });
    });
    let Mt = Mn(), Xe = Pt(U), ft = Mt || Xe || Te.length > 0;
    return st({
      loaderData: Rt,
      errors: pn
    }, ft ? {
      fetchers: new Map(x.fetchers)
    } : {});
  }
  function qt(P, O, L, H) {
    if (r)
      throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
    V.has(P) && Ft(P);
    let j = (H && H.unstable_flushSync) === !0, W = a || l, X = Sp(x.location, x.matches, s, u.v7_prependBasename, L, u.v7_relativeSplatPath, O, H == null ? void 0 : H.relative), Q = xl(W, X, s);
    if (!Q) {
      qe(P, O, Kn(404, {
        pathname: X
      }), {
        flushSync: j
      });
      return;
    }
    let {
      path: N,
      submission: q,
      error: K
    } = ov(u.v7_normalizeFormMethod, !0, X, H);
    if (K) {
      qe(P, O, K, {
        flushSync: j
      });
      return;
    }
    let G = Ep(Q, N);
    if (b = (H && H.preventScrollReset) === !0, q && xr(q.formMethod)) {
      pr(P, O, N, G, Q, j, q);
      return;
    }
    oe.set(P, {
      routeId: O,
      path: N
    }), qr(P, O, N, G, Q, j, q);
  }
  async function pr(P, O, L, H, j, W, X) {
    if (mr(), oe.delete(P), !H.route.action && !H.route.lazy) {
      let Oe = Kn(405, {
        method: X.formMethod,
        pathname: L,
        routeId: O
      });
      qe(P, O, Oe, {
        flushSync: W
      });
      return;
    }
    let Q = x.fetchers.get(P);
    dn(P, F3(X, Q), {
      flushSync: W
    });
    let N = new AbortController(), q = wa(t.history, L, N.signal, X);
    V.set(P, N);
    let K = A, G = await _a("action", q, H, j, o, i, s, u.v7_relativeSplatPath);
    if (q.signal.aborted) {
      V.get(P) === N && V.delete(P);
      return;
    }
    if (u.v7_fetcherPersist && ue.has(P)) {
      if (Eo(G) || Sl(G)) {
        dn(P, Ci(void 0));
        return;
      }
    } else {
      if (Eo(G))
        if (V.delete(P), U > K) {
          dn(P, Ci(void 0));
          return;
        } else
          return re.add(P), dn(P, xa(X)), $e(x, G, {
            fetcherSubmission: X
          });
      if (Sl(G)) {
        qe(P, O, G.error);
        return;
      }
    }
    if (ko(G))
      throw Kn(400, {
        type: "defer-action"
      });
    let le = x.navigation.location || x.location, ie = wa(t.history, le, N.signal), Ce = a || l, Te = x.navigation.state !== "idle" ? xl(Ce, x.navigation.location, s) : x.matches;
    Pe(Te, "Didn't find any matches after fetcher action");
    let Ye = ++A;
    C.set(P, Ye);
    let Le = xa(X, G.data);
    x.fetchers.set(P, Le);
    let [be, mt] = lv(
      t.history,
      x,
      Te,
      X,
      le,
      !1,
      z,
      Y,
      ne,
      ue,
      oe,
      re,
      Ce,
      s,
      {
        [H.route.id]: G.data
      },
      void 0
      // No need to send through errors since we short circuit above
    );
    mt.filter((Oe) => Oe.key !== P).forEach((Oe) => {
      let Ne = Oe.key, Ge = x.fetchers.get(Ne), Gn = xa(void 0, Ge ? Ge.data : void 0);
      x.fetchers.set(Ne, Gn), V.has(Ne) && Ft(Ne), Oe.controller && V.set(Ne, Oe.controller);
    }), Ae({
      fetchers: new Map(x.fetchers)
    });
    let Me = () => mt.forEach((Oe) => Ft(Oe.key));
    N.signal.addEventListener("abort", Me);
    let {
      results: Rt,
      loaderResults: pn,
      fetcherResults: Mt
    } = await Or(x.matches, Te, be, mt, ie);
    if (N.signal.aborted)
      return;
    N.signal.removeEventListener("abort", Me), C.delete(P), V.delete(P), mt.forEach((Oe) => V.delete(Oe.key));
    let Xe = hv(Rt);
    if (Xe) {
      if (Xe.idx >= be.length) {
        let Oe = mt[Xe.idx - be.length].key;
        re.add(Oe);
      }
      return $e(x, Xe.result);
    }
    let {
      loaderData: ft,
      errors: Se
    } = cv(x, x.matches, be, pn, void 0, mt, Mt, de);
    if (x.fetchers.has(P)) {
      let Oe = Ci(G.data);
      x.fetchers.set(P, Oe);
    }
    Pt(Ye), x.navigation.state === "loading" && Ye > U ? (Pe(k, "Expected pending action"), R && R.abort(), jt(x.navigation.location, {
      matches: Te,
      loaderData: ft,
      errors: Se,
      fetchers: new Map(x.fetchers)
    })) : (Ae({
      errors: Se,
      loaderData: fv(x.loaderData, ft, Te, Se),
      fetchers: new Map(x.fetchers)
    }), z = !1);
  }
  async function qr(P, O, L, H, j, W, X) {
    let Q = x.fetchers.get(P);
    dn(P, xa(X, Q ? Q.data : void 0), {
      flushSync: W
    });
    let N = new AbortController(), q = wa(t.history, L, N.signal);
    V.set(P, N);
    let K = A, G = await _a("loader", q, H, j, o, i, s, u.v7_relativeSplatPath);
    if (ko(G) && (G = await E2(G, q.signal, !0) || G), V.get(P) === N && V.delete(P), !q.signal.aborted) {
      if (ue.has(P)) {
        dn(P, Ci(void 0));
        return;
      }
      if (Eo(G))
        if (U > K) {
          dn(P, Ci(void 0));
          return;
        } else {
          re.add(P), await $e(x, G);
          return;
        }
      if (Sl(G)) {
        qe(P, O, G.error);
        return;
      }
      Pe(!ko(G), "Unhandled fetcher deferred data"), dn(P, Ci(G.data));
    }
  }
  async function $e(P, O, L) {
    let {
      submission: H,
      fetcherSubmission: j,
      replace: W
    } = L === void 0 ? {} : L;
    O.revalidate && (z = !0);
    let X = $s(P.location, O.location, {
      _isRedirect: !0
    });
    if (Pe(X, "Expected a location on the redirect navigation"), n) {
      let le = !1;
      if (O.reloadDocument)
        le = !0;
      else if (w2.test(O.location)) {
        const ie = t.history.createURL(O.location);
        le = // Hard reload if it's an absolute URL to a new origin
        ie.origin !== e.location.origin || // Hard reload if it's an absolute URL that does not match our basename
        Ks(ie.pathname, s) == null;
      }
      if (le) {
        W ? e.location.replace(O.location) : e.location.assign(O.location);
        return;
      }
    }
    R = null;
    let Q = W === !0 ? dt.Replace : dt.Push, {
      formMethod: N,
      formAction: q,
      formEncType: K
    } = P.navigation;
    !H && !j && N && q && K && (H = mv(P.navigation));
    let G = H || j;
    if (b3.has(O.status) && G && xr(G.formMethod))
      await ot(Q, X, {
        submission: st({}, G, {
          formAction: O.location
        }),
        // Preserve this flag across redirects
        preventScrollReset: b
      });
    else {
      let le = Fd(X, H);
      await ot(Q, X, {
        overrideNavigation: le,
        // Send fetcher submissions through for shouldRevalidate
        fetcherSubmission: j,
        // Preserve this flag across redirects
        preventScrollReset: b
      });
    }
  }
  async function Or(P, O, L, H, j) {
    let W = await Promise.all([...L.map((N) => _a("loader", j, N, O, o, i, s, u.v7_relativeSplatPath)), ...H.map((N) => N.matches && N.match && N.controller ? _a("loader", wa(t.history, N.path, N.controller.signal), N.match, N.matches, o, i, s, u.v7_relativeSplatPath) : {
      type: lt.error,
      error: Kn(404, {
        pathname: N.path
      })
    })]), X = W.slice(0, L.length), Q = W.slice(L.length);
    return await Promise.all([pv(P, L, X, X.map(() => j.signal), !1, x.loaderData), pv(P, H.map((N) => N.match), Q, H.map((N) => N.controller ? N.controller.signal : null), !0)]), {
      results: W,
      loaderResults: X,
      fetcherResults: Q
    };
  }
  function mr() {
    z = !0, Y.push(...Xn()), oe.forEach((P, O) => {
      V.has(O) && (ne.push(O), Ft(O));
    });
  }
  function dn(P, O, L) {
    L === void 0 && (L = {}), x.fetchers.set(P, O), Ae({
      fetchers: new Map(x.fetchers)
    }, {
      flushSync: (L && L.flushSync) === !0
    });
  }
  function qe(P, O, L, H) {
    H === void 0 && (H = {});
    let j = os(x.matches, O);
    $t(P), Ae({
      errors: {
        [j.route.id]: L
      },
      fetchers: new Map(x.fetchers)
    }, {
      flushSync: (H && H.flushSync) === !0
    });
  }
  function He(P) {
    return u.v7_fetcherPersist && (We.set(P, (We.get(P) || 0) + 1), ue.has(P) && ue.delete(P)), x.fetchers.get(P) || P3;
  }
  function $t(P) {
    let O = x.fetchers.get(P);
    V.has(P) && !(O && O.state === "loading" && C.has(P)) && Ft(P), oe.delete(P), C.delete(P), re.delete(P), ue.delete(P), x.fetchers.delete(P);
  }
  function Rn(P) {
    if (u.v7_fetcherPersist) {
      let O = (We.get(P) || 0) - 1;
      O <= 0 ? (We.delete(P), ue.add(P)) : We.set(P, O);
    } else
      $t(P);
    Ae({
      fetchers: new Map(x.fetchers)
    });
  }
  function Ft(P) {
    let O = V.get(P);
    Pe(O, "Expected fetch controller: " + P), O.abort(), V.delete(P);
  }
  function Yn(P) {
    for (let O of P) {
      let L = He(O), H = Ci(L.data);
      x.fetchers.set(O, H);
    }
  }
  function Mn() {
    let P = [], O = !1;
    for (let L of re) {
      let H = x.fetchers.get(L);
      Pe(H, "Expected fetcher: " + L), H.state === "loading" && (re.delete(L), P.push(L), O = !0);
    }
    return Yn(P), O;
  }
  function Pt(P) {
    let O = [];
    for (let [L, H] of C)
      if (H < P) {
        let j = x.fetchers.get(L);
        Pe(j, "Expected fetcher: " + L), j.state === "loading" && (Ft(L), C.delete(L), O.push(L));
      }
    return Yn(O), O.length > 0;
  }
  function Kr(P, O) {
    let L = x.blockers.get(P) || ya;
    return ge.get(P) !== O && ge.set(P, O), L;
  }
  function Zr(P) {
    x.blockers.delete(P), ge.delete(P);
  }
  function gr(P, O) {
    let L = x.blockers.get(P) || ya;
    Pe(L.state === "unblocked" && O.state === "blocked" || L.state === "blocked" && O.state === "blocked" || L.state === "blocked" && O.state === "proceeding" || L.state === "blocked" && O.state === "unblocked" || L.state === "proceeding" && O.state === "unblocked", "Invalid blocker state transition: " + L.state + " -> " + O.state);
    let H = new Map(x.blockers);
    H.set(P, O), Ae({
      blockers: H
    });
  }
  function Dr(P) {
    let {
      currentLocation: O,
      nextLocation: L,
      historyAction: H
    } = P;
    if (ge.size === 0)
      return;
    ge.size > 1 && Yo(!1, "A router only supports one blocker at a time");
    let j = Array.from(ge.entries()), [W, X] = j[j.length - 1], Q = x.blockers.get(W);
    if (!(Q && Q.state === "proceeding") && X({
      currentLocation: O,
      nextLocation: L,
      historyAction: H
    }))
      return W;
  }
  function Xn(P) {
    let O = [];
    return de.forEach((L, H) => {
      (!P || P(H)) && (L.cancel(), O.push(H), de.delete(H));
    }), O;
  }
  function Ar(P, O, L) {
    if (d = P, m = O, p = L || null, !h && x.navigation === $d) {
      h = !0;
      let H = hn(x.location, x.matches);
      H != null && Ae({
        restoreScrollPosition: H
      });
    }
    return () => {
      d = null, m = null, p = null;
    };
  }
  function _e(P, O) {
    return p && p(P, O.map((H) => t3(H, x.loaderData))) || P.key;
  }
  function Jr(P, O) {
    if (d && m) {
      let L = _e(P, O);
      d[L] = m();
    }
  }
  function hn(P, O) {
    if (d) {
      let L = _e(P, O), H = d[L];
      if (typeof H == "number")
        return H;
    }
    return null;
  }
  function On(P) {
    o = {}, a = xp(P, i, void 0, o);
  }
  return T = {
    get basename() {
      return s;
    },
    get future() {
      return u;
    },
    get state() {
      return x;
    },
    get routes() {
      return l;
    },
    get window() {
      return e;
    },
    initialize: rt,
    subscribe: fn,
    enableScrollRestoration: Ar,
    navigate: xe,
    fetch: qt,
    revalidate: it,
    // Passthrough to history-aware createHref used by useHref so we get proper
    // hash-aware URLs in DOM paths
    createHref: (P) => t.history.createHref(P),
    encodeLocation: (P) => t.history.encodeLocation(P),
    getFetcher: He,
    deleteFetcher: Rn,
    dispose: je,
    getBlocker: Kr,
    deleteBlocker: Zr,
    _internalFetchControllers: V,
    _internalActiveDeferreds: de,
    // TODO: Remove setRoutes, it's temporary to avoid dealing with
    // updating the tree while validating the update algorithm.
    _internalSetRoutes: On
  }, T;
}
function O3(t) {
  return t != null && ("formData" in t && t.formData != null || "body" in t && t.body !== void 0);
}
function Sp(t, e, n, r, i, o, l, a) {
  let s, u;
  if (l) {
    s = [];
    for (let f of e)
      if (s.push(f), f.route.id === l) {
        u = f;
        break;
      }
  } else
    s = e, u = e[e.length - 1];
  let c = _3(i || ".", y3(s, o), Ks(t.pathname, n) || t.pathname, a === "path");
  return i == null && (c.search = t.search, c.hash = t.hash), (i == null || i === "" || i === ".") && u && u.route.index && !_m(c.search) && (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"), r && n !== "/" && (c.pathname = c.pathname === "/" ? n : Lo([n, c.pathname])), qs(c);
}
function ov(t, e, n, r) {
  if (!r || !O3(r))
    return {
      path: n
    };
  if (r.formMethod && !j3(r.formMethod))
    return {
      path: n,
      error: Kn(405, {
        method: r.formMethod
      })
    };
  let i = () => ({
    path: n,
    error: Kn(400, {
      type: "invalid-body"
    })
  }), o = r.formMethod || "get", l = t ? o.toUpperCase() : o.toLowerCase(), a = k2(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!xr(l))
        return i();
      let d = typeof r.body == "string" ? r.body : r.body instanceof FormData || r.body instanceof URLSearchParams ? (
        // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#plain-text-form-data
        Array.from(r.body.entries()).reduce((p, m) => {
          let [h, y] = m;
          return "" + p + h + "=" + y + `
`;
        }, "")
      ) : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: l,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: d
        }
      };
    } else if (r.formEncType === "application/json") {
      if (!xr(l))
        return i();
      try {
        let d = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: l,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: d,
            text: void 0
          }
        };
      } catch {
        return i();
      }
    }
  }
  Pe(typeof FormData == "function", "FormData is not available in this environment");
  let s, u;
  if (r.formData)
    s = kp(r.formData), u = r.formData;
  else if (r.body instanceof FormData)
    s = kp(r.body), u = r.body;
  else if (r.body instanceof URLSearchParams)
    s = r.body, u = uv(s);
  else if (r.body == null)
    s = new URLSearchParams(), u = new FormData();
  else
    try {
      s = new URLSearchParams(r.body), u = uv(s);
    } catch {
      return i();
    }
  let c = {
    formMethod: l,
    formAction: a,
    formEncType: r && r.formEncType || "application/x-www-form-urlencoded",
    formData: u,
    json: void 0,
    text: void 0
  };
  if (xr(c.formMethod))
    return {
      path: n,
      submission: c
    };
  let f = wi(n);
  return e && f.search && _m(f.search) && s.append("index", ""), f.search = "?" + s, {
    path: qs(f),
    submission: c
  };
}
function D3(t, e) {
  let n = t;
  if (e) {
    let r = t.findIndex((i) => i.route.id === e);
    r >= 0 && (n = t.slice(0, r));
  }
  return n;
}
function lv(t, e, n, r, i, o, l, a, s, u, c, f, d, p, m, h) {
  let y = h ? Object.values(h)[0] : m ? Object.values(m)[0] : void 0, g = t.createURL(e.location), v = t.createURL(i), _ = h ? Object.keys(h)[0] : void 0, T = D3(n, _).filter((k, b) => {
    let {
      route: R
    } = k;
    if (R.lazy)
      return !0;
    if (R.loader == null)
      return !1;
    if (o)
      return R.loader.hydrate ? !0 : e.loaderData[R.id] === void 0 && // Don't re-run if the loader ran and threw an error
      (!e.errors || e.errors[R.id] === void 0);
    if (A3(e.loaderData, e.matches[b], k) || a.some((I) => I === k.route.id))
      return !0;
    let M = e.matches[b], B = k;
    return av(k, st({
      currentUrl: g,
      currentParams: M.params,
      nextUrl: v,
      nextParams: B.params
    }, r, {
      actionResult: y,
      defaultShouldRevalidate: (
        // Forced revalidation due to submission, useRevalidator, or X-Remix-Revalidate
        l || // Clicked the same link, resubmitted a GET form
        g.pathname + g.search === v.pathname + v.search || // Search params affect all loaders
        g.search !== v.search || S2(M, B)
      )
    }));
  }), x = [];
  return c.forEach((k, b) => {
    if (o || !n.some((te) => te.route.id === k.routeId) || u.has(b))
      return;
    let R = xl(d, k.path, p);
    if (!R) {
      x.push({
        key: b,
        routeId: k.routeId,
        path: k.path,
        matches: null,
        match: null,
        controller: null
      });
      return;
    }
    let M = e.fetchers.get(b), B = Ep(R, k.path), I = !1;
    f.has(b) ? I = !1 : s.includes(b) ? I = !0 : M && M.state !== "idle" && M.data === void 0 ? I = l : I = av(B, st({
      currentUrl: g,
      currentParams: e.matches[e.matches.length - 1].params,
      nextUrl: v,
      nextParams: n[n.length - 1].params
    }, r, {
      actionResult: y,
      defaultShouldRevalidate: l
    })), I && x.push({
      key: b,
      routeId: k.routeId,
      path: k.path,
      matches: R,
      match: B,
      controller: new AbortController()
    });
  }), [T, x];
}
function A3(t, e, n) {
  let r = (
    // [a] -> [a, b]
    !e || // [a, b] -> [a, c]
    n.route.id !== e.route.id
  ), i = t[n.route.id] === void 0;
  return r || i;
}
function S2(t, e) {
  let n = t.route.path;
  return (
    // param change for this match, /users/123 -> /users/456
    t.pathname !== e.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    n != null && n.endsWith("*") && t.params["*"] !== e.params["*"]
  );
}
function av(t, e) {
  if (t.route.shouldRevalidate) {
    let n = t.route.shouldRevalidate(e);
    if (typeof n == "boolean")
      return n;
  }
  return e.defaultShouldRevalidate;
}
async function sv(t, e, n) {
  if (!t.lazy)
    return;
  let r = await t.lazy();
  if (!t.lazy)
    return;
  let i = n[t.id];
  Pe(i, "No route found in manifest");
  let o = {};
  for (let l in r) {
    let s = i[l] !== void 0 && // This property isn't static since it should always be updated based
    // on the route updates
    l !== "hasErrorBoundary";
    Yo(!s, 'Route "' + i.id + '" has a static property "' + l + '" defined but its lazy function is also returning a value for this property. ' + ('The lazy route property "' + l + '" will be ignored.')), !s && !JP.has(l) && (o[l] = r[l]);
  }
  Object.assign(i, o), Object.assign(i, st({}, e(i), {
    lazy: void 0
  }));
}
async function _a(t, e, n, r, i, o, l, a, s) {
  s === void 0 && (s = {});
  let u, c, f, d = (h) => {
    let y, g = new Promise((v, _) => y = _);
    return f = () => y(), e.signal.addEventListener("abort", f), Promise.race([h({
      request: e,
      params: n.params,
      context: s.requestContext
    }), g]);
  };
  try {
    let h = n.route[t];
    if (n.route.lazy)
      if (h) {
        let y, g = await Promise.all([
          // If the handler throws, don't let it immediately bubble out,
          // since we need to let the lazy() execution finish so we know if this
          // route has a boundary that can handle the error
          d(h).catch((v) => {
            y = v;
          }),
          sv(n.route, o, i)
        ]);
        if (y)
          throw y;
        c = g[0];
      } else if (await sv(n.route, o, i), h = n.route[t], h)
        c = await d(h);
      else if (t === "action") {
        let y = new URL(e.url), g = y.pathname + y.search;
        throw Kn(405, {
          method: e.method,
          pathname: g,
          routeId: n.route.id
        });
      } else
        return {
          type: lt.data,
          data: void 0
        };
    else if (h)
      c = await d(h);
    else {
      let y = new URL(e.url), g = y.pathname + y.search;
      throw Kn(404, {
        pathname: g
      });
    }
    Pe(c !== void 0, "You defined " + (t === "action" ? "an action" : "a loader") + " for route " + ('"' + n.route.id + "\" but didn't return anything from your `" + t + "` ") + "function. Please return a value or `null`.");
  } catch (h) {
    u = lt.error, c = h;
  } finally {
    f && e.signal.removeEventListener("abort", f);
  }
  if (z3(c)) {
    let h = c.status;
    if (T3.has(h)) {
      let g = c.headers.get("Location");
      if (Pe(g, "Redirects returned/thrown from loaders/actions must have a Location header"), !w2.test(g))
        g = Sp(new URL(e.url), r.slice(0, r.indexOf(n) + 1), l, !0, g, a);
      else if (!s.isStaticRequest) {
        let v = new URL(e.url), _ = g.startsWith("//") ? new URL(v.protocol + g) : new URL(g), w = Ks(_.pathname, l) != null;
        _.origin === v.origin && w && (g = _.pathname + _.search + _.hash);
      }
      if (s.isStaticRequest)
        throw c.headers.set("Location", g), c;
      return {
        type: lt.redirect,
        status: h,
        location: g,
        revalidate: c.headers.get("X-Remix-Revalidate") !== null,
        reloadDocument: c.headers.get("X-Remix-Reload-Document") !== null
      };
    }
    if (s.isRouteRequest)
      throw {
        type: u === lt.error ? lt.error : lt.data,
        response: c
      };
    let y;
    try {
      let g = c.headers.get("Content-Type");
      g && /\bapplication\/json\b/.test(g) ? c.body == null ? y = null : y = await c.json() : y = await c.text();
    } catch (g) {
      return {
        type: lt.error,
        error: g
      };
    }
    return u === lt.error ? {
      type: u,
      error: new ym(h, c.statusText, y),
      headers: c.headers
    } : {
      type: lt.data,
      data: y,
      statusCode: c.status,
      headers: c.headers
    };
  }
  if (u === lt.error)
    return {
      type: u,
      error: c
    };
  if (I3(c)) {
    var p, m;
    return {
      type: lt.deferred,
      deferredData: c,
      statusCode: (p = c.init) == null ? void 0 : p.status,
      headers: ((m = c.init) == null ? void 0 : m.headers) && new Headers(c.init.headers)
    };
  }
  return {
    type: lt.data,
    data: c
  };
}
function wa(t, e, n, r) {
  let i = t.createURL(k2(e)).toString(), o = {
    signal: n
  };
  if (r && xr(r.formMethod)) {
    let {
      formMethod: l,
      formEncType: a
    } = r;
    o.method = l.toUpperCase(), a === "application/json" ? (o.headers = new Headers({
      "Content-Type": a
    }), o.body = JSON.stringify(r.json)) : a === "text/plain" ? o.body = r.text : a === "application/x-www-form-urlencoded" && r.formData ? o.body = kp(r.formData) : o.body = r.formData;
  }
  return new Request(i, o);
}
function kp(t) {
  let e = new URLSearchParams();
  for (let [n, r] of t.entries())
    e.append(n, typeof r == "string" ? r : r.name);
  return e;
}
function uv(t) {
  let e = new FormData();
  for (let [n, r] of t.entries())
    e.append(n, r);
  return e;
}
function L3(t, e, n, r, i) {
  let o = {}, l = null, a, s = !1, u = {};
  return n.forEach((c, f) => {
    let d = e[f].route.id;
    if (Pe(!Eo(c), "Cannot handle redirect results in processLoaderData"), Sl(c)) {
      let p = os(t, d), m = c.error;
      r && (m = Object.values(r)[0], r = void 0), l = l || {}, l[p.route.id] == null && (l[p.route.id] = m), o[d] = void 0, s || (s = !0, a = y2(c.error) ? c.error.status : 500), c.headers && (u[d] = c.headers);
    } else
      ko(c) ? (i.set(d, c.deferredData), o[d] = c.deferredData.data) : o[d] = c.data, c.statusCode != null && c.statusCode !== 200 && !s && (a = c.statusCode), c.headers && (u[d] = c.headers);
  }), r && (l = r, o[Object.keys(r)[0]] = void 0), {
    loaderData: o,
    errors: l,
    statusCode: a || 200,
    loaderHeaders: u
  };
}
function cv(t, e, n, r, i, o, l, a) {
  let {
    loaderData: s,
    errors: u
  } = L3(e, n, r, i, a);
  for (let c = 0; c < o.length; c++) {
    let {
      key: f,
      match: d,
      controller: p
    } = o[c];
    Pe(l !== void 0 && l[c] !== void 0, "Did not find corresponding fetcher result");
    let m = l[c];
    if (!(p && p.signal.aborted))
      if (Sl(m)) {
        let h = os(t.matches, d == null ? void 0 : d.route.id);
        u && u[h.route.id] || (u = st({}, u, {
          [h.route.id]: m.error
        })), t.fetchers.delete(f);
      } else if (Eo(m))
        Pe(!1, "Unhandled fetcher revalidation redirect");
      else if (ko(m))
        Pe(!1, "Unhandled fetcher deferred data");
      else {
        let h = Ci(m.data);
        t.fetchers.set(f, h);
      }
  }
  return {
    loaderData: s,
    errors: u
  };
}
function fv(t, e, n, r) {
  let i = st({}, e);
  for (let o of n) {
    let l = o.route.id;
    if (e.hasOwnProperty(l) ? e[l] !== void 0 && (i[l] = e[l]) : t[l] !== void 0 && o.route.loader && (i[l] = t[l]), r && r.hasOwnProperty(l))
      break;
  }
  return i;
}
function os(t, e) {
  return (e ? t.slice(0, t.findIndex((r) => r.route.id === e) + 1) : [...t]).reverse().find((r) => r.route.hasErrorBoundary === !0) || t[0];
}
function dv(t) {
  let e = t.length === 1 ? t[0] : t.find((n) => n.index || !n.path || n.path === "/") || {
    id: "__shim-error-route__"
  };
  return {
    matches: [{
      params: {},
      pathname: "",
      pathnameBase: "",
      route: e
    }],
    route: e
  };
}
function Kn(t, e) {
  let {
    pathname: n,
    routeId: r,
    method: i,
    type: o
  } = e === void 0 ? {} : e, l = "Unknown Server Error", a = "Unknown @remix-run/router error";
  return t === 400 ? (l = "Bad Request", i && n && r ? a = "You made a " + i + ' request to "' + n + '" but ' + ('did not provide a `loader` for route "' + r + '", ') + "so there is no way to handle the request." : o === "defer-action" ? a = "defer() is not supported in actions" : o === "invalid-body" && (a = "Unable to encode submission body")) : t === 403 ? (l = "Forbidden", a = 'Route "' + r + '" does not match URL "' + n + '"') : t === 404 ? (l = "Not Found", a = 'No route matches URL "' + n + '"') : t === 405 && (l = "Method Not Allowed", i && n && r ? a = "You made a " + i.toUpperCase() + ' request to "' + n + '" but ' + ('did not provide an `action` for route "' + r + '", ') + "so there is no way to handle the request." : i && (a = 'Invalid request method "' + i.toUpperCase() + '"')), new ym(t || 500, l, new Error(a), !0);
}
function hv(t) {
  for (let e = t.length - 1; e >= 0; e--) {
    let n = t[e];
    if (Eo(n))
      return {
        result: n,
        idx: e
      };
  }
}
function k2(t) {
  let e = typeof t == "string" ? wi(t) : t;
  return qs(st({}, e, {
    hash: ""
  }));
}
function N3(t, e) {
  return t.pathname !== e.pathname || t.search !== e.search ? !1 : t.hash === "" ? e.hash !== "" : t.hash === e.hash ? !0 : e.hash !== "";
}
function ko(t) {
  return t.type === lt.deferred;
}
function Sl(t) {
  return t.type === lt.error;
}
function Eo(t) {
  return (t && t.type) === lt.redirect;
}
function I3(t) {
  let e = t;
  return e && typeof e == "object" && typeof e.data == "object" && typeof e.subscribe == "function" && typeof e.cancel == "function" && typeof e.resolveData == "function";
}
function z3(t) {
  return t != null && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.headers == "object" && typeof t.body < "u";
}
function j3(t) {
  return C3.has(t.toLowerCase());
}
function xr(t) {
  return k3.has(t.toLowerCase());
}
async function pv(t, e, n, r, i, o) {
  for (let l = 0; l < n.length; l++) {
    let a = n[l], s = e[l];
    if (!s)
      continue;
    let u = t.find((f) => f.route.id === s.route.id), c = u != null && !S2(u, s) && (o && o[s.route.id]) !== void 0;
    if (ko(a) && (i || c)) {
      let f = r[l];
      Pe(f, "Expected an AbortSignal for revalidating fetcher deferred result"), await E2(a, f, i).then((d) => {
        d && (n[l] = d || n[l]);
      });
    }
  }
}
async function E2(t, e, n) {
  if (n === void 0 && (n = !1), !await t.deferredData.resolveData(e)) {
    if (n)
      try {
        return {
          type: lt.data,
          data: t.deferredData.unwrappedData
        };
      } catch (i) {
        return {
          type: lt.error,
          error: i
        };
      }
    return {
      type: lt.data,
      data: t.deferredData.data
    };
  }
}
function _m(t) {
  return new URLSearchParams(t).getAll("index").some((e) => e === "");
}
function Ep(t, e) {
  let n = typeof e == "string" ? wi(e).search : e.search;
  if (t[t.length - 1].route.index && _m(n || ""))
    return t[t.length - 1];
  let r = v2(t);
  return r[r.length - 1];
}
function mv(t) {
  let {
    formMethod: e,
    formAction: n,
    formEncType: r,
    text: i,
    formData: o,
    json: l
  } = t;
  if (!(!e || !n || !r)) {
    if (i != null)
      return {
        formMethod: e,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: i
      };
    if (o != null)
      return {
        formMethod: e,
        formAction: n,
        formEncType: r,
        formData: o,
        json: void 0,
        text: void 0
      };
    if (l !== void 0)
      return {
        formMethod: e,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: l,
        text: void 0
      };
  }
}
function Fd(t, e) {
  return e ? {
    state: "loading",
    location: t,
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text
  } : {
    state: "loading",
    location: t,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
  };
}
function $3(t, e) {
  return {
    state: "submitting",
    location: t,
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text
  };
}
function xa(t, e) {
  return t ? {
    state: "loading",
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
    data: e
  } : {
    state: "loading",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e
  };
}
function F3(t, e) {
  return {
    state: "submitting",
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
    data: e ? e.data : void 0
  };
}
function Ci(t) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: t
  };
}
function U3(t, e) {
  try {
    let n = t.sessionStorage.getItem(x2);
    if (n) {
      let r = JSON.parse(n);
      for (let [i, o] of Object.entries(r || {}))
        o && Array.isArray(o) && e.set(i, new Set(o || []));
    }
  } catch {
  }
}
function B3(t, e) {
  if (e.size > 0) {
    let n = {};
    for (let [r, i] of e)
      n[r] = [...i];
    try {
      t.sessionStorage.setItem(x2, JSON.stringify(n));
    } catch (r) {
      Yo(!1, "Failed to save applied view transitions in sessionStorage (" + r + ").");
    }
  }
}
/**
 * React Router v6.21.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function qc() {
  return qc = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, qc.apply(this, arguments);
}
const C2 = /* @__PURE__ */ S.createContext(null), T2 = /* @__PURE__ */ S.createContext(null), b2 = /* @__PURE__ */ S.createContext(null), zf = /* @__PURE__ */ S.createContext(null), jf = /* @__PURE__ */ S.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
}), P2 = /* @__PURE__ */ S.createContext(null);
function wm() {
  return S.useContext(zf) != null;
}
function V3() {
  return wm() || Pe(!1), S.useContext(zf).location;
}
function W3(t, e, n, r) {
  wm() || Pe(!1);
  let {
    navigator: i
  } = S.useContext(b2), {
    matches: o
  } = S.useContext(jf), l = o[o.length - 1], a = l ? l.params : {};
  l && l.pathname;
  let s = l ? l.pathnameBase : "/";
  l && l.route;
  let u = V3(), c;
  if (e) {
    var f;
    let y = typeof e == "string" ? wi(e) : e;
    s === "/" || (f = y.pathname) != null && f.startsWith(s) || Pe(!1), c = y;
  } else
    c = u;
  let d = c.pathname || "/", p = s === "/" ? d : d.slice(s.length) || "/", m = xl(t, {
    pathname: p
  }), h = Q3(m && m.map((y) => Object.assign({}, y, {
    params: Object.assign({}, a, y.params),
    pathname: Lo([
      s,
      // Re-encode pathnames that were decoded inside matchRoutes
      i.encodeLocation ? i.encodeLocation(y.pathname).pathname : y.pathname
    ]),
    pathnameBase: y.pathnameBase === "/" ? s : Lo([
      s,
      // Re-encode pathnames that were decoded inside matchRoutes
      i.encodeLocation ? i.encodeLocation(y.pathnameBase).pathname : y.pathnameBase
    ])
  })), o, n, r);
  return e && h ? /* @__PURE__ */ S.createElement(zf.Provider, {
    value: {
      location: qc({
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default"
      }, c),
      navigationType: dt.Pop
    }
  }, h) : h;
}
function H3() {
  let t = J3(), e = y2(t) ? t.status + " " + t.statusText : t instanceof Error ? t.message : JSON.stringify(t), n = t instanceof Error ? t.stack : null, i = {
    padding: "0.5rem",
    backgroundColor: "rgba(200,200,200, 0.5)"
  }, o = null;
  return /* @__PURE__ */ S.createElement(S.Fragment, null, /* @__PURE__ */ S.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ S.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, e), n ? /* @__PURE__ */ S.createElement("pre", {
    style: i
  }, n) : null, o);
}
const Y3 = /* @__PURE__ */ S.createElement(H3, null);
class X3 extends S.Component {
  constructor(e) {
    super(e), this.state = {
      location: e.location,
      revalidation: e.revalidation,
      error: e.error
    };
  }
  static getDerivedStateFromError(e) {
    return {
      error: e
    };
  }
  static getDerivedStateFromProps(e, n) {
    return n.location !== e.location || n.revalidation !== "idle" && e.revalidation === "idle" ? {
      error: e.error,
      location: e.location,
      revalidation: e.revalidation
    } : {
      error: e.error !== void 0 ? e.error : n.error,
      location: n.location,
      revalidation: e.revalidation || n.revalidation
    };
  }
  componentDidCatch(e, n) {
    console.error("React Router caught the following error during render", e, n);
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ S.createElement(jf.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ S.createElement(P2.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function G3(t) {
  let {
    routeContext: e,
    match: n,
    children: r
  } = t, i = S.useContext(C2);
  return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id), /* @__PURE__ */ S.createElement(jf.Provider, {
    value: e
  }, r);
}
function Q3(t, e, n, r) {
  var i;
  if (e === void 0 && (e = []), n === void 0 && (n = null), r === void 0 && (r = null), t == null) {
    var o;
    if ((o = n) != null && o.errors)
      t = n.matches;
    else
      return null;
  }
  let l = t, a = (i = n) == null ? void 0 : i.errors;
  if (a != null) {
    let c = l.findIndex((f) => f.route.id && (a == null ? void 0 : a[f.route.id]));
    c >= 0 || Pe(!1), l = l.slice(0, Math.min(l.length, c + 1));
  }
  let s = !1, u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < l.length; c++) {
      let f = l[c];
      if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c), f.route.id) {
        let {
          loaderData: d,
          errors: p
        } = n, m = f.route.loader && d[f.route.id] === void 0 && (!p || p[f.route.id] === void 0);
        if (f.route.lazy || m) {
          s = !0, u >= 0 ? l = l.slice(0, u + 1) : l = [l[0]];
          break;
        }
      }
    }
  return l.reduceRight((c, f, d) => {
    let p, m = !1, h = null, y = null;
    n && (p = a && f.route.id ? a[f.route.id] : void 0, h = f.route.errorElement || Y3, s && (u < 0 && d === 0 ? (e5("route-fallback", !1), m = !0, y = null) : u === d && (m = !0, y = f.route.hydrateFallbackElement || null)));
    let g = e.concat(l.slice(0, d + 1)), v = () => {
      let _;
      return p ? _ = h : m ? _ = y : f.route.Component ? _ = /* @__PURE__ */ S.createElement(f.route.Component, null) : f.route.element ? _ = f.route.element : _ = c, /* @__PURE__ */ S.createElement(G3, {
        match: f,
        routeContext: {
          outlet: c,
          matches: g,
          isDataRoute: n != null
        },
        children: _
      });
    };
    return n && (f.route.ErrorBoundary || f.route.errorElement || d === 0) ? /* @__PURE__ */ S.createElement(X3, {
      location: n.location,
      revalidation: n.revalidation,
      component: h,
      error: p,
      children: v(),
      routeContext: {
        outlet: null,
        matches: g,
        isDataRoute: !0
      }
    }) : v();
  }, null);
}
var Cp = /* @__PURE__ */ function(t) {
  return t.UseBlocker = "useBlocker", t.UseLoaderData = "useLoaderData", t.UseActionData = "useActionData", t.UseRouteError = "useRouteError", t.UseNavigation = "useNavigation", t.UseRouteLoaderData = "useRouteLoaderData", t.UseMatches = "useMatches", t.UseRevalidator = "useRevalidator", t.UseNavigateStable = "useNavigate", t.UseRouteId = "useRouteId", t;
}(Cp || {});
function q3(t) {
  let e = S.useContext(T2);
  return e || Pe(!1), e;
}
function K3(t) {
  let e = S.useContext(jf);
  return e || Pe(!1), e;
}
function Z3(t) {
  let e = K3(), n = e.matches[e.matches.length - 1];
  return n.route.id || Pe(!1), n.route.id;
}
function J3() {
  var t;
  let e = S.useContext(P2), n = q3(Cp.UseRouteError), r = Z3(Cp.UseRouteError);
  return e !== void 0 ? e : (t = n.errors) == null ? void 0 : t[r];
}
const gv = {};
function e5(t, e, n) {
  !e && !gv[t] && (gv[t] = !0);
}
function t5(t) {
  let {
    basename: e = "/",
    children: n = null,
    location: r,
    navigationType: i = dt.Pop,
    navigator: o,
    static: l = !1,
    future: a
  } = t;
  wm() && Pe(!1);
  let s = e.replace(/^\/*/, "/"), u = S.useMemo(() => ({
    basename: s,
    navigator: o,
    static: l,
    future: qc({
      v7_relativeSplatPath: !1
    }, a)
  }), [s, a, o, l]);
  typeof r == "string" && (r = wi(r));
  let {
    pathname: c = "/",
    search: f = "",
    hash: d = "",
    state: p = null,
    key: m = "default"
  } = r, h = S.useMemo(() => {
    let y = Ks(c, s);
    return y == null ? null : {
      location: {
        pathname: y,
        search: f,
        hash: d,
        state: p,
        key: m
      },
      navigationType: i
    };
  }, [s, c, f, d, p, m, i]);
  return h == null ? null : /* @__PURE__ */ S.createElement(b2.Provider, {
    value: u
  }, /* @__PURE__ */ S.createElement(zf.Provider, {
    children: n,
    value: h
  }));
}
new Promise(() => {
});
function n5(t) {
  let e = {
    // Note: this check also occurs in createRoutesFromChildren so update
    // there if you change this -- please and thank you!
    hasErrorBoundary: t.ErrorBoundary != null || t.errorElement != null
  };
  return t.Component && Object.assign(e, {
    element: /* @__PURE__ */ S.createElement(t.Component),
    Component: void 0
  }), t.HydrateFallback && Object.assign(e, {
    hydrateFallbackElement: /* @__PURE__ */ S.createElement(t.HydrateFallback),
    HydrateFallback: void 0
  }), t.ErrorBoundary && Object.assign(e, {
    errorElement: /* @__PURE__ */ S.createElement(t.ErrorBoundary),
    ErrorBoundary: void 0
  }), e;
}
/**
 * React Router DOM v6.21.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Kc() {
  return Kc = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Kc.apply(this, arguments);
}
function r5(t, e) {
  return M3({
    basename: e == null ? void 0 : e.basename,
    future: Kc({}, e == null ? void 0 : e.future, {
      v7_prependBasename: !0
    }),
    history: qP({
      window: e == null ? void 0 : e.window
    }),
    hydrationData: (e == null ? void 0 : e.hydrationData) || i5(),
    routes: t,
    mapRouteProperties: n5,
    window: e == null ? void 0 : e.window
  }).initialize();
}
function i5() {
  var t;
  let e = (t = window) == null ? void 0 : t.__staticRouterHydrationData;
  return e && e.errors && (e = Kc({}, e, {
    errors: o5(e.errors)
  })), e;
}
function o5(t) {
  if (!t)
    return null;
  let e = Object.entries(t), n = {};
  for (let [r, i] of e)
    if (i && i.__type === "RouteErrorResponse")
      n[r] = new ym(i.status, i.statusText, i.data, i.internal === !0);
    else if (i && i.__type === "Error") {
      if (i.__subType) {
        let o = window[i.__subType];
        if (typeof o == "function")
          try {
            let l = new o(i.message);
            l.stack = "", n[r] = l;
          } catch {
          }
      }
      if (n[r] == null) {
        let o = new Error(i.message);
        o.stack = "", n[r] = o;
      }
    } else
      n[r] = i;
  return n;
}
const l5 = /* @__PURE__ */ S.createContext({
  isTransitioning: !1
}), a5 = /* @__PURE__ */ S.createContext(/* @__PURE__ */ new Map()), s5 = "startTransition", vv = Y2[s5], u5 = "flushSync", yv = rE[u5];
function c5(t) {
  vv ? vv(t) : t();
}
function Sa(t) {
  yv ? yv(t) : t();
}
class f5 {
  constructor() {
    this.status = "pending", this.promise = new Promise((e, n) => {
      this.resolve = (r) => {
        this.status === "pending" && (this.status = "resolved", e(r));
      }, this.reject = (r) => {
        this.status === "pending" && (this.status = "rejected", n(r));
      };
    });
  }
}
function d5(t) {
  let {
    fallbackElement: e,
    router: n,
    future: r
  } = t, [i, o] = S.useState(n.state), [l, a] = S.useState(), [s, u] = S.useState({
    isTransitioning: !1
  }), [c, f] = S.useState(), [d, p] = S.useState(), [m, h] = S.useState(), y = S.useRef(/* @__PURE__ */ new Map()), {
    v7_startTransition: g
  } = r || {}, v = S.useCallback((k) => {
    g ? c5(k) : k();
  }, [g]), _ = S.useCallback((k, b) => {
    let {
      deletedFetchers: R,
      unstable_flushSync: M,
      unstable_viewTransitionOpts: B
    } = b;
    R.forEach((te) => y.current.delete(te)), k.fetchers.forEach((te, z) => {
      te.data !== void 0 && y.current.set(z, te.data);
    });
    let I = n.window == null || typeof n.window.document.startViewTransition != "function";
    if (!B || I) {
      M ? Sa(() => o(k)) : v(() => o(k));
      return;
    }
    if (M) {
      Sa(() => {
        d && (c && c.resolve(), d.skipTransition()), u({
          isTransitioning: !0,
          flushSync: !0,
          currentLocation: B.currentLocation,
          nextLocation: B.nextLocation
        });
      });
      let te = n.window.document.startViewTransition(() => {
        Sa(() => o(k));
      });
      te.finished.finally(() => {
        Sa(() => {
          f(void 0), p(void 0), a(void 0), u({
            isTransitioning: !1
          });
        });
      }), Sa(() => p(te));
      return;
    }
    d ? (c && c.resolve(), d.skipTransition(), h({
      state: k,
      currentLocation: B.currentLocation,
      nextLocation: B.nextLocation
    })) : (a(k), u({
      isTransitioning: !0,
      flushSync: !1,
      currentLocation: B.currentLocation,
      nextLocation: B.nextLocation
    }));
  }, [n.window, d, c, y, v]);
  S.useLayoutEffect(() => n.subscribe(_), [n, _]), S.useEffect(() => {
    s.isTransitioning && !s.flushSync && f(new f5());
  }, [s]), S.useEffect(() => {
    if (c && l && n.window) {
      let k = l, b = c.promise, R = n.window.document.startViewTransition(async () => {
        v(() => o(k)), await b;
      });
      R.finished.finally(() => {
        f(void 0), p(void 0), a(void 0), u({
          isTransitioning: !1
        });
      }), p(R);
    }
  }, [v, l, c, n.window]), S.useEffect(() => {
    c && l && i.location.key === l.location.key && c.resolve();
  }, [c, d, i.location, l]), S.useEffect(() => {
    !s.isTransitioning && m && (a(m.state), u({
      isTransitioning: !0,
      flushSync: !1,
      currentLocation: m.currentLocation,
      nextLocation: m.nextLocation
    }), h(void 0));
  }, [s.isTransitioning, m]), S.useEffect(() => {
  }, []);
  let w = S.useMemo(() => ({
    createHref: n.createHref,
    encodeLocation: n.encodeLocation,
    go: (k) => n.navigate(k),
    push: (k, b, R) => n.navigate(k, {
      state: b,
      preventScrollReset: R == null ? void 0 : R.preventScrollReset
    }),
    replace: (k, b, R) => n.navigate(k, {
      replace: !0,
      state: b,
      preventScrollReset: R == null ? void 0 : R.preventScrollReset
    })
  }), [n]), T = n.basename || "/", x = S.useMemo(() => ({
    router: n,
    navigator: w,
    static: !1,
    basename: T
  }), [n, w, T]);
  return /* @__PURE__ */ S.createElement(S.Fragment, null, /* @__PURE__ */ S.createElement(C2.Provider, {
    value: x
  }, /* @__PURE__ */ S.createElement(T2.Provider, {
    value: i
  }, /* @__PURE__ */ S.createElement(a5.Provider, {
    value: y.current
  }, /* @__PURE__ */ S.createElement(l5.Provider, {
    value: s
  }, /* @__PURE__ */ S.createElement(t5, {
    basename: T,
    location: i.location,
    navigationType: i.historyAction,
    navigator: w,
    future: {
      v7_relativeSplatPath: n.future.v7_relativeSplatPath
    }
  }, i.initialized || n.future.v7_partialHydration ? /* @__PURE__ */ S.createElement(h5, {
    routes: n.routes,
    future: n.future,
    state: i
  }) : e))))), null);
}
function h5(t) {
  let {
    routes: e,
    future: n,
    state: r
  } = t;
  return W3(e, void 0, r, n);
}
var _v;
(function(t) {
  t.UseScrollRestoration = "useScrollRestoration", t.UseSubmit = "useSubmit", t.UseSubmitFetcher = "useSubmitFetcher", t.UseFetcher = "useFetcher", t.useViewTransitionState = "useViewTransitionState";
})(_v || (_v = {}));
var wv;
(function(t) {
  t.UseFetcher = "useFetcher", t.UseFetchers = "useFetchers", t.UseScrollRestoration = "useScrollRestoration";
})(wv || (wv = {}));
var p5 = document.getElementById("RomNav");
const m5 = Ud.createRoot(p5), g5 = r5([
  {
    path: "//",
    element: /* @__PURE__ */ E.jsx(tv, { namebox: ["このサイトについて", "依頼の流れ", "制作例", "リンク"], children: " " })
  },
  {
    path: "/irai/",
    element: /* @__PURE__ */ E.jsx(OP, { children: " " })
  },
  {
    path: "/*/",
    element: /* @__PURE__ */ E.jsx(tv, { namebox: ["このサイトについて", "依頼の流れ", "制作例", "リンク"], children: " " })
  }
]);
m5.render(
  /* @__PURE__ */ E.jsx(d5, { router: g5 })
);
