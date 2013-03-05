/* (c) 2008-2012 AddThis, Inc */
if (!window._ate) {
    (function () {
        var _1, w = window,
            d = document;
        var l;
        try {
            l = window.location;
            if (l.protocol.indexOf("file") === 0 || l.protocol.indexOf("safari-extension") === 0 || l.protocol.indexOf("chrome-extension") === 0) {
                _atr = "http:" + _atr;
            }
            if (l.hostname.indexOf("localhost") != -1) {
                _atc.loc = 1;
            }
        } catch (e) {}
        var ua = navigator.userAgent.toLowerCase(),
            d = document,
            w = window,
            _6 = window.addthis || {}, A = _6,
            dl = d.location,
            b = {
                win: /windows/.test(ua),
                xp: (/windows nt 5.1/.test(ua)) || (/windows nt 5.2/.test(ua)),
                osx: /os x/.test(ua),
                chr: /chrome/.test(ua) && !(/rockmelt/.test(ua)),
                chb: /chrome\/(1[456789]|2\d)/.test(ua),
                cho: /chrome\/(1[2345678]|2\d)/.test(ua),
                iph: /iphone/.test(ua) || (/ipod/.test(ua)),
                dro: /android/.test(ua),
                wph: /windows phone/.test(ua),
                ipa: /ipad/.test(ua),
                saf: /safari/.test(ua) && !(/chrome/.test(ua)),
                opr: /opera/.test(ua),
                msi: (/msie/.test(ua)) && !(/opera/.test(ua)),
                ffx: /firefox/.test(ua),
                ff2: /firefox\/2/.test(ua),
                ffn: /firefox\/((3.[6789][0-9a-z]*)|(4.[0-9a-z]*))/.test(ua),
                ie6: /msie 6.0/.test(ua),
                ie7: /msie 7.0/.test(ua),
                ie8: /msie 8.0/.test(ua),
                ie9: /msie 9.0/.test(ua),
                mob: /(iphone|ipod|android|mobi|blackberry)/.test(ua),
                mod: -1
            }, _a = {
                rev: "119693",
                bro: b,
                wlp: (l || {}).protocol,
                dl: dl,
                unj: w.JSON && typeof w.JSON.parse == "function" && typeof w.JSON.stringify == "function",
                upm: !! w.postMessage && ("" + w.postMessage).toLowerCase().indexOf("[native code]") !== -1,
                bamp: _atc.bamp - Math.random(),
                camp: _atc.camp - Math.random(),
                xamp: _atc.xamp - Math.random(),
                vamp: _atc.vamp - Math.random(),
                tamp: _atc.tamp - Math.random(),
                pamp: _atc.pamp - Math.random(),
                ab: "-",
                inst: 1,
                wait: 500,
                tmo: null,
                sub: !! window.at_sub,
                dbm: 0,
                uid: null,
                api: {},
                imgz: [],
                hash: window.location.hash
            };
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
            }, _25 = Array.prototype.slice,
            _26 = function (a) {
                return _25.apply(a, _25.call(arguments, 1));
            }, _28 = function (s) {
                return ("" + s).replace(/(^\s+|\s+$)/g, "");
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
                return reduce(o, function (acc, v, k) {
                    k = _28(k);
                    if (k) {
                        acc.push(_euc(k) + (eq || "=") + _euc(_28((typeof (v) == "object" ? _32(v, del || "&", eq || "=") : (v)))));
                    }
                    return acc;
                }, []).join(del || "&");
            }, _39 = function (o, del) {
                return reduce(o, function (acc, v, k) {
                    k = _28(k);
                    if (k) {
                        acc.push(_euc(k) + "=" + _euc(_28(v)));
                    }
                    return acc;
                }, []).join(del || "&");
            }, _3f = function (q, del, eq) {
                return reduce((q || "").split(del || "&"), function (acc, _44) {
                    try {
                        var kv = _44.split((eq || "=")),
                            k = _28(_duc(kv[0])),
                            v = _28(_duc(kv.slice(1).join(eq || "=")));
                        if (v.indexOf(del || "&") > -1 || v.indexOf(eq || "=") > -1) {
                            v = _3f(v, del || "&", eq || "=");
                        }
                        if (k) {
                            acc[k] = v;
                        }
                    } catch (e) {}
                    return acc;
                }, {});
            }, _48 = function (q, del) {
                return reduce((q || "").split(del || "&"), function (acc, _4c) {
                    try {
                        var kv = _4c.split("="),
                            k = _28(_duc(kv[0])),
                            v = _28(_duc(kv.slice(1).join("=")));
                        if (k) {
                            acc[k] = v;
                        }
                    } catch (e) {}
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
                var _55 = _26(arguments, 0),
                    fn = _55.shift(),
                    _57 = _55.shift();
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
                return (s.match(/(([^\/\/]*)\/\/|\/\/)?([^\/\?\&\#]+)/i))[0];
            }, _67 = function (s) {
                return s.replace(_65(s), "");
            }, _69 = function (obj) {
                if (null == obj || "object" != typeof obj) {
                    return obj;
                }
                if (obj instanceof Object) {
                    var _6b = {};
                    if (typeof (obj.hasOwnProperty) == "function") {
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
                    if (typeof val === "object" && "length" in val) {
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
            }(),
            _82 = {
                unqconcat: _20,
                reduce: reduce,
                slice: _26,
                strip: _28,
                extend: _2a,
                toKV: _39,
                rtoKV: _32,
                fromKV: _48,
                rfromKV: _3f,
                otoCSV: _50,
                bind: _54,
                listen: _5d,
                each: _1a,
                unlisten: _61,
                gUD: _65,
                gUQS: _67,
                clone: _69,
                mrg: mrg,
                json2html: _6d,
                misc: {}
            };
        _a.util = _82;
        _2a(_a, _82);
        var u = _a.util;
        (function (j, l, m) {
            var h, e = w.JSON && "function" == typeof JSON.stringify,
                p = j.util;

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
                        return JSON.stringify({
                            remoteEvent: {
                                data: v,
                                type: this.type,
                                triggerType: this.triggerType,
                                target: {},
                                triggerTarget: {}
                            }
                        });
                    }
                    return "";
                };
            }
            p.extend(k.prototype, {
                constructor: k,
                bubbles: false,
                preventDefault: p.noop,
                stopPropagation: p.noop,
                clone: function () {
                    return new this.constructor(this.type, this.triggerType, this.target, this.triggerTarget, p.extend({}, this.data));
                }
            });

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
                var u = this.getQueue(s),
                    r = u.indexOf(t);
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
                } catch (v) {}
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
            var g = {
                constructor: f,
                getQueue: a,
                addEventListener: i,
                removeEventListener: d,
                addRemoteDispatcher: o,
                dispatchEvent: n,
                fire: b,
                decorate: c
            };
            p.extend(f.prototype, g);
            j.event = {
                PolyEvent: k,
                EventDispatcher: f
            };
        })(_a, _a.api, _a);
        _a.ed = new _a.event.EventDispatcher(_a);
        var _a8 = {
                isBound: 0,
                isReady: 0,
                readyList: [],
                onReady: function () {
                    if (!_a8.isReady) {
                        _a8.isReady = 1;
                        var l = _a8.readyList.concat(window.addthis_onload || []);
                        for (var fn = 0; fn < l.length; fn++) {
                            l[fn].call(window);
                        }
                        _a8.readyList = [];
                    }
                },
                addLoad: function (_ab) {
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
                },
                bindReady: function () {
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
                },
                append: function (fn, _b5) {
                    r.bindReady();
                    if (r.isReady) {
                        fn.call(window, []);
                    } else {
                        r.readyList.push(function () {
                            return fn.call(window, []);
                        });
                    }
                }
            }, r = _a8,
            a = _a;
        _2a(_a, {
            plo: [],
            lad: function (x) {
                _a.plo.push(x);
            }
        });
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
                var g = document,
                    f = g.title,
                    e = g.location ? g.location.href : "";
                if (_atc.ver >= 250 && addthis_share.imp_url && e && e != w.addthis_share.url && !(_a.util.ivc((g.location.hash || "").substr(1).split(",").shift()))) {
                    w.addthis_share.url = w.addthis_url = e;
                    w.addthis_share.title = w.addthis_title = f;
                    return 1;
                }
                return 0;
            };
            b.igv = function (e, f) {
                if (!w.addthis_config) {
                    w.addthis_config = {
                        username: w.addthis_pub
                    };
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
                if (l && l.href.indexOf("_at_test300") > -1) {
                    _atc.ver = 300;
                }
                for (var a in addthis_conf) {
                    _atc[a] = addthis_conf[a];
                }
                _atc.ost = 1;
            }
        })(_a, _a.api, _a);
        (function (f, h, j) {
            var c = w.console,
                m = 0,
                a = (!c || typeof c.log === "undefined"),
                b = Array.prototype.slice,
                d = ["error", "warn", "info", "debug"],
                g = d.length;
            try {
                if (!a && l.hash.indexOf("atlog=1") > -1) {
                    m = 1;
                }
            } catch (k) {}
            f.log = {
                level: m
            };
            while (--g >= 0) {
                (function (e, n) {
                    f.log[n] = a ? function () {
                        return;
                    } : function () {
                        if (f.log.level <= 0) {
                            return;
                        }
                        var o = b.call(arguments),
                            i = typeof c[n] === "function" ? c[n] : c.log;
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
            var h, g = document,
                a = b.util;
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
            var g = document,
                k = window,
                f = 0;

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
                o = typeof (a.pub) === "function" ? a.pub() : a.pub;
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
        (function (f, i, k) {
            var d = new Date(),
                b = "__attag",
                o = "|",
                l = ",",
                m = 0,
                e = 0,
                q = [];

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
                if (typeof (r) == "string") {
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
            f.cookie.tag = {
                reset: j,
                add: p,
                remove: g,
                get: c,
                toKV: a
            };
        })(_a, _a.api, _a);
        (function (d, q, s) {
            var u = new Date(),
                m = ((document.location.href.indexOf(_atr) == -1) ? "__at" : "") + "uvc",
                l = "|",
                p = ",",
                b = 0,
                n = 0,
                f = {
                    high: 250,
                    med: 75
                }, i = [];

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
                var z = new Date(A.getFullYear(), 0, 1),
                    x, y, B;
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
                var y = t(),
                    z = 0;
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
            d.cookie.view = {
                _sd: a,
                _inc: g,
                reset: v,
                update: h,
                get: t,
                cla: o,
                toKV: j
            };
        })(_a, _a.api, _a);
        (function (e, u, v) {
            var g, n = {
                    high: 4,
                    med: 2
                }, m = (document.location.href.indexOf("addthis.com") > -1),
                p = 10,
                h = 20,
                o = (!m ? "__at" : "") + "ssc",
                s = {}, c = false,
                q = [],
                b = 0,
                d, x = 0;

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
                var A = [],
                    z;
                l();
                for (z in s) {
                    A.push({
                        name: z,
                        score: j(s[z])
                    });
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
                    var z = (e.cookie.rck(o) || "").split(","),
                        B, D, C, A;
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
                var z = false,
                    B, A = (e.cookie.rck("sshs") || "").split(",");
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
                var B = {}, z = [],
                    A;
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
                if (typeof (z) !== "string") {
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
                var z = [],
                    A, C;
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
            e.cookie.ssc = {
                reset: y,
                get: f,
                getServices: a,
                update: w
            };
        })(_a, _a.api, _a);
        (function (d, g, e) {
            var c = d.util,
                a = {}, b = {};
            if (!d.cbs) {
                d.cbs = {};
            }
            function f(k, j, n, l, h) {
                j = (_euc(j)).replace(/[0-3][A-Z]|[^a-zA-Z0-9]/g, "").toLowerCase();
                a[j] = a[j] || 0;
                var i = a[j]++,
                    m = k + "_" + j + (!h ? i : "");
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
                return "_ate.cbs." + _euc(m);
            }
            c.scb = f;
        })(_a, _a.api, _a);
        (function (b, d, c) {
            function e() {
                var k = a(navigator.userAgent, 16),
                    f = ((new Date()).getTimezoneOffset()) + "" + navigator.javaEnabled() + (navigator.userLanguage || navigator.language),
                    h = w.screen.colorDepth + "" + w.screen.width + w.screen.height + w.screen.availWidth + w.screen.availHeight,
                    g = navigator.plugins,
                    l = g.length;
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
                return (f & 16777215).toString(j || 32);
            }
            b.mun = a;
            b.gub = e;
        })(_a, _a.api, _a);
        (function (d, e, h) {
            var c, m = d.util,
                k = 4294967295,
                b = new Date().getTime();

            function i() {
                return ((b / 1000) & k).toString(16) + ("00000000" + (Math.floor(Math.random() * (k + 1))).toString(16)).slice(-8);
            }
            function a(n) {
                return l(n) ? (new Date((parseInt(n.substr(0, 8), 16) * 1000))) : new Date();
            }
            function j(n) {
                var o = a();
                return ((o.getTime() - 1000 * 86400) > (new Date()).getTime());
            }
            function g(n, p) {
                var o = a(n);
                return (((new Date()).getTime() - o.getTime()) > p * 1000);
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
                    return "";
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
            c.util.geo = {
                dec: b,
                parse: d,
                isin: a
            };
        })(_a, _a.api, _a);
        (function (a, c, b) {
            function d(e) {
                return e.split("//").pop().split("/").shift().split("#").shift().split("?").shift().split(".").slice(-2).join(".");
            }
            a.util = a.util || {};
            a.util.host = d;
        })(_a, _a.api, _a);
        (function (c, f, i) {
            var l = {}, b = [],
                j = {}, e = 0;

            function m(r, q) {
                if (b.length == 0) {
                    b = d.gn("script");
                }
                for (var o = 0; o < b.length; o++) {
                    var p = (b[o].src || "");
                    if (p) {
                        p = _a.mun(p);
                    }
                    if ((b[o].src || "").indexOf(q || "//s9.addthis.com/js/250/addthis_widget.js") > -1 && !j[p]) {
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
                if (r.adurl && typeof (r.adurl) == "string") {
                    _a.pixu = r.adurl;
                    e = 1;
                }
                if (r.adev && typeof (r.adev) == "string") {
                    var o = r.adev;
                    try {
                        o = _duc(o);
                    } catch (p) {}
                    o = o.split(";");
                    e = 1;
                    _a.ed.addEventListener("addthis-internal.data.uid", function () {
                        for (var u = 0; u < o.length; u++) {
                            var s = o[u].split(","),
                                v = {};
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
                var t = r.indexOf("#") > -1 && !o ? r.replace(/^[^\#]+\#?|^\#?/, "") : r.replace(/^[^\?]+\??|^\??/, ""),
                    u = c.util.fromKV(t);
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
                var q = document.gn("script"),
                    v = q.length,
                    r = q[v - 1],
                    t = h(r.src);
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
            var d = e.util,
                b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=";

            function a(k) {
                var j = "",
                    n, l, h, p, o, m = 0;
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
                var j = "",
                    n, l, h, p, o, m = 0;
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
            var j = c.util,
                a = {};

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
                var s = document,
                    p = (k == body && a[v] ? a[v] : (k || body || s.body).getElementsByTagName(v)),
                    n = [],
                    q, m;
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
                return (n);
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
                        return [];
                    })),
                    k = l(p, q),
                    s = (t) ? new RegExp("\\b" + t + "\\b", "i") : null,
                    m = [],
                    o;
                for (var n = 0, r = k.length; n < r; n += 1) {
                    o = k[n];
                    if (!s || s.test(o.nodeName)) {
                        m.push(o);
                    }
                }
                return m;
            }
            var i = ((document.getElementsByClassName && typeof (document.getElementsByClassName) == "function") && (!_a.bro.msi || document.documentMode >= 9) || (document.querySelectorAll && typeof (document.querySelectorAll) == "function" && (!_a.bro.msi || document.documentMode >= 8))) ? b : f;
            j.gebcn = f;
            j.select = g;
            j.parent = h;
        })(_a, _a.api, _a);
        var _1b8 = function (a) {
            a = a.slice(1).split("&");
            var c = {}, b;
            u.each(a, function (f, d) {
                b = d.split("=");
                if (b.length > 1) {
                    c[b[0]] = b[1];
                }
            });
            return c;
        }, _1bd = A.params = _1b8(l.search);
        u.misc.makeParams = _1b8;
        if ("at_tags" in _1bd) {
            _1bd.at_tag = _1bd.at_tags;
        }
        if ("at_tag" in _1bd) {
            _6.user.ready(function () {
                _a.cookie.tag.add(_6.params.at_tag);
            });
        }
        if ("at_welcome" in _1bd) {
            if (!_duc(_1bd.at_welcome).match(/\{/)) {
                _6.welcome_rule = _duc(_1bd.at_welcome);
            } else {
                try {
                    _6.bar.initialize(_duc(_1bd.at_welcome));
                } catch (e) {}
            }
        }
        _6.tip = function (e) {
            if (typeof e !== "object" || !("target" in e && "text" in e)) {
                return;
            }
            var a = ".addthis.tip{position:absolute;z-index:20;} .addthis.tip .tip-body {position:relative;border:1px solid #ECE3E3;width:240px;box-shadow: 0px 0px 2px 0px #999;background-color:#F3F3F3;top:20px;} .addthis.tip .tip-body p {margin:1.5em;font-size:13px;font-family:arial;z-index:10;} .addthis.tip .tip-point {position:absolute;width:38px;height:20px;top:4px;margin:auto;width:240px;background-image:url('http://cache.addthiscdn.com/downloads/img/surface/tip-pnt0.png');background-repeat:no-repeat;background-position:center; z-index:13;}";
            if (a) {
                var d = {
                    style: {
                        type: "text/css"
                    }
                };
                if (!_a.bro.ie) {
                    d.style.html = a;
                }
                var c = _a.util.json2html(d);
                document.getElementsByTagName("head")[0].appendChild(c);
                if (_a.bro.ie) {
                    c.styleSheet.cssText = a;
                }
            }
            var b = _a.util.json2html({
                "div.addthis.tip": [{
                    "div.tip-point": ""
                }, {
                    "div.tip-body": {
                        p: e.text
                    }
                }]
            });
            document.getElementsByTagName("body")[0].appendChild(b);
            target = e.target;
            b.style.left = target.offsetLeft + target.offsetWidth / 2 - b.offsetWidth / 2 + "px";
            b.style.top = target.offsetTop + target.offsetHeight + "px";
            return b;
        };
        (function (f, t, v) {
            var w = f,
                j = new Date().getTime(),
                s = function () {
                    return Math.floor(Math.random() * 4294967295).toString(36);
                }, x = function () {
                    return Math.floor((new Date().getTime() - j) / 100).toString(16);
                }, g = 0,
                i = function (a) {
                    if (g === 0) {
                        w.sid = g = (a || w.util.cuid());
                    }
                    return g;
                }, d = null,
                c = function (a, y, z) {
                    if (d !== null) {
                        clearTimeout(d);
                    }
                    if (a) {
                        d = setTimeout(function () {
                            y( !! z);
                        }, _a.wait);
                    }
                }, o = function (y, a) {
                    return _euc(y) + "=" + _euc(a) + ";" + x();
                }, n = 1,
                h = function (z, B) {
                    if (typeof z == "object") {
                        z = _a.util.toKV(z);
                    }
                    var y = (z || "").split("?"),
                        a = y.shift(),
                        A = (y.pop() || "").split("&");
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
                    var a = {}, B = A || [],
                        z;
                    for (z = 0; z < B.length; z++) {
                        a[B[z]] = 1;
                    }
                    return h(y, function (C, F) {
                        var G = [],
                            D, E;
                        if (F) {
                            for (D in F) {
                                if (typeof (F[D]) == "string") {
                                    E = (F[D] || "").split("=");