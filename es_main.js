var F2 = Object.defineProperty;
var H2 = (t, e, n) => e in t ? F2(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var F = (t, e, n) => (H2(t, typeof e != "symbol" ? e + "" : e, n), n);
var tn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Pv(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Ov = { exports: {} }, Kc = {}, Mv = { exports: {} }, le = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pa = Symbol.for("react.element"), B2 = Symbol.for("react.portal"), W2 = Symbol.for("react.fragment"), V2 = Symbol.for("react.strict_mode"), U2 = Symbol.for("react.profiler"), Y2 = Symbol.for("react.provider"), X2 = Symbol.for("react.context"), G2 = Symbol.for("react.forward_ref"), Q2 = Symbol.for("react.suspense"), q2 = Symbol.for("react.memo"), K2 = Symbol.for("react.lazy"), Om = Symbol.iterator;
function Z2(t) {
  return t === null || typeof t != "object" ? null : (t = Om && t[Om] || t["@@iterator"], typeof t == "function" ? t : null);
}
var Rv = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Nv = Object.assign, Iv = {};
function Vl(t, e, n) {
  this.props = t, this.context = e, this.refs = Iv, this.updater = n || Rv;
}
Vl.prototype.isReactComponent = {};
Vl.prototype.setState = function(t, e) {
  if (typeof t != "object" && typeof t != "function" && t != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, t, e, "setState");
};
Vl.prototype.forceUpdate = function(t) {
  this.updater.enqueueForceUpdate(this, t, "forceUpdate");
};
function $v() {
}
$v.prototype = Vl.prototype;
function Ph(t, e, n) {
  this.props = t, this.context = e, this.refs = Iv, this.updater = n || Rv;
}
var Oh = Ph.prototype = new $v();
Oh.constructor = Ph;
Nv(Oh, Vl.prototype);
Oh.isPureReactComponent = !0;
var Mm = Array.isArray, Av = Object.prototype.hasOwnProperty, Mh = { current: null }, Dv = { key: !0, ref: !0, __self: !0, __source: !0 };
function zv(t, e, n) {
  var r, i = {}, o = null, l = null;
  if (e != null)
    for (r in e.ref !== void 0 && (l = e.ref), e.key !== void 0 && (o = "" + e.key), e)
      Av.call(e, r) && !Dv.hasOwnProperty(r) && (i[r] = e[r]);
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
  return { $$typeof: Pa, type: t, key: o, ref: l, props: i, _owner: Mh.current };
}
function J2(t, e) {
  return { $$typeof: Pa, type: t.type, key: e, ref: t.ref, props: t.props, _owner: t._owner };
}
function Rh(t) {
  return typeof t == "object" && t !== null && t.$$typeof === Pa;
}
function ek(t) {
  var e = { "=": "=0", ":": "=2" };
  return "$" + t.replace(/[=:]/g, function(n) {
    return e[n];
  });
}
var Rm = /\/+/g;
function Wf(t, e) {
  return typeof t == "object" && t !== null && t.key != null ? ek("" + t.key) : e.toString(36);
}
function Du(t, e, n, r, i) {
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
          case Pa:
          case B2:
            l = !0;
        }
    }
  if (l)
    return l = t, i = i(l), t = r === "" ? "." + Wf(l, 0) : r, Mm(i) ? (n = "", t != null && (n = t.replace(Rm, "$&/") + "/"), Du(i, e, n, "", function(u) {
      return u;
    })) : i != null && (Rh(i) && (i = J2(i, n + (!i.key || l && l.key === i.key ? "" : ("" + i.key).replace(Rm, "$&/") + "/") + t)), e.push(i)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", Mm(t))
    for (var s = 0; s < t.length; s++) {
      o = t[s];
      var a = r + Wf(o, s);
      l += Du(o, e, n, a, i);
    }
  else if (a = Z2(t), typeof a == "function")
    for (t = a.call(t), s = 0; !(o = t.next()).done; )
      o = o.value, a = r + Wf(o, s++), l += Du(o, e, n, a, i);
  else if (o === "object")
    throw e = String(t), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function Xa(t, e, n) {
  if (t == null)
    return t;
  var r = [], i = 0;
  return Du(t, r, "", "", function(o) {
    return e.call(n, o, i++);
  }), r;
}
function tk(t) {
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
var Vt = { current: null }, zu = { transition: null }, nk = { ReactCurrentDispatcher: Vt, ReactCurrentBatchConfig: zu, ReactCurrentOwner: Mh };
le.Children = { map: Xa, forEach: function(t, e, n) {
  Xa(t, function() {
    e.apply(this, arguments);
  }, n);
}, count: function(t) {
  var e = 0;
  return Xa(t, function() {
    e++;
  }), e;
}, toArray: function(t) {
  return Xa(t, function(e) {
    return e;
  }) || [];
}, only: function(t) {
  if (!Rh(t))
    throw Error("React.Children.only expected to receive a single React element child.");
  return t;
} };
le.Component = Vl;
le.Fragment = W2;
le.Profiler = U2;
le.PureComponent = Ph;
le.StrictMode = V2;
le.Suspense = Q2;
le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nk;
le.cloneElement = function(t, e, n) {
  if (t == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
  var r = Nv({}, t.props), i = t.key, o = t.ref, l = t._owner;
  if (e != null) {
    if (e.ref !== void 0 && (o = e.ref, l = Mh.current), e.key !== void 0 && (i = "" + e.key), t.type && t.type.defaultProps)
      var s = t.type.defaultProps;
    for (a in e)
      Av.call(e, a) && !Dv.hasOwnProperty(a) && (r[a] = e[a] === void 0 && s !== void 0 ? s[a] : e[a]);
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
  return { $$typeof: Pa, type: t.type, key: i, ref: o, props: r, _owner: l };
};
le.createContext = function(t) {
  return t = { $$typeof: X2, _currentValue: t, _currentValue2: t, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, t.Provider = { $$typeof: Y2, _context: t }, t.Consumer = t;
};
le.createElement = zv;
le.createFactory = function(t) {
  var e = zv.bind(null, t);
  return e.type = t, e;
};
le.createRef = function() {
  return { current: null };
};
le.forwardRef = function(t) {
  return { $$typeof: G2, render: t };
};
le.isValidElement = Rh;
le.lazy = function(t) {
  return { $$typeof: K2, _payload: { _status: -1, _result: t }, _init: tk };
};
le.memo = function(t, e) {
  return { $$typeof: q2, type: t, compare: e === void 0 ? null : e };
};
le.startTransition = function(t) {
  var e = zu.transition;
  zu.transition = {};
  try {
    t();
  } finally {
    zu.transition = e;
  }
};
le.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
le.useCallback = function(t, e) {
  return Vt.current.useCallback(t, e);
};
le.useContext = function(t) {
  return Vt.current.useContext(t);
};
le.useDebugValue = function() {
};
le.useDeferredValue = function(t) {
  return Vt.current.useDeferredValue(t);
};
le.useEffect = function(t, e) {
  return Vt.current.useEffect(t, e);
};
le.useId = function() {
  return Vt.current.useId();
};
le.useImperativeHandle = function(t, e, n) {
  return Vt.current.useImperativeHandle(t, e, n);
};
le.useInsertionEffect = function(t, e) {
  return Vt.current.useInsertionEffect(t, e);
};
le.useLayoutEffect = function(t, e) {
  return Vt.current.useLayoutEffect(t, e);
};
le.useMemo = function(t, e) {
  return Vt.current.useMemo(t, e);
};
le.useReducer = function(t, e, n) {
  return Vt.current.useReducer(t, e, n);
};
le.useRef = function(t) {
  return Vt.current.useRef(t);
};
le.useState = function(t) {
  return Vt.current.useState(t);
};
le.useSyncExternalStore = function(t, e, n) {
  return Vt.current.useSyncExternalStore(t, e, n);
};
le.useTransition = function() {
  return Vt.current.useTransition();
};
le.version = "18.2.0";
Mv.exports = le;
var T = Mv.exports;
const rk = /* @__PURE__ */ Pv(T);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ik = T, ok = Symbol.for("react.element"), lk = Symbol.for("react.fragment"), sk = Object.prototype.hasOwnProperty, ak = ik.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, uk = { key: !0, ref: !0, __self: !0, __source: !0 };
function Lv(t, e, n) {
  var r, i = {}, o = null, l = null;
  n !== void 0 && (o = "" + n), e.key !== void 0 && (o = "" + e.key), e.ref !== void 0 && (l = e.ref);
  for (r in e)
    sk.call(e, r) && !uk.hasOwnProperty(r) && (i[r] = e[r]);
  if (t && t.defaultProps)
    for (r in e = t.defaultProps, e)
      i[r] === void 0 && (i[r] = e[r]);
  return { $$typeof: ok, type: t, key: o, ref: l, props: i, _owner: ak.current };
}
Kc.Fragment = lk;
Kc.jsx = Lv;
Kc.jsxs = Lv;
Ov.exports = Kc;
var C = Ov.exports, Yd = {}, jv = { exports: {} }, Pn = {}, Fv = { exports: {} }, Hv = {};
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
  function e(R, D) {
    var x = R.length;
    R.push(D);
    e:
      for (; 0 < x; ) {
        var Y = x - 1 >>> 1, J = R[Y];
        if (0 < i(J, D))
          R[Y] = D, R[x] = J, x = Y;
        else
          break e;
      }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0)
      return null;
    var D = R[0], x = R.pop();
    if (x !== D) {
      R[0] = x;
      e:
        for (var Y = 0, J = R.length, lt = J >>> 1; Y < lt; ) {
          var fe = 2 * (Y + 1) - 1, de = R[fe], ye = fe + 1, ue = R[ye];
          if (0 > i(de, x))
            ye < J && 0 > i(ue, de) ? (R[Y] = ue, R[ye] = x, Y = ye) : (R[Y] = de, R[fe] = x, Y = fe);
          else if (ye < J && 0 > i(ue, x))
            R[Y] = ue, R[ye] = x, Y = ye;
          else
            break e;
        }
    }
    return D;
  }
  function i(R, D) {
    var x = R.sortIndex - D.sortIndex;
    return x !== 0 ? x : R.id - D.id;
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
  var a = [], u = [], c = 1, f = null, d = 3, p = !1, m = !1, h = !1, _ = typeof setTimeout == "function" ? setTimeout : null, v = typeof clearTimeout == "function" ? clearTimeout : null, g = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(R) {
    for (var D = n(u); D !== null; ) {
      if (D.callback === null)
        r(u);
      else if (D.startTime <= R)
        r(u), D.sortIndex = D.expirationTime, e(a, D);
      else
        break;
      D = n(u);
    }
  }
  function w(R) {
    if (h = !1, y(R), !m)
      if (n(a) !== null)
        m = !0, V(S);
      else {
        var D = n(u);
        D !== null && j(w, D.startTime - R);
      }
  }
  function S(R, D) {
    m = !1, h && (h = !1, v(b), b = -1), p = !0;
    var x = d;
    try {
      for (y(D), f = n(a); f !== null && (!(f.expirationTime > D) || R && !L()); ) {
        var Y = f.callback;
        if (typeof Y == "function") {
          f.callback = null, d = f.priorityLevel;
          var J = Y(f.expirationTime <= D);
          D = t.unstable_now(), typeof J == "function" ? f.callback = J : f === n(a) && r(a), y(D);
        } else
          r(a);
        f = n(a);
      }
      if (f !== null)
        var lt = !0;
      else {
        var fe = n(u);
        fe !== null && j(w, fe.startTime - D), lt = !1;
      }
      return lt;
    } finally {
      f = null, d = x, p = !1;
    }
  }
  var E = !1, k = null, b = -1, O = 5, P = -1;
  function L() {
    return !(t.unstable_now() - P < O);
  }
  function A() {
    if (k !== null) {
      var R = t.unstable_now();
      P = R;
      var D = !0;
      try {
        D = k(!0, R);
      } finally {
        D ? X() : (E = !1, k = null);
      }
    } else
      E = !1;
  }
  var X;
  if (typeof g == "function")
    X = function() {
      g(A);
    };
  else if (typeof MessageChannel < "u") {
    var N = new MessageChannel(), z = N.port2;
    N.port1.onmessage = A, X = function() {
      z.postMessage(null);
    };
  } else
    X = function() {
      _(A, 0);
    };
  function V(R) {
    k = R, E || (E = !0, X());
  }
  function j(R, D) {
    b = _(function() {
      R(t.unstable_now());
    }, D);
  }
  t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(R) {
    R.callback = null;
  }, t.unstable_continueExecution = function() {
    m || p || (m = !0, V(S));
  }, t.unstable_forceFrameRate = function(R) {
    0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : O = 0 < R ? Math.floor(1e3 / R) : 5;
  }, t.unstable_getCurrentPriorityLevel = function() {
    return d;
  }, t.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, t.unstable_next = function(R) {
    switch (d) {
      case 1:
      case 2:
      case 3:
        var D = 3;
        break;
      default:
        D = d;
    }
    var x = d;
    d = D;
    try {
      return R();
    } finally {
      d = x;
    }
  }, t.unstable_pauseExecution = function() {
  }, t.unstable_requestPaint = function() {
  }, t.unstable_runWithPriority = function(R, D) {
    switch (R) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        R = 3;
    }
    var x = d;
    d = R;
    try {
      return D();
    } finally {
      d = x;
    }
  }, t.unstable_scheduleCallback = function(R, D, x) {
    var Y = t.unstable_now();
    switch (typeof x == "object" && x !== null ? (x = x.delay, x = typeof x == "number" && 0 < x ? Y + x : Y) : x = Y, R) {
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
    return J = x + J, R = { id: c++, callback: D, priorityLevel: R, startTime: x, expirationTime: J, sortIndex: -1 }, x > Y ? (R.sortIndex = x, e(u, R), n(a) === null && R === n(u) && (h ? (v(b), b = -1) : h = !0, j(w, x - Y))) : (R.sortIndex = J, e(a, R), m || p || (m = !0, V(S))), R;
  }, t.unstable_shouldYield = L, t.unstable_wrapCallback = function(R) {
    var D = d;
    return function() {
      var x = d;
      d = D;
      try {
        return R.apply(this, arguments);
      } finally {
        d = x;
      }
    };
  };
})(Hv);
Fv.exports = Hv;
var ck = Fv.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bv = T, Cn = ck;
function $(t) {
  for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1; n < arguments.length; n++)
    e += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Wv = /* @__PURE__ */ new Set(), Qs = {};
function jo(t, e) {
  Ml(t, e), Ml(t + "Capture", e);
}
function Ml(t, e) {
  for (Qs[t] = e, t = 0; t < e.length; t++)
    Wv.add(e[t]);
}
var qr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Xd = Object.prototype.hasOwnProperty, fk = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Nm = {}, Im = {};
function dk(t) {
  return Xd.call(Im, t) ? !0 : Xd.call(Nm, t) ? !1 : fk.test(t) ? Im[t] = !0 : (Nm[t] = !0, !1);
}
function pk(t, e, n, r) {
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
function hk(t, e, n, r) {
  if (e === null || typeof e > "u" || pk(t, e, n, r))
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
function Ut(t, e, n, r, i, o, l) {
  this.acceptsBooleans = e === 2 || e === 3 || e === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = t, this.type = e, this.sanitizeURL = o, this.removeEmptyString = l;
}
var xt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
  xt[t] = new Ut(t, 0, !1, t, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
  var e = t[0];
  xt[e] = new Ut(e, 1, !1, t[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
  xt[t] = new Ut(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
  xt[t] = new Ut(t, 2, !1, t, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
  xt[t] = new Ut(t, 3, !1, t.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(t) {
  xt[t] = new Ut(t, 3, !0, t, null, !1, !1);
});
["capture", "download"].forEach(function(t) {
  xt[t] = new Ut(t, 4, !1, t, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(t) {
  xt[t] = new Ut(t, 6, !1, t, null, !1, !1);
});
["rowSpan", "start"].forEach(function(t) {
  xt[t] = new Ut(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var Nh = /[\-:]([a-z])/g;
function Ih(t) {
  return t[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
  var e = t.replace(
    Nh,
    Ih
  );
  xt[e] = new Ut(e, 1, !1, t, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
  var e = t.replace(Nh, Ih);
  xt[e] = new Ut(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
  var e = t.replace(Nh, Ih);
  xt[e] = new Ut(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(t) {
  xt[t] = new Ut(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
xt.xlinkHref = new Ut("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(t) {
  xt[t] = new Ut(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function $h(t, e, n, r) {
  var i = xt.hasOwnProperty(e) ? xt[e] : null;
  (i !== null ? i.type !== 0 : r || !(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (hk(e, n, i, r) && (n = null), r || i === null ? dk(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n)) : i.mustUseProperty ? t[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (e = i.attributeName, r = i.attributeNamespace, n === null ? t.removeAttribute(e) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))));
}
var ni = Bv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ga = Symbol.for("react.element"), Jo = Symbol.for("react.portal"), el = Symbol.for("react.fragment"), Ah = Symbol.for("react.strict_mode"), Gd = Symbol.for("react.profiler"), Vv = Symbol.for("react.provider"), Uv = Symbol.for("react.context"), Dh = Symbol.for("react.forward_ref"), Qd = Symbol.for("react.suspense"), qd = Symbol.for("react.suspense_list"), zh = Symbol.for("react.memo"), fi = Symbol.for("react.lazy"), Yv = Symbol.for("react.offscreen"), $m = Symbol.iterator;
function Jl(t) {
  return t === null || typeof t != "object" ? null : (t = $m && t[$m] || t["@@iterator"], typeof t == "function" ? t : null);
}
var je = Object.assign, Vf;
function ps(t) {
  if (Vf === void 0)
    try {
      throw Error();
    } catch (n) {
      var e = n.stack.trim().match(/\n( *(at )?)/);
      Vf = e && e[1] || "";
    }
  return `
` + Vf + t;
}
var Uf = !1;
function Yf(t, e) {
  if (!t || Uf)
    return "";
  Uf = !0;
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
    Uf = !1, Error.prepareStackTrace = n;
  }
  return (t = t ? t.displayName || t.name : "") ? ps(t) : "";
}
function mk(t) {
  switch (t.tag) {
    case 5:
      return ps(t.type);
    case 16:
      return ps("Lazy");
    case 13:
      return ps("Suspense");
    case 19:
      return ps("SuspenseList");
    case 0:
    case 2:
    case 15:
      return t = Yf(t.type, !1), t;
    case 11:
      return t = Yf(t.type.render, !1), t;
    case 1:
      return t = Yf(t.type, !0), t;
    default:
      return "";
  }
}
function Kd(t) {
  if (t == null)
    return null;
  if (typeof t == "function")
    return t.displayName || t.name || null;
  if (typeof t == "string")
    return t;
  switch (t) {
    case el:
      return "Fragment";
    case Jo:
      return "Portal";
    case Gd:
      return "Profiler";
    case Ah:
      return "StrictMode";
    case Qd:
      return "Suspense";
    case qd:
      return "SuspenseList";
  }
  if (typeof t == "object")
    switch (t.$$typeof) {
      case Uv:
        return (t.displayName || "Context") + ".Consumer";
      case Vv:
        return (t._context.displayName || "Context") + ".Provider";
      case Dh:
        var e = t.render;
        return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
      case zh:
        return e = t.displayName || null, e !== null ? e : Kd(t.type) || "Memo";
      case fi:
        e = t._payload, t = t._init;
        try {
          return Kd(t(e));
        } catch {
        }
    }
  return null;
}
function gk(t) {
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
      return Kd(e);
    case 8:
      return e === Ah ? "StrictMode" : "Mode";
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
function Di(t) {
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
function Xv(t) {
  var e = t.type;
  return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
}
function vk(t) {
  var e = Xv(t) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e), r = "" + t[e];
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
function Qa(t) {
  t._valueTracker || (t._valueTracker = vk(t));
}
function Gv(t) {
  if (!t)
    return !1;
  var e = t._valueTracker;
  if (!e)
    return !0;
  var n = e.getValue(), r = "";
  return t && (r = Xv(t) ? t.checked ? "true" : "false" : t.value), t = r, t !== n ? (e.setValue(t), !0) : !1;
}
function sc(t) {
  if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u")
    return null;
  try {
    return t.activeElement || t.body;
  } catch {
    return t.body;
  }
}
function Zd(t, e) {
  var n = e.checked;
  return je({}, e, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? t._wrapperState.initialChecked });
}
function Am(t, e) {
  var n = e.defaultValue == null ? "" : e.defaultValue, r = e.checked != null ? e.checked : e.defaultChecked;
  n = Di(e.value != null ? e.value : n), t._wrapperState = { initialChecked: r, initialValue: n, controlled: e.type === "checkbox" || e.type === "radio" ? e.checked != null : e.value != null };
}
function Qv(t, e) {
  e = e.checked, e != null && $h(t, "checked", e, !1);
}
function Jd(t, e) {
  Qv(t, e);
  var n = Di(e.value), r = e.type;
  if (n != null)
    r === "number" ? (n === 0 && t.value === "" || t.value != n) && (t.value = "" + n) : t.value !== "" + n && (t.value = "" + n);
  else if (r === "submit" || r === "reset") {
    t.removeAttribute("value");
    return;
  }
  e.hasOwnProperty("value") ? ep(t, e.type, n) : e.hasOwnProperty("defaultValue") && ep(t, e.type, Di(e.defaultValue)), e.checked == null && e.defaultChecked != null && (t.defaultChecked = !!e.defaultChecked);
}
function Dm(t, e, n) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var r = e.type;
    if (!(r !== "submit" && r !== "reset" || e.value !== void 0 && e.value !== null))
      return;
    e = "" + t._wrapperState.initialValue, n || e === t.value || (t.value = e), t.defaultValue = e;
  }
  n = t.name, n !== "" && (t.name = ""), t.defaultChecked = !!t._wrapperState.initialChecked, n !== "" && (t.name = n);
}
function ep(t, e, n) {
  (e !== "number" || sc(t.ownerDocument) !== t) && (n == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + n && (t.defaultValue = "" + n));
}
var hs = Array.isArray;
function gl(t, e, n, r) {
  if (t = t.options, e) {
    e = {};
    for (var i = 0; i < n.length; i++)
      e["$" + n[i]] = !0;
    for (n = 0; n < t.length; n++)
      i = e.hasOwnProperty("$" + t[n].value), t[n].selected !== i && (t[n].selected = i), i && r && (t[n].defaultSelected = !0);
  } else {
    for (n = "" + Di(n), e = null, i = 0; i < t.length; i++) {
      if (t[i].value === n) {
        t[i].selected = !0, r && (t[i].defaultSelected = !0);
        return;
      }
      e !== null || t[i].disabled || (e = t[i]);
    }
    e !== null && (e.selected = !0);
  }
}
function tp(t, e) {
  if (e.dangerouslySetInnerHTML != null)
    throw Error($(91));
  return je({}, e, { value: void 0, defaultValue: void 0, children: "" + t._wrapperState.initialValue });
}
function zm(t, e) {
  var n = e.value;
  if (n == null) {
    if (n = e.children, e = e.defaultValue, n != null) {
      if (e != null)
        throw Error($(92));
      if (hs(n)) {
        if (1 < n.length)
          throw Error($(93));
        n = n[0];
      }
      e = n;
    }
    e == null && (e = ""), n = e;
  }
  t._wrapperState = { initialValue: Di(n) };
}
function qv(t, e) {
  var n = Di(e.value), r = Di(e.defaultValue);
  n != null && (n = "" + n, n !== t.value && (t.value = n), e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)), r != null && (t.defaultValue = "" + r);
}
function Lm(t) {
  var e = t.textContent;
  e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e);
}
function Kv(t) {
  switch (t) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function np(t, e) {
  return t == null || t === "http://www.w3.org/1999/xhtml" ? Kv(e) : t === "http://www.w3.org/2000/svg" && e === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t;
}
var qa, Zv = function(t) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(e, n, r, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return t(e, n, r, i);
    });
  } : t;
}(function(t, e) {
  if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t)
    t.innerHTML = e;
  else {
    for (qa = qa || document.createElement("div"), qa.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>", e = qa.firstChild; t.firstChild; )
      t.removeChild(t.firstChild);
    for (; e.firstChild; )
      t.appendChild(e.firstChild);
  }
});
function qs(t, e) {
  if (e) {
    var n = t.firstChild;
    if (n && n === t.lastChild && n.nodeType === 3) {
      n.nodeValue = e;
      return;
    }
  }
  t.textContent = e;
}
var Es = {
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
}, yk = ["Webkit", "ms", "Moz", "O"];
Object.keys(Es).forEach(function(t) {
  yk.forEach(function(e) {
    e = e + t.charAt(0).toUpperCase() + t.substring(1), Es[e] = Es[t];
  });
});
function Jv(t, e, n) {
  return e == null || typeof e == "boolean" || e === "" ? "" : n || typeof e != "number" || e === 0 || Es.hasOwnProperty(t) && Es[t] ? ("" + e).trim() : e + "px";
}
function ey(t, e) {
  t = t.style;
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, i = Jv(n, e[n], r);
      n === "float" && (n = "cssFloat"), r ? t.setProperty(n, i) : t[n] = i;
    }
}
var _k = je({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function rp(t, e) {
  if (e) {
    if (_k[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
      throw Error($(137, t));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null)
        throw Error($(60));
      if (typeof e.dangerouslySetInnerHTML != "object" || !("__html" in e.dangerouslySetInnerHTML))
        throw Error($(61));
    }
    if (e.style != null && typeof e.style != "object")
      throw Error($(62));
  }
}
function ip(t, e) {
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
var op = null;
function Lh(t) {
  return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
}
var lp = null, vl = null, yl = null;
function jm(t) {
  if (t = Ra(t)) {
    if (typeof lp != "function")
      throw Error($(280));
    var e = t.stateNode;
    e && (e = nf(e), lp(t.stateNode, t.type, e));
  }
}
function ty(t) {
  vl ? yl ? yl.push(t) : yl = [t] : vl = t;
}
function ny() {
  if (vl) {
    var t = vl, e = yl;
    if (yl = vl = null, jm(t), e)
      for (t = 0; t < e.length; t++)
        jm(e[t]);
  }
}
function ry(t, e) {
  return t(e);
}
function iy() {
}
var Xf = !1;
function oy(t, e, n) {
  if (Xf)
    return t(e, n);
  Xf = !0;
  try {
    return ry(t, e, n);
  } finally {
    Xf = !1, (vl !== null || yl !== null) && (iy(), ny());
  }
}
function Ks(t, e) {
  var n = t.stateNode;
  if (n === null)
    return null;
  var r = nf(n);
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
    throw Error($(231, e, typeof n));
  return n;
}
var sp = !1;
if (qr)
  try {
    var es = {};
    Object.defineProperty(es, "passive", { get: function() {
      sp = !0;
    } }), window.addEventListener("test", es, es), window.removeEventListener("test", es, es);
  } catch {
    sp = !1;
  }
function wk(t, e, n, r, i, o, l, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Ts = !1, ac = null, uc = !1, ap = null, xk = { onError: function(t) {
  Ts = !0, ac = t;
} };
function kk(t, e, n, r, i, o, l, s, a) {
  Ts = !1, ac = null, wk.apply(xk, arguments);
}
function Sk(t, e, n, r, i, o, l, s, a) {
  if (kk.apply(this, arguments), Ts) {
    if (Ts) {
      var u = ac;
      Ts = !1, ac = null;
    } else
      throw Error($(198));
    uc || (uc = !0, ap = u);
  }
}
function Fo(t) {
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
function ly(t) {
  if (t.tag === 13) {
    var e = t.memoizedState;
    if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null)
      return e.dehydrated;
  }
  return null;
}
function Fm(t) {
  if (Fo(t) !== t)
    throw Error($(188));
}
function Ek(t) {
  var e = t.alternate;
  if (!e) {
    if (e = Fo(t), e === null)
      throw Error($(188));
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
          return Fm(i), t;
        if (o === r)
          return Fm(i), e;
        o = o.sibling;
      }
      throw Error($(188));
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
          throw Error($(189));
      }
    }
    if (n.alternate !== r)
      throw Error($(190));
  }
  if (n.tag !== 3)
    throw Error($(188));
  return n.stateNode.current === n ? t : e;
}
function sy(t) {
  return t = Ek(t), t !== null ? ay(t) : null;
}
function ay(t) {
  if (t.tag === 5 || t.tag === 6)
    return t;
  for (t = t.child; t !== null; ) {
    var e = ay(t);
    if (e !== null)
      return e;
    t = t.sibling;
  }
  return null;
}
var uy = Cn.unstable_scheduleCallback, Hm = Cn.unstable_cancelCallback, Tk = Cn.unstable_shouldYield, Ck = Cn.unstable_requestPaint, Ge = Cn.unstable_now, bk = Cn.unstable_getCurrentPriorityLevel, jh = Cn.unstable_ImmediatePriority, cy = Cn.unstable_UserBlockingPriority, cc = Cn.unstable_NormalPriority, Pk = Cn.unstable_LowPriority, fy = Cn.unstable_IdlePriority, Zc = null, br = null;
function Ok(t) {
  if (br && typeof br.onCommitFiberRoot == "function")
    try {
      br.onCommitFiberRoot(Zc, t, void 0, (t.current.flags & 128) === 128);
    } catch {
    }
}
var ur = Math.clz32 ? Math.clz32 : Nk, Mk = Math.log, Rk = Math.LN2;
function Nk(t) {
  return t >>>= 0, t === 0 ? 32 : 31 - (Mk(t) / Rk | 0) | 0;
}
var Ka = 64, Za = 4194304;
function ms(t) {
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
    var s = l & ~i;
    s !== 0 ? r = ms(s) : (o &= l, o !== 0 && (r = ms(o)));
  } else
    l = n & ~i, l !== 0 ? r = ms(l) : o !== 0 && (r = ms(o));
  if (r === 0)
    return 0;
  if (e !== 0 && e !== r && !(e & i) && (i = r & -r, o = e & -e, i >= o || i === 16 && (o & 4194240) !== 0))
    return e;
  if (r & 4 && (r |= n & 16), e = t.entangledLanes, e !== 0)
    for (t = t.entanglements, e &= r; 0 < e; )
      n = 31 - ur(e), i = 1 << n, r |= t[n], e &= ~i;
  return r;
}
function Ik(t, e) {
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
function $k(t, e) {
  for (var n = t.suspendedLanes, r = t.pingedLanes, i = t.expirationTimes, o = t.pendingLanes; 0 < o; ) {
    var l = 31 - ur(o), s = 1 << l, a = i[l];
    a === -1 ? (!(s & n) || s & r) && (i[l] = Ik(s, e)) : a <= e && (t.expiredLanes |= s), o &= ~s;
  }
}
function up(t) {
  return t = t.pendingLanes & -1073741825, t !== 0 ? t : t & 1073741824 ? 1073741824 : 0;
}
function dy() {
  var t = Ka;
  return Ka <<= 1, !(Ka & 4194240) && (Ka = 64), t;
}
function Gf(t) {
  for (var e = [], n = 0; 31 > n; n++)
    e.push(t);
  return e;
}
function Oa(t, e, n) {
  t.pendingLanes |= e, e !== 536870912 && (t.suspendedLanes = 0, t.pingedLanes = 0), t = t.eventTimes, e = 31 - ur(e), t[e] = n;
}
function Ak(t, e) {
  var n = t.pendingLanes & ~e;
  t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.expiredLanes &= e, t.mutableReadLanes &= e, t.entangledLanes &= e, e = t.entanglements;
  var r = t.eventTimes;
  for (t = t.expirationTimes; 0 < n; ) {
    var i = 31 - ur(n), o = 1 << i;
    e[i] = 0, r[i] = -1, t[i] = -1, n &= ~o;
  }
}
function Fh(t, e) {
  var n = t.entangledLanes |= e;
  for (t = t.entanglements; n; ) {
    var r = 31 - ur(n), i = 1 << r;
    i & e | t[r] & e && (t[r] |= e), n &= ~i;
  }
}
var _e = 0;
function py(t) {
  return t &= -t, 1 < t ? 4 < t ? t & 268435455 ? 16 : 536870912 : 4 : 1;
}
var hy, Hh, my, gy, vy, cp = !1, Ja = [], Ei = null, Ti = null, Ci = null, Zs = /* @__PURE__ */ new Map(), Js = /* @__PURE__ */ new Map(), pi = [], Dk = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Bm(t, e) {
  switch (t) {
    case "focusin":
    case "focusout":
      Ei = null;
      break;
    case "dragenter":
    case "dragleave":
      Ti = null;
      break;
    case "mouseover":
    case "mouseout":
      Ci = null;
      break;
    case "pointerover":
    case "pointerout":
      Zs.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Js.delete(e.pointerId);
  }
}
function ts(t, e, n, r, i, o) {
  return t === null || t.nativeEvent !== o ? (t = { blockedOn: e, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }, e !== null && (e = Ra(e), e !== null && Hh(e)), t) : (t.eventSystemFlags |= r, e = t.targetContainers, i !== null && e.indexOf(i) === -1 && e.push(i), t);
}
function zk(t, e, n, r, i) {
  switch (e) {
    case "focusin":
      return Ei = ts(Ei, t, e, n, r, i), !0;
    case "dragenter":
      return Ti = ts(Ti, t, e, n, r, i), !0;
    case "mouseover":
      return Ci = ts(Ci, t, e, n, r, i), !0;
    case "pointerover":
      var o = i.pointerId;
      return Zs.set(o, ts(Zs.get(o) || null, t, e, n, r, i)), !0;
    case "gotpointercapture":
      return o = i.pointerId, Js.set(o, ts(Js.get(o) || null, t, e, n, r, i)), !0;
  }
  return !1;
}
function yy(t) {
  var e = po(t.target);
  if (e !== null) {
    var n = Fo(e);
    if (n !== null) {
      if (e = n.tag, e === 13) {
        if (e = ly(n), e !== null) {
          t.blockedOn = e, vy(t.priority, function() {
            my(n);
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
function Lu(t) {
  if (t.blockedOn !== null)
    return !1;
  for (var e = t.targetContainers; 0 < e.length; ) {
    var n = fp(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
    if (n === null) {
      n = t.nativeEvent;
      var r = new n.constructor(n.type, n);
      op = r, n.target.dispatchEvent(r), op = null;
    } else
      return e = Ra(n), e !== null && Hh(e), t.blockedOn = n, !1;
    e.shift();
  }
  return !0;
}
function Wm(t, e, n) {
  Lu(t) && n.delete(e);
}
function Lk() {
  cp = !1, Ei !== null && Lu(Ei) && (Ei = null), Ti !== null && Lu(Ti) && (Ti = null), Ci !== null && Lu(Ci) && (Ci = null), Zs.forEach(Wm), Js.forEach(Wm);
}
function ns(t, e) {
  t.blockedOn === e && (t.blockedOn = null, cp || (cp = !0, Cn.unstable_scheduleCallback(Cn.unstable_NormalPriority, Lk)));
}
function ea(t) {
  function e(i) {
    return ns(i, t);
  }
  if (0 < Ja.length) {
    ns(Ja[0], t);
    for (var n = 1; n < Ja.length; n++) {
      var r = Ja[n];
      r.blockedOn === t && (r.blockedOn = null);
    }
  }
  for (Ei !== null && ns(Ei, t), Ti !== null && ns(Ti, t), Ci !== null && ns(Ci, t), Zs.forEach(e), Js.forEach(e), n = 0; n < pi.length; n++)
    r = pi[n], r.blockedOn === t && (r.blockedOn = null);
  for (; 0 < pi.length && (n = pi[0], n.blockedOn === null); )
    yy(n), n.blockedOn === null && pi.shift();
}
var _l = ni.ReactCurrentBatchConfig, dc = !0;
function jk(t, e, n, r) {
  var i = _e, o = _l.transition;
  _l.transition = null;
  try {
    _e = 1, Bh(t, e, n, r);
  } finally {
    _e = i, _l.transition = o;
  }
}
function Fk(t, e, n, r) {
  var i = _e, o = _l.transition;
  _l.transition = null;
  try {
    _e = 4, Bh(t, e, n, r);
  } finally {
    _e = i, _l.transition = o;
  }
}
function Bh(t, e, n, r) {
  if (dc) {
    var i = fp(t, e, n, r);
    if (i === null)
      id(t, e, r, pc, n), Bm(t, r);
    else if (zk(i, t, e, n, r))
      r.stopPropagation();
    else if (Bm(t, r), e & 4 && -1 < Dk.indexOf(t)) {
      for (; i !== null; ) {
        var o = Ra(i);
        if (o !== null && hy(o), o = fp(t, e, n, r), o === null && id(t, e, r, pc, n), o === i)
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else
      id(t, e, r, null, n);
  }
}
var pc = null;
function fp(t, e, n, r) {
  if (pc = null, t = Lh(r), t = po(t), t !== null)
    if (e = Fo(t), e === null)
      t = null;
    else if (n = e.tag, n === 13) {
      if (t = ly(e), t !== null)
        return t;
      t = null;
    } else if (n === 3) {
      if (e.stateNode.current.memoizedState.isDehydrated)
        return e.tag === 3 ? e.stateNode.containerInfo : null;
      t = null;
    } else
      e !== t && (t = null);
  return pc = t, null;
}
function _y(t) {
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
      switch (bk()) {
        case jh:
          return 1;
        case cy:
          return 4;
        case cc:
        case Pk:
          return 16;
        case fy:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var mi = null, Wh = null, ju = null;
function wy() {
  if (ju)
    return ju;
  var t, e = Wh, n = e.length, r, i = "value" in mi ? mi.value : mi.textContent, o = i.length;
  for (t = 0; t < n && e[t] === i[t]; t++)
    ;
  var l = n - t;
  for (r = 1; r <= l && e[n - r] === i[o - r]; r++)
    ;
  return ju = i.slice(t, 1 < r ? 1 - r : void 0);
}
function Fu(t) {
  var e = t.keyCode;
  return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
}
function eu() {
  return !0;
}
function Vm() {
  return !1;
}
function On(t) {
  function e(n, r, i, o, l) {
    this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = l, this.currentTarget = null;
    for (var s in t)
      t.hasOwnProperty(s) && (n = t[s], this[s] = n ? n(o) : o[s]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? eu : Vm, this.isPropagationStopped = Vm, this;
  }
  return je(e.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = eu);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = eu);
  }, persist: function() {
  }, isPersistent: eu }), e;
}
var Ul = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(t) {
  return t.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Vh = On(Ul), Ma = je({}, Ul, { view: 0, detail: 0 }), Hk = On(Ma), Qf, qf, rs, Jc = je({}, Ma, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Uh, button: 0, buttons: 0, relatedTarget: function(t) {
  return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
}, movementX: function(t) {
  return "movementX" in t ? t.movementX : (t !== rs && (rs && t.type === "mousemove" ? (Qf = t.screenX - rs.screenX, qf = t.screenY - rs.screenY) : qf = Qf = 0, rs = t), Qf);
}, movementY: function(t) {
  return "movementY" in t ? t.movementY : qf;
} }), Um = On(Jc), Bk = je({}, Jc, { dataTransfer: 0 }), Wk = On(Bk), Vk = je({}, Ma, { relatedTarget: 0 }), Kf = On(Vk), Uk = je({}, Ul, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Yk = On(Uk), Xk = je({}, Ul, { clipboardData: function(t) {
  return "clipboardData" in t ? t.clipboardData : window.clipboardData;
} }), Gk = On(Xk), Qk = je({}, Ul, { data: 0 }), Ym = On(Qk), qk = {
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
}, Kk = {
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
}, Zk = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Jk(t) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(t) : (t = Zk[t]) ? !!e[t] : !1;
}
function Uh() {
  return Jk;
}
var eS = je({}, Ma, { key: function(t) {
  if (t.key) {
    var e = qk[t.key] || t.key;
    if (e !== "Unidentified")
      return e;
  }
  return t.type === "keypress" ? (t = Fu(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Kk[t.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Uh, charCode: function(t) {
  return t.type === "keypress" ? Fu(t) : 0;
}, keyCode: function(t) {
  return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
}, which: function(t) {
  return t.type === "keypress" ? Fu(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
} }), tS = On(eS), nS = je({}, Jc, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Xm = On(nS), rS = je({}, Ma, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Uh }), iS = On(rS), oS = je({}, Ul, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), lS = On(oS), sS = je({}, Jc, {
  deltaX: function(t) {
    return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
  },
  deltaY: function(t) {
    return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), aS = On(sS), uS = [9, 13, 27, 32], Yh = qr && "CompositionEvent" in window, Cs = null;
qr && "documentMode" in document && (Cs = document.documentMode);
var cS = qr && "TextEvent" in window && !Cs, xy = qr && (!Yh || Cs && 8 < Cs && 11 >= Cs), Gm = String.fromCharCode(32), Qm = !1;
function ky(t, e) {
  switch (t) {
    case "keyup":
      return uS.indexOf(e.keyCode) !== -1;
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
function Sy(t) {
  return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
}
var tl = !1;
function fS(t, e) {
  switch (t) {
    case "compositionend":
      return Sy(e);
    case "keypress":
      return e.which !== 32 ? null : (Qm = !0, Gm);
    case "textInput":
      return t = e.data, t === Gm && Qm ? null : t;
    default:
      return null;
  }
}
function dS(t, e) {
  if (tl)
    return t === "compositionend" || !Yh && ky(t, e) ? (t = wy(), ju = Wh = mi = null, tl = !1, t) : null;
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
      return xy && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var pS = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function qm(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e === "input" ? !!pS[t.type] : e === "textarea";
}
function Ey(t, e, n, r) {
  ty(r), e = hc(e, "onChange"), 0 < e.length && (n = new Vh("onChange", "change", null, n, r), t.push({ event: n, listeners: e }));
}
var bs = null, ta = null;
function hS(t) {
  Ay(t, 0);
}
function ef(t) {
  var e = il(t);
  if (Gv(e))
    return t;
}
function mS(t, e) {
  if (t === "change")
    return e;
}
var Ty = !1;
if (qr) {
  var Zf;
  if (qr) {
    var Jf = "oninput" in document;
    if (!Jf) {
      var Km = document.createElement("div");
      Km.setAttribute("oninput", "return;"), Jf = typeof Km.oninput == "function";
    }
    Zf = Jf;
  } else
    Zf = !1;
  Ty = Zf && (!document.documentMode || 9 < document.documentMode);
}
function Zm() {
  bs && (bs.detachEvent("onpropertychange", Cy), ta = bs = null);
}
function Cy(t) {
  if (t.propertyName === "value" && ef(ta)) {
    var e = [];
    Ey(e, ta, t, Lh(t)), oy(hS, e);
  }
}
function gS(t, e, n) {
  t === "focusin" ? (Zm(), bs = e, ta = n, bs.attachEvent("onpropertychange", Cy)) : t === "focusout" && Zm();
}
function vS(t) {
  if (t === "selectionchange" || t === "keyup" || t === "keydown")
    return ef(ta);
}
function yS(t, e) {
  if (t === "click")
    return ef(e);
}
function _S(t, e) {
  if (t === "input" || t === "change")
    return ef(e);
}
function wS(t, e) {
  return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
}
var dr = typeof Object.is == "function" ? Object.is : wS;
function na(t, e) {
  if (dr(t, e))
    return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null)
    return !1;
  var n = Object.keys(t), r = Object.keys(e);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Xd.call(e, i) || !dr(t[i], e[i]))
      return !1;
  }
  return !0;
}
function Jm(t) {
  for (; t && t.firstChild; )
    t = t.firstChild;
  return t;
}
function eg(t, e) {
  var n = Jm(t);
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
    n = Jm(n);
  }
}
function by(t, e) {
  return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? by(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
}
function Py() {
  for (var t = window, e = sc(); e instanceof t.HTMLIFrameElement; ) {
    try {
      var n = typeof e.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      t = e.contentWindow;
    else
      break;
    e = sc(t.document);
  }
  return e;
}
function Xh(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
}
function xS(t) {
  var e = Py(), n = t.focusedElem, r = t.selectionRange;
  if (e !== n && n && n.ownerDocument && by(n.ownerDocument.documentElement, n)) {
    if (r !== null && Xh(n)) {
      if (e = r.start, t = r.end, t === void 0 && (t = e), "selectionStart" in n)
        n.selectionStart = e, n.selectionEnd = Math.min(t, n.value.length);
      else if (t = (e = n.ownerDocument || document) && e.defaultView || window, t.getSelection) {
        t = t.getSelection();
        var i = n.textContent.length, o = Math.min(r.start, i);
        r = r.end === void 0 ? o : Math.min(r.end, i), !t.extend && o > r && (i = r, r = o, o = i), i = eg(n, o);
        var l = eg(
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
var kS = qr && "documentMode" in document && 11 >= document.documentMode, nl = null, dp = null, Ps = null, pp = !1;
function tg(t, e, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  pp || nl == null || nl !== sc(r) || (r = nl, "selectionStart" in r && Xh(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Ps && na(Ps, r) || (Ps = r, r = hc(dp, "onSelect"), 0 < r.length && (e = new Vh("onSelect", "select", null, e, n), t.push({ event: e, listeners: r }), e.target = nl)));
}
function tu(t, e) {
  var n = {};
  return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n;
}
var rl = { animationend: tu("Animation", "AnimationEnd"), animationiteration: tu("Animation", "AnimationIteration"), animationstart: tu("Animation", "AnimationStart"), transitionend: tu("Transition", "TransitionEnd") }, ed = {}, Oy = {};
qr && (Oy = document.createElement("div").style, "AnimationEvent" in window || (delete rl.animationend.animation, delete rl.animationiteration.animation, delete rl.animationstart.animation), "TransitionEvent" in window || delete rl.transitionend.transition);
function tf(t) {
  if (ed[t])
    return ed[t];
  if (!rl[t])
    return t;
  var e = rl[t], n;
  for (n in e)
    if (e.hasOwnProperty(n) && n in Oy)
      return ed[t] = e[n];
  return t;
}
var My = tf("animationend"), Ry = tf("animationiteration"), Ny = tf("animationstart"), Iy = tf("transitionend"), $y = /* @__PURE__ */ new Map(), ng = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Bi(t, e) {
  $y.set(t, e), jo(e, [t]);
}
for (var td = 0; td < ng.length; td++) {
  var nd = ng[td], SS = nd.toLowerCase(), ES = nd[0].toUpperCase() + nd.slice(1);
  Bi(SS, "on" + ES);
}
Bi(My, "onAnimationEnd");
Bi(Ry, "onAnimationIteration");
Bi(Ny, "onAnimationStart");
Bi("dblclick", "onDoubleClick");
Bi("focusin", "onFocus");
Bi("focusout", "onBlur");
Bi(Iy, "onTransitionEnd");
Ml("onMouseEnter", ["mouseout", "mouseover"]);
Ml("onMouseLeave", ["mouseout", "mouseover"]);
Ml("onPointerEnter", ["pointerout", "pointerover"]);
Ml("onPointerLeave", ["pointerout", "pointerover"]);
jo("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
jo("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
jo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
jo("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
jo("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
jo("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var gs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), TS = new Set("cancel close invalid load scroll toggle".split(" ").concat(gs));
function rg(t, e, n) {
  var r = t.type || "unknown-event";
  t.currentTarget = n, Sk(r, e, void 0, t), t.currentTarget = null;
}
function Ay(t, e) {
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
          rg(i, s, u), o = a;
        }
      else
        for (l = 0; l < r.length; l++) {
          if (s = r[l], a = s.instance, u = s.currentTarget, s = s.listener, a !== o && i.isPropagationStopped())
            break e;
          rg(i, s, u), o = a;
        }
    }
  }
  if (uc)
    throw t = ap, uc = !1, ap = null, t;
}
function Ee(t, e) {
  var n = e[yp];
  n === void 0 && (n = e[yp] = /* @__PURE__ */ new Set());
  var r = t + "__bubble";
  n.has(r) || (Dy(e, t, 2, !1), n.add(r));
}
function rd(t, e, n) {
  var r = 0;
  e && (r |= 4), Dy(n, t, r, e);
}
var nu = "_reactListening" + Math.random().toString(36).slice(2);
function ra(t) {
  if (!t[nu]) {
    t[nu] = !0, Wv.forEach(function(n) {
      n !== "selectionchange" && (TS.has(n) || rd(n, !1, t), rd(n, !0, t));
    });
    var e = t.nodeType === 9 ? t : t.ownerDocument;
    e === null || e[nu] || (e[nu] = !0, rd("selectionchange", !1, e));
  }
}
function Dy(t, e, n, r) {
  switch (_y(e)) {
    case 1:
      var i = jk;
      break;
    case 4:
      i = Fk;
      break;
    default:
      i = Bh;
  }
  n = i.bind(null, e, n, t), i = void 0, !sp || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (i = !0), r ? i !== void 0 ? t.addEventListener(e, n, { capture: !0, passive: i }) : t.addEventListener(e, n, !0) : i !== void 0 ? t.addEventListener(e, n, { passive: i }) : t.addEventListener(e, n, !1);
}
function id(t, e, n, r, i) {
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
            if (l = po(s), l === null)
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
  oy(function() {
    var u = o, c = Lh(n), f = [];
    e: {
      var d = $y.get(t);
      if (d !== void 0) {
        var p = Vh, m = t;
        switch (t) {
          case "keypress":
            if (Fu(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            p = tS;
            break;
          case "focusin":
            m = "focus", p = Kf;
            break;
          case "focusout":
            m = "blur", p = Kf;
            break;
          case "beforeblur":
          case "afterblur":
            p = Kf;
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
            p = Um;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = Wk;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = iS;
            break;
          case My:
          case Ry:
          case Ny:
            p = Yk;
            break;
          case Iy:
            p = lS;
            break;
          case "scroll":
            p = Hk;
            break;
          case "wheel":
            p = aS;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = Gk;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = Xm;
        }
        var h = (e & 4) !== 0, _ = !h && t === "scroll", v = h ? d !== null ? d + "Capture" : null : d;
        h = [];
        for (var g = u, y; g !== null; ) {
          y = g;
          var w = y.stateNode;
          if (y.tag === 5 && w !== null && (y = w, v !== null && (w = Ks(g, v), w != null && h.push(ia(g, w, y)))), _)
            break;
          g = g.return;
        }
        0 < h.length && (d = new p(d, m, null, n, c), f.push({ event: d, listeners: h }));
      }
    }
    if (!(e & 7)) {
      e: {
        if (d = t === "mouseover" || t === "pointerover", p = t === "mouseout" || t === "pointerout", d && n !== op && (m = n.relatedTarget || n.fromElement) && (po(m) || m[Kr]))
          break e;
        if ((p || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window, p ? (m = n.relatedTarget || n.toElement, p = u, m = m ? po(m) : null, m !== null && (_ = Fo(m), m !== _ || m.tag !== 5 && m.tag !== 6) && (m = null)) : (p = null, m = u), p !== m)) {
          if (h = Um, w = "onMouseLeave", v = "onMouseEnter", g = "mouse", (t === "pointerout" || t === "pointerover") && (h = Xm, w = "onPointerLeave", v = "onPointerEnter", g = "pointer"), _ = p == null ? d : il(p), y = m == null ? d : il(m), d = new h(w, g + "leave", p, n, c), d.target = _, d.relatedTarget = y, w = null, po(c) === u && (h = new h(v, g + "enter", m, n, c), h.target = y, h.relatedTarget = _, w = h), _ = w, p && m)
            t: {
              for (h = p, v = m, g = 0, y = h; y; y = Yo(y))
                g++;
              for (y = 0, w = v; w; w = Yo(w))
                y++;
              for (; 0 < g - y; )
                h = Yo(h), g--;
              for (; 0 < y - g; )
                v = Yo(v), y--;
              for (; g--; ) {
                if (h === v || v !== null && h === v.alternate)
                  break t;
                h = Yo(h), v = Yo(v);
              }
              h = null;
            }
          else
            h = null;
          p !== null && ig(f, d, p, h, !1), m !== null && _ !== null && ig(f, _, m, h, !0);
        }
      }
      e: {
        if (d = u ? il(u) : window, p = d.nodeName && d.nodeName.toLowerCase(), p === "select" || p === "input" && d.type === "file")
          var S = mS;
        else if (qm(d))
          if (Ty)
            S = _S;
          else {
            S = vS;
            var E = gS;
          }
        else
          (p = d.nodeName) && p.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (S = yS);
        if (S && (S = S(t, u))) {
          Ey(f, S, n, c);
          break e;
        }
        E && E(t, d, u), t === "focusout" && (E = d._wrapperState) && E.controlled && d.type === "number" && ep(d, "number", d.value);
      }
      switch (E = u ? il(u) : window, t) {
        case "focusin":
          (qm(E) || E.contentEditable === "true") && (nl = E, dp = u, Ps = null);
          break;
        case "focusout":
          Ps = dp = nl = null;
          break;
        case "mousedown":
          pp = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          pp = !1, tg(f, n, c);
          break;
        case "selectionchange":
          if (kS)
            break;
        case "keydown":
        case "keyup":
          tg(f, n, c);
      }
      var k;
      if (Yh)
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
        tl ? ky(t, n) && (b = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
      b && (xy && n.locale !== "ko" && (tl || b !== "onCompositionStart" ? b === "onCompositionEnd" && tl && (k = wy()) : (mi = c, Wh = "value" in mi ? mi.value : mi.textContent, tl = !0)), E = hc(u, b), 0 < E.length && (b = new Ym(b, t, null, n, c), f.push({ event: b, listeners: E }), k ? b.data = k : (k = Sy(n), k !== null && (b.data = k)))), (k = cS ? fS(t, n) : dS(t, n)) && (u = hc(u, "onBeforeInput"), 0 < u.length && (c = new Ym("onBeforeInput", "beforeinput", null, n, c), f.push({ event: c, listeners: u }), c.data = k));
    }
    Ay(f, e);
  });
}
function ia(t, e, n) {
  return { instance: t, listener: e, currentTarget: n };
}
function hc(t, e) {
  for (var n = e + "Capture", r = []; t !== null; ) {
    var i = t, o = i.stateNode;
    i.tag === 5 && o !== null && (i = o, o = Ks(t, n), o != null && r.unshift(ia(t, o, i)), o = Ks(t, e), o != null && r.push(ia(t, o, i))), t = t.return;
  }
  return r;
}
function Yo(t) {
  if (t === null)
    return null;
  do
    t = t.return;
  while (t && t.tag !== 5);
  return t || null;
}
function ig(t, e, n, r, i) {
  for (var o = e._reactName, l = []; n !== null && n !== r; ) {
    var s = n, a = s.alternate, u = s.stateNode;
    if (a !== null && a === r)
      break;
    s.tag === 5 && u !== null && (s = u, i ? (a = Ks(n, o), a != null && l.unshift(ia(n, a, s))) : i || (a = Ks(n, o), a != null && l.push(ia(n, a, s)))), n = n.return;
  }
  l.length !== 0 && t.push({ event: e, listeners: l });
}
var CS = /\r\n?/g, bS = /\u0000|\uFFFD/g;
function og(t) {
  return (typeof t == "string" ? t : "" + t).replace(CS, `
`).replace(bS, "");
}
function ru(t, e, n) {
  if (e = og(e), og(t) !== e && n)
    throw Error($(425));
}
function mc() {
}
var hp = null, mp = null;
function gp(t, e) {
  return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
}
var vp = typeof setTimeout == "function" ? setTimeout : void 0, PS = typeof clearTimeout == "function" ? clearTimeout : void 0, lg = typeof Promise == "function" ? Promise : void 0, OS = typeof queueMicrotask == "function" ? queueMicrotask : typeof lg < "u" ? function(t) {
  return lg.resolve(null).then(t).catch(MS);
} : vp;
function MS(t) {
  setTimeout(function() {
    throw t;
  });
}
function od(t, e) {
  var n = e, r = 0;
  do {
    var i = n.nextSibling;
    if (t.removeChild(n), i && i.nodeType === 8)
      if (n = i.data, n === "/$") {
        if (r === 0) {
          t.removeChild(i), ea(e);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = i;
  } while (n);
  ea(e);
}
function bi(t) {
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
function sg(t) {
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
var Yl = Math.random().toString(36).slice(2), Er = "__reactFiber$" + Yl, oa = "__reactProps$" + Yl, Kr = "__reactContainer$" + Yl, yp = "__reactEvents$" + Yl, RS = "__reactListeners$" + Yl, NS = "__reactHandles$" + Yl;
function po(t) {
  var e = t[Er];
  if (e)
    return e;
  for (var n = t.parentNode; n; ) {
    if (e = n[Kr] || n[Er]) {
      if (n = e.alternate, e.child !== null || n !== null && n.child !== null)
        for (t = sg(t); t !== null; ) {
          if (n = t[Er])
            return n;
          t = sg(t);
        }
      return e;
    }
    t = n, n = t.parentNode;
  }
  return null;
}
function Ra(t) {
  return t = t[Er] || t[Kr], !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t;
}
function il(t) {
  if (t.tag === 5 || t.tag === 6)
    return t.stateNode;
  throw Error($(33));
}
function nf(t) {
  return t[oa] || null;
}
var _p = [], ol = -1;
function Wi(t) {
  return { current: t };
}
function Ce(t) {
  0 > ol || (t.current = _p[ol], _p[ol] = null, ol--);
}
function Se(t, e) {
  ol++, _p[ol] = t.current, t.current = e;
}
var zi = {}, Nt = Wi(zi), rn = Wi(!1), Po = zi;
function Rl(t, e) {
  var n = t.type.contextTypes;
  if (!n)
    return zi;
  var r = t.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {}, o;
  for (o in n)
    i[o] = e[o];
  return r && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = e, t.__reactInternalMemoizedMaskedChildContext = i), i;
}
function on(t) {
  return t = t.childContextTypes, t != null;
}
function gc() {
  Ce(rn), Ce(Nt);
}
function ag(t, e, n) {
  if (Nt.current !== zi)
    throw Error($(168));
  Se(Nt, e), Se(rn, n);
}
function zy(t, e, n) {
  var r = t.stateNode;
  if (e = e.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var i in r)
    if (!(i in e))
      throw Error($(108, gk(t) || "Unknown", i));
  return je({}, n, r);
}
function vc(t) {
  return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || zi, Po = Nt.current, Se(Nt, t), Se(rn, rn.current), !0;
}
function ug(t, e, n) {
  var r = t.stateNode;
  if (!r)
    throw Error($(169));
  n ? (t = zy(t, e, Po), r.__reactInternalMemoizedMergedChildContext = t, Ce(rn), Ce(Nt), Se(Nt, t)) : Ce(rn), Se(rn, n);
}
var Hr = null, rf = !1, ld = !1;
function Ly(t) {
  Hr === null ? Hr = [t] : Hr.push(t);
}
function IS(t) {
  rf = !0, Ly(t);
}
function Vi() {
  if (!ld && Hr !== null) {
    ld = !0;
    var t = 0, e = _e;
    try {
      var n = Hr;
      for (_e = 1; t < n.length; t++) {
        var r = n[t];
        do
          r = r(!0);
        while (r !== null);
      }
      Hr = null, rf = !1;
    } catch (i) {
      throw Hr !== null && (Hr = Hr.slice(t + 1)), uy(jh, Vi), i;
    } finally {
      _e = e, ld = !1;
    }
  }
  return null;
}
var ll = [], sl = 0, yc = null, _c = 0, In = [], $n = 0, Oo = null, Vr = 1, Ur = "";
function lo(t, e) {
  ll[sl++] = _c, ll[sl++] = yc, yc = t, _c = e;
}
function jy(t, e, n) {
  In[$n++] = Vr, In[$n++] = Ur, In[$n++] = Oo, Oo = t;
  var r = Vr;
  t = Ur;
  var i = 32 - ur(r) - 1;
  r &= ~(1 << i), n += 1;
  var o = 32 - ur(e) + i;
  if (30 < o) {
    var l = i - i % 5;
    o = (r & (1 << l) - 1).toString(32), r >>= l, i -= l, Vr = 1 << 32 - ur(e) + i | n << i | r, Ur = o + t;
  } else
    Vr = 1 << o | n << i | r, Ur = t;
}
function Gh(t) {
  t.return !== null && (lo(t, 1), jy(t, 1, 0));
}
function Qh(t) {
  for (; t === yc; )
    yc = ll[--sl], ll[sl] = null, _c = ll[--sl], ll[sl] = null;
  for (; t === Oo; )
    Oo = In[--$n], In[$n] = null, Ur = In[--$n], In[$n] = null, Vr = In[--$n], In[$n] = null;
}
var En = null, Sn = null, Oe = !1, or = null;
function Fy(t, e) {
  var n = jn(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = e, n.return = t, e = t.deletions, e === null ? (t.deletions = [n], t.flags |= 16) : e.push(n);
}
function cg(t, e) {
  switch (t.tag) {
    case 5:
      var n = t.type;
      return e = e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase() ? null : e, e !== null ? (t.stateNode = e, En = t, Sn = bi(e.firstChild), !0) : !1;
    case 6:
      return e = t.pendingProps === "" || e.nodeType !== 3 ? null : e, e !== null ? (t.stateNode = e, En = t, Sn = null, !0) : !1;
    case 13:
      return e = e.nodeType !== 8 ? null : e, e !== null ? (n = Oo !== null ? { id: Vr, overflow: Ur } : null, t.memoizedState = { dehydrated: e, treeContext: n, retryLane: 1073741824 }, n = jn(18, null, null, 0), n.stateNode = e, n.return = t, t.child = n, En = t, Sn = null, !0) : !1;
    default:
      return !1;
  }
}
function wp(t) {
  return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function xp(t) {
  if (Oe) {
    var e = Sn;
    if (e) {
      var n = e;
      if (!cg(t, e)) {
        if (wp(t))
          throw Error($(418));
        e = bi(n.nextSibling);
        var r = En;
        e && cg(t, e) ? Fy(r, n) : (t.flags = t.flags & -4097 | 2, Oe = !1, En = t);
      }
    } else {
      if (wp(t))
        throw Error($(418));
      t.flags = t.flags & -4097 | 2, Oe = !1, En = t;
    }
  }
}
function fg(t) {
  for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
    t = t.return;
  En = t;
}
function iu(t) {
  if (t !== En)
    return !1;
  if (!Oe)
    return fg(t), Oe = !0, !1;
  var e;
  if ((e = t.tag !== 3) && !(e = t.tag !== 5) && (e = t.type, e = e !== "head" && e !== "body" && !gp(t.type, t.memoizedProps)), e && (e = Sn)) {
    if (wp(t))
      throw Hy(), Error($(418));
    for (; e; )
      Fy(t, e), e = bi(e.nextSibling);
  }
  if (fg(t), t.tag === 13) {
    if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t)
      throw Error($(317));
    e: {
      for (t = t.nextSibling, e = 0; t; ) {
        if (t.nodeType === 8) {
          var n = t.data;
          if (n === "/$") {
            if (e === 0) {
              Sn = bi(t.nextSibling);
              break e;
            }
            e--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || e++;
        }
        t = t.nextSibling;
      }
      Sn = null;
    }
  } else
    Sn = En ? bi(t.stateNode.nextSibling) : null;
  return !0;
}
function Hy() {
  for (var t = Sn; t; )
    t = bi(t.nextSibling);
}
function Nl() {
  Sn = En = null, Oe = !1;
}
function qh(t) {
  or === null ? or = [t] : or.push(t);
}
var $S = ni.ReactCurrentBatchConfig;
function rr(t, e) {
  if (t && t.defaultProps) {
    e = je({}, e), t = t.defaultProps;
    for (var n in t)
      e[n] === void 0 && (e[n] = t[n]);
    return e;
  }
  return e;
}
var wc = Wi(null), xc = null, al = null, Kh = null;
function Zh() {
  Kh = al = xc = null;
}
function Jh(t) {
  var e = wc.current;
  Ce(wc), t._currentValue = e;
}
function kp(t, e, n) {
  for (; t !== null; ) {
    var r = t.alternate;
    if ((t.childLanes & e) !== e ? (t.childLanes |= e, r !== null && (r.childLanes |= e)) : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e), t === n)
      break;
    t = t.return;
  }
}
function wl(t, e) {
  xc = t, Kh = al = null, t = t.dependencies, t !== null && t.firstContext !== null && (t.lanes & e && (nn = !0), t.firstContext = null);
}
function Un(t) {
  var e = t._currentValue;
  if (Kh !== t)
    if (t = { context: t, memoizedValue: e, next: null }, al === null) {
      if (xc === null)
        throw Error($(308));
      al = t, xc.dependencies = { lanes: 0, firstContext: t };
    } else
      al = al.next = t;
  return e;
}
var ho = null;
function e0(t) {
  ho === null ? ho = [t] : ho.push(t);
}
function By(t, e, n, r) {
  var i = e.interleaved;
  return i === null ? (n.next = n, e0(e)) : (n.next = i.next, i.next = n), e.interleaved = n, Zr(t, r);
}
function Zr(t, e) {
  t.lanes |= e;
  var n = t.alternate;
  for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null; )
    t.childLanes |= e, n = t.alternate, n !== null && (n.childLanes |= e), n = t, t = t.return;
  return n.tag === 3 ? n.stateNode : null;
}
var di = !1;
function t0(t) {
  t.updateQueue = { baseState: t.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Wy(t, e) {
  t = t.updateQueue, e.updateQueue === t && (e.updateQueue = { baseState: t.baseState, firstBaseUpdate: t.firstBaseUpdate, lastBaseUpdate: t.lastBaseUpdate, shared: t.shared, effects: t.effects });
}
function Gr(t, e) {
  return { eventTime: t, lane: e, tag: 0, payload: null, callback: null, next: null };
}
function Pi(t, e, n) {
  var r = t.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, me & 2) {
    var i = r.pending;
    return i === null ? e.next = e : (e.next = i.next, i.next = e), r.pending = e, Zr(t, n);
  }
  return i = r.interleaved, i === null ? (e.next = e, e0(r)) : (e.next = i.next, i.next = e), r.interleaved = e, Zr(t, n);
}
function Hu(t, e, n) {
  if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194240) !== 0)) {
    var r = e.lanes;
    r &= t.pendingLanes, n |= r, e.lanes = n, Fh(t, n);
  }
}
function dg(t, e) {
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
function kc(t, e, n, r) {
  var i = t.updateQueue;
  di = !1;
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
      var d = s.lane, p = s.eventTime;
      if ((r & d) === d) {
        c !== null && (c = c.next = {
          eventTime: p,
          lane: 0,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        });
        e: {
          var m = t, h = s;
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
              f = je({}, f, d);
              break e;
            case 2:
              di = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && (t.flags |= 64, d = i.effects, d === null ? i.effects = [s] : d.push(s));
      } else
        p = { eventTime: p, lane: d, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, c === null ? (u = c = p, a = f) : c = c.next = p, l |= d;
      if (s = s.next, s === null) {
        if (s = i.shared.pending, s === null)
          break;
        d = s, s = d.next, d.next = null, i.lastBaseUpdate = d, i.shared.pending = null;
      }
    } while (1);
    if (c === null && (a = f), i.baseState = a, i.firstBaseUpdate = u, i.lastBaseUpdate = c, e = i.shared.interleaved, e !== null) {
      i = e;
      do
        l |= i.lane, i = i.next;
      while (i !== e);
    } else
      o === null && (i.shared.lanes = 0);
    Ro |= l, t.lanes = l, t.memoizedState = f;
  }
}
function pg(t, e, n) {
  if (t = e.effects, e.effects = null, t !== null)
    for (e = 0; e < t.length; e++) {
      var r = t[e], i = r.callback;
      if (i !== null) {
        if (r.callback = null, r = n, typeof i != "function")
          throw Error($(191, i));
        i.call(r);
      }
    }
}
var Vy = new Bv.Component().refs;
function Sp(t, e, n, r) {
  e = t.memoizedState, n = n(r, e), n = n == null ? e : je({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
}
var of = { isMounted: function(t) {
  return (t = t._reactInternals) ? Fo(t) === t : !1;
}, enqueueSetState: function(t, e, n) {
  t = t._reactInternals;
  var r = Wt(), i = Mi(t), o = Gr(r, i);
  o.payload = e, n != null && (o.callback = n), e = Pi(t, o, i), e !== null && (cr(e, t, i, r), Hu(e, t, i));
}, enqueueReplaceState: function(t, e, n) {
  t = t._reactInternals;
  var r = Wt(), i = Mi(t), o = Gr(r, i);
  o.tag = 1, o.payload = e, n != null && (o.callback = n), e = Pi(t, o, i), e !== null && (cr(e, t, i, r), Hu(e, t, i));
}, enqueueForceUpdate: function(t, e) {
  t = t._reactInternals;
  var n = Wt(), r = Mi(t), i = Gr(n, r);
  i.tag = 2, e != null && (i.callback = e), e = Pi(t, i, r), e !== null && (cr(e, t, r, n), Hu(e, t, r));
} };
function hg(t, e, n, r, i, o, l) {
  return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(r, o, l) : e.prototype && e.prototype.isPureReactComponent ? !na(n, r) || !na(i, o) : !0;
}
function Uy(t, e, n) {
  var r = !1, i = zi, o = e.contextType;
  return typeof o == "object" && o !== null ? o = Un(o) : (i = on(e) ? Po : Nt.current, r = e.contextTypes, o = (r = r != null) ? Rl(t, i) : zi), e = new e(n, o), t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null, e.updater = of, t.stateNode = e, e._reactInternals = t, r && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = i, t.__reactInternalMemoizedMaskedChildContext = o), e;
}
function mg(t, e, n, r) {
  t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, r), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, r), e.state !== t && of.enqueueReplaceState(e, e.state, null);
}
function Ep(t, e, n, r) {
  var i = t.stateNode;
  i.props = n, i.state = t.memoizedState, i.refs = Vy, t0(t);
  var o = e.contextType;
  typeof o == "object" && o !== null ? i.context = Un(o) : (o = on(e) ? Po : Nt.current, i.context = Rl(t, o)), i.state = t.memoizedState, o = e.getDerivedStateFromProps, typeof o == "function" && (Sp(t, e, o, n), i.state = t.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (e = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), e !== i.state && of.enqueueReplaceState(i, i.state, null), kc(t, n, i, r), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308);
}
function is(t, e, n) {
  if (t = n.ref, t !== null && typeof t != "function" && typeof t != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error($(309));
        var r = n.stateNode;
      }
      if (!r)
        throw Error($(147, t));
      var i = r, o = "" + t;
      return e !== null && e.ref !== null && typeof e.ref == "function" && e.ref._stringRef === o ? e.ref : (e = function(l) {
        var s = i.refs;
        s === Vy && (s = i.refs = {}), l === null ? delete s[o] : s[o] = l;
      }, e._stringRef = o, e);
    }
    if (typeof t != "string")
      throw Error($(284));
    if (!n._owner)
      throw Error($(290, t));
  }
  return t;
}
function ou(t, e) {
  throw t = Object.prototype.toString.call(e), Error($(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t));
}
function gg(t) {
  var e = t._init;
  return e(t._payload);
}
function Yy(t) {
  function e(v, g) {
    if (t) {
      var y = v.deletions;
      y === null ? (v.deletions = [g], v.flags |= 16) : y.push(g);
    }
  }
  function n(v, g) {
    if (!t)
      return null;
    for (; g !== null; )
      e(v, g), g = g.sibling;
    return null;
  }
  function r(v, g) {
    for (v = /* @__PURE__ */ new Map(); g !== null; )
      g.key !== null ? v.set(g.key, g) : v.set(g.index, g), g = g.sibling;
    return v;
  }
  function i(v, g) {
    return v = Ri(v, g), v.index = 0, v.sibling = null, v;
  }
  function o(v, g, y) {
    return v.index = y, t ? (y = v.alternate, y !== null ? (y = y.index, y < g ? (v.flags |= 2, g) : y) : (v.flags |= 2, g)) : (v.flags |= 1048576, g);
  }
  function l(v) {
    return t && v.alternate === null && (v.flags |= 2), v;
  }
  function s(v, g, y, w) {
    return g === null || g.tag !== 6 ? (g = pd(y, v.mode, w), g.return = v, g) : (g = i(g, y), g.return = v, g);
  }
  function a(v, g, y, w) {
    var S = y.type;
    return S === el ? c(v, g, y.props.children, w, y.key) : g !== null && (g.elementType === S || typeof S == "object" && S !== null && S.$$typeof === fi && gg(S) === g.type) ? (w = i(g, y.props), w.ref = is(v, g, y), w.return = v, w) : (w = Xu(y.type, y.key, y.props, null, v.mode, w), w.ref = is(v, g, y), w.return = v, w);
  }
  function u(v, g, y, w) {
    return g === null || g.tag !== 4 || g.stateNode.containerInfo !== y.containerInfo || g.stateNode.implementation !== y.implementation ? (g = hd(y, v.mode, w), g.return = v, g) : (g = i(g, y.children || []), g.return = v, g);
  }
  function c(v, g, y, w, S) {
    return g === null || g.tag !== 7 ? (g = wo(y, v.mode, w, S), g.return = v, g) : (g = i(g, y), g.return = v, g);
  }
  function f(v, g, y) {
    if (typeof g == "string" && g !== "" || typeof g == "number")
      return g = pd("" + g, v.mode, y), g.return = v, g;
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Ga:
          return y = Xu(g.type, g.key, g.props, null, v.mode, y), y.ref = is(v, null, g), y.return = v, y;
        case Jo:
          return g = hd(g, v.mode, y), g.return = v, g;
        case fi:
          var w = g._init;
          return f(v, w(g._payload), y);
      }
      if (hs(g) || Jl(g))
        return g = wo(g, v.mode, y, null), g.return = v, g;
      ou(v, g);
    }
    return null;
  }
  function d(v, g, y, w) {
    var S = g !== null ? g.key : null;
    if (typeof y == "string" && y !== "" || typeof y == "number")
      return S !== null ? null : s(v, g, "" + y, w);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Ga:
          return y.key === S ? a(v, g, y, w) : null;
        case Jo:
          return y.key === S ? u(v, g, y, w) : null;
        case fi:
          return S = y._init, d(
            v,
            g,
            S(y._payload),
            w
          );
      }
      if (hs(y) || Jl(y))
        return S !== null ? null : c(v, g, y, w, null);
      ou(v, y);
    }
    return null;
  }
  function p(v, g, y, w, S) {
    if (typeof w == "string" && w !== "" || typeof w == "number")
      return v = v.get(y) || null, s(g, v, "" + w, S);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Ga:
          return v = v.get(w.key === null ? y : w.key) || null, a(g, v, w, S);
        case Jo:
          return v = v.get(w.key === null ? y : w.key) || null, u(g, v, w, S);
        case fi:
          var E = w._init;
          return p(v, g, y, E(w._payload), S);
      }
      if (hs(w) || Jl(w))
        return v = v.get(y) || null, c(g, v, w, S, null);
      ou(g, w);
    }
    return null;
  }
  function m(v, g, y, w) {
    for (var S = null, E = null, k = g, b = g = 0, O = null; k !== null && b < y.length; b++) {
      k.index > b ? (O = k, k = null) : O = k.sibling;
      var P = d(v, k, y[b], w);
      if (P === null) {
        k === null && (k = O);
        break;
      }
      t && k && P.alternate === null && e(v, k), g = o(P, g, b), E === null ? S = P : E.sibling = P, E = P, k = O;
    }
    if (b === y.length)
      return n(v, k), Oe && lo(v, b), S;
    if (k === null) {
      for (; b < y.length; b++)
        k = f(v, y[b], w), k !== null && (g = o(k, g, b), E === null ? S = k : E.sibling = k, E = k);
      return Oe && lo(v, b), S;
    }
    for (k = r(v, k); b < y.length; b++)
      O = p(k, v, b, y[b], w), O !== null && (t && O.alternate !== null && k.delete(O.key === null ? b : O.key), g = o(O, g, b), E === null ? S = O : E.sibling = O, E = O);
    return t && k.forEach(function(L) {
      return e(v, L);
    }), Oe && lo(v, b), S;
  }
  function h(v, g, y, w) {
    var S = Jl(y);
    if (typeof S != "function")
      throw Error($(150));
    if (y = S.call(y), y == null)
      throw Error($(151));
    for (var E = S = null, k = g, b = g = 0, O = null, P = y.next(); k !== null && !P.done; b++, P = y.next()) {
      k.index > b ? (O = k, k = null) : O = k.sibling;
      var L = d(v, k, P.value, w);
      if (L === null) {
        k === null && (k = O);
        break;
      }
      t && k && L.alternate === null && e(v, k), g = o(L, g, b), E === null ? S = L : E.sibling = L, E = L, k = O;
    }
    if (P.done)
      return n(
        v,
        k
      ), Oe && lo(v, b), S;
    if (k === null) {
      for (; !P.done; b++, P = y.next())
        P = f(v, P.value, w), P !== null && (g = o(P, g, b), E === null ? S = P : E.sibling = P, E = P);
      return Oe && lo(v, b), S;
    }
    for (k = r(v, k); !P.done; b++, P = y.next())
      P = p(k, v, b, P.value, w), P !== null && (t && P.alternate !== null && k.delete(P.key === null ? b : P.key), g = o(P, g, b), E === null ? S = P : E.sibling = P, E = P);
    return t && k.forEach(function(A) {
      return e(v, A);
    }), Oe && lo(v, b), S;
  }
  function _(v, g, y, w) {
    if (typeof y == "object" && y !== null && y.type === el && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Ga:
          e: {
            for (var S = y.key, E = g; E !== null; ) {
              if (E.key === S) {
                if (S = y.type, S === el) {
                  if (E.tag === 7) {
                    n(v, E.sibling), g = i(E, y.props.children), g.return = v, v = g;
                    break e;
                  }
                } else if (E.elementType === S || typeof S == "object" && S !== null && S.$$typeof === fi && gg(S) === E.type) {
                  n(v, E.sibling), g = i(E, y.props), g.ref = is(v, E, y), g.return = v, v = g;
                  break e;
                }
                n(v, E);
                break;
              } else
                e(v, E);
              E = E.sibling;
            }
            y.type === el ? (g = wo(y.props.children, v.mode, w, y.key), g.return = v, v = g) : (w = Xu(y.type, y.key, y.props, null, v.mode, w), w.ref = is(v, g, y), w.return = v, v = w);
          }
          return l(v);
        case Jo:
          e: {
            for (E = y.key; g !== null; ) {
              if (g.key === E)
                if (g.tag === 4 && g.stateNode.containerInfo === y.containerInfo && g.stateNode.implementation === y.implementation) {
                  n(v, g.sibling), g = i(g, y.children || []), g.return = v, v = g;
                  break e;
                } else {
                  n(v, g);
                  break;
                }
              else
                e(v, g);
              g = g.sibling;
            }
            g = hd(y, v.mode, w), g.return = v, v = g;
          }
          return l(v);
        case fi:
          return E = y._init, _(v, g, E(y._payload), w);
      }
      if (hs(y))
        return m(v, g, y, w);
      if (Jl(y))
        return h(v, g, y, w);
      ou(v, y);
    }
    return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y, g !== null && g.tag === 6 ? (n(v, g.sibling), g = i(g, y), g.return = v, v = g) : (n(v, g), g = pd(y, v.mode, w), g.return = v, v = g), l(v)) : n(v, g);
  }
  return _;
}
var Il = Yy(!0), Xy = Yy(!1), Na = {}, Pr = Wi(Na), la = Wi(Na), sa = Wi(Na);
function mo(t) {
  if (t === Na)
    throw Error($(174));
  return t;
}
function n0(t, e) {
  switch (Se(sa, e), Se(la, t), Se(Pr, Na), t = e.nodeType, t) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : np(null, "");
      break;
    default:
      t = t === 8 ? e.parentNode : e, e = t.namespaceURI || null, t = t.tagName, e = np(e, t);
  }
  Ce(Pr), Se(Pr, e);
}
function $l() {
  Ce(Pr), Ce(la), Ce(sa);
}
function Gy(t) {
  mo(sa.current);
  var e = mo(Pr.current), n = np(e, t.type);
  e !== n && (Se(la, t), Se(Pr, n));
}
function r0(t) {
  la.current === t && (Ce(Pr), Ce(la));
}
var Ae = Wi(0);
function Sc(t) {
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
var sd = [];
function i0() {
  for (var t = 0; t < sd.length; t++)
    sd[t]._workInProgressVersionPrimary = null;
  sd.length = 0;
}
var Bu = ni.ReactCurrentDispatcher, ad = ni.ReactCurrentBatchConfig, Mo = 0, Le = null, rt = null, ct = null, Ec = !1, Os = !1, aa = 0, AS = 0;
function Tt() {
  throw Error($(321));
}
function o0(t, e) {
  if (e === null)
    return !1;
  for (var n = 0; n < e.length && n < t.length; n++)
    if (!dr(t[n], e[n]))
      return !1;
  return !0;
}
function l0(t, e, n, r, i, o) {
  if (Mo = o, Le = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, Bu.current = t === null || t.memoizedState === null ? jS : FS, t = n(r, i), Os) {
    o = 0;
    do {
      if (Os = !1, aa = 0, 25 <= o)
        throw Error($(301));
      o += 1, ct = rt = null, e.updateQueue = null, Bu.current = HS, t = n(r, i);
    } while (Os);
  }
  if (Bu.current = Tc, e = rt !== null && rt.next !== null, Mo = 0, ct = rt = Le = null, Ec = !1, e)
    throw Error($(300));
  return t;
}
function s0() {
  var t = aa !== 0;
  return aa = 0, t;
}
function wr() {
  var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ct === null ? Le.memoizedState = ct = t : ct = ct.next = t, ct;
}
function Yn() {
  if (rt === null) {
    var t = Le.alternate;
    t = t !== null ? t.memoizedState : null;
  } else
    t = rt.next;
  var e = ct === null ? Le.memoizedState : ct.next;
  if (e !== null)
    ct = e, rt = t;
  else {
    if (t === null)
      throw Error($(310));
    rt = t, t = { memoizedState: rt.memoizedState, baseState: rt.baseState, baseQueue: rt.baseQueue, queue: rt.queue, next: null }, ct === null ? Le.memoizedState = ct = t : ct = ct.next = t;
  }
  return ct;
}
function ua(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function ud(t) {
  var e = Yn(), n = e.queue;
  if (n === null)
    throw Error($(311));
  n.lastRenderedReducer = t;
  var r = rt, i = r.baseQueue, o = n.pending;
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
      if ((Mo & c) === c)
        a !== null && (a = a.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : t(r, u.action);
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        a === null ? (s = a = f, l = r) : a = a.next = f, Le.lanes |= c, Ro |= c;
      }
      u = u.next;
    } while (u !== null && u !== o);
    a === null ? l = r : a.next = s, dr(r, e.memoizedState) || (nn = !0), e.memoizedState = r, e.baseState = l, e.baseQueue = a, n.lastRenderedState = r;
  }
  if (t = n.interleaved, t !== null) {
    i = t;
    do
      o = i.lane, Le.lanes |= o, Ro |= o, i = i.next;
    while (i !== t);
  } else
    i === null && (n.lanes = 0);
  return [e.memoizedState, n.dispatch];
}
function cd(t) {
  var e = Yn(), n = e.queue;
  if (n === null)
    throw Error($(311));
  n.lastRenderedReducer = t;
  var r = n.dispatch, i = n.pending, o = e.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = i = i.next;
    do
      o = t(o, l.action), l = l.next;
    while (l !== i);
    dr(o, e.memoizedState) || (nn = !0), e.memoizedState = o, e.baseQueue === null && (e.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function Qy() {
}
function qy(t, e) {
  var n = Le, r = Yn(), i = e(), o = !dr(r.memoizedState, i);
  if (o && (r.memoizedState = i, nn = !0), r = r.queue, a0(Jy.bind(null, n, r, t), [t]), r.getSnapshot !== e || o || ct !== null && ct.memoizedState.tag & 1) {
    if (n.flags |= 2048, ca(9, Zy.bind(null, n, r, i, e), void 0, null), ft === null)
      throw Error($(349));
    Mo & 30 || Ky(n, e, i);
  }
  return i;
}
function Ky(t, e, n) {
  t.flags |= 16384, t = { getSnapshot: e, value: n }, e = Le.updateQueue, e === null ? (e = { lastEffect: null, stores: null }, Le.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t));
}
function Zy(t, e, n, r) {
  e.value = n, e.getSnapshot = r, e_(e) && t_(t);
}
function Jy(t, e, n) {
  return n(function() {
    e_(e) && t_(t);
  });
}
function e_(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var n = e();
    return !dr(t, n);
  } catch {
    return !0;
  }
}
function t_(t) {
  var e = Zr(t, 1);
  e !== null && cr(e, t, 1, -1);
}
function vg(t) {
  var e = wr();
  return typeof t == "function" && (t = t()), e.memoizedState = e.baseState = t, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ua, lastRenderedState: t }, e.queue = t, t = t.dispatch = LS.bind(null, Le, t), [e.memoizedState, t];
}
function ca(t, e, n, r) {
  return t = { tag: t, create: e, destroy: n, deps: r, next: null }, e = Le.updateQueue, e === null ? (e = { lastEffect: null, stores: null }, Le.updateQueue = e, e.lastEffect = t.next = t) : (n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (r = n.next, n.next = t, t.next = r, e.lastEffect = t)), t;
}
function n_() {
  return Yn().memoizedState;
}
function Wu(t, e, n, r) {
  var i = wr();
  Le.flags |= t, i.memoizedState = ca(1 | e, n, void 0, r === void 0 ? null : r);
}
function lf(t, e, n, r) {
  var i = Yn();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (rt !== null) {
    var l = rt.memoizedState;
    if (o = l.destroy, r !== null && o0(r, l.deps)) {
      i.memoizedState = ca(e, n, o, r);
      return;
    }
  }
  Le.flags |= t, i.memoizedState = ca(1 | e, n, o, r);
}
function yg(t, e) {
  return Wu(8390656, 8, t, e);
}
function a0(t, e) {
  return lf(2048, 8, t, e);
}
function r_(t, e) {
  return lf(4, 2, t, e);
}
function i_(t, e) {
  return lf(4, 4, t, e);
}
function o_(t, e) {
  if (typeof e == "function")
    return t = t(), e(t), function() {
      e(null);
    };
  if (e != null)
    return t = t(), e.current = t, function() {
      e.current = null;
    };
}
function l_(t, e, n) {
  return n = n != null ? n.concat([t]) : null, lf(4, 4, o_.bind(null, e, t), n);
}
function u0() {
}
function s_(t, e) {
  var n = Yn();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && o0(e, r[1]) ? r[0] : (n.memoizedState = [t, e], t);
}
function a_(t, e) {
  var n = Yn();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && o0(e, r[1]) ? r[0] : (t = t(), n.memoizedState = [t, e], t);
}
function u_(t, e, n) {
  return Mo & 21 ? (dr(n, e) || (n = dy(), Le.lanes |= n, Ro |= n, t.baseState = !0), e) : (t.baseState && (t.baseState = !1, nn = !0), t.memoizedState = n);
}
function DS(t, e) {
  var n = _e;
  _e = n !== 0 && 4 > n ? n : 4, t(!0);
  var r = ad.transition;
  ad.transition = {};
  try {
    t(!1), e();
  } finally {
    _e = n, ad.transition = r;
  }
}
function c_() {
  return Yn().memoizedState;
}
function zS(t, e, n) {
  var r = Mi(t);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, f_(t))
    d_(e, n);
  else if (n = By(t, e, n, r), n !== null) {
    var i = Wt();
    cr(n, t, r, i), p_(n, e, r);
  }
}
function LS(t, e, n) {
  var r = Mi(t), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (f_(t))
    d_(e, i);
  else {
    var o = t.alternate;
    if (t.lanes === 0 && (o === null || o.lanes === 0) && (o = e.lastRenderedReducer, o !== null))
      try {
        var l = e.lastRenderedState, s = o(l, n);
        if (i.hasEagerState = !0, i.eagerState = s, dr(s, l)) {
          var a = e.interleaved;
          a === null ? (i.next = i, e0(e)) : (i.next = a.next, a.next = i), e.interleaved = i;
          return;
        }
      } catch {
      } finally {
      }
    n = By(t, e, i, r), n !== null && (i = Wt(), cr(n, t, r, i), p_(n, e, r));
  }
}
function f_(t) {
  var e = t.alternate;
  return t === Le || e !== null && e === Le;
}
function d_(t, e) {
  Os = Ec = !0;
  var n = t.pending;
  n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
}
function p_(t, e, n) {
  if (n & 4194240) {
    var r = e.lanes;
    r &= t.pendingLanes, n |= r, e.lanes = n, Fh(t, n);
  }
}
var Tc = { readContext: Un, useCallback: Tt, useContext: Tt, useEffect: Tt, useImperativeHandle: Tt, useInsertionEffect: Tt, useLayoutEffect: Tt, useMemo: Tt, useReducer: Tt, useRef: Tt, useState: Tt, useDebugValue: Tt, useDeferredValue: Tt, useTransition: Tt, useMutableSource: Tt, useSyncExternalStore: Tt, useId: Tt, unstable_isNewReconciler: !1 }, jS = { readContext: Un, useCallback: function(t, e) {
  return wr().memoizedState = [t, e === void 0 ? null : e], t;
}, useContext: Un, useEffect: yg, useImperativeHandle: function(t, e, n) {
  return n = n != null ? n.concat([t]) : null, Wu(
    4194308,
    4,
    o_.bind(null, e, t),
    n
  );
}, useLayoutEffect: function(t, e) {
  return Wu(4194308, 4, t, e);
}, useInsertionEffect: function(t, e) {
  return Wu(4, 2, t, e);
}, useMemo: function(t, e) {
  var n = wr();
  return e = e === void 0 ? null : e, t = t(), n.memoizedState = [t, e], t;
}, useReducer: function(t, e, n) {
  var r = wr();
  return e = n !== void 0 ? n(e) : e, r.memoizedState = r.baseState = e, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: e }, r.queue = t, t = t.dispatch = zS.bind(null, Le, t), [r.memoizedState, t];
}, useRef: function(t) {
  var e = wr();
  return t = { current: t }, e.memoizedState = t;
}, useState: vg, useDebugValue: u0, useDeferredValue: function(t) {
  return wr().memoizedState = t;
}, useTransition: function() {
  var t = vg(!1), e = t[0];
  return t = DS.bind(null, t[1]), wr().memoizedState = t, [e, t];
}, useMutableSource: function() {
}, useSyncExternalStore: function(t, e, n) {
  var r = Le, i = wr();
  if (Oe) {
    if (n === void 0)
      throw Error($(407));
    n = n();
  } else {
    if (n = e(), ft === null)
      throw Error($(349));
    Mo & 30 || Ky(r, e, n);
  }
  i.memoizedState = n;
  var o = { value: n, getSnapshot: e };
  return i.queue = o, yg(Jy.bind(
    null,
    r,
    o,
    t
  ), [t]), r.flags |= 2048, ca(9, Zy.bind(null, r, o, n, e), void 0, null), n;
}, useId: function() {
  var t = wr(), e = ft.identifierPrefix;
  if (Oe) {
    var n = Ur, r = Vr;
    n = (r & ~(1 << 32 - ur(r) - 1)).toString(32) + n, e = ":" + e + "R" + n, n = aa++, 0 < n && (e += "H" + n.toString(32)), e += ":";
  } else
    n = AS++, e = ":" + e + "r" + n.toString(32) + ":";
  return t.memoizedState = e;
}, unstable_isNewReconciler: !1 }, FS = {
  readContext: Un,
  useCallback: s_,
  useContext: Un,
  useEffect: a0,
  useImperativeHandle: l_,
  useInsertionEffect: r_,
  useLayoutEffect: i_,
  useMemo: a_,
  useReducer: ud,
  useRef: n_,
  useState: function() {
    return ud(ua);
  },
  useDebugValue: u0,
  useDeferredValue: function(t) {
    var e = Yn();
    return u_(e, rt.memoizedState, t);
  },
  useTransition: function() {
    var t = ud(ua)[0], e = Yn().memoizedState;
    return [t, e];
  },
  useMutableSource: Qy,
  useSyncExternalStore: qy,
  useId: c_,
  unstable_isNewReconciler: !1
}, HS = { readContext: Un, useCallback: s_, useContext: Un, useEffect: a0, useImperativeHandle: l_, useInsertionEffect: r_, useLayoutEffect: i_, useMemo: a_, useReducer: cd, useRef: n_, useState: function() {
  return cd(ua);
}, useDebugValue: u0, useDeferredValue: function(t) {
  var e = Yn();
  return rt === null ? e.memoizedState = t : u_(e, rt.memoizedState, t);
}, useTransition: function() {
  var t = cd(ua)[0], e = Yn().memoizedState;
  return [t, e];
}, useMutableSource: Qy, useSyncExternalStore: qy, useId: c_, unstable_isNewReconciler: !1 };
function Al(t, e) {
  try {
    var n = "", r = e;
    do
      n += mk(r), r = r.return;
    while (r);
    var i = n;
  } catch (o) {
    i = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: t, source: e, stack: i, digest: null };
}
function fd(t, e, n) {
  return { value: t, source: null, stack: n ?? null, digest: e ?? null };
}
function Tp(t, e) {
  try {
    console.error(e.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var BS = typeof WeakMap == "function" ? WeakMap : Map;
function h_(t, e, n) {
  n = Gr(-1, n), n.tag = 3, n.payload = { element: null };
  var r = e.value;
  return n.callback = function() {
    bc || (bc = !0, Ap = r), Tp(t, e);
  }, n;
}
function m_(t, e, n) {
  n = Gr(-1, n), n.tag = 3;
  var r = t.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = e.value;
    n.payload = function() {
      return r(i);
    }, n.callback = function() {
      Tp(t, e);
    };
  }
  var o = t.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    Tp(t, e), typeof r != "function" && (Oi === null ? Oi = /* @__PURE__ */ new Set([this]) : Oi.add(this));
    var l = e.stack;
    this.componentDidCatch(e.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function _g(t, e, n) {
  var r = t.pingCache;
  if (r === null) {
    r = t.pingCache = new BS();
    var i = /* @__PURE__ */ new Set();
    r.set(e, i);
  } else
    i = r.get(e), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(e, i));
  i.has(n) || (i.add(n), t = nE.bind(null, t, e, n), e.then(t, t));
}
function wg(t) {
  do {
    var e;
    if ((e = t.tag === 13) && (e = t.memoizedState, e = e !== null ? e.dehydrated !== null : !0), e)
      return t;
    t = t.return;
  } while (t !== null);
  return null;
}
function xg(t, e, n, r, i) {
  return t.mode & 1 ? (t.flags |= 65536, t.lanes = i, t) : (t === e ? t.flags |= 65536 : (t.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (e = Gr(-1, 1), e.tag = 2, Pi(n, e, 1))), n.lanes |= 1), t);
}
var WS = ni.ReactCurrentOwner, nn = !1;
function Dt(t, e, n, r) {
  e.child = t === null ? Xy(e, null, n, r) : Il(e, t.child, n, r);
}
function kg(t, e, n, r, i) {
  n = n.render;
  var o = e.ref;
  return wl(e, i), r = l0(t, e, n, r, o, i), n = s0(), t !== null && !nn ? (e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~i, Jr(t, e, i)) : (Oe && n && Gh(e), e.flags |= 1, Dt(t, e, r, i), e.child);
}
function Sg(t, e, n, r, i) {
  if (t === null) {
    var o = n.type;
    return typeof o == "function" && !v0(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (e.tag = 15, e.type = o, g_(t, e, o, r, i)) : (t = Xu(n.type, null, r, e, e.mode, i), t.ref = e.ref, t.return = e, e.child = t);
  }
  if (o = t.child, !(t.lanes & i)) {
    var l = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : na, n(l, r) && t.ref === e.ref)
      return Jr(t, e, i);
  }
  return e.flags |= 1, t = Ri(o, r), t.ref = e.ref, t.return = e, e.child = t;
}
function g_(t, e, n, r, i) {
  if (t !== null) {
    var o = t.memoizedProps;
    if (na(o, r) && t.ref === e.ref)
      if (nn = !1, e.pendingProps = r = o, (t.lanes & i) !== 0)
        t.flags & 131072 && (nn = !0);
      else
        return e.lanes = t.lanes, Jr(t, e, i);
  }
  return Cp(t, e, n, r, i);
}
function v_(t, e, n) {
  var r = e.pendingProps, i = r.children, o = t !== null ? t.memoizedState : null;
  if (r.mode === "hidden")
    if (!(e.mode & 1))
      e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Se(cl, yn), yn |= n;
    else {
      if (!(n & 1073741824))
        return t = o !== null ? o.baseLanes | n : n, e.lanes = e.childLanes = 1073741824, e.memoizedState = { baseLanes: t, cachePool: null, transitions: null }, e.updateQueue = null, Se(cl, yn), yn |= t, null;
      e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, Se(cl, yn), yn |= r;
    }
  else
    o !== null ? (r = o.baseLanes | n, e.memoizedState = null) : r = n, Se(cl, yn), yn |= r;
  return Dt(t, e, i, n), e.child;
}
function y_(t, e) {
  var n = e.ref;
  (t === null && n !== null || t !== null && t.ref !== n) && (e.flags |= 512, e.flags |= 2097152);
}
function Cp(t, e, n, r, i) {
  var o = on(n) ? Po : Nt.current;
  return o = Rl(e, o), wl(e, i), n = l0(t, e, n, r, o, i), r = s0(), t !== null && !nn ? (e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~i, Jr(t, e, i)) : (Oe && r && Gh(e), e.flags |= 1, Dt(t, e, n, i), e.child);
}
function Eg(t, e, n, r, i) {
  if (on(n)) {
    var o = !0;
    vc(e);
  } else
    o = !1;
  if (wl(e, i), e.stateNode === null)
    Vu(t, e), Uy(e, n, r), Ep(e, n, r, i), r = !0;
  else if (t === null) {
    var l = e.stateNode, s = e.memoizedProps;
    l.props = s;
    var a = l.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = Un(u) : (u = on(n) ? Po : Nt.current, u = Rl(e, u));
    var c = n.getDerivedStateFromProps, f = typeof c == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    f || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== r || a !== u) && mg(e, l, r, u), di = !1;
    var d = e.memoizedState;
    l.state = d, kc(e, r, l, i), a = e.memoizedState, s !== r || d !== a || rn.current || di ? (typeof c == "function" && (Sp(e, n, c, r), a = e.memoizedState), (s = di || hg(e, n, s, r, d, a, u)) ? (f || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = r, e.memoizedState = a), l.props = r, l.state = a, l.context = u, r = s) : (typeof l.componentDidMount == "function" && (e.flags |= 4194308), r = !1);
  } else {
    l = e.stateNode, Wy(t, e), s = e.memoizedProps, u = e.type === e.elementType ? s : rr(e.type, s), l.props = u, f = e.pendingProps, d = l.context, a = n.contextType, typeof a == "object" && a !== null ? a = Un(a) : (a = on(n) ? Po : Nt.current, a = Rl(e, a));
    var p = n.getDerivedStateFromProps;
    (c = typeof p == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== f || d !== a) && mg(e, l, r, a), di = !1, d = e.memoizedState, l.state = d, kc(e, r, l, i);
    var m = e.memoizedState;
    s !== f || d !== m || rn.current || di ? (typeof p == "function" && (Sp(e, n, p, r), m = e.memoizedState), (u = di || hg(e, n, u, r, d, m, a) || !1) ? (c || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, m, a), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, m, a)), typeof l.componentDidUpdate == "function" && (e.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || s === t.memoizedProps && d === t.memoizedState || (e.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === t.memoizedProps && d === t.memoizedState || (e.flags |= 1024), e.memoizedProps = r, e.memoizedState = m), l.props = r, l.state = m, l.context = a, r = u) : (typeof l.componentDidUpdate != "function" || s === t.memoizedProps && d === t.memoizedState || (e.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === t.memoizedProps && d === t.memoizedState || (e.flags |= 1024), r = !1);
  }
  return bp(t, e, n, r, o, i);
}
function bp(t, e, n, r, i, o) {
  y_(t, e);
  var l = (e.flags & 128) !== 0;
  if (!r && !l)
    return i && ug(e, n, !1), Jr(t, e, o);
  r = e.stateNode, WS.current = e;
  var s = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return e.flags |= 1, t !== null && l ? (e.child = Il(e, t.child, null, o), e.child = Il(e, null, s, o)) : Dt(t, e, s, o), e.memoizedState = r.state, i && ug(e, n, !0), e.child;
}
function __(t) {
  var e = t.stateNode;
  e.pendingContext ? ag(t, e.pendingContext, e.pendingContext !== e.context) : e.context && ag(t, e.context, !1), n0(t, e.containerInfo);
}
function Tg(t, e, n, r, i) {
  return Nl(), qh(i), e.flags |= 256, Dt(t, e, n, r), e.child;
}
var Pp = { dehydrated: null, treeContext: null, retryLane: 0 };
function Op(t) {
  return { baseLanes: t, cachePool: null, transitions: null };
}
function w_(t, e, n) {
  var r = e.pendingProps, i = Ae.current, o = !1, l = (e.flags & 128) !== 0, s;
  if ((s = l) || (s = t !== null && t.memoizedState === null ? !1 : (i & 2) !== 0), s ? (o = !0, e.flags &= -129) : (t === null || t.memoizedState !== null) && (i |= 1), Se(Ae, i & 1), t === null)
    return xp(e), t = e.memoizedState, t !== null && (t = t.dehydrated, t !== null) ? (e.mode & 1 ? t.data === "$!" ? e.lanes = 8 : e.lanes = 1073741824 : e.lanes = 1, null) : (l = r.children, t = r.fallback, o ? (r = e.mode, o = e.child, l = { mode: "hidden", children: l }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = l) : o = uf(l, r, 0, null), t = wo(t, r, n, null), o.return = e, t.return = e, o.sibling = t, e.child = o, e.child.memoizedState = Op(n), e.memoizedState = Pp, t) : c0(e, l));
  if (i = t.memoizedState, i !== null && (s = i.dehydrated, s !== null))
    return VS(t, e, l, r, s, i, n);
  if (o) {
    o = r.fallback, l = e.mode, i = t.child, s = i.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(l & 1) && e.child !== i ? (r = e.child, r.childLanes = 0, r.pendingProps = a, e.deletions = null) : (r = Ri(i, a), r.subtreeFlags = i.subtreeFlags & 14680064), s !== null ? o = Ri(s, o) : (o = wo(o, l, n, null), o.flags |= 2), o.return = e, r.return = e, r.sibling = o, e.child = r, r = o, o = e.child, l = t.child.memoizedState, l = l === null ? Op(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, o.memoizedState = l, o.childLanes = t.childLanes & ~n, e.memoizedState = Pp, r;
  }
  return o = t.child, t = o.sibling, r = Ri(o, { mode: "visible", children: r.children }), !(e.mode & 1) && (r.lanes = n), r.return = e, r.sibling = null, t !== null && (n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t)), e.child = r, e.memoizedState = null, r;
}
function c0(t, e) {
  return e = uf({ mode: "visible", children: e }, t.mode, 0, null), e.return = t, t.child = e;
}
function lu(t, e, n, r) {
  return r !== null && qh(r), Il(e, t.child, null, n), t = c0(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t;
}
function VS(t, e, n, r, i, o, l) {
  if (n)
    return e.flags & 256 ? (e.flags &= -257, r = fd(Error($(422))), lu(t, e, l, r)) : e.memoizedState !== null ? (e.child = t.child, e.flags |= 128, null) : (o = r.fallback, i = e.mode, r = uf({ mode: "visible", children: r.children }, i, 0, null), o = wo(o, i, l, null), o.flags |= 2, r.return = e, o.return = e, r.sibling = o, e.child = r, e.mode & 1 && Il(e, t.child, null, l), e.child.memoizedState = Op(l), e.memoizedState = Pp, o);
  if (!(e.mode & 1))
    return lu(t, e, l, null);
  if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r)
      var s = r.dgst;
    return r = s, o = Error($(419)), r = fd(o, r, void 0), lu(t, e, l, r);
  }
  if (s = (l & t.childLanes) !== 0, nn || s) {
    if (r = ft, r !== null) {
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
      i = i & (r.suspendedLanes | l) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, Zr(t, i), cr(r, t, i, -1));
    }
    return g0(), r = fd(Error($(421))), lu(t, e, l, r);
  }
  return i.data === "$?" ? (e.flags |= 128, e.child = t.child, e = rE.bind(null, t), i._reactRetry = e, null) : (t = o.treeContext, Sn = bi(i.nextSibling), En = e, Oe = !0, or = null, t !== null && (In[$n++] = Vr, In[$n++] = Ur, In[$n++] = Oo, Vr = t.id, Ur = t.overflow, Oo = e), e = c0(e, r.children), e.flags |= 4096, e);
}
function Cg(t, e, n) {
  t.lanes |= e;
  var r = t.alternate;
  r !== null && (r.lanes |= e), kp(t.return, e, n);
}
function dd(t, e, n, r, i) {
  var o = t.memoizedState;
  o === null ? t.memoizedState = { isBackwards: e, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (o.isBackwards = e, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i);
}
function x_(t, e, n) {
  var r = e.pendingProps, i = r.revealOrder, o = r.tail;
  if (Dt(t, e, r.children, n), r = Ae.current, r & 2)
    r = r & 1 | 2, e.flags |= 128;
  else {
    if (t !== null && t.flags & 128)
      e:
        for (t = e.child; t !== null; ) {
          if (t.tag === 13)
            t.memoizedState !== null && Cg(t, n, e);
          else if (t.tag === 19)
            Cg(t, n, e);
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
  if (Se(Ae, r), !(e.mode & 1))
    e.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = e.child, i = null; n !== null; )
          t = n.alternate, t !== null && Sc(t) === null && (i = n), n = n.sibling;
        n = i, n === null ? (i = e.child, e.child = null) : (i = n.sibling, n.sibling = null), dd(e, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = e.child, e.child = null; i !== null; ) {
          if (t = i.alternate, t !== null && Sc(t) === null) {
            e.child = i;
            break;
          }
          t = i.sibling, i.sibling = n, n = i, i = t;
        }
        dd(e, !0, n, null, o);
        break;
      case "together":
        dd(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
  return e.child;
}
function Vu(t, e) {
  !(e.mode & 1) && t !== null && (t.alternate = null, e.alternate = null, e.flags |= 2);
}
function Jr(t, e, n) {
  if (t !== null && (e.dependencies = t.dependencies), Ro |= e.lanes, !(n & e.childLanes))
    return null;
  if (t !== null && e.child !== t.child)
    throw Error($(153));
  if (e.child !== null) {
    for (t = e.child, n = Ri(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; )
      t = t.sibling, n = n.sibling = Ri(t, t.pendingProps), n.return = e;
    n.sibling = null;
  }
  return e.child;
}
function US(t, e, n) {
  switch (e.tag) {
    case 3:
      __(e), Nl();
      break;
    case 5:
      Gy(e);
      break;
    case 1:
      on(e.type) && vc(e);
      break;
    case 4:
      n0(e, e.stateNode.containerInfo);
      break;
    case 10:
      var r = e.type._context, i = e.memoizedProps.value;
      Se(wc, r._currentValue), r._currentValue = i;
      break;
    case 13:
      if (r = e.memoizedState, r !== null)
        return r.dehydrated !== null ? (Se(Ae, Ae.current & 1), e.flags |= 128, null) : n & e.child.childLanes ? w_(t, e, n) : (Se(Ae, Ae.current & 1), t = Jr(t, e, n), t !== null ? t.sibling : null);
      Se(Ae, Ae.current & 1);
      break;
    case 19:
      if (r = (n & e.childLanes) !== 0, t.flags & 128) {
        if (r)
          return x_(t, e, n);
        e.flags |= 128;
      }
      if (i = e.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Se(Ae, Ae.current), r)
        break;
      return null;
    case 22:
    case 23:
      return e.lanes = 0, v_(t, e, n);
  }
  return Jr(t, e, n);
}
var k_, Mp, S_, E_;
k_ = function(t, e) {
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
Mp = function() {
};
S_ = function(t, e, n, r) {
  var i = t.memoizedProps;
  if (i !== r) {
    t = e.stateNode, mo(Pr.current);
    var o = null;
    switch (n) {
      case "input":
        i = Zd(t, i), r = Zd(t, r), o = [];
        break;
      case "select":
        i = je({}, i, { value: void 0 }), r = je({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        i = tp(t, i), r = tp(t, r), o = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (t.onclick = mc);
    }
    rp(n, r);
    var l;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var s = i[u];
          for (l in s)
            s.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
        } else
          u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Qs.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
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
          u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, s = s ? s.__html : void 0, a != null && s !== a && (o = o || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Qs.hasOwnProperty(u) ? (a != null && u === "onScroll" && Ee("scroll", t), o || s === a || (o = [])) : (o = o || []).push(u, a));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (e.updateQueue = u) && (e.flags |= 4);
  }
};
E_ = function(t, e, n, r) {
  n !== r && (e.flags |= 4);
};
function os(t, e) {
  if (!Oe)
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
function Ct(t) {
  var e = t.alternate !== null && t.alternate.child === t.child, n = 0, r = 0;
  if (e)
    for (var i = t.child; i !== null; )
      n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = t, i = i.sibling;
  else
    for (i = t.child; i !== null; )
      n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = t, i = i.sibling;
  return t.subtreeFlags |= r, t.childLanes = n, e;
}
function YS(t, e, n) {
  var r = e.pendingProps;
  switch (Qh(e), e.tag) {
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
      return Ct(e), null;
    case 1:
      return on(e.type) && gc(), Ct(e), null;
    case 3:
      return r = e.stateNode, $l(), Ce(rn), Ce(Nt), i0(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (t === null || t.child === null) && (iu(e) ? e.flags |= 4 : t === null || t.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024, or !== null && (Lp(or), or = null))), Mp(t, e), Ct(e), null;
    case 5:
      r0(e);
      var i = mo(sa.current);
      if (n = e.type, t !== null && e.stateNode != null)
        S_(t, e, n, r, i), t.ref !== e.ref && (e.flags |= 512, e.flags |= 2097152);
      else {
        if (!r) {
          if (e.stateNode === null)
            throw Error($(166));
          return Ct(e), null;
        }
        if (t = mo(Pr.current), iu(e)) {
          r = e.stateNode, n = e.type;
          var o = e.memoizedProps;
          switch (r[Er] = e, r[oa] = o, t = (e.mode & 1) !== 0, n) {
            case "dialog":
              Ee("cancel", r), Ee("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Ee("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < gs.length; i++)
                Ee(gs[i], r);
              break;
            case "source":
              Ee("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Ee(
                "error",
                r
              ), Ee("load", r);
              break;
            case "details":
              Ee("toggle", r);
              break;
            case "input":
              Am(r, o), Ee("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, Ee("invalid", r);
              break;
            case "textarea":
              zm(r, o), Ee("invalid", r);
          }
          rp(n, o), i = null;
          for (var l in o)
            if (o.hasOwnProperty(l)) {
              var s = o[l];
              l === "children" ? typeof s == "string" ? r.textContent !== s && (o.suppressHydrationWarning !== !0 && ru(r.textContent, s, t), i = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (o.suppressHydrationWarning !== !0 && ru(
                r.textContent,
                s,
                t
              ), i = ["children", "" + s]) : Qs.hasOwnProperty(l) && s != null && l === "onScroll" && Ee("scroll", r);
            }
          switch (n) {
            case "input":
              Qa(r), Dm(r, o, !0);
              break;
            case "textarea":
              Qa(r), Lm(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = mc);
          }
          r = i, e.updateQueue = r, r !== null && (e.flags |= 4);
        } else {
          l = i.nodeType === 9 ? i : i.ownerDocument, t === "http://www.w3.org/1999/xhtml" && (t = Kv(n)), t === "http://www.w3.org/1999/xhtml" ? n === "script" ? (t = l.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild)) : typeof r.is == "string" ? t = l.createElement(n, { is: r.is }) : (t = l.createElement(n), n === "select" && (l = t, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : t = l.createElementNS(t, n), t[Er] = e, t[oa] = r, k_(t, e, !1, !1), e.stateNode = t;
          e: {
            switch (l = ip(n, r), n) {
              case "dialog":
                Ee("cancel", t), Ee("close", t), i = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                Ee("load", t), i = r;
                break;
              case "video":
              case "audio":
                for (i = 0; i < gs.length; i++)
                  Ee(gs[i], t);
                i = r;
                break;
              case "source":
                Ee("error", t), i = r;
                break;
              case "img":
              case "image":
              case "link":
                Ee(
                  "error",
                  t
                ), Ee("load", t), i = r;
                break;
              case "details":
                Ee("toggle", t), i = r;
                break;
              case "input":
                Am(t, r), i = Zd(t, r), Ee("invalid", t);
                break;
              case "option":
                i = r;
                break;
              case "select":
                t._wrapperState = { wasMultiple: !!r.multiple }, i = je({}, r, { value: void 0 }), Ee("invalid", t);
                break;
              case "textarea":
                zm(t, r), i = tp(t, r), Ee("invalid", t);
                break;
              default:
                i = r;
            }
            rp(n, i), s = i;
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var a = s[o];
                o === "style" ? ey(t, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Zv(t, a)) : o === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && qs(t, a) : typeof a == "number" && qs(t, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Qs.hasOwnProperty(o) ? a != null && o === "onScroll" && Ee("scroll", t) : a != null && $h(t, o, a, l));
              }
            switch (n) {
              case "input":
                Qa(t), Dm(t, r, !1);
                break;
              case "textarea":
                Qa(t), Lm(t);
                break;
              case "option":
                r.value != null && t.setAttribute("value", "" + Di(r.value));
                break;
              case "select":
                t.multiple = !!r.multiple, o = r.value, o != null ? gl(t, !!r.multiple, o, !1) : r.defaultValue != null && gl(
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
      return Ct(e), null;
    case 6:
      if (t && e.stateNode != null)
        E_(t, e, t.memoizedProps, r);
      else {
        if (typeof r != "string" && e.stateNode === null)
          throw Error($(166));
        if (n = mo(sa.current), mo(Pr.current), iu(e)) {
          if (r = e.stateNode, n = e.memoizedProps, r[Er] = e, (o = r.nodeValue !== n) && (t = En, t !== null))
            switch (t.tag) {
              case 3:
                ru(r.nodeValue, n, (t.mode & 1) !== 0);
                break;
              case 5:
                t.memoizedProps.suppressHydrationWarning !== !0 && ru(r.nodeValue, n, (t.mode & 1) !== 0);
            }
          o && (e.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Er] = e, e.stateNode = r;
      }
      return Ct(e), null;
    case 13:
      if (Ce(Ae), r = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
        if (Oe && Sn !== null && e.mode & 1 && !(e.flags & 128))
          Hy(), Nl(), e.flags |= 98560, o = !1;
        else if (o = iu(e), r !== null && r.dehydrated !== null) {
          if (t === null) {
            if (!o)
              throw Error($(318));
            if (o = e.memoizedState, o = o !== null ? o.dehydrated : null, !o)
              throw Error($(317));
            o[Er] = e;
          } else
            Nl(), !(e.flags & 128) && (e.memoizedState = null), e.flags |= 4;
          Ct(e), o = !1;
        } else
          or !== null && (Lp(or), or = null), o = !0;
        if (!o)
          return e.flags & 65536 ? e : null;
      }
      return e.flags & 128 ? (e.lanes = n, e) : (r = r !== null, r !== (t !== null && t.memoizedState !== null) && r && (e.child.flags |= 8192, e.mode & 1 && (t === null || Ae.current & 1 ? ot === 0 && (ot = 3) : g0())), e.updateQueue !== null && (e.flags |= 4), Ct(e), null);
    case 4:
      return $l(), Mp(t, e), t === null && ra(e.stateNode.containerInfo), Ct(e), null;
    case 10:
      return Jh(e.type._context), Ct(e), null;
    case 17:
      return on(e.type) && gc(), Ct(e), null;
    case 19:
      if (Ce(Ae), o = e.memoizedState, o === null)
        return Ct(e), null;
      if (r = (e.flags & 128) !== 0, l = o.rendering, l === null)
        if (r)
          os(o, !1);
        else {
          if (ot !== 0 || t !== null && t.flags & 128)
            for (t = e.child; t !== null; ) {
              if (l = Sc(t), l !== null) {
                for (e.flags |= 128, os(o, !1), r = l.updateQueue, r !== null && (e.updateQueue = r, e.flags |= 4), e.subtreeFlags = 0, r = n, n = e.child; n !== null; )
                  o = n, t = r, o.flags &= 14680066, l = o.alternate, l === null ? (o.childLanes = 0, o.lanes = t, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = l.childLanes, o.lanes = l.lanes, o.child = l.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = l.memoizedProps, o.memoizedState = l.memoizedState, o.updateQueue = l.updateQueue, o.type = l.type, t = l.dependencies, o.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), n = n.sibling;
                return Se(Ae, Ae.current & 1 | 2), e.child;
              }
              t = t.sibling;
            }
          o.tail !== null && Ge() > Dl && (e.flags |= 128, r = !0, os(o, !1), e.lanes = 4194304);
        }
      else {
        if (!r)
          if (t = Sc(l), t !== null) {
            if (e.flags |= 128, r = !0, n = t.updateQueue, n !== null && (e.updateQueue = n, e.flags |= 4), os(o, !0), o.tail === null && o.tailMode === "hidden" && !l.alternate && !Oe)
              return Ct(e), null;
          } else
            2 * Ge() - o.renderingStartTime > Dl && n !== 1073741824 && (e.flags |= 128, r = !0, os(o, !1), e.lanes = 4194304);
        o.isBackwards ? (l.sibling = e.child, e.child = l) : (n = o.last, n !== null ? n.sibling = l : e.child = l, o.last = l);
      }
      return o.tail !== null ? (e = o.tail, o.rendering = e, o.tail = e.sibling, o.renderingStartTime = Ge(), e.sibling = null, n = Ae.current, Se(Ae, r ? n & 1 | 2 : n & 1), e) : (Ct(e), null);
    case 22:
    case 23:
      return m0(), r = e.memoizedState !== null, t !== null && t.memoizedState !== null !== r && (e.flags |= 8192), r && e.mode & 1 ? yn & 1073741824 && (Ct(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Ct(e), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error($(156, e.tag));
}
function XS(t, e) {
  switch (Qh(e), e.tag) {
    case 1:
      return on(e.type) && gc(), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
    case 3:
      return $l(), Ce(rn), Ce(Nt), i0(), t = e.flags, t & 65536 && !(t & 128) ? (e.flags = t & -65537 | 128, e) : null;
    case 5:
      return r0(e), null;
    case 13:
      if (Ce(Ae), t = e.memoizedState, t !== null && t.dehydrated !== null) {
        if (e.alternate === null)
          throw Error($(340));
        Nl();
      }
      return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
    case 19:
      return Ce(Ae), null;
    case 4:
      return $l(), null;
    case 10:
      return Jh(e.type._context), null;
    case 22:
    case 23:
      return m0(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var su = !1, Pt = !1, GS = typeof WeakSet == "function" ? WeakSet : Set, H = null;
function ul(t, e) {
  var n = t.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Be(t, e, r);
      }
    else
      n.current = null;
}
function Rp(t, e, n) {
  try {
    n();
  } catch (r) {
    Be(t, e, r);
  }
}
var bg = !1;
function QS(t, e) {
  if (hp = dc, t = Py(), Xh(t)) {
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
          var l = 0, s = -1, a = -1, u = 0, c = 0, f = t, d = null;
          t:
            for (; ; ) {
              for (var p; f !== n || i !== 0 && f.nodeType !== 3 || (s = l + i), f !== o || r !== 0 && f.nodeType !== 3 || (a = l + r), f.nodeType === 3 && (l += f.nodeValue.length), (p = f.firstChild) !== null; )
                d = f, f = p;
              for (; ; ) {
                if (f === t)
                  break t;
                if (d === n && ++u === i && (s = l), d === o && ++c === r && (a = l), (p = f.nextSibling) !== null)
                  break;
                f = d, d = f.parentNode;
              }
              f = p;
            }
          n = s === -1 || a === -1 ? null : { start: s, end: a };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (mp = { focusedElem: t, selectionRange: n }, dc = !1, H = e; H !== null; )
    if (e = H, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
      t.return = e, H = t;
    else
      for (; H !== null; ) {
        e = H;
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
                  var h = m.memoizedProps, _ = m.memoizedState, v = e.stateNode, g = v.getSnapshotBeforeUpdate(e.elementType === e.type ? h : rr(e.type, h), _);
                  v.__reactInternalSnapshotBeforeUpdate = g;
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
                throw Error($(163));
            }
        } catch (w) {
          Be(e, e.return, w);
        }
        if (t = e.sibling, t !== null) {
          t.return = e.return, H = t;
          break;
        }
        H = e.return;
      }
  return m = bg, bg = !1, m;
}
function Ms(t, e, n) {
  var r = e.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
      if ((i.tag & t) === t) {
        var o = i.destroy;
        i.destroy = void 0, o !== void 0 && Rp(e, n, o);
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
function Np(t) {
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
function T_(t) {
  var e = t.alternate;
  e !== null && (t.alternate = null, T_(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && (delete e[Er], delete e[oa], delete e[yp], delete e[RS], delete e[NS])), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
}
function C_(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function Pg(t) {
  e:
    for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || C_(t.return))
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
function Ip(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6)
    t = t.stateNode, e ? n.nodeType === 8 ? n.parentNode.insertBefore(t, e) : n.insertBefore(t, e) : (n.nodeType === 8 ? (e = n.parentNode, e.insertBefore(t, n)) : (e = n, e.appendChild(t)), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = mc));
  else if (r !== 4 && (t = t.child, t !== null))
    for (Ip(t, e, n), t = t.sibling; t !== null; )
      Ip(t, e, n), t = t.sibling;
}
function $p(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6)
    t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t);
  else if (r !== 4 && (t = t.child, t !== null))
    for ($p(t, e, n), t = t.sibling; t !== null; )
      $p(t, e, n), t = t.sibling;
}
var vt = null, ir = !1;
function oi(t, e, n) {
  for (n = n.child; n !== null; )
    b_(t, e, n), n = n.sibling;
}
function b_(t, e, n) {
  if (br && typeof br.onCommitFiberUnmount == "function")
    try {
      br.onCommitFiberUnmount(Zc, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      Pt || ul(n, e);
    case 6:
      var r = vt, i = ir;
      vt = null, oi(t, e, n), vt = r, ir = i, vt !== null && (ir ? (t = vt, n = n.stateNode, t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n)) : vt.removeChild(n.stateNode));
      break;
    case 18:
      vt !== null && (ir ? (t = vt, n = n.stateNode, t.nodeType === 8 ? od(t.parentNode, n) : t.nodeType === 1 && od(t, n), ea(t)) : od(vt, n.stateNode));
      break;
    case 4:
      r = vt, i = ir, vt = n.stateNode.containerInfo, ir = !0, oi(t, e, n), vt = r, ir = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Pt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        i = r = r.next;
        do {
          var o = i, l = o.destroy;
          o = o.tag, l !== void 0 && (o & 2 || o & 4) && Rp(n, e, l), i = i.next;
        } while (i !== r);
      }
      oi(t, e, n);
      break;
    case 1:
      if (!Pt && (ul(n, e), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (s) {
          Be(n, e, s);
        }
      oi(t, e, n);
      break;
    case 21:
      oi(t, e, n);
      break;
    case 22:
      n.mode & 1 ? (Pt = (r = Pt) || n.memoizedState !== null, oi(t, e, n), Pt = r) : oi(t, e, n);
      break;
    default:
      oi(t, e, n);
  }
}
function Og(t) {
  var e = t.updateQueue;
  if (e !== null) {
    t.updateQueue = null;
    var n = t.stateNode;
    n === null && (n = t.stateNode = new GS()), e.forEach(function(r) {
      var i = iE.bind(null, t, r);
      n.has(r) || (n.add(r), r.then(i, i));
    });
  }
}
function tr(t, e) {
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
                vt = s.stateNode, ir = !1;
                break e;
              case 3:
                vt = s.stateNode.containerInfo, ir = !0;
                break e;
              case 4:
                vt = s.stateNode.containerInfo, ir = !0;
                break e;
            }
            s = s.return;
          }
        if (vt === null)
          throw Error($(160));
        b_(o, l, i), vt = null, ir = !1;
        var a = i.alternate;
        a !== null && (a.return = null), i.return = null;
      } catch (u) {
        Be(i, e, u);
      }
    }
  if (e.subtreeFlags & 12854)
    for (e = e.child; e !== null; )
      P_(e, t), e = e.sibling;
}
function P_(t, e) {
  var n = t.alternate, r = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (tr(e, t), _r(t), r & 4) {
        try {
          Ms(3, t, t.return), sf(3, t);
        } catch (h) {
          Be(t, t.return, h);
        }
        try {
          Ms(5, t, t.return);
        } catch (h) {
          Be(t, t.return, h);
        }
      }
      break;
    case 1:
      tr(e, t), _r(t), r & 512 && n !== null && ul(n, n.return);
      break;
    case 5:
      if (tr(e, t), _r(t), r & 512 && n !== null && ul(n, n.return), t.flags & 32) {
        var i = t.stateNode;
        try {
          qs(i, "");
        } catch (h) {
          Be(t, t.return, h);
        }
      }
      if (r & 4 && (i = t.stateNode, i != null)) {
        var o = t.memoizedProps, l = n !== null ? n.memoizedProps : o, s = t.type, a = t.updateQueue;
        if (t.updateQueue = null, a !== null)
          try {
            s === "input" && o.type === "radio" && o.name != null && Qv(i, o), ip(s, l);
            var u = ip(s, o);
            for (l = 0; l < a.length; l += 2) {
              var c = a[l], f = a[l + 1];
              c === "style" ? ey(i, f) : c === "dangerouslySetInnerHTML" ? Zv(i, f) : c === "children" ? qs(i, f) : $h(i, c, f, u);
            }
            switch (s) {
              case "input":
                Jd(i, o);
                break;
              case "textarea":
                qv(i, o);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var p = o.value;
                p != null ? gl(i, !!o.multiple, p, !1) : d !== !!o.multiple && (o.defaultValue != null ? gl(
                  i,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : gl(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[oa] = o;
          } catch (h) {
            Be(t, t.return, h);
          }
      }
      break;
    case 6:
      if (tr(e, t), _r(t), r & 4) {
        if (t.stateNode === null)
          throw Error($(162));
        i = t.stateNode, o = t.memoizedProps;
        try {
          i.nodeValue = o;
        } catch (h) {
          Be(t, t.return, h);
        }
      }
      break;
    case 3:
      if (tr(e, t), _r(t), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          ea(e.containerInfo);
        } catch (h) {
          Be(t, t.return, h);
        }
      break;
    case 4:
      tr(e, t), _r(t);
      break;
    case 13:
      tr(e, t), _r(t), i = t.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (p0 = Ge())), r & 4 && Og(t);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, t.mode & 1 ? (Pt = (u = Pt) || c, tr(e, t), Pt = u) : tr(e, t), _r(t), r & 8192) {
        if (u = t.memoizedState !== null, (t.stateNode.isHidden = u) && !c && t.mode & 1)
          for (H = t, c = t.child; c !== null; ) {
            for (f = H = c; H !== null; ) {
              switch (d = H, p = d.child, d.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ms(4, d, d.return);
                  break;
                case 1:
                  ul(d, d.return);
                  var m = d.stateNode;
                  if (typeof m.componentWillUnmount == "function") {
                    r = d, n = d.return;
                    try {
                      e = r, m.props = e.memoizedProps, m.state = e.memoizedState, m.componentWillUnmount();
                    } catch (h) {
                      Be(r, n, h);
                    }
                  }
                  break;
                case 5:
                  ul(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Rg(f);
                    continue;
                  }
              }
              p !== null ? (p.return = d, H = p) : Rg(f);
            }
            c = c.sibling;
          }
        e:
          for (c = null, f = t; ; ) {
            if (f.tag === 5) {
              if (c === null) {
                c = f;
                try {
                  i = f.stateNode, u ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (s = f.stateNode, a = f.memoizedProps.style, l = a != null && a.hasOwnProperty("display") ? a.display : null, s.style.display = Jv("display", l));
                } catch (h) {
                  Be(t, t.return, h);
                }
              }
            } else if (f.tag === 6) {
              if (c === null)
                try {
                  f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                } catch (h) {
                  Be(t, t.return, h);
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
      tr(e, t), _r(t), r & 4 && Og(t);
      break;
    case 21:
      break;
    default:
      tr(
        e,
        t
      ), _r(t);
  }
}
function _r(t) {
  var e = t.flags;
  if (e & 2) {
    try {
      e: {
        for (var n = t.return; n !== null; ) {
          if (C_(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error($(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (qs(i, ""), r.flags &= -33);
          var o = Pg(t);
          $p(t, o, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, s = Pg(t);
          Ip(t, s, l);
          break;
        default:
          throw Error($(161));
      }
    } catch (a) {
      Be(t, t.return, a);
    }
    t.flags &= -3;
  }
  e & 4096 && (t.flags &= -4097);
}
function qS(t, e, n) {
  H = t, O_(t);
}
function O_(t, e, n) {
  for (var r = (t.mode & 1) !== 0; H !== null; ) {
    var i = H, o = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || su;
      if (!l) {
        var s = i.alternate, a = s !== null && s.memoizedState !== null || Pt;
        s = su;
        var u = Pt;
        if (su = l, (Pt = a) && !u)
          for (H = i; H !== null; )
            l = H, a = l.child, l.tag === 22 && l.memoizedState !== null ? Ng(i) : a !== null ? (a.return = l, H = a) : Ng(i);
        for (; o !== null; )
          H = o, O_(o), o = o.sibling;
        H = i, su = s, Pt = u;
      }
      Mg(t);
    } else
      i.subtreeFlags & 8772 && o !== null ? (o.return = i, H = o) : Mg(t);
  }
}
function Mg(t) {
  for (; H !== null; ) {
    var e = H;
    if (e.flags & 8772) {
      var n = e.alternate;
      try {
        if (e.flags & 8772)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              Pt || sf(5, e);
              break;
            case 1:
              var r = e.stateNode;
              if (e.flags & 4 && !Pt)
                if (n === null)
                  r.componentDidMount();
                else {
                  var i = e.elementType === e.type ? n.memoizedProps : rr(e.type, n.memoizedProps);
                  r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var o = e.updateQueue;
              o !== null && pg(e, o, r);
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
                pg(e, l, n);
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
                    f !== null && ea(f);
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
              throw Error($(163));
          }
        Pt || e.flags & 512 && Np(e);
      } catch (d) {
        Be(e, e.return, d);
      }
    }
    if (e === t) {
      H = null;
      break;
    }
    if (n = e.sibling, n !== null) {
      n.return = e.return, H = n;
      break;
    }
    H = e.return;
  }
}
function Rg(t) {
  for (; H !== null; ) {
    var e = H;
    if (e === t) {
      H = null;
      break;
    }
    var n = e.sibling;
    if (n !== null) {
      n.return = e.return, H = n;
      break;
    }
    H = e.return;
  }
}
function Ng(t) {
  for (; H !== null; ) {
    var e = H;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var n = e.return;
          try {
            sf(4, e);
          } catch (a) {
            Be(e, n, a);
          }
          break;
        case 1:
          var r = e.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = e.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Be(e, i, a);
            }
          }
          var o = e.return;
          try {
            Np(e);
          } catch (a) {
            Be(e, o, a);
          }
          break;
        case 5:
          var l = e.return;
          try {
            Np(e);
          } catch (a) {
            Be(e, l, a);
          }
      }
    } catch (a) {
      Be(e, e.return, a);
    }
    if (e === t) {
      H = null;
      break;
    }
    var s = e.sibling;
    if (s !== null) {
      s.return = e.return, H = s;
      break;
    }
    H = e.return;
  }
}
var KS = Math.ceil, Cc = ni.ReactCurrentDispatcher, f0 = ni.ReactCurrentOwner, Wn = ni.ReactCurrentBatchConfig, me = 0, ft = null, et = null, wt = 0, yn = 0, cl = Wi(0), ot = 0, fa = null, Ro = 0, af = 0, d0 = 0, Rs = null, Jt = null, p0 = 0, Dl = 1 / 0, Lr = null, bc = !1, Ap = null, Oi = null, au = !1, gi = null, Pc = 0, Ns = 0, Dp = null, Uu = -1, Yu = 0;
function Wt() {
  return me & 6 ? Ge() : Uu !== -1 ? Uu : Uu = Ge();
}
function Mi(t) {
  return t.mode & 1 ? me & 2 && wt !== 0 ? wt & -wt : $S.transition !== null ? (Yu === 0 && (Yu = dy()), Yu) : (t = _e, t !== 0 || (t = window.event, t = t === void 0 ? 16 : _y(t.type)), t) : 1;
}
function cr(t, e, n, r) {
  if (50 < Ns)
    throw Ns = 0, Dp = null, Error($(185));
  Oa(t, n, r), (!(me & 2) || t !== ft) && (t === ft && (!(me & 2) && (af |= n), ot === 4 && hi(t, wt)), ln(t, r), n === 1 && me === 0 && !(e.mode & 1) && (Dl = Ge() + 500, rf && Vi()));
}
function ln(t, e) {
  var n = t.callbackNode;
  $k(t, e);
  var r = fc(t, t === ft ? wt : 0);
  if (r === 0)
    n !== null && Hm(n), t.callbackNode = null, t.callbackPriority = 0;
  else if (e = r & -r, t.callbackPriority !== e) {
    if (n != null && Hm(n), e === 1)
      t.tag === 0 ? IS(Ig.bind(null, t)) : Ly(Ig.bind(null, t)), OS(function() {
        !(me & 6) && Vi();
      }), n = null;
    else {
      switch (py(r)) {
        case 1:
          n = jh;
          break;
        case 4:
          n = cy;
          break;
        case 16:
          n = cc;
          break;
        case 536870912:
          n = fy;
          break;
        default:
          n = cc;
      }
      n = z_(n, M_.bind(null, t));
    }
    t.callbackPriority = e, t.callbackNode = n;
  }
}
function M_(t, e) {
  if (Uu = -1, Yu = 0, me & 6)
    throw Error($(327));
  var n = t.callbackNode;
  if (xl() && t.callbackNode !== n)
    return null;
  var r = fc(t, t === ft ? wt : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & t.expiredLanes || e)
    e = Oc(t, r);
  else {
    e = r;
    var i = me;
    me |= 2;
    var o = N_();
    (ft !== t || wt !== e) && (Lr = null, Dl = Ge() + 500, _o(t, e));
    do
      try {
        eE();
        break;
      } catch (s) {
        R_(t, s);
      }
    while (1);
    Zh(), Cc.current = o, me = i, et !== null ? e = 0 : (ft = null, wt = 0, e = ot);
  }
  if (e !== 0) {
    if (e === 2 && (i = up(t), i !== 0 && (r = i, e = zp(t, i))), e === 1)
      throw n = fa, _o(t, 0), hi(t, r), ln(t, Ge()), n;
    if (e === 6)
      hi(t, r);
    else {
      if (i = t.current.alternate, !(r & 30) && !ZS(i) && (e = Oc(t, r), e === 2 && (o = up(t), o !== 0 && (r = o, e = zp(t, o))), e === 1))
        throw n = fa, _o(t, 0), hi(t, r), ln(t, Ge()), n;
      switch (t.finishedWork = i, t.finishedLanes = r, e) {
        case 0:
        case 1:
          throw Error($(345));
        case 2:
          so(t, Jt, Lr);
          break;
        case 3:
          if (hi(t, r), (r & 130023424) === r && (e = p0 + 500 - Ge(), 10 < e)) {
            if (fc(t, 0) !== 0)
              break;
            if (i = t.suspendedLanes, (i & r) !== r) {
              Wt(), t.pingedLanes |= t.suspendedLanes & i;
              break;
            }
            t.timeoutHandle = vp(so.bind(null, t, Jt, Lr), e);
            break;
          }
          so(t, Jt, Lr);
          break;
        case 4:
          if (hi(t, r), (r & 4194240) === r)
            break;
          for (e = t.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - ur(r);
            o = 1 << l, l = e[l], l > i && (i = l), r &= ~o;
          }
          if (r = i, r = Ge() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * KS(r / 1960)) - r, 10 < r) {
            t.timeoutHandle = vp(so.bind(null, t, Jt, Lr), r);
            break;
          }
          so(t, Jt, Lr);
          break;
        case 5:
          so(t, Jt, Lr);
          break;
        default:
          throw Error($(329));
      }
    }
  }
  return ln(t, Ge()), t.callbackNode === n ? M_.bind(null, t) : null;
}
function zp(t, e) {
  var n = Rs;
  return t.current.memoizedState.isDehydrated && (_o(t, e).flags |= 256), t = Oc(t, e), t !== 2 && (e = Jt, Jt = n, e !== null && Lp(e)), t;
}
function Lp(t) {
  Jt === null ? Jt = t : Jt.push.apply(Jt, t);
}
function ZS(t) {
  for (var e = t; ; ) {
    if (e.flags & 16384) {
      var n = e.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r], o = i.getSnapshot;
          i = i.value;
          try {
            if (!dr(o(), i))
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
function hi(t, e) {
  for (e &= ~d0, e &= ~af, t.suspendedLanes |= e, t.pingedLanes &= ~e, t = t.expirationTimes; 0 < e; ) {
    var n = 31 - ur(e), r = 1 << n;
    t[n] = -1, e &= ~r;
  }
}
function Ig(t) {
  if (me & 6)
    throw Error($(327));
  xl();
  var e = fc(t, 0);
  if (!(e & 1))
    return ln(t, Ge()), null;
  var n = Oc(t, e);
  if (t.tag !== 0 && n === 2) {
    var r = up(t);
    r !== 0 && (e = r, n = zp(t, r));
  }
  if (n === 1)
    throw n = fa, _o(t, 0), hi(t, e), ln(t, Ge()), n;
  if (n === 6)
    throw Error($(345));
  return t.finishedWork = t.current.alternate, t.finishedLanes = e, so(t, Jt, Lr), ln(t, Ge()), null;
}
function h0(t, e) {
  var n = me;
  me |= 1;
  try {
    return t(e);
  } finally {
    me = n, me === 0 && (Dl = Ge() + 500, rf && Vi());
  }
}
function No(t) {
  gi !== null && gi.tag === 0 && !(me & 6) && xl();
  var e = me;
  me |= 1;
  var n = Wn.transition, r = _e;
  try {
    if (Wn.transition = null, _e = 1, t)
      return t();
  } finally {
    _e = r, Wn.transition = n, me = e, !(me & 6) && Vi();
  }
}
function m0() {
  yn = cl.current, Ce(cl);
}
function _o(t, e) {
  t.finishedWork = null, t.finishedLanes = 0;
  var n = t.timeoutHandle;
  if (n !== -1 && (t.timeoutHandle = -1, PS(n)), et !== null)
    for (n = et.return; n !== null; ) {
      var r = n;
      switch (Qh(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && gc();
          break;
        case 3:
          $l(), Ce(rn), Ce(Nt), i0();
          break;
        case 5:
          r0(r);
          break;
        case 4:
          $l();
          break;
        case 13:
          Ce(Ae);
          break;
        case 19:
          Ce(Ae);
          break;
        case 10:
          Jh(r.type._context);
          break;
        case 22:
        case 23:
          m0();
      }
      n = n.return;
    }
  if (ft = t, et = t = Ri(t.current, null), wt = yn = e, ot = 0, fa = null, d0 = af = Ro = 0, Jt = Rs = null, ho !== null) {
    for (e = 0; e < ho.length; e++)
      if (n = ho[e], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var i = r.next, o = n.pending;
        if (o !== null) {
          var l = o.next;
          o.next = i, r.next = l;
        }
        n.pending = r;
      }
    ho = null;
  }
  return t;
}
function R_(t, e) {
  do {
    var n = et;
    try {
      if (Zh(), Bu.current = Tc, Ec) {
        for (var r = Le.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), r = r.next;
        }
        Ec = !1;
      }
      if (Mo = 0, ct = rt = Le = null, Os = !1, aa = 0, f0.current = null, n === null || n.return === null) {
        ot = 1, fa = e, et = null;
        break;
      }
      e: {
        var o = t, l = n.return, s = n, a = e;
        if (e = wt, s.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var u = a, c = s, f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d ? (c.updateQueue = d.updateQueue, c.memoizedState = d.memoizedState, c.lanes = d.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var p = wg(l);
          if (p !== null) {
            p.flags &= -257, xg(p, l, s, o, e), p.mode & 1 && _g(o, u, e), e = p, a = u;
            var m = e.updateQueue;
            if (m === null) {
              var h = /* @__PURE__ */ new Set();
              h.add(a), e.updateQueue = h;
            } else
              m.add(a);
            break e;
          } else {
            if (!(e & 1)) {
              _g(o, u, e), g0();
              break e;
            }
            a = Error($(426));
          }
        } else if (Oe && s.mode & 1) {
          var _ = wg(l);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256), xg(_, l, s, o, e), qh(Al(a, s));
            break e;
          }
        }
        o = a = Al(a, s), ot !== 4 && (ot = 2), Rs === null ? Rs = [o] : Rs.push(o), o = l;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, e &= -e, o.lanes |= e;
              var v = h_(o, a, e);
              dg(o, v);
              break e;
            case 1:
              s = a;
              var g = o.type, y = o.stateNode;
              if (!(o.flags & 128) && (typeof g.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (Oi === null || !Oi.has(y)))) {
                o.flags |= 65536, e &= -e, o.lanes |= e;
                var w = m_(o, s, e);
                dg(o, w);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      $_(n);
    } catch (S) {
      e = S, et === n && n !== null && (et = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function N_() {
  var t = Cc.current;
  return Cc.current = Tc, t === null ? Tc : t;
}
function g0() {
  (ot === 0 || ot === 3 || ot === 2) && (ot = 4), ft === null || !(Ro & 268435455) && !(af & 268435455) || hi(ft, wt);
}
function Oc(t, e) {
  var n = me;
  me |= 2;
  var r = N_();
  (ft !== t || wt !== e) && (Lr = null, _o(t, e));
  do
    try {
      JS();
      break;
    } catch (i) {
      R_(t, i);
    }
  while (1);
  if (Zh(), me = n, Cc.current = r, et !== null)
    throw Error($(261));
  return ft = null, wt = 0, ot;
}
function JS() {
  for (; et !== null; )
    I_(et);
}
function eE() {
  for (; et !== null && !Tk(); )
    I_(et);
}
function I_(t) {
  var e = D_(t.alternate, t, yn);
  t.memoizedProps = t.pendingProps, e === null ? $_(t) : et = e, f0.current = null;
}
function $_(t) {
  var e = t;
  do {
    var n = e.alternate;
    if (t = e.return, e.flags & 32768) {
      if (n = XS(n, e), n !== null) {
        n.flags &= 32767, et = n;
        return;
      }
      if (t !== null)
        t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null;
      else {
        ot = 6, et = null;
        return;
      }
    } else if (n = YS(n, e, yn), n !== null) {
      et = n;
      return;
    }
    if (e = e.sibling, e !== null) {
      et = e;
      return;
    }
    et = e = t;
  } while (e !== null);
  ot === 0 && (ot = 5);
}
function so(t, e, n) {
  var r = _e, i = Wn.transition;
  try {
    Wn.transition = null, _e = 1, tE(t, e, n, r);
  } finally {
    Wn.transition = i, _e = r;
  }
  return null;
}
function tE(t, e, n, r) {
  do
    xl();
  while (gi !== null);
  if (me & 6)
    throw Error($(327));
  n = t.finishedWork;
  var i = t.finishedLanes;
  if (n === null)
    return null;
  if (t.finishedWork = null, t.finishedLanes = 0, n === t.current)
    throw Error($(177));
  t.callbackNode = null, t.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (Ak(t, o), t === ft && (et = ft = null, wt = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || au || (au = !0, z_(cc, function() {
    return xl(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Wn.transition, Wn.transition = null;
    var l = _e;
    _e = 1;
    var s = me;
    me |= 4, f0.current = null, QS(t, n), P_(n, t), xS(mp), dc = !!hp, mp = hp = null, t.current = n, qS(n), Ck(), me = s, _e = l, Wn.transition = o;
  } else
    t.current = n;
  if (au && (au = !1, gi = t, Pc = i), o = t.pendingLanes, o === 0 && (Oi = null), Ok(n.stateNode), ln(t, Ge()), e !== null)
    for (r = t.onRecoverableError, n = 0; n < e.length; n++)
      i = e[n], r(i.value, { componentStack: i.stack, digest: i.digest });
  if (bc)
    throw bc = !1, t = Ap, Ap = null, t;
  return Pc & 1 && t.tag !== 0 && xl(), o = t.pendingLanes, o & 1 ? t === Dp ? Ns++ : (Ns = 0, Dp = t) : Ns = 0, Vi(), null;
}
function xl() {
  if (gi !== null) {
    var t = py(Pc), e = Wn.transition, n = _e;
    try {
      if (Wn.transition = null, _e = 16 > t ? 16 : t, gi === null)
        var r = !1;
      else {
        if (t = gi, gi = null, Pc = 0, me & 6)
          throw Error($(331));
        var i = me;
        for (me |= 4, H = t.current; H !== null; ) {
          var o = H, l = o.child;
          if (H.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (H = u; H !== null; ) {
                  var c = H;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ms(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null)
                    f.return = c, H = f;
                  else
                    for (; H !== null; ) {
                      c = H;
                      var d = c.sibling, p = c.return;
                      if (T_(c), c === u) {
                        H = null;
                        break;
                      }
                      if (d !== null) {
                        d.return = p, H = d;
                        break;
                      }
                      H = p;
                    }
                }
              }
              var m = o.alternate;
              if (m !== null) {
                var h = m.child;
                if (h !== null) {
                  m.child = null;
                  do {
                    var _ = h.sibling;
                    h.sibling = null, h = _;
                  } while (h !== null);
                }
              }
              H = o;
            }
          }
          if (o.subtreeFlags & 2064 && l !== null)
            l.return = o, H = l;
          else
            e:
              for (; H !== null; ) {
                if (o = H, o.flags & 2048)
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ms(9, o, o.return);
                  }
                var v = o.sibling;
                if (v !== null) {
                  v.return = o.return, H = v;
                  break e;
                }
                H = o.return;
              }
        }
        var g = t.current;
        for (H = g; H !== null; ) {
          l = H;
          var y = l.child;
          if (l.subtreeFlags & 2064 && y !== null)
            y.return = l, H = y;
          else
            e:
              for (l = g; H !== null; ) {
                if (s = H, s.flags & 2048)
                  try {
                    switch (s.tag) {
                      case 0:
                      case 11:
                      case 15:
                        sf(9, s);
                    }
                  } catch (S) {
                    Be(s, s.return, S);
                  }
                if (s === l) {
                  H = null;
                  break e;
                }
                var w = s.sibling;
                if (w !== null) {
                  w.return = s.return, H = w;
                  break e;
                }
                H = s.return;
              }
        }
        if (me = i, Vi(), br && typeof br.onPostCommitFiberRoot == "function")
          try {
            br.onPostCommitFiberRoot(Zc, t);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      _e = n, Wn.transition = e;
    }
  }
  return !1;
}
function $g(t, e, n) {
  e = Al(n, e), e = h_(t, e, 1), t = Pi(t, e, 1), e = Wt(), t !== null && (Oa(t, 1, e), ln(t, e));
}
function Be(t, e, n) {
  if (t.tag === 3)
    $g(t, t, n);
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        $g(e, t, n);
        break;
      } else if (e.tag === 1) {
        var r = e.stateNode;
        if (typeof e.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Oi === null || !Oi.has(r))) {
          t = Al(n, t), t = m_(e, t, 1), e = Pi(e, t, 1), t = Wt(), e !== null && (Oa(e, 1, t), ln(e, t));
          break;
        }
      }
      e = e.return;
    }
}
function nE(t, e, n) {
  var r = t.pingCache;
  r !== null && r.delete(e), e = Wt(), t.pingedLanes |= t.suspendedLanes & n, ft === t && (wt & n) === n && (ot === 4 || ot === 3 && (wt & 130023424) === wt && 500 > Ge() - p0 ? _o(t, 0) : d0 |= n), ln(t, e);
}
function A_(t, e) {
  e === 0 && (t.mode & 1 ? (e = Za, Za <<= 1, !(Za & 130023424) && (Za = 4194304)) : e = 1);
  var n = Wt();
  t = Zr(t, e), t !== null && (Oa(t, e, n), ln(t, n));
}
function rE(t) {
  var e = t.memoizedState, n = 0;
  e !== null && (n = e.retryLane), A_(t, n);
}
function iE(t, e) {
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
      throw Error($(314));
  }
  r !== null && r.delete(e), A_(t, n);
}
var D_;
D_ = function(t, e, n) {
  if (t !== null)
    if (t.memoizedProps !== e.pendingProps || rn.current)
      nn = !0;
    else {
      if (!(t.lanes & n) && !(e.flags & 128))
        return nn = !1, US(t, e, n);
      nn = !!(t.flags & 131072);
    }
  else
    nn = !1, Oe && e.flags & 1048576 && jy(e, _c, e.index);
  switch (e.lanes = 0, e.tag) {
    case 2:
      var r = e.type;
      Vu(t, e), t = e.pendingProps;
      var i = Rl(e, Nt.current);
      wl(e, n), i = l0(null, e, r, t, i, n);
      var o = s0();
      return e.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (e.tag = 1, e.memoizedState = null, e.updateQueue = null, on(r) ? (o = !0, vc(e)) : o = !1, e.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, t0(e), i.updater = of, e.stateNode = i, i._reactInternals = e, Ep(e, r, t, n), e = bp(null, e, r, !0, o, n)) : (e.tag = 0, Oe && o && Gh(e), Dt(null, e, i, n), e = e.child), e;
    case 16:
      r = e.elementType;
      e: {
        switch (Vu(t, e), t = e.pendingProps, i = r._init, r = i(r._payload), e.type = r, i = e.tag = lE(r), t = rr(r, t), i) {
          case 0:
            e = Cp(null, e, r, t, n);
            break e;
          case 1:
            e = Eg(null, e, r, t, n);
            break e;
          case 11:
            e = kg(null, e, r, t, n);
            break e;
          case 14:
            e = Sg(null, e, r, rr(r.type, t), n);
            break e;
        }
        throw Error($(
          306,
          r,
          ""
        ));
      }
      return e;
    case 0:
      return r = e.type, i = e.pendingProps, i = e.elementType === r ? i : rr(r, i), Cp(t, e, r, i, n);
    case 1:
      return r = e.type, i = e.pendingProps, i = e.elementType === r ? i : rr(r, i), Eg(t, e, r, i, n);
    case 3:
      e: {
        if (__(e), t === null)
          throw Error($(387));
        r = e.pendingProps, o = e.memoizedState, i = o.element, Wy(t, e), kc(e, r, null, n);
        var l = e.memoizedState;
        if (r = l.element, o.isDehydrated)
          if (o = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, e.updateQueue.baseState = o, e.memoizedState = o, e.flags & 256) {
            i = Al(Error($(423)), e), e = Tg(t, e, r, n, i);
            break e;
          } else if (r !== i) {
            i = Al(Error($(424)), e), e = Tg(t, e, r, n, i);
            break e;
          } else
            for (Sn = bi(e.stateNode.containerInfo.firstChild), En = e, Oe = !0, or = null, n = Xy(e, null, r, n), e.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Nl(), r === i) {
            e = Jr(t, e, n);
            break e;
          }
          Dt(t, e, r, n);
        }
        e = e.child;
      }
      return e;
    case 5:
      return Gy(e), t === null && xp(e), r = e.type, i = e.pendingProps, o = t !== null ? t.memoizedProps : null, l = i.children, gp(r, i) ? l = null : o !== null && gp(r, o) && (e.flags |= 32), y_(t, e), Dt(t, e, l, n), e.child;
    case 6:
      return t === null && xp(e), null;
    case 13:
      return w_(t, e, n);
    case 4:
      return n0(e, e.stateNode.containerInfo), r = e.pendingProps, t === null ? e.child = Il(e, null, r, n) : Dt(t, e, r, n), e.child;
    case 11:
      return r = e.type, i = e.pendingProps, i = e.elementType === r ? i : rr(r, i), kg(t, e, r, i, n);
    case 7:
      return Dt(t, e, e.pendingProps, n), e.child;
    case 8:
      return Dt(t, e, e.pendingProps.children, n), e.child;
    case 12:
      return Dt(t, e, e.pendingProps.children, n), e.child;
    case 10:
      e: {
        if (r = e.type._context, i = e.pendingProps, o = e.memoizedProps, l = i.value, Se(wc, r._currentValue), r._currentValue = l, o !== null)
          if (dr(o.value, l)) {
            if (o.children === i.children && !rn.current) {
              e = Jr(t, e, n);
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
                      a = Gr(-1, n & -n), a.tag = 2;
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null ? a.next = a : (a.next = c.next, c.next = a), u.pending = a;
                      }
                    }
                    o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), kp(
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
                  throw Error($(341));
                l.lanes |= n, s = l.alternate, s !== null && (s.lanes |= n), kp(l, n, e), l = o.sibling;
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
        Dt(t, e, i.children, n), e = e.child;
      }
      return e;
    case 9:
      return i = e.type, r = e.pendingProps.children, wl(e, n), i = Un(i), r = r(i), e.flags |= 1, Dt(t, e, r, n), e.child;
    case 14:
      return r = e.type, i = rr(r, e.pendingProps), i = rr(r.type, i), Sg(t, e, r, i, n);
    case 15:
      return g_(t, e, e.type, e.pendingProps, n);
    case 17:
      return r = e.type, i = e.pendingProps, i = e.elementType === r ? i : rr(r, i), Vu(t, e), e.tag = 1, on(r) ? (t = !0, vc(e)) : t = !1, wl(e, n), Uy(e, r, i), Ep(e, r, i, n), bp(null, e, r, !0, t, n);
    case 19:
      return x_(t, e, n);
    case 22:
      return v_(t, e, n);
  }
  throw Error($(156, e.tag));
};
function z_(t, e) {
  return uy(t, e);
}
function oE(t, e, n, r) {
  this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function jn(t, e, n, r) {
  return new oE(t, e, n, r);
}
function v0(t) {
  return t = t.prototype, !(!t || !t.isReactComponent);
}
function lE(t) {
  if (typeof t == "function")
    return v0(t) ? 1 : 0;
  if (t != null) {
    if (t = t.$$typeof, t === Dh)
      return 11;
    if (t === zh)
      return 14;
  }
  return 2;
}
function Ri(t, e) {
  var n = t.alternate;
  return n === null ? (n = jn(t.tag, e, t.key, t.mode), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 14680064, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n;
}
function Xu(t, e, n, r, i, o) {
  var l = 2;
  if (r = t, typeof t == "function")
    v0(t) && (l = 1);
  else if (typeof t == "string")
    l = 5;
  else
    e:
      switch (t) {
        case el:
          return wo(n.children, i, o, e);
        case Ah:
          l = 8, i |= 8;
          break;
        case Gd:
          return t = jn(12, n, e, i | 2), t.elementType = Gd, t.lanes = o, t;
        case Qd:
          return t = jn(13, n, e, i), t.elementType = Qd, t.lanes = o, t;
        case qd:
          return t = jn(19, n, e, i), t.elementType = qd, t.lanes = o, t;
        case Yv:
          return uf(n, i, o, e);
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case Vv:
                l = 10;
                break e;
              case Uv:
                l = 9;
                break e;
              case Dh:
                l = 11;
                break e;
              case zh:
                l = 14;
                break e;
              case fi:
                l = 16, r = null;
                break e;
            }
          throw Error($(130, t == null ? t : typeof t, ""));
      }
  return e = jn(l, n, e, i), e.elementType = t, e.type = r, e.lanes = o, e;
}
function wo(t, e, n, r) {
  return t = jn(7, t, r, e), t.lanes = n, t;
}
function uf(t, e, n, r) {
  return t = jn(22, t, r, e), t.elementType = Yv, t.lanes = n, t.stateNode = { isHidden: !1 }, t;
}
function pd(t, e, n) {
  return t = jn(6, t, null, e), t.lanes = n, t;
}
function hd(t, e, n) {
  return e = jn(4, t.children !== null ? t.children : [], t.key, e), e.lanes = n, e.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }, e;
}
function sE(t, e, n, r, i) {
  this.tag = e, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Gf(0), this.expirationTimes = Gf(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Gf(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function y0(t, e, n, r, i, o, l, s, a) {
  return t = new sE(t, e, n, s, a), e === 1 ? (e = 1, o === !0 && (e |= 8)) : e = 0, o = jn(3, null, null, e), t.current = o, o.stateNode = t, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, t0(o), t;
}
function aE(t, e, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Jo, key: r == null ? null : "" + r, children: t, containerInfo: e, implementation: n };
}
function L_(t) {
  if (!t)
    return zi;
  t = t._reactInternals;
  e: {
    if (Fo(t) !== t || t.tag !== 1)
      throw Error($(170));
    var e = t;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break e;
        case 1:
          if (on(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error($(171));
  }
  if (t.tag === 1) {
    var n = t.type;
    if (on(n))
      return zy(t, n, e);
  }
  return e;
}
function j_(t, e, n, r, i, o, l, s, a) {
  return t = y0(n, r, !0, t, i, o, l, s, a), t.context = L_(null), n = t.current, r = Wt(), i = Mi(n), o = Gr(r, i), o.callback = e ?? null, Pi(n, o, i), t.current.lanes = i, Oa(t, i, r), ln(t, r), t;
}
function cf(t, e, n, r) {
  var i = e.current, o = Wt(), l = Mi(i);
  return n = L_(n), e.context === null ? e.context = n : e.pendingContext = n, e = Gr(o, l), e.payload = { element: t }, r = r === void 0 ? null : r, r !== null && (e.callback = r), t = Pi(i, e, l), t !== null && (cr(t, i, l, o), Hu(t, i, l)), l;
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
function Ag(t, e) {
  if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
    var n = t.retryLane;
    t.retryLane = n !== 0 && n < e ? n : e;
  }
}
function _0(t, e) {
  Ag(t, e), (t = t.alternate) && Ag(t, e);
}
function uE() {
  return null;
}
var F_ = typeof reportError == "function" ? reportError : function(t) {
  console.error(t);
};
function w0(t) {
  this._internalRoot = t;
}
ff.prototype.render = w0.prototype.render = function(t) {
  var e = this._internalRoot;
  if (e === null)
    throw Error($(409));
  cf(t, e, null, null);
};
ff.prototype.unmount = w0.prototype.unmount = function() {
  var t = this._internalRoot;
  if (t !== null) {
    this._internalRoot = null;
    var e = t.containerInfo;
    No(function() {
      cf(null, t, null, null);
    }), e[Kr] = null;
  }
};
function ff(t) {
  this._internalRoot = t;
}
ff.prototype.unstable_scheduleHydration = function(t) {
  if (t) {
    var e = gy();
    t = { blockedOn: null, target: t, priority: e };
    for (var n = 0; n < pi.length && e !== 0 && e < pi[n].priority; n++)
      ;
    pi.splice(n, 0, t), n === 0 && yy(t);
  }
};
function x0(t) {
  return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
}
function df(t) {
  return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "));
}
function Dg() {
}
function cE(t, e, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var u = Mc(l);
        o.call(u);
      };
    }
    var l = j_(e, r, t, 0, null, !1, !1, "", Dg);
    return t._reactRootContainer = l, t[Kr] = l.current, ra(t.nodeType === 8 ? t.parentNode : t), No(), l;
  }
  for (; i = t.lastChild; )
    t.removeChild(i);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var u = Mc(a);
      s.call(u);
    };
  }
  var a = y0(t, 0, !1, null, null, !1, !1, "", Dg);
  return t._reactRootContainer = a, t[Kr] = a.current, ra(t.nodeType === 8 ? t.parentNode : t), No(function() {
    cf(e, a, n, r);
  }), a;
}
function pf(t, e, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var l = o;
    if (typeof i == "function") {
      var s = i;
      i = function() {
        var a = Mc(l);
        s.call(a);
      };
    }
    cf(e, l, t, i);
  } else
    l = cE(n, e, t, i, r);
  return Mc(l);
}
hy = function(t) {
  switch (t.tag) {
    case 3:
      var e = t.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var n = ms(e.pendingLanes);
        n !== 0 && (Fh(e, n | 1), ln(e, Ge()), !(me & 6) && (Dl = Ge() + 500, Vi()));
      }
      break;
    case 13:
      No(function() {
        var r = Zr(t, 1);
        if (r !== null) {
          var i = Wt();
          cr(r, t, 1, i);
        }
      }), _0(t, 1);
  }
};
Hh = function(t) {
  if (t.tag === 13) {
    var e = Zr(t, 134217728);
    if (e !== null) {
      var n = Wt();
      cr(e, t, 134217728, n);
    }
    _0(t, 134217728);
  }
};
my = function(t) {
  if (t.tag === 13) {
    var e = Mi(t), n = Zr(t, e);
    if (n !== null) {
      var r = Wt();
      cr(n, t, e, r);
    }
    _0(t, e);
  }
};
gy = function() {
  return _e;
};
vy = function(t, e) {
  var n = _e;
  try {
    return _e = t, e();
  } finally {
    _e = n;
  }
};
lp = function(t, e, n) {
  switch (e) {
    case "input":
      if (Jd(t, n), e = n.name, n.type === "radio" && e != null) {
        for (n = t; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'), e = 0; e < n.length; e++) {
          var r = n[e];
          if (r !== t && r.form === t.form) {
            var i = nf(r);
            if (!i)
              throw Error($(90));
            Gv(r), Jd(r, i);
          }
        }
      }
      break;
    case "textarea":
      qv(t, n);
      break;
    case "select":
      e = n.value, e != null && gl(t, !!n.multiple, e, !1);
  }
};
ry = h0;
iy = No;
var fE = { usingClientEntryPoint: !1, Events: [Ra, il, nf, ty, ny, h0] }, ls = { findFiberByHostInstance: po, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, dE = { bundleType: ls.bundleType, version: ls.version, rendererPackageName: ls.rendererPackageName, rendererConfig: ls.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ni.ReactCurrentDispatcher, findHostInstanceByFiber: function(t) {
  return t = sy(t), t === null ? null : t.stateNode;
}, findFiberByHostInstance: ls.findFiberByHostInstance || uE, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var uu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!uu.isDisabled && uu.supportsFiber)
    try {
      Zc = uu.inject(dE), br = uu;
    } catch {
    }
}
Pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fE;
Pn.createPortal = function(t, e) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!x0(e))
    throw Error($(200));
  return aE(t, e, null, n);
};
Pn.createRoot = function(t, e) {
  if (!x0(t))
    throw Error($(299));
  var n = !1, r = "", i = F_;
  return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (r = e.identifierPrefix), e.onRecoverableError !== void 0 && (i = e.onRecoverableError)), e = y0(t, 1, !1, null, null, n, !1, r, i), t[Kr] = e.current, ra(t.nodeType === 8 ? t.parentNode : t), new w0(e);
};
Pn.findDOMNode = function(t) {
  if (t == null)
    return null;
  if (t.nodeType === 1)
    return t;
  var e = t._reactInternals;
  if (e === void 0)
    throw typeof t.render == "function" ? Error($(188)) : (t = Object.keys(t).join(","), Error($(268, t)));
  return t = sy(e), t = t === null ? null : t.stateNode, t;
};
Pn.flushSync = function(t) {
  return No(t);
};
Pn.hydrate = function(t, e, n) {
  if (!df(e))
    throw Error($(200));
  return pf(null, t, e, !0, n);
};
Pn.hydrateRoot = function(t, e, n) {
  if (!x0(t))
    throw Error($(405));
  var r = n != null && n.hydratedSources || null, i = !1, o = "", l = F_;
  if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), e = j_(e, null, t, 1, n ?? null, i, !1, o, l), t[Kr] = e.current, ra(t), r)
    for (t = 0; t < r.length; t++)
      n = r[t], i = n._getVersion, i = i(n._source), e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [n, i] : e.mutableSourceEagerHydrationData.push(
        n,
        i
      );
  return new ff(e);
};
Pn.render = function(t, e, n) {
  if (!df(e))
    throw Error($(200));
  return pf(null, t, e, !1, n);
};
Pn.unmountComponentAtNode = function(t) {
  if (!df(t))
    throw Error($(40));
  return t._reactRootContainer ? (No(function() {
    pf(null, null, t, !1, function() {
      t._reactRootContainer = null, t[Kr] = null;
    });
  }), !0) : !1;
};
Pn.unstable_batchedUpdates = h0;
Pn.unstable_renderSubtreeIntoContainer = function(t, e, n, r) {
  if (!df(n))
    throw Error($(200));
  if (t == null || t._reactInternals === void 0)
    throw Error($(38));
  return pf(t, e, n, !1, r);
};
Pn.version = "18.2.0-next-9e3b772b8-20220608";
function H_() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(H_);
    } catch (t) {
      console.error(t);
    }
}
H_(), jv.exports = Pn;
var k0 = jv.exports, zg = k0;
Yd.createRoot = zg.createRoot, Yd.hydrateRoot = zg.hydrateRoot;
var S0 = $a(), K = (t) => Ia(t, S0), E0 = $a();
K.write = (t) => Ia(t, E0);
var hf = $a();
K.onStart = (t) => Ia(t, hf);
var T0 = $a();
K.onFrame = (t) => Ia(t, T0);
var C0 = $a();
K.onFinish = (t) => Ia(t, C0);
var kl = [];
K.setTimeout = (t, e) => {
  let n = K.now() + e, r = () => {
    let o = kl.findIndex((l) => l.cancel == r);
    ~o && kl.splice(o, 1), yi -= ~o ? 1 : 0;
  }, i = { time: n, handler: t, cancel: r };
  return kl.splice(B_(n), 0, i), yi += 1, W_(), i;
};
var B_ = (t) => ~(~kl.findIndex((e) => e.time > t) || ~kl.length);
K.cancel = (t) => {
  hf.delete(t), T0.delete(t), C0.delete(t), S0.delete(t), E0.delete(t);
};
K.sync = (t) => {
  jp = !0, K.batchedUpdates(t), jp = !1;
};
K.throttle = (t) => {
  let e;
  function n() {
    try {
      t(...e);
    } finally {
      e = null;
    }
  }
  function r(...i) {
    e = i, K.onStart(n);
  }
  return r.handler = t, r.cancel = () => {
    hf.delete(n), e = null;
  }, r;
};
var b0 = typeof window < "u" ? window.requestAnimationFrame : () => {
};
K.use = (t) => b0 = t;
K.now = typeof performance < "u" ? () => performance.now() : Date.now;
K.batchedUpdates = (t) => t();
K.catch = console.error;
K.frameLoop = "always";
K.advance = () => {
  K.frameLoop !== "demand" ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : U_();
};
var vi = -1, yi = 0, jp = !1;
function Ia(t, e) {
  jp ? (e.delete(t), t(0)) : (e.add(t), W_());
}
function W_() {
  vi < 0 && (vi = 0, K.frameLoop !== "demand" && b0(V_));
}
function pE() {
  vi = -1;
}
function V_() {
  ~vi && (b0(V_), K.batchedUpdates(U_));
}
function U_() {
  let t = vi;
  vi = K.now();
  let e = B_(vi);
  if (e && (Y_(kl.splice(0, e), (n) => n.handler()), yi -= e), !yi) {
    pE();
    return;
  }
  hf.flush(), S0.flush(t ? Math.min(64, vi - t) : 16.667), T0.flush(), E0.flush(), C0.flush();
}
function $a() {
  let t = /* @__PURE__ */ new Set(), e = t;
  return { add(n) {
    yi += e == t && !t.has(n) ? 1 : 0, t.add(n);
  }, delete(n) {
    return yi -= e == t && t.has(n) ? 1 : 0, t.delete(n);
  }, flush(n) {
    e.size && (t = /* @__PURE__ */ new Set(), yi -= e.size, Y_(e, (r) => r(n) && t.add(r)), yi += t.size, e = t);
  } };
}
function Y_(t, e) {
  t.forEach((n) => {
    try {
      e(n);
    } catch (r) {
      K.catch(r);
    }
  });
}
var hE = Object.defineProperty, mE = (t, e) => {
  for (var n in e)
    hE(t, n, { get: e[n], enumerable: !0 });
}, pr = {};
mE(pr, { assign: () => vE, colors: () => Ni, createStringInterpolator: () => O0, skipAnimation: () => G_, to: () => X_, willAdvance: () => M0 });
function Fp() {
}
var gE = (t, e, n) => Object.defineProperty(t, e, { value: n, writable: !0, configurable: !0 }), I = { arr: Array.isArray, obj: (t) => !!t && t.constructor.name === "Object", fun: (t) => typeof t == "function", str: (t) => typeof t == "string", num: (t) => typeof t == "number", und: (t) => t === void 0 };
function jr(t, e) {
  if (I.arr(t)) {
    if (!I.arr(e) || t.length !== e.length)
      return !1;
    for (let n = 0; n < t.length; n++)
      if (t[n] !== e[n])
        return !1;
    return !0;
  }
  return t === e;
}
var Q = (t, e) => t.forEach(e);
function Rr(t, e, n) {
  if (I.arr(t)) {
    for (let r = 0; r < t.length; r++)
      e.call(n, t[r], `${r}`);
    return;
  }
  for (let r in t)
    t.hasOwnProperty(r) && e.call(n, t[r], r);
}
var Bt = (t) => I.und(t) ? [] : I.arr(t) ? t : [t];
function Is(t, e) {
  if (t.size) {
    let n = Array.from(t);
    t.clear(), Q(n, e);
  }
}
var vs = (t, ...e) => Is(t, (n) => n(...e)), P0 = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent), O0, X_, Ni = null, G_ = !1, M0 = Fp, vE = (t) => {
  t.to && (X_ = t.to), t.now && (K.now = t.now), t.colors !== void 0 && (Ni = t.colors), t.skipAnimation != null && (G_ = t.skipAnimation), t.createStringInterpolator && (O0 = t.createStringInterpolator), t.requestAnimationFrame && K.use(t.requestAnimationFrame), t.batchedUpdates && (K.batchedUpdates = t.batchedUpdates), t.willAdvance && (M0 = t.willAdvance), t.frameLoop && (K.frameLoop = t.frameLoop);
}, $s = /* @__PURE__ */ new Set(), Ln = [], md = [], Rc = 0, mf = { get idle() {
  return !$s.size && !Ln.length;
}, start(t) {
  Rc > t.priority ? ($s.add(t), K.onStart(yE)) : (Q_(t), K(Hp));
}, advance: Hp, sort(t) {
  if (Rc)
    K.onFrame(() => mf.sort(t));
  else {
    let e = Ln.indexOf(t);
    ~e && (Ln.splice(e, 1), q_(t));
  }
}, clear() {
  Ln = [], $s.clear();
} };
function yE() {
  $s.forEach(Q_), $s.clear(), K(Hp);
}
function Q_(t) {
  Ln.includes(t) || q_(t);
}
function q_(t) {
  Ln.splice(_E(Ln, (e) => e.priority > t.priority), 0, t);
}
function Hp(t) {
  let e = md;
  for (let n = 0; n < Ln.length; n++) {
    let r = Ln[n];
    Rc = r.priority, r.idle || (M0(r), r.advance(t), r.idle || e.push(r));
  }
  return Rc = 0, md = Ln, md.length = 0, Ln = e, Ln.length > 0;
}
function _E(t, e) {
  let n = t.findIndex(e);
  return n < 0 ? t.length : n;
}
var wE = (t, e, n) => Math.min(Math.max(n, t), e), xE = { transparent: 0, aliceblue: 4042850303, antiquewhite: 4209760255, aqua: 16777215, aquamarine: 2147472639, azure: 4043309055, beige: 4126530815, bisque: 4293182719, black: 255, blanchedalmond: 4293643775, blue: 65535, blueviolet: 2318131967, brown: 2771004159, burlywood: 3736635391, burntsienna: 3934150143, cadetblue: 1604231423, chartreuse: 2147418367, chocolate: 3530104575, coral: 4286533887, cornflowerblue: 1687547391, cornsilk: 4294499583, crimson: 3692313855, cyan: 16777215, darkblue: 35839, darkcyan: 9145343, darkgoldenrod: 3095792639, darkgray: 2846468607, darkgreen: 6553855, darkgrey: 2846468607, darkkhaki: 3182914559, darkmagenta: 2332068863, darkolivegreen: 1433087999, darkorange: 4287365375, darkorchid: 2570243327, darkred: 2332033279, darksalmon: 3918953215, darkseagreen: 2411499519, darkslateblue: 1211993087, darkslategray: 793726975, darkslategrey: 793726975, darkturquoise: 13554175, darkviolet: 2483082239, deeppink: 4279538687, deepskyblue: 12582911, dimgray: 1768516095, dimgrey: 1768516095, dodgerblue: 512819199, firebrick: 2988581631, floralwhite: 4294635775, forestgreen: 579543807, fuchsia: 4278255615, gainsboro: 3705462015, ghostwhite: 4177068031, gold: 4292280575, goldenrod: 3668254975, gray: 2155905279, green: 8388863, greenyellow: 2919182335, grey: 2155905279, honeydew: 4043305215, hotpink: 4285117695, indianred: 3445382399, indigo: 1258324735, ivory: 4294963455, khaki: 4041641215, lavender: 3873897215, lavenderblush: 4293981695, lawngreen: 2096890111, lemonchiffon: 4294626815, lightblue: 2916673279, lightcoral: 4034953471, lightcyan: 3774873599, lightgoldenrodyellow: 4210742015, lightgray: 3553874943, lightgreen: 2431553791, lightgrey: 3553874943, lightpink: 4290167295, lightsalmon: 4288707327, lightseagreen: 548580095, lightskyblue: 2278488831, lightslategray: 2005441023, lightslategrey: 2005441023, lightsteelblue: 2965692159, lightyellow: 4294959359, lime: 16711935, limegreen: 852308735, linen: 4210091775, magenta: 4278255615, maroon: 2147483903, mediumaquamarine: 1724754687, mediumblue: 52735, mediumorchid: 3126187007, mediumpurple: 2473647103, mediumseagreen: 1018393087, mediumslateblue: 2070474495, mediumspringgreen: 16423679, mediumturquoise: 1221709055, mediumvioletred: 3340076543, midnightblue: 421097727, mintcream: 4127193855, mistyrose: 4293190143, moccasin: 4293178879, navajowhite: 4292783615, navy: 33023, oldlace: 4260751103, olive: 2155872511, olivedrab: 1804477439, orange: 4289003775, orangered: 4282712319, orchid: 3664828159, palegoldenrod: 4008225535, palegreen: 2566625535, paleturquoise: 2951671551, palevioletred: 3681588223, papayawhip: 4293907967, peachpuff: 4292524543, peru: 3448061951, pink: 4290825215, plum: 3718307327, powderblue: 2967529215, purple: 2147516671, rebeccapurple: 1714657791, red: 4278190335, rosybrown: 3163525119, royalblue: 1097458175, saddlebrown: 2336560127, salmon: 4202722047, sandybrown: 4104413439, seagreen: 780883967, seashell: 4294307583, sienna: 2689740287, silver: 3233857791, skyblue: 2278484991, slateblue: 1784335871, slategray: 1887473919, slategrey: 1887473919, snow: 4294638335, springgreen: 16744447, steelblue: 1182971135, tan: 3535047935, teal: 8421631, thistle: 3636451583, tomato: 4284696575, turquoise: 1088475391, violet: 4001558271, wheat: 4125012991, white: 4294967295, whitesmoke: 4126537215, yellow: 4294902015, yellowgreen: 2597139199 }, ar = "[-+]?\\d*\\.?\\d+", Nc = ar + "%";
function gf(...t) {
  return "\\(\\s*(" + t.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var kE = new RegExp("rgb" + gf(ar, ar, ar)), SE = new RegExp("rgba" + gf(ar, ar, ar, ar)), EE = new RegExp("hsl" + gf(ar, Nc, Nc)), TE = new RegExp("hsla" + gf(ar, Nc, Nc, ar)), CE = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, bE = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, PE = /^#([0-9a-fA-F]{6})$/, OE = /^#([0-9a-fA-F]{8})$/;
function ME(t) {
  let e;
  return typeof t == "number" ? t >>> 0 === t && t >= 0 && t <= 4294967295 ? t : null : (e = PE.exec(t)) ? parseInt(e[1] + "ff", 16) >>> 0 : Ni && Ni[t] !== void 0 ? Ni[t] : (e = kE.exec(t)) ? (Xo(e[1]) << 24 | Xo(e[2]) << 16 | Xo(e[3]) << 8 | 255) >>> 0 : (e = SE.exec(t)) ? (Xo(e[1]) << 24 | Xo(e[2]) << 16 | Xo(e[3]) << 8 | Fg(e[4])) >>> 0 : (e = CE.exec(t)) ? parseInt(e[1] + e[1] + e[2] + e[2] + e[3] + e[3] + "ff", 16) >>> 0 : (e = OE.exec(t)) ? parseInt(e[1], 16) >>> 0 : (e = bE.exec(t)) ? parseInt(e[1] + e[1] + e[2] + e[2] + e[3] + e[3] + e[4] + e[4], 16) >>> 0 : (e = EE.exec(t)) ? (Lg(jg(e[1]), cu(e[2]), cu(e[3])) | 255) >>> 0 : (e = TE.exec(t)) ? (Lg(jg(e[1]), cu(e[2]), cu(e[3])) | Fg(e[4])) >>> 0 : null;
}
function gd(t, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
}
function Lg(t, e, n) {
  let r = n < 0.5 ? n * (1 + e) : n + e - n * e, i = 2 * n - r, o = gd(i, r, t + 1 / 3), l = gd(i, r, t), s = gd(i, r, t - 1 / 3);
  return Math.round(o * 255) << 24 | Math.round(l * 255) << 16 | Math.round(s * 255) << 8;
}
function Xo(t) {
  let e = parseInt(t, 10);
  return e < 0 ? 0 : e > 255 ? 255 : e;
}
function jg(t) {
  return (parseFloat(t) % 360 + 360) % 360 / 360;
}
function Fg(t) {
  let e = parseFloat(t);
  return e < 0 ? 0 : e > 1 ? 255 : Math.round(e * 255);
}
function cu(t) {
  let e = parseFloat(t);
  return e < 0 ? 0 : e > 100 ? 1 : e / 100;
}
function Hg(t) {
  let e = ME(t);
  if (e === null)
    return t;
  e = e || 0;
  let n = (e & 4278190080) >>> 24, r = (e & 16711680) >>> 16, i = (e & 65280) >>> 8, o = (e & 255) / 255;
  return `rgba(${n}, ${r}, ${i}, ${o})`;
}
var da = (t, e, n) => {
  if (I.fun(t))
    return t;
  if (I.arr(t))
    return da({ range: t, output: e, extrapolate: n });
  if (I.str(t.output[0]))
    return O0(t);
  let r = t, i = r.output, o = r.range || [0, 1], l = r.extrapolateLeft || r.extrapolate || "extend", s = r.extrapolateRight || r.extrapolate || "extend", a = r.easing || ((u) => u);
  return (u) => {
    let c = NE(u, o);
    return RE(u, o[c], o[c + 1], i[c], i[c + 1], a, l, s, r.map);
  };
};
function RE(t, e, n, r, i, o, l, s, a) {
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
function NE(t, e) {
  for (var n = 1; n < e.length - 1 && !(e[n] >= t); ++n)
    ;
  return n - 1;
}
var IE = (t, e = "end") => (n) => {
  n = e === "end" ? Math.min(n, 0.999) : Math.max(n, 1e-3);
  let r = n * t, i = e === "end" ? Math.floor(r) : Math.ceil(r);
  return wE(0, 1, i / t);
}, Ic = 1.70158, fu = Ic * 1.525, Bg = Ic + 1, Wg = 2 * Math.PI / 3, Vg = 2 * Math.PI / 4.5, du = (t) => t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375, R0 = { linear: (t) => t, easeInQuad: (t) => t * t, easeOutQuad: (t) => 1 - (1 - t) * (1 - t), easeInOutQuad: (t) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2, easeInCubic: (t) => t * t * t, easeOutCubic: (t) => 1 - Math.pow(1 - t, 3), easeInOutCubic: (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2, easeInQuart: (t) => t * t * t * t, easeOutQuart: (t) => 1 - Math.pow(1 - t, 4), easeInOutQuart: (t) => t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2, easeInQuint: (t) => t * t * t * t * t, easeOutQuint: (t) => 1 - Math.pow(1 - t, 5), easeInOutQuint: (t) => t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2, easeInSine: (t) => 1 - Math.cos(t * Math.PI / 2), easeOutSine: (t) => Math.sin(t * Math.PI / 2), easeInOutSine: (t) => -(Math.cos(Math.PI * t) - 1) / 2, easeInExpo: (t) => t === 0 ? 0 : Math.pow(2, 10 * t - 10), easeOutExpo: (t) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t), easeInOutExpo: (t) => t === 0 ? 0 : t === 1 ? 1 : t < 0.5 ? Math.pow(2, 20 * t - 10) / 2 : (2 - Math.pow(2, -20 * t + 10)) / 2, easeInCirc: (t) => 1 - Math.sqrt(1 - Math.pow(t, 2)), easeOutCirc: (t) => Math.sqrt(1 - Math.pow(t - 1, 2)), easeInOutCirc: (t) => t < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * t, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * t + 2, 2)) + 1) / 2, easeInBack: (t) => Bg * t * t * t - Ic * t * t, easeOutBack: (t) => 1 + Bg * Math.pow(t - 1, 3) + Ic * Math.pow(t - 1, 2), easeInOutBack: (t) => t < 0.5 ? Math.pow(2 * t, 2) * ((fu + 1) * 2 * t - fu) / 2 : (Math.pow(2 * t - 2, 2) * ((fu + 1) * (t * 2 - 2) + fu) + 2) / 2, easeInElastic: (t) => t === 0 ? 0 : t === 1 ? 1 : -Math.pow(2, 10 * t - 10) * Math.sin((t * 10 - 10.75) * Wg), easeOutElastic: (t) => t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * Wg) + 1, easeInOutElastic: (t) => t === 0 ? 0 : t === 1 ? 1 : t < 0.5 ? -(Math.pow(2, 20 * t - 10) * Math.sin((20 * t - 11.125) * Vg)) / 2 : Math.pow(2, -20 * t + 10) * Math.sin((20 * t - 11.125) * Vg) / 2 + 1, easeInBounce: (t) => 1 - du(1 - t), easeOutBounce: du, easeInOutBounce: (t) => t < 0.5 ? (1 - du(1 - 2 * t)) / 2 : (1 + du(2 * t - 1)) / 2, steps: IE }, zl = Symbol.for("FluidValue.get"), Io = Symbol.for("FluidValue.observers"), An = (t) => !!(t && t[zl]), Kt = (t) => t && t[zl] ? t[zl]() : t, Ug = (t) => t[Io] || null;
function $E(t, e) {
  t.eventObserved ? t.eventObserved(e) : t(e);
}
function pa(t, e) {
  let n = t[Io];
  n && n.forEach((r) => {
    $E(r, e);
  });
}
var u5, c5, bv, K_ = (bv = class {
  constructor(t) {
    F(this, u5);
    F(this, c5);
    if (!t && !(t = this.get))
      throw Error("Unknown getter");
    AE(this, t);
  }
}, u5 = zl, c5 = Io, bv), AE = (t, e) => Z_(t, zl, e);
function Xl(t, e) {
  if (t[zl]) {
    let n = t[Io];
    n || Z_(t, Io, n = /* @__PURE__ */ new Set()), n.has(e) || (n.add(e), t.observerAdded && t.observerAdded(n.size, e));
  }
  return e;
}
function ha(t, e) {
  let n = t[Io];
  if (n && n.has(e)) {
    let r = n.size - 1;
    r ? n.delete(e) : t[Io] = null, t.observerRemoved && t.observerRemoved(r, e);
  }
}
var Z_ = (t, e, n) => Object.defineProperty(t, e, { value: n, writable: !0, configurable: !0 }), Gu = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, DE = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, Yg = new RegExp(`(${Gu.source})(%|[a-z]+)`, "i"), zE = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, vf = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/, J_ = (t) => {
  let [e, n] = LE(t);
  if (!e || P0())
    return t;
  let r = window.getComputedStyle(document.documentElement).getPropertyValue(e);
  return r ? r.trim() : n && n.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(n) || t : n && vf.test(n) ? J_(n) : n || t;
}, LE = (t) => {
  let e = vf.exec(t);
  if (!e)
    return [,];
  let [, n, r] = e;
  return [n, r];
}, vd, jE = (t, e, n, r, i) => `rgba(${Math.round(e)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`, ew = (t) => {
  vd || (vd = Ni ? new RegExp(`(${Object.keys(Ni).join("|")})(?!\\w)`, "g") : /^\b$/);
  let e = t.output.map((i) => Kt(i).replace(vf, J_).replace(DE, Hg).replace(vd, Hg)), n = e.map((i) => i.match(Gu).map(Number)), r = n[0].map((i, o) => n.map((l) => {
    if (!(o in l))
      throw Error('The arity of each "output" value must be equal');
    return l[o];
  })).map((i) => da({ ...t, output: i }));
  return (i) => {
    var s;
    let o = !Yg.test(e[0]) && ((s = e.find((a) => Yg.test(a))) == null ? void 0 : s.replace(Gu, "")), l = 0;
    return e[0].replace(Gu, () => `${r[l++](i)}${o || ""}`).replace(zE, jE);
  };
}, N0 = "react-spring: ", tw = (t) => {
  let e = t, n = !1;
  if (typeof e != "function")
    throw new TypeError(`${N0}once requires a function parameter`);
  return (...r) => {
    n || (e(...r), n = !0);
  };
}, FE = tw(console.warn);
function HE() {
  FE(`${N0}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
var BE = tw(console.warn);
function WE() {
  BE(`${N0}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
}
function yf(t) {
  return I.str(t) && (t[0] == "#" || /\d/.test(t) || !P0() && vf.test(t) || t in (Ni || {}));
}
var go = P0() ? T.useEffect : T.useLayoutEffect, VE = () => {
  let t = T.useRef(!1);
  return go(() => (t.current = !0, () => {
    t.current = !1;
  }), []), t;
};
function I0() {
  let t = T.useState()[1], e = VE();
  return () => {
    e.current && t(Math.random());
  };
}
function UE(t, e) {
  let [n] = T.useState(() => ({ inputs: e, result: t() })), r = T.useRef(), i = r.current, o = i;
  return o ? e && o.inputs && YE(e, o.inputs) || (o = { inputs: e, result: t() }) : o = n, T.useEffect(() => {
    r.current = o, i == n && (n.inputs = n.result = void 0);
  }, [o]), o.result;
}
function YE(t, e) {
  if (t.length !== e.length)
    return !1;
  for (let n = 0; n < t.length; n++)
    if (t[n] !== e[n])
      return !1;
  return !0;
}
var $0 = (t) => T.useEffect(t, XE), XE = [];
function Bp(t) {
  let e = T.useRef();
  return T.useEffect(() => {
    e.current = t;
  }), e.current;
}
var ma = Symbol.for("Animated:node"), GE = (t) => !!t && t[ma] === t, xr = (t) => t && t[ma], A0 = (t, e) => gE(t, ma, e), _f = (t) => t && t[ma] && t[ma].getPayload(), nw = class {
  constructor() {
    F(this, "payload");
    A0(this, this);
  }
  getPayload() {
    return this.payload || [];
  }
}, Aa = class extends nw {
  constructor(e) {
    super();
    F(this, "done", !0);
    F(this, "elapsedTime");
    F(this, "lastPosition");
    F(this, "lastVelocity");
    F(this, "v0");
    F(this, "durationProgress", 0);
    this._value = e, I.num(this._value) && (this.lastPosition = this._value);
  }
  static create(e) {
    return new Aa(e);
  }
  getPayload() {
    return [this];
  }
  getValue() {
    return this._value;
  }
  setValue(e, n) {
    return I.num(e) && (this.lastPosition = e, n && (e = Math.round(e / n) * n, this.done && (this.lastPosition = e))), this._value === e ? !1 : (this._value = e, !0);
  }
  reset() {
    let { done: e } = this;
    this.done = !1, I.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null);
  }
}, ga = class extends Aa {
  constructor(e) {
    super(0);
    F(this, "_string", null);
    F(this, "_toString");
    this._toString = da({ output: [e, e] });
  }
  static create(e) {
    return new ga(e);
  }
  getValue() {
    return this._string ?? (this._string = this._toString(this._value));
  }
  setValue(e) {
    if (I.str(e)) {
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
    e && (this._toString = da({ output: [this.getValue(), e] })), this._value = 0, super.reset();
  }
}, $c = { dependencies: null }, wf = class extends nw {
  constructor(t) {
    super(), this.source = t, this.setValue(t);
  }
  getValue(t) {
    let e = {};
    return Rr(this.source, (n, r) => {
      GE(n) ? e[r] = n.getValue(t) : An(n) ? e[r] = Kt(n) : t || (e[r] = n);
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
      return Rr(t, this._addToPayload, e), Array.from(e);
    }
  }
  _addToPayload(t) {
    $c.dependencies && An(t) && $c.dependencies.add(t);
    let e = _f(t);
    e && Q(e, (n) => this.add(n));
  }
}, rw = class extends wf {
  constructor(e) {
    super(e);
  }
  static create(e) {
    return new rw(e);
  }
  getValue() {
    return this.source.map((e) => e.getValue());
  }
  setValue(e) {
    let n = this.getPayload();
    return e.length == n.length ? n.map((r, i) => r.setValue(e[i])).some(Boolean) : (super.setValue(e.map(QE)), !0);
  }
};
function QE(t) {
  return (yf(t) ? ga : Aa).create(t);
}
function Wp(t) {
  let e = xr(t);
  return e ? e.constructor : I.arr(t) ? rw : yf(t) ? ga : Aa;
}
var Xg = (t, e) => {
  let n = !I.fun(t) || t.prototype && t.prototype.isReactComponent;
  return T.forwardRef((r, i) => {
    let o = T.useRef(null), l = n && T.useCallback((m) => {
      o.current = ZE(i, m);
    }, [i]), [s, a] = KE(r, e), u = I0(), c = () => {
      let m = o.current;
      n && !m || (m ? e.applyAnimatedValues(m, s.getValue(!0)) : !1) === !1 && u();
    }, f = new qE(c, a), d = T.useRef();
    go(() => (d.current = f, Q(a, (m) => Xl(m, f)), () => {
      d.current && (Q(d.current.deps, (m) => ha(m, d.current)), K.cancel(d.current.update));
    })), T.useEffect(c, []), $0(() => () => {
      let m = d.current;
      Q(m.deps, (h) => ha(h, m));
    });
    let p = e.getComponentProps(s.getValue());
    return T.createElement(t, { ...p, ref: l });
  });
}, qE = class {
  constructor(t, e) {
    this.update = t, this.deps = e;
  }
  eventObserved(t) {
    t.type == "change" && K.write(this.update);
  }
};
function KE(t, e) {
  let n = /* @__PURE__ */ new Set();
  return $c.dependencies = n, t.style && (t = { ...t, style: e.createAnimatedStyle(t.style) }), t = new wf(t), $c.dependencies = null, [t, n];
}
function ZE(t, e) {
  return t && (I.fun(t) ? t(e) : t.current = e), e;
}
var Gg = Symbol.for("AnimatedComponent"), JE = (t, { applyAnimatedValues: e = () => !1, createAnimatedStyle: n = (i) => new wf(i), getComponentProps: r = (i) => i } = {}) => {
  let i = { applyAnimatedValues: e, createAnimatedStyle: n, getComponentProps: r }, o = (l) => {
    let s = Qg(l) || "Anonymous";
    return I.str(l) ? l = o[l] || (o[l] = Xg(l, i)) : l = l[Gg] || (l[Gg] = Xg(l, i)), l.displayName = `Animated(${s})`, l;
  };
  return Rr(t, (l, s) => {
    I.arr(t) && (s = Qg(l)), o[s] = o(l);
  }), { animated: o };
}, Qg = (t) => I.str(t) ? t : t && I.str(t.displayName) ? t.displayName : I.fun(t) && t.name || null;
function Zt(t, ...e) {
  return I.fun(t) ? t(...e) : t;
}
var As = (t, e) => t === !0 || !!(e && t && (I.fun(t) ? t(e) : Bt(t).includes(e))), iw = (t, e) => I.obj(t) ? e && t[e] : t, ow = (t, e) => t.default === !0 ? t[e] : t.default ? t.default[e] : void 0, eT = (t) => t, xf = (t, e = eT) => {
  let n = tT;
  t.default && t.default !== !0 && (t = t.default, n = Object.keys(t));
  let r = {};
  for (let i of n) {
    let o = e(t[i], i);
    I.und(o) || (r[i] = o);
  }
  return r;
}, tT = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"], nT = { config: 1, from: 1, to: 1, ref: 1, loop: 1, reset: 1, pause: 1, cancel: 1, reverse: 1, immediate: 1, default: 1, delay: 1, onProps: 1, onStart: 1, onChange: 1, onPause: 1, onResume: 1, onRest: 1, onResolve: 1, items: 1, trail: 1, sort: 1, expires: 1, initial: 1, enter: 1, update: 1, leave: 1, children: 1, onDestroyed: 1, keys: 1, callId: 1, parentId: 1 };
function rT(t) {
  let e = {}, n = 0;
  if (Rr(t, (r, i) => {
    nT[i] || (e[i] = r, n++);
  }), n)
    return e;
}
function D0(t) {
  let e = rT(t);
  if (e) {
    let n = { to: e };
    return Rr(t, (r, i) => i in e || (n[i] = r)), n;
  }
  return { ...t };
}
function va(t) {
  return t = Kt(t), I.arr(t) ? t.map(va) : yf(t) ? pr.createStringInterpolator({ range: [0, 1], output: [t, t] })(1) : t;
}
function lw(t) {
  for (let e in t)
    return !0;
  return !1;
}
function Vp(t) {
  return I.fun(t) || I.arr(t) && I.obj(t[0]);
}
function Up(t, e) {
  var n;
  (n = t.ref) == null || n.delete(t), e == null || e.delete(t);
}
function sw(t, e) {
  var n;
  e && t.ref !== e && ((n = t.ref) == null || n.delete(t), e.add(t), t.ref = e);
}
var iT = { default: { tension: 170, friction: 26 }, gentle: { tension: 120, friction: 14 }, wobbly: { tension: 180, friction: 12 }, stiff: { tension: 210, friction: 20 }, slow: { tension: 280, friction: 60 }, molasses: { tension: 280, friction: 120 } }, Yp = { ...iT.default, mass: 1, damping: 1, easing: R0.linear, clamp: !1 }, oT = class {
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
    Object.assign(this, Yp);
  }
};
function lT(t, e, n) {
  n && (n = { ...n }, qg(n, e), e = { ...n, ...e }), qg(t, e), Object.assign(t, e);
  for (let l in Yp)
    t[l] == null && (t[l] = Yp[l]);
  let { frequency: r, damping: i } = t, { mass: o } = t;
  return I.und(r) || (r < 0.01 && (r = 0.01), i < 0 && (i = 0), t.tension = Math.pow(2 * Math.PI / r, 2) * o, t.friction = 4 * Math.PI * i * o / r), t;
}
function qg(t, e) {
  if (!I.und(e.decay))
    t.duration = void 0;
  else {
    let n = !I.und(e.tension) || !I.und(e.friction);
    (n || !I.und(e.frequency) || !I.und(e.damping) || !I.und(e.mass)) && (t.duration = void 0, t.decay = void 0), n && (t.frequency = void 0);
  }
}
var Kg = [], sT = class {
  constructor() {
    F(this, "changed", !1);
    F(this, "values", Kg);
    F(this, "toValues", null);
    F(this, "fromValues", Kg);
    F(this, "to");
    F(this, "from");
    F(this, "config", new oT());
    F(this, "immediate", !1);
  }
};
function aw(t, { key: e, props: n, defaultProps: r, state: i, actions: o }) {
  return new Promise((l, s) => {
    let a, u, c = As(n.cancel ?? (r == null ? void 0 : r.cancel), e);
    if (c)
      p();
    else {
      I.und(n.pause) || (i.paused = As(n.pause, e));
      let m = r == null ? void 0 : r.pause;
      m !== !0 && (m = i.paused || As(m, e)), a = Zt(n.delay || 0, e), m ? (i.resumeQueue.add(d), o.pause()) : (o.resume(), d());
    }
    function f() {
      i.resumeQueue.add(d), i.timeouts.delete(u), u.cancel(), a = u.time - K.now();
    }
    function d() {
      a > 0 && !pr.skipAnimation ? (i.delayed = !0, u = K.setTimeout(p, a), i.pauseQueue.add(f), i.timeouts.add(u)) : p();
    }
    function p() {
      i.delayed && (i.delayed = !1), i.pauseQueue.delete(f), i.timeouts.delete(u), t <= (i.cancelId || 0) && (c = !0);
      try {
        o.start({ ...n, callId: t, cancel: c }, l);
      } catch (m) {
        s(m);
      }
    }
  });
}
var z0 = (t, e) => e.length == 1 ? e[0] : e.some((n) => n.cancelled) ? Sl(t.get()) : e.every((n) => n.noop) ? uw(t.get()) : lr(t.get(), e.every((n) => n.finished)), uw = (t) => ({ value: t, noop: !0, finished: !0, cancelled: !1 }), lr = (t, e, n = !1) => ({ value: t, finished: e, cancelled: n }), Sl = (t) => ({ value: t, cancelled: !0, finished: !1 });
function cw(t, e, n, r) {
  let { callId: i, parentId: o, onRest: l } = e, { asyncTo: s, promise: a } = n;
  return !o && t === s && !e.reset ? a : n.promise = (async () => {
    n.asyncId = i, n.asyncTo = t;
    let u = xf(e, (_, v) => v === "onRest" ? void 0 : _), c, f, d = new Promise((_, v) => (c = _, f = v)), p = (_) => {
      let v = i <= (n.cancelId || 0) && Sl(r) || i !== n.asyncId && lr(r, !1);
      if (v)
        throw _.result = v, f(_), _;
    }, m = (_, v) => {
      let g = new Zg(), y = new Jg();
      return (async () => {
        if (pr.skipAnimation)
          throw ya(n), y.result = lr(r, !1), f(y), y;
        p(g);
        let w = I.obj(_) ? { ..._ } : { ...v, to: _ };
        w.parentId = i, Rr(u, (E, k) => {
          I.und(w[k]) && (w[k] = E);
        });
        let S = await r.start(w);
        return p(g), n.paused && await new Promise((E) => {
          n.resumeQueue.add(E);
        }), S;
      })();
    }, h;
    if (pr.skipAnimation)
      return ya(n), lr(r, !1);
    try {
      let _;
      I.arr(t) ? _ = (async (v) => {
        for (let g of v)
          await m(g);
      })(t) : _ = Promise.resolve(t(m, r.stop.bind(r))), await Promise.all([_.then(c), d]), h = lr(r.get(), !0, !1);
    } catch (_) {
      if (_ instanceof Zg)
        h = _.result;
      else if (_ instanceof Jg)
        h = _.result;
      else
        throw _;
    } finally {
      i == n.asyncId && (n.asyncId = o, n.asyncTo = o ? s : void 0, n.promise = o ? a : void 0);
    }
    return I.fun(l) && K.batchedUpdates(() => {
      l(h, r, r.item);
    }), h;
  })();
}
function ya(t, e) {
  Is(t.timeouts, (n) => n.cancel()), t.pauseQueue.clear(), t.resumeQueue.clear(), t.asyncId = t.asyncTo = t.promise = void 0, e && (t.cancelId = e);
}
var Zg = class extends Error {
  constructor() {
    super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.");
    F(this, "result");
  }
}, Jg = class extends Error {
  constructor() {
    super("SkipAnimationSignal");
    F(this, "result");
  }
}, Xp = (t) => t instanceof L0, aT = 1, L0 = class extends K_ {
  constructor() {
    super(...arguments);
    F(this, "id", aT++);
    F(this, "_priority", 0);
  }
  get priority() {
    return this._priority;
  }
  set priority(e) {
    this._priority != e && (this._priority = e, this._onPriorityChange(e));
  }
  get() {
    let e = xr(this);
    return e && e.getValue();
  }
  to(...e) {
    return pr.to(this, e);
  }
  interpolate(...e) {
    return HE(), pr.to(this, e);
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
    pa(this, { type: "change", parent: this, value: e, idle: n });
  }
  _onPriorityChange(e) {
    this.idle || mf.sort(this), pa(this, { type: "priority", parent: this, priority: e });
  }
}, $o = Symbol.for("SpringPhase"), fw = 1, Gp = 2, Qp = 4, yd = (t) => (t[$o] & fw) > 0, li = (t) => (t[$o] & Gp) > 0, ss = (t) => (t[$o] & Qp) > 0, e1 = (t, e) => e ? t[$o] |= Gp | fw : t[$o] &= ~Gp, t1 = (t, e) => e ? t[$o] |= Qp : t[$o] &= ~Qp, uT = class extends L0 {
  constructor(e, n) {
    super();
    F(this, "key");
    F(this, "animation", new sT());
    F(this, "queue");
    F(this, "defaultProps", {});
    F(this, "_state", { paused: !1, delayed: !1, pauseQueue: /* @__PURE__ */ new Set(), resumeQueue: /* @__PURE__ */ new Set(), timeouts: /* @__PURE__ */ new Set() });
    F(this, "_pendingCalls", /* @__PURE__ */ new Set());
    F(this, "_lastCallId", 0);
    F(this, "_lastToId", 0);
    F(this, "_memoizedDuration", 0);
    if (!I.und(e) || !I.und(n)) {
      let r = I.obj(e) ? { ...e } : { ...n, from: e };
      I.und(r.default) && (r.default = !0), this.start(r);
    }
  }
  get idle() {
    return !(li(this) || this._state.asyncTo) || ss(this);
  }
  get goal() {
    return Kt(this.animation.to);
  }
  get velocity() {
    let e = xr(this);
    return e instanceof Aa ? e.lastVelocity || 0 : e.getPayload().map((n) => n.lastVelocity || 0);
  }
  get hasAnimated() {
    return yd(this);
  }
  get isAnimating() {
    return li(this);
  }
  get isPaused() {
    return ss(this);
  }
  get isDelayed() {
    return this._state.delayed;
  }
  advance(e) {
    let n = !0, r = !1, i = this.animation, { toValues: o } = i, { config: l } = i, s = _f(i.to);
    !s && An(i.to) && (o = Bt(Kt(i.to))), i.values.forEach((c, f) => {
      if (c.done)
        return;
      let d = c.constructor == ga ? 1 : s ? s[f].lastPosition : o[f], p = i.immediate, m = d;
      if (!p) {
        if (m = c.lastPosition, l.tension <= 0) {
          c.done = !0;
          return;
        }
        let h = c.elapsedTime += e, _ = i.fromValues[f], v = c.v0 != null ? c.v0 : c.v0 = I.arr(l.velocity) ? l.velocity[f] : l.velocity, g, y = l.precision || (_ == d ? 5e-3 : Math.min(1, Math.abs(d - _) * 1e-3));
        if (I.und(l.duration))
          if (l.decay) {
            let w = l.decay === !0 ? 0.998 : l.decay, S = Math.exp(-(1 - w) * h);
            m = _ + v / (1 - w) * (1 - S), p = Math.abs(c.lastPosition - m) <= y, g = v * S;
          } else {
            g = c.lastVelocity == null ? v : c.lastVelocity;
            let w = l.restVelocity || y / 10, S = l.clamp ? 0 : l.bounce, E = !I.und(S), k = _ == d ? c.v0 > 0 : _ < d, b, O = !1, P = 1, L = Math.ceil(e / P);
            for (let A = 0; A < L && (b = Math.abs(g) > w, !(!b && (p = Math.abs(d - m) <= y, p))); ++A) {
              E && (O = m == d || m > d == k, O && (g = -g * S, m = d));
              let X = -l.tension * 1e-6 * (m - d), N = -l.friction * 1e-3 * g, z = (X + N) / l.mass;
              g = g + z * P, m = m + g * P;
            }
          }
        else {
          let w = 1;
          l.duration > 0 && (this._memoizedDuration !== l.duration && (this._memoizedDuration = l.duration, c.durationProgress > 0 && (c.elapsedTime = l.duration * c.durationProgress, h = c.elapsedTime += e)), w = (l.progress || 0) + h / this._memoizedDuration, w = w > 1 ? 1 : w < 0 ? 0 : w, c.durationProgress = w), m = _ + l.easing(w) * (d - _), g = (m - c.lastPosition) / e, p = w == 1;
        }
        c.lastVelocity = g, Number.isNaN(m) && (console.warn("Got NaN while animating:", this), p = !0);
      }
      s && !s[f].done && (p = !1), p ? c.done = !0 : n = !1, c.setValue(m, l.round) && (r = !0);
    });
    let a = xr(this), u = a.getValue();
    if (n) {
      let c = Kt(i.to);
      (u !== c || r) && !l.decay ? (a.setValue(c), this._onChange(c)) : r && l.decay && this._onChange(u), this._stop();
    } else
      r && this._onChange(u);
  }
  set(e) {
    return K.batchedUpdates(() => {
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
    if (li(this)) {
      let { to: e, config: n } = this.animation;
      K.batchedUpdates(() => {
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
    return I.und(e) ? (r = this.queue || [], this.queue = []) : r = [I.obj(e) ? e : { ...n, to: e }], Promise.all(r.map((i) => this._update(i))).then((i) => z0(this, i));
  }
  stop(e) {
    let { to: n } = this.animation;
    return this._focus(this.get()), ya(this._state, e && this._lastCallId), K.batchedUpdates(() => this._stop(n, e)), this;
  }
  reset() {
    this._update({ reset: !0 });
  }
  eventObserved(e) {
    e.type == "change" ? this._start() : e.type == "priority" && (this.priority = e.priority + 1);
  }
  _prepareNode(e) {
    let n = this.key || "", { to: r, from: i } = e;
    r = I.obj(r) ? r[n] : r, (r == null || Vp(r)) && (r = void 0), i = I.obj(i) ? i[n] : i, i == null && (i = void 0);
    let o = { to: r, from: i };
    return yd(this) || (e.reverse && ([r, i] = [i, r]), i = Kt(i), I.und(i) ? xr(this) || this._set(r) : this._set(i)), o;
  }
  _update({ ...e }, n) {
    let { key: r, defaultProps: i } = this;
    e.default && Object.assign(i, xf(e, (s, a) => /^on/.test(a) ? iw(s, r) : s)), r1(this, e, "onProps"), us(this, "onProps", e, this);
    let o = this._prepareNode(e);
    if (Object.isFrozen(this))
      throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
    let l = this._state;
    return aw(++this._lastCallId, { key: r, props: e, defaultProps: i, state: l, actions: { pause: () => {
      ss(this) || (t1(this, !0), vs(l.pauseQueue), us(this, "onPause", lr(this, as(this, this.animation.to)), this));
    }, resume: () => {
      ss(this) && (t1(this, !1), li(this) && this._resume(), vs(l.resumeQueue), us(this, "onResume", lr(this, as(this, this.animation.to)), this));
    }, start: this._merge.bind(this, o) } }).then((s) => {
      if (e.loop && s.finished && !(n && s.noop)) {
        let a = dw(e);
        if (a)
          return this._update(a, !0);
      }
      return s;
    });
  }
  _merge(e, n, r) {
    if (n.cancel)
      return this.stop(!0), r(Sl(this));
    let i = !I.und(e.to), o = !I.und(e.from);
    if (i || o)
      if (n.callId > this._lastToId)
        this._lastToId = n.callId;
      else
        return r(Sl(this));
    let { key: l, defaultProps: s, animation: a } = this, { to: u, from: c } = a, { to: f = u, from: d = c } = e;
    o && !i && (!n.default || I.und(f)) && (f = d), n.reverse && ([f, d] = [d, f]);
    let p = !jr(d, c);
    p && (a.from = d), d = Kt(d);
    let m = !jr(f, u);
    m && this._focus(f);
    let h = Vp(n.to), { config: _ } = a, { decay: v, velocity: g } = _;
    (i || o) && (_.velocity = 0), n.config && !h && lT(_, Zt(n.config, l), n.config !== s.config ? Zt(s.config, l) : void 0);
    let y = xr(this);
    if (!y || I.und(f))
      return r(lr(this, !0));
    let w = I.und(n.reset) ? o && !n.default : !I.und(d) && As(n.reset, l), S = w ? d : this.get(), E = va(f), k = I.num(E) || I.arr(E) || yf(E), b = !h && (!k || As(s.immediate || n.immediate, l));
    if (m) {
      let A = Wp(f);
      if (A !== y.constructor)
        if (b)
          y = this._set(E);
        else
          throw Error(`Cannot animate between ${y.constructor.name} and ${A.name}, as the "to" prop suggests`);
    }
    let O = y.constructor, P = An(f), L = !1;
    if (!P) {
      let A = w || !yd(this) && p;
      (m || A) && (L = jr(va(S), E), P = !L), (!jr(a.immediate, b) && !b || !jr(_.decay, v) || !jr(_.velocity, g)) && (P = !0);
    }
    if (L && li(this) && (a.changed && !w ? P = !0 : P || this._stop(u)), !h && ((P || An(u)) && (a.values = y.getPayload(), a.toValues = An(f) ? null : O == ga ? [1] : Bt(E)), a.immediate != b && (a.immediate = b, !b && !w && this._set(u)), P)) {
      let { onRest: A } = a;
      Q(fT, (N) => r1(this, n, N));
      let X = lr(this, as(this, u));
      vs(this._pendingCalls, X), this._pendingCalls.add(r), a.changed && K.batchedUpdates(() => {
        var N;
        a.changed = !w, A == null || A(X, this), w ? Zt(s.onRest, X) : (N = a.onStart) == null || N.call(a, X, this);
      });
    }
    w && this._set(S), h ? r(cw(n.to, n, this._state, this)) : P ? this._start() : li(this) && !m ? this._pendingCalls.add(r) : r(uw(S));
  }
  _focus(e) {
    let n = this.animation;
    e !== n.to && (Ug(this) && this._detach(), n.to = e, Ug(this) && this._attach());
  }
  _attach() {
    let e = 0, { to: n } = this.animation;
    An(n) && (Xl(n, this), Xp(n) && (e = n.priority + 1)), this.priority = e;
  }
  _detach() {
    let { to: e } = this.animation;
    An(e) && ha(e, this);
  }
  _set(e, n = !0) {
    let r = Kt(e);
    if (!I.und(r)) {
      let i = xr(this);
      if (!i || !jr(r, i.getValue())) {
        let o = Wp(r);
        !i || i.constructor != o ? A0(this, o.create(r)) : i.setValue(r), i && K.batchedUpdates(() => {
          this._onChange(r, n);
        });
      }
    }
    return xr(this);
  }
  _onStart() {
    let e = this.animation;
    e.changed || (e.changed = !0, us(this, "onStart", lr(this, as(this, e.to)), this));
  }
  _onChange(e, n) {
    n || (this._onStart(), Zt(this.animation.onChange, e, this)), Zt(this.defaultProps.onChange, e, this), super._onChange(e, n);
  }
  _start() {
    let e = this.animation;
    xr(this).reset(Kt(e.to)), e.immediate || (e.fromValues = e.values.map((n) => n.lastPosition)), li(this) || (e1(this, !0), ss(this) || this._resume());
  }
  _resume() {
    pr.skipAnimation ? this.finish() : mf.start(this);
  }
  _stop(e, n) {
    if (li(this)) {
      e1(this, !1);
      let r = this.animation;
      Q(r.values, (o) => {
        o.done = !0;
      }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), pa(this, { type: "idle", parent: this });
      let i = n ? Sl(this.get()) : lr(this.get(), as(this, e ?? r.to));
      vs(this._pendingCalls, i), r.changed && (r.changed = !1, us(this, "onRest", i, this));
    }
  }
};
function as(t, e) {
  let n = va(e), r = va(t.get());
  return jr(r, n);
}
function dw(t, e = t.loop, n = t.to) {
  let r = Zt(e);
  if (r) {
    let i = r !== !0 && D0(r), o = (i || t).reverse, l = !i || i.reset;
    return _a({ ...t, loop: e, default: !1, pause: void 0, to: !o || Vp(n) ? n : void 0, from: l ? t.from : void 0, reset: l, ...i });
  }
}
function _a(t) {
  let { to: e, from: n } = t = D0(t), r = /* @__PURE__ */ new Set();
  return I.obj(e) && n1(e, r), I.obj(n) && n1(n, r), t.keys = r.size ? Array.from(r) : null, t;
}
function cT(t) {
  let e = _a(t);
  return I.und(e.default) && (e.default = xf(e)), e;
}
function n1(t, e) {
  Rr(t, (n, r) => n != null && e.add(r));
}
var fT = ["onStart", "onRest", "onChange", "onPause", "onResume"];
function r1(t, e, n) {
  t.animation[n] = e[n] !== ow(e, n) ? iw(e[n], t.key) : void 0;
}
function us(t, e, ...n) {
  var r, i, o, l;
  (i = (r = t.animation)[e]) == null || i.call(r, ...n), (l = (o = t.defaultProps)[e]) == null || l.call(o, ...n);
}
var dT = ["onStart", "onChange", "onRest"], pT = 1, pw = class {
  constructor(t, e) {
    F(this, "id", pT++);
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
      I.und(n) || this.springs[e].set(n);
    }
  }
  update(t) {
    return t && this.queue.push(_a(t)), this;
  }
  start(t) {
    let { queue: e } = this;
    return t ? e = Bt(t).map(_a) : this.queue = [], this._flush ? this._flush(this, e) : (yw(this, e), qp(this, e));
  }
  stop(t, e) {
    if (t !== !!t && (e = t), e) {
      let n = this.springs;
      Q(Bt(e), (r) => n[r].stop(!!t));
    } else
      ya(this._state, this._lastAsyncId), this.each((n) => n.stop(!!t));
    return this;
  }
  pause(t) {
    if (I.und(t))
      this.start({ pause: !0 });
    else {
      let e = this.springs;
      Q(Bt(t), (n) => e[n].pause());
    }
    return this;
  }
  resume(t) {
    if (I.und(t))
      this.start({ pause: !1 });
    else {
      let e = this.springs;
      Q(Bt(t), (n) => e[n].resume());
    }
    return this;
  }
  each(t) {
    Rr(this.springs, t);
  }
  _onFrame() {
    let { onStart: t, onChange: e, onRest: n } = this._events, r = this._active.size > 0, i = this._changed.size > 0;
    (r && !this._started || i && !this._started) && (this._started = !0, Is(t, ([s, a]) => {
      a.value = this.get(), s(a, this, this._item);
    }));
    let o = !r && this._started, l = i || o && n.size ? this.get() : null;
    i && e.size && Is(e, ([s, a]) => {
      a.value = l, s(a, this, this._item);
    }), o && (this._started = !1, Is(n, ([s, a]) => {
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
    K.onFrame(this._onFrame);
  }
};
function qp(t, e) {
  return Promise.all(e.map((n) => hw(t, n))).then((n) => z0(t, n));
}
async function hw(t, e, n) {
  let { keys: r, to: i, from: o, loop: l, onRest: s, onResolve: a } = e, u = I.obj(e.default) && e.default;
  l && (e.loop = !1), i === !1 && (e.to = null), o === !1 && (e.from = null);
  let c = I.arr(i) || I.fun(i) ? i : void 0;
  c ? (e.to = void 0, e.onRest = void 0, u && (u.onRest = void 0)) : Q(dT, (h) => {
    let _ = e[h];
    if (I.fun(_)) {
      let v = t._events[h];
      e[h] = ({ finished: g, cancelled: y }) => {
        let w = v.get(_);
        w ? (g || (w.finished = !1), y && (w.cancelled = !0)) : v.set(_, { value: null, finished: g || !1, cancelled: y || !1 });
      }, u && (u[h] = e[h]);
    }
  });
  let f = t._state;
  e.pause === !f.paused ? (f.paused = e.pause, vs(e.pause ? f.pauseQueue : f.resumeQueue)) : f.paused && (e.pause = !0);
  let d = (r || Object.keys(t.springs)).map((h) => t.springs[h].start(e)), p = e.cancel === !0 || ow(e, "cancel") === !0;
  (c || p && f.asyncId) && d.push(aw(++t._lastAsyncId, { props: e, state: f, actions: { pause: Fp, resume: Fp, start(h, _) {
    p ? (ya(f, t._lastAsyncId), _(Sl(t))) : (h.onRest = s, _(cw(c, h, f, t)));
  } } })), f.paused && await new Promise((h) => {
    f.resumeQueue.add(h);
  });
  let m = z0(t, await Promise.all(d));
  if (l && m.finished && !(n && m.noop)) {
    let h = dw(e, l, i);
    if (h)
      return yw(t, [h]), hw(t, h, !0);
  }
  return a && K.batchedUpdates(() => a(m, t, t.item)), m;
}
function Kp(t, e) {
  let n = { ...t.springs };
  return e && Q(Bt(e), (r) => {
    I.und(r.keys) && (r = _a(r)), I.obj(r.to) || (r = { ...r, to: void 0 }), vw(n, r, (i) => gw(i));
  }), mw(t, n), n;
}
function mw(t, e) {
  Rr(e, (n, r) => {
    t.springs[r] || (t.springs[r] = n, Xl(n, t));
  });
}
function gw(t, e) {
  let n = new uT();
  return n.key = t, e && Xl(n, e), n;
}
function vw(t, e, n) {
  e.keys && Q(e.keys, (r) => {
    (t[r] || (t[r] = n(r)))._prepareNode(e);
  });
}
function yw(t, e) {
  Q(e, (n) => {
    vw(t.springs, n, (r) => gw(r, t));
  });
}
var Da = ({ children: t, ...e }) => {
  let n = T.useContext(Ac), r = e.pause || !!n.pause, i = e.immediate || !!n.immediate;
  e = UE(() => ({ pause: r, immediate: i }), [r, i]);
  let { Provider: o } = Ac;
  return T.createElement(o, { value: e }, t);
}, Ac = hT(Da, {});
Da.Provider = Ac.Provider;
Da.Consumer = Ac.Consumer;
function hT(t, e) {
  return Object.assign(t, T.createContext(e)), t.Provider._context = t, t.Consumer._context = t, t;
}
var j0 = () => {
  let t = [], e = function(r) {
    WE();
    let i = [];
    return Q(t, (o, l) => {
      if (I.und(r))
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
      let l = I.fun(r) ? r(o, i) : r;
      l && i.set(l);
    });
  }, e.start = function(r) {
    let i = [];
    return Q(t, (o, l) => {
      if (I.und(r))
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
    return I.fun(r) ? r(o, i) : r;
  };
  return e._getProps = n, e;
};
function mT(t, e, n) {
  let r = I.fun(e) && e;
  r && !n && (n = []);
  let i = T.useMemo(() => r || arguments.length == 3 ? j0() : void 0, []), o = T.useRef(0), l = I0(), s = T.useMemo(() => ({ ctrls: [], queue: [], flush(v, g) {
    let y = Kp(v, g);
    return o.current > 0 && !s.queue.length && !Object.keys(y).some((w) => !v.springs[w]) ? qp(v, g) : new Promise((w) => {
      mw(v, y), s.queue.push(() => {
        w(qp(v, g));
      }), l();
    });
  } }), []), a = T.useRef([...s.ctrls]), u = [], c = Bp(t) || 0;
  T.useMemo(() => {
    Q(a.current.slice(t, c), (v) => {
      Up(v, i), v.stop(!0);
    }), a.current.length = t, f(c, t);
  }, [t]), T.useMemo(() => {
    f(0, Math.min(c, t));
  }, n);
  function f(v, g) {
    for (let y = v; y < g; y++) {
      let w = a.current[y] || (a.current[y] = new pw(null, s.flush)), S = r ? r(y, w) : e[y];
      S && (u[y] = cT(S));
    }
  }
  let d = a.current.map((v, g) => Kp(v, u[g])), p = T.useContext(Da), m = Bp(p), h = p !== m && lw(p);
  go(() => {
    o.current++, s.ctrls = a.current;
    let { queue: v } = s;
    v.length && (s.queue = [], Q(v, (g) => g())), Q(a.current, (g, y) => {
      i == null || i.add(g), h && g.start({ default: p });
      let w = u[y];
      w && (sw(g, w.ref), g.ref ? g.queue.push(w) : g.start(w));
    });
  }), $0(() => () => {
    Q(s.ctrls, (v) => v.stop(!0));
  });
  let _ = d.map((v) => ({ ...v }));
  return i ? [_, i] : _;
}
function q(t, e) {
  let n = I.fun(t), [[r], i] = mT(1, n ? t : [t], n ? e || [] : e);
  return n || arguments.length == 2 ? [r, i] : r;
}
var gT = () => j0(), i1 = () => T.useState(gT)[0];
function vT(t, e, n) {
  let r = I.fun(e) && e, { reset: i, sort: o, trail: l = 0, expires: s = !0, exitBeforeEnter: a = !1, onDestroyed: u, ref: c, config: f } = r ? r() : e, d = T.useMemo(() => r || arguments.length == 3 ? j0() : void 0, []), p = Bt(t), m = [], h = T.useRef(null), _ = i ? null : h.current;
  go(() => {
    h.current = m;
  }), $0(() => (Q(m, (N) => {
    d == null || d.add(N.ctrl), N.ctrl.ref = d;
  }), () => {
    Q(h.current, (N) => {
      N.expired && clearTimeout(N.expirationId), Up(N.ctrl, d), N.ctrl.stop(!0);
    });
  }));
  let v = _T(p, r ? r() : e, _), g = i && h.current || [];
  go(() => Q(g, ({ ctrl: N, item: z, key: V }) => {
    Up(N, d), Zt(u, z, V);
  }));
  let y = [];
  if (_ && Q(_, (N, z) => {
    N.expired ? (clearTimeout(N.expirationId), g.push(N)) : (z = y[z] = v.indexOf(N.key), ~z && (m[z] = N));
  }), Q(p, (N, z) => {
    m[z] || (m[z] = { key: v[z], item: N, phase: "mount", ctrl: new pw() }, m[z].ctrl.item = N);
  }), y.length) {
    let N = -1, { leave: z } = r ? r() : e;
    Q(y, (V, j) => {
      let R = _[j];
      ~V ? (N = m.indexOf(R), m[N] = { ...R, item: p[V] }) : z && m.splice(++N, 0, R);
    });
  }
  I.fun(o) && m.sort((N, z) => o(N.item, z.item));
  let w = -l, S = I0(), E = xf(e), k = /* @__PURE__ */ new Map(), b = T.useRef(/* @__PURE__ */ new Map()), O = T.useRef(!1);
  Q(m, (N, z) => {
    let V = N.key, j = N.phase, R = r ? r() : e, D, x, Y = Zt(R.delay || 0, V);
    if (j == "mount")
      D = R.enter, x = "enter";
    else {
      let de = v.indexOf(V) < 0;
      if (j != "leave")
        if (de)
          D = R.leave, x = "leave";
        else if (D = R.update)
          x = "update";
        else
          return;
      else if (!de)
        D = R.enter, x = "enter";
      else
        return;
    }
    if (D = Zt(D, N.item, z), D = I.obj(D) ? D0(D) : { to: D }, !D.config) {
      let de = f || E.config;
      D.config = Zt(de, N.item, z, x);
    }
    w += l;
    let J = { ...E, delay: Y + w, ref: c, immediate: R.immediate, reset: !1, ...D };
    if (x == "enter" && I.und(J.from)) {
      let de = r ? r() : e, ye = I.und(de.initial) || _ ? de.from : de.initial;
      J.from = Zt(ye, N.item, z);
    }
    let { onResolve: lt } = J;
    J.onResolve = (de) => {
      Zt(lt, de);
      let ye = h.current, ue = ye.find((Qe) => Qe.key === V);
      if (ue && !(de.cancelled && ue.phase != "update") && ue.ctrl.idle) {
        let Qe = ye.every((be) => be.ctrl.idle);
        if (ue.phase == "leave") {
          let be = Zt(s, ue.item);
          if (be !== !1) {
            let Mn = be === !0 ? 0 : be;
            if (ue.expired = !0, !Qe && Mn > 0) {
              Mn <= 2147483647 && (ue.expirationId = setTimeout(S, Mn));
              return;
            }
          }
        }
        Qe && ye.some((be) => be.expired) && (b.current.delete(ue), a && (O.current = !0), S());
      }
    };
    let fe = Kp(N.ctrl, J);
    x === "leave" && a ? b.current.set(N, { phase: x, springs: fe, payload: J }) : k.set(N, { phase: x, springs: fe, payload: J });
  });
  let P = T.useContext(Da), L = Bp(P), A = P !== L && lw(P);
  go(() => {
    A && Q(m, (N) => {
      N.ctrl.start({ default: P });
    });
  }, [P]), Q(k, (N, z) => {
    if (b.current.size) {
      let V = m.findIndex((j) => j.key === z.key);
      m.splice(V, 1);
    }
  }), go(() => {
    Q(b.current.size ? b.current : k, ({ phase: N, payload: z }, V) => {
      let { ctrl: j } = V;
      V.phase = N, d == null || d.add(j), A && N == "enter" && j.start({ default: P }), z && (sw(j, z.ref), (j.ref || d) && !O.current ? j.update(z) : (j.start(z), O.current && (O.current = !1)));
    });
  }, i ? void 0 : n);
  let X = (N) => T.createElement(T.Fragment, null, m.map((z, V) => {
    let { springs: j } = k.get(z) || z.ctrl, R = N({ ...j }, z.item, z, V);
    return R && R.type ? T.createElement(R.type, { ...R.props, key: I.str(z.key) || I.num(z.key) ? z.key : z.ctrl.id, ref: R.ref }) : R;
  }));
  return d ? [X, d] : X;
}
var yT = 1;
function _T(t, { key: e, keys: n = e }, r) {
  if (n === null) {
    let i = /* @__PURE__ */ new Set();
    return t.map((o) => {
      let l = r && r.find((s) => s.item === o && s.phase !== "leave" && !i.has(s));
      return l ? (i.add(l), l.key) : yT++;
    });
  }
  return I.und(n) ? t : I.fun(n) ? t.map(n) : Bt(n);
}
var wT = class extends L0 {
  constructor(e, n) {
    super();
    F(this, "key");
    F(this, "idle", !0);
    F(this, "calc");
    F(this, "_active", /* @__PURE__ */ new Set());
    this.source = e, this.calc = da(...n);
    let r = this._get(), i = Wp(r);
    A0(this, i.create(r));
  }
  advance(e) {
    let n = this._get(), r = this.get();
    jr(n, r) || (xr(this).setValue(n), this._onChange(n, this.idle)), !this.idle && o1(this._active) && _d(this);
  }
  _get() {
    let e = I.arr(this.source) ? this.source.map(Kt) : Bt(Kt(this.source));
    return this.calc(...e);
  }
  _start() {
    this.idle && !o1(this._active) && (this.idle = !1, Q(_f(this), (e) => {
      e.done = !1;
    }), pr.skipAnimation ? (K.batchedUpdates(() => this.advance()), _d(this)) : mf.start(this));
  }
  _attach() {
    let e = 1;
    Q(Bt(this.source), (n) => {
      An(n) && Xl(n, this), Xp(n) && (n.idle || this._active.add(n), e = Math.max(e, n.priority + 1));
    }), this.priority = e, this._start();
  }
  _detach() {
    Q(Bt(this.source), (e) => {
      An(e) && ha(e, this);
    }), this._active.clear(), _d(this);
  }
  eventObserved(e) {
    e.type == "change" ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : e.type == "idle" ? this._active.delete(e.parent) : e.type == "priority" && (this.priority = Bt(this.source).reduce((n, r) => Math.max(n, (Xp(r) ? r.priority : 0) + 1), 0));
  }
};
function xT(t) {
  return t.idle !== !1;
}
function o1(t) {
  return !t.size || Array.from(t).every(xT);
}
function _d(t) {
  t.idle || (t.idle = !0, Q(_f(t), (e) => {
    e.done = !0;
  }), pa(t, { type: "idle", parent: t }));
}
pr.assign({ createStringInterpolator: ew, to: (t, e) => new wT(t, e) });
var _w = /^--/;
function kT(t, e) {
  return e == null || typeof e == "boolean" || e === "" ? "" : typeof e == "number" && e !== 0 && !_w.test(t) && !(Ds.hasOwnProperty(t) && Ds[t]) ? e + "px" : ("" + e).trim();
}
var l1 = {};
function ST(t, e) {
  if (!t.nodeType || !t.setAttribute)
    return !1;
  let n = t.nodeName === "filter" || t.parentNode && t.parentNode.nodeName === "filter", { style: r, children: i, scrollTop: o, scrollLeft: l, viewBox: s, ...a } = e, u = Object.values(a), c = Object.keys(a).map((f) => n || t.hasAttribute(f) ? f : l1[f] || (l1[f] = f.replace(/([A-Z])/g, (d) => "-" + d.toLowerCase())));
  i !== void 0 && (t.textContent = i);
  for (let f in r)
    if (r.hasOwnProperty(f)) {
      let d = kT(f, r[f]);
      _w.test(f) ? t.style.setProperty(f, d) : t.style[f] = d;
    }
  c.forEach((f, d) => {
    t.setAttribute(f, u[d]);
  }), o !== void 0 && (t.scrollTop = o), l !== void 0 && (t.scrollLeft = l), s !== void 0 && t.setAttribute("viewBox", s);
}
var Ds = { animationIterationCount: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 }, ET = (t, e) => t + e.charAt(0).toUpperCase() + e.substring(1), TT = ["Webkit", "Ms", "Moz", "O"];
Ds = Object.keys(Ds).reduce((t, e) => (TT.forEach((n) => t[ET(n, e)] = t[e]), t), Ds);
var CT = /^(matrix|translate|scale|rotate|skew)/, bT = /^(translate)/, PT = /^(rotate|skew)/, wd = (t, e) => I.num(t) && t !== 0 ? t + e : t, Qu = (t, e) => I.arr(t) ? t.every((n) => Qu(n, e)) : I.num(t) ? t === e : parseFloat(t) === e, OT = class extends wf {
  constructor({ x: t, y: e, z: n, ...r }) {
    let i = [], o = [];
    (t || e || n) && (i.push([t || 0, e || 0, n || 0]), o.push((l) => [`translate3d(${l.map((s) => wd(s, "px")).join(",")})`, Qu(l, 0)])), Rr(r, (l, s) => {
      if (s === "transform")
        i.push([l || ""]), o.push((a) => [a, a === ""]);
      else if (CT.test(s)) {
        if (delete r[s], I.und(l))
          return;
        let a = bT.test(s) ? "px" : PT.test(s) ? "deg" : "";
        i.push(Bt(l)), o.push(s === "rotate3d" ? ([u, c, f, d]) => [`rotate3d(${u},${c},${f},${wd(d, a)})`, Qu(d, 0)] : (u) => [`${s}(${u.map((c) => wd(c, a)).join(",")})`, Qu(u, s.startsWith("scale") ? 1 : 0)]);
      }
    }), i.length && (r.transform = new MT(i, o)), super(r);
  }
}, MT = class extends K_ {
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
      let o = Kt(r[0]), [l, s] = this.transforms[i](I.arr(o) ? o : r.map(Kt));
      e += " " + l, n = n && s;
    }), n ? "none" : e;
  }
  observerAdded(e) {
    e == 1 && Q(this.inputs, (n) => Q(n, (r) => An(r) && Xl(r, this)));
  }
  observerRemoved(e) {
    e == 0 && Q(this.inputs, (n) => Q(n, (r) => An(r) && ha(r, this)));
  }
  eventObserved(e) {
    e.type == "change" && (this._value = null), pa(this, e);
  }
}, RT = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"];
pr.assign({ batchedUpdates: k0.unstable_batchedUpdates, createStringInterpolator: ew, colors: xE });
var NT = JE(RT, { applyAnimatedValues: ST, createAnimatedStyle: (t) => new OT(t), getComponentProps: ({ scrollTop: t, scrollLeft: e, ...n }) => n }), Z = NT.animated, F0 = {}, H0 = {};
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
})(H0);
var re = {}, Ui = tn && tn.__extends || function() {
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
}(), zs = tn && tn.__assign || function() {
  return zs = Object.assign || function(t) {
    for (var e, n = 1, r = arguments.length; n < r; n++) {
      e = arguments[n];
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
  }, zs.apply(this, arguments);
};
Object.defineProperty(re, "__esModule", { value: !0 });
re.cloneNode = re.hasChildren = re.isDocument = re.isDirective = re.isComment = re.isText = re.isCDATA = re.isTag = re.Element = re.Document = re.CDATA = re.NodeWithChildren = re.ProcessingInstruction = re.Comment = re.Text = re.DataNode = re.Node = void 0;
var sn = H0, B0 = (
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
re.Node = B0;
var kf = (
  /** @class */
  function(t) {
    Ui(e, t);
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
  }(B0)
);
re.DataNode = kf;
var ww = (
  /** @class */
  function(t) {
    Ui(e, t);
    function e() {
      var n = t !== null && t.apply(this, arguments) || this;
      return n.type = sn.ElementType.Text, n;
    }
    return Object.defineProperty(e.prototype, "nodeType", {
      get: function() {
        return 3;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(kf)
);
re.Text = ww;
var xw = (
  /** @class */
  function(t) {
    Ui(e, t);
    function e() {
      var n = t !== null && t.apply(this, arguments) || this;
      return n.type = sn.ElementType.Comment, n;
    }
    return Object.defineProperty(e.prototype, "nodeType", {
      get: function() {
        return 8;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(kf)
);
re.Comment = xw;
var kw = (
  /** @class */
  function(t) {
    Ui(e, t);
    function e(n, r) {
      var i = t.call(this, r) || this;
      return i.name = n, i.type = sn.ElementType.Directive, i;
    }
    return Object.defineProperty(e.prototype, "nodeType", {
      get: function() {
        return 1;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(kf)
);
re.ProcessingInstruction = kw;
var Sf = (
  /** @class */
  function(t) {
    Ui(e, t);
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
  }(B0)
);
re.NodeWithChildren = Sf;
var Sw = (
  /** @class */
  function(t) {
    Ui(e, t);
    function e() {
      var n = t !== null && t.apply(this, arguments) || this;
      return n.type = sn.ElementType.CDATA, n;
    }
    return Object.defineProperty(e.prototype, "nodeType", {
      get: function() {
        return 4;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(Sf)
);
re.CDATA = Sw;
var Ew = (
  /** @class */
  function(t) {
    Ui(e, t);
    function e() {
      var n = t !== null && t.apply(this, arguments) || this;
      return n.type = sn.ElementType.Root, n;
    }
    return Object.defineProperty(e.prototype, "nodeType", {
      get: function() {
        return 9;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(Sf)
);
re.Document = Ew;
var Tw = (
  /** @class */
  function(t) {
    Ui(e, t);
    function e(n, r, i, o) {
      i === void 0 && (i = []), o === void 0 && (o = n === "script" ? sn.ElementType.Script : n === "style" ? sn.ElementType.Style : sn.ElementType.Tag);
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
  }(Sf)
);
re.Element = Tw;
function Cw(t) {
  return (0, sn.isTag)(t);
}
re.isTag = Cw;
function bw(t) {
  return t.type === sn.ElementType.CDATA;
}
re.isCDATA = bw;
function Pw(t) {
  return t.type === sn.ElementType.Text;
}
re.isText = Pw;
function Ow(t) {
  return t.type === sn.ElementType.Comment;
}
re.isComment = Ow;
function Mw(t) {
  return t.type === sn.ElementType.Directive;
}
re.isDirective = Mw;
function Rw(t) {
  return t.type === sn.ElementType.Root;
}
re.isDocument = Rw;
function IT(t) {
  return Object.prototype.hasOwnProperty.call(t, "children");
}
re.hasChildren = IT;
function W0(t, e) {
  e === void 0 && (e = !1);
  var n;
  if (Pw(t))
    n = new ww(t.data);
  else if (Ow(t))
    n = new xw(t.data);
  else if (Cw(t)) {
    var r = e ? xd(t.children) : [], i = new Tw(t.name, zs({}, t.attribs), r);
    r.forEach(function(a) {
      return a.parent = i;
    }), t.namespace != null && (i.namespace = t.namespace), t["x-attribsNamespace"] && (i["x-attribsNamespace"] = zs({}, t["x-attribsNamespace"])), t["x-attribsPrefix"] && (i["x-attribsPrefix"] = zs({}, t["x-attribsPrefix"])), n = i;
  } else if (bw(t)) {
    var r = e ? xd(t.children) : [], o = new Sw(r);
    r.forEach(function(u) {
      return u.parent = o;
    }), n = o;
  } else if (Rw(t)) {
    var r = e ? xd(t.children) : [], l = new Ew(r);
    r.forEach(function(u) {
      return u.parent = l;
    }), t["x-mode"] && (l["x-mode"] = t["x-mode"]), n = l;
  } else if (Mw(t)) {
    var s = new kw(t.name, t.data);
    t["x-name"] != null && (s["x-name"] = t["x-name"], s["x-publicId"] = t["x-publicId"], s["x-systemId"] = t["x-systemId"]), n = s;
  } else
    throw new Error("Not implemented yet: ".concat(t.type));
  return n.startIndex = t.startIndex, n.endIndex = t.endIndex, t.sourceCodeLocation != null && (n.sourceCodeLocation = t.sourceCodeLocation), n;
}
re.cloneNode = W0;
function xd(t) {
  for (var e = t.map(function(r) {
    return W0(r, !0);
  }), n = 1; n < e.length; n++)
    e[n].prev = e[n - 1], e[n - 1].next = e[n];
  return e;
}
(function(t) {
  var e = tn && tn.__createBinding || (Object.create ? function(s, a, u, c) {
    c === void 0 && (c = u);
    var f = Object.getOwnPropertyDescriptor(a, u);
    (!f || ("get" in f ? !a.__esModule : f.writable || f.configurable)) && (f = { enumerable: !0, get: function() {
      return a[u];
    } }), Object.defineProperty(s, c, f);
  } : function(s, a, u, c) {
    c === void 0 && (c = u), s[c] = a[u];
  }), n = tn && tn.__exportStar || function(s, a) {
    for (var u in s)
      u !== "default" && !Object.prototype.hasOwnProperty.call(a, u) && e(a, s, u);
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.DomHandler = void 0;
  var r = H0, i = re;
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
var s1 = "html", a1 = "head", pu = "body", $T = /<([a-zA-Z]+[0-9]?)/, u1 = /<head[^]*>/i, c1 = /<body[^]*>/i, Dc = function() {
  throw new Error(
    "This browser does not support `document.implementation.createHTMLDocument`"
  );
}, Zp = function() {
  throw new Error(
    "This browser does not support `DOMParser.prototype.parseFromString`"
  );
}, f1 = typeof window == "object" && window.DOMParser;
if (typeof f1 == "function") {
  var AT = new f1(), DT = "text/html";
  Zp = function(t, e) {
    return e && (t = "<" + e + ">" + t + "</" + e + ">"), AT.parseFromString(t, DT);
  }, Dc = Zp;
}
if (typeof document == "object" && document.implementation) {
  var hu = document.implementation.createHTMLDocument();
  Dc = function(t, e) {
    if (e) {
      var n = hu.documentElement.querySelector(e);
      return n.innerHTML = t, hu;
    }
    return hu.documentElement.innerHTML = t, hu;
  };
}
var kd = typeof document == "object" ? document.createElement("template") : {}, Jp;
kd.content && (Jp = function(t) {
  return kd.innerHTML = t, kd.content.childNodes;
});
function zT(t) {
  var e, n = t.match($T);
  n && n[1] && (e = n[1].toLowerCase());
  var r, i, o;
  switch (e) {
    case s1:
      return r = Zp(t), u1.test(t) || (i = r.querySelector(a1), i && i.parentNode.removeChild(i)), c1.test(t) || (i = r.querySelector(pu), i && i.parentNode.removeChild(i)), r.querySelectorAll(s1);
    case a1:
    case pu:
      return r = Dc(t), o = r.querySelectorAll(e), c1.test(t) && u1.test(t) ? o[0].parentNode.childNodes : o;
    default:
      return Jp ? Jp(t) : (i = Dc(t, pu).querySelector(pu), i.childNodes);
  }
}
var LT = zT, V0 = {}, Nw = {};
Nw.CASE_SENSITIVE_TAG_NAMES = [
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
var Ef = F0, jT = Nw, d1 = jT.CASE_SENSITIVE_TAG_NAMES, FT = Ef.Comment, HT = Ef.Element, BT = Ef.ProcessingInstruction, WT = Ef.Text, Iw = {}, Sd;
for (var Ed = 0, VT = d1.length; Ed < VT; Ed++)
  Sd = d1[Ed], Iw[Sd.toLowerCase()] = Sd;
function UT(t) {
  return Iw[t];
}
function $w(t) {
  for (var e = {}, n, r = 0, i = t.length; r < i; r++)
    n = t[r], e[n.name] = n.value;
  return e;
}
function YT(t) {
  t = t.toLowerCase();
  var e = UT(t);
  return e || t;
}
function Aw(t, e, n) {
  e = e || null;
  for (var r = [], i, o = 0, l = t.length; o < l; o++) {
    var s = t[o], a;
    switch (s.nodeType) {
      case 1:
        i = YT(s.nodeName), a = new HT(i, $w(s.attributes)), a.children = Aw(
          // template children are on content
          i === "template" ? s.content.childNodes : s.childNodes,
          a
        );
        break;
      case 3:
        a = new WT(s.nodeValue);
        break;
      case 8:
        a = new FT(s.nodeValue);
        break;
      default:
        continue;
    }
    var u = r[o - 1] || null;
    u && (u.next = a), a.parent = e, a.prev = u, a.next = null, r.push(a);
  }
  return n && (a = new BT(
    n.substring(0, n.indexOf(" ")).toLowerCase(),
    n
  ), a.next = r[0] || null, a.parent = e, r.unshift(a), r[1] && (r[1].prev = r[0])), r;
}
V0.formatAttributes = $w;
V0.formatDOM = Aw;
var XT = LT, GT = V0, QT = GT.formatDOM, qT = /<(![a-zA-Z\s]+)>/;
function KT(t) {
  if (typeof t != "string")
    throw new TypeError("First argument must be a string");
  if (t === "")
    return [];
  var e = t.match(qT), n;
  return e && e[1] && (n = e[1]), QT(XT(t), null, n);
}
var ZT = KT, Gn = {}, Tf = {}, JT = 0;
Tf.SAME = JT;
var eC = 1;
Tf.CAMELCASE = eC;
Tf.possibleStandardNames = {
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
Object.defineProperty(Gn, "__esModule", { value: !0 });
function tC(t, e) {
  return nC(t) || rC(t, e) || iC(t, e) || oC();
}
function nC(t) {
  if (Array.isArray(t))
    return t;
}
function rC(t, e) {
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
function iC(t, e) {
  if (t) {
    if (typeof t == "string")
      return p1(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set")
      return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return p1(t, e);
  }
}
function p1(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++)
    r[n] = t[n];
  return r;
}
function oC() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Dw = 0, Yi = 1, Cf = 2, bf = 3, U0 = 4, zw = 5, Lw = 6;
function lC(t) {
  return kt.hasOwnProperty(t) ? kt[t] : null;
}
function Yt(t, e, n, r, i, o, l) {
  this.acceptsBooleans = e === Cf || e === bf || e === U0, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = t, this.type = e, this.sanitizeURL = o, this.removeEmptyString = l;
}
var kt = {}, sC = [
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
sC.forEach(function(t) {
  kt[t] = new Yt(
    t,
    Dw,
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
  var e = tC(t, 2), n = e[0], r = e[1];
  kt[n] = new Yt(
    n,
    Yi,
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
  kt[t] = new Yt(
    t,
    Cf,
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
  kt[t] = new Yt(
    t,
    Cf,
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
  kt[t] = new Yt(
    t,
    bf,
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
  kt[t] = new Yt(
    t,
    bf,
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
  kt[t] = new Yt(
    t,
    U0,
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
  kt[t] = new Yt(
    t,
    Lw,
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
  kt[t] = new Yt(
    t,
    zw,
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
  kt[e] = new Yt(
    e,
    Yi,
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
  kt[e] = new Yt(
    e,
    Yi,
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
  kt[e] = new Yt(
    e,
    Yi,
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
  kt[t] = new Yt(
    t,
    Yi,
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
var aC = "xlinkHref";
kt[aC] = new Yt(
  "xlinkHref",
  Yi,
  !1,
  // mustUseProperty
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  // sanitizeURL
  !1
);
["src", "href", "action", "formAction"].forEach(function(t) {
  kt[t] = new Yt(
    t,
    Yi,
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
var G0 = Tf, uC = G0.CAMELCASE, cC = G0.SAME, h1 = G0.possibleStandardNames, fC = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", dC = fC + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", pC = RegExp.prototype.test.bind(
  // eslint-disable-next-line no-misleading-character-class
  new RegExp("^(data|aria)-[" + dC + "]*$")
), hC = Object.keys(h1).reduce(function(t, e) {
  var n = h1[e];
  return n === cC ? t[e] = e : n === uC ? t[e.toLowerCase()] = e : t[e] = n, t;
}, {});
Gn.BOOLEAN = bf;
Gn.BOOLEANISH_STRING = Cf;
Gn.NUMERIC = zw;
Gn.OVERLOADED_BOOLEAN = U0;
Gn.POSITIVE_NUMERIC = Lw;
Gn.RESERVED = Dw;
Gn.STRING = Yi;
Gn.getPropertyInfo = lC;
Gn.isCustomAttribute = pC;
Gn.possibleStandardNames = hC;
var jw = {}, Q0 = { exports: {} }, m1 = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, mC = /\n/g, gC = /^\s*/, vC = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, yC = /^:\s*/, _C = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, wC = /^[;\s]*/, xC = /^\s+|\s+$/g, kC = `
`, g1 = "/", v1 = "*", fo = "", SC = "comment", EC = "declaration", TC = function(t, e) {
  if (typeof t != "string")
    throw new TypeError("First argument must be a string");
  if (!t)
    return [];
  e = e || {};
  var n = 1, r = 1;
  function i(m) {
    var h = m.match(mC);
    h && (n += h.length);
    var _ = m.lastIndexOf(kC);
    r = ~_ ? m.length - _ : r + m.length;
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
  function s(m) {
    var h = new Error(
      e.source + ":" + n + ":" + r + ": " + m
    );
    if (h.reason = m, h.filename = e.source, h.line = n, h.column = r, h.source = t, !e.silent)
      throw h;
  }
  function a(m) {
    var h = m.exec(t);
    if (h) {
      var _ = h[0];
      return i(_), t = t.slice(_.length), h;
    }
  }
  function u() {
    a(gC);
  }
  function c(m) {
    var h;
    for (m = m || []; h = f(); )
      h !== !1 && m.push(h);
    return m;
  }
  function f() {
    var m = o();
    if (!(g1 != t.charAt(0) || v1 != t.charAt(1))) {
      for (var h = 2; fo != t.charAt(h) && (v1 != t.charAt(h) || g1 != t.charAt(h + 1)); )
        ++h;
      if (h += 2, fo === t.charAt(h - 1))
        return s("End of comment missing");
      var _ = t.slice(2, h - 2);
      return r += 2, i(_), t = t.slice(h), r += 2, m({
        type: SC,
        comment: _
      });
    }
  }
  function d() {
    var m = o(), h = a(vC);
    if (h) {
      if (f(), !a(yC))
        return s("property missing ':'");
      var _ = a(_C), v = m({
        type: EC,
        property: y1(h[0].replace(m1, fo)),
        value: _ ? y1(_[0].replace(m1, fo)) : fo
      });
      return a(wC), v;
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
function y1(t) {
  return t ? t.replace(xC, fo) : fo;
}
var CC = TC;
function Fw(t, e) {
  var n = null;
  if (!t || typeof t != "string")
    return n;
  for (var r, i = CC(t), o = typeof e == "function", l, s, a = 0, u = i.length; a < u; a++)
    r = i[a], l = r.property, s = r.value, o ? e(l, s, r) : s && (n || (n = {}), n[l] = s);
  return n;
}
Q0.exports = Fw;
Q0.exports.default = Fw;
var bC = Q0.exports, Pf = {};
Pf.__esModule = !0;
Pf.camelCase = void 0;
var PC = /^--[a-zA-Z0-9-]+$/, OC = /-([a-z])/g, MC = /^[^-]+$/, RC = /^-(webkit|moz|ms|o|khtml)-/, NC = /^-(ms)-/, IC = function(t) {
  return !t || MC.test(t) || PC.test(t);
}, $C = function(t, e) {
  return e.toUpperCase();
}, _1 = function(t, e) {
  return "".concat(e, "-");
}, AC = function(t, e) {
  return e === void 0 && (e = {}), IC(t) ? t : (t = t.toLowerCase(), e.reactCompat ? t = t.replace(NC, _1) : t = t.replace(RC, _1), t.replace(OC, $C));
};
Pf.camelCase = AC;
(function(t) {
  var e = tn && tn.__importDefault || function(o) {
    return o && o.__esModule ? o : { default: o };
  };
  t.__esModule = !0;
  var n = e(bC), r = Pf;
  function i(o, l) {
    var s = {};
    return !o || typeof o != "string" || (0, n.default)(o, function(a, u) {
      a && u && (s[(0, r.camelCase)(a, l)] = u);
    }), s;
  }
  t.default = i;
})(jw);
var DC = T, zC = jw.default;
function LC(t, e) {
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
function jC(t, e) {
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
var FC = { reactCompat: !0 };
function HC(t, e) {
  if (t != null)
    try {
      e.style = zC(t, FC);
    } catch {
      e.style = {};
    }
}
var BC = DC.version.split(".")[0] >= 16, Hw = /* @__PURE__ */ new Set([
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
function WC(t) {
  return !Hw.has(t.name);
}
var Bw = {
  PRESERVE_CUSTOM_ATTRIBUTES: BC,
  invertObject: LC,
  isCustomComponent: jC,
  setStyleProp: HC,
  canTextBeChildOfNode: WC,
  elementsWithNoTextChildren: Hw
}, ys = Gn, w1 = Bw, VC = ["checked", "value"], UC = ["input", "select", "textarea"], YC = {
  reset: !0,
  submit: !0
}, Ww = function(e, n) {
  e = e || {};
  var r, i, o, l, s, a = {}, u = e.type && YC[e.type];
  for (r in e) {
    if (o = e[r], ys.isCustomAttribute(r)) {
      a[r] = o;
      continue;
    }
    if (i = r.toLowerCase(), l = x1(i), l) {
      switch (s = ys.getPropertyInfo(l), VC.indexOf(l) !== -1 && UC.indexOf(n) !== -1 && !u && (l = x1("default" + i)), a[l] = o, s && s.type) {
        case ys.BOOLEAN:
          a[l] = !0;
          break;
        case ys.OVERLOADED_BOOLEAN:
          o === "" && (a[l] = !0);
          break;
      }
      continue;
    }
    w1.PRESERVE_CUSTOM_ATTRIBUTES && (a[r] = o);
  }
  return w1.setStyleProp(e.style, a), a;
};
function x1(t) {
  return ys.possibleStandardNames[t];
}
var XC = T, GC = Ww, zc = Bw, QC = zc.setStyleProp, qC = zc.canTextBeChildOfNode;
function Vw(t, e) {
  e = e || {};
  for (var n = e.library || XC, r = n.cloneElement, i = n.createElement, o = n.isValidElement, l = [], s, a, u = typeof e.replace == "function", c, f, d, p = e.trim, m = 0, h = t.length; m < h; m++) {
    if (s = t[m], u && (c = e.replace(s), o(c))) {
      h > 1 && (c = r(c, {
        key: c.key || m
      })), l.push(c);
      continue;
    }
    if (s.type === "text") {
      if (a = !s.data.trim().length, a && s.parent && !qC(s.parent) || p && a)
        continue;
      l.push(s.data);
      continue;
    }
    switch (f = s.attribs, KC(s) ? QC(f.style, f) : f && (f = GC(f, s.name)), d = null, s.type) {
      case "script":
      case "style":
        s.children[0] && (f.dangerouslySetInnerHTML = {
          __html: s.children[0].data
        });
        break;
      case "tag":
        s.name === "textarea" && s.children[0] ? f.defaultValue = s.children[0].data : s.children && s.children.length && (d = Vw(s.children, e));
        break;
      default:
        continue;
    }
    h > 1 && (f.key = m), l.push(i(s.name, f, d));
  }
  return l.length === 1 ? l[0] : l;
}
function KC(t) {
  return zc.PRESERVE_CUSTOM_ATTRIBUTES && t.type === "tag" && zc.isCustomComponent(t.name, t.attribs);
}
var ZC = Vw, Of = F0, fl = ZT, JC = Ww, Uw = ZC;
fl = /* istanbul ignore next */
typeof fl.default == "function" ? fl.default : fl;
var eb = { lowerCaseAttributeNames: !1 };
function Nr(t, e) {
  if (typeof t != "string")
    throw new TypeError("First argument must be a string");
  return t === "" ? [] : (e = e || {}, Uw(
    fl(t, e.htmlparser2 || eb),
    e
  ));
}
Nr.domToReact = Uw;
Nr.htmlToDOM = fl;
Nr.attributesToProps = JC;
Nr.Comment = Of.Comment;
Nr.Element = Of.Element;
Nr.ProcessingInstruction = Of.ProcessingInstruction;
Nr.Text = Of.Text;
var tb = Nr;
Nr.default = Nr;
const Ho = /* @__PURE__ */ Pv(tb);
Ho.domToReact;
Ho.htmlToDOM;
Ho.attributesToProps;
Ho.Comment;
Ho.Element;
Ho.ProcessingInstruction;
Ho.Text;
const eh = /* @__PURE__ */ new Map(), mu = /* @__PURE__ */ new WeakMap();
let k1 = 0, nb;
function rb(t) {
  return t ? (mu.has(t) || (k1 += 1, mu.set(t, k1.toString())), mu.get(t)) : "0";
}
function ib(t) {
  return Object.keys(t).sort().filter((e) => t[e] !== void 0).map((e) => `${e}_${e === "root" ? rb(t.root) : t[e]}`).toString();
}
function ob(t) {
  let e = ib(t), n = eh.get(e);
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
    }, eh.set(e, n);
  }
  return n;
}
function lb(t, e, n = {}, r = nb) {
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
  } = ob(n);
  let s = l.get(t) || [];
  return l.has(t) || l.set(t, s), s.push(e), o.observe(t), function() {
    s.splice(s.indexOf(e), 1), s.length === 0 && (l.delete(t), o.unobserve(t)), l.size === 0 && (o.disconnect(), eh.delete(i));
  };
}
function Mf({
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
  const c = T.useRef(), f = T.useRef(), [d, p] = T.useState({
    inView: !!s
  });
  f.current = u;
  const m = T.useCallback(
    (_) => {
      c.current !== void 0 && (c.current(), c.current = void 0), !l && _ && (c.current = lb(_, (v, g) => {
        p({
          inView: v,
          entry: g
        }), f.current && f.current(v, g), g.isIntersecting && o && c.current && (c.current(), c.current = void 0);
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
  T.useEffect(() => {
    !c.current && d.entry && !o && !l && p({
      inView: !!s
    });
  });
  const h = [m, d.inView, d.entry];
  return h.ref = h[0], h.inView = h[1], h.entry = h[2], h;
}
T.createContext({
  val: { title: "タイトル", content: "コンテンツ" },
  setVal: (t) => {
  }
});
rk.forwardRef((t, e) => {
  const [n, r] = q(() => ({
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
  return T.useEffect(() => {
    t.spin ? r.resume() : r.pause();
  }, [t.spin]), /* @__PURE__ */ C.jsx(Z.div, { ref: e, style: { ...i, ...n, transformOrigin: "center center" }, children: t.children });
});
function Fr(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Yw(t, e) {
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
var Tn = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, Ll = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, q0, Mt, We, Fn = 1e8, ke = 1 / Fn, th = Math.PI * 2, sb = th / 4, ab = 0, Xw = Math.sqrt, ub = Math.cos, cb = Math.sin, dt = function(e) {
  return typeof e == "string";
}, Ve = function(e) {
  return typeof e == "function";
}, ei = function(e) {
  return typeof e == "number";
}, K0 = function(e) {
  return typeof e > "u";
}, Ir = function(e) {
  return typeof e == "object";
}, an = function(e) {
  return e !== !1;
}, Z0 = function() {
  return typeof window < "u";
}, gu = function(e) {
  return Ve(e) || dt(e);
}, Gw = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, Rt = Array.isArray, nh = /(?:-?\.?\d|\.)+/gi, Qw = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, dl = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Td = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, qw = /[+-]=-?[.\d]+/, Kw = /[^,'"\[\]\s]+/gi, fb = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, De, Nn, rh, J0, bn = {}, Lc = {}, Zw, Jw = function(e) {
  return (Lc = Ao(e, bn)) && fn;
}, em = function(e, n) {
  return console.warn("Invalid property", e, "set to", n, "Missing plugin? gsap.registerPlugin()");
}, jc = function(e, n) {
  return !n && console.warn(e);
}, ex = function(e, n) {
  return e && (bn[e] = n) && Lc && (Lc[e] = n) || bn;
}, wa = function() {
  return 0;
}, db = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, qu = {
  suppressEvents: !0,
  kill: !1
}, pb = {
  suppressEvents: !0
}, tm = {}, Ii = [], ih = {}, tx, wn = {}, Cd = {}, S1 = 30, Ku = [], nm = "", rm = function(e) {
  var n = e[0], r, i;
  if (Ir(n) || Ve(n) || (e = [e]), !(r = (n._gsap || {}).harness)) {
    for (i = Ku.length; i-- && !Ku[i].targetTest(n); )
      ;
    r = Ku[i];
  }
  for (i = e.length; i--; )
    e[i] && (e[i]._gsap || (e[i]._gsap = new Tx(e[i], r))) || e.splice(i, 1);
  return e;
}, xo = function(e) {
  return e._gsap || rm(Hn(e))[0]._gsap;
}, nx = function(e, n, r) {
  return (r = e[n]) && Ve(r) ? e[n]() : K0(r) && e.getAttribute && e.getAttribute(n) || r;
}, un = function(e, n) {
  return (e = e.split(",")).forEach(n) || e;
}, Xe = function(e) {
  return Math.round(e * 1e5) / 1e5 || 0;
}, yt = function(e) {
  return Math.round(e * 1e7) / 1e7 || 0;
}, El = function(e, n) {
  var r = n.charAt(0), i = parseFloat(n.substr(2));
  return e = parseFloat(e), r === "+" ? e + i : r === "-" ? e - i : r === "*" ? e * i : e / i;
}, hb = function(e, n) {
  for (var r = n.length, i = 0; e.indexOf(n[i]) < 0 && ++i < r; )
    ;
  return i < r;
}, Fc = function() {
  var e = Ii.length, n = Ii.slice(0), r, i;
  for (ih = {}, Ii.length = 0, r = 0; r < e; r++)
    i = n[r], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
}, rx = function(e, n, r, i) {
  Ii.length && !Mt && Fc(), e.render(n, r, i || Mt && n < 0 && (e._initted || e._startAt)), Ii.length && !Mt && Fc();
}, ix = function(e) {
  var n = parseFloat(e);
  return (n || n === 0) && (e + "").match(Kw).length < 2 ? n : dt(e) ? e.trim() : e;
}, ox = function(e) {
  return e;
}, Xn = function(e, n) {
  for (var r in n)
    r in e || (e[r] = n[r]);
  return e;
}, mb = function(e) {
  return function(n, r) {
    for (var i in r)
      i in n || i === "duration" && e || i === "ease" || (n[i] = r[i]);
  };
}, Ao = function(e, n) {
  for (var r in n)
    e[r] = n[r];
  return e;
}, E1 = function t(e, n) {
  for (var r in n)
    r !== "__proto__" && r !== "constructor" && r !== "prototype" && (e[r] = Ir(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r]);
  return e;
}, Hc = function(e, n) {
  var r = {}, i;
  for (i in e)
    i in n || (r[i] = e[i]);
  return r;
}, Ls = function(e) {
  var n = e.parent || De, r = e.keyframes ? mb(Rt(e.keyframes)) : Xn;
  if (an(e.inherit))
    for (; n; )
      r(e, n.vars.defaults), n = n.parent || n._dp;
  return e;
}, gb = function(e, n) {
  for (var r = e.length, i = r === n.length; i && r-- && e[r] === n[r]; )
    ;
  return r < 0;
}, lx = function(e, n, r, i, o) {
  r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
  var l = e[i], s;
  if (o)
    for (s = n[o]; l && l[o] > s; )
      l = l._prev;
  return l ? (n._next = l._next, l._next = n) : (n._next = e[r], e[r] = n), n._next ? n._next._prev = n : e[i] = n, n._prev = l, n.parent = n._dp = e, n;
}, Rf = function(e, n, r, i) {
  r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
  var o = n._prev, l = n._next;
  o ? o._next = l : e[r] === n && (e[r] = l), l ? l._prev = o : e[i] === n && (e[i] = o), n._next = n._prev = n.parent = null;
}, Li = function(e, n) {
  e.parent && (!n || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0;
}, ko = function(e, n) {
  if (e && (!n || n._end > e._dur || n._start < 0))
    for (var r = e; r; )
      r._dirty = 1, r = r.parent;
  return e;
}, vb = function(e) {
  for (var n = e.parent; n && n.parent; )
    n._dirty = 1, n.totalDuration(), n = n.parent;
  return e;
}, oh = function(e, n, r, i) {
  return e._startAt && (Mt ? e._startAt.revert(qu) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(n, !0, i));
}, yb = function t(e) {
  return !e || e._ts && t(e.parent);
}, T1 = function(e) {
  return e._repeat ? jl(e._tTime, e = e.duration() + e._rDelay) * e : 0;
}, jl = function(e, n) {
  var r = Math.floor(e /= n);
  return e && r === e ? r - 1 : r;
}, Bc = function(e, n) {
  return (e - n._start) * n._ts + (n._ts >= 0 ? 0 : n._dirty ? n.totalDuration() : n._tDur);
}, Nf = function(e) {
  return e._end = yt(e._start + (e._tDur / Math.abs(e._ts || e._rts || ke) || 0));
}, If = function(e, n) {
  var r = e._dp;
  return r && r.smoothChildTiming && e._ts && (e._start = yt(r._time - (e._ts > 0 ? n / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - n) / -e._ts)), Nf(e), r._dirty || ko(r, e)), e;
}, sx = function(e, n) {
  var r;
  if ((n._time || !n._dur && n._initted || n._start < e._time && (n._dur || !n.add)) && (r = Bc(e.rawTime(), n), (!n._dur || za(0, n.totalDuration(), r) - n._tTime > ke) && n.render(r, !0)), ko(e, n)._dp && e._initted && e._time >= e._dur && e._ts) {
    if (e._dur < e.duration())
      for (r = e; r._dp; )
        r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
    e._zTime = -ke;
  }
}, Tr = function(e, n, r, i) {
  return n.parent && Li(n), n._start = yt((ei(r) ? r : r || e !== De ? Rn(e, r, n) : e._time) + n._delay), n._end = yt(n._start + (n.totalDuration() / Math.abs(n.timeScale()) || 0)), lx(e, n, "_first", "_last", e._sort ? "_start" : 0), lh(n) || (e._recent = n), i || sx(e, n), e._ts < 0 && If(e, e._tTime), e;
}, ax = function(e, n) {
  return (bn.ScrollTrigger || em("scrollTrigger", n)) && bn.ScrollTrigger.create(n, e);
}, ux = function(e, n, r, i, o) {
  if (om(e, n, o), !e._initted)
    return 1;
  if (!r && e._pt && !Mt && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && tx !== xn.frame)
    return Ii.push(e), e._lazy = [o, i], 1;
}, _b = function t(e) {
  var n = e.parent;
  return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n));
}, lh = function(e) {
  var n = e.data;
  return n === "isFromStart" || n === "isStart";
}, wb = function(e, n, r, i) {
  var o = e.ratio, l = n < 0 || !n && (!e._start && _b(e) && !(!e._initted && lh(e)) || (e._ts < 0 || e._dp._ts < 0) && !lh(e)) ? 0 : 1, s = e._rDelay, a = 0, u, c, f;
  if (s && e._repeat && (a = za(0, e._tDur, n), c = jl(a, s), e._yoyo && c & 1 && (l = 1 - l), c !== jl(e._tTime, s) && (o = 1 - l, e.vars.repeatRefresh && e._initted && e.invalidate())), l !== o || Mt || i || e._zTime === ke || !n && e._zTime) {
    if (!e._initted && ux(e, n, i, r, a))
      return;
    for (f = e._zTime, e._zTime = n || (r ? ke : 0), r || (r = n && !f), e.ratio = l, e._from && (l = 1 - l), e._time = 0, e._tTime = a, u = e._pt; u; )
      u.r(l, u.d), u = u._next;
    n < 0 && oh(e, n, r, !0), e._onUpdate && !r && Bn(e, "onUpdate"), a && e._repeat && !r && e.parent && Bn(e, "onRepeat"), (n >= e._tDur || n < 0) && e.ratio === l && (l && Li(e, 1), !r && !Mt && (Bn(e, l ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()));
  } else
    e._zTime || (e._zTime = n);
}, xb = function(e, n, r) {
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
}, Fl = function(e, n, r, i) {
  var o = e._repeat, l = yt(n) || 0, s = e._tTime / e._tDur;
  return s && !i && (e._time *= l / e._dur), e._dur = l, e._tDur = o ? o < 0 ? 1e10 : yt(l * (o + 1) + e._rDelay * o) : l, s > 0 && !i && If(e, e._tTime = e._tDur * s), e.parent && Nf(e), r || ko(e.parent, e), e;
}, C1 = function(e) {
  return e instanceof en ? ko(e) : Fl(e, e._dur);
}, kb = {
  _start: 0,
  endTime: wa,
  totalDuration: wa
}, Rn = function t(e, n, r) {
  var i = e.labels, o = e._recent || kb, l = e.duration() >= Fn ? o.endTime(!1) : e._dur, s, a, u;
  return dt(n) && (isNaN(n) || n in i) ? (a = n.charAt(0), u = n.substr(-1) === "%", s = n.indexOf("="), a === "<" || a === ">" ? (s >= 0 && (n = n.replace(/=/, "")), (a === "<" ? o._start : o.endTime(o._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (u ? (s < 0 ? o : r).totalDuration() / 100 : 1)) : s < 0 ? (n in i || (i[n] = l), i[n]) : (a = parseFloat(n.charAt(s - 1) + n.substr(s + 1)), u && r && (a = a / 100 * (Rt(r) ? r[0] : r).totalDuration()), s > 1 ? t(e, n.substr(0, s - 1), r) + a : l + a)) : n == null ? l : +n;
}, js = function(e, n, r) {
  var i = ei(n[1]), o = (i ? 2 : 1) + (e < 2 ? 0 : 1), l = n[o], s, a;
  if (i && (l.duration = n[1]), l.parent = r, e) {
    for (s = l, a = r; a && !("immediateRender" in s); )
      s = a.vars.defaults || {}, a = an(a.vars.inherit) && a.parent;
    l.immediateRender = an(s.immediateRender), e < 2 ? l.runBackwards = 1 : l.startAt = n[o - 1];
  }
  return new Je(n[0], l, n[o + 1]);
}, Xi = function(e, n) {
  return e || e === 0 ? n(e) : n;
}, za = function(e, n, r) {
  return r < e ? e : r > n ? n : r;
}, Ot = function(e, n) {
  return !dt(e) || !(n = fb.exec(e)) ? "" : n[1];
}, Sb = function(e, n, r) {
  return Xi(r, function(i) {
    return za(e, n, i);
  });
}, sh = [].slice, cx = function(e, n) {
  return e && Ir(e) && "length" in e && (!n && !e.length || e.length - 1 in e && Ir(e[0])) && !e.nodeType && e !== Nn;
}, Eb = function(e, n, r) {
  return r === void 0 && (r = []), e.forEach(function(i) {
    var o;
    return dt(i) && !n || cx(i, 1) ? (o = r).push.apply(o, Hn(i)) : r.push(i);
  }) || r;
}, Hn = function(e, n, r) {
  return We && !n && We.selector ? We.selector(e) : dt(e) && !r && (rh || !Hl()) ? sh.call((n || J0).querySelectorAll(e), 0) : Rt(e) ? Eb(e, r) : cx(e) ? sh.call(e, 0) : e ? [e] : [];
}, ah = function(e) {
  return e = Hn(e)[0] || jc("Invalid scope") || {}, function(n) {
    var r = e.current || e.nativeElement || e;
    return Hn(n, r.querySelectorAll ? r : r === e ? jc("Invalid scope") || J0.createElement("div") : e);
  };
}, fx = function(e) {
  return e.sort(function() {
    return 0.5 - Math.random();
  });
}, dx = function(e) {
  if (Ve(e))
    return e;
  var n = Ir(e) ? e : {
    each: e
  }, r = So(n.ease), i = n.from || 0, o = parseFloat(n.base) || 0, l = {}, s = i > 0 && i < 1, a = isNaN(i) || s, u = n.axis, c = i, f = i;
  return dt(i) ? c = f = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[i] || 0 : !s && a && (c = i[0], f = i[1]), function(d, p, m) {
    var h = (m || n).length, _ = l[h], v, g, y, w, S, E, k, b, O;
    if (!_) {
      if (O = n.grid === "auto" ? 0 : (n.grid || [1, Fn])[1], !O) {
        for (k = -Fn; k < (k = m[O++].getBoundingClientRect().left) && O < h; )
          ;
        O--;
      }
      for (_ = l[h] = [], v = a ? Math.min(O, h) * c - 0.5 : i % O, g = O === Fn ? 0 : a ? h * f / O - 0.5 : i / O | 0, k = 0, b = Fn, E = 0; E < h; E++)
        y = E % O - v, w = g - (E / O | 0), _[E] = S = u ? Math.abs(u === "y" ? w : y) : Xw(y * y + w * w), S > k && (k = S), S < b && (b = S);
      i === "random" && fx(_), _.max = k - b, _.min = b, _.v = h = (parseFloat(n.amount) || parseFloat(n.each) * (O > h ? h - 1 : u ? u === "y" ? h / O : O : Math.max(O, h / O)) || 0) * (i === "edges" ? -1 : 1), _.b = h < 0 ? o - h : o, _.u = Ot(n.amount || n.each) || 0, r = r && h < 0 ? kx(r) : r;
    }
    return h = (_[d] - _.min) / _.max || 0, yt(_.b + (r ? r(h) : h) * _.v) + _.u;
  };
}, uh = function(e) {
  var n = Math.pow(10, ((e + "").split(".")[1] || "").length);
  return function(r) {
    var i = yt(Math.round(parseFloat(r) / e) * e * n);
    return (i - i % 1) / n + (ei(r) ? 0 : Ot(r));
  };
}, px = function(e, n) {
  var r = Rt(e), i, o;
  return !r && Ir(e) && (i = r = e.radius || Fn, e.values ? (e = Hn(e.values), (o = !ei(e[0])) && (i *= i)) : e = uh(e.increment)), Xi(n, r ? Ve(e) ? function(l) {
    return o = e(l), Math.abs(o - l) <= i ? o : l;
  } : function(l) {
    for (var s = parseFloat(o ? l.x : l), a = parseFloat(o ? l.y : 0), u = Fn, c = 0, f = e.length, d, p; f--; )
      o ? (d = e[f].x - s, p = e[f].y - a, d = d * d + p * p) : d = Math.abs(e[f] - s), d < u && (u = d, c = f);
    return c = !i || u <= i ? e[c] : l, o || c === l || ei(l) ? c : c + Ot(l);
  } : uh(e));
}, hx = function(e, n, r, i) {
  return Xi(Rt(e) ? !n : r === !0 ? !!(r = 0) : !i, function() {
    return Rt(e) ? e[~~(Math.random() * e.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((e - r / 2 + Math.random() * (n - e + r * 0.99)) / r) * r * i) / i;
  });
}, Tb = function() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return function(i) {
    return n.reduce(function(o, l) {
      return l(o);
    }, i);
  };
}, Cb = function(e, n) {
  return function(r) {
    return e(parseFloat(r)) + (n || Ot(r));
  };
}, bb = function(e, n, r) {
  return gx(e, n, 0, 1, r);
}, mx = function(e, n, r) {
  return Xi(r, function(i) {
    return e[~~n(i)];
  });
}, Pb = function t(e, n, r) {
  var i = n - e;
  return Rt(e) ? mx(e, t(0, e.length), n) : Xi(r, function(o) {
    return (i + (o - e) % i) % i + e;
  });
}, Ob = function t(e, n, r) {
  var i = n - e, o = i * 2;
  return Rt(e) ? mx(e, t(0, e.length - 1), n) : Xi(r, function(l) {
    return l = (o + (l - e) % o) % o || 0, e + (l > i ? o - l : l);
  });
}, xa = function(e) {
  for (var n = 0, r = "", i, o, l, s; ~(i = e.indexOf("random(", n)); )
    l = e.indexOf(")", i), s = e.charAt(i + 7) === "[", o = e.substr(i + 7, l - i - 7).match(s ? Kw : nh), r += e.substr(n, i - n) + hx(s ? o : +o[0], s ? 0 : +o[1], +o[2] || 1e-5), n = l + 1;
  return r + e.substr(n, e.length - n);
}, gx = function(e, n, r, i, o) {
  var l = n - e, s = i - r;
  return Xi(o, function(a) {
    return r + ((a - e) / l * s || 0);
  });
}, Mb = function t(e, n, r, i) {
  var o = isNaN(e + n) ? 0 : function(p) {
    return (1 - p) * e + p * n;
  };
  if (!o) {
    var l = dt(e), s = {}, a, u, c, f, d;
    if (r === !0 && (i = 1) && (r = null), l)
      e = {
        p: e
      }, n = {
        p: n
      };
    else if (Rt(e) && !Rt(n)) {
      for (c = [], f = e.length, d = f - 2, u = 1; u < f; u++)
        c.push(t(e[u - 1], e[u]));
      f--, o = function(m) {
        m *= f;
        var h = Math.min(d, ~~m);
        return c[h](m - h);
      }, r = n;
    } else
      i || (e = Ao(Rt(e) ? [] : {}, e));
    if (!c) {
      for (a in n)
        im.call(s, e, a, "get", n[a]);
      o = function(m) {
        return am(m, s) || (l ? e.p : e);
      };
    }
  }
  return Xi(r, o);
}, b1 = function(e, n, r) {
  var i = e.labels, o = Fn, l, s, a;
  for (l in i)
    s = i[l] - n, s < 0 == !!r && s && o > (s = Math.abs(s)) && (a = l, o = s);
  return a;
}, Bn = function(e, n, r) {
  var i = e.vars, o = i[n], l = We, s = e._ctx, a, u, c;
  if (o)
    return a = i[n + "Params"], u = i.callbackScope || e, r && Ii.length && Fc(), s && (We = s), c = a ? o.apply(u, a) : o.call(u), We = l, c;
}, _s = function(e) {
  return Li(e), e.scrollTrigger && e.scrollTrigger.kill(!!Mt), e.progress() < 1 && Bn(e, "onInterrupt"), e;
}, pl, vx = [], yx = function(e) {
  if (Z0() && e) {
    e = !e.name && e.default || e;
    var n = e.name, r = Ve(e), i = n && !r && e.init ? function() {
      this._props = [];
    } : e, o = {
      init: wa,
      render: am,
      add: im,
      kill: Yb,
      modifier: Ub,
      rawVars: 0
    }, l = {
      targetTest: 0,
      get: 0,
      getSetter: sm,
      aliases: {},
      register: 0
    };
    if (Hl(), e !== i) {
      if (wn[n])
        return;
      Xn(i, Xn(Hc(e, o), l)), Ao(i.prototype, Ao(o, Hc(e, l))), wn[i.prop = n] = i, e.targetTest && (Ku.push(i), tm[n] = 1), n = (n === "css" ? "CSS" : n.charAt(0).toUpperCase() + n.substr(1)) + "Plugin";
    }
    ex(n, i), e.register && e.register(fn, i, cn);
  } else
    e && vx.push(e);
}, xe = 255, ws = {
  aqua: [0, xe, xe],
  lime: [0, xe, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, xe],
  navy: [0, 0, 128],
  white: [xe, xe, xe],
  olive: [128, 128, 0],
  yellow: [xe, xe, 0],
  orange: [xe, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [xe, 0, 0],
  pink: [xe, 192, 203],
  cyan: [0, xe, xe],
  transparent: [xe, xe, xe, 0]
}, bd = function(e, n, r) {
  return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? n + (r - n) * e * 6 : e < 0.5 ? r : e * 3 < 2 ? n + (r - n) * (2 / 3 - e) * 6 : n) * xe + 0.5 | 0;
}, _x = function(e, n, r) {
  var i = e ? ei(e) ? [e >> 16, e >> 8 & xe, e & xe] : 0 : ws.black, o, l, s, a, u, c, f, d, p, m;
  if (!i) {
    if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), ws[e])
      i = ws[e];
    else if (e.charAt(0) === "#") {
      if (e.length < 6 && (o = e.charAt(1), l = e.charAt(2), s = e.charAt(3), e = "#" + o + o + l + l + s + s + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9)
        return i = parseInt(e.substr(1, 6), 16), [i >> 16, i >> 8 & xe, i & xe, parseInt(e.substr(7), 16) / 255];
      e = parseInt(e.substr(1), 16), i = [e >> 16, e >> 8 & xe, e & xe];
    } else if (e.substr(0, 3) === "hsl") {
      if (i = m = e.match(nh), !n)
        a = +i[0] % 360 / 360, u = +i[1] / 100, c = +i[2] / 100, l = c <= 0.5 ? c * (u + 1) : c + u - c * u, o = c * 2 - l, i.length > 3 && (i[3] *= 1), i[0] = bd(a + 1 / 3, o, l), i[1] = bd(a, o, l), i[2] = bd(a - 1 / 3, o, l);
      else if (~e.indexOf("="))
        return i = e.match(Qw), r && i.length < 4 && (i[3] = 1), i;
    } else
      i = e.match(nh) || ws.transparent;
    i = i.map(Number);
  }
  return n && !m && (o = i[0] / xe, l = i[1] / xe, s = i[2] / xe, f = Math.max(o, l, s), d = Math.min(o, l, s), c = (f + d) / 2, f === d ? a = u = 0 : (p = f - d, u = c > 0.5 ? p / (2 - f - d) : p / (f + d), a = f === o ? (l - s) / p + (l < s ? 6 : 0) : f === l ? (s - o) / p + 2 : (o - l) / p + 4, a *= 60), i[0] = ~~(a + 0.5), i[1] = ~~(u * 100 + 0.5), i[2] = ~~(c * 100 + 0.5)), r && i.length < 4 && (i[3] = 1), i;
}, wx = function(e) {
  var n = [], r = [], i = -1;
  return e.split($i).forEach(function(o) {
    var l = o.match(dl) || [];
    n.push.apply(n, l), r.push(i += l.length + 1);
  }), n.c = r, n;
}, P1 = function(e, n, r) {
  var i = "", o = (e + i).match($i), l = n ? "hsla(" : "rgba(", s = 0, a, u, c, f;
  if (!o)
    return e;
  if (o = o.map(function(d) {
    return (d = _x(d, n, 1)) && l + (n ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : d.join(",")) + ")";
  }), r && (c = wx(e), a = r.c, a.join(i) !== c.c.join(i)))
    for (u = e.replace($i, "1").split(dl), f = u.length - 1; s < f; s++)
      i += u[s] + (~a.indexOf(s) ? o.shift() || l + "0,0,0,0)" : (c.length ? c : o.length ? o : r).shift());
  if (!u)
    for (u = e.split($i), f = u.length - 1; s < f; s++)
      i += u[s] + o[s];
  return i + u[f];
}, $i = function() {
  var t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
  for (e in ws)
    t += "|" + e + "\\b";
  return new RegExp(t + ")", "gi");
}(), Rb = /hsl[a]?\(/, xx = function(e) {
  var n = e.join(" "), r;
  if ($i.lastIndex = 0, $i.test(n))
    return r = Rb.test(n), e[1] = P1(e[1], r), e[0] = P1(e[0], r, wx(e[1])), !0;
}, ka, xn = function() {
  var t = Date.now, e = 500, n = 33, r = t(), i = r, o = 1e3 / 240, l = o, s = [], a, u, c, f, d, p, m = function h(_) {
    var v = t() - i, g = _ === !0, y, w, S, E;
    if (v > e && (r += v - n), i += v, S = i - r, y = S - l, (y > 0 || g) && (E = ++f.frame, d = S - f.time * 1e3, f.time = S = S / 1e3, l += y + (y >= o ? 4 : o - y), w = 1), g || (a = u(h)), w)
      for (p = 0; p < s.length; p++)
        s[p](S, d, E, _);
  };
  return f = {
    time: 0,
    frame: 0,
    tick: function() {
      m(!0);
    },
    deltaRatio: function(_) {
      return d / (1e3 / (_ || 60));
    },
    wake: function() {
      Zw && (!rh && Z0() && (Nn = rh = window, J0 = Nn.document || {}, bn.gsap = fn, (Nn.gsapVersions || (Nn.gsapVersions = [])).push(fn.version), Jw(Lc || Nn.GreenSockGlobals || !Nn.gsap && Nn || {}), c = Nn.requestAnimationFrame, vx.forEach(yx)), a && f.sleep(), u = c || function(_) {
        return setTimeout(_, l - f.time * 1e3 + 1 | 0);
      }, ka = 1, m(2));
    },
    sleep: function() {
      (c ? Nn.cancelAnimationFrame : clearTimeout)(a), ka = 0, u = wa;
    },
    lagSmoothing: function(_, v) {
      e = _ || 1 / 0, n = Math.min(v || 33, e);
    },
    fps: function(_) {
      o = 1e3 / (_ || 240), l = f.time * 1e3 + o;
    },
    add: function(_, v, g) {
      var y = v ? function(w, S, E, k) {
        _(w, S, E, k), f.remove(y);
      } : _;
      return f.remove(_), s[g ? "unshift" : "push"](y), Hl(), y;
    },
    remove: function(_, v) {
      ~(v = s.indexOf(_)) && s.splice(v, 1) && p >= v && p--;
    },
    _listeners: s
  }, f;
}(), Hl = function() {
  return !ka && xn.wake();
}, ae = {}, Nb = /^[\d.\-M][\d.\-,\s]/, Ib = /["']/g, $b = function(e) {
  for (var n = {}, r = e.substr(1, e.length - 3).split(":"), i = r[0], o = 1, l = r.length, s, a, u; o < l; o++)
    a = r[o], s = o !== l - 1 ? a.lastIndexOf(",") : a.length, u = a.substr(0, s), n[i] = isNaN(u) ? u.replace(Ib, "").trim() : +u, i = a.substr(s + 1).trim();
  return n;
}, Ab = function(e) {
  var n = e.indexOf("(") + 1, r = e.indexOf(")"), i = e.indexOf("(", n);
  return e.substring(n, ~i && i < r ? e.indexOf(")", r + 1) : r);
}, Db = function(e) {
  var n = (e + "").split("("), r = ae[n[0]];
  return r && n.length > 1 && r.config ? r.config.apply(null, ~e.indexOf("{") ? [$b(n[1])] : Ab(e).split(",").map(ix)) : ae._CE && Nb.test(e) ? ae._CE("", e) : r;
}, kx = function(e) {
  return function(n) {
    return 1 - e(1 - n);
  };
}, Sx = function t(e, n) {
  for (var r = e._first, i; r; )
    r instanceof en ? t(r, n) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== n && (r.timeline ? t(r.timeline, n) : (i = r._ease, r._ease = r._yEase, r._yEase = i, r._yoyo = n)), r = r._next;
}, So = function(e, n) {
  return e && (Ve(e) ? e : ae[e] || Db(e)) || n;
}, Bo = function(e, n, r, i) {
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
  return un(e, function(s) {
    ae[s] = bn[s] = o, ae[l = s.toLowerCase()] = r;
    for (var a in o)
      ae[l + (a === "easeIn" ? ".in" : a === "easeOut" ? ".out" : ".inOut")] = ae[s + "." + a] = o[a];
  }), o;
}, Ex = function(e) {
  return function(n) {
    return n < 0.5 ? (1 - e(1 - n * 2)) / 2 : 0.5 + e((n - 0.5) * 2) / 2;
  };
}, Pd = function t(e, n, r) {
  var i = n >= 1 ? n : 1, o = (r || (e ? 0.3 : 0.45)) / (n < 1 ? n : 1), l = o / th * (Math.asin(1 / i) || 0), s = function(c) {
    return c === 1 ? 1 : i * Math.pow(2, -10 * c) * cb((c - l) * o) + 1;
  }, a = e === "out" ? s : e === "in" ? function(u) {
    return 1 - s(1 - u);
  } : Ex(s);
  return o = th / o, a.config = function(u, c) {
    return t(e, u, c);
  }, a;
}, Od = function t(e, n) {
  n === void 0 && (n = 1.70158);
  var r = function(l) {
    return l ? --l * l * ((n + 1) * l + n) + 1 : 0;
  }, i = e === "out" ? r : e === "in" ? function(o) {
    return 1 - r(1 - o);
  } : Ex(r);
  return i.config = function(o) {
    return t(e, o);
  }, i;
};
un("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
  var n = e < 5 ? e + 1 : e;
  Bo(t + ",Power" + (n - 1), e ? function(r) {
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
Bo("Elastic", Pd("in"), Pd("out"), Pd());
(function(t, e) {
  var n = 1 / e, r = 2 * n, i = 2.5 * n, o = function(s) {
    return s < n ? t * s * s : s < r ? t * Math.pow(s - 1.5 / e, 2) + 0.75 : s < i ? t * (s -= 2.25 / e) * s + 0.9375 : t * Math.pow(s - 2.625 / e, 2) + 0.984375;
  };
  Bo("Bounce", function(l) {
    return 1 - o(1 - l);
  }, o);
})(7.5625, 2.75);
Bo("Expo", function(t) {
  return t ? Math.pow(2, 10 * (t - 1)) : 0;
});
Bo("Circ", function(t) {
  return -(Xw(1 - t * t) - 1);
});
Bo("Sine", function(t) {
  return t === 1 ? 1 : -ub(t * sb) + 1;
});
Bo("Back", Od("in"), Od("out"), Od());
ae.SteppedEase = ae.steps = bn.SteppedEase = {
  config: function(e, n) {
    e === void 0 && (e = 1);
    var r = 1 / e, i = e + (n ? 0 : 1), o = n ? 1 : 0, l = 1 - ke;
    return function(s) {
      return ((i * za(0, l, s) | 0) + o) * r;
    };
  }
};
Ll.ease = ae["quad.out"];
un("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
  return nm += t + "," + t + "Params,";
});
var Tx = function(e, n) {
  this.id = ab++, e._gsap = this, this.target = e, this.harness = n, this.get = n ? n.get : nx, this.set = n ? n.getSetter : sm;
}, Sa = /* @__PURE__ */ function() {
  function t(n) {
    this.vars = n, this._delay = +n.delay || 0, (this._repeat = n.repeat === 1 / 0 ? -2 : n.repeat || 0) && (this._rDelay = n.repeatDelay || 0, this._yoyo = !!n.yoyo || !!n.yoyoEase), this._ts = 1, Fl(this, +n.duration, 1, 1), this.data = n.data, We && (this._ctx = We, We.data.push(this)), ka || xn.wake();
  }
  var e = t.prototype;
  return e.delay = function(r) {
    return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay), this._delay = r, this) : this._delay;
  }, e.duration = function(r) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur;
  }, e.totalDuration = function(r) {
    return arguments.length ? (this._dirty = 0, Fl(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, e.totalTime = function(r, i) {
    if (Hl(), !arguments.length)
      return this._tTime;
    var o = this._dp;
    if (o && o.smoothChildTiming && this._ts) {
      for (If(this, r), !o._dp || o.parent || sx(o, this); o && o.parent; )
        o.parent._time !== o._start + (o._ts >= 0 ? o._tTime / o._ts : (o.totalDuration() - o._tTime) / -o._ts) && o.totalTime(o._tTime, !0), o = o.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && Tr(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== r || !this._dur && !i || this._initted && Math.abs(this._zTime) === ke || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r), rx(this, r, i)), this;
  }, e.time = function(r, i) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + T1(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), i) : this._time;
  }, e.totalProgress = function(r, i) {
    return arguments.length ? this.totalTime(this.totalDuration() * r, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
  }, e.progress = function(r, i) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + T1(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
  }, e.iteration = function(r, i) {
    var o = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (r - 1) * o, i) : this._repeat ? jl(this._tTime, o) + 1 : 1;
  }, e.timeScale = function(r) {
    if (!arguments.length)
      return this._rts === -ke ? 0 : this._rts;
    if (this._rts === r)
      return this;
    var i = this.parent && this._ts ? Bc(this.parent._time, this) : this._tTime;
    return this._rts = +r || 0, this._ts = this._ps || r === -ke ? 0 : this._rts, this.totalTime(za(-Math.abs(this._delay), this._tDur, i), !0), Nf(this), vb(this);
  }, e.paused = function(r) {
    return arguments.length ? (this._ps !== r && (this._ps = r, r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Hl(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== ke && (this._tTime -= ke)))), this) : this._ps;
  }, e.startTime = function(r) {
    if (arguments.length) {
      this._start = r;
      var i = this.parent || this._dp;
      return i && (i._sort || !this.parent) && Tr(i, this, r - this._delay), this;
    }
    return this._start;
  }, e.endTime = function(r) {
    return this._start + (an(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, e.rawTime = function(r) {
    var i = this.parent || this._dp;
    return i ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Bc(i.rawTime(r), this) : this._tTime : this._tTime;
  }, e.revert = function(r) {
    r === void 0 && (r = pb);
    var i = Mt;
    return Mt = r, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(r), this.totalTime(-0.01, r.suppressEvents)), this.data !== "nested" && r.kill !== !1 && this.kill(), Mt = i, this;
  }, e.globalTime = function(r) {
    for (var i = this, o = arguments.length ? r : i.rawTime(); i; )
      o = i._start + o / (i._ts || 1), i = i._dp;
    return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 / 0 : this._sat.globalTime(r) : o;
  }, e.repeat = function(r) {
    return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r, C1(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, e.repeatDelay = function(r) {
    if (arguments.length) {
      var i = this._time;
      return this._rDelay = r, C1(this), i ? this.time(i) : this;
    }
    return this._rDelay;
  }, e.yoyo = function(r) {
    return arguments.length ? (this._yoyo = r, this) : this._yoyo;
  }, e.seek = function(r, i) {
    return this.totalTime(Rn(this, r), an(i));
  }, e.restart = function(r, i) {
    return this.play().totalTime(r ? -this._delay : 0, an(i));
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
      var l = Ve(r) ? r : ox, s = function() {
        var u = i.then;
        i.then = null, Ve(l) && (l = l(i)) && (l.then || l === i) && (i.then = u), o(l), i.then = u;
      };
      i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? s() : i._prom = s;
    });
  }, e.kill = function() {
    _s(this);
  }, t;
}();
Xn(Sa.prototype, {
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
var en = /* @__PURE__ */ function(t) {
  Yw(e, t);
  function e(r, i) {
    var o;
    return r === void 0 && (r = {}), o = t.call(this, r) || this, o.labels = {}, o.smoothChildTiming = !!r.smoothChildTiming, o.autoRemoveChildren = !!r.autoRemoveChildren, o._sort = an(r.sortChildren), De && Tr(r.parent || De, Fr(o), i), r.reversed && o.reverse(), r.paused && o.paused(!0), r.scrollTrigger && ax(Fr(o), r.scrollTrigger), o;
  }
  var n = e.prototype;
  return n.to = function(i, o, l) {
    return js(0, arguments, this), this;
  }, n.from = function(i, o, l) {
    return js(1, arguments, this), this;
  }, n.fromTo = function(i, o, l, s) {
    return js(2, arguments, this), this;
  }, n.set = function(i, o, l) {
    return o.duration = 0, o.parent = this, Ls(o).repeatDelay || (o.repeat = 0), o.immediateRender = !!o.immediateRender, new Je(i, o, Rn(this, l), 1), this;
  }, n.call = function(i, o, l) {
    return Tr(this, Je.delayedCall(0, i, o), l);
  }, n.staggerTo = function(i, o, l, s, a, u, c) {
    return l.duration = o, l.stagger = l.stagger || s, l.onComplete = u, l.onCompleteParams = c, l.parent = this, new Je(i, l, Rn(this, a)), this;
  }, n.staggerFrom = function(i, o, l, s, a, u, c) {
    return l.runBackwards = 1, Ls(l).immediateRender = an(l.immediateRender), this.staggerTo(i, o, l, s, a, u, c);
  }, n.staggerFromTo = function(i, o, l, s, a, u, c, f) {
    return s.startAt = l, Ls(s).immediateRender = an(s.immediateRender), this.staggerTo(i, o, s, a, u, c, f);
  }, n.render = function(i, o, l) {
    var s = this._time, a = this._dirty ? this.totalDuration() : this._tDur, u = this._dur, c = i <= 0 ? 0 : yt(i), f = this._zTime < 0 != i < 0 && (this._initted || !u), d, p, m, h, _, v, g, y, w, S, E, k;
    if (this !== De && c > a && i >= 0 && (c = a), c !== this._tTime || l || f) {
      if (s !== this._time && u && (c += this._time - s, i += this._time - s), d = c, w = this._start, y = this._ts, v = !y, f && (u || (s = this._zTime), (i || !o) && (this._zTime = i)), this._repeat) {
        if (E = this._yoyo, _ = u + this._rDelay, this._repeat < -1 && i < 0)
          return this.totalTime(_ * 100 + i, o, l);
        if (d = yt(c % _), c === a ? (h = this._repeat, d = u) : (h = ~~(c / _), h && h === c / _ && (d = u, h--), d > u && (d = u)), S = jl(this._tTime, _), !s && this._tTime && S !== h && this._tTime - S * _ - this._dur <= 0 && (S = h), E && h & 1 && (d = u - d, k = 1), h !== S && !this._lock) {
          var b = E && S & 1, O = b === (E && h & 1);
          if (h < S && (b = !b), s = b ? 0 : c % u ? u : c, this._lock = 1, this.render(s || (k ? 0 : yt(h * _)), o, !u)._lock = 0, this._tTime = c, !o && this.parent && Bn(this, "onRepeat"), this.vars.repeatRefresh && !k && (this.invalidate()._lock = 1), s && s !== this._time || v !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (u = this._dur, a = this._tDur, O && (this._lock = 2, s = b ? u : -1e-4, this.render(s, !0), this.vars.repeatRefresh && !k && this.invalidate()), this._lock = 0, !this._ts && !v)
            return this;
          Sx(this, k);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (g = xb(this, yt(s), yt(d)), g && (c -= d - (d = g._start))), this._tTime = c, this._time = d, this._act = !y, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, s = 0), !s && d && !o && !h && (Bn(this, "onStart"), this._tTime !== c))
        return this;
      if (d >= s && i >= 0)
        for (p = this._first; p; ) {
          if (m = p._next, (p._act || d >= p._start) && p._ts && g !== p) {
            if (p.parent !== this)
              return this.render(i, o, l);
            if (p.render(p._ts > 0 ? (d - p._start) * p._ts : (p._dirty ? p.totalDuration() : p._tDur) + (d - p._start) * p._ts, o, l), d !== this._time || !this._ts && !v) {
              g = 0, m && (c += this._zTime = -ke);
              break;
            }
          }
          p = m;
        }
      else {
        p = this._last;
        for (var P = i < 0 ? i : d; p; ) {
          if (m = p._prev, (p._act || P <= p._end) && p._ts && g !== p) {
            if (p.parent !== this)
              return this.render(i, o, l);
            if (p.render(p._ts > 0 ? (P - p._start) * p._ts : (p._dirty ? p.totalDuration() : p._tDur) + (P - p._start) * p._ts, o, l || Mt && (p._initted || p._startAt)), d !== this._time || !this._ts && !v) {
              g = 0, m && (c += this._zTime = P ? -ke : ke);
              break;
            }
          }
          p = m;
        }
      }
      if (g && !o && (this.pause(), g.render(d >= s ? 0 : -ke)._zTime = d >= s ? 1 : -1, this._ts))
        return this._start = w, Nf(this), this.render(i, o, l);
      this._onUpdate && !o && Bn(this, "onUpdate", !0), (c === a && this._tTime >= this.totalDuration() || !c && s) && (w === this._start || Math.abs(y) !== Math.abs(this._ts)) && (this._lock || ((i || !u) && (c === a && this._ts > 0 || !c && this._ts < 0) && Li(this, 1), !o && !(i < 0 && !s) && (c || s || !a) && (Bn(this, c === a && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(c < a && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, n.add = function(i, o) {
    var l = this;
    if (ei(o) || (o = Rn(this, o, i)), !(i instanceof Sa)) {
      if (Rt(i))
        return i.forEach(function(s) {
          return l.add(s, o);
        }), this;
      if (dt(i))
        return this.addLabel(i, o);
      if (Ve(i))
        i = Je.delayedCall(0, i);
      else
        return this;
    }
    return this !== i ? Tr(this, i, o) : this;
  }, n.getChildren = function(i, o, l, s) {
    i === void 0 && (i = !0), o === void 0 && (o = !0), l === void 0 && (l = !0), s === void 0 && (s = -Fn);
    for (var a = [], u = this._first; u; )
      u._start >= s && (u instanceof Je ? o && a.push(u) : (l && a.push(u), i && a.push.apply(a, u.getChildren(!0, o, l)))), u = u._next;
    return a;
  }, n.getById = function(i) {
    for (var o = this.getChildren(1, 1, 1), l = o.length; l--; )
      if (o[l].vars.id === i)
        return o[l];
  }, n.remove = function(i) {
    return dt(i) ? this.removeLabel(i) : Ve(i) ? this.killTweensOf(i) : (Rf(this, i), i === this._recent && (this._recent = this._last), ko(this));
  }, n.totalTime = function(i, o) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = yt(xn.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), t.prototype.totalTime.call(this, i, o), this._forcing = 0, this) : this._tTime;
  }, n.addLabel = function(i, o) {
    return this.labels[i] = Rn(this, o), this;
  }, n.removeLabel = function(i) {
    return delete this.labels[i], this;
  }, n.addPause = function(i, o, l) {
    var s = Je.delayedCall(0, o || wa, l);
    return s.data = "isPause", this._hasPause = 1, Tr(this, s, Rn(this, i));
  }, n.removePause = function(i) {
    var o = this._first;
    for (i = Rn(this, i); o; )
      o._start === i && o.data === "isPause" && Li(o), o = o._next;
  }, n.killTweensOf = function(i, o, l) {
    for (var s = this.getTweensOf(i, l), a = s.length; a--; )
      _i !== s[a] && s[a].kill(i, o);
    return this;
  }, n.getTweensOf = function(i, o) {
    for (var l = [], s = Hn(i), a = this._first, u = ei(o), c; a; )
      a instanceof Je ? hb(a._targets, s) && (u ? (!_i || a._initted && a._ts) && a.globalTime(0) <= o && a.globalTime(a.totalDuration()) > o : !o || a.isActive()) && l.push(a) : (c = a.getTweensOf(s, o)).length && l.push.apply(l, c), a = a._next;
    return l;
  }, n.tweenTo = function(i, o) {
    o = o || {};
    var l = this, s = Rn(l, i), a = o, u = a.startAt, c = a.onStart, f = a.onStartParams, d = a.immediateRender, p, m = Je.to(l, Xn({
      ease: o.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: s,
      overwrite: "auto",
      duration: o.duration || Math.abs((s - (u && "time" in u ? u.time : l._time)) / l.timeScale()) || ke,
      onStart: function() {
        if (l.pause(), !p) {
          var _ = o.duration || Math.abs((s - (u && "time" in u ? u.time : l._time)) / l.timeScale());
          m._dur !== _ && Fl(m, _, 0, 1).render(m._time, !0, !0), p = 1;
        }
        c && c.apply(m, f || []);
      }
    }, o));
    return d ? m.render(0) : m;
  }, n.tweenFromTo = function(i, o, l) {
    return this.tweenTo(o, Xn({
      startAt: {
        time: Rn(this, i)
      }
    }, l));
  }, n.recent = function() {
    return this._recent;
  }, n.nextLabel = function(i) {
    return i === void 0 && (i = this._time), b1(this, Rn(this, i));
  }, n.previousLabel = function(i) {
    return i === void 0 && (i = this._time), b1(this, Rn(this, i), 1);
  }, n.currentLabel = function(i) {
    return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + ke);
  }, n.shiftChildren = function(i, o, l) {
    l === void 0 && (l = 0);
    for (var s = this._first, a = this.labels, u; s; )
      s._start >= l && (s._start += i, s._end += i), s = s._next;
    if (o)
      for (u in a)
        a[u] >= l && (a[u] += i);
    return ko(this);
  }, n.invalidate = function(i) {
    var o = this._first;
    for (this._lock = 0; o; )
      o.invalidate(i), o = o._next;
    return t.prototype.invalidate.call(this, i);
  }, n.clear = function(i) {
    i === void 0 && (i = !0);
    for (var o = this._first, l; o; )
      l = o._next, this.remove(o), o = l;
    return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), ko(this);
  }, n.totalDuration = function(i) {
    var o = 0, l = this, s = l._last, a = Fn, u, c, f;
    if (arguments.length)
      return l.timeScale((l._repeat < 0 ? l.duration() : l.totalDuration()) / (l.reversed() ? -i : i));
    if (l._dirty) {
      for (f = l.parent; s; )
        u = s._prev, s._dirty && s.totalDuration(), c = s._start, c > a && l._sort && s._ts && !l._lock ? (l._lock = 1, Tr(l, s, c - s._delay, 1)._lock = 0) : a = c, c < 0 && s._ts && (o -= c, (!f && !l._dp || f && f.smoothChildTiming) && (l._start += c / l._ts, l._time -= c, l._tTime -= c), l.shiftChildren(-c, !1, -1 / 0), a = 0), s._end > o && s._ts && (o = s._end), s = u;
      Fl(l, l === De && l._time > o ? l._time : o, 1, 1), l._dirty = 0;
    }
    return l._tDur;
  }, e.updateRoot = function(i) {
    if (De._ts && (rx(De, Bc(i, De)), tx = xn.frame), xn.frame >= S1) {
      S1 += Tn.autoSleep || 120;
      var o = De._first;
      if ((!o || !o._ts) && Tn.autoSleep && xn._listeners.length < 2) {
        for (; o && !o._ts; )
          o = o._next;
        o || xn.sleep();
      }
    }
  }, e;
}(Sa);
Xn(en.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var zb = function(e, n, r, i, o, l, s) {
  var a = new cn(this._pt, e, n, 0, 1, Rx, null, o), u = 0, c = 0, f, d, p, m, h, _, v, g;
  for (a.b = r, a.e = i, r += "", i += "", (v = ~i.indexOf("random(")) && (i = xa(i)), l && (g = [r, i], l(g, e, n), r = g[0], i = g[1]), d = r.match(Td) || []; f = Td.exec(i); )
    m = f[0], h = i.substring(u, f.index), p ? p = (p + 1) % 5 : h.substr(-5) === "rgba(" && (p = 1), m !== d[c++] && (_ = parseFloat(d[c - 1]) || 0, a._pt = {
      _next: a._pt,
      p: h || c === 1 ? h : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: _,
      c: m.charAt(1) === "=" ? El(_, m) - _ : parseFloat(m) - _,
      m: p && p < 4 ? Math.round : 0
    }, u = Td.lastIndex);
  return a.c = u < i.length ? i.substring(u, i.length) : "", a.fp = s, (qw.test(i) || v) && (a.e = 0), this._pt = a, a;
}, im = function(e, n, r, i, o, l, s, a, u, c) {
  Ve(i) && (i = i(o || 0, e, l));
  var f = e[n], d = r !== "get" ? r : Ve(f) ? u ? e[n.indexOf("set") || !Ve(e["get" + n.substr(3)]) ? n : "get" + n.substr(3)](u) : e[n]() : f, p = Ve(f) ? u ? Bb : Ox : lm, m;
  if (dt(i) && (~i.indexOf("random(") && (i = xa(i)), i.charAt(1) === "=" && (m = El(d, i) + (Ot(d) || 0), (m || m === 0) && (i = m))), !c || d !== i || ch)
    return !isNaN(d * i) && i !== "" ? (m = new cn(this._pt, e, n, +d || 0, i - (d || 0), typeof f == "boolean" ? Vb : Mx, 0, p), u && (m.fp = u), s && m.modifier(s, this, e), this._pt = m) : (!f && !(n in e) && em(n, i), zb.call(this, e, n, d, i, p, a || Tn.stringFilter, u));
}, Lb = function(e, n, r, i, o) {
  if (Ve(e) && (e = Fs(e, o, n, r, i)), !Ir(e) || e.style && e.nodeType || Rt(e) || Gw(e))
    return dt(e) ? Fs(e, o, n, r, i) : e;
  var l = {}, s;
  for (s in e)
    l[s] = Fs(e[s], o, n, r, i);
  return l;
}, Cx = function(e, n, r, i, o, l) {
  var s, a, u, c;
  if (wn[e] && (s = new wn[e]()).init(o, s.rawVars ? n[e] : Lb(n[e], i, o, l, r), r, i, l) !== !1 && (r._pt = a = new cn(r._pt, o, e, 0, 1, s.render, s, 0, s.priority), r !== pl))
    for (u = r._ptLookup[r._targets.indexOf(o)], c = s._props.length; c--; )
      u[s._props[c]] = a;
  return s;
}, _i, ch, om = function t(e, n, r) {
  var i = e.vars, o = i.ease, l = i.startAt, s = i.immediateRender, a = i.lazy, u = i.onUpdate, c = i.onUpdateParams, f = i.callbackScope, d = i.runBackwards, p = i.yoyoEase, m = i.keyframes, h = i.autoRevert, _ = e._dur, v = e._startAt, g = e._targets, y = e.parent, w = y && y.data === "nested" ? y.vars.targets : g, S = e._overwrite === "auto" && !q0, E = e.timeline, k, b, O, P, L, A, X, N, z, V, j, R, D;
  if (E && (!m || !o) && (o = "none"), e._ease = So(o, Ll.ease), e._yEase = p ? kx(So(p === !0 ? o : p, Ll.ease)) : 0, p && e._yoyo && !e._repeat && (p = e._yEase, e._yEase = e._ease, e._ease = p), e._from = !E && !!i.runBackwards, !E || m && !i.stagger) {
    if (N = g[0] ? xo(g[0]).harness : 0, R = N && i[N.prop], k = Hc(i, tm), v && (v._zTime < 0 && v.progress(1), n < 0 && d && s && !h ? v.render(-1, !0) : v.revert(d && _ ? qu : db), v._lazy = 0), l) {
      if (Li(e._startAt = Je.set(g, Xn({
        data: "isStart",
        overwrite: !1,
        parent: y,
        immediateRender: !0,
        lazy: !v && an(a),
        startAt: null,
        delay: 0,
        onUpdate: u,
        onUpdateParams: c,
        callbackScope: f,
        stagger: 0
      }, l))), e._startAt._dp = 0, e._startAt._sat = e, n < 0 && (Mt || !s && !h) && e._startAt.revert(qu), s && _ && n <= 0 && r <= 0) {
        n && (e._zTime = n);
        return;
      }
    } else if (d && _ && !v) {
      if (n && (s = !1), O = Xn({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: s && !v && an(a),
        immediateRender: s,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: y
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, k), R && (O[N.prop] = R), Li(e._startAt = Je.set(g, O)), e._startAt._dp = 0, e._startAt._sat = e, n < 0 && (Mt ? e._startAt.revert(qu) : e._startAt.render(-1, !0)), e._zTime = n, !s)
        t(e._startAt, ke, ke);
      else if (!n)
        return;
    }
    for (e._pt = e._ptCache = 0, a = _ && an(a) || a && !_, b = 0; b < g.length; b++) {
      if (L = g[b], X = L._gsap || rm(g)[b]._gsap, e._ptLookup[b] = V = {}, ih[X.id] && Ii.length && Fc(), j = w === g ? b : w.indexOf(L), N && (z = new N()).init(L, R || k, e, j, w) !== !1 && (e._pt = P = new cn(e._pt, L, z.name, 0, 1, z.render, z, 0, z.priority), z._props.forEach(function(x) {
        V[x] = P;
      }), z.priority && (A = 1)), !N || R)
        for (O in k)
          wn[O] && (z = Cx(O, k, e, j, L, w)) ? z.priority && (A = 1) : V[O] = P = im.call(e, L, O, "get", k[O], j, w, 0, i.stringFilter);
      e._op && e._op[b] && e.kill(L, e._op[b]), S && e._pt && (_i = e, De.killTweensOf(L, V, e.globalTime(n)), D = !e.parent, _i = 0), e._pt && a && (ih[X.id] = 1);
    }
    A && Nx(e), e._onInit && e._onInit(e);
  }
  e._onUpdate = u, e._initted = (!e._op || e._pt) && !D, m && n <= 0 && E.render(Fn, !0, !0);
}, jb = function(e, n, r, i, o, l, s) {
  var a = (e._pt && e._ptCache || (e._ptCache = {}))[n], u, c, f, d;
  if (!a)
    for (a = e._ptCache[n] = [], f = e._ptLookup, d = e._targets.length; d--; ) {
      if (u = f[d][n], u && u.d && u.d._pt)
        for (u = u.d._pt; u && u.p !== n && u.fp !== n; )
          u = u._next;
      if (!u)
        return ch = 1, e.vars[n] = "+=0", om(e, s), ch = 0, 1;
      a.push(u);
    }
  for (d = a.length; d--; )
    c = a[d], u = c._pt || c, u.s = (i || i === 0) && !o ? i : u.s + (i || 0) + l * u.c, u.c = r - u.s, c.e && (c.e = Xe(r) + Ot(c.e)), c.b && (c.b = u.s + Ot(c.b));
}, Fb = function(e, n) {
  var r = e[0] ? xo(e[0]).harness : 0, i = r && r.aliases, o, l, s, a;
  if (!i)
    return n;
  o = Ao({}, n);
  for (l in i)
    if (l in o)
      for (a = i[l].split(","), s = a.length; s--; )
        o[a[s]] = o[l];
  return o;
}, Hb = function(e, n, r, i) {
  var o = n.ease || i || "power1.inOut", l, s;
  if (Rt(n))
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
}, Fs = function(e, n, r, i, o) {
  return Ve(e) ? e.call(n, r, i, o) : dt(e) && ~e.indexOf("random(") ? xa(e) : e;
}, bx = nm + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", Px = {};
un(bx + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
  return Px[t] = 1;
});
var Je = /* @__PURE__ */ function(t) {
  Yw(e, t);
  function e(r, i, o, l) {
    var s;
    typeof i == "number" && (o.duration = i, i = o, o = null), s = t.call(this, l ? i : Ls(i)) || this;
    var a = s.vars, u = a.duration, c = a.delay, f = a.immediateRender, d = a.stagger, p = a.overwrite, m = a.keyframes, h = a.defaults, _ = a.scrollTrigger, v = a.yoyoEase, g = i.parent || De, y = (Rt(r) || Gw(r) ? ei(r[0]) : "length" in i) ? [r] : Hn(r), w, S, E, k, b, O, P, L;
    if (s._targets = y.length ? rm(y) : jc("GSAP target " + r + " not found. https://greensock.com", !Tn.nullTargetWarn) || [], s._ptLookup = [], s._overwrite = p, m || d || gu(u) || gu(c)) {
      if (i = s.vars, w = s.timeline = new en({
        data: "nested",
        defaults: h || {},
        targets: g && g.data === "nested" ? g.vars.targets : y
      }), w.kill(), w.parent = w._dp = Fr(s), w._start = 0, d || gu(u) || gu(c)) {
        if (k = y.length, P = d && dx(d), Ir(d))
          for (b in d)
            ~bx.indexOf(b) && (L || (L = {}), L[b] = d[b]);
        for (S = 0; S < k; S++)
          E = Hc(i, Px), E.stagger = 0, v && (E.yoyoEase = v), L && Ao(E, L), O = y[S], E.duration = +Fs(u, Fr(s), S, O, y), E.delay = (+Fs(c, Fr(s), S, O, y) || 0) - s._delay, !d && k === 1 && E.delay && (s._delay = c = E.delay, s._start += c, E.delay = 0), w.to(O, E, P ? P(S, O, y) : 0), w._ease = ae.none;
        w.duration() ? u = c = 0 : s.timeline = 0;
      } else if (m) {
        Ls(Xn(w.vars.defaults, {
          ease: "none"
        })), w._ease = So(m.ease || i.ease || "none");
        var A = 0, X, N, z;
        if (Rt(m))
          m.forEach(function(V) {
            return w.to(y, V, ">");
          }), w.duration();
        else {
          E = {};
          for (b in m)
            b === "ease" || b === "easeEach" || Hb(b, m[b], E, m.easeEach);
          for (b in E)
            for (X = E[b].sort(function(V, j) {
              return V.t - j.t;
            }), A = 0, S = 0; S < X.length; S++)
              N = X[S], z = {
                ease: N.e,
                duration: (N.t - (S ? X[S - 1].t : 0)) / 100 * u
              }, z[b] = N.v, w.to(y, z, A), A += z.duration;
          w.duration() < u && w.to({}, {
            duration: u - w.duration()
          });
        }
      }
      u || s.duration(u = w.duration());
    } else
      s.timeline = 0;
    return p === !0 && !q0 && (_i = Fr(s), De.killTweensOf(y), _i = 0), Tr(g, Fr(s), o), i.reversed && s.reverse(), i.paused && s.paused(!0), (f || !u && !m && s._start === yt(g._time) && an(f) && yb(Fr(s)) && g.data !== "nested") && (s._tTime = -ke, s.render(Math.max(0, -c) || 0)), _ && ax(Fr(s), _), s;
  }
  var n = e.prototype;
  return n.render = function(i, o, l) {
    var s = this._time, a = this._tDur, u = this._dur, c = i < 0, f = i > a - ke && !c ? a : i < ke ? 0 : i, d, p, m, h, _, v, g, y, w;
    if (!u)
      wb(this, i, o, l);
    else if (f !== this._tTime || !i || l || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== c) {
      if (d = f, y = this.timeline, this._repeat) {
        if (h = u + this._rDelay, this._repeat < -1 && c)
          return this.totalTime(h * 100 + i, o, l);
        if (d = yt(f % h), f === a ? (m = this._repeat, d = u) : (m = ~~(f / h), m && m === f / h && (d = u, m--), d > u && (d = u)), v = this._yoyo && m & 1, v && (w = this._yEase, d = u - d), _ = jl(this._tTime, h), d === s && !l && this._initted)
          return this._tTime = f, this;
        m !== _ && (y && this._yEase && Sx(y, v), this.vars.repeatRefresh && !v && !this._lock && (this._lock = l = 1, this.render(yt(h * m), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (ux(this, c ? i : d, l, o, f))
          return this._tTime = 0, this;
        if (s !== this._time)
          return this;
        if (u !== this._dur)
          return this.render(i, o, l);
      }
      if (this._tTime = f, this._time = d, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = g = (w || this._ease)(d / u), this._from && (this.ratio = g = 1 - g), d && !s && !o && !m && (Bn(this, "onStart"), this._tTime !== f))
        return this;
      for (p = this._pt; p; )
        p.r(g, p.d), p = p._next;
      y && y.render(i < 0 ? i : !d && v ? -ke : y._dur * y._ease(d / this._dur), o, l) || this._startAt && (this._zTime = i), this._onUpdate && !o && (c && oh(this, i, o, l), Bn(this, "onUpdate")), this._repeat && m !== _ && this.vars.onRepeat && !o && this.parent && Bn(this, "onRepeat"), (f === this._tDur || !f) && this._tTime === f && (c && !this._onUpdate && oh(this, i, !0, !0), (i || !u) && (f === this._tDur && this._ts > 0 || !f && this._ts < 0) && Li(this, 1), !o && !(c && !s) && (f || s || v) && (Bn(this, f === a ? "onComplete" : "onReverseComplete", !0), this._prom && !(f < a && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, n.targets = function() {
    return this._targets;
  }, n.invalidate = function(i) {
    return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), t.prototype.invalidate.call(this, i);
  }, n.resetTo = function(i, o, l, s) {
    ka || xn.wake(), this._ts || this.play();
    var a = Math.min(this._dur, (this._dp._time - this._start) * this._ts), u;
    return this._initted || om(this, a), u = this._ease(a / this._dur), jb(this, i, o, l, s, u, a) ? this.resetTo(i, o, l, s) : (If(this, 0), this.parent || lx(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, n.kill = function(i, o) {
    if (o === void 0 && (o = "all"), !i && (!o || o === "all"))
      return this._lazy = this._pt = 0, this.parent ? _s(this) : this;
    if (this.timeline) {
      var l = this.timeline.totalDuration();
      return this.timeline.killTweensOf(i, o, _i && _i.vars.overwrite !== !0)._first || _s(this), this.parent && l !== this.timeline.totalDuration() && Fl(this, this._dur * this.timeline._tDur / l, 0, 1), this;
    }
    var s = this._targets, a = i ? Hn(i) : s, u = this._ptLookup, c = this._pt, f, d, p, m, h, _, v;
    if ((!o || o === "all") && gb(s, a))
      return o === "all" && (this._pt = 0), _s(this);
    for (f = this._op = this._op || [], o !== "all" && (dt(o) && (h = {}, un(o, function(g) {
      return h[g] = 1;
    }), o = h), o = Fb(s, o)), v = s.length; v--; )
      if (~a.indexOf(s[v])) {
        d = u[v], o === "all" ? (f[v] = o, m = d, p = {}) : (p = f[v] = f[v] || {}, m = o);
        for (h in m)
          _ = d && d[h], _ && ((!("kill" in _.d) || _.d.kill(h) === !0) && Rf(this, _, "_pt"), delete d[h]), p !== "all" && (p[h] = 1);
      }
    return this._initted && !this._pt && c && _s(this), this;
  }, e.to = function(i, o) {
    return new e(i, o, arguments[2]);
  }, e.from = function(i, o) {
    return js(1, arguments);
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
    return js(2, arguments);
  }, e.set = function(i, o) {
    return o.duration = 0, o.repeatDelay || (o.repeat = 0), new e(i, o);
  }, e.killTweensOf = function(i, o, l) {
    return De.killTweensOf(i, o, l);
  }, e;
}(Sa);
Xn(Je.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
un("staggerTo,staggerFrom,staggerFromTo", function(t) {
  Je[t] = function() {
    var e = new en(), n = sh.call(arguments, 0);
    return n.splice(t === "staggerFromTo" ? 5 : 4, 0, 0), e[t].apply(e, n);
  };
});
var lm = function(e, n, r) {
  return e[n] = r;
}, Ox = function(e, n, r) {
  return e[n](r);
}, Bb = function(e, n, r, i) {
  return e[n](i.fp, r);
}, Wb = function(e, n, r) {
  return e.setAttribute(n, r);
}, sm = function(e, n) {
  return Ve(e[n]) ? Ox : K0(e[n]) && e.setAttribute ? Wb : lm;
}, Mx = function(e, n) {
  return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e6) / 1e6, n);
}, Vb = function(e, n) {
  return n.set(n.t, n.p, !!(n.s + n.c * e), n);
}, Rx = function(e, n) {
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
}, am = function(e, n) {
  for (var r = n._pt; r; )
    r.r(e, r.d), r = r._next;
}, Ub = function(e, n, r, i) {
  for (var o = this._pt, l; o; )
    l = o._next, o.p === i && o.modifier(e, n, r), o = l;
}, Yb = function(e) {
  for (var n = this._pt, r, i; n; )
    i = n._next, n.p === e && !n.op || n.op === e ? Rf(this, n, "_pt") : n.dep || (r = 1), n = i;
  return !r;
}, Xb = function(e, n, r, i) {
  i.mSet(e, n, i.m.call(i.tween, r, i.mt), i);
}, Nx = function(e) {
  for (var n = e._pt, r, i, o, l; n; ) {
    for (r = n._next, i = o; i && i.pr > n.pr; )
      i = i._next;
    (n._prev = i ? i._prev : l) ? n._prev._next = n : o = n, (n._next = i) ? i._prev = n : l = n, n = r;
  }
  e._pt = o;
}, cn = /* @__PURE__ */ function() {
  function t(n, r, i, o, l, s, a, u, c) {
    this.t = r, this.s = o, this.c = l, this.p = i, this.r = s || Mx, this.d = a || this, this.set = u || lm, this.pr = c || 0, this._next = n, n && (n._prev = this);
  }
  var e = t.prototype;
  return e.modifier = function(r, i, o) {
    this.mSet = this.mSet || this.set, this.set = Xb, this.m = r, this.mt = o, this.tween = i;
  }, t;
}();
un(nm + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
  return tm[t] = 1;
});
bn.TweenMax = bn.TweenLite = Je;
bn.TimelineLite = bn.TimelineMax = en;
De = new en({
  sortChildren: !1,
  defaults: Ll,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
Tn.stringFilter = xx;
var Eo = [], Zu = {}, Gb = [], O1 = 0, Qb = 0, Md = function(e) {
  return (Zu[e] || Gb).map(function(n) {
    return n();
  });
}, fh = function() {
  var e = Date.now(), n = [];
  e - O1 > 2 && (Md("matchMediaInit"), Eo.forEach(function(r) {
    var i = r.queries, o = r.conditions, l, s, a, u;
    for (s in i)
      l = Nn.matchMedia(i[s]).matches, l && (a = 1), l !== o[s] && (o[s] = l, u = 1);
    u && (r.revert(), a && n.push(r));
  }), Md("matchMediaRevert"), n.forEach(function(r) {
    return r.onMatch(r);
  }), O1 = e, Md("matchMedia"));
}, Ix = /* @__PURE__ */ function() {
  function t(n, r) {
    this.selector = r && ah(r), this.data = [], this._r = [], this.isReverted = !1, this.id = Qb++, n && this.add(n);
  }
  var e = t.prototype;
  return e.add = function(r, i, o) {
    Ve(r) && (o = i, i = r, r = Ve);
    var l = this, s = function() {
      var u = We, c = l.selector, f;
      return u && u !== l && u.data.push(l), o && (l.selector = ah(o)), We = l, f = i.apply(l, arguments), Ve(f) && l._r.push(f), We = u, l.selector = c, l.isReverted = !1, f;
    };
    return l.last = s, r === Ve ? s(l) : r ? l[r] = s : s;
  }, e.ignore = function(r) {
    var i = We;
    We = null, r(this), We = i;
  }, e.getTweens = function() {
    var r = [];
    return this.data.forEach(function(i) {
      return i instanceof t ? r.push.apply(r, i.getTweens()) : i instanceof Je && !(i.parent && i.parent.data === "nested") && r.push(i);
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
        return !(a instanceof Je) && a.revert && a.revert(r);
      }), this._r.forEach(function(a) {
        return a(r, o);
      }), this.isReverted = !0;
    } else
      this.data.forEach(function(a) {
        return a.kill && a.kill();
      });
    if (this.clear(), i)
      for (var s = Eo.length; s--; )
        Eo[s].id === this.id && Eo.splice(s, 1);
  }, e.revert = function(r) {
    this.kill(r || {});
  }, t;
}(), qb = /* @__PURE__ */ function() {
  function t(n) {
    this.contexts = [], this.scope = n;
  }
  var e = t.prototype;
  return e.add = function(r, i, o) {
    Ir(r) || (r = {
      matches: r
    });
    var l = new Ix(0, o || this.scope), s = l.conditions = {}, a, u, c;
    We && !l.selector && (l.selector = We.selector), this.contexts.push(l), i = l.add("onMatch", i), l.queries = r;
    for (u in r)
      u === "all" ? c = 1 : (a = Nn.matchMedia(r[u]), a && (Eo.indexOf(l) < 0 && Eo.push(l), (s[u] = a.matches) && (c = 1), a.addListener ? a.addListener(fh) : a.addEventListener("change", fh)));
    return c && i(l), this;
  }, e.revert = function(r) {
    this.kill(r || {});
  }, e.kill = function(r) {
    this.contexts.forEach(function(i) {
      return i.kill(r, !0);
    });
  }, t;
}(), Wc = {
  registerPlugin: function() {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r];
    n.forEach(function(i) {
      return yx(i);
    });
  },
  timeline: function(e) {
    return new en(e);
  },
  getTweensOf: function(e, n) {
    return De.getTweensOf(e, n);
  },
  getProperty: function(e, n, r, i) {
    dt(e) && (e = Hn(e)[0]);
    var o = xo(e || {}).get, l = r ? ox : ix;
    return r === "native" && (r = ""), e && (n ? l((wn[n] && wn[n].get || o)(e, n, r, i)) : function(s, a, u) {
      return l((wn[s] && wn[s].get || o)(e, s, a, u));
    });
  },
  quickSetter: function(e, n, r) {
    if (e = Hn(e), e.length > 1) {
      var i = e.map(function(c) {
        return fn.quickSetter(c, n, r);
      }), o = i.length;
      return function(c) {
        for (var f = o; f--; )
          i[f](c);
      };
    }
    e = e[0] || {};
    var l = wn[n], s = xo(e), a = s.harness && (s.harness.aliases || {})[n] || n, u = l ? function(c) {
      var f = new l();
      pl._pt = 0, f.init(e, r ? c + r : c, pl, 0, [e]), f.render(1, f), pl._pt && am(1, pl);
    } : s.set(e, a);
    return l ? u : function(c) {
      return u(e, a, r ? c + r : c, s, 1);
    };
  },
  quickTo: function(e, n, r) {
    var i, o = fn.to(e, Ao((i = {}, i[n] = "+=0.1", i.paused = !0, i), r || {})), l = function(a, u, c) {
      return o.resetTo(n, a, u, c);
    };
    return l.tween = o, l;
  },
  isTweening: function(e) {
    return De.getTweensOf(e, !0).length > 0;
  },
  defaults: function(e) {
    return e && e.ease && (e.ease = So(e.ease, Ll.ease)), E1(Ll, e || {});
  },
  config: function(e) {
    return E1(Tn, e || {});
  },
  registerEffect: function(e) {
    var n = e.name, r = e.effect, i = e.plugins, o = e.defaults, l = e.extendTimeline;
    (i || "").split(",").forEach(function(s) {
      return s && !wn[s] && !bn[s] && jc(n + " effect requires " + s + " plugin.");
    }), Cd[n] = function(s, a, u) {
      return r(Hn(s), Xn(a || {}, o), u);
    }, l && (en.prototype[n] = function(s, a, u) {
      return this.add(Cd[n](s, Ir(a) ? a : (u = a) && {}, this), u);
    });
  },
  registerEase: function(e, n) {
    ae[e] = So(n);
  },
  parseEase: function(e, n) {
    return arguments.length ? So(e, n) : ae;
  },
  getById: function(e) {
    return De.getById(e);
  },
  exportRoot: function(e, n) {
    e === void 0 && (e = {});
    var r = new en(e), i, o;
    for (r.smoothChildTiming = an(e.smoothChildTiming), De.remove(r), r._dp = 0, r._time = r._tTime = De._time, i = De._first; i; )
      o = i._next, (n || !(!i._dur && i instanceof Je && i.vars.onComplete === i._targets[0])) && Tr(r, i, i._start - i._delay), i = o;
    return Tr(De, r, 0), r;
  },
  context: function(e, n) {
    return e ? new Ix(e, n) : We;
  },
  matchMedia: function(e) {
    return new qb(e);
  },
  matchMediaRefresh: function() {
    return Eo.forEach(function(e) {
      var n = e.conditions, r, i;
      for (i in n)
        n[i] && (n[i] = !1, r = 1);
      r && e.revert();
    }) || fh();
  },
  addEventListener: function(e, n) {
    var r = Zu[e] || (Zu[e] = []);
    ~r.indexOf(n) || r.push(n);
  },
  removeEventListener: function(e, n) {
    var r = Zu[e], i = r && r.indexOf(n);
    i >= 0 && r.splice(i, 1);
  },
  utils: {
    wrap: Pb,
    wrapYoyo: Ob,
    distribute: dx,
    random: hx,
    snap: px,
    normalize: bb,
    getUnit: Ot,
    clamp: Sb,
    splitColor: _x,
    toArray: Hn,
    selector: ah,
    mapRange: gx,
    pipe: Tb,
    unitize: Cb,
    interpolate: Mb,
    shuffle: fx
  },
  install: Jw,
  effects: Cd,
  ticker: xn,
  updateRoot: en.updateRoot,
  plugins: wn,
  globalTimeline: De,
  core: {
    PropTween: cn,
    globals: ex,
    Tween: Je,
    Timeline: en,
    Animation: Sa,
    getCache: xo,
    _removeLinkedListItem: Rf,
    reverting: function() {
      return Mt;
    },
    context: function(e) {
      return e && We && (We.data.push(e), e._ctx = We), We;
    },
    suppressOverwrites: function(e) {
      return q0 = e;
    }
  }
};
un("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
  return Wc[t] = Je[t];
});
xn.add(en.updateRoot);
pl = Wc.to({}, {
  duration: 0
});
var Kb = function(e, n) {
  for (var r = e._pt; r && r.p !== n && r.op !== n && r.fp !== n; )
    r = r._next;
  return r;
}, Zb = function(e, n) {
  var r = e._targets, i, o, l;
  for (i in n)
    for (o = r.length; o--; )
      l = e._ptLookup[o][i], l && (l = l.d) && (l._pt && (l = Kb(l, i)), l && l.modifier && l.modifier(n[i], e, r[o], i));
}, Rd = function(e, n) {
  return {
    name: e,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(i, o, l) {
      l._onInit = function(s) {
        var a, u;
        if (dt(o) && (a = {}, un(o, function(c) {
          return a[c] = 1;
        }), o = a), n) {
          a = {};
          for (u in o)
            a[u] = n(o[u]);
          o = a;
        }
        Zb(s, o);
      };
    }
  };
}, fn = Wc.registerPlugin({
  name: "attr",
  init: function(e, n, r, i, o) {
    var l, s, a;
    this.tween = r;
    for (l in n)
      a = e.getAttribute(l) || "", s = this.add(e, "setAttribute", (a || 0) + "", n[l], i, o, 0, 0, l), s.op = l, s.b = a, this._props.push(l);
  },
  render: function(e, n) {
    for (var r = n._pt; r; )
      Mt ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), r = r._next;
  }
}, {
  name: "endArray",
  init: function(e, n) {
    for (var r = n.length; r--; )
      this.add(e, r, e[r] || 0, n[r], 0, 0, 0, 0, 0, 1);
  }
}, Rd("roundProps", uh), Rd("modifiers"), Rd("snap", px)) || Wc;
Je.version = en.version = fn.version = "3.12.2";
Zw = 1;
Z0() && Hl();
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
var M1, wi, Tl, um, vo, R1, cm, Jb = function() {
  return typeof window < "u";
}, ti = {}, ao = 180 / Math.PI, Cl = Math.PI / 180, Go = Math.atan2, N1 = 1e8, fm = /([A-Z])/g, eP = /(left|right|width|margin|padding|x)/i, tP = /[\s,\(]\S/, Cr = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, dh = function(e, n) {
  return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n);
}, nP = function(e, n) {
  return n.set(n.t, n.p, e === 1 ? n.e : Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n);
}, rP = function(e, n) {
  return n.set(n.t, n.p, e ? Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u : n.b, n);
}, iP = function(e, n) {
  var r = n.s + n.c * e;
  n.set(n.t, n.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + n.u, n);
}, $x = function(e, n) {
  return n.set(n.t, n.p, e ? n.e : n.b, n);
}, Ax = function(e, n) {
  return n.set(n.t, n.p, e !== 1 ? n.b : n.e, n);
}, oP = function(e, n, r) {
  return e.style[n] = r;
}, lP = function(e, n, r) {
  return e.style.setProperty(n, r);
}, sP = function(e, n, r) {
  return e._gsap[n] = r;
}, aP = function(e, n, r) {
  return e._gsap.scaleX = e._gsap.scaleY = r;
}, uP = function(e, n, r, i, o) {
  var l = e._gsap;
  l.scaleX = l.scaleY = r, l.renderTransform(o, l);
}, cP = function(e, n, r, i, o) {
  var l = e._gsap;
  l[n] = r, l.renderTransform(o, l);
}, ze = "transform", fr = ze + "Origin", fP = function t(e, n) {
  var r = this, i = this.target, o = i.style;
  if (e in ti && o) {
    if (this.tfm = this.tfm || {}, e !== "transform")
      e = Cr[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(l) {
        return r.tfm[l] = Br(i, l);
      }) : this.tfm[e] = i._gsap.x ? i._gsap[e] : Br(i, e);
    else
      return Cr.transform.split(",").forEach(function(l) {
        return t.call(r, l, n);
      });
    if (this.props.indexOf(ze) >= 0)
      return;
    i._gsap.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(fr, n, "")), e = ze;
  }
  (o || n) && this.props.push(e, n, o[e]);
}, Dx = function(e) {
  e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
}, dP = function() {
  var e = this.props, n = this.target, r = n.style, i = n._gsap, o, l;
  for (o = 0; o < e.length; o += 3)
    e[o + 1] ? n[e[o]] = e[o + 2] : e[o + 2] ? r[e[o]] = e[o + 2] : r.removeProperty(e[o].substr(0, 2) === "--" ? e[o] : e[o].replace(fm, "-$1").toLowerCase());
  if (this.tfm) {
    for (l in this.tfm)
      i[l] = this.tfm[l];
    i.svg && (i.renderTransform(), n.setAttribute("data-svg-origin", this.svgo || "")), o = cm(), (!o || !o.isStart) && !r[ze] && (Dx(r), i.uncache = 1);
  }
}, zx = function(e, n) {
  var r = {
    target: e,
    props: [],
    revert: dP,
    save: fP
  };
  return e._gsap || fn.core.getCache(e), n && n.split(",").forEach(function(i) {
    return r.save(i);
  }), r;
}, Lx, ph = function(e, n) {
  var r = wi.createElementNS ? wi.createElementNS((n || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : wi.createElement(e);
  return r.style ? r : wi.createElement(e);
}, Or = function t(e, n, r) {
  var i = getComputedStyle(e);
  return i[n] || i.getPropertyValue(n.replace(fm, "-$1").toLowerCase()) || i.getPropertyValue(n) || !r && t(e, Bl(n) || n, 1) || "";
}, I1 = "O,Moz,ms,Ms,Webkit".split(","), Bl = function(e, n, r) {
  var i = n || vo, o = i.style, l = 5;
  if (e in o && !r)
    return e;
  for (e = e.charAt(0).toUpperCase() + e.substr(1); l-- && !(I1[l] + e in o); )
    ;
  return l < 0 ? null : (l === 3 ? "ms" : l >= 0 ? I1[l] : "") + e;
}, hh = function() {
  Jb() && window.document && (M1 = window, wi = M1.document, Tl = wi.documentElement, vo = ph("div") || {
    style: {}
  }, ph("div"), ze = Bl(ze), fr = ze + "Origin", vo.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Lx = !!Bl("perspective"), cm = fn.core.reverting, um = 1);
}, Nd = function t(e) {
  var n = ph("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = this.parentNode, i = this.nextSibling, o = this.style.cssText, l;
  if (Tl.appendChild(n), n.appendChild(this), this.style.display = "block", e)
    try {
      l = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t;
    } catch {
    }
  else
    this._gsapBBox && (l = this._gsapBBox());
  return r && (i ? r.insertBefore(this, i) : r.appendChild(this)), Tl.removeChild(n), this.style.cssText = o, l;
}, $1 = function(e, n) {
  for (var r = n.length; r--; )
    if (e.hasAttribute(n[r]))
      return e.getAttribute(n[r]);
}, jx = function(e) {
  var n;
  try {
    n = e.getBBox();
  } catch {
    n = Nd.call(e, !0);
  }
  return n && (n.width || n.height) || e.getBBox === Nd || (n = Nd.call(e, !0)), n && !n.width && !n.x && !n.y ? {
    x: +$1(e, ["x", "cx", "x1"]) || 0,
    y: +$1(e, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : n;
}, Fx = function(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && jx(e));
}, Ea = function(e, n) {
  if (n) {
    var r = e.style;
    n in ti && n !== fr && (n = ze), r.removeProperty ? ((n.substr(0, 2) === "ms" || n.substr(0, 6) === "webkit") && (n = "-" + n), r.removeProperty(n.replace(fm, "-$1").toLowerCase())) : r.removeAttribute(n);
  }
}, xi = function(e, n, r, i, o, l) {
  var s = new cn(e._pt, n, r, 0, 1, l ? Ax : $x);
  return e._pt = s, s.b = i, s.e = o, e._props.push(r), s;
}, A1 = {
  deg: 1,
  rad: 1,
  turn: 1
}, pP = {
  grid: 1,
  flex: 1
}, ji = function t(e, n, r, i) {
  var o = parseFloat(r) || 0, l = (r + "").trim().substr((o + "").length) || "px", s = vo.style, a = eP.test(n), u = e.tagName.toLowerCase() === "svg", c = (u ? "client" : "offset") + (a ? "Width" : "Height"), f = 100, d = i === "px", p = i === "%", m, h, _, v;
  return i === l || !o || A1[i] || A1[l] ? o : (l !== "px" && !d && (o = t(e, n, r, "px")), v = e.getCTM && Fx(e), (p || l === "%") && (ti[n] || ~n.indexOf("adius")) ? (m = v ? e.getBBox()[a ? "width" : "height"] : e[c], Xe(p ? o / m * f : o / 100 * m)) : (s[a ? "width" : "height"] = f + (d ? l : i), h = ~n.indexOf("adius") || i === "em" && e.appendChild && !u ? e : e.parentNode, v && (h = (e.ownerSVGElement || {}).parentNode), (!h || h === wi || !h.appendChild) && (h = wi.body), _ = h._gsap, _ && p && _.width && a && _.time === xn.time && !_.uncache ? Xe(o / _.width * f) : ((p || l === "%") && !pP[Or(h, "display")] && (s.position = Or(e, "position")), h === e && (s.position = "static"), h.appendChild(vo), m = vo[c], h.removeChild(vo), s.position = "absolute", a && p && (_ = xo(h), _.time = xn.time, _.width = h[c]), Xe(d ? m * o / f : m && o ? f / m * o : 0))));
}, Br = function(e, n, r, i) {
  var o;
  return um || hh(), n in Cr && n !== "transform" && (n = Cr[n], ~n.indexOf(",") && (n = n.split(",")[0])), ti[n] && n !== "transform" ? (o = Ca(e, i), o = n !== "transformOrigin" ? o[n] : o.svg ? o.origin : Uc(Or(e, fr)) + " " + o.zOrigin + "px") : (o = e.style[n], (!o || o === "auto" || i || ~(o + "").indexOf("calc(")) && (o = Vc[n] && Vc[n](e, n, r) || Or(e, n) || nx(e, n) || (n === "opacity" ? 1 : 0))), r && !~(o + "").trim().indexOf(" ") ? ji(e, n, o, r) + r : o;
}, hP = function(e, n, r, i) {
  if (!r || r === "none") {
    var o = Bl(n, e, 1), l = o && Or(e, o, 1);
    l && l !== r ? (n = o, r = l) : n === "borderColor" && (r = Or(e, "borderTopColor"));
  }
  var s = new cn(this._pt, e.style, n, 0, 1, Rx), a = 0, u = 0, c, f, d, p, m, h, _, v, g, y, w, S;
  if (s.b = r, s.e = i, r += "", i += "", i === "auto" && (e.style[n] = i, i = Or(e, n) || i, e.style[n] = r), c = [r, i], xx(c), r = c[0], i = c[1], d = r.match(dl) || [], S = i.match(dl) || [], S.length) {
    for (; f = dl.exec(i); )
      _ = f[0], g = i.substring(a, f.index), m ? m = (m + 1) % 5 : (g.substr(-5) === "rgba(" || g.substr(-5) === "hsla(") && (m = 1), _ !== (h = d[u++] || "") && (p = parseFloat(h) || 0, w = h.substr((p + "").length), _.charAt(1) === "=" && (_ = El(p, _) + w), v = parseFloat(_), y = _.substr((v + "").length), a = dl.lastIndex - y.length, y || (y = y || Tn.units[n] || w, a === i.length && (i += y, s.e += y)), w !== y && (p = ji(e, n, h, y) || 0), s._pt = {
        _next: s._pt,
        p: g || u === 1 ? g : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: p,
        c: v - p,
        m: m && m < 4 || n === "zIndex" ? Math.round : 0
      });
    s.c = a < i.length ? i.substring(a, i.length) : "";
  } else
    s.r = n === "display" && i === "none" ? Ax : $x;
  return qw.test(i) && (s.e = 0), this._pt = s, s;
}, D1 = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, mP = function(e) {
  var n = e.split(" "), r = n[0], i = n[1] || "50%";
  return (r === "top" || r === "bottom" || i === "left" || i === "right") && (e = r, r = i, i = e), n[0] = D1[r] || r, n[1] = D1[i] || i, n.join(" ");
}, gP = function(e, n) {
  if (n.tween && n.tween._time === n.tween._dur) {
    var r = n.t, i = r.style, o = n.u, l = r._gsap, s, a, u;
    if (o === "all" || o === !0)
      i.cssText = "", a = 1;
    else
      for (o = o.split(","), u = o.length; --u > -1; )
        s = o[u], ti[s] && (a = 1, s = s === "transformOrigin" ? fr : ze), Ea(r, s);
    a && (Ea(r, ze), l && (l.svg && r.removeAttribute("transform"), Ca(r, 1), l.uncache = 1, Dx(i)));
  }
}, Vc = {
  clearProps: function(e, n, r, i, o) {
    if (o.data !== "isFromStart") {
      var l = e._pt = new cn(e._pt, n, r, 0, 0, gP);
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
}, Ta = [1, 0, 0, 1, 0, 0], Hx = {}, Bx = function(e) {
  return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
}, z1 = function(e) {
  var n = Or(e, ze);
  return Bx(n) ? Ta : n.substr(7).match(Qw).map(Xe);
}, dm = function(e, n) {
  var r = e._gsap || xo(e), i = e.style, o = z1(e), l, s, a, u;
  return r.svg && e.getAttribute("transform") ? (a = e.transform.baseVal.consolidate().matrix, o = [a.a, a.b, a.c, a.d, a.e, a.f], o.join(",") === "1,0,0,1,0,0" ? Ta : o) : (o === Ta && !e.offsetParent && e !== Tl && !r.svg && (a = i.display, i.display = "block", l = e.parentNode, (!l || !e.offsetParent) && (u = 1, s = e.nextElementSibling, Tl.appendChild(e)), o = z1(e), a ? i.display = a : Ea(e, "display"), u && (s ? l.insertBefore(e, s) : l ? l.appendChild(e) : Tl.removeChild(e))), n && o.length > 6 ? [o[0], o[1], o[4], o[5], o[12], o[13]] : o);
}, mh = function(e, n, r, i, o, l) {
  var s = e._gsap, a = o || dm(e, !0), u = s.xOrigin || 0, c = s.yOrigin || 0, f = s.xOffset || 0, d = s.yOffset || 0, p = a[0], m = a[1], h = a[2], _ = a[3], v = a[4], g = a[5], y = n.split(" "), w = parseFloat(y[0]) || 0, S = parseFloat(y[1]) || 0, E, k, b, O;
  r ? a !== Ta && (k = p * _ - m * h) && (b = w * (_ / k) + S * (-h / k) + (h * g - _ * v) / k, O = w * (-m / k) + S * (p / k) - (p * g - m * v) / k, w = b, S = O) : (E = jx(e), w = E.x + (~y[0].indexOf("%") ? w / 100 * E.width : w), S = E.y + (~(y[1] || y[0]).indexOf("%") ? S / 100 * E.height : S)), i || i !== !1 && s.smooth ? (v = w - u, g = S - c, s.xOffset = f + (v * p + g * h) - v, s.yOffset = d + (v * m + g * _) - g) : s.xOffset = s.yOffset = 0, s.xOrigin = w, s.yOrigin = S, s.smooth = !!i, s.origin = n, s.originIsAbsolute = !!r, e.style[fr] = "0px 0px", l && (xi(l, s, "xOrigin", u, w), xi(l, s, "yOrigin", c, S), xi(l, s, "xOffset", f, s.xOffset), xi(l, s, "yOffset", d, s.yOffset)), e.setAttribute("data-svg-origin", w + " " + S);
}, Ca = function(e, n) {
  var r = e._gsap || new Tx(e);
  if ("x" in r && !n && !r.uncache)
    return r;
  var i = e.style, o = r.scaleX < 0, l = "px", s = "deg", a = getComputedStyle(e), u = Or(e, fr) || "0", c, f, d, p, m, h, _, v, g, y, w, S, E, k, b, O, P, L, A, X, N, z, V, j, R, D, x, Y, J, lt, fe, de;
  return c = f = d = h = _ = v = g = y = w = 0, p = m = 1, r.svg = !!(e.getCTM && Fx(e)), a.translate && ((a.translate !== "none" || a.scale !== "none" || a.rotate !== "none") && (i[ze] = (a.translate !== "none" ? "translate3d(" + (a.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (a.rotate !== "none" ? "rotate(" + a.rotate + ") " : "") + (a.scale !== "none" ? "scale(" + a.scale.split(" ").join(",") + ") " : "") + (a[ze] !== "none" ? a[ze] : "")), i.scale = i.rotate = i.translate = "none"), k = dm(e, r.svg), r.svg && (r.uncache ? (R = e.getBBox(), u = r.xOrigin - R.x + "px " + (r.yOrigin - R.y) + "px", j = "") : j = !n && e.getAttribute("data-svg-origin"), mh(e, j || u, !!j || r.originIsAbsolute, r.smooth !== !1, k)), S = r.xOrigin || 0, E = r.yOrigin || 0, k !== Ta && (L = k[0], A = k[1], X = k[2], N = k[3], c = z = k[4], f = V = k[5], k.length === 6 ? (p = Math.sqrt(L * L + A * A), m = Math.sqrt(N * N + X * X), h = L || A ? Go(A, L) * ao : 0, g = X || N ? Go(X, N) * ao + h : 0, g && (m *= Math.abs(Math.cos(g * Cl))), r.svg && (c -= S - (S * L + E * X), f -= E - (S * A + E * N))) : (de = k[6], lt = k[7], x = k[8], Y = k[9], J = k[10], fe = k[11], c = k[12], f = k[13], d = k[14], b = Go(de, J), _ = b * ao, b && (O = Math.cos(-b), P = Math.sin(-b), j = z * O + x * P, R = V * O + Y * P, D = de * O + J * P, x = z * -P + x * O, Y = V * -P + Y * O, J = de * -P + J * O, fe = lt * -P + fe * O, z = j, V = R, de = D), b = Go(-X, J), v = b * ao, b && (O = Math.cos(-b), P = Math.sin(-b), j = L * O - x * P, R = A * O - Y * P, D = X * O - J * P, fe = N * P + fe * O, L = j, A = R, X = D), b = Go(A, L), h = b * ao, b && (O = Math.cos(b), P = Math.sin(b), j = L * O + A * P, R = z * O + V * P, A = A * O - L * P, V = V * O - z * P, L = j, z = R), _ && Math.abs(_) + Math.abs(h) > 359.9 && (_ = h = 0, v = 180 - v), p = Xe(Math.sqrt(L * L + A * A + X * X)), m = Xe(Math.sqrt(V * V + de * de)), b = Go(z, V), g = Math.abs(b) > 2e-4 ? b * ao : 0, w = fe ? 1 / (fe < 0 ? -fe : fe) : 0), r.svg && (j = e.getAttribute("transform"), r.forceCSS = e.setAttribute("transform", "") || !Bx(Or(e, ze)), j && e.setAttribute("transform", j))), Math.abs(g) > 90 && Math.abs(g) < 270 && (o ? (p *= -1, g += h <= 0 ? 180 : -180, h += h <= 0 ? 180 : -180) : (m *= -1, g += g <= 0 ? 180 : -180)), n = n || r.uncache, r.x = c - ((r.xPercent = c && (!n && r.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0))) ? e.offsetWidth * r.xPercent / 100 : 0) + l, r.y = f - ((r.yPercent = f && (!n && r.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-f) ? -50 : 0))) ? e.offsetHeight * r.yPercent / 100 : 0) + l, r.z = d + l, r.scaleX = Xe(p), r.scaleY = Xe(m), r.rotation = Xe(h) + s, r.rotationX = Xe(_) + s, r.rotationY = Xe(v) + s, r.skewX = g + s, r.skewY = y + s, r.transformPerspective = w + l, (r.zOrigin = parseFloat(u.split(" ")[2]) || 0) && (i[fr] = Uc(u)), r.xOffset = r.yOffset = 0, r.force3D = Tn.force3D, r.renderTransform = r.svg ? yP : Lx ? Wx : vP, r.uncache = 0, r;
}, Uc = function(e) {
  return (e = e.split(" "))[0] + " " + e[1];
}, Id = function(e, n, r) {
  var i = Ot(n);
  return Xe(parseFloat(n) + parseFloat(ji(e, "x", r + "px", i))) + i;
}, vP = function(e, n) {
  n.z = "0px", n.rotationY = n.rotationX = "0deg", n.force3D = 0, Wx(e, n);
}, ro = "0deg", cs = "0px", io = ") ", Wx = function(e, n) {
  var r = n || this, i = r.xPercent, o = r.yPercent, l = r.x, s = r.y, a = r.z, u = r.rotation, c = r.rotationY, f = r.rotationX, d = r.skewX, p = r.skewY, m = r.scaleX, h = r.scaleY, _ = r.transformPerspective, v = r.force3D, g = r.target, y = r.zOrigin, w = "", S = v === "auto" && e && e !== 1 || v === !0;
  if (y && (f !== ro || c !== ro)) {
    var E = parseFloat(c) * Cl, k = Math.sin(E), b = Math.cos(E), O;
    E = parseFloat(f) * Cl, O = Math.cos(E), l = Id(g, l, k * O * -y), s = Id(g, s, -Math.sin(E) * -y), a = Id(g, a, b * O * -y + y);
  }
  _ !== cs && (w += "perspective(" + _ + io), (i || o) && (w += "translate(" + i + "%, " + o + "%) "), (S || l !== cs || s !== cs || a !== cs) && (w += a !== cs || S ? "translate3d(" + l + ", " + s + ", " + a + ") " : "translate(" + l + ", " + s + io), u !== ro && (w += "rotate(" + u + io), c !== ro && (w += "rotateY(" + c + io), f !== ro && (w += "rotateX(" + f + io), (d !== ro || p !== ro) && (w += "skew(" + d + ", " + p + io), (m !== 1 || h !== 1) && (w += "scale(" + m + ", " + h + io), g.style[ze] = w || "translate(0, 0)";
}, yP = function(e, n) {
  var r = n || this, i = r.xPercent, o = r.yPercent, l = r.x, s = r.y, a = r.rotation, u = r.skewX, c = r.skewY, f = r.scaleX, d = r.scaleY, p = r.target, m = r.xOrigin, h = r.yOrigin, _ = r.xOffset, v = r.yOffset, g = r.forceCSS, y = parseFloat(l), w = parseFloat(s), S, E, k, b, O;
  a = parseFloat(a), u = parseFloat(u), c = parseFloat(c), c && (c = parseFloat(c), u += c, a += c), a || u ? (a *= Cl, u *= Cl, S = Math.cos(a) * f, E = Math.sin(a) * f, k = Math.sin(a - u) * -d, b = Math.cos(a - u) * d, u && (c *= Cl, O = Math.tan(u - c), O = Math.sqrt(1 + O * O), k *= O, b *= O, c && (O = Math.tan(c), O = Math.sqrt(1 + O * O), S *= O, E *= O)), S = Xe(S), E = Xe(E), k = Xe(k), b = Xe(b)) : (S = f, b = d, E = k = 0), (y && !~(l + "").indexOf("px") || w && !~(s + "").indexOf("px")) && (y = ji(p, "x", l, "px"), w = ji(p, "y", s, "px")), (m || h || _ || v) && (y = Xe(y + m - (m * S + h * k) + _), w = Xe(w + h - (m * E + h * b) + v)), (i || o) && (O = p.getBBox(), y = Xe(y + i / 100 * O.width), w = Xe(w + o / 100 * O.height)), O = "matrix(" + S + "," + E + "," + k + "," + b + "," + y + "," + w + ")", p.setAttribute("transform", O), g && (p.style[ze] = O);
}, _P = function(e, n, r, i, o) {
  var l = 360, s = dt(o), a = parseFloat(o) * (s && ~o.indexOf("rad") ? ao : 1), u = a - i, c = i + u + "deg", f, d;
  return s && (f = o.split("_")[1], f === "short" && (u %= l, u !== u % (l / 2) && (u += u < 0 ? l : -l)), f === "cw" && u < 0 ? u = (u + l * N1) % l - ~~(u / l) * l : f === "ccw" && u > 0 && (u = (u - l * N1) % l - ~~(u / l) * l)), e._pt = d = new cn(e._pt, n, r, i, u, nP), d.e = c, d.u = "deg", e._props.push(r), d;
}, L1 = function(e, n) {
  for (var r in n)
    e[r] = n[r];
  return e;
}, wP = function(e, n, r) {
  var i = L1({}, r._gsap), o = "perspective,force3D,transformOrigin,svgOrigin", l = r.style, s, a, u, c, f, d, p, m;
  i.svg ? (u = r.getAttribute("transform"), r.setAttribute("transform", ""), l[ze] = n, s = Ca(r, 1), Ea(r, ze), r.setAttribute("transform", u)) : (u = getComputedStyle(r)[ze], l[ze] = n, s = Ca(r, 1), l[ze] = u);
  for (a in ti)
    u = i[a], c = s[a], u !== c && o.indexOf(a) < 0 && (p = Ot(u), m = Ot(c), f = p !== m ? ji(r, a, u, m) : parseFloat(u), d = parseFloat(c), e._pt = new cn(e._pt, s, a, f, d - f, dh), e._pt.u = m || 0, e._props.push(a));
  L1(s, i);
};
un("padding,margin,Width,Radius", function(t, e) {
  var n = "Top", r = "Right", i = "Bottom", o = "Left", l = (e < 3 ? [n, r, i, o] : [n + o, n + r, i + r, i + o]).map(function(s) {
    return e < 2 ? t + s : "border" + s + t;
  });
  Vc[e > 1 ? "border" + t : t] = function(s, a, u, c, f) {
    var d, p;
    if (arguments.length < 4)
      return d = l.map(function(m) {
        return Br(s, m, u);
      }), p = d.join(" "), p.split(d[0]).length === 5 ? d[0] : p;
    d = (c + "").split(" "), p = {}, l.forEach(function(m, h) {
      return p[m] = d[h] = d[h] || d[(h - 1) / 2 | 0];
    }), s.init(a, p, f);
  };
});
var Vx = {
  name: "css",
  register: hh,
  targetTest: function(e) {
    return e.style && e.nodeType;
  },
  init: function(e, n, r, i, o) {
    var l = this._props, s = e.style, a = r.vars.startAt, u, c, f, d, p, m, h, _, v, g, y, w, S, E, k, b;
    um || hh(), this.styles = this.styles || zx(e), b = this.styles.props, this.tween = r;
    for (h in n)
      if (h !== "autoRound" && (c = n[h], !(wn[h] && Cx(h, n, r, i, e, o)))) {
        if (p = typeof c, m = Vc[h], p === "function" && (c = c.call(r, i, e, o), p = typeof c), p === "string" && ~c.indexOf("random(") && (c = xa(c)), m)
          m(this, e, h, c, r) && (k = 1);
        else if (h.substr(0, 2) === "--")
          u = (getComputedStyle(e).getPropertyValue(h) + "").trim(), c += "", $i.lastIndex = 0, $i.test(u) || (_ = Ot(u), v = Ot(c)), v ? _ !== v && (u = ji(e, h, u, v) + v) : _ && (c += _), this.add(s, "setProperty", u, c, i, o, 0, 0, h), l.push(h), b.push(h, 0, s[h]);
        else if (p !== "undefined") {
          if (a && h in a ? (u = typeof a[h] == "function" ? a[h].call(r, i, e, o) : a[h], dt(u) && ~u.indexOf("random(") && (u = xa(u)), Ot(u + "") || (u += Tn.units[h] || Ot(Br(e, h)) || ""), (u + "").charAt(1) === "=" && (u = Br(e, h))) : u = Br(e, h), d = parseFloat(u), g = p === "string" && c.charAt(1) === "=" && c.substr(0, 2), g && (c = c.substr(2)), f = parseFloat(c), h in Cr && (h === "autoAlpha" && (d === 1 && Br(e, "visibility") === "hidden" && f && (d = 0), b.push("visibility", 0, s.visibility), xi(this, s, "visibility", d ? "inherit" : "hidden", f ? "inherit" : "hidden", !f)), h !== "scale" && h !== "transform" && (h = Cr[h], ~h.indexOf(",") && (h = h.split(",")[0]))), y = h in ti, y) {
            if (this.styles.save(h), w || (S = e._gsap, S.renderTransform && !n.parseTransform || Ca(e, n.parseTransform), E = n.smoothOrigin !== !1 && S.smooth, w = this._pt = new cn(this._pt, s, ze, 0, 1, S.renderTransform, S, 0, -1), w.dep = 1), h === "scale")
              this._pt = new cn(this._pt, S, "scaleY", S.scaleY, (g ? El(S.scaleY, g + f) : f) - S.scaleY || 0, dh), this._pt.u = 0, l.push("scaleY", h), h += "X";
            else if (h === "transformOrigin") {
              b.push(fr, 0, s[fr]), c = mP(c), S.svg ? mh(e, c, 0, E, 0, this) : (v = parseFloat(c.split(" ")[2]) || 0, v !== S.zOrigin && xi(this, S, "zOrigin", S.zOrigin, v), xi(this, s, h, Uc(u), Uc(c)));
              continue;
            } else if (h === "svgOrigin") {
              mh(e, c, 1, E, 0, this);
              continue;
            } else if (h in Hx) {
              _P(this, S, h, d, g ? El(d, g + c) : c);
              continue;
            } else if (h === "smoothOrigin") {
              xi(this, S, "smooth", S.smooth, c);
              continue;
            } else if (h === "force3D") {
              S[h] = c;
              continue;
            } else if (h === "transform") {
              wP(this, c, e);
              continue;
            }
          } else
            h in s || (h = Bl(h) || h);
          if (y || (f || f === 0) && (d || d === 0) && !tP.test(c) && h in s)
            _ = (u + "").substr((d + "").length), f || (f = 0), v = Ot(c) || (h in Tn.units ? Tn.units[h] : _), _ !== v && (d = ji(e, h, u, v)), this._pt = new cn(this._pt, y ? S : s, h, d, (g ? El(d, g + f) : f) - d, !y && (v === "px" || h === "zIndex") && n.autoRound !== !1 ? iP : dh), this._pt.u = v || 0, _ !== v && v !== "%" && (this._pt.b = u, this._pt.r = rP);
          else if (h in s)
            hP.call(this, e, h, u, g ? g + c : c);
          else if (h in e)
            this.add(e, h, u || e[h], g ? g + c : c, i, o);
          else if (h !== "parseTransform") {
            em(h, c);
            continue;
          }
          y || (h in s ? b.push(h, 0, s[h]) : b.push(h, 1, u || e[h])), l.push(h);
        }
      }
    k && Nx(this);
  },
  render: function(e, n) {
    if (n.tween._time || !cm())
      for (var r = n._pt; r; )
        r.r(e, r.d), r = r._next;
    else
      n.styles.revert();
  },
  get: Br,
  aliases: Cr,
  getSetter: function(e, n, r) {
    var i = Cr[n];
    return i && i.indexOf(",") < 0 && (n = i), n in ti && n !== fr && (e._gsap.x || Br(e, "x")) ? r && R1 === r ? n === "scale" ? aP : sP : (R1 = r || {}) && (n === "scale" ? uP : cP) : e.style && !K0(e.style[n]) ? oP : ~n.indexOf("-") ? lP : sm(e, n);
  },
  core: {
    _removeProperty: Ea,
    _getMatrix: dm
  }
};
fn.utils.checkPrefix = Bl;
fn.core.getStyleSaver = zx;
(function(t, e, n, r) {
  var i = un(t + "," + e + "," + n, function(o) {
    ti[o] = 1;
  });
  un(e, function(o) {
    Tn.units[o] = "deg", Hx[o] = 1;
  }), Cr[i[13]] = t + "," + e, un(r, function(o) {
    var l = o.split(":");
    Cr[l[1]] = i[l[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
un("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
  Tn.units[t] = "px";
});
fn.registerPlugin(Vx);
var Fi = fn.registerPlugin(Vx) || fn;
Fi.core.Tween;
function j1(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
  }
}
function xP(t, e, n) {
  return e && j1(t.prototype, e), n && j1(t, n), t;
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
var _t, gh, kn, ki, Si, bl, Ux, uo, Hs, Yx, Yr, nr, Xx, Gx = function() {
  return _t || typeof window < "u" && (_t = window.gsap) && _t.registerPlugin && _t;
}, Qx = 1, hl = [], ie = [], Mr = [], Bs = Date.now, vh = function(e, n) {
  return n;
}, kP = function() {
  var e = Hs.core, n = e.bridge || {}, r = e._scrollers, i = e._proxies;
  r.push.apply(r, ie), i.push.apply(i, Mr), ie = r, Mr = i, vh = function(l, s) {
    return n[l](s);
  };
}, Ai = function(e, n) {
  return ~Mr.indexOf(e) && Mr[Mr.indexOf(e) + 1][n];
}, Ws = function(e) {
  return !!~Yx.indexOf(e);
}, At = function(e, n, r, i, o) {
  return e.addEventListener(n, r, {
    passive: !i,
    capture: !!o
  });
}, $t = function(e, n, r, i) {
  return e.removeEventListener(n, r, !!i);
}, vu = "scrollLeft", yu = "scrollTop", yh = function() {
  return Yr && Yr.isPressed || ie.cache++;
}, Yc = function(e, n) {
  var r = function i(o) {
    if (o || o === 0) {
      Qx && (kn.history.scrollRestoration = "manual");
      var l = Yr && Yr.isPressed;
      o = i.v = Math.round(o) || (Yr && Yr.iOS ? 1 : 0), e(o), i.cacheID = ie.cache, l && vh("ss", o);
    } else
      (n || ie.cache !== i.cacheID || vh("ref")) && (i.cacheID = ie.cache, i.v = e());
    return i.v + i.offset;
  };
  return r.offset = 0, e && r;
}, Ft = {
  s: vu,
  p: "left",
  p2: "Left",
  os: "right",
  os2: "Right",
  d: "width",
  d2: "Width",
  a: "x",
  sc: Yc(function(t) {
    return arguments.length ? kn.scrollTo(t, it.sc()) : kn.pageXOffset || ki[vu] || Si[vu] || bl[vu] || 0;
  })
}, it = {
  s: yu,
  p: "top",
  p2: "Top",
  os: "bottom",
  os2: "Bottom",
  d: "height",
  d2: "Height",
  a: "y",
  op: Ft,
  sc: Yc(function(t) {
    return arguments.length ? kn.scrollTo(Ft.sc(), t) : kn.pageYOffset || ki[yu] || Si[yu] || bl[yu] || 0;
  })
}, qt = function(e, n) {
  return (n && n._ctx && n._ctx.selector || _t.utils.toArray)(e)[0] || (typeof e == "string" && _t.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null);
}, Hi = function(e, n) {
  var r = n.s, i = n.sc;
  Ws(e) && (e = ki.scrollingElement || Si);
  var o = ie.indexOf(e), l = i === it.sc ? 1 : 2;
  !~o && (o = ie.push(e) - 1), ie[o + l] || At(e, "scroll", yh);
  var s = ie[o + l], a = s || (ie[o + l] = Yc(Ai(e, r), !0) || (Ws(e) ? i : Yc(function(u) {
    return arguments.length ? e[r] = u : e[r];
  })));
  return a.target = e, s || (a.smooth = _t.getProperty(e, "scrollBehavior") === "smooth"), a;
}, _h = function(e, n, r) {
  var i = e, o = e, l = Bs(), s = l, a = n || 50, u = Math.max(500, a * 3), c = function(m, h) {
    var _ = Bs();
    h || _ - l > a ? (o = i, i = m, s = l, l = _) : r ? i += m : i = o + (m - o) / (_ - s) * (l - s);
  }, f = function() {
    o = i = r ? 0 : i, s = l = 0;
  }, d = function(m) {
    var h = s, _ = o, v = Bs();
    return (m || m === 0) && m !== i && c(m), l === s || v - s > u ? 0 : (i + (r ? _ : -_)) / ((r ? v : l) - h) * 1e3;
  };
  return {
    update: c,
    reset: f,
    getVelocity: d
  };
}, fs = function(e, n) {
  return n && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e;
}, F1 = function(e) {
  var n = Math.max.apply(Math, e), r = Math.min.apply(Math, e);
  return Math.abs(n) >= Math.abs(r) ? n : r;
}, qx = function() {
  Hs = _t.core.globals().ScrollTrigger, Hs && Hs.core && kP();
}, Kx = function(e) {
  return _t = e || Gx(), _t && typeof document < "u" && document.body && (kn = window, ki = document, Si = ki.documentElement, bl = ki.body, Yx = [kn, ki, Si, bl], _t.utils.clamp, Xx = _t.core.context || function() {
  }, uo = "onpointerenter" in bl ? "pointer" : "mouse", Ux = tt.isTouch = kn.matchMedia && kn.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in kn || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, nr = tt.eventTypes = ("ontouchstart" in Si ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in Si ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
    return Qx = 0;
  }, 500), qx(), gh = 1), gh;
};
Ft.op = it;
ie.cache = 0;
var tt = /* @__PURE__ */ function() {
  function t(n) {
    this.init(n);
  }
  var e = t.prototype;
  return e.init = function(r) {
    gh || Kx(_t) || console.warn("Please gsap.registerPlugin(Observer)"), Hs || qx();
    var i = r.tolerance, o = r.dragMinimum, l = r.type, s = r.target, a = r.lineHeight, u = r.debounce, c = r.preventDefault, f = r.onStop, d = r.onStopDelay, p = r.ignore, m = r.wheelSpeed, h = r.event, _ = r.onDragStart, v = r.onDragEnd, g = r.onDrag, y = r.onPress, w = r.onRelease, S = r.onRight, E = r.onLeft, k = r.onUp, b = r.onDown, O = r.onChangeX, P = r.onChangeY, L = r.onChange, A = r.onToggleX, X = r.onToggleY, N = r.onHover, z = r.onHoverEnd, V = r.onMove, j = r.ignoreCheck, R = r.isNormalizer, D = r.onGestureStart, x = r.onGestureEnd, Y = r.onWheel, J = r.onEnable, lt = r.onDisable, fe = r.onClick, de = r.scrollSpeed, ye = r.capture, ue = r.allowClicks, Qe = r.lockAxis, be = r.onLockAxis;
    this.target = s = qt(s) || Si, this.vars = r, p && (p = _t.utils.toArray(p)), i = i || 1e-9, o = o || 0, m = m || 1, de = de || 1, l = l || "wheel,touch,pointer", u = u !== !1, a || (a = parseFloat(kn.getComputedStyle(bl).lineHeight) || 22);
    var Mn, Xt, hr, ge, qe, Gt, dn, M = this, pn = 0, Ar = 0, Gi = Hi(s, Ft), Ke = Hi(s, it), Qi = Gi(), qi = Ke(), Ql = ~l.indexOf("touch") && !~l.indexOf("pointer") && nr[0] === "pointerdown", pt = Ws(s), Ue = s.ownerDocument || ki, Qn = [0, 0, 0], qn = [0, 0, 0], Ki = 0, Dr = function() {
      return Ki = Bs();
    }, mr = function(U, ve) {
      return (M.event = U) && p && ~p.indexOf(U.target) || ve && Ql && U.pointerType !== "touch" || j && j(U, ve);
    }, Qt = function() {
      M._vx.reset(), M._vy.reset(), Xt.pause(), f && f(M);
    }, Zi = function() {
      var U = M.deltaX = F1(Qn), ve = M.deltaY = F1(qn), Fe = Math.abs(U) >= i, B = Math.abs(ve) >= i;
      L && (Fe || B) && L(M, U, ve, Qn, qn), Fe && (S && M.deltaX > 0 && S(M), E && M.deltaX < 0 && E(M), O && O(M), A && M.deltaX < 0 != pn < 0 && A(M), pn = M.deltaX, Qn[0] = Qn[1] = Qn[2] = 0), B && (b && M.deltaY > 0 && b(M), k && M.deltaY < 0 && k(M), P && P(M), X && M.deltaY < 0 != Ar < 0 && X(M), Ar = M.deltaY, qn[0] = qn[1] = qn[2] = 0), (ge || hr) && (V && V(M), hr && (g(M), hr = !1), ge = !1), Gt && !(Gt = !1) && be && be(M), qe && (Y(M), qe = !1), Mn = 0;
    }, Wo = function(U, ve, Fe) {
      Qn[Fe] += U, qn[Fe] += ve, M._vx.update(U), M._vy.update(ve), u ? Mn || (Mn = requestAnimationFrame(Zi)) : Zi();
    }, Vo = function(U, ve) {
      Qe && !dn && (M.axis = dn = Math.abs(U) > Math.abs(ve) ? "x" : "y", Gt = !0), dn !== "y" && (Qn[2] += U, M._vx.update(U, !0)), dn !== "x" && (qn[2] += ve, M._vy.update(ve, !0)), u ? Mn || (Mn = requestAnimationFrame(Zi)) : Zi();
    }, Ji = function(U) {
      if (!mr(U, 1)) {
        U = fs(U, c);
        var ve = U.clientX, Fe = U.clientY, B = ve - M.x, ce = Fe - M.y, G = M.isDragging;
        M.x = ve, M.y = Fe, (G || Math.abs(M.startX - ve) >= o || Math.abs(M.startY - Fe) >= o) && (g && (hr = !0), G || (M.isDragging = !0), Vo(B, ce), G || _ && _(M));
      }
    }, ri = M.onPress = function(ee) {
      mr(ee, 1) || ee && ee.button || (M.axis = dn = null, Xt.pause(), M.isPressed = !0, ee = fs(ee), pn = Ar = 0, M.startX = M.x = ee.clientX, M.startY = M.y = ee.clientY, M._vx.reset(), M._vy.reset(), At(R ? s : Ue, nr[1], Ji, c, !0), M.deltaX = M.deltaY = 0, y && y(M));
    }, ii = M.onRelease = function(ee) {
      if (!mr(ee, 1)) {
        $t(R ? s : Ue, nr[1], Ji, !0);
        var U = !isNaN(M.y - M.startY), ve = M.isDragging && (Math.abs(M.x - M.startX) > 3 || Math.abs(M.y - M.startY) > 3), Fe = fs(ee);
        !ve && U && (M._vx.reset(), M._vy.reset(), c && ue && _t.delayedCall(0.08, function() {
          if (Bs() - Ki > 300 && !ee.defaultPrevented) {
            if (ee.target.click)
              ee.target.click();
            else if (Ue.createEvent) {
              var B = Ue.createEvent("MouseEvents");
              B.initMouseEvent("click", !0, !0, kn, 1, Fe.screenX, Fe.screenY, Fe.clientX, Fe.clientY, !1, !1, !1, !1, 0, null), ee.target.dispatchEvent(B);
            }
          }
        })), M.isDragging = M.isGesturing = M.isPressed = !1, f && !R && Xt.restart(!0), v && ve && v(M), w && w(M, ve);
      }
    }, pe = function(U) {
      return U.touches && U.touches.length > 1 && (M.isGesturing = !0) && D(U, M.isDragging);
    }, eo = function() {
      return (M.isGesturing = !1) || x(M);
    }, Kn = function(U) {
      if (!mr(U)) {
        var ve = Gi(), Fe = Ke();
        Wo((ve - Qi) * de, (Fe - qi) * de, 1), Qi = ve, qi = Fe, f && Xt.restart(!0);
      }
    }, Zn = function(U) {
      if (!mr(U)) {
        U = fs(U, c), Y && (qe = !0);
        var ve = (U.deltaMode === 1 ? a : U.deltaMode === 2 ? kn.innerHeight : 1) * m;
        Wo(U.deltaX * ve, U.deltaY * ve, 0), f && !R && Xt.restart(!0);
      }
    }, Jn = function(U) {
      if (!mr(U)) {
        var ve = U.clientX, Fe = U.clientY, B = ve - M.x, ce = Fe - M.y;
        M.x = ve, M.y = Fe, ge = !0, (B || ce) && Vo(B, ce);
      }
    }, to = function(U) {
      M.event = U, N(M);
    }, Uo = function(U) {
      M.event = U, z(M);
    }, zr = function(U) {
      return mr(U) || fs(U, c) && fe(M);
    };
    Xt = M._dc = _t.delayedCall(d || 0.25, Qt).pause(), M.deltaX = M.deltaY = 0, M._vx = _h(0, 50, !0), M._vy = _h(0, 50, !0), M.scrollX = Gi, M.scrollY = Ke, M.isDragging = M.isGesturing = M.isPressed = !1, Xx(this), M.enable = function(ee) {
      return M.isEnabled || (At(pt ? Ue : s, "scroll", yh), l.indexOf("scroll") >= 0 && At(pt ? Ue : s, "scroll", Kn, c, ye), l.indexOf("wheel") >= 0 && At(s, "wheel", Zn, c, ye), (l.indexOf("touch") >= 0 && Ux || l.indexOf("pointer") >= 0) && (At(s, nr[0], ri, c, ye), At(Ue, nr[2], ii), At(Ue, nr[3], ii), ue && At(s, "click", Dr, !1, !0), fe && At(s, "click", zr), D && At(Ue, "gesturestart", pe), x && At(Ue, "gestureend", eo), N && At(s, uo + "enter", to), z && At(s, uo + "leave", Uo), V && At(s, uo + "move", Jn)), M.isEnabled = !0, ee && ee.type && ri(ee), J && J(M)), M;
    }, M.disable = function() {
      M.isEnabled && (hl.filter(function(ee) {
        return ee !== M && Ws(ee.target);
      }).length || $t(pt ? Ue : s, "scroll", yh), M.isPressed && (M._vx.reset(), M._vy.reset(), $t(R ? s : Ue, nr[1], Ji, !0)), $t(pt ? Ue : s, "scroll", Kn, ye), $t(s, "wheel", Zn, ye), $t(s, nr[0], ri, ye), $t(Ue, nr[2], ii), $t(Ue, nr[3], ii), $t(s, "click", Dr, !0), $t(s, "click", zr), $t(Ue, "gesturestart", pe), $t(Ue, "gestureend", eo), $t(s, uo + "enter", to), $t(s, uo + "leave", Uo), $t(s, uo + "move", Jn), M.isEnabled = M.isPressed = M.isDragging = !1, lt && lt(M));
    }, M.kill = M.revert = function() {
      M.disable();
      var ee = hl.indexOf(M);
      ee >= 0 && hl.splice(ee, 1), Yr === M && (Yr = 0);
    }, hl.push(M), R && Ws(s) && (Yr = M), M.enable(h);
  }, xP(t, [{
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
tt.version = "3.12.2";
tt.create = function(t) {
  return new tt(t);
};
tt.register = Kx;
tt.getAll = function() {
  return hl.slice();
};
tt.getById = function(t) {
  return hl.filter(function(e) {
    return e.vars.id === t;
  })[0];
};
Gx() && _t.registerPlugin(tt);
/*!
 * ScrollTrigger 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var W, Ko, se, $e, sr, Te, Zx, Xc, Gc, ml, Ju, _u, bt, $f, wh, zt, H1, B1, Zo, Jx, $d, e2, gn, t2, n2, r2, ci, xh, pm, Pl, hm, Ad, wu = 1, jt = Date.now, Dd = jt(), Vn = 0, xs = 0, W1 = function(e, n, r) {
  var i = _n(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
  return r["_" + n + "Clamp"] = i, i ? e.substr(6, e.length - 7) : e;
}, V1 = function(e, n) {
  return n && (!_n(e) || e.substr(0, 6) !== "clamp(") ? "clamp(" + e + ")" : e;
}, SP = function t() {
  return xs && requestAnimationFrame(t);
}, U1 = function() {
  return $f = 1;
}, Y1 = function() {
  return $f = 0;
}, kr = function(e) {
  return e;
}, ks = function(e) {
  return Math.round(e * 1e5) / 1e5 || 0;
}, i2 = function() {
  return typeof window < "u";
}, o2 = function() {
  return W || i2() && (W = window.gsap) && W.registerPlugin && W;
}, Do = function(e) {
  return !!~Zx.indexOf(e);
}, l2 = function(e) {
  return (e === "Height" ? hm : se["inner" + e]) || sr["client" + e] || Te["client" + e];
}, s2 = function(e) {
  return Ai(e, "getBoundingClientRect") || (Do(e) ? function() {
    return oc.width = se.innerWidth, oc.height = hm, oc;
  } : function() {
    return Wr(e);
  });
}, EP = function(e, n, r) {
  var i = r.d, o = r.d2, l = r.a;
  return (l = Ai(e, "getBoundingClientRect")) ? function() {
    return l()[i];
  } : function() {
    return (n ? l2(o) : e["client" + o]) || 0;
  };
}, TP = function(e, n) {
  return !n || ~Mr.indexOf(e) ? s2(e) : function() {
    return oc;
  };
}, Xr = function(e, n) {
  var r = n.s, i = n.d2, o = n.d, l = n.a;
  return Math.max(0, (r = "scroll" + i) && (l = Ai(e, r)) ? l() - s2(e)()[o] : Do(e) ? (sr[r] || Te[r]) - l2(i) : e[r] - e["offset" + i]);
}, xu = function(e, n) {
  for (var r = 0; r < Zo.length; r += 3)
    (!n || ~n.indexOf(Zo[r + 1])) && e(Zo[r], Zo[r + 1], Zo[r + 2]);
}, _n = function(e) {
  return typeof e == "string";
}, Ht = function(e) {
  return typeof e == "function";
}, ec = function(e) {
  return typeof e == "number";
}, co = function(e) {
  return typeof e == "object";
}, ds = function(e, n, r) {
  return e && e.progress(n ? 0 : 1) && r && e.pause();
}, zd = function(e, n) {
  if (e.enabled) {
    var r = n(e);
    r && r.totalTime && (e.callbackAnimation = r);
  }
}, Qo = Math.abs, a2 = "left", u2 = "top", mm = "right", gm = "bottom", To = "width", Co = "height", Vs = "Right", Us = "Left", Ys = "Top", Xs = "Bottom", Ze = "padding", Dn = "margin", Wl = "Width", vm = "Height", gt = "px", zn = function(e) {
  return se.getComputedStyle(e);
}, CP = function(e) {
  var n = zn(e).position;
  e.style.position = n === "absolute" || n === "fixed" ? n : "relative";
}, X1 = function(e, n) {
  for (var r in n)
    r in e || (e[r] = n[r]);
  return e;
}, Wr = function(e, n) {
  var r = n && zn(e)[wh] !== "matrix(1, 0, 0, 1, 0, 0)" && W.to(e, {
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
}, kh = function(e, n) {
  var r = n.d2;
  return e["offset" + r] || e["client" + r] || 0;
}, c2 = function(e) {
  var n = [], r = e.labels, i = e.duration(), o;
  for (o in r)
    n.push(r[o] / i);
  return n;
}, bP = function(e) {
  return function(n) {
    return W.utils.snap(c2(e), n);
  };
}, ym = function(e) {
  var n = W.utils.snap(e), r = Array.isArray(e) && e.slice(0).sort(function(i, o) {
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
}, PP = function(e) {
  return function(n, r) {
    return ym(c2(e))(n, r.direction);
  };
}, ku = function(e, n, r, i) {
  return r.split(",").forEach(function(o) {
    return e(n, o, i);
  });
}, ut = function(e, n, r, i, o) {
  return e.addEventListener(n, r, {
    passive: !i,
    capture: !!o
  });
}, at = function(e, n, r, i) {
  return e.removeEventListener(n, r, !!i);
}, Su = function(e, n, r) {
  r = r && r.wheelHandler, r && (e(n, "wheel", r), e(n, "touchmove", r));
}, G1 = {
  startColor: "green",
  endColor: "red",
  indent: 0,
  fontSize: "16px",
  fontWeight: "normal"
}, Eu = {
  toggleActions: "play",
  anticipatePin: 0
}, Qc = {
  top: 0,
  left: 0,
  center: 0.5,
  bottom: 1,
  right: 1
}, tc = function(e, n) {
  if (_n(e)) {
    var r = e.indexOf("="), i = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
    ~r && (e.indexOf("%") > r && (i *= n / 100), e = e.substr(0, r - 1)), e = i + (e in Qc ? Qc[e] * n : ~e.indexOf("%") ? parseFloat(e) * n / 100 : parseFloat(e) || 0);
  }
  return e;
}, Tu = function(e, n, r, i, o, l, s, a) {
  var u = o.startColor, c = o.endColor, f = o.fontSize, d = o.indent, p = o.fontWeight, m = $e.createElement("div"), h = Do(r) || Ai(r, "pinType") === "fixed", _ = e.indexOf("scroller") !== -1, v = h ? Te : r, g = e.indexOf("start") !== -1, y = g ? u : c, w = "border-color:" + y + ";font-size:" + f + ";color:" + y + ";font-weight:" + p + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
  return w += "position:" + ((_ || a) && h ? "fixed;" : "absolute;"), (_ || a || !h) && (w += (i === it ? mm : gm) + ":" + (l + parseFloat(d)) + "px;"), s && (w += "box-sizing:border-box;text-align:left;width:" + s.offsetWidth + "px;"), m._isStart = g, m.setAttribute("class", "gsap-marker-" + e + (n ? " marker-" + n : "")), m.style.cssText = w, m.innerText = n || n === 0 ? e + "-" + n : e, v.children[0] ? v.insertBefore(m, v.children[0]) : v.appendChild(m), m._offset = m["offset" + i.op.d2], nc(m, 0, i, g), m;
}, nc = function(e, n, r, i) {
  var o = {
    display: "block"
  }, l = r[i ? "os2" : "p2"], s = r[i ? "p2" : "os2"];
  e._isFlipped = i, o[r.a + "Percent"] = i ? -100 : 0, o[r.a] = i ? "1px" : 0, o["border" + l + Wl] = 1, o["border" + s + Wl] = 0, o[r.p] = n + "px", W.set(e, o);
}, te = [], Sh = {}, ba, Q1 = function() {
  return jt() - Vn > 34 && (ba || (ba = requestAnimationFrame(Qr)));
}, qo = function() {
  (!gn || !gn.isPressed || gn.startX > Te.clientWidth) && (ie.cache++, gn ? ba || (ba = requestAnimationFrame(Qr)) : Qr(), Vn || Lo("scrollStart"), Vn = jt());
}, Ld = function() {
  r2 = se.innerWidth, n2 = se.innerHeight;
}, Ss = function() {
  ie.cache++, !bt && !e2 && !$e.fullscreenElement && !$e.webkitFullscreenElement && (!t2 || r2 !== se.innerWidth || Math.abs(se.innerHeight - n2) > se.innerHeight * 0.25) && Xc.restart(!0);
}, zo = {}, OP = [], f2 = function t() {
  return at(oe, "scrollEnd", t) || yo(!0);
}, Lo = function(e) {
  return zo[e] && zo[e].map(function(n) {
    return n();
  }) || OP;
}, vn = [], d2 = function(e) {
  for (var n = 0; n < vn.length; n += 5)
    (!e || vn[n + 4] && vn[n + 4].query === e) && (vn[n].style.cssText = vn[n + 1], vn[n].getBBox && vn[n].setAttribute("transform", vn[n + 2] || ""), vn[n + 3].uncache = 1);
}, _m = function(e, n) {
  var r;
  for (zt = 0; zt < te.length; zt++)
    r = te[zt], r && (!n || r._ctx === n) && (e ? r.kill(1) : r.revert(!0, !0));
  n && d2(n), n || Lo("revert");
}, p2 = function(e, n) {
  ie.cache++, (n || !Lt) && ie.forEach(function(r) {
    return Ht(r) && r.cacheID++ && (r.rec = 0);
  }), _n(e) && (se.history.scrollRestoration = pm = e);
}, Lt, bo = 0, q1, MP = function() {
  if (q1 !== bo) {
    var e = q1 = bo;
    requestAnimationFrame(function() {
      return e === bo && yo(!0);
    });
  }
}, h2 = function() {
  Te.appendChild(Pl), hm = Pl.offsetHeight || se.innerHeight, Te.removeChild(Pl);
}, yo = function(e, n) {
  if (Vn && !e) {
    ut(oe, "scrollEnd", f2);
    return;
  }
  h2(), Lt = oe.isRefreshing = !0, ie.forEach(function(i) {
    return Ht(i) && ++i.cacheID && (i.rec = i());
  });
  var r = Lo("refreshInit");
  Jx && oe.sort(), n || _m(), ie.forEach(function(i) {
    Ht(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"), i(0));
  }), te.slice(0).forEach(function(i) {
    return i.refresh();
  }), te.forEach(function(i, o) {
    if (i._subPinOffset && i.pin) {
      var l = i.vars.horizontal ? "offsetWidth" : "offsetHeight", s = i.pin[l];
      i.revert(!0, 1), i.adjustPinSpacing(i.pin[l] - s), i.refresh();
    }
  }), te.forEach(function(i) {
    var o = Xr(i.scroller, i._dir);
    (i.vars.end === "max" || i._endClamp && i.end > o) && i.setPositions(i.start, Math.max(i.start + 1, o), !0);
  }), r.forEach(function(i) {
    return i && i.render && i.render(-1);
  }), ie.forEach(function(i) {
    Ht(i) && (i.smooth && requestAnimationFrame(function() {
      return i.target.style.scrollBehavior = "smooth";
    }), i.rec && i(i.rec));
  }), p2(pm, 1), Xc.pause(), bo++, Lt = 2, Qr(2), te.forEach(function(i) {
    return Ht(i.vars.onRefresh) && i.vars.onRefresh(i);
  }), Lt = oe.isRefreshing = !1, Lo("refresh");
}, Eh = 0, rc = 1, Gs, Qr = function(e) {
  if (!Lt || e === 2) {
    oe.isUpdating = !0, Gs && Gs.update(0);
    var n = te.length, r = jt(), i = r - Dd >= 50, o = n && te[0].scroll();
    if (rc = Eh > o ? -1 : 1, Lt || (Eh = o), i && (Vn && !$f && r - Vn > 200 && (Vn = 0, Lo("scrollEnd")), Ju = Dd, Dd = r), rc < 0) {
      for (zt = n; zt-- > 0; )
        te[zt] && te[zt].update(0, i);
      rc = 1;
    } else
      for (zt = 0; zt < n; zt++)
        te[zt] && te[zt].update(0, i);
    oe.isUpdating = !1;
  }
  ba = 0;
}, Th = [a2, u2, gm, mm, Dn + Xs, Dn + Vs, Dn + Ys, Dn + Us, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], ic = Th.concat([To, Co, "boxSizing", "max" + Wl, "max" + vm, "position", Dn, Ze, Ze + Ys, Ze + Vs, Ze + Xs, Ze + Us]), RP = function(e, n, r) {
  Ol(r);
  var i = e._gsap;
  if (i.spacerIsNative)
    Ol(i.spacerState);
  else if (e._gsap.swappedIn) {
    var o = n.parentNode;
    o && (o.insertBefore(e, n), o.removeChild(n));
  }
  e._gsap.swappedIn = !1;
}, jd = function(e, n, r, i) {
  if (!e._gsap.swappedIn) {
    for (var o = Th.length, l = n.style, s = e.style, a; o--; )
      a = Th[o], l[a] = r[a];
    l.position = r.position === "absolute" ? "absolute" : "relative", r.display === "inline" && (l.display = "inline-block"), s[gm] = s[mm] = "auto", l.flexBasis = r.flexBasis || "auto", l.overflow = "visible", l.boxSizing = "border-box", l[To] = kh(e, Ft) + gt, l[Co] = kh(e, it) + gt, l[Ze] = s[Dn] = s[u2] = s[a2] = "0", Ol(i), s[To] = s["max" + Wl] = r[To], s[Co] = s["max" + vm] = r[Co], s[Ze] = r[Ze], e.parentNode !== n && (e.parentNode.insertBefore(n, e), n.appendChild(e)), e._gsap.swappedIn = !0;
  }
}, NP = /([A-Z])/g, Ol = function(e) {
  if (e) {
    var n = e.t.style, r = e.length, i = 0, o, l;
    for ((e.t._gsap || W.core.getCache(e.t)).uncache = 1; i < r; i += 2)
      l = e[i + 1], o = e[i], l ? n[o] = l : n[o] && n.removeProperty(o.replace(NP, "-$1").toLowerCase());
  }
}, Cu = function(e) {
  for (var n = ic.length, r = e.style, i = [], o = 0; o < n; o++)
    i.push(ic[o], r[ic[o]]);
  return i.t = e, i;
}, IP = function(e, n, r) {
  for (var i = [], o = e.length, l = r ? 8 : 0, s; l < o; l += 2)
    s = e[l], i.push(s, s in n ? n[s] : e[l + 1]);
  return i.t = e.t, i;
}, oc = {
  left: 0,
  top: 0
}, K1 = function(e, n, r, i, o, l, s, a, u, c, f, d, p, m) {
  Ht(e) && (e = e(a)), _n(e) && e.substr(0, 3) === "max" && (e = d + (e.charAt(4) === "=" ? tc("0" + e.substr(3), r) : 0));
  var h = p ? p.time() : 0, _, v, g;
  if (p && p.seek(0), isNaN(e) || (e = +e), ec(e))
    p && (e = W.utils.mapRange(p.scrollTrigger.start, p.scrollTrigger.end, 0, d, e)), s && nc(s, r, i, !0);
  else {
    Ht(n) && (n = n(a));
    var y = (e || "0").split(" "), w, S, E, k;
    g = qt(n, a) || Te, w = Wr(g) || {}, (!w || !w.left && !w.top) && zn(g).display === "none" && (k = g.style.display, g.style.display = "block", w = Wr(g), k ? g.style.display = k : g.style.removeProperty("display")), S = tc(y[0], w[i.d]), E = tc(y[1] || "0", r), e = w[i.p] - u[i.p] - c + S + o - E, s && nc(s, E, i, r - E < 20 || s._isStart && E > 20), r -= r - E;
  }
  if (m && (a[m] = e || -1e-3, e < 0 && (e = 0)), l) {
    var b = e + r, O = l._isStart;
    _ = "scroll" + i.d2, nc(l, b, i, O && b > 20 || !O && (f ? Math.max(Te[_], sr[_]) : l.parentNode[_]) <= b + 1), f && (u = Wr(s), f && (l.style[i.op.p] = u[i.op.p] - i.op.m - l._offset + gt));
  }
  return p && g && (_ = Wr(g), p.seek(d), v = Wr(g), p._caScrollDist = _[i.p] - v[i.p], e = e / p._caScrollDist * d), p && p.seek(h), p ? e : Math.round(e);
}, $P = /(webkit|moz|length|cssText|inset)/i, Z1 = function(e, n, r, i) {
  if (e.parentNode !== n) {
    var o = e.style, l, s;
    if (n === Te) {
      e._stOrig = o.cssText, s = zn(e);
      for (l in s)
        !+l && !$P.test(l) && s[l] && typeof o[l] == "string" && l !== "0" && (o[l] = s[l]);
      o.top = r, o.left = i;
    } else
      o.cssText = e._stOrig;
    W.core.getCache(e).uncache = 1, n.appendChild(e);
  }
}, m2 = function(e, n, r) {
  var i = n, o = i;
  return function(l) {
    var s = Math.round(e());
    return s !== i && s !== o && Math.abs(s - i) > 3 && Math.abs(s - o) > 3 && (l = s, r && r()), o = i, i = l, l;
  };
}, bu = function(e, n, r) {
  var i = {};
  i[n.p] = "+=" + r, W.set(e, i);
}, J1 = function(e, n) {
  var r = Hi(e, n), i = "_scroll" + n.p2, o = function l(s, a, u, c, f) {
    var d = l.tween, p = a.onComplete, m = {};
    u = u || r();
    var h = m2(r, u, function() {
      d.kill(), l.tween = 0;
    });
    return f = c && f || 0, c = c || s - u, d && d.kill(), a[i] = s, a.modifiers = m, m[i] = function() {
      return h(u + c * d.ratio + f * d.ratio * d.ratio);
    }, a.onUpdate = function() {
      ie.cache++, Qr();
    }, a.onComplete = function() {
      l.tween = 0, p && p.call(d);
    }, d = l.tween = W.to(e, a), d;
  };
  return e[i] = r, r.wheelHandler = function() {
    return o.tween && o.tween.kill() && (o.tween = 0);
  }, ut(e, "wheel", r.wheelHandler), oe.isTouch && ut(e, "touchmove", r.wheelHandler), o;
}, oe = /* @__PURE__ */ function() {
  function t(n, r) {
    Ko || t.register(W) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), xh(this), this.init(n, r);
  }
  var e = t.prototype;
  return e.init = function(r, i) {
    if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !xs) {
      this.update = this.refresh = this.kill = kr;
      return;
    }
    r = X1(_n(r) || ec(r) || r.nodeType ? {
      trigger: r
    } : r, Eu);
    var o = r, l = o.onUpdate, s = o.toggleClass, a = o.id, u = o.onToggle, c = o.onRefresh, f = o.scrub, d = o.trigger, p = o.pin, m = o.pinSpacing, h = o.invalidateOnRefresh, _ = o.anticipatePin, v = o.onScrubComplete, g = o.onSnapComplete, y = o.once, w = o.snap, S = o.pinReparent, E = o.pinSpacer, k = o.containerAnimation, b = o.fastScrollEnd, O = o.preventOverlaps, P = r.horizontal || r.containerAnimation && r.horizontal !== !1 ? Ft : it, L = !f && f !== 0, A = qt(r.scroller || se), X = W.core.getCache(A), N = Do(A), z = ("pinType" in r ? r.pinType : Ai(A, "pinType") || N && "fixed") === "fixed", V = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack], j = L && r.toggleActions.split(" "), R = "markers" in r ? r.markers : Eu.markers, D = N ? 0 : parseFloat(zn(A)["border" + P.p2 + Wl]) || 0, x = this, Y = r.onRefreshInit && function() {
      return r.onRefreshInit(x);
    }, J = EP(A, N, P), lt = TP(A, N), fe = 0, de = 0, ye = 0, ue = Hi(A, P), Qe, be, Mn, Xt, hr, ge, qe, Gt, dn, M, pn, Ar, Gi, Ke, Qi, qi, Ql, pt, Ue, Qn, qn, Ki, Dr, mr, Qt, Zi, Wo, Vo, Ji, ri, ii, pe, eo, Kn, Zn, Jn, to, Uo, zr;
    if (x._startClamp = x._endClamp = !1, x._dir = P, _ *= 45, x.scroller = A, x.scroll = k ? k.time.bind(k) : ue, Xt = ue(), x.vars = r, i = i || r.animation, "refreshPriority" in r && (Jx = 1, r.refreshPriority === -9999 && (Gs = x)), X.tweenScroll = X.tweenScroll || {
      top: J1(A, it),
      left: J1(A, Ft)
    }, x.tweenTo = Qe = X.tweenScroll[P.p], x.scrubDuration = function(B) {
      eo = ec(B) && B, eo ? pe ? pe.duration(B) : pe = W.to(i, {
        ease: "expo",
        totalProgress: "+=0",
        duration: eo,
        paused: !0,
        onComplete: function() {
          return v && v(x);
        }
      }) : (pe && pe.progress(1).kill(), pe = 0);
    }, i && (i.vars.lazy = !1, i._initted && !x.isReverted || i.vars.immediateRender !== !1 && r.immediateRender !== !1 && i.duration() && i.render(0, !0, !0), x.animation = i.pause(), i.scrollTrigger = x, x.scrubDuration(f), ri = 0, a || (a = i.vars.id)), w && ((!co(w) || w.push) && (w = {
      snapTo: w
    }), "scrollBehavior" in Te.style && W.set(N ? [Te, sr] : A, {
      scrollBehavior: "auto"
    }), ie.forEach(function(B) {
      return Ht(B) && B.target === (N ? $e.scrollingElement || sr : A) && (B.smooth = !1);
    }), Mn = Ht(w.snapTo) ? w.snapTo : w.snapTo === "labels" ? bP(i) : w.snapTo === "labelsDirectional" ? PP(i) : w.directional !== !1 ? function(B, ce) {
      return ym(w.snapTo)(B, jt() - de < 500 ? 0 : ce.direction);
    } : W.utils.snap(w.snapTo), Kn = w.duration || {
      min: 0.1,
      max: 2
    }, Kn = co(Kn) ? ml(Kn.min, Kn.max) : ml(Kn, Kn), Zn = W.delayedCall(w.delay || eo / 2 || 0.1, function() {
      var B = ue(), ce = jt() - de < 500, G = Qe.tween;
      if ((ce || Math.abs(x.getVelocity()) < 10) && !G && !$f && fe !== B) {
        var ne = (B - ge) / Ke, st = i && !L ? i.totalProgress() : ne, he = ce ? 0 : (st - ii) / (jt() - Ju) * 1e3 || 0, Ye = W.utils.clamp(-ne, 1 - ne, Qo(he / 2) * he / 0.185), It = ne + (w.inertia === !1 ? 0 : Ye), ht = ml(0, 1, Mn(It, x)), Me = Math.round(ge + ht * Ke), we = w, er = we.onStart, Re = we.onInterrupt, hn = we.onComplete;
        if (B <= qe && B >= ge && Me !== B) {
          if (G && !G._initted && G.data <= Qo(Me - B))
            return;
          w.inertia === !1 && (Ye = ht - ne), Qe(Me, {
            duration: Kn(Qo(Math.max(Qo(It - st), Qo(ht - st)) * 0.185 / he / 0.05 || 0)),
            ease: w.ease || "power3",
            data: Qo(Me - B),
            // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
            onInterrupt: function() {
              return Zn.restart(!0) && Re && Re(x);
            },
            onComplete: function() {
              x.update(), fe = ue(), ri = ii = i && !L ? i.totalProgress() : x.progress, g && g(x), hn && hn(x);
            }
          }, B, Ye * Ke, Me - B - Ye * Ke), er && er(x, Qe.tween);
        }
      } else
        x.isActive && fe !== B && Zn.restart(!0);
    }).pause()), a && (Sh[a] = x), d = x.trigger = qt(d || p !== !0 && p), zr = d && d._gsap && d._gsap.stRevert, zr && (zr = zr(x)), p = p === !0 ? d : qt(p), _n(s) && (s = {
      targets: d,
      className: s
    }), p && (m === !1 || m === Dn || (m = !m && p.parentNode && p.parentNode.style && zn(p.parentNode).display === "flex" ? !1 : Ze), x.pin = p, be = W.core.getCache(p), be.spacer ? Qi = be.pinState : (E && (E = qt(E), E && !E.nodeType && (E = E.current || E.nativeElement), be.spacerIsNative = !!E, E && (be.spacerState = Cu(E))), be.spacer = pt = E || $e.createElement("div"), pt.classList.add("pin-spacer"), a && pt.classList.add("pin-spacer-" + a), be.pinState = Qi = Cu(p)), r.force3D !== !1 && W.set(p, {
      force3D: !0
    }), x.spacer = pt = be.spacer, Ji = zn(p), mr = Ji[m + P.os2], Qn = W.getProperty(p), qn = W.quickSetter(p, P.a, gt), jd(p, pt, Ji), Ql = Cu(p)), R) {
      Ar = co(R) ? X1(R, G1) : G1, M = Tu("scroller-start", a, A, P, Ar, 0), pn = Tu("scroller-end", a, A, P, Ar, 0, M), Ue = M["offset" + P.op.d2];
      var ee = qt(Ai(A, "content") || A);
      Gt = this.markerStart = Tu("start", a, ee, P, Ar, Ue, 0, k), dn = this.markerEnd = Tu("end", a, ee, P, Ar, Ue, 0, k), k && (Uo = W.quickSetter([Gt, dn], P.a, gt)), !z && !(Mr.length && Ai(A, "fixedMarkers") === !0) && (CP(N ? Te : A), W.set([M, pn], {
        force3D: !0
      }), Zi = W.quickSetter(M, P.a, gt), Vo = W.quickSetter(pn, P.a, gt));
    }
    if (k) {
      var U = k.vars.onUpdate, ve = k.vars.onUpdateParams;
      k.eventCallback("onUpdate", function() {
        x.update(0, 0, 1), U && U.apply(k, ve || []);
      });
    }
    if (x.previous = function() {
      return te[te.indexOf(x) - 1];
    }, x.next = function() {
      return te[te.indexOf(x) + 1];
    }, x.revert = function(B, ce) {
      if (!ce)
        return x.kill(!0);
      var G = B !== !1 || !x.enabled, ne = bt;
      G !== x.isReverted && (G && (Jn = Math.max(ue(), x.scroll.rec || 0), ye = x.progress, to = i && i.progress()), Gt && [Gt, dn, M, pn].forEach(function(st) {
        return st.style.display = G ? "none" : "block";
      }), G && (bt = x, x.update(G)), p && (!S || !x.isActive) && (G ? RP(p, pt, Qi) : jd(p, pt, zn(p), Qt)), G || x.update(G), bt = ne, x.isReverted = G);
    }, x.refresh = function(B, ce, G, ne) {
      if (!((bt || !x.enabled) && !ce)) {
        if (p && B && Vn) {
          ut(t, "scrollEnd", f2);
          return;
        }
        !Lt && Y && Y(x), bt = x, Qe.tween && !G && (Qe.tween.kill(), Qe.tween = 0), pe && pe.pause(), h && i && i.revert({
          kill: !1
        }).invalidate(), x.isReverted || x.revert(!0, !0), x._subPinOffset = !1;
        var st = J(), he = lt(), Ye = k ? k.duration() : Xr(A, P), It = Ke <= 0.01, ht = 0, Me = ne || 0, we = co(G) ? G.end : r.end, er = r.endTrigger || d, Re = co(G) ? G.start : r.start || (r.start === 0 || !d ? 0 : p ? "0 0" : "0 100%"), hn = x.pinnedContainer = r.pinnedContainer && qt(r.pinnedContainer, x), gr = d && Math.max(0, te.indexOf(x)) || 0, mn = gr, mt, St, no, Ua, Et, nt, vr, Bf, Pm, ql, yr, Kl, Ya;
        for (R && co(G) && (Kl = W.getProperty(M, P.p), Ya = W.getProperty(pn, P.p)); mn--; )
          nt = te[mn], nt.end || nt.refresh(0, 1) || (bt = x), vr = nt.pin, vr && (vr === d || vr === p || vr === hn) && !nt.isReverted && (ql || (ql = []), ql.unshift(nt), nt.revert(!0, !0)), nt !== te[mn] && (gr--, mn--);
        for (Ht(Re) && (Re = Re(x)), Re = W1(Re, "start", x), ge = K1(Re, d, st, P, ue(), Gt, M, x, he, D, z, Ye, k, x._startClamp && "_startClamp") || (p ? -1e-3 : 0), Ht(we) && (we = we(x)), _n(we) && !we.indexOf("+=") && (~we.indexOf(" ") ? we = (_n(Re) ? Re.split(" ")[0] : "") + we : (ht = tc(we.substr(2), st), we = _n(Re) ? Re : (k ? W.utils.mapRange(0, k.duration(), k.scrollTrigger.start, k.scrollTrigger.end, ge) : ge) + ht, er = d)), we = W1(we, "end", x), qe = Math.max(ge, K1(we || (er ? "100% 0" : Ye), er, st, P, ue() + ht, dn, pn, x, he, D, z, Ye, k, x._endClamp && "_endClamp")) || -1e-3, ht = 0, mn = gr; mn--; )
          nt = te[mn], vr = nt.pin, vr && nt.start - nt._pinPush <= ge && !k && nt.end > 0 && (mt = nt.end - (x._startClamp ? Math.max(0, nt.start) : nt.start), (vr === d && nt.start - nt._pinPush < ge || vr === hn) && isNaN(Re) && (ht += mt * (1 - nt.progress)), vr === p && (Me += mt));
        if (ge += ht, qe += ht, x._startClamp && (x._startClamp += ht), x._endClamp && !Lt && (x._endClamp = qe || -1e-3, qe = Math.min(qe, Xr(A, P))), Ke = qe - ge || (ge -= 0.01) && 1e-3, It && (ye = W.utils.clamp(0, 1, W.utils.normalize(ge, qe, Jn))), x._pinPush = Me, Gt && ht && (mt = {}, mt[P.a] = "+=" + ht, hn && (mt[P.p] = "-=" + ue()), W.set([Gt, dn], mt)), p)
          mt = zn(p), Ua = P === it, no = ue(), Ki = parseFloat(Qn(P.a)) + Me, !Ye && qe > 1 && (yr = (N ? $e.scrollingElement || sr : A).style, yr = {
            style: yr,
            value: yr["overflow" + P.a.toUpperCase()]
          }, N && zn(Te)["overflow" + P.a.toUpperCase()] !== "scroll" && (yr.style["overflow" + P.a.toUpperCase()] = "scroll")), jd(p, pt, mt), Ql = Cu(p), St = Wr(p, !0), Bf = z && Hi(A, Ua ? Ft : it)(), m && (Qt = [m + P.os2, Ke + Me + gt], Qt.t = pt, mn = m === Ze ? kh(p, P) + Ke + Me : 0, mn && Qt.push(P.d, mn + gt), Ol(Qt), hn && te.forEach(function(Zl) {
            Zl.pin === hn && Zl.vars.pinSpacing !== !1 && (Zl._subPinOffset = !0);
          }), z && ue(Jn)), z && (Et = {
            top: St.top + (Ua ? no - ge : Bf) + gt,
            left: St.left + (Ua ? Bf : no - ge) + gt,
            boxSizing: "border-box",
            position: "fixed"
          }, Et[To] = Et["max" + Wl] = Math.ceil(St.width) + gt, Et[Co] = Et["max" + vm] = Math.ceil(St.height) + gt, Et[Dn] = Et[Dn + Ys] = Et[Dn + Vs] = Et[Dn + Xs] = Et[Dn + Us] = "0", Et[Ze] = mt[Ze], Et[Ze + Ys] = mt[Ze + Ys], Et[Ze + Vs] = mt[Ze + Vs], Et[Ze + Xs] = mt[Ze + Xs], Et[Ze + Us] = mt[Ze + Us], qi = IP(Qi, Et, S), Lt && ue(0)), i ? (Pm = i._initted, $d(1), i.render(i.duration(), !0, !0), Dr = Qn(P.a) - Ki + Ke + Me, Wo = Math.abs(Ke - Dr) > 1, z && Wo && qi.splice(qi.length - 2, 2), i.render(0, !0, !0), Pm || i.invalidate(!0), i.parent || i.totalTime(i.totalTime()), $d(0)) : Dr = Ke, yr && (yr.value ? yr.style["overflow" + P.a.toUpperCase()] = yr.value : yr.style.removeProperty("overflow-" + P.a));
        else if (d && ue() && !k)
          for (St = d.parentNode; St && St !== Te; )
            St._pinOffset && (ge -= St._pinOffset, qe -= St._pinOffset), St = St.parentNode;
        ql && ql.forEach(function(Zl) {
          return Zl.revert(!1, !0);
        }), x.start = ge, x.end = qe, Xt = hr = Lt ? Jn : ue(), !k && !Lt && (Xt < Jn && ue(Jn), x.scroll.rec = 0), x.revert(!1, !0), de = jt(), Zn && (fe = -1, Zn.restart(!0)), bt = 0, i && L && (i._initted || to) && i.progress() !== to && i.progress(to || 0, !0).render(i.time(), !0, !0), (It || ye !== x.progress || k) && (i && !L && i.totalProgress(k && ge < -1e-3 && !ye ? W.utils.normalize(ge, qe, 0) : ye, !0), x.progress = It || (Xt - ge) / Ke === ye ? 0 : ye), p && m && (pt._pinOffset = Math.round(x.progress * Dr)), pe && pe.invalidate(), isNaN(Kl) || (Kl -= W.getProperty(M, P.p), Ya -= W.getProperty(pn, P.p), bu(M, P, Kl), bu(Gt, P, Kl - (ne || 0)), bu(pn, P, Ya), bu(dn, P, Ya - (ne || 0))), It && !Lt && x.update(), c && !Lt && !Gi && (Gi = !0, c(x), Gi = !1);
      }
    }, x.getVelocity = function() {
      return (ue() - hr) / (jt() - Ju) * 1e3 || 0;
    }, x.endAnimation = function() {
      ds(x.callbackAnimation), i && (pe ? pe.progress(1) : i.paused() ? L || ds(i, x.direction < 0, 1) : ds(i, i.reversed()));
    }, x.labelToScroll = function(B) {
      return i && i.labels && (ge || x.refresh() || ge) + i.labels[B] / i.duration() * Ke || 0;
    }, x.getTrailing = function(B) {
      var ce = te.indexOf(x), G = x.direction > 0 ? te.slice(0, ce).reverse() : te.slice(ce + 1);
      return (_n(B) ? G.filter(function(ne) {
        return ne.vars.preventOverlaps === B;
      }) : G).filter(function(ne) {
        return x.direction > 0 ? ne.end <= ge : ne.start >= qe;
      });
    }, x.update = function(B, ce, G) {
      if (!(k && !G && !B)) {
        var ne = Lt === !0 ? Jn : x.scroll(), st = B ? 0 : (ne - ge) / Ke, he = st < 0 ? 0 : st > 1 ? 1 : st || 0, Ye = x.progress, It, ht, Me, we, er, Re, hn, gr;
        if (ce && (hr = Xt, Xt = k ? ue() : ne, w && (ii = ri, ri = i && !L ? i.totalProgress() : he)), _ && !he && p && !bt && !wu && Vn && ge < ne + (ne - hr) / (jt() - Ju) * _ && (he = 1e-4), he !== Ye && x.enabled) {
          if (It = x.isActive = !!he && he < 1, ht = !!Ye && Ye < 1, Re = It !== ht, er = Re || !!he != !!Ye, x.direction = he > Ye ? 1 : -1, x.progress = he, er && !bt && (Me = he && !Ye ? 0 : he === 1 ? 1 : Ye === 1 ? 2 : 3, L && (we = !Re && j[Me + 1] !== "none" && j[Me + 1] || j[Me], gr = i && (we === "complete" || we === "reset" || we in i))), O && (Re || gr) && (gr || f || !i) && (Ht(O) ? O(x) : x.getTrailing(O).forEach(function(no) {
            return no.endAnimation();
          })), L || (pe && !bt && !wu ? (pe._dp._time - pe._start !== pe._time && pe.render(pe._dp._time - pe._start), pe.resetTo ? pe.resetTo("totalProgress", he, i._tTime / i._tDur) : (pe.vars.totalProgress = he, pe.invalidate().restart())) : i && i.totalProgress(he, !!(bt && (de || B)))), p) {
            if (B && m && (pt.style[m + P.os2] = mr), !z)
              qn(ks(Ki + Dr * he));
            else if (er) {
              if (hn = !B && he > Ye && qe + 1 > ne && ne + 1 >= Xr(A, P), S)
                if (!B && (It || hn)) {
                  var mn = Wr(p, !0), mt = ne - ge;
                  Z1(p, Te, mn.top + (P === it ? mt : 0) + gt, mn.left + (P === it ? 0 : mt) + gt);
                } else
                  Z1(p, pt);
              Ol(It || hn ? qi : Ql), Wo && he < 1 && It || qn(Ki + (he === 1 && !hn ? Dr : 0));
            }
          }
          w && !Qe.tween && !bt && !wu && Zn.restart(!0), s && (Re || y && he && (he < 1 || !Ad)) && Gc(s.targets).forEach(function(no) {
            return no.classList[It || y ? "add" : "remove"](s.className);
          }), l && !L && !B && l(x), er && !bt ? (L && (gr && (we === "complete" ? i.pause().totalProgress(1) : we === "reset" ? i.restart(!0).pause() : we === "restart" ? i.restart(!0) : i[we]()), l && l(x)), (Re || !Ad) && (u && Re && zd(x, u), V[Me] && zd(x, V[Me]), y && (he === 1 ? x.kill(!1, 1) : V[Me] = 0), Re || (Me = he === 1 ? 1 : 3, V[Me] && zd(x, V[Me]))), b && !It && Math.abs(x.getVelocity()) > (ec(b) ? b : 2500) && (ds(x.callbackAnimation), pe ? pe.progress(1) : ds(i, we === "reverse" ? 1 : !he, 1))) : L && l && !bt && l(x);
        }
        if (Vo) {
          var St = k ? ne / k.duration() * (k._caScrollDist || 0) : ne;
          Zi(St + (M._isFlipped ? 1 : 0)), Vo(St);
        }
        Uo && Uo(-ne / k.duration() * (k._caScrollDist || 0));
      }
    }, x.enable = function(B, ce) {
      x.enabled || (x.enabled = !0, ut(A, "resize", Ss), N || ut(A, "scroll", qo), Y && ut(t, "refreshInit", Y), B !== !1 && (x.progress = ye = 0, Xt = hr = fe = ue()), ce !== !1 && x.refresh());
    }, x.getTween = function(B) {
      return B && Qe ? Qe.tween : pe;
    }, x.setPositions = function(B, ce, G, ne) {
      if (k) {
        var st = k.scrollTrigger, he = k.duration(), Ye = st.end - st.start;
        B = st.start + Ye * B / he, ce = st.start + Ye * ce / he;
      }
      x.refresh(!1, !1, {
        start: V1(B, G && !!x._startClamp),
        end: V1(ce, G && !!x._endClamp)
      }, ne), x.update();
    }, x.adjustPinSpacing = function(B) {
      if (Qt && B) {
        var ce = Qt.indexOf(P.d) + 1;
        Qt[ce] = parseFloat(Qt[ce]) + B + gt, Qt[1] = parseFloat(Qt[1]) + B + gt, Ol(Qt);
      }
    }, x.disable = function(B, ce) {
      if (x.enabled && (B !== !1 && x.revert(!0, !0), x.enabled = x.isActive = !1, ce || pe && pe.pause(), Jn = 0, be && (be.uncache = 1), Y && at(t, "refreshInit", Y), Zn && (Zn.pause(), Qe.tween && Qe.tween.kill() && (Qe.tween = 0)), !N)) {
        for (var G = te.length; G--; )
          if (te[G].scroller === A && te[G] !== x)
            return;
        at(A, "resize", Ss), N || at(A, "scroll", qo);
      }
    }, x.kill = function(B, ce) {
      x.disable(B, ce), pe && !ce && pe.kill(), a && delete Sh[a];
      var G = te.indexOf(x);
      G >= 0 && te.splice(G, 1), G === zt && rc > 0 && zt--, G = 0, te.forEach(function(ne) {
        return ne.scroller === x.scroller && (G = 1);
      }), G || Lt || (x.scroll.rec = 0), i && (i.scrollTrigger = null, B && i.revert({
        kill: !1
      }), ce || i.kill()), Gt && [Gt, dn, M, pn].forEach(function(ne) {
        return ne.parentNode && ne.parentNode.removeChild(ne);
      }), Gs === x && (Gs = 0), p && (be && (be.uncache = 1), G = 0, te.forEach(function(ne) {
        return ne.pin === p && G++;
      }), G || (be.spacer = 0)), r.onKill && r.onKill(x);
    }, te.push(x), x.enable(!1, !1), zr && zr(x), i && i.add && !Ke) {
      var Fe = x.update;
      x.update = function() {
        x.update = Fe, ge || qe || x.refresh();
      }, W.delayedCall(0.01, x.update), Ke = 0.01, ge = qe = 0;
    } else
      x.refresh();
    p && MP();
  }, t.register = function(r) {
    return Ko || (W = r || o2(), i2() && window.document && t.enable(), Ko = xs), Ko;
  }, t.defaults = function(r) {
    if (r)
      for (var i in r)
        Eu[i] = r[i];
    return Eu;
  }, t.disable = function(r, i) {
    xs = 0, te.forEach(function(l) {
      return l[i ? "kill" : "disable"](r);
    }), at(se, "wheel", qo), at($e, "scroll", qo), clearInterval(_u), at($e, "touchcancel", kr), at(Te, "touchstart", kr), ku(at, $e, "pointerdown,touchstart,mousedown", U1), ku(at, $e, "pointerup,touchend,mouseup", Y1), Xc.kill(), xu(at);
    for (var o = 0; o < ie.length; o += 3)
      Su(at, ie[o], ie[o + 1]), Su(at, ie[o], ie[o + 2]);
  }, t.enable = function() {
    if (se = window, $e = document, sr = $e.documentElement, Te = $e.body, W && (Gc = W.utils.toArray, ml = W.utils.clamp, xh = W.core.context || kr, $d = W.core.suppressOverwrites || kr, pm = se.history.scrollRestoration || "auto", Eh = se.pageYOffset, W.core.globals("ScrollTrigger", t), Te)) {
      xs = 1, Pl = document.createElement("div"), Pl.style.height = "100vh", Pl.style.position = "absolute", h2(), SP(), tt.register(W), t.isTouch = tt.isTouch, ci = tt.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), ut(se, "wheel", qo), Zx = [se, $e, sr, Te], W.matchMedia ? (t.matchMedia = function(a) {
        var u = W.matchMedia(), c;
        for (c in a)
          u.add(c, a[c]);
        return u;
      }, W.addEventListener("matchMediaInit", function() {
        return _m();
      }), W.addEventListener("matchMediaRevert", function() {
        return d2();
      }), W.addEventListener("matchMedia", function() {
        yo(0, 1), Lo("matchMedia");
      }), W.matchMedia("(orientation: portrait)", function() {
        return Ld(), Ld;
      })) : console.warn("Requires GSAP 3.11.0 or later"), Ld(), ut($e, "scroll", qo);
      var r = Te.style, i = r.borderTopStyle, o = W.core.Animation.prototype, l, s;
      for (o.revert || Object.defineProperty(o, "revert", {
        value: function() {
          return this.time(-0.01, !0);
        }
      }), r.borderTopStyle = "solid", l = Wr(Te), it.m = Math.round(l.top + it.sc()) || 0, Ft.m = Math.round(l.left + Ft.sc()) || 0, i ? r.borderTopStyle = i : r.removeProperty("border-top-style"), _u = setInterval(Q1, 250), W.delayedCall(0.5, function() {
        return wu = 0;
      }), ut($e, "touchcancel", kr), ut(Te, "touchstart", kr), ku(ut, $e, "pointerdown,touchstart,mousedown", U1), ku(ut, $e, "pointerup,touchend,mouseup", Y1), wh = W.utils.checkPrefix("transform"), ic.push(wh), Ko = jt(), Xc = W.delayedCall(0.2, yo).pause(), Zo = [$e, "visibilitychange", function() {
        var a = se.innerWidth, u = se.innerHeight;
        $e.hidden ? (H1 = a, B1 = u) : (H1 !== a || B1 !== u) && Ss();
      }, $e, "DOMContentLoaded", yo, se, "load", yo, se, "resize", Ss], xu(ut), te.forEach(function(a) {
        return a.enable(0, 1);
      }), s = 0; s < ie.length; s += 3)
        Su(at, ie[s], ie[s + 1]), Su(at, ie[s], ie[s + 2]);
    }
  }, t.config = function(r) {
    "limitCallbacks" in r && (Ad = !!r.limitCallbacks);
    var i = r.syncInterval;
    i && clearInterval(_u) || (_u = i) && setInterval(Q1, i), "ignoreMobileResize" in r && (t2 = t.isTouch === 1 && r.ignoreMobileResize), "autoRefreshEvents" in r && (xu(at) || xu(ut, r.autoRefreshEvents || "none"), e2 = (r.autoRefreshEvents + "").indexOf("resize") === -1);
  }, t.scrollerProxy = function(r, i) {
    var o = qt(r), l = ie.indexOf(o), s = Do(o);
    ~l && ie.splice(l, s ? 6 : 2), i && (s ? Mr.unshift(se, i, Te, i, sr, i) : Mr.unshift(o, i));
  }, t.clearMatchMedia = function(r) {
    te.forEach(function(i) {
      return i._ctx && i._ctx.query === r && i._ctx.kill(!0, !0);
    });
  }, t.isInViewport = function(r, i, o) {
    var l = (_n(r) ? qt(r) : r).getBoundingClientRect(), s = l[o ? To : Co] * i || 0;
    return o ? l.right - s > 0 && l.left + s < se.innerWidth : l.bottom - s > 0 && l.top + s < se.innerHeight;
  }, t.positionInViewport = function(r, i, o) {
    _n(r) && (r = qt(r));
    var l = r.getBoundingClientRect(), s = l[o ? To : Co], a = i == null ? s / 2 : i in Qc ? Qc[i] * s : ~i.indexOf("%") ? parseFloat(i) * s / 100 : parseFloat(i) || 0;
    return o ? (l.left + a) / se.innerWidth : (l.top + a) / se.innerHeight;
  }, t.killAll = function(r) {
    if (te.slice(0).forEach(function(o) {
      return o.vars.id !== "ScrollSmoother" && o.kill();
    }), r !== !0) {
      var i = zo.killAll || [];
      zo = {}, i.forEach(function(o) {
        return o();
      });
    }
  }, t;
}();
oe.version = "3.12.2";
oe.saveStyles = function(t) {
  return t ? Gc(t).forEach(function(e) {
    if (e && e.style) {
      var n = vn.indexOf(e);
      n >= 0 && vn.splice(n, 5), vn.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), W.core.getCache(e), xh());
    }
  }) : vn;
};
oe.revert = function(t, e) {
  return _m(!t, e);
};
oe.create = function(t, e) {
  return new oe(t, e);
};
oe.refresh = function(t) {
  return t ? Ss() : (Ko || oe.register()) && yo(!0);
};
oe.update = function(t) {
  return ++ie.cache && Qr(t === !0 ? 2 : 0);
};
oe.clearScrollMemory = p2;
oe.maxScroll = function(t, e) {
  return Xr(t, e ? Ft : it);
};
oe.getScrollFunc = function(t, e) {
  return Hi(qt(t), e ? Ft : it);
};
oe.getById = function(t) {
  return Sh[t];
};
oe.getAll = function() {
  return te.filter(function(t) {
    return t.vars.id !== "ScrollSmoother";
  });
};
oe.isScrolling = function() {
  return !!Vn;
};
oe.snapDirectional = ym;
oe.addEventListener = function(t, e) {
  var n = zo[t] || (zo[t] = []);
  ~n.indexOf(e) || n.push(e);
};
oe.removeEventListener = function(t, e) {
  var n = zo[t], r = n && n.indexOf(e);
  r >= 0 && n.splice(r, 1);
};
oe.batch = function(t, e) {
  var n = [], r = {}, i = e.interval || 0.016, o = e.batchMax || 1e9, l = function(u, c) {
    var f = [], d = [], p = W.delayedCall(i, function() {
      c(f, d), f = [], d = [];
    }).pause();
    return function(m) {
      f.length || p.restart(!0), f.push(m.trigger), d.push(m), o <= f.length && p.progress(1);
    };
  }, s;
  for (s in e)
    r[s] = s.substr(0, 2) === "on" && Ht(e[s]) && s !== "onRefreshInit" ? l(s, e[s]) : e[s];
  return Ht(o) && (o = o(), ut(oe, "refresh", function() {
    return o = e.batchMax();
  })), Gc(t).forEach(function(a) {
    var u = {};
    for (s in r)
      u[s] = r[s];
    u.trigger = a, n.push(oe.create(u));
  }), n;
};
var ev = function(e, n, r, i) {
  return n > i ? e(i) : n < 0 && e(0), r > i ? (i - n) / (r - n) : r < 0 ? n / (n - r) : 1;
}, Fd = function t(e, n) {
  n === !0 ? e.style.removeProperty("touch-action") : e.style.touchAction = n === !0 ? "auto" : n ? "pan-" + n + (tt.isTouch ? " pinch-zoom" : "") : "none", e === sr && t(Te, n);
}, Pu = {
  auto: 1,
  scroll: 1
}, AP = function(e) {
  var n = e.event, r = e.target, i = e.axis, o = (n.changedTouches ? n.changedTouches[0] : n).target, l = o._gsap || W.core.getCache(o), s = jt(), a;
  if (!l._isScrollT || s - l._isScrollT > 2e3) {
    for (; o && o !== Te && (o.scrollHeight <= o.clientHeight && o.scrollWidth <= o.clientWidth || !(Pu[(a = zn(o)).overflowY] || Pu[a.overflowX])); )
      o = o.parentNode;
    l._isScroll = o && o !== r && !Do(o) && (Pu[(a = zn(o)).overflowY] || Pu[a.overflowX]), l._isScrollT = s;
  }
  (l._isScroll || i === "x") && (n.stopPropagation(), n._gsapAllow = !0);
}, g2 = function(e, n, r, i) {
  return tt.create({
    target: e,
    capture: !0,
    debounce: !1,
    lockAxis: !0,
    type: n,
    onWheel: i = i && AP,
    onPress: i,
    onDrag: i,
    onScroll: i,
    onEnable: function() {
      return r && ut($e, tt.eventTypes[0], nv, !1, !0);
    },
    onDisable: function() {
      return at($e, tt.eventTypes[0], nv, !0);
    }
  });
}, DP = /(input|label|select|textarea)/i, tv, nv = function(e) {
  var n = DP.test(e.target.tagName);
  (n || tv) && (e._gsapAllow = !0, tv = n);
}, zP = function(e) {
  co(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
  var n = e, r = n.normalizeScrollX, i = n.momentum, o = n.allowNestedScroll, l = n.onRelease, s, a, u = qt(e.target) || sr, c = W.core.globals().ScrollSmoother, f = c && c.get(), d = ci && (e.content && qt(e.content) || f && e.content !== !1 && !f.smooth() && f.content()), p = Hi(u, it), m = Hi(u, Ft), h = 1, _ = (tt.isTouch && se.visualViewport ? se.visualViewport.scale * se.visualViewport.width : se.outerWidth) / se.innerWidth, v = 0, g = Ht(i) ? function() {
    return i(s);
  } : function() {
    return i || 2.8;
  }, y, w, S = g2(u, e.type, !0, o), E = function() {
    return w = !1;
  }, k = kr, b = kr, O = function() {
    a = Xr(u, it), b = ml(ci ? 1 : 0, a), r && (k = ml(0, Xr(u, Ft))), y = bo;
  }, P = function() {
    d._gsap.y = ks(parseFloat(d._gsap.y) + p.offset) + "px", d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(d._gsap.y) + ", 0, 1)", p.offset = p.cacheID = 0;
  }, L = function() {
    if (w) {
      requestAnimationFrame(E);
      var R = ks(s.deltaY / 2), D = b(p.v - R);
      if (d && D !== p.v + p.offset) {
        p.offset = D - p.v;
        var x = ks((parseFloat(d && d._gsap.y) || 0) - p.offset);
        d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + x + ", 0, 1)", d._gsap.y = x + "px", p.cacheID = ie.cache, Qr();
      }
      return !0;
    }
    p.offset && P(), w = !0;
  }, A, X, N, z, V = function() {
    O(), A.isActive() && A.vars.scrollY > a && (p() > a ? A.progress(1) && p(a) : A.resetTo("scrollY", a));
  };
  return d && W.set(d, {
    y: "+=0"
  }), e.ignoreCheck = function(j) {
    return ci && j.type === "touchmove" && L() || h > 1.05 && j.type !== "touchstart" || s.isGesturing || j.touches && j.touches.length > 1;
  }, e.onPress = function() {
    w = !1;
    var j = h;
    h = ks((se.visualViewport && se.visualViewport.scale || 1) / _), A.pause(), j !== h && Fd(u, h > 1.01 ? !0 : r ? !1 : "x"), X = m(), N = p(), O(), y = bo;
  }, e.onRelease = e.onGestureStart = function(j, R) {
    if (p.offset && P(), !R)
      z.restart(!0);
    else {
      ie.cache++;
      var D = g(), x, Y;
      r && (x = m(), Y = x + D * 0.05 * -j.velocityX / 0.227, D *= ev(m, x, Y, Xr(u, Ft)), A.vars.scrollX = k(Y)), x = p(), Y = x + D * 0.05 * -j.velocityY / 0.227, D *= ev(p, x, Y, Xr(u, it)), A.vars.scrollY = b(Y), A.invalidate().duration(D).play(0.01), (ci && A.vars.scrollY >= a || x >= a - 1) && W.to({}, {
        onUpdate: V,
        duration: D
      });
    }
    l && l(j);
  }, e.onWheel = function() {
    A._ts && A.pause(), jt() - v > 1e3 && (y = 0, v = jt());
  }, e.onChange = function(j, R, D, x, Y) {
    if (bo !== y && O(), R && r && m(k(x[2] === R ? X + (j.startX - j.x) : m() + R - x[1])), D) {
      p.offset && P();
      var J = Y[2] === D, lt = J ? N + j.startY - j.y : p() + D - Y[1], fe = b(lt);
      J && lt !== fe && (N += fe - lt), p(fe);
    }
    (D || R) && Qr();
  }, e.onEnable = function() {
    Fd(u, r ? !1 : "x"), oe.addEventListener("refresh", V), ut(se, "resize", V), p.smooth && (p.target.style.scrollBehavior = "auto", p.smooth = m.smooth = !1), S.enable();
  }, e.onDisable = function() {
    Fd(u, !0), at(se, "resize", V), oe.removeEventListener("refresh", V), S.kill();
  }, e.lockAxis = e.lockAxis !== !1, s = new tt(e), s.iOS = ci, ci && !p() && p(1), ci && W.ticker.add(kr), z = s._dc, A = W.to(s, {
    ease: "power4",
    paused: !0,
    scrollX: r ? "+=0.1" : "+=0",
    scrollY: "+=0.1",
    modifiers: {
      scrollY: m2(p, p(), function() {
        return A.pause();
      })
    },
    onUpdate: Qr,
    onComplete: z.vars.onComplete
  }), s;
};
oe.sort = function(t) {
  return te.sort(t || function(e, n) {
    return (e.vars.refreshPriority || 0) * -1e6 + e.start - (n.start + (n.vars.refreshPriority || 0) * -1e6);
  });
};
oe.observe = function(t) {
  return new tt(t);
};
oe.normalizeScroll = function(t) {
  if (typeof t > "u")
    return gn;
  if (t === !0 && gn)
    return gn.enable();
  if (t === !1)
    return gn && gn.kill();
  var e = t instanceof tt ? t : zP(t);
  return gn && gn.target === e.target && gn.kill(), Do(e.target) && (gn = e), e;
};
oe.core = {
  // smaller file size way to leverage in ScrollSmoother and Observer
  _getVelocityProp: _h,
  _inputObserver: g2,
  _scrollers: ie,
  _proxies: Mr,
  bridge: {
    // when normalizeScroll sets the scroll position (ss = setScroll)
    ss: function() {
      Vn || Lo("scrollStart"), Vn = jt();
    },
    // a way to get the _refreshing value in Observer
    ref: function() {
      return bt;
    }
  }
};
o2() && W.registerPlugin(oe);
Fi.registerPlugin(oe);
const LP = (t) => {
  const e = T.useRef(null), n = T.useState(!1), [r, i] = T.useState([window.innerWidth, window.innerHeight]);
  T.useEffect(() => {
    window.setTimeout(() => {
      i([e.current.clientWidth, window.innerHeight]);
    }, 300), screen.availWidth < 500 || window.innerWidth < 500 ? n[1](!0) : n[1](!1);
  }, []), T.useEffect(() => {
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
  ], s = T.useRef(null);
  return /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
    /* @__PURE__ */ C.jsxs("div", { ref: e, style: {
      ...o,
      overflow: "hidden",
      whiteSpace: "nowrap"
    }, children: [
      /* @__PURE__ */ C.jsx(jP, { ref: s, imgurl: l, width: r[0], height: r[0], setmergin: 0.05 }),
      /* @__PURE__ */ C.jsx(rv, { lr: "l", clicktriger: () => {
        s.current("l", "l");
      } }),
      /* @__PURE__ */ C.jsx(rv, { lr: "r", clicktriger: () => {
        s.current("r", "r");
      } })
    ] }),
    /* @__PURE__ */ C.jsx("div", { style: { width: "100%", height: "2em", backgroundColor: "" } })
  ] });
}, jP = T.forwardRef((t, e) => {
  const n = T.useState(!1), r = T.useState(!1);
  var i = 0, o = 1, l = t.imgurl.length - 1;
  console.log(t.imgurl), T.useImperativeHandle(
    e,
    () => (m, h) => (m == "s" && n[1](!0), console.log("最大値", l), console.log(o), m == "l" ? o <= 0 ? (i = t.width * (-l + 1), s[1]({ x: i }), o = l) : (s[1]({ x: i += t.width }), o--) : m == "r" && (o >= l ? (i = 0, s[1]({ x: i }), o = 1) : (s[1]({ x: i -= t.width }), o++)), 1)
  );
  const s = q(
    () => ({ x: 0 })
  ), a = {
    ...s[0],
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
  T.useEffect(() => {
    screen.availWidth < 500 || window.innerWidth < 500 ? r[1](!0) : r[1](!1);
  }, []);
  const u = T.useState(!1), c = q({
    transform: u[0] ? "scale(0.99,0.99)" : "scale(1,1)",
    filter: u[0] ? "grayscale(20%)" : "grayscale(0%)"
  }), f = T.useCallback(
    () => {
      u[1](!0);
    }
  ), p = t.imgurl.map((m) => /* @__PURE__ */ C.jsx(
    Z.div,
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
      style: { ...c, ...a, backgroundImage: `url("${m.picurl}")` }
    }
  ));
  return /* @__PURE__ */ C.jsx(C.Fragment, { children: p });
}), rv = (t) => {
  const e = T.useState(0);
  t.lr, T.useEffect(() => {
  });
  const n = t.lr == "l" ? { left: 0, rotate: 90 } : { right: 0, rotate: -90 }, r = q({
    //backgroundColor:btnst[0]==0?"rgba(0,100,100,1)":"rgba(200,100,100,1)"
  }), i = q(() => t.lr == "l" ? {
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
  }, l = T.useCallback(
    () => {
      e[0] == 0 ? e[1](1) : e[0] == 1 && e[1](0);
    }
  );
  return /* @__PURE__ */ C.jsx(Z.div, { className: "yajirushi", onClick: () => {
    l(), t.clicktriger();
  }, style: {
    ...n,
    ...i[0],
    ...r,
    ...o
  } });
}, FP = () => {
  const [t, e] = T.useState(!1), n = (r) => {
    e(!0);
  };
  return T.useEffect(() => {
    if (document.readyState === "complete") {
      n();
      return;
    }
    return window.addEventListener("load", n), () => {
      window.removeEventListener("load", n);
    };
  }, []), t;
}, HP = (t) => {
  const e = FP(), n = {
    position: "fixed",
    width: "100%",
    top: 0,
    left: 0,
    height: "100%",
    pointerEvents: "none"
  }, r = t.phonestate, i = T.useRef(null);
  T.useEffect(() => {
    console.log("読み込み開始：FrameArt", e), console.log(e), i.current.addEventListener("selectstart", (_) => {
      _.preventDefault();
    });
    const h = Fi.timeline({
      delay: 0,
      scrollTrigger: { scrub: 1 }
    });
    h.to(i.current.getElementsByClassName("gearS")[0], { rotate: "+=730", duration: 1 }), h.to(i.current.getElementsByClassName("gearL")[0], { rotate: "-=360", duration: 1 }, "-=1"), a[1]({ x: 100 }), console.log("読み込みEnd：FrameArt", e);
  }, []);
  const [o, l] = T.useState(2), s = q({
    eyes: o,
    delay: 100,
    config: { duration: 800 }
  }), a = q(
    () => ({ x: 0 })
  ), u = T.useState(!1), c = q({
    opacity: u[0] ? 0 : 1
  }), f = q({
    opacity: u[0] ? 1 : 0,
    delay: 1e3
  });
  T.useEffect(() => {
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
  i1();
  const p = i1(), m = T.useState(0);
  return q(
    { ref: p, to: { scale: m[0] ? 0.5 : 1 }, from: { scale: m[0] ? 1 : 0.5 }, config: { duration: 2e3 } }
  ), vT([], {
    ref: null,
    from: { scale: 1 },
    enter: { scale: 1 },
    leave: { scale: 1 }
  }), /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
    /* @__PURE__ */ C.jsxs("div", { ref: i, className: "FrameArt", style: { position: "fixed", zIndex: 1500 }, children: [
      /* @__PURE__ */ C.jsx(Z.div, { style: {
        ...c,
        width: "400px",
        height: "20px",
        backgroundColor: "rgba(200,200,0,1)",
        position: "fixed",
        zIndex: 1e4,
        top: `${window.innerHeight / 2 - 10}px`,
        left: `${window.innerWidth / 2 - 200}px`
      } }),
      /* @__PURE__ */ C.jsx(Z.div, { style: {
        ...c,
        width: a[0].x.to({ range: [0, 100], output: ["0px", "400px"] }),
        height: "20px",
        backgroundColor: "rgba(200,0,0,1)",
        position: "fixed",
        zIndex: 10001,
        top: `${window.innerHeight / 2 - 10}px`,
        left: `${window.innerWidth / 2 - 200}px`
      } }),
      /* @__PURE__ */ C.jsx(WP, { phonestate: r, opa_r: f }),
      /* @__PURE__ */ C.jsx("div", { className: "gearL", style: { ...d, width: r[0] ? "100px" : "300px", height: r[0] ? "100px" : "300px", right: r[0] ? "-35px" : "-100px", bottom: r[0] ? "-20px" : "-80px" } }),
      /* @__PURE__ */ C.jsx("div", { className: "gearS", style: { ...d, width: `${(r[0] ? 1 / 3 : 1) * 500}px`, height: `${(r[0] ? 1 / 3 : 1) * 500}px`, right: `${-200 * (r[0] ? 0.25 : 1)}px`, bottom: `${-25 * (r[0] ? 0.1 : 1)}px` } }),
      /* @__PURE__ */ C.jsx(BP, { loadingstate: u, phonestate: r })
    ] }),
    /* @__PURE__ */ C.jsxs("svg", { style: { ...n, zIndex: 1012 }, children: [
      /* @__PURE__ */ C.jsx("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: "rgba(200,255,255,1)", style: { mask: "url(#mask)" } }),
      /* @__PURE__ */ C.jsxs("mask", { id: "mask", x: "0px", y: "0px", width: `${window.innerWidth}px`, height: `${window.innerHeight}px`, children: [
        /* @__PURE__ */ C.jsx("rect", { x: "0", y: "0", width: `${window.innerWidth}px`, height: `${window.innerHeight}px`, fill: "#ffffff" }),
        /* @__PURE__ */ C.jsx(Z.ellipse, { cx: "50vw", cy: "50vh", rx: "70vw", ry: s.eyes, fill: "black", style: { opacity: 1 } }),
        /* @__PURE__ */ C.jsx("text", { x: "50%", y: "10%", textAnchor: "middle", dominantBaseline: "central", fill: "black" })
      ] })
    ] })
  ] });
}, BP = (t) => {
  const n = t.phonestate[0] ? 50 : 200, r = t.loadingstate, i = q({
    opacity: r[0] ? 0.5 : 0,
    delay: 1e3
  }), o = q(() => ({ from: { x: -n / 4, rotate: 0 }, to: { x: n / 3, rotate: 20 }, config: { duration: 4e3 }, loop: { reverse: !0 } })), l = q(() => ({ from: { y: 0 }, config: { duration: 2e3 } }));
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
  return /* @__PURE__ */ C.jsx(Z.div, { className: "ball", onClick: () => {
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
}, WP = (t) => {
  const e = t.phonestate, n = e[0] ? 50 : 150, r = T.useState(!1), i = q({
    rotate: r[0] ? 1800 : 0
    // ,opacity:spinswitch[0]?0.5:1
  }), o = T.useCallback(() => {
    r[1](!r[0]), window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }), l = q(() => ({ from: { x: 0 }, to: { x: 10 }, loop: { reverse: !0 } }));
  return q({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      duration: 2e3
    }
  }), /* @__PURE__ */ C.jsx(Z.div, { className: "CtlBtn", onClick: () => o(), style: {
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
  }, children: /* @__PURE__ */ C.jsxs("svg", { style: { left: 0, top: 0, width: `${n}px`, height: `${n}px`, position: "absolute" }, children: [
    /* @__PURE__ */ C.jsx("rect", { x: `${n * 0.45}px`, y: `${n * 0.45}px`, width: `${n * 0.1}px`, height: `${n * 0.1}px`, fill: "white" }),
    /* @__PURE__ */ C.jsx(Z.path, { strokeWidth: 10, d: `M${n / 2},${n / 15} L${n * 0.1},${n / 3} Z`, style: { x: "0", y: l[0].x.to({ range: [0, 10], output: [0, 10] }), fill: "rgba(200,200,100,.6)", stroke: "rgba(200,255,200,1)" } }),
    /* @__PURE__ */ C.jsx(Z.path, { strokeWidth: 10, d: `M${n / 2 - 1},${n / 15} L${n - n * 0.1},${n / 3} Z`, style: { x: "0", y: l[0].x, fill: "rgba(200,200,100,.6)", stroke: "rgba(100,255,100,1)" } }),
    /* @__PURE__ */ C.jsx(Z.path, { strokeWidth: 5, d: `M${n / 2},${n / 15 * 3} L${n * 0.1},${n / 3} Z`, style: { x: "0", y: l[0].x.to({ range: [0, 10], output: [0, 20] }), fill: "rgba(200,200,100,.6)", stroke: "rgba(200,255,200,1)" } }),
    /* @__PURE__ */ C.jsx(Z.path, { strokeWidth: 5, d: `M${n / 2 - 1},${n / 15 * 3} L${n - n * 0.1},${n / 3} Z`, style: { x: "0", y: l[0].x.to({ range: [0, 10], output: [0, 20] }), fill: "rgba(200,200,100,.6)", stroke: "rgba(100,255,100,1)" } })
  ] }) });
}, VP = (t) => {
  const [e, n] = T.useState(!0);
  return T.useEffect(() => {
    setTimeout(() => n(!1), t);
  }, []), e;
}, UP = (t) => {
  const e = ["私達の声明", "顧客様のニーズに沿ったウェブサービスを設計することを誓います。"], n = ["我々の使命", "より多くの存在をウェブデザインし、ウェブ上からその存在を発信できるようにします。"], r = ["企画・クリエイト", "社会に新しいシステムを創造することに常に向き合い続けます。"], i = ["サービス", "顧客とやりとりしやすい距離からの制作をさせて頂きます。"], l = T.useRef(null), s = [window.innerWidth, window.innerHeight];
  VP(200);
  const a = q(
    () => ({
      from: { y: 0 },
      to: { y: 20 },
      loop: { reverse: !0 },
      config: {
        duration: 2e3
      }
    })
  ), u = t.phonestate, c = (m, h) => {
    var _ = l.current.getElementsByClassName(m + h)[0];
    const v = Fi.timeline({
      scrollTrigger: {
        trigger: _,
        start: "center center",
        end: "+=4000",
        //end: "top bottom", 
        scrub: !0,
        pin: !0
      }
    });
    v.to("." + m + h, { opacity: 1 }), v.to(_.getElementsByClassName("halo")[0], { strokeDashoffset: 2 * f * 3.3 * 3 / 4 }).to(_.getElementsByClassName("halokl")[0], { filter: "blur(0px)" }, "<"), h == "phone" && v.to("." + m + h, { x: -s[0] / 2, onComplete: () => {
    } }, "<"), v.to(_.getElementsByClassName("halo")[0], { strokeDashoffset: 2 * f * 3.3 * 2 / 4 }).to(_.getElementsByClassName("halojl")[0], { filter: "blur(0px)" }, "<"), h == "phone" && v.to("." + m + h, { x: 0 }), v.to(_.getElementsByClassName("halo")[0], { strokeDashoffset: 2 * f * 3.3 * 1 / 4 + 0 }).to(_.getElementsByClassName("halohj")[0], { filter: "blur(0px)" }, "<"), h == "phone" && v.to("." + m + h, { x: s[0] / 2 }, "<"), v.to(_.getElementsByClassName("halo")[0], { strokeDashoffset: 2 * f * 3.3 * 0 / 4 - 0 }).to(_.getElementsByClassName("halohk")[0], { filter: "blur(0px)", stroke: "red" }, "<"), h == "phone" && v.to("." + m + h, { x: 0 }), v.to(_.getElementsByClassName("halo")[0], { opacity: 1 });
  };
  T.useEffect(() => {
    window.setTimeout(() => {
      c("halo", "phone"), c("halo", "pc");
    }, 300);
  }, []), T.useEffect(() => {
  }, [u[0]]);
  const f = 100;
  q({
    from: { x: 2 * f * 3.14 },
    to: { x: 0 },
    loop: !0,
    config: { duration: 3e3 }
  });
  const d = {
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
  }, p = {
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
  return /* @__PURE__ */ C.jsxs("div", { ref: l, className: t.className, style: { position: "relative", zIndex: 11 }, children: [
    /* @__PURE__ */ C.jsx("div", { className: "switch", style: { display: u[0] ? "block" : "none", position: "relative" }, children: /* @__PURE__ */ C.jsxs("div", { className: "halophone", style: { width: "100vw", height: "100vh", backgroundColor: "rgba(100,100,100,.9)", position: "relative" }, children: [
      /* @__PURE__ */ C.jsx("div", { className: "halohk", style: { top: "0em", ...p }, children: /* @__PURE__ */ C.jsx(si, { phonestate: u, part: "2nd", delay: 0, title: n[0], children: n[1] }) }),
      /* @__PURE__ */ C.jsx("div", { className: "halojl", style: { bottom: "10px", ...d }, children: /* @__PURE__ */ C.jsx(si, { phonestate: u, part: "4th", delay: 1e3, title: i[0], children: i[1] }) }),
      /* @__PURE__ */ C.jsx("div", { className: "halokl", style: { top: "0em", ...d }, children: /* @__PURE__ */ C.jsx(si, { phonestate: u, part: "1st", delay: 0, title: e[0], children: e[1] }) }),
      /* @__PURE__ */ C.jsx("div", { className: "halohj", style: { bottom: "10px", ...p }, children: /* @__PURE__ */ C.jsx(si, { phonestate: u, part: "3rd", delay: 1e3, title: r[0], children: r[1] }) }),
      /* @__PURE__ */ C.jsxs("svg", { width: "100vw", height: "100vh", style: { backgroundColor: "rgba(1,1,1,0)", position: "relative" }, children: [
        /* @__PURE__ */ C.jsx(Z.circle, { className: "halo", cx: s[0] / 2, cy: s[1] / 2, r: a[0].y.to({ range: [0, 20], output: [f - 3, f] }), strokeWidth: "12", stroke: "yellow", fill: "rgba(1,1,1,0)", transform: `rotate(-90 ${s[0] / 2} ${s[1] / 2})`, style: { backgroundColor: "red", filter: "blur(4px)", zIndex: 1e5 }, strokeDasharray: `${2 * f * 3.3}`, strokeDashoffset: 2 * f * 3.3, opacity: 0.5 }),
        /* @__PURE__ */ C.jsx(Z.circle, { cx: s[0] / 2, cy: s[1] / 2, r: f - 4, strokeWidth: "0.8", stroke: "rgba(1,1,1,0.5)", fill: "red" })
      ] }),
      t.children
    ] }) }),
    /* @__PURE__ */ C.jsx("div", { className: "switch", style: { display: u[0] ? "none" : "block", position: "relative" }, children: /* @__PURE__ */ C.jsxs("div", { className: "halopc", style: { bottom: 0, display: u[0] ? "none" : "block", width: "100vw", height: "100vh", backgroundColor: "rgba(100,100,100,.9)", position: "relative" }, children: [
      /* @__PURE__ */ C.jsx("div", { className: "halohk", style: { top: "50px", ...d }, children: /* @__PURE__ */ C.jsx(si, { phonestate: u, part: "2nd", delay: 1e3, title: n[0], children: n[1] }) }),
      /* @__PURE__ */ C.jsx("div", { className: "halojl", style: { bottom: "-30px", ...p }, children: /* @__PURE__ */ C.jsx(si, { phonestate: u, part: "4th", delay: 1e3, title: i[0], children: i[1] }) }),
      /* @__PURE__ */ C.jsx("div", { className: "halokl", style: { top: "50px", ...p }, children: /* @__PURE__ */ C.jsx(si, { phonestate: u, part: "1st", delay: 1e3, title: e[0], children: e[1] }) }),
      /* @__PURE__ */ C.jsx("div", { className: "halohj", style: { bottom: "-30px", ...d }, children: /* @__PURE__ */ C.jsx(si, { phonestate: u, part: "3rd", delay: 1e3, title: r[0], children: r[1] }) }),
      /* @__PURE__ */ C.jsxs("svg", { width: "100vw", height: "100vh", style: { top: "50px", backgroundColor: "rgba(1,1,1,0)", position: "relative" }, children: [
        /* @__PURE__ */ C.jsx(Z.circle, { className: "halo", cx: s[0] / 2, cy: s[1] / 2, r: a[0].y.to({ range: [0, 20], output: [f + 12, f + 15] }), strokeWidth: "20", stroke: "yellow", fill: "rgba(1,1,1,0)", transform: `rotate(-90 ${s[0] / 2} ${s[1] / 2})`, style: { backgroundColor: "red", filter: "blur(4px)", zIndex: 1e5 }, strokeDasharray: `${2 * (f + 12) * 3.3}`, strokeDashoffset: 2 * f * 3.3, opacity: 0.5 }),
        /* @__PURE__ */ C.jsx(Z.circle, { onClick: () => {
        }, cx: s[0] / 2, cy: s[1] / 2, r: f + 9, strokeWidth: "0.5", stroke: "rgba(1,1,1,0.5)", fill: "green" })
      ] }),
      t.children
    ] }) })
  ] });
}, si = (t) => {
  const e = t.phonestate;
  T.useEffect(() => {
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
  }, s = {
    right: "10px"
  }, a = {
    left: "10px"
  }, u = {
    left: "10px"
  }, c = {
    right: "10px"
  }, f = Object.assign(t.part == "1st" ? r : t.part == "2nd" ? i : t.part == "3rd" ? o : t.part == "4th" ? l : {}), d = Object.assign(t.part == "1st" ? s : t.part == "2nd" ? a : t.part == "3rd" ? u : t.part == "4th" ? c : {}), p = Object.assign(t.part == "1st" ? { top: "2em", textAlign: "right" } : t.part == "2nd" ? { top: "2em", textAlign: "left" } : t.part == "3rd" ? { bottom: e[0] ? "1em" : "2em", textAlign: "left" } : t.part == "4th" ? { bottom: e[0] ? "1em" : "2em", textAlign: "right" } : {}), m = Mf({
    rootMarginLeft: "1000px",
    threshold: 0.2,
    triggerOnce: !1
  });
  T.useEffect(() => {
  }, [m]);
  const h = q({
    opacity: m.inView ? 1 : 0,
    y: m.inView ? 0 : 200,
    delay: 100,
    config: { duration: 1e3 }
  }), _ = q({
    boxShadow: m.inView ? "10px 5px 5px black" : "10px 5px 5px rgba(1,1,1,0)",
    delay: 1100,
    config: { duration: 1e3 }
  }), g = {
    ...q({
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
  }, y = {
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
  return /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
    /* @__PURE__ */ C.jsxs(Z.div, { style: { fontFamily: "'DotGothic16'", ...g, ...p, left: "0px", zIndex: 5 }, children: [
      " ",
      t.title,
      " "
    ] }),
    /* @__PURE__ */ C.jsx("div", { ref: m.ref, className: "viewpart", style: { position: "absolute", zIndex: 1, height: "100%", width: "40px", ...d, backgroundColor: "rgba(221,221,221,0.8)" } }),
    /* @__PURE__ */ C.jsxs(Z.div, { style: { overflow: "hidden", fontFamily: "'DotGothic16'", ...h, ..._, ...n, ...f, zIndex: 4 }, children: [
      /* @__PURE__ */ C.jsx(
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
      /* @__PURE__ */ C.jsx(
        "div",
        {
          className: "wrap2",
          style: {
            ...y,
            transform: e[0] ? "translateY(53%) translateX(4%)" : "translateY(58%) translateX(4%)",
            color: "rgba(0,0,0,0.2)"
          },
          children: t.children
        }
      ),
      /* @__PURE__ */ C.jsx(
        "div",
        {
          className: "wrap",
          style: {
            ...y,
            transform: e[0] ? "translateY(50%) translateX(1%)" : "translateY(56%) translateX(2%)",
            color: "white"
          },
          children: t.children
        }
      )
    ] })
  ] });
}, YP = (t) => {
  const r = T.useRef(null), i = T.useRef(null), o = t.phonestate, l = () => {
    Fi.timeline({
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
    const f = Fi.timeline({
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
  T.useEffect(() => {
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
  return /* @__PURE__ */ C.jsx(C.Fragment, { children: /* @__PURE__ */ C.jsxs("div", { ref: r, className: t.className, style: {
    backgroundImage: 'url("https://static.rtrp.jp/article/92597/images/92597a5de3dba-2a02-4ff9-90ca-b352d48cec80_m.jpg")',
    backgroundPosition: "top 0px right 0px",
    backgroundSize: "100vw 300vh",
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(100,100,100,.9)",
    position: "relative",
    zIndex: 10
  }, children: [
    /* @__PURE__ */ C.jsxs("div", { className: "comaX", style: {
      boxShadow: "10px 5px 5px black",
      paddingTop: "100px",
      minWidth: "300px",
      width: `${o[0] ? s[0] - 20 : s[0] * 0.4}px`,
      height: `${200 + 100}vh`,
      left: `${o[0] ? 5 : s[0] * 0.3}px`,
      backgroundColor: "rgba(60,60,200,0.9)",
      position: "absolute",
      zIndex: 2
    }, children: [
      t.children[0],
      /* @__PURE__ */ C.jsx("div", { style: { width: "100%", height: "20vh" } }),
      t.children[1]
    ] }),
    /* @__PURE__ */ C.jsx(XP, { ref: i, phonestate: o }),
    /* @__PURE__ */ C.jsx("div", { className: "coma1", style: { ...a, left: `${s[0] * 0.1}px`, bottom: "-300px" } }),
    /* @__PURE__ */ C.jsx("div", { className: "coma1", style: { ...a, left: `${s[0] * 0.7}px`, bottom: "100px" } }),
    /* @__PURE__ */ C.jsx("div", { className: "coma2", style: { ...a, left: `${s[0] * 0.6}px`, bottom: "-130px" } }),
    /* @__PURE__ */ C.jsx("div", { className: "coma2", style: { ...a, left: "71%", bottom: "400px" } }),
    /* @__PURE__ */ C.jsx("div", { className: "coma3", style: { ...a, left: `${s[0] * 0.8}px`, bottom: "30px" }, children: " " }),
    /* @__PURE__ */ C.jsx("div", { className: "coma3", style: { ...a, left: "-10%", bottom: "400px" } })
  ] }) });
}, XP = T.forwardRef((t, e) => {
  T.useImperativeHandle(
    e,
    () => (s, a) => (r[1](s), r[0])
  );
  const n = t.phonestate, r = T.useState(!1), i = q({
    bottom: r[0] ? "0" : "-60vh"
  });
  T.useEffect(() => {
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
  return /* @__PURE__ */ C.jsxs(Z.div, { className: "footer", style: {
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
    /* @__PURE__ */ C.jsx("div", { onClick: () => {
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
    /* @__PURE__ */ C.jsx("div", { style: {
      position: "absolute",
      zIndex: 2,
      fontFamily: "'Kiwi Maru','serif','DotGothic16'",
      fontWeight: 900,
      left: `${window.innerWidth * 0.05}px`,
      top: `${window.innerWidth * (n[0] ? 0.1 : 0.04)}px`,
      fontSize: "1.5em",
      transform: "scale(0.9,1.1)"
    }, children: "Rommet" }),
    /* @__PURE__ */ C.jsxs("div", { style: {
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
      /* @__PURE__ */ C.jsx("div", { style: { ...o }, children: "ウェブサイトご利用条件" }),
      /* @__PURE__ */ C.jsx("div", { style: { ...o }, children: "ソーシャルメディアポリシー" }),
      /* @__PURE__ */ C.jsx("div", { style: { ...o }, children: "個人情報保護方針" }),
      /* @__PURE__ */ C.jsx("div", { style: { ...o }, children: "お問い合わせ" }),
      /* @__PURE__ */ C.jsx("div", { style: {
        width: "100%",
        height: "200px",
        position: "absolute",
        top: `${window.innerWidth * (n[0] ? 0.5 : 0.14)}px`
      }, children: /* @__PURE__ */ C.jsxs("div", { style: {
        backgroundColor: "rgba(200,220,220,0.9)",
        display: "inline-block",
        position: "relative",
        height: "82px"
      }, children: [
        /* @__PURE__ */ C.jsx(iv, { children: /* @__PURE__ */ C.jsx("div", { className: "imagecmp", style: {
          ...l,
          backgroundImage: 'url("https://github.githubassets.com/assets/apple-touch-icon-180x180-a80b8e11abe2.png")'
        } }) }),
        /* @__PURE__ */ C.jsx(iv, { children: /* @__PURE__ */ C.jsx("div", { className: "imagecmp", style: {
          ...l,
          backgroundColor: "white",
          backgroundImage: 'url("https://cdn.qiita.com/assets/public/push_notification/image-qiitan-572179a3bbde375850422ea48b2b6272.png")'
        } }) })
      ] }) })
    ] })
  ] });
}), iv = (t) => {
  const e = T.useState(!1), n = q({
    transform: e[0] ? "scale(1.2,1.2)" : "scale(1,1)"
  });
  return /* @__PURE__ */ C.jsx(
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
}, v2 = (t) => {
  const e = t.hasOwnProperty("fadestate") ? t.fadestate : T.useState(!1);
  var n = Array.from(t.children).map((r, i, o) => {
    var l = 800, s = t.hasOwnProperty("basedelay") ? t.basedelay : 100;
    T.useEffect(() => {
      t.hasOwnProperty("fadestate") || e[1](!0);
    }, []);
    const a = q(() => ({
      from: { y: 0 },
      config: {
        duration: l / o.length
      }
      //,loop:true
    }));
    return T.useEffect(() => {
      e[0] ? a[1]({ y: 100, delay: i * l / o.length + s }) : a[1]({ y: 0 });
    }, [e[0]]), /* @__PURE__ */ C.jsx(
      Z.div,
      {
        style: { opacity: a[0].y.to({ range: [0, 40, 70, 100], output: [0, 0.4, 0.7, 1] }), display: "inline-block" },
        children: r
      }
    );
  });
  return /* @__PURE__ */ C.jsx(
    "div",
    {
      style: { display: "inline" },
      children: n
    }
  );
}, y2 = T.createContext({ lite: "bbb" }), GP = () => {
  const [t, e] = T.useState(!1), n = () => e(!0);
  return T.useEffect(() => {
    if (document.readyState === "complete") {
      n();
      return;
    }
    return window.addEventListener("load", n), () => {
      window.removeEventListener("load", n);
    };
  }, []), t;
}, QP = T.forwardRef((t, e) => {
  GP();
  const n = T.useState(0), r = T.useState(0), i = T.useState([0, 0]), o = T.useState(!0), l = T.useRef(null);
  T.useContext(y2);
  var s = null;
  T.useImperativeHandle(
    e,
    () => (v, g) => (clearTimeout(s), s = window.setTimeout(() => {
      (screen.availWidth < 500 || window.innerWidth < 500) && d[1](!1);
    }, 3e3), (screen.availWidth < 500 || window.innerWidth < 500) && d[1](!0), p[1](!p[0]), p[0])
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
  T.useEffect(() => {
    screen.availWidth < 500 || window.innerWidth < 500 ? (o[1](!0), n[1](0), r[1](window.innerHeight / 2 - window.innerHeight * 0.45), i[1]([0, window.innerHeight / 2 - window.innerHeight * 0.6 / 2])) : (o[1](!1), n[1](20), r[1](130), i[1]([100, window.innerHeight / 2 - window.innerHeight * 0.45])), window.setTimeout(() => {
      (screen.availWidth < 500 || window.innerWidth < 500) && d[1](!1);
    }, 3e3), l.current.addEventListener("selectstart", (v) => {
      v.preventDefault();
    });
  }, []);
  const d = T.useState(!0);
  T.useEffect(() => {
    (screen.availWidth < 500 || window.innerWidth < 500) && p[1](!0);
  }, [d]), q(() => ({
    to: { rotate: 360 },
    from: { rotate: 0 },
    config: { duration: 2e3 },
    loop: !0
  }));
  const p = T.useState(!0), m = q({
    boxShadow: p[0] ? "0px 0px 25px 22px rgba(220, 220, 220, .8)" : "10px 5px 5px 10px rgba(220, 220, 220, 0)",
    filter: p[0] ? "brightness(100%)" : "brightness(60%)"
  });
  T.useEffect(() => {
  }, [p[0]]);
  const h = q({
    opacity: d[0] ? 1 : 0,
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
  return /* @__PURE__ */ C.jsxs(Z.div, { ref: l, style: {
    ...m,
    pointerEvents: "none",
    ...h,
    ...a,
    userSelect: "none",
    textAlign: "center",
    ..._
  }, children: [
    /* @__PURE__ */ C.jsxs("div", { style: {
      position: "relative",
      top: `${o[0] ? window.innerHeight * 0.2 : (window.innerHeight - 150) * 0.25}px`
    }, children: [
      /* @__PURE__ */ C.jsx("div", { style: { ...u, marginBottom: "20px" }, children: "Origin Club" }),
      /* @__PURE__ */ C.jsx("div", { style: { ...c }, children: "オリジナリティあふれるサイトを作ろう！" }),
      /* @__PURE__ */ C.jsxs("div", { className: "", style: {
        left: "-10px",
        ...f,
        marginTop: "5px",
        height: "5em",
        width: o[0] ? `${window.innerWidth * 0.9}px` : `${window.innerWidth / 2 - 100}px`,
        display: "inline-block",
        overflow: "hidden"
      }, children: [
        "はじめまして！ようこそOrigin Clubへ。",
        /* @__PURE__ */ C.jsx("br", {}),
        "我々は人々のくらしをコンピューターの力でさらに豊かな方向へ導くことを",
        /* @__PURE__ */ C.jsx("br", {}),
        "目的としたプログラマー集団です。"
      ] })
    ] }),
    /* @__PURE__ */ C.jsx("style", { children: `
   @import url('https://fonts.googleapis.com/css?family=Dela Gothic One');

` })
  ] });
}), qP = (t) => {
  const [e, n] = T.useState([window.innerWidth / 2 - 100, window.innerHeight / 1.3]), r = T.useState([0, 0]), i = T.useRef(null);
  T.useState(!1);
  const o = T.useState(!1), l = Mf({
    rootMargin: "0px",
    triggerOnce: !1
  });
  console.log([l.inView, l[0]], o), console.log(l), T.useEffect(() => {
    screen.availWidth < 500 || window.innerWidth < 500 ? (n([window.innerWidth * 1, window.innerHeight * 0.7]), r[1]([0, window.innerHeight / 2 - window.innerHeight * 0.6 / 2])) : (n([window.innerWidth / 2 - 100, window.innerHeight / 1.3]), r[1]([100, window.innerHeight / 2 - window.innerHeight * 0.45]));
    var _ = 0;
    c.current(!0, !0), setInterval(() => {
      _++, _ % 4 == 1 ? c.current(!1, !1) || f.current(!1, !1) || d.current(!1, !1) || p.current(!1, !1) || (c.current(!0, !0), f.current(!1, !0), d.current(!1, !0), p.current(!1, !0)) : _ % 4 == 2 ? c.current(!1, !1) || f.current(!1, !1) || d.current(!1, !1) || p.current(!1, !1) || (c.current(!1, !0), f.current(!0, !0), d.current(!1, !0), p.current(!1, !0)) : _ % 4 == 3 ? c.current(!1, !1) || f.current(!1, !1) || d.current(!1, !1) || p.current(!1, !1) || (c.current(!1, !0), f.current(!1, !0), d.current(!0, !0), p.current(!1, !0)) : _ % 4 == 0 && (c.current(!1, !1) || f.current(!1, !1) || d.current(!1, !1) || p.current(!1, !1) || (c.current(!1, !0), f.current(!1, !0), d.current(!1, !0), p.current(!0, !0)));
    }, 2e3);
  }, []);
  const s = t.lr == "L" ? { left: `${r[0][0]}px` } : { right: `${r[0][0]}px` }, a = q({
    opacity: o[0] ? 0 : 1,
    pointerEvents: o[0] ? "none" : "auto",
    y: o[0] ? -100 : 0,
    x: o[0] ? 10 : 0,
    rotate: o[0] ? 10 : 0,
    delay: 400,
    config: {
      duration: 500
    }
  }), u = (_) => {
    _ == "footer" ? window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    }) : document.getElementsByClassName(_)[0].scrollIntoView(
      { behavior: "smooth", block: "nearest" }
    );
  }, c = T.useRef(null), f = T.useRef(null), d = T.useRef(null), p = T.useRef(null);
  T.useContext(y2);
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
  }, h = (_) => {
    _ == 0 ? (c.current(!0, !0), f.current(!1, !0), d.current(!1, !0), p.current(!1, !0)) : _ == 1 ? (c.current(!1, !0), f.current(!0, !0), d.current(!1, !0), p.current(!1, !0)) : _ == 2 ? (c.current(!1, !0), f.current(!1, !0), d.current(!0, !0), p.current(!1, !0)) : _ == 3 && (c.current(!1, !0), f.current(!1, !0), d.current(!1, !0), p.current(!0, !0)), console.log(_);
  };
  return /* @__PURE__ */ C.jsxs(Z.div, { onClick: () => {
  }, ref: i, style: {
    ...a,
    position: "absolute",
    color: "rgba(113, 36, 0,1)",
    ...m,
    filter: "blur(0px)",
    ...s,
    zIndex: 1
  }, children: [
    /* @__PURE__ */ C.jsx(Ou, { ref: c, delay: 200 * 0, btnid: 0, alloff: (_) => {
      h(_);
    }, btmright: [0, e[1] / 20], invokefunc: () => {
      u("aboutcomp");
    }, children: "メッセージ" }),
    /* @__PURE__ */ C.jsx(Ou, { ref: f, delay: 200 * 1, btnid: 1, alloff: (_) => {
      h(_);
    }, btmright: [0, e[1] / 5 + e[1] / 20], invokefunc: () => {
      t.setfunc.current();
    }, children: "私たちについて" }),
    /* @__PURE__ */ C.jsx(Ou, { ref: d, delay: 200 * 2, btnid: 2, alloff: (_) => {
      h(_);
    }, btmright: [0, e[1] * 2 / 5 + e[1] / 20], invokefunc: () => {
      u("updatelog");
    }, children: "Update Log" }),
    /* @__PURE__ */ C.jsx(Ou, { ref: p, delay: 200 * 3, btnid: 3, alloff: (_) => {
      h(_);
    }, btmright: [0, e[1] * 3 / 5 + e[1] / 20], invokefunc: () => {
      u("footer");
    }, children: "コンタクト" })
  ] });
}, Ou = T.forwardRef((t, e) => {
  const n = T.useRef(null), r = T.useState(!1), i = T.useState(!1), o = T.useState(!1);
  T.useImperativeHandle(
    e,
    () => (m, h) => (i[0] || r[1](!1), h && r[1](m), i[0])
  );
  const [l, s] = T.useState([window.innerWidth / 2 - 100, window.innerHeight / 1.3]), a = T.useState([0, 0]), u = q({
    opacity: o[0] ? 1 : 0,
    y: o[0] ? 0 : -300,
    delay: t.delay,
    config: {
      duration: 200
    }
  }), c = q({
    transform: r[0] ? "translate(0px,-7px)" : "translate(0px,0px)",
    borderTop: r[0] ? "double 14px rgba(255,255,255,1)" : "solid 7px rgba(255,255,255,1)",
    borderBottom: r[0] ? "double 14px rgba(255,255,255,1)" : "solid 7px rgba(255,255,255,1)",
    color: r[0] ? "rgba(220,220,220,1)" : "rgba(50,50,50,0.3)",
    backgroundColor: r[0] ? "rgba(80,80,80,0.7)" : "rgba(210,210,210,1)",
    config: {
      duration: 1e3
    }
  }), f = q({
    width: r[0] ? "5px" : "20px",
    height: r[0] ? "20px" : "5px",
    left: r[0] ? "-0px" : "-10px",
    top: r[0] ? `${l[1] / 2 - 10}px` : `${l[1] / 2 - 2.5}px`,
    config: {
      duration: 500
    }
  });
  q(() => ({ from: { x: 0 }, to: { x: 10 }, loop: { reverse: !0 }, config: { duration: 3e3 } }));
  const d = T.useState(!0), p = {
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
  return T.useEffect(() => {
    if (o[1](!0), screen.availWidth < 500 || window.innerWidth < 500) {
      s([window.innerWidth, window.innerHeight * 0.7 / 8]), a[1]([0, window.innerHeight / 2 - window.innerHeight * 0.6 / 2]), d[1](!0);
      var m = null;
      n.current.addEventListener("touchstart", () => {
        clearTimeout(m), m = window.setTimeout(() => {
          t.invokefunc(!0), t.alloff(t.btnid), r[1](!1), i[1](!1);
        }, 1e3), r[1](!0), i[1](!0);
      }), n.current.addEventListener("touchend", () => {
        clearTimeout(m), r[1](!1), i[1](!1);
      });
    } else
      s([window.innerWidth / 2 - 100 / 8, window.innerHeight / 1.3 / 8]), a[1]([100, window.innerHeight / 2 - window.innerHeight * 0.45]), d[1](!1), n.current.addEventListener("click", () => {
        r[1](!0), i[1](!0), t.invokefunc(!0);
      }), n.current.addEventListener("mouseenter", () => {
        r[1](!0), t.alloff(t.btnid), i[1](!0);
      }), n.current.addEventListener("mouseleave", () => {
        r[1](!1), i[1](!1);
      });
    n.current.addEventListener("selectstart", (h) => {
      h.preventDefault();
    });
  }, []), /* @__PURE__ */ C.jsxs(Z.div, { ref: n, style: {
    ...p,
    ...c,
    ...u,
    userSelect: "none",
    right: `${t.btmright[0]}px`,
    zIndex: 3e4,
    top: `${t.btmright[1]}px`
  }, children: [
    /* @__PURE__ */ C.jsx(Z.div, { style: {
      ...f,
      display: "inline-block",
      position: "absolute",
      backgroundColor: "white"
    } }),
    /* @__PURE__ */ C.jsx("div", { style: { display: "inline-block", fontFamily: "'DotGothic16'" }, children: t.children })
  ] });
}), KP = (t) => {
  const [e, n] = T.useState([1e3, 300]), r = T.useState(!0), i = T.useState(0), o = T.useState(0), l = Mf({
    rootMargin: "2px",
    triggerOnce: !1
  });
  T.useEffect(() => {
    screen.availWidth < 500 || window.innerWidth < 500 ? (r[1](!0), n([window.innerWidth * 1, window.innerHeight * 0.6]), i[1](0), o[1](window.innerHeight / 2 - window.innerHeight * 0.6 / 2)) : (r[1](!1), n([window.innerWidth / 2 - 240, window.innerHeight / 2]), i[1](150), o[1](window.innerHeight / 2 - window.innerHeight / 2 / 2));
  }, []);
  const s = t.lr == "L" ? { left: `${i[0]}px` } : t.lr == "R" ? { right: `${i[0]}px` } : {}, a = t.children.slice(0, 4).map((d, p) => /* @__PURE__ */ C.jsx(ov, { fontsize: 0.5, i: p, title: d.title, link: d.link }));
  t.children.slice(2).map((d, p) => /* @__PURE__ */ C.jsx(ov, { fontsize: 0.9, i: p, title: d.title, link: d.link }));
  const u = q(() => ({
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
  return /* @__PURE__ */ C.jsxs(Z.div, { ref: l.ref, className: "updatelog", style: {
    ...c,
    ...u[0],
    ...s
  }, children: [
    /* @__PURE__ */ C.jsx(Z.div, { style: {
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
    }, children: /* @__PURE__ */ C.jsx(v2, { fadestate: [l[1], null], basedelay: 500, children: "-Update Log-" }) }),
    /* @__PURE__ */ C.jsx("div", { style: { ...f, height: "75%", paddingTop: "0.4em", overflowY: "scroll" }, children: a }),
    /* @__PURE__ */ C.jsx(Z.div, { style: {
      backgroundColor: "rgba(200,90,90,1)",
      boxSizing: "border-box",
      padding: "8px",
      fontSize: r[0] ? "1.2em" : "0.5em",
      color: "rgba(100,100,100,1)",
      WebkitTextStrokeColor: "rgba(220,220,220,1)",
      fontFamily: "'Kosugi Maru'"
    }, children: "残りのログ" }),
    /* @__PURE__ */ C.jsx(Z.div, { style: { position: "relative", top: "0" } })
  ] });
}, ov = (t) => {
  const e = T.useRef(null), n = T.useState(!0), r = T.useState(!1), i = q(() => ({
    from: { transform: "scale(1,1)", backgroundColor: "rgba(220,220,220,1)" },
    config: {
      duration: 200
    }
  }));
  var o = null;
  const l = T.useCallback(() => {
    r[1](!0), i[1]({ transform: "scale(1.2,1.2)", backgroundColor: "white" }), o = window.setTimeout(() => {
    }, 250);
  }), s = T.useCallback(() => {
    clearTimeout(o), r[1](!1), i[1]({ delay: 1e3, transform: "scale(1,1)", backgroundColor: "rgba(220,220,220,1)" });
  });
  return T.useEffect(() => {
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
  }, []), /* @__PURE__ */ C.jsx(Z.div, { ref: e, style: {
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
  }, children: /* @__PURE__ */ C.jsxs("div", { style: {
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
    /* @__PURE__ */ C.jsx("div", { style: {
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
    /* @__PURE__ */ C.jsx(ZP, { text: t.title })
  ] }, `key${t.i}`) });
}, ZP = (t) => {
  const e = T.useState(!1), n = T.useState(!0), r = q(
    {
      color: e[0] ? "blue" : "black",
      config: {
        duration: 1e3
      }
    }
  ), i = t.text.length > 30 ? Array.from(t.text).slice(0, 60).join("") + "..." : t.text;
  return T.useEffect(() => {
    screen.availWidth < 500 || window.innerWidth < 500 ? n[1](!0) : n[1](!1);
  }, []), /* @__PURE__ */ C.jsx(Z.div, { style: {
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
}, Mu = (t) => {
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
  }, r = T.useRef(null), i = T.useState(!1), o = q({
    color: i[0] ? "black" : "white"
  });
  q({
    backgroundColor: i[0] ? "rgba(1,1,1,0)" : "black"
  });
  var l = null;
  const s = () => {
    clearTimeout(l), i[1](!0);
  }, a = () => {
    clearTimeout(l), l = window.setTimeout(() => {
      i[1](!1);
    }, 200);
  };
  T.useEffect(() => {
    r.current.addEventListener("selectstart", (c) => {
      c.preventDefault();
    }), screen.availWidth < 500 || window.innerWidth < 500 ? (r.current.addEventListener("touchstart", () => {
      s();
    }), r.current.addEventListener("touchend", () => {
      a();
    })) : (r.current.addEventListener("click", () => {
    }), r.current.addEventListener("mouseenter", () => {
      s();
    }), r.current.addEventListener("mouseleave", () => {
      a();
    }));
  }, []);
  const u = q({
    x: i[0] ? "10em" : "0em",
    duration: 1
  });
  return /* @__PURE__ */ C.jsxs(
    Z.div,
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
        /* @__PURE__ */ C.jsx(Z.div, { style: { backgroundColor: "rgba(0,0,0,0)", ...o, ...n, zIndex: 8 }, children: /* @__PURE__ */ C.jsx(v2, { children: t.children }) }),
        /* @__PURE__ */ C.jsx(Z.div, { style: { ...u, backgroundColor: "black", ...n, zIndex: 7 } }),
        /* @__PURE__ */ C.jsx(Z.div, { style: { ...u, backgroundColor: "white", ...n, left: "-10em", zIndex: 7 } })
      ]
    }
  );
};
var He = {}, wm = {}, La = {}, ja = {}, _2 = "Expected a function", lv = 0 / 0, JP = "[object Symbol]", e3 = /^\s+|\s+$/g, t3 = /^[-+]0x[0-9a-f]+$/i, n3 = /^0b[01]+$/i, r3 = /^0o[0-7]+$/i, i3 = parseInt, o3 = typeof tn == "object" && tn && tn.Object === Object && tn, l3 = typeof self == "object" && self && self.Object === Object && self, s3 = o3 || l3 || Function("return this")(), a3 = Object.prototype, u3 = a3.toString, c3 = Math.max, f3 = Math.min, Hd = function() {
  return s3.Date.now();
};
function d3(t, e, n) {
  var r, i, o, l, s, a, u = 0, c = !1, f = !1, d = !0;
  if (typeof t != "function")
    throw new TypeError(_2);
  e = sv(e) || 0, qc(n) && (c = !!n.leading, f = "maxWait" in n, o = f ? c3(sv(n.maxWait) || 0, e) : o, d = "trailing" in n ? !!n.trailing : d);
  function p(E) {
    var k = r, b = i;
    return r = i = void 0, u = E, l = t.apply(b, k), l;
  }
  function m(E) {
    return u = E, s = setTimeout(v, e), c ? p(E) : l;
  }
  function h(E) {
    var k = E - a, b = E - u, O = e - k;
    return f ? f3(O, o - b) : O;
  }
  function _(E) {
    var k = E - a, b = E - u;
    return a === void 0 || k >= e || k < 0 || f && b >= o;
  }
  function v() {
    var E = Hd();
    if (_(E))
      return g(E);
    s = setTimeout(v, h(E));
  }
  function g(E) {
    return s = void 0, d && r ? p(E) : (r = i = void 0, l);
  }
  function y() {
    s !== void 0 && clearTimeout(s), u = 0, r = a = i = s = void 0;
  }
  function w() {
    return s === void 0 ? l : g(Hd());
  }
  function S() {
    var E = Hd(), k = _(E);
    if (r = arguments, i = this, a = E, k) {
      if (s === void 0)
        return m(a);
      if (f)
        return s = setTimeout(v, e), p(a);
    }
    return s === void 0 && (s = setTimeout(v, e)), l;
  }
  return S.cancel = y, S.flush = w, S;
}
function p3(t, e, n) {
  var r = !0, i = !0;
  if (typeof t != "function")
    throw new TypeError(_2);
  return qc(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), d3(t, e, {
    leading: r,
    maxWait: e,
    trailing: i
  });
}
function qc(t) {
  var e = typeof t;
  return !!t && (e == "object" || e == "function");
}
function h3(t) {
  return !!t && typeof t == "object";
}
function m3(t) {
  return typeof t == "symbol" || h3(t) && u3.call(t) == JP;
}
function sv(t) {
  if (typeof t == "number")
    return t;
  if (m3(t))
    return lv;
  if (qc(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = qc(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = t.replace(e3, "");
  var n = n3.test(t);
  return n || r3.test(t) ? i3(t.slice(2), n ? 2 : 8) : t3.test(t) ? lv : +t;
}
var g3 = p3, Fa = {};
Object.defineProperty(Fa, "__esModule", {
  value: !0
});
Fa.addPassiveEventListener = function(e, n, r) {
  var i = r.name;
  i || (i = n, console.warn("Listener must be a named function.")), lc.has(n) || lc.set(n, /* @__PURE__ */ new Set());
  var o = lc.get(n);
  if (!o.has(i)) {
    var l = function() {
      var s = !1;
      try {
        var a = Object.defineProperty({}, "passive", {
          get: function() {
            s = !0;
          }
        });
        window.addEventListener("test", null, a);
      } catch {
      }
      return s;
    }();
    e.addEventListener(n, r, l ? { passive: !0 } : !1), o.add(i);
  }
};
Fa.removePassiveEventListener = function(e, n, r) {
  e.removeEventListener(n, r), lc.get(n).delete(r.name || n);
};
var lc = /* @__PURE__ */ new Map();
Object.defineProperty(ja, "__esModule", {
  value: !0
});
var v3 = g3, y3 = w3(v3), _3 = Fa;
function w3(t) {
  return t && t.__esModule ? t : { default: t };
}
var x3 = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 66;
  return (0, y3.default)(e, n);
}, Ne = {
  spyCallbacks: [],
  spySetState: [],
  scrollSpyContainers: [],
  mount: function(e, n) {
    if (e) {
      var r = x3(function(i) {
        Ne.scrollHandler(e);
      }, n);
      Ne.scrollSpyContainers.push(e), (0, _3.addPassiveEventListener)(e, "scroll", r);
    }
  },
  isMounted: function(e) {
    return Ne.scrollSpyContainers.indexOf(e) !== -1;
  },
  currentPositionX: function(e) {
    if (e === document) {
      var n = window.pageYOffset !== void 0, r = (document.compatMode || "") === "CSS1Compat";
      return n ? window.pageXOffset : r ? document.documentElement.scrollLeft : document.body.scrollLeft;
    } else
      return e.scrollLeft;
  },
  currentPositionY: function(e) {
    if (e === document) {
      var n = window.pageXOffset !== void 0, r = (document.compatMode || "") === "CSS1Compat";
      return n ? window.pageYOffset : r ? document.documentElement.scrollTop : document.body.scrollTop;
    } else
      return e.scrollTop;
  },
  scrollHandler: function(e) {
    var n = Ne.scrollSpyContainers[Ne.scrollSpyContainers.indexOf(e)].spyCallbacks || [];
    n.forEach(function(r) {
      return r(Ne.currentPositionX(e), Ne.currentPositionY(e));
    });
  },
  addStateHandler: function(e) {
    Ne.spySetState.push(e);
  },
  addSpyHandler: function(e, n) {
    var r = Ne.scrollSpyContainers[Ne.scrollSpyContainers.indexOf(n)];
    r.spyCallbacks || (r.spyCallbacks = []), r.spyCallbacks.push(e), e(Ne.currentPositionX(n), Ne.currentPositionY(n));
  },
  updateStates: function() {
    Ne.spySetState.forEach(function(e) {
      return e();
    });
  },
  unmount: function(e, n) {
    Ne.scrollSpyContainers.forEach(function(r) {
      return r.spyCallbacks && r.spyCallbacks.length && r.spyCallbacks.indexOf(n) > -1 && r.spyCallbacks.splice(r.spyCallbacks.indexOf(n), 1);
    }), Ne.spySetState && Ne.spySetState.length && Ne.spySetState.indexOf(e) > -1 && Ne.spySetState.splice(Ne.spySetState.indexOf(e), 1), document.removeEventListener("scroll", Ne.scrollHandler);
  },
  update: function() {
    return Ne.scrollSpyContainers.forEach(function(e) {
      return Ne.scrollHandler(e);
    });
  }
};
ja.default = Ne;
var Gl = {}, Ha = {};
Object.defineProperty(Ha, "__esModule", {
  value: !0
});
var k3 = function(e, n) {
  var r = e.indexOf("#") === 0 ? e.substring(1) : e, i = r ? "#" + r : "", o = window && window.location, l = i ? o.pathname + o.search + i : o.pathname + o.search;
  n ? history.pushState(history.state, "", l) : history.replaceState(history.state, "", l);
}, S3 = function() {
  return window.location.hash.replace(/^#/, "");
}, E3 = function(e) {
  return function(n) {
    return e.contains ? e != n && e.contains(n) : !!(e.compareDocumentPosition(n) & 16);
  };
}, T3 = function(e) {
  return getComputedStyle(e).position !== "static";
}, Bd = function(e, n) {
  for (var r = e.offsetTop, i = e.offsetParent; i && !n(i); )
    r += i.offsetTop, i = i.offsetParent;
  return { offsetTop: r, offsetParent: i };
}, C3 = function(e, n, r) {
  if (r)
    return e === document ? n.getBoundingClientRect().left + (window.scrollX || window.pageXOffset) : getComputedStyle(e).position !== "static" ? n.offsetLeft : n.offsetLeft - e.offsetLeft;
  if (e === document)
    return n.getBoundingClientRect().top + (window.scrollY || window.pageYOffset);
  if (T3(e)) {
    if (n.offsetParent !== e) {
      var i = function(c) {
        return c === e || c === document;
      }, o = Bd(n, i), l = o.offsetTop, s = o.offsetParent;
      if (s !== e)
        throw new Error("Seems containerElement is not an ancestor of the Element");
      return l;
    }
    return n.offsetTop;
  }
  if (n.offsetParent === e.offsetParent)
    return n.offsetTop - e.offsetTop;
  var a = function(c) {
    return c === document;
  };
  return Bd(n, a).offsetTop - Bd(e, a).offsetTop;
};
Ha.default = {
  updateHash: k3,
  getHash: S3,
  filterElementInContainer: E3,
  scrollOffset: C3
};
var Af = {}, xm = {};
Object.defineProperty(xm, "__esModule", {
  value: !0
});
xm.default = {
  /*
   * https://github.com/oblador/angular-scroll (duScrollDefaultEasing)
   */
  defaultEasing: function(e) {
    return e < 0.5 ? Math.pow(e * 2, 2) / 2 : 1 - Math.pow((1 - e) * 2, 2) / 2;
  },
  /*
   * https://gist.github.com/gre/1650294
   */
  // no easing, no acceleration
  linear: function(e) {
    return e;
  },
  // accelerating from zero velocity
  easeInQuad: function(e) {
    return e * e;
  },
  // decelerating to zero velocity
  easeOutQuad: function(e) {
    return e * (2 - e);
  },
  // acceleration until halfway, then deceleration
  easeInOutQuad: function(e) {
    return e < 0.5 ? 2 * e * e : -1 + (4 - 2 * e) * e;
  },
  // accelerating from zero velocity 
  easeInCubic: function(e) {
    return e * e * e;
  },
  // decelerating to zero velocity π
  easeOutCubic: function(e) {
    return --e * e * e + 1;
  },
  // acceleration until halfway, then deceleration 
  easeInOutCubic: function(e) {
    return e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
  },
  // accelerating from zero velocity 
  easeInQuart: function(e) {
    return e * e * e * e;
  },
  // decelerating to zero velocity 
  easeOutQuart: function(e) {
    return 1 - --e * e * e * e;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuart: function(e) {
    return e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e;
  },
  // accelerating from zero velocity
  easeInQuint: function(e) {
    return e * e * e * e * e;
  },
  // decelerating to zero velocity
  easeOutQuint: function(e) {
    return 1 + --e * e * e * e * e;
  },
  // acceleration until halfway, then deceleration 
  easeInOutQuint: function(e) {
    return e < 0.5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e;
  }
};
var km = {};
Object.defineProperty(km, "__esModule", {
  value: !0
});
var b3 = Fa, P3 = ["mousedown", "mousewheel", "touchmove", "keydown"];
km.default = {
  subscribe: function(e) {
    return typeof document < "u" && P3.forEach(function(n) {
      return (0, b3.addPassiveEventListener)(document, n, e);
    });
  }
};
var Ba = {};
Object.defineProperty(Ba, "__esModule", {
  value: !0
});
var Ch = {
  registered: {},
  scrollEvent: {
    register: function(e, n) {
      Ch.registered[e] = n;
    },
    remove: function(e) {
      Ch.registered[e] = null;
    }
  }
};
Ba.default = Ch;
Object.defineProperty(Af, "__esModule", {
  value: !0
});
var O3 = Object.assign || function(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e];
    for (var r in n)
      Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
  }
  return t;
}, M3 = Ha;
Df(M3);
var R3 = xm, av = Df(R3), N3 = km, I3 = Df(N3), $3 = Ba, Sr = Df($3);
function Df(t) {
  return t && t.__esModule ? t : { default: t };
}
var w2 = function(e) {
  return av.default[e.smooth] || av.default.defaultEasing;
}, A3 = function(e) {
  return typeof e == "function" ? e : function() {
    return e;
  };
}, D3 = function() {
  if (typeof window < "u")
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame;
}, bh = function() {
  return D3() || function(t, e, n) {
    window.setTimeout(t, n || 1e3 / 60, (/* @__PURE__ */ new Date()).getTime());
  };
}(), x2 = function() {
  return {
    currentPosition: 0,
    startPosition: 0,
    targetPosition: 0,
    progress: 0,
    duration: 0,
    cancel: !1,
    target: null,
    containerElement: null,
    to: null,
    start: null,
    delta: null,
    percent: null,
    delayTimeout: null
  };
}, k2 = function(e) {
  var n = e.data.containerElement;
  if (n && n !== document && n !== document.body)
    return n.scrollLeft;
  var r = window.pageXOffset !== void 0, i = (document.compatMode || "") === "CSS1Compat";
  return r ? window.pageXOffset : i ? document.documentElement.scrollLeft : document.body.scrollLeft;
}, S2 = function(e) {
  var n = e.data.containerElement;
  if (n && n !== document && n !== document.body)
    return n.scrollTop;
  var r = window.pageXOffset !== void 0, i = (document.compatMode || "") === "CSS1Compat";
  return r ? window.pageYOffset : i ? document.documentElement.scrollTop : document.body.scrollTop;
}, z3 = function(e) {
  var n = e.data.containerElement;
  if (n && n !== document && n !== document.body)
    return n.scrollWidth - n.offsetWidth;
  var r = document.body, i = document.documentElement;
  return Math.max(r.scrollWidth, r.offsetWidth, i.clientWidth, i.scrollWidth, i.offsetWidth);
}, L3 = function(e) {
  var n = e.data.containerElement;
  if (n && n !== document && n !== document.body)
    return n.scrollHeight - n.offsetHeight;
  var r = document.body, i = document.documentElement;
  return Math.max(r.scrollHeight, r.offsetHeight, i.clientHeight, i.scrollHeight, i.offsetHeight);
}, j3 = function t(e, n, r) {
  var i = n.data;
  if (!n.ignoreCancelEvents && i.cancel) {
    Sr.default.registered.end && Sr.default.registered.end(i.to, i.target, i.currentPositionY);
    return;
  }
  if (i.delta = Math.round(i.targetPosition - i.startPosition), i.start === null && (i.start = r), i.progress = r - i.start, i.percent = i.progress >= i.duration ? 1 : e(i.progress / i.duration), i.currentPosition = i.startPosition + Math.ceil(i.delta * i.percent), i.containerElement && i.containerElement !== document && i.containerElement !== document.body ? n.horizontal ? i.containerElement.scrollLeft = i.currentPosition : i.containerElement.scrollTop = i.currentPosition : n.horizontal ? window.scrollTo(i.currentPosition, 0) : window.scrollTo(0, i.currentPosition), i.percent < 1) {
    var o = t.bind(null, e, n);
    bh.call(window, o);
    return;
  }
  Sr.default.registered.end && Sr.default.registered.end(i.to, i.target, i.currentPosition);
}, Sm = function(e) {
  e.data.containerElement = e ? e.containerId ? document.getElementById(e.containerId) : e.container && e.container.nodeType ? e.container : document : null;
}, Wa = function(e, n, r, i) {
  n.data = n.data || x2(), window.clearTimeout(n.data.delayTimeout);
  var o = function() {
    n.data.cancel = !0;
  };
  if (I3.default.subscribe(o), Sm(n), n.data.start = null, n.data.cancel = !1, n.data.startPosition = n.horizontal ? k2(n) : S2(n), n.data.targetPosition = n.absolute ? e : e + n.data.startPosition, n.data.startPosition === n.data.targetPosition) {
    Sr.default.registered.end && Sr.default.registered.end(n.data.to, n.data.target, n.data.currentPosition);
    return;
  }
  n.data.delta = Math.round(n.data.targetPosition - n.data.startPosition), n.data.duration = A3(n.duration)(n.data.delta), n.data.duration = isNaN(parseFloat(n.data.duration)) ? 1e3 : parseFloat(n.data.duration), n.data.to = r, n.data.target = i;
  var l = w2(n), s = j3.bind(null, l, n);
  if (n && n.delay > 0) {
    n.data.delayTimeout = window.setTimeout(function() {
      Sr.default.registered.begin && Sr.default.registered.begin(n.data.to, n.data.target), bh.call(window, s);
    }, n.delay);
    return;
  }
  Sr.default.registered.begin && Sr.default.registered.begin(n.data.to, n.data.target), bh.call(window, s);
}, zf = function(e) {
  return e = O3({}, e), e.data = e.data || x2(), e.absolute = !0, e;
}, F3 = function(e) {
  Wa(0, zf(e));
}, H3 = function(e, n) {
  Wa(e, zf(n));
}, B3 = function(e) {
  e = zf(e), Sm(e), Wa(e.horizontal ? z3(e) : L3(e), e);
}, W3 = function(e, n) {
  n = zf(n), Sm(n);
  var r = n.horizontal ? k2(n) : S2(n);
  Wa(e + r, n);
};
Af.default = {
  animateTopScroll: Wa,
  getAnimationType: w2,
  scrollToTop: F3,
  scrollToBottom: B3,
  scrollTo: H3,
  scrollMore: W3
};
Object.defineProperty(Gl, "__esModule", {
  value: !0
});
var V3 = Object.assign || function(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e];
    for (var r in n)
      Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
  }
  return t;
}, U3 = Ha, Y3 = Em(U3), X3 = Af, G3 = Em(X3), Q3 = Ba, Ru = Em(Q3);
function Em(t) {
  return t && t.__esModule ? t : { default: t };
}
var Nu = {}, uv = void 0;
Gl.default = {
  unmount: function() {
    Nu = {};
  },
  register: function(e, n) {
    Nu[e] = n;
  },
  unregister: function(e) {
    delete Nu[e];
  },
  get: function(e) {
    return Nu[e] || document.getElementById(e) || document.getElementsByName(e)[0] || document.getElementsByClassName(e)[0];
  },
  setActiveLink: function(e) {
    return uv = e;
  },
  getActiveLink: function() {
    return uv;
  },
  scrollTo: function(e, n) {
    var r = this.get(e);
    if (!r) {
      console.warn("target Element not found");
      return;
    }
    n = V3({}, n, { absolute: !1 });
    var i = n.containerId, o = n.container, l = void 0;
    i ? l = document.getElementById(i) : o && o.nodeType ? l = o : l = document, n.absolute = !0;
    var s = n.horizontal, a = Y3.default.scrollOffset(l, r, s) + (n.offset || 0);
    if (!n.smooth) {
      Ru.default.registered.begin && Ru.default.registered.begin(e, r), l === document ? n.horizontal ? window.scrollTo(a, 0) : window.scrollTo(0, a) : l.scrollTop = a, Ru.default.registered.end && Ru.default.registered.end(e, r);
      return;
    }
    G3.default.animateTopScroll(a, n, e, r);
  }
};
var E2 = { exports: {} }, q3 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", K3 = q3, Z3 = K3;
function T2() {
}
function C2() {
}
C2.resetWarningCache = T2;
var J3 = function() {
  function t(r, i, o, l, s, a) {
    if (a !== Z3) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw u.name = "Invariant Violation", u;
    }
  }
  t.isRequired = t;
  function e() {
    return t;
  }
  var n = {
    array: t,
    bigint: t,
    bool: t,
    func: t,
    number: t,
    object: t,
    string: t,
    symbol: t,
    any: t,
    arrayOf: e,
    element: t,
    elementType: t,
    instanceOf: e,
    node: t,
    objectOf: e,
    oneOf: e,
    oneOfType: e,
    shape: e,
    exact: e,
    checkPropTypes: C2,
    resetWarningCache: T2
  };
  return n.PropTypes = n, n;
};
E2.exports = J3();
var Lf = E2.exports, jf = {};
Object.defineProperty(jf, "__esModule", {
  value: !0
});
var eO = Ha, Wd = tO(eO);
function tO(t) {
  return t && t.__esModule ? t : { default: t };
}
var nO = {
  mountFlag: !1,
  initialized: !1,
  scroller: null,
  containers: {},
  mount: function(e) {
    this.scroller = e, this.handleHashChange = this.handleHashChange.bind(this), window.addEventListener("hashchange", this.handleHashChange), this.initStateFromHash(), this.mountFlag = !0;
  },
  mapContainer: function(e, n) {
    this.containers[e] = n;
  },
  isMounted: function() {
    return this.mountFlag;
  },
  isInitialized: function() {
    return this.initialized;
  },
  initStateFromHash: function() {
    var e = this, n = this.getHash();
    n ? window.setTimeout(function() {
      e.scrollTo(n, !0), e.initialized = !0;
    }, 10) : this.initialized = !0;
  },
  scrollTo: function(e, n) {
    var r = this.scroller, i = r.get(e);
    if (i && (n || e !== r.getActiveLink())) {
      var o = this.containers[e] || document;
      r.scrollTo(e, { container: o });
    }
  },
  getHash: function() {
    return Wd.default.getHash();
  },
  changeHash: function(e, n) {
    this.isInitialized() && Wd.default.getHash() !== e && Wd.default.updateHash(e, n);
  },
  handleHashChange: function() {
    this.scrollTo(this.getHash());
  },
  unmount: function() {
    this.scroller = null, this.containers = null, window.removeEventListener("hashchange", this.handleHashChange);
  }
};
jf.default = nO;
Object.defineProperty(La, "__esModule", {
  value: !0
});
var Iu = Object.assign || function(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e];
    for (var r in n)
      Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
  }
  return t;
}, rO = function() {
  function t(e, n) {
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }
  return function(e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e;
  };
}(), iO = T, cv = Va(iO), oO = ja, $u = Va(oO), lO = Gl, sO = Va(lO), aO = Lf, Pe = Va(aO), uO = jf, ai = Va(uO);
function Va(t) {
  return t && t.__esModule ? t : { default: t };
}
function cO(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function fO(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function dO(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var fv = {
  to: Pe.default.string.isRequired,
  containerId: Pe.default.string,
  container: Pe.default.object,
  activeClass: Pe.default.string,
  activeStyle: Pe.default.object,
  spy: Pe.default.bool,
  horizontal: Pe.default.bool,
  smooth: Pe.default.oneOfType([Pe.default.bool, Pe.default.string]),
  offset: Pe.default.number,
  delay: Pe.default.number,
  isDynamic: Pe.default.bool,
  onClick: Pe.default.func,
  duration: Pe.default.oneOfType([Pe.default.number, Pe.default.func]),
  absolute: Pe.default.bool,
  onSetActive: Pe.default.func,
  onSetInactive: Pe.default.func,
  ignoreCancelEvents: Pe.default.bool,
  hashSpy: Pe.default.bool,
  saveHashHistory: Pe.default.bool,
  spyThrottle: Pe.default.number
};
La.default = function(t, e) {
  var n = e || sO.default, r = function(o) {
    dO(l, o);
    function l(s) {
      cO(this, l);
      var a = fO(this, (l.__proto__ || Object.getPrototypeOf(l)).call(this, s));
      return i.call(a), a.state = {
        active: !1
      }, a;
    }
    return rO(l, [{
      key: "getScrollSpyContainer",
      value: function() {
        var a = this.props.containerId, u = this.props.container;
        return a && !u ? document.getElementById(a) : u && u.nodeType ? u : document;
      }
    }, {
      key: "componentDidMount",
      value: function() {
        if (this.props.spy || this.props.hashSpy) {
          var a = this.getScrollSpyContainer();
          $u.default.isMounted(a) || $u.default.mount(a, this.props.spyThrottle), this.props.hashSpy && (ai.default.isMounted() || ai.default.mount(n), ai.default.mapContainer(this.props.to, a)), $u.default.addSpyHandler(this.spyHandler, a), this.setState({
            container: a
          });
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        $u.default.unmount(this.stateHandler, this.spyHandler);
      }
    }, {
      key: "render",
      value: function() {
        var a = "";
        this.state && this.state.active ? a = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim() : a = this.props.className;
        var u = {};
        this.state && this.state.active ? u = Iu({}, this.props.style, this.props.activeStyle) : u = Iu({}, this.props.style);
        var c = Iu({}, this.props);
        for (var f in fv)
          c.hasOwnProperty(f) && delete c[f];
        return c.className = a, c.style = u, c.onClick = this.handleClick, cv.default.createElement(t, c);
      }
    }]), l;
  }(cv.default.PureComponent), i = function() {
    var l = this;
    this.scrollTo = function(s, a) {
      n.scrollTo(s, Iu({}, l.state, a));
    }, this.handleClick = function(s) {
      l.props.onClick && l.props.onClick(s), s.stopPropagation && s.stopPropagation(), s.preventDefault && s.preventDefault(), l.scrollTo(l.props.to, l.props);
    }, this.spyHandler = function(s, a) {
      var u = l.getScrollSpyContainer();
      if (!(ai.default.isMounted() && !ai.default.isInitialized())) {
        var c = l.props.horizontal, f = l.props.to, d = null, p = void 0, m = void 0;
        if (c) {
          var h = 0, _ = 0, v = 0;
          if (u.getBoundingClientRect) {
            var g = u.getBoundingClientRect();
            v = g.left;
          }
          if (!d || l.props.isDynamic) {
            if (d = n.get(f), !d)
              return;
            var y = d.getBoundingClientRect();
            h = y.left - v + s, _ = h + y.width;
          }
          var w = s - l.props.offset;
          p = w >= Math.floor(h) && w < Math.floor(_), m = w < Math.floor(h) || w >= Math.floor(_);
        } else {
          var S = 0, E = 0, k = 0;
          if (u.getBoundingClientRect) {
            var b = u.getBoundingClientRect();
            k = b.top;
          }
          if (!d || l.props.isDynamic) {
            if (d = n.get(f), !d)
              return;
            var O = d.getBoundingClientRect();
            S = O.top - k + a, E = S + O.height;
          }
          var P = a - l.props.offset;
          p = P >= Math.floor(S) && P < Math.floor(E), m = P < Math.floor(S) || P >= Math.floor(E);
        }
        var L = n.getActiveLink();
        if (m) {
          if (f === L && n.setActiveLink(void 0), l.props.hashSpy && ai.default.getHash() === f) {
            var A = l.props.saveHashHistory, X = A === void 0 ? !1 : A;
            ai.default.changeHash("", X);
          }
          l.props.spy && l.state.active && (l.setState({ active: !1 }), l.props.onSetInactive && l.props.onSetInactive(f, d));
        }
        if (p && (L !== f || l.state.active === !1)) {
          n.setActiveLink(f);
          var N = l.props.saveHashHistory, z = N === void 0 ? !1 : N;
          l.props.hashSpy && ai.default.changeHash(f, z), l.props.spy && (l.setState({ active: !0 }), l.props.onSetActive && l.props.onSetActive(f, d));
        }
      }
    };
  };
  return r.propTypes = fv, r.defaultProps = { offset: 0 }, r;
};
Object.defineProperty(wm, "__esModule", {
  value: !0
});
var pO = T, dv = b2(pO), hO = La, mO = b2(hO);
function b2(t) {
  return t && t.__esModule ? t : { default: t };
}
function gO(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function pv(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function vO(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var yO = function(t) {
  vO(e, t);
  function e() {
    var n, r, i, o;
    gO(this, e);
    for (var l = arguments.length, s = Array(l), a = 0; a < l; a++)
      s[a] = arguments[a];
    return o = (r = (i = pv(this, (n = e.__proto__ || Object.getPrototypeOf(e)).call.apply(n, [this].concat(s))), i), i.render = function() {
      return dv.default.createElement(
        "a",
        i.props,
        i.props.children
      );
    }, r), pv(i, o);
  }
  return e;
}(dv.default.Component);
wm.default = (0, mO.default)(yO);
var Tm = {};
Object.defineProperty(Tm, "__esModule", {
  value: !0
});
var _O = function() {
  function t(e, n) {
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }
  return function(e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e;
  };
}(), wO = T, hv = P2(wO), xO = La, kO = P2(xO);
function P2(t) {
  return t && t.__esModule ? t : { default: t };
}
function SO(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function EO(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function TO(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var CO = function(t) {
  TO(e, t);
  function e() {
    return SO(this, e), EO(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
  }
  return _O(e, [{
    key: "render",
    value: function() {
      return hv.default.createElement(
        "button",
        this.props,
        this.props.children
      );
    }
  }]), e;
}(hv.default.Component);
Tm.default = (0, kO.default)(CO);
var Cm = {}, Ff = {};
Object.defineProperty(Ff, "__esModule", {
  value: !0
});
var bO = Object.assign || function(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e];
    for (var r in n)
      Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
  }
  return t;
}, PO = function() {
  function t(e, n) {
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }
  return function(e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e;
  };
}(), OO = T, mv = Hf(OO), MO = k0;
Hf(MO);
var RO = Gl, gv = Hf(RO), NO = Lf, vv = Hf(NO);
function Hf(t) {
  return t && t.__esModule ? t : { default: t };
}
function IO(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function $O(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function AO(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
Ff.default = function(t) {
  var e = function(n) {
    AO(r, n);
    function r(i) {
      IO(this, r);
      var o = $O(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, i));
      return o.childBindings = {
        domNode: null
      }, o;
    }
    return PO(r, [{
      key: "componentDidMount",
      value: function() {
        if (typeof window > "u")
          return !1;
        this.registerElems(this.props.name);
      }
    }, {
      key: "componentDidUpdate",
      value: function(o) {
        this.props.name !== o.name && this.registerElems(this.props.name);
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        if (typeof window > "u")
          return !1;
        gv.default.unregister(this.props.name);
      }
    }, {
      key: "registerElems",
      value: function(o) {
        gv.default.register(o, this.childBindings.domNode);
      }
    }, {
      key: "render",
      value: function() {
        return mv.default.createElement(t, bO({}, this.props, { parentBindings: this.childBindings }));
      }
    }]), r;
  }(mv.default.Component);
  return e.propTypes = {
    name: vv.default.string,
    id: vv.default.string
  }, e;
};
Object.defineProperty(Cm, "__esModule", {
  value: !0
});
var yv = Object.assign || function(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e];
    for (var r in n)
      Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
  }
  return t;
}, DO = function() {
  function t(e, n) {
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }
  return function(e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e;
  };
}(), zO = T, _v = bm(zO), LO = Ff, jO = bm(LO), FO = Lf, wv = bm(FO);
function bm(t) {
  return t && t.__esModule ? t : { default: t };
}
function HO(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function BO(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function WO(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var O2 = function(t) {
  WO(e, t);
  function e() {
    return HO(this, e), BO(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
  }
  return DO(e, [{
    key: "render",
    value: function() {
      var r = this, i = yv({}, this.props);
      return delete i.name, i.parentBindings && delete i.parentBindings, _v.default.createElement(
        "div",
        yv({}, i, { ref: function(l) {
          r.props.parentBindings.domNode = l;
        } }),
        this.props.children
      );
    }
  }]), e;
}(_v.default.Component);
O2.propTypes = {
  name: wv.default.string,
  id: wv.default.string
};
Cm.default = (0, jO.default)(O2);
var Vd = Object.assign || function(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e];
    for (var r in n)
      Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
  }
  return t;
}, xv = function() {
  function t(e, n) {
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }
  return function(e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e;
  };
}();
function kv(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Sv(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function Ev(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var Au = T, oo = ja, Ud = Gl, Ie = Lf, ui = jf, Tv = {
  to: Ie.string.isRequired,
  containerId: Ie.string,
  container: Ie.object,
  activeClass: Ie.string,
  spy: Ie.bool,
  smooth: Ie.oneOfType([Ie.bool, Ie.string]),
  offset: Ie.number,
  delay: Ie.number,
  isDynamic: Ie.bool,
  onClick: Ie.func,
  duration: Ie.oneOfType([Ie.number, Ie.func]),
  absolute: Ie.bool,
  onSetActive: Ie.func,
  onSetInactive: Ie.func,
  ignoreCancelEvents: Ie.bool,
  hashSpy: Ie.bool,
  spyThrottle: Ie.number
}, VO = {
  Scroll: function(e, n) {
    console.warn("Helpers.Scroll is deprecated since v1.7.0");
    var r = n || Ud, i = function(l) {
      Ev(s, l);
      function s(a) {
        kv(this, s);
        var u = Sv(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, a));
        return o.call(u), u.state = {
          active: !1
        }, u;
      }
      return xv(s, [{
        key: "getScrollSpyContainer",
        value: function() {
          var u = this.props.containerId, c = this.props.container;
          return u ? document.getElementById(u) : c && c.nodeType ? c : document;
        }
      }, {
        key: "componentDidMount",
        value: function() {
          if (this.props.spy || this.props.hashSpy) {
            var u = this.getScrollSpyContainer();
            oo.isMounted(u) || oo.mount(u, this.props.spyThrottle), this.props.hashSpy && (ui.isMounted() || ui.mount(r), ui.mapContainer(this.props.to, u)), this.props.spy && oo.addStateHandler(this.stateHandler), oo.addSpyHandler(this.spyHandler, u), this.setState({
              container: u
            });
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function() {
          oo.unmount(this.stateHandler, this.spyHandler);
        }
      }, {
        key: "render",
        value: function() {
          var u = "";
          this.state && this.state.active ? u = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim() : u = this.props.className;
          var c = Vd({}, this.props);
          for (var f in Tv)
            c.hasOwnProperty(f) && delete c[f];
          return c.className = u, c.onClick = this.handleClick, Au.createElement(e, c);
        }
      }]), s;
    }(Au.Component), o = function() {
      var s = this;
      this.scrollTo = function(a, u) {
        r.scrollTo(a, Vd({}, s.state, u));
      }, this.handleClick = function(a) {
        s.props.onClick && s.props.onClick(a), a.stopPropagation && a.stopPropagation(), a.preventDefault && a.preventDefault(), s.scrollTo(s.props.to, s.props);
      }, this.stateHandler = function() {
        r.getActiveLink() !== s.props.to && (s.state !== null && s.state.active && s.props.onSetInactive && s.props.onSetInactive(), s.setState({ active: !1 }));
      }, this.spyHandler = function(a) {
        var u = s.getScrollSpyContainer();
        if (!(ui.isMounted() && !ui.isInitialized())) {
          var c = s.props.to, f = null, d = 0, p = 0, m = 0;
          if (u.getBoundingClientRect) {
            var h = u.getBoundingClientRect();
            m = h.top;
          }
          if (!f || s.props.isDynamic) {
            if (f = r.get(c), !f)
              return;
            var _ = f.getBoundingClientRect();
            d = _.top - m + a, p = d + _.height;
          }
          var v = a - s.props.offset, g = v >= Math.floor(d) && v < Math.floor(p), y = v < Math.floor(d) || v >= Math.floor(p), w = r.getActiveLink();
          if (y)
            return c === w && r.setActiveLink(void 0), s.props.hashSpy && ui.getHash() === c && ui.changeHash(), s.props.spy && s.state.active && (s.setState({ active: !1 }), s.props.onSetInactive && s.props.onSetInactive()), oo.updateStates();
          if (g && w !== c)
            return r.setActiveLink(c), s.props.hashSpy && ui.changeHash(c), s.props.spy && (s.setState({ active: !0 }), s.props.onSetActive && s.props.onSetActive(c)), oo.updateStates();
        }
      };
    };
    return i.propTypes = Tv, i.defaultProps = { offset: 0 }, i;
  },
  Element: function(e) {
    console.warn("Helpers.Element is deprecated since v1.7.0");
    var n = function(r) {
      Ev(i, r);
      function i(o) {
        kv(this, i);
        var l = Sv(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, o));
        return l.childBindings = {
          domNode: null
        }, l;
      }
      return xv(i, [{
        key: "componentDidMount",
        value: function() {
          if (typeof window > "u")
            return !1;
          this.registerElems(this.props.name);
        }
      }, {
        key: "componentDidUpdate",
        value: function(l) {
          this.props.name !== l.name && this.registerElems(this.props.name);
        }
      }, {
        key: "componentWillUnmount",
        value: function() {
          if (typeof window > "u")
            return !1;
          Ud.unregister(this.props.name);
        }
      }, {
        key: "registerElems",
        value: function(l) {
          Ud.register(l, this.childBindings.domNode);
        }
      }, {
        key: "render",
        value: function() {
          return Au.createElement(e, Vd({}, this.props, { parentBindings: this.childBindings }));
        }
      }]), i;
    }(Au.Component);
    return n.propTypes = {
      name: Ie.string,
      id: Ie.string
    }, n;
  }
}, UO = VO;
Object.defineProperty(He, "__esModule", {
  value: !0
});
He.Helpers = He.ScrollElement = He.ScrollLink = He.animateScroll = He.scrollSpy = He.Events = He.scroller = He.Element = He.Button = He.Link = void 0;
var YO = wm, M2 = $r(YO), XO = Tm, R2 = $r(XO), GO = Cm, N2 = $r(GO), QO = Gl, I2 = $r(QO), qO = Ba, $2 = $r(qO), KO = ja, A2 = $r(KO), ZO = Af, D2 = $r(ZO), JO = La, z2 = $r(JO), e5 = Ff, L2 = $r(e5), t5 = UO, j2 = $r(t5);
function $r(t) {
  return t && t.__esModule ? t : { default: t };
}
He.Link = M2.default;
He.Button = R2.default;
He.Element = N2.default;
He.scroller = I2.default;
He.Events = $2.default;
He.scrollSpy = A2.default;
He.animateScroll = D2.default;
He.ScrollLink = z2.default;
He.ScrollElement = L2.default;
He.Helpers = j2.default;
He.default = { Link: M2.default, Button: R2.default, Element: N2.default, scroller: I2.default, Events: $2.default, scrollSpy: A2.default, animateScroll: D2.default, ScrollLink: z2.default, ScrollElement: L2.default, Helpers: j2.default };
Fi.registerPlugin(oe);
const Cv = T.createContext(null), n5 = (t) => {
  const e = T.useState(!1);
  T.useState(!1);
  const n = T.useRef(null), r = T.useState(!1), [i, o] = T.useState(!1), { burgx: l, ...s } = q({
    burgx: i ? "30em" : "0em"
  }), [a, u] = T.useState([window.innerWidth, window.innerHeight]);
  var c = window.innerWidth;
  T.useEffect(() => {
    console.log("読み込み開始：CoolBox"), window.addEventListener("mouseover", (_) => {
    }), window.addEventListener("resize", () => {
      c == window.innerWidth || (c = window.innerWidth, window.location.reload());
    }), screen.availWidth < 500 || window.innerHeight < 500 ? e[1](!0) : (o(!0), r[1](!0)), console.log("読み込みED：CoolBox");
  }, []);
  const f = q({
    lighting: i ? 1 : 0
  }), d = {
    position: "fixed",
    width: `${a[0]}px`,
    top: 0,
    left: 0,
    height: "100%"
    //,pointerEvents:"none"
  }, p = [
    { strurl: "サイトオープン", url: "/" },
    { strurl: "サイトオープン", url: "/" }
  ], m = [
    { link: "/", title: "サイトオープン" },
    { link: "/", title: "サイト2オープン" },
    { link: "/", title: "サイト3オープン" },
    { link: "/", title: "" }
  ], h = T.useRef(null);
  return T.useContext(Cv), /* @__PURE__ */ C.jsx(Cv.Provider, { value: { viewent: h }, children: /* @__PURE__ */ C.jsxs("div", { className: "base", ref: n, style: { overflow: "hidden", padding: "0px", margin: "0px", textAlign: "center" }, children: [
    /* @__PURE__ */ C.jsxs("div", { className: "navi", style: {
      position: "fixed",
      width: `${a[0]}px`,
      height: "3em",
      backgroundColor: "rgba(240,240,240,1)",
      zIndex: 1502
    }, children: [
      /* @__PURE__ */ C.jsx(r5, { height: "3em", data: p }),
      /* @__PURE__ */ C.jsx("div", { style: { position: "absolute", top: "0px", right: "0px", backgroundColor: "rgba(240,240,240,1)", margin: "0px", textAlign: "center", display: "inline-block", height: "100%", verticalAlign: "top" }, children: /* @__PURE__ */ C.jsx(l5, { height: 3, setburg: o }) })
    ] }),
    /* @__PURE__ */ C.jsxs(Z.div, { className: "base2", style: { pointerEvents: "none", width: "100%", left: "0px", top: "3em", position: "fixed", margin: "0px", padding: "0px", zIndex: 1501, height: l, overflow: "hidden" }, children: [
      /* @__PURE__ */ C.jsxs("div", { style: { zIndex: 501, margin: "0px", display: "inline-block", verticalAlign: "top", height: "100%", overflow: "hidden", position: "relative", pointerEvents: "none" }, children: [
        /* @__PURE__ */ C.jsx(Mu, { height: 3, children: "ご案内" }),
        /* @__PURE__ */ C.jsx(Mu, { height: 3, children: "活動紹介" }),
        /* @__PURE__ */ C.jsx(Mu, { height: 3, children: "ご報告" }),
        /* @__PURE__ */ C.jsx(Mu, { height: 3, children: "スペシャルサンクス" })
      ] }),
      /* @__PURE__ */ C.jsx(Z.div, { className: "colormass", style: { pointerEvents: "none", zIndex: 500, opacity: f.lighting, backgroundColor: "rgba(1,1,1,.4)", ...d, display: r[0] ? "none" : "block" } })
    ] }),
    /* @__PURE__ */ C.jsx(HP, { phonestate: e }),
    /* @__PURE__ */ C.jsxs(o5, { className: "aboutcomp2", children: [
      /* @__PURE__ */ C.jsx(QP, { ref: h, lr: "L" }),
      /* @__PURE__ */ C.jsx(qP, { lr: "R", setfunc: h })
    ] }),
    /* @__PURE__ */ C.jsx(UP, { phonestate: e, className: "aboutcomp" }),
    /* @__PURE__ */ C.jsxs(YP, { phonestate: e, className: "productcomp4", children: [
      /* @__PURE__ */ C.jsx(i5, { ht: "800", delay: 200, children: /* @__PURE__ */ C.jsx(KP, { lr: "F", children: m }) }),
      /* @__PURE__ */ C.jsx(LP, { width: "", children: " " })
    ] }),
    /* @__PURE__ */ C.jsx("style", { children: `
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
}, r5 = (t) => {
  const e = q(() => ({ from: { x: `${-window.innerWidth}px` }, to: { x: `${window.innerWidth}px` }, loop: !0, config: { duration: 3e4 } })), n = {
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
  }, i = t.data.map((o) => /* @__PURE__ */ C.jsx(
    Z.div,
    {
      style: { ...n },
      onClick: () => {
        location.href = `${o.url}`;
      },
      children: o.strurl
    }
  ));
  return /* @__PURE__ */ C.jsx(Z.div, { style: { ...r, ...e[0] }, children: i });
}, i5 = (t) => {
  const e = t.hasOwnProperty("paddingtop") ? t.paddingtop : 0, n = t.hasOwnProperty("paddingbottom") ? t.paddingbottom : 0, r = Mf({
    rootMarginLeft: "1000px",
    threshold: 0.2,
    triggerOnce: !0
  }), i = q({
    opacity: r.inView ? 1 : 0,
    x: r.inView ? 0 : -40,
    delay: t.delay,
    config: { duration: 700 }
  });
  return /* @__PURE__ */ C.jsx(Z.div, { ref: r.ref, style: {
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
}, o5 = (t) => {
  const n = T.useRef(null);
  T.useState(!1);
  const r = () => {
    Fi.timeline({
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
  return T.useEffect(() => {
    console.log("読み込み開始：Hikitsuke"), window.setTimeout(() => {
      r();
    }, 300), console.log("読み込みend：Hikitsuke");
  }, []), q({
    from: { x: 2 * 100 * 3.14 },
    to: { x: 0 },
    loop: !0,
    config: { duration: 3e3 }
  }), /* @__PURE__ */ C.jsx(C.Fragment, { children: /* @__PURE__ */ C.jsx("div", { ref: n, className: t.className + " Hiki3", style: { width: "100vw", height: "100vh", backgroundColor: "rgba(100,100,100,.9)", position: "relative", zIndex: 1 }, children: t.children }) });
}, l5 = (t) => {
  const [e, n] = T.useState(!0), [r, i] = T.useState(!1), { l1v: o, l3v: l, l2v: s, l2v2: a, ...u } = q({
    l1v: e ? "20%" : "80%",
    l2v: e ? "20%" : "50%",
    l2v2: e ? "80%" : "50%",
    l3v: e ? "80%" : "20%"
  });
  var c = window.innerHeight, f = window.innerWidth;
  T.useEffect(() => {
    c = window.innerHeight, f = window.innerWidth, f / c < 1 ? i(!0) : i(!1);
  }, []);
  const d = (h) => {
    h.preventDefault();
  }, p = T.useCallback(() => {
    document.addEventListener("touchmove", d, { useCapture: !1, passive: !1 }), document.addEventListener("wheel", d, { useCapture: !1, passive: !1 });
  }, []), m = T.useCallback(() => {
    document.removeEventListener("touchmove", d, { useCapture: !1, passive: !1 }), document.removeEventListener("wheel", d, { useCapture: !1, passive: !1 });
  }, []);
  return /* @__PURE__ */ C.jsx("div", { className: "burg", onClick: () => {
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
  }, children: /* @__PURE__ */ C.jsxs("svg", { style: { left: 0, top: 0, width: "100%", height: "100%", position: "absolute" }, children: [
    /* @__PURE__ */ C.jsx(Z.line, { x1: "20%", y1: "20%", x2: "80%", y2: o, style: { strokeWidth: "5px", stroke: "black" } }),
    /* @__PURE__ */ C.jsx(Z.line, { x1: s, y1: "50%", x2: a, y2: "50%", style: { strokeWidth: "5px", stroke: "black" } }),
    /* @__PURE__ */ C.jsx(Z.line, { x1: "20%", y1: "80%", x2: "80%", y2: l, style: { strokeWidth: "5px", stroke: "black" } })
  ] }) });
};
var s5 = document.getElementById("RomNav");
const a5 = Yd.createRoot(s5);
a5.render(
  /* @__PURE__ */ C.jsx(n5, { namebox: ["このサイトについて", "依頼の流れ", "制作例", "リンク"], children: " " })
);
