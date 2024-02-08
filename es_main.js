var Bw = Object.defineProperty;
var Uw = (t, e, n) => e in t ? Bw(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var F = (t, e, n) => (Uw(t, typeof e != "symbol" ? e + "" : e, n), n);
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
function U1(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var V1 = { exports: {} }, Dc = {}, W1 = { exports: {} }, le = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ca = Symbol.for("react.element"), Ww = Symbol.for("react.portal"), Hw = Symbol.for("react.fragment"), Yw = Symbol.for("react.strict_mode"), Xw = Symbol.for("react.profiler"), Gw = Symbol.for("react.provider"), Qw = Symbol.for("react.context"), qw = Symbol.for("react.forward_ref"), Kw = Symbol.for("react.suspense"), Zw = Symbol.for("react.memo"), Jw = Symbol.for("react.lazy"), Z0 = Symbol.iterator;
function e2(t) {
  return t === null || typeof t != "object" ? null : (t = Z0 && t[Z0] || t["@@iterator"], typeof t == "function" ? t : null);
}
var H1 = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Y1 = Object.assign, X1 = {};
function Ll(t, e, n) {
  this.props = t, this.context = e, this.refs = X1, this.updater = n || H1;
}
Ll.prototype.isReactComponent = {};
Ll.prototype.setState = function(t, e) {
  if (typeof t != "object" && typeof t != "function" && t != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, t, e, "setState");
};
Ll.prototype.forceUpdate = function(t) {
  this.updater.enqueueForceUpdate(this, t, "forceUpdate");
};
function G1() {
}
G1.prototype = Ll.prototype;
function ip(t, e, n) {
  this.props = t, this.context = e, this.refs = X1, this.updater = n || H1;
}
var op = ip.prototype = new G1();
op.constructor = ip;
Y1(op, Ll.prototype);
op.isPureReactComponent = !0;
var J0 = Array.isArray, Q1 = Object.prototype.hasOwnProperty, lp = { current: null }, q1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function K1(t, e, n) {
  var r, i = {}, o = null, l = null;
  if (e != null)
    for (r in e.ref !== void 0 && (l = e.ref), e.key !== void 0 && (o = "" + e.key), e)
      Q1.call(e, r) && !q1.hasOwnProperty(r) && (i[r] = e[r]);
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
  return { $$typeof: Ca, type: t, key: o, ref: l, props: i, _owner: lp.current };
}
function t2(t, e) {
  return { $$typeof: Ca, type: t.type, key: e, ref: t.ref, props: t.props, _owner: t._owner };
}
function sp(t) {
  return typeof t == "object" && t !== null && t.$$typeof === Ca;
}
function n2(t) {
  var e = { "=": "=0", ":": "=2" };
  return "$" + t.replace(/[=:]/g, function(n) {
    return e[n];
  });
}
var eg = /\/+/g;
function Sf(t, e) {
  return typeof t == "object" && t !== null && t.key != null ? n2("" + t.key) : e.toString(36);
}
function ku(t, e, n, r, i) {
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
          case Ca:
          case Ww:
            l = !0;
        }
    }
  if (l)
    return l = t, i = i(l), t = r === "" ? "." + Sf(l, 0) : r, J0(i) ? (n = "", t != null && (n = t.replace(eg, "$&/") + "/"), ku(i, e, n, "", function(u) {
      return u;
    })) : i != null && (sp(i) && (i = t2(i, n + (!i.key || l && l.key === i.key ? "" : ("" + i.key).replace(eg, "$&/") + "/") + t)), e.push(i)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", J0(t))
    for (var s = 0; s < t.length; s++) {
      o = t[s];
      var a = r + Sf(o, s);
      l += ku(o, e, n, a, i);
    }
  else if (a = e2(t), typeof a == "function")
    for (t = a.call(t), s = 0; !(o = t.next()).done; )
      o = o.value, a = r + Sf(o, s++), l += ku(o, e, n, a, i);
  else if (o === "object")
    throw e = String(t), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function Da(t, e, n) {
  if (t == null)
    return t;
  var r = [], i = 0;
  return ku(t, r, "", "", function(o) {
    return e.call(n, o, i++);
  }), r;
}
function r2(t) {
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
var Ft = { current: null }, Su = { transition: null }, i2 = { ReactCurrentDispatcher: Ft, ReactCurrentBatchConfig: Su, ReactCurrentOwner: lp };
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
  if (!sp(t))
    throw Error("React.Children.only expected to receive a single React element child.");
  return t;
} };
le.Component = Ll;
le.Fragment = Hw;
le.Profiler = Xw;
le.PureComponent = ip;
le.StrictMode = Yw;
le.Suspense = Kw;
le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = i2;
le.cloneElement = function(t, e, n) {
  if (t == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
  var r = Y1({}, t.props), i = t.key, o = t.ref, l = t._owner;
  if (e != null) {
    if (e.ref !== void 0 && (o = e.ref, l = lp.current), e.key !== void 0 && (i = "" + e.key), t.type && t.type.defaultProps)
      var s = t.type.defaultProps;
    for (a in e)
      Q1.call(e, a) && !q1.hasOwnProperty(a) && (r[a] = e[a] === void 0 && s !== void 0 ? s[a] : e[a]);
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
  return { $$typeof: Ca, type: t.type, key: i, ref: o, props: r, _owner: l };
};
le.createContext = function(t) {
  return t = { $$typeof: Qw, _currentValue: t, _currentValue2: t, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, t.Provider = { $$typeof: Gw, _context: t }, t.Consumer = t;
};
le.createElement = K1;
le.createFactory = function(t) {
  var e = K1.bind(null, t);
  return e.type = t, e;
};
le.createRef = function() {
  return { current: null };
};
le.forwardRef = function(t) {
  return { $$typeof: qw, render: t };
};
le.isValidElement = sp;
le.lazy = function(t) {
  return { $$typeof: Jw, _payload: { _status: -1, _result: t }, _init: r2 };
};
le.memo = function(t, e) {
  return { $$typeof: Zw, type: t, compare: e === void 0 ? null : e };
};
le.startTransition = function(t) {
  var e = Su.transition;
  Su.transition = {};
  try {
    t();
  } finally {
    Su.transition = e;
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
W1.exports = le;
var k = W1.exports;
const o2 = /* @__PURE__ */ U1(k), l2 = /* @__PURE__ */ Vw({
  __proto__: null,
  default: o2
}, [k]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var s2 = k, a2 = Symbol.for("react.element"), u2 = Symbol.for("react.fragment"), c2 = Object.prototype.hasOwnProperty, f2 = s2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, d2 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Z1(t, e, n) {
  var r, i = {}, o = null, l = null;
  n !== void 0 && (o = "" + n), e.key !== void 0 && (o = "" + e.key), e.ref !== void 0 && (l = e.ref);
  for (r in e)
    c2.call(e, r) && !d2.hasOwnProperty(r) && (i[r] = e[r]);
  if (t && t.defaultProps)
    for (r in e = t.defaultProps, e)
      i[r] === void 0 && (i[r] = e[r]);
  return { $$typeof: a2, type: t, key: o, ref: l, props: i, _owner: f2.current };
}
Dc.Fragment = u2;
Dc.jsx = Z1;
Dc.jsxs = Z1;
V1.exports = Dc;
var w = V1.exports, wd = {}, J1 = { exports: {} }, Cn = {}, ev = { exports: {} }, tv = {};
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
  function e(M, $) {
    var S = M.length;
    M.push($);
    e:
      for (; 0 < S; ) {
        var Y = S - 1 >>> 1, J = M[Y];
        if (0 < i(J, $))
          M[Y] = $, M[S] = J, S = Y;
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
    var $ = M[0], S = M.pop();
    if (S !== $) {
      M[0] = S;
      e:
        for (var Y = 0, J = M.length, nt = J >>> 1; Y < nt; ) {
          var fe = 2 * (Y + 1) - 1, de = M[fe], ye = fe + 1, ue = M[ye];
          if (0 > i(de, S))
            ye < J && 0 > i(ue, de) ? (M[Y] = ue, M[ye] = S, Y = ye) : (M[Y] = de, M[fe] = S, Y = fe);
          else if (ye < J && 0 > i(ue, S))
            M[Y] = ue, M[ye] = S, Y = ye;
          else
            break e;
        }
    }
    return $;
  }
  function i(M, $) {
    var S = M.sortIndex - $.sortIndex;
    return S !== 0 ? S : M.id - $.id;
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
  var a = [], u = [], c = 1, f = null, h = 3, d = !1, g = !1, p = !1, y = typeof setTimeout == "function" ? setTimeout : null, v = typeof clearTimeout == "function" ? clearTimeout : null, m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function _(M) {
    for (var $ = n(u); $ !== null; ) {
      if ($.callback === null)
        r(u);
      else if ($.startTime <= M)
        r(u), $.sortIndex = $.expirationTime, e(a, $);
      else
        break;
      $ = n(u);
    }
  }
  function x(M) {
    if (p = !1, _(M), !g)
      if (n(a) !== null)
        g = !0, W(C);
      else {
        var $ = n(u);
        $ !== null && L(x, $.startTime - M);
      }
  }
  function C(M, $) {
    g = !1, p && (p = !1, v(T), T = -1), d = !0;
    var S = h;
    try {
      for (_($), f = n(a); f !== null && (!(f.expirationTime > $) || M && !j()); ) {
        var Y = f.callback;
        if (typeof Y == "function") {
          f.callback = null, h = f.priorityLevel;
          var J = Y(f.expirationTime <= $);
          $ = t.unstable_now(), typeof J == "function" ? f.callback = J : f === n(a) && r(a), _($);
        } else
          r(a);
        f = n(a);
      }
      if (f !== null)
        var nt = !0;
      else {
        var fe = n(u);
        fe !== null && L(x, fe.startTime - $), nt = !1;
      }
      return nt;
    } finally {
      f = null, h = S, d = !1;
    }
  }
  var b = !1, E = null, T = -1, O = 5, P = -1;
  function j() {
    return !(t.unstable_now() - P < O);
  }
  function z() {
    if (E !== null) {
      var M = t.unstable_now();
      P = M;
      var $ = !0;
      try {
        $ = E(!0, M);
      } finally {
        $ ? Q() : (b = !1, E = null);
      }
    } else
      b = !1;
  }
  var Q;
  if (typeof m == "function")
    Q = function() {
      m(z);
    };
  else if (typeof MessageChannel < "u") {
    var I = new MessageChannel(), D = I.port2;
    I.port1.onmessage = z, Q = function() {
      D.postMessage(null);
    };
  } else
    Q = function() {
      y(z, 0);
    };
  function W(M) {
    E = M, b || (b = !0, Q());
  }
  function L(M, $) {
    T = y(function() {
      M(t.unstable_now());
    }, $);
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
        var $ = 3;
        break;
      default:
        $ = h;
    }
    var S = h;
    h = $;
    try {
      return M();
    } finally {
      h = S;
    }
  }, t.unstable_pauseExecution = function() {
  }, t.unstable_requestPaint = function() {
  }, t.unstable_runWithPriority = function(M, $) {
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
    var S = h;
    h = M;
    try {
      return $();
    } finally {
      h = S;
    }
  }, t.unstable_scheduleCallback = function(M, $, S) {
    var Y = t.unstable_now();
    switch (typeof S == "object" && S !== null ? (S = S.delay, S = typeof S == "number" && 0 < S ? Y + S : Y) : S = Y, M) {
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
    return J = S + J, M = { id: c++, callback: $, priorityLevel: M, startTime: S, expirationTime: J, sortIndex: -1 }, S > Y ? (M.sortIndex = S, e(u, M), n(a) === null && M === n(u) && (p ? (v(T), T = -1) : p = !0, L(x, S - Y))) : (M.sortIndex = J, e(a, M), g || d || (g = !0, W(C))), M;
  }, t.unstable_shouldYield = j, t.unstable_wrapCallback = function(M) {
    var $ = h;
    return function() {
      var S = h;
      h = $;
      try {
        return M.apply(this, arguments);
      } finally {
        h = S;
      }
    };
  };
})(tv);
ev.exports = tv;
var h2 = ev.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nv = k, kn = h2;
function A(t) {
  for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1; n < arguments.length; n++)
    e += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var rv = /* @__PURE__ */ new Set(), Ws = {};
function Ao(t, e) {
  El(t, e), El(t + "Capture", e);
}
function El(t, e) {
  for (Ws[t] = e, t = 0; t < e.length; t++)
    rv.add(e[t]);
}
var Hr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), kd = Object.prototype.hasOwnProperty, p2 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, tg = {}, ng = {};
function g2(t) {
  return kd.call(ng, t) ? !0 : kd.call(tg, t) ? !1 : p2.test(t) ? ng[t] = !0 : (tg[t] = !0, !1);
}
function m2(t, e, n, r) {
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
function v2(t, e, n, r) {
  if (e === null || typeof e > "u" || m2(t, e, n, r))
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
var ap = /[\-:]([a-z])/g;
function up(t) {
  return t[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
  var e = t.replace(
    ap,
    up
  );
  vt[e] = new Bt(e, 1, !1, t, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
  var e = t.replace(ap, up);
  vt[e] = new Bt(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
  var e = t.replace(ap, up);
  vt[e] = new Bt(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(t) {
  vt[t] = new Bt(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
vt.xlinkHref = new Bt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(t) {
  vt[t] = new Bt(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function cp(t, e, n, r) {
  var i = vt.hasOwnProperty(e) ? vt[e] : null;
  (i !== null ? i.type !== 0 : r || !(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (v2(e, n, i, r) && (n = null), r || i === null ? g2(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n)) : i.mustUseProperty ? t[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (e = i.attributeName, r = i.attributeNamespace, n === null ? t.removeAttribute(e) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))));
}
var Kr = nv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ja = Symbol.for("react.element"), Xo = Symbol.for("react.portal"), Go = Symbol.for("react.fragment"), fp = Symbol.for("react.strict_mode"), Sd = Symbol.for("react.profiler"), iv = Symbol.for("react.provider"), ov = Symbol.for("react.context"), dp = Symbol.for("react.forward_ref"), Cd = Symbol.for("react.suspense"), Ed = Symbol.for("react.suspense_list"), hp = Symbol.for("react.memo"), oi = Symbol.for("react.lazy"), lv = Symbol.for("react.offscreen"), rg = Symbol.iterator;
function Xl(t) {
  return t === null || typeof t != "object" ? null : (t = rg && t[rg] || t["@@iterator"], typeof t == "function" ? t : null);
}
var $e = Object.assign, Cf;
function ss(t) {
  if (Cf === void 0)
    try {
      throw Error();
    } catch (n) {
      var e = n.stack.trim().match(/\n( *(at )?)/);
      Cf = e && e[1] || "";
    }
  return `
` + Cf + t;
}
var Ef = !1;
function bf(t, e) {
  if (!t || Ef)
    return "";
  Ef = !0;
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
    Ef = !1, Error.prepareStackTrace = n;
  }
  return (t = t ? t.displayName || t.name : "") ? ss(t) : "";
}
function y2(t) {
  switch (t.tag) {
    case 5:
      return ss(t.type);
    case 16:
      return ss("Lazy");
    case 13:
      return ss("Suspense");
    case 19:
      return ss("SuspenseList");
    case 0:
    case 2:
    case 15:
      return t = bf(t.type, !1), t;
    case 11:
      return t = bf(t.type.render, !1), t;
    case 1:
      return t = bf(t.type, !0), t;
    default:
      return "";
  }
}
function bd(t) {
  if (t == null)
    return null;
  if (typeof t == "function")
    return t.displayName || t.name || null;
  if (typeof t == "string")
    return t;
  switch (t) {
    case Go:
      return "Fragment";
    case Xo:
      return "Portal";
    case Sd:
      return "Profiler";
    case fp:
      return "StrictMode";
    case Cd:
      return "Suspense";
    case Ed:
      return "SuspenseList";
  }
  if (typeof t == "object")
    switch (t.$$typeof) {
      case ov:
        return (t.displayName || "Context") + ".Consumer";
      case iv:
        return (t._context.displayName || "Context") + ".Provider";
      case dp:
        var e = t.render;
        return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
      case hp:
        return e = t.displayName || null, e !== null ? e : bd(t.type) || "Memo";
      case oi:
        e = t._payload, t = t._init;
        try {
          return bd(t(e));
        } catch {
        }
    }
  return null;
}
function _2(t) {
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
      return bd(e);
    case 8:
      return e === fp ? "StrictMode" : "Mode";
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
function Mi(t) {
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
function sv(t) {
  var e = t.type;
  return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
}
function x2(t) {
  var e = sv(t) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e), r = "" + t[e];
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
function La(t) {
  t._valueTracker || (t._valueTracker = x2(t));
}
function av(t) {
  if (!t)
    return !1;
  var e = t._valueTracker;
  if (!e)
    return !0;
  var n = e.getValue(), r = "";
  return t && (r = sv(t) ? t.checked ? "true" : "false" : t.value), t = r, t !== n ? (e.setValue(t), !0) : !1;
}
function Yu(t) {
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
  return $e({}, e, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? t._wrapperState.initialChecked });
}
function ig(t, e) {
  var n = e.defaultValue == null ? "" : e.defaultValue, r = e.checked != null ? e.checked : e.defaultChecked;
  n = Mi(e.value != null ? e.value : n), t._wrapperState = { initialChecked: r, initialValue: n, controlled: e.type === "checkbox" || e.type === "radio" ? e.checked != null : e.value != null };
}
function uv(t, e) {
  e = e.checked, e != null && cp(t, "checked", e, !1);
}
function Pd(t, e) {
  uv(t, e);
  var n = Mi(e.value), r = e.type;
  if (n != null)
    r === "number" ? (n === 0 && t.value === "" || t.value != n) && (t.value = "" + n) : t.value !== "" + n && (t.value = "" + n);
  else if (r === "submit" || r === "reset") {
    t.removeAttribute("value");
    return;
  }
  e.hasOwnProperty("value") ? Od(t, e.type, n) : e.hasOwnProperty("defaultValue") && Od(t, e.type, Mi(e.defaultValue)), e.checked == null && e.defaultChecked != null && (t.defaultChecked = !!e.defaultChecked);
}
function og(t, e, n) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var r = e.type;
    if (!(r !== "submit" && r !== "reset" || e.value !== void 0 && e.value !== null))
      return;
    e = "" + t._wrapperState.initialValue, n || e === t.value || (t.value = e), t.defaultValue = e;
  }
  n = t.name, n !== "" && (t.name = ""), t.defaultChecked = !!t._wrapperState.initialChecked, n !== "" && (t.name = n);
}
function Od(t, e, n) {
  (e !== "number" || Yu(t.ownerDocument) !== t) && (n == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + n && (t.defaultValue = "" + n));
}
var as = Array.isArray;
function cl(t, e, n, r) {
  if (t = t.options, e) {
    e = {};
    for (var i = 0; i < n.length; i++)
      e["$" + n[i]] = !0;
    for (n = 0; n < t.length; n++)
      i = e.hasOwnProperty("$" + t[n].value), t[n].selected !== i && (t[n].selected = i), i && r && (t[n].defaultSelected = !0);
  } else {
    for (n = "" + Mi(n), e = null, i = 0; i < t.length; i++) {
      if (t[i].value === n) {
        t[i].selected = !0, r && (t[i].defaultSelected = !0);
        return;
      }
      e !== null || t[i].disabled || (e = t[i]);
    }
    e !== null && (e.selected = !0);
  }
}
function Rd(t, e) {
  if (e.dangerouslySetInnerHTML != null)
    throw Error(A(91));
  return $e({}, e, { value: void 0, defaultValue: void 0, children: "" + t._wrapperState.initialValue });
}
function lg(t, e) {
  var n = e.value;
  if (n == null) {
    if (n = e.children, e = e.defaultValue, n != null) {
      if (e != null)
        throw Error(A(92));
      if (as(n)) {
        if (1 < n.length)
          throw Error(A(93));
        n = n[0];
      }
      e = n;
    }
    e == null && (e = ""), n = e;
  }
  t._wrapperState = { initialValue: Mi(n) };
}
function cv(t, e) {
  var n = Mi(e.value), r = Mi(e.defaultValue);
  n != null && (n = "" + n, n !== t.value && (t.value = n), e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)), r != null && (t.defaultValue = "" + r);
}
function sg(t) {
  var e = t.textContent;
  e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e);
}
function fv(t) {
  switch (t) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Md(t, e) {
  return t == null || t === "http://www.w3.org/1999/xhtml" ? fv(e) : t === "http://www.w3.org/2000/svg" && e === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t;
}
var Fa, dv = function(t) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(e, n, r, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return t(e, n, r, i);
    });
  } : t;
}(function(t, e) {
  if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t)
    t.innerHTML = e;
  else {
    for (Fa = Fa || document.createElement("div"), Fa.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>", e = Fa.firstChild; t.firstChild; )
      t.removeChild(t.firstChild);
    for (; e.firstChild; )
      t.appendChild(e.firstChild);
  }
});
function Hs(t, e) {
  if (e) {
    var n = t.firstChild;
    if (n && n === t.lastChild && n.nodeType === 3) {
      n.nodeValue = e;
      return;
    }
  }
  t.textContent = e;
}
var _s = {
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
}, w2 = ["Webkit", "ms", "Moz", "O"];
Object.keys(_s).forEach(function(t) {
  w2.forEach(function(e) {
    e = e + t.charAt(0).toUpperCase() + t.substring(1), _s[e] = _s[t];
  });
});
function hv(t, e, n) {
  return e == null || typeof e == "boolean" || e === "" ? "" : n || typeof e != "number" || e === 0 || _s.hasOwnProperty(t) && _s[t] ? ("" + e).trim() : e + "px";
}
function pv(t, e) {
  t = t.style;
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, i = hv(n, e[n], r);
      n === "float" && (n = "cssFloat"), r ? t.setProperty(n, i) : t[n] = i;
    }
}
var k2 = $e({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Nd(t, e) {
  if (e) {
    if (k2[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
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
function Ad(t, e) {
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
var Id = null;
function pp(t) {
  return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
}
var zd = null, fl = null, dl = null;
function ag(t) {
  if (t = Ta(t)) {
    if (typeof zd != "function")
      throw Error(A(280));
    var e = t.stateNode;
    e && (e = Uc(e), zd(t.stateNode, t.type, e));
  }
}
function gv(t) {
  fl ? dl ? dl.push(t) : dl = [t] : fl = t;
}
function mv() {
  if (fl) {
    var t = fl, e = dl;
    if (dl = fl = null, ag(t), e)
      for (t = 0; t < e.length; t++)
        ag(e[t]);
  }
}
function vv(t, e) {
  return t(e);
}
function yv() {
}
var Tf = !1;
function _v(t, e, n) {
  if (Tf)
    return t(e, n);
  Tf = !0;
  try {
    return vv(t, e, n);
  } finally {
    Tf = !1, (fl !== null || dl !== null) && (yv(), mv());
  }
}
function Ys(t, e) {
  var n = t.stateNode;
  if (n === null)
    return null;
  var r = Uc(n);
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
var $d = !1;
if (Hr)
  try {
    var Gl = {};
    Object.defineProperty(Gl, "passive", { get: function() {
      $d = !0;
    } }), window.addEventListener("test", Gl, Gl), window.removeEventListener("test", Gl, Gl);
  } catch {
    $d = !1;
  }
function S2(t, e, n, r, i, o, l, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var xs = !1, Xu = null, Gu = !1, Dd = null, C2 = { onError: function(t) {
  xs = !0, Xu = t;
} };
function E2(t, e, n, r, i, o, l, s, a) {
  xs = !1, Xu = null, S2.apply(C2, arguments);
}
function b2(t, e, n, r, i, o, l, s, a) {
  if (E2.apply(this, arguments), xs) {
    if (xs) {
      var u = Xu;
      xs = !1, Xu = null;
    } else
      throw Error(A(198));
    Gu || (Gu = !0, Dd = u);
  }
}
function Io(t) {
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
function xv(t) {
  if (t.tag === 13) {
    var e = t.memoizedState;
    if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null)
      return e.dehydrated;
  }
  return null;
}
function ug(t) {
  if (Io(t) !== t)
    throw Error(A(188));
}
function T2(t) {
  var e = t.alternate;
  if (!e) {
    if (e = Io(t), e === null)
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
          return ug(i), t;
        if (o === r)
          return ug(i), e;
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
function wv(t) {
  return t = T2(t), t !== null ? kv(t) : null;
}
function kv(t) {
  if (t.tag === 5 || t.tag === 6)
    return t;
  for (t = t.child; t !== null; ) {
    var e = kv(t);
    if (e !== null)
      return e;
    t = t.sibling;
  }
  return null;
}
var Sv = kn.unstable_scheduleCallback, cg = kn.unstable_cancelCallback, P2 = kn.unstable_shouldYield, O2 = kn.unstable_requestPaint, We = kn.unstable_now, R2 = kn.unstable_getCurrentPriorityLevel, gp = kn.unstable_ImmediatePriority, Cv = kn.unstable_UserBlockingPriority, Qu = kn.unstable_NormalPriority, M2 = kn.unstable_LowPriority, Ev = kn.unstable_IdlePriority, jc = null, Sr = null;
function N2(t) {
  if (Sr && typeof Sr.onCommitFiberRoot == "function")
    try {
      Sr.onCommitFiberRoot(jc, t, void 0, (t.current.flags & 128) === 128);
    } catch {
    }
}
var or = Math.clz32 ? Math.clz32 : z2, A2 = Math.log, I2 = Math.LN2;
function z2(t) {
  return t >>>= 0, t === 0 ? 32 : 31 - (A2(t) / I2 | 0) | 0;
}
var Ba = 64, Ua = 4194304;
function us(t) {
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
function qu(t, e) {
  var n = t.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, i = t.suspendedLanes, o = t.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var s = l & ~i;
    s !== 0 ? r = us(s) : (o &= l, o !== 0 && (r = us(o)));
  } else
    l = n & ~i, l !== 0 ? r = us(l) : o !== 0 && (r = us(o));
  if (r === 0)
    return 0;
  if (e !== 0 && e !== r && !(e & i) && (i = r & -r, o = e & -e, i >= o || i === 16 && (o & 4194240) !== 0))
    return e;
  if (r & 4 && (r |= n & 16), e = t.entangledLanes, e !== 0)
    for (t = t.entanglements, e &= r; 0 < e; )
      n = 31 - or(e), i = 1 << n, r |= t[n], e &= ~i;
  return r;
}
function $2(t, e) {
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
function D2(t, e) {
  for (var n = t.suspendedLanes, r = t.pingedLanes, i = t.expirationTimes, o = t.pendingLanes; 0 < o; ) {
    var l = 31 - or(o), s = 1 << l, a = i[l];
    a === -1 ? (!(s & n) || s & r) && (i[l] = $2(s, e)) : a <= e && (t.expiredLanes |= s), o &= ~s;
  }
}
function jd(t) {
  return t = t.pendingLanes & -1073741825, t !== 0 ? t : t & 1073741824 ? 1073741824 : 0;
}
function bv() {
  var t = Ba;
  return Ba <<= 1, !(Ba & 4194240) && (Ba = 64), t;
}
function Pf(t) {
  for (var e = [], n = 0; 31 > n; n++)
    e.push(t);
  return e;
}
function Ea(t, e, n) {
  t.pendingLanes |= e, e !== 536870912 && (t.suspendedLanes = 0, t.pingedLanes = 0), t = t.eventTimes, e = 31 - or(e), t[e] = n;
}
function j2(t, e) {
  var n = t.pendingLanes & ~e;
  t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.expiredLanes &= e, t.mutableReadLanes &= e, t.entangledLanes &= e, e = t.entanglements;
  var r = t.eventTimes;
  for (t = t.expirationTimes; 0 < n; ) {
    var i = 31 - or(n), o = 1 << i;
    e[i] = 0, r[i] = -1, t[i] = -1, n &= ~o;
  }
}
function mp(t, e) {
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
var Pv, vp, Ov, Rv, Mv, Ld = !1, Va = [], _i = null, xi = null, wi = null, Xs = /* @__PURE__ */ new Map(), Gs = /* @__PURE__ */ new Map(), si = [], L2 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function fg(t, e) {
  switch (t) {
    case "focusin":
    case "focusout":
      _i = null;
      break;
    case "dragenter":
    case "dragleave":
      xi = null;
      break;
    case "mouseover":
    case "mouseout":
      wi = null;
      break;
    case "pointerover":
    case "pointerout":
      Xs.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Gs.delete(e.pointerId);
  }
}
function Ql(t, e, n, r, i, o) {
  return t === null || t.nativeEvent !== o ? (t = { blockedOn: e, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }, e !== null && (e = Ta(e), e !== null && vp(e)), t) : (t.eventSystemFlags |= r, e = t.targetContainers, i !== null && e.indexOf(i) === -1 && e.push(i), t);
}
function F2(t, e, n, r, i) {
  switch (e) {
    case "focusin":
      return _i = Ql(_i, t, e, n, r, i), !0;
    case "dragenter":
      return xi = Ql(xi, t, e, n, r, i), !0;
    case "mouseover":
      return wi = Ql(wi, t, e, n, r, i), !0;
    case "pointerover":
      var o = i.pointerId;
      return Xs.set(o, Ql(Xs.get(o) || null, t, e, n, r, i)), !0;
    case "gotpointercapture":
      return o = i.pointerId, Gs.set(o, Ql(Gs.get(o) || null, t, e, n, r, i)), !0;
  }
  return !1;
}
function Nv(t) {
  var e = lo(t.target);
  if (e !== null) {
    var n = Io(e);
    if (n !== null) {
      if (e = n.tag, e === 13) {
        if (e = xv(n), e !== null) {
          t.blockedOn = e, Mv(t.priority, function() {
            Ov(n);
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
function Cu(t) {
  if (t.blockedOn !== null)
    return !1;
  for (var e = t.targetContainers; 0 < e.length; ) {
    var n = Fd(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
    if (n === null) {
      n = t.nativeEvent;
      var r = new n.constructor(n.type, n);
      Id = r, n.target.dispatchEvent(r), Id = null;
    } else
      return e = Ta(n), e !== null && vp(e), t.blockedOn = n, !1;
    e.shift();
  }
  return !0;
}
function dg(t, e, n) {
  Cu(t) && n.delete(e);
}
function B2() {
  Ld = !1, _i !== null && Cu(_i) && (_i = null), xi !== null && Cu(xi) && (xi = null), wi !== null && Cu(wi) && (wi = null), Xs.forEach(dg), Gs.forEach(dg);
}
function ql(t, e) {
  t.blockedOn === e && (t.blockedOn = null, Ld || (Ld = !0, kn.unstable_scheduleCallback(kn.unstable_NormalPriority, B2)));
}
function Qs(t) {
  function e(i) {
    return ql(i, t);
  }
  if (0 < Va.length) {
    ql(Va[0], t);
    for (var n = 1; n < Va.length; n++) {
      var r = Va[n];
      r.blockedOn === t && (r.blockedOn = null);
    }
  }
  for (_i !== null && ql(_i, t), xi !== null && ql(xi, t), wi !== null && ql(wi, t), Xs.forEach(e), Gs.forEach(e), n = 0; n < si.length; n++)
    r = si[n], r.blockedOn === t && (r.blockedOn = null);
  for (; 0 < si.length && (n = si[0], n.blockedOn === null); )
    Nv(n), n.blockedOn === null && si.shift();
}
var hl = Kr.ReactCurrentBatchConfig, Ku = !0;
function U2(t, e, n, r) {
  var i = _e, o = hl.transition;
  hl.transition = null;
  try {
    _e = 1, yp(t, e, n, r);
  } finally {
    _e = i, hl.transition = o;
  }
}
function V2(t, e, n, r) {
  var i = _e, o = hl.transition;
  hl.transition = null;
  try {
    _e = 4, yp(t, e, n, r);
  } finally {
    _e = i, hl.transition = o;
  }
}
function yp(t, e, n, r) {
  if (Ku) {
    var i = Fd(t, e, n, r);
    if (i === null)
      jf(t, e, r, Zu, n), fg(t, r);
    else if (F2(i, t, e, n, r))
      r.stopPropagation();
    else if (fg(t, r), e & 4 && -1 < L2.indexOf(t)) {
      for (; i !== null; ) {
        var o = Ta(i);
        if (o !== null && Pv(o), o = Fd(t, e, n, r), o === null && jf(t, e, r, Zu, n), o === i)
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else
      jf(t, e, r, null, n);
  }
}
var Zu = null;
function Fd(t, e, n, r) {
  if (Zu = null, t = pp(r), t = lo(t), t !== null)
    if (e = Io(t), e === null)
      t = null;
    else if (n = e.tag, n === 13) {
      if (t = xv(e), t !== null)
        return t;
      t = null;
    } else if (n === 3) {
      if (e.stateNode.current.memoizedState.isDehydrated)
        return e.tag === 3 ? e.stateNode.containerInfo : null;
      t = null;
    } else
      e !== t && (t = null);
  return Zu = t, null;
}
function Av(t) {
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
      switch (R2()) {
        case gp:
          return 1;
        case Cv:
          return 4;
        case Qu:
        case M2:
          return 16;
        case Ev:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ui = null, _p = null, Eu = null;
function Iv() {
  if (Eu)
    return Eu;
  var t, e = _p, n = e.length, r, i = "value" in ui ? ui.value : ui.textContent, o = i.length;
  for (t = 0; t < n && e[t] === i[t]; t++)
    ;
  var l = n - t;
  for (r = 1; r <= l && e[n - r] === i[o - r]; r++)
    ;
  return Eu = i.slice(t, 1 < r ? 1 - r : void 0);
}
function bu(t) {
  var e = t.keyCode;
  return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
}
function Wa() {
  return !0;
}
function hg() {
  return !1;
}
function En(t) {
  function e(n, r, i, o, l) {
    this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = l, this.currentTarget = null;
    for (var s in t)
      t.hasOwnProperty(s) && (n = t[s], this[s] = n ? n(o) : o[s]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Wa : hg, this.isPropagationStopped = hg, this;
  }
  return $e(e.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Wa);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Wa);
  }, persist: function() {
  }, isPersistent: Wa }), e;
}
var Fl = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(t) {
  return t.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, xp = En(Fl), ba = $e({}, Fl, { view: 0, detail: 0 }), W2 = En(ba), Of, Rf, Kl, Lc = $e({}, ba, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: wp, button: 0, buttons: 0, relatedTarget: function(t) {
  return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
}, movementX: function(t) {
  return "movementX" in t ? t.movementX : (t !== Kl && (Kl && t.type === "mousemove" ? (Of = t.screenX - Kl.screenX, Rf = t.screenY - Kl.screenY) : Rf = Of = 0, Kl = t), Of);
}, movementY: function(t) {
  return "movementY" in t ? t.movementY : Rf;
} }), pg = En(Lc), H2 = $e({}, Lc, { dataTransfer: 0 }), Y2 = En(H2), X2 = $e({}, ba, { relatedTarget: 0 }), Mf = En(X2), G2 = $e({}, Fl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Q2 = En(G2), q2 = $e({}, Fl, { clipboardData: function(t) {
  return "clipboardData" in t ? t.clipboardData : window.clipboardData;
} }), K2 = En(q2), Z2 = $e({}, Fl, { data: 0 }), gg = En(Z2), J2 = {
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
}, ek = {
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
}, tk = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function nk(t) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(t) : (t = tk[t]) ? !!e[t] : !1;
}
function wp() {
  return nk;
}
var rk = $e({}, ba, { key: function(t) {
  if (t.key) {
    var e = J2[t.key] || t.key;
    if (e !== "Unidentified")
      return e;
  }
  return t.type === "keypress" ? (t = bu(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? ek[t.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: wp, charCode: function(t) {
  return t.type === "keypress" ? bu(t) : 0;
}, keyCode: function(t) {
  return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
}, which: function(t) {
  return t.type === "keypress" ? bu(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
} }), ik = En(rk), ok = $e({}, Lc, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), mg = En(ok), lk = $e({}, ba, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: wp }), sk = En(lk), ak = $e({}, Fl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), uk = En(ak), ck = $e({}, Lc, {
  deltaX: function(t) {
    return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
  },
  deltaY: function(t) {
    return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), fk = En(ck), dk = [9, 13, 27, 32], kp = Hr && "CompositionEvent" in window, ws = null;
Hr && "documentMode" in document && (ws = document.documentMode);
var hk = Hr && "TextEvent" in window && !ws, zv = Hr && (!kp || ws && 8 < ws && 11 >= ws), vg = String.fromCharCode(32), yg = !1;
function $v(t, e) {
  switch (t) {
    case "keyup":
      return dk.indexOf(e.keyCode) !== -1;
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
function Dv(t) {
  return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
}
var Qo = !1;
function pk(t, e) {
  switch (t) {
    case "compositionend":
      return Dv(e);
    case "keypress":
      return e.which !== 32 ? null : (yg = !0, vg);
    case "textInput":
      return t = e.data, t === vg && yg ? null : t;
    default:
      return null;
  }
}
function gk(t, e) {
  if (Qo)
    return t === "compositionend" || !kp && $v(t, e) ? (t = Iv(), Eu = _p = ui = null, Qo = !1, t) : null;
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
      return zv && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var mk = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function _g(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e === "input" ? !!mk[t.type] : e === "textarea";
}
function jv(t, e, n, r) {
  gv(r), e = Ju(e, "onChange"), 0 < e.length && (n = new xp("onChange", "change", null, n, r), t.push({ event: n, listeners: e }));
}
var ks = null, qs = null;
function vk(t) {
  Qv(t, 0);
}
function Fc(t) {
  var e = Zo(t);
  if (av(e))
    return t;
}
function yk(t, e) {
  if (t === "change")
    return e;
}
var Lv = !1;
if (Hr) {
  var Nf;
  if (Hr) {
    var Af = "oninput" in document;
    if (!Af) {
      var xg = document.createElement("div");
      xg.setAttribute("oninput", "return;"), Af = typeof xg.oninput == "function";
    }
    Nf = Af;
  } else
    Nf = !1;
  Lv = Nf && (!document.documentMode || 9 < document.documentMode);
}
function wg() {
  ks && (ks.detachEvent("onpropertychange", Fv), qs = ks = null);
}
function Fv(t) {
  if (t.propertyName === "value" && Fc(qs)) {
    var e = [];
    jv(e, qs, t, pp(t)), _v(vk, e);
  }
}
function _k(t, e, n) {
  t === "focusin" ? (wg(), ks = e, qs = n, ks.attachEvent("onpropertychange", Fv)) : t === "focusout" && wg();
}
function xk(t) {
  if (t === "selectionchange" || t === "keyup" || t === "keydown")
    return Fc(qs);
}
function wk(t, e) {
  if (t === "click")
    return Fc(e);
}
function kk(t, e) {
  if (t === "input" || t === "change")
    return Fc(e);
}
function Sk(t, e) {
  return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
}
var ar = typeof Object.is == "function" ? Object.is : Sk;
function Ks(t, e) {
  if (ar(t, e))
    return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null)
    return !1;
  var n = Object.keys(t), r = Object.keys(e);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!kd.call(e, i) || !ar(t[i], e[i]))
      return !1;
  }
  return !0;
}
function kg(t) {
  for (; t && t.firstChild; )
    t = t.firstChild;
  return t;
}
function Sg(t, e) {
  var n = kg(t);
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
    n = kg(n);
  }
}
function Bv(t, e) {
  return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Bv(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
}
function Uv() {
  for (var t = window, e = Yu(); e instanceof t.HTMLIFrameElement; ) {
    try {
      var n = typeof e.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      t = e.contentWindow;
    else
      break;
    e = Yu(t.document);
  }
  return e;
}
function Sp(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
}
function Ck(t) {
  var e = Uv(), n = t.focusedElem, r = t.selectionRange;
  if (e !== n && n && n.ownerDocument && Bv(n.ownerDocument.documentElement, n)) {
    if (r !== null && Sp(n)) {
      if (e = r.start, t = r.end, t === void 0 && (t = e), "selectionStart" in n)
        n.selectionStart = e, n.selectionEnd = Math.min(t, n.value.length);
      else if (t = (e = n.ownerDocument || document) && e.defaultView || window, t.getSelection) {
        t = t.getSelection();
        var i = n.textContent.length, o = Math.min(r.start, i);
        r = r.end === void 0 ? o : Math.min(r.end, i), !t.extend && o > r && (i = r, r = o, o = i), i = Sg(n, o);
        var l = Sg(
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
var Ek = Hr && "documentMode" in document && 11 >= document.documentMode, qo = null, Bd = null, Ss = null, Ud = !1;
function Cg(t, e, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ud || qo == null || qo !== Yu(r) || (r = qo, "selectionStart" in r && Sp(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Ss && Ks(Ss, r) || (Ss = r, r = Ju(Bd, "onSelect"), 0 < r.length && (e = new xp("onSelect", "select", null, e, n), t.push({ event: e, listeners: r }), e.target = qo)));
}
function Ha(t, e) {
  var n = {};
  return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n;
}
var Ko = { animationend: Ha("Animation", "AnimationEnd"), animationiteration: Ha("Animation", "AnimationIteration"), animationstart: Ha("Animation", "AnimationStart"), transitionend: Ha("Transition", "TransitionEnd") }, If = {}, Vv = {};
Hr && (Vv = document.createElement("div").style, "AnimationEvent" in window || (delete Ko.animationend.animation, delete Ko.animationiteration.animation, delete Ko.animationstart.animation), "TransitionEvent" in window || delete Ko.transitionend.transition);
function Bc(t) {
  if (If[t])
    return If[t];
  if (!Ko[t])
    return t;
  var e = Ko[t], n;
  for (n in e)
    if (e.hasOwnProperty(n) && n in Vv)
      return If[t] = e[n];
  return t;
}
var Wv = Bc("animationend"), Hv = Bc("animationiteration"), Yv = Bc("animationstart"), Xv = Bc("transitionend"), Gv = /* @__PURE__ */ new Map(), Eg = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Di(t, e) {
  Gv.set(t, e), Ao(e, [t]);
}
for (var zf = 0; zf < Eg.length; zf++) {
  var $f = Eg[zf], bk = $f.toLowerCase(), Tk = $f[0].toUpperCase() + $f.slice(1);
  Di(bk, "on" + Tk);
}
Di(Wv, "onAnimationEnd");
Di(Hv, "onAnimationIteration");
Di(Yv, "onAnimationStart");
Di("dblclick", "onDoubleClick");
Di("focusin", "onFocus");
Di("focusout", "onBlur");
Di(Xv, "onTransitionEnd");
El("onMouseEnter", ["mouseout", "mouseover"]);
El("onMouseLeave", ["mouseout", "mouseover"]);
El("onPointerEnter", ["pointerout", "pointerover"]);
El("onPointerLeave", ["pointerout", "pointerover"]);
Ao("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Ao("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Ao("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ao("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Ao("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Ao("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var cs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Pk = new Set("cancel close invalid load scroll toggle".split(" ").concat(cs));
function bg(t, e, n) {
  var r = t.type || "unknown-event";
  t.currentTarget = n, b2(r, e, void 0, t), t.currentTarget = null;
}
function Qv(t, e) {
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
          bg(i, s, u), o = a;
        }
      else
        for (l = 0; l < r.length; l++) {
          if (s = r[l], a = s.instance, u = s.currentTarget, s = s.listener, a !== o && i.isPropagationStopped())
            break e;
          bg(i, s, u), o = a;
        }
    }
  }
  if (Gu)
    throw t = Dd, Gu = !1, Dd = null, t;
}
function Ce(t, e) {
  var n = e[Xd];
  n === void 0 && (n = e[Xd] = /* @__PURE__ */ new Set());
  var r = t + "__bubble";
  n.has(r) || (qv(e, t, 2, !1), n.add(r));
}
function Df(t, e, n) {
  var r = 0;
  e && (r |= 4), qv(n, t, r, e);
}
var Ya = "_reactListening" + Math.random().toString(36).slice(2);
function Zs(t) {
  if (!t[Ya]) {
    t[Ya] = !0, rv.forEach(function(n) {
      n !== "selectionchange" && (Pk.has(n) || Df(n, !1, t), Df(n, !0, t));
    });
    var e = t.nodeType === 9 ? t : t.ownerDocument;
    e === null || e[Ya] || (e[Ya] = !0, Df("selectionchange", !1, e));
  }
}
function qv(t, e, n, r) {
  switch (Av(e)) {
    case 1:
      var i = U2;
      break;
    case 4:
      i = V2;
      break;
    default:
      i = yp;
  }
  n = i.bind(null, e, n, t), i = void 0, !$d || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (i = !0), r ? i !== void 0 ? t.addEventListener(e, n, { capture: !0, passive: i }) : t.addEventListener(e, n, !0) : i !== void 0 ? t.addEventListener(e, n, { passive: i }) : t.addEventListener(e, n, !1);
}
function jf(t, e, n, r, i) {
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
            if (l = lo(s), l === null)
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
  _v(function() {
    var u = o, c = pp(n), f = [];
    e: {
      var h = Gv.get(t);
      if (h !== void 0) {
        var d = xp, g = t;
        switch (t) {
          case "keypress":
            if (bu(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            d = ik;
            break;
          case "focusin":
            g = "focus", d = Mf;
            break;
          case "focusout":
            g = "blur", d = Mf;
            break;
          case "beforeblur":
          case "afterblur":
            d = Mf;
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
            d = pg;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            d = Y2;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            d = sk;
            break;
          case Wv:
          case Hv:
          case Yv:
            d = Q2;
            break;
          case Xv:
            d = uk;
            break;
          case "scroll":
            d = W2;
            break;
          case "wheel":
            d = fk;
            break;
          case "copy":
          case "cut":
          case "paste":
            d = K2;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            d = mg;
        }
        var p = (e & 4) !== 0, y = !p && t === "scroll", v = p ? h !== null ? h + "Capture" : null : h;
        p = [];
        for (var m = u, _; m !== null; ) {
          _ = m;
          var x = _.stateNode;
          if (_.tag === 5 && x !== null && (_ = x, v !== null && (x = Ys(m, v), x != null && p.push(Js(m, x, _)))), y)
            break;
          m = m.return;
        }
        0 < p.length && (h = new d(h, g, null, n, c), f.push({ event: h, listeners: p }));
      }
    }
    if (!(e & 7)) {
      e: {
        if (h = t === "mouseover" || t === "pointerover", d = t === "mouseout" || t === "pointerout", h && n !== Id && (g = n.relatedTarget || n.fromElement) && (lo(g) || g[Yr]))
          break e;
        if ((d || h) && (h = c.window === c ? c : (h = c.ownerDocument) ? h.defaultView || h.parentWindow : window, d ? (g = n.relatedTarget || n.toElement, d = u, g = g ? lo(g) : null, g !== null && (y = Io(g), g !== y || g.tag !== 5 && g.tag !== 6) && (g = null)) : (d = null, g = u), d !== g)) {
          if (p = pg, x = "onMouseLeave", v = "onMouseEnter", m = "mouse", (t === "pointerout" || t === "pointerover") && (p = mg, x = "onPointerLeave", v = "onPointerEnter", m = "pointer"), y = d == null ? h : Zo(d), _ = g == null ? h : Zo(g), h = new p(x, m + "leave", d, n, c), h.target = y, h.relatedTarget = _, x = null, lo(c) === u && (p = new p(v, m + "enter", g, n, c), p.target = _, p.relatedTarget = y, x = p), y = x, d && g)
            t: {
              for (p = d, v = g, m = 0, _ = p; _; _ = Fo(_))
                m++;
              for (_ = 0, x = v; x; x = Fo(x))
                _++;
              for (; 0 < m - _; )
                p = Fo(p), m--;
              for (; 0 < _ - m; )
                v = Fo(v), _--;
              for (; m--; ) {
                if (p === v || v !== null && p === v.alternate)
                  break t;
                p = Fo(p), v = Fo(v);
              }
              p = null;
            }
          else
            p = null;
          d !== null && Tg(f, h, d, p, !1), g !== null && y !== null && Tg(f, y, g, p, !0);
        }
      }
      e: {
        if (h = u ? Zo(u) : window, d = h.nodeName && h.nodeName.toLowerCase(), d === "select" || d === "input" && h.type === "file")
          var C = yk;
        else if (_g(h))
          if (Lv)
            C = kk;
          else {
            C = xk;
            var b = _k;
          }
        else
          (d = h.nodeName) && d.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (C = wk);
        if (C && (C = C(t, u))) {
          jv(f, C, n, c);
          break e;
        }
        b && b(t, h, u), t === "focusout" && (b = h._wrapperState) && b.controlled && h.type === "number" && Od(h, "number", h.value);
      }
      switch (b = u ? Zo(u) : window, t) {
        case "focusin":
          (_g(b) || b.contentEditable === "true") && (qo = b, Bd = u, Ss = null);
          break;
        case "focusout":
          Ss = Bd = qo = null;
          break;
        case "mousedown":
          Ud = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ud = !1, Cg(f, n, c);
          break;
        case "selectionchange":
          if (Ek)
            break;
        case "keydown":
        case "keyup":
          Cg(f, n, c);
      }
      var E;
      if (kp)
        e: {
          switch (t) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        Qo ? $v(t, n) && (T = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (zv && n.locale !== "ko" && (Qo || T !== "onCompositionStart" ? T === "onCompositionEnd" && Qo && (E = Iv()) : (ui = c, _p = "value" in ui ? ui.value : ui.textContent, Qo = !0)), b = Ju(u, T), 0 < b.length && (T = new gg(T, t, null, n, c), f.push({ event: T, listeners: b }), E ? T.data = E : (E = Dv(n), E !== null && (T.data = E)))), (E = hk ? pk(t, n) : gk(t, n)) && (u = Ju(u, "onBeforeInput"), 0 < u.length && (c = new gg("onBeforeInput", "beforeinput", null, n, c), f.push({ event: c, listeners: u }), c.data = E));
    }
    Qv(f, e);
  });
}
function Js(t, e, n) {
  return { instance: t, listener: e, currentTarget: n };
}
function Ju(t, e) {
  for (var n = e + "Capture", r = []; t !== null; ) {
    var i = t, o = i.stateNode;
    i.tag === 5 && o !== null && (i = o, o = Ys(t, n), o != null && r.unshift(Js(t, o, i)), o = Ys(t, e), o != null && r.push(Js(t, o, i))), t = t.return;
  }
  return r;
}
function Fo(t) {
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
    s.tag === 5 && u !== null && (s = u, i ? (a = Ys(n, o), a != null && l.unshift(Js(n, a, s))) : i || (a = Ys(n, o), a != null && l.push(Js(n, a, s)))), n = n.return;
  }
  l.length !== 0 && t.push({ event: e, listeners: l });
}
var Ok = /\r\n?/g, Rk = /\u0000|\uFFFD/g;
function Pg(t) {
  return (typeof t == "string" ? t : "" + t).replace(Ok, `
`).replace(Rk, "");
}
function Xa(t, e, n) {
  if (e = Pg(e), Pg(t) !== e && n)
    throw Error(A(425));
}
function ec() {
}
var Vd = null, Wd = null;
function Hd(t, e) {
  return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
}
var Yd = typeof setTimeout == "function" ? setTimeout : void 0, Mk = typeof clearTimeout == "function" ? clearTimeout : void 0, Og = typeof Promise == "function" ? Promise : void 0, Nk = typeof queueMicrotask == "function" ? queueMicrotask : typeof Og < "u" ? function(t) {
  return Og.resolve(null).then(t).catch(Ak);
} : Yd;
function Ak(t) {
  setTimeout(function() {
    throw t;
  });
}
function Lf(t, e) {
  var n = e, r = 0;
  do {
    var i = n.nextSibling;
    if (t.removeChild(n), i && i.nodeType === 8)
      if (n = i.data, n === "/$") {
        if (r === 0) {
          t.removeChild(i), Qs(e);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = i;
  } while (n);
  Qs(e);
}
function ki(t) {
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
function Rg(t) {
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
var Bl = Math.random().toString(36).slice(2), _r = "__reactFiber$" + Bl, ea = "__reactProps$" + Bl, Yr = "__reactContainer$" + Bl, Xd = "__reactEvents$" + Bl, Ik = "__reactListeners$" + Bl, zk = "__reactHandles$" + Bl;
function lo(t) {
  var e = t[_r];
  if (e)
    return e;
  for (var n = t.parentNode; n; ) {
    if (e = n[Yr] || n[_r]) {
      if (n = e.alternate, e.child !== null || n !== null && n.child !== null)
        for (t = Rg(t); t !== null; ) {
          if (n = t[_r])
            return n;
          t = Rg(t);
        }
      return e;
    }
    t = n, n = t.parentNode;
  }
  return null;
}
function Ta(t) {
  return t = t[_r] || t[Yr], !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t;
}
function Zo(t) {
  if (t.tag === 5 || t.tag === 6)
    return t.stateNode;
  throw Error(A(33));
}
function Uc(t) {
  return t[ea] || null;
}
var Gd = [], Jo = -1;
function ji(t) {
  return { current: t };
}
function be(t) {
  0 > Jo || (t.current = Gd[Jo], Gd[Jo] = null, Jo--);
}
function Se(t, e) {
  Jo++, Gd[Jo] = t.current, t.current = e;
}
var Ni = {}, Pt = ji(Ni), Zt = ji(!1), ko = Ni;
function bl(t, e) {
  var n = t.type.contextTypes;
  if (!n)
    return Ni;
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
function tc() {
  be(Zt), be(Pt);
}
function Mg(t, e, n) {
  if (Pt.current !== Ni)
    throw Error(A(168));
  Se(Pt, e), Se(Zt, n);
}
function Kv(t, e, n) {
  var r = t.stateNode;
  if (e = e.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var i in r)
    if (!(i in e))
      throw Error(A(108, _2(t) || "Unknown", i));
  return $e({}, n, r);
}
function nc(t) {
  return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || Ni, ko = Pt.current, Se(Pt, t), Se(Zt, Zt.current), !0;
}
function Ng(t, e, n) {
  var r = t.stateNode;
  if (!r)
    throw Error(A(169));
  n ? (t = Kv(t, e, ko), r.__reactInternalMemoizedMergedChildContext = t, be(Zt), be(Pt), Se(Pt, t)) : be(Zt), Se(Zt, n);
}
var $r = null, Vc = !1, Ff = !1;
function Zv(t) {
  $r === null ? $r = [t] : $r.push(t);
}
function $k(t) {
  Vc = !0, Zv(t);
}
function Li() {
  if (!Ff && $r !== null) {
    Ff = !0;
    var t = 0, e = _e;
    try {
      var n = $r;
      for (_e = 1; t < n.length; t++) {
        var r = n[t];
        do
          r = r(!0);
        while (r !== null);
      }
      $r = null, Vc = !1;
    } catch (i) {
      throw $r !== null && ($r = $r.slice(t + 1)), Sv(gp, Li), i;
    } finally {
      _e = e, Ff = !1;
    }
  }
  return null;
}
var el = [], tl = 0, rc = null, ic = 0, On = [], Rn = 0, So = null, Lr = 1, Fr = "";
function eo(t, e) {
  el[tl++] = ic, el[tl++] = rc, rc = t, ic = e;
}
function Jv(t, e, n) {
  On[Rn++] = Lr, On[Rn++] = Fr, On[Rn++] = So, So = t;
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
function Cp(t) {
  t.return !== null && (eo(t, 1), Jv(t, 1, 0));
}
function Ep(t) {
  for (; t === rc; )
    rc = el[--tl], el[tl] = null, ic = el[--tl], el[tl] = null;
  for (; t === So; )
    So = On[--Rn], On[Rn] = null, Fr = On[--Rn], On[Rn] = null, Lr = On[--Rn], On[Rn] = null;
}
var xn = null, _n = null, Pe = !1, tr = null;
function ey(t, e) {
  var n = zn(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = e, n.return = t, e = t.deletions, e === null ? (t.deletions = [n], t.flags |= 16) : e.push(n);
}
function Ag(t, e) {
  switch (t.tag) {
    case 5:
      var n = t.type;
      return e = e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase() ? null : e, e !== null ? (t.stateNode = e, xn = t, _n = ki(e.firstChild), !0) : !1;
    case 6:
      return e = t.pendingProps === "" || e.nodeType !== 3 ? null : e, e !== null ? (t.stateNode = e, xn = t, _n = null, !0) : !1;
    case 13:
      return e = e.nodeType !== 8 ? null : e, e !== null ? (n = So !== null ? { id: Lr, overflow: Fr } : null, t.memoizedState = { dehydrated: e, treeContext: n, retryLane: 1073741824 }, n = zn(18, null, null, 0), n.stateNode = e, n.return = t, t.child = n, xn = t, _n = null, !0) : !1;
    default:
      return !1;
  }
}
function Qd(t) {
  return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function qd(t) {
  if (Pe) {
    var e = _n;
    if (e) {
      var n = e;
      if (!Ag(t, e)) {
        if (Qd(t))
          throw Error(A(418));
        e = ki(n.nextSibling);
        var r = xn;
        e && Ag(t, e) ? ey(r, n) : (t.flags = t.flags & -4097 | 2, Pe = !1, xn = t);
      }
    } else {
      if (Qd(t))
        throw Error(A(418));
      t.flags = t.flags & -4097 | 2, Pe = !1, xn = t;
    }
  }
}
function Ig(t) {
  for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
    t = t.return;
  xn = t;
}
function Ga(t) {
  if (t !== xn)
    return !1;
  if (!Pe)
    return Ig(t), Pe = !0, !1;
  var e;
  if ((e = t.tag !== 3) && !(e = t.tag !== 5) && (e = t.type, e = e !== "head" && e !== "body" && !Hd(t.type, t.memoizedProps)), e && (e = _n)) {
    if (Qd(t))
      throw ty(), Error(A(418));
    for (; e; )
      ey(t, e), e = ki(e.nextSibling);
  }
  if (Ig(t), t.tag === 13) {
    if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t)
      throw Error(A(317));
    e: {
      for (t = t.nextSibling, e = 0; t; ) {
        if (t.nodeType === 8) {
          var n = t.data;
          if (n === "/$") {
            if (e === 0) {
              _n = ki(t.nextSibling);
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
    _n = xn ? ki(t.stateNode.nextSibling) : null;
  return !0;
}
function ty() {
  for (var t = _n; t; )
    t = ki(t.nextSibling);
}
function Tl() {
  _n = xn = null, Pe = !1;
}
function bp(t) {
  tr === null ? tr = [t] : tr.push(t);
}
var Dk = Kr.ReactCurrentBatchConfig;
function Jn(t, e) {
  if (t && t.defaultProps) {
    e = $e({}, e), t = t.defaultProps;
    for (var n in t)
      e[n] === void 0 && (e[n] = t[n]);
    return e;
  }
  return e;
}
var oc = ji(null), lc = null, nl = null, Tp = null;
function Pp() {
  Tp = nl = lc = null;
}
function Op(t) {
  var e = oc.current;
  be(oc), t._currentValue = e;
}
function Kd(t, e, n) {
  for (; t !== null; ) {
    var r = t.alternate;
    if ((t.childLanes & e) !== e ? (t.childLanes |= e, r !== null && (r.childLanes |= e)) : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e), t === n)
      break;
    t = t.return;
  }
}
function pl(t, e) {
  lc = t, Tp = nl = null, t = t.dependencies, t !== null && t.firstContext !== null && (t.lanes & e && (Kt = !0), t.firstContext = null);
}
function Bn(t) {
  var e = t._currentValue;
  if (Tp !== t)
    if (t = { context: t, memoizedValue: e, next: null }, nl === null) {
      if (lc === null)
        throw Error(A(308));
      nl = t, lc.dependencies = { lanes: 0, firstContext: t };
    } else
      nl = nl.next = t;
  return e;
}
var so = null;
function Rp(t) {
  so === null ? so = [t] : so.push(t);
}
function ny(t, e, n, r) {
  var i = e.interleaved;
  return i === null ? (n.next = n, Rp(e)) : (n.next = i.next, i.next = n), e.interleaved = n, Xr(t, r);
}
function Xr(t, e) {
  t.lanes |= e;
  var n = t.alternate;
  for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null; )
    t.childLanes |= e, n = t.alternate, n !== null && (n.childLanes |= e), n = t, t = t.return;
  return n.tag === 3 ? n.stateNode : null;
}
var li = !1;
function Mp(t) {
  t.updateQueue = { baseState: t.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function ry(t, e) {
  t = t.updateQueue, e.updateQueue === t && (e.updateQueue = { baseState: t.baseState, firstBaseUpdate: t.firstBaseUpdate, lastBaseUpdate: t.lastBaseUpdate, shared: t.shared, effects: t.effects });
}
function Vr(t, e) {
  return { eventTime: t, lane: e, tag: 0, payload: null, callback: null, next: null };
}
function Si(t, e, n) {
  var r = t.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, ge & 2) {
    var i = r.pending;
    return i === null ? e.next = e : (e.next = i.next, i.next = e), r.pending = e, Xr(t, n);
  }
  return i = r.interleaved, i === null ? (e.next = e, Rp(r)) : (e.next = i.next, i.next = e), r.interleaved = e, Xr(t, n);
}
function Tu(t, e, n) {
  if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194240) !== 0)) {
    var r = e.lanes;
    r &= t.pendingLanes, n |= r, e.lanes = n, mp(t, n);
  }
}
function zg(t, e) {
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
function sc(t, e, n, r) {
  var i = t.updateQueue;
  li = !1;
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
              f = $e({}, f, h);
              break e;
            case 2:
              li = !0;
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
    Eo |= l, t.lanes = l, t.memoizedState = f;
  }
}
function $g(t, e, n) {
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
var iy = new nv.Component().refs;
function Zd(t, e, n, r) {
  e = t.memoizedState, n = n(r, e), n = n == null ? e : $e({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
}
var Wc = { isMounted: function(t) {
  return (t = t._reactInternals) ? Io(t) === t : !1;
}, enqueueSetState: function(t, e, n) {
  t = t._reactInternals;
  var r = Lt(), i = Ei(t), o = Vr(r, i);
  o.payload = e, n != null && (o.callback = n), e = Si(t, o, i), e !== null && (lr(e, t, i, r), Tu(e, t, i));
}, enqueueReplaceState: function(t, e, n) {
  t = t._reactInternals;
  var r = Lt(), i = Ei(t), o = Vr(r, i);
  o.tag = 1, o.payload = e, n != null && (o.callback = n), e = Si(t, o, i), e !== null && (lr(e, t, i, r), Tu(e, t, i));
}, enqueueForceUpdate: function(t, e) {
  t = t._reactInternals;
  var n = Lt(), r = Ei(t), i = Vr(n, r);
  i.tag = 2, e != null && (i.callback = e), e = Si(t, i, r), e !== null && (lr(e, t, r, n), Tu(e, t, r));
} };
function Dg(t, e, n, r, i, o, l) {
  return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(r, o, l) : e.prototype && e.prototype.isPureReactComponent ? !Ks(n, r) || !Ks(i, o) : !0;
}
function oy(t, e, n) {
  var r = !1, i = Ni, o = e.contextType;
  return typeof o == "object" && o !== null ? o = Bn(o) : (i = Jt(e) ? ko : Pt.current, r = e.contextTypes, o = (r = r != null) ? bl(t, i) : Ni), e = new e(n, o), t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null, e.updater = Wc, t.stateNode = e, e._reactInternals = t, r && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = i, t.__reactInternalMemoizedMaskedChildContext = o), e;
}
function jg(t, e, n, r) {
  t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, r), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, r), e.state !== t && Wc.enqueueReplaceState(e, e.state, null);
}
function Jd(t, e, n, r) {
  var i = t.stateNode;
  i.props = n, i.state = t.memoizedState, i.refs = iy, Mp(t);
  var o = e.contextType;
  typeof o == "object" && o !== null ? i.context = Bn(o) : (o = Jt(e) ? ko : Pt.current, i.context = bl(t, o)), i.state = t.memoizedState, o = e.getDerivedStateFromProps, typeof o == "function" && (Zd(t, e, o, n), i.state = t.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (e = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), e !== i.state && Wc.enqueueReplaceState(i, i.state, null), sc(t, n, i, r), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308);
}
function Zl(t, e, n) {
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
        s === iy && (s = i.refs = {}), l === null ? delete s[o] : s[o] = l;
      }, e._stringRef = o, e);
    }
    if (typeof t != "string")
      throw Error(A(284));
    if (!n._owner)
      throw Error(A(290, t));
  }
  return t;
}
function Qa(t, e) {
  throw t = Object.prototype.toString.call(e), Error(A(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t));
}
function Lg(t) {
  var e = t._init;
  return e(t._payload);
}
function ly(t) {
  function e(v, m) {
    if (t) {
      var _ = v.deletions;
      _ === null ? (v.deletions = [m], v.flags |= 16) : _.push(m);
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
    return v = bi(v, m), v.index = 0, v.sibling = null, v;
  }
  function o(v, m, _) {
    return v.index = _, t ? (_ = v.alternate, _ !== null ? (_ = _.index, _ < m ? (v.flags |= 2, m) : _) : (v.flags |= 2, m)) : (v.flags |= 1048576, m);
  }
  function l(v) {
    return t && v.alternate === null && (v.flags |= 2), v;
  }
  function s(v, m, _, x) {
    return m === null || m.tag !== 6 ? (m = Xf(_, v.mode, x), m.return = v, m) : (m = i(m, _), m.return = v, m);
  }
  function a(v, m, _, x) {
    var C = _.type;
    return C === Go ? c(v, m, _.props.children, x, _.key) : m !== null && (m.elementType === C || typeof C == "object" && C !== null && C.$$typeof === oi && Lg(C) === m.type) ? (x = i(m, _.props), x.ref = Zl(v, m, _), x.return = v, x) : (x = Au(_.type, _.key, _.props, null, v.mode, x), x.ref = Zl(v, m, _), x.return = v, x);
  }
  function u(v, m, _, x) {
    return m === null || m.tag !== 4 || m.stateNode.containerInfo !== _.containerInfo || m.stateNode.implementation !== _.implementation ? (m = Gf(_, v.mode, x), m.return = v, m) : (m = i(m, _.children || []), m.return = v, m);
  }
  function c(v, m, _, x, C) {
    return m === null || m.tag !== 7 ? (m = po(_, v.mode, x, C), m.return = v, m) : (m = i(m, _), m.return = v, m);
  }
  function f(v, m, _) {
    if (typeof m == "string" && m !== "" || typeof m == "number")
      return m = Xf("" + m, v.mode, _), m.return = v, m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case ja:
          return _ = Au(m.type, m.key, m.props, null, v.mode, _), _.ref = Zl(v, null, m), _.return = v, _;
        case Xo:
          return m = Gf(m, v.mode, _), m.return = v, m;
        case oi:
          var x = m._init;
          return f(v, x(m._payload), _);
      }
      if (as(m) || Xl(m))
        return m = po(m, v.mode, _, null), m.return = v, m;
      Qa(v, m);
    }
    return null;
  }
  function h(v, m, _, x) {
    var C = m !== null ? m.key : null;
    if (typeof _ == "string" && _ !== "" || typeof _ == "number")
      return C !== null ? null : s(v, m, "" + _, x);
    if (typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case ja:
          return _.key === C ? a(v, m, _, x) : null;
        case Xo:
          return _.key === C ? u(v, m, _, x) : null;
        case oi:
          return C = _._init, h(
            v,
            m,
            C(_._payload),
            x
          );
      }
      if (as(_) || Xl(_))
        return C !== null ? null : c(v, m, _, x, null);
      Qa(v, _);
    }
    return null;
  }
  function d(v, m, _, x, C) {
    if (typeof x == "string" && x !== "" || typeof x == "number")
      return v = v.get(_) || null, s(m, v, "" + x, C);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case ja:
          return v = v.get(x.key === null ? _ : x.key) || null, a(m, v, x, C);
        case Xo:
          return v = v.get(x.key === null ? _ : x.key) || null, u(m, v, x, C);
        case oi:
          var b = x._init;
          return d(v, m, _, b(x._payload), C);
      }
      if (as(x) || Xl(x))
        return v = v.get(_) || null, c(m, v, x, C, null);
      Qa(m, x);
    }
    return null;
  }
  function g(v, m, _, x) {
    for (var C = null, b = null, E = m, T = m = 0, O = null; E !== null && T < _.length; T++) {
      E.index > T ? (O = E, E = null) : O = E.sibling;
      var P = h(v, E, _[T], x);
      if (P === null) {
        E === null && (E = O);
        break;
      }
      t && E && P.alternate === null && e(v, E), m = o(P, m, T), b === null ? C = P : b.sibling = P, b = P, E = O;
    }
    if (T === _.length)
      return n(v, E), Pe && eo(v, T), C;
    if (E === null) {
      for (; T < _.length; T++)
        E = f(v, _[T], x), E !== null && (m = o(E, m, T), b === null ? C = E : b.sibling = E, b = E);
      return Pe && eo(v, T), C;
    }
    for (E = r(v, E); T < _.length; T++)
      O = d(E, v, T, _[T], x), O !== null && (t && O.alternate !== null && E.delete(O.key === null ? T : O.key), m = o(O, m, T), b === null ? C = O : b.sibling = O, b = O);
    return t && E.forEach(function(j) {
      return e(v, j);
    }), Pe && eo(v, T), C;
  }
  function p(v, m, _, x) {
    var C = Xl(_);
    if (typeof C != "function")
      throw Error(A(150));
    if (_ = C.call(_), _ == null)
      throw Error(A(151));
    for (var b = C = null, E = m, T = m = 0, O = null, P = _.next(); E !== null && !P.done; T++, P = _.next()) {
      E.index > T ? (O = E, E = null) : O = E.sibling;
      var j = h(v, E, P.value, x);
      if (j === null) {
        E === null && (E = O);
        break;
      }
      t && E && j.alternate === null && e(v, E), m = o(j, m, T), b === null ? C = j : b.sibling = j, b = j, E = O;
    }
    if (P.done)
      return n(
        v,
        E
      ), Pe && eo(v, T), C;
    if (E === null) {
      for (; !P.done; T++, P = _.next())
        P = f(v, P.value, x), P !== null && (m = o(P, m, T), b === null ? C = P : b.sibling = P, b = P);
      return Pe && eo(v, T), C;
    }
    for (E = r(v, E); !P.done; T++, P = _.next())
      P = d(E, v, T, P.value, x), P !== null && (t && P.alternate !== null && E.delete(P.key === null ? T : P.key), m = o(P, m, T), b === null ? C = P : b.sibling = P, b = P);
    return t && E.forEach(function(z) {
      return e(v, z);
    }), Pe && eo(v, T), C;
  }
  function y(v, m, _, x) {
    if (typeof _ == "object" && _ !== null && _.type === Go && _.key === null && (_ = _.props.children), typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case ja:
          e: {
            for (var C = _.key, b = m; b !== null; ) {
              if (b.key === C) {
                if (C = _.type, C === Go) {
                  if (b.tag === 7) {
                    n(v, b.sibling), m = i(b, _.props.children), m.return = v, v = m;
                    break e;
                  }
                } else if (b.elementType === C || typeof C == "object" && C !== null && C.$$typeof === oi && Lg(C) === b.type) {
                  n(v, b.sibling), m = i(b, _.props), m.ref = Zl(v, b, _), m.return = v, v = m;
                  break e;
                }
                n(v, b);
                break;
              } else
                e(v, b);
              b = b.sibling;
            }
            _.type === Go ? (m = po(_.props.children, v.mode, x, _.key), m.return = v, v = m) : (x = Au(_.type, _.key, _.props, null, v.mode, x), x.ref = Zl(v, m, _), x.return = v, v = x);
          }
          return l(v);
        case Xo:
          e: {
            for (b = _.key; m !== null; ) {
              if (m.key === b)
                if (m.tag === 4 && m.stateNode.containerInfo === _.containerInfo && m.stateNode.implementation === _.implementation) {
                  n(v, m.sibling), m = i(m, _.children || []), m.return = v, v = m;
                  break e;
                } else {
                  n(v, m);
                  break;
                }
              else
                e(v, m);
              m = m.sibling;
            }
            m = Gf(_, v.mode, x), m.return = v, v = m;
          }
          return l(v);
        case oi:
          return b = _._init, y(v, m, b(_._payload), x);
      }
      if (as(_))
        return g(v, m, _, x);
      if (Xl(_))
        return p(v, m, _, x);
      Qa(v, _);
    }
    return typeof _ == "string" && _ !== "" || typeof _ == "number" ? (_ = "" + _, m !== null && m.tag === 6 ? (n(v, m.sibling), m = i(m, _), m.return = v, v = m) : (n(v, m), m = Xf(_, v.mode, x), m.return = v, v = m), l(v)) : n(v, m);
  }
  return y;
}
var Pl = ly(!0), sy = ly(!1), Pa = {}, Cr = ji(Pa), ta = ji(Pa), na = ji(Pa);
function ao(t) {
  if (t === Pa)
    throw Error(A(174));
  return t;
}
function Np(t, e) {
  switch (Se(na, e), Se(ta, t), Se(Cr, Pa), t = e.nodeType, t) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : Md(null, "");
      break;
    default:
      t = t === 8 ? e.parentNode : e, e = t.namespaceURI || null, t = t.tagName, e = Md(e, t);
  }
  be(Cr), Se(Cr, e);
}
function Ol() {
  be(Cr), be(ta), be(na);
}
function ay(t) {
  ao(na.current);
  var e = ao(Cr.current), n = Md(e, t.type);
  e !== n && (Se(ta, t), Se(Cr, n));
}
function Ap(t) {
  ta.current === t && (be(Cr), be(ta));
}
var Ne = ji(0);
function ac(t) {
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
var Bf = [];
function Ip() {
  for (var t = 0; t < Bf.length; t++)
    Bf[t]._workInProgressVersionPrimary = null;
  Bf.length = 0;
}
var Pu = Kr.ReactCurrentDispatcher, Uf = Kr.ReactCurrentBatchConfig, Co = 0, ze = null, Je = null, lt = null, uc = !1, Cs = !1, ra = 0, jk = 0;
function wt() {
  throw Error(A(321));
}
function zp(t, e) {
  if (e === null)
    return !1;
  for (var n = 0; n < e.length && n < t.length; n++)
    if (!ar(t[n], e[n]))
      return !1;
  return !0;
}
function $p(t, e, n, r, i, o) {
  if (Co = o, ze = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, Pu.current = t === null || t.memoizedState === null ? Uk : Vk, t = n(r, i), Cs) {
    o = 0;
    do {
      if (Cs = !1, ra = 0, 25 <= o)
        throw Error(A(301));
      o += 1, lt = Je = null, e.updateQueue = null, Pu.current = Wk, t = n(r, i);
    } while (Cs);
  }
  if (Pu.current = cc, e = Je !== null && Je.next !== null, Co = 0, lt = Je = ze = null, uc = !1, e)
    throw Error(A(300));
  return t;
}
function Dp() {
  var t = ra !== 0;
  return ra = 0, t;
}
function mr() {
  var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return lt === null ? ze.memoizedState = lt = t : lt = lt.next = t, lt;
}
function Un() {
  if (Je === null) {
    var t = ze.alternate;
    t = t !== null ? t.memoizedState : null;
  } else
    t = Je.next;
  var e = lt === null ? ze.memoizedState : lt.next;
  if (e !== null)
    lt = e, Je = t;
  else {
    if (t === null)
      throw Error(A(310));
    Je = t, t = { memoizedState: Je.memoizedState, baseState: Je.baseState, baseQueue: Je.baseQueue, queue: Je.queue, next: null }, lt === null ? ze.memoizedState = lt = t : lt = lt.next = t;
  }
  return lt;
}
function ia(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function Vf(t) {
  var e = Un(), n = e.queue;
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
      if ((Co & c) === c)
        a !== null && (a = a.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : t(r, u.action);
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        a === null ? (s = a = f, l = r) : a = a.next = f, ze.lanes |= c, Eo |= c;
      }
      u = u.next;
    } while (u !== null && u !== o);
    a === null ? l = r : a.next = s, ar(r, e.memoizedState) || (Kt = !0), e.memoizedState = r, e.baseState = l, e.baseQueue = a, n.lastRenderedState = r;
  }
  if (t = n.interleaved, t !== null) {
    i = t;
    do
      o = i.lane, ze.lanes |= o, Eo |= o, i = i.next;
    while (i !== t);
  } else
    i === null && (n.lanes = 0);
  return [e.memoizedState, n.dispatch];
}
function Wf(t) {
  var e = Un(), n = e.queue;
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
function uy() {
}
function cy(t, e) {
  var n = ze, r = Un(), i = e(), o = !ar(r.memoizedState, i);
  if (o && (r.memoizedState = i, Kt = !0), r = r.queue, jp(hy.bind(null, n, r, t), [t]), r.getSnapshot !== e || o || lt !== null && lt.memoizedState.tag & 1) {
    if (n.flags |= 2048, oa(9, dy.bind(null, n, r, i, e), void 0, null), st === null)
      throw Error(A(349));
    Co & 30 || fy(n, e, i);
  }
  return i;
}
function fy(t, e, n) {
  t.flags |= 16384, t = { getSnapshot: e, value: n }, e = ze.updateQueue, e === null ? (e = { lastEffect: null, stores: null }, ze.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t));
}
function dy(t, e, n, r) {
  e.value = n, e.getSnapshot = r, py(e) && gy(t);
}
function hy(t, e, n) {
  return n(function() {
    py(e) && gy(t);
  });
}
function py(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var n = e();
    return !ar(t, n);
  } catch {
    return !0;
  }
}
function gy(t) {
  var e = Xr(t, 1);
  e !== null && lr(e, t, 1, -1);
}
function Fg(t) {
  var e = mr();
  return typeof t == "function" && (t = t()), e.memoizedState = e.baseState = t, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ia, lastRenderedState: t }, e.queue = t, t = t.dispatch = Bk.bind(null, ze, t), [e.memoizedState, t];
}
function oa(t, e, n, r) {
  return t = { tag: t, create: e, destroy: n, deps: r, next: null }, e = ze.updateQueue, e === null ? (e = { lastEffect: null, stores: null }, ze.updateQueue = e, e.lastEffect = t.next = t) : (n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (r = n.next, n.next = t, t.next = r, e.lastEffect = t)), t;
}
function my() {
  return Un().memoizedState;
}
function Ou(t, e, n, r) {
  var i = mr();
  ze.flags |= t, i.memoizedState = oa(1 | e, n, void 0, r === void 0 ? null : r);
}
function Hc(t, e, n, r) {
  var i = Un();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Je !== null) {
    var l = Je.memoizedState;
    if (o = l.destroy, r !== null && zp(r, l.deps)) {
      i.memoizedState = oa(e, n, o, r);
      return;
    }
  }
  ze.flags |= t, i.memoizedState = oa(1 | e, n, o, r);
}
function Bg(t, e) {
  return Ou(8390656, 8, t, e);
}
function jp(t, e) {
  return Hc(2048, 8, t, e);
}
function vy(t, e) {
  return Hc(4, 2, t, e);
}
function yy(t, e) {
  return Hc(4, 4, t, e);
}
function _y(t, e) {
  if (typeof e == "function")
    return t = t(), e(t), function() {
      e(null);
    };
  if (e != null)
    return t = t(), e.current = t, function() {
      e.current = null;
    };
}
function xy(t, e, n) {
  return n = n != null ? n.concat([t]) : null, Hc(4, 4, _y.bind(null, e, t), n);
}
function Lp() {
}
function wy(t, e) {
  var n = Un();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && zp(e, r[1]) ? r[0] : (n.memoizedState = [t, e], t);
}
function ky(t, e) {
  var n = Un();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && zp(e, r[1]) ? r[0] : (t = t(), n.memoizedState = [t, e], t);
}
function Sy(t, e, n) {
  return Co & 21 ? (ar(n, e) || (n = bv(), ze.lanes |= n, Eo |= n, t.baseState = !0), e) : (t.baseState && (t.baseState = !1, Kt = !0), t.memoizedState = n);
}
function Lk(t, e) {
  var n = _e;
  _e = n !== 0 && 4 > n ? n : 4, t(!0);
  var r = Uf.transition;
  Uf.transition = {};
  try {
    t(!1), e();
  } finally {
    _e = n, Uf.transition = r;
  }
}
function Cy() {
  return Un().memoizedState;
}
function Fk(t, e, n) {
  var r = Ei(t);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Ey(t))
    by(e, n);
  else if (n = ny(t, e, n, r), n !== null) {
    var i = Lt();
    lr(n, t, r, i), Ty(n, e, r);
  }
}
function Bk(t, e, n) {
  var r = Ei(t), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ey(t))
    by(e, i);
  else {
    var o = t.alternate;
    if (t.lanes === 0 && (o === null || o.lanes === 0) && (o = e.lastRenderedReducer, o !== null))
      try {
        var l = e.lastRenderedState, s = o(l, n);
        if (i.hasEagerState = !0, i.eagerState = s, ar(s, l)) {
          var a = e.interleaved;
          a === null ? (i.next = i, Rp(e)) : (i.next = a.next, a.next = i), e.interleaved = i;
          return;
        }
      } catch {
      } finally {
      }
    n = ny(t, e, i, r), n !== null && (i = Lt(), lr(n, t, r, i), Ty(n, e, r));
  }
}
function Ey(t) {
  var e = t.alternate;
  return t === ze || e !== null && e === ze;
}
function by(t, e) {
  Cs = uc = !0;
  var n = t.pending;
  n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
}
function Ty(t, e, n) {
  if (n & 4194240) {
    var r = e.lanes;
    r &= t.pendingLanes, n |= r, e.lanes = n, mp(t, n);
  }
}
var cc = { readContext: Bn, useCallback: wt, useContext: wt, useEffect: wt, useImperativeHandle: wt, useInsertionEffect: wt, useLayoutEffect: wt, useMemo: wt, useReducer: wt, useRef: wt, useState: wt, useDebugValue: wt, useDeferredValue: wt, useTransition: wt, useMutableSource: wt, useSyncExternalStore: wt, useId: wt, unstable_isNewReconciler: !1 }, Uk = { readContext: Bn, useCallback: function(t, e) {
  return mr().memoizedState = [t, e === void 0 ? null : e], t;
}, useContext: Bn, useEffect: Bg, useImperativeHandle: function(t, e, n) {
  return n = n != null ? n.concat([t]) : null, Ou(
    4194308,
    4,
    _y.bind(null, e, t),
    n
  );
}, useLayoutEffect: function(t, e) {
  return Ou(4194308, 4, t, e);
}, useInsertionEffect: function(t, e) {
  return Ou(4, 2, t, e);
}, useMemo: function(t, e) {
  var n = mr();
  return e = e === void 0 ? null : e, t = t(), n.memoizedState = [t, e], t;
}, useReducer: function(t, e, n) {
  var r = mr();
  return e = n !== void 0 ? n(e) : e, r.memoizedState = r.baseState = e, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: e }, r.queue = t, t = t.dispatch = Fk.bind(null, ze, t), [r.memoizedState, t];
}, useRef: function(t) {
  var e = mr();
  return t = { current: t }, e.memoizedState = t;
}, useState: Fg, useDebugValue: Lp, useDeferredValue: function(t) {
  return mr().memoizedState = t;
}, useTransition: function() {
  var t = Fg(!1), e = t[0];
  return t = Lk.bind(null, t[1]), mr().memoizedState = t, [e, t];
}, useMutableSource: function() {
}, useSyncExternalStore: function(t, e, n) {
  var r = ze, i = mr();
  if (Pe) {
    if (n === void 0)
      throw Error(A(407));
    n = n();
  } else {
    if (n = e(), st === null)
      throw Error(A(349));
    Co & 30 || fy(r, e, n);
  }
  i.memoizedState = n;
  var o = { value: n, getSnapshot: e };
  return i.queue = o, Bg(hy.bind(
    null,
    r,
    o,
    t
  ), [t]), r.flags |= 2048, oa(9, dy.bind(null, r, o, n, e), void 0, null), n;
}, useId: function() {
  var t = mr(), e = st.identifierPrefix;
  if (Pe) {
    var n = Fr, r = Lr;
    n = (r & ~(1 << 32 - or(r) - 1)).toString(32) + n, e = ":" + e + "R" + n, n = ra++, 0 < n && (e += "H" + n.toString(32)), e += ":";
  } else
    n = jk++, e = ":" + e + "r" + n.toString(32) + ":";
  return t.memoizedState = e;
}, unstable_isNewReconciler: !1 }, Vk = {
  readContext: Bn,
  useCallback: wy,
  useContext: Bn,
  useEffect: jp,
  useImperativeHandle: xy,
  useInsertionEffect: vy,
  useLayoutEffect: yy,
  useMemo: ky,
  useReducer: Vf,
  useRef: my,
  useState: function() {
    return Vf(ia);
  },
  useDebugValue: Lp,
  useDeferredValue: function(t) {
    var e = Un();
    return Sy(e, Je.memoizedState, t);
  },
  useTransition: function() {
    var t = Vf(ia)[0], e = Un().memoizedState;
    return [t, e];
  },
  useMutableSource: uy,
  useSyncExternalStore: cy,
  useId: Cy,
  unstable_isNewReconciler: !1
}, Wk = { readContext: Bn, useCallback: wy, useContext: Bn, useEffect: jp, useImperativeHandle: xy, useInsertionEffect: vy, useLayoutEffect: yy, useMemo: ky, useReducer: Wf, useRef: my, useState: function() {
  return Wf(ia);
}, useDebugValue: Lp, useDeferredValue: function(t) {
  var e = Un();
  return Je === null ? e.memoizedState = t : Sy(e, Je.memoizedState, t);
}, useTransition: function() {
  var t = Wf(ia)[0], e = Un().memoizedState;
  return [t, e];
}, useMutableSource: uy, useSyncExternalStore: cy, useId: Cy, unstable_isNewReconciler: !1 };
function Rl(t, e) {
  try {
    var n = "", r = e;
    do
      n += y2(r), r = r.return;
    while (r);
    var i = n;
  } catch (o) {
    i = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: t, source: e, stack: i, digest: null };
}
function Hf(t, e, n) {
  return { value: t, source: null, stack: n ?? null, digest: e ?? null };
}
function eh(t, e) {
  try {
    console.error(e.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Hk = typeof WeakMap == "function" ? WeakMap : Map;
function Py(t, e, n) {
  n = Vr(-1, n), n.tag = 3, n.payload = { element: null };
  var r = e.value;
  return n.callback = function() {
    dc || (dc = !0, ch = r), eh(t, e);
  }, n;
}
function Oy(t, e, n) {
  n = Vr(-1, n), n.tag = 3;
  var r = t.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = e.value;
    n.payload = function() {
      return r(i);
    }, n.callback = function() {
      eh(t, e);
    };
  }
  var o = t.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    eh(t, e), typeof r != "function" && (Ci === null ? Ci = /* @__PURE__ */ new Set([this]) : Ci.add(this));
    var l = e.stack;
    this.componentDidCatch(e.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function Ug(t, e, n) {
  var r = t.pingCache;
  if (r === null) {
    r = t.pingCache = new Hk();
    var i = /* @__PURE__ */ new Set();
    r.set(e, i);
  } else
    i = r.get(e), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(e, i));
  i.has(n) || (i.add(n), t = oS.bind(null, t, e, n), e.then(t, t));
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
function Wg(t, e, n, r, i) {
  return t.mode & 1 ? (t.flags |= 65536, t.lanes = i, t) : (t === e ? t.flags |= 65536 : (t.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (e = Vr(-1, 1), e.tag = 2, Si(n, e, 1))), n.lanes |= 1), t);
}
var Yk = Kr.ReactCurrentOwner, Kt = !1;
function Nt(t, e, n, r) {
  e.child = t === null ? sy(e, null, n, r) : Pl(e, t.child, n, r);
}
function Hg(t, e, n, r, i) {
  n = n.render;
  var o = e.ref;
  return pl(e, i), r = $p(t, e, n, r, o, i), n = Dp(), t !== null && !Kt ? (e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~i, Gr(t, e, i)) : (Pe && n && Cp(e), e.flags |= 1, Nt(t, e, r, i), e.child);
}
function Yg(t, e, n, r, i) {
  if (t === null) {
    var o = n.type;
    return typeof o == "function" && !Xp(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (e.tag = 15, e.type = o, Ry(t, e, o, r, i)) : (t = Au(n.type, null, r, e, e.mode, i), t.ref = e.ref, t.return = e, e.child = t);
  }
  if (o = t.child, !(t.lanes & i)) {
    var l = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Ks, n(l, r) && t.ref === e.ref)
      return Gr(t, e, i);
  }
  return e.flags |= 1, t = bi(o, r), t.ref = e.ref, t.return = e, e.child = t;
}
function Ry(t, e, n, r, i) {
  if (t !== null) {
    var o = t.memoizedProps;
    if (Ks(o, r) && t.ref === e.ref)
      if (Kt = !1, e.pendingProps = r = o, (t.lanes & i) !== 0)
        t.flags & 131072 && (Kt = !0);
      else
        return e.lanes = t.lanes, Gr(t, e, i);
  }
  return th(t, e, n, r, i);
}
function My(t, e, n) {
  var r = e.pendingProps, i = r.children, o = t !== null ? t.memoizedState : null;
  if (r.mode === "hidden")
    if (!(e.mode & 1))
      e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Se(il, pn), pn |= n;
    else {
      if (!(n & 1073741824))
        return t = o !== null ? o.baseLanes | n : n, e.lanes = e.childLanes = 1073741824, e.memoizedState = { baseLanes: t, cachePool: null, transitions: null }, e.updateQueue = null, Se(il, pn), pn |= t, null;
      e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, Se(il, pn), pn |= r;
    }
  else
    o !== null ? (r = o.baseLanes | n, e.memoizedState = null) : r = n, Se(il, pn), pn |= r;
  return Nt(t, e, i, n), e.child;
}
function Ny(t, e) {
  var n = e.ref;
  (t === null && n !== null || t !== null && t.ref !== n) && (e.flags |= 512, e.flags |= 2097152);
}
function th(t, e, n, r, i) {
  var o = Jt(n) ? ko : Pt.current;
  return o = bl(e, o), pl(e, i), n = $p(t, e, n, r, o, i), r = Dp(), t !== null && !Kt ? (e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~i, Gr(t, e, i)) : (Pe && r && Cp(e), e.flags |= 1, Nt(t, e, n, i), e.child);
}
function Xg(t, e, n, r, i) {
  if (Jt(n)) {
    var o = !0;
    nc(e);
  } else
    o = !1;
  if (pl(e, i), e.stateNode === null)
    Ru(t, e), oy(e, n, r), Jd(e, n, r, i), r = !0;
  else if (t === null) {
    var l = e.stateNode, s = e.memoizedProps;
    l.props = s;
    var a = l.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = Bn(u) : (u = Jt(n) ? ko : Pt.current, u = bl(e, u));
    var c = n.getDerivedStateFromProps, f = typeof c == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    f || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== r || a !== u) && jg(e, l, r, u), li = !1;
    var h = e.memoizedState;
    l.state = h, sc(e, r, l, i), a = e.memoizedState, s !== r || h !== a || Zt.current || li ? (typeof c == "function" && (Zd(e, n, c, r), a = e.memoizedState), (s = li || Dg(e, n, s, r, h, a, u)) ? (f || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = r, e.memoizedState = a), l.props = r, l.state = a, l.context = u, r = s) : (typeof l.componentDidMount == "function" && (e.flags |= 4194308), r = !1);
  } else {
    l = e.stateNode, ry(t, e), s = e.memoizedProps, u = e.type === e.elementType ? s : Jn(e.type, s), l.props = u, f = e.pendingProps, h = l.context, a = n.contextType, typeof a == "object" && a !== null ? a = Bn(a) : (a = Jt(n) ? ko : Pt.current, a = bl(e, a));
    var d = n.getDerivedStateFromProps;
    (c = typeof d == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== f || h !== a) && jg(e, l, r, a), li = !1, h = e.memoizedState, l.state = h, sc(e, r, l, i);
    var g = e.memoizedState;
    s !== f || h !== g || Zt.current || li ? (typeof d == "function" && (Zd(e, n, d, r), g = e.memoizedState), (u = li || Dg(e, n, u, r, h, g, a) || !1) ? (c || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, g, a), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, g, a)), typeof l.componentDidUpdate == "function" && (e.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || s === t.memoizedProps && h === t.memoizedState || (e.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === t.memoizedProps && h === t.memoizedState || (e.flags |= 1024), e.memoizedProps = r, e.memoizedState = g), l.props = r, l.state = g, l.context = a, r = u) : (typeof l.componentDidUpdate != "function" || s === t.memoizedProps && h === t.memoizedState || (e.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === t.memoizedProps && h === t.memoizedState || (e.flags |= 1024), r = !1);
  }
  return nh(t, e, n, r, o, i);
}
function nh(t, e, n, r, i, o) {
  Ny(t, e);
  var l = (e.flags & 128) !== 0;
  if (!r && !l)
    return i && Ng(e, n, !1), Gr(t, e, o);
  r = e.stateNode, Yk.current = e;
  var s = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return e.flags |= 1, t !== null && l ? (e.child = Pl(e, t.child, null, o), e.child = Pl(e, null, s, o)) : Nt(t, e, s, o), e.memoizedState = r.state, i && Ng(e, n, !0), e.child;
}
function Ay(t) {
  var e = t.stateNode;
  e.pendingContext ? Mg(t, e.pendingContext, e.pendingContext !== e.context) : e.context && Mg(t, e.context, !1), Np(t, e.containerInfo);
}
function Gg(t, e, n, r, i) {
  return Tl(), bp(i), e.flags |= 256, Nt(t, e, n, r), e.child;
}
var rh = { dehydrated: null, treeContext: null, retryLane: 0 };
function ih(t) {
  return { baseLanes: t, cachePool: null, transitions: null };
}
function Iy(t, e, n) {
  var r = e.pendingProps, i = Ne.current, o = !1, l = (e.flags & 128) !== 0, s;
  if ((s = l) || (s = t !== null && t.memoizedState === null ? !1 : (i & 2) !== 0), s ? (o = !0, e.flags &= -129) : (t === null || t.memoizedState !== null) && (i |= 1), Se(Ne, i & 1), t === null)
    return qd(e), t = e.memoizedState, t !== null && (t = t.dehydrated, t !== null) ? (e.mode & 1 ? t.data === "$!" ? e.lanes = 8 : e.lanes = 1073741824 : e.lanes = 1, null) : (l = r.children, t = r.fallback, o ? (r = e.mode, o = e.child, l = { mode: "hidden", children: l }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = l) : o = Gc(l, r, 0, null), t = po(t, r, n, null), o.return = e, t.return = e, o.sibling = t, e.child = o, e.child.memoizedState = ih(n), e.memoizedState = rh, t) : Fp(e, l));
  if (i = t.memoizedState, i !== null && (s = i.dehydrated, s !== null))
    return Xk(t, e, l, r, s, i, n);
  if (o) {
    o = r.fallback, l = e.mode, i = t.child, s = i.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(l & 1) && e.child !== i ? (r = e.child, r.childLanes = 0, r.pendingProps = a, e.deletions = null) : (r = bi(i, a), r.subtreeFlags = i.subtreeFlags & 14680064), s !== null ? o = bi(s, o) : (o = po(o, l, n, null), o.flags |= 2), o.return = e, r.return = e, r.sibling = o, e.child = r, r = o, o = e.child, l = t.child.memoizedState, l = l === null ? ih(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, o.memoizedState = l, o.childLanes = t.childLanes & ~n, e.memoizedState = rh, r;
  }
  return o = t.child, t = o.sibling, r = bi(o, { mode: "visible", children: r.children }), !(e.mode & 1) && (r.lanes = n), r.return = e, r.sibling = null, t !== null && (n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t)), e.child = r, e.memoizedState = null, r;
}
function Fp(t, e) {
  return e = Gc({ mode: "visible", children: e }, t.mode, 0, null), e.return = t, t.child = e;
}
function qa(t, e, n, r) {
  return r !== null && bp(r), Pl(e, t.child, null, n), t = Fp(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t;
}
function Xk(t, e, n, r, i, o, l) {
  if (n)
    return e.flags & 256 ? (e.flags &= -257, r = Hf(Error(A(422))), qa(t, e, l, r)) : e.memoizedState !== null ? (e.child = t.child, e.flags |= 128, null) : (o = r.fallback, i = e.mode, r = Gc({ mode: "visible", children: r.children }, i, 0, null), o = po(o, i, l, null), o.flags |= 2, r.return = e, o.return = e, r.sibling = o, e.child = r, e.mode & 1 && Pl(e, t.child, null, l), e.child.memoizedState = ih(l), e.memoizedState = rh, o);
  if (!(e.mode & 1))
    return qa(t, e, l, null);
  if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r)
      var s = r.dgst;
    return r = s, o = Error(A(419)), r = Hf(o, r, void 0), qa(t, e, l, r);
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
    return Yp(), r = Hf(Error(A(421))), qa(t, e, l, r);
  }
  return i.data === "$?" ? (e.flags |= 128, e.child = t.child, e = lS.bind(null, t), i._reactRetry = e, null) : (t = o.treeContext, _n = ki(i.nextSibling), xn = e, Pe = !0, tr = null, t !== null && (On[Rn++] = Lr, On[Rn++] = Fr, On[Rn++] = So, Lr = t.id, Fr = t.overflow, So = e), e = Fp(e, r.children), e.flags |= 4096, e);
}
function Qg(t, e, n) {
  t.lanes |= e;
  var r = t.alternate;
  r !== null && (r.lanes |= e), Kd(t.return, e, n);
}
function Yf(t, e, n, r, i) {
  var o = t.memoizedState;
  o === null ? t.memoizedState = { isBackwards: e, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (o.isBackwards = e, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i);
}
function zy(t, e, n) {
  var r = e.pendingProps, i = r.revealOrder, o = r.tail;
  if (Nt(t, e, r.children, n), r = Ne.current, r & 2)
    r = r & 1 | 2, e.flags |= 128;
  else {
    if (t !== null && t.flags & 128)
      e:
        for (t = e.child; t !== null; ) {
          if (t.tag === 13)
            t.memoizedState !== null && Qg(t, n, e);
          else if (t.tag === 19)
            Qg(t, n, e);
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
          t = n.alternate, t !== null && ac(t) === null && (i = n), n = n.sibling;
        n = i, n === null ? (i = e.child, e.child = null) : (i = n.sibling, n.sibling = null), Yf(e, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = e.child, e.child = null; i !== null; ) {
          if (t = i.alternate, t !== null && ac(t) === null) {
            e.child = i;
            break;
          }
          t = i.sibling, i.sibling = n, n = i, i = t;
        }
        Yf(e, !0, n, null, o);
        break;
      case "together":
        Yf(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
  return e.child;
}
function Ru(t, e) {
  !(e.mode & 1) && t !== null && (t.alternate = null, e.alternate = null, e.flags |= 2);
}
function Gr(t, e, n) {
  if (t !== null && (e.dependencies = t.dependencies), Eo |= e.lanes, !(n & e.childLanes))
    return null;
  if (t !== null && e.child !== t.child)
    throw Error(A(153));
  if (e.child !== null) {
    for (t = e.child, n = bi(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; )
      t = t.sibling, n = n.sibling = bi(t, t.pendingProps), n.return = e;
    n.sibling = null;
  }
  return e.child;
}
function Gk(t, e, n) {
  switch (e.tag) {
    case 3:
      Ay(e), Tl();
      break;
    case 5:
      ay(e);
      break;
    case 1:
      Jt(e.type) && nc(e);
      break;
    case 4:
      Np(e, e.stateNode.containerInfo);
      break;
    case 10:
      var r = e.type._context, i = e.memoizedProps.value;
      Se(oc, r._currentValue), r._currentValue = i;
      break;
    case 13:
      if (r = e.memoizedState, r !== null)
        return r.dehydrated !== null ? (Se(Ne, Ne.current & 1), e.flags |= 128, null) : n & e.child.childLanes ? Iy(t, e, n) : (Se(Ne, Ne.current & 1), t = Gr(t, e, n), t !== null ? t.sibling : null);
      Se(Ne, Ne.current & 1);
      break;
    case 19:
      if (r = (n & e.childLanes) !== 0, t.flags & 128) {
        if (r)
          return zy(t, e, n);
        e.flags |= 128;
      }
      if (i = e.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Se(Ne, Ne.current), r)
        break;
      return null;
    case 22:
    case 23:
      return e.lanes = 0, My(t, e, n);
  }
  return Gr(t, e, n);
}
var $y, oh, Dy, jy;
$y = function(t, e) {
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
oh = function() {
};
Dy = function(t, e, n, r) {
  var i = t.memoizedProps;
  if (i !== r) {
    t = e.stateNode, ao(Cr.current);
    var o = null;
    switch (n) {
      case "input":
        i = Td(t, i), r = Td(t, r), o = [];
        break;
      case "select":
        i = $e({}, i, { value: void 0 }), r = $e({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        i = Rd(t, i), r = Rd(t, r), o = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (t.onclick = ec);
    }
    Nd(n, r);
    var l;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var s = i[u];
          for (l in s)
            s.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
        } else
          u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Ws.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
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
          u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, s = s ? s.__html : void 0, a != null && s !== a && (o = o || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Ws.hasOwnProperty(u) ? (a != null && u === "onScroll" && Ce("scroll", t), o || s === a || (o = [])) : (o = o || []).push(u, a));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (e.updateQueue = u) && (e.flags |= 4);
  }
};
jy = function(t, e, n, r) {
  n !== r && (e.flags |= 4);
};
function Jl(t, e) {
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
function Qk(t, e, n) {
  var r = e.pendingProps;
  switch (Ep(e), e.tag) {
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
      return Jt(e.type) && tc(), kt(e), null;
    case 3:
      return r = e.stateNode, Ol(), be(Zt), be(Pt), Ip(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (t === null || t.child === null) && (Ga(e) ? e.flags |= 4 : t === null || t.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024, tr !== null && (hh(tr), tr = null))), oh(t, e), kt(e), null;
    case 5:
      Ap(e);
      var i = ao(na.current);
      if (n = e.type, t !== null && e.stateNode != null)
        Dy(t, e, n, r, i), t.ref !== e.ref && (e.flags |= 512, e.flags |= 2097152);
      else {
        if (!r) {
          if (e.stateNode === null)
            throw Error(A(166));
          return kt(e), null;
        }
        if (t = ao(Cr.current), Ga(e)) {
          r = e.stateNode, n = e.type;
          var o = e.memoizedProps;
          switch (r[_r] = e, r[ea] = o, t = (e.mode & 1) !== 0, n) {
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
              for (i = 0; i < cs.length; i++)
                Ce(cs[i], r);
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
              ig(r, o), Ce("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, Ce("invalid", r);
              break;
            case "textarea":
              lg(r, o), Ce("invalid", r);
          }
          Nd(n, o), i = null;
          for (var l in o)
            if (o.hasOwnProperty(l)) {
              var s = o[l];
              l === "children" ? typeof s == "string" ? r.textContent !== s && (o.suppressHydrationWarning !== !0 && Xa(r.textContent, s, t), i = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (o.suppressHydrationWarning !== !0 && Xa(
                r.textContent,
                s,
                t
              ), i = ["children", "" + s]) : Ws.hasOwnProperty(l) && s != null && l === "onScroll" && Ce("scroll", r);
            }
          switch (n) {
            case "input":
              La(r), og(r, o, !0);
              break;
            case "textarea":
              La(r), sg(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = ec);
          }
          r = i, e.updateQueue = r, r !== null && (e.flags |= 4);
        } else {
          l = i.nodeType === 9 ? i : i.ownerDocument, t === "http://www.w3.org/1999/xhtml" && (t = fv(n)), t === "http://www.w3.org/1999/xhtml" ? n === "script" ? (t = l.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild)) : typeof r.is == "string" ? t = l.createElement(n, { is: r.is }) : (t = l.createElement(n), n === "select" && (l = t, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : t = l.createElementNS(t, n), t[_r] = e, t[ea] = r, $y(t, e, !1, !1), e.stateNode = t;
          e: {
            switch (l = Ad(n, r), n) {
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
                for (i = 0; i < cs.length; i++)
                  Ce(cs[i], t);
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
                ig(t, r), i = Td(t, r), Ce("invalid", t);
                break;
              case "option":
                i = r;
                break;
              case "select":
                t._wrapperState = { wasMultiple: !!r.multiple }, i = $e({}, r, { value: void 0 }), Ce("invalid", t);
                break;
              case "textarea":
                lg(t, r), i = Rd(t, r), Ce("invalid", t);
                break;
              default:
                i = r;
            }
            Nd(n, i), s = i;
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var a = s[o];
                o === "style" ? pv(t, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && dv(t, a)) : o === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Hs(t, a) : typeof a == "number" && Hs(t, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Ws.hasOwnProperty(o) ? a != null && o === "onScroll" && Ce("scroll", t) : a != null && cp(t, o, a, l));
              }
            switch (n) {
              case "input":
                La(t), og(t, r, !1);
                break;
              case "textarea":
                La(t), sg(t);
                break;
              case "option":
                r.value != null && t.setAttribute("value", "" + Mi(r.value));
                break;
              case "select":
                t.multiple = !!r.multiple, o = r.value, o != null ? cl(t, !!r.multiple, o, !1) : r.defaultValue != null && cl(
                  t,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof i.onClick == "function" && (t.onclick = ec);
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
        jy(t, e, t.memoizedProps, r);
      else {
        if (typeof r != "string" && e.stateNode === null)
          throw Error(A(166));
        if (n = ao(na.current), ao(Cr.current), Ga(e)) {
          if (r = e.stateNode, n = e.memoizedProps, r[_r] = e, (o = r.nodeValue !== n) && (t = xn, t !== null))
            switch (t.tag) {
              case 3:
                Xa(r.nodeValue, n, (t.mode & 1) !== 0);
                break;
              case 5:
                t.memoizedProps.suppressHydrationWarning !== !0 && Xa(r.nodeValue, n, (t.mode & 1) !== 0);
            }
          o && (e.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[_r] = e, e.stateNode = r;
      }
      return kt(e), null;
    case 13:
      if (be(Ne), r = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
        if (Pe && _n !== null && e.mode & 1 && !(e.flags & 128))
          ty(), Tl(), e.flags |= 98560, o = !1;
        else if (o = Ga(e), r !== null && r.dehydrated !== null) {
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
          tr !== null && (hh(tr), tr = null), o = !0;
        if (!o)
          return e.flags & 65536 ? e : null;
      }
      return e.flags & 128 ? (e.lanes = n, e) : (r = r !== null, r !== (t !== null && t.memoizedState !== null) && r && (e.child.flags |= 8192, e.mode & 1 && (t === null || Ne.current & 1 ? tt === 0 && (tt = 3) : Yp())), e.updateQueue !== null && (e.flags |= 4), kt(e), null);
    case 4:
      return Ol(), oh(t, e), t === null && Zs(e.stateNode.containerInfo), kt(e), null;
    case 10:
      return Op(e.type._context), kt(e), null;
    case 17:
      return Jt(e.type) && tc(), kt(e), null;
    case 19:
      if (be(Ne), o = e.memoizedState, o === null)
        return kt(e), null;
      if (r = (e.flags & 128) !== 0, l = o.rendering, l === null)
        if (r)
          Jl(o, !1);
        else {
          if (tt !== 0 || t !== null && t.flags & 128)
            for (t = e.child; t !== null; ) {
              if (l = ac(t), l !== null) {
                for (e.flags |= 128, Jl(o, !1), r = l.updateQueue, r !== null && (e.updateQueue = r, e.flags |= 4), e.subtreeFlags = 0, r = n, n = e.child; n !== null; )
                  o = n, t = r, o.flags &= 14680066, l = o.alternate, l === null ? (o.childLanes = 0, o.lanes = t, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = l.childLanes, o.lanes = l.lanes, o.child = l.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = l.memoizedProps, o.memoizedState = l.memoizedState, o.updateQueue = l.updateQueue, o.type = l.type, t = l.dependencies, o.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), n = n.sibling;
                return Se(Ne, Ne.current & 1 | 2), e.child;
              }
              t = t.sibling;
            }
          o.tail !== null && We() > Ml && (e.flags |= 128, r = !0, Jl(o, !1), e.lanes = 4194304);
        }
      else {
        if (!r)
          if (t = ac(l), t !== null) {
            if (e.flags |= 128, r = !0, n = t.updateQueue, n !== null && (e.updateQueue = n, e.flags |= 4), Jl(o, !0), o.tail === null && o.tailMode === "hidden" && !l.alternate && !Pe)
              return kt(e), null;
          } else
            2 * We() - o.renderingStartTime > Ml && n !== 1073741824 && (e.flags |= 128, r = !0, Jl(o, !1), e.lanes = 4194304);
        o.isBackwards ? (l.sibling = e.child, e.child = l) : (n = o.last, n !== null ? n.sibling = l : e.child = l, o.last = l);
      }
      return o.tail !== null ? (e = o.tail, o.rendering = e, o.tail = e.sibling, o.renderingStartTime = We(), e.sibling = null, n = Ne.current, Se(Ne, r ? n & 1 | 2 : n & 1), e) : (kt(e), null);
    case 22:
    case 23:
      return Hp(), r = e.memoizedState !== null, t !== null && t.memoizedState !== null !== r && (e.flags |= 8192), r && e.mode & 1 ? pn & 1073741824 && (kt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : kt(e), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(A(156, e.tag));
}
function qk(t, e) {
  switch (Ep(e), e.tag) {
    case 1:
      return Jt(e.type) && tc(), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
    case 3:
      return Ol(), be(Zt), be(Pt), Ip(), t = e.flags, t & 65536 && !(t & 128) ? (e.flags = t & -65537 | 128, e) : null;
    case 5:
      return Ap(e), null;
    case 13:
      if (be(Ne), t = e.memoizedState, t !== null && t.dehydrated !== null) {
        if (e.alternate === null)
          throw Error(A(340));
        Tl();
      }
      return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
    case 19:
      return be(Ne), null;
    case 4:
      return Ol(), null;
    case 10:
      return Op(e.type._context), null;
    case 22:
    case 23:
      return Hp(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ka = !1, Ct = !1, Kk = typeof WeakSet == "function" ? WeakSet : Set, B = null;
function rl(t, e) {
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
function lh(t, e, n) {
  try {
    n();
  } catch (r) {
    je(t, e, r);
  }
}
var qg = !1;
function Zk(t, e) {
  if (Vd = Ku, t = Uv(), Sp(t)) {
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
  for (Wd = { focusedElem: t, selectionRange: n }, Ku = !1, B = e; B !== null; )
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
                  var p = g.memoizedProps, y = g.memoizedState, v = e.stateNode, m = v.getSnapshotBeforeUpdate(e.elementType === e.type ? p : Jn(e.type, p), y);
                  v.__reactInternalSnapshotBeforeUpdate = m;
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
  return g = qg, qg = !1, g;
}
function Es(t, e, n) {
  var r = e.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
      if ((i.tag & t) === t) {
        var o = i.destroy;
        i.destroy = void 0, o !== void 0 && lh(e, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Yc(t, e) {
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
function sh(t) {
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
function Ly(t) {
  var e = t.alternate;
  e !== null && (t.alternate = null, Ly(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && (delete e[_r], delete e[ea], delete e[Xd], delete e[Ik], delete e[zk])), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
}
function Fy(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function Kg(t) {
  e:
    for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Fy(t.return))
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
function ah(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6)
    t = t.stateNode, e ? n.nodeType === 8 ? n.parentNode.insertBefore(t, e) : n.insertBefore(t, e) : (n.nodeType === 8 ? (e = n.parentNode, e.insertBefore(t, n)) : (e = n, e.appendChild(t)), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = ec));
  else if (r !== 4 && (t = t.child, t !== null))
    for (ah(t, e, n), t = t.sibling; t !== null; )
      ah(t, e, n), t = t.sibling;
}
function uh(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6)
    t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t);
  else if (r !== 4 && (t = t.child, t !== null))
    for (uh(t, e, n), t = t.sibling; t !== null; )
      uh(t, e, n), t = t.sibling;
}
var ht = null, er = !1;
function ei(t, e, n) {
  for (n = n.child; n !== null; )
    By(t, e, n), n = n.sibling;
}
function By(t, e, n) {
  if (Sr && typeof Sr.onCommitFiberUnmount == "function")
    try {
      Sr.onCommitFiberUnmount(jc, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      Ct || rl(n, e);
    case 6:
      var r = ht, i = er;
      ht = null, ei(t, e, n), ht = r, er = i, ht !== null && (er ? (t = ht, n = n.stateNode, t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n)) : ht.removeChild(n.stateNode));
      break;
    case 18:
      ht !== null && (er ? (t = ht, n = n.stateNode, t.nodeType === 8 ? Lf(t.parentNode, n) : t.nodeType === 1 && Lf(t, n), Qs(t)) : Lf(ht, n.stateNode));
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
          o = o.tag, l !== void 0 && (o & 2 || o & 4) && lh(n, e, l), i = i.next;
        } while (i !== r);
      }
      ei(t, e, n);
      break;
    case 1:
      if (!Ct && (rl(n, e), r = n.stateNode, typeof r.componentWillUnmount == "function"))
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
function Zg(t) {
  var e = t.updateQueue;
  if (e !== null) {
    t.updateQueue = null;
    var n = t.stateNode;
    n === null && (n = t.stateNode = new Kk()), e.forEach(function(r) {
      var i = sS.bind(null, t, r);
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
        By(o, l, i), ht = null, er = !1;
        var a = i.alternate;
        a !== null && (a.return = null), i.return = null;
      } catch (u) {
        je(i, e, u);
      }
    }
  if (e.subtreeFlags & 12854)
    for (e = e.child; e !== null; )
      Uy(e, t), e = e.sibling;
}
function Uy(t, e) {
  var n = t.alternate, r = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Kn(e, t), gr(t), r & 4) {
        try {
          Es(3, t, t.return), Yc(3, t);
        } catch (p) {
          je(t, t.return, p);
        }
        try {
          Es(5, t, t.return);
        } catch (p) {
          je(t, t.return, p);
        }
      }
      break;
    case 1:
      Kn(e, t), gr(t), r & 512 && n !== null && rl(n, n.return);
      break;
    case 5:
      if (Kn(e, t), gr(t), r & 512 && n !== null && rl(n, n.return), t.flags & 32) {
        var i = t.stateNode;
        try {
          Hs(i, "");
        } catch (p) {
          je(t, t.return, p);
        }
      }
      if (r & 4 && (i = t.stateNode, i != null)) {
        var o = t.memoizedProps, l = n !== null ? n.memoizedProps : o, s = t.type, a = t.updateQueue;
        if (t.updateQueue = null, a !== null)
          try {
            s === "input" && o.type === "radio" && o.name != null && uv(i, o), Ad(s, l);
            var u = Ad(s, o);
            for (l = 0; l < a.length; l += 2) {
              var c = a[l], f = a[l + 1];
              c === "style" ? pv(i, f) : c === "dangerouslySetInnerHTML" ? dv(i, f) : c === "children" ? Hs(i, f) : cp(i, c, f, u);
            }
            switch (s) {
              case "input":
                Pd(i, o);
                break;
              case "textarea":
                cv(i, o);
                break;
              case "select":
                var h = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var d = o.value;
                d != null ? cl(i, !!o.multiple, d, !1) : h !== !!o.multiple && (o.defaultValue != null ? cl(
                  i,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : cl(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[ea] = o;
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
          Qs(e.containerInfo);
        } catch (p) {
          je(t, t.return, p);
        }
      break;
    case 4:
      Kn(e, t), gr(t);
      break;
    case 13:
      Kn(e, t), gr(t), i = t.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (Vp = We())), r & 4 && Zg(t);
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
                  Es(4, h, h.return);
                  break;
                case 1:
                  rl(h, h.return);
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
                  rl(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    em(f);
                    continue;
                  }
              }
              d !== null ? (d.return = h, B = d) : em(f);
            }
            c = c.sibling;
          }
        e:
          for (c = null, f = t; ; ) {
            if (f.tag === 5) {
              if (c === null) {
                c = f;
                try {
                  i = f.stateNode, u ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (s = f.stateNode, a = f.memoizedProps.style, l = a != null && a.hasOwnProperty("display") ? a.display : null, s.style.display = hv("display", l));
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
      Kn(e, t), gr(t), r & 4 && Zg(t);
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
          if (Fy(n)) {
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
          r.flags & 32 && (Hs(i, ""), r.flags &= -33);
          var o = Kg(t);
          uh(t, o, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, s = Kg(t);
          ah(t, s, l);
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
function Jk(t, e, n) {
  B = t, Vy(t);
}
function Vy(t, e, n) {
  for (var r = (t.mode & 1) !== 0; B !== null; ) {
    var i = B, o = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || Ka;
      if (!l) {
        var s = i.alternate, a = s !== null && s.memoizedState !== null || Ct;
        s = Ka;
        var u = Ct;
        if (Ka = l, (Ct = a) && !u)
          for (B = i; B !== null; )
            l = B, a = l.child, l.tag === 22 && l.memoizedState !== null ? tm(i) : a !== null ? (a.return = l, B = a) : tm(i);
        for (; o !== null; )
          B = o, Vy(o), o = o.sibling;
        B = i, Ka = s, Ct = u;
      }
      Jg(t);
    } else
      i.subtreeFlags & 8772 && o !== null ? (o.return = i, B = o) : Jg(t);
  }
}
function Jg(t) {
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
              Ct || Yc(5, e);
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
              o !== null && $g(e, o, r);
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
                $g(e, l, n);
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
                    f !== null && Qs(f);
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
        Ct || e.flags & 512 && sh(e);
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
function em(t) {
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
function tm(t) {
  for (; B !== null; ) {
    var e = B;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var n = e.return;
          try {
            Yc(4, e);
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
            sh(e);
          } catch (a) {
            je(e, o, a);
          }
          break;
        case 5:
          var l = e.return;
          try {
            sh(e);
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
var eS = Math.ceil, fc = Kr.ReactCurrentDispatcher, Bp = Kr.ReactCurrentOwner, Ln = Kr.ReactCurrentBatchConfig, ge = 0, st = null, qe = null, mt = 0, pn = 0, il = ji(0), tt = 0, la = null, Eo = 0, Xc = 0, Up = 0, bs = null, Qt = null, Vp = 0, Ml = 1 / 0, Ar = null, dc = !1, ch = null, Ci = null, Za = !1, ci = null, hc = 0, Ts = 0, fh = null, Mu = -1, Nu = 0;
function Lt() {
  return ge & 6 ? We() : Mu !== -1 ? Mu : Mu = We();
}
function Ei(t) {
  return t.mode & 1 ? ge & 2 && mt !== 0 ? mt & -mt : Dk.transition !== null ? (Nu === 0 && (Nu = bv()), Nu) : (t = _e, t !== 0 || (t = window.event, t = t === void 0 ? 16 : Av(t.type)), t) : 1;
}
function lr(t, e, n, r) {
  if (50 < Ts)
    throw Ts = 0, fh = null, Error(A(185));
  Ea(t, n, r), (!(ge & 2) || t !== st) && (t === st && (!(ge & 2) && (Xc |= n), tt === 4 && ai(t, mt)), en(t, r), n === 1 && ge === 0 && !(e.mode & 1) && (Ml = We() + 500, Vc && Li()));
}
function en(t, e) {
  var n = t.callbackNode;
  D2(t, e);
  var r = qu(t, t === st ? mt : 0);
  if (r === 0)
    n !== null && cg(n), t.callbackNode = null, t.callbackPriority = 0;
  else if (e = r & -r, t.callbackPriority !== e) {
    if (n != null && cg(n), e === 1)
      t.tag === 0 ? $k(nm.bind(null, t)) : Zv(nm.bind(null, t)), Nk(function() {
        !(ge & 6) && Li();
      }), n = null;
    else {
      switch (Tv(r)) {
        case 1:
          n = gp;
          break;
        case 4:
          n = Cv;
          break;
        case 16:
          n = Qu;
          break;
        case 536870912:
          n = Ev;
          break;
        default:
          n = Qu;
      }
      n = Ky(n, Wy.bind(null, t));
    }
    t.callbackPriority = e, t.callbackNode = n;
  }
}
function Wy(t, e) {
  if (Mu = -1, Nu = 0, ge & 6)
    throw Error(A(327));
  var n = t.callbackNode;
  if (gl() && t.callbackNode !== n)
    return null;
  var r = qu(t, t === st ? mt : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & t.expiredLanes || e)
    e = pc(t, r);
  else {
    e = r;
    var i = ge;
    ge |= 2;
    var o = Yy();
    (st !== t || mt !== e) && (Ar = null, Ml = We() + 500, ho(t, e));
    do
      try {
        rS();
        break;
      } catch (s) {
        Hy(t, s);
      }
    while (1);
    Pp(), fc.current = o, ge = i, qe !== null ? e = 0 : (st = null, mt = 0, e = tt);
  }
  if (e !== 0) {
    if (e === 2 && (i = jd(t), i !== 0 && (r = i, e = dh(t, i))), e === 1)
      throw n = la, ho(t, 0), ai(t, r), en(t, We()), n;
    if (e === 6)
      ai(t, r);
    else {
      if (i = t.current.alternate, !(r & 30) && !tS(i) && (e = pc(t, r), e === 2 && (o = jd(t), o !== 0 && (r = o, e = dh(t, o))), e === 1))
        throw n = la, ho(t, 0), ai(t, r), en(t, We()), n;
      switch (t.finishedWork = i, t.finishedLanes = r, e) {
        case 0:
        case 1:
          throw Error(A(345));
        case 2:
          to(t, Qt, Ar);
          break;
        case 3:
          if (ai(t, r), (r & 130023424) === r && (e = Vp + 500 - We(), 10 < e)) {
            if (qu(t, 0) !== 0)
              break;
            if (i = t.suspendedLanes, (i & r) !== r) {
              Lt(), t.pingedLanes |= t.suspendedLanes & i;
              break;
            }
            t.timeoutHandle = Yd(to.bind(null, t, Qt, Ar), e);
            break;
          }
          to(t, Qt, Ar);
          break;
        case 4:
          if (ai(t, r), (r & 4194240) === r)
            break;
          for (e = t.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - or(r);
            o = 1 << l, l = e[l], l > i && (i = l), r &= ~o;
          }
          if (r = i, r = We() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * eS(r / 1960)) - r, 10 < r) {
            t.timeoutHandle = Yd(to.bind(null, t, Qt, Ar), r);
            break;
          }
          to(t, Qt, Ar);
          break;
        case 5:
          to(t, Qt, Ar);
          break;
        default:
          throw Error(A(329));
      }
    }
  }
  return en(t, We()), t.callbackNode === n ? Wy.bind(null, t) : null;
}
function dh(t, e) {
  var n = bs;
  return t.current.memoizedState.isDehydrated && (ho(t, e).flags |= 256), t = pc(t, e), t !== 2 && (e = Qt, Qt = n, e !== null && hh(e)), t;
}
function hh(t) {
  Qt === null ? Qt = t : Qt.push.apply(Qt, t);
}
function tS(t) {
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
function ai(t, e) {
  for (e &= ~Up, e &= ~Xc, t.suspendedLanes |= e, t.pingedLanes &= ~e, t = t.expirationTimes; 0 < e; ) {
    var n = 31 - or(e), r = 1 << n;
    t[n] = -1, e &= ~r;
  }
}
function nm(t) {
  if (ge & 6)
    throw Error(A(327));
  gl();
  var e = qu(t, 0);
  if (!(e & 1))
    return en(t, We()), null;
  var n = pc(t, e);
  if (t.tag !== 0 && n === 2) {
    var r = jd(t);
    r !== 0 && (e = r, n = dh(t, r));
  }
  if (n === 1)
    throw n = la, ho(t, 0), ai(t, e), en(t, We()), n;
  if (n === 6)
    throw Error(A(345));
  return t.finishedWork = t.current.alternate, t.finishedLanes = e, to(t, Qt, Ar), en(t, We()), null;
}
function Wp(t, e) {
  var n = ge;
  ge |= 1;
  try {
    return t(e);
  } finally {
    ge = n, ge === 0 && (Ml = We() + 500, Vc && Li());
  }
}
function bo(t) {
  ci !== null && ci.tag === 0 && !(ge & 6) && gl();
  var e = ge;
  ge |= 1;
  var n = Ln.transition, r = _e;
  try {
    if (Ln.transition = null, _e = 1, t)
      return t();
  } finally {
    _e = r, Ln.transition = n, ge = e, !(ge & 6) && Li();
  }
}
function Hp() {
  pn = il.current, be(il);
}
function ho(t, e) {
  t.finishedWork = null, t.finishedLanes = 0;
  var n = t.timeoutHandle;
  if (n !== -1 && (t.timeoutHandle = -1, Mk(n)), qe !== null)
    for (n = qe.return; n !== null; ) {
      var r = n;
      switch (Ep(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && tc();
          break;
        case 3:
          Ol(), be(Zt), be(Pt), Ip();
          break;
        case 5:
          Ap(r);
          break;
        case 4:
          Ol();
          break;
        case 13:
          be(Ne);
          break;
        case 19:
          be(Ne);
          break;
        case 10:
          Op(r.type._context);
          break;
        case 22:
        case 23:
          Hp();
      }
      n = n.return;
    }
  if (st = t, qe = t = bi(t.current, null), mt = pn = e, tt = 0, la = null, Up = Xc = Eo = 0, Qt = bs = null, so !== null) {
    for (e = 0; e < so.length; e++)
      if (n = so[e], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var i = r.next, o = n.pending;
        if (o !== null) {
          var l = o.next;
          o.next = i, r.next = l;
        }
        n.pending = r;
      }
    so = null;
  }
  return t;
}
function Hy(t, e) {
  do {
    var n = qe;
    try {
      if (Pp(), Pu.current = cc, uc) {
        for (var r = ze.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), r = r.next;
        }
        uc = !1;
      }
      if (Co = 0, lt = Je = ze = null, Cs = !1, ra = 0, Bp.current = null, n === null || n.return === null) {
        tt = 1, la = e, qe = null;
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
            d.flags &= -257, Wg(d, l, s, o, e), d.mode & 1 && Ug(o, u, e), e = d, a = u;
            var g = e.updateQueue;
            if (g === null) {
              var p = /* @__PURE__ */ new Set();
              p.add(a), e.updateQueue = p;
            } else
              g.add(a);
            break e;
          } else {
            if (!(e & 1)) {
              Ug(o, u, e), Yp();
              break e;
            }
            a = Error(A(426));
          }
        } else if (Pe && s.mode & 1) {
          var y = Vg(l);
          if (y !== null) {
            !(y.flags & 65536) && (y.flags |= 256), Wg(y, l, s, o, e), bp(Rl(a, s));
            break e;
          }
        }
        o = a = Rl(a, s), tt !== 4 && (tt = 2), bs === null ? bs = [o] : bs.push(o), o = l;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, e &= -e, o.lanes |= e;
              var v = Py(o, a, e);
              zg(o, v);
              break e;
            case 1:
              s = a;
              var m = o.type, _ = o.stateNode;
              if (!(o.flags & 128) && (typeof m.getDerivedStateFromError == "function" || _ !== null && typeof _.componentDidCatch == "function" && (Ci === null || !Ci.has(_)))) {
                o.flags |= 65536, e &= -e, o.lanes |= e;
                var x = Oy(o, s, e);
                zg(o, x);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Gy(n);
    } catch (C) {
      e = C, qe === n && n !== null && (qe = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Yy() {
  var t = fc.current;
  return fc.current = cc, t === null ? cc : t;
}
function Yp() {
  (tt === 0 || tt === 3 || tt === 2) && (tt = 4), st === null || !(Eo & 268435455) && !(Xc & 268435455) || ai(st, mt);
}
function pc(t, e) {
  var n = ge;
  ge |= 2;
  var r = Yy();
  (st !== t || mt !== e) && (Ar = null, ho(t, e));
  do
    try {
      nS();
      break;
    } catch (i) {
      Hy(t, i);
    }
  while (1);
  if (Pp(), ge = n, fc.current = r, qe !== null)
    throw Error(A(261));
  return st = null, mt = 0, tt;
}
function nS() {
  for (; qe !== null; )
    Xy(qe);
}
function rS() {
  for (; qe !== null && !P2(); )
    Xy(qe);
}
function Xy(t) {
  var e = qy(t.alternate, t, pn);
  t.memoizedProps = t.pendingProps, e === null ? Gy(t) : qe = e, Bp.current = null;
}
function Gy(t) {
  var e = t;
  do {
    var n = e.alternate;
    if (t = e.return, e.flags & 32768) {
      if (n = qk(n, e), n !== null) {
        n.flags &= 32767, qe = n;
        return;
      }
      if (t !== null)
        t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null;
      else {
        tt = 6, qe = null;
        return;
      }
    } else if (n = Qk(n, e, pn), n !== null) {
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
function to(t, e, n) {
  var r = _e, i = Ln.transition;
  try {
    Ln.transition = null, _e = 1, iS(t, e, n, r);
  } finally {
    Ln.transition = i, _e = r;
  }
  return null;
}
function iS(t, e, n, r) {
  do
    gl();
  while (ci !== null);
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
  if (j2(t, o), t === st && (qe = st = null, mt = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Za || (Za = !0, Ky(Qu, function() {
    return gl(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Ln.transition, Ln.transition = null;
    var l = _e;
    _e = 1;
    var s = ge;
    ge |= 4, Bp.current = null, Zk(t, n), Uy(n, t), Ck(Wd), Ku = !!Vd, Wd = Vd = null, t.current = n, Jk(n), O2(), ge = s, _e = l, Ln.transition = o;
  } else
    t.current = n;
  if (Za && (Za = !1, ci = t, hc = i), o = t.pendingLanes, o === 0 && (Ci = null), N2(n.stateNode), en(t, We()), e !== null)
    for (r = t.onRecoverableError, n = 0; n < e.length; n++)
      i = e[n], r(i.value, { componentStack: i.stack, digest: i.digest });
  if (dc)
    throw dc = !1, t = ch, ch = null, t;
  return hc & 1 && t.tag !== 0 && gl(), o = t.pendingLanes, o & 1 ? t === fh ? Ts++ : (Ts = 0, fh = t) : Ts = 0, Li(), null;
}
function gl() {
  if (ci !== null) {
    var t = Tv(hc), e = Ln.transition, n = _e;
    try {
      if (Ln.transition = null, _e = 16 > t ? 16 : t, ci === null)
        var r = !1;
      else {
        if (t = ci, ci = null, hc = 0, ge & 6)
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
                      Es(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null)
                    f.return = c, B = f;
                  else
                    for (; B !== null; ) {
                      c = B;
                      var h = c.sibling, d = c.return;
                      if (Ly(c), c === u) {
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
                    var y = p.sibling;
                    p.sibling = null, p = y;
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
                      Es(9, o, o.return);
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
          var _ = l.child;
          if (l.subtreeFlags & 2064 && _ !== null)
            _.return = l, B = _;
          else
            e:
              for (l = m; B !== null; ) {
                if (s = B, s.flags & 2048)
                  try {
                    switch (s.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Yc(9, s);
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
        if (ge = i, Li(), Sr && typeof Sr.onPostCommitFiberRoot == "function")
          try {
            Sr.onPostCommitFiberRoot(jc, t);
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
function rm(t, e, n) {
  e = Rl(n, e), e = Py(t, e, 1), t = Si(t, e, 1), e = Lt(), t !== null && (Ea(t, 1, e), en(t, e));
}
function je(t, e, n) {
  if (t.tag === 3)
    rm(t, t, n);
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        rm(e, t, n);
        break;
      } else if (e.tag === 1) {
        var r = e.stateNode;
        if (typeof e.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ci === null || !Ci.has(r))) {
          t = Rl(n, t), t = Oy(e, t, 1), e = Si(e, t, 1), t = Lt(), e !== null && (Ea(e, 1, t), en(e, t));
          break;
        }
      }
      e = e.return;
    }
}
function oS(t, e, n) {
  var r = t.pingCache;
  r !== null && r.delete(e), e = Lt(), t.pingedLanes |= t.suspendedLanes & n, st === t && (mt & n) === n && (tt === 4 || tt === 3 && (mt & 130023424) === mt && 500 > We() - Vp ? ho(t, 0) : Up |= n), en(t, e);
}
function Qy(t, e) {
  e === 0 && (t.mode & 1 ? (e = Ua, Ua <<= 1, !(Ua & 130023424) && (Ua = 4194304)) : e = 1);
  var n = Lt();
  t = Xr(t, e), t !== null && (Ea(t, e, n), en(t, n));
}
function lS(t) {
  var e = t.memoizedState, n = 0;
  e !== null && (n = e.retryLane), Qy(t, n);
}
function sS(t, e) {
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
  r !== null && r.delete(e), Qy(t, n);
}
var qy;
qy = function(t, e, n) {
  if (t !== null)
    if (t.memoizedProps !== e.pendingProps || Zt.current)
      Kt = !0;
    else {
      if (!(t.lanes & n) && !(e.flags & 128))
        return Kt = !1, Gk(t, e, n);
      Kt = !!(t.flags & 131072);
    }
  else
    Kt = !1, Pe && e.flags & 1048576 && Jv(e, ic, e.index);
  switch (e.lanes = 0, e.tag) {
    case 2:
      var r = e.type;
      Ru(t, e), t = e.pendingProps;
      var i = bl(e, Pt.current);
      pl(e, n), i = $p(null, e, r, t, i, n);
      var o = Dp();
      return e.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (e.tag = 1, e.memoizedState = null, e.updateQueue = null, Jt(r) ? (o = !0, nc(e)) : o = !1, e.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Mp(e), i.updater = Wc, e.stateNode = i, i._reactInternals = e, Jd(e, r, t, n), e = nh(null, e, r, !0, o, n)) : (e.tag = 0, Pe && o && Cp(e), Nt(null, e, i, n), e = e.child), e;
    case 16:
      r = e.elementType;
      e: {
        switch (Ru(t, e), t = e.pendingProps, i = r._init, r = i(r._payload), e.type = r, i = e.tag = uS(r), t = Jn(r, t), i) {
          case 0:
            e = th(null, e, r, t, n);
            break e;
          case 1:
            e = Xg(null, e, r, t, n);
            break e;
          case 11:
            e = Hg(null, e, r, t, n);
            break e;
          case 14:
            e = Yg(null, e, r, Jn(r.type, t), n);
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
      return r = e.type, i = e.pendingProps, i = e.elementType === r ? i : Jn(r, i), th(t, e, r, i, n);
    case 1:
      return r = e.type, i = e.pendingProps, i = e.elementType === r ? i : Jn(r, i), Xg(t, e, r, i, n);
    case 3:
      e: {
        if (Ay(e), t === null)
          throw Error(A(387));
        r = e.pendingProps, o = e.memoizedState, i = o.element, ry(t, e), sc(e, r, null, n);
        var l = e.memoizedState;
        if (r = l.element, o.isDehydrated)
          if (o = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, e.updateQueue.baseState = o, e.memoizedState = o, e.flags & 256) {
            i = Rl(Error(A(423)), e), e = Gg(t, e, r, n, i);
            break e;
          } else if (r !== i) {
            i = Rl(Error(A(424)), e), e = Gg(t, e, r, n, i);
            break e;
          } else
            for (_n = ki(e.stateNode.containerInfo.firstChild), xn = e, Pe = !0, tr = null, n = sy(e, null, r, n), e.child = n; n; )
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
      return ay(e), t === null && qd(e), r = e.type, i = e.pendingProps, o = t !== null ? t.memoizedProps : null, l = i.children, Hd(r, i) ? l = null : o !== null && Hd(r, o) && (e.flags |= 32), Ny(t, e), Nt(t, e, l, n), e.child;
    case 6:
      return t === null && qd(e), null;
    case 13:
      return Iy(t, e, n);
    case 4:
      return Np(e, e.stateNode.containerInfo), r = e.pendingProps, t === null ? e.child = Pl(e, null, r, n) : Nt(t, e, r, n), e.child;
    case 11:
      return r = e.type, i = e.pendingProps, i = e.elementType === r ? i : Jn(r, i), Hg(t, e, r, i, n);
    case 7:
      return Nt(t, e, e.pendingProps, n), e.child;
    case 8:
      return Nt(t, e, e.pendingProps.children, n), e.child;
    case 12:
      return Nt(t, e, e.pendingProps.children, n), e.child;
    case 10:
      e: {
        if (r = e.type._context, i = e.pendingProps, o = e.memoizedProps, l = i.value, Se(oc, r._currentValue), r._currentValue = l, o !== null)
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
                      a = Vr(-1, n & -n), a.tag = 2;
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null ? a.next = a : (a.next = c.next, c.next = a), u.pending = a;
                      }
                    }
                    o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), Kd(
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
                l.lanes |= n, s = l.alternate, s !== null && (s.lanes |= n), Kd(l, n, e), l = o.sibling;
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
      return i = e.type, r = e.pendingProps.children, pl(e, n), i = Bn(i), r = r(i), e.flags |= 1, Nt(t, e, r, n), e.child;
    case 14:
      return r = e.type, i = Jn(r, e.pendingProps), i = Jn(r.type, i), Yg(t, e, r, i, n);
    case 15:
      return Ry(t, e, e.type, e.pendingProps, n);
    case 17:
      return r = e.type, i = e.pendingProps, i = e.elementType === r ? i : Jn(r, i), Ru(t, e), e.tag = 1, Jt(r) ? (t = !0, nc(e)) : t = !1, pl(e, n), oy(e, r, i), Jd(e, r, i, n), nh(null, e, r, !0, t, n);
    case 19:
      return zy(t, e, n);
    case 22:
      return My(t, e, n);
  }
  throw Error(A(156, e.tag));
};
function Ky(t, e) {
  return Sv(t, e);
}
function aS(t, e, n, r) {
  this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function zn(t, e, n, r) {
  return new aS(t, e, n, r);
}
function Xp(t) {
  return t = t.prototype, !(!t || !t.isReactComponent);
}
function uS(t) {
  if (typeof t == "function")
    return Xp(t) ? 1 : 0;
  if (t != null) {
    if (t = t.$$typeof, t === dp)
      return 11;
    if (t === hp)
      return 14;
  }
  return 2;
}
function bi(t, e) {
  var n = t.alternate;
  return n === null ? (n = zn(t.tag, e, t.key, t.mode), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 14680064, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n;
}
function Au(t, e, n, r, i, o) {
  var l = 2;
  if (r = t, typeof t == "function")
    Xp(t) && (l = 1);
  else if (typeof t == "string")
    l = 5;
  else
    e:
      switch (t) {
        case Go:
          return po(n.children, i, o, e);
        case fp:
          l = 8, i |= 8;
          break;
        case Sd:
          return t = zn(12, n, e, i | 2), t.elementType = Sd, t.lanes = o, t;
        case Cd:
          return t = zn(13, n, e, i), t.elementType = Cd, t.lanes = o, t;
        case Ed:
          return t = zn(19, n, e, i), t.elementType = Ed, t.lanes = o, t;
        case lv:
          return Gc(n, i, o, e);
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case iv:
                l = 10;
                break e;
              case ov:
                l = 9;
                break e;
              case dp:
                l = 11;
                break e;
              case hp:
                l = 14;
                break e;
              case oi:
                l = 16, r = null;
                break e;
            }
          throw Error(A(130, t == null ? t : typeof t, ""));
      }
  return e = zn(l, n, e, i), e.elementType = t, e.type = r, e.lanes = o, e;
}
function po(t, e, n, r) {
  return t = zn(7, t, r, e), t.lanes = n, t;
}
function Gc(t, e, n, r) {
  return t = zn(22, t, r, e), t.elementType = lv, t.lanes = n, t.stateNode = { isHidden: !1 }, t;
}
function Xf(t, e, n) {
  return t = zn(6, t, null, e), t.lanes = n, t;
}
function Gf(t, e, n) {
  return e = zn(4, t.children !== null ? t.children : [], t.key, e), e.lanes = n, e.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }, e;
}
function cS(t, e, n, r, i) {
  this.tag = e, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Pf(0), this.expirationTimes = Pf(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Pf(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function Gp(t, e, n, r, i, o, l, s, a) {
  return t = new cS(t, e, n, s, a), e === 1 ? (e = 1, o === !0 && (e |= 8)) : e = 0, o = zn(3, null, null, e), t.current = o, o.stateNode = t, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Mp(o), t;
}
function fS(t, e, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Xo, key: r == null ? null : "" + r, children: t, containerInfo: e, implementation: n };
}
function Zy(t) {
  if (!t)
    return Ni;
  t = t._reactInternals;
  e: {
    if (Io(t) !== t || t.tag !== 1)
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
      return Kv(t, n, e);
  }
  return e;
}
function Jy(t, e, n, r, i, o, l, s, a) {
  return t = Gp(n, r, !0, t, i, o, l, s, a), t.context = Zy(null), n = t.current, r = Lt(), i = Ei(n), o = Vr(r, i), o.callback = e ?? null, Si(n, o, i), t.current.lanes = i, Ea(t, i, r), en(t, r), t;
}
function Qc(t, e, n, r) {
  var i = e.current, o = Lt(), l = Ei(i);
  return n = Zy(n), e.context === null ? e.context = n : e.pendingContext = n, e = Vr(o, l), e.payload = { element: t }, r = r === void 0 ? null : r, r !== null && (e.callback = r), t = Si(i, e, l), t !== null && (lr(t, i, l, o), Tu(t, i, l)), l;
}
function gc(t) {
  if (t = t.current, !t.child)
    return null;
  switch (t.child.tag) {
    case 5:
      return t.child.stateNode;
    default:
      return t.child.stateNode;
  }
}
function im(t, e) {
  if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
    var n = t.retryLane;
    t.retryLane = n !== 0 && n < e ? n : e;
  }
}
function Qp(t, e) {
  im(t, e), (t = t.alternate) && im(t, e);
}
function dS() {
  return null;
}
var e_ = typeof reportError == "function" ? reportError : function(t) {
  console.error(t);
};
function qp(t) {
  this._internalRoot = t;
}
qc.prototype.render = qp.prototype.render = function(t) {
  var e = this._internalRoot;
  if (e === null)
    throw Error(A(409));
  Qc(t, e, null, null);
};
qc.prototype.unmount = qp.prototype.unmount = function() {
  var t = this._internalRoot;
  if (t !== null) {
    this._internalRoot = null;
    var e = t.containerInfo;
    bo(function() {
      Qc(null, t, null, null);
    }), e[Yr] = null;
  }
};
function qc(t) {
  this._internalRoot = t;
}
qc.prototype.unstable_scheduleHydration = function(t) {
  if (t) {
    var e = Rv();
    t = { blockedOn: null, target: t, priority: e };
    for (var n = 0; n < si.length && e !== 0 && e < si[n].priority; n++)
      ;
    si.splice(n, 0, t), n === 0 && Nv(t);
  }
};
function Kp(t) {
  return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
}
function Kc(t) {
  return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "));
}
function om() {
}
function hS(t, e, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var u = gc(l);
        o.call(u);
      };
    }
    var l = Jy(e, r, t, 0, null, !1, !1, "", om);
    return t._reactRootContainer = l, t[Yr] = l.current, Zs(t.nodeType === 8 ? t.parentNode : t), bo(), l;
  }
  for (; i = t.lastChild; )
    t.removeChild(i);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var u = gc(a);
      s.call(u);
    };
  }
  var a = Gp(t, 0, !1, null, null, !1, !1, "", om);
  return t._reactRootContainer = a, t[Yr] = a.current, Zs(t.nodeType === 8 ? t.parentNode : t), bo(function() {
    Qc(e, a, n, r);
  }), a;
}
function Zc(t, e, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var l = o;
    if (typeof i == "function") {
      var s = i;
      i = function() {
        var a = gc(l);
        s.call(a);
      };
    }
    Qc(e, l, t, i);
  } else
    l = hS(n, e, t, i, r);
  return gc(l);
}
Pv = function(t) {
  switch (t.tag) {
    case 3:
      var e = t.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var n = us(e.pendingLanes);
        n !== 0 && (mp(e, n | 1), en(e, We()), !(ge & 6) && (Ml = We() + 500, Li()));
      }
      break;
    case 13:
      bo(function() {
        var r = Xr(t, 1);
        if (r !== null) {
          var i = Lt();
          lr(r, t, 1, i);
        }
      }), Qp(t, 1);
  }
};
vp = function(t) {
  if (t.tag === 13) {
    var e = Xr(t, 134217728);
    if (e !== null) {
      var n = Lt();
      lr(e, t, 134217728, n);
    }
    Qp(t, 134217728);
  }
};
Ov = function(t) {
  if (t.tag === 13) {
    var e = Ei(t), n = Xr(t, e);
    if (n !== null) {
      var r = Lt();
      lr(n, t, e, r);
    }
    Qp(t, e);
  }
};
Rv = function() {
  return _e;
};
Mv = function(t, e) {
  var n = _e;
  try {
    return _e = t, e();
  } finally {
    _e = n;
  }
};
zd = function(t, e, n) {
  switch (e) {
    case "input":
      if (Pd(t, n), e = n.name, n.type === "radio" && e != null) {
        for (n = t; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'), e = 0; e < n.length; e++) {
          var r = n[e];
          if (r !== t && r.form === t.form) {
            var i = Uc(r);
            if (!i)
              throw Error(A(90));
            av(r), Pd(r, i);
          }
        }
      }
      break;
    case "textarea":
      cv(t, n);
      break;
    case "select":
      e = n.value, e != null && cl(t, !!n.multiple, e, !1);
  }
};
vv = Wp;
yv = bo;
var pS = { usingClientEntryPoint: !1, Events: [Ta, Zo, Uc, gv, mv, Wp] }, es = { findFiberByHostInstance: lo, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, gS = { bundleType: es.bundleType, version: es.version, rendererPackageName: es.rendererPackageName, rendererConfig: es.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Kr.ReactCurrentDispatcher, findHostInstanceByFiber: function(t) {
  return t = wv(t), t === null ? null : t.stateNode;
}, findFiberByHostInstance: es.findFiberByHostInstance || dS, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ja = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ja.isDisabled && Ja.supportsFiber)
    try {
      jc = Ja.inject(gS), Sr = Ja;
    } catch {
    }
}
Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pS;
Cn.createPortal = function(t, e) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Kp(e))
    throw Error(A(200));
  return fS(t, e, null, n);
};
Cn.createRoot = function(t, e) {
  if (!Kp(t))
    throw Error(A(299));
  var n = !1, r = "", i = e_;
  return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (r = e.identifierPrefix), e.onRecoverableError !== void 0 && (i = e.onRecoverableError)), e = Gp(t, 1, !1, null, null, n, !1, r, i), t[Yr] = e.current, Zs(t.nodeType === 8 ? t.parentNode : t), new qp(e);
};
Cn.findDOMNode = function(t) {
  if (t == null)
    return null;
  if (t.nodeType === 1)
    return t;
  var e = t._reactInternals;
  if (e === void 0)
    throw typeof t.render == "function" ? Error(A(188)) : (t = Object.keys(t).join(","), Error(A(268, t)));
  return t = wv(e), t = t === null ? null : t.stateNode, t;
};
Cn.flushSync = function(t) {
  return bo(t);
};
Cn.hydrate = function(t, e, n) {
  if (!Kc(e))
    throw Error(A(200));
  return Zc(null, t, e, !0, n);
};
Cn.hydrateRoot = function(t, e, n) {
  if (!Kp(t))
    throw Error(A(405));
  var r = n != null && n.hydratedSources || null, i = !1, o = "", l = e_;
  if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), e = Jy(e, null, t, 1, n ?? null, i, !1, o, l), t[Yr] = e.current, Zs(t), r)
    for (t = 0; t < r.length; t++)
      n = r[t], i = n._getVersion, i = i(n._source), e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [n, i] : e.mutableSourceEagerHydrationData.push(
        n,
        i
      );
  return new qc(e);
};
Cn.render = function(t, e, n) {
  if (!Kc(e))
    throw Error(A(200));
  return Zc(null, t, e, !1, n);
};
Cn.unmountComponentAtNode = function(t) {
  if (!Kc(t))
    throw Error(A(40));
  return t._reactRootContainer ? (bo(function() {
    Zc(null, null, t, !1, function() {
      t._reactRootContainer = null, t[Yr] = null;
    });
  }), !0) : !1;
};
Cn.unstable_batchedUpdates = Wp;
Cn.unstable_renderSubtreeIntoContainer = function(t, e, n, r) {
  if (!Kc(n))
    throw Error(A(200));
  if (t == null || t._reactInternals === void 0)
    throw Error(A(38));
  return Zc(t, e, n, !1, r);
};
Cn.version = "18.2.0-next-9e3b772b8-20220608";
function t_() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t_);
    } catch (t) {
      console.error(t);
    }
}
t_(), J1.exports = Cn;
var n_ = J1.exports, lm = n_;
wd.createRoot = lm.createRoot, wd.hydrateRoot = lm.hydrateRoot;
function Ir(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function r_(t, e) {
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
}, Nl = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, Zp, bt, Le, $n = 1e8, ke = 1 / $n, ph = Math.PI * 2, mS = ph / 4, vS = 0, i_ = Math.sqrt, yS = Math.cos, _S = Math.sin, at = function(e) {
  return typeof e == "string";
}, Fe = function(e) {
  return typeof e == "function";
}, Qr = function(e) {
  return typeof e == "number";
}, Jp = function(e) {
  return typeof e > "u";
}, Tr = function(e) {
  return typeof e == "object";
}, tn = function(e) {
  return e !== !1;
}, e0 = function() {
  return typeof window < "u";
}, eu = function(e) {
  return Fe(e) || at(e);
}, o_ = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, Tt = Array.isArray, gh = /(?:-?\.?\d|\.)+/gi, l_ = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, ol = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Qf = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, s_ = /[+-]=-?[.\d]+/, a_ = /[^,'"\[\]\s]+/gi, xS = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, Ae, Pn, mh, t0, Sn = {}, mc = {}, u_, c_ = function(e) {
  return (mc = To(e, Sn)) && ln;
}, n0 = function(e, n) {
  return console.warn("Invalid property", e, "set to", n, "Missing plugin? gsap.registerPlugin()");
}, vc = function(e, n) {
  return !n && console.warn(e);
}, f_ = function(e, n) {
  return e && (Sn[e] = n) && mc && (mc[e] = n) || Sn;
}, sa = function() {
  return 0;
}, wS = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, Iu = {
  suppressEvents: !0,
  kill: !1
}, kS = {
  suppressEvents: !0
}, r0 = {}, Ti = [], vh = {}, d_, mn = {}, qf = {}, sm = 30, zu = [], i0 = "", o0 = function(e) {
  var n = e[0], r, i;
  if (Tr(n) || Fe(n) || (e = [e]), !(r = (n._gsap || {}).harness)) {
    for (i = zu.length; i-- && !zu[i].targetTest(n); )
      ;
    r = zu[i];
  }
  for (i = e.length; i--; )
    e[i] && (e[i]._gsap || (e[i]._gsap = new $_(e[i], r))) || e.splice(i, 1);
  return e;
}, go = function(e) {
  return e._gsap || o0(Dn(e))[0]._gsap;
}, h_ = function(e, n, r) {
  return (r = e[n]) && Fe(r) ? e[n]() : Jp(r) && e.getAttribute && e.getAttribute(n) || r;
}, nn = function(e, n) {
  return (e = e.split(",")).forEach(n) || e;
}, Ve = function(e) {
  return Math.round(e * 1e5) / 1e5 || 0;
}, pt = function(e) {
  return Math.round(e * 1e7) / 1e7 || 0;
}, ml = function(e, n) {
  var r = n.charAt(0), i = parseFloat(n.substr(2));
  return e = parseFloat(e), r === "+" ? e + i : r === "-" ? e - i : r === "*" ? e * i : e / i;
}, SS = function(e, n) {
  for (var r = n.length, i = 0; e.indexOf(n[i]) < 0 && ++i < r; )
    ;
  return i < r;
}, yc = function() {
  var e = Ti.length, n = Ti.slice(0), r, i;
  for (vh = {}, Ti.length = 0, r = 0; r < e; r++)
    i = n[r], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
}, p_ = function(e, n, r, i) {
  Ti.length && !bt && yc(), e.render(n, r, i || bt && n < 0 && (e._initted || e._startAt)), Ti.length && !bt && yc();
}, g_ = function(e) {
  var n = parseFloat(e);
  return (n || n === 0) && (e + "").match(a_).length < 2 ? n : at(e) ? e.trim() : e;
}, m_ = function(e) {
  return e;
}, Vn = function(e, n) {
  for (var r in n)
    r in e || (e[r] = n[r]);
  return e;
}, CS = function(e) {
  return function(n, r) {
    for (var i in r)
      i in n || i === "duration" && e || i === "ease" || (n[i] = r[i]);
  };
}, To = function(e, n) {
  for (var r in n)
    e[r] = n[r];
  return e;
}, am = function t(e, n) {
  for (var r in n)
    r !== "__proto__" && r !== "constructor" && r !== "prototype" && (e[r] = Tr(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r]);
  return e;
}, _c = function(e, n) {
  var r = {}, i;
  for (i in e)
    i in n || (r[i] = e[i]);
  return r;
}, Ps = function(e) {
  var n = e.parent || Ae, r = e.keyframes ? CS(Tt(e.keyframes)) : Vn;
  if (tn(e.inherit))
    for (; n; )
      r(e, n.vars.defaults), n = n.parent || n._dp;
  return e;
}, ES = function(e, n) {
  for (var r = e.length, i = r === n.length; i && r-- && e[r] === n[r]; )
    ;
  return r < 0;
}, v_ = function(e, n, r, i, o) {
  r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
  var l = e[i], s;
  if (o)
    for (s = n[o]; l && l[o] > s; )
      l = l._prev;
  return l ? (n._next = l._next, l._next = n) : (n._next = e[r], e[r] = n), n._next ? n._next._prev = n : e[i] = n, n._prev = l, n.parent = n._dp = e, n;
}, Jc = function(e, n, r, i) {
  r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
  var o = n._prev, l = n._next;
  o ? o._next = l : e[r] === n && (e[r] = l), l ? l._prev = o : e[i] === n && (e[i] = o), n._next = n._prev = n.parent = null;
}, Ai = function(e, n) {
  e.parent && (!n || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0;
}, mo = function(e, n) {
  if (e && (!n || n._end > e._dur || n._start < 0))
    for (var r = e; r; )
      r._dirty = 1, r = r.parent;
  return e;
}, bS = function(e) {
  for (var n = e.parent; n && n.parent; )
    n._dirty = 1, n.totalDuration(), n = n.parent;
  return e;
}, yh = function(e, n, r, i) {
  return e._startAt && (bt ? e._startAt.revert(Iu) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(n, !0, i));
}, TS = function t(e) {
  return !e || e._ts && t(e.parent);
}, um = function(e) {
  return e._repeat ? Al(e._tTime, e = e.duration() + e._rDelay) * e : 0;
}, Al = function(e, n) {
  var r = Math.floor(e /= n);
  return e && r === e ? r - 1 : r;
}, xc = function(e, n) {
  return (e - n._start) * n._ts + (n._ts >= 0 ? 0 : n._dirty ? n.totalDuration() : n._tDur);
}, ef = function(e) {
  return e._end = pt(e._start + (e._tDur / Math.abs(e._ts || e._rts || ke) || 0));
}, tf = function(e, n) {
  var r = e._dp;
  return r && r.smoothChildTiming && e._ts && (e._start = pt(r._time - (e._ts > 0 ? n / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - n) / -e._ts)), ef(e), r._dirty || mo(r, e)), e;
}, y_ = function(e, n) {
  var r;
  if ((n._time || !n._dur && n._initted || n._start < e._time && (n._dur || !n.add)) && (r = xc(e.rawTime(), n), (!n._dur || Oa(0, n.totalDuration(), r) - n._tTime > ke) && n.render(r, !0)), mo(e, n)._dp && e._initted && e._time >= e._dur && e._ts) {
    if (e._dur < e.duration())
      for (r = e; r._dp; )
        r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
    e._zTime = -ke;
  }
}, xr = function(e, n, r, i) {
  return n.parent && Ai(n), n._start = pt((Qr(r) ? r : r || e !== Ae ? Tn(e, r, n) : e._time) + n._delay), n._end = pt(n._start + (n.totalDuration() / Math.abs(n.timeScale()) || 0)), v_(e, n, "_first", "_last", e._sort ? "_start" : 0), _h(n) || (e._recent = n), i || y_(e, n), e._ts < 0 && tf(e, e._tTime), e;
}, __ = function(e, n) {
  return (Sn.ScrollTrigger || n0("scrollTrigger", n)) && Sn.ScrollTrigger.create(n, e);
}, x_ = function(e, n, r, i, o) {
  if (s0(e, n, o), !e._initted)
    return 1;
  if (!r && e._pt && !bt && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && d_ !== vn.frame)
    return Ti.push(e), e._lazy = [o, i], 1;
}, PS = function t(e) {
  var n = e.parent;
  return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n));
}, _h = function(e) {
  var n = e.data;
  return n === "isFromStart" || n === "isStart";
}, OS = function(e, n, r, i) {
  var o = e.ratio, l = n < 0 || !n && (!e._start && PS(e) && !(!e._initted && _h(e)) || (e._ts < 0 || e._dp._ts < 0) && !_h(e)) ? 0 : 1, s = e._rDelay, a = 0, u, c, f;
  if (s && e._repeat && (a = Oa(0, e._tDur, n), c = Al(a, s), e._yoyo && c & 1 && (l = 1 - l), c !== Al(e._tTime, s) && (o = 1 - l, e.vars.repeatRefresh && e._initted && e.invalidate())), l !== o || bt || i || e._zTime === ke || !n && e._zTime) {
    if (!e._initted && x_(e, n, i, r, a))
      return;
    for (f = e._zTime, e._zTime = n || (r ? ke : 0), r || (r = n && !f), e.ratio = l, e._from && (l = 1 - l), e._time = 0, e._tTime = a, u = e._pt; u; )
      u.r(l, u.d), u = u._next;
    n < 0 && yh(e, n, r, !0), e._onUpdate && !r && jn(e, "onUpdate"), a && e._repeat && !r && e.parent && jn(e, "onRepeat"), (n >= e._tDur || n < 0) && e.ratio === l && (l && Ai(e, 1), !r && !bt && (jn(e, l ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()));
  } else
    e._zTime || (e._zTime = n);
}, RS = function(e, n, r) {
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
}, Il = function(e, n, r, i) {
  var o = e._repeat, l = pt(n) || 0, s = e._tTime / e._tDur;
  return s && !i && (e._time *= l / e._dur), e._dur = l, e._tDur = o ? o < 0 ? 1e10 : pt(l * (o + 1) + e._rDelay * o) : l, s > 0 && !i && tf(e, e._tTime = e._tDur * s), e.parent && ef(e), r || mo(e.parent, e), e;
}, cm = function(e) {
  return e instanceof qt ? mo(e) : Il(e, e._dur);
}, MS = {
  _start: 0,
  endTime: sa,
  totalDuration: sa
}, Tn = function t(e, n, r) {
  var i = e.labels, o = e._recent || MS, l = e.duration() >= $n ? o.endTime(!1) : e._dur, s, a, u;
  return at(n) && (isNaN(n) || n in i) ? (a = n.charAt(0), u = n.substr(-1) === "%", s = n.indexOf("="), a === "<" || a === ">" ? (s >= 0 && (n = n.replace(/=/, "")), (a === "<" ? o._start : o.endTime(o._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (u ? (s < 0 ? o : r).totalDuration() / 100 : 1)) : s < 0 ? (n in i || (i[n] = l), i[n]) : (a = parseFloat(n.charAt(s - 1) + n.substr(s + 1)), u && r && (a = a / 100 * (Tt(r) ? r[0] : r).totalDuration()), s > 1 ? t(e, n.substr(0, s - 1), r) + a : l + a)) : n == null ? l : +n;
}, Os = function(e, n, r) {
  var i = Qr(n[1]), o = (i ? 2 : 1) + (e < 2 ? 0 : 1), l = n[o], s, a;
  if (i && (l.duration = n[1]), l.parent = r, e) {
    for (s = l, a = r; a && !("immediateRender" in s); )
      s = a.vars.defaults || {}, a = tn(a.vars.inherit) && a.parent;
    l.immediateRender = tn(s.immediateRender), e < 2 ? l.runBackwards = 1 : l.startAt = n[o - 1];
  }
  return new Qe(n[0], l, n[o + 1]);
}, Fi = function(e, n) {
  return e || e === 0 ? n(e) : n;
}, Oa = function(e, n, r) {
  return r < e ? e : r > n ? n : r;
}, Et = function(e, n) {
  return !at(e) || !(n = xS.exec(e)) ? "" : n[1];
}, NS = function(e, n, r) {
  return Fi(r, function(i) {
    return Oa(e, n, i);
  });
}, xh = [].slice, w_ = function(e, n) {
  return e && Tr(e) && "length" in e && (!n && !e.length || e.length - 1 in e && Tr(e[0])) && !e.nodeType && e !== Pn;
}, AS = function(e, n, r) {
  return r === void 0 && (r = []), e.forEach(function(i) {
    var o;
    return at(i) && !n || w_(i, 1) ? (o = r).push.apply(o, Dn(i)) : r.push(i);
  }) || r;
}, Dn = function(e, n, r) {
  return Le && !n && Le.selector ? Le.selector(e) : at(e) && !r && (mh || !zl()) ? xh.call((n || t0).querySelectorAll(e), 0) : Tt(e) ? AS(e, r) : w_(e) ? xh.call(e, 0) : e ? [e] : [];
}, wh = function(e) {
  return e = Dn(e)[0] || vc("Invalid scope") || {}, function(n) {
    var r = e.current || e.nativeElement || e;
    return Dn(n, r.querySelectorAll ? r : r === e ? vc("Invalid scope") || t0.createElement("div") : e);
  };
}, k_ = function(e) {
  return e.sort(function() {
    return 0.5 - Math.random();
  });
}, S_ = function(e) {
  if (Fe(e))
    return e;
  var n = Tr(e) ? e : {
    each: e
  }, r = vo(n.ease), i = n.from || 0, o = parseFloat(n.base) || 0, l = {}, s = i > 0 && i < 1, a = isNaN(i) || s, u = n.axis, c = i, f = i;
  return at(i) ? c = f = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[i] || 0 : !s && a && (c = i[0], f = i[1]), function(h, d, g) {
    var p = (g || n).length, y = l[p], v, m, _, x, C, b, E, T, O;
    if (!y) {
      if (O = n.grid === "auto" ? 0 : (n.grid || [1, $n])[1], !O) {
        for (E = -$n; E < (E = g[O++].getBoundingClientRect().left) && O < p; )
          ;
        O--;
      }
      for (y = l[p] = [], v = a ? Math.min(O, p) * c - 0.5 : i % O, m = O === $n ? 0 : a ? p * f / O - 0.5 : i / O | 0, E = 0, T = $n, b = 0; b < p; b++)
        _ = b % O - v, x = m - (b / O | 0), y[b] = C = u ? Math.abs(u === "y" ? x : _) : i_(_ * _ + x * x), C > E && (E = C), C < T && (T = C);
      i === "random" && k_(y), y.max = E - T, y.min = T, y.v = p = (parseFloat(n.amount) || parseFloat(n.each) * (O > p ? p - 1 : u ? u === "y" ? p / O : O : Math.max(O, p / O)) || 0) * (i === "edges" ? -1 : 1), y.b = p < 0 ? o - p : o, y.u = Et(n.amount || n.each) || 0, r = r && p < 0 ? A_(r) : r;
    }
    return p = (y[h] - y.min) / y.max || 0, pt(y.b + (r ? r(p) : p) * y.v) + y.u;
  };
}, kh = function(e) {
  var n = Math.pow(10, ((e + "").split(".")[1] || "").length);
  return function(r) {
    var i = pt(Math.round(parseFloat(r) / e) * e * n);
    return (i - i % 1) / n + (Qr(r) ? 0 : Et(r));
  };
}, C_ = function(e, n) {
  var r = Tt(e), i, o;
  return !r && Tr(e) && (i = r = e.radius || $n, e.values ? (e = Dn(e.values), (o = !Qr(e[0])) && (i *= i)) : e = kh(e.increment)), Fi(n, r ? Fe(e) ? function(l) {
    return o = e(l), Math.abs(o - l) <= i ? o : l;
  } : function(l) {
    for (var s = parseFloat(o ? l.x : l), a = parseFloat(o ? l.y : 0), u = $n, c = 0, f = e.length, h, d; f--; )
      o ? (h = e[f].x - s, d = e[f].y - a, h = h * h + d * d) : h = Math.abs(e[f] - s), h < u && (u = h, c = f);
    return c = !i || u <= i ? e[c] : l, o || c === l || Qr(l) ? c : c + Et(l);
  } : kh(e));
}, E_ = function(e, n, r, i) {
  return Fi(Tt(e) ? !n : r === !0 ? !!(r = 0) : !i, function() {
    return Tt(e) ? e[~~(Math.random() * e.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((e - r / 2 + Math.random() * (n - e + r * 0.99)) / r) * r * i) / i;
  });
}, IS = function() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return function(i) {
    return n.reduce(function(o, l) {
      return l(o);
    }, i);
  };
}, zS = function(e, n) {
  return function(r) {
    return e(parseFloat(r)) + (n || Et(r));
  };
}, $S = function(e, n, r) {
  return T_(e, n, 0, 1, r);
}, b_ = function(e, n, r) {
  return Fi(r, function(i) {
    return e[~~n(i)];
  });
}, DS = function t(e, n, r) {
  var i = n - e;
  return Tt(e) ? b_(e, t(0, e.length), n) : Fi(r, function(o) {
    return (i + (o - e) % i) % i + e;
  });
}, jS = function t(e, n, r) {
  var i = n - e, o = i * 2;
  return Tt(e) ? b_(e, t(0, e.length - 1), n) : Fi(r, function(l) {
    return l = (o + (l - e) % o) % o || 0, e + (l > i ? o - l : l);
  });
}, aa = function(e) {
  for (var n = 0, r = "", i, o, l, s; ~(i = e.indexOf("random(", n)); )
    l = e.indexOf(")", i), s = e.charAt(i + 7) === "[", o = e.substr(i + 7, l - i - 7).match(s ? a_ : gh), r += e.substr(n, i - n) + E_(s ? o : +o[0], s ? 0 : +o[1], +o[2] || 1e-5), n = l + 1;
  return r + e.substr(n, e.length - n);
}, T_ = function(e, n, r, i, o) {
  var l = n - e, s = i - r;
  return Fi(o, function(a) {
    return r + ((a - e) / l * s || 0);
  });
}, LS = function t(e, n, r, i) {
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
    else if (Tt(e) && !Tt(n)) {
      for (c = [], f = e.length, h = f - 2, u = 1; u < f; u++)
        c.push(t(e[u - 1], e[u]));
      f--, o = function(g) {
        g *= f;
        var p = Math.min(h, ~~g);
        return c[p](g - p);
      }, r = n;
    } else
      i || (e = To(Tt(e) ? [] : {}, e));
    if (!c) {
      for (a in n)
        l0.call(s, e, a, "get", n[a]);
      o = function(g) {
        return c0(g, s) || (l ? e.p : e);
      };
    }
  }
  return Fi(r, o);
}, fm = function(e, n, r) {
  var i = e.labels, o = $n, l, s, a;
  for (l in i)
    s = i[l] - n, s < 0 == !!r && s && o > (s = Math.abs(s)) && (a = l, o = s);
  return a;
}, jn = function(e, n, r) {
  var i = e.vars, o = i[n], l = Le, s = e._ctx, a, u, c;
  if (o)
    return a = i[n + "Params"], u = i.callbackScope || e, r && Ti.length && yc(), s && (Le = s), c = a ? o.apply(u, a) : o.call(u), Le = l, c;
}, fs = function(e) {
  return Ai(e), e.scrollTrigger && e.scrollTrigger.kill(!!bt), e.progress() < 1 && jn(e, "onInterrupt"), e;
}, ll, P_ = [], O_ = function(e) {
  if (e0() && e) {
    e = !e.name && e.default || e;
    var n = e.name, r = Fe(e), i = n && !r && e.init ? function() {
      this._props = [];
    } : e, o = {
      init: sa,
      render: c0,
      add: l0,
      kill: tC,
      modifier: eC,
      rawVars: 0
    }, l = {
      targetTest: 0,
      get: 0,
      getSetter: u0,
      aliases: {},
      register: 0
    };
    if (zl(), e !== i) {
      if (mn[n])
        return;
      Vn(i, Vn(_c(e, o), l)), To(i.prototype, To(o, _c(e, l))), mn[i.prop = n] = i, e.targetTest && (zu.push(i), r0[n] = 1), n = (n === "css" ? "CSS" : n.charAt(0).toUpperCase() + n.substr(1)) + "Plugin";
    }
    f_(n, i), e.register && e.register(ln, i, rn);
  } else
    e && P_.push(e);
}, we = 255, ds = {
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
}, Kf = function(e, n, r) {
  return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? n + (r - n) * e * 6 : e < 0.5 ? r : e * 3 < 2 ? n + (r - n) * (2 / 3 - e) * 6 : n) * we + 0.5 | 0;
}, R_ = function(e, n, r) {
  var i = e ? Qr(e) ? [e >> 16, e >> 8 & we, e & we] : 0 : ds.black, o, l, s, a, u, c, f, h, d, g;
  if (!i) {
    if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), ds[e])
      i = ds[e];
    else if (e.charAt(0) === "#") {
      if (e.length < 6 && (o = e.charAt(1), l = e.charAt(2), s = e.charAt(3), e = "#" + o + o + l + l + s + s + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9)
        return i = parseInt(e.substr(1, 6), 16), [i >> 16, i >> 8 & we, i & we, parseInt(e.substr(7), 16) / 255];
      e = parseInt(e.substr(1), 16), i = [e >> 16, e >> 8 & we, e & we];
    } else if (e.substr(0, 3) === "hsl") {
      if (i = g = e.match(gh), !n)
        a = +i[0] % 360 / 360, u = +i[1] / 100, c = +i[2] / 100, l = c <= 0.5 ? c * (u + 1) : c + u - c * u, o = c * 2 - l, i.length > 3 && (i[3] *= 1), i[0] = Kf(a + 1 / 3, o, l), i[1] = Kf(a, o, l), i[2] = Kf(a - 1 / 3, o, l);
      else if (~e.indexOf("="))
        return i = e.match(l_), r && i.length < 4 && (i[3] = 1), i;
    } else
      i = e.match(gh) || ds.transparent;
    i = i.map(Number);
  }
  return n && !g && (o = i[0] / we, l = i[1] / we, s = i[2] / we, f = Math.max(o, l, s), h = Math.min(o, l, s), c = (f + h) / 2, f === h ? a = u = 0 : (d = f - h, u = c > 0.5 ? d / (2 - f - h) : d / (f + h), a = f === o ? (l - s) / d + (l < s ? 6 : 0) : f === l ? (s - o) / d + 2 : (o - l) / d + 4, a *= 60), i[0] = ~~(a + 0.5), i[1] = ~~(u * 100 + 0.5), i[2] = ~~(c * 100 + 0.5)), r && i.length < 4 && (i[3] = 1), i;
}, M_ = function(e) {
  var n = [], r = [], i = -1;
  return e.split(Pi).forEach(function(o) {
    var l = o.match(ol) || [];
    n.push.apply(n, l), r.push(i += l.length + 1);
  }), n.c = r, n;
}, dm = function(e, n, r) {
  var i = "", o = (e + i).match(Pi), l = n ? "hsla(" : "rgba(", s = 0, a, u, c, f;
  if (!o)
    return e;
  if (o = o.map(function(h) {
    return (h = R_(h, n, 1)) && l + (n ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3] : h.join(",")) + ")";
  }), r && (c = M_(e), a = r.c, a.join(i) !== c.c.join(i)))
    for (u = e.replace(Pi, "1").split(ol), f = u.length - 1; s < f; s++)
      i += u[s] + (~a.indexOf(s) ? o.shift() || l + "0,0,0,0)" : (c.length ? c : o.length ? o : r).shift());
  if (!u)
    for (u = e.split(Pi), f = u.length - 1; s < f; s++)
      i += u[s] + o[s];
  return i + u[f];
}, Pi = function() {
  var t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
  for (e in ds)
    t += "|" + e + "\\b";
  return new RegExp(t + ")", "gi");
}(), FS = /hsl[a]?\(/, N_ = function(e) {
  var n = e.join(" "), r;
  if (Pi.lastIndex = 0, Pi.test(n))
    return r = FS.test(n), e[1] = dm(e[1], r), e[0] = dm(e[0], r, M_(e[1])), !0;
}, ua, vn = function() {
  var t = Date.now, e = 500, n = 33, r = t(), i = r, o = 1e3 / 240, l = o, s = [], a, u, c, f, h, d, g = function p(y) {
    var v = t() - i, m = y === !0, _, x, C, b;
    if (v > e && (r += v - n), i += v, C = i - r, _ = C - l, (_ > 0 || m) && (b = ++f.frame, h = C - f.time * 1e3, f.time = C = C / 1e3, l += _ + (_ >= o ? 4 : o - _), x = 1), m || (a = u(p)), x)
      for (d = 0; d < s.length; d++)
        s[d](C, h, b, y);
  };
  return f = {
    time: 0,
    frame: 0,
    tick: function() {
      g(!0);
    },
    deltaRatio: function(y) {
      return h / (1e3 / (y || 60));
    },
    wake: function() {
      u_ && (!mh && e0() && (Pn = mh = window, t0 = Pn.document || {}, Sn.gsap = ln, (Pn.gsapVersions || (Pn.gsapVersions = [])).push(ln.version), c_(mc || Pn.GreenSockGlobals || !Pn.gsap && Pn || {}), c = Pn.requestAnimationFrame, P_.forEach(O_)), a && f.sleep(), u = c || function(y) {
        return setTimeout(y, l - f.time * 1e3 + 1 | 0);
      }, ua = 1, g(2));
    },
    sleep: function() {
      (c ? Pn.cancelAnimationFrame : clearTimeout)(a), ua = 0, u = sa;
    },
    lagSmoothing: function(y, v) {
      e = y || 1 / 0, n = Math.min(v || 33, e);
    },
    fps: function(y) {
      o = 1e3 / (y || 240), l = f.time * 1e3 + o;
    },
    add: function(y, v, m) {
      var _ = v ? function(x, C, b, E) {
        y(x, C, b, E), f.remove(_);
      } : y;
      return f.remove(y), s[m ? "unshift" : "push"](_), zl(), _;
    },
    remove: function(y, v) {
      ~(v = s.indexOf(y)) && s.splice(v, 1) && d >= v && d--;
    },
    _listeners: s
  }, f;
}(), zl = function() {
  return !ua && vn.wake();
}, ae = {}, BS = /^[\d.\-M][\d.\-,\s]/, US = /["']/g, VS = function(e) {
  for (var n = {}, r = e.substr(1, e.length - 3).split(":"), i = r[0], o = 1, l = r.length, s, a, u; o < l; o++)
    a = r[o], s = o !== l - 1 ? a.lastIndexOf(",") : a.length, u = a.substr(0, s), n[i] = isNaN(u) ? u.replace(US, "").trim() : +u, i = a.substr(s + 1).trim();
  return n;
}, WS = function(e) {
  var n = e.indexOf("(") + 1, r = e.indexOf(")"), i = e.indexOf("(", n);
  return e.substring(n, ~i && i < r ? e.indexOf(")", r + 1) : r);
}, HS = function(e) {
  var n = (e + "").split("("), r = ae[n[0]];
  return r && n.length > 1 && r.config ? r.config.apply(null, ~e.indexOf("{") ? [VS(n[1])] : WS(e).split(",").map(g_)) : ae._CE && BS.test(e) ? ae._CE("", e) : r;
}, A_ = function(e) {
  return function(n) {
    return 1 - e(1 - n);
  };
}, I_ = function t(e, n) {
  for (var r = e._first, i; r; )
    r instanceof qt ? t(r, n) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== n && (r.timeline ? t(r.timeline, n) : (i = r._ease, r._ease = r._yEase, r._yEase = i, r._yoyo = n)), r = r._next;
}, vo = function(e, n) {
  return e && (Fe(e) ? e : ae[e] || HS(e)) || n;
}, zo = function(e, n, r, i) {
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
}, z_ = function(e) {
  return function(n) {
    return n < 0.5 ? (1 - e(1 - n * 2)) / 2 : 0.5 + e((n - 0.5) * 2) / 2;
  };
}, Zf = function t(e, n, r) {
  var i = n >= 1 ? n : 1, o = (r || (e ? 0.3 : 0.45)) / (n < 1 ? n : 1), l = o / ph * (Math.asin(1 / i) || 0), s = function(c) {
    return c === 1 ? 1 : i * Math.pow(2, -10 * c) * _S((c - l) * o) + 1;
  }, a = e === "out" ? s : e === "in" ? function(u) {
    return 1 - s(1 - u);
  } : z_(s);
  return o = ph / o, a.config = function(u, c) {
    return t(e, u, c);
  }, a;
}, Jf = function t(e, n) {
  n === void 0 && (n = 1.70158);
  var r = function(l) {
    return l ? --l * l * ((n + 1) * l + n) + 1 : 0;
  }, i = e === "out" ? r : e === "in" ? function(o) {
    return 1 - r(1 - o);
  } : z_(r);
  return i.config = function(o) {
    return t(e, o);
  }, i;
};
nn("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
  var n = e < 5 ? e + 1 : e;
  zo(t + ",Power" + (n - 1), e ? function(r) {
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
zo("Elastic", Zf("in"), Zf("out"), Zf());
(function(t, e) {
  var n = 1 / e, r = 2 * n, i = 2.5 * n, o = function(s) {
    return s < n ? t * s * s : s < r ? t * Math.pow(s - 1.5 / e, 2) + 0.75 : s < i ? t * (s -= 2.25 / e) * s + 0.9375 : t * Math.pow(s - 2.625 / e, 2) + 0.984375;
  };
  zo("Bounce", function(l) {
    return 1 - o(1 - l);
  }, o);
})(7.5625, 2.75);
zo("Expo", function(t) {
  return t ? Math.pow(2, 10 * (t - 1)) : 0;
});
zo("Circ", function(t) {
  return -(i_(1 - t * t) - 1);
});
zo("Sine", function(t) {
  return t === 1 ? 1 : -yS(t * mS) + 1;
});
zo("Back", Jf("in"), Jf("out"), Jf());
ae.SteppedEase = ae.steps = Sn.SteppedEase = {
  config: function(e, n) {
    e === void 0 && (e = 1);
    var r = 1 / e, i = e + (n ? 0 : 1), o = n ? 1 : 0, l = 1 - ke;
    return function(s) {
      return ((i * Oa(0, l, s) | 0) + o) * r;
    };
  }
};
Nl.ease = ae["quad.out"];
nn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
  return i0 += t + "," + t + "Params,";
});
var $_ = function(e, n) {
  this.id = vS++, e._gsap = this, this.target = e, this.harness = n, this.get = n ? n.get : h_, this.set = n ? n.getSetter : u0;
}, ca = /* @__PURE__ */ function() {
  function t(n) {
    this.vars = n, this._delay = +n.delay || 0, (this._repeat = n.repeat === 1 / 0 ? -2 : n.repeat || 0) && (this._rDelay = n.repeatDelay || 0, this._yoyo = !!n.yoyo || !!n.yoyoEase), this._ts = 1, Il(this, +n.duration, 1, 1), this.data = n.data, Le && (this._ctx = Le, Le.data.push(this)), ua || vn.wake();
  }
  var e = t.prototype;
  return e.delay = function(r) {
    return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay), this._delay = r, this) : this._delay;
  }, e.duration = function(r) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur;
  }, e.totalDuration = function(r) {
    return arguments.length ? (this._dirty = 0, Il(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, e.totalTime = function(r, i) {
    if (zl(), !arguments.length)
      return this._tTime;
    var o = this._dp;
    if (o && o.smoothChildTiming && this._ts) {
      for (tf(this, r), !o._dp || o.parent || y_(o, this); o && o.parent; )
        o.parent._time !== o._start + (o._ts >= 0 ? o._tTime / o._ts : (o.totalDuration() - o._tTime) / -o._ts) && o.totalTime(o._tTime, !0), o = o.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && xr(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== r || !this._dur && !i || this._initted && Math.abs(this._zTime) === ke || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r), p_(this, r, i)), this;
  }, e.time = function(r, i) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + um(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), i) : this._time;
  }, e.totalProgress = function(r, i) {
    return arguments.length ? this.totalTime(this.totalDuration() * r, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
  }, e.progress = function(r, i) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + um(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
  }, e.iteration = function(r, i) {
    var o = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (r - 1) * o, i) : this._repeat ? Al(this._tTime, o) + 1 : 1;
  }, e.timeScale = function(r) {
    if (!arguments.length)
      return this._rts === -ke ? 0 : this._rts;
    if (this._rts === r)
      return this;
    var i = this.parent && this._ts ? xc(this.parent._time, this) : this._tTime;
    return this._rts = +r || 0, this._ts = this._ps || r === -ke ? 0 : this._rts, this.totalTime(Oa(-Math.abs(this._delay), this._tDur, i), !0), ef(this), bS(this);
  }, e.paused = function(r) {
    return arguments.length ? (this._ps !== r && (this._ps = r, r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (zl(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== ke && (this._tTime -= ke)))), this) : this._ps;
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
    return i ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? xc(i.rawTime(r), this) : this._tTime : this._tTime;
  }, e.revert = function(r) {
    r === void 0 && (r = kS);
    var i = bt;
    return bt = r, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(r), this.totalTime(-0.01, r.suppressEvents)), this.data !== "nested" && r.kill !== !1 && this.kill(), bt = i, this;
  }, e.globalTime = function(r) {
    for (var i = this, o = arguments.length ? r : i.rawTime(); i; )
      o = i._start + o / (i._ts || 1), i = i._dp;
    return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 / 0 : this._sat.globalTime(r) : o;
  }, e.repeat = function(r) {
    return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r, cm(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, e.repeatDelay = function(r) {
    if (arguments.length) {
      var i = this._time;
      return this._rDelay = r, cm(this), i ? this.time(i) : this;
    }
    return this._rDelay;
  }, e.yoyo = function(r) {
    return arguments.length ? (this._yoyo = r, this) : this._yoyo;
  }, e.seek = function(r, i) {
    return this.totalTime(Tn(this, r), tn(i));
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
      var l = Fe(r) ? r : m_, s = function() {
        var u = i.then;
        i.then = null, Fe(l) && (l = l(i)) && (l.then || l === i) && (i.then = u), o(l), i.then = u;
      };
      i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? s() : i._prom = s;
    });
  }, e.kill = function() {
    fs(this);
  }, t;
}();
Vn(ca.prototype, {
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
  r_(e, t);
  function e(r, i) {
    var o;
    return r === void 0 && (r = {}), o = t.call(this, r) || this, o.labels = {}, o.smoothChildTiming = !!r.smoothChildTiming, o.autoRemoveChildren = !!r.autoRemoveChildren, o._sort = tn(r.sortChildren), Ae && xr(r.parent || Ae, Ir(o), i), r.reversed && o.reverse(), r.paused && o.paused(!0), r.scrollTrigger && __(Ir(o), r.scrollTrigger), o;
  }
  var n = e.prototype;
  return n.to = function(i, o, l) {
    return Os(0, arguments, this), this;
  }, n.from = function(i, o, l) {
    return Os(1, arguments, this), this;
  }, n.fromTo = function(i, o, l, s) {
    return Os(2, arguments, this), this;
  }, n.set = function(i, o, l) {
    return o.duration = 0, o.parent = this, Ps(o).repeatDelay || (o.repeat = 0), o.immediateRender = !!o.immediateRender, new Qe(i, o, Tn(this, l), 1), this;
  }, n.call = function(i, o, l) {
    return xr(this, Qe.delayedCall(0, i, o), l);
  }, n.staggerTo = function(i, o, l, s, a, u, c) {
    return l.duration = o, l.stagger = l.stagger || s, l.onComplete = u, l.onCompleteParams = c, l.parent = this, new Qe(i, l, Tn(this, a)), this;
  }, n.staggerFrom = function(i, o, l, s, a, u, c) {
    return l.runBackwards = 1, Ps(l).immediateRender = tn(l.immediateRender), this.staggerTo(i, o, l, s, a, u, c);
  }, n.staggerFromTo = function(i, o, l, s, a, u, c, f) {
    return s.startAt = l, Ps(s).immediateRender = tn(s.immediateRender), this.staggerTo(i, o, s, a, u, c, f);
  }, n.render = function(i, o, l) {
    var s = this._time, a = this._dirty ? this.totalDuration() : this._tDur, u = this._dur, c = i <= 0 ? 0 : pt(i), f = this._zTime < 0 != i < 0 && (this._initted || !u), h, d, g, p, y, v, m, _, x, C, b, E;
    if (this !== Ae && c > a && i >= 0 && (c = a), c !== this._tTime || l || f) {
      if (s !== this._time && u && (c += this._time - s, i += this._time - s), h = c, x = this._start, _ = this._ts, v = !_, f && (u || (s = this._zTime), (i || !o) && (this._zTime = i)), this._repeat) {
        if (b = this._yoyo, y = u + this._rDelay, this._repeat < -1 && i < 0)
          return this.totalTime(y * 100 + i, o, l);
        if (h = pt(c % y), c === a ? (p = this._repeat, h = u) : (p = ~~(c / y), p && p === c / y && (h = u, p--), h > u && (h = u)), C = Al(this._tTime, y), !s && this._tTime && C !== p && this._tTime - C * y - this._dur <= 0 && (C = p), b && p & 1 && (h = u - h, E = 1), p !== C && !this._lock) {
          var T = b && C & 1, O = T === (b && p & 1);
          if (p < C && (T = !T), s = T ? 0 : c % u ? u : c, this._lock = 1, this.render(s || (E ? 0 : pt(p * y)), o, !u)._lock = 0, this._tTime = c, !o && this.parent && jn(this, "onRepeat"), this.vars.repeatRefresh && !E && (this.invalidate()._lock = 1), s && s !== this._time || v !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (u = this._dur, a = this._tDur, O && (this._lock = 2, s = T ? u : -1e-4, this.render(s, !0), this.vars.repeatRefresh && !E && this.invalidate()), this._lock = 0, !this._ts && !v)
            return this;
          I_(this, E);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (m = RS(this, pt(s), pt(h)), m && (c -= h - (h = m._start))), this._tTime = c, this._time = h, this._act = !_, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, s = 0), !s && h && !o && !p && (jn(this, "onStart"), this._tTime !== c))
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
            if (d.render(d._ts > 0 ? (P - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (P - d._start) * d._ts, o, l || bt && (d._initted || d._startAt)), h !== this._time || !this._ts && !v) {
              m = 0, g && (c += this._zTime = P ? -ke : ke);
              break;
            }
          }
          d = g;
        }
      }
      if (m && !o && (this.pause(), m.render(h >= s ? 0 : -ke)._zTime = h >= s ? 1 : -1, this._ts))
        return this._start = x, ef(this), this.render(i, o, l);
      this._onUpdate && !o && jn(this, "onUpdate", !0), (c === a && this._tTime >= this.totalDuration() || !c && s) && (x === this._start || Math.abs(_) !== Math.abs(this._ts)) && (this._lock || ((i || !u) && (c === a && this._ts > 0 || !c && this._ts < 0) && Ai(this, 1), !o && !(i < 0 && !s) && (c || s || !a) && (jn(this, c === a && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(c < a && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, n.add = function(i, o) {
    var l = this;
    if (Qr(o) || (o = Tn(this, o, i)), !(i instanceof ca)) {
      if (Tt(i))
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
    i === void 0 && (i = !0), o === void 0 && (o = !0), l === void 0 && (l = !0), s === void 0 && (s = -$n);
    for (var a = [], u = this._first; u; )
      u._start >= s && (u instanceof Qe ? o && a.push(u) : (l && a.push(u), i && a.push.apply(a, u.getChildren(!0, o, l)))), u = u._next;
    return a;
  }, n.getById = function(i) {
    for (var o = this.getChildren(1, 1, 1), l = o.length; l--; )
      if (o[l].vars.id === i)
        return o[l];
  }, n.remove = function(i) {
    return at(i) ? this.removeLabel(i) : Fe(i) ? this.killTweensOf(i) : (Jc(this, i), i === this._recent && (this._recent = this._last), mo(this));
  }, n.totalTime = function(i, o) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = pt(vn.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), t.prototype.totalTime.call(this, i, o), this._forcing = 0, this) : this._tTime;
  }, n.addLabel = function(i, o) {
    return this.labels[i] = Tn(this, o), this;
  }, n.removeLabel = function(i) {
    return delete this.labels[i], this;
  }, n.addPause = function(i, o, l) {
    var s = Qe.delayedCall(0, o || sa, l);
    return s.data = "isPause", this._hasPause = 1, xr(this, s, Tn(this, i));
  }, n.removePause = function(i) {
    var o = this._first;
    for (i = Tn(this, i); o; )
      o._start === i && o.data === "isPause" && Ai(o), o = o._next;
  }, n.killTweensOf = function(i, o, l) {
    for (var s = this.getTweensOf(i, l), a = s.length; a--; )
      fi !== s[a] && s[a].kill(i, o);
    return this;
  }, n.getTweensOf = function(i, o) {
    for (var l = [], s = Dn(i), a = this._first, u = Qr(o), c; a; )
      a instanceof Qe ? SS(a._targets, s) && (u ? (!fi || a._initted && a._ts) && a.globalTime(0) <= o && a.globalTime(a.totalDuration()) > o : !o || a.isActive()) && l.push(a) : (c = a.getTweensOf(s, o)).length && l.push.apply(l, c), a = a._next;
    return l;
  }, n.tweenTo = function(i, o) {
    o = o || {};
    var l = this, s = Tn(l, i), a = o, u = a.startAt, c = a.onStart, f = a.onStartParams, h = a.immediateRender, d, g = Qe.to(l, Vn({
      ease: o.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: s,
      overwrite: "auto",
      duration: o.duration || Math.abs((s - (u && "time" in u ? u.time : l._time)) / l.timeScale()) || ke,
      onStart: function() {
        if (l.pause(), !d) {
          var y = o.duration || Math.abs((s - (u && "time" in u ? u.time : l._time)) / l.timeScale());
          g._dur !== y && Il(g, y, 0, 1).render(g._time, !0, !0), d = 1;
        }
        c && c.apply(g, f || []);
      }
    }, o));
    return h ? g.render(0) : g;
  }, n.tweenFromTo = function(i, o, l) {
    return this.tweenTo(o, Vn({
      startAt: {
        time: Tn(this, i)
      }
    }, l));
  }, n.recent = function() {
    return this._recent;
  }, n.nextLabel = function(i) {
    return i === void 0 && (i = this._time), fm(this, Tn(this, i));
  }, n.previousLabel = function(i) {
    return i === void 0 && (i = this._time), fm(this, Tn(this, i), 1);
  }, n.currentLabel = function(i) {
    return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + ke);
  }, n.shiftChildren = function(i, o, l) {
    l === void 0 && (l = 0);
    for (var s = this._first, a = this.labels, u; s; )
      s._start >= l && (s._start += i, s._end += i), s = s._next;
    if (o)
      for (u in a)
        a[u] >= l && (a[u] += i);
    return mo(this);
  }, n.invalidate = function(i) {
    var o = this._first;
    for (this._lock = 0; o; )
      o.invalidate(i), o = o._next;
    return t.prototype.invalidate.call(this, i);
  }, n.clear = function(i) {
    i === void 0 && (i = !0);
    for (var o = this._first, l; o; )
      l = o._next, this.remove(o), o = l;
    return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), mo(this);
  }, n.totalDuration = function(i) {
    var o = 0, l = this, s = l._last, a = $n, u, c, f;
    if (arguments.length)
      return l.timeScale((l._repeat < 0 ? l.duration() : l.totalDuration()) / (l.reversed() ? -i : i));
    if (l._dirty) {
      for (f = l.parent; s; )
        u = s._prev, s._dirty && s.totalDuration(), c = s._start, c > a && l._sort && s._ts && !l._lock ? (l._lock = 1, xr(l, s, c - s._delay, 1)._lock = 0) : a = c, c < 0 && s._ts && (o -= c, (!f && !l._dp || f && f.smoothChildTiming) && (l._start += c / l._ts, l._time -= c, l._tTime -= c), l.shiftChildren(-c, !1, -1 / 0), a = 0), s._end > o && s._ts && (o = s._end), s = u;
      Il(l, l === Ae && l._time > o ? l._time : o, 1, 1), l._dirty = 0;
    }
    return l._tDur;
  }, e.updateRoot = function(i) {
    if (Ae._ts && (p_(Ae, xc(i, Ae)), d_ = vn.frame), vn.frame >= sm) {
      sm += wn.autoSleep || 120;
      var o = Ae._first;
      if ((!o || !o._ts) && wn.autoSleep && vn._listeners.length < 2) {
        for (; o && !o._ts; )
          o = o._next;
        o || vn.sleep();
      }
    }
  }, e;
}(ca);
Vn(qt.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var YS = function(e, n, r, i, o, l, s) {
  var a = new rn(this._pt, e, n, 0, 1, U_, null, o), u = 0, c = 0, f, h, d, g, p, y, v, m;
  for (a.b = r, a.e = i, r += "", i += "", (v = ~i.indexOf("random(")) && (i = aa(i)), l && (m = [r, i], l(m, e, n), r = m[0], i = m[1]), h = r.match(Qf) || []; f = Qf.exec(i); )
    g = f[0], p = i.substring(u, f.index), d ? d = (d + 1) % 5 : p.substr(-5) === "rgba(" && (d = 1), g !== h[c++] && (y = parseFloat(h[c - 1]) || 0, a._pt = {
      _next: a._pt,
      p: p || c === 1 ? p : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: y,
      c: g.charAt(1) === "=" ? ml(y, g) - y : parseFloat(g) - y,
      m: d && d < 4 ? Math.round : 0
    }, u = Qf.lastIndex);
  return a.c = u < i.length ? i.substring(u, i.length) : "", a.fp = s, (s_.test(i) || v) && (a.e = 0), this._pt = a, a;
}, l0 = function(e, n, r, i, o, l, s, a, u, c) {
  Fe(i) && (i = i(o || 0, e, l));
  var f = e[n], h = r !== "get" ? r : Fe(f) ? u ? e[n.indexOf("set") || !Fe(e["get" + n.substr(3)]) ? n : "get" + n.substr(3)](u) : e[n]() : f, d = Fe(f) ? u ? KS : F_ : a0, g;
  if (at(i) && (~i.indexOf("random(") && (i = aa(i)), i.charAt(1) === "=" && (g = ml(h, i) + (Et(h) || 0), (g || g === 0) && (i = g))), !c || h !== i || Sh)
    return !isNaN(h * i) && i !== "" ? (g = new rn(this._pt, e, n, +h || 0, i - (h || 0), typeof f == "boolean" ? JS : B_, 0, d), u && (g.fp = u), s && g.modifier(s, this, e), this._pt = g) : (!f && !(n in e) && n0(n, i), YS.call(this, e, n, h, i, d, a || wn.stringFilter, u));
}, XS = function(e, n, r, i, o) {
  if (Fe(e) && (e = Rs(e, o, n, r, i)), !Tr(e) || e.style && e.nodeType || Tt(e) || o_(e))
    return at(e) ? Rs(e, o, n, r, i) : e;
  var l = {}, s;
  for (s in e)
    l[s] = Rs(e[s], o, n, r, i);
  return l;
}, D_ = function(e, n, r, i, o, l) {
  var s, a, u, c;
  if (mn[e] && (s = new mn[e]()).init(o, s.rawVars ? n[e] : XS(n[e], i, o, l, r), r, i, l) !== !1 && (r._pt = a = new rn(r._pt, o, e, 0, 1, s.render, s, 0, s.priority), r !== ll))
    for (u = r._ptLookup[r._targets.indexOf(o)], c = s._props.length; c--; )
      u[s._props[c]] = a;
  return s;
}, fi, Sh, s0 = function t(e, n, r) {
  var i = e.vars, o = i.ease, l = i.startAt, s = i.immediateRender, a = i.lazy, u = i.onUpdate, c = i.onUpdateParams, f = i.callbackScope, h = i.runBackwards, d = i.yoyoEase, g = i.keyframes, p = i.autoRevert, y = e._dur, v = e._startAt, m = e._targets, _ = e.parent, x = _ && _.data === "nested" ? _.vars.targets : m, C = e._overwrite === "auto" && !Zp, b = e.timeline, E, T, O, P, j, z, Q, I, D, W, L, M, $;
  if (b && (!g || !o) && (o = "none"), e._ease = vo(o, Nl.ease), e._yEase = d ? A_(vo(d === !0 ? o : d, Nl.ease)) : 0, d && e._yoyo && !e._repeat && (d = e._yEase, e._yEase = e._ease, e._ease = d), e._from = !b && !!i.runBackwards, !b || g && !i.stagger) {
    if (I = m[0] ? go(m[0]).harness : 0, M = I && i[I.prop], E = _c(i, r0), v && (v._zTime < 0 && v.progress(1), n < 0 && h && s && !p ? v.render(-1, !0) : v.revert(h && y ? Iu : wS), v._lazy = 0), l) {
      if (Ai(e._startAt = Qe.set(m, Vn({
        data: "isStart",
        overwrite: !1,
        parent: _,
        immediateRender: !0,
        lazy: !v && tn(a),
        startAt: null,
        delay: 0,
        onUpdate: u,
        onUpdateParams: c,
        callbackScope: f,
        stagger: 0
      }, l))), e._startAt._dp = 0, e._startAt._sat = e, n < 0 && (bt || !s && !p) && e._startAt.revert(Iu), s && y && n <= 0 && r <= 0) {
        n && (e._zTime = n);
        return;
      }
    } else if (h && y && !v) {
      if (n && (s = !1), O = Vn({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: s && !v && tn(a),
        immediateRender: s,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: _
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, E), M && (O[I.prop] = M), Ai(e._startAt = Qe.set(m, O)), e._startAt._dp = 0, e._startAt._sat = e, n < 0 && (bt ? e._startAt.revert(Iu) : e._startAt.render(-1, !0)), e._zTime = n, !s)
        t(e._startAt, ke, ke);
      else if (!n)
        return;
    }
    for (e._pt = e._ptCache = 0, a = y && tn(a) || a && !y, T = 0; T < m.length; T++) {
      if (j = m[T], Q = j._gsap || o0(m)[T]._gsap, e._ptLookup[T] = W = {}, vh[Q.id] && Ti.length && yc(), L = x === m ? T : x.indexOf(j), I && (D = new I()).init(j, M || E, e, L, x) !== !1 && (e._pt = P = new rn(e._pt, j, D.name, 0, 1, D.render, D, 0, D.priority), D._props.forEach(function(S) {
        W[S] = P;
      }), D.priority && (z = 1)), !I || M)
        for (O in E)
          mn[O] && (D = D_(O, E, e, L, j, x)) ? D.priority && (z = 1) : W[O] = P = l0.call(e, j, O, "get", E[O], L, x, 0, i.stringFilter);
      e._op && e._op[T] && e.kill(j, e._op[T]), C && e._pt && (fi = e, Ae.killTweensOf(j, W, e.globalTime(n)), $ = !e.parent, fi = 0), e._pt && a && (vh[Q.id] = 1);
    }
    z && V_(e), e._onInit && e._onInit(e);
  }
  e._onUpdate = u, e._initted = (!e._op || e._pt) && !$, g && n <= 0 && b.render($n, !0, !0);
}, GS = function(e, n, r, i, o, l, s) {
  var a = (e._pt && e._ptCache || (e._ptCache = {}))[n], u, c, f, h;
  if (!a)
    for (a = e._ptCache[n] = [], f = e._ptLookup, h = e._targets.length; h--; ) {
      if (u = f[h][n], u && u.d && u.d._pt)
        for (u = u.d._pt; u && u.p !== n && u.fp !== n; )
          u = u._next;
      if (!u)
        return Sh = 1, e.vars[n] = "+=0", s0(e, s), Sh = 0, 1;
      a.push(u);
    }
  for (h = a.length; h--; )
    c = a[h], u = c._pt || c, u.s = (i || i === 0) && !o ? i : u.s + (i || 0) + l * u.c, u.c = r - u.s, c.e && (c.e = Ve(r) + Et(c.e)), c.b && (c.b = u.s + Et(c.b));
}, QS = function(e, n) {
  var r = e[0] ? go(e[0]).harness : 0, i = r && r.aliases, o, l, s, a;
  if (!i)
    return n;
  o = To({}, n);
  for (l in i)
    if (l in o)
      for (a = i[l].split(","), s = a.length; s--; )
        o[a[s]] = o[l];
  return o;
}, qS = function(e, n, r, i) {
  var o = n.ease || i || "power1.inOut", l, s;
  if (Tt(n))
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
}, Rs = function(e, n, r, i, o) {
  return Fe(e) ? e.call(n, r, i, o) : at(e) && ~e.indexOf("random(") ? aa(e) : e;
}, j_ = i0 + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", L_ = {};
nn(j_ + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
  return L_[t] = 1;
});
var Qe = /* @__PURE__ */ function(t) {
  r_(e, t);
  function e(r, i, o, l) {
    var s;
    typeof i == "number" && (o.duration = i, i = o, o = null), s = t.call(this, l ? i : Ps(i)) || this;
    var a = s.vars, u = a.duration, c = a.delay, f = a.immediateRender, h = a.stagger, d = a.overwrite, g = a.keyframes, p = a.defaults, y = a.scrollTrigger, v = a.yoyoEase, m = i.parent || Ae, _ = (Tt(r) || o_(r) ? Qr(r[0]) : "length" in i) ? [r] : Dn(r), x, C, b, E, T, O, P, j;
    if (s._targets = _.length ? o0(_) : vc("GSAP target " + r + " not found. https://greensock.com", !wn.nullTargetWarn) || [], s._ptLookup = [], s._overwrite = d, g || h || eu(u) || eu(c)) {
      if (i = s.vars, x = s.timeline = new qt({
        data: "nested",
        defaults: p || {},
        targets: m && m.data === "nested" ? m.vars.targets : _
      }), x.kill(), x.parent = x._dp = Ir(s), x._start = 0, h || eu(u) || eu(c)) {
        if (E = _.length, P = h && S_(h), Tr(h))
          for (T in h)
            ~j_.indexOf(T) && (j || (j = {}), j[T] = h[T]);
        for (C = 0; C < E; C++)
          b = _c(i, L_), b.stagger = 0, v && (b.yoyoEase = v), j && To(b, j), O = _[C], b.duration = +Rs(u, Ir(s), C, O, _), b.delay = (+Rs(c, Ir(s), C, O, _) || 0) - s._delay, !h && E === 1 && b.delay && (s._delay = c = b.delay, s._start += c, b.delay = 0), x.to(O, b, P ? P(C, O, _) : 0), x._ease = ae.none;
        x.duration() ? u = c = 0 : s.timeline = 0;
      } else if (g) {
        Ps(Vn(x.vars.defaults, {
          ease: "none"
        })), x._ease = vo(g.ease || i.ease || "none");
        var z = 0, Q, I, D;
        if (Tt(g))
          g.forEach(function(W) {
            return x.to(_, W, ">");
          }), x.duration();
        else {
          b = {};
          for (T in g)
            T === "ease" || T === "easeEach" || qS(T, g[T], b, g.easeEach);
          for (T in b)
            for (Q = b[T].sort(function(W, L) {
              return W.t - L.t;
            }), z = 0, C = 0; C < Q.length; C++)
              I = Q[C], D = {
                ease: I.e,
                duration: (I.t - (C ? Q[C - 1].t : 0)) / 100 * u
              }, D[T] = I.v, x.to(_, D, z), z += D.duration;
          x.duration() < u && x.to({}, {
            duration: u - x.duration()
          });
        }
      }
      u || s.duration(u = x.duration());
    } else
      s.timeline = 0;
    return d === !0 && !Zp && (fi = Ir(s), Ae.killTweensOf(_), fi = 0), xr(m, Ir(s), o), i.reversed && s.reverse(), i.paused && s.paused(!0), (f || !u && !g && s._start === pt(m._time) && tn(f) && TS(Ir(s)) && m.data !== "nested") && (s._tTime = -ke, s.render(Math.max(0, -c) || 0)), y && __(Ir(s), y), s;
  }
  var n = e.prototype;
  return n.render = function(i, o, l) {
    var s = this._time, a = this._tDur, u = this._dur, c = i < 0, f = i > a - ke && !c ? a : i < ke ? 0 : i, h, d, g, p, y, v, m, _, x;
    if (!u)
      OS(this, i, o, l);
    else if (f !== this._tTime || !i || l || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== c) {
      if (h = f, _ = this.timeline, this._repeat) {
        if (p = u + this._rDelay, this._repeat < -1 && c)
          return this.totalTime(p * 100 + i, o, l);
        if (h = pt(f % p), f === a ? (g = this._repeat, h = u) : (g = ~~(f / p), g && g === f / p && (h = u, g--), h > u && (h = u)), v = this._yoyo && g & 1, v && (x = this._yEase, h = u - h), y = Al(this._tTime, p), h === s && !l && this._initted)
          return this._tTime = f, this;
        g !== y && (_ && this._yEase && I_(_, v), this.vars.repeatRefresh && !v && !this._lock && (this._lock = l = 1, this.render(pt(p * g), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (x_(this, c ? i : h, l, o, f))
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
      _ && _.render(i < 0 ? i : !h && v ? -ke : _._dur * _._ease(h / this._dur), o, l) || this._startAt && (this._zTime = i), this._onUpdate && !o && (c && yh(this, i, o, l), jn(this, "onUpdate")), this._repeat && g !== y && this.vars.onRepeat && !o && this.parent && jn(this, "onRepeat"), (f === this._tDur || !f) && this._tTime === f && (c && !this._onUpdate && yh(this, i, !0, !0), (i || !u) && (f === this._tDur && this._ts > 0 || !f && this._ts < 0) && Ai(this, 1), !o && !(c && !s) && (f || s || v) && (jn(this, f === a ? "onComplete" : "onReverseComplete", !0), this._prom && !(f < a && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, n.targets = function() {
    return this._targets;
  }, n.invalidate = function(i) {
    return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), t.prototype.invalidate.call(this, i);
  }, n.resetTo = function(i, o, l, s) {
    ua || vn.wake(), this._ts || this.play();
    var a = Math.min(this._dur, (this._dp._time - this._start) * this._ts), u;
    return this._initted || s0(this, a), u = this._ease(a / this._dur), GS(this, i, o, l, s, u, a) ? this.resetTo(i, o, l, s) : (tf(this, 0), this.parent || v_(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, n.kill = function(i, o) {
    if (o === void 0 && (o = "all"), !i && (!o || o === "all"))
      return this._lazy = this._pt = 0, this.parent ? fs(this) : this;
    if (this.timeline) {
      var l = this.timeline.totalDuration();
      return this.timeline.killTweensOf(i, o, fi && fi.vars.overwrite !== !0)._first || fs(this), this.parent && l !== this.timeline.totalDuration() && Il(this, this._dur * this.timeline._tDur / l, 0, 1), this;
    }
    var s = this._targets, a = i ? Dn(i) : s, u = this._ptLookup, c = this._pt, f, h, d, g, p, y, v;
    if ((!o || o === "all") && ES(s, a))
      return o === "all" && (this._pt = 0), fs(this);
    for (f = this._op = this._op || [], o !== "all" && (at(o) && (p = {}, nn(o, function(m) {
      return p[m] = 1;
    }), o = p), o = QS(s, o)), v = s.length; v--; )
      if (~a.indexOf(s[v])) {
        h = u[v], o === "all" ? (f[v] = o, g = h, d = {}) : (d = f[v] = f[v] || {}, g = o);
        for (p in g)
          y = h && h[p], y && ((!("kill" in y.d) || y.d.kill(p) === !0) && Jc(this, y, "_pt"), delete h[p]), d !== "all" && (d[p] = 1);
      }
    return this._initted && !this._pt && c && fs(this), this;
  }, e.to = function(i, o) {
    return new e(i, o, arguments[2]);
  }, e.from = function(i, o) {
    return Os(1, arguments);
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
    return Os(2, arguments);
  }, e.set = function(i, o) {
    return o.duration = 0, o.repeatDelay || (o.repeat = 0), new e(i, o);
  }, e.killTweensOf = function(i, o, l) {
    return Ae.killTweensOf(i, o, l);
  }, e;
}(ca);
Vn(Qe.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
nn("staggerTo,staggerFrom,staggerFromTo", function(t) {
  Qe[t] = function() {
    var e = new qt(), n = xh.call(arguments, 0);
    return n.splice(t === "staggerFromTo" ? 5 : 4, 0, 0), e[t].apply(e, n);
  };
});
var a0 = function(e, n, r) {
  return e[n] = r;
}, F_ = function(e, n, r) {
  return e[n](r);
}, KS = function(e, n, r, i) {
  return e[n](i.fp, r);
}, ZS = function(e, n, r) {
  return e.setAttribute(n, r);
}, u0 = function(e, n) {
  return Fe(e[n]) ? F_ : Jp(e[n]) && e.setAttribute ? ZS : a0;
}, B_ = function(e, n) {
  return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e6) / 1e6, n);
}, JS = function(e, n) {
  return n.set(n.t, n.p, !!(n.s + n.c * e), n);
}, U_ = function(e, n) {
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
}, c0 = function(e, n) {
  for (var r = n._pt; r; )
    r.r(e, r.d), r = r._next;
}, eC = function(e, n, r, i) {
  for (var o = this._pt, l; o; )
    l = o._next, o.p === i && o.modifier(e, n, r), o = l;
}, tC = function(e) {
  for (var n = this._pt, r, i; n; )
    i = n._next, n.p === e && !n.op || n.op === e ? Jc(this, n, "_pt") : n.dep || (r = 1), n = i;
  return !r;
}, nC = function(e, n, r, i) {
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
    this.t = r, this.s = o, this.c = l, this.p = i, this.r = s || B_, this.d = a || this, this.set = u || a0, this.pr = c || 0, this._next = n, n && (n._prev = this);
  }
  var e = t.prototype;
  return e.modifier = function(r, i, o) {
    this.mSet = this.mSet || this.set, this.set = nC, this.m = r, this.mt = o, this.tween = i;
  }, t;
}();
nn(i0 + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
  return r0[t] = 1;
});
Sn.TweenMax = Sn.TweenLite = Qe;
Sn.TimelineLite = Sn.TimelineMax = qt;
Ae = new qt({
  sortChildren: !1,
  defaults: Nl,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
wn.stringFilter = N_;
var yo = [], $u = {}, rC = [], hm = 0, iC = 0, ed = function(e) {
  return ($u[e] || rC).map(function(n) {
    return n();
  });
}, Ch = function() {
  var e = Date.now(), n = [];
  e - hm > 2 && (ed("matchMediaInit"), yo.forEach(function(r) {
    var i = r.queries, o = r.conditions, l, s, a, u;
    for (s in i)
      l = Pn.matchMedia(i[s]).matches, l && (a = 1), l !== o[s] && (o[s] = l, u = 1);
    u && (r.revert(), a && n.push(r));
  }), ed("matchMediaRevert"), n.forEach(function(r) {
    return r.onMatch(r);
  }), hm = e, ed("matchMedia"));
}, W_ = /* @__PURE__ */ function() {
  function t(n, r) {
    this.selector = r && wh(r), this.data = [], this._r = [], this.isReverted = !1, this.id = iC++, n && this.add(n);
  }
  var e = t.prototype;
  return e.add = function(r, i, o) {
    Fe(r) && (o = i, i = r, r = Fe);
    var l = this, s = function() {
      var u = Le, c = l.selector, f;
      return u && u !== l && u.data.push(l), o && (l.selector = wh(o)), Le = l, f = i.apply(l, arguments), Fe(f) && l._r.push(f), Le = u, l.selector = c, l.isReverted = !1, f;
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
      for (var s = yo.length; s--; )
        yo[s].id === this.id && yo.splice(s, 1);
  }, e.revert = function(r) {
    this.kill(r || {});
  }, t;
}(), oC = /* @__PURE__ */ function() {
  function t(n) {
    this.contexts = [], this.scope = n;
  }
  var e = t.prototype;
  return e.add = function(r, i, o) {
    Tr(r) || (r = {
      matches: r
    });
    var l = new W_(0, o || this.scope), s = l.conditions = {}, a, u, c;
    Le && !l.selector && (l.selector = Le.selector), this.contexts.push(l), i = l.add("onMatch", i), l.queries = r;
    for (u in r)
      u === "all" ? c = 1 : (a = Pn.matchMedia(r[u]), a && (yo.indexOf(l) < 0 && yo.push(l), (s[u] = a.matches) && (c = 1), a.addListener ? a.addListener(Ch) : a.addEventListener("change", Ch)));
    return c && i(l), this;
  }, e.revert = function(r) {
    this.kill(r || {});
  }, e.kill = function(r) {
    this.contexts.forEach(function(i) {
      return i.kill(r, !0);
    });
  }, t;
}(), wc = {
  registerPlugin: function() {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r];
    n.forEach(function(i) {
      return O_(i);
    });
  },
  timeline: function(e) {
    return new qt(e);
  },
  getTweensOf: function(e, n) {
    return Ae.getTweensOf(e, n);
  },
  getProperty: function(e, n, r, i) {
    at(e) && (e = Dn(e)[0]);
    var o = go(e || {}).get, l = r ? m_ : g_;
    return r === "native" && (r = ""), e && (n ? l((mn[n] && mn[n].get || o)(e, n, r, i)) : function(s, a, u) {
      return l((mn[s] && mn[s].get || o)(e, s, a, u));
    });
  },
  quickSetter: function(e, n, r) {
    if (e = Dn(e), e.length > 1) {
      var i = e.map(function(c) {
        return ln.quickSetter(c, n, r);
      }), o = i.length;
      return function(c) {
        for (var f = o; f--; )
          i[f](c);
      };
    }
    e = e[0] || {};
    var l = mn[n], s = go(e), a = s.harness && (s.harness.aliases || {})[n] || n, u = l ? function(c) {
      var f = new l();
      ll._pt = 0, f.init(e, r ? c + r : c, ll, 0, [e]), f.render(1, f), ll._pt && c0(1, ll);
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
    return e && e.ease && (e.ease = vo(e.ease, Nl.ease)), am(Nl, e || {});
  },
  config: function(e) {
    return am(wn, e || {});
  },
  registerEffect: function(e) {
    var n = e.name, r = e.effect, i = e.plugins, o = e.defaults, l = e.extendTimeline;
    (i || "").split(",").forEach(function(s) {
      return s && !mn[s] && !Sn[s] && vc(n + " effect requires " + s + " plugin.");
    }), qf[n] = function(s, a, u) {
      return r(Dn(s), Vn(a || {}, o), u);
    }, l && (qt.prototype[n] = function(s, a, u) {
      return this.add(qf[n](s, Tr(a) ? a : (u = a) && {}, this), u);
    });
  },
  registerEase: function(e, n) {
    ae[e] = vo(n);
  },
  parseEase: function(e, n) {
    return arguments.length ? vo(e, n) : ae;
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
    return e ? new W_(e, n) : Le;
  },
  matchMedia: function(e) {
    return new oC(e);
  },
  matchMediaRefresh: function() {
    return yo.forEach(function(e) {
      var n = e.conditions, r, i;
      for (i in n)
        n[i] && (n[i] = !1, r = 1);
      r && e.revert();
    }) || Ch();
  },
  addEventListener: function(e, n) {
    var r = $u[e] || ($u[e] = []);
    ~r.indexOf(n) || r.push(n);
  },
  removeEventListener: function(e, n) {
    var r = $u[e], i = r && r.indexOf(n);
    i >= 0 && r.splice(i, 1);
  },
  utils: {
    wrap: DS,
    wrapYoyo: jS,
    distribute: S_,
    random: E_,
    snap: C_,
    normalize: $S,
    getUnit: Et,
    clamp: NS,
    splitColor: R_,
    toArray: Dn,
    selector: wh,
    mapRange: T_,
    pipe: IS,
    unitize: zS,
    interpolate: LS,
    shuffle: k_
  },
  install: c_,
  effects: qf,
  ticker: vn,
  updateRoot: qt.updateRoot,
  plugins: mn,
  globalTimeline: Ae,
  core: {
    PropTween: rn,
    globals: f_,
    Tween: Qe,
    Timeline: qt,
    Animation: ca,
    getCache: go,
    _removeLinkedListItem: Jc,
    reverting: function() {
      return bt;
    },
    context: function(e) {
      return e && Le && (Le.data.push(e), e._ctx = Le), Le;
    },
    suppressOverwrites: function(e) {
      return Zp = e;
    }
  }
};
nn("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
  return wc[t] = Qe[t];
});
vn.add(qt.updateRoot);
ll = wc.to({}, {
  duration: 0
});
var lC = function(e, n) {
  for (var r = e._pt; r && r.p !== n && r.op !== n && r.fp !== n; )
    r = r._next;
  return r;
}, sC = function(e, n) {
  var r = e._targets, i, o, l;
  for (i in n)
    for (o = r.length; o--; )
      l = e._ptLookup[o][i], l && (l = l.d) && (l._pt && (l = lC(l, i)), l && l.modifier && l.modifier(n[i], e, r[o], i));
}, td = function(e, n) {
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
        sC(s, o);
      };
    }
  };
}, ln = wc.registerPlugin({
  name: "attr",
  init: function(e, n, r, i, o) {
    var l, s, a;
    this.tween = r;
    for (l in n)
      a = e.getAttribute(l) || "", s = this.add(e, "setAttribute", (a || 0) + "", n[l], i, o, 0, 0, l), s.op = l, s.b = a, this._props.push(l);
  },
  render: function(e, n) {
    for (var r = n._pt; r; )
      bt ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), r = r._next;
  }
}, {
  name: "endArray",
  init: function(e, n) {
    for (var r = n.length; r--; )
      this.add(e, r, e[r] || 0, n[r], 0, 0, 0, 0, 0, 1);
  }
}, td("roundProps", kh), td("modifiers"), td("snap", C_)) || wc;
Qe.version = qt.version = ln.version = "3.12.2";
u_ = 1;
e0() && zl();
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
var pm, di, vl, f0, uo, gm, d0, aC = function() {
  return typeof window < "u";
}, qr = {}, no = 180 / Math.PI, yl = Math.PI / 180, Bo = Math.atan2, mm = 1e8, h0 = /([A-Z])/g, uC = /(left|right|width|margin|padding|x)/i, cC = /[\s,\(]\S/, kr = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, Eh = function(e, n) {
  return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n);
}, fC = function(e, n) {
  return n.set(n.t, n.p, e === 1 ? n.e : Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n);
}, dC = function(e, n) {
  return n.set(n.t, n.p, e ? Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u : n.b, n);
}, hC = function(e, n) {
  var r = n.s + n.c * e;
  n.set(n.t, n.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + n.u, n);
}, H_ = function(e, n) {
  return n.set(n.t, n.p, e ? n.e : n.b, n);
}, Y_ = function(e, n) {
  return n.set(n.t, n.p, e !== 1 ? n.b : n.e, n);
}, pC = function(e, n, r) {
  return e.style[n] = r;
}, gC = function(e, n, r) {
  return e.style.setProperty(n, r);
}, mC = function(e, n, r) {
  return e._gsap[n] = r;
}, vC = function(e, n, r) {
  return e._gsap.scaleX = e._gsap.scaleY = r;
}, yC = function(e, n, r, i, o) {
  var l = e._gsap;
  l.scaleX = l.scaleY = r, l.renderTransform(o, l);
}, _C = function(e, n, r, i, o) {
  var l = e._gsap;
  l[n] = r, l.renderTransform(o, l);
}, Ie = "transform", sr = Ie + "Origin", xC = function t(e, n) {
  var r = this, i = this.target, o = i.style;
  if (e in qr && o) {
    if (this.tfm = this.tfm || {}, e !== "transform")
      e = kr[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(l) {
        return r.tfm[l] = Dr(i, l);
      }) : this.tfm[e] = i._gsap.x ? i._gsap[e] : Dr(i, e);
    else
      return kr.transform.split(",").forEach(function(l) {
        return t.call(r, l, n);
      });
    if (this.props.indexOf(Ie) >= 0)
      return;
    i._gsap.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(sr, n, "")), e = Ie;
  }
  (o || n) && this.props.push(e, n, o[e]);
}, X_ = function(e) {
  e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
}, wC = function() {
  var e = this.props, n = this.target, r = n.style, i = n._gsap, o, l;
  for (o = 0; o < e.length; o += 3)
    e[o + 1] ? n[e[o]] = e[o + 2] : e[o + 2] ? r[e[o]] = e[o + 2] : r.removeProperty(e[o].substr(0, 2) === "--" ? e[o] : e[o].replace(h0, "-$1").toLowerCase());
  if (this.tfm) {
    for (l in this.tfm)
      i[l] = this.tfm[l];
    i.svg && (i.renderTransform(), n.setAttribute("data-svg-origin", this.svgo || "")), o = d0(), (!o || !o.isStart) && !r[Ie] && (X_(r), i.uncache = 1);
  }
}, G_ = function(e, n) {
  var r = {
    target: e,
    props: [],
    revert: wC,
    save: xC
  };
  return e._gsap || ln.core.getCache(e), n && n.split(",").forEach(function(i) {
    return r.save(i);
  }), r;
}, Q_, bh = function(e, n) {
  var r = di.createElementNS ? di.createElementNS((n || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : di.createElement(e);
  return r.style ? r : di.createElement(e);
}, Er = function t(e, n, r) {
  var i = getComputedStyle(e);
  return i[n] || i.getPropertyValue(n.replace(h0, "-$1").toLowerCase()) || i.getPropertyValue(n) || !r && t(e, $l(n) || n, 1) || "";
}, vm = "O,Moz,ms,Ms,Webkit".split(","), $l = function(e, n, r) {
  var i = n || uo, o = i.style, l = 5;
  if (e in o && !r)
    return e;
  for (e = e.charAt(0).toUpperCase() + e.substr(1); l-- && !(vm[l] + e in o); )
    ;
  return l < 0 ? null : (l === 3 ? "ms" : l >= 0 ? vm[l] : "") + e;
}, Th = function() {
  aC() && window.document && (pm = window, di = pm.document, vl = di.documentElement, uo = bh("div") || {
    style: {}
  }, bh("div"), Ie = $l(Ie), sr = Ie + "Origin", uo.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Q_ = !!$l("perspective"), d0 = ln.core.reverting, f0 = 1);
}, nd = function t(e) {
  var n = bh("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = this.parentNode, i = this.nextSibling, o = this.style.cssText, l;
  if (vl.appendChild(n), n.appendChild(this), this.style.display = "block", e)
    try {
      l = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t;
    } catch {
    }
  else
    this._gsapBBox && (l = this._gsapBBox());
  return r && (i ? r.insertBefore(this, i) : r.appendChild(this)), vl.removeChild(n), this.style.cssText = o, l;
}, ym = function(e, n) {
  for (var r = n.length; r--; )
    if (e.hasAttribute(n[r]))
      return e.getAttribute(n[r]);
}, q_ = function(e) {
  var n;
  try {
    n = e.getBBox();
  } catch {
    n = nd.call(e, !0);
  }
  return n && (n.width || n.height) || e.getBBox === nd || (n = nd.call(e, !0)), n && !n.width && !n.x && !n.y ? {
    x: +ym(e, ["x", "cx", "x1"]) || 0,
    y: +ym(e, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : n;
}, K_ = function(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && q_(e));
}, fa = function(e, n) {
  if (n) {
    var r = e.style;
    n in qr && n !== sr && (n = Ie), r.removeProperty ? ((n.substr(0, 2) === "ms" || n.substr(0, 6) === "webkit") && (n = "-" + n), r.removeProperty(n.replace(h0, "-$1").toLowerCase())) : r.removeAttribute(n);
  }
}, hi = function(e, n, r, i, o, l) {
  var s = new rn(e._pt, n, r, 0, 1, l ? Y_ : H_);
  return e._pt = s, s.b = i, s.e = o, e._props.push(r), s;
}, _m = {
  deg: 1,
  rad: 1,
  turn: 1
}, kC = {
  grid: 1,
  flex: 1
}, Ii = function t(e, n, r, i) {
  var o = parseFloat(r) || 0, l = (r + "").trim().substr((o + "").length) || "px", s = uo.style, a = uC.test(n), u = e.tagName.toLowerCase() === "svg", c = (u ? "client" : "offset") + (a ? "Width" : "Height"), f = 100, h = i === "px", d = i === "%", g, p, y, v;
  return i === l || !o || _m[i] || _m[l] ? o : (l !== "px" && !h && (o = t(e, n, r, "px")), v = e.getCTM && K_(e), (d || l === "%") && (qr[n] || ~n.indexOf("adius")) ? (g = v ? e.getBBox()[a ? "width" : "height"] : e[c], Ve(d ? o / g * f : o / 100 * g)) : (s[a ? "width" : "height"] = f + (h ? l : i), p = ~n.indexOf("adius") || i === "em" && e.appendChild && !u ? e : e.parentNode, v && (p = (e.ownerSVGElement || {}).parentNode), (!p || p === di || !p.appendChild) && (p = di.body), y = p._gsap, y && d && y.width && a && y.time === vn.time && !y.uncache ? Ve(o / y.width * f) : ((d || l === "%") && !kC[Er(p, "display")] && (s.position = Er(e, "position")), p === e && (s.position = "static"), p.appendChild(uo), g = uo[c], p.removeChild(uo), s.position = "absolute", a && d && (y = go(p), y.time = vn.time, y.width = p[c]), Ve(h ? g * o / f : g && o ? f / g * o : 0))));
}, Dr = function(e, n, r, i) {
  var o;
  return f0 || Th(), n in kr && n !== "transform" && (n = kr[n], ~n.indexOf(",") && (n = n.split(",")[0])), qr[n] && n !== "transform" ? (o = ha(e, i), o = n !== "transformOrigin" ? o[n] : o.svg ? o.origin : Sc(Er(e, sr)) + " " + o.zOrigin + "px") : (o = e.style[n], (!o || o === "auto" || i || ~(o + "").indexOf("calc(")) && (o = kc[n] && kc[n](e, n, r) || Er(e, n) || h_(e, n) || (n === "opacity" ? 1 : 0))), r && !~(o + "").trim().indexOf(" ") ? Ii(e, n, o, r) + r : o;
}, SC = function(e, n, r, i) {
  if (!r || r === "none") {
    var o = $l(n, e, 1), l = o && Er(e, o, 1);
    l && l !== r ? (n = o, r = l) : n === "borderColor" && (r = Er(e, "borderTopColor"));
  }
  var s = new rn(this._pt, e.style, n, 0, 1, U_), a = 0, u = 0, c, f, h, d, g, p, y, v, m, _, x, C;
  if (s.b = r, s.e = i, r += "", i += "", i === "auto" && (e.style[n] = i, i = Er(e, n) || i, e.style[n] = r), c = [r, i], N_(c), r = c[0], i = c[1], h = r.match(ol) || [], C = i.match(ol) || [], C.length) {
    for (; f = ol.exec(i); )
      y = f[0], m = i.substring(a, f.index), g ? g = (g + 1) % 5 : (m.substr(-5) === "rgba(" || m.substr(-5) === "hsla(") && (g = 1), y !== (p = h[u++] || "") && (d = parseFloat(p) || 0, x = p.substr((d + "").length), y.charAt(1) === "=" && (y = ml(d, y) + x), v = parseFloat(y), _ = y.substr((v + "").length), a = ol.lastIndex - _.length, _ || (_ = _ || wn.units[n] || x, a === i.length && (i += _, s.e += _)), x !== _ && (d = Ii(e, n, p, _) || 0), s._pt = {
        _next: s._pt,
        p: m || u === 1 ? m : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: d,
        c: v - d,
        m: g && g < 4 || n === "zIndex" ? Math.round : 0
      });
    s.c = a < i.length ? i.substring(a, i.length) : "";
  } else
    s.r = n === "display" && i === "none" ? Y_ : H_;
  return s_.test(i) && (s.e = 0), this._pt = s, s;
}, xm = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, CC = function(e) {
  var n = e.split(" "), r = n[0], i = n[1] || "50%";
  return (r === "top" || r === "bottom" || i === "left" || i === "right") && (e = r, r = i, i = e), n[0] = xm[r] || r, n[1] = xm[i] || i, n.join(" ");
}, EC = function(e, n) {
  if (n.tween && n.tween._time === n.tween._dur) {
    var r = n.t, i = r.style, o = n.u, l = r._gsap, s, a, u;
    if (o === "all" || o === !0)
      i.cssText = "", a = 1;
    else
      for (o = o.split(","), u = o.length; --u > -1; )
        s = o[u], qr[s] && (a = 1, s = s === "transformOrigin" ? sr : Ie), fa(r, s);
    a && (fa(r, Ie), l && (l.svg && r.removeAttribute("transform"), ha(r, 1), l.uncache = 1, X_(i)));
  }
}, kc = {
  clearProps: function(e, n, r, i, o) {
    if (o.data !== "isFromStart") {
      var l = e._pt = new rn(e._pt, n, r, 0, 0, EC);
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
}, da = [1, 0, 0, 1, 0, 0], Z_ = {}, J_ = function(e) {
  return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
}, wm = function(e) {
  var n = Er(e, Ie);
  return J_(n) ? da : n.substr(7).match(l_).map(Ve);
}, p0 = function(e, n) {
  var r = e._gsap || go(e), i = e.style, o = wm(e), l, s, a, u;
  return r.svg && e.getAttribute("transform") ? (a = e.transform.baseVal.consolidate().matrix, o = [a.a, a.b, a.c, a.d, a.e, a.f], o.join(",") === "1,0,0,1,0,0" ? da : o) : (o === da && !e.offsetParent && e !== vl && !r.svg && (a = i.display, i.display = "block", l = e.parentNode, (!l || !e.offsetParent) && (u = 1, s = e.nextElementSibling, vl.appendChild(e)), o = wm(e), a ? i.display = a : fa(e, "display"), u && (s ? l.insertBefore(e, s) : l ? l.appendChild(e) : vl.removeChild(e))), n && o.length > 6 ? [o[0], o[1], o[4], o[5], o[12], o[13]] : o);
}, Ph = function(e, n, r, i, o, l) {
  var s = e._gsap, a = o || p0(e, !0), u = s.xOrigin || 0, c = s.yOrigin || 0, f = s.xOffset || 0, h = s.yOffset || 0, d = a[0], g = a[1], p = a[2], y = a[3], v = a[4], m = a[5], _ = n.split(" "), x = parseFloat(_[0]) || 0, C = parseFloat(_[1]) || 0, b, E, T, O;
  r ? a !== da && (E = d * y - g * p) && (T = x * (y / E) + C * (-p / E) + (p * m - y * v) / E, O = x * (-g / E) + C * (d / E) - (d * m - g * v) / E, x = T, C = O) : (b = q_(e), x = b.x + (~_[0].indexOf("%") ? x / 100 * b.width : x), C = b.y + (~(_[1] || _[0]).indexOf("%") ? C / 100 * b.height : C)), i || i !== !1 && s.smooth ? (v = x - u, m = C - c, s.xOffset = f + (v * d + m * p) - v, s.yOffset = h + (v * g + m * y) - m) : s.xOffset = s.yOffset = 0, s.xOrigin = x, s.yOrigin = C, s.smooth = !!i, s.origin = n, s.originIsAbsolute = !!r, e.style[sr] = "0px 0px", l && (hi(l, s, "xOrigin", u, x), hi(l, s, "yOrigin", c, C), hi(l, s, "xOffset", f, s.xOffset), hi(l, s, "yOffset", h, s.yOffset)), e.setAttribute("data-svg-origin", x + " " + C);
}, ha = function(e, n) {
  var r = e._gsap || new $_(e);
  if ("x" in r && !n && !r.uncache)
    return r;
  var i = e.style, o = r.scaleX < 0, l = "px", s = "deg", a = getComputedStyle(e), u = Er(e, sr) || "0", c, f, h, d, g, p, y, v, m, _, x, C, b, E, T, O, P, j, z, Q, I, D, W, L, M, $, S, Y, J, nt, fe, de;
  return c = f = h = p = y = v = m = _ = x = 0, d = g = 1, r.svg = !!(e.getCTM && K_(e)), a.translate && ((a.translate !== "none" || a.scale !== "none" || a.rotate !== "none") && (i[Ie] = (a.translate !== "none" ? "translate3d(" + (a.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (a.rotate !== "none" ? "rotate(" + a.rotate + ") " : "") + (a.scale !== "none" ? "scale(" + a.scale.split(" ").join(",") + ") " : "") + (a[Ie] !== "none" ? a[Ie] : "")), i.scale = i.rotate = i.translate = "none"), E = p0(e, r.svg), r.svg && (r.uncache ? (M = e.getBBox(), u = r.xOrigin - M.x + "px " + (r.yOrigin - M.y) + "px", L = "") : L = !n && e.getAttribute("data-svg-origin"), Ph(e, L || u, !!L || r.originIsAbsolute, r.smooth !== !1, E)), C = r.xOrigin || 0, b = r.yOrigin || 0, E !== da && (j = E[0], z = E[1], Q = E[2], I = E[3], c = D = E[4], f = W = E[5], E.length === 6 ? (d = Math.sqrt(j * j + z * z), g = Math.sqrt(I * I + Q * Q), p = j || z ? Bo(z, j) * no : 0, m = Q || I ? Bo(Q, I) * no + p : 0, m && (g *= Math.abs(Math.cos(m * yl))), r.svg && (c -= C - (C * j + b * Q), f -= b - (C * z + b * I))) : (de = E[6], nt = E[7], S = E[8], Y = E[9], J = E[10], fe = E[11], c = E[12], f = E[13], h = E[14], T = Bo(de, J), y = T * no, T && (O = Math.cos(-T), P = Math.sin(-T), L = D * O + S * P, M = W * O + Y * P, $ = de * O + J * P, S = D * -P + S * O, Y = W * -P + Y * O, J = de * -P + J * O, fe = nt * -P + fe * O, D = L, W = M, de = $), T = Bo(-Q, J), v = T * no, T && (O = Math.cos(-T), P = Math.sin(-T), L = j * O - S * P, M = z * O - Y * P, $ = Q * O - J * P, fe = I * P + fe * O, j = L, z = M, Q = $), T = Bo(z, j), p = T * no, T && (O = Math.cos(T), P = Math.sin(T), L = j * O + z * P, M = D * O + W * P, z = z * O - j * P, W = W * O - D * P, j = L, D = M), y && Math.abs(y) + Math.abs(p) > 359.9 && (y = p = 0, v = 180 - v), d = Ve(Math.sqrt(j * j + z * z + Q * Q)), g = Ve(Math.sqrt(W * W + de * de)), T = Bo(D, W), m = Math.abs(T) > 2e-4 ? T * no : 0, x = fe ? 1 / (fe < 0 ? -fe : fe) : 0), r.svg && (L = e.getAttribute("transform"), r.forceCSS = e.setAttribute("transform", "") || !J_(Er(e, Ie)), L && e.setAttribute("transform", L))), Math.abs(m) > 90 && Math.abs(m) < 270 && (o ? (d *= -1, m += p <= 0 ? 180 : -180, p += p <= 0 ? 180 : -180) : (g *= -1, m += m <= 0 ? 180 : -180)), n = n || r.uncache, r.x = c - ((r.xPercent = c && (!n && r.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0))) ? e.offsetWidth * r.xPercent / 100 : 0) + l, r.y = f - ((r.yPercent = f && (!n && r.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-f) ? -50 : 0))) ? e.offsetHeight * r.yPercent / 100 : 0) + l, r.z = h + l, r.scaleX = Ve(d), r.scaleY = Ve(g), r.rotation = Ve(p) + s, r.rotationX = Ve(y) + s, r.rotationY = Ve(v) + s, r.skewX = m + s, r.skewY = _ + s, r.transformPerspective = x + l, (r.zOrigin = parseFloat(u.split(" ")[2]) || 0) && (i[sr] = Sc(u)), r.xOffset = r.yOffset = 0, r.force3D = wn.force3D, r.renderTransform = r.svg ? TC : Q_ ? ex : bC, r.uncache = 0, r;
}, Sc = function(e) {
  return (e = e.split(" "))[0] + " " + e[1];
}, rd = function(e, n, r) {
  var i = Et(n);
  return Ve(parseFloat(n) + parseFloat(Ii(e, "x", r + "px", i))) + i;
}, bC = function(e, n) {
  n.z = "0px", n.rotationY = n.rotationX = "0deg", n.force3D = 0, ex(e, n);
}, Zi = "0deg", ts = "0px", Ji = ") ", ex = function(e, n) {
  var r = n || this, i = r.xPercent, o = r.yPercent, l = r.x, s = r.y, a = r.z, u = r.rotation, c = r.rotationY, f = r.rotationX, h = r.skewX, d = r.skewY, g = r.scaleX, p = r.scaleY, y = r.transformPerspective, v = r.force3D, m = r.target, _ = r.zOrigin, x = "", C = v === "auto" && e && e !== 1 || v === !0;
  if (_ && (f !== Zi || c !== Zi)) {
    var b = parseFloat(c) * yl, E = Math.sin(b), T = Math.cos(b), O;
    b = parseFloat(f) * yl, O = Math.cos(b), l = rd(m, l, E * O * -_), s = rd(m, s, -Math.sin(b) * -_), a = rd(m, a, T * O * -_ + _);
  }
  y !== ts && (x += "perspective(" + y + Ji), (i || o) && (x += "translate(" + i + "%, " + o + "%) "), (C || l !== ts || s !== ts || a !== ts) && (x += a !== ts || C ? "translate3d(" + l + ", " + s + ", " + a + ") " : "translate(" + l + ", " + s + Ji), u !== Zi && (x += "rotate(" + u + Ji), c !== Zi && (x += "rotateY(" + c + Ji), f !== Zi && (x += "rotateX(" + f + Ji), (h !== Zi || d !== Zi) && (x += "skew(" + h + ", " + d + Ji), (g !== 1 || p !== 1) && (x += "scale(" + g + ", " + p + Ji), m.style[Ie] = x || "translate(0, 0)";
}, TC = function(e, n) {
  var r = n || this, i = r.xPercent, o = r.yPercent, l = r.x, s = r.y, a = r.rotation, u = r.skewX, c = r.skewY, f = r.scaleX, h = r.scaleY, d = r.target, g = r.xOrigin, p = r.yOrigin, y = r.xOffset, v = r.yOffset, m = r.forceCSS, _ = parseFloat(l), x = parseFloat(s), C, b, E, T, O;
  a = parseFloat(a), u = parseFloat(u), c = parseFloat(c), c && (c = parseFloat(c), u += c, a += c), a || u ? (a *= yl, u *= yl, C = Math.cos(a) * f, b = Math.sin(a) * f, E = Math.sin(a - u) * -h, T = Math.cos(a - u) * h, u && (c *= yl, O = Math.tan(u - c), O = Math.sqrt(1 + O * O), E *= O, T *= O, c && (O = Math.tan(c), O = Math.sqrt(1 + O * O), C *= O, b *= O)), C = Ve(C), b = Ve(b), E = Ve(E), T = Ve(T)) : (C = f, T = h, b = E = 0), (_ && !~(l + "").indexOf("px") || x && !~(s + "").indexOf("px")) && (_ = Ii(d, "x", l, "px"), x = Ii(d, "y", s, "px")), (g || p || y || v) && (_ = Ve(_ + g - (g * C + p * E) + y), x = Ve(x + p - (g * b + p * T) + v)), (i || o) && (O = d.getBBox(), _ = Ve(_ + i / 100 * O.width), x = Ve(x + o / 100 * O.height)), O = "matrix(" + C + "," + b + "," + E + "," + T + "," + _ + "," + x + ")", d.setAttribute("transform", O), m && (d.style[Ie] = O);
}, PC = function(e, n, r, i, o) {
  var l = 360, s = at(o), a = parseFloat(o) * (s && ~o.indexOf("rad") ? no : 1), u = a - i, c = i + u + "deg", f, h;
  return s && (f = o.split("_")[1], f === "short" && (u %= l, u !== u % (l / 2) && (u += u < 0 ? l : -l)), f === "cw" && u < 0 ? u = (u + l * mm) % l - ~~(u / l) * l : f === "ccw" && u > 0 && (u = (u - l * mm) % l - ~~(u / l) * l)), e._pt = h = new rn(e._pt, n, r, i, u, fC), h.e = c, h.u = "deg", e._props.push(r), h;
}, km = function(e, n) {
  for (var r in n)
    e[r] = n[r];
  return e;
}, OC = function(e, n, r) {
  var i = km({}, r._gsap), o = "perspective,force3D,transformOrigin,svgOrigin", l = r.style, s, a, u, c, f, h, d, g;
  i.svg ? (u = r.getAttribute("transform"), r.setAttribute("transform", ""), l[Ie] = n, s = ha(r, 1), fa(r, Ie), r.setAttribute("transform", u)) : (u = getComputedStyle(r)[Ie], l[Ie] = n, s = ha(r, 1), l[Ie] = u);
  for (a in qr)
    u = i[a], c = s[a], u !== c && o.indexOf(a) < 0 && (d = Et(u), g = Et(c), f = d !== g ? Ii(r, a, u, g) : parseFloat(u), h = parseFloat(c), e._pt = new rn(e._pt, s, a, f, h - f, Eh), e._pt.u = g || 0, e._props.push(a));
  km(s, i);
};
nn("padding,margin,Width,Radius", function(t, e) {
  var n = "Top", r = "Right", i = "Bottom", o = "Left", l = (e < 3 ? [n, r, i, o] : [n + o, n + r, i + r, i + o]).map(function(s) {
    return e < 2 ? t + s : "border" + s + t;
  });
  kc[e > 1 ? "border" + t : t] = function(s, a, u, c, f) {
    var h, d;
    if (arguments.length < 4)
      return h = l.map(function(g) {
        return Dr(s, g, u);
      }), d = h.join(" "), d.split(h[0]).length === 5 ? h[0] : d;
    h = (c + "").split(" "), d = {}, l.forEach(function(g, p) {
      return d[g] = h[p] = h[p] || h[(p - 1) / 2 | 0];
    }), s.init(a, d, f);
  };
});
var tx = {
  name: "css",
  register: Th,
  targetTest: function(e) {
    return e.style && e.nodeType;
  },
  init: function(e, n, r, i, o) {
    var l = this._props, s = e.style, a = r.vars.startAt, u, c, f, h, d, g, p, y, v, m, _, x, C, b, E, T;
    f0 || Th(), this.styles = this.styles || G_(e), T = this.styles.props, this.tween = r;
    for (p in n)
      if (p !== "autoRound" && (c = n[p], !(mn[p] && D_(p, n, r, i, e, o)))) {
        if (d = typeof c, g = kc[p], d === "function" && (c = c.call(r, i, e, o), d = typeof c), d === "string" && ~c.indexOf("random(") && (c = aa(c)), g)
          g(this, e, p, c, r) && (E = 1);
        else if (p.substr(0, 2) === "--")
          u = (getComputedStyle(e).getPropertyValue(p) + "").trim(), c += "", Pi.lastIndex = 0, Pi.test(u) || (y = Et(u), v = Et(c)), v ? y !== v && (u = Ii(e, p, u, v) + v) : y && (c += y), this.add(s, "setProperty", u, c, i, o, 0, 0, p), l.push(p), T.push(p, 0, s[p]);
        else if (d !== "undefined") {
          if (a && p in a ? (u = typeof a[p] == "function" ? a[p].call(r, i, e, o) : a[p], at(u) && ~u.indexOf("random(") && (u = aa(u)), Et(u + "") || (u += wn.units[p] || Et(Dr(e, p)) || ""), (u + "").charAt(1) === "=" && (u = Dr(e, p))) : u = Dr(e, p), h = parseFloat(u), m = d === "string" && c.charAt(1) === "=" && c.substr(0, 2), m && (c = c.substr(2)), f = parseFloat(c), p in kr && (p === "autoAlpha" && (h === 1 && Dr(e, "visibility") === "hidden" && f && (h = 0), T.push("visibility", 0, s.visibility), hi(this, s, "visibility", h ? "inherit" : "hidden", f ? "inherit" : "hidden", !f)), p !== "scale" && p !== "transform" && (p = kr[p], ~p.indexOf(",") && (p = p.split(",")[0]))), _ = p in qr, _) {
            if (this.styles.save(p), x || (C = e._gsap, C.renderTransform && !n.parseTransform || ha(e, n.parseTransform), b = n.smoothOrigin !== !1 && C.smooth, x = this._pt = new rn(this._pt, s, Ie, 0, 1, C.renderTransform, C, 0, -1), x.dep = 1), p === "scale")
              this._pt = new rn(this._pt, C, "scaleY", C.scaleY, (m ? ml(C.scaleY, m + f) : f) - C.scaleY || 0, Eh), this._pt.u = 0, l.push("scaleY", p), p += "X";
            else if (p === "transformOrigin") {
              T.push(sr, 0, s[sr]), c = CC(c), C.svg ? Ph(e, c, 0, b, 0, this) : (v = parseFloat(c.split(" ")[2]) || 0, v !== C.zOrigin && hi(this, C, "zOrigin", C.zOrigin, v), hi(this, s, p, Sc(u), Sc(c)));
              continue;
            } else if (p === "svgOrigin") {
              Ph(e, c, 1, b, 0, this);
              continue;
            } else if (p in Z_) {
              PC(this, C, p, h, m ? ml(h, m + c) : c);
              continue;
            } else if (p === "smoothOrigin") {
              hi(this, C, "smooth", C.smooth, c);
              continue;
            } else if (p === "force3D") {
              C[p] = c;
              continue;
            } else if (p === "transform") {
              OC(this, c, e);
              continue;
            }
          } else
            p in s || (p = $l(p) || p);
          if (_ || (f || f === 0) && (h || h === 0) && !cC.test(c) && p in s)
            y = (u + "").substr((h + "").length), f || (f = 0), v = Et(c) || (p in wn.units ? wn.units[p] : y), y !== v && (h = Ii(e, p, u, v)), this._pt = new rn(this._pt, _ ? C : s, p, h, (m ? ml(h, m + f) : f) - h, !_ && (v === "px" || p === "zIndex") && n.autoRound !== !1 ? hC : Eh), this._pt.u = v || 0, y !== v && v !== "%" && (this._pt.b = u, this._pt.r = dC);
          else if (p in s)
            SC.call(this, e, p, u, m ? m + c : c);
          else if (p in e)
            this.add(e, p, u || e[p], m ? m + c : c, i, o);
          else if (p !== "parseTransform") {
            n0(p, c);
            continue;
          }
          _ || (p in s ? T.push(p, 0, s[p]) : T.push(p, 1, u || e[p])), l.push(p);
        }
      }
    E && V_(this);
  },
  render: function(e, n) {
    if (n.tween._time || !d0())
      for (var r = n._pt; r; )
        r.r(e, r.d), r = r._next;
    else
      n.styles.revert();
  },
  get: Dr,
  aliases: kr,
  getSetter: function(e, n, r) {
    var i = kr[n];
    return i && i.indexOf(",") < 0 && (n = i), n in qr && n !== sr && (e._gsap.x || Dr(e, "x")) ? r && gm === r ? n === "scale" ? vC : mC : (gm = r || {}) && (n === "scale" ? yC : _C) : e.style && !Jp(e.style[n]) ? pC : ~n.indexOf("-") ? gC : u0(e, n);
  },
  core: {
    _removeProperty: fa,
    _getMatrix: p0
  }
};
ln.utils.checkPrefix = $l;
ln.core.getStyleSaver = G_;
(function(t, e, n, r) {
  var i = nn(t + "," + e + "," + n, function(o) {
    qr[o] = 1;
  });
  nn(e, function(o) {
    wn.units[o] = "deg", Z_[o] = 1;
  }), kr[i[13]] = t + "," + e, nn(r, function(o) {
    var l = o.split(":");
    kr[l[1]] = i[l[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
nn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
  wn.units[t] = "px";
});
ln.registerPlugin(tx);
var zi = ln.registerPlugin(tx) || ln;
zi.core.Tween;
function Sm(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
  }
}
function RC(t, e, n) {
  return e && Sm(t.prototype, e), n && Sm(t, n), t;
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
var gt, Oh, yn, pi, gi, _l, nx, ro, Ms, rx, Br, Zn, ix, ox = function() {
  return gt || typeof window < "u" && (gt = window.gsap) && gt.registerPlugin && gt;
}, lx = 1, sl = [], ie = [], br = [], Ns = Date.now, Rh = function(e, n) {
  return n;
}, MC = function() {
  var e = Ms.core, n = e.bridge || {}, r = e._scrollers, i = e._proxies;
  r.push.apply(r, ie), i.push.apply(i, br), ie = r, br = i, Rh = function(l, s) {
    return n[l](s);
  };
}, Oi = function(e, n) {
  return ~br.indexOf(e) && br[br.indexOf(e) + 1][n];
}, As = function(e) {
  return !!~rx.indexOf(e);
}, Mt = function(e, n, r, i, o) {
  return e.addEventListener(n, r, {
    passive: !i,
    capture: !!o
  });
}, Rt = function(e, n, r, i) {
  return e.removeEventListener(n, r, !!i);
}, tu = "scrollLeft", nu = "scrollTop", Mh = function() {
  return Br && Br.isPressed || ie.cache++;
}, Cc = function(e, n) {
  var r = function i(o) {
    if (o || o === 0) {
      lx && (yn.history.scrollRestoration = "manual");
      var l = Br && Br.isPressed;
      o = i.v = Math.round(o) || (Br && Br.iOS ? 1 : 0), e(o), i.cacheID = ie.cache, l && Rh("ss", o);
    } else
      (n || ie.cache !== i.cacheID || Rh("ref")) && (i.cacheID = ie.cache, i.v = e());
    return i.v + i.offset;
  };
  return r.offset = 0, e && r;
}, $t = {
  s: tu,
  p: "left",
  p2: "Left",
  os: "right",
  os2: "Right",
  d: "width",
  d2: "Width",
  a: "x",
  sc: Cc(function(t) {
    return arguments.length ? yn.scrollTo(t, et.sc()) : yn.pageXOffset || pi[tu] || gi[tu] || _l[tu] || 0;
  })
}, et = {
  s: nu,
  p: "top",
  p2: "Top",
  os: "bottom",
  os2: "Bottom",
  d: "height",
  d2: "Height",
  a: "y",
  op: $t,
  sc: Cc(function(t) {
    return arguments.length ? yn.scrollTo($t.sc(), t) : yn.pageYOffset || pi[nu] || gi[nu] || _l[nu] || 0;
  })
}, Yt = function(e, n) {
  return (n && n._ctx && n._ctx.selector || gt.utils.toArray)(e)[0] || (typeof e == "string" && gt.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null);
}, $i = function(e, n) {
  var r = n.s, i = n.sc;
  As(e) && (e = pi.scrollingElement || gi);
  var o = ie.indexOf(e), l = i === et.sc ? 1 : 2;
  !~o && (o = ie.push(e) - 1), ie[o + l] || Mt(e, "scroll", Mh);
  var s = ie[o + l], a = s || (ie[o + l] = Cc(Oi(e, r), !0) || (As(e) ? i : Cc(function(u) {
    return arguments.length ? e[r] = u : e[r];
  })));
  return a.target = e, s || (a.smooth = gt.getProperty(e, "scrollBehavior") === "smooth"), a;
}, Nh = function(e, n, r) {
  var i = e, o = e, l = Ns(), s = l, a = n || 50, u = Math.max(500, a * 3), c = function(g, p) {
    var y = Ns();
    p || y - l > a ? (o = i, i = g, s = l, l = y) : r ? i += g : i = o + (g - o) / (y - s) * (l - s);
  }, f = function() {
    o = i = r ? 0 : i, s = l = 0;
  }, h = function(g) {
    var p = s, y = o, v = Ns();
    return (g || g === 0) && g !== i && c(g), l === s || v - s > u ? 0 : (i + (r ? y : -y)) / ((r ? v : l) - p) * 1e3;
  };
  return {
    update: c,
    reset: f,
    getVelocity: h
  };
}, ns = function(e, n) {
  return n && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e;
}, Cm = function(e) {
  var n = Math.max.apply(Math, e), r = Math.min.apply(Math, e);
  return Math.abs(n) >= Math.abs(r) ? n : r;
}, sx = function() {
  Ms = gt.core.globals().ScrollTrigger, Ms && Ms.core && MC();
}, ax = function(e) {
  return gt = e || ox(), gt && typeof document < "u" && document.body && (yn = window, pi = document, gi = pi.documentElement, _l = pi.body, rx = [yn, pi, gi, _l], gt.utils.clamp, ix = gt.core.context || function() {
  }, ro = "onpointerenter" in _l ? "pointer" : "mouse", nx = Ke.isTouch = yn.matchMedia && yn.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in yn || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, Zn = Ke.eventTypes = ("ontouchstart" in gi ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in gi ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
    return lx = 0;
  }, 500), sx(), Oh = 1), Oh;
};
$t.op = et;
ie.cache = 0;
var Ke = /* @__PURE__ */ function() {
  function t(n) {
    this.init(n);
  }
  var e = t.prototype;
  return e.init = function(r) {
    Oh || ax(gt) || console.warn("Please gsap.registerPlugin(Observer)"), Ms || sx();
    var i = r.tolerance, o = r.dragMinimum, l = r.type, s = r.target, a = r.lineHeight, u = r.debounce, c = r.preventDefault, f = r.onStop, h = r.onStopDelay, d = r.ignore, g = r.wheelSpeed, p = r.event, y = r.onDragStart, v = r.onDragEnd, m = r.onDrag, _ = r.onPress, x = r.onRelease, C = r.onRight, b = r.onLeft, E = r.onUp, T = r.onDown, O = r.onChangeX, P = r.onChangeY, j = r.onChange, z = r.onToggleX, Q = r.onToggleY, I = r.onHover, D = r.onHoverEnd, W = r.onMove, L = r.ignoreCheck, M = r.isNormalizer, $ = r.onGestureStart, S = r.onGestureEnd, Y = r.onWheel, J = r.onEnable, nt = r.onDisable, fe = r.onClick, de = r.scrollSpeed, ye = r.capture, ue = r.allowClicks, He = r.lockAxis, Te = r.onLockAxis;
    this.target = s = Yt(s) || gi, this.vars = r, d && (d = gt.utils.toArray(d)), i = i || 1e-9, o = o || 0, g = g || 1, de = de || 1, l = l || "wheel,touch,pointer", u = u !== !1, a || (a = parseFloat(yn.getComputedStyle(_l).lineHeight) || 22);
    var bn, Vt, cr, me, Ye, Wt, an, R = this, un = 0, Rr = 0, Vi = $i(s, $t), Xe = $i(s, et), Wi = Vi(), Hi = Xe(), Vl = ~l.indexOf("touch") && !~l.indexOf("pointer") && Zn[0] === "pointerdown", ut = As(s), Be = s.ownerDocument || pi, Hn = [0, 0, 0], Yn = [0, 0, 0], Yi = 0, Mr = function() {
      return Yi = Ns();
    }, fr = function(H, ve) {
      return (R.event = H) && d && ~d.indexOf(H.target) || ve && Vl && H.pointerType !== "touch" || L && L(H, ve);
    }, Ht = function() {
      R._vx.reset(), R._vy.reset(), Vt.pause(), f && f(R);
    }, Xi = function() {
      var H = R.deltaX = Cm(Hn), ve = R.deltaY = Cm(Yn), De = Math.abs(H) >= i, U = Math.abs(ve) >= i;
      j && (De || U) && j(R, H, ve, Hn, Yn), De && (C && R.deltaX > 0 && C(R), b && R.deltaX < 0 && b(R), O && O(R), z && R.deltaX < 0 != un < 0 && z(R), un = R.deltaX, Hn[0] = Hn[1] = Hn[2] = 0), U && (T && R.deltaY > 0 && T(R), E && R.deltaY < 0 && E(R), P && P(R), Q && R.deltaY < 0 != Rr < 0 && Q(R), Rr = R.deltaY, Yn[0] = Yn[1] = Yn[2] = 0), (me || cr) && (W && W(R), cr && (m(R), cr = !1), me = !1), Wt && !(Wt = !1) && Te && Te(R), Ye && (Y(R), Ye = !1), bn = 0;
    }, Do = function(H, ve, De) {
      Hn[De] += H, Yn[De] += ve, R._vx.update(H), R._vy.update(ve), u ? bn || (bn = requestAnimationFrame(Xi)) : Xi();
    }, jo = function(H, ve) {
      He && !an && (R.axis = an = Math.abs(H) > Math.abs(ve) ? "x" : "y", Wt = !0), an !== "y" && (Hn[2] += H, R._vx.update(H, !0)), an !== "x" && (Yn[2] += ve, R._vy.update(ve, !0)), u ? bn || (bn = requestAnimationFrame(Xi)) : Xi();
    }, Gi = function(H) {
      if (!fr(H, 1)) {
        H = ns(H, c);
        var ve = H.clientX, De = H.clientY, U = ve - R.x, ce = De - R.y, G = R.isDragging;
        R.x = ve, R.y = De, (G || Math.abs(R.startX - ve) >= o || Math.abs(R.startY - De) >= o) && (m && (cr = !0), G || (R.isDragging = !0), jo(U, ce), G || y && y(R));
      }
    }, Zr = R.onPress = function(ee) {
      fr(ee, 1) || ee && ee.button || (R.axis = an = null, Vt.pause(), R.isPressed = !0, ee = ns(ee), un = Rr = 0, R.startX = R.x = ee.clientX, R.startY = R.y = ee.clientY, R._vx.reset(), R._vy.reset(), Mt(M ? s : Be, Zn[1], Gi, c, !0), R.deltaX = R.deltaY = 0, _ && _(R));
    }, Jr = R.onRelease = function(ee) {
      if (!fr(ee, 1)) {
        Rt(M ? s : Be, Zn[1], Gi, !0);
        var H = !isNaN(R.y - R.startY), ve = R.isDragging && (Math.abs(R.x - R.startX) > 3 || Math.abs(R.y - R.startY) > 3), De = ns(ee);
        !ve && H && (R._vx.reset(), R._vy.reset(), c && ue && gt.delayedCall(0.08, function() {
          if (Ns() - Yi > 300 && !ee.defaultPrevented) {
            if (ee.target.click)
              ee.target.click();
            else if (Be.createEvent) {
              var U = Be.createEvent("MouseEvents");
              U.initMouseEvent("click", !0, !0, yn, 1, De.screenX, De.screenY, De.clientX, De.clientY, !1, !1, !1, !1, 0, null), ee.target.dispatchEvent(U);
            }
          }
        })), R.isDragging = R.isGesturing = R.isPressed = !1, f && !M && Vt.restart(!0), v && ve && v(R), x && x(R, ve);
      }
    }, he = function(H) {
      return H.touches && H.touches.length > 1 && (R.isGesturing = !0) && $(H, R.isDragging);
    }, Qi = function() {
      return (R.isGesturing = !1) || S(R);
    }, Xn = function(H) {
      if (!fr(H)) {
        var ve = Vi(), De = Xe();
        Do((ve - Wi) * de, (De - Hi) * de, 1), Wi = ve, Hi = De, f && Vt.restart(!0);
      }
    }, Gn = function(H) {
      if (!fr(H)) {
        H = ns(H, c), Y && (Ye = !0);
        var ve = (H.deltaMode === 1 ? a : H.deltaMode === 2 ? yn.innerHeight : 1) * g;
        Do(H.deltaX * ve, H.deltaY * ve, 0), f && !M && Vt.restart(!0);
      }
    }, Qn = function(H) {
      if (!fr(H)) {
        var ve = H.clientX, De = H.clientY, U = ve - R.x, ce = De - R.y;
        R.x = ve, R.y = De, me = !0, (U || ce) && jo(U, ce);
      }
    }, qi = function(H) {
      R.event = H, I(R);
    }, Lo = function(H) {
      R.event = H, D(R);
    }, Nr = function(H) {
      return fr(H) || ns(H, c) && fe(R);
    };
    Vt = R._dc = gt.delayedCall(h || 0.25, Ht).pause(), R.deltaX = R.deltaY = 0, R._vx = Nh(0, 50, !0), R._vy = Nh(0, 50, !0), R.scrollX = Vi, R.scrollY = Xe, R.isDragging = R.isGesturing = R.isPressed = !1, ix(this), R.enable = function(ee) {
      return R.isEnabled || (Mt(ut ? Be : s, "scroll", Mh), l.indexOf("scroll") >= 0 && Mt(ut ? Be : s, "scroll", Xn, c, ye), l.indexOf("wheel") >= 0 && Mt(s, "wheel", Gn, c, ye), (l.indexOf("touch") >= 0 && nx || l.indexOf("pointer") >= 0) && (Mt(s, Zn[0], Zr, c, ye), Mt(Be, Zn[2], Jr), Mt(Be, Zn[3], Jr), ue && Mt(s, "click", Mr, !1, !0), fe && Mt(s, "click", Nr), $ && Mt(Be, "gesturestart", he), S && Mt(Be, "gestureend", Qi), I && Mt(s, ro + "enter", qi), D && Mt(s, ro + "leave", Lo), W && Mt(s, ro + "move", Qn)), R.isEnabled = !0, ee && ee.type && Zr(ee), J && J(R)), R;
    }, R.disable = function() {
      R.isEnabled && (sl.filter(function(ee) {
        return ee !== R && As(ee.target);
      }).length || Rt(ut ? Be : s, "scroll", Mh), R.isPressed && (R._vx.reset(), R._vy.reset(), Rt(M ? s : Be, Zn[1], Gi, !0)), Rt(ut ? Be : s, "scroll", Xn, ye), Rt(s, "wheel", Gn, ye), Rt(s, Zn[0], Zr, ye), Rt(Be, Zn[2], Jr), Rt(Be, Zn[3], Jr), Rt(s, "click", Mr, !0), Rt(s, "click", Nr), Rt(Be, "gesturestart", he), Rt(Be, "gestureend", Qi), Rt(s, ro + "enter", qi), Rt(s, ro + "leave", Lo), Rt(s, ro + "move", Qn), R.isEnabled = R.isPressed = R.isDragging = !1, nt && nt(R));
    }, R.kill = R.revert = function() {
      R.disable();
      var ee = sl.indexOf(R);
      ee >= 0 && sl.splice(ee, 1), Br === R && (Br = 0);
    }, sl.push(R), M && As(s) && (Br = R), R.enable(p);
  }, RC(t, [{
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
Ke.register = ax;
Ke.getAll = function() {
  return sl.slice();
};
Ke.getById = function(t) {
  return sl.filter(function(e) {
    return e.vars.id === t;
  })[0];
};
ox() && gt.registerPlugin(Ke);
/*!
 * ScrollTrigger 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var V, Ho, se, Me, nr, Ee, ux, Ec, bc, al, Du, ru, St, nf, Ah, At, Em, bm, Yo, cx, id, fx, dn, dx, hx, px, ii, Ih, g0, xl, m0, od, iu = 1, zt = Date.now, ld = zt(), Fn = 0, hs = 0, Tm = function(e, n, r) {
  var i = gn(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
  return r["_" + n + "Clamp"] = i, i ? e.substr(6, e.length - 7) : e;
}, Pm = function(e, n) {
  return n && (!gn(e) || e.substr(0, 6) !== "clamp(") ? "clamp(" + e + ")" : e;
}, NC = function t() {
  return hs && requestAnimationFrame(t);
}, Om = function() {
  return nf = 1;
}, Rm = function() {
  return nf = 0;
}, vr = function(e) {
  return e;
}, ps = function(e) {
  return Math.round(e * 1e5) / 1e5 || 0;
}, gx = function() {
  return typeof window < "u";
}, mx = function() {
  return V || gx() && (V = window.gsap) && V.registerPlugin && V;
}, Po = function(e) {
  return !!~ux.indexOf(e);
}, vx = function(e) {
  return (e === "Height" ? m0 : se["inner" + e]) || nr["client" + e] || Ee["client" + e];
}, yx = function(e) {
  return Oi(e, "getBoundingClientRect") || (Po(e) ? function() {
    return Vu.width = se.innerWidth, Vu.height = m0, Vu;
  } : function() {
    return jr(e);
  });
}, AC = function(e, n, r) {
  var i = r.d, o = r.d2, l = r.a;
  return (l = Oi(e, "getBoundingClientRect")) ? function() {
    return l()[i];
  } : function() {
    return (n ? vx(o) : e["client" + o]) || 0;
  };
}, IC = function(e, n) {
  return !n || ~br.indexOf(e) ? yx(e) : function() {
    return Vu;
  };
}, Ur = function(e, n) {
  var r = n.s, i = n.d2, o = n.d, l = n.a;
  return Math.max(0, (r = "scroll" + i) && (l = Oi(e, r)) ? l() - yx(e)()[o] : Po(e) ? (nr[r] || Ee[r]) - vx(i) : e[r] - e["offset" + i]);
}, ou = function(e, n) {
  for (var r = 0; r < Yo.length; r += 3)
    (!n || ~n.indexOf(Yo[r + 1])) && e(Yo[r], Yo[r + 1], Yo[r + 2]);
}, gn = function(e) {
  return typeof e == "string";
}, Dt = function(e) {
  return typeof e == "function";
}, ju = function(e) {
  return typeof e == "number";
}, io = function(e) {
  return typeof e == "object";
}, rs = function(e, n, r) {
  return e && e.progress(n ? 0 : 1) && r && e.pause();
}, sd = function(e, n) {
  if (e.enabled) {
    var r = n(e);
    r && r.totalTime && (e.callbackAnimation = r);
  }
}, Uo = Math.abs, _x = "left", xx = "top", v0 = "right", y0 = "bottom", _o = "width", xo = "height", Is = "Right", zs = "Left", $s = "Top", Ds = "Bottom", Ge = "padding", Mn = "margin", Dl = "Width", _0 = "Height", dt = "px", Nn = function(e) {
  return se.getComputedStyle(e);
}, zC = function(e) {
  var n = Nn(e).position;
  e.style.position = n === "absolute" || n === "fixed" ? n : "relative";
}, Mm = function(e, n) {
  for (var r in n)
    r in e || (e[r] = n[r]);
  return e;
}, jr = function(e, n) {
  var r = n && Nn(e)[Ah] !== "matrix(1, 0, 0, 1, 0, 0)" && V.to(e, {
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
}, zh = function(e, n) {
  var r = n.d2;
  return e["offset" + r] || e["client" + r] || 0;
}, wx = function(e) {
  var n = [], r = e.labels, i = e.duration(), o;
  for (o in r)
    n.push(r[o] / i);
  return n;
}, $C = function(e) {
  return function(n) {
    return V.utils.snap(wx(e), n);
  };
}, x0 = function(e) {
  var n = V.utils.snap(e), r = Array.isArray(e) && e.slice(0).sort(function(i, o) {
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
}, DC = function(e) {
  return function(n, r) {
    return x0(wx(e))(n, r.direction);
  };
}, lu = function(e, n, r, i) {
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
}, su = function(e, n, r) {
  r = r && r.wheelHandler, r && (e(n, "wheel", r), e(n, "touchmove", r));
}, Nm = {
  startColor: "green",
  endColor: "red",
  indent: 0,
  fontSize: "16px",
  fontWeight: "normal"
}, au = {
  toggleActions: "play",
  anticipatePin: 0
}, Tc = {
  top: 0,
  left: 0,
  center: 0.5,
  bottom: 1,
  right: 1
}, Lu = function(e, n) {
  if (gn(e)) {
    var r = e.indexOf("="), i = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
    ~r && (e.indexOf("%") > r && (i *= n / 100), e = e.substr(0, r - 1)), e = i + (e in Tc ? Tc[e] * n : ~e.indexOf("%") ? parseFloat(e) * n / 100 : parseFloat(e) || 0);
  }
  return e;
}, uu = function(e, n, r, i, o, l, s, a) {
  var u = o.startColor, c = o.endColor, f = o.fontSize, h = o.indent, d = o.fontWeight, g = Me.createElement("div"), p = Po(r) || Oi(r, "pinType") === "fixed", y = e.indexOf("scroller") !== -1, v = p ? Ee : r, m = e.indexOf("start") !== -1, _ = m ? u : c, x = "border-color:" + _ + ";font-size:" + f + ";color:" + _ + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
  return x += "position:" + ((y || a) && p ? "fixed;" : "absolute;"), (y || a || !p) && (x += (i === et ? v0 : y0) + ":" + (l + parseFloat(h)) + "px;"), s && (x += "box-sizing:border-box;text-align:left;width:" + s.offsetWidth + "px;"), g._isStart = m, g.setAttribute("class", "gsap-marker-" + e + (n ? " marker-" + n : "")), g.style.cssText = x, g.innerText = n || n === 0 ? e + "-" + n : e, v.children[0] ? v.insertBefore(g, v.children[0]) : v.appendChild(g), g._offset = g["offset" + i.op.d2], Fu(g, 0, i, m), g;
}, Fu = function(e, n, r, i) {
  var o = {
    display: "block"
  }, l = r[i ? "os2" : "p2"], s = r[i ? "p2" : "os2"];
  e._isFlipped = i, o[r.a + "Percent"] = i ? -100 : 0, o[r.a] = i ? "1px" : 0, o["border" + l + Dl] = 1, o["border" + s + Dl] = 0, o[r.p] = n + "px", V.set(e, o);
}, te = [], $h = {}, pa, Am = function() {
  return zt() - Fn > 34 && (pa || (pa = requestAnimationFrame(Wr)));
}, Vo = function() {
  (!dn || !dn.isPressed || dn.startX > Ee.clientWidth) && (ie.cache++, dn ? pa || (pa = requestAnimationFrame(Wr)) : Wr(), Fn || Ro("scrollStart"), Fn = zt());
}, ad = function() {
  px = se.innerWidth, hx = se.innerHeight;
}, gs = function() {
  ie.cache++, !St && !fx && !Me.fullscreenElement && !Me.webkitFullscreenElement && (!dx || px !== se.innerWidth || Math.abs(se.innerHeight - hx) > se.innerHeight * 0.25) && Ec.restart(!0);
}, Oo = {}, jC = [], kx = function t() {
  return it(oe, "scrollEnd", t) || co(!0);
}, Ro = function(e) {
  return Oo[e] && Oo[e].map(function(n) {
    return n();
  }) || jC;
}, hn = [], Sx = function(e) {
  for (var n = 0; n < hn.length; n += 5)
    (!e || hn[n + 4] && hn[n + 4].query === e) && (hn[n].style.cssText = hn[n + 1], hn[n].getBBox && hn[n].setAttribute("transform", hn[n + 2] || ""), hn[n + 3].uncache = 1);
}, w0 = function(e, n) {
  var r;
  for (At = 0; At < te.length; At++)
    r = te[At], r && (!n || r._ctx === n) && (e ? r.kill(1) : r.revert(!0, !0));
  n && Sx(n), n || Ro("revert");
}, Cx = function(e, n) {
  ie.cache++, (n || !It) && ie.forEach(function(r) {
    return Dt(r) && r.cacheID++ && (r.rec = 0);
  }), gn(e) && (se.history.scrollRestoration = g0 = e);
}, It, wo = 0, Im, LC = function() {
  if (Im !== wo) {
    var e = Im = wo;
    requestAnimationFrame(function() {
      return e === wo && co(!0);
    });
  }
}, Ex = function() {
  Ee.appendChild(xl), m0 = xl.offsetHeight || se.innerHeight, Ee.removeChild(xl);
}, co = function(e, n) {
  if (Fn && !e) {
    ot(oe, "scrollEnd", kx);
    return;
  }
  Ex(), It = oe.isRefreshing = !0, ie.forEach(function(i) {
    return Dt(i) && ++i.cacheID && (i.rec = i());
  });
  var r = Ro("refreshInit");
  cx && oe.sort(), n || w0(), ie.forEach(function(i) {
    Dt(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"), i(0));
  }), te.slice(0).forEach(function(i) {
    return i.refresh();
  }), te.forEach(function(i, o) {
    if (i._subPinOffset && i.pin) {
      var l = i.vars.horizontal ? "offsetWidth" : "offsetHeight", s = i.pin[l];
      i.revert(!0, 1), i.adjustPinSpacing(i.pin[l] - s), i.refresh();
    }
  }), te.forEach(function(i) {
    var o = Ur(i.scroller, i._dir);
    (i.vars.end === "max" || i._endClamp && i.end > o) && i.setPositions(i.start, Math.max(i.start + 1, o), !0);
  }), r.forEach(function(i) {
    return i && i.render && i.render(-1);
  }), ie.forEach(function(i) {
    Dt(i) && (i.smooth && requestAnimationFrame(function() {
      return i.target.style.scrollBehavior = "smooth";
    }), i.rec && i(i.rec));
  }), Cx(g0, 1), Ec.pause(), wo++, It = 2, Wr(2), te.forEach(function(i) {
    return Dt(i.vars.onRefresh) && i.vars.onRefresh(i);
  }), It = oe.isRefreshing = !1, Ro("refresh");
}, Dh = 0, Bu = 1, js, Wr = function(e) {
  if (!It || e === 2) {
    oe.isUpdating = !0, js && js.update(0);
    var n = te.length, r = zt(), i = r - ld >= 50, o = n && te[0].scroll();
    if (Bu = Dh > o ? -1 : 1, It || (Dh = o), i && (Fn && !nf && r - Fn > 200 && (Fn = 0, Ro("scrollEnd")), Du = ld, ld = r), Bu < 0) {
      for (At = n; At-- > 0; )
        te[At] && te[At].update(0, i);
      Bu = 1;
    } else
      for (At = 0; At < n; At++)
        te[At] && te[At].update(0, i);
    oe.isUpdating = !1;
  }
  pa = 0;
}, jh = [_x, xx, y0, v0, Mn + Ds, Mn + Is, Mn + $s, Mn + zs, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], Uu = jh.concat([_o, xo, "boxSizing", "max" + Dl, "max" + _0, "position", Mn, Ge, Ge + $s, Ge + Is, Ge + Ds, Ge + zs]), FC = function(e, n, r) {
  wl(r);
  var i = e._gsap;
  if (i.spacerIsNative)
    wl(i.spacerState);
  else if (e._gsap.swappedIn) {
    var o = n.parentNode;
    o && (o.insertBefore(e, n), o.removeChild(n));
  }
  e._gsap.swappedIn = !1;
}, ud = function(e, n, r, i) {
  if (!e._gsap.swappedIn) {
    for (var o = jh.length, l = n.style, s = e.style, a; o--; )
      a = jh[o], l[a] = r[a];
    l.position = r.position === "absolute" ? "absolute" : "relative", r.display === "inline" && (l.display = "inline-block"), s[y0] = s[v0] = "auto", l.flexBasis = r.flexBasis || "auto", l.overflow = "visible", l.boxSizing = "border-box", l[_o] = zh(e, $t) + dt, l[xo] = zh(e, et) + dt, l[Ge] = s[Mn] = s[xx] = s[_x] = "0", wl(i), s[_o] = s["max" + Dl] = r[_o], s[xo] = s["max" + _0] = r[xo], s[Ge] = r[Ge], e.parentNode !== n && (e.parentNode.insertBefore(n, e), n.appendChild(e)), e._gsap.swappedIn = !0;
  }
}, BC = /([A-Z])/g, wl = function(e) {
  if (e) {
    var n = e.t.style, r = e.length, i = 0, o, l;
    for ((e.t._gsap || V.core.getCache(e.t)).uncache = 1; i < r; i += 2)
      l = e[i + 1], o = e[i], l ? n[o] = l : n[o] && n.removeProperty(o.replace(BC, "-$1").toLowerCase());
  }
}, cu = function(e) {
  for (var n = Uu.length, r = e.style, i = [], o = 0; o < n; o++)
    i.push(Uu[o], r[Uu[o]]);
  return i.t = e, i;
}, UC = function(e, n, r) {
  for (var i = [], o = e.length, l = r ? 8 : 0, s; l < o; l += 2)
    s = e[l], i.push(s, s in n ? n[s] : e[l + 1]);
  return i.t = e.t, i;
}, Vu = {
  left: 0,
  top: 0
}, zm = function(e, n, r, i, o, l, s, a, u, c, f, h, d, g) {
  Dt(e) && (e = e(a)), gn(e) && e.substr(0, 3) === "max" && (e = h + (e.charAt(4) === "=" ? Lu("0" + e.substr(3), r) : 0));
  var p = d ? d.time() : 0, y, v, m;
  if (d && d.seek(0), isNaN(e) || (e = +e), ju(e))
    d && (e = V.utils.mapRange(d.scrollTrigger.start, d.scrollTrigger.end, 0, h, e)), s && Fu(s, r, i, !0);
  else {
    Dt(n) && (n = n(a));
    var _ = (e || "0").split(" "), x, C, b, E;
    m = Yt(n, a) || Ee, x = jr(m) || {}, (!x || !x.left && !x.top) && Nn(m).display === "none" && (E = m.style.display, m.style.display = "block", x = jr(m), E ? m.style.display = E : m.style.removeProperty("display")), C = Lu(_[0], x[i.d]), b = Lu(_[1] || "0", r), e = x[i.p] - u[i.p] - c + C + o - b, s && Fu(s, b, i, r - b < 20 || s._isStart && b > 20), r -= r - b;
  }
  if (g && (a[g] = e || -1e-3, e < 0 && (e = 0)), l) {
    var T = e + r, O = l._isStart;
    y = "scroll" + i.d2, Fu(l, T, i, O && T > 20 || !O && (f ? Math.max(Ee[y], nr[y]) : l.parentNode[y]) <= T + 1), f && (u = jr(s), f && (l.style[i.op.p] = u[i.op.p] - i.op.m - l._offset + dt));
  }
  return d && m && (y = jr(m), d.seek(h), v = jr(m), d._caScrollDist = y[i.p] - v[i.p], e = e / d._caScrollDist * h), d && d.seek(p), d ? e : Math.round(e);
}, VC = /(webkit|moz|length|cssText|inset)/i, $m = function(e, n, r, i) {
  if (e.parentNode !== n) {
    var o = e.style, l, s;
    if (n === Ee) {
      e._stOrig = o.cssText, s = Nn(e);
      for (l in s)
        !+l && !VC.test(l) && s[l] && typeof o[l] == "string" && l !== "0" && (o[l] = s[l]);
      o.top = r, o.left = i;
    } else
      o.cssText = e._stOrig;
    V.core.getCache(e).uncache = 1, n.appendChild(e);
  }
}, bx = function(e, n, r) {
  var i = n, o = i;
  return function(l) {
    var s = Math.round(e());
    return s !== i && s !== o && Math.abs(s - i) > 3 && Math.abs(s - o) > 3 && (l = s, r && r()), o = i, i = l, l;
  };
}, fu = function(e, n, r) {
  var i = {};
  i[n.p] = "+=" + r, V.set(e, i);
}, Dm = function(e, n) {
  var r = $i(e, n), i = "_scroll" + n.p2, o = function l(s, a, u, c, f) {
    var h = l.tween, d = a.onComplete, g = {};
    u = u || r();
    var p = bx(r, u, function() {
      h.kill(), l.tween = 0;
    });
    return f = c && f || 0, c = c || s - u, h && h.kill(), a[i] = s, a.modifiers = g, g[i] = function() {
      return p(u + c * h.ratio + f * h.ratio * h.ratio);
    }, a.onUpdate = function() {
      ie.cache++, Wr();
    }, a.onComplete = function() {
      l.tween = 0, d && d.call(h);
    }, h = l.tween = V.to(e, a), h;
  };
  return e[i] = r, r.wheelHandler = function() {
    return o.tween && o.tween.kill() && (o.tween = 0);
  }, ot(e, "wheel", r.wheelHandler), oe.isTouch && ot(e, "touchmove", r.wheelHandler), o;
}, oe = /* @__PURE__ */ function() {
  function t(n, r) {
    Ho || t.register(V) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), Ih(this), this.init(n, r);
  }
  var e = t.prototype;
  return e.init = function(r, i) {
    if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !hs) {
      this.update = this.refresh = this.kill = vr;
      return;
    }
    r = Mm(gn(r) || ju(r) || r.nodeType ? {
      trigger: r
    } : r, au);
    var o = r, l = o.onUpdate, s = o.toggleClass, a = o.id, u = o.onToggle, c = o.onRefresh, f = o.scrub, h = o.trigger, d = o.pin, g = o.pinSpacing, p = o.invalidateOnRefresh, y = o.anticipatePin, v = o.onScrubComplete, m = o.onSnapComplete, _ = o.once, x = o.snap, C = o.pinReparent, b = o.pinSpacer, E = o.containerAnimation, T = o.fastScrollEnd, O = o.preventOverlaps, P = r.horizontal || r.containerAnimation && r.horizontal !== !1 ? $t : et, j = !f && f !== 0, z = Yt(r.scroller || se), Q = V.core.getCache(z), I = Po(z), D = ("pinType" in r ? r.pinType : Oi(z, "pinType") || I && "fixed") === "fixed", W = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack], L = j && r.toggleActions.split(" "), M = "markers" in r ? r.markers : au.markers, $ = I ? 0 : parseFloat(Nn(z)["border" + P.p2 + Dl]) || 0, S = this, Y = r.onRefreshInit && function() {
      return r.onRefreshInit(S);
    }, J = AC(z, I, P), nt = IC(z, I), fe = 0, de = 0, ye = 0, ue = $i(z, P), He, Te, bn, Vt, cr, me, Ye, Wt, an, R, un, Rr, Vi, Xe, Wi, Hi, Vl, ut, Be, Hn, Yn, Yi, Mr, fr, Ht, Xi, Do, jo, Gi, Zr, Jr, he, Qi, Xn, Gn, Qn, qi, Lo, Nr;
    if (S._startClamp = S._endClamp = !1, S._dir = P, y *= 45, S.scroller = z, S.scroll = E ? E.time.bind(E) : ue, Vt = ue(), S.vars = r, i = i || r.animation, "refreshPriority" in r && (cx = 1, r.refreshPriority === -9999 && (js = S)), Q.tweenScroll = Q.tweenScroll || {
      top: Dm(z, et),
      left: Dm(z, $t)
    }, S.tweenTo = He = Q.tweenScroll[P.p], S.scrubDuration = function(U) {
      Qi = ju(U) && U, Qi ? he ? he.duration(U) : he = V.to(i, {
        ease: "expo",
        totalProgress: "+=0",
        duration: Qi,
        paused: !0,
        onComplete: function() {
          return v && v(S);
        }
      }) : (he && he.progress(1).kill(), he = 0);
    }, i && (i.vars.lazy = !1, i._initted && !S.isReverted || i.vars.immediateRender !== !1 && r.immediateRender !== !1 && i.duration() && i.render(0, !0, !0), S.animation = i.pause(), i.scrollTrigger = S, S.scrubDuration(f), Zr = 0, a || (a = i.vars.id)), x && ((!io(x) || x.push) && (x = {
      snapTo: x
    }), "scrollBehavior" in Ee.style && V.set(I ? [Ee, nr] : z, {
      scrollBehavior: "auto"
    }), ie.forEach(function(U) {
      return Dt(U) && U.target === (I ? Me.scrollingElement || nr : z) && (U.smooth = !1);
    }), bn = Dt(x.snapTo) ? x.snapTo : x.snapTo === "labels" ? $C(i) : x.snapTo === "labelsDirectional" ? DC(i) : x.directional !== !1 ? function(U, ce) {
      return x0(x.snapTo)(U, zt() - de < 500 ? 0 : ce.direction);
    } : V.utils.snap(x.snapTo), Xn = x.duration || {
      min: 0.1,
      max: 2
    }, Xn = io(Xn) ? al(Xn.min, Xn.max) : al(Xn, Xn), Gn = V.delayedCall(x.delay || Qi / 2 || 0.1, function() {
      var U = ue(), ce = zt() - de < 500, G = He.tween;
      if ((ce || Math.abs(S.getVelocity()) < 10) && !G && !nf && fe !== U) {
        var ne = (U - me) / Xe, rt = i && !j ? i.totalProgress() : ne, pe = ce ? 0 : (rt - Jr) / (zt() - Du) * 1e3 || 0, Ue = V.utils.clamp(-ne, 1 - ne, Uo(pe / 2) * pe / 0.185), Ot = ne + (x.inertia === !1 ? 0 : Ue), ct = al(0, 1, bn(Ot, S)), Oe = Math.round(me + ct * Xe), xe = x, qn = xe.onStart, Re = xe.onInterrupt, cn = xe.onComplete;
        if (U <= Ye && U >= me && Oe !== U) {
          if (G && !G._initted && G.data <= Uo(Oe - U))
            return;
          x.inertia === !1 && (Ue = ct - ne), He(Oe, {
            duration: Xn(Uo(Math.max(Uo(Ot - rt), Uo(ct - rt)) * 0.185 / pe / 0.05 || 0)),
            ease: x.ease || "power3",
            data: Uo(Oe - U),
            // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
            onInterrupt: function() {
              return Gn.restart(!0) && Re && Re(S);
            },
            onComplete: function() {
              S.update(), fe = ue(), Zr = Jr = i && !j ? i.totalProgress() : S.progress, m && m(S), cn && cn(S);
            }
          }, U, Ue * Xe, Oe - U - Ue * Xe), qn && qn(S, He.tween);
        }
      } else
        S.isActive && fe !== U && Gn.restart(!0);
    }).pause()), a && ($h[a] = S), h = S.trigger = Yt(h || d !== !0 && d), Nr = h && h._gsap && h._gsap.stRevert, Nr && (Nr = Nr(S)), d = d === !0 ? h : Yt(d), gn(s) && (s = {
      targets: h,
      className: s
    }), d && (g === !1 || g === Mn || (g = !g && d.parentNode && d.parentNode.style && Nn(d.parentNode).display === "flex" ? !1 : Ge), S.pin = d, Te = V.core.getCache(d), Te.spacer ? Wi = Te.pinState : (b && (b = Yt(b), b && !b.nodeType && (b = b.current || b.nativeElement), Te.spacerIsNative = !!b, b && (Te.spacerState = cu(b))), Te.spacer = ut = b || Me.createElement("div"), ut.classList.add("pin-spacer"), a && ut.classList.add("pin-spacer-" + a), Te.pinState = Wi = cu(d)), r.force3D !== !1 && V.set(d, {
      force3D: !0
    }), S.spacer = ut = Te.spacer, Gi = Nn(d), fr = Gi[g + P.os2], Hn = V.getProperty(d), Yn = V.quickSetter(d, P.a, dt), ud(d, ut, Gi), Vl = cu(d)), M) {
      Rr = io(M) ? Mm(M, Nm) : Nm, R = uu("scroller-start", a, z, P, Rr, 0), un = uu("scroller-end", a, z, P, Rr, 0, R), Be = R["offset" + P.op.d2];
      var ee = Yt(Oi(z, "content") || z);
      Wt = this.markerStart = uu("start", a, ee, P, Rr, Be, 0, E), an = this.markerEnd = uu("end", a, ee, P, Rr, Be, 0, E), E && (Lo = V.quickSetter([Wt, an], P.a, dt)), !D && !(br.length && Oi(z, "fixedMarkers") === !0) && (zC(I ? Ee : z), V.set([R, un], {
        force3D: !0
      }), Xi = V.quickSetter(R, P.a, dt), jo = V.quickSetter(un, P.a, dt));
    }
    if (E) {
      var H = E.vars.onUpdate, ve = E.vars.onUpdateParams;
      E.eventCallback("onUpdate", function() {
        S.update(0, 0, 1), H && H.apply(E, ve || []);
      });
    }
    if (S.previous = function() {
      return te[te.indexOf(S) - 1];
    }, S.next = function() {
      return te[te.indexOf(S) + 1];
    }, S.revert = function(U, ce) {
      if (!ce)
        return S.kill(!0);
      var G = U !== !1 || !S.enabled, ne = St;
      G !== S.isReverted && (G && (Qn = Math.max(ue(), S.scroll.rec || 0), ye = S.progress, qi = i && i.progress()), Wt && [Wt, an, R, un].forEach(function(rt) {
        return rt.style.display = G ? "none" : "block";
      }), G && (St = S, S.update(G)), d && (!C || !S.isActive) && (G ? FC(d, ut, Wi) : ud(d, ut, Nn(d), Ht)), G || S.update(G), St = ne, S.isReverted = G);
    }, S.refresh = function(U, ce, G, ne) {
      if (!((St || !S.enabled) && !ce)) {
        if (d && U && Fn) {
          ot(t, "scrollEnd", kx);
          return;
        }
        !It && Y && Y(S), St = S, He.tween && !G && (He.tween.kill(), He.tween = 0), he && he.pause(), p && i && i.revert({
          kill: !1
        }).invalidate(), S.isReverted || S.revert(!0, !0), S._subPinOffset = !1;
        var rt = J(), pe = nt(), Ue = E ? E.duration() : Ur(z, P), Ot = Xe <= 0.01, ct = 0, Oe = ne || 0, xe = io(G) ? G.end : r.end, qn = r.endTrigger || h, Re = io(G) ? G.start : r.start || (r.start === 0 || !h ? 0 : d ? "0 0" : "0 100%"), cn = S.pinnedContainer = r.pinnedContainer && Yt(r.pinnedContainer, S), dr = h && Math.max(0, te.indexOf(S)) || 0, fn = dr, ft, _t, Ki, za, xt, Ze, hr, kf, K0, Wl, pr, Hl, $a;
        for (M && io(G) && (Hl = V.getProperty(R, P.p), $a = V.getProperty(un, P.p)); fn--; )
          Ze = te[fn], Ze.end || Ze.refresh(0, 1) || (St = S), hr = Ze.pin, hr && (hr === h || hr === d || hr === cn) && !Ze.isReverted && (Wl || (Wl = []), Wl.unshift(Ze), Ze.revert(!0, !0)), Ze !== te[fn] && (dr--, fn--);
        for (Dt(Re) && (Re = Re(S)), Re = Tm(Re, "start", S), me = zm(Re, h, rt, P, ue(), Wt, R, S, pe, $, D, Ue, E, S._startClamp && "_startClamp") || (d ? -1e-3 : 0), Dt(xe) && (xe = xe(S)), gn(xe) && !xe.indexOf("+=") && (~xe.indexOf(" ") ? xe = (gn(Re) ? Re.split(" ")[0] : "") + xe : (ct = Lu(xe.substr(2), rt), xe = gn(Re) ? Re : (E ? V.utils.mapRange(0, E.duration(), E.scrollTrigger.start, E.scrollTrigger.end, me) : me) + ct, qn = h)), xe = Tm(xe, "end", S), Ye = Math.max(me, zm(xe || (qn ? "100% 0" : Ue), qn, rt, P, ue() + ct, an, un, S, pe, $, D, Ue, E, S._endClamp && "_endClamp")) || -1e-3, ct = 0, fn = dr; fn--; )
          Ze = te[fn], hr = Ze.pin, hr && Ze.start - Ze._pinPush <= me && !E && Ze.end > 0 && (ft = Ze.end - (S._startClamp ? Math.max(0, Ze.start) : Ze.start), (hr === h && Ze.start - Ze._pinPush < me || hr === cn) && isNaN(Re) && (ct += ft * (1 - Ze.progress)), hr === d && (Oe += ft));
        if (me += ct, Ye += ct, S._startClamp && (S._startClamp += ct), S._endClamp && !It && (S._endClamp = Ye || -1e-3, Ye = Math.min(Ye, Ur(z, P))), Xe = Ye - me || (me -= 0.01) && 1e-3, Ot && (ye = V.utils.clamp(0, 1, V.utils.normalize(me, Ye, Qn))), S._pinPush = Oe, Wt && ct && (ft = {}, ft[P.a] = "+=" + ct, cn && (ft[P.p] = "-=" + ue()), V.set([Wt, an], ft)), d)
          ft = Nn(d), za = P === et, Ki = ue(), Yi = parseFloat(Hn(P.a)) + Oe, !Ue && Ye > 1 && (pr = (I ? Me.scrollingElement || nr : z).style, pr = {
            style: pr,
            value: pr["overflow" + P.a.toUpperCase()]
          }, I && Nn(Ee)["overflow" + P.a.toUpperCase()] !== "scroll" && (pr.style["overflow" + P.a.toUpperCase()] = "scroll")), ud(d, ut, ft), Vl = cu(d), _t = jr(d, !0), kf = D && $i(z, za ? $t : et)(), g && (Ht = [g + P.os2, Xe + Oe + dt], Ht.t = ut, fn = g === Ge ? zh(d, P) + Xe + Oe : 0, fn && Ht.push(P.d, fn + dt), wl(Ht), cn && te.forEach(function(Yl) {
            Yl.pin === cn && Yl.vars.pinSpacing !== !1 && (Yl._subPinOffset = !0);
          }), D && ue(Qn)), D && (xt = {
            top: _t.top + (za ? Ki - me : kf) + dt,
            left: _t.left + (za ? kf : Ki - me) + dt,
            boxSizing: "border-box",
            position: "fixed"
          }, xt[_o] = xt["max" + Dl] = Math.ceil(_t.width) + dt, xt[xo] = xt["max" + _0] = Math.ceil(_t.height) + dt, xt[Mn] = xt[Mn + $s] = xt[Mn + Is] = xt[Mn + Ds] = xt[Mn + zs] = "0", xt[Ge] = ft[Ge], xt[Ge + $s] = ft[Ge + $s], xt[Ge + Is] = ft[Ge + Is], xt[Ge + Ds] = ft[Ge + Ds], xt[Ge + zs] = ft[Ge + zs], Hi = UC(Wi, xt, C), It && ue(0)), i ? (K0 = i._initted, id(1), i.render(i.duration(), !0, !0), Mr = Hn(P.a) - Yi + Xe + Oe, Do = Math.abs(Xe - Mr) > 1, D && Do && Hi.splice(Hi.length - 2, 2), i.render(0, !0, !0), K0 || i.invalidate(!0), i.parent || i.totalTime(i.totalTime()), id(0)) : Mr = Xe, pr && (pr.value ? pr.style["overflow" + P.a.toUpperCase()] = pr.value : pr.style.removeProperty("overflow-" + P.a));
        else if (h && ue() && !E)
          for (_t = h.parentNode; _t && _t !== Ee; )
            _t._pinOffset && (me -= _t._pinOffset, Ye -= _t._pinOffset), _t = _t.parentNode;
        Wl && Wl.forEach(function(Yl) {
          return Yl.revert(!1, !0);
        }), S.start = me, S.end = Ye, Vt = cr = It ? Qn : ue(), !E && !It && (Vt < Qn && ue(Qn), S.scroll.rec = 0), S.revert(!1, !0), de = zt(), Gn && (fe = -1, Gn.restart(!0)), St = 0, i && j && (i._initted || qi) && i.progress() !== qi && i.progress(qi || 0, !0).render(i.time(), !0, !0), (Ot || ye !== S.progress || E) && (i && !j && i.totalProgress(E && me < -1e-3 && !ye ? V.utils.normalize(me, Ye, 0) : ye, !0), S.progress = Ot || (Vt - me) / Xe === ye ? 0 : ye), d && g && (ut._pinOffset = Math.round(S.progress * Mr)), he && he.invalidate(), isNaN(Hl) || (Hl -= V.getProperty(R, P.p), $a -= V.getProperty(un, P.p), fu(R, P, Hl), fu(Wt, P, Hl - (ne || 0)), fu(un, P, $a), fu(an, P, $a - (ne || 0))), Ot && !It && S.update(), c && !It && !Vi && (Vi = !0, c(S), Vi = !1);
      }
    }, S.getVelocity = function() {
      return (ue() - cr) / (zt() - Du) * 1e3 || 0;
    }, S.endAnimation = function() {
      rs(S.callbackAnimation), i && (he ? he.progress(1) : i.paused() ? j || rs(i, S.direction < 0, 1) : rs(i, i.reversed()));
    }, S.labelToScroll = function(U) {
      return i && i.labels && (me || S.refresh() || me) + i.labels[U] / i.duration() * Xe || 0;
    }, S.getTrailing = function(U) {
      var ce = te.indexOf(S), G = S.direction > 0 ? te.slice(0, ce).reverse() : te.slice(ce + 1);
      return (gn(U) ? G.filter(function(ne) {
        return ne.vars.preventOverlaps === U;
      }) : G).filter(function(ne) {
        return S.direction > 0 ? ne.end <= me : ne.start >= Ye;
      });
    }, S.update = function(U, ce, G) {
      if (!(E && !G && !U)) {
        var ne = It === !0 ? Qn : S.scroll(), rt = U ? 0 : (ne - me) / Xe, pe = rt < 0 ? 0 : rt > 1 ? 1 : rt || 0, Ue = S.progress, Ot, ct, Oe, xe, qn, Re, cn, dr;
        if (ce && (cr = Vt, Vt = E ? ue() : ne, x && (Jr = Zr, Zr = i && !j ? i.totalProgress() : pe)), y && !pe && d && !St && !iu && Fn && me < ne + (ne - cr) / (zt() - Du) * y && (pe = 1e-4), pe !== Ue && S.enabled) {
          if (Ot = S.isActive = !!pe && pe < 1, ct = !!Ue && Ue < 1, Re = Ot !== ct, qn = Re || !!pe != !!Ue, S.direction = pe > Ue ? 1 : -1, S.progress = pe, qn && !St && (Oe = pe && !Ue ? 0 : pe === 1 ? 1 : Ue === 1 ? 2 : 3, j && (xe = !Re && L[Oe + 1] !== "none" && L[Oe + 1] || L[Oe], dr = i && (xe === "complete" || xe === "reset" || xe in i))), O && (Re || dr) && (dr || f || !i) && (Dt(O) ? O(S) : S.getTrailing(O).forEach(function(Ki) {
            return Ki.endAnimation();
          })), j || (he && !St && !iu ? (he._dp._time - he._start !== he._time && he.render(he._dp._time - he._start), he.resetTo ? he.resetTo("totalProgress", pe, i._tTime / i._tDur) : (he.vars.totalProgress = pe, he.invalidate().restart())) : i && i.totalProgress(pe, !!(St && (de || U)))), d) {
            if (U && g && (ut.style[g + P.os2] = fr), !D)
              Yn(ps(Yi + Mr * pe));
            else if (qn) {
              if (cn = !U && pe > Ue && Ye + 1 > ne && ne + 1 >= Ur(z, P), C)
                if (!U && (Ot || cn)) {
                  var fn = jr(d, !0), ft = ne - me;
                  $m(d, Ee, fn.top + (P === et ? ft : 0) + dt, fn.left + (P === et ? 0 : ft) + dt);
                } else
                  $m(d, ut);
              wl(Ot || cn ? Hi : Vl), Do && pe < 1 && Ot || Yn(Yi + (pe === 1 && !cn ? Mr : 0));
            }
          }
          x && !He.tween && !St && !iu && Gn.restart(!0), s && (Re || _ && pe && (pe < 1 || !od)) && bc(s.targets).forEach(function(Ki) {
            return Ki.classList[Ot || _ ? "add" : "remove"](s.className);
          }), l && !j && !U && l(S), qn && !St ? (j && (dr && (xe === "complete" ? i.pause().totalProgress(1) : xe === "reset" ? i.restart(!0).pause() : xe === "restart" ? i.restart(!0) : i[xe]()), l && l(S)), (Re || !od) && (u && Re && sd(S, u), W[Oe] && sd(S, W[Oe]), _ && (pe === 1 ? S.kill(!1, 1) : W[Oe] = 0), Re || (Oe = pe === 1 ? 1 : 3, W[Oe] && sd(S, W[Oe]))), T && !Ot && Math.abs(S.getVelocity()) > (ju(T) ? T : 2500) && (rs(S.callbackAnimation), he ? he.progress(1) : rs(i, xe === "reverse" ? 1 : !pe, 1))) : j && l && !St && l(S);
        }
        if (jo) {
          var _t = E ? ne / E.duration() * (E._caScrollDist || 0) : ne;
          Xi(_t + (R._isFlipped ? 1 : 0)), jo(_t);
        }
        Lo && Lo(-ne / E.duration() * (E._caScrollDist || 0));
      }
    }, S.enable = function(U, ce) {
      S.enabled || (S.enabled = !0, ot(z, "resize", gs), I || ot(z, "scroll", Vo), Y && ot(t, "refreshInit", Y), U !== !1 && (S.progress = ye = 0, Vt = cr = fe = ue()), ce !== !1 && S.refresh());
    }, S.getTween = function(U) {
      return U && He ? He.tween : he;
    }, S.setPositions = function(U, ce, G, ne) {
      if (E) {
        var rt = E.scrollTrigger, pe = E.duration(), Ue = rt.end - rt.start;
        U = rt.start + Ue * U / pe, ce = rt.start + Ue * ce / pe;
      }
      S.refresh(!1, !1, {
        start: Pm(U, G && !!S._startClamp),
        end: Pm(ce, G && !!S._endClamp)
      }, ne), S.update();
    }, S.adjustPinSpacing = function(U) {
      if (Ht && U) {
        var ce = Ht.indexOf(P.d) + 1;
        Ht[ce] = parseFloat(Ht[ce]) + U + dt, Ht[1] = parseFloat(Ht[1]) + U + dt, wl(Ht);
      }
    }, S.disable = function(U, ce) {
      if (S.enabled && (U !== !1 && S.revert(!0, !0), S.enabled = S.isActive = !1, ce || he && he.pause(), Qn = 0, Te && (Te.uncache = 1), Y && it(t, "refreshInit", Y), Gn && (Gn.pause(), He.tween && He.tween.kill() && (He.tween = 0)), !I)) {
        for (var G = te.length; G--; )
          if (te[G].scroller === z && te[G] !== S)
            return;
        it(z, "resize", gs), I || it(z, "scroll", Vo);
      }
    }, S.kill = function(U, ce) {
      S.disable(U, ce), he && !ce && he.kill(), a && delete $h[a];
      var G = te.indexOf(S);
      G >= 0 && te.splice(G, 1), G === At && Bu > 0 && At--, G = 0, te.forEach(function(ne) {
        return ne.scroller === S.scroller && (G = 1);
      }), G || It || (S.scroll.rec = 0), i && (i.scrollTrigger = null, U && i.revert({
        kill: !1
      }), ce || i.kill()), Wt && [Wt, an, R, un].forEach(function(ne) {
        return ne.parentNode && ne.parentNode.removeChild(ne);
      }), js === S && (js = 0), d && (Te && (Te.uncache = 1), G = 0, te.forEach(function(ne) {
        return ne.pin === d && G++;
      }), G || (Te.spacer = 0)), r.onKill && r.onKill(S);
    }, te.push(S), S.enable(!1, !1), Nr && Nr(S), i && i.add && !Xe) {
      var De = S.update;
      S.update = function() {
        S.update = De, me || Ye || S.refresh();
      }, V.delayedCall(0.01, S.update), Xe = 0.01, me = Ye = 0;
    } else
      S.refresh();
    d && LC();
  }, t.register = function(r) {
    return Ho || (V = r || mx(), gx() && window.document && t.enable(), Ho = hs), Ho;
  }, t.defaults = function(r) {
    if (r)
      for (var i in r)
        au[i] = r[i];
    return au;
  }, t.disable = function(r, i) {
    hs = 0, te.forEach(function(l) {
      return l[i ? "kill" : "disable"](r);
    }), it(se, "wheel", Vo), it(Me, "scroll", Vo), clearInterval(ru), it(Me, "touchcancel", vr), it(Ee, "touchstart", vr), lu(it, Me, "pointerdown,touchstart,mousedown", Om), lu(it, Me, "pointerup,touchend,mouseup", Rm), Ec.kill(), ou(it);
    for (var o = 0; o < ie.length; o += 3)
      su(it, ie[o], ie[o + 1]), su(it, ie[o], ie[o + 2]);
  }, t.enable = function() {
    if (se = window, Me = document, nr = Me.documentElement, Ee = Me.body, V && (bc = V.utils.toArray, al = V.utils.clamp, Ih = V.core.context || vr, id = V.core.suppressOverwrites || vr, g0 = se.history.scrollRestoration || "auto", Dh = se.pageYOffset, V.core.globals("ScrollTrigger", t), Ee)) {
      hs = 1, xl = document.createElement("div"), xl.style.height = "100vh", xl.style.position = "absolute", Ex(), NC(), Ke.register(V), t.isTouch = Ke.isTouch, ii = Ke.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), ot(se, "wheel", Vo), ux = [se, Me, nr, Ee], V.matchMedia ? (t.matchMedia = function(a) {
        var u = V.matchMedia(), c;
        for (c in a)
          u.add(c, a[c]);
        return u;
      }, V.addEventListener("matchMediaInit", function() {
        return w0();
      }), V.addEventListener("matchMediaRevert", function() {
        return Sx();
      }), V.addEventListener("matchMedia", function() {
        co(0, 1), Ro("matchMedia");
      }), V.matchMedia("(orientation: portrait)", function() {
        return ad(), ad;
      })) : console.warn("Requires GSAP 3.11.0 or later"), ad(), ot(Me, "scroll", Vo);
      var r = Ee.style, i = r.borderTopStyle, o = V.core.Animation.prototype, l, s;
      for (o.revert || Object.defineProperty(o, "revert", {
        value: function() {
          return this.time(-0.01, !0);
        }
      }), r.borderTopStyle = "solid", l = jr(Ee), et.m = Math.round(l.top + et.sc()) || 0, $t.m = Math.round(l.left + $t.sc()) || 0, i ? r.borderTopStyle = i : r.removeProperty("border-top-style"), ru = setInterval(Am, 250), V.delayedCall(0.5, function() {
        return iu = 0;
      }), ot(Me, "touchcancel", vr), ot(Ee, "touchstart", vr), lu(ot, Me, "pointerdown,touchstart,mousedown", Om), lu(ot, Me, "pointerup,touchend,mouseup", Rm), Ah = V.utils.checkPrefix("transform"), Uu.push(Ah), Ho = zt(), Ec = V.delayedCall(0.2, co).pause(), Yo = [Me, "visibilitychange", function() {
        var a = se.innerWidth, u = se.innerHeight;
        Me.hidden ? (Em = a, bm = u) : (Em !== a || bm !== u) && gs();
      }, Me, "DOMContentLoaded", co, se, "load", co, se, "resize", gs], ou(ot), te.forEach(function(a) {
        return a.enable(0, 1);
      }), s = 0; s < ie.length; s += 3)
        su(it, ie[s], ie[s + 1]), su(it, ie[s], ie[s + 2]);
    }
  }, t.config = function(r) {
    "limitCallbacks" in r && (od = !!r.limitCallbacks);
    var i = r.syncInterval;
    i && clearInterval(ru) || (ru = i) && setInterval(Am, i), "ignoreMobileResize" in r && (dx = t.isTouch === 1 && r.ignoreMobileResize), "autoRefreshEvents" in r && (ou(it) || ou(ot, r.autoRefreshEvents || "none"), fx = (r.autoRefreshEvents + "").indexOf("resize") === -1);
  }, t.scrollerProxy = function(r, i) {
    var o = Yt(r), l = ie.indexOf(o), s = Po(o);
    ~l && ie.splice(l, s ? 6 : 2), i && (s ? br.unshift(se, i, Ee, i, nr, i) : br.unshift(o, i));
  }, t.clearMatchMedia = function(r) {
    te.forEach(function(i) {
      return i._ctx && i._ctx.query === r && i._ctx.kill(!0, !0);
    });
  }, t.isInViewport = function(r, i, o) {
    var l = (gn(r) ? Yt(r) : r).getBoundingClientRect(), s = l[o ? _o : xo] * i || 0;
    return o ? l.right - s > 0 && l.left + s < se.innerWidth : l.bottom - s > 0 && l.top + s < se.innerHeight;
  }, t.positionInViewport = function(r, i, o) {
    gn(r) && (r = Yt(r));
    var l = r.getBoundingClientRect(), s = l[o ? _o : xo], a = i == null ? s / 2 : i in Tc ? Tc[i] * s : ~i.indexOf("%") ? parseFloat(i) * s / 100 : parseFloat(i) || 0;
    return o ? (l.left + a) / se.innerWidth : (l.top + a) / se.innerHeight;
  }, t.killAll = function(r) {
    if (te.slice(0).forEach(function(o) {
      return o.vars.id !== "ScrollSmoother" && o.kill();
    }), r !== !0) {
      var i = Oo.killAll || [];
      Oo = {}, i.forEach(function(o) {
        return o();
      });
    }
  }, t;
}();
oe.version = "3.12.2";
oe.saveStyles = function(t) {
  return t ? bc(t).forEach(function(e) {
    if (e && e.style) {
      var n = hn.indexOf(e);
      n >= 0 && hn.splice(n, 5), hn.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), V.core.getCache(e), Ih());
    }
  }) : hn;
};
oe.revert = function(t, e) {
  return w0(!t, e);
};
oe.create = function(t, e) {
  return new oe(t, e);
};
oe.refresh = function(t) {
  return t ? gs() : (Ho || oe.register()) && co(!0);
};
oe.update = function(t) {
  return ++ie.cache && Wr(t === !0 ? 2 : 0);
};
oe.clearScrollMemory = Cx;
oe.maxScroll = function(t, e) {
  return Ur(t, e ? $t : et);
};
oe.getScrollFunc = function(t, e) {
  return $i(Yt(t), e ? $t : et);
};
oe.getById = function(t) {
  return $h[t];
};
oe.getAll = function() {
  return te.filter(function(t) {
    return t.vars.id !== "ScrollSmoother";
  });
};
oe.isScrolling = function() {
  return !!Fn;
};
oe.snapDirectional = x0;
oe.addEventListener = function(t, e) {
  var n = Oo[t] || (Oo[t] = []);
  ~n.indexOf(e) || n.push(e);
};
oe.removeEventListener = function(t, e) {
  var n = Oo[t], r = n && n.indexOf(e);
  r >= 0 && n.splice(r, 1);
};
oe.batch = function(t, e) {
  var n = [], r = {}, i = e.interval || 0.016, o = e.batchMax || 1e9, l = function(u, c) {
    var f = [], h = [], d = V.delayedCall(i, function() {
      c(f, h), f = [], h = [];
    }).pause();
    return function(g) {
      f.length || d.restart(!0), f.push(g.trigger), h.push(g), o <= f.length && d.progress(1);
    };
  }, s;
  for (s in e)
    r[s] = s.substr(0, 2) === "on" && Dt(e[s]) && s !== "onRefreshInit" ? l(s, e[s]) : e[s];
  return Dt(o) && (o = o(), ot(oe, "refresh", function() {
    return o = e.batchMax();
  })), bc(t).forEach(function(a) {
    var u = {};
    for (s in r)
      u[s] = r[s];
    u.trigger = a, n.push(oe.create(u));
  }), n;
};
var jm = function(e, n, r, i) {
  return n > i ? e(i) : n < 0 && e(0), r > i ? (i - n) / (r - n) : r < 0 ? n / (n - r) : 1;
}, cd = function t(e, n) {
  n === !0 ? e.style.removeProperty("touch-action") : e.style.touchAction = n === !0 ? "auto" : n ? "pan-" + n + (Ke.isTouch ? " pinch-zoom" : "") : "none", e === nr && t(Ee, n);
}, du = {
  auto: 1,
  scroll: 1
}, WC = function(e) {
  var n = e.event, r = e.target, i = e.axis, o = (n.changedTouches ? n.changedTouches[0] : n).target, l = o._gsap || V.core.getCache(o), s = zt(), a;
  if (!l._isScrollT || s - l._isScrollT > 2e3) {
    for (; o && o !== Ee && (o.scrollHeight <= o.clientHeight && o.scrollWidth <= o.clientWidth || !(du[(a = Nn(o)).overflowY] || du[a.overflowX])); )
      o = o.parentNode;
    l._isScroll = o && o !== r && !Po(o) && (du[(a = Nn(o)).overflowY] || du[a.overflowX]), l._isScrollT = s;
  }
  (l._isScroll || i === "x") && (n.stopPropagation(), n._gsapAllow = !0);
}, Tx = function(e, n, r, i) {
  return Ke.create({
    target: e,
    capture: !0,
    debounce: !1,
    lockAxis: !0,
    type: n,
    onWheel: i = i && WC,
    onPress: i,
    onDrag: i,
    onScroll: i,
    onEnable: function() {
      return r && ot(Me, Ke.eventTypes[0], Fm, !1, !0);
    },
    onDisable: function() {
      return it(Me, Ke.eventTypes[0], Fm, !0);
    }
  });
}, HC = /(input|label|select|textarea)/i, Lm, Fm = function(e) {
  var n = HC.test(e.target.tagName);
  (n || Lm) && (e._gsapAllow = !0, Lm = n);
}, YC = function(e) {
  io(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
  var n = e, r = n.normalizeScrollX, i = n.momentum, o = n.allowNestedScroll, l = n.onRelease, s, a, u = Yt(e.target) || nr, c = V.core.globals().ScrollSmoother, f = c && c.get(), h = ii && (e.content && Yt(e.content) || f && e.content !== !1 && !f.smooth() && f.content()), d = $i(u, et), g = $i(u, $t), p = 1, y = (Ke.isTouch && se.visualViewport ? se.visualViewport.scale * se.visualViewport.width : se.outerWidth) / se.innerWidth, v = 0, m = Dt(i) ? function() {
    return i(s);
  } : function() {
    return i || 2.8;
  }, _, x, C = Tx(u, e.type, !0, o), b = function() {
    return x = !1;
  }, E = vr, T = vr, O = function() {
    a = Ur(u, et), T = al(ii ? 1 : 0, a), r && (E = al(0, Ur(u, $t))), _ = wo;
  }, P = function() {
    h._gsap.y = ps(parseFloat(h._gsap.y) + d.offset) + "px", h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(h._gsap.y) + ", 0, 1)", d.offset = d.cacheID = 0;
  }, j = function() {
    if (x) {
      requestAnimationFrame(b);
      var M = ps(s.deltaY / 2), $ = T(d.v - M);
      if (h && $ !== d.v + d.offset) {
        d.offset = $ - d.v;
        var S = ps((parseFloat(h && h._gsap.y) || 0) - d.offset);
        h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + S + ", 0, 1)", h._gsap.y = S + "px", d.cacheID = ie.cache, Wr();
      }
      return !0;
    }
    d.offset && P(), x = !0;
  }, z, Q, I, D, W = function() {
    O(), z.isActive() && z.vars.scrollY > a && (d() > a ? z.progress(1) && d(a) : z.resetTo("scrollY", a));
  };
  return h && V.set(h, {
    y: "+=0"
  }), e.ignoreCheck = function(L) {
    return ii && L.type === "touchmove" && j() || p > 1.05 && L.type !== "touchstart" || s.isGesturing || L.touches && L.touches.length > 1;
  }, e.onPress = function() {
    x = !1;
    var L = p;
    p = ps((se.visualViewport && se.visualViewport.scale || 1) / y), z.pause(), L !== p && cd(u, p > 1.01 ? !0 : r ? !1 : "x"), Q = g(), I = d(), O(), _ = wo;
  }, e.onRelease = e.onGestureStart = function(L, M) {
    if (d.offset && P(), !M)
      D.restart(!0);
    else {
      ie.cache++;
      var $ = m(), S, Y;
      r && (S = g(), Y = S + $ * 0.05 * -L.velocityX / 0.227, $ *= jm(g, S, Y, Ur(u, $t)), z.vars.scrollX = E(Y)), S = d(), Y = S + $ * 0.05 * -L.velocityY / 0.227, $ *= jm(d, S, Y, Ur(u, et)), z.vars.scrollY = T(Y), z.invalidate().duration($).play(0.01), (ii && z.vars.scrollY >= a || S >= a - 1) && V.to({}, {
        onUpdate: W,
        duration: $
      });
    }
    l && l(L);
  }, e.onWheel = function() {
    z._ts && z.pause(), zt() - v > 1e3 && (_ = 0, v = zt());
  }, e.onChange = function(L, M, $, S, Y) {
    if (wo !== _ && O(), M && r && g(E(S[2] === M ? Q + (L.startX - L.x) : g() + M - S[1])), $) {
      d.offset && P();
      var J = Y[2] === $, nt = J ? I + L.startY - L.y : d() + $ - Y[1], fe = T(nt);
      J && nt !== fe && (I += fe - nt), d(fe);
    }
    ($ || M) && Wr();
  }, e.onEnable = function() {
    cd(u, r ? !1 : "x"), oe.addEventListener("refresh", W), ot(se, "resize", W), d.smooth && (d.target.style.scrollBehavior = "auto", d.smooth = g.smooth = !1), C.enable();
  }, e.onDisable = function() {
    cd(u, !0), it(se, "resize", W), oe.removeEventListener("refresh", W), C.kill();
  }, e.lockAxis = e.lockAxis !== !1, s = new Ke(e), s.iOS = ii, ii && !d() && d(1), ii && V.ticker.add(vr), D = s._dc, z = V.to(s, {
    ease: "power4",
    paused: !0,
    scrollX: r ? "+=0.1" : "+=0",
    scrollY: "+=0.1",
    modifiers: {
      scrollY: bx(d, d(), function() {
        return z.pause();
      })
    },
    onUpdate: Wr,
    onComplete: D.vars.onComplete
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
  var e = t instanceof Ke ? t : YC(t);
  return dn && dn.target === e.target && dn.kill(), Po(e.target) && (dn = e), e;
};
oe.core = {
  // smaller file size way to leverage in ScrollSmoother and Observer
  _getVelocityProp: Nh,
  _inputObserver: Tx,
  _scrollers: ie,
  _proxies: br,
  bridge: {
    // when normalizeScroll sets the scroll position (ss = setScroll)
    ss: function() {
      Fn || Ro("scrollStart"), Fn = zt();
    },
    // a way to get the _refreshing value in Observer
    ref: function() {
      return St;
    }
  }
};
mx() && V.registerPlugin(oe);
zi.registerPlugin(oe);
const Bm = k.createContext(null), Um = (t) => {
  const e = k.useState(!1), n = k.useRef(null);
  var r = window.innerWidth;
  k.useEffect(() => {
    window.addEventListener("mouseover", (o) => {
    }), window.addEventListener("resize", () => {
      r == window.innerWidth || (r = window.innerWidth, window.location.reload());
    }), screen.availWidth < 500 || window.innerHeight < 500 ? e[1](!0) : e[1](!1);
  }, []);
  const i = k.useRef(null);
  return k.useContext(Bm), /* @__PURE__ */ w.jsx(Bm.Provider, { value: { viewent: i }, children: /* @__PURE__ */ w.jsxs("div", { className: "base", ref: n, style: { overflow: "hidden", padding: "0px", margin: "0px", textAlign: "center" }, children: [
    /* @__PURE__ */ w.jsx("div", { style: { width: "100%", height: e[0] ? "3em" : "12em" } }),
    /* @__PURE__ */ w.jsx(XC, { phonestate: e }),
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
}, XC = (t) => {
  const e = k.useState(!1), n = t.phonestate, r = {
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
  }, l = k.useState({
    name: localStorage.getItem("name") === null ? "" : localStorage.getItem("name"),
    adress: localStorage.getItem("adress") === null ? "" : localStorage.getItem("adress"),
    limit: localStorage.getItem("limit") === null ? "" : localStorage.getItem("limit"),
    problem: localStorage.getItem("problem") === null ? "" : localStorage.getItem("problem"),
    purpose: localStorage.getItem("purpose") === null ? "" : localStorage.getItem("purpose"),
    etc: localStorage.getItem("etc") === null ? "" : localStorage.getItem("etc")
  });
  k.useEffect(() => {
  }, [l[0]]), k.useEffect(() => {
    setTimeout(() => {
      f();
    }, 100);
  }, []);
  const s = (d, g) => {
    if (g == "name") {
      var { name: p, ...y } = l[0];
      l[1]({ [g]: d.value, ...y }), localStorage.setItem(g, d.value);
    } else if (g == "adress") {
      var { adress: v, ...y } = l[0];
      l[1]({ [g]: d.value, ...y }), localStorage.setItem(g, d.value);
    } else if (g == "limit") {
      var { limit: m, ...y } = l[0];
      l[1]({ [g]: d.value, ...y }), localStorage.setItem(g, d.value);
    } else if (g == "problem") {
      var { problem: _, ...y } = l[0];
      l[1]({ [g]: d.value, ...y }), localStorage.setItem(g, d.value);
    } else if (g == "purpose") {
      var { purpose: x, ...y } = l[0];
      l[1]({ [g]: d.value, ...y }), localStorage.setItem(g, d.value);
    } else if (g == "etc") {
      var { etc: C, ...y } = l[0];
      l[1]({ [g]: d.value, ...y }), localStorage.setItem(g, d.value);
    }
    e[1](!e[0]);
  };
  var a = null, u = null;
  const c = (d, g, p, y, v, m, _, x, C, b) => {
    d.font = `${C}px Kosugi Maru`;
    for (let E = 0; E < _; E++)
      d.fillText(` ${b.substring(0 + m * E, m * (E + 1))}`, g, p + C * E);
    d.font = `${x}px Kosugi Maru`;
  }, f = () => {
    a = document.getElementById("canvas"), u = a.getContext("2d");
    var d = 100, g = 100, p = 500, y = 2894, v = 4093;
    u.clearRect(0, 0, 2894, 4093), u.font = `${d}px Kosugi Maru`, u.fillStyle = "white", u.fillRect(0, 0, y, v), u.fillStyle = "black", u.fillText("簡易依頼書", g + d * 11, p - d * 1.5), u.fillText(`氏名　${l[0].name}`, g + d * 2, p + d * 1), u.fillText("連絡先", g + d * 1, p + d * 4), c(u, g + d * 5, p + d * 4, 0, 0, 128, 1, d, 70, l[0].adress), u.fillText("希望納期", g, p + d * 6), c(u, g + d * 5, p + d * 6, 0, 0, 64, 1, d, 70, l[0].limit), u.fillText("課題", g, p + d * 10), c(u, g + d * 2, p + d * 11, 0, 0, 32, 8, d, 66, l[0].problem), u.fillText("目的", g, p + d * 17), c(u, g + d * 2, p + d * 18, 0, 0, 32, 8, d, 66, l[0].purpose), u.fillText("その他", g, p + d * 25), c(u, g + d * 2, p + d * 26, 0, 0, 32, 10, d, 66, l[0].etc);
    let m = /* @__PURE__ */ new Date();
    u.fillText(`作成日:${m.getFullYear()}/${m.getUTCMonth() + 1}/${m.getDate()}`, y - d * 8 - g, v - p * 0 - d * 1);
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
                const y = document.createElement("img"), v = URL.createObjectURL(p);
                h = v, y.src = v;
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
var k0 = Ma(), Z = (t) => Ra(t, k0), S0 = Ma();
Z.write = (t) => Ra(t, S0);
var rf = Ma();
Z.onStart = (t) => Ra(t, rf);
var C0 = Ma();
Z.onFrame = (t) => Ra(t, C0);
var E0 = Ma();
Z.onFinish = (t) => Ra(t, E0);
var kl = [];
Z.setTimeout = (t, e) => {
  let n = Z.now() + e, r = () => {
    let o = kl.findIndex((l) => l.cancel == r);
    ~o && kl.splice(o, 1), vi -= ~o ? 1 : 0;
  }, i = { time: n, handler: t, cancel: r };
  return kl.splice(Px(n), 0, i), vi += 1, Ox(), i;
};
var Px = (t) => ~(~kl.findIndex((e) => e.time > t) || ~kl.length);
Z.cancel = (t) => {
  rf.delete(t), C0.delete(t), E0.delete(t), k0.delete(t), S0.delete(t);
};
Z.sync = (t) => {
  Lh = !0, Z.batchedUpdates(t), Lh = !1;
};
Z.throttle = (t) => {
  let e;
  function n() {
    try {
      t(...e);
    } finally {
      e = null;
    }
  }
  function r(...i) {
    e = i, Z.onStart(n);
  }
  return r.handler = t, r.cancel = () => {
    rf.delete(n), e = null;
  }, r;
};
var b0 = typeof window < "u" ? window.requestAnimationFrame : () => {
};
Z.use = (t) => b0 = t;
Z.now = typeof performance < "u" ? () => performance.now() : Date.now;
Z.batchedUpdates = (t) => t();
Z.catch = console.error;
Z.frameLoop = "always";
Z.advance = () => {
  Z.frameLoop !== "demand" ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : Mx();
};
var mi = -1, vi = 0, Lh = !1;
function Ra(t, e) {
  Lh ? (e.delete(t), t(0)) : (e.add(t), Ox());
}
function Ox() {
  mi < 0 && (mi = 0, Z.frameLoop !== "demand" && b0(Rx));
}
function GC() {
  mi = -1;
}
function Rx() {
  ~mi && (b0(Rx), Z.batchedUpdates(Mx));
}
function Mx() {
  let t = mi;
  mi = Z.now();
  let e = Px(mi);
  if (e && (Nx(kl.splice(0, e), (n) => n.handler()), vi -= e), !vi) {
    GC();
    return;
  }
  rf.flush(), k0.flush(t ? Math.min(64, mi - t) : 16.667), C0.flush(), S0.flush(), E0.flush();
}
function Ma() {
  let t = /* @__PURE__ */ new Set(), e = t;
  return { add(n) {
    vi += e == t && !t.has(n) ? 1 : 0, t.add(n);
  }, delete(n) {
    return vi -= e == t && t.has(n) ? 1 : 0, t.delete(n);
  }, flush(n) {
    e.size && (t = /* @__PURE__ */ new Set(), vi -= e.size, Nx(e, (r) => r(n) && t.add(r)), vi += t.size, e = t);
  } };
}
function Nx(t, e) {
  t.forEach((n) => {
    try {
      e(n);
    } catch (r) {
      Z.catch(r);
    }
  });
}
var QC = Object.defineProperty, qC = (t, e) => {
  for (var n in e)
    QC(t, n, { get: e[n], enumerable: !0 });
}, ur = {};
qC(ur, { assign: () => ZC, colors: () => Ri, createStringInterpolator: () => P0, skipAnimation: () => Ix, to: () => Ax, willAdvance: () => O0 });
function Fh() {
}
var KC = (t, e, n) => Object.defineProperty(t, e, { value: n, writable: !0, configurable: !0 }), N = { arr: Array.isArray, obj: (t) => !!t && t.constructor.name === "Object", fun: (t) => typeof t == "function", str: (t) => typeof t == "string", num: (t) => typeof t == "number", und: (t) => t === void 0 };
function zr(t, e) {
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
var q = (t, e) => t.forEach(e);
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
function Ls(t, e) {
  if (t.size) {
    let n = Array.from(t);
    t.clear(), q(n, e);
  }
}
var ms = (t, ...e) => Ls(t, (n) => n(...e)), T0 = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent), P0, Ax, Ri = null, Ix = !1, O0 = Fh, ZC = (t) => {
  t.to && (Ax = t.to), t.now && (Z.now = t.now), t.colors !== void 0 && (Ri = t.colors), t.skipAnimation != null && (Ix = t.skipAnimation), t.createStringInterpolator && (P0 = t.createStringInterpolator), t.requestAnimationFrame && Z.use(t.requestAnimationFrame), t.batchedUpdates && (Z.batchedUpdates = t.batchedUpdates), t.willAdvance && (O0 = t.willAdvance), t.frameLoop && (Z.frameLoop = t.frameLoop);
}, Fs = /* @__PURE__ */ new Set(), In = [], fd = [], Pc = 0, of = { get idle() {
  return !Fs.size && !In.length;
}, start(t) {
  Pc > t.priority ? (Fs.add(t), Z.onStart(JC)) : (zx(t), Z(Bh));
}, advance: Bh, sort(t) {
  if (Pc)
    Z.onFrame(() => of.sort(t));
  else {
    let e = In.indexOf(t);
    ~e && (In.splice(e, 1), $x(t));
  }
}, clear() {
  In = [], Fs.clear();
} };
function JC() {
  Fs.forEach(zx), Fs.clear(), Z(Bh);
}
function zx(t) {
  In.includes(t) || $x(t);
}
function $x(t) {
  In.splice(eE(In, (e) => e.priority > t.priority), 0, t);
}
function Bh(t) {
  let e = fd;
  for (let n = 0; n < In.length; n++) {
    let r = In[n];
    Pc = r.priority, r.idle || (O0(r), r.advance(t), r.idle || e.push(r));
  }
  return Pc = 0, fd = In, fd.length = 0, In = e, In.length > 0;
}
function eE(t, e) {
  let n = t.findIndex(e);
  return n < 0 ? t.length : n;
}
var tE = (t, e, n) => Math.min(Math.max(n, t), e), nE = { transparent: 0, aliceblue: 4042850303, antiquewhite: 4209760255, aqua: 16777215, aquamarine: 2147472639, azure: 4043309055, beige: 4126530815, bisque: 4293182719, black: 255, blanchedalmond: 4293643775, blue: 65535, blueviolet: 2318131967, brown: 2771004159, burlywood: 3736635391, burntsienna: 3934150143, cadetblue: 1604231423, chartreuse: 2147418367, chocolate: 3530104575, coral: 4286533887, cornflowerblue: 1687547391, cornsilk: 4294499583, crimson: 3692313855, cyan: 16777215, darkblue: 35839, darkcyan: 9145343, darkgoldenrod: 3095792639, darkgray: 2846468607, darkgreen: 6553855, darkgrey: 2846468607, darkkhaki: 3182914559, darkmagenta: 2332068863, darkolivegreen: 1433087999, darkorange: 4287365375, darkorchid: 2570243327, darkred: 2332033279, darksalmon: 3918953215, darkseagreen: 2411499519, darkslateblue: 1211993087, darkslategray: 793726975, darkslategrey: 793726975, darkturquoise: 13554175, darkviolet: 2483082239, deeppink: 4279538687, deepskyblue: 12582911, dimgray: 1768516095, dimgrey: 1768516095, dodgerblue: 512819199, firebrick: 2988581631, floralwhite: 4294635775, forestgreen: 579543807, fuchsia: 4278255615, gainsboro: 3705462015, ghostwhite: 4177068031, gold: 4292280575, goldenrod: 3668254975, gray: 2155905279, green: 8388863, greenyellow: 2919182335, grey: 2155905279, honeydew: 4043305215, hotpink: 4285117695, indianred: 3445382399, indigo: 1258324735, ivory: 4294963455, khaki: 4041641215, lavender: 3873897215, lavenderblush: 4293981695, lawngreen: 2096890111, lemonchiffon: 4294626815, lightblue: 2916673279, lightcoral: 4034953471, lightcyan: 3774873599, lightgoldenrodyellow: 4210742015, lightgray: 3553874943, lightgreen: 2431553791, lightgrey: 3553874943, lightpink: 4290167295, lightsalmon: 4288707327, lightseagreen: 548580095, lightskyblue: 2278488831, lightslategray: 2005441023, lightslategrey: 2005441023, lightsteelblue: 2965692159, lightyellow: 4294959359, lime: 16711935, limegreen: 852308735, linen: 4210091775, magenta: 4278255615, maroon: 2147483903, mediumaquamarine: 1724754687, mediumblue: 52735, mediumorchid: 3126187007, mediumpurple: 2473647103, mediumseagreen: 1018393087, mediumslateblue: 2070474495, mediumspringgreen: 16423679, mediumturquoise: 1221709055, mediumvioletred: 3340076543, midnightblue: 421097727, mintcream: 4127193855, mistyrose: 4293190143, moccasin: 4293178879, navajowhite: 4292783615, navy: 33023, oldlace: 4260751103, olive: 2155872511, olivedrab: 1804477439, orange: 4289003775, orangered: 4282712319, orchid: 3664828159, palegoldenrod: 4008225535, palegreen: 2566625535, paleturquoise: 2951671551, palevioletred: 3681588223, papayawhip: 4293907967, peachpuff: 4292524543, peru: 3448061951, pink: 4290825215, plum: 3718307327, powderblue: 2967529215, purple: 2147516671, rebeccapurple: 1714657791, red: 4278190335, rosybrown: 3163525119, royalblue: 1097458175, saddlebrown: 2336560127, salmon: 4202722047, sandybrown: 4104413439, seagreen: 780883967, seashell: 4294307583, sienna: 2689740287, silver: 3233857791, skyblue: 2278484991, slateblue: 1784335871, slategray: 1887473919, slategrey: 1887473919, snow: 4294638335, springgreen: 16744447, steelblue: 1182971135, tan: 3535047935, teal: 8421631, thistle: 3636451583, tomato: 4284696575, turquoise: 1088475391, violet: 4001558271, wheat: 4125012991, white: 4294967295, whitesmoke: 4126537215, yellow: 4294902015, yellowgreen: 2597139199 }, ir = "[-+]?\\d*\\.?\\d+", Oc = ir + "%";
function lf(...t) {
  return "\\(\\s*(" + t.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var rE = new RegExp("rgb" + lf(ir, ir, ir)), iE = new RegExp("rgba" + lf(ir, ir, ir, ir)), oE = new RegExp("hsl" + lf(ir, Oc, Oc)), lE = new RegExp("hsla" + lf(ir, Oc, Oc, ir)), sE = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, aE = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, uE = /^#([0-9a-fA-F]{6})$/, cE = /^#([0-9a-fA-F]{8})$/;
function fE(t) {
  let e;
  return typeof t == "number" ? t >>> 0 === t && t >= 0 && t <= 4294967295 ? t : null : (e = uE.exec(t)) ? parseInt(e[1] + "ff", 16) >>> 0 : Ri && Ri[t] !== void 0 ? Ri[t] : (e = rE.exec(t)) ? (Wo(e[1]) << 24 | Wo(e[2]) << 16 | Wo(e[3]) << 8 | 255) >>> 0 : (e = iE.exec(t)) ? (Wo(e[1]) << 24 | Wo(e[2]) << 16 | Wo(e[3]) << 8 | Hm(e[4])) >>> 0 : (e = sE.exec(t)) ? parseInt(e[1] + e[1] + e[2] + e[2] + e[3] + e[3] + "ff", 16) >>> 0 : (e = cE.exec(t)) ? parseInt(e[1], 16) >>> 0 : (e = aE.exec(t)) ? parseInt(e[1] + e[1] + e[2] + e[2] + e[3] + e[3] + e[4] + e[4], 16) >>> 0 : (e = oE.exec(t)) ? (Vm(Wm(e[1]), hu(e[2]), hu(e[3])) | 255) >>> 0 : (e = lE.exec(t)) ? (Vm(Wm(e[1]), hu(e[2]), hu(e[3])) | Hm(e[4])) >>> 0 : null;
}
function dd(t, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
}
function Vm(t, e, n) {
  let r = n < 0.5 ? n * (1 + e) : n + e - n * e, i = 2 * n - r, o = dd(i, r, t + 1 / 3), l = dd(i, r, t), s = dd(i, r, t - 1 / 3);
  return Math.round(o * 255) << 24 | Math.round(l * 255) << 16 | Math.round(s * 255) << 8;
}
function Wo(t) {
  let e = parseInt(t, 10);
  return e < 0 ? 0 : e > 255 ? 255 : e;
}
function Wm(t) {
  return (parseFloat(t) % 360 + 360) % 360 / 360;
}
function Hm(t) {
  let e = parseFloat(t);
  return e < 0 ? 0 : e > 1 ? 255 : Math.round(e * 255);
}
function hu(t) {
  let e = parseFloat(t);
  return e < 0 ? 0 : e > 100 ? 1 : e / 100;
}
function Ym(t) {
  let e = fE(t);
  if (e === null)
    return t;
  e = e || 0;
  let n = (e & 4278190080) >>> 24, r = (e & 16711680) >>> 16, i = (e & 65280) >>> 8, o = (e & 255) / 255;
  return `rgba(${n}, ${r}, ${i}, ${o})`;
}
var ga = (t, e, n) => {
  if (N.fun(t))
    return t;
  if (N.arr(t))
    return ga({ range: t, output: e, extrapolate: n });
  if (N.str(t.output[0]))
    return P0(t);
  let r = t, i = r.output, o = r.range || [0, 1], l = r.extrapolateLeft || r.extrapolate || "extend", s = r.extrapolateRight || r.extrapolate || "extend", a = r.easing || ((u) => u);
  return (u) => {
    let c = hE(u, o);
    return dE(u, o[c], o[c + 1], i[c], i[c + 1], a, l, s, r.map);
  };
};
function dE(t, e, n, r, i, o, l, s, a) {
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
function hE(t, e) {
  for (var n = 1; n < e.length - 1 && !(e[n] >= t); ++n)
    ;
  return n - 1;
}
var pE = (t, e = "end") => (n) => {
  n = e === "end" ? Math.min(n, 0.999) : Math.max(n, 1e-3);
  let r = n * t, i = e === "end" ? Math.floor(r) : Math.ceil(r);
  return tE(0, 1, i / t);
}, Rc = 1.70158, pu = Rc * 1.525, Xm = Rc + 1, Gm = 2 * Math.PI / 3, Qm = 2 * Math.PI / 4.5, gu = (t) => t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375, Dx = { linear: (t) => t, easeInQuad: (t) => t * t, easeOutQuad: (t) => 1 - (1 - t) * (1 - t), easeInOutQuad: (t) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2, easeInCubic: (t) => t * t * t, easeOutCubic: (t) => 1 - Math.pow(1 - t, 3), easeInOutCubic: (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2, easeInQuart: (t) => t * t * t * t, easeOutQuart: (t) => 1 - Math.pow(1 - t, 4), easeInOutQuart: (t) => t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2, easeInQuint: (t) => t * t * t * t * t, easeOutQuint: (t) => 1 - Math.pow(1 - t, 5), easeInOutQuint: (t) => t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2, easeInSine: (t) => 1 - Math.cos(t * Math.PI / 2), easeOutSine: (t) => Math.sin(t * Math.PI / 2), easeInOutSine: (t) => -(Math.cos(Math.PI * t) - 1) / 2, easeInExpo: (t) => t === 0 ? 0 : Math.pow(2, 10 * t - 10), easeOutExpo: (t) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t), easeInOutExpo: (t) => t === 0 ? 0 : t === 1 ? 1 : t < 0.5 ? Math.pow(2, 20 * t - 10) / 2 : (2 - Math.pow(2, -20 * t + 10)) / 2, easeInCirc: (t) => 1 - Math.sqrt(1 - Math.pow(t, 2)), easeOutCirc: (t) => Math.sqrt(1 - Math.pow(t - 1, 2)), easeInOutCirc: (t) => t < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * t, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * t + 2, 2)) + 1) / 2, easeInBack: (t) => Xm * t * t * t - Rc * t * t, easeOutBack: (t) => 1 + Xm * Math.pow(t - 1, 3) + Rc * Math.pow(t - 1, 2), easeInOutBack: (t) => t < 0.5 ? Math.pow(2 * t, 2) * ((pu + 1) * 2 * t - pu) / 2 : (Math.pow(2 * t - 2, 2) * ((pu + 1) * (t * 2 - 2) + pu) + 2) / 2, easeInElastic: (t) => t === 0 ? 0 : t === 1 ? 1 : -Math.pow(2, 10 * t - 10) * Math.sin((t * 10 - 10.75) * Gm), easeOutElastic: (t) => t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * Gm) + 1, easeInOutElastic: (t) => t === 0 ? 0 : t === 1 ? 1 : t < 0.5 ? -(Math.pow(2, 20 * t - 10) * Math.sin((20 * t - 11.125) * Qm)) / 2 : Math.pow(2, -20 * t + 10) * Math.sin((20 * t - 11.125) * Qm) / 2 + 1, easeInBounce: (t) => 1 - gu(1 - t), easeOutBounce: gu, easeInOutBounce: (t) => t < 0.5 ? (1 - gu(1 - 2 * t)) / 2 : (1 + gu(2 * t - 1)) / 2, steps: pE }, jl = Symbol.for("FluidValue.get"), Mo = Symbol.for("FluidValue.observers"), An = (t) => !!(t && t[jl]), Xt = (t) => t && t[jl] ? t[jl]() : t, qm = (t) => t[Mo] || null;
function gE(t, e) {
  t.eventObserved ? t.eventObserved(e) : t(e);
}
function ma(t, e) {
  let n = t[Mo];
  n && n.forEach((r) => {
    gE(r, e);
  });
}
var t5, n5, B1, jx = (B1 = class {
  constructor(t) {
    F(this, t5);
    F(this, n5);
    if (!t && !(t = this.get))
      throw Error("Unknown getter");
    mE(this, t);
  }
}, t5 = jl, n5 = Mo, B1), mE = (t, e) => Lx(t, jl, e);
function Ul(t, e) {
  if (t[jl]) {
    let n = t[Mo];
    n || Lx(t, Mo, n = /* @__PURE__ */ new Set()), n.has(e) || (n.add(e), t.observerAdded && t.observerAdded(n.size, e));
  }
  return e;
}
function va(t, e) {
  let n = t[Mo];
  if (n && n.has(e)) {
    let r = n.size - 1;
    r ? n.delete(e) : t[Mo] = null, t.observerRemoved && t.observerRemoved(r, e);
  }
}
var Lx = (t, e, n) => Object.defineProperty(t, e, { value: n, writable: !0, configurable: !0 }), Wu = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, vE = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, Km = new RegExp(`(${Wu.source})(%|[a-z]+)`, "i"), yE = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, sf = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/, Fx = (t) => {
  let [e, n] = _E(t);
  if (!e || T0())
    return t;
  let r = window.getComputedStyle(document.documentElement).getPropertyValue(e);
  return r ? r.trim() : n && n.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(n) || t : n && sf.test(n) ? Fx(n) : n || t;
}, _E = (t) => {
  let e = sf.exec(t);
  if (!e)
    return [,];
  let [, n, r] = e;
  return [n, r];
}, hd, xE = (t, e, n, r, i) => `rgba(${Math.round(e)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`, Bx = (t) => {
  hd || (hd = Ri ? new RegExp(`(${Object.keys(Ri).join("|")})(?!\\w)`, "g") : /^\b$/);
  let e = t.output.map((i) => Xt(i).replace(sf, Fx).replace(vE, Ym).replace(hd, Ym)), n = e.map((i) => i.match(Wu).map(Number)), r = n[0].map((i, o) => n.map((l) => {
    if (!(o in l))
      throw Error('The arity of each "output" value must be equal');
    return l[o];
  })).map((i) => ga({ ...t, output: i }));
  return (i) => {
    var s;
    let o = !Km.test(e[0]) && ((s = e.find((a) => Km.test(a))) == null ? void 0 : s.replace(Wu, "")), l = 0;
    return e[0].replace(Wu, () => `${r[l++](i)}${o || ""}`).replace(yE, xE);
  };
}, R0 = "react-spring: ", Ux = (t) => {
  let e = t, n = !1;
  if (typeof e != "function")
    throw new TypeError(`${R0}once requires a function parameter`);
  return (...r) => {
    n || (e(...r), n = !0);
  };
}, wE = Ux(console.warn);
function kE() {
  wE(`${R0}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
var SE = Ux(console.warn);
function CE() {
  SE(`${R0}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
}
function af(t) {
  return N.str(t) && (t[0] == "#" || /\d/.test(t) || !T0() && sf.test(t) || t in (Ri || {}));
}
var fo = T0() ? k.useEffect : k.useLayoutEffect, EE = () => {
  let t = k.useRef(!1);
  return fo(() => (t.current = !0, () => {
    t.current = !1;
  }), []), t;
};
function M0() {
  let t = k.useState()[1], e = EE();
  return () => {
    e.current && t(Math.random());
  };
}
function bE(t, e) {
  let [n] = k.useState(() => ({ inputs: e, result: t() })), r = k.useRef(), i = r.current, o = i;
  return o ? e && o.inputs && TE(e, o.inputs) || (o = { inputs: e, result: t() }) : o = n, k.useEffect(() => {
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
var N0 = (t) => k.useEffect(t, PE), PE = [];
function Uh(t) {
  let e = k.useRef();
  return k.useEffect(() => {
    e.current = t;
  }), e.current;
}
var ya = Symbol.for("Animated:node"), OE = (t) => !!t && t[ya] === t, yr = (t) => t && t[ya], A0 = (t, e) => KC(t, ya, e), uf = (t) => t && t[ya] && t[ya].getPayload(), Vx = class {
  constructor() {
    F(this, "payload");
    A0(this, this);
  }
  getPayload() {
    return this.payload || [];
  }
}, Na = class extends Vx {
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
    return new Na(e);
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
}, _a = class extends Na {
  constructor(e) {
    super(0);
    F(this, "_string", null);
    F(this, "_toString");
    this._toString = ga({ output: [e, e] });
  }
  static create(e) {
    return new _a(e);
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
    e && (this._toString = ga({ output: [this.getValue(), e] })), this._value = 0, super.reset();
  }
}, Mc = { dependencies: null }, cf = class extends Vx {
  constructor(t) {
    super(), this.source = t, this.setValue(t);
  }
  getValue(t) {
    let e = {};
    return Pr(this.source, (n, r) => {
      OE(n) ? e[r] = n.getValue(t) : An(n) ? e[r] = Xt(n) : t || (e[r] = n);
    }), e;
  }
  setValue(t) {
    this.source = t, this.payload = this._makePayload(t);
  }
  reset() {
    this.payload && q(this.payload, (t) => t.reset());
  }
  _makePayload(t) {
    if (t) {
      let e = /* @__PURE__ */ new Set();
      return Pr(t, this._addToPayload, e), Array.from(e);
    }
  }
  _addToPayload(t) {
    Mc.dependencies && An(t) && Mc.dependencies.add(t);
    let e = uf(t);
    e && q(e, (n) => this.add(n));
  }
}, Wx = class extends cf {
  constructor(e) {
    super(e);
  }
  static create(e) {
    return new Wx(e);
  }
  getValue() {
    return this.source.map((e) => e.getValue());
  }
  setValue(e) {
    let n = this.getPayload();
    return e.length == n.length ? n.map((r, i) => r.setValue(e[i])).some(Boolean) : (super.setValue(e.map(RE)), !0);
  }
};
function RE(t) {
  return (af(t) ? _a : Na).create(t);
}
function Vh(t) {
  let e = yr(t);
  return e ? e.constructor : N.arr(t) ? Wx : af(t) ? _a : Na;
}
var Zm = (t, e) => {
  let n = !N.fun(t) || t.prototype && t.prototype.isReactComponent;
  return k.forwardRef((r, i) => {
    let o = k.useRef(null), l = n && k.useCallback((g) => {
      o.current = AE(i, g);
    }, [i]), [s, a] = NE(r, e), u = M0(), c = () => {
      let g = o.current;
      n && !g || (g ? e.applyAnimatedValues(g, s.getValue(!0)) : !1) === !1 && u();
    }, f = new ME(c, a), h = k.useRef();
    fo(() => (h.current = f, q(a, (g) => Ul(g, f)), () => {
      h.current && (q(h.current.deps, (g) => va(g, h.current)), Z.cancel(h.current.update));
    })), k.useEffect(c, []), N0(() => () => {
      let g = h.current;
      q(g.deps, (p) => va(p, g));
    });
    let d = e.getComponentProps(s.getValue());
    return k.createElement(t, { ...d, ref: l });
  });
}, ME = class {
  constructor(t, e) {
    this.update = t, this.deps = e;
  }
  eventObserved(t) {
    t.type == "change" && Z.write(this.update);
  }
};
function NE(t, e) {
  let n = /* @__PURE__ */ new Set();
  return Mc.dependencies = n, t.style && (t = { ...t, style: e.createAnimatedStyle(t.style) }), t = new cf(t), Mc.dependencies = null, [t, n];
}
function AE(t, e) {
  return t && (N.fun(t) ? t(e) : t.current = e), e;
}
var Jm = Symbol.for("AnimatedComponent"), IE = (t, { applyAnimatedValues: e = () => !1, createAnimatedStyle: n = (i) => new cf(i), getComponentProps: r = (i) => i } = {}) => {
  let i = { applyAnimatedValues: e, createAnimatedStyle: n, getComponentProps: r }, o = (l) => {
    let s = e1(l) || "Anonymous";
    return N.str(l) ? l = o[l] || (o[l] = Zm(l, i)) : l = l[Jm] || (l[Jm] = Zm(l, i)), l.displayName = `Animated(${s})`, l;
  };
  return Pr(t, (l, s) => {
    N.arr(t) && (s = e1(l)), o[s] = o(l);
  }), { animated: o };
}, e1 = (t) => N.str(t) ? t : t && N.str(t.displayName) ? t.displayName : N.fun(t) && t.name || null;
function Gt(t, ...e) {
  return N.fun(t) ? t(...e) : t;
}
var Bs = (t, e) => t === !0 || !!(e && t && (N.fun(t) ? t(e) : jt(t).includes(e))), Hx = (t, e) => N.obj(t) ? e && t[e] : t, Yx = (t, e) => t.default === !0 ? t[e] : t.default ? t.default[e] : void 0, zE = (t) => t, ff = (t, e = zE) => {
  let n = $E;
  t.default && t.default !== !0 && (t = t.default, n = Object.keys(t));
  let r = {};
  for (let i of n) {
    let o = e(t[i], i);
    N.und(o) || (r[i] = o);
  }
  return r;
}, $E = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"], DE = { config: 1, from: 1, to: 1, ref: 1, loop: 1, reset: 1, pause: 1, cancel: 1, reverse: 1, immediate: 1, default: 1, delay: 1, onProps: 1, onStart: 1, onChange: 1, onPause: 1, onResume: 1, onRest: 1, onResolve: 1, items: 1, trail: 1, sort: 1, expires: 1, initial: 1, enter: 1, update: 1, leave: 1, children: 1, onDestroyed: 1, keys: 1, callId: 1, parentId: 1 };
function jE(t) {
  let e = {}, n = 0;
  if (Pr(t, (r, i) => {
    DE[i] || (e[i] = r, n++);
  }), n)
    return e;
}
function I0(t) {
  let e = jE(t);
  if (e) {
    let n = { to: e };
    return Pr(t, (r, i) => i in e || (n[i] = r)), n;
  }
  return { ...t };
}
function xa(t) {
  return t = Xt(t), N.arr(t) ? t.map(xa) : af(t) ? ur.createStringInterpolator({ range: [0, 1], output: [t, t] })(1) : t;
}
function Xx(t) {
  for (let e in t)
    return !0;
  return !1;
}
function Wh(t) {
  return N.fun(t) || N.arr(t) && N.obj(t[0]);
}
function Hh(t, e) {
  var n;
  (n = t.ref) == null || n.delete(t), e == null || e.delete(t);
}
function Gx(t, e) {
  var n;
  e && t.ref !== e && ((n = t.ref) == null || n.delete(t), e.add(t), t.ref = e);
}
var LE = { default: { tension: 170, friction: 26 }, gentle: { tension: 120, friction: 14 }, wobbly: { tension: 180, friction: 12 }, stiff: { tension: 210, friction: 20 }, slow: { tension: 280, friction: 60 }, molasses: { tension: 280, friction: 120 } }, Yh = { ...LE.default, mass: 1, damping: 1, easing: Dx.linear, clamp: !1 }, FE = class {
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
    Object.assign(this, Yh);
  }
};
function BE(t, e, n) {
  n && (n = { ...n }, t1(n, e), e = { ...n, ...e }), t1(t, e), Object.assign(t, e);
  for (let l in Yh)
    t[l] == null && (t[l] = Yh[l]);
  let { frequency: r, damping: i } = t, { mass: o } = t;
  return N.und(r) || (r < 0.01 && (r = 0.01), i < 0 && (i = 0), t.tension = Math.pow(2 * Math.PI / r, 2) * o, t.friction = 4 * Math.PI * i * o / r), t;
}
function t1(t, e) {
  if (!N.und(e.decay))
    t.duration = void 0;
  else {
    let n = !N.und(e.tension) || !N.und(e.friction);
    (n || !N.und(e.frequency) || !N.und(e.damping) || !N.und(e.mass)) && (t.duration = void 0, t.decay = void 0), n && (t.frequency = void 0);
  }
}
var n1 = [], UE = class {
  constructor() {
    F(this, "changed", !1);
    F(this, "values", n1);
    F(this, "toValues", null);
    F(this, "fromValues", n1);
    F(this, "to");
    F(this, "from");
    F(this, "config", new FE());
    F(this, "immediate", !1);
  }
};
function Qx(t, { key: e, props: n, defaultProps: r, state: i, actions: o }) {
  return new Promise((l, s) => {
    let a, u, c = Bs(n.cancel ?? (r == null ? void 0 : r.cancel), e);
    if (c)
      d();
    else {
      N.und(n.pause) || (i.paused = Bs(n.pause, e));
      let g = r == null ? void 0 : r.pause;
      g !== !0 && (g = i.paused || Bs(g, e)), a = Gt(n.delay || 0, e), g ? (i.resumeQueue.add(h), o.pause()) : (o.resume(), h());
    }
    function f() {
      i.resumeQueue.add(h), i.timeouts.delete(u), u.cancel(), a = u.time - Z.now();
    }
    function h() {
      a > 0 && !ur.skipAnimation ? (i.delayed = !0, u = Z.setTimeout(d, a), i.pauseQueue.add(f), i.timeouts.add(u)) : d();
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
var z0 = (t, e) => e.length == 1 ? e[0] : e.some((n) => n.cancelled) ? Sl(t.get()) : e.every((n) => n.noop) ? qx(t.get()) : rr(t.get(), e.every((n) => n.finished)), qx = (t) => ({ value: t, noop: !0, finished: !0, cancelled: !1 }), rr = (t, e, n = !1) => ({ value: t, finished: e, cancelled: n }), Sl = (t) => ({ value: t, cancelled: !0, finished: !1 });
function Kx(t, e, n, r) {
  let { callId: i, parentId: o, onRest: l } = e, { asyncTo: s, promise: a } = n;
  return !o && t === s && !e.reset ? a : n.promise = (async () => {
    n.asyncId = i, n.asyncTo = t;
    let u = ff(e, (y, v) => v === "onRest" ? void 0 : y), c, f, h = new Promise((y, v) => (c = y, f = v)), d = (y) => {
      let v = i <= (n.cancelId || 0) && Sl(r) || i !== n.asyncId && rr(r, !1);
      if (v)
        throw y.result = v, f(y), y;
    }, g = (y, v) => {
      let m = new r1(), _ = new i1();
      return (async () => {
        if (ur.skipAnimation)
          throw wa(n), _.result = rr(r, !1), f(_), _;
        d(m);
        let x = N.obj(y) ? { ...y } : { ...v, to: y };
        x.parentId = i, Pr(u, (b, E) => {
          N.und(x[E]) && (x[E] = b);
        });
        let C = await r.start(x);
        return d(m), n.paused && await new Promise((b) => {
          n.resumeQueue.add(b);
        }), C;
      })();
    }, p;
    if (ur.skipAnimation)
      return wa(n), rr(r, !1);
    try {
      let y;
      N.arr(t) ? y = (async (v) => {
        for (let m of v)
          await g(m);
      })(t) : y = Promise.resolve(t(g, r.stop.bind(r))), await Promise.all([y.then(c), h]), p = rr(r.get(), !0, !1);
    } catch (y) {
      if (y instanceof r1)
        p = y.result;
      else if (y instanceof i1)
        p = y.result;
      else
        throw y;
    } finally {
      i == n.asyncId && (n.asyncId = o, n.asyncTo = o ? s : void 0, n.promise = o ? a : void 0);
    }
    return N.fun(l) && Z.batchedUpdates(() => {
      l(p, r, r.item);
    }), p;
  })();
}
function wa(t, e) {
  Ls(t.timeouts, (n) => n.cancel()), t.pauseQueue.clear(), t.resumeQueue.clear(), t.asyncId = t.asyncTo = t.promise = void 0, e && (t.cancelId = e);
}
var r1 = class extends Error {
  constructor() {
    super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.");
    F(this, "result");
  }
}, i1 = class extends Error {
  constructor() {
    super("SkipAnimationSignal");
    F(this, "result");
  }
}, Xh = (t) => t instanceof $0, VE = 1, $0 = class extends jx {
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
    return kE(), ur.to(this, e);
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
    ma(this, { type: "change", parent: this, value: e, idle: n });
  }
  _onPriorityChange(e) {
    this.idle || of.sort(this), ma(this, { type: "priority", parent: this, priority: e });
  }
}, No = Symbol.for("SpringPhase"), Zx = 1, Gh = 2, Qh = 4, pd = (t) => (t[No] & Zx) > 0, ti = (t) => (t[No] & Gh) > 0, is = (t) => (t[No] & Qh) > 0, o1 = (t, e) => e ? t[No] |= Gh | Zx : t[No] &= ~Gh, l1 = (t, e) => e ? t[No] |= Qh : t[No] &= ~Qh, WE = class extends $0 {
  constructor(e, n) {
    super();
    F(this, "key");
    F(this, "animation", new UE());
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
    return !(ti(this) || this._state.asyncTo) || is(this);
  }
  get goal() {
    return Xt(this.animation.to);
  }
  get velocity() {
    let e = yr(this);
    return e instanceof Na ? e.lastVelocity || 0 : e.getPayload().map((n) => n.lastVelocity || 0);
  }
  get hasAnimated() {
    return pd(this);
  }
  get isAnimating() {
    return ti(this);
  }
  get isPaused() {
    return is(this);
  }
  get isDelayed() {
    return this._state.delayed;
  }
  advance(e) {
    let n = !0, r = !1, i = this.animation, { toValues: o } = i, { config: l } = i, s = uf(i.to);
    !s && An(i.to) && (o = jt(Xt(i.to))), i.values.forEach((c, f) => {
      if (c.done)
        return;
      let h = c.constructor == _a ? 1 : s ? s[f].lastPosition : o[f], d = i.immediate, g = h;
      if (!d) {
        if (g = c.lastPosition, l.tension <= 0) {
          c.done = !0;
          return;
        }
        let p = c.elapsedTime += e, y = i.fromValues[f], v = c.v0 != null ? c.v0 : c.v0 = N.arr(l.velocity) ? l.velocity[f] : l.velocity, m, _ = l.precision || (y == h ? 5e-3 : Math.min(1, Math.abs(h - y) * 1e-3));
        if (N.und(l.duration))
          if (l.decay) {
            let x = l.decay === !0 ? 0.998 : l.decay, C = Math.exp(-(1 - x) * p);
            g = y + v / (1 - x) * (1 - C), d = Math.abs(c.lastPosition - g) <= _, m = v * C;
          } else {
            m = c.lastVelocity == null ? v : c.lastVelocity;
            let x = l.restVelocity || _ / 10, C = l.clamp ? 0 : l.bounce, b = !N.und(C), E = y == h ? c.v0 > 0 : y < h, T, O = !1, P = 1, j = Math.ceil(e / P);
            for (let z = 0; z < j && (T = Math.abs(m) > x, !(!T && (d = Math.abs(h - g) <= _, d))); ++z) {
              b && (O = g == h || g > h == E, O && (m = -m * C, g = h));
              let Q = -l.tension * 1e-6 * (g - h), I = -l.friction * 1e-3 * m, D = (Q + I) / l.mass;
              m = m + D * P, g = g + m * P;
            }
          }
        else {
          let x = 1;
          l.duration > 0 && (this._memoizedDuration !== l.duration && (this._memoizedDuration = l.duration, c.durationProgress > 0 && (c.elapsedTime = l.duration * c.durationProgress, p = c.elapsedTime += e)), x = (l.progress || 0) + p / this._memoizedDuration, x = x > 1 ? 1 : x < 0 ? 0 : x, c.durationProgress = x), g = y + l.easing(x) * (h - y), m = (g - c.lastPosition) / e, d = x == 1;
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
    return Z.batchedUpdates(() => {
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
      Z.batchedUpdates(() => {
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
    return N.und(e) ? (r = this.queue || [], this.queue = []) : r = [N.obj(e) ? e : { ...n, to: e }], Promise.all(r.map((i) => this._update(i))).then((i) => z0(this, i));
  }
  stop(e) {
    let { to: n } = this.animation;
    return this._focus(this.get()), wa(this._state, e && this._lastCallId), Z.batchedUpdates(() => this._stop(n, e)), this;
  }
  reset() {
    this._update({ reset: !0 });
  }
  eventObserved(e) {
    e.type == "change" ? this._start() : e.type == "priority" && (this.priority = e.priority + 1);
  }
  _prepareNode(e) {
    let n = this.key || "", { to: r, from: i } = e;
    r = N.obj(r) ? r[n] : r, (r == null || Wh(r)) && (r = void 0), i = N.obj(i) ? i[n] : i, i == null && (i = void 0);
    let o = { to: r, from: i };
    return pd(this) || (e.reverse && ([r, i] = [i, r]), i = Xt(i), N.und(i) ? yr(this) || this._set(r) : this._set(i)), o;
  }
  _update({ ...e }, n) {
    let { key: r, defaultProps: i } = this;
    e.default && Object.assign(i, ff(e, (s, a) => /^on/.test(a) ? Hx(s, r) : s)), a1(this, e, "onProps"), ls(this, "onProps", e, this);
    let o = this._prepareNode(e);
    if (Object.isFrozen(this))
      throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
    let l = this._state;
    return Qx(++this._lastCallId, { key: r, props: e, defaultProps: i, state: l, actions: { pause: () => {
      is(this) || (l1(this, !0), ms(l.pauseQueue), ls(this, "onPause", rr(this, os(this, this.animation.to)), this));
    }, resume: () => {
      is(this) && (l1(this, !1), ti(this) && this._resume(), ms(l.resumeQueue), ls(this, "onResume", rr(this, os(this, this.animation.to)), this));
    }, start: this._merge.bind(this, o) } }).then((s) => {
      if (e.loop && s.finished && !(n && s.noop)) {
        let a = Jx(e);
        if (a)
          return this._update(a, !0);
      }
      return s;
    });
  }
  _merge(e, n, r) {
    if (n.cancel)
      return this.stop(!0), r(Sl(this));
    let i = !N.und(e.to), o = !N.und(e.from);
    if (i || o)
      if (n.callId > this._lastToId)
        this._lastToId = n.callId;
      else
        return r(Sl(this));
    let { key: l, defaultProps: s, animation: a } = this, { to: u, from: c } = a, { to: f = u, from: h = c } = e;
    o && !i && (!n.default || N.und(f)) && (f = h), n.reverse && ([f, h] = [h, f]);
    let d = !zr(h, c);
    d && (a.from = h), h = Xt(h);
    let g = !zr(f, u);
    g && this._focus(f);
    let p = Wh(n.to), { config: y } = a, { decay: v, velocity: m } = y;
    (i || o) && (y.velocity = 0), n.config && !p && BE(y, Gt(n.config, l), n.config !== s.config ? Gt(s.config, l) : void 0);
    let _ = yr(this);
    if (!_ || N.und(f))
      return r(rr(this, !0));
    let x = N.und(n.reset) ? o && !n.default : !N.und(h) && Bs(n.reset, l), C = x ? h : this.get(), b = xa(f), E = N.num(b) || N.arr(b) || af(b), T = !p && (!E || Bs(s.immediate || n.immediate, l));
    if (g) {
      let z = Vh(f);
      if (z !== _.constructor)
        if (T)
          _ = this._set(b);
        else
          throw Error(`Cannot animate between ${_.constructor.name} and ${z.name}, as the "to" prop suggests`);
    }
    let O = _.constructor, P = An(f), j = !1;
    if (!P) {
      let z = x || !pd(this) && d;
      (g || z) && (j = zr(xa(C), b), P = !j), (!zr(a.immediate, T) && !T || !zr(y.decay, v) || !zr(y.velocity, m)) && (P = !0);
    }
    if (j && ti(this) && (a.changed && !x ? P = !0 : P || this._stop(u)), !p && ((P || An(u)) && (a.values = _.getPayload(), a.toValues = An(f) ? null : O == _a ? [1] : jt(b)), a.immediate != T && (a.immediate = T, !T && !x && this._set(u)), P)) {
      let { onRest: z } = a;
      q(YE, (I) => a1(this, n, I));
      let Q = rr(this, os(this, u));
      ms(this._pendingCalls, Q), this._pendingCalls.add(r), a.changed && Z.batchedUpdates(() => {
        var I;
        a.changed = !x, z == null || z(Q, this), x ? Gt(s.onRest, Q) : (I = a.onStart) == null || I.call(a, Q, this);
      });
    }
    x && this._set(C), p ? r(Kx(n.to, n, this._state, this)) : P ? this._start() : ti(this) && !g ? this._pendingCalls.add(r) : r(qx(C));
  }
  _focus(e) {
    let n = this.animation;
    e !== n.to && (qm(this) && this._detach(), n.to = e, qm(this) && this._attach());
  }
  _attach() {
    let e = 0, { to: n } = this.animation;
    An(n) && (Ul(n, this), Xh(n) && (e = n.priority + 1)), this.priority = e;
  }
  _detach() {
    let { to: e } = this.animation;
    An(e) && va(e, this);
  }
  _set(e, n = !0) {
    let r = Xt(e);
    if (!N.und(r)) {
      let i = yr(this);
      if (!i || !zr(r, i.getValue())) {
        let o = Vh(r);
        !i || i.constructor != o ? A0(this, o.create(r)) : i.setValue(r), i && Z.batchedUpdates(() => {
          this._onChange(r, n);
        });
      }
    }
    return yr(this);
  }
  _onStart() {
    let e = this.animation;
    e.changed || (e.changed = !0, ls(this, "onStart", rr(this, os(this, e.to)), this));
  }
  _onChange(e, n) {
    n || (this._onStart(), Gt(this.animation.onChange, e, this)), Gt(this.defaultProps.onChange, e, this), super._onChange(e, n);
  }
  _start() {
    let e = this.animation;
    yr(this).reset(Xt(e.to)), e.immediate || (e.fromValues = e.values.map((n) => n.lastPosition)), ti(this) || (o1(this, !0), is(this) || this._resume());
  }
  _resume() {
    ur.skipAnimation ? this.finish() : of.start(this);
  }
  _stop(e, n) {
    if (ti(this)) {
      o1(this, !1);
      let r = this.animation;
      q(r.values, (o) => {
        o.done = !0;
      }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), ma(this, { type: "idle", parent: this });
      let i = n ? Sl(this.get()) : rr(this.get(), os(this, e ?? r.to));
      ms(this._pendingCalls, i), r.changed && (r.changed = !1, ls(this, "onRest", i, this));
    }
  }
};
function os(t, e) {
  let n = xa(e), r = xa(t.get());
  return zr(r, n);
}
function Jx(t, e = t.loop, n = t.to) {
  let r = Gt(e);
  if (r) {
    let i = r !== !0 && I0(r), o = (i || t).reverse, l = !i || i.reset;
    return ka({ ...t, loop: e, default: !1, pause: void 0, to: !o || Wh(n) ? n : void 0, from: l ? t.from : void 0, reset: l, ...i });
  }
}
function ka(t) {
  let { to: e, from: n } = t = I0(t), r = /* @__PURE__ */ new Set();
  return N.obj(e) && s1(e, r), N.obj(n) && s1(n, r), t.keys = r.size ? Array.from(r) : null, t;
}
function HE(t) {
  let e = ka(t);
  return N.und(e.default) && (e.default = ff(e)), e;
}
function s1(t, e) {
  Pr(t, (n, r) => n != null && e.add(r));
}
var YE = ["onStart", "onRest", "onChange", "onPause", "onResume"];
function a1(t, e, n) {
  t.animation[n] = e[n] !== Yx(e, n) ? Hx(e[n], t.key) : void 0;
}
function ls(t, e, ...n) {
  var r, i, o, l;
  (i = (r = t.animation)[e]) == null || i.call(r, ...n), (l = (o = t.defaultProps)[e]) == null || l.call(o, ...n);
}
var XE = ["onStart", "onChange", "onRest"], GE = 1, ew = class {
  constructor(t, e) {
    F(this, "id", GE++);
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
    return t && this.queue.push(ka(t)), this;
  }
  start(t) {
    let { queue: e } = this;
    return t ? e = jt(t).map(ka) : this.queue = [], this._flush ? this._flush(this, e) : (ow(this, e), qh(this, e));
  }
  stop(t, e) {
    if (t !== !!t && (e = t), e) {
      let n = this.springs;
      q(jt(e), (r) => n[r].stop(!!t));
    } else
      wa(this._state, this._lastAsyncId), this.each((n) => n.stop(!!t));
    return this;
  }
  pause(t) {
    if (N.und(t))
      this.start({ pause: !0 });
    else {
      let e = this.springs;
      q(jt(t), (n) => e[n].pause());
    }
    return this;
  }
  resume(t) {
    if (N.und(t))
      this.start({ pause: !1 });
    else {
      let e = this.springs;
      q(jt(t), (n) => e[n].resume());
    }
    return this;
  }
  each(t) {
    Pr(this.springs, t);
  }
  _onFrame() {
    let { onStart: t, onChange: e, onRest: n } = this._events, r = this._active.size > 0, i = this._changed.size > 0;
    (r && !this._started || i && !this._started) && (this._started = !0, Ls(t, ([s, a]) => {
      a.value = this.get(), s(a, this, this._item);
    }));
    let o = !r && this._started, l = i || o && n.size ? this.get() : null;
    i && e.size && Ls(e, ([s, a]) => {
      a.value = l, s(a, this, this._item);
    }), o && (this._started = !1, Ls(n, ([s, a]) => {
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
    Z.onFrame(this._onFrame);
  }
};
function qh(t, e) {
  return Promise.all(e.map((n) => tw(t, n))).then((n) => z0(t, n));
}
async function tw(t, e, n) {
  let { keys: r, to: i, from: o, loop: l, onRest: s, onResolve: a } = e, u = N.obj(e.default) && e.default;
  l && (e.loop = !1), i === !1 && (e.to = null), o === !1 && (e.from = null);
  let c = N.arr(i) || N.fun(i) ? i : void 0;
  c ? (e.to = void 0, e.onRest = void 0, u && (u.onRest = void 0)) : q(XE, (p) => {
    let y = e[p];
    if (N.fun(y)) {
      let v = t._events[p];
      e[p] = ({ finished: m, cancelled: _ }) => {
        let x = v.get(y);
        x ? (m || (x.finished = !1), _ && (x.cancelled = !0)) : v.set(y, { value: null, finished: m || !1, cancelled: _ || !1 });
      }, u && (u[p] = e[p]);
    }
  });
  let f = t._state;
  e.pause === !f.paused ? (f.paused = e.pause, ms(e.pause ? f.pauseQueue : f.resumeQueue)) : f.paused && (e.pause = !0);
  let h = (r || Object.keys(t.springs)).map((p) => t.springs[p].start(e)), d = e.cancel === !0 || Yx(e, "cancel") === !0;
  (c || d && f.asyncId) && h.push(Qx(++t._lastAsyncId, { props: e, state: f, actions: { pause: Fh, resume: Fh, start(p, y) {
    d ? (wa(f, t._lastAsyncId), y(Sl(t))) : (p.onRest = s, y(Kx(c, p, f, t)));
  } } })), f.paused && await new Promise((p) => {
    f.resumeQueue.add(p);
  });
  let g = z0(t, await Promise.all(h));
  if (l && g.finished && !(n && g.noop)) {
    let p = Jx(e, l, i);
    if (p)
      return ow(t, [p]), tw(t, p, !0);
  }
  return a && Z.batchedUpdates(() => a(g, t, t.item)), g;
}
function Kh(t, e) {
  let n = { ...t.springs };
  return e && q(jt(e), (r) => {
    N.und(r.keys) && (r = ka(r)), N.obj(r.to) || (r = { ...r, to: void 0 }), iw(n, r, (i) => rw(i));
  }), nw(t, n), n;
}
function nw(t, e) {
  Pr(e, (n, r) => {
    t.springs[r] || (t.springs[r] = n, Ul(n, t));
  });
}
function rw(t, e) {
  let n = new WE();
  return n.key = t, e && Ul(n, e), n;
}
function iw(t, e, n) {
  e.keys && q(e.keys, (r) => {
    (t[r] || (t[r] = n(r)))._prepareNode(e);
  });
}
function ow(t, e) {
  q(e, (n) => {
    iw(t.springs, n, (r) => rw(r, t));
  });
}
var Aa = ({ children: t, ...e }) => {
  let n = k.useContext(Nc), r = e.pause || !!n.pause, i = e.immediate || !!n.immediate;
  e = bE(() => ({ pause: r, immediate: i }), [r, i]);
  let { Provider: o } = Nc;
  return k.createElement(o, { value: e }, t);
}, Nc = QE(Aa, {});
Aa.Provider = Nc.Provider;
Aa.Consumer = Nc.Consumer;
function QE(t, e) {
  return Object.assign(t, k.createContext(e)), t.Provider._context = t, t.Consumer._context = t, t;
}
var D0 = () => {
  let t = [], e = function(r) {
    CE();
    let i = [];
    return q(t, (o, l) => {
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
    return q(t, (r) => r.pause(...arguments)), this;
  }, e.resume = function() {
    return q(t, (r) => r.resume(...arguments)), this;
  }, e.set = function(r) {
    q(t, (i, o) => {
      let l = N.fun(r) ? r(o, i) : r;
      l && i.set(l);
    });
  }, e.start = function(r) {
    let i = [];
    return q(t, (o, l) => {
      if (N.und(r))
        i.push(o.start());
      else {
        let s = this._getProps(r, o, l);
        s && i.push(o.start(s));
      }
    }), i;
  }, e.stop = function() {
    return q(t, (r) => r.stop(...arguments)), this;
  }, e.update = function(r) {
    return q(t, (i, o) => i.update(this._getProps(r, i, o))), this;
  };
  let n = function(r, i, o) {
    return N.fun(r) ? r(o, i) : r;
  };
  return e._getProps = n, e;
};
function qE(t, e, n) {
  let r = N.fun(e) && e;
  r && !n && (n = []);
  let i = k.useMemo(() => r || arguments.length == 3 ? D0() : void 0, []), o = k.useRef(0), l = M0(), s = k.useMemo(() => ({ ctrls: [], queue: [], flush(v, m) {
    let _ = Kh(v, m);
    return o.current > 0 && !s.queue.length && !Object.keys(_).some((x) => !v.springs[x]) ? qh(v, m) : new Promise((x) => {
      nw(v, _), s.queue.push(() => {
        x(qh(v, m));
      }), l();
    });
  } }), []), a = k.useRef([...s.ctrls]), u = [], c = Uh(t) || 0;
  k.useMemo(() => {
    q(a.current.slice(t, c), (v) => {
      Hh(v, i), v.stop(!0);
    }), a.current.length = t, f(c, t);
  }, [t]), k.useMemo(() => {
    f(0, Math.min(c, t));
  }, n);
  function f(v, m) {
    for (let _ = v; _ < m; _++) {
      let x = a.current[_] || (a.current[_] = new ew(null, s.flush)), C = r ? r(_, x) : e[_];
      C && (u[_] = HE(C));
    }
  }
  let h = a.current.map((v, m) => Kh(v, u[m])), d = k.useContext(Aa), g = Uh(d), p = d !== g && Xx(d);
  fo(() => {
    o.current++, s.ctrls = a.current;
    let { queue: v } = s;
    v.length && (s.queue = [], q(v, (m) => m())), q(a.current, (m, _) => {
      i == null || i.add(m), p && m.start({ default: d });
      let x = u[_];
      x && (Gx(m, x.ref), m.ref ? m.queue.push(x) : m.start(x));
    });
  }), N0(() => () => {
    q(s.ctrls, (v) => v.stop(!0));
  });
  let y = h.map((v) => ({ ...v }));
  return i ? [y, i] : y;
}
function X(t, e) {
  let n = N.fun(t), [[r], i] = qE(1, n ? t : [t], n ? e || [] : e);
  return n || arguments.length == 2 ? [r, i] : r;
}
var KE = () => D0(), u1 = () => k.useState(KE)[0];
function ZE(t, e, n) {
  let r = N.fun(e) && e, { reset: i, sort: o, trail: l = 0, expires: s = !0, exitBeforeEnter: a = !1, onDestroyed: u, ref: c, config: f } = r ? r() : e, h = k.useMemo(() => r || arguments.length == 3 ? D0() : void 0, []), d = jt(t), g = [], p = k.useRef(null), y = i ? null : p.current;
  fo(() => {
    p.current = g;
  }), N0(() => (q(g, (I) => {
    h == null || h.add(I.ctrl), I.ctrl.ref = h;
  }), () => {
    q(p.current, (I) => {
      I.expired && clearTimeout(I.expirationId), Hh(I.ctrl, h), I.ctrl.stop(!0);
    });
  }));
  let v = eb(d, r ? r() : e, y), m = i && p.current || [];
  fo(() => q(m, ({ ctrl: I, item: D, key: W }) => {
    Hh(I, h), Gt(u, D, W);
  }));
  let _ = [];
  if (y && q(y, (I, D) => {
    I.expired ? (clearTimeout(I.expirationId), m.push(I)) : (D = _[D] = v.indexOf(I.key), ~D && (g[D] = I));
  }), q(d, (I, D) => {
    g[D] || (g[D] = { key: v[D], item: I, phase: "mount", ctrl: new ew() }, g[D].ctrl.item = I);
  }), _.length) {
    let I = -1, { leave: D } = r ? r() : e;
    q(_, (W, L) => {
      let M = y[L];
      ~W ? (I = g.indexOf(M), g[I] = { ...M, item: d[W] }) : D && g.splice(++I, 0, M);
    });
  }
  N.fun(o) && g.sort((I, D) => o(I.item, D.item));
  let x = -l, C = M0(), b = ff(e), E = /* @__PURE__ */ new Map(), T = k.useRef(/* @__PURE__ */ new Map()), O = k.useRef(!1);
  q(g, (I, D) => {
    let W = I.key, L = I.phase, M = r ? r() : e, $, S, Y = Gt(M.delay || 0, W);
    if (L == "mount")
      $ = M.enter, S = "enter";
    else {
      let de = v.indexOf(W) < 0;
      if (L != "leave")
        if (de)
          $ = M.leave, S = "leave";
        else if ($ = M.update)
          S = "update";
        else
          return;
      else if (!de)
        $ = M.enter, S = "enter";
      else
        return;
    }
    if ($ = Gt($, I.item, D), $ = N.obj($) ? I0($) : { to: $ }, !$.config) {
      let de = f || b.config;
      $.config = Gt(de, I.item, D, S);
    }
    x += l;
    let J = { ...b, delay: Y + x, ref: c, immediate: M.immediate, reset: !1, ...$ };
    if (S == "enter" && N.und(J.from)) {
      let de = r ? r() : e, ye = N.und(de.initial) || y ? de.from : de.initial;
      J.from = Gt(ye, I.item, D);
    }
    let { onResolve: nt } = J;
    J.onResolve = (de) => {
      Gt(nt, de);
      let ye = p.current, ue = ye.find((He) => He.key === W);
      if (ue && !(de.cancelled && ue.phase != "update") && ue.ctrl.idle) {
        let He = ye.every((Te) => Te.ctrl.idle);
        if (ue.phase == "leave") {
          let Te = Gt(s, ue.item);
          if (Te !== !1) {
            let bn = Te === !0 ? 0 : Te;
            if (ue.expired = !0, !He && bn > 0) {
              bn <= 2147483647 && (ue.expirationId = setTimeout(C, bn));
              return;
            }
          }
        }
        He && ye.some((Te) => Te.expired) && (T.current.delete(ue), a && (O.current = !0), C());
      }
    };
    let fe = Kh(I.ctrl, J);
    S === "leave" && a ? T.current.set(I, { phase: S, springs: fe, payload: J }) : E.set(I, { phase: S, springs: fe, payload: J });
  });
  let P = k.useContext(Aa), j = Uh(P), z = P !== j && Xx(P);
  fo(() => {
    z && q(g, (I) => {
      I.ctrl.start({ default: P });
    });
  }, [P]), q(E, (I, D) => {
    if (T.current.size) {
      let W = g.findIndex((L) => L.key === D.key);
      g.splice(W, 1);
    }
  }), fo(() => {
    q(T.current.size ? T.current : E, ({ phase: I, payload: D }, W) => {
      let { ctrl: L } = W;
      W.phase = I, h == null || h.add(L), z && I == "enter" && L.start({ default: P }), D && (Gx(L, D.ref), (L.ref || h) && !O.current ? L.update(D) : (L.start(D), O.current && (O.current = !1)));
    });
  }, i ? void 0 : n);
  let Q = (I) => k.createElement(k.Fragment, null, g.map((D, W) => {
    let { springs: L } = E.get(D) || D.ctrl, M = I({ ...L }, D.item, D, W);
    return M && M.type ? k.createElement(M.type, { ...M.props, key: N.str(D.key) || N.num(D.key) ? D.key : D.ctrl.id, ref: M.ref }) : M;
  }));
  return h ? [Q, h] : Q;
}
var JE = 1;
function eb(t, { key: e, keys: n = e }, r) {
  if (n === null) {
    let i = /* @__PURE__ */ new Set();
    return t.map((o) => {
      let l = r && r.find((s) => s.item === o && s.phase !== "leave" && !i.has(s));
      return l ? (i.add(l), l.key) : JE++;
    });
  }
  return N.und(n) ? t : N.fun(n) ? t.map(n) : jt(n);
}
var tb = class extends $0 {
  constructor(e, n) {
    super();
    F(this, "key");
    F(this, "idle", !0);
    F(this, "calc");
    F(this, "_active", /* @__PURE__ */ new Set());
    this.source = e, this.calc = ga(...n);
    let r = this._get(), i = Vh(r);
    A0(this, i.create(r));
  }
  advance(e) {
    let n = this._get(), r = this.get();
    zr(n, r) || (yr(this).setValue(n), this._onChange(n, this.idle)), !this.idle && c1(this._active) && gd(this);
  }
  _get() {
    let e = N.arr(this.source) ? this.source.map(Xt) : jt(Xt(this.source));
    return this.calc(...e);
  }
  _start() {
    this.idle && !c1(this._active) && (this.idle = !1, q(uf(this), (e) => {
      e.done = !1;
    }), ur.skipAnimation ? (Z.batchedUpdates(() => this.advance()), gd(this)) : of.start(this));
  }
  _attach() {
    let e = 1;
    q(jt(this.source), (n) => {
      An(n) && Ul(n, this), Xh(n) && (n.idle || this._active.add(n), e = Math.max(e, n.priority + 1));
    }), this.priority = e, this._start();
  }
  _detach() {
    q(jt(this.source), (e) => {
      An(e) && va(e, this);
    }), this._active.clear(), gd(this);
  }
  eventObserved(e) {
    e.type == "change" ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : e.type == "idle" ? this._active.delete(e.parent) : e.type == "priority" && (this.priority = jt(this.source).reduce((n, r) => Math.max(n, (Xh(r) ? r.priority : 0) + 1), 0));
  }
};
function nb(t) {
  return t.idle !== !1;
}
function c1(t) {
  return !t.size || Array.from(t).every(nb);
}
function gd(t) {
  t.idle || (t.idle = !0, q(uf(t), (e) => {
    e.done = !0;
  }), ma(t, { type: "idle", parent: t }));
}
ur.assign({ createStringInterpolator: Bx, to: (t, e) => new tb(t, e) });
var lw = /^--/;
function rb(t, e) {
  return e == null || typeof e == "boolean" || e === "" ? "" : typeof e == "number" && e !== 0 && !lw.test(t) && !(Us.hasOwnProperty(t) && Us[t]) ? e + "px" : ("" + e).trim();
}
var f1 = {};
function ib(t, e) {
  if (!t.nodeType || !t.setAttribute)
    return !1;
  let n = t.nodeName === "filter" || t.parentNode && t.parentNode.nodeName === "filter", { style: r, children: i, scrollTop: o, scrollLeft: l, viewBox: s, ...a } = e, u = Object.values(a), c = Object.keys(a).map((f) => n || t.hasAttribute(f) ? f : f1[f] || (f1[f] = f.replace(/([A-Z])/g, (h) => "-" + h.toLowerCase())));
  i !== void 0 && (t.textContent = i);
  for (let f in r)
    if (r.hasOwnProperty(f)) {
      let h = rb(f, r[f]);
      lw.test(f) ? t.style.setProperty(f, h) : t.style[f] = h;
    }
  c.forEach((f, h) => {
    t.setAttribute(f, u[h]);
  }), o !== void 0 && (t.scrollTop = o), l !== void 0 && (t.scrollLeft = l), s !== void 0 && t.setAttribute("viewBox", s);
}
var Us = { animationIterationCount: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 }, ob = (t, e) => t + e.charAt(0).toUpperCase() + e.substring(1), lb = ["Webkit", "Ms", "Moz", "O"];
Us = Object.keys(Us).reduce((t, e) => (lb.forEach((n) => t[ob(n, e)] = t[e]), t), Us);
var sb = /^(matrix|translate|scale|rotate|skew)/, ab = /^(translate)/, ub = /^(rotate|skew)/, md = (t, e) => N.num(t) && t !== 0 ? t + e : t, Hu = (t, e) => N.arr(t) ? t.every((n) => Hu(n, e)) : N.num(t) ? t === e : parseFloat(t) === e, cb = class extends cf {
  constructor({ x: t, y: e, z: n, ...r }) {
    let i = [], o = [];
    (t || e || n) && (i.push([t || 0, e || 0, n || 0]), o.push((l) => [`translate3d(${l.map((s) => md(s, "px")).join(",")})`, Hu(l, 0)])), Pr(r, (l, s) => {
      if (s === "transform")
        i.push([l || ""]), o.push((a) => [a, a === ""]);
      else if (sb.test(s)) {
        if (delete r[s], N.und(l))
          return;
        let a = ab.test(s) ? "px" : ub.test(s) ? "deg" : "";
        i.push(jt(l)), o.push(s === "rotate3d" ? ([u, c, f, h]) => [`rotate3d(${u},${c},${f},${md(h, a)})`, Hu(h, 0)] : (u) => [`${s}(${u.map((c) => md(c, a)).join(",")})`, Hu(u, s.startsWith("scale") ? 1 : 0)]);
      }
    }), i.length && (r.transform = new fb(i, o)), super(r);
  }
}, fb = class extends jx {
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
    return q(this.inputs, (r, i) => {
      let o = Xt(r[0]), [l, s] = this.transforms[i](N.arr(o) ? o : r.map(Xt));
      e += " " + l, n = n && s;
    }), n ? "none" : e;
  }
  observerAdded(e) {
    e == 1 && q(this.inputs, (n) => q(n, (r) => An(r) && Ul(r, this)));
  }
  observerRemoved(e) {
    e == 0 && q(this.inputs, (n) => q(n, (r) => An(r) && va(r, this)));
  }
  eventObserved(e) {
    e.type == "change" && (this._value = null), ma(this, e);
  }
}, db = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"];
ur.assign({ batchedUpdates: n_.unstable_batchedUpdates, createStringInterpolator: Bx, colors: nE });
var hb = IE(db, { applyAnimatedValues: ib, createAnimatedStyle: (t) => new cb(t), getComponentProps: ({ scrollTop: t, scrollLeft: e, ...n }) => n }), K = hb.animated;
const Sa = (t) => {
  const e = t.hasOwnProperty("fadestate") ? t.fadestate : k.useState(!1), n = t.hasOwnProperty("baseduration") ? t.baseduration : 800;
  k.useEffect(() => {
  }, []);
  var r = Array.from(t.children).map((i, o, l) => {
    i == " " && console.log(i);
    var s = n, a = t.hasOwnProperty("basedelay") ? t.basedelay : 100;
    k.useEffect(() => {
      e[0] ? u[1]({ y: 100, delay: o * s / l.length + a }) : u[1]({ y: 0 });
    }, [e]), k.useEffect(() => {
      t.hasOwnProperty("fadestate") || e[1](!0);
    }, []);
    const u = X(() => ({
      from: { y: 0 },
      config: {
        duration: s / l.length
      }
      //,loop:true
    }));
    return i == " " ? " " : /* @__PURE__ */ w.jsx(
      K.div,
      {
        style: { opacity: u[0].y.to({ range: [0, 40, 70, 100], output: [0, 0.4, 0.7, 1] }), display: "inline-block" },
        children: i
      },
      o
    );
  });
  return /* @__PURE__ */ w.jsx("div", { style: { display: "inline" }, children: r });
}, pb = (t) => {
  const e = k.useRef(null), n = t.phonestate, r = t.basename, [i, o] = k.useState([window.innerWidth, window.innerHeight]);
  k.useEffect(() => {
    window.setTimeout(() => {
      o([e.current.clientWidth, window.innerHeight]);
    }, 300);
  }, []);
  const l = {
    width: n[0] ? "100%" : "70%",
    height: `${i[0] * 1}px`,
    position: "relative",
    textAlign: "center",
    display: "inline-block"
  }, s = [
    { picurl: `${r}/dist/logo-django.svg`, url: "/", setsu: "django開発", desc: "サーバーサイドの開発に、セキュリティを意識した「django」を採用可能です。" },
    { picurl: `${r}/dist/react-icon.png`, url: "/", setsu: "React開発", desc: "Reactにてウェブデザインを担当いたします" },
    { picurl: `${r}/dist/wordpress-icon.png`, url: "/", setsu: "WordPress", desc: "気楽に扱えるWordPressを用いたシステムを開発いたします" }
  ], a = k.useRef(null);
  return /* @__PURE__ */ w.jsx(w.Fragment, { children: /* @__PURE__ */ w.jsxs("div", { ref: e, className: "Adimg", style: {
    ...l,
    whiteSpace: "nowrap"
  }, children: [
    /* @__PURE__ */ w.jsx(gb, { phonestate: n, ref: a, imgurl: s, width: i[0], height: i[0], setmergin: 0.05 }),
    /* @__PURE__ */ w.jsx(d1, { basename: r, lr: "l", clicktriger: () => {
      a.current("l", "l");
    } }),
    /* @__PURE__ */ w.jsx(d1, { basename: r, lr: "r", clicktriger: () => {
      a.current("r", "r");
    } })
  ] }) });
}, gb = k.forwardRef((t, e) => {
  const n = k.useState(!1), r = t.phonestate;
  var i = parseInt((t.imgurl.length - 1) / 2);
  const o = k.useState(i), l = X(
    () => ({ x: 0 })
  );
  var s = t.imgurl.length - 1;
  k.useEffect(() => {
    let g = -t.width * (o[0] - parseInt((t.imgurl.length - 1) / 2));
    return l[1]({ x: g }), () => {
    };
  }, [o[0]]), k.useImperativeHandle(
    e,
    () => (g, p) => (g == "s" && n[1](!0), g == "l" ? o[0] <= 0 ? o[1]((y) => s) : o[1]((y) => y - 1) : g == "r" && (o[0] >= s ? o[1]((y) => 0) : o[1]((y) => y + 1)), 1)
  );
  const a = {
    ...l[0],
    left: `${-t.width * i}px`,
    marginLeft: `${t.width * t.setmergin / 2}px`,
    marginRight: `${t.width * t.setmergin / 2}px`,
    width: `${t.width * (1 - t.setmergin)}px`,
    height: `${t.height * (1 - t.setmergin)}px`,
    position: "relative",
    bottom: `${-t.width * t.setmergin / 2}px`,
    backgroundSize: "90% 90%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundColor: "rgb(50,50,50)",
    display: "inline-block"
  }, u = k.useState(!1), c = X({
    transform: u[0] ? "scale(0.99,0.99)" : "scale(1,1)",
    filter: u[0] ? "grayscale(20%)" : "grayscale(0%)"
  }), f = k.useCallback(
    () => {
      u[1](!0);
    }
  ), h = t.imgurl, d = h.map((g, p) => {
    const y = X({
      filter: o[0] == p ? "grayscale(0%)" : "grayscale(100%)",
      config: { duration: 100 }
    }), v = X(() => ({
      opacity: 0,
      config: { diration: 1e3 }
    }));
    return k.useEffect(() => {
      o[0] == p ? v[1]({ opacity: 1, delay: 500 }) : v[1]({ opacity: 0, delay: 100 });
    }, [o[0]]), /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
      /* @__PURE__ */ w.jsx(
        K.div,
        {
          className: "rowimage",
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
            }, 300);
          },
          style: {
            ...c,
            ...y,
            ...a,
            backgroundImage: `url("${g.picurl}")`
          }
        },
        p
      ),
      /* @__PURE__ */ w.jsx(K.div, { style: {
        position: "absolute",
        ...v[0],
        minHeight: "10px",
        top: `${t.height * (1 - t.setmergin) + 20}px`,
        width: "100%",
        padding: "1.3em",
        boxSizing: "border-box",
        backgroundColor: "rgb(30,30,30)"
      }, children: /* @__PURE__ */ w.jsxs(
        "p",
        {
          style: {
            fontFamily: "'DotGothic16'",
            maxHeight: "100%",
            lineHeight: r[0] ? "2em" : "30px",
            fontSize: r[0] ? "2em" : "30px",
            verticalAlign: "middle",
            textDecoration: "none",
            display: "inline",
            color: "rgba(50,150,50,1)",
            overflow: "hidden",
            overflowWrap: "break-word",
            whiteSpace: "normal"
          },
          children: [
            /* @__PURE__ */ w.jsx(Sa, { fadestate: [o[0] == p, null], basedelay: 500, children: h[p].setsu }),
            /* @__PURE__ */ w.jsx("br", {}),
            /* @__PURE__ */ w.jsx(Sa, { fadestate: [o[0] == p, null], basedelay: 500, baseduration: 2e3, children: h[p].desc }),
            /* @__PURE__ */ w.jsx("br", {})
          ]
        }
      ) })
    ] });
  });
  return /* @__PURE__ */ w.jsx(w.Fragment, { children: d });
}), d1 = (t) => {
  const e = k.useState(0);
  t.lr;
  const n = t.basename;
  k.useEffect(() => {
  });
  const r = t.lr == "l" ? { left: 0, rotate: 90 } : { right: 0, rotate: -90 }, i = X({
    //backgroundColor:btnst[0]==0?"rgba(0,100,100,1)":"rgba(200,100,100,1)"
  }), o = X(() => t.lr == "l" ? {
    to: { x: 20 },
    from: { x: -20 },
    loop: { reverse: !0 },
    config: { duration: 1e3 }
  } : {
    to: { x: -20 },
    from: { x: 20 },
    loop: { reverse: !0 },
    config: { duration: 1e3 }
  }), l = {
    width: "100px",
    height: "100px",
    position: "absolute",
    backgroundImage: `url("${n}/dist/yajirushi.png")`,
    backgroundSize: "cover",
    zIndex: 1111,
    bottom: "30px"
  }, s = k.useCallback(
    () => {
      e[0] == 0 ? e[1](1) : e[0] == 1 && e[1](0);
    }
  );
  return /* @__PURE__ */ w.jsx(K.div, { className: "yajirushi", onClick: () => {
    s(), t.clicktriger();
  }, style: {
    ...r,
    ...o[0],
    ...i,
    ...l
  } });
}, Zh = /* @__PURE__ */ new Map(), mu = /* @__PURE__ */ new WeakMap();
let h1 = 0, mb;
function vb(t) {
  return t ? (mu.has(t) || (h1 += 1, mu.set(t, h1.toString())), mu.get(t)) : "0";
}
function yb(t) {
  return Object.keys(t).sort().filter((e) => t[e] !== void 0).map((e) => `${e}_${e === "root" ? vb(t.root) : t[e]}`).toString();
}
function _b(t) {
  let e = yb(t), n = Zh.get(e);
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
    }, Zh.set(e, n);
  }
  return n;
}
function xb(t, e, n = {}, r = mb) {
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
  } = _b(n);
  let s = l.get(t) || [];
  return l.has(t) || l.set(t, s), s.push(e), o.observe(t), function() {
    s.splice(s.indexOf(e), 1), s.length === 0 && (l.delete(t), o.unobserve(t)), l.size === 0 && (o.disconnect(), Zh.delete(i));
  };
}
function j0({
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
  const c = k.useRef(), f = k.useRef(), [h, d] = k.useState({
    inView: !!s
  });
  f.current = u;
  const g = k.useCallback(
    (y) => {
      c.current !== void 0 && (c.current(), c.current = void 0), !l && y && (c.current = xb(y, (v, m) => {
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
  k.useEffect(() => {
    !c.current && h.entry && !o && !l && d({
      inView: !!s
    });
  });
  const p = [g, h.inView, h.entry];
  return p.ref = p[0], p.inView = p[1], p.entry = p[2], p;
}
const wb = (t) => {
  const [e, n] = k.useState(!0);
  return k.useEffect(() => {
    setTimeout(() => n(!1), t);
  }, []), e;
}, kb = (t) => {
  const e = ["私達の声明", "顧客様のニーズに沿ったウェブサービスを設計することを誓います。"], n = ["我々の使命", "より多くの存在をウェブデザインし、ウェブ上からその存在を発信できるようにします。"], r = ["企画", "社会に新しいシステムを創造することに常に向き合い続けます。"], i = ["サービス", "顧客とやりとりしやすい距離からの制作をさせて頂きます。"], l = k.useRef(null), s = [window.innerWidth, window.innerHeight];
  wb(200);
  const a = X(
    () => ({
      from: { y: 0 },
      to: { y: 20 },
      loop: { reverse: !0 },
      config: {
        duration: 2e3
      }
    })
  ), u = t.phonestate, c = (g, p) => {
    var y = l.current.getElementsByClassName(g + p)[0];
    const v = zi.timeline({
      scrollTrigger: {
        trigger: y,
        start: "center center",
        end: "+=4000",
        //end: "top bottom", 
        scrub: !0,
        pin: !0
      }
    });
    v.to("." + g + p, { opacity: 1 }), v.to(y.getElementsByClassName("halo")[0], { strokeDashoffset: 2 * f * 3.3 * 3 / 4 }).to(y.getElementsByClassName("halokl")[0], { filter: "blur(0px)" }, "<"), p == "phone" && v.to("." + g + p, { x: -s[0] / 2, onComplete: () => {
    } }, "<"), v.to(y.getElementsByClassName("halo")[0], { strokeDashoffset: 2 * f * 3.3 * 2 / 4 }).to(y.getElementsByClassName("halojl")[0], { filter: "blur(0px)" }, "<"), p == "phone" && v.to("." + g + p, { x: 0 }), v.to(y.getElementsByClassName("halo")[0], { strokeDashoffset: 2 * f * 3.3 * 1 / 4 + 0 }).to(y.getElementsByClassName("halohj")[0], { filter: "blur(0px)" }, "<"), p == "phone" && v.to("." + g + p, { x: s[0] / 2 }, "<"), v.to(y.getElementsByClassName("halo")[0], { strokeDashoffset: 2 * f * 3.3 * 0 / 4 - 0 }).to(y.getElementsByClassName("halohk")[0], { filter: "blur(0px)", stroke: "red" }, "<"), p == "phone" && v.to("." + g + p, { x: 0 }), v.to(y.getElementsByClassName("halo")[0], { opacity: 1 });
  };
  k.useEffect(() => {
    window.setTimeout(() => {
      c("halo", "phone"), c("halo", "pc");
    }, 300);
  }, []), k.useEffect(() => {
  }, [u[0]]);
  const f = 100;
  X({
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
        /* @__PURE__ */ w.jsx(K.circle, { className: "halo", cx: s[0] / 2, cy: s[1] / 2, r: a[0].y.to({ range: [0, 20], output: [f - 3, f] }), strokeWidth: "12", stroke: "yellow", fill: "rgba(1,1,1,0)", transform: `rotate(-90 ${s[0] / 2} ${s[1] / 2})`, style: { backgroundColor: "red", filter: "blur(4px)", zIndex: 1e5 }, strokeDasharray: `${2 * f * 3.3}`, strokeDashoffset: 2 * f * 3.3, opacity: 0.5 }),
        /* @__PURE__ */ w.jsx(K.circle, { cx: s[0] / 2, cy: s[1] / 2, r: f - 4, strokeWidth: "0.8", stroke: "rgba(1,1,1,0.5)", fill: "red" })
      ] }),
      t.children
    ] }) }),
    /* @__PURE__ */ w.jsx("div", { className: "switch", style: { display: u[0] ? "none" : "block", position: "relative" }, children: /* @__PURE__ */ w.jsxs("div", { className: "halopc", style: { bottom: 0, display: u[0] ? "none" : "block", width: "100vw", height: "100vh", backgroundColor: "rgba(100,100,100,.9)", position: "relative" }, children: [
      /* @__PURE__ */ w.jsx("div", { className: "halohk", style: { top: "50px", ...h }, children: /* @__PURE__ */ w.jsx(ni, { phonestate: u, part: "2nd", delay: 1e3, title: n[0], children: n[1] }) }),
      /* @__PURE__ */ w.jsx("div", { className: "halojl", style: { bottom: "-30px", ...d }, children: /* @__PURE__ */ w.jsx(ni, { phonestate: u, part: "4th", delay: 1e3, title: i[0], children: i[1] }) }),
      /* @__PURE__ */ w.jsx("div", { className: "halokl", style: { top: "50px", ...d }, children: /* @__PURE__ */ w.jsx(ni, { phonestate: u, part: "1st", delay: 1e3, title: e[0], children: e[1] }) }),
      /* @__PURE__ */ w.jsx("div", { className: "halohj", style: { bottom: "-30px", ...h }, children: /* @__PURE__ */ w.jsx(ni, { phonestate: u, part: "3rd", delay: 1e3, title: r[0], children: r[1] }) }),
      /* @__PURE__ */ w.jsxs("svg", { width: "100vw", height: "100vh", style: { top: "50px", backgroundColor: "rgba(1,1,1,0)", position: "relative" }, children: [
        /* @__PURE__ */ w.jsx(K.circle, { className: "halo", cx: s[0] / 2, cy: s[1] / 2, r: a[0].y.to({ range: [0, 20], output: [f + 12, f + 15] }), strokeWidth: "20", stroke: "yellow", fill: "rgba(1,1,1,0)", transform: `rotate(-90 ${s[0] / 2} ${s[1] / 2})`, style: { backgroundColor: "red", filter: "blur(4px)", zIndex: 1e5 }, strokeDasharray: `${2 * (f + 12) * 3.3}`, strokeDashoffset: 2 * f * 3.3, opacity: 0.5 }),
        /* @__PURE__ */ w.jsx(K.circle, { onClick: () => {
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
  }, f = Object.assign(t.part == "1st" ? r : t.part == "2nd" ? i : t.part == "3rd" ? o : t.part == "4th" ? l : {}), h = Object.assign(t.part == "1st" ? s : t.part == "2nd" ? a : t.part == "3rd" ? u : t.part == "4th" ? c : {}), d = Object.assign(t.part == "1st" ? { top: "2em", textAlign: "right", paddingRight: "20px" } : t.part == "2nd" ? { top: "2em", textAlign: "left", paddingLeft: "20px" } : t.part == "3rd" ? { bottom: e[0] ? "1em" : "2em", textAlign: "left", paddingLeft: "20px" } : t.part == "4th" ? { bottom: e[0] ? "1em" : "2em", textAlign: "right", paddingRight: "20px" } : {}), g = j0({
    rootMarginLeft: "1000px",
    threshold: 0.2,
    triggerOnce: !1
  });
  k.useEffect(() => {
  }, [g]);
  const p = X({
    opacity: g.inView ? 1 : 0,
    y: g.inView ? 0 : 200,
    delay: 100,
    config: { duration: 1e3 }
  }), y = X({
    boxShadow: g.inView ? "10px 5px 5px black" : "10px 5px 5px rgba(1,1,1,0)",
    delay: 1100,
    config: { duration: 1e3 }
  });
  X({
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
    /* @__PURE__ */ w.jsx(K.div, { style: {
      fontFamily: "'DotGothic16'",
      ...v,
      ...d,
      zIndex: 5,
      left: "0px"
    }, children: /* @__PURE__ */ w.jsx(Sa, { fadestate: [g.inView, null], children: t.title }) }),
    /* @__PURE__ */ w.jsx("div", { ref: g.ref, className: "viewpart", style: { position: "absolute", zIndex: 1, height: "100%", width: "40px", ...h, backgroundColor: "rgba(221,221,221,0.8)" } }),
    /* @__PURE__ */ w.jsxs(K.div, { style: { overflow: "hidden", fontFamily: "'DotGothic16'", ...p, ...y, ...n, ...f, zIndex: 4 }, children: [
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
}, Sb = (t) => {
  const r = k.useRef(null), i = k.useRef(null), o = t.phonestate, l = () => {
    zi.timeline({
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
    const f = zi.timeline({
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
  k.useEffect(() => {
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
      /* @__PURE__ */ w.jsx("div", { className: "adjuster", style: {
        width: "100%",
        height: "800px",
        textAlign: "center"
      } }),
      t.children[1]
    ] }),
    /* @__PURE__ */ w.jsx(Cb, { ref: i, phonestate: o }),
    /* @__PURE__ */ w.jsx("div", { className: "coma1", style: { ...a, left: `${s[0] * 0.1}px`, bottom: "-300px" } }),
    /* @__PURE__ */ w.jsx("div", { className: "coma1", style: { ...a, left: `${s[0] * 0.7}px`, bottom: "100px" } }),
    /* @__PURE__ */ w.jsx("div", { className: "coma2", style: { ...a, left: `${s[0] * 0.6}px`, bottom: "-130px" } }),
    /* @__PURE__ */ w.jsx("div", { className: "coma2", style: { ...a, left: "71%", bottom: "400px" } }),
    /* @__PURE__ */ w.jsx("div", { className: "coma3", style: { ...a, left: `${s[0] * 0.8}px`, bottom: "30px" }, children: " " }),
    /* @__PURE__ */ w.jsx("div", { className: "coma3", style: { ...a, left: "-10%", bottom: "400px" } })
  ] }) });
}, Cb = k.forwardRef((t, e) => {
  k.useImperativeHandle(
    e,
    () => (s, a) => (r[1](s), r[0])
  );
  const n = t.phonestate, r = k.useState(!1), i = X({
    bottom: r[0] ? "0" : "-60vh"
  });
  k.useEffect(() => {
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
  return /* @__PURE__ */ w.jsxs(K.div, { className: "footer", style: {
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
        /* @__PURE__ */ w.jsx(p1, { children: /* @__PURE__ */ w.jsx("div", { className: "imagecmp", style: {
          ...l,
          backgroundImage: 'url("https://github.githubassets.com/assets/apple-touch-icon-180x180-a80b8e11abe2.png")'
        } }) }),
        /* @__PURE__ */ w.jsx(p1, { children: /* @__PURE__ */ w.jsx("div", { className: "imagecmp", style: {
          ...l,
          backgroundColor: "white",
          backgroundImage: 'url("https://cdn.qiita.com/assets/public/push_notification/image-qiitan-572179a3bbde375850422ea48b2b6272.png")'
        } }) })
      ] }) })
    ] })
  ] });
}), p1 = (t) => {
  const e = k.useState(!1), n = X({
    transform: e[0] ? "scale(1.2,1.2)" : "scale(1,1)"
  });
  return /* @__PURE__ */ w.jsx(
    K.div,
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
}, sw = k.createContext({ lite: "bbb" }), Eb = () => {
  const [t, e] = k.useState(!1), n = () => e(!0);
  return k.useEffect(() => {
    if (document.readyState === "complete") {
      n();
      return;
    }
    return window.addEventListener("load", n), () => {
      window.removeEventListener("load", n);
    };
  }, []), t;
}, bb = k.forwardRef((t, e) => {
  Eb();
  const n = t.phonestate, r = t.phonestate[0] ? [0, window.innerHeight / 2 - window.innerHeight * 0.6 / 2] : [20, window.innerHeight / 2 - window.innerHeight * 0.45], i = k.useRef(null);
  k.useContext(sw);
  var o = null;
  k.useImperativeHandle(
    e,
    () => (p, y) => (clearTimeout(o), o = window.setTimeout(() => {
      n[0] && c[1](!1);
    }, 3e3), n[0] && c[1](!0), h[1](!h[0]), h[0])
  );
  const l = t.lr == "L" ? { left: `${r[0]}px` } : { right: `${r[0]}px` }, s = {
    fontSize: "80px",
    lineHeight: "1em",
    fontFamily: "'Dela Gothic One','Kiwi Maru','serif','DotGothic16'",
    color: "rgba(250,250,250,1)"
  }, a = {
    fontSize: "40px",
    lineHeight: "1em",
    fontFamily: "'Dela Gothic One','Kiwi Maru','serif','DotGothic16'",
    color: "rgba(250,250,250,1)"
  }, u = {
    fontSize: "20px",
    lineHeight: "1em",
    fontFamily: "'Dela Gothic One','Kiwi Maru','serif','DotGothic16'",
    color: "rgba(250,250,250,1)"
  };
  k.useEffect(() => {
    i.current.addEventListener("selectstart", (p) => {
      p.preventDefault();
    });
  }, []);
  const c = k.useState(!0), f = X({
    opacity: c[0] ? 1 : 0,
    config: { duration: 1e3 }
  });
  k.useEffect(() => {
    (screen.availWidth < 500 || window.innerWidth < 500) && h[1](!0);
  }, [c]), k.useEffect(() => {
    n[0] && window.setTimeout(() => {
      c[1](!1);
    }, 3e3);
  }, [n[0]]), X(() => ({
    to: { rotate: 360 },
    from: { rotate: 0 },
    config: { duration: 2e3 },
    loop: !0
  }));
  const h = k.useState(!0), d = X({
    boxShadow: h[0] ? "0px 0px 25px 22px rgba(220, 220, 220, .8)" : "10px 5px 5px 10px rgba(220, 220, 220, 0)",
    filter: h[0] ? "brightness(100%)" : "brightness(60%)"
  }), g = {
    position: "absolute",
    width: `${n[0] ? window.innerWidth / 1 : window.innerWidth / 2 - 100}px`,
    height: `${n[0] ? window.innerHeight / 1 : window.innerHeight / 1 - 200}px`,
    backgroundColor: "rgba(1,1,1,1)",
    border: "double rgba(255,0,0,0.7) 10px",
    boxSizing: "border-box",
    zIndex: 100,
    bottom: `${n[0] ? 0 : r[1]}px`,
    userSelect: "none",
    textAlign: "center"
  };
  return /* @__PURE__ */ w.jsxs(
    K.div,
    {
      ref: i,
      style: {
        ...d,
        pointerEvents: "none",
        ...f,
        ...l,
        ...g
      },
      children: [
        /* @__PURE__ */ w.jsxs("div", { style: {
          position: "relative",
          top: `${n[0] ? window.innerHeight * 0.2 : (window.innerHeight - 150) * 0.25}px`
        }, children: [
          /* @__PURE__ */ w.jsx("div", { style: { ...s, marginBottom: "20px" }, children: "Origin Club" }),
          /* @__PURE__ */ w.jsx("div", { style: { ...a }, children: "オリジナリティあふれるサイトを作ろう！" }),
          /* @__PURE__ */ w.jsxs("div", { className: "", style: {
            left: "-10px",
            ...u,
            marginTop: "5px",
            height: "5em",
            width: n[0] ? `${window.innerWidth * 0.9}px` : `${window.innerWidth / 2 - 100}px`,
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
      ]
    }
  );
}), Tb = (t) => {
  const e = t.phonestate;
  var n = e[0] ? [window.innerWidth * 1, window.innerHeight * 0.7] : [window.innerWidth / 2 - 100, window.innerHeight / 1.3];
  const r = e[0] ? [0, window.innerHeight / 2 - window.innerHeight * 0.6 / 2] : [100, window.innerHeight / 2 - window.innerHeight * 0.45], i = k.useRef(null);
  k.useState(!1);
  const o = k.useState(!1);
  j0({
    rootMargin: "0px",
    triggerOnce: !1
  }), k.useEffect(() => {
    var p = 0;
    u.current(!0, !0), setInterval(() => {
      p++, p % 4 == 1 ? u.current(!1, !1) || c.current(!1, !1) || f.current(!1, !1) || h.current(!1, !1) || (u.current(!0, !0), c.current(!1, !0), f.current(!1, !0), h.current(!1, !0)) : p % 4 == 2 ? u.current(!1, !1) || c.current(!1, !1) || f.current(!1, !1) || h.current(!1, !1) || (u.current(!1, !0), c.current(!0, !0), f.current(!1, !0), h.current(!1, !0)) : p % 4 == 3 ? u.current(!1, !1) || c.current(!1, !1) || f.current(!1, !1) || h.current(!1, !1) || (u.current(!1, !0), c.current(!1, !0), f.current(!0, !0), h.current(!1, !0)) : p % 4 == 0 && (u.current(!1, !1) || c.current(!1, !1) || f.current(!1, !1) || h.current(!1, !1) || (u.current(!1, !0), c.current(!1, !0), f.current(!1, !0), h.current(!0, !0)));
    }, 2e3);
  }, []);
  const l = t.lr == "L" ? { left: `${r[0]}px` } : { right: `${r[0]}px` }, s = X({
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
    }) : p == "updatelog" ? window.scrollTo({
      top: 5600,
      behavior: "smooth"
    }) : document.getElementsByClassName(p)[0].scrollIntoView(
      { behavior: "smooth", block: "nearest" }
    );
  }, u = k.useRef(null), c = k.useRef(null), f = k.useRef(null), h = k.useRef(null);
  k.useContext(sw);
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
  return /* @__PURE__ */ w.jsxs(K.div, { onClick: () => {
  }, ref: i, style: {
    ...s,
    position: "absolute",
    color: "rgba(113, 36, 0,1)",
    ...d,
    ...l,
    zIndex: 1
  }, children: [
    /* @__PURE__ */ w.jsx(vu, { phonestate: e, picsheeturl: "https://user0514.cdnw.net/shared/img/thumb/zubottyDSC07997-268_TP_V.jpg", ref: u, delay: 200 * 0, btnid: 0, alloff: (p) => {
      g(p);
    }, btmright: [0, n[1] / 20], invokefunc: () => {
      a("aboutcomp");
    }, children: "メッセージ" }),
    /* @__PURE__ */ w.jsx(vu, { phonestate: e, picsheeturl: "https://user0514.cdnw.net/shared/img/thumb/zubottyDSC07997-268_TP_V.jpg", ref: c, delay: 200 * 1, btnid: 1, alloff: (p) => {
      g(p);
    }, btmright: [0, n[1] / 5 + n[1] / 20], invokefunc: () => {
      t.setfunc.current();
    }, children: "私たちについて" }),
    /* @__PURE__ */ w.jsx(vu, { phonestate: e, picsheeturl: "https://user0514.cdnw.net/shared/img/thumb/zubottyDSC07997-268_TP_V.jpg", ref: f, delay: 200 * 2, btnid: 2, alloff: (p) => {
      g(p);
    }, btmright: [0, n[1] * 2 / 5 + n[1] / 20], invokefunc: () => {
      a("updatelog");
    }, children: "Update Log" }),
    /* @__PURE__ */ w.jsx(vu, { phonestate: e, picsheeturl: "https://user0514.cdnw.net/shared/img/thumb/zubottyDSC07997-268_TP_V.jpg", ref: h, delay: 200 * 3, btnid: 3, alloff: (p) => {
      g(p);
    }, btmright: [0, n[1] * 3 / 5 + n[1] / 20], invokefunc: () => {
      a("footer");
    }, children: "コンタクト" })
  ] });
}, vu = k.forwardRef((t, e) => {
  const n = k.useRef(null), r = k.useState(!1), i = k.useState(!1), o = t.phonestate;
  k.useImperativeHandle(
    e,
    () => (c, f) => (i[0] || r[1](!1), f && r[1](c), i[0])
  );
  const l = o[0] ? [window.innerWidth, window.innerHeight * 0.7 / 8] : [window.innerWidth / 2 - 100 / 8, window.innerHeight / 1.3 / 8];
  o[0] ? window.innerHeight / 2 - window.innerHeight * 0.6 / 2 : window.innerHeight / 2 - window.innerHeight * 0.45;
  const s = X({
    transform: r[0] ? "translate(0px,-7px)" : "translate(0px,0px)",
    borderTop: r[0] ? "double 14px rgba(255,255,255,1)" : "solid 7px rgba(255,255,255,1)",
    borderBottom: r[0] ? "double 14px rgba(255,255,255,1)" : "solid 7px rgba(255,255,255,1)",
    color: r[0] ? "rgba(220,220,220,1)" : "rgba(50,50,50,0.3)",
    backgroundColor: r[0] ? "rgba(80,80,80,0.7)" : "rgba(210,210,210,1)",
    config: {
      duration: 1e3
    }
  }), a = X({
    width: r[0] ? "5px" : "20px",
    height: r[0] ? "20px" : "5px",
    left: r[0] ? "-0px" : "-10px",
    top: r[0] ? `${l[1] / 2 - 10}px` : `${l[1] / 2 - 2.5}px`,
    config: {
      duration: 500
    }
  });
  X(() => ({ from: { x: 0 }, to: { x: 10 }, loop: { reverse: !0 }, config: { duration: 3e3 } }));
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
  return k.useEffect(() => {
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
  }, []), /* @__PURE__ */ w.jsxs(K.div, { ref: n, style: {
    ...u,
    ...s,
    userSelect: "none",
    right: `${t.btmright[0]}px`,
    zIndex: 3e4,
    top: `${t.btmright[1]}px`
  }, children: [
    /* @__PURE__ */ w.jsx(K.div, { style: {
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
}), Pb = (t) => {
  const e = t.basename, [n, r] = k.useState([1e3, 300]), i = k.useState(!0), o = k.useState(0), l = k.useState(0), s = j0({
    rootMargin: "2px",
    triggerOnce: !1
  });
  k.useEffect(() => {
    screen.availWidth < 500 || window.innerWidth < 500 ? (i[1](!0), r([window.innerWidth * 1, window.innerHeight * 0.6]), o[1](0), l[1](window.innerHeight / 2 - window.innerHeight * 0.6 / 2)) : (i[1](!1), r([window.innerWidth / 2 - 240, window.innerHeight / 2]), o[1](150), l[1](window.innerHeight / 2 - window.innerHeight / 2 / 2));
  }, []);
  const a = t.lr == "L" ? { left: `${o[0]}px` } : t.lr == "R" ? { right: `${o[0]}px` } : {}, u = t.children.slice(0, 3).map((p, y) => /* @__PURE__ */ w.jsx(Ob, { phonestate: i, basename: e, fontsize: 1, i: y, title: p.title, link: p.link }, y)), c = X(() => ({
    from: { backgroundSize: "50px", backgroundPosition: "0px 0px" },
    to: { backgroundSize: "50.5px", backgroundPosition: "-1px -1px" },
    loop: { reverse: !0 },
    config: { duration: 2e3 }
  })), f = {
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
    textAlign: "center"
  }, h = {
    textAlign: "center",
    boxSizing: "border-box",
    backgroundColor: "rgba(220,220,220,0.0)",
    width: "100%",
    display: "inline-block",
    opacity: 1
  }, d = {
    position: "absolute",
    top: i[0] ? "-0em" : "0px",
    height: "2px",
    backgroundColor: "rgba(150,240,150,1)"
  }, g = X({
    from: { width: "80%", right: "30%", opacity: 1 },
    to: { width: "20%", right: "-10%", opacity: 0 },
    config: { duration: 500 },
    delay: 2e3,
    loop: !0
  });
  return /* @__PURE__ */ w.jsxs(K.div, { ref: s.ref, className: "updatelog", style: {
    ...f,
    ...c[0],
    ...a
  }, children: [
    /* @__PURE__ */ w.jsx(K.div, { style: { ...g, ...d } }),
    /* @__PURE__ */ w.jsx(K.div, { style: {
      position: "absolute",
      textAlign: "left",
      top: i[0] ? "-0.5em" : "5px",
      left: i[0] ? "0.1em" : "1em",
      left: i[0] ? "-0.1em" : "1em",
      boxSizing: "border-box",
      padding: "0px",
      fontSize: i[0] ? "2em" : "1.2em",
      color: "white",
      fontFamily: "'Kosugi Maru'"
    }, children: /* @__PURE__ */ w.jsx(Sa, { fadestate: [s[1], null], basedelay: 500, children: "-Update Log-" }) }),
    /* @__PURE__ */ w.jsxs("div", { className: "CpLog", style: { ...h }, children: [
      u,
      " "
    ] })
  ] });
}, Ob = (t) => {
  const e = t.basename, n = t.phonestate, r = k.useRef(null), i = k.useState(!1), o = X(() => ({
    from: { transform: "scale(1,1)", backgroundColor: "rgba(220,220,220,1)" },
    config: {
      duration: 200
    }
  }));
  var l = null;
  const s = k.useRef(!0), a = k.useCallback(() => {
    i[1](!0), o[1]({
      config: { duration: 600 },
      transform: "scale(1.1,1.1)",
      backgroundColor: "white"
    }), l = window.setTimeout(() => {
      n[0] && (location.href = `${t.link}`);
    }, 550);
  }), u = k.useCallback(() => {
    clearTimeout(l), i[1](!1), o[1]({
      delay: 100,
      transform: "scale(1,1)",
      backgroundColor: "rgba(220,220,220,1)"
    });
  });
  k.useEffect(() => {
    if (n[0] && (console.log("aaaaa"), r.current.addEventListener("touchstart", () => {
      a();
    }), r.current.addEventListener("touchend", () => {
      u();
    })), s.current) {
      s.current = !1;
      return;
    }
    n[0] || (r.current.addEventListener("click", () => {
      location.href = `${t.link}`;
    }), r.current.addEventListener("mouseenter", () => {
      a();
    }), r.current.addEventListener("mouseleave", () => {
      u();
    }));
  }, [n[0]]);
  const c = 10, f = 20, h = 240, d = 2, g = {
    ...o[0],
    textAlign: "left",
    width: "100%",
    height: `${h}px`,
    userSelect: "none",
    marginBottom: "2px",
    marginTop: "2px",
    borderTop: `double ${d}px rgba(200,250,200,1)`,
    borderBottom: `double ${d}px rgba(200,250,200,1)`,
    boxSizing: "border-box",
    paddingTop: `${f}px`,
    paddingBottom: `${f}px`,
    backgroundPosition: "100% 0%",
    display: "inline-block"
    //  ,overflow:"hidden"
  };
  var p = `${t.i * (h + c * 1) + 30}px`;
  const y = X(
    () => ({
      from: {
        borderTop: `double ${d + 10}px rgba(200,250,200,0)`,
        borderBottom: `double ${d + 10}px rgba(200,250,200,0)`
      },
      to: {
        borderTop: `double ${d + 10}px rgba(200,250,200,1)`,
        borderBottom: `double ${d + 10}px rgba(200,250,200,1)`
      },
      delay: 1,
      loop: { reverse: !0 },
      config: { duration: 5e3 }
    })
  );
  return /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
    /* @__PURE__ */ w.jsx(K.div, { className: "", style: {
      ...g,
      left: 0,
      opacity: 1,
      top: p,
      position: "absolute",
      zIndex: -t.i + 8,
      ...y[1],
      filter: "blur(10px)",
      backgroundColor: "rgb(40,40,40)"
    } }),
    /* @__PURE__ */ w.jsx("div", { className: "", style: {
      ...g,
      left: 0,
      opacity: 0.3,
      top: p,
      position: "absolute",
      zIndex: -t.i + 9,
      backgroundImage: `url("${e}/dist/11122.svg")`,
      backgroundRepeat: "no-repeat"
    } }),
    /* @__PURE__ */ w.jsx(K.div, { ref: r, style: {
      ...g,
      backgroundColor: "",
      left: 0,
      top: p,
      position: "absolute",
      zIndex: -t.i + 10
    }, children: /* @__PURE__ */ w.jsxs("div", { style: {
      fontFamily: "'DotGothic16'",
      whiteSpace: "nowrap",
      height: "100%",
      width: "100%",
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
      /* @__PURE__ */ w.jsx(Rb, { text: t.title })
    ] }, `key${t.i}`) })
  ] });
}, Rb = (t) => {
  const e = k.useState(!1), n = k.useState(!0), r = X(
    {
      color: e[0] ? "blue" : "black",
      config: {
        duration: 1e3
      }
    }
  ), i = t.text.length > 30 ? Array.from(t.text).slice(0, 60).join("") + "..." : t.text;
  return k.useEffect(() => {
    screen.availWidth < 500 || window.innerWidth < 500 ? n[1](!0) : n[1](!1);
  }, []), /* @__PURE__ */ w.jsx(K.div, { style: {
    ...r,
    maxHeight: "100%",
    lineHeight: n[0] ? "2em" : "1.5em",
    fontSize: n[0] ? "2em" : "1.5em",
    verticalAlign: "middle",
    textDecoration: "none",
    display: "inline-block",
    width: "50%",
    paddingRight: "0px",
    color: "rgba(200,200,200,1)",
    overflow: "hidden",
    overflowWrap: "break-word",
    whiteSpace: "normal"
  }, children: i });
};
zi.registerPlugin(oe);
const g1 = k.createContext(null), Mb = (t) => {
  const e = k.useState(!1), n = t.basename;
  k.useState(!1);
  const r = k.useRef(null);
  var i = window.innerWidth;
  k.useEffect(() => {
    console.log("読み込み開始：CoolBox"), window.addEventListener("mouseover", (s) => {
    }), window.addEventListener("resize", () => {
      i == window.innerWidth || (i = window.innerWidth, window.location.reload());
    }), screen.availWidth < 600 || window.innerHeight < 600 ? e[1](!0) : e[1](!1);
  }, []);
  const o = [
    { link: `${n}/irai`, title: "サイト本格オープン", setsu: "" },
    { link: `${n}/irai`, title: "簡易依頼出力オープン", setsu: "" },
    { link: "/", title: "更新3回目記念！", setsu: "" },
    { link: "/", title: "更新3回目記念！", setsu: "" }
  ], l = k.useRef(null);
  return k.useContext(g1), /* @__PURE__ */ w.jsx(g1.Provider, { value: { viewent: l }, children: /* @__PURE__ */ w.jsxs("div", { className: "base", ref: r, style: {
    overflow: "hidden",
    padding: "0px",
    margin: "0px",
    textAlign: "center"
  }, children: [
    /* @__PURE__ */ w.jsxs(Nb, { phonestate: e, className: "aboutcomp2", children: [
      /* @__PURE__ */ w.jsx(bb, { phonestate: e, ref: l, lr: "L" }),
      /* @__PURE__ */ w.jsx(Tb, { phonestate: e, lr: "R", setfunc: l })
    ] }),
    /* @__PURE__ */ w.jsx(kb, { phonestate: e, className: "aboutcomp" }),
    /* @__PURE__ */ w.jsxs(Sb, { phonestate: e, className: "productcomp4", children: [
      /* @__PURE__ */ w.jsx(Pb, { basename: n, lr: "F", children: o }),
      /* @__PURE__ */ w.jsx(pb, { basename: n, phonestate: e, width: "", children: " " })
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
}, Nb = (t) => {
  t.phonestate;
  const e = 100, n = k.useRef(null), r = () => {
    zi.timeline({
      scrollTrigger: {
        trigger: n.current,
        start: "center center",
        end: `+=${e}`,
        //end: "top bottom", 
        scrub: !0,
        pin: !0
      }
    });
  };
  k.useEffect(() => {
    window.setTimeout(() => {
      window.scrollTo({
        top: 0
        //behavior:"smooth"
      }), r();
    }, 300);
  }, []);
  const i = X(() => ({
    from: { x: "linear-gradient(160deg,rgba(150,150,150,1) 0%, rgba(255,255,255,1) 50% , rgba(150,150,150,1) 100%)" },
    to: { x: "linear-gradient(160deg,rgba(150,150,150,1) 0%, rgba(235,235,235,1) 50%, rgba(150,150,150,1) 100%)" },
    config: { duration: 5e3 },
    loop: { reverse: !0 }
    //,loop:true
  }));
  return /* @__PURE__ */ w.jsx(w.Fragment, { children: /* @__PURE__ */ w.jsx(K.div, { ref: n, className: t.className + " Hiki3", style: {
    width: "100vw",
    height: "100vh",
    background: i[0].x,
    position: "relative",
    zIndex: 1
  }, children: t.children }) });
}, yu = (t) => {
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
  }, i = k.useRef(null), o = k.useState(!1), l = X({
    color: o[0] ? "black" : "white"
  });
  X({
    backgroundColor: o[0] ? "rgba(1,1,1,0)" : "black"
    //,duration:40000
    //,onResolve:()=>{console.log("aaaaa")}
  });
  const s = k.useState(null);
  var a = null;
  const u = () => {
    clearTimeout(a), s[1](t.link), o[1](!0);
  }, c = () => {
    clearTimeout(a), a = window.setTimeout(() => {
      o[1](!1);
    }, 200);
  };
  k.useEffect(() => {
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
  const f = X({
    x: o[0] ? "10em" : "0em",
    config: {
      duration: 350
    },
    onRest: (h, d, g, p) => {
      o[0] && e[0] && (location.href = s[0]);
    }
  });
  return /* @__PURE__ */ w.jsxs(
    K.div,
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
        /* @__PURE__ */ w.jsx(K.div, { style: { backgroundColor: "rgba(0,0,0,0)", ...l, ...r, zIndex: 8 }, children: /* @__PURE__ */ w.jsx(Sa, { children: t.children }) }),
        /* @__PURE__ */ w.jsx(K.div, { style: { ...f, backgroundColor: "black", ...r, zIndex: 7 } }),
        /* @__PURE__ */ w.jsx(K.div, { style: { ...f, backgroundColor: "white", ...r, left: "-10em", zIndex: 7 } })
      ]
    }
  );
}, Ab = () => {
  const [t, e] = k.useState(!1), n = (r) => {
    e(!0);
  };
  return k.useEffect(() => {
    if (document.readyState === "complete") {
      n();
      return;
    }
    return window.addEventListener("load", n), () => {
      window.removeEventListener("load", n);
    };
  }, []), t;
}, Ib = (t) => {
  const e = Ab(), n = {
    position: "fixed",
    width: "100%",
    top: 0,
    left: 0,
    height: "100%",
    pointerEvents: "none"
  }, r = t.phonestate, i = k.useRef(null);
  k.useEffect(() => {
    console.log("読み込み開始：FrameArt", e), console.log(e), i.current.addEventListener("selectstart", (y) => {
      y.preventDefault();
    });
    const p = zi.timeline({
      delay: 0,
      scrollTrigger: { scrub: 1 }
    });
    p.to(i.current.getElementsByClassName("gearS")[0], { rotate: "+=730", duration: 1 }), p.to(i.current.getElementsByClassName("gearL")[0], { rotate: "-=360", duration: 1 }, "-=1"), a[1]({ x: 100 }), console.log("読み込みEnd：FrameArt", e);
  }, []);
  const [o, l] = k.useState(2), s = X({
    eyes: o,
    delay: 100,
    config: { duration: 800 }
  }), a = X(
    () => ({ x: 0 })
  ), u = k.useState(!1), c = X({
    opacity: u[0] ? 0 : 1,
    delay: 100
  }), f = X({
    opacity: u[0] ? 1 : 0,
    delay: 1e3
  });
  k.useEffect(() => {
    e && u[1](!0);
  }, [e]), k.useEffect(() => {
    window.setTimeout(() => {
      l((p) => 600), console.log("処理");
    }, 800);
  }, [u[0]]);
  const h = {
    opacity: 0.1,
    pointerEvents: "none",
    position: "fixed",
    zIndex: 1,
    backgroundImage: 'url("https://icon-pit.com/wp-content/uploads/2018/12/haguruma_gear_icon_3742.png")',
    backgroundSize: "cover"
  };
  u1();
  const d = u1(), g = k.useState(0);
  return X(
    { ref: d, to: { scale: g[0] ? 0.5 : 1 }, from: { scale: g[0] ? 1 : 0.5 }, config: { duration: 2e3 } }
  ), ZE([], {
    ref: null,
    from: { scale: 1 },
    enter: { scale: 1 },
    leave: { scale: 1 }
  }), /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
    /* @__PURE__ */ w.jsxs("div", { ref: i, className: "FrameArt", style: { position: "fixed", zIndex: 1500 }, children: [
      /* @__PURE__ */ w.jsx(Db, { phonestate: r, opa_r: f }),
      /* @__PURE__ */ w.jsx("div", { className: "gearL", style: { ...h, width: r[0] ? "100px" : "300px", height: r[0] ? "100px" : "300px", right: r[0] ? "-35px" : "-100px", bottom: r[0] ? "-20px" : "-80px" } }),
      /* @__PURE__ */ w.jsx("div", { className: "gearS", style: { ...h, width: `${(r[0] ? 1 / 3 : 1) * 500}px`, height: `${(r[0] ? 1 / 3 : 1) * 500}px`, right: `${-200 * (r[0] ? 0.25 : 1)}px`, bottom: `${-25 * (r[0] ? 0.1 : 1)}px` } }),
      /* @__PURE__ */ w.jsx($b, { loadingstate: u, phonestate: r }),
      /* @__PURE__ */ w.jsx(zb, { loadingstate: u, phonestate: r })
    ] }),
    /* @__PURE__ */ w.jsxs("svg", { style: { ...n, zIndex: 1012 }, children: [
      /* @__PURE__ */ w.jsx("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: "rgba(200,255,255,1)", style: { mask: "url(#mask)" } }),
      /* @__PURE__ */ w.jsxs("mask", { id: "mask", x: "0px", y: "0px", width: `${window.innerWidth}px`, height: `${window.innerHeight}px`, children: [
        /* @__PURE__ */ w.jsx("rect", { x: "0", y: "0", width: `${window.innerWidth}px`, height: `${window.innerHeight}px`, fill: "#ffffff" }),
        /* @__PURE__ */ w.jsx(K.ellipse, { cx: "50vw", cy: "50vh", rx: "70vw", ry: s.eyes, fill: "black", style: { opacity: 1 } }),
        /* @__PURE__ */ w.jsx("text", { x: "50%", y: "10%", textAnchor: "middle", dominantBaseline: "central", fill: "black" })
      ] })
    ] }),
    /* @__PURE__ */ w.jsx(K.div, { style: {
      ...c,
      width: "400px",
      height: "20px",
      backgroundColor: "rgba(200,200,0,1)",
      position: "fixed",
      zIndex: 1e4,
      top: `${window.innerHeight / 2 - 10}px`,
      left: `${window.innerWidth / 2 - 200}px`
    } }),
    /* @__PURE__ */ w.jsx(K.div, { style: {
      ...c,
      width: a[0].x.to({ range: [0, 100], output: ["0px", "400px"] }),
      height: "20px",
      backgroundColor: "rgba(200,0,0,1)",
      position: "fixed",
      zIndex: 10001,
      top: `${window.innerHeight / 2 - 10}px`,
      left: `${window.innerWidth / 2 - 200}px`
    } })
  ] });
}, zb = (t) => {
  const n = t.phonestate[0] ? 50 : 200, r = t.loadingstate, i = X({
    opacity: r[0] ? 0.5 : 0,
    delay: 1e3
  });
  return X(() => ({ from: { x: -n / 4, rotate: 0 }, to: { x: n / 3, rotate: 20 }, config: { duration: 4e3 }, loop: { reverse: !0 } })), X(() => ({ from: { y: 0 }, config: { duration: 2e3 } })), /* @__PURE__ */ w.jsxs("a", { href: "/skyopener.github.io/", children: [
    " ",
    /* @__PURE__ */ w.jsx(
      K.div,
      {
        style: {
          ...i,
          width: `${n / 2}px`,
          height: `${n / 2}px`,
          position: "fixed",
          left: -n / 5,
          top: `${n * 3 / 3}px`,
          zIndex: 1011,
          backgroundImage: 'url("/skyopener.github.io/dist/home.png")',
          backgroundSize: "cover"
        }
      }
    )
  ] });
}, $b = (t) => {
  const n = t.phonestate[0] ? 50 : 200, r = t.loadingstate, i = X({
    opacity: r[0] ? 0.5 : 0,
    delay: 1e3
  }), o = X(() => ({ from: { x: -n / 4, rotate: 0 }, to: { x: n / 3, rotate: 20 }, config: { duration: 4e3 }, loop: { reverse: !0 } })), l = X(() => ({ from: { y: 0 }, config: { duration: 2e3 } }));
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
  return /* @__PURE__ */ w.jsx(K.div, { className: "ball", onClick: () => {
    clearTimeout(c), o[1].pause(), u(), l[1].stop(), l[1]({
      y: 50,
      config: { duration: 25 * 1 },
      onResolve: () => {
        l[1]({
          y: 100,
          config: { duration: 75 * 2, easing: Dx.easeOutBounce },
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
}, Db = (t) => {
  const e = t.phonestate, n = e[0] ? 50 : 150, r = k.useState(!1), i = X({
    rotate: r[0] ? 1800 : 0
    // ,opacity:spinswitch[0]?0.5:1
  }), o = k.useCallback(() => {
    r[1](!r[0]), window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }), l = X(() => ({ from: { x: 0 }, to: { x: 10 }, loop: { reverse: !0 } }));
  return X({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      duration: 2e3
    }
  }), /* @__PURE__ */ w.jsx(K.div, { className: "CtlBtn", onClick: () => o(), style: {
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
    /* @__PURE__ */ w.jsx(K.path, { strokeWidth: 10, d: `M${n / 2},${n / 15} L${n * 0.1},${n / 3} Z`, style: { x: "0", y: l[0].x.to({ range: [0, 10], output: [0, 10] }), fill: "rgba(200,200,100,.6)", stroke: "rgba(200,255,200,1)" } }),
    /* @__PURE__ */ w.jsx(K.path, { strokeWidth: 10, d: `M${n / 2 - 1},${n / 15} L${n - n * 0.1},${n / 3} Z`, style: { x: "0", y: l[0].x, fill: "rgba(200,200,100,.6)", stroke: "rgba(100,255,100,1)" } }),
    /* @__PURE__ */ w.jsx(K.path, { strokeWidth: 5, d: `M${n / 2},${n / 15 * 3} L${n * 0.1},${n / 3} Z`, style: { x: "0", y: l[0].x.to({ range: [0, 10], output: [0, 20] }), fill: "rgba(200,200,100,.6)", stroke: "rgba(200,255,200,1)" } }),
    /* @__PURE__ */ w.jsx(K.path, { strokeWidth: 5, d: `M${n / 2 - 1},${n / 15 * 3} L${n - n * 0.1},${n / 3} Z`, style: { x: "0", y: l[0].x.to({ range: [0, 10], output: [0, 20] }), fill: "rgba(200,200,100,.6)", stroke: "rgba(100,255,100,1)" } })
  ] }) });
}, _u = (t) => {
  const e = t.basename, n = k.useState(!1), r = k.useState(!1), i = k.useState(!1), { burgx: o, ...l } = X({
    burgx: i[0] ? "30em" : "0em"
  }), [s, a] = k.useState([window.innerWidth, window.innerHeight]), u = {
    position: "fixed",
    width: `${s[0]}px`,
    top: 0,
    left: 0,
    height: "100%"
    //,pointerEvents:"none"
  }, c = X({
    lighting: i[0] ? 1 : 0,
    config: { duration: 500 }
  }), f = [
    { strurl: "サイトオープン", url: `${e}/` },
    { strurl: "テストページ", url: `${e}/article/0` },
    { strurl: "依頼方法説明ページ", url: `${e}/article/1` }
  ];
  k.useEffect(() => {
    screen.availWidth < 500 || window.innerHeight < 500 ? (n[1](!0), h.current.addEventListener("touchstart", () => {
      d.current("mouseenter");
    }), h.current.addEventListener("touchend", () => {
      d.current("mouseleave");
    })) : (n[1](!1), h.current.addEventListener("mouseenter", () => {
      d.current("mouseenter");
    }), h.current.addEventListener("mouseleave", () => {
      d.current("mouseleave");
    })), screen.availWidth < 500 || window.innerHeight < 500 || (i[1](!0), r[1](!0));
  }, []);
  const h = k.useRef(null), d = k.useRef(null);
  return /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
    /* @__PURE__ */ w.jsxs("div", { className: "navi", ref: h, style: {
      position: "fixed",
      width: `${s[0]}px`,
      height: "3em",
      textAlign: "center",
      backgroundColor: "rgba(240,240,240,1)",
      zIndex: 1502
    }, children: [
      /* @__PURE__ */ w.jsx(jb, { ref: d, height: "3em", data: f }),
      /* @__PURE__ */ w.jsx("div", { style: { position: "absolute", top: "0px", right: "0px", backgroundColor: "rgba(240,240,240,1)", margin: "0px", textAlign: "center", display: "inline-block", height: "100%", verticalAlign: "top" }, children: /* @__PURE__ */ w.jsx(Lb, { height: 3, setburg: i }) })
    ] }),
    /* @__PURE__ */ w.jsx(K.div, { className: "colormass", style: {
      pointerEvents: i[0] ? "auto" : "none",
      opacity: c.lighting,
      zIndex: 500,
      backgroundColor: "rgba(1,1,1,.4)",
      ...u,
      display: r[0] ? "none" : "block"
    } }),
    /* @__PURE__ */ w.jsx(K.div, { className: "base2", style: {
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
    }, children: /* @__PURE__ */ w.jsxs("div", { style: {
      zIndex: 501,
      margin: "0px",
      display: "inline-block",
      verticalAlign: "top",
      height: "100%",
      overflow: "hidden",
      position: "relative",
      pointerEvents: "none"
    }, children: [
      /* @__PURE__ */ w.jsx(yu, { phonestate: n, height: 3, link: `${e}/`, children: "ご案内" }),
      /* @__PURE__ */ w.jsx(yu, { phonestate: n, height: 3, link: `${e}/`, children: "活動紹介" }),
      /* @__PURE__ */ w.jsx(yu, { phonestate: n, height: 3, link: `${e}/irai`, children: "依頼" }),
      /* @__PURE__ */ w.jsx(yu, { phonestate: n, height: 3, link: `${e}/`, children: "スペシャルサンクス" })
    ] }) }),
    /* @__PURE__ */ w.jsx(Ib, { phonestate: n })
  ] });
}, jb = k.forwardRef(
  (t, e) => {
    k.useImperativeHandle(e, () => (s, a) => {
      s == "mouseenter" ? r[1].pause() : s == "mouseleave" && r[1].resume();
    });
    const n = t.data.reduce((s, a) => s + 1, 0), r = X(() => ({ from: { x: `${-window.innerWidth}px` }, to: { x: `${300 * n}px` }, loop: !0, config: {
      duration: 2e4
    } }));
    k.useEffect(() => {
    }, []);
    const i = {
      display: "inline-block",
      height: t.height,
      lineHeight: t.height,
      verticalAlign: "baseline",
      backgroundColor: "rgba(240,240,240,1)",
      position: "relative",
      marginLeft: "25em"
    }, o = {
      userSelect: "none",
      backgroundColor: "rgba(240,240,240,1)",
      height: "94%",
      whiteSpace: "nowrap",
      textAlign: "right"
    }, l = t.data.map((s, a) => /* @__PURE__ */ w.jsx(
      K.div,
      {
        style: { ...i },
        onClick: () => {
          location.href = `${s.url}`;
        },
        children: s.strurl
      },
      a
    ));
    return /* @__PURE__ */ w.jsx(K.div, { style: { ...o, ...r[0] }, children: l });
  }
), Lb = (t) => {
  const [e, n] = k.useState(!1), { l1v: r, l3v: i, l2v: o, l2v2: l, ...s } = X({
    l1v: t.setburg[0] ? "80%" : "20%",
    l2v: t.setburg[0] ? "50%" : "20%",
    l2v2: t.setburg[0] ? "50%" : "80%",
    l3v: t.setburg[0] ? "20%" : "80%",
    config: { duration: 300 }
  });
  var a = window.innerHeight, u = window.innerWidth;
  k.useEffect(() => {
    a = window.innerHeight, u = window.innerWidth, u / a < 1 ? n(!0) : n(!1);
  }, []);
  const c = (d) => {
    d.preventDefault();
  }, f = k.useCallback(() => {
    document.addEventListener("touchmove", c, { useCapture: !1, passive: !1 }), document.addEventListener("wheel", c, { useCapture: !1, passive: !1 });
  }, []), h = k.useCallback(() => {
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
    /* @__PURE__ */ w.jsx(K.line, { x1: "20%", y1: "20%", x2: "80%", y2: r, style: { strokeWidth: "5px", stroke: "black" } }),
    /* @__PURE__ */ w.jsx(K.line, { x1: o, y1: "50%", x2: l, y2: "50%", style: { strokeWidth: "5px", stroke: "black" } }),
    /* @__PURE__ */ w.jsx(K.line, { x1: "20%", y1: "80%", x2: "80%", y2: i, style: { strokeWidth: "5px", stroke: "black" } })
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
function Ac() {
  return Ac = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Ac.apply(this, arguments);
}
var yi;
(function(t) {
  t.Pop = "POP", t.Push = "PUSH", t.Replace = "REPLACE";
})(yi || (yi = {}));
const m1 = "popstate";
function Fb(t) {
  t === void 0 && (t = {});
  function e(r, i) {
    let {
      pathname: o,
      search: l,
      hash: s
    } = r.location;
    return Jh(
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
    return typeof i == "string" ? i : aw(i);
  }
  return Ub(e, n, null, t);
}
function sn(t, e) {
  if (t === !1 || t === null || typeof t > "u")
    throw new Error(e);
}
function L0(t, e) {
  if (!t) {
    typeof console < "u" && console.warn(e);
    try {
      throw new Error(e);
    } catch {
    }
  }
}
function Bb() {
  return Math.random().toString(36).substr(2, 8);
}
function v1(t, e) {
  return {
    usr: t.state,
    key: t.key,
    idx: e
  };
}
function Jh(t, e, n, r) {
  return n === void 0 && (n = null), Ac({
    pathname: typeof t == "string" ? t : t.pathname,
    search: "",
    hash: ""
  }, typeof e == "string" ? df(e) : e, {
    state: n,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: e && e.key || r || Bb()
  });
}
function aw(t) {
  let {
    pathname: e = "/",
    search: n = "",
    hash: r = ""
  } = t;
  return n && n !== "?" && (e += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (e += r.charAt(0) === "#" ? r : "#" + r), e;
}
function df(t) {
  let e = {};
  if (t) {
    let n = t.indexOf("#");
    n >= 0 && (e.hash = t.substr(n), t = t.substr(0, n));
    let r = t.indexOf("?");
    r >= 0 && (e.search = t.substr(r), t = t.substr(0, r)), t && (e.pathname = t);
  }
  return e;
}
function Ub(t, e, n, r) {
  r === void 0 && (r = {});
  let {
    window: i = document.defaultView,
    v5Compat: o = !1
  } = r, l = i.history, s = yi.Pop, a = null, u = c();
  u == null && (u = 0, l.replaceState(Ac({}, l.state, {
    idx: u
  }), ""));
  function c() {
    return (l.state || {
      idx: null
    }).idx;
  }
  function f() {
    s = yi.Pop;
    let y = c(), v = y == null ? null : y - u;
    u = y, a && a({
      action: s,
      location: p.location,
      delta: v
    });
  }
  function h(y, v) {
    s = yi.Push;
    let m = Jh(p.location, y, v);
    n && n(m, y), u = c() + 1;
    let _ = v1(m, u), x = p.createHref(m);
    try {
      l.pushState(_, "", x);
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
  function d(y, v) {
    s = yi.Replace;
    let m = Jh(p.location, y, v);
    n && n(m, y), u = c();
    let _ = v1(m, u), x = p.createHref(m);
    l.replaceState(_, "", x), o && a && a({
      action: s,
      location: p.location,
      delta: 0
    });
  }
  function g(y) {
    let v = i.location.origin !== "null" ? i.location.origin : i.location.href, m = typeof y == "string" ? y : aw(y);
    return sn(v, "No window.location.(origin|href) available to create URL for href: " + m), new URL(m, v);
  }
  let p = {
    get action() {
      return s;
    },
    get location() {
      return t(i, l);
    },
    listen(y) {
      if (a)
        throw new Error("A history only accepts one active listener");
      return i.addEventListener(m1, f), a = y, () => {
        i.removeEventListener(m1, f), a = null;
      };
    },
    createHref(y) {
      return e(i, y);
    },
    createURL: g,
    encodeLocation(y) {
      let v = g(y);
      return {
        pathname: v.pathname,
        search: v.search,
        hash: v.hash
      };
    },
    push: h,
    replace: d,
    go(y) {
      return l.go(y);
    }
  };
  return p;
}
var y1;
(function(t) {
  t.data = "data", t.deferred = "deferred", t.redirect = "redirect", t.error = "error";
})(y1 || (y1 = {}));
function Vb(t, e, n) {
  n === void 0 && (n = "/");
  let r = typeof e == "string" ? df(e) : e, i = fw(r.pathname || "/", n);
  if (i == null)
    return null;
  let o = uw(t);
  Wb(o);
  let l = null;
  for (let s = 0; l == null && s < o.length; ++s)
    l = Jb(
      o[s],
      // Incoming pathnames are generally encoded from either window.location
      // or from router.navigate, but we want to match against the unencoded
      // paths in the route definitions.  Memory router locations won't be
      // encoded here but there also shouldn't be anything to decode so this
      // should be a safe operation.  This avoids needing matchRoutes to be
      // history-aware.
      nT(i)
    );
  return l;
}
function uw(t, e, n, r) {
  e === void 0 && (e = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, l, s) => {
    let a = {
      relativePath: s === void 0 ? o.path || "" : s,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: l,
      route: o
    };
    a.relativePath.startsWith("/") && (sn(a.relativePath.startsWith(r), 'Absolute route path "' + a.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), a.relativePath = a.relativePath.slice(r.length));
    let u = Cl([r, a.relativePath]), c = n.concat(a);
    o.children && o.children.length > 0 && (sn(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      o.index !== !0,
      "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')
    ), uw(o.children, e, c, u)), !(o.path == null && !o.index) && e.push({
      path: u,
      score: Kb(u, o.index),
      routesMeta: c
    });
  };
  return t.forEach((o, l) => {
    var s;
    if (o.path === "" || !((s = o.path) != null && s.includes("?")))
      i(o, l);
    else
      for (let a of cw(o.path))
        i(o, l, a);
  }), e;
}
function cw(t) {
  let e = t.split("/");
  if (e.length === 0)
    return [];
  let [n, ...r] = e, i = n.endsWith("?"), o = n.replace(/\?$/, "");
  if (r.length === 0)
    return i ? [o, ""] : [o];
  let l = cw(r.join("/")), s = [];
  return s.push(...l.map((a) => a === "" ? o : [o, a].join("/"))), i && s.push(...l), s.map((a) => t.startsWith("/") && a === "" ? "/" : a);
}
function Wb(t) {
  t.sort((e, n) => e.score !== n.score ? n.score - e.score : Zb(e.routesMeta.map((r) => r.childrenIndex), n.routesMeta.map((r) => r.childrenIndex)));
}
const Hb = /^:[\w-]+$/, Yb = 3, Xb = 2, Gb = 1, Qb = 10, qb = -2, _1 = (t) => t === "*";
function Kb(t, e) {
  let n = t.split("/"), r = n.length;
  return n.some(_1) && (r += qb), e && (r += Xb), n.filter((i) => !_1(i)).reduce((i, o) => i + (Hb.test(o) ? Yb : o === "" ? Gb : Qb), r);
}
function Zb(t, e) {
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
function Jb(t, e) {
  let {
    routesMeta: n
  } = t, r = {}, i = "/", o = [];
  for (let l = 0; l < n.length; ++l) {
    let s = n[l], a = l === n.length - 1, u = i === "/" ? e : e.slice(i.length) || "/", c = eT({
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
      pathname: Cl([i, c.pathname]),
      pathnameBase: iT(Cl([i, c.pathnameBase])),
      route: f
    }), c.pathnameBase !== "/" && (i = Cl([i, c.pathnameBase]));
  }
  return o;
}
function eT(t, e) {
  typeof t == "string" && (t = {
    path: t,
    caseSensitive: !1,
    end: !0
  });
  let [n, r] = tT(t.path, t.caseSensitive, t.end), i = e.match(n);
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
      return d && !g ? u[h] = void 0 : u[h] = rT(g || "", h), u;
    }, {}),
    pathname: o,
    pathnameBase: l,
    pattern: t
  };
}
function tT(t, e, n) {
  e === void 0 && (e = !1), n === void 0 && (n = !0), L0(t === "*" || !t.endsWith("*") || t.endsWith("/*"), 'Route path "' + t + '" will be treated as if it were ' + ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + t.replace(/\*$/, "/*") + '".'));
  let r = [], i = "^" + t.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (l, s, a) => (r.push({
    paramName: s,
    isOptional: a != null
  }), a ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return t.endsWith("*") ? (r.push({
    paramName: "*"
  }), i += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : t !== "" && t !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, e ? void 0 : "i"), r];
}
function nT(t) {
  try {
    return decodeURI(t);
  } catch (e) {
    return L0(!1, 'The URL path "' + t + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + e + ").")), t;
  }
}
function rT(t, e) {
  try {
    return decodeURIComponent(t);
  } catch (n) {
    return L0(!1, 'The value for the URL param "' + e + '" will not be decoded because' + (' the string "' + t + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + n + ").")), t;
  }
}
function fw(t, e) {
  if (e === "/")
    return t;
  if (!t.toLowerCase().startsWith(e.toLowerCase()))
    return null;
  let n = e.endsWith("/") ? e.length - 1 : e.length, r = t.charAt(n);
  return r && r !== "/" ? null : t.slice(n) || "/";
}
const Cl = (t) => t.join("/").replace(/\/\/+/g, "/"), iT = (t) => t.replace(/\/+$/, "").replace(/^\/*/, "/");
function oT(t) {
  return t != null && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.internal == "boolean" && "data" in t;
}
const dw = ["post", "put", "patch", "delete"];
new Set(dw);
const lT = ["get", ...dw];
new Set(lT);
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
function Ic() {
  return Ic = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Ic.apply(this, arguments);
}
const sT = /* @__PURE__ */ k.createContext(null), aT = /* @__PURE__ */ k.createContext(null), hw = /* @__PURE__ */ k.createContext(null), hf = /* @__PURE__ */ k.createContext(null), Ia = /* @__PURE__ */ k.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
}), pw = /* @__PURE__ */ k.createContext(null);
function F0() {
  return k.useContext(hf) != null;
}
function uT() {
  return F0() || sn(!1), k.useContext(hf).location;
}
function cT() {
  let {
    matches: t
  } = k.useContext(Ia), e = t[t.length - 1];
  return e ? e.params : {};
}
function fT(t, e) {
  return dT(t, e);
}
function dT(t, e, n, r) {
  F0() || sn(!1);
  let {
    navigator: i
  } = k.useContext(hw), {
    matches: o
  } = k.useContext(Ia), l = o[o.length - 1], s = l ? l.params : {};
  l && l.pathname;
  let a = l ? l.pathnameBase : "/";
  l && l.route;
  let u = uT(), c;
  if (e) {
    var f;
    let y = typeof e == "string" ? df(e) : e;
    a === "/" || (f = y.pathname) != null && f.startsWith(a) || sn(!1), c = y;
  } else
    c = u;
  let h = c.pathname || "/", d = a === "/" ? h : h.slice(a.length) || "/", g = Vb(t, {
    pathname: d
  }), p = vT(g && g.map((y) => Object.assign({}, y, {
    params: Object.assign({}, s, y.params),
    pathname: Cl([
      a,
      // Re-encode pathnames that were decoded inside matchRoutes
      i.encodeLocation ? i.encodeLocation(y.pathname).pathname : y.pathname
    ]),
    pathnameBase: y.pathnameBase === "/" ? a : Cl([
      a,
      // Re-encode pathnames that were decoded inside matchRoutes
      i.encodeLocation ? i.encodeLocation(y.pathnameBase).pathname : y.pathnameBase
    ])
  })), o, n, r);
  return e && p ? /* @__PURE__ */ k.createElement(hf.Provider, {
    value: {
      location: Ic({
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default"
      }, c),
      navigationType: yi.Pop
    }
  }, p) : p;
}
function hT() {
  let t = wT(), e = oT(t) ? t.status + " " + t.statusText : t instanceof Error ? t.message : JSON.stringify(t), n = t instanceof Error ? t.stack : null, i = {
    padding: "0.5rem",
    backgroundColor: "rgba(200,200,200, 0.5)"
  }, o = null;
  return /* @__PURE__ */ k.createElement(k.Fragment, null, /* @__PURE__ */ k.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ k.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, e), n ? /* @__PURE__ */ k.createElement("pre", {
    style: i
  }, n) : null, o);
}
const pT = /* @__PURE__ */ k.createElement(hT, null);
class gT extends k.Component {
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
    return this.state.error !== void 0 ? /* @__PURE__ */ k.createElement(Ia.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ k.createElement(pw.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function mT(t) {
  let {
    routeContext: e,
    match: n,
    children: r
  } = t, i = k.useContext(sT);
  return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id), /* @__PURE__ */ k.createElement(Ia.Provider, {
    value: e
  }, r);
}
function vT(t, e, n, r) {
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
    let d, g = !1, p = null, y = null;
    n && (d = s && f.route.id ? s[f.route.id] : void 0, p = f.route.errorElement || pT, a && (u < 0 && h === 0 ? (kT("route-fallback", !1), g = !0, y = null) : u === h && (g = !0, y = f.route.hydrateFallbackElement || null)));
    let v = e.concat(l.slice(0, h + 1)), m = () => {
      let _;
      return d ? _ = p : g ? _ = y : f.route.Component ? _ = /* @__PURE__ */ k.createElement(f.route.Component, null) : f.route.element ? _ = f.route.element : _ = c, /* @__PURE__ */ k.createElement(mT, {
        match: f,
        routeContext: {
          outlet: c,
          matches: v,
          isDataRoute: n != null
        },
        children: _
      });
    };
    return n && (f.route.ErrorBoundary || f.route.errorElement || h === 0) ? /* @__PURE__ */ k.createElement(gT, {
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
var ep = /* @__PURE__ */ function(t) {
  return t.UseBlocker = "useBlocker", t.UseLoaderData = "useLoaderData", t.UseActionData = "useActionData", t.UseRouteError = "useRouteError", t.UseNavigation = "useNavigation", t.UseRouteLoaderData = "useRouteLoaderData", t.UseMatches = "useMatches", t.UseRevalidator = "useRevalidator", t.UseNavigateStable = "useNavigate", t.UseRouteId = "useRouteId", t;
}(ep || {});
function yT(t) {
  let e = k.useContext(aT);
  return e || sn(!1), e;
}
function _T(t) {
  let e = k.useContext(Ia);
  return e || sn(!1), e;
}
function xT(t) {
  let e = _T(), n = e.matches[e.matches.length - 1];
  return n.route.id || sn(!1), n.route.id;
}
function wT() {
  var t;
  let e = k.useContext(pw), n = yT(ep.UseRouteError), r = xT(ep.UseRouteError);
  return e !== void 0 ? e : (t = n.errors) == null ? void 0 : t[r];
}
const x1 = {};
function kT(t, e, n) {
  !e && !x1[t] && (x1[t] = !0);
}
function vs(t) {
  sn(!1);
}
function ST(t) {
  let {
    basename: e = "/",
    children: n = null,
    location: r,
    navigationType: i = yi.Pop,
    navigator: o,
    static: l = !1,
    future: s
  } = t;
  F0() && sn(!1);
  let a = e.replace(/^\/*/, "/"), u = k.useMemo(() => ({
    basename: a,
    navigator: o,
    static: l,
    future: Ic({
      v7_relativeSplatPath: !1
    }, s)
  }), [a, s, o, l]);
  typeof r == "string" && (r = df(r));
  let {
    pathname: c = "/",
    search: f = "",
    hash: h = "",
    state: d = null,
    key: g = "default"
  } = r, p = k.useMemo(() => {
    let y = fw(c, a);
    return y == null ? null : {
      location: {
        pathname: y,
        search: f,
        hash: h,
        state: d,
        key: g
      },
      navigationType: i
    };
  }, [a, c, f, h, d, g, i]);
  return p == null ? null : /* @__PURE__ */ k.createElement(hw.Provider, {
    value: u
  }, /* @__PURE__ */ k.createElement(hf.Provider, {
    children: n,
    value: p
  }));
}
function CT(t) {
  let {
    children: e,
    location: n
  } = t;
  return fT(tp(e), n);
}
new Promise(() => {
});
function tp(t, e) {
  e === void 0 && (e = []);
  let n = [];
  return k.Children.forEach(t, (r, i) => {
    if (!/* @__PURE__ */ k.isValidElement(r))
      return;
    let o = [...e, i];
    if (r.type === k.Fragment) {
      n.push.apply(n, tp(r.props.children, o));
      return;
    }
    r.type !== vs && sn(!1), !r.props.index || !r.props.children || sn(!1);
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
    r.props.children && (l.children = tp(r.props.children, o)), n.push(l);
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
const ET = "startTransition", w1 = l2[ET];
function bT(t) {
  let {
    basename: e,
    children: n,
    future: r,
    window: i
  } = t, o = k.useRef();
  o.current == null && (o.current = Fb({
    window: i,
    v5Compat: !0
  }));
  let l = o.current, [s, a] = k.useState({
    action: l.action,
    location: l.location
  }), {
    v7_startTransition: u
  } = r || {}, c = k.useCallback((f) => {
    u && w1 ? w1(() => a(f)) : a(f);
  }, [a, u]);
  return k.useLayoutEffect(() => l.listen(c), [l, c]), /* @__PURE__ */ k.createElement(ST, {
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
const C1 = k.createContext(null), TT = (t) => {
  const e = k.useState(!1), n = k.useRef(null);
  var r = window.innerWidth;
  k.useEffect(() => {
    window.addEventListener("resize", () => {
      r == window.innerWidth || (r = window.innerWidth, window.location.reload());
    }), screen.availWidth < 500 || window.innerHeight < 500 ? e[1](!0) : e[1](!1);
  }, []);
  const i = k.useRef(null);
  return k.useContext(C1), /* @__PURE__ */ w.jsx(C1.Provider, { value: { viewent: i }, children: /* @__PURE__ */ w.jsxs("div", { className: "base", ref: n, style: { overflow: "hidden", padding: "0px", margin: "0px", textAlign: "center" }, children: [
    /* @__PURE__ */ w.jsx("div", { style: { width: "100%", height: e[0] ? "3em" : "9em" } }),
    /* @__PURE__ */ w.jsx(PT, { phonestate: e }),
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
}, PT = (t) => {
  const e = t.phonestate;
  var n = cT().id, r = null;
  n == "0" ? r = /* @__PURE__ */ w.jsx("div", { children: "記事ページを作ってみました。" }) : n == "1" ? r = /* @__PURE__ */ w.jsx(OT, { phonestate: e }) : r = /* @__PURE__ */ w.jsx("div", { children: "404ページ" });
  const i = X(() => ({
    from: { x: "linear-gradient(160deg,rgba(150,150,150,1) 0%, rgba(255,255,255,1) 50% , rgba(150,150,150,1) 100%)" },
    to: { x: "linear-gradient(160deg,rgba(150,150,150,1) 0%, rgba(235,235,235,1) 50%, rgba(150,150,150,1) 100%)" },
    config: { duration: 5e3 },
    loop: { reverse: !0 }
    //,loop:true
  }));
  return /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
    /* @__PURE__ */ w.jsx(K.div, { style: {
      width: "100vw",
      height: "100vh",
      background: i[0].x,
      position: "fixed",
      zIndex: -11,
      top: 0,
      left: 0
    } }),
    r
  ] });
}, OT = (t) => {
  const e = t.phonestate, n = {
    width: "100%",
    minHeight: "500px",
    backgroundColor: "rgba(1,1,1,0)",
    fontFamily: "'DotGothic16'",
    boxSizing: "border",
    paddingTop: "100px",
    paddingLeft: "10px",
    paddingRight: "10px",
    display: "inline-block",
    height: "100vh",
    fontSize: "1.20em"
  }, r = `
「依頼」ボタンを押して要望を書きましたら、コンタクト欄のメールアドレスに画像を送信してください。(ここはデモサイトなのでクライアントのjavascriptのみで動いており、ここで作成された画像は当方に保存されません。)
`, i = `
`, o = k.useState(100), l = k.useRef(null);
  return k.useEffect(() => {
    o[1](l.current.clientWidth);
  }, [e[0]]), /* @__PURE__ */ w.jsx("div", { ref: l, style: {
    position: "relative",
    display: "inline-block",
    backgroundColor: "white",
    width: e[0] ? "99vw" : "50vw",
    left: "0vw"
  }, children: /* @__PURE__ */ w.jsxs("div", { style: { ...n }, children: [
    /* @__PURE__ */ w.jsx(E1, { phonestate: e, widsize: o[0], text: r }),
    /* @__PURE__ */ w.jsx(E1, { phonestate: e, widsize: o[0], text: i })
  ] }) });
}, E1 = (t) => {
  const n = t.phonestate[0] ? 3 : 15, r = {
    padding: `${n}px`,
    boxSizing: "border-box",
    backgroundColor: "",
    textAlign: "left",
    width: `${t.widsize - n * 2}px`,
    whiteSpace: "normal"
  }, i = t.text.split(`
`);
  return /* @__PURE__ */ w.jsx(w.Fragment, { children: i.map((o, l, s) => /* @__PURE__ */ w.jsx("div", { style: { ...r }, children: /* @__PURE__ */ w.jsx("p", { style: {
    backgroundColor: "",
    display: "inline"
  }, children: o }) }, l)) });
};
var B0 = {}, U0 = {};
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
})(U0);
var re = {}, Bi = wr && wr.__extends || function() {
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
var on = U0, V0 = (
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
      return e === void 0 && (e = !1), W0(this, e);
    }, t;
  }()
);
re.Node = V0;
var pf = (
  /** @class */
  function(t) {
    Bi(e, t);
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
re.DataNode = pf;
var gw = (
  /** @class */
  function(t) {
    Bi(e, t);
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
  }(pf)
);
re.Text = gw;
var mw = (
  /** @class */
  function(t) {
    Bi(e, t);
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
  }(pf)
);
re.Comment = mw;
var vw = (
  /** @class */
  function(t) {
    Bi(e, t);
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
  }(pf)
);
re.ProcessingInstruction = vw;
var gf = (
  /** @class */
  function(t) {
    Bi(e, t);
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
re.NodeWithChildren = gf;
var yw = (
  /** @class */
  function(t) {
    Bi(e, t);
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
  }(gf)
);
re.CDATA = yw;
var _w = (
  /** @class */
  function(t) {
    Bi(e, t);
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
  }(gf)
);
re.Document = _w;
var xw = (
  /** @class */
  function(t) {
    Bi(e, t);
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
  }(gf)
);
re.Element = xw;
function ww(t) {
  return (0, on.isTag)(t);
}
re.isTag = ww;
function kw(t) {
  return t.type === on.ElementType.CDATA;
}
re.isCDATA = kw;
function Sw(t) {
  return t.type === on.ElementType.Text;
}
re.isText = Sw;
function Cw(t) {
  return t.type === on.ElementType.Comment;
}
re.isComment = Cw;
function Ew(t) {
  return t.type === on.ElementType.Directive;
}
re.isDirective = Ew;
function bw(t) {
  return t.type === on.ElementType.Root;
}
re.isDocument = bw;
function RT(t) {
  return Object.prototype.hasOwnProperty.call(t, "children");
}
re.hasChildren = RT;
function W0(t, e) {
  e === void 0 && (e = !1);
  var n;
  if (Sw(t))
    n = new gw(t.data);
  else if (Cw(t))
    n = new mw(t.data);
  else if (ww(t)) {
    var r = e ? vd(t.children) : [], i = new xw(t.name, Vs({}, t.attribs), r);
    r.forEach(function(a) {
      return a.parent = i;
    }), t.namespace != null && (i.namespace = t.namespace), t["x-attribsNamespace"] && (i["x-attribsNamespace"] = Vs({}, t["x-attribsNamespace"])), t["x-attribsPrefix"] && (i["x-attribsPrefix"] = Vs({}, t["x-attribsPrefix"])), n = i;
  } else if (kw(t)) {
    var r = e ? vd(t.children) : [], o = new yw(r);
    r.forEach(function(u) {
      return u.parent = o;
    }), n = o;
  } else if (bw(t)) {
    var r = e ? vd(t.children) : [], l = new _w(r);
    r.forEach(function(u) {
      return u.parent = l;
    }), t["x-mode"] && (l["x-mode"] = t["x-mode"]), n = l;
  } else if (Ew(t)) {
    var s = new vw(t.name, t.data);
    t["x-name"] != null && (s["x-name"] = t["x-name"], s["x-publicId"] = t["x-publicId"], s["x-systemId"] = t["x-systemId"]), n = s;
  } else
    throw new Error("Not implemented yet: ".concat(t.type));
  return n.startIndex = t.startIndex, n.endIndex = t.endIndex, t.sourceCodeLocation != null && (n.sourceCodeLocation = t.sourceCodeLocation), n;
}
re.cloneNode = W0;
function vd(t) {
  for (var e = t.map(function(r) {
    return W0(r, !0);
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
  var r = U0, i = re;
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
})(B0);
var b1 = "html", T1 = "head", xu = "body", MT = /<([a-zA-Z]+[0-9]?)/, P1 = /<head[^]*>/i, O1 = /<body[^]*>/i, zc = function() {
  throw new Error(
    "This browser does not support `document.implementation.createHTMLDocument`"
  );
}, np = function() {
  throw new Error(
    "This browser does not support `DOMParser.prototype.parseFromString`"
  );
}, R1 = typeof window == "object" && window.DOMParser;
if (typeof R1 == "function") {
  var NT = new R1(), AT = "text/html";
  np = function(t, e) {
    return e && (t = "<" + e + ">" + t + "</" + e + ">"), NT.parseFromString(t, AT);
  }, zc = np;
}
if (typeof document == "object" && document.implementation) {
  var wu = document.implementation.createHTMLDocument();
  zc = function(t, e) {
    if (e) {
      var n = wu.documentElement.querySelector(e);
      return n.innerHTML = t, wu;
    }
    return wu.documentElement.innerHTML = t, wu;
  };
}
var yd = typeof document == "object" ? document.createElement("template") : {}, rp;
yd.content && (rp = function(t) {
  return yd.innerHTML = t, yd.content.childNodes;
});
function IT(t) {
  var e, n = t.match(MT);
  n && n[1] && (e = n[1].toLowerCase());
  var r, i, o;
  switch (e) {
    case b1:
      return r = np(t), P1.test(t) || (i = r.querySelector(T1), i && i.parentNode.removeChild(i)), O1.test(t) || (i = r.querySelector(xu), i && i.parentNode.removeChild(i)), r.querySelectorAll(b1);
    case T1:
    case xu:
      return r = zc(t), o = r.querySelectorAll(e), O1.test(t) && P1.test(t) ? o[0].parentNode.childNodes : o;
    default:
      return rp ? rp(t) : (i = zc(t, xu).querySelector(xu), i.childNodes);
  }
}
var zT = IT, H0 = {}, Tw = {};
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
var mf = B0, $T = Tw, M1 = $T.CASE_SENSITIVE_TAG_NAMES, DT = mf.Comment, jT = mf.Element, LT = mf.ProcessingInstruction, FT = mf.Text, Pw = {}, _d;
for (var xd = 0, BT = M1.length; xd < BT; xd++)
  _d = M1[xd], Pw[_d.toLowerCase()] = _d;
function UT(t) {
  return Pw[t];
}
function Ow(t) {
  for (var e = {}, n, r = 0, i = t.length; r < i; r++)
    n = t[r], e[n.name] = n.value;
  return e;
}
function VT(t) {
  t = t.toLowerCase();
  var e = UT(t);
  return e || t;
}
function Rw(t, e, n) {
  e = e || null;
  for (var r = [], i, o = 0, l = t.length; o < l; o++) {
    var s = t[o], a;
    switch (s.nodeType) {
      case 1:
        i = VT(s.nodeName), a = new jT(i, Ow(s.attributes)), a.children = Rw(
          // template children are on content
          i === "template" ? s.content.childNodes : s.childNodes,
          a
        );
        break;
      case 3:
        a = new FT(s.nodeValue);
        break;
      case 8:
        a = new DT(s.nodeValue);
        break;
      default:
        continue;
    }
    var u = r[o - 1] || null;
    u && (u.next = a), a.parent = e, a.prev = u, a.next = null, r.push(a);
  }
  return n && (a = new LT(
    n.substring(0, n.indexOf(" ")).toLowerCase(),
    n
  ), a.next = r[0] || null, a.parent = e, r.unshift(a), r[1] && (r[1].prev = r[0])), r;
}
H0.formatAttributes = Ow;
H0.formatDOM = Rw;
var WT = zT, HT = H0, YT = HT.formatDOM, XT = /<(![a-zA-Z\s]+)>/;
function GT(t) {
  if (typeof t != "string")
    throw new TypeError("First argument must be a string");
  if (t === "")
    return [];
  var e = t.match(XT), n;
  return e && e[1] && (n = e[1]), YT(WT(t), null, n);
}
var QT = GT, Wn = {}, vf = {}, qT = 0;
vf.SAME = qT;
var KT = 1;
vf.CAMELCASE = KT;
vf.possibleStandardNames = {
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
function ZT(t, e) {
  return JT(t) || e3(t, e) || t3(t, e) || n3();
}
function JT(t) {
  if (Array.isArray(t))
    return t;
}
function e3(t, e) {
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
function t3(t, e) {
  if (t) {
    if (typeof t == "string")
      return N1(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set")
      return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return N1(t, e);
  }
}
function N1(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++)
    r[n] = t[n];
  return r;
}
function n3() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Mw = 0, Ui = 1, yf = 2, _f = 3, Y0 = 4, Nw = 5, Aw = 6;
function r3(t) {
  return yt.hasOwnProperty(t) ? yt[t] : null;
}
function Ut(t, e, n, r, i, o, l) {
  this.acceptsBooleans = e === yf || e === _f || e === Y0, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = t, this.type = e, this.sanitizeURL = o, this.removeEmptyString = l;
}
var yt = {}, i3 = [
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
i3.forEach(function(t) {
  yt[t] = new Ut(
    t,
    Mw,
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
  var e = ZT(t, 2), n = e[0], r = e[1];
  yt[n] = new Ut(
    n,
    Ui,
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
  yt[t] = new Ut(
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
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
  yt[t] = new Ut(
    t,
    yf,
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
  yt[t] = new Ut(
    t,
    _f,
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
  yt[t] = new Ut(
    t,
    _f,
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
  yt[t] = new Ut(
    t,
    Y0,
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
  yt[t] = new Ut(
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
  yt[t] = new Ut(
    t,
    Nw,
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
var X0 = /[\-\:]([a-z])/g, G0 = function(e) {
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
  var e = t.replace(X0, G0);
  yt[e] = new Ut(
    e,
    Ui,
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
  var e = t.replace(X0, G0);
  yt[e] = new Ut(
    e,
    Ui,
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
  var e = t.replace(X0, G0);
  yt[e] = new Ut(
    e,
    Ui,
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
  yt[t] = new Ut(
    t,
    Ui,
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
var o3 = "xlinkHref";
yt[o3] = new Ut(
  "xlinkHref",
  Ui,
  !1,
  // mustUseProperty
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  // sanitizeURL
  !1
);
["src", "href", "action", "formAction"].forEach(function(t) {
  yt[t] = new Ut(
    t,
    Ui,
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
var Q0 = vf, l3 = Q0.CAMELCASE, s3 = Q0.SAME, A1 = Q0.possibleStandardNames, a3 = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", u3 = a3 + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", c3 = RegExp.prototype.test.bind(
  // eslint-disable-next-line no-misleading-character-class
  new RegExp("^(data|aria)-[" + u3 + "]*$")
), f3 = Object.keys(A1).reduce(function(t, e) {
  var n = A1[e];
  return n === s3 ? t[e] = e : n === l3 ? t[e.toLowerCase()] = e : t[e] = n, t;
}, {});
Wn.BOOLEAN = _f;
Wn.BOOLEANISH_STRING = yf;
Wn.NUMERIC = Nw;
Wn.OVERLOADED_BOOLEAN = Y0;
Wn.POSITIVE_NUMERIC = Aw;
Wn.RESERVED = Mw;
Wn.STRING = Ui;
Wn.getPropertyInfo = r3;
Wn.isCustomAttribute = c3;
Wn.possibleStandardNames = f3;
var Iw = {}, q0 = { exports: {} }, I1 = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, d3 = /\n/g, h3 = /^\s*/, p3 = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, g3 = /^:\s*/, m3 = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, v3 = /^[;\s]*/, y3 = /^\s+|\s+$/g, _3 = `
`, z1 = "/", $1 = "*", oo = "", x3 = "comment", w3 = "declaration", k3 = function(t, e) {
  if (typeof t != "string")
    throw new TypeError("First argument must be a string");
  if (!t)
    return [];
  e = e || {};
  var n = 1, r = 1;
  function i(g) {
    var p = g.match(d3);
    p && (n += p.length);
    var y = g.lastIndexOf(_3);
    r = ~y ? g.length - y : r + g.length;
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
      var y = p[0];
      return i(y), t = t.slice(y.length), p;
    }
  }
  function u() {
    a(h3);
  }
  function c(g) {
    var p;
    for (g = g || []; p = f(); )
      p !== !1 && g.push(p);
    return g;
  }
  function f() {
    var g = o();
    if (!(z1 != t.charAt(0) || $1 != t.charAt(1))) {
      for (var p = 2; oo != t.charAt(p) && ($1 != t.charAt(p) || z1 != t.charAt(p + 1)); )
        ++p;
      if (p += 2, oo === t.charAt(p - 1))
        return s("End of comment missing");
      var y = t.slice(2, p - 2);
      return r += 2, i(y), t = t.slice(p), r += 2, g({
        type: x3,
        comment: y
      });
    }
  }
  function h() {
    var g = o(), p = a(p3);
    if (p) {
      if (f(), !a(g3))
        return s("property missing ':'");
      var y = a(m3), v = g({
        type: w3,
        property: D1(p[0].replace(I1, oo)),
        value: y ? D1(y[0].replace(I1, oo)) : oo
      });
      return a(v3), v;
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
function D1(t) {
  return t ? t.replace(y3, oo) : oo;
}
var S3 = k3;
function zw(t, e) {
  var n = null;
  if (!t || typeof t != "string")
    return n;
  for (var r, i = S3(t), o = typeof e == "function", l, s, a = 0, u = i.length; a < u; a++)
    r = i[a], l = r.property, s = r.value, o ? e(l, s, r) : s && (n || (n = {}), n[l] = s);
  return n;
}
q0.exports = zw;
q0.exports.default = zw;
var C3 = q0.exports, xf = {};
xf.__esModule = !0;
xf.camelCase = void 0;
var E3 = /^--[a-zA-Z0-9-]+$/, b3 = /-([a-z])/g, T3 = /^[^-]+$/, P3 = /^-(webkit|moz|ms|o|khtml)-/, O3 = /^-(ms)-/, R3 = function(t) {
  return !t || T3.test(t) || E3.test(t);
}, M3 = function(t, e) {
  return e.toUpperCase();
}, j1 = function(t, e) {
  return "".concat(e, "-");
}, N3 = function(t, e) {
  return e === void 0 && (e = {}), R3(t) ? t : (t = t.toLowerCase(), e.reactCompat ? t = t.replace(O3, j1) : t = t.replace(P3, j1), t.replace(b3, M3));
};
xf.camelCase = N3;
(function(t) {
  var e = wr && wr.__importDefault || function(o) {
    return o && o.__esModule ? o : { default: o };
  };
  t.__esModule = !0;
  var n = e(C3), r = xf;
  function i(o, l) {
    var s = {};
    return !o || typeof o != "string" || (0, n.default)(o, function(a, u) {
      a && u && (s[(0, r.camelCase)(a, l)] = u);
    }), s;
  }
  t.default = i;
})(Iw);
var A3 = k, I3 = Iw.default;
function z3(t, e) {
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
function $3(t, e) {
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
var D3 = { reactCompat: !0 };
function j3(t, e) {
  if (t != null)
    try {
      e.style = I3(t, D3);
    } catch {
      e.style = {};
    }
}
var L3 = A3.version.split(".")[0] >= 16, $w = /* @__PURE__ */ new Set([
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
function F3(t) {
  return !$w.has(t.name);
}
var Dw = {
  PRESERVE_CUSTOM_ATTRIBUTES: L3,
  invertObject: z3,
  isCustomComponent: $3,
  setStyleProp: j3,
  canTextBeChildOfNode: F3,
  elementsWithNoTextChildren: $w
}, ys = Wn, L1 = Dw, B3 = ["checked", "value"], U3 = ["input", "select", "textarea"], V3 = {
  reset: !0,
  submit: !0
}, jw = function(e, n) {
  e = e || {};
  var r, i, o, l, s, a = {}, u = e.type && V3[e.type];
  for (r in e) {
    if (o = e[r], ys.isCustomAttribute(r)) {
      a[r] = o;
      continue;
    }
    if (i = r.toLowerCase(), l = F1(i), l) {
      switch (s = ys.getPropertyInfo(l), B3.indexOf(l) !== -1 && U3.indexOf(n) !== -1 && !u && (l = F1("default" + i)), a[l] = o, s && s.type) {
        case ys.BOOLEAN:
          a[l] = !0;
          break;
        case ys.OVERLOADED_BOOLEAN:
          o === "" && (a[l] = !0);
          break;
      }
      continue;
    }
    L1.PRESERVE_CUSTOM_ATTRIBUTES && (a[r] = o);
  }
  return L1.setStyleProp(e.style, a), a;
};
function F1(t) {
  return ys.possibleStandardNames[t];
}
var W3 = k, H3 = jw, $c = Dw, Y3 = $c.setStyleProp, X3 = $c.canTextBeChildOfNode;
function Lw(t, e) {
  e = e || {};
  for (var n = e.library || W3, r = n.cloneElement, i = n.createElement, o = n.isValidElement, l = [], s, a, u = typeof e.replace == "function", c, f, h, d = e.trim, g = 0, p = t.length; g < p; g++) {
    if (s = t[g], u && (c = e.replace(s), o(c))) {
      p > 1 && (c = r(c, {
        key: c.key || g
      })), l.push(c);
      continue;
    }
    if (s.type === "text") {
      if (a = !s.data.trim().length, a && s.parent && !X3(s.parent) || d && a)
        continue;
      l.push(s.data);
      continue;
    }
    switch (f = s.attribs, G3(s) ? Y3(f.style, f) : f && (f = H3(f, s.name)), h = null, s.type) {
      case "script":
      case "style":
        s.children[0] && (f.dangerouslySetInnerHTML = {
          __html: s.children[0].data
        });
        break;
      case "tag":
        s.name === "textarea" && s.children[0] ? f.defaultValue = s.children[0].data : s.children && s.children.length && (h = Lw(s.children, e));
        break;
      default:
        continue;
    }
    p > 1 && (f.key = g), l.push(i(s.name, f, h));
  }
  return l.length === 1 ? l[0] : l;
}
function G3(t) {
  return $c.PRESERVE_CUSTOM_ATTRIBUTES && t.type === "tag" && $c.isCustomComponent(t.name, t.attribs);
}
var Q3 = Lw, wf = B0, ul = QT, q3 = jw, Fw = Q3;
ul = /* istanbul ignore next */
typeof ul.default == "function" ? ul.default : ul;
var K3 = { lowerCaseAttributeNames: !1 };
function Or(t, e) {
  if (typeof t != "string")
    throw new TypeError("First argument must be a string");
  return t === "" ? [] : (e = e || {}, Fw(
    ul(t, e.htmlparser2 || K3),
    e
  ));
}
Or.domToReact = Fw;
Or.htmlToDOM = ul;
Or.attributesToProps = q3;
Or.Comment = wf.Comment;
Or.Element = wf.Element;
Or.ProcessingInstruction = wf.ProcessingInstruction;
Or.Text = wf.Text;
var Z3 = Or;
Or.default = Or;
const $o = /* @__PURE__ */ U1(Z3);
$o.domToReact;
$o.htmlToDOM;
$o.attributesToProps;
$o.Comment;
$o.Element;
$o.ProcessingInstruction;
$o.Text;
k.createContext({
  val: { title: "タイトル", content: "コンテンツ" },
  setVal: (t) => {
  }
});
var J3 = document.getElementById("RomNav");
const e5 = wd.createRoot(J3);
var ri = "/skyopener.github.io";
e5.render(/* @__PURE__ */ w.jsx(bT, { basename: ri, children: /* @__PURE__ */ w.jsxs(CT, { children: [
  /* @__PURE__ */ w.jsx(
    vs,
    {
      path: "/",
      element: /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
        /* @__PURE__ */ w.jsx(_u, { basename: ri }),
        /* @__PURE__ */ w.jsx(Mb, { basename: ri, children: " " })
      ] })
    }
  ),
  /* @__PURE__ */ w.jsx(
    vs,
    {
      path: "/irai",
      element: /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
        /* @__PURE__ */ w.jsx(_u, { basename: ri }),
        /* @__PURE__ */ w.jsx(Um, { basename: ri, children: " " })
      ] })
    }
  ),
  /* @__PURE__ */ w.jsx(
    vs,
    {
      path: "/article/:id",
      element: /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
        /* @__PURE__ */ w.jsx(_u, { basename: ri }),
        /* @__PURE__ */ w.jsx(TT, { basename: ri })
      ] })
    }
  ),
  /* @__PURE__ */ w.jsx(
    vs,
    {
      path: "/*",
      element: /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
        /* @__PURE__ */ w.jsx(_u, { basename: "/skyopener.github.io" }),
        /* @__PURE__ */ w.jsx(Um, { basename: ri, children: " " })
      ] })
    }
  )
] }) }));
