/* (c) 2008-2012 AddThis, Inc */
if (!window._ate) {
    (function () {
        var _1, w = window, d = document;
        var l;
        try {
            l = window.location;
            if (l.protocol.indexOf("file") === 0 || l.protocol.indexOf("safari-extension") === 0 || l.protocol.indexOf("chrome-extension") === 0) {
                _atr = "http:" + _atr;
            }
            if (l.hostname.indexOf("localhost") != -1) {
                _atc.loc = 1;
            }
        } catch (e) {
        }
        var ua = navigator.userAgent.toLowerCase(), d = document, w = window, _6 = window.addthis || {}, A = _6, dl = d.location, b = {win: /windows/.test(ua), xp: (/windows nt 5.1/.test(ua)) || (/windows nt 5.2/.test(ua)), osx: /os x/.test(ua), chr: /chrome/.test(ua) && !(/rockmelt/.test(ua)), chb: /chrome\/(1[456789]|2\d)/.test(ua), cho: /chrome\/(1[2345678]|2\d)/.test(ua), iph: /iphone/.test(ua) || (/ipod/.test(ua)), dro: /android/.test(ua), wph: /windows phone/.test(ua), ipa: /ipad/.test(ua), saf: /safari/.test(ua) && !(/chrome/.test(ua)), opr: /opera/.test(ua), msi: (/msie/.test(ua)) && !(/opera/.test(ua)), ffx: /firefox/.test(ua), ff2: /firefox\/2/.test(ua), ffn: /firefox\/((3.[6789][0-9a-z]*)|(4.[0-9a-z]*))/.test(ua), ie6: /msie 6.0/.test(ua), ie7: /msie 7.0/.test(ua), ie8: /msie 8.0/.test(ua), ie9: /msie 9.0/.test(ua), ie10: /msie 10.0/.test(ua), mob: /(iphone|ipod|android|mobi|blackberry)/.test(ua), mod: -1}, _a = {rev: "120361", bro: b, wlp: (l || {}).protocol, dl: dl, unj: w.JSON && typeof w.JSON.parse == "function" && typeof w.JSON.stringify == "function", upm: !!w.postMessage && ("" + w.postMessage).toLowerCase().indexOf("[native code]") !== -1, bamp: _atc.bamp - Math.random(), camp: _atc.camp - Math.random(), xamp: _atc.xamp - Math.random(), vamp: _atc.vamp - Math.random(), tamp: _atc.tamp - Math.random(), pamp: _atc.pamp - Math.random(), ab: "-", inst: 1, wait: 500, tmo: null, sub: !!window.at_sub, dbm: 0, uid: null, api: {}, imgz: [], hash: window.location.hash};
        d.ce = d.createElement;
        d.gn = d.getElementsByTagName;
        window._ate = _a;
        _a.evl = function (_b, _c) {
            if (_c) {
                var _d;
                eval("evl = " + _b);
                return _d;
            } else {
                return eval(_b);
            }
        };
        function reduce(o, fn, acc, cxt) {
            if (!o) {
                return acc;
            }
            if (o instanceof Array || (o.length && (typeof o !== "function"))) {
                for (var i = 0, len = o.length, v = o[0]; i < len; v = o[++i]) {
                    acc = fn.call(cxt || o, acc, v, i, o);
                }
            } else {
                for (var _15 in o) {
                    acc = fn.call(cxt || o, acc, o[_15], _15, o);
                }
            }
            return acc;
        }

        function mrg(o, n) {
            if (n && o !== n) {
                for (var k in n) {
                    if (o[k] === u) {
                        o[k] = n[k];
                    }
                }
            }
        }

        var _1a = function (_1b, _1c) {
            reduce(_1b, function (acc, v, k) {
                _1c(k, v);
            }, []);
        }, _20 = function (a, b) {
            var _23 = {}, i;
            for (i = 0; i < a.length; i++) {
                _23[a[i]] = 1;
            }
            for (i = 0; i < b.length; i++) {
                if (!_23[b[i]]) {
                    a.push(b[i]);
                    _23[b[i]] = 1;
                }
            }
            return a;
        }, _25 = Array.prototype.slice, _26 = function (a) {
            return _25.apply(a, _25.call(arguments, 1));
        }, _28 = function (s) {
            return("" + s).replace(/(^\s+|\s+$)/g, "");
        }, _2a = function (A, B) {
            if (!B) {
                B = A.object || A.obj;
                A = A.subject || A.subj;
            }
            return reduce(_26(arguments, 1), function (A, _2e) {
                return reduce(_2e, function (o, v, k) {
                    if (o) {
                        o[k] = v;
                    }
                    return o;
                }, A);
            }, A);
        }, _32 = function (o, del, eq) {
            return reduce(o,function (acc, v, k) {
                k = _28(k);
                if (k) {
                    acc.push(_euc(k) + (eq || "=") + _euc(_28((typeof(v) == "object" ? _32(v, del || "&", eq || "=") : (v)))));
                }
                return acc;
            }, []).join(del || "&");
        }, _39 = function (o, del) {
            return reduce(o,function (acc, v, k) {
                k = _28(k);
                if (k) {
                    acc.push(_euc(k) + "=" + _euc(_28(v)));
                }
                return acc;
            }, []).join(del || "&");
        }, _3f = function (q, del, eq) {
            return reduce((q || "").split(del || "&"), function (acc, _44) {
                try {
                    var kv = _44.split((eq || "=")), k = _28(_duc(kv[0])), v = _28(_duc(kv.slice(1).join(eq || "=")));
                    if (v.indexOf(del || "&") > -1 || v.indexOf(eq || "=") > -1) {
                        v = _3f(v, del || "&", eq || "=");
                    }
                    if (k) {
                        acc[k] = v;
                    }
                } catch (e) {
                }
                return acc;
            }, {});
        }, _48 = function (q, del) {
            return reduce((q || "").split(del || "&"), function (acc, _4c) {
                try {
                    var kv = _4c.split("="), k = _28(_duc(kv[0])), v = _28(_duc(kv.slice(1).join("=")));
                    if (k) {
                        acc[k] = v;
                    }
                } catch (e) {
                }
                return acc;
            }, {});
        }, _50 = function (obj) {
            if (null == obj || "object" != typeof obj) {
                return obj;
            }
            if (obj instanceof Object) {
                var s = "";
                for (var _53 in obj) {
                    if (obj.hasOwnProperty(_53)) {
                        s += ((s.length > 0) ? "," : "") + obj[_53];
                    }
                }
                return s;
            }
            return null;
        }, _54 = function () {
            var _55 = _26(arguments, 0), fn = _55.shift(), _57 = _55.shift();
            return function () {
                return fn.apply(_57, _55.concat(_26(arguments, 0)));
            };
        }, _58 = function (un, obj, evt, fn) {
            if (!obj) {
                return;
            }
            if (we) {
                obj[(un ? "detach" : "attach") + "Event"]("on" + evt, fn);
            } else {
                obj[(un ? "remove" : "add") + "EventListener"](evt, fn, false);
            }
        }, _5d = function (obj, evt, fn) {
            _58(0, obj, evt, fn);
        }, _61 = function (obj, evt, fn) {
            _58(1, obj, evt, fn);
        }, _65 = function (s) {
            return(s.match(/(([^\/\/]*)\/\/|\/\/)?([^\/\?\&\#]+)/i))[0];
        }, _67 = function (s) {
            return s.replace(_65(s), "");
        }, _69 = function (obj) {
            if (null == obj || "object" != typeof obj) {
                return obj;
            }
            if (obj instanceof Object) {
                var _6b = {};
                if (typeof(obj.hasOwnProperty) == "function") {
                    for (var _6c in obj) {
                        if (_6b[_6c] === obj) {
                            continue;
                        }
                        if (obj.hasOwnProperty(_6c) && obj[_6c] !== _1) {
                            _6b[_6c] = _69(obj[_6c]);
                        }
                    }
                }
                return _6b;
            }
            return null;
        }, _6d = function () {
            var _6e = function (_6f) {
                var el, id, tag, _73;
                tag = _6f.match(/^(\w+)(?:#|.|$)/);
                tag = tag ? tag[1] : "div";
                el = document.createElement(tag);
                id = _6f.match(/#[\w][\w-]*/);
                if (id) {
                    id = id[0].replace(/#/, "");
                    el.setAttribute("id", id);
                }
                _73 = _6f.match(/\.[\w][\w-]*/g);
                if (_73) {
                    _73 = _73.join(" ").replace(/\./g, "");
                    el.className = _73;
                }
                return el;
            };
            return function (_74) {
                if (!_74) {
                    return;
                }
                var i, _76, val, el, _79, _7a, _7b, obj, _7d, _7e;
                for (i in _74) {
                    _76 = i;
                    break;
                }
                val = _74[_76];
                el = _6e(_76);
                if (typeof val === "object" && "length"in val) {
                    for (i in val) {
                        if (typeof val.hasOwnProperty !== "undefined" && !val.hasOwnProperty(i)) {
                            continue;
                        }
                        var c = _6d(val[i]);
                        el.appendChild(c);
                    }
                    return el;
                }
                _7a = _74[_76];
                _7d = ["a", "b", "body", "br", "div", "em", "font", "head", "h", "p", "span", "button", "h1", "h2", "h3", "h4"];
                _7e = function (_80) {
                    if (typeof _7d.indexOf === "function") {
                        return _7d.indexOf(_80) > -1;
                    }
                    for (var i in _7d) {
                        if (_80 === _7d[i]) {
                            return true;
                        }
                    }
                    return false;
                };
                if (typeof _7a === "string") {
                    el.appendChild(document.createTextNode(_7a));
                } else {
                    for (var _79 in _7a) {
                        if (_7a.hasOwnProperty(_79)) {
                            _7b = _7a[_79];
                            if (typeof _7b === "string" && _79.indexOf(".") < 0 && (_79.indexOf("#") < 0 || _79.length === 1) && !_7e(_79.toLowerCase())) {
                                if (_79 === "html") {
                                    el.appendChild(document.createTextNode(_7b));
                                } else {
                                    el.setAttribute(_79, _7b);
                                }
                            } else {
                                if (_79 == "children") {
                                    for (var c in _7b) {
                                        el.appendChild(_6d(_7b[c]));
                                    }
                                } else {
                                    if ((_7b || {}).test === false) {
                                        continue;
                                    }
                                    obj = {};
                                    obj[_79] = _7b;
                                    _7b = _6d(obj);
                                    el.appendChild(_7b);
                                }
                            }
                        }
                    }
                }
                return el;
            };
        }(), _82 = {unqconcat: _20, reduce: reduce, slice: _26, strip: _28, extend: _2a, toKV: _39, rtoKV: _32, fromKV: _48, rfromKV: _3f, otoCSV: _50, bind: _54, listen: _5d, each: _1a, unlisten: _61, gUD: _65, gUQS: _67, clone: _69, mrg: mrg, json2html: _6d, misc: {}};
        _a.util = _82;
        _2a(_a, _82);
        var u = _a.util;
        (function (j, l, m) {
            var h, e = w.JSON && "function" == typeof JSON.stringify, p = j.util;

            function k(s, r, u, q, t) {
                this.type = s;
                this.triggerType = r || s;
                this.target = u || q;
                this.triggerTarget = q || u;
                this.data = t || {};
                this.serialize = function () {
                    if (e) {
                        var v = p.extend({}, this.data);
                        v.element = null;
                        return JSON.stringify({remoteEvent: {data: v, type: this.type, triggerType: this.triggerType, target: {}, triggerTarget: {}}});
                    }
                    return"";
                };
            }

            p.extend(k.prototype, {constructor: k, bubbles: false, preventDefault: p.noop, stopPropagation: p.noop, clone: function () {
                return new this.constructor(this.type, this.triggerType, this.target, this.triggerTarget, p.extend({}, this.data));
            }});
            function f(q, r) {
                this.target = q;
                this.queues = {};
                this.remoteDispatcher = null;
                this.remoteFilter = null;
                this.defaultEventType = r || k;
            }

            function a(q) {
                var r = this.queues;
                if (!r[q]) {
                    r[q] = [];
                }
                return r[q];
            }

            function i(q, r) {
                this.getQueue(q).push(r);
            }

            function o(r, q) {
                if (r && r.postMessage) {
                    this.remoteDispatcher = r;
                    this.remoteFilter = q;
                }
            }

            function d(s, t) {
                var u = this.getQueue(s), r = u.indexOf(t);
                if (r !== -1) {
                    u.splice(r, 1);
                }
            }

            function b(q, u, t, s) {
                var r = this;
                if (!s) {
                    setTimeout(function () {
                        r.dispatchEvent(new r.defaultEventType(q, q, u, r.target, t));
                    }, 10);
                } else {
                    r.dispatchEvent(new r.defaultEventType(q, q, u, r.target, t));
                }
            }

            function n(s) {
                for (var t = 0, x = s.target, u = this.getQueue(s.type), r = u.length; t < r; t++) {
                    u[t].call(x, s.clone());
                }
                try {
                    if (e && this.remoteDispatcher && typeof this.remoteDispatcher.postMessage === "function" && (!this.remoteFilter || s.type.indexOf(this.remoteFilter) === 0)) {
                        this.remoteDispatcher.postMessage(s.serialize(), "*");
                    }
                } catch (v) {
                }
            }

            function c(r) {
                if (!r) {
                    return;
                }
                for (var q in g) {
                    r[q] = p.bind(g[q], this);
                }
                return r;
            }

            var g = {constructor: f, getQueue: a, addEventListener: i, removeEventListener: d, addRemoteDispatcher: o, dispatchEvent: n, fire: b, decorate: c};
            p.extend(f.prototype, g);
            j.event = {PolyEvent: k, EventDispatcher: f};
        })(_a, _a.api, _a);
        _a.ed = new _a.event.EventDispatcher(_a);
        var _a8 = {isBound: 0, isReady: 0, readyList: [], onReady: function () {
            if (!_a8.isReady) {
                _a8.isReady = 1;
                var l = _a8.readyList.concat(window.addthis_onload || []);
                for (var fn = 0; fn < l.length; fn++) {
                    l[fn].call(window);
                }
                _a8.readyList = [];
            }
        }, addLoad: function (_ab) {
            var o = w.onload;
            if (typeof w.onload != "function") {
                w.onload = _ab;
            } else {
                w.onload = function () {
                    if (o) {
                        o();
                    }
                    _ab();
                };
            }
        }, bindReady: function () {
            if (r.isBound || _atc.xol) {
                return;
            }
            r.isBound = 1;
            if (document.readyState === "complete") {
                setTimeout(r.onReady, 1);
                return;
            }
            if (d.addEventListener && !b.opr) {
                d.addEventListener("DOMContentLoaded", r.onReady, false);
            }
            var apc = window.addthis_product;
            if (apc && apc.indexOf("f") > -1) {
                r.onReady();
                return;
            }
            if (b.msi && !b.ie9 && window == top) {
                (function () {
                    if (r.isReady) {
                        return;
                    }
                    try {
                        d.documentElement.doScroll("left");
                    } catch (error) {
                        setTimeout(arguments.callee, 0);
                        return;
                    }
                    r.onReady();
                })();
            }
            if (b.opr) {
                d.addEventListener("DOMContentLoaded", function () {
                    if (r.isReady) {
                        return;
                    }
                    for (var i = 0; i < d.styleSheets.length; i++) {
                        if (d.styleSheets[i].disabled) {
                            setTimeout(arguments.callee, 0);
                            return;
                        }
                    }
                    r.onReady();
                }, false);
            }
            if (b.saf) {
                var _af;
                (function () {
                    if (r.isReady) {
                        return;
                    }
                    if (d.readyState != "loaded" && d.readyState != "complete") {
                        setTimeout(arguments.callee, 0);
                        return;
                    }
                    if (_af === _1) {
                        var _b1 = d.gn("link");
                        for (var i = 0; i < _b1.length; i++) {
                            if (_b1[i].getAttribute("rel") == "stylesheet") {
                                _af++;
                            }
                        }
                        var _b3 = d.gn("style");
                        _af += _b3.length;
                    }
                    if (d.styleSheets.length != _af) {
                        setTimeout(arguments.callee, 0);
                        return;
                    }
                    r.onReady();
                })();
            }
            r.addLoad(r.onReady);
        }, append: function (fn, _b5) {
            r.bindReady();
            if (r.isReady) {
                fn.call(window, []);
            } else {
                r.readyList.push(function () {
                    return fn.call(window, []);
                });
            }
        }}, r = _a8, a = _a;
        _2a(_a, {plo: [], lad: function (x) {
            _a.plo.push(x);
        }});
        (function (b, d, c) {
            b.pub = function () {
                return _euc((w.addthis_config_msg || {}).pubid || (w.addthis_config_msg || {}).username || (w.addthis_config_msg || {}).pub || (w.addthis_config || {}).pubid || (w.addthis_config || {}).username || w.addthis_pub || "");
            };
            b.usu = function (e, g) {
                if (!w.addthis_share) {
                    w.addthis_share = {};
                }
                if (g || e != addthis_share.url) {
                    addthis_share.imp_url = 0;
                }
            };
            b.rsu = function () {
                var g = document, f = g.title, e = g.location ? g.location.href : "";
                if (_atc.ver >= 250 && addthis_share.imp_url && e && e != w.addthis_share.url && !(_a.util.ivc((g.location.hash || "").substr(1).split(",").shift()))) {
                    w.addthis_share.url = w.addthis_url = e;
                    w.addthis_share.title = w.addthis_title = f;
                    return 1;
                }
                return 0;
            };
            b.igv = function (e, f) {
                if (!w.addthis_config) {
                    w.addthis_config = {username: w.addthis_pub};
                } else {
                    if (addthis_config.data_use_cookies === false) {
                        _atc.xck = 1;
                    }
                }
                if (!w.addthis_share) {
                    w.addthis_share = {};
                }
                if (!addthis_share.url) {
                    if (!w.addthis_url && addthis_share.imp_url === _1) {
                        addthis_share.imp_url = 1;
                    }
                    addthis_share.url = (w.addthis_url || e || "").split("#{").shift();
                }
                if (!addthis_share.title) {
                    addthis_share.title = (w.addthis_title || f || "").split("#{").shift();
                }
            };
            if (!_atc.ost) {
                if (!w.addthis_conf) {
                    w.addthis_conf = {};
                }
                if (l && (l.href.indexOf("_at_test300") > -1 || l.href.indexOf("_addthis_upgrade_test") > -1)) {
                    _atc.ver = 300;
                }
                for (var a in addthis_conf) {
                    _atc[a] = addthis_conf[a];
                }
                _atc.ost = 1;
            }
        })(_a, _a.api, _a);
        (function (f, h, j) {
            var c = w.console, m = 0, a = (!c || typeof c.log === "undefined"), b = Array.prototype.slice, d = ["error", "warn", "info", "debug"], g = d.length;
            try {
                if (!a && l.hash.indexOf("atlog=1") > -1) {
                    m = 1;
                }
            } catch (k) {
            }
            f.log = {level: m};
            while (--g >= 0) {
                (function (e, n) {
                    f.log[n] = a ? function () {
                        return;
                    } : function () {
                        if (f.log.level <= 0) {
                            return;
                        }
                        var o = b.call(arguments), i = typeof c[n] === "function" ? c[n] : c.log;
                        o.unshift("[" + n + "]");
                        if (c && typeof i == "function") {
                            if (c.firebug) {
                                i.apply(w, o);
                            } else {
                                if (typeof i.apply == "function") {
                                    try {
                                        i.apply(c, o);
                                    } catch (p) {
                                        i("failed apply");
                                        i(o);
                                    }
                                } else {
                                    i(o);
                                }
                            }
                        } else {
                            if (!Function.prototype.bind && typeof c.log == "object") {
                                Function.prototype.call.call(c.log, c, b.call(arguments));
                            }
                        }
                    };
                })(g, d[g]);
            }
        })(_a, _a.api, _a);
        (function (b, f, c) {
            var h, g = document, a = b.util;
            b.ckv = a.fromKV(g.cookie, ";");
            function e(d) {
                return a.fromKV(g.cookie, ";")[d];
            }

            if (!b.cookie) {
                b.cookie = {};
            }
            b.cookie.rck = e;
        })(_a, _a.api, _a);
        (function (a, b, c) {
            var g = document, k = window, f = 0;

            function h() {
                if (f) {
                    return 1;
                }
                i("xtc", 1);
                if (1 == a.cookie.rck("xtc")) {
                    f = 1;
                }
                e("xtc", 1);
                return f;
            }

            function j(n) {
                if (_atc.xck) {
                    return;
                }
                var l, o, d, m = n || _a.dh || _a.du || (_a.dl ? _a.dl.hostname : "");
                if (m.indexOf(".gov") > -1 || m.indexOf(".mil") > -1) {
                    _atc.xck = 1;
                    return;
                }
                o = typeof(a.pub) === "function" ? a.pub() : a.pub;
                d = ["usarmymedia", "govdelivery"];
                for (l in d) {
                    if (o == d[l]) {
                        _atc.xck = 1;
                        break;
                    }
                }
            }

            function e(l, d) {
                if (g.cookie) {
                    g.cookie = l + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/" + (d ? "; domain=" + (a.bro.msi ? "" : ".") + "addthis.com" : "");
                }
            }

            function i(n, m, o, d, l) {
                if (!k.at_sub) {
                    j();
                }
                if (!_atc.xck && (!d || (k.addthis_config || {}).data_use_cookies_ondomain !== false) && (k.addthis_config || {}).data_use_cookies !== false) {
                    if (!l) {
                        l = new Date();
                        l.setYear(l.getFullYear() + 2);
                    }
                    document.cookie = n + "=" + m + (!o ? "; expires=" + l.toUTCString() : "") + "; path=/;" + (!d ? " domain=" + (a.bro.msi ? "" : ".") + "addthis.com" : "");
                }
            }

            if (!a.cookie) {
                a.cookie = {};
            }
            a.cookie.sck = i;
            a.cookie.kck = e;
            a.cookie.cww = h;
            a.cookie.gov = j;
        })(_a, _a.api, _a);
        (function (e, u, v) {
            var g, n = {high: 4, med: 2}, m = (document.location.href.indexOf("addthis.com") > -1), p = 10, h = 20, o = (!m ? "__at" : "") + "ssc", s = {}, c = false, q = [], b = 0, d, x = 0;

            function y() {
                b = 0;
                s = {};
                q = [];
            }

            function j(z) {
                if (z > n.high) {
                    return 3;
                } else {
                    if (z > n.med) {
                        return 2;
                    }
                }
                return 1;
            }

            function a() {
                var A = [], z;
                l();
                for (z in s) {
                    A.push({name: z, score: j(s[z])});
                }
                A.sortOn(function (C, B) {
                    return C.score > B.score ? 1 : -1;
                });
                return A;
            }

            function f() {
                l();
                var A = {}, z;
                for (z in s) {
                    A[z] = j(s[z]);
                }
                return A;
            }

            function l() {
                if (!b) {
                    var z = (e.cookie.rck(o) || "").split(","), B, D, C, A;
                    for (B = 0, ssc_len = z.length; B < ssc_len; B++) {
                        D = z[B].split(";");
                        C = D.pop();
                        A = (D.pop() || "");
                        s[A] = C;
                        q.push(A);
                        if (C > x) {
                            x = C;
                            d = A;
                        }
                    }
                    b = 1;
                }
            }

            function t(z) {
                return s.hasOwnProperty(z);
            }

            function k() {
                var z = false, B, A = (e.cookie.rck("sshs") || "").split(",");
                while (z === false && A.length != 0) {
                    B = A.pop();
                    if (s.hasOwnProperty(B) && s[B] == Math.min(s)) {
                        z = B;
                    }
                }
                if (z === false) {
                    z = q.pop();
                }
                delete s[z];
            }

            function i() {
                var B = {}, z = [], A;
                for (A in s) {
                    if (s.hasOwnProperty(A)) {
                        if ((s[A] / 2) >= 1) {
                            B[A] = parseInt(s[A] / 2);
                            z.push(A);
                        }
                    }
                }
                s = B;
                q = z;
            }

            function w(z) {
                l();
                if (typeof(z) !== "string") {
                    return false;
                }
                z = z.replace(/_[a-zA-Z0-9]*/i, "");
                if (c === false) {
                    c = true;
                    if ((q.length + 1) >= p && !t(z)) {
                        k();
                    }
                    if (!t(z)) {
                        s[z] = "1";
                    } else {
                        s[z]++;
                    }
                    if (s[z] >= h) {
                        i();
                    }
                    var A = r(s);
                    e.cookie.sck(o, escape(A), false, !m);
                }
            }

            function r(B) {
                var z = [], A, C;
                if (typeof B !== "object") {
                    return false;
                }
                for (C in B) {
                    if (C.length > 1) {
                        z.push(C + ";" + B[C]);
                    }
                }
                A = z.join(",");
                return A;
            }

            if (!e.cookie) {
                e.cookie = {};
            }
            e.cookie.ssc = {reset: y, get: f, getServices: a, update: w};
        })(_a, _a.api, _a);
        (function (f, i, k) {
            var d = new Date(), b = "__attag", o = "|", l = ",", m = 0, e = 0, q = [];

            function a() {
                return q.join(l);
            }

            function h() {
                if (!m) {
                    var r = f.cookie.rck(b) || "";
                    if (r) {
                        q = (_duc(r)).split(l);
                    }
                    m = 1;
                }
            }

            function n() {
                h();
                if (q.length) {
                    f.cookie.sck(b, _euc(a()), 0, true);
                }
            }

            function c() {
                h();
                return q;
            }

            function p(r) {
                h();
                if (typeof(r) == "string") {
                    r = [r];
                }
                for (var t = 0; t < q.length; t++) {
                    for (var s = 0; s < r.length; s++) {
                        if (q[t] == r[s]) {
                            return;
                        }
                    }
                }
                for (var s = 0; s < r.length; s++) {
                    q.push(r[s]);
                }
                n();
            }

            function g(r) {
                for (var s = 0; s < q.length; s++) {
                    if (q[s] == r) {
                        q.splice(s, 1);
                        break;
                    }
                }
                n();
            }

            function j() {
                q = [];
            }

            f.cookie = f.cookie || {};
            f.cookie.tag = {reset: j, add: p, remove: g, get: c, toKV: a};
        })(_a, _a.api, _a);
        (function (d, q, s) {
            var u = new Date(), m = ((document.location.href.indexOf(_atr) == -1) ? "__at" : "") + "uvc", l = "|", p = ",", b = 0, n = 0, f = {high: 250, med: 75}, i = [];

            function j() {
                return i.slice(-5).join(p);
            }

            function k() {
                if (!b) {
                    var x = d.cookie.rck(m) || "";
                    if (x) {
                        i = (_duc(x)).split(p);
                    }
                    b = 1;
                }
            }

            function e(A) {
                var z = new Date(A.getFullYear(), 0, 1), x, y, B;
                x = z.getDay();
                x = (x >= 0 ? x : x + 7);
                y = Math.floor((A.getTime() - z.getTime() - (A.getTimezoneOffset() - z.getTimezoneOffset()) * 60000) / 86400000) + 1;
                if (x < 4) {
                    B = Math.floor((y + x - 1) / 7) + 1;
                    if (B > 52) {
                        nYear = new Date(A.getFullYear() + 1, 0, 1);
                        nday = nYear.getDay(A);
                        nday = nday >= 0 ? nday : nday + 7;
                        B = nday < 4 ? 1 : 53;
                    }
                } else {
                    B = Math.floor((y + x - 1) / 7);
                }
                return B;
            }

            function c(B, z, A) {
                for (var y = 0; y < z; y++) {
                    var x = A + y;
                    if (x >= 51) {
                        x = 1;
                    }
                    B.push("0" + l + x);
                }
            }

            function w() {
                if (!n) {
                    var x = e(u);
                    k();
                    g(x);
                    n = 1;
                }
            }

            function g(y) {
                var x, z;
                if (!i.length) {
                    i.push("1" + l + y);
                } else {
                    x = i[i.length - 1];
                    z = parseInt(x.split(l).pop(), 10);
                    if (z == y) {
                        i[i.length - 1] = (parseInt(x.split(l).shift(), 10) + 1) + l + y;
                    } else {
                        if (z + 1 == y || z >= 51) {
                            i.push("1" + l + y);
                        } else {
                            if (z < y) {
                                c(i, y - z - 1, z + 1);
                                i.push("1" + l + y);
                            } else {
                                if (z > y) {
                                    i = [];
                                    i.push("1" + l + y);
                                }
                            }
                        }
                    }
                    if (i.length > 5) {
                        i.slice(-5);
                    }
                }
            }

            function a(x) {
                u = x;
            }

            function r(x) {
                k();
                if (i.length) {
                    d.cookie.sck(m, _euc(j()), 0, x);
                }
            }

            function h(x) {
                k();
                w();
                r(x);
            }

            function t() {
                var y = [];
                k();
                for (var x = 0; x < i.length; x++) {
                    y.push(i[x].split(l).shift());
                }
                return y.slice(-5);
            }

            function o() {
                var y = t(), z = 0;
                for (var x = 0; x < y.length; x++) {
                    z += y[x];
                }
                if (z > f.high) {
                    return 3;
                } else {
                    if (z > f.med) {
                        return 2;
                    } else {
                        if (z > n) {
                            return 1;
                        } else {
                            return 0;
                        }
                    }
                }
            }

            function v() {
                b = 0;
                n = 0;
                i = [];
            }

            d.cookie = d.cookie || {};
            d.cookie.view = {_sd: a, _inc: g, reset: v, update: h, get: t, cla: o, toKV: j};
        })(_a, _a.api, _a);
        (function (e, u, v) {
            var g, n = {high: 4, med: 2}, m = (document.location.href.indexOf("addthis.com") > -1), p = 10, h = 20, o = (!m ? "__at" : "") + "ssc", s = {}, c = false, q = [], b = 0, d, x = 0;

            function y() {
                b = 0;
                s = {};
                q = [];
            }

            function j(z) {
                if (z > n.high) {
                    return 3;
                } else {
                    if (z > n.med) {
                        return 2;
                    }
                }
                return 1;
            }

            function a() {
                var A = [], z;
                l();
                for (z in s) {
                    A.push({name: z, score: j(s[z])});
                }
                A.sortOn(function (C, B) {
                    return C.score > B.score ? 1 : -1;
                });
                return A;
            }

            function f() {
                l();
                var A = {}, z;
                for (z in s) {
                    A[z] = j(s[z]);
                }
                return A;
            }

            function l() {
                if (!b) {
                    var z = (e.cookie.rck(o) || "").split(","), B, D, C, A;
                    for (B = 0, ssc_len = z.length; B < ssc_len; B++) {
                        D = z[B].split(";");
                        C = D.pop();
                        A = (D.pop() || "");
                        s[A] = C;
                        q.push(A);
                        if (C > x) {
                            x = C;
                            d = A;
                        }
                    }
                    b = 1;
                }
            }

            function t(z) {
                return s.hasOwnProperty(z);
            }

            function k() {
                var z = false, B, A = (e.cookie.rck("sshs") || "").split(",");
                while (z === false && A.length != 0) {
                    B = A.pop();
                    if (s.hasOwnProperty(B) && s[B] == Math.min(s)) {
                        z = B;
                    }
                }
                if (z === false) {
                    z = q.pop();
                }
                delete s[z];
            }

            function i() {
                var B = {}, z = [], A;
                for (A in s) {
                    if (s.hasOwnProperty(A)) {
                        if ((s[A] / 2) >= 1) {
                            B[A] = parseInt(s[A] / 2);
                            z.push(A);
                        }
                    }
                }
                s = B;
                q = z;
            }

            function w(z) {
                l();
                if (typeof(z) !== "string") {
                    return false;
                }
                z = z.replace(/_[a-zA-Z0-9]*/i, "");
                if (c === false) {
                    c = true;
                    if ((q.length + 1) >= p && !t(z)) {
                        k();
                    }
                    if (!t(z)) {
                        s[z] = "1";
                    } else {
                        s[z]++;
                    }
                    if (s[z] >= h) {
                        i();
                    }
                    var A = r(s);
                    e.cookie.sck(o, escape(A), false, !m);
                }
            }

            function r(B) {
                var z = [], A, C;
                if (typeof B !== "object") {
                    return false;
                }
                for (C in B) {
                    if (C.length > 1) {
                        z.push(C + ";" + B[C]);
                    }
                }
                A = z.join(",");
                return A;
            }

            if (!e.cookie) {
                e.cookie = {};
            }
            e.cookie.ssc = {reset: y, get: f, getServices: a, update: w};
        })(_a, _a.api, _a);
        (function (d, g, e) {
            var c = d.util, a = {}, b = {};
            if (!d.cbs) {
                d.cbs = {};
            }
            function f(k, j, n, l, h) {
                j = (_euc(j)).replace(/[0-3][A-Z]|[^a-zA-Z0-9]/g, "").toLowerCase();
                a[j] = a[j] || 0;
                var i = a[j]++, m = k + "_" + j + (!h ? i : "");
                if (!_a.cbs[m]) {
                    _a.cbs[m] = function () {
                        if (b[m]) {
                            clearTimeout(b[m]);
                        }
                        n.apply(this, arguments);
                    };
                }
                _a.cbs["time_" + m] = (new Date()).getTime();
                if (l) {
                    clearTimeout(b[m]);
                    b[m] = setTimeout(l, 10000);
                }
                return"_ate.cbs." + _euc(m);
            }

            c.scb = f;
        })(_a, _a.api, _a);
        (function (b, d, c) {
            function e() {
                var k = a(navigator.userAgent, 16), f = ((new Date()).getTimezoneOffset()) + "" + navigator.javaEnabled() + (navigator.userLanguage || navigator.language), h = w.screen.colorDepth + "" + w.screen.width + w.screen.height + w.screen.availWidth + w.screen.availHeight, g = navigator.plugins, l = g.length;
                if (l > 0) {
                    for (var j = 0; j < Math.min(10, l); j++) {
                        if (j < 5) {
                            f += g[j].name + g[j].description;
                        } else {
                            h += g[j].name + g[j].description;
                        }
                    }
                }
                return k.substr(0, 2) + a(f, 16).substr(0, 3) + a(h, 16).substr(0, 3);
            }

            function a(h, j) {
                var f = 291;
                if (h) {
                    for (var g = 0; g < h.length; g++) {
                        f = (f * (h.charCodeAt(g) + g) + 3) & 1048575;
                    }
                }
                return(f & 16777215).toString(j || 32);
            }

            b.mun = a;
            b.gub = e;
        })(_a, _a.api, _a);
        (function (d, e, h) {
            var c, m = d.util, k = 4294967295, b = new Date().getTime();

            function i() {
                return((b / 1000) & k).toString(16) + ("00000000" + (Math.floor(Math.random() * (k + 1))).toString(16)).slice(-8);
            }

            function a(n) {
                return l(n) ? (new Date((parseInt(n.substr(0, 8), 16) * 1000))) : new Date();
            }

            function j(n) {
                var o = a();
                return((o.getTime() - 1000 * 86400) > (new Date()).getTime());
            }

            function g(n, p) {
                var o = a(n);
                return(((new Date()).getTime() - o.getTime()) > p * 1000);
            }

            function l(n) {
                return n && n.match(/^[0-9a-f]{16}$/) && !j(n);
            }

            function f(n) {
                return l(n) && n.match(/^0{16}$/);
            }

            m.cuid = i;
            m.ivc = l;
            m.iooc = f;
            m.ioc = g;
        })(_a, _a.api, _a);
        (function (c, f, e) {
            function b(g) {
                if (!g) {
                    return"";
                } else {
                    if (g.indexOf("%") > -1) {
                        g = _duc(g);
                    }
                }
                g = _a.util.atob(g.split(",")[1]);
                return g;
            }

            function d(h) {
                var j = {}, g, i;
                j.zip = h.substring(0, 5);
                j.continent = h.substring(5, 7);
                j.country = h.substring(7, 9);
                j.region = h.substring(9, 11);
                g = h.substring(11, 15);
                if (g != "0000") {
                    j.lat = (parseInt(g) / 10 - 180).toFixed(1);
                }
                i = h.substring(15, 19);
                if (i != "0000") {
                    j.lon = (parseInt(i) / 10 - 180).toFixed(1);
                }
                j.dma = h.substring(19, 22);
                j.msa = h.substring(22, 26);
                j.network_type = h.substring(26, 27);
                j.throughput = h.substring(27, 28);
                return j;
            }

            function a(j, k) {
                var h, g;
                j = j.split(",");
                for (h = 0; h < j.length; h++) {
                    g = j[h].replace(/ /g, "");
                    if (k.zip == g || k.continent == g || k.country == g || k.region == g) {
                        return 1;
                    }
                }
                return 0;
            }

            c.util = c.util || {};
            c.util.geo = {dec: b, parse: d, isin: a};
        })(_a, _a.api, _a);
        (function (a, c, b) {
            function d(e) {
                return e.split("//").pop().split("/").shift().split("#").shift().split("?").shift().split(".").slice(-2).join(".");
            }

            a.util = a.util || {};
            a.util.host = d;
        })(_a, _a.api, _a);
        (function (c, f, i) {
            var l = {}, b = [], j = {}, e = 0;

            function m(r, q) {
                if (b.length == 0) {
                    b = d.gn("script");
                }
                for (var o = 0; o < b.length; o++) {
                    var p = (b[o].src || "");
                    if (p) {
                        p = _a.mun(p);
                    }
                    if ((b[o].src || "").indexOf(q || "//s7.addthis.com/js/250/addthis_widget.js") > -1 && !j[p]) {
                        j[p] = 1;
                        r(h(b[o].src));
                    }
                }
            }

            function a(r) {
                var q = _a.mun((r.adurl || "") + (r.adev || ""));
                if (j[q]) {
                    return;
                }
                j[q] = 1;
                if (r.adurl && typeof(r.adurl) == "string") {
                    _a.pixu = r.adurl;
                    e = 1;
                }
                if (r.adev && typeof(r.adev) == "string") {
                    var o = r.adev;
                    try {
                        o = _duc(o);
                    } catch (p) {
                    }
                    o = o.split(";");
                    e = 1;
                    _a.ed.addEventListener("addthis-internal.data.uid", function () {
                        for (var u = 0; u < o.length; u++) {
                            var s = o[u].split(","), v = {};
                            for (var t = 0; t < s.length; t++) {
                                var x = s[t].split("=");
                                v[x[0]] = x[1];
                            }
                            if (w.addthis) {
                                w.addthis.ad.event(v);
                            }
                        }
                    });
                }
                return e;
            }

            function h(r, o) {
                var t = r.indexOf("#") > -1 && !o ? r.replace(/^[^\#]+\#?|^\#?/, "") : r.replace(/^[^\?]+\??|^\??/, ""), u = c.util.fromKV(t);
                return u;
            }

            function g() {
                var o = d.getElementsByTagName("script");
                return o[o.length - 1];
            }

            function k(o) {
                if (l[o]) {
                    return l[o];
                } else {
                    var q = document.gn("script");
                    for (var p = 0; p < q.length; p++) {
                        l[q[p].src.split(".").slice(-2).shift()] = q[p];
                        if ((q[p].src || "").indexOf(o) > -1) {
                            return q[p];
                        }
                    }
                }
                return null;
            }

            function n(u) {
                var q = document.gn("script"), v = q.length, r = q[v - 1], t = h(r.src);
                if (u || (r.src && r.src.indexOf("addthis") == -1)) {
                    for (var o = 0; o < v; o++) {
                        if ((q[o].src || "").indexOf(u || "addthis.com") > -1) {
                            l[q[o].src.split(".").slice(-2).shift()] = q[o];
                            t = h(q[o].src);
                            break;
                        }
                    }
                }
                return t;
            }

            if (!c.util) {
                c.util = {};
            }
            c.util.gsp = n;
            c.util.gst = k;
            c.util.gtt = g;
            c.util.ghp = h;
            c.util.pae = a;
            c.util.pas = m;
        })(_a, _a.api, _a);
        (function (e, g, f) {
            var d = e.util, b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=";

            function a(k) {
                var j = "", n, l, h, p, o, m = 0;
                if (/[0-9a-fA-F]+/.test(k)) {
                    while (m < k.length) {
                        n = parseInt(k.charAt(m++), 16);
                        l = parseInt(k.charAt(m++), 16);
                        h = parseInt(k.charAt(m++), 16);
                        p = (n << 2) | (isNaN(h) ? l & 3 : (l >> 2));
                        o = ((l & 3) << 4) | h;
                        j += b.charAt(p) + (isNaN(h) ? "" : b.charAt(o));
                    }
                }
                return j;
            }

            function c(k) {
                var j = "", n, l, h, p, o, m = 0;
                while (m < k.length) {
                    p = b.indexOf(k.charAt(m++));
                    o = m >= k.length ? NaN : b.indexOf(k.charAt(m++));
                    n = p >> 2;
                    l = isNaN(o) ? (p & 3) : (((p & 3) << 2) | (o >> 4));
                    h = o & 15;
                    j += n.toString(16) + l.toString(16) + (isNaN(o) ? "" : h.toString(16));
                }
                return j;
            }

            d.hbtoa = a;
            d.atohb = c;
        })(_a, _a.api, _a);
        (function (c, d, e) {
            var j = c.util, a = {};

            function g(k) {
                if (typeof k == "string") {
                    var l = k.substr(0, 1);
                    if (l == "#") {
                        k = document.getElementById(k.substr(1));
                    } else {
                        if (l == ".") {
                            k = i(body, "*", k.substr(1));
                        }
                    }
                }
                if (!k) {
                    k = [];
                } else {
                    if (!(k instanceof Array)) {
                        k = [k];
                    }
                }
                return k;
            }

            function h(l, k) {
                l = (l || {}).parentNode;
                if (!k || !l) {
                    return l;
                }
                if (k.indexOf(".") === 0) {
                    k = k.substr(1);
                    while (l.parentNode && (l.className || "").indexOf(k) < 0) {
                        l = l.parentNode;
                    }
                } else {
                    if (k.indexOf("#") === 0) {
                        k = k.substr(1);
                        while (l.parentNode && (l.id || "").indexOf(k) < 0) {
                            l = l.parentNode;
                        }
                    }
                }
                return l;
            }

            function f(k, v, t, r, u) {
                v = v.toUpperCase();
                var s = document, p = (k == body && a[v] ? a[v] : (k || body || s.body).getElementsByTagName(v)), n = [], q, m;
                if (k == body) {
                    a[v] = p;
                }
                if (u) {
                    for (q = 0; q < p.length; q++) {
                        m = p[q];
                        if ((m.className || "").indexOf(t) > -1) {
                            n.push(m);
                        }
                    }
                } else {
                    t = t.replace(/\-/g, "\\-");
                    var l = new RegExp("\\b" + t + (r ? "\\w*" : "") + "\\b");
                    for (q = 0; q < p.length; q++) {
                        m = p[q];
                        if (l.test(m.className)) {
                            n.push(m);
                        }
                    }
                }
                return(n);
            }

            function b(p, t, q) {
                p = p || document;
                if (t == "*") {
                    t = null;
                }
                var l = (document.getElementsByClassName ? function (v, u) {
                    return v.getElementsByClassName(q);
                } : (document.querySelectorAll ? function (v, u) {
                    return document.querySelectorAll(q);
                } : function () {
                    return[];
                })), k = l(p, q), s = (t) ? new RegExp("\\b" + t + "\\b", "i") : null, m = [], o;
                for (var n = 0, r = k.length; n < r; n += 1) {
                    o = k[n];
                    if (!s || s.test(o.nodeName)) {
                        m.push(o);
                    }
                }
                return m;
            }

            var i = ((document.getElementsByClassName && typeof(document.getElementsByClassName) == "function") && (!_a.bro.msi || document.documentMode >= 9) || (document.querySelectorAll && typeof(document.querySelectorAll) == "function" && (!_a.bro.msi || document.documentMode >= 8))) ? b : f;
            j.gebcn = f;
            j.select = g;
            j.parent = h;
        })(_a, _a.api, _a);
        var _1da = function (a) {
            a = a.slice(1).split("&");
            var c = {}, b;
            u.each(a, function (f, d) {
                b = d.split("=");
                if (b.length > 1) {
                    c[b[0]] = b[1];
                }
            });
            return c;
        }, _1df = A.params = _1da(l.search);
        u.misc.makeParams = _1da;
        if ("at_tags"in _1df) {
            _1df.at_tag = _1df.at_tags;
        }
        if ("at_tag"in _1df) {
            _6.user.ready(function () {
                _a.cookie.tag.add(_6.params.at_tag);
            });
        }
        if ("at_welcome"in _1df) {
            if (!_duc(_1df.at_welcome).match(/\{/)) {
                _6.welcome_rule = _duc(_1df.at_welcome);
            } else {
                try {
                    _6.bar.initialize(_duc(_1df.at_welcome));
                } catch (e) {
                }
            }
        }
        _6.tip = function (e) {
            if (typeof e !== "object" || !("target"in e && "text"in e)) {
                return;
            }
            var a = ".addthis.tip{position:absolute;z-index:20;} .addthis.tip .tip-body {position:relative;border:1px solid #ECE3E3;width:240px;box-shadow: 0px 0px 2px 0px #999;background-color:#F3F3F3;top:20px;} .addthis.tip .tip-body p {margin:1.5em;font-size:13px;font-family:arial;z-index:10;} .addthis.tip .tip-point {position:absolute;width:38px;height:20px;top:4px;margin:auto;width:240px;background-image:url('http://cache.addthiscdn.com/downloads/img/surface/tip-pnt0.png');background-repeat:no-repeat;background-position:center; z-index:13;}";
            if (a) {
                var d = {style: {type: "text/css"}};
                if (!_a.bro.ie) {
                    d.style.html = a;
                }
                var c = _a.util.json2html(d);
                document.getElementsByTagName("head")[0].appendChild(c);
                if (_a.bro.ie) {
                    c.styleSheet.cssText = a;
                }
            }
            var b = _a.util.json2html({"div.addthis.tip": [
                {"div.tip-point": ""},
                {"div.tip-body": {p: e.text}}
            ]});
            document.getElementsByTagName("body")[0].appendChild(b);
            target = e.target;
            b.style.left = target.offsetLeft + target.offsetWidth / 2 - b.offsetWidth / 2 + "px";
            b.style.top = target.offsetTop + target.offsetHeight + "px";
            return b;
        };
        (function (f, t, v) {
            var w = f, j = new Date().getTime(), s = function () {
                return Math.floor(Math.random() * 4294967295).toString(36);
            }, x = function () {
                return Math.floor((new Date().getTime() - j) / 100).toString(16);
            }, g = 0, i = function (a) {
                if (g === 0) {
                    w.sid = g = (a || w.util.cuid());
                }
                return g;
            }, d = null, c = function (a, y, z) {
                if (d !== null) {
                    clearTimeout(d);
                }
                if (a) {
                    d = setTimeout(function () {
                        y(!!z);
                    }, _a.wait);
                }
            }, o = function (y, a) {
                return _euc(y) + "=" + _euc(a) + ";" + x();
            }, n = 1, h = function (z, B) {
                if (typeof z == "object") {
                    z = _a.util.toKV(z);
                }
                var y = (z || "").split("?"), a = y.shift(), A = (y.pop() || "").split("&");
                return B(a, A);
            }, k = function (a, y, A, z) {
                if (!y) {
                    y = {};
                }
                if (!y.remove) {
                    y.remove = [];
                }
                if (y.remove.push) {
                    y.remove.push("sms_ss");
                    y.remove.push("at_xt");
                    y.remove.push("at_pco");
                    y.remove.push("fb_ref");
                    y.remove.push("fb_source");
                }
                if (y.remove) {
                    a = u(a, y.remove);
                }
                if (y.clean) {
                    a = l(a);
                }
                if (y.defrag) {
                    a = e(a);
                }
                if (y.add) {
                    a = m(a, y.add, A, z);
                }
                return a;
            }, m = function (A, C, B, y) {
                var a = {}, z;
                if (C) {
                    for (z in C) {
                        if (A.indexOf(z + "=") > -1) {
                            continue;
                        }
                        a[z] = p(C[z], A, B, y);
                    }
                    C = _a.util.toKV(a);
                }
                return A + (C.length ? ((A.indexOf("?") > -1 ? "&" : "?") + C) : "");
            }, p = function (z, y, A, a) {
                return z.replace(/\{\{service\}\}/g, _euc(a || "")).replace(/\{\{code\}\}/g, _euc(a || "")).replace(/\{\{title\}\}/g, _euc((A || addthis_share).title)).replace(/\{\{url\}\}/g, _euc(y));
            }, u = function (y, A) {
                var a = {}, B = A || [], z;
                for (z = 0; z < B.length; z++) {
                    a[B[z]] = 1;
                }
                return h(y, function (C, F) {
                    var G = [], D, E;
                    if (F) {
                        for (D in F) {
                            if (typeof(F[D]) == "string") {
                                E = (F[D] || "").split("=");
                                if (E.length != 2 && F[D]) {
                                    G.push(F[D]);
                                } else {
                                    if (a[E[0]]) {
                                        continue;
                                    } else {
                                        if (F[D]) {
                                            G.push(F[D]);
                                        }
                                    }
                                }
                            }
                        }
                        C += (G.length ? ("?" + G.join("&")) : "");
                    }
                    return C;
                });
            }, q = function (a) {
                a = a || "";
                if (_a.bro.msi && a instanceof Object && !a.length) {
                    var z = "";
                    _a.util.each(a, function (B, A) {
                        if (!z) {
                            z = B + "=" + A;
                        } else {
                            z += "&" + B + "=" + A;
                        }
                    });
                    a = z;
                }
                if (!a.length) {
                    a = "";
                }
                var y = a.split("#").pop().split(",").shift().split("=").pop();
                if (_a.util.ivc(y)) {
                    return a.split("#").pop().split(",");
                }
                return[""];
            }, e = function (a) {
                if (!a.length) {
                    a = "";
                }
                var y = q(a).shift().split("=").pop();
                if (_a.util.ivc(y) || a.indexOf("#at_pco=") > -1) {
                    return a.split("#").shift();
                } else {
                    y = a.split("#").slice(1).join("#").split(";").shift();
                    if (y.split(".").length == 3) {
                        y = y.split(".").slice(0, -1).join(".");
                    }
                    if (y.length == 12 && y.substr(0, 1) == "." && (/[a-zA-Z0-9\-_]{11}/).test(y.substr(1))) {
                        return a.split("#").shift();
                    }
                }
                return a;
            }, l = function (a) {
                if (!a.length) {
                    a = "";
                }
                return h(a, function (z, C) {
                    var y = z.indexOf(";jsessionid"), D = [], A, B;
                    if (y > -1) {
                        z = z.substr(0, y);
                    }
                    if (C) {
                        for (A in C) {
                            if (typeof(C[A]) == "string") {
                                B = (C[A] || "").split("=");
                                if (B.length == 2) {
                                    if (B[0].indexOf("utm_") === 0 || B[0] == "gclid" || B[0] == "sms_ss" || B[0] == "at_xt" || B[0] == "fb_ref" || B[0] == "fb_source") {
                                        continue;
                                    }
                                }
                                if (C[A]) {
                                    D.push(C[A]);
                                }
                            }
                        }
                        z += (D.length ? ("?" + D.join("&")) : "");
                    }
                    return z;
                });
            }, b = function () {
                var a = (typeof(w.pub || "") == "function" ? w.pub() : w.pub) || "unknown";
                return"AT-" + a + "/-/" + w.ab + "/" + i() + "/" + (n++) + (w.uid !== null ? "/" + w.uid : "");
            }, r = function (A) {
                A = A.split("/");
                var y = A.shift(), D = A.shift(), z = A.shift(), B = A.shift(), C = A.shift(), a = A.shift();
                if (z) {
                    w.ab = w.ab;
                }
                if (B) {
                    w.sid = g = B;
                }
                if (C) {
                    n = C;
                }
                if (a) {
                    w.uid = a;
                }
            };
            if (!_a.track) {
                _a.track = {};
            }
            f.util.extend(_a.track, {fcv: o, ran: s, rup: u, aup: m, cof: e, gof: q, clu: l, mgu: k, ssid: i, sta: b, uns: r, sxm: c});
        })(_a, _a.api, _a);
        (function (e, o, p) {
            var q = document, t = ".", k = ";", g = ".", f = t.length, l = 0, s = {wpp: 1, blg: 1};

            function b(d) {
                var u = d.split(";").shift();
                if (u.split(".").length == 3) {
                    u = u.split(".").slice(0, -1).join(".");
                }
                if (u.length == 12 && u.substr(0, 1) == "." && (/[a-zA-Z0-9\-_]{11}/).test(u.substr(1))) {
                    return 1;
                }
                return 0;
            }

            function n(d) {
                return(d.length == (11 + f) && (d.substr(0, f) == t) && (/[a-zA-Z0-9\-_]{11}/).test(d.substr(f)));
            }

            function r(O, M) {
                if (!O) {
                    O = document.location;
                }
                if (!M) {
                    M = q.referer || q.referrer || "";
                }
                var N, U, F, S, I, A = 0, B = 0, K = O ? O.href : "", H = (K || "").split("#").shift(), v = O.hash.substr(1), J = _a.util.ghp(O.search, 1), L = _a.util.ghp(O.hash), E = L.at_st, Q = L.at_pco, x = J.sms_ss, D = J.fb_ref, d = J.at_xt, T, y = J.at_st, V, R, C, G, z, u, P;
                if (!E) {
                    if (n(v)) {
                        V = _a.util.atohb(v.substr(f));
                        I = V.substr(8, 8);
                        E = V.substr(0, 8) + "00000000,";
                        E += parseInt(V.substr(16), 10);
                    }
                }
                if (D && !E) {
                    R = g;
                    G = D.split(R);
                    if (G.length < 2 && D.indexOf("_") > -1) {
                        R = "_";
                        G = D.split(R);
                    }
                    z = G.length > 1 ? G.pop() : "";
                    u = G.join(R);
                    if (!n(u)) {
                        u = D;
                        z = "";
                    }
                    if (n(u)) {
                        V = _a.util.atohb(u.substr(f));
                        d = V.substr(0, 16) + "," + parseInt(V.substr(16), 10);
                        x = "facebook_" + (z || "like");
                    } else {
                        T = D.split("=").pop().split(g);
                        if (T.length == 2 && _a.util.ivc(T[0])) {
                            d = T.join(",");
                            x = "facebook_" + (z || "like");
                        }
                    }
                }
                E = (E && _a.util.ivc(E.split(",").shift())) ? E : "";
                if (!d) {
                    R = (v.indexOf(k) > -1) ? k : g;
                    C = v.substr(f).split(R);
                    if (C.length == 2 && n(v.substr(0, 1) + C[0])) {
                        V = _a.util.atohb(C[0]);
                        d = V.substr(0, 16) + "," + parseInt(V.substr(16), 10);
                        x = C[1];
                        A = 1;
                    }
                }
                if (Q) {
                    F = Q;
                }
                if (E) {
                    B = parseInt(E.split(",").pop()) + 1;
                    U = E.split(",").shift();
                } else {
                    if (K.indexOf(_atd + "book") == -1 && H != M) {
                        if (d) {
                            P = d.split(",");
                            N = _duc(P.shift());
                            if (N.indexOf(",") > -1) {
                                P = N.split(",");
                                N = P.shift();
                            }
                        } else {
                            if (y) {
                                P = y.split(",");
                                S = _duc(P.shift());
                                if (S.indexOf(",") > -1) {
                                    P = S.split(",");
                                    S = P.shift();
                                }
                            }
                        }
                        if (P && P.length) {
                            B = Math.min(3, parseInt(P.pop()) + 1);
                        }
                    }
                }
                if (!_a.util.ivc(U)) {
                    U = null;
                }
                if (!_a.util.ivc(S)) {
                    S = null;
                }
                x = (x || "").split("#").shift().split("?").shift();
                return{rsi: U, cfc: F, hash: A, rsiq: S, fuid: I, rxi: N, rsc: x, gen: B};
            }

            function i(d) {
                d = d || window.addthis_config;
                return!d || (d.data_track_clickback !== false && d.data_track_linkback !== false);
            }

            function c(v, d) {
                if (!d || (d.data_track_clickback !== false && d.data_track_linkback !== false)) {
                    if (l) {
                        return true;
                    }
                    if (_atc.ver >= 250) {
                        return(l = true);
                    }
                    v = (v || w.addthis_product || "").split(",");
                    for (var u = 0; u < v.length; u++) {
                        if (s[v[u].split("-").shift()]) {
                            return(l = true);
                        }
                    }
                }
                return false;
            }

            function h(d, u) {
                d = d || _a.util.cuid();
                return t + _a.util.hbtoa(d + Math.min(3, u || 0));
            }

            function j(u, v, d) {
                d = d || _a.util.cuid();
                return u.indexOf("#") > -1 ? u : u + "#" + h((v ? d : d.substr(0, 8) + _a.gub()), (a.smd || {}).gen) + (v ? g + v : "");
            }

            function m(v) {
                var u, y, A, B, z, d, x;
                if (v.indexOf("#") > -1) {
                    z = v.split("#").slice(1).shift();
                    if (b(z)) {
                        d = z.substr(1).split(".");
                        x = (d.length) ? d.shift() : "";
                        y = (d.length) ? d.pop() : "";
                        if (x) {
                            x = _a.util.atohb(x);
                            u = x.substr(0, 16);
                            A = parseInt(x.substr(16), 10);
                            if (!isNaN(A)) {
                                B = B || {};
                                B.gen = A;
                            }
                        }
                        if (_a.util.ivc(u)) {
                            B = B || {};
                            B.xid = u;
                        }
                        if (y.search(/^[a-zA-Z0-9_]+$/) != -1) {
                            B = B || {};
                            B.rsc = y;
                        }
                    }
                }
                return B;
            }

            _a.extend(_a.track, {cur: j, dcu: m, gcc: h, cpf: t, ctp: c, eop: r, ich: b, ict: i});
        })(_a, _a.api, _a);
        (function (c, e, d) {
            function g(h) {
                if (h == "t.co") {
                    return"twitter";
                }
                var i, j;
                for (i in c.services.map) {
                    j = c.services.map[i];
                    if (j === "") {
                        j = i + ".com";
                    }
                    if (h.indexOf(j) != -1) {
                        return i;
                    }
                }
                return;
            }

            function f(i) {
                var j, l, k, h;
                i = _duc(i);
                i = i.toLowerCase();
                i = i.replace(/[,;:\+\|]/g, " ");
                i = i.replace(/[^a-z0-9. '\-]/g, "");
                i = i.replace(/\s+/g, " ");
                i = i.replace(/\s+$/g, "");
                l = [];
                k = i.split(" ");
                for (h = 0; h < k.length; h++) {
                    j = k[h];
                    if (j.charAt(0) == "-") {
                        continue;
                    } else {
                        if (/'s$/.test(j)) {
                            l.push(j.substring(0, j.length - 2).replace(/[-']/g, "") + "'s");
                        } else {
                            l = l.concat(j.replace(/'/g, "").split("-"));
                        }
                    }
                }
                return l;
            }

            function b() {
                var j = c.dr, i = (document.location || {}).href || "", n = c.ad.clr(j), k = {}, l, m, h, o = a.track.ts.refstate;
                if (o.rsc) {
                    k.type = "social";
                    k.service = o.rsc;
                    k.click = true;
                    return k;
                }
                if (typeof(j) == "undefined" || j === "") {
                    k.type = "direct";
                    return k;
                }
                l = c.util.host(j);
                m = g(l);
                if (typeof(m) != "undefined") {
                    k.type = "social";
                    k.service = m;
                } else {
                    if (c.ad.iss(j)) {
                        k.type = "search";
                        k.domain = c.util.host(j);
                        h = c.ad.fst(j);
                        k.terms = f(h);
                    } else {
                        if (n & c.ad.ref.r_ondomain) {
                            k.type = "internal";
                            k.domain = document.location.hostname;
                        } else {
                            if (n & c.ad.ref.r_offdomain) {
                                k.type = "referred";
                                k.domain = c.util.host(j);
                            } else {
                                k.type = "direct";
                            }
                        }
                    }
                }
                return k;
            }

            if (!c.track) {
                c.track = {};
            }
            c.track.ts = {get: b, gst: f, refstate: {}};
        })(_a, _a.api, _a);
        (function () {
            var d = document, a = _a, _271 = 300, _272 = 350, _273 = 375, _274 = 0, cvt = [], avt = null, pix = "tev", evu = "//o.addthis.com/at/", ssc = function (rsc) {
                var _27b = _a.track.ts.get();
                if (_27b.type == "social") {
                    _a.cookie.ssc.update(_27b.service);
                } else {
                    if (rsc) {
                        _a.cookie.ssc.update(rsc);
                    }
                }
            }, _27c = {ftho: 1, aqe3: 1, d99r: 1, neud: 1, "8elu": 1, bqfn: 1}, _27d = Math.random() < _atc.csmp, _27e = true, _27f = new RegExp(/\(?(\d{3})\)?[\- ]?(\d{3})[\- ]?(\d{4})/g), _280 = new RegExp(/^((([a-z]|[0-9]|\-)+)\.)+([a-z])+$/ig), qtp = [], xtp = function () {
                var p;
                while (p = qtp.pop()) {
                    trk(p);
                }
            }, atf = null, pcs = [], spc = null;

            function apc(c) {
                c = c.split("-").shift();
                for (var i = 0; i < pcs.length; i++) {
                    if (pcs[i] == c) {
                        return;
                    }
                }
                pcs.push(c);
            }

            function get_atssh() {
                var div = d.getElementById("_atssh");
                if (!div) {
                    div = d.ce("div");
                    div.style.visibility = "hidden";
                    div.id = "_atssh";
                    a.opp(div.style);
                    d.body.insertBefore(div, d.body.firstChild);
                }
                return div;
            }

            function msg(s) {
                if (!_a.bro.ie6 && !_a.bro.ie7 && atf && atf.contentWindow) {
                    atf.contentWindow.postMessage(s, "*");
                }
                return;
            }

            function ctf(url, _28c) {
                var ifr, r = Math.floor(Math.random() * 1000), div = get_atssh();
                if (!_28c && !atf && _atc._atf && !a.bro.ie6 && !a.bro.ie7) {
                    atf = _atc._atf;
                    if (a.bro.msi) {
                        atf.url = url;
                    }
                    return atf;
                }
                if (!a.bro.msi) {
                    ifr = d.ce("iframe");
                    ifr.id = "_atssh" + r;
                    ifr.title = "AddThis utility frame";
                } else {
                    if (a.bro.ie6 && !url && d.location.protocol.indexOf("https") === 0) {
                        url = "javascript:''";
                    }
                    div.innerHTML = "<iframe id=\"_atssh" + r + "\" width=\"1\" height=\"1\" title=\"AddThis utility frame\" name=\"_atssh" + r + "\" " + (url ? "src=\"" + url + "\"" : "") + ">";
                    ifr = d.getElementById("_atssh" + r);
                }
                a.opp(ifr.style);
                ifr.frameborder = ifr.style.border = 0;
                ifr.style.top = ifr.style.left = 0;
                return ifr;
            }

            function prod() {
                if (document.getElementById("product")) {
                    return true;
                }
                if (typeof document.getElementsByClassName == "function" && (document.getElementsByClassName("product") || []).length > 0) {
                    return true;
                }
                if (document.getElementById("productDescription")) {
                    return true;
                }
                if (document.getElementById("page-product")) {
                    return true;
                }
                if (document.getElementById("vm_cart_products")) {
                    return true;
                }
                if (window.Virtuemart) {
                    return true;
                }
                var og = (a.ad.gog()), _290;
                _a.util.each(og, function (k, v) {
                    if (v == "type=product") {
                        _290 = 1;
                    }
                });
                if (_290) {
                    return true;
                }
            }

            function jsl() {
                var w = window;
                return((((w.jQuery || {}).fn || {}).jquery && 1) | ((w.Prototype || {}).Version && 2) | ((w.YUI || {}).version || (w.YAHOO || {}).VERSION && 4) | ((w.Ext || {}).version && 8) | ((w.dojo || {}).version && 16) | ((w._gaq || w._gat) && 32) | (w.google_ad_client && 64) | ((w.FB || w.fbAsyncInit) && 128) | (w.$BTB && 256) | (w.meebo && 512) | (w.gigya && 1024) | (w.SHARETHIS && 2048) | (w._qevents && 4096) | (w.twttr && 8192) | (w.postwidgetnamespace && 16384) | (w.a2a && 32768) | (w.SHRSB_Settings && 65536) | (w._sf_async_config && 131072) | (w.Shopify && 262144));
            }

            function onLinkClick(e) {
                if (!e || !e.data || !e.data.pco || !e.data.url) {
                    return;
                }
                cvt.push(a.track.fcv("typ", "lnk"));
                cvt.push(a.track.fcv("pco", e.data.pco));
                cvt.push(a.track.fcv("pur", a.track.mgu(e.data.url, {defrag: 1})));
                dirxmi(true);
            }

            function onMenuComment(e) {
            }

            function onMenuFollow(e) {
                if (e && e.data && e.data.service && e.data.url) {
                    trk({gen: _272, pix: "dest=" + e.data.service, svc: e.data.service, url: e.data.url});
                }
            }

            function onMenuShare(e) {
                var uid = a.uid;
                if (e && e.data && e.data.service) {
                    if (!_a.ssl && uid && _a.util.ivc(uid) && !_atc.xck && !_a.util.iooc(uid) && (e.data.service.indexOf("facebook") > -1 || e.data.service == "more" || e.data.service == "settings" || e.data.service == "link" || (_atc.ver >= 300 && e.data.service == "email"))) {
                        var img = new Image();
                        a.imgz.push(img);
                        img.src = "//aidps.atdmt.com/AI/Api/v1/UserRest.svc/Provider/39CD8FF4-531A-4266-A340-45548C451F45/User/" + uid + "/gif";
                    }
                    trk({gen: (e.data.service.indexOf("facebook") > -1 || e.data.service == "more" || e.data.service == "settings" || e.data.service == "link" || (_atc.ver >= 300 && e.data.service == "email")) ? -1 : _271, pix: "dest=" + e.data.service, svc: e.data.service, url: (e.data.url || null)});
                    a.dcp = _271;
                }
            }

            var _29a, _29b = [];

            function onApiUsage(evt) {
                if (Math.random() < 0.01) {
                    if (evt.data.call) {
                        _29b.push(evt.data.call);
                    }
                    if (!_29a) {
                        _29a = setTimeout(function () {
                            img("ap", "3", "calls=" + _euc(_29b.join(",")), {});
                        }, 10000);
                    }
                }
            }

            function onProductsGathered() {
                if (Math.random() < _atc.plmp) {
                    setTimeout(function () {
                        var t = {pc: pcs};
                        img("pl", "3", null, t);
                    }, 5000);
                }
            }

            function onMenuPop(evt) {
                var t = {}, data = evt.data || {}, svc = data.svc, pco = data.pco, _2a3 = data.cmo, _2a4 = data.crs, _2a5 = data.cso;
                if (svc) {
                    t.sh = svc;
                }
                if (_2a3) {
                    t.cm = _2a3;
                }
                if (_2a5) {
                    t.cs = 1;
                }
                if (_2a4) {
                    t.cr = 1;
                }
                if (pco) {
                    t.spc = pco;
                }
                img("sh", "3", null, t);
            }

            function onWelcomeBarShow(evt) {
                var t = {}, data = evt.data || {}, svc = data.svc, pco = data.pco || "wmb-1.0";
                if (data.showCount > 1) {
                    return;
                }
                t.sh = "wombat";
                if (pco) {
                    t.spc = pco;
                }
                if (svc) {
                    t.sc = svc;
                }
                img("sh", "3", null, t);
                apc(data.pco);
            }

            function onInstantShareShow(evt) {
                var t = {}, data = evt.data || {}, svc = data.svc, pco = data.pco || "ins-1.0";
                if (data.showCount > 1) {
                    return;
                }
                t.sh = "instant-share";
                if (pco) {
                    t.spc = pco;
                }
                if (svc) {
                    t.sc = svc;
                }
                img("sh", "3", null, t);
                apc(data.pco);
            }

            function trk(t, _2b1) {
                var dr = a.dr, rev = (a.rev || "");
                if (!t) {
                    return;
                }
                t.xck = _atc.xck ? 1 : 0;
                t.xxl = 1;
                t.sid = a.track.ssid();
                t.pub = a.pub();
                t.ssl = a.ssl || 0;
                t.srl = _atc.lamp;
                t.du = a.tru(t.url || a.du || a.dl.href);
                t.xtr = _2b1 !== _1 ? 0 : _atc.xtr;
                if (a.dt) {
                    t.dt = a.dt;
                }
                if (a.cb) {
                    t.cb = a.cb;
                }
                if (a.kw) {
                    t.kw = a.kw;
                }
                t.lng = a.lng();
                t.ver = _atc.ver;
                t.jsl = a.track.jsl();
                t.prod = a.track.prod();
                if (!a.upm && a.uid) {
                    t.uid = a.uid;
                }
                t.pc = t.spc || pcs.join(",");
                if (dr) {
                    t.dr = a.tru(dr);
                }
                if (a.dh) {
                    t.dh = a.dh;
                }
                if (rev) {
                    t.rev = rev;
                }
                if (a.xfr) {
                    if (a.upm) {
                        if (atf) {
                            atf.contentWindow.postMessage(_39(t), "*");
                        }
                    } else {
                        var div = get_atssh(), base = _atc.rsrcs.sh + (false ? "?t=" + new Date().getTime() : "");
                        if (atf) {
                            div.removeChild(div.firstChild);
                        }
                        atf = ctf();
                        atf.src = base + "#" + _39(t);
                        div.appendChild(atf);
                    }
                } else {
                    qtp.push(t);
                }
            }

            function img(i, c, x, obj, _2ba) {
                if (!window.at_sub && !_atc.xtr) {
                    var t = obj || {};
                    t.evt = i;
                    if (x) {
                        t.ext = x;
                    }
                    avt = t;
                    if (_2ba === 1) {
                        xmi(true);
                    } else {
                        a.track.sxm(true, xmi);
                    }
                }
            }

            function cev(k, v) {
                cvt.push(a.track.fcv(k, v));
                a.track.sxm(true, xmi);
            }

            function xmi(_2be) {
                var h = a.dl ? a.dl.hostname : "";
                if (cvt.length > 0 || avt) {
                    a.track.sxm(false, xmi);
                    if (_atc.xtr) {
                        return;
                    }
                    var t = avt || {};
                    t.ce = cvt.join(",");
                    cvt = [];
                    avt = null;
                    trk(t);
                    if (_2be) {
                        var i = d.ce("iframe");
                        i.id = "_atf";
                        _a.opp(i.style);
                        d.body.appendChild(i);
                        i = d.getElementById("_atf");
                    }
                }
            }

            function dirxmi(_2c2) {
                var a = _a, i, lng = a.lng().split("-").shift(), h = a.dl ? a.dl.hostname : "";
                if (cvt.length > 0) {
                    if (_atc.xtr) {
                        return;
                    }
                    if (h.indexOf(".gov") > -1 || h.indexOf(".mil") > -1) {
                        _atc.xck = 1;
                    }
                    if (a.dt) {
                        cvt.push(a.track.fcv("pti", a.dt));
                    }
                    cvt.push(a.track.fcv("lng", lng));
                    if (a.cb) {
                        cvt.push(a.track.fcv("cb", a.cb));
                    }
                    var urp = pix + "-" + a.track.ran() + ".png?ev=" + a.track.sta() + "&ce=" + cvt.join(",") + (_atc.xck ? "&xck=1" : "") + (a.dr ? "&dr=" + _euc(a.track.mgu(a.dr, {defrag: 1})) : "") + (a.du ? "&PRE=" + _euc(a.track.mgu(a.du, {defrag: 1})) : ""), url = evu + urp;
                    cvt = [];
                    if (_2c2) {
                        var d = document, ifr = d.createElement("iframe");
                        ifr.id = "_atf";
                        ifr.src = url;
                        _a.opp(ifr.style);
                        d.body.appendChild(ifr);
                        ifr = d.getElementById("_atf");
                    } else {
                        var img = new Image();
                        a.imgz.push(img);
                        img.src = url;
                    }
                }
            }

            function trackSocial(typ, _2cd) {
                var id = (_2cd || {}).id || _a.uid, _2cf = (_2cd || {}).service || "unk";
                cev("typ", typ);
                cev("pur", a.track.mgu(a.du, {defrag: 1}));
                cev("sto", _2cf);
            }

            function onSocialConnect(_2d0) {
                trackSocial("soc", _2d0);
            }

            function onCopy(e) {
                var text = "", _2d3 = "", _2d4 = 250;
                if (window.getSelection) {
                    _2d3 = window.getSelection() || "";
                    text = _a.trim(_2d3.toString()).replace(_27f, " ").replace(/[\b]+/g, " ").split(" ");
                    if (text.length) {
                        if (_27d && _274 < 3) {
                            cev("cbc", text.length);
                        }
                        _274++;
                        if (!_27e) {
                            return;
                        }
                        var _2d5 = [];
                        for (var i = 0; i < text.length; i++) {
                            if (text[i] && text[i].length <= 50 && text[i].indexOf("@") == -1 && text[i].indexOf("://") == -1 && (!(_280.test(text[i])))) {
                                _2d5.push(text[i]);
                            }
                        }
                        if (_2d5.length && _2d5.length <= 5 && (!a.dcp || a.dcp < _2d4)) {
                            setTimeout(function () {
                                trk({gen: _2d4, pix: "tt=" + _euc(_2d5.join(" "))});
                                a.dcp = _2d4;
                            }, Math.random() * 10000);
                        }
                    }
                }
            }

            _a.ed.addEventListener("addthis-internal.params.loaded", function () {
                var tc = (w.addthis_config || {}).data_track_textcopy;
                _27e = tc !== false && (_27e || ((!_a.sub && ((dl || {}).href || "").indexOf(".addthis.com") > -1) || _27c[_a.mun(_a.pub())]) || (w.addthis_config || {}).data_track_textcopy || (window.addthis_product || "").indexOf("wpp") > -1 || (window.addthis_product || "").indexOf("blg") > -1);
                try {
                    if (_27d || _27e) {
                        if (a.bro.msi) {
                            document.body.attachEvent("oncopy", onCopy, true);
                        } else {
                            document.addEventListener("copy", onCopy, true);
                        }
                    }
                } catch (e) {
                }
            });
            a.ed.addEventListener("addthis-internal.api", onApiUsage);
            a.ed.addEventListener("addthis-internal.compact", onMenuPop);
            a.ed.addEventListener("addthis-internal.bar.show", onWelcomeBarShow);
            a.ed.addEventListener("addthis-internal.link.click", onLinkClick);
            a.ed.addEventListener("addthis-internal.ready", onProductsGathered);
            a.ed.addEventListener("addthis.bar.show", onWelcomeBarShow);
            a.ed.addEventListener("addthis.menu.share", onMenuShare);
            a.ed.addEventListener("addthis.menu.follow", onMenuFollow);
            a.ed.addEventListener("addthis.menu.comment", onMenuComment);
            a.ed.addEventListener("addthis-internal.instant-share.show", onInstantShareShow);
            if (!a.track) {
                a.track = {};
            }
            a.util.extend(a.track, {pcs: pcs, apc: apc, cev: cev, ctf: ctf, jsl: jsl, prod: prod, osc: onSocialConnect, gtf: get_atssh, qtp: function (p) {
                qtp.push(p);
            }, ssc: ssc, stf: function (f) {
                atf = f;
            }, trk: trk, trl: onLinkClick, xtp: xtp, msg: msg});
        })();
        _2a(_a, {_rec: [], xfr: !_a.upm || !_a.bro.ffx, pmh: function (e) {
            var data, r = _a._rec;
            if (e.origin.slice(-12) == ".addthis.com") {
                if (!e.data) {
                    return;
                }
                if (e.data.length) {
                    if (_a.unj && e.data.indexOf && e.data.indexOf("{") === 0) {
                        try {
                            data = JSON.parse(e.data);
                        } catch (e) {
                            data = _a.util.rfromKV(e.data);
                        }
                    } else {
                        data = _a.util.rfromKV(e.data);
                    }
                } else {
                    data = e.data;
                }
                for (var n = 0; n < r.length; n++) {
                    r[n](data);
                }
            }
        }});
        _2a(_a, {lng: function () {
            return window.addthis_language || (window.addthis_config || {}).ui_language || (_a.bro.msi ? navigator.userLanguage : navigator.language) || "en";
        }, iwb: function (l) {
            var wd = {th: 1, pl: 1, sl: 1, gl: 1, hu: 1, is: 1, nb: 1, se: 1, su: 1, sw: 1};
            return!!wd[l];
        }, gfl: function (l) {
            var map = {ca: "es", cs: "CZ", cy: "GB", da: "DK", de: "DE", eu: "ES", ck: "US", en: "US", es: "LA", fb: "FI", gl: "ES", ja: "JP", ko: "KR", nb: "NO", nn: "NO", sv: "SE", ku: "TR", zh: "CN", "zh-tr": "CN", "zh-hk": "HK", "zh-tw": "TW", fo: "FO", fb: "LT", af: "ZA", sq: "AL", hy: "AM", be: "BY", bn: "IN", bs: "BA", nl: "NL", et: "EE", fr: "FR", ka: "GE", el: "GR", gu: "IN", hi: "IN", ga: "IE", jv: "ID", kn: "IN", kk: "KZ", la: "VA", li: "NL", ms: "MY", mr: "IN", ne: "NP", pa: "IN", pt: "PT", rm: "CH", sa: "IN", sr: "RS", sw: "KE", tl: "PH", ta: "IN", pl: "PL", tt: "RU", te: "IN", ml: "IN", uk: "UA", vi: "VN", tr: "TR", xh: "ZA", zu: "ZA", km: "KH", tg: "TJ", he: "IL", ur: "PK", fa: "IR", yi: "DE", gn: "PY", qu: "PE", ay: "BO", se: "NO", ps: "AF", tl: "ST"}, rv = map[l] || map[l.split("-").shift()];
            if (rv) {
                return l.split("-").shift() + "_" + rv;
            } else {
                return"en_US";
            }
        }, ivl: function (l) {
            var lg = {af: 1, afr: "af", ar: 1, ara: "ar", az: 1, aze: "az", be: 1, bye: "be", bg: 1, bul: "bg", bn: 1, ben: "bn", bs: 1, bos: "bs", ca: 1, cat: "ca", cs: 1, ces: "cs", cze: "cs", cy: 1, cym: "cy", da: 1, dan: "da", de: 1, deu: "de", ger: "de", el: 1, gre: "el", ell: "ell", en: 1, eo: 1, es: 1, esl: "es", spa: "spa", et: 1, est: "et", eu: 1, fa: 1, fas: "fa", per: "fa", fi: 1, fin: "fi", fo: 1, fao: "fo", fr: 1, fra: "fr", fre: "fr", ga: 1, gae: "ga", gdh: "ga", gl: 1, glg: "gl", gu: 1, he: 1, heb: "he", hi: 1, hin: "hin", hr: 1, ht: 1, hy: 1, cro: "hr", hu: 1, hun: "hu", id: 1, ind: "id", is: 1, ice: "is", it: 1, ita: "it", ja: 1, jpn: "ja", km: 1, ko: 1, kor: "ko", ku: 1, lb: 1, ltz: "lb", lt: 1, lit: "lt", lv: 1, lav: "lv", mk: 1, mac: "mk", mak: "mk", ml: 1, mn: 1, ms: 1, msa: "ms", may: "ms", nb: 1, nl: 1, nla: "nl", dut: "nl", no: 1, nds: 1, nn: 1, nno: "no", oc: 1, oci: "oc", pl: 1, pol: "pl", ps: 1, pt: 1, por: "pt", ro: 1, ron: "ro", rum: "ro", ru: 1, rus: "ru", sk: 1, slk: "sk", slo: "sk", sl: 1, slv: "sl", sq: 1, alb: "sq", sr: 1, se: 1, si: 1, ser: "sr", su: 1, sv: 1, sve: "sv", sw: 1, swe: "sv", ta: 1, tam: "ta", te: 1, teg: "te", th: 1, tha: "th", tl: 1, tgl: "tl", tn: 1, tr: 1, tur: "tr", tpi: 1, tt: 1, uk: 1, ukr: "uk", ur: 1, urd: "ur", vi: 1, vec: 1, vie: "vi", "zh-cn": 1, "zh-hk": 1, "chi-hk": "zh-hk", "zho-hk": "zh-hk", "zh-tr": 1, "chi-tr": "zh-tr", "zho-tr": "zh-tr", "zh-tw": 1, "chi-tw": "zh-tw", "zho-tw": "zh-tw", zh: 1, chi: "zh", zho: "zh"};
            if (lg[l]) {
                return lg[l];
            }
            l = l.split("-").shift();
            if (lg[l]) {
                if (lg[l] === 1) {
                    return l;
                } else {
                    return lg[l];
                }
            }
            return 0;
        }, ggl: function (l) {
            var map = {en: "en-US", ar: "ar", ca: "ca", zh: "zh-CN", hr: "hr", cs: "cs", da: "da", nl: "nl", et: "et", fi: "fi", fr: "fr", de: "de", el: "el", he: "iw", hi: "hi", hu: "hu", id: "id", it: "it", ja: "ja", ko: "ko", lv: "lv", lt: "lt", ms: "ms", no: "no", fa: "fa", pl: "pl", pt: "pt-BR", ro: "ro", ru: "ru", sr: "sr", sk: "sk", sl: "sl", es: "es", sv: "sv", th: "th", tr: "tr", uk: "uk", vi: "vi"};
            return map[l] || null;
        }, gvl: function (l) {
            var rv = _a.ivl(l) || "en";
            if (rv === 1) {
                rv = l;
            }
            return rv;
        }, ulg: function (_2e8) {
            if (!_2e8 || _a.lng() == "en") {
                return;
            }
            try {
                var _2e9 = window.addthis_translations;
                if (_2e9) {
                    _2e8(_2e9);
                } else {
                    setTimeout(function () {
                        _a.ulg(_2e8);
                    }, 500);
                }
            } catch (e) {
            }
        }, alg: function (al, f) {
            var l = _a.gvl((al || _a.lng()).toLowerCase());
            if (l.indexOf("en") !== 0 && (!_a.pll || f)) {
                _a.pll = _a.ajs("static/r07/lang23/" + l + ".js");
            }
        }});
        _2a(_a, {trim: function (s, e) {
            if (s && s.trim && typeof(s.trim) == "function") {
                s = s.trim();
            }
            try {
                s = s.replace(/^[\s\u3000]+/, "").replace(/[\s\u3000]+$/, "");
            } catch (exc) {
            }
            if (s && e) {
                s = _euc(s);
            }
            return s || "";
        }, trl: [], tru: function (u, k) {
            var rv = "", _2f2 = 0, _2f3 = -1;
            if (u) {
                rv = u.substr(0, 300);
                if (rv !== u) {
                    if ((_2f3 = rv.lastIndexOf("%")) >= rv.length - 4) {
                        rv = rv.substr(0, _2f3);
                    }
                    if (rv != u) {
                        for (var i in _a.trl) {
                            if (_a.trl[i] == k) {
                                _2f2 = 1;
                            }
                        }
                        if (!_2f2) {
                            _a.trl.push(k);
                        }
                    }
                }
            }
            return rv;
        }, opp: function (st) {
            st.width = st.height = "1px";
            st.position = "absolute";
            st.zIndex = 100000;
        }, jlr: {}, ajs: function (name, _2f7, _2f8, id, el, _2fb) {
            if (!_a.jlr[name] || _2fb) {
                var o = d.ce("script"), ssl = (window.location.protocol == "https:"), _2fe = "", head = (el) ? el : d.gn("head")[0] || d.documentElement;
                o.setAttribute("type", "text/javascript");
                if (_2f8) {
                    o.setAttribute("async", "true");
                }
                if (id) {
                    o.setAttribute("id", id);
                }
                if ((window.chrome && chrome.self) || (window.safari && safari.extension)) {
                    _2fe = (ssl ? "https:" : "http:");
                    if (name.indexOf("//") === 0) {
                        name = _2fe + name;
                    }
                }
                o.src = ((_2f7 || name.indexOf("//") === 0) ? "" : (_2fe + _atr)) + name;
                head.insertBefore(o, head.firstChild);
                _a.jlr[name] = 1;
                return o;
            }
            return 1;
        }, jlo: function () {
            try {
                var a = _a, al = a.lng(), aig = function (src) {
                    var img = new Image();
                    _a.imgz.push(img);
                    img.src = src;
                };
                a.alg(al);
                if (!a.pld) {
                    if (a.bro.ie6) {
                        aig(_atc.rsrcs.widgetpng);
                        aig(_atr + "static/t00/logo1414.gif");
                        aig(_atr + "static/t00/logo88.gif");
                        if (window.addthis_feed) {
                            aig("static/r05/feed00.gif", 1);
                        }
                    }
                    if (a.pll && !window.addthis_translations) {
                        setTimeout(function () {
                            a.pld = a.ajs(_atc.rsrcs.menujs);
                        }, 10);
                    } else {
                        a.pld = a.ajs(_atc.rsrcs.menujs);
                    }
                }
            } catch (e) {
            }
        }, ao: function (elt, pane, iurl, _308, _309, _30a) {
            _a.lad(["open", elt, pane, iurl, _308, _309, _30a]);
            _a.jlo();
            return false;
        }, ac: function () {
        }, as: function (s, cf, sh) {
            _a.lad(["send", s, cf, sh]);
            _a.jlo();
        }});
        (function (e, x, z) {
            var B = document, r = window, g = 1, h = ["cbea", "cbeab", "kkk", "zvys", "gvgf", "shpxf", "chfflyvcf", "pernzcvr", "svfgvat", "wvmm", "fcybbtr", "flovna"], m = ["phz"], y = h.length, v = m.length, o = [], k, s = {}, a = {};

            function n(d) {
                return d.replace(/[a-zA-Z]/g, function (i) {
                    return String.fromCharCode((i <= "Z" ? 90 : 122) >= (i = i.charCodeAt(0) + 13) ? i : i - 26);
                });
            }

            while (y--) {
                a[n(h[y])] = 1;
            }
            while (v--) {
                s[n(m[v])] = 1;
            }
            function u(d) {
                var i = 0;
                if (!d || typeof(d) != "string") {
                    return i;
                }
                d = ((d || "").toLowerCase() + "").replace(/ /g, "");
                if (d == "mature" || d == "adult" || d == "rta-5042-1996-1400-1577-rta") {
                    i |= g;
                }
                return i;
            }

            function c(w, d) {
                var D = 0, j, C;
                if (!w || typeof(w) != "string") {
                    return D;
                }
                w = ((w || "").toLowerCase() + "").replace(/[^a-zA-Z]/g, " ").split(" ");
                for (j = 0, C = w.length; j < C; j++) {
                    if (a[w[j]] || (!d && s[w[j]])) {
                        D |= g;
                        return D;
                    }
                }
                return D;
            }

            function t() {
                A();
                var C = (r.addthis_title || B.title), i = c(C), w = (k || "").length, d, E, D;
                i |= c(B.location.hostname, true);
                if (k && w) {
                    while (w--) {
                        d = k[w] || {};
                        E = (d.name || (d.getAttribute ? d.getAttribute("property") : "") || "").toLowerCase();
                        D = d.content;
                        if (E == "description" || E == "keywords") {
                            i |= c(D);
                        }
                        if (E == "rating") {
                            i |= u(D);
                        }
                        if (E == "keywords" && D && D.length) {
                            b(D);
                        }
                    }
                }
                return i;
            }

            function b(D) {
                var C = D.split(","), j, w, d = 200;
                for (w = 0; w < C.length; w++) {
                    j = _a.trim(C[w]);
                    if ((d -= (j.length + 1)) > 0) {
                        o.push(j);
                    } else {
                        break;
                    }
                }
            }

            function q() {
                A();
                var C = [], i = (k || "").length, d, E, D, w;
                if (k && i) {
                    while (i--) {
                        d = k[i] || {};
                        E = ((d.getAttribute ? d.getAttribute("property") : "") || d.name || "").toLowerCase();
                        D = d.content;
                        if (E.indexOf("og:") === 0) {
                            w = E.split(":").pop();
                            if (C.length < 7 || w == "type") {
                                C.push(w == "type" ? w + "=" + D : w);
                            }
                        }
                    }
                }
                return C;
            }

            function A() {
                if (!k) {
                    k = B.all && typeof(B.all.tags) == "function" ? B.all.tags("META") : B.getElementsByTagName ? B.getElementsByTagName("META") : new Array();
                    _a.meta = k;
                }
            }

            function f() {
                A();
                var w = {}, j, d = "";
                if (!k || k.length == 0) {
                    return w;
                }
                for (j = 0; j < k.length; j++) {
                    d = k[j].getAttribute("property") || "";
                    if (d.search(/^og:/i) != -1) {
                        w[d.replace("og:", "")] = k[j].content;
                    }
                }
                return _39(w);
            }

            function l() {
                return o.join(",");
            }

            function p() {
                var d = document.charset || document.characterSet || document.inputEncoding || document.defaultCharset;
                if (!d) {
                    A();
                    for (y = 0; y < k.length; y++) {
                        d = k[y].getAttribute("charset");
                        if (d) {
                            break;
                        }
                    }
                }
                return(!d || (d.length > 14) ? "" : d);
            }

            if (!e.ad) {
                e.ad = {};
            }
            _a.extend(e.ad, {cla: t, gog: q, og: f, kw: l, gch: p});
        })(_a, _a.api, _a);
        (function (c, f, i) {
            var g = 0, b = 1, a = 2, h = 4;

            function d(m, l, k) {
                k = (k === _1 || k) || (window.location.protocol == "https:");
                l = _a.util.host(l === _1 ? window.location.href : l);
                var o = g;
                if (m) {
                    var n = _a.util.host(m);
                    if (l == n) {
                        o |= a;
                    } else {
                        o |= h;
                    }
                }
                if (!k && j(m)) {
                    o |= b;
                }
                return o;
            }

            function j(k) {
                var p = ".com/", n = ".org/", l = (k || "").toLowerCase(), m = 0;
                if (l && l.match(/ws\/results\/(web|images|video|news)/)) {
                    m = 1;
                } else {
                    if (false && l && l.match(/\/relevance\/search\//)) {
                        m = 1;
                    } else {
                        if (l && l.indexOf("addthis" == -1) && (l.match(/google.*\/(search|url|aclk|m\?)/) || l.indexOf("/pagead/aclk?") > -1 || l.indexOf(p + "url") > -1 || l.indexOf("/search?") > -1 || l.indexOf("/search/?") > -1 || l.indexOf(p + "search") > -1 || l.indexOf(n + "search") > -1 || l.indexOf("/search.html?") > -1 || l.indexOf("search/results.") > -1 || l.indexOf(p + "s?bs") > -1 || l.indexOf(p + "s?wd") > -1 || l.indexOf(p + "mb?search") > -1 || l.indexOf(p + "mvc/search") > -1 || l.indexOf(p + "web") > -1 || l.match(/aol.*\/aol/) || l.indexOf("hotbot" + p) > -1)) {
                            if (e(k) != false) {
                                m = 1;
                            }
                        }
                    }
                }
                if (m) {
                    return true;
                } else {
                    return false;
                }
            }

            function e(k) {
                var m = k.split("?").pop().toLowerCase().split("&"), l, n = /^(?:q|search|bs|wd|p|kw|keyword|query|qry|querytext|text|searchcriteria|searchstring|searchtext|sp_q)=(.*)/i;
                for (l = 0; l < m.length; l++) {
                    if (matches = n.exec(m[l])) {
                        return matches[1];
                    }
                }
                return false;
            }

            if (!c.ad) {
                c.ad = {};
            }
            c.ad.clr = d;
            c.ad.iss = j;
            c.ad.fst = e;
            c.ad.ref = {r_direct: g, r_search: b, r_ondomain: a, r_offdomain: h};
        })(_a, _a.api, _a);
        (function (d, e, g) {
            var i = d, f = [], h = !_a.upm || (_a.dat || {}).rdy;
            if (!i.du) {
                i.du = document.location.href;
            }
            if (!i.dh) {
                i.dh = document.location.hostname;
            }
            if (!i.dr) {
                i.dr = document.referrer;
            }
            function c(a) {
                if (h) {
                    setTimeout(function () {
                        _a.track.trk(a, true);
                    }, (!_a.upm ? _a.wait * 2 : 0));
                } else {
                    f.push(a);
                }
            }

            function b(l) {
                var n = {pco: "cnv-100"}, a = {pxid: 1, ev: 1};
                if (l) {
                    for (var m in l) {
                        if (a[m]) {
                            n[m] = l[m];
                        }
                    }
                }
                c({gen: 2000, fcp: 1, pix: i.util.toKV(n)});
            }

            function j(a) {
                c({pixu: a});
            }

            if (!d.ad) {
                d.ad = {};
            }
            _a.extend(d.ad, {event: b, getPixels: j});
            _a.ed.addEventListener("addthis-internal.data.rdy", function () {
                h = 1;
                for (var a = 0; a < f.length; a++) {
                    c(f[a]);
                }
            });
        })(_a, _a.api, _a);
        (function (g, h, i) {
            var e, j = document, n = g.util, c = g.event.EventDispatcher, l = 25, f = [];

            function m(q) {
                var d, p;
                if (q && q instanceof a) {
                    f.push(q);
                }
                for (d = 0; d < f.length;) {
                    p = f[d];
                    if (p && p.test()) {
                        f.splice(d, 1);
                        a.fire("load", p, {resource: p});
                    } else {
                        d++;
                    }
                }
                if (f.length) {
                    setTimeout(m, l);
                }
            }

            function b() {
                var d = this, p = new c(d);
                p.decorate(p).decorate(d);
                this.resources = (arguments.length && arguments[0]instanceof Array) ? arguments[0] : (Array.prototype.slice.call(arguments) || []);
                this.waiting = this.resources.length;
                this.loading = false;
                if (this.resources && !(this.resources[0]instanceof a)) {
                    this.resources = k(this.resources);
                }
                this.checkload = function () {
                    this.waiting--;
                    if (this.waiting == 0) {
                        p.fire("load", this.resources, {resources: this.resources});
                    }
                };
                this.add = function (q) {
                    if (q) {
                        this.waiting++;
                        this.resources.push(q);
                    }
                };
                this.load = function () {
                    if (!this.loading) {
                        for (var q = 0; q < this.resources.length; q++) {
                            this.resources[q].addEventListener("load", _a.util.bind(this.checkload, d));
                            this.resources[q].load();
                        }
                        this.loading = true;
                    }
                };
            }

            function a(s, p, r) {
                var d = this, q = new c(d);
                q.decorate(q).decorate(d);
                this.ready = false;
                this.loading = false;
                this.id = s;
                this.url = p;
                if (typeof(r) === "function") {
                    this.test = r;
                } else {
                    if (typeof(r) === "undefined") {
                        this.test = function () {
                            return true;
                        };
                    } else {
                        this.test = function () {
                            return(!!_window[r]);
                        };
                    }
                }
                a.addEventListener("load", function (t) {
                    var u = t.data ? t.data.resource : null;
                    if (!u || u.id !== d.id) {
                        return;
                    }
                    if (d.loading) {
                        d.loading = false;
                        d.ready = true;
                        q.fire(t.type, u, {resource: u});
                    }
                });
            }

            n.extend(a.prototype, {load: function () {
                if (!this.loading) {
                    var d, p;
                    if (this.url.substr(this.url.length - 4) == ".css") {
                        p = (j.gn("head")[0] || j.documentElement);
                        d = j.ce("link");
                        d.rel = "stylesheet";
                        d.type = "text/css";
                        d.href = this.url;
                        d.media = "all";
                        p.insertBefore(d, p.firstChild);
                    } else {
                        d = _a.ajs(this.url, 1);
                    }
                    this.loading = true;
                    a.monitor(this);
                    return d;
                } else {
                    return 1;
                }
            }});
            var o = new c(a);
            o.decorate(o).decorate(a);
            n.extend(a, {known: {}, loading: f, monitor: m});
            function k(q) {
                if (!(q instanceof Array)) {
                    q = [q];
                }
                var r = [];
                for (var d = 0; d < q.length; d++) {
                    var p = q[d];
                    if (p instanceof a) {
                        r.push(p);
                    } else {
                        r.push(new _a.resource.Resource(p.name, p.href || p.url, p.test ? p.test : function () {
                            return true;
                        }));
                    }
                }
                return r;
            }

            g.resource = {Resource: a, convert: k, Bundle: b};
        })(_a, _a.api, _a);
        (function (b, f, d) {
            function e(m, i, h, k, j, g, l) {
                if (typeof l == "function" && !l.ost) {
                    l();
                    l.ost = 1;
                }
                if (!h) {
                    h = window.addthis;
                }
                if (typeof g == "function") {
                    return function () {
                        if (k) {
                            k.apply(h, arguments);
                        }
                        var n = arguments;
                        if (j) {
                            _a.ed.addEventListener(j, function () {
                                g.apply(h, n);
                            });
                        } else {
                            m.addEventListener("load", function () {
                                g.apply(h, n);
                            });
                        }
                        m.load();
                    };
                } else {
                    return function (p, n, o) {
                        if (p) {
                            p = _a.util.select(p);
                            if (p.length) {
                                if (k) {
                                    k(p);
                                }
                                if (j) {
                                    _a.ed.addEventListener(j, function () {
                                        h[i](p, n, o);
                                    });
                                } else {
                                    m.addEventListener("load", function () {
                                        h[i](p, n, o);
                                    });
                                }
                                m.load();
                            }
                        }
                    };
                }
            }

            function a(i) {
                var h = function () {
                    throw new Error("Invalid internal API request");
                }, g = (i && i.context) || window.addthis, j;
                if (!i) {
                    h();
                }
                if (i.resources instanceof Array) {
                    i.resources = new _a.resource.Bundle(i.resources);
                }
                if (!i.resources) {
                    h();
                }
                if (!i.method) {
                    h();
                }
                j = e(i.resources, i.method, i.context, i.pre, i.event, i.callback, i.oncall);
                g[i.method] = function () {
                    var k = arguments;
                    if (_atc.xol && !_a8.isReady) {
                        _a8.append(function () {
                            j.apply(g, k);
                        });
                    } else {
                        j.apply(g, k);
                    }
                };
            }

            function c(g) {
                if (!g.methods) {
                    return;
                }
                _a.util.each(g.methods, function (i, h) {
                    h.method = i;
                    if (g.context) {
                        h.context = g.context;
                    }
                    if (g.resources) {
                        h.resources = g.resources;
                    }
                    a(h);
                });
            }

            b.api = {ApiQueueFactory: e, addAsync: a, register: c};
        })(_a, _a.api, _a);
        (function (h, A, D) {
            var J = h, n = [], f = y();

            function y() {
                var M = d.gn("link"), O = {}, N, a;
                for (N = 0; N < M.length; N++) {
                    a = M[N];
                    if (a.href && a.rel) {
                        O[a.rel] = a.href;
                    }
                }
                return O;
            }

            function H() {
                var a = d.location.protocol;
                if (a == "file:") {
                    a = "http:";
                }
                return a + "//" + _atd;
            }

            function s(Q, R, P, N) {
                if (Q == "more" && _atc.ver >= 300 && !_a.bro.wph && !_a.bro.iph && !_a.bro.dro) {
                    var O = _a.util.clone(P || (typeof _atw === "undefined" ? addthis_share : _atw.share));
                    O.url = _euc(O.url);
                    O.title = _euc(O.title || (addthis_share || {}).title || "");
                    var N = typeof _atw === "undefined" ? N : _atw.conf;
                    var M = _atc.rsrcs.bookmark + "#ats=" + _euc(_a.util.rtoKV(O)) + "&atc=" + _euc(_a.util.rtoKV(N));
                    if (_a.bro.msi && M.length > 2000) {
                        M = M.split("&atc")[0];
                        var a = {product: N.product, data_track_clickback: N.data_track_clickback, pubid: N.pubid, username: N.username, pub: N.pub, ui_email_to: N.ui_email_to, ui_email_from: N.ui_email_from, ui_email_note: N.ui_email_note};
                        M += "&atc=" + _euc(_a.util.rtoKV(a));
                    }
                    return M;
                }
                return H() + (R ? "feed.php" : (Q == "email" && _atc.ver >= 300 ? "tellfriend.php" : "bookmark.php")) + "?v=" + (_atc.ver) + "&winname=addthis&" + L(Q, R, P, N) + ((((P || {}).smd || {}).dr || J.dr) ? "&pre=" + _euc(J.track.cof(((P || {}).smd || {}).dr || J.dr)) : "") + "&tt=0" + (Q === "more" && J.bro.ipa ? "&imore=1" : "") + "&captcha_provider=" + (J.bro.msi ? "recaptcha" : "nucaptcha");
            }

            function r(N, M) {
                var a = {pinterest_share: "pinterest", pinterest_pinit: "pinterest"}, O = null;
                if (a[M]) {
                    if (((N || {}).passthrough || {})[M]) {
                        O = N.passthrough[M];
                    } else {
                        if (((N || {}).passthrough || {})[a[M]]) {
                            O = N.passthrough[a[M]];
                        }
                    }
                } else {
                    O = ((N || {}).passthrough || {})[M];
                }
                return O ? "&passthrough=" + J.trim((typeof(O) == "object" ? J.util.toKV(O) : O), 1) : "";
            }

            function L(ae, S, ah, am) {
                var Y = J.trim, aj = w, ag, O, R, ai, ac, af = J.pub(), ab = w._atw || {}, X = (ah && ah.url ? ah.url : (ab.share && ab.share.url ? ab.share.url : (aj.addthis_url || aj.location.href))), al, Q = function (ap) {
                    if (X && X != "") {
                        ai = X.indexOf("#at" + ap);
                        if (ai > -1) {
                            X = X.substr(0, ai);
                        }
                    }
                };
                if (!am) {
                    am = w.conf || {};
                } else {
                    for (ag in w.conf) {
                        if (!(am[ag])) {
                            am[ag] = w.conf[ag];
                        }
                    }
                }
                if (!ah) {
                    ah = w.share || {};
                } else {
                    for (ag in w.share) {
                        if (!(ah[ag])) {
                            ah[ag] = w.share[ag];
                        }
                    }
                }
                if (J.rsu()) {
                    ah.url = w.addthis_url;
                    ah.title = w.addthis_title;
                    X = ah.url;
                }
                if (f.canonical && !ah.trackurl && ah.imp_url && !_a.share.inBm()) {
                    ah.trackurl = f.canonical;
                }
                if (!af || af == "undefined") {
                    af = "unknown";
                }
                al = am.services_custom;
                Q("pro");
                Q("opp");
                Q("cle");
                Q("clb");
                Q("abc");
                Q("_pco");
                if (X.indexOf("addthis.com/static/r07/ab") > -1) {
                    X = X.split("&");
                    for (ai = 0; ai < X.length; ai++) {
                        ac = X[ai].split("=");
                        if (ac.length == 2) {
                            if (ac[0] == "url") {
                                X = ac[1];
                                break;
                            }
                        }
                    }
                }
                if (al instanceof Array) {
                    for (ai = 0; ai < al.length; ai++) {
                        if (al[ai].code == ae) {
                            al = al[ai];
                            break;
                        }
                    }
                }
                var ak = ((ah.templates && ah.templates[ae]) ? ah.templates[ae] : ""), aa = ah.smd || J.smd, M = ((ah.modules && ah.modules[ae]) ? ah.modules[ae] : ""), P = ah.share_url_transforms || ah.url_transforms || {}, V = ah.track_url_transforms || ah.url_transforms, ao = ((P && P.shorten) && ae.indexOf("pinterest") === -1 ? (typeof(P.shorten) == "string" ? P.shorten : (P.shorten[ae] || P.shorten["default"] || "")) : ""), T = "", ad = (am.product || aj.addthis_product || ("men-" + _atc.ver)), N = w.crs, U = "", Z = J.track.gof(X), an = Z.length == 2 ? Z.shift().split("=").pop() : "", a = Z.length == 2 ? Z.pop() : "", W = (am.data_track_clickback || am.data_track_linkback || !af || af == "AddThis") || (am.data_track_clickback !== false && _atc.ver >= 250);
                if (_atc.ver >= 300 && am.data_track_clickback === false) {
                    W = false;
                }
                if (ah.email_vars) {
                    for (ag in ah.email_vars) {
                        U += (U == "" ? "" : "&") + _euc(ag) + "=" + _euc(ah.email_vars[ag]);
                    }
                }
                if (J.track.spc && ad.indexOf(J.track.spc) == -1) {
                    ad += "," + J.track.spc;
                }
                if (P && P.shorten && ah.shorteners && ae.indexOf("pinterest") == -1) {
                    for (ag in ah.shorteners) {
                        for (O in ah.shorteners[ag]) {
                            T += (T.length ? "&" : "") + _euc(ag + "." + O) + "=" + _euc(ah.shorteners[ag][O]);
                        }
                    }
                }
                X = J.track.cof(X);
                X = J.track.mgu(X, P, ah, ae);
                if (V) {
                    ah.trackurl = J.track.mgu(ah.trackurl || X, V, ah, ae);
                }
                R = "pub=" + af + "&source=" + ad + "&lng=" + (J.lng() || "xx") + "&s=" + ae + (am.ui_508_compliant ? "&u508=1" : "") + (S ? "&h1=" + Y((ah.feed || ah.url || "").replace("feed://", ""), 1) + "&t1=" : "&url=" + Y(X, 1) + "&title=") + Y(ah.title || (aj.addthis_title || "").replace(/AddThis\sSocial\sBookmarking\sSharing\sButton\sWidget/, ""), 1) + ((S && ah.userid) ? "&fid=" + Y(ah.userid) : "") + (_atc.ver < 200 ? "&logo=" + Y(aj.addthis_logo, 1) + "&logobg=" + Y(aj.addthis_logo_background, 1) + "&logocolor=" + Y(aj.addthis_logo_color, 1) : "") + "&ate=" + J.track.sta() + ((ae != "email" || _atc.ver < 300) ? "&frommenu=1" : "") + ((w.addthis_ssh && (!N || addthis_ssh != N) && (addthis_ssh == ae || addthis_ssh.search(new RegExp("(?:^|,)(" + ae + ")(?:$|,)")) > -1)) ? "&ips=1" : "") + (N ? "&cr=" + (ae == N ? 1 : 0) : "") + "&uid=" + _euc(J.uid && J.uid != "x" ? J.uid : J.util.cuid()) + (ah.email_template ? "&email_template=" + _euc(ah.email_template) : "") + (U ? "&email_vars=" + _euc(U) : "") + (ao ? "&shortener=" + _euc(typeof(ao) == "array" ? ao.join(",") : ao) : "") + (ao && T ? "&" + T : "") + r(ah, ae) + (ah.description ? "&description=" + Y(ah.description, 1) : "") + (ah.html ? "&html=" + Y(ah.html, 1) : (ah.content ? "&html=" + Y(ah.content, 1) : "")) + (ah.trackurl && ah.trackurl != X ? "&trackurl=" + Y(ah.trackurl, 1) : "") + (ah.screenshot ? "&screenshot=" + Y(ah.screenshot, 1) : "") + (ah.screenshot_secure ? "&screenshot_secure=" + Y(ah.screenshot_secure, 1) : "") + (ah.swfurl ? "&swfurl=" + Y(ah.swfurl, 1) : "") + (ah.swfurl_secure ? "&swfurl_secure=" + Y(ah.swfurl_secure, 1) : "") + (am.hdl ? "&hdl=1" : "") + (J.cb ? "&cb=" + J.cb : "") + (J.ufbl ? "&ufbl=1" : "") + (J.uud ? "&uud=1" : "") + (ah.iframeurl ? "&iframeurl=" + Y(ah.iframeurl, 1) : "") + (ah.width ? "&width=" + ah.width : "") + (ah.height ? "&height=" + ah.height : "") + (am.data_track_p32 ? "&p32=" + am.data_track_p32 : "") + (W || _a.track.ctp(am.product, am) ? "&ct=1" : "&ct=0") + ((W || _a.track.ctp(am.product, am)) && X.indexOf("#") > -1 ? "&uct=1" : "") + ((al && al.url) ? "&acn=" + _euc(al.name) + "&acc=" + _euc(al.code) + "&acu=" + _euc(al.url) : "") + (aa ? (aa.rxi ? "&rxi=" + aa.rxi : "") + (aa.rsi ? "&rsi=" + aa.rsi : "") + (aa.gen ? "&gen=" + aa.gen : "") : ((an ? "&rsi=" + an : "") + (a ? "&gen=" + a : ""))) + (ah.xid ? "&xid=" + Y(ah.xid, 1) : "") + (ak ? "&template=" + Y(ak, 1) : "") + (M ? "&module=" + Y(M, 1) : "") + (am.ui_cobrand ? "&ui_cobrand=" + Y(am.ui_cobrand, 1) : "") + (ae == "email" && _atc.ver >= 300 ? "&ui_email_to=" + Y(am.ui_email_to, 1) + "&ui_email_from=" + Y(am.ui_email_from, 1) + "&ui_email_note=" + Y(am.ui_email_note, 1) : "") + (_atc.ver < 300 ? ((am.ui_header_color ? "&ui_header_color=" + Y(am.ui_header_color, 1) : "") + (am.ui_header_background ? "&ui_header_background=" + Y(am.ui_header_background, 1) : "")) : "");
                return R;
            }

            function K(N, M, O) {
                var a = N.xid;
                if (M.data_track_clickback || M.data_track_linkback || _a.track.ctp(M.product, M)) {
                    return J.track.gcc(a, (N.smd || J.smd || {}).gen || 0) + (O || "");
                } else {
                    return"";
                }
            }

            function C(T, V, P, U, M, W) {
                var S = J.pub(), a = U || V.url || "", O = V.xid || J.util.cuid(), N, R, Q = (P.data_track_clickback || P.data_track_linkback || !S || S == "AddThis") || (P.data_track_clickback !== false && _atc.ver >= 250);
                if (a.toLowerCase().indexOf("http%3a%2f%2f") === 0) {
                    a = _duc(a);
                }
                if (M) {
                    N = {};
                    for (R in V) {
                        N[R] = V[R];
                    }
                    N.xid = O;
                    setTimeout(function () {
                        (new Image()).src = s(T == "twitter" && W ? "tweet" : T, 0, N, P);
                    }, 100);
                }
                return(Q ? J.track.cur(a, T, O) : a);
            }

            function j(P, N, a) {
                var N = N || {}, O = P.share_url_transforms || P.url_transforms || {}, M = J.track.cof(J.track.mgu(P.url, O, P, "mailto")), Q = P.title ? P.title : M;
                return"mailto:?body=" + _euc(C("mailto", P, N, M, a)) + "&subject=" + (_a.bro.iph ? Q : _euc(Q));
            }

            function k(a) {
                return((!a.templates || !a.templates.twitter) && (!J.wlp || J.wlp == "http:"));
            }

            function i(M, O, W, N, T) {
                var S = O || 550, P = W || 450, V = screen.width, Q = screen.height, R = Math.round((V / 2) - (S / 2)), a = 0;
                if (Q > P) {
                    a = Math.round((Q / 2) - (P / 2));
                }
                var U = w.open(M, (_a.bro.msi ? "" : (N || "addthis_share")), "left=" + R + ",top=" + a + ",width=" + S + ",height=" + P + ",personalbar=no,toolbar=no,scrollbars=yes,location=yes,resizable=yes");
                return T ? U : false;
            }

            function G(M, N, a) {
                if (l.href.search(_atc.rsrcs.bookmark) > -1) {
                    l = s(M, 0, N, a);
                } else {
                    w.open(s(M, 0, N, a), "addthis_share");
                }
                return false;
            }

            function o(M) {
                var a = {twitter: 1, wordpress: 1, facebook: 1, email: _atc.ver >= 300, more: _atc.ver >= 300, raiseyourvoice: 1, vk: 1};
                return a[M];
            }

            function z(N, M, a) {
                var O = {googlebuzz: "http://www.google.com/profiles/%s", google_follow: "https://plus.google.com/%s", youtube: "http://www.youtube.com/user/%s", facebook: "http://www.facebook.com/profile.php?id=%s", facebook_url: "http://www.facebook.com/%s", rss: "%s", flickr: "http://www.flickr.com/photos/%s", foursquare: "http://foursquare.com/%s", instagram: "http://instagram.com/%s", followgram: "http://followgram.me/%s", twitter: "http://twitter.com/intent/follow?source=followbutton&variant=1.0&screen_name=%s", linkedin: (a ? (a == "group" ? "http://www.linkedin.com/groups?gid=%s" : "http://www.linkedin.com/company/%s") : "http://www.linkedin.com/in/%s"), pinterest: "http://www.pinterest.com/%s", tumblr: "http://%s.tumblr.com", vimeo: "http://www.vimeo.com/%s"};
                if (N == "facebook" && isNaN(M)) {
                    N = "facebook_url";
                }
                return!M ? null : ((O[N] || "").replace("%s", M) || null);
            }

            function I(S, R, T, P, O, U, N, a) {
                var Q = {wordpress: {width: 720, height: 570}, linkedin: {width: 600, height: 400}, twitter: {width: 520, height: 520}, "default": {width: 550, height: 450}}, M = z(S, R, a);
                u(S, 1, T, P);
                if (P.ui_use_same_window) {
                    l.href = M;
                } else {
                    i(M, O || (Q[S] || Q["default"]).width, U || (Q[S] || Q["default"]).height, N);
                }
                return false;
            }

            function B(S, R, O, Q, a, N) {
                var P = {wordpress: {width: 720, height: 570}, linkedin: {width: 600, height: 400}, facebook: {width: 675, height: 375}, email: _atc.ver >= 300 ? {width: 660, height: 660} : {width: 735, height: 450}, more: _atc.ver >= 300 ? {width: 660, height: 716} : {width: 735, height: 450}, vk: {width: 720, height: 290}, raiseyourvoice: {width: 480, height: 635}, "default": {width: 550, height: 450}}, M = s(S, 0, R, O);
                if (O.ui_use_same_window) {
                    l.href = M;
                } else {
                    if (S != "more") {
                        i(M, Q || (P[S] || P["default"]).width, a || (P[S] || P["default"]).height, N);
                    } else {
                        _a.share.imgOcw(i(M, Q || (P[S] || P["default"]).width, a || (P[S] || P["default"]).height, N, true));
                    }
                }
                return false;
            }

            function g(Q, O, R, M) {
                var P = Q.share_url_transforms || Q.url_transforms || {}, a, N = J.track.cof(J.track.mgu(Q.url, P, Q, "twitter"));
                if (!Q.templates) {
                    Q.templates = {};
                }
                N = s("twitter", 0, Q, O);
                if (a) {
                    Q.title = a;
                }
                if (O.ui_use_same_window || M) {
                    l.href = N;
                } else {
                    i(N, 550, 450, "twitter_tweet");
                }
                return false;
            }

            function q(P, O, a, M, R) {
                var N = (R ? "follow" : (P.indexOf("_comment") > -1 ? "comment" : "share")), Q = {element: M || {}, service: P || "unknown", url: R ? O.followUrl : (O.trackurl || O.url)};
                _a.ed.fire("addthis.menu." + N, w.addthis || {}, Q);
            }

            function u(P, R, T, N, Q) {
                var M = {}, S = {}, O;
                for (O in T) {
                    M[O] = T[O];
                }
                for (O in N) {
                    S[O] = N[O];
                }
                if (!M.xid) {
                    M.xid = J.util.cuid();
                }
                S.hdl = 1;
                var a = s(P, R, M, S);
                n.push(J.ajs(a, 1));
                if (!Q) {
                    q(P, M, N, null, R);
                }
            }

            var t = {};
            var x = {};
            var p = [];

            function e(a) {
                _a.util.each(a, function (M, N) {
                    t[M] = N;
                });
            }

            function m(a) {
                p.push(a);
            }

            function F() {
                _a.util.each(p, function (a, M) {
                    M();
                });
            }

            function v(M, N, a) {
                if (t[M]) {
                    try {
                        t[M](N, a, M);
                        if (N) {
                            if ((N.parentNode.className || "").indexOf("toolbox") > -1) {
                                N.parentNode.services = N.parentNode.services || {};
                                N.parentNode.services[M] = 1;
                            }
                            if ((N.className || "").indexOf("at300") == -1) {
                                N.className += " at300b";
                            }
                        }
                        return true;
                    } catch (O) {
                        return false;
                    }
                }
                return false;
            }

            function c(a) {
                _a.util.each(a, function (M, N) {
                    x[M] = {};
                    _a.util.each(N, function (O, P) {
                        x[M][O] = P;
                    });
                });
            }

            function b(M, N, a) {
                var O = function () {
                };
                if (x[M]) {
                    if (!x[M].require || x[M].require(M, N, a)) {
                        _a.util.each(x[M], function (P, Q) {
                            if (P == "_after") {
                                O = Q;
                            } else {
                                N[P] = function (R) {
                                    R = R || {};
                                    R.el = N;
                                    R.service = M;
                                    return Q(R);
                                };
                            }
                        });
                    }
                    O(N);
                    return true;
                }
                return false;
            }

            function E(N, M, a) {
                return H() + "tellfriend.php?&fromname=aaa&fromemail=" + _euc(M.from) + "&frommenu=1&tofriend=" + _euc(M.to) + (N.email_template ? "&template=" + _euc(N.email_template) : "") + (M.vars ? "&vars=" + _euc(M.vars) : "") + "&lng=" + (J.lng() || "xx") + "&captcha_provider=nucaptcha&note=" + _euc(M.note) + "&" + L("email", null, null, a);
            }

            h.share = h.share || {};
            h.util.extend(h.share, {auw: o, ocw: i, ftw: I, stw: B, siw: G, pts: g, unt: k, uadd: L, genurl: s, geneurl: E, genieu: j, acb: C, gcp: K, gfu: z, svcurl: H, track: u, notify: q, links: f, register: e, registerListeners: c, sub: F, registerSubscriber: m, extern: v, externEvents: b});
        })(_a, _a.api, _a);
        (function (e, v, z) {
            var C = document, h = {}, g = {}, o, B = [], c = 0, t = 0, u = 0, j = true, E = 0, x = 0, i = C.domain.search(/\.addthis\.com$/i) != -1 ? 1 : 0;

            function q() {
                return((_atc.ltj && m() && n()) || (r() && FB.XFBML && FB.XFBML.parse));
            }

            function n() {
                if (o === _1) {
                    try {
                        var F = (document.getElementsByTagName("html"))[0];
                        if (F) {
                            if (F.getAttribute && F.getAttribute("xmlns:fb")) {
                                o = true;
                            } else {
                                if (_a.bro.msi) {
                                    var d = F.outerHTML.substr(0, F.outerHTML.indexOf(">"));
                                    if (d.indexOf("xmlns:fb") > -1) {
                                        o = true;
                                    }
                                }
                            }
                        }
                    } catch (G) {
                        o = false;
                    }
                }
                return o;
            }

            function r() {
                return(typeof(w.FB) == "object" && FB.Event && typeof(FB.Event.subscribe) == "function");
            }

            function m() {
                return!w.FB_RequireFeatures && (!w.FB || (!FB.Share && !FB.Bootstrap));
            }

            function y(H, F) {
                var d = {}, I = g[F], G = (addthis_config.data_ga_tracker || addthis_config.data_ga_property);
                for (k in addthis_share) {
                    d[k] = addthis_share[k];
                }
                if (I) {
                    for (k in I) {
                        d[k] = I[k];
                    }
                }
                d.url = F;
                _a.share.track(H, 0, d, addthis_config);
                if (G) {
                    _a.gat(H, F, addthis_config, d);
                }
            }

            function f() {
                var d, F;
                if (C.location.href.indexOf(_atr) == -1 && !_a.sub && !c) {
                    if (r()) {
                        c = 1;
                        FB.Event.subscribe("message.send", function (G) {
                            y("facebook_send", G);
                        });
                        FB.Event.subscribe("edge.create", function (G) {
                            if (!h[G]) {
                                y("facebook_like", G);
                                h[G] = 1;
                            }
                        });
                        FB.Event.subscribe("edge.remove", function (G) {
                            if (h[G]) {
                                y("facebook_unlike", G);
                                h[G] = 0;
                            }
                        });
                        FB.Event.subscribe("comment.create", function (G) {
                            y("facebook_comment", G.href);
                        });
                        FB.Event.subscribe("comment.remove", function (G) {
                            y("facebook_uncomment", G.href);
                        });
                    } else {
                        if (w.fbAsyncInit && !u) {
                            if (t < 3) {
                                setTimeout(f, 3000 + 1000 * 2 * (t++));
                            }
                            u = 1;
                        }
                    }
                }
            }

            # MS: Ensure FB API JS is loaded here...

            function s(d, I) {
                var H = "fb-root", G = C.getElementById(H), F = w.fbAsyncInit;
                B.push(d);
                if (r() && FB.XFBML && FB.XFBML.parse) {
                    f();
                    FB.XFBML.parse(d);
                } else {
                    if (!F) {
                        if (!G) {
                            G = C.ce("div");
                            G.id = H;
                            document.body.appendChild(G);
                        }
                        if (!F) {
                            var J = C.createElement("script");
                            J.src = C.location.protocol + "//connect.facebook.net/" + (I || _a.gfl(_a.lng())) + "/all.js";
                            J.async = true;
                            G.appendChild(J);
                            F = function () {
                                var M = C.getElementsByTagName("meta"), K = null;
                                for (var L = 0; L < M.length; L++) {
                                    if (M[L].property == "fb:app_id" || M[L].name == "fb:app_id") {
                                        K = M[L].content;
                                        break;
                                    }
                                }
                                FB.init({appId: K ? K : (i ? "140586622674265" : "172525162793917"), status: true, cookie: true});
                            };
                        }
                    }
                    if (j) {
                        j = false;
                        w.__orig__fbAsyncInit = F;
                        w.fbAsyncInit = function () {
                            w.__orig__fbAsyncInit();
                            for (var K = 0; K < B.length; K++) {
                                FB.XFBML.parse(B[K]);
                            }
                            f();
                        };
                    }
                }
            }

            function p(K, H) {
                if (K.ost) {
                    return;
                }
                H.conf = H.conf || {};
                H.conf.data_track_clickback = H.conf.data_track_linkback = false;
                var I = _parseThirdPartyAttributes(K, "fb:share"), M = H.share, J, N = "", F, d = I.href || H.share.url;
                if (!I.layout) {
                    I.layout = "vertical";
                }
                if (!M.passthrough) {
                    M.passthrough = {};
                }
                M.passthrough.facebook = _a.util.toKV(I);
                N = _a.util.rtoKV(M);
                if (I.layout === "vertical") {
                    var G = 66, L = 66;
                    if (!I.height) {
                        I.height = G;
                    }
                    if (!I.width) {
                        I.width = L;
                    }
                } else {
                    if (I.layout === "horizontal") {
                        var L = 106, G = 19;
                        if (!I.width) {
                            I.width = L;
                        }
                    }
                }
                J = _a.util.toKV(I), K.innerHTML = "<iframe frameborder=\"0\" role=\"presentation\" scrolling=\"no\" allowTransparency=\"true\" scrollbars=\"no\"" + (_a.bro.ie6 ? " src=\"javascript:''\"" : "") + " style=\"width:" + L + "px; height:" + G + "px;\"></iframe>";
                F = K.firstChild;
                if (!H.conf.pubid) {
                    H.conf.pubid = addthis_config.pubid || _a.pub();
                }
                F.src = _atc.rsrcs.fbshare + ((_a.bro.ie6 || _a.bro.ie7) ? "?" : "#") + "href=" + _euc(d) + "&dr=" + _euc(_a.dr) + "&conf=" + _euc(_a.util.toKV(H.conf)) + "&share=" + _euc(N) + "&fb=" + _euc(J);
                K.noh = K.ost = 1;
            }

            function A(F, d) {
                if (F.ost || _a.bro.ie6) {
                    return;
                }
                var G, I = _parseThirdPartyAttributes(F, "fb:send"), J = "", K = I.width || 55, H = I.height || 20;
                passthrough = _a.util.toKV(I);
                _a.ufbl = 1;
                if (_a.share.fb.ready()) {
                    I.href = I.href || _a.track.mgu(d.share.url, {defrag: 1});
                    F.innerHTML = "<fb:send ref=\"" + _a.share.gcp(d.share, d.conf, ".send").replace(",", "_") + "\"></fb:send>";
                    _a.util.each(I, function (M, L) {
                        F.firstChild.setAttribute(M, L);
                    });
                    _a.share.fb.load(F);
                } else {
                    F.className = "";
                    F.innerHTML = "<span></span>";
                    F.style.width = F.style.height = "0px";
                }
                F.noh = F.ost = 1;
            }

            /* Subscribe to FB events to get the number of shares for this URL from Facebook */
            function p(M, K) {
                if (M.ost) {
                    return;
                }
                var I, F, L = _a.api.ptpa(M, "fb:subscribe"), G = "", J = L.layout || "button_count", d = {standard: [450, L.show_faces ? 80 : 35], button_count: [90, 25], box_count: [55, 65]}, N = L.width || (d[J] ? d[J][0] : 100), H = L.height || (d[J] ? d[J][1] : 25);
                passthrough = _a.util.toKV(L);
                _a.ufbl = 1;
                if (q()) {
                    if (L.layout === _1) {
                        L.layout = "button_count";
                    }
                    if (L.show_faces === _1) {
                        L.show_faces = "false";
                    }
                    if (L.action === _1) {
                        L.action = "subscribe";
                    }
                    if (L.width === _1) {
                        L.width = N;
                    }
                    if (L.font === _1) {
                        L.font = "arial";
                    }
                    if (L.href === _1) {
                        L.href = _a.track.mgu(K.share.url, {defrag: 1});
                    }
                    if (!K.share.xid) {
                        K.share.xid = _a.util.cuid();
                    }
                    g[L.href] = {};
                    for (F in K.share) {
                        g[L.href][F] = K.share[F];
                    }
                    M.innerHTML = "<fb:subscribe ref=\"" + _euc(_a.share.gcp(K.share, K.conf, ".sub").replace(",", "_")) + "\"></fb:subscribe>";
                    _a.util.each(L, function (P, O) {
                        M.firstChild.setAttribute(P, O);
                    });
                    s(M);
                } else {
                    if (!_a.bro.msi) {
                        I = C.ce("iframe");
                    } else {
                        M.innerHTML = "<iframe frameborder=\"0\" scrolling=\"no\" allowTransparency=\"true\" scrollbars=\"no\"" + (_a.bro.ie6 ? " src=\"javascript:''\"" : "") + "></iframe>";
                        I = M.firstChild;
                    }
                    I.style.overflow = "hidden";
                    I.style.scrolling = "no";
                    I.style.scrollbars = "no";
                    I.style.border = "none";
                    I.style.borderWidth = "0px";
                    I.style.width = N + "px";
                    I.style.height = H + "px";
                    I.src = "//www.facebook.com/plugins/subscribe.php?href=" + _euc(_a.track.mgu(K.share.url, {defrag: 1})) + "&layout=button_count&show_faces=false&width=100&action=subscribe&font=arial&" + passthrough;
                    if (!_a.bro.msi) {
                        M.appendChild(I);
                    }
                }
                M.noh = M.ost = 1;
            }

            function D(M, K) {
                if (M.ost) {
                    return;
                }
                var N, G, d, L = _a.api.ptpa(M, "fb:like"), H = "", J = L.layout || "button_count", F = {standard: [450, L.show_faces ? 80 : 35], button_count: [90, 25], box_count: [55, 65]}, O = L.width || (F[J] ? F[J][0] : 100), I = L.height || (F[J] ? F[J][1] : 25);
                passthrough = _a.util.toKV(L);
                _a.ufbl = 1;
                if (q()) {
                    if (L.layout === _1) {
                        L.layout = "button_count";
                    }
                    if (L.show_faces === _1) {
                        L.show_faces = "false";
                    }
                    if (L.action === _1) {
                        L.action = "like";
                    }
                    if (L.width === _1) {
                        L.width = O;
                    }
                    if (L.font === _1) {
                        L.font = "arial";
                    }
                    if (L.href === _1) {
                        d = _a.util.clone(K.share.url_transforms || {});
                        d.defrag = 1;
                        L.href = _a.track.mgu(K.share.url, d);
                    }
                    L.send = false;
                    if (!K.share.xid) {
                        K.share.xid = _a.util.cuid();
                    }
                    g[L.href] = {};
                    for (G in K.share) {
                        g[L.href][G] = K.share[G];
                    }
                    M.innerHTML = "<div class=\"fb-like data-ref=\"" + _euc(_a.share.gcp(K.share, K.conf, ".like").replace(",", "_")) + "\"></div>";
                    _a.util.each(L, function (Q, P) {
                        M.firstChild.setAttribute("data-" + Q, P);
                    });
                    s(M);
                } else {
                    if (!_a.bro.msi) {
                        N = C.ce("iframe");
                    } else {
                        M.innerHTML = "<iframe frameborder=\"0\" scrolling=\"no\" allowTransparency=\"true\" scrollbars=\"no\"" + (_a.bro.ie6 ? " src=\"javascript:''\"" : "") + "></iframe>";
                        N = M.firstChild;
                    }
                    N.style.overflow = "hidden";
                    N.style.scrolling = "no";
                    N.style.scrollbars = "no";
                    N.style.border = "none";
                    N.style.borderWidth = "0px";
                    N.style.width = O + "px";
                    N.style.height = I + "px";
                    N.src = "//www.facebook.com/plugins/like.php?href=" + _euc(_a.track.mgu(K.share.url, {defrag: 1})) + "&layout=button_count&show_faces=false&width=100&action=like&font=arial&" + passthrough;
                    if (!_a.bro.msi) {
                        M.appendChild(N);
                    }
                }
                M.noh = M.ost = 1;
            }

            function a(K, H) {
                if (K.ost) {
                    return;
                }
                H.conf = H.conf || {};
                H.conf.data_track_clickback = H.conf.data_track_linkback = false;
                var I = _parseThirdPartyAttributes(K, "fb:share"), M = H.share, J, N = "", F, d = I.href || H.share.url;
                if (!I.layout) {
                    I.layout = "vertical";
                }
                if (!M.passthrough) {
                    M.passthrough = {};
                }
                M.passthrough.facebook = _a.util.toKV(I);
                N = _a.util.rtoKV(M);
                if (I.layout === "vertical") {
                    var G = 66, L = 66;
                    if (!I.height) {
                        I.height = G;
                    }
                    if (!I.width) {
                        I.width = L;
                    }
                } else {
                    if (I.layout === "horizontal") {
                        var L = 106, G = 19;
                        if (!I.width) {
                            I.width = L;
                        }
                    }
                }
                J = _a.util.toKV(I), K.innerHTML = "<iframe frameborder=\"0\" role=\"presentation\" scrolling=\"no\" allowTransparency=\"true\" scrollbars=\"no\"" + (_a.bro.ie6 ? " src=\"javascript:''\"" : "") + " style=\"width:" + L + "px; height:" + G + "px;\"></iframe>";
                F = K.firstChild;
                if (!H.conf.pubid) {
                    H.conf.pubid = addthis_config.pubid || _a.pub();
                }
                F.src = _atc.rsrcs.fbshare + ((_a.bro.ie6 || _a.bro.ie7) ? "?" : "#") + "href=" + _euc(d) + "&dr=" + _euc(_a.dr) + "&conf=" + _euc(_a.util.toKV(H.conf)) + "&share=" + _euc(N) + "&fb=" + _euc(J);
                K.noh = K.ost = 1;
            }

            /* Call Facebook sharer.php */

            function b(J, H, L, F) {
                var K = (J.passthrough || {}).facebook || {}, I = {}, d, G = E ? ("http://www.facebook.com/sharer.php?&t=" + _euc(J.title) + "&u=" + _euc(_a.share.acb("facebook", J, H))) : (x ? ("http://www.facebook.com/connect/prompt_feed.php?message=" + _euc(J.title) + "%0A%0D" + _euc(_a.share.acb("facebook", J, H))) : i ? "http://www.facebook.com/dialog/feed?redirect_uri=" + _euc("http://s7.addthis.com/static/postshare/c00.html") + "&app_id=140586622674265&link=" + _euc(_a.share.acb("facebook", J, H)) + "&name=" + _euc(J.title) + "&description=" + _euc(J.description || "") : _a.share.genurl("facebook", 0, J, H));
                if (E || x || i) {
                    for (d in H) {
                        I[d] = H[d];
                    }
                    I.hdl = 1;
                    _a.share.track("facebook", 0, J, I, 1);
                }
                if (H.ui_use_same_window || F) {
                    l.href = G;
                } else {
                    w.open(G, "_blank");
                }
                return false;
            }

            e.share = e.share || {};
            e.share.register({facebook_like: D, facebook_send: A, facebook_share: a, facebook_subscribe: p});
            e.share.registerSubscriber(f);
            e.share.registerListeners({facebook: {_after: function (d) {
                d.ins = 1;
                d.noh = 1;
            }, onclick: function (F) {
                var G = F.el, d = F.service;
                if (G.ins != 0 && window.addthis.auth && window.addthis.auth.fbishare) {
                    window.addthis.auth.lockiframe[d] = true;
                    window.addthis.auth.loadIframe(G, d, G.share, G.conf);
                } else {
                    return _a.share.fb.share(G.share, G.conf);
                }
            }, onmouseover: function (F) {
                var G = F.el, d = F.service;
                if (G.ins != 0 && window.addthis.auth && window.addthis.auth.fbishare) {
                    window.addthis.auth.keepiframe[d]++;
                    window.addthis.auth.loadIframe(G, d, G.share, G.conf);
                }
            }, onmouseout: function (F) {
                var G = F.el, d = F.service;
                if (G.ins != 0 && window.addthis.auth && window.addthis.auth.fbishare) {
                    window.addthis.auth.keepiframe[d]--;
                    setTimeout(function () {
                        window.addthis.auth.hideIframe(d);
                    }, 1000);
                }
            }}});
            e.share.fb = {like: D, send: A, subs: p, has: r, ns: n, ready: q, compat: m, share: b, sub: f, load: s};
        })(_a, _a.api, _a);
        (function (e, f, i) {
            var j = document, c = false, g = 0;

            function b() {
                return(window.getglue && window.getglue.on);
            }

            function h(m, l) {
                var d = (((m || {}).passthrough || {}).objectId) || "none";
                _a.share.ocw("http://w.getglue.com/convo/checkins?type=conversation&objectId=" + _euc(d) + "&source=" + _euc(m.url));
                setTimeout(function () {
                    (new Image()).src = genurl("getglue", 0, m, l);
                }, 100);
            }

            function k(m, l, o) {
                var d = (((q || {}).passthrough || {}).objectId);
                if (!d) {
                    m.innerHTML = "<a class=\"glue-checkin-widget\"></a>";
                    window.console && console.log("Skipping Get Glue widget: no objectId defined");
                    return;
                }
                if (!b()) {
                    var p = document.createElement("script");
                    p.src = "//widgets.getglue.com/checkin.js";
                    var t = document.getElementsByTagName("script")[0];
                }
                var r = _parseThirdPartyAttributes(m, "getglue"), q = l.share;
                t.parentNode.insertBefore(p, t);
                m.innerHTML = "<a class=\"glue-checkin-widget\" href=\"http://getglue.com/" + d + "\" data-type=\"horizontal\">Checkin on Get Glue</a>";
            }

            function a(d) {
                if (c) {
                    return;
                }
                var m = d ? d.share : addthis_share, l = d ? d.conf : addthis_config;
                if (b()) {
                    getglue.on("checkin", function (p) {
                        var n = {};
                        for (var o in m) {
                            n[o] = m[o];
                        }
                        _a.share.track("getglue", 0, n, l);
                    });
                    c = true;
                } else {
                    if (g < 5) {
                        setTimeout(function () {
                            a(d);
                        }, 500 * (g++));
                    }
                }
            }

            e.share = e.share || {};
            e.share.registerSubscriber(a);
            e.share.register({getglue_checkin: k});
            e.share.getglue = {sub: a, ps: h, gg: k};
        })(_a, _a.api, _a);
        (function (e, h, m) {
            var p = document, f = {}, n = {}, a = 0, k = 0, g = 0, o = true;

            function i() {
                return(window.gapi && window.gapi.plusone);
            }

            function b() {
                if (i()) {
                    gapi.plusone.go();
                    return;
                } else {
                    if (!k) {
                        k = 1;
                        var d = new _a.resource.Resource("plusoneapi", "//apis.google.com/js/plusone.js", i);
                        d.addEventListener("load", function () {
                            b();
                        });
                        d.load();
                    }
                }
            }

            function c(d) {
                var r = d ? d.share : addthis_share, q = d ? d.conf : addthis_config;
                window._at_plusonecallback = window._at_plusonecallback || function (u) {
                    var s = {};
                    for (var t in r) {
                        s[t] = r[t];
                    }
                    s.url = u.href;
                    _a.share.track("google_" + (u.state == "off" ? "un" : "") + "plusone", 0, s, q);
                };
                window._at_pluscallback = window._at_pluscallback || function (u) {
                    var s = {};
                    for (var t in r) {
                        s[t] = r[t];
                    }
                    s.url = u.href;
                    _a.share.track("googleplus_counter", 0, s, q);
                };
            }

            function j(q, d, r) {
                if (q.ost) {
                    return;
                }
                var v = r === "googleplus_counter" ? "plus" : "plusone", t = _parseThirdPartyAttributes(q, "g:" + v), s = document.ce("g:" + v), u = "";
                _a.gpl = _a.gpl || {}, _a.gpl.lang = _a.gpl.lang || null;
                t.lang = _a.gpl.lang = _a.gpl.lang || ((typeof t.lang == "undefined") ? null : t.lang);
                window.___gcfg = window.___gcfg || {};
                window.___gcfg.lang = _a.gpl.lang || t.lang || _a.ggl((d.conf || {}).ui_language || window.addthis_language) || "en-US";
                t.href = d.share.url = t.href || _a.track.mgu(d.share.url, {defrag: 1});
                if (v == "plusone") {
                    t.size = t.size || (check32(q, true) ? "standard" : "small");
                    t.callback = t.callback || "_at_" + v + "callback";
                } else {
                    t.href = _a.share.acb("google_plusone_share", d.share, addthis_config);
                    t.action = "share";
                }
                _a.share.goog.sub(d);
                _a.util.each(t, function (y, x) {
                    s.setAttribute(y, x);
                });
                q.appendChild(s);
                q.noh = q.ost = 1;
                b();
            }

            function l(q, d) {
                if (q.ost) {
                    return;
                }
                q.title = "Follow on Google+";
                var v = _parseThirdPartyAttributes(q, "g:plusone");
                v.size = (v.size || "").toLowerCase();
                if (document.head) {
                    var x = document.createElement("link");
                    x.setAttribute("href", v.href);
                    x.setAttribute("rel", "publisher");
                    document.head.appendChild(x);
                }
                v.url = v.href = v.href || "";
                if (v.size == "badge" || v.size == "smallbadge") {
                    var r = document.ce("g:plus"), u = "";
                    _a.gpl = _a.gpl || {}, _a.gpl.lang = _a.gpl.lang || null;
                    v.lang = _a.gpl.lang = _a.gpl.lang || ((typeof v.lang == "undefined") ? null : v.lang);
                    window.___gcfg = window.___gcfg || {};
                    window.___gcfg.lang = _a.gpl.lang || v.lang || _a.ggl((d.conf || {}).ui_language || window.addthis_language) || "en-US";
                    _a.util.each(v, function (z, y) {
                        r.setAttribute(z, y);
                    });
                    q.appendChild(r);
                    q.noh = q.ost = 1;
                    b();
                } else {
                    var s = "32";
                    if (v.size == "small") {
                        s = "16";
                    } else {
                        if (v.size == "large") {
                            s = "64";
                        }
                    }
                    var t = txt = txt2 = ieQ = "";
                    if (v.name) {
                        if (document.compatMode == "BackCompat" && _a.bro.msi) {
                            ieQ = "onclick=\"window.open(" + v.href + "?prsrc=3)\"";
                        }
                        t = "cursor:default;display:inline-block;text-decoration:none;color:#333;font:13px/16px arial,sans-serif;" + ((v.size == "large") ? "text-align:center;white-space:nowrap;" : "");
                        if (v.size == "large") {
                            txt2 = "<br/><span style=\"font-weight:bold;\">" + v.name + "</span><br/><span> on Google+ </span>";
                        } else {
                            txt = "<span style=\"display:inline-block;font-weight:bold;vertical-align:top;margin-right:5px;" + ((v.size == "medium") ? "margin-top:8px;" : "") + "\">" + v.name + "</span><span style=\"display:inline-block;vertical-align:top; margin-right:" + ((v.size == "medium") ? "15px;margin-top:8px;" : "13px;") + "\">on</span>";
                        }
                    }
                    q.setAttribute("target", "_blank");
                    q.style.textDecoration = "none";
                    q.style.cursor = "default";
                    q.innerHTML = "<span style=\"" + t + "\">" + txt + "<img " + ieQ + " src=\"https://ssl.gstatic.com/images/icons/gplus-" + s + ".png\" alt=\"" + q.title + "\" style=\"border:0;width:" + s + "px;height:" + s + "px;cursor:pointer;\" onmouseover=\"this.style.opacity=0.8;this.style.filter='alpha(opacity=80)';\" onmouseout=\"this.style.opacity=1.0;this.style.filter='alpha(opacity=100)';\">" + txt2 + "</span>";
                    q.noh = q.ost = 1;
                    q.onclick = function (y) {
                        if (!y) {
                            var y = window.event;
                        }
                        var A = y.originalTarget || y.relatedTarget || y.toElement || y.srcElement, z = "";
                        if (!A) {
                            return;
                        }
                        while (A.nodeName != "A") {
                            A = A.parentNode;
                        }
                        z = ((A.attributes || {})["g:plusone:href"] || {}).value || window.location.href;
                        w.open(z + "?prsrc=3");
                        _a.share.track("google_plusone_badge", 1, v, config);
                        return false;
                    };
                }
                q.onmouseover = function () {
                    this.className = (this.className.indexOf("at300bo") > -1) ? this.className : this.className.replace(/at300b/i, "at300bo");
                };
                q.noh = q.ost = 1;
            }

            e.share = e.share || {};
            e.share.register({google_plusone: j, googleplus_counter: j, google_plusone_badge: l});
            e.share.registerSubscriber(c);
            e.share.registerListeners({google_plusone: {onclick: function (d) {
                return false;
            }}});
            e.share.goog = {plusone: j, badge: l, has: i, sub: c};
        })(_a, _a.api, _a);
        (function (a, e, b) {
            var f = document;

            function c(g, d) {
                var h = function (j) {
                    if ((typeof window.Intent === "undefined" && typeof window.WebKitIntent === "undefined") || (!window.navigator || (typeof window.navigator.startActivity === "undefined" && typeof window.navigator.webkitStartActivity === "undefined"))) {
                        return false;
                    }
                    if (!window.Intent || (typeof window.Intent["native"] !== "undefined" && !window.Intent["native"])) {
                        return true;
                    }
                    if (_a.bro.chr) {
                        var l = navigator.userAgent;
                        var k = /Chrome\/(.*)\./.exec(l);
                        if (k.length >= 1) {
                            var i = parseInt(k[1].substring(0, 2));
                            if (i < 19) {
                                var m = function () {
                                    if (typeof addthis_config === "undefined") {
                                        return false;
                                    }
                                    if (typeof addthis_config.webintents === "undefined") {
                                        return false;
                                    }
                                    if (!addthis_config.webintents) {
                                        return false;
                                    }
                                    return true;
                                };
                                return(m());
                            }
                        }
                    }
                    return true;
                };
                if (!h()) {
                    return;
                }
                options.noevents = true;
                g.onclick = function (k) {
                    var i = window.Intent || window.WebKitIntent;
                    var j = new i("http://webintents.org/share", "text/uri-list", d.share.url);
                    if (typeof navigator.startActivity !== "undefined") {
                        navigator.startActivity(j);
                    } else {
                        if (typeof navigator.webkitStartActivity !== "undefined") {
                            navigator.webkitStartActivity(j);
                        }
                    }
                    _a.share.track("intent_share_url", 0, d.share, d.conf);
                    return false;
                };
            }

            a.share = a.share || {};
            a.share.register({intent_share_url: c});
            a.share.registerListeners({intent_share_url: {}});
        })(_a, _a.api, _a);
        (function (b, e, c) {
            var f = document;

            function a(g, d, h) {
                if (g.ost) {
                    return;
                }
                var j = _parseThirdPartyAttributes(g, "pi:pinit"), k = _a.util.clone(d.share);
                if (j.media) {
                    j.url = k.url = j.url || (((addthis_share || {}).passthrough || {}).pinterest_share || {}).url || _a.track.mgu(k.url, {defrag: 1});
                    j.url = _euc(_a.track.mgu(k.url));
                    if (j.layout == "horizontal") {
                        j.layout = "&layout=horizontal";
                        j.width = "110px";
                        j.height = "25px";
                    } else {
                        if (j.layout == "vertical") {
                            j.layout = "&layout=vertical";
                            j.width = "49px";
                            j.height = "59px";
                        } else {
                            j.layout = "";
                            j.width = "49px";
                            j.height = "25px";
                        }
                    }
                    g.innerHTML = "<iframe frameborder=\"0\" role=\"presentation\" scrolling=\"no\" allowTransparency=\"true\" scrollbars=\"no\"" + (_a.bro.ie6 ? " src=\"javascript:''\"" : "") + " style=\"width:" + j.width + "; height:" + j.height + ";\"></iframe>";
                    pinitButton = g.firstChild;
                    if (!d.conf.pubid) {
                        d.conf.pubid = addthis_config.pubid || _a.pub();
                    }
                    pinitButton.src = _atc.rsrcs.pinit + ((_a.bro.ie6 || _a.bro.ie7) ? "?" : "#") + "url=" + _euc(j.url) + "&media=" + _euc(j.media || (((addthis_share || {}).passthrough || {}).pinterest_share || {}).media || "") + "&description=" + _euc(j.description || (((addthis_share || {}).passthrough || {}).pinterest_share || {}).description || "") + j.layout + "&ats=" + _euc(_a.util.rtoKV(k)) + "&atc=" + _euc(_a.util.rtoKV(addthis_config));
                } else {
                    var i = f.createElement("img");
                    g.innerHTML = "<span class=\"at_PinItButton\"></span>";
                    g.onclick = function () {
                        _a.share.img();
                        return false;
                    };
                }
                g.noh = g.ost = 1;
            }

            b.share = b.share || {};
            b.share.register({pinterest: a, pinterest_count: a, pinterest_pinit: a});
            b.share.registerListeners({pinterest_share: {onclick: function (g) {
                var h = g.el;
                if (_atc.ver >= 300) {
                    var d = _a.util.clone(h.config || addthis_config);
                    d.ui_pane = "image";
                    d.image_service = "pinterest_share";
                    d.image_header = "Pin It on Pinterest";
                    window.addthis.menu(h, d, h.share || addthis_share);
                } else {
                    _a.share.imgVer("pinterest_share");
                }
                return false;
            }}});
            b.share.pinterest = {pinit: a};
        })(_a, _a.api, _a);
        (function (a, c, b) {
            var e = document;
            a.share = a.share || {};
            a.share.registerListeners({thefancy: {onclick: function (f) {
                var g = f.el;
                if (_atc.ver >= 300) {
                    var d = _a.util.clone(g.config || addthis_config);
                    d.ui_pane = "image";
                    d.image_service = "thefancy";
                    d.image_header = "Fancy It";
                    window.addthis.menu(g, d, g.share || addthis_share);
                } else {
                    _a.share.imgVer("thefancy");
                }
                return false;
            }}});
        })(_a, _a.api, _a);
        (function (b, c, h) {
            var i = document, f = 0, m = 0, a = 0;

            function k() {
                return(window.twttr && window.twttr.events);
            }

            function g(d) {
                if (k() && f == 1) {
                    e();
                    f = a = 0;
                    return;
                } else {
                    if (!f) {
                        _a.ajs("//platform.twitter.com/widgets.js", 1, null, null, null, true);
                        f = 1;
                    }
                }
                if (a < 3) {
                    setTimeout(g, 3000 + 1000 * 2 * (a++));
                }
            }

            function e(d) {
                if (window.twttr && !m && twttr.events) {
                    m = 1;
                    twttr.events.bind("click", function (s) {
                        if (s.region == "tweetcount") {
                            return;
                        }
                        if (((s.target || {}).conf || {}).follow) {
                            return false;
                        }
                        var r = (s.target.parentNode && s.target.parentNode.share) ? s.target.parentNode.share : {}, p = r.url || s.target.baseURI, t = r.title || addthis_share.title, n = {};
                        for (var o in addthis_share) {
                            n[o] = addthis_share[o];
                        }
                        for (var o in r) {
                            n[o] = r[o];
                        }
                        n.url = p;
                        if (t) {
                            n.title = t;
                        }
                        var q = (s.region == "follow" || s.region == "following") ? false : true;
                        _a.share.track(((q) ? "tweet" : "twitter_follow_native"), ((q) ? 0 : 1), n, addthis_config);
                    });
                }
            }

            function j(u, r, y) {
                if (u.ost) {
                    return;
                }
                var v = _parseThirdPartyAttributes(u, "tw"), z = r.share, s = v.width || 56, o = v.height || 20, t, B = "", q;
                r.share.url_transforms = r.share.url_transforms || {};
                r.share.url_transforms.defrag = 1;
                var n = _a.util.clone(r.share), p = ((_a.bro.msi && i.compatMode == "BackCompat") || r.conf.ui_use_tweet_iframe || (r.share.url_transforms.shorten || {}).twitter == "bitly") ? true : false;
                if (typeof v.url != "undefined") {
                    n.url = v.url;
                } else {
                    n.url = v.url = _a.track.mgu((n.url || (addthis_share || {}).url), n.url_transforms, n, "twitter");
                }
                if (!v.counturl) {
                    v.counturl = (p) ? v.url.replace(/=/g, "%253D") : v.url;
                }
                if (n.url.search(/\.+.*(\/|\?)/) == -1) {
                    n.url += "/";
                }
                v.url = _a.share.acb("twitter", n, addthis_config);
                v.count = v.count || "horizontal";
                z.passthrough = z.passthrough || {};
                var A = z.passthrough.twitter || {};
                r.text = v.text = v.text || ((r.share.title == i.title) ? A.text : r.share.title) || "";
                r.related = v.related = v.related || A.related || "";
                r.hashtags = v.hashtags = v.hashtags || A.hashtags || "";
                if (v.via || A.via || (r.text.match(/via\s+@[a-zA-Z0-9_\.]+/i))) {
                    r.via = v.via = v.via || A.via || (r.text.match(/via\s+@[a-zA-Z0-9_\.]+/i) ? r.text.match(/via\s+@[a-zA-Z0-9_\.]+/i).split("@")[1] : "");
                }
                B = _a.util.rtoKV(z, "#@!");
                if (v.count === "vertical") {
                    o = 62;
                    v.height = v.height || o;
                } else {
                    if (v.count === "horizontal") {
                        s = 110;
                        v.width = v.width || s;
                    }
                }
                if (v.width) {
                    s = v.width;
                }
                if (v.height) {
                    o = v.height;
                }
                t = _a.util.toKV(v, "#@!");
                if (p) {
                    u.innerHTML = "<iframe frameborder=\"0\" role=\"presentation\" scrolling=\"no\" allowTransparency=\"true\" scrollbars=\"no\"" + (_a.bro.ie6 ? " src=\"javascript:''\"" : "") + " style=\"width:" + s + "px; height:" + o + "px;\"></iframe>";
                    q = u.firstChild;
                    if (!r.conf.pubid) {
                        r.conf.pubid = addthis_config.pubid || _a.pub();
                    }
                    q.src = _atc.rsrcs.tweet + ((_a.bro.ie6 || _a.bro.ie7) ? "?" : "#") + "href=" + _euc(v.url) + "&dr=" + _euc(_a.dr) + "&conf=" + _euc(_a.util.toKV(r.conf)) + "&share=" + _euc(B) + "&tw=" + _euc(t);
                } else {
                    var x = (z.templates || {}).twitter || "";
                    if (!v.text) {
                        v.text = z.title == "" ? "" : z.title + ":";
                    }
                    var w = i.ce("a");
                    w.href = "http://twitter.com/share";
                    w.className = "twitter-share-button";
                    w.innerHTML = "Tweet";
                    for (var d in v) {
                        if (v.hasOwnProperty(d)) {
                            w.setAttribute("data-" + d, v[d]);
                        }
                    }
                    u.appendChild(w);
                    if (!r.conf.pubid) {
                        r.conf.pubid = addthis_config.pubid || _a.pub();
                    }
                    g(u);
                }
                u.noh = u.ost = 1;
            }

            function l(o, n) {
                var q = _parseThirdPartyAttributes(o, "tf"), d = _parseThirdPartyAttributes(o, "tw"), p = document.ce("a");
                q.screen_name = d.screen_name || q.screen_name || "addthis";
                p.href = "http://twitter.com/" + q.screen_name;
                p.className = "twitter-follow-button";
                p.innerHTML = "Follow @" + q.screen_name;
                _a.util.each(q, function (s, r) {
                    p.setAttribute("data-" + s, r);
                });
                _a.util.each(d, function (s, r) {
                    p.setAttribute("data-" + s, r);
                });
                o.ost = 1;
                o.appendChild(p);
                if (!n.conf.pubid) {
                    n.conf.pubid = addthis_config.pubid || _a.pub();
                }
                g(o);
            }

            b.share = b.share || {};
            b.share.register({tweet: j, twitter_follow_native: l});
            b.share.registerSubscriber(e);
            b.share.registerListeners({twitter: {_after: function (d) {
                d.ins = 1;
                d.noh = 1;
            }, onclick: function (n) {
                var p = n.el, d = n.service;
                if (p.ins != 0 && window.addthis.auth && window.addthis.auth.twishare) {
                    window.addthis.auth.lockiframe[d] = true;
                    window.addthis.auth.loadIframe(p, d, p.share, p.conf);
                } else {
                    return _a.share.pts(p.share, p.conf);
                }
            }, onmouseover: function (n) {
                var p = n.el, d = n.service;
                if (p.ins != 0 && window.addthis.auth && window.addthis.auth.twishare) {
                    window.addthis.auth.keepiframe[d]++;
                    window.addthis.auth.loadIframe(p, d, p.share, p.conf);
                }
            }, onmouseout: function (n) {
                var p = n.el, d = n.service;
                if (p.ins != 0 && window.addthis.auth && window.addthis.auth.twishare) {
                    window.addthis.auth.keepiframe[d]--;
                    setTimeout(function () {
                        window.addthis.auth.hideIframe(d);
                    }, 1000);
                }
            }}});
            b.share.twitter = {tweet: j, follow: l, sub: e};
        })(_a, _a.api, _a);
        (function (h, i, l) {
            var m = document;

            function g(q, p, r) {
                if (q.ost || _a.bro.ie6) {
                    return;
                }
                var d = _parseThirdPartyAttributes(q, "su:badge"), u = d.style || "1", v = p.share.url = d.href || _a.track.mgu(p.share.url, {defrag: 1}), t = d.height || "20px", s = d.width || "75px";
                if (u == "5") {
                    t = d.height || "60px";
                } else {
                    if (u == "6") {
                        t = d.height || "31px";
                    }
                }
                q.innerHTML = "<iframe src=\"http" + (_a.ssl ? "s" : "") + "://www.stumbleupon.com/badge/embed/{{STYLE}}/?url={{URL}}\" scrolling=\"no\" frameborder=\"0\" style=\"border:none; overflow:hidden; width:{{WIDTH}}; height:{{HEIGHT}};\" allowtransparency=\"true\"></iframe>".replace("{{STYLE}}", u).replace("{{URL}}", _euc(v)).replace("{{HEIGHT}}", t).replace("{{WIDTH}}", s);
                q.noh = q.ost = 1;
            }

            function j(p, d) {
                if (p.ost) {
                    return;
                }
                var s = _parseThirdPartyAttributes(p, "hy:respect"), q = d.share.url = s.url || _a.track.mgu(d.share.url, {defrag: 1}), r = s.width || "140px", t = "<iframe src=\"" + (_a.ssl ? "https://secure" : "http://www") + ".hyves.nl/respect/button?url={{URL}}\" style=\"border: medium none; overflow:hidden; width:{{WIDTH}}; height:22px;\" scrolling=\"no\" frameborder=\"0\" allowTransparency=\"true\" ></iframe>".replace("{{URL}}", _a.share.acb("hyves", d.share, addthis_config)).replace("{{WIDTH}}", r);
                p.innerHTML = t;
                p.noh = p.ost = 1;
            }

            function c(B, z) {
                if (B.ost) {
                    return;
                }
                var p = m.ce("div"), q = "http://userapi.com/js/api/openapi.js?52", t = z.share.url.replace(/#.*$/, ""), x = z.share.title, d = z.share.description, s = _parseThirdPartyAttributes(B, "vk"), u = s && (s.apiId || s.apiid), r = {type: "full", pageDescription: d, pageTitle: x, pageUrl: t}, A = function () {
                    return w.VK && w.VK.init && w.VK.Widgets && w.VK.Widgets.Like;
                }, v = function (C) {
                    VK.init({apiId: u, onlyWidgets: true});
                    VK.Widgets.Like(C.id, C.configuration);
                }, y = _a.util.bind(function () {
                    v(this);
                }, p);
                if (!u) {
                    return;
                }
                p.id = "addthis_vk_like" + _a.util.cuid();
                p.configuration = r;
                B.appendChild(p);
                if (A()) {
                    v(p, r);
                } else {
                    if (!i._vkr) {
                        i._vkr = new _a.resource.Resource("vklike", q, A);
                        i._vkr.load();
                    }
                    i._vkr.addEventListener("load", y);
                }
                B.noh = B.ost = 1;
            }

            function k(p, d) {
                if (p.ost) {
                    return;
                }
                var q = _parseThirdPartyAttributes(p, "4sq"), r = document.createElement("a");
                r.href = "https://foursquare.com/intent/venue.html";
                r.className = "fourSq-widget";
                if (q["data-variant"]) {
                    r.setAttribute("data-variant", q["data-variant"]);
                }
                p.appendChild(r);
                _a.ajs("//platform.foursquare.com/js/widgets.js", 1);
                p.noh = p.ost = 1;
            }

            function f(p, d) {
                if (p.ost) {
                    return;
                }
                var s = _parseThirdPartyAttributes(p, "rk:healthy"), r = m.createElement("div"), q = new _a.resource.Resource("runkeeperjs", "//runkeeper.com/static/js/healthy/rkHealthyButton.js");
                r.className = "rk-healthy";
                r.setAttribute("data-healthyUrl", (s.url || d.share.url || window.location.href));
                r.setAttribute("data-buttonType", (s.type || "normal"));
                p.appendChild(r);
                p.noh = p.ost = 1;
                q.load();
            }

            function e(p, d) {
                if (_a.bro.ie9 && _atc.ver < 300) {
                    return;
                }
                p.title = "Permalink";
            }

            function n(p, d) {
                if (p.ost) {
                    return;
                }
                var s = _parseThirdPartyAttributes(p, "svejo:"), r = document.ce("div"), q = new _a.resource.Resource("svejojs", "//svejo.net/button.js", function () {
                    return!!window.load_svejo_buttons;
                });
                q.addEventListener("load", function () {
                    window.load_svejo_buttons();
                });
                r.className = "svejo-button";
                s.href = d.share.url = s.href || _a.track.mgu(d.share.url, {defrag: 1});
                s.size = s.size || (check32(p, true) ? "standard" : "compact");
                _a.util.each(s, function (u, t) {
                    r.setAttribute("data-" + u, t);
                });
                p.appendChild(r);
                p.noh = p.ost = 1;
                q.load();
            }

            function b(s, q) {
                if (s.ost) {
                    return;
                }
                var d = _parseThirdPartyAttributes(s, "li"), v = q.share, t = d.width || 100, p = d.height || 18, r, x = "", u;
                if (!d.counter) {
                    d.counter = "horizontal";
                }
                if (!v.passthrough) {
                    v.passthrough = {};
                }
                v.passthrough.linkedin = _a.util.toKV(d);
                x = _a.util.rtoKV(v);
                if (d.counter === "top") {
                    p = 55;
                    t = 57;
                    if (!d.height) {
                        d.height = p;
                    }
                    if (!d.width) {
                        d.width = t;
                    }
                } else {
                    if (d.counter === "right") {
                        t = 100;
                        if (!d.width) {
                            d.width = tww;
                        }
                    } else {
                        if (d.counter === "none") {
                            t = 57;
                            if (!d.width) {
                                d.width = tww;
                            }
                        }
                    }
                }
                if (d.width) {
                    t = d.width;
                }
                if (d.height) {
                    p = d.height;
                }
                r = _a.util.toKV(d), s.innerHTML = "<iframe frameborder=\"0\" role=\"presentation\" scrolling=\"no\" allowTransparency=\"true\" scrollbars=\"no\"" + (_a.bro.ie6 ? " src=\"javascript:''\"" : "") + " style=\"width:" + t + "px; height:" + p + "px;\"></iframe>";
                u = s.firstChild;
                if (!q.conf.pubid) {
                    q.conf.pubid = addthis_config.pubid || _a.pub();
                }
                u.src = _atc.rsrcs.linkedin + ((_a.bro.ie6 || _a.bro.ie7) ? "?" : "#") + "href=" + _euc(q.share.url) + "&dr=" + _euc(_a.dr) + "&conf=" + _euc(_a.util.toKV(q.conf)) + "&share=" + _euc(x) + "&li=" + _euc(r);
                s.noh = s.ost = 1;
            }

            function o(t, r) {
                var s = _parseThirdPartyAttributes(t, "am:wishlist"), x = r.share.url = s.url = s.url || _a.track.mgu(r.share.url, {defrag: 1}), q = m.ce("div"), u = m.ce("div"), d = m.ce("div"), v = m.ce("div"), p = addthis_config || {};
                p.hdl = 1;
                if (!s.id) {
                    s.id = Math.floor(Math.random() * 10000);
                }
                q.style.display = u.style.display = d.style.display = v.style.display = "none";
                q.id = "AUWLBkURL." + s.id;
                q.innerHTML = s.url = _a.share.acb("amazonwishlist_native", r.share, p);
                u.id = "AUWLBkPrice." + s.id;
                u.innerHTML = s.price;
                d.id = "AUWLBkTitle." + s.id;
                d.innerHTML = s.title;
                v.id = "AUWLBkImage." + s.id;
                v.innerHTML = s.img || "";
                t.appendChild(q);
                if (s.price) {
                    t.appendChild(u);
                }
                if (s.title) {
                    t.appendChild(d);
                }
                t.appendChild(v);
                _a.ajs("http://www.amazon.com/wishlist/bookmarklet/getbutton.js?name=" + s.id + "&image=" + (s.style || "2"), 1, "1", "AddToAUWLButton." + s.id, t);
                t.onclick = function () {
                    _a.share.track("amazonwishlist_native", 0, s, p);
                };
                t.noh = t.ost = 1;
            }

            function a(p, d) {
                if (p.className.indexOf("chiclet_style") != -1) {
                    throw new Error("just do a chiclet");
                }
                if (p.ost) {
                    return;
                }
                var t = _parseThirdPartyAttributes(p, "tm"), s = 50, r = 61;
                passthrough = _a.util.toKV(t);
                if (t.style === "compact") {
                    s = 95;
                    r = 25;
                }
                p.innerHTML = "<iframe frameborder=\"0\" width=\"" + s + "\" height=\"" + r + "\" scrolling=\"no\" allowTransparency=\"true\" scrollbars=\"no\"" + (_a.bro.ie6 ? " src=\"javascript:''\"" : "") + "></iframe>";
                var q = p.firstChild;
                q.src = "//api.tweetmeme.com/button.js?url=" + _euc(d.share.url) + "&" + passthrough;
                p.noh = p.ost = 1;
            }

            h.share = h.share || {};
            h.share.register({foursquare: k, hyves_respect: j, svejo_counter: n, linkedin_counter: b, runkeeper_healthy: f, link: e, stumbleupon_badge: g, tweetmeme: a, vk_like: c});
            h.share.registerListeners({more: {require: function (p, q, d) {
                return!q.noh && _atc.ver >= 300 && !_a.bro.iph && !_a.bro.wph && !_a.bro.dro;
            }, onclick: function (d) {
                var p = d.el || {};
                window.addthis.menu(p, p.conf, p.share);
                return false;
            }}, email: {require: function (p, q, d) {
                return!q.noh && _atc.ver >= 300 && !_a.bro.iph && !_a.bro.wph && !_a.bro.dro;
            }, onclick: function (q) {
                var r = q.el || {}, p = q.service, d = _a.util.clone(r.conf);
                d.ui_pane = p;
                if (document.location.href.search(/bookmark\.php/) == -1) {
                    window.addthis.menu(r, d, r.share);
                } else {
                    window.location = _a.share.genurl(p, 0, r.share, r.conf);
                }
                return false;
            }}, foursquare: {onclick: function (p) {
                var q = p.el || {}, d = p.service;
                _a.share.track(d, 1, q.share, q.conf);
                return false;
            }}, link: {onclick: function (r) {
                var s = r.el || {}, p = r.service, d = _euc((s.share || {}).url || addthis_share.url);
                if (_atc.ver >= 300) {
                    var q = _a.util.clone(s.config || addthis_config);
                    q.ui_pane = "link";
                    window.addthis.menu(s, q, s.share || addthis_share);
                } else {
                    addthis_open(document.body, "link", d);
                    if (document.getElementById("at16p")) {
                        document.getElementById("at16p").style.display = "block";
                    }
                    if (document.getElementById("at15s")) {
                        document.getElementById("at15s").style.display = "none";
                    }
                }
                return false;
            }}});
        })(_a, _a.api, _a);
        (function (f, g, k) {
            function a() {
                try {
                    if (_atc.ver >= 300) {
                        return(l.href.search(/bookmark\d+\.html/i) != -1);
                    }
                    return l.href.search(/addthis\.com\/static\/r07\/bookmark\d+\.html/i) != -1;
                } catch (o) {
                    return 0;
                }
            }

            var m = {pinterest_share: {img_service: "pinterest_share", img_header: "Pin It to Pinterest", img_base_url: "//pinterest.com/pin/create/button/", img_param: "media=", ctype: "", windowProps: {height: "500", width: "600"}}, pinterest: {img_service: "pinterest", img_header: "Pin It to Pinterest", img_base_url: "//pinterest.com/pin/create/button/", img_param: "media=", ctype: "", windowProps: {height: "500", width: "600"}}, thefancy: {img_service: "thefancy", img_header: "Add to Fancy", img_base_url: "//thefancy.com/offer.html", img_param: "imageurl=", ctype: "&ctype=image", windowProps: {height: "500", width: "700"}}}, j = document.gn("body").item(0);

            function b(X, I) {
                var X = typeof X == "undefined" ? "pinterest_share" : X, r = d.getElementById("atImgBox_" + X), N = d.getElementById("at16pccImg"), F = m[X] || m.pinterest_share, K = (X.indexOf("pinterest") !== -1) ? true : false;
                I = a() ? (I || w.addthis_media_msg) : I;
                if (r && !I) {
                    if (a()) {
                        e("main");
                        e("filter");
                        e("details");
                        r.style.display = "block";
                    } else {
                        r.style.display = "block";
                        if (N) {
                            N.style.height = "100%";
                        }
                    }
                } else {
                    var U = _a.util.gebcn(j, "DIV", "atPinWin", true, true);
                    for (var D in U) {
                        if (U[D].style) {
                            U[D].style.display = "none";
                        }
                    }
                    var L = d.getElementById("atImgBox_" + X) || d.createElement("div"), u = w.addthis_media_msg || null, C = u || I || (n() || "").split(";"), T = new Array(), q = new Array(), A = d.createElement("div"), o = d.createElement("div"), G = d.createElement("span"), E = d.createElement("span"), H = (((w.addthis_share_msg || addthis_share || {}).passthrough || {}).pinterest_share || {}).media, M = false, p = a() ? "3" : "", y = a() ? "15" : 0;
                    if ((L.innerHTML || "").search(/at3/) != -1) {
                        L.innerHTML = "";
                    }
                    if (_atc.ver >= 300 && a() && u) {
                        I = u;
                    }
                    for (var Q in C) {
                        if (typeof C[Q].split !== "function") {
                            continue;
                        }
                        var W = (C[Q] || "").split(",");
                        if (!W[0] || typeof W[0] == "undefined") {
                            continue;
                        }
                        T.push({src: W[0], offsetHeight: W[1], offsetWidth: W[2], alt: W[3], og: W[4]});
                    }
                    if (!N && !I && _atc.ver < 300) {
                        N = d.createElement("div");
                        N.id = "at16pccImg";
                        d.body.appendChild(N);
                        if (_a.bro.msi && d.compatMode.toLowerCase() == "backcompat") {
                            N.style.position = "absolute";
                        }
                    } else {
                        if (N && N.style) {
                            N.style.height = "100%";
                        }
                    }
                    A.className = "atPinHdr";
                    G.innerHTML = "<span style='cursor:default' class='atImgIco at300bs at15nc at15t_" + (X) + "'></span><span class='atImgMsg'>" + F.img_header + "</span>";
                    G.className = "atPinHdrMsg";
                    A.appendChild(G);
                    E.innerHTML = "X";
                    E.className = "atPinClose";
                    E.onclick = function () {
                        d.getElementById("atImgBox_" + X).style.display = "none";
                        N.style.height = "0";
                    };
                    A.appendChild(E);
                    L.appendChild(A);
                    var z = 0, R = {};
                    for (var Q in T) {
                        if (!T[Q] || typeof T[Q].src === "undefined") {
                            continue;
                        }
                        var s = d.createElement("img"), v = d.createElement("span"), t = d.createElement("span"), P = d.createElement("span"), J = d.createElement("div"), V = 4;
                        s.alt = s.title = T[Q].alt;
                        if (_atc.ver >= 300) {
                            J.className = "atImgActBtn  at300bs at15nc at15t_" + X;
                        }
                        J.style.display = "none";
                        J.onmouseover = function () {
                            (this.style || {}).opacity = "1";
                        };
                        s.src = T[Q].src;
                        z++;
                        R = T[Q];
                        if (isNaN(T[Q].offsetHeight) || isNaN(T[Q].offsetWidth)) {
                            s.height = 200 - y;
                        } else {
                            V = Math.min((T[Q].offsetHeight / (205 - y)), (T[Q].offsetWidth / (205 - y)));
                            s.height = T[Q].offsetHeight / V;
                            s.width = T[Q].offsetWidth / V;
                            s.style.marginTop = s.height > (202 - y) ? (-(s.height - (200 - y)) / 2) + "px" : 0 + "px";
                            s.style.marginLeft = s.width > (202 - y) ? (-(s.width - (200 - y)) / 2) + "px" : 0 + "px";
                        }
                        P.innerHTML = (T[Q].og) ? "Preferred Image" : T[Q].offsetHeight + " x " + T[Q].offsetWidth;
                        t.className = "atImgSpanInner";
                        v.className = "at" + p + "ImgSpanOuter addthis_32x32_style";
                        P.className = "atImgSpanSize";
                        t.appendChild(s);
                        t.appendChild(J);
                        v.appendChild(t);
                        v.appendChild(P);
                        v.onmouseover = function (x) {
                            this.getElementsByTagName("div")[0].style.display = "block";
                            this.getElementsByTagName("img")[0].style.opacity = ("0.4");
                            this.getElementsByTagName("img")[0].style.filter = "alpha(opacity=40)";
                        };
                        v.onmouseout = function (x) {
                            this.getElementsByTagName("div")[0].style.display = "none";
                            this.getElementsByTagName("img")[0].style.opacity = ("1");
                            this.getElementsByTagName("img")[0].style.filter = "alpha(opacity=100)";
                        };
                        s.onclick = J.onclick = function () {
                            var x = _a.util.clone(I ? addthis_share_msg : (g.share || addthis_share || {}));
                            g.config = g.config || addthis_config || {};
                            x.passthrough = x.passthrough || {};
                            x.passthrough.pinterest_share = {media: this.parentNode.getElementsByTagName("img")[0].src, description: (x.title || this.parentNode.getElementsByTagName("img")[0].src.split("/").pop() || "")};
                            if (I) {
                                x.url = _euc(x.url);
                                if (_atc.ver >= 300) {
                                    _a.share.track((K ? "pinterest_share" : X), 0, x, addthis_config, this);
                                    h({windowUrl: F.img_base_url + "?" + F.img_param + _euc(x.passthrough.pinterest_share.media) + "&url=" + x.url + "&description=" + _euc(x.passthrough.pinterest_share.description) + F.ctype, width: F.windowProps.width, height: F.windowProps.height});
                                } else {
                                    w.location = f.share.genurl(X, 0, x, g.config);
                                }
                            } else {
                                x.url = _euc(x.url);
                                _a.share.track((K ? "pinterest_share" : X), 0, addthis_share, addthis_config, this);
                                h({windowUrl: F.img_base_url + "?" + F.img_param + _euc(x.passthrough.pinterest_share.media) + "&url=" + x.url + "&description=" + _euc(x.passthrough.pinterest_share.description) + F.ctype, width: F.windowProps.width, height: F.windowProps.height});
                                d.getElementById("atImgBox_" + X).style.display = "none";
                                N.style.height = "0";
                                return false;
                            }
                        };
                        if (_a.bro.msi && document.compatMode.toLowerCase() == "backcompat") {
                            v.style.margin = "5px";
                        }
                        o.appendChild(v);
                    }
                    if (z == 0) {
                        var B = d.createElement("span");
                        B.className = "atNoImg";
                        B.innerHTML = "There are no valid images to share.";
                        o.appendChild(B);
                    }
                    if (z == 1 && !a()) {
                        var O = _a.util.clone(a() ? addthis_share_msg : (g.share || addthis_share || {}));
                        O.url = _euc(O.url);
                        g.config = g.config || addthis_config || {};
                        O.passthrough = O.passthrough || {};
                        O.passthrough.pinterest_share = {media: R.src, description: (O.title || R.src.split("/").pop() || "")};
                        if (_atc.ver >= 300 && _a.share.inBm()) {
                            _a.share.notify((K ? "pinterest_share" : X), O, addthis_config_msg, this);
                            h({windowUrl: F.img_base_url + "?" + F.img_param + _euc(O.passthrough.pinterest_share.media) + "&url=" + O.url + "&description=" + _euc(O.passthrough.pinterest_share.description) + F.ctype, width: F.windowProps.width, height: F.windowProps.height});
                            return false;
                        } else {
                            h({windowUrl: F.img_base_url + "?" + F.img_param + _euc(O.passthrough.pinterest_share.media) + "&url=" + O.url + "&description=" + _euc(O.passthrough.pinterest_share.description) + F.ctype, width: F.windowProps.width, height: F.windowProps.height});
                            ((d.getElementById("atImgBox_" + X) || {}).style || {}).display = "none";
                            if (_atc.ver < 300) {
                                N.style.height = "0";
                            }
                            return false;
                        }
                    }
                    if (_atc.ver >= 300 && !a()) {
                        var S = _a.util.clone(addthis_config);
                        S.ui_pane = "image";
                        S.image_service = (K ? "pinterest" : X);
                        S.image_header = F.img_header;
                        if (!(f.menu || {}).open) {
                            w.addthis.menu((_a.maf && _a.maf.sib), S, addthis_share);
                        } else {
                            f.menu.open((_a.maf && _a.maf.sib), S, addthis_share);
                        }
                        return;
                    }
                    if (I) {
                        o.lastChild.style.marginBottom = "40px";
                    }
                    L.appendChild(o);
                    if (!a()) {
                        if (_a.bro.msi && document.compatMode.toLowerCase() == "backcompat" || _a.bro.ie6) {
                            L.style.position = "absolute";
                        }
                        L.className = "atPinBox";
                        o.className = "atPinMn";
                        A.className = "atPinHdr";
                    } else {
                        L.className = L.id = "atPinWin";
                        L.style.display = "block";
                        o.className = "at" + p + "PinWinMn";
                        A.style.display = "none";
                        j.style.margin = "0px";
                        E.style.display = "none";
                        e("filter");
                        e("main");
                        e("details");
                    }
                    L.id = "atImgBox_" + X;
                    if (I) {
                        if (typeof jQuery != "undefined") {
                            L.style.display = "none";
                            d.body.appendChild(L);
                            $(L).fadeIn();
                        } else {
                            d.body.appendChild(L);
                        }
                    } else {
                        if (!a()) {
                            N.appendChild(L);
                            N.onclick = function (aa) {
                                if (!aa) {
                                    var aa = w.event || {};
                                }
                                if ((aa.target || {}).id != "at16pccImg" && (aa.srcElement || {}).id != "at16pccImg") {
                                    return;
                                }
                                var Z = _a.util.gebcn(j, "DIV", "atPinBox", true, true);
                                for (var Y in Z) {
                                    if (Z[Y].style) {
                                        Z[Y].style.display = "none";
                                    }
                                }
                                N.style.height = "0";
                            };
                        }
                    }
                }
            }

            function e(o) {
                if (typeof jQuery == "undefined") {
                    ((d.getElementById(o) || {}).style || {}).display = "none";
                } else {
                    $("#" + o).fadeOut();
                }
            }

            function n(p, u, t, E) {
                var B = "", v = new Array(), s = new Array(), A = new Array(), D = (((w.addthis_share_msg || addthis_share || {}).passthrough || {}).pinterest_share || {}).media, z = false, y = null, o = typeof t == "string" ? t : (typeof(addthis_config || {}).image_include == "string" ? addthis_config.image_include : null), q = typeof E == "string" ? E : (typeof(addthis_config || {}).image_exclude == "string" ? addthis_config.image_exclude : null);
                if (typeof p != "undefined" && p != null) {
                    if (p.search(/^\#/) > -1) {
                        y = (document.getElementById(p.replace(/\#/, "")) || document).getElementsByTagName("img");
                    } else {
                        if (p.search(/^\./) > -1 && typeof u != "undefined") {
                            var r = u, C = (p || "").replace(".", "");
                            while (r.className != C && r.nodeName.toLowerCase() != "body" && r.parentNode) {
                                r = r.parentNode;
                            }
                            y = (r || document).getElementsByTagName("img");
                        } else {
                            y = document.getElementsByTagName("img");
                        }
                    }
                } else {
                    y = document.getElementsByTagName("img");
                }
                if (D) {
                    v[D] = true;
                    s.push(D);
                }
                for (var x in y) {
                    if (!y[x] || typeof y[x].src === "undefined") {
                        continue;
                    }
                    if (v[y[x].src]) {
                        if (y[x].src == D) {
                            z = true;
                            if (z && y[x].src == D && ((q && (y[x].className || "").search(q) > -1) || (o && (y[x].className || "").search(o) == -1))) {
                                continue;
                            }
                            s[0] = y[x];
                        }
                        continue;
                    } else {
                        if (typeof y[x].nodeName == "undefined" || (o && (y[x].className || "").search(o) == -1) || (q && (y[x].className || "").search(q) > -1)) {
                            continue;
                        }
                        s.push(y[x]);
                        v[y[x].src] = true;
                    }
                }
                for (var x in s) {
                    if (typeof s.hasOwnProperty !== "undefined" && !s.hasOwnProperty(x)) {
                        continue;
                    }
                    if (D && x == 0 && !z && s.length != 2) {
                        B += s[x] + "," + s[x].offsetHeight + "," + s[x].offsetWidth + "," + (s[x].alt || s[x].title) + "," + true + ";";
                        continue;
                    }
                    if (!s[x].src || s[x].src == "undefined" || !s[x].offsetHeight || typeof s[x].offsetHeight == "undefined" || s[x].offsetHeight == "undefined" || !s[x].offsetWidth || s[x].offsetWidth == "undefined" || (parseInt(s[x].offsetWidth) == 16 && parseInt(s[x].offsetWidth == 16)) || (parseInt(s[x].offsetWidth) == 32 && parseInt(s[x].offsetWidth == 32)) || s[x].src.search("btn/v2/lg-share-") > -1 || (s[x].offsetWidth != "?" && s[x].offsetHeight != "?" && parseInt(s[x].offsetWidth) < 50 && parseInt(s[x].offsetWidth) < 50)) {
                        continue;
                    }
                    B += s[x].src + "," + s[x].offsetHeight + "," + s[x].offsetWidth + "," + (s[x].alt || s[x].title) + ((D && x == 0 && z) ? ",true" : "") + ";";
                }
                return(B.replace(/;$/, ""));
            }

            function c(p) {
                if (_atc.ver >= 300) {
                    var o = _a.util.clone(addthis_config);
                    o.ui_pane = "image";
                    o.image_service = p;
                    g.menu(_a.maf.pre, o, addthis_share);
                } else {
                    ((document.getElementById("at16p") || {}).style || {}).display = "none";
                    _a.share.img(p);
                }
                return false;
            }

            function i(p) {
                var r = r || _a.share.media();
                if (_a.bro.msi) {
                    _a.track.msg("atimg_ie" + r);
                } else {
                    var q = setInterval(function () {
                        p.postMessage("atimg_more" + r, "*");
                    }, 500), o = setTimeout(function () {
                        clearInterval(q);
                    }, 10000);
                }
                return false;
            }

            function h(p) {
                var r = {height: 350, left: 0, location: 0, menubar: 0, resizable: 0, scrollbars: 0, status: 0, width: 700, windowName: null, windowURL: null, top: 0, toolbar: 0};
                _a.util.mrg(p, r);
                var o = "height=" + p.height + ",width=" + p.width + ",toolbar=" + p.toolbar + ",scrollbars=" + p.scrollbars + ",status=" + p.status + ",resizable=" + p.resizable + ",location=" + p.location + ",menuBar=" + p.menubar, q = (screen.height - p.height) / 3;
                centeredX = (screen.width - p.width) / 2;
                window.open(p.windowUrl, p.windowName, o + ",left=" + centeredX + ",top=" + q).focus();
            }

            f.share = f.share || {};
            f.util.extend(f.share, {img: b, media: n, imgVer: c, imgOcw: i, inBm: a});
        })(_a, _a.api, _a);
        (function () {
            var a = function () {
                if (typeof addthis_config === "undefined") {
                    return false;
                }
                if (typeof addthis_config.webintents === "undefined") {
                    return false;
                }
                if (!addthis_config.webintents) {
                    return false;
                }
                return true;
            };
            if (!a()) {
                return;
            }
            var b = function (d) {
                if (typeof w.WebKitIntent !== "undefined") {
                    return true;
                }
                if ((typeof w.Intent === "undefined" && typeof w.WebKitIntent === "undefined") || (typeof w.navigator.startActivity === "undefined" && typeof w.navigator.webkitStartActivity === "undefined")) {
                    return false;
                }
                var f = navigator.userAgent;
                if (/Chrome\/(.*)\./.test(f)) {
                    var e = /Chrome\/(.*)\./.exec(f);
                    if (e.length >= 1) {
                        var c = parseInt(e[1].substring(0, 2));
                        if (c < 19) {
                            return false;
                        }
                    }
                }
                return true;
            };
            catchIntents = function () {
                if (b()) {
                    return;
                }
                w.Intent = function (f, e, d, c) {
                    this.verb = f;
                    this.noun = e;
                    this.data = d;
                };
                w.navigator.startActivity = function (d) {
                    if (d.verb === "http://webintents.org/share" && d.noun === "text/uri-list") {
                        _6.update("share", "url", d.data);
                        for (var c in d.extras) {
                            _6.update("share", c, d.extras);
                        }
                        var e = "http://addthis.com/bookmark.php";
                        e += "?v=300&url=" + encodeURIComponent(d.data);
                        w.open(e, "", "width=700,height=500");
                    }
                };
            };
            catchIntents();
        })();
        (function (b, d, g) {
            var e = {a1webmarks: "A1&#8209;Webmarks", aim: "AOL Lifestream", amazonwishlist: "Amazon", aolmail: "AOL Mail", aviary: "Aviary Capture", domaintoolswhois: "Whois Lookup", googlebuzz: "Google Buzz", googlereader: "Google Reader", googletranslate: "Google Translate", google_follow: "Google", google_plusone_share: "Google+", linkagogo: "Link-a-Gogo", meneame: "Men&eacute;ame", misterwong: "Mister Wong", mailto: "Email App", myaol: "myAOL", myspace: "MySpace", readitlater: "Read It Later", rss: "RSS", stumbleupon: "StumbleUpon", typepad: "TypePad", wordpress: "WordPress", yahoobkm: "Y! Bookmarks", yahoomail: "Y! Mail", youtube: "YouTube"};

            function c(h, i) {
                var j;
                if (window._atw && _atw.list && _atw.list[h]) {
                    j = _atw.list[h];
                } else {
                    if (e[h]) {
                        j = e[h];
                    } else {
                        j = (i ? h : (h.substr(0, 1).toUpperCase() + h.substr(1)));
                    }
                }
                return(j || "").replace(/&nbsp;/g, " ");
            }

            if (!b.services) {
                b.services = {};
            }
            b.services.getName = c;
            b.services.refget = function (h) {
                h = h.split(".").slice(-3).join(".");
                var i = {"mail.google.com": "gmail", "mail.yahoo.com": "yahoomail", "mail.aol.com": "aolmail", "mail.live.com": "hotmail"};
                if (i[h]) {
                    return i[h];
                }
                h = h.split(".").slice(-2).shift();
                if (b.services.map[h]) {
                    return h;
                }
                return"";
            };
            b.services.map = {facebook: "", twitter: "", reddit: "", stumbleupon: "", gmail: "mail.google.com", blogger: "", linkedin: "", tumblr: "", delicious: "", yahoomail: "compose.mail.yahoo.com", hotmail: "hotmail.msn.com", "100zakladok": "100zakladok.ru", "2tag": "2tag.nl", "2linkme": "", "7live7": "", a1webmarks: "a1-webmarks.com", a97abi: "", addio: "add.io", menu: "api.addthis.com", adfty: "", adifni: "", aerosocial: "", allmyfaves: "", amazonwishlist: "amazon.com", amenme: "", aim: "lifestream.aol.com", aolmail: "webmail.aol.com", armenix: "", arto: "", aviary: "", baang: "baang.ir", baidu: "cang.baidu.com", bebo: "", bentio: "", biggerpockets: "", bitly: "bit.ly", bizsugar: "", bleetbox: "", blinklist: "", blip: "blip.pl", bloggy: "bloggy.se", blogmarks: "blogmarks.net", blogtrottr: "", blurpalicious: "", bobrdobr: "bobrdobr.ru", bonzobox: "", socialbookmarkingnet: "social-bookmarking.net", bookmarkycz: "bookmarky.cz", bookmerkende: "bookmerken.de", bordom: "bordom.net", box: "box.net", brainify: "", bryderi: "bryderi.se", buddymarks: "", buzzzy: "", camyoo: "", cardthis: "partner.cardthis.com", care2: "", chiq: "", cirip: "cirip.ro", citeulike: "citeulike.org", classicalplace: "", cndig: "cndig.org", colivia: "colivia.de", technerd: "", connotea: "connotea.org", cootopia: "", cosmiq: "cosmiq.de", curateus: "curate.us", designbump: "", designmoo: "", digthiswebhost: "", digaculturanet: "digacultura.net", digg: "", diggita: "diggita.it", diglog: "", digo: "digo.it", digzign: "", diigo: "", dipdive: "", domelhor: "domelhor.net", dosti: "dosti.webdunia.com", dotnetkicks: "", dotnetshoutout: "", woscc: "wos.cc", douban: "", draugiem: "draugiem.lv", drimio: "", dropjack: "", dwellicious: "", dzone: "", edelight: "edelight.de", efactor: "", ekudos: "ekudos.nl", elefantapl: "elefanta.pl", embarkons: "", eucliquei: "eucliquei.com.br", evernote: "", extraplay: "", ezyspot: "", stylishhome: "", fabulously40: "", informazione: "fai.informazione.it", fark: "", farkinda: "", fashiolista: "", fashionburner: "", favable: "", faves: "", favlogde: "favlog.de", favoritende: "favoriten.de", favoritus: "", flaker: "flaker.pl", flosspro: "floss.pro", folkd: "", formspring: "formspring.me", thefreedictionary: "", fresqui: "", friendfeed: "", friendster: "", funp: "", fwisp: "", gabbr: "", gamekicker: "", givealink: "givealink.org", globalgrind: "", govn: "my.go.vn", goodnoows: "", googletranslate: "translate.google.com", gravee: "", greaterdebater: "", grono: "grono.net", habergentr: "haber.gen.tr", hackernews: "news.ycombinator.com", hadashhot: "hadash-hot.co.il", hatena: "b.hatena.ne.jp", gluvsnap: "healthimize.com", hedgehogs: "hedgehogs.net", hellotxt: "", historious: "historio.us", hitmarks: "", hotbookmark: "hotbmark.com", hotklix: "", w3validator: "validator.w3.org", hyves: "hyves.net", idearef: "", identica: "identi.ca", ihavegot: "", index4: "index4.in", indexor: "indexor.co.uk", instapaper: "", investorlinks: "", iorbix: "", isociety: "isociety.be", iwiw: "iwiw.hu", jamespot: "", jappy: "jappy.de", joliprint: "api.joliprint.com", jumptags: "", zooloo: "kablog.com", kaboodle: "", kaevur: "", kaixin: "kaixin001.com", kindleit: "fivefilters.org", kipup: "", kirtsy: "", kledy: "kledy.de", kommenting: "", latafaneracat: "latafanera.cat", laaikit: "laaik.it", ladenzeile: "ladenzeile.de", librerio: "", linkninja: "linkninja.com.br", linkagogo: "", linksgutter: "", linkshares: "linkshares.net", linkuj: "linkuj.cz", livejournal: "", lockerblogger: "", logger24: "", mymailru: "connect.mail.ru", markme: "markme.me", mashbord: "", mawindo: "", meinvz: "meinvz.net", mekusharim: "mekusharim.walla.co.il", memonic: "", memori: "memori.ru", meneame: "meneame.net", live: "profile.live.com", mindbodygreen: "", misterwong: "mister-wong.com", misterwong_de: "mister-wong.de", moemesto: "moemesto.ru", moikrug: "moikrug.ru", mototagz: "", mrcnetworkit: "mrcnetwork.it", multiply: "", myaol: "favorites.my.aol.com", myhayastan: "myhayastan.am", mylinkvault: "", myspace: "", n4g: "", naszaklasa: "nk.pl", netlog: "", netvibes: "", netvouz: "", newsmeback: "", newstrust: "newstrust.net", newsvine: "", nujij: "nujij.nl", odnoklassniki_ru: "odnoklassniki.ru", oknotizie: "oknotizie.virgilio.it", oneview: "oneview.de", ongobee: "", orkut: "promote.orkut.com", dashboard: "api.addthis.com", oyyla: "", packg: "", pafnetde: "pafnet.de", pdfonline: "savepageaspdf.pdfonline.com", pdfmyurl: "", phonefavs: "", pingfm: "ping.fm", planypus: "planyp.us", plaxo: "", plurk: "", pochvalcz: "pochval.cz", popedition: "", posteezy: "", posterous: "", pratiba: "prati.ba", printfriendly: "", pusha: "pusha.se", qrfin: "qrf.in", quantcast: "", qzone: "sns.qzone.qq.com", pocket: "getpocket.com", rediff: "share.rediff.com", redkum: "", ridefix: "", scoopat: "scoop.at", scoopit: "scoop.it", sekoman: "sekoman.lv", select2gether: "www2.select2gether.com", shaveh: "shaveh.co.il", shetoldme: "", shirintar: "shir.intar.in", simpy: "", sinaweibo: "v.t.sina.com.cn", slashdot: "slashdot.org", smiru: "smi2.ru", sodahead: "", sonico: "", speedtile: "speedtile.net", sphinn: "", spinsnap: "", spokentoyou: "", sportpost: "", yiid: "spread.ly", springpad: "springpadit.com", squidoo: "", startaid: "", startlap: "startlap.hu", storyfollower: "", studivz: "studivz.net", stuffpit: "", stumpedia: "", sunlize: "", stylehive: "", svejo: "svejo.net", symbaloo: "", taaza: "", tagmarksde: "tagmarks.de", tagvn: "", tagza: "", tarpipe: "", tellmypolitician: "", thewebblend: "", thinkfinity: "community.thinkfinity.org", thisnext: "", throwpile: "", tipd: "", topsitelernet: "ekle.topsiteler.net", transferr: "", tuenti: "", tulinq: "", tusul: "", tvinx: "", tweetmeme: "api.tweetmeme.com", twitthis: "", typepad: "", upnews: "upnews.it", urlaubswerkde: "urlaubswerk.de", urlcapt: "", viadeo: "", virb: "", visitezmonsite: "", vk: "vkontakte.ru", vkrugudruzei: "vkrugudruzei.ru", voxopolis: "", vybralisme: "vybrali.sme.sk", vyoom: "", webnews: "webnews.de", domaintoolswhois: "domaintools.com", windows: "api.addthis.com", windycitizen: "", wirefan: "", wordpress: "", worio: "", wykop: "wykop.pl", xanga: "", xing: "", yahoobkm: "bookmarks.yahoo.com", yammer: "", yardbarker: "", yemle: "", yigg: "yigg.de", yoolink: "go.yoolink.to", yorumcuyum: "", youblr: "", youbookmarks: "", youmob: "", yuuby: "", zakladoknet: "zakladok.net", zanatic: "", ziczac: "ziczac.it", zingme: "link.apps.zing.vn", zootool: ""};
            var f = {more: 1, compact: 1, expanded: 1, facebook: 1, email: 1, twitter: 1, print: 1, google: 1, google_plusone_share: 1, live: 1, stumbleupon: 1, vk: 1, pinterest_share: 1, myspace: 1, favorites: 1, digg: 1, delicious: 1, orkut: 1, blogger: 1, mailto: 1, linkedin: 1, mymailru: 1, gmail: 1, yahoomail: 1, reddit: 1, tumblr: 1, live: 1}, a = {more: 1, compact: 1, expanded: 1, "100zakladok": 1, adifni: 1, aim: 1, amazonwishlist: 1, arto: 1, baidu: 1, bitly: 1, blip: 1, blogger: 1, bloggy: 1, bobrdobr: 1, delicious: 1, digg: 1, diggita: 1, draugiem: 1, ekudos: 1, email: 1, facebook: 1, favorites: 1, friendfeed: 1, gmail: 1, google: 1, google_plusone_share: 1, hatena: 1, hotmail: 1, hyves: 1, igoogle: 1, jappy: 1, linkedin: 1, live: 1, livejournal: 1, mailto: 1, meinvz: 1, meneame: 1, misterwong: 1, mymailru: 1, myspace: 1, netlog: 1, nujij: 1, oknotizie: 1, oneview: 1, orkut: 1, oyyla: 1, pinterest_share: 1, plurk: 1, print: 1, pusha: 1, reddit: 1, settings: 1, sonico: 1, studivz: 1, stumbleupon: 1, tuenti: 1, tumblr: 1, twitter: 1, viadeo: 1, vk: 1, wordpress: 1, wykop: 1, xing: 1, yahoobkm: 1, yahoomail: 1, yorumcuyum: 1};
            _a._top_services = f;
            _a._top_services16 = a;
            b.services.isTop = function (h, i) {
                if (i == 16) {
                    return a[h];
                } else {
                    return f[h];
                }
            };
        })(_a, _a.api, _a);
        var w = window, ac = w.addthis_config || {}, css = new _a.resource.Resource("widgetcss", _atc.rsrcs.widgetcss, function () {
            return true;
        }), _5bb = new _a.resource.Resource("widgetIE67css", _atc.rsrcs.widgetIE67css, function () {
            return true;
        }), _5bc = new _a.resource.Resource("widget32css", _atc.rsrcs.widget32css, function () {
            return true;
        });
        if (w.addthis && w.addthis.timer) {
            w.addthis.timer.core = (new Date()).getTime();
        }
        function main() {
            if (w.addthis && w.addthis.timer) {
                w.addthis.timer.main = (new Date()).getTime();
            }
            try {
                if (_atc.xol && !_atc.xcs && ac.ui_use_css !== false) {
                    css.load();
                    if (_a.bro.ie6 || _a.bro.ie7) {
                        _5bb.load();
                    }
                    if (_a.bro.ipa) {
                        _5bc.load();
                    }
                }
                var a = _a, msi = a.bro.msi, hp = 0, _5c0 = window.addthis_config || {}, dt = d.title, dr = (typeof(a.rdr) !== "undefined") ? a.rdr : (d.referer || d.referrer || ""), du = dl ? dl.href : null, dh = dl.hostname, _5c5 = du, _5c6 = 0, al = (_a.lng().split("-")).shift(), _5c8 = _a.track.eop(dl, dr), cvt = [], nabc = !!a.cookie.rck("nabc"), cfc = _5c8.cfc, rsiq = _5c8.rsiq, rsi = _5c8.rsi, rxi = _5c8.rxi, rsc = _5c8.rsc.split("&").shift().split("%").shift().replace(/[^a-z0-9_]/g, ""), gen = _5c8.gen, fuid = _5c8.fuid, ifr, _5d3 = _atc.rsrcs.sh + "#", data, _5d5 = function () {
                    if (!_a.track.pcs.length) {
                        _a.track.apc(window.addthis_product || ("men-" + _atc.ver));
                    }
                    data.pc = _a.track.pcs.join(",");
                };
                a.track.ts.refstate = _5c8;
                if ((du || "").indexOf(_atr) == -1) {
                    a.cookie.view.update(true);
                }
                if (rsc == "tweet") {
                    rsc = "twitter";
                }
                if (window.addthis_product) {
                    _a.track.apc(addthis_product);
                    if (addthis_product.indexOf("fxe") == -1 && addthis_product.indexOf("bkm") == -1) {
                        _a.track.spc = addthis_product;
                    }
                }
                var l = _a.share.links.canonical;
                if (l) {
                    if (l.indexOf("http") !== 0) {
                        _5c5 = (du || "").split("//").pop().split("/");
                        if (l.indexOf("/") === 0) {
                            _5c5 = _5c5.shift() + l;
                        } else {
                            _5c5.pop();
                            _5c5 = _5c5.join("/") + "/" + l;
                        }
                        _5c5 = dl.protocol + "//" + _5c5;
                    } else {
                        _5c5 = l;
                    }
                    _a.usu(0, 1);
                }
                _5c5 = _5c5.split("#{").shift();
                a.igv(_5c5, d.title || "");
                if (_5c5) {
                    _a.share.links.canonical = _5c5;
                }
                var _5d7 = addthis_share.view_url_transforms || addthis_share.track_url_transforms || addthis_share.url_transforms || {};
                _5d7.defrag = 1;
                if (_5d7) {
                    _5c5 = _a.track.mgu(_5c5, _5d7);
                }
                try {
                    var atsp = (addthis_share || {}).passthrough || {};
                    if (!(atsp.pinterest_share || {}).media) {
                        var tags = _a.ad.og(), _5da = {}, og = typeof(tags) == "string" ? _a.util.fromKV(tags) : tags;
                        atsp = {};
                        if (og.image || _a.share.links.image_src) {
                            if (!window.addthis_share) {
                                window.addthis_share = {};
                            }
                            addthis_share = window.addthis_share;
                            addthis_share.passthrough = atsp = addthis_share.passthrough || {};
                            atsp.pinterest_share = _5da = atsp.pinterest_share || {};
                            _5da.media = og.image || _a.share.links.image_src;
                            _5da.url = _5da.url || og.url || window.location.href;
                            _5da.description = _5da.description || og.title || "";
                        }
                    }
                } catch (e) {
                }
                if (rsi) {
                    rsi = rsi.substr(0, 8) + fuid;
                }
                if (a.bro.mod == -1) {
                    var m = document.compatMode;
                    if (m) {
                        var md = 1;
                        if (m == "BackCompat") {
                            md = 2;
                        } else {
                            if (m == "CSS1Compat") {
                                md = 0;
                            }
                        }
                        a.bro.mode = md;
                        if (a.bro.msi) {
                            a.bro.mod = md;
                        }
                    }
                }
                a.dr = a.tru(dr, "fr");
                a.du = a.tru(_5c5, "fp");
                a.dt = dt = w.addthis_share.title;
                a.smd = {rsi: rsi, rxi: rxi, gen: gen, rsc: rsc};
                w.addthis_share.smd = a.smd;
                if (a.upm) {
                    w.addthis_share.smd.dr = a.dr;
                }
                if (a.upm) {
                    w.addthis_share.smd.sta = a.track.sta();
                }
                a.cb = a.ad.cla();
                a.kw = (a.cb !== 1 ? a.ad.kw() : "");
                a.dh = dl.hostname;
                a.ssl = du && du.indexOf("https") === 0 ? 1 : 0;
                a.ab = "-";
                if (_atc.ver >= 300) {
                    var rand = Math.random();
                    if (rand > 0.99) {
                        a.ab = "test-1-1";
                    } else {
                        if (rand > 0.98) {
                            a.ab = "test-1-2";
                        }
                    }
                }
                data = {iit: (new Date()).getTime(), tmr: _39((w.addthis || {}).timer || {}), cb: a.cb, cdn: _atc.cdn, chr: _a.ad.gch(), kw: a.kw, ab: a.ab, dh: a.dh, dr: a.dr, du: a.du, dt: dt, dbg: _a.log.level, md: a.bro.mode, cap: _39({tc: _5c0.data_track_textcopy ? 1 : 0, ab: _5c0.data_track_addressbar ? 1 : 0}), inst: a.inst, irt: ((a.cookie.view.cla()) > 0) ? 1 : 0, jsl: a.track.jsl(), prod: a.track.prod(), lng: a.lng(), ogt: _a.ad.gog().join(","), pc: w.addthis_product || "men", pub: a.pub(), ssl: a.ssl, sid: _a.track.ssid(), srpl: _atc.plmp, srd: _atc.damp, srf: _atc.famp, srp: _atc.pamp, srl: _atc.lamp, srx: _atc.xamp, ver: _atc.ver, xck: _atc.xck || 0, xtr: _atc.xtr || 0, og: _a.ad.og()};
                if (a.dcp == Number.MAX_VALUE) {
                    data.dnp = 1;
                }
                if (a.pixu) {
                    data.pixu = a.pixu;
                }
                if (a.trl.length) {
                    data.trl = a.trl.join(",");
                }
                if (a.rev) {
                    data.rev = a.rev;
                }
                data.ct = a.ct = (_5c0.data_track_clickback || _5c0.data_track_linkback || _a.track.ctp(data.pc, _5c0)) ? 1 : 0;
                if (a.prv) {
                    data.prv = _39(a.prv);
                }
                if (rsc) {
                    data.sr = rsc;
                }
                _a.track.ssc(rsc);
                if (a.vamp >= 0 && !a.sub) {
                    if (cfc) {
                        cvt.push(a.track.fcv("plv", Math.round(1 / _atc.vamp)));
                        cvt.push(a.track.fcv("typ", "lnk"));
                        cvt.push(a.track.fcv("pco", ("string" === typeof cfc) ? cfc : "cfd-1.0"));
                        cvt.push(a.track.fcv("pur", a.track.mgu(_5c5, {defrag: 1})));
                        if (a.dr) {
                            data.pre = a.track.mgu(a.dr, {defrag: 1});
                        }
                        data.ce = cvt.join(",");
                    } else {
                        if (rsi && (fuid != a.gub())) {
                            cvt.push(a.track.fcv("plv", Math.round(1 / _atc.vamp)));
                            cvt.push(a.track.fcv("rsi", rsi));
                            cvt.push(a.track.fcv("gen", gen));
                            cvt.push(a.track.fcv("abc", 1));
                            cvt.push(a.track.fcv("fcu", a.gub()));
                            cvt.push(a.track.fcv("rcf", dl.hash));
                            data.ce = cvt.join(",");
                            _5c6 = "addressbar";
                            a.track.ts.refstate.rsc = "addressbar";
                        } else {
                            if (rxi || rsiq || rsc) {
                                cvt.push(a.track.fcv("plv", Math.round(1 / _atc.vamp)));
                                if (rsc) {
                                    cvt.push(a.track.fcv("rsc", rsc));
                                }
                                if (rxi) {
                                    cvt.push(a.track.fcv("rxi", rxi));
                                } else {
                                    if (rsiq) {
                                        cvt.push(a.track.fcv("rsi", rsiq));
                                    }
                                }
                                if (rsiq || rxi) {
                                    cvt.push(a.track.fcv("gen", gen));
                                }
                                data.ce = cvt.join(",");
                                _5c6 = rsc || "unknown";
                            }
                        }
                    }
                }
                if (_5c6 && a.bamp >= 0) {
                    data.clk = 1;
                    if (a.dcp != Number.MAX_VALUE) {
                        a.dcp = data.gen = 50;
                    }
                    _a.ed.fire("addthis.user.clickback", window.addthis || {}, {service: _5c6});
                }
                if (!window.at_noxld) {
                    data.xld = 1;
                }
                if (a.upm) {
                    data.xd = 1;
                }
                if (!nabc && window.history && typeof(history.replaceState) == "function" && (!_a.bro.chr || _a.bro.chb) && (_5c0.data_track_addressbar || _5c0.data_track_addressbar_paths) && ((du || "").split("#").shift() != dr) && (du.indexOf("#") == -1 || rsi || (_5c8.hash && rxi))) {
                    var path = dl.pathname || "", _5e0, _5e1 = path != "/";
                    if (_5c0.data_track_addressbar_paths) {
                        _5e1 = 0;
                        for (var i = 0; i < _5c0.data_track_addressbar_paths.length; i++) {
                            _5e0 = new RegExp(_5c0.data_track_addressbar_paths[i].replace(/\*/g, ".*") + "$");
                            if (_5e0.test(path)) {
                                _5e1 = 1;
                                break;
                            }
                        }
                    }
                    if (_5e1 && (!rsi || a.util.ioc(rsi, 5))) {
                        history.replaceState({d: (new Date()), g: gen}, d.title, _a.track.cur(dl.href.split("#").shift(), null, _a.track.ssid()));
                    }
                }
                if (w.addthis && w.addthis.timer) {
                    w.addthis.timer.ifr = (new Date()).getTime();
                    if (data.tmr) {
                        data.tmr += "&ifr=" + w.addthis.timer.ifr;
                    }
                }
                _5d5();
                if (dl.href.indexOf(_atr) == -1 && !a.sub) {
                    if (a.upm) {
                        if (_a.bro.ffx) {
                            ifr = a.track.ctf();
                            ifr.src = _5d3;
                            _a.track.qtp(data);
                        } else {
                            if (_a.bro.ie9) {
                                setTimeout(function () {
                                    ifr = a.track.ctf(_5d3 + _39(data), true);
                                    a.track.stf(ifr);
                                }, 0);
                            } else {
                                ifr = a.track.ctf();
                                ifr.src = _5d3 + _39(data);
                                a.track.gtf().appendChild(ifr);
                                a.track.stf(ifr);
                            }
                        }
                    } else {
                        ifr = a.track.ctf();
                        ifr.src = _5d3 + _39(data);
                        a.track.gtf().appendChild(ifr);
                        a.track.stf(ifr);
                    }
                }
                _6._pmh.flushed = 1;
                _6._pmh.flush(_a.pmh, _a);
                if (w.addthis_language || ac.ui_language) {
                    a.alg();
                }
                if (a.plo.length > 0) {
                    a.jlo();
                }
            } catch (e) {
                _a.log.debug("lod", e);
            }
        }

        w._ate = a;
        w._adr = r;
        a._ssc = a._ssh = [];
        a.dat = {};
        a._rec.push(function (data) {
            var rdy = a.dat.rdy, s, i;
            _1a(data, function (k, v) {
                a.dat[k] = v;
            });
            if (data.rdy && !rdy) {
                a.xfr = 1;
                a.track.xtp();
            }
            if (data.ssc) {
                a._ssc = data.ssc;
            }
            if (data.sshs) {
                s = window.addthis_ssh = _duc(data.sshs);
                a.gssh = 1;
                a._ssh = s.split(",");
            }
            if (data.uss) {
                var u = a._uss = _duc(data.uss).split(",");
                if (window.addthis_ssh) {
                    var seen = {}, _5eb = [];
                    u = u.concat(a._ssh);
                    for (i = 0; i < u.length; i++) {
                        s = u[i];
                        if (!seen[s]) {
                            _5eb.push(s);
                        }
                        seen[s] = 1;
                    }
                    u = _5eb;
                }
                a._ssh = u;
                window.addthis_ssh = u.join(",");
            }
            if (data.ups) {
                s = data.ups.split(",");
                a.ups = {};
                for (i = 0; i < s.length; i++) {
                    if (s[i]) {
                        var o = _48(_duc(s[i]));
                        a.ups[o.name] = o;
                    }
                }
                a._ups = a.ups;
            }
            if (data.uid) {
                a.uid = data.uid;
                _a.ed.fire("addthis-internal.data.uid", {}, {uid: data.uid});
            }
            if (data.bti) {
                a.bti = data.bti;
                _a.ed.fire("addthis-internal.data.bti", {}, {bti: data.bti});
            }
            if (data.bts) {
                a.bts = parseInt(data.bts, 10);
                _a.ed.fire("addthis-internal.data.bts", {}, {bts: data.bts});
            }
            if (data.vts) {
                a.vts = parseInt(data.vts, 10);
                _a.ed.fire("addthis-internal.data.vts", {}, {vts: data.vts});
            }
            if (data.geo) {
                a.geo = (data.geo.constructor == "string") ? _a.util.geo.parse(data.geo) : data.geo;
                _a.ed.fire("addthis-internal.data.geo", {}, {geo: a.geo});
            }
            if (data.dbm) {
                a.dbm = data.dbm;
            }
            if (data.atgotcode) {
                a.sau = data.atgotcode;
            }
            if (data.rdy && !rdy) {
                _a.ed.fire("addthis-internal.data.rdy");
                return;
            }
        });
        a._rec.push(function (msg) {
            var evt = (msg || {}).remoteEvent;
            if (evt && evt.type && evt.data) {
                _addthis.log.debug("remote event rebroadcast", evt);
                _a.ed.fire(evt.type, {}, evt.data);
            }
        });
        try {
            if (dl.href.indexOf(_atr) > -1) {
                var ckv = _48(d.cookie, ";");
                a._rec[a._rec.length - 1](ckv);
            }
            var _5f0 = {}, _1df = _a.util.gsp("addthis_widget.js");
            if (typeof(_1df) == "object") {
                if (_1df.provider) {
                    _5f0 = {provider: _a.mun(_1df.provider_code || _1df.provider), auth: _1df.auth || _1df.provider_auth || ""};
                    if (_1df.uid || _1df.provider_uid) {
                        _5f0.uid = _a.mun(_1df.uid || _1df.provider_uid);
                    }
                    if (_1df.logout) {
                        _5f0.logout = 1;
                    }
                    _a.prv = _5f0;
                }
                if (_1df.headless) {
                    _atc.xcs = 1;
                }
                if (_1df.dnp) {
                    _a.dcp = Number.MAX_VALUE;
                }
                if (_1df.dnt) {
                    _atc.xtr = 1;
                }
                _a.util.pae(_1df);
                _a.util.pas(_a.util.pae);
                if (_1df.pubid || _1df.pub || _1df.username) {
                    w.addthis_pub = _duc(_1df.pubid || _1df.pub || _1df.username);
                }
                if (w.addthis_pub && w.addthis_config) {
                    w.addthis_config.username = w.addthis_pub;
                }
                if (_1df.domready) {
                    _atc.dr = 1;
                }
                if (_1df.onready && _1df.onready.match(/[a-zA-Z0-9_\.\$]+/)) {
                    try {
                        _a.onr = _a.evl(_1df.onready);
                    } catch (e) {
                        window.console && console.log("addthis: onready function (" + _1df.onready + ") not defined", e);
                    }
                }
                if (_1df.async) {
                    _atc.xol = 1;
                }
            }
            _a.ed.fire("addthis-internal.params.loaded", {}, {geo: a.geo});
            if ((window.addthis_conf || {}).xol) {
                _atc.xol = 1;
            }
            if (_atc.ver === 120) {
                var rc = "atb" + _a.util.cuid(), _5f2 = _a.util.gst("addthis_widget"), span = d.ce("span");
                span.id = rc;
                _5f2.parentNode.appendChild(span);
                _a.igv();
                _a.lad(["span", rc, addthis_share.url || "[url]", addthis_share.title || "[title]"]);
            }
            if (w.addthis_clickout) {
                _a.lad(["cout"]);
            }
            if (_1df.testupgrade) {
                _atc.ver = 300;
            }
            if (!_atc.xol && !_atc.xcs && ac.ui_use_css !== false) {
                css.load();
                if (_a.bro.ie6 || _a.bro.ie7) {
                    _5bb.load();
                }
                if (_a.bro.ipa) {
                    _5bc.load();
                }
            }
        } catch (e) {
            _a.log.error("main", e);
        }
        _a8.bindReady();
        _a8.append(main);
        (function (e, g, i) {
            var b;
            var a = false, m = _a.upm && (w.postMessage && (typeof w.postMessage == "function" || (typeof(w.postMessage || {}).call == "function" && typeof(w.postMessage || {}).apply == "function")) && !_a.bro.ie6 && !_a.bro.ie7), h = false;

            function f(n) {
                if (_a.unj && !_a.bro.msi) {
                    return JSON.stringify(n);
                } else {
                    return _a.util.rtoKV(n, "&&", "==");
                }
            }

            function j(p) {
                if (p && typeof(p) == "string") {
                    if (_a.unj && p.indexOf("{") === 0) {
                        try {
                            return JSON.parse(p);
                        } catch (n) {
                            return _a.util.rfromKV(p);
                        }
                    } else {
                        return _a.util.rfromKV(p, "&&", "==");
                    }
                } else {
                    return p;
                }
            }

            function c(o) {
                var n;
                if (!a || o.origin.slice(-12) == ".addthis.com") {
                    if (!o.data) {
                        return;
                    }
                    n = j(o.data);
                    n.origin = o.origin;
                    k(n);
                }
            }

            function k(n) {
                if (n.addthisxf) {
                    _a.ed.fire(n.addthisxf, n.target || n.payload, n.payload);
                }
            }

            _2a(_a, {xf: {upm: m, listen: function () {
                if (h) {
                    return;
                }
                if (m) {
                    if (l.href.indexOf(".addthis.com") == -1) {
                        a = true;
                    }
                    if (w.attachEvent) {
                        w.attachEvent("onmessage", c, false);
                        d.attachEvent("onmessage", c, false);
                    } else {
                        w.addEventListener("message", c, false);
                    }
                }
                h = true;
            }, send: function (o, n, p) {
                if (m) {
                    setTimeout(function () {
                        o.postMessage(f({addthisxf: n, payload: p}), "*");
                    }, 0);
                }
            }}});
        })(_a, _a.api, _a);
        (function () {
            var _603 = 0, _604 = [
                {name: "menujs", url: _atc.rsrcs.menujs, test: function () {
                    return!!window._atw;
                }}
            ];
            if (!_603) {
                window.addthis.auth = {};
                window.addthis.bar = {};
                window.addthis.login = {};
                window.addthis.dynamic = {};
                _a.api.register({context: window.addthis.login, methods: {initialize: {callback: function () {
                    _6.login.initialize.apply(_6.login, arguments);
                }}, connect: {callback: function () {
                    _6.login.connect.apply(_6.login, arguments);
                }}}, resources: [
                    {name: "sso", url: _atc.rsrcs.ssojs, test: function () {
                        return _6.login.ost;
                    }},
                    {name: "ssocss", url: _atc.rsrcs.ssocss}
                ]});
                _a.api.addAsync({resources: _604, method: "menu", event: "addthis.menu.ready", callback: function () {
                    _a.menu.open.apply(_a.menu, arguments);
                }});
                _a.api.addAsync({context: window.addthis.menu, method: "close", resources: _604, event: "addthis.menu.ready", callback: function () {
                    _a.menu.close.apply(_a.menu.close, arguments);
                }});
                _a.api.register({context: window.addthis.bar, methods: {initialize: {resources: [
                    {name: "wombatcss", url: _atc.rsrcs.wombatcss},
                    {name: "wombat", url: _atc.rsrcs.wombat, test: function () {
                        return typeof(_6.bar.render) == "function";
                    }}
                ], oncall: function () {
                }, event: "addthis.bar.ready", callback: function () {
                    _a.track.apc("wmb-1.0");
                    _6.bar.initialize.apply(_6.bar, arguments);
                }}}});
                window.addthis.bar.show = function () {
                    _6.bar.initialize.apply(_6.bar, arguments);
                };
                _a.api.addAsync({resources: [
                    {name: "auth", url: _atc.rsrcs.authjs}
                ], method: "init", context: window.addthis.auth, event: "addthis.auth.ready", callback: function () {
                }});
                _a.api.addAsync({resources: [
                    {name: "contentjs", url: _atc.rsrcs.contentjs, test: function () {
                        return _6.box.ost;
                    }},
                    {name: "contentcss", url: _atc.rsrcs.contentcss}
                ], method: "toaster"});
                _a.api.addAsync({resources: [
                    {name: "contentjs", url: _atc.rsrcs.contentjs, test: function () {
                        return _6.box.ost;
                    }},
                    {name: "contentcss", url: _atc.rsrcs.contentcss}
                ], method: "box", pre: function (what) {
                    for (var a = 0; a < what.length;) {
                        if (what[a]._loading) {
                            what.splice(a, 1);
                        } else {
                            what[a]._loading = 1;
                            a++;
                        }
                    }
                }});
                _a.api.addAsync({context: window.addthis.ad, callback: function () {
                    _6.ad.menu.apply(_6.ad, arguments);
                }, method: "menu", resources: new _a.resource.Bundle(new _a.resource.Resource("embedcss", _atc.rsrcs.embedcss, function () {
                    return true;
                }), new _a.resource.Resource("embedjs", _atc.rsrcs.embed, function () {
                    return w.addthis && ((w.addthis.ad || {}).embed || {}).ost;
                }))});
                _a.api.addAsync({resources: [
                    {name: "barjs", url: _atc.rsrcs.barjs, test: function () {
                        return(_6.dock || {}).ost;
                    }},
                    {name: "barcss", url: _atc.rsrcs.barcss}
                ], method: "dock", pre: function (what) {
                    for (var i = 0; i < what.length; i++) {
                        var _609 = "bar" + (what[i].className.indexOf("vertical") > -1 ? "vt" : "hz") + "-" + _atc.ver;
                        _a.track.apc(_609);
                    }
                }});
                _a.api.addAsync({resources: [
                    {name: "overlayjs", url: _atc.rsrcs.overlayjs, test: function () {
                        return(_6.overlay || {}).ost;
                    }}
                ], method: "overlay", pre: function () {
                    _a.track.apc("ovr-" + _atc.ver);
                }});
                _a.api.register({context: _6.dynamic, methods: {initialize: {resources: [
                    {name: "dynamiccss", url: _atc.rsrcs.dynamiccss},
                    {name: "dynamicjs", url: _atc.rsrcs.dynamicjs, test: function () {
                        return typeof(_6.dynamic.log) == "function";
                    }}
                ], oncall: function () {
                }, event: "addthis.dynamic.ready", callback: function () {
                    _a.track.apc("dyn-1.0");
                    _6.dynamic.initialize.apply(_6.dynamic, arguments);
                }}}});
                var _60a = [
                    {name: "countercss", url: _atc.rsrcs.countercss},
                    {name: "counter", url: _atc.rsrcs.counter, test: function () {
                        return window.addthis.counter.ost;
                    }}
                ];
                if (_a.bro.ie6 || _a.bro.ie7) {
                    _60a.push({name: "counterIE67css", url: _atc.rsrcs.counterIE67css});
                }
                if (!w.JSON || !w.JSON.stringify) {
                    _60a.push({name: "json2", url: _atr + "static/r07/json2.js", test: function () {
                        return w.JSON && w.JSON.stringify;
                    }});
                }
                _a.api.addAsync({method: "counter", resources: _60a});
                _a.api.addAsync({method: "count", resources: _60a});
                _6.data.getShareCount = function (_60b, _60c) {
                    var _60d = new _a.resource.ResourceBundle(_60a);
                    _60d.addEventListener("load", function () {
                        _6.data.getShareCount(_60b, _60c);
                    });
                    _60d.load();
                };
                _603 = 1;
            }
        })();
        (function () {
            function validateServiceCode(_60e) {
                if (!_60e || _60e.length < 5 || _60e.length > 30) {
                    throw new Error("Service code must be between 5 and 30 characters.");
                } else {
                    if (_60e.search(/^[a-zA-Z0-9_]+$/) == -1) {
                        throw new Error("Service code must consist entirely of letters, numbers and underscores.");
                    }
                }
                return true;
            }

            _6.logShare = function (url, _610, _611, _612) {
                var c = _612 || addthis_config, s = _611 || addthis_share;
                c.product = "hdl-" + _atc.ver;
                s.imp_url = 0;
                var url = url || (_611 && _611.url) || addthis_share.url, ct = _a.track.dcu(url);
                if (ct.rsc && !_610) {
                    _610 = ct.rsc;
                }
                if (validateServiceCode(_610)) {
                    s.url = url;
                    _a.share.track(_610, 0, s, c);
                }
            };
            _6.addClickTag = function (url, _617, _618, _619) {
                var url = url || _618 && _618.url || addthis_share.url;
                if (validateServiceCode(_617)) {
                    url = _a.track.cur(_a.track.cof(url), _617);
                }
                return url;
            };
        })();
        if (!window.addthis) {
            window.addthis = {};
        }
        _6.user = (function () {
            var a = _a, at = _6, _61c = 1000, u = {}, _61d = 0, _61e = 0, _61f = 0, _620 = {tags: a.cookie.tag.get()}, _621 = false, _622;
            _6.HIGH = 3;
            _6.MED = 2;
            _6.LOW = 1;
            _6.ASC = 1;
            _6.DSC = _6.DESC = 0;
            function apiReduce(fn, acc) {
                return a.reduce(["getID", "getGeolocation", "getServiceShareHistory"], fn, acc);
            }

            function reply(key, def) {
                return function (fn) {
                    setTimeout(function () {
                        fn(a[key] || def);
                    }, 0);
                };
            }

            function setup(data) {
                if (_61d) {
                    return;
                }
                if (!data || !data.uid) {
                    return;
                }
                if (_622 !== null) {
                    clearTimeout(_622);
                }
                _622 = null;
                _61d = 1;
                apiReduce(function (_629, name, i) {
                    u[name] = u[name].queuer.flush(reply.apply(at, _629[i]), at);
                    return _629;
                }, [
                    ["uid", ""],
                    ["geo", ""],
                    ["_ssh", []]
                ]);
            }

            function loadMenu() {
                if (!_a.pld) {
                    _a.pld = (new _a.resource.Resource("menujs", _atc.rsrcs.menujs, function () {
                        return true;
                    })).load();
                }
            }

            function onMenuLoad(data) {
                if (_61e && (data.uid || data.ssh !== _1)) {
                    loadMenu();
                    _61e = 0;
                }
            }

            function fakeData() {
                var data = {uid: "x", geo: {}, ssh: "", ups: ""};
                _61f = 1;
                setup(data);
                onMenuLoad(data);
            }

            _622 = setTimeout(fakeData, _61c);
            a._rec.push(setup);
            function arrmap(_62e) {
                var map = {};
                for (var i = 0; i < _62e.length; i++) {
                    map[_62e[i]] = _62e[i];
                }
                return map;
            }

            function iskey(_631, map) {
                if (map instanceof Array) {
                    map = arrmap(map);
                }
                if (typeof(_631) == "string") {
                    _631 = _631.split(",");
                }
                if (_631 instanceof Array) {
                    for (var i = 0; i < _631.length; i++) {
                        var v = _631[i].replace(/ /g, "");
                        if (map[v]) {
                            return 1;
                        }
                    }
                }
                return 0;
            }

            function isvalue(_635, map, keys) {
                if (map instanceof Array) {
                    return 0;
                }
                if (typeof(_635) == "string") {
                    _635 = _635.split(",");
                }
                if (_635 instanceof Array) {
                    for (var i = 0; i < _635.length; i++) {
                        var v = _635[i].replace(/ /g, "");
                        for (var j = 0; j < keys.length; keys++) {
                            if (map[keys[j]] == v) {
                                return 1;
                            }
                        }
                    }
                }
                return 0;
            }

            function isLocatedIn(desc) {
                return a.util.geo.isin(desc, a.geo);
            }

            function hasInterest(desc) {
                return iskey(desc, _620.interests);
            }

            function hasTag(tag) {
                return iskey(tag, _620.tags);
            }

            function hasTags(tags) {
                if (typeof(tags) == "string") {
                    tags = tags.split(",");
                }
                if (tags.length == 0) {
                    return false;
                }
                for (var i = 0; i < tags.length; i++) {
                    if (!iskey(tags[i], _620.tags)) {
                        return false;
                    }
                }
                return true;
            }

            function ready(fn) {
                if (!_a.uud) {
                    _a.ed.fire("addthis-internal.api", window.addthis || {}, {call: "rdy"});
                }
                _a.uud = 1;
                if (window._atw) {
                    _atw.gps(function () {
                        if (isOptedOut()) {
                            fn(_620);
                            return;
                        }
                        _620.interests = [];
                        _620.tags = a.cookie.tag.get();
                        for (var k in _a.bti) {
                            _620.interests.push(_a.bti[k]);
                        }
                        var _642 = [], _643 = {};
                        if (a._uss) {
                            for (var i = 0; i < a._uss.length; i++) {
                                if (!_643[a._uss[i]]) {
                                    _642.push({name: a._uss[i], score: _6.HIGH});
                                }
                                _643[a._uss[i]] = 1;
                            }
                        }
                        if (a._ups) {
                            for (var i = 0; i < a._ups.length; i++) {
                                if (!_643[a._ups[i]]) {
                                    _642.push({name: a._ups[i], score: _6.HIGH});
                                }
                                _643[a._ups[i]] = 1;
                            }
                        }
                        if (a._ssc) {
                            for (var name in a._ssc) {
                                if (!_643[name]) {
                                    _642.push({name: name, score: a._ssc[name]});
                                }
                            }
                        }
                        _620.services = _642;
                        _620.activity = {};
                        _620.activity.social = _a.bts;
                        _620.activity.view = _a.vts;
                        _620.source = getSource();
                        if (_a.geo && typeof(_a.geo) == "object" && _a.geo[0] && _a.geo[1]) {
                            var rv = "";
                            for (var i in _a.geo) {
                                if (typeof(_a.geo[i]) == "string") {
                                    rv += _a.geo[i];
                                }
                            }
                            _a.geo = _a.util.geo.parse(rv);
                        }
                        for (var k in _a.geo) {
                            if (!isNaN(parseInt(_a.geo[k]))) {
                                _a.geo[k] = parseInt(_a.geo[k]);
                            }
                        }
                        api.location = _620.location = _a.geo || {};
                        _620.location.contains = isLocatedIn;
                        if (fn) {
                            fn(_620);
                        }
                        _a.ed.fire("addthis.user.data", window.addthis || {}, {});
                    });
                } else {
                    _a.ed.addEventListener("addthis.menu.ready", function () {
                        ready(fn);
                    });
                    _a.alg();
                    if (a.gssh || _61f) {
                        loadMenu();
                    } else {
                        if (!a.pld && !_61e) {
                            _a._rec.push(onMenuLoad);
                        }
                    }
                    _61e = 1;
                }
            }

            function getUserData(fn) {
                ready(fn);
            }

            u.getData = getUserData;
            u.getPreferredServices = function (fn) {
                if (window._atw) {
                    _atw.gps(fn);
                } else {
                    _a.ed.addEventListener("addthis.menu.ready", function () {
                        _atw.gps(fn);
                    });
                    _a.alg();
                    if (a.gssh || _61f) {
                        loadMenu();
                    } else {
                        if (!a.pld && !_61e) {
                            _a._rec.push(onMenuLoad);
                        }
                    }
                    _61e = 1;
                }
            };
            function isReturning() {
                return(_a.cookie.view.cla()) > 0;
            }

            function tag(tag) {
                var tags = tag;
                if (typeof(tags) == "string") {
                    tags = tags.split(",");
                }
                _a.cookie.tag.add(tags);
            }

            function isOptedOut() {
                _a.ed.fire("addthis-internal.api", window.addthis || {}, {call: "ioo"});
                return a.uid == "0000000000000000";
            }

            function isUserOf(_64b) {
                _a.ed.fire("addthis-internal.api", window.addthis || {}, {call: "iuf"});
                return(a._ssh && a._ssh.indexOf(_64b) > -1) || (a._ssc && a._ssc[_64b]);
            }

            function wrapCollection(coll) {
                if (!coll) {
                    coll = [];
                }
                coll._sortasc = function (_64d) {
                    coll.sort(function (a, b) {
                        return coll._isort(a, b, _6.ASC, _64d);
                    });
                };
                coll._sortdsc = function (_650) {
                    coll.sort(function (a, b) {
                        return coll._isort(a, b, _6.DSC, _650);
                    });
                };
                coll._isort = function (a, b, _655, _656) {
                    var aval = a[_656], bval = b[_656];
                    if (typeof(aval) == "string" && !isNaN(parseInt(aval))) {
                        aval = parseInt(aval, 10);
                        bval = parseInt(bval, 10);
                        if (_655) {
                            return aval - aval;
                        }
                        return aval - bval;
                    }
                    if (aval > bval) {
                        return _655 ? 1 : -1;
                    } else {
                        if (aval == bval) {
                            return 0;
                        }
                    }
                    return _655 ? -1 : 1;
                };
                coll.toMap = function (key) {
                    if (!key) {
                        key = "name";
                    }
                    var rv = {};
                    for (var i = 0; i < coll.length; i++) {
                        rv[coll[i][key]] = coll[i];
                    }
                    return rv;
                };
                coll.map = coll.tomap;
                coll.keys = function (sort, key, _65e) {
                    if (!key) {
                        key = "name";
                    }
                    if (!_65e) {
                        _65e = "score";
                    }
                    var rv = [];
                    if (sort == _6.ASC) {
                        coll._sortasc(_65e);
                    } else {
                        coll._sortdsc(_65e);
                    }
                    for (var i = 0; i < coll.length; i++) {
                        rv.push(typeof(coll[i]) == "object" ? coll[i].name : coll[i]);
                    }
                    return rv;
                };
                coll.top = function (_661, _662) {
                    if (!_662) {
                        _662 = "score";
                    }
                    coll._sortdsc(_662);
                    var rv = [];
                    for (var i = 0; i < Math.min(_661 || 1, coll.length); i++) {
                        rv.push(coll[i].name);
                    }
                    return rv;
                };
                coll.filter = function (_665) {
                    var rv = [];
                    for (var i = 0; i < coll.length; i++) {
                        for (var k in _665) {
                            if (typeof(_665[k]) != "function") {
                                if (coll[i][k] == _665[k]) {
                                    rv.push(coll[i]);
                                }
                            }
                        }
                    }
                    return wrapCollection(rv);
                };
                return coll;
            }

            function getInterests() {
                _a.ed.fire("addthis-internal.api", window.addthis || {}, {call: "gti"});
                return wrapCollection(_620.interests);
            }

            function getServices() {
                _a.ed.fire("addthis-internal.api", window.addthis || {}, {call: "gts"});
                return wrapCollection(_620.services);
            }

            function getSource() {
                _a.ed.fire("addthis-internal.api", window.addthis || {}, {call: "gtt"});
                return a.track.ts.get();
            }

            function getLocation() {
                _a.ed.fire("addthis-internal.api", window.addthis || {}, {call: "gtl"});
                return _620.location;
            }

            function isSocial(_669) {
                _a.ed.fire("addthis-internal.api", window.addthis || {}, {call: "isl"});
                var _66a = getSource();
                if (_66a.type == "social") {
                    if (typeof(_669) == "string") {
                        _669 = _669.split(",");
                    }
                    if (_669 instanceof Array) {
                        var _66b = {};
                        for (var i = 0; i < _669.length; i++) {
                            _66b[_669[i]] = 1;
                        }
                        if (!_66b[_66a.service]) {
                            return false;
                        }
                    }
                    return true;
                }
                return false;
            }

            function isSearch(_66d) {
                _a.ed.fire("addthis-internal.api", window.addthis || {}, {call: "ish"});
                var _66e = getSource();
                if (_66e.type == "search") {
                    if (typeof(_66d) == "string") {
                        _66d = _66d.split(",");
                    }
                    if (_66d instanceof Array) {
                        var _66f = {};
                        for (var i = 0; i < _66d.length; i++) {
                            _66f[_66d[i]] = 1;
                        }
                        if (_66e.terms && _66e.terms.length) {
                            for (var i = 0; i < _66e.terms.length; i++) {
                                if (!_66f[_66e.terms[i]]) {
                                    return false;
                                }
                            }
                        }
                    }
                    return true;
                }
                return false;
            }

            var api = {ready: ready, isReturning: isReturning, isOptedOut: isOptedOut, isUserOf: isUserOf, hasInterest: hasInterest, hasTag: hasTag, hasTags: hasTags, isLocatedIn: isLocatedIn, tag: tag, interests: getInterests, services: getServices, location: getLocation};
            _6.session = {source: getSource, isSocial: isSocial, isSearch: isSearch};
            _a.extend(u, api);
            return apiReduce(function (o, name) {
                o[name] = (new at._Queuer(name)).call;
                return o;
            }, u);
        })();
        if (!window.addthis.osta) {
            _6.osta = 1;
            window.addthis.cache = {};
            window.addthis.ed = _a.ed;
            window.addthis.init = function () {
                _a8.onReady();
                _6.ready && _6.ready();
            };
            _a.extend(window.addthis.util, {getServiceName: _a.services.getName});
            window.addthis.addEventListener = _a.util.bind(_a.ed.addEventListener, _a.ed);
            window.addthis.removeEventListener = _a.util.bind(_a.ed.removeEventListener, _a.ed);
            _a.extend(_6, _a.api);
            var d = document, _674 = 0, u = _1, w = window, _675 = {}, _5bc = new _a.resource.Resource("widget32css", _atc.rsrcs.widget32css), _676 = new _a.resource.Resource("widget20css", _atc.rsrcs.widget20css), _677 = false, _678 = false, _679, _67a, _67b = {}, _67c = {}, body = null, _67e = _a.util.select, _67f = [], _680 = [], _681 = [], v, _682 = {rss: "Subscribe"}, _683 = {tweet: "Tweet", pinterest_share: "Pinterest", email: "Email", mailto: "Email", print: "Print", favorites: "Favorites", twitter: "Tweet", digg: "Digg", more: "View more services"}, json = {email_vars: 1, passthrough: 1, modules: 1, templates: 1, services_custom: 1}, _685 = {feed: 1, more: _atc.ver < 300, email: _atc.ver < 300, mailto: 1}, _686 = {feed: 1, email: _atc.ver < 300, mailto: 1, print: 1, more: !_a.bro.ipa && _atc.ver < 300, favorites: 1}, _687 = {print: 1, favorites: 1, mailto: 1}, _688 = {pinterest_pinit: (_atc.ver < 300), pinterest_share: (_atc.ver < 300)}, _689 = {email: _atc.ver >= 300, more: _atc.ver >= 300};
            _a.ulg(function (_68a) {
                _683.email = _683.mailto = _68a[0][4];
                _683.print = _68a[0][22];
                _683.favorites = _68a[0][5];
                _683.more = _68a[0][2];
                while (_681.length > 0) {
                    v = _681.pop();
                    if (v && v.link && v.title) {
                        v.link.title = _683[v.title] || v.link.title;
                    }
                }
            });
            function unaccent(s) {
                if (s.indexOf("&") > -1) {
                    s = s.replace(/&([aeiou]).+;/g, "$1");
                }
                return s;
            }

            function mrg(o, n) {
                if (n && o !== n) {
                    for (var k in n) {
                        if (o[k] === u) {
                            o[k] = n[k];
                        }
                    }
                }
            }

            function addIEHoverFix() {
                if (_a.bro.msi && !d.getElementById("at300bhoveriefilter")) {
                    var head = d.getElementsByTagName("head")[0], _690 = d.ce("style"), _691 = d.createTextNode(".at300b:hover,.at300bs:hover {filter:alpha(opacity=80);}");
                    _690.id = "at300bhoveriefilter";
                    _690.type = "text/css";
                    if (_690.styleSheet) {
                        _690.styleSheet.cssText = _691.nodeValue;
                    } else {
                        _690.appendChild(_691);
                    }
                    head.appendChild(_690);
                }
            }

            _6.addEvents = function (o, ss, au) {
                if (!o) {
                    return;
                }
                var _695 = o.onclick || function () {
                }, _696 = _687[ss] ? function () {
                    _a.share.track(ss, 0, o.share, o.conf);
                } : function () {
                    _a.share.notify(ss, o.share, o.conf, o);
                };
                if (o.conf.data_ga_tracker || addthis_config.data_ga_tracker || o.conf.data_ga_property || addthis_config.data_ga_property) {
                    o.onclick = function () {
                        _a.gat(ss, au, o.conf, o.share);
                        _696();
                        return _695();
                    };
                } else {
                    o.onclick = function (e) {
                        if (!_688[ss]) {
                            _696();
                        }
                        return _695(e);
                    };
                }
            };
            function check32(o, _699) {
                if (_677 && !_699) {
                    return true;
                }
                var opc = _a.util.parent(o, ".addthis_toolbox");
                _677 = ((opc.className || "").search(/32x32/i) > -1 || (o.className || "").search(/32x32/i) > -1);
                return _677;
            }

            function check20(o, _69c) {
                if (_678 && !_69c) {
                    return true;
                }
                var opc = _a.util.parent(o, ".addthis_toolbox");
                _678 = ((opc.className || "").search(/20x20/i) > -1 || (o.className || "").search(/20x20/i) > -1);
                return _678;
            }

            function registerProductCode(o) {
                var opc = (o.parentNode || {}).className || "", pc = o.conf && o.conf.product && opc.indexOf("toolbox") == -1 ? o.conf.product : "tbx" + (o.className.indexOf("32x32") > -1 || opc.indexOf("32x32") > -1 ? "32" : "") + "-" + _atc.ver;
                if (pc.indexOf(32) > -1) {
                    _677 = true;
                }
                _a.track.apc(pc);
                return pc;
            }

            function rpl(o, n) {
                var r = {};
                for (var k in o) {
                    if (n[k]) {
                        r[k] = n[k];
                    } else {
                        r[k] = o[k];
                    }
                }
                return r;
            }

            function _makeButton(w, h, alt, url) {
                var img = document.ce("img");
                img.width = w;
                img.height = h;
                img.border = 0;
                img.alt = alt;
                img.src = url;
                return img;
            }

            function _parseThirdPartyAttributes(el, _6ab) {
                var key, attr = [], rv = {}, len = Math.min((el.attributes || []).length || 0, 160);
                if (isNaN(len)) {
                    return rv;
                }
                for (var i = 0; i < len; i++) {
                    key = el.attributes[i];
                    if (!key) {
                        continue;
                    }
                    attr = key.name.split(_6ab + ":");
                    if (!attr || attr.length == 1) {
                        continue;
                    }
                    if (attr.length == 2) {
                        rv[attr.pop()] = key.value;
                    }
                }
                return rv;
            }

            _a.api.ptpa = _parseThirdPartyAttributes;
            function _parseAttributes(el, _6b2, name, _6b4) {
                var _6b2 = _6b2 || {}, rv = {}, _6b6 = _parseThirdPartyAttributes(el, "addthis");
                for (var k in _6b2) {
                    rv[k] = _6b2[k];
                }
                if (_6b4) {
                    for (var k in el[name]) {
                        rv[k] = el[name][k];
                    }
                }
                for (var k in _6b6) {
                    if (_6b6.hasOwnProperty(k)) {
                        if (_6b2[k] && !_6b4) {
                            rv[k] = _6b2[k];
                        } else {
                            var v = _6b6[k];
                            if (v) {
                                rv[k] = v;
                            } else {
                                if (_6b2[k]) {
                                    rv[k] = _6b2[k];
                                }
                            }
                            if (rv[k] === "true") {
                                rv[k] = true;
                            } else {
                                if (rv[k] === "false") {
                                    rv[k] = false;
                                }
                            }
                        }
                        if (rv[k] !== u && json[k] && (typeof rv[k] == "string")) {
                            try {
                                rv[k] = JSON.parse(rv[k].replace(/'/g, "\""));
                            } catch (e) {
                                rv[k] = _a.evl("(" + rv[k] + ");", true);
                            }
                        }
                    }
                }
                return rv;
            }

            function _processCustomServices(conf) {
                var acs = (conf || {}).services_custom;
                if (!acs) {
                    return;
                }
                if (!(acs instanceof Array)) {
                    acs = [acs];
                }
                for (var i = 0; i < acs.length; i++) {
                    var _6bc = acs[i];
                    if (_6bc.name && _6bc.icon && _6bc.url) {
                        if (typeof _6bc.url == "object") {
                            _6bc.url = _a.util.toKV(_6bc.url);
                        }
                        _6bc.code = _6bc.url = _6bc.url.replace(/ /g, "");
                        _6bc.code = _6bc.code.split("//").pop().split("?").shift().split("/").shift().toLowerCase();
                        _675[_6bc.code] = _6bc;
                    }
                }
            }

            function _getCustomService(ss, conf) {
                return _675[ss] || {};
            }

            function _getATtributes(el, _6c0, _6c1, _6c2) {
                var rv = {conf: _6c0 || {}, share: _6c1 || {}};
                rv.conf = _parseAttributes(el, _6c0, "conf", _6c2);
                rv.share = _parseAttributes(el, _6c1, "share", _6c2);
                return rv;
            }

            function _render(what, conf, _6c6, _6c7) {
                _a.igv();
                if (what) {
                    conf = conf || {};
                    _6c6 = _6c6 || {};
                    var _6c8 = conf.conf || _679, _6c9 = conf.share || _67a, _6ca = _6c6.onmouseover, _6cb = _6c6.onmouseout, _6cc = _6c6.onclick, _6cd = _6c6.internal, u = _1, ss = _6c6.singleservice;
                    if (ss) {
                        if (_6cc === u) {
                            _6cc = _685[ss] ? function (el, _6d0, _6d1) {
                                var s = rpl(_6d1, _67c);
                                return addthis_open(el, ss, s.url, s.title, rpl(_6d0, _67b), s);
                            } : _686[ss] ? function (el, _6d4, _6d5) {
                                var s = rpl(_6d5, _67c);
                                return addthis_sendto(ss, rpl(_6d4, _67b), s);
                            } : _689[ss] ? function (el, _6d8, _6d9) {
                                var s = rpl(_6d9, _67c);
                                return _a.share.stw(ss, s, _6d8, 735);
                            } : null;
                        }
                    } else {
                        if (!_6c6.noevents) {
                            if (!_6c6.nohover) {
                                if (_6ca === u) {
                                    _6ca = function (el, _6dc, _6dd) {
                                        return addthis_open(el, "", null, null, rpl(_6dc, _67b), rpl(_6dd, _67c));
                                    };
                                }
                                if (_6cb === u) {
                                    _6cb = function (el) {
                                        return addthis_close();
                                    };
                                }
                                if (_6cc === u) {
                                    _6cc = function (el, _6e0, _6e1) {
                                        return addthis_sendto("more", rpl(_6e0, _67b), rpl(_6e1, _67c));
                                    };
                                }
                            } else {
                                if (_6cc === u) {
                                    _6cc = function (el, _6e3, _6e4) {
                                        return addthis_open(el, "more", null, null, rpl(_6e3, _67b), rpl(_6e4, _67c));
                                    };
                                }
                            }
                        }
                    }
                    what = _67e(what);
                    for (var i = 0; i < what.length; i++) {
                        var o = what[i], _6e7 = o.parentNode, _6e8 = _getATtributes(o, _6c8, _6c9, !_6c7) || {};
                        mrg(_6e8.conf, _679);
                        mrg(_6e8.share, _67a);
                        o.conf = _6e8.conf;
                        o.share = _6e8.share;
                        if (o.conf.ui_language) {
                            _a.alg(o.conf.ui_language);
                        }
                        _processCustomServices(o.conf);
                        if (_6e7 && _6e7.className.indexOf("toolbox") > -1 && (o.conf.product || "").indexOf("men") === 0) {
                            o.conf.product = "tbx" + (_6e7.className.indexOf("32x32") > -1 ? "32" : (_6e7.className.indexOf("20x20") > -1 ? "20" : "")) + "-" + _atc.ver;
                            _a.track.apc(o.conf.product);
                        }
                        if (ss && ss !== "more") {
                            o.conf.product = registerProductCode(o);
                        }
                        if ((!o.conf || (!o.conf.ui_click && !o.conf.ui_window_panes)) && !_a.bro.ipa) {
                            _a.maf = _a.maf || {};
                            _a.maf.home = this;
                            _a.maf.key = null;
                            _a.maf.shift = null;
                            if (_6ca) {
                                o.onfocus = o.onmouseover = function () {
                                    _a.maf.sib = this.nextSibling;
                                    while (_a.maf.sib && _a.maf.sib.nodeType == 3 && _a.maf.sib.nextSibling) {
                                        _a.maf.sib = _a.maf.sib.nextSibling;
                                    }
                                    if (!_a.maf.sib || _a.maf.sib.nodeType == 3) {
                                        var el = this.parentNode;
                                        if (!el) {
                                            el = document.body.firstChild || document.body;
                                            while (el.nodeType == 3 && el.nextSibling) {
                                                el = el.nextSibling;
                                            }
                                        } else {
                                            while (el.nextSibling && el.nodeType == 3) {
                                                el = el.nextSibling;
                                            }
                                        }
                                        _a.maf.sib = el;
                                    }
                                    _a.maf.sib.onfocus = function () {
                                        _a.maf.sib.tabIndex = "";
                                    };
                                    return _6ca(this, this.conf, this.share);
                                };
                            }
                            if (_6cb) {
                                o.onmouseout = function () {
                                    return _6cb(this);
                                };
                            }
                            if (_6cc) {
                                o.onclick = function () {
                                    return _6cc(o, (this.conf || o.conf), (this.share || o.share));
                                };
                            }
                            if (_6cb || _6cc) {
                                o.onkeypress = o.onkeydown = function (e) {
                                    if (!e) {
                                        var e = window.event;
                                    }
                                    if (e.shiftKey) {
                                        _a.maf.shift = true;
                                    }
                                    if (e.keyCode) {
                                        _a.maf.key = e.keyCode;
                                    } else {
                                        if (e.which) {
                                            _a.maf.key = e.which;
                                        }
                                    }
                                    if (_a.maf.key == 13) {
                                        _a.maf.pre = this;
                                    } else {
                                        _a.maf.pre = null;
                                    }
                                };
                                o.onblur = function (e) {
                                    if (_a.maf.key == 9 && _a.maf.firstCompact && !_a.maf.shift && this.className.indexOf("compact") > -1) {
                                        _a.maf.key = null;
                                        _a.maf.acm = true;
                                        document.getElementById(_a.maf.firstCompact).focus();
                                    } else {
                                        _a.maf.key = null;
                                        _a.maf.shift = null;
                                        if (_6cb) {
                                            return _6cb(this);
                                        }
                                    }
                                };
                            }
                        } else {
                            if (_6cc) {
                                if (ss) {
                                    o.onclick = function () {
                                        return _6cc(this, this.conf, this.share);
                                    };
                                } else {
                                    if (!o.conf.ui_window_panes) {
                                        o.onclick = function () {
                                            if (_a.bro.iph || _a.bro.wph || _a.bro.dro) {
                                                return addthis_sendto("more", this.conf, this.share);
                                            } else {
                                                return addthis_open(this, "", null, null, this.conf, this.share);
                                            }
                                        };
                                    } else {
                                        o.onclick = function () {
                                            return addthis_sendto("more", this.conf, this.share);
                                        };
                                    }
                                }
                            }
                        }
                        if (o.tagName.toLowerCase() == "a") {
                            var url = o.share.url || addthis_share.url;
                            _a.usu(url);
                            if (ss) {
                                var _6ed = _getCustomService(ss, o.conf), cbtn = o.firstChild;
                                if (_6ed && _6ed.code && _6ed.icon) {
                                    if (cbtn && cbtn.className.indexOf("at300bs") > -1) {
                                        var size = "16";
                                        if (check32(o, 1)) {
                                            cbtn.className = cbtn.className.split("at15nc").join("");
                                            size = "32";
                                        } else {
                                            if (check20(o, 1)) {
                                                cbtn.className = cbtn.className.split("at15nc").join("");
                                                size = "20";
                                            }
                                        }
                                        cbtn.style.background = "url(" + _6ed.icon + ") no-repeat top left transparent";
                                        if (!cbtn.style.cssText) {
                                            cbtn.style.cssText = "";
                                        }
                                        cbtn.style.cssText = "line-height:" + size + "px!important;width:" + size + "px!important;height:" + size + "px!important;background:" + cbtn.style.background + "!important";
                                    }
                                }
                                if (!_686[ss]) {
                                    if (_6c6.follow) {
                                        if (ss != "twitter") {
                                            o.href = o.share.followUrl;
                                        }
                                        o.conf = (o.conf || {});
                                        o.conf.follow = true;
                                        o.onclick = function (ev) {
                                            _a.share.track(ss, 1, o.share, o.conf);
                                            if (ss == "twitter") {
                                                return _a.share.ocw(o.share.followUrl, 520, 520);
                                            }
                                        };
                                        if (o.children && o.children.length == 1 && o.parentNode && o.parentNode.className.indexOf("toolbox") > -1) {
                                            var sp = document.ce("span");
                                            sp.className = "addthis_follow_label";
                                            sp.innerHTML = _a.services.getName(ss).replace("_follow", "");
                                            o.appendChild(sp);
                                        }
                                    } else {
                                        if (_a.share.externEvents(ss, o, _6c6)) {
                                        } else {
                                            if (!o.noh) {
                                                if (o.conf.ui_open_windows || _a.share.auw(ss)) {
                                                    o.onclick = function (e) {
                                                        return _a.share.stw(ss, o.share, o.conf);
                                                    };
                                                } else {
                                                    o.onclick = function (e) {
                                                        return _a.share.siw(ss, o.share, o.conf);
                                                    };
                                                    o.href = _a.share.genurl(ss, 0, o.share, o.conf);
                                                }
                                            }
                                        }
                                    }
                                    if (!o.conf.follow) {
                                        _6.addEvents(o, ss, url);
                                    }
                                    if (!o.noh && !o.target) {
                                        o.target = "_blank";
                                    }
                                    _6.links.push(o);
                                } else {
                                    if (ss == "mailto" || (ss == "email" && (o.conf.ui_use_mailto || _a.bro.iph || _a.bro.wph || _a.bro.ipa || _a.bro.dro))) {
                                        o.onclick = function () {
                                            o.share.xid = _a.util.cuid();
                                            (new Image()).src = _a.share.genurl("mailto", 0, o.share, o.config);
                                            _a.gat(ss, url, o.conf, o.share);
                                        };
                                        o.href = _a.share.genieu(o.share, o.config || o.conf);
                                        _6.ems.push(o);
                                    }
                                }
                                if (!o.title || o.at_titled) {
                                    var _6f4 = _a.services.getName(ss, !_6ed);
                                    if (_683[ss]) {
                                        _681.push({link: o, title: ss});
                                    }
                                    o.title = unaccent(_6c6.follow ? (_682[ss] ? _682[ss] : "Follow on " + _6f4) : (_683[ss] ? _683[ss] : _6f4));
                                    o.at_titled = 1;
                                }
                                if (!o.href) {
                                    o.href = "#";
                                }
                            } else {
                                if (o.conf.product && o.parentNode.className.indexOf("toolbox") == -1) {
                                    registerProductCode(o);
                                }
                            }
                        }
                        var app;
                        switch (_6cd) {
                            case"img":
                                if (!o.hasChildNodes()) {
                                    var lang = (o.conf.ui_language || _a.lng()).split("-").shift(), _6f7 = _a.ivl(lang);
                                    if (!_6f7) {
                                        lang = "en";
                                    } else {
                                        if (_6f7 !== 1) {
                                            lang = _6f7;
                                        }
                                    }
                                    app = _makeButton(_a.iwb(lang) ? 150 : 125, 16, "Share", _atr + "static/btn/v2/lg-share-" + lang.substr(0, 2) + ".gif");
                                }
                                break;
                        }
                        if (app) {
                            o.appendChild(app);
                        }
                    }
                }
            }

            function _renderToolbox(_6f8, _6f9, _6fa, _6fb, _6fc) {
                for (var i = 0; i < _6f8.length; i++) {
                    var b = _6f8[i], d = document;
                    if (b == null) {
                        continue;
                    }
                    if (_6fb !== false || !b.ost) {
                        var attr = _getATtributes(b, _6f9, _6fa, !_6fc), hc = 0, c = b.className || "", _702 = "", s = c.match(/addthis_button_([\w\.]+)(?:\s|$)/), cArr = c.match(/addthis_counter_([\w\.]+)(?:\s|$)/), _705 = {}, sv = s && s.length ? s[1] : 0, csv = cArr && cArr.length ? cArr[1] : 0;
                        mrg(attr.conf, _679);
                        mrg(attr.share, _67a);
                        if (sv && !_a.share.extern(sv, b, attr)) {
                            if (sv.indexOf("preferred") > -1) {
                                if (b._iss) {
                                    continue;
                                }
                                s = c.match(/addthis_button_preferred_([0-9]+)(?:\s|$)/);
                                var _708 = ((s && s.length) ? Math.min(16, Math.max(1, parseInt(s[1]))) : 1) - 1, _709 = {pinterest: "pinterest_share"};
                                if (!b.conf || _6fc) {
                                    b.conf = attr.conf || b.conf || {};
                                }
                                if (!b.share || _6fc) {
                                    b.share = attr.share || b.share || {};
                                }
                                b.conf.product = "tbx-" + _atc.ver;
                                registerProductCode(b);
                                if (window._atw) {
                                    if (!b.parentNode.services) {
                                        b.parentNode.services = {};
                                    }
                                    var excl = _atw.conf.services_exclude || "", _70b = _atw.loc, _70c = b.parentNode.services, opts = _a.util.unqconcat((window.addthis_options || "").replace(",more", "").split(","), _70b.split(","));
                                    do {
                                        sv = opts[_708++];
                                        if (_709[sv]) {
                                            sv = _709[sv];
                                        }
                                    } while (_708 < opts.length && (excl.indexOf(sv) > -1 || _70c[sv]) || (_a.bro.ie9 && sv == "link"));
                                    if (_70c[sv]) {
                                        _a.util.each(_atw.list, function (k, v) {
                                            if (!_70c[k] && excl.indexOf(k) == -1) {
                                                sv = k;
                                                throw{cancel: true};
                                            }
                                        });
                                    }
                                    b._ips = 1;
                                    if (b.className.indexOf(sv) == -1) {
                                        b.className += " addthis_button_" + sv;
                                        b._iss = 1;
                                    }
                                    b.parentNode.services[sv] = 1;
                                } else {
                                    _a.alg(attr.conf.ui_language || window.addthis_language);
                                    _a.plo.unshift(["deco", _renderToolbox, [b], _6f9, _6fa, true]);
                                    if (_a.gssh) {
                                        _a.pld = _a.ajs(_atc.rsrcs.menujs);
                                    } else {
                                        if (!_a.pld) {
                                            _a.pld = 1;
                                            var _710 = function () {
                                                _a.pld = _a.ajs(_atc.rsrcs.menujs);
                                            };
                                            if (_a.upm) {
                                                _a._rec.push(function (data) {
                                                    if (data.ssh) {
                                                        _710();
                                                    }
                                                });
                                                setTimeout(_710, 500);
                                            } else {
                                                _710();
                                            }
                                        }
                                    }
                                    continue;
                                }
                            } else {
                                if (sv.indexOf("follow") > -1) {
                                    if (sv == "google_follow") {
                                        b.title = "Follow on Google";
                                    } else {
                                        sv = sv.split("_follow").shift();
                                    }
                                    _705.follow = true;
                                    _a.track.apc("flw-" + _atc.ver);
                                    attr.share.followUrl = _a.share.gfu(sv, attr.share.userid, attr.share.usertype) || attr.share.url;
                                }
                            }
                            if (!_a.services.isTop(sv, 32) && (_677 || check32(b))) {
                                _5bc.load();
                            }
                            if (!_a.services.isTop(sv, 16) && (_678 || check20(b))) {
                                _676.load();
                            }
                            var _712 = (_a.services.isTop(sv, 16) && !check32(b, true) && !check20(b, true));
                            if (!b.childNodes.length) {
                                var sp = d.ce("span");
                                b.appendChild(sp);
                                sp.className = (_712 ? "at16nc " : " ") + "at300bs at15nc at15t_" + sv + (_712 ? " at16t_" + sv : "");
                                if (((((b.parentNode || {}).parentNode || {}).parentNode || {}).className || "").indexOf("label_style") > -1) {
                                    var sp2 = d.createTextNode(_a.services.getName(sv));
                                    b.appendChild(sp2);
                                } else {
                                    var _715 = "";
                                    if (sp != _1 && (sv === "compact" || sv === "expanded")) {
                                        _715 = "More Sharing Services";
                                    } else {
                                        if (sp != _1) {
                                            _715 = "Share on " + sv;
                                        }
                                    }
                                    try {
                                        sp.innerHTML = "<span class=\"at_a11y\">" + _715 + "</span>";
                                    } catch (e) {
                                        var _716 = d.ce("span");
                                        _716.className = "at_a11y";
                                        _716.appendChild(document.createTextNode(_715));
                                        sp.appendChild(_716);
                                    }
                                }
                            } else {
                                if (b.childNodes.length == 1) {
                                    var cn = b.childNodes[0];
                                    if (cn.nodeType == 3) {
                                        var sp = d.ce("span");
                                        b.insertBefore(sp, cn);
                                        sp.className = (_712 ? "at16nc " : " ") + "at300bs at15nc at15t_" + sv + (_712 ? " at16t_" + sv : "");
                                    }
                                    if (sp != _1 && (sv === "compact" || sv === "expanded")) {
                                        sp.innerHTML = "<span class=\"at_a11y\">More Sharing Services</span>";
                                    } else {
                                        if (sp != _1) {
                                            sp.innerHTML = "<span class=\"at_a11y\">Share on " + sv + "</span>";
                                        }
                                    }
                                } else {
                                    if (b.firstChild && b.firstChild.nodeType == 3 && b.firstChild.textContent == "\n") {
                                    } else {
                                        hc = 1;
                                    }
                                }
                            }
                            if (sv === "compact" || sv === "expanded") {
                                if (!hc && c.indexOf("at300") == -1) {
                                    b.className += " at300m";
                                }
                                if (attr.conf.product && attr.conf.product.indexOf("men-") == -1) {
                                    attr.conf.product += ",men-" + _atc.ver;
                                }
                                if (!b.href) {
                                    b.href = "#";
                                }
                                if (b.parentNode && b.parentNode.services) {
                                    attr.conf.parentServices = b.parentNode.services;
                                }
                                if (sv === "expanded") {
                                    _705.nohover = true;
                                    _705.singleservice = "more";
                                }
                            } else {
                                if ((b.parentNode.className || "").indexOf("toolbox") > -1) {
                                    if (!b.parentNode.services) {
                                        b.parentNode.services = {};
                                    }
                                    b.parentNode.services[sv] = 1;
                                }
                                if (!hc && c.indexOf("at300") == -1) {
                                    b.className += " at300b";
                                }
                                _705.singleservice = sv;
                            }
                            if (b._ips) {
                                _705.issh = true;
                            }
                            _render([b], attr, _705, _6fc);
                            b.ost = 1;
                            registerProductCode(b);
                        } else {
                            if (csv) {
                                if (b.ost) {
                                    continue;
                                }
                                b.ost = 1;
                                var _718 = d.ce("a"), _719 = d.ce("a");
                                _718.className = "addthis_native_counter_sibling addthis_button_" + csv;
                                _719.className = "addthis_native_counter addthis_counter addthis_bubble_style";
                                b.className += " addthis_native_counter_parent";
                                b.appendChild(_718);
                                b.appendChild(_719);
                                attr.conf.service = csv.indexOf("pinterest") > -1 ? "pinterest_share" : csv;
                                _render(_718, attr, {singleservice: csv});
                                _6.counter(_719, attr.conf, attr.share);
                            }
                        }
                    }
                }
            }

            function gat(s, au, conf, _71d) {
                if (s == "facebook_unlike" || s == "google_unplusone") {
                    return;
                }
                conf = conf || {};
                var _71e = conf.data_ga_tracker, _71f = conf.data_ga_property;
                if (_71f) {
                    if (typeof(window._gat) == "object" && _gat._getTracker) {
                        _71e = _gat._getTracker(_71f);
                    } else {
                        if (typeof(window._gaq) == "object" && _gaq._getAsyncTracker) {
                            _71e = _gaq._getAsyncTracker(_71f);
                        } else {
                            if (window._gaq instanceof Array) {
                                _gaq.push([function () {
                                    _a.gat(s, au, conf, _71d);
                                }]);
                            }
                        }
                    }
                }
                if (_71e && typeof(_71e) == "string") {
                    _71e = window[_71e];
                }
                if (_71e && typeof(_71e) == "object") {
                    if (s == "more" || s == "settings") {
                        return;
                    }
                    var _720 = au || (_71d || {}).url || location.href, _721 = s, _722 = "share";
                    if (_721.indexOf("_") > -1) {
                        _721 = _721.split("_");
                        _722 = _721.pop();
                        if (_722.length <= 2) {
                            _722 = "share";
                        }
                        _721 = _721.shift();
                    }
                    if (_720.toLowerCase().replace("https", "http").indexOf("http%3a%2f%2f") == 0) {
                        _720 = _duc(_720);
                    }
                    try {
                        if (conf.data_ga_social && _71e._trackSocial && s != "google_plusone") {
                            _71e._trackSocial(_721, _722, _71d.url);
                        } else {
                            _71e._trackEvent("addthis", s, _720);
                        }
                    } catch (e) {
                        try {
                            _71e._initData();
                            if (conf.data_ga_social && _71e._trackSocial && s != "google_plusone") {
                                _71e._trackSocial(_721, _722, _71d.url);
                            } else {
                                _71e._trackEvent("addthis", s, _720);
                            }
                        } catch (e) {
                        }
                    }
                }
            }

            _a.gat = gat;
            _6.update = function (_723, what, _725) {
                if (_723 == "share") {
                    if (what == "url") {
                        _a.usu(0, 1);
                    }
                    if (!window.addthis_share) {
                        window.addthis_share = {};
                    }
                    window.addthis_share[what] = _725;
                    _67c[what] = _725;
                    for (var i in _6.links) {
                        var o = _6.links[i], rx = new RegExp("&" + what + "=(.*)&"), ns = "&" + what + "=" + _euc(_725) + "&";
                        if ((o.conf || {}).follow) {
                            continue;
                        }
                        if (o.share) {
                            o.share[what] = _725;
                        }
                        if (!o.noh) {
                            o.href = o.href.replace(rx, ns);
                            if (o.href.indexOf(what) == -1) {
                                o.href += ns;
                            }
                        }
                    }
                    for (var i in _6.ems) {
                        var o = _6.ems[i];
                        o.href = _a.share.genieu(addthis_share);
                    }
                } else {
                    if (_723 == "config") {
                        if (!window.addthis_config) {
                            window.addthis_config = {};
                        }
                        window.addthis_config[what] = _725;
                        _67b[what] = _725;
                    }
                }
            };
            _6._render = _render;
            _6.button = function (what, _72b, _72c) {
                _72b = _72b || {};
                if (!_72b.product) {
                    _72b.product = "men-" + _atc.ver;
                }
                _render(what, {conf: _72b, share: _72c}, {internal: "img"});
            };
            _6.toolbox = function (what, _72e, _72f, _730, _731) {
                var _732 = _67e(what);
                for (var i = 0; i < _732.length; i++) {
                    var tb = _732[i], _735 = window.jQuery || window.$, attr = _getATtributes(tb, _72e, _72f, _730), sp = document.ce("div"), c;
                    tb.services = {};
                    if (!attr.conf.product) {
                        attr.conf.product = "tbx" + (tb.className.indexOf("32x32") > -1 ? "32" : (tb.className.indexOf("20x20") > -1 ? "20" : "")) + "-" + _atc.ver;
                    }
                    if (tb.className.indexOf("peekaboo_style") > -1) {
                        if (!_atc._ld_pkcss) {
                            (new _a.resource.Resource("peekaboo", _atc.rsrcs.peekaboocss, function () {
                                return true;
                            })).load();
                            _atc._ld_pkrcss = 1;
                        }
                        if (!tb.peekaboo) {
                            tb.peekaboo = true;
                            tb.onmouseover = function () {
                                tb.is_hovered = 1;
                                tb.timeout = setTimeout(function () {
                                    if (tb.is_hovered) {
                                        if (_735) {
                                            _735(".addthis_peekaboo_style ul").slideDown("fast");
                                        } else {
                                            tb.getElementsByTagName("ul")[0].style.display = "block";
                                        }
                                    }
                                }, 500);
                            };
                            tb.onmouseout = function () {
                                tb.is_hovered = 0;
                                if (tb.timeout) {
                                    clearTimeout(tb.timeout);
                                }
                                tb.timeout = setTimeout(function () {
                                    if (!tb.is_hovered) {
                                        if (_735) {
                                            _735(".addthis_peekaboo_style ul").slideUp("fast");
                                        } else {
                                            tb.getElementsByTagName("ul")[0].style.display = "none";
                                        }
                                    }
                                }, 500);
                            };
                        }
                    }
                    if (tb.className.indexOf("floating_style") > -1) {
                        if (!_atc._ld_barcss) {
                            (new _a.resource.Resource("fixedcss", _atc.rsrcs.fltcss, function () {
                                return true;
                            })).load();
                            _atc._ld_barcss = 1;
                        }
                        if (!tb.fixed) {
                            tb.fixed = true;
                            function dce(t, c, i) {
                                var el = d.ce(t);
                                el.className = c;
                                if (i) {
                                    el.id = i;
                                }
                                return el;
                            }

                            var _73d = dce("DIV", "at-floatingbar-inner"), _72f = dce("DIV", "at-floatingbar-share"), _73e = dce("DIV", "addthis_internal_container");
                            while (tb.childNodes.length > 0) {
                                _73e.appendChild(tb.firstChild);
                            }
                            _72f.appendChild(_73e);
                            _73d.appendChild(_72f);
                            tb.appendChild(_73d);
                            if (document.compatMode == "BackCompat" && _a.bro.msi && !_731) {
                                tb.setAttribute("className", tb.className.replace("addthis_bar", "").replace("addthis_bar_vertical", "").replace("addthis_floating_style", "addthis_quirks_mode"));
                                if (tb.className.indexOf("addthis_32x32_style") > -1) {
                                    tb.setAttribute("className", tb.className + " addthis_bar_vertical_medium");
                                } else {
                                    if (tb.className.indexOf("addthis_16x16_style") > -1) {
                                        tb.setAttribute("className", tb.className + " addthis_bar_vertical_small");
                                    } else {
                                        if (tb.className.indexOf("addthis_counter_style") > -1) {
                                            tb.setAttribute("className", tb.className + " addthis_bar_vertical_large");
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (tb) {
                        c = tb.getElementsByTagName("a");
                        if (c) {
                            _renderToolbox(c, attr.conf, attr.share, !_730, !_730);
                        }
                        tb.appendChild(sp);
                    }
                    sp.className = "atclear";
                }
            };
            _6.ready = function (_73f) {
                if (_6.ost) {
                    return;
                }
                _6.ost = 1;
                doRenderPass();
                _a.ed.fire("addthis.ready", _6);
                if (_a.onr) {
                    _a.onr(_6);
                }
                callPostLoads();
                _a.share.sub();
                w.addthis_config.eua = w.addthis_config.eua || true;
                if (w.addthis_config.eua && _atc.ver >= 300 && !_atc.xck && !_a.bro.ie6 && !_a.bro.ie7) {
                    _6.auth.init();
                }
                if (_73f && typeof _73f == "function") {
                    _73f();
                }
            };
            _6.util.getAttributes = _getATtributes;
            _6.ad = _a.extend(_6.ad, _a.ad);
            function doRenderPass() {
                var at = _6, a = ".addthis_";
                if (at.osrp) {
                    return;
                }
                at.osrp = 1;
                _67a = w.addthis_share;
                _679 = w.addthis_config;
                body = document.gn("body").item(0);
                _67f = _a.util.gebcn(body, "A", "addthis_button_", true, true);
                _680 = _a.util.gebcn(body, "A", "addthis_counter_", true, true);
                addIEHoverFix();
                _6.toolbox(a + "toolbox", null, null, true, _680.length);
                _6.button(a + "button");
                _6.counter(a + "counter");
                _6.count(a + "count");
                if (typeof _6.overlay === "function") {
                    _6.overlay(a + "shareable");
                }
                if (typeof _6.dock === "function") {
                    _6.dock(a + "bar");
                }
                _renderToolbox(_67f, null, null, false);
                _renderToolbox(_680, null, null, false);
                if (((_679 || {}).login || {}).services) {
                    _6.login.initialize();
                }
            }

            addEventListeners();
            if (_atc.xol) {
                callPostLoads();
                if (_a8.isReady) {
                    doRenderPass();
                }
            } else {
                _a8.append((function () {
                    window.addthis.ready();
                }));
            }
            _a.ed.fire("addthis-internal.ready", _6);
        }
        function callPostLoads() {
            if (_674) {
                return;
            }
            var at = window.addthis, func;
            for (var i = 0, plo = at.plo, q; i < plo.length; i++) {
                q = plo[i];
                if (!q.called) {
                    func = (q.ns ? (typeof q.ns == "string" ? at[q.ns] : q.ns) : at);
                    if (q && q.call && func[q.call]) {
                        func[q.call].apply(q.ctx ? (typeof(q.ctx == "string") ? at[q.ctx] : q.ctx) : this, q.args);
                    }
                }
            }
            _674 = 1;
        }

        function addEventListeners() {
            if (_674) {
                return;
            }
            var at = window.addthis;
            for (var i = 0, plo = at.plo, q; i < plo.length; i++) {
                q = plo[i];
                if (q.call == "addEventListener") {
                    (q.ns ? (typeof q.ns == "string" ? at[q.ns] : q.ns) : at)[q.call].apply(q.ctx ? (typeof(q.ctx == "string") ? at[q.ctx] : q.ctx) : this, q.args);
                    q.called = 1;
                }
            }
        }

        (function () {
            var a = ["qn87", "neud", "742r", "eu3c", "29ob", "3cns", "i5g8", "nb9d", "ndhr"];
            window.addthis_pp = function (f) {
                if (f && f.config && f.pubid === c) {
                    var e = true;
                    if (f.excludeDomains) {
                        for (var h in f.excludeDomains) {
                            if (f.excludeDomains[h] === document.location.host) {
                                e = false;
                                break;
                            }
                        }
                    }
                    if (f.excludePaths) {
                        for (var g in f.excludePaths) {
                            if (document.location.pathname.indexOf(f.excludePaths[g]) > -1) {
                                e = false;
                                break;
                            }
                        }
                    }
                    if (f.includeDomains && e) {
                        e = false;
                        for (var h in f.includeDomains) {
                            if (f.includeDomains[h] === document.location.host) {
                                e = true;
                                break;
                            }
                        }
                    }
                    if (f.includePaths && e) {
                        e = false;
                        for (var g in f.includePaths) {
                            if (document.location.pathname.indexOf(f.includePaths[g]) > -1) {
                                e = true;
                                break;
                            }
                        }
                    }
                    if (e) {
                        _6.dynamic.initialize(f.config);
                    }
                }
            };
            if (window.addthis_pub && window.addthis_pub != "") {
                var c = window.addthis_pub, d = "//s7.addthis.com/static/pubs/" + c + ".json";
                for (var b in a) {
                    if (_a.mun(c) === a[b]) {
                        _a.ajs(d, 1, true, true, null, true);
                        break;
                    }
                }
            }
        })();
    })();
    function addthis_open() {
        if (typeof iconf == "string") {
            iconf = null;
        }
        return _ate.ao.apply(_ate, arguments);
    }

    function addthis_close() {
        _ate.ac();
    }

    function addthis_sendto() {
        _ate.as.apply(_ate, arguments);
        return false;
    }

    if (_atc.dr) {
        _adr.onReady();
    }
} else {
    _ate.inst++;
}
_ate.util.pae(_ate.util.gtt());
if (_atc.abf) {
    addthis_open(document.getElementById("ab"), "emailab", window.addthis_url || "[URL]", window.addthis_title || "[TITLE]");
}