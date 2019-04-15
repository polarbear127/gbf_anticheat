define('constant', [], function() {
    return {
        BGM_ALIAS: "bgm",
        SE_ALIAS: "se",
        VOICE_ALIAS: "voice",
        VOICE_STAMP_ALIAS: "StampVoice_",
        VOICE_ENEMY_ALIAS: "enemy_voice",
        MAX_NUM_LOAD_VOICE_STAMP: 10,
        SE_SAMPLE_ALIAS: "sample",
        VOICE_SAMPLE_ALIAS: "sample",
        SE_ENHANCE_SUCCESS: "se/success_s_se_1.mp3",
        SE_ENHANCE_SUCCESS_HIGH: "se/success_l_se_1.mp3",
        SE_ENHANCE_LEVEL_UP: "se/levelup_arm_se_1.mp3",
        SE_ENHANCE_GAUGE: "se/gauge_se_1.mp3",
        SE_ENHANCE_GAUGE_OFFSET: 140,
        SE_ENHANCE_GAUGE_FREQUENCY: 3,
        EVENT_ANIMATION_START: "animationstart webkitAnimationStart",
        EVENT_ANIMATION_END: "animationend webkitAnimationEnd",
        SE_NEXT_SCENE: "se/serif_se_1.mp3",
        COMPANION_WEAPON_JOBS: [300201, 300301],
        JOB_IDS: [100101, 100201, 100301, 110101, 110201, 110301, 120101, 120201, 120301, 130101, 130201, 130301, 140001, 140101, 140201, 140301, 150001, 150101, 150201, 150301, 160001, 160101, 160201, 160301, 170001, 170101, 170201, 170301, 180001, 180101, 180201, 180301, 190001, 190101, 190201, 190301, 200201, 210201, 220201, 230201, 240201, 250201, 260201, 270201, 280201, 290201, 230301, 250301, 220301, 210301, 200301, 300201, 300301]
    }
});
define('catalog/ua/sound/webaudio', ["underscore"], function(a) {
    var b = function(b) {
        var c = Game.ua
          , d = function(a) {
            return a.ua ? a.ua instanceof RegExp ? a.ua.test(c.ua) : c.ua === a.ua : !0
        }
          , e = function(a) {
            var b = a.device;
            if (!b)
                return !0;
            var d = b.model;
            return d ? c.ua.indexOf(d) >= 0 : !0
        }
          , f = function(a) {
            var b = a.os;
            if (!b)
                return !0;
            var d = b.name;
            return d ? c.os.name == d : !0
        }
          , g = function(a) {
            var b = a.os;
            if (!b)
                return !0;
            var d = b.version;
            return d ? c.os.version == d : !0
        }
          , h = function(a) {
            var b = a.browser;
            if (!b)
                return !0;
            var d = b.name;
            return d ? c.browser.name == d : !0
        };
        return a.some(b, function(a) {
            return d(a) && e(a) && f(a) && g(a) && h(a)
        })
    };
    return {
        cannotUseWebAudio: function() {
            var a = [{
                ua: "Mozilla/5.0 (Linux; U; Android 4.4.2; ja-jp; SOL25 Build/17.1.C.0.296) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30"
            }, {
                ua: new RegExp("Mozilla/5.0 \\(Linux; Android 4.4.2; SOL25 Build/17.1.C.0.296\\) AppleWebKit/537.36 \\(KHTML, like Gecko\\) Chrome/[.0-9]* Mobile Safari/537.36")
            }, {
                ua: "Mozilla/5.0 (Linux; U; Android 4.4.2; ja-jp; F-01F Build/V10R22A) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30"
            }, {
                ua: new RegExp("Mozilla/5.0 \\(Linux; Android 4.4.2; SO-01F Build/14.3.B.0.288\\) AppleWebKit/537.36 \\(KHTML, like Gecko\\) Chrome/[.0-9]* Mobile Safari/537.36")
            }];
            return b(a)
        },
        cannotDisconnectWithArguments: function() {
            var a = [{
                device: {
                    model: "HTL22"
                },
                os: {
                    name: "Android"
                }
            }, {
                device: {
                    model: "SO-02E Build/10.3.1.B.0.256"
                },
                os: {
                    name: "Android",
                    version: "4.2.2"
                },
                browser: {
                    name: "Mobile Safari"
                }
            }];
            return b(a)
        },
        cannotStop: function() {
            var a = [{
                device: {
                    model: "SC-04E"
                },
                os: {
                    name: "Android",
                    version: "4.3"
                }
            }];
            return b(a)
        },
        cannotCreatePanner: function() {
            var a = [{
                ua: new RegExp("Mozilla/5.0 \\(Linux; U; Android 4.[0-9]+.[0-9]+; ja-jp; SonySO-02F Build/[.0-9a-zA-Z]*\\) AppleWebKit/[.0-9]+ \\(KHTML, like Gecko\\) Version/[.0-9]* Mobile Safari/[.0-9]+")
            }];
            return !b(a)
        },
        shouldUseDoublePlaybackRate: function() {
            var a = [{
                ua: "Mozilla/5.0 (Linux; Android 4.3; ja-jp; SC-04E Build/JSS15J) AppleWebKit/537.36 (KHTML, like Gecko) Version/1.5 Chrome/28.0.1500.94 Mobile Safari/537.36"
            }];
            return b(a)
        },
        shouldUseHalfPlaybackRate: function() {
            var a = [{
                device: {
                    model: "ME173X Build/JDQ39"
                },
                os: {
                    name: "Android",
                    version: "4.2.2"
                },
                browser: {
                    name: "Chrome"
                }
            }];
            return b(a)
        }
    }
});
define('lib/sound-util', ["catalog/ua/sound/webaudio"], function(a) {
    function b() {
        if (j)
            return j;
        var a, b = document.createElement("audio");
        return b.canPlayType && (a = {},
        a.mp3 = !!b.canPlayType("audio/mpeg;").replace(/no/, ""),
        a.ogg = !!b.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ""),
        a.wav = !!b.canPlayType('audio/wav; codecs="1"').replace(/no/, ""),
        a.aac = !!b.canPlayType('audio/mp4; codecs="mp4a.40.2"').replace(/no/, "")),
        b = null,
        j = a,
        a
    }
    function c() {
        return !!b()
    }
    function d() {
        return a.cannotUseWebAudio() ? !1 : window.webkitAudioContext || window.mozAudioContext || window.AudioContext
    }
    function e(a) {
        switch (a) {
        case "mp3":
            return "audio/mpeg";
        case "ogg":
            return "audio/ogg";
        case "wav":
            return "audio/wav";
        case "aac":
        case "m4a":
            return "audio/mp4";
        default:
            return ""
        }
    }
    function f(a, b, c) {
        var d = 0;
        if (3 === a ? 3 === b ? d = [0, 32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448][c] : 2 === b ? d = [0, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384][c] : 1 === b && (d = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320][c]) : (2 === a || 0 === a) && (3 === b ? d = [0, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256][c] : (2 === b || 1 === b) && (d = [0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160][c])),
        !d)
            throw new Error("unknown bit-rate");
        return d
    }
    function g(a, b) {
        var c = 0;
        if (3 === a ? c = [44100, 48e3, 32e3][b] : 2 === a ? c = [22050, 24e3, 16e3][b] : 0 === a && (c = [11025, 12e3, 8e3][b]),
        !c)
            throw new Error("unknown sample-rate");
        return c
    }
    function h(a, b) {
        var c = 0;
        if (c = 3 === a ? 3 === b ? 21 : 36 : 3 === b ? 13 : 21,
        !c)
            throw new Error("unknown info-offset");
        return c
    }
    function i(a) {
        function b() {
            return e[i++]
        }
        function c(a) {
            return e.subarray(i, i += a)
        }
        var d = {}
          , e = new Uint8Array(a)
          , i = 0;
        if (73 === e[0] && 68 === e[1] && 51 === e[2]) {
            d.id3v2 = !0,
            i += 5;
            for (var j = b(), k = 0, l = 0; 4 > l; l++)
                k <<= 7,
                k |= b();
            i += k,
            64 & j && (i += 10)
        }
        d.frameHeaderOffset = i;
        var m = c(4);
        if (255 !== m[0] || 224 !== (224 & m[1]))
            return d;
        var n = (24 & m[1]) >> 3
          , o = (6 & m[1]) >> 1
          , p = (240 & m[2]) >> 4
          , q = f(n, o, p)
          , r = (12 & m[2]) >> 2
          , s = g(n, r)
          , t = (192 & m[3]) >> 6
          , u = h(n, t);
        i += u - 4,
        d.bitRate = q,
        d.sampleRate = s;
        var v = c(4);
        if (!(88 === v[0] && 105 === v[1] && 110 === v[2] && 103 === v[3] || 73 === v[0] && 110 === v[1] && 102 === v[2] && 111 === v[3]))
            return d;
        i += 115,
        i += 22;
        var w = c(3)
          , x = w[0] << 4 | (240 & w[1]) >> 4
          , y = (15 & w[1]) << 8 | w[2];
        return d.encoderDelay = x,
        d.padding = y,
        d
    }
    var j = null;
    return {
        getAudioCapabilities: b,
        isSupportedHTMLAudio: c,
        isSupportedWebAudio: d,
        findMediaType: e,
        readLAMEHeader: i
    }
});
define('lib/shellapp', ["jquery", "underscore"], function(a, b) {
    function c(a, c, d) {
        var e = window.mobage.shellapp[a] || {}
          , f = e[c]
          , g = d || [];
        return b.isFunction(f) ? f.apply(f, g) : void 0
    }
    var d = {};
    d = b.isEmpty(window.mobage) ? function(a, d, e) {
        return b.isEmpty(window.mobage) ? void 0 : c(a, d, e)
    }
    : function(a, b, d) {
        return c(a, b, d)
    }
    ;
    var e = function() {
        this.uid = b.uniqueId("uid")
    };
    return b.extend(e.prototype, {
        Defined: {
            OsName: {
                IOS: "iOS"
            },
            StoreUrl: {
                IOS: "https://itunes.apple.com/jp/app/guranburufantaji/id852882903?mt=8&uo=4",
                ANDROID: "https://play.google.com/store/apps/details?id=jp.mbga.a12016007.lite"
            },
            DocType: {
                CONTACT: function() {
                    return b.isEmpty(window.mobage) ? null : window.mobage.shellapp.Service.DocType.CONTACT
                },
                LEGAL: function() {
                    return b.isEmpty(window.mobage) ? null : window.mobage.shellapp.Service.DocType.LEGAL
                }
            },
            Callbacks: {
                NAMESPACE: "window.mobage.shellapp.Callbacks."
            }
        },
        isShellApp: function() {
            return window.mobage && window.mobage.shellapp && window.mobage.shellapp.App ? !0 : !1
        },
        isShellAppIOS: function() {
            return this.isShellApp() && Game.ua.os.name == this.Defined.OsName.IOS ? !0 : !1
        },
        isShellAppAndroid: function() {
            return this.isShellApp() && !this.isShellAppIOS()
        },
        isShellAppWKWebView: function() {
            var a = window.Game.ua;
            return this.isShellAppIOS() && a.versionCompare(a.os.version, "8.0") >= 0
        },
        getUpdateUrl: function() {
            return this.isShellApp() ? this.isShellAppIOS() ? this.Defined.StoreUrl.IOS : this.Defined.StoreUrl.ANDROID : ""
        },
        setOnShellAppReady: function(a) {
            document.addEventListener("onShellAppReady", a)
        },
        openBrowser: function(a) {
            return d("Device", "openURLWithBrowser", [a])
        },
        getVersionName: function() {
            return d("App", "getVersionName")
        },
        getVersionCode: function() {
            return d("App", "getVersionCode")
        },
        openDocument: function(a) {
            return d("Service", "openDocument", [a])
        },
        openUserProfile: function(a) {
            return d("Service", "openUserProfile", [a])
        },
        logoutDialog: function() {
            return d("Service", "showLogoutDialog")
        },
        showCommunityUI: function() {
            return d("Service", "showCommunityUI")
        },
        getRemoteNotification: function() {
            return d("RemoteNotification", "getPayload")
        },
        playMusic: function(a, b, c) {
            b = b || 0,
            c = c || 0;
            var e = a.replace(/\//g, "_").toLowerCase().replace(/_all(?!\w)/g, "_00").replace(/\.mp3$/, "");
            return d("Music", "play", [e, b, c])
        },
        pauseMusic: function(a) {
            return a = a || 1,
            d("Music", "pause", [a])
        },
        resumeMusic: function(a) {
            return a = a || 1,
            d("Music", "resume", [a])
        },
        stopMusic: function(a) {
            return a = a || 0,
            d("Music", "stop", [a])
        },
        playSoundEffect: function(a) {
            var b = a.replace(/\//g, "_").toLowerCase().replace(/\.mp3$/, "");
            return d("SoundEffect", "play", [b])
        },
        loadVoice: function(a) {
            var b = a.replace(/\//g, "_").toLowerCase().replace(/\.mp3$/, "");
            return d("Voice", "load", [b])
        },
        playVoice: function(a, b) {
            var c = a.replace(/\//g, "_").toLowerCase().replace(/\.mp3$/, "");
            return d("Voice", "play", [c, !!b])
        },
        pauseVoice: function() {
            return d("Voice", "pause")
        },
        resumeVoice: function() {
            return d("Voice", "resume")
        },
        stopVoice: function() {
            return d("Voice", "stop")
        },
        setMute: function(a) {
            return a = 0 | (a ? 1 : 0),
            d("Sound", "setMute", [a])
        },
        setMusicMute: function(a) {
            return a = 0 | (a ? 1 : 0),
            d("Sound", "setMusicMute", [a])
        },
        setSEMute: function(a) {
            return a = 0 | (a ? 1 : 0),
            d("Sound", "setSEMute", [a])
        },
        setVoiceMute: function(a) {
            return a = 0 | (a ? 1 : 0),
            d("Sound", "setVoiceMute", [a])
        },
        setMusicVolume: function(a) {
            return d("Sound", "setMusicVolume", [+a])
        },
        setSEVolume: function(a) {
            return d("Sound", "setSEVolume", [+a])
        },
        setVoiceVolume: function(a) {
            return d("Sound", "setVoiceVolume", [+a])
        },
        setLocalNotification: function(a) {
            if (window.gbfLocalPushNotification) {
                var b = JSON.stringify(a);
                return d("Notification", "sendAlert", [b])
            }
        },
        pseudoLocalStorage: function(a) {
            return d("PseudoLocalStorage", "exec", [a])
        },
        sendAnalyticsLtv: function(a, c, e) {
            return e && !b.isString(e) && (e = JSON.stringify(e)),
            window.mobage && window.mobage.shellapp && window.mobage.shellapp.Analytics && window.mobage.shellapp.Analytics.sendLtv ? d("Analytics", "sendLtv", [a, c, e]) : void 0
        },
        sendAnalyticsEvent: function(a, b, c, e, f, g, h, i, j) {
            return a = a || "purchase",
            h = +h,
            i = 0 | i,
            b = b || null,
            c = c || null,
            e = e || null,
            f = f || null,
            g = g || null,
            j = j || null,
            window.mobage && window.mobage.shellapp && window.mobage.shellapp.Analytics && window.mobage.shellapp.Analytics.sendEvent ? d("Analytics", "sendEvent", [a, b, c, e, f, g, h, i, j]) : void 0
        },
        hideBackground: function() {
            return d("Footer", "hideBackground")
        }
    }),
    function(b) {
        function c(b, c, d) {
            var e = window.mobage.shellapp
              , f = new a.Deferred;
            b += "_";
            var g = b + c + "_success"
              , h = b + c + "_error"
              , i = JSON.stringify({
                command: b + "plocalstorage",
                key: c,
                value: d,
                callback_ok: this.Defined.Callbacks.NAMESPACE + g,
                callback_ng: this.Defined.Callbacks.NAMESPACE + h
            });
            return e.Callbacks || (e.Callbacks = {}),
            e.Callbacks[g] = function(a) {
                f.resolve(a)
            }
            ,
            e.Callbacks[h] = function(a) {
                f.reject(a)
            }
            ,
            this.pseudoLocalStorage(i),
            f.promise()
        }
        b.getPseudoLocalStorage = function(a) {
            return c.call(this, "get", a)
        }
        ,
        b.setPseudoLocalStorage = function(a, b) {
            return c.call(this, "set", a, b)
        }
    }(e.prototype),
    new e
});
define('util/event', ["underscore"], function(a) {
    var b = {};
    return b.on = b.addEventListener = function(a, b) {
        this._eventListeners = this._eventListeners || {},
        this._eventListeners[a] = this._eventListeners[a] || [],
        this._eventListeners[a].push(b)
    }
    ,
    b.removeEventListener = function(b, c) {
        var d = this;
        c._once && d.removeEventListener(b, c._once),
        d._eventListeners && (d._eventListeners[b] && (d._eventListeners[b] = a.reject(d._eventListeners[b], function(a) {
            return !c || a === c || a === c._once
        })),
        a.isEmpty(d._eventListeners[b]) && delete d._eventListeners[b],
        a.isEmpty(d._eventListeners) && (d._eventListeners = null,
        delete d._eventListeners))
    }
    ,
    b.removeAllEventListeners = function(b) {
        var c = this;
        c._eventListeners && (b ? a.each(c._eventListeners[b], function(a) {
            c.removeEventListener(b, a)
        }) : a.each(c._eventListeners, function(a, b) {
            c.removeAllEventListeners(b)
        }))
    }
    ,
    b.off = function(a, b) {
        var c = this;
        b ? c.removeEventListener(a, b) : c.removeAllEventListeners(a)
    }
    ,
    b.hasEventListener = function(b, c) {
        var d = this;
        return d._eventListeners ? !!a.find(d._eventListeners[b], function(a) {
            return !c || a === c
        }) : !1
    }
    ,
    b.once = function(a, b) {
        var c = this;
        b._once = function() {
            c.removeEventListener(a, b._once),
            b.apply(c, arguments)
        }
        ,
        c.addEventListener(a, b._once)
    }
    ,
    b.trigger = function(b) {
        var c = this;
        c._eventListeners && a.each(c._eventListeners[b], function(a) {
            a.call(c)
        })
    }
    ,
    b
});
define('util/function', ["jquery"], function(a) {
    return {
        returnTrue: function() {
            return !0
        },
        returnFalse: function() {
            return !1
        },
        returnEmptyObject: function() {
            return {}
        },
        returnResolvedPromise: function() {
            return (new a.Deferred).resolve().promise()
        },
        returnRejectedPromise: function() {
            return (new a.Deferred).reject().promise()
        }
    }
});
define('util/jquery.whenall', ["jquery", "underscore"], function(a, b) {
    return a.extend({
        whenAll: function() {
            return a.when.apply(null, b.map(arguments, function(b) {
                var c = new a.Deferred;
                return b.always(function() {
                    c.resolve()
                }),
                c
            }))
        }
    }),
    a
});
define('lib/sound-player', ["jquery", "underscore", "lib/sound-util", "lib/shellapp", "util/event", "util/function", "util/jquery.whenall"], function(a, b, c, d, e, f) {
    var g = "silent"
      , h = 5e3
      , i = 4
      , j = 5
      , k = /^\^?bgm/
      , l = /^\^?se/
      , m = /^\^?voice/
      , n = "bgm/"
      , o = "se/"
      , p = "voice/"
      , q = function() {
        return window.Game.ua && "Android" === window.Game.ua.os.name
    }()
      , r = function() {
        return window.Game.ua.ua.indexOf("SH-04H Build/SB247") >= 0
    }()
      , s = function() {
        return window.Game.ua && "iOS" === window.Game.ua.os.name
    }()
      , t = {};
    (function() {
        var a = this;
        a.ready = f.returnFalse,
        a.destroy = f.returnFalse,
        a.getInstances = f.returnEmptyObject,
        a.load = f.returnRejectedPromise,
        a.play = f.returnRejectedPromise,
        a.repeat = f.returnRejectedPromise,
        a.stop = f.returnFalse,
        a.isPlaying = f.returnFalse,
        a.setPlaying = f.returnFalse,
        a.mute = f.returnFalse,
        a.unmute = f.returnFalse,
        a.setVolume = f.returnFalse,
        a.replay = f.returnFalse,
        a.once = f.returnFalse,
        a.requiresUserAction = f.returnFalse
    }
    ).call(t);
    var u = b.clone(t)
      , v = function(d) {
        d._instances = {},
        d._loadedSources = {},
        d._bindingCallbackList = {};
        var e = new a.Deferred;
        return d._setup ? e.resolve() : (d._setup = !0,
        function(g) {
            if (g.HTMLAudioPlugin.MAX_INSTANCES = i,
            g.Sound.initializeDefaultPlugins()) {
                var h = new g.LoadQueue(!1);
                h.installPlugin(g.Sound),
                h.setMaxConnections(j),
                d.ready = function() {
                    return g.Sound.isReady()
                }
                ,
                d.destroy = function(a) {
                    d._instances[a] && (delete d._instances[a],
                    g.Sound.removeSound(a)),
                    d._loadedSources[a] && delete d._loadedSources[a]
                }
                ,
                d.getInstances = function() {
                    return d._instances
                }
                ,
                d.load = function(b, c) {
                    c = c || {};
                    var e;
                    if (c.src)
                        e = c.src;
                    else {
                        var f = c.dir ? c.dir + "/" : ""
                          , i = c.file || b;
                        e = f + i
                    }
                    if (d._loadedSources[b] === e)
                        return (new a.Deferred).resolve().promise();
                    var j = new a.Deferred
                      , k = function(a) {
                        a.item.id === b && a.item.src === e && (m(),
                        d._loadedSources[b] = e,
                        j.resolve())
                    }
                      , l = function(a) {
                        a.item.id === b && a.item.src === e && (m(),
                        delete d._loadedSources[b],
                        j.reject())
                    }
                      , m = function() {
                        h.removeEventListener("fileload", k),
                        h.removeEventListener("error", l)
                    };
                    h.addEventListener("fileload", k),
                    h.addEventListener("error", l);
                    var n = h._numItems;
                    return h.loadFile({
                        id: b,
                        src: e,
                        type: g.LoadQueue.SOUND,
                        cache: !0
                    }),
                    n == h._numItems && (m(),
                    delete d._loadedSources[b],
                    j.reject()),
                    j.promise()
                }
                ,
                d.play = function(a, c) {
                    return d.load(a, c).done(function() {
                        var e = d._instances[a] = d._instances[a] || g.Sound.createInstance(a)
                          , f = c.interrupt || g.Sound.INTERRUPT_NONE;
                        b.each(d._bindingCallbackList[a], function(b, c) {
                            d.once(a, c, function() {
                                b(e)
                            })
                        }),
                        delete d._bindingCallbackList[a];
                        var h = c.delay || 0
                          , i = c.offset || 0
                          , j = b.isNumber(c.loop) ? c.loop : c.loop ? -1 : 0
                          , k = c.volume;
                        e.play(f, h, i, j, k)
                    })
                }
                ,
                d.repeat = function(a, b) {
                    return d.load(a, b).done(function() {
                        var c = d._instances[a] = d._instances[a] || g.Sound.createInstance(a);
                        if (c) {
                            var e = b.interrupt || g.Sound.INTERRUPT_NONE
                              , f = b.delay || 0
                              , h = b.offset || 0
                              , i = -1
                              , j = b.volume;
                            c.play(e, f, h, i, j)
                        }
                    })
                }
                ,
                d.stop = function(a) {
                    var b = d._instances[a];
                    b && b.stop()
                }
                ,
                d.isPlaying = function(a) {
                    var b = d._instances[a];
                    return b && b.playState === g.Sound.PLAY_SUCCEEDED
                }
                ,
                d.mute = function(a, b) {
                    var c = d._instances[a];
                    c && c.setMute(!0)
                }
                ,
                d.unmute = function(a, b) {
                    var c = d._instances[a];
                    c && c.setMute(!1)
                }
                ,
                d.setVolume = function(a, c, e) {
                    if (!b.isUndefined(c)) {
                        var f = d._instances[a];
                        f && f.setVolume(c)
                    }
                }
                ,
                d.pause = function(a) {
                    var b = d._instances[a];
                    b && b.pause()
                }
                ,
                d.resume = function(a) {
                    var b = d._instances[a];
                    b && b.resume()
                }
                ,
                d.duration = function(a) {
                    var b = d._instances[a];
                    return b ? 1 == window.Game.setting.cjs_mode ? 1e3 * b.Nb.buffer.duration : b.getDuration() : void 0
                }
                ,
                d.position = function(a) {
                    var b = d._instances[a];
                    return b ? 1 == window.Game.setting.cjs_mode ? (new Date).getTime() - window.sTime : b.getPosition() : void 0
                }
                ,
                d.replay = function(a) {
                    var b = d._instances[a];
                    b && (0 != b._remainingLoops ? b.play(g.Sound.INTERRUPT_NONE, 0, 0, -1) : b.play())
                }
                ,
                d.once = function(a, b, c) {
                    var e = d._instances[a];
                    if (e)
                        c._once = function() {
                            e.removeEventListener(b, c._once),
                            c.apply(e, arguments)
                        }
                        ,
                        e.addEventListener(b, c._once);
                    else {
                        d._bindingCallbackList[a] = d._bindingCallbackList[a] || {};
                        var f = function(d) {
                            c.apply(d, [a, b, c])
                        };
                        d._bindingCallbackList[a][b] = f
                    }
                }
                ,
                d.requiresUserAction = f.returnFalse,
                c.isSupportedWebAudio() ? (g.WebAudioPlugin.playEmptySound(),
                setTimeout(function() {
                    (null == g.WebAudioPlugin.context || 0 === g.WebAudioPlugin.context.currentTime) && (d.requiresUserAction = f.returnTrue,
                    g.Sound.activePlugin instanceof g.WebAudioPlugin && window.addEventListener("touchstart", function a() {
                        null != g.WebAudioPlugin.context && (window.removeEventListener("touchstart", a, !0),
                        g.WebAudioPlugin.playEmptySound())
                    }, !0)),
                    e.resolve()
                }, 100)) : e.resolve()
            }
        }(window.createjs)),
        e.promise()
    }
      , w = function(b) {
        var c = new a.Deferred;
        b.ready = f.returnTrue,
        b.setup = f.returnResolvedPromise;
        var e = (b.load,
        b.play)
          , g = b.repeat
          , h = b.stop
          , i = b.pause
          , j = b.resume
          , n = b.setVolume
          , o = b.isPlaying
          , p = b.setPlaying;
        if (q) {
            var r = {};
            b.isPlaying = function(a) {
                return a.match(k) ? r.bgm : a.match(l) ? r.se : a.match(m) ? r.voice : void o.call(b, a)
            }
            ,
            b.setPlaying = function(a, c) {
                a.match(k) ? r.bgm = c : a.match(l) ? r.se = c : a.match(m) ? r.voice = c : p.call(b, a, c)
            }
            ,
            b.load = function(b, c) {
                return b.match(m) && d.loadVoice(b),
                (new a.Deferred).resolve().promise()
            }
            ,
            b.play = function(c, f) {
                var g = function() {
                    return r.se = !0,
                    d.playSoundEffect(c),
                    (new a.Deferred).resolve().promise()
                };
                return "se" === f.alias && c.match(m) ? g() : c.match(k) ? (r.bgm = !0,
                d.playMusic(c),
                (new a.Deferred).resolve().promise()) : c.match(l) ? g() : c.match(m) ? (r.voice = !0,
                d.playVoice(c, f && f.force),
                (new a.Deferred).resolve().promise()) : (d.pauseMusic(),
                e.call(b, c, f).done(function() {
                    b.once(c, "complete", function() {
                        d.resumeMusic()
                    })
                }))
            }
            ,
            b.repeat = function(c, e) {
                return c.match(k) ? (r.bgm = !0,
                d.playMusic(c, 0, -1),
                (new a.Deferred).resolve().promise()) : c.match(l) ? (r.se = !0,
                d.playSoundEffect(c),
                (new a.Deferred).resolve().promise()) : c.match(m) ? (r.voice = !0,
                d.playVoice(c, e && e.force),
                (new a.Deferred).resolve().promise()) : (d.pauseMusic(),
                g.call(b, c, e).done(function() {
                    b.once(c, "complete", function() {
                        d.resumeMusic()
                    })
                }))
            }
            ,
            b.stop = function(a, c) {
                a.match(k) ? (r.bgm = !1,
                d.stopMusic()) : a.match(l) ? r.se = !1 : a.match(m) ? (r.voice = !1,
                d.stopVoice()) : (d.resumeMusic(),
                h.call(b, a, c))
            }
            ,
            b.pause = function(a, c) {
                a.match(k) ? (r.bgm = !1,
                d.pauseMusic()) : a.match(l) ? r.se = !1 : a.match(m) ? (r.voice = !1,
                d.pauseVoice()) : (d.resumeMusic(),
                i.call(b, a, c))
            }
            ,
            b.resume = function(a, c) {
                a.match(k) ? (r.bgm = !1,
                d.resumeMusic()) : a.match(l) ? r.se = !1 : a.match(m) ? (r.voice = !1,
                d.resumeVoice()) : (d.pauseMusic(),
                j.call(b, a, c))
            }
            ,
            b.setVolume = function(a, c) {
                a.match(k) ? d.setMusicVolume(c) : a.match(l) ? d.setSEVolume(c) : a.match(m) ? d.setVoiceVolume(c) : n.call(b, a, c)
            }
        } else
            s && (b.setVolume = function(a, c) {
                a.match(k) ? d.setMusicVolume(c) : a.match(l) ? d.setSEVolume(c) : a.match(m) && d.setVoiceVolume(c),
                n.call(b, a, c)
            }
            );
        return c.promise()
    };
    (function() {
        var a = this;
        a.setup = b.partial(v, a)
    }
    ).call(u),
    r || !q && !s || (d.isShellApp() ? !function(a) {
        var c = a.setup;
        a.setup = function() {
            return c.call(a).always(b.partial(w, a))
        }
    }(u) : d.setOnShellAppReady(function() {
        !function(a) {
            var c = a.setup;
            a.setup = function() {
                return c.call(a).always(b.partial(w, a))
            }
        }(u)
    }));
    var x = {};
    b.extend(x, e),
    function() {
        var e = this;
        e._directory = {},
        e._alias = {},
        e._masterVolume = 1,
        e._localVolume = {},
        e._disabled = {},
        e._muted = {},
        e._sounds = {},
        e._reservedSounds = {},
        e._errorSounds = {},
        e._destroyTimer = {},
        e._isPlayed = {},
        e._isSkipped = {},
        e._destroy = function(a) {
            u.destroy(a),
            clearTimeout(e._destroyTimer[a]),
            delete e._destroyTimer[a],
            delete e._sounds[a],
            delete e._reservedSounds[a],
            delete e._errorSounds[a],
            delete e._isPlayed[a]
        }
        ,
        e._registerDestroy = function(a) {
            clearTimeout(e._destroyTimer[a]),
            e._destroyTimer[a] = setTimeout(function() {
                e._destroy(a)
            }, h)
        }
        ,
        e._unregisterDestroy = function(a) {
            clearTimeout(e._destroyTimer[a]),
            delete e._destroyTimer[a]
        }
        ,
        e._each = function(a, c) {
            b.each(u.getInstances(), function(b, d) {
                d.match(a) && c(d, b)
            })
        }
        ,
        e._isPlayable = function(a) {
            return !a || a == g || e.isDisabled(a) ? !1 : !0
        }
        ,
        e._handleComplete = function() {
            e.isLoaded() && e.trigger("complete")
        }
        ,
        e._loadAndCall = function(c, f) {
            f = f || {},
            f.dir = f.dir || e.getDirectory(c);
            var g = new a.Deferred;
            if (!d.isShellApp()) {
                if (b.has(e._sounds, c))
                    return g.resolve().promise();
                if (b.has(e._errorSounds, c))
                    return g.reject().promise()
            }
            return e.load(c, f)
        }
        ,
        e._setGain = function(a, b) {
            u.setVolume(a, e.getLocalVolume(a), b),
            e.isMuted(a) ? u.mute(a, b) : u.unmute(a, b)
        }
        ,
        e.isSupportedHTMLAudio = function() {
            return c.isSupportedHTMLAudio()
        }
        ,
        e.isSupportedWebAudio = function() {
            return c.isSupportedWebAudio()
        }
        ,
        e.isSupportedNativeAudio = function() {
            return q && d.isShellApp()
        }
        ,
        e.isSupported = function() {
            return e.isSupportedHTMLAudio() || e.isSupportedWebAudio() || e.isSupportedNativeAudio()
        }
        ,
        e.setup = function(c) {
            var d = new a.Deferred;
            return e._setup ? d.resolve() : (e._setup = !0,
            u.setup().done(function() {
                u.requiresUserAction() && (c ? b.each(u.getInstances(), function(a, b) {
                    e.isPlayed(b) && u.replay(b)
                }) : window.addEventListener("touchstart", function a() {
                    window.removeEventListener("touchstart", a, !0),
                    b.each(u.getInstances(), function(a, b) {
                        e.isPlayed(b) && u.replay(b)
                    })
                }, !0)),
                d.resolve()
            }).fail(function() {
                d.reject()
            })),
            d.promise()
        }
        ,
        e.destroy = function(a) {
            a = e._alias[a] || a || "",
            e._each(a, function(a, b) {
                u.stop(a),
                e._destroy(a)
            }),
            u.stop(a)
        }
        ,
        e.registerDestroy = function(a) {
            a = e._alias[a] || a || "",
            e._each(a, function(a, b) {
                u.stop(a),
                e._registerDestroy(a)
            }),
            u.stop(a)
        }
        ,
        e.unregisterDestroy = function(a) {
            a = e._alias[a] || a || "",
            e._each(a, function(a) {
                e._unregisterDestroy(a)
            })
        }
        ,
        e.setDirectory = function(a, b) {
            b || (b = a,
            a = ""),
            a = e._alias[a] || a || "",
            e._directory[a] = b,
            e.destroy(a)
        }
        ,
        e.getDirectory = function(a) {
            a = e._alias[a] || a || "";
            var c = b.find(b.keys(e._directory), function(b) {
                return a.match(b)
            });
            return e._directory[c] || ""
        }
        ,
        e.enable = function(a) {
            a = e._alias[a] || a || "",
            delete e._disabled[a],
            e.unregisterDestroy(a),
            d.isShellApp() && (e.isEnabled(n) && d.setMusicMute(0),
            e.isEnabled(o) && d.setSEMute(0),
            e.isEnabled(p) && d.setVoiceMute(0))
        }
        ,
        e.disable = function(a) {
            a = e._alias[a] || a || "",
            e._disabled[a] = !0,
            e.registerDestroy(a),
            d.isShellApp() && (a ? a.match(k) ? d.setMusicMute(1) : a.match(l) ? d.setSEMute(1) : a.match(m) && d.setVoiceMute(1) : d.setMute(1))
        }
        ,
        e.isEnabled = function(a) {
            return !e.isDisabled(a)
        }
        ,
        e.isDisabled = function(a) {
            return a = e._alias[a] || a || "",
            b.some(e._disabled, function(b, c) {
                return a.match(c) && b
            })
        }
        ,
        e.skip = function(a) {
            a = e._alias[a] || a || "",
            e._isSkipped[a] = !0
        }
        ,
        e.unskip = function(a) {
            a = e._alias[a] || a || "",
            delete e._isSkipped[a]
        }
        ,
        e.isSkipped = function(a) {
            return a = e._alias[a] || a || "",
            b.some(e._isSkipped, function(b, c) {
                return a.match(c) && b
            })
        }
        ,
        e.isMuted = function(a) {
            return a = e._alias[a] || a || "",
            b.some(e._muted, function(b, c) {
                return a.match(c) && b
            })
        }
        ,
        e.mute = function(a) {
            a = e._alias[a] || a || "",
            e._muted[a] = !0,
            e._each(a, function(a, b) {
                u.mute(a)
            }),
            u.mute(a)
        }
        ,
        e.unmute = function(a) {
            a = e._alias[a] || a || "",
            delete e._muted[a],
            delete e._muted[""],
            e._each(a, function(a, b) {
                u.unmute(a)
            }),
            u.unmute(a)
        }
        ,
        e.getVolume = function(a) {
            a = e._alias[a] || a || "";
            var b = e.getMasterVolume();
            return a ? b * e.getLocalVolume(a) : b
        }
        ,
        e.setVolume = function(a, c) {
            b.isUndefined(c) ? (c = a,
            e.setMasterVolume(c)) : e.setLocalVolume(a, c)
        }
        ,
        e.getMasterVolume = function() {
            return e._masterVolume
        }
        ,
        e.setMasterVolume = function(a) {
            b.isUndefined(a) || (e._masterVolume = a)
        }
        ,
        e.getLocalVolume = function(a) {
            a = e._alias[a] || a || "";
            var c = b.find(b.keys(e._localVolume), function(b) {
                return a.match(b)
            });
            return c ? e._localVolume[c] : 1
        }
        ,
        e.setLocalVolume = function(a, c) {
            b.isUndefined(c) || (a = e._alias[a] || a || "",
            e._localVolume[a] = c,
            e._each(a, function(a, b) {
                u.setVolume(a, c)
            }),
            u.setVolume(a, c))
        }
        ,
        e.hasAlias = function(a) {
            return b.has(e._alias, a)
        }
        ,
        e.getPlayingId = function(a) {
            return e.isPlaying(a) ? e._alias[a] : ""
        }
        ,
        e.setAlias = function(a, b) {
            e._alias[b] = a
        }
        ,
        e.unsetAlias = function(a) {
            e._alias[a] = null,
            delete e._alias[a]
        }
        ,
        e.setAliasAndPlay = function(a, b, c) {
            e._isPlayable(a) || e.stop(b);
            var d = e._alias[b];
            if (a) {
                e.setAlias(a, b);
                var f;
                f = d == a && a.match(l) ? e.play(b, c) : e.stopAndPlay(d, a, c)
            }
        }
        ,
        e.setAliasAndRepeat = function(a, b, c) {
            e._isPlayable(a) || e.stop(b);
            var d = e._alias[b];
            if (a) {
                e.setAlias(a, b);
                var f;
                d != a ? f = e.stopAndRepeat(d, a, c) : e.isPlaying(b) || (f = e.repeat(b, c))
            }
        }
        ,
        e.isPlayed = function(a) {
            return a = e._alias[a] || a || "",
            a && e._isPlayed[a]
        }
        ,
        e.isPlaying = function(a) {
            return a = e._alias[a] || a || "",
            a && e._sounds[a] && u.isPlaying(a)
        }
        ,
        e.setPlaying = function(a, b) {
            return a = e._alias[a] || a || "",
            a && u.setPlaying(a, b)
        }
        ,
        e.load = function(b, c) {
            return e.isSkipped(b) ? (new a.Deferred).resolve().promise() : c.force || e._isPlayable(b) ? e._reservedSounds[b] || e._sounds[b] || e._errorSounds[b] ? (new a.Deferred).resolve().promise() : (e._reservedSounds[b] = b,
            u.load(b, c).done(function() {
                e._sounds[b] = b,
                delete e._reservedSounds[b],
                delete e._errorSounds[b],
                c.ignoreComplete || e._handleComplete()
            }).fail(function() {
                e._errorSounds[b] = b,
                delete e._reservedSounds[b],
                c.ignoreComplete || e._handleComplete()
            })) : (new a.Deferred).resolve().promise()
        }
        ,
        b.each(["play", "repeat"], function(a) {
            e[a] = function(b, c) {
                return c = c || {},
                b = e._alias[b] || b || "",
                e.isSkipped(b) || !c.force && !e._isPlayable(b) ? void 0 : (null == c.volume && (c.volume = e.getLocalVolume(b)),
                e._isPlayed[b] = !0,
                e._loadAndCall(b, c).done(function() {
                    e._isPlayed[b] && u[a](b, c).done(function() {
                        e._setGain(b, c)
                    })
                }))
            }
        }),
        b.each(["stop"], function(a) {
            e[a] = function(b, c) {
                b = e._alias[b] || b || "",
                e._isPlayed[b] = !1,
                u[a](b, c)
            }
        }),
        e.resume = function(a, b) {
            if (b = b || {},
            a = e._alias[a] || a || "") {
                if (e.isSkipped(a))
                    return;
                if (!b.force && !e._isPlayable(a))
                    return;
                return null == b.volume && (b.volume = e.getLocalVolume(a)),
                e._isPlayed[a] = !0,
                e._loadAndCall(a, b).done(function() {
                    e._isPlayed[a] && (u.resume(a, b),
                    e._setGain(a, b))
                })
            }
            e._each("", function(a) {
                a && e._isPlayed[a] && e.resume(a, b)
            })
        }
        ,
        e.pause = function(a, b) {
            a = e._alias[a] || a || "",
            a ? u.pause(a, b) : e._each("", function(a) {
                a && e.pause(a)
            })
        }
        ,
        e.duration = function(a) {
            return u.duration(a)
        }
        ,
        e.position = function(a) {
            return u.position(a)
        }
        ,
        e.stopAndPlay = function(a, b, c) {
            return a = e._alias[a] || a || "",
            b = e._alias[b] || b || "",
            c = c || {},
            e.isSkipped(b) ? void 0 : c.force || e._isPlayable(b) ? (e._isPlayed[a] = !1,
            e._isPlayed[b] = !0,
            e._loadAndCall(b, c).always(function() {
                a !== b && e._isPlayed[a] || u.stop(a, c)
            }).done(function() {
                e._isPlayed[b] && (null == c.volume && (c.volume = e.getLocalVolume(b)),
                u.play(b, c).done(function() {
                    e._setGain(b, c)
                }))
            })) : void e.stop(a, c)
        }
        ,
        e.stopAndRepeat = function(a, b, c) {
            return a = e._alias[a] || a || "",
            b = e._alias[b] || b || "",
            c = c || {},
            e.isSkipped(b) ? void 0 : c.force || e._isPlayable(b) ? (e._isPlayed[a] = !1,
            e._isPlayed[b] = !0,
            e._loadAndCall(b, c).always(function() {
                a === b && e._isPlayed[a] || u.stop(a, c)
            }).done(function() {
                e._isPlayed[b] && (null == c.volume && (c.volume = e.getLocalVolume(b)),
                u.repeat(b, c).done(function() {
                    e._setGain(b, c)
                }))
            })) : void e.stop(a, c)
        }
        ,
        e.loadManifest = function(c, f) {
            if (!u.ready())
                return e.trigger("complete"),
                (new a.Deferred).reject();
            f = f || {};
            var g = b.filter(c, function(a) {
                var b = f.force || !e.isDisabled(a.id)
                  , c = d.isShellApp() || !e._sounds[a.id] && !e._reservedSounds[a.id];
                return a.id && a.src && c && b
            });
            return b.isEmpty(g) ? (e._handleComplete(),
            (new a.Deferred).resolve().promise()) : a.whenAll.apply(null, b.map(c, function(a) {
                return f.dir = f.dir || e.getDirectory(a.id),
                f.ignoreComplete = !0,
                e.load(a.id, b.defaults(a, f))
            })).always(function() {
                e._handleComplete()
            })
        }
        ,
        e.getPath = function(a) {
            var b = e.getDirectory(a);
            return (b ? b + "/" : "") + a
        }
        ,
        e.loadFile = function(a, b) {
            return e.loadFiles([a], b)
        }
        ,
        e.loadFiles = function(a, c) {
            var d = b.map(b.uniq(b.filter(a, function(a) {
                return a && a !== g
            })), function(a) {
                return {
                    id: a,
                    src: e.getPath(a)
                }
            });
            return e.loadManifest(d, c)
        }
        ,
        e.isLoaded = function(a) {
            if (a = e._alias[a] || a || "")
                return b.has(e._sounds, a) || !e._isPlayable(a);
            var c = b.isEmpty(b.difference(b.keys(e._reservedSounds), b.keys(e._sounds)));
            return c
        }
        ,
        e.clearInstances = function(a) {
            a = a || {};
            var c = a.exclude || "";
            b.each(u.getInstances(), function(a, b) {
                u.isPlaying(b) || c && b.match(c) || e._destroy(b)
            })
        }
        ,
        e.once = function(a, b, c) {
            return u.once(a, b, c)
        }
    }
    .call(x),
    x.isSupportedWebAudio() || x.setup(!1);
    var y, z;
    return document.hidden ? (y = "hidden",
    z = "visibilitychange") : document.mozHidden ? (y = "mozHidden",
    z = "mozvisibilitychange") : document.msHidden ? (y = "msHidden",
    z = "msvisibilitychange") : document.webkitHidden && (y = "webkitHidden",
    z = "webkitvisibilitychange"),
    y && z && document.addEventListener(z, function() {
        document[y] ? x.mute() : x.unmute()
    }),
    b.each(["blur", "pagehide", "unload", "beforeunload"], function(a) {
        window.addEventListener(a, function() {
            x.mute()
        })
    }),
    b.each(["focus", "pageshow"], function(a) {
        window.addEventListener(a, function() {
            x.unmute()
        })
    }),
    x
});
define('lib/sound', ["jquery", "underscore", "./sound-player"], function(a, b, c) {
    function d(a) {
        b.each(c, function(b, c) {
            g[c] = function() {
                a.push([c, arguments])
            }
        })
    }
    function e(a) {
        b.each(a, function(a) {
            var b = a[0]
              , c = a[1];
            g[b].apply(g, c)
        })
    }
    function f(a) {
        b.each(c, function(b, c) {
            g[c] = function() {
                return a[c].apply(a, arguments)
            }
        })
    }
    var g = {};
    return window !== window.parent ? window.parent.SoundPlayer ? window.parent.readySoundPlayer ? f(window.parent.SoundPlayer) : (window.parent.loadingSoundPlayer = window.parent.loadingSoundPlayer || new a.Deferred,
    d(window.parent.pendingSoundPlayer = []),
    window.parent.loadingSoundPlayer.done(function() {
        f(window.parent.SoundPlayer),
        e(window.parent.pendingSoundPlayer),
        delete window.parent.pendingSoundPlayer
    })) : f(c) : (f(c),
    (window.loadingSoundPlayer = window.loadingSoundPlayer || new a.Deferred).resolve(),
    window.readySoundPlayer = !0),
    g
});
define('util/navigate', ["underscore", "backbone"], function(a, b) {
    var c = function(b) {
        var c = 0 === b.indexOf("?") ? b.slice(1) : b
          , d = c ? c.split("&") : [];
        return a.object(a.map(d, function(a) {
            return a.split("=")
        }))
    }
      , d = function(c, d) {
        var e = window.location;
        d.refresh ? (b.history.stop(),
        e.hash = c,
        e.reload()) : b.History.started ? (d = d || {},
        a.has(d, "trigger") || (d.trigger = !0),
        b.history.navigate(c, d)) : e.hash = c
    }
      , e = function(a, c) {
        var d = window.location;
        c.refresh ? (b.history.stop(),
        d.href = a,
        d.reload()) : d.href = a
    }
      , f = function(a) {
        if (window.Game && window.Game.ajaxConnecting) {
            var b = $(document);
            b.on("ajaxStop", function c() {
                b.off("ajaxStop", c),
                a()
            })
        } else
            a()
    }
      , g = function(b, c) {
        c = c || {};
        var e = a.partial(d, b, c);
        c.sync ? f(e) : e()
    }
      , h = function(b, c) {
        c = c || {};
        var d = a.partial(e, b, c);
        c.sync ? f(d) : d()
    };
    return {
        parseQuery: c,
        hash: g,
        href: h
    }
});
define('util/ajax', ["jquery", "underscore"], function(a, b) {
    var c = function() {
        function a(a) {
            this.ajaxLimits = {},
            this.startNum = a.length - 1
        }
        var b = 1
          , c = 0;
        return a.prototype.add = function(a) {
            this.check(a) || (this.ajaxLimits[a] = b)
        }
        ,
        a.prototype.remove = function(a) {
            this.check(a) && (this.ajaxLimits[a] = c)
        }
        ,
        a.prototype.check = function(a) {
            var c = this.ajaxLimits[a];
            return b === c ? !0 : !1
        }
        ,
        a.prototype.getRequestString = function(a) {
            var b = a.indexOf("?");
            return 0 > b && (b = a.length),
            a.substring(this.startNum, b)
        }
        ,
        new a(Game.baseUri)
    }()
      , d = function() {
        this.initialize.apply(this, arguments)
    };
    !function(a) {
        a.initialize = function() {
            return this._pool = {},
            this._index = 0,
            this
        }
        ,
        a.add = function(a) {
            var b = this._pool
              , d = this._index++;
            a._index = d,
            b[d] = a,
            c.add(a._requestKey)
        }
        ,
        a.remove = function(a) {
            a ? (c.remove(a._requestKey),
            delete this._pool[a._index]) : this._pool = {}
        }
        ,
        a.abort = function(a) {
            a ? (a._isManuallyAborted = !0,
            a.abort(),
            this.remove(a)) : (b.each(this._pool, function(a) {
                c.remove(a._requestKey),
                a._isManuallyAborted = !0,
                a.abort()
            }),
            this.remove())
        }
    }(d.prototype);
    var e = function() {
        return new d
    }
      , f = e()
      , g = function(a) {
        f.add(a)
    }
      , h = function(a) {
        f.remove(a)
    }
      , i = function(a) {
        f.abort(a)
    }
      , j = function(a, b) {
        return a._requestKey = c.getRequestString(b),
        c.check(a._requestKey)
    }
      , k = function(a) {
        return a._isManuallyAborted && "abort" === a.statusText
    };
    return {
        createXHRPool: e,
        addXHR: g,
        removeXHR: h,
        abortXHR: i,
        isManuallyAbortedXHR: k,
        controlXHR: j
    }
});
define('util/local-storage', ["underscore"], function(a) {
    var b = !1
      , c = "_"
      , d = "_"
      , e = window.localStorage
      , f = {}
      , g = function() {};
    if (f.isSupported = function() {
        if (!e)
            return !1;
        try {
            return e.setItem(c, d),
            e.getItem(c) ? (e.removeItem(c),
            !0) : !1
        } catch (a) {
            return !1
        }
    }
    ,
    f.isSupported()) {
        if (b) {
            var h = function(a) {
                if (!a)
                    return a;
                for (var b = "", c = 0, d = a.length; d > c; c += 2)
                    b += String.fromCharCode((255 & a.charCodeAt(c)) << 8 | 255 & a.charCodeAt(c + 1));
                return b
            }
              , i = function(a) {
                if (!a)
                    return a;
                for (var b = "", c = 0, d = a.length; d > c; c++) {
                    var e = a.charCodeAt(c);
                    b += String.fromCharCode(e >>> 8, 255 & e)
                }
                return b
            }
              , j = e.getItem;
            e.getItem = function(a) {
                var b = j.call(e, a);
                return i(b)
            }
            ;
            var k = e.setItem;
            e.setItem = function(a, b) {
                return b = h(b),
                k.call(e, a, b)
            }
        }
        f.get = f.getItem = function(a) {
            return e.getItem(a)
        }
        ,
        f.remove = f.removeItem = function(a) {
            return e.removeItem(a),
            this
        }
        ,
        f.set = f.setItem = function(a, b) {
            try {
                return e.setItem(a, b),
                !0
            } catch (c) {
                return 22 == c.code,
                !1
            }
        }
        ,
        f.clear = function() {
            return e.clear(),
            !0
        }
        ,
        f.getObject = function(a) {
            return JSON.parse(f.get(a))
        }
        ,
        f.setObject = function(a, b) {
            return f.set(a, JSON.stringify(b))
        }
        ,
        f.each = function(a) {
            for (var b = 0, c = e.length; c > b; b++) {
                var d = e.key(b)
                  , f = e.getItem(d);
                a.call(this, f, d)
            }
        }
        ,
        f.map = function(a) {
            for (var b = [], c = 0, d = e.length; d > c; c++) {
                var f = e.key(c)
                  , g = e.getItem(f)
                  , h = a.call(this, g, f);
                b.push(h)
            }
            return b
        }
    } else
        a.each(["get", "remove", "set", "clear", "getObject", "setObject", "each", "map"], function(a) {
            f[a] = function() {
                return g(),
                !1
            }
        });
    var l = 0;
    f.maxBytes = function(b) {
        return a.isUndefined(b) ? l : l = Number(b)
    }
    ;
    var m = "default";
    f.namespace = function(a) {
        return m = a
    }
    ,
    f.contentKey = function(a) {
        return m + "." + a
    }
    ,
    f.checksumKey = function(a) {
        return m + "-checksum." + a
    }
    ,
    f.countKey = function(a) {
        return m + "-count." + a
    }
    ,
    f.timeKey = function(a) {
        return m + "-time." + a
    }
    ,
    f.isContentKey = function(a) {
        return 0 == a.indexOf(m + ".")
    }
    ,
    f.originalKeyOfContent = function(a) {
        return a.slice(m.length + 1)
    }
    ;
    var n = function() {
        var b = f.map(function(a, b) {
            return b
        });
        return a.filter(b, function(a) {
            return f.isContentKey(a)
        })
    }
      , o = function(b) {
        var c = a.sortBy(n(), function(a) {
            var b = f.originalKeyOfContent(a)
              , c = f.getCount(b);
            return Number(c)
        });
        return p(c, b)
    }
      , p = function(a, b) {
        var c, d, e, g, h, i, j = 0;
        for (c = 0,
        e = a.length; e > c && b > j; c++)
            g = a[c],
            h = f.get(g),
            j += h.length;
        if (b > j)
            return !1;
        for (d = 0; c > d; d++)
            g = a[d],
            i = f.originalKeyOfContent(g),
            f.removeContent(i),
            f.removeChecksum(i),
            f.removeTime(i),
            f.removeCount(i);
        return !0
    }
      , q = function(a) {
        return o(a)
    };
    return a.each(["get", "set", "remove"], function(a) {
        f[a + "Checksum"] = function(b, c) {
            return f[a](f.checksumKey(b), c)
        }
        ,
        f[a + "Time"] = function(b, c) {
            return f[a](f.timeKey(b), c)
        }
        ,
        f[a + "Count"] = function(b, c) {
            return f[a](f.countKey(b), c)
        }
    }),
    f.getContent = function(a) {
        return f.updateTime(a),
        f.updateCount(a),
        i(f.get(f.contentKey(a)))
    }
    ,
    f.hasContent = function(a) {
        return !!f.get(f.contentKey(a))
    }
    ,
    f.setContent = function(a, b) {
        var c = b.length;
        if (l && c > l)
            return !1;
        f.updateTime(a),
        f.updateCount(a);
        var d = h(b);
        return f.set(f.contentKey(a), d) ? !0 : q(c) ? f.set(f.contentKey(a), d) : (f.removeContent(a),
        !1)
    }
    ,
    f.removeContent = function(a) {
        return f.removeChecksum(a),
        f.removeTime(a),
        f.removeCount(a),
        f.remove(f.contentKey(a))
    }
    ,
    f.updateTime = f.updateAccessTime = function(a) {
        return f.setTime(a, (new Date).getTime())
    }
    ,
    f.updateCount = f.updateAccessCount = function(a) {
        var b = Number(f.getCount(a)) || 0;
        return f.setCount(a, b + 1)
    }
    ,
    f.verifyChecksum = function(a, b) {
        return f.hasContent(a) ? f.getChecksum(a) == b : (f.removeChecksum(a),
        f.removeTime(a),
        f.removeCount(a),
        !1)
    }
    ,
    f.clearExpired = function(b) {
        var c = n();
        if (!a.isEmpty(c)) {
            var d = a.map(c, function(a) {
                return f.originalKeyOfContent(a)
            })
              , e = a.sortBy(d, function(a) {
                return f.getTime(a)
            })[0]
              , g = f.getTime(e);
            b > g && f.clear()
        }
    }
    ,
    f
});
define('util/language-message', ["underscore"], function(a) {
    var b = {
        list: null
    };
    return {
        hasMessage: function(c) {
            var d = b.list;
            return a.isNull(d) === !1 && a.isUndefined(d[c]) === !1
        },
        setMessage: function(c, d) {
            a.isNull(b.list) ? b.list = c : a.isNull(c) || a.extend(b.list, c)
        },
        getMessage: function(a, c) {
            "undefined" == typeof c && (c = 1);
            var d = "ja" == Game.lang || 1 == c ? "msg" : "msgs";
            return b.list[a][d] || ""
        },
        clearMessage: function() {
            b.list = null
        },
        replaceMessage: function(b, c, d) {
            "undefined" == typeof d && (d = 1);
            var e = this.getMessage(b, d);
            return a.each(c, function(b, c) {
                e = e.replace(a.isNumber(c) ? "%s" : c, b)
            }),
            e = e.replace(/\\n/g, "\n")
        },
        pluralMessage: function(b, c) {
            "undefined" == typeof c && (c = 1);
            var d;
            if ("ja" == Game.lang || 1 == c)
                return b;
            var e = {
                "^CP$": {
                    replace: "CP",
                    flags: ""
                },
                "^bag of rupies$": {
                    replace: "bags of rupies",
                    flags: ""
                },
                "(knuckles)$": {
                    replace: "$1",
                    flags: "i"
                },
                "^Blade of the Scourged$": {
                    replace: "Blades of the Scourged",
                    flags: ""
                },
                "^Horn of Bahamut$": {
                    replace: "Horns of Bahamut",
                    flags: ""
                },
                "^Salad Tongs$": {
                    replace: "Salad Tongs",
                    flags: ""
                },
                "^Guppies$": {
                    replace: "Guppies",
                    flags: ""
                },
                "^Sky-High Fries$": {
                    replace: "Sky-High Fries",
                    flags: ""
                },
                "^(Slab Memento)$": {
                    replace: "$1s",
                    flags: "i"
                },
                "^Cerulean Stones$": {
                    replace: "Cerulean Stones",
                    flags: ""
                }
            }
              , f = {
                "(s|x|sh|ch|us)$": {
                    replace: "$1es",
                    flags: ""
                },
                "([^aiueo])y$": {
                    replace: "$1ies",
                    flags: ""
                },
                "([^aiueo])o$": {
                    replace: "$1oes",
                    flags: ""
                },
                "([^f]f|fe)$": {
                    replace: "ves",
                    flags: ""
                }
            }
              , g = a.extend(e, f);
            return a.some(g, function(a, c) {
                var e = new RegExp(c,a.flags);
                return b.match(e) ? (d = b.replace(e, a.replace),
                !0) : void 0
            }),
            d || (d = b + "s"),
            d
        }
    }
});
define('lib/mobage-jssdk', ["jquery", "underscore", "util/navigate", "model/token-data", "util/language-message"], function(a, b, c, d, e) {
    function f(c, d, e, f) {
        function g(a) {
            function g(a, b, d) {
                var e = "[JSSDK] response status " + a.status
                  , f = 0 === a.status ? "F" : "B";
                e += " error Type " + f + " random code " + j,
                h.reportError(e, c, null, null, null, function() {
                    d && d(a, b, j)
                })
            }
            var j = ("0000" + b.random(1, 99999)).slice(-5)
              , k = "t=" + (new Date).getTime() + "&uid=" + h.userId + "&code=" + j;
            c += (c.indexOf("?") >= 0 ? "&" : "?") + k;
            var l = new XMLHttpRequest;
            if (l.open("POST", c),
            l.setRequestHeader("Content-Type", "application/json;charset=UTF-8"),
            h.shellAppFlag && (l.setRequestHeader("X-MOBAGE-SHELLAPP", 1),
            a)) {
                var m = a.getVersionName()
                  , n = Number(a.getVersionCode());
                "1.0" === m && n && n > 0 && (m += ".0." + n),
                l.setRequestHeader("X-MOBAGE-SHELLAPP-VERSION", m)
            }
            l.setRequestHeader("X-VERSION", h.version),
            l.onreadystatechange = function() {
                if (4 === l.readyState) {
                    if (200 <= l.status && l.status < 300) {
                        var a = l.response;
                        i.resolve(a),
                        e && e(a)
                    } else {
                        var b = l.statusText;
                        i.reject(b),
                        g(l, b, f)
                    }
                    l.onreadystatechange = new Function
                }
            }
            ,
            l.send(JSON.stringify(d))
        }
        var h = window.Game
          , i = new a.Deferred;
        return h.shellAppFlag ? require(["lib/shellapp"], function(a) {
            g(a)
        }) : g(),
        i.promise()
    }
    function g(a) {
        if (a !== i) {
            var b = 0 === a.indexOf("#") ? a : j;
            c.hash(b, {
                refresh: !0
            })
        }
    }
    var h = "mobage"
      , i = "null"
      , j = "#top"
      , k = "grbl"
      , l = "1"
      , m = !1
      , n = !1
      , o = null
      , p = null
      , q = null
      , r = null
      , s = {}
      , t = {}
      , u = t.callAfterReady = function(a) {
        a && (n ? a() : document.addEventListener("mobageReady", function() {
            n = !0,
            a()
        }))
    }
    ;
    t.requireOnceJSSDKClient = function(a) {
        if (a && !m) {
            m = !0;
            var b = document.createElement("script");
            b.type = "text/javascript",
            b.async = !0,
            b.src = a,
            document.getElementsByTagName("script")[0].parentNode.appendChild(b)
        }
    }
    ,
    t.mobageInit = function(a) {
        return a ? void u(function() {
            if (o !== a.clientId || p !== a.redirectUri) {
                o = a.clientId,
                p = a.redirectUri;
                try {
                    window.mobage.init(a)
                } catch (b) {
                    o = null,
                    p = null
                }
            }
        }) : null
    }
    ,
    t.mobageGetConnectedStatus = function(b, c, d) {
        var e = new a.Deferred;
        return u(function() {
            window.mobage.oauth.getConnectedStatus(b, function(a, b) {
                b ? (e.resolve(b),
                c && c(b)) : (e.reject(a),
                d && d(a))
            })
        }),
        e.promise()
    }
    ;
    var v = t.mobageConnect = function(c, d, e) {
        var f = new a.Deferred;
        return c = b.defaults(c, {
            customTheme: k,
            appearanceVersion: l
        }),
        u(function() {
            window.mobage.oauth.connect(c, function(a, b) {
                a ? (f.reject(a),
                e && e(a)) : (f.resolve(b),
                d && d(b))
            })
        }),
        f.promise()
    }
      , w = t.login = function(a, c, d, e) {
        var h = window.Game
          , i = c && c.response || {}
          , j = {
            code: i.code,
            state: i.state,
            session_state: i.session_state
        }
          , k = a && a.redirectUri || p;
        return b.isUndefined(d) && (d = g),
        b.isUndefined(e) && (e = function(a, b, c) {
            if (h.view)
                h.view.trigger("data_error", [a.status, c]);
            else {
                var d = h.message.connectionError;
                alert(d)
            }
        }
        ),
        f(k, j, d, e)
    }
      , x = t.tryLogin = function(c, d, e, f) {
        b.isUndefined(e) && (e = g);
        var h = new a.Deferred;
        return w(c, d, function(a) {
            "#authentication/failed_empty" === a || "#authentication/failed_exist" === a ? (h.reject(),
            f && f()) : (h.resolve(),
            e && e(a))
        }, function(a, b, c) {
            h.reject(),
            f && f()
        }),
        h.promise()
    }
      , y = (t.singleLogin = function(b, c, d) {
        var e = new a.Deferred;
        return window.ignoreResize = !0,
        v(b, function(a) {
            w(b, a, c, d).done(function(a) {
                e.resolve(a)
            }).fail(function(a) {
                e.reject(a)
            }).always(function() {
                window.ignoreResize = !1;
                var b = a && a.response && a.response.session_state;
                b && B(b)
            })
        }, function(a) {
            e.reject(a)
        }),
        e.promise()
    }
    ,
    t.trySingleLogin = function(b, c, d) {
        var e = new a.Deferred;
        return v(b, function(a) {
            x(b, a, c, d).done(function(a) {
                e.resolve(a)
            }).fail(function(a) {
                e.reject(a)
            }).always(function() {
                var b = a && a.response && a.response.session_state;
                b && B(b)
            })
        }, function(a) {
            e.reject(a)
        }),
        e.promise()
    }
    )
      , z = t.mobageLogout = function(b, c, d) {
        C().done(function() {
            var e = new a.Deferred;
            return u(function() {
                window.mobage.oauth.logout(b, function(a, b) {
                    a ? (e.reject(a),
                    d && d(a)) : (e.resolve(b),
                    c && c(b))
                })
            }),
            e.promise()
        })
    }
      , A = t.logout = function(a, c, d) {
        C().done(function() {
            return b.isUndefined(c) && (c = g),
            b.isUndefined(d) && (d = null),
            f("logout", a, c, d)
        })
    }
    ;
    t.singleLogout = function(b, c, d) {
        var e = new a.Deferred;
        return z(b, function(a) {
            A(b, c, d).done(function(a) {
                e.resolve(a)
            }).fail(function(a) {
                e.reject(a)
            })
        }, function(a) {
            e.reject(a)
        }),
        e.promise()
    }
    ;
    t.mobageSubscribeLogin = function(a, c) {
        b.isUndefined(c) && (c = function(b) {
            y({
                state: a
            })
        }
        ),
        u(function() {
            if (q !== a) {
                q = a;
                var b = "oauth.loginRequired"
                  , d = s[b];
                d && window.mobage.event.unsubscribe(d),
                s[b] = window.mobage.event.subscribe(b, function() {
                    c && c(b)
                })
            }
        })
    }
    ;
    var B = t.mobageSubscribeLogout = function(a, c) {
        b.isUndefined(c) && (c = function(b) {
            A({
                platform: h,
                session_state: a
            })
        }
        ),
        u(function() {
            if (r !== a) {
                r = a;
                var b = "oauth.sessionStateChange"
                  , d = s[b];
                d && window.mobage.event.unsubscribe(d),
                s[b] = window.mobage.event.subscribe(b, a, function(a) {
                    "changed" === a && c && c(b)
                })
            }
        })
    }
      , C = t.checkAbilityToLogout = function() {
        function b(a) {
            a.get("result") ? c.resolve() : (require(["view/popup"], function(a) {
                var b = new a({
                    className: "pop-cannot-logout",
                    title: e.getMessage("logout_error_01"),
                    body: e.getMessage("logout_error_02"),
                    flagBtnClose: 1,
                    flagBtnOk: 0
                });
                b.render().popShow()
            }),
            c.reject())
        }
        var c = a.Deferred();
        if (Game.ua.isMbga()) {
            var f = new (d.extend({
                urlRoot: Game.baseUri + "logout/logout_check"
            }));
            return f.stopListening(f, "sync"),
            f.listenToOnce(f, "sync", b),
            f.fetch(),
            c.promise()
        }
        return c.resolve().promise()
    }
    ;
    return t
});
define('model/data', ["underscore", "backbone", "util/ajax", "lib/shellapp", "util/local-storage", "util/language-message", "lib/mobage-jssdk"], function(a, b, c, d, e, f, g) {
    var h = []
      , i = !1
      , j = b.Model.extend({
        initialize: function() {
            this.listenTo(this, "error", this.error),
            this.error = this.getErrorStorageValue()
        },
        parse: function(c) {
            function e(a) {
                i = !1;
                var c = new (b.Model.extend({
                    urlRoot: Game.baseUri + "authentication/greejs"
                }));
                c.set({
                    id_token: a.id_token
                }),
                c.save(null, {
                    success: function() {
                        window.location.reload()
                    },
                    error: function() {
                        location.href = Game.baseUri + "#error"
                    }
                })
            }
            function j(a, b) {
                a && e(a, b),
                b && window.location.reload()
            }
            if (c) {
                var k = c.local_notification;
                d.isShellApp() && !a.isEmpty(k) && d.setLocalNotification(k);
                var l = c.redirect;
                l && a.isString(l) && (Game.view.stopListening(this),
                0 === c.redirect.indexOf("#") ? window.location.hash = l.slice(1) : window.location.href = l,
                c.refresh && window.location.reload());
                var m = c.auth_status
                  , n = window.clientData;
                if ("require_auth" === m)
                    if (Game.ua.isMbga()) {
                        if (n && n.state) {
                            var o = a.clone(n.state);
                            h.push(c),
                            g.mobageGetConnectedStatus({
                                state: o
                            }).done(function(b) {
                                var d = b;
                                n.state = c.state,
                                d.response.state = n.state,
                                g.login(n, d, function() {
                                    h.shift(),
                                    a.isEmpty(h) && window.location.reload()
                                })
                            }).fail(function(a) {
                                window.location.reload()
                            })
                        }
                    } else if (Game.ua.isGreeLogin())
                        i || (i = !0,
                        GREE.oauth.getConnectedStatus(j));
                    else if (Game.ua.isDMM()) {
                        if (!i) {
                            i = !0;
                            var p = new (b.Model.extend({
                                urlRoot: Game.baseUri + "authentication/dmm_already_logged_game_login"
                            }));
                            p.save(null, {
                                success: function() {
                                    window.location.reload()
                                },
                                error: function() {
                                    location.href = Game.baseUri + "#error"
                                }
                            })
                        }
                    } else
                        window.location.hash = "#top";
                a.isUndefined(Game.treasure) === !1 && a.isUndefined(c.display_list) === !1 && Game.treasure.updateList(c.display_list);
                var q = c.popup;
                if (!a.isEmpty(q))
                    return Game.view.trigger("loadEnd"),
                    Game.view.trigger("popup_error", {
                        data: q
                    }),
                    Game.view.stopListening(this),
                    this.off(),
                    {
                        errorPopFlag: !0
                    };
                var r = c.option;
                if (r) {
                    var s = r.iframes;
                    if (!a.isEmpty(s)) {
                        var t = $("body");
                        a.each(s, function(a) {
                            t.append(a)
                        })
                    }
                    var u = r.analytics_conversions;
                    a.isEmpty(u) || d.isShellApp() && a.each(u, function(a) {
                        d.sendAnalyticsLtv(a.cvpoint, a.buid, a.params)
                    })
                }
                r && !a.isEmpty(r.langMsg) && (r.submenu_view ? require(["util/language-message-submenu"], function(a) {
                    a.setMessage(r.langMsg)
                }) : f.setMessage(r.langMsg))
            }
            return c
        },
        error: function(b, d, f) {
            if (!c.isManuallyAbortedXHR(d) && (404 === d.status && null === d.getResponseHeader("Content-Length") && (d.status = 0),
            409 != d.status && 410 != d.status)) {
                var g = ("0000" + a.random(1, 99999)).slice(-5)
                  , h = "[DataModel] response status " + d.status
                  , i = 0 === d.status ? "F" : "B";
                f.ignoreError ? Game.reportError(h, b.url() || f.url) : 0 === this.error && e.isSupported() ? (Game.reportError(h + this.getXHRErrorMsg(i, "POPUP", g), b.url() || f.url),
                Game.view.trigger("data_error", [d.status, g]),
                this.setErrorStorageValue(1)) : (Game.reportError(h + this.getXHRErrorMsg(i, "PAGE", g), b.url() || f.url),
                Game.view.trigger("page_error"),
                this.removeErrorStorageValue())
            }
        },
        sync: function(a, c, d) {
            return d = d || {},
            d.cache = d.cache || !1,
            b.Model.prototype.sync.apply(this, arguments)
        },
        setErrorStorageValue: function(a) {
            var b = this.getStorageKey();
            e.set("model_error_hash", b),
            e.set(b, a)
        },
        getErrorStorageValue: function() {
            return e.get(this.getStorageKey()) || 0
        },
        removeErrorStorageValue: function() {
            e.remove("model_error_hash"),
            e.remove(this.getStorageKey())
        },
        getStorageKey: function() {
            return location.hash + "_model_error"
        },
        getXHRErrorMsg: function(a, b, c) {
            return " error Type " + a + "-" + b + " random code " + c
        }
    });
    return j
});
define('model/token-data', ["jquery", "underscore", "backbone", "model/data", "util/ajax"], function(a, b, c, d, e) {
    var f = d.extend({
        defaults: function() {
            return {
                special_token: null
            }
        },
        initialize: function() {
            d.prototype.initialize.apply(this)
        },
        setToken: function() {
            this.set(this.security.attributes),
            this.set({
                special_token: Math.floor(1e4 * Math.random())
            })
        },
        save: function(c, e, f) {
            var g;
            null == c || "object" == typeof c ? (g = c,
            f = e) : (g = {},
            g[c] = e),
            f = f || {},
            f.url = f.url || this.url(),
            f.url = f.url + "?_=" + (new Date).getTime();
            var h = b.bind(d.prototype.save, this, g, f);
            if (this._cflExists()) {
                var i = this;
                this.func = h;
                var j = this.saveDeferred = new a.Deferred
                  , k = this.saveDeferred.promise();
                return k.abort = function() {
                    delete i.func,
                    j.reject(),
                    j = null,
                    k.abort = function() {}
                }
                ,
                this.security = new (d.extend({
                    urlRoot: Game.baseUri + "security/csrf"
                })),
                this.listenToOnce(this, "change:special_token", this._check),
                this.listenToOnce(this.security, "change", this.setToken),
                this.security.fetch(),
                k
            }
            return h()
        },
        _check: function() {
            var a = this;
            if (void 0 == this.func)
                ;
            else {
                var b = this.func();
                b.done(function() {
                    a.saveDeferred.resolve(a)
                }).fail(function() {
                    a.saveDeferred.reject()
                }),
                a.saveDeferred.fail(function() {
                    e.abortXHR(b)
                }).always(function() {
                    a.saveDeferred = null
                })
            }
        },
        _cflExists: function() {
            var a = this._getSegment(this.url())
              , c = new Function("return " + b.unescape(Game.cfl))();
            return c[a] ? !0 : !1
        },
        _getSegment: function(a) {
            var b = Game.baseUri.length - 1
              , c = a.indexOf("?");
            return 0 > c && (c = a.length),
            a.substring(b, c).replace(/(\/$|.json)/, "")
        }
    });
    return f
});
define('setting', ["jquery", "underscore", "lib/sound", "util/navigate", "model/token-data"], function(a, b, c, d, e) {
    var f = window.Game = window.Game || {}
      , g = window.CanvasRenderingContext2D;
    if (g) {
        var h = g.prototype.drawImage;
        h && (g.prototype.drawImage = function(a, c, d, e, f, g, i, j, k) {
            if (b.isUndefined(j) && b.isUndefined(k))
                try {
                    return h.apply(this, arguments)
                } catch (l) {}
            else {
                var m = c + e < a.width ? e : a.width - c
                  , n = d + f < a.height ? f : a.height - d;
                try {
                    return h.call(this, a, c, d, m, n, g, i, j, k)
                } catch (l) {}
            }
        }
        )
    }
    var i = function(a, b, c) {
        var d = a.split("/")
          , e = d.slice(0, 3).join("/")
          , f = d.slice(3).join("/");
        return e + "/" + f.replace(b, c)
    }
      , j = function(b) {
        var c = f.setting.dpi_mode = Number(b);
        switch (c) {
        case 0:
            f.cssUri = i(f.cssUri, /css[^\/]*/, "css_low"),
            f.imgUri = i(f.imgUri, /img[^\/]*/, "img_low"),
            f.jsUri = i(f.jsUri, /js[^\/]*/, "js_low");
            break;
        case 1:
            f.cssUri = i(f.cssUri, /css[^\/]*/, "css_mid"),
            f.imgUri = i(f.imgUri, /img[^\/]*/, "img_mid"),
            f.jsUri = i(f.jsUri, /js[^\/]*/, "js_mid");
            break;
        case 2:
            f.cssUri = i(f.cssUri, /css[^\/]*/, "css"),
            f.imgUri = i(f.imgUri, /img[^\/]*/, "img"),
            f.jsUri = i(f.jsUri, /js[^\/]*/, "js");
            break;
        default:
            f.cssUri = i(f.cssUri, /css[^\/]*/, "css_light"),
            f.imgUri = i(f.imgUri, /img[^\/]*/, "img_light"),
            f.jsUri = i(f.jsUri, /js[^\/]*/, "js_light"),
            f.setting.dpi_mode = 0
        }
        return (new a.Deferred).resolve()
    }
      , k = function(b, d) {
        var e = new a.Deferred
          , g = f.setting
          , h = g.sound_flag = Number(b)
          , i = h && (g.bgm_mode || g.se_mode || g.voice_mode);
        return (0 === +g.effect_mode || 0 === +i) && (h = g.sound_flag = 0),
        h ? a.when(c.setup(d)).then(function() {
            c.enable()
        }).then(function() {
            e.resolve()
        }) : a.when(c.disable()).done(function() {
            e.resolve()
        }),
        e
    }
      , l = function(b, d) {
        var e = new a.Deferred
          , g = f.setting[b.replace(/(\/$)|(\^)/g, "") + "_mode"] = Number(d);
        switch (g) {
        case 0:
            a.when(c.setDirectory(b, i(f.soundUri, /sound[^\/]*/, "sound")), c.disable(b)).done(function() {
                e.resolve()
            });
            break;
        case 1:
            a.when(c.setDirectory(b, i(f.soundUri, /sound[^\/]*/, "sound_low")), c.enable(b)).done(function() {
                e.resolve()
            });
            break;
        case 2:
            a.when(c.setDirectory(b, i(f.soundUri, /sound[^\/]*/, "sound")), c.enable(b)).done(function() {
                e.resolve()
            })
        }
        return e
    }
      , m = function(a) {
        return (0 == f.setting.effect_mode || !c.isSupportedWebAudio() && !c.isSupportedNativeAudio()) && (a = 0),
        l("^bgm/", a)
    }
      , n = function(a) {
        return (0 == f.setting.effect_mode || !c.isSupportedWebAudio() && !c.isSupportedNativeAudio()) && (a = 0),
        l("^se/", a)
    }
      , o = function(a) {
        return (0 == f.setting.effect_mode || !c.isSupportedWebAudio() && !c.isSupportedNativeAudio()) && (a = 0),
        l("^voice/", a)
    }
      , p = function(a, b) {
        return f.setting[a.replace(/\/$/, "") + "_volume"] = b,
        c.setLocalVolume(a, b / 100)
    }
      , q = function(a) {
        p("bgm/", a)
    }
      , r = function(a) {
        p("se/", a)
    }
      , s = function(a) {
        p("voice/", a)
    }
      , t = function(b) {
        var c = new a.Deferred;
        return a.when(j(0 == f.setting.effect_mode ? -1 : f.setting.dpi_mode), m(f.setting.bgm_mode), n(f.setting.se_mode), o(f.setting.voice_mode), q(f.setting.bgm_volume), r(f.setting.se_volume), s(f.setting.voice_volume), k(f.setting.sound_flag)).done(function() {
            c.resolve()
        }),
        c
    }
      , u = function(a) {
        b.extend(f.setting, a);
        var c = new (e.extend({
            urlRoot: f.baseUri + "setting/save"
        }));
        return c.set(a, {
            silent: !0
        }),
        c.save()
    }
      , v = function(a) {
        b.extend(f.setting, a);
        var c = new (e.extend({
            urlRoot: f.baseUri + "tutorial/save_setting"
        }));
        return c.set(a, {
            silent: !0
        }),
        c.save()
    };
    return {
        initialize: t,
        enableSound: k,
        enableBGM: m,
        enableSE: n,
        enableVoice: o,
        setBGMVolume: q,
        setSEVolume: r,
        setVoiceVolume: s,
        setResolution: j,
        saveSetting: u,
        saveTutorialSetting: v
    }
});
define('util/backbone-singleton', ["underscore", "backbone"], function(a, b) {
    var c = function(b, c) {
        return c = c || a.reject(a.keys(b.prototype), function(a) {
            return "_" == a[0]
        }),
        b.prototype.constructor = function() {
            return b._instance ? b._instance : (b._instance = this,
            b.prototype.constructor.apply(this, arguments))
        }
        ,
        b.getInstance = function() {
            return this._instance = this._instance || new b,
            this._instance
        }
        ,
        a.each(c, function(a) {
            b[a] = function() {
                var c = b.getInstance();
                return c[a].apply(c, arguments)
            }
        }),
        b
    };
    return b.Model.makeSingleton = function(a) {
        c(this, a)
    }
    ,
    {
        makeSingleton: c
    }
});
define('model/data-loader', ["jquery", "underscore", "backbone", "util/backbone-singleton"], function(a, b, c) {
    var d = {}
      , e = c.Model.extend({
        clear: function(a) {
            a ? b.has(d, a) && delete d[a] : d = {}
        },
        load: function(c, e) {
            var f = this;
            if (e = e || {},
            e = b.defaults(e, {
                cache: !0
            }),
            e.cache && b.has(d, c))
                return e.success && e.success.call(f, d[c]),
                f.trigger("complete"),
                (new a.Deferred).resolve().promise();
            var g = new a.Deferred;
            return a.ajax({
                url: Game.baseUri + c,
                cache: !1,
                success: function(a) {
                    e.success && e.success.apply(f, arguments),
                    e.cache && (d[c] = a),
                    g.resolve(),
                    f.trigger("complete")
                },
                error: function() {
                    e.error && e.error.apply(f, arguments),
                    g.reject()
                }
            }),
            g.promise()
        }
    });
    return e.makeSingleton(["load", "clear", "on", "off", "once"]),
    e
});
define('model/sound', ["jquery", "underscore", "backbone", "constant", "lib/sound", "model/data", "model/data-loader", "util/local-storage"], function(a, b, c, d, e, f, g, h) {
    var i = "silent"
      , j = "se/btn_se/btn_se_03.mp3"
      , k = [{
        se: i,
        classes: ["prt-silent-se", "btn-silent-se", "btn-help-topic-title", "btn-command-forward"]
    }, {
        se: "se/queststart_se_1.mp3",
        classes: ["se-quest-start"]
    }, {
        se: "se/target_se_1.mp3",
        classes: ["btn-targeting"]
    }, {
        se: "se/book_open_se_1.mp3",
        classes: ["btn-story", "btn-archive-list", "btn-library"]
    }, {
        se: "se/stamp_se_1.mp3",
        classes: ["btn-stamp-ok"]
    }, {
        se: "se/btn_se/btn_se_02.mp3",
        classes: ["btn-usual-cancel", "btn-usual-text-cancel", "btn-usual-cancel-small", "btn-usual-close", "btn-head-close", "btn-deck-cancel", "btn-cancel", "btn-close", "btn-help-close", "btn-command-back", "btn-log", "btn-ability-unavailable", "btn-summon-unavailable", "btn-tutorial-disable", "btn-play uncleared"]
    }, {
        se: "se/menu_open_se_1.mp3",
        classes: ["btn-head-pop", "btn-open"]
    }, {
        se: "se/menu_close_se_1.mp3",
        classes: ["btn-head-close"]
    }, {
        se: "se/btn_se/btn_se_04.mp3",
        classes: ["se-start", "btn-result", "btn-start", "btn-tutorial-start"]
    }, {
        se: "se/btn_se/btn_se_05.mp3",
        classes: ["btn-attack-start"]
    }, {
        se: "se/btn_se/btn_se_01.mp3",
        classes: ["se-ok", "btn-select-baloon", "btn-usual-ok"]
    }, {
        se: j,
        classes: ["btn-shine", "btn-ability-available", "btn-summon-available", "btn-archive-item", "btn-treasure-item"]
    }]
      , l = [{
        se: "se/sell_se_1.mp3",
        classes: ["pop-sell-result"]
    }]
      , m = c.Model.extend({
        loadSound: function(a, b) {
            return b = b || {},
            e.loadFile(a, b)
        },
        loadBGM: function(a, b) {
            return b = b || {},
            b.alias = b.alias || d.BGM_ALIAS,
            this.loadSound(a, b)
        },
        loadSE: function(a, b) {
            return b = b || {},
            b.alias = b.alias || d.SE_ALIAS,
            this.loadSound(a, b)
        },
        loadVoice: function(a, b) {
            return b = b || {},
            b.alias = b.alias || d.VOICE_ALIAS,
            this.loadSound(a, b)
        },
        playSound: function(a, c) {
            c = c || {};
            var d;
            c.force && e.setup(!0),
            c.alias ? (d = c.loop ? e.setAliasAndRepeat : e.setAliasAndPlay,
            d = b.partial(d, a, c.alias, c)) : (d = c.loop ? e.repeat : e.play,
            d = b.partial(d, a, c)),
            c.force ? e.setup(!0).done(d) : d()
        },
        playBGM: function(a, b) {
            return b = b || {},
            b.alias = b.alias || d.BGM_ALIAS,
            b.loop = !0,
            b.force && (b.force = !1,
            delete b.force),
            this.playSound(a, b)
        },
        playSE: function(a, b) {
            return b = b || {},
            b.alias = b.alias || d.SE_ALIAS,
            this.playSound(a, b)
        },
        playVoice: function(a, b) {
            return b = b || {},
            b.alias = b.alias || d.VOICE_ALIAS,
            this.playSound(a, b)
        },
        stopBGM: function(a) {
            a ? e.stop(a) : e.stop(d.BGM_ALIAS)
        },
        stopSE: function(a) {
            a ? e.stop(a) : (e.stop(d.SE_ALIAS),
            e.stop(d.SE_SAMPLE_ALIAS))
        },
        stopVoice: function(a) {
            if (a)
                e.stop(a);
            else {
                e.stop(d.VOICE_ALIAS),
                e.stop(d.VOICE_SAMPLE_ALIAS);
                for (var b = 0; b < d.MAX_NUM_LOAD_VOICE_STAMP; b++)
                    e.stop(d.VOICE_STAMP_ALIAS + b)
            }
        },
        unsetBGM: function(a) {
            e.unsetAlias(a || d.BGM_ALIAS)
        },
        unsetSE: function(a) {
            e.unsetAlias(a || d.SE_ALIAS)
        },
        unsetVoice: function(a) {
            e.unsetAlias(a || d.VOICE_ALIAS)
        },
        isPlayingBGM: function(a) {
            return e.isPlaying(a || d.BGM_ALIAS)
        },
        isPlayingSE: function(a) {
            return e.isPlaying(a || d.SE_ALIAS)
        },
        isPlayingVoice: function(a) {
            return e.isPlaying(a || d.VOICE_ALIAS)
        },
        getPlayingBGM: function() {
            return e.getPlayingId(d.BGM_ALIAS)
        },
        setPlayingVoice: function(a) {
            return e.setPlaying(d.VOICE_ALIAS, a)
        },
        skipVoice: function() {
            return e.skip("^voice/")
        },
        unskipVoice: function() {
            return e.unskip("^voice/")
        },
        skipSE: function() {
            return e.skip("^se/")
        },
        unskipSE: function() {
            return e.unskip("^se/")
        },
        _getLocationId: function(a) {
            var b = this;
            return (new (f.extend({
                urlRoot: window.Game.baseUri + "rest/user/location_id"
            }))).fetch({
                ignoreError: !0
            }).done(function(c) {
                a && a.call(b, c)
            })
        },
        _getPreLocationId: function(a) {
            var b = this;
            return (new (f.extend({
                urlRoot: window.Game.baseUri + "user/pre_location_id"
            }))).fetch({
                ignoreError: !0
            }).done(function(c) {
                a && a.call(b, c)
            })
        },
        _getShipId: function(a, b) {
            var c = this;
            return (new (f.extend({
                urlRoot: window.Game.baseUri + "rest/guild_airship/ship_type" + (a ? "/" + a : "")
            }))).fetch({
                ignoreError: !0
            }).done(function(a) {
                b && b.call(c, a)
            })
        },
        _getJukebox: function(a, b) {
            var c = this;
            return (new (f.extend({
                urlRoot: window.Game.baseUri + "rest/guild_airship/bgm_file" + (a ? "/" + a : "")
            }))).fetch({
                ignoreError: !0
            }).done(function(a) {
                b && b.call(c, a)
            })
        },
        _getJukeboxNew: function(a, b) {
            var c = this;
            return (new (f.extend({
                urlRoot: window.Game.baseUri + "rest/jukebox/bgm_file" + (a ? "/" + a : "")
            }))).fetch({
                ignoreError: !0
            }).done(function(a) {
                b.call(c, a)
            })
        },
        _getSoundData: function(a, c, d) {
            var e = this;
            return b.isFunction(c) && (d = c,
            c = null),
            g.load(a, {
                success: function(a) {
                    if (d) {
                        var f = a.data;
                        b.isObject(f) && !b.isArray(f) && (f = f[c]),
                        b.isArray(f) && (f = f[b.random(f.length - 1)]),
                        d.call(e, f)
                    }
                }
            })
        },
        playTownBGM: function(a) {
            var b = this;
            if (a = a || "",
            !a && h.isSupported()) {
                var c = h.get("mypage_char_bgm" + Game.localstorageExtensions[Game.ua.platformName()]);
                if (c && "default" != c)
                    return void b.playBGM("bgm/" + c)
            }
            return b._getSoundData("rest/sound/town_bgm?data=" + a, a, function(a) {
                b.playBGM(a)
            })
        },
        playQuestMapBGM: function(a, c, d) {
            var e = this;
            "normal" == a ? a += Date.now() : "event" === a ? a += Date.now() : a || (a = "empty" + Date.now());
            var f = b.filter([a ? "location_id=" + a : null, c ? "quest_id=" + c : null, d ? "event_id=" + d : null], b.identity).join("&");
            return e._getSoundData("rest/sound/quest_map_bgm?" + f, function(a) {
                e.playBGM(a)
            })
        },
        playQuestSupporterBGM: function(a, c) {
            var d = this
              , e = b.filter([a ? "location_id=" + a : null, c ? "quest_id=" + c : null], b.identity).join("&");
            return d._getSoundData("rest/sound/quest_supporter_bgm?" + e, function(a) {
                d.playBGM(a)
            })
        },
        playShipBGM: function(a, b) {
            var c = this;
            return a ? c._getSoundData("rest/sound/ship_bgm?data=" + a, a, function(a) {
                c.playBGM(a)
            }) : c._getShipId(b, function(a) {
                a ? c.playShipBGM(a) : c.playTownBGM()
            })
        },
        playGuildBGM: function(a, b) {
            var c = this;
            return a ? void this.playBGM("bgm/" + a + ".mp3") : c._getJukebox(b, function(a) {
                a && c.playGuildBGM(a)
            })
        },
        playJukeboxDefaultBGM: function() {
            return this.playBGM("bgm/13_event_generalpurpose_00.mp3")
        },
        playJukeboxBGM: function(a, b) {
            var c = this;
            return a ? void this.playBGM("bgm/" + a + ".mp3") : c._getJukeboxNew(b, function(a) {
                a && c.playJukeboxBGM(a)
            })
        },
        playTutorialQuestBGM: function() {
            return this.playBGM("bgm/02_field_01.mp3")
        },
        playTutorialTownBGM: function() {
            return this.playBGM("bgm/11_kaze_reel_00.mp3")
        },
        playShopBGM: function() {
            return this.playBGM("bgm/11_kaze_reel_00.mp3")
        },
        playResultBGM: function() {
            return this.playBGM("bgm/05_gatcha_02.mp3")
        },
        playEventBGM: function() {
            return this.playBGM("bgm/12_baltz_06.mp3")
        },
        playLimitedBGM: function(a) {
            var b = "2009" == a ? "bgm/31_garonzo_02.mp3" : "bgm/02_field_02.mp3";
            return this.playBGM(b)
        },
        loadMypageVoiceData: function(a) {
            var b = this;
            b._getSoundData("rest/sound/mypage_voice?data=" + a, a)
        },
        playSoundArrayInOrder: function(a, c) {
            var d = this;
            return g.load("rest/sound/" + c + "?data=" + a, {
                success: function(e) {
                    var f, g = e.data, h = "archive_voice" === c;
                    b.isObject(g) && !b.isArray(g) && (g = g[a]),
                    d.currentVoiceId === a && g.length - 1 > d.currentVoiceIndex ? d.currentVoiceIndex++ : (d.currentVoiceId = a,
                    d.currentVoiceIndex = 0),
                    f = b.isArray(g) ? g[d.currentVoiceIndex] : g,
                    d.playVoice(f, {
                        force: h
                    })
                }
            })
        },
        loadArchiveVoiceData: function(a) {
            var b = this;
            b._getSoundData("rest/sound/archive_voice?data=" + a, a)
        },
        playWinVoice: function(a) {
            var b = this;
            b._getSoundData("rest/sound/win_voice?data=" + a, a, function(a) {
                b.playVoice(a)
            })
        },
        playDyingVoice: function(a) {
            var b = this;
            b._getSoundData("rest/sound/dying_voice?data=" + a, a, function(a) {
                b.playVoice(a)
            })
        },
        playSpecialSkillGaugeVoice: function(a) {
            var b = this;
            b._getSoundData("rest/sound/special_skill_gauge_voice?data=" + a, a, function(a) {
                b.playVoice(a)
            })
        },
        playFormationVoice: function(a, b) {
            var c = this;
            c._getSoundData("rest/sound/formation_voice?data=" + a + "&npc_id=" + b, a, function(a) {
                c.playVoice(a)
            })
        },
        playGachaVoice: function(a) {
            var b = this;
            b._getSoundData("rest/sound/gacha_voice?data=" + a, a, function(a) {
                b.playVoice(a)
            })
        },
        playEvolutionVoice: function(a) {
            var b = this;
            b._getSoundData("rest/sound/evolution_voice?data=" + a, a, function(a) {
                b.playVoice(a)
            })
        },
        playSampleSE: function(a) {
            var b = this;
            b._getSoundData("rest/sound/sample_se", function(a) {
                b.playSE(a, {
                    alias: d.SE_SAMPLE_ALIAS
                })
            })
        },
        playSampleVoice: function(a) {
            var b = this;
            b._getSoundData("rest/sound/sample_voice", function(a) {
                b.playVoice(a, {
                    alias: d.VOICE_SAMPLE_ALIAS
                })
            })
        },
        playRecastMaxSE: function() {
            return this.playSE("se/ougi_gauge_se_1.mp3")
        },
        playSlideSE: function() {
            return this.playSE("se/btn_se/btn_se_02.mp3")
        },
        playEquipSE: function() {
            return this.playSE("se/equip_se_1.mp3")
        },
        playChangeWeaponSE: function() {
            return this.playSE("se/set_sw_se_1.mp3")
        },
        playSortSE: function() {
            return this.playSE("se/sort_se_1.mp3")
        },
        playNextSceneSE: function() {
            return this.playSE(d.SE_NEXT_SCENE, {
                alias: d.SE_NEXT_SCENE
            })
        },
        playExpGaugeSE: function() {
            return this.playSound("se/gauge_se_1.mp3", {
                offset: .15
            })
        },
        playAssistSE: function() {
            return this.playSound("se/help_se_1_01.mp3")
        },
        playAssistJoinedSE: function() {
            return this.playSE("se/help_se_2.mp3")
        },
        playBattleReadySE: function() {
            return this.playSE("se/ready_se_1.mp3")
        },
        playOpenAccordionSE: function() {
            return this.playSE("se/page_se_1.mp3")
        },
        playCloseAccordionSE: function() {
            return this.playSE("se/page_back_se_1.mp3")
        },
        playOpenMenuSE: function() {
            return this.playSE("se/menu_open_se_1.mp3")
        },
        playCloseMenuSE: function() {
            return this.playSE("se/menu_close_se_1.mp3")
        },
        playGetItemSE: function() {
            return this.playSE("se/itemget_04_se_1.mp3")
        },
        playGetTreasureSE: function() {
            return this.playSE("se/itemget_03_se_1.mp3")
        },
        playRankUpSE: function() {
            return this.playSE("se/rankup_se_1.mp3")
        },
        playLevelUpSE: function() {
            return this.playSE("se/levelup_se_1.mp3")
        },
        playPopSE: function() {
            return this.playSE("se/popup_se_1.mp3")
        },
        playQuestForwardButtonSE: function() {
            return this.playSE("se/btn_se/btn_se_01.mp3")
        },
        playSuccessSE: function() {
            return this.playSE("se/success_s_se_1.mp3")
        },
        playGreatSuccessSE: function() {
            return this.playSE("se/success_l_se_1.mp3")
        },
        playPushStampSE: function() {
            return this.playSE("se/stamp_se_1.mp3")
        },
        playRecoverySE: function() {
            return this.playSE("se/item_use_se_1.mp3")
        },
        playButtonSE: function(a) {
            var c = this;
            if (a.hasClass("btn-disable-sound") || (a.hasClass("btn-switch-sound") || a.hasClass("btn-bgm-change")) && a.hasClass("soundOn"))
                ;
            else {
                var d = b.some(k, function(d) {
                    return b.some(d.classes, function(b) {
                        return a.hasClass(b) ? (d.se !== i && c.playSE(d.se),
                        !0) : !1
                    })
                });
                d || c.playSE(j)
            }
        },
        playPopShowSE: function(a) {
            var c = this;
            b.some(l, function(d) {
                return b.some(d.classes, function(b) {
                    return a.hasClass(b) ? (c.playSE(d.se),
                    !0) : !1
                })
            })
        }
    });
    return m.makeSingleton(),
    m
});
define('util/touch', ["jquery", "underscore", "util/function", "flexslider"], function(a, b, c) {
    var d = "ontouchstart"in window
      , e = "onmousedown"in window
      , f = d ? "touchstart" : "mousedown"
      , g = d ? "touchmove" : "mousemove"
      , h = d ? "touchend" : "mouseup";
    if (a.event.special.cgtouchstart = {
        bindType: f,
        delegateType: f
    },
    a.event.special.cgtouchmove = {
        bindType: g,
        delegateType: g
    },
    a.event.special.cgtouchend = {
        bindType: h,
        delegateType: h
    },
    Game.cgtouchstartEvent = f,
    Game.ua.isPcPlatformHasTouch = (Game.ua.isPcPlatform() || Game.ua.isAndApp()) && d && e,
    !d || Game.ua.isPcPlatformHasTouch) {
        var i = a(window)
          , j = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
          , k = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
          , l = {
            mousedown: "touchstart",
            mousemove: "touchmove",
            mouseup: "touchend"
        }
          , m = {};
        b.each(l, function(a, b) {
            var c = m[a] = document.createEvent("UIEvent");
            c.initUIEvent(a, !0, !0, window, 1),
            c.touches = c.targetTouches = c.changedTouches = [{}]
        });
        var n = function(b) {
            if (Game.ua.isJssdkSideMenu()) {
                var c = a(Game.gameContainer.selector);
                j = (c.offset().left + c.width()) * c.css("zoom")
            }
            return b.clientX < 0 || j < b.clientX || b.clientY < 0 || k < b.clientY
        }
          , o = function(a) {
            var c = a.type;
            if (n(a) && (c = "mouseup"),
            d && "mouseup" === a.type && "undefined" != typeof TouchEvent && "undefined" != typeof Touch) {
                var e = m.touchstart.target
                  , f = {
                    identifier: 0,
                    target: e
                };
                b.each(["clientX", "clientY", "pageX", "pageY", "screenX", "screenY"], function(b) {
                    f[b] = a[b]
                });
                var g = new Touch(f);
                h = new TouchEvent("touchend",{
                    changedTouches: [g]
                }),
                e.dispatchEvent(h)
            } else {
                var h = m[l[c]];
                b.each(["clientX", "clientY", "pageX", "pageY", "screenX", "screenY"], function(b) {
                    h.touches[0][b] = h[b] = a[b]
                });
                var e = h.target = "mouseup" === c ? m.touchstart.target : a.target;
                e && (h.touches[0].target = e,
                h.touches[0].identifier = 0,
                h.changedTouches = h.touches,
                e.dispatchEvent(h))
            }
        }
          , p = function(a) {
            d && "CANVAS" !== a.target.tagName || n(a) || (i.on("mousemove", q),
            i.on("mouseup", r),
            o(a))
        }
          , q = function(a) {
            n(a) ? r(a) : o(a)
        }
          , r = function(a) {
            i.off("mousemove", q),
            i.off("mouseup", r),
            o(a)
        };
        if (i.on("mousedown", p),
        !d) {
            var s = a.flexslider;
            a.flexslider = function(a, b) {
                window.ontouchstart = c.returnFalse,
                s.call(this, a, b),
                delete window.ontouchstart
            }
            ,
            a.flexslider.defaults = s.defaults
        }
    }
});
define('view/popup', ["underscore", "backbone", "model/sound"], function(a, b, c) {
    var d = 0
      , e = b.View.extend({
        el: "#pop",
        defaults: {
            className: null,
            title: null,
            body: null,
            flagBtnCancel: 0,
            flagBtnOk: 0,
            flagBtnClose: 0,
            btnOkClassName: null,
            btnCancelClassName: null,
            btnCloseClassName: null,
            showStartCallback: null,
            showEndCallback: null,
            maskSubMenu: null,
            btnTreasure: 0,
            treasureId: null,
            treasureSelected: !1
        },
        events: {
            "tap .btn-usual-ok": "onPushOk",
            "tap .btn-usual-cancel": "onPushCancel",
            "tap .btn-usual-close": "onPushClose",
            "tap .btn-treasure-registration": "onTapRegisterBtn"
        },
        initialize: function() {
            this.options = this.options || {},
            this.options.targetObj && $(this.options.targetObj).length && (this.el = this.options.targetObj),
            a.isUndefined(this.options.maskSubMenu) || this.options.maskSubMenu !== !0 || (this.el = "#submenu-pop"),
            this.setElement(this.el),
            this.options = a.defaults(this.options, this.defaults)
        },
        render: function() {
            a.isUndefined(Game.footer) === !1 && Game.footer.mainView.isTreasurePUOpen === !0 && this.options.maskSubMenu !== !0 && Game.footer.mainView.destroy();
            var b = !a.isUndefined(Game.footer) && !a.isUndefined(Game.treasure.list);
            return this.options.treasureId = b && this.options.treasureId || null,
            this.options.btnTreasure = this.options.treasureId ? this.options.btnTreasure : 0,
            a.isNull(this.options.treasureId) || this.stopListening(Game.footer.mainView, "treasurePopupClose").listenTo(Game.footer.mainView, "treasurePopupClose", this.updateTreasureBtn),
            this.$el.html(a.template($("#popup").html(), this.options)),
            this.updateTreasureBtn(),
            this
        },
        updateTreasureBtn: function() {
            var b = +this.options.treasureId;
            if (!a.isUndefined(Game.footer) && !a.isUndefined(Game.treasure.list) && b) {
                var c = Game.treasure.list.length > 0 && a.some(Game.treasure.list, function(a) {
                    return +a.item_id === b
                })
                  , d = this.$el.find(".prt-treasure-registration")
                  , e = d.find(".btn-treasure-registration");
                d.toggleClass("max", Game.treasure.isSetMax() && c === !1),
                e.toggleClass("selected", c)
            }
        },
        popShow: function(a, b) {
            this.options.showStartCallback && this.options.showStartCallback(),
            clearTimeout(d);
            var e = this.options.maskSubMenu ? $(".mask_submenu") : $(".mask");
            if (this.options.maskSubMenu === !1) {
                var f = $("#wrapper").height();
                e.height() < f && e.css("height", f)
            }
            var g = $("#wrapper").find(".cnt-quest-scene").find(".prt-log-display")
              , h = g.length > 0 && "block" === g.css("display");
            if (h === !0) {
                var i = g.height() + $("#wrapper .prt-quest-header").height();
                e.height() < i && e.css("height", i)
            }
            e.css("display", "block");
            var j = this.$el.find(".pop-usual")
              , k = this;
            c.playPopShowSE(j);
            var l = this.options.showEndCallback;
            l && j.oneTransitionEnd(function() {
                j.off("transitionend webkitTransitionEnd"),
                l()
            }, 300);
            var m, n = $(window).height(), o = this.options.maskSubMenu ? n : Number($("html").height()), p = Game.getZoom(), q = this.options.maskSubMenu ? 0 : Game.get$ScrollParent().scrollTop();
            Game.ua.isJssdk() && (o = Number($(Game.gameContainer.selector).height())),
            h === !0 && (o = i);
            var r = 50 * +p;
            if (0 < $("#debug").length && (r = r + +$("#debug").height() + 30),
            "undefined" != typeof a)
                m = b;
            else {
                var s = q;
                n = Math.min(o * p, n),
                m = ((n - j.height() * p) / 2 + s) / p
            }
            j.css({
                display: "block",
                top: m + "px"
            }).delay(100).queue(function() {
                if (a)
                    $(this).removeClass("pop-hide").addClass("pop-show");
                else {
                    var b = m
                      , c = b + j.height()
                      , d = Game.ua.isChromeApp() && 100 > r ? 100 : r
                      , e = o - d;
                    c > e && (b = e - j.height()),
                    0 > b && (b = 0);
                    var f = +o - +j.height() - +r;
                    if (0 > f) {
                        var g = Math.abs(f)
                          , h = $("#wrapper").css("margin-bottom").replace(/px/g, "")
                          , i = +h + g + 50;
                        k.updatedWrapperMargin = !0,
                        k.updateWrapperMargin(1, i)
                    }
                    m != b ? (j.css("top", b + "px"),
                    setTimeout(function() {
                        j.removeClass("pop-hide").addClass("pop-show")
                    }, 100)) : $(this).removeClass("pop-hide").addClass("pop-show")
                }
            })
        },
        popClose: function() {
            var a = this;
            this.updateWrapperMargin(0, 0),
            this.$el.find(".pop-usual").removeClass("pop-show").addClass("pop-hide").oneTransitionEnd(function() {
                $(this).css("display", "none"),
                a.popOff(),
                a.trigger("popClose")
            }, 300)
        },
        popRemove: function(a) {
            var b = this;
            this.trigger("removeStart"),
            this.updateWrapperMargin(0, 0),
            this.$el.find(".pop-usual").removeClass("pop-show").addClass("pop-hide").oneTransitionEnd(function() {
                if (1 != a) {
                    var c = b.options.maskSubMenu ? ".mask_submenu" : ".mask";
                    $(this).add(c).css("display", "none")
                }
                b.trigger("removeEnd"),
                $(this).off("transitionend webkitTransitionEnd"),
                b.destroy()
            }, 300)
        },
        locationUnclaimed: function(a) {
            this.popRemove(),
            b.history.navigate("#quest/assist/unclaimed", !0)
        },
        popOff: function() {
            this.off(),
            this.undelegateEvents(),
            this.stopListening()
        },
        popDelete: function() {
            this.$el.find(".pop-usual").removeClass("pop-show").addClass("pop-hide"),
            $(this).add(".mask").css("display", "none"),
            $(this).off("transitionend webkitTransitionEnd"),
            this.off(),
            this.undelegateEvents(),
            this.stopListening(),
            this.updateWrapperMargin(0, 0)
        },
        destroy: function() {
            this.$el.empty(),
            this.trigger("popEmptyEnd"),
            this.popOff()
        },
        onPushOk: function() {
            this.trigger("ok")
        },
        onPushCancel: function() {
            this.trigger("cancel")
        },
        onPushClose: function() {
            this.trigger("close")
        },
        onTapRegisterBtn: function(a) {
            this.options.treasureId && Game.footer.mainView.registrateTreasure(a, this.options.treasureId)
        },
        updateWrapperMargin: function(a, b) {
            this.updatedWrapperMargin && (this.defaultWrapperMarginBottom || (this.defaultWrapperMarginBottom = $("#wrapper").css("margin-bottom").replace(/px/g, "")),
            0 === a ? $("#wrapper").css("margin-bottom", this.defaultWrapperMarginBottom + "px") : $("#wrapper").css("margin-bottom", b + "px"))
        }
    });
    return e
});
define('view/chat/form', ["jquery", "underscore", "backbone", "view/popup", "util/language-message"], function(a, b, c, d, e) {
    var f = 140
      , g = "#pop-chat"
      , h = "submit"
      , i = "submissionEmptyError"
      , j = "submissionExcessError"
      , k = c.View.extend({
        el: "#general-chat .chat-form",
        events: {
            "tap #chat-input:not(.disable)": "userFocus",
            "tap #chat-send:not(.disable)": "checkMessage"
        },
        initialize: function() {
            this.$input = this.$el.find("#chat-input"),
            this.$send = this.$el.find("#chat-send"),
            this.setupInput()
        },
        setupInput: function(a) {
            var b = this;
            a = a || b.$input,
            a.keyup(function(a) {
                return 13 === a.keyCode ? !1 : void 0
            }),
            a.keypress(function(a) {
                return 13 === a.keyCode ? !1 : void 0
            })
        },
        disable: function() {
            this.$send.addClass("disable"),
            this.$input.addClass("disable"),
            this.disableInput()
        },
        disableInput: function() {
            this.$input.attr("disabled", "disabled")
        },
        enable: function() {
            this.$send.removeClass("disable"),
            this.$input.removeClass("disable"),
            this.enableInput()
        },
        enableInput: function() {
            this.$input.removeAttr("disabled")
        },
        clearInput: function() {
            this.$input.val("")
        },
        userFocus: function(a) {
            a.stopPropagation(),
            this.trigger("userfocus")
        },
        checkMessage: function(a) {
            if (this.trigger("sendButtonTapped"),
            this.inputComment = this.$input.val().replace("%%br%%", ""),
            !this.inputComment || !this.inputComment.match(/\S/)) {
                this.clearInput();
                var b = e.getMessage("guild_main_149");
                return void this.trigger(i, b)
            }
            if (this.inputComment.length > f) {
                var b = e.replaceMessage("guild_main_150", [f]);
                return void this.trigger(j, b)
            }
            this.trigger(h, {
                comment: this.inputComment
            }),
            this.clearInput(),
            a && (a.preventDefault(),
            Game.ua.isJssdk() || a.stopPropagation())
        },
        errorChat: function(b) {
            var c = this
              , d = new l({
                err_msg: b
            });
            d.on(h, function(a) {
                c.trigger(h, a)
            }),
            d.render();
            var e = a("#frm-message.frm-message");
            this.setupInput(e)
        },
        popErrorDialog: function(a) {
            a || (a = e.getMessage("guild_main_148"));
            var b = new d({
                el: g,
                className: "common-pop-error",
                title: e.getMessage("guild_main_145"),
                body: a,
                flagBtnCancel: 0,
                flagBtnOk: 1
            });
            b.on("ok", function() {
                b.popRemove()
            }),
            b.render().popShow()
        },
        popIntervalErrorDialog: function() {
            this.popErrorDialog(e.getMessage("guild_main_146"))
        },
        popCompletionDialog: function() {
            var a = new d({
                el: g,
                className: "send-chat",
                title: e.getMessage("guild_main_103"),
                body: e.getMessage("guild_main_106"),
                flagBtnCancel: 0,
                flagBtnOk: 1
            });
            a.on("ok", function() {
                a.popRemove()
            }),
            a.render().popShow()
        },
        destroy: function() {
            this.off(),
            this.undelegateEvents(),
            this.stopListening()
        }
    })
      , l = k.extend({
        el: "",
        $frmMessage: null,
        template: b.template(a("#tpl-chat-pop").html()),
        initialize: function() {
            var a = this.options.err_msg;
            this.create(a)
        },
        render: function() {
            return this.renderPopup(),
            this.$frmMessage = a("#frm-message"),
            this
        },
        create: function(a) {
            var b = this;
            (void 0 == a || "" == a) && (a = e.getMessage("guild_main_107")),
            1 == a && (a = "");
            var c = {
                inputText: this.inputComment,
                errflag: !0,
                msg: a,
                count_max: f
            };
            this.popView = new d({
                el: g,
                className: "ready-chat",
                title: e.getMessage("guild_main_108"),
                body: this.template(c),
                flagBtnCancel: 1,
                flagBtnOk: 1
            }),
            this.popView.on("ok", function() {
                b.popView.popOff(),
                b.popView.popRemove(),
                b.checkMessage()
            }),
            this.popView.on("cancel", function() {
                b.popView.popRemove()
            })
        },
        renderPopup: function() {
            this.popView.render().popShow(),
            this.setElement(".ready-chat")
        }
    });
    return k
});
define('collection/data', ["backbone", "underscore", "util/ajax"], function(a, b, c) {
    var d = a.Collection.extend({
        initialize: function(a, b) {
            this.listenToOnce(this, "error", this.error)
        },
        parse: function(a) {
            if (a) {
                var c = a.redirect;
                c && b.isString(c) && (0 === a.redirect.indexOf("#") ? window.location.hash = c.slice(1) : window.location.href = c)
            }
            return a
        },
        error: function(a, b, d) {
            c.isManuallyAbortedXHR(b) || (404 === b.status && null === b.getResponseHeader("Content-Length") && (b.status = 0),
            409 != b.status && 410 != b.status && (Game.reportError("[DataCollection] response status " + b.status, a.url() || d.url),
            d.ignoreError || Game.view.trigger("data_error")))
        },
        sync: function(b, c, d) {
            return d = d || {},
            d.cache = d.cache || !1,
            a.Collection.prototype.sync.apply(this, arguments)
        }
    });
    return d
});
define('view/chat/stamp', ["jquery", "underscore", "backbone", "view/popup", "collection/data", "model/sound", "util/local-storage", "flexslider", "util/language-message"], function(a, b, c, d, e, f, g, h, i) {
    var j = "#pop-chat"
      , k = "pop-ready-stamp"
      , l = !1
      , m = "submit"
      , n = {
        GUILD: 0,
        COOP: 1,
        RAID: 2,
        DEFENDORDER: 3,
        ARCARUM: 4
    }
      , o = c.View.extend({
        el: "#general-chat .chat-stamp",
        events: {
            "tap #chat-stamp:not(.disable)": "fetchStampCollection"
        },
        initialize: function(b) {
            b = b || {},
            this.isGeneralChat = b.isGeneralChat || !1,
            this.$stamp = a("#chat-stamp"),
            this.isGeneralChat === !1 && (this.events = {}),
            this.stampCollectionRequest = new (e.extend({
                url: Game.baseUri + "rest/profile/stamp_list/"
            }))
        },
        fetchStampCollection: function() {
            var a = this;
            this.stampCollectionRequest.fetch().fail(function() {
                a.trigger("error")
            }).done(function() {
                a.popStampList()
            })
        },
        disable: function() {
            this.$stamp.addClass("disable")
        },
        enable: function() {
            this.$stamp.removeClass("disable")
        },
        popStampList: function() {
            var a = this;
            this.stampCollection = this.stampCollection || this.stampCollectionRequest.models[0].attributes;
            var b = new p({
                stampList: this.stampCollection.stamp_list,
                stampPageMode: +this.stampCollection.stamp_page_mode,
                isGeneralChat: this.isGeneralChat
            });
            this.listenToOnce(b, m, function(b) {
                a.trigger(m, b)
            });
            var c = !(this.currentChannel !== n.RAID);
            b.render(c)
        },
        popIntervalErrorDialog: function() {
            var a = new d({
                el: j,
                className: "common-pop-error",
                title: i.getMessage("guild_main_145"),
                body: i.getMessage("guild_main_146"),
                flagBtnCancel: 0,
                flagBtnOk: 1
            });
            this.listenToOnce(a, "ok", function() {
                a.popRemove()
            }),
            a.render().popShow()
        },
        popCompletionDialog: function() {
            var a = new d({
                el: j,
                className: "send-stamp",
                title: i.getMessage("guild_main_103"),
                body: i.getMessage("guild_main_114"),
                flagBtnCancel: 0,
                flagBtnOk: 1,
                btnOkClassName: "btn-stamp-ok"
            });
            this.listenToOnce(a, "ok", function() {
                a.popRemove()
            }),
            a.render().popShow()
        },
        destroy: function() {
            this.off(),
            this.undelegateEvents(),
            this.stopListening()
        }
    })
      , p = c.View.extend({
        el: "",
        postFlag: !1,
        postStampId: 0,
        events: {
            "tap .prt-popup-body .img-stamp": "postStamp",
            "tap .prt-popup-footer .btn-usual-ok": "closePopup",
            "tap .prt-popup-footer .btn-usual-cancel": "closePopup"
        },
        initialize: function(a) {
            var c = 32;
            this.isGeneralChat = a.isGeneralChat,
            this.stampPageMode = +a.stampPageMode,
            this.stampPageMode > 0 && (c = 48),
            this.fullStampList = a.stampList,
            this.stampList = b.filter(a.stampList, function(a) {
                return +a.priority <= c
            }),
            this.stampList = b.sortBy(this.stampList, function(a) {
                return +a.priority
            })
        },
        render: function(a) {
            this.renderPopup(k, a);
            var b = this
              , c = this.popView.$el.find(".prt-stamp-wrapper .lis-stamp-slider");
            return c.css("display", "none"),
            this.popView.$el.find(".prt-stamp-image").flexslider({
                selector: ".prt-stamp-wrapper > .lis-stamp-slider",
                animation: "slide",
                animationLoop: !1,
                slideshow: !1,
                prevText: "",
                nextText: "",
                start: function() {
                    c.css("display", "block")
                },
                before: function() {
                    setTimeout(function() {
                        b.postFlag = !0
                    }, 1)
                },
                after: function() {
                    b.postFlag = !1
                }
            }),
            this.$el.find("." + k).css("top", Game.get$ScrollParent().scrollTop() / Game.getZoom() + 20 + "px"),
            this
        },
        postStamp: function(b) {
            if (this.isGeneralChat === !0) {
                if (l === !0)
                    return;
                l = !0,
                setTimeout(function() {
                    l = !1
                }, 5e3)
            }
            this.postFlag || (this.postFlag = !0,
            f.playPushStampSE(),
            this.postStampId = a(b.currentTarget).data("stamp-id"),
            g.isSupported() && this.prepareLatestStamp(this.postStampId),
            this.closePopup())
        },
        getRecentStamps: function() {
            var a, c, d = [], e = 16;
            if (this.recentStamps = this.recentStamps || [],
            a = g.getItem("recentStamps"),
            a && (a = JSON.parse(a)),
            !a) {
                for (c = 0; e > c; c++)
                    d[c] = 0;
                g.setObject("recentStamps", d),
                a = d
            }
            for (c = 0; e > c; c++)
                this.recentStamps[c] = b.find(this.fullStampList, function(b) {
                    return +b.id === a[c]
                }),
                void 0 === this.recentStamps[c] && (this.recentStamps[c] = {
                    id: "0"
                });
            return this.recentStamps
        },
        prepareLatestStamp: function(a) {
            this.preparedLatestStamp = a
        },
        setLatestStamp: function() {
            var a, c, d, e, f = [], h = 16;
            if (a = this.preparedLatestStamp || null,
            null !== a) {
                for (d = this.getRecentStamps(),
                c = b.filter(d, function(b) {
                    return +b.id !== a
                }),
                e = h; e--; )
                    void 0 === c[e] && (c[e] = {
                        id: "0"
                    }),
                    f[e + 1] = +c[e].id;
                f[0] = a,
                g.setObject("recentStamps", f)
            }
        },
        renderPopup: function(c, e) {
            var f = this
              , h = {};
            h.stampList = this.stampList,
            h.enabledRecentStamps = g.isSupported(),
            h.enabledRecentStamps ? (h.recentStamps = this.getRecentStamps(),
            h.showRecentStamps = this.judgeShowRecentStamp(h.recentStamps)) : h.showRecentStamps = !1,
            h.recentStampMax = this.getRecentStampMax(this.stampPageMode),
            h.showIcoVoiceStamp = e || !1,
            this.popView = new d({
                el: j,
                className: k,
                title: i.getMessage("guild_main_147"),
                body: b.template(a("#tpl-stamp").html(), h),
                flagBtnCancel: 1,
                flagBtnOk: 0
            }),
            this.stopListening(this.popView),
            this.listenToOnce(this.popView, "removeEnd", function() {
                f.postFlag && (f.trigger(m, {
                    stamp_id: f.postStampId
                }),
                f.setLatestStamp())
            }),
            this.popView.render().popShow(),
            this.setElement("." + c)
        },
        judgeShowRecentStamp: function(a) {
            var c = b.find(a, function(a) {
                return +a.id > 0
            });
            return "undefined" != typeof c
        },
        getRecentStampMax: function(a) {
            switch (+a) {
            case 0:
                return 4;
            case 1:
                return 12;
            case 2:
                return 0;
            default:
                return 4
            }
        },
        closePopup: function() {
            this.popView.popRemove()
        }
    });
    return o
});
define('util/language', ["underscore"], function(a) {
    var b = function(a) {
        return Game.lang === a
    };
    return {
        isJapanese: a.partial(b, "ja"),
        isEnglish: a.partial(b, "en")
    }
});
define('model/chat', ["jquery", "underscore", "backbone", "util/language"], function(a, b, c, d) {
    var e = "/sp/assets/stamp/full/"
      , f = "<img"
      , g = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      , h = 1
      , i = c.Model.extend({
        PAGE_DEFAULT: 1,
        LIMIT_DEFAULT: 30,
        infoModel: null,
        commentListModel: null,
        postFormModel: null,
        postStampModel: null,
        fetchInfo: function() {
            return this.infoModel.fetch()
        },
        fetchCommentList: function() {
            var c = this
              , d = new a.Deferred;
            return this.commentListModel.fetch().done(function(a) {
                var e = [];
                a && a.list && (b.isUndefined(a.skin_coop) === !1 && (c.skinCoop = +a.skin_coop,
                0 === c.skinCoop && b.each(a.list, function(a) {
                    a.user_image = a.no_skin_image
                })),
                e = b.chain(a.list).sortBy(function(a) {
                    return Number(a.id || a.timestamp || a.created_at)
                }).map(function(a) {
                    return c.parseComment(a)
                }).value()),
                d.resolve(e, a)
            }).fail(function(a) {
                d.reject(a)
            }),
            d
        },
        postForm: function(a) {
            return this.postFormModel.clear().set(a).save()
        },
        postStamp: function(a) {
            return this.postStampModel.clear().set(a).save()
        },
        parseComment: function(a) {
            if (a.userId && a.timestamp && a.nickname && a.userImage && a.commentData)
                return a.chatTime = this.toChatTime(a.timestamp),
                b.isObject(a.commentData.content) && (a.commentData.content = a.commentData.content[Game.lang]),
                a.commentData.isStamp && !this.isImgTag(a.commentData.content) && (a.commentData.content = this.toStampTag(a.commentData.content)),
                a;
            if (!(a.user_id && a.chat_time && a.user_name && a.user_image && a.user_comment))
                throw new Error("Lack of required param, param are ",a);
            var c = b.isObject(a.user_comment.text) ? a.user_comment.text[Game.lang] : a.user_comment.text;
            if (a.user_comment.is_stamp)
                switch (!0) {
                case d.isJapanese():
                    c = c.replace(/assets_en/, "assets");
                    break;
                case d.isEnglish():
                    null === c.match("/assets_en/") && (c = c.replace(/assets/, "assets_en"))
                }
            return this.isGuildChannel === !0 && (c = c.replace(/%%br%%/g, "<br>")),
            b.isObject(a.chat_time) && (a.chat_time = a.chat_time[Game.lang]),
            {
                id: a.id,
                userId: a.user_id,
                platformId: a.platform_id,
                chatTime: a.chat_time,
                nickname: a.user_name,
                userImage: a.user_image,
                categoryId: a.category_id,
                chatId: a.chat_id,
                commentFrom: a.comment_from,
                commentData: {
                    isStamp: a.user_comment.is_stamp,
                    content: c
                },
                systemEvent: a.system_type,
                logType: a.log_type || h
            }
        },
        toStampTag: function(a) {
            var b = Game.imgUri + e + a
              , c = '<img src="' + b + '" alt="" class="img-stamp">';
            return c
        },
        isImgTag: function(a) {
            var b = a.indexOf(f);
            return b >= 0
        },
        toDoubleDigit: function(a) {
            return 10 > a ? "0" + a : a
        },
        toTime24: function(a, b) {
            return a + ":" + this.toDoubleDigit(b)
        },
        toTime12: function(a, b) {
            var c = a
              , d = 12 > a ? "a.m.," : "p.m.,";
            return a > 12 ? c = a - 12 : 0 === a && (c = 12),
            0 === b ? 0 === a ? "12 midnight," : 12 === a ? "12 noon," : c + " " + d : c + ":" + this.toDoubleDigit(b) + " " + d
        },
        toChatTime: function(a) {
            var b = new Date(a)
              , c = b.getMonth()
              , e = b.getDate()
              , f = b.getHours()
              , h = b.getMinutes();
            switch (!0) {
            case d.isJapanese():
            default:
                return c + 1 + "/" + e + " " + this.toTime24(f, h);
            case d.isEnglish():
                return this.toTime12(f, h) + " " + g[c] + " " + e + " (JST)"
            }
        }
    });
    return i
});
define('model/chat/guild', ["jquery", "underscore", "backbone", "model/data", "model/token-data", "model/chat"], function(a, b, c, d, e, f) {
    var g = f.extend({
        infoModel: new (d.extend({
            urlRoot: Game.baseUri + "rest/guild/main/guild_info"
        })),
        postFormModel: new (e.extend({
            urlRoot: Game.baseUri + "guild_main/comment"
        })),
        postStampModel: new (e.extend({
            urlRoot: Game.baseUri + "guild_main/stamp"
        })),
        coopRoomLinkModel: new (e.extend({
            urlRoot: Game.baseUri + "coopraid/room_key"
        })),
        skycoopRoomLinkModel: new (e.extend({
            urlRoot: Game.baseUri + "sky/coopraid/room_key"
        })),
        initialize: function(a) {
            var b = a && a.page ? a.page : this.PAGE_DEFAULT
              , c = a && a.limit ? a.limit : this.LIMIT_DEFAULT;
            this.isGuildChannel = !0,
            this.commentListModel = new (d.extend({
                urlRoot: Game.baseUri + "guild/main/comment_list/" + b + "/" + c
            }))
        },
        jumpToCoopRoom: function(a) {
            return this.coopRoomLinkModel.set({
                room_key: a
            }).save()
        },
        jumpToSkycoopRoom: function(a) {
            return this.skycoopRoomLinkModel.set({
                room_key: a
            }).save()
        }
    });
    return g
});
define('model/chat/raid', ["jquery", "underscore", "backbone", "model/data", "model/token-data", "model/chat"], function(a, b, c, d, e, f) {
    var g = f.extend({
        infoModel: null,
        commentListModel: null,
        postFormModel: new (e.extend({
            urlRoot: Game.baseUri + "rest/multiraid/comment"
        })),
        postStampModel: new (e.extend({
            urlRoot: Game.baseUri + "rest/multiraid/stamp"
        }))
    });
    return g
});
define('model/chat/coop', ["jquery", "underscore", "backbone", "model/data", "model/token-data", "model/chat"], function(a, b, c, d, e, f) {
    var g = f.extend({
        infoModel: new (d.extend({
            urlRoot: Game.baseUri + "coopraid/room_kind_and_id"
        })),
        postFormModel: new (e.extend({
            urlRoot: Game.baseUri + "coopraid/comment"
        })),
        postStampModel: new (e.extend({
            urlRoot: Game.baseUri + "coopraid/stamp"
        })),
        initialize: function(a) {
            var b = a && a.page ? a.page : this.PAGE_DEFAULT
              , c = a && a.limit ? a.limit : this.LIMIT_DEFAULT;
            this.commentListModel = new (d.extend({
                urlRoot: Game.baseUri + "coopraid/chat_list/" + b + "/" + c
            }))
        }
    });
    return g
});
define('model/chat/lobby', ["backbone", "model/data", "model/token-data", "model/chat"], function(a, b, c, d) {
    var e = d.extend({
        postFormModel: new (c.extend({
            urlRoot: Game.baseUri + "lobby/comment"
        })),
        postStampModel: new (c.extend({
            urlRoot: Game.baseUri + "lobby/stamp"
        })),
        initialize: function(a) {
            var c = a && a.page ? a.page : this.PAGE_DEFAULT
              , d = a && a.limit ? a.limit : this.LIMIT_DEFAULT;
            this.commentListModel = new (b.extend({
                urlRoot: Game.baseUri + "lobby/chat_list/" + c + "/" + d
            }))
        }
    });
    return e
});
define('model/chat/defendorder', ["jquery", "underscore", "backbone", "model/data", "model/token-data", "model/chat"], function(a, b, c, d, e, f) {
    var g = f.extend({
        infoModel: new (d.extend({
            urlRoot: Game.baseUri + "defendorder/chat_info"
        })),
        commentListModel: new (d.extend({
            urlRoot: Game.baseUri + "defendorder/comment_list/0"
        })),
        postFormModel: new (e.extend({
            urlRoot: Game.baseUri + "defendorder/comment"
        })),
        postStampModel: new (e.extend({
            urlRoot: Game.baseUri + "defendorder/stamp"
        })),
        setLatestCommentId: function(a) {
            this.commentListModel.urlRoot = Game.baseUri + "defendorder/comment_list/" + a
        }
    });
    return g
});
define('event/arcarum001/config/config', {
    url: Game.baseUri + "arcarum001/",
    hash: "event/arcarum001/",
    bgmFileNameBase: "bgm/51_arcana_event_"
});
define('model/chat/arcarum', ["jquery", "underscore", "event/arcarum001/config/config", "backbone", "model/data", "model/token-data", "model/chat"], function(a, b, c, d, e, f, g) {
    var h = g.extend({
        infoModel: new (e.extend({
            urlRoot: c.url + "chat/chat_info"
        })),
        commentListModel: new (e.extend({
            urlRoot: c.url + "chat/comment_list/0"
        })),
        postFormModel: new (f.extend({
            urlRoot: c.url + "chat/comment"
        })),
        postStampModel: new (f.extend({
            urlRoot: c.url + "chat/stamp"
        })),
        setLatestCommentId: function(a) {
            this.commentListModel.urlRoot = c.url + "chat/comment_list/" + a
        }
    });
    return h
});
define('model/chat/semiraid', ["jquery", "underscore", "backbone", "model/data", "model/token-data", "model/chat"], function(a, b, c, d, e, f) {
    var g = f.extend({
        commentListModel: new (d.extend({
            urlRoot: Game.baseUri + "semiraid/comment_list"
        })),
        postFormModel: new (e.extend({
            urlRoot: Game.baseUri + "semiraid/comment"
        })),
        postStampModel: new (e.extend({
            urlRoot: Game.baseUri + "semiraid/stamp"
        })),
        postChatModel: new (e.extend({
            urlRoot: Game.baseUri + "semiraid/raid_chat"
        })),
        setRaidId: function(a) {
            this.raidId = a,
            this.updateCommentListModelUrlRoot()
        },
        setLatestCommentId: function(a) {
            this.latestCommentId = a,
            this.updateCommentListModelUrlRoot()
        },
        updateCommentListModelUrlRoot: function() {
            this.commentListModel.urlRoot = Game.baseUri + "semiraid/comment_list/" + this.raidId + "/" + this.latestCommentId
        }
    });
    return g
});
!function(a) {
    if ("object" == typeof exports && "undefined" != typeof module)
        module.exports = a();
    else if ("function" == typeof define && define.amd)
        define('socketio', [], a);
    else {
        var b;
        "undefined" != typeof window ? b = window : "undefined" != typeof global ? b = global : "undefined" != typeof self && (b = self),
        b.io = a()
    }
}(function() {
    var a;
    return function b(a, c, d) {
        function e(g, h) {
            if (!c[g]) {
                if (!a[g]) {
                    var i = "function" == typeof require && require;
                    if (!h && i)
                        return i(g, !0);
                    if (f)
                        return f(g, !0);
                    throw new Error("Cannot find module '" + g + "'")
                }
                var j = c[g] = {
                    exports: {}
                };
                a[g][0].call(j.exports, function(b) {
                    var c = a[g][1][b];
                    return e(c ? c : b)
                }, j, j.exports, b, a, c, d)
            }
            return c[g].exports
        }
        for (var f = "function" == typeof require && require, g = 0; g < d.length; g++)
            e(d[g]);
        return e
    }({
        1: [function(a, b, c) {
            b.exports = a("./lib/")
        }
        , {
            "./lib/": 2
        }],
        2: [function(a, b, c) {
            function d(a, b) {
                "object" == typeof a && (b = a,
                a = void 0),
                b = b || {};
                var c, d = e(a), f = d.source, j = d.id;
                return b.forceNew || b["force new connection"] || !1 === b.multiplex ? (h("ignoring socket cache for %s", f),
                c = g(f, b)) : (i[j] || (h("new io instance for %s", f),
                i[j] = g(f, b)),
                c = i[j]),
                c.socket(d.path)
            }
            var e = a("./url")
              , f = a("socket.io-parser")
              , g = a("./manager")
              , h = a("debug")("socket.io-client");
            b.exports = c = d;
            var i = c.managers = {};
            c.protocol = f.protocol,
            c.connect = d,
            c.Manager = a("./manager"),
            c.Socket = a("./socket")
        }
        , {
            "./manager": 3,
            "./socket": 5,
            "./url": 6,
            debug: 10,
            "socket.io-parser": 46
        }],
        3: [function(a, b, c) {
            function d(a, b) {
                return this instanceof d ? (a && "object" == typeof a && (b = a,
                a = void 0),
                b = b || {},
                b.path = b.path || "/socket.io",
                this.nsps = {},
                this.subs = [],
                this.opts = b,
                this.reconnection(b.reconnection !== !1),
                this.reconnectionAttempts(b.reconnectionAttempts || 1 / 0),
                this.reconnectionDelay(b.reconnectionDelay || 1e3),
                this.reconnectionDelayMax(b.reconnectionDelayMax || 5e3),
                this.randomizationFactor(b.randomizationFactor || .5),
                this.backoff = new m({
                    min: this.reconnectionDelay(),
                    max: this.reconnectionDelayMax(),
                    jitter: this.randomizationFactor()
                }),
                this.timeout(null == b.timeout ? 2e4 : b.timeout),
                this.readyState = "closed",
                this.uri = a,
                this.connected = [],
                this.encoding = !1,
                this.packetBuffer = [],
                this.encoder = new h.Encoder,
                this.decoder = new h.Decoder,
                this.autoConnect = b.autoConnect !== !1,
                void (this.autoConnect && this.open())) : new d(a,b)
            }
            var e = (a("./url"),
            a("engine.io-client"))
              , f = a("./socket")
              , g = a("component-emitter")
              , h = a("socket.io-parser")
              , i = a("./on")
              , j = a("component-bind")
              , k = (a("object-component"),
            a("debug")("socket.io-client:manager"))
              , l = a("indexof")
              , m = a("backo2");
            b.exports = d,
            d.prototype.emitAll = function() {
                this.emit.apply(this, arguments);
                for (var a in this.nsps)
                    this.nsps[a].emit.apply(this.nsps[a], arguments)
            }
            ,
            d.prototype.updateSocketIds = function() {
                for (var a in this.nsps)
                    this.nsps[a].id = this.engine.id
            }
            ,
            g(d.prototype),
            d.prototype.reconnection = function(a) {
                return arguments.length ? (this._reconnection = !!a,
                this) : this._reconnection
            }
            ,
            d.prototype.reconnectionAttempts = function(a) {
                return arguments.length ? (this._reconnectionAttempts = a,
                this) : this._reconnectionAttempts
            }
            ,
            d.prototype.reconnectionDelay = function(a) {
                return arguments.length ? (this._reconnectionDelay = a,
                this.backoff && this.backoff.setMin(a),
                this) : this._reconnectionDelay
            }
            ,
            d.prototype.randomizationFactor = function(a) {
                return arguments.length ? (this._randomizationFactor = a,
                this.backoff && this.backoff.setJitter(a),
                this) : this._randomizationFactor
            }
            ,
            d.prototype.reconnectionDelayMax = function(a) {
                return arguments.length ? (this._reconnectionDelayMax = a,
                this.backoff && this.backoff.setMax(a),
                this) : this._reconnectionDelayMax
            }
            ,
            d.prototype.timeout = function(a) {
                return arguments.length ? (this._timeout = a,
                this) : this._timeout
            }
            ,
            d.prototype.maybeReconnectOnOpen = function() {
                !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect()
            }
            ,
            d.prototype.open = d.prototype.connect = function(a) {
                if (k("readyState %s", this.readyState),
                ~this.readyState.indexOf("open"))
                    return this;
                k("opening %s", this.uri),
                this.engine = e(this.uri, this.opts);
                var b = this.engine
                  , c = this;
                this.readyState = "opening",
                this.skipReconnect = !1;
                var d = i(b, "open", function() {
                    c.onopen(),
                    a && a()
                })
                  , f = i(b, "error", function(b) {
                    if (k("connect_error"),
                    c.cleanup(),
                    c.readyState = "closed",
                    c.emitAll("connect_error", b),
                    a) {
                        var d = new Error("Connection error");
                        d.data = b,
                        a(d)
                    } else
                        c.maybeReconnectOnOpen()
                });
                if (!1 !== this._timeout) {
                    var g = this._timeout;
                    k("connect attempt will timeout after %d", g);
                    var h = setTimeout(function() {
                        k("connect attempt timed out after %d", g),
                        d.destroy(),
                        b.close(),
                        b.emit("error", "timeout"),
                        c.emitAll("connect_timeout", g)
                    }, g);
                    this.subs.push({
                        destroy: function() {
                            clearTimeout(h)
                        }
                    })
                }
                return this.subs.push(d),
                this.subs.push(f),
                this
            }
            ,
            d.prototype.onopen = function() {
                k("open"),
                this.cleanup(),
                this.readyState = "open",
                this.emit("open");
                var a = this.engine;
                this.subs.push(i(a, "data", j(this, "ondata"))),
                this.subs.push(i(this.decoder, "decoded", j(this, "ondecoded"))),
                this.subs.push(i(a, "error", j(this, "onerror"))),
                this.subs.push(i(a, "close", j(this, "onclose")))
            }
            ,
            d.prototype.ondata = function(a) {
                this.decoder.add(a)
            }
            ,
            d.prototype.ondecoded = function(a) {
                this.emit("packet", a)
            }
            ,
            d.prototype.onerror = function(a) {
                k("error", a),
                this.emitAll("error", a)
            }
            ,
            d.prototype.socket = function(a) {
                var b = this.nsps[a];
                if (!b) {
                    b = new f(this,a),
                    this.nsps[a] = b;
                    var c = this;
                    b.on("connect", function() {
                        b.id = c.engine.id,
                        ~l(c.connected, b) || c.connected.push(b)
                    })
                }
                return b
            }
            ,
            d.prototype.destroy = function(a) {
                var b = l(this.connected, a);
                ~b && this.connected.splice(b, 1),
                this.connected.length || this.close()
            }
            ,
            d.prototype.packet = function(a) {
                k("writing packet %j", a);
                var b = this;
                b.encoding ? b.packetBuffer.push(a) : (b.encoding = !0,
                this.encoder.encode(a, function(a) {
                    for (var c = 0; c < a.length; c++)
                        b.engine.write(a[c]);
                    b.encoding = !1,
                    b.processPacketQueue()
                }))
            }
            ,
            d.prototype.processPacketQueue = function() {
                if (this.packetBuffer.length > 0 && !this.encoding) {
                    var a = this.packetBuffer.shift();
                    this.packet(a)
                }
            }
            ,
            d.prototype.cleanup = function() {
                for (var a; a = this.subs.shift(); )
                    a.destroy();
                this.packetBuffer = [],
                this.encoding = !1,
                this.decoder.destroy()
            }
            ,
            d.prototype.close = d.prototype.disconnect = function() {
                this.skipReconnect = !0,
                this.backoff.reset(),
                this.readyState = "closed",
                this.engine && this.engine.close()
            }
            ,
            d.prototype.onclose = function(a) {
                k("close"),
                this.cleanup(),
                this.backoff.reset(),
                this.readyState = "closed",
                this.emit("close", a),
                this._reconnection && !this.skipReconnect && this.reconnect()
            }
            ,
            d.prototype.reconnect = function() {
                if (this.reconnecting || this.skipReconnect)
                    return this;
                var a = this;
                if (this.backoff.attempts >= this._reconnectionAttempts)
                    k("reconnect failed"),
                    this.backoff.reset(),
                    this.emitAll("reconnect_failed"),
                    this.reconnecting = !1;
                else {
                    var b = this.backoff.duration();
                    k("will wait %dms before reconnect attempt", b),
                    this.reconnecting = !0;
                    var c = setTimeout(function() {
                        a.skipReconnect || (k("attempting reconnect"),
                        a.emitAll("reconnect_attempt", a.backoff.attempts),
                        a.emitAll("reconnecting", a.backoff.attempts),
                        a.skipReconnect || a.open(function(b) {
                            b ? (k("reconnect attempt error"),
                            a.reconnecting = !1,
                            a.reconnect(),
                            a.emitAll("reconnect_error", b.data)) : (k("reconnect success"),
                            a.onreconnect())
                        }))
                    }, b);
                    this.subs.push({
                        destroy: function() {
                            clearTimeout(c)
                        }
                    })
                }
            }
            ,
            d.prototype.onreconnect = function() {
                var a = this.backoff.attempts;
                this.reconnecting = !1,
                this.backoff.reset(),
                this.updateSocketIds(),
                this.emitAll("reconnect", a)
            }
        }
        , {
            "./on": 4,
            "./socket": 5,
            "./url": 6,
            backo2: 7,
            "component-bind": 8,
            "component-emitter": 9,
            debug: 10,
            "engine.io-client": 11,
            indexof: 42,
            "object-component": 43,
            "socket.io-parser": 46
        }],
        4: [function(a, b, c) {
            function d(a, b, c) {
                return a.on(b, c),
                {
                    destroy: function() {
                        a.removeListener(b, c)
                    }
                }
            }
            b.exports = d
        }
        , {}],
        5: [function(a, b, c) {
            function d(a, b) {
                this.io = a,
                this.nsp = b,
                this.json = this,
                this.ids = 0,
                this.acks = {},
                this.io.autoConnect && this.open(),
                this.receiveBuffer = [],
                this.sendBuffer = [],
                this.connected = !1,
                this.disconnected = !0
            }
            var e = a("socket.io-parser")
              , f = a("component-emitter")
              , g = a("to-array")
              , h = a("./on")
              , i = a("component-bind")
              , j = a("debug")("socket.io-client:socket")
              , k = a("has-binary");
            b.exports = c = d;
            var l = {
                connect: 1,
                connect_error: 1,
                connect_timeout: 1,
                disconnect: 1,
                error: 1,
                reconnect: 1,
                reconnect_attempt: 1,
                reconnect_failed: 1,
                reconnect_error: 1,
                reconnecting: 1
            }
              , m = f.prototype.emit;
            f(d.prototype),
            d.prototype.subEvents = function() {
                if (!this.subs) {
                    var a = this.io;
                    this.subs = [h(a, "open", i(this, "onopen")), h(a, "packet", i(this, "onpacket")), h(a, "close", i(this, "onclose"))]
                }
            }
            ,
            d.prototype.open = d.prototype.connect = function() {
                return this.connected ? this : (this.subEvents(),
                this.io.open(),
                "open" == this.io.readyState && this.onopen(),
                this)
            }
            ,
            d.prototype.send = function() {
                var a = g(arguments);
                return a.unshift("message"),
                this.emit.apply(this, a),
                this
            }
            ,
            d.prototype.emit = function(a) {
                if (l.hasOwnProperty(a))
                    return m.apply(this, arguments),
                    this;
                var b = g(arguments)
                  , c = e.EVENT;
                k(b) && (c = e.BINARY_EVENT);
                var d = {
                    type: c,
                    data: b
                };
                return "function" == typeof b[b.length - 1] && (j("emitting packet with ack id %d", this.ids),
                this.acks[this.ids] = b.pop(),
                d.id = this.ids++),
                this.connected ? this.packet(d) : this.sendBuffer.push(d),
                this
            }
            ,
            d.prototype.packet = function(a) {
                a.nsp = this.nsp,
                this.io.packet(a)
            }
            ,
            d.prototype.onopen = function() {
                j("transport is open - connecting"),
                "/" != this.nsp && this.packet({
                    type: e.CONNECT
                })
            }
            ,
            d.prototype.onclose = function(a) {
                j("close (%s)", a),
                this.connected = !1,
                this.disconnected = !0,
                delete this.id,
                this.emit("disconnect", a)
            }
            ,
            d.prototype.onpacket = function(a) {
                if (a.nsp == this.nsp)
                    switch (a.type) {
                    case e.CONNECT:
                        this.onconnect();
                        break;
                    case e.EVENT:
                        this.onevent(a);
                        break;
                    case e.BINARY_EVENT:
                        this.onevent(a);
                        break;
                    case e.ACK:
                        this.onack(a);
                        break;
                    case e.BINARY_ACK:
                        this.onack(a);
                        break;
                    case e.DISCONNECT:
                        this.ondisconnect();
                        break;
                    case e.ERROR:
                        this.emit("error", a.data)
                    }
            }
            ,
            d.prototype.onevent = function(a) {
                var b = a.data || [];
                j("emitting event %j", b),
                null != a.id && (j("attaching ack callback to event"),
                b.push(this.ack(a.id))),
                this.connected ? m.apply(this, b) : this.receiveBuffer.push(b)
            }
            ,
            d.prototype.ack = function(a) {
                var b = this
                  , c = !1;
                return function() {
                    if (!c) {
                        c = !0;
                        var d = g(arguments);
                        j("sending ack %j", d);
                        var f = k(d) ? e.BINARY_ACK : e.ACK;
                        b.packet({
                            type: f,
                            id: a,
                            data: d
                        })
                    }
                }
            }
            ,
            d.prototype.onack = function(a) {
                j("calling ack %s with %j", a.id, a.data);
                var b = this.acks[a.id];
                b.apply(this, a.data),
                delete this.acks[a.id]
            }
            ,
            d.prototype.onconnect = function() {
                this.connected = !0,
                this.disconnected = !1,
                this.emit("connect"),
                this.emitBuffered()
            }
            ,
            d.prototype.emitBuffered = function() {
                var a;
                for (a = 0; a < this.receiveBuffer.length; a++)
                    m.apply(this, this.receiveBuffer[a]);
                for (this.receiveBuffer = [],
                a = 0; a < this.sendBuffer.length; a++)
                    this.packet(this.sendBuffer[a]);
                this.sendBuffer = []
            }
            ,
            d.prototype.ondisconnect = function() {
                j("server disconnect (%s)", this.nsp),
                this.destroy(),
                this.onclose("io server disconnect")
            }
            ,
            d.prototype.destroy = function() {
                if (this.subs) {
                    for (var a = 0; a < this.subs.length; a++)
                        this.subs[a].destroy();
                    this.subs = null
                }
                this.io.destroy(this)
            }
            ,
            d.prototype.close = d.prototype.disconnect = function() {
                return this.connected && (j("performing disconnect (%s)", this.nsp),
                this.packet({
                    type: e.DISCONNECT
                })),
                this.destroy(),
                this.connected && this.onclose("io client disconnect"),
                this
            }
        }
        , {
            "./on": 4,
            "component-bind": 8,
            "component-emitter": 9,
            debug: 10,
            "has-binary": 38,
            "socket.io-parser": 46,
            "to-array": 50
        }],
        6: [function(a, b, c) {
            (function(c) {
                function d(a, b) {
                    var d = a
                      , b = b || c.location;
                    return null == a && (a = b.protocol + "//" + b.host),
                    "string" == typeof a && ("/" == a.charAt(0) && (a = "/" == a.charAt(1) ? b.protocol + a : b.hostname + a),
                    /^(https?|wss?):\/\//.test(a) || (f("protocol-less url %s", a),
                    a = "undefined" != typeof b ? b.protocol + "//" + a : "https://" + a),
                    f("parse %s", a),
                    d = e(a)),
                    d.port || (/^(http|ws)$/.test(d.protocol) ? d.port = "80" : /^(http|ws)s$/.test(d.protocol) && (d.port = "443")),
                    d.path = d.path || "/",
                    d.id = d.protocol + "://" + d.host + ":" + d.port,
                    d.href = d.protocol + "://" + d.host + (b && b.port == d.port ? "" : ":" + d.port),
                    d
                }
                var e = a("parseuri")
                  , f = a("debug")("socket.io-client:url");
                b.exports = d
            }
            ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        , {
            debug: 10,
            parseuri: 44
        }],
        7: [function(a, b, c) {
            function d(a) {
                a = a || {},
                this.ms = a.min || 100,
                this.max = a.max || 1e4,
                this.factor = a.factor || 2,
                this.jitter = a.jitter > 0 && a.jitter <= 1 ? a.jitter : 0,
                this.attempts = 0
            }
            b.exports = d,
            d.prototype.duration = function() {
                var a = this.ms * Math.pow(this.factor, this.attempts++);
                if (this.jitter) {
                    var b = Math.random()
                      , c = Math.floor(b * this.jitter * a);
                    a = 0 == (1 & Math.floor(10 * b)) ? a - c : a + c
                }
                return 0 | Math.min(a, this.max)
            }
            ,
            d.prototype.reset = function() {
                this.attempts = 0
            }
            ,
            d.prototype.setMin = function(a) {
                this.ms = a
            }
            ,
            d.prototype.setMax = function(a) {
                this.max = a
            }
            ,
            d.prototype.setJitter = function(a) {
                this.jitter = a
            }
        }
        , {}],
        8: [function(a, b, c) {
            var d = [].slice;
            b.exports = function(a, b) {
                if ("string" == typeof b && (b = a[b]),
                "function" != typeof b)
                    throw new Error("bind() requires a function");
                var c = d.call(arguments, 2);
                return function() {
                    return b.apply(a, c.concat(d.call(arguments)))
                }
            }
        }
        , {}],
        9: [function(a, b, c) {
            function d(a) {
                return a ? e(a) : void 0
            }
            function e(a) {
                for (var b in d.prototype)
                    a[b] = d.prototype[b];
                return a
            }
            b.exports = d,
            d.prototype.on = d.prototype.addEventListener = function(a, b) {
                return this._callbacks = this._callbacks || {},
                (this._callbacks[a] = this._callbacks[a] || []).push(b),
                this
            }
            ,
            d.prototype.once = function(a, b) {
                function c() {
                    d.off(a, c),
                    b.apply(this, arguments)
                }
                var d = this;
                return this._callbacks = this._callbacks || {},
                c.fn = b,
                this.on(a, c),
                this
            }
            ,
            d.prototype.off = d.prototype.removeListener = d.prototype.removeAllListeners = d.prototype.removeEventListener = function(a, b) {
                if (this._callbacks = this._callbacks || {},
                0 == arguments.length)
                    return this._callbacks = {},
                    this;
                var c = this._callbacks[a];
                if (!c)
                    return this;
                if (1 == arguments.length)
                    return delete this._callbacks[a],
                    this;
                for (var d, e = 0; e < c.length; e++)
                    if (d = c[e],
                    d === b || d.fn === b) {
                        c.splice(e, 1);
                        break
                    }
                return this
            }
            ,
            d.prototype.emit = function(a) {
                this._callbacks = this._callbacks || {};
                var b = [].slice.call(arguments, 1)
                  , c = this._callbacks[a];
                if (c) {
                    c = c.slice(0);
                    for (var d = 0, e = c.length; e > d; ++d)
                        c[d].apply(this, b)
                }
                return this
            }
            ,
            d.prototype.listeners = function(a) {
                return this._callbacks = this._callbacks || {},
                this._callbacks[a] || []
            }
            ,
            d.prototype.hasListeners = function(a) {
                return !!this.listeners(a).length
            }
        }
        , {}],
        10: [function(a, b, c) {
            function d(a) {
                return d.enabled(a) ? function(b) {
                    b = e(b);
                    var c = new Date
                      , f = c - (d[a] || c);
                    d[a] = c,
                    b = a + " " + b + " +" + d.humanize(f),
                    window.console && console.log && Function.prototype.apply.call(console.log, console, arguments)
                }
                : function() {}
            }
            function e(a) {
                return a instanceof Error ? a.stack || a.message : a
            }
            b.exports = d,
            d.names = [],
            d.skips = [],
            d.enable = function(a) {
                try {
                    localStorage.debug = a
                } catch (b) {}
                for (var c = (a || "").split(/[\s,]+/), e = c.length, f = 0; e > f; f++)
                    a = c[f].replace("*", ".*?"),
                    "-" === a[0] ? d.skips.push(new RegExp("^" + a.substr(1) + "$")) : d.names.push(new RegExp("^" + a + "$"))
            }
            ,
            d.disable = function() {
                d.enable("")
            }
            ,
            d.humanize = function(a) {
                var b = 1e3
                  , c = 6e4
                  , d = 60 * c;
                return a >= d ? (a / d).toFixed(1) + "h" : a >= c ? (a / c).toFixed(1) + "m" : a >= b ? (a / b | 0) + "s" : a + "ms"
            }
            ,
            d.enabled = function(a) {
                for (var b = 0, c = d.skips.length; c > b; b++)
                    if (d.skips[b].test(a))
                        return !1;
                for (var b = 0, c = d.names.length; c > b; b++)
                    if (d.names[b].test(a))
                        return !0;
                return !1
            }
            ;
            try {
                window.localStorage && d.enable(localStorage.debug)
            } catch (f) {}
        }
        , {}],
        11: [function(a, b, c) {
            b.exports = a("./lib/")
        }
        , {
            "./lib/": 12
        }],
        12: [function(a, b, c) {
            b.exports = a("./socket"),
            b.exports.parser = a("engine.io-parser")
        }
        , {
            "./socket": 13,
            "engine.io-parser": 25
        }],
        13: [function(a, b, c) {
            (function(c) {
                function d(a, b) {
                    if (!(this instanceof d))
                        return new d(a,b);
                    if (b = b || {},
                    a && "object" == typeof a && (b = a,
                    a = null),
                    a && (a = k(a),
                    b.host = a.host,
                    b.secure = "https" == a.protocol || "wss" == a.protocol,
                    b.port = a.port,
                    a.query && (b.query = a.query)),
                    this.secure = null != b.secure ? b.secure : c.location && "https:" == location.protocol,
                    b.host) {
                        var e = b.host.split(":");
                        b.hostname = e.shift(),
                        e.length ? b.port = e.pop() : b.port || (b.port = this.secure ? "443" : "80")
                    }
                    this.agent = b.agent || !1,
                    this.hostname = b.hostname || (c.location ? location.hostname : "localhost"),
                    this.port = b.port || (c.location && location.port ? location.port : this.secure ? 443 : 80),
                    this.query = b.query || {},
                    "string" == typeof this.query && (this.query = m.decode(this.query)),
                    this.upgrade = !1 !== b.upgrade,
                    this.path = (b.path || "/engine.io").replace(/\/$/, "") + "/",
                    this.forceJSONP = !!b.forceJSONP,
                    this.jsonp = !1 !== b.jsonp,
                    this.forceBase64 = !!b.forceBase64,
                    this.enablesXDR = !!b.enablesXDR,
                    this.timestampParam = b.timestampParam || "t",
                    this.timestampRequests = b.timestampRequests,
                    this.transports = b.transports || ["polling", "websocket"],
                    this.readyState = "",
                    this.writeBuffer = [],
                    this.callbackBuffer = [],
                    this.policyPort = b.policyPort || 843,
                    this.rememberUpgrade = b.rememberUpgrade || !1,
                    this.binaryType = null,
                    this.onlyBinaryUpgrades = b.onlyBinaryUpgrades,
                    this.pfx = b.pfx || null,
                    this.key = b.key || null,
                    this.passphrase = b.passphrase || null,
                    this.cert = b.cert || null,
                    this.ca = b.ca || null,
                    this.ciphers = b.ciphers || null,
                    this.rejectUnauthorized = b.rejectUnauthorized || null,
                    this.open()
                }
                function e(a) {
                    var b = {};
                    for (var c in a)
                        a.hasOwnProperty(c) && (b[c] = a[c]);
                    return b
                }
                var f = a("./transports")
                  , g = a("component-emitter")
                  , h = a("debug")("engine.io-client:socket")
                  , i = a("indexof")
                  , j = a("engine.io-parser")
                  , k = a("parseuri")
                  , l = a("parsejson")
                  , m = a("parseqs");
                b.exports = d,
                d.priorWebsocketSuccess = !1,
                g(d.prototype),
                d.protocol = j.protocol,
                d.Socket = d,
                d.Transport = a("./transport"),
                d.transports = a("./transports"),
                d.parser = a("engine.io-parser"),
                d.prototype.createTransport = function(a) {
                    h('creating transport "%s"', a);
                    var b = e(this.query);
                    b.EIO = j.protocol,
                    b.transport = a,
                    this.id && (b.sid = this.id);
                    var c = new f[a]({
                        agent: this.agent,
                        hostname: this.hostname,
                        port: this.port,
                        secure: this.secure,
                        path: this.path,
                        query: b,
                        forceJSONP: this.forceJSONP,
                        jsonp: this.jsonp,
                        forceBase64: this.forceBase64,
                        enablesXDR: this.enablesXDR,
                        timestampRequests: this.timestampRequests,
                        timestampParam: this.timestampParam,
                        policyPort: this.policyPort,
                        socket: this,
                        pfx: this.pfx,
                        key: this.key,
                        passphrase: this.passphrase,
                        cert: this.cert,
                        ca: this.ca,
                        ciphers: this.ciphers,
                        rejectUnauthorized: this.rejectUnauthorized
                    });
                    return c
                }
                ,
                d.prototype.open = function() {
                    var a;
                    if (this.rememberUpgrade && d.priorWebsocketSuccess && -1 != this.transports.indexOf("websocket"))
                        a = "websocket";
                    else {
                        if (0 == this.transports.length) {
                            var b = this;
                            return void setTimeout(function() {
                                b.emit("error", "No transports available")
                            }, 0)
                        }
                        a = this.transports[0]
                    }
                    this.readyState = "opening";
                    var a;
                    try {
                        a = this.createTransport(a)
                    } catch (c) {
                        return this.transports.shift(),
                        void this.open()
                    }
                    a.open(),
                    this.setTransport(a)
                }
                ,
                d.prototype.setTransport = function(a) {
                    h("setting transport %s", a.name);
                    var b = this;
                    this.transport && (h("clearing existing transport %s", this.transport.name),
                    this.transport.removeAllListeners()),
                    this.transport = a,
                    a.on("drain", function() {
                        b.onDrain()
                    }).on("packet", function(a) {
                        b.onPacket(a)
                    }).on("error", function(a) {
                        b.onError(a)
                    }).on("close", function() {
                        b.onClose("transport close")
                    })
                }
                ,
                d.prototype.probe = function(a) {
                    function b() {
                        if (m.onlyBinaryUpgrades) {
                            var b = !this.supportsBinary && m.transport.supportsBinary;
                            l = l || b
                        }
                        l || (h('probe transport "%s" opened', a),
                        k.send([{
                            type: "ping",
                            data: "probe"
                        }]),
                        k.once("packet", function(b) {
                            if (!l)
                                if ("pong" == b.type && "probe" == b.data) {
                                    if (h('probe transport "%s" pong', a),
                                    m.upgrading = !0,
                                    m.emit("upgrading", k),
                                    !k)
                                        return;
                                    d.priorWebsocketSuccess = "websocket" == k.name,
                                    h('pausing current transport "%s"', m.transport.name),
                                    m.transport.pause(function() {
                                        l || "closed" != m.readyState && (h("changing transport and sending upgrade packet"),
                                        j(),
                                        m.setTransport(k),
                                        k.send([{
                                            type: "upgrade"
                                        }]),
                                        m.emit("upgrade", k),
                                        k = null,
                                        m.upgrading = !1,
                                        m.flush())
                                    })
                                } else {
                                    h('probe transport "%s" failed', a);
                                    var c = new Error("probe error");
                                    c.transport = k.name,
                                    m.emit("upgradeError", c)
                                }
                        }))
                    }
                    function c() {
                        l || (l = !0,
                        j(),
                        k.close(),
                        k = null)
                    }
                    function e(b) {
                        var d = new Error("probe error: " + b);
                        d.transport = k.name,
                        c(),
                        h('probe transport "%s" failed because of error: %s', a, b),
                        m.emit("upgradeError", d)
                    }
                    function f() {
                        e("transport closed")
                    }
                    function g() {
                        e("socket closed")
                    }
                    function i(a) {
                        k && a.name != k.name && (h('"%s" works - aborting "%s"', a.name, k.name),
                        c())
                    }
                    function j() {
                        k.removeListener("open", b),
                        k.removeListener("error", e),
                        k.removeListener("close", f),
                        m.removeListener("close", g),
                        m.removeListener("upgrading", i)
                    }
                    h('probing transport "%s"', a);
                    var k = this.createTransport(a, {
                        probe: 1
                    })
                      , l = !1
                      , m = this;
                    d.priorWebsocketSuccess = !1,
                    k.once("open", b),
                    k.once("error", e),
                    k.once("close", f),
                    this.once("close", g),
                    this.once("upgrading", i),
                    k.open()
                }
                ,
                d.prototype.onOpen = function() {
                    if (h("socket open"),
                    this.readyState = "open",
                    d.priorWebsocketSuccess = "websocket" == this.transport.name,
                    this.emit("open"),
                    this.flush(),
                    "open" == this.readyState && this.upgrade && this.transport.pause) {
                        h("starting upgrade probes");
                        for (var a = 0, b = this.upgrades.length; b > a; a++)
                            this.probe(this.upgrades[a])
                    }
                }
                ,
                d.prototype.onPacket = function(a) {
                    if ("opening" == this.readyState || "open" == this.readyState)
                        switch (h('socket receive: type "%s", data "%s"', a.type, a.data),
                        this.emit("packet", a),
                        this.emit("heartbeat"),
                        a.type) {
                        case "open":
                            this.onHandshake(l(a.data));
                            break;
                        case "pong":
                            this.setPing();
                            break;
                        case "error":
                            var b = new Error("server error");
                            b.code = a.data,
                            this.emit("error", b);
                            break;
                        case "message":
                            this.emit("data", a.data),
                            this.emit("message", a.data)
                        }
                    else
                        h('packet received with socket readyState "%s"', this.readyState)
                }
                ,
                d.prototype.onHandshake = function(a) {
                    this.emit("handshake", a),
                    this.id = a.sid,
                    this.transport.query.sid = a.sid,
                    this.upgrades = this.filterUpgrades(a.upgrades),
                    this.pingInterval = a.pingInterval,
                    this.pingTimeout = a.pingTimeout,
                    this.onOpen(),
                    "closed" != this.readyState && (this.setPing(),
                    this.removeListener("heartbeat", this.onHeartbeat),
                    this.on("heartbeat", this.onHeartbeat))
                }
                ,
                d.prototype.onHeartbeat = function(a) {
                    clearTimeout(this.pingTimeoutTimer);
                    var b = this;
                    b.pingTimeoutTimer = setTimeout(function() {
                        "closed" != b.readyState && b.onClose("ping timeout")
                    }, a || b.pingInterval + b.pingTimeout)
                }
                ,
                d.prototype.setPing = function() {
                    var a = this;
                    clearTimeout(a.pingIntervalTimer),
                    a.pingIntervalTimer = setTimeout(function() {
                        h("writing ping packet - expecting pong within %sms", a.pingTimeout),
                        a.ping(),
                        a.onHeartbeat(a.pingTimeout)
                    }, a.pingInterval)
                }
                ,
                d.prototype.ping = function() {
                    this.sendPacket("ping")
                }
                ,
                d.prototype.onDrain = function() {
                    for (var a = 0; a < this.prevBufferLen; a++)
                        this.callbackBuffer[a] && this.callbackBuffer[a]();
                    this.writeBuffer.splice(0, this.prevBufferLen),
                    this.callbackBuffer.splice(0, this.prevBufferLen),
                    this.prevBufferLen = 0,
                    0 == this.writeBuffer.length ? this.emit("drain") : this.flush()
                }
                ,
                d.prototype.flush = function() {
                    "closed" != this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (h("flushing %d packets in socket", this.writeBuffer.length),
                    this.transport.send(this.writeBuffer),
                    this.prevBufferLen = this.writeBuffer.length,
                    this.emit("flush"))
                }
                ,
                d.prototype.write = d.prototype.send = function(a, b) {
                    return this.sendPacket("message", a, b),
                    this
                }
                ,
                d.prototype.sendPacket = function(a, b, c) {
                    if ("closing" != this.readyState && "closed" != this.readyState) {
                        var d = {
                            type: a,
                            data: b
                        };
                        this.emit("packetCreate", d),
                        this.writeBuffer.push(d),
                        this.callbackBuffer.push(c),
                        this.flush()
                    }
                }
                ,
                d.prototype.close = function() {
                    function a() {
                        d.onClose("forced close"),
                        h("socket closing - telling transport to close"),
                        d.transport.close()
                    }
                    function b() {
                        d.removeListener("upgrade", b),
                        d.removeListener("upgradeError", b),
                        a()
                    }
                    function c() {
                        d.once("upgrade", b),
                        d.once("upgradeError", b)
                    }
                    if ("opening" == this.readyState || "open" == this.readyState) {
                        this.readyState = "closing";
                        var d = this;
                        this.writeBuffer.length ? this.once("drain", function() {
                            this.upgrading ? c() : a()
                        }) : this.upgrading ? c() : a()
                    }
                    return this
                }
                ,
                d.prototype.onError = function(a) {
                    h("socket error %j", a),
                    d.priorWebsocketSuccess = !1,
                    this.emit("error", a),
                    this.onClose("transport error", a)
                }
                ,
                d.prototype.onClose = function(a, b) {
                    if ("opening" == this.readyState || "open" == this.readyState || "closing" == this.readyState) {
                        h('socket close with reason: "%s"', a);
                        var c = this;
                        clearTimeout(this.pingIntervalTimer),
                        clearTimeout(this.pingTimeoutTimer),
                        setTimeout(function() {
                            c.writeBuffer = [],
                            c.callbackBuffer = [],
                            c.prevBufferLen = 0
                        }, 0),
                        this.transport.removeAllListeners("close"),
                        this.transport.close(),
                        this.transport.removeAllListeners(),
                        this.readyState = "closed",
                        this.id = null,
                        this.emit("close", a, b)
                    }
                }
                ,
                d.prototype.filterUpgrades = function(a) {
                    for (var b = [], c = 0, d = a.length; d > c; c++)
                        ~i(this.transports, a[c]) && b.push(a[c]);
                    return b
                }
            }
            ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        , {
            "./transport": 14,
            "./transports": 15,
            "component-emitter": 9,
            debug: 22,
            "engine.io-parser": 25,
            indexof: 42,
            parsejson: 34,
            parseqs: 35,
            parseuri: 36
        }],
        14: [function(a, b, c) {
            function d(a) {
                this.path = a.path,
                this.hostname = a.hostname,
                this.port = a.port,
                this.secure = a.secure,
                this.query = a.query,
                this.timestampParam = a.timestampParam,
                this.timestampRequests = a.timestampRequests,
                this.readyState = "",
                this.agent = a.agent || !1,
                this.socket = a.socket,
                this.enablesXDR = a.enablesXDR,
                this.pfx = a.pfx,
                this.key = a.key,
                this.passphrase = a.passphrase,
                this.cert = a.cert,
                this.ca = a.ca,
                this.ciphers = a.ciphers,
                this.rejectUnauthorized = a.rejectUnauthorized
            }
            var e = a("engine.io-parser")
              , f = a("component-emitter");
            b.exports = d,
            f(d.prototype),
            d.timestamps = 0,
            d.prototype.onError = function(a, b) {
                var c = new Error(a);
                return c.type = "TransportError",
                c.description = b,
                this.emit("error", c),
                this
            }
            ,
            d.prototype.open = function() {
                return ("closed" == this.readyState || "" == this.readyState) && (this.readyState = "opening",
                this.doOpen()),
                this
            }
            ,
            d.prototype.close = function() {
                return ("opening" == this.readyState || "open" == this.readyState) && (this.doClose(),
                this.onClose()),
                this
            }
            ,
            d.prototype.send = function(a) {
                if ("open" != this.readyState)
                    throw new Error("Transport not open");
                this.write(a)
            }
            ,
            d.prototype.onOpen = function() {
                this.readyState = "open",
                this.writable = !0,
                this.emit("open")
            }
            ,
            d.prototype.onData = function(a) {
                var b = e.decodePacket(a, this.socket.binaryType);
                this.onPacket(b)
            }
            ,
            d.prototype.onPacket = function(a) {
                this.emit("packet", a)
            }
            ,
            d.prototype.onClose = function() {
                this.readyState = "closed",
                this.emit("close")
            }
        }
        , {
            "component-emitter": 9,
            "engine.io-parser": 25
        }],
        15: [function(a, b, c) {
            (function(b) {
                function d(a) {
                    var c, d = !1, h = !1, i = !1 !== a.jsonp;
                    if (b.location) {
                        var j = "https:" == location.protocol
                          , k = location.port;
                        k || (k = j ? 443 : 80),
                        d = a.hostname != location.hostname || k != a.port,
                        h = a.secure != j
                    }
                    if (a.xdomain = d,
                    a.xscheme = h,
                    c = new e(a),
                    "open"in c && !a.forceJSONP)
                        return new f(a);
                    if (!i)
                        throw new Error("JSONP disabled");
                    return new g(a)
                }
                var e = a("xmlhttprequest")
                  , f = a("./polling-xhr")
                  , g = a("./polling-jsonp")
                  , h = a("./websocket");
                c.polling = d,
                c.websocket = h
            }
            ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        , {
            "./polling-jsonp": 16,
            "./polling-xhr": 17,
            "./websocket": 19,
            xmlhttprequest: 20
        }],
        16: [function(a, b, c) {
            (function(c) {
                function d() {}
                function e(a) {
                    f.call(this, a),
                    this.query = this.query || {},
                    h || (c.___eio || (c.___eio = []),
                    h = c.___eio),
                    this.index = h.length;
                    var b = this;
                    h.push(function(a) {
                        b.onData(a)
                    }),
                    this.query.j = this.index,
                    c.document && c.addEventListener && c.addEventListener("beforeunload", function() {
                        b.script && (b.script.onerror = d)
                    }, !1)
                }
                var f = a("./polling")
                  , g = a("component-inherit");
                b.exports = e;
                var h, i = /\n/g, j = /\\n/g;
                g(e, f),
                e.prototype.supportsBinary = !1,
                e.prototype.doClose = function() {
                    this.script && (this.script.parentNode.removeChild(this.script),
                    this.script = null),
                    this.form && (this.form.parentNode.removeChild(this.form),
                    this.form = null,
                    this.iframe = null),
                    f.prototype.doClose.call(this)
                }
                ,
                e.prototype.doPoll = function() {
                    var a = this
                      , b = document.createElement("script");
                    this.script && (this.script.parentNode.removeChild(this.script),
                    this.script = null),
                    b.async = !0,
                    b.src = this.uri(),
                    b.onerror = function(b) {
                        a.onError("jsonp poll error", b)
                    }
                    ;
                    var c = document.getElementsByTagName("script")[0];
                    c.parentNode.insertBefore(b, c),
                    this.script = b;
                    var d = "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent);
                    d && setTimeout(function() {
                        var a = document.createElement("iframe");
                        document.body.appendChild(a),
                        document.body.removeChild(a)
                    }, 100)
                }
                ,
                e.prototype.doWrite = function(a, b) {
                    function c() {
                        d(),
                        b()
                    }
                    function d() {
                        if (e.iframe)
                            try {
                                e.form.removeChild(e.iframe)
                            } catch (a) {
                                e.onError("jsonp polling iframe removal error", a)
                            }
                        try {
                            var b = '<iframe src="javascript:0" name="' + e.iframeId + '">';
                            f = document.createElement(b)
                        } catch (a) {
                            f = document.createElement("iframe"),
                            f.name = e.iframeId,
                            f.src = "javascript:0"
                        }
                        f.id = e.iframeId,
                        e.form.appendChild(f),
                        e.iframe = f
                    }
                    var e = this;
                    if (!this.form) {
                        var f, g = document.createElement("form"), h = document.createElement("textarea"), k = this.iframeId = "eio_iframe_" + this.index;
                        g.className = "socketio",
                        g.style.position = "absolute",
                        g.style.top = "-1000px",
                        g.style.left = "-1000px",
                        g.target = k,
                        g.method = "POST",
                        g.setAttribute("accept-charset", "utf-8"),
                        h.name = "d",
                        g.appendChild(h),
                        document.body.appendChild(g),
                        this.form = g,
                        this.area = h
                    }
                    this.form.action = this.uri(),
                    d(),
                    a = a.replace(j, "\\\n"),
                    this.area.value = a.replace(i, "\\n");
                    try {
                        this.form.submit()
                    } catch (l) {}
                    this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
                        "complete" == e.iframe.readyState && c()
                    }
                    : this.iframe.onload = c
                }
            }
            ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        , {
            "./polling": 18,
            "component-inherit": 21
        }],
        17: [function(a, b, c) {
            (function(c) {
                function d() {}
                function e(a) {
                    if (i.call(this, a),
                    c.location) {
                        var b = "https:" == location.protocol
                          , d = location.port;
                        d || (d = b ? 443 : 80),
                        this.xd = a.hostname != c.location.hostname || d != a.port,
                        this.xs = a.secure != b
                    }
                }
                function f(a) {
                    this.method = a.method || "GET",
                    this.uri = a.uri,
                    this.xd = !!a.xd,
                    this.xs = !!a.xs,
                    this.async = !1 !== a.async,
                    this.data = void 0 != a.data ? a.data : null,
                    this.agent = a.agent,
                    this.isBinary = a.isBinary,
                    this.supportsBinary = a.supportsBinary,
                    this.enablesXDR = a.enablesXDR,
                    this.pfx = a.pfx,
                    this.key = a.key,
                    this.passphrase = a.passphrase,
                    this.cert = a.cert,
                    this.ca = a.ca,
                    this.ciphers = a.ciphers,
                    this.rejectUnauthorized = a.rejectUnauthorized,
                    this.create()
                }
                function g() {
                    for (var a in f.requests)
                        f.requests.hasOwnProperty(a) && f.requests[a].abort()
                }
                var h = a("xmlhttprequest")
                  , i = a("./polling")
                  , j = a("component-emitter")
                  , k = a("component-inherit")
                  , l = a("debug")("engine.io-client:polling-xhr");
                b.exports = e,
                b.exports.Request = f,
                k(e, i),
                e.prototype.supportsBinary = !0,
                e.prototype.request = function(a) {
                    return a = a || {},
                    a.uri = this.uri(),
                    a.xd = this.xd,
                    a.xs = this.xs,
                    a.agent = this.agent || !1,
                    a.supportsBinary = this.supportsBinary,
                    a.enablesXDR = this.enablesXDR,
                    a.pfx = this.pfx,
                    a.key = this.key,
                    a.passphrase = this.passphrase,
                    a.cert = this.cert,
                    a.ca = this.ca,
                    a.ciphers = this.ciphers,
                    a.rejectUnauthorized = this.rejectUnauthorized,
                    new f(a)
                }
                ,
                e.prototype.doWrite = function(a, b) {
                    var c = "string" != typeof a && void 0 !== a
                      , d = this.request({
                        method: "POST",
                        data: a,
                        isBinary: c
                    })
                      , e = this;
                    d.on("success", b),
                    d.on("error", function(a) {
                        e.onError("xhr post error", a)
                    }),
                    this.sendXhr = d
                }
                ,
                e.prototype.doPoll = function() {
                    l("xhr poll");
                    var a = this.request()
                      , b = this;
                    a.on("data", function(a) {
                        b.onData(a)
                    }),
                    a.on("error", function(a) {
                        b.onError("xhr poll error", a)
                    }),
                    this.pollXhr = a
                }
                ,
                j(f.prototype),
                f.prototype.create = function() {
                    var a = {
                        agent: this.agent,
                        xdomain: this.xd,
                        xscheme: this.xs,
                        enablesXDR: this.enablesXDR
                    };
                    a.pfx = this.pfx,
                    a.key = this.key,
                    a.passphrase = this.passphrase,
                    a.cert = this.cert,
                    a.ca = this.ca,
                    a.ciphers = this.ciphers,
                    a.rejectUnauthorized = this.rejectUnauthorized;
                    var b = this.xhr = new h(a)
                      , d = this;
                    try {
                        if (l("xhr open %s: %s", this.method, this.uri),
                        b.open(this.method, this.uri, this.async),
                        this.supportsBinary && (b.responseType = "arraybuffer"),
                        "POST" == this.method)
                            try {
                                this.isBinary ? b.setRequestHeader("Content-type", "application/octet-stream") : b.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                            } catch (e) {}
                        "withCredentials"in b && (b.withCredentials = !0),
                        this.hasXDR() ? (b.onload = function() {
                            d.onLoad()
                        }
                        ,
                        b.onerror = function() {
                            d.onError(b.responseText)
                        }
                        ) : b.onreadystatechange = function() {
                            4 == b.readyState && (200 == b.status || 1223 == b.status ? d.onLoad() : setTimeout(function() {
                                d.onError(b.status)
                            }, 0))
                        }
                        ,
                        l("xhr data %s", this.data),
                        b.send(this.data)
                    } catch (e) {
                        return void setTimeout(function() {
                            d.onError(e)
                        }, 0)
                    }
                    c.document && (this.index = f.requestsCount++,
                    f.requests[this.index] = this)
                }
                ,
                f.prototype.onSuccess = function() {
                    this.emit("success"),
                    this.cleanup()
                }
                ,
                f.prototype.onData = function(a) {
                    this.emit("data", a),
                    this.onSuccess()
                }
                ,
                f.prototype.onError = function(a) {
                    this.emit("error", a),
                    this.cleanup(!0)
                }
                ,
                f.prototype.cleanup = function(a) {
                    if ("undefined" != typeof this.xhr && null !== this.xhr) {
                        if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = d : this.xhr.onreadystatechange = d,
                        a)
                            try {
                                this.xhr.abort()
                            } catch (b) {}
                        c.document && delete f.requests[this.index],
                        this.xhr = null
                    }
                }
                ,
                f.prototype.onLoad = function() {
                    var a;
                    try {
                        var b;
                        try {
                            b = this.xhr.getResponseHeader("Content-Type").split(";")[0]
                        } catch (c) {}
                        a = "application/octet-stream" === b ? this.xhr.response : this.supportsBinary ? "ok" : this.xhr.responseText
                    } catch (c) {
                        this.onError(c)
                    }
                    null != a && this.onData(a)
                }
                ,
                f.prototype.hasXDR = function() {
                    return "undefined" != typeof c.XDomainRequest && !this.xs && this.enablesXDR
                }
                ,
                f.prototype.abort = function() {
                    this.cleanup()
                }
                ,
                c.document && (f.requestsCount = 0,
                f.requests = {},
                c.attachEvent ? c.attachEvent("onunload", g) : c.addEventListener && c.addEventListener("beforeunload", g, !1))
            }
            ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        , {
            "./polling": 18,
            "component-emitter": 9,
            "component-inherit": 21,
            debug: 22,
            xmlhttprequest: 20
        }],
        18: [function(a, b, c) {
            function d(a) {
                var b = a && a.forceBase64;
                (!j || b) && (this.supportsBinary = !1),
                e.call(this, a)
            }
            var e = a("../transport")
              , f = a("parseqs")
              , g = a("engine.io-parser")
              , h = a("component-inherit")
              , i = a("debug")("engine.io-client:polling");
            b.exports = d;
            var j = function() {
                var b = a("xmlhttprequest")
                  , c = new b({
                    xdomain: !1
                });
                return null != c.responseType
            }();
            h(d, e),
            d.prototype.name = "polling",
            d.prototype.doOpen = function() {
                this.poll()
            }
            ,
            d.prototype.pause = function(a) {
                function b() {
                    i("paused"),
                    c.readyState = "paused",
                    a()
                }
                var c = this;
                if (this.readyState = "pausing",
                this.polling || !this.writable) {
                    var d = 0;
                    this.polling && (i("we are currently polling - waiting to pause"),
                    d++,
                    this.once("pollComplete", function() {
                        i("pre-pause polling complete"),
                        --d || b()
                    })),
                    this.writable || (i("we are currently writing - waiting to pause"),
                    d++,
                    this.once("drain", function() {
                        i("pre-pause writing complete"),
                        --d || b()
                    }))
                } else
                    b()
            }
            ,
            d.prototype.poll = function() {
                i("polling"),
                this.polling = !0,
                this.doPoll(),
                this.emit("poll")
            }
            ,
            d.prototype.onData = function(a) {
                var b = this;
                i("polling got data %s", a);
                var c = function(a, c, d) {
                    return "opening" == b.readyState && b.onOpen(),
                    "close" == a.type ? (b.onClose(),
                    !1) : void b.onPacket(a)
                };
                g.decodePayload(a, this.socket.binaryType, c),
                "closed" != this.readyState && (this.polling = !1,
                this.emit("pollComplete"),
                "open" == this.readyState ? this.poll() : i('ignoring poll - transport state "%s"', this.readyState))
            }
            ,
            d.prototype.doClose = function() {
                function a() {
                    i("writing close packet"),
                    b.write([{
                        type: "close"
                    }])
                }
                var b = this;
                "open" == this.readyState ? (i("transport open - closing"),
                a()) : (i("transport not open - deferring close"),
                this.once("open", a))
            }
            ,
            d.prototype.write = function(a) {
                var b = this;
                this.writable = !1;
                var c = function() {
                    b.writable = !0,
                    b.emit("drain")
                }
                  , b = this;
                g.encodePayload(a, this.supportsBinary, function(a) {
                    b.doWrite(a, c)
                })
            }
            ,
            d.prototype.uri = function() {
                var a = this.query || {}
                  , b = this.secure ? "https" : "http"
                  , c = "";
                return !1 !== this.timestampRequests && (a[this.timestampParam] = +new Date + "-" + e.timestamps++),
                this.supportsBinary || a.sid || (a.b64 = 1),
                a = f.encode(a),
                this.port && ("https" == b && 443 != this.port || "http" == b && 80 != this.port) && (c = ":" + this.port),
                a.length && (a = "?" + a),
                b + "://" + this.hostname + c + this.path + a
            }
        }
        , {
            "../transport": 14,
            "component-inherit": 21,
            debug: 22,
            "engine.io-parser": 25,
            parseqs: 35,
            xmlhttprequest: 20
        }],
        19: [function(a, b, c) {
            function d(a) {
                var b = a && a.forceBase64;
                b && (this.supportsBinary = !1),
                e.call(this, a)
            }
            var e = a("../transport")
              , f = a("engine.io-parser")
              , g = a("parseqs")
              , h = a("component-inherit")
              , i = a("debug")("engine.io-client:websocket")
              , j = a("ws");
            b.exports = d,
            h(d, e),
            d.prototype.name = "websocket",
            d.prototype.supportsBinary = !0,
            d.prototype.doOpen = function() {
                if (this.check()) {
                    var a = this.uri()
                      , b = void 0
                      , c = {
                        agent: this.agent
                    };
                    c.pfx = this.pfx,
                    c.key = this.key,
                    c.passphrase = this.passphrase,
                    c.cert = this.cert,
                    c.ca = this.ca,
                    c.ciphers = this.ciphers,
                    c.rejectUnauthorized = this.rejectUnauthorized,
                    this.ws = new j(a,b,c),
                    void 0 === this.ws.binaryType && (this.supportsBinary = !1),
                    this.ws.binaryType = "arraybuffer",
                    this.addEventListeners()
                }
            }
            ,
            d.prototype.addEventListeners = function() {
                var a = this;
                this.ws.onopen = function() {
                    a.onOpen()
                }
                ,
                this.ws.onclose = function() {
                    a.onClose()
                }
                ,
                this.ws.onmessage = function(b) {
                    a.onData(b.data)
                }
                ,
                this.ws.onerror = function(b) {
                    a.onError("websocket error", b)
                }
            }
            ,
            "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent) && (d.prototype.onData = function(a) {
                var b = this;
                setTimeout(function() {
                    e.prototype.onData.call(b, a)
                }, 0)
            }
            ),
            d.prototype.write = function(a) {
                function b() {
                    c.writable = !0,
                    c.emit("drain")
                }
                var c = this;
                this.writable = !1;
                for (var d = 0, e = a.length; e > d; d++)
                    f.encodePacket(a[d], this.supportsBinary, function(a) {
                        try {
                            c.ws.send(a)
                        } catch (b) {
                            i("websocket closed before onclose event")
                        }
                    });
                setTimeout(b, 0)
            }
            ,
            d.prototype.onClose = function() {
                e.prototype.onClose.call(this)
            }
            ,
            d.prototype.doClose = function() {
                "undefined" != typeof this.ws && this.ws.close()
            }
            ,
            d.prototype.uri = function() {
                var a = this.query || {}
                  , b = this.secure ? "wss" : "ws"
                  , c = "";
                return this.port && ("wss" == b && 443 != this.port || "ws" == b && 80 != this.port) && (c = ":" + this.port),
                this.timestampRequests && (a[this.timestampParam] = +new Date),
                this.supportsBinary || (a.b64 = 1),
                a = g.encode(a),
                a.length && (a = "?" + a),
                b + "://" + this.hostname + c + this.path + a
            }
            ,
            d.prototype.check = function() {
                return !(!j || "__initialize"in j && this.name === d.prototype.name)
            }
        }
        , {
            "../transport": 14,
            "component-inherit": 21,
            debug: 22,
            "engine.io-parser": 25,
            parseqs: 35,
            ws: 37
        }],
        20: [function(a, b, c) {
            var d = a("has-cors");
            b.exports = function(a) {
                var b = a.xdomain
                  , c = a.xscheme
                  , e = a.enablesXDR;
                try {
                    if ("undefined" != typeof XMLHttpRequest && (!b || d))
                        return new XMLHttpRequest
                } catch (f) {}
                try {
                    if ("undefined" != typeof XDomainRequest && !c && e)
                        return new XDomainRequest
                } catch (f) {}
                if (!b)
                    try {
                        return new ActiveXObject("Microsoft.XMLHTTP")
                    } catch (f) {}
            }
        }
        , {
            "has-cors": 40
        }],
        21: [function(a, b, c) {
            b.exports = function(a, b) {
                var c = function() {};
                c.prototype = b.prototype,
                a.prototype = new c,
                a.prototype.constructor = a
            }
        }
        , {}],
        22: [function(a, b, c) {
            function d() {
                return "WebkitAppearance"in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31
            }
            function e() {
                var a = arguments
                  , b = this.useColors;
                if (a[0] = (b ? "%c" : "") + this.namespace + (b ? " %c" : " ") + a[0] + (b ? "%c " : " ") + "+" + c.humanize(this.diff),
                !b)
                    return a;
                var d = "color: " + this.color;
                a = [a[0], d, "color: inherit"].concat(Array.prototype.slice.call(a, 1));
                var e = 0
                  , f = 0;
                return a[0].replace(/%[a-z%]/g, function(a) {
                    "%" !== a && (e++,
                    "%c" === a && (f = e))
                }),
                a.splice(f, 0, d),
                a
            }
            function f() {
                return "object" == typeof console && "function" == typeof console.log && Function.prototype.apply.call(console.log, console, arguments)
            }
            function g(a) {
                try {
                    null == a ? localStorage.removeItem("debug") : localStorage.debug = a
                } catch (b) {}
            }
            function h() {
                var a;
                try {
                    a = localStorage.debug
                } catch (b) {}
                return a
            }
            c = b.exports = a("./debug"),
            c.log = f,
            c.formatArgs = e,
            c.save = g,
            c.load = h,
            c.useColors = d,
            c.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"],
            c.formatters.j = function(a) {
                return JSON.stringify(a)
            }
            ,
            c.enable(h())
        }
        , {
            "./debug": 23
        }],
        23: [function(a, b, c) {
            function d() {
                return c.colors[k++ % c.colors.length]
            }
            function e(a) {
                function b() {}
                function e() {
                    var a = e
                      , b = +new Date
                      , f = b - (j || b);
                    a.diff = f,
                    a.prev = j,
                    a.curr = b,
                    j = b,
                    null == a.useColors && (a.useColors = c.useColors()),
                    null == a.color && a.useColors && (a.color = d());
                    var g = Array.prototype.slice.call(arguments);
                    g[0] = c.coerce(g[0]),
                    "string" != typeof g[0] && (g = ["%o"].concat(g));
                    var h = 0;
                    g[0] = g[0].replace(/%([a-z%])/g, function(b, d) {
                        if ("%" === b)
                            return b;
                        h++;
                        var e = c.formatters[d];
                        if ("function" == typeof e) {
                            var f = g[h];
                            b = e.call(a, f),
                            g.splice(h, 1),
                            h--
                        }
                        return b
                    }),
                    "function" == typeof c.formatArgs && (g = c.formatArgs.apply(a, g));
                    var i = e.log || c.log || void 0;
                    i.apply(a, g)
                }
                b.enabled = !1,
                e.enabled = !0;
                var f = c.enabled(a) ? e : b;
                return f.namespace = a,
                f
            }
            function f(a) {
                c.save(a);
                for (var b = (a || "").split(/[\s,]+/), d = b.length, e = 0; d > e; e++)
                    b[e] && (a = b[e].replace(/\*/g, ".*?"),
                    "-" === a[0] ? c.skips.push(new RegExp("^" + a.substr(1) + "$")) : c.names.push(new RegExp("^" + a + "$")))
            }
            function g() {
                c.enable("")
            }
            function h(a) {
                var b, d;
                for (b = 0,
                d = c.skips.length; d > b; b++)
                    if (c.skips[b].test(a))
                        return !1;
                for (b = 0,
                d = c.names.length; d > b; b++)
                    if (c.names[b].test(a))
                        return !0;
                return !1
            }
            function i(a) {
                return a instanceof Error ? a.stack || a.message : a
            }
            c = b.exports = e,
            c.coerce = i,
            c.disable = g,
            c.enable = f,
            c.enabled = h,
            c.humanize = a("ms"),
            c.names = [],
            c.skips = [],
            c.formatters = {};
            var j, k = 0
        }
        , {
            ms: 24
        }],
        24: [function(a, b, c) {
            function d(a) {
                var b = /^((?:\d+)?\.?\d+) *(ms|seconds?|s|minutes?|m|hours?|h|days?|d|years?|y)?$/i.exec(a);
                if (b) {
                    var c = parseFloat(b[1])
                      , d = (b[2] || "ms").toLowerCase();
                    switch (d) {
                    case "years":
                    case "year":
                    case "y":
                        return c * l;
                    case "days":
                    case "day":
                    case "d":
                        return c * k;
                    case "hours":
                    case "hour":
                    case "h":
                        return c * j;
                    case "minutes":
                    case "minute":
                    case "m":
                        return c * i;
                    case "seconds":
                    case "second":
                    case "s":
                        return c * h;
                    case "ms":
                        return c
                    }
                }
            }
            function e(a) {
                return a >= k ? Math.round(a / k) + "d" : a >= j ? Math.round(a / j) + "h" : a >= i ? Math.round(a / i) + "m" : a >= h ? Math.round(a / h) + "s" : a + "ms"
            }
            function f(a) {
                return g(a, k, "day") || g(a, j, "hour") || g(a, i, "minute") || g(a, h, "second") || a + " ms"
            }
            function g(a, b, c) {
                return b > a ? void 0 : 1.5 * b > a ? Math.floor(a / b) + " " + c : Math.ceil(a / b) + " " + c + "s"
            }
            var h = 1e3
              , i = 60 * h
              , j = 60 * i
              , k = 24 * j
              , l = 365.25 * k;
            b.exports = function(a, b) {
                return b = b || {},
                "string" == typeof a ? d(a) : b["long"] ? f(a) : e(a)
            }
        }
        , {}],
        25: [function(a, b, c) {
            (function(b) {
                function d(a, b) {
                    var d = "b" + c.packets[a.type] + a.data.data;
                    return b(d)
                }
                function e(a, b, d) {
                    if (!b)
                        return c.encodeBase64Packet(a, d);
                    var e = a.data
                      , f = new Uint8Array(e)
                      , g = new Uint8Array(1 + e.byteLength);
                    g[0] = r[a.type];
                    for (var h = 0; h < f.length; h++)
                        g[h + 1] = f[h];
                    return d(g.buffer)
                }
                function f(a, b, d) {
                    if (!b)
                        return c.encodeBase64Packet(a, d);
                    var e = new FileReader;
                    return e.onload = function() {
                        a.data = e.result,
                        c.encodePacket(a, b, !0, d)
                    }
                    ,
                    e.readAsArrayBuffer(a.data)
                }
                function g(a, b, d) {
                    if (!b)
                        return c.encodeBase64Packet(a, d);
                    if (q)
                        return f(a, b, d);
                    var e = new Uint8Array(1);
                    e[0] = r[a.type];
                    var g = new u([e.buffer, a.data]);
                    return d(g)
                }
                function h(a, b, c) {
                    for (var d = new Array(a.length), e = m(a.length, c), f = function(a, c, e) {
                        b(c, function(b, c) {
                            d[a] = c,
                            e(b, d)
                        })
                    }, g = 0; g < a.length; g++)
                        f(g, a[g], e)
                }
                var i = a("./keys")
                  , j = a("has-binary")
                  , k = a("arraybuffer.slice")
                  , l = a("base64-arraybuffer")
                  , m = a("after")
                  , n = a("utf8")
                  , o = navigator.userAgent.match(/Android/i)
                  , p = /PhantomJS/i.test(navigator.userAgent)
                  , q = o || p;
                c.protocol = 3;
                var r = c.packets = {
                    open: 0,
                    close: 1,
                    ping: 2,
                    pong: 3,
                    message: 4,
                    upgrade: 5,
                    noop: 6
                }
                  , s = i(r)
                  , t = {
                    type: "error",
                    data: "parser error"
                }
                  , u = a("blob");
                c.encodePacket = function(a, c, f, h) {
                    "function" == typeof c && (h = c,
                    c = !1),
                    "function" == typeof f && (h = f,
                    f = null);
                    var i = void 0 === a.data ? void 0 : a.data.buffer || a.data;
                    if (b.ArrayBuffer && i instanceof ArrayBuffer)
                        return e(a, c, h);
                    if (u && i instanceof b.Blob)
                        return g(a, c, h);
                    if (i && i.base64)
                        return d(a, h);
                    var j = r[a.type];
                    return void 0 !== a.data && (j += f ? n.encode(String(a.data)) : String(a.data)),
                    h("" + j)
                }
                ,
                c.encodeBase64Packet = function(a, d) {
                    var e = "b" + c.packets[a.type];
                    if (u && a.data instanceof u) {
                        var f = new FileReader;
                        return f.onload = function() {
                            var a = f.result.split(",")[1];
                            d(e + a)
                        }
                        ,
                        f.readAsDataURL(a.data)
                    }
                    var g;
                    try {
                        g = String.fromCharCode.apply(null, new Uint8Array(a.data))
                    } catch (h) {
                        for (var i = new Uint8Array(a.data), j = new Array(i.length), k = 0; k < i.length; k++)
                            j[k] = i[k];
                        g = String.fromCharCode.apply(null, j)
                    }
                    return e += b.btoa(g),
                    d(e)
                }
                ,
                c.decodePacket = function(a, b, d) {
                    if ("string" == typeof a || void 0 === a) {
                        if ("b" == a.charAt(0))
                            return c.decodeBase64Packet(a.substr(1), b);
                        if (d)
                            try {
                                a = n.decode(a)
                            } catch (e) {
                                return t
                            }
                        var f = a.charAt(0);
                        return Number(f) == f && s[f] ? a.length > 1 ? {
                            type: s[f],
                            data: a.substring(1)
                        } : {
                            type: s[f]
                        } : t
                    }
                    var g = new Uint8Array(a)
                      , f = g[0]
                      , h = k(a, 1);
                    return u && "blob" === b && (h = new u([h])),
                    {
                        type: s[f],
                        data: h
                    }
                }
                ,
                c.decodeBase64Packet = function(a, c) {
                    var d = s[a.charAt(0)];
                    if (!b.ArrayBuffer)
                        return {
                            type: d,
                            data: {
                                base64: !0,
                                data: a.substr(1)
                            }
                        };
                    var e = l.decode(a.substr(1));
                    return "blob" === c && u && (e = new u([e])),
                    {
                        type: d,
                        data: e
                    }
                }
                ,
                c.encodePayload = function(a, b, d) {
                    function e(a) {
                        return a.length + ":" + a
                    }
                    function f(a, d) {
                        c.encodePacket(a, g ? b : !1, !0, function(a) {
                            d(null, e(a))
                        })
                    }
                    "function" == typeof b && (d = b,
                    b = null);
                    var g = j(a);
                    return b && g ? u && !q ? c.encodePayloadAsBlob(a, d) : c.encodePayloadAsArrayBuffer(a, d) : a.length ? void h(a, f, function(a, b) {
                        return d(b.join(""))
                    }) : d("0:")
                }
                ,
                c.decodePayload = function(a, b, d) {
                    if ("string" != typeof a)
                        return c.decodePayloadAsBinary(a, b, d);
                    "function" == typeof b && (d = b,
                    b = null);
                    var e;
                    if ("" == a)
                        return d(t, 0, 1);
                    for (var f, g, h = "", i = 0, j = a.length; j > i; i++) {
                        var k = a.charAt(i);
                        if (":" != k)
                            h += k;
                        else {
                            if ("" == h || h != (f = Number(h)))
                                return d(t, 0, 1);
                            if (g = a.substr(i + 1, f),
                            h != g.length)
                                return d(t, 0, 1);
                            if (g.length) {
                                if (e = c.decodePacket(g, b, !0),
                                t.type == e.type && t.data == e.data)
                                    return d(t, 0, 1);
                                var l = d(e, i + f, j);
                                if (!1 === l)
                                    return
                            }
                            i += f,
                            h = ""
                        }
                    }
                    return "" != h ? d(t, 0, 1) : void 0
                }
                ,
                c.encodePayloadAsArrayBuffer = function(a, b) {
                    function d(a, b) {
                        c.encodePacket(a, !0, !0, function(a) {
                            return b(null, a)
                        })
                    }
                    return a.length ? void h(a, d, function(a, c) {
                        var d = c.reduce(function(a, b) {
                            var c;
                            return c = "string" == typeof b ? b.length : b.byteLength,
                            a + c.toString().length + c + 2
                        }, 0)
                          , e = new Uint8Array(d)
                          , f = 0;
                        return c.forEach(function(a) {
                            var b = "string" == typeof a
                              , c = a;
                            if (b) {
                                for (var d = new Uint8Array(a.length), g = 0; g < a.length; g++)
                                    d[g] = a.charCodeAt(g);
                                c = d.buffer
                            }
                            b ? e[f++] = 0 : e[f++] = 1;
                            for (var h = c.byteLength.toString(), g = 0; g < h.length; g++)
                                e[f++] = parseInt(h[g]);
                            e[f++] = 255;
                            for (var d = new Uint8Array(c), g = 0; g < d.length; g++)
                                e[f++] = d[g]
                        }),
                        b(e.buffer)
                    }) : b(new ArrayBuffer(0))
                }
                ,
                c.encodePayloadAsBlob = function(a, b) {
                    function d(a, b) {
                        c.encodePacket(a, !0, !0, function(a) {
                            var c = new Uint8Array(1);
                            if (c[0] = 1,
                            "string" == typeof a) {
                                for (var d = new Uint8Array(a.length), e = 0; e < a.length; e++)
                                    d[e] = a.charCodeAt(e);
                                a = d.buffer,
                                c[0] = 0
                            }
                            for (var f = a instanceof ArrayBuffer ? a.byteLength : a.size, g = f.toString(), h = new Uint8Array(g.length + 1), e = 0; e < g.length; e++)
                                h[e] = parseInt(g[e]);
                            if (h[g.length] = 255,
                            u) {
                                var i = new u([c.buffer, h.buffer, a]);
                                b(null, i)
                            }
                        })
                    }
                    h(a, d, function(a, c) {
                        return b(new u(c))
                    })
                }
                ,
                c.decodePayloadAsBinary = function(a, b, d) {
                    "function" == typeof b && (d = b,
                    b = null);
                    for (var e = a, f = [], g = !1; e.byteLength > 0; ) {
                        for (var h = new Uint8Array(e), i = 0 === h[0], j = "", l = 1; 255 != h[l]; l++) {
                            if (j.length > 310) {
                                g = !0;
                                break
                            }
                            j += h[l]
                        }
                        if (g)
                            return d(t, 0, 1);
                        e = k(e, 2 + j.length),
                        j = parseInt(j);
                        var m = k(e, 0, j);
                        if (i)
                            try {
                                m = String.fromCharCode.apply(null, new Uint8Array(m))
                            } catch (n) {
                                var o = new Uint8Array(m);
                                m = "";
                                for (var l = 0; l < o.length; l++)
                                    m += String.fromCharCode(o[l])
                            }
                        f.push(m),
                        e = k(e, j)
                    }
                    var p = f.length;
                    f.forEach(function(a, e) {
                        d(c.decodePacket(a, b, !0), e, p)
                    })
                }
            }
            ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        , {
            "./keys": 26,
            after: 27,
            "arraybuffer.slice": 28,
            "base64-arraybuffer": 29,
            blob: 30,
            "has-binary": 31,
            utf8: 33
        }],
        26: [function(a, b, c) {
            b.exports = Object.keys || function(a) {
                var b = []
                  , c = Object.prototype.hasOwnProperty;
                for (var d in a)
                    c.call(a, d) && b.push(d);
                return b
            }
        }
        , {}],
        27: [function(a, b, c) {
            function d(a, b, c) {
                function d(a, e) {
                    if (d.count <= 0)
                        throw new Error("after called too many times");
                    --d.count,
                    a ? (f = !0,
                    b(a),
                    b = c) : 0 !== d.count || f || b(null, e)
                }
                var f = !1;
                return c = c || e,
                d.count = a,
                0 === a ? b() : d
            }
            function e() {}
            b.exports = d
        }
        , {}],
        28: [function(a, b, c) {
            b.exports = function(a, b, c) {
                var d = a.byteLength;
                if (b = b || 0,
                c = c || d,
                a.slice)
                    return a.slice(b, c);
                if (0 > b && (b += d),
                0 > c && (c += d),
                c > d && (c = d),
                b >= d || b >= c || 0 === d)
                    return new ArrayBuffer(0);
                for (var e = new Uint8Array(a), f = new Uint8Array(c - b), g = b, h = 0; c > g; g++,
                h++)
                    f[h] = e[g];
                return f.buffer
            }
        }
        , {}],
        29: [function(a, b, c) {
            !function(a) {
                c.encode = function(b) {
                    var c, d = new Uint8Array(b), e = d.length, f = "";
                    for (c = 0; e > c; c += 3)
                        f += a[d[c] >> 2],
                        f += a[(3 & d[c]) << 4 | d[c + 1] >> 4],
                        f += a[(15 & d[c + 1]) << 2 | d[c + 2] >> 6],
                        f += a[63 & d[c + 2]];
                    return e % 3 === 2 ? f = f.substring(0, f.length - 1) + "=" : e % 3 === 1 && (f = f.substring(0, f.length - 2) + "=="),
                    f
                }
                ,
                c.decode = function(b) {
                    var c, d, e, f, g, h = .75 * b.length, i = b.length, j = 0;
                    "=" === b[b.length - 1] && (h--,
                    "=" === b[b.length - 2] && h--);
                    var k = new ArrayBuffer(h)
                      , l = new Uint8Array(k);
                    for (c = 0; i > c; c += 4)
                        d = a.indexOf(b[c]),
                        e = a.indexOf(b[c + 1]),
                        f = a.indexOf(b[c + 2]),
                        g = a.indexOf(b[c + 3]),
                        l[j++] = d << 2 | e >> 4,
                        l[j++] = (15 & e) << 4 | f >> 2,
                        l[j++] = (3 & f) << 6 | 63 & g;
                    return k
                }
            }("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")
        }
        , {}],
        30: [function(a, b, c) {
            (function(a) {
                function c(a, b) {
                    b = b || {};
                    for (var c = new d, e = 0; e < a.length; e++)
                        c.append(a[e]);
                    return b.type ? c.getBlob(b.type) : c.getBlob()
                }
                var d = a.BlobBuilder || a.WebKitBlobBuilder || a.MSBlobBuilder || a.MozBlobBuilder
                  , e = function() {
                    try {
                        var a = new Blob(["hi"]);
                        return 2 == a.size
                    } catch (b) {
                        return !1
                    }
                }()
                  , f = d && d.prototype.append && d.prototype.getBlob;
                b.exports = function() {
                    return e ? a.Blob : f ? c : void 0
                }()
            }
            ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        , {}],
        31: [function(a, b, c) {
            (function(c) {
                function d(a) {
                    function b(a) {
                        if (!a)
                            return !1;
                        if (c.Buffer && c.Buffer.isBuffer(a) || c.ArrayBuffer && a instanceof ArrayBuffer || c.Blob && a instanceof Blob || c.File && a instanceof File)
                            return !0;
                        if (e(a)) {
                            for (var d = 0; d < a.length; d++)
                                if (b(a[d]))
                                    return !0
                        } else if (a && "object" == typeof a) {
                            a.toJSON && (a = a.toJSON());
                            for (var f in a)
                                if (a.hasOwnProperty(f) && b(a[f]))
                                    return !0
                        }
                        return !1
                    }
                    return b(a)
                }
                var e = a("isarray");
                b.exports = d
            }
            ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        , {
            isarray: 32
        }],
        32: [function(a, b, c) {
            b.exports = Array.isArray || function(a) {
                return "[object Array]" == Object.prototype.toString.call(a)
            }
        }
        , {}],
        33: [function(b, c, d) {
            (function(b) {
                !function(e) {
                    function f(a) {
                        for (var b, c, d = [], e = 0, f = a.length; f > e; )
                            b = a.charCodeAt(e++),
                            b >= 55296 && 56319 >= b && f > e ? (c = a.charCodeAt(e++),
                            56320 == (64512 & c) ? d.push(((1023 & b) << 10) + (1023 & c) + 65536) : (d.push(b),
                            e--)) : d.push(b);
                        return d
                    }
                    function g(a) {
                        for (var b, c = a.length, d = -1, e = ""; ++d < c; )
                            b = a[d],
                            b > 65535 && (b -= 65536,
                            e += t(b >>> 10 & 1023 | 55296),
                            b = 56320 | 1023 & b),
                            e += t(b);
                        return e
                    }
                    function h(a, b) {
                        return t(a >> b & 63 | 128)
                    }
                    function i(a) {
                        if (0 == (4294967168 & a))
                            return t(a);
                        var b = "";
                        return 0 == (4294965248 & a) ? b = t(a >> 6 & 31 | 192) : 0 == (4294901760 & a) ? (b = t(a >> 12 & 15 | 224),
                        b += h(a, 6)) : 0 == (4292870144 & a) && (b = t(a >> 18 & 7 | 240),
                        b += h(a, 12),
                        b += h(a, 6)),
                        b += t(63 & a | 128)
                    }
                    function j(a) {
                        for (var b, c = f(a), d = c.length, e = -1, g = ""; ++e < d; )
                            b = c[e],
                            g += i(b);
                        return g
                    }
                    function k() {
                        if (s >= r)
                            throw Error("Invalid byte index");
                        var a = 255 & q[s];
                        if (s++,
                        128 == (192 & a))
                            return 63 & a;
                        throw Error("Invalid continuation byte")
                    }
                    function l() {
                        var a, b, c, d, e;
                        if (s > r)
                            throw Error("Invalid byte index");
                        if (s == r)
                            return !1;
                        if (a = 255 & q[s],
                        s++,
                        0 == (128 & a))
                            return a;
                        if (192 == (224 & a)) {
                            var b = k();
                            if (e = (31 & a) << 6 | b,
                            e >= 128)
                                return e;
                            throw Error("Invalid continuation byte")
                        }
                        if (224 == (240 & a)) {
                            if (b = k(),
                            c = k(),
                            e = (15 & a) << 12 | b << 6 | c,
                            e >= 2048)
                                return e;
                            throw Error("Invalid continuation byte")
                        }
                        if (240 == (248 & a) && (b = k(),
                        c = k(),
                        d = k(),
                        e = (15 & a) << 18 | b << 12 | c << 6 | d,
                        e >= 65536 && 1114111 >= e))
                            return e;
                        throw Error("Invalid UTF-8 detected")
                    }
                    function m(a) {
                        q = f(a),
                        r = q.length,
                        s = 0;
                        for (var b, c = []; (b = l()) !== !1; )
                            c.push(b);
                        return g(c)
                    }
                    var n = "object" == typeof d && d
                      , o = "object" == typeof c && c && c.exports == n && c
                      , p = "object" == typeof b && b;
                    (p.global === p || p.window === p) && (e = p);
                    var q, r, s, t = String.fromCharCode, u = {
                        version: "2.0.0",
                        encode: j,
                        decode: m
                    };
                    if ("function" == typeof a && "object" == typeof a.amd && a.amd)
                        a(function() {
                            return u
                        });
                    else if (n && !n.nodeType)
                        if (o)
                            o.exports = u;
                        else {
                            var v = {}
                              , w = v.hasOwnProperty;
                            for (var x in u)
                                w.call(u, x) && (n[x] = u[x])
                        }
                    else
                        e.utf8 = u
                }(this)
            }
            ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        , {}],
        34: [function(a, b, c) {
            (function(a) {
                var c = /^[\],:{}\s]*$/
                  , d = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g
                  , e = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g
                  , f = /(?:^|:|,)(?:\s*\[)+/g
                  , g = /^\s+/
                  , h = /\s+$/;
                b.exports = function(b) {
                    return "string" == typeof b && b ? (b = b.replace(g, "").replace(h, ""),
                    a.JSON && JSON.parse ? JSON.parse(b) : c.test(b.replace(d, "@").replace(e, "]").replace(f, "")) ? new Function("return " + b)() : void 0) : null
                }
            }
            ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        , {}],
        35: [function(a, b, c) {
            c.encode = function(a) {
                var b = "";
                for (var c in a)
                    a.hasOwnProperty(c) && (b.length && (b += "&"),
                    b += encodeURIComponent(c) + "=" + encodeURIComponent(a[c]));
                return b
            }
            ,
            c.decode = function(a) {
                for (var b = {}, c = a.split("&"), d = 0, e = c.length; e > d; d++) {
                    var f = c[d].split("=");
                    b[decodeURIComponent(f[0])] = decodeURIComponent(f[1])
                }
                return b
            }
        }
        , {}],
        36: [function(a, b, c) {
            var d = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
              , e = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
            b.exports = function(a) {
                var b = a
                  , c = a.indexOf("[")
                  , f = a.indexOf("]");
                -1 != c && -1 != f && (a = a.substring(0, c) + a.substring(c, f).replace(/:/g, ";") + a.substring(f, a.length));
                for (var g = d.exec(a || ""), h = {}, i = 14; i--; )
                    h[e[i]] = g[i] || "";
                return -1 != c && -1 != f && (h.source = b,
                h.host = h.host.substring(1, h.host.length - 1).replace(/;/g, ":"),
                h.authority = h.authority.replace("[", "").replace("]", "").replace(/;/g, ":"),
                h.ipv6uri = !0),
                h
            }
        }
        , {}],
        37: [function(a, b, c) {
            function d(a, b, c) {
                var d;
                return d = b ? new f(a,b) : new f(a)
            }
            var e = function() {
                return this
            }()
              , f = e.WebSocket || e.MozWebSocket;
            b.exports = f ? d : null,
            f && (d.prototype = f.prototype)
        }
        , {}],
        38: [function(a, b, c) {
            (function(c) {
                function d(a) {
                    function b(a) {
                        if (!a)
                            return !1;
                        if (c.Buffer && c.Buffer.isBuffer(a) || c.ArrayBuffer && a instanceof ArrayBuffer || c.Blob && a instanceof Blob || c.File && a instanceof File)
                            return !0;
                        if (e(a)) {
                            for (var d = 0; d < a.length; d++)
                                if (b(a[d]))
                                    return !0
                        } else if (a && "object" == typeof a) {
                            a.toJSON && (a = a.toJSON());
                            for (var f in a)
                                if (Object.prototype.hasOwnProperty.call(a, f) && b(a[f]))
                                    return !0
                        }
                        return !1
                    }
                    return b(a)
                }
                var e = a("isarray");
                b.exports = d
            }
            ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        , {
            isarray: 39
        }],
        39: [function(a, b, c) {
            b.exports = a(32)
        }
        , {}],
        40: [function(a, b, c) {
            var d = a("global");
            try {
                b.exports = "XMLHttpRequest"in d && "withCredentials"in new d.XMLHttpRequest
            } catch (e) {
                b.exports = !1
            }
        }
        , {
            global: 41
        }],
        41: [function(a, b, c) {
            b.exports = function() {
                return this
            }()
        }
        , {}],
        42: [function(a, b, c) {
            var d = [].indexOf;
            b.exports = function(a, b) {
                if (d)
                    return a.indexOf(b);
                for (var c = 0; c < a.length; ++c)
                    if (a[c] === b)
                        return c;
                return -1
            }
        }
        , {}],
        43: [function(a, b, c) {
            var d = Object.prototype.hasOwnProperty;
            c.keys = Object.keys || function(a) {
                var b = [];
                for (var c in a)
                    d.call(a, c) && b.push(c);
                return b
            }
            ,
            c.values = function(a) {
                var b = [];
                for (var c in a)
                    d.call(a, c) && b.push(a[c]);
                return b
            }
            ,
            c.merge = function(a, b) {
                for (var c in b)
                    d.call(b, c) && (a[c] = b[c]);
                return a
            }
            ,
            c.length = function(a) {
                return c.keys(a).length
            }
            ,
            c.isEmpty = function(a) {
                return 0 == c.length(a)
            }
        }
        , {}],
        44: [function(a, b, c) {
            var d = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
              , e = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
            b.exports = function(a) {
                for (var b = d.exec(a || ""), c = {}, f = 14; f--; )
                    c[e[f]] = b[f] || "";
                return c
            }
        }
        , {}],
        45: [function(a, b, c) {
            (function(b) {
                var d = a("isarray")
                  , e = a("./is-buffer");
                c.deconstructPacket = function(a) {
                    function b(a) {
                        if (!a)
                            return a;
                        if (e(a)) {
                            var f = {
                                _placeholder: !0,
                                num: c.length
                            };
                            return c.push(a),
                            f
                        }
                        if (d(a)) {
                            for (var g = new Array(a.length), h = 0; h < a.length; h++)
                                g[h] = b(a[h]);
                            return g
                        }
                        if ("object" == typeof a && !(a instanceof Date)) {
                            var g = {};
                            for (var i in a)
                                g[i] = b(a[i]);
                            return g
                        }
                        return a
                    }
                    var c = []
                      , f = a.data
                      , g = a;
                    return g.data = b(f),
                    g.attachments = c.length,
                    {
                        packet: g,
                        buffers: c
                    }
                }
                ,
                c.reconstructPacket = function(a, b) {
                    function c(a) {
                        if (a && a._placeholder) {
                            var e = b[a.num];
                            return e
                        }
                        if (d(a)) {
                            for (var f = 0; f < a.length; f++)
                                a[f] = c(a[f]);
                            return a
                        }
                        if (a && "object" == typeof a) {
                            for (var g in a)
                                a[g] = c(a[g]);
                            return a
                        }
                        return a
                    }
                    return a.data = c(a.data),
                    a.attachments = void 0,
                    a
                }
                ,
                c.removeBlobs = function(a, c) {
                    function f(a, i, j) {
                        if (!a)
                            return a;
                        if (b.Blob && a instanceof Blob || b.File && a instanceof File) {
                            g++;
                            var k = new FileReader;
                            k.onload = function() {
                                j ? j[i] = this.result : h = this.result,
                                --g || c(h)
                            }
                            ,
                            k.readAsArrayBuffer(a)
                        } else if (d(a))
                            for (var l = 0; l < a.length; l++)
                                f(a[l], l, a);
                        else if (a && "object" == typeof a && !e(a))
                            for (var m in a)
                                f(a[m], m, a)
                    }
                    var g = 0
                      , h = a;
                    f(h),
                    g || c(h)
                }
            }
            ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        , {
            "./is-buffer": 47,
            isarray: 48
        }],
        46: [function(a, b, c) {
            function d() {}
            function e(a) {
                var b = ""
                  , d = !1;
                return b += a.type,
                (c.BINARY_EVENT == a.type || c.BINARY_ACK == a.type) && (b += a.attachments,
                b += "-"),
                a.nsp && "/" != a.nsp && (d = !0,
                b += a.nsp),
                null != a.id && (d && (b += ",",
                d = !1),
                b += a.id),
                null != a.data && (d && (b += ","),
                b += l.stringify(a.data)),
                k("encoded %j as %s", a, b),
                b
            }
            function f(a, b) {
                function c(a) {
                    var c = n.deconstructPacket(a)
                      , d = e(c.packet)
                      , f = c.buffers;
                    f.unshift(d),
                    b(f)
                }
                n.removeBlobs(a, c)
            }
            function g() {
                this.reconstructor = null
            }
            function h(a) {
                var b = {}
                  , d = 0;
                if (b.type = Number(a.charAt(0)),
                null == c.types[b.type])
                    return j();
                if (c.BINARY_EVENT == b.type || c.BINARY_ACK == b.type) {
                    for (var e = ""; "-" != a.charAt(++d) && (e += a.charAt(d),
                    d != a.length); )
                        ;
                    if (e != Number(e) || "-" != a.charAt(d))
                        throw new Error("Illegal attachments");
                    b.attachments = Number(e)
                }
                if ("/" == a.charAt(d + 1))
                    for (b.nsp = ""; ++d; ) {
                        var f = a.charAt(d);
                        if ("," == f)
                            break;
                        if (b.nsp += f,
                        d == a.length)
                            break
                    }
                else
                    b.nsp = "/";
                var g = a.charAt(d + 1);
                if ("" !== g && Number(g) == g) {
                    for (b.id = ""; ++d; ) {
                        var f = a.charAt(d);
                        if (null == f || Number(f) != f) {
                            --d;
                            break
                        }
                        if (b.id += a.charAt(d),
                        d == a.length)
                            break
                    }
                    b.id = Number(b.id)
                }
                if (a.charAt(++d))
                    try {
                        b.data = l.parse(a.substr(d))
                    } catch (h) {
                        return j()
                    }
                return k("decoded %s as %j", a, b),
                b
            }
            function i(a) {
                this.reconPack = a,
                this.buffers = []
            }
            function j(a) {
                return {
                    type: c.ERROR,
                    data: "parser error"
                }
            }
            var k = a("debug")("socket.io-parser")
              , l = a("json3")
              , m = (a("isarray"),
            a("component-emitter"))
              , n = a("./binary")
              , o = a("./is-buffer");
            c.protocol = 4,
            c.types = ["CONNECT", "DISCONNECT", "EVENT", "BINARY_EVENT", "ACK", "BINARY_ACK", "ERROR"],
            c.CONNECT = 0,
            c.DISCONNECT = 1,
            c.EVENT = 2,
            c.ACK = 3,
            c.ERROR = 4,
            c.BINARY_EVENT = 5,
            c.BINARY_ACK = 6,
            c.Encoder = d,
            c.Decoder = g,
            d.prototype.encode = function(a, b) {
                if (k("encoding packet %j", a),
                c.BINARY_EVENT == a.type || c.BINARY_ACK == a.type)
                    f(a, b);
                else {
                    var d = e(a);
                    b([d])
                }
            }
            ,
            m(g.prototype),
            g.prototype.add = function(a) {
                var b;
                if ("string" == typeof a)
                    b = h(a),
                    c.BINARY_EVENT == b.type || c.BINARY_ACK == b.type ? (this.reconstructor = new i(b),
                    0 === this.reconstructor.reconPack.attachments && this.emit("decoded", b)) : this.emit("decoded", b);
                else {
                    if (!o(a) && !a.base64)
                        throw new Error("Unknown type: " + a);
                    if (!this.reconstructor)
                        throw new Error("got binary data when not reconstructing a packet");
                    b = this.reconstructor.takeBinaryData(a),
                    b && (this.reconstructor = null,
                    this.emit("decoded", b))
                }
            }
            ,
            g.prototype.destroy = function() {
                this.reconstructor && this.reconstructor.finishedReconstruction()
            }
            ,
            i.prototype.takeBinaryData = function(a) {
                if (this.buffers.push(a),
                this.buffers.length == this.reconPack.attachments) {
                    var b = n.reconstructPacket(this.reconPack, this.buffers);
                    return this.finishedReconstruction(),
                    b
                }
                return null
            }
            ,
            i.prototype.finishedReconstruction = function() {
                this.reconPack = null,
                this.buffers = []
            }
        }
        , {
            "./binary": 45,
            "./is-buffer": 47,
            "component-emitter": 9,
            debug: 10,
            isarray: 48,
            json3: 49
        }],
        47: [function(a, b, c) {
            (function(a) {
                function c(b) {
                    return a.Buffer && a.Buffer.isBuffer(b) || a.ArrayBuffer && b instanceof ArrayBuffer
                }
                b.exports = c
            }
            ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        , {}],
        48: [function(a, b, c) {
            b.exports = a(32)
        }
        , {}],
        49: [function(b, c, d) {
            !function(b) {
                function c(a) {
                    if (c[a] !== g)
                        return c[a];
                    var b;
                    if ("bug-string-char-index" == a)
                        b = "a" != "a"[0];
                    else if ("json" == a)
                        b = c("json-stringify") && c("json-parse");
                    else {
                        var d, e = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                        if ("json-stringify" == a) {
                            var f = k.stringify
                              , i = "function" == typeof f && l;
                            if (i) {
                                (d = function() {
                                    return 1
                                }
                                ).toJSON = d;
                                try {
                                    i = "0" === f(0) && "0" === f(new Number) && '""' == f(new String) && f(h) === g && f(g) === g && f() === g && "1" === f(d) && "[1]" == f([d]) && "[null]" == f([g]) && "null" == f(null) && "[null,null,null]" == f([g, h, null]) && f({
                                        a: [d, !0, !1, null, "\x00\b\n\f\r	"]
                                    }) == e && "1" === f(null, d) && "[\n 1,\n 2\n]" == f([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == f(new Date(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == f(new Date(864e13)) && '"-000001-01-01T00:00:00.000Z"' == f(new Date(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == f(new Date(-1))
                                } catch (j) {
                                    i = !1
                                }
                            }
                            b = i
                        }
                        if ("json-parse" == a) {
                            var m = k.parse;
                            if ("function" == typeof m)
                                try {
                                    if (0 === m("0") && !m(!1)) {
                                        d = m(e);
                                        var n = 5 == d.a.length && 1 === d.a[0];
                                        if (n) {
                                            try {
                                                n = !m('"	"')
                                            } catch (j) {}
                                            if (n)
                                                try {
                                                    n = 1 !== m("01")
                                                } catch (j) {}
                                            if (n)
                                                try {
                                                    n = 1 !== m("1.")
                                                } catch (j) {}
                                        }
                                    }
                                } catch (j) {
                                    n = !1
                                }
                            b = n
                        }
                    }
                    return c[a] = !!b
                }
                var e, f, g, h = {}.toString, i = "function" == typeof a && a.amd, j = "object" == typeof JSON && JSON, k = "object" == typeof d && d && !d.nodeType && d;
                k && j ? (k.stringify = j.stringify,
                k.parse = j.parse) : k = b.JSON = j || {};
                var l = new Date(-0xc782b5b800cec);
                try {
                    l = -109252 == l.getUTCFullYear() && 0 === l.getUTCMonth() && 1 === l.getUTCDate() && 10 == l.getUTCHours() && 37 == l.getUTCMinutes() && 6 == l.getUTCSeconds() && 708 == l.getUTCMilliseconds()
                } catch (m) {}
                if (!c("json")) {
                    var n = "[object Function]"
                      , o = "[object Date]"
                      , p = "[object Number]"
                      , q = "[object String]"
                      , r = "[object Array]"
                      , s = "[object Boolean]"
                      , t = c("bug-string-char-index");
                    if (!l)
                        var u = Math.floor
                          , v = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
                          , w = function(a, b) {
                            return v[b] + 365 * (a - 1970) + u((a - 1969 + (b = +(b > 1))) / 4) - u((a - 1901 + b) / 100) + u((a - 1601 + b) / 400)
                        };
                    (e = {}.hasOwnProperty) || (e = function(a) {
                        var b, c = {};
                        return (c.__proto__ = null,
                        c.__proto__ = {
                            toString: 1
                        },
                        c).toString != h ? e = function(a) {
                            var b = this.__proto__
                              , c = a in (this.__proto__ = null,
                            this);
                            return this.__proto__ = b,
                            c
                        }
                        : (b = c.constructor,
                        e = function(a) {
                            var c = (this.constructor || b).prototype;
                            return a in this && !(a in c && this[a] === c[a])
                        }
                        ),
                        c = null,
                        e.call(this, a)
                    }
                    );
                    var x = {
                        "boolean": 1,
                        number: 1,
                        string: 1,
                        undefined: 1
                    }
                      , y = function(a, b) {
                        var c = typeof a[b];
                        return "object" == c ? !!a[b] : !x[c]
                    };
                    if (f = function(a, b) {
                        var c, d, g, i = 0;
                        (c = function() {
                            this.valueOf = 0
                        }
                        ).prototype.valueOf = 0,
                        d = new c;
                        for (g in d)
                            e.call(d, g) && i++;
                        return c = d = null,
                        i ? f = 2 == i ? function(a, b) {
                            var c, d = {}, f = h.call(a) == n;
                            for (c in a)
                                f && "prototype" == c || e.call(d, c) || !(d[c] = 1) || !e.call(a, c) || b(c)
                        }
                        : function(a, b) {
                            var c, d, f = h.call(a) == n;
                            for (c in a)
                                f && "prototype" == c || !e.call(a, c) || (d = "constructor" === c) || b(c);
                            (d || e.call(a, c = "constructor")) && b(c)
                        }
                        : (d = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"],
                        f = function(a, b) {
                            var c, f, g = h.call(a) == n, i = !g && "function" != typeof a.constructor && y(a, "hasOwnProperty") ? a.hasOwnProperty : e;
                            for (c in a)
                                g && "prototype" == c || !i.call(a, c) || b(c);
                            for (f = d.length; c = d[--f]; i.call(a, c) && b(c))
                                ;
                        }
                        ),
                        f(a, b)
                    }
                    ,
                    !c("json-stringify")) {
                        var z = {
                            92: "\\\\",
                            34: '\\"',
                            8: "\\b",
                            12: "\\f",
                            10: "\\n",
                            13: "\\r",
                            9: "\\t"
                        }
                          , A = "000000"
                          , B = function(a, b) {
                            return (A + (b || 0)).slice(-a)
                        }
                          , C = "\\u00"
                          , D = function(a) {
                            var b, c = '"', d = 0, e = a.length, f = e > 10 && t;
                            for (f && (b = a.split("")); e > d; d++) {
                                var g = a.charCodeAt(d);
                                switch (g) {
                                case 8:
                                case 9:
                                case 10:
                                case 12:
                                case 13:
                                case 34:
                                case 92:
                                    c += z[g];
                                    break;
                                default:
                                    if (32 > g) {
                                        c += C + B(2, g.toString(16));
                                        break
                                    }
                                    c += f ? b[d] : t ? a.charAt(d) : a[d]
                                }
                            }
                            return c + '"'
                        }
                          , E = function(a, b, c, d, i, j, k) {
                            var l, m, n, t, v, x, y, z, A, C, F, G, H, I, J, K;
                            try {
                                l = b[a]
                            } catch (L) {}
                            if ("object" == typeof l && l)
                                if (m = h.call(l),
                                m != o || e.call(l, "toJSON"))
                                    "function" == typeof l.toJSON && (m != p && m != q && m != r || e.call(l, "toJSON")) && (l = l.toJSON(a));
                                else if (l > -1 / 0 && 1 / 0 > l) {
                                    if (w) {
                                        for (v = u(l / 864e5),
                                        n = u(v / 365.2425) + 1970 - 1; w(n + 1, 0) <= v; n++)
                                            ;
                                        for (t = u((v - w(n, 0)) / 30.42); w(n, t + 1) <= v; t++)
                                            ;
                                        v = 1 + v - w(n, t),
                                        x = (l % 864e5 + 864e5) % 864e5,
                                        y = u(x / 36e5) % 24,
                                        z = u(x / 6e4) % 60,
                                        A = u(x / 1e3) % 60,
                                        C = x % 1e3
                                    } else
                                        n = l.getUTCFullYear(),
                                        t = l.getUTCMonth(),
                                        v = l.getUTCDate(),
                                        y = l.getUTCHours(),
                                        z = l.getUTCMinutes(),
                                        A = l.getUTCSeconds(),
                                        C = l.getUTCMilliseconds();
                                    l = (0 >= n || n >= 1e4 ? (0 > n ? "-" : "+") + B(6, 0 > n ? -n : n) : B(4, n)) + "-" + B(2, t + 1) + "-" + B(2, v) + "T" + B(2, y) + ":" + B(2, z) + ":" + B(2, A) + "." + B(3, C) + "Z"
                                } else
                                    l = null;
                            if (c && (l = c.call(b, a, l)),
                            null === l)
                                return "null";
                            if (m = h.call(l),
                            m == s)
                                return "" + l;
                            if (m == p)
                                return l > -1 / 0 && 1 / 0 > l ? "" + l : "null";
                            if (m == q)
                                return D("" + l);
                            if ("object" == typeof l) {
                                for (I = k.length; I--; )
                                    if (k[I] === l)
                                        throw TypeError();
                                if (k.push(l),
                                F = [],
                                J = j,
                                j += i,
                                m == r) {
                                    for (H = 0,
                                    I = l.length; I > H; H++)
                                        G = E(H, l, c, d, i, j, k),
                                        F.push(G === g ? "null" : G);
                                    K = F.length ? i ? "[\n" + j + F.join(",\n" + j) + "\n" + J + "]" : "[" + F.join(",") + "]" : "[]"
                                } else
                                    f(d || l, function(a) {
                                        var b = E(a, l, c, d, i, j, k);
                                        b !== g && F.push(D(a) + ":" + (i ? " " : "") + b)
                                    }),
                                    K = F.length ? i ? "{\n" + j + F.join(",\n" + j) + "\n" + J + "}" : "{" + F.join(",") + "}" : "{}";
                                return k.pop(),
                                K
                            }
                        };
                        k.stringify = function(a, b, c) {
                            var d, e, f, g;
                            if ("function" == typeof b || "object" == typeof b && b)
                                if ((g = h.call(b)) == n)
                                    e = b;
                                else if (g == r) {
                                    f = {};
                                    for (var i, j = 0, k = b.length; k > j; i = b[j++],
                                    g = h.call(i),
                                    (g == q || g == p) && (f[i] = 1))
                                        ;
                                }
                            if (c)
                                if ((g = h.call(c)) == p) {
                                    if ((c -= c % 1) > 0)
                                        for (d = "",
                                        c > 10 && (c = 10); d.length < c; d += " ")
                                            ;
                                } else
                                    g == q && (d = c.length <= 10 ? c : c.slice(0, 10));
                            return E("", (i = {},
                            i[""] = a,
                            i), e, f, d, "", [])
                        }
                    }
                    if (!c("json-parse")) {
                        var F, G, H = String.fromCharCode, I = {
                            92: "\\",
                            34: '"',
                            47: "/",
                            98: "\b",
                            116: "	",
                            110: "\n",
                            102: "\f",
                            114: "\r"
                        }, J = function() {
                            throw F = G = null,
                            SyntaxError()
                        }, K = function() {
                            for (var a, b, c, d, e, f = G, g = f.length; g > F; )
                                switch (e = f.charCodeAt(F)) {
                                case 9:
                                case 10:
                                case 13:
                                case 32:
                                    F++;
                                    break;
                                case 123:
                                case 125:
                                case 91:
                                case 93:
                                case 58:
                                case 44:
                                    return a = t ? f.charAt(F) : f[F],
                                    F++,
                                    a;
                                case 34:
                                    for (a = "@",
                                    F++; g > F; )
                                        if (e = f.charCodeAt(F),
                                        32 > e)
                                            J();
                                        else if (92 == e)
                                            switch (e = f.charCodeAt(++F)) {
                                            case 92:
                                            case 34:
                                            case 47:
                                            case 98:
                                            case 116:
                                            case 110:
                                            case 102:
                                            case 114:
                                                a += I[e],
                                                F++;
                                                break;
                                            case 117:
                                                for (b = ++F,
                                                c = F + 4; c > F; F++)
                                                    e = f.charCodeAt(F),
                                                    e >= 48 && 57 >= e || e >= 97 && 102 >= e || e >= 65 && 70 >= e || J();
                                                a += H("0x" + f.slice(b, F));
                                                break;
                                            default:
                                                J()
                                            }
                                        else {
                                            if (34 == e)
                                                break;
                                            for (e = f.charCodeAt(F),
                                            b = F; e >= 32 && 92 != e && 34 != e; )
                                                e = f.charCodeAt(++F);
                                            a += f.slice(b, F)
                                        }
                                    if (34 == f.charCodeAt(F))
                                        return F++,
                                        a;
                                    J();
                                default:
                                    if (b = F,
                                    45 == e && (d = !0,
                                    e = f.charCodeAt(++F)),
                                    e >= 48 && 57 >= e) {
                                        for (48 == e && (e = f.charCodeAt(F + 1),
                                        e >= 48 && 57 >= e) && J(),
                                        d = !1; g > F && (e = f.charCodeAt(F),
                                        e >= 48 && 57 >= e); F++)
                                            ;
                                        if (46 == f.charCodeAt(F)) {
                                            for (c = ++F; g > c && (e = f.charCodeAt(c),
                                            e >= 48 && 57 >= e); c++)
                                                ;
                                            c == F && J(),
                                            F = c
                                        }
                                        if (e = f.charCodeAt(F),
                                        101 == e || 69 == e) {
                                            for (e = f.charCodeAt(++F),
                                            (43 == e || 45 == e) && F++,
                                            c = F; g > c && (e = f.charCodeAt(c),
                                            e >= 48 && 57 >= e); c++)
                                                ;
                                            c == F && J(),
                                            F = c
                                        }
                                        return +f.slice(b, F)
                                    }
                                    if (d && J(),
                                    "true" == f.slice(F, F + 4))
                                        return F += 4,
                                        !0;
                                    if ("false" == f.slice(F, F + 5))
                                        return F += 5,
                                        !1;
                                    if ("null" == f.slice(F, F + 4))
                                        return F += 4,
                                        null;
                                    J()
                                }
                            return "$"
                        }, L = function(a) {
                            var b, c;
                            if ("$" == a && J(),
                            "string" == typeof a) {
                                if ("@" == (t ? a.charAt(0) : a[0]))
                                    return a.slice(1);
                                if ("[" == a) {
                                    for (b = []; a = K(),
                                    "]" != a; c || (c = !0))
                                        c && ("," == a ? (a = K(),
                                        "]" == a && J()) : J()),
                                        "," == a && J(),
                                        b.push(L(a));
                                    return b
                                }
                                if ("{" == a) {
                                    for (b = {}; a = K(),
                                    "}" != a; c || (c = !0))
                                        c && ("," == a ? (a = K(),
                                        "}" == a && J()) : J()),
                                        ("," == a || "string" != typeof a || "@" != (t ? a.charAt(0) : a[0]) || ":" != K()) && J(),
                                        b[a.slice(1)] = L(K());
                                    return b
                                }
                                J()
                            }
                            return a
                        }, M = function(a, b, c) {
                            var d = N(a, b, c);
                            d === g ? delete a[b] : a[b] = d
                        }, N = function(a, b, c) {
                            var d, e = a[b];
                            if ("object" == typeof e && e)
                                if (h.call(e) == r)
                                    for (d = e.length; d--; )
                                        M(e, d, c);
                                else
                                    f(e, function(a) {
                                        M(e, a, c)
                                    });
                            return c.call(a, b, e)
                        };
                        k.parse = function(a, b) {
                            var c, d;
                            return F = 0,
                            G = "" + a,
                            c = L(K()),
                            "$" != K() && J(),
                            F = G = null,
                            b && h.call(b) == n ? N((d = {},
                            d[""] = c,
                            d), "", b) : c
                        }
                    }
                }
                i && a(function() {
                    return k
                })
            }(this)
        }
        , {}],
        50: [function(a, b, c) {
            function d(a, b) {
                var c = [];
                b = b || 0;
                for (var d = b || 0; d < a.length; d++)
                    c[d - b] = a[d];
                return c
            }
            b.exports = d
        }
        , {}]
    }, {}, [1])(1)
});
define('model/socket', ["jquery", "underscore", "backbone", "socketio", "util/ajax", "model/data", "model/token-data"], function(a, b, c, d, e, f, g) {
    var h = 5
      , i = 1e4
      , j = 5e3
      , k = "nickname"
      , l = {}
      , m = {}
      , n = {}
      , o = {}
      , p = c.Model.extend({
        defaults: {
            room: "",
            socketUriController: ""
        },
        socketUriPrefix: Game.baseUri + "socket/uri/",
        initialize: function() {
            this.customEvents = {},
            this.connect(),
            this.pendingEvents = []
        },
        getUuriCount: function() {
            var a = this.uuri;
            return b.has(n, a) ? n[a] : 0
        },
        getQuery: function() {
            var c = this
              , d = new a.Deferred
              , e = b.uniqueId();
            return o[e] = (new (f.extend({
                urlRoot: Game.baseUri + "socket/query"
            }))).fetch({
                ignoreError: !0
            }).done(function(a) {
                d.resolve(b.extend({
                    room: a.prefix + c.get("room"),
                    nickname: encodeURIComponent(a[k])
                }, a)),
                delete o[e]
            }),
            d
        },
        getSocketUri: function() {
            var c = this
              , d = new a.Deferred
              , e = b.uniqueId()
              , g = c.get("socketUriController")
              , h = g ? Game.baseUri + "socket/" + g + "/uri/" : this.socketUriPrefix;
            return o[e] = (new (f.extend({
                urlRoot: h + c.get("room")
            }))).fetch({
                ignoreError: !0
            }).done(function(a) {
                d.resolve(a),
                delete o[e]
            }),
            d
        },
        resetToken: function() {
            var b = this
              , c = new a.Deferred;
            return b.getQuery().done(function(a) {
                c.resolve(a)
            }),
            c
        },
        delayedConnect: function() {
            var a = this;
            a.destroySocket(),
            a.destroyed || (window.clearTimeout(a.connectTimer),
            a.connectTimer = window.setTimeout(function() {
                a.connect()
            }, i))
        },
        delayedReconnect: function() {
            var a = this;
            a.destroySocket(),
            a.destroyed || (window.clearTimeout(a.reconnectTimer),
            a.reconnectTimer = window.setTimeout(function() {
                a.reconnect()
            }, i))
        },
        delayedDisconnect: function() {
            var a = this
              , c = a.uuri;
            b.has(m, c) && clearTimeout(m[c]),
            m[c] = setTimeout(function() {
                0 === a.getUuriCount() && l[c].disconnect(),
                delete m[c]
            }, j)
        },
        handleConnect: function() {
            var a = this;
            a.resetRetryCount(),
            a.bindCustomEvents(a.socket),
            b.each(a.pendingEvents, function(b) {
                a.socket.emit(b.event, b.data)
            })
        },
        tryDelayedConnect: function() {
            var b = this;
            b.retryCount = b.retryCount || 0,
            b.retryCount++ < h ? b.delayedConnect() : a(window).one("touchstart", function() {
                b.resetRetryCount(),
                b.delayedConnect()
            })
        },
        bindEvents: function(a) {
            var c = this
              , d = c.ioEvents = {
                connect: [],
                disconnect: [],
                connect_error: [],
                reconnect_error: [],
                error: [],
                connect_timeout: [],
                reconnect_failed: []
            };
            d.connect.push(function() {
                c.handleConnect()
            }),
            d.disconnect.push(function() {
                c.tryDelayedConnect()
            }),
            b.each(["connect_error", "reconnect_error", "error"], function(a) {
                d[a].push(function(a) {
                    c.tryDelayedConnect(),
                    c.triggerSocket("connect_failed")
                })
            }),
            b.each(["connect_timeout", "reconnect_failed"], function(a) {
                d[a].push(function(a) {})
            }),
            b.each(d, function(c, d) {
                b.each(c, function(b) {
                    a.once(d, b)
                })
            }),
            c.bindCustomEvents(a)
        },
        bindCustomEvents: function(a) {
            var c = this;
            a = a || c.socket,
            a && b.each(c.customEvents, function(c, d) {
                b.each(c, function(b) {
                    a.off ? a.off(d, b) : a.removeListener && a.removeListener(d, b),
                    a.on(d, b)
                })
            })
        },
        incrUuriCount: function(a) {
            n[a] = b.has(n, a) ? n[a] + 1 : 1
        },
        connect: function() {
            var c = this;
            a.when(c.getSocketUri(), c.getQuery()).done(function(a, e) {
                var f = c.uuri = a + ":" + e.room;
                if (!c.destroyed) {
                    var g;
                    b.has(l, f) ? (g = c.socket = l[f],
                    g.io.opts.query.token = e.token,
                    g.connect()) : (g = c.socket = d.connect(a, {
                        reconnect: !1,
                        "max reconnection attempts": 1,
                        reconnection: !1,
                        reconnectionAttempts: 1,
                        "force new connection": !0,
                        multiplex: !1,
                        query: e
                    }),
                    l[f] = g),
                    c.bindEvents(g),
                    n[f] = c.getUuriCount() + 1,
                    g.connected && c.triggerSocket("connect")
                }
            })
        },
        reconnect: function() {
            var a = this;
            a.socket && a.resetToken().done(function() {
                a.bindEvents(a.socket),
                a.socket.reconnect()
            })
        },
        resetRetryCount: function() {
            var a = this;
            a.retryCount = 0
        },
        abortXHR: function() {
            b.each(o, function(a) {
                e.abortXHR(a)
            }),
            o = {}
        },
        destroySocket: function() {
            var a = this
              , c = a.socket
              , d = a.uuri;
            if (c) {
                var e = function(a) {
                    b.each(a, function(a, d) {
                        b.each(a, function(a) {
                            c.off(d, a)
                        })
                    })
                };
                e(a.customEvents),
                e(a.ioEvents),
                0 === (n[d] = a.getUuriCount() - 1) && a.delayedDisconnect()
            }
        },
        destroy: function() {
            var a = this;
            a.destroyed = !0,
            window.clearTimeout(a.connectTimer),
            window.clearTimeout(a.reconnectTimer),
            a.abortXHR(),
            a.destroySocket(),
            delete a.ioEvents,
            delete a.customEvents,
            delete a.pendingEvents,
            delete a.socket,
            delete a.connectTimer,
            delete a.reconnectTimer
        },
        onSocket: function(a, b) {
            var c = this;
            c.socket && c.socket.on(a, b),
            c.customEvents[a] || (c.customEvents[a] = []),
            c.customEvents[a].push(b)
        },
        triggerSocket: function(a, c) {
            var d = this
              , e = d.customEvents;
            e && e[a] && b.each(e[a], function(a) {
                a.call(d.socket, c)
            })
        },
        emit: function(a, c) {
            c = b.defaults(c || {}, {
                room: this.get("room")
            });
            var d = this;
            d.socket ? d.socket.emit(a, c) : d.pendingEvents.push({
                event: a,
                data: c
            })
        },
        emitSocket: function(a, b) {
            this.emit(a, b)
        }
    });
    return p
});
/*! iScroll v5.1.3 ~ (c) 2008-2014 Matteo Spinelli ~ http://cubiq.org/license */
!function(a, b, c) {
    function d(a, c) {
        this.wrapper = "string" == typeof a ? b.querySelector(a) : a,
        this.scroller = this.wrapper.children[0],
        this.scrollerStyle = this.scroller.style,
        this.options = {
            resizeScrollbars: !0,
            mouseWheelSpeed: 20,
            snapThreshold: .334,
            startX: 0,
            startY: 0,
            scrollY: !0,
            directionLockThreshold: 5,
            momentum: !0,
            bounce: !0,
            bounceTime: 600,
            bounceEasing: "",
            preventDefault: !0,
            preventDefaultException: {
                tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
            },
            HWCompositing: !0,
            useTransition: !0,
            useTransform: !0
        };
        for (var d in c)
            this.options[d] = c[d];
        this.translateZ = this.options.HWCompositing && h.hasPerspective ? " translateZ(0)" : "",
        this.options.useTransition = h.hasTransition && this.options.useTransition,
        this.options.useTransform = h.hasTransform && this.options.useTransform,
        this.options.eventPassthrough = this.options.eventPassthrough === !0 ? "vertical" : this.options.eventPassthrough,
        this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault,
        this.options.scrollY = "vertical" == this.options.eventPassthrough ? !1 : this.options.scrollY,
        this.options.scrollX = "horizontal" == this.options.eventPassthrough ? !1 : this.options.scrollX,
        this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough,
        this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold,
        this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? h.ease[this.options.bounceEasing] || h.ease.circular : this.options.bounceEasing,
        this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling,
        this.options.tap === !0 && (this.options.tap = "tap"),
        "scale" == this.options.shrinkScrollbars && (this.options.useTransition = !1),
        this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1,
        this.x = 0,
        this.y = 0,
        this.directionX = 0,
        this.directionY = 0,
        this._events = {},
        this._init(),
        this.refresh(),
        this.scrollTo(this.options.startX, this.options.startY),
        this.enable()
    }
    function e(a, c, d) {
        var e = b.createElement("div")
          , f = b.createElement("div");
        return d === !0 && (e.style.cssText = "position:absolute;z-index:9999",
        f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"),
        f.className = "iScrollIndicator",
        "h" == a ? (d === !0 && (e.style.cssText += ";height:7px;left:2px;right:2px;bottom:0",
        f.style.height = "100%"),
        e.className = "iScrollHorizontalScrollbar") : (d === !0 && (e.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px",
        f.style.width = "100%"),
        e.className = "iScrollVerticalScrollbar"),
        e.style.cssText += ";overflow:hidden",
        c || (e.style.pointerEvents = "none"),
        e.appendChild(f),
        e
    }
    function f(c, d) {
        this.wrapper = "string" == typeof d.el ? b.querySelector(d.el) : d.el,
        this.wrapperStyle = this.wrapper.style,
        this.indicator = this.wrapper.children[0],
        this.indicatorStyle = this.indicator.style,
        this.scroller = c,
        this.options = {
            listenX: !0,
            listenY: !0,
            interactive: !1,
            resize: !0,
            defaultScrollbars: !1,
            shrink: !1,
            fade: !1,
            speedRatioX: 0,
            speedRatioY: 0
        };
        for (var e in d)
            this.options[e] = d[e];
        this.sizeRatioX = 1,
        this.sizeRatioY = 1,
        this.maxPosX = 0,
        this.maxPosY = 0,
        this.options.interactive && (this.options.disableTouch || (h.addEvent(this.indicator, "touchstart", this),
        h.addEvent(a, "touchend", this)),
        this.options.disablePointer || (h.addEvent(this.indicator, h.prefixPointerEvent("pointerdown"), this),
        h.addEvent(a, h.prefixPointerEvent("pointerup"), this)),
        this.options.disableMouse || (h.addEvent(this.indicator, "mousedown", this),
        h.addEvent(a, "mouseup", this))),
        this.options.fade && (this.wrapperStyle[h.style.transform] = this.scroller.translateZ,
        this.wrapperStyle[h.style.transitionDuration] = h.isBadAndroid ? "0.001s" : "0ms",
        this.wrapperStyle.opacity = "0")
    }
    var g = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || function(b) {
        a.setTimeout(b, 1e3 / 60)
    }
      , h = function() {
        function d(a) {
            return g === !1 ? !1 : "" === g ? a : g + a.charAt(0).toUpperCase() + a.substr(1)
        }
        var e = {}
          , f = b.createElement("div").style
          , g = function() {
            for (var a, b = ["t", "webkitT", "MozT", "msT", "OT"], c = 0, d = b.length; d > c; c++)
                if (a = b[c] + "ransform",
                a in f)
                    return b[c].substr(0, b[c].length - 1);
            return !1
        }();
        e.getTime = Date.now || function() {
            return (new Date).getTime()
        }
        ,
        e.extend = function(a, b) {
            for (var c in b)
                a[c] = b[c]
        }
        ,
        e.addEvent = function(a, b, c, d) {
            a.addEventListener(b, c, !!d)
        }
        ,
        e.removeEvent = function(a, b, c, d) {
            a.removeEventListener(b, c, !!d)
        }
        ,
        e.prefixPointerEvent = function(b) {
            return a.MSPointerEvent ? "MSPointer" + b.charAt(9).toUpperCase() + b.substr(10) : b
        }
        ,
        e.momentum = function(a, b, d, e, f, g) {
            var h, i, j = a - b, k = c.abs(j) / d;
            return g = void 0 === g ? 6e-4 : g,
            h = a + k * k / (2 * g) * (0 > j ? -1 : 1),
            i = k / g,
            e > h ? (h = f ? e - f / 2.5 * (k / 8) : e,
            j = c.abs(h - a),
            i = j / k) : h > 0 && (h = f ? f / 2.5 * (k / 8) : 0,
            j = c.abs(a) + h,
            i = j / k),
            {
                destination: c.round(h),
                duration: i
            }
        }
        ;
        var h = d("transform");
        return e.extend(e, {
            hasTransform: h !== !1,
            hasPerspective: d("perspective")in f,
            hasTouch: "ontouchstart"in a,
            hasPointer: a.PointerEvent || a.MSPointerEvent,
            hasTransition: d("transition")in f
        }),
        e.isBadAndroid = /Android /.test(a.navigator.appVersion) && !/Chrome\/\d/.test(a.navigator.appVersion),
        e.extend(e.style = {}, {
            transform: h,
            transitionTimingFunction: d("transitionTimingFunction"),
            transitionDuration: d("transitionDuration"),
            transitionDelay: d("transitionDelay"),
            transformOrigin: d("transformOrigin")
        }),
        e.hasClass = function(a, b) {
            var c = new RegExp("(^|\\s)" + b + "(\\s|$)");
            return c.test(a.className)
        }
        ,
        e.addClass = function(a, b) {
            if (!e.hasClass(a, b)) {
                var c = a.className.split(" ");
                c.push(b),
                a.className = c.join(" ")
            }
        }
        ,
        e.removeClass = function(a, b) {
            if (e.hasClass(a, b)) {
                var c = new RegExp("(^|\\s)" + b + "(\\s|$)","g");
                a.className = a.className.replace(c, " ")
            }
        }
        ,
        e.offset = function(a) {
            for (var b = -a.offsetLeft, c = -a.offsetTop; a = a.offsetParent; )
                b -= a.offsetLeft,
                c -= a.offsetTop;
            return {
                left: b,
                top: c
            }
        }
        ,
        e.preventDefaultException = function(a, b) {
            for (var c in b)
                if (b[c].test(a[c]))
                    return !0;
            return !1
        }
        ,
        e.extend(e.eventType = {}, {
            touchstart: 1,
            touchmove: 1,
            touchend: 1,
            mousedown: 2,
            mousemove: 2,
            mouseup: 2,
            pointerdown: 3,
            pointermove: 3,
            pointerup: 3,
            MSPointerDown: 3,
            MSPointerMove: 3,
            MSPointerUp: 3
        }),
        e.extend(e.ease = {}, {
            quadratic: {
                style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                fn: function(a) {
                    return a * (2 - a)
                }
            },
            circular: {
                style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
                fn: function(a) {
                    return c.sqrt(1 - --a * a)
                }
            },
            back: {
                style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                fn: function(a) {
                    var b = 4;
                    return (a -= 1) * a * ((b + 1) * a + b) + 1
                }
            },
            bounce: {
                style: "",
                fn: function(a) {
                    return (a /= 1) < 1 / 2.75 ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
                }
            },
            elastic: {
                style: "",
                fn: function(a) {
                    var b = .22
                      , d = .4;
                    return 0 === a ? 0 : 1 == a ? 1 : d * c.pow(2, -10 * a) * c.sin((a - b / 4) * (2 * c.PI) / b) + 1
                }
            }
        }),
        e.tap = function(a, c) {
            var d = b.createEvent("Event");
            d.initEvent(c, !0, !0),
            d.pageX = a.pageX,
            d.pageY = a.pageY,
            a.target.dispatchEvent(d)
        }
        ,
        e.click = function(a) {
            var c, d = a.target;
            /(SELECT|INPUT|TEXTAREA)/i.test(d.tagName) || (c = b.createEvent("MouseEvents"),
            c.initMouseEvent("click", !0, !0, a.view, 1, d.screenX, d.screenY, d.clientX, d.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, null),
            c._constructed = !0,
            d.dispatchEvent(c))
        }
        ,
        e
    }();
    d.prototype = {
        version: "5.1.3",
        _init: function() {
            this._initEvents(),
            (this.options.scrollbars || this.options.indicators) && this._initIndicators(),
            this.options.mouseWheel && this._initWheel(),
            this.options.snap && this._initSnap(),
            this.options.keyBindings && this._initKeys()
        },
        destroy: function() {
            this._initEvents(!0),
            this._execEvent("destroy")
        },
        _transitionEnd: function(a) {
            a.target == this.scroller && this.isInTransition && (this._transitionTime(),
            this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1,
            this._execEvent("scrollEnd")))
        },
        _start: function(a) {
            if ((1 == h.eventType[a.type] || 0 === a.button) && this.enabled && (!this.initiated || h.eventType[a.type] === this.initiated)) {
                !this.options.preventDefault || h.isBadAndroid || h.preventDefaultException(a.target, this.options.preventDefaultException) || a.preventDefault();
                var b, d = a.touches ? a.touches[0] : a;
                this.initiated = h.eventType[a.type],
                this.moved = !1,
                this.distX = 0,
                this.distY = 0,
                this.directionX = 0,
                this.directionY = 0,
                this.directionLocked = 0,
                this._transitionTime(),
                this.startTime = h.getTime(),
                this.options.useTransition && this.isInTransition ? (this.isInTransition = !1,
                b = this.getComputedPosition(),
                this._translate(c.round(b.x), c.round(b.y)),
                this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1,
                this._execEvent("scrollEnd")),
                this.startX = this.x,
                this.startY = this.y,
                this.absStartX = this.x,
                this.absStartY = this.y,
                this.pointX = d.pageX,
                this.pointY = d.pageY,
                this._execEvent("beforeScrollStart")
            }
        },
        _move: function(a) {
            if (this.enabled && h.eventType[a.type] === this.initiated) {
                this.options.preventDefault && a.preventDefault();
                var b, d, e, f, g = a.touches ? a.touches[0] : a, i = g.pageX - this.pointX, j = g.pageY - this.pointY, k = h.getTime();
                if (this.pointX = g.pageX,
                this.pointY = g.pageY,
                this.distX += i,
                this.distY += j,
                e = c.abs(this.distX),
                f = c.abs(this.distY),
                !(k - this.endTime > 300 && 10 > e && 10 > f)) {
                    if (this.directionLocked || this.options.freeScroll || (e > f + this.options.directionLockThreshold ? this.directionLocked = "h" : f >= e + this.options.directionLockThreshold ? this.directionLocked = "v" : this.directionLocked = "n"),
                    "h" == this.directionLocked) {
                        if ("vertical" == this.options.eventPassthrough)
                            a.preventDefault();
                        else if ("horizontal" == this.options.eventPassthrough)
                            return void (this.initiated = !1);
                        j = 0
                    } else if ("v" == this.directionLocked) {
                        if ("horizontal" == this.options.eventPassthrough)
                            a.preventDefault();
                        else if ("vertical" == this.options.eventPassthrough)
                            return void (this.initiated = !1);
                        i = 0
                    }
                    i = this.hasHorizontalScroll ? i : 0,
                    j = this.hasVerticalScroll ? j : 0,
                    b = this.x + i,
                    d = this.y + j,
                    (b > 0 || b < this.maxScrollX) && (b = this.options.bounce ? this.x + i / 3 : b > 0 ? 0 : this.maxScrollX),
                    (d > 0 || d < this.maxScrollY) && (d = this.options.bounce ? this.y + j / 3 : d > 0 ? 0 : this.maxScrollY),
                    this.directionX = i > 0 ? -1 : 0 > i ? 1 : 0,
                    this.directionY = j > 0 ? -1 : 0 > j ? 1 : 0,
                    this.moved || this._execEvent("scrollStart"),
                    this.moved = !0,
                    this._translate(b, d),
                    k - this.startTime > 300 && (this.startTime = k,
                    this.startX = this.x,
                    this.startY = this.y)
                }
            }
        },
        _end: function(a) {
            if (this.enabled && h.eventType[a.type] === this.initiated) {
                this.options.preventDefault && !h.preventDefaultException(a.target, this.options.preventDefaultException) && a.preventDefault();
                var b, d, e = (a.changedTouches ? a.changedTouches[0] : a,
                h.getTime() - this.startTime), f = c.round(this.x), g = c.round(this.y), i = c.abs(f - this.startX), j = c.abs(g - this.startY), k = 0, l = "";
                if (this.isInTransition = 0,
                this.initiated = 0,
                this.endTime = h.getTime(),
                !this.resetPosition(this.options.bounceTime)) {
                    if (this.scrollTo(f, g),
                    !this.moved)
                        return this.options.tap && h.tap(a, this.options.tap),
                        this.options.click && h.click(a),
                        void this._execEvent("scrollCancel");
                    if (this._events.flick && 200 > e && 100 > i && 100 > j)
                        return void this._execEvent("flick");
                    if (this.options.momentum && 300 > e && (b = this.hasHorizontalScroll ? h.momentum(this.x, this.startX, e, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
                        destination: f,
                        duration: 0
                    },
                    d = this.hasVerticalScroll ? h.momentum(this.y, this.startY, e, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
                        destination: g,
                        duration: 0
                    },
                    f = b.destination,
                    g = d.destination,
                    k = c.max(b.duration, d.duration),
                    this.isInTransition = 1),
                    this.options.snap) {
                        var m = this._nearestSnap(f, g);
                        this.currentPage = m,
                        k = this.options.snapSpeed || c.max(c.max(c.min(c.abs(f - m.x), 1e3), c.min(c.abs(g - m.y), 1e3)), 300),
                        f = m.x,
                        g = m.y,
                        this.directionX = 0,
                        this.directionY = 0,
                        l = this.options.bounceEasing
                    }
                    return f != this.x || g != this.y ? ((f > 0 || f < this.maxScrollX || g > 0 || g < this.maxScrollY) && (l = h.ease.quadratic),
                    void this.scrollTo(f, g, k, l)) : void this._execEvent("scrollEnd")
                }
            }
        },
        _resize: function() {
            var a = this;
            clearTimeout(this.resizeTimeout),
            this.resizeTimeout = setTimeout(function() {
                a.refresh()
            }, this.options.resizePolling)
        },
        resetPosition: function(a) {
            var b = this.x
              , c = this.y;
            return a = a || 0,
            !this.hasHorizontalScroll || this.x > 0 ? b = 0 : this.x < this.maxScrollX && (b = this.maxScrollX),
            !this.hasVerticalScroll || this.y > 0 ? c = 0 : this.y < this.maxScrollY && (c = this.maxScrollY),
            b == this.x && c == this.y ? !1 : (this.scrollTo(b, c, a, this.options.bounceEasing),
            !0)
        },
        disable: function() {
            this.enabled = !1
        },
        enable: function() {
            this.enabled = !0
        },
        refresh: function() {
            this.wrapper.offsetHeight;
            this.wrapperWidth = this.wrapper.clientWidth,
            this.wrapperHeight = this.wrapper.clientHeight,
            this.scrollerWidth = this.scroller.offsetWidth,
            this.scrollerHeight = this.scroller.offsetHeight,
            this.maxScrollX = this.wrapperWidth - this.scrollerWidth,
            this.maxScrollY = this.wrapperHeight - this.scrollerHeight,
            this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0,
            this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0,
            this.hasHorizontalScroll || (this.maxScrollX = 0,
            this.scrollerWidth = this.wrapperWidth),
            this.hasVerticalScroll || (this.maxScrollY = 0,
            this.scrollerHeight = this.wrapperHeight),
            this.endTime = 0,
            this.directionX = 0,
            this.directionY = 0,
            this.wrapperOffset = h.offset(this.wrapper),
            this._execEvent("refresh"),
            this.resetPosition()
        },
        on: function(a, b) {
            this._events[a] || (this._events[a] = []),
            this._events[a].push(b)
        },
        off: function(a, b) {
            if (this._events[a]) {
                var c = this._events[a].indexOf(b);
                c > -1 && this._events[a].splice(c, 1)
            }
        },
        _execEvent: function(a) {
            if (this._events[a]) {
                var b = 0
                  , c = this._events[a].length;
                if (c)
                    for (; c > b; b++)
                        this._events[a][b].apply(this, [].slice.call(arguments, 1))
            }
        },
        scrollBy: function(a, b, c, d) {
            a = this.x + a,
            b = this.y + b,
            c = c || 0,
            this.scrollTo(a, b, c, d)
        },
        scrollTo: function(a, b, c, d) {
            d = d || h.ease.circular,
            this.isInTransition = this.options.useTransition && c > 0,
            !c || this.options.useTransition && d.style ? (this._transitionTimingFunction(d.style),
            this._transitionTime(c),
            this._translate(a, b)) : this._animate(a, b, c, d.fn)
        },
        scrollToElement: function(a, b, d, e, f) {
            if (a = a.nodeType ? a : this.scroller.querySelector(a)) {
                var g = h.offset(a);
                g.left -= this.wrapperOffset.left,
                g.top -= this.wrapperOffset.top,
                d === !0 && (d = c.round(a.offsetWidth / 2 - this.wrapper.offsetWidth / 2)),
                e === !0 && (e = c.round(a.offsetHeight / 2 - this.wrapper.offsetHeight / 2)),
                g.left -= d || 0,
                g.top -= e || 0,
                g.left = g.left > 0 ? 0 : g.left < this.maxScrollX ? this.maxScrollX : g.left,
                g.top = g.top > 0 ? 0 : g.top < this.maxScrollY ? this.maxScrollY : g.top,
                b = void 0 === b || null === b || "auto" === b ? c.max(c.abs(this.x - g.left), c.abs(this.y - g.top)) : b,
                this.scrollTo(g.left, g.top, b, f)
            }
        },
        _transitionTime: function(a) {
            if (a = a || 0,
            this.scrollerStyle[h.style.transitionDuration] = a + "ms",
            !a && h.isBadAndroid && (this.scrollerStyle[h.style.transitionDuration] = "0.001s"),
            this.indicators)
                for (var b = this.indicators.length; b--; )
                    this.indicators[b].transitionTime(a)
        },
        _transitionTimingFunction: function(a) {
            if (this.scrollerStyle[h.style.transitionTimingFunction] = a,
            this.indicators)
                for (var b = this.indicators.length; b--; )
                    this.indicators[b].transitionTimingFunction(a)
        },
        _translate: function(a, b) {
            if (this.options.useTransform ? this.scrollerStyle[h.style.transform] = "translate(" + a + "px," + b + "px)" + this.translateZ : (a = c.round(a),
            b = c.round(b),
            this.scrollerStyle.left = a + "px",
            this.scrollerStyle.top = b + "px"),
            this.x = a,
            this.y = b,
            this.indicators)
                for (var d = this.indicators.length; d--; )
                    this.indicators[d].updatePosition()
        },
        _initEvents: function(b) {
            var c = b ? h.removeEvent : h.addEvent
              , d = this.options.bindToWrapper ? this.wrapper : a;
            c(a, "orientationchange", this),
            c(a, "resize", this),
            this.options.click && c(this.wrapper, "click", this, !0),
            this.options.disableMouse || (c(this.wrapper, "mousedown", this),
            c(d, "mousemove", this),
            c(d, "mousecancel", this),
            c(d, "mouseup", this)),
            h.hasPointer && !this.options.disablePointer && (c(this.wrapper, h.prefixPointerEvent("pointerdown"), this),
            c(d, h.prefixPointerEvent("pointermove"), this),
            c(d, h.prefixPointerEvent("pointercancel"), this),
            c(d, h.prefixPointerEvent("pointerup"), this)),
            h.hasTouch && !this.options.disableTouch && (c(this.wrapper, "touchstart", this),
            c(d, "touchmove", this),
            c(d, "touchcancel", this),
            c(d, "touchend", this)),
            c(this.scroller, "transitionend", this),
            c(this.scroller, "webkitTransitionEnd", this),
            c(this.scroller, "oTransitionEnd", this),
            c(this.scroller, "MSTransitionEnd", this)
        },
        getComputedPosition: function() {
            var b, c, d = a.getComputedStyle(this.scroller, null);
            return this.options.useTransform ? (d = d[h.style.transform].split(")")[0].split(", "),
            b = +(d[12] || d[4]),
            c = +(d[13] || d[5])) : (b = +d.left.replace(/[^-\d.]/g, ""),
            c = +d.top.replace(/[^-\d.]/g, "")),
            {
                x: b,
                y: c
            }
        },
        _initIndicators: function() {
            function a(a) {
                for (var b = h.indicators.length; b--; )
                    a.call(h.indicators[b])
            }
            var b, c = this.options.interactiveScrollbars, d = "string" != typeof this.options.scrollbars, g = [], h = this;
            this.indicators = [],
            this.options.scrollbars && (this.options.scrollY && (b = {
                el: e("v", c, this.options.scrollbars),
                interactive: c,
                defaultScrollbars: !0,
                customStyle: d,
                resize: this.options.resizeScrollbars,
                shrink: this.options.shrinkScrollbars,
                fade: this.options.fadeScrollbars,
                listenX: !1
            },
            this.wrapper.appendChild(b.el),
            g.push(b)),
            this.options.scrollX && (b = {
                el: e("h", c, this.options.scrollbars),
                interactive: c,
                defaultScrollbars: !0,
                customStyle: d,
                resize: this.options.resizeScrollbars,
                shrink: this.options.shrinkScrollbars,
                fade: this.options.fadeScrollbars,
                listenY: !1
            },
            this.wrapper.appendChild(b.el),
            g.push(b))),
            this.options.indicators && (g = g.concat(this.options.indicators));
            for (var i = g.length; i--; )
                this.indicators.push(new f(this,g[i]));
            this.options.fadeScrollbars && (this.on("scrollEnd", function() {
                a(function() {
                    this.fade()
                })
            }),
            this.on("scrollCancel", function() {
                a(function() {
                    this.fade()
                })
            }),
            this.on("scrollStart", function() {
                a(function() {
                    this.fade(1)
                })
            }),
            this.on("beforeScrollStart", function() {
                a(function() {
                    this.fade(1, !0)
                })
            })),
            this.on("refresh", function() {
                a(function() {
                    this.refresh()
                })
            }),
            this.on("destroy", function() {
                a(function() {
                    this.destroy()
                }),
                delete this.indicators
            })
        },
        _initWheel: function() {
            h.addEvent(this.wrapper, "wheel", this),
            h.addEvent(this.wrapper, "mousewheel", this),
            h.addEvent(this.wrapper, "DOMMouseScroll", this),
            this.on("destroy", function() {
                h.removeEvent(this.wrapper, "wheel", this),
                h.removeEvent(this.wrapper, "mousewheel", this),
                h.removeEvent(this.wrapper, "DOMMouseScroll", this)
            })
        },
        _wheel: function(a) {
            if (this.enabled) {
                a.preventDefault(),
                a.stopPropagation();
                var b, d, e, f, g = this;
                if (void 0 === this.wheelTimeout && g._execEvent("scrollStart"),
                clearTimeout(this.wheelTimeout),
                this.wheelTimeout = setTimeout(function() {
                    g._execEvent("scrollEnd"),
                    g.wheelTimeout = void 0
                }, 400),
                "deltaX"in a)
                    1 === a.deltaMode ? (b = -a.deltaX * this.options.mouseWheelSpeed,
                    d = -a.deltaY * this.options.mouseWheelSpeed) : (b = -a.deltaX,
                    d = -a.deltaY);
                else if ("wheelDeltaX"in a)
                    b = a.wheelDeltaX / 120 * this.options.mouseWheelSpeed,
                    d = a.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
                else if ("wheelDelta"in a)
                    b = d = a.wheelDelta / 120 * this.options.mouseWheelSpeed;
                else {
                    if (!("detail"in a))
                        return;
                    b = d = -a.detail / 3 * this.options.mouseWheelSpeed
                }
                if (b *= this.options.invertWheelDirection,
                d *= this.options.invertWheelDirection,
                this.hasVerticalScroll || (b = d,
                d = 0),
                this.options.snap)
                    return e = this.currentPage.pageX,
                    f = this.currentPage.pageY,
                    b > 0 ? e-- : 0 > b && e++,
                    d > 0 ? f-- : 0 > d && f++,
                    void this.goToPage(e, f);
                e = this.x + c.round(this.hasHorizontalScroll ? b : 0),
                f = this.y + c.round(this.hasVerticalScroll ? d : 0),
                e > 0 ? e = 0 : e < this.maxScrollX && (e = this.maxScrollX),
                f > 0 ? f = 0 : f < this.maxScrollY && (f = this.maxScrollY),
                this.scrollTo(e, f, 0)
            }
        },
        _initSnap: function() {
            this.currentPage = {},
            "string" == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)),
            this.on("refresh", function() {
                var a, b, d, e, f, g, h = 0, i = 0, j = 0, k = this.options.snapStepX || this.wrapperWidth, l = this.options.snapStepY || this.wrapperHeight;
                if (this.pages = [],
                this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight) {
                    if (this.options.snap === !0)
                        for (d = c.round(k / 2),
                        e = c.round(l / 2); j > -this.scrollerWidth; ) {
                            for (this.pages[h] = [],
                            a = 0,
                            f = 0; f > -this.scrollerHeight; )
                                this.pages[h][a] = {
                                    x: c.max(j, this.maxScrollX),
                                    y: c.max(f, this.maxScrollY),
                                    width: k,
                                    height: l,
                                    cx: j - d,
                                    cy: f - e
                                },
                                f -= l,
                                a++;
                            j -= k,
                            h++
                        }
                    else
                        for (g = this.options.snap,
                        a = g.length,
                        b = -1; a > h; h++)
                            (0 === h || g[h].offsetLeft <= g[h - 1].offsetLeft) && (i = 0,
                            b++),
                            this.pages[i] || (this.pages[i] = []),
                            j = c.max(-g[h].offsetLeft, this.maxScrollX),
                            f = c.max(-g[h].offsetTop, this.maxScrollY),
                            d = j - c.round(g[h].offsetWidth / 2),
                            e = f - c.round(g[h].offsetHeight / 2),
                            this.pages[i][b] = {
                                x: j,
                                y: f,
                                width: g[h].offsetWidth,
                                height: g[h].offsetHeight,
                                cx: d,
                                cy: e
                            },
                            j > this.maxScrollX && i++;
                    this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0),
                    this.options.snapThreshold % 1 === 0 ? (this.snapThresholdX = this.options.snapThreshold,
                    this.snapThresholdY = this.options.snapThreshold) : (this.snapThresholdX = c.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold),
                    this.snapThresholdY = c.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold))
                }
            }),
            this.on("flick", function() {
                var a = this.options.snapSpeed || c.max(c.max(c.min(c.abs(this.x - this.startX), 1e3), c.min(c.abs(this.y - this.startY), 1e3)), 300);
                this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, a)
            })
        },
        _nearestSnap: function(a, b) {
            if (!this.pages.length)
                return {
                    x: 0,
                    y: 0,
                    pageX: 0,
                    pageY: 0
                };
            var d = 0
              , e = this.pages.length
              , f = 0;
            if (c.abs(a - this.absStartX) < this.snapThresholdX && c.abs(b - this.absStartY) < this.snapThresholdY)
                return this.currentPage;
            for (a > 0 ? a = 0 : a < this.maxScrollX && (a = this.maxScrollX),
            b > 0 ? b = 0 : b < this.maxScrollY && (b = this.maxScrollY); e > d; d++)
                if (a >= this.pages[d][0].cx) {
                    a = this.pages[d][0].x;
                    break
                }
            for (e = this.pages[d].length; e > f; f++)
                if (b >= this.pages[0][f].cy) {
                    b = this.pages[0][f].y;
                    break
                }
            return d == this.currentPage.pageX && (d += this.directionX,
            0 > d ? d = 0 : d >= this.pages.length && (d = this.pages.length - 1),
            a = this.pages[d][0].x),
            f == this.currentPage.pageY && (f += this.directionY,
            0 > f ? f = 0 : f >= this.pages[0].length && (f = this.pages[0].length - 1),
            b = this.pages[0][f].y),
            {
                x: a,
                y: b,
                pageX: d,
                pageY: f
            }
        },
        goToPage: function(a, b, d, e) {
            e = e || this.options.bounceEasing,
            a >= this.pages.length ? a = this.pages.length - 1 : 0 > a && (a = 0),
            b >= this.pages[a].length ? b = this.pages[a].length - 1 : 0 > b && (b = 0);
            var f = this.pages[a][b].x
              , g = this.pages[a][b].y;
            d = void 0 === d ? this.options.snapSpeed || c.max(c.max(c.min(c.abs(f - this.x), 1e3), c.min(c.abs(g - this.y), 1e3)), 300) : d,
            this.currentPage = {
                x: f,
                y: g,
                pageX: a,
                pageY: b
            },
            this.scrollTo(f, g, d, e)
        },
        next: function(a, b) {
            var c = this.currentPage.pageX
              , d = this.currentPage.pageY;
            c++,
            c >= this.pages.length && this.hasVerticalScroll && (c = 0,
            d++),
            this.goToPage(c, d, a, b)
        },
        prev: function(a, b) {
            var c = this.currentPage.pageX
              , d = this.currentPage.pageY;
            c--,
            0 > c && this.hasVerticalScroll && (c = 0,
            d--),
            this.goToPage(c, d, a, b)
        },
        _initKeys: function(b) {
            var c, d = {
                pageUp: 33,
                pageDown: 34,
                end: 35,
                home: 36,
                left: 37,
                up: 38,
                right: 39,
                down: 40
            };
            if ("object" == typeof this.options.keyBindings)
                for (c in this.options.keyBindings)
                    "string" == typeof this.options.keyBindings[c] && (this.options.keyBindings[c] = this.options.keyBindings[c].toUpperCase().charCodeAt(0));
            else
                this.options.keyBindings = {};
            for (c in d)
                this.options.keyBindings[c] = this.options.keyBindings[c] || d[c];
            h.addEvent(a, "keydown", this),
            this.on("destroy", function() {
                h.removeEvent(a, "keydown", this)
            })
        },
        _key: function(a) {
            if (this.enabled) {
                var b, d = this.options.snap, e = d ? this.currentPage.pageX : this.x, f = d ? this.currentPage.pageY : this.y, g = h.getTime(), i = this.keyTime || 0, j = .25;
                switch (this.options.useTransition && this.isInTransition && (b = this.getComputedPosition(),
                this._translate(c.round(b.x), c.round(b.y)),
                this.isInTransition = !1),
                this.keyAcceleration = 200 > g - i ? c.min(this.keyAcceleration + j, 50) : 0,
                a.keyCode) {
                case this.options.keyBindings.pageUp:
                    this.hasHorizontalScroll && !this.hasVerticalScroll ? e += d ? 1 : this.wrapperWidth : f += d ? 1 : this.wrapperHeight;
                    break;
                case this.options.keyBindings.pageDown:
                    this.hasHorizontalScroll && !this.hasVerticalScroll ? e -= d ? 1 : this.wrapperWidth : f -= d ? 1 : this.wrapperHeight;
                    break;
                case this.options.keyBindings.end:
                    e = d ? this.pages.length - 1 : this.maxScrollX,
                    f = d ? this.pages[0].length - 1 : this.maxScrollY;
                    break;
                case this.options.keyBindings.home:
                    e = 0,
                    f = 0;
                    break;
                case this.options.keyBindings.left:
                    e += d ? -1 : 5 + this.keyAcceleration >> 0;
                    break;
                case this.options.keyBindings.up:
                    f += d ? 1 : 5 + this.keyAcceleration >> 0;
                    break;
                case this.options.keyBindings.right:
                    e -= d ? -1 : 5 + this.keyAcceleration >> 0;
                    break;
                case this.options.keyBindings.down:
                    f -= d ? 1 : 5 + this.keyAcceleration >> 0;
                    break;
                default:
                    return
                }
                if (d)
                    return void this.goToPage(e, f);
                e > 0 ? (e = 0,
                this.keyAcceleration = 0) : e < this.maxScrollX && (e = this.maxScrollX,
                this.keyAcceleration = 0),
                f > 0 ? (f = 0,
                this.keyAcceleration = 0) : f < this.maxScrollY && (f = this.maxScrollY,
                this.keyAcceleration = 0),
                this.scrollTo(e, f, 0),
                this.keyTime = g
            }
        },
        _animate: function(a, b, c, d) {
            function e() {
                var m, n, o, p = h.getTime();
                return p >= l ? (f.isAnimating = !1,
                f._translate(a, b),
                void (f.resetPosition(f.options.bounceTime) || f._execEvent("scrollEnd"))) : (p = (p - k) / c,
                o = d(p),
                m = (a - i) * o + i,
                n = (b - j) * o + j,
                f._translate(m, n),
                void (f.isAnimating && g(e)))
            }
            var f = this
              , i = this.x
              , j = this.y
              , k = h.getTime()
              , l = k + c;
            this.isAnimating = !0,
            e()
        },
        handleEvent: function(a) {
            switch (a.type) {
            case "touchstart":
            case "pointerdown":
            case "MSPointerDown":
            case "mousedown":
                this._start(a);
                break;
            case "touchmove":
            case "pointermove":
            case "MSPointerMove":
            case "mousemove":
                this._move(a);
                break;
            case "touchend":
            case "pointerup":
            case "MSPointerUp":
            case "mouseup":
            case "touchcancel":
            case "pointercancel":
            case "MSPointerCancel":
            case "mousecancel":
                this._end(a);
                break;
            case "orientationchange":
            case "resize":
                this._resize();
                break;
            case "transitionend":
            case "webkitTransitionEnd":
            case "oTransitionEnd":
            case "MSTransitionEnd":
                this._transitionEnd(a);
                break;
            case "wheel":
            case "DOMMouseScroll":
            case "mousewheel":
                this._wheel(a);
                break;
            case "keydown":
                this._key(a);
                break;
            case "click":
                a._constructed || (a.preventDefault(),
                a.stopPropagation())
            }
        }
    },
    f.prototype = {
        handleEvent: function(a) {
            switch (a.type) {
            case "touchstart":
            case "pointerdown":
            case "MSPointerDown":
            case "mousedown":
                this._start(a);
                break;
            case "touchmove":
            case "pointermove":
            case "MSPointerMove":
            case "mousemove":
                this._move(a);
                break;
            case "touchend":
            case "pointerup":
            case "MSPointerUp":
            case "mouseup":
            case "touchcancel":
            case "pointercancel":
            case "MSPointerCancel":
            case "mousecancel":
                this._end(a)
            }
        },
        destroy: function() {
            this.options.interactive && (h.removeEvent(this.indicator, "touchstart", this),
            h.removeEvent(this.indicator, h.prefixPointerEvent("pointerdown"), this),
            h.removeEvent(this.indicator, "mousedown", this),
            h.removeEvent(a, "touchmove", this),
            h.removeEvent(a, h.prefixPointerEvent("pointermove"), this),
            h.removeEvent(a, "mousemove", this),
            h.removeEvent(a, "touchend", this),
            h.removeEvent(a, h.prefixPointerEvent("pointerup"), this),
            h.removeEvent(a, "mouseup", this)),
            this.options.defaultScrollbars && this.wrapper.parentNode.removeChild(this.wrapper)
        },
        _start: function(b) {
            var c = b.touches ? b.touches[0] : b;
            b.preventDefault(),
            b.stopPropagation(),
            this.transitionTime(),
            this.initiated = !0,
            this.moved = !1,
            this.lastPointX = c.pageX,
            this.lastPointY = c.pageY,
            this.startTime = h.getTime(),
            this.options.disableTouch || h.addEvent(a, "touchmove", this),
            this.options.disablePointer || h.addEvent(a, h.prefixPointerEvent("pointermove"), this),
            this.options.disableMouse || h.addEvent(a, "mousemove", this),
            this.scroller._execEvent("beforeScrollStart")
        },
        _move: function(a) {
            var b, c, d, e, f = a.touches ? a.touches[0] : a;
            h.getTime();
            this.moved || this.scroller._execEvent("scrollStart"),
            this.moved = !0,
            b = f.pageX - this.lastPointX,
            this.lastPointX = f.pageX,
            c = f.pageY - this.lastPointY,
            this.lastPointY = f.pageY,
            d = this.x + b,
            e = this.y + c,
            this._pos(d, e),
            a.preventDefault(),
            a.stopPropagation()
        },
        _end: function(b) {
            if (this.initiated) {
                if (this.initiated = !1,
                b.preventDefault(),
                b.stopPropagation(),
                h.removeEvent(a, "touchmove", this),
                h.removeEvent(a, h.prefixPointerEvent("pointermove"), this),
                h.removeEvent(a, "mousemove", this),
                this.scroller.options.snap) {
                    var d = this.scroller._nearestSnap(this.scroller.x, this.scroller.y)
                      , e = this.options.snapSpeed || c.max(c.max(c.min(c.abs(this.scroller.x - d.x), 1e3), c.min(c.abs(this.scroller.y - d.y), 1e3)), 300);
                    (this.scroller.x != d.x || this.scroller.y != d.y) && (this.scroller.directionX = 0,
                    this.scroller.directionY = 0,
                    this.scroller.currentPage = d,
                    this.scroller.scrollTo(d.x, d.y, e, this.scroller.options.bounceEasing))
                }
                this.moved && this.scroller._execEvent("scrollEnd")
            }
        },
        transitionTime: function(a) {
            a = a || 0,
            this.indicatorStyle[h.style.transitionDuration] = a + "ms",
            !a && h.isBadAndroid && (this.indicatorStyle[h.style.transitionDuration] = "0.001s")
        },
        transitionTimingFunction: function(a) {
            this.indicatorStyle[h.style.transitionTimingFunction] = a
        },
        refresh: function() {
            this.transitionTime(),
            this.options.listenX && !this.options.listenY ? this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? "block" : "none" : this.options.listenY && !this.options.listenX ? this.indicatorStyle.display = this.scroller.hasVerticalScroll ? "block" : "none" : this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none",
            this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (h.addClass(this.wrapper, "iScrollBothScrollbars"),
            h.removeClass(this.wrapper, "iScrollLoneScrollbar"),
            this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "8px" : this.wrapper.style.bottom = "8px")) : (h.removeClass(this.wrapper, "iScrollBothScrollbars"),
            h.addClass(this.wrapper, "iScrollLoneScrollbar"),
            this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "2px" : this.wrapper.style.bottom = "2px"));
            this.wrapper.offsetHeight;
            this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth,
            this.options.resize ? (this.indicatorWidth = c.max(c.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8),
            this.indicatorStyle.width = this.indicatorWidth + "px") : this.indicatorWidth = this.indicator.clientWidth,
            this.maxPosX = this.wrapperWidth - this.indicatorWidth,
            "clip" == this.options.shrink ? (this.minBoundaryX = -this.indicatorWidth + 8,
            this.maxBoundaryX = this.wrapperWidth - 8) : (this.minBoundaryX = 0,
            this.maxBoundaryX = this.maxPosX),
            this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX),
            this.options.listenY && (this.wrapperHeight = this.wrapper.clientHeight,
            this.options.resize ? (this.indicatorHeight = c.max(c.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8),
            this.indicatorStyle.height = this.indicatorHeight + "px") : this.indicatorHeight = this.indicator.clientHeight,
            this.maxPosY = this.wrapperHeight - this.indicatorHeight,
            "clip" == this.options.shrink ? (this.minBoundaryY = -this.indicatorHeight + 8,
            this.maxBoundaryY = this.wrapperHeight - 8) : (this.minBoundaryY = 0,
            this.maxBoundaryY = this.maxPosY),
            this.maxPosY = this.wrapperHeight - this.indicatorHeight,
            this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY),
            this.updatePosition()
        },
        updatePosition: function() {
            var a = this.options.listenX && c.round(this.sizeRatioX * this.scroller.x) || 0
              , b = this.options.listenY && c.round(this.sizeRatioY * this.scroller.y) || 0;
            this.options.ignoreBoundaries || (a < this.minBoundaryX ? ("scale" == this.options.shrink && (this.width = c.max(this.indicatorWidth + a, 8),
            this.indicatorStyle.width = this.width + "px"),
            a = this.minBoundaryX) : a > this.maxBoundaryX ? "scale" == this.options.shrink ? (this.width = c.max(this.indicatorWidth - (a - this.maxPosX), 8),
            this.indicatorStyle.width = this.width + "px",
            a = this.maxPosX + this.indicatorWidth - this.width) : a = this.maxBoundaryX : "scale" == this.options.shrink && this.width != this.indicatorWidth && (this.width = this.indicatorWidth,
            this.indicatorStyle.width = this.width + "px"),
            b < this.minBoundaryY ? ("scale" == this.options.shrink && (this.height = c.max(this.indicatorHeight + 3 * b, 8),
            this.indicatorStyle.height = this.height + "px"),
            b = this.minBoundaryY) : b > this.maxBoundaryY ? "scale" == this.options.shrink ? (this.height = c.max(this.indicatorHeight - 3 * (b - this.maxPosY), 8),
            this.indicatorStyle.height = this.height + "px",
            b = this.maxPosY + this.indicatorHeight - this.height) : b = this.maxBoundaryY : "scale" == this.options.shrink && this.height != this.indicatorHeight && (this.height = this.indicatorHeight,
            this.indicatorStyle.height = this.height + "px")),
            this.x = a,
            this.y = b,
            this.scroller.options.useTransform ? this.indicatorStyle[h.style.transform] = "translate(" + a + "px," + b + "px)" + this.scroller.translateZ : (this.indicatorStyle.left = a + "px",
            this.indicatorStyle.top = b + "px")
        },
        _pos: function(a, b) {
            0 > a ? a = 0 : a > this.maxPosX && (a = this.maxPosX),
            0 > b ? b = 0 : b > this.maxPosY && (b = this.maxPosY),
            a = this.options.listenX ? c.round(a / this.sizeRatioX) : this.scroller.x,
            b = this.options.listenY ? c.round(b / this.sizeRatioY) : this.scroller.y,
            this.scroller.scrollTo(a, b)
        },
        fade: function(a, b) {
            if (!b || this.visible) {
                clearTimeout(this.fadeTimeout),
                this.fadeTimeout = null;
                var c = a ? 250 : 500
                  , d = a ? 0 : 300;
                a = a ? "1" : "0",
                this.wrapperStyle[h.style.transitionDuration] = c + "ms",
                this.fadeTimeout = setTimeout(function(a) {
                    this.wrapperStyle.opacity = a,
                    this.visible = +a
                }
                .bind(this, a), d)
            }
        }
    },
    d.utils = h,
    "undefined" != typeof module && module.exports ? module.exports = d : a.IScroll = d
}(window, document, Math);
define("lib/iscroll", function() {});

define("view/chat", ["jquery", "underscore", "backbone", "view/chat/form", "view/chat/stamp", "model/data", "model/token-data", "model/chat/guild", "model/chat/raid", "model/chat/coop", "model/chat/lobby", "model/chat/defendorder", "model/chat/arcarum", "model/chat/semiraid", "model/socket", "model/sound", "util/local-storage", "lib/iscroll"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
    var r = {
        OFF: 0,
        LIGHT: 1,
        NORMAL: 2
    }
      , s = "chat"
      , t = "guildPost"
      , u = "raidPost"
      , v = "coopPost"
      , w = "lobbyPost"
      , x = "raidGet"
      , y = "raid"
      , z = "chatAdd"
      , A = "coopraid"
      , B = "lobby"
      , C = "roomLeave"
      , D = "roomClose"
      , E = {
        GUILD: "guild",
        COOP: "coop",
        LOBBY: "lobby",
        RAID: "raid",
        DEFENDORDER: "defendorder"
    }
      , F = {
        GUILD: "chat/guild",
        COOP: "chat/coop",
        LOBBY: "chat/lobby",
        RAID: "chat/raid",
        DEFENDORDER: "chat/defendorder"
    }
      , G = {
        GUILD: 0,
        COOP: 1,
        RAID: 2,
        DEFENDORDER: 3,
        ARCARUM: 4
    }
      , H = "chatState"
      , I = {
        DEFAULT: 0,
        HALF: 1,
        FULL: 2
    }
      , J = {
        OPEN: "open",
        INPUT: "input",
        BUTTON: "btn-general-chat",
        SELECTED: "selected",
        GUILD: "guild",
        COOP: "coop",
        RAID: "raid",
        DEFENDORDER: "defendorder",
        ARCARUM: "arcarum",
        HALF: "half",
        FULL: "full",
        PLAYER: "player"
    }
      , K = "commentReady"
      , L = "guildCommentAppended"
      , M = "error"
      , N = 9999
      , O = 5
      , P = a("#tpl-chat-log").html()
      , Q = 3e3
      , R = 3e3
      , S = 500
      , T = "room-key"
      , U = [null, 3e3, 4e3, 5e3]
      , V = 62
      , W = 200
      , X = c.View.extend({
        el: "#general-chat",
        CHANNEL_GUILD: G.GUILD,
        CHANNEL_COOP: G.COOP,
        CHANNEL_RAID: G.RAID,
        guildId: 0,
        raidId: 0,
        coopId: 0,
        defendorderId: 0,
        currentChannel: G.GUILD,
        lastChannel: G.GUILD,
        logState: I.FULL,
        timeoutIdHash: {},
        openFlag: !1,
        enabledFlag: !1,
        destroyFlag: !1,
        activeNoticeMode: 0,
        activeNoticeTimtoutId: null,
        activeNoticeQueue: [],
        events: {
            "tap #chat-open": "openChatFromUser",
            "tap #chat-close": "closeChat",
            "tap #chat-close-alter": "closeChat",
            "tap #chat-body:not(.half):not(.full) #chat-switch": "switchLogHalf",
            "tap #chat-body.half #chat-switch": "switchLogFull",
            "tap #chat-body.full #chat-switch": "switchLogHalf",
            "tap #chat-body.full #chat-switch-alter": "switchLogHalf",
            "tap #chat-guild": "changeChannelToGuild",
            "tap #chat-coop": "changeChannelToCoop",
            "tap #chat-raid": "changeChannelToRaid",
            "tap #chat-defendorder": "changeChannelToDefendorder",
            "tap #chat-arcarum": "changeChannelToArcarum",
            "tap .link-chat-log.coop-room:not(.sky)": "onTapCoopRoomLink",
            "tap .link-chat-log.coop-room.sky": "onTapSkycoopRoomLink",
            "tap .link-chat-log.assistance": "onTapAssistanceLink",
            "tap #chat-stamp:not(.disable)": "onTapStamp",
            "tap #chat-activenotice": "openChatFromActiveNotice",
            "tap #chat-activenotice .active-notice-close": "popHideActiveNotice"
        },
        initialize: function() {
            var b = this;
            b.cacheDOM(["body", "header", "content", "footer", "log", "input", "send", "guild", "coop", "raid", "defendorder", "arcarum", "activenotice"]),
            b.$channelButtons = b.$el.find("#chat-header-left .btn-general-chat"),
            b.$buttons = b.$el.find(".btn-general-chat");
            var c = !(Game.ua.isPcPlatform() || Game.ua.isChromeApp() || Game.ua.isAndApp());
            b.logScroller = new IScroll(b.$content[0],{
                mouseWheel: !0,
                preventDefault: c
            }),
            b.$input.on("focus", function() {
                b.changeToInputView()
            }),
            b.$content.on("tap", function() {
                b.changeToMainView(!0)
            }),
            a(".chat-mask").on("touchmove", function(a) {
                a.preventDefault()
            }).on("tap", function(a) {
                b.changeToMainView(!0),
                a.preventDefault()
            }),
            a(".contents:not(#chat-send):not(#chat-input), #submenu").off("tap.chat").on("tap.chat", function() {
                b.changeToMainView()
            }),
            b.guildModel = new h,
            b.coopModel = new j,
            b.lobbyModel = new k,
            b.defendorderModel = new l,
            b.arcarumModel = new m,
            b.createSubView(),
            this.formView.stopListening(this.formView),
            this.formView.listenTo(this.formView, "sendButtonTapped", function() {
                b.changeToMainView(!0)
            }),
            b.disableChat(),
            b.updateActiveNoticeSetting(),
            b.activeNoticeSocket = null
        },
        changeToMainView: function(a) {
            (a || this.$input.is(":focus") || !this.$input.hasClass("btn-general-chat")) && (this.$body.removeClass(J.INPUT),
            this.$buttons.removeClass("on"),
            this.$input.blur().addClass(J.BUTTON),
            this.logScroller.refresh())
        },
        changeToInputView: function() {
            this.$body.addClass(J.INPUT),
            this.$input.removeClass(J.BUTTON),
            this.logScroller.refresh(),
            this.scrollLog(S)
        },
        cacheDOM: function(a, c) {
            var d = this;
            c = c || "#chat-",
            b.each(a, function(a) {
                d["$" + a] = d.$el.find(c + a)
            })
        },
        createSubView: function() {
            var a = this;
            this.formView = new d,
            this.formView.on("submit", function(b) {
                a.onSubmitForm(b)
            }).on("submissionEmptyError submissionExcessError", function(b) {
                a.formView.popErrorDialog(b)
            }),
            this.stampView = new e({
                isGeneralChat: !0
            }),
            this.stampView.currentChannel = this.currentChannel,
            this.stampView.on("submit", function(b) {
                a.onSubmitStamp(b)
            }).on("error", function() {
                a.trigger(M)
            })
        },
        setupGuildChannel: function() {
            var b = this
              , c = new a.Deferred;
            b.fetchGuildInfo().done(function() {
                c.resolve()
            }),
            c.done(function() {
                b.guildId ? b.fetchCommentList(b.guildModel).done(function(a) {
                    b.currentChannel === G.GUILD && (b.clearComments(),
                    b.appendComments(a),
                    b.initializeSocket(E.GUILD + b.guildId, F.GUILD))
                }) : b.disableChat()
            })
        },
        setupCoopChannel: function() {
            var a = this;
            a.fetchCoopInfo().done(function(b) {
                var c = b.room_id;
                a.coopRoomKind = b.room_kind,
                0 === a.coopRoomKind ? a.disableChat() : 1 === a.coopRoomKind ? a.fetchCommentList(a.coopModel).done(function(b) {
                    a.currentChannel === G.COOP && (a.clearComments(),
                    a.appendComments(b),
                    a.initializeSocket(E.COOP + c, F.COOP))
                }) : 2 === a.coopRoomKind && a.fetchCommentList(a.lobbyModel).done(function(b) {
                    a.currentChannel === G.COOP && (a.clearComments(),
                    a.appendComments(b),
                    a.initializeSocket(E.LOBBY + c, F.LOBBY))
                })
            })
        },
        setupRaidChannel: function(a) {
            var b = this
              , c = location.hash.split("/")
              , d = b.openFlag && b.currentChannel === G.RAID;
            delete b.raidModel,
            b.raidId = c[1],
            "#raid_multi" === c[0] ? Game.setting.rtn_mode ? (b.raidModel = new i,
            b.clearComments(),
            b.initializeSocket(E.RAID + b.raidId, F.RAID)) : b.enableChat() : d && b.disableChat()
        },
        setupDefendorderChannel: function(a) {
            var b = this;
            b.defendorderModel.fetchInfo().done(function(c) {
                var d = b.openFlag && b.currentChannel === G.DEFENDORDER;
                d && b.destroySocket(),
                c.defendorder_id ? (a && d || (b.defendorderId = c.defendorder_id,
                b.latestDefendorderCommentId = 0,
                b.updateDefendorderCommentList(!0)),
                d && b.enableChat()) : d && b.disableChat()
            })
        },
        setupArcarumChannel: function() {
            var a = this
              , b = 0
              , c = 1
              , d = 2;
            a.arcarumModel.fetchInfo().done(function(e) {
                e === c ? (a.enableChat(),
                a.updateArcarumCommentList(!0)) : e === b ? a.disableChat() : e === d && (a.disableChat(),
                a.changeChannelToGuild())
            })
        },
        updateSemiraidCommentList: function(a) {
            var c = this;
            clearTimeout(c.semiraidUpdateTimeoutId),
            c.semiraidUpdateTimeoutId = void 0,
            "#raid_semi" === location.hash.split("/")[0] && (Game.setting.rtn_mode || c.openFlag && c.currentChannel == G.RAID) && (Game && Game.view && Game.view.setupView ? (c.raidModel.setLatestCommentId(c.latestRaidCommentId),
            c.fetchCommentList(c.raidModel).done(function(d) {
                if (d = b.reject(d, function(a) {
                    return a.id <= c.latestRaidCommentId
                }),
                d.length > 0) {
                    if (window.stage && window.stage.pJsnData && b.each(d, function(a) {
                        a.categoryId && a.categoryId != N && (a.commentData.content = window.stage.pJsnData.chat[a.categoryId][a.chatId].text)
                    }),
                    !a && Game.setting.rtn_mode) {
                        var e = b.filter(d, function(a) {
                            return !(Game.setting.chat_mode == r.OFF && !a.categoryId || 0 == Game.setting.chat_stamp && a.userId != Game.userId && a.categoryId == N)
                        });
                        e = b.chain(e).shuffle().last(O).value(),
                        b.each(e, function(a) {
                            c.postChatToRaid(a)
                        })
                    }
                    c.latestRaidCommentId = b.last(d).id,
                    c.openFlag && c.currentChannel === G.RAID && c.appendComments(d)
                }
                c.semiraidUpdateTimeoutId = setTimeout(function() {
                    c.updateSemiraidCommentList()
                }, R)
            })) : c.semiraidUpdateTimeoutId = setTimeout(function() {
                c.updateSemiraidCommentList(a)
            }, R))
        },
        updateDefendorderCommentList: function(a) {
            var c = this;
            clearTimeout(c.defendorderUpdateTimeoutId),
            c.defendorderUpdateTimeoutId = void 0;
            var d = location.hash.split("/")
              , e = d[1] && "island" === d[1] && "#defend_order" === d[0]
              , f = c.openFlag && c.currentChannel == G.DEFENDORDER;
            (e || f) && (c.defendorderModel.setLatestCommentId(c.latestDefendorderCommentId),
            c.fetchCommentList(c.defendorderModel).done(function(d) {
                a || b.each(d, function(a) {
                    a.systemEvent && c.trigger(a.systemEvent)
                }),
                d = b.reject(d, function(a) {
                    return a.id <= c.latestDefendorderCommentId
                }),
                d.length > 0 && (c.latestDefendorderCommentId = b.last(d).id,
                f && c.appendComments(d)),
                c.defendorderUpdateTimeoutId = setTimeout(function() {
                    c.updateDefendorderCommentList()
                }, R)
            }))
        },
        updateArcarumCommentList: function() {
            var a, c = 0;
            return function(d) {
                var e = this
                  , f = function() {
                    return e.openFlag && e.currentChannel == G.ARCARUM
                };
                d && (c = 0),
                clearTimeout(a),
                f() && (e.arcarumModel.setLatestCommentId(c),
                e.fetchCommentList(e.arcarumModel).done(function(d) {
                    d = b.reject(d, function(a) {
                        return a.id <= c
                    }),
                    d.length > 0 && (c = b.last(d).id,
                    f() && e.appendComments(d)),
                    a = setTimeout(function() {
                        e.updateArcarumCommentList(!1)
                    }, R)
                }))
            }
        }(),
        postChatToRaid: function(a) {
            var b = {
                name: a.nickname
            };
            a.categoryId && a.chatId ? b.chat = stage.pJsnData.chat[a.categoryId][a.chatId] : b.chat = {
                text: a.commentData.content
            },
            Game.view.setupView.displayChat(null, b)
        },
        fetchGuildInfo: function() {
            var b = this
              , c = this.fetchGuildInfoDeferred = new a.Deferred
              , d = function() {
                b.guildModel.fetchInfo().done(function(a) {
                    b.guildId = a.is_guild_in,
                    c.resolve()
                }).fail(function() {
                    if (b.destroyFlag)
                        return c.reject();
                    var a = setTimeout(d, Q);
                    b.timeoutIdHash[a] || (b.timeoutIdHash[a] = !0)
                })
            };
            return d(),
            c.promise()
        },
        fetchCoopInfo: function() {
            var b = this
              , c = new a.Deferred
              , d = function() {
                b.coopModel.fetchInfo().done(function(a) {
                    c.resolve(a)
                }).fail(function() {
                    if (b.destroyFlag)
                        return c.reject();
                    var a = setTimeout(d, Q);
                    b.timeoutIdHash[a] || (b.timeoutIdHash[a] = !0)
                })
            };
            return d(),
            c.promise()
        },
        fetchCommentList: function(b) {
            var c = this
              , d = new a.Deferred
              , e = function() {
                b.fetchCommentList().done(function(a, b) {
                    d.resolve(a, b)
                }).fail(function() {
                    if (c.destroyFlag)
                        return d.reject();
                    var a = setTimeout(e, Q);
                    c.timeoutIdHash[a] || (c.timeoutIdHash[a] = !0)
                })
            };
            return e(),
            d.promise()
        },
        onSubmitForm: function(a) {
            if (!this.enabledFlag)
                return void 0;
            var c = this;
            switch (c.currentChannel) {
            case G.GUILD:
                c.guildModel.postForm(a).done(function(a) {
                    c.onSaveForm(a, G.GUILD)
                });
                break;
            case G.COOP:
                if (1 === this.coopRoomKind)
                    var d = this.coopModel;
                else if (2 === this.coopRoomKind)
                    var d = this.lobbyModel;
                d.postForm(a).done(function(a) {
                    c.onSaveForm(a, G.COOP)
                });
                break;
            case G.RAID:
                var e;
                e = Game.setting.rtn_mode ? function() {
                    c.raidModel.postForm(b.extend(a, {
                        raid_id: c.raidId
                    })).done(function(a) {
                        c.onSaveForm(a, G.RAID),
                        stage.pJsnData.is_semi && c.updateSemiraidCommentList()
                    })
                }
                : function() {
                    c.onSaveForm({
                        error: !1
                    }, G.RAID)
                }
                ,
                c.trigger(K, {
                    channel: c.currentChannel
                }, e);
                break;
            case G.DEFENDORDER:
                c.defendorderModel.postForm(b.extend(a, {
                    defendorder_id: c.defendorderId
                })).done(function(a) {
                    c.onSaveForm(a, G.DEFENDORDER),
                    c.updateDefendorderCommentList()
                });
                break;
            case G.ARCARUM:
                c.arcarumModel.postForm(a).done(function(a) {
                    c.onSaveForm(a, G.ARCARUM),
                    c.updateArcarumCommentList()
                })
            }
        },
        onSubmitStamp: function(a) {
            if (!this.enabledFlag)
                return void 0;
            var c = this;
            switch (c.currentChannel) {
            case G.GUILD:
                c.guildModel.postStamp(a);
                break;
            case G.COOP:
                if (1 === this.coopRoomKind)
                    var d = this.coopModel;
                else if (2 === this.coopRoomKind)
                    var d = this.lobbyModel;
                d.postStamp(a);
                break;
            case G.RAID:
                var e = !1;
                Game.setting.rtn_mode && (e = function() {
                    c.raidModel.postStamp(b.extend(a, {
                        raid_id: c.raidId
                    })).done(function(a) {
                        stage.pJsnData.is_semi && c.updateSemiraidCommentList()
                    })
                }
                ),
                c.trigger(K, {
                    channel: c.currentChannel
                }, e);
                break;
            case G.DEFENDORDER:
                c.defendorderModel.postStamp(b.extend(a, {
                    defendorder_id: c.defendorderId
                })).done(function(a) {
                    c.updateDefendorderCommentList()
                });
                break;
            case G.ARCARUM:
                c.arcarumModel.postStamp(a).done(function(a) {
                    c.updateArcarumCommentList()
                })
            }
        },
        onSaveForm: function(a, b) {
            return a.error === !0 ? this.formView.popErrorDialog(a.message) : void 0
        },
        appendComments: function(a) {
            var c = this;
            b.each(a, function(a) {
                c.appendComment(a, !1)
            }),
            c.loadAndscrollLog(S, this.$log.find("img"))
        },
        appendComment: function(b, c) {
            var d = this
              , e = new Y(b);
            d.$log.append(e.render().el),
            c !== !1 && d.loadAndscrollLog(S, a(e.render().el).find("img"))
        },
        loadAndscrollLog: function(b, c) {
            var d = this
              , e = !1
              , f = setTimeout(function() {
                e = !0,
                d.scrollLog(b)
            }, 500)
              , g = new createjs.LoadQueue
              , h = [];
            c.each(function() {
                var b = {
                    src: a(this).attr("src")
                };
                h.push(b)
            }),
            g.loadManifest(h),
            g.addEventListener("complete", function() {
                e === !1 ? (e = !0,
                clearTimeout(f),
                d.scrollLog(b)) : d.logScroller.refresh()
            })
        },
        scrollLog: function(a) {
            var b = this;
            this.logScroller.refresh(),
            this.logScroller.scrollTo(0, this.logScroller.maxScrollY, a),
            setTimeout(function() {
                b.logScroller.refresh()
            }, a)
        },
        clearComments: function() {
            this.$log.html('<div id="chat-blank"></div>'),
            this.logScroller.refresh()
        },
        initializeSocket: function(a, c) {
            var d = this;
            d.destroySocket();
            var e = d.socket = new o({
                room: a,
                socketUriController: c
            })
              , f = {}
              , g = {};
            if (f[t] = function(a) {
                d.currentChannel === G.GUILD && (a = d.guildModel.parseComment(a),
                d.appendComment(a),
                d.trigger(L))
            }
            ,
            f[v] = function(a) {
                d.currentChannel === G.COOP && (0 === d.coopModel.skinCoop && (a.user_image = a.no_skin_image),
                a = d.coopModel.parseComment(a),
                d.appendComment(a))
            }
            ,
            f[w] = function(a) {
                d.currentChannel === G.COOP && (0 === d.lobbyModel.skinCoop && (a.user_image = a.no_skin_image),
                a = d.lobbyModel.parseComment(a),
                d.appendComment(a))
            }
            ,
            f[u] = function(a) {
                d.currentChannel === G.RAID && (a = d.raidModel.parseComment(a),
                d.appendComment(a))
            }
            ,
            f[x] = function(a) {
                d.$log.find(".lis-log").length || (b.each(a, function(a) {
                    a = d.raidModel.parseComment(a),
                    d.appendComment(a, !1)
                }),
                d.loadAndscrollLog(S, d.$log.find("img")))
            }
            ,
            e.onSocket(s, function(a) {
                b.each(a, function(a, b) {
                    var c = f[b] || function() {}
                    ;
                    c.call(this, a)
                })
            }),
            g[z] = function(a) {
                d.currentChannel === G.RAID && (a = d.raidModel.parseComment(a),
                d.appendComment(a))
            }
            ,
            e.onSocket(y, function(a) {
                b.each(a, function(a, b) {
                    var c = g[b] || function() {}
                    ;
                    c.call(this, a)
                })
            }),
            c === F.COOP || c === F.LOBBY) {
                var h = {}
                  , i = c === F.LOBBY ? B : A;
                h[C] = function(a) {
                    +a.userId === +Game.userId && d.disconnectChat()
                }
                ,
                h[D] = function(a) {
                    d.disconnectChat()
                }
                ,
                e.onSocket(i, function(a) {
                    b.each(a, function(a, b) {
                        var c = h[b] || function() {}
                        ;
                        c.call(this, a)
                    })
                })
            }
            e.onSocket("connect", function() {
                if (d.currentChannel === G.RAID) {
                    var a = {};
                    a[x] = !0,
                    e.emit(s, a)
                }
                d.enableChat()
            })
        },
        disableChat: function() {
            this.enabledFlag = !1,
            this.formView.disable(),
            this.stampView.disable()
        },
        enableChat: function() {
            this.enabledFlag = !0,
            this.formView.enable(),
            this.stampView.enable()
        },
        openChat: function(b) {
            var c = this;
            c.openFlag = !0,
            c.$el.addClass(J.OPEN),
            c.$body.css({
                display: ""
            }),
            this.resetActiveNoticeQueue(),
            b !== !1 && c.changeChannelTo(c.currentChannel),
            c.trigger("openChat");
            var d = a("#cnt-submenu-navi-vertical").find(".btn-sub-chat");
            d.trigger("chatOpen"),
            a("#submenu").off("finishInitializing").one("finishInitializing", function() {
                d.trigger("chatOpen")
            })
        },
        openChatFromUser: function(a) {
            a.preventDefault(),
            a.stopPropagation(),
            this.openChat()
        },
        closeChat: function(a) {
            var c = this;
            c.openFlag = !1,
            c.$el.removeClass(J.OPEN),
            c.$body.css({
                display: ""
            }),
            c.disableChat(),
            this.destroySocket(),
            b.each(b.keys(this.timeoutIdHash), function(a) {
                clearTimeout(a)
            }),
            this.timeoutIdHash = {},
            this.saveState()
        },
        disconnectChat: function() {
            this.disableChat(),
            this.destroySocket(),
            b.each(b.keys(this.timeoutIdHash), function(a) {
                clearTimeout(a)
            }),
            this.timeoutIdHash = {}
        },
        switchLog: function(a) {
            var c = this;
            switch (b.contains(I, a) && (c.logState = a),
            c.logState) {
            case I.DEFAULT:
                c.$body.removeClass(J.HALF).removeClass(J.FULL);
                break;
            case I.HALF:
                c.$body.removeClass(J.FULL).addClass(J.HALF);
                break;
            case I.FULL:
                c.$body.removeClass(J.HALF).addClass(J.FULL)
            }
            c.logScroller.refresh(),
            c.saveState(),
            c.trigger("switchLog")
        },
        switchLogDefault: function() {
            this.switchLog(I.DEFAULT)
        },
        switchLogHalf: function() {
            this.switchLog(I.HALF)
        },
        switchLogFull: function() {
            this.switchLog(I.FULL)
        },
        openFullLog: function() {
            this.switchLogFull()
        },
        changeChannelTo: function() {
            var a = [J.GUILD, J.COOP, J.RAID, J.DEFENDORDER, J.ARCARUM].join(" ")
              , b = function() {
                var b = this;
                b.clearComments(),
                b.disableChat(),
                b.$channelButtons.removeClass(J.SELECTED),
                b.$body.removeClass(a)
            };
            return function(a, c) {
                var d = this;
                if (a === G.DEFENDORDER && 0 === d.$defendorder.length && (a = G.GUILD),
                d.currentChannel !== a || !c) {
                    var e, f, g;
                    switch (a) {
                    case G.GUILD:
                        e = d.$guild,
                        f = J.GUILD,
                        g = d.setupGuildChannel;
                        break;
                    case G.COOP:
                        e = d.$coop,
                        f = J.COOP,
                        g = d.setupCoopChannel;
                        break;
                    case G.RAID:
                        e = d.$raid,
                        f = J.RAID,
                        g = d.setupRaidChannel;
                        break;
                    case G.DEFENDORDER:
                        e = d.$defendorder,
                        f = J.DEFENDORDER,
                        g = d.setupDefendorderChannel;
                        break;
                    case G.ARCARUM:
                        e = d.$arcarum,
                        f = J.ARCARUM,
                        g = d.setupArcarumChannel;
                        break;
                    default:
                        return
                    }
                    d.currentChannel !== G.RAID && d.currentChannel !== a && (d.lastChannel = d.currentChannel),
                    d.currentChannel = a,
                    d.stampView && (d.stampView.currentChannel = a),
                    d.openFlag && (b.call(d),
                    e.addClass(J.SELECTED),
                    d.$body.addClass(f),
                    g.call(d)),
                    d.saveState()
                }
            }
        }(),
        changeChannelToGuild: function(a) {
            this.changeChannelTo(G.GUILD, a)
        },
        changeChannelToCoop: function(a) {
            this.changeChannelTo(G.COOP, a)
        },
        changeChannelToRaid: function(a) {
            this.changeChannelTo(G.RAID, a)
        },
        changeChannelToDefendorder: function(a) {
            this.changeChannelTo(G.DEFENDORDER, a)
        },
        changeChannelToArcarum: function(a) {
            this.changeChannelTo(G.ARCARUM, a)
        },
        updateActiveNoticeSetting: function() {
            this.activeNoticeMode = Game.setting.chat_active_notice || 0,
            this.activeNoticeModeOnbattle = Game.setting.chat_active_notice_onbattle || 0
        },
        openGuildChannelForActiveNotice: function(b) {
            var c = this;
            this.updateActiveNoticeSetting();
            var d = 0 !== this.activeNoticeMode && !(0 === this.activeNoticeModeOnbattle && ("raid_multi" === b || "raid" === b));
            return d ? void (this.activeNoticeSocket || (this.activeNoticeSocket = "nowFetching",
            this.fetchGuildInfo().done(function() {
                if (c.guildId) {
                    var b = E.GUILD + c.guildId
                      , d = F.GUILD
                      , e = c.activeNoticeSocket = new o({
                        room: b,
                        socketUriController: d
                    })
                      , f = function(b) {
                        if (b = c.guildModel.parseComment(b),
                        c.addActiveNoticeQueue(b),
                        c.trigger(L),
                        +b.userId !== Game.userId) {
                            var d = a("#cnt-submenu-navi-vertical").find(".btn-sub-chat");
                            d.trigger("chatOpen", b.id),
                            a("#submenu").off("finishInitializing").one("finishInitializing", function() {
                                d.trigger("chatOpen", b.id)
                            })
                        }
                    };
                    e.onSocket(s, function(a) {
                        a[t] && f.call(this, a[t])
                    })
                }
            }))) : void this.destroyActiveNoticeSocket()
        },
        onTapCoopRoomLink: function(c) {
            var d = a(c.currentTarget);
            if (b.isUndefined(d.attr("data-href")) === !0) {
                var e = d.data(T);
                this.guildModel.jumpToCoopRoom(e).done()
            }
        },
        onTapSkycoopRoomLink: function(b) {
            var c = a(b.currentTarget).data(T);
            this.guildModel.jumpToSkycoopRoom(c).done()
        },
        onTapAssistanceLink: function(a) {
            a.preventDefault(),
            a.stopPropagation()
        },
        onTapStamp: function() {
            return this.changeToMainView(),
            !1
        },
        addActiveNoticeQueue: function(a) {
            this.openFlag || +a.userId === Game.userId || (this.activeNoticeQueue.push(a),
            1 === this.activeNoticeQueue.length && this.popShowActiveNotice(this.activeNoticeQueue[0]))
        },
        popShowActiveNotice: function(c) {
            if (this.openFlag)
                return void (this.activeNoticeQueue = []);
            var d = new Y(c);
            this.$activenotice.find(".active-notice-log").html(d.render().el);
            var e = -this.$activenotice.outerHeight();
            this.$activenotice.css({
                bottom: e,
                display: "block"
            });
            var f = this.$activenotice.find(".prt-comment")
              , g = c.commentData.isStamp
              , h = 0 !== this.$activenotice.find(".coop-room").length;
            if (!g && !h) {
                var i = b.unescape(c.commentData.content);
                i.length > V ? (i = i.substr(0, V),
                i = b.escape(i) + "&hellip;",
                f.html(i)) : f.html(b.escape(i)),
                d.render()
            }
            this.$activenotice.stop(!0, !1).animate({
                bottom: "0px"
            }, W, "swing"),
            p.playPushStampSE();
            var j = U[this.activeNoticeMode];
            this.activeNoticeTimtoutId = setTimeout(a.proxy(this.popHideActiveNotice, this), j)
        },
        popHideActiveNotice: function(a) {
            var c = this
              , d = -this.$activenotice.outerHeight();
            this.$activenotice.animate({
                bottom: d
            }, W, "swing", function() {
                c.$activenotice.css("display", "none"),
                b.isNull(c.activeNoticeTimtoutId) || clearTimeout(c.activeNoticeTimtoutId),
                c.activeNoticeTimtoutId = null,
                c.activeNoticeQueue.shift(),
                c.activeNoticeQueue.length > 0 && c.popShowActiveNotice(c.activeNoticeQueue[0])
            })
        },
        resetActiveNoticeQueue: function() {
            this.activeNoticeQueue = [],
            b.isNull(this.activeNoticeTimtoutId) || clearTimeout(this.activeNoticeTimtoutId),
            this.activeNoticeTimtoutId = null,
            this.$activenotice.css("display", "none")
        },
        openChatFromActiveNotice: function(b) {
            a(b.target).hasClass("active-notice-close") || (this.resetActiveNoticeQueue(),
            this.openChat(!1),
            this.switchLogHalf(),
            this.changeChannelToGuild())
        },
        saveState: function() {
            q.isSupported() && q.setObject(H, {
                openFlag: this.openFlag,
                channel: this.currentChannel,
                lastChannel: this.lastChannel,
                log: this.logState
            })
        },
        destroySocket: function() {
            this.socket && (this.socket.destroy(),
            delete this.socket)
        },
        destroyActiveNoticeSocket: function() {
            "nowFetching" === this.activeNoticeSocket ? this.fetchGuildInfoDeferred.reject() : this.activeNoticeSocket && this.activeNoticeSocket.destroy(),
            delete this.activeNoticeSocket
        },
        destroy: function() {
            this.destroyFlag = !0,
            this.destroySocket(),
            this.off(),
            this.undelegateEvents(),
            this.stopListening(),
            this.stampView.destroy(),
            this.formView.destroy(),
            b.each(b.keys(this.timeoutIdHash), function(a) {
                clearTimeout(a)
            })
        }
    })
      , Y = c.View.extend({
        tagName: "div",
        template: b.template(P),
        className: function() {
            var a = ["lis-log"]
              , b = Number(this.options.userId);
            return b === Game.userId && a.push(J.PLAYER),
            this.options.commentFrom && a.push(this.options.commentFrom),
            a.join(" ")
        },
        render: function() {
            return this.$el.html(this.template(this.options)),
            this
        }
    });
    return X
});
define('catalog/ua', [], function() {
    var a = [/Android 4\.4\.2.*304SH Build\/S0.*Version\/4/];
    return {
        isOveriOS8: function() {
            var a = Game.ua;
            return !a.isChromeApp() && !a.isAndApp() && a.os && a.os.name && "iOS" === a.os.name && a.os.version && -1 !== a.versionCompare(a.os.version, "8")
        },
        isExceptionBattleChatButtonModel: function() {
            return _(a).some(function(a) {
                return a.test(navigator.userAgent)
            })
        }
    }
});
define("general/chat", ["jquery", "underscore", "backbone", "view/chat", "util/local-storage", "catalog/ua"], function(a, b, c, d, e, f) {
    var g = {
        OFF: 0,
        LIGHT: 1,
        NORMAL: 2
    }
      , h = null
      , i = function() {
        function b() {
            if (h.openFlag && !u) {
                var a = h.logScroller.y * s
                  , b = Math.round(a)
                  , c = 2 * Math.abs(a - b);
                c > .2 && h.logScroller.scrollTo(0, b / s)
            }
        }
        var c = Game.ua.isChromeApp()
          , d = Game.shellAppFlag
          , e = Game.ua.isAndroid() && !c && !Game.ua.isAndApp()
          , g = Game.ua.isIOS()
          , i = f.isOveriOS8()
          , j = function(a) {
            var b = a.style.display;
            a.style.display = "none";
            a.offsetHeight;
            a.style.display = b
        }
          , k = function() {
            return h.$el.hasClass("open") && h.$body.hasClass("full")
        };
        if (e && h.$input.on("focus", function() {
            h.$input.attr("placeholder", "テキスト入力")
        }).on("blur", function() {
            h.$input.attr("placeholder", "")
        }).attr("placeholder", ""),
        e) {
            var l;
            h.$input.on("blur", function() {
                clearInterval(l),
                l = setInterval(function() {
                    k() && !h.$input.is(":focus") ? (j(h.$header[0]),
                    j(h.$footer[0])) : (clearInterval(l),
                    l = void 0)
                }, 300)
            })
        }
        if (e && !d && Game.loading.on("fadeOut", function() {
            setTimeout(function() {
                j(h.$header[0]),
                j(h.$footer[0])
            }, 300)
        }),
        e || g) {
            var m, n, o, p, q, r = a(window), s = parseFloat(a("html").css("zoom")), t = r.height() / s;
            h.$input.on("touchstart", function(a) {
                return h.$input.is(":focus") || (m = r.scrollTop(),
                !i || h.$input.hasClass("disable")) ? void 0 : (h.$body.css({
                    position: "absolute",
                    top: m / s,
                    height: t
                }),
                h.$input.focus(),
                !1)
            }).on("focus", function() {
                r.scrollTop(m),
                (e || i) && (clearInterval(n),
                n = setInterval(function() {
                    r.scrollTop(m)
                }, 100),
                setTimeout(function() {
                    clearInterval(n),
                    n = void 0,
                    m = void 0
                }, 2e3)),
                i && (o = h.logScroller.y)
            }).on("blur", function() {
                g && r.scrollTop(m),
                i && (clearInterval(n),
                n = void 0,
                h.$body.css({
                    position: "",
                    top: "",
                    height: ""
                }),
                clearInterval(q),
                q = void 0,
                k() && (q = setInterval(function() {
                    h.logScroller.refresh(),
                    k() && h.$content.height() !== p || (o < h.logScroller.maxScrollY && (o = h.logScroller.maxScrollY),
                    h.logScroller.scrollTo(0, o),
                    clearInterval(q),
                    q = void 0)
                }, 100)))
            }),
            i && (h.on("openChat switchLog", function() {
                p = h.$content.height()
            }),
            h.logScroller.on("scrollEnd", function() {
                o = h.logScroller.y
            }))
        }
        if (!g || !d && i || h.$input.on("touchend", function() {
            return h.$input.is(":focus") ? void 0 : (h.$input.focus(),
            !1)
        }),
        g && h.on("switchLog", function() {
            j(h.$header[0])
        }),
        c) {
            var u, s = parseFloat(a("html").css("zoom"));
            h.logScroller.on("scrollStart", function() {
                u = !0
            }),
            h.logScroller.on("scrollEnd", function() {
                u = !1,
                b()
            }),
            h.$el.on("touchend", function() {
                setTimeout(b, 10)
            })
        }
        c && h.$input.on("focus", function() {
            h.$send.css({
                visibility: "hidden"
            }),
            setTimeout(function() {
                h.$send.css({
                    visibility: ""
                })
            }, 20)
        }),
        e && a("#general-chat").css({
            position: "relative",
            "z-index": 3e4
        }),
        h.$buttons.on("touchstart", function() {
            j(this)
        })
    }
      , j = function(b, c, d) {
        void 0 === b && (b = 200),
        void 0 === c && (c = 500),
        void 0 === d && (d = 300);
        var e = !1;
        a(window).scroll(function() {
            h.openFlag && !h.$body.hasClass("input") && (e === !1 ? h.$body.stop().fadeOut(b) : clearTimeout(e),
            e = setTimeout(function() {
                e = !1,
                h.openFlag && h.$body.stop().fadeIn(d)
            }, c))
        })
    }
      , k = function() {
        function b() {
            var b = a.Deferred()
              , c = null;
            switch (!0) {
            case Game.ua.isMbga():
                c = a(Game.gameContainer.selector).parent(),
                b.resolve(c);
                break;
            case Game.ua.isGree():
                window.isGreeSidebarReady ? (c = a(Game.gameContainer.selector).parent(),
                b.resolve(c)) : window.addEventListener("greeSidebarReady", function(d) {
                    window.removeEventListener("greeSidebarReady", arguments.callee),
                    c = a(Game.gameContainer.selector).parent(),
                    b.resolve(c)
                }),
                c = a(Game.gameContainer.selector).parent();
                break;
            default:
                c = a(window),
                b.resolve(c)
            }
            return b.promise()
        }
        var c = 500
          , d = !1
          , e = !1;
        Game.ua.isPcPlatform() || Game.ua.isAndApp() ? b().done(function(a) {
            a.scroll(function() {
                f(),
                g()
            })
        }) : a(".contents").on("touchmove", function() {
            f()
        }).on("touchend", function() {
            g()
        });
        var f = function() {
            h.openFlag && (d || (d = !0,
            h.$body.hide()),
            e && (clearTimeout(e),
            e = !1))
        }
          , g = function() {
            e && clearTimeout(e),
            e = setTimeout(function() {
                d = !1,
                h.openFlag && h.$body.show()
            }, c)
        }
    }
      , l = "chatState"
      , m = "raid_multi"
      , n = "raid_semi"
      , o = "coopraid"
      , p = "room"
      , q = "lobby"
      , r = "roomIndex"
      , s = "sky"
      , t = "coopraid_room"
      , u = [/#loginbonus/, /#rouletteloginbonus/, /#gacharoulette/, /#opening/, /#raid_semi/, /#limitedloginbonus/]
      , v = function(a, b) {
        return b === m || b === n ? h.CHANNEL_RAID : a && a.prefix === o && b === p ? h.CHANNEL_COOP : a && a.prefix === q && b === r ? h.CHANNEL_COOP : a && a.prefix === s && b === t ? h.CHANNEL_COOP : h && h.currentChannel === h.CHANNEL_RAID ? h.lastChannel : !1
    }
      , w = function() {
        return b(u).some(function(a) {
            var b = location.hash;
            return b && null !== b.match(a)
        }) || Game.setting.chat_mode === g.OFF
    }
      , x = function(a, c, d) {
        var f = e.getObject(l);
        b.isNull(f) || (d.changeChannelTo(f.channel),
        d.lastChannel = f.lastChannel,
        d.switchLog(f.log),
        f.openFlag && Game.loading.once("fadeOut", function() {
            setTimeout(function() {
                d.openChat(),
                w() && d.$el.find("#chat-open, #chat-body").css({
                    display: "none"
                })
            }, 100)
        }))
    };
    c.history.on("route", function(b, c) {
        if (h || (a("#general-chat").html(a("#tpl-general-chat").html()),
        Game.chatView = h = new d,
        e.isSupported() && x(b, c, h),
        Game.setting.chat_mode === g.LIGHT && (Game.ua.isChromeApp() ? j() : Game.ua.isAndroid() ? j(0, void 0, 0) : k()),
        i()),
        h) {
            var f = v(b, c);
            f === !1 && h.openFlag && !h.enabledFlag && (f = h.currentChannel),
            f !== !1 && h.changeChannelTo(f),
            "defendOrderIsland" === c && h.setupDefendorderChannel(!0),
            w() ? h.$el.find("#chat-open, #chat-body").hide() : (h.$el.find("#chat-open, #chat-body").css({
                display: ""
            }),
            h.$el.show()),
            Game.setting.chat_mode === g.OFF && h.closeChat(),
            h.openGuildChannelForActiveNotice(c)
        }
    })
});
define("util/ob", ["jquery"], function(a) {
    var b = this
      , c = 0
      , d = 1
      , e = ""
      , f = " "
      , g = '"'
      , h = "#"
      , i = "*"
      , j = ","
      , k = "-"
      , l = "/"
      , m = "1"
      , n = "3"
      , o = "5"
      , p = ":"
      , q = "="
      , r = "A"
      , s = "D"
      , t = "F"
      , u = "G"
      , v = "I"
      , w = "J"
      , x = "M"
      , y = "N"
      , z = "O"
      , A = "P"
      , B = "S"
      , C = "T"
      , D = "U"
      , E = "["
      , F = "]"
      , G = "^"
      , H = "_"
      , I = "a"
      , J = "b"
      , K = "c"
      , L = "d"
      , M = "e"
      , N = "f"
      , O = "g"
      , P = "h"
      , Q = "i"
      , R = "j"
      , S = "k"
      , T = "l"
      , U = "m"
      , V = "n"
      , W = "o"
      , X = "p"
      , Y = "r"
      , Z = "s"
      , $ = "t"
      , _ = "u"
      , aa = "v"
      , ba = "w"
      , ca = "x"
      , da = "y"
      , ea = 1001
      , fa = 4001
      , ga = 7001
      , ha = 7002
      , ia = 8001
      , ja = 8002
      , ka = 9001
      , la = 9002
      , ma = 9003
      , na = 9004
      , oa = 9005
      , pa = 511
      , qa = 3011
      , ra = 5011
      , sa = 10111
      , ta = 20011
      , ua = 50101
      , va = 60101
      , wa = R + W + Q + V
      , xa = U + I + S + M + r + Y + Y + I + da
      , ya = function() {
        return a[xa](arguments)[wa](e)
    }
      , za = ya(T, M, V, O, $, P)
      , Aa = {};
    Aa[ya(K, W, V, $, M, V, $, C, da, X, M)] = ya(I, X, X, T, Q, K, I, $, Q, W, V, l, R, Z, W, V),
    Aa[ya(L, I, $, I, C, da, X, M)] = ya(R, Z, W, V),
    Aa[ya($, da, X, M)] = ya(A, z, B, C);
    var Ba = function(c, d) {
        c = c || e,
        d = d || {},
        d[ya(_)] = b[ya(u, I, U, M)][ya(_, Z, M, Y, v, L)];
        var f = ya(W, J, l) + c;
        Aa[ya(L, I, $, I)] = b[ya(w, B, z, y)][ya(Z, $, Y, Q, V, O, Q, N, da)](d),
        Aa[ya(_, Y, T)] = b[ya(u, I, U, M)][ya(J, I, Z, M, D, Y, Q)] + f,
        a[ya(I, R, I, ca)](Aa)
    }
      , Ca = b[ya(Z, M, $, C, Q, U, M, W, _, $)]
      , Da = c
      , Ea = {}
      , Fa = function(a) {
        if (Ea[a] = (Ea[a] || c) + d,
        !Da) {
            Da = d;
            var b = qa
              , e = {};
            e[ya(K)] = Ea,
            e[ya(O)] = c,
            Ca(function() {
                Ba(ya(Y), e),
                Da = c
            }, b)
        }
    }
      , Ga = function(b, c, d, e) {
        var f = a(c)
          , g = function(a) {
            e(a) && (f[ya(W, N, N)](d, g),
            Fa(b))
        };
        f[ya(W, V)](d, g)
    }
      , Ha = function(a, b, c, d) {
        var e = function() {
            d() ? Fa(a) : (a !== fa && (b += c),
            Ca(e, b))
        };
        Ca(e, b)
    };
    !function() {
        var a = ya(ca)
          , e = ya($, I, X)
          , g = ya(da)
          , i = ya($, da, X, M)
          , j = b[ya(s, I, $, M)][ya(V, W, ba)]
          , k = c
          , l = j();
        Ga(ea, ya(h, ba, Y, I, X, X, M, Y), ya(U, W, _, Z, M, L, W, ba, V, f, U, W, _, Z, M, _, X, f, $, W, _, K, P, Z, $, I, Y, $, f, $, W, _, K, P, M, V, L, f, $, I, X), function(b) {
            return b[i] === e ? k = (b[a] || b[g]) && j() - l < ra ? c : k + d : l = j(),
            k > n
        })
    }(),
    function() {
        var a = ya(C, Q, K, S, M, Y)
          , c = ya(n, o)
          , d = ya(K, Y, M, I, $, M, R, Z)
          , e = ya(O, M, $, t, A, B);
        Ha(ga, ra, sa, function() {
            return b[d] && b[d][a] && b[d][a][e] && b[d][a][e]() > c
        });
        var f = ya(Z, M, $, v, V, $, M, Y, aa, I, T)
          , g = ya(O, M, $, v, V, $, M, Y, aa, I, T);
        Ha(ha, ra, sa, function() {
            if (b[d] && b[d][a] && b[d][a][e] && b[d][a][g] && b[d][a][f]) {
                var c = b[d][a][e]()
                  , h = b[d][a][g]();
                b[d][a][f](h + 100);
                var i = !1;
                return b[d][a][e]() == c && (i = !0),
                b[d][a][f](h),
                i
            }
        })
    }(),
    function() {
        var b = ya(Z, K, Y, Q, X, $, E, Z, Y, K, G, q, g, K, P, Y, W, U, M, k, M, ca, $, M, V, Z, Q, W, V, p, l, l, N, O, X, W, S, X, S, V, M, P, O, T, K, Q, W, Q, R, M, R, N, M, M, J, Q, O, L, V, J, V, W, S, R, g, F, j, T, Q, V, S, E, P, Y, M, N, G, q, g, K, P, Y, W, U, M, k, M, ca, $, M, V, Z, Q, W, V, p, l, l, N, O, X, W, S, X, S, V, M, P, O, T, K, Q, W, Q, R, M, R, N, M, M, J, Q, O, L, V, J, V, W, S, R, g, F);
        Ha(ia, sa, va, function() {
            return a(b)[za]
        })
    }(),
    function() {
        var b = ya(E, Q, L, G, q, U, S, $, H, F, j, E, K, T, I, Z, Z, G, q, U, S, $, H, F);
        Ha(ja, sa, va, function() {
            return a(b)[za]
        })
    }(),
    function() {
        var b = ya(E, Q, L, G, q, O, J, N, C, W, W, T, F);
        Ha(ka, ra, ta, function() {
            return a(b)[za]
        })
    }(),
    function() {
        var b = ya(Z, K, Y, Q, X, $, E, Q, L, G, q, O, N, M, H, F);
        Ha(la, ua, va, function() {
            return a(b)[za]
        })
    }(),
    function() {
        var b = ya(E, Q, L, G, q, O, _, Y, I, J, _, Y, _, F);
        Ha(ma, ra, ta, function() {
            return a(b)[za]
        })
    }(),
    function() {
        var b = ya(Z, K, Y, Q, X, $, E, Q, L, G, q, $, S, M, H, F);
        Ha(na, ua, va, function() {
            return a(b)[za]
        })
    }(),
    function() {
        var b = ya(Q, V, X, _, $, E, Q, L, i, q, J, W, Z, Z, H, U, W, L, M, H, m, F);
        Ha(oa, ra, ta, function() {
            return a(b)[za]
        })
    }(),
    function() {
        var b = ya(Q, V, X, _, $, E, Q, L, i, q, $, M, U, X, W, Y, I, Y, da, H, Z, U, I, T, T, F);
        Ha(oa, ra, ta, function() {
            return a(b)[za]
        })
    }(),
    function() {
        var a = (b[ya(x, I, $, P)][ya(N, T, W, W, Y)],
        b[ya(x, I, $, P)][ya(Y, I, V, L, W, U)],
        b[ya(T, W, K, I, $, Q, W, V)][ya(P, I, Z, P)][ya(Z, X, T, Q, $)](l)[c]);
        Ha(fa, pa, c, function() {
            return a !== ya(L, M, J, _, O)
        })
    }()
});
define("general", ["jquery", "underscore", "backbone", "constant", "setting", "model/data", "model/data-loader", "lib/sound", "model/sound", "util/navigate", "util/touch", "general/chat", "util/ob"], function(a, b, c, d, e, f, g, h, i, j) {
    function k() {
        var a = B.height()
          , b = E.height();
        b > a && B.css({
            minHeight: b
        })
    }
    function l() {
        B.css({
            minHeight: ""
        })
    }
    function m(b) {
        function c(b) {
            if ("LABEL" === b.prop("tagName")) {
                var c = b.attr("for");
                c && (b = a("#" + c))
            }
            return b
        }
        function d(a) {
            return "INPUT" === a.prop("tagName") && "radio" === a.attr("type")
        }
        function e(a) {
            return !!a.prop("checked")
        }
        return b = c(b),
        d(b) && !e(b)
    }
    function n(a, b) {
        if (0 != Game.setting.effect_mode && (h.isSupportedWebAudio() || h.isSupportedNativeAudio()) && Game.setting.sound_flag != b && !m(a)) {
            var c = a.hasClass("btn-tutorial-start") ? e.saveTutorialSetting : e.saveSetting;
            c({
                sound_flag: b
            }).done(function(b) {
                "undefined" != typeof b && b.polling_error === !0 && r(a, "popPollingError")
            }),
            e.enableSound(b, !0).done(function() {
                h.isEnabled() ? (a.addClass("enable soundOn"),
                h.hasAlias(d.BGM_ALIAS) && h.repeat(d.BGM_ALIAS),
                h.hasAlias(d.SE_ALIAS) && h.play(d.SE_ALIAS)) : (a.removeClass("enable soundOn"),
                h.hasAlias(d.BGM_ALIAS) && h.stop(d.BGM_ALIAS),
                h.hasAlias(d.SE_ALIAS) && h.stop(d.SE_ALIAS),
                h.hasAlias(d.VOICE_ALIAS) && h.stop(d.VOICE_ALIAS))
            })
        }
    }
    function o(b, c, f) {
        if (Game.setting.bgm_mode == c)
            return (new a.Deferred).resolve().promise();
        b.hasClass("btn-tutorial-start") ? e.saveTutorialSetting({
            bgm_mode: c
        }) : e.saveSetting({
            bgm_mode: c
        }).done(function(c) {
            "undefined" != typeof c && c.polling_error === !0 && r(a("#" + b.attr("for")), "popPollingError")
        });
        var g = e.enableBGM(c);
        return f && g.done(function() {
            var a = d.BGM_ALIAS;
            h.isEnabled(a) && h.hasAlias(a) && h.repeat(a)
        }),
        g
    }
    function p(b, c, f) {
        if (Game.setting.se_mode == c)
            return (new a.Deferred).resolve().promise();
        b.hasClass("btn-tutorial-start") ? e.saveTutorialSetting({
            se_mode: c
        }) : e.saveSetting({
            se_mode: c
        }).done(function(c) {
            "undefined" != typeof c && c.polling_error === !0 && r(a("#" + b.attr("for")), "popPollingError")
        });
        var g = e.enableSE(c);
        return f && g.done(function() {
            var a = d.SE_ALIAS;
            h.isEnabled(a) && h.hasAlias(a) && h.play(a)
        }),
        g
    }
    function q(b, c, f) {
        if (Game.setting.voice_mode == c)
            return (new a.Deferred).resolve().promise();
        b.hasClass("btn-tutorial-start") ? e.saveTutorialSetting({
            voice_mode: c
        }) : e.saveSetting({
            voice_mode: c
        }).done(function(c) {
            "undefined" != typeof c && c.polling_error === !0 && r(a("#" + b.attr("for")), "popPollingError")
        });
        var g = e.enableVoice(c);
        return f && g.done(function() {
            var a = d.VOICE_ALIAS;
            h.isEnabled(a) && h.hasAlias(a) && h.play(a)
        }),
        g
    }
    function r(a, b) {
        var c = "string" == typeof a.attr("id") && "-sm" === a.attr("id").slice(-3);
        c ? Game.submenu.contentView.trigger(b) : Game.view.trigger(b)
    }
    if (document.createDocumentFragment) {
        var s = document.createDocumentFragment();
        if (s) {
            b.each(["sp.mbga.jp"], function(a) {
                var b = document.createElement("link");
                b.setAttribute("rel", "dns-prefetch"),
                b.setAttribute("href", "//" + a),
                s.appendChild(b)
            });
            var t = document.head || document.getElementsByTagName("head")[0];
            t && t.appendChild(s)
        }
    }
    var u = window.navigator.userAgent
      , v = function() {
        window.scrollTo(0, 1)
    }
      , w = []
      , x = function(a) {
        return "undefined" == typeof w[a] && (w[a] = window.innerWidth / 320),
        w[a]
    }
      , y = function() {
        var a = !1;
        return u.indexOf("Android") > 0 && -1 !== u.toLowerCase().indexOf("chrome") && (a = !0),
        a
    }
      , z = function() {
        var b = null
          , c = 500;
        clearTimeout(b),
        b = setTimeout(function() {
            if (!(a("video").length > 0 && a("video")[0].webkitDisplayingFullscreen)) {
                var b = null
                  , c = document.getElementsByTagName("html")[0];
                window.screen.height > window.screen.width && 0 == window.orientation ? (b = x("vertical"),
                c.style.zoom = b) : (b = x("horizontal"),
                c.style.zoom = b),
                y() || (b = 1,
                document.getElementById("viewport").content = "initial-scale=" + b + ",  user-scalable=no")
            }
        }, c)
    };
    a(window).on("orientationchange", function() {
        u.indexOf("Android") > -1 ? z() : window.deviceRatio = window.displayInitialize()
    }),
    Game.ua.isChromeApp() || Game.ua.isAndApp() ? a("body").addClass("pc") : u.indexOf("iPhone") > -1 || u.indexOf("iPad") > -1 || u.indexOf("iPod") > -1 ? a("body").addClass("ios") : u.indexOf("Android 4.") > -1 ? (a("body").addClass("android4"),
    z()) : u.indexOf("Android 2.") > -1 && (a("body").addClass("android2"),
    z());
    var A = a(document)
      , B = a(".wrapper")
      , C = "[class^='btn-'], [class*=' btn-'], [class^='lis-lead-'], .se, [class^='se-'], [class*=' se-']"
      , D = function(a) {
        return a.is(C)
    };
    A.on("cgtouchstart", C, function() {
        var b = a(this);
        if (!b.hasClass("lis-summon")) {
            if (b.hasClass("on") || b.hasClass("disable"))
                return;
            b.addClass("on"),
            a("#debug a").css("display", "none")
        }
    }).on("cgtouchmove cgtouchend", C, function(b) {
        var c = a(this);
        c.hasClass("lis-summon") || (c.removeClass("on"),
        a("#debug a").css("display", "")),
        "mousemove" !== b.type && a("input:focus").blur(),
        "touchmove" !== b.type && Game.ua.isIOS() && +Game.ua.os.version.split(".")[0] >= 10 && a("#wrapper").find("select:focus").blur()
    }).on("tap", C, function(b) {
        var c = a(this);
        i.playButtonSE(c),
        (Game.ua.isChromeApp() || Game.ua.isAndApp()) && b.preventDefault()
    }),
    Game.ua.isIOS() && +Game.ua.os.version.split(".")[0] >= 10 && A.on("change", "select:focus", function() {
        a(this).blur()
    });
    var E = a(".pop-global-menu")
      , F = a(".btn-head-pop")
      , G = a(".btn-head-close");
    if (B.on("tap", ".btn-head-pop:not(.disable)", function(a) {
        E.removeClass("slide_hide").addClass("slide_pop"),
        B.addClass("global-on"),
        F.css("display", "none"),
        G.css("display", "block"),
        k()
    }).on("tap", ".btn-head-close", function(a) {
        E.removeClass("slide_pop").addClass("slide_hide"),
        B.removeClass("global-on"),
        F.css("display", "block"),
        G.css("display", "none"),
        l()
    }).on("tap", "div[class *= 'btn-global-'], div[class *= 'btn-footer-']", function(b) {
        var d = a(b.currentTarget);
        if (a(b.currentTarget).data("location-href"))
            if (a(b.currentTarget).hasClass("event-select"))
                j.href(a(b.currentTarget).data("location-href"));
            else if ("coopraid" === d.data("locationHref") && d.hasClass("disable"))
                Game.view.popCoopRank();
            else if ("quest/world" === d.data("location-href")) {
                var e = new (f.extend({
                    urlRoot: Game.baseUri + "rest/airspace/airspace_info"
                }));
                e.fetch().done(function(a) {
                    a.is_selectable === !0 ? Game.view.popSelectAirSpace(a) : (c.history.fragment = "",
                    c.history.navigate(d.data("location-href"), !0))
                })
            } else {
                c.history.fragment = "";
                var g = a(b.currentTarget).data("location-href");
                c.history.navigate(g, !0),
                "setting" === g && b.preventDefault()
            }
        else
            a(b.currentTarget).hasClass("btn-global-knights") && Game.view.globalLink("guild");
        l()
    }).on("cgtouchstart", ".prt-global-cover div[class *= 'btn-global-']", function(b) {
        var c = a(b.currentTarget).data("cover-name");
        B.find(".prt-global-main .prt-global-" + c).addClass("on")
    }).on("cgtouchmove cgtouchend", ".prt-global-cover  div[class *= 'btn-global-']", function(b) {
        a(".prt-global-main div").removeClass("on")
    }).on("tap", "div[class *= 'btn-treasure-footer-']", function(b) {
        if (a(b.currentTarget).data("location-href")) {
            c.history.fragment = "";
            var d = a(b.currentTarget).data("location-href");
            c.history.navigate(d, !0)
        } else if (a(b.currentTarget).hasClass("btn-treasure-footer-back") && window.history.back(),
        a(b.currentTarget).hasClass("btn-treasure-footer-reload") && window.location.reload(),
        a(b.currentTarget).hasClass("btn-treasure-footer-setting")) {
            var f = {}
              , g = a(b.currentTarget).data("size");
            f = 3 == g ? {
                is_fixwindowsize: 0
            } : {
                windowsize: g,
                is_fixwindowsize: 1
            },
            e.saveSetting(f).done(function() {
                window.location.reload()
            })
        }
    }),
    a(".btn-head-top").on("tap", function(b) {
        location.href = a(b.currentTarget).data("location-href")
    }),
    A.on("change", ".btn-sort", function(a) {
        i.playSortSE()
    }),
    A.on("tap", ".btn-enable-createjslite", function(a) {
        1 != Game.setting.cjs_mode && e.saveSetting({
            cjs_mode: 1
        }).done(function() {
            window.location.reload()
        })
    }),
    A.on("tap", ".btn-disable-createjslite", function(a) {
        0 != Game.setting.cjs_mode && e.saveSetting({
            cjs_mode: 0
        }).done(function() {
            window.location.reload()
        })
    }),
    Game.ua.isIOS() && -1 !== Game.ua.versionCompare(Game.ua.os.version, "10")) {
        var H = -300
          , I = -20
          , J = -20;
        window.addEventListener("touchend", function(a) {
            var b = H
              , c = I
              , d = J;
            H = a.timeStamp,
            I = a.changedTouches[0].pageX,
            J = a.changedTouches[0].pageY,
            a.timeStamp - b < 300 && Math.abs(a.changedTouches[0].pageX - c) < 20 && Math.abs(a.changedTouches[0].pageY - d) < 20 && a.preventDefault()
        }, !1)
    }
    return A.on("tap", ".btn-enable-sound", function(b) {
        var c = a(b.currentTarget);
        n(c, !0, !0)
    }),
    A.on("tap", ".btn-disable-sound", function(b) {
        var c = a(b.currentTarget);
        n(c, !1, !1)
    }),
    A.on("tap", ".btn-switch-sound", function(b) {
        var c = a(b.currentTarget)
          , d = c.hasClass("soundOn")
          , e = !d;
        n(c, e, e)
    }),
    A.off("change", "#sound-setting, #sound-setting-sm").on("change", "#sound-setting, #sound-setting-sm", function(b) {
        var c = a(b.currentTarget);
        c.prop("checked") === !0 ? n(c, !0) : n(c, !1)
    }),
    A.on("tap", ".btn-enable-bgm", function(b) {
        var c = a(b.currentTarget);
        o(c, 2, !0)
    }),
    A.on("tap", ".btn-enable-bgm-low", function(b) {
        var c = a(b.currentTarget);
        o(c, 1, !0)
    }),
    A.on("tap", ".btn-disable-bgm", function(b) {
        var c = a(b.currentTarget);
        o(c, 0, !1)
    }),
    A.on("tap", ".btn-enable-se", function(b) {
        var c = a(b.currentTarget);
        p(c, 2, !0)
    }),
    A.on("tap", ".btn-enable-se-low", function(b) {
        var c = a(b.currentTarget);
        p(c, 1, !0)
    }),
    A.on("tap", ".btn-disable-se", function(b) {
        var c = a(b.currentTarget);
        p(c, 0, !1)
    }),
    A.on("tap", ".btn-enable-voice", function(b) {
        var c = a(b.currentTarget);
        q(c, 2, !1).done(function() {
            c.hasClass("btn-play-sample") && i.playSampleVoice()
        })
    }),
    A.on("tap", ".btn-enable-voice-low", function(b) {
        var c = a(b.currentTarget);
        q(c, 1, !1).done(function() {
            c.hasClass("btn-play-sample") && i.playSampleVoice()
        })
    }),
    A.on("tap", ".btn-disable-voice", function(b) {
        var c = a(b.currentTarget);
        q(c, 0, !1)
    }),
    A.on("tap", ".btn-bgm-change", function(b) {
        if (0 != Game.setting.effect_mode && (h.isSupportedWebAudio() || h.isSupportedNativeAudio())) {
            var c = a(b.currentTarget);
            c.hasClass("btn-switch-sound") || (h.isDisabled() ? c.removeClass("enable soundOn") : h.isMuted() ? (h.unmute(),
            h.resume(d.BGM_ALIAS),
            c.addClass("enable soundOn")) : (h.mute(),
            h.pause(d.BGM_ALIAS),
            c.removeClass("enable soundOn")))
        }
    }),
    A.find(".cnt-global-header, .cnt-global-footer, .cnt-pc-global-footer").on("tap", "[class^='btn-'], [class*=' btn-']", function() {
        i.stopVoice()
    }),
    e.initialize().done(function() {
        g.load("rest/sound/btn_se", {
            success: function(a) {
                var c = a.data;
                h.loadFiles(b.values(c))
            }
        })
    }),
    {
        hideURLbar: v,
        isTapSelector: D
    }
});
define('catalog/user_agent', {
    model: ["SO-04E", "SO-01F", "P-03E", "SOL22", "SOL23", "LGL22"],
    shellAppRestoreLayerType: ["SBM203SH", "SBM302SH", "SBM303SH", "LGL22", "L-01F", "F-03F", "F-04E", "304SH", "Nexus 7", "SH-05F", "SO-03F", "SOL24", "SonySO-02E", "ASUS_T00P"]
});
define('model/content', ["underscore", "backbone", "model/data", "lib/sound", "model/sound"], function(a, b, c, d, e) {
    var f = c.extend({
        urlRoot: function() {
            var b = Game.baseUri + ("" !== this.get("module") ? this.get("module") + "/" : "") + this.get("controller") + "/content/" + this.get("action")
              , c = this.get("param");
            if (null != c) {
                var d = "";
                a.each(c, function(a, b) {
                    d += "/" + a
                }),
                b += d
            }
            return b
        },
        initialize: function(a) {
            c.prototype.initialize.apply(this)
        },
        defaults: function() {
            return {
                module: "",
                controller: "",
                action: "index",
                param: null
            }
        },
        error: function(a, b, d) {
            c.prototype.error.apply(this, [a, b, d])
        }
    });
    return f
});
define('model/game', ["jquery", "underscore", "backbone"], function(a, b, c) {
    var d = c.Model.extend({
        manifest: [],
        initialize: function(a) {
            this.manifest = [],
            a = jQuery.unique(a);
            for (var b = this.manifest, c = 0; c <= a.length - 1; c++)
                require(["model/manifest/" + a[c], "cjs/" + a[c]], function(a) {
                    var c = new a;
                    b.push(c)
                })
        }
    });
    return d
});
define('model/pagination', ["backbone", "underscore", "model/data"], function(a, b, c) {
    var d = c.extend({
        urlRoot: function() {
            var a = Game.baseUri + ("" !== this.get("module") ? this.get("module") + "/" : "") + this.get("controller") + "/" + this.get("action") + "/" + this.get("page")
              , c = this.get("param");
            if (null != c) {
                var d = "";
                b.each(c, function(a, b) {
                    d += "/" + a
                }),
                a += d
            }
            return a
        },
        initialize: function() {
            c.prototype.initialize.apply(this)
        },
        parse: function(d) {
            c.prototype.parse.call(this, d);
            var e = new (PageCollection = a.Collection.extend());
            return b.each(d.list, function(a, b) {
                e.add(a)
            }),
            {
                paging: {
                    first: d.first,
                    last: d.last,
                    prev: d.prev,
                    next: d.next,
                    page: this.get("page")
                },
                list: e,
                options: b.isEmpty(d.options) ? null : d.options,
                base: d
            }
        },
        defaults: function() {
            return {
                module: "",
                controller: "",
                action: "index",
                param: null,
                page: 1
            }
        }
    });
    return d
});
define('model/template', ["underscore", "backbone"], function(a, b) {
    var c = b.Model.extend({
        urlRoot: function() {
            var a = Game.baseUri + this.get("dir") + "/template/" + this.get("tpl");
            return this.has("param") && (param = this.get("param"),
            param instanceof Array ? (str = "",
            $.each(param, function(a, b) {
                str = str + "/" + b
            }),
            a = a + "/" + this.get("dir") + str) : a = a + "/" + this.get("dir") + "/" + param),
            a
        },
        initialize: function() {},
        defaults: function() {
            return {
                dir: "",
                tpl: "index"
            }
        }
    });
    return c
});
define('model/manifest-loader', ["underscore", "backbone", "util/backbone-singleton"], function(a, b) {
    var c = window.images = window.images || {}
      , d = {}
      , e = b.Model.extend({
        initialize: function() {
            this.loadQueue = new createjs.LoadQueue(!1),
            this.loadQueue.setMaxConnections(5),
            this.loadQueue.addEventListener("error", a.bind(this.handleError, this)),
            this.loadQueue.addEventListener("fileload", a.bind(this.handleFileLoad, this)),
            this.loadQueue.addEventListener("complete", a.bind(this.handleComplete, this)),
            window.CreateJsShell && 1 == Game.setting.cjs_mode && (this.loadQueue._progress = 1)
        },
        setImageAlias: function(a, b) {
            c[b] = c[a],
            d[b] = d[a]
        },
        handleFileLoad: function(a) {
            var b, d = a.item.id;
            switch (a.item.type) {
            case createjs.LoadQueue.IMAGE:
                b = a.result,
                c[d] = b
            }
            this.trigger("fileload", a)
        },
        handleComplete: function(a) {
            this.trigger("complete", a),
            window.CreateJsShell && 1 == Game.setting.cjs_mode && (this.loadQueue._progress = 0)
        },
        handleError: function(a) {
            this.trigger("error", a)
        },
        getLoadingTarget: function(b) {
            if (!b)
                return null;
            a.isObject(b) || (b = {
                id: b,
                src: b
            });
            var e = b.id;
            return a.has(c, e) && d[e] == b.src ? null : (d[e] = b.src,
            a.defaults({
                type: createjs.LoadQueue.IMAGE
            }, b))
        },
        loadManifest: function(b, c, d) {
            var e = this
              , f = [];
            a.each(b, function(b) {
                var c = e.getLoadingTarget(b);
                c && (a.defaults(c, {
                    cache: !0
                }),
                f.push(c))
            }),
            f = a.uniq(f),
            a.isEmpty(f) ? this.loadQueue.dispatchEvent("complete") : this.loadQueue.loadManifest(f, c, d)
        },
        loadFile: function(b, c, d) {
            var e = this
              , f = e.getLoadingTarget(b);
            f && (a.defaults(f, {
                cache: !0
            }),
            this.loadQueue.loadFile(f, c, d))
        },
        load: function() {
            this.loadQueue.load()
        },
        close: function() {
            this.loadQueue.close()
        },
        setMaxConnections: function(a) {
            this.loadQueue.setMaxConnections(a)
        },
        addEventListener: function(a, b) {
            this.once(a, b)
        },
        clear: function() {
            a.each(d, function(a, b) {
                delete c[b]
            }),
            d = {}
        },
        reset: function() {
            this.loadQueue.reset()
        }
    });
    return e.makeSingleton(["loadFile", "loadManifest", "load", "clear", "setImageAlias", "on", "off", "once", "addEventListener", "reset"]),
    e
});
define('model/cjs-loader', ["jquery", "underscore", "backbone", "model/manifest-loader", "util/backbone-singleton"], function(a, b, c, d) {
    var e = window.lib = window.lib || {}
      , f = {}
      , g = {}
      , h = {}
      , i = {}
      , j = "cjs/"
      , k = "model/manifest/"
      , l = Game.baseUri + "cassets/cache/" + Game.jsUri.replace(/.*\//g, "")
      , m = c.Model.extend({
        loadFiles: function(c, l) {
            var m = this
              , n = new a.Deferred
              , o = b.reject(c, function(a) {
                return b.has(f, a) || b.has(g, a)
            });
            b.each(o, function(a) {
                g[a] = 1
            }),
            o = b.unique(b.sortBy(o));
            var p = function() {
                n.resolve();
                var a = b.difference(b.union(c, b.keys(g)), b.keys(f));
                b.isEmpty(a) ? m.trigger("complete") : 1 === Game.isSandbox && m.trigger("failed", a)
            };
            if (b.isEmpty(o))
                p();
            else {
                var q = new a.Deferred
                  , r = new createjs.LoadQueue(!1,Game.jsUri + "/",!0);
                r.setMaxConnections(5),
                r.on("complete", function() {
                    q.resolve()
                }),
                r.on("fileload", function(a) {
                    if (a.item) {
                        var c = a.item.id;
                        if (c) {
                            var d = b.last(c.split("/"));
                            e[d].prototype.playFunc = function(a) {
                                createjs.Tween.get().wait(1).call(a)
                            }
                            ,
                            f[d] = d,
                            h[c] = e[d]
                        }
                    }
                }),
                r.on("error", function(a) {
                    q.reject()
                });
                var s = b.map(o, function(a) {
                    var b = j + a;
                    return {
                        id: b,
                        src: b + ".js",
                        type: createjs.LoadQueue.JAVASCRIPT,
                        cache: !0
                    }
                });
                r.loadManifest(s);
                var t = new a.Deferred
                  , u = []
                  , v = o.length || b.size(o)
                  , w = 0;
                b.each(o, function(a) {
                    var b = k + a;
                    require([b], function(a) {
                        i[b] = a.prototype.defaults.manifest,
                        l && i[b].length > 0 && (u = u.concat(i[b])),
                        w++,
                        v === w && (u.length > 0 ? (d.once("complete", function() {
                            t.resolve()
                        }),
                        d.loadManifest(u, !0)) : t.resolve())
                    }, function(a) {})
                }),
                a.when(q, t).always(function() {
                    p()
                })
            }
            return n
        },
        cjs: function(a) {
            return a ? h[j + a] : b.values(h)
        },
        manifest: function(a) {
            return a ? i[k + a] : b.values(i)
        },
        clear: function() {
            b.each(b.keys(requirejs.s.contexts._.defined), function(a) {
                0 == a.indexOf(l) && (require.undef(a),
                delete e[a])
            }),
            b.each(h, function(a, b) {
                require.undef(b),
                delete e[b]
            }),
            b.each(i, function(a, b) {
                require.undef(b),
                delete e[b]
            }),
            f = {},
            g = {},
            h = {},
            i = {},
            d.clear()
        }
    });
    return m.makeSingleton(["loadFiles", "cjs", "manifest", "clear", "on", "off", "once"]),
    m
});
define('view/form', ["jquery", "underscore", "backbone", "view/popup"], function(a, b, c, d) {
    var e = 140
      , f = "#pop-chat"
      , g = "touchstart"
      , h = "touchend"
      , i = "focus"
      , j = "blur"
      , k = "disabled"
      , l = "submit"
      , m = "submissionEmptyError"
      , n = "submissionExcessError"
      , o = "エラーにより送信できませんでした。"
      , p = "先の利用から5秒経過すると<br>再度利用可能です。"
      , q = c.View.extend({
        el: ".frm-group",
        $frmMessage: null,
        inputComment: "",
        events: {
            "touchstart .frm-message:not(.disable)": "onTouchstartTextarea",
            "touchend .frm-message:not(.disable)": "onTouchendTextarea",
            "focus .frm-message:not(.disable)": "onFocusTextarea",
            "blur .frm-message:not(.disable)": "onBlurTextarea",
            "tap .btn-talk-message:not(.disable)": "checkMessage"
        },
        initialize: function() {
            this.$frmMessage = this.$el.find(".frm-message"),
            this.$btnTalkMessage = this.$el.find(".btn-talk-message"),
            this.setupInput()
        },
        setupInput: function(a) {
            var b = this;
            a = a ? a : this.$frmMessage,
            a.keyup(function(a) {
                return b.textPattern(),
                13 === a.keyCode ? !1 : void 0
            }),
            a.keypress(function(a) {
                return 13 === a.keyCode ? !1 : void 0
            })
        },
        onTouchstartTextarea: function(a) {
            this.trigger(g, a)
        },
        onTouchendTextarea: function(a) {
            this.trigger(h, a)
        },
        onFocusTextarea: function(a) {
            this.trigger(i, a)
        },
        onBlurTextarea: function(b) {
            this.inputComment = a(b.currentTarget).val(),
            this.trigger(j, b)
        },
        disable: function() {
            this.disableSubmit(),
            this.disableInput(),
            this.trigger(k)
        },
        disableSubmit: function() {
            this.$btnTalkMessage.addClass("disable")
        },
        disableInput: function() {
            this.$frmMessage.addClass("disable"),
            this.$frmMessage.attr("disabled", "disabled")
        },
        enable: function() {
            this.$btnTalkMessage.removeClass("disable"),
            this.enableInput()
        },
        enableInput: function() {
            this.$frmMessage.removeClass("disable"),
            this.$frmMessage.removeAttr("disabled")
        },
        blurInput: function() {
            this.$frmMessage.blur()
        },
        clearInput: function() {
            this.$frmMessage.val(""),
            this.blurInput(),
            this.inputComment = ""
        },
        textPattern: function(a) {
            var b = this.$frmMessage.val() ? this.$frmMessage.val().length : 0
              , c = a ? a : b
              , d = e - c
              , f = this.$el.find(".mes-counter")
              , g = 10
              , h = 0
              , i = 0 >= c ? "" : d
              , j = "max";
            f.html(i),
            f.toggleClass(j, g >= d),
            h > d ? (this.$el.find(".ready-chat .btn-usual-send").addClass("btn-chat-disable").removeClass("btn-usual-send"),
            this.$el.find(".prt-talk-input .btn-talk-message").addClass("prt-talk-message-off").removeClass("btn-talk-message")) : (this.$el.find(".ready-chat .btn-chat-disable").addClass("btn-usual-send").removeClass("btn-chat-disable"),
            this.$el.find(".prt-talk-input .prt-talk-message-off").addClass("btn-talk-message").removeClass("prt-talk-message-off"))
        },
        checkMessage: function() {
            if (this.blurInput(),
            !this.inputComment || !this.checkSpace(this.inputComment)) {
                var a = "1文字以上入力してください。";
                return void this.trigger(m, a)
            }
            if (this.inputComment.length > e) {
                var a = e + "文字以内で入力してください。";
                return void this.trigger(n, a)
            }
            this.trigger(l, {
                comment: this.inputComment
            }),
            this.textPattern(),
            this.clearInput()
        },
        checkSpace: function(a) {
            return a.match(/\S/) ? !0 : (this.$frmMessage.val(""),
            !1)
        },
        errorChat: function(b) {
            var c = this
              , d = new r({
                err_msg: b
            });
            d.on(l, function(a) {
                c.trigger(l, a)
            }),
            d.render();
            var e = a("#frm-message.frm-message");
            this.setupInput(e),
            this.textPattern(e)
        },
        popErrorDialog: function(a) {
            a || (a = o);
            var b = new d({
                el: f,
                className: "common-pop-error",
                title: "利用制限",
                body: a,
                flagBtnCancel: 0,
                flagBtnOk: 1
            });
            b.on("ok", function() {
                b.popRemove()
            }),
            b.render(),
            b.popShow()
        },
        popIntervalErrorDialog: function() {
            this.popErrorDialog(p)
        },
        popCompletionDialog: function() {
            var a = new d({
                el: f,
                className: "send-chat",
                title: "送信完了",
                body: "チャットを送りました。",
                flagBtnCancel: 0,
                flagBtnOk: 1
            });
            a.on("ok", function() {
                a.popRemove()
            }),
            a.render(),
            a.popShow()
        },
        destroy: function() {
            this.off(),
            this.undelegateEvents(),
            this.stopListening()
        }
    })
      , r = q.extend({
        el: "",
        $frmMessage: null,
        template: b.template(a("#tpl-chat-pop").html()),
        events: {
            "blur #frm-message": "onBlurTextarea"
        },
        initialize: function() {
            var a = this.options.err_msg;
            this.create(a)
        },
        render: function() {
            return this.renderPopup(),
            this.$frmMessage = a("#frm-message"),
            this
        },
        create: function(a) {
            var b = this;
            (void 0 == a || "" == a) && (a = "禁止ワードが含まれています。"),
            1 == a && (a = "");
            var c = {
                inputText: this.inputComment,
                errflag: !0,
                msg: a,
                count_max: e
            };
            this.popView = new d({
                el: f,
                className: "ready-chat",
                title: "チャット",
                body: this.template(c),
                flagBtnCancel: 1,
                flagBtnOk: 1
            }),
            this.popView.on("ok", function() {
                b.popView.popOff(),
                b.popView.popRemove(),
                b.checkMessage()
            }),
            this.popView.on("cancel", function() {
                b.popView.popRemove()
            })
        },
        renderPopup: function() {
            this.popView.render(),
            this.popView.popShow(),
            this.setElement(".ready-chat")
        }
    });
    return q
});
define("view/captcha", ["jquery", "underscore", "backbone", "view/form", "model/token-data"], function(a, b, c, d, e) {
    var f = "c/i?t="
      , g = "1文字以上入力してください<br>読み取りづらい場合は一度送信してください"
      , h = "もう一度入力してください<br>読み取りづらい場合は一度送信してください"
      , i = c.View.extend({
        el: "#pop-c-a-i",
        events: {},
        initialize: function() {
            this.$dynamicMessage = this.$el.find(".txt-c-a-i-message"),
            this.$image = this.$el.find(".image"),
            this.$frmGroup = this.$el.find("#c-a-i-frm-group"),
            this.createSubView()
        },
        createSubView: function() {
            var a = this;
            this.formView = new d({
                el: this.$frmGroup
            }),
            this.formView.on("submit", function(b) {
                a.onSubmitForm(b)
            }).on("submissionEmptyError", function() {
                a.$dynamicMessage.html(g)
            }).on("submissionExcessError", function(b) {
                a.$dynamicMessage.html(b)
            })
        },
        onSubmitForm: function(a) {
            this.$dynamicMessage.empty();
            var b = new (e.extend({
                urlRoot: Game.baseUri + "c/a"
            }));
            this.listenToOnce(b, "sync", this.onSaveForm),
            b.set(a),
            b.save()
        },
        onSaveForm: function(a) {
            var b = a.attributes;
            b.is_correct ? this.trigger("success") : (this.$dynamicMessage.html(h),
            this.$image.attr("src", f + Math.floor((new Date).getTime() / 1e3)),
            this.trigger("failure"))
        },
        destroy: function() {
            this.off(),
            this.undelegateEvents(),
            this.stopListening(),
            this.destroySubView()
        },
        destroySubView: function() {
            this.formView.destroy()
        }
    });
    return i
});
define('view/submenu/_util', ["util/local-storage"], function(a) {
    var b = function() {
        var b = $("#submenu")
          , c = $("#wrapper").height()
          , d = b.height()
          , e = "global";
        a.isSupported() === !0 && a.getObject("gbf_pcsbm") && (e = a.getObject("gbf_pcsbm").current);
        var f = c > d
          , g = "global" === e && f || "global" !== e && !f;
        b.toggleClass("auto-height", g)
    };
    return {
        adjustSubmenuHeight: b
    }
});
define('view/content', ["underscore", "backbone", "model/content", "model/data", "model/token-data", "lib/shellapp", "lib/sound", "model/sound", "view/popup", "view/captcha", "util/ajax", "util/local-storage", "util/language-message", "view/submenu/_util"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
    var o = function(a, b, c) {
        window.cjsSetCacheManifestCompat ? window.cjsSetCacheManifestCompat(a, b, c) : createjs.Config && createjs.Config.setCacheManifest ? createjs.Config.setCacheManifest(a, b, c) : window.AndroidCacheProxy && window.AndroidCacheProxy.setCacheManifest && window.AndroidCacheProxy.setCacheManifest(a, b, c)
    }
      , p = /^(\S+)\s*(.*)$/
      , q = 200
      , r = b.View.extend({
        el: ".contents",
        enableTutorialMovie: !1,
        setTimeoutTimerIdObj: {},
        setIntervalTimerIdObj: {},
        initialize: function(a) {},
        content_bind: function() {
            this.on("loadStart", Game.loading.loadStart),
            this.on("xhrStart", Game.loading.xhrStart),
            this.on("loadEnd", Game.loading.loadEnd),
            this.on("xhrEnd", Game.loading.xhrEnd),
            this.on("page_error", this.page_error),
            this.on("data_error", this.data_error),
            this.on("popup_error", this.popup_error)
        },
        content_render: function(b) {
            if (b.get("redirect"))
                return !1;
            this.content_clear(),
            this.$el.html(decodeURIComponent(b.get("data"))),
            f.isShellApp() && (new (d.extend({
                urlRoot: Game.baseUri + "analytics/purchase_info"
            }))).fetch({
                ignoreError: !0,
                success: function(b) {
                    b.hasChanged() && f.sendAnalyticsEvent.apply(f, a.map(["eventName", "action", "label", "orderId", "sku", "itemName", "price", "quantity", "currency"], a.bind(b.get, b)))
                },
                error: function() {}
            });
            var c = f.getRemoteNotification();
            if (c) {
                var g = c.extras || null
                  , h = new (e.extend({
                    urlRoot: Game.baseUri + "user/remote_notification_reward",
                    success: function(a) {},
                    error: function(a, b, c) {}
                }));
                h.set({
                    extras: g
                }),
                h.save()
            }
            var i = b.get("option");
            if ("undefined" == typeof i.isSubView || !i.isSubView) {
                if (a.isEmpty(i.anenounce))
                    $(".anenounce").css("display", "none"),
                    this.stopAnenounce(),
                    $(".anenounce").text("");
                else {
                    var j = i.anenounce.split("\n");
                    $(".anenounce").css("display", "block"),
                    this.startAnenounce(j)
                }
                !a.isEmpty(i.force_process_ids) && a.has(i.force_process_ids, 1) && (window.cjsSetCacheManifestCompat ? window.cjsSetCacheManifestCompat(Game.modifiedListUri, -1, 0) : f.isShellAppWKWebView() ? webkit.messageHandlers.wkcjs_settings.postMessage({
                    cacheClear: !0
                }) : o(Game.modifiedListUri, 0, 0))
            }
            (Game.ua.isPcPlatform() === !0 || Game.ua.isAndApp()) && this.adjustSubmenuHeight(),
            this.global_initialize()
        },
        adjustSubmenuHeight: function() {
            n.adjustSubmenuHeight()
        },
        globalLink: function(a) {
            var c = this;
            if ("guild" === a) {
                var e = new (d.extend({
                    urlRoot: Game.baseUri + "rest/guild/main/guild_info"
                }));
                e.fetch({
                    success: function(a) {
                        var d = "";
                        a.get("is_guild_open") ? a.get("is_guild_in") ? ($(".btn-global-knights, .btn-guild-name").attr("data-location-href", "guild"),
                        d = "guild") : a.get("request_guild_id") ? ($(".btn-global-knights, .btn-guild-name").attr("data-location-href", "guild/reserve/" + a.get("request_guild_id")),
                        d = "guild/reserve/" + a.get("request_guild_id")) : a.get("invite_guild_id") ? ($(".btn-global-knights, .btn-guild-name").attr("data-location-href", "guild/scout/" + a.get("invite_guild_id")),
                        d = "guild/scout/" + a.get("invite_guild_id")) : ($(".btn-global-knights, .btn-guild-name").attr("data-location-href", "guild/notjoin"),
                        d = "guild/notjoin") : ($(".btn-global-knights, .btn-guild-name").attr("data-location-href", "guild/notjoin"),
                        d = "guild/notjoin"),
                        c.content_close(),
                        b.history.fragment = "",
                        b.history.navigate(d, !0)
                    },
                    error: function(a, b) {
                        k.isManuallyAbortedXHR(b)
                    }
                })
            }
        },
        popCoopRank: function() {
            function a() {
                var a = new i({
                    el: "#pop",
                    className: "pop-coop pop-coop-general",
                    title: d,
                    body: $("#tpl-pop-coop").html(),
                    flagBtnClose: 1
                });
                a.render().popShow(),
                b.listenToOnce(a, "close", function() {
                    a.popRemove()
                })
            }
            var b = this
              , c = "menu_pop_1"
              , d = "";
            this.$el.find("#pop").length <= 0 && this.$el.append('<div id="pop">'),
            m.hasMessage(c) ? (d = m.getMessage(c),
            a()) : this.getLanguageInfo(c, "common").done(function(b) {
                d = b[c].msg,
                a()
            })
        },
        getLanguageInfo: function(a, b) {
            var c = null
              , e = Game.baseUri + "rest/languageinfo/js_language_info"
              , f = e + "/" + a + "/" + b
              , g = new (d.extend({
                urlRoot: f
            }));
            return this.getLanguageInfo = function(a, b) {
                return c = $.Deferred(),
                g.urlRoot = e + "/" + a + "/" + b,
                g.fetch().done(function(a) {
                    c.resolve(a)
                }),
                c
            }
            ,
            this.getLanguageInfo(a, b)
        },
        popSelectAirSpace: function(b) {
            var c = "pop"
              , d = this.$el.find("#" + c).length;
            0 >= d && this.$el.append('<div id="' + c + '">');
            var e = new i({
                className: "pop-select-airspace",
                title: b.pop_title,
                body: a.template($("#tpl-pop-select-airspace").html(), {
                    airspaceInfo: b
                }),
                flagBtnClose: 1,
                flagBtnOk: 0
            });
            e.render().popShow(),
            this.listenToOnce(e, "close", function() {
                e.popRemove()
            })
        },
        content_clear: function() {
            $(".mask").removeClass().addClass("mask")
        },
        content_close: function() {
            this.off(),
            this.undelegateEvents(),
            this.stopListening(),
            this.timerOff(),
            this.clearTimeoutAll(),
            this.clearIntervalAll(),
            this.removeAddedStyle && this.removeAddedStyle(),
            this.destroy && this.destroy(),
            this.destroySubViews(),
            this.destroyStage(),
            this.abortAjax();
            var a = l.get("model_error_hash") || ""
              , b = location.hash + "_model_error";
            "" !== a && a != b && (l.remove(a),
            l.remove("model_error_hash"))
        },
        destroyImages: function() {
            if (this.el && !f.isShellApp()) {
                var a = 0
                  , b = this.el.getElementsByTagName("img");
                for (a = 0; a < b.length; ++a)
                    b[a].src = "";
                var c = this.el.getElementsByTagName("canvas");
                for (a = 0; a < c.length; ++a)
                    c[a].width = 0
            }
        },
        global_initialize: function() {
            $(".mask").removeClass().addClass("mask").hide(),
            $(".wrapper").removeClass("global-on"),
            $(".btn-head-close").css("display", "none"),
            $(".btn-head-pop").css("display", "block"),
            $(".pop-global-menu").removeClass("slide_pop");
            var a = location.href
              , b = -1 !== a.indexOf("setting/mypage") ? !1 : -1 !== a.indexOf("tutorial/23") ? !0 : -1 !== a.indexOf("tutorial/28") ? !0 : -1 !== a.indexOf("tutorial/1301") ? !0 : -1 !== a.indexOf("mypage") ? !0 : !1;
            b !== !1 ? ($(".btn-head-top").css("display", "block"),
            $(".btn-head-mypage").css("display", "none")) : ($(".btn-head-mypage").css("display", "block"),
            $(".btn-head-top").css("display", "none"));
            var c = this
              , d = this.$el.find("#asset-css").data("css");
            if (!d)
                return !1;
            var e = Game.cssUri + d
              , f = new createjs.LoadQueue(!0)
              , h = !1;
            $("head>style.page").remove(),
            f.addEventListener("fileload", function(a) {
                a.item.type === createjs.LoadQueue.CSS && (a.result.className = "page")
            }),
            f.addEventListener("complete", function(a) {
                f.removeAllEventListeners(),
                h || ($(".contents").css("display", "block"),
                ("undefined" == typeof c.isStayReadyContentRender || c.isStayReadyContentRender === !1) && $("#ready").css("display", "none"),
                c.trigger("readyFadeOut"))
            }),
            f.addEventListener("error", function(a) {
                alert("読み込みエラー:c001\nお手数ですが、ページを再読み込みしてください。"),
                h = !0
            }),
            f.loadFile(e);
            var i = this.$el.find(".btn-bgm-change");
            0 == window.Game.setting.effect_mode || g.isDisabled() ? i.removeClass("enable soundOn") : i.addClass("enable soundOn"),
            0 === Game.setting.effect_mode && $("#btn-auto").remove();
            var j = $("#auto_scene_mode").data("auto-scene-mode")
              , k = $("#btn-auto");
            "on" === j ? (k.removeClass("off"),
            window.setTimeout(function() {
                k.css("opacity", .001)
            }, 2e3)) : k.addClass("off")
        },
        numRepStatus: function(a, b) {
            a.html(""),
            a.each(function() {
                for (var a = $(this).attr("title"), c = $(this).attr("additional-stamina"), d = !1, e = 0; e < a.length; e++)
                    "," == a[e] ? $(this).append("<span class='" + b + "-comma' />") : "/" == a[e] ? (d = !0,
                    $(this).append("<span class='" + b + "-slash' />")) : ":" == a[e] ? $(this).append("<span class='" + b + "-coron' />") : 1 == c && 0 == d ? $(this).append("<span class='" + b + "-additional" + a[e] + "'></span>") : $(this).append("<span class='" + b + a[e] + "'></span>")
            })
        },
        bp_replace: function(a, b) {
            var c = +a.data("current-bp")
              , d = ""
              , e = " over-limit"
              , f = 0
              , g = 5
              , h = +b > g ? g : +b;
            switch (!0) {
            case c >= 10:
                f = g;
                break;
            case g >= c:
                break;
            default:
                f = c - g
            }
            a.html("");
            for (var i = 0; h > i; i++)
                d = f > i ? e : "",
                a.append("<span class='ico-bp" + d + "'></span>")
        },
        getTime: function(a) {
            var a = new Date(1e3 * a)
              , b = [];
            return b.yyyy = a.getFullYear(),
            b.m = a.getMonth() + 1,
            b.d = a.getDate(),
            b.hour = a.getHours(),
            b.min = a.getMinutes(),
            b.sec = a.getSeconds(),
            b
        },
        limitTime: function(a, b) {
            var c = 86400
              , d = b - a
              , e = [];
            return e.days = Math.floor(d / c),
            e.hour = Math.floor(d % c / 3600),
            e.min = Math.floor(d % c / 60 % 60),
            e.sec = Math.floor(d % c % 60),
            e.differenceSec = d,
            e
        },
        timerOn: function(a, b, c) {
            var d = this;
            clearInterval(window.timerId),
            c ? window.timerId = setInterval(function() {
                d.countDownTimeDifferentFomat(a, b)
            }, 1e3) : window.timerId = setInterval(function() {
                d.countDownTime(a, b)
            }, 1e3)
        },
        timerOff: function() {
            "undefined" != typeof window.timerId && (clearInterval(window.timerId),
            delete window.timerId),
            this.trigger("timerOff")
        },
        setNamedTimeout: function(a, b, c) {
            this.setTimeoutTimerIdObj[a] = setTimeout(b, c)
        },
        clearTimeoutAll: function() {
            if (!(1 > a.size(this.setTimeoutTimerIdObj))) {
                var b = this;
                a.each(this.setTimeoutTimerIdObj, function(a, c) {
                    clearTimeout(a),
                    delete b.setTimeoutTimerIdObj[c]
                })
            }
        },
        clearTimeoutOne: function(a) {
            this.setTimeoutTimerIdObj[a] && (clearTimeout(this.setTimeoutTimerIdObj[a]),
            delete this.setTimeoutTimerIdObj[a])
        },
        _hasNamedTimeout: function(b) {
            return a.has(this.setTimeoutTimerIdObj, b)
        },
        setNamedInterval: function(a, b, c) {
            this.setIntervalTimerIdObj[a] = setInterval(b, c)
        },
        clearIntervalAll: function() {
            if (!(1 > a.size(this.setIntervalTimerIdObj))) {
                var b = this;
                a.each(this.setIntervalTimerIdObj, function(a, c) {
                    clearInterval(a),
                    delete b.setIntervalTimerIdObj[c]
                })
            }
        },
        clearIntervalOne: function(a) {
            this.setIntervalTimerIdObj[a] && (clearInterval(this.setIntervalTimerIdObj[a]),
            delete this.setIntervalTimerIdObj[a])
        },
        _hasNamedInterval: function(b) {
            return a.has(this.setIntervalTimerIdObj, b)
        },
        countDownTime: function(a, b) {
            if (a.differenceSec--,
            a.sec > 0)
                a.sec--;
            else if (a.min > 0)
                a.sec = 59,
                a.min--;
            else if (a.hour > 0)
                a.sec = 59,
                a.min = 59,
                a.hour--;
            else {
                if (!(a.days > 0))
                    return b.text("0"),
                    this.timerOff(),
                    !1;
                a.sec = 59,
                a.min = 59,
                a.hour = 23,
                a.days--
            }
            var c = "";
            a.differenceSec >= 86400 && (c += a.days + m.getMessage("user_66")),
            a.differenceSec >= 3600 && (c += a.hour + m.getMessage("user_67")),
            a.differenceSec >= 60 && (c += a.min + m.getMessage("user_68")),
            a.differenceSec >= 0 && (c += a.sec + m.getMessage("user_69")),
            b.text(c)
        },
        countDownTimeDifferentFomat: function(a, b) {
            if (a.differenceSec--,
            a.sec > 0)
                a.sec--;
            else if (a.min > 0)
                a.sec = 59,
                a.min--;
            else if (a.hour > 0)
                a.sec = 59,
                a.min = 59,
                a.hour--;
            else {
                if (!(a.days > 0))
                    return b.text("0"),
                    this.timerOff(),
                    !1;
                a.sec = 59,
                a.min = 59,
                a.hour = 23,
                a.days--
            }
            var c = "";
            a.differenceSec >= 3600 && (c += 24 * a.days + a.hour + "："),
            a.differenceSec >= 60 && (c += a.min + "："),
            a.differenceSec >= 0 && (c += a.sec),
            b.text(c)
        },
        _destroyStage: function(b) {
            if (b) {
                var c = createjs.Ticker;
                if (c.removeEventListener("tick", b),
                b.autoClear = !0,
                b.enableDOMEvents(!1),
                b.removeAllChildren(),
                b.update(),
                f.isShellApp() && window.cjsAndroidSdk >= 21 && (b.canvas = null),
                1 === a.size(c._listeners)) {
                    if (c._raf) {
                        var d = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame;
                        d && d(c._timerId)
                    } else
                        clearTimeout(c._timerId);
                    c._timerId = null
                }
            }
        },
        destroyStage: function(b) {
            var c = this;
            b ? this._destroyStage(b) : (window.stage && (this._destroyStage(window.stage),
            f.isShellApp() && window.cjsAndroidSdk >= 21),
            this.stage && this._destroyStage(this.stage),
            window.cjs && a.each(window.cjs.stage, function(a, b) {
                window.cjs.canvas && (window.cjs.canvas[b] = null),
                a && c._destroyStage(a),
                window.cjs.stage && (window.cjs.stage[b] = null)
            }))
        },
        stopEventPropagation: function(a, b) {
            b && h.playButtonSE($(a.currentTarget)),
            a.preventDefault(),
            a.stopPropagation()
        },
        listenEventAndCall: function(a, b, c) {
            b.off(a),
            b.on(a, function(a) {
                c(),
                $(this).off(a)
            })
        },
        checkMobageConnectStatus: function(a) {
            var b = this;
            if (!a.state) {
                var c = window.clientData;
                c && (a.state = c.state)
            }
            mobage.oauth.getConnectedStatus(a, function(a, c) {
                c ? b.trigger("checkMobageConnectTrue", c) : b.trigger("checkMobageConnectFalse")
            })
        },
        postPurchaseJsSdk: function(a, b, c) {
            this.trigger("xhrStart");
            var d = this
              , f = new (e.extend({
                urlRoot: Game.baseUri + a + "/" + b
            }));
            f.set(c),
            this.stopListening(f),
            this.listenToOnce(f, "sync", function(a) {
                var b = a.toJSON();
                mobage.ui.open("payment", {
                    transactionId: b.transaction_id,
                    orderId: b.payment_id,
                    zIndex: 999999
                }, function(a, b) {
                    a || d.trigger("postPurchaseJsSdkComplete", b)
                }),
                d.trigger("xhrEnd")
            }),
            f.save()
        },
        postPurchaseResult: function(a, b, c) {
            var d = this
              , f = new (e.extend({
                urlRoot: Game.baseUri + a + "/" + b
            }));
            f.set(c),
            this.stopListening(f),
            this.listenToOnce(f, "sync", function(a) {
                d.trigger("postPurchaseResultComplete", c, a)
            }),
            f.save()
        },
        postPurchaseGree: function(a, b, c) {
            this.trigger("xhrStart");
            var d = this
              , f = new (e.extend({
                urlRoot: Game.baseUri + a + "/" + b
            }));
            f.set(c),
            this.stopListening(f),
            this.listenToOnce(f, "sync", function(a) {
                function b(a) {
                    GREE.oauth.getConnectedStatus(c),
                    window.removeEventListener("GreeReady", b)
                }
                function c(a, b) {
                    a && GREE.ui.payment.open({
                        payment_id: e.transaction_id,
                        cancel_callback: function(a, b) {},
                        submit_callback: function(a, b) {
                            a && window.addEventListener("GreeUIClose", function(a) {
                                d.trigger("postPurchaseGreeComplete", e)
                            }, !1)
                        }
                    })
                }
                var e = a.toJSON()
                  , f = e.client_id;
                GREE.init(f, Game.isSandbox),
                window.addEventListener("GreeReady", b),
                d.trigger("xhrEnd")
            }),
            f.save()
        },
        postPurchaseGreeResult: function(a, b, c) {
            var d = this
              , f = new (e.extend({
                urlRoot: Game.baseUri + a + "/" + b
            }));
            f.set(c),
            this.stopListening(f),
            this.listenToOnce(f, "sync", function(a) {
                d.trigger("postPurchaseResultComplete", c, a)
            }),
            f.save()
        },
        openTransactionsGree: function() {
            this.autoGreeGetConnectedStatus(function() {
                GREE.page.open("aosct", !1)
            })
        },
        postPurchaseDmm: function(b, c, d) {
            var f = this
              , g = new (e.extend({
                urlRoot: Game.baseUri + b + "/" + c
            }));
            f.trigger("xhrStart"),
            g.set(d),
            f.stopListening(g),
            f.listenToOnce(g, "sync", function(b) {
                f.trigger("xhrEnd");
                var c = b.toJSON();
                $("#prt-dmm-form").html(a.template($("#tpl-dmm-form").html(), c)),
                $("#dmm-form").submit()
            }),
            g.save()
        },
        postPurchaseYahoo: function(a, b, c) {
            var d = this
              , f = new (e.extend({
                urlRoot: Game.baseUri + a + "/" + b
            }));
            d.trigger("xhrStart"),
            f.set(c),
            d.stopListening(f),
            d.listenToOnce(f, "sync", function(a) {
                d.trigger("xhrEnd");
                var b = a.toJSON();
                window.location.href = b.url
            }),
            f.save()
        },
        openTransactionsOriginal: function() {
            window.open(Game.baseUri + "commercialtransaction")
        },
        historyBack: function() {
            this.content_close(),
            window.history.back()
        },
        page_error: function() {
            this.content_close();
            new s
        },
        data_error: function(a) {
            var b = (0 === a[0] ? "F-001" : "B-001") + "-" + a[1]
              , c = '<div style="line-height: 2;">エラーコード：' + b + "<br>通信エラー<br>Error Code: " + b + "<br>Network Error</div>";
            new t({
                el: "#pop-force",
                data: {
                    title: "エラー",
                    body: c,
                    className: null,
                    okCallBackName: "navigateReload",
                    cancelCallBackName: null,
                    exceptionFlag: !0
                }
            })
        },
        popup_error: function(a) {
            var b = a.data.element_name;
            if (a.data.exceptionFlag !== !0) {
                var c = $("body");
                Game.ua.isJssdk() && (c = $(Game.gameContainer.selector));
                var d = c.find("#" + b).length;
                0 >= d && $(".contents").append('<div id="' + b + '">')
            }
            a.el = "#" + b,
            "pop-submenu" === a.data.className && (a.maskSubMenu = !0);
            var e = new t(a)
              , f = this;
            e.captchaSuccess = function() {
                f.captchaSuccessOverride()
            }
        },
        captchaSuccessOverride: function() {},
        addSubView: function(a) {
            this._subViews || (this._subViews = {}),
            this._subViews[a.cid] = a
        },
        removeSubView: function(a) {
            delete this._subViews[a.cid]
        },
        destroySubViews: function() {
            this._subViews && (a.each(this._subViews, function(a) {
                a.content_close && a.content_close()
            }),
            this._subViews = {})
        },
        addAjax: function(a) {
            this._ajaxPool = this._ajaxPool || k.createXHRPool(),
            this._ajaxPool.add(a)
        },
        removeAjax: function(a) {
            this._ajaxPool && this._ajaxPool.remove(a)
        },
        abortAjax: function(a) {
            this._ajaxPool && this._ajaxPool.abort(a)
        },
        alertArray: function(a) {
            var b = "";
            for (var c in a)
                b += c + "=" + a[c] + "\n";
            alert(b)
        },
        _isLocked: function(a) {
            if (!a)
                return !1;
            var b = this;
            return b._lockState = b._lockState || {},
            b._lockState[a]
        },
        _lock: function(a) {
            if (!a)
                return !1;
            var b = this;
            return b._lockInterval = b._lockInterval || {},
            window.clearInterval(b._lockInterval[a]),
            b._lockState = b._lockState || {},
            b._lockState[a] = !0,
            b._recentLockName = a,
            !0
        },
        _unlock: function(a) {
            if (!a)
                return !1;
            var b = this;
            return b._lockInterval = b._lockInterval || {},
            window.clearInterval(b._lockInterval[a]),
            b._lockInterval[a] = window.setInterval(function() {
                window.Game.ajaxConnecting || (window.clearInterval(b._lockInterval[a]),
                b._lockState = b._lockState || {},
                delete b._lockState[a],
                b._lockInterval = b._lockInterval || {},
                delete b._lockInterval[a])
            }, q),
            !0
        },
        delegateEvents: function(b) {
            if (!b && !(b = a.result(this, "events")))
                return this;
            this.undelegateEvents();
            var c = this;
            return a.each(b, function(d, e) {
                if (a.isFunction(d) || (d = c[b[e]]),
                d) {
                    var f = e.match(p)
                      , g = f[1]
                      , h = f[2]
                      , i = d;
                    switch (g) {
                    case "tap":
                        d = function(a) {
                            c._isLocked(e) || ('.prt-ability-list [class^="lis-ability"]' !== h && ".cnt-raid .prt-start-direction" !== h && c._lock(e),
                            i.apply(this, arguments)),
                            c._unlock(e)
                        }
                    }
                    d = a.bind(d, c),
                    g += ".delegateEvents" + c.cid,
                    "" === h ? c.$el.on(g, d) : c.$el.on(g, h, d)
                }
            }),
            this
        },
        on: function(c, d, e) {
            var f = this;
            if (d && a.isFunction(d)) {
                var g = d;
                d = function() {
                    var a = function() {}
                      , b = function() {};
                    return f._isLocked(f._recentLockName) && (a = function() {
                        f._lock(f._recentLockName)
                    }
                    ,
                    b = function() {
                        f._unlock(f._recentLockName)
                    }
                    ),
                    g.apply(this, arguments)
                }
            }
            return b.View.prototype.on.call(this, c, d, e)
        },
        startAnenounce: function(b) {
            if (this.stopAnenounce(),
            a.isNull(Game.anenounceId)) {
                var c = b.length
                  , d = 0;
                $(".anenounce").text(b[d]),
                Game.anenounceId = setInterval(function() {
                    d++,
                    d >= c && (d = 0),
                    $(".anenounce").text(b[d])
                }, 3e3)
            }
        },
        stopAnenounce: function() {
            a.isNull(Game.anenounceId) || (clearInterval(Game.anenounceId),
            Game.anenounceId = null)
        },
        autoGreeGetConnectedStatus: function(a, b, c, d) {
            a = a || function() {}
            ,
            b = b || function() {}
            ,
            c = c || function(c, d) {
                c && a(c, d),
                d && b(c, d)
            }
            ,
            window.addEventListener("GreeReady", function() {
                window.removeEventListener("GreeReady", arguments.callee),
                GREE.oauth.getConnectedStatus(c)
            }),
            d || GREE.init(Game.setting.gree_client_id, Game.isSandbox)
        },
        strAnimaStart: function(a, b, c, d, e) {
            e = e || "defualt";
            var f = 1
              , g = c + 1;
            this.setNamedInterval(e, function() {
                f++,
                a.html(Array(f).join(b)),
                f >= g && (f = 0)
            }, d)
        },
        strAnimaEnd: function(a) {
            this.clearIntervalOne(a)
        },
        setTutorialMovieSubView: function(a, b) {
            if (this.tutorialMovieSubView && (this.tutorialMovieSubView.content_close(),
            this.removeSubView(this.tutorialMovieSubView),
            this.tutorialMovieSubView = null),
            1 === +Game.hasTutorialMovie) {
                var c = this;
                Game.loading.xhrStart(),
                require(["view/common/_sub_tutorial_movie"], function(d) {
                    c.tutorialMovieSubView = new d({
                        typeArray: a.TYPE_ARRAY
                    }),
                    c.listenToOnce(c.tutorialMovieSubView, a.SUBVIEW_READY_EVENT, function(a) {
                        a === !0 && (c.addSubView(c.tutorialMovieSubView),
                        c.enableTutorialMovie = !0,
                        b && b()),
                        Game.loading.xhrEnd()
                    })
                })
            }
        },
        numberFormat: function(a) {
            return String(a).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
        },
        postPaymentAlert: function(a, b) {
            var c = this
              , d = new (e.extend({
                urlRoot: Game.baseUri + a
            }));
            d.set(b).save().done(function(a) {
                a.is_alert === !0 ? c.popOverMonthlyPaymentLimit(a.total) : c.trigger("completeCheckPaymentAlert")
            })
        },
        popOverMonthlyPaymentLimit: function(b) {
            b = b || 0;
            var c = this
              , d = new i({
                className: "pop-over-payment-limit",
                title: m.getMessage("over_monthly_payment_limit_title"),
                body: a.template($("#tpl-over-monthly-paymentlimit").html(), {
                    total: b
                }),
                flagBtnCancel: 1,
                flagBtnOk: 1
            });
            this.listenToOnce(d, "cancel", function() {
                d.popRemove()
            }),
            this.listenToOnce(d, "ok", function() {
                d.popRemove(),
                c.trigger("completeCheckPaymentAlert")
            }),
            d.render().popShow()
        }
    });
    a.each(["listen", "listenToOnce"], function(c) {
        r.prototype[c] = function(d, e, f) {
            var g = this;
            if (f && a.isFunction(f)) {
                var h = f;
                f = function() {
                    var a = function() {}
                      , b = function() {};
                    return g._isLocked(g._recentLockName) && (a = function() {
                        g._lock(g._recentLockName)
                    }
                    ,
                    b = function() {
                        g._unlock(g._recentLockName)
                    }
                    ),
                    h.apply(this, arguments)
                }
            }
            return b.View.prototype[c].call(this, d, e, f)
        }
    });
    var s = r.extend({
        content_model: null,
        events: {
            "tap .btn-quest-retire": "popQuestRitire",
            "tap .pop-quest-ritire .btn-usual-ok": "questRitire",
            "tap .pop-ritire-result .btn-usual-ok": "locationMypage",
            "tap .pop-quest-ritire .btn-usual-cancel": "popRemove",
            "tap .pop-ritire-error .btn-usual-close": "popRemove",
            "tap .btn-link-qa-gree": "openGreeQa"
        },
        initialize: function() {
            this.content_bind(),
            this.content_model = new c({
                controller: "error",
                action: "index"
            }),
            this.listenToOnce(this.content_model, "change", this.render),
            this.listenToOnce(this.content_model, "error", this.error),
            this.content_model.fetch()
        },
        render: function() {
            return this.content_render(this.content_model),
            $(".prt-head-current").text(m.getMessage("error_1")),
            this.trigger("loadEnd"),
            this
        },
        error: function(a, b, c) {
            0 == b.status && location.reload()
        },
        popQuestRitire: function() {
            this.popView = new i({
                className: "pop-quest-ritire",
                title: m.getMessage("error_2"),
                body: $("#tpl-confirm").html(),
                flagBtnCancel: 1,
                flagBtnOk: 1
            }),
            this.popView.render(),
            this.popView.popShow()
        },
        popRemove: function() {
            this.popView.popRemove()
        },
        questRitire: function() {
            var a = new (e.extend({
                urlRoot: Game.baseUri + "quest/retire_all_quest"
            }));
            this.listenToOnce(a, "sync", this.popQuestRetire),
            this.listenToOnce(a, "error", this.popRitireError),
            a.save()
        },
        popQuestRetire: function(a) {
            return 0 == a.attributes.success ? void this.popRitireError() : (this.popView = new i({
                className: "pop-ritire-result",
                title: m.getMessage("error_2"),
                body: $("#tpl-result").html(),
                flagBtnCancel: 0,
                flagBtnOk: 1
            }),
            this.popView.render(),
            void this.popView.popShow())
        },
        popRitireError: function() {
            this.popView = new i({
                className: "pop-ritire-error",
                title: m.getMessage("error_3"),
                body: $("#tpl-retire-error").html(),
                flagBtnCancel: 0,
                flagBtnOk: 0,
                flagBtnClose: 1
            }),
            this.popView.render(),
            this.popView.popShow()
        },
        locationMypage: function() {
            Game.view.content_close(),
            b.history.navigate("mypage", !0)
        },
        openGreeQa: function() {
            this.autoGreeGetConnectedStatus(function() {
                GREE.page.open("help")
            })
        }
    })
      , t = i.extend({
        POPUP_DATA_KEY: "data",
        defaults: {
            okCallBackName: null,
            cancelCallBackName: null,
            className: "common-pop-error"
        },
        initialize: function() {
            var b = this;
            this.defaults = a.defaults(this.defaults, i.prototype.defaults),
            i.prototype.initialize.call(this, this.options),
            this.setCallBack();
            var c = this.getOptions("okCallBackName")
              , d = this.getOptions("cancelCallBackName");
            if (this.setEvents(c, d),
            this.setDisplayData(c, d),
            this.render(),
            this.popShow(),
            !$(".prt-event-quest-intro").hasClass("common-pop-disable") && 0 != $(".prt-event-quest-intro").length && 0 != $(".common-pop-error").length) {
                var e = $(".common-pop-error")
                  , f = e.css("top").replace("px", "") - $(".prt-event-fv").outerHeight();
                e.css("top", f)
            }
            return this.captchaView = new j,
            this.captchaView.once("success", function() {
                b.captchaSuccess && b.captchaSuccess(),
                b.popRemove()
            }),
            this
        },
        render: function() {
            var b = this.getOptions(this.POPUP_DATA_KEY)
              , c = b.className || this.getOptions("className");
            return this.options.className = c,
            b.exceptionFlag === !0 ? this.$el.html(a.template($("#exception-error-popup").html(), this.options)) : this.$el.html(a.template(decodeURIComponent(b.tpl), this.options)),
            $(".pop-deck").hasClass("rear") || $(".pop-deck").addClass("rear"),
            $("#inquiry").on("tap", a.bind(this.locationInquiry, this)),
            this
        },
        setEvents: function(b, c) {
            var d = this.getOptions(this.POPUP_DATA_KEY)
              , e = d.className || this.getOptions("className")
              , f = "tap ." + e
              , g = f + " .btn-usual-ok"
              , h = f + " .btn-usual-cancel"
              , i = {};
            i[g] = b,
            i[h] = c,
            this.events = a.defaults(i, this.events || {}),
            this.delegateEvents(this.events)
        },
        setCallBack: function() {
            var a = this.getOptions(this.POPUP_DATA_KEY);
            this.options.okCallBackName = a.okCallBackName || null,
            this.options.url = a.url || null,
            this.options.cancelCallBackName = a.cancelCallBackName || null
        },
        setDisplayData: function(a, b) {
            var c = this.getOptions(this.POPUP_DATA_KEY);
            this.options.title = c.title,
            this.options.body = c.body,
            this.options.flagBtnOk = null == a ? 0 : 1,
            this.options.flagBtnCancel = null == b ? 0 : 1
        },
        getOptions: function(a) {
            return this.options[a]
        },
        destroy: function() {
            this.captchaView.destroy(),
            i.prototype.destroy.call(this)
        },
        locationMypage: function() {
            this.popRemove(),
            Game.view.content_close(),
            b.history.navigate("mypage", !0)
        },
        locationQuest: function() {
            this.popRemove(),
            Game.view.content_close(),
            b.history.navigate("quest", !0)
        },
        locationGuild: function() {
            this.popRemove(),
            Game.view.content_close(),
            b.history.navigate("guild", !0),
            window.location.reload()
        },
        locationCoopraid: function() {
            this.popRemove(),
            Game.view.content_close(),
            b.history.navigate("coopraid", !0)
        },
        navigateReload: function() {
            Game.view.content_close(),
            location.reload()
        },
        locationSpecifyUrl: function() {
            this.popRemove(),
            Game.view.content_close(),
            b.history.navigate(this.getOptions("url"), !0)
        },
        locationSpecifyUrlWithPopRemove: function() {
            this.popRemove(),
            Game.view.content_close(),
            b.history.navigate(this.getOptions("url"), !0)
        },
        locationParty: function() {
            this.popRemove(),
            Game.view.content_close(),
            b.history.navigate("party/index/0/npc/0", !0)
        },
        callbackEmpty: function() {},
        locationInquiry: function(a) {
            f.openDocument(f.Defined.DocType.CONTACT())
        }
    });
    return r
});
define('view/game-view', ["underscore", "backbone"], function(a, b) {
    var c = b.View.extend({
        el: "#canvas",
        stage: null,
        img_manage: null,
        completed: null,
        initialize: function() {
            this.queue = new createjs.LoadQueue(!0),
            this.queue.setMaxConnections(5),
            this.queue.addEventListener("error", this.handleError),
            this.queue.addEventListener("fileload", this.handleFileLoad),
            this.queue.addEventListener("complete", this.handleComplete.bind(this));
            var a = []
              , c = !1;
            this.img_manage = [],
            this.completed = new (b.Model.extend({
                defaults: {
                    complete_flg: !1
                }
            }));
            for (var d = 0; d <= this.model.length - 1; d++)
                for (var e = 0; e <= this.model[d].get("manifest").length - 1; e++)
                    this.is_image_id(this.model[d].get("manifest")[e].id) || (a = a.concat(this.model[d].get("manifest")[e]),
                    c = !0);
            "undefined" != typeof this.options.pcWeaponId && this.options.pcWeaponId && (a = a.concat({
                id: "pcWeaponId",
                src: Game.imgUri + "/sp/cjs/" + this.options.pcWeaponId + ".png"
            })),
            c ? this.queue.loadManifest(a) : this.queue.dispatchEvent("complete")
        },
        render: function() {
            var a = document.getElementById("canvas");
            this.stage = new createjs.Stage(a),
            createjs.Ticker.setFPS(12),
            createjs.Ticker.addEventListener("tick", this.stage),
            stage = this.stage,
            this.options.hash && (location.href = "#" + this.options.hash),
            this.completed.set({
                complete_flg: !0
            }),
            this.queue.removeEventListener("error", this.handleError),
            this.queue.removeEventListener("fileload", this.handleFileLoad),
            this.queue.removeEventListener("complete", this.handleComplete.bind(this)),
            delete this.queue,
            this.queue = null
        },
        handleError: function(a) {},
        handleFileLoad: function(a) {},
        handleComplete: function(b) {
            var c = b.target;
            a.each(c._loadedResults, function(a, b) {
                images[b] = a
            }),
            this.render()
        },
        is_image_id: function(a) {
            var b = !1;
            return "undefined" != typeof images[a] ? b = !0 : -1 === $.inArray(a, this.img_manage) || "weapon" == a ? this.img_manage.push(a) : b = !0,
            b
        }
    });
    return c
});
define('view/loading', ["underscore", "backbone", "general"], function(a, b, c) {
    var d = b.View.extend({
        el: "#loading",
        initialize: function() {
            a.bindAll(this)
        },
        loadStart: function() {
            this.$el.add("#ready").css("display", "block"),
            $(".contents").css("display", "none"),
            this.fadeControll(!0),
            c.hideURLbar()
        },
        xhrStart: function() {
            this.$el.css("display", "block"),
            this.fadeControll(!0)
        },
        xhrStartNoImage: function() {
            this.$el.css("display", "block")
        },
        loadEnd: function() {
            this.$el.css("display", "none"),
            this.fadeControll(!1),
            this.trigger("fadeOut")
        },
        xhrEnd: function() {
            this.$el.css("display", "none"),
            this.fadeControll(!1)
        },
        xhrEndNoImage: function() {
            this.$el.css("display", "none")
        },
        fadeControll: function(a) {
            a ? this.$el.find(".img-load").css("display", "block") : this.$el.find(".img-load").css("display", "none")
        }
    });
    return d
});
define('util/jquery.events', ["jquery"], function(a) {
    var b = {
        animationend: "animationend webkitAnimationEnd",
        transitionend: "transitionend webkitTransitionEnd"
    }
      , c = function(a, c, d, e) {
        var f = window.setTimeout(function() {
            a.trigger(c)
        }, e)
          , g = !1
          , h = b[c];
        a.on(h, function i() {
            a.off(h, i),
            window.clearTimeout(f),
            g || (g = !0,
            d.call(a))
        })
    };
    return a.fn.extend({
        oneAnimationEnd: function(a, b) {
            return c(this, "animationend", a, b),
            this
        },
        oneTransitionEnd: function(a, b) {
            return c(this, "transitionend", a, b),
            this
        }
    }),
    a
});
define(["constant", "general", "catalog/user_agent", "catalog/ua/sound/webaudio", "lib/sound", "model/content", "model/data", "model/game", "model/pagination", "model/socket", "model/template", "model/token-data", "model/cjs-loader", "model/manifest-loader", "view/content", "view/game-view", "view/loading", "view/popup", "util/jquery.whenall", "util/jquery.events", "util/backbone-singleton", "util/local-storage", "util/navigate", "util/touch", "util/ajax"]);
