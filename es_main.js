var Fw = Object.defineProperty;
var Bw = (t, e, n) => e in t ? Fw(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var F = (t, e, n) => (Bw(t, typeof e != "symbol" ? e + "" : e, n), n);
function Vw(t, e) {
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
var wr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function B1(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var V1 = { exports: {} }, Dc = {}, U1 = { exports: {} }, le = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ka = Symbol.for("react.element"), Uw = Symbol.for("react.portal"), Ww = Symbol.for("react.fragment"), Hw = Symbol.for("react.strict_mode"), Yw = Symbol.for("react.profiler"), Xw = Symbol.for("react.provider"), Gw = Symbol.for("react.context"), Qw = Symbol.for("react.forward_ref"), qw = Symbol.for("react.suspense"), Kw = Symbol.for("react.memo"), Zw = Symbol.for("react.lazy"), K0 = Symbol.iterator;
function Jw(t) {
  return t === null || typeof t != "object" ? null : (t = K0 && t[K0] || t["@@iterator"], typeof t == "function" ? t : null);
}
var W1 = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, H1 = Object.assign, Y1 = {};
function jl(t, e, n) {
  this.props = t, this.context = e, this.refs = Y1, this.updater = n || W1;
}
jl.prototype.isReactComponent = {};
jl.prototype.setState = function(t, e) {
  if (typeof t != "object" && typeof t != "function" && t != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, t, e, "setState");
};
jl.prototype.forceUpdate = function(t) {
  this.updater.enqueueForceUpdate(this, t, "forceUpdate");
};
function X1() {
}
X1.prototype = jl.prototype;
function rp(t, e, n) {
  this.props = t, this.context = e, this.refs = Y1, this.updater = n || W1;
}
var ip = rp.prototype = new X1();
ip.constructor = rp;
H1(ip, jl.prototype);
ip.isPureReactComponent = !0;
var Z0 = Array.isArray, G1 = Object.prototype.hasOwnProperty, op = { current: null }, Q1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function q1(t, e, n) {
  var r, i = {}, o = null, l = null;
  if (e != null)
    for (r in e.ref !== void 0 && (l = e.ref), e.key !== void 0 && (o = "" + e.key), e)
      G1.call(e, r) && !Q1.hasOwnProperty(r) && (i[r] = e[r]);
  var s = arguments.length - 2;
  if (s === 1)
    i.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++)
      a[u] = arguments[u + 2];
    i.children = a;
  }
  if (t && t.defaultProps)
    for (r in s = t.defaultProps, s)
      i[r] === void 0 && (i[r] = s[r]);
  return { $$typeof: ka, type: t, key: o, ref: l, props: i, _owner: op.current };
}
function e2(t, e) {
  return { $$typeof: ka, type: t.type, key: e, ref: t.ref, props: t.props, _owner: t._owner };
}
function lp(t) {
  return typeof t == "object" && t !== null && t.$$typeof === ka;
}
function t2(t) {
  var e = { "=": "=0", ":": "=2" };
  return "$" + t.replace(/[=:]/g, function(n) {
    return e[n];
  });
}
var J0 = /\/+/g;
function kf(t, e) {
  return typeof t == "object" && t !== null && t.key != null ? t2("" + t.key) : e.toString(36);
}
function xu(t, e, n, r, i) {
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
          case ka:
          case Uw:
            l = !0;
        }
    }
  if (l)
    return l = t, i = i(l), t = r === "" ? "." + kf(l, 0) : r, Z0(i) ? (n = "", t != null && (n = t.replace(J0, "$&/") + "/"), xu(i, e, n, "", function(u) {
      return u;
    })) : i != null && (lp(i) && (i = e2(i, n + (!i.key || l && l.key === i.key ? "" : ("" + i.key).replace(J0, "$&/") + "/") + t)), e.push(i)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", Z0(t))
    for (var s = 0; s < t.length; s++) {
      o = t[s];
      var a = r + kf(o, s);
      l += xu(o, e, n, a, i);
    }
  else if (a = Jw(t), typeof a == "function")
    for (t = a.call(t), s = 0; !(o = t.next()).done; )
      o = o.value, a = r + kf(o, s++), l += xu(o, e, n, a, i);
  else if (o === "object")
    throw e = String(t), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function Da(t, e, n) {
  if (t == null)
    return t;
  var r = [], i = 0;
  return xu(t, r, "", "", function(o) {
    return e.call(n, o, i++);
  }), r;
}
function n2(t) {
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
var Ft = { current: null }, wu = { transition: null }, r2 = { ReactCurrentDispatcher: Ft, ReactCurrentBatchConfig: wu, ReactCurrentOwner: op };
le.Children = { map: Da, forEach: function(t, e, n) {
  Da(t, function() {
    e.apply(this, arguments);
  }, n);
}, count: function(t) {
  var e = 0;
  return Da(t, function() {
    e++;
  }), e;
}, toArray: function(t) {
  return Da(t, function(e) {
    return e;
  }) || [];
}, only: function(t) {
  if (!lp(t))
    throw Error("React.Children.only expected to receive a single React element child.");
  return t;
} };
le.Component = jl;
le.Fragment = Ww;
le.Profiler = Yw;
le.PureComponent = rp;
le.StrictMode = Hw;
le.Suspense = qw;
le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = r2;
le.cloneElement = function(t, e, n) {
  if (t == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
  var r = H1({}, t.props), i = t.key, o = t.ref, l = t._owner;
  if (e != null) {
    if (e.ref !== void 0 && (o = e.ref, l = op.current), e.key !== void 0 && (i = "" + e.key), t.type && t.type.defaultProps)
      var s = t.type.defaultProps;
    for (a in e)
      G1.call(e, a) && !Q1.hasOwnProperty(a) && (r[a] = e[a] === void 0 && s !== void 0 ? s[a] : e[a]);
  }
  var a = arguments.length - 2;
  if (a === 1)
    r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++)
      s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: ka, type: t.type, key: i, ref: o, props: r, _owner: l };
};
le.createContext = function(t) {
  return t = { $$typeof: Gw, _currentValue: t, _currentValue2: t, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, t.Provider = { $$typeof: Xw, _context: t }, t.Consumer = t;
};
le.createElement = q1;
le.createFactory = function(t) {
  var e = q1.bind(null, t);
  return e.type = t, e;
};
le.createRef = function() {
  return { current: null };
};
le.forwardRef = function(t) {
  return { $$typeof: Qw, render: t };
};
le.isValidElement = lp;
le.lazy = function(t) {
  return { $$typeof: Zw, _payload: { _status: -1, _result: t }, _init: n2 };
};
le.memo = function(t, e) {
  return { $$typeof: Kw, type: t, compare: e === void 0 ? null : e };
};
le.startTransition = function(t) {
  var e = wu.transition;
  wu.transition = {};
  try {
    t();
  } finally {
    wu.transition = e;
  }
};
le.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
le.useCallback = function(t, e) {
  return Ft.current.useCallback(t, e);
};
le.useContext = function(t) {
  return Ft.current.useContext(t);
};
le.useDebugValue = function() {
};
le.useDeferredValue = function(t) {
  return Ft.current.useDeferredValue(t);
};
le.useEffect = function(t, e) {
  return Ft.current.useEffect(t, e);
};
le.useId = function() {
  return Ft.current.useId();
};
le.useImperativeHandle = function(t, e, n) {
  return Ft.current.useImperativeHandle(t, e, n);
};
le.useInsertionEffect = function(t, e) {
  return Ft.current.useInsertionEffect(t, e);
};
le.useLayoutEffect = function(t, e) {
  return Ft.current.useLayoutEffect(t, e);
};
le.useMemo = function(t, e) {
  return Ft.current.useMemo(t, e);
};
le.useReducer = function(t, e, n) {
  return Ft.current.useReducer(t, e, n);
};
le.useRef = function(t) {
  return Ft.current.useRef(t);
};
le.useState = function(t) {
  return Ft.current.useState(t);
};
le.useSyncExternalStore = function(t, e, n) {
  return Ft.current.useSyncExternalStore(t, e, n);
};
le.useTransition = function() {
  return Ft.current.useTransition();
};
le.version = "18.2.0";
U1.exports = le;
var S = U1.exports;
const i2 = /* @__PURE__ */ B1(S), o2 = /* @__PURE__ */ Vw({
  __proto__: null,
  default: i2
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
var l2 = S, s2 = Symbol.for("react.element"), a2 = Symbol.for("react.fragment"), u2 = Object.prototype.hasOwnProperty, c2 = l2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f2 = { key: !0, ref: !0, __self: !0, __source: !0 };
function K1(t, e, n) {
  var r, i = {}, o = null, l = null;
  n !== void 0 && (o = "" + n), e.key !== void 0 && (o = "" + e.key), e.ref !== void 0 && (l = e.ref);
  for (r in e)
    u2.call(e, r) && !f2.hasOwnProperty(r) && (i[r] = e[r]);
  if (t && t.defaultProps)
    for (r in e = t.defaultProps, e)
      i[r] === void 0 && (i[r] = e[r]);
  return { $$typeof: s2, type: t, key: o, ref: l, props: i, _owner: c2.current };
}
Dc.Fragment = a2;
Dc.jsx = K1;
Dc.jsxs = K1;
V1.exports = Dc;
var w = V1.exports, xd = {}, Z1 = { exports: {} }, Cn = {}, J1 = { exports: {} }, ev = {};
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
  function e(M, z) {
    var k = M.length;
    M.push(z);
    e:
      for (; 0 < k; ) {
        var Y = k - 1 >>> 1, J = M[Y];
        if (0 < i(J, z))
          M[Y] = z, M[k] = J, k = Y;
        else
          break e;
      }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0)
      return null;
    var z = M[0], k = M.pop();
    if (k !== z) {
      M[0] = k;
      e:
        for (var Y = 0, J = M.length, nt = J >>> 1; Y < nt; ) {
          var fe = 2 * (Y + 1) - 1, de = M[fe], ye = fe + 1, ue = M[ye];
          if (0 > i(de, k))
            ye < J && 0 > i(ue, de) ? (M[Y] = ue, M[ye] = k, Y = ye) : (M[Y] = de, M[fe] = k, Y = fe);
          else if (ye < J && 0 > i(ue, k))
            M[Y] = ue, M[ye] = k, Y = ye;
          else
            break e;
        }
    }
    return z;
  }
  function i(M, z) {
    var k = M.sortIndex - z.sortIndex;
    return k !== 0 ? k : M.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    t.unstable_now = function() {
      return o.now();
    };
  } else {
    var l = Date, s = l.now();
    t.unstable_now = function() {
      return l.now() - s;
    };
  }
  var a = [], u = [], c = 1, f = null, h = 3, d = !1, g = !1, p = !1, _ = typeof setTimeout == "function" ? setTimeout : null, v = typeof clearTimeout == "function" ? clearTimeout : null, m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(M) {
    for (var z = n(u); z !== null; ) {
      if (z.callback === null)
        r(u);
      else if (z.startTime <= M)
        r(u), z.sortIndex = z.expirationTime, e(a, z);
      else
        break;
      z = n(u);
    }
  }
  function x(M) {
    if (p = !1, y(M), !g)
      if (n(a) !== null)
        g = !0, W(C);
      else {
        var z = n(u);
        z !== null && L(x, z.startTime - M);
      }
  }
  function C(M, z) {
    g = !1, p && (p = !1, v(b), b = -1), d = !0;
    var k = h;
    try {
      for (y(z), f = n(a); f !== null && (!(f.expirationTime > z) || M && !j()); ) {
        var Y = f.callback;
        if (typeof Y == "function") {
          f.callback = null, h = f.priorityLevel;
          var J = Y(f.expirationTime <= z);
          z = t.unstable_now(), typeof J == "function" ? f.callback = J : f === n(a) && r(a), y(z);
        } else
          r(a);
        f = n(a);
      }
      if (f !== null)
        var nt = !0;
      else {
        var fe = n(u);
        fe !== null && L(x, fe.startTime - z), nt = !1;
      }
      return nt;
    } finally {
      f = null, h = k, d = !1;
    }
  }
  var T = !1, E = null, b = -1, O = 5, P = -1;
  function j() {
    return !(t.unstable_now() - P < O);
  }
  function D() {
    if (E !== null) {
      var M = t.unstable_now();
      P = M;
      var z = !0;
      try {
        z = E(!0, M);
      } finally {
        z ? G() : (T = !1, E = null);
      }
    } else
      T = !1;
  }
  var G;
  if (typeof m == "function")
    G = function() {
      m(D);
    };
  else if (typeof MessageChannel < "u") {
    var I = new MessageChannel(), $ = I.port2;
    I.port1.onmessage = D, G = function() {
      $.postMessage(null);
    };
  } else
    G = function() {
      _(D, 0);
    };
  function W(M) {
    E = M, T || (T = !0, G());
  }
  function L(M, z) {
    b = _(function() {
      M(t.unstable_now());
    }, z);
  }
  t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(M) {
    M.callback = null;
  }, t.unstable_continueExecution = function() {
    g || d || (g = !0, W(C));
  }, t.unstable_forceFrameRate = function(M) {
    0 > M || 125 < M ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : O = 0 < M ? Math.floor(1e3 / M) : 5;
  }, t.unstable_getCurrentPriorityLevel = function() {
    return h;
  }, t.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, t.unstable_next = function(M) {
    switch (h) {
      case 1:
      case 2:
      case 3:
        var z = 3;
        break;
      default:
        z = h;
    }
    var k = h;
    h = z;
    try {
      return M();
    } finally {
      h = k;
    }
  }, t.unstable_pauseExecution = function() {
  }, t.unstable_requestPaint = function() {
  }, t.unstable_runWithPriority = function(M, z) {
    switch (M) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        M = 3;
    }
    var k = h;
    h = M;
    try {
      return z();
    } finally {
      h = k;
    }
  }, t.unstable_scheduleCallback = function(M, z, k) {
    var Y = t.unstable_now();
    switch (typeof k == "object" && k !== null ? (k = k.delay, k = typeof k == "number" && 0 < k ? Y + k : Y) : k = Y, M) {
      case 1:
        var J = -1;
        break;
      case 2:
        J = 250;
        break;
      case 5:
        J = 1073741823;
        break;
      case 4:
        J = 1e4;
        break;
      default:
        J = 5e3;
    }
    return J = k + J, M = { id: c++, callback: z, priorityLevel: M, startTime: k, expirationTime: J, sortIndex: -1 }, k > Y ? (M.sortIndex = k, e(u, M), n(a) === null && M === n(u) && (p ? (v(b), b = -1) : p = !0, L(x, k - Y))) : (M.sortIndex = J, e(a, M), g || d || (g = !0, W(C))), M;
  }, t.unstable_shouldYield = j, t.unstable_wrapCallback = function(M) {
    var z = h;
    return function() {
      var k = h;
      h = z;
      try {
        return M.apply(this, arguments);
      } finally {
        h = k;
      }
    };
  };
})(ev);
J1.exports = ev;
var d2 = J1.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tv = S, kn = d2;
function A(t) {
  for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1; n < arguments.length; n++)
    e += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var nv = /* @__PURE__ */ new Set(), Us = {};
function No(t, e) {
  Cl(t, e), Cl(t + "Capture", e);
}
function Cl(t, e) {
  for (Us[t] = e, t = 0; t < e.length; t++)
    nv.add(e[t]);
}
var Hr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), wd = Object.prototype.hasOwnProperty, h2 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, eg = {}, tg = {};
function p2(t) {
  return wd.call(tg, t) ? !0 : wd.call(eg, t) ? !1 : h2.test(t) ? tg[t] = !0 : (eg[t] = !0, !1);
}
function g2(t, e, n, r) {
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
function m2(t, e, n, r) {
  if (e === null || typeof e > "u" || g2(t, e, n, r))
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
function Bt(t, e, n, r, i, o, l) {
  this.acceptsBooleans = e === 2 || e === 3 || e === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = t, this.type = e, this.sanitizeURL = o, this.removeEmptyString = l;
}
var vt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
  vt[t] = new Bt(t, 0, !1, t, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
  var e = t[0];
  vt[e] = new Bt(e, 1, !1, t[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
  vt[t] = new Bt(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
  vt[t] = new Bt(t, 2, !1, t, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
  vt[t] = new Bt(t, 3, !1, t.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(t) {
  vt[t] = new Bt(t, 3, !0, t, null, !1, !1);
});
["capture", "download"].forEach(function(t) {
  vt[t] = new Bt(t, 4, !1, t, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(t) {
  vt[t] = new Bt(t, 6, !1, t, null, !1, !1);
});
["rowSpan", "start"].forEach(function(t) {
  vt[t] = new Bt(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var sp = /[\-:]([a-z])/g;
function ap(t) {
  return t[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
  var e = t.replace(
    sp,
    ap
  );
  vt[e] = new Bt(e, 1, !1, t, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
  var e = t.replace(sp, ap);
  vt[e] = new Bt(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
  var e = t.replace(sp, ap);
  vt[e] = new Bt(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(t) {
  vt[t] = new Bt(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
vt.xlinkHref = new Bt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(t) {
  vt[t] = new Bt(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function up(t, e, n, r) {
  var i = vt.hasOwnProperty(e) ? vt[e] : null;
  (i !== null ? i.type !== 0 : r || !(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (m2(e, n, i, r) && (n = null), r || i === null ? p2(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n)) : i.mustUseProperty ? t[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (e = i.attributeName, r = i.attributeNamespace, n === null ? t.removeAttribute(e) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))));
}
var Kr = tv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, za = Symbol.for("react.element"), Yo = Symbol.for("react.portal"), Xo = Symbol.for("react.fragment"), cp = Symbol.for("react.strict_mode"), kd = Symbol.for("react.profiler"), rv = Symbol.for("react.provider"), iv = Symbol.for("react.context"), fp = Symbol.for("react.forward_ref"), Sd = Symbol.for("react.suspense"), Cd = Symbol.for("react.suspense_list"), dp = Symbol.for("react.memo"), ii = Symbol.for("react.lazy"), ov = Symbol.for("react.offscreen"), ng = Symbol.iterator;
function Yl(t) {
  return t === null || typeof t != "object" ? null : (t = ng && t[ng] || t["@@iterator"], typeof t == "function" ? t : null);
}
var ze = Object.assign, Sf;
function ls(t) {
  if (Sf === void 0)
    try {
      throw Error();
    } catch (n) {
      var e = n.stack.trim().match(/\n( *(at )?)/);
      Sf = e && e[1] || "";
    }
  return `
` + Sf + t;
}
var Cf = !1;
function Ef(t, e) {
  if (!t || Cf)
    return "";
  Cf = !0;
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
`), l = i.length - 1, s = o.length - 1; 1 <= l && 0 <= s && i[l] !== o[s]; )
        s--;
      for (; 1 <= l && 0 <= s; l--, s--)
        if (i[l] !== o[s]) {
          if (l !== 1 || s !== 1)
            do
              if (l--, s--, 0 > s || i[l] !== o[s]) {
                var a = `
` + i[l].replace(" at new ", " at ");
                return t.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", t.displayName)), a;
              }
            while (1 <= l && 0 <= s);
          break;
        }
    }
  } finally {
    Cf = !1, Error.prepareStackTrace = n;
  }
  return (t = t ? t.displayName || t.name : "") ? ls(t) : "";
}
function v2(t) {
  switch (t.tag) {
    case 5:
      return ls(t.type);
    case 16:
      return ls("Lazy");
    case 13:
      return ls("Suspense");
    case 19:
      return ls("SuspenseList");
    case 0:
    case 2:
    case 15:
      return t = Ef(t.type, !1), t;
    case 11:
      return t = Ef(t.type.render, !1), t;
    case 1:
      return t = Ef(t.type, !0), t;
    default:
      return "";
  }
}
function Ed(t) {
  if (t == null)
    return null;
  if (typeof t == "function")
    return t.displayName || t.name || null;
  if (typeof t == "string")
    return t;
  switch (t) {
    case Xo:
      return "Fragment";
    case Yo:
      return "Portal";
    case kd:
      return "Profiler";
    case cp:
      return "StrictMode";
    case Sd:
      return "Suspense";
    case Cd:
      return "SuspenseList";
  }
  if (typeof t == "object")
    switch (t.$$typeof) {
      case iv:
        return (t.displayName || "Context") + ".Consumer";
      case rv:
        return (t._context.displayName || "Context") + ".Provider";
      case fp:
        var e = t.render;
        return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
      case dp:
        return e = t.displayName || null, e !== null ? e : Ed(t.type) || "Memo";
      case ii:
        e = t._payload, t = t._init;
        try {
          return Ed(t(e));
        } catch {
        }
    }
  return null;
}
function y2(t) {
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
      return Ed(e);
    case 8:
      return e === cp ? "StrictMode" : "Mode";
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
function Ri(t) {
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
function lv(t) {
  var e = t.type;
  return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
}
function _2(t) {
  var e = lv(t) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e), r = "" + t[e];
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
function $a(t) {
  t._valueTracker || (t._valueTracker = _2(t));
}
function sv(t) {
  if (!t)
    return !1;
  var e = t._valueTracker;
  if (!e)
    return !0;
  var n = e.getValue(), r = "";
  return t && (r = lv(t) ? t.checked ? "true" : "false" : t.value), t = r, t !== n ? (e.setValue(t), !0) : !1;
}
function Wu(t) {
  if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u")
    return null;
  try {
    return t.activeElement || t.body;
  } catch {
    return t.body;
  }
}
function Td(t, e) {
  var n = e.checked;
  return ze({}, e, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? t._wrapperState.initialChecked });
}
function rg(t, e) {
  var n = e.defaultValue == null ? "" : e.defaultValue, r = e.checked != null ? e.checked : e.defaultChecked;
  n = Ri(e.value != null ? e.value : n), t._wrapperState = { initialChecked: r, initialValue: n, controlled: e.type === "checkbox" || e.type === "radio" ? e.checked != null : e.value != null };
}
function av(t, e) {
  e = e.checked, e != null && up(t, "checked", e, !1);
}
function bd(t, e) {
  av(t, e);
  var n = Ri(e.value), r = e.type;
  if (n != null)
    r === "number" ? (n === 0 && t.value === "" || t.value != n) && (t.value = "" + n) : t.value !== "" + n && (t.value = "" + n);
  else if (r === "submit" || r === "reset") {
    t.removeAttribute("value");
    return;
  }
  e.hasOwnProperty("value") ? Pd(t, e.type, n) : e.hasOwnProperty("defaultValue") && Pd(t, e.type, Ri(e.defaultValue)), e.checked == null && e.defaultChecked != null && (t.defaultChecked = !!e.defaultChecked);
}
function ig(t, e, n) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var r = e.type;
    if (!(r !== "submit" && r !== "reset" || e.value !== void 0 && e.value !== null))
      return;
    e = "" + t._wrapperState.initialValue, n || e === t.value || (t.value = e), t.defaultValue = e;
  }
  n = t.name, n !== "" && (t.name = ""), t.defaultChecked = !!t._wrapperState.initialChecked, n !== "" && (t.name = n);
}
function Pd(t, e, n) {
  (e !== "number" || Wu(t.ownerDocument) !== t) && (n == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + n && (t.defaultValue = "" + n));
}
var ss = Array.isArray;
function ul(t, e, n, r) {
  if (t = t.options, e) {
    e = {};
    for (var i = 0; i < n.length; i++)
      e["$" + n[i]] = !0;
    for (n = 0; n < t.length; n++)
      i = e.hasOwnProperty("$" + t[n].value), t[n].selected !== i && (t[n].selected = i), i && r && (t[n].defaultSelected = !0);
  } else {
    for (n = "" + Ri(n), e = null, i = 0; i < t.length; i++) {
      if (t[i].value === n) {
        t[i].selected = !0, r && (t[i].defaultSelected = !0);
        return;
      }
      e !== null || t[i].disabled || (e = t[i]);
    }
    e !== null && (e.selected = !0);
  }
}
function Od(t, e) {
  if (e.dangerouslySetInnerHTML != null)
    throw Error(A(91));
  return ze({}, e, { value: void 0, defaultValue: void 0, children: "" + t._wrapperState.initialValue });
}
function og(t, e) {
  var n = e.value;
  if (n == null) {
    if (n = e.children, e = e.defaultValue, n != null) {
      if (e != null)
        throw Error(A(92));
      if (ss(n)) {
        if (1 < n.length)
          throw Error(A(93));
        n = n[0];
      }
      e = n;
    }
    e == null && (e = ""), n = e;
  }
  t._wrapperState = { initialValue: Ri(n) };
}
function uv(t, e) {
  var n = Ri(e.value), r = Ri(e.defaultValue);
  n != null && (n = "" + n, n !== t.value && (t.value = n), e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)), r != null && (t.defaultValue = "" + r);
}
function lg(t) {
  var e = t.textContent;
  e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e);
}
function cv(t) {
  switch (t) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Rd(t, e) {
  return t == null || t === "http://www.w3.org/1999/xhtml" ? cv(e) : t === "http://www.w3.org/2000/svg" && e === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t;
}
var ja, fv = function(t) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(e, n, r, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return t(e, n, r, i);
    });
  } : t;
}(function(t, e) {
  if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t)
    t.innerHTML = e;
  else {
    for (ja = ja || document.createElement("div"), ja.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>", e = ja.firstChild; t.firstChild; )
      t.removeChild(t.firstChild);
    for (; e.firstChild; )
      t.appendChild(e.firstChild);
  }
});
function Ws(t, e) {
  if (e) {
    var n = t.firstChild;
    if (n && n === t.lastChild && n.nodeType === 3) {
      n.nodeValue = e;
      return;
    }
  }
  t.textContent = e;
}
var ys = {
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
}, x2 = ["Webkit", "ms", "Moz", "O"];
Object.keys(ys).forEach(function(t) {
  x2.forEach(function(e) {
    e = e + t.charAt(0).toUpperCase() + t.substring(1), ys[e] = ys[t];
  });
});
function dv(t, e, n) {
  return e == null || typeof e == "boolean" || e === "" ? "" : n || typeof e != "number" || e === 0 || ys.hasOwnProperty(t) && ys[t] ? ("" + e).trim() : e + "px";
}
function hv(t, e) {
  t = t.style;
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, i = dv(n, e[n], r);
      n === "float" && (n = "cssFloat"), r ? t.setProperty(n, i) : t[n] = i;
    }
}
var w2 = ze({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Md(t, e) {
  if (e) {
    if (w2[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
      throw Error(A(137, t));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null)
        throw Error(A(60));
      if (typeof e.dangerouslySetInnerHTML != "object" || !("__html" in e.dangerouslySetInnerHTML))
        throw Error(A(61));
    }
    if (e.style != null && typeof e.style != "object")
      throw Error(A(62));
  }
}
function Nd(t, e) {
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
var Ad = null;
function hp(t) {
  return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
}
var Id = null, cl = null, fl = null;
function sg(t) {
  if (t = Ea(t)) {
    if (typeof Id != "function")
      throw Error(A(280));
    var e = t.stateNode;
    e && (e = Fc(e), Id(t.stateNode, t.type, e));
  }
}
function pv(t) {
  cl ? fl ? fl.push(t) : fl = [t] : cl = t;
}
function gv() {
  if (cl) {
    var t = cl, e = fl;
    if (fl = cl = null, sg(t), e)
      for (t = 0; t < e.length; t++)
        sg(e[t]);
  }
}
function mv(t, e) {
  return t(e);
}
function vv() {
}
var Tf = !1;
function yv(t, e, n) {
  if (Tf)
    return t(e, n);
  Tf = !0;
  try {
    return mv(t, e, n);
  } finally {
    Tf = !1, (cl !== null || fl !== null) && (vv(), gv());
  }
}
function Hs(t, e) {
  var n = t.stateNode;
  if (n === null)
    return null;
  var r = Fc(n);
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
    throw Error(A(231, e, typeof n));
  return n;
}
var Dd = !1;
if (Hr)
  try {
    var Xl = {};
    Object.defineProperty(Xl, "passive", { get: function() {
      Dd = !0;
    } }), window.addEventListener("test", Xl, Xl), window.removeEventListener("test", Xl, Xl);
  } catch {
    Dd = !1;
  }
function k2(t, e, n, r, i, o, l, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var _s = !1, Hu = null, Yu = !1, zd = null, S2 = { onError: function(t) {
  _s = !0, Hu = t;
} };
function C2(t, e, n, r, i, o, l, s, a) {
  _s = !1, Hu = null, k2.apply(S2, arguments);
}
function E2(t, e, n, r, i, o, l, s, a) {
  if (C2.apply(this, arguments), _s) {
    if (_s) {
      var u = Hu;
      _s = !1, Hu = null;
    } else
      throw Error(A(198));
    Yu || (Yu = !0, zd = u);
  }
}
function Ao(t) {
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
function _v(t) {
  if (t.tag === 13) {
    var e = t.memoizedState;
    if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null)
      return e.dehydrated;
  }
  return null;
}
function ag(t) {
  if (Ao(t) !== t)
    throw Error(A(188));
}
function T2(t) {
  var e = t.alternate;
  if (!e) {
    if (e = Ao(t), e === null)
      throw Error(A(188));
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
          return ag(i), t;
        if (o === r)
          return ag(i), e;
        o = o.sibling;
      }
      throw Error(A(188));
    }
    if (n.return !== r.return)
      n = i, r = o;
    else {
      for (var l = !1, s = i.child; s; ) {
        if (s === n) {
          l = !0, n = i, r = o;
          break;
        }
        if (s === r) {
          l = !0, r = i, n = o;
          break;
        }
        s = s.sibling;
      }
      if (!l) {
        for (s = o.child; s; ) {
          if (s === n) {
            l = !0, n = o, r = i;
            break;
          }
          if (s === r) {
            l = !0, r = o, n = i;
            break;
          }
          s = s.sibling;
        }
        if (!l)
          throw Error(A(189));
      }
    }
    if (n.alternate !== r)
      throw Error(A(190));
  }
  if (n.tag !== 3)
    throw Error(A(188));
  return n.stateNode.current === n ? t : e;
}
function xv(t) {
  return t = T2(t), t !== null ? wv(t) : null;
}
function wv(t) {
  if (t.tag === 5 || t.tag === 6)
    return t;
  for (t = t.child; t !== null; ) {
    var e = wv(t);
    if (e !== null)
      return e;
    t = t.sibling;
  }
  return null;
}
var kv = kn.unstable_scheduleCallback, ug = kn.unstable_cancelCallback, b2 = kn.unstable_shouldYield, P2 = kn.unstable_requestPaint, We = kn.unstable_now, O2 = kn.unstable_getCurrentPriorityLevel, pp = kn.unstable_ImmediatePriority, Sv = kn.unstable_UserBlockingPriority, Xu = kn.unstable_NormalPriority, R2 = kn.unstable_LowPriority, Cv = kn.unstable_IdlePriority, zc = null, Sr = null;
function M2(t) {
  if (Sr && typeof Sr.onCommitFiberRoot == "function")
    try {
      Sr.onCommitFiberRoot(zc, t, void 0, (t.current.flags & 128) === 128);
    } catch {
    }
}
var or = Math.clz32 ? Math.clz32 : I2, N2 = Math.log, A2 = Math.LN2;
function I2(t) {
  return t >>>= 0, t === 0 ? 32 : 31 - (N2(t) / A2 | 0) | 0;
}
var La = 64, Fa = 4194304;
function as(t) {
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
function Gu(t, e) {
  var n = t.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, i = t.suspendedLanes, o = t.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var s = l & ~i;
    s !== 0 ? r = as(s) : (o &= l, o !== 0 && (r = as(o)));
  } else
    l = n & ~i, l !== 0 ? r = as(l) : o !== 0 && (r = as(o));
  if (r === 0)
    return 0;
  if (e !== 0 && e !== r && !(e & i) && (i = r & -r, o = e & -e, i >= o || i === 16 && (o & 4194240) !== 0))
    return e;
  if (r & 4 && (r |= n & 16), e = t.entangledLanes, e !== 0)
    for (t = t.entanglements, e &= r; 0 < e; )
      n = 31 - or(e), i = 1 << n, r |= t[n], e &= ~i;
  return r;
}
function D2(t, e) {
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
function z2(t, e) {
  for (var n = t.suspendedLanes, r = t.pingedLanes, i = t.expirationTimes, o = t.pendingLanes; 0 < o; ) {
    var l = 31 - or(o), s = 1 << l, a = i[l];
    a === -1 ? (!(s & n) || s & r) && (i[l] = D2(s, e)) : a <= e && (t.expiredLanes |= s), o &= ~s;
  }
}
function $d(t) {
  return t = t.pendingLanes & -1073741825, t !== 0 ? t : t & 1073741824 ? 1073741824 : 0;
}
function Ev() {
  var t = La;
  return La <<= 1, !(La & 4194240) && (La = 64), t;
}
function bf(t) {
  for (var e = [], n = 0; 31 > n; n++)
    e.push(t);
  return e;
}
function Sa(t, e, n) {
  t.pendingLanes |= e, e !== 536870912 && (t.suspendedLanes = 0, t.pingedLanes = 0), t = t.eventTimes, e = 31 - or(e), t[e] = n;
}
function $2(t, e) {
  var n = t.pendingLanes & ~e;
  t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.expiredLanes &= e, t.mutableReadLanes &= e, t.entangledLanes &= e, e = t.entanglements;
  var r = t.eventTimes;
  for (t = t.expirationTimes; 0 < n; ) {
    var i = 31 - or(n), o = 1 << i;
    e[i] = 0, r[i] = -1, t[i] = -1, n &= ~o;
  }
}
function gp(t, e) {
  var n = t.entangledLanes |= e;
  for (t = t.entanglements; n; ) {
    var r = 31 - or(n), i = 1 << r;
    i & e | t[r] & e && (t[r] |= e), n &= ~i;
  }
}
var _e = 0;
function Tv(t) {
  return t &= -t, 1 < t ? 4 < t ? t & 268435455 ? 16 : 536870912 : 4 : 1;
}
var bv, mp, Pv, Ov, Rv, jd = !1, Ba = [], yi = null, _i = null, xi = null, Ys = /* @__PURE__ */ new Map(), Xs = /* @__PURE__ */ new Map(), li = [], j2 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function cg(t, e) {
  switch (t) {
    case "focusin":
    case "focusout":
      yi = null;
      break;
    case "dragenter":
    case "dragleave":
      _i = null;
      break;
    case "mouseover":
    case "mouseout":
      xi = null;
      break;
    case "pointerover":
    case "pointerout":
      Ys.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Xs.delete(e.pointerId);
  }
}
function Gl(t, e, n, r, i, o) {
  return t === null || t.nativeEvent !== o ? (t = { blockedOn: e, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }, e !== null && (e = Ea(e), e !== null && mp(e)), t) : (t.eventSystemFlags |= r, e = t.targetContainers, i !== null && e.indexOf(i) === -1 && e.push(i), t);
}
function L2(t, e, n, r, i) {
  switch (e) {
    case "focusin":
      return yi = Gl(yi, t, e, n, r, i), !0;
    case "dragenter":
      return _i = Gl(_i, t, e, n, r, i), !0;
    case "mouseover":
      return xi = Gl(xi, t, e, n, r, i), !0;
    case "pointerover":
      var o = i.pointerId;
      return Ys.set(o, Gl(Ys.get(o) || null, t, e, n, r, i)), !0;
    case "gotpointercapture":
      return o = i.pointerId, Xs.set(o, Gl(Xs.get(o) || null, t, e, n, r, i)), !0;
  }
  return !1;
}
function Mv(t) {
  var e = oo(t.target);
  if (e !== null) {
    var n = Ao(e);
    if (n !== null) {
      if (e = n.tag, e === 13) {
        if (e = _v(n), e !== null) {
          t.blockedOn = e, Rv(t.priority, function() {
            Pv(n);
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
function ku(t) {
  if (t.blockedOn !== null)
    return !1;
  for (var e = t.targetContainers; 0 < e.length; ) {
    var n = Ld(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
    if (n === null) {
      n = t.nativeEvent;
      var r = new n.constructor(n.type, n);
      Ad = r, n.target.dispatchEvent(r), Ad = null;
    } else
      return e = Ea(n), e !== null && mp(e), t.blockedOn = n, !1;
    e.shift();
  }
  return !0;
}
function fg(t, e, n) {
  ku(t) && n.delete(e);
}
function F2() {
  jd = !1, yi !== null && ku(yi) && (yi = null), _i !== null && ku(_i) && (_i = null), xi !== null && ku(xi) && (xi = null), Ys.forEach(fg), Xs.forEach(fg);
}
function Ql(t, e) {
  t.blockedOn === e && (t.blockedOn = null, jd || (jd = !0, kn.unstable_scheduleCallback(kn.unstable_NormalPriority, F2)));
}
function Gs(t) {
  function e(i) {
    return Ql(i, t);
  }
  if (0 < Ba.length) {
    Ql(Ba[0], t);
    for (var n = 1; n < Ba.length; n++) {
      var r = Ba[n];
      r.blockedOn === t && (r.blockedOn = null);
    }
  }
  for (yi !== null && Ql(yi, t), _i !== null && Ql(_i, t), xi !== null && Ql(xi, t), Ys.forEach(e), Xs.forEach(e), n = 0; n < li.length; n++)
    r = li[n], r.blockedOn === t && (r.blockedOn = null);
  for (; 0 < li.length && (n = li[0], n.blockedOn === null); )
    Mv(n), n.blockedOn === null && li.shift();
}
var dl = Kr.ReactCurrentBatchConfig, Qu = !0;
function B2(t, e, n, r) {
  var i = _e, o = dl.transition;
  dl.transition = null;
  try {
    _e = 1, vp(t, e, n, r);
  } finally {
    _e = i, dl.transition = o;
  }
}
function V2(t, e, n, r) {
  var i = _e, o = dl.transition;
  dl.transition = null;
  try {
    _e = 4, vp(t, e, n, r);
  } finally {
    _e = i, dl.transition = o;
  }
}
function vp(t, e, n, r) {
  if (Qu) {
    var i = Ld(t, e, n, r);
    if (i === null)
      $f(t, e, r, qu, n), cg(t, r);
    else if (L2(i, t, e, n, r))
      r.stopPropagation();
    else if (cg(t, r), e & 4 && -1 < j2.indexOf(t)) {
      for (; i !== null; ) {
        var o = Ea(i);
        if (o !== null && bv(o), o = Ld(t, e, n, r), o === null && $f(t, e, r, qu, n), o === i)
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else
      $f(t, e, r, null, n);
  }
}
var qu = null;
function Ld(t, e, n, r) {
  if (qu = null, t = hp(r), t = oo(t), t !== null)
    if (e = Ao(t), e === null)
      t = null;
    else if (n = e.tag, n === 13) {
      if (t = _v(e), t !== null)
        return t;
      t = null;
    } else if (n === 3) {
      if (e.stateNode.current.memoizedState.isDehydrated)
        return e.tag === 3 ? e.stateNode.containerInfo : null;
      t = null;
    } else
      e !== t && (t = null);
  return qu = t, null;
}
function Nv(t) {
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
      switch (O2()) {
        case pp:
          return 1;
        case Sv:
          return 4;
        case Xu:
        case R2:
          return 16;
        case Cv:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ai = null, yp = null, Su = null;
function Av() {
  if (Su)
    return Su;
  var t, e = yp, n = e.length, r, i = "value" in ai ? ai.value : ai.textContent, o = i.length;
  for (t = 0; t < n && e[t] === i[t]; t++)
    ;
  var l = n - t;
  for (r = 1; r <= l && e[n - r] === i[o - r]; r++)
    ;
  return Su = i.slice(t, 1 < r ? 1 - r : void 0);
}
function Cu(t) {
  var e = t.keyCode;
  return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
}
function Va() {
  return !0;
}
function dg() {
  return !1;
}
function En(t) {
  function e(n, r, i, o, l) {
    this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = l, this.currentTarget = null;
    for (var s in t)
      t.hasOwnProperty(s) && (n = t[s], this[s] = n ? n(o) : o[s]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Va : dg, this.isPropagationStopped = dg, this;
  }
  return ze(e.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Va);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Va);
  }, persist: function() {
  }, isPersistent: Va }), e;
}
var Ll = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(t) {
  return t.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, _p = En(Ll), Ca = ze({}, Ll, { view: 0, detail: 0 }), U2 = En(Ca), Pf, Of, ql, $c = ze({}, Ca, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: xp, button: 0, buttons: 0, relatedTarget: function(t) {
  return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
}, movementX: function(t) {
  return "movementX" in t ? t.movementX : (t !== ql && (ql && t.type === "mousemove" ? (Pf = t.screenX - ql.screenX, Of = t.screenY - ql.screenY) : Of = Pf = 0, ql = t), Pf);
}, movementY: function(t) {
  return "movementY" in t ? t.movementY : Of;
} }), hg = En($c), W2 = ze({}, $c, { dataTransfer: 0 }), H2 = En(W2), Y2 = ze({}, Ca, { relatedTarget: 0 }), Rf = En(Y2), X2 = ze({}, Ll, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), G2 = En(X2), Q2 = ze({}, Ll, { clipboardData: function(t) {
  return "clipboardData" in t ? t.clipboardData : window.clipboardData;
} }), q2 = En(Q2), K2 = ze({}, Ll, { data: 0 }), pg = En(K2), Z2 = {
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
}, J2 = {
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
}, ek = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function tk(t) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(t) : (t = ek[t]) ? !!e[t] : !1;
}
function xp() {
  return tk;
}
var nk = ze({}, Ca, { key: function(t) {
  if (t.key) {
    var e = Z2[t.key] || t.key;
    if (e !== "Unidentified")
      return e;
  }
  return t.type === "keypress" ? (t = Cu(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? J2[t.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: xp, charCode: function(t) {
  return t.type === "keypress" ? Cu(t) : 0;
}, keyCode: function(t) {
  return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
}, which: function(t) {
  return t.type === "keypress" ? Cu(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
} }), rk = En(nk), ik = ze({}, $c, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), gg = En(ik), ok = ze({}, Ca, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: xp }), lk = En(ok), sk = ze({}, Ll, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), ak = En(sk), uk = ze({}, $c, {
  deltaX: function(t) {
    return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
  },
  deltaY: function(t) {
    return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), ck = En(uk), fk = [9, 13, 27, 32], wp = Hr && "CompositionEvent" in window, xs = null;
Hr && "documentMode" in document && (xs = document.documentMode);
var dk = Hr && "TextEvent" in window && !xs, Iv = Hr && (!wp || xs && 8 < xs && 11 >= xs), mg = String.fromCharCode(32), vg = !1;
function Dv(t, e) {
  switch (t) {
    case "keyup":
      return fk.indexOf(e.keyCode) !== -1;
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
function zv(t) {
  return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
}
var Go = !1;
function hk(t, e) {
  switch (t) {
    case "compositionend":
      return zv(e);
    case "keypress":
      return e.which !== 32 ? null : (vg = !0, mg);
    case "textInput":
      return t = e.data, t === mg && vg ? null : t;
    default:
      return null;
  }
}
function pk(t, e) {
  if (Go)
    return t === "compositionend" || !wp && Dv(t, e) ? (t = Av(), Su = yp = ai = null, Go = !1, t) : null;
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
      return Iv && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var gk = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function yg(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e === "input" ? !!gk[t.type] : e === "textarea";
}
function $v(t, e, n, r) {
  pv(r), e = Ku(e, "onChange"), 0 < e.length && (n = new _p("onChange", "change", null, n, r), t.push({ event: n, listeners: e }));
}
var ws = null, Qs = null;
function mk(t) {
  Gv(t, 0);
}
function jc(t) {
  var e = Ko(t);
  if (sv(e))
    return t;
}
function vk(t, e) {
  if (t === "change")
    return e;
}
var jv = !1;
if (Hr) {
  var Mf;
  if (Hr) {
    var Nf = "oninput" in document;
    if (!Nf) {
      var _g = document.createElement("div");
      _g.setAttribute("oninput", "return;"), Nf = typeof _g.oninput == "function";
    }
    Mf = Nf;
  } else
    Mf = !1;
  jv = Mf && (!document.documentMode || 9 < document.documentMode);
}
function xg() {
  ws && (ws.detachEvent("onpropertychange", Lv), Qs = ws = null);
}
function Lv(t) {
  if (t.propertyName === "value" && jc(Qs)) {
    var e = [];
    $v(e, Qs, t, hp(t)), yv(mk, e);
  }
}
function yk(t, e, n) {
  t === "focusin" ? (xg(), ws = e, Qs = n, ws.attachEvent("onpropertychange", Lv)) : t === "focusout" && xg();
}
function _k(t) {
  if (t === "selectionchange" || t === "keyup" || t === "keydown")
    return jc(Qs);
}
function xk(t, e) {
  if (t === "click")
    return jc(e);
}
function wk(t, e) {
  if (t === "input" || t === "change")
    return jc(e);
}
function kk(t, e) {
  return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
}
var ar = typeof Object.is == "function" ? Object.is : kk;
function qs(t, e) {
  if (ar(t, e))
    return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null)
    return !1;
  var n = Object.keys(t), r = Object.keys(e);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!wd.call(e, i) || !ar(t[i], e[i]))
      return !1;
  }
  return !0;
}
function wg(t) {
  for (; t && t.firstChild; )
    t = t.firstChild;
  return t;
}
function kg(t, e) {
  var n = wg(t);
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
    n = wg(n);
  }
}
function Fv(t, e) {
  return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Fv(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
}
function Bv() {
  for (var t = window, e = Wu(); e instanceof t.HTMLIFrameElement; ) {
    try {
      var n = typeof e.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      t = e.contentWindow;
    else
      break;
    e = Wu(t.document);
  }
  return e;
}
function kp(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
}
function Sk(t) {
  var e = Bv(), n = t.focusedElem, r = t.selectionRange;
  if (e !== n && n && n.ownerDocument && Fv(n.ownerDocument.documentElement, n)) {
    if (r !== null && kp(n)) {
      if (e = r.start, t = r.end, t === void 0 && (t = e), "selectionStart" in n)
        n.selectionStart = e, n.selectionEnd = Math.min(t, n.value.length);
      else if (t = (e = n.ownerDocument || document) && e.defaultView || window, t.getSelection) {
        t = t.getSelection();
        var i = n.textContent.length, o = Math.min(r.start, i);
        r = r.end === void 0 ? o : Math.min(r.end, i), !t.extend && o > r && (i = r, r = o, o = i), i = kg(n, o);
        var l = kg(
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
var Ck = Hr && "documentMode" in document && 11 >= document.documentMode, Qo = null, Fd = null, ks = null, Bd = !1;
function Sg(t, e, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Bd || Qo == null || Qo !== Wu(r) || (r = Qo, "selectionStart" in r && kp(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ks && qs(ks, r) || (ks = r, r = Ku(Fd, "onSelect"), 0 < r.length && (e = new _p("onSelect", "select", null, e, n), t.push({ event: e, listeners: r }), e.target = Qo)));
}
function Ua(t, e) {
  var n = {};
  return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n;
}
var qo = { animationend: Ua("Animation", "AnimationEnd"), animationiteration: Ua("Animation", "AnimationIteration"), animationstart: Ua("Animation", "AnimationStart"), transitionend: Ua("Transition", "TransitionEnd") }, Af = {}, Vv = {};
Hr && (Vv = document.createElement("div").style, "AnimationEvent" in window || (delete qo.animationend.animation, delete qo.animationiteration.animation, delete qo.animationstart.animation), "TransitionEvent" in window || delete qo.transitionend.transition);
function Lc(t) {
  if (Af[t])
    return Af[t];
  if (!qo[t])
    return t;
  var e = qo[t], n;
  for (n in e)
    if (e.hasOwnProperty(n) && n in Vv)
      return Af[t] = e[n];
  return t;
}
var Uv = Lc("animationend"), Wv = Lc("animationiteration"), Hv = Lc("animationstart"), Yv = Lc("transitionend"), Xv = /* @__PURE__ */ new Map(), Cg = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function zi(t, e) {
  Xv.set(t, e), No(e, [t]);
}
for (var If = 0; If < Cg.length; If++) {
  var Df = Cg[If], Ek = Df.toLowerCase(), Tk = Df[0].toUpperCase() + Df.slice(1);
  zi(Ek, "on" + Tk);
}
zi(Uv, "onAnimationEnd");
zi(Wv, "onAnimationIteration");
zi(Hv, "onAnimationStart");
zi("dblclick", "onDoubleClick");
zi("focusin", "onFocus");
zi("focusout", "onBlur");
zi(Yv, "onTransitionEnd");
Cl("onMouseEnter", ["mouseout", "mouseover"]);
Cl("onMouseLeave", ["mouseout", "mouseover"]);
Cl("onPointerEnter", ["pointerout", "pointerover"]);
Cl("onPointerLeave", ["pointerout", "pointerover"]);
No("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
No("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
No("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
No("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
No("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
No("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var us = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), bk = new Set("cancel close invalid load scroll toggle".split(" ").concat(us));
function Eg(t, e, n) {
  var r = t.type || "unknown-event";
  t.currentTarget = n, E2(r, e, void 0, t), t.currentTarget = null;
}
function Gv(t, e) {
  e = (e & 4) !== 0;
  for (var n = 0; n < t.length; n++) {
    var r = t[n], i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (e)
        for (var l = r.length - 1; 0 <= l; l--) {
          var s = r[l], a = s.instance, u = s.currentTarget;
          if (s = s.listener, a !== o && i.isPropagationStopped())
            break e;
          Eg(i, s, u), o = a;
        }
      else
        for (l = 0; l < r.length; l++) {
          if (s = r[l], a = s.instance, u = s.currentTarget, s = s.listener, a !== o && i.isPropagationStopped())
            break e;
          Eg(i, s, u), o = a;
        }
    }
  }
  if (Yu)
    throw t = zd, Yu = !1, zd = null, t;
}
function Ce(t, e) {
  var n = e[Yd];
  n === void 0 && (n = e[Yd] = /* @__PURE__ */ new Set());
  var r = t + "__bubble";
  n.has(r) || (Qv(e, t, 2, !1), n.add(r));
}
function zf(t, e, n) {
  var r = 0;
  e && (r |= 4), Qv(n, t, r, e);
}
var Wa = "_reactListening" + Math.random().toString(36).slice(2);
function Ks(t) {
  if (!t[Wa]) {
    t[Wa] = !0, nv.forEach(function(n) {
      n !== "selectionchange" && (bk.has(n) || zf(n, !1, t), zf(n, !0, t));
    });
    var e = t.nodeType === 9 ? t : t.ownerDocument;
    e === null || e[Wa] || (e[Wa] = !0, zf("selectionchange", !1, e));
  }
}
function Qv(t, e, n, r) {
  switch (Nv(e)) {
    case 1:
      var i = B2;
      break;
    case 4:
      i = V2;
      break;
    default:
      i = vp;
  }
  n = i.bind(null, e, n, t), i = void 0, !Dd || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (i = !0), r ? i !== void 0 ? t.addEventListener(e, n, { capture: !0, passive: i }) : t.addEventListener(e, n, !0) : i !== void 0 ? t.addEventListener(e, n, { passive: i }) : t.addEventListener(e, n, !1);
}
function $f(t, e, n, r, i) {
  var o = r;
  if (!(e & 1) && !(e & 2) && r !== null)
    e:
      for (; ; ) {
        if (r === null)
          return;
        var l = r.tag;
        if (l === 3 || l === 4) {
          var s = r.stateNode.containerInfo;
          if (s === i || s.nodeType === 8 && s.parentNode === i)
            break;
          if (l === 4)
            for (l = r.return; l !== null; ) {
              var a = l.tag;
              if ((a === 3 || a === 4) && (a = l.stateNode.containerInfo, a === i || a.nodeType === 8 && a.parentNode === i))
                return;
              l = l.return;
            }
          for (; s !== null; ) {
            if (l = oo(s), l === null)
              return;
            if (a = l.tag, a === 5 || a === 6) {
              r = o = l;
              continue e;
            }
            s = s.parentNode;
          }
        }
        r = r.return;
      }
  yv(function() {
    var u = o, c = hp(n), f = [];
    e: {
      var h = Xv.get(t);
      if (h !== void 0) {
        var d = _p, g = t;
        switch (t) {
          case "keypress":
            if (Cu(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            d = rk;
            break;
          case "focusin":
            g = "focus", d = Rf;
            break;
          case "focusout":
            g = "blur", d = Rf;
            break;
          case "beforeblur":
          case "afterblur":
            d = Rf;
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
            d = hg;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            d = H2;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            d = lk;
            break;
          case Uv:
          case Wv:
          case Hv:
            d = G2;
            break;
          case Yv:
            d = ak;
            break;
          case "scroll":
            d = U2;
            break;
          case "wheel":
            d = ck;
            break;
          case "copy":
          case "cut":
          case "paste":
            d = q2;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            d = gg;
        }
        var p = (e & 4) !== 0, _ = !p && t === "scroll", v = p ? h !== null ? h + "Capture" : null : h;
        p = [];
        for (var m = u, y; m !== null; ) {
          y = m;
          var x = y.stateNode;
          if (y.tag === 5 && x !== null && (y = x, v !== null && (x = Hs(m, v), x != null && p.push(Zs(m, x, y)))), _)
            break;
          m = m.return;
        }
        0 < p.length && (h = new d(h, g, null, n, c), f.push({ event: h, listeners: p }));
      }
    }
    if (!(e & 7)) {
      e: {
        if (h = t === "mouseover" || t === "pointerover", d = t === "mouseout" || t === "pointerout", h && n !== Ad && (g = n.relatedTarget || n.fromElement) && (oo(g) || g[Yr]))
          break e;
        if ((d || h) && (h = c.window === c ? c : (h = c.ownerDocument) ? h.defaultView || h.parentWindow : window, d ? (g = n.relatedTarget || n.toElement, d = u, g = g ? oo(g) : null, g !== null && (_ = Ao(g), g !== _ || g.tag !== 5 && g.tag !== 6) && (g = null)) : (d = null, g = u), d !== g)) {
          if (p = hg, x = "onMouseLeave", v = "onMouseEnter", m = "mouse", (t === "pointerout" || t === "pointerover") && (p = gg, x = "onPointerLeave", v = "onPointerEnter", m = "pointer"), _ = d == null ? h : Ko(d), y = g == null ? h : Ko(g), h = new p(x, m + "leave", d, n, c), h.target = _, h.relatedTarget = y, x = null, oo(c) === u && (p = new p(v, m + "enter", g, n, c), p.target = y, p.relatedTarget = _, x = p), _ = x, d && g)
            t: {
              for (p = d, v = g, m = 0, y = p; y; y = Lo(y))
                m++;
              for (y = 0, x = v; x; x = Lo(x))
                y++;
              for (; 0 < m - y; )
                p = Lo(p), m--;
              for (; 0 < y - m; )
                v = Lo(v), y--;
              for (; m--; ) {
                if (p === v || v !== null && p === v.alternate)
                  break t;
                p = Lo(p), v = Lo(v);
              }
              p = null;
            }
          else
            p = null;
          d !== null && Tg(f, h, d, p, !1), g !== null && _ !== null && Tg(f, _, g, p, !0);
        }
      }
      e: {
        if (h = u ? Ko(u) : window, d = h.nodeName && h.nodeName.toLowerCase(), d === "select" || d === "input" && h.type === "file")
          var C = vk;
        else if (yg(h))
          if (jv)
            C = wk;
          else {
            C = _k;
            var T = yk;
          }
        else
          (d = h.nodeName) && d.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (C = xk);
        if (C && (C = C(t, u))) {
          $v(f, C, n, c);
          break e;
        }
        T && T(t, h, u), t === "focusout" && (T = h._wrapperState) && T.controlled && h.type === "number" && Pd(h, "number", h.value);
      }
      switch (T = u ? Ko(u) : window, t) {
        case "focusin":
          (yg(T) || T.contentEditable === "true") && (Qo = T, Fd = u, ks = null);
          break;
        case "focusout":
          ks = Fd = Qo = null;
          break;
        case "mousedown":
          Bd = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Bd = !1, Sg(f, n, c);
          break;
        case "selectionchange":
          if (Ck)
            break;
        case "keydown":
        case "keyup":
          Sg(f, n, c);
      }
      var E;
      if (wp)
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
        Go ? Dv(t, n) && (b = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
      b && (Iv && n.locale !== "ko" && (Go || b !== "onCompositionStart" ? b === "onCompositionEnd" && Go && (E = Av()) : (ai = c, yp = "value" in ai ? ai.value : ai.textContent, Go = !0)), T = Ku(u, b), 0 < T.length && (b = new pg(b, t, null, n, c), f.push({ event: b, listeners: T }), E ? b.data = E : (E = zv(n), E !== null && (b.data = E)))), (E = dk ? hk(t, n) : pk(t, n)) && (u = Ku(u, "onBeforeInput"), 0 < u.length && (c = new pg("onBeforeInput", "beforeinput", null, n, c), f.push({ event: c, listeners: u }), c.data = E));
    }
    Gv(f, e);
  });
}
function Zs(t, e, n) {
  return { instance: t, listener: e, currentTarget: n };
}
function Ku(t, e) {
  for (var n = e + "Capture", r = []; t !== null; ) {
    var i = t, o = i.stateNode;
    i.tag === 5 && o !== null && (i = o, o = Hs(t, n), o != null && r.unshift(Zs(t, o, i)), o = Hs(t, e), o != null && r.push(Zs(t, o, i))), t = t.return;
  }
  return r;
}
function Lo(t) {
  if (t === null)
    return null;
  do
    t = t.return;
  while (t && t.tag !== 5);
  return t || null;
}
function Tg(t, e, n, r, i) {
  for (var o = e._reactName, l = []; n !== null && n !== r; ) {
    var s = n, a = s.alternate, u = s.stateNode;
    if (a !== null && a === r)
      break;
    s.tag === 5 && u !== null && (s = u, i ? (a = Hs(n, o), a != null && l.unshift(Zs(n, a, s))) : i || (a = Hs(n, o), a != null && l.push(Zs(n, a, s)))), n = n.return;
  }
  l.length !== 0 && t.push({ event: e, listeners: l });
}
var Pk = /\r\n?/g, Ok = /\u0000|\uFFFD/g;
function bg(t) {
  return (typeof t == "string" ? t : "" + t).replace(Pk, `
`).replace(Ok, "");
}
function Ha(t, e, n) {
  if (e = bg(e), bg(t) !== e && n)
    throw Error(A(425));
}
function Zu() {
}
var Vd = null, Ud = null;
function Wd(t, e) {
  return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
}
var Hd = typeof setTimeout == "function" ? setTimeout : void 0, Rk = typeof clearTimeout == "function" ? clearTimeout : void 0, Pg = typeof Promise == "function" ? Promise : void 0, Mk = typeof queueMicrotask == "function" ? queueMicrotask : typeof Pg < "u" ? function(t) {
  return Pg.resolve(null).then(t).catch(Nk);
} : Hd;
function Nk(t) {
  setTimeout(function() {
    throw t;
  });
}
function jf(t, e) {
  var n = e, r = 0;
  do {
    var i = n.nextSibling;
    if (t.removeChild(n), i && i.nodeType === 8)
      if (n = i.data, n === "/$") {
        if (r === 0) {
          t.removeChild(i), Gs(e);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = i;
  } while (n);
  Gs(e);
}
function wi(t) {
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
function Og(t) {
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
var Fl = Math.random().toString(36).slice(2), _r = "__reactFiber$" + Fl, Js = "__reactProps$" + Fl, Yr = "__reactContainer$" + Fl, Yd = "__reactEvents$" + Fl, Ak = "__reactListeners$" + Fl, Ik = "__reactHandles$" + Fl;
function oo(t) {
  var e = t[_r];
  if (e)
    return e;
  for (var n = t.parentNode; n; ) {
    if (e = n[Yr] || n[_r]) {
      if (n = e.alternate, e.child !== null || n !== null && n.child !== null)
        for (t = Og(t); t !== null; ) {
          if (n = t[_r])
            return n;
          t = Og(t);
        }
      return e;
    }
    t = n, n = t.parentNode;
  }
  return null;
}
function Ea(t) {
  return t = t[_r] || t[Yr], !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t;
}
function Ko(t) {
  if (t.tag === 5 || t.tag === 6)
    return t.stateNode;
  throw Error(A(33));
}
function Fc(t) {
  return t[Js] || null;
}
var Xd = [], Zo = -1;
function $i(t) {
  return { current: t };
}
function Te(t) {
  0 > Zo || (t.current = Xd[Zo], Xd[Zo] = null, Zo--);
}
function Se(t, e) {
  Zo++, Xd[Zo] = t.current, t.current = e;
}
var Mi = {}, Pt = $i(Mi), Zt = $i(!1), wo = Mi;
function El(t, e) {
  var n = t.type.contextTypes;
  if (!n)
    return Mi;
  var r = t.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {}, o;
  for (o in n)
    i[o] = e[o];
  return r && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = e, t.__reactInternalMemoizedMaskedChildContext = i), i;
}
function Jt(t) {
  return t = t.childContextTypes, t != null;
}
function Ju() {
  Te(Zt), Te(Pt);
}
function Rg(t, e, n) {
  if (Pt.current !== Mi)
    throw Error(A(168));
  Se(Pt, e), Se(Zt, n);
}
function qv(t, e, n) {
  var r = t.stateNode;
  if (e = e.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var i in r)
    if (!(i in e))
      throw Error(A(108, y2(t) || "Unknown", i));
  return ze({}, n, r);
}
function ec(t) {
  return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || Mi, wo = Pt.current, Se(Pt, t), Se(Zt, Zt.current), !0;
}
function Mg(t, e, n) {
  var r = t.stateNode;
  if (!r)
    throw Error(A(169));
  n ? (t = qv(t, e, wo), r.__reactInternalMemoizedMergedChildContext = t, Te(Zt), Te(Pt), Se(Pt, t)) : Te(Zt), Se(Zt, n);
}
var zr = null, Bc = !1, Lf = !1;
function Kv(t) {
  zr === null ? zr = [t] : zr.push(t);
}
function Dk(t) {
  Bc = !0, Kv(t);
}
function ji() {
  if (!Lf && zr !== null) {
    Lf = !0;
    var t = 0, e = _e;
    try {
      var n = zr;
      for (_e = 1; t < n.length; t++) {
        var r = n[t];
        do
          r = r(!0);
        while (r !== null);
      }
      zr = null, Bc = !1;
    } catch (i) {
      throw zr !== null && (zr = zr.slice(t + 1)), kv(pp, ji), i;
    } finally {
      _e = e, Lf = !1;
    }
  }
  return null;
}
var Jo = [], el = 0, tc = null, nc = 0, On = [], Rn = 0, ko = null, Lr = 1, Fr = "";
function Ji(t, e) {
  Jo[el++] = nc, Jo[el++] = tc, tc = t, nc = e;
}
function Zv(t, e, n) {
  On[Rn++] = Lr, On[Rn++] = Fr, On[Rn++] = ko, ko = t;
  var r = Lr;
  t = Fr;
  var i = 32 - or(r) - 1;
  r &= ~(1 << i), n += 1;
  var o = 32 - or(e) + i;
  if (30 < o) {
    var l = i - i % 5;
    o = (r & (1 << l) - 1).toString(32), r >>= l, i -= l, Lr = 1 << 32 - or(e) + i | n << i | r, Fr = o + t;
  } else
    Lr = 1 << o | n << i | r, Fr = t;
}
function Sp(t) {
  t.return !== null && (Ji(t, 1), Zv(t, 1, 0));
}
function Cp(t) {
  for (; t === tc; )
    tc = Jo[--el], Jo[el] = null, nc = Jo[--el], Jo[el] = null;
  for (; t === ko; )
    ko = On[--Rn], On[Rn] = null, Fr = On[--Rn], On[Rn] = null, Lr = On[--Rn], On[Rn] = null;
}
var xn = null, _n = null, Pe = !1, tr = null;
function Jv(t, e) {
  var n = Dn(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = e, n.return = t, e = t.deletions, e === null ? (t.deletions = [n], t.flags |= 16) : e.push(n);
}
function Ng(t, e) {
  switch (t.tag) {
    case 5:
      var n = t.type;
      return e = e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase() ? null : e, e !== null ? (t.stateNode = e, xn = t, _n = wi(e.firstChild), !0) : !1;
    case 6:
      return e = t.pendingProps === "" || e.nodeType !== 3 ? null : e, e !== null ? (t.stateNode = e, xn = t, _n = null, !0) : !1;
    case 13:
      return e = e.nodeType !== 8 ? null : e, e !== null ? (n = ko !== null ? { id: Lr, overflow: Fr } : null, t.memoizedState = { dehydrated: e, treeContext: n, retryLane: 1073741824 }, n = Dn(18, null, null, 0), n.stateNode = e, n.return = t, t.child = n, xn = t, _n = null, !0) : !1;
    default:
      return !1;
  }
}
function Gd(t) {
  return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function Qd(t) {
  if (Pe) {
    var e = _n;
    if (e) {
      var n = e;
      if (!Ng(t, e)) {
        if (Gd(t))
          throw Error(A(418));
        e = wi(n.nextSibling);
        var r = xn;
        e && Ng(t, e) ? Jv(r, n) : (t.flags = t.flags & -4097 | 2, Pe = !1, xn = t);
      }
    } else {
      if (Gd(t))
        throw Error(A(418));
      t.flags = t.flags & -4097 | 2, Pe = !1, xn = t;
    }
  }
}
function Ag(t) {
  for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
    t = t.return;
  xn = t;
}
function Ya(t) {
  if (t !== xn)
    return !1;
  if (!Pe)
    return Ag(t), Pe = !0, !1;
  var e;
  if ((e = t.tag !== 3) && !(e = t.tag !== 5) && (e = t.type, e = e !== "head" && e !== "body" && !Wd(t.type, t.memoizedProps)), e && (e = _n)) {
    if (Gd(t))
      throw ey(), Error(A(418));
    for (; e; )
      Jv(t, e), e = wi(e.nextSibling);
  }
  if (Ag(t), t.tag === 13) {
    if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t)
      throw Error(A(317));
    e: {
      for (t = t.nextSibling, e = 0; t; ) {
        if (t.nodeType === 8) {
          var n = t.data;
          if (n === "/$") {
            if (e === 0) {
              _n = wi(t.nextSibling);
              break e;
            }
            e--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || e++;
        }
        t = t.nextSibling;
      }
      _n = null;
    }
  } else
    _n = xn ? wi(t.stateNode.nextSibling) : null;
  return !0;
}
function ey() {
  for (var t = _n; t; )
    t = wi(t.nextSibling);
}
function Tl() {
  _n = xn = null, Pe = !1;
}
function Ep(t) {
  tr === null ? tr = [t] : tr.push(t);
}
var zk = Kr.ReactCurrentBatchConfig;
function Jn(t, e) {
  if (t && t.defaultProps) {
    e = ze({}, e), t = t.defaultProps;
    for (var n in t)
      e[n] === void 0 && (e[n] = t[n]);
    return e;
  }
  return e;
}
var rc = $i(null), ic = null, tl = null, Tp = null;
function bp() {
  Tp = tl = ic = null;
}
function Pp(t) {
  var e = rc.current;
  Te(rc), t._currentValue = e;
}
function qd(t, e, n) {
  for (; t !== null; ) {
    var r = t.alternate;
    if ((t.childLanes & e) !== e ? (t.childLanes |= e, r !== null && (r.childLanes |= e)) : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e), t === n)
      break;
    t = t.return;
  }
}
function hl(t, e) {
  ic = t, Tp = tl = null, t = t.dependencies, t !== null && t.firstContext !== null && (t.lanes & e && (Kt = !0), t.firstContext = null);
}
function Bn(t) {
  var e = t._currentValue;
  if (Tp !== t)
    if (t = { context: t, memoizedValue: e, next: null }, tl === null) {
      if (ic === null)
        throw Error(A(308));
      tl = t, ic.dependencies = { lanes: 0, firstContext: t };
    } else
      tl = tl.next = t;
  return e;
}
var lo = null;
function Op(t) {
  lo === null ? lo = [t] : lo.push(t);
}
function ty(t, e, n, r) {
  var i = e.interleaved;
  return i === null ? (n.next = n, Op(e)) : (n.next = i.next, i.next = n), e.interleaved = n, Xr(t, r);
}
function Xr(t, e) {
  t.lanes |= e;
  var n = t.alternate;
  for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null; )
    t.childLanes |= e, n = t.alternate, n !== null && (n.childLanes |= e), n = t, t = t.return;
  return n.tag === 3 ? n.stateNode : null;
}
var oi = !1;
function Rp(t) {
  t.updateQueue = { baseState: t.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function ny(t, e) {
  t = t.updateQueue, e.updateQueue === t && (e.updateQueue = { baseState: t.baseState, firstBaseUpdate: t.firstBaseUpdate, lastBaseUpdate: t.lastBaseUpdate, shared: t.shared, effects: t.effects });
}
function Ur(t, e) {
  return { eventTime: t, lane: e, tag: 0, payload: null, callback: null, next: null };
}
function ki(t, e, n) {
  var r = t.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, ge & 2) {
    var i = r.pending;
    return i === null ? e.next = e : (e.next = i.next, i.next = e), r.pending = e, Xr(t, n);
  }
  return i = r.interleaved, i === null ? (e.next = e, Op(r)) : (e.next = i.next, i.next = e), r.interleaved = e, Xr(t, n);
}
function Eu(t, e, n) {
  if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194240) !== 0)) {
    var r = e.lanes;
    r &= t.pendingLanes, n |= r, e.lanes = n, gp(t, n);
  }
}
function Ig(t, e) {
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
function oc(t, e, n, r) {
  var i = t.updateQueue;
  oi = !1;
  var o = i.firstBaseUpdate, l = i.lastBaseUpdate, s = i.shared.pending;
  if (s !== null) {
    i.shared.pending = null;
    var a = s, u = a.next;
    a.next = null, l === null ? o = u : l.next = u, l = a;
    var c = t.alternate;
    c !== null && (c = c.updateQueue, s = c.lastBaseUpdate, s !== l && (s === null ? c.firstBaseUpdate = u : s.next = u, c.lastBaseUpdate = a));
  }
  if (o !== null) {
    var f = i.baseState;
    l = 0, c = u = a = null, s = o;
    do {
      var h = s.lane, d = s.eventTime;
      if ((r & h) === h) {
        c !== null && (c = c.next = {
          eventTime: d,
          lane: 0,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        });
        e: {
          var g = t, p = s;
          switch (h = e, d = n, p.tag) {
            case 1:
              if (g = p.payload, typeof g == "function") {
                f = g.call(d, f, h);
                break e;
              }
              f = g;
              break e;
            case 3:
              g.flags = g.flags & -65537 | 128;
            case 0:
              if (g = p.payload, h = typeof g == "function" ? g.call(d, f, h) : g, h == null)
                break e;
              f = ze({}, f, h);
              break e;
            case 2:
              oi = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && (t.flags |= 64, h = i.effects, h === null ? i.effects = [s] : h.push(s));
      } else
        d = { eventTime: d, lane: h, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, c === null ? (u = c = d, a = f) : c = c.next = d, l |= h;
      if (s = s.next, s === null) {
        if (s = i.shared.pending, s === null)
          break;
        h = s, s = h.next, h.next = null, i.lastBaseUpdate = h, i.shared.pending = null;
      }
    } while (1);
    if (c === null && (a = f), i.baseState = a, i.firstBaseUpdate = u, i.lastBaseUpdate = c, e = i.shared.interleaved, e !== null) {
      i = e;
      do
        l |= i.lane, i = i.next;
      while (i !== e);
    } else
      o === null && (i.shared.lanes = 0);
    Co |= l, t.lanes = l, t.memoizedState = f;
  }
}
function Dg(t, e, n) {
  if (t = e.effects, e.effects = null, t !== null)
    for (e = 0; e < t.length; e++) {
      var r = t[e], i = r.callback;
      if (i !== null) {
        if (r.callback = null, r = n, typeof i != "function")
          throw Error(A(191, i));
        i.call(r);
      }
    }
}
var ry = new tv.Component().refs;
function Kd(t, e, n, r) {
  e = t.memoizedState, n = n(r, e), n = n == null ? e : ze({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
}
var Vc = { isMounted: function(t) {
  return (t = t._reactInternals) ? Ao(t) === t : !1;
}, enqueueSetState: function(t, e, n) {
  t = t._reactInternals;
  var r = Lt(), i = Ci(t), o = Ur(r, i);
  o.payload = e, n != null && (o.callback = n), e = ki(t, o, i), e !== null && (lr(e, t, i, r), Eu(e, t, i));
}, enqueueReplaceState: function(t, e, n) {
  t = t._reactInternals;
  var r = Lt(), i = Ci(t), o = Ur(r, i);
  o.tag = 1, o.payload = e, n != null && (o.callback = n), e = ki(t, o, i), e !== null && (lr(e, t, i, r), Eu(e, t, i));
}, enqueueForceUpdate: function(t, e) {
  t = t._reactInternals;
  var n = Lt(), r = Ci(t), i = Ur(n, r);
  i.tag = 2, e != null && (i.callback = e), e = ki(t, i, r), e !== null && (lr(e, t, r, n), Eu(e, t, r));
} };
function zg(t, e, n, r, i, o, l) {
  return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(r, o, l) : e.prototype && e.prototype.isPureReactComponent ? !qs(n, r) || !qs(i, o) : !0;
}
function iy(t, e, n) {
  var r = !1, i = Mi, o = e.contextType;
  return typeof o == "object" && o !== null ? o = Bn(o) : (i = Jt(e) ? wo : Pt.current, r = e.contextTypes, o = (r = r != null) ? El(t, i) : Mi), e = new e(n, o), t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null, e.updater = Vc, t.stateNode = e, e._reactInternals = t, r && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = i, t.__reactInternalMemoizedMaskedChildContext = o), e;
}
function $g(t, e, n, r) {
  t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, r), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, r), e.state !== t && Vc.enqueueReplaceState(e, e.state, null);
}
function Zd(t, e, n, r) {
  var i = t.stateNode;
  i.props = n, i.state = t.memoizedState, i.refs = ry, Rp(t);
  var o = e.contextType;
  typeof o == "object" && o !== null ? i.context = Bn(o) : (o = Jt(e) ? wo : Pt.current, i.context = El(t, o)), i.state = t.memoizedState, o = e.getDerivedStateFromProps, typeof o == "function" && (Kd(t, e, o, n), i.state = t.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (e = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), e !== i.state && Vc.enqueueReplaceState(i, i.state, null), oc(t, n, i, r), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308);
}
function Kl(t, e, n) {
  if (t = n.ref, t !== null && typeof t != "function" && typeof t != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error(A(309));
        var r = n.stateNode;
      }
      if (!r)
        throw Error(A(147, t));
      var i = r, o = "" + t;
      return e !== null && e.ref !== null && typeof e.ref == "function" && e.ref._stringRef === o ? e.ref : (e = function(l) {
        var s = i.refs;
        s === ry && (s = i.refs = {}), l === null ? delete s[o] : s[o] = l;
      }, e._stringRef = o, e);
    }
    if (typeof t != "string")
      throw Error(A(284));
    if (!n._owner)
      throw Error(A(290, t));
  }
  return t;
}
function Xa(t, e) {
  throw t = Object.prototype.toString.call(e), Error(A(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t));
}
function jg(t) {
  var e = t._init;
  return e(t._payload);
}
function oy(t) {
  function e(v, m) {
    if (t) {
      var y = v.deletions;
      y === null ? (v.deletions = [m], v.flags |= 16) : y.push(m);
    }
  }
  function n(v, m) {
    if (!t)
      return null;
    for (; m !== null; )
      e(v, m), m = m.sibling;
    return null;
  }
  function r(v, m) {
    for (v = /* @__PURE__ */ new Map(); m !== null; )
      m.key !== null ? v.set(m.key, m) : v.set(m.index, m), m = m.sibling;
    return v;
  }
  function i(v, m) {
    return v = Ei(v, m), v.index = 0, v.sibling = null, v;
  }
  function o(v, m, y) {
    return v.index = y, t ? (y = v.alternate, y !== null ? (y = y.index, y < m ? (v.flags |= 2, m) : y) : (v.flags |= 2, m)) : (v.flags |= 1048576, m);
  }
  function l(v) {
    return t && v.alternate === null && (v.flags |= 2), v;
  }
  function s(v, m, y, x) {
    return m === null || m.tag !== 6 ? (m = Yf(y, v.mode, x), m.return = v, m) : (m = i(m, y), m.return = v, m);
  }
  function a(v, m, y, x) {
    var C = y.type;
    return C === Xo ? c(v, m, y.props.children, x, y.key) : m !== null && (m.elementType === C || typeof C == "object" && C !== null && C.$$typeof === ii && jg(C) === m.type) ? (x = i(m, y.props), x.ref = Kl(v, m, y), x.return = v, x) : (x = Mu(y.type, y.key, y.props, null, v.mode, x), x.ref = Kl(v, m, y), x.return = v, x);
  }
  function u(v, m, y, x) {
    return m === null || m.tag !== 4 || m.stateNode.containerInfo !== y.containerInfo || m.stateNode.implementation !== y.implementation ? (m = Xf(y, v.mode, x), m.return = v, m) : (m = i(m, y.children || []), m.return = v, m);
  }
  function c(v, m, y, x, C) {
    return m === null || m.tag !== 7 ? (m = ho(y, v.mode, x, C), m.return = v, m) : (m = i(m, y), m.return = v, m);
  }
  function f(v, m, y) {
    if (typeof m == "string" && m !== "" || typeof m == "number")
      return m = Yf("" + m, v.mode, y), m.return = v, m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case za:
          return y = Mu(m.type, m.key, m.props, null, v.mode, y), y.ref = Kl(v, null, m), y.return = v, y;
        case Yo:
          return m = Xf(m, v.mode, y), m.return = v, m;
        case ii:
          var x = m._init;
          return f(v, x(m._payload), y);
      }
      if (ss(m) || Yl(m))
        return m = ho(m, v.mode, y, null), m.return = v, m;
      Xa(v, m);
    }
    return null;
  }
  function h(v, m, y, x) {
    var C = m !== null ? m.key : null;
    if (typeof y == "string" && y !== "" || typeof y == "number")
      return C !== null ? null : s(v, m, "" + y, x);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case za:
          return y.key === C ? a(v, m, y, x) : null;
        case Yo:
          return y.key === C ? u(v, m, y, x) : null;
        case ii:
          return C = y._init, h(
            v,
            m,
            C(y._payload),
            x
          );
      }
      if (ss(y) || Yl(y))
        return C !== null ? null : c(v, m, y, x, null);
      Xa(v, y);
    }
    return null;
  }
  function d(v, m, y, x, C) {
    if (typeof x == "string" && x !== "" || typeof x == "number")
      return v = v.get(y) || null, s(m, v, "" + x, C);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case za:
          return v = v.get(x.key === null ? y : x.key) || null, a(m, v, x, C);
        case Yo:
          return v = v.get(x.key === null ? y : x.key) || null, u(m, v, x, C);
        case ii:
          var T = x._init;
          return d(v, m, y, T(x._payload), C);
      }
      if (ss(x) || Yl(x))
        return v = v.get(y) || null, c(m, v, x, C, null);
      Xa(m, x);
    }
    return null;
  }
  function g(v, m, y, x) {
    for (var C = null, T = null, E = m, b = m = 0, O = null; E !== null && b < y.length; b++) {
      E.index > b ? (O = E, E = null) : O = E.sibling;
      var P = h(v, E, y[b], x);
      if (P === null) {
        E === null && (E = O);
        break;
      }
      t && E && P.alternate === null && e(v, E), m = o(P, m, b), T === null ? C = P : T.sibling = P, T = P, E = O;
    }
    if (b === y.length)
      return n(v, E), Pe && Ji(v, b), C;
    if (E === null) {
      for (; b < y.length; b++)
        E = f(v, y[b], x), E !== null && (m = o(E, m, b), T === null ? C = E : T.sibling = E, T = E);
      return Pe && Ji(v, b), C;
    }
    for (E = r(v, E); b < y.length; b++)
      O = d(E, v, b, y[b], x), O !== null && (t && O.alternate !== null && E.delete(O.key === null ? b : O.key), m = o(O, m, b), T === null ? C = O : T.sibling = O, T = O);
    return t && E.forEach(function(j) {
      return e(v, j);
    }), Pe && Ji(v, b), C;
  }
  function p(v, m, y, x) {
    var C = Yl(y);
    if (typeof C != "function")
      throw Error(A(150));
    if (y = C.call(y), y == null)
      throw Error(A(151));
    for (var T = C = null, E = m, b = m = 0, O = null, P = y.next(); E !== null && !P.done; b++, P = y.next()) {
      E.index > b ? (O = E, E = null) : O = E.sibling;
      var j = h(v, E, P.value, x);
      if (j === null) {
        E === null && (E = O);
        break;
      }
      t && E && j.alternate === null && e(v, E), m = o(j, m, b), T === null ? C = j : T.sibling = j, T = j, E = O;
    }
    if (P.done)
      return n(
        v,
        E
      ), Pe && Ji(v, b), C;
    if (E === null) {
      for (; !P.done; b++, P = y.next())
        P = f(v, P.value, x), P !== null && (m = o(P, m, b), T === null ? C = P : T.sibling = P, T = P);
      return Pe && Ji(v, b), C;
    }
    for (E = r(v, E); !P.done; b++, P = y.next())
      P = d(E, v, b, P.value, x), P !== null && (t && P.alternate !== null && E.delete(P.key === null ? b : P.key), m = o(P, m, b), T === null ? C = P : T.sibling = P, T = P);
    return t && E.forEach(function(D) {
      return e(v, D);
    }), Pe && Ji(v, b), C;
  }
  function _(v, m, y, x) {
    if (typeof y == "object" && y !== null && y.type === Xo && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case za:
          e: {
            for (var C = y.key, T = m; T !== null; ) {
              if (T.key === C) {
                if (C = y.type, C === Xo) {
                  if (T.tag === 7) {
                    n(v, T.sibling), m = i(T, y.props.children), m.return = v, v = m;
                    break e;
                  }
                } else if (T.elementType === C || typeof C == "object" && C !== null && C.$$typeof === ii && jg(C) === T.type) {
                  n(v, T.sibling), m = i(T, y.props), m.ref = Kl(v, T, y), m.return = v, v = m;
                  break e;
                }
                n(v, T);
                break;
              } else
                e(v, T);
              T = T.sibling;
            }
            y.type === Xo ? (m = ho(y.props.children, v.mode, x, y.key), m.return = v, v = m) : (x = Mu(y.type, y.key, y.props, null, v.mode, x), x.ref = Kl(v, m, y), x.return = v, v = x);
          }
          return l(v);
        case Yo:
          e: {
            for (T = y.key; m !== null; ) {
              if (m.key === T)
                if (m.tag === 4 && m.stateNode.containerInfo === y.containerInfo && m.stateNode.implementation === y.implementation) {
                  n(v, m.sibling), m = i(m, y.children || []), m.return = v, v = m;
                  break e;
                } else {
                  n(v, m);
                  break;
                }
              else
                e(v, m);
              m = m.sibling;
            }
            m = Xf(y, v.mode, x), m.return = v, v = m;
          }
          return l(v);
        case ii:
          return T = y._init, _(v, m, T(y._payload), x);
      }
      if (ss(y))
        return g(v, m, y, x);
      if (Yl(y))
        return p(v, m, y, x);
      Xa(v, y);
    }
    return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y, m !== null && m.tag === 6 ? (n(v, m.sibling), m = i(m, y), m.return = v, v = m) : (n(v, m), m = Yf(y, v.mode, x), m.return = v, v = m), l(v)) : n(v, m);
  }
  return _;
}
var bl = oy(!0), ly = oy(!1), Ta = {}, Cr = $i(Ta), ea = $i(Ta), ta = $i(Ta);
function so(t) {
  if (t === Ta)
    throw Error(A(174));
  return t;
}
function Mp(t, e) {
  switch (Se(ta, e), Se(ea, t), Se(Cr, Ta), t = e.nodeType, t) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : Rd(null, "");
      break;
    default:
      t = t === 8 ? e.parentNode : e, e = t.namespaceURI || null, t = t.tagName, e = Rd(e, t);
  }
  Te(Cr), Se(Cr, e);
}
function Pl() {
  Te(Cr), Te(ea), Te(ta);
}
function sy(t) {
  so(ta.current);
  var e = so(Cr.current), n = Rd(e, t.type);
  e !== n && (Se(ea, t), Se(Cr, n));
}
function Np(t) {
  ea.current === t && (Te(Cr), Te(ea));
}
var Ne = $i(0);
function lc(t) {
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
var Ff = [];
function Ap() {
  for (var t = 0; t < Ff.length; t++)
    Ff[t]._workInProgressVersionPrimary = null;
  Ff.length = 0;
}
var Tu = Kr.ReactCurrentDispatcher, Bf = Kr.ReactCurrentBatchConfig, So = 0, De = null, Je = null, lt = null, sc = !1, Ss = !1, na = 0, $k = 0;
function wt() {
  throw Error(A(321));
}
function Ip(t, e) {
  if (e === null)
    return !1;
  for (var n = 0; n < e.length && n < t.length; n++)
    if (!ar(t[n], e[n]))
      return !1;
  return !0;
}
function Dp(t, e, n, r, i, o) {
  if (So = o, De = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, Tu.current = t === null || t.memoizedState === null ? Bk : Vk, t = n(r, i), Ss) {
    o = 0;
    do {
      if (Ss = !1, na = 0, 25 <= o)
        throw Error(A(301));
      o += 1, lt = Je = null, e.updateQueue = null, Tu.current = Uk, t = n(r, i);
    } while (Ss);
  }
  if (Tu.current = ac, e = Je !== null && Je.next !== null, So = 0, lt = Je = De = null, sc = !1, e)
    throw Error(A(300));
  return t;
}
function zp() {
  var t = na !== 0;
  return na = 0, t;
}
function mr() {
  var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return lt === null ? De.memoizedState = lt = t : lt = lt.next = t, lt;
}
function Vn() {
  if (Je === null) {
    var t = De.alternate;
    t = t !== null ? t.memoizedState : null;
  } else
    t = Je.next;
  var e = lt === null ? De.memoizedState : lt.next;
  if (e !== null)
    lt = e, Je = t;
  else {
    if (t === null)
      throw Error(A(310));
    Je = t, t = { memoizedState: Je.memoizedState, baseState: Je.baseState, baseQueue: Je.baseQueue, queue: Je.queue, next: null }, lt === null ? De.memoizedState = lt = t : lt = lt.next = t;
  }
  return lt;
}
function ra(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function Vf(t) {
  var e = Vn(), n = e.queue;
  if (n === null)
    throw Error(A(311));
  n.lastRenderedReducer = t;
  var r = Je, i = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var l = i.next;
      i.next = o.next, o.next = l;
    }
    r.baseQueue = i = o, n.pending = null;
  }
  if (i !== null) {
    o = i.next, r = r.baseState;
    var s = l = null, a = null, u = o;
    do {
      var c = u.lane;
      if ((So & c) === c)
        a !== null && (a = a.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : t(r, u.action);
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        a === null ? (s = a = f, l = r) : a = a.next = f, De.lanes |= c, Co |= c;
      }
      u = u.next;
    } while (u !== null && u !== o);
    a === null ? l = r : a.next = s, ar(r, e.memoizedState) || (Kt = !0), e.memoizedState = r, e.baseState = l, e.baseQueue = a, n.lastRenderedState = r;
  }
  if (t = n.interleaved, t !== null) {
    i = t;
    do
      o = i.lane, De.lanes |= o, Co |= o, i = i.next;
    while (i !== t);
  } else
    i === null && (n.lanes = 0);
  return [e.memoizedState, n.dispatch];
}
function Uf(t) {
  var e = Vn(), n = e.queue;
  if (n === null)
    throw Error(A(311));
  n.lastRenderedReducer = t;
  var r = n.dispatch, i = n.pending, o = e.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = i = i.next;
    do
      o = t(o, l.action), l = l.next;
    while (l !== i);
    ar(o, e.memoizedState) || (Kt = !0), e.memoizedState = o, e.baseQueue === null && (e.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function ay() {
}
function uy(t, e) {
  var n = De, r = Vn(), i = e(), o = !ar(r.memoizedState, i);
  if (o && (r.memoizedState = i, Kt = !0), r = r.queue, $p(dy.bind(null, n, r, t), [t]), r.getSnapshot !== e || o || lt !== null && lt.memoizedState.tag & 1) {
    if (n.flags |= 2048, ia(9, fy.bind(null, n, r, i, e), void 0, null), st === null)
      throw Error(A(349));
    So & 30 || cy(n, e, i);
  }
  return i;
}
function cy(t, e, n) {
  t.flags |= 16384, t = { getSnapshot: e, value: n }, e = De.updateQueue, e === null ? (e = { lastEffect: null, stores: null }, De.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t));
}
function fy(t, e, n, r) {
  e.value = n, e.getSnapshot = r, hy(e) && py(t);
}
function dy(t, e, n) {
  return n(function() {
    hy(e) && py(t);
  });
}
function hy(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var n = e();
    return !ar(t, n);
  } catch {
    return !0;
  }
}
function py(t) {
  var e = Xr(t, 1);
  e !== null && lr(e, t, 1, -1);
}
function Lg(t) {
  var e = mr();
  return typeof t == "function" && (t = t()), e.memoizedState = e.baseState = t, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ra, lastRenderedState: t }, e.queue = t, t = t.dispatch = Fk.bind(null, De, t), [e.memoizedState, t];
}
function ia(t, e, n, r) {
  return t = { tag: t, create: e, destroy: n, deps: r, next: null }, e = De.updateQueue, e === null ? (e = { lastEffect: null, stores: null }, De.updateQueue = e, e.lastEffect = t.next = t) : (n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (r = n.next, n.next = t, t.next = r, e.lastEffect = t)), t;
}
function gy() {
  return Vn().memoizedState;
}
function bu(t, e, n, r) {
  var i = mr();
  De.flags |= t, i.memoizedState = ia(1 | e, n, void 0, r === void 0 ? null : r);
}
function Uc(t, e, n, r) {
  var i = Vn();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Je !== null) {
    var l = Je.memoizedState;
    if (o = l.destroy, r !== null && Ip(r, l.deps)) {
      i.memoizedState = ia(e, n, o, r);
      return;
    }
  }
  De.flags |= t, i.memoizedState = ia(1 | e, n, o, r);
}
function Fg(t, e) {
  return bu(8390656, 8, t, e);
}
function $p(t, e) {
  return Uc(2048, 8, t, e);
}
function my(t, e) {
  return Uc(4, 2, t, e);
}
function vy(t, e) {
  return Uc(4, 4, t, e);
}
function yy(t, e) {
  if (typeof e == "function")
    return t = t(), e(t), function() {
      e(null);
    };
  if (e != null)
    return t = t(), e.current = t, function() {
      e.current = null;
    };
}
function _y(t, e, n) {
  return n = n != null ? n.concat([t]) : null, Uc(4, 4, yy.bind(null, e, t), n);
}
function jp() {
}
function xy(t, e) {
  var n = Vn();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && Ip(e, r[1]) ? r[0] : (n.memoizedState = [t, e], t);
}
function wy(t, e) {
  var n = Vn();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && Ip(e, r[1]) ? r[0] : (t = t(), n.memoizedState = [t, e], t);
}
function ky(t, e, n) {
  return So & 21 ? (ar(n, e) || (n = Ev(), De.lanes |= n, Co |= n, t.baseState = !0), e) : (t.baseState && (t.baseState = !1, Kt = !0), t.memoizedState = n);
}
function jk(t, e) {
  var n = _e;
  _e = n !== 0 && 4 > n ? n : 4, t(!0);
  var r = Bf.transition;
  Bf.transition = {};
  try {
    t(!1), e();
  } finally {
    _e = n, Bf.transition = r;
  }
}
function Sy() {
  return Vn().memoizedState;
}
function Lk(t, e, n) {
  var r = Ci(t);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Cy(t))
    Ey(e, n);
  else if (n = ty(t, e, n, r), n !== null) {
    var i = Lt();
    lr(n, t, r, i), Ty(n, e, r);
  }
}
function Fk(t, e, n) {
  var r = Ci(t), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Cy(t))
    Ey(e, i);
  else {
    var o = t.alternate;
    if (t.lanes === 0 && (o === null || o.lanes === 0) && (o = e.lastRenderedReducer, o !== null))
      try {
        var l = e.lastRenderedState, s = o(l, n);
        if (i.hasEagerState = !0, i.eagerState = s, ar(s, l)) {
          var a = e.interleaved;
          a === null ? (i.next = i, Op(e)) : (i.next = a.next, a.next = i), e.interleaved = i;
          return;
        }
      } catch {
      } finally {
      }
    n = ty(t, e, i, r), n !== null && (i = Lt(), lr(n, t, r, i), Ty(n, e, r));
  }
}
function Cy(t) {
  var e = t.alternate;
  return t === De || e !== null && e === De;
}
function Ey(t, e) {
  Ss = sc = !0;
  var n = t.pending;
  n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
}
function Ty(t, e, n) {
  if (n & 4194240) {
    var r = e.lanes;
    r &= t.pendingLanes, n |= r, e.lanes = n, gp(t, n);
  }
}
var ac = { readContext: Bn, useCallback: wt, useContext: wt, useEffect: wt, useImperativeHandle: wt, useInsertionEffect: wt, useLayoutEffect: wt, useMemo: wt, useReducer: wt, useRef: wt, useState: wt, useDebugValue: wt, useDeferredValue: wt, useTransition: wt, useMutableSource: wt, useSyncExternalStore: wt, useId: wt, unstable_isNewReconciler: !1 }, Bk = { readContext: Bn, useCallback: function(t, e) {
  return mr().memoizedState = [t, e === void 0 ? null : e], t;
}, useContext: Bn, useEffect: Fg, useImperativeHandle: function(t, e, n) {
  return n = n != null ? n.concat([t]) : null, bu(
    4194308,
    4,
    yy.bind(null, e, t),
    n
  );
}, useLayoutEffect: function(t, e) {
  return bu(4194308, 4, t, e);
}, useInsertionEffect: function(t, e) {
  return bu(4, 2, t, e);
}, useMemo: function(t, e) {
  var n = mr();
  return e = e === void 0 ? null : e, t = t(), n.memoizedState = [t, e], t;
}, useReducer: function(t, e, n) {
  var r = mr();
  return e = n !== void 0 ? n(e) : e, r.memoizedState = r.baseState = e, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: e }, r.queue = t, t = t.dispatch = Lk.bind(null, De, t), [r.memoizedState, t];
}, useRef: function(t) {
  var e = mr();
  return t = { current: t }, e.memoizedState = t;
}, useState: Lg, useDebugValue: jp, useDeferredValue: function(t) {
  return mr().memoizedState = t;
}, useTransition: function() {
  var t = Lg(!1), e = t[0];
  return t = jk.bind(null, t[1]), mr().memoizedState = t, [e, t];
}, useMutableSource: function() {
}, useSyncExternalStore: function(t, e, n) {
  var r = De, i = mr();
  if (Pe) {
    if (n === void 0)
      throw Error(A(407));
    n = n();
  } else {
    if (n = e(), st === null)
      throw Error(A(349));
    So & 30 || cy(r, e, n);
  }
  i.memoizedState = n;
  var o = { value: n, getSnapshot: e };
  return i.queue = o, Fg(dy.bind(
    null,
    r,
    o,
    t
  ), [t]), r.flags |= 2048, ia(9, fy.bind(null, r, o, n, e), void 0, null), n;
}, useId: function() {
  var t = mr(), e = st.identifierPrefix;
  if (Pe) {
    var n = Fr, r = Lr;
    n = (r & ~(1 << 32 - or(r) - 1)).toString(32) + n, e = ":" + e + "R" + n, n = na++, 0 < n && (e += "H" + n.toString(32)), e += ":";
  } else
    n = $k++, e = ":" + e + "r" + n.toString(32) + ":";
  return t.memoizedState = e;
}, unstable_isNewReconciler: !1 }, Vk = {
  readContext: Bn,
  useCallback: xy,
  useContext: Bn,
  useEffect: $p,
  useImperativeHandle: _y,
  useInsertionEffect: my,
  useLayoutEffect: vy,
  useMemo: wy,
  useReducer: Vf,
  useRef: gy,
  useState: function() {
    return Vf(ra);
  },
  useDebugValue: jp,
  useDeferredValue: function(t) {
    var e = Vn();
    return ky(e, Je.memoizedState, t);
  },
  useTransition: function() {
    var t = Vf(ra)[0], e = Vn().memoizedState;
    return [t, e];
  },
  useMutableSource: ay,
  useSyncExternalStore: uy,
  useId: Sy,
  unstable_isNewReconciler: !1
}, Uk = { readContext: Bn, useCallback: xy, useContext: Bn, useEffect: $p, useImperativeHandle: _y, useInsertionEffect: my, useLayoutEffect: vy, useMemo: wy, useReducer: Uf, useRef: gy, useState: function() {
  return Uf(ra);
}, useDebugValue: jp, useDeferredValue: function(t) {
  var e = Vn();
  return Je === null ? e.memoizedState = t : ky(e, Je.memoizedState, t);
}, useTransition: function() {
  var t = Uf(ra)[0], e = Vn().memoizedState;
  return [t, e];
}, useMutableSource: ay, useSyncExternalStore: uy, useId: Sy, unstable_isNewReconciler: !1 };
function Ol(t, e) {
  try {
    var n = "", r = e;
    do
      n += v2(r), r = r.return;
    while (r);
    var i = n;
  } catch (o) {
    i = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: t, source: e, stack: i, digest: null };
}
function Wf(t, e, n) {
  return { value: t, source: null, stack: n ?? null, digest: e ?? null };
}
function Jd(t, e) {
  try {
    console.error(e.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Wk = typeof WeakMap == "function" ? WeakMap : Map;
function by(t, e, n) {
  n = Ur(-1, n), n.tag = 3, n.payload = { element: null };
  var r = e.value;
  return n.callback = function() {
    cc || (cc = !0, uh = r), Jd(t, e);
  }, n;
}
function Py(t, e, n) {
  n = Ur(-1, n), n.tag = 3;
  var r = t.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = e.value;
    n.payload = function() {
      return r(i);
    }, n.callback = function() {
      Jd(t, e);
    };
  }
  var o = t.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    Jd(t, e), typeof r != "function" && (Si === null ? Si = /* @__PURE__ */ new Set([this]) : Si.add(this));
    var l = e.stack;
    this.componentDidCatch(e.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function Bg(t, e, n) {
  var r = t.pingCache;
  if (r === null) {
    r = t.pingCache = new Wk();
    var i = /* @__PURE__ */ new Set();
    r.set(e, i);
  } else
    i = r.get(e), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(e, i));
  i.has(n) || (i.add(n), t = iS.bind(null, t, e, n), e.then(t, t));
}
function Vg(t) {
  do {
    var e;
    if ((e = t.tag === 13) && (e = t.memoizedState, e = e !== null ? e.dehydrated !== null : !0), e)
      return t;
    t = t.return;
  } while (t !== null);
  return null;
}
function Ug(t, e, n, r, i) {
  return t.mode & 1 ? (t.flags |= 65536, t.lanes = i, t) : (t === e ? t.flags |= 65536 : (t.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (e = Ur(-1, 1), e.tag = 2, ki(n, e, 1))), n.lanes |= 1), t);
}
var Hk = Kr.ReactCurrentOwner, Kt = !1;
function Nt(t, e, n, r) {
  e.child = t === null ? ly(e, null, n, r) : bl(e, t.child, n, r);
}
function Wg(t, e, n, r, i) {
  n = n.render;
  var o = e.ref;
  return hl(e, i), r = Dp(t, e, n, r, o, i), n = zp(), t !== null && !Kt ? (e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~i, Gr(t, e, i)) : (Pe && n && Sp(e), e.flags |= 1, Nt(t, e, r, i), e.child);
}
function Hg(t, e, n, r, i) {
  if (t === null) {
    var o = n.type;
    return typeof o == "function" && !Yp(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (e.tag = 15, e.type = o, Oy(t, e, o, r, i)) : (t = Mu(n.type, null, r, e, e.mode, i), t.ref = e.ref, t.return = e, e.child = t);
  }
  if (o = t.child, !(t.lanes & i)) {
    var l = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : qs, n(l, r) && t.ref === e.ref)
      return Gr(t, e, i);
  }
  return e.flags |= 1, t = Ei(o, r), t.ref = e.ref, t.return = e, e.child = t;
}
function Oy(t, e, n, r, i) {
  if (t !== null) {
    var o = t.memoizedProps;
    if (qs(o, r) && t.ref === e.ref)
      if (Kt = !1, e.pendingProps = r = o, (t.lanes & i) !== 0)
        t.flags & 131072 && (Kt = !0);
      else
        return e.lanes = t.lanes, Gr(t, e, i);
  }
  return eh(t, e, n, r, i);
}
function Ry(t, e, n) {
  var r = e.pendingProps, i = r.children, o = t !== null ? t.memoizedState : null;
  if (r.mode === "hidden")
    if (!(e.mode & 1))
      e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Se(rl, pn), pn |= n;
    else {
      if (!(n & 1073741824))
        return t = o !== null ? o.baseLanes | n : n, e.lanes = e.childLanes = 1073741824, e.memoizedState = { baseLanes: t, cachePool: null, transitions: null }, e.updateQueue = null, Se(rl, pn), pn |= t, null;
      e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, Se(rl, pn), pn |= r;
    }
  else
    o !== null ? (r = o.baseLanes | n, e.memoizedState = null) : r = n, Se(rl, pn), pn |= r;
  return Nt(t, e, i, n), e.child;
}
function My(t, e) {
  var n = e.ref;
  (t === null && n !== null || t !== null && t.ref !== n) && (e.flags |= 512, e.flags |= 2097152);
}
function eh(t, e, n, r, i) {
  var o = Jt(n) ? wo : Pt.current;
  return o = El(e, o), hl(e, i), n = Dp(t, e, n, r, o, i), r = zp(), t !== null && !Kt ? (e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~i, Gr(t, e, i)) : (Pe && r && Sp(e), e.flags |= 1, Nt(t, e, n, i), e.child);
}
function Yg(t, e, n, r, i) {
  if (Jt(n)) {
    var o = !0;
    ec(e);
  } else
    o = !1;
  if (hl(e, i), e.stateNode === null)
    Pu(t, e), iy(e, n, r), Zd(e, n, r, i), r = !0;
  else if (t === null) {
    var l = e.stateNode, s = e.memoizedProps;
    l.props = s;
    var a = l.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = Bn(u) : (u = Jt(n) ? wo : Pt.current, u = El(e, u));
    var c = n.getDerivedStateFromProps, f = typeof c == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    f || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== r || a !== u) && $g(e, l, r, u), oi = !1;
    var h = e.memoizedState;
    l.state = h, oc(e, r, l, i), a = e.memoizedState, s !== r || h !== a || Zt.current || oi ? (typeof c == "function" && (Kd(e, n, c, r), a = e.memoizedState), (s = oi || zg(e, n, s, r, h, a, u)) ? (f || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = r, e.memoizedState = a), l.props = r, l.state = a, l.context = u, r = s) : (typeof l.componentDidMount == "function" && (e.flags |= 4194308), r = !1);
  } else {
    l = e.stateNode, ny(t, e), s = e.memoizedProps, u = e.type === e.elementType ? s : Jn(e.type, s), l.props = u, f = e.pendingProps, h = l.context, a = n.contextType, typeof a == "object" && a !== null ? a = Bn(a) : (a = Jt(n) ? wo : Pt.current, a = El(e, a));
    var d = n.getDerivedStateFromProps;
    (c = typeof d == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== f || h !== a) && $g(e, l, r, a), oi = !1, h = e.memoizedState, l.state = h, oc(e, r, l, i);
    var g = e.memoizedState;
    s !== f || h !== g || Zt.current || oi ? (typeof d == "function" && (Kd(e, n, d, r), g = e.memoizedState), (u = oi || zg(e, n, u, r, h, g, a) || !1) ? (c || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, g, a), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, g, a)), typeof l.componentDidUpdate == "function" && (e.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || s === t.memoizedProps && h === t.memoizedState || (e.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === t.memoizedProps && h === t.memoizedState || (e.flags |= 1024), e.memoizedProps = r, e.memoizedState = g), l.props = r, l.state = g, l.context = a, r = u) : (typeof l.componentDidUpdate != "function" || s === t.memoizedProps && h === t.memoizedState || (e.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === t.memoizedProps && h === t.memoizedState || (e.flags |= 1024), r = !1);
  }
  return th(t, e, n, r, o, i);
}
function th(t, e, n, r, i, o) {
  My(t, e);
  var l = (e.flags & 128) !== 0;
  if (!r && !l)
    return i && Mg(e, n, !1), Gr(t, e, o);
  r = e.stateNode, Hk.current = e;
  var s = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return e.flags |= 1, t !== null && l ? (e.child = bl(e, t.child, null, o), e.child = bl(e, null, s, o)) : Nt(t, e, s, o), e.memoizedState = r.state, i && Mg(e, n, !0), e.child;
}
function Ny(t) {
  var e = t.stateNode;
  e.pendingContext ? Rg(t, e.pendingContext, e.pendingContext !== e.context) : e.context && Rg(t, e.context, !1), Mp(t, e.containerInfo);
}
function Xg(t, e, n, r, i) {
  return Tl(), Ep(i), e.flags |= 256, Nt(t, e, n, r), e.child;
}
var nh = { dehydrated: null, treeContext: null, retryLane: 0 };
function rh(t) {
  return { baseLanes: t, cachePool: null, transitions: null };
}
function Ay(t, e, n) {
  var r = e.pendingProps, i = Ne.current, o = !1, l = (e.flags & 128) !== 0, s;
  if ((s = l) || (s = t !== null && t.memoizedState === null ? !1 : (i & 2) !== 0), s ? (o = !0, e.flags &= -129) : (t === null || t.memoizedState !== null) && (i |= 1), Se(Ne, i & 1), t === null)
    return Qd(e), t = e.memoizedState, t !== null && (t = t.dehydrated, t !== null) ? (e.mode & 1 ? t.data === "$!" ? e.lanes = 8 : e.lanes = 1073741824 : e.lanes = 1, null) : (l = r.children, t = r.fallback, o ? (r = e.mode, o = e.child, l = { mode: "hidden", children: l }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = l) : o = Yc(l, r, 0, null), t = ho(t, r, n, null), o.return = e, t.return = e, o.sibling = t, e.child = o, e.child.memoizedState = rh(n), e.memoizedState = nh, t) : Lp(e, l));
  if (i = t.memoizedState, i !== null && (s = i.dehydrated, s !== null))
    return Yk(t, e, l, r, s, i, n);
  if (o) {
    o = r.fallback, l = e.mode, i = t.child, s = i.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(l & 1) && e.child !== i ? (r = e.child, r.childLanes = 0, r.pendingProps = a, e.deletions = null) : (r = Ei(i, a), r.subtreeFlags = i.subtreeFlags & 14680064), s !== null ? o = Ei(s, o) : (o = ho(o, l, n, null), o.flags |= 2), o.return = e, r.return = e, r.sibling = o, e.child = r, r = o, o = e.child, l = t.child.memoizedState, l = l === null ? rh(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, o.memoizedState = l, o.childLanes = t.childLanes & ~n, e.memoizedState = nh, r;
  }
  return o = t.child, t = o.sibling, r = Ei(o, { mode: "visible", children: r.children }), !(e.mode & 1) && (r.lanes = n), r.return = e, r.sibling = null, t !== null && (n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t)), e.child = r, e.memoizedState = null, r;
}
function Lp(t, e) {
  return e = Yc({ mode: "visible", children: e }, t.mode, 0, null), e.return = t, t.child = e;
}
function Ga(t, e, n, r) {
  return r !== null && Ep(r), bl(e, t.child, null, n), t = Lp(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t;
}
function Yk(t, e, n, r, i, o, l) {
  if (n)
    return e.flags & 256 ? (e.flags &= -257, r = Wf(Error(A(422))), Ga(t, e, l, r)) : e.memoizedState !== null ? (e.child = t.child, e.flags |= 128, null) : (o = r.fallback, i = e.mode, r = Yc({ mode: "visible", children: r.children }, i, 0, null), o = ho(o, i, l, null), o.flags |= 2, r.return = e, o.return = e, r.sibling = o, e.child = r, e.mode & 1 && bl(e, t.child, null, l), e.child.memoizedState = rh(l), e.memoizedState = nh, o);
  if (!(e.mode & 1))
    return Ga(t, e, l, null);
  if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r)
      var s = r.dgst;
    return r = s, o = Error(A(419)), r = Wf(o, r, void 0), Ga(t, e, l, r);
  }
  if (s = (l & t.childLanes) !== 0, Kt || s) {
    if (r = st, r !== null) {
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
      i = i & (r.suspendedLanes | l) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, Xr(t, i), lr(r, t, i, -1));
    }
    return Hp(), r = Wf(Error(A(421))), Ga(t, e, l, r);
  }
  return i.data === "$?" ? (e.flags |= 128, e.child = t.child, e = oS.bind(null, t), i._reactRetry = e, null) : (t = o.treeContext, _n = wi(i.nextSibling), xn = e, Pe = !0, tr = null, t !== null && (On[Rn++] = Lr, On[Rn++] = Fr, On[Rn++] = ko, Lr = t.id, Fr = t.overflow, ko = e), e = Lp(e, r.children), e.flags |= 4096, e);
}
function Gg(t, e, n) {
  t.lanes |= e;
  var r = t.alternate;
  r !== null && (r.lanes |= e), qd(t.return, e, n);
}
function Hf(t, e, n, r, i) {
  var o = t.memoizedState;
  o === null ? t.memoizedState = { isBackwards: e, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (o.isBackwards = e, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i);
}
function Iy(t, e, n) {
  var r = e.pendingProps, i = r.revealOrder, o = r.tail;
  if (Nt(t, e, r.children, n), r = Ne.current, r & 2)
    r = r & 1 | 2, e.flags |= 128;
  else {
    if (t !== null && t.flags & 128)
      e:
        for (t = e.child; t !== null; ) {
          if (t.tag === 13)
            t.memoizedState !== null && Gg(t, n, e);
          else if (t.tag === 19)
            Gg(t, n, e);
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
  if (Se(Ne, r), !(e.mode & 1))
    e.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = e.child, i = null; n !== null; )
          t = n.alternate, t !== null && lc(t) === null && (i = n), n = n.sibling;
        n = i, n === null ? (i = e.child, e.child = null) : (i = n.sibling, n.sibling = null), Hf(e, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = e.child, e.child = null; i !== null; ) {
          if (t = i.alternate, t !== null && lc(t) === null) {
            e.child = i;
            break;
          }
          t = i.sibling, i.sibling = n, n = i, i = t;
        }
        Hf(e, !0, n, null, o);
        break;
      case "together":
        Hf(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
  return e.child;
}
function Pu(t, e) {
  !(e.mode & 1) && t !== null && (t.alternate = null, e.alternate = null, e.flags |= 2);
}
function Gr(t, e, n) {
  if (t !== null && (e.dependencies = t.dependencies), Co |= e.lanes, !(n & e.childLanes))
    return null;
  if (t !== null && e.child !== t.child)
    throw Error(A(153));
  if (e.child !== null) {
    for (t = e.child, n = Ei(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; )
      t = t.sibling, n = n.sibling = Ei(t, t.pendingProps), n.return = e;
    n.sibling = null;
  }
  return e.child;
}
function Xk(t, e, n) {
  switch (e.tag) {
    case 3:
      Ny(e), Tl();
      break;
    case 5:
      sy(e);
      break;
    case 1:
      Jt(e.type) && ec(e);
      break;
    case 4:
      Mp(e, e.stateNode.containerInfo);
      break;
    case 10:
      var r = e.type._context, i = e.memoizedProps.value;
      Se(rc, r._currentValue), r._currentValue = i;
      break;
    case 13:
      if (r = e.memoizedState, r !== null)
        return r.dehydrated !== null ? (Se(Ne, Ne.current & 1), e.flags |= 128, null) : n & e.child.childLanes ? Ay(t, e, n) : (Se(Ne, Ne.current & 1), t = Gr(t, e, n), t !== null ? t.sibling : null);
      Se(Ne, Ne.current & 1);
      break;
    case 19:
      if (r = (n & e.childLanes) !== 0, t.flags & 128) {
        if (r)
          return Iy(t, e, n);
        e.flags |= 128;
      }
      if (i = e.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Se(Ne, Ne.current), r)
        break;
      return null;
    case 22:
    case 23:
      return e.lanes = 0, Ry(t, e, n);
  }
  return Gr(t, e, n);
}
var Dy, ih, zy, $y;
Dy = function(t, e) {
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
ih = function() {
};
zy = function(t, e, n, r) {
  var i = t.memoizedProps;
  if (i !== r) {
    t = e.stateNode, so(Cr.current);
    var o = null;
    switch (n) {
      case "input":
        i = Td(t, i), r = Td(t, r), o = [];
        break;
      case "select":
        i = ze({}, i, { value: void 0 }), r = ze({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        i = Od(t, i), r = Od(t, r), o = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (t.onclick = Zu);
    }
    Md(n, r);
    var l;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var s = i[u];
          for (l in s)
            s.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
        } else
          u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Us.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (s = i != null ? i[u] : void 0, r.hasOwnProperty(u) && a !== s && (a != null || s != null))
        if (u === "style")
          if (s) {
            for (l in s)
              !s.hasOwnProperty(l) || a && a.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
            for (l in a)
              a.hasOwnProperty(l) && s[l] !== a[l] && (n || (n = {}), n[l] = a[l]);
          } else
            n || (o || (o = []), o.push(
              u,
              n
            )), n = a;
        else
          u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, s = s ? s.__html : void 0, a != null && s !== a && (o = o || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Us.hasOwnProperty(u) ? (a != null && u === "onScroll" && Ce("scroll", t), o || s === a || (o = [])) : (o = o || []).push(u, a));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (e.updateQueue = u) && (e.flags |= 4);
  }
};
$y = function(t, e, n, r) {
  n !== r && (e.flags |= 4);
};
function Zl(t, e) {
  if (!Pe)
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
function kt(t) {
  var e = t.alternate !== null && t.alternate.child === t.child, n = 0, r = 0;
  if (e)
    for (var i = t.child; i !== null; )
      n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = t, i = i.sibling;
  else
    for (i = t.child; i !== null; )
      n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = t, i = i.sibling;
  return t.subtreeFlags |= r, t.childLanes = n, e;
}
function Gk(t, e, n) {
  var r = e.pendingProps;
  switch (Cp(e), e.tag) {
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
      return kt(e), null;
    case 1:
      return Jt(e.type) && Ju(), kt(e), null;
    case 3:
      return r = e.stateNode, Pl(), Te(Zt), Te(Pt), Ap(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (t === null || t.child === null) && (Ya(e) ? e.flags |= 4 : t === null || t.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024, tr !== null && (dh(tr), tr = null))), ih(t, e), kt(e), null;
    case 5:
      Np(e);
      var i = so(ta.current);
      if (n = e.type, t !== null && e.stateNode != null)
        zy(t, e, n, r, i), t.ref !== e.ref && (e.flags |= 512, e.flags |= 2097152);
      else {
        if (!r) {
          if (e.stateNode === null)
            throw Error(A(166));
          return kt(e), null;
        }
        if (t = so(Cr.current), Ya(e)) {
          r = e.stateNode, n = e.type;
          var o = e.memoizedProps;
          switch (r[_r] = e, r[Js] = o, t = (e.mode & 1) !== 0, n) {
            case "dialog":
              Ce("cancel", r), Ce("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Ce("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < us.length; i++)
                Ce(us[i], r);
              break;
            case "source":
              Ce("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Ce(
                "error",
                r
              ), Ce("load", r);
              break;
            case "details":
              Ce("toggle", r);
              break;
            case "input":
              rg(r, o), Ce("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, Ce("invalid", r);
              break;
            case "textarea":
              og(r, o), Ce("invalid", r);
          }
          Md(n, o), i = null;
          for (var l in o)
            if (o.hasOwnProperty(l)) {
              var s = o[l];
              l === "children" ? typeof s == "string" ? r.textContent !== s && (o.suppressHydrationWarning !== !0 && Ha(r.textContent, s, t), i = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (o.suppressHydrationWarning !== !0 && Ha(
                r.textContent,
                s,
                t
              ), i = ["children", "" + s]) : Us.hasOwnProperty(l) && s != null && l === "onScroll" && Ce("scroll", r);
            }
          switch (n) {
            case "input":
              $a(r), ig(r, o, !0);
              break;
            case "textarea":
              $a(r), lg(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Zu);
          }
          r = i, e.updateQueue = r, r !== null && (e.flags |= 4);
        } else {
          l = i.nodeType === 9 ? i : i.ownerDocument, t === "http://www.w3.org/1999/xhtml" && (t = cv(n)), t === "http://www.w3.org/1999/xhtml" ? n === "script" ? (t = l.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild)) : typeof r.is == "string" ? t = l.createElement(n, { is: r.is }) : (t = l.createElement(n), n === "select" && (l = t, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : t = l.createElementNS(t, n), t[_r] = e, t[Js] = r, Dy(t, e, !1, !1), e.stateNode = t;
          e: {
            switch (l = Nd(n, r), n) {
              case "dialog":
                Ce("cancel", t), Ce("close", t), i = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                Ce("load", t), i = r;
                break;
              case "video":
              case "audio":
                for (i = 0; i < us.length; i++)
                  Ce(us[i], t);
                i = r;
                break;
              case "source":
                Ce("error", t), i = r;
                break;
              case "img":
              case "image":
              case "link":
                Ce(
                  "error",
                  t
                ), Ce("load", t), i = r;
                break;
              case "details":
                Ce("toggle", t), i = r;
                break;
              case "input":
                rg(t, r), i = Td(t, r), Ce("invalid", t);
                break;
              case "option":
                i = r;
                break;
              case "select":
                t._wrapperState = { wasMultiple: !!r.multiple }, i = ze({}, r, { value: void 0 }), Ce("invalid", t);
                break;
              case "textarea":
                og(t, r), i = Od(t, r), Ce("invalid", t);
                break;
              default:
                i = r;
            }
            Md(n, i), s = i;
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var a = s[o];
                o === "style" ? hv(t, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && fv(t, a)) : o === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Ws(t, a) : typeof a == "number" && Ws(t, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Us.hasOwnProperty(o) ? a != null && o === "onScroll" && Ce("scroll", t) : a != null && up(t, o, a, l));
              }
            switch (n) {
              case "input":
                $a(t), ig(t, r, !1);
                break;
              case "textarea":
                $a(t), lg(t);
                break;
              case "option":
                r.value != null && t.setAttribute("value", "" + Ri(r.value));
                break;
              case "select":
                t.multiple = !!r.multiple, o = r.value, o != null ? ul(t, !!r.multiple, o, !1) : r.defaultValue != null && ul(
                  t,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof i.onClick == "function" && (t.onclick = Zu);
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
      return kt(e), null;
    case 6:
      if (t && e.stateNode != null)
        $y(t, e, t.memoizedProps, r);
      else {
        if (typeof r != "string" && e.stateNode === null)
          throw Error(A(166));
        if (n = so(ta.current), so(Cr.current), Ya(e)) {
          if (r = e.stateNode, n = e.memoizedProps, r[_r] = e, (o = r.nodeValue !== n) && (t = xn, t !== null))
            switch (t.tag) {
              case 3:
                Ha(r.nodeValue, n, (t.mode & 1) !== 0);
                break;
              case 5:
                t.memoizedProps.suppressHydrationWarning !== !0 && Ha(r.nodeValue, n, (t.mode & 1) !== 0);
            }
          o && (e.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[_r] = e, e.stateNode = r;
      }
      return kt(e), null;
    case 13:
      if (Te(Ne), r = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
        if (Pe && _n !== null && e.mode & 1 && !(e.flags & 128))
          ey(), Tl(), e.flags |= 98560, o = !1;
        else if (o = Ya(e), r !== null && r.dehydrated !== null) {
          if (t === null) {
            if (!o)
              throw Error(A(318));
            if (o = e.memoizedState, o = o !== null ? o.dehydrated : null, !o)
              throw Error(A(317));
            o[_r] = e;
          } else
            Tl(), !(e.flags & 128) && (e.memoizedState = null), e.flags |= 4;
          kt(e), o = !1;
        } else
          tr !== null && (dh(tr), tr = null), o = !0;
        if (!o)
          return e.flags & 65536 ? e : null;
      }
      return e.flags & 128 ? (e.lanes = n, e) : (r = r !== null, r !== (t !== null && t.memoizedState !== null) && r && (e.child.flags |= 8192, e.mode & 1 && (t === null || Ne.current & 1 ? tt === 0 && (tt = 3) : Hp())), e.updateQueue !== null && (e.flags |= 4), kt(e), null);
    case 4:
      return Pl(), ih(t, e), t === null && Ks(e.stateNode.containerInfo), kt(e), null;
    case 10:
      return Pp(e.type._context), kt(e), null;
    case 17:
      return Jt(e.type) && Ju(), kt(e), null;
    case 19:
      if (Te(Ne), o = e.memoizedState, o === null)
        return kt(e), null;
      if (r = (e.flags & 128) !== 0, l = o.rendering, l === null)
        if (r)
          Zl(o, !1);
        else {
          if (tt !== 0 || t !== null && t.flags & 128)
            for (t = e.child; t !== null; ) {
              if (l = lc(t), l !== null) {
                for (e.flags |= 128, Zl(o, !1), r = l.updateQueue, r !== null && (e.updateQueue = r, e.flags |= 4), e.subtreeFlags = 0, r = n, n = e.child; n !== null; )
                  o = n, t = r, o.flags &= 14680066, l = o.alternate, l === null ? (o.childLanes = 0, o.lanes = t, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = l.childLanes, o.lanes = l.lanes, o.child = l.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = l.memoizedProps, o.memoizedState = l.memoizedState, o.updateQueue = l.updateQueue, o.type = l.type, t = l.dependencies, o.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), n = n.sibling;
                return Se(Ne, Ne.current & 1 | 2), e.child;
              }
              t = t.sibling;
            }
          o.tail !== null && We() > Rl && (e.flags |= 128, r = !0, Zl(o, !1), e.lanes = 4194304);
        }
      else {
        if (!r)
          if (t = lc(l), t !== null) {
            if (e.flags |= 128, r = !0, n = t.updateQueue, n !== null && (e.updateQueue = n, e.flags |= 4), Zl(o, !0), o.tail === null && o.tailMode === "hidden" && !l.alternate && !Pe)
              return kt(e), null;
          } else
            2 * We() - o.renderingStartTime > Rl && n !== 1073741824 && (e.flags |= 128, r = !0, Zl(o, !1), e.lanes = 4194304);
        o.isBackwards ? (l.sibling = e.child, e.child = l) : (n = o.last, n !== null ? n.sibling = l : e.child = l, o.last = l);
      }
      return o.tail !== null ? (e = o.tail, o.rendering = e, o.tail = e.sibling, o.renderingStartTime = We(), e.sibling = null, n = Ne.current, Se(Ne, r ? n & 1 | 2 : n & 1), e) : (kt(e), null);
    case 22:
    case 23:
      return Wp(), r = e.memoizedState !== null, t !== null && t.memoizedState !== null !== r && (e.flags |= 8192), r && e.mode & 1 ? pn & 1073741824 && (kt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : kt(e), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(A(156, e.tag));
}
function Qk(t, e) {
  switch (Cp(e), e.tag) {
    case 1:
      return Jt(e.type) && Ju(), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
    case 3:
      return Pl(), Te(Zt), Te(Pt), Ap(), t = e.flags, t & 65536 && !(t & 128) ? (e.flags = t & -65537 | 128, e) : null;
    case 5:
      return Np(e), null;
    case 13:
      if (Te(Ne), t = e.memoizedState, t !== null && t.dehydrated !== null) {
        if (e.alternate === null)
          throw Error(A(340));
        Tl();
      }
      return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
    case 19:
      return Te(Ne), null;
    case 4:
      return Pl(), null;
    case 10:
      return Pp(e.type._context), null;
    case 22:
    case 23:
      return Wp(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Qa = !1, Ct = !1, qk = typeof WeakSet == "function" ? WeakSet : Set, B = null;
function nl(t, e) {
  var n = t.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        je(t, e, r);
      }
    else
      n.current = null;
}
function oh(t, e, n) {
  try {
    n();
  } catch (r) {
    je(t, e, r);
  }
}
var Qg = !1;
function Kk(t, e) {
  if (Vd = Qu, t = Bv(), kp(t)) {
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
          var l = 0, s = -1, a = -1, u = 0, c = 0, f = t, h = null;
          t:
            for (; ; ) {
              for (var d; f !== n || i !== 0 && f.nodeType !== 3 || (s = l + i), f !== o || r !== 0 && f.nodeType !== 3 || (a = l + r), f.nodeType === 3 && (l += f.nodeValue.length), (d = f.firstChild) !== null; )
                h = f, f = d;
              for (; ; ) {
                if (f === t)
                  break t;
                if (h === n && ++u === i && (s = l), h === o && ++c === r && (a = l), (d = f.nextSibling) !== null)
                  break;
                f = h, h = f.parentNode;
              }
              f = d;
            }
          n = s === -1 || a === -1 ? null : { start: s, end: a };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (Ud = { focusedElem: t, selectionRange: n }, Qu = !1, B = e; B !== null; )
    if (e = B, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
      t.return = e, B = t;
    else
      for (; B !== null; ) {
        e = B;
        try {
          var g = e.alternate;
          if (e.flags & 1024)
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var p = g.memoizedProps, _ = g.memoizedState, v = e.stateNode, m = v.getSnapshotBeforeUpdate(e.elementType === e.type ? p : Jn(e.type, p), _);
                  v.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var y = e.stateNode.containerInfo;
                y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(A(163));
            }
        } catch (x) {
          je(e, e.return, x);
        }
        if (t = e.sibling, t !== null) {
          t.return = e.return, B = t;
          break;
        }
        B = e.return;
      }
  return g = Qg, Qg = !1, g;
}
function Cs(t, e, n) {
  var r = e.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
      if ((i.tag & t) === t) {
        var o = i.destroy;
        i.destroy = void 0, o !== void 0 && oh(e, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Wc(t, e) {
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
function lh(t) {
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
function jy(t) {
  var e = t.alternate;
  e !== null && (t.alternate = null, jy(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && (delete e[_r], delete e[Js], delete e[Yd], delete e[Ak], delete e[Ik])), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
}
function Ly(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function qg(t) {
  e:
    for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Ly(t.return))
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
function sh(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6)
    t = t.stateNode, e ? n.nodeType === 8 ? n.parentNode.insertBefore(t, e) : n.insertBefore(t, e) : (n.nodeType === 8 ? (e = n.parentNode, e.insertBefore(t, n)) : (e = n, e.appendChild(t)), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = Zu));
  else if (r !== 4 && (t = t.child, t !== null))
    for (sh(t, e, n), t = t.sibling; t !== null; )
      sh(t, e, n), t = t.sibling;
}
function ah(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6)
    t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t);
  else if (r !== 4 && (t = t.child, t !== null))
    for (ah(t, e, n), t = t.sibling; t !== null; )
      ah(t, e, n), t = t.sibling;
}
var ht = null, er = !1;
function ei(t, e, n) {
  for (n = n.child; n !== null; )
    Fy(t, e, n), n = n.sibling;
}
function Fy(t, e, n) {
  if (Sr && typeof Sr.onCommitFiberUnmount == "function")
    try {
      Sr.onCommitFiberUnmount(zc, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      Ct || nl(n, e);
    case 6:
      var r = ht, i = er;
      ht = null, ei(t, e, n), ht = r, er = i, ht !== null && (er ? (t = ht, n = n.stateNode, t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n)) : ht.removeChild(n.stateNode));
      break;
    case 18:
      ht !== null && (er ? (t = ht, n = n.stateNode, t.nodeType === 8 ? jf(t.parentNode, n) : t.nodeType === 1 && jf(t, n), Gs(t)) : jf(ht, n.stateNode));
      break;
    case 4:
      r = ht, i = er, ht = n.stateNode.containerInfo, er = !0, ei(t, e, n), ht = r, er = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ct && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        i = r = r.next;
        do {
          var o = i, l = o.destroy;
          o = o.tag, l !== void 0 && (o & 2 || o & 4) && oh(n, e, l), i = i.next;
        } while (i !== r);
      }
      ei(t, e, n);
      break;
    case 1:
      if (!Ct && (nl(n, e), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (s) {
          je(n, e, s);
        }
      ei(t, e, n);
      break;
    case 21:
      ei(t, e, n);
      break;
    case 22:
      n.mode & 1 ? (Ct = (r = Ct) || n.memoizedState !== null, ei(t, e, n), Ct = r) : ei(t, e, n);
      break;
    default:
      ei(t, e, n);
  }
}
function Kg(t) {
  var e = t.updateQueue;
  if (e !== null) {
    t.updateQueue = null;
    var n = t.stateNode;
    n === null && (n = t.stateNode = new qk()), e.forEach(function(r) {
      var i = lS.bind(null, t, r);
      n.has(r) || (n.add(r), r.then(i, i));
    });
  }
}
function Kn(t, e) {
  var n = e.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = t, l = e, s = l;
        e:
          for (; s !== null; ) {
            switch (s.tag) {
              case 5:
                ht = s.stateNode, er = !1;
                break e;
              case 3:
                ht = s.stateNode.containerInfo, er = !0;
                break e;
              case 4:
                ht = s.stateNode.containerInfo, er = !0;
                break e;
            }
            s = s.return;
          }
        if (ht === null)
          throw Error(A(160));
        Fy(o, l, i), ht = null, er = !1;
        var a = i.alternate;
        a !== null && (a.return = null), i.return = null;
      } catch (u) {
        je(i, e, u);
      }
    }
  if (e.subtreeFlags & 12854)
    for (e = e.child; e !== null; )
      By(e, t), e = e.sibling;
}
function By(t, e) {
  var n = t.alternate, r = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Kn(e, t), gr(t), r & 4) {
        try {
          Cs(3, t, t.return), Wc(3, t);
        } catch (p) {
          je(t, t.return, p);
        }
        try {
          Cs(5, t, t.return);
        } catch (p) {
          je(t, t.return, p);
        }
      }
      break;
    case 1:
      Kn(e, t), gr(t), r & 512 && n !== null && nl(n, n.return);
      break;
    case 5:
      if (Kn(e, t), gr(t), r & 512 && n !== null && nl(n, n.return), t.flags & 32) {
        var i = t.stateNode;
        try {
          Ws(i, "");
        } catch (p) {
          je(t, t.return, p);
        }
      }
      if (r & 4 && (i = t.stateNode, i != null)) {
        var o = t.memoizedProps, l = n !== null ? n.memoizedProps : o, s = t.type, a = t.updateQueue;
        if (t.updateQueue = null, a !== null)
          try {
            s === "input" && o.type === "radio" && o.name != null && av(i, o), Nd(s, l);
            var u = Nd(s, o);
            for (l = 0; l < a.length; l += 2) {
              var c = a[l], f = a[l + 1];
              c === "style" ? hv(i, f) : c === "dangerouslySetInnerHTML" ? fv(i, f) : c === "children" ? Ws(i, f) : up(i, c, f, u);
            }
            switch (s) {
              case "input":
                bd(i, o);
                break;
              case "textarea":
                uv(i, o);
                break;
              case "select":
                var h = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var d = o.value;
                d != null ? ul(i, !!o.multiple, d, !1) : h !== !!o.multiple && (o.defaultValue != null ? ul(
                  i,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : ul(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Js] = o;
          } catch (p) {
            je(t, t.return, p);
          }
      }
      break;
    case 6:
      if (Kn(e, t), gr(t), r & 4) {
        if (t.stateNode === null)
          throw Error(A(162));
        i = t.stateNode, o = t.memoizedProps;
        try {
          i.nodeValue = o;
        } catch (p) {
          je(t, t.return, p);
        }
      }
      break;
    case 3:
      if (Kn(e, t), gr(t), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          Gs(e.containerInfo);
        } catch (p) {
          je(t, t.return, p);
        }
      break;
    case 4:
      Kn(e, t), gr(t);
      break;
    case 13:
      Kn(e, t), gr(t), i = t.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (Vp = We())), r & 4 && Kg(t);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, t.mode & 1 ? (Ct = (u = Ct) || c, Kn(e, t), Ct = u) : Kn(e, t), gr(t), r & 8192) {
        if (u = t.memoizedState !== null, (t.stateNode.isHidden = u) && !c && t.mode & 1)
          for (B = t, c = t.child; c !== null; ) {
            for (f = B = c; B !== null; ) {
              switch (h = B, d = h.child, h.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Cs(4, h, h.return);
                  break;
                case 1:
                  nl(h, h.return);
                  var g = h.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    r = h, n = h.return;
                    try {
                      e = r, g.props = e.memoizedProps, g.state = e.memoizedState, g.componentWillUnmount();
                    } catch (p) {
                      je(r, n, p);
                    }
                  }
                  break;
                case 5:
                  nl(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Jg(f);
                    continue;
                  }
              }
              d !== null ? (d.return = h, B = d) : Jg(f);
            }
            c = c.sibling;
          }
        e:
          for (c = null, f = t; ; ) {
            if (f.tag === 5) {
              if (c === null) {
                c = f;
                try {
                  i = f.stateNode, u ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (s = f.stateNode, a = f.memoizedProps.style, l = a != null && a.hasOwnProperty("display") ? a.display : null, s.style.display = dv("display", l));
                } catch (p) {
                  je(t, t.return, p);
                }
              }
            } else if (f.tag === 6) {
              if (c === null)
                try {
                  f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                } catch (p) {
                  je(t, t.return, p);
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
      Kn(e, t), gr(t), r & 4 && Kg(t);
      break;
    case 21:
      break;
    default:
      Kn(
        e,
        t
      ), gr(t);
  }
}
function gr(t) {
  var e = t.flags;
  if (e & 2) {
    try {
      e: {
        for (var n = t.return; n !== null; ) {
          if (Ly(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(A(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Ws(i, ""), r.flags &= -33);
          var o = qg(t);
          ah(t, o, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, s = qg(t);
          sh(t, s, l);
          break;
        default:
          throw Error(A(161));
      }
    } catch (a) {
      je(t, t.return, a);
    }
    t.flags &= -3;
  }
  e & 4096 && (t.flags &= -4097);
}
function Zk(t, e, n) {
  B = t, Vy(t);
}
function Vy(t, e, n) {
  for (var r = (t.mode & 1) !== 0; B !== null; ) {
    var i = B, o = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || Qa;
      if (!l) {
        var s = i.alternate, a = s !== null && s.memoizedState !== null || Ct;
        s = Qa;
        var u = Ct;
        if (Qa = l, (Ct = a) && !u)
          for (B = i; B !== null; )
            l = B, a = l.child, l.tag === 22 && l.memoizedState !== null ? em(i) : a !== null ? (a.return = l, B = a) : em(i);
        for (; o !== null; )
          B = o, Vy(o), o = o.sibling;
        B = i, Qa = s, Ct = u;
      }
      Zg(t);
    } else
      i.subtreeFlags & 8772 && o !== null ? (o.return = i, B = o) : Zg(t);
  }
}
function Zg(t) {
  for (; B !== null; ) {
    var e = B;
    if (e.flags & 8772) {
      var n = e.alternate;
      try {
        if (e.flags & 8772)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              Ct || Wc(5, e);
              break;
            case 1:
              var r = e.stateNode;
              if (e.flags & 4 && !Ct)
                if (n === null)
                  r.componentDidMount();
                else {
                  var i = e.elementType === e.type ? n.memoizedProps : Jn(e.type, n.memoizedProps);
                  r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var o = e.updateQueue;
              o !== null && Dg(e, o, r);
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
                Dg(e, l, n);
              }
              break;
            case 5:
              var s = e.stateNode;
              if (n === null && e.flags & 4) {
                n = s;
                var a = e.memoizedProps;
                switch (e.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
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
                    f !== null && Gs(f);
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
              throw Error(A(163));
          }
        Ct || e.flags & 512 && lh(e);
      } catch (h) {
        je(e, e.return, h);
      }
    }
    if (e === t) {
      B = null;
      break;
    }
    if (n = e.sibling, n !== null) {
      n.return = e.return, B = n;
      break;
    }
    B = e.return;
  }
}
function Jg(t) {
  for (; B !== null; ) {
    var e = B;
    if (e === t) {
      B = null;
      break;
    }
    var n = e.sibling;
    if (n !== null) {
      n.return = e.return, B = n;
      break;
    }
    B = e.return;
  }
}
function em(t) {
  for (; B !== null; ) {
    var e = B;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var n = e.return;
          try {
            Wc(4, e);
          } catch (a) {
            je(e, n, a);
          }
          break;
        case 1:
          var r = e.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = e.return;
            try {
              r.componentDidMount();
            } catch (a) {
              je(e, i, a);
            }
          }
          var o = e.return;
          try {
            lh(e);
          } catch (a) {
            je(e, o, a);
          }
          break;
        case 5:
          var l = e.return;
          try {
            lh(e);
          } catch (a) {
            je(e, l, a);
          }
      }
    } catch (a) {
      je(e, e.return, a);
    }
    if (e === t) {
      B = null;
      break;
    }
    var s = e.sibling;
    if (s !== null) {
      s.return = e.return, B = s;
      break;
    }
    B = e.return;
  }
}
var Jk = Math.ceil, uc = Kr.ReactCurrentDispatcher, Fp = Kr.ReactCurrentOwner, Ln = Kr.ReactCurrentBatchConfig, ge = 0, st = null, qe = null, mt = 0, pn = 0, rl = $i(0), tt = 0, oa = null, Co = 0, Hc = 0, Bp = 0, Es = null, Qt = null, Vp = 0, Rl = 1 / 0, Ar = null, cc = !1, uh = null, Si = null, qa = !1, ui = null, fc = 0, Ts = 0, ch = null, Ou = -1, Ru = 0;
function Lt() {
  return ge & 6 ? We() : Ou !== -1 ? Ou : Ou = We();
}
function Ci(t) {
  return t.mode & 1 ? ge & 2 && mt !== 0 ? mt & -mt : zk.transition !== null ? (Ru === 0 && (Ru = Ev()), Ru) : (t = _e, t !== 0 || (t = window.event, t = t === void 0 ? 16 : Nv(t.type)), t) : 1;
}
function lr(t, e, n, r) {
  if (50 < Ts)
    throw Ts = 0, ch = null, Error(A(185));
  Sa(t, n, r), (!(ge & 2) || t !== st) && (t === st && (!(ge & 2) && (Hc |= n), tt === 4 && si(t, mt)), en(t, r), n === 1 && ge === 0 && !(e.mode & 1) && (Rl = We() + 500, Bc && ji()));
}
function en(t, e) {
  var n = t.callbackNode;
  z2(t, e);
  var r = Gu(t, t === st ? mt : 0);
  if (r === 0)
    n !== null && ug(n), t.callbackNode = null, t.callbackPriority = 0;
  else if (e = r & -r, t.callbackPriority !== e) {
    if (n != null && ug(n), e === 1)
      t.tag === 0 ? Dk(tm.bind(null, t)) : Kv(tm.bind(null, t)), Mk(function() {
        !(ge & 6) && ji();
      }), n = null;
    else {
      switch (Tv(r)) {
        case 1:
          n = pp;
          break;
        case 4:
          n = Sv;
          break;
        case 16:
          n = Xu;
          break;
        case 536870912:
          n = Cv;
          break;
        default:
          n = Xu;
      }
      n = qy(n, Uy.bind(null, t));
    }
    t.callbackPriority = e, t.callbackNode = n;
  }
}
function Uy(t, e) {
  if (Ou = -1, Ru = 0, ge & 6)
    throw Error(A(327));
  var n = t.callbackNode;
  if (pl() && t.callbackNode !== n)
    return null;
  var r = Gu(t, t === st ? mt : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & t.expiredLanes || e)
    e = dc(t, r);
  else {
    e = r;
    var i = ge;
    ge |= 2;
    var o = Hy();
    (st !== t || mt !== e) && (Ar = null, Rl = We() + 500, fo(t, e));
    do
      try {
        nS();
        break;
      } catch (s) {
        Wy(t, s);
      }
    while (1);
    bp(), uc.current = o, ge = i, qe !== null ? e = 0 : (st = null, mt = 0, e = tt);
  }
  if (e !== 0) {
    if (e === 2 && (i = $d(t), i !== 0 && (r = i, e = fh(t, i))), e === 1)
      throw n = oa, fo(t, 0), si(t, r), en(t, We()), n;
    if (e === 6)
      si(t, r);
    else {
      if (i = t.current.alternate, !(r & 30) && !eS(i) && (e = dc(t, r), e === 2 && (o = $d(t), o !== 0 && (r = o, e = fh(t, o))), e === 1))
        throw n = oa, fo(t, 0), si(t, r), en(t, We()), n;
      switch (t.finishedWork = i, t.finishedLanes = r, e) {
        case 0:
        case 1:
          throw Error(A(345));
        case 2:
          eo(t, Qt, Ar);
          break;
        case 3:
          if (si(t, r), (r & 130023424) === r && (e = Vp + 500 - We(), 10 < e)) {
            if (Gu(t, 0) !== 0)
              break;
            if (i = t.suspendedLanes, (i & r) !== r) {
              Lt(), t.pingedLanes |= t.suspendedLanes & i;
              break;
            }
            t.timeoutHandle = Hd(eo.bind(null, t, Qt, Ar), e);
            break;
          }
          eo(t, Qt, Ar);
          break;
        case 4:
          if (si(t, r), (r & 4194240) === r)
            break;
          for (e = t.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - or(r);
            o = 1 << l, l = e[l], l > i && (i = l), r &= ~o;
          }
          if (r = i, r = We() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Jk(r / 1960)) - r, 10 < r) {
            t.timeoutHandle = Hd(eo.bind(null, t, Qt, Ar), r);
            break;
          }
          eo(t, Qt, Ar);
          break;
        case 5:
          eo(t, Qt, Ar);
          break;
        default:
          throw Error(A(329));
      }
    }
  }
  return en(t, We()), t.callbackNode === n ? Uy.bind(null, t) : null;
}
function fh(t, e) {
  var n = Es;
  return t.current.memoizedState.isDehydrated && (fo(t, e).flags |= 256), t = dc(t, e), t !== 2 && (e = Qt, Qt = n, e !== null && dh(e)), t;
}
function dh(t) {
  Qt === null ? Qt = t : Qt.push.apply(Qt, t);
}
function eS(t) {
  for (var e = t; ; ) {
    if (e.flags & 16384) {
      var n = e.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r], o = i.getSnapshot;
          i = i.value;
          try {
            if (!ar(o(), i))
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
function si(t, e) {
  for (e &= ~Bp, e &= ~Hc, t.suspendedLanes |= e, t.pingedLanes &= ~e, t = t.expirationTimes; 0 < e; ) {
    var n = 31 - or(e), r = 1 << n;
    t[n] = -1, e &= ~r;
  }
}
function tm(t) {
  if (ge & 6)
    throw Error(A(327));
  pl();
  var e = Gu(t, 0);
  if (!(e & 1))
    return en(t, We()), null;
  var n = dc(t, e);
  if (t.tag !== 0 && n === 2) {
    var r = $d(t);
    r !== 0 && (e = r, n = fh(t, r));
  }
  if (n === 1)
    throw n = oa, fo(t, 0), si(t, e), en(t, We()), n;
  if (n === 6)
    throw Error(A(345));
  return t.finishedWork = t.current.alternate, t.finishedLanes = e, eo(t, Qt, Ar), en(t, We()), null;
}
function Up(t, e) {
  var n = ge;
  ge |= 1;
  try {
    return t(e);
  } finally {
    ge = n, ge === 0 && (Rl = We() + 500, Bc && ji());
  }
}
function Eo(t) {
  ui !== null && ui.tag === 0 && !(ge & 6) && pl();
  var e = ge;
  ge |= 1;
  var n = Ln.transition, r = _e;
  try {
    if (Ln.transition = null, _e = 1, t)
      return t();
  } finally {
    _e = r, Ln.transition = n, ge = e, !(ge & 6) && ji();
  }
}
function Wp() {
  pn = rl.current, Te(rl);
}
function fo(t, e) {
  t.finishedWork = null, t.finishedLanes = 0;
  var n = t.timeoutHandle;
  if (n !== -1 && (t.timeoutHandle = -1, Rk(n)), qe !== null)
    for (n = qe.return; n !== null; ) {
      var r = n;
      switch (Cp(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Ju();
          break;
        case 3:
          Pl(), Te(Zt), Te(Pt), Ap();
          break;
        case 5:
          Np(r);
          break;
        case 4:
          Pl();
          break;
        case 13:
          Te(Ne);
          break;
        case 19:
          Te(Ne);
          break;
        case 10:
          Pp(r.type._context);
          break;
        case 22:
        case 23:
          Wp();
      }
      n = n.return;
    }
  if (st = t, qe = t = Ei(t.current, null), mt = pn = e, tt = 0, oa = null, Bp = Hc = Co = 0, Qt = Es = null, lo !== null) {
    for (e = 0; e < lo.length; e++)
      if (n = lo[e], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var i = r.next, o = n.pending;
        if (o !== null) {
          var l = o.next;
          o.next = i, r.next = l;
        }
        n.pending = r;
      }
    lo = null;
  }
  return t;
}
function Wy(t, e) {
  do {
    var n = qe;
    try {
      if (bp(), Tu.current = ac, sc) {
        for (var r = De.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), r = r.next;
        }
        sc = !1;
      }
      if (So = 0, lt = Je = De = null, Ss = !1, na = 0, Fp.current = null, n === null || n.return === null) {
        tt = 1, oa = e, qe = null;
        break;
      }
      e: {
        var o = t, l = n.return, s = n, a = e;
        if (e = mt, s.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var u = a, c = s, f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var h = c.alternate;
            h ? (c.updateQueue = h.updateQueue, c.memoizedState = h.memoizedState, c.lanes = h.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var d = Vg(l);
          if (d !== null) {
            d.flags &= -257, Ug(d, l, s, o, e), d.mode & 1 && Bg(o, u, e), e = d, a = u;
            var g = e.updateQueue;
            if (g === null) {
              var p = /* @__PURE__ */ new Set();
              p.add(a), e.updateQueue = p;
            } else
              g.add(a);
            break e;
          } else {
            if (!(e & 1)) {
              Bg(o, u, e), Hp();
              break e;
            }
            a = Error(A(426));
          }
        } else if (Pe && s.mode & 1) {
          var _ = Vg(l);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256), Ug(_, l, s, o, e), Ep(Ol(a, s));
            break e;
          }
        }
        o = a = Ol(a, s), tt !== 4 && (tt = 2), Es === null ? Es = [o] : Es.push(o), o = l;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, e &= -e, o.lanes |= e;
              var v = by(o, a, e);
              Ig(o, v);
              break e;
            case 1:
              s = a;
              var m = o.type, y = o.stateNode;
              if (!(o.flags & 128) && (typeof m.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (Si === null || !Si.has(y)))) {
                o.flags |= 65536, e &= -e, o.lanes |= e;
                var x = Py(o, s, e);
                Ig(o, x);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Xy(n);
    } catch (C) {
      e = C, qe === n && n !== null && (qe = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Hy() {
  var t = uc.current;
  return uc.current = ac, t === null ? ac : t;
}
function Hp() {
  (tt === 0 || tt === 3 || tt === 2) && (tt = 4), st === null || !(Co & 268435455) && !(Hc & 268435455) || si(st, mt);
}
function dc(t, e) {
  var n = ge;
  ge |= 2;
  var r = Hy();
  (st !== t || mt !== e) && (Ar = null, fo(t, e));
  do
    try {
      tS();
      break;
    } catch (i) {
      Wy(t, i);
    }
  while (1);
  if (bp(), ge = n, uc.current = r, qe !== null)
    throw Error(A(261));
  return st = null, mt = 0, tt;
}
function tS() {
  for (; qe !== null; )
    Yy(qe);
}
function nS() {
  for (; qe !== null && !b2(); )
    Yy(qe);
}
function Yy(t) {
  var e = Qy(t.alternate, t, pn);
  t.memoizedProps = t.pendingProps, e === null ? Xy(t) : qe = e, Fp.current = null;
}
function Xy(t) {
  var e = t;
  do {
    var n = e.alternate;
    if (t = e.return, e.flags & 32768) {
      if (n = Qk(n, e), n !== null) {
        n.flags &= 32767, qe = n;
        return;
      }
      if (t !== null)
        t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null;
      else {
        tt = 6, qe = null;
        return;
      }
    } else if (n = Gk(n, e, pn), n !== null) {
      qe = n;
      return;
    }
    if (e = e.sibling, e !== null) {
      qe = e;
      return;
    }
    qe = e = t;
  } while (e !== null);
  tt === 0 && (tt = 5);
}
function eo(t, e, n) {
  var r = _e, i = Ln.transition;
  try {
    Ln.transition = null, _e = 1, rS(t, e, n, r);
  } finally {
    Ln.transition = i, _e = r;
  }
  return null;
}
function rS(t, e, n, r) {
  do
    pl();
  while (ui !== null);
  if (ge & 6)
    throw Error(A(327));
  n = t.finishedWork;
  var i = t.finishedLanes;
  if (n === null)
    return null;
  if (t.finishedWork = null, t.finishedLanes = 0, n === t.current)
    throw Error(A(177));
  t.callbackNode = null, t.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if ($2(t, o), t === st && (qe = st = null, mt = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || qa || (qa = !0, qy(Xu, function() {
    return pl(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Ln.transition, Ln.transition = null;
    var l = _e;
    _e = 1;
    var s = ge;
    ge |= 4, Fp.current = null, Kk(t, n), By(n, t), Sk(Ud), Qu = !!Vd, Ud = Vd = null, t.current = n, Zk(n), P2(), ge = s, _e = l, Ln.transition = o;
  } else
    t.current = n;
  if (qa && (qa = !1, ui = t, fc = i), o = t.pendingLanes, o === 0 && (Si = null), M2(n.stateNode), en(t, We()), e !== null)
    for (r = t.onRecoverableError, n = 0; n < e.length; n++)
      i = e[n], r(i.value, { componentStack: i.stack, digest: i.digest });
  if (cc)
    throw cc = !1, t = uh, uh = null, t;
  return fc & 1 && t.tag !== 0 && pl(), o = t.pendingLanes, o & 1 ? t === ch ? Ts++ : (Ts = 0, ch = t) : Ts = 0, ji(), null;
}
function pl() {
  if (ui !== null) {
    var t = Tv(fc), e = Ln.transition, n = _e;
    try {
      if (Ln.transition = null, _e = 16 > t ? 16 : t, ui === null)
        var r = !1;
      else {
        if (t = ui, ui = null, fc = 0, ge & 6)
          throw Error(A(331));
        var i = ge;
        for (ge |= 4, B = t.current; B !== null; ) {
          var o = B, l = o.child;
          if (B.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (B = u; B !== null; ) {
                  var c = B;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Cs(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null)
                    f.return = c, B = f;
                  else
                    for (; B !== null; ) {
                      c = B;
                      var h = c.sibling, d = c.return;
                      if (jy(c), c === u) {
                        B = null;
                        break;
                      }
                      if (h !== null) {
                        h.return = d, B = h;
                        break;
                      }
                      B = d;
                    }
                }
              }
              var g = o.alternate;
              if (g !== null) {
                var p = g.child;
                if (p !== null) {
                  g.child = null;
                  do {
                    var _ = p.sibling;
                    p.sibling = null, p = _;
                  } while (p !== null);
                }
              }
              B = o;
            }
          }
          if (o.subtreeFlags & 2064 && l !== null)
            l.return = o, B = l;
          else
            e:
              for (; B !== null; ) {
                if (o = B, o.flags & 2048)
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Cs(9, o, o.return);
                  }
                var v = o.sibling;
                if (v !== null) {
                  v.return = o.return, B = v;
                  break e;
                }
                B = o.return;
              }
        }
        var m = t.current;
        for (B = m; B !== null; ) {
          l = B;
          var y = l.child;
          if (l.subtreeFlags & 2064 && y !== null)
            y.return = l, B = y;
          else
            e:
              for (l = m; B !== null; ) {
                if (s = B, s.flags & 2048)
                  try {
                    switch (s.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Wc(9, s);
                    }
                  } catch (C) {
                    je(s, s.return, C);
                  }
                if (s === l) {
                  B = null;
                  break e;
                }
                var x = s.sibling;
                if (x !== null) {
                  x.return = s.return, B = x;
                  break e;
                }
                B = s.return;
              }
        }
        if (ge = i, ji(), Sr && typeof Sr.onPostCommitFiberRoot == "function")
          try {
            Sr.onPostCommitFiberRoot(zc, t);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      _e = n, Ln.transition = e;
    }
  }
  return !1;
}
function nm(t, e, n) {
  e = Ol(n, e), e = by(t, e, 1), t = ki(t, e, 1), e = Lt(), t !== null && (Sa(t, 1, e), en(t, e));
}
function je(t, e, n) {
  if (t.tag === 3)
    nm(t, t, n);
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        nm(e, t, n);
        break;
      } else if (e.tag === 1) {
        var r = e.stateNode;
        if (typeof e.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Si === null || !Si.has(r))) {
          t = Ol(n, t), t = Py(e, t, 1), e = ki(e, t, 1), t = Lt(), e !== null && (Sa(e, 1, t), en(e, t));
          break;
        }
      }
      e = e.return;
    }
}
function iS(t, e, n) {
  var r = t.pingCache;
  r !== null && r.delete(e), e = Lt(), t.pingedLanes |= t.suspendedLanes & n, st === t && (mt & n) === n && (tt === 4 || tt === 3 && (mt & 130023424) === mt && 500 > We() - Vp ? fo(t, 0) : Bp |= n), en(t, e);
}
function Gy(t, e) {
  e === 0 && (t.mode & 1 ? (e = Fa, Fa <<= 1, !(Fa & 130023424) && (Fa = 4194304)) : e = 1);
  var n = Lt();
  t = Xr(t, e), t !== null && (Sa(t, e, n), en(t, n));
}
function oS(t) {
  var e = t.memoizedState, n = 0;
  e !== null && (n = e.retryLane), Gy(t, n);
}
function lS(t, e) {
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
      throw Error(A(314));
  }
  r !== null && r.delete(e), Gy(t, n);
}
var Qy;
Qy = function(t, e, n) {
  if (t !== null)
    if (t.memoizedProps !== e.pendingProps || Zt.current)
      Kt = !0;
    else {
      if (!(t.lanes & n) && !(e.flags & 128))
        return Kt = !1, Xk(t, e, n);
      Kt = !!(t.flags & 131072);
    }
  else
    Kt = !1, Pe && e.flags & 1048576 && Zv(e, nc, e.index);
  switch (e.lanes = 0, e.tag) {
    case 2:
      var r = e.type;
      Pu(t, e), t = e.pendingProps;
      var i = El(e, Pt.current);
      hl(e, n), i = Dp(null, e, r, t, i, n);
      var o = zp();
      return e.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (e.tag = 1, e.memoizedState = null, e.updateQueue = null, Jt(r) ? (o = !0, ec(e)) : o = !1, e.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Rp(e), i.updater = Vc, e.stateNode = i, i._reactInternals = e, Zd(e, r, t, n), e = th(null, e, r, !0, o, n)) : (e.tag = 0, Pe && o && Sp(e), Nt(null, e, i, n), e = e.child), e;
    case 16:
      r = e.elementType;
      e: {
        switch (Pu(t, e), t = e.pendingProps, i = r._init, r = i(r._payload), e.type = r, i = e.tag = aS(r), t = Jn(r, t), i) {
          case 0:
            e = eh(null, e, r, t, n);
            break e;
          case 1:
            e = Yg(null, e, r, t, n);
            break e;
          case 11:
            e = Wg(null, e, r, t, n);
            break e;
          case 14:
            e = Hg(null, e, r, Jn(r.type, t), n);
            break e;
        }
        throw Error(A(
          306,
          r,
          ""
        ));
      }
      return e;
    case 0:
      return r = e.type, i = e.pendingProps, i = e.elementType === r ? i : Jn(r, i), eh(t, e, r, i, n);
    case 1:
      return r = e.type, i = e.pendingProps, i = e.elementType === r ? i : Jn(r, i), Yg(t, e, r, i, n);
    case 3:
      e: {
        if (Ny(e), t === null)
          throw Error(A(387));
        r = e.pendingProps, o = e.memoizedState, i = o.element, ny(t, e), oc(e, r, null, n);
        var l = e.memoizedState;
        if (r = l.element, o.isDehydrated)
          if (o = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, e.updateQueue.baseState = o, e.memoizedState = o, e.flags & 256) {
            i = Ol(Error(A(423)), e), e = Xg(t, e, r, n, i);
            break e;
          } else if (r !== i) {
            i = Ol(Error(A(424)), e), e = Xg(t, e, r, n, i);
            break e;
          } else
            for (_n = wi(e.stateNode.containerInfo.firstChild), xn = e, Pe = !0, tr = null, n = ly(e, null, r, n), e.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Tl(), r === i) {
            e = Gr(t, e, n);
            break e;
          }
          Nt(t, e, r, n);
        }
        e = e.child;
      }
      return e;
    case 5:
      return sy(e), t === null && Qd(e), r = e.type, i = e.pendingProps, o = t !== null ? t.memoizedProps : null, l = i.children, Wd(r, i) ? l = null : o !== null && Wd(r, o) && (e.flags |= 32), My(t, e), Nt(t, e, l, n), e.child;
    case 6:
      return t === null && Qd(e), null;
    case 13:
      return Ay(t, e, n);
    case 4:
      return Mp(e, e.stateNode.containerInfo), r = e.pendingProps, t === null ? e.child = bl(e, null, r, n) : Nt(t, e, r, n), e.child;
    case 11:
      return r = e.type, i = e.pendingProps, i = e.elementType === r ? i : Jn(r, i), Wg(t, e, r, i, n);
    case 7:
      return Nt(t, e, e.pendingProps, n), e.child;
    case 8:
      return Nt(t, e, e.pendingProps.children, n), e.child;
    case 12:
      return Nt(t, e, e.pendingProps.children, n), e.child;
    case 10:
      e: {
        if (r = e.type._context, i = e.pendingProps, o = e.memoizedProps, l = i.value, Se(rc, r._currentValue), r._currentValue = l, o !== null)
          if (ar(o.value, l)) {
            if (o.children === i.children && !Zt.current) {
              e = Gr(t, e, n);
              break e;
            }
          } else
            for (o = e.child, o !== null && (o.return = e); o !== null; ) {
              var s = o.dependencies;
              if (s !== null) {
                l = o.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      a = Ur(-1, n & -n), a.tag = 2;
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null ? a.next = a : (a.next = c.next, c.next = a), u.pending = a;
                      }
                    }
                    o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), qd(
                      o.return,
                      n,
                      e
                    ), s.lanes |= n;
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10)
                l = o.type === e.type ? null : o.child;
              else if (o.tag === 18) {
                if (l = o.return, l === null)
                  throw Error(A(341));
                l.lanes |= n, s = l.alternate, s !== null && (s.lanes |= n), qd(l, n, e), l = o.sibling;
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
        Nt(t, e, i.children, n), e = e.child;
      }
      return e;
    case 9:
      return i = e.type, r = e.pendingProps.children, hl(e, n), i = Bn(i), r = r(i), e.flags |= 1, Nt(t, e, r, n), e.child;
    case 14:
      return r = e.type, i = Jn(r, e.pendingProps), i = Jn(r.type, i), Hg(t, e, r, i, n);
    case 15:
      return Oy(t, e, e.type, e.pendingProps, n);
    case 17:
      return r = e.type, i = e.pendingProps, i = e.elementType === r ? i : Jn(r, i), Pu(t, e), e.tag = 1, Jt(r) ? (t = !0, ec(e)) : t = !1, hl(e, n), iy(e, r, i), Zd(e, r, i, n), th(null, e, r, !0, t, n);
    case 19:
      return Iy(t, e, n);
    case 22:
      return Ry(t, e, n);
  }
  throw Error(A(156, e.tag));
};
function qy(t, e) {
  return kv(t, e);
}
function sS(t, e, n, r) {
  this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Dn(t, e, n, r) {
  return new sS(t, e, n, r);
}
function Yp(t) {
  return t = t.prototype, !(!t || !t.isReactComponent);
}
function aS(t) {
  if (typeof t == "function")
    return Yp(t) ? 1 : 0;
  if (t != null) {
    if (t = t.$$typeof, t === fp)
      return 11;
    if (t === dp)
      return 14;
  }
  return 2;
}
function Ei(t, e) {
  var n = t.alternate;
  return n === null ? (n = Dn(t.tag, e, t.key, t.mode), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 14680064, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n;
}
function Mu(t, e, n, r, i, o) {
  var l = 2;
  if (r = t, typeof t == "function")
    Yp(t) && (l = 1);
  else if (typeof t == "string")
    l = 5;
  else
    e:
      switch (t) {
        case Xo:
          return ho(n.children, i, o, e);
        case cp:
          l = 8, i |= 8;
          break;
        case kd:
          return t = Dn(12, n, e, i | 2), t.elementType = kd, t.lanes = o, t;
        case Sd:
          return t = Dn(13, n, e, i), t.elementType = Sd, t.lanes = o, t;
        case Cd:
          return t = Dn(19, n, e, i), t.elementType = Cd, t.lanes = o, t;
        case ov:
          return Yc(n, i, o, e);
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case rv:
                l = 10;
                break e;
              case iv:
                l = 9;
                break e;
              case fp:
                l = 11;
                break e;
              case dp:
                l = 14;
                break e;
              case ii:
                l = 16, r = null;
                break e;
            }
          throw Error(A(130, t == null ? t : typeof t, ""));
      }
  return e = Dn(l, n, e, i), e.elementType = t, e.type = r, e.lanes = o, e;
}
function ho(t, e, n, r) {
  return t = Dn(7, t, r, e), t.lanes = n, t;
}
function Yc(t, e, n, r) {
  return t = Dn(22, t, r, e), t.elementType = ov, t.lanes = n, t.stateNode = { isHidden: !1 }, t;
}
function Yf(t, e, n) {
  return t = Dn(6, t, null, e), t.lanes = n, t;
}
function Xf(t, e, n) {
  return e = Dn(4, t.children !== null ? t.children : [], t.key, e), e.lanes = n, e.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }, e;
}
function uS(t, e, n, r, i) {
  this.tag = e, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = bf(0), this.expirationTimes = bf(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = bf(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function Xp(t, e, n, r, i, o, l, s, a) {
  return t = new uS(t, e, n, s, a), e === 1 ? (e = 1, o === !0 && (e |= 8)) : e = 0, o = Dn(3, null, null, e), t.current = o, o.stateNode = t, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Rp(o), t;
}
function cS(t, e, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Yo, key: r == null ? null : "" + r, children: t, containerInfo: e, implementation: n };
}
function Ky(t) {
  if (!t)
    return Mi;
  t = t._reactInternals;
  e: {
    if (Ao(t) !== t || t.tag !== 1)
      throw Error(A(170));
    var e = t;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break e;
        case 1:
          if (Jt(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error(A(171));
  }
  if (t.tag === 1) {
    var n = t.type;
    if (Jt(n))
      return qv(t, n, e);
  }
  return e;
}
function Zy(t, e, n, r, i, o, l, s, a) {
  return t = Xp(n, r, !0, t, i, o, l, s, a), t.context = Ky(null), n = t.current, r = Lt(), i = Ci(n), o = Ur(r, i), o.callback = e ?? null, ki(n, o, i), t.current.lanes = i, Sa(t, i, r), en(t, r), t;
}
function Xc(t, e, n, r) {
  var i = e.current, o = Lt(), l = Ci(i);
  return n = Ky(n), e.context === null ? e.context = n : e.pendingContext = n, e = Ur(o, l), e.payload = { element: t }, r = r === void 0 ? null : r, r !== null && (e.callback = r), t = ki(i, e, l), t !== null && (lr(t, i, l, o), Eu(t, i, l)), l;
}
function hc(t) {
  if (t = t.current, !t.child)
    return null;
  switch (t.child.tag) {
    case 5:
      return t.child.stateNode;
    default:
      return t.child.stateNode;
  }
}
function rm(t, e) {
  if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
    var n = t.retryLane;
    t.retryLane = n !== 0 && n < e ? n : e;
  }
}
function Gp(t, e) {
  rm(t, e), (t = t.alternate) && rm(t, e);
}
function fS() {
  return null;
}
var Jy = typeof reportError == "function" ? reportError : function(t) {
  console.error(t);
};
function Qp(t) {
  this._internalRoot = t;
}
Gc.prototype.render = Qp.prototype.render = function(t) {
  var e = this._internalRoot;
  if (e === null)
    throw Error(A(409));
  Xc(t, e, null, null);
};
Gc.prototype.unmount = Qp.prototype.unmount = function() {
  var t = this._internalRoot;
  if (t !== null) {
    this._internalRoot = null;
    var e = t.containerInfo;
    Eo(function() {
      Xc(null, t, null, null);
    }), e[Yr] = null;
  }
};
function Gc(t) {
  this._internalRoot = t;
}
Gc.prototype.unstable_scheduleHydration = function(t) {
  if (t) {
    var e = Ov();
    t = { blockedOn: null, target: t, priority: e };
    for (var n = 0; n < li.length && e !== 0 && e < li[n].priority; n++)
      ;
    li.splice(n, 0, t), n === 0 && Mv(t);
  }
};
function qp(t) {
  return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
}
function Qc(t) {
  return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "));
}
function im() {
}
function dS(t, e, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var u = hc(l);
        o.call(u);
      };
    }
    var l = Zy(e, r, t, 0, null, !1, !1, "", im);
    return t._reactRootContainer = l, t[Yr] = l.current, Ks(t.nodeType === 8 ? t.parentNode : t), Eo(), l;
  }
  for (; i = t.lastChild; )
    t.removeChild(i);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var u = hc(a);
      s.call(u);
    };
  }
  var a = Xp(t, 0, !1, null, null, !1, !1, "", im);
  return t._reactRootContainer = a, t[Yr] = a.current, Ks(t.nodeType === 8 ? t.parentNode : t), Eo(function() {
    Xc(e, a, n, r);
  }), a;
}
function qc(t, e, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var l = o;
    if (typeof i == "function") {
      var s = i;
      i = function() {
        var a = hc(l);
        s.call(a);
      };
    }
    Xc(e, l, t, i);
  } else
    l = dS(n, e, t, i, r);
  return hc(l);
}
bv = function(t) {
  switch (t.tag) {
    case 3:
      var e = t.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var n = as(e.pendingLanes);
        n !== 0 && (gp(e, n | 1), en(e, We()), !(ge & 6) && (Rl = We() + 500, ji()));
      }
      break;
    case 13:
      Eo(function() {
        var r = Xr(t, 1);
        if (r !== null) {
          var i = Lt();
          lr(r, t, 1, i);
        }
      }), Gp(t, 1);
  }
};
mp = function(t) {
  if (t.tag === 13) {
    var e = Xr(t, 134217728);
    if (e !== null) {
      var n = Lt();
      lr(e, t, 134217728, n);
    }
    Gp(t, 134217728);
  }
};
Pv = function(t) {
  if (t.tag === 13) {
    var e = Ci(t), n = Xr(t, e);
    if (n !== null) {
      var r = Lt();
      lr(n, t, e, r);
    }
    Gp(t, e);
  }
};
Ov = function() {
  return _e;
};
Rv = function(t, e) {
  var n = _e;
  try {
    return _e = t, e();
  } finally {
    _e = n;
  }
};
Id = function(t, e, n) {
  switch (e) {
    case "input":
      if (bd(t, n), e = n.name, n.type === "radio" && e != null) {
        for (n = t; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'), e = 0; e < n.length; e++) {
          var r = n[e];
          if (r !== t && r.form === t.form) {
            var i = Fc(r);
            if (!i)
              throw Error(A(90));
            sv(r), bd(r, i);
          }
        }
      }
      break;
    case "textarea":
      uv(t, n);
      break;
    case "select":
      e = n.value, e != null && ul(t, !!n.multiple, e, !1);
  }
};
mv = Up;
vv = Eo;
var hS = { usingClientEntryPoint: !1, Events: [Ea, Ko, Fc, pv, gv, Up] }, Jl = { findFiberByHostInstance: oo, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, pS = { bundleType: Jl.bundleType, version: Jl.version, rendererPackageName: Jl.rendererPackageName, rendererConfig: Jl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Kr.ReactCurrentDispatcher, findHostInstanceByFiber: function(t) {
  return t = xv(t), t === null ? null : t.stateNode;
}, findFiberByHostInstance: Jl.findFiberByHostInstance || fS, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ka = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ka.isDisabled && Ka.supportsFiber)
    try {
      zc = Ka.inject(pS), Sr = Ka;
    } catch {
    }
}
Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hS;
Cn.createPortal = function(t, e) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!qp(e))
    throw Error(A(200));
  return cS(t, e, null, n);
};
Cn.createRoot = function(t, e) {
  if (!qp(t))
    throw Error(A(299));
  var n = !1, r = "", i = Jy;
  return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (r = e.identifierPrefix), e.onRecoverableError !== void 0 && (i = e.onRecoverableError)), e = Xp(t, 1, !1, null, null, n, !1, r, i), t[Yr] = e.current, Ks(t.nodeType === 8 ? t.parentNode : t), new Qp(e);
};
Cn.findDOMNode = function(t) {
  if (t == null)
    return null;
  if (t.nodeType === 1)
    return t;
  var e = t._reactInternals;
  if (e === void 0)
    throw typeof t.render == "function" ? Error(A(188)) : (t = Object.keys(t).join(","), Error(A(268, t)));
  return t = xv(e), t = t === null ? null : t.stateNode, t;
};
Cn.flushSync = function(t) {
  return Eo(t);
};
Cn.hydrate = function(t, e, n) {
  if (!Qc(e))
    throw Error(A(200));
  return qc(null, t, e, !0, n);
};
Cn.hydrateRoot = function(t, e, n) {
  if (!qp(t))
    throw Error(A(405));
  var r = n != null && n.hydratedSources || null, i = !1, o = "", l = Jy;
  if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), e = Zy(e, null, t, 1, n ?? null, i, !1, o, l), t[Yr] = e.current, Ks(t), r)
    for (t = 0; t < r.length; t++)
      n = r[t], i = n._getVersion, i = i(n._source), e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [n, i] : e.mutableSourceEagerHydrationData.push(
        n,
        i
      );
  return new Gc(e);
};
Cn.render = function(t, e, n) {
  if (!Qc(e))
    throw Error(A(200));
  return qc(null, t, e, !1, n);
};
Cn.unmountComponentAtNode = function(t) {
  if (!Qc(t))
    throw Error(A(40));
  return t._reactRootContainer ? (Eo(function() {
    qc(null, null, t, !1, function() {
      t._reactRootContainer = null, t[Yr] = null;
    });
  }), !0) : !1;
};
Cn.unstable_batchedUpdates = Up;
Cn.unstable_renderSubtreeIntoContainer = function(t, e, n, r) {
  if (!Qc(n))
    throw Error(A(200));
  if (t == null || t._reactInternals === void 0)
    throw Error(A(38));
  return qc(t, e, n, !1, r);
};
Cn.version = "18.2.0-next-9e3b772b8-20220608";
function e_() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e_);
    } catch (t) {
      console.error(t);
    }
}
e_(), Z1.exports = Cn;
var t_ = Z1.exports, om = t_;
xd.createRoot = om.createRoot, xd.hydrateRoot = om.hydrateRoot;
function Ir(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function n_(t, e) {
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
var wn = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, Ml = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, Kp, Tt, Le, zn = 1e8, ke = 1 / zn, hh = Math.PI * 2, gS = hh / 4, mS = 0, r_ = Math.sqrt, vS = Math.cos, yS = Math.sin, at = function(e) {
  return typeof e == "string";
}, Fe = function(e) {
  return typeof e == "function";
}, Qr = function(e) {
  return typeof e == "number";
}, Zp = function(e) {
  return typeof e > "u";
}, br = function(e) {
  return typeof e == "object";
}, tn = function(e) {
  return e !== !1;
}, Jp = function() {
  return typeof window < "u";
}, Za = function(e) {
  return Fe(e) || at(e);
}, i_ = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, bt = Array.isArray, ph = /(?:-?\.?\d|\.)+/gi, o_ = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, il = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Gf = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, l_ = /[+-]=-?[.\d]+/, s_ = /[^,'"\[\]\s]+/gi, _S = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, Ae, Pn, gh, e0, Sn = {}, pc = {}, a_, u_ = function(e) {
  return (pc = To(e, Sn)) && ln;
}, t0 = function(e, n) {
  return console.warn("Invalid property", e, "set to", n, "Missing plugin? gsap.registerPlugin()");
}, gc = function(e, n) {
  return !n && console.warn(e);
}, c_ = function(e, n) {
  return e && (Sn[e] = n) && pc && (pc[e] = n) || Sn;
}, la = function() {
  return 0;
}, xS = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, Nu = {
  suppressEvents: !0,
  kill: !1
}, wS = {
  suppressEvents: !0
}, n0 = {}, Ti = [], mh = {}, f_, mn = {}, Qf = {}, lm = 30, Au = [], r0 = "", i0 = function(e) {
  var n = e[0], r, i;
  if (br(n) || Fe(n) || (e = [e]), !(r = (n._gsap || {}).harness)) {
    for (i = Au.length; i-- && !Au[i].targetTest(n); )
      ;
    r = Au[i];
  }
  for (i = e.length; i--; )
    e[i] && (e[i]._gsap || (e[i]._gsap = new D_(e[i], r))) || e.splice(i, 1);
  return e;
}, po = function(e) {
  return e._gsap || i0($n(e))[0]._gsap;
}, d_ = function(e, n, r) {
  return (r = e[n]) && Fe(r) ? e[n]() : Zp(r) && e.getAttribute && e.getAttribute(n) || r;
}, nn = function(e, n) {
  return (e = e.split(",")).forEach(n) || e;
}, Ue = function(e) {
  return Math.round(e * 1e5) / 1e5 || 0;
}, pt = function(e) {
  return Math.round(e * 1e7) / 1e7 || 0;
}, gl = function(e, n) {
  var r = n.charAt(0), i = parseFloat(n.substr(2));
  return e = parseFloat(e), r === "+" ? e + i : r === "-" ? e - i : r === "*" ? e * i : e / i;
}, kS = function(e, n) {
  for (var r = n.length, i = 0; e.indexOf(n[i]) < 0 && ++i < r; )
    ;
  return i < r;
}, mc = function() {
  var e = Ti.length, n = Ti.slice(0), r, i;
  for (mh = {}, Ti.length = 0, r = 0; r < e; r++)
    i = n[r], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
}, h_ = function(e, n, r, i) {
  Ti.length && !Tt && mc(), e.render(n, r, i || Tt && n < 0 && (e._initted || e._startAt)), Ti.length && !Tt && mc();
}, p_ = function(e) {
  var n = parseFloat(e);
  return (n || n === 0) && (e + "").match(s_).length < 2 ? n : at(e) ? e.trim() : e;
}, g_ = function(e) {
  return e;
}, Un = function(e, n) {
  for (var r in n)
    r in e || (e[r] = n[r]);
  return e;
}, SS = function(e) {
  return function(n, r) {
    for (var i in r)
      i in n || i === "duration" && e || i === "ease" || (n[i] = r[i]);
  };
}, To = function(e, n) {
  for (var r in n)
    e[r] = n[r];
  return e;
}, sm = function t(e, n) {
  for (var r in n)
    r !== "__proto__" && r !== "constructor" && r !== "prototype" && (e[r] = br(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r]);
  return e;
}, vc = function(e, n) {
  var r = {}, i;
  for (i in e)
    i in n || (r[i] = e[i]);
  return r;
}, bs = function(e) {
  var n = e.parent || Ae, r = e.keyframes ? SS(bt(e.keyframes)) : Un;
  if (tn(e.inherit))
    for (; n; )
      r(e, n.vars.defaults), n = n.parent || n._dp;
  return e;
}, CS = function(e, n) {
  for (var r = e.length, i = r === n.length; i && r-- && e[r] === n[r]; )
    ;
  return r < 0;
}, m_ = function(e, n, r, i, o) {
  r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
  var l = e[i], s;
  if (o)
    for (s = n[o]; l && l[o] > s; )
      l = l._prev;
  return l ? (n._next = l._next, l._next = n) : (n._next = e[r], e[r] = n), n._next ? n._next._prev = n : e[i] = n, n._prev = l, n.parent = n._dp = e, n;
}, Kc = function(e, n, r, i) {
  r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
  var o = n._prev, l = n._next;
  o ? o._next = l : e[r] === n && (e[r] = l), l ? l._prev = o : e[i] === n && (e[i] = o), n._next = n._prev = n.parent = null;
}, Ni = function(e, n) {
  e.parent && (!n || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0;
}, go = function(e, n) {
  if (e && (!n || n._end > e._dur || n._start < 0))
    for (var r = e; r; )
      r._dirty = 1, r = r.parent;
  return e;
}, ES = function(e) {
  for (var n = e.parent; n && n.parent; )
    n._dirty = 1, n.totalDuration(), n = n.parent;
  return e;
}, vh = function(e, n, r, i) {
  return e._startAt && (Tt ? e._startAt.revert(Nu) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(n, !0, i));
}, TS = function t(e) {
  return !e || e._ts && t(e.parent);
}, am = function(e) {
  return e._repeat ? Nl(e._tTime, e = e.duration() + e._rDelay) * e : 0;
}, Nl = function(e, n) {
  var r = Math.floor(e /= n);
  return e && r === e ? r - 1 : r;
}, yc = function(e, n) {
  return (e - n._start) * n._ts + (n._ts >= 0 ? 0 : n._dirty ? n.totalDuration() : n._tDur);
}, Zc = function(e) {
  return e._end = pt(e._start + (e._tDur / Math.abs(e._ts || e._rts || ke) || 0));
}, Jc = function(e, n) {
  var r = e._dp;
  return r && r.smoothChildTiming && e._ts && (e._start = pt(r._time - (e._ts > 0 ? n / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - n) / -e._ts)), Zc(e), r._dirty || go(r, e)), e;
}, v_ = function(e, n) {
  var r;
  if ((n._time || !n._dur && n._initted || n._start < e._time && (n._dur || !n.add)) && (r = yc(e.rawTime(), n), (!n._dur || ba(0, n.totalDuration(), r) - n._tTime > ke) && n.render(r, !0)), go(e, n)._dp && e._initted && e._time >= e._dur && e._ts) {
    if (e._dur < e.duration())
      for (r = e; r._dp; )
        r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
    e._zTime = -ke;
  }
}, xr = function(e, n, r, i) {
  return n.parent && Ni(n), n._start = pt((Qr(r) ? r : r || e !== Ae ? bn(e, r, n) : e._time) + n._delay), n._end = pt(n._start + (n.totalDuration() / Math.abs(n.timeScale()) || 0)), m_(e, n, "_first", "_last", e._sort ? "_start" : 0), yh(n) || (e._recent = n), i || v_(e, n), e._ts < 0 && Jc(e, e._tTime), e;
}, y_ = function(e, n) {
  return (Sn.ScrollTrigger || t0("scrollTrigger", n)) && Sn.ScrollTrigger.create(n, e);
}, __ = function(e, n, r, i, o) {
  if (l0(e, n, o), !e._initted)
    return 1;
  if (!r && e._pt && !Tt && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && f_ !== vn.frame)
    return Ti.push(e), e._lazy = [o, i], 1;
}, bS = function t(e) {
  var n = e.parent;
  return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n));
}, yh = function(e) {
  var n = e.data;
  return n === "isFromStart" || n === "isStart";
}, PS = function(e, n, r, i) {
  var o = e.ratio, l = n < 0 || !n && (!e._start && bS(e) && !(!e._initted && yh(e)) || (e._ts < 0 || e._dp._ts < 0) && !yh(e)) ? 0 : 1, s = e._rDelay, a = 0, u, c, f;
  if (s && e._repeat && (a = ba(0, e._tDur, n), c = Nl(a, s), e._yoyo && c & 1 && (l = 1 - l), c !== Nl(e._tTime, s) && (o = 1 - l, e.vars.repeatRefresh && e._initted && e.invalidate())), l !== o || Tt || i || e._zTime === ke || !n && e._zTime) {
    if (!e._initted && __(e, n, i, r, a))
      return;
    for (f = e._zTime, e._zTime = n || (r ? ke : 0), r || (r = n && !f), e.ratio = l, e._from && (l = 1 - l), e._time = 0, e._tTime = a, u = e._pt; u; )
      u.r(l, u.d), u = u._next;
    n < 0 && vh(e, n, r, !0), e._onUpdate && !r && jn(e, "onUpdate"), a && e._repeat && !r && e.parent && jn(e, "onRepeat"), (n >= e._tDur || n < 0) && e.ratio === l && (l && Ni(e, 1), !r && !Tt && (jn(e, l ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()));
  } else
    e._zTime || (e._zTime = n);
}, OS = function(e, n, r) {
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
}, Al = function(e, n, r, i) {
  var o = e._repeat, l = pt(n) || 0, s = e._tTime / e._tDur;
  return s && !i && (e._time *= l / e._dur), e._dur = l, e._tDur = o ? o < 0 ? 1e10 : pt(l * (o + 1) + e._rDelay * o) : l, s > 0 && !i && Jc(e, e._tTime = e._tDur * s), e.parent && Zc(e), r || go(e.parent, e), e;
}, um = function(e) {
  return e instanceof qt ? go(e) : Al(e, e._dur);
}, RS = {
  _start: 0,
  endTime: la,
  totalDuration: la
}, bn = function t(e, n, r) {
  var i = e.labels, o = e._recent || RS, l = e.duration() >= zn ? o.endTime(!1) : e._dur, s, a, u;
  return at(n) && (isNaN(n) || n in i) ? (a = n.charAt(0), u = n.substr(-1) === "%", s = n.indexOf("="), a === "<" || a === ">" ? (s >= 0 && (n = n.replace(/=/, "")), (a === "<" ? o._start : o.endTime(o._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (u ? (s < 0 ? o : r).totalDuration() / 100 : 1)) : s < 0 ? (n in i || (i[n] = l), i[n]) : (a = parseFloat(n.charAt(s - 1) + n.substr(s + 1)), u && r && (a = a / 100 * (bt(r) ? r[0] : r).totalDuration()), s > 1 ? t(e, n.substr(0, s - 1), r) + a : l + a)) : n == null ? l : +n;
}, Ps = function(e, n, r) {
  var i = Qr(n[1]), o = (i ? 2 : 1) + (e < 2 ? 0 : 1), l = n[o], s, a;
  if (i && (l.duration = n[1]), l.parent = r, e) {
    for (s = l, a = r; a && !("immediateRender" in s); )
      s = a.vars.defaults || {}, a = tn(a.vars.inherit) && a.parent;
    l.immediateRender = tn(s.immediateRender), e < 2 ? l.runBackwards = 1 : l.startAt = n[o - 1];
  }
  return new Qe(n[0], l, n[o + 1]);
}, Li = function(e, n) {
  return e || e === 0 ? n(e) : n;
}, ba = function(e, n, r) {
  return r < e ? e : r > n ? n : r;
}, Et = function(e, n) {
  return !at(e) || !(n = _S.exec(e)) ? "" : n[1];
}, MS = function(e, n, r) {
  return Li(r, function(i) {
    return ba(e, n, i);
  });
}, _h = [].slice, x_ = function(e, n) {
  return e && br(e) && "length" in e && (!n && !e.length || e.length - 1 in e && br(e[0])) && !e.nodeType && e !== Pn;
}, NS = function(e, n, r) {
  return r === void 0 && (r = []), e.forEach(function(i) {
    var o;
    return at(i) && !n || x_(i, 1) ? (o = r).push.apply(o, $n(i)) : r.push(i);
  }) || r;
}, $n = function(e, n, r) {
  return Le && !n && Le.selector ? Le.selector(e) : at(e) && !r && (gh || !Il()) ? _h.call((n || e0).querySelectorAll(e), 0) : bt(e) ? NS(e, r) : x_(e) ? _h.call(e, 0) : e ? [e] : [];
}, xh = function(e) {
  return e = $n(e)[0] || gc("Invalid scope") || {}, function(n) {
    var r = e.current || e.nativeElement || e;
    return $n(n, r.querySelectorAll ? r : r === e ? gc("Invalid scope") || e0.createElement("div") : e);
  };
}, w_ = function(e) {
  return e.sort(function() {
    return 0.5 - Math.random();
  });
}, k_ = function(e) {
  if (Fe(e))
    return e;
  var n = br(e) ? e : {
    each: e
  }, r = mo(n.ease), i = n.from || 0, o = parseFloat(n.base) || 0, l = {}, s = i > 0 && i < 1, a = isNaN(i) || s, u = n.axis, c = i, f = i;
  return at(i) ? c = f = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[i] || 0 : !s && a && (c = i[0], f = i[1]), function(h, d, g) {
    var p = (g || n).length, _ = l[p], v, m, y, x, C, T, E, b, O;
    if (!_) {
      if (O = n.grid === "auto" ? 0 : (n.grid || [1, zn])[1], !O) {
        for (E = -zn; E < (E = g[O++].getBoundingClientRect().left) && O < p; )
          ;
        O--;
      }
      for (_ = l[p] = [], v = a ? Math.min(O, p) * c - 0.5 : i % O, m = O === zn ? 0 : a ? p * f / O - 0.5 : i / O | 0, E = 0, b = zn, T = 0; T < p; T++)
        y = T % O - v, x = m - (T / O | 0), _[T] = C = u ? Math.abs(u === "y" ? x : y) : r_(y * y + x * x), C > E && (E = C), C < b && (b = C);
      i === "random" && w_(_), _.max = E - b, _.min = b, _.v = p = (parseFloat(n.amount) || parseFloat(n.each) * (O > p ? p - 1 : u ? u === "y" ? p / O : O : Math.max(O, p / O)) || 0) * (i === "edges" ? -1 : 1), _.b = p < 0 ? o - p : o, _.u = Et(n.amount || n.each) || 0, r = r && p < 0 ? N_(r) : r;
    }
    return p = (_[h] - _.min) / _.max || 0, pt(_.b + (r ? r(p) : p) * _.v) + _.u;
  };
}, wh = function(e) {
  var n = Math.pow(10, ((e + "").split(".")[1] || "").length);
  return function(r) {
    var i = pt(Math.round(parseFloat(r) / e) * e * n);
    return (i - i % 1) / n + (Qr(r) ? 0 : Et(r));
  };
}, S_ = function(e, n) {
  var r = bt(e), i, o;
  return !r && br(e) && (i = r = e.radius || zn, e.values ? (e = $n(e.values), (o = !Qr(e[0])) && (i *= i)) : e = wh(e.increment)), Li(n, r ? Fe(e) ? function(l) {
    return o = e(l), Math.abs(o - l) <= i ? o : l;
  } : function(l) {
    for (var s = parseFloat(o ? l.x : l), a = parseFloat(o ? l.y : 0), u = zn, c = 0, f = e.length, h, d; f--; )
      o ? (h = e[f].x - s, d = e[f].y - a, h = h * h + d * d) : h = Math.abs(e[f] - s), h < u && (u = h, c = f);
    return c = !i || u <= i ? e[c] : l, o || c === l || Qr(l) ? c : c + Et(l);
  } : wh(e));
}, C_ = function(e, n, r, i) {
  return Li(bt(e) ? !n : r === !0 ? !!(r = 0) : !i, function() {
    return bt(e) ? e[~~(Math.random() * e.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((e - r / 2 + Math.random() * (n - e + r * 0.99)) / r) * r * i) / i;
  });
}, AS = function() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return function(i) {
    return n.reduce(function(o, l) {
      return l(o);
    }, i);
  };
}, IS = function(e, n) {
  return function(r) {
    return e(parseFloat(r)) + (n || Et(r));
  };
}, DS = function(e, n, r) {
  return T_(e, n, 0, 1, r);
}, E_ = function(e, n, r) {
  return Li(r, function(i) {
    return e[~~n(i)];
  });
}, zS = function t(e, n, r) {
  var i = n - e;
  return bt(e) ? E_(e, t(0, e.length), n) : Li(r, function(o) {
    return (i + (o - e) % i) % i + e;
  });
}, $S = function t(e, n, r) {
  var i = n - e, o = i * 2;
  return bt(e) ? E_(e, t(0, e.length - 1), n) : Li(r, function(l) {
    return l = (o + (l - e) % o) % o || 0, e + (l > i ? o - l : l);
  });
}, sa = function(e) {
  for (var n = 0, r = "", i, o, l, s; ~(i = e.indexOf("random(", n)); )
    l = e.indexOf(")", i), s = e.charAt(i + 7) === "[", o = e.substr(i + 7, l - i - 7).match(s ? s_ : ph), r += e.substr(n, i - n) + C_(s ? o : +o[0], s ? 0 : +o[1], +o[2] || 1e-5), n = l + 1;
  return r + e.substr(n, e.length - n);
}, T_ = function(e, n, r, i, o) {
  var l = n - e, s = i - r;
  return Li(o, function(a) {
    return r + ((a - e) / l * s || 0);
  });
}, jS = function t(e, n, r, i) {
  var o = isNaN(e + n) ? 0 : function(d) {
    return (1 - d) * e + d * n;
  };
  if (!o) {
    var l = at(e), s = {}, a, u, c, f, h;
    if (r === !0 && (i = 1) && (r = null), l)
      e = {
        p: e
      }, n = {
        p: n
      };
    else if (bt(e) && !bt(n)) {
      for (c = [], f = e.length, h = f - 2, u = 1; u < f; u++)
        c.push(t(e[u - 1], e[u]));
      f--, o = function(g) {
        g *= f;
        var p = Math.min(h, ~~g);
        return c[p](g - p);
      }, r = n;
    } else
      i || (e = To(bt(e) ? [] : {}, e));
    if (!c) {
      for (a in n)
        o0.call(s, e, a, "get", n[a]);
      o = function(g) {
        return u0(g, s) || (l ? e.p : e);
      };
    }
  }
  return Li(r, o);
}, cm = function(e, n, r) {
  var i = e.labels, o = zn, l, s, a;
  for (l in i)
    s = i[l] - n, s < 0 == !!r && s && o > (s = Math.abs(s)) && (a = l, o = s);
  return a;
}, jn = function(e, n, r) {
  var i = e.vars, o = i[n], l = Le, s = e._ctx, a, u, c;
  if (o)
    return a = i[n + "Params"], u = i.callbackScope || e, r && Ti.length && mc(), s && (Le = s), c = a ? o.apply(u, a) : o.call(u), Le = l, c;
}, cs = function(e) {
  return Ni(e), e.scrollTrigger && e.scrollTrigger.kill(!!Tt), e.progress() < 1 && jn(e, "onInterrupt"), e;
}, ol, b_ = [], P_ = function(e) {
  if (Jp() && e) {
    e = !e.name && e.default || e;
    var n = e.name, r = Fe(e), i = n && !r && e.init ? function() {
      this._props = [];
    } : e, o = {
      init: la,
      render: u0,
      add: o0,
      kill: eC,
      modifier: JS,
      rawVars: 0
    }, l = {
      targetTest: 0,
      get: 0,
      getSetter: a0,
      aliases: {},
      register: 0
    };
    if (Il(), e !== i) {
      if (mn[n])
        return;
      Un(i, Un(vc(e, o), l)), To(i.prototype, To(o, vc(e, l))), mn[i.prop = n] = i, e.targetTest && (Au.push(i), n0[n] = 1), n = (n === "css" ? "CSS" : n.charAt(0).toUpperCase() + n.substr(1)) + "Plugin";
    }
    c_(n, i), e.register && e.register(ln, i, rn);
  } else
    e && b_.push(e);
}, we = 255, fs = {
  aqua: [0, we, we],
  lime: [0, we, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, we],
  navy: [0, 0, 128],
  white: [we, we, we],
  olive: [128, 128, 0],
  yellow: [we, we, 0],
  orange: [we, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [we, 0, 0],
  pink: [we, 192, 203],
  cyan: [0, we, we],
  transparent: [we, we, we, 0]
}, qf = function(e, n, r) {
  return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? n + (r - n) * e * 6 : e < 0.5 ? r : e * 3 < 2 ? n + (r - n) * (2 / 3 - e) * 6 : n) * we + 0.5 | 0;
}, O_ = function(e, n, r) {
  var i = e ? Qr(e) ? [e >> 16, e >> 8 & we, e & we] : 0 : fs.black, o, l, s, a, u, c, f, h, d, g;
  if (!i) {
    if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), fs[e])
      i = fs[e];
    else if (e.charAt(0) === "#") {
      if (e.length < 6 && (o = e.charAt(1), l = e.charAt(2), s = e.charAt(3), e = "#" + o + o + l + l + s + s + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9)
        return i = parseInt(e.substr(1, 6), 16), [i >> 16, i >> 8 & we, i & we, parseInt(e.substr(7), 16) / 255];
      e = parseInt(e.substr(1), 16), i = [e >> 16, e >> 8 & we, e & we];
    } else if (e.substr(0, 3) === "hsl") {
      if (i = g = e.match(ph), !n)
        a = +i[0] % 360 / 360, u = +i[1] / 100, c = +i[2] / 100, l = c <= 0.5 ? c * (u + 1) : c + u - c * u, o = c * 2 - l, i.length > 3 && (i[3] *= 1), i[0] = qf(a + 1 / 3, o, l), i[1] = qf(a, o, l), i[2] = qf(a - 1 / 3, o, l);
      else if (~e.indexOf("="))
        return i = e.match(o_), r && i.length < 4 && (i[3] = 1), i;
    } else
      i = e.match(ph) || fs.transparent;
    i = i.map(Number);
  }
  return n && !g && (o = i[0] / we, l = i[1] / we, s = i[2] / we, f = Math.max(o, l, s), h = Math.min(o, l, s), c = (f + h) / 2, f === h ? a = u = 0 : (d = f - h, u = c > 0.5 ? d / (2 - f - h) : d / (f + h), a = f === o ? (l - s) / d + (l < s ? 6 : 0) : f === l ? (s - o) / d + 2 : (o - l) / d + 4, a *= 60), i[0] = ~~(a + 0.5), i[1] = ~~(u * 100 + 0.5), i[2] = ~~(c * 100 + 0.5)), r && i.length < 4 && (i[3] = 1), i;
}, R_ = function(e) {
  var n = [], r = [], i = -1;
  return e.split(bi).forEach(function(o) {
    var l = o.match(il) || [];
    n.push.apply(n, l), r.push(i += l.length + 1);
  }), n.c = r, n;
}, fm = function(e, n, r) {
  var i = "", o = (e + i).match(bi), l = n ? "hsla(" : "rgba(", s = 0, a, u, c, f;
  if (!o)
    return e;
  if (o = o.map(function(h) {
    return (h = O_(h, n, 1)) && l + (n ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3] : h.join(",")) + ")";
  }), r && (c = R_(e), a = r.c, a.join(i) !== c.c.join(i)))
    for (u = e.replace(bi, "1").split(il), f = u.length - 1; s < f; s++)
      i += u[s] + (~a.indexOf(s) ? o.shift() || l + "0,0,0,0)" : (c.length ? c : o.length ? o : r).shift());
  if (!u)
    for (u = e.split(bi), f = u.length - 1; s < f; s++)
      i += u[s] + o[s];
  return i + u[f];
}, bi = function() {
  var t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
  for (e in fs)
    t += "|" + e + "\\b";
  return new RegExp(t + ")", "gi");
}(), LS = /hsl[a]?\(/, M_ = function(e) {
  var n = e.join(" "), r;
  if (bi.lastIndex = 0, bi.test(n))
    return r = LS.test(n), e[1] = fm(e[1], r), e[0] = fm(e[0], r, R_(e[1])), !0;
}, aa, vn = function() {
  var t = Date.now, e = 500, n = 33, r = t(), i = r, o = 1e3 / 240, l = o, s = [], a, u, c, f, h, d, g = function p(_) {
    var v = t() - i, m = _ === !0, y, x, C, T;
    if (v > e && (r += v - n), i += v, C = i - r, y = C - l, (y > 0 || m) && (T = ++f.frame, h = C - f.time * 1e3, f.time = C = C / 1e3, l += y + (y >= o ? 4 : o - y), x = 1), m || (a = u(p)), x)
      for (d = 0; d < s.length; d++)
        s[d](C, h, T, _);
  };
  return f = {
    time: 0,
    frame: 0,
    tick: function() {
      g(!0);
    },
    deltaRatio: function(_) {
      return h / (1e3 / (_ || 60));
    },
    wake: function() {
      a_ && (!gh && Jp() && (Pn = gh = window, e0 = Pn.document || {}, Sn.gsap = ln, (Pn.gsapVersions || (Pn.gsapVersions = [])).push(ln.version), u_(pc || Pn.GreenSockGlobals || !Pn.gsap && Pn || {}), c = Pn.requestAnimationFrame, b_.forEach(P_)), a && f.sleep(), u = c || function(_) {
        return setTimeout(_, l - f.time * 1e3 + 1 | 0);
      }, aa = 1, g(2));
    },
    sleep: function() {
      (c ? Pn.cancelAnimationFrame : clearTimeout)(a), aa = 0, u = la;
    },
    lagSmoothing: function(_, v) {
      e = _ || 1 / 0, n = Math.min(v || 33, e);
    },
    fps: function(_) {
      o = 1e3 / (_ || 240), l = f.time * 1e3 + o;
    },
    add: function(_, v, m) {
      var y = v ? function(x, C, T, E) {
        _(x, C, T, E), f.remove(y);
      } : _;
      return f.remove(_), s[m ? "unshift" : "push"](y), Il(), y;
    },
    remove: function(_, v) {
      ~(v = s.indexOf(_)) && s.splice(v, 1) && d >= v && d--;
    },
    _listeners: s
  }, f;
}(), Il = function() {
  return !aa && vn.wake();
}, ae = {}, FS = /^[\d.\-M][\d.\-,\s]/, BS = /["']/g, VS = function(e) {
  for (var n = {}, r = e.substr(1, e.length - 3).split(":"), i = r[0], o = 1, l = r.length, s, a, u; o < l; o++)
    a = r[o], s = o !== l - 1 ? a.lastIndexOf(",") : a.length, u = a.substr(0, s), n[i] = isNaN(u) ? u.replace(BS, "").trim() : +u, i = a.substr(s + 1).trim();
  return n;
}, US = function(e) {
  var n = e.indexOf("(") + 1, r = e.indexOf(")"), i = e.indexOf("(", n);
  return e.substring(n, ~i && i < r ? e.indexOf(")", r + 1) : r);
}, WS = function(e) {
  var n = (e + "").split("("), r = ae[n[0]];
  return r && n.length > 1 && r.config ? r.config.apply(null, ~e.indexOf("{") ? [VS(n[1])] : US(e).split(",").map(p_)) : ae._CE && FS.test(e) ? ae._CE("", e) : r;
}, N_ = function(e) {
  return function(n) {
    return 1 - e(1 - n);
  };
}, A_ = function t(e, n) {
  for (var r = e._first, i; r; )
    r instanceof qt ? t(r, n) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== n && (r.timeline ? t(r.timeline, n) : (i = r._ease, r._ease = r._yEase, r._yEase = i, r._yoyo = n)), r = r._next;
}, mo = function(e, n) {
  return e && (Fe(e) ? e : ae[e] || WS(e)) || n;
}, Io = function(e, n, r, i) {
  r === void 0 && (r = function(a) {
    return 1 - n(1 - a);
  }), i === void 0 && (i = function(a) {
    return a < 0.5 ? n(a * 2) / 2 : 1 - n((1 - a) * 2) / 2;
  });
  var o = {
    easeIn: n,
    easeOut: r,
    easeInOut: i
  }, l;
  return nn(e, function(s) {
    ae[s] = Sn[s] = o, ae[l = s.toLowerCase()] = r;
    for (var a in o)
      ae[l + (a === "easeIn" ? ".in" : a === "easeOut" ? ".out" : ".inOut")] = ae[s + "." + a] = o[a];
  }), o;
}, I_ = function(e) {
  return function(n) {
    return n < 0.5 ? (1 - e(1 - n * 2)) / 2 : 0.5 + e((n - 0.5) * 2) / 2;
  };
}, Kf = function t(e, n, r) {
  var i = n >= 1 ? n : 1, o = (r || (e ? 0.3 : 0.45)) / (n < 1 ? n : 1), l = o / hh * (Math.asin(1 / i) || 0), s = function(c) {
    return c === 1 ? 1 : i * Math.pow(2, -10 * c) * yS((c - l) * o) + 1;
  }, a = e === "out" ? s : e === "in" ? function(u) {
    return 1 - s(1 - u);
  } : I_(s);
  return o = hh / o, a.config = function(u, c) {
    return t(e, u, c);
  }, a;
}, Zf = function t(e, n) {
  n === void 0 && (n = 1.70158);
  var r = function(l) {
    return l ? --l * l * ((n + 1) * l + n) + 1 : 0;
  }, i = e === "out" ? r : e === "in" ? function(o) {
    return 1 - r(1 - o);
  } : I_(r);
  return i.config = function(o) {
    return t(e, o);
  }, i;
};
nn("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
  var n = e < 5 ? e + 1 : e;
  Io(t + ",Power" + (n - 1), e ? function(r) {
    return Math.pow(r, n);
  } : function(r) {
    return r;
  }, function(r) {
    return 1 - Math.pow(1 - r, n);
  }, function(r) {
    return r < 0.5 ? Math.pow(r * 2, n) / 2 : 1 - Math.pow((1 - r) * 2, n) / 2;
  });
});
ae.Linear.easeNone = ae.none = ae.Linear.easeIn;
Io("Elastic", Kf("in"), Kf("out"), Kf());
(function(t, e) {
  var n = 1 / e, r = 2 * n, i = 2.5 * n, o = function(s) {
    return s < n ? t * s * s : s < r ? t * Math.pow(s - 1.5 / e, 2) + 0.75 : s < i ? t * (s -= 2.25 / e) * s + 0.9375 : t * Math.pow(s - 2.625 / e, 2) + 0.984375;
  };
  Io("Bounce", function(l) {
    return 1 - o(1 - l);
  }, o);
})(7.5625, 2.75);
Io("Expo", function(t) {
  return t ? Math.pow(2, 10 * (t - 1)) : 0;
});
Io("Circ", function(t) {
  return -(r_(1 - t * t) - 1);
});
Io("Sine", function(t) {
  return t === 1 ? 1 : -vS(t * gS) + 1;
});
Io("Back", Zf("in"), Zf("out"), Zf());
ae.SteppedEase = ae.steps = Sn.SteppedEase = {
  config: function(e, n) {
    e === void 0 && (e = 1);
    var r = 1 / e, i = e + (n ? 0 : 1), o = n ? 1 : 0, l = 1 - ke;
    return function(s) {
      return ((i * ba(0, l, s) | 0) + o) * r;
    };
  }
};
Ml.ease = ae["quad.out"];
nn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
  return r0 += t + "," + t + "Params,";
});
var D_ = function(e, n) {
  this.id = mS++, e._gsap = this, this.target = e, this.harness = n, this.get = n ? n.get : d_, this.set = n ? n.getSetter : a0;
}, ua = /* @__PURE__ */ function() {
  function t(n) {
    this.vars = n, this._delay = +n.delay || 0, (this._repeat = n.repeat === 1 / 0 ? -2 : n.repeat || 0) && (this._rDelay = n.repeatDelay || 0, this._yoyo = !!n.yoyo || !!n.yoyoEase), this._ts = 1, Al(this, +n.duration, 1, 1), this.data = n.data, Le && (this._ctx = Le, Le.data.push(this)), aa || vn.wake();
  }
  var e = t.prototype;
  return e.delay = function(r) {
    return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay), this._delay = r, this) : this._delay;
  }, e.duration = function(r) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur;
  }, e.totalDuration = function(r) {
    return arguments.length ? (this._dirty = 0, Al(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, e.totalTime = function(r, i) {
    if (Il(), !arguments.length)
      return this._tTime;
    var o = this._dp;
    if (o && o.smoothChildTiming && this._ts) {
      for (Jc(this, r), !o._dp || o.parent || v_(o, this); o && o.parent; )
        o.parent._time !== o._start + (o._ts >= 0 ? o._tTime / o._ts : (o.totalDuration() - o._tTime) / -o._ts) && o.totalTime(o._tTime, !0), o = o.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && xr(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== r || !this._dur && !i || this._initted && Math.abs(this._zTime) === ke || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r), h_(this, r, i)), this;
  }, e.time = function(r, i) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + am(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), i) : this._time;
  }, e.totalProgress = function(r, i) {
    return arguments.length ? this.totalTime(this.totalDuration() * r, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
  }, e.progress = function(r, i) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + am(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
  }, e.iteration = function(r, i) {
    var o = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (r - 1) * o, i) : this._repeat ? Nl(this._tTime, o) + 1 : 1;
  }, e.timeScale = function(r) {
    if (!arguments.length)
      return this._rts === -ke ? 0 : this._rts;
    if (this._rts === r)
      return this;
    var i = this.parent && this._ts ? yc(this.parent._time, this) : this._tTime;
    return this._rts = +r || 0, this._ts = this._ps || r === -ke ? 0 : this._rts, this.totalTime(ba(-Math.abs(this._delay), this._tDur, i), !0), Zc(this), ES(this);
  }, e.paused = function(r) {
    return arguments.length ? (this._ps !== r && (this._ps = r, r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Il(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== ke && (this._tTime -= ke)))), this) : this._ps;
  }, e.startTime = function(r) {
    if (arguments.length) {
      this._start = r;
      var i = this.parent || this._dp;
      return i && (i._sort || !this.parent) && xr(i, this, r - this._delay), this;
    }
    return this._start;
  }, e.endTime = function(r) {
    return this._start + (tn(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, e.rawTime = function(r) {
    var i = this.parent || this._dp;
    return i ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? yc(i.rawTime(r), this) : this._tTime : this._tTime;
  }, e.revert = function(r) {
    r === void 0 && (r = wS);
    var i = Tt;
    return Tt = r, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(r), this.totalTime(-0.01, r.suppressEvents)), this.data !== "nested" && r.kill !== !1 && this.kill(), Tt = i, this;
  }, e.globalTime = function(r) {
    for (var i = this, o = arguments.length ? r : i.rawTime(); i; )
      o = i._start + o / (i._ts || 1), i = i._dp;
    return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 / 0 : this._sat.globalTime(r) : o;
  }, e.repeat = function(r) {
    return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r, um(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, e.repeatDelay = function(r) {
    if (arguments.length) {
      var i = this._time;
      return this._rDelay = r, um(this), i ? this.time(i) : this;
    }
    return this._rDelay;
  }, e.yoyo = function(r) {
    return arguments.length ? (this._yoyo = r, this) : this._yoyo;
  }, e.seek = function(r, i) {
    return this.totalTime(bn(this, r), tn(i));
  }, e.restart = function(r, i) {
    return this.play().totalTime(r ? -this._delay : 0, tn(i));
  }, e.play = function(r, i) {
    return r != null && this.seek(r, i), this.reversed(!1).paused(!1);
  }, e.reverse = function(r, i) {
    return r != null && this.seek(r || this.totalDuration(), i), this.reversed(!0).paused(!1);
  }, e.pause = function(r, i) {
    return r != null && this.seek(r, i), this.paused(!0);
  }, e.resume = function() {
    return this.paused(!1);
  }, e.reversed = function(r) {
    return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -ke : 0)), this) : this._rts < 0;
  }, e.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -ke, this;
  }, e.isActive = function() {
    var r = this.parent || this._dp, i = this._start, o;
    return !!(!r || this._ts && this._initted && r.isActive() && (o = r.rawTime(!0)) >= i && o < this.endTime(!0) - ke);
  }, e.eventCallback = function(r, i, o) {
    var l = this.vars;
    return arguments.length > 1 ? (i ? (l[r] = i, o && (l[r + "Params"] = o), r === "onUpdate" && (this._onUpdate = i)) : delete l[r], this) : l[r];
  }, e.then = function(r) {
    var i = this;
    return new Promise(function(o) {
      var l = Fe(r) ? r : g_, s = function() {
        var u = i.then;
        i.then = null, Fe(l) && (l = l(i)) && (l.then || l === i) && (i.then = u), o(l), i.then = u;
      };
      i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? s() : i._prom = s;
    });
  }, e.kill = function() {
    cs(this);
  }, t;
}();
Un(ua.prototype, {
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
  _zTime: -ke,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var qt = /* @__PURE__ */ function(t) {
  n_(e, t);
  function e(r, i) {
    var o;
    return r === void 0 && (r = {}), o = t.call(this, r) || this, o.labels = {}, o.smoothChildTiming = !!r.smoothChildTiming, o.autoRemoveChildren = !!r.autoRemoveChildren, o._sort = tn(r.sortChildren), Ae && xr(r.parent || Ae, Ir(o), i), r.reversed && o.reverse(), r.paused && o.paused(!0), r.scrollTrigger && y_(Ir(o), r.scrollTrigger), o;
  }
  var n = e.prototype;
  return n.to = function(i, o, l) {
    return Ps(0, arguments, this), this;
  }, n.from = function(i, o, l) {
    return Ps(1, arguments, this), this;
  }, n.fromTo = function(i, o, l, s) {
    return Ps(2, arguments, this), this;
  }, n.set = function(i, o, l) {
    return o.duration = 0, o.parent = this, bs(o).repeatDelay || (o.repeat = 0), o.immediateRender = !!o.immediateRender, new Qe(i, o, bn(this, l), 1), this;
  }, n.call = function(i, o, l) {
    return xr(this, Qe.delayedCall(0, i, o), l);
  }, n.staggerTo = function(i, o, l, s, a, u, c) {
    return l.duration = o, l.stagger = l.stagger || s, l.onComplete = u, l.onCompleteParams = c, l.parent = this, new Qe(i, l, bn(this, a)), this;
  }, n.staggerFrom = function(i, o, l, s, a, u, c) {
    return l.runBackwards = 1, bs(l).immediateRender = tn(l.immediateRender), this.staggerTo(i, o, l, s, a, u, c);
  }, n.staggerFromTo = function(i, o, l, s, a, u, c, f) {
    return s.startAt = l, bs(s).immediateRender = tn(s.immediateRender), this.staggerTo(i, o, s, a, u, c, f);
  }, n.render = function(i, o, l) {
    var s = this._time, a = this._dirty ? this.totalDuration() : this._tDur, u = this._dur, c = i <= 0 ? 0 : pt(i), f = this._zTime < 0 != i < 0 && (this._initted || !u), h, d, g, p, _, v, m, y, x, C, T, E;
    if (this !== Ae && c > a && i >= 0 && (c = a), c !== this._tTime || l || f) {
      if (s !== this._time && u && (c += this._time - s, i += this._time - s), h = c, x = this._start, y = this._ts, v = !y, f && (u || (s = this._zTime), (i || !o) && (this._zTime = i)), this._repeat) {
        if (T = this._yoyo, _ = u + this._rDelay, this._repeat < -1 && i < 0)
          return this.totalTime(_ * 100 + i, o, l);
        if (h = pt(c % _), c === a ? (p = this._repeat, h = u) : (p = ~~(c / _), p && p === c / _ && (h = u, p--), h > u && (h = u)), C = Nl(this._tTime, _), !s && this._tTime && C !== p && this._tTime - C * _ - this._dur <= 0 && (C = p), T && p & 1 && (h = u - h, E = 1), p !== C && !this._lock) {
          var b = T && C & 1, O = b === (T && p & 1);
          if (p < C && (b = !b), s = b ? 0 : c % u ? u : c, this._lock = 1, this.render(s || (E ? 0 : pt(p * _)), o, !u)._lock = 0, this._tTime = c, !o && this.parent && jn(this, "onRepeat"), this.vars.repeatRefresh && !E && (this.invalidate()._lock = 1), s && s !== this._time || v !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (u = this._dur, a = this._tDur, O && (this._lock = 2, s = b ? u : -1e-4, this.render(s, !0), this.vars.repeatRefresh && !E && this.invalidate()), this._lock = 0, !this._ts && !v)
            return this;
          A_(this, E);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (m = OS(this, pt(s), pt(h)), m && (c -= h - (h = m._start))), this._tTime = c, this._time = h, this._act = !y, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, s = 0), !s && h && !o && !p && (jn(this, "onStart"), this._tTime !== c))
        return this;
      if (h >= s && i >= 0)
        for (d = this._first; d; ) {
          if (g = d._next, (d._act || h >= d._start) && d._ts && m !== d) {
            if (d.parent !== this)
              return this.render(i, o, l);
            if (d.render(d._ts > 0 ? (h - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (h - d._start) * d._ts, o, l), h !== this._time || !this._ts && !v) {
              m = 0, g && (c += this._zTime = -ke);
              break;
            }
          }
          d = g;
        }
      else {
        d = this._last;
        for (var P = i < 0 ? i : h; d; ) {
          if (g = d._prev, (d._act || P <= d._end) && d._ts && m !== d) {
            if (d.parent !== this)
              return this.render(i, o, l);
            if (d.render(d._ts > 0 ? (P - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (P - d._start) * d._ts, o, l || Tt && (d._initted || d._startAt)), h !== this._time || !this._ts && !v) {
              m = 0, g && (c += this._zTime = P ? -ke : ke);
              break;
            }
          }
          d = g;
        }
      }
      if (m && !o && (this.pause(), m.render(h >= s ? 0 : -ke)._zTime = h >= s ? 1 : -1, this._ts))
        return this._start = x, Zc(this), this.render(i, o, l);
      this._onUpdate && !o && jn(this, "onUpdate", !0), (c === a && this._tTime >= this.totalDuration() || !c && s) && (x === this._start || Math.abs(y) !== Math.abs(this._ts)) && (this._lock || ((i || !u) && (c === a && this._ts > 0 || !c && this._ts < 0) && Ni(this, 1), !o && !(i < 0 && !s) && (c || s || !a) && (jn(this, c === a && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(c < a && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, n.add = function(i, o) {
    var l = this;
    if (Qr(o) || (o = bn(this, o, i)), !(i instanceof ua)) {
      if (bt(i))
        return i.forEach(function(s) {
          return l.add(s, o);
        }), this;
      if (at(i))
        return this.addLabel(i, o);
      if (Fe(i))
        i = Qe.delayedCall(0, i);
      else
        return this;
    }
    return this !== i ? xr(this, i, o) : this;
  }, n.getChildren = function(i, o, l, s) {
    i === void 0 && (i = !0), o === void 0 && (o = !0), l === void 0 && (l = !0), s === void 0 && (s = -zn);
    for (var a = [], u = this._first; u; )
      u._start >= s && (u instanceof Qe ? o && a.push(u) : (l && a.push(u), i && a.push.apply(a, u.getChildren(!0, o, l)))), u = u._next;
    return a;
  }, n.getById = function(i) {
    for (var o = this.getChildren(1, 1, 1), l = o.length; l--; )
      if (o[l].vars.id === i)
        return o[l];
  }, n.remove = function(i) {
    return at(i) ? this.removeLabel(i) : Fe(i) ? this.killTweensOf(i) : (Kc(this, i), i === this._recent && (this._recent = this._last), go(this));
  }, n.totalTime = function(i, o) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = pt(vn.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), t.prototype.totalTime.call(this, i, o), this._forcing = 0, this) : this._tTime;
  }, n.addLabel = function(i, o) {
    return this.labels[i] = bn(this, o), this;
  }, n.removeLabel = function(i) {
    return delete this.labels[i], this;
  }, n.addPause = function(i, o, l) {
    var s = Qe.delayedCall(0, o || la, l);
    return s.data = "isPause", this._hasPause = 1, xr(this, s, bn(this, i));
  }, n.removePause = function(i) {
    var o = this._first;
    for (i = bn(this, i); o; )
      o._start === i && o.data === "isPause" && Ni(o), o = o._next;
  }, n.killTweensOf = function(i, o, l) {
    for (var s = this.getTweensOf(i, l), a = s.length; a--; )
      ci !== s[a] && s[a].kill(i, o);
    return this;
  }, n.getTweensOf = function(i, o) {
    for (var l = [], s = $n(i), a = this._first, u = Qr(o), c; a; )
      a instanceof Qe ? kS(a._targets, s) && (u ? (!ci || a._initted && a._ts) && a.globalTime(0) <= o && a.globalTime(a.totalDuration()) > o : !o || a.isActive()) && l.push(a) : (c = a.getTweensOf(s, o)).length && l.push.apply(l, c), a = a._next;
    return l;
  }, n.tweenTo = function(i, o) {
    o = o || {};
    var l = this, s = bn(l, i), a = o, u = a.startAt, c = a.onStart, f = a.onStartParams, h = a.immediateRender, d, g = Qe.to(l, Un({
      ease: o.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: s,
      overwrite: "auto",
      duration: o.duration || Math.abs((s - (u && "time" in u ? u.time : l._time)) / l.timeScale()) || ke,
      onStart: function() {
        if (l.pause(), !d) {
          var _ = o.duration || Math.abs((s - (u && "time" in u ? u.time : l._time)) / l.timeScale());
          g._dur !== _ && Al(g, _, 0, 1).render(g._time, !0, !0), d = 1;
        }
        c && c.apply(g, f || []);
      }
    }, o));
    return h ? g.render(0) : g;
  }, n.tweenFromTo = function(i, o, l) {
    return this.tweenTo(o, Un({
      startAt: {
        time: bn(this, i)
      }
    }, l));
  }, n.recent = function() {
    return this._recent;
  }, n.nextLabel = function(i) {
    return i === void 0 && (i = this._time), cm(this, bn(this, i));
  }, n.previousLabel = function(i) {
    return i === void 0 && (i = this._time), cm(this, bn(this, i), 1);
  }, n.currentLabel = function(i) {
    return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + ke);
  }, n.shiftChildren = function(i, o, l) {
    l === void 0 && (l = 0);
    for (var s = this._first, a = this.labels, u; s; )
      s._start >= l && (s._start += i, s._end += i), s = s._next;
    if (o)
      for (u in a)
        a[u] >= l && (a[u] += i);
    return go(this);
  }, n.invalidate = function(i) {
    var o = this._first;
    for (this._lock = 0; o; )
      o.invalidate(i), o = o._next;
    return t.prototype.invalidate.call(this, i);
  }, n.clear = function(i) {
    i === void 0 && (i = !0);
    for (var o = this._first, l; o; )
      l = o._next, this.remove(o), o = l;
    return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), go(this);
  }, n.totalDuration = function(i) {
    var o = 0, l = this, s = l._last, a = zn, u, c, f;
    if (arguments.length)
      return l.timeScale((l._repeat < 0 ? l.duration() : l.totalDuration()) / (l.reversed() ? -i : i));
    if (l._dirty) {
      for (f = l.parent; s; )
        u = s._prev, s._dirty && s.totalDuration(), c = s._start, c > a && l._sort && s._ts && !l._lock ? (l._lock = 1, xr(l, s, c - s._delay, 1)._lock = 0) : a = c, c < 0 && s._ts && (o -= c, (!f && !l._dp || f && f.smoothChildTiming) && (l._start += c / l._ts, l._time -= c, l._tTime -= c), l.shiftChildren(-c, !1, -1 / 0), a = 0), s._end > o && s._ts && (o = s._end), s = u;
      Al(l, l === Ae && l._time > o ? l._time : o, 1, 1), l._dirty = 0;
    }
    return l._tDur;
  }, e.updateRoot = function(i) {
    if (Ae._ts && (h_(Ae, yc(i, Ae)), f_ = vn.frame), vn.frame >= lm) {
      lm += wn.autoSleep || 120;
      var o = Ae._first;
      if ((!o || !o._ts) && wn.autoSleep && vn._listeners.length < 2) {
        for (; o && !o._ts; )
          o = o._next;
        o || vn.sleep();
      }
    }
  }, e;
}(ua);
Un(qt.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var HS = function(e, n, r, i, o, l, s) {
  var a = new rn(this._pt, e, n, 0, 1, B_, null, o), u = 0, c = 0, f, h, d, g, p, _, v, m;
  for (a.b = r, a.e = i, r += "", i += "", (v = ~i.indexOf("random(")) && (i = sa(i)), l && (m = [r, i], l(m, e, n), r = m[0], i = m[1]), h = r.match(Gf) || []; f = Gf.exec(i); )
    g = f[0], p = i.substring(u, f.index), d ? d = (d + 1) % 5 : p.substr(-5) === "rgba(" && (d = 1), g !== h[c++] && (_ = parseFloat(h[c - 1]) || 0, a._pt = {
      _next: a._pt,
      p: p || c === 1 ? p : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: _,
      c: g.charAt(1) === "=" ? gl(_, g) - _ : parseFloat(g) - _,
      m: d && d < 4 ? Math.round : 0
    }, u = Gf.lastIndex);
  return a.c = u < i.length ? i.substring(u, i.length) : "", a.fp = s, (l_.test(i) || v) && (a.e = 0), this._pt = a, a;
}, o0 = function(e, n, r, i, o, l, s, a, u, c) {
  Fe(i) && (i = i(o || 0, e, l));
  var f = e[n], h = r !== "get" ? r : Fe(f) ? u ? e[n.indexOf("set") || !Fe(e["get" + n.substr(3)]) ? n : "get" + n.substr(3)](u) : e[n]() : f, d = Fe(f) ? u ? qS : L_ : s0, g;
  if (at(i) && (~i.indexOf("random(") && (i = sa(i)), i.charAt(1) === "=" && (g = gl(h, i) + (Et(h) || 0), (g || g === 0) && (i = g))), !c || h !== i || kh)
    return !isNaN(h * i) && i !== "" ? (g = new rn(this._pt, e, n, +h || 0, i - (h || 0), typeof f == "boolean" ? ZS : F_, 0, d), u && (g.fp = u), s && g.modifier(s, this, e), this._pt = g) : (!f && !(n in e) && t0(n, i), HS.call(this, e, n, h, i, d, a || wn.stringFilter, u));
}, YS = function(e, n, r, i, o) {
  if (Fe(e) && (e = Os(e, o, n, r, i)), !br(e) || e.style && e.nodeType || bt(e) || i_(e))
    return at(e) ? Os(e, o, n, r, i) : e;
  var l = {}, s;
  for (s in e)
    l[s] = Os(e[s], o, n, r, i);
  return l;
}, z_ = function(e, n, r, i, o, l) {
  var s, a, u, c;
  if (mn[e] && (s = new mn[e]()).init(o, s.rawVars ? n[e] : YS(n[e], i, o, l, r), r, i, l) !== !1 && (r._pt = a = new rn(r._pt, o, e, 0, 1, s.render, s, 0, s.priority), r !== ol))
    for (u = r._ptLookup[r._targets.indexOf(o)], c = s._props.length; c--; )
      u[s._props[c]] = a;
  return s;
}, ci, kh, l0 = function t(e, n, r) {
  var i = e.vars, o = i.ease, l = i.startAt, s = i.immediateRender, a = i.lazy, u = i.onUpdate, c = i.onUpdateParams, f = i.callbackScope, h = i.runBackwards, d = i.yoyoEase, g = i.keyframes, p = i.autoRevert, _ = e._dur, v = e._startAt, m = e._targets, y = e.parent, x = y && y.data === "nested" ? y.vars.targets : m, C = e._overwrite === "auto" && !Kp, T = e.timeline, E, b, O, P, j, D, G, I, $, W, L, M, z;
  if (T && (!g || !o) && (o = "none"), e._ease = mo(o, Ml.ease), e._yEase = d ? N_(mo(d === !0 ? o : d, Ml.ease)) : 0, d && e._yoyo && !e._repeat && (d = e._yEase, e._yEase = e._ease, e._ease = d), e._from = !T && !!i.runBackwards, !T || g && !i.stagger) {
    if (I = m[0] ? po(m[0]).harness : 0, M = I && i[I.prop], E = vc(i, n0), v && (v._zTime < 0 && v.progress(1), n < 0 && h && s && !p ? v.render(-1, !0) : v.revert(h && _ ? Nu : xS), v._lazy = 0), l) {
      if (Ni(e._startAt = Qe.set(m, Un({
        data: "isStart",
        overwrite: !1,
        parent: y,
        immediateRender: !0,
        lazy: !v && tn(a),
        startAt: null,
        delay: 0,
        onUpdate: u,
        onUpdateParams: c,
        callbackScope: f,
        stagger: 0
      }, l))), e._startAt._dp = 0, e._startAt._sat = e, n < 0 && (Tt || !s && !p) && e._startAt.revert(Nu), s && _ && n <= 0 && r <= 0) {
        n && (e._zTime = n);
        return;
      }
    } else if (h && _ && !v) {
      if (n && (s = !1), O = Un({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: s && !v && tn(a),
        immediateRender: s,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: y
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, E), M && (O[I.prop] = M), Ni(e._startAt = Qe.set(m, O)), e._startAt._dp = 0, e._startAt._sat = e, n < 0 && (Tt ? e._startAt.revert(Nu) : e._startAt.render(-1, !0)), e._zTime = n, !s)
        t(e._startAt, ke, ke);
      else if (!n)
        return;
    }
    for (e._pt = e._ptCache = 0, a = _ && tn(a) || a && !_, b = 0; b < m.length; b++) {
      if (j = m[b], G = j._gsap || i0(m)[b]._gsap, e._ptLookup[b] = W = {}, mh[G.id] && Ti.length && mc(), L = x === m ? b : x.indexOf(j), I && ($ = new I()).init(j, M || E, e, L, x) !== !1 && (e._pt = P = new rn(e._pt, j, $.name, 0, 1, $.render, $, 0, $.priority), $._props.forEach(function(k) {
        W[k] = P;
      }), $.priority && (D = 1)), !I || M)
        for (O in E)
          mn[O] && ($ = z_(O, E, e, L, j, x)) ? $.priority && (D = 1) : W[O] = P = o0.call(e, j, O, "get", E[O], L, x, 0, i.stringFilter);
      e._op && e._op[b] && e.kill(j, e._op[b]), C && e._pt && (ci = e, Ae.killTweensOf(j, W, e.globalTime(n)), z = !e.parent, ci = 0), e._pt && a && (mh[G.id] = 1);
    }
    D && V_(e), e._onInit && e._onInit(e);
  }
  e._onUpdate = u, e._initted = (!e._op || e._pt) && !z, g && n <= 0 && T.render(zn, !0, !0);
}, XS = function(e, n, r, i, o, l, s) {
  var a = (e._pt && e._ptCache || (e._ptCache = {}))[n], u, c, f, h;
  if (!a)
    for (a = e._ptCache[n] = [], f = e._ptLookup, h = e._targets.length; h--; ) {
      if (u = f[h][n], u && u.d && u.d._pt)
        for (u = u.d._pt; u && u.p !== n && u.fp !== n; )
          u = u._next;
      if (!u)
        return kh = 1, e.vars[n] = "+=0", l0(e, s), kh = 0, 1;
      a.push(u);
    }
  for (h = a.length; h--; )
    c = a[h], u = c._pt || c, u.s = (i || i === 0) && !o ? i : u.s + (i || 0) + l * u.c, u.c = r - u.s, c.e && (c.e = Ue(r) + Et(c.e)), c.b && (c.b = u.s + Et(c.b));
}, GS = function(e, n) {
  var r = e[0] ? po(e[0]).harness : 0, i = r && r.aliases, o, l, s, a;
  if (!i)
    return n;
  o = To({}, n);
  for (l in i)
    if (l in o)
      for (a = i[l].split(","), s = a.length; s--; )
        o[a[s]] = o[l];
  return o;
}, QS = function(e, n, r, i) {
  var o = n.ease || i || "power1.inOut", l, s;
  if (bt(n))
    s = r[e] || (r[e] = []), n.forEach(function(a, u) {
      return s.push({
        t: u / (n.length - 1) * 100,
        v: a,
        e: o
      });
    });
  else
    for (l in n)
      s = r[l] || (r[l] = []), l === "ease" || s.push({
        t: parseFloat(e),
        v: n[l],
        e: o
      });
}, Os = function(e, n, r, i, o) {
  return Fe(e) ? e.call(n, r, i, o) : at(e) && ~e.indexOf("random(") ? sa(e) : e;
}, $_ = r0 + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", j_ = {};
nn($_ + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
  return j_[t] = 1;
});
var Qe = /* @__PURE__ */ function(t) {
  n_(e, t);
  function e(r, i, o, l) {
    var s;
    typeof i == "number" && (o.duration = i, i = o, o = null), s = t.call(this, l ? i : bs(i)) || this;
    var a = s.vars, u = a.duration, c = a.delay, f = a.immediateRender, h = a.stagger, d = a.overwrite, g = a.keyframes, p = a.defaults, _ = a.scrollTrigger, v = a.yoyoEase, m = i.parent || Ae, y = (bt(r) || i_(r) ? Qr(r[0]) : "length" in i) ? [r] : $n(r), x, C, T, E, b, O, P, j;
    if (s._targets = y.length ? i0(y) : gc("GSAP target " + r + " not found. https://greensock.com", !wn.nullTargetWarn) || [], s._ptLookup = [], s._overwrite = d, g || h || Za(u) || Za(c)) {
      if (i = s.vars, x = s.timeline = new qt({
        data: "nested",
        defaults: p || {},
        targets: m && m.data === "nested" ? m.vars.targets : y
      }), x.kill(), x.parent = x._dp = Ir(s), x._start = 0, h || Za(u) || Za(c)) {
        if (E = y.length, P = h && k_(h), br(h))
          for (b in h)
            ~$_.indexOf(b) && (j || (j = {}), j[b] = h[b]);
        for (C = 0; C < E; C++)
          T = vc(i, j_), T.stagger = 0, v && (T.yoyoEase = v), j && To(T, j), O = y[C], T.duration = +Os(u, Ir(s), C, O, y), T.delay = (+Os(c, Ir(s), C, O, y) || 0) - s._delay, !h && E === 1 && T.delay && (s._delay = c = T.delay, s._start += c, T.delay = 0), x.to(O, T, P ? P(C, O, y) : 0), x._ease = ae.none;
        x.duration() ? u = c = 0 : s.timeline = 0;
      } else if (g) {
        bs(Un(x.vars.defaults, {
          ease: "none"
        })), x._ease = mo(g.ease || i.ease || "none");
        var D = 0, G, I, $;
        if (bt(g))
          g.forEach(function(W) {
            return x.to(y, W, ">");
          }), x.duration();
        else {
          T = {};
          for (b in g)
            b === "ease" || b === "easeEach" || QS(b, g[b], T, g.easeEach);
          for (b in T)
            for (G = T[b].sort(function(W, L) {
              return W.t - L.t;
            }), D = 0, C = 0; C < G.length; C++)
              I = G[C], $ = {
                ease: I.e,
                duration: (I.t - (C ? G[C - 1].t : 0)) / 100 * u
              }, $[b] = I.v, x.to(y, $, D), D += $.duration;
          x.duration() < u && x.to({}, {
            duration: u - x.duration()
          });
        }
      }
      u || s.duration(u = x.duration());
    } else
      s.timeline = 0;
    return d === !0 && !Kp && (ci = Ir(s), Ae.killTweensOf(y), ci = 0), xr(m, Ir(s), o), i.reversed && s.reverse(), i.paused && s.paused(!0), (f || !u && !g && s._start === pt(m._time) && tn(f) && TS(Ir(s)) && m.data !== "nested") && (s._tTime = -ke, s.render(Math.max(0, -c) || 0)), _ && y_(Ir(s), _), s;
  }
  var n = e.prototype;
  return n.render = function(i, o, l) {
    var s = this._time, a = this._tDur, u = this._dur, c = i < 0, f = i > a - ke && !c ? a : i < ke ? 0 : i, h, d, g, p, _, v, m, y, x;
    if (!u)
      PS(this, i, o, l);
    else if (f !== this._tTime || !i || l || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== c) {
      if (h = f, y = this.timeline, this._repeat) {
        if (p = u + this._rDelay, this._repeat < -1 && c)
          return this.totalTime(p * 100 + i, o, l);
        if (h = pt(f % p), f === a ? (g = this._repeat, h = u) : (g = ~~(f / p), g && g === f / p && (h = u, g--), h > u && (h = u)), v = this._yoyo && g & 1, v && (x = this._yEase, h = u - h), _ = Nl(this._tTime, p), h === s && !l && this._initted)
          return this._tTime = f, this;
        g !== _ && (y && this._yEase && A_(y, v), this.vars.repeatRefresh && !v && !this._lock && (this._lock = l = 1, this.render(pt(p * g), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (__(this, c ? i : h, l, o, f))
          return this._tTime = 0, this;
        if (s !== this._time)
          return this;
        if (u !== this._dur)
          return this.render(i, o, l);
      }
      if (this._tTime = f, this._time = h, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = m = (x || this._ease)(h / u), this._from && (this.ratio = m = 1 - m), h && !s && !o && !g && (jn(this, "onStart"), this._tTime !== f))
        return this;
      for (d = this._pt; d; )
        d.r(m, d.d), d = d._next;
      y && y.render(i < 0 ? i : !h && v ? -ke : y._dur * y._ease(h / this._dur), o, l) || this._startAt && (this._zTime = i), this._onUpdate && !o && (c && vh(this, i, o, l), jn(this, "onUpdate")), this._repeat && g !== _ && this.vars.onRepeat && !o && this.parent && jn(this, "onRepeat"), (f === this._tDur || !f) && this._tTime === f && (c && !this._onUpdate && vh(this, i, !0, !0), (i || !u) && (f === this._tDur && this._ts > 0 || !f && this._ts < 0) && Ni(this, 1), !o && !(c && !s) && (f || s || v) && (jn(this, f === a ? "onComplete" : "onReverseComplete", !0), this._prom && !(f < a && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, n.targets = function() {
    return this._targets;
  }, n.invalidate = function(i) {
    return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), t.prototype.invalidate.call(this, i);
  }, n.resetTo = function(i, o, l, s) {
    aa || vn.wake(), this._ts || this.play();
    var a = Math.min(this._dur, (this._dp._time - this._start) * this._ts), u;
    return this._initted || l0(this, a), u = this._ease(a / this._dur), XS(this, i, o, l, s, u, a) ? this.resetTo(i, o, l, s) : (Jc(this, 0), this.parent || m_(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, n.kill = function(i, o) {
    if (o === void 0 && (o = "all"), !i && (!o || o === "all"))
      return this._lazy = this._pt = 0, this.parent ? cs(this) : this;
    if (this.timeline) {
      var l = this.timeline.totalDuration();
      return this.timeline.killTweensOf(i, o, ci && ci.vars.overwrite !== !0)._first || cs(this), this.parent && l !== this.timeline.totalDuration() && Al(this, this._dur * this.timeline._tDur / l, 0, 1), this;
    }
    var s = this._targets, a = i ? $n(i) : s, u = this._ptLookup, c = this._pt, f, h, d, g, p, _, v;
    if ((!o || o === "all") && CS(s, a))
      return o === "all" && (this._pt = 0), cs(this);
    for (f = this._op = this._op || [], o !== "all" && (at(o) && (p = {}, nn(o, function(m) {
      return p[m] = 1;
    }), o = p), o = GS(s, o)), v = s.length; v--; )
      if (~a.indexOf(s[v])) {
        h = u[v], o === "all" ? (f[v] = o, g = h, d = {}) : (d = f[v] = f[v] || {}, g = o);
        for (p in g)
          _ = h && h[p], _ && ((!("kill" in _.d) || _.d.kill(p) === !0) && Kc(this, _, "_pt"), delete h[p]), d !== "all" && (d[p] = 1);
      }
    return this._initted && !this._pt && c && cs(this), this;
  }, e.to = function(i, o) {
    return new e(i, o, arguments[2]);
  }, e.from = function(i, o) {
    return Ps(1, arguments);
  }, e.delayedCall = function(i, o, l, s) {
    return new e(o, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: i,
      onComplete: o,
      onReverseComplete: o,
      onCompleteParams: l,
      onReverseCompleteParams: l,
      callbackScope: s
    });
  }, e.fromTo = function(i, o, l) {
    return Ps(2, arguments);
  }, e.set = function(i, o) {
    return o.duration = 0, o.repeatDelay || (o.repeat = 0), new e(i, o);
  }, e.killTweensOf = function(i, o, l) {
    return Ae.killTweensOf(i, o, l);
  }, e;
}(ua);
Un(Qe.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
nn("staggerTo,staggerFrom,staggerFromTo", function(t) {
  Qe[t] = function() {
    var e = new qt(), n = _h.call(arguments, 0);
    return n.splice(t === "staggerFromTo" ? 5 : 4, 0, 0), e[t].apply(e, n);
  };
});
var s0 = function(e, n, r) {
  return e[n] = r;
}, L_ = function(e, n, r) {
  return e[n](r);
}, qS = function(e, n, r, i) {
  return e[n](i.fp, r);
}, KS = function(e, n, r) {
  return e.setAttribute(n, r);
}, a0 = function(e, n) {
  return Fe(e[n]) ? L_ : Zp(e[n]) && e.setAttribute ? KS : s0;
}, F_ = function(e, n) {
  return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e6) / 1e6, n);
}, ZS = function(e, n) {
  return n.set(n.t, n.p, !!(n.s + n.c * e), n);
}, B_ = function(e, n) {
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
}, u0 = function(e, n) {
  for (var r = n._pt; r; )
    r.r(e, r.d), r = r._next;
}, JS = function(e, n, r, i) {
  for (var o = this._pt, l; o; )
    l = o._next, o.p === i && o.modifier(e, n, r), o = l;
}, eC = function(e) {
  for (var n = this._pt, r, i; n; )
    i = n._next, n.p === e && !n.op || n.op === e ? Kc(this, n, "_pt") : n.dep || (r = 1), n = i;
  return !r;
}, tC = function(e, n, r, i) {
  i.mSet(e, n, i.m.call(i.tween, r, i.mt), i);
}, V_ = function(e) {
  for (var n = e._pt, r, i, o, l; n; ) {
    for (r = n._next, i = o; i && i.pr > n.pr; )
      i = i._next;
    (n._prev = i ? i._prev : l) ? n._prev._next = n : o = n, (n._next = i) ? i._prev = n : l = n, n = r;
  }
  e._pt = o;
}, rn = /* @__PURE__ */ function() {
  function t(n, r, i, o, l, s, a, u, c) {
    this.t = r, this.s = o, this.c = l, this.p = i, this.r = s || F_, this.d = a || this, this.set = u || s0, this.pr = c || 0, this._next = n, n && (n._prev = this);
  }
  var e = t.prototype;
  return e.modifier = function(r, i, o) {
    this.mSet = this.mSet || this.set, this.set = tC, this.m = r, this.mt = o, this.tween = i;
  }, t;
}();
nn(r0 + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
  return n0[t] = 1;
});
Sn.TweenMax = Sn.TweenLite = Qe;
Sn.TimelineLite = Sn.TimelineMax = qt;
Ae = new qt({
  sortChildren: !1,
  defaults: Ml,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
wn.stringFilter = M_;
var vo = [], Iu = {}, nC = [], dm = 0, rC = 0, Jf = function(e) {
  return (Iu[e] || nC).map(function(n) {
    return n();
  });
}, Sh = function() {
  var e = Date.now(), n = [];
  e - dm > 2 && (Jf("matchMediaInit"), vo.forEach(function(r) {
    var i = r.queries, o = r.conditions, l, s, a, u;
    for (s in i)
      l = Pn.matchMedia(i[s]).matches, l && (a = 1), l !== o[s] && (o[s] = l, u = 1);
    u && (r.revert(), a && n.push(r));
  }), Jf("matchMediaRevert"), n.forEach(function(r) {
    return r.onMatch(r);
  }), dm = e, Jf("matchMedia"));
}, U_ = /* @__PURE__ */ function() {
  function t(n, r) {
    this.selector = r && xh(r), this.data = [], this._r = [], this.isReverted = !1, this.id = rC++, n && this.add(n);
  }
  var e = t.prototype;
  return e.add = function(r, i, o) {
    Fe(r) && (o = i, i = r, r = Fe);
    var l = this, s = function() {
      var u = Le, c = l.selector, f;
      return u && u !== l && u.data.push(l), o && (l.selector = xh(o)), Le = l, f = i.apply(l, arguments), Fe(f) && l._r.push(f), Le = u, l.selector = c, l.isReverted = !1, f;
    };
    return l.last = s, r === Fe ? s(l) : r ? l[r] = s : s;
  }, e.ignore = function(r) {
    var i = Le;
    Le = null, r(this), Le = i;
  }, e.getTweens = function() {
    var r = [];
    return this.data.forEach(function(i) {
      return i instanceof t ? r.push.apply(r, i.getTweens()) : i instanceof Qe && !(i.parent && i.parent.data === "nested") && r.push(i);
    }), r;
  }, e.clear = function() {
    this._r.length = this.data.length = 0;
  }, e.kill = function(r, i) {
    var o = this;
    if (r) {
      var l = this.getTweens();
      this.data.forEach(function(a) {
        a.data === "isFlip" && (a.revert(), a.getChildren(!0, !0, !1).forEach(function(u) {
          return l.splice(l.indexOf(u), 1);
        }));
      }), l.map(function(a) {
        return {
          g: a.globalTime(0),
          t: a
        };
      }).sort(function(a, u) {
        return u.g - a.g || -1 / 0;
      }).forEach(function(a) {
        return a.t.revert(r);
      }), this.data.forEach(function(a) {
        return !(a instanceof Qe) && a.revert && a.revert(r);
      }), this._r.forEach(function(a) {
        return a(r, o);
      }), this.isReverted = !0;
    } else
      this.data.forEach(function(a) {
        return a.kill && a.kill();
      });
    if (this.clear(), i)
      for (var s = vo.length; s--; )
        vo[s].id === this.id && vo.splice(s, 1);
  }, e.revert = function(r) {
    this.kill(r || {});
  }, t;
}(), iC = /* @__PURE__ */ function() {
  function t(n) {
    this.contexts = [], this.scope = n;
  }
  var e = t.prototype;
  return e.add = function(r, i, o) {
    br(r) || (r = {
      matches: r
    });
    var l = new U_(0, o || this.scope), s = l.conditions = {}, a, u, c;
    Le && !l.selector && (l.selector = Le.selector), this.contexts.push(l), i = l.add("onMatch", i), l.queries = r;
    for (u in r)
      u === "all" ? c = 1 : (a = Pn.matchMedia(r[u]), a && (vo.indexOf(l) < 0 && vo.push(l), (s[u] = a.matches) && (c = 1), a.addListener ? a.addListener(Sh) : a.addEventListener("change", Sh)));
    return c && i(l), this;
  }, e.revert = function(r) {
    this.kill(r || {});
  }, e.kill = function(r) {
    this.contexts.forEach(function(i) {
      return i.kill(r, !0);
    });
  }, t;
}(), _c = {
  registerPlugin: function() {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r];
    n.forEach(function(i) {
      return P_(i);
    });
  },
  timeline: function(e) {
    return new qt(e);
  },
  getTweensOf: function(e, n) {
    return Ae.getTweensOf(e, n);
  },
  getProperty: function(e, n, r, i) {
    at(e) && (e = $n(e)[0]);
    var o = po(e || {}).get, l = r ? g_ : p_;
    return r === "native" && (r = ""), e && (n ? l((mn[n] && mn[n].get || o)(e, n, r, i)) : function(s, a, u) {
      return l((mn[s] && mn[s].get || o)(e, s, a, u));
    });
  },
  quickSetter: function(e, n, r) {
    if (e = $n(e), e.length > 1) {
      var i = e.map(function(c) {
        return ln.quickSetter(c, n, r);
      }), o = i.length;
      return function(c) {
        for (var f = o; f--; )
          i[f](c);
      };
    }
    e = e[0] || {};
    var l = mn[n], s = po(e), a = s.harness && (s.harness.aliases || {})[n] || n, u = l ? function(c) {
      var f = new l();
      ol._pt = 0, f.init(e, r ? c + r : c, ol, 0, [e]), f.render(1, f), ol._pt && u0(1, ol);
    } : s.set(e, a);
    return l ? u : function(c) {
      return u(e, a, r ? c + r : c, s, 1);
    };
  },
  quickTo: function(e, n, r) {
    var i, o = ln.to(e, To((i = {}, i[n] = "+=0.1", i.paused = !0, i), r || {})), l = function(a, u, c) {
      return o.resetTo(n, a, u, c);
    };
    return l.tween = o, l;
  },
  isTweening: function(e) {
    return Ae.getTweensOf(e, !0).length > 0;
  },
  defaults: function(e) {
    return e && e.ease && (e.ease = mo(e.ease, Ml.ease)), sm(Ml, e || {});
  },
  config: function(e) {
    return sm(wn, e || {});
  },
  registerEffect: function(e) {
    var n = e.name, r = e.effect, i = e.plugins, o = e.defaults, l = e.extendTimeline;
    (i || "").split(",").forEach(function(s) {
      return s && !mn[s] && !Sn[s] && gc(n + " effect requires " + s + " plugin.");
    }), Qf[n] = function(s, a, u) {
      return r($n(s), Un(a || {}, o), u);
    }, l && (qt.prototype[n] = function(s, a, u) {
      return this.add(Qf[n](s, br(a) ? a : (u = a) && {}, this), u);
    });
  },
  registerEase: function(e, n) {
    ae[e] = mo(n);
  },
  parseEase: function(e, n) {
    return arguments.length ? mo(e, n) : ae;
  },
  getById: function(e) {
    return Ae.getById(e);
  },
  exportRoot: function(e, n) {
    e === void 0 && (e = {});
    var r = new qt(e), i, o;
    for (r.smoothChildTiming = tn(e.smoothChildTiming), Ae.remove(r), r._dp = 0, r._time = r._tTime = Ae._time, i = Ae._first; i; )
      o = i._next, (n || !(!i._dur && i instanceof Qe && i.vars.onComplete === i._targets[0])) && xr(r, i, i._start - i._delay), i = o;
    return xr(Ae, r, 0), r;
  },
  context: function(e, n) {
    return e ? new U_(e, n) : Le;
  },
  matchMedia: function(e) {
    return new iC(e);
  },
  matchMediaRefresh: function() {
    return vo.forEach(function(e) {
      var n = e.conditions, r, i;
      for (i in n)
        n[i] && (n[i] = !1, r = 1);
      r && e.revert();
    }) || Sh();
  },
  addEventListener: function(e, n) {
    var r = Iu[e] || (Iu[e] = []);
    ~r.indexOf(n) || r.push(n);
  },
  removeEventListener: function(e, n) {
    var r = Iu[e], i = r && r.indexOf(n);
    i >= 0 && r.splice(i, 1);
  },
  utils: {
    wrap: zS,
    wrapYoyo: $S,
    distribute: k_,
    random: C_,
    snap: S_,
    normalize: DS,
    getUnit: Et,
    clamp: MS,
    splitColor: O_,
    toArray: $n,
    selector: xh,
    mapRange: T_,
    pipe: AS,
    unitize: IS,
    interpolate: jS,
    shuffle: w_
  },
  install: u_,
  effects: Qf,
  ticker: vn,
  updateRoot: qt.updateRoot,
  plugins: mn,
  globalTimeline: Ae,
  core: {
    PropTween: rn,
    globals: c_,
    Tween: Qe,
    Timeline: qt,
    Animation: ua,
    getCache: po,
    _removeLinkedListItem: Kc,
    reverting: function() {
      return Tt;
    },
    context: function(e) {
      return e && Le && (Le.data.push(e), e._ctx = Le), Le;
    },
    suppressOverwrites: function(e) {
      return Kp = e;
    }
  }
};
nn("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
  return _c[t] = Qe[t];
});
vn.add(qt.updateRoot);
ol = _c.to({}, {
  duration: 0
});
var oC = function(e, n) {
  for (var r = e._pt; r && r.p !== n && r.op !== n && r.fp !== n; )
    r = r._next;
  return r;
}, lC = function(e, n) {
  var r = e._targets, i, o, l;
  for (i in n)
    for (o = r.length; o--; )
      l = e._ptLookup[o][i], l && (l = l.d) && (l._pt && (l = oC(l, i)), l && l.modifier && l.modifier(n[i], e, r[o], i));
}, ed = function(e, n) {
  return {
    name: e,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(i, o, l) {
      l._onInit = function(s) {
        var a, u;
        if (at(o) && (a = {}, nn(o, function(c) {
          return a[c] = 1;
        }), o = a), n) {
          a = {};
          for (u in o)
            a[u] = n(o[u]);
          o = a;
        }
        lC(s, o);
      };
    }
  };
}, ln = _c.registerPlugin({
  name: "attr",
  init: function(e, n, r, i, o) {
    var l, s, a;
    this.tween = r;
    for (l in n)
      a = e.getAttribute(l) || "", s = this.add(e, "setAttribute", (a || 0) + "", n[l], i, o, 0, 0, l), s.op = l, s.b = a, this._props.push(l);
  },
  render: function(e, n) {
    for (var r = n._pt; r; )
      Tt ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), r = r._next;
  }
}, {
  name: "endArray",
  init: function(e, n) {
    for (var r = n.length; r--; )
      this.add(e, r, e[r] || 0, n[r], 0, 0, 0, 0, 0, 1);
  }
}, ed("roundProps", wh), ed("modifiers"), ed("snap", S_)) || _c;
Qe.version = qt.version = ln.version = "3.12.2";
a_ = 1;
Jp() && Il();
ae.Power0;
ae.Power1;
ae.Power2;
ae.Power3;
ae.Power4;
ae.Linear;
ae.Quad;
ae.Cubic;
ae.Quart;
ae.Quint;
ae.Strong;
ae.Elastic;
ae.Back;
ae.SteppedEase;
ae.Bounce;
ae.Sine;
ae.Expo;
ae.Circ;
/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var hm, fi, ml, c0, ao, pm, f0, sC = function() {
  return typeof window < "u";
}, qr = {}, to = 180 / Math.PI, vl = Math.PI / 180, Fo = Math.atan2, gm = 1e8, d0 = /([A-Z])/g, aC = /(left|right|width|margin|padding|x)/i, uC = /[\s,\(]\S/, kr = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, Ch = function(e, n) {
  return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n);
}, cC = function(e, n) {
  return n.set(n.t, n.p, e === 1 ? n.e : Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n);
}, fC = function(e, n) {
  return n.set(n.t, n.p, e ? Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u : n.b, n);
}, dC = function(e, n) {
  var r = n.s + n.c * e;
  n.set(n.t, n.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + n.u, n);
}, W_ = function(e, n) {
  return n.set(n.t, n.p, e ? n.e : n.b, n);
}, H_ = function(e, n) {
  return n.set(n.t, n.p, e !== 1 ? n.b : n.e, n);
}, hC = function(e, n, r) {
  return e.style[n] = r;
}, pC = function(e, n, r) {
  return e.style.setProperty(n, r);
}, gC = function(e, n, r) {
  return e._gsap[n] = r;
}, mC = function(e, n, r) {
  return e._gsap.scaleX = e._gsap.scaleY = r;
}, vC = function(e, n, r, i, o) {
  var l = e._gsap;
  l.scaleX = l.scaleY = r, l.renderTransform(o, l);
}, yC = function(e, n, r, i, o) {
  var l = e._gsap;
  l[n] = r, l.renderTransform(o, l);
}, Ie = "transform", sr = Ie + "Origin", _C = function t(e, n) {
  var r = this, i = this.target, o = i.style;
  if (e in qr && o) {
    if (this.tfm = this.tfm || {}, e !== "transform")
      e = kr[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(l) {
        return r.tfm[l] = $r(i, l);
      }) : this.tfm[e] = i._gsap.x ? i._gsap[e] : $r(i, e);
    else
      return kr.transform.split(",").forEach(function(l) {
        return t.call(r, l, n);
      });
    if (this.props.indexOf(Ie) >= 0)
      return;
    i._gsap.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(sr, n, "")), e = Ie;
  }
  (o || n) && this.props.push(e, n, o[e]);
}, Y_ = function(e) {
  e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
}, xC = function() {
  var e = this.props, n = this.target, r = n.style, i = n._gsap, o, l;
  for (o = 0; o < e.length; o += 3)
    e[o + 1] ? n[e[o]] = e[o + 2] : e[o + 2] ? r[e[o]] = e[o + 2] : r.removeProperty(e[o].substr(0, 2) === "--" ? e[o] : e[o].replace(d0, "-$1").toLowerCase());
  if (this.tfm) {
    for (l in this.tfm)
      i[l] = this.tfm[l];
    i.svg && (i.renderTransform(), n.setAttribute("data-svg-origin", this.svgo || "")), o = f0(), (!o || !o.isStart) && !r[Ie] && (Y_(r), i.uncache = 1);
  }
}, X_ = function(e, n) {
  var r = {
    target: e,
    props: [],
    revert: xC,
    save: _C
  };
  return e._gsap || ln.core.getCache(e), n && n.split(",").forEach(function(i) {
    return r.save(i);
  }), r;
}, G_, Eh = function(e, n) {
  var r = fi.createElementNS ? fi.createElementNS((n || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : fi.createElement(e);
  return r.style ? r : fi.createElement(e);
}, Er = function t(e, n, r) {
  var i = getComputedStyle(e);
  return i[n] || i.getPropertyValue(n.replace(d0, "-$1").toLowerCase()) || i.getPropertyValue(n) || !r && t(e, Dl(n) || n, 1) || "";
}, mm = "O,Moz,ms,Ms,Webkit".split(","), Dl = function(e, n, r) {
  var i = n || ao, o = i.style, l = 5;
  if (e in o && !r)
    return e;
  for (e = e.charAt(0).toUpperCase() + e.substr(1); l-- && !(mm[l] + e in o); )
    ;
  return l < 0 ? null : (l === 3 ? "ms" : l >= 0 ? mm[l] : "") + e;
}, Th = function() {
  sC() && window.document && (hm = window, fi = hm.document, ml = fi.documentElement, ao = Eh("div") || {
    style: {}
  }, Eh("div"), Ie = Dl(Ie), sr = Ie + "Origin", ao.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", G_ = !!Dl("perspective"), f0 = ln.core.reverting, c0 = 1);
}, td = function t(e) {
  var n = Eh("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = this.parentNode, i = this.nextSibling, o = this.style.cssText, l;
  if (ml.appendChild(n), n.appendChild(this), this.style.display = "block", e)
    try {
      l = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t;
    } catch {
    }
  else
    this._gsapBBox && (l = this._gsapBBox());
  return r && (i ? r.insertBefore(this, i) : r.appendChild(this)), ml.removeChild(n), this.style.cssText = o, l;
}, vm = function(e, n) {
  for (var r = n.length; r--; )
    if (e.hasAttribute(n[r]))
      return e.getAttribute(n[r]);
}, Q_ = function(e) {
  var n;
  try {
    n = e.getBBox();
  } catch {
    n = td.call(e, !0);
  }
  return n && (n.width || n.height) || e.getBBox === td || (n = td.call(e, !0)), n && !n.width && !n.x && !n.y ? {
    x: +vm(e, ["x", "cx", "x1"]) || 0,
    y: +vm(e, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : n;
}, q_ = function(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Q_(e));
}, ca = function(e, n) {
  if (n) {
    var r = e.style;
    n in qr && n !== sr && (n = Ie), r.removeProperty ? ((n.substr(0, 2) === "ms" || n.substr(0, 6) === "webkit") && (n = "-" + n), r.removeProperty(n.replace(d0, "-$1").toLowerCase())) : r.removeAttribute(n);
  }
}, di = function(e, n, r, i, o, l) {
  var s = new rn(e._pt, n, r, 0, 1, l ? H_ : W_);
  return e._pt = s, s.b = i, s.e = o, e._props.push(r), s;
}, ym = {
  deg: 1,
  rad: 1,
  turn: 1
}, wC = {
  grid: 1,
  flex: 1
}, Ai = function t(e, n, r, i) {
  var o = parseFloat(r) || 0, l = (r + "").trim().substr((o + "").length) || "px", s = ao.style, a = aC.test(n), u = e.tagName.toLowerCase() === "svg", c = (u ? "client" : "offset") + (a ? "Width" : "Height"), f = 100, h = i === "px", d = i === "%", g, p, _, v;
  return i === l || !o || ym[i] || ym[l] ? o : (l !== "px" && !h && (o = t(e, n, r, "px")), v = e.getCTM && q_(e), (d || l === "%") && (qr[n] || ~n.indexOf("adius")) ? (g = v ? e.getBBox()[a ? "width" : "height"] : e[c], Ue(d ? o / g * f : o / 100 * g)) : (s[a ? "width" : "height"] = f + (h ? l : i), p = ~n.indexOf("adius") || i === "em" && e.appendChild && !u ? e : e.parentNode, v && (p = (e.ownerSVGElement || {}).parentNode), (!p || p === fi || !p.appendChild) && (p = fi.body), _ = p._gsap, _ && d && _.width && a && _.time === vn.time && !_.uncache ? Ue(o / _.width * f) : ((d || l === "%") && !wC[Er(p, "display")] && (s.position = Er(e, "position")), p === e && (s.position = "static"), p.appendChild(ao), g = ao[c], p.removeChild(ao), s.position = "absolute", a && d && (_ = po(p), _.time = vn.time, _.width = p[c]), Ue(h ? g * o / f : g && o ? f / g * o : 0))));
}, $r = function(e, n, r, i) {
  var o;
  return c0 || Th(), n in kr && n !== "transform" && (n = kr[n], ~n.indexOf(",") && (n = n.split(",")[0])), qr[n] && n !== "transform" ? (o = da(e, i), o = n !== "transformOrigin" ? o[n] : o.svg ? o.origin : wc(Er(e, sr)) + " " + o.zOrigin + "px") : (o = e.style[n], (!o || o === "auto" || i || ~(o + "").indexOf("calc(")) && (o = xc[n] && xc[n](e, n, r) || Er(e, n) || d_(e, n) || (n === "opacity" ? 1 : 0))), r && !~(o + "").trim().indexOf(" ") ? Ai(e, n, o, r) + r : o;
}, kC = function(e, n, r, i) {
  if (!r || r === "none") {
    var o = Dl(n, e, 1), l = o && Er(e, o, 1);
    l && l !== r ? (n = o, r = l) : n === "borderColor" && (r = Er(e, "borderTopColor"));
  }
  var s = new rn(this._pt, e.style, n, 0, 1, B_), a = 0, u = 0, c, f, h, d, g, p, _, v, m, y, x, C;
  if (s.b = r, s.e = i, r += "", i += "", i === "auto" && (e.style[n] = i, i = Er(e, n) || i, e.style[n] = r), c = [r, i], M_(c), r = c[0], i = c[1], h = r.match(il) || [], C = i.match(il) || [], C.length) {
    for (; f = il.exec(i); )
      _ = f[0], m = i.substring(a, f.index), g ? g = (g + 1) % 5 : (m.substr(-5) === "rgba(" || m.substr(-5) === "hsla(") && (g = 1), _ !== (p = h[u++] || "") && (d = parseFloat(p) || 0, x = p.substr((d + "").length), _.charAt(1) === "=" && (_ = gl(d, _) + x), v = parseFloat(_), y = _.substr((v + "").length), a = il.lastIndex - y.length, y || (y = y || wn.units[n] || x, a === i.length && (i += y, s.e += y)), x !== y && (d = Ai(e, n, p, y) || 0), s._pt = {
        _next: s._pt,
        p: m || u === 1 ? m : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: d,
        c: v - d,
        m: g && g < 4 || n === "zIndex" ? Math.round : 0
      });
    s.c = a < i.length ? i.substring(a, i.length) : "";
  } else
    s.r = n === "display" && i === "none" ? H_ : W_;
  return l_.test(i) && (s.e = 0), this._pt = s, s;
}, _m = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, SC = function(e) {
  var n = e.split(" "), r = n[0], i = n[1] || "50%";
  return (r === "top" || r === "bottom" || i === "left" || i === "right") && (e = r, r = i, i = e), n[0] = _m[r] || r, n[1] = _m[i] || i, n.join(" ");
}, CC = function(e, n) {
  if (n.tween && n.tween._time === n.tween._dur) {
    var r = n.t, i = r.style, o = n.u, l = r._gsap, s, a, u;
    if (o === "all" || o === !0)
      i.cssText = "", a = 1;
    else
      for (o = o.split(","), u = o.length; --u > -1; )
        s = o[u], qr[s] && (a = 1, s = s === "transformOrigin" ? sr : Ie), ca(r, s);
    a && (ca(r, Ie), l && (l.svg && r.removeAttribute("transform"), da(r, 1), l.uncache = 1, Y_(i)));
  }
}, xc = {
  clearProps: function(e, n, r, i, o) {
    if (o.data !== "isFromStart") {
      var l = e._pt = new rn(e._pt, n, r, 0, 0, CC);
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
}, fa = [1, 0, 0, 1, 0, 0], K_ = {}, Z_ = function(e) {
  return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
}, xm = function(e) {
  var n = Er(e, Ie);
  return Z_(n) ? fa : n.substr(7).match(o_).map(Ue);
}, h0 = function(e, n) {
  var r = e._gsap || po(e), i = e.style, o = xm(e), l, s, a, u;
  return r.svg && e.getAttribute("transform") ? (a = e.transform.baseVal.consolidate().matrix, o = [a.a, a.b, a.c, a.d, a.e, a.f], o.join(",") === "1,0,0,1,0,0" ? fa : o) : (o === fa && !e.offsetParent && e !== ml && !r.svg && (a = i.display, i.display = "block", l = e.parentNode, (!l || !e.offsetParent) && (u = 1, s = e.nextElementSibling, ml.appendChild(e)), o = xm(e), a ? i.display = a : ca(e, "display"), u && (s ? l.insertBefore(e, s) : l ? l.appendChild(e) : ml.removeChild(e))), n && o.length > 6 ? [o[0], o[1], o[4], o[5], o[12], o[13]] : o);
}, bh = function(e, n, r, i, o, l) {
  var s = e._gsap, a = o || h0(e, !0), u = s.xOrigin || 0, c = s.yOrigin || 0, f = s.xOffset || 0, h = s.yOffset || 0, d = a[0], g = a[1], p = a[2], _ = a[3], v = a[4], m = a[5], y = n.split(" "), x = parseFloat(y[0]) || 0, C = parseFloat(y[1]) || 0, T, E, b, O;
  r ? a !== fa && (E = d * _ - g * p) && (b = x * (_ / E) + C * (-p / E) + (p * m - _ * v) / E, O = x * (-g / E) + C * (d / E) - (d * m - g * v) / E, x = b, C = O) : (T = Q_(e), x = T.x + (~y[0].indexOf("%") ? x / 100 * T.width : x), C = T.y + (~(y[1] || y[0]).indexOf("%") ? C / 100 * T.height : C)), i || i !== !1 && s.smooth ? (v = x - u, m = C - c, s.xOffset = f + (v * d + m * p) - v, s.yOffset = h + (v * g + m * _) - m) : s.xOffset = s.yOffset = 0, s.xOrigin = x, s.yOrigin = C, s.smooth = !!i, s.origin = n, s.originIsAbsolute = !!r, e.style[sr] = "0px 0px", l && (di(l, s, "xOrigin", u, x), di(l, s, "yOrigin", c, C), di(l, s, "xOffset", f, s.xOffset), di(l, s, "yOffset", h, s.yOffset)), e.setAttribute("data-svg-origin", x + " " + C);
}, da = function(e, n) {
  var r = e._gsap || new D_(e);
  if ("x" in r && !n && !r.uncache)
    return r;
  var i = e.style, o = r.scaleX < 0, l = "px", s = "deg", a = getComputedStyle(e), u = Er(e, sr) || "0", c, f, h, d, g, p, _, v, m, y, x, C, T, E, b, O, P, j, D, G, I, $, W, L, M, z, k, Y, J, nt, fe, de;
  return c = f = h = p = _ = v = m = y = x = 0, d = g = 1, r.svg = !!(e.getCTM && q_(e)), a.translate && ((a.translate !== "none" || a.scale !== "none" || a.rotate !== "none") && (i[Ie] = (a.translate !== "none" ? "translate3d(" + (a.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (a.rotate !== "none" ? "rotate(" + a.rotate + ") " : "") + (a.scale !== "none" ? "scale(" + a.scale.split(" ").join(",") + ") " : "") + (a[Ie] !== "none" ? a[Ie] : "")), i.scale = i.rotate = i.translate = "none"), E = h0(e, r.svg), r.svg && (r.uncache ? (M = e.getBBox(), u = r.xOrigin - M.x + "px " + (r.yOrigin - M.y) + "px", L = "") : L = !n && e.getAttribute("data-svg-origin"), bh(e, L || u, !!L || r.originIsAbsolute, r.smooth !== !1, E)), C = r.xOrigin || 0, T = r.yOrigin || 0, E !== fa && (j = E[0], D = E[1], G = E[2], I = E[3], c = $ = E[4], f = W = E[5], E.length === 6 ? (d = Math.sqrt(j * j + D * D), g = Math.sqrt(I * I + G * G), p = j || D ? Fo(D, j) * to : 0, m = G || I ? Fo(G, I) * to + p : 0, m && (g *= Math.abs(Math.cos(m * vl))), r.svg && (c -= C - (C * j + T * G), f -= T - (C * D + T * I))) : (de = E[6], nt = E[7], k = E[8], Y = E[9], J = E[10], fe = E[11], c = E[12], f = E[13], h = E[14], b = Fo(de, J), _ = b * to, b && (O = Math.cos(-b), P = Math.sin(-b), L = $ * O + k * P, M = W * O + Y * P, z = de * O + J * P, k = $ * -P + k * O, Y = W * -P + Y * O, J = de * -P + J * O, fe = nt * -P + fe * O, $ = L, W = M, de = z), b = Fo(-G, J), v = b * to, b && (O = Math.cos(-b), P = Math.sin(-b), L = j * O - k * P, M = D * O - Y * P, z = G * O - J * P, fe = I * P + fe * O, j = L, D = M, G = z), b = Fo(D, j), p = b * to, b && (O = Math.cos(b), P = Math.sin(b), L = j * O + D * P, M = $ * O + W * P, D = D * O - j * P, W = W * O - $ * P, j = L, $ = M), _ && Math.abs(_) + Math.abs(p) > 359.9 && (_ = p = 0, v = 180 - v), d = Ue(Math.sqrt(j * j + D * D + G * G)), g = Ue(Math.sqrt(W * W + de * de)), b = Fo($, W), m = Math.abs(b) > 2e-4 ? b * to : 0, x = fe ? 1 / (fe < 0 ? -fe : fe) : 0), r.svg && (L = e.getAttribute("transform"), r.forceCSS = e.setAttribute("transform", "") || !Z_(Er(e, Ie)), L && e.setAttribute("transform", L))), Math.abs(m) > 90 && Math.abs(m) < 270 && (o ? (d *= -1, m += p <= 0 ? 180 : -180, p += p <= 0 ? 180 : -180) : (g *= -1, m += m <= 0 ? 180 : -180)), n = n || r.uncache, r.x = c - ((r.xPercent = c && (!n && r.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0))) ? e.offsetWidth * r.xPercent / 100 : 0) + l, r.y = f - ((r.yPercent = f && (!n && r.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-f) ? -50 : 0))) ? e.offsetHeight * r.yPercent / 100 : 0) + l, r.z = h + l, r.scaleX = Ue(d), r.scaleY = Ue(g), r.rotation = Ue(p) + s, r.rotationX = Ue(_) + s, r.rotationY = Ue(v) + s, r.skewX = m + s, r.skewY = y + s, r.transformPerspective = x + l, (r.zOrigin = parseFloat(u.split(" ")[2]) || 0) && (i[sr] = wc(u)), r.xOffset = r.yOffset = 0, r.force3D = wn.force3D, r.renderTransform = r.svg ? TC : G_ ? J_ : EC, r.uncache = 0, r;
}, wc = function(e) {
  return (e = e.split(" "))[0] + " " + e[1];
}, nd = function(e, n, r) {
  var i = Et(n);
  return Ue(parseFloat(n) + parseFloat(Ai(e, "x", r + "px", i))) + i;
}, EC = function(e, n) {
  n.z = "0px", n.rotationY = n.rotationX = "0deg", n.force3D = 0, J_(e, n);
}, Ki = "0deg", es = "0px", Zi = ") ", J_ = function(e, n) {
  var r = n || this, i = r.xPercent, o = r.yPercent, l = r.x, s = r.y, a = r.z, u = r.rotation, c = r.rotationY, f = r.rotationX, h = r.skewX, d = r.skewY, g = r.scaleX, p = r.scaleY, _ = r.transformPerspective, v = r.force3D, m = r.target, y = r.zOrigin, x = "", C = v === "auto" && e && e !== 1 || v === !0;
  if (y && (f !== Ki || c !== Ki)) {
    var T = parseFloat(c) * vl, E = Math.sin(T), b = Math.cos(T), O;
    T = parseFloat(f) * vl, O = Math.cos(T), l = nd(m, l, E * O * -y), s = nd(m, s, -Math.sin(T) * -y), a = nd(m, a, b * O * -y + y);
  }
  _ !== es && (x += "perspective(" + _ + Zi), (i || o) && (x += "translate(" + i + "%, " + o + "%) "), (C || l !== es || s !== es || a !== es) && (x += a !== es || C ? "translate3d(" + l + ", " + s + ", " + a + ") " : "translate(" + l + ", " + s + Zi), u !== Ki && (x += "rotate(" + u + Zi), c !== Ki && (x += "rotateY(" + c + Zi), f !== Ki && (x += "rotateX(" + f + Zi), (h !== Ki || d !== Ki) && (x += "skew(" + h + ", " + d + Zi), (g !== 1 || p !== 1) && (x += "scale(" + g + ", " + p + Zi), m.style[Ie] = x || "translate(0, 0)";
}, TC = function(e, n) {
  var r = n || this, i = r.xPercent, o = r.yPercent, l = r.x, s = r.y, a = r.rotation, u = r.skewX, c = r.skewY, f = r.scaleX, h = r.scaleY, d = r.target, g = r.xOrigin, p = r.yOrigin, _ = r.xOffset, v = r.yOffset, m = r.forceCSS, y = parseFloat(l), x = parseFloat(s), C, T, E, b, O;
  a = parseFloat(a), u = parseFloat(u), c = parseFloat(c), c && (c = parseFloat(c), u += c, a += c), a || u ? (a *= vl, u *= vl, C = Math.cos(a) * f, T = Math.sin(a) * f, E = Math.sin(a - u) * -h, b = Math.cos(a - u) * h, u && (c *= vl, O = Math.tan(u - c), O = Math.sqrt(1 + O * O), E *= O, b *= O, c && (O = Math.tan(c), O = Math.sqrt(1 + O * O), C *= O, T *= O)), C = Ue(C), T = Ue(T), E = Ue(E), b = Ue(b)) : (C = f, b = h, T = E = 0), (y && !~(l + "").indexOf("px") || x && !~(s + "").indexOf("px")) && (y = Ai(d, "x", l, "px"), x = Ai(d, "y", s, "px")), (g || p || _ || v) && (y = Ue(y + g - (g * C + p * E) + _), x = Ue(x + p - (g * T + p * b) + v)), (i || o) && (O = d.getBBox(), y = Ue(y + i / 100 * O.width), x = Ue(x + o / 100 * O.height)), O = "matrix(" + C + "," + T + "," + E + "," + b + "," + y + "," + x + ")", d.setAttribute("transform", O), m && (d.style[Ie] = O);
}, bC = function(e, n, r, i, o) {
  var l = 360, s = at(o), a = parseFloat(o) * (s && ~o.indexOf("rad") ? to : 1), u = a - i, c = i + u + "deg", f, h;
  return s && (f = o.split("_")[1], f === "short" && (u %= l, u !== u % (l / 2) && (u += u < 0 ? l : -l)), f === "cw" && u < 0 ? u = (u + l * gm) % l - ~~(u / l) * l : f === "ccw" && u > 0 && (u = (u - l * gm) % l - ~~(u / l) * l)), e._pt = h = new rn(e._pt, n, r, i, u, cC), h.e = c, h.u = "deg", e._props.push(r), h;
}, wm = function(e, n) {
  for (var r in n)
    e[r] = n[r];
  return e;
}, PC = function(e, n, r) {
  var i = wm({}, r._gsap), o = "perspective,force3D,transformOrigin,svgOrigin", l = r.style, s, a, u, c, f, h, d, g;
  i.svg ? (u = r.getAttribute("transform"), r.setAttribute("transform", ""), l[Ie] = n, s = da(r, 1), ca(r, Ie), r.setAttribute("transform", u)) : (u = getComputedStyle(r)[Ie], l[Ie] = n, s = da(r, 1), l[Ie] = u);
  for (a in qr)
    u = i[a], c = s[a], u !== c && o.indexOf(a) < 0 && (d = Et(u), g = Et(c), f = d !== g ? Ai(r, a, u, g) : parseFloat(u), h = parseFloat(c), e._pt = new rn(e._pt, s, a, f, h - f, Ch), e._pt.u = g || 0, e._props.push(a));
  wm(s, i);
};
nn("padding,margin,Width,Radius", function(t, e) {
  var n = "Top", r = "Right", i = "Bottom", o = "Left", l = (e < 3 ? [n, r, i, o] : [n + o, n + r, i + r, i + o]).map(function(s) {
    return e < 2 ? t + s : "border" + s + t;
  });
  xc[e > 1 ? "border" + t : t] = function(s, a, u, c, f) {
    var h, d;
    if (arguments.length < 4)
      return h = l.map(function(g) {
        return $r(s, g, u);
      }), d = h.join(" "), d.split(h[0]).length === 5 ? h[0] : d;
    h = (c + "").split(" "), d = {}, l.forEach(function(g, p) {
      return d[g] = h[p] = h[p] || h[(p - 1) / 2 | 0];
    }), s.init(a, d, f);
  };
});
var ex = {
  name: "css",
  register: Th,
  targetTest: function(e) {
    return e.style && e.nodeType;
  },
  init: function(e, n, r, i, o) {
    var l = this._props, s = e.style, a = r.vars.startAt, u, c, f, h, d, g, p, _, v, m, y, x, C, T, E, b;
    c0 || Th(), this.styles = this.styles || X_(e), b = this.styles.props, this.tween = r;
    for (p in n)
      if (p !== "autoRound" && (c = n[p], !(mn[p] && z_(p, n, r, i, e, o)))) {
        if (d = typeof c, g = xc[p], d === "function" && (c = c.call(r, i, e, o), d = typeof c), d === "string" && ~c.indexOf("random(") && (c = sa(c)), g)
          g(this, e, p, c, r) && (E = 1);
        else if (p.substr(0, 2) === "--")
          u = (getComputedStyle(e).getPropertyValue(p) + "").trim(), c += "", bi.lastIndex = 0, bi.test(u) || (_ = Et(u), v = Et(c)), v ? _ !== v && (u = Ai(e, p, u, v) + v) : _ && (c += _), this.add(s, "setProperty", u, c, i, o, 0, 0, p), l.push(p), b.push(p, 0, s[p]);
        else if (d !== "undefined") {
          if (a && p in a ? (u = typeof a[p] == "function" ? a[p].call(r, i, e, o) : a[p], at(u) && ~u.indexOf("random(") && (u = sa(u)), Et(u + "") || (u += wn.units[p] || Et($r(e, p)) || ""), (u + "").charAt(1) === "=" && (u = $r(e, p))) : u = $r(e, p), h = parseFloat(u), m = d === "string" && c.charAt(1) === "=" && c.substr(0, 2), m && (c = c.substr(2)), f = parseFloat(c), p in kr && (p === "autoAlpha" && (h === 1 && $r(e, "visibility") === "hidden" && f && (h = 0), b.push("visibility", 0, s.visibility), di(this, s, "visibility", h ? "inherit" : "hidden", f ? "inherit" : "hidden", !f)), p !== "scale" && p !== "transform" && (p = kr[p], ~p.indexOf(",") && (p = p.split(",")[0]))), y = p in qr, y) {
            if (this.styles.save(p), x || (C = e._gsap, C.renderTransform && !n.parseTransform || da(e, n.parseTransform), T = n.smoothOrigin !== !1 && C.smooth, x = this._pt = new rn(this._pt, s, Ie, 0, 1, C.renderTransform, C, 0, -1), x.dep = 1), p === "scale")
              this._pt = new rn(this._pt, C, "scaleY", C.scaleY, (m ? gl(C.scaleY, m + f) : f) - C.scaleY || 0, Ch), this._pt.u = 0, l.push("scaleY", p), p += "X";
            else if (p === "transformOrigin") {
              b.push(sr, 0, s[sr]), c = SC(c), C.svg ? bh(e, c, 0, T, 0, this) : (v = parseFloat(c.split(" ")[2]) || 0, v !== C.zOrigin && di(this, C, "zOrigin", C.zOrigin, v), di(this, s, p, wc(u), wc(c)));
              continue;
            } else if (p === "svgOrigin") {
              bh(e, c, 1, T, 0, this);
              continue;
            } else if (p in K_) {
              bC(this, C, p, h, m ? gl(h, m + c) : c);
              continue;
            } else if (p === "smoothOrigin") {
              di(this, C, "smooth", C.smooth, c);
              continue;
            } else if (p === "force3D") {
              C[p] = c;
              continue;
            } else if (p === "transform") {
              PC(this, c, e);
              continue;
            }
          } else
            p in s || (p = Dl(p) || p);
          if (y || (f || f === 0) && (h || h === 0) && !uC.test(c) && p in s)
            _ = (u + "").substr((h + "").length), f || (f = 0), v = Et(c) || (p in wn.units ? wn.units[p] : _), _ !== v && (h = Ai(e, p, u, v)), this._pt = new rn(this._pt, y ? C : s, p, h, (m ? gl(h, m + f) : f) - h, !y && (v === "px" || p === "zIndex") && n.autoRound !== !1 ? dC : Ch), this._pt.u = v || 0, _ !== v && v !== "%" && (this._pt.b = u, this._pt.r = fC);
          else if (p in s)
            kC.call(this, e, p, u, m ? m + c : c);
          else if (p in e)
            this.add(e, p, u || e[p], m ? m + c : c, i, o);
          else if (p !== "parseTransform") {
            t0(p, c);
            continue;
          }
          y || (p in s ? b.push(p, 0, s[p]) : b.push(p, 1, u || e[p])), l.push(p);
        }
      }
    E && V_(this);
  },
  render: function(e, n) {
    if (n.tween._time || !f0())
      for (var r = n._pt; r; )
        r.r(e, r.d), r = r._next;
    else
      n.styles.revert();
  },
  get: $r,
  aliases: kr,
  getSetter: function(e, n, r) {
    var i = kr[n];
    return i && i.indexOf(",") < 0 && (n = i), n in qr && n !== sr && (e._gsap.x || $r(e, "x")) ? r && pm === r ? n === "scale" ? mC : gC : (pm = r || {}) && (n === "scale" ? vC : yC) : e.style && !Zp(e.style[n]) ? hC : ~n.indexOf("-") ? pC : a0(e, n);
  },
  core: {
    _removeProperty: ca,
    _getMatrix: h0
  }
};
ln.utils.checkPrefix = Dl;
ln.core.getStyleSaver = X_;
(function(t, e, n, r) {
  var i = nn(t + "," + e + "," + n, function(o) {
    qr[o] = 1;
  });
  nn(e, function(o) {
    wn.units[o] = "deg", K_[o] = 1;
  }), kr[i[13]] = t + "," + e, nn(r, function(o) {
    var l = o.split(":");
    kr[l[1]] = i[l[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
nn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
  wn.units[t] = "px";
});
ln.registerPlugin(ex);
var Ii = ln.registerPlugin(ex) || ln;
Ii.core.Tween;
function km(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
  }
}
function OC(t, e, n) {
  return e && km(t.prototype, e), n && km(t, n), t;
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
var gt, Ph, yn, hi, pi, yl, tx, no, Rs, nx, Br, Zn, rx, ix = function() {
  return gt || typeof window < "u" && (gt = window.gsap) && gt.registerPlugin && gt;
}, ox = 1, ll = [], ie = [], Tr = [], Ms = Date.now, Oh = function(e, n) {
  return n;
}, RC = function() {
  var e = Rs.core, n = e.bridge || {}, r = e._scrollers, i = e._proxies;
  r.push.apply(r, ie), i.push.apply(i, Tr), ie = r, Tr = i, Oh = function(l, s) {
    return n[l](s);
  };
}, Pi = function(e, n) {
  return ~Tr.indexOf(e) && Tr[Tr.indexOf(e) + 1][n];
}, Ns = function(e) {
  return !!~nx.indexOf(e);
}, Mt = function(e, n, r, i, o) {
  return e.addEventListener(n, r, {
    passive: !i,
    capture: !!o
  });
}, Rt = function(e, n, r, i) {
  return e.removeEventListener(n, r, !!i);
}, Ja = "scrollLeft", eu = "scrollTop", Rh = function() {
  return Br && Br.isPressed || ie.cache++;
}, kc = function(e, n) {
  var r = function i(o) {
    if (o || o === 0) {
      ox && (yn.history.scrollRestoration = "manual");
      var l = Br && Br.isPressed;
      o = i.v = Math.round(o) || (Br && Br.iOS ? 1 : 0), e(o), i.cacheID = ie.cache, l && Oh("ss", o);
    } else
      (n || ie.cache !== i.cacheID || Oh("ref")) && (i.cacheID = ie.cache, i.v = e());
    return i.v + i.offset;
  };
  return r.offset = 0, e && r;
}, zt = {
  s: Ja,
  p: "left",
  p2: "Left",
  os: "right",
  os2: "Right",
  d: "width",
  d2: "Width",
  a: "x",
  sc: kc(function(t) {
    return arguments.length ? yn.scrollTo(t, et.sc()) : yn.pageXOffset || hi[Ja] || pi[Ja] || yl[Ja] || 0;
  })
}, et = {
  s: eu,
  p: "top",
  p2: "Top",
  os: "bottom",
  os2: "Bottom",
  d: "height",
  d2: "Height",
  a: "y",
  op: zt,
  sc: kc(function(t) {
    return arguments.length ? yn.scrollTo(zt.sc(), t) : yn.pageYOffset || hi[eu] || pi[eu] || yl[eu] || 0;
  })
}, Yt = function(e, n) {
  return (n && n._ctx && n._ctx.selector || gt.utils.toArray)(e)[0] || (typeof e == "string" && gt.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null);
}, Di = function(e, n) {
  var r = n.s, i = n.sc;
  Ns(e) && (e = hi.scrollingElement || pi);
  var o = ie.indexOf(e), l = i === et.sc ? 1 : 2;
  !~o && (o = ie.push(e) - 1), ie[o + l] || Mt(e, "scroll", Rh);
  var s = ie[o + l], a = s || (ie[o + l] = kc(Pi(e, r), !0) || (Ns(e) ? i : kc(function(u) {
    return arguments.length ? e[r] = u : e[r];
  })));
  return a.target = e, s || (a.smooth = gt.getProperty(e, "scrollBehavior") === "smooth"), a;
}, Mh = function(e, n, r) {
  var i = e, o = e, l = Ms(), s = l, a = n || 50, u = Math.max(500, a * 3), c = function(g, p) {
    var _ = Ms();
    p || _ - l > a ? (o = i, i = g, s = l, l = _) : r ? i += g : i = o + (g - o) / (_ - s) * (l - s);
  }, f = function() {
    o = i = r ? 0 : i, s = l = 0;
  }, h = function(g) {
    var p = s, _ = o, v = Ms();
    return (g || g === 0) && g !== i && c(g), l === s || v - s > u ? 0 : (i + (r ? _ : -_)) / ((r ? v : l) - p) * 1e3;
  };
  return {
    update: c,
    reset: f,
    getVelocity: h
  };
}, ts = function(e, n) {
  return n && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e;
}, Sm = function(e) {
  var n = Math.max.apply(Math, e), r = Math.min.apply(Math, e);
  return Math.abs(n) >= Math.abs(r) ? n : r;
}, lx = function() {
  Rs = gt.core.globals().ScrollTrigger, Rs && Rs.core && RC();
}, sx = function(e) {
  return gt = e || ix(), gt && typeof document < "u" && document.body && (yn = window, hi = document, pi = hi.documentElement, yl = hi.body, nx = [yn, hi, pi, yl], gt.utils.clamp, rx = gt.core.context || function() {
  }, no = "onpointerenter" in yl ? "pointer" : "mouse", tx = Ke.isTouch = yn.matchMedia && yn.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in yn || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, Zn = Ke.eventTypes = ("ontouchstart" in pi ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in pi ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
    return ox = 0;
  }, 500), lx(), Ph = 1), Ph;
};
zt.op = et;
ie.cache = 0;
var Ke = /* @__PURE__ */ function() {
  function t(n) {
    this.init(n);
  }
  var e = t.prototype;
  return e.init = function(r) {
    Ph || sx(gt) || console.warn("Please gsap.registerPlugin(Observer)"), Rs || lx();
    var i = r.tolerance, o = r.dragMinimum, l = r.type, s = r.target, a = r.lineHeight, u = r.debounce, c = r.preventDefault, f = r.onStop, h = r.onStopDelay, d = r.ignore, g = r.wheelSpeed, p = r.event, _ = r.onDragStart, v = r.onDragEnd, m = r.onDrag, y = r.onPress, x = r.onRelease, C = r.onRight, T = r.onLeft, E = r.onUp, b = r.onDown, O = r.onChangeX, P = r.onChangeY, j = r.onChange, D = r.onToggleX, G = r.onToggleY, I = r.onHover, $ = r.onHoverEnd, W = r.onMove, L = r.ignoreCheck, M = r.isNormalizer, z = r.onGestureStart, k = r.onGestureEnd, Y = r.onWheel, J = r.onEnable, nt = r.onDisable, fe = r.onClick, de = r.scrollSpeed, ye = r.capture, ue = r.allowClicks, He = r.lockAxis, be = r.onLockAxis;
    this.target = s = Yt(s) || pi, this.vars = r, d && (d = gt.utils.toArray(d)), i = i || 1e-9, o = o || 0, g = g || 1, de = de || 1, l = l || "wheel,touch,pointer", u = u !== !1, a || (a = parseFloat(yn.getComputedStyle(yl).lineHeight) || 22);
    var Tn, Ut, cr, me, Ye, Wt, an, R = this, un = 0, Rr = 0, Vi = Di(s, zt), Xe = Di(s, et), Ui = Vi(), Wi = Xe(), Vl = ~l.indexOf("touch") && !~l.indexOf("pointer") && Zn[0] === "pointerdown", ut = Ns(s), Be = s.ownerDocument || hi, Hn = [0, 0, 0], Yn = [0, 0, 0], Hi = 0, Mr = function() {
      return Hi = Ms();
    }, fr = function(H, ve) {
      return (R.event = H) && d && ~d.indexOf(H.target) || ve && Vl && H.pointerType !== "touch" || L && L(H, ve);
    }, Ht = function() {
      R._vx.reset(), R._vy.reset(), Ut.pause(), f && f(R);
    }, Yi = function() {
      var H = R.deltaX = Sm(Hn), ve = R.deltaY = Sm(Yn), $e = Math.abs(H) >= i, V = Math.abs(ve) >= i;
      j && ($e || V) && j(R, H, ve, Hn, Yn), $e && (C && R.deltaX > 0 && C(R), T && R.deltaX < 0 && T(R), O && O(R), D && R.deltaX < 0 != un < 0 && D(R), un = R.deltaX, Hn[0] = Hn[1] = Hn[2] = 0), V && (b && R.deltaY > 0 && b(R), E && R.deltaY < 0 && E(R), P && P(R), G && R.deltaY < 0 != Rr < 0 && G(R), Rr = R.deltaY, Yn[0] = Yn[1] = Yn[2] = 0), (me || cr) && (W && W(R), cr && (m(R), cr = !1), me = !1), Wt && !(Wt = !1) && be && be(R), Ye && (Y(R), Ye = !1), Tn = 0;
    }, zo = function(H, ve, $e) {
      Hn[$e] += H, Yn[$e] += ve, R._vx.update(H), R._vy.update(ve), u ? Tn || (Tn = requestAnimationFrame(Yi)) : Yi();
    }, $o = function(H, ve) {
      He && !an && (R.axis = an = Math.abs(H) > Math.abs(ve) ? "x" : "y", Wt = !0), an !== "y" && (Hn[2] += H, R._vx.update(H, !0)), an !== "x" && (Yn[2] += ve, R._vy.update(ve, !0)), u ? Tn || (Tn = requestAnimationFrame(Yi)) : Yi();
    }, Xi = function(H) {
      if (!fr(H, 1)) {
        H = ts(H, c);
        var ve = H.clientX, $e = H.clientY, V = ve - R.x, ce = $e - R.y, X = R.isDragging;
        R.x = ve, R.y = $e, (X || Math.abs(R.startX - ve) >= o || Math.abs(R.startY - $e) >= o) && (m && (cr = !0), X || (R.isDragging = !0), $o(V, ce), X || _ && _(R));
      }
    }, Zr = R.onPress = function(ee) {
      fr(ee, 1) || ee && ee.button || (R.axis = an = null, Ut.pause(), R.isPressed = !0, ee = ts(ee), un = Rr = 0, R.startX = R.x = ee.clientX, R.startY = R.y = ee.clientY, R._vx.reset(), R._vy.reset(), Mt(M ? s : Be, Zn[1], Xi, c, !0), R.deltaX = R.deltaY = 0, y && y(R));
    }, Jr = R.onRelease = function(ee) {
      if (!fr(ee, 1)) {
        Rt(M ? s : Be, Zn[1], Xi, !0);
        var H = !isNaN(R.y - R.startY), ve = R.isDragging && (Math.abs(R.x - R.startX) > 3 || Math.abs(R.y - R.startY) > 3), $e = ts(ee);
        !ve && H && (R._vx.reset(), R._vy.reset(), c && ue && gt.delayedCall(0.08, function() {
          if (Ms() - Hi > 300 && !ee.defaultPrevented) {
            if (ee.target.click)
              ee.target.click();
            else if (Be.createEvent) {
              var V = Be.createEvent("MouseEvents");
              V.initMouseEvent("click", !0, !0, yn, 1, $e.screenX, $e.screenY, $e.clientX, $e.clientY, !1, !1, !1, !1, 0, null), ee.target.dispatchEvent(V);
            }
          }
        })), R.isDragging = R.isGesturing = R.isPressed = !1, f && !M && Ut.restart(!0), v && ve && v(R), x && x(R, ve);
      }
    }, he = function(H) {
      return H.touches && H.touches.length > 1 && (R.isGesturing = !0) && z(H, R.isDragging);
    }, Gi = function() {
      return (R.isGesturing = !1) || k(R);
    }, Xn = function(H) {
      if (!fr(H)) {
        var ve = Vi(), $e = Xe();
        zo((ve - Ui) * de, ($e - Wi) * de, 1), Ui = ve, Wi = $e, f && Ut.restart(!0);
      }
    }, Gn = function(H) {
      if (!fr(H)) {
        H = ts(H, c), Y && (Ye = !0);
        var ve = (H.deltaMode === 1 ? a : H.deltaMode === 2 ? yn.innerHeight : 1) * g;
        zo(H.deltaX * ve, H.deltaY * ve, 0), f && !M && Ut.restart(!0);
      }
    }, Qn = function(H) {
      if (!fr(H)) {
        var ve = H.clientX, $e = H.clientY, V = ve - R.x, ce = $e - R.y;
        R.x = ve, R.y = $e, me = !0, (V || ce) && $o(V, ce);
      }
    }, Qi = function(H) {
      R.event = H, I(R);
    }, jo = function(H) {
      R.event = H, $(R);
    }, Nr = function(H) {
      return fr(H) || ts(H, c) && fe(R);
    };
    Ut = R._dc = gt.delayedCall(h || 0.25, Ht).pause(), R.deltaX = R.deltaY = 0, R._vx = Mh(0, 50, !0), R._vy = Mh(0, 50, !0), R.scrollX = Vi, R.scrollY = Xe, R.isDragging = R.isGesturing = R.isPressed = !1, rx(this), R.enable = function(ee) {
      return R.isEnabled || (Mt(ut ? Be : s, "scroll", Rh), l.indexOf("scroll") >= 0 && Mt(ut ? Be : s, "scroll", Xn, c, ye), l.indexOf("wheel") >= 0 && Mt(s, "wheel", Gn, c, ye), (l.indexOf("touch") >= 0 && tx || l.indexOf("pointer") >= 0) && (Mt(s, Zn[0], Zr, c, ye), Mt(Be, Zn[2], Jr), Mt(Be, Zn[3], Jr), ue && Mt(s, "click", Mr, !1, !0), fe && Mt(s, "click", Nr), z && Mt(Be, "gesturestart", he), k && Mt(Be, "gestureend", Gi), I && Mt(s, no + "enter", Qi), $ && Mt(s, no + "leave", jo), W && Mt(s, no + "move", Qn)), R.isEnabled = !0, ee && ee.type && Zr(ee), J && J(R)), R;
    }, R.disable = function() {
      R.isEnabled && (ll.filter(function(ee) {
        return ee !== R && Ns(ee.target);
      }).length || Rt(ut ? Be : s, "scroll", Rh), R.isPressed && (R._vx.reset(), R._vy.reset(), Rt(M ? s : Be, Zn[1], Xi, !0)), Rt(ut ? Be : s, "scroll", Xn, ye), Rt(s, "wheel", Gn, ye), Rt(s, Zn[0], Zr, ye), Rt(Be, Zn[2], Jr), Rt(Be, Zn[3], Jr), Rt(s, "click", Mr, !0), Rt(s, "click", Nr), Rt(Be, "gesturestart", he), Rt(Be, "gestureend", Gi), Rt(s, no + "enter", Qi), Rt(s, no + "leave", jo), Rt(s, no + "move", Qn), R.isEnabled = R.isPressed = R.isDragging = !1, nt && nt(R));
    }, R.kill = R.revert = function() {
      R.disable();
      var ee = ll.indexOf(R);
      ee >= 0 && ll.splice(ee, 1), Br === R && (Br = 0);
    }, ll.push(R), M && Ns(s) && (Br = R), R.enable(p);
  }, OC(t, [{
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
Ke.version = "3.12.2";
Ke.create = function(t) {
  return new Ke(t);
};
Ke.register = sx;
Ke.getAll = function() {
  return ll.slice();
};
Ke.getById = function(t) {
  return ll.filter(function(e) {
    return e.vars.id === t;
  })[0];
};
ix() && gt.registerPlugin(Ke);
/*!
 * ScrollTrigger 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var U, Wo, se, Me, nr, Ee, ax, Sc, Cc, sl, Du, tu, St, ef, Nh, At, Cm, Em, Ho, ux, rd, cx, dn, fx, dx, hx, ri, Ah, p0, _l, g0, id, nu = 1, Dt = Date.now, od = Dt(), Fn = 0, ds = 0, Tm = function(e, n, r) {
  var i = gn(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
  return r["_" + n + "Clamp"] = i, i ? e.substr(6, e.length - 7) : e;
}, bm = function(e, n) {
  return n && (!gn(e) || e.substr(0, 6) !== "clamp(") ? "clamp(" + e + ")" : e;
}, MC = function t() {
  return ds && requestAnimationFrame(t);
}, Pm = function() {
  return ef = 1;
}, Om = function() {
  return ef = 0;
}, vr = function(e) {
  return e;
}, hs = function(e) {
  return Math.round(e * 1e5) / 1e5 || 0;
}, px = function() {
  return typeof window < "u";
}, gx = function() {
  return U || px() && (U = window.gsap) && U.registerPlugin && U;
}, bo = function(e) {
  return !!~ax.indexOf(e);
}, mx = function(e) {
  return (e === "Height" ? g0 : se["inner" + e]) || nr["client" + e] || Ee["client" + e];
}, vx = function(e) {
  return Pi(e, "getBoundingClientRect") || (bo(e) ? function() {
    return Bu.width = se.innerWidth, Bu.height = g0, Bu;
  } : function() {
    return jr(e);
  });
}, NC = function(e, n, r) {
  var i = r.d, o = r.d2, l = r.a;
  return (l = Pi(e, "getBoundingClientRect")) ? function() {
    return l()[i];
  } : function() {
    return (n ? mx(o) : e["client" + o]) || 0;
  };
}, AC = function(e, n) {
  return !n || ~Tr.indexOf(e) ? vx(e) : function() {
    return Bu;
  };
}, Vr = function(e, n) {
  var r = n.s, i = n.d2, o = n.d, l = n.a;
  return Math.max(0, (r = "scroll" + i) && (l = Pi(e, r)) ? l() - vx(e)()[o] : bo(e) ? (nr[r] || Ee[r]) - mx(i) : e[r] - e["offset" + i]);
}, ru = function(e, n) {
  for (var r = 0; r < Ho.length; r += 3)
    (!n || ~n.indexOf(Ho[r + 1])) && e(Ho[r], Ho[r + 1], Ho[r + 2]);
}, gn = function(e) {
  return typeof e == "string";
}, $t = function(e) {
  return typeof e == "function";
}, zu = function(e) {
  return typeof e == "number";
}, ro = function(e) {
  return typeof e == "object";
}, ns = function(e, n, r) {
  return e && e.progress(n ? 0 : 1) && r && e.pause();
}, ld = function(e, n) {
  if (e.enabled) {
    var r = n(e);
    r && r.totalTime && (e.callbackAnimation = r);
  }
}, Bo = Math.abs, yx = "left", _x = "top", m0 = "right", v0 = "bottom", yo = "width", _o = "height", As = "Right", Is = "Left", Ds = "Top", zs = "Bottom", Ge = "padding", Mn = "margin", zl = "Width", y0 = "Height", dt = "px", Nn = function(e) {
  return se.getComputedStyle(e);
}, IC = function(e) {
  var n = Nn(e).position;
  e.style.position = n === "absolute" || n === "fixed" ? n : "relative";
}, Rm = function(e, n) {
  for (var r in n)
    r in e || (e[r] = n[r]);
  return e;
}, jr = function(e, n) {
  var r = n && Nn(e)[Nh] !== "matrix(1, 0, 0, 1, 0, 0)" && U.to(e, {
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
}, Ih = function(e, n) {
  var r = n.d2;
  return e["offset" + r] || e["client" + r] || 0;
}, xx = function(e) {
  var n = [], r = e.labels, i = e.duration(), o;
  for (o in r)
    n.push(r[o] / i);
  return n;
}, DC = function(e) {
  return function(n) {
    return U.utils.snap(xx(e), n);
  };
}, _0 = function(e) {
  var n = U.utils.snap(e), r = Array.isArray(e) && e.slice(0).sort(function(i, o) {
    return i - o;
  });
  return r ? function(i, o, l) {
    l === void 0 && (l = 1e-3);
    var s;
    if (!o)
      return n(i);
    if (o > 0) {
      for (i -= l, s = 0; s < r.length; s++)
        if (r[s] >= i)
          return r[s];
      return r[s - 1];
    } else
      for (s = r.length, i += l; s--; )
        if (r[s] <= i)
          return r[s];
    return r[0];
  } : function(i, o, l) {
    l === void 0 && (l = 1e-3);
    var s = n(i);
    return !o || Math.abs(s - i) < l || s - i < 0 == o < 0 ? s : n(o < 0 ? i - e : i + e);
  };
}, zC = function(e) {
  return function(n, r) {
    return _0(xx(e))(n, r.direction);
  };
}, iu = function(e, n, r, i) {
  return r.split(",").forEach(function(o) {
    return e(n, o, i);
  });
}, ot = function(e, n, r, i, o) {
  return e.addEventListener(n, r, {
    passive: !i,
    capture: !!o
  });
}, it = function(e, n, r, i) {
  return e.removeEventListener(n, r, !!i);
}, ou = function(e, n, r) {
  r = r && r.wheelHandler, r && (e(n, "wheel", r), e(n, "touchmove", r));
}, Mm = {
  startColor: "green",
  endColor: "red",
  indent: 0,
  fontSize: "16px",
  fontWeight: "normal"
}, lu = {
  toggleActions: "play",
  anticipatePin: 0
}, Ec = {
  top: 0,
  left: 0,
  center: 0.5,
  bottom: 1,
  right: 1
}, $u = function(e, n) {
  if (gn(e)) {
    var r = e.indexOf("="), i = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
    ~r && (e.indexOf("%") > r && (i *= n / 100), e = e.substr(0, r - 1)), e = i + (e in Ec ? Ec[e] * n : ~e.indexOf("%") ? parseFloat(e) * n / 100 : parseFloat(e) || 0);
  }
  return e;
}, su = function(e, n, r, i, o, l, s, a) {
  var u = o.startColor, c = o.endColor, f = o.fontSize, h = o.indent, d = o.fontWeight, g = Me.createElement("div"), p = bo(r) || Pi(r, "pinType") === "fixed", _ = e.indexOf("scroller") !== -1, v = p ? Ee : r, m = e.indexOf("start") !== -1, y = m ? u : c, x = "border-color:" + y + ";font-size:" + f + ";color:" + y + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
  return x += "position:" + ((_ || a) && p ? "fixed;" : "absolute;"), (_ || a || !p) && (x += (i === et ? m0 : v0) + ":" + (l + parseFloat(h)) + "px;"), s && (x += "box-sizing:border-box;text-align:left;width:" + s.offsetWidth + "px;"), g._isStart = m, g.setAttribute("class", "gsap-marker-" + e + (n ? " marker-" + n : "")), g.style.cssText = x, g.innerText = n || n === 0 ? e + "-" + n : e, v.children[0] ? v.insertBefore(g, v.children[0]) : v.appendChild(g), g._offset = g["offset" + i.op.d2], ju(g, 0, i, m), g;
}, ju = function(e, n, r, i) {
  var o = {
    display: "block"
  }, l = r[i ? "os2" : "p2"], s = r[i ? "p2" : "os2"];
  e._isFlipped = i, o[r.a + "Percent"] = i ? -100 : 0, o[r.a] = i ? "1px" : 0, o["border" + l + zl] = 1, o["border" + s + zl] = 0, o[r.p] = n + "px", U.set(e, o);
}, te = [], Dh = {}, ha, Nm = function() {
  return Dt() - Fn > 34 && (ha || (ha = requestAnimationFrame(Wr)));
}, Vo = function() {
  (!dn || !dn.isPressed || dn.startX > Ee.clientWidth) && (ie.cache++, dn ? ha || (ha = requestAnimationFrame(Wr)) : Wr(), Fn || Oo("scrollStart"), Fn = Dt());
}, sd = function() {
  hx = se.innerWidth, dx = se.innerHeight;
}, ps = function() {
  ie.cache++, !St && !cx && !Me.fullscreenElement && !Me.webkitFullscreenElement && (!fx || hx !== se.innerWidth || Math.abs(se.innerHeight - dx) > se.innerHeight * 0.25) && Sc.restart(!0);
}, Po = {}, $C = [], wx = function t() {
  return it(oe, "scrollEnd", t) || uo(!0);
}, Oo = function(e) {
  return Po[e] && Po[e].map(function(n) {
    return n();
  }) || $C;
}, hn = [], kx = function(e) {
  for (var n = 0; n < hn.length; n += 5)
    (!e || hn[n + 4] && hn[n + 4].query === e) && (hn[n].style.cssText = hn[n + 1], hn[n].getBBox && hn[n].setAttribute("transform", hn[n + 2] || ""), hn[n + 3].uncache = 1);
}, x0 = function(e, n) {
  var r;
  for (At = 0; At < te.length; At++)
    r = te[At], r && (!n || r._ctx === n) && (e ? r.kill(1) : r.revert(!0, !0));
  n && kx(n), n || Oo("revert");
}, Sx = function(e, n) {
  ie.cache++, (n || !It) && ie.forEach(function(r) {
    return $t(r) && r.cacheID++ && (r.rec = 0);
  }), gn(e) && (se.history.scrollRestoration = p0 = e);
}, It, xo = 0, Am, jC = function() {
  if (Am !== xo) {
    var e = Am = xo;
    requestAnimationFrame(function() {
      return e === xo && uo(!0);
    });
  }
}, Cx = function() {
  Ee.appendChild(_l), g0 = _l.offsetHeight || se.innerHeight, Ee.removeChild(_l);
}, uo = function(e, n) {
  if (Fn && !e) {
    ot(oe, "scrollEnd", wx);
    return;
  }
  Cx(), It = oe.isRefreshing = !0, ie.forEach(function(i) {
    return $t(i) && ++i.cacheID && (i.rec = i());
  });
  var r = Oo("refreshInit");
  ux && oe.sort(), n || x0(), ie.forEach(function(i) {
    $t(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"), i(0));
  }), te.slice(0).forEach(function(i) {
    return i.refresh();
  }), te.forEach(function(i, o) {
    if (i._subPinOffset && i.pin) {
      var l = i.vars.horizontal ? "offsetWidth" : "offsetHeight", s = i.pin[l];
      i.revert(!0, 1), i.adjustPinSpacing(i.pin[l] - s), i.refresh();
    }
  }), te.forEach(function(i) {
    var o = Vr(i.scroller, i._dir);
    (i.vars.end === "max" || i._endClamp && i.end > o) && i.setPositions(i.start, Math.max(i.start + 1, o), !0);
  }), r.forEach(function(i) {
    return i && i.render && i.render(-1);
  }), ie.forEach(function(i) {
    $t(i) && (i.smooth && requestAnimationFrame(function() {
      return i.target.style.scrollBehavior = "smooth";
    }), i.rec && i(i.rec));
  }), Sx(p0, 1), Sc.pause(), xo++, It = 2, Wr(2), te.forEach(function(i) {
    return $t(i.vars.onRefresh) && i.vars.onRefresh(i);
  }), It = oe.isRefreshing = !1, Oo("refresh");
}, zh = 0, Lu = 1, $s, Wr = function(e) {
  if (!It || e === 2) {
    oe.isUpdating = !0, $s && $s.update(0);
    var n = te.length, r = Dt(), i = r - od >= 50, o = n && te[0].scroll();
    if (Lu = zh > o ? -1 : 1, It || (zh = o), i && (Fn && !ef && r - Fn > 200 && (Fn = 0, Oo("scrollEnd")), Du = od, od = r), Lu < 0) {
      for (At = n; At-- > 0; )
        te[At] && te[At].update(0, i);
      Lu = 1;
    } else
      for (At = 0; At < n; At++)
        te[At] && te[At].update(0, i);
    oe.isUpdating = !1;
  }
  ha = 0;
}, $h = [yx, _x, v0, m0, Mn + zs, Mn + As, Mn + Ds, Mn + Is, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], Fu = $h.concat([yo, _o, "boxSizing", "max" + zl, "max" + y0, "position", Mn, Ge, Ge + Ds, Ge + As, Ge + zs, Ge + Is]), LC = function(e, n, r) {
  xl(r);
  var i = e._gsap;
  if (i.spacerIsNative)
    xl(i.spacerState);
  else if (e._gsap.swappedIn) {
    var o = n.parentNode;
    o && (o.insertBefore(e, n), o.removeChild(n));
  }
  e._gsap.swappedIn = !1;
}, ad = function(e, n, r, i) {
  if (!e._gsap.swappedIn) {
    for (var o = $h.length, l = n.style, s = e.style, a; o--; )
      a = $h[o], l[a] = r[a];
    l.position = r.position === "absolute" ? "absolute" : "relative", r.display === "inline" && (l.display = "inline-block"), s[v0] = s[m0] = "auto", l.flexBasis = r.flexBasis || "auto", l.overflow = "visible", l.boxSizing = "border-box", l[yo] = Ih(e, zt) + dt, l[_o] = Ih(e, et) + dt, l[Ge] = s[Mn] = s[_x] = s[yx] = "0", xl(i), s[yo] = s["max" + zl] = r[yo], s[_o] = s["max" + y0] = r[_o], s[Ge] = r[Ge], e.parentNode !== n && (e.parentNode.insertBefore(n, e), n.appendChild(e)), e._gsap.swappedIn = !0;
  }
}, FC = /([A-Z])/g, xl = function(e) {
  if (e) {
    var n = e.t.style, r = e.length, i = 0, o, l;
    for ((e.t._gsap || U.core.getCache(e.t)).uncache = 1; i < r; i += 2)
      l = e[i + 1], o = e[i], l ? n[o] = l : n[o] && n.removeProperty(o.replace(FC, "-$1").toLowerCase());
  }
}, au = function(e) {
  for (var n = Fu.length, r = e.style, i = [], o = 0; o < n; o++)
    i.push(Fu[o], r[Fu[o]]);
  return i.t = e, i;
}, BC = function(e, n, r) {
  for (var i = [], o = e.length, l = r ? 8 : 0, s; l < o; l += 2)
    s = e[l], i.push(s, s in n ? n[s] : e[l + 1]);
  return i.t = e.t, i;
}, Bu = {
  left: 0,
  top: 0
}, Im = function(e, n, r, i, o, l, s, a, u, c, f, h, d, g) {
  $t(e) && (e = e(a)), gn(e) && e.substr(0, 3) === "max" && (e = h + (e.charAt(4) === "=" ? $u("0" + e.substr(3), r) : 0));
  var p = d ? d.time() : 0, _, v, m;
  if (d && d.seek(0), isNaN(e) || (e = +e), zu(e))
    d && (e = U.utils.mapRange(d.scrollTrigger.start, d.scrollTrigger.end, 0, h, e)), s && ju(s, r, i, !0);
  else {
    $t(n) && (n = n(a));
    var y = (e || "0").split(" "), x, C, T, E;
    m = Yt(n, a) || Ee, x = jr(m) || {}, (!x || !x.left && !x.top) && Nn(m).display === "none" && (E = m.style.display, m.style.display = "block", x = jr(m), E ? m.style.display = E : m.style.removeProperty("display")), C = $u(y[0], x[i.d]), T = $u(y[1] || "0", r), e = x[i.p] - u[i.p] - c + C + o - T, s && ju(s, T, i, r - T < 20 || s._isStart && T > 20), r -= r - T;
  }
  if (g && (a[g] = e || -1e-3, e < 0 && (e = 0)), l) {
    var b = e + r, O = l._isStart;
    _ = "scroll" + i.d2, ju(l, b, i, O && b > 20 || !O && (f ? Math.max(Ee[_], nr[_]) : l.parentNode[_]) <= b + 1), f && (u = jr(s), f && (l.style[i.op.p] = u[i.op.p] - i.op.m - l._offset + dt));
  }
  return d && m && (_ = jr(m), d.seek(h), v = jr(m), d._caScrollDist = _[i.p] - v[i.p], e = e / d._caScrollDist * h), d && d.seek(p), d ? e : Math.round(e);
}, VC = /(webkit|moz|length|cssText|inset)/i, Dm = function(e, n, r, i) {
  if (e.parentNode !== n) {
    var o = e.style, l, s;
    if (n === Ee) {
      e._stOrig = o.cssText, s = Nn(e);
      for (l in s)
        !+l && !VC.test(l) && s[l] && typeof o[l] == "string" && l !== "0" && (o[l] = s[l]);
      o.top = r, o.left = i;
    } else
      o.cssText = e._stOrig;
    U.core.getCache(e).uncache = 1, n.appendChild(e);
  }
}, Ex = function(e, n, r) {
  var i = n, o = i;
  return function(l) {
    var s = Math.round(e());
    return s !== i && s !== o && Math.abs(s - i) > 3 && Math.abs(s - o) > 3 && (l = s, r && r()), o = i, i = l, l;
  };
}, uu = function(e, n, r) {
  var i = {};
  i[n.p] = "+=" + r, U.set(e, i);
}, zm = function(e, n) {
  var r = Di(e, n), i = "_scroll" + n.p2, o = function l(s, a, u, c, f) {
    var h = l.tween, d = a.onComplete, g = {};
    u = u || r();
    var p = Ex(r, u, function() {
      h.kill(), l.tween = 0;
    });
    return f = c && f || 0, c = c || s - u, h && h.kill(), a[i] = s, a.modifiers = g, g[i] = function() {
      return p(u + c * h.ratio + f * h.ratio * h.ratio);
    }, a.onUpdate = function() {
      ie.cache++, Wr();
    }, a.onComplete = function() {
      l.tween = 0, d && d.call(h);
    }, h = l.tween = U.to(e, a), h;
  };
  return e[i] = r, r.wheelHandler = function() {
    return o.tween && o.tween.kill() && (o.tween = 0);
  }, ot(e, "wheel", r.wheelHandler), oe.isTouch && ot(e, "touchmove", r.wheelHandler), o;
}, oe = /* @__PURE__ */ function() {
  function t(n, r) {
    Wo || t.register(U) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), Ah(this), this.init(n, r);
  }
  var e = t.prototype;
  return e.init = function(r, i) {
    if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !ds) {
      this.update = this.refresh = this.kill = vr;
      return;
    }
    r = Rm(gn(r) || zu(r) || r.nodeType ? {
      trigger: r
    } : r, lu);
    var o = r, l = o.onUpdate, s = o.toggleClass, a = o.id, u = o.onToggle, c = o.onRefresh, f = o.scrub, h = o.trigger, d = o.pin, g = o.pinSpacing, p = o.invalidateOnRefresh, _ = o.anticipatePin, v = o.onScrubComplete, m = o.onSnapComplete, y = o.once, x = o.snap, C = o.pinReparent, T = o.pinSpacer, E = o.containerAnimation, b = o.fastScrollEnd, O = o.preventOverlaps, P = r.horizontal || r.containerAnimation && r.horizontal !== !1 ? zt : et, j = !f && f !== 0, D = Yt(r.scroller || se), G = U.core.getCache(D), I = bo(D), $ = ("pinType" in r ? r.pinType : Pi(D, "pinType") || I && "fixed") === "fixed", W = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack], L = j && r.toggleActions.split(" "), M = "markers" in r ? r.markers : lu.markers, z = I ? 0 : parseFloat(Nn(D)["border" + P.p2 + zl]) || 0, k = this, Y = r.onRefreshInit && function() {
      return r.onRefreshInit(k);
    }, J = NC(D, I, P), nt = AC(D, I), fe = 0, de = 0, ye = 0, ue = Di(D, P), He, be, Tn, Ut, cr, me, Ye, Wt, an, R, un, Rr, Vi, Xe, Ui, Wi, Vl, ut, Be, Hn, Yn, Hi, Mr, fr, Ht, Yi, zo, $o, Xi, Zr, Jr, he, Gi, Xn, Gn, Qn, Qi, jo, Nr;
    if (k._startClamp = k._endClamp = !1, k._dir = P, _ *= 45, k.scroller = D, k.scroll = E ? E.time.bind(E) : ue, Ut = ue(), k.vars = r, i = i || r.animation, "refreshPriority" in r && (ux = 1, r.refreshPriority === -9999 && ($s = k)), G.tweenScroll = G.tweenScroll || {
      top: zm(D, et),
      left: zm(D, zt)
    }, k.tweenTo = He = G.tweenScroll[P.p], k.scrubDuration = function(V) {
      Gi = zu(V) && V, Gi ? he ? he.duration(V) : he = U.to(i, {
        ease: "expo",
        totalProgress: "+=0",
        duration: Gi,
        paused: !0,
        onComplete: function() {
          return v && v(k);
        }
      }) : (he && he.progress(1).kill(), he = 0);
    }, i && (i.vars.lazy = !1, i._initted && !k.isReverted || i.vars.immediateRender !== !1 && r.immediateRender !== !1 && i.duration() && i.render(0, !0, !0), k.animation = i.pause(), i.scrollTrigger = k, k.scrubDuration(f), Zr = 0, a || (a = i.vars.id)), x && ((!ro(x) || x.push) && (x = {
      snapTo: x
    }), "scrollBehavior" in Ee.style && U.set(I ? [Ee, nr] : D, {
      scrollBehavior: "auto"
    }), ie.forEach(function(V) {
      return $t(V) && V.target === (I ? Me.scrollingElement || nr : D) && (V.smooth = !1);
    }), Tn = $t(x.snapTo) ? x.snapTo : x.snapTo === "labels" ? DC(i) : x.snapTo === "labelsDirectional" ? zC(i) : x.directional !== !1 ? function(V, ce) {
      return _0(x.snapTo)(V, Dt() - de < 500 ? 0 : ce.direction);
    } : U.utils.snap(x.snapTo), Xn = x.duration || {
      min: 0.1,
      max: 2
    }, Xn = ro(Xn) ? sl(Xn.min, Xn.max) : sl(Xn, Xn), Gn = U.delayedCall(x.delay || Gi / 2 || 0.1, function() {
      var V = ue(), ce = Dt() - de < 500, X = He.tween;
      if ((ce || Math.abs(k.getVelocity()) < 10) && !X && !ef && fe !== V) {
        var ne = (V - me) / Xe, rt = i && !j ? i.totalProgress() : ne, pe = ce ? 0 : (rt - Jr) / (Dt() - Du) * 1e3 || 0, Ve = U.utils.clamp(-ne, 1 - ne, Bo(pe / 2) * pe / 0.185), Ot = ne + (x.inertia === !1 ? 0 : Ve), ct = sl(0, 1, Tn(Ot, k)), Oe = Math.round(me + ct * Xe), xe = x, qn = xe.onStart, Re = xe.onInterrupt, cn = xe.onComplete;
        if (V <= Ye && V >= me && Oe !== V) {
          if (X && !X._initted && X.data <= Bo(Oe - V))
            return;
          x.inertia === !1 && (Ve = ct - ne), He(Oe, {
            duration: Xn(Bo(Math.max(Bo(Ot - rt), Bo(ct - rt)) * 0.185 / pe / 0.05 || 0)),
            ease: x.ease || "power3",
            data: Bo(Oe - V),
            // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
            onInterrupt: function() {
              return Gn.restart(!0) && Re && Re(k);
            },
            onComplete: function() {
              k.update(), fe = ue(), Zr = Jr = i && !j ? i.totalProgress() : k.progress, m && m(k), cn && cn(k);
            }
          }, V, Ve * Xe, Oe - V - Ve * Xe), qn && qn(k, He.tween);
        }
      } else
        k.isActive && fe !== V && Gn.restart(!0);
    }).pause()), a && (Dh[a] = k), h = k.trigger = Yt(h || d !== !0 && d), Nr = h && h._gsap && h._gsap.stRevert, Nr && (Nr = Nr(k)), d = d === !0 ? h : Yt(d), gn(s) && (s = {
      targets: h,
      className: s
    }), d && (g === !1 || g === Mn || (g = !g && d.parentNode && d.parentNode.style && Nn(d.parentNode).display === "flex" ? !1 : Ge), k.pin = d, be = U.core.getCache(d), be.spacer ? Ui = be.pinState : (T && (T = Yt(T), T && !T.nodeType && (T = T.current || T.nativeElement), be.spacerIsNative = !!T, T && (be.spacerState = au(T))), be.spacer = ut = T || Me.createElement("div"), ut.classList.add("pin-spacer"), a && ut.classList.add("pin-spacer-" + a), be.pinState = Ui = au(d)), r.force3D !== !1 && U.set(d, {
      force3D: !0
    }), k.spacer = ut = be.spacer, Xi = Nn(d), fr = Xi[g + P.os2], Hn = U.getProperty(d), Yn = U.quickSetter(d, P.a, dt), ad(d, ut, Xi), Vl = au(d)), M) {
      Rr = ro(M) ? Rm(M, Mm) : Mm, R = su("scroller-start", a, D, P, Rr, 0), un = su("scroller-end", a, D, P, Rr, 0, R), Be = R["offset" + P.op.d2];
      var ee = Yt(Pi(D, "content") || D);
      Wt = this.markerStart = su("start", a, ee, P, Rr, Be, 0, E), an = this.markerEnd = su("end", a, ee, P, Rr, Be, 0, E), E && (jo = U.quickSetter([Wt, an], P.a, dt)), !$ && !(Tr.length && Pi(D, "fixedMarkers") === !0) && (IC(I ? Ee : D), U.set([R, un], {
        force3D: !0
      }), Yi = U.quickSetter(R, P.a, dt), $o = U.quickSetter(un, P.a, dt));
    }
    if (E) {
      var H = E.vars.onUpdate, ve = E.vars.onUpdateParams;
      E.eventCallback("onUpdate", function() {
        k.update(0, 0, 1), H && H.apply(E, ve || []);
      });
    }
    if (k.previous = function() {
      return te[te.indexOf(k) - 1];
    }, k.next = function() {
      return te[te.indexOf(k) + 1];
    }, k.revert = function(V, ce) {
      if (!ce)
        return k.kill(!0);
      var X = V !== !1 || !k.enabled, ne = St;
      X !== k.isReverted && (X && (Qn = Math.max(ue(), k.scroll.rec || 0), ye = k.progress, Qi = i && i.progress()), Wt && [Wt, an, R, un].forEach(function(rt) {
        return rt.style.display = X ? "none" : "block";
      }), X && (St = k, k.update(X)), d && (!C || !k.isActive) && (X ? LC(d, ut, Ui) : ad(d, ut, Nn(d), Ht)), X || k.update(X), St = ne, k.isReverted = X);
    }, k.refresh = function(V, ce, X, ne) {
      if (!((St || !k.enabled) && !ce)) {
        if (d && V && Fn) {
          ot(t, "scrollEnd", wx);
          return;
        }
        !It && Y && Y(k), St = k, He.tween && !X && (He.tween.kill(), He.tween = 0), he && he.pause(), p && i && i.revert({
          kill: !1
        }).invalidate(), k.isReverted || k.revert(!0, !0), k._subPinOffset = !1;
        var rt = J(), pe = nt(), Ve = E ? E.duration() : Vr(D, P), Ot = Xe <= 0.01, ct = 0, Oe = ne || 0, xe = ro(X) ? X.end : r.end, qn = r.endTrigger || h, Re = ro(X) ? X.start : r.start || (r.start === 0 || !h ? 0 : d ? "0 0" : "0 100%"), cn = k.pinnedContainer = r.pinnedContainer && Yt(r.pinnedContainer, k), dr = h && Math.max(0, te.indexOf(k)) || 0, fn = dr, ft, _t, qi, Aa, xt, Ze, hr, wf, q0, Ul, pr, Wl, Ia;
        for (M && ro(X) && (Wl = U.getProperty(R, P.p), Ia = U.getProperty(un, P.p)); fn--; )
          Ze = te[fn], Ze.end || Ze.refresh(0, 1) || (St = k), hr = Ze.pin, hr && (hr === h || hr === d || hr === cn) && !Ze.isReverted && (Ul || (Ul = []), Ul.unshift(Ze), Ze.revert(!0, !0)), Ze !== te[fn] && (dr--, fn--);
        for ($t(Re) && (Re = Re(k)), Re = Tm(Re, "start", k), me = Im(Re, h, rt, P, ue(), Wt, R, k, pe, z, $, Ve, E, k._startClamp && "_startClamp") || (d ? -1e-3 : 0), $t(xe) && (xe = xe(k)), gn(xe) && !xe.indexOf("+=") && (~xe.indexOf(" ") ? xe = (gn(Re) ? Re.split(" ")[0] : "") + xe : (ct = $u(xe.substr(2), rt), xe = gn(Re) ? Re : (E ? U.utils.mapRange(0, E.duration(), E.scrollTrigger.start, E.scrollTrigger.end, me) : me) + ct, qn = h)), xe = Tm(xe, "end", k), Ye = Math.max(me, Im(xe || (qn ? "100% 0" : Ve), qn, rt, P, ue() + ct, an, un, k, pe, z, $, Ve, E, k._endClamp && "_endClamp")) || -1e-3, ct = 0, fn = dr; fn--; )
          Ze = te[fn], hr = Ze.pin, hr && Ze.start - Ze._pinPush <= me && !E && Ze.end > 0 && (ft = Ze.end - (k._startClamp ? Math.max(0, Ze.start) : Ze.start), (hr === h && Ze.start - Ze._pinPush < me || hr === cn) && isNaN(Re) && (ct += ft * (1 - Ze.progress)), hr === d && (Oe += ft));
        if (me += ct, Ye += ct, k._startClamp && (k._startClamp += ct), k._endClamp && !It && (k._endClamp = Ye || -1e-3, Ye = Math.min(Ye, Vr(D, P))), Xe = Ye - me || (me -= 0.01) && 1e-3, Ot && (ye = U.utils.clamp(0, 1, U.utils.normalize(me, Ye, Qn))), k._pinPush = Oe, Wt && ct && (ft = {}, ft[P.a] = "+=" + ct, cn && (ft[P.p] = "-=" + ue()), U.set([Wt, an], ft)), d)
          ft = Nn(d), Aa = P === et, qi = ue(), Hi = parseFloat(Hn(P.a)) + Oe, !Ve && Ye > 1 && (pr = (I ? Me.scrollingElement || nr : D).style, pr = {
            style: pr,
            value: pr["overflow" + P.a.toUpperCase()]
          }, I && Nn(Ee)["overflow" + P.a.toUpperCase()] !== "scroll" && (pr.style["overflow" + P.a.toUpperCase()] = "scroll")), ad(d, ut, ft), Vl = au(d), _t = jr(d, !0), wf = $ && Di(D, Aa ? zt : et)(), g && (Ht = [g + P.os2, Xe + Oe + dt], Ht.t = ut, fn = g === Ge ? Ih(d, P) + Xe + Oe : 0, fn && Ht.push(P.d, fn + dt), xl(Ht), cn && te.forEach(function(Hl) {
            Hl.pin === cn && Hl.vars.pinSpacing !== !1 && (Hl._subPinOffset = !0);
          }), $ && ue(Qn)), $ && (xt = {
            top: _t.top + (Aa ? qi - me : wf) + dt,
            left: _t.left + (Aa ? wf : qi - me) + dt,
            boxSizing: "border-box",
            position: "fixed"
          }, xt[yo] = xt["max" + zl] = Math.ceil(_t.width) + dt, xt[_o] = xt["max" + y0] = Math.ceil(_t.height) + dt, xt[Mn] = xt[Mn + Ds] = xt[Mn + As] = xt[Mn + zs] = xt[Mn + Is] = "0", xt[Ge] = ft[Ge], xt[Ge + Ds] = ft[Ge + Ds], xt[Ge + As] = ft[Ge + As], xt[Ge + zs] = ft[Ge + zs], xt[Ge + Is] = ft[Ge + Is], Wi = BC(Ui, xt, C), It && ue(0)), i ? (q0 = i._initted, rd(1), i.render(i.duration(), !0, !0), Mr = Hn(P.a) - Hi + Xe + Oe, zo = Math.abs(Xe - Mr) > 1, $ && zo && Wi.splice(Wi.length - 2, 2), i.render(0, !0, !0), q0 || i.invalidate(!0), i.parent || i.totalTime(i.totalTime()), rd(0)) : Mr = Xe, pr && (pr.value ? pr.style["overflow" + P.a.toUpperCase()] = pr.value : pr.style.removeProperty("overflow-" + P.a));
        else if (h && ue() && !E)
          for (_t = h.parentNode; _t && _t !== Ee; )
            _t._pinOffset && (me -= _t._pinOffset, Ye -= _t._pinOffset), _t = _t.parentNode;
        Ul && Ul.forEach(function(Hl) {
          return Hl.revert(!1, !0);
        }), k.start = me, k.end = Ye, Ut = cr = It ? Qn : ue(), !E && !It && (Ut < Qn && ue(Qn), k.scroll.rec = 0), k.revert(!1, !0), de = Dt(), Gn && (fe = -1, Gn.restart(!0)), St = 0, i && j && (i._initted || Qi) && i.progress() !== Qi && i.progress(Qi || 0, !0).render(i.time(), !0, !0), (Ot || ye !== k.progress || E) && (i && !j && i.totalProgress(E && me < -1e-3 && !ye ? U.utils.normalize(me, Ye, 0) : ye, !0), k.progress = Ot || (Ut - me) / Xe === ye ? 0 : ye), d && g && (ut._pinOffset = Math.round(k.progress * Mr)), he && he.invalidate(), isNaN(Wl) || (Wl -= U.getProperty(R, P.p), Ia -= U.getProperty(un, P.p), uu(R, P, Wl), uu(Wt, P, Wl - (ne || 0)), uu(un, P, Ia), uu(an, P, Ia - (ne || 0))), Ot && !It && k.update(), c && !It && !Vi && (Vi = !0, c(k), Vi = !1);
      }
    }, k.getVelocity = function() {
      return (ue() - cr) / (Dt() - Du) * 1e3 || 0;
    }, k.endAnimation = function() {
      ns(k.callbackAnimation), i && (he ? he.progress(1) : i.paused() ? j || ns(i, k.direction < 0, 1) : ns(i, i.reversed()));
    }, k.labelToScroll = function(V) {
      return i && i.labels && (me || k.refresh() || me) + i.labels[V] / i.duration() * Xe || 0;
    }, k.getTrailing = function(V) {
      var ce = te.indexOf(k), X = k.direction > 0 ? te.slice(0, ce).reverse() : te.slice(ce + 1);
      return (gn(V) ? X.filter(function(ne) {
        return ne.vars.preventOverlaps === V;
      }) : X).filter(function(ne) {
        return k.direction > 0 ? ne.end <= me : ne.start >= Ye;
      });
    }, k.update = function(V, ce, X) {
      if (!(E && !X && !V)) {
        var ne = It === !0 ? Qn : k.scroll(), rt = V ? 0 : (ne - me) / Xe, pe = rt < 0 ? 0 : rt > 1 ? 1 : rt || 0, Ve = k.progress, Ot, ct, Oe, xe, qn, Re, cn, dr;
        if (ce && (cr = Ut, Ut = E ? ue() : ne, x && (Jr = Zr, Zr = i && !j ? i.totalProgress() : pe)), _ && !pe && d && !St && !nu && Fn && me < ne + (ne - cr) / (Dt() - Du) * _ && (pe = 1e-4), pe !== Ve && k.enabled) {
          if (Ot = k.isActive = !!pe && pe < 1, ct = !!Ve && Ve < 1, Re = Ot !== ct, qn = Re || !!pe != !!Ve, k.direction = pe > Ve ? 1 : -1, k.progress = pe, qn && !St && (Oe = pe && !Ve ? 0 : pe === 1 ? 1 : Ve === 1 ? 2 : 3, j && (xe = !Re && L[Oe + 1] !== "none" && L[Oe + 1] || L[Oe], dr = i && (xe === "complete" || xe === "reset" || xe in i))), O && (Re || dr) && (dr || f || !i) && ($t(O) ? O(k) : k.getTrailing(O).forEach(function(qi) {
            return qi.endAnimation();
          })), j || (he && !St && !nu ? (he._dp._time - he._start !== he._time && he.render(he._dp._time - he._start), he.resetTo ? he.resetTo("totalProgress", pe, i._tTime / i._tDur) : (he.vars.totalProgress = pe, he.invalidate().restart())) : i && i.totalProgress(pe, !!(St && (de || V)))), d) {
            if (V && g && (ut.style[g + P.os2] = fr), !$)
              Yn(hs(Hi + Mr * pe));
            else if (qn) {
              if (cn = !V && pe > Ve && Ye + 1 > ne && ne + 1 >= Vr(D, P), C)
                if (!V && (Ot || cn)) {
                  var fn = jr(d, !0), ft = ne - me;
                  Dm(d, Ee, fn.top + (P === et ? ft : 0) + dt, fn.left + (P === et ? 0 : ft) + dt);
                } else
                  Dm(d, ut);
              xl(Ot || cn ? Wi : Vl), zo && pe < 1 && Ot || Yn(Hi + (pe === 1 && !cn ? Mr : 0));
            }
          }
          x && !He.tween && !St && !nu && Gn.restart(!0), s && (Re || y && pe && (pe < 1 || !id)) && Cc(s.targets).forEach(function(qi) {
            return qi.classList[Ot || y ? "add" : "remove"](s.className);
          }), l && !j && !V && l(k), qn && !St ? (j && (dr && (xe === "complete" ? i.pause().totalProgress(1) : xe === "reset" ? i.restart(!0).pause() : xe === "restart" ? i.restart(!0) : i[xe]()), l && l(k)), (Re || !id) && (u && Re && ld(k, u), W[Oe] && ld(k, W[Oe]), y && (pe === 1 ? k.kill(!1, 1) : W[Oe] = 0), Re || (Oe = pe === 1 ? 1 : 3, W[Oe] && ld(k, W[Oe]))), b && !Ot && Math.abs(k.getVelocity()) > (zu(b) ? b : 2500) && (ns(k.callbackAnimation), he ? he.progress(1) : ns(i, xe === "reverse" ? 1 : !pe, 1))) : j && l && !St && l(k);
        }
        if ($o) {
          var _t = E ? ne / E.duration() * (E._caScrollDist || 0) : ne;
          Yi(_t + (R._isFlipped ? 1 : 0)), $o(_t);
        }
        jo && jo(-ne / E.duration() * (E._caScrollDist || 0));
      }
    }, k.enable = function(V, ce) {
      k.enabled || (k.enabled = !0, ot(D, "resize", ps), I || ot(D, "scroll", Vo), Y && ot(t, "refreshInit", Y), V !== !1 && (k.progress = ye = 0, Ut = cr = fe = ue()), ce !== !1 && k.refresh());
    }, k.getTween = function(V) {
      return V && He ? He.tween : he;
    }, k.setPositions = function(V, ce, X, ne) {
      if (E) {
        var rt = E.scrollTrigger, pe = E.duration(), Ve = rt.end - rt.start;
        V = rt.start + Ve * V / pe, ce = rt.start + Ve * ce / pe;
      }
      k.refresh(!1, !1, {
        start: bm(V, X && !!k._startClamp),
        end: bm(ce, X && !!k._endClamp)
      }, ne), k.update();
    }, k.adjustPinSpacing = function(V) {
      if (Ht && V) {
        var ce = Ht.indexOf(P.d) + 1;
        Ht[ce] = parseFloat(Ht[ce]) + V + dt, Ht[1] = parseFloat(Ht[1]) + V + dt, xl(Ht);
      }
    }, k.disable = function(V, ce) {
      if (k.enabled && (V !== !1 && k.revert(!0, !0), k.enabled = k.isActive = !1, ce || he && he.pause(), Qn = 0, be && (be.uncache = 1), Y && it(t, "refreshInit", Y), Gn && (Gn.pause(), He.tween && He.tween.kill() && (He.tween = 0)), !I)) {
        for (var X = te.length; X--; )
          if (te[X].scroller === D && te[X] !== k)
            return;
        it(D, "resize", ps), I || it(D, "scroll", Vo);
      }
    }, k.kill = function(V, ce) {
      k.disable(V, ce), he && !ce && he.kill(), a && delete Dh[a];
      var X = te.indexOf(k);
      X >= 0 && te.splice(X, 1), X === At && Lu > 0 && At--, X = 0, te.forEach(function(ne) {
        return ne.scroller === k.scroller && (X = 1);
      }), X || It || (k.scroll.rec = 0), i && (i.scrollTrigger = null, V && i.revert({
        kill: !1
      }), ce || i.kill()), Wt && [Wt, an, R, un].forEach(function(ne) {
        return ne.parentNode && ne.parentNode.removeChild(ne);
      }), $s === k && ($s = 0), d && (be && (be.uncache = 1), X = 0, te.forEach(function(ne) {
        return ne.pin === d && X++;
      }), X || (be.spacer = 0)), r.onKill && r.onKill(k);
    }, te.push(k), k.enable(!1, !1), Nr && Nr(k), i && i.add && !Xe) {
      var $e = k.update;
      k.update = function() {
        k.update = $e, me || Ye || k.refresh();
      }, U.delayedCall(0.01, k.update), Xe = 0.01, me = Ye = 0;
    } else
      k.refresh();
    d && jC();
  }, t.register = function(r) {
    return Wo || (U = r || gx(), px() && window.document && t.enable(), Wo = ds), Wo;
  }, t.defaults = function(r) {
    if (r)
      for (var i in r)
        lu[i] = r[i];
    return lu;
  }, t.disable = function(r, i) {
    ds = 0, te.forEach(function(l) {
      return l[i ? "kill" : "disable"](r);
    }), it(se, "wheel", Vo), it(Me, "scroll", Vo), clearInterval(tu), it(Me, "touchcancel", vr), it(Ee, "touchstart", vr), iu(it, Me, "pointerdown,touchstart,mousedown", Pm), iu(it, Me, "pointerup,touchend,mouseup", Om), Sc.kill(), ru(it);
    for (var o = 0; o < ie.length; o += 3)
      ou(it, ie[o], ie[o + 1]), ou(it, ie[o], ie[o + 2]);
  }, t.enable = function() {
    if (se = window, Me = document, nr = Me.documentElement, Ee = Me.body, U && (Cc = U.utils.toArray, sl = U.utils.clamp, Ah = U.core.context || vr, rd = U.core.suppressOverwrites || vr, p0 = se.history.scrollRestoration || "auto", zh = se.pageYOffset, U.core.globals("ScrollTrigger", t), Ee)) {
      ds = 1, _l = document.createElement("div"), _l.style.height = "100vh", _l.style.position = "absolute", Cx(), MC(), Ke.register(U), t.isTouch = Ke.isTouch, ri = Ke.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), ot(se, "wheel", Vo), ax = [se, Me, nr, Ee], U.matchMedia ? (t.matchMedia = function(a) {
        var u = U.matchMedia(), c;
        for (c in a)
          u.add(c, a[c]);
        return u;
      }, U.addEventListener("matchMediaInit", function() {
        return x0();
      }), U.addEventListener("matchMediaRevert", function() {
        return kx();
      }), U.addEventListener("matchMedia", function() {
        uo(0, 1), Oo("matchMedia");
      }), U.matchMedia("(orientation: portrait)", function() {
        return sd(), sd;
      })) : console.warn("Requires GSAP 3.11.0 or later"), sd(), ot(Me, "scroll", Vo);
      var r = Ee.style, i = r.borderTopStyle, o = U.core.Animation.prototype, l, s;
      for (o.revert || Object.defineProperty(o, "revert", {
        value: function() {
          return this.time(-0.01, !0);
        }
      }), r.borderTopStyle = "solid", l = jr(Ee), et.m = Math.round(l.top + et.sc()) || 0, zt.m = Math.round(l.left + zt.sc()) || 0, i ? r.borderTopStyle = i : r.removeProperty("border-top-style"), tu = setInterval(Nm, 250), U.delayedCall(0.5, function() {
        return nu = 0;
      }), ot(Me, "touchcancel", vr), ot(Ee, "touchstart", vr), iu(ot, Me, "pointerdown,touchstart,mousedown", Pm), iu(ot, Me, "pointerup,touchend,mouseup", Om), Nh = U.utils.checkPrefix("transform"), Fu.push(Nh), Wo = Dt(), Sc = U.delayedCall(0.2, uo).pause(), Ho = [Me, "visibilitychange", function() {
        var a = se.innerWidth, u = se.innerHeight;
        Me.hidden ? (Cm = a, Em = u) : (Cm !== a || Em !== u) && ps();
      }, Me, "DOMContentLoaded", uo, se, "load", uo, se, "resize", ps], ru(ot), te.forEach(function(a) {
        return a.enable(0, 1);
      }), s = 0; s < ie.length; s += 3)
        ou(it, ie[s], ie[s + 1]), ou(it, ie[s], ie[s + 2]);
    }
  }, t.config = function(r) {
    "limitCallbacks" in r && (id = !!r.limitCallbacks);
    var i = r.syncInterval;
    i && clearInterval(tu) || (tu = i) && setInterval(Nm, i), "ignoreMobileResize" in r && (fx = t.isTouch === 1 && r.ignoreMobileResize), "autoRefreshEvents" in r && (ru(it) || ru(ot, r.autoRefreshEvents || "none"), cx = (r.autoRefreshEvents + "").indexOf("resize") === -1);
  }, t.scrollerProxy = function(r, i) {
    var o = Yt(r), l = ie.indexOf(o), s = bo(o);
    ~l && ie.splice(l, s ? 6 : 2), i && (s ? Tr.unshift(se, i, Ee, i, nr, i) : Tr.unshift(o, i));
  }, t.clearMatchMedia = function(r) {
    te.forEach(function(i) {
      return i._ctx && i._ctx.query === r && i._ctx.kill(!0, !0);
    });
  }, t.isInViewport = function(r, i, o) {
    var l = (gn(r) ? Yt(r) : r).getBoundingClientRect(), s = l[o ? yo : _o] * i || 0;
    return o ? l.right - s > 0 && l.left + s < se.innerWidth : l.bottom - s > 0 && l.top + s < se.innerHeight;
  }, t.positionInViewport = function(r, i, o) {
    gn(r) && (r = Yt(r));
    var l = r.getBoundingClientRect(), s = l[o ? yo : _o], a = i == null ? s / 2 : i in Ec ? Ec[i] * s : ~i.indexOf("%") ? parseFloat(i) * s / 100 : parseFloat(i) || 0;
    return o ? (l.left + a) / se.innerWidth : (l.top + a) / se.innerHeight;
  }, t.killAll = function(r) {
    if (te.slice(0).forEach(function(o) {
      return o.vars.id !== "ScrollSmoother" && o.kill();
    }), r !== !0) {
      var i = Po.killAll || [];
      Po = {}, i.forEach(function(o) {
        return o();
      });
    }
  }, t;
}();
oe.version = "3.12.2";
oe.saveStyles = function(t) {
  return t ? Cc(t).forEach(function(e) {
    if (e && e.style) {
      var n = hn.indexOf(e);
      n >= 0 && hn.splice(n, 5), hn.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), U.core.getCache(e), Ah());
    }
  }) : hn;
};
oe.revert = function(t, e) {
  return x0(!t, e);
};
oe.create = function(t, e) {
  return new oe(t, e);
};
oe.refresh = function(t) {
  return t ? ps() : (Wo || oe.register()) && uo(!0);
};
oe.update = function(t) {
  return ++ie.cache && Wr(t === !0 ? 2 : 0);
};
oe.clearScrollMemory = Sx;
oe.maxScroll = function(t, e) {
  return Vr(t, e ? zt : et);
};
oe.getScrollFunc = function(t, e) {
  return Di(Yt(t), e ? zt : et);
};
oe.getById = function(t) {
  return Dh[t];
};
oe.getAll = function() {
  return te.filter(function(t) {
    return t.vars.id !== "ScrollSmoother";
  });
};
oe.isScrolling = function() {
  return !!Fn;
};
oe.snapDirectional = _0;
oe.addEventListener = function(t, e) {
  var n = Po[t] || (Po[t] = []);
  ~n.indexOf(e) || n.push(e);
};
oe.removeEventListener = function(t, e) {
  var n = Po[t], r = n && n.indexOf(e);
  r >= 0 && n.splice(r, 1);
};
oe.batch = function(t, e) {
  var n = [], r = {}, i = e.interval || 0.016, o = e.batchMax || 1e9, l = function(u, c) {
    var f = [], h = [], d = U.delayedCall(i, function() {
      c(f, h), f = [], h = [];
    }).pause();
    return function(g) {
      f.length || d.restart(!0), f.push(g.trigger), h.push(g), o <= f.length && d.progress(1);
    };
  }, s;
  for (s in e)
    r[s] = s.substr(0, 2) === "on" && $t(e[s]) && s !== "onRefreshInit" ? l(s, e[s]) : e[s];
  return $t(o) && (o = o(), ot(oe, "refresh", function() {
    return o = e.batchMax();
  })), Cc(t).forEach(function(a) {
    var u = {};
    for (s in r)
      u[s] = r[s];
    u.trigger = a, n.push(oe.create(u));
  }), n;
};
var $m = function(e, n, r, i) {
  return n > i ? e(i) : n < 0 && e(0), r > i ? (i - n) / (r - n) : r < 0 ? n / (n - r) : 1;
}, ud = function t(e, n) {
  n === !0 ? e.style.removeProperty("touch-action") : e.style.touchAction = n === !0 ? "auto" : n ? "pan-" + n + (Ke.isTouch ? " pinch-zoom" : "") : "none", e === nr && t(Ee, n);
}, cu = {
  auto: 1,
  scroll: 1
}, UC = function(e) {
  var n = e.event, r = e.target, i = e.axis, o = (n.changedTouches ? n.changedTouches[0] : n).target, l = o._gsap || U.core.getCache(o), s = Dt(), a;
  if (!l._isScrollT || s - l._isScrollT > 2e3) {
    for (; o && o !== Ee && (o.scrollHeight <= o.clientHeight && o.scrollWidth <= o.clientWidth || !(cu[(a = Nn(o)).overflowY] || cu[a.overflowX])); )
      o = o.parentNode;
    l._isScroll = o && o !== r && !bo(o) && (cu[(a = Nn(o)).overflowY] || cu[a.overflowX]), l._isScrollT = s;
  }
  (l._isScroll || i === "x") && (n.stopPropagation(), n._gsapAllow = !0);
}, Tx = function(e, n, r, i) {
  return Ke.create({
    target: e,
    capture: !0,
    debounce: !1,
    lockAxis: !0,
    type: n,
    onWheel: i = i && UC,
    onPress: i,
    onDrag: i,
    onScroll: i,
    onEnable: function() {
      return r && ot(Me, Ke.eventTypes[0], Lm, !1, !0);
    },
    onDisable: function() {
      return it(Me, Ke.eventTypes[0], Lm, !0);
    }
  });
}, WC = /(input|label|select|textarea)/i, jm, Lm = function(e) {
  var n = WC.test(e.target.tagName);
  (n || jm) && (e._gsapAllow = !0, jm = n);
}, HC = function(e) {
  ro(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
  var n = e, r = n.normalizeScrollX, i = n.momentum, o = n.allowNestedScroll, l = n.onRelease, s, a, u = Yt(e.target) || nr, c = U.core.globals().ScrollSmoother, f = c && c.get(), h = ri && (e.content && Yt(e.content) || f && e.content !== !1 && !f.smooth() && f.content()), d = Di(u, et), g = Di(u, zt), p = 1, _ = (Ke.isTouch && se.visualViewport ? se.visualViewport.scale * se.visualViewport.width : se.outerWidth) / se.innerWidth, v = 0, m = $t(i) ? function() {
    return i(s);
  } : function() {
    return i || 2.8;
  }, y, x, C = Tx(u, e.type, !0, o), T = function() {
    return x = !1;
  }, E = vr, b = vr, O = function() {
    a = Vr(u, et), b = sl(ri ? 1 : 0, a), r && (E = sl(0, Vr(u, zt))), y = xo;
  }, P = function() {
    h._gsap.y = hs(parseFloat(h._gsap.y) + d.offset) + "px", h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(h._gsap.y) + ", 0, 1)", d.offset = d.cacheID = 0;
  }, j = function() {
    if (x) {
      requestAnimationFrame(T);
      var M = hs(s.deltaY / 2), z = b(d.v - M);
      if (h && z !== d.v + d.offset) {
        d.offset = z - d.v;
        var k = hs((parseFloat(h && h._gsap.y) || 0) - d.offset);
        h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + k + ", 0, 1)", h._gsap.y = k + "px", d.cacheID = ie.cache, Wr();
      }
      return !0;
    }
    d.offset && P(), x = !0;
  }, D, G, I, $, W = function() {
    O(), D.isActive() && D.vars.scrollY > a && (d() > a ? D.progress(1) && d(a) : D.resetTo("scrollY", a));
  };
  return h && U.set(h, {
    y: "+=0"
  }), e.ignoreCheck = function(L) {
    return ri && L.type === "touchmove" && j() || p > 1.05 && L.type !== "touchstart" || s.isGesturing || L.touches && L.touches.length > 1;
  }, e.onPress = function() {
    x = !1;
    var L = p;
    p = hs((se.visualViewport && se.visualViewport.scale || 1) / _), D.pause(), L !== p && ud(u, p > 1.01 ? !0 : r ? !1 : "x"), G = g(), I = d(), O(), y = xo;
  }, e.onRelease = e.onGestureStart = function(L, M) {
    if (d.offset && P(), !M)
      $.restart(!0);
    else {
      ie.cache++;
      var z = m(), k, Y;
      r && (k = g(), Y = k + z * 0.05 * -L.velocityX / 0.227, z *= $m(g, k, Y, Vr(u, zt)), D.vars.scrollX = E(Y)), k = d(), Y = k + z * 0.05 * -L.velocityY / 0.227, z *= $m(d, k, Y, Vr(u, et)), D.vars.scrollY = b(Y), D.invalidate().duration(z).play(0.01), (ri && D.vars.scrollY >= a || k >= a - 1) && U.to({}, {
        onUpdate: W,
        duration: z
      });
    }
    l && l(L);
  }, e.onWheel = function() {
    D._ts && D.pause(), Dt() - v > 1e3 && (y = 0, v = Dt());
  }, e.onChange = function(L, M, z, k, Y) {
    if (xo !== y && O(), M && r && g(E(k[2] === M ? G + (L.startX - L.x) : g() + M - k[1])), z) {
      d.offset && P();
      var J = Y[2] === z, nt = J ? I + L.startY - L.y : d() + z - Y[1], fe = b(nt);
      J && nt !== fe && (I += fe - nt), d(fe);
    }
    (z || M) && Wr();
  }, e.onEnable = function() {
    ud(u, r ? !1 : "x"), oe.addEventListener("refresh", W), ot(se, "resize", W), d.smooth && (d.target.style.scrollBehavior = "auto", d.smooth = g.smooth = !1), C.enable();
  }, e.onDisable = function() {
    ud(u, !0), it(se, "resize", W), oe.removeEventListener("refresh", W), C.kill();
  }, e.lockAxis = e.lockAxis !== !1, s = new Ke(e), s.iOS = ri, ri && !d() && d(1), ri && U.ticker.add(vr), $ = s._dc, D = U.to(s, {
    ease: "power4",
    paused: !0,
    scrollX: r ? "+=0.1" : "+=0",
    scrollY: "+=0.1",
    modifiers: {
      scrollY: Ex(d, d(), function() {
        return D.pause();
      })
    },
    onUpdate: Wr,
    onComplete: $.vars.onComplete
  }), s;
};
oe.sort = function(t) {
  return te.sort(t || function(e, n) {
    return (e.vars.refreshPriority || 0) * -1e6 + e.start - (n.start + (n.vars.refreshPriority || 0) * -1e6);
  });
};
oe.observe = function(t) {
  return new Ke(t);
};
oe.normalizeScroll = function(t) {
  if (typeof t > "u")
    return dn;
  if (t === !0 && dn)
    return dn.enable();
  if (t === !1)
    return dn && dn.kill();
  var e = t instanceof Ke ? t : HC(t);
  return dn && dn.target === e.target && dn.kill(), bo(e.target) && (dn = e), e;
};
oe.core = {
  // smaller file size way to leverage in ScrollSmoother and Observer
  _getVelocityProp: Mh,
  _inputObserver: Tx,
  _scrollers: ie,
  _proxies: Tr,
  bridge: {
    // when normalizeScroll sets the scroll position (ss = setScroll)
    ss: function() {
      Fn || Oo("scrollStart"), Fn = Dt();
    },
    // a way to get the _refreshing value in Observer
    ref: function() {
      return St;
    }
  }
};
gx() && U.registerPlugin(oe);
Ii.registerPlugin(oe);
const Fm = S.createContext(null), Bm = (t) => {
  const e = S.useState(!1), n = S.useRef(null);
  var r = window.innerWidth;
  S.useEffect(() => {
    window.addEventListener("mouseover", (o) => {
    }), window.addEventListener("resize", () => {
      r == window.innerWidth || (r = window.innerWidth, window.location.reload());
    }), screen.availWidth < 500 || window.innerHeight < 500 ? e[1](!0) : e[1](!1);
  }, []);
  const i = S.useRef(null);
  return S.useContext(Fm), /* @__PURE__ */ w.jsx(Fm.Provider, { value: { viewent: i }, children: /* @__PURE__ */ w.jsxs("div", { className: "base", ref: n, style: { overflow: "hidden", padding: "0px", margin: "0px", textAlign: "center" }, children: [
    /* @__PURE__ */ w.jsx("div", { style: { width: "100%", height: e[0] ? "3em" : "12em" } }),
    /* @__PURE__ */ w.jsx(YC, { phonestate: e }),
    /* @__PURE__ */ w.jsx("style", { children: `
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
}, YC = (t) => {
  const e = S.useState(!1), n = t.phonestate, r = {
    display: "inline-block",
    textAlign: "left",
    backgroundColor: "rgba(255,250,250,1)",
    width: n[0] ? "95%" : "500px",
    padding: "0.1em",
    margin: "1px",
    overflow: "hidden"
  }, i = {
    padding: "5px",
    width: "50%",
    fontSize: "1.1em",
    borderRadius: "2px"
  }, o = {
    padding: "5px",
    width: (n[0], "90%"),
    resize: "vertical",
    borderRadius: "4px"
  }, l = S.useState({
    name: localStorage.getItem("name") === null ? "" : localStorage.getItem("name"),
    adress: localStorage.getItem("adress") === null ? "" : localStorage.getItem("adress"),
    limit: localStorage.getItem("limit") === null ? "" : localStorage.getItem("limit"),
    problem: localStorage.getItem("problem") === null ? "" : localStorage.getItem("problem"),
    purpose: localStorage.getItem("purpose") === null ? "" : localStorage.getItem("purpose"),
    etc: localStorage.getItem("etc") === null ? "" : localStorage.getItem("etc")
  });
  S.useEffect(() => {
  }, [l[0]]), S.useEffect(() => {
    setTimeout(() => {
      f();
    }, 100);
  }, []);
  const s = (d, g) => {
    if (g == "name") {
      var { name: p, ..._ } = l[0];
      l[1]({ [g]: d.value, ..._ }), localStorage.setItem(g, d.value);
    } else if (g == "adress") {
      var { adress: v, ..._ } = l[0];
      l[1]({ [g]: d.value, ..._ }), localStorage.setItem(g, d.value);
    } else if (g == "limit") {
      var { limit: m, ..._ } = l[0];
      l[1]({ [g]: d.value, ..._ }), localStorage.setItem(g, d.value);
    } else if (g == "problem") {
      var { problem: y, ..._ } = l[0];
      l[1]({ [g]: d.value, ..._ }), localStorage.setItem(g, d.value);
    } else if (g == "purpose") {
      var { purpose: x, ..._ } = l[0];
      l[1]({ [g]: d.value, ..._ }), localStorage.setItem(g, d.value);
    } else if (g == "etc") {
      var { etc: C, ..._ } = l[0];
      l[1]({ [g]: d.value, ..._ }), localStorage.setItem(g, d.value);
    }
    e[1](!e[0]);
  };
  var a = null, u = null;
  const c = (d, g, p, _, v, m, y, x, C, T) => {
    d.font = `${C}px Kosugi Maru`;
    for (let E = 0; E < y; E++)
      d.fillText(` ${T.substring(0 + m * E, m * (E + 1))}`, g, p + C * E);
    d.font = `${x}px Kosugi Maru`;
  }, f = () => {
    a = document.getElementById("canvas"), u = a.getContext("2d");
    var d = 100, g = 100, p = 500, _ = 2894, v = 4093;
    u.clearRect(0, 0, 2894, 4093), u.font = `${d}px Kosugi Maru`, u.fillStyle = "white", u.fillRect(0, 0, _, v), u.fillStyle = "black", u.fillText("簡易依頼書", g + d * 11, p - d * 1.5), u.fillText(`氏名　${l[0].name}`, g + d * 2, p + d * 1), u.fillText("連絡先", g + d * 1, p + d * 4), c(u, g + d * 5, p + d * 4, 0, 0, 128, 1, d, 70, l[0].adress), u.fillText("希望納期", g, p + d * 6), c(u, g + d * 5, p + d * 6, 0, 0, 64, 1, d, 70, l[0].limit), u.fillText("課題", g, p + d * 10), c(u, g + d * 2, p + d * 11, 0, 0, 32, 8, d, 66, l[0].problem), u.fillText("目的", g, p + d * 17), c(u, g + d * 2, p + d * 18, 0, 0, 32, 8, d, 66, l[0].purpose), u.fillText("その他", g, p + d * 25), c(u, g + d * 2, p + d * 26, 0, 0, 32, 10, d, 66, l[0].etc);
    let m = /* @__PURE__ */ new Date();
    u.fillText(`作成日:${m.getFullYear()}/${m.getUTCMonth() + 1}/${m.getDate()}`, _ - d * 8 - g, v - p * 0 - d * 1);
  };
  var h = "";
  return /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
    /* @__PURE__ */ w.jsxs("form", { onSubmit: null, style: {
      width: "100%",
      overflow: "hidden",
      textAlign: "center",
      boxSizing: "border-box",
      paddingTop: "1em",
      paddingBottom: "1em",
      paddingLeft: "1px",
      paddingRight: "1px"
    }, children: [
      /* @__PURE__ */ w.jsx("div", { style: {}, children: /* @__PURE__ */ w.jsxs("label", { text: "", style: { ...r }, children: [
        /* @__PURE__ */ w.jsx("div", { style: {}, children: "氏名" }),
        /* @__PURE__ */ w.jsx("input", { type: "text", style: { ...i }, name: "name", value: l[0].name, onChange: (d) => {
          s(d.target, d.target.name);
        } })
      ] }) }),
      /* @__PURE__ */ w.jsx("div", { children: /* @__PURE__ */ w.jsxs("label", { style: { ...r }, children: [
        /* @__PURE__ */ w.jsx("div", { children: "連絡先" }),
        /* @__PURE__ */ w.jsx("input", { type: "text", style: { ...i }, name: "adress", value: l[0].adress, onChange: (d) => {
          s(d.target, d.target.name);
        } })
      ] }) }),
      /* @__PURE__ */ w.jsx("div", { children: /* @__PURE__ */ w.jsxs("label", { style: { ...r }, children: [
        /* @__PURE__ */ w.jsx("div", { children: "希望納期" }),
        /* @__PURE__ */ w.jsx("input", { type: "text", style: { ...i }, name: "limit", value: l[0].limit, onChange: (d) => {
          s(d.target, d.target.name);
        } })
      ] }) }),
      /* @__PURE__ */ w.jsx("div", { children: /* @__PURE__ */ w.jsxs("label", { style: { ...r }, children: [
        /* @__PURE__ */ w.jsx("div", { children: "システム開発で解決したい課題" }),
        /* @__PURE__ */ w.jsx(
          "textarea",
          {
            style: { ...o },
            rows: n[0] ? "6" : "4",
            cols: "40",
            name: "problem",
            value: l[0].problem,
            onChange: (d) => {
              s(d.target, d.target.name);
            }
          }
        )
      ] }) }),
      /* @__PURE__ */ w.jsx("div", { children: /* @__PURE__ */ w.jsxs("label", { style: { ...r }, children: [
        /* @__PURE__ */ w.jsx("div", { children: "システム開発で達成したい目標" }),
        /* @__PURE__ */ w.jsx(
          "textarea",
          {
            style: { ...o },
            rows: n[0] ? "6" : "4",
            cols: "40",
            name: "purpose",
            value: l[0].purpose,
            onChange: (d) => {
              s(d.target, d.target.name);
            }
          }
        )
      ] }) }),
      /* @__PURE__ */ w.jsx("div", { children: /* @__PURE__ */ w.jsxs("label", { style: { ...r }, children: [
        /* @__PURE__ */ w.jsx("div", { children: "自由記述欄" }),
        /* @__PURE__ */ w.jsx(
          "textarea",
          {
            style: { ...o },
            rows: n[0] ? "6" : "4",
            cols: "40",
            value: l[0].etc,
            name: "etc",
            onChange: (d) => {
              s(d.target, d.target.name);
            }
          }
        )
      ] }) }),
      /* @__PURE__ */ w.jsx("div", { children: "プレビューで作成画像の確認。画像を保存でダウンロード実行。" }),
      /* @__PURE__ */ w.jsxs("div", { children: [
        /* @__PURE__ */ w.jsx(
          "input",
          {
            type: "submit",
            onClick: (d) => {
              d.preventDefault(), setTimeout(() => {
                f();
              }, 100);
            },
            value: "プレビュー"
          }
        ),
        /* @__PURE__ */ w.jsx(
          "input",
          {
            type: "submit",
            onClick: (d) => {
              d.preventDefault(), URL.revokeObjectURL(h);
              var g = document.getElementById("canvas");
              g.toBlob((p) => {
                const _ = document.createElement("img"), v = URL.createObjectURL(p);
                h = v, _.src = v;
                const m = document.createElement("a");
                m.href = v, m.download = "依頼書.png", m.click();
              });
            },
            value: "画像を保存"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ w.jsx("div", { style: { margin: "1em", textAlign: "center", backgroundColor: "" }, children: /* @__PURE__ */ w.jsx("canvas", { style: {
      backgroundColor: "rgba(211,211,211,1)",
      border: "solid 2px black",
      width: n[0] ? "100%" : "30%",
      display: "inline-block"
    }, width: "2894", height: "4093", id: "canvas" }) }),
    /* @__PURE__ */ w.jsx("br", {}),
    /* @__PURE__ */ w.jsx("br", {}),
    /* @__PURE__ */ w.jsx("br", {}),
    /* @__PURE__ */ w.jsx("br", {}),
    /* @__PURE__ */ w.jsx("br", {}),
    /* @__PURE__ */ w.jsx("br", {}),
    /* @__PURE__ */ w.jsx("br", {}),
    /* @__PURE__ */ w.jsx("br", {}),
    /* @__PURE__ */ w.jsx("br", {}),
    /* @__PURE__ */ w.jsx("br", {}),
    /* @__PURE__ */ w.jsx("br", {}),
    /* @__PURE__ */ w.jsx("br", {}),
    /* @__PURE__ */ w.jsx("br", {})
  ] });
};
var w0 = Oa(), q = (t) => Pa(t, w0), k0 = Oa();
q.write = (t) => Pa(t, k0);
var tf = Oa();
q.onStart = (t) => Pa(t, tf);
var S0 = Oa();
q.onFrame = (t) => Pa(t, S0);
var C0 = Oa();
q.onFinish = (t) => Pa(t, C0);
var wl = [];
q.setTimeout = (t, e) => {
  let n = q.now() + e, r = () => {
    let o = wl.findIndex((l) => l.cancel == r);
    ~o && wl.splice(o, 1), mi -= ~o ? 1 : 0;
  }, i = { time: n, handler: t, cancel: r };
  return wl.splice(bx(n), 0, i), mi += 1, Px(), i;
};
var bx = (t) => ~(~wl.findIndex((e) => e.time > t) || ~wl.length);
q.cancel = (t) => {
  tf.delete(t), S0.delete(t), C0.delete(t), w0.delete(t), k0.delete(t);
};
q.sync = (t) => {
  jh = !0, q.batchedUpdates(t), jh = !1;
};
q.throttle = (t) => {
  let e;
  function n() {
    try {
      t(...e);
    } finally {
      e = null;
    }
  }
  function r(...i) {
    e = i, q.onStart(n);
  }
  return r.handler = t, r.cancel = () => {
    tf.delete(n), e = null;
  }, r;
};
var E0 = typeof window < "u" ? window.requestAnimationFrame : () => {
};
q.use = (t) => E0 = t;
q.now = typeof performance < "u" ? () => performance.now() : Date.now;
q.batchedUpdates = (t) => t();
q.catch = console.error;
q.frameLoop = "always";
q.advance = () => {
  q.frameLoop !== "demand" ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : Rx();
};
var gi = -1, mi = 0, jh = !1;
function Pa(t, e) {
  jh ? (e.delete(t), t(0)) : (e.add(t), Px());
}
function Px() {
  gi < 0 && (gi = 0, q.frameLoop !== "demand" && E0(Ox));
}
function XC() {
  gi = -1;
}
function Ox() {
  ~gi && (E0(Ox), q.batchedUpdates(Rx));
}
function Rx() {
  let t = gi;
  gi = q.now();
  let e = bx(gi);
  if (e && (Mx(wl.splice(0, e), (n) => n.handler()), mi -= e), !mi) {
    XC();
    return;
  }
  tf.flush(), w0.flush(t ? Math.min(64, gi - t) : 16.667), S0.flush(), k0.flush(), C0.flush();
}
function Oa() {
  let t = /* @__PURE__ */ new Set(), e = t;
  return { add(n) {
    mi += e == t && !t.has(n) ? 1 : 0, t.add(n);
  }, delete(n) {
    return mi -= e == t && t.has(n) ? 1 : 0, t.delete(n);
  }, flush(n) {
    e.size && (t = /* @__PURE__ */ new Set(), mi -= e.size, Mx(e, (r) => r(n) && t.add(r)), mi += t.size, e = t);
  } };
}
function Mx(t, e) {
  t.forEach((n) => {
    try {
      e(n);
    } catch (r) {
      q.catch(r);
    }
  });
}
var GC = Object.defineProperty, QC = (t, e) => {
  for (var n in e)
    GC(t, n, { get: e[n], enumerable: !0 });
}, ur = {};
QC(ur, { assign: () => KC, colors: () => Oi, createStringInterpolator: () => b0, skipAnimation: () => Ax, to: () => Nx, willAdvance: () => P0 });
function Lh() {
}
var qC = (t, e, n) => Object.defineProperty(t, e, { value: n, writable: !0, configurable: !0 }), N = { arr: Array.isArray, obj: (t) => !!t && t.constructor.name === "Object", fun: (t) => typeof t == "function", str: (t) => typeof t == "string", num: (t) => typeof t == "number", und: (t) => t === void 0 };
function Dr(t, e) {
  if (N.arr(t)) {
    if (!N.arr(e) || t.length !== e.length)
      return !1;
    for (let n = 0; n < t.length; n++)
      if (t[n] !== e[n])
        return !1;
    return !0;
  }
  return t === e;
}
var Q = (t, e) => t.forEach(e);
function Pr(t, e, n) {
  if (N.arr(t)) {
    for (let r = 0; r < t.length; r++)
      e.call(n, t[r], `${r}`);
    return;
  }
  for (let r in t)
    t.hasOwnProperty(r) && e.call(n, t[r], r);
}
var jt = (t) => N.und(t) ? [] : N.arr(t) ? t : [t];
function js(t, e) {
  if (t.size) {
    let n = Array.from(t);
    t.clear(), Q(n, e);
  }
}
var gs = (t, ...e) => js(t, (n) => n(...e)), T0 = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent), b0, Nx, Oi = null, Ax = !1, P0 = Lh, KC = (t) => {
  t.to && (Nx = t.to), t.now && (q.now = t.now), t.colors !== void 0 && (Oi = t.colors), t.skipAnimation != null && (Ax = t.skipAnimation), t.createStringInterpolator && (b0 = t.createStringInterpolator), t.requestAnimationFrame && q.use(t.requestAnimationFrame), t.batchedUpdates && (q.batchedUpdates = t.batchedUpdates), t.willAdvance && (P0 = t.willAdvance), t.frameLoop && (q.frameLoop = t.frameLoop);
}, Ls = /* @__PURE__ */ new Set(), In = [], cd = [], Tc = 0, nf = { get idle() {
  return !Ls.size && !In.length;
}, start(t) {
  Tc > t.priority ? (Ls.add(t), q.onStart(ZC)) : (Ix(t), q(Fh));
}, advance: Fh, sort(t) {
  if (Tc)
    q.onFrame(() => nf.sort(t));
  else {
    let e = In.indexOf(t);
    ~e && (In.splice(e, 1), Dx(t));
  }
}, clear() {
  In = [], Ls.clear();
} };
function ZC() {
  Ls.forEach(Ix), Ls.clear(), q(Fh);
}
function Ix(t) {
  In.includes(t) || Dx(t);
}
function Dx(t) {
  In.splice(JC(In, (e) => e.priority > t.priority), 0, t);
}
function Fh(t) {
  let e = cd;
  for (let n = 0; n < In.length; n++) {
    let r = In[n];
    Tc = r.priority, r.idle || (P0(r), r.advance(t), r.idle || e.push(r));
  }
  return Tc = 0, cd = In, cd.length = 0, In = e, In.length > 0;
}
function JC(t, e) {
  let n = t.findIndex(e);
  return n < 0 ? t.length : n;
}
var eE = (t, e, n) => Math.min(Math.max(n, t), e), tE = { transparent: 0, aliceblue: 4042850303, antiquewhite: 4209760255, aqua: 16777215, aquamarine: 2147472639, azure: 4043309055, beige: 4126530815, bisque: 4293182719, black: 255, blanchedalmond: 4293643775, blue: 65535, blueviolet: 2318131967, brown: 2771004159, burlywood: 3736635391, burntsienna: 3934150143, cadetblue: 1604231423, chartreuse: 2147418367, chocolate: 3530104575, coral: 4286533887, cornflowerblue: 1687547391, cornsilk: 4294499583, crimson: 3692313855, cyan: 16777215, darkblue: 35839, darkcyan: 9145343, darkgoldenrod: 3095792639, darkgray: 2846468607, darkgreen: 6553855, darkgrey: 2846468607, darkkhaki: 3182914559, darkmagenta: 2332068863, darkolivegreen: 1433087999, darkorange: 4287365375, darkorchid: 2570243327, darkred: 2332033279, darksalmon: 3918953215, darkseagreen: 2411499519, darkslateblue: 1211993087, darkslategray: 793726975, darkslategrey: 793726975, darkturquoise: 13554175, darkviolet: 2483082239, deeppink: 4279538687, deepskyblue: 12582911, dimgray: 1768516095, dimgrey: 1768516095, dodgerblue: 512819199, firebrick: 2988581631, floralwhite: 4294635775, forestgreen: 579543807, fuchsia: 4278255615, gainsboro: 3705462015, ghostwhite: 4177068031, gold: 4292280575, goldenrod: 3668254975, gray: 2155905279, green: 8388863, greenyellow: 2919182335, grey: 2155905279, honeydew: 4043305215, hotpink: 4285117695, indianred: 3445382399, indigo: 1258324735, ivory: 4294963455, khaki: 4041641215, lavender: 3873897215, lavenderblush: 4293981695, lawngreen: 2096890111, lemonchiffon: 4294626815, lightblue: 2916673279, lightcoral: 4034953471, lightcyan: 3774873599, lightgoldenrodyellow: 4210742015, lightgray: 3553874943, lightgreen: 2431553791, lightgrey: 3553874943, lightpink: 4290167295, lightsalmon: 4288707327, lightseagreen: 548580095, lightskyblue: 2278488831, lightslategray: 2005441023, lightslategrey: 2005441023, lightsteelblue: 2965692159, lightyellow: 4294959359, lime: 16711935, limegreen: 852308735, linen: 4210091775, magenta: 4278255615, maroon: 2147483903, mediumaquamarine: 1724754687, mediumblue: 52735, mediumorchid: 3126187007, mediumpurple: 2473647103, mediumseagreen: 1018393087, mediumslateblue: 2070474495, mediumspringgreen: 16423679, mediumturquoise: 1221709055, mediumvioletred: 3340076543, midnightblue: 421097727, mintcream: 4127193855, mistyrose: 4293190143, moccasin: 4293178879, navajowhite: 4292783615, navy: 33023, oldlace: 4260751103, olive: 2155872511, olivedrab: 1804477439, orange: 4289003775, orangered: 4282712319, orchid: 3664828159, palegoldenrod: 4008225535, palegreen: 2566625535, paleturquoise: 2951671551, palevioletred: 3681588223, papayawhip: 4293907967, peachpuff: 4292524543, peru: 3448061951, pink: 4290825215, plum: 3718307327, powderblue: 2967529215, purple: 2147516671, rebeccapurple: 1714657791, red: 4278190335, rosybrown: 3163525119, royalblue: 1097458175, saddlebrown: 2336560127, salmon: 4202722047, sandybrown: 4104413439, seagreen: 780883967, seashell: 4294307583, sienna: 2689740287, silver: 3233857791, skyblue: 2278484991, slateblue: 1784335871, slategray: 1887473919, slategrey: 1887473919, snow: 4294638335, springgreen: 16744447, steelblue: 1182971135, tan: 3535047935, teal: 8421631, thistle: 3636451583, tomato: 4284696575, turquoise: 1088475391, violet: 4001558271, wheat: 4125012991, white: 4294967295, whitesmoke: 4126537215, yellow: 4294902015, yellowgreen: 2597139199 }, ir = "[-+]?\\d*\\.?\\d+", bc = ir + "%";
function rf(...t) {
  return "\\(\\s*(" + t.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var nE = new RegExp("rgb" + rf(ir, ir, ir)), rE = new RegExp("rgba" + rf(ir, ir, ir, ir)), iE = new RegExp("hsl" + rf(ir, bc, bc)), oE = new RegExp("hsla" + rf(ir, bc, bc, ir)), lE = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, sE = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, aE = /^#([0-9a-fA-F]{6})$/, uE = /^#([0-9a-fA-F]{8})$/;
function cE(t) {
  let e;
  return typeof t == "number" ? t >>> 0 === t && t >= 0 && t <= 4294967295 ? t : null : (e = aE.exec(t)) ? parseInt(e[1] + "ff", 16) >>> 0 : Oi && Oi[t] !== void 0 ? Oi[t] : (e = nE.exec(t)) ? (Uo(e[1]) << 24 | Uo(e[2]) << 16 | Uo(e[3]) << 8 | 255) >>> 0 : (e = rE.exec(t)) ? (Uo(e[1]) << 24 | Uo(e[2]) << 16 | Uo(e[3]) << 8 | Wm(e[4])) >>> 0 : (e = lE.exec(t)) ? parseInt(e[1] + e[1] + e[2] + e[2] + e[3] + e[3] + "ff", 16) >>> 0 : (e = uE.exec(t)) ? parseInt(e[1], 16) >>> 0 : (e = sE.exec(t)) ? parseInt(e[1] + e[1] + e[2] + e[2] + e[3] + e[3] + e[4] + e[4], 16) >>> 0 : (e = iE.exec(t)) ? (Vm(Um(e[1]), fu(e[2]), fu(e[3])) | 255) >>> 0 : (e = oE.exec(t)) ? (Vm(Um(e[1]), fu(e[2]), fu(e[3])) | Wm(e[4])) >>> 0 : null;
}
function fd(t, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
}
function Vm(t, e, n) {
  let r = n < 0.5 ? n * (1 + e) : n + e - n * e, i = 2 * n - r, o = fd(i, r, t + 1 / 3), l = fd(i, r, t), s = fd(i, r, t - 1 / 3);
  return Math.round(o * 255) << 24 | Math.round(l * 255) << 16 | Math.round(s * 255) << 8;
}
function Uo(t) {
  let e = parseInt(t, 10);
  return e < 0 ? 0 : e > 255 ? 255 : e;
}
function Um(t) {
  return (parseFloat(t) % 360 + 360) % 360 / 360;
}
function Wm(t) {
  let e = parseFloat(t);
  return e < 0 ? 0 : e > 1 ? 255 : Math.round(e * 255);
}
function fu(t) {
  let e = parseFloat(t);
  return e < 0 ? 0 : e > 100 ? 1 : e / 100;
}
function Hm(t) {
  let e = cE(t);
  if (e === null)
    return t;
  e = e || 0;
  let n = (e & 4278190080) >>> 24, r = (e & 16711680) >>> 16, i = (e & 65280) >>> 8, o = (e & 255) / 255;
  return `rgba(${n}, ${r}, ${i}, ${o})`;
}
var pa = (t, e, n) => {
  if (N.fun(t))
    return t;
  if (N.arr(t))
    return pa({ range: t, output: e, extrapolate: n });
  if (N.str(t.output[0]))
    return b0(t);
  let r = t, i = r.output, o = r.range || [0, 1], l = r.extrapolateLeft || r.extrapolate || "extend", s = r.extrapolateRight || r.extrapolate || "extend", a = r.easing || ((u) => u);
  return (u) => {
    let c = dE(u, o);
    return fE(u, o[c], o[c + 1], i[c], i[c + 1], a, l, s, r.map);
  };
};
function fE(t, e, n, r, i, o, l, s, a) {
  let u = a ? a(t) : t;
  if (u < e) {
    if (l === "identity")
      return u;
    l === "clamp" && (u = e);
  }
  if (u > n) {
    if (s === "identity")
      return u;
    s === "clamp" && (u = n);
  }
  return r === i ? r : e === n ? t <= e ? r : i : (e === -1 / 0 ? u = -u : n === 1 / 0 ? u = u - e : u = (u - e) / (n - e), u = o(u), r === -1 / 0 ? u = -u : i === 1 / 0 ? u = u + r : u = u * (i - r) + r, u);
}
function dE(t, e) {
  for (var n = 1; n < e.length - 1 && !(e[n] >= t); ++n)
    ;
  return n - 1;
}
var hE = (t, e = "end") => (n) => {
  n = e === "end" ? Math.min(n, 0.999) : Math.max(n, 1e-3);
  let r = n * t, i = e === "end" ? Math.floor(r) : Math.ceil(r);
  return eE(0, 1, i / t);
}, Pc = 1.70158, du = Pc * 1.525, Ym = Pc + 1, Xm = 2 * Math.PI / 3, Gm = 2 * Math.PI / 4.5, hu = (t) => t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375, zx = { linear: (t) => t, easeInQuad: (t) => t * t, easeOutQuad: (t) => 1 - (1 - t) * (1 - t), easeInOutQuad: (t) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2, easeInCubic: (t) => t * t * t, easeOutCubic: (t) => 1 - Math.pow(1 - t, 3), easeInOutCubic: (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2, easeInQuart: (t) => t * t * t * t, easeOutQuart: (t) => 1 - Math.pow(1 - t, 4), easeInOutQuart: (t) => t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2, easeInQuint: (t) => t * t * t * t * t, easeOutQuint: (t) => 1 - Math.pow(1 - t, 5), easeInOutQuint: (t) => t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2, easeInSine: (t) => 1 - Math.cos(t * Math.PI / 2), easeOutSine: (t) => Math.sin(t * Math.PI / 2), easeInOutSine: (t) => -(Math.cos(Math.PI * t) - 1) / 2, easeInExpo: (t) => t === 0 ? 0 : Math.pow(2, 10 * t - 10), easeOutExpo: (t) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t), easeInOutExpo: (t) => t === 0 ? 0 : t === 1 ? 1 : t < 0.5 ? Math.pow(2, 20 * t - 10) / 2 : (2 - Math.pow(2, -20 * t + 10)) / 2, easeInCirc: (t) => 1 - Math.sqrt(1 - Math.pow(t, 2)), easeOutCirc: (t) => Math.sqrt(1 - Math.pow(t - 1, 2)), easeInOutCirc: (t) => t < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * t, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * t + 2, 2)) + 1) / 2, easeInBack: (t) => Ym * t * t * t - Pc * t * t, easeOutBack: (t) => 1 + Ym * Math.pow(t - 1, 3) + Pc * Math.pow(t - 1, 2), easeInOutBack: (t) => t < 0.5 ? Math.pow(2 * t, 2) * ((du + 1) * 2 * t - du) / 2 : (Math.pow(2 * t - 2, 2) * ((du + 1) * (t * 2 - 2) + du) + 2) / 2, easeInElastic: (t) => t === 0 ? 0 : t === 1 ? 1 : -Math.pow(2, 10 * t - 10) * Math.sin((t * 10 - 10.75) * Xm), easeOutElastic: (t) => t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * Xm) + 1, easeInOutElastic: (t) => t === 0 ? 0 : t === 1 ? 1 : t < 0.5 ? -(Math.pow(2, 20 * t - 10) * Math.sin((20 * t - 11.125) * Gm)) / 2 : Math.pow(2, -20 * t + 10) * Math.sin((20 * t - 11.125) * Gm) / 2 + 1, easeInBounce: (t) => 1 - hu(1 - t), easeOutBounce: hu, easeInOutBounce: (t) => t < 0.5 ? (1 - hu(1 - 2 * t)) / 2 : (1 + hu(2 * t - 1)) / 2, steps: hE }, $l = Symbol.for("FluidValue.get"), Ro = Symbol.for("FluidValue.observers"), An = (t) => !!(t && t[$l]), Xt = (t) => t && t[$l] ? t[$l]() : t, Qm = (t) => t[Ro] || null;
function pE(t, e) {
  t.eventObserved ? t.eventObserved(e) : t(e);
}
function ga(t, e) {
  let n = t[Ro];
  n && n.forEach((r) => {
    pE(r, e);
  });
}
var Z3, J3, F1, $x = (F1 = class {
  constructor(t) {
    F(this, Z3);
    F(this, J3);
    if (!t && !(t = this.get))
      throw Error("Unknown getter");
    gE(this, t);
  }
}, Z3 = $l, J3 = Ro, F1), gE = (t, e) => jx(t, $l, e);
function Bl(t, e) {
  if (t[$l]) {
    let n = t[Ro];
    n || jx(t, Ro, n = /* @__PURE__ */ new Set()), n.has(e) || (n.add(e), t.observerAdded && t.observerAdded(n.size, e));
  }
  return e;
}
function ma(t, e) {
  let n = t[Ro];
  if (n && n.has(e)) {
    let r = n.size - 1;
    r ? n.delete(e) : t[Ro] = null, t.observerRemoved && t.observerRemoved(r, e);
  }
}
var jx = (t, e, n) => Object.defineProperty(t, e, { value: n, writable: !0, configurable: !0 }), Vu = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, mE = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, qm = new RegExp(`(${Vu.source})(%|[a-z]+)`, "i"), vE = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, of = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/, Lx = (t) => {
  let [e, n] = yE(t);
  if (!e || T0())
    return t;
  let r = window.getComputedStyle(document.documentElement).getPropertyValue(e);
  return r ? r.trim() : n && n.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(n) || t : n && of.test(n) ? Lx(n) : n || t;
}, yE = (t) => {
  let e = of.exec(t);
  if (!e)
    return [,];
  let [, n, r] = e;
  return [n, r];
}, dd, _E = (t, e, n, r, i) => `rgba(${Math.round(e)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`, Fx = (t) => {
  dd || (dd = Oi ? new RegExp(`(${Object.keys(Oi).join("|")})(?!\\w)`, "g") : /^\b$/);
  let e = t.output.map((i) => Xt(i).replace(of, Lx).replace(mE, Hm).replace(dd, Hm)), n = e.map((i) => i.match(Vu).map(Number)), r = n[0].map((i, o) => n.map((l) => {
    if (!(o in l))
      throw Error('The arity of each "output" value must be equal');
    return l[o];
  })).map((i) => pa({ ...t, output: i }));
  return (i) => {
    var s;
    let o = !qm.test(e[0]) && ((s = e.find((a) => qm.test(a))) == null ? void 0 : s.replace(Vu, "")), l = 0;
    return e[0].replace(Vu, () => `${r[l++](i)}${o || ""}`).replace(vE, _E);
  };
}, O0 = "react-spring: ", Bx = (t) => {
  let e = t, n = !1;
  if (typeof e != "function")
    throw new TypeError(`${O0}once requires a function parameter`);
  return (...r) => {
    n || (e(...r), n = !0);
  };
}, xE = Bx(console.warn);
function wE() {
  xE(`${O0}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
var kE = Bx(console.warn);
function SE() {
  kE(`${O0}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
}
function lf(t) {
  return N.str(t) && (t[0] == "#" || /\d/.test(t) || !T0() && of.test(t) || t in (Oi || {}));
}
var co = T0() ? S.useEffect : S.useLayoutEffect, CE = () => {
  let t = S.useRef(!1);
  return co(() => (t.current = !0, () => {
    t.current = !1;
  }), []), t;
};
function R0() {
  let t = S.useState()[1], e = CE();
  return () => {
    e.current && t(Math.random());
  };
}
function EE(t, e) {
  let [n] = S.useState(() => ({ inputs: e, result: t() })), r = S.useRef(), i = r.current, o = i;
  return o ? e && o.inputs && TE(e, o.inputs) || (o = { inputs: e, result: t() }) : o = n, S.useEffect(() => {
    r.current = o, i == n && (n.inputs = n.result = void 0);
  }, [o]), o.result;
}
function TE(t, e) {
  if (t.length !== e.length)
    return !1;
  for (let n = 0; n < t.length; n++)
    if (t[n] !== e[n])
      return !1;
  return !0;
}
var M0 = (t) => S.useEffect(t, bE), bE = [];
function Bh(t) {
  let e = S.useRef();
  return S.useEffect(() => {
    e.current = t;
  }), e.current;
}
var va = Symbol.for("Animated:node"), PE = (t) => !!t && t[va] === t, yr = (t) => t && t[va], N0 = (t, e) => qC(t, va, e), sf = (t) => t && t[va] && t[va].getPayload(), Vx = class {
  constructor() {
    F(this, "payload");
    N0(this, this);
  }
  getPayload() {
    return this.payload || [];
  }
}, Ra = class extends Vx {
  constructor(e) {
    super();
    F(this, "done", !0);
    F(this, "elapsedTime");
    F(this, "lastPosition");
    F(this, "lastVelocity");
    F(this, "v0");
    F(this, "durationProgress", 0);
    this._value = e, N.num(this._value) && (this.lastPosition = this._value);
  }
  static create(e) {
    return new Ra(e);
  }
  getPayload() {
    return [this];
  }
  getValue() {
    return this._value;
  }
  setValue(e, n) {
    return N.num(e) && (this.lastPosition = e, n && (e = Math.round(e / n) * n, this.done && (this.lastPosition = e))), this._value === e ? !1 : (this._value = e, !0);
  }
  reset() {
    let { done: e } = this;
    this.done = !1, N.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null);
  }
}, ya = class extends Ra {
  constructor(e) {
    super(0);
    F(this, "_string", null);
    F(this, "_toString");
    this._toString = pa({ output: [e, e] });
  }
  static create(e) {
    return new ya(e);
  }
  getValue() {
    return this._string ?? (this._string = this._toString(this._value));
  }
  setValue(e) {
    if (N.str(e)) {
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
    e && (this._toString = pa({ output: [this.getValue(), e] })), this._value = 0, super.reset();
  }
}, Oc = { dependencies: null }, af = class extends Vx {
  constructor(t) {
    super(), this.source = t, this.setValue(t);
  }
  getValue(t) {
    let e = {};
    return Pr(this.source, (n, r) => {
      PE(n) ? e[r] = n.getValue(t) : An(n) ? e[r] = Xt(n) : t || (e[r] = n);
    }), e;
  }
  setValue(t) {
    this.source = t, this.payload = this._makePayload(t);
  }
  reset() {
    this.payload && Q(this.payload, (t) => t.reset());
  }
  _makePayload(t) {
    if (t) {
      let e = /* @__PURE__ */ new Set();
      return Pr(t, this._addToPayload, e), Array.from(e);
    }
  }
  _addToPayload(t) {
    Oc.dependencies && An(t) && Oc.dependencies.add(t);
    let e = sf(t);
    e && Q(e, (n) => this.add(n));
  }
}, Ux = class extends af {
  constructor(e) {
    super(e);
  }
  static create(e) {
    return new Ux(e);
  }
  getValue() {
    return this.source.map((e) => e.getValue());
  }
  setValue(e) {
    let n = this.getPayload();
    return e.length == n.length ? n.map((r, i) => r.setValue(e[i])).some(Boolean) : (super.setValue(e.map(OE)), !0);
  }
};
function OE(t) {
  return (lf(t) ? ya : Ra).create(t);
}
function Vh(t) {
  let e = yr(t);
  return e ? e.constructor : N.arr(t) ? Ux : lf(t) ? ya : Ra;
}
var Km = (t, e) => {
  let n = !N.fun(t) || t.prototype && t.prototype.isReactComponent;
  return S.forwardRef((r, i) => {
    let o = S.useRef(null), l = n && S.useCallback((g) => {
      o.current = NE(i, g);
    }, [i]), [s, a] = ME(r, e), u = R0(), c = () => {
      let g = o.current;
      n && !g || (g ? e.applyAnimatedValues(g, s.getValue(!0)) : !1) === !1 && u();
    }, f = new RE(c, a), h = S.useRef();
    co(() => (h.current = f, Q(a, (g) => Bl(g, f)), () => {
      h.current && (Q(h.current.deps, (g) => ma(g, h.current)), q.cancel(h.current.update));
    })), S.useEffect(c, []), M0(() => () => {
      let g = h.current;
      Q(g.deps, (p) => ma(p, g));
    });
    let d = e.getComponentProps(s.getValue());
    return S.createElement(t, { ...d, ref: l });
  });
}, RE = class {
  constructor(t, e) {
    this.update = t, this.deps = e;
  }
  eventObserved(t) {
    t.type == "change" && q.write(this.update);
  }
};
function ME(t, e) {
  let n = /* @__PURE__ */ new Set();
  return Oc.dependencies = n, t.style && (t = { ...t, style: e.createAnimatedStyle(t.style) }), t = new af(t), Oc.dependencies = null, [t, n];
}
function NE(t, e) {
  return t && (N.fun(t) ? t(e) : t.current = e), e;
}
var Zm = Symbol.for("AnimatedComponent"), AE = (t, { applyAnimatedValues: e = () => !1, createAnimatedStyle: n = (i) => new af(i), getComponentProps: r = (i) => i } = {}) => {
  let i = { applyAnimatedValues: e, createAnimatedStyle: n, getComponentProps: r }, o = (l) => {
    let s = Jm(l) || "Anonymous";
    return N.str(l) ? l = o[l] || (o[l] = Km(l, i)) : l = l[Zm] || (l[Zm] = Km(l, i)), l.displayName = `Animated(${s})`, l;
  };
  return Pr(t, (l, s) => {
    N.arr(t) && (s = Jm(l)), o[s] = o(l);
  }), { animated: o };
}, Jm = (t) => N.str(t) ? t : t && N.str(t.displayName) ? t.displayName : N.fun(t) && t.name || null;
function Gt(t, ...e) {
  return N.fun(t) ? t(...e) : t;
}
var Fs = (t, e) => t === !0 || !!(e && t && (N.fun(t) ? t(e) : jt(t).includes(e))), Wx = (t, e) => N.obj(t) ? e && t[e] : t, Hx = (t, e) => t.default === !0 ? t[e] : t.default ? t.default[e] : void 0, IE = (t) => t, uf = (t, e = IE) => {
  let n = DE;
  t.default && t.default !== !0 && (t = t.default, n = Object.keys(t));
  let r = {};
  for (let i of n) {
    let o = e(t[i], i);
    N.und(o) || (r[i] = o);
  }
  return r;
}, DE = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"], zE = { config: 1, from: 1, to: 1, ref: 1, loop: 1, reset: 1, pause: 1, cancel: 1, reverse: 1, immediate: 1, default: 1, delay: 1, onProps: 1, onStart: 1, onChange: 1, onPause: 1, onResume: 1, onRest: 1, onResolve: 1, items: 1, trail: 1, sort: 1, expires: 1, initial: 1, enter: 1, update: 1, leave: 1, children: 1, onDestroyed: 1, keys: 1, callId: 1, parentId: 1 };
function $E(t) {
  let e = {}, n = 0;
  if (Pr(t, (r, i) => {
    zE[i] || (e[i] = r, n++);
  }), n)
    return e;
}
function A0(t) {
  let e = $E(t);
  if (e) {
    let n = { to: e };
    return Pr(t, (r, i) => i in e || (n[i] = r)), n;
  }
  return { ...t };
}
function _a(t) {
  return t = Xt(t), N.arr(t) ? t.map(_a) : lf(t) ? ur.createStringInterpolator({ range: [0, 1], output: [t, t] })(1) : t;
}
function Yx(t) {
  for (let e in t)
    return !0;
  return !1;
}
function Uh(t) {
  return N.fun(t) || N.arr(t) && N.obj(t[0]);
}
function Wh(t, e) {
  var n;
  (n = t.ref) == null || n.delete(t), e == null || e.delete(t);
}
function Xx(t, e) {
  var n;
  e && t.ref !== e && ((n = t.ref) == null || n.delete(t), e.add(t), t.ref = e);
}
var jE = { default: { tension: 170, friction: 26 }, gentle: { tension: 120, friction: 14 }, wobbly: { tension: 180, friction: 12 }, stiff: { tension: 210, friction: 20 }, slow: { tension: 280, friction: 60 }, molasses: { tension: 280, friction: 120 } }, Hh = { ...jE.default, mass: 1, damping: 1, easing: zx.linear, clamp: !1 }, LE = class {
  constructor() {
    F(this, "tension");
    F(this, "friction");
    F(this, "frequency");
    F(this, "damping");
    F(this, "mass");
    F(this, "velocity", 0);
    F(this, "restVelocity");
    F(this, "precision");
    F(this, "progress");
    F(this, "duration");
    F(this, "easing");
    F(this, "clamp");
    F(this, "bounce");
    F(this, "decay");
    F(this, "round");
    Object.assign(this, Hh);
  }
};
function FE(t, e, n) {
  n && (n = { ...n }, e1(n, e), e = { ...n, ...e }), e1(t, e), Object.assign(t, e);
  for (let l in Hh)
    t[l] == null && (t[l] = Hh[l]);
  let { frequency: r, damping: i } = t, { mass: o } = t;
  return N.und(r) || (r < 0.01 && (r = 0.01), i < 0 && (i = 0), t.tension = Math.pow(2 * Math.PI / r, 2) * o, t.friction = 4 * Math.PI * i * o / r), t;
}
function e1(t, e) {
  if (!N.und(e.decay))
    t.duration = void 0;
  else {
    let n = !N.und(e.tension) || !N.und(e.friction);
    (n || !N.und(e.frequency) || !N.und(e.damping) || !N.und(e.mass)) && (t.duration = void 0, t.decay = void 0), n && (t.frequency = void 0);
  }
}
var t1 = [], BE = class {
  constructor() {
    F(this, "changed", !1);
    F(this, "values", t1);
    F(this, "toValues", null);
    F(this, "fromValues", t1);
    F(this, "to");
    F(this, "from");
    F(this, "config", new LE());
    F(this, "immediate", !1);
  }
};
function Gx(t, { key: e, props: n, defaultProps: r, state: i, actions: o }) {
  return new Promise((l, s) => {
    let a, u, c = Fs(n.cancel ?? (r == null ? void 0 : r.cancel), e);
    if (c)
      d();
    else {
      N.und(n.pause) || (i.paused = Fs(n.pause, e));
      let g = r == null ? void 0 : r.pause;
      g !== !0 && (g = i.paused || Fs(g, e)), a = Gt(n.delay || 0, e), g ? (i.resumeQueue.add(h), o.pause()) : (o.resume(), h());
    }
    function f() {
      i.resumeQueue.add(h), i.timeouts.delete(u), u.cancel(), a = u.time - q.now();
    }
    function h() {
      a > 0 && !ur.skipAnimation ? (i.delayed = !0, u = q.setTimeout(d, a), i.pauseQueue.add(f), i.timeouts.add(u)) : d();
    }
    function d() {
      i.delayed && (i.delayed = !1), i.pauseQueue.delete(f), i.timeouts.delete(u), t <= (i.cancelId || 0) && (c = !0);
      try {
        o.start({ ...n, callId: t, cancel: c }, l);
      } catch (g) {
        s(g);
      }
    }
  });
}
var I0 = (t, e) => e.length == 1 ? e[0] : e.some((n) => n.cancelled) ? kl(t.get()) : e.every((n) => n.noop) ? Qx(t.get()) : rr(t.get(), e.every((n) => n.finished)), Qx = (t) => ({ value: t, noop: !0, finished: !0, cancelled: !1 }), rr = (t, e, n = !1) => ({ value: t, finished: e, cancelled: n }), kl = (t) => ({ value: t, cancelled: !0, finished: !1 });
function qx(t, e, n, r) {
  let { callId: i, parentId: o, onRest: l } = e, { asyncTo: s, promise: a } = n;
  return !o && t === s && !e.reset ? a : n.promise = (async () => {
    n.asyncId = i, n.asyncTo = t;
    let u = uf(e, (_, v) => v === "onRest" ? void 0 : _), c, f, h = new Promise((_, v) => (c = _, f = v)), d = (_) => {
      let v = i <= (n.cancelId || 0) && kl(r) || i !== n.asyncId && rr(r, !1);
      if (v)
        throw _.result = v, f(_), _;
    }, g = (_, v) => {
      let m = new n1(), y = new r1();
      return (async () => {
        if (ur.skipAnimation)
          throw xa(n), y.result = rr(r, !1), f(y), y;
        d(m);
        let x = N.obj(_) ? { ..._ } : { ...v, to: _ };
        x.parentId = i, Pr(u, (T, E) => {
          N.und(x[E]) && (x[E] = T);
        });
        let C = await r.start(x);
        return d(m), n.paused && await new Promise((T) => {
          n.resumeQueue.add(T);
        }), C;
      })();
    }, p;
    if (ur.skipAnimation)
      return xa(n), rr(r, !1);
    try {
      let _;
      N.arr(t) ? _ = (async (v) => {
        for (let m of v)
          await g(m);
      })(t) : _ = Promise.resolve(t(g, r.stop.bind(r))), await Promise.all([_.then(c), h]), p = rr(r.get(), !0, !1);
    } catch (_) {
      if (_ instanceof n1)
        p = _.result;
      else if (_ instanceof r1)
        p = _.result;
      else
        throw _;
    } finally {
      i == n.asyncId && (n.asyncId = o, n.asyncTo = o ? s : void 0, n.promise = o ? a : void 0);
    }
    return N.fun(l) && q.batchedUpdates(() => {
      l(p, r, r.item);
    }), p;
  })();
}
function xa(t, e) {
  js(t.timeouts, (n) => n.cancel()), t.pauseQueue.clear(), t.resumeQueue.clear(), t.asyncId = t.asyncTo = t.promise = void 0, e && (t.cancelId = e);
}
var n1 = class extends Error {
  constructor() {
    super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.");
    F(this, "result");
  }
}, r1 = class extends Error {
  constructor() {
    super("SkipAnimationSignal");
    F(this, "result");
  }
}, Yh = (t) => t instanceof D0, VE = 1, D0 = class extends $x {
  constructor() {
    super(...arguments);
    F(this, "id", VE++);
    F(this, "_priority", 0);
  }
  get priority() {
    return this._priority;
  }
  set priority(e) {
    this._priority != e && (this._priority = e, this._onPriorityChange(e));
  }
  get() {
    let e = yr(this);
    return e && e.getValue();
  }
  to(...e) {
    return ur.to(this, e);
  }
  interpolate(...e) {
    return wE(), ur.to(this, e);
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
    ga(this, { type: "change", parent: this, value: e, idle: n });
  }
  _onPriorityChange(e) {
    this.idle || nf.sort(this), ga(this, { type: "priority", parent: this, priority: e });
  }
}, Mo = Symbol.for("SpringPhase"), Kx = 1, Xh = 2, Gh = 4, hd = (t) => (t[Mo] & Kx) > 0, ti = (t) => (t[Mo] & Xh) > 0, rs = (t) => (t[Mo] & Gh) > 0, i1 = (t, e) => e ? t[Mo] |= Xh | Kx : t[Mo] &= ~Xh, o1 = (t, e) => e ? t[Mo] |= Gh : t[Mo] &= ~Gh, UE = class extends D0 {
  constructor(e, n) {
    super();
    F(this, "key");
    F(this, "animation", new BE());
    F(this, "queue");
    F(this, "defaultProps", {});
    F(this, "_state", { paused: !1, delayed: !1, pauseQueue: /* @__PURE__ */ new Set(), resumeQueue: /* @__PURE__ */ new Set(), timeouts: /* @__PURE__ */ new Set() });
    F(this, "_pendingCalls", /* @__PURE__ */ new Set());
    F(this, "_lastCallId", 0);
    F(this, "_lastToId", 0);
    F(this, "_memoizedDuration", 0);
    if (!N.und(e) || !N.und(n)) {
      let r = N.obj(e) ? { ...e } : { ...n, from: e };
      N.und(r.default) && (r.default = !0), this.start(r);
    }
  }
  get idle() {
    return !(ti(this) || this._state.asyncTo) || rs(this);
  }
  get goal() {
    return Xt(this.animation.to);
  }
  get velocity() {
    let e = yr(this);
    return e instanceof Ra ? e.lastVelocity || 0 : e.getPayload().map((n) => n.lastVelocity || 0);
  }
  get hasAnimated() {
    return hd(this);
  }
  get isAnimating() {
    return ti(this);
  }
  get isPaused() {
    return rs(this);
  }
  get isDelayed() {
    return this._state.delayed;
  }
  advance(e) {
    let n = !0, r = !1, i = this.animation, { toValues: o } = i, { config: l } = i, s = sf(i.to);
    !s && An(i.to) && (o = jt(Xt(i.to))), i.values.forEach((c, f) => {
      if (c.done)
        return;
      let h = c.constructor == ya ? 1 : s ? s[f].lastPosition : o[f], d = i.immediate, g = h;
      if (!d) {
        if (g = c.lastPosition, l.tension <= 0) {
          c.done = !0;
          return;
        }
        let p = c.elapsedTime += e, _ = i.fromValues[f], v = c.v0 != null ? c.v0 : c.v0 = N.arr(l.velocity) ? l.velocity[f] : l.velocity, m, y = l.precision || (_ == h ? 5e-3 : Math.min(1, Math.abs(h - _) * 1e-3));
        if (N.und(l.duration))
          if (l.decay) {
            let x = l.decay === !0 ? 0.998 : l.decay, C = Math.exp(-(1 - x) * p);
            g = _ + v / (1 - x) * (1 - C), d = Math.abs(c.lastPosition - g) <= y, m = v * C;
          } else {
            m = c.lastVelocity == null ? v : c.lastVelocity;
            let x = l.restVelocity || y / 10, C = l.clamp ? 0 : l.bounce, T = !N.und(C), E = _ == h ? c.v0 > 0 : _ < h, b, O = !1, P = 1, j = Math.ceil(e / P);
            for (let D = 0; D < j && (b = Math.abs(m) > x, !(!b && (d = Math.abs(h - g) <= y, d))); ++D) {
              T && (O = g == h || g > h == E, O && (m = -m * C, g = h));
              let G = -l.tension * 1e-6 * (g - h), I = -l.friction * 1e-3 * m, $ = (G + I) / l.mass;
              m = m + $ * P, g = g + m * P;
            }
          }
        else {
          let x = 1;
          l.duration > 0 && (this._memoizedDuration !== l.duration && (this._memoizedDuration = l.duration, c.durationProgress > 0 && (c.elapsedTime = l.duration * c.durationProgress, p = c.elapsedTime += e)), x = (l.progress || 0) + p / this._memoizedDuration, x = x > 1 ? 1 : x < 0 ? 0 : x, c.durationProgress = x), g = _ + l.easing(x) * (h - _), m = (g - c.lastPosition) / e, d = x == 1;
        }
        c.lastVelocity = m, Number.isNaN(g) && (console.warn("Got NaN while animating:", this), d = !0);
      }
      s && !s[f].done && (d = !1), d ? c.done = !0 : n = !1, c.setValue(g, l.round) && (r = !0);
    });
    let a = yr(this), u = a.getValue();
    if (n) {
      let c = Xt(i.to);
      (u !== c || r) && !l.decay ? (a.setValue(c), this._onChange(c)) : r && l.decay && this._onChange(u), this._stop();
    } else
      r && this._onChange(u);
  }
  set(e) {
    return q.batchedUpdates(() => {
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
    if (ti(this)) {
      let { to: e, config: n } = this.animation;
      q.batchedUpdates(() => {
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
    return N.und(e) ? (r = this.queue || [], this.queue = []) : r = [N.obj(e) ? e : { ...n, to: e }], Promise.all(r.map((i) => this._update(i))).then((i) => I0(this, i));
  }
  stop(e) {
    let { to: n } = this.animation;
    return this._focus(this.get()), xa(this._state, e && this._lastCallId), q.batchedUpdates(() => this._stop(n, e)), this;
  }
  reset() {
    this._update({ reset: !0 });
  }
  eventObserved(e) {
    e.type == "change" ? this._start() : e.type == "priority" && (this.priority = e.priority + 1);
  }
  _prepareNode(e) {
    let n = this.key || "", { to: r, from: i } = e;
    r = N.obj(r) ? r[n] : r, (r == null || Uh(r)) && (r = void 0), i = N.obj(i) ? i[n] : i, i == null && (i = void 0);
    let o = { to: r, from: i };
    return hd(this) || (e.reverse && ([r, i] = [i, r]), i = Xt(i), N.und(i) ? yr(this) || this._set(r) : this._set(i)), o;
  }
  _update({ ...e }, n) {
    let { key: r, defaultProps: i } = this;
    e.default && Object.assign(i, uf(e, (s, a) => /^on/.test(a) ? Wx(s, r) : s)), s1(this, e, "onProps"), os(this, "onProps", e, this);
    let o = this._prepareNode(e);
    if (Object.isFrozen(this))
      throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
    let l = this._state;
    return Gx(++this._lastCallId, { key: r, props: e, defaultProps: i, state: l, actions: { pause: () => {
      rs(this) || (o1(this, !0), gs(l.pauseQueue), os(this, "onPause", rr(this, is(this, this.animation.to)), this));
    }, resume: () => {
      rs(this) && (o1(this, !1), ti(this) && this._resume(), gs(l.resumeQueue), os(this, "onResume", rr(this, is(this, this.animation.to)), this));
    }, start: this._merge.bind(this, o) } }).then((s) => {
      if (e.loop && s.finished && !(n && s.noop)) {
        let a = Zx(e);
        if (a)
          return this._update(a, !0);
      }
      return s;
    });
  }
  _merge(e, n, r) {
    if (n.cancel)
      return this.stop(!0), r(kl(this));
    let i = !N.und(e.to), o = !N.und(e.from);
    if (i || o)
      if (n.callId > this._lastToId)
        this._lastToId = n.callId;
      else
        return r(kl(this));
    let { key: l, defaultProps: s, animation: a } = this, { to: u, from: c } = a, { to: f = u, from: h = c } = e;
    o && !i && (!n.default || N.und(f)) && (f = h), n.reverse && ([f, h] = [h, f]);
    let d = !Dr(h, c);
    d && (a.from = h), h = Xt(h);
    let g = !Dr(f, u);
    g && this._focus(f);
    let p = Uh(n.to), { config: _ } = a, { decay: v, velocity: m } = _;
    (i || o) && (_.velocity = 0), n.config && !p && FE(_, Gt(n.config, l), n.config !== s.config ? Gt(s.config, l) : void 0);
    let y = yr(this);
    if (!y || N.und(f))
      return r(rr(this, !0));
    let x = N.und(n.reset) ? o && !n.default : !N.und(h) && Fs(n.reset, l), C = x ? h : this.get(), T = _a(f), E = N.num(T) || N.arr(T) || lf(T), b = !p && (!E || Fs(s.immediate || n.immediate, l));
    if (g) {
      let D = Vh(f);
      if (D !== y.constructor)
        if (b)
          y = this._set(T);
        else
          throw Error(`Cannot animate between ${y.constructor.name} and ${D.name}, as the "to" prop suggests`);
    }
    let O = y.constructor, P = An(f), j = !1;
    if (!P) {
      let D = x || !hd(this) && d;
      (g || D) && (j = Dr(_a(C), T), P = !j), (!Dr(a.immediate, b) && !b || !Dr(_.decay, v) || !Dr(_.velocity, m)) && (P = !0);
    }
    if (j && ti(this) && (a.changed && !x ? P = !0 : P || this._stop(u)), !p && ((P || An(u)) && (a.values = y.getPayload(), a.toValues = An(f) ? null : O == ya ? [1] : jt(T)), a.immediate != b && (a.immediate = b, !b && !x && this._set(u)), P)) {
      let { onRest: D } = a;
      Q(HE, (I) => s1(this, n, I));
      let G = rr(this, is(this, u));
      gs(this._pendingCalls, G), this._pendingCalls.add(r), a.changed && q.batchedUpdates(() => {
        var I;
        a.changed = !x, D == null || D(G, this), x ? Gt(s.onRest, G) : (I = a.onStart) == null || I.call(a, G, this);
      });
    }
    x && this._set(C), p ? r(qx(n.to, n, this._state, this)) : P ? this._start() : ti(this) && !g ? this._pendingCalls.add(r) : r(Qx(C));
  }
  _focus(e) {
    let n = this.animation;
    e !== n.to && (Qm(this) && this._detach(), n.to = e, Qm(this) && this._attach());
  }
  _attach() {
    let e = 0, { to: n } = this.animation;
    An(n) && (Bl(n, this), Yh(n) && (e = n.priority + 1)), this.priority = e;
  }
  _detach() {
    let { to: e } = this.animation;
    An(e) && ma(e, this);
  }
  _set(e, n = !0) {
    let r = Xt(e);
    if (!N.und(r)) {
      let i = yr(this);
      if (!i || !Dr(r, i.getValue())) {
        let o = Vh(r);
        !i || i.constructor != o ? N0(this, o.create(r)) : i.setValue(r), i && q.batchedUpdates(() => {
          this._onChange(r, n);
        });
      }
    }
    return yr(this);
  }
  _onStart() {
    let e = this.animation;
    e.changed || (e.changed = !0, os(this, "onStart", rr(this, is(this, e.to)), this));
  }
  _onChange(e, n) {
    n || (this._onStart(), Gt(this.animation.onChange, e, this)), Gt(this.defaultProps.onChange, e, this), super._onChange(e, n);
  }
  _start() {
    let e = this.animation;
    yr(this).reset(Xt(e.to)), e.immediate || (e.fromValues = e.values.map((n) => n.lastPosition)), ti(this) || (i1(this, !0), rs(this) || this._resume());
  }
  _resume() {
    ur.skipAnimation ? this.finish() : nf.start(this);
  }
  _stop(e, n) {
    if (ti(this)) {
      i1(this, !1);
      let r = this.animation;
      Q(r.values, (o) => {
        o.done = !0;
      }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), ga(this, { type: "idle", parent: this });
      let i = n ? kl(this.get()) : rr(this.get(), is(this, e ?? r.to));
      gs(this._pendingCalls, i), r.changed && (r.changed = !1, os(this, "onRest", i, this));
    }
  }
};
function is(t, e) {
  let n = _a(e), r = _a(t.get());
  return Dr(r, n);
}
function Zx(t, e = t.loop, n = t.to) {
  let r = Gt(e);
  if (r) {
    let i = r !== !0 && A0(r), o = (i || t).reverse, l = !i || i.reset;
    return wa({ ...t, loop: e, default: !1, pause: void 0, to: !o || Uh(n) ? n : void 0, from: l ? t.from : void 0, reset: l, ...i });
  }
}
function wa(t) {
  let { to: e, from: n } = t = A0(t), r = /* @__PURE__ */ new Set();
  return N.obj(e) && l1(e, r), N.obj(n) && l1(n, r), t.keys = r.size ? Array.from(r) : null, t;
}
function WE(t) {
  let e = wa(t);
  return N.und(e.default) && (e.default = uf(e)), e;
}
function l1(t, e) {
  Pr(t, (n, r) => n != null && e.add(r));
}
var HE = ["onStart", "onRest", "onChange", "onPause", "onResume"];
function s1(t, e, n) {
  t.animation[n] = e[n] !== Hx(e, n) ? Wx(e[n], t.key) : void 0;
}
function os(t, e, ...n) {
  var r, i, o, l;
  (i = (r = t.animation)[e]) == null || i.call(r, ...n), (l = (o = t.defaultProps)[e]) == null || l.call(o, ...n);
}
var YE = ["onStart", "onChange", "onRest"], XE = 1, Jx = class {
  constructor(t, e) {
    F(this, "id", XE++);
    F(this, "springs", {});
    F(this, "queue", []);
    F(this, "ref");
    F(this, "_flush");
    F(this, "_initialProps");
    F(this, "_lastAsyncId", 0);
    F(this, "_active", /* @__PURE__ */ new Set());
    F(this, "_changed", /* @__PURE__ */ new Set());
    F(this, "_started", !1);
    F(this, "_item");
    F(this, "_state", { paused: !1, pauseQueue: /* @__PURE__ */ new Set(), resumeQueue: /* @__PURE__ */ new Set(), timeouts: /* @__PURE__ */ new Set() });
    F(this, "_events", { onStart: /* @__PURE__ */ new Map(), onChange: /* @__PURE__ */ new Map(), onRest: /* @__PURE__ */ new Map() });
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
      N.und(n) || this.springs[e].set(n);
    }
  }
  update(t) {
    return t && this.queue.push(wa(t)), this;
  }
  start(t) {
    let { queue: e } = this;
    return t ? e = jt(t).map(wa) : this.queue = [], this._flush ? this._flush(this, e) : (iw(this, e), Qh(this, e));
  }
  stop(t, e) {
    if (t !== !!t && (e = t), e) {
      let n = this.springs;
      Q(jt(e), (r) => n[r].stop(!!t));
    } else
      xa(this._state, this._lastAsyncId), this.each((n) => n.stop(!!t));
    return this;
  }
  pause(t) {
    if (N.und(t))
      this.start({ pause: !0 });
    else {
      let e = this.springs;
      Q(jt(t), (n) => e[n].pause());
    }
    return this;
  }
  resume(t) {
    if (N.und(t))
      this.start({ pause: !1 });
    else {
      let e = this.springs;
      Q(jt(t), (n) => e[n].resume());
    }
    return this;
  }
  each(t) {
    Pr(this.springs, t);
  }
  _onFrame() {
    let { onStart: t, onChange: e, onRest: n } = this._events, r = this._active.size > 0, i = this._changed.size > 0;
    (r && !this._started || i && !this._started) && (this._started = !0, js(t, ([s, a]) => {
      a.value = this.get(), s(a, this, this._item);
    }));
    let o = !r && this._started, l = i || o && n.size ? this.get() : null;
    i && e.size && js(e, ([s, a]) => {
      a.value = l, s(a, this, this._item);
    }), o && (this._started = !1, js(n, ([s, a]) => {
      a.value = l, s(a, this, this._item);
    }));
  }
  eventObserved(t) {
    if (t.type == "change")
      this._changed.add(t.parent), t.idle || this._active.add(t.parent);
    else if (t.type == "idle")
      this._active.delete(t.parent);
    else
      return;
    q.onFrame(this._onFrame);
  }
};
function Qh(t, e) {
  return Promise.all(e.map((n) => ew(t, n))).then((n) => I0(t, n));
}
async function ew(t, e, n) {
  let { keys: r, to: i, from: o, loop: l, onRest: s, onResolve: a } = e, u = N.obj(e.default) && e.default;
  l && (e.loop = !1), i === !1 && (e.to = null), o === !1 && (e.from = null);
  let c = N.arr(i) || N.fun(i) ? i : void 0;
  c ? (e.to = void 0, e.onRest = void 0, u && (u.onRest = void 0)) : Q(YE, (p) => {
    let _ = e[p];
    if (N.fun(_)) {
      let v = t._events[p];
      e[p] = ({ finished: m, cancelled: y }) => {
        let x = v.get(_);
        x ? (m || (x.finished = !1), y && (x.cancelled = !0)) : v.set(_, { value: null, finished: m || !1, cancelled: y || !1 });
      }, u && (u[p] = e[p]);
    }
  });
  let f = t._state;
  e.pause === !f.paused ? (f.paused = e.pause, gs(e.pause ? f.pauseQueue : f.resumeQueue)) : f.paused && (e.pause = !0);
  let h = (r || Object.keys(t.springs)).map((p) => t.springs[p].start(e)), d = e.cancel === !0 || Hx(e, "cancel") === !0;
  (c || d && f.asyncId) && h.push(Gx(++t._lastAsyncId, { props: e, state: f, actions: { pause: Lh, resume: Lh, start(p, _) {
    d ? (xa(f, t._lastAsyncId), _(kl(t))) : (p.onRest = s, _(qx(c, p, f, t)));
  } } })), f.paused && await new Promise((p) => {
    f.resumeQueue.add(p);
  });
  let g = I0(t, await Promise.all(h));
  if (l && g.finished && !(n && g.noop)) {
    let p = Zx(e, l, i);
    if (p)
      return iw(t, [p]), ew(t, p, !0);
  }
  return a && q.batchedUpdates(() => a(g, t, t.item)), g;
}
function qh(t, e) {
  let n = { ...t.springs };
  return e && Q(jt(e), (r) => {
    N.und(r.keys) && (r = wa(r)), N.obj(r.to) || (r = { ...r, to: void 0 }), rw(n, r, (i) => nw(i));
  }), tw(t, n), n;
}
function tw(t, e) {
  Pr(e, (n, r) => {
    t.springs[r] || (t.springs[r] = n, Bl(n, t));
  });
}
function nw(t, e) {
  let n = new UE();
  return n.key = t, e && Bl(n, e), n;
}
function rw(t, e, n) {
  e.keys && Q(e.keys, (r) => {
    (t[r] || (t[r] = n(r)))._prepareNode(e);
  });
}
function iw(t, e) {
  Q(e, (n) => {
    rw(t.springs, n, (r) => nw(r, t));
  });
}
var Ma = ({ children: t, ...e }) => {
  let n = S.useContext(Rc), r = e.pause || !!n.pause, i = e.immediate || !!n.immediate;
  e = EE(() => ({ pause: r, immediate: i }), [r, i]);
  let { Provider: o } = Rc;
  return S.createElement(o, { value: e }, t);
}, Rc = GE(Ma, {});
Ma.Provider = Rc.Provider;
Ma.Consumer = Rc.Consumer;
function GE(t, e) {
  return Object.assign(t, S.createContext(e)), t.Provider._context = t, t.Consumer._context = t, t;
}
var z0 = () => {
  let t = [], e = function(r) {
    SE();
    let i = [];
    return Q(t, (o, l) => {
      if (N.und(r))
        i.push(o.start());
      else {
        let s = n(r, o, l);
        s && i.push(o.start(s));
      }
    }), i;
  };
  e.current = t, e.add = function(r) {
    t.includes(r) || t.push(r);
  }, e.delete = function(r) {
    let i = t.indexOf(r);
    ~i && t.splice(i, 1);
  }, e.pause = function() {
    return Q(t, (r) => r.pause(...arguments)), this;
  }, e.resume = function() {
    return Q(t, (r) => r.resume(...arguments)), this;
  }, e.set = function(r) {
    Q(t, (i, o) => {
      let l = N.fun(r) ? r(o, i) : r;
      l && i.set(l);
    });
  }, e.start = function(r) {
    let i = [];
    return Q(t, (o, l) => {
      if (N.und(r))
        i.push(o.start());
      else {
        let s = this._getProps(r, o, l);
        s && i.push(o.start(s));
      }
    }), i;
  }, e.stop = function() {
    return Q(t, (r) => r.stop(...arguments)), this;
  }, e.update = function(r) {
    return Q(t, (i, o) => i.update(this._getProps(r, i, o))), this;
  };
  let n = function(r, i, o) {
    return N.fun(r) ? r(o, i) : r;
  };
  return e._getProps = n, e;
};
function QE(t, e, n) {
  let r = N.fun(e) && e;
  r && !n && (n = []);
  let i = S.useMemo(() => r || arguments.length == 3 ? z0() : void 0, []), o = S.useRef(0), l = R0(), s = S.useMemo(() => ({ ctrls: [], queue: [], flush(v, m) {
    let y = qh(v, m);
    return o.current > 0 && !s.queue.length && !Object.keys(y).some((x) => !v.springs[x]) ? Qh(v, m) : new Promise((x) => {
      tw(v, y), s.queue.push(() => {
        x(Qh(v, m));
      }), l();
    });
  } }), []), a = S.useRef([...s.ctrls]), u = [], c = Bh(t) || 0;
  S.useMemo(() => {
    Q(a.current.slice(t, c), (v) => {
      Wh(v, i), v.stop(!0);
    }), a.current.length = t, f(c, t);
  }, [t]), S.useMemo(() => {
    f(0, Math.min(c, t));
  }, n);
  function f(v, m) {
    for (let y = v; y < m; y++) {
      let x = a.current[y] || (a.current[y] = new Jx(null, s.flush)), C = r ? r(y, x) : e[y];
      C && (u[y] = WE(C));
    }
  }
  let h = a.current.map((v, m) => qh(v, u[m])), d = S.useContext(Ma), g = Bh(d), p = d !== g && Yx(d);
  co(() => {
    o.current++, s.ctrls = a.current;
    let { queue: v } = s;
    v.length && (s.queue = [], Q(v, (m) => m())), Q(a.current, (m, y) => {
      i == null || i.add(m), p && m.start({ default: d });
      let x = u[y];
      x && (Xx(m, x.ref), m.ref ? m.queue.push(x) : m.start(x));
    });
  }), M0(() => () => {
    Q(s.ctrls, (v) => v.stop(!0));
  });
  let _ = h.map((v) => ({ ...v }));
  return i ? [_, i] : _;
}
function K(t, e) {
  let n = N.fun(t), [[r], i] = QE(1, n ? t : [t], n ? e || [] : e);
  return n || arguments.length == 2 ? [r, i] : r;
}
var qE = () => z0(), a1 = () => S.useState(qE)[0];
function KE(t, e, n) {
  let r = N.fun(e) && e, { reset: i, sort: o, trail: l = 0, expires: s = !0, exitBeforeEnter: a = !1, onDestroyed: u, ref: c, config: f } = r ? r() : e, h = S.useMemo(() => r || arguments.length == 3 ? z0() : void 0, []), d = jt(t), g = [], p = S.useRef(null), _ = i ? null : p.current;
  co(() => {
    p.current = g;
  }), M0(() => (Q(g, (I) => {
    h == null || h.add(I.ctrl), I.ctrl.ref = h;
  }), () => {
    Q(p.current, (I) => {
      I.expired && clearTimeout(I.expirationId), Wh(I.ctrl, h), I.ctrl.stop(!0);
    });
  }));
  let v = JE(d, r ? r() : e, _), m = i && p.current || [];
  co(() => Q(m, ({ ctrl: I, item: $, key: W }) => {
    Wh(I, h), Gt(u, $, W);
  }));
  let y = [];
  if (_ && Q(_, (I, $) => {
    I.expired ? (clearTimeout(I.expirationId), m.push(I)) : ($ = y[$] = v.indexOf(I.key), ~$ && (g[$] = I));
  }), Q(d, (I, $) => {
    g[$] || (g[$] = { key: v[$], item: I, phase: "mount", ctrl: new Jx() }, g[$].ctrl.item = I);
  }), y.length) {
    let I = -1, { leave: $ } = r ? r() : e;
    Q(y, (W, L) => {
      let M = _[L];
      ~W ? (I = g.indexOf(M), g[I] = { ...M, item: d[W] }) : $ && g.splice(++I, 0, M);
    });
  }
  N.fun(o) && g.sort((I, $) => o(I.item, $.item));
  let x = -l, C = R0(), T = uf(e), E = /* @__PURE__ */ new Map(), b = S.useRef(/* @__PURE__ */ new Map()), O = S.useRef(!1);
  Q(g, (I, $) => {
    let W = I.key, L = I.phase, M = r ? r() : e, z, k, Y = Gt(M.delay || 0, W);
    if (L == "mount")
      z = M.enter, k = "enter";
    else {
      let de = v.indexOf(W) < 0;
      if (L != "leave")
        if (de)
          z = M.leave, k = "leave";
        else if (z = M.update)
          k = "update";
        else
          return;
      else if (!de)
        z = M.enter, k = "enter";
      else
        return;
    }
    if (z = Gt(z, I.item, $), z = N.obj(z) ? A0(z) : { to: z }, !z.config) {
      let de = f || T.config;
      z.config = Gt(de, I.item, $, k);
    }
    x += l;
    let J = { ...T, delay: Y + x, ref: c, immediate: M.immediate, reset: !1, ...z };
    if (k == "enter" && N.und(J.from)) {
      let de = r ? r() : e, ye = N.und(de.initial) || _ ? de.from : de.initial;
      J.from = Gt(ye, I.item, $);
    }
    let { onResolve: nt } = J;
    J.onResolve = (de) => {
      Gt(nt, de);
      let ye = p.current, ue = ye.find((He) => He.key === W);
      if (ue && !(de.cancelled && ue.phase != "update") && ue.ctrl.idle) {
        let He = ye.every((be) => be.ctrl.idle);
        if (ue.phase == "leave") {
          let be = Gt(s, ue.item);
          if (be !== !1) {
            let Tn = be === !0 ? 0 : be;
            if (ue.expired = !0, !He && Tn > 0) {
              Tn <= 2147483647 && (ue.expirationId = setTimeout(C, Tn));
              return;
            }
          }
        }
        He && ye.some((be) => be.expired) && (b.current.delete(ue), a && (O.current = !0), C());
      }
    };
    let fe = qh(I.ctrl, J);
    k === "leave" && a ? b.current.set(I, { phase: k, springs: fe, payload: J }) : E.set(I, { phase: k, springs: fe, payload: J });
  });
  let P = S.useContext(Ma), j = Bh(P), D = P !== j && Yx(P);
  co(() => {
    D && Q(g, (I) => {
      I.ctrl.start({ default: P });
    });
  }, [P]), Q(E, (I, $) => {
    if (b.current.size) {
      let W = g.findIndex((L) => L.key === $.key);
      g.splice(W, 1);
    }
  }), co(() => {
    Q(b.current.size ? b.current : E, ({ phase: I, payload: $ }, W) => {
      let { ctrl: L } = W;
      W.phase = I, h == null || h.add(L), D && I == "enter" && L.start({ default: P }), $ && (Xx(L, $.ref), (L.ref || h) && !O.current ? L.update($) : (L.start($), O.current && (O.current = !1)));
    });
  }, i ? void 0 : n);
  let G = (I) => S.createElement(S.Fragment, null, g.map(($, W) => {
    let { springs: L } = E.get($) || $.ctrl, M = I({ ...L }, $.item, $, W);
    return M && M.type ? S.createElement(M.type, { ...M.props, key: N.str($.key) || N.num($.key) ? $.key : $.ctrl.id, ref: M.ref }) : M;
  }));
  return h ? [G, h] : G;
}
var ZE = 1;
function JE(t, { key: e, keys: n = e }, r) {
  if (n === null) {
    let i = /* @__PURE__ */ new Set();
    return t.map((o) => {
      let l = r && r.find((s) => s.item === o && s.phase !== "leave" && !i.has(s));
      return l ? (i.add(l), l.key) : ZE++;
    });
  }
  return N.und(n) ? t : N.fun(n) ? t.map(n) : jt(n);
}
var eT = class extends D0 {
  constructor(e, n) {
    super();
    F(this, "key");
    F(this, "idle", !0);
    F(this, "calc");
    F(this, "_active", /* @__PURE__ */ new Set());
    this.source = e, this.calc = pa(...n);
    let r = this._get(), i = Vh(r);
    N0(this, i.create(r));
  }
  advance(e) {
    let n = this._get(), r = this.get();
    Dr(n, r) || (yr(this).setValue(n), this._onChange(n, this.idle)), !this.idle && u1(this._active) && pd(this);
  }
  _get() {
    let e = N.arr(this.source) ? this.source.map(Xt) : jt(Xt(this.source));
    return this.calc(...e);
  }
  _start() {
    this.idle && !u1(this._active) && (this.idle = !1, Q(sf(this), (e) => {
      e.done = !1;
    }), ur.skipAnimation ? (q.batchedUpdates(() => this.advance()), pd(this)) : nf.start(this));
  }
  _attach() {
    let e = 1;
    Q(jt(this.source), (n) => {
      An(n) && Bl(n, this), Yh(n) && (n.idle || this._active.add(n), e = Math.max(e, n.priority + 1));
    }), this.priority = e, this._start();
  }
  _detach() {
    Q(jt(this.source), (e) => {
      An(e) && ma(e, this);
    }), this._active.clear(), pd(this);
  }
  eventObserved(e) {
    e.type == "change" ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : e.type == "idle" ? this._active.delete(e.parent) : e.type == "priority" && (this.priority = jt(this.source).reduce((n, r) => Math.max(n, (Yh(r) ? r.priority : 0) + 1), 0));
  }
};
function tT(t) {
  return t.idle !== !1;
}
function u1(t) {
  return !t.size || Array.from(t).every(tT);
}
function pd(t) {
  t.idle || (t.idle = !0, Q(sf(t), (e) => {
    e.done = !0;
  }), ga(t, { type: "idle", parent: t }));
}
ur.assign({ createStringInterpolator: Fx, to: (t, e) => new eT(t, e) });
var ow = /^--/;
function nT(t, e) {
  return e == null || typeof e == "boolean" || e === "" ? "" : typeof e == "number" && e !== 0 && !ow.test(t) && !(Bs.hasOwnProperty(t) && Bs[t]) ? e + "px" : ("" + e).trim();
}
var c1 = {};
function rT(t, e) {
  if (!t.nodeType || !t.setAttribute)
    return !1;
  let n = t.nodeName === "filter" || t.parentNode && t.parentNode.nodeName === "filter", { style: r, children: i, scrollTop: o, scrollLeft: l, viewBox: s, ...a } = e, u = Object.values(a), c = Object.keys(a).map((f) => n || t.hasAttribute(f) ? f : c1[f] || (c1[f] = f.replace(/([A-Z])/g, (h) => "-" + h.toLowerCase())));
  i !== void 0 && (t.textContent = i);
  for (let f in r)
    if (r.hasOwnProperty(f)) {
      let h = nT(f, r[f]);
      ow.test(f) ? t.style.setProperty(f, h) : t.style[f] = h;
    }
  c.forEach((f, h) => {
    t.setAttribute(f, u[h]);
  }), o !== void 0 && (t.scrollTop = o), l !== void 0 && (t.scrollLeft = l), s !== void 0 && t.setAttribute("viewBox", s);
}
var Bs = { animationIterationCount: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 }, iT = (t, e) => t + e.charAt(0).toUpperCase() + e.substring(1), oT = ["Webkit", "Ms", "Moz", "O"];
Bs = Object.keys(Bs).reduce((t, e) => (oT.forEach((n) => t[iT(n, e)] = t[e]), t), Bs);
var lT = /^(matrix|translate|scale|rotate|skew)/, sT = /^(translate)/, aT = /^(rotate|skew)/, gd = (t, e) => N.num(t) && t !== 0 ? t + e : t, Uu = (t, e) => N.arr(t) ? t.every((n) => Uu(n, e)) : N.num(t) ? t === e : parseFloat(t) === e, uT = class extends af {
  constructor({ x: t, y: e, z: n, ...r }) {
    let i = [], o = [];
    (t || e || n) && (i.push([t || 0, e || 0, n || 0]), o.push((l) => [`translate3d(${l.map((s) => gd(s, "px")).join(",")})`, Uu(l, 0)])), Pr(r, (l, s) => {
      if (s === "transform")
        i.push([l || ""]), o.push((a) => [a, a === ""]);
      else if (lT.test(s)) {
        if (delete r[s], N.und(l))
          return;
        let a = sT.test(s) ? "px" : aT.test(s) ? "deg" : "";
        i.push(jt(l)), o.push(s === "rotate3d" ? ([u, c, f, h]) => [`rotate3d(${u},${c},${f},${gd(h, a)})`, Uu(h, 0)] : (u) => [`${s}(${u.map((c) => gd(c, a)).join(",")})`, Uu(u, s.startsWith("scale") ? 1 : 0)]);
      }
    }), i.length && (r.transform = new cT(i, o)), super(r);
  }
}, cT = class extends $x {
  constructor(e, n) {
    super();
    F(this, "_value", null);
    this.inputs = e, this.transforms = n;
  }
  get() {
    return this._value || (this._value = this._get());
  }
  _get() {
    let e = "", n = !0;
    return Q(this.inputs, (r, i) => {
      let o = Xt(r[0]), [l, s] = this.transforms[i](N.arr(o) ? o : r.map(Xt));
      e += " " + l, n = n && s;
    }), n ? "none" : e;
  }
  observerAdded(e) {
    e == 1 && Q(this.inputs, (n) => Q(n, (r) => An(r) && Bl(r, this)));
  }
  observerRemoved(e) {
    e == 0 && Q(this.inputs, (n) => Q(n, (r) => An(r) && ma(r, this)));
  }
  eventObserved(e) {
    e.type == "change" && (this._value = null), ga(this, e);
  }
}, fT = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"];
ur.assign({ batchedUpdates: t_.unstable_batchedUpdates, createStringInterpolator: Fx, colors: tE });
var dT = AE(fT, { applyAnimatedValues: rT, createAnimatedStyle: (t) => new uT(t), getComponentProps: ({ scrollTop: t, scrollLeft: e, ...n }) => n }), Z = dT.animated;
const hT = (t) => {
  const e = S.useRef(null), n = t.phonestate, [r, i] = S.useState([window.innerWidth, window.innerHeight]);
  S.useEffect(() => {
    window.setTimeout(() => {
      i([e.current.clientWidth, window.innerHeight]);
    }, 300);
  }, []);
  const o = {
    width: n[0] ? "100%" : "70%",
    height: `${r[0] * 1}px`,
    position: "relative",
    textAlign: "center",
    display: "inline-block"
  }, l = [
    { picurl: "https://user0514.cdnw.net/shared/img/thumb/hana-ikeda_FP03499-497_TP_V.jpg", url: "/" },
    { picurl: "https://user0514.cdnw.net/shared/img/thumb/rinmon625-9597_TP_V.jpg", url: "/" },
    { picurl: "https://user0514.cdnw.net/shared/img/thumb/rinmon625-9598_TP_V.jpg", url: "/" },
    { picurl: "https://user0514.cdnw.net/shared/img/thumb/rinmon625-9598_TP_V.jpg", url: "/" },
    { picurl: "https://user0514.cdnw.net/shared/img/thumb/rinmon625-9598_TP_V.jpg", url: "/" }
  ], s = S.useRef(null);
  return /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
    /* @__PURE__ */ w.jsxs("div", { ref: e, style: {
      ...o,
      whiteSpace: "nowrap"
    }, children: [
      /* @__PURE__ */ w.jsx(pT, { phonestate: n, ref: s, imgurl: l, width: r[0], height: r[0], setmergin: 0.05 }),
      /* @__PURE__ */ w.jsx(f1, { lr: "l", clicktriger: () => {
        s.current("l", "l");
      } }),
      /* @__PURE__ */ w.jsx(f1, { lr: "r", clicktriger: () => {
        s.current("r", "r");
      } })
    ] }),
    /* @__PURE__ */ w.jsx("div", { style: { width: "100%", height: "2em", backgroundColor: "" } })
  ] });
}, pT = S.forwardRef((t, e) => {
  const n = S.useState(!1);
  t.phonestate;
  var r = parseInt((t.imgurl.length - 1) / 2);
  const i = S.useState(r), o = K(
    () => ({ x: 0 })
  );
  var l = t.imgurl.length - 1;
  S.useEffect(() => {
    console.log(i[0]);
    let d = -t.width * (i[0] - parseInt((t.imgurl.length - 1) / 2));
    return o[1]({ x: d }), () => {
    };
  }, [i[0]]), S.useImperativeHandle(
    e,
    () => (d, g) => (d == "s" && n[1](!0), d == "l" ? i[0] <= 0 ? i[1]((p) => l) : i[1]((p) => p - 1) : d == "r" && (i[0] >= l ? i[1]((p) => 0) : i[1]((p) => p + 1)), 1)
  );
  const s = {
    ...o[0],
    left: `${-t.width * r}px`,
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
  }, []);
  const a = S.useState(!1), u = K({
    transform: a[0] ? "scale(0.99,0.99)" : "scale(1,1)",
    filter: a[0] ? "grayscale(20%)" : "grayscale(0%)"
  }), c = S.useCallback(
    () => {
      a[1](!0);
    }
  ), h = t.imgurl.map((d, g) => {
    const p = K({
      filter: i[0] == g ? "grayscale(0%)" : "grayscale(100%)",
      config: { duration: 100 }
    });
    return /* @__PURE__ */ w.jsx(
      Z.div,
      {
        className: "rowimage",
        onMouseEnter: () => c(),
        onMouseLeave: () => {
          a[1](!1);
        },
        onTouchStart: () => c(),
        onTouchEnd: () => {
          a[1](!1);
        },
        onClick: () => {
          window.setTimeout(() => {
          }, 300);
        },
        style: {
          ...u,
          ...p,
          ...s,
          backgroundImage: `url("${d.picurl}")`
        }
      },
      g
    );
  });
  return /* @__PURE__ */ w.jsx(w.Fragment, { children: h });
}), f1 = (t) => {
  const e = S.useState(0);
  t.lr, S.useEffect(() => {
  });
  const n = t.lr == "l" ? { left: 0, rotate: 90 } : { right: 0, rotate: -90 }, r = K({
    //backgroundColor:btnst[0]==0?"rgba(0,100,100,1)":"rgba(200,100,100,1)"
  }), i = K(() => t.lr == "l" ? {
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
  return /* @__PURE__ */ w.jsx(Z.div, { className: "yajirushi", onClick: () => {
    l(), t.clicktriger();
  }, style: {
    ...n,
    ...i[0],
    ...r,
    ...o
  } });
}, Kh = /* @__PURE__ */ new Map(), pu = /* @__PURE__ */ new WeakMap();
let d1 = 0, gT;
function mT(t) {
  return t ? (pu.has(t) || (d1 += 1, pu.set(t, d1.toString())), pu.get(t)) : "0";
}
function vT(t) {
  return Object.keys(t).sort().filter((e) => t[e] !== void 0).map((e) => `${e}_${e === "root" ? mT(t.root) : t[e]}`).toString();
}
function yT(t) {
  let e = vT(t), n = Kh.get(e);
  if (!n) {
    const r = /* @__PURE__ */ new Map();
    let i;
    const o = new IntersectionObserver((l) => {
      l.forEach((s) => {
        var a;
        const u = s.isIntersecting && i.some((c) => s.intersectionRatio >= c);
        t.trackVisibility && typeof s.isVisible > "u" && (s.isVisible = u), (a = r.get(s.target)) == null || a.forEach((c) => {
          c(u, s);
        });
      });
    }, t);
    i = o.thresholds || (Array.isArray(t.threshold) ? t.threshold : [t.threshold || 0]), n = {
      id: e,
      observer: o,
      elements: r
    }, Kh.set(e, n);
  }
  return n;
}
function _T(t, e, n = {}, r = gT) {
  if (typeof window.IntersectionObserver > "u" && r !== void 0) {
    const a = t.getBoundingClientRect();
    return e(r, {
      isIntersecting: r,
      target: t,
      intersectionRatio: typeof n.threshold == "number" ? n.threshold : 0,
      time: 0,
      boundingClientRect: a,
      intersectionRect: a,
      rootBounds: a
    }), () => {
    };
  }
  const {
    id: i,
    observer: o,
    elements: l
  } = yT(n);
  let s = l.get(t) || [];
  return l.has(t) || l.set(t, s), s.push(e), o.observe(t), function() {
    s.splice(s.indexOf(e), 1), s.length === 0 && (l.delete(t), o.unobserve(t)), l.size === 0 && (o.disconnect(), Kh.delete(i));
  };
}
function cf({
  threshold: t,
  delay: e,
  trackVisibility: n,
  rootMargin: r,
  root: i,
  triggerOnce: o,
  skip: l,
  initialInView: s,
  fallbackInView: a,
  onChange: u
} = {}) {
  const c = S.useRef(), f = S.useRef(), [h, d] = S.useState({
    inView: !!s
  });
  f.current = u;
  const g = S.useCallback(
    (_) => {
      c.current !== void 0 && (c.current(), c.current = void 0), !l && _ && (c.current = _T(_, (v, m) => {
        d({
          inView: v,
          entry: m
        }), f.current && f.current(v, m), m.isIntersecting && o && c.current && (c.current(), c.current = void 0);
      }, {
        root: i,
        rootMargin: r,
        threshold: t,
        // @ts-ignore
        trackVisibility: n,
        // @ts-ignore
        delay: e
      }, a));
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
      a,
      e
    ]
  );
  S.useEffect(() => {
    !c.current && h.entry && !o && !l && d({
      inView: !!s
    });
  });
  const p = [g, h.inView, h.entry];
  return p.ref = p[0], p.inView = p[1], p.entry = p[2], p;
}
const $0 = (t) => {
  const e = t.hasOwnProperty("fadestate") ? t.fadestate : S.useState(!1);
  S.useEffect(() => {
  }, []);
  var n = Array.from(t.children).map((r, i, o) => {
    var l = 800, s = t.hasOwnProperty("basedelay") ? t.basedelay : 100;
    S.useEffect(() => {
      e[0] ? a[1]({ y: 100, delay: i * l / o.length + s }) : a[1]({ y: 0 });
    }, [e]), S.useEffect(() => {
      t.hasOwnProperty("fadestate") || e[1](!0);
    }, []);
    const a = K(() => ({
      from: { y: 0 },
      config: {
        duration: l / o.length
      }
      //,loop:true
    }));
    return /* @__PURE__ */ w.jsx(
      Z.div,
      {
        style: { opacity: a[0].y.to({ range: [0, 40, 70, 100], output: [0, 0.4, 0.7, 1] }), display: "inline-block" },
        children: r
      },
      i
    );
  });
  return /* @__PURE__ */ w.jsx("div", { style: { display: "inline" }, children: n });
}, xT = (t) => {
  const [e, n] = S.useState(!0);
  return S.useEffect(() => {
    setTimeout(() => n(!1), t);
  }, []), e;
}, wT = (t) => {
  const e = ["私達の声明", "顧客様のニーズに沿ったウェブサービスを設計することを誓います。"], n = ["我々の使命", "より多くの存在をウェブデザインし、ウェブ上からその存在を発信できるようにします。"], r = ["企画", "社会に新しいシステムを創造することに常に向き合い続けます。"], i = ["サービス", "顧客とやりとりしやすい距離からの制作をさせて頂きます。"], l = S.useRef(null), s = [window.innerWidth, window.innerHeight];
  xT(200);
  const a = K(
    () => ({
      from: { y: 0 },
      to: { y: 20 },
      loop: { reverse: !0 },
      config: {
        duration: 2e3
      }
    })
  ), u = t.phonestate, c = (g, p) => {
    var _ = l.current.getElementsByClassName(g + p)[0];
    const v = Ii.timeline({
      scrollTrigger: {
        trigger: _,
        start: "center center",
        end: "+=4000",
        //end: "top bottom", 
        scrub: !0,
        pin: !0
      }
    });
    v.to("." + g + p, { opacity: 1 }), v.to(_.getElementsByClassName("halo")[0], { strokeDashoffset: 2 * f * 3.3 * 3 / 4 }).to(_.getElementsByClassName("halokl")[0], { filter: "blur(0px)" }, "<"), p == "phone" && v.to("." + g + p, { x: -s[0] / 2, onComplete: () => {
    } }, "<"), v.to(_.getElementsByClassName("halo")[0], { strokeDashoffset: 2 * f * 3.3 * 2 / 4 }).to(_.getElementsByClassName("halojl")[0], { filter: "blur(0px)" }, "<"), p == "phone" && v.to("." + g + p, { x: 0 }), v.to(_.getElementsByClassName("halo")[0], { strokeDashoffset: 2 * f * 3.3 * 1 / 4 + 0 }).to(_.getElementsByClassName("halohj")[0], { filter: "blur(0px)" }, "<"), p == "phone" && v.to("." + g + p, { x: s[0] / 2 }, "<"), v.to(_.getElementsByClassName("halo")[0], { strokeDashoffset: 2 * f * 3.3 * 0 / 4 - 0 }).to(_.getElementsByClassName("halohk")[0], { filter: "blur(0px)", stroke: "red" }, "<"), p == "phone" && v.to("." + g + p, { x: 0 }), v.to(_.getElementsByClassName("halo")[0], { opacity: 1 });
  };
  S.useEffect(() => {
    window.setTimeout(() => {
      c("halo", "phone"), c("halo", "pc");
    }, 300);
  }, []), S.useEffect(() => {
  }, [u[0]]);
  const f = 100;
  K({
    from: { x: 2 * f * 3.14 },
    to: { x: 0 },
    loop: !0,
    config: { duration: 3e3 }
  });
  const h = {
    width: u[0] ? s[0] : s[0] / 2 - 11,
    height: s[1] / 2 - 11,
    backgroundColor: "rgba(110,110,190,1)",
    filter: "blur(0px)",
    position: "absolute",
    //padding:"6em"
    boxSizing: "border-box",
    color: "white",
    overflow: "hidden",
    left: u[0] ? `${s[0] / 2}px` : "0px"
  }, d = {
    width: u[0] ? s[0] : s[0] / 2 - 11,
    height: s[1] / 2 - 11,
    backgroundColor: "rgba(110,110,190,1)",
    filter: "blur(0px)",
    position: "absolute",
    //padding:"6em"
    boxSizing: "border-box",
    color: "white",
    overflow: "hidden",
    right: u[0] ? `${s[0] / 2}px` : "0px"
  };
  return /* @__PURE__ */ w.jsxs("div", { ref: l, className: t.className, style: { position: "relative", zIndex: 11 }, children: [
    /* @__PURE__ */ w.jsx("div", { className: "switch", style: { display: u[0] ? "block" : "none", position: "relative" }, children: /* @__PURE__ */ w.jsxs("div", { className: "halophone", style: { width: "100vw", height: "100vh", backgroundColor: "rgba(100,100,100,.9)", position: "relative" }, children: [
      /* @__PURE__ */ w.jsx("div", { className: "halohk", style: { top: "0em", ...d }, children: /* @__PURE__ */ w.jsx(ni, { phonestate: u, part: "2nd", delay: 0, title: n[0], children: n[1] }) }),
      /* @__PURE__ */ w.jsx("div", { className: "halojl", style: { bottom: "10px", ...h }, children: /* @__PURE__ */ w.jsx(ni, { phonestate: u, part: "4th", delay: 1e3, title: i[0], children: i[1] }) }),
      /* @__PURE__ */ w.jsx("div", { className: "halokl", style: { top: "0em", ...h }, children: /* @__PURE__ */ w.jsx(ni, { phonestate: u, part: "1st", delay: 0, title: e[0], children: e[1] }) }),
      /* @__PURE__ */ w.jsx("div", { className: "halohj", style: { bottom: "10px", ...d }, children: /* @__PURE__ */ w.jsx(ni, { phonestate: u, part: "3rd", delay: 1e3, title: r[0], children: r[1] }) }),
      /* @__PURE__ */ w.jsxs("svg", { width: "100vw", height: "100vh", style: { backgroundColor: "rgba(1,1,1,0)", position: "relative" }, children: [
        /* @__PURE__ */ w.jsx(Z.circle, { className: "halo", cx: s[0] / 2, cy: s[1] / 2, r: a[0].y.to({ range: [0, 20], output: [f - 3, f] }), strokeWidth: "12", stroke: "yellow", fill: "rgba(1,1,1,0)", transform: `rotate(-90 ${s[0] / 2} ${s[1] / 2})`, style: { backgroundColor: "red", filter: "blur(4px)", zIndex: 1e5 }, strokeDasharray: `${2 * f * 3.3}`, strokeDashoffset: 2 * f * 3.3, opacity: 0.5 }),
        /* @__PURE__ */ w.jsx(Z.circle, { cx: s[0] / 2, cy: s[1] / 2, r: f - 4, strokeWidth: "0.8", stroke: "rgba(1,1,1,0.5)", fill: "red" })
      ] }),
      t.children
    ] }) }),
    /* @__PURE__ */ w.jsx("div", { className: "switch", style: { display: u[0] ? "none" : "block", position: "relative" }, children: /* @__PURE__ */ w.jsxs("div", { className: "halopc", style: { bottom: 0, display: u[0] ? "none" : "block", width: "100vw", height: "100vh", backgroundColor: "rgba(100,100,100,.9)", position: "relative" }, children: [
      /* @__PURE__ */ w.jsx("div", { className: "halohk", style: { top: "50px", ...h }, children: /* @__PURE__ */ w.jsx(ni, { phonestate: u, part: "2nd", delay: 1e3, title: n[0], children: n[1] }) }),
      /* @__PURE__ */ w.jsx("div", { className: "halojl", style: { bottom: "-30px", ...d }, children: /* @__PURE__ */ w.jsx(ni, { phonestate: u, part: "4th", delay: 1e3, title: i[0], children: i[1] }) }),
      /* @__PURE__ */ w.jsx("div", { className: "halokl", style: { top: "50px", ...d }, children: /* @__PURE__ */ w.jsx(ni, { phonestate: u, part: "1st", delay: 1e3, title: e[0], children: e[1] }) }),
      /* @__PURE__ */ w.jsx("div", { className: "halohj", style: { bottom: "-30px", ...h }, children: /* @__PURE__ */ w.jsx(ni, { phonestate: u, part: "3rd", delay: 1e3, title: r[0], children: r[1] }) }),
      /* @__PURE__ */ w.jsxs("svg", { width: "100vw", height: "100vh", style: { top: "50px", backgroundColor: "rgba(1,1,1,0)", position: "relative" }, children: [
        /* @__PURE__ */ w.jsx(Z.circle, { className: "halo", cx: s[0] / 2, cy: s[1] / 2, r: a[0].y.to({ range: [0, 20], output: [f + 12, f + 15] }), strokeWidth: "20", stroke: "yellow", fill: "rgba(1,1,1,0)", transform: `rotate(-90 ${s[0] / 2} ${s[1] / 2})`, style: { backgroundColor: "red", filter: "blur(4px)", zIndex: 1e5 }, strokeDasharray: `${2 * (f + 12) * 3.3}`, strokeDashoffset: 2 * f * 3.3, opacity: 0.5 }),
        /* @__PURE__ */ w.jsx(Z.circle, { onClick: () => {
        }, cx: s[0] / 2, cy: s[1] / 2, r: f + 9, strokeWidth: "0.5", stroke: "rgba(1,1,1,0.5)", fill: "green" })
      ] }),
      t.children
    ] }) })
  ] });
}, ni = (t) => {
  const e = t.phonestate, n = {
    position: "absolute",
    width: "90%",
    height: "50%",
    paddingLeft: e[0] ? "0.4em" : "1em",
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
  }, s = {
    right: e[0] ? "30vw" : "20px"
  }, a = {
    left: e[0] ? "30vw" : "20px"
  }, u = {
    left: e[0] ? "30vw" : "20px"
  }, c = {
    right: e[0] ? "30vw" : "20px"
  }, f = Object.assign(t.part == "1st" ? r : t.part == "2nd" ? i : t.part == "3rd" ? o : t.part == "4th" ? l : {}), h = Object.assign(t.part == "1st" ? s : t.part == "2nd" ? a : t.part == "3rd" ? u : t.part == "4th" ? c : {}), d = Object.assign(t.part == "1st" ? { top: "2em", textAlign: "right", paddingRight: "20px" } : t.part == "2nd" ? { top: "2em", textAlign: "left", paddingLeft: "20px" } : t.part == "3rd" ? { bottom: e[0] ? "1em" : "2em", textAlign: "left", paddingLeft: "20px" } : t.part == "4th" ? { bottom: e[0] ? "1em" : "2em", textAlign: "right", paddingRight: "20px" } : {}), g = cf({
    rootMarginLeft: "1000px",
    threshold: 0.2,
    triggerOnce: !1
  });
  S.useEffect(() => {
  }, [g]);
  const p = K({
    opacity: g.inView ? 1 : 0,
    y: g.inView ? 0 : 200,
    delay: 100,
    config: { duration: 1e3 }
  }), _ = K({
    boxShadow: g.inView ? "10px 5px 5px black" : "10px 5px 5px rgba(1,1,1,0)",
    delay: 1100,
    config: { duration: 1e3 }
  });
  K({
    color: g.inView ? "white" : "black",
    delay: 500
  });
  const v = {
    position: "absolute",
    width: "100%",
    height: "1.2em",
    lineHeight: "1em",
    display: "inline",
    fontSize: "2.5em",
    backgroundColor: "black",
    boxSizing: "border-box",
    overflow: "visible",
    whiteSpace: "nowrap"
    // ,border:"solid 5px red"
  }, m = {
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
  return /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
    /* @__PURE__ */ w.jsx(Z.div, { style: {
      fontFamily: "'DotGothic16'",
      ...v,
      ...d,
      zIndex: 5,
      left: "0px"
    }, children: /* @__PURE__ */ w.jsx($0, { fadestate: [g.inView, null], children: t.title }) }),
    /* @__PURE__ */ w.jsx("div", { ref: g.ref, className: "viewpart", style: { position: "absolute", zIndex: 1, height: "100%", width: "40px", ...h, backgroundColor: "rgba(221,221,221,0.8)" } }),
    /* @__PURE__ */ w.jsxs(Z.div, { style: { overflow: "hidden", fontFamily: "'DotGothic16'", ...p, ..._, ...n, ...f, zIndex: 4 }, children: [
      /* @__PURE__ */ w.jsx(
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
      /* @__PURE__ */ w.jsx(
        "div",
        {
          className: "wrap2",
          style: {
            ...m,
            transform: e[0] ? "translateY(53%) translateX(4%)" : "translateY(58%) translateX(4%)",
            color: "rgba(0,0,0,0.2)"
          },
          children: t.children
        }
      ),
      /* @__PURE__ */ w.jsx(
        "div",
        {
          className: "wrap",
          style: {
            ...m,
            transform: e[0] ? "translateY(50%) translateX(1%)" : "translateY(56%) translateX(2%)",
            color: "white"
          },
          children: t.children
        }
      )
    ] })
  ] });
}, kT = (t) => {
  const r = S.useRef(null), i = S.useRef(null), o = t.phonestate, l = () => {
    Ii.timeline({
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
    const f = Ii.timeline({
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
        bottom: `${s[1] / 2 - 200}px`
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
  const s = [window.innerWidth, window.innerHeight], a = {
    position: "absolute",
    color: "white",
    width: `${s[0] * 0.6}px`,
    height: "300px",
    backgroundColor: "rgba(1,1,1,0)",
    border: "double 6px rgba(233,2,2,1)",
    opacity: 1,
    zIndex: 1
  };
  return /* @__PURE__ */ w.jsx(w.Fragment, { children: /* @__PURE__ */ w.jsxs("div", { ref: r, className: t.className, style: {
    backgroundImage: 'url("https://static.rtrp.jp/article/92597/images/92597a5de3dba-2a02-4ff9-90ca-b352d48cec80_m.jpg")',
    backgroundPosition: "top 0px right 0px",
    backgroundSize: "100vw 300vh",
    width: "100vw",
    height: "100vh",
    position: "relative",
    zIndex: 10
  }, children: [
    /* @__PURE__ */ w.jsxs("div", { className: "comaX", style: {
      boxShadow: "10px 5px 5px black",
      paddingTop: "100px",
      minWidth: "300px",
      boxSizing: "border-box",
      width: `${o[0] ? s[0] + 0 : s[0] * 0.4}px`,
      height: `${200 + 100}vh`,
      left: `${o[0] ? 0 : s[0] * 0.33}px`,
      backgroundColor: "rgba(60,60,200,0.9)",
      position: "absolute",
      zIndex: 2
    }, children: [
      t.children[0],
      /* @__PURE__ */ w.jsx("div", { style: {
        width: "100%",
        height: "20vh",
        textAlign: "center"
      } }),
      t.children[1]
    ] }),
    /* @__PURE__ */ w.jsx(ST, { ref: i, phonestate: o }),
    /* @__PURE__ */ w.jsx("div", { className: "coma1", style: { ...a, left: `${s[0] * 0.1}px`, bottom: "-300px" } }),
    /* @__PURE__ */ w.jsx("div", { className: "coma1", style: { ...a, left: `${s[0] * 0.7}px`, bottom: "100px" } }),
    /* @__PURE__ */ w.jsx("div", { className: "coma2", style: { ...a, left: `${s[0] * 0.6}px`, bottom: "-130px" } }),
    /* @__PURE__ */ w.jsx("div", { className: "coma2", style: { ...a, left: "71%", bottom: "400px" } }),
    /* @__PURE__ */ w.jsx("div", { className: "coma3", style: { ...a, left: `${s[0] * 0.8}px`, bottom: "30px" }, children: " " }),
    /* @__PURE__ */ w.jsx("div", { className: "coma3", style: { ...a, left: "-10%", bottom: "400px" } })
  ] }) });
}, ST = S.forwardRef((t, e) => {
  S.useImperativeHandle(
    e,
    () => (s, a) => (r[1](s), r[0])
  );
  const n = t.phonestate, r = S.useState(!1), i = K({
    bottom: r[0] ? "0" : "-60vh"
  });
  S.useEffect(() => {
    screen.availWidth < 500 || window.innerHeight < 500 ? n[1](!0) : n[1](!1);
  }, []);
  const o = {
    position: "relative",
    left: 0,
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
  return /* @__PURE__ */ w.jsxs(Z.div, { className: "footer", style: {
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
    /* @__PURE__ */ w.jsx("div", { onClick: () => {
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
    /* @__PURE__ */ w.jsx("div", { style: {
      position: "absolute",
      zIndex: 2,
      fontFamily: "'Kiwi Maru','serif','DotGothic16'",
      fontWeight: 900,
      left: `${window.innerWidth * 0.05}px`,
      top: `${window.innerWidth * (n[0] ? 0.1 : 0.04)}px`,
      fontSize: "1.5em",
      transform: "scale(0.9,1.1)"
    }, children: "Rommet" }),
    /* @__PURE__ */ w.jsxs("div", { style: {
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
      /* @__PURE__ */ w.jsx("div", { style: { ...o }, children: "ウェブサイトご利用条件" }),
      /* @__PURE__ */ w.jsx("div", { style: { ...o }, children: "ソーシャルメディアポリシー" }),
      /* @__PURE__ */ w.jsx("div", { style: { ...o }, children: "個人情報保護方針" }),
      /* @__PURE__ */ w.jsx("div", { style: { ...o }, children: "お問い合わせ" }),
      /* @__PURE__ */ w.jsx("div", { style: {
        width: "100%",
        height: "200px",
        position: "absolute",
        top: `${window.innerWidth * (n[0] ? 0.5 : 0.14)}px`
      }, children: /* @__PURE__ */ w.jsxs("div", { style: {
        backgroundColor: "rgba(200,220,220,0.9)",
        display: "inline-block",
        position: "relative",
        height: "82px"
      }, children: [
        /* @__PURE__ */ w.jsx(h1, { children: /* @__PURE__ */ w.jsx("div", { className: "imagecmp", style: {
          ...l,
          backgroundImage: 'url("https://github.githubassets.com/assets/apple-touch-icon-180x180-a80b8e11abe2.png")'
        } }) }),
        /* @__PURE__ */ w.jsx(h1, { children: /* @__PURE__ */ w.jsx("div", { className: "imagecmp", style: {
          ...l,
          backgroundColor: "white",
          backgroundImage: 'url("https://cdn.qiita.com/assets/public/push_notification/image-qiitan-572179a3bbde375850422ea48b2b6272.png")'
        } }) })
      ] }) })
    ] })
  ] });
}), h1 = (t) => {
  const e = S.useState(!1), n = K({
    transform: e[0] ? "scale(1.2,1.2)" : "scale(1,1)"
  });
  return /* @__PURE__ */ w.jsx(
    Z.div,
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
}, lw = S.createContext({ lite: "bbb" }), CT = () => {
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
}, ET = S.forwardRef((t, e) => {
  CT();
  const n = S.useState(0), r = S.useState(0), i = S.useState([0, 0]), o = S.useState(!0), l = S.useRef(null);
  S.useContext(lw);
  var s = null;
  S.useImperativeHandle(
    e,
    () => (v, m) => (clearTimeout(s), s = window.setTimeout(() => {
      (screen.availWidth < 500 || window.innerWidth < 500) && h[1](!1);
    }, 3e3), (screen.availWidth < 500 || window.innerWidth < 500) && h[1](!0), d[1](!d[0]), d[0])
  );
  const a = t.lr == "L" ? { left: `${n[0]}px` } : { right: `${n[0]}px` }, u = {
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
      (screen.availWidth < 500 || window.innerWidth < 500) && h[1](!1);
    }, 3e3), l.current.addEventListener("selectstart", (v) => {
      v.preventDefault();
    });
  }, []);
  const h = S.useState(!0);
  S.useEffect(() => {
    (screen.availWidth < 500 || window.innerWidth < 500) && d[1](!0);
  }, [h]), K(() => ({
    to: { rotate: 360 },
    from: { rotate: 0 },
    config: { duration: 2e3 },
    loop: !0
  }));
  const d = S.useState(!0), g = K({
    boxShadow: d[0] ? "0px 0px 25px 22px rgba(220, 220, 220, .8)" : "10px 5px 5px 10px rgba(220, 220, 220, 0)",
    filter: d[0] ? "brightness(100%)" : "brightness(60%)"
  });
  S.useEffect(() => {
  }, [d[0]]);
  const p = K({
    opacity: h[0] ? 1 : 0,
    config: { duration: 1e3 }
  }), _ = {
    position: "absolute",
    width: `${o[0] ? window.innerWidth / 1 : window.innerWidth / 2 - 100}px`,
    height: `${o[0] ? window.innerHeight / 1 : window.innerHeight / 1 - 200}px`,
    backgroundColor: "rgba(1,1,1,1)",
    border: "double rgba(255,0,0,0.7) 10px",
    boxSizing: "border-box",
    zIndex: 100,
    bottom: `${o[0] ? 0 : i[0][1]}px`
  };
  return /* @__PURE__ */ w.jsxs(Z.div, { ref: l, style: {
    ...g,
    pointerEvents: "none",
    ...p,
    ...a,
    userSelect: "none",
    textAlign: "center",
    ..._
  }, children: [
    /* @__PURE__ */ w.jsxs("div", { style: {
      position: "relative",
      top: `${o[0] ? window.innerHeight * 0.2 : (window.innerHeight - 150) * 0.25}px`
    }, children: [
      /* @__PURE__ */ w.jsx("div", { style: { ...u, marginBottom: "20px" }, children: "Origin Club" }),
      /* @__PURE__ */ w.jsx("div", { style: { ...c }, children: "オリジナリティあふれるサイトを作ろう！" }),
      /* @__PURE__ */ w.jsxs("div", { className: "", style: {
        left: "-10px",
        ...f,
        marginTop: "5px",
        height: "5em",
        width: o[0] ? `${window.innerWidth * 0.9}px` : `${window.innerWidth / 2 - 100}px`,
        display: "inline-block",
        overflow: "hidden"
      }, children: [
        "はじめまして！ようこそOrigin Clubへ。",
        /* @__PURE__ */ w.jsx("br", {}),
        "我々は人々のくらしをコンピューターの力でさらに豊かな方向へ導くことを",
        /* @__PURE__ */ w.jsx("br", {}),
        "目的としたプログラマー集団です。"
      ] })
    ] }),
    /* @__PURE__ */ w.jsx("style", { children: `
   @import url('https://fonts.googleapis.com/css?family=Dela Gothic One');

` })
  ] });
}), TT = (t) => {
  const e = t.phonestate;
  var n = e[0] ? [window.innerWidth * 1, window.innerHeight * 0.7] : [window.innerWidth / 2 - 100, window.innerHeight / 1.3];
  const r = e[0] ? [0, window.innerHeight / 2 - window.innerHeight * 0.6 / 2] : [100, window.innerHeight / 2 - window.innerHeight * 0.45], i = S.useRef(null);
  S.useState(!1);
  const o = S.useState(!1);
  cf({
    rootMargin: "0px",
    triggerOnce: !1
  }), S.useEffect(() => {
    var p = 0;
    u.current(!0, !0), setInterval(() => {
      p++, p % 4 == 1 ? u.current(!1, !1) || c.current(!1, !1) || f.current(!1, !1) || h.current(!1, !1) || (u.current(!0, !0), c.current(!1, !0), f.current(!1, !0), h.current(!1, !0)) : p % 4 == 2 ? u.current(!1, !1) || c.current(!1, !1) || f.current(!1, !1) || h.current(!1, !1) || (u.current(!1, !0), c.current(!0, !0), f.current(!1, !0), h.current(!1, !0)) : p % 4 == 3 ? u.current(!1, !1) || c.current(!1, !1) || f.current(!1, !1) || h.current(!1, !1) || (u.current(!1, !0), c.current(!1, !0), f.current(!0, !0), h.current(!1, !0)) : p % 4 == 0 && (u.current(!1, !1) || c.current(!1, !1) || f.current(!1, !1) || h.current(!1, !1) || (u.current(!1, !0), c.current(!1, !0), f.current(!1, !0), h.current(!0, !0)));
    }, 2e3);
  }, []);
  const l = t.lr == "L" ? { left: `${r[0]}px` } : { right: `${r[0]}px` }, s = K({
    opacity: o[0] ? 0 : 1,
    pointerEvents: o[0] ? "none" : "auto",
    y: o[0] ? -100 : 0,
    x: o[0] ? 10 : 0,
    rotate: o[0] ? 10 : 0,
    delay: 400,
    config: {
      duration: 500
    }
  }), a = (p) => {
    p == "footer" ? window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    }) : document.getElementsByClassName(p)[0].scrollIntoView(
      { behavior: "smooth", block: "nearest" }
    );
  }, u = S.useRef(null), c = S.useRef(null), f = S.useRef(null), h = S.useRef(null);
  S.useContext(lw);
  const d = {
    backgroundColor: "rgba(110,110,190,1)",
    borderTop: "solid 1px rgba(0,0,0,0.8)",
    borderLeft: "solid 1px rgba(0,0,0,0.8)",
    borderRight: "solid 5px rgba(0,0,0,0.8)",
    borderBottom: "solid 5px rgba(0,0,0,0.8)",
    margin: "0px",
    paddingTop: "2em",
    width: `${n[0] - 0}px`,
    height: `${n[1]}px`,
    boxShadow: "0px 0px 0px 0px black",
    overflow: "visible",
    boxSizing: "border-box",
    bottom: `${r[1]}px`
  }, g = (p) => {
    p == 0 ? (u.current(!0, !0), c.current(!1, !0), f.current(!1, !0), h.current(!1, !0)) : p == 1 ? (u.current(!1, !0), c.current(!0, !0), f.current(!1, !0), h.current(!1, !0)) : p == 2 ? (u.current(!1, !0), c.current(!1, !0), f.current(!0, !0), h.current(!1, !0)) : p == 3 && (u.current(!1, !0), c.current(!1, !0), f.current(!1, !0), h.current(!0, !0));
  };
  return /* @__PURE__ */ w.jsxs(Z.div, { onClick: () => {
  }, ref: i, style: {
    ...s,
    position: "absolute",
    color: "rgba(113, 36, 0,1)",
    ...d,
    ...l,
    zIndex: 1
  }, children: [
    /* @__PURE__ */ w.jsx(gu, { phonestate: e, picsheeturl: "https://user0514.cdnw.net/shared/img/thumb/zubottyDSC07997-268_TP_V.jpg", ref: u, delay: 200 * 0, btnid: 0, alloff: (p) => {
      g(p);
    }, btmright: [0, n[1] / 20], invokefunc: () => {
      a("aboutcomp");
    }, children: "メッセージ" }),
    /* @__PURE__ */ w.jsx(gu, { phonestate: e, picsheeturl: "https://user0514.cdnw.net/shared/img/thumb/zubottyDSC07997-268_TP_V.jpg", ref: c, delay: 200 * 1, btnid: 1, alloff: (p) => {
      g(p);
    }, btmright: [0, n[1] / 5 + n[1] / 20], invokefunc: () => {
      t.setfunc.current();
    }, children: "私たちについて" }),
    /* @__PURE__ */ w.jsx(gu, { phonestate: e, picsheeturl: "https://user0514.cdnw.net/shared/img/thumb/zubottyDSC07997-268_TP_V.jpg", ref: f, delay: 200 * 2, btnid: 2, alloff: (p) => {
      g(p);
    }, btmright: [0, n[1] * 2 / 5 + n[1] / 20], invokefunc: () => {
      a("updatelog");
    }, children: "Update Log" }),
    /* @__PURE__ */ w.jsx(gu, { phonestate: e, picsheeturl: "https://user0514.cdnw.net/shared/img/thumb/zubottyDSC07997-268_TP_V.jpg", ref: h, delay: 200 * 3, btnid: 3, alloff: (p) => {
      g(p);
    }, btmright: [0, n[1] * 3 / 5 + n[1] / 20], invokefunc: () => {
      a("footer");
    }, children: "コンタクト" })
  ] });
}, gu = S.forwardRef((t, e) => {
  const n = S.useRef(null), r = S.useState(!1), i = S.useState(!1), o = t.phonestate;
  S.useImperativeHandle(
    e,
    () => (c, f) => (i[0] || r[1](!1), f && r[1](c), i[0])
  );
  const l = o[0] ? [window.innerWidth, window.innerHeight * 0.7 / 8] : [window.innerWidth / 2 - 100 / 8, window.innerHeight / 1.3 / 8];
  o[0] ? window.innerHeight / 2 - window.innerHeight * 0.6 / 2 : window.innerHeight / 2 - window.innerHeight * 0.45;
  const s = K({
    transform: r[0] ? "translate(0px,-7px)" : "translate(0px,0px)",
    borderTop: r[0] ? "double 14px rgba(255,255,255,1)" : "solid 7px rgba(255,255,255,1)",
    borderBottom: r[0] ? "double 14px rgba(255,255,255,1)" : "solid 7px rgba(255,255,255,1)",
    color: r[0] ? "rgba(220,220,220,1)" : "rgba(50,50,50,0.3)",
    backgroundColor: r[0] ? "rgba(80,80,80,0.7)" : "rgba(210,210,210,1)",
    config: {
      duration: 1e3
    }
  }), a = K({
    width: r[0] ? "5px" : "20px",
    height: r[0] ? "20px" : "5px",
    left: r[0] ? "-0px" : "-10px",
    top: r[0] ? `${l[1] / 2 - 10}px` : `${l[1] / 2 - 2.5}px`,
    config: {
      duration: 500
    }
  });
  K(() => ({ from: { x: 0 }, to: { x: 10 }, loop: { reverse: !0 }, config: { duration: 3e3 } }));
  const u = {
    height: `${l[1] * (o[0] ? 1.3 : 1)}px`,
    whiteSpace: "nowrap",
    lineHeight: `${l[1] * (o[0] ? 1.3 : 1)}px`,
    fontSize: `${l[1] / 2 * (o[0] ? 1.3 : 1)}px`,
    position: "absolute",
    verticalAlign: "top",
    display: "inline-block",
    width: `${l[0]}px`,
    maxWidth: "100%",
    filter: "blur(0px)"
  };
  return S.useEffect(() => {
    if (screen.availWidth < 500 || window.innerWidth < 500) {
      var c = null;
      n.current.addEventListener("touchstart", () => {
        clearTimeout(c), c = window.setTimeout(() => {
          t.invokefunc(!0), t.alloff(t.btnid), r[1](!1), i[1](!1);
        }, 1e3), r[1](!0), i[1](!0);
      }), n.current.addEventListener("touchend", () => {
        clearTimeout(c), r[1](!1), i[1](!1);
      });
    } else
      n.current.addEventListener("click", () => {
        r[1](!0), i[1](!0), t.invokefunc(!0);
      }), n.current.addEventListener("mouseenter", () => {
        r[1](!0), t.alloff(t.btnid), i[1](!0);
      }), n.current.addEventListener("mouseleave", () => {
        r[1](!1), i[1](!1);
      });
    n.current.addEventListener("selectstart", (f) => {
      f.preventDefault();
    });
  }, []), /* @__PURE__ */ w.jsxs(Z.div, { ref: n, style: {
    ...u,
    ...s,
    userSelect: "none",
    right: `${t.btmright[0]}px`,
    zIndex: 3e4,
    top: `${t.btmright[1]}px`
  }, children: [
    /* @__PURE__ */ w.jsx(Z.div, { style: {
      ...a,
      display: "inline-block",
      position: "absolute",
      backgroundColor: "white"
    } }),
    /* @__PURE__ */ w.jsx("div", { style: {
      display: "inline-block",
      fontFamily: "'DotGothic16'"
    }, children: t.children })
  ] });
}), bT = (t) => {
  const [e, n] = S.useState([1e3, 300]), r = S.useState(!0), i = S.useState(0), o = S.useState(0), l = cf({
    rootMargin: "2px",
    triggerOnce: !1
  });
  S.useEffect(() => {
    screen.availWidth < 500 || window.innerWidth < 500 ? (r[1](!0), n([window.innerWidth * 1, window.innerHeight * 0.6]), i[1](0), o[1](window.innerHeight / 2 - window.innerHeight * 0.6 / 2)) : (r[1](!1), n([window.innerWidth / 2 - 240, window.innerHeight / 2]), i[1](150), o[1](window.innerHeight / 2 - window.innerHeight / 2 / 2));
  }, []);
  const s = t.lr == "L" ? { left: `${i[0]}px` } : t.lr == "R" ? { right: `${i[0]}px` } : {}, a = t.children.slice(0, 4).map((h, d) => /* @__PURE__ */ w.jsx(p1, { fontsize: 0.5, i: d, title: h.title, link: h.link }, d));
  t.children.slice(2).map((h, d) => /* @__PURE__ */ w.jsx(p1, { fontsize: 0.9, i: d, title: h.title, link: h.link }));
  const u = K(() => ({
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
  return /* @__PURE__ */ w.jsxs(Z.div, { ref: l.ref, className: "updatelog", style: {
    ...c,
    ...u[0],
    ...s
  }, children: [
    /* @__PURE__ */ w.jsx(Z.div, { style: {
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
    }, children: /* @__PURE__ */ w.jsx($0, { fadestate: [l[1], null], basedelay: 500, children: "-Update Log-" }) }),
    /* @__PURE__ */ w.jsx("div", { style: { ...f, height: "75%", paddingTop: "0.4em", overflowY: "scroll" }, children: a }),
    /* @__PURE__ */ w.jsx(Z.div, { style: {
      backgroundColor: "rgba(200,90,90,1)",
      boxSizing: "border-box",
      padding: "8px",
      fontSize: r[0] ? "1.2em" : "0.5em",
      color: "rgba(100,100,100,1)",
      WebkitTextStrokeColor: "rgba(220,220,220,1)",
      fontFamily: "'Kosugi Maru'"
    }, children: "残りのログ" }),
    /* @__PURE__ */ w.jsx(Z.div, { style: { position: "relative", top: "0" } })
  ] });
}, p1 = (t) => {
  const e = S.useRef(null), n = S.useState(!0), r = S.useState(!1), i = K(() => ({
    from: { transform: "scale(1,1)", backgroundColor: "rgba(220,220,220,1)" },
    config: {
      duration: 200
    }
  }));
  var o = null;
  const l = S.useCallback(() => {
    r[1](!0), i[1]({ transform: "scale(1.2,1.2)", backgroundColor: "white" }), o = window.setTimeout(() => {
    }, 250);
  }), s = S.useCallback(() => {
    clearTimeout(o), r[1](!1), i[1]({ delay: 1e3, transform: "scale(1,1)", backgroundColor: "rgba(220,220,220,1)" });
  });
  return S.useEffect(() => {
    screen.availWidth < 500 || window.innerWidth < 500 ? (n[1](!0), e.current.addEventListener("touchstart", () => {
      l();
    }), e.current.addEventListener("touchend", () => {
      s();
    })) : (n[1](!1), e.current.addEventListener("click", () => {
    }), e.current.addEventListener("mouseenter", () => {
      l();
    }), e.current.addEventListener("mouseleave", () => {
      s();
    }));
  }, []), /* @__PURE__ */ w.jsx(Z.div, { ref: e, style: {
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
  }, children: /* @__PURE__ */ w.jsxs("div", { style: {
    fontFamily: "'DotGothic16'",
    whiteSpace: "nowrap",
    height: "100%",
    width: "100%",
    backgroundColor: "",
    overflowWrap: "break-word",
    boxSizing: "border-box",
    display: "block",
    fontSize: `${n[0] ? t.fontsize * 0.6 : t.fontsize}em`
  }, children: [
    /* @__PURE__ */ w.jsx("div", { style: {
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
    /* @__PURE__ */ w.jsx(PT, { text: t.title })
  ] }, `key${t.i}`) });
}, PT = (t) => {
  const e = S.useState(!1), n = S.useState(!0), r = K(
    {
      color: e[0] ? "blue" : "black",
      config: {
        duration: 1e3
      }
    }
  ), i = t.text.length > 30 ? Array.from(t.text).slice(0, 60).join("") + "..." : t.text;
  return S.useEffect(() => {
    screen.availWidth < 500 || window.innerWidth < 500 ? n[1](!0) : n[1](!1);
  }, []), /* @__PURE__ */ w.jsx(Z.div, { style: {
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
Ii.registerPlugin(oe);
const g1 = S.createContext(null), OT = (t) => {
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
  return S.useContext(g1), /* @__PURE__ */ w.jsx(g1.Provider, { value: { viewent: o }, children: /* @__PURE__ */ w.jsxs("div", { className: "base", ref: n, style: { overflow: "hidden", padding: "0px", margin: "0px", textAlign: "center" }, children: [
    /* @__PURE__ */ w.jsxs(MT, { className: "aboutcomp2", children: [
      /* @__PURE__ */ w.jsx(ET, { ref: o, lr: "L" }),
      /* @__PURE__ */ w.jsx(TT, { phonestate: e, lr: "R", setfunc: o })
    ] }),
    /* @__PURE__ */ w.jsx(wT, { phonestate: e, className: "aboutcomp" }),
    /* @__PURE__ */ w.jsxs(kT, { phonestate: e, className: "productcomp4", children: [
      /* @__PURE__ */ w.jsx(RT, { ht: "800", delay: 200, children: /* @__PURE__ */ w.jsx(bT, { lr: "F", children: i }) }),
      /* @__PURE__ */ w.jsx(hT, { phonestate: e, width: "", children: " " })
    ] }),
    /* @__PURE__ */ w.jsx("style", { children: `
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
}, RT = (t) => {
  const e = t.hasOwnProperty("paddingtop") ? t.paddingtop : 0, n = t.hasOwnProperty("paddingbottom") ? t.paddingbottom : 0, r = cf({
    rootMarginLeft: "1000px",
    threshold: 0.2,
    triggerOnce: !0
  }), i = K({
    opacity: r.inView ? 1 : 0,
    x: r.inView ? 0 : -40,
    delay: t.delay,
    config: { duration: 700 }
  });
  return /* @__PURE__ */ w.jsx(Z.div, { ref: r.ref, style: {
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
}, MT = (t) => {
  const n = S.useRef(null), r = () => {
    Ii.timeline({
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
  S.useEffect(() => {
    window.setTimeout(() => {
      window.scrollTo({
        top: 0
        //behavior:"smooth"
      }), r();
    }, 300);
  }, []);
  const i = K(() => ({
    from: { x: "linear-gradient(160deg,rgba(150,150,150,1) 0%, rgba(255,255,255,1) 50% , rgba(150,150,150,1) 100%)" },
    to: { x: "linear-gradient(160deg,rgba(150,150,150,1) 0%, rgba(235,235,235,1) 50%, rgba(150,150,150,1) 100%)" },
    config: { duration: 5e3 },
    loop: { reverse: !0 }
    //,loop:true
  }));
  return /* @__PURE__ */ w.jsx(w.Fragment, { children: /* @__PURE__ */ w.jsx(Z.div, { ref: n, className: t.className + " Hiki3", style: {
    width: "100vw",
    height: "100vh",
    background: i[0].x,
    position: "relative",
    zIndex: 1
  }, children: t.children }) });
}, mu = (t) => {
  const e = t.phonestate, n = {
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
  }, r = {
    fontFamily: "'DotGothic16'",
    width: "10em",
    height: "3em",
    textAlign: "center",
    verticalAlign: "bottom",
    lineHeight: "3em",
    position: "absolute",
    pointerEvents: "auto"
  }, i = S.useRef(null), o = S.useState(!1), l = K({
    color: o[0] ? "black" : "white"
  });
  K({
    backgroundColor: o[0] ? "rgba(1,1,1,0)" : "black"
    //,duration:40000
    //,onResolve:()=>{console.log("aaaaa")}
  });
  const s = S.useState(null);
  var a = null;
  const u = () => {
    clearTimeout(a), s[1](t.link), o[1](!0);
  }, c = () => {
    clearTimeout(a), a = window.setTimeout(() => {
      o[1](!1);
    }, 200);
  };
  S.useEffect(() => {
    i.current.addEventListener("selectstart", (h) => {
      h.preventDefault();
    }), screen.availWidth < 500 || window.innerWidth < 500 ? (i.current.addEventListener("touchstart", () => {
      u();
    }), i.current.addEventListener("touchend", () => {
      c();
    })) : (i.current.addEventListener("click", () => {
      location.href = t.link;
    }), i.current.addEventListener("mouseenter", () => {
      u();
    }), i.current.addEventListener("mouseleave", () => {
      c();
    }));
  }, []);
  const f = K({
    x: o[0] ? "10em" : "0em",
    config: {
      duration: 350
    },
    onRest: (h, d, g, p) => {
      o[0] && e[0] && (location.href = s[0]);
    }
  });
  return /* @__PURE__ */ w.jsxs(
    Z.div,
    {
      className: "menu",
      ref: i,
      style: {
        ...n,
        backgroundColor: "black",
        overflow: "hidden",
        boxShadow: "0px 1px 2px 2px rgba(255,255,255,1)"
      },
      children: [
        /* @__PURE__ */ w.jsx(Z.div, { style: { backgroundColor: "rgba(0,0,0,0)", ...l, ...r, zIndex: 8 }, children: /* @__PURE__ */ w.jsx($0, { children: t.children }) }),
        /* @__PURE__ */ w.jsx(Z.div, { style: { ...f, backgroundColor: "black", ...r, zIndex: 7 } }),
        /* @__PURE__ */ w.jsx(Z.div, { style: { ...f, backgroundColor: "white", ...r, left: "-10em", zIndex: 7 } })
      ]
    }
  );
}, NT = () => {
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
}, AT = (t) => {
  const e = NT(), n = {
    position: "fixed",
    width: "100%",
    top: 0,
    left: 0,
    height: "100%",
    pointerEvents: "none"
  }, r = t.phonestate, i = S.useRef(null);
  S.useEffect(() => {
    console.log("読み込み開始：FrameArt", e), console.log(e), i.current.addEventListener("selectstart", (_) => {
      _.preventDefault();
    });
    const p = Ii.timeline({
      delay: 0,
      scrollTrigger: { scrub: 1 }
    });
    p.to(i.current.getElementsByClassName("gearS")[0], { rotate: "+=730", duration: 1 }), p.to(i.current.getElementsByClassName("gearL")[0], { rotate: "-=360", duration: 1 }, "-=1"), a[1]({ x: 100 }), console.log("読み込みEnd：FrameArt", e);
  }, []);
  const [o, l] = S.useState(2), s = K({
    eyes: o,
    delay: 100,
    config: { duration: 800 }
  }), a = K(
    () => ({ x: 0 })
  ), u = S.useState(!1), c = K({
    opacity: u[0] ? 0 : 1
  }), f = K({
    opacity: u[0] ? 1 : 0,
    delay: 1e3
  });
  S.useEffect(() => {
    e && window.setTimeout(() => {
      l((p) => 600), u[1](!0), console.log("処理");
    }, 800);
  }, [e]);
  const h = {
    opacity: 0.1,
    pointerEvents: "none",
    position: "fixed",
    zIndex: 1,
    backgroundImage: 'url("https://icon-pit.com/wp-content/uploads/2018/12/haguruma_gear_icon_3742.png")',
    backgroundSize: "cover"
  };
  a1();
  const d = a1(), g = S.useState(0);
  return K(
    { ref: d, to: { scale: g[0] ? 0.5 : 1 }, from: { scale: g[0] ? 1 : 0.5 }, config: { duration: 2e3 } }
  ), KE([], {
    ref: null,
    from: { scale: 1 },
    enter: { scale: 1 },
    leave: { scale: 1 }
  }), /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
    /* @__PURE__ */ w.jsxs("div", { ref: i, className: "FrameArt", style: { position: "fixed", zIndex: 1500 }, children: [
      /* @__PURE__ */ w.jsx(Z.div, { style: {
        ...c,
        width: "400px",
        height: "20px",
        backgroundColor: "rgba(200,200,0,1)",
        position: "fixed",
        zIndex: 1e4,
        top: `${window.innerHeight / 2 - 10}px`,
        left: `${window.innerWidth / 2 - 200}px`
      } }),
      /* @__PURE__ */ w.jsx(Z.div, { style: {
        ...c,
        width: a[0].x.to({ range: [0, 100], output: ["0px", "400px"] }),
        height: "20px",
        backgroundColor: "rgba(200,0,0,1)",
        position: "fixed",
        zIndex: 10001,
        top: `${window.innerHeight / 2 - 10}px`,
        left: `${window.innerWidth / 2 - 200}px`
      } }),
      /* @__PURE__ */ w.jsx(DT, { phonestate: r, opa_r: f }),
      /* @__PURE__ */ w.jsx("div", { className: "gearL", style: { ...h, width: r[0] ? "100px" : "300px", height: r[0] ? "100px" : "300px", right: r[0] ? "-35px" : "-100px", bottom: r[0] ? "-20px" : "-80px" } }),
      /* @__PURE__ */ w.jsx("div", { className: "gearS", style: { ...h, width: `${(r[0] ? 1 / 3 : 1) * 500}px`, height: `${(r[0] ? 1 / 3 : 1) * 500}px`, right: `${-200 * (r[0] ? 0.25 : 1)}px`, bottom: `${-25 * (r[0] ? 0.1 : 1)}px` } }),
      /* @__PURE__ */ w.jsx(IT, { loadingstate: u, phonestate: r })
    ] }),
    /* @__PURE__ */ w.jsxs("svg", { style: { ...n, zIndex: 1012 }, children: [
      /* @__PURE__ */ w.jsx("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: "rgba(200,255,255,1)", style: { mask: "url(#mask)" } }),
      /* @__PURE__ */ w.jsxs("mask", { id: "mask", x: "0px", y: "0px", width: `${window.innerWidth}px`, height: `${window.innerHeight}px`, children: [
        /* @__PURE__ */ w.jsx("rect", { x: "0", y: "0", width: `${window.innerWidth}px`, height: `${window.innerHeight}px`, fill: "#ffffff" }),
        /* @__PURE__ */ w.jsx(Z.ellipse, { cx: "50vw", cy: "50vh", rx: "70vw", ry: s.eyes, fill: "black", style: { opacity: 1 } }),
        /* @__PURE__ */ w.jsx("text", { x: "50%", y: "10%", textAnchor: "middle", dominantBaseline: "central", fill: "black" })
      ] })
    ] })
  ] });
}, IT = (t) => {
  const n = t.phonestate[0] ? 50 : 200, r = t.loadingstate, i = K({
    opacity: r[0] ? 0.5 : 0,
    delay: 1e3
  }), o = K(() => ({ from: { x: -n / 4, rotate: 0 }, to: { x: n / 3, rotate: 20 }, config: { duration: 4e3 }, loop: { reverse: !0 } })), l = K(() => ({ from: { y: 0 }, config: { duration: 2e3 } }));
  var s = 200, a = null;
  const u = () => {
    clearTimeout(a), a = window.setTimeout(() => {
      s = 200;
    }, 1e3), window.scrollBy({
      top: s,
      behavior: "smooth"
    }), s *= 1.1;
  };
  var c = null;
  return /* @__PURE__ */ w.jsx(Z.div, { className: "ball", onClick: () => {
    clearTimeout(c), o[1].pause(), u(), l[1].stop(), l[1]({
      y: 50,
      config: { duration: 25 * 1 },
      onResolve: () => {
        l[1]({
          y: 100,
          config: { duration: 75 * 2, easing: zx.easeOutBounce },
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
}, DT = (t) => {
  const e = t.phonestate, n = e[0] ? 50 : 150, r = S.useState(!1), i = K({
    rotate: r[0] ? 1800 : 0
    // ,opacity:spinswitch[0]?0.5:1
  }), o = S.useCallback(() => {
    r[1](!r[0]), window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }), l = K(() => ({ from: { x: 0 }, to: { x: 10 }, loop: { reverse: !0 } }));
  return K({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      duration: 2e3
    }
  }), /* @__PURE__ */ w.jsx(Z.div, { className: "CtlBtn", onClick: () => o(), style: {
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
  }, children: /* @__PURE__ */ w.jsxs("svg", { style: { left: 0, top: 0, width: `${n}px`, height: `${n}px`, position: "absolute" }, children: [
    /* @__PURE__ */ w.jsx("rect", { x: `${n * 0.45}px`, y: `${n * 0.45}px`, width: `${n * 0.1}px`, height: `${n * 0.1}px`, fill: "white" }),
    /* @__PURE__ */ w.jsx(Z.path, { strokeWidth: 10, d: `M${n / 2},${n / 15} L${n * 0.1},${n / 3} Z`, style: { x: "0", y: l[0].x.to({ range: [0, 10], output: [0, 10] }), fill: "rgba(200,200,100,.6)", stroke: "rgba(200,255,200,1)" } }),
    /* @__PURE__ */ w.jsx(Z.path, { strokeWidth: 10, d: `M${n / 2 - 1},${n / 15} L${n - n * 0.1},${n / 3} Z`, style: { x: "0", y: l[0].x, fill: "rgba(200,200,100,.6)", stroke: "rgba(100,255,100,1)" } }),
    /* @__PURE__ */ w.jsx(Z.path, { strokeWidth: 5, d: `M${n / 2},${n / 15 * 3} L${n * 0.1},${n / 3} Z`, style: { x: "0", y: l[0].x.to({ range: [0, 10], output: [0, 20] }), fill: "rgba(200,200,100,.6)", stroke: "rgba(200,255,200,1)" } }),
    /* @__PURE__ */ w.jsx(Z.path, { strokeWidth: 5, d: `M${n / 2 - 1},${n / 15 * 3} L${n - n * 0.1},${n / 3} Z`, style: { x: "0", y: l[0].x.to({ range: [0, 10], output: [0, 20] }), fill: "rgba(200,200,100,.6)", stroke: "rgba(100,255,100,1)" } })
  ] }) });
}, vu = (t) => {
  const e = t.basename, n = S.useState(!1), r = S.useState(!1), i = S.useState(!1), { burgx: o, ...l } = K({
    burgx: i[0] ? "30em" : "0em"
  }), [s, a] = S.useState([window.innerWidth, window.innerHeight]), u = {
    position: "fixed",
    width: `${s[0]}px`,
    top: 0,
    left: 0,
    height: "100%"
    //,pointerEvents:"none"
  }, c = K({
    lighting: i[0] ? 1 : 0,
    config: { duration: 500 }
  }), f = [
    { strurl: "サイトオープン", url: `${e}/` },
    { strurl: "テストページ", url: `${e}/article/0` }
  ];
  return S.useEffect(() => {
    screen.availWidth < 500 || window.innerHeight < 500 ? n[1](!0) : n[1](!1), screen.availWidth < 500 || window.innerHeight < 500 || (i[1](!0), r[1](!0));
  }, []), /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
    /* @__PURE__ */ w.jsxs("div", { className: "navi", style: {
      position: "fixed",
      width: `${s[0]}px`,
      height: "3em",
      textAlign: "center",
      backgroundColor: "rgba(240,240,240,1)",
      zIndex: 1502
    }, children: [
      /* @__PURE__ */ w.jsx(zT, { height: "3em", data: f }),
      /* @__PURE__ */ w.jsx("div", { style: { position: "absolute", top: "0px", right: "0px", backgroundColor: "rgba(240,240,240,1)", margin: "0px", textAlign: "center", display: "inline-block", height: "100%", verticalAlign: "top" }, children: /* @__PURE__ */ w.jsx($T, { height: 3, setburg: i }) })
    ] }),
    /* @__PURE__ */ w.jsx(Z.div, { className: "colormass", style: {
      pointerEvents: i[0] ? "auto" : "none",
      opacity: c.lighting,
      zIndex: 500,
      backgroundColor: "rgba(1,1,1,.4)",
      ...u,
      display: r[0] ? "none" : "block"
    } }),
    /* @__PURE__ */ w.jsx(Z.div, { className: "base2", style: {
      pointerEvents: "none",
      textAlign: "center",
      width: "100%",
      left: "0px",
      top: "3em",
      position: "fixed",
      margin: "0px",
      padding: "0px",
      zIndex: 1501,
      height: o,
      overflow: "hidden"
    }, children: /* @__PURE__ */ w.jsxs("div", { style: { zIndex: 501, margin: "0px", display: "inline-block", verticalAlign: "top", height: "100%", overflow: "hidden", position: "relative", pointerEvents: "none" }, children: [
      /* @__PURE__ */ w.jsx(mu, { phonestate: n, height: 3, link: `${e}/`, children: "ご案内" }),
      /* @__PURE__ */ w.jsx(mu, { phonestate: n, height: 3, link: `${e}/`, children: "活動紹介" }),
      /* @__PURE__ */ w.jsx(mu, { phonestate: n, height: 3, link: `${e}/irai`, children: "依頼" }),
      /* @__PURE__ */ w.jsx(mu, { phonestate: n, height: 3, link: `${e}/`, children: "スペシャルサンクス" })
    ] }) }),
    /* @__PURE__ */ w.jsx(AT, { phonestate: n })
  ] });
}, zT = (t) => {
  const e = t.data.reduce((l, s) => l + 1, 0), n = K(() => ({ from: { x: `${-window.innerWidth}px` }, to: { x: `${300 * e}px` }, loop: !0, config: {
    duration: 3e4
  } })), r = {
    display: "inline-block",
    height: t.height,
    lineHeight: t.height,
    verticalAlign: "baseline",
    backgroundColor: "rgba(240,240,240,1)",
    position: "relative",
    marginLeft: "5em"
  }, i = {
    userSelect: "none",
    backgroundColor: "rgba(240,240,240,1)",
    height: "94%",
    whiteSpace: "nowrap",
    textAlign: "right"
  }, o = t.data.map((l, s) => /* @__PURE__ */ w.jsx(
    Z.div,
    {
      style: { ...r },
      onClick: () => {
        location.href = `${l.url}`;
      },
      children: l.strurl
    },
    s
  ));
  return /* @__PURE__ */ w.jsx(Z.div, { style: {
    ...i,
    ...n[0]
  }, children: o });
}, $T = (t) => {
  const [e, n] = S.useState(!1), { l1v: r, l3v: i, l2v: o, l2v2: l, ...s } = K({
    l1v: t.setburg[0] ? "80%" : "20%",
    l2v: t.setburg[0] ? "50%" : "20%",
    l2v2: t.setburg[0] ? "50%" : "80%",
    l3v: t.setburg[0] ? "20%" : "80%",
    config: { duration: 300 }
  });
  var a = window.innerHeight, u = window.innerWidth;
  S.useEffect(() => {
    a = window.innerHeight, u = window.innerWidth, u / a < 1 ? n(!0) : n(!1);
  }, []);
  const c = (d) => {
    d.preventDefault();
  }, f = S.useCallback(() => {
    document.addEventListener("touchmove", c, { useCapture: !1, passive: !1 }), document.addEventListener("wheel", c, { useCapture: !1, passive: !1 });
  }, []), h = S.useCallback(() => {
    document.removeEventListener("touchmove", c, { useCapture: !1, passive: !1 }), document.removeEventListener("wheel", c, { useCapture: !1, passive: !1 });
  }, []);
  return /* @__PURE__ */ w.jsx("div", { className: "burg", onClick: () => {
    t.setburg[1]((d) => !d), t.setburg[0] ? h() : f();
  }, style: {
    boxSizing: "border-box",
    width: `${t.height}.5em`,
    height: `${t.height}em`,
    display: e ? "inline-block" : "none",
    position: "relative",
    right: "20px",
    border: "double 2px rgba(1,1,1,0.1)",
    backgroundColor: "rgba(240,240,240,1)"
  }, children: /* @__PURE__ */ w.jsxs("svg", { style: { left: 0, top: 0, width: "100%", height: "100%", position: "absolute" }, children: [
    /* @__PURE__ */ w.jsx(Z.line, { x1: "20%", y1: "20%", x2: "80%", y2: r, style: { strokeWidth: "5px", stroke: "black" } }),
    /* @__PURE__ */ w.jsx(Z.line, { x1: o, y1: "50%", x2: l, y2: "50%", style: { strokeWidth: "5px", stroke: "black" } }),
    /* @__PURE__ */ w.jsx(Z.line, { x1: "20%", y1: "80%", x2: "80%", y2: i, style: { strokeWidth: "5px", stroke: "black" } })
  ] }) });
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
function Mc() {
  return Mc = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Mc.apply(this, arguments);
}
var vi;
(function(t) {
  t.Pop = "POP", t.Push = "PUSH", t.Replace = "REPLACE";
})(vi || (vi = {}));
const m1 = "popstate";
function jT(t) {
  t === void 0 && (t = {});
  function e(r, i) {
    let {
      pathname: o,
      search: l,
      hash: s
    } = r.location;
    return Zh(
      "",
      {
        pathname: o,
        search: l,
        hash: s
      },
      // state defaults to `null` because `window.history.state` does
      i.state && i.state.usr || null,
      i.state && i.state.key || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : sw(i);
  }
  return FT(e, n, null, t);
}
function sn(t, e) {
  if (t === !1 || t === null || typeof t > "u")
    throw new Error(e);
}
function j0(t, e) {
  if (!t) {
    typeof console < "u" && console.warn(e);
    try {
      throw new Error(e);
    } catch {
    }
  }
}
function LT() {
  return Math.random().toString(36).substr(2, 8);
}
function v1(t, e) {
  return {
    usr: t.state,
    key: t.key,
    idx: e
  };
}
function Zh(t, e, n, r) {
  return n === void 0 && (n = null), Mc({
    pathname: typeof t == "string" ? t : t.pathname,
    search: "",
    hash: ""
  }, typeof e == "string" ? ff(e) : e, {
    state: n,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: e && e.key || r || LT()
  });
}
function sw(t) {
  let {
    pathname: e = "/",
    search: n = "",
    hash: r = ""
  } = t;
  return n && n !== "?" && (e += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (e += r.charAt(0) === "#" ? r : "#" + r), e;
}
function ff(t) {
  let e = {};
  if (t) {
    let n = t.indexOf("#");
    n >= 0 && (e.hash = t.substr(n), t = t.substr(0, n));
    let r = t.indexOf("?");
    r >= 0 && (e.search = t.substr(r), t = t.substr(0, r)), t && (e.pathname = t);
  }
  return e;
}
function FT(t, e, n, r) {
  r === void 0 && (r = {});
  let {
    window: i = document.defaultView,
    v5Compat: o = !1
  } = r, l = i.history, s = vi.Pop, a = null, u = c();
  u == null && (u = 0, l.replaceState(Mc({}, l.state, {
    idx: u
  }), ""));
  function c() {
    return (l.state || {
      idx: null
    }).idx;
  }
  function f() {
    s = vi.Pop;
    let _ = c(), v = _ == null ? null : _ - u;
    u = _, a && a({
      action: s,
      location: p.location,
      delta: v
    });
  }
  function h(_, v) {
    s = vi.Push;
    let m = Zh(p.location, _, v);
    n && n(m, _), u = c() + 1;
    let y = v1(m, u), x = p.createHref(m);
    try {
      l.pushState(y, "", x);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError")
        throw C;
      i.location.assign(x);
    }
    o && a && a({
      action: s,
      location: p.location,
      delta: 1
    });
  }
  function d(_, v) {
    s = vi.Replace;
    let m = Zh(p.location, _, v);
    n && n(m, _), u = c();
    let y = v1(m, u), x = p.createHref(m);
    l.replaceState(y, "", x), o && a && a({
      action: s,
      location: p.location,
      delta: 0
    });
  }
  function g(_) {
    let v = i.location.origin !== "null" ? i.location.origin : i.location.href, m = typeof _ == "string" ? _ : sw(_);
    return sn(v, "No window.location.(origin|href) available to create URL for href: " + m), new URL(m, v);
  }
  let p = {
    get action() {
      return s;
    },
    get location() {
      return t(i, l);
    },
    listen(_) {
      if (a)
        throw new Error("A history only accepts one active listener");
      return i.addEventListener(m1, f), a = _, () => {
        i.removeEventListener(m1, f), a = null;
      };
    },
    createHref(_) {
      return e(i, _);
    },
    createURL: g,
    encodeLocation(_) {
      let v = g(_);
      return {
        pathname: v.pathname,
        search: v.search,
        hash: v.hash
      };
    },
    push: h,
    replace: d,
    go(_) {
      return l.go(_);
    }
  };
  return p;
}
var y1;
(function(t) {
  t.data = "data", t.deferred = "deferred", t.redirect = "redirect", t.error = "error";
})(y1 || (y1 = {}));
function BT(t, e, n) {
  n === void 0 && (n = "/");
  let r = typeof e == "string" ? ff(e) : e, i = cw(r.pathname || "/", n);
  if (i == null)
    return null;
  let o = aw(t);
  VT(o);
  let l = null;
  for (let s = 0; l == null && s < o.length; ++s)
    l = KT(
      o[s],
      // Incoming pathnames are generally encoded from either window.location
      // or from router.navigate, but we want to match against the unencoded
      // paths in the route definitions.  Memory router locations won't be
      // encoded here but there also shouldn't be anything to decode so this
      // should be a safe operation.  This avoids needing matchRoutes to be
      // history-aware.
      eb(i)
    );
  return l;
}
function aw(t, e, n, r) {
  e === void 0 && (e = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, l, s) => {
    let a = {
      relativePath: s === void 0 ? o.path || "" : s,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: l,
      route: o
    };
    a.relativePath.startsWith("/") && (sn(a.relativePath.startsWith(r), 'Absolute route path "' + a.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), a.relativePath = a.relativePath.slice(r.length));
    let u = Sl([r, a.relativePath]), c = n.concat(a);
    o.children && o.children.length > 0 && (sn(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      o.index !== !0,
      "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')
    ), aw(o.children, e, c, u)), !(o.path == null && !o.index) && e.push({
      path: u,
      score: QT(u, o.index),
      routesMeta: c
    });
  };
  return t.forEach((o, l) => {
    var s;
    if (o.path === "" || !((s = o.path) != null && s.includes("?")))
      i(o, l);
    else
      for (let a of uw(o.path))
        i(o, l, a);
  }), e;
}
function uw(t) {
  let e = t.split("/");
  if (e.length === 0)
    return [];
  let [n, ...r] = e, i = n.endsWith("?"), o = n.replace(/\?$/, "");
  if (r.length === 0)
    return i ? [o, ""] : [o];
  let l = uw(r.join("/")), s = [];
  return s.push(...l.map((a) => a === "" ? o : [o, a].join("/"))), i && s.push(...l), s.map((a) => t.startsWith("/") && a === "" ? "/" : a);
}
function VT(t) {
  t.sort((e, n) => e.score !== n.score ? n.score - e.score : qT(e.routesMeta.map((r) => r.childrenIndex), n.routesMeta.map((r) => r.childrenIndex)));
}
const UT = /^:[\w-]+$/, WT = 3, HT = 2, YT = 1, XT = 10, GT = -2, _1 = (t) => t === "*";
function QT(t, e) {
  let n = t.split("/"), r = n.length;
  return n.some(_1) && (r += GT), e && (r += HT), n.filter((i) => !_1(i)).reduce((i, o) => i + (UT.test(o) ? WT : o === "" ? YT : XT), r);
}
function qT(t, e) {
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
function KT(t, e) {
  let {
    routesMeta: n
  } = t, r = {}, i = "/", o = [];
  for (let l = 0; l < n.length; ++l) {
    let s = n[l], a = l === n.length - 1, u = i === "/" ? e : e.slice(i.length) || "/", c = ZT({
      path: s.relativePath,
      caseSensitive: s.caseSensitive,
      end: a
    }, u);
    if (!c)
      return null;
    Object.assign(r, c.params);
    let f = s.route;
    o.push({
      // TODO: Can this as be avoided?
      params: r,
      pathname: Sl([i, c.pathname]),
      pathnameBase: nb(Sl([i, c.pathnameBase])),
      route: f
    }), c.pathnameBase !== "/" && (i = Sl([i, c.pathnameBase]));
  }
  return o;
}
function ZT(t, e) {
  typeof t == "string" && (t = {
    path: t,
    caseSensitive: !1,
    end: !0
  });
  let [n, r] = JT(t.path, t.caseSensitive, t.end), i = e.match(n);
  if (!i)
    return null;
  let o = i[0], l = o.replace(/(.)\/+$/, "$1"), s = i.slice(1);
  return {
    params: r.reduce((u, c, f) => {
      let {
        paramName: h,
        isOptional: d
      } = c;
      if (h === "*") {
        let p = s[f] || "";
        l = o.slice(0, o.length - p.length).replace(/(.)\/+$/, "$1");
      }
      const g = s[f];
      return d && !g ? u[h] = void 0 : u[h] = tb(g || "", h), u;
    }, {}),
    pathname: o,
    pathnameBase: l,
    pattern: t
  };
}
function JT(t, e, n) {
  e === void 0 && (e = !1), n === void 0 && (n = !0), j0(t === "*" || !t.endsWith("*") || t.endsWith("/*"), 'Route path "' + t + '" will be treated as if it were ' + ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + t.replace(/\*$/, "/*") + '".'));
  let r = [], i = "^" + t.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (l, s, a) => (r.push({
    paramName: s,
    isOptional: a != null
  }), a ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return t.endsWith("*") ? (r.push({
    paramName: "*"
  }), i += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : t !== "" && t !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, e ? void 0 : "i"), r];
}
function eb(t) {
  try {
    return decodeURI(t);
  } catch (e) {
    return j0(!1, 'The URL path "' + t + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + e + ").")), t;
  }
}
function tb(t, e) {
  try {
    return decodeURIComponent(t);
  } catch (n) {
    return j0(!1, 'The value for the URL param "' + e + '" will not be decoded because' + (' the string "' + t + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + n + ").")), t;
  }
}
function cw(t, e) {
  if (e === "/")
    return t;
  if (!t.toLowerCase().startsWith(e.toLowerCase()))
    return null;
  let n = e.endsWith("/") ? e.length - 1 : e.length, r = t.charAt(n);
  return r && r !== "/" ? null : t.slice(n) || "/";
}
const Sl = (t) => t.join("/").replace(/\/\/+/g, "/"), nb = (t) => t.replace(/\/+$/, "").replace(/^\/*/, "/");
function rb(t) {
  return t != null && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.internal == "boolean" && "data" in t;
}
const fw = ["post", "put", "patch", "delete"];
new Set(fw);
const ib = ["get", ...fw];
new Set(ib);
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
function Nc() {
  return Nc = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Nc.apply(this, arguments);
}
const ob = /* @__PURE__ */ S.createContext(null), lb = /* @__PURE__ */ S.createContext(null), dw = /* @__PURE__ */ S.createContext(null), df = /* @__PURE__ */ S.createContext(null), Na = /* @__PURE__ */ S.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
}), hw = /* @__PURE__ */ S.createContext(null);
function L0() {
  return S.useContext(df) != null;
}
function sb() {
  return L0() || sn(!1), S.useContext(df).location;
}
function ab() {
  let {
    matches: t
  } = S.useContext(Na), e = t[t.length - 1];
  return e ? e.params : {};
}
function ub(t, e) {
  return cb(t, e);
}
function cb(t, e, n, r) {
  L0() || sn(!1);
  let {
    navigator: i
  } = S.useContext(dw), {
    matches: o
  } = S.useContext(Na), l = o[o.length - 1], s = l ? l.params : {};
  l && l.pathname;
  let a = l ? l.pathnameBase : "/";
  l && l.route;
  let u = sb(), c;
  if (e) {
    var f;
    let _ = typeof e == "string" ? ff(e) : e;
    a === "/" || (f = _.pathname) != null && f.startsWith(a) || sn(!1), c = _;
  } else
    c = u;
  let h = c.pathname || "/", d = a === "/" ? h : h.slice(a.length) || "/", g = BT(t, {
    pathname: d
  }), p = gb(g && g.map((_) => Object.assign({}, _, {
    params: Object.assign({}, s, _.params),
    pathname: Sl([
      a,
      // Re-encode pathnames that were decoded inside matchRoutes
      i.encodeLocation ? i.encodeLocation(_.pathname).pathname : _.pathname
    ]),
    pathnameBase: _.pathnameBase === "/" ? a : Sl([
      a,
      // Re-encode pathnames that were decoded inside matchRoutes
      i.encodeLocation ? i.encodeLocation(_.pathnameBase).pathname : _.pathnameBase
    ])
  })), o, n, r);
  return e && p ? /* @__PURE__ */ S.createElement(df.Provider, {
    value: {
      location: Nc({
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default"
      }, c),
      navigationType: vi.Pop
    }
  }, p) : p;
}
function fb() {
  let t = _b(), e = rb(t) ? t.status + " " + t.statusText : t instanceof Error ? t.message : JSON.stringify(t), n = t instanceof Error ? t.stack : null, i = {
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
const db = /* @__PURE__ */ S.createElement(fb, null);
class hb extends S.Component {
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
    return this.state.error !== void 0 ? /* @__PURE__ */ S.createElement(Na.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ S.createElement(hw.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function pb(t) {
  let {
    routeContext: e,
    match: n,
    children: r
  } = t, i = S.useContext(ob);
  return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id), /* @__PURE__ */ S.createElement(Na.Provider, {
    value: e
  }, r);
}
function gb(t, e, n, r) {
  var i;
  if (e === void 0 && (e = []), n === void 0 && (n = null), r === void 0 && (r = null), t == null) {
    var o;
    if ((o = n) != null && o.errors)
      t = n.matches;
    else
      return null;
  }
  let l = t, s = (i = n) == null ? void 0 : i.errors;
  if (s != null) {
    let c = l.findIndex((f) => f.route.id && (s == null ? void 0 : s[f.route.id]));
    c >= 0 || sn(!1), l = l.slice(0, Math.min(l.length, c + 1));
  }
  let a = !1, u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < l.length; c++) {
      let f = l[c];
      if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c), f.route.id) {
        let {
          loaderData: h,
          errors: d
        } = n, g = f.route.loader && h[f.route.id] === void 0 && (!d || d[f.route.id] === void 0);
        if (f.route.lazy || g) {
          a = !0, u >= 0 ? l = l.slice(0, u + 1) : l = [l[0]];
          break;
        }
      }
    }
  return l.reduceRight((c, f, h) => {
    let d, g = !1, p = null, _ = null;
    n && (d = s && f.route.id ? s[f.route.id] : void 0, p = f.route.errorElement || db, a && (u < 0 && h === 0 ? (xb("route-fallback", !1), g = !0, _ = null) : u === h && (g = !0, _ = f.route.hydrateFallbackElement || null)));
    let v = e.concat(l.slice(0, h + 1)), m = () => {
      let y;
      return d ? y = p : g ? y = _ : f.route.Component ? y = /* @__PURE__ */ S.createElement(f.route.Component, null) : f.route.element ? y = f.route.element : y = c, /* @__PURE__ */ S.createElement(pb, {
        match: f,
        routeContext: {
          outlet: c,
          matches: v,
          isDataRoute: n != null
        },
        children: y
      });
    };
    return n && (f.route.ErrorBoundary || f.route.errorElement || h === 0) ? /* @__PURE__ */ S.createElement(hb, {
      location: n.location,
      revalidation: n.revalidation,
      component: p,
      error: d,
      children: m(),
      routeContext: {
        outlet: null,
        matches: v,
        isDataRoute: !0
      }
    }) : m();
  }, null);
}
var Jh = /* @__PURE__ */ function(t) {
  return t.UseBlocker = "useBlocker", t.UseLoaderData = "useLoaderData", t.UseActionData = "useActionData", t.UseRouteError = "useRouteError", t.UseNavigation = "useNavigation", t.UseRouteLoaderData = "useRouteLoaderData", t.UseMatches = "useMatches", t.UseRevalidator = "useRevalidator", t.UseNavigateStable = "useNavigate", t.UseRouteId = "useRouteId", t;
}(Jh || {});
function mb(t) {
  let e = S.useContext(lb);
  return e || sn(!1), e;
}
function vb(t) {
  let e = S.useContext(Na);
  return e || sn(!1), e;
}
function yb(t) {
  let e = vb(), n = e.matches[e.matches.length - 1];
  return n.route.id || sn(!1), n.route.id;
}
function _b() {
  var t;
  let e = S.useContext(hw), n = mb(Jh.UseRouteError), r = yb(Jh.UseRouteError);
  return e !== void 0 ? e : (t = n.errors) == null ? void 0 : t[r];
}
const x1 = {};
function xb(t, e, n) {
  !e && !x1[t] && (x1[t] = !0);
}
function ms(t) {
  sn(!1);
}
function wb(t) {
  let {
    basename: e = "/",
    children: n = null,
    location: r,
    navigationType: i = vi.Pop,
    navigator: o,
    static: l = !1,
    future: s
  } = t;
  L0() && sn(!1);
  let a = e.replace(/^\/*/, "/"), u = S.useMemo(() => ({
    basename: a,
    navigator: o,
    static: l,
    future: Nc({
      v7_relativeSplatPath: !1
    }, s)
  }), [a, s, o, l]);
  typeof r == "string" && (r = ff(r));
  let {
    pathname: c = "/",
    search: f = "",
    hash: h = "",
    state: d = null,
    key: g = "default"
  } = r, p = S.useMemo(() => {
    let _ = cw(c, a);
    return _ == null ? null : {
      location: {
        pathname: _,
        search: f,
        hash: h,
        state: d,
        key: g
      },
      navigationType: i
    };
  }, [a, c, f, h, d, g, i]);
  return p == null ? null : /* @__PURE__ */ S.createElement(dw.Provider, {
    value: u
  }, /* @__PURE__ */ S.createElement(df.Provider, {
    children: n,
    value: p
  }));
}
function kb(t) {
  let {
    children: e,
    location: n
  } = t;
  return ub(ep(e), n);
}
new Promise(() => {
});
function ep(t, e) {
  e === void 0 && (e = []);
  let n = [];
  return S.Children.forEach(t, (r, i) => {
    if (!/* @__PURE__ */ S.isValidElement(r))
      return;
    let o = [...e, i];
    if (r.type === S.Fragment) {
      n.push.apply(n, ep(r.props.children, o));
      return;
    }
    r.type !== ms && sn(!1), !r.props.index || !r.props.children || sn(!1);
    let l = {
      id: r.props.id || o.join("-"),
      caseSensitive: r.props.caseSensitive,
      element: r.props.element,
      Component: r.props.Component,
      index: r.props.index,
      path: r.props.path,
      loader: r.props.loader,
      action: r.props.action,
      errorElement: r.props.errorElement,
      ErrorBoundary: r.props.ErrorBoundary,
      hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
      shouldRevalidate: r.props.shouldRevalidate,
      handle: r.props.handle,
      lazy: r.props.lazy
    };
    r.props.children && (l.children = ep(r.props.children, o)), n.push(l);
  }), n;
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
const Sb = "startTransition", w1 = o2[Sb];
function Cb(t) {
  let {
    basename: e,
    children: n,
    future: r,
    window: i
  } = t, o = S.useRef();
  o.current == null && (o.current = jT({
    window: i,
    v5Compat: !0
  }));
  let l = o.current, [s, a] = S.useState({
    action: l.action,
    location: l.location
  }), {
    v7_startTransition: u
  } = r || {}, c = S.useCallback((f) => {
    u && w1 ? w1(() => a(f)) : a(f);
  }, [a, u]);
  return S.useLayoutEffect(() => l.listen(c), [l, c]), /* @__PURE__ */ S.createElement(wb, {
    basename: e,
    children: n,
    location: s.location,
    navigationType: s.action,
    navigator: l,
    future: r
  });
}
var k1;
(function(t) {
  t.UseScrollRestoration = "useScrollRestoration", t.UseSubmit = "useSubmit", t.UseSubmitFetcher = "useSubmitFetcher", t.UseFetcher = "useFetcher", t.useViewTransitionState = "useViewTransitionState";
})(k1 || (k1 = {}));
var S1;
(function(t) {
  t.UseFetcher = "useFetcher", t.UseFetchers = "useFetchers", t.UseScrollRestoration = "useScrollRestoration";
})(S1 || (S1 = {}));
const C1 = S.createContext(null), Eb = (t) => {
  const e = S.useState(!1), n = S.useRef(null);
  var r = window.innerWidth;
  S.useEffect(() => {
    window.addEventListener("resize", () => {
      r == window.innerWidth || (r = window.innerWidth, window.location.reload());
    }), screen.availWidth < 500 || window.innerHeight < 500 ? e[1](!0) : e[1](!1);
  }, []);
  const i = S.useRef(null);
  return S.useContext(C1), /* @__PURE__ */ w.jsx(C1.Provider, { value: { viewent: i }, children: /* @__PURE__ */ w.jsxs("div", { className: "base", ref: n, style: { overflow: "hidden", padding: "0px", margin: "0px", textAlign: "center" }, children: [
    /* @__PURE__ */ w.jsx("div", { style: { width: "100%", height: e[0] ? "3em" : "9em" } }),
    /* @__PURE__ */ w.jsx(Tb, { phonestate: e }),
    /* @__PURE__ */ w.jsx("style", { children: `
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
}, Tb = (t) => {
  var e = ab().id, n = null;
  return e == "0" ? n = /* @__PURE__ */ w.jsx("div", { children: "記事ページを作ってみました。" }) : n = /* @__PURE__ */ w.jsx("div", { children: "404ページ" }), /* @__PURE__ */ w.jsxs("div", { children: [
    /* @__PURE__ */ w.jsx("div", { style: { height: "2em" } }),
    n
  ] });
};
var F0 = {}, B0 = {};
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
})(B0);
var re = {}, Fi = wr && wr.__extends || function() {
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
}(), Vs = wr && wr.__assign || function() {
  return Vs = Object.assign || function(t) {
    for (var e, n = 1, r = arguments.length; n < r; n++) {
      e = arguments[n];
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
  }, Vs.apply(this, arguments);
};
Object.defineProperty(re, "__esModule", { value: !0 });
re.cloneNode = re.hasChildren = re.isDocument = re.isDirective = re.isComment = re.isText = re.isCDATA = re.isTag = re.Element = re.Document = re.CDATA = re.NodeWithChildren = re.ProcessingInstruction = re.Comment = re.Text = re.DataNode = re.Node = void 0;
var on = B0, V0 = (
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
re.Node = V0;
var hf = (
  /** @class */
  function(t) {
    Fi(e, t);
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
  }(V0)
);
re.DataNode = hf;
var pw = (
  /** @class */
  function(t) {
    Fi(e, t);
    function e() {
      var n = t !== null && t.apply(this, arguments) || this;
      return n.type = on.ElementType.Text, n;
    }
    return Object.defineProperty(e.prototype, "nodeType", {
      get: function() {
        return 3;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(hf)
);
re.Text = pw;
var gw = (
  /** @class */
  function(t) {
    Fi(e, t);
    function e() {
      var n = t !== null && t.apply(this, arguments) || this;
      return n.type = on.ElementType.Comment, n;
    }
    return Object.defineProperty(e.prototype, "nodeType", {
      get: function() {
        return 8;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(hf)
);
re.Comment = gw;
var mw = (
  /** @class */
  function(t) {
    Fi(e, t);
    function e(n, r) {
      var i = t.call(this, r) || this;
      return i.name = n, i.type = on.ElementType.Directive, i;
    }
    return Object.defineProperty(e.prototype, "nodeType", {
      get: function() {
        return 1;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(hf)
);
re.ProcessingInstruction = mw;
var pf = (
  /** @class */
  function(t) {
    Fi(e, t);
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
  }(V0)
);
re.NodeWithChildren = pf;
var vw = (
  /** @class */
  function(t) {
    Fi(e, t);
    function e() {
      var n = t !== null && t.apply(this, arguments) || this;
      return n.type = on.ElementType.CDATA, n;
    }
    return Object.defineProperty(e.prototype, "nodeType", {
      get: function() {
        return 4;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(pf)
);
re.CDATA = vw;
var yw = (
  /** @class */
  function(t) {
    Fi(e, t);
    function e() {
      var n = t !== null && t.apply(this, arguments) || this;
      return n.type = on.ElementType.Root, n;
    }
    return Object.defineProperty(e.prototype, "nodeType", {
      get: function() {
        return 9;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(pf)
);
re.Document = yw;
var _w = (
  /** @class */
  function(t) {
    Fi(e, t);
    function e(n, r, i, o) {
      i === void 0 && (i = []), o === void 0 && (o = n === "script" ? on.ElementType.Script : n === "style" ? on.ElementType.Style : on.ElementType.Tag);
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
  }(pf)
);
re.Element = _w;
function xw(t) {
  return (0, on.isTag)(t);
}
re.isTag = xw;
function ww(t) {
  return t.type === on.ElementType.CDATA;
}
re.isCDATA = ww;
function kw(t) {
  return t.type === on.ElementType.Text;
}
re.isText = kw;
function Sw(t) {
  return t.type === on.ElementType.Comment;
}
re.isComment = Sw;
function Cw(t) {
  return t.type === on.ElementType.Directive;
}
re.isDirective = Cw;
function Ew(t) {
  return t.type === on.ElementType.Root;
}
re.isDocument = Ew;
function bb(t) {
  return Object.prototype.hasOwnProperty.call(t, "children");
}
re.hasChildren = bb;
function U0(t, e) {
  e === void 0 && (e = !1);
  var n;
  if (kw(t))
    n = new pw(t.data);
  else if (Sw(t))
    n = new gw(t.data);
  else if (xw(t)) {
    var r = e ? md(t.children) : [], i = new _w(t.name, Vs({}, t.attribs), r);
    r.forEach(function(a) {
      return a.parent = i;
    }), t.namespace != null && (i.namespace = t.namespace), t["x-attribsNamespace"] && (i["x-attribsNamespace"] = Vs({}, t["x-attribsNamespace"])), t["x-attribsPrefix"] && (i["x-attribsPrefix"] = Vs({}, t["x-attribsPrefix"])), n = i;
  } else if (ww(t)) {
    var r = e ? md(t.children) : [], o = new vw(r);
    r.forEach(function(u) {
      return u.parent = o;
    }), n = o;
  } else if (Ew(t)) {
    var r = e ? md(t.children) : [], l = new yw(r);
    r.forEach(function(u) {
      return u.parent = l;
    }), t["x-mode"] && (l["x-mode"] = t["x-mode"]), n = l;
  } else if (Cw(t)) {
    var s = new mw(t.name, t.data);
    t["x-name"] != null && (s["x-name"] = t["x-name"], s["x-publicId"] = t["x-publicId"], s["x-systemId"] = t["x-systemId"]), n = s;
  } else
    throw new Error("Not implemented yet: ".concat(t.type));
  return n.startIndex = t.startIndex, n.endIndex = t.endIndex, t.sourceCodeLocation != null && (n.sourceCodeLocation = t.sourceCodeLocation), n;
}
re.cloneNode = U0;
function md(t) {
  for (var e = t.map(function(r) {
    return U0(r, !0);
  }), n = 1; n < e.length; n++)
    e[n].prev = e[n - 1], e[n - 1].next = e[n];
  return e;
}
(function(t) {
  var e = wr && wr.__createBinding || (Object.create ? function(s, a, u, c) {
    c === void 0 && (c = u);
    var f = Object.getOwnPropertyDescriptor(a, u);
    (!f || ("get" in f ? !a.__esModule : f.writable || f.configurable)) && (f = { enumerable: !0, get: function() {
      return a[u];
    } }), Object.defineProperty(s, c, f);
  } : function(s, a, u, c) {
    c === void 0 && (c = u), s[c] = a[u];
  }), n = wr && wr.__exportStar || function(s, a) {
    for (var u in s)
      u !== "default" && !Object.prototype.hasOwnProperty.call(a, u) && e(a, s, u);
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.DomHandler = void 0;
  var r = B0, i = re;
  n(re, t);
  var o = {
    withStartIndices: !1,
    withEndIndices: !1,
    xmlMode: !1
  }, l = (
    /** @class */
    function() {
      function s(a, u, c) {
        this.dom = [], this.root = new i.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof u == "function" && (c = u, u = o), typeof a == "object" && (u = a, a = void 0), this.callback = a ?? null, this.options = u ?? o, this.elementCB = c ?? null;
      }
      return s.prototype.onparserinit = function(a) {
        this.parser = a;
      }, s.prototype.onreset = function() {
        this.dom = [], this.root = new i.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
      }, s.prototype.onend = function() {
        this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
      }, s.prototype.onerror = function(a) {
        this.handleCallback(a);
      }, s.prototype.onclosetag = function() {
        this.lastNode = null;
        var a = this.tagStack.pop();
        this.options.withEndIndices && (a.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(a);
      }, s.prototype.onopentag = function(a, u) {
        var c = this.options.xmlMode ? r.ElementType.Tag : void 0, f = new i.Element(a, u, void 0, c);
        this.addNode(f), this.tagStack.push(f);
      }, s.prototype.ontext = function(a) {
        var u = this.lastNode;
        if (u && u.type === r.ElementType.Text)
          u.data += a, this.options.withEndIndices && (u.endIndex = this.parser.endIndex);
        else {
          var c = new i.Text(a);
          this.addNode(c), this.lastNode = c;
        }
      }, s.prototype.oncomment = function(a) {
        if (this.lastNode && this.lastNode.type === r.ElementType.Comment) {
          this.lastNode.data += a;
          return;
        }
        var u = new i.Comment(a);
        this.addNode(u), this.lastNode = u;
      }, s.prototype.oncommentend = function() {
        this.lastNode = null;
      }, s.prototype.oncdatastart = function() {
        var a = new i.Text(""), u = new i.CDATA([a]);
        this.addNode(u), a.parent = u, this.lastNode = a;
      }, s.prototype.oncdataend = function() {
        this.lastNode = null;
      }, s.prototype.onprocessinginstruction = function(a, u) {
        var c = new i.ProcessingInstruction(a, u);
        this.addNode(c);
      }, s.prototype.handleCallback = function(a) {
        if (typeof this.callback == "function")
          this.callback(a, this.dom);
        else if (a)
          throw a;
      }, s.prototype.addNode = function(a) {
        var u = this.tagStack[this.tagStack.length - 1], c = u.children[u.children.length - 1];
        this.options.withStartIndices && (a.startIndex = this.parser.startIndex), this.options.withEndIndices && (a.endIndex = this.parser.endIndex), u.children.push(a), c && (a.prev = c, c.next = a), a.parent = u, this.lastNode = null;
      }, s;
    }()
  );
  t.DomHandler = l, t.default = l;
})(F0);
var E1 = "html", T1 = "head", yu = "body", Pb = /<([a-zA-Z]+[0-9]?)/, b1 = /<head[^]*>/i, P1 = /<body[^]*>/i, Ac = function() {
  throw new Error(
    "This browser does not support `document.implementation.createHTMLDocument`"
  );
}, tp = function() {
  throw new Error(
    "This browser does not support `DOMParser.prototype.parseFromString`"
  );
}, O1 = typeof window == "object" && window.DOMParser;
if (typeof O1 == "function") {
  var Ob = new O1(), Rb = "text/html";
  tp = function(t, e) {
    return e && (t = "<" + e + ">" + t + "</" + e + ">"), Ob.parseFromString(t, Rb);
  }, Ac = tp;
}
if (typeof document == "object" && document.implementation) {
  var _u = document.implementation.createHTMLDocument();
  Ac = function(t, e) {
    if (e) {
      var n = _u.documentElement.querySelector(e);
      return n.innerHTML = t, _u;
    }
    return _u.documentElement.innerHTML = t, _u;
  };
}
var vd = typeof document == "object" ? document.createElement("template") : {}, np;
vd.content && (np = function(t) {
  return vd.innerHTML = t, vd.content.childNodes;
});
function Mb(t) {
  var e, n = t.match(Pb);
  n && n[1] && (e = n[1].toLowerCase());
  var r, i, o;
  switch (e) {
    case E1:
      return r = tp(t), b1.test(t) || (i = r.querySelector(T1), i && i.parentNode.removeChild(i)), P1.test(t) || (i = r.querySelector(yu), i && i.parentNode.removeChild(i)), r.querySelectorAll(E1);
    case T1:
    case yu:
      return r = Ac(t), o = r.querySelectorAll(e), P1.test(t) && b1.test(t) ? o[0].parentNode.childNodes : o;
    default:
      return np ? np(t) : (i = Ac(t, yu).querySelector(yu), i.childNodes);
  }
}
var Nb = Mb, W0 = {}, Tw = {};
Tw.CASE_SENSITIVE_TAG_NAMES = [
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
var gf = F0, Ab = Tw, R1 = Ab.CASE_SENSITIVE_TAG_NAMES, Ib = gf.Comment, Db = gf.Element, zb = gf.ProcessingInstruction, $b = gf.Text, bw = {}, yd;
for (var _d = 0, jb = R1.length; _d < jb; _d++)
  yd = R1[_d], bw[yd.toLowerCase()] = yd;
function Lb(t) {
  return bw[t];
}
function Pw(t) {
  for (var e = {}, n, r = 0, i = t.length; r < i; r++)
    n = t[r], e[n.name] = n.value;
  return e;
}
function Fb(t) {
  t = t.toLowerCase();
  var e = Lb(t);
  return e || t;
}
function Ow(t, e, n) {
  e = e || null;
  for (var r = [], i, o = 0, l = t.length; o < l; o++) {
    var s = t[o], a;
    switch (s.nodeType) {
      case 1:
        i = Fb(s.nodeName), a = new Db(i, Pw(s.attributes)), a.children = Ow(
          // template children are on content
          i === "template" ? s.content.childNodes : s.childNodes,
          a
        );
        break;
      case 3:
        a = new $b(s.nodeValue);
        break;
      case 8:
        a = new Ib(s.nodeValue);
        break;
      default:
        continue;
    }
    var u = r[o - 1] || null;
    u && (u.next = a), a.parent = e, a.prev = u, a.next = null, r.push(a);
  }
  return n && (a = new zb(
    n.substring(0, n.indexOf(" ")).toLowerCase(),
    n
  ), a.next = r[0] || null, a.parent = e, r.unshift(a), r[1] && (r[1].prev = r[0])), r;
}
W0.formatAttributes = Pw;
W0.formatDOM = Ow;
var Bb = Nb, Vb = W0, Ub = Vb.formatDOM, Wb = /<(![a-zA-Z\s]+)>/;
function Hb(t) {
  if (typeof t != "string")
    throw new TypeError("First argument must be a string");
  if (t === "")
    return [];
  var e = t.match(Wb), n;
  return e && e[1] && (n = e[1]), Ub(Bb(t), null, n);
}
var Yb = Hb, Wn = {}, mf = {}, Xb = 0;
mf.SAME = Xb;
var Gb = 1;
mf.CAMELCASE = Gb;
mf.possibleStandardNames = {
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
Object.defineProperty(Wn, "__esModule", { value: !0 });
function Qb(t, e) {
  return qb(t) || Kb(t, e) || Zb(t, e) || Jb();
}
function qb(t) {
  if (Array.isArray(t))
    return t;
}
function Kb(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var r = [], i = !0, o = !1, l, s;
    try {
      for (n = n.call(t); !(i = (l = n.next()).done) && (r.push(l.value), !(e && r.length === e)); i = !0)
        ;
    } catch (a) {
      o = !0, s = a;
    } finally {
      try {
        !i && n.return != null && n.return();
      } finally {
        if (o)
          throw s;
      }
    }
    return r;
  }
}
function Zb(t, e) {
  if (t) {
    if (typeof t == "string")
      return M1(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set")
      return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return M1(t, e);
  }
}
function M1(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++)
    r[n] = t[n];
  return r;
}
function Jb() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Rw = 0, Bi = 1, vf = 2, yf = 3, H0 = 4, Mw = 5, Nw = 6;
function e3(t) {
  return yt.hasOwnProperty(t) ? yt[t] : null;
}
function Vt(t, e, n, r, i, o, l) {
  this.acceptsBooleans = e === vf || e === yf || e === H0, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = t, this.type = e, this.sanitizeURL = o, this.removeEmptyString = l;
}
var yt = {}, t3 = [
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
t3.forEach(function(t) {
  yt[t] = new Vt(
    t,
    Rw,
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
  var e = Qb(t, 2), n = e[0], r = e[1];
  yt[n] = new Vt(
    n,
    Bi,
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
  yt[t] = new Vt(
    t,
    vf,
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
  yt[t] = new Vt(
    t,
    vf,
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
  yt[t] = new Vt(
    t,
    yf,
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
  yt[t] = new Vt(
    t,
    yf,
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
  yt[t] = new Vt(
    t,
    H0,
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
  yt[t] = new Vt(
    t,
    Nw,
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
  yt[t] = new Vt(
    t,
    Mw,
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
var Y0 = /[\-\:]([a-z])/g, X0 = function(e) {
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
  var e = t.replace(Y0, X0);
  yt[e] = new Vt(
    e,
    Bi,
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
  var e = t.replace(Y0, X0);
  yt[e] = new Vt(
    e,
    Bi,
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
  var e = t.replace(Y0, X0);
  yt[e] = new Vt(
    e,
    Bi,
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
  yt[t] = new Vt(
    t,
    Bi,
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
var n3 = "xlinkHref";
yt[n3] = new Vt(
  "xlinkHref",
  Bi,
  !1,
  // mustUseProperty
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  // sanitizeURL
  !1
);
["src", "href", "action", "formAction"].forEach(function(t) {
  yt[t] = new Vt(
    t,
    Bi,
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
var G0 = mf, r3 = G0.CAMELCASE, i3 = G0.SAME, N1 = G0.possibleStandardNames, o3 = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", l3 = o3 + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", s3 = RegExp.prototype.test.bind(
  // eslint-disable-next-line no-misleading-character-class
  new RegExp("^(data|aria)-[" + l3 + "]*$")
), a3 = Object.keys(N1).reduce(function(t, e) {
  var n = N1[e];
  return n === i3 ? t[e] = e : n === r3 ? t[e.toLowerCase()] = e : t[e] = n, t;
}, {});
Wn.BOOLEAN = yf;
Wn.BOOLEANISH_STRING = vf;
Wn.NUMERIC = Mw;
Wn.OVERLOADED_BOOLEAN = H0;
Wn.POSITIVE_NUMERIC = Nw;
Wn.RESERVED = Rw;
Wn.STRING = Bi;
Wn.getPropertyInfo = e3;
Wn.isCustomAttribute = s3;
Wn.possibleStandardNames = a3;
var Aw = {}, Q0 = { exports: {} }, A1 = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, u3 = /\n/g, c3 = /^\s*/, f3 = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, d3 = /^:\s*/, h3 = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, p3 = /^[;\s]*/, g3 = /^\s+|\s+$/g, m3 = `
`, I1 = "/", D1 = "*", io = "", v3 = "comment", y3 = "declaration", _3 = function(t, e) {
  if (typeof t != "string")
    throw new TypeError("First argument must be a string");
  if (!t)
    return [];
  e = e || {};
  var n = 1, r = 1;
  function i(g) {
    var p = g.match(u3);
    p && (n += p.length);
    var _ = g.lastIndexOf(m3);
    r = ~_ ? g.length - _ : r + g.length;
  }
  function o() {
    var g = { line: n, column: r };
    return function(p) {
      return p.position = new l(g), u(), p;
    };
  }
  function l(g) {
    this.start = g, this.end = { line: n, column: r }, this.source = e.source;
  }
  l.prototype.content = t;
  function s(g) {
    var p = new Error(
      e.source + ":" + n + ":" + r + ": " + g
    );
    if (p.reason = g, p.filename = e.source, p.line = n, p.column = r, p.source = t, !e.silent)
      throw p;
  }
  function a(g) {
    var p = g.exec(t);
    if (p) {
      var _ = p[0];
      return i(_), t = t.slice(_.length), p;
    }
  }
  function u() {
    a(c3);
  }
  function c(g) {
    var p;
    for (g = g || []; p = f(); )
      p !== !1 && g.push(p);
    return g;
  }
  function f() {
    var g = o();
    if (!(I1 != t.charAt(0) || D1 != t.charAt(1))) {
      for (var p = 2; io != t.charAt(p) && (D1 != t.charAt(p) || I1 != t.charAt(p + 1)); )
        ++p;
      if (p += 2, io === t.charAt(p - 1))
        return s("End of comment missing");
      var _ = t.slice(2, p - 2);
      return r += 2, i(_), t = t.slice(p), r += 2, g({
        type: v3,
        comment: _
      });
    }
  }
  function h() {
    var g = o(), p = a(f3);
    if (p) {
      if (f(), !a(d3))
        return s("property missing ':'");
      var _ = a(h3), v = g({
        type: y3,
        property: z1(p[0].replace(A1, io)),
        value: _ ? z1(_[0].replace(A1, io)) : io
      });
      return a(p3), v;
    }
  }
  function d() {
    var g = [];
    c(g);
    for (var p; p = h(); )
      p !== !1 && (g.push(p), c(g));
    return g;
  }
  return u(), d();
};
function z1(t) {
  return t ? t.replace(g3, io) : io;
}
var x3 = _3;
function Iw(t, e) {
  var n = null;
  if (!t || typeof t != "string")
    return n;
  for (var r, i = x3(t), o = typeof e == "function", l, s, a = 0, u = i.length; a < u; a++)
    r = i[a], l = r.property, s = r.value, o ? e(l, s, r) : s && (n || (n = {}), n[l] = s);
  return n;
}
Q0.exports = Iw;
Q0.exports.default = Iw;
var w3 = Q0.exports, _f = {};
_f.__esModule = !0;
_f.camelCase = void 0;
var k3 = /^--[a-zA-Z0-9-]+$/, S3 = /-([a-z])/g, C3 = /^[^-]+$/, E3 = /^-(webkit|moz|ms|o|khtml)-/, T3 = /^-(ms)-/, b3 = function(t) {
  return !t || C3.test(t) || k3.test(t);
}, P3 = function(t, e) {
  return e.toUpperCase();
}, $1 = function(t, e) {
  return "".concat(e, "-");
}, O3 = function(t, e) {
  return e === void 0 && (e = {}), b3(t) ? t : (t = t.toLowerCase(), e.reactCompat ? t = t.replace(T3, $1) : t = t.replace(E3, $1), t.replace(S3, P3));
};
_f.camelCase = O3;
(function(t) {
  var e = wr && wr.__importDefault || function(o) {
    return o && o.__esModule ? o : { default: o };
  };
  t.__esModule = !0;
  var n = e(w3), r = _f;
  function i(o, l) {
    var s = {};
    return !o || typeof o != "string" || (0, n.default)(o, function(a, u) {
      a && u && (s[(0, r.camelCase)(a, l)] = u);
    }), s;
  }
  t.default = i;
})(Aw);
var R3 = S, M3 = Aw.default;
function N3(t, e) {
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
function A3(t, e) {
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
var I3 = { reactCompat: !0 };
function D3(t, e) {
  if (t != null)
    try {
      e.style = M3(t, I3);
    } catch {
      e.style = {};
    }
}
var z3 = R3.version.split(".")[0] >= 16, Dw = /* @__PURE__ */ new Set([
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
function $3(t) {
  return !Dw.has(t.name);
}
var zw = {
  PRESERVE_CUSTOM_ATTRIBUTES: z3,
  invertObject: N3,
  isCustomComponent: A3,
  setStyleProp: D3,
  canTextBeChildOfNode: $3,
  elementsWithNoTextChildren: Dw
}, vs = Wn, j1 = zw, j3 = ["checked", "value"], L3 = ["input", "select", "textarea"], F3 = {
  reset: !0,
  submit: !0
}, $w = function(e, n) {
  e = e || {};
  var r, i, o, l, s, a = {}, u = e.type && F3[e.type];
  for (r in e) {
    if (o = e[r], vs.isCustomAttribute(r)) {
      a[r] = o;
      continue;
    }
    if (i = r.toLowerCase(), l = L1(i), l) {
      switch (s = vs.getPropertyInfo(l), j3.indexOf(l) !== -1 && L3.indexOf(n) !== -1 && !u && (l = L1("default" + i)), a[l] = o, s && s.type) {
        case vs.BOOLEAN:
          a[l] = !0;
          break;
        case vs.OVERLOADED_BOOLEAN:
          o === "" && (a[l] = !0);
          break;
      }
      continue;
    }
    j1.PRESERVE_CUSTOM_ATTRIBUTES && (a[r] = o);
  }
  return j1.setStyleProp(e.style, a), a;
};
function L1(t) {
  return vs.possibleStandardNames[t];
}
var B3 = S, V3 = $w, Ic = zw, U3 = Ic.setStyleProp, W3 = Ic.canTextBeChildOfNode;
function jw(t, e) {
  e = e || {};
  for (var n = e.library || B3, r = n.cloneElement, i = n.createElement, o = n.isValidElement, l = [], s, a, u = typeof e.replace == "function", c, f, h, d = e.trim, g = 0, p = t.length; g < p; g++) {
    if (s = t[g], u && (c = e.replace(s), o(c))) {
      p > 1 && (c = r(c, {
        key: c.key || g
      })), l.push(c);
      continue;
    }
    if (s.type === "text") {
      if (a = !s.data.trim().length, a && s.parent && !W3(s.parent) || d && a)
        continue;
      l.push(s.data);
      continue;
    }
    switch (f = s.attribs, H3(s) ? U3(f.style, f) : f && (f = V3(f, s.name)), h = null, s.type) {
      case "script":
      case "style":
        s.children[0] && (f.dangerouslySetInnerHTML = {
          __html: s.children[0].data
        });
        break;
      case "tag":
        s.name === "textarea" && s.children[0] ? f.defaultValue = s.children[0].data : s.children && s.children.length && (h = jw(s.children, e));
        break;
      default:
        continue;
    }
    p > 1 && (f.key = g), l.push(i(s.name, f, h));
  }
  return l.length === 1 ? l[0] : l;
}
function H3(t) {
  return Ic.PRESERVE_CUSTOM_ATTRIBUTES && t.type === "tag" && Ic.isCustomComponent(t.name, t.attribs);
}
var Y3 = jw, xf = F0, al = Yb, X3 = $w, Lw = Y3;
al = /* istanbul ignore next */
typeof al.default == "function" ? al.default : al;
var G3 = { lowerCaseAttributeNames: !1 };
function Or(t, e) {
  if (typeof t != "string")
    throw new TypeError("First argument must be a string");
  return t === "" ? [] : (e = e || {}, Lw(
    al(t, e.htmlparser2 || G3),
    e
  ));
}
Or.domToReact = Lw;
Or.htmlToDOM = al;
Or.attributesToProps = X3;
Or.Comment = xf.Comment;
Or.Element = xf.Element;
Or.ProcessingInstruction = xf.ProcessingInstruction;
Or.Text = xf.Text;
var Q3 = Or;
Or.default = Or;
const Do = /* @__PURE__ */ B1(Q3);
Do.domToReact;
Do.htmlToDOM;
Do.attributesToProps;
Do.Comment;
Do.Element;
Do.ProcessingInstruction;
Do.Text;
S.createContext({
  val: { title: "タイトル", content: "コンテンツ" },
  setVal: (t) => {
  }
});
var q3 = document.getElementById("RomNav");
const K3 = xd.createRoot(q3);
K3.render(/* @__PURE__ */ w.jsx(Cb, { basename: "/skyopener.github.io", children: /* @__PURE__ */ w.jsxs(kb, { children: [
  /* @__PURE__ */ w.jsx(
    ms,
    {
      path: "/",
      element: /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
        /* @__PURE__ */ w.jsx(vu, { basename: "/skyopener.github.io" }),
        /* @__PURE__ */ w.jsx(OT, { namebox: ["このサイトについて", "依頼の流れ", "制作例", "リンク"], children: " " })
      ] })
    }
  ),
  /* @__PURE__ */ w.jsx(
    ms,
    {
      path: "/irai",
      element: /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
        /* @__PURE__ */ w.jsx(vu, { basename: "/skyopener.github.io" }),
        /* @__PURE__ */ w.jsx(Bm, { children: " " })
      ] })
    }
  ),
  /* @__PURE__ */ w.jsx(
    ms,
    {
      path: "/article/:id",
      element: /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
        /* @__PURE__ */ w.jsx(vu, { basename: "/skyopener.github.io" }),
        /* @__PURE__ */ w.jsx(Eb, {})
      ] })
    }
  ),
  /* @__PURE__ */ w.jsx(
    ms,
    {
      path: "/*",
      element: /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
        /* @__PURE__ */ w.jsx(vu, { basename: "/skyopener.github.io" }),
        /* @__PURE__ */ w.jsx(Bm, { children: " " })
      ] })
    }
  )
] }) }));
