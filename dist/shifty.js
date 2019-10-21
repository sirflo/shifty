/*! Shifty 2.8.0 - https://github.com/jeremyckahn/shifty */
!(function(t, n) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = n())
    : 'function' == typeof define && define.amd
    ? define('shifty', [], n)
    : 'object' == typeof exports
    ? (exports.shifty = n())
    : (t.shifty = n());
})(window, function() {
  return (function(t) {
    var n = {};
    function e(r) {
      if (n[r]) return n[r].exports;
      var i = (n[r] = { i: r, l: !1, exports: {} });
      return t[r].call(i.exports, i, i.exports, e), (i.l = !0), i.exports;
    }
    return (
      (e.m = t),
      (e.c = n),
      (e.d = function(t, n, r) {
        e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: r });
      }),
      (e.r = function(t) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 });
      }),
      (e.t = function(t, n) {
        if ((1 & n && (t = e(t)), 8 & n)) return t;
        if (4 & n && 'object' == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (
          (e.r(r),
          Object.defineProperty(r, 'default', { enumerable: !0, value: t }),
          2 & n && 'string' != typeof t)
        )
          for (var i in t)
            e.d(
              r,
              i,
              function(n) {
                return t[n];
              }.bind(null, i)
            );
        return r;
      }),
      (e.n = function(t) {
        var n =
          t && t.__esModule
            ? function() {
                return t.default;
              }
            : function() {
                return t;
              };
        return e.d(n, 'a', n), n;
      }),
      (e.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n);
      }),
      (e.p = ''),
      e((e.s = 3))
    );
  })([
    function(t, n, e) {
      'use strict';
      (function(t) {
        e.d(n, 'e', function() {
          return v;
        }),
          e.d(n, 'c', function() {
            return _;
          }),
          e.d(n, 'b', function() {
            return m;
          }),
          e.d(n, 'a', function() {
            return g;
          }),
          e.d(n, 'd', function() {
            return b;
          });
        var r = e(1);
        function i(t, n) {
          for (var e = 0; e < n.length; e++) {
            var r = n[e];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        function u(t) {
          return (u =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function(t) {
                  return typeof t;
                }
              : function(t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                })(t);
        }
        function o(t, n) {
          var e = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            n &&
              (r = r.filter(function(n) {
                return Object.getOwnPropertyDescriptor(t, n).enumerable;
              })),
              e.push.apply(e, r);
          }
          return e;
        }
        function a(t) {
          for (var n = 1; n < arguments.length; n++) {
            var e = null != arguments[n] ? arguments[n] : {};
            n % 2
              ? o(e, !0).forEach(function(n) {
                  c(t, n, e[n]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
              : o(e).forEach(function(n) {
                  Object.defineProperty(
                    t,
                    n,
                    Object.getOwnPropertyDescriptor(e, n)
                  );
                });
          }
          return t;
        }
        function c(t, n, e) {
          return (
            n in t
              ? Object.defineProperty(t, n, {
                  value: e,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[n] = e),
            t
          );
        }
        var f = 'undefined' != typeof window ? window : t,
          s =
            f.requestAnimationFrame ||
            f.webkitRequestAnimationFrame ||
            f.oRequestAnimationFrame ||
            f.msRequestAnimationFrame ||
            (f.mozCancelRequestAnimationFrame && f.mozRequestAnimationFrame) ||
            setTimeout,
          l = function() {},
          h = null,
          p = null,
          d = a({}, r),
          v = function(t, n, e, r, i, u, o) {
            var a = t < u ? 0 : (t - u) / i;
            for (var c in n) {
              var f = o[c],
                s = f.call ? f : d[f],
                l = e[c];
              n[c] = l + (r[c] - l) * s(a);
            }
            return n;
          },
          y = function(t, n) {
            var e = t._attachment,
              r = t._currentState,
              i = t._delay,
              u = t._easing,
              o = t._originalState,
              a = t._duration,
              c = t._step,
              f = t._targetState,
              s = t._timestamp,
              l = s + i + a,
              h = n > l ? l : n,
              p = a - (l - h);
            h >= l
              ? (c(f, e, p), t.stop(!0))
              : (t._applyFilter('beforeTween'),
                h < s + i ? ((h = 1), (a = 1), (s = 1)) : (s += i),
                v(h, r, o, f, a, s, u),
                t._applyFilter('afterTween'),
                c(r, e, p));
          },
          _ = function() {
            for (var t = g.now(), n = h; n; ) {
              var e = n._next;
              y(n, n._now ? n._now() : t), (n = e);
            }
          },
          m = function(t) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 'linear',
              e = {},
              r = u(n);
            if ('string' === r || 'function' === r) for (var i in t) e[i] = n;
            else for (var o in t) e[o] = n[o] || 'linear';
            return e;
          },
          w = function(t) {
            if (t === h) (h = t._next) ? (h._previous = null) : (p = null);
            else if (t === p) (p = t._previous) ? (p._next = null) : (h = null);
            else {
              var n = t._previous,
                e = t._next;
              (n._next = e), (e._previous = n);
            }
            t._previous = t._next = null;
          },
          g = (function() {
            function t() {
              var n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : void 0;
              !(function(t, n) {
                if (!(t instanceof n))
                  throw new TypeError('Cannot call a class as a function');
              })(this, t),
                (this._currentState = n),
                (this._configured = !1),
                (this._filters = []),
                (this._timestamp = null),
                (this._next = null),
                (this._previous = null),
                e && this.setConfig(e);
            }
            var n, e, r;
            return (
              (n = t),
              (e = [
                {
                  key: '_applyFilter',
                  value: function(t) {
                    var n = !0,
                      e = !1,
                      r = void 0;
                    try {
                      for (
                        var i, u = this._filters[Symbol.iterator]();
                        !(n = (i = u.next()).done);
                        n = !0
                      ) {
                        var o = i.value[t];
                        o && o(this);
                      }
                    } catch (t) {
                      (e = !0), (r = t);
                    } finally {
                      try {
                        n || null == u.return || u.return();
                      } finally {
                        if (e) throw r;
                      }
                    }
                  },
                },
                {
                  key: 'tween',
                  value: function() {
                    var n =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : void 0,
                      e = this._attachment,
                      r = this._configured;
                    return (
                      (!n && r) || this.setConfig(n),
                      (this._pausedAtTime = null),
                      (this._timestamp = this._now ? this._now() : t.now()),
                      this._start(this.get(), e),
                      this.resume()
                    );
                  },
                },
                {
                  key: 'setConfig',
                  value: function() {
                    var n = this,
                      e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      r = e.attachment,
                      i = e.delay,
                      u = void 0 === i ? 0 : i,
                      o = e.duration,
                      c = void 0 === o ? 500 : o,
                      f = e.easing,
                      s = e.from,
                      h = e.now,
                      p = void 0 === h ? void 0 : h,
                      d = e.promise,
                      v = void 0 === d ? Promise : d,
                      y = e.start,
                      _ = void 0 === y ? l : y,
                      w = e.step,
                      g = void 0 === w ? l : w,
                      b = e.to;
                    (this._configured = !0),
                      (this._attachment = r),
                      (this._isPlaying = !1),
                      (this._pausedAtTime = null),
                      (this._scheduleId = null),
                      (this._delay = u),
                      (this._start = _),
                      (this._step = g),
                      (this._duration = c),
                      (this._currentState = a({}, s || this.get())),
                      (this._originalState = this.get()),
                      (this._targetState = a({}, b || this.get())),
                      (this._now = p);
                    var O = this._currentState;
                    (this._targetState = a({}, O, {}, this._targetState)),
                      (this._easing = m(O, f));
                    var S = t.filters;
                    for (var j in ((this._filters.length = 0), S))
                      S[j].doesApply(this) && this._filters.push(S[j]);
                    return (
                      this._applyFilter('tweenCreated'),
                      (this._promise = new v(function(t, e) {
                        (n._resolve = t), (n._reject = e);
                      })),
                      this._promise.catch(l),
                      this
                    );
                  },
                },
                {
                  key: 'get',
                  value: function() {
                    return a({}, this._currentState);
                  },
                },
                {
                  key: 'set',
                  value: function(t) {
                    this._currentState = t;
                  },
                },
                {
                  key: 'pause',
                  value: function() {
                    if (this._isPlaying)
                      return (
                        (this._pausedAtTime = this._now
                          ? this._now()
                          : t.now()),
                        (this._isPlaying = !1),
                        w(this),
                        this
                      );
                  },
                },
                {
                  key: 'resume',
                  value: function() {
                    if (null === this._timestamp) return this.tween();
                    if (this._isPlaying) return this._promise;
                    var n = this._now ? this._now() : t.now();
                    return (
                      this._pausedAtTime &&
                        ((this._timestamp += n - this._pausedAtTime),
                        (this._pausedAtTime = null)),
                      (this._isPlaying = !0),
                      null === h
                        ? ((h = this),
                          (p = this),
                          (function t() {
                            h && (s.call(f, t, 1e3 / 60), _());
                          })())
                        : ((this._previous = p), (p._next = this), (p = this)),
                      this._promise
                    );
                  },
                },
                {
                  key: 'seek',
                  value: function(n) {
                    n = Math.max(n, 0);
                    var e = this._now ? this._now() : t.now();
                    return this._timestamp + n === 0
                      ? this
                      : ((this._timestamp = e - n),
                        this._isPlaying || y(this, e),
                        this);
                  },
                },
                {
                  key: 'stop',
                  value: function() {
                    var t =
                        arguments.length > 0 &&
                        void 0 !== arguments[0] &&
                        arguments[0],
                      n = this._attachment,
                      e = this._currentState,
                      r = this._easing,
                      i = this._originalState,
                      u = this._targetState;
                    if (this._isPlaying)
                      return (
                        (this._isPlaying = !1),
                        w(this),
                        t
                          ? (this._applyFilter('beforeTween'),
                            v(1, e, i, u, 1, 0, r),
                            this._applyFilter('afterTween'),
                            this._applyFilter('afterTweenEnd'),
                            this._resolve(e, n))
                          : this._reject(e, n),
                        this
                      );
                  },
                },
                {
                  key: 'isPlaying',
                  value: function() {
                    return this._isPlaying;
                  },
                },
                {
                  key: 'setScheduleFunction',
                  value: function(n) {
                    t.setScheduleFunction(n);
                  },
                },
                {
                  key: 'dispose',
                  value: function() {
                    for (var t in this) delete this[t];
                  },
                },
              ]) && i(n.prototype, e),
              r && i(n, r),
              t
            );
          })();
        function b() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = new g(),
            e = n.tween(t);
          return (e.tweenable = n), e;
        }
        (g.setScheduleFunction = function(t) {
          return (s = t);
        }),
          (g.formulas = d),
          (g.filters = {}),
          (g.now =
            Date.now ||
            function() {
              return +new Date();
            });
      }.call(this, e(2)));
    },
    function(t, n, e) {
      'use strict';
      e.r(n),
        e.d(n, 'linear', function() {
          return r;
        }),
        e.d(n, 'easeInQuad', function() {
          return i;
        }),
        e.d(n, 'easeOutQuad', function() {
          return u;
        }),
        e.d(n, 'easeInOutQuad', function() {
          return o;
        }),
        e.d(n, 'easeInCubic', function() {
          return a;
        }),
        e.d(n, 'easeOutCubic', function() {
          return c;
        }),
        e.d(n, 'easeInOutCubic', function() {
          return f;
        }),
        e.d(n, 'easeInQuart', function() {
          return s;
        }),
        e.d(n, 'easeOutQuart', function() {
          return l;
        }),
        e.d(n, 'easeInOutQuart', function() {
          return h;
        }),
        e.d(n, 'easeInQuint', function() {
          return p;
        }),
        e.d(n, 'easeOutQuint', function() {
          return d;
        }),
        e.d(n, 'easeInOutQuint', function() {
          return v;
        }),
        e.d(n, 'easeInSine', function() {
          return y;
        }),
        e.d(n, 'easeOutSine', function() {
          return _;
        }),
        e.d(n, 'easeInOutSine', function() {
          return m;
        }),
        e.d(n, 'easeInExpo', function() {
          return w;
        }),
        e.d(n, 'easeOutExpo', function() {
          return g;
        }),
        e.d(n, 'easeInOutExpo', function() {
          return b;
        }),
        e.d(n, 'easeInCirc', function() {
          return O;
        }),
        e.d(n, 'easeOutCirc', function() {
          return S;
        }),
        e.d(n, 'easeInOutCirc', function() {
          return j;
        }),
        e.d(n, 'easeOutBounce', function() {
          return M;
        }),
        e.d(n, 'easeInBack', function() {
          return k;
        }),
        e.d(n, 'easeOutBack', function() {
          return P;
        }),
        e.d(n, 'easeInOutBack', function() {
          return x;
        }),
        e.d(n, 'elastic', function() {
          return T;
        }),
        e.d(n, 'swingFromTo', function() {
          return E;
        }),
        e.d(n, 'swingFrom', function() {
          return F;
        }),
        e.d(n, 'swingTo', function() {
          return A;
        }),
        e.d(n, 'bounce', function() {
          return I;
        }),
        e.d(n, 'bouncePast', function() {
          return C;
        }),
        e.d(n, 'easeFromTo', function() {
          return D;
        }),
        e.d(n, 'easeFrom', function() {
          return q;
        }),
        e.d(n, 'easeTo', function() {
          return Q;
        });
      /*!
       * All equations are adapted from Thomas Fuchs'
       * [Scripty2](https://github.com/madrobby/scripty2/blob/master/src/effects/transitions/penner.js).
       *
       * Based on Easing Equations (c) 2003 [Robert
       * Penner](http://www.robertpenner.com/), all rights reserved. This work is
       * [subject to terms](http://www.robertpenner.com/easing_terms_of_use.html).
       */
      /*!
       *  TERMS OF USE - EASING EQUATIONS
       *  Open source under the BSD License.
       *  Easing Equations (c) 2003 Robert Penner, all rights reserved.
       */
      var r = function(t) {
          return t;
        },
        i = function(t) {
          return Math.pow(t, 2);
        },
        u = function(t) {
          return -(Math.pow(t - 1, 2) - 1);
        },
        o = function(t) {
          return (t /= 0.5) < 1
            ? 0.5 * Math.pow(t, 2)
            : -0.5 * ((t -= 2) * t - 2);
        },
        a = function(t) {
          return Math.pow(t, 3);
        },
        c = function(t) {
          return Math.pow(t - 1, 3) + 1;
        },
        f = function(t) {
          return (t /= 0.5) < 1
            ? 0.5 * Math.pow(t, 3)
            : 0.5 * (Math.pow(t - 2, 3) + 2);
        },
        s = function(t) {
          return Math.pow(t, 4);
        },
        l = function(t) {
          return -(Math.pow(t - 1, 4) - 1);
        },
        h = function(t) {
          return (t /= 0.5) < 1
            ? 0.5 * Math.pow(t, 4)
            : -0.5 * ((t -= 2) * Math.pow(t, 3) - 2);
        },
        p = function(t) {
          return Math.pow(t, 5);
        },
        d = function(t) {
          return Math.pow(t - 1, 5) + 1;
        },
        v = function(t) {
          return (t /= 0.5) < 1
            ? 0.5 * Math.pow(t, 5)
            : 0.5 * (Math.pow(t - 2, 5) + 2);
        },
        y = function(t) {
          return 1 - Math.cos(t * (Math.PI / 2));
        },
        _ = function(t) {
          return Math.sin(t * (Math.PI / 2));
        },
        m = function(t) {
          return -0.5 * (Math.cos(Math.PI * t) - 1);
        },
        w = function(t) {
          return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
        },
        g = function(t) {
          return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
        },
        b = function(t) {
          return 0 === t
            ? 0
            : 1 === t
            ? 1
            : (t /= 0.5) < 1
            ? 0.5 * Math.pow(2, 10 * (t - 1))
            : 0.5 * (2 - Math.pow(2, -10 * --t));
        },
        O = function(t) {
          return -(Math.sqrt(1 - t * t) - 1);
        },
        S = function(t) {
          return Math.sqrt(1 - Math.pow(t - 1, 2));
        },
        j = function(t) {
          return (t /= 0.5) < 1
            ? -0.5 * (Math.sqrt(1 - t * t) - 1)
            : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
        },
        M = function(t) {
          return t < 1 / 2.75
            ? 7.5625 * t * t
            : t < 2 / 2.75
            ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
            : t < 2.5 / 2.75
            ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
            : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
        },
        k = function(t) {
          var n = 1.70158;
          return t * t * ((n + 1) * t - n);
        },
        P = function(t) {
          var n = 1.70158;
          return (t -= 1) * t * ((n + 1) * t + n) + 1;
        },
        x = function(t) {
          var n = 1.70158;
          return (t /= 0.5) < 1
            ? t * t * ((1 + (n *= 1.525)) * t - n) * 0.5
            : 0.5 * ((t -= 2) * t * ((1 + (n *= 1.525)) * t + n) + 2);
        },
        T = function(t) {
          return (
            -1 *
              Math.pow(4, -8 * t) *
              Math.sin(((6 * t - 1) * (2 * Math.PI)) / 2) +
            1
          );
        },
        E = function(t) {
          var n = 1.70158;
          return (t /= 0.5) < 1
            ? t * t * ((1 + (n *= 1.525)) * t - n) * 0.5
            : 0.5 * ((t -= 2) * t * ((1 + (n *= 1.525)) * t + n) + 2);
        },
        F = function(t) {
          var n = 1.70158;
          return t * t * ((n + 1) * t - n);
        },
        A = function(t) {
          var n = 1.70158;
          return (t -= 1) * t * ((n + 1) * t + n) + 1;
        },
        I = function(t) {
          return t < 1 / 2.75
            ? 7.5625 * t * t
            : t < 2 / 2.75
            ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
            : t < 2.5 / 2.75
            ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
            : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
        },
        C = function(t) {
          return t < 1 / 2.75
            ? 7.5625 * t * t
            : t < 2 / 2.75
            ? 2 - (7.5625 * (t -= 1.5 / 2.75) * t + 0.75)
            : t < 2.5 / 2.75
            ? 2 - (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375)
            : 2 - (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
        },
        D = function(t) {
          return (t /= 0.5) < 1
            ? 0.5 * Math.pow(t, 4)
            : -0.5 * ((t -= 2) * Math.pow(t, 3) - 2);
        },
        q = function(t) {
          return Math.pow(t, 4);
        },
        Q = function(t) {
          return Math.pow(t, 0.25);
        };
    },
    function(t, n) {
      var e;
      e = (function() {
        return this;
      })();
      try {
        e = e || new Function('return this')();
      } catch (t) {
        'object' == typeof window && (e = window);
      }
      t.exports = e;
    },
    function(t, n, e) {
      'use strict';
      e.r(n);
      var r = {};
      e.r(r),
        e.d(r, 'doesApply', function() {
          return x;
        }),
        e.d(r, 'tweenCreated', function() {
          return T;
        }),
        e.d(r, 'beforeTween', function() {
          return E;
        }),
        e.d(r, 'afterTween', function() {
          return F;
        });
      var i,
        u,
        o = e(0),
        a = /(\d|-|\.)/,
        c = /([^\-0-9.]+)/g,
        f = /[0-9.-]+/g,
        s =
          ((i = f.source),
          (u = /,\s*/.source),
          new RegExp(
            'rgb\\('
              .concat(i)
              .concat(u)
              .concat(i)
              .concat(u)
              .concat(i, '\\)'),
            'g'
          )),
        l = /^.*\(/,
        h = /#([0-9]|[a-f]){3,6}/gi,
        p = function(t, n) {
          return t.map(function(t, e) {
            return '_'.concat(n, '_').concat(e);
          });
        };
      function d(t) {
        return parseInt(t, 16);
      }
      var v = function(t) {
          return 'rgb('.concat(
            ((n = t),
            3 === (n = n.replace(/#/, '')).length &&
              (n = (n = n.split(''))[0] + n[0] + n[1] + n[1] + n[2] + n[2]),
            [d(n.substr(0, 2)), d(n.substr(2, 2)), d(n.substr(4, 2))]).join(
              ','
            ),
            ')'
          );
          var n;
        },
        y = function(t, n, e) {
          var r = n.match(t),
            i = n.replace(t, 'VAL');
          return (
            r &&
              r.forEach(function(t) {
                return (i = i.replace('VAL', e(t)));
              }),
            i
          );
        },
        _ = function(t) {
          for (var n in t) {
            var e = t[n];
            'string' == typeof e && e.match(h) && (t[n] = y(h, e, v));
          }
        },
        m = function(t) {
          var n = t.match(f).map(Math.floor),
            e = t.match(l)[0];
          return ''.concat(e).concat(n.join(','), ')');
        },
        w = function(t) {
          return t.match(f);
        },
        g = function(t) {
          var n,
            e,
            r = {};
          for (var i in t) {
            var u = t[i];
            'string' == typeof u &&
              (r[i] = {
                formatString:
                  ((n = u),
                  (e = void 0),
                  (e = n.match(c)),
                  e
                    ? (1 === e.length || n.charAt(0).match(a)) && e.unshift('')
                    : (e = ['', '']),
                  e.join('VAL')),
                chunkNames: p(w(u), i),
              });
          }
          return r;
        },
        b = function(t, n) {
          var e = function(e) {
            w(t[e]).forEach(function(r, i) {
              return (t[n[e].chunkNames[i]] = +r);
            }),
              delete t[e];
          };
          for (var r in n) e(r);
        },
        O = function(t, n) {
          var e = {};
          return (
            n.forEach(function(n) {
              (e[n] = t[n]), delete t[n];
            }),
            e
          );
        },
        S = function(t, n) {
          return n.map(function(n) {
            return t[n];
          });
        },
        j = function(t, n) {
          return (
            n.forEach(function(n) {
              return (t = t.replace('VAL', +n.toFixed(4)));
            }),
            t
          );
        },
        M = function(t, n) {
          for (var e in n) {
            var r = n[e],
              i = r.chunkNames,
              u = r.formatString,
              o = j(u, S(O(t, i), i));
            t[e] = y(s, o, m);
          }
        },
        k = function(t, n) {
          var e = function(e) {
            var r = n[e].chunkNames,
              i = t[e];
            if ('string' == typeof i) {
              var u = i.split(' '),
                o = u[u.length - 1];
              r.forEach(function(n, e) {
                return (t[n] = u[e] || o);
              });
            } else
              r.forEach(function(n) {
                return (t[n] = i);
              });
            delete t[e];
          };
          for (var r in n) e(r);
        },
        P = function(t, n) {
          for (var e in n) {
            var r = n[e].chunkNames,
              i = t[r[0]];
            t[e] =
              'string' == typeof i
                ? r
                    .map(function(n) {
                      var e = t[n];
                      return delete t[n], e;
                    })
                    .join(' ')
                : i;
          }
        },
        x = function(t) {
          var n = t._currentState;
          return Object.keys(n).some(function(t) {
            return 'string' == typeof n[t];
          });
        };
      function T(t) {
        var n = t._currentState;
        [n, t._originalState, t._targetState].forEach(_), (t._tokenData = g(n));
      }
      function E(t) {
        var n = t._currentState,
          e = t._originalState,
          r = t._targetState,
          i = t._easing,
          u = t._tokenData;
        k(i, u),
          [n, e, r].forEach(function(t) {
            return b(t, u);
          });
      }
      function F(t) {
        var n = t._currentState,
          e = t._originalState,
          r = t._targetState,
          i = t._easing,
          u = t._tokenData;
        [n, e, r].forEach(function(t) {
          return M(t, u);
        }),
          P(i, u);
      }
      function A(t, n) {
        var e = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          n &&
            (r = r.filter(function(n) {
              return Object.getOwnPropertyDescriptor(t, n).enumerable;
            })),
            e.push.apply(e, r);
        }
        return e;
      }
      function I(t) {
        for (var n = 1; n < arguments.length; n++) {
          var e = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? A(e, !0).forEach(function(n) {
                C(t, n, e[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : A(e).forEach(function(n) {
                Object.defineProperty(
                  t,
                  n,
                  Object.getOwnPropertyDescriptor(e, n)
                );
              });
        }
        return t;
      }
      function C(t, n, e) {
        return (
          n in t
            ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[n] = e),
          t
        );
      }
      var D = new o.a(),
        q = o.a.filters,
        Q = function(t, n, e, r) {
          var i =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : 0,
            u = I({}, t),
            a = Object(o.b)(t, r);
          for (var c in ((D._filters.length = 0),
          D.set({}),
          (D._currentState = u),
          (D._originalState = t),
          (D._targetState = n),
          (D._easing = a),
          q))
            q[c].doesApply(D) && D._filters.push(q[c]);
          D._applyFilter('tweenCreated'), D._applyFilter('beforeTween');
          var f = Object(o.e)(e, u, t, n, 1, i, a);
          return D._applyFilter('afterTween'), f;
        };
      function B(t) {
        return (
          (function(t) {
            if (Array.isArray(t)) {
              for (var n = 0, e = new Array(t.length); n < t.length; n++)
                e[n] = t[n];
              return e;
            }
          })(t) ||
          (function(t) {
            if (
              Symbol.iterator in Object(t) ||
              '[object Arguments]' === Object.prototype.toString.call(t)
            )
              return Array.from(t);
          })(t) ||
          (function() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance'
            );
          })()
        );
      }
      function N(t, n) {
        for (var e = 0; e < n.length; e++) {
          var r = n[e];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function R(t, n) {
        var e = n.get(t);
        if (!e)
          throw new TypeError('attempted to get private field on non-instance');
        return e.get ? e.get.call(t) : e.value;
      }
      var z = (function() {
          function t() {
            !(function(t, n) {
              if (!(t instanceof n))
                throw new TypeError('Cannot call a class as a function');
            })(this, t),
              L.set(this, { writable: !0, value: [] });
            for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++)
              e[r] = arguments[r];
            e.forEach(this.add.bind(this));
          }
          var n, e, r;
          return (
            (n = t),
            (e = [
              {
                key: 'add',
                value: function(t) {
                  return R(this, L).push(t), t;
                },
              },
              {
                key: 'remove',
                value: function(t) {
                  var n = R(this, L).indexOf(t);
                  return ~n && R(this, L).splice(n, 1), t;
                },
              },
              {
                key: 'empty',
                value: function() {
                  return this.tweenables.map(this.remove.bind(this));
                },
              },
              {
                key: 'isPlaying',
                value: function() {
                  return R(this, L).some(function(t) {
                    return t.isPlaying();
                  });
                },
              },
              {
                key: 'play',
                value: function() {
                  return (
                    R(this, L).forEach(function(t) {
                      return t.tween();
                    }),
                    this
                  );
                },
              },
              {
                key: 'pause',
                value: function() {
                  return (
                    R(this, L).forEach(function(t) {
                      return t.pause();
                    }),
                    this
                  );
                },
              },
              {
                key: 'resume',
                value: function() {
                  return (
                    R(this, L).forEach(function(t) {
                      return t.resume();
                    }),
                    this
                  );
                },
              },
              {
                key: 'stop',
                value: function(t) {
                  return (
                    R(this, L).forEach(function(n) {
                      return n.stop(t);
                    }),
                    this
                  );
                },
              },
              {
                key: 'tweenables',
                get: function() {
                  return B(R(this, L));
                },
              },
              {
                key: 'promises',
                get: function() {
                  return R(this, L).map(function(t) {
                    return t._promise;
                  });
                },
              },
            ]) && N(n.prototype, e),
            r && N(n, r),
            t
          );
        })(),
        L = new WeakMap();
      function V(t, n, e, r, i, u) {
        var o,
          a,
          c = 0,
          f = 0,
          s = 0,
          l = 0,
          h = 0,
          p = 0,
          d = function(t) {
            return ((c * t + f) * t + s) * t;
          },
          v = function(t) {
            return (3 * c * t + 2 * f) * t + s;
          },
          y = function(t) {
            return t >= 0 ? t : 0 - t;
          };
        return (
          (c = 1 - (s = 3 * n) - (f = 3 * (r - n) - s)),
          (l = 1 - (p = 3 * e) - (h = 3 * (i - e) - p)),
          (o = t),
          (a = (function(t) {
            return 1 / (200 * t);
          })(u)),
          (function(t) {
            return ((l * t + h) * t + p) * t;
          })(
            (function(t, n) {
              var e, r, i, u, o, a;
              for (i = t, a = 0; a < 8; a++) {
                if (((u = d(i) - t), y(u) < n)) return i;
                if (((o = v(i)), y(o) < 1e-6)) break;
                i -= u / o;
              }
              if ((i = t) < (e = 0)) return e;
              if (i > (r = 1)) return r;
              for (; e < r; ) {
                if (((u = d(i)), y(u - t) < n)) return i;
                t > u ? (e = i) : (r = i), (i = 0.5 * (r - e) + e);
              }
              return i;
            })(o, a)
          )
        );
      }
      var W = function(t, n, e, r, i) {
          var u = (function(t, n, e, r) {
            return function(i) {
              return V(i, t, n, e, r, 1);
            };
          })(n, e, r, i);
          return (
            (u.displayName = t),
            (u.x1 = n),
            (u.y1 = e),
            (u.x2 = r),
            (u.y2 = i),
            (o.a.formulas[t] = u)
          );
        },
        G = function(t) {
          return delete o.a.formulas[t];
        };
      e.d(n, 'processTweens', function() {
        return o.c;
      }),
        e.d(n, 'Tweenable', function() {
          return o.a;
        }),
        e.d(n, 'tween', function() {
          return o.d;
        }),
        e.d(n, 'interpolate', function() {
          return Q;
        }),
        e.d(n, 'Scene', function() {
          return z;
        }),
        e.d(n, 'setBezierFunction', function() {
          return W;
        }),
        e.d(n, 'unsetBezierFunction', function() {
          return G;
        }),
        (o.a.filters.token = r);
    },
  ]);
});
//# sourceMappingURL=shifty.js.map
