// Copyright 2012 Google Inc. All rights reserved.

(function (w, g) {
  w[g] = w[g] || {};
  w[g].e = function (s) {
    return eval(s);
  };
})(window, "google_tag_manager");

(function () {
  var data = {
    resource: {
      version: "18",

      macros: [
        { function: "__e" },
        { function: "__c", vtp_value: "G-ELL2Q47JH2" },
        {
          function: "__jsm",
          vtp_javascript: ["template", "(function(){return!0})();"],
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "event_category",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "event_label",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "event",
        },
        {
          function: "__gas",
          vtp_cookieDomain: "auto",
          vtp_doubleClick: false,
          vtp_setTrackerName: false,
          vtp_useDebugVersion: false,
          vtp_useHashAutoLink: false,
          vtp_decorateFormsAutoLink: false,
          vtp_enableLinkId: false,
          vtp_enableEcommerce: false,
          vtp_trackingId: "UA-142576449-1",
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableGA4Schema: true,
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "survey",
        },
        {
          function: "__u",
          vtp_component: "URL",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "HOST",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "PATH",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        { function: "__f", vtp_component: "URL" },
        { function: "__e" },
        {
          function: "__v",
          vtp_name: "gtm.elementClasses",
          vtp_dataLayerVersion: 1,
        },
        { function: "__v", vtp_name: "gtm.elementId", vtp_dataLayerVersion: 1 },
      ],
      tags: [
        { function: "__paused", vtp_originalTagType: "ua", tag_id: 4 },
        { function: "__paused", vtp_originalTagType: "ga", tag_id: 5 },
        {
          function: "__googtag",
          metadata: ["map"],
          once_per_event: true,
          vtp_tagId: ["macro", 1],
          vtp_configSettingsTable: [
            "list",
            ["map", "parameter", "send_page_view", "parameterValue", "true"],
          ],
          tag_id: 8,
        },
        { function: "__paused", vtp_originalTagType: "html", tag_id: 9 },
        { function: "__paused", vtp_originalTagType: "img", tag_id: 12 },
        { function: "__paused", vtp_originalTagType: "ua", tag_id: 16 },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "event_category",
              "parameterValue",
              ["macro", 3],
            ],
            ["map", "parameter", "event_label", "parameterValue", ["macro", 4]],
          ],
          vtp_eventName: "lead",
          vtp_measurementIdOverride: ["macro", 1],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 17,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "event_category",
              "parameterValue",
              ["macro", 3],
            ],
            ["map", "parameter", "event_label", "parameterValue", ["macro", 4]],
          ],
          vtp_enhancedUserId: false,
          vtp_eventName: ["macro", 5],
          vtp_measurementIdOverride: ["macro", 1],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 19,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "event_category",
              "parameterValue",
              ["macro", 3],
            ],
            ["map", "parameter", "event_label", "parameterValue", ["macro", 4]],
          ],
          vtp_eventName: "view_search_results",
          vtp_measurementIdOverride: ["macro", 1],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 21,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "event_category",
              "parameterValue",
              ["macro", 3],
            ],
            ["map", "parameter", "event_label", "parameterValue", ["macro", 4]],
          ],
          vtp_eventName: "survey",
          vtp_measurementIdOverride: ["macro", 1],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 24,
        },
        {
          function: "__ytl",
          vtp_captureComplete: true,
          vtp_captureStart: true,
          vtp_fixMissingApi: false,
          vtp_triggerStartOption: "DOM_READY",
          vtp_capturePause: false,
          vtp_captureProgress: false,
          vtp_uniqueTriggerId: "38279324_25",
          vtp_enableTriggerStartOption: true,
          tag_id: 25,
        },
      ],
      predicates: [
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.js" },
        { function: "_eq", arg0: ["macro", 2], arg1: "true" },
        { function: "_eq", arg0: ["macro", 0], arg1: "lead" },
        { function: "_cn", arg0: ["macro", 3], arg1: "filter_click" },
        { function: "_eq", arg0: ["macro", 0], arg1: "click" },
        { function: "_cn", arg0: ["macro", 3], arg1: "_fold" },
        { function: "_cn", arg0: ["macro", 3], arg1: "scrollUp" },
        { function: "_cn", arg0: ["macro", 3], arg1: "custom-event" },
        {
          function: "_eq",
          arg0: ["macro", 0],
          arg1: "scroll-CTA-click-signup",
        },
        { function: "_eq", arg0: ["macro", 0], arg1: "footer-click-signup" },
        { function: "_eq", arg0: ["macro", 0], arg1: "close-scroll-CTA" },
        { function: "_eq", arg0: ["macro", 0], arg1: "clicked-nav-item" },
        { function: "_eq", arg0: ["macro", 0], arg1: "bonusFilter" },
        { function: "_eq", arg0: ["macro", 0], arg1: "bonusTagClick" },
        { function: "_cn", arg0: ["macro", 3], arg1: "search" },
        { function: "_eq", arg0: ["macro", 0], arg1: "view_search_results" },
        { function: "_eq", arg0: ["macro", 0], arg1: "survey" },
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.dom" },
      ],
      rules: [
        [
          ["if", 0],
          ["add", 0, 1, 2, 3],
        ],
        [
          ["if", 0],
          ["unless", 1],
          ["add", 4],
        ],
        [
          ["if", 2],
          ["add", 5, 6],
        ],
        [
          ["if", 3, 4],
          ["add", 7],
        ],
        [
          ["if", 4, 5],
          ["add", 7],
        ],
        [
          ["if", 4, 6],
          ["add", 7],
        ],
        [
          ["if", 7, 8],
          ["add", 7],
        ],
        [
          ["if", 7, 9],
          ["add", 7],
        ],
        [
          ["if", 7, 10],
          ["add", 7],
        ],
        [
          ["if", 7, 11],
          ["add", 7],
        ],
        [
          ["if", 12],
          ["add", 7],
        ],
        [
          ["if", 13],
          ["add", 7],
        ],
        [
          ["if", 14, 15],
          ["add", 8],
        ],
        [
          ["if", 16],
          ["add", 9],
        ],
        [
          ["if", 17],
          ["add", 10],
        ],
      ],
    },
    runtime: [
      [50, "__c", [46, "a"], [36, [17, [15, "a"], "value"]]],
      [
        50,
        "__e",
        [46, "a"],
        [
          36,
          [
            13,
            [41, "$0"],
            [3, "$0", ["require", "internal.getEventData"]],
            ["$0", "event"],
          ],
        ],
      ],
      [
        50,
        "__googtag",
        [46, "a"],
        [
          50,
          "l",
          [46, "u", "v"],
          [
            66,
            "w",
            [2, [15, "b"], "keys", [7, [15, "v"]]],
            [46, [43, [15, "u"], [15, "w"], [16, [15, "v"], [15, "w"]]]],
          ],
        ],
        [
          50,
          "m",
          [46],
          [
            36,
            [
              7,
              [17, [17, [15, "d"], "SCHEMA"], "EP_SERVER_CONTAINER_URL"],
              [17, [17, [15, "d"], "SCHEMA"], "EP_TRANSPORT_URL"],
            ],
          ],
        ],
        [
          50,
          "n",
          [46, "u"],
          [52, "v", ["m"]],
          [
            65,
            "w",
            [15, "v"],
            [
              46,
              [
                53,
                [52, "x", [16, [15, "u"], [15, "w"]]],
                [22, [15, "x"], [46, [36, [15, "x"]]]],
              ],
            ],
          ],
          [36, [44]],
        ],
        [52, "b", ["require", "Object"]],
        [52, "c", ["require", "createArgumentsQueue"]],
        [52, "d", [15, "__module_gtag"]],
        [52, "e", ["require", "internal.gtagConfig"]],
        [52, "f", ["require", "getType"]],
        [52, "g", ["require", "internal.loadGoogleTag"]],
        [52, "h", ["require", "logToConsole"]],
        [52, "i", ["require", "makeNumber"]],
        [52, "j", ["require", "makeString"]],
        [52, "k", ["require", "makeTableMap"]],
        [52, "o", [30, [17, [15, "a"], "tagId"], ""]],
        [
          22,
          [
            30,
            [21, ["f", [15, "o"]], "string"],
            [24, [2, [15, "o"], "indexOf", [7, "-"]], 0],
          ],
          [
            46,
            [
              "h",
              [
                0,
                "Invalid Measurement ID for the GA4 Configuration tag: ",
                [15, "o"],
              ],
            ],
            [2, [15, "a"], "gtmOnFailure", [7]],
            [36],
          ],
        ],
        [52, "p", [30, [17, [15, "a"], "configSettingsVariable"], [8]]],
        [
          52,
          "q",
          [
            30,
            [
              "k",
              [30, [17, [15, "a"], "configSettingsTable"], [7]],
              "parameter",
              "parameterValue",
            ],
            [8],
          ],
        ],
        ["l", [15, "p"], [15, "q"]],
        [52, "r", [30, [17, [15, "a"], "eventSettingsVariable"], [8]]],
        [
          52,
          "s",
          [
            30,
            [
              "k",
              [30, [17, [15, "a"], "eventSettingsTable"], [7]],
              "parameter",
              "parameterValue",
            ],
            [8],
          ],
        ],
        ["l", [15, "r"], [15, "s"]],
        [52, "t", [15, "p"]],
        ["l", [15, "t"], [15, "r"]],
        [
          22,
          [
            30,
            [
              2,
              [15, "t"],
              "hasOwnProperty",
              [7, [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"]],
            ],
            [17, [15, "a"], "userProperties"],
          ],
          [
            46,
            [
              53,
              [
                52,
                "u",
                [
                  30,
                  [
                    16,
                    [15, "t"],
                    [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"],
                  ],
                  [8],
                ],
              ],
              [
                "l",
                [15, "u"],
                [
                  30,
                  [
                    "k",
                    [30, [17, [15, "a"], "userProperties"], [7]],
                    "name",
                    "value",
                  ],
                  [8],
                ],
              ],
              [
                43,
                [15, "t"],
                [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"],
                [15, "u"],
              ],
            ],
          ],
        ],
        [
          2,
          [15, "d"],
          "convertParameters",
          [
            7,
            [15, "t"],
            [17, [15, "d"], "GOLD_BOOLEAN_FIELDS"],
            [
              51,
              "",
              [7, "u"],
              [
                36,
                [
                  39,
                  [20, "false", [2, ["j", [15, "u"]], "toLowerCase", [7]]],
                  false,
                  [28, [28, [15, "u"]]],
                ],
              ],
            ],
          ],
        ],
        [
          2,
          [15, "d"],
          "convertParameters",
          [
            7,
            [15, "t"],
            [17, [15, "d"], "GOLD_NUMERIC_FIELDS"],
            [51, "", [7, "u"], [36, ["i", [15, "u"]]]],
          ],
        ],
        ["g", [15, "o"], [8, "firstPartyUrl", ["n", [15, "t"]]]],
        ["e", [15, "o"], [15, "t"], [8, "noTargetGroup", true]],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__jsm",
        [46, "a"],
        [52, "b", ["require", "internal.executeJavascriptString"]],
        [22, [20, [17, [15, "a"], "javascript"], [44]], [46, [36]]],
        [36, ["b", [17, [15, "a"], "javascript"]]],
      ],
      [50, "__paused", [46, "a"], [2, [15, "a"], "gtmOnFailure", [7]]],
      [
        50,
        "__ytl",
        [46, "a"],
        [
          50,
          "f",
          [46, "h"],
          [
            52,
            "i",
            [
              39,
              [20, [17, [15, "h"], "uniqueTriggerId"], [44]],
              "",
              [17, [15, "h"], "uniqueTriggerId"],
            ],
          ],
          [
            52,
            "j",
            [
              8,
              "captureStart",
              [17, [15, "h"], "captureStart"],
              "captureComplete",
              [17, [15, "h"], "captureComplete"],
              "capturePause",
              [17, [15, "h"], "capturePause"],
              "fixMissingApi",
              [17, [15, "h"], "fixMissingApi"],
              "progressThresholdsPercent",
              ["g", [17, [15, "h"], "progressThresholdsPercent"]],
              "progressThresholdsTimeInSeconds",
              ["g", [17, [15, "h"], "progressThresholdsTimeInSeconds"]],
            ],
          ],
          ["c", [15, "j"], [15, "i"]],
          [2, [15, "h"], "gtmOnSuccess", [7]],
        ],
        [
          50,
          "g",
          [46, "h"],
          [52, "i", [2, ["e", [15, "h"]], "split", [7, ","]]],
          [52, "j", [17, [15, "i"], "length"]],
          [52, "k", [7]],
          [
            66,
            "l",
            [15, "i"],
            [
              46,
              [
                53,
                [
                  22,
                  [12, [17, [2, [15, "l"], "trim", [7]], "length"], 0],
                  [46, [6]],
                ],
                [52, "m", ["d", [15, "l"]]],
                [22, [21, [15, "m"], [15, "m"]], [46, [6]]],
                [2, [15, "k"], "push", [7, [15, "m"]]],
              ],
            ],
          ],
          [36, [15, "k"]],
        ],
        [52, "b", ["require", "callOnDomReady"]],
        [52, "c", ["require", "internal.enableAutoEventOnYouTubeActivity"]],
        [52, "d", ["require", "makeNumber"]],
        [52, "e", ["require", "makeString"]],
        [
          22,
          [17, [15, "a"], "triggerStartOption"],
          [46, ["f", [15, "a"]]],
          [46, ["b", [51, "", [7], [36, ["f", [15, "a"]]]]]],
        ],
      ],
      [
        52,
        "__module_gtag",
        [
          13,
          [41, "$0"],
          [
            3,
            "$0",
            [
              51,
              "",
              [7],
              [
                50,
                "a",
                [46],
                [
                  50,
                  "f",
                  [46, "g", "h", "i"],
                  [
                    65,
                    "j",
                    [15, "h"],
                    [
                      46,
                      [
                        22,
                        [2, [15, "g"], "hasOwnProperty", [7, [15, "j"]]],
                        [
                          46,
                          [
                            43,
                            [15, "g"],
                            [15, "j"],
                            ["i", [16, [15, "g"], [15, "j"]]],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
                [52, "b", ["require", "Object"]],
                [
                  52,
                  "c",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        8,
                        "EP_FIRST_PARTY_COLLECTION",
                        "first_party_collection",
                        "EP_SERVER_CONTAINER_URL",
                        "server_container_url",
                        "EP_TRANSPORT_URL",
                        "transport_url",
                        "EP_USER_PROPERTIES",
                        "user_properties",
                      ],
                    ],
                  ],
                ],
                [
                  52,
                  "d",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        7,
                        "allow_ad_personalization_signals",
                        "allow_direct_google_requests",
                        "allow_google_signals",
                        "cookie_update",
                        "ignore_referrer",
                        "update",
                        "first_party_collection",
                        "send_page_view",
                      ],
                    ],
                  ],
                ],
                [
                  52,
                  "e",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        7,
                        "cookie_expires",
                        "event_timeout",
                        "session_duration",
                        "session_engaged_time",
                        "engagement_time_msec",
                      ],
                    ],
                  ],
                ],
                [
                  36,
                  [
                    8,
                    "SCHEMA",
                    [15, "c"],
                    "GOLD_BOOLEAN_FIELDS",
                    [15, "d"],
                    "GOLD_NUMERIC_FIELDS",
                    [15, "e"],
                    "convertParameters",
                    [15, "f"],
                  ],
                ],
              ],
              [36, ["a"]],
            ],
          ],
          ["$0"],
        ],
      ],
    ],
    entities: {
      __c: { 2: true, 4: true },
      __e: { 2: true, 4: true },
      __googtag: { 1: 10 },
    },
    blob: { 1: "18" },
    permissions: {
      __c: {},
      __e: {
        read_event_data: {
          eventDataAccess: "specific",
          keyPatterns: ["event"],
        },
      },
      __googtag: {
        logging: { environments: "debug" },
        access_globals: {
          keys: [
            { key: "gtag", read: true, write: true, execute: true },
            { key: "dataLayer", read: true, write: true, execute: false },
          ],
        },
        configure_google_tags: { allowedTagIds: "any" },
        load_google_tags: {
          allowedTagIds: "any",
          allowFirstPartyUrls: true,
          allowedFirstPartyUrls: "any",
        },
      },
      __jsm: { unsafe_run_arbitrary_javascript: {} },
      __paused: {},
      __ytl: {
        process_dom_events: {
          targets: [
            { targetType: "document", eventName: "DOMContentLoaded" },
            { targetType: "document", eventName: "readystatechange" },
            { targetType: "window", eventName: "load" },
          ],
        },
        detect_youtube_activity_events: { allowFixMissingJavaScriptApi: true },
      },
    },

    security_groups: {
      customScripts: ["__jsm"],
      google: ["__c", "__e", "__googtag", "__ytl"],
    },
  };

  var h,
    aa = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ea =
      typeof Object.defineProperties == "function"
        ? Object.defineProperty
        : function (a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a;
          },
    ha = function (a) {
      for (
        var b = [
            "object" == typeof globalThis && globalThis,
            a,
            "object" == typeof window && window,
            "object" == typeof self && self,
            "object" == typeof global && global,
          ],
          c = 0;
        c < b.length;
        ++c
      ) {
        var d = b[c];
        if (d && d.Math == Math) return d;
      }
      throw Error("Cannot find global object");
    },
    ia = ha(this),
    ja = function (a, b) {
      if (b)
        a: {
          for (var c = ia, d = a.split("."), e = 0; e < d.length - 1; e++) {
            var f = d[e];
            if (!(f in c)) break a;
            c = c[f];
          }
          var g = d[d.length - 1],
            k = c[g],
            m = b(k);
          m != k &&
            m != null &&
            ea(c, g, { configurable: !0, writable: !0, value: m });
        }
    };
  ja("Symbol", function (a) {
    if (a) return a;
    var b = function (f, g) {
      this.j = f;
      ea(this, "description", { configurable: !0, writable: !0, value: g });
    };
    b.prototype.toString = function () {
      return this.j;
    };
    var c = "jscomp_symbol_" + ((Math.random() * 1e9) >>> 0) + "_",
      d = 0,
      e = function (f) {
        if (this instanceof e)
          throw new TypeError("Symbol is not a constructor");
        return new b(c + (f || "") + "_" + d++, f);
      };
    return e;
  });
  var ka =
      typeof Object.create == "function"
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    la;
  if (typeof Object.setPrototypeOf == "function") la = Object.setPrototypeOf;
  else {
    var oa;
    a: {
      var pa = { a: !0 },
        ra = {};
      try {
        ra.__proto__ = pa;
        oa = ra.a;
        break a;
      } catch (a) {}
      oa = !1;
    }
    la = oa
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var sa = la,
    ta = function (a, b) {
      a.prototype = ka(b.prototype);
      a.prototype.constructor = a;
      if (sa) sa(a, b);
      else
        for (var c in b)
          if (c != "prototype")
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.vo = b.prototype;
    },
    l = function (a) {
      var b =
        typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if (typeof a.length == "number") return { next: aa(a) };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    },
    ua = function (a) {
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
      return c;
    },
    va = function (a) {
      return a instanceof Array ? a : ua(l(a));
    },
    xa = function (a) {
      return wa(a, a);
    },
    wa = function (a, b) {
      a.raw = b;
      Object.freeze && (Object.freeze(a), Object.freeze(b));
      return a;
    },
    ya =
      typeof Object.assign == "function"
        ? Object.assign
        : function (a, b) {
            for (var c = 1; c < arguments.length; c++) {
              var d = arguments[c];
              if (d)
                for (var e in d)
                  Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
            }
            return a;
          };
  ja("Object.assign", function (a) {
    return a || ya;
  });
  var za = function () {
    for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
      b[c - a] = arguments[c];
    return b;
  }; /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var Aa = this || self;
  var Ba = function (a, b) {
    this.type = a;
    this.data = b;
  };
  var Ca = function () {
    this.map = {};
    this.j = {};
  };
  Ca.prototype.get = function (a) {
    return this.map["dust." + a];
  };
  Ca.prototype.set = function (a, b) {
    var c = "dust." + a;
    this.j.hasOwnProperty(c) || (this.map[c] = b);
  };
  Ca.prototype.has = function (a) {
    return this.map.hasOwnProperty("dust." + a);
  };
  Ca.prototype.remove = function (a) {
    var b = "dust." + a;
    this.j.hasOwnProperty(b) || delete this.map[b];
  };
  var Da = function (a, b) {
    var c = [],
      d;
    for (d in a.map)
      if (a.map.hasOwnProperty(d)) {
        var e = d.substring(5);
        switch (b) {
          case 1:
            c.push(e);
            break;
          case 2:
            c.push(a.map[d]);
            break;
          case 3:
            c.push([e, a.map[d]]);
        }
      }
    return c;
  };
  Ca.prototype.ka = function () {
    return Da(this, 1);
  };
  Ca.prototype.Yb = function () {
    return Da(this, 2);
  };
  Ca.prototype.Gb = function () {
    return Da(this, 3);
  };
  var Ea = function () {};
  Ea.prototype.reset = function () {};
  var Ga = function (a, b) {
    this.K = a;
    this.parent = b;
    this.j = this.C = void 0;
    this.yc = !1;
    this.H = function (c, d, e) {
      return c.apply(d, e);
    };
    this.values = new Ca();
  };
  Ga.prototype.add = function (a, b) {
    Ha(this, a, b, !1);
  };
  var Ha = function (a, b, c, d) {
    if (!a.yc)
      if (d) {
        var e = a.values;
        e.set(b, c);
        e.j["dust." + b] = !0;
      } else a.values.set(b, c);
  };
  Ga.prototype.set = function (a, b) {
    this.yc ||
      (!this.values.has(a) && this.parent && this.parent.has(a)
        ? this.parent.set(a, b)
        : this.values.set(a, b));
  };
  Ga.prototype.get = function (a) {
    return this.values.has(a)
      ? this.values.get(a)
      : this.parent
      ? this.parent.get(a)
      : void 0;
  };
  Ga.prototype.has = function (a) {
    return !!this.values.has(a) || !(!this.parent || !this.parent.has(a));
  };
  var Ja = function (a) {
    var b = new Ga(a.K, a);
    a.C && (b.C = a.C);
    b.H = a.H;
    b.j = a.j;
    return b;
  };
  Ga.prototype.Od = function () {
    return this.K;
  };
  Ga.prototype.Ja = function () {
    this.yc = !0;
  };
  function Ka(a, b) {
    for (
      var c, d = l(b), e = d.next();
      !e.done && !((c = La(a, e.value)), c instanceof Ba);
      e = d.next()
    );
    return c;
  }
  function La(a, b) {
    try {
      var c = l(b),
        d = c.next().value,
        e = ua(c),
        f = a.get(String(d));
      if (!f || typeof f.invoke !== "function")
        throw Error("Attempting to execute non-function " + b[0] + ".");
      return f.invoke.apply(f, [a].concat(va(e)));
    } catch (k) {
      var g = a.C;
      g && g(k, b.context ? { id: b[0], line: b.context.line } : null);
      throw k;
    }
  }
  var Ma = function () {
    this.C = new Ea();
    this.j = new Ga(this.C);
  };
  h = Ma.prototype;
  h.Od = function () {
    return this.C;
  };
  h.execute = function (a) {
    return this.wi([a].concat(va(za.apply(1, arguments))));
  };
  h.wi = function () {
    for (
      var a, b = l(za.apply(0, arguments)), c = b.next();
      !c.done;
      c = b.next()
    )
      a = La(this.j, c.value);
    return a;
  };
  h.Al = function (a) {
    var b = za.apply(1, arguments),
      c = Ja(this.j);
    c.j = a;
    for (var d, e = l(b), f = e.next(); !f.done; f = e.next())
      d = La(c, f.value);
    return d;
  };
  h.Ja = function () {
    this.j.Ja();
  };
  var Na = function () {
    this.C = !1;
    this.j = new Ca();
  };
  h = Na.prototype;
  h.get = function (a) {
    return this.j.get(a);
  };
  h.set = function (a, b) {
    this.C || this.j.set(a, b);
  };
  h.has = function (a) {
    return this.j.has(a);
  };
  h.remove = function (a) {
    this.C || this.j.remove(a);
  };
  h.ka = function () {
    return this.j.ka();
  };
  h.Yb = function () {
    return this.j.Yb();
  };
  h.Gb = function () {
    return this.j.Gb();
  };
  h.Ja = function () {
    this.C = !0;
  };
  h.yc = function () {
    return this.C;
  };
  function Oa() {
    for (var a = Pa, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function Qa() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var Pa, Ra;
  function Sa(a) {
    Pa = Pa || Qa();
    Ra = Ra || Oa();
    for (var b = [], c = 0; c < a.length; c += 3) {
      var d = c + 1 < a.length,
        e = c + 2 < a.length,
        f = a.charCodeAt(c),
        g = d ? a.charCodeAt(c + 1) : 0,
        k = e ? a.charCodeAt(c + 2) : 0,
        m = f >> 2,
        n = ((f & 3) << 4) | (g >> 4),
        p = ((g & 15) << 2) | (k >> 6),
        q = k & 63;
      e || ((q = 64), d || (p = 64));
      b.push(Pa[m], Pa[n], Pa[p], Pa[q]);
    }
    return b.join("");
  }
  function Ta(a) {
    function b(m) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = Ra[n];
        if (p != null) return p;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error("Unknown base64 encoding at char: " + n);
      }
      return m;
    }
    Pa = Pa || Qa();
    Ra = Ra || Oa();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        k = b(64);
      if (k === 64 && e === -1) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      g !== 64 &&
        ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
        k !== 64 && (c += String.fromCharCode(((g << 6) & 192) | k)));
    }
  }
  var Ua = {};
  function Va(a, b) {
    Ua[a] = Ua[a] || [];
    Ua[a][b] = !0;
  }
  function Xa(a) {
    var b = Ua[a];
    if (!b || b.length === 0) return "";
    for (var c = [], d = 0, e = 0; e < b.length; e++)
      e % 8 === 0 && e > 0 && (c.push(String.fromCharCode(d)), (d = 0)),
        b[e] && (d |= 1 << e % 8);
    d > 0 && c.push(String.fromCharCode(d));
    return Sa(c.join("")).replace(/\.+$/, "");
  }
  function Ya() {
    for (var a = [], b = Ua.fdr || [], c = 0; c < b.length; c++)
      b[c] && a.push(c);
    return a.length > 0 ? a : void 0;
  }
  function $a() {}
  function ab(a) {
    return typeof a === "function";
  }
  function bb(a) {
    return typeof a === "string";
  }
  function cb(a) {
    return typeof a === "number" && !isNaN(a);
  }
  function db(a) {
    return Array.isArray(a) ? a : [a];
  }
  function eb(a, b) {
    if (a && Array.isArray(a))
      for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
  }
  function fb(a, b) {
    if (!cb(a) || !cb(b) || a > b) (a = 0), (b = 2147483647);
    return Math.floor(Math.random() * (b - a + 1) + a);
  }
  function gb(a, b) {
    for (var c = new hb(), d = 0; d < a.length; d++) c.set(a[d], !0);
    for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
    return !1;
  }
  function ib(a, b) {
    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
  }
  function jb(a) {
    return (
      !!a &&
      (Object.prototype.toString.call(a) === "[object Arguments]" ||
        Object.prototype.hasOwnProperty.call(a, "callee"))
    );
  }
  function lb(a) {
    return Math.round(Number(a)) || 0;
  }
  function mb(a) {
    return "false" === String(a).toLowerCase() ? !1 : !!a;
  }
  function nb(a) {
    var b = [];
    if (Array.isArray(a))
      for (var c = 0; c < a.length; c++) b.push(String(a[c]));
    return b;
  }
  function ob(a) {
    return a ? a.replace(/^\s+|\s+$/g, "") : "";
  }
  function pb() {
    return new Date(Date.now());
  }
  function qb() {
    return pb().getTime();
  }
  var hb = function () {
    this.prefix = "gtm.";
    this.values = {};
  };
  hb.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  hb.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  hb.prototype.contains = function (a) {
    return this.get(a) !== void 0;
  };
  function rb(a, b, c) {
    return a && a.hasOwnProperty(b) ? a[b] : c;
  }
  function sb(a) {
    var b = a;
    return function () {
      if (b) {
        var c = b;
        b = void 0;
        try {
          c();
        } catch (d) {}
      }
    };
  }
  function tb(a, b) {
    for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
  }
  function ub(a, b) {
    for (var c = [], d = 0; d < a.length; d++)
      c.push(a[d]), c.push.apply(c, b[a[d]] || []);
    return c;
  }
  function vb(a, b) {
    return a.length >= b.length && a.substring(0, b.length) === b;
  }
  function wb(a, b) {
    return (
      a.length >= b.length && a.substring(a.length - b.length, a.length) === b
    );
  }
  function xb(a, b) {
    var c = z;
    b = b || [];
    for (var d = c, e = 0; e < a.length - 1; e++) {
      if (!d.hasOwnProperty(a[e])) return;
      d = d[a[e]];
      if (b.indexOf(d) >= 0) return;
    }
    return d;
  }
  function yb(a, b) {
    for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
      d = d[e[f]] = {};
    d[e[e.length - 1]] = b;
    return c;
  }
  var zb = /^\w{1,9}$/;
  function Ab(a, b) {
    a = a || {};
    b = b || ",";
    var c = [];
    ib(a, function (d, e) {
      zb.test(d) && e && c.push(d);
    });
    return c.join(b);
  }
  function Bb(a, b) {
    function c() {
      e && ++d === b && (e(), (e = null), (c.done = !0));
    }
    var d = 0,
      e = a;
    c.done = !1;
    return c;
  }
  function Cb(a) {
    if (!a) return a;
    var b = a;
    try {
      b = decodeURIComponent(a);
    } catch (d) {}
    var c = b.split(",");
    return c.length === 2 && c[0] === c[1] ? c[0] : a;
  }
  function Db(a, b, c) {
    function d(n) {
      var p = n.split("=")[0];
      if (a.indexOf(p) < 0) return n;
      if (c !== void 0) return p + "=" + c;
    }
    function e(n) {
      return n
        .split("&")
        .map(d)
        .filter(function (p) {
          return p !== void 0;
        })
        .join("&");
    }
    var f = b.href.split(/[?#]/)[0],
      g = b.search,
      k = b.hash;
    g[0] === "?" && (g = g.substring(1));
    k[0] === "#" && (k = k.substring(1));
    g = e(g);
    k = e(k);
    g !== "" && (g = "?" + g);
    k !== "" && (k = "#" + k);
    var m = "" + f + g + k;
    m[m.length - 1] === "/" && (m = m.substring(0, m.length - 1));
    return m;
  }
  function Eb(a) {
    for (var b = 0; b < 3; ++b)
      try {
        var c = decodeURIComponent(a).replace(/\+/g, " ");
        if (c === a) break;
        a = c;
      } catch (d) {
        return "";
      }
    return a;
  } /*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
  var Fb = globalThis.trustedTypes,
    Gb;
  function Hb() {
    var a = null;
    if (!Fb) return a;
    try {
      var b = function (c) {
        return c;
      };
      a = Fb.createPolicy("goog#html", {
        createHTML: b,
        createScript: b,
        createScriptURL: b,
      });
    } catch (c) {}
    return a;
  }
  function Ib() {
    Gb === void 0 && (Gb = Hb());
    return Gb;
  }
  var Jb = function (a) {
    this.j = a;
  };
  Jb.prototype.toString = function () {
    return this.j + "";
  };
  function Kb(a) {
    var b = a,
      c = Ib();
    return new Jb(c ? c.createScriptURL(b) : b);
  }
  function Lb(a) {
    if (a instanceof Jb) return a.j;
    throw Error("");
  }
  var Mb = xa([""]),
    Nb = wa(["\x00"], ["\\0"]),
    Ob = wa(["\n"], ["\\n"]),
    Pb = wa(["\x00"], ["\\u0000"]);
  function Qb(a) {
    return a.toString().indexOf("`") === -1;
  }
  Qb(function (a) {
    return a(Mb);
  }) ||
    Qb(function (a) {
      return a(Nb);
    }) ||
    Qb(function (a) {
      return a(Ob);
    }) ||
    Qb(function (a) {
      return a(Pb);
    });
  var Rb = function (a) {
    this.j = a;
  };
  Rb.prototype.toString = function () {
    return this.j;
  };
  var Sb = function (a) {
    this.Rm = a;
  };
  function Tb(a) {
    return new Sb(function (b) {
      return b.substr(0, a.length + 1).toLowerCase() === a + ":";
    });
  }
  var Ub = [
    Tb("data"),
    Tb("http"),
    Tb("https"),
    Tb("mailto"),
    Tb("ftp"),
    new Sb(function (a) {
      return /^[^:]*([/?#]|$)/.test(a);
    }),
  ];
  function Vb(a) {
    var b;
    b = b === void 0 ? Ub : b;
    if (a instanceof Rb) return a;
    for (var c = 0; c < b.length; ++c) {
      var d = b[c];
      if (d instanceof Sb && d.Rm(a)) return new Rb(a);
    }
  }
  var Wb = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
  function Xb(a) {
    var b;
    if (a instanceof Rb)
      if (a instanceof Rb) b = a.j;
      else throw Error("");
    else b = Wb.test(a) ? a : void 0;
    return b;
  }
  function Yb(a, b) {
    var c = Xb(b);
    c !== void 0 && (a.action = c);
  }
  var Zb = function (a) {
    this.j = a;
  };
  Zb.prototype.toString = function () {
    return this.j + "";
  };
  var ac = function () {
    this.j = $b[0].toLowerCase();
  };
  ac.prototype.toString = function () {
    return this.j;
  };
  function bc(a, b) {
    var c = [new ac()];
    if (c.length === 0) throw Error("");
    var d = c.map(function (f) {
        var g;
        if (f instanceof ac) g = f.j;
        else throw Error("");
        return g;
      }),
      e = b.toLowerCase();
    if (
      d.every(function (f) {
        return e.indexOf(f) !== 0;
      })
    )
      throw Error(
        'Attribute "' + b + '" does not match any of the allowed prefixes.'
      );
    a.setAttribute(b, "true");
  }
  var cc = Array.prototype.indexOf
    ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function (a, b) {
        if (typeof a === "string")
          return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      };
  "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT"
    .split(" ")
    .concat(["BUTTON", "INPUT"]);
  function dc(a) {
    return a === null ? "null" : a === void 0 ? "undefined" : a;
  }
  var z = window,
    ec = window.history,
    B = document,
    fc = navigator;
  function gc() {
    var a;
    try {
      a = fc.serviceWorker;
    } catch (b) {
      return;
    }
    return a;
  }
  var hc = B.currentScript,
    ic = hc && hc.src;
  function jc(a, b) {
    var c = z[a];
    z[a] = c === void 0 ? b : c;
    return z[a];
  }
  function kc(a) {
    return (fc.userAgent || "").indexOf(a) !== -1;
  }
  function lc() {
    return (kc("GSA") || kc("GoogleApp")) && (kc("iPhone") || kc("iPad"));
  }
  var mc = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
    nc = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
  function oc(a, b, c) {
    b &&
      ib(b, function (d, e) {
        d = d.toLowerCase();
        c.hasOwnProperty(d) || a.setAttribute(d, e);
      });
  }
  function pc(a, b, c, d, e) {
    var f = B.createElement("script");
    oc(f, d, mc);
    f.type = "text/javascript";
    f.async = d && d.async === !1 ? !1 : !0;
    var g;
    g = Kb(dc(a));
    f.src = Lb(g);
    var k,
      m = f.ownerDocument;
    m = m === void 0 ? document : m;
    var n,
      p,
      q =
        (p = (n = m).querySelector) == null
          ? void 0
          : p.call(n, "script[nonce]");
    (k = q == null ? "" : q.nonce || q.getAttribute("nonce") || "") &&
      f.setAttribute("nonce", k);
    b && (f.onload = b);
    c && (f.onerror = c);
    if (e) e.appendChild(f);
    else {
      var r = B.getElementsByTagName("script")[0] || B.body || B.head;
      r.parentNode.insertBefore(f, r);
    }
    return f;
  }
  function qc() {
    if (ic) {
      var a = ic.toLowerCase();
      if (a.indexOf("https://") === 0) return 2;
      if (a.indexOf("http://") === 0) return 3;
    }
    return 1;
  }
  function rc(a, b, c, d, e, f) {
    f = f === void 0 ? !0 : f;
    var g = e,
      k = !1;
    g || ((g = B.createElement("iframe")), (k = !0));
    oc(g, c, nc);
    d &&
      ib(d, function (n, p) {
        g.dataset[n] = p;
      });
    f &&
      ((g.height = "0"),
      (g.width = "0"),
      (g.style.display = "none"),
      (g.style.visibility = "hidden"));
    a !== void 0 && (g.src = a);
    if (k) {
      var m = (B.body && B.body.lastChild) || B.body || B.head;
      m.parentNode.insertBefore(g, m);
    }
    b && (g.onload = b);
    return g;
  }
  function sc(a, b, c, d) {
    return tc(a, b, c, d);
  }
  function vc(a, b, c, d) {
    a.addEventListener && a.addEventListener(b, c, !!d);
  }
  function wc(a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c, !1);
  }
  function F(a) {
    z.setTimeout(a, 0);
  }
  function xc(a, b) {
    return a && b && a.attributes && a.attributes[b]
      ? a.attributes[b].value
      : null;
  }
  function yc(a) {
    var b = a.innerText || a.textContent || "";
    b &&
      b !== " " &&
      ((b = b.replace(/^[\s\xa0]+/g, "")), (b = b.replace(/[\s\xa0]+$/g, "")));
    b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
    return b;
  }
  function zc(a) {
    var b = B.createElement("div"),
      c = b,
      d,
      e = dc("A<div>" + a + "</div>"),
      f = Ib();
    d = new Zb(f ? f.createHTML(e) : e);
    if (c.nodeType === 1 && /^(script|style)$/i.test(c.tagName))
      throw Error("");
    var g;
    if (d instanceof Zb) g = d.j;
    else throw Error("");
    c.innerHTML = g;
    b = b.lastChild;
    for (var k = []; b && b.firstChild; ) k.push(b.removeChild(b.firstChild));
    return k;
  }
  function Ac(a, b, c) {
    c = c || 100;
    for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
    for (var f = a, g = 0; f && g <= c; g++) {
      if (d[String(f.tagName).toLowerCase()]) return f;
      f = f.parentElement;
    }
    return null;
  }
  function Bc(a, b, c) {
    var d;
    try {
      d = fc.sendBeacon && fc.sendBeacon(a);
    } catch (e) {
      Va("TAGGING", 15);
    }
    d ? b == null || b() : tc(a, b, c);
  }
  function Cc(a, b) {
    try {
      return fc.sendBeacon(a, b);
    } catch (c) {
      Va("TAGGING", 15);
    }
    return !1;
  }
  var Dc = {
    cache: "no-store",
    credentials: "include",
    keepalive: !0,
    method: "POST",
    mode: "no-cors",
    redirect: "follow",
  };
  function Ec(a, b, c, d, e) {
    if (Fc()) {
      var f = Object.assign({}, Dc);
      b && (f.body = b);
      c &&
        (c.attributionReporting &&
          (f.attributionReporting = c.attributionReporting),
        c.browsingTopics && (f.browsingTopics = c.browsingTopics),
        c.credentials && (f.credentials = c.credentials),
        c.mode && (f.mode = c.mode));
      try {
        var g = z.fetch(a, f);
        if (g)
          return (
            g
              .then(function (m) {
                m && (m.ok || m.status === 0)
                  ? d == null || d()
                  : e == null || e();
              })
              .catch(function () {
                e == null || e();
              }),
            !0
          );
      } catch (m) {}
    }
    if (c && c.vk) return e == null || e(), !1;
    if (b) {
      var k = Cc(a, b);
      k ? d == null || d() : e == null || e();
      return k;
    }
    Bc(a, d, e);
    return !0;
  }
  function Fc() {
    return typeof z.fetch === "function";
  }
  function Gc(a, b) {
    var c = a[b];
    c && typeof c.animVal === "string" && (c = c.animVal);
    return c;
  }
  function Hc() {
    var a = z.performance;
    if (a && ab(a.now)) return a.now();
  }
  function Ic() {
    var a,
      b = z.performance;
    if (b && b.getEntriesByType)
      try {
        var c = b.getEntriesByType("navigation");
        c && c.length > 0 && (a = c[0].type);
      } catch (d) {
        return "e";
      }
    if (!a) return "u";
    switch (a) {
      case "navigate":
        return "n";
      case "back_forward":
        return "h";
      case "reload":
        return "r";
      case "prerender":
        return "p";
      default:
        return "x";
    }
  }
  function Jc() {
    return z.performance || void 0;
  }
  function Kc() {
    var a = z.webPixelsManager;
    return a ? a.createShopifyExtend !== void 0 : !1;
  }
  var tc = function (a, b, c, d) {
    var e = new Image(1, 1);
    oc(e, d, {});
    e.onload = function () {
      e.onload = null;
      b && b();
    };
    e.onerror = function () {
      e.onerror = null;
      c && c();
    };
    e.src = a;
    return e;
  };
  function Lc(a, b) {
    return this.evaluate(a) && this.evaluate(b);
  }
  function Mc(a, b) {
    return this.evaluate(a) === this.evaluate(b);
  }
  function Nc(a, b) {
    return this.evaluate(a) || this.evaluate(b);
  }
  function Oc(a, b) {
    var c = this.evaluate(a),
      d = this.evaluate(b);
    return String(c).indexOf(String(d)) > -1;
  }
  function Pc(a, b) {
    var c = String(this.evaluate(a)),
      d = String(this.evaluate(b));
    return c.substring(0, d.length) === d;
  }
  function Qc(a, b) {
    var c = this.evaluate(a),
      d = this.evaluate(b);
    switch (c) {
      case "pageLocation":
        var e = z.location.href;
        d instanceof Na &&
          d.get("stripProtocol") &&
          (e = e.replace(/^https?:\/\//, ""));
        return e;
    }
  }
  function Rc() {
    var a = !1;
    return a;
  }
  var Sc = function (a) {
    var b;
    b = Error.call(this, a);
    this.message = b.message;
    "stack" in b && (this.stack = b.stack);
  };
  ta(Sc, Error); /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license.
*/
  var Tc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Uc = function (a) {
      if (a == null) return String(a);
      var b = Tc.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    Vc = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    Wc = function (a) {
      if (!a || Uc(a) != "object" || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !Vc(a, "constructor") &&
          !Vc(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return b === void 0 || Vc(a, b);
    },
    Xc = function (a, b) {
      var c = b || (Uc(a) == "array" ? [] : {}),
        d;
      for (d in a)
        if (Vc(a, d)) {
          var e = a[d];
          Uc(e) == "array"
            ? (Uc(c[d]) != "array" && (c[d] = []), (c[d] = Xc(e, c[d])))
            : Wc(e)
            ? (Wc(c[d]) || (c[d] = {}), (c[d] = Xc(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  function Yc(a) {
    if (a == void 0 || Array.isArray(a) || Wc(a)) return !0;
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "function":
        return !0;
    }
    return !1;
  }
  function Zc(a) {
    return (
      (typeof a === "number" && a >= 0 && isFinite(a) && a % 1 === 0) ||
      (typeof a === "string" && a[0] !== "-" && a === "" + parseInt(a))
    );
  }
  var $c = function (a) {
    a = a === void 0 ? [] : a;
    this.j = new Ca();
    this.values = [];
    this.C = !1;
    for (var b in a)
      a.hasOwnProperty(b) &&
        (Zc(b) ? (this.values[Number(b)] = a[Number(b)]) : this.j.set(b, a[b]));
  };
  h = $c.prototype;
  h.toString = function (a) {
    if (a && a.indexOf(this) >= 0) return "";
    for (var b = [], c = 0; c < this.values.length; c++) {
      var d = this.values[c];
      d === null || d === void 0
        ? b.push("")
        : d instanceof $c
        ? ((a = a || []), a.push(this), b.push(d.toString(a)), a.pop())
        : b.push(String(d));
    }
    return b.join(",");
  };
  h.set = function (a, b) {
    if (!this.C)
      if (a === "length") {
        if (!Zc(b)) {
          if (Rc())
            throw new Sc(
              "RangeError: Length property must be a valid integer."
            );
          throw Error("RangeError: Length property must be a valid integer.");
        }
        this.values.length = Number(b);
      } else Zc(a) ? (this.values[Number(a)] = b) : this.j.set(a, b);
  };
  h.get = function (a) {
    return a === "length"
      ? this.length()
      : Zc(a)
      ? this.values[Number(a)]
      : this.j.get(a);
  };
  h.length = function () {
    return this.values.length;
  };
  h.ka = function () {
    for (var a = this.j.ka(), b = 0; b < this.values.length; b++)
      this.values.hasOwnProperty(b) && a.push(String(b));
    return a;
  };
  h.Yb = function () {
    for (var a = this.j.Yb(), b = 0; b < this.values.length; b++)
      this.values.hasOwnProperty(b) && a.push(this.values[b]);
    return a;
  };
  h.Gb = function () {
    for (var a = this.j.Gb(), b = 0; b < this.values.length; b++)
      this.values.hasOwnProperty(b) && a.push([String(b), this.values[b]]);
    return a;
  };
  h.remove = function (a) {
    Zc(a) ? delete this.values[Number(a)] : this.C || this.j.remove(a);
  };
  h.pop = function () {
    return this.values.pop();
  };
  h.push = function () {
    return this.values.push.apply(this.values, va(za.apply(0, arguments)));
  };
  h.shift = function () {
    return this.values.shift();
  };
  h.splice = function (a, b) {
    var c = za.apply(2, arguments);
    return b === void 0 && c.length === 0
      ? new $c(this.values.splice(a))
      : new $c(
          this.values.splice.apply(this.values, [a, b || 0].concat(va(c)))
        );
  };
  h.unshift = function () {
    return this.values.unshift.apply(this.values, va(za.apply(0, arguments)));
  };
  h.has = function (a) {
    return (Zc(a) && this.values.hasOwnProperty(a)) || this.j.has(a);
  };
  h.Ja = function () {
    this.C = !0;
    Object.freeze(this.values);
  };
  h.yc = function () {
    return this.C;
  };
  function ad(a) {
    for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
    return b;
  }
  var bd = function (a, b) {
    this.functionName = a;
    this.Nd = b;
    this.j = new Ca();
    this.C = !1;
  };
  h = bd.prototype;
  h.toString = function () {
    return this.functionName;
  };
  h.getName = function () {
    return this.functionName;
  };
  h.getKeys = function () {
    return new $c(this.ka());
  };
  h.invoke = function (a) {
    return this.Nd.call.apply(
      this.Nd,
      [new cd(this, a)].concat(va(za.apply(1, arguments)))
    );
  };
  h.ib = function (a) {
    var b = za.apply(1, arguments);
    try {
      return this.invoke.apply(this, [a].concat(va(b)));
    } catch (c) {}
  };
  h.get = function (a) {
    return this.j.get(a);
  };
  h.set = function (a, b) {
    this.C || this.j.set(a, b);
  };
  h.has = function (a) {
    return this.j.has(a);
  };
  h.remove = function (a) {
    this.C || this.j.remove(a);
  };
  h.ka = function () {
    return this.j.ka();
  };
  h.Yb = function () {
    return this.j.Yb();
  };
  h.Gb = function () {
    return this.j.Gb();
  };
  h.Ja = function () {
    this.C = !0;
  };
  h.yc = function () {
    return this.C;
  };
  var dd = function (a, b) {
    bd.call(this, a, b);
  };
  ta(dd, bd);
  var ed = function (a, b) {
    bd.call(this, a, b);
  };
  ta(ed, bd);
  var cd = function (a, b) {
    this.Nd = a;
    this.D = b;
  };
  cd.prototype.evaluate = function (a) {
    var b = this.D;
    return Array.isArray(a) ? La(b, a) : a;
  };
  cd.prototype.getName = function () {
    return this.Nd.getName();
  };
  cd.prototype.Od = function () {
    return this.D.Od();
  };
  var fd = function () {
    this.map = new Map();
  };
  fd.prototype.set = function (a, b) {
    this.map.set(a, b);
  };
  fd.prototype.get = function (a) {
    return this.map.get(a);
  };
  var gd = function () {
    this.keys = [];
    this.values = [];
  };
  gd.prototype.set = function (a, b) {
    this.keys.push(a);
    this.values.push(b);
  };
  gd.prototype.get = function (a) {
    var b = this.keys.indexOf(a);
    if (b > -1) return this.values[b];
  };
  function hd() {
    try {
      return Map ? new fd() : new gd();
    } catch (a) {
      return new gd();
    }
  }
  var id = function (a) {
    if (a instanceof id) return a;
    if (Yc(a)) throw Error("Type of given value has an equivalent Pixie type.");
    this.value = a;
  };
  id.prototype.getValue = function () {
    return this.value;
  };
  id.prototype.toString = function () {
    return String(this.value);
  };
  var kd = function (a) {
    this.promise = a;
    this.C = !1;
    this.j = new Ca();
    this.j.set("then", jd(this));
    this.j.set("catch", jd(this, !0));
    this.j.set("finally", jd(this, !1, !0));
  };
  h = kd.prototype;
  h.get = function (a) {
    return this.j.get(a);
  };
  h.set = function (a, b) {
    this.C || this.j.set(a, b);
  };
  h.has = function (a) {
    return this.j.has(a);
  };
  h.remove = function (a) {
    this.C || this.j.remove(a);
  };
  h.ka = function () {
    return this.j.ka();
  };
  h.Yb = function () {
    return this.j.Yb();
  };
  h.Gb = function () {
    return this.j.Gb();
  };
  var jd = function (a, b, c) {
    b = b === void 0 ? !1 : b;
    c = c === void 0 ? !1 : c;
    return new dd("", function (d, e) {
      b && ((e = d), (d = void 0));
      c && (e = d);
      d instanceof dd || (d = void 0);
      e instanceof dd || (e = void 0);
      var f = Ja(this.D),
        g = function (m) {
          return function (n) {
            return c ? (m.invoke(f), a.promise) : m.invoke(f, n);
          };
        },
        k = a.promise.then(d && g(d), e && g(e));
      return new kd(k);
    });
  };
  kd.prototype.Ja = function () {
    this.C = !0;
  };
  kd.prototype.yc = function () {
    return this.C;
  };
  function G(a, b, c) {
    var d = hd(),
      e = function (g, k) {
        for (var m = g.ka(), n = 0; n < m.length; n++) k[m[n]] = f(g.get(m[n]));
      },
      f = function (g) {
        if (g === null || g === void 0) return g;
        var k = d.get(g);
        if (k) return k;
        if (g instanceof $c) {
          var m = [];
          d.set(g, m);
          for (var n = g.ka(), p = 0; p < n.length; p++)
            m[n[p]] = f(g.get(n[p]));
          return m;
        }
        if (g instanceof kd) return g.promise;
        if (g instanceof Na) {
          var q = {};
          d.set(g, q);
          e(g, q);
          return q;
        }
        if (g instanceof dd || g instanceof ed) {
          var r = function () {
            for (
              var v = za.apply(0, arguments), u = [], w = 0;
              w < v.length;
              w++
            )
              u[w] = ld(v[w], b, c);
            var x = new Ga(b ? b.Od() : new Ea());
            b && (x.j = b.j);
            return f(g.invoke.apply(g, [x].concat(va(u))));
          };
          d.set(g, r);
          e(g, r);
          return r;
        }
        var t = !1;
        switch (c) {
          case 1:
            t = !0;
            break;
          case 2:
            t = !1;
            break;
          case 3:
            t = !1;
            break;
          default:
        }
        if (g instanceof id && t) return g.getValue();
        switch (typeof g) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
            return g;
          case "object":
            if (g === null) return null;
        }
      };
    return f(a);
  }
  function ld(a, b, c) {
    var d = hd(),
      e = function (g, k) {
        for (var m in g) g.hasOwnProperty(m) && k.set(m, f(g[m]));
      },
      f = function (g) {
        var k = d.get(g);
        if (k) return k;
        if (Array.isArray(g) || jb(g)) {
          var m = new $c();
          d.set(g, m);
          for (var n in g) g.hasOwnProperty(n) && m.set(n, f(g[n]));
          return m;
        }
        if (Wc(g)) {
          var p = new Na();
          d.set(g, p);
          e(g, p);
          return p;
        }
        if (typeof g === "function") {
          var q = new dd("", function () {
            for (
              var x = za.apply(0, arguments), y = [], A = 0;
              A < x.length;
              A++
            )
              y[A] = G(this.evaluate(x[A]), b, c);
            return f((0, this.D.H)(g, g, y));
          });
          d.set(g, q);
          e(g, q);
          return q;
        }
        var u = typeof g;
        if (g === null || u === "string" || u === "number" || u === "boolean")
          return g;
        var w = !1;
        switch (c) {
          case 1:
            w = !0;
            break;
          case 2:
            w = !1;
            break;
          default:
        }
        if (g !== void 0 && w) return new id(g);
      };
    return f(a);
  }
  var md = {
    supportedMethods:
      "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(
        " "
      ),
    concat: function (a) {
      for (var b = [], c = 0; c < this.length(); c++) b.push(this.get(c));
      for (var d = 1; d < arguments.length; d++)
        if (arguments[d] instanceof $c)
          for (var e = arguments[d], f = 0; f < e.length(); f++)
            b.push(e.get(f));
        else b.push(arguments[d]);
      return new $c(b);
    },
    every: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && !b.invoke(a, this.get(d), d, this)) return !1;
      return !0;
    },
    filter: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && b.invoke(a, this.get(e), e, this) && d.push(this.get(e));
      return new $c(d);
    },
    forEach: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        this.has(d) && b.invoke(a, this.get(d), d, this);
    },
    hasOwnProperty: function (a, b) {
      return this.has(b);
    },
    indexOf: function (a, b, c) {
      var d = this.length(),
        e = c === void 0 ? 0 : Number(c);
      e < 0 && (e = Math.max(d + e, 0));
      for (var f = e; f < d; f++)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    join: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      return c.join(b);
    },
    lastIndexOf: function (a, b, c) {
      var d = this.length(),
        e = d - 1;
      c !== void 0 && (e = c < 0 ? d + c : Math.min(c, e));
      for (var f = e; f >= 0; f--)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    map: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && (d[e] = b.invoke(a, this.get(e), e, this));
      return new $c(d);
    },
    pop: function () {
      return this.pop();
    },
    push: function (a) {
      return this.push.apply(this, va(za.apply(1, arguments)));
    },
    reduce: function (a, b, c) {
      var d = this.length(),
        e,
        f = 0;
      if (c !== void 0) e = c;
      else {
        if (d === 0) {
          if (Rc()) throw new Sc("TypeError: Reduce on List with no elements.");
          throw Error("TypeError: Reduce on List with no elements.");
        }
        for (var g = 0; g < d; g++)
          if (this.has(g)) {
            e = this.get(g);
            f = g + 1;
            break;
          }
        if (g === d) {
          if (Rc()) throw new Sc("TypeError: Reduce on List with no elements.");
          throw Error("TypeError: Reduce on List with no elements.");
        }
      }
      for (var k = f; k < d; k++)
        this.has(k) && (e = b.invoke(a, e, this.get(k), k, this));
      return e;
    },
    reduceRight: function (a, b, c) {
      var d = this.length(),
        e,
        f = d - 1;
      if (c !== void 0) e = c;
      else {
        if (d === 0) {
          if (Rc())
            throw new Sc("TypeError: ReduceRight on List with no elements.");
          throw Error("TypeError: ReduceRight on List with no elements.");
        }
        for (var g = 1; g <= d; g++)
          if (this.has(d - g)) {
            e = this.get(d - g);
            f = d - (g + 1);
            break;
          }
        if (g > d) {
          if (Rc())
            throw new Sc("TypeError: ReduceRight on List with no elements.");
          throw Error("TypeError: ReduceRight on List with no elements.");
        }
      }
      for (var k = f; k >= 0; k--)
        this.has(k) && (e = b.invoke(a, e, this.get(k), k, this));
      return e;
    },
    reverse: function () {
      for (var a = ad(this), b = a.length - 1, c = 0; b >= 0; b--, c++)
        a.hasOwnProperty(b) ? this.set(c, a[b]) : this.remove(c);
      return this;
    },
    shift: function () {
      return this.shift();
    },
    slice: function (a, b, c) {
      var d = this.length();
      b === void 0 && (b = 0);
      b = b < 0 ? Math.max(d + b, 0) : Math.min(b, d);
      c = c === void 0 ? d : c < 0 ? Math.max(d + c, 0) : Math.min(c, d);
      c = Math.max(b, c);
      for (var e = [], f = b; f < c; f++) e.push(this.get(f));
      return new $c(e);
    },
    some: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && b.invoke(a, this.get(d), d, this)) return !0;
      return !1;
    },
    sort: function (a, b) {
      var c = ad(this);
      b === void 0
        ? c.sort()
        : c.sort(function (e, f) {
            return Number(b.invoke(a, e, f));
          });
      for (var d = 0; d < c.length; d++)
        c.hasOwnProperty(d) ? this.set(d, c[d]) : this.remove(d);
      return this;
    },
    splice: function (a, b, c) {
      return this.splice.apply(this, [b, c].concat(va(za.apply(3, arguments))));
    },
    toString: function () {
      return this.toString();
    },
    unshift: function (a) {
      return this.unshift.apply(this, va(za.apply(1, arguments)));
    },
  };
  var nd = function (a, b) {
    var c;
    c = Error.call(
      this,
      "Wrapped error for Dust debugging. Original error message: " + a.message
    );
    this.message = c.message;
    "stack" in c && (this.stack = c.stack);
    this.ki = a;
    this.j = [];
    this.C = b;
  };
  ta(nd, Error);
  var od = {
      charAt: 1,
      concat: 1,
      indexOf: 1,
      lastIndexOf: 1,
      match: 1,
      replace: 1,
      search: 1,
      slice: 1,
      split: 1,
      substring: 1,
      toLowerCase: 1,
      toLocaleLowerCase: 1,
      toString: 1,
      toUpperCase: 1,
      toLocaleUpperCase: 1,
      trim: 1,
    },
    pd = new Ba("break"),
    qd = new Ba("continue");
  function rd(a, b) {
    return this.evaluate(a) + this.evaluate(b);
  }
  function sd(a, b) {
    return this.evaluate(a) && this.evaluate(b);
  }
  function td(a, b, c) {
    var d = this.evaluate(a),
      e = this.evaluate(b),
      f = this.evaluate(c);
    if (!(f instanceof $c))
      throw Error("Error: Non-List argument given to Apply instruction.");
    if (d === null || d === void 0) {
      var g = "TypeError: Can't read property " + e + " of " + d + ".";
      if (Rc()) throw new Sc(g);
      throw Error(g);
    }
    var k = typeof d === "number";
    if (typeof d === "boolean" || k) {
      if (e === "toString") {
        if (k && f.length()) {
          var m = G(f.get(0));
          try {
            return d.toString(m);
          } catch (D) {}
        }
        return d.toString();
      }
      var n = "TypeError: " + d + "." + e + " is not a function.";
      if (Rc()) throw new Sc(n);
      throw Error(n);
    }
    if (typeof d === "string") {
      if (od.hasOwnProperty(e)) {
        var p = 2;
        p = 1;
        var q = G(f, void 0, p);
        return ld(d[e].apply(d, q), this.D);
      }
      var r = "TypeError: " + e + " is not a function";
      if (Rc()) throw new Sc(r);
      throw Error(r);
    }
    if (d instanceof $c) {
      if (d.has(e)) {
        var t = d.get(String(e));
        if (t instanceof dd) {
          var v = ad(f);
          return t.invoke.apply(t, [this.D].concat(va(v)));
        }
        var u = "TypeError: " + e + " is not a function";
        if (Rc()) throw new Sc(u);
        throw Error(u);
      }
      if (md.supportedMethods.indexOf(e) >= 0) {
        var w = ad(f);
        return md[e].call.apply(md[e], [d, this.D].concat(va(w)));
      }
    }
    if (d instanceof dd || d instanceof Na || d instanceof kd) {
      if (d.has(e)) {
        var x = d.get(e);
        if (x instanceof dd) {
          var y = ad(f);
          return x.invoke.apply(x, [this.D].concat(va(y)));
        }
        var A = "TypeError: " + e + " is not a function";
        if (Rc()) throw new Sc(A);
        throw Error(A);
      }
      if (e === "toString") return d instanceof dd ? d.getName() : d.toString();
      if (e === "hasOwnProperty") return d.has(f.get(0));
    }
    if (d instanceof id && e === "toString") return d.toString();
    var C = "TypeError: Object has no '" + e + "' property.";
    if (Rc()) throw new Sc(C);
    throw Error(C);
  }
  function ud(a, b) {
    a = this.evaluate(a);
    if (typeof a !== "string")
      throw Error("Invalid key name given for assignment.");
    var c = this.D;
    if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
    var d = this.evaluate(b);
    c.set(a, d);
    return d;
  }
  function vd() {
    var a = za.apply(0, arguments),
      b = Ja(this.D),
      c = Ka(b, a);
    if (c instanceof Ba) return c;
  }
  function wd() {
    return pd;
  }
  function xd(a) {
    for (var b = this.evaluate(a), c = 0; c < b.length; c++) {
      var d = this.evaluate(b[c]);
      if (d instanceof Ba) return d;
    }
  }
  function yd() {
    for (var a = this.D, b = 0; b < arguments.length - 1; b += 2) {
      var c = arguments[b];
      if (typeof c === "string") {
        var d = this.evaluate(arguments[b + 1]);
        Ha(a, c, d, !0);
      }
    }
  }
  function zd() {
    return qd;
  }
  function Ad(a, b) {
    return new Ba(a, this.evaluate(b));
  }
  function Bd(a, b) {
    for (
      var c = za.apply(2, arguments), d = new $c(), e = this.evaluate(b), f = 0;
      f < e.length;
      f++
    )
      d.push(e[f]);
    var g = [51, a, d].concat(va(c));
    this.D.add(a, this.evaluate(g));
  }
  function Cd(a, b) {
    return this.evaluate(a) / this.evaluate(b);
  }
  function Dd(a, b) {
    var c = this.evaluate(a),
      d = this.evaluate(b),
      e = c instanceof id,
      f = d instanceof id;
    return e || f ? (e && f ? c.getValue() === d.getValue() : !1) : c == d;
  }
  function Ed() {
    for (var a, b = 0; b < arguments.length; b++)
      a = this.evaluate(arguments[b]);
    return a;
  }
  function Fd(a, b, c, d) {
    for (var e = 0; e < b(); e++) {
      var f = a(c(e)),
        g = Ka(f, d);
      if (g instanceof Ba) {
        if (g.type === "break") break;
        if (g.type === "return") return g;
      }
    }
  }
  function Gd(a, b, c) {
    if (typeof b === "string")
      return Fd(
        a,
        function () {
          return b.length;
        },
        function (f) {
          return f;
        },
        c
      );
    if (
      b instanceof Na ||
      b instanceof kd ||
      b instanceof $c ||
      b instanceof dd
    ) {
      var d = b.ka(),
        e = d.length;
      return Fd(
        a,
        function () {
          return e;
        },
        function (f) {
          return d[f];
        },
        c
      );
    }
  }
  function Hd(a, b, c) {
    var d = this.evaluate(a),
      e = this.evaluate(b),
      f = this.evaluate(c),
      g = this.D;
    return Gd(
      function (k) {
        g.set(d, k);
        return g;
      },
      e,
      f
    );
  }
  function Id(a, b, c) {
    var d = this.evaluate(a),
      e = this.evaluate(b),
      f = this.evaluate(c),
      g = this.D;
    return Gd(
      function (k) {
        var m = Ja(g);
        Ha(m, d, k, !0);
        return m;
      },
      e,
      f
    );
  }
  function Jd(a, b, c) {
    var d = this.evaluate(a),
      e = this.evaluate(b),
      f = this.evaluate(c),
      g = this.D;
    return Gd(
      function (k) {
        var m = Ja(g);
        m.add(d, k);
        return m;
      },
      e,
      f
    );
  }
  function Kd(a, b, c) {
    var d = this.evaluate(a),
      e = this.evaluate(b),
      f = this.evaluate(c),
      g = this.D;
    return Ld(
      function (k) {
        g.set(d, k);
        return g;
      },
      e,
      f
    );
  }
  function Md(a, b, c) {
    var d = this.evaluate(a),
      e = this.evaluate(b),
      f = this.evaluate(c),
      g = this.D;
    return Ld(
      function (k) {
        var m = Ja(g);
        Ha(m, d, k, !0);
        return m;
      },
      e,
      f
    );
  }
  function Nd(a, b, c) {
    var d = this.evaluate(a),
      e = this.evaluate(b),
      f = this.evaluate(c),
      g = this.D;
    return Ld(
      function (k) {
        var m = Ja(g);
        m.add(d, k);
        return m;
      },
      e,
      f
    );
  }
  function Ld(a, b, c) {
    if (typeof b === "string")
      return Fd(
        a,
        function () {
          return b.length;
        },
        function (d) {
          return b[d];
        },
        c
      );
    if (b instanceof $c)
      return Fd(
        a,
        function () {
          return b.length();
        },
        function (d) {
          return b.get(d);
        },
        c
      );
    if (Rc()) throw new Sc("The value is not iterable.");
    throw new TypeError("The value is not iterable.");
  }
  function Od(a, b, c, d) {
    function e(q, r) {
      for (var t = 0; t < f.length(); t++) {
        var v = f.get(t);
        r.add(v, q.get(v));
      }
    }
    var f = this.evaluate(a);
    if (!(f instanceof $c))
      throw Error("TypeError: Non-List argument given to ForLet instruction.");
    var g = this.D,
      k = this.evaluate(d),
      m = Ja(g);
    for (e(g, m); La(m, b); ) {
      var n = Ka(m, k);
      if (n instanceof Ba) {
        if (n.type === "break") break;
        if (n.type === "return") return n;
      }
      var p = Ja(g);
      e(m, p);
      La(p, c);
      m = p;
    }
  }
  function Pd(a, b) {
    var c = za.apply(2, arguments),
      d = this.D,
      e = this.evaluate(b);
    if (!(e instanceof $c))
      throw Error("Error: non-List value given for Fn argument names.");
    return new dd(
      a,
      (function () {
        return function () {
          var f = za.apply(0, arguments),
            g = Ja(d);
          g.j === void 0 && (g.j = this.D.j);
          for (var k = [], m = 0; m < f.length; m++) {
            var n = this.evaluate(f[m]);
            k[m] = n;
          }
          for (var p = e.get("length"), q = 0; q < p; q++)
            q < k.length ? g.add(e.get(q), k[q]) : g.add(e.get(q), void 0);
          g.add("arguments", new $c(k));
          var r = Ka(g, c);
          if (r instanceof Ba) return r.type === "return" ? r.data : r;
        };
      })()
    );
  }
  function Qd(a) {
    var b = this.evaluate(a),
      c = this.D;
    if (Rd && !c.has(b)) throw new ReferenceError(b + " is not defined.");
    return c.get(b);
  }
  function Sd(a, b) {
    var c,
      d = this.evaluate(a),
      e = this.evaluate(b);
    if (d === void 0 || d === null) {
      var f =
        "TypeError: Cannot read properties of " + d + " (reading '" + e + "')";
      if (Rc()) throw new Sc(f);
      throw Error(f);
    }
    if (
      d instanceof Na ||
      d instanceof kd ||
      d instanceof $c ||
      d instanceof dd
    )
      c = d.get(e);
    else if (typeof d === "string")
      e === "length" ? (c = d.length) : Zc(e) && (c = d[e]);
    else if (d instanceof id) return;
    return c;
  }
  function Td(a, b) {
    return this.evaluate(a) > this.evaluate(b);
  }
  function Ud(a, b) {
    return this.evaluate(a) >= this.evaluate(b);
  }
  function Vd(a, b) {
    var c = this.evaluate(a),
      d = this.evaluate(b);
    c instanceof id && (c = c.getValue());
    d instanceof id && (d = d.getValue());
    return c === d;
  }
  function Wd(a, b) {
    return !Vd.call(this, a, b);
  }
  function Xd(a, b, c) {
    var d = [];
    this.evaluate(a) ? (d = this.evaluate(b)) : c && (d = this.evaluate(c));
    var e = Ka(this.D, d);
    if (e instanceof Ba) return e;
  }
  var Rd = !1;
  function Yd(a, b) {
    return this.evaluate(a) < this.evaluate(b);
  }
  function Zd(a, b) {
    return this.evaluate(a) <= this.evaluate(b);
  }
  function $d() {
    for (var a = new $c(), b = 0; b < arguments.length; b++) {
      var c = this.evaluate(arguments[b]);
      a.push(c);
    }
    return a;
  }
  function ae() {
    for (var a = new Na(), b = 0; b < arguments.length - 1; b += 2) {
      var c = String(this.evaluate(arguments[b])),
        d = this.evaluate(arguments[b + 1]);
      a.set(c, d);
    }
    return a;
  }
  function be(a, b) {
    return this.evaluate(a) % this.evaluate(b);
  }
  function ce(a, b) {
    return this.evaluate(a) * this.evaluate(b);
  }
  function de(a) {
    return -this.evaluate(a);
  }
  function ee(a) {
    return !this.evaluate(a);
  }
  function fe(a, b) {
    return !Dd.call(this, a, b);
  }
  function ge() {
    return null;
  }
  function he(a, b) {
    return this.evaluate(a) || this.evaluate(b);
  }
  function ie(a, b) {
    var c = this.evaluate(a);
    this.evaluate(b);
    return c;
  }
  function je(a) {
    return this.evaluate(a);
  }
  function ke() {
    return za.apply(0, arguments);
  }
  function le(a) {
    return new Ba("return", this.evaluate(a));
  }
  function me(a, b, c) {
    var d = this.evaluate(a),
      e = this.evaluate(b),
      f = this.evaluate(c);
    if (d === null || d === void 0) {
      var g = "TypeError: Can't set property " + e + " of " + d + ".";
      if (Rc()) throw new Sc(g);
      throw Error(g);
    }
    (d instanceof dd || d instanceof $c || d instanceof Na) &&
      d.set(String(e), f);
    return f;
  }
  function ne(a, b) {
    return this.evaluate(a) - this.evaluate(b);
  }
  function oe(a, b, c) {
    var d = this.evaluate(a),
      e = this.evaluate(b),
      f = this.evaluate(c);
    if (!Array.isArray(e) || !Array.isArray(f))
      throw Error("Error: Malformed switch instruction.");
    for (var g, k = !1, m = 0; m < e.length; m++)
      if (k || d === this.evaluate(e[m]))
        if (((g = this.evaluate(f[m])), g instanceof Ba)) {
          var n = g.type;
          if (n === "break") return;
          if (n === "return" || n === "continue") return g;
        } else k = !0;
    if (
      f.length === e.length + 1 &&
      ((g = this.evaluate(f[f.length - 1])),
      g instanceof Ba && (g.type === "return" || g.type === "continue"))
    )
      return g;
  }
  function pe(a, b, c) {
    return this.evaluate(a) ? this.evaluate(b) : this.evaluate(c);
  }
  function qe(a) {
    var b = this.evaluate(a);
    return b instanceof dd ? "function" : typeof b;
  }
  function re() {
    for (var a = this.D, b = 0; b < arguments.length; b++) {
      var c = arguments[b];
      typeof c !== "string" || a.add(c, void 0);
    }
  }
  function se(a, b, c, d) {
    var e = this.evaluate(d);
    if (this.evaluate(c)) {
      var f = Ka(this.D, e);
      if (f instanceof Ba) {
        if (f.type === "break") return;
        if (f.type === "return") return f;
      }
    }
    for (; this.evaluate(a); ) {
      var g = Ka(this.D, e);
      if (g instanceof Ba) {
        if (g.type === "break") break;
        if (g.type === "return") return g;
      }
      this.evaluate(b);
    }
  }
  function te(a) {
    return ~Number(this.evaluate(a));
  }
  function ue(a, b) {
    return Number(this.evaluate(a)) << Number(this.evaluate(b));
  }
  function ve(a, b) {
    return Number(this.evaluate(a)) >> Number(this.evaluate(b));
  }
  function we(a, b) {
    return Number(this.evaluate(a)) >>> Number(this.evaluate(b));
  }
  function xe(a, b) {
    return Number(this.evaluate(a)) & Number(this.evaluate(b));
  }
  function ze(a, b) {
    return Number(this.evaluate(a)) ^ Number(this.evaluate(b));
  }
  function Ae(a, b) {
    return Number(this.evaluate(a)) | Number(this.evaluate(b));
  }
  function Be() {}
  function Ce(a) {
    return a instanceof Sc || (a instanceof nd && a.ki instanceof Sc);
  }
  function De(a, b, c) {
    try {
      var d = this.evaluate(b);
      if (d instanceof Ba) return d;
    } catch (k) {
      if (!Ce(k)) throw k;
      var e = Ja(this.D);
      a !== "" && (k instanceof nd && (k = k.ki), e.add(a, new id(k)));
      var f = this.evaluate(c),
        g = Ka(e, f);
      if (g instanceof Ba) return g;
    }
  }
  function Ee(a, b) {
    var c, d;
    try {
      d = this.evaluate(a);
    } catch (f) {
      if (!Ce(f)) throw f;
      c = f;
    }
    var e = this.evaluate(b);
    if (e instanceof Ba) return e;
    if (c) throw c;
    if (d instanceof Ba) return d;
  }
  var Ge = function () {
    this.j = new Ma();
    Fe(this);
  };
  Ge.prototype.execute = function (a) {
    return this.j.wi(a);
  };
  var Fe = function (a) {
    var b = function (c, d) {
      var e = new ed(String(c), d);
      e.Ja();
      a.j.j.set(String(c), e);
    };
    b("map", ae);
    b("and", Lc);
    b("contains", Oc);
    b("equals", Mc);
    b("or", Nc);
    b("startsWith", Pc);
    b("variable", Qc);
  };
  var Ie = function () {
    this.C = !1;
    this.j = new Ma();
    He(this);
    this.C = !0;
  };
  Ie.prototype.execute = function (a) {
    return Je(this.j.wi(a));
  };
  var Ke = function (a, b, c) {
    return Je(a.j.Al(b, c));
  };
  Ie.prototype.Ja = function () {
    this.j.Ja();
  };
  var He = function (a) {
    var b = function (c, d) {
      var e = String(c),
        f = new ed(e, d);
      f.Ja();
      a.j.j.set(e, f);
    };
    b(0, rd);
    b(1, sd);
    b(2, td);
    b(3, ud);
    b(56, xe);
    b(57, ue);
    b(58, te);
    b(59, Ae);
    b(60, ve);
    b(61, we);
    b(62, ze);
    b(53, vd);
    b(4, wd);
    b(5, xd);
    b(68, De);
    b(52, yd);
    b(6, zd);
    b(49, Ad);
    b(7, $d);
    b(8, ae);
    b(9, xd);
    b(50, Bd);
    b(10, Cd);
    b(12, Dd);
    b(13, Ed);
    b(67, Ee);
    b(51, Pd);
    b(47, Hd);
    b(54, Id);
    b(55, Jd);
    b(63, Od);
    b(64, Kd);
    b(65, Md);
    b(66, Nd);
    b(15, Qd);
    b(16, Sd);
    b(17, Sd);
    b(18, Td);
    b(19, Ud);
    b(20, Vd);
    b(21, Wd);
    b(22, Xd);
    b(23, Yd);
    b(24, Zd);
    b(25, be);
    b(26, ce);
    b(27, de);
    b(28, ee);
    b(29, fe);
    b(45, ge);
    b(30, he);
    b(32, ie);
    b(33, ie);
    b(34, je);
    b(35, je);
    b(46, ke);
    b(36, le);
    b(43, me);
    b(37, ne);
    b(38, oe);
    b(39, pe);
    b(40, qe);
    b(44, Be);
    b(41, re);
    b(42, se);
  };
  Ie.prototype.Od = function () {
    return this.j.Od();
  };
  function Je(a) {
    if (
      a instanceof Ba ||
      a instanceof dd ||
      a instanceof $c ||
      a instanceof Na ||
      a instanceof kd ||
      a instanceof id ||
      a === null ||
      a === void 0 ||
      typeof a === "string" ||
      typeof a === "number" ||
      typeof a === "boolean"
    )
      return a;
  }
  var Le = function (a) {
    this.message = a;
  };
  function Me(a) {
    var b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
      a
    ];
    return b === void 0
      ? new Le(
          "Value " + a + " can not be encoded in web-safe base64 dictionary."
        )
      : b;
  }
  function Ne(a) {
    switch (a) {
      case 1:
        return "1";
      case 2:
      case 4:
        return "0";
      default:
        return "-";
    }
  }
  var Oe = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
  function Pe(a, b) {
    for (var c = "", d = !0; a > 7; ) {
      var e = a & 31;
      a >>= 5;
      d ? (d = !1) : (e |= 32);
      c = "" + Me(e) + c;
    }
    a <<= 2;
    d || (a |= 32);
    return (c = "" + Me(a | b) + c);
  }
  var Qe = (function () {
    function a(b) {
      return {
        toString: function () {
          return b;
        },
      };
    }
    return {
      Uk: a("consent"),
      Gi: a("convert_case_to"),
      Hi: a("convert_false_to"),
      Ii: a("convert_null_to"),
      Ji: a("convert_true_to"),
      Ki: a("convert_undefined_to"),
      Ln: a("debug_mode_metadata"),
      qa: a("function"),
      xh: a("instance_name"),
      Dl: a("live_only"),
      El: a("malware_disabled"),
      METADATA: a("metadata"),
      Hl: a("original_activity_id"),
      Yn: a("original_vendor_template_id"),
      Xn: a("once_on_load"),
      Gl: a("once_per_event"),
      Sj: a("once_per_load"),
      ao: a("priority_override"),
      bo: a("respected_consent_types"),
      bk: a("setup_tags"),
      We: a("tag_id"),
      hk: a("teardown_tags"),
    };
  })();
  var mf;
  var nf = [],
    of = [],
    pf = [],
    qf = [],
    rf = [],
    sf = {},
    tf,
    uf;
  function vf(a) {
    uf = uf || a;
  }
  function wf() {
    for (
      var a = data.resource || {}, b = a.macros || [], c = 0;
      c < b.length;
      c++
    )
      nf.push(b[c]);
    for (var d = a.tags || [], e = 0; e < d.length; e++) qf.push(d[e]);
    for (var f = a.predicates || [], g = 0; g < f.length; g++) pf.push(f[g]);
    for (var k = a.rules || [], m = 0; m < k.length; m++) {
      for (var n = k[m], p = {}, q = 0; q < n.length; q++) {
        var r = n[q][0];
        p[r] = Array.prototype.slice.call(n[q], 1);
        (r !== "if" && r !== "unless") || xf(p[r]);
      }
      of.push(p);
    }
  }
  function xf(a) {}
  var yf,
    zf = [],
    Af = [];
  function Bf(a, b) {
    var c = {};
    c[Qe.qa] = "__" + a;
    for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
    return c;
  }
  function Cf(a, b, c) {
    try {
      return tf(Df(a, b, c));
    } catch (d) {
      JSON.stringify(a);
    }
    return 2;
  }
  function Ef(a) {
    var b = a[Qe.qa];
    if (!b) throw Error("Error: No function name given for function call.");
    return !!sf[b];
  }
  var Df = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = Ff(a[e], b, c));
      return d;
    },
    Ff = function (a, b, c) {
      if (Array.isArray(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(Ff(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = nf[f];
            if (!g || b.isBlocked(g)) return;
            c[f] = !0;
            var k = String(g[Qe.xh]);
            try {
              var m = Df(g, b, c);
              m.vtp_gtmEventId = b.id;
              b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
              d = Gf(m, { event: b, index: f, type: 2, name: k });
              yf && (d = yf.Wl(d, m));
            } catch (y) {
              b.logMacroError && b.logMacroError(y, Number(f), k), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2)
              d[Ff(a[n], b, c)] = Ff(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var r = Ff(a[q], b, c);
              uf && (p = p || uf.Om(r));
              d.push(r);
            }
            return uf && p ? uf.Zl(d) : d.join("");
          case "escape":
            d = Ff(a[1], b, c);
            if (uf && Array.isArray(a[1]) && a[1][0] === "macro" && uf.Pm(a))
              return uf.kn(d);
            d = String(d);
            for (var t = 2; t < a.length; t++) Xe[a[t]] && (d = Xe[a[t]](d));
            return d;
          case "tag":
            var v = a[1];
            if (!qf[v])
              throw Error("Unable to resolve tag reference " + v + ".");
            return { nk: a[2], index: v };
          case "zb":
            var u = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            u[Qe.qa] = a[1];
            var w = Cf(u, b, c),
              x = !!a[4];
            return x || w !== 2 ? x !== (w === 1) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + "."
            );
        }
      }
      return a;
    },
    Gf = function (a, b) {
      var c = a[Qe.qa],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = sf[c],
        f =
          b &&
          b.type === 2 &&
          (d == null ? void 0 : d.reportMacroDiscrepancy) &&
          e &&
          zf.indexOf(c) !== -1,
        g = {},
        k = {},
        m;
      for (m in a)
        a.hasOwnProperty(m) &&
          vb(m, "vtp_") &&
          (e && (g[m] = a[m]), !e || f) &&
          (k[m.substring(4)] = a[m]);
      e &&
        d &&
        d.cachedModelValues &&
        (g.vtp_gtmCachedValues = d.cachedModelValues);
      if (b) {
        if (b.name == null) {
          var n;
          a: {
            var p = b.type,
              q = b.index;
            if (q == null) n = "";
            else {
              var r;
              switch (p) {
                case 2:
                  r = nf[q];
                  break;
                case 1:
                  r = qf[q];
                  break;
                default:
                  n = "";
                  break a;
              }
              var t = r && r[Qe.xh];
              n = t ? String(t) : "";
            }
          }
          b.name = n;
        }
        e && ((g.vtp_gtmEntityIndex = b.index), (g.vtp_gtmEntityName = b.name));
      }
      var v, u, w;
      if (f && Af.indexOf(c) === -1) {
        Af.push(c);
        var x = qb();
        v = e(g);
        var y = qb() - x,
          A = qb();
        u = mf(c, k, b);
        w = y - (qb() - A);
      } else if ((e && (v = e(g)), !e || f)) u = mf(c, k, b);
      f &&
        d &&
        (d.reportMacroDiscrepancy(d.id, c, void 0, !0),
        Yc(v)
          ? (Array.isArray(v)
              ? Array.isArray(u)
              : Wc(v)
              ? Wc(u)
              : typeof v === "function"
              ? typeof u === "function"
              : v === u) || d.reportMacroDiscrepancy(d.id, c)
          : v !== u && d.reportMacroDiscrepancy(d.id, c),
        w !== void 0 && d.reportMacroDiscrepancy(d.id, c, w));
      return e ? v : u;
    };
  var Hf = function (a, b, c) {
    var d;
    d = Error.call(this, c);
    this.message = d.message;
    "stack" in d && (this.stack = d.stack);
    this.permissionId = a;
    this.parameters = b;
    this.name = "PermissionError";
  };
  ta(Hf, Error);
  Hf.prototype.getMessage = function () {
    return this.message;
  };
  function If(a, b) {
    if (Array.isArray(a)) {
      Object.defineProperty(a, "context", { value: { line: b[0] } });
      for (var c = 1; c < a.length; c++) If(a[c], b[c]);
    }
  }
  function Jf() {
    return function (a, b) {
      a instanceof nd || (a = new nd(a, Kf));
      b && a instanceof nd && a.j.push(b);
      throw a;
    };
  }
  function Kf(a) {
    if (!a.length) return a;
    a.push({ id: "main", line: 0 });
    for (var b = a.length - 1; b > 0; b--) cb(a[b].id) && a.splice(b++, 1);
    for (var c = a.length - 1; c > 0; c--) a[c].line = a[c - 1].line;
    a.splice(0, 1);
    return a;
  }
  function Lf(a) {
    function b(r) {
      for (var t = 0; t < r.length; t++) d[r[t]] = !0;
    }
    for (var c = [], d = [], e = Mf(a), f = 0; f < of.length; f++) {
      var g = of[f],
        k = Nf(g, e);
      if (k) {
        for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
        b(g.block || []);
      } else k === null && b(g.block || []);
    }
    for (var p = [], q = 0; q < qf.length; q++) c[q] && !d[q] && (p[q] = !0);
    return p;
  }
  function Nf(a, b) {
    for (var c = a["if"] || [], d = 0; d < c.length; d++) {
      var e = b(c[d]);
      if (e === 0) return !1;
      if (e === 2) return null;
    }
    for (var f = a.unless || [], g = 0; g < f.length; g++) {
      var k = b(f[g]);
      if (k === 2) return null;
      if (k === 1) return !1;
    }
    return !0;
  }
  function Mf(a) {
    var b = [];
    return function (c) {
      b[c] === void 0 && (b[c] = Cf(pf[c], a));
      return b[c];
    };
  }
  function Of(a, b) {
    b[Qe.Gi] &&
      typeof a === "string" &&
      (a = b[Qe.Gi] === 1 ? a.toLowerCase() : a.toUpperCase());
    b.hasOwnProperty(Qe.Ii) && a === null && (a = b[Qe.Ii]);
    b.hasOwnProperty(Qe.Ki) && a === void 0 && (a = b[Qe.Ki]);
    b.hasOwnProperty(Qe.Ji) && a === !0 && (a = b[Qe.Ji]);
    b.hasOwnProperty(Qe.Hi) && a === !1 && (a = b[Qe.Hi]);
    return a;
  }
  var Pf = function () {
      this.j = {};
    },
    Rf = function (a, b) {
      var c = Qf.j,
        d;
      (d = c.j)[a] != null || (d[a] = []);
      c.j[a].push(function () {
        return b.apply(null, va(za.apply(0, arguments)));
      });
    };
  function Sf(a, b, c, d) {
    if (a)
      for (var e = 0; e < a.length; e++) {
        var f = void 0,
          g = "A policy function denied the permission request";
        try {
          (f = a[e](b, c, d)), (g += ".");
        } catch (k) {
          g =
            typeof k === "string"
              ? g + (": " + k)
              : k instanceof Error
              ? g + (": " + k.message)
              : g + ".";
        }
        if (!f) throw new Hf(c, d, g);
      }
  }
  function Tf(a, b, c) {
    return function (d) {
      if (d) {
        var e = a.j[d],
          f = a.j.all;
        if (e || f) {
          var g = c.apply(void 0, [d].concat(va(za.apply(1, arguments))));
          Sf(e, b, d, g);
          Sf(f, b, d, g);
        }
      }
    };
  }
  var Xf = function () {
      var a = data.permissions || {},
        b = Uf.ctid,
        c = this;
      this.C = {};
      this.j = new Pf();
      var d = {},
        e = {},
        f = Tf(this.j, b, function (g) {
          return g && d[g]
            ? d[g].apply(void 0, [g].concat(va(za.apply(1, arguments))))
            : {};
        });
      ib(a, function (g, k) {
        function m(p) {
          var q = za.apply(1, arguments);
          if (!n[p])
            throw Vf(
              p,
              {},
              "The requested additional permission " + p + " is not configured."
            );
          f.apply(null, [p].concat(va(q)));
        }
        var n = {};
        ib(k, function (p, q) {
          var r = Wf(p, q);
          n[p] = r.assert;
          d[p] || (d[p] = r.M);
          r.jk && !e[p] && (e[p] = r.jk);
        });
        c.C[g] = function (p, q) {
          var r = n[p];
          if (!r)
            throw Vf(
              p,
              {},
              "The requested permission " + p + " is not configured."
            );
          var t = Array.prototype.slice.call(arguments, 0);
          r.apply(void 0, t);
          f.apply(void 0, t);
          var v = e[p];
          v && v.apply(null, [m].concat(va(t.slice(1))));
        };
      });
    },
    Yf = function (a) {
      return Qf.C[a] || function () {};
    };
  function Wf(a, b) {
    var c = Bf(a, b);
    c.vtp_permissionName = a;
    c.vtp_createPermissionError = Vf;
    try {
      return Gf(c);
    } catch (d) {
      return {
        assert: function (e) {
          throw new Hf(e, {}, "Permission " + e + " is unknown.");
        },
        M: function () {
          throw new Hf(a, {}, "Permission " + a + " is unknown.");
        },
      };
    }
  }
  function Vf(a, b, c) {
    return new Hf(a, b, c);
  }
  var Zf = !1;
  var $f = {};
  $f.Mk = mb("");
  $f.gm = mb("");
  var fg = {},
    gg =
      ((fg.uaa = !0),
      (fg.uab = !0),
      (fg.uafvl = !0),
      (fg.uamb = !0),
      (fg.uam = !0),
      (fg.uap = !0),
      (fg.uapv = !0),
      (fg.uaw = !0),
      fg);
  var og = function (a, b) {
      for (var c = 0; c < b.length; c++) {
        var d = a,
          e = b[c];
        if (!mg.exec(e)) throw Error("Invalid key wildcard");
        var f = e.indexOf(".*"),
          g = f !== -1 && f === e.length - 2,
          k = g ? e.slice(0, e.length - 2) : e,
          m;
        a: if (d.length === 0) m = !1;
        else {
          for (var n = d.split("."), p = 0; p < n.length; p++)
            if (!ng.exec(n[p])) {
              m = !1;
              break a;
            }
          m = !0;
        }
        if (
          !m || k.length > d.length || (!g && d.length !== e.length)
            ? 0
            : g
            ? vb(d, k) && (d === k || d.charAt(k.length) === ".")
            : d === k
        )
          return !0;
      }
      return !1;
    },
    ng = /^[a-z$_][\w-$]*$/i,
    mg = /^(?:[a-z_$][a-z-_$0-9]*\.)*[a-z_$][a-z-_$0-9]*(?:\.\*)?$/i;
  var pg = [
    "matches",
    "webkitMatchesSelector",
    "mozMatchesSelector",
    "msMatchesSelector",
    "oMatchesSelector",
  ];
  function qg(a, b) {
    var c = String(a),
      d = String(b),
      e = c.length - d.length;
    return e >= 0 && c.indexOf(d, e) === e;
  }
  var rg = new hb();
  function sg(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + String(d),
        f = rg.get(e);
      f || ((f = new RegExp(b, d)), rg.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }
  function tg(a, b) {
    return String(a).indexOf(String(b)) >= 0;
  }
  function ug(a, b) {
    return String(a) === String(b);
  }
  function vg(a, b) {
    return Number(a) >= Number(b);
  }
  function wg(a, b) {
    return Number(a) <= Number(b);
  }
  function xg(a, b) {
    return Number(a) > Number(b);
  }
  function yg(a, b) {
    return Number(a) < Number(b);
  }
  function zg(a, b) {
    return vb(String(a), String(b));
  }
  var Gg =
      /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|PixieMap|List|OpaqueValue)$/i,
    Hg = { Fn: "function", PixieMap: "Object", List: "Array" };
  function Ig(a, b) {
    for (var c = ["input:!*"], d = 0; d < c.length; d++) {
      var e = Gg.exec(c[d]);
      if (!e) throw Error("Internal Error in " + a);
      var f = e[1],
        g = e[2] === "!",
        k = e[3],
        m = b[d];
      if (m == null) {
        if (g)
          throw Error(
            "Error in " + a + ". Required argument " + f + " not supplied."
          );
      } else if (k !== "*") {
        var n = typeof m;
        m instanceof dd
          ? (n = "Fn")
          : m instanceof $c
          ? (n = "List")
          : m instanceof Na
          ? (n = "PixieMap")
          : m instanceof kd
          ? (n = "PixiePromise")
          : m instanceof id && (n = "OpaqueValue");
        if (n !== k)
          throw Error(
            "Error in " +
              a +
              ". Argument " +
              f +
              " has type " +
              ((Hg[n] || n) + ", which does not match required type ") +
              ((Hg[k] || k) + ".")
          );
      }
    }
  }
  function H(a, b, c) {
    for (var d = [], e = l(c), f = e.next(); !f.done; f = e.next()) {
      var g = f.value;
      g instanceof dd
        ? d.push("function")
        : g instanceof $c
        ? d.push("Array")
        : g instanceof Na
        ? d.push("Object")
        : g instanceof kd
        ? d.push("Promise")
        : g instanceof id
        ? d.push("OpaqueValue")
        : d.push(typeof g);
    }
    return Error(
      "Argument error in " +
        a +
        ". Expected argument types [" +
        (b.join(",") + "], but received [") +
        (d.join(",") + "].")
    );
  }
  function Jg(a) {
    return a instanceof Na;
  }
  function Kg(a) {
    return Jg(a) || a === null || Lg(a);
  }
  function Mg(a) {
    return a instanceof dd;
  }
  function Ng(a) {
    return Mg(a) || a === null || Lg(a);
  }
  function Og(a) {
    return a instanceof $c;
  }
  function Pg(a) {
    return a instanceof id;
  }
  function I(a) {
    return typeof a === "string";
  }
  function Qg(a) {
    return I(a) || a === null || Lg(a);
  }
  function Rg(a) {
    return typeof a === "boolean";
  }
  function Sg(a) {
    return Rg(a) || a === null || Lg(a);
  }
  function Tg(a) {
    return typeof a === "number";
  }
  function Lg(a) {
    return a === void 0;
  }
  function Ug(a) {
    return "" + a;
  }
  function Vg(a, b) {
    var c = [];
    return c;
  }
  function Wg(a, b) {
    var c = new dd(a, function () {
      for (
        var d = Array.prototype.slice.call(arguments, 0), e = 0;
        e < d.length;
        e++
      )
        d[e] = this.evaluate(d[e]);
      try {
        return b.apply(this, d);
      } catch (g) {
        if (Rc()) throw new Sc(g.message);
        throw g;
      }
    });
    c.Ja();
    return c;
  }
  function Xg(a, b) {
    var c = new Na(),
      d;
    for (d in b)
      if (b.hasOwnProperty(d)) {
        var e = b[d];
        ab(e)
          ? c.set(d, Wg(a + "_" + d, e))
          : Wc(e)
          ? c.set(d, Xg(a + "_" + d, e))
          : (cb(e) || bb(e) || typeof e === "boolean") && c.set(d, e);
      }
    c.Ja();
    return c;
  }
  function Yg(a, b) {
    if (!I(a)) throw H(this.getName(), ["string"], arguments);
    if (!Qg(b)) throw H(this.getName(), ["string", "undefined"], arguments);
    var c = {},
      d = new Na();
    return (d = Xg("AssertApiSubject", c));
  }
  function Zg(a, b) {
    if (!Qg(b)) throw H(this.getName(), ["string", "undefined"], arguments);
    if (a instanceof kd)
      throw Error(
        "Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported."
      );
    var c = {},
      d = new Na();
    return (d = Xg("AssertThatSubject", c));
  }
  function $g(a) {
    return function () {
      for (
        var b = za.apply(0, arguments), c = [], d = this.D, e = 0;
        e < b.length;
        ++e
      )
        c.push(G(b[e], d));
      return ld(a.apply(null, c));
    };
  }
  function ah() {
    for (var a = Math, b = bh, c = {}, d = 0; d < b.length; d++) {
      var e = b[d];
      a.hasOwnProperty(e) && (c[e] = $g(a[e].bind(a)));
    }
    return c;
  }
  function ch(a) {
    var b;
    return b;
  }
  function dh(a) {
    var b;
    return b;
  }
  function eh(a) {
    try {
      return encodeURI(a);
    } catch (b) {}
  }
  function fh(a) {
    try {
      return encodeURIComponent(String(a));
    } catch (b) {}
  }
  function kh(a) {
    if (!Qg(a)) throw H(this.getName(), ["string|undefined"], arguments);
  }
  function lh(a, b) {
    if (!Tg(a) || !Tg(b))
      throw H(this.getName(), ["number", "number"], arguments);
    return fb(a, b);
  }
  function mh() {
    return new Date().getTime();
  }
  function nh(a) {
    if (a === null) return "null";
    if (a instanceof $c) return "array";
    if (a instanceof dd) return "function";
    if (a instanceof id) {
      var b = a.getValue();
      if (
        (b == null ? void 0 : b.constructor) === void 0 ||
        b.constructor.name === void 0
      ) {
        var c = String(b);
        return c.substring(8, c.length - 1);
      }
      return String(b.constructor.name);
    }
    return typeof a;
  }
  function oh(a) {
    function b(c) {
      return function (d) {
        try {
          return c(d);
        } catch (e) {
          (Zf || $f.Mk) && a.call(this, e.message);
        }
      };
    }
    return {
      parse: b(function (c) {
        return ld(JSON.parse(c));
      }),
      stringify: b(function (c) {
        return JSON.stringify(G(c));
      }),
      publicName: "JSON",
    };
  }
  function ph(a) {
    return lb(G(a, this.D));
  }
  function qh(a) {
    return Number(G(a, this.D));
  }
  function rh(a) {
    return a === null ? "null" : a === void 0 ? "undefined" : a.toString();
  }
  function sh(a, b, c) {
    var d = null,
      e = !1;
    if (!Og(a) || !I(b) || !I(c))
      throw H(this.getName(), ["Array", "string", "string"], arguments);
    d = new Na();
    for (var f = 0; f < a.length(); f++) {
      var g = a.get(f);
      g instanceof Na &&
        g.has(b) &&
        g.has(c) &&
        (d.set(g.get(b), g.get(c)), (e = !0));
    }
    return e ? d : null;
  }
  var bh = "floor ceil round max min abs pow sqrt".split(" ");
  function th() {
    var a = {};
    return {
      sm: function (b) {
        return a.hasOwnProperty(b) ? a[b] : void 0;
      },
      Jk: function (b, c) {
        a[b] = c;
      },
      reset: function () {
        a = {};
      },
    };
  }
  function uh(a, b) {
    return function () {
      return dd.prototype.invoke.apply(
        a,
        [b].concat(va(za.apply(0, arguments)))
      );
    };
  }
  function vh(a, b) {
    if (!I(a)) throw H(this.getName(), ["string", "any"], arguments);
  }
  function wh(a, b) {
    if (!I(a) || !Jg(b))
      throw H(this.getName(), ["string", "PixieMap"], arguments);
  }
  var xh = {};
  var yh = function (a) {
    var b = new Na();
    if (a instanceof $c)
      for (var c = a.ka(), d = 0; d < c.length; d++) {
        var e = c[d];
        a.has(e) && b.set(e, a.get(e));
      }
    else if (a instanceof dd)
      for (var f = a.ka(), g = 0; g < f.length; g++) {
        var k = f[g];
        b.set(k, a.get(k));
      }
    else for (var m = 0; m < a.length; m++) b.set(m, a[m]);
    return b;
  };
  xh.keys = function (a) {
    Ig(this.getName(), arguments);
    if (a instanceof $c || a instanceof dd || typeof a === "string") a = yh(a);
    if (a instanceof Na || a instanceof kd) return new $c(a.ka());
    return new $c();
  };
  xh.values = function (a) {
    Ig(this.getName(), arguments);
    if (a instanceof $c || a instanceof dd || typeof a === "string") a = yh(a);
    if (a instanceof Na || a instanceof kd) return new $c(a.Yb());
    return new $c();
  };
  xh.entries = function (a) {
    Ig(this.getName(), arguments);
    if (a instanceof $c || a instanceof dd || typeof a === "string") a = yh(a);
    if (a instanceof Na || a instanceof kd)
      return new $c(
        a.Gb().map(function (b) {
          return new $c(b);
        })
      );
    return new $c();
  };
  xh.freeze = function (a) {
    (a instanceof Na ||
      a instanceof kd ||
      a instanceof $c ||
      a instanceof dd) &&
      a.Ja();
    return a;
  };
  xh.delete = function (a, b) {
    if (a instanceof Na && !a.yc()) return a.remove(b), !0;
    return !1;
  };
  function J(a, b) {
    var c = za.apply(2, arguments),
      d = a.D.j;
    if (!d) throw Error("Missing program state.");
    if (d.qn) {
      try {
        d.kk.apply(null, [b].concat(va(c)));
      } catch (e) {
        throw (Va("TAGGING", 21), e);
      }
      return;
    }
    d.kk.apply(null, [b].concat(va(c)));
  }
  var zh = function () {
    this.C = {};
    this.j = {};
    this.H = !0;
  };
  zh.prototype.get = function (a, b) {
    var c = this.contains(a) ? this.C[a] : void 0;
    return c;
  };
  zh.prototype.contains = function (a) {
    return this.C.hasOwnProperty(a);
  };
  zh.prototype.add = function (a, b, c) {
    if (this.contains(a))
      throw Error(
        "Attempting to add a function which already exists: " + a + "."
      );
    if (this.j.hasOwnProperty(a))
      throw Error(
        "Attempting to add an API with an existing private API name: " + a + "."
      );
    this.C[a] = c ? void 0 : ab(b) ? Wg(a, b) : Xg(a, b);
  };
  function Ah(a, b) {
    var c = void 0;
    return c;
  }
  function Bh(a, b) {}
  Bh.F = "internal.safeInvoke";
  function Ch() {
    var a = {};
    return a;
  }
  var N = {
      g: {
        ra: "ad_personalization",
        N: "ad_storage",
        O: "ad_user_data",
        R: "analytics_storage",
        sb: "region",
        fc: "consent_updated",
        ae: "wait_for_update",
        Mi: "app_remove",
        Ni: "app_store_refund",
        Oi: "app_store_subscription_cancel",
        Pi: "app_store_subscription_convert",
        Qi: "app_store_subscription_renew",
        Zk: "consent_update",
        Ig: "add_payment_info",
        Jg: "add_shipping_info",
        zc: "add_to_cart",
        Ac: "remove_from_cart",
        Kg: "view_cart",
        hc: "begin_checkout",
        Bc: "select_item",
        tb: "view_item_list",
        Ob: "select_promotion",
        ub: "view_promotion",
        Ma: "purchase",
        Cc: "refund",
        Ra: "view_item",
        Lg: "add_to_wishlist",
        al: "exception",
        Ri: "first_open",
        Si: "first_visit",
        ba: "gtag.config",
        Za: "gtag.get",
        Ti: "in_app_purchase",
        ic: "page_view",
        bl: "screen_view",
        Ui: "session_start",
        Nn: "source_update",
        fl: "timing_complete",
        il: "track_social",
        bd: "user_engagement",
        jl: "user_id_update",
        de: "gclid_link_decoration_source",
        ee: "gclid_storage_source",
        vb: "gclgb",
        Na: "gclid",
        Vi: "gclid_len",
        dd: "gclgs",
        ed: "gcllp",
        fd: "gclst",
        da: "ads_data_redaction",
        Wi: "gad_source",
        Xi: "gad_source_src",
        Yi: "ndclid",
        Zi: "ngad_source",
        aj: "ngbraid",
        bj: "ngclid",
        cj: "ngclsrc",
        fe: "gclid_url",
        dj: "gclsrc",
        he: "gbraid",
        gd: "wbraid",
        ma: "allow_ad_personalization_signals",
        hd: "allow_custom_scripts",
        ie: "allow_direct_google_requests",
        Mf: "allow_display_features",
        je: "allow_enhanced_conversions",
        jb: "allow_google_signals",
        sa: "allow_interest_groups",
        kl: "app_id",
        ml: "app_installer_id",
        nl: "app_name",
        ol: "app_version",
        wb: "auid",
        ej: "auto_detection_enabled",
        jc: "aw_remarketing",
        Nf: "aw_remarketing_only",
        ke: "discount",
        me: "aw_feed_country",
        ne: "aw_feed_language",
        fa: "items",
        oe: "aw_merchant_id",
        Mg: "aw_basket_type",
        jd: "campaign_content",
        kd: "campaign_id",
        ld: "campaign_medium",
        md: "campaign_name",
        nd: "campaign",
        od: "campaign_source",
        pd: "campaign_term",
        kb: "client_id",
        fj: "rnd",
        Ng: "consent_update_type",
        gj: "content_group",
        ij: "content_type",
        lb: "conversion_cookie_prefix",
        rd: "conversion_id",
        wa: "conversion_linker",
        jj: "conversion_linker_disabled",
        kc: "conversion_api",
        Of: "cookie_deprecation",
        Ga: "cookie_domain",
        Ha: "cookie_expires",
        Oa: "cookie_flags",
        Pb: "cookie_name",
        ab: "cookie_path",
        Ca: "cookie_prefix",
        yb: "cookie_update",
        Dc: "country",
        Da: "currency",
        Og: "customer_buyer_stage",
        Ec: "customer_lifetime_value",
        Pg: "customer_loyalty",
        Qg: "customer_ltv_bucket",
        sd: "custom_map",
        Rg: "gcldc",
        Fc: "dclid",
        Sg: "debug_mode",
        ia: "developer_id",
        kj: "disable_merchant_reported_purchases",
        ud: "dc_custom_params",
        lj: "dc_natural_search",
        Tg: "dynamic_event_settings",
        Ug: "affiliation",
        pe: "checkout_option",
        Pf: "checkout_step",
        Vg: "coupon",
        vd: "item_list_name",
        Qf: "list_name",
        mj: "promotions",
        wd: "shipping",
        Rf: "tax",
        qe: "engagement_time_msec",
        se: "enhanced_client_id",
        te: "enhanced_conversions",
        Wg: "enhanced_conversions_automatic_settings",
        ue: "estimated_delivery_date",
        Sf: "euid_logged_in_state",
        xd: "event_callback",
        pl: "event_category",
        mb: "event_developer_id_string",
        ql: "event_label",
        Gc: "event",
        ve: "event_settings",
        we: "event_timeout",
        rl: "description",
        sl: "fatal",
        nj: "experiments",
        Tf: "firebase_id",
        Hc: "first_party_collection",
        xe: "_x_20",
        zb: "_x_19",
        oj: "fledge_drop_reason",
        Xg: "fledge",
        Yg: "flight_error_code",
        Zg: "flight_error_message",
        pj: "fl_activity_category",
        qj: "fl_activity_group",
        ah: "fl_advertiser_id",
        rj: "fl_ar_dedupe",
        Uf: "match_id",
        sj: "fl_random_number",
        tj: "tran",
        uj: "u",
        ye: "gac_gclid",
        Ic: "gac_wbraid",
        bh: "gac_wbraid_multiple_conversions",
        eh: "ga_restrict_domain",
        fh: "ga_temp_client_id",
        tl: "ga_temp_ecid",
        mc: "gdpr_applies",
        gh: "geo_granularity",
        Qb: "value_callback",
        Ab: "value_key",
        Jc: "_google_ng",
        Kc: "google_signals",
        hh: "google_tld",
        ze: "groups",
        ih: "gsa_experiment_id",
        vj: "gtm_up",
        Rb: "iframe_state",
        yd: "ignore_referrer",
        Vf: "internal_traffic_results",
        nc: "is_legacy_converted",
        Sb: "is_legacy_loaded",
        Ae: "is_passthrough",
        zd: "_lps",
        Sa: "language",
        Be: "legacy_developer_id_string",
        xa: "linker",
        Lc: "accept_incoming",
        Bb: "decorate_forms",
        U: "domains",
        Tb: "url_position",
        Wf: "merchant_feed_label",
        Xf: "merchant_feed_language",
        Yf: "merchant_id",
        jh: "method",
        vl: "name",
        wj: "navigation_type",
        Bd: "new_customer",
        kh: "non_interaction",
        xj: "optimize_id",
        lh: "page_hostname",
        Cd: "page_path",
        ya: "page_referrer",
        cb: "page_title",
        mh: "passengers",
        nh: "phone_conversion_callback",
        yj: "phone_conversion_country_code",
        oh: "phone_conversion_css_class",
        zj: "phone_conversion_ids",
        ph: "phone_conversion_number",
        qh: "phone_conversion_options",
        wl: "_platinum_request_status",
        rh: "_protected_audience_enabled",
        Dd: "quantity",
        Ce: "redact_device_info",
        Zf: "referral_exclusion_definition",
        On: "_request_start_time",
        Cb: "restricted_data_processing",
        Aj: "retoken",
        xl: "sample_rate",
        cg: "screen_name",
        Ub: "screen_resolution",
        Bj: "_script_source",
        Cj: "search_term",
        Pa: "send_page_view",
        oc: "send_to",
        qc: "server_container_url",
        Ed: "session_duration",
        De: "session_engaged",
        dg: "session_engaged_time",
        Db: "session_id",
        Ee: "session_number",
        Fe: "_shared_user_id",
        Fd: "delivery_postal_code",
        Pn: "_tag_firing_delay",
        Qn: "_tag_firing_time",
        yl: "temporary_client_id",
        eg: "topmost_url",
        Dj: "tracking_id",
        fg: "traffic_type",
        Ea: "transaction_id",
        ob: "transport_url",
        sh: "trip_type",
        sc: "update",
        eb: "url_passthrough",
        Ej: "uptgs",
        Ge: "_user_agent_architecture",
        He: "_user_agent_bitness",
        Ie: "_user_agent_full_version_list",
        Je: "_user_agent_mobile",
        Ke: "_user_agent_model",
        Le: "_user_agent_platform",
        Me: "_user_agent_platform_version",
        Ne: "_user_agent_wow64",
        Fa: "user_data",
        gg: "user_data_auto_latency",
        hg: "user_data_auto_meta",
        ig: "user_data_auto_multi",
        jg: "user_data_auto_selectors",
        kg: "user_data_auto_status",
        Mc: "user_data_mode",
        Oe: "user_data_settings",
        za: "user_id",
        pb: "user_properties",
        Fj: "_user_region",
        Gd: "us_privacy_string",
        na: "value",
        th: "wbraid_multiple_conversions",
        Hd: "_fpm_parameters",
        vh: "_host_name",
        Mj: "_in_page_command",
        Nj: "_ip_override",
        Oj: "_is_passthrough_cid",
        Vb: "non_personalized_ads",
        Ue: "_sst_parameters",
        xb: "conversion_label",
        la: "page_location",
        nb: "global_developer_id_string",
        rc: "tc_privacy_string",
      },
    },
    Dh = {},
    Eh = Object.freeze(
      ((Dh[N.g.ma] = 1),
      (Dh[N.g.Mf] = 1),
      (Dh[N.g.je] = 1),
      (Dh[N.g.jb] = 1),
      (Dh[N.g.fa] = 1),
      (Dh[N.g.Ga] = 1),
      (Dh[N.g.Ha] = 1),
      (Dh[N.g.Oa] = 1),
      (Dh[N.g.Pb] = 1),
      (Dh[N.g.ab] = 1),
      (Dh[N.g.Ca] = 1),
      (Dh[N.g.yb] = 1),
      (Dh[N.g.sd] = 1),
      (Dh[N.g.ia] = 1),
      (Dh[N.g.Tg] = 1),
      (Dh[N.g.xd] = 1),
      (Dh[N.g.ve] = 1),
      (Dh[N.g.we] = 1),
      (Dh[N.g.Hc] = 1),
      (Dh[N.g.eh] = 1),
      (Dh[N.g.Kc] = 1),
      (Dh[N.g.hh] = 1),
      (Dh[N.g.ze] = 1),
      (Dh[N.g.Vf] = 1),
      (Dh[N.g.nc] = 1),
      (Dh[N.g.Sb] = 1),
      (Dh[N.g.xa] = 1),
      (Dh[N.g.Zf] = 1),
      (Dh[N.g.Cb] = 1),
      (Dh[N.g.Pa] = 1),
      (Dh[N.g.oc] = 1),
      (Dh[N.g.qc] = 1),
      (Dh[N.g.Ed] = 1),
      (Dh[N.g.dg] = 1),
      (Dh[N.g.Fd] = 1),
      (Dh[N.g.ob] = 1),
      (Dh[N.g.sc] = 1),
      (Dh[N.g.Oe] = 1),
      (Dh[N.g.pb] = 1),
      (Dh[N.g.Ue] = 1),
      Dh)
    );
  Object.freeze([
    N.g.la,
    N.g.ya,
    N.g.cb,
    N.g.Sa,
    N.g.cg,
    N.g.za,
    N.g.Tf,
    N.g.gj,
  ]);
  var Fh = {},
    Gh = Object.freeze(
      ((Fh[N.g.Mi] = 1),
      (Fh[N.g.Ni] = 1),
      (Fh[N.g.Oi] = 1),
      (Fh[N.g.Pi] = 1),
      (Fh[N.g.Qi] = 1),
      (Fh[N.g.Ri] = 1),
      (Fh[N.g.Si] = 1),
      (Fh[N.g.Ti] = 1),
      (Fh[N.g.Ui] = 1),
      (Fh[N.g.bd] = 1),
      Fh)
    ),
    Hh = {},
    Ih = Object.freeze(
      ((Hh[N.g.Ig] = 1),
      (Hh[N.g.Jg] = 1),
      (Hh[N.g.zc] = 1),
      (Hh[N.g.Ac] = 1),
      (Hh[N.g.Kg] = 1),
      (Hh[N.g.hc] = 1),
      (Hh[N.g.Bc] = 1),
      (Hh[N.g.tb] = 1),
      (Hh[N.g.Ob] = 1),
      (Hh[N.g.ub] = 1),
      (Hh[N.g.Ma] = 1),
      (Hh[N.g.Cc] = 1),
      (Hh[N.g.Ra] = 1),
      (Hh[N.g.Lg] = 1),
      Hh)
    ),
    Jh = Object.freeze([
      N.g.ma,
      N.g.ie,
      N.g.jb,
      N.g.yb,
      N.g.Hc,
      N.g.yd,
      N.g.Pa,
      N.g.sc,
    ]),
    Kh = Object.freeze([].concat(va(Jh))),
    Lh = Object.freeze([N.g.Ha, N.g.we, N.g.Ed, N.g.dg, N.g.qe]),
    Mh = Object.freeze([].concat(va(Lh))),
    Nh = {},
    Oh =
      ((Nh[N.g.N] = "1"),
      (Nh[N.g.R] = "2"),
      (Nh[N.g.O] = "3"),
      (Nh[N.g.ra] = "4"),
      Nh),
    Ph = {},
    Qh = Object.freeze(
      ((Ph[N.g.de] = 1),
      (Ph[N.g.ee] = 1),
      (Ph[N.g.ma] = 1),
      (Ph[N.g.ie] = 1),
      (Ph[N.g.je] = 1),
      (Ph[N.g.sa] = 1),
      (Ph[N.g.jc] = 1),
      (Ph[N.g.Nf] = 1),
      (Ph[N.g.ke] = 1),
      (Ph[N.g.me] = 1),
      (Ph[N.g.ne] = 1),
      (Ph[N.g.fa] = 1),
      (Ph[N.g.oe] = 1),
      (Ph[N.g.lb] = 1),
      (Ph[N.g.wa] = 1),
      (Ph[N.g.Ga] = 1),
      (Ph[N.g.Ha] = 1),
      (Ph[N.g.Oa] = 1),
      (Ph[N.g.Ca] = 1),
      (Ph[N.g.Da] = 1),
      (Ph[N.g.Og] = 1),
      (Ph[N.g.Ec] = 1),
      (Ph[N.g.Pg] = 1),
      (Ph[N.g.Qg] = 1),
      (Ph[N.g.ia] = 1),
      (Ph[N.g.kj] = 1),
      (Ph[N.g.te] = 1),
      (Ph[N.g.ue] = 1),
      (Ph[N.g.Tf] = 1),
      (Ph[N.g.Hc] = 1),
      (Ph[N.g.nc] = 1),
      (Ph[N.g.Sb] = 1),
      (Ph[N.g.Sa] = 1),
      (Ph[N.g.Wf] = 1),
      (Ph[N.g.Xf] = 1),
      (Ph[N.g.Yf] = 1),
      (Ph[N.g.Bd] = 1),
      (Ph[N.g.la] = 1),
      (Ph[N.g.ya] = 1),
      (Ph[N.g.nh] = 1),
      (Ph[N.g.oh] = 1),
      (Ph[N.g.ph] = 1),
      (Ph[N.g.qh] = 1),
      (Ph[N.g.Cb] = 1),
      (Ph[N.g.Pa] = 1),
      (Ph[N.g.oc] = 1),
      (Ph[N.g.qc] = 1),
      (Ph[N.g.Fd] = 1),
      (Ph[N.g.Ea] = 1),
      (Ph[N.g.ob] = 1),
      (Ph[N.g.sc] = 1),
      (Ph[N.g.eb] = 1),
      (Ph[N.g.Fa] = 1),
      (Ph[N.g.za] = 1),
      (Ph[N.g.na] = 1),
      Ph)
    ),
    Rh = {},
    Sh = Object.freeze(
      ((Rh.search = "s"),
      (Rh.youtube = "y"),
      (Rh.playstore = "p"),
      (Rh.shopping = "h"),
      (Rh.ads = "a"),
      (Rh.maps = "m"),
      Rh)
    );
  Object.freeze(N.g);
  var O = {},
    Th =
      ((O[N.g.fc] = "gcu"),
      (O[N.g.vb] = "gclgb"),
      (O[N.g.Na] = "gclaw"),
      (O[N.g.Vi] = "gclid_len"),
      (O[N.g.dd] = "gclgs"),
      (O[N.g.ed] = "gcllp"),
      (O[N.g.fd] = "gclst"),
      (O[N.g.Yi] = "ndclid"),
      (O[N.g.Zi] = "ngad_source"),
      (O[N.g.aj] = "ngbraid"),
      (O[N.g.bj] = "ngclid"),
      (O[N.g.cj] = "ngclsrc"),
      (O[N.g.wb] = "auid"),
      (O[N.g.ke] = "dscnt"),
      (O[N.g.me] = "fcntr"),
      (O[N.g.ne] = "flng"),
      (O[N.g.oe] = "mid"),
      (O[N.g.Mg] = "bttype"),
      (O[N.g.kb] = "gacid"),
      (O[N.g.xb] = "label"),
      (O[N.g.kc] = "capi"),
      (O[N.g.Of] = "pscdl"),
      (O[N.g.Da] = "currency_code"),
      (O[N.g.Og] = "clobs"),
      (O[N.g.Ec] = "vdltv"),
      (O[N.g.Pg] = "clolo"),
      (O[N.g.Qg] = "clolb"),
      (O[N.g.Sg] = "_dbg"),
      (O[N.g.ue] = "oedeld"),
      (O[N.g.mb] = "edid"),
      (O[N.g.oj] = "fdr"),
      (O[N.g.Xg] = "fledge"),
      (O[N.g.ye] = "gac"),
      (O[N.g.Ic] = "gacgb"),
      (O[N.g.bh] = "gacmcov"),
      (O[N.g.mc] = "gdpr"),
      (O[N.g.nb] = "gdid"),
      (O[N.g.Jc] = "_ng"),
      (O[N.g.ih] = "gsaexp"),
      (O[N.g.Rb] = "frm"),
      (O[N.g.Ae] = "gtm_up"),
      (O[N.g.zd] = "lps"),
      (O[N.g.Be] = "did"),
      (O[N.g.Wf] = "fcntr"),
      (O[N.g.Xf] = "flng"),
      (O[N.g.Yf] = "mid"),
      (O[N.g.Bd] = void 0),
      (O[N.g.cb] = "tiba"),
      (O[N.g.Cb] = "rdp"),
      (O[N.g.Db] = "ecsid"),
      (O[N.g.Fe] = "ga_uid"),
      (O[N.g.Fd] = "delopc"),
      (O[N.g.rc] = "gdpr_consent"),
      (O[N.g.Ea] = "oid"),
      (O[N.g.Ej] = "uptgs"),
      (O[N.g.Ge] = "uaa"),
      (O[N.g.He] = "uab"),
      (O[N.g.Ie] = "uafvl"),
      (O[N.g.Je] = "uamb"),
      (O[N.g.Ke] = "uam"),
      (O[N.g.Le] = "uap"),
      (O[N.g.Me] = "uapv"),
      (O[N.g.Ne] = "uaw"),
      (O[N.g.gg] = "ec_lat"),
      (O[N.g.hg] = "ec_meta"),
      (O[N.g.ig] = "ec_m"),
      (O[N.g.jg] = "ec_sel"),
      (O[N.g.kg] = "ec_s"),
      (O[N.g.Mc] = "ec_mode"),
      (O[N.g.za] = "userId"),
      (O[N.g.Gd] = "us_privacy"),
      (O[N.g.na] = "value"),
      (O[N.g.th] = "mcov"),
      (O[N.g.vh] = "hn"),
      (O[N.g.Mj] = "gtm_ee"),
      (O[N.g.Vb] = "npa"),
      (O[N.g.rd] = null),
      (O[N.g.Ub] = null),
      (O[N.g.Sa] = null),
      (O[N.g.fa] = null),
      (O[N.g.la] = null),
      (O[N.g.ya] = null),
      (O[N.g.eg] = null),
      (O[N.g.Hd] = null),
      (O[N.g.de] = null),
      (O[N.g.ee] = null),
      O);
  function Uh(a, b) {
    if (a) {
      var c = a.split("x");
      c.length === 2 && (Vh(b, "u_w", c[0]), Vh(b, "u_h", c[1]));
    }
  }
  function Wh(a, b) {
    a &&
      (a.length === 2
        ? Vh(b, "hl", a)
        : a.length === 5 &&
          (Vh(b, "hl", a.substring(0, 2)), Vh(b, "gl", a.substring(3, 5))));
  }
  function Xh(a) {
    var b = Yh;
    b = b === void 0 ? Zh : b;
    var c;
    var d = b;
    if (a && a.length) {
      for (var e = [], f = 0; f < a.length; ++f) {
        var g = a[f];
        g &&
          e.push({
            item_id: d(g),
            quantity: g.quantity,
            value: g.price,
            start_date: g.start_date,
            end_date: g.end_date,
          });
      }
      c = e;
    } else c = [];
    var k;
    var m = c;
    if (m) {
      for (var n = [], p = 0; p < m.length; p++) {
        var q = m[p],
          r = [];
        q &&
          (r.push($h(q.value)),
          r.push($h(q.quantity)),
          r.push($h(q.item_id)),
          r.push($h(q.start_date)),
          r.push($h(q.end_date)),
          n.push("(" + r.join("*") + ")"));
      }
      k = n.length > 0 ? n.join("") : "";
    } else k = "";
    return k;
  }
  function Zh(a) {
    return ai(a.item_id, a.id, a.item_name);
  }
  function ai() {
    for (
      var a = l(za.apply(0, arguments)), b = a.next();
      !b.done;
      b = a.next()
    ) {
      var c = b.value;
      if (c !== null && c !== void 0) return c;
    }
  }
  function bi(a) {
    if (a && a.length) {
      for (var b = [], c = 0; c < a.length; ++c) {
        var d = a[c];
        d && d.estimated_delivery_date
          ? b.push("" + d.estimated_delivery_date)
          : b.push("");
      }
      return b.join(",");
    }
  }
  function Vh(a, b, c) {
    c === void 0 || c === null || (c === "" && !gg[b]) || (a[b] = c);
  }
  function $h(a) {
    return typeof a !== "number" && typeof a !== "string" ? "" : a.toString();
  }
  function ci(a) {
    return di ? B.querySelectorAll(a) : null;
  }
  function ei(a, b) {
    if (!di) return null;
    if (Element.prototype.closest)
      try {
        return a.closest(b);
      } catch (e) {
        return null;
      }
    var c =
        Element.prototype.matches ||
        Element.prototype.webkitMatchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector,
      d = a;
    if (!B.documentElement.contains(d)) return null;
    do {
      try {
        if (c.call(d, b)) return d;
      } catch (e) {
        break;
      }
      d = d.parentElement || d.parentNode;
    } while (d !== null && d.nodeType === 1);
    return null;
  }
  var fi = !1;
  if (B.querySelectorAll)
    try {
      var gi = B.querySelectorAll(":root");
      gi && gi.length == 1 && gi[0] == B.documentElement && (fi = !0);
    } catch (a) {}
  var di = fi;
  function hi(a) {
    switch (a) {
      case 0:
        break;
      case 9:
        return "e4";
      case 6:
        return "e5";
      case 14:
        return "e6";
      default:
        return "e7";
    }
  }
  var ii = /^[0-9A-Fa-f]{64}$/;
  function ji(a) {
    try {
      return new TextEncoder().encode(a);
    } catch (e) {
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a.charCodeAt(c);
        d < 128
          ? b.push(d)
          : d < 2048
          ? b.push(192 | (d >> 6), 128 | (d & 63))
          : d < 55296 || d >= 57344
          ? b.push(224 | (d >> 12), 128 | ((d >> 6) & 63), 128 | (d & 63))
          : ((d = 65536 + (((d & 1023) << 10) | (a.charCodeAt(++c) & 1023))),
            b.push(
              240 | (d >> 18),
              128 | ((d >> 12) & 63),
              128 | ((d >> 6) & 63),
              128 | (d & 63)
            ));
      }
      return new Uint8Array(b);
    }
  }
  function ki(a) {
    if (a === "" || a === "e0") return Promise.resolve(a);
    var b;
    if ((b = z.crypto) == null ? 0 : b.subtle) {
      if (ii.test(a)) return Promise.resolve(a);
      try {
        var c = ji(a);
        return z.crypto.subtle
          .digest("SHA-256", c)
          .then(function (d) {
            var e = Array.from(new Uint8Array(d))
              .map(function (f) {
                return String.fromCharCode(f);
              })
              .join("");
            return z
              .btoa(e)
              .replace(/\+/g, "-")
              .replace(/\//g, "_")
              .replace(/=+$/, "");
          })
          .catch(function () {
            return "e2";
          });
      } catch (d) {
        return Promise.resolve("e2");
      }
    } else return Promise.resolve("e1");
  }
  function li(a, b) {
    if (a === "") return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var mi = [],
    ni = {};
  function oi(a) {
    return mi[a] === void 0 ? !1 : mi[a];
  }
  var pi = [];
  function qi(a) {
    switch (a) {
      case 0:
        return 0;
      case 52:
        return 10;
      case 53:
        return 11;
      case 54:
        return 1;
      case 55:
        return 2;
      case 56:
        return 7;
      case 78:
        return 3;
      case 104:
        return 4;
      case 106:
        return 5;
      case 122:
        return 9;
      case 123:
        return 6;
    }
  }
  function ri(a, b) {
    pi[a] = b;
    var c = qi(a);
    c !== void 0 && (mi[c] = b);
  }
  function P(a) {
    ri(a, !0);
  }
  P(40);
  P(35);
  P(36);
  P(37);
  P(38);
  P(58);
  P(96);
  P(21);
  P(134);
  P(20);
  P(141);
  P(133);
  P(79);
  P(107);
  P(59);
  P(6);
  P(99);
  P(130);
  P(92);
  P(85);
  P(105);
  P(147);
  P(119);
  P(22);
  P(98);
  P(76);
  P(103);
  P(142);
  P(106);
  P(7);
  ri(25, !1), P(26);
  ni[1] = li("1", 6e4);
  ni[3] = li("10", 1);
  ni[2] = li("", 50);
  P(30);
  P(14);
  P(84);
  P(101);
  P(131);
  P(111);
  P(12);
  P(10);

  P(145);
  P(123);
  P(114);
  P(29);
  P(72);
  P(122);
  P(53);
  P(87);
  P(91);
  P(102);
  P(110);
  P(90);

  P(121);
  P(104);
  P(88);
  P(32);
  P(61);
  P(24);
  P(62);
  P(16);
  P(138);
  P(75);
  P(139);
  P(127);
  P(127), P(129);
  P(127), P(126), P(129);
  P(127), P(126), P(129), P(128);
  P(89);
  P(15);
  function Q(a) {
    return !!pi[a];
  }
  function si(a, b) {
    for (var c = !1, d = !1, e = 0; c === d; )
      if (
        ((c = (((Math.random() * 4294967296) | 0) & 1) === 0),
        (d = (((Math.random() * 4294967296) | 0) & 1) === 0),
        e++,
        e > 30)
      )
        return;
    c ? P(b) : P(a);
  }
  var ti = {
      Wk: "1",
      Xk: "1",
      Yk: "1000",
      Nl: "101732282~101732284~102067808~102453103~102482433~102539968~102558064~102587591~102605417~102640600~102658453",
    },
    ui = {
      qg: Number(ti.Wk) || 0,
      rg: Number(ti.Xk) || 0,
      fm: Number(ti.Yk) || 0,
      In: ti.Nl,
    };
  function S(a) {
    Va("GTM", a);
  }
  var aj = { zh: "52k0" };
  aj.Te = Number("0") || 0;
  aj.Mb = "dataLayer";
  aj.Kn =
    "ChEIgMLbvQYQ2LnhkeP27YCmARIkAAbsGgLOWQo9AYL0SZKWIuSD16lcZNEbqA3jEBfFLj8d7GLwGgINBw\x3d\x3d";
  var bj = {
      __cl: 1,
      __ecl: 1,
      __ehl: 1,
      __evl: 1,
      __fal: 1,
      __fil: 1,
      __fsl: 1,
      __hl: 1,
      __jel: 1,
      __lcl: 1,
      __sdl: 1,
      __tl: 1,
      __ytl: 1,
    },
    cj = { __paused: 1, __tg: 1 },
    dj;
  for (dj in bj) bj.hasOwnProperty(dj) && (cj[dj] = 1);
  var ej = mb(""),
    fj = !1,
    gj,
    hj = !1;
  gj = hj;
  var ij,
    jj = !1;
  ij = jj;
  var kj,
    lj = !1;
  kj = lj;
  aj.Lf = "www.googletagmanager.com";
  var mj = "" + aj.Lf + (gj ? "/gtag/js" : "/gtm.js"),
    nj = {},
    oj = null,
    pj = null,
    qj = {},
    rj = {};
  aj.Vk = "";
  var sj = "";
  aj.Ah = sj;
  var tj = function () {
      this.j = new Set();
    },
    vj = function () {
      return Array.from(uj.P.j).join("~");
    },
    wj = function () {
      var a = uj.P,
        b = ui.In;
      a.j = new Set();
      if (b !== "")
        for (var c = l(b.split("~")), d = c.next(); !d.done; d = c.next()) {
          var e = Number(d.value);
          isNaN(e) || a.j.add(e);
        }
    },
    uj = new (function () {
      this.P = new tj();
      this.j = !1;
      this.C = 0;
      this.oa = this.fb = this.uc = this.K = "";
      this.X = this.H = !1;
    })();
  function xj() {
    var a = uj.K.length;
    return uj.K[a - 1] === "/" ? uj.K.substring(0, a - 1) : uj.K;
  }
  function yj() {
    return uj.j ? (Q(82) ? uj.C === 0 : uj.C !== 1) : !1;
  }
  function zj(a) {
    for (var b = {}, c = l(a.split("|")), d = c.next(); !d.done; d = c.next())
      b[d.value] = !0;
    return b;
  }
  var Aj = new hb(),
    Bj = {},
    Cj = {},
    Fj = {
      name: aj.Mb,
      set: function (a, b) {
        Xc(yb(a, b), Bj);
        Dj();
      },
      get: function (a) {
        return Ej(a, 2);
      },
      reset: function () {
        Aj = new hb();
        Bj = {};
        Dj();
      },
    };
  function Ej(a, b) {
    return b != 2 ? Aj.get(a) : Gj(a);
  }
  function Gj(a, b) {
    var c = a.split(".");
    b = b || [];
    for (var d = Bj, e = 0; e < c.length; e++) {
      if (d === null) return !1;
      if (d === void 0) break;
      d = d[c[e]];
      if (b.indexOf(d) !== -1) return;
    }
    return d;
  }
  function Hj(a, b) {
    Cj.hasOwnProperty(a) || (Aj.set(a, b), Xc(yb(a, b), Bj), Dj());
  }
  function Ij() {
    for (
      var a = [
          "gtm.allowlist",
          "gtm.blocklist",
          "gtm.whitelist",
          "gtm.blacklist",
          "tagTypeBlacklist",
        ],
        b = 0;
      b < a.length;
      b++
    ) {
      var c = a[b],
        d = Ej(c, 1);
      if (Array.isArray(d) || Wc(d)) d = Xc(d, null);
      Cj[c] = d;
    }
  }
  function Dj(a) {
    ib(Cj, function (b, c) {
      Aj.set(b, c);
      Xc(yb(b), Bj);
      Xc(yb(b, c), Bj);
      a && delete Cj[b];
    });
  }
  function Jj(a, b) {
    var c,
      d = (b === void 0 ? 2 : b) !== 1 ? Gj(a) : Aj.get(a);
    Uc(d) === "array" || Uc(d) === "object" ? (c = Xc(d, null)) : (c = d);
    return c;
  }
  var Oj = /:[0-9]+$/,
    Pj = /^\d+\.fls\.doubleclick\.net$/;
  function Qj(a, b, c, d) {
    for (var e = [], f = l(a.split("&")), g = f.next(); !g.done; g = f.next()) {
      var k = l(g.value.split("=")),
        m = k.next().value,
        n = ua(k);
      if (decodeURIComponent(m.replace(/\+/g, " ")) === b) {
        var p = n.join("=");
        if (!c) return d ? p : decodeURIComponent(p.replace(/\+/g, " "));
        e.push(d ? p : decodeURIComponent(p.replace(/\+/g, " ")));
      }
    }
    return c ? e : void 0;
  }
  function Rj(a, b, c, d, e) {
    b && (b = String(b).toLowerCase());
    if (b === "protocol" || b === "port")
      a.protocol = Sj(a.protocol) || Sj(z.location.protocol);
    b === "port"
      ? (a.port = String(
          Number(a.hostname ? a.port : z.location.port) ||
            (a.protocol === "http" ? 80 : a.protocol === "https" ? 443 : "")
        ))
      : b === "host" &&
        (a.hostname = (a.hostname || z.location.hostname)
          .replace(Oj, "")
          .toLowerCase());
    return Tj(a, b, c, d, e);
  }
  function Tj(a, b, c, d, e) {
    var f,
      g = Sj(a.protocol);
    b && (b = String(b).toLowerCase());
    switch (b) {
      case "url_no_fragment":
        f = Uj(a);
        break;
      case "protocol":
        f = g;
        break;
      case "host":
        f = a.hostname.replace(Oj, "").toLowerCase();
        if (c) {
          var k = /^www\d*\./.exec(f);
          k && k[0] && (f = f.substring(k[0].length));
        }
        break;
      case "port":
        f = String(
          Number(a.port) || (g === "http" ? 80 : g === "https" ? 443 : "")
        );
        break;
      case "path":
        a.pathname || a.hostname || Va("TAGGING", 1);
        f = a.pathname.substring(0, 1) === "/" ? a.pathname : "/" + a.pathname;
        var m = f.split("/");
        (d || []).indexOf(m[m.length - 1]) >= 0 && (m[m.length - 1] = "");
        f = m.join("/");
        break;
      case "query":
        f = a.search.replace("?", "");
        e && (f = Qj(f, e, !1));
        break;
      case "extension":
        var n = a.pathname.split(".");
        f = n.length > 1 ? n[n.length - 1] : "";
        f = f.split("/")[0];
        break;
      case "fragment":
        f = a.hash.replace("#", "");
        break;
      default:
        f = a && a.href;
    }
    return f;
  }
  function Sj(a) {
    return a ? a.replace(":", "").toLowerCase() : "";
  }
  function Uj(a) {
    var b = "";
    if (a && a.href) {
      var c = a.href.indexOf("#");
      b = c < 0 ? a.href : a.href.substring(0, c);
    }
    return b;
  }
  var Vj = {},
    Wj = 0;
  function Xj(a) {
    var b = Vj[a];
    if (!b) {
      var c = B.createElement("a");
      a && (c.href = a);
      var d = c.pathname;
      d[0] !== "/" && (a || Va("TAGGING", 1), (d = "/" + d));
      var e = c.hostname.replace(Oj, "");
      b = {
        href: c.href,
        protocol: c.protocol,
        host: c.host,
        hostname: e,
        pathname: d,
        search: c.search,
        hash: c.hash,
        port: c.port,
      };
      Wj < 5 && ((Vj[a] = b), Wj++);
    }
    return b;
  }
  function Yj(a, b, c) {
    var d = Xj(a);
    return Db(b, d, c);
  }
  function Zj(a) {
    var b = Xj(z.location.href),
      c = Rj(b, "host", !1);
    if (c && c.match(Pj)) {
      var d = Rj(b, "path");
      if (d) {
        var e = d.split(a + "=");
        if (e.length > 1) return e[1].split(";")[0].split("?")[0];
      }
    }
  }
  var ak = {
      "https://www.google.com": "/g",
      "https://www.googleadservices.com": "/as",
      "https://pagead2.googlesyndication.com": "/gs",
    },
    bk = [
      "/as/d/ccm/conversion",
      "/g/d/ccm/conversion",
      "/gs/ccm/conversion",
      "/d/ccm/form-data",
    ];
  function ck(a, b) {
    if (a) {
      var c = "" + a;
      c.indexOf("http://") !== 0 &&
        c.indexOf("https://") !== 0 &&
        (c = "https://" + c);
      c[c.length - 1] === "/" && (c = c.substring(0, c.length - 1));
      return Xj("" + c + b).href;
    }
  }
  function dk(a, b) {
    if (yj() || ij) return ck(a, b);
  }
  function ek() {
    return !!aj.Ah && aj.Ah.split("@@").join("") !== "SGTM_TOKEN";
  }
  function fk(a) {
    for (var b = l([N.g.qc, N.g.ob]), c = b.next(); !c.done; c = b.next()) {
      var d = T(a, c.value);
      if (d) return d;
    }
  }
  function gk(a, b, c) {
    c = c === void 0 ? "" : c;
    if (!yj()) return a;
    var d = b ? ak[a] || "" : "";
    d === "/gs" && (c = "");
    return "" + xj() + d + c;
  }
  function hk(a) {
    if (!yj()) return a;
    for (var b = l(bk), c = b.next(); !c.done; c = b.next())
      if (vb(a, "" + xj() + c.value))
        return a + "&_uip=" + encodeURIComponent("::");
    return a;
  }
  function ik(a) {
    var b = String(a[Qe.qa] || "").replace(/_/g, "");
    return vb(b, "cvt") ? "cvt" : b;
  }
  var jk =
    z.location.search.indexOf("?gtm_latency=") >= 0 ||
    z.location.search.indexOf("&gtm_latency=") >= 0;
  var kk = { sampleRate: "0.005000", Rk: "", Hn: "0.01" },
    lk = Math.random(),
    mk;
  if (!(mk = jk)) {
    var nk = kk.sampleRate;
    mk = lk < Number(nk);
  }
  var ok = mk,
    pk =
      (ic == null ? void 0 : ic.includes("gtm_debug=d")) ||
      jk ||
      lk >= 1 - Number(kk.Hn);
  var qk = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    rk = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  var sk = function (a, b, c) {
      a.addEventListener && a.addEventListener(b, c, !1);
    },
    tk = function (a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c, !1);
    };
  var uk, vk;
  a: {
    for (var wk = ["CLOSURE_FLAGS"], xk = Aa, yk = 0; yk < wk.length; yk++)
      if (((xk = xk[wk[yk]]), xk == null)) {
        vk = null;
        break a;
      }
    vk = xk;
  }
  var zk = vk && vk[610401301];
  uk = zk != null ? zk : !1;
  function Ak() {
    var a = Aa.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  var Bk,
    Ck = Aa.navigator;
  Bk = Ck ? Ck.userAgentData || null : null;
  function Dk(a) {
    return uk
      ? Bk
        ? Bk.brands.some(function (b) {
            var c;
            return (c = b.brand) && c.indexOf(a) != -1;
          })
        : !1
      : !1;
  }
  function Ek(a) {
    return Ak().indexOf(a) != -1;
  }
  function Fk() {
    return uk ? !!Bk && Bk.brands.length > 0 : !1;
  }
  function Gk() {
    return Fk() ? !1 : Ek("Opera");
  }
  function Hk() {
    return Ek("Firefox") || Ek("FxiOS");
  }
  function Ik() {
    return Fk()
      ? Dk("Chromium")
      : ((Ek("Chrome") || Ek("CriOS")) && !(Fk() ? 0 : Ek("Edge"))) ||
          Ek("Silk");
  }
  var Jk = function (a) {
    Jk[" "](a);
    return a;
  };
  Jk[" "] = function () {};
  var Kk = function (a, b, c, d) {
      for (var e = b, f = c.length; (e = a.indexOf(c, e)) >= 0 && e < d; ) {
        var g = a.charCodeAt(e - 1);
        if (g == 38 || g == 63) {
          var k = a.charCodeAt(e + f);
          if (!k || k == 61 || k == 38 || k == 35) return e;
        }
        e += f + 1;
      }
      return -1;
    },
    Lk = /#|$/,
    Mk = function (a, b) {
      var c = a.search(Lk),
        d = Kk(a, 0, b, c);
      if (d < 0) return null;
      var e = a.indexOf("&", d);
      if (e < 0 || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(
        a.slice(d, e !== -1 ? e : 0).replace(/\+/g, " ")
      );
    },
    Nk = /[?&]($|#)/,
    Ok = function (a, b, c) {
      for (
        var d, e = a.search(Lk), f = 0, g, k = [];
        (g = Kk(a, f, b, e)) >= 0;

      )
        k.push(a.substring(f, g)),
          (f = Math.min(a.indexOf("&", g) + 1 || e, e));
      k.push(a.slice(f));
      d = k.join("").replace(Nk, "$1");
      var m,
        n = c != null ? "=" + encodeURIComponent(String(c)) : "";
      var p = b + n;
      if (p) {
        var q,
          r = d.indexOf("#");
        r < 0 && (r = d.length);
        var t = d.indexOf("?"),
          v;
        t < 0 || t > r ? ((t = r), (v = "")) : (v = d.substring(t + 1, r));
        q = [d.slice(0, t), v, d.slice(r)];
        var u = q[1];
        q[1] = p ? (u ? u + "&" + p : p) : u;
        m = q[0] + (q[1] ? "?" + q[1] : "") + q[2];
      } else m = d;
      return m;
    };
  function Pk() {
    return uk ? !!Bk && !!Bk.platform : !1;
  }
  function Qk() {
    return Ek("iPhone") && !Ek("iPod") && !Ek("iPad");
  }
  function Rk() {
    Qk() || Ek("iPad") || Ek("iPod");
  }
  Gk();
  Fk() || Ek("Trident") || Ek("MSIE");
  Ek("Edge");
  !Ek("Gecko") ||
    (Ak().toLowerCase().indexOf("webkit") != -1 && !Ek("Edge")) ||
    Ek("Trident") ||
    Ek("MSIE") ||
    Ek("Edge");
  Ak().toLowerCase().indexOf("webkit") != -1 && !Ek("Edge") && Ek("Mobile");
  Pk() || Ek("Macintosh");
  Pk() || Ek("Windows");
  (Pk() ? Bk.platform === "Linux" : Ek("Linux")) || Pk() || Ek("CrOS");
  Pk() || Ek("Android");
  Qk();
  Ek("iPad");
  Ek("iPod");
  Rk();
  Ak().toLowerCase().indexOf("kaios");
  var Sk = function (a) {
      try {
        var b;
        if ((b = !!a && a.location.href != null))
          a: {
            try {
              Jk(a.foo);
              b = !0;
              break a;
            } catch (c) {}
            b = !1;
          }
        return b;
      } catch (c) {
        return !1;
      }
    },
    Tk = function (a, b) {
      if (a)
        for (var c in a)
          Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    },
    Uk = function (a) {
      if (z.top == z) return 0;
      if (a === void 0 ? 0 : a) {
        var b = z.location.ancestorOrigins;
        if (b) return b[b.length - 1] == z.location.origin ? 1 : 2;
      }
      return Sk(z.top) ? 1 : 2;
    },
    Vk = function (a) {
      a = a === void 0 ? document : a;
      return a.createElement("img");
    },
    Wk = function () {
      for (var a = z, b = a; a && a != a.parent; )
        (a = a.parent), Sk(a) && (b = a);
      return b;
    };
  function Xk(a) {
    var b;
    b = b === void 0 ? document : b;
    var c;
    return !((c = b.featurePolicy) == null || !c.allowedFeatures().includes(a));
  }
  function Yk() {
    return Xk("join-ad-interest-group") && ab(fc.joinAdInterestGroup);
  }
  function Zk(a, b, c) {
    var d = ni[3] === void 0 ? 1 : ni[3],
      e = 'iframe[data-tagging-id="' + b + '"]',
      f = [];
    try {
      if (d === 1) {
        var g = B.querySelector(e);
        g && (f = [g]);
      } else f = Array.from(B.querySelectorAll(e));
    } catch (r) {}
    var k;
    a: {
      try {
        k = B.querySelectorAll(
          'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]'
        );
        break a;
      } catch (r) {}
      k = void 0;
    }
    var m = k,
      n =
        ((m == null ? void 0 : m.length) || 0) >=
        (ni[2] === void 0 ? 50 : ni[2]),
      p;
    if ((p = f.length >= 1)) {
      var q = Number(f[f.length - 1].dataset.loadTime);
      q !== void 0 && qb() - q < (ni[1] === void 0 ? 6e4 : ni[1])
        ? (Va("TAGGING", 9), (p = !0))
        : (p = !1);
    }
    if (p) return !1;
    if (d === 1)
      if (f.length >= 1) $k(f[0]);
      else {
        if (n) return Va("TAGGING", 10), !1;
      }
    else f.length >= d ? $k(f[0]) : n && $k(m[0]);
    rc(
      a,
      c,
      { allow: "join-ad-interest-group" },
      { taggingId: b, loadTime: qb() }
    );
    return !0;
  }
  function $k(a) {
    try {
      a.parentNode.removeChild(a);
    } catch (b) {}
  }
  function al() {
    return "https://td.doubleclick.net";
  }
  function bl(a, b, c) {
    var d,
      e = a.GooglebQhCsO;
    e || ((e = {}), (a.GooglebQhCsO = e));
    d = e;
    if (d[b]) return !1;
    d[b] = [];
    d[b][0] = c;
    return !0;
  }
  var cl = function (a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      e < 128
        ? (b[c++] = e)
        : (e < 2048
            ? (b[c++] = (e >> 6) | 192)
            : ((e & 64512) == 55296 &&
              d + 1 < a.length &&
              (a.charCodeAt(d + 1) & 64512) == 56320
                ? ((e =
                    65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023)),
                  (b[c++] = (e >> 18) | 240),
                  (b[c++] = ((e >> 12) & 63) | 128))
                : (b[c++] = (e >> 12) | 224),
              (b[c++] = ((e >> 6) & 63) | 128)),
          (b[c++] = (e & 63) | 128));
    }
    return b;
  };
  Hk();
  Qk() || Ek("iPod");
  Ek("iPad");
  !Ek("Android") || Ik() || Hk() || Gk() || Ek("Silk");
  Ik();
  !Ek("Safari") ||
    Ik() ||
    (Fk() ? 0 : Ek("Coast")) ||
    Gk() ||
    (Fk() ? 0 : Ek("Edge")) ||
    (Fk() ? Dk("Microsoft Edge") : Ek("Edg/")) ||
    (Fk() ? Dk("Opera") : Ek("OPR")) ||
    Hk() ||
    Ek("Silk") ||
    Ek("Android") ||
    Rk();
  var dl = {},
    el = null,
    fl = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        e > 255 && ((b[c++] = e & 255), (e >>= 8));
        b[c++] = e;
      }
      var f = 4;
      f === void 0 && (f = 0);
      if (!el) {
        el = {};
        for (
          var g =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                ""
              ),
            k = ["+/=", "+/", "-_=", "-_.", "-_"],
            m = 0;
          m < 5;
          m++
        ) {
          var n = g.concat(k[m].split(""));
          dl[m] = n;
          for (var p = 0; p < n.length; p++) {
            var q = n[p];
            el[q] === void 0 && (el[q] = p);
          }
        }
      }
      for (
        var r = dl[f],
          t = Array(Math.floor(b.length / 3)),
          v = r[64] || "",
          u = 0,
          w = 0;
        u < b.length - 2;
        u += 3
      ) {
        var x = b[u],
          y = b[u + 1],
          A = b[u + 2],
          C = r[x >> 2],
          D = r[((x & 3) << 4) | (y >> 4)],
          E = r[((y & 15) << 2) | (A >> 6)],
          K = r[A & 63];
        t[w++] = "" + C + D + E + K;
      }
      var M = 0,
        U = v;
      switch (b.length - u) {
        case 2:
          (M = b[u + 1]), (U = r[(M & 15) << 2] || v);
        case 1:
          var L = b[u];
          t[w] = "" + r[L >> 2] + r[((L & 3) << 4) | (M >> 4)] + U + v;
      }
      return t.join("");
    };
  function gl(a, b, c, d, e, f) {
    var g = Mk(c, "fmt");
    if (d) {
      var k = Mk(c, "random"),
        m = Mk(c, "label") || "";
      if (!k) return !1;
      var n = fl(
        decodeURIComponent(m.replace(/\+/g, " ")) +
          ":" +
          decodeURIComponent(k.replace(/\+/g, " "))
      );
      if (!bl(a, n, d)) return !1;
    }
    g && Number(g) !== 4 && (c = Ok(c, "rfmt", g));
    var p = Ok(c, "fmt", 4);
    pc(
      p,
      function () {
        a.google_noFurtherRedirects &&
          d &&
          ((a.google_noFurtherRedirects = null), d());
      },
      e,
      f,
      b.getElementsByTagName("script")[0].parentElement || void 0
    );
    return !0;
  }
  var hl = {},
    il = ((hl[1] = {}), (hl[2] = {}), (hl[3] = {}), (hl[4] = {}), hl);
  function jl(a, b, c) {
    var d = kl(c);
    d && (il[b][d] = a);
  }
  function ll(a) {
    switch (a) {
      case "script-src":
      case "script-src-elem":
        return 1;
      case "frame-src":
        return 4;
      case "connect-src":
        return 2;
      case "img-src":
        return 3;
    }
  }
  function kl(a) {
    var b = a;
    a[0] === "/" && (b = z.location.origin + a);
    try {
      var c = new URL(b);
      return c.origin + c.pathname;
    } catch (d) {}
  }
  function ml(a) {
    var b = za.apply(1, arguments);
    Q(57) && pk && (jl(a, 2, b[0]), jl(a, 3, b[0]));
    Bc.apply(null, va(b));
  }
  function nl(a) {
    var b = za.apply(1, arguments);
    Q(57) && pk && jl(a, 2, b[0]);
    return Cc.apply(null, va(b));
  }
  function ol(a) {
    var b = za.apply(1, arguments);
    Q(57) && pk && jl(a, 3, b[0]);
    sc.apply(null, va(b));
  }
  function pl(a) {
    var b = za.apply(1, arguments),
      c = b[0];
    Q(57) && pk && (jl(a, 2, c), jl(a, 3, c));
    return Ec.apply(null, va(b));
  }
  function ql(a) {
    var b = za.apply(1, arguments);
    Q(57) && pk && jl(a, 1, b[0]);
    pc.apply(null, va(b));
  }
  function rl(a) {
    var b = za.apply(1, arguments);
    b[0] && Q(57) && pk && jl(a, 4, b[0]);
    rc.apply(null, va(b));
  }
  function sl(a) {
    var b = za.apply(1, arguments);
    Q(57) && pk && jl(a, 1, b[2]);
    return gl.apply(null, va(b));
  }
  function tl(a) {
    var b = za.apply(1, arguments);
    Q(57) && pk && jl(a, 4, b[0]);
    Zk.apply(null, va(b));
  }
  var ul = /gtag[.\/]js/,
    vl = /gtm[.\/]js/,
    wl = !1;
  function xl(a) {
    if (wl) return "1";
    var b,
      c = (b = a.scriptElement) == null ? void 0 : b.src;
    if (c) {
      if (ul.test(c)) return "3";
      if (vl.test(c)) return "2";
    }
    return "0";
  }
  function yl(a, b) {
    var c = zl();
    c.pending || (c.pending = []);
    eb(c.pending, function (d) {
      return (
        d.target.ctid === a.ctid && d.target.isDestination === a.isDestination
      );
    }) || c.pending.push({ target: a, onLoad: b });
  }
  function Al() {
    var a = z.google_tags_first_party;
    Array.isArray(a) || (a = []);
    for (var b = {}, c = l(a), d = c.next(); !d.done; d = c.next())
      b[d.value] = !0;
    return Object.freeze(b);
  }
  var Bl = function () {
    this.container = {};
    this.destination = {};
    this.canonical = {};
    this.pending = [];
    this.siloed = [];
    this.injectedFirstPartyContainers = {};
    this.injectedFirstPartyContainers = Al();
  };
  function zl() {
    var a = jc("google_tag_data", {}),
      b = a.tidr;
    (b && typeof b === "object") || ((b = new Bl()), (a.tidr = b));
    var c = b;
    c.container || (c.container = {});
    c.destination || (c.destination = {});
    c.canonical || (c.canonical = {});
    c.pending || (c.pending = []);
    c.siloed || (c.siloed = []);
    c.injectedFirstPartyContainers || (c.injectedFirstPartyContainers = Al());
    return c;
  }
  var Cl = {},
    Dl = !1,
    El = void 0,
    Uf = {
      ctid: "GTM-WBVN832",
      canonicalContainerId: "38279324",
      xk: "GTM-WBVN832",
      yk: "GTM-WBVN832",
    };
  Cl.Qe = mb("");
  function Fl() {
    return (
      Cl.Qe &&
      Gl().some(function (a) {
        return a === Uf.ctid;
      })
    );
  }
  function Hl() {
    var a = Il();
    return Dl ? a.map(Jl) : a;
  }
  function Kl() {
    var a = Gl();
    return Dl ? a.map(Jl) : a;
  }
  function Ll() {
    var a = Kl();
    if (Q(126) && !Dl)
      for (var b = l([].concat(va(a))), c = b.next(); !c.done; c = b.next()) {
        var d = Jl(c.value),
          e = zl().destination[d];
        (e && e.state !== 0) || a.push(d);
      }
    return a;
  }
  function Ml() {
    return Nl(Uf.ctid);
  }
  function Ol() {
    return Nl(Uf.canonicalContainerId || "_" + Uf.ctid);
  }
  function Il() {
    return Uf.xk ? Uf.xk.split("|") : [Uf.ctid];
  }
  function Gl() {
    return Uf.yk ? Uf.yk.split("|") : [];
  }
  function Pl() {
    var a = Ql(Rl()),
      b = a && a.parent;
    if (b) return Ql(b);
  }
  function Ql(a) {
    var b = zl();
    return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid];
  }
  function Nl(a) {
    return Dl ? Jl(a) : a;
  }
  function Jl(a) {
    return "siloed_" + a;
  }
  function Sl(a) {
    return Q(126) ? Tl(a) : Dl ? Tl(a) : a;
  }
  function Tl(a) {
    a = String(a);
    return vb(a, "siloed_") ? a.substring(7) : a;
  }
  function Ul() {
    if (uj.H) {
      var a = zl();
      if (a.siloed) {
        for (
          var b = [], c = Il().map(Jl), d = Gl().map(Jl), e = {}, f = 0;
          f < a.siloed.length;
          e = { pg: void 0 }, f++
        )
          (e.pg = a.siloed[f]),
            !Dl &&
            eb(
              e.pg.isDestination ? d : c,
              (function (g) {
                return function (k) {
                  return k === g.pg.ctid;
                };
              })(e)
            )
              ? (Dl = !0)
              : b.push(e.pg);
        a.siloed = b;
      }
    }
  }
  function Vl() {
    var a = zl();
    if (a.pending) {
      for (
        var b, c = [], d = !1, e = Hl(), f = El ? El : Ll(), g = {}, k = 0;
        k < a.pending.length;
        g = { Bf: void 0 }, k++
      )
        (g.Bf = a.pending[k]),
          eb(
            g.Bf.target.isDestination ? f : e,
            (function (m) {
              return function (n) {
                return n === m.Bf.target.ctid;
              };
            })(g)
          )
            ? d || ((b = g.Bf.onLoad), (d = !0))
            : c.push(g.Bf);
      a.pending = c;
      if (b)
        try {
          b(Ol());
        } catch (m) {}
    }
  }
  function Wl() {
    var a = Uf.ctid,
      b = Hl(),
      c = Ll();
    El = c;
    for (
      var d = function (n, p) {
          var q = {
            canonicalContainerId: Uf.canonicalContainerId,
            scriptContainerId: a,
            state: 2,
            containers: b.slice(),
            destinations: c.slice(),
          };
          hc && (q.scriptElement = hc);
          ic && (q.scriptSource = ic);
          if (Pl() === void 0) {
            var r;
            a: {
              if ((q.scriptContainerId || "").indexOf("GTM-") >= 0) {
                var t;
                b: {
                  var v,
                    u = (v = q.scriptElement) == null ? void 0 : v.src;
                  if (u) {
                    for (
                      var w = uj.j,
                        x = Xj(u),
                        y = w ? x.pathname : "" + x.hostname + x.pathname,
                        A = B.scripts,
                        C = "",
                        D = 0;
                      D < A.length;
                      ++D
                    ) {
                      var E = A[D];
                      if (
                        !(
                          E.innerHTML.length === 0 ||
                          (!w &&
                            E.innerHTML.indexOf(
                              q.scriptContainerId || "SHOULD_NOT_BE_SET"
                            ) < 0) ||
                          E.innerHTML.indexOf(y) < 0
                        )
                      ) {
                        if (E.innerHTML.indexOf("(function(w,d,s,l,i)") >= 0) {
                          t = String(D);
                          break b;
                        }
                        C = String(D);
                      }
                    }
                    if (C) {
                      t = C;
                      break b;
                    }
                  }
                  t = void 0;
                }
                var K = t;
                if (K) {
                  wl = !0;
                  r = K;
                  break a;
                }
              }
              var M = [].slice.call(B.scripts);
              r = q.scriptElement ? String(M.indexOf(q.scriptElement)) : "-1";
            }
            q.htmlLoadOrder = r;
            q.loadScriptType = xl(q);
          }
          var U = p ? e.destination : e.container,
            L = U[n];
          L ? (p && L.state === 0 && S(93), Object.assign(L, q)) : (U[n] = q);
        },
        e = zl(),
        f = l(b),
        g = f.next();
      !g.done;
      g = f.next()
    )
      d(g.value, !1);
    for (var k = l(c), m = k.next(); !m.done; m = k.next()) d(m.value, !0);
    e.canonical[Ol()] = {};
    Vl();
  }
  function Xl() {
    var a = Ol();
    return !!zl().canonical[a];
  }
  function Yl(a) {
    return !!zl().container[a];
  }
  function Zl(a) {
    var b = zl().destination[a];
    return !!b && !!b.state;
  }
  function Rl() {
    return { ctid: Ml(), isDestination: Cl.Qe };
  }
  function $l(a, b, c) {
    b.siloed && am({ ctid: a, isDestination: !1 });
    var d = Rl();
    zl().container[a] = { state: 1, context: b, parent: d };
    yl({ ctid: a, isDestination: !1 }, c);
  }
  function am(a) {
    var b = zl();
    (b.siloed = b.siloed || []).push(a);
  }
  function bm() {
    var a = zl().container,
      b;
    for (b in a) if (a.hasOwnProperty(b) && a[b].state === 1) return !0;
    return !1;
  }
  function cm() {
    var a = {};
    ib(zl().destination, function (b, c) {
      c.state === 0 && (a[Tl(b)] = c);
    });
    return a;
  }
  function dm(a) {
    return !!(
      a &&
      a.parent &&
      a.context &&
      a.context.source === 1 &&
      a.parent.ctid.indexOf("GTM-") !== 0
    );
  }
  function em() {
    for (var a = zl(), b = l(Hl()), c = b.next(); !c.done; c = b.next())
      if (a.injectedFirstPartyContainers[c.value]) return !0;
    return !1;
  }
  function fm(a) {
    var b = zl();
    return b.destination[a] ? 1 : b.destination[Jl(a)] ? 2 : 0;
  }
  function gm() {
    var a = jc("google_tag_data", {});
    return (a.ics = a.ics || new hm());
  }
  var hm = function () {
    this.entries = {};
    this.waitPeriodTimedOut =
      this.wasSetLate =
      this.accessedAny =
      this.accessedDefault =
      this.usedImplicit =
      this.usedUpdate =
      this.usedDefault =
      this.usedDeclare =
      this.active =
        !1;
    this.j = [];
  };
  hm.prototype.default = function (a, b, c, d, e, f, g) {
    this.usedDefault ||
      this.usedDeclare ||
      (!this.accessedDefault && !this.accessedAny) ||
      (this.wasSetLate = !0);
    this.usedDefault = this.active = !0;
    Va("TAGGING", 19);
    b == null ? Va("TAGGING", 18) : im(this, a, b === "granted", c, d, e, f, g);
  };
  hm.prototype.waitForUpdate = function (a, b, c) {
    for (var d = 0; d < a.length; d++)
      im(this, a[d], void 0, void 0, "", "", b, c);
  };
  var im = function (a, b, c, d, e, f, g, k) {
    var m = a.entries,
      n = m[b] || {},
      p = n.region,
      q = d && bb(d) ? d.toUpperCase() : void 0;
    e = e.toUpperCase();
    f = f.toUpperCase();
    if (e === "" || q === f || (q === e ? p !== f : !q && !p)) {
      var r = !!(g && g > 0 && n.update === void 0),
        t = {
          region: q,
          declare_region: n.declare_region,
          implicit: n.implicit,
          default: c !== void 0 ? c : n.default,
          declare: n.declare,
          update: n.update,
          quiet: r,
        };
      if (e !== "" || n.default !== !1) m[b] = t;
      r &&
        z.setTimeout(function () {
          m[b] === t &&
            t.quiet &&
            (Va("TAGGING", 2),
            (a.waitPeriodTimedOut = !0),
            a.clearTimeout(b, void 0, k),
            a.notifyListeners());
        }, g);
    }
  };
  h = hm.prototype;
  h.clearTimeout = function (a, b, c) {
    var d = [a],
      e = c.delegatedConsentTypes,
      f;
    for (f in e) e.hasOwnProperty(f) && e[f] === a && d.push(f);
    var g = this.entries[a] || {},
      k = this.getConsentState(a, c);
    if (g.quiet) {
      g.quiet = !1;
      for (var m = l(d), n = m.next(); !n.done; n = m.next()) jm(this, n.value);
    } else if (b !== void 0 && k !== b)
      for (var p = l(d), q = p.next(); !q.done; q = p.next()) jm(this, q.value);
  };
  h.update = function (a, b, c) {
    this.usedDefault ||
      this.usedDeclare ||
      this.usedUpdate ||
      !this.accessedAny ||
      (this.wasSetLate = !0);
    this.usedUpdate = this.active = !0;
    if (b != null) {
      var d = this.getConsentState(a, c),
        e = this.entries;
      (e[a] = e[a] || {}).update = b === "granted";
      this.clearTimeout(a, d, c);
    }
  };
  h.declare = function (a, b, c, d, e) {
    this.usedDeclare = this.active = !0;
    var f = this.entries,
      g = f[a] || {},
      k = g.declare_region,
      m = c && bb(c) ? c.toUpperCase() : void 0;
    d = d.toUpperCase();
    e = e.toUpperCase();
    if (d === "" || m === e || (m === d ? k !== e : !m && !k)) {
      var n = {
        region: g.region,
        declare_region: m,
        declare: b === "granted",
        implicit: g.implicit,
        default: g.default,
        update: g.update,
        quiet: g.quiet,
      };
      if (d !== "" || g.declare !== !1) f[a] = n;
    }
  };
  h.implicit = function (a, b) {
    this.usedImplicit = !0;
    var c = this.entries,
      d = (c[a] = c[a] || {});
    d.implicit !== !1 && (d.implicit = b === "granted");
  };
  h.getConsentState = function (a, b) {
    var c = this.entries,
      d = c[a] || {},
      e = d.update;
    if (e !== void 0) return e ? 1 : 2;
    if (b.usedContainerScopedDefaults) {
      var f = b.containerScopedDefaults[a];
      if (f === 3) return 1;
      if (f === 2) return 2;
    } else if (((e = d.default), e !== void 0)) return e ? 1 : 2;
    if (b == null ? 0 : b.delegatedConsentTypes.hasOwnProperty(a)) {
      var g = b.delegatedConsentTypes[a],
        k = c[g] || {};
      e = k.update;
      if (e !== void 0) return e ? 1 : 2;
      if (b.usedContainerScopedDefaults) {
        var m = b.containerScopedDefaults[g];
        if (m === 3) return 1;
        if (m === 2) return 2;
      } else if (((e = k.default), e !== void 0)) return e ? 1 : 2;
    }
    e = d.declare;
    if (e !== void 0) return e ? 1 : 2;
    e = d.implicit;
    return e !== void 0 ? (e ? 3 : 4) : 0;
  };
  h.addListener = function (a, b) {
    this.j.push({ consentTypes: a, Nd: b });
  };
  var jm = function (a, b) {
    for (var c = 0; c < a.j.length; ++c) {
      var d = a.j[c];
      Array.isArray(d.consentTypes) &&
        d.consentTypes.indexOf(b) !== -1 &&
        (d.zk = !0);
    }
  };
  hm.prototype.notifyListeners = function (a, b) {
    for (var c = 0; c < this.j.length; ++c) {
      var d = this.j[c];
      if (d.zk) {
        d.zk = !1;
        try {
          d.Nd({ consentEventId: a, consentPriorityId: b });
        } catch (e) {}
      }
    }
  };
  var km = !1,
    lm = !1,
    mm = {},
    nm = {
      delegatedConsentTypes: {},
      corePlatformServices: {},
      usedCorePlatformServices: !1,
      selectedAllCorePlatformServices: !1,
      containerScopedDefaults:
        ((mm.ad_storage = 1),
        (mm.analytics_storage = 1),
        (mm.ad_user_data = 1),
        (mm.ad_personalization = 1),
        mm),
      usedContainerScopedDefaults: !1,
    };
  function om(a) {
    var b = gm();
    b.accessedAny = !0;
    return (bb(a) ? [a] : a).every(function (c) {
      switch (b.getConsentState(c, nm)) {
        case 1:
        case 3:
          return !0;
        case 2:
        case 4:
          return !1;
        default:
          return !0;
      }
    });
  }
  function pm(a) {
    var b = gm();
    b.accessedAny = !0;
    return b.getConsentState(a, nm);
  }
  function qm(a) {
    for (var b = {}, c = l(a), d = c.next(); !d.done; d = c.next()) {
      var e = d.value;
      b[e] = nm.corePlatformServices[e] !== !1;
    }
    return b;
  }
  function rm(a) {
    var b = gm();
    b.accessedAny = !0;
    return !(b.entries[a] || {}).quiet;
  }
  function sm() {
    if (!oi(8)) return !1;
    var a = gm();
    a.accessedAny = !0;
    if (a.active) return !0;
    if (!nm.usedContainerScopedDefaults) return !1;
    for (
      var b = l(Object.keys(nm.containerScopedDefaults)), c = b.next();
      !c.done;
      c = b.next()
    )
      if (nm.containerScopedDefaults[c.value] !== 1) return !0;
    return !1;
  }
  function tm(a, b) {
    gm().addListener(a, b);
  }
  function um(a, b) {
    gm().notifyListeners(a, b);
  }
  function vm(a, b) {
    function c() {
      for (var e = 0; e < b.length; e++) if (!rm(b[e])) return !0;
      return !1;
    }
    if (c()) {
      var d = !1;
      tm(b, function (e) {
        d || c() || ((d = !0), a(e));
      });
    } else a({});
  }
  function wm(a, b) {
    function c() {
      for (var k = [], m = 0; m < e.length; m++) {
        var n = e[m];
        om(n) && !f[n] && k.push(n);
      }
      return k;
    }
    function d(k) {
      for (var m = 0; m < k.length; m++) f[k[m]] = !0;
    }
    var e = bb(b) ? [b] : b,
      f = {},
      g = c();
    g.length !== e.length &&
      (d(g),
      tm(e, function (k) {
        function m(q) {
          q.length !== 0 && (d(q), (k.consentTypes = q), a(k));
        }
        var n = c();
        if (n.length !== 0) {
          var p = Object.keys(f).length;
          n.length + p >= e.length
            ? m(n)
            : z.setTimeout(function () {
                m(c());
              }, 500);
        }
      }));
  }
  var xm = {},
    ym = ((xm[0] = 0), (xm[1] = 0), (xm[2] = 0), (xm[3] = 0), xm),
    zm = function (a, b) {
      this.j = a;
      this.consentTypes = b;
    };
  zm.prototype.isConsentGranted = function () {
    switch (this.j) {
      case 0:
        return this.consentTypes.every(function (a) {
          return om(a);
        });
      case 1:
        return this.consentTypes.some(function (a) {
          return om(a);
        });
      default:
        throw Error("consentsRequired had an unknown type");
    }
  };
  var Am = {},
    Bm =
      ((Am[0] = new zm(0, [])),
      (Am[1] = new zm(0, ["ad_storage"])),
      (Am[2] = new zm(0, ["analytics_storage"])),
      (Am[3] = new zm(1, ["ad_storage", "analytics_storage"])),
      Am);
  var Dm = function (a) {
    var b = this;
    this.type = a;
    this.j = [];
    tm(Bm[a].consentTypes, function () {
      Cm(b) || b.flush();
    });
  };
  Dm.prototype.flush = function () {
    for (var a = l(this.j), b = a.next(); !b.done; b = a.next()) {
      var c = b.value;
      c();
    }
    this.j = [];
  };
  var Cm = function (a) {
      return ym[a.type] === 2 && !Bm[a.type].isConsentGranted();
    },
    Em = function (a, b) {
      Cm(a) ? a.j.push(b) : b();
    },
    Fm = new Map();
  function Gm(a) {
    Fm.has(a) || Fm.set(a, new Dm(a));
    return Fm.get(a);
  }
  var Hm = "/td?id=" + Uf.ctid,
    Im = "v t pid dl tdp exp".split(" "),
    Jm = ["mcc"],
    Km = {},
    Lm = {},
    Mm = !1;
  function Nm(a, b, c) {
    Lm[a] = b;
    (c === void 0 || c) && Om(a);
  }
  function Om(a, b) {
    if (Km[a] === void 0 || (b === void 0 ? 0 : b)) Km[a] = !0;
  }
  function Pm(a) {
    a = a === void 0 ? !1 : a;
    var b = Object.keys(Km)
      .filter(function (c) {
        return Km[c] === !0 && Lm[c] !== void 0 && (a || !Jm.includes(c));
      })
      .map(function (c) {
        var d = Lm[c];
        typeof d === "function" && (d = d());
        return d ? "&" + c + "=" + d : "";
      })
      .join("");
    return "" + gk("https://www.googletagmanager.com") + Hm + ("" + b + "&z=0");
  }
  function Qm() {
    Object.keys(Km).forEach(function (a) {
      Im.indexOf(a) < 0 && (Km[a] = !1);
    });
  }
  function Rm(a) {
    a = a === void 0 ? !1 : a;
    if ((!Q(8) || uj.X) && pk && Uf.ctid) {
      if (Q(100)) {
        var b = Gm(3);
        if (Cm(b)) {
          Mm || ((Mm = !0), Em(b, Rm));
          return;
        }
      }
      var c = Pm(a),
        d = { destinationId: Uf.ctid, endpoint: 0 };
      a ? pl(d, c) : ol(d, c);
      Qm();
      Mm = !1;
    }
  }
  var Sm = {};
  function Tm() {
    Object.keys(Km).filter(function (a) {
      return Km[a] && !Im.includes(a);
    }).length > 0 && Rm(!0);
  }
  var Um = fb();
  function Vm() {
    Um = fb();
  }
  function Wm() {
    Nm("v", "3");
    Nm("t", "t");
    Nm("pid", function () {
      return String(Um);
    });
    Q(60) && Nm("exp", vj());
    vc(z, "pagehide", Tm);
    z.setInterval(Vm, 864e5);
  }
  var Xm = [
      "ad_storage",
      "analytics_storage",
      "ad_user_data",
      "ad_personalization",
    ],
    Ym = [
      N.g.qc,
      N.g.ob,
      N.g.Hc,
      N.g.kb,
      N.g.Db,
      N.g.za,
      N.g.xa,
      N.g.Ca,
      N.g.Ga,
      N.g.ab,
    ],
    Zm = !1,
    $m = !1,
    an = {},
    bn = {};
  function cn() {
    !$m &&
      Zm &&
      (Xm.some(function (a) {
        return nm.containerScopedDefaults[a] !== 1;
      }) ||
        dn("mbc"));
    $m = !0;
  }
  function dn(a) {
    pk && (Nm(a, "1"), Rm());
  }
  function en(a, b) {
    if (!an[b] && ((an[b] = !0), bn[b]))
      for (var c = l(Ym), d = c.next(); !d.done; d = c.next())
        if (a.hasOwnProperty(d.value)) {
          dn("erc");
          break;
        }
  }
  function fn(a) {
    Va("HEALTH", a);
  }
  var gn = {
      rm: "eyIwIjoiS0giLCIxIjoiS0gtMTIiLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5jb20ua2giLCI0IjoiIiwiNSI6dHJ1ZSwiNiI6ZmFsc2UsIjciOiJhZF9zdG9yYWdlfGFuYWx5dGljc19zdG9yYWdlfGFkX3VzZXJfZGF0YXxhZF9wZXJzb25hbGl6YXRpb24ifQ",
    },
    hn = {};
  function jn() {
    var a = gn.rm;
    try {
      return JSON.parse(Ta(a));
    } catch (b) {
      return S(123), fn(2), {};
    }
  }
  function kn() {
    return hn["0"] || "";
  }
  function ln() {
    return hn["1"] || "";
  }
  function mn() {
    var a = !1;
    return a;
  }
  function nn() {
    return hn["6"] !== !1;
  }
  function on() {
    var a = "";
    return a;
  }
  function pn() {
    var a = !1;
    return a;
  }
  function qn() {
    var a = "";
    return a;
  }
  function rn(a) {
    return a && a.indexOf("pending:") === 0 ? sn(a.substr(8)) : !1;
  }
  function sn(a) {
    if (a == null || a.length === 0) return !1;
    var b = Number(a),
      c = qb();
    return b < c + 3e5 && b > c - 9e5;
  }
  var tn = !1,
    un = !1,
    vn = !1,
    wn = 0,
    xn = !1,
    yn = [];
  function zn(a) {
    if (wn === 0) xn && yn && (yn.length >= 100 && yn.shift(), yn.push(a));
    else if (An()) {
      var b = jc("google.tagmanager.ta.prodqueue", []);
      b.length >= 50 && b.shift();
      b.push(a);
    }
  }
  function Bn() {
    Cn();
    wc(B, "TAProdDebugSignal", Bn);
  }
  function Cn() {
    if (!un) {
      un = !0;
      Dn();
      var a = yn;
      yn = void 0;
      a == null ||
        a.forEach(function (b) {
          zn(b);
        });
    }
  }
  function Dn() {
    var a = B.documentElement.getAttribute("data-tag-assistant-prod-present");
    sn(a)
      ? (wn = 1)
      : !rn(a) || tn || vn
      ? (wn = 2)
      : ((vn = !0),
        vc(B, "TAProdDebugSignal", Bn, !1),
        z.setTimeout(function () {
          Cn();
          tn = !0;
        }, 200));
  }
  function An() {
    if (!xn) return !1;
    switch (wn) {
      case 1:
      case 0:
        return !0;
      case 2:
        return !1;
      default:
        return !1;
    }
  }
  var En = !1;
  function Fn(a, b) {
    var c = Il(),
      d = Gl();
    if (An()) {
      var e = Gn("INIT");
      e.containerLoadSource = a != null ? a : 0;
      b && (e.parentTargetReference = b);
      e.aliases = c;
      e.destinations = d;
      zn(e);
    }
  }
  function Hn(a) {
    var b, c, d, e;
    b = a.targetId;
    c = a.request;
    d = a.Ua;
    e = a.isBatched;
    if (An()) {
      var f = Gn("GTAG_HIT", { eventId: d.eventId, priorityId: d.priorityId });
      f.target = b;
      f.url = c.url;
      c.postBody && (f.postBody = c.postBody);
      f.parameterEncoding = c.parameterEncoding;
      f.endpoint = c.endpoint;
      e !== void 0 && (f.isBatched = e);
      zn(f);
    }
  }
  function In(a) {
    An() && Hn(a());
  }
  function Gn(a, b) {
    b = b === void 0 ? {} : b;
    b.groupId = Jn;
    var c,
      d = b,
      e = { publicId: Kn };
    d.eventId != null && (e.eventId = d.eventId);
    d.priorityId != null && (e.priorityId = d.priorityId);
    d.eventName && (e.eventName = d.eventName);
    d.groupId && (e.groupId = d.groupId);
    d.tagName && (e.tagName = d.tagName);
    c = { containerProduct: "GTM", key: e, version: "18", messageType: a };
    c.containerProduct = En ? "OGT" : "GTM";
    c.key.targetRef = Ln;
    return c;
  }
  var Kn = "",
    Ln = { ctid: "", isDestination: !1 },
    Jn;
  function Mn(a) {
    var b = Uf.ctid,
      c = Fl(),
      d = Q(110);
    d && ((wn = 0), (xn = !0), Dn());
    d && ((Jn = a), (Kn = b), (En = gj), (Ln = { ctid: b, isDestination: c }));
  }
  var Nn = [N.g.N, N.g.R, N.g.O, N.g.ra],
    On,
    Pn;
  function Qn(a) {
    for (
      var b = a[N.g.sb], c = Array.isArray(b) ? b : [b], d = { pf: 0 };
      d.pf < c.length;
      d = { pf: d.pf }, ++d.pf
    )
      ib(
        a,
        (function (e) {
          return function (f, g) {
            if (f !== N.g.sb) {
              var k = c[e.pf],
                m = kn(),
                n = ln();
              lm = !0;
              km && Va("TAGGING", 20);
              gm().declare(f, g, k, m, n);
            }
          };
        })(d)
      );
  }
  function Rn(a) {
    cn();
    !Pn && On && dn("crc");
    Pn = !0;
    var b = a[N.g.sb];
    b && S(40);
    var c = a[N.g.ae];
    c && S(41);
    for (
      var d = Array.isArray(b) ? b : [b], e = { qf: 0 };
      e.qf < d.length;
      e = { qf: e.qf }, ++e.qf
    )
      ib(
        a,
        (function (f) {
          return function (g, k) {
            if (g !== N.g.sb && g !== N.g.ae) {
              var m = d[f.qf],
                n = Number(c),
                p = kn(),
                q = ln();
              n = n === void 0 ? 0 : n;
              km = !0;
              lm && Va("TAGGING", 20);
              gm().default(g, k, m, p, q, n, nm);
            }
          };
        })(e)
      );
  }
  function Sn(a) {
    nm.usedContainerScopedDefaults = !0;
    var b = a[N.g.sb];
    if (b) {
      var c = Array.isArray(b) ? b : [b];
      if (!c.includes(ln()) && !c.includes(kn())) return;
    }
    ib(a, function (d, e) {
      switch (d) {
        case "ad_storage":
        case "analytics_storage":
        case "ad_user_data":
        case "ad_personalization":
          break;
        default:
          return;
      }
      nm.usedContainerScopedDefaults = !0;
      nm.containerScopedDefaults[d] = e === "granted" ? 3 : 2;
    });
  }
  function Tn(a, b) {
    cn();
    On = !0;
    ib(a, function (c, d) {
      km = !0;
      lm && Va("TAGGING", 20);
      gm().update(c, d, nm);
    });
    um(b.eventId, b.priorityId);
  }
  function Un(a) {
    a.hasOwnProperty("all") &&
      ((nm.selectedAllCorePlatformServices = !0),
      ib(Sh, function (b) {
        nm.corePlatformServices[b] = a.all === "granted";
        nm.usedCorePlatformServices = !0;
      }));
    ib(a, function (b, c) {
      b !== "all" &&
        ((nm.corePlatformServices[b] = c === "granted"),
        (nm.usedCorePlatformServices = !0));
    });
  }
  function V(a) {
    Array.isArray(a) || (a = [a]);
    return a.every(function (b) {
      return om(b);
    });
  }
  function Vn(a, b) {
    tm(a, b);
  }
  function Wn(a, b) {
    wm(a, b);
  }
  function Xn(a, b) {
    vm(a, b);
  }
  function Yn() {
    var a = [N.g.N, N.g.ra, N.g.O];
    gm().waitForUpdate(a, 500, nm);
  }
  function Zn(a) {
    for (var b = l(a), c = b.next(); !c.done; c = b.next()) {
      var d = c.value;
      gm().clearTimeout(d, void 0, nm);
    }
    um();
  }
  function $n() {
    if (!kj)
      for (var a = nn() ? zj(uj.fb) : zj(uj.uc), b = 0; b < Nn.length; b++) {
        var c = Nn[b],
          d = c,
          e = a[c] ? "granted" : "denied";
        gm().implicit(d, e);
      }
  }
  var ao = !1,
    bo = [];
  function co() {
    if (!ao) {
      ao = !0;
      for (var a = bo.length - 1; a >= 0; a--) bo[a]();
      bo = [];
    }
  }
  var eo = (z.google_tag_manager = z.google_tag_manager || {});
  function fo(a, b) {
    return (eo[a] = eo[a] || b());
  }
  function go() {
    var a = Ml(),
      b = ho;
    eo[a] = eo[a] || b;
  }
  function io() {
    var a = aj.Mb;
    return (eo[a] = eo[a] || {});
  }
  function jo() {
    var a = eo.sequence || 1;
    eo.sequence = a + 1;
    return a;
  }
  var ko = {
      Zj: "service_worker_endpoint",
      Bh: "shared_user_id",
      Ch: "shared_user_id_requested",
      Ve: "shared_user_id_source",
      Kf: "cookie_deprecation_label",
    },
    lo;
  function mo(a) {
    if (!lo) {
      lo = {};
      for (var b = l(Object.keys(ko)), c = b.next(); !c.done; c = b.next())
        lo[ko[c.value]] = !0;
    }
    return !!lo[a];
  }
  function no(a, b) {
    b = b === void 0 ? !1 : b;
    if (mo(a)) {
      var c,
        d,
        e =
          (d = (c = jc("google_tag_data", {})).xcd) != null ? d : (c.xcd = {});
      if (e[a]) return e[a];
      if (b) {
        var f = void 0,
          g = 1,
          k = {},
          m = {
            set: function (n) {
              f = n;
              m.notify();
            },
            get: function () {
              return f;
            },
            subscribe: function (n) {
              k[String(g)] = n;
              return g++;
            },
            unsubscribe: function (n) {
              var p = String(n);
              return k.hasOwnProperty(p) ? (delete k[p], !0) : !1;
            },
            notify: function () {
              for (
                var n = l(Object.keys(k)), p = n.next();
                !p.done;
                p = n.next()
              ) {
                var q = p.value;
                try {
                  k[q](a, f);
                } catch (r) {}
              }
            },
          };
        return (e[a] = m);
      }
    }
  }
  function oo(a, b) {
    var c = no(a, !0);
    c && c.set(b);
  }
  function po(a) {
    var b;
    return (b = no(a)) == null ? void 0 : b.get();
  }
  function qo(a, b) {
    if (typeof b === "function") {
      var c;
      return (c = no(a, !0)) == null ? void 0 : c.subscribe(b);
    }
  }
  function ro(a, b) {
    var c = no(a);
    return c ? c.unsubscribe(b) : !1;
  }
  function so() {
    if (eo.pscdl !== void 0) po(ko.Kf) === void 0 && oo(ko.Kf, eo.pscdl);
    else {
      var a = function (c) {
          eo.pscdl = c;
          oo(ko.Kf, c);
        },
        b = function () {
          a("error");
        };
      try {
        fc.cookieDeprecationLabel
          ? (a("pending"),
            fc.cookieDeprecationLabel.getValue().then(a).catch(b))
          : a("noapi");
      } catch (c) {
        b(c);
      }
    }
  }
  function to(a, b) {
    b &&
      ib(b, function (c, d) {
        typeof d !== "object" && d !== void 0 && (a["1p." + c] = String(d));
      });
  }
  var uo = {},
    vo =
      ((uo[N.g.sa] = 157),
      (uo[N.g.qc] = 158),
      (uo[N.g.ob] = 159),
      (uo[N.g.da] = 160),
      (uo[N.g.Ec] = 161),
      (uo[N.g.hd] = 162),
      (uo[N.g.yb] = 163),
      (uo[N.g.Ca] = 164),
      (uo[N.g.Ga] = 166),
      (uo[N.g.Pb] = 167),
      (uo[N.g.ab] = 168),
      (uo[N.g.Oa] = 169),
      (uo[N.g.Ha] = 165),
      uo),
    wo = {},
    xo =
      ((wo[N.g.sa] = 9),
      (wo[N.g.qc] = 12),
      (wo[N.g.ob] = 12),
      (wo[N.g.da] = 13),
      (wo[N.g.Ec] = 14),
      (wo[N.g.hd] = 15),
      (wo[N.g.yb] = 10),
      (wo[N.g.Ca] = 10),
      (wo[N.g.Ga] = 10),
      (wo[N.g.Pb] = 10),
      (wo[N.g.ab] = 10),
      (wo[N.g.Oa] = 10),
      (wo[N.g.Ha] = 11),
      wo);
  function yo(a) {
    for (
      var b = Object.keys(a), c = l(Object.keys(vo)), d = c.next();
      !d.done;
      d = c.next()
    ) {
      var e = d.value;
      b.includes(e) && (S(vo[e]), Q(74) && (nj[xo[e]] = !0));
    }
  }
  var zo = /[A-Z]+/,
    Ao = /\s/;
  function Bo(a, b) {
    if (bb(a)) {
      a = ob(a);
      var c = a.indexOf("-");
      if (!(c < 0)) {
        var d = a.substring(0, c);
        if (zo.test(d)) {
          var e = a.substring(c + 1),
            f;
          if (b) {
            var g = function (n) {
              var p = n.indexOf("/");
              return p < 0 ? [n] : [n.substring(0, p), n.substring(p + 1)];
            };
            f = g(e);
            if (d === "DC" && f.length === 2) {
              var k = g(f[1]);
              k.length === 2 && ((f[1] = k[0]), f.push(k[1]));
            }
          } else {
            f = e.split("/");
            for (var m = 0; m < f.length; m++)
              if (!f[m] || (Ao.test(f[m]) && (d !== "AW" || m !== 1))) return;
          }
          return { id: a, prefix: d, destinationId: d + "-" + f[0], ids: f };
        }
      }
    }
  }
  function Co(a, b) {
    for (var c = {}, d = 0; d < a.length; ++d) {
      var e = Bo(a[d], b);
      e && (c[e.id] = e);
    }
    Do(c);
    var f = [];
    ib(c, function (g, k) {
      f.push(k);
    });
    return f;
  }
  function Do(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        d.prefix === "AW" && d.ids[Eo[2]] && b.push(d.destinationId);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var Fo = {},
    Eo =
      ((Fo[0] = 0),
      (Fo[1] = 0),
      (Fo[2] = 1),
      (Fo[3] = 0),
      (Fo[4] = 1),
      (Fo[5] = 2),
      (Fo[6] = 0),
      (Fo[7] = 0),
      (Fo[8] = 0),
      Fo);
  var Go = Number("") || 500,
    Ho = {},
    Io = {},
    Jo = { initialized: 11, complete: 12, interactive: 13 },
    Ko = {},
    Lo = Object.freeze(((Ko[N.g.Pa] = !0), Ko)),
    Mo = void 0;
  function No(a, b) {
    if (b.length && pk) {
      var c;
      (c = Ho)[a] != null || (c[a] = []);
      Io[a] != null || (Io[a] = []);
      var d = b.filter(function (e) {
        return !Io[a].includes(e);
      });
      Ho[a].push.apply(Ho[a], va(d));
      Io[a].push.apply(Io[a], va(d));
      !Mo &&
        d.length > 0 &&
        (Om("tdc", !0),
        (Mo = z.setTimeout(function () {
          Rm();
          Ho = {};
          Mo = void 0;
        }, Go)));
    }
  }
  function Oo(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function Po(a, b, c, d) {
    c = c === void 0 ? {} : c;
    d = d === void 0 ? "" : d;
    if (a === b) return [];
    var e = function (r, t) {
        var v;
        Uc(t) === "object" ? (v = t[r]) : Uc(t) === "array" && (v = t[r]);
        return v === void 0 ? Lo[r] : v;
      },
      f = Oo(a, b),
      g;
    for (g in f)
      if (f.hasOwnProperty(g)) {
        var k = (d ? d + "." : "") + g,
          m = e(g, a),
          n = e(g, b),
          p = Uc(m) === "object" || Uc(m) === "array",
          q = Uc(n) === "object" || Uc(n) === "array";
        if (p && q) Po(m, n, c, k);
        else if (p || q || m !== n) c[k] = !0;
      }
    return Object.keys(c);
  }
  function Qo() {
    Nm(
      "tdc",
      function () {
        Mo && (z.clearTimeout(Mo), (Mo = void 0));
        var a = [],
          b;
        for (b in Ho) Ho.hasOwnProperty(b) && a.push(b + "*" + Ho[b].join("."));
        return a.length ? a.join("!") : void 0;
      },
      !1
    );
  }
  var Ro = function (a, b, c, d, e, f, g, k, m, n, p) {
      this.eventId = a;
      this.priorityId = b;
      this.j = c;
      this.P = d;
      this.H = e;
      this.K = f;
      this.C = g;
      this.eventMetadata = k;
      this.onSuccess = m;
      this.onFailure = n;
      this.isGtmEvent = p;
    },
    So = function (a, b) {
      var c = [];
      switch (b) {
        case 3:
          c.push(a.j);
          c.push(a.P);
          c.push(a.H);
          c.push(a.K);
          c.push(a.C);
          break;
        case 2:
          c.push(a.j);
          break;
        case 1:
          c.push(a.P);
          c.push(a.H);
          c.push(a.K);
          c.push(a.C);
          break;
        case 4:
          c.push(a.j), c.push(a.P), c.push(a.H), c.push(a.K);
      }
      return c;
    },
    T = function (a, b, c, d) {
      for (
        var e = l(So(a, d === void 0 ? 3 : d)), f = e.next();
        !f.done;
        f = e.next()
      ) {
        var g = f.value;
        if (g[b] !== void 0) return g[b];
      }
      return c;
    },
    To = function (a) {
      for (
        var b = {}, c = So(a, 4), d = l(c), e = d.next();
        !e.done;
        e = d.next()
      )
        for (
          var f = Object.keys(e.value), g = l(f), k = g.next();
          !k.done;
          k = g.next()
        )
          b[k.value] = 1;
      return Object.keys(b);
    },
    Uo = function (a, b, c) {
      function d(n) {
        Wc(n) &&
          ib(n, function (p, q) {
            f = !0;
            e[p] = q;
          });
      }
      var e = {},
        f = !1,
        g = So(a, c === void 0 ? 3 : c);
      g.reverse();
      for (var k = l(g), m = k.next(); !m.done; m = k.next()) d(m.value[b]);
      return f ? e : void 0;
    },
    Vo = function (a) {
      for (
        var b = [N.g.nd, N.g.jd, N.g.kd, N.g.ld, N.g.md, N.g.od, N.g.pd],
          c = So(a, 3),
          d = l(c),
          e = d.next();
        !e.done;
        e = d.next()
      ) {
        for (
          var f = e.value, g = {}, k = !1, m = l(b), n = m.next();
          !n.done;
          n = m.next()
        ) {
          var p = n.value;
          f[p] !== void 0 && ((g[p] = f[p]), (k = !0));
        }
        var q = k ? g : void 0;
        if (q) return q;
      }
      return {};
    },
    Wo = function (a, b) {
      this.eventId = a;
      this.priorityId = b;
      this.C = {};
      this.P = {};
      this.j = {};
      this.H = {};
      this.X = {};
      this.K = {};
      this.eventMetadata = {};
      this.isGtmEvent = !1;
      this.onSuccess = function () {};
      this.onFailure = function () {};
    },
    Xo = function (a, b) {
      a.C = b;
      return a;
    },
    Yo = function (a, b) {
      a.P = b;
      return a;
    },
    Zo = function (a, b) {
      a.j = b;
      return a;
    },
    $o = function (a, b) {
      a.H = b;
      return a;
    },
    ap = function (a, b) {
      a.X = b;
      return a;
    },
    bp = function (a, b) {
      a.K = b;
      return a;
    },
    cp = function (a, b) {
      a.eventMetadata = b || {};
      return a;
    },
    dp = function (a, b) {
      a.onSuccess = b;
      return a;
    },
    ep = function (a, b) {
      a.onFailure = b;
      return a;
    },
    fp = function (a, b) {
      a.isGtmEvent = b;
      return a;
    },
    gp = function (a) {
      return new Ro(
        a.eventId,
        a.priorityId,
        a.C,
        a.P,
        a.j,
        a.H,
        a.K,
        a.eventMetadata,
        a.onSuccess,
        a.onFailure,
        a.isGtmEvent
      );
    };
  var hp = { Qk: Number("5"), wo: Number("") },
    ip = [],
    jp = !1;
  function kp(a) {
    ip.push(a);
  }
  var lp = "?id=" + Uf.ctid,
    mp = void 0,
    np = {},
    op = void 0,
    pp = new (function () {
      var a = 5;
      hp.Qk > 0 && (a = hp.Qk);
      this.C = a;
      this.j = 0;
      this.H = [];
    })(),
    rp = 1e3;
  function sp(a, b) {
    var c = mp;
    if (c === void 0)
      if (b) c = jo();
      else return "";
    for (
      var d = [gk("https://www.googletagmanager.com"), "/a", lp],
        e = l(ip),
        f = e.next();
      !f.done;
      f = e.next()
    )
      for (
        var g = f.value, k = g({ eventId: c, Zc: !!a }), m = l(k), n = m.next();
        !n.done;
        n = m.next()
      ) {
        var p = l(n.value),
          q = p.next().value,
          r = p.next().value;
        d.push("&" + q + "=" + r);
      }
    d.push("&z=0");
    return d.join("");
  }
  function tp() {
    if (!Q(8) || uj.X)
      if ((op && (z.clearTimeout(op), (op = void 0)), mp !== void 0 && up)) {
        if (Q(100)) {
          var a = Gm(3);
          if (Cm(a)) {
            jp || ((jp = !0), Em(a, tp));
            return;
          }
        }
        var b;
        (b = np[mp]) || (b = pp.j < pp.C ? !1 : qb() - pp.H[pp.j % pp.C] < 1e3);
        if (b || rp-- <= 0) S(1), (np[mp] = !0);
        else {
          var c = pp.j++ % pp.C;
          pp.H[c] = qb();
          var d = sp(!0);
          tc(d);
          jp = up = !1;
        }
      }
  }
  function vp() {
    if (ok && (!Q(8) || uj.X)) {
      var a = sp(!0, !0);
      tc(a);
    }
  }
  var up = !1;
  function wp(a) {
    np[a] ||
      (a !== mp && (tp(), (mp = a)),
      (up = !0),
      op || (op = z.setTimeout(tp, 500)),
      sp().length >= 2022 && tp());
  }
  var xp = fb();
  function yp() {
    xp = fb();
  }
  function zp() {
    return [
      ["v", "3"],
      ["t", "t"],
      ["pid", String(xp)],
    ];
  }
  var Ap = {};
  function Bp(a, b, c) {
    ok && a !== void 0 && ((Ap[a] = Ap[a] || []), Ap[a].push(c + b), wp(a));
  }
  function Cp(a) {
    var b = a.eventId,
      c = a.Zc,
      d = [],
      e = Ap[b] || [];
    e.length && d.push(["epr", e.join(".")]);
    c && delete Ap[b];
    return d;
  }
  function Dp(a, b, c) {
    var d = Bo(Nl(a), !0);
    d && Ep.register(d, b, c);
  }
  function Fp(a, b, c, d) {
    var e = Bo(c, d.isGtmEvent);
    e && (fj && (d.deferrable = !0), Ep.push("event", [b, a], e, d));
  }
  function Gp(a, b, c, d) {
    var e = Bo(c, d.isGtmEvent);
    e && Ep.push("get", [a, b], e, d);
  }
  function Hp(a) {
    var b = Bo(Nl(a), !0),
      c;
    b ? (c = Ip(Ep, b).j) : (c = {});
    return c;
  }
  function Jp(a, b) {
    var c = Bo(Nl(a), !0);
    if (c) {
      var d = Ep,
        e = Xc(b, null);
      Xc(Ip(d, c).j, e);
      Ip(d, c).j = e;
    }
  }
  var Kp = function () {
      this.P = {};
      this.j = {};
      this.C = {};
      this.X = null;
      this.K = {};
      this.H = !1;
      this.status = 1;
    },
    Lp = function (a, b, c, d) {
      this.C = qb();
      this.j = b;
      this.args = c;
      this.messageContext = d;
      this.type = a;
    },
    Mp = function () {
      this.destinations = {};
      this.j = {};
      this.commands = [];
    },
    Ip = function (a, b) {
      var c = b.destinationId;
      Q(126) && !Dl && (c = Sl(c));
      return (a.destinations[c] = a.destinations[c] || new Kp());
    },
    Np = function (a, b, c, d) {
      if (d.j) {
        var e = Ip(a, d.j),
          f = e.X;
        if (f) {
          var g = d.j.id;
          Q(126) && !Dl && (g = Sl(g));
          var k = Xc(c, null),
            m = Xc(e.P[g], null),
            n = Xc(e.K, null),
            p = Xc(e.j, null),
            q = Xc(a.j, null),
            r = {};
          if (ok)
            try {
              r = Xc(Bj, null);
            } catch (x) {
              S(72);
            }
          var t = d.j.prefix,
            v = function (x) {
              Bp(d.messageContext.eventId, t, x);
            },
            u = gp(
              fp(
                ep(
                  dp(
                    cp(
                      ap(
                        $o(
                          bp(
                            Zo(
                              Yo(
                                Xo(
                                  new Wo(
                                    d.messageContext.eventId,
                                    d.messageContext.priorityId
                                  ),
                                  k
                                ),
                                m
                              ),
                              n
                            ),
                            p
                          ),
                          q
                        ),
                        r
                      ),
                      d.messageContext.eventMetadata
                    ),
                    function () {
                      if (v) {
                        var x = v;
                        v = void 0;
                        x("2");
                        if (d.messageContext.onSuccess)
                          d.messageContext.onSuccess();
                      }
                    }
                  ),
                  function () {
                    if (v) {
                      var x = v;
                      v = void 0;
                      x("3");
                      if (d.messageContext.onFailure)
                        d.messageContext.onFailure();
                    }
                  }
                ),
                !!d.messageContext.isGtmEvent
              )
            ),
            w = function () {
              try {
                Bp(d.messageContext.eventId, t, "1");
                var x = d.type,
                  y = d.j.id;
                if (pk && x === "config") {
                  var A,
                    C = (A = Bo(y)) == null ? void 0 : A.ids;
                  if (!(C && C.length > 1)) {
                    var D,
                      E = jc("google_tag_data", {});
                    E.td || (E.td = {});
                    D = E.td;
                    var K = Xc(u.K);
                    Xc(u.j, K);
                    var M = [],
                      U;
                    for (U in D)
                      D.hasOwnProperty(U) && Po(D[U], K).length && M.push(U);
                    M.length &&
                      (No(y, M), Va("TAGGING", Jo[B.readyState] || 14));
                    D[y] = K;
                  }
                }
                f(d.j.id, b, d.C, u);
              } catch (L) {
                Bp(d.messageContext.eventId, t, "4");
              }
            };
          b === "gtag.get" ? w() : Q(100) ? Em(e.oa, w) : w();
        }
      }
    };
  Mp.prototype.register = function (a, b, c) {
    var d = Ip(this, a);
    d.status !== 3 &&
      ((d.X = b), (d.status = 3), Q(100) && (d.oa = Gm(c)), this.flush());
  };
  Mp.prototype.push = function (a, b, c, d) {
    c !== void 0 &&
      (Ip(this, c).status === 1 &&
        ((Ip(this, c).status = 2), this.push("require", [{}], c, {})),
      Ip(this, c).H && (d.deferrable = !1));
    this.commands.push(new Lp(a, c, b, d));
    d.deferrable || this.flush();
  };
  Mp.prototype.flush = function (a) {
    for (
      var b = this, c = [], d = !1, e = {};
      this.commands.length;
      e = { Wb: void 0, sg: void 0 }
    ) {
      var f = this.commands[0],
        g = f.j;
      if (f.messageContext.deferrable)
        !g || Ip(this, g).H
          ? ((f.messageContext.deferrable = !1), this.commands.push(f))
          : c.push(f),
          this.commands.shift();
      else {
        switch (f.type) {
          case "require":
            if (Ip(this, g).status !== 3 && !a) {
              this.commands.push.apply(this.commands, c);
              return;
            }
            break;
          case "set":
            var k = f.args[0];
            ib(k, function (v, u) {
              Xc(yb(v, u), b.j);
            });
            yo(k);
            break;
          case "config":
            var m = Ip(this, g);
            e.Wb = {};
            ib(
              f.args[0],
              (function (v) {
                return function (u, w) {
                  Xc(yb(u, w), v.Wb);
                };
              })(e)
            );
            var n = !!e.Wb[N.g.sc];
            delete e.Wb[N.g.sc];
            var p = g.destinationId === g.id;
            n || (p ? (m.K = {}) : (m.P[g.id] = {}));
            (m.H && n) || Np(this, N.g.ba, e.Wb, f);
            m.H = !0;
            p ? Xc(e.Wb, m.K) : (Xc(e.Wb, m.P[g.id]), S(70));
            d = !0;
            en(e.Wb, g.id);
            Zm = !0;
            yo(e.Wb);
            break;
          case "event":
            e.sg = {};
            ib(
              f.args[0],
              (function (v) {
                return function (u, w) {
                  Xc(yb(u, w), v.sg);
                };
              })(e)
            );
            Np(this, f.args[1], e.sg, f);
            var q = void 0;
            !f.j ||
              ((q = f.messageContext.eventMetadata) == null ? 0 : q.em_event) ||
              (bn[f.j.id] = !0);
            Zm = !0;
            yo(e.sg);
            break;
          case "get":
            var r = {},
              t = ((r[N.g.Ab] = f.args[0]), (r[N.g.Qb] = f.args[1]), r);
            Np(this, N.g.Za, t, f);
            Zm = !0;
        }
        this.commands.shift();
        Op(this, f);
      }
    }
    this.commands.push.apply(this.commands, c);
    d && this.flush();
  };
  var Op = function (a, b) {
      if (b.type !== "require")
        if (b.j)
          for (var c = Ip(a, b.j).C[b.type] || [], d = 0; d < c.length; d++)
            c[d]();
        else
          for (var e in a.destinations)
            if (a.destinations.hasOwnProperty(e)) {
              var f = a.destinations[e];
              if (f && f.C)
                for (var g = f.C[b.type] || [], k = 0; k < g.length; k++)
                  g[k]();
            }
    },
    Ep = new Mp();
  function Pp(a, b, c, d) {
    d = d === void 0 ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = Vk(a.document);
    if (c) {
      var f = function () {
        if (c) {
          var g = a.google_image_requests,
            k = cc(g, e);
          k >= 0 && Array.prototype.splice.call(g, k, 1);
        }
        tk(e, "load", f);
        tk(e, "error", f);
      };
      sk(e, "load", f);
      sk(e, "error", f);
    }
    d && (e.attributionSrc = "");
    e.src = b;
    a.google_image_requests.push(e);
  }
  var Rp = function (a) {
      var b;
      b = b === void 0 ? !1 : b;
      var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
      Tk(a, function (d, e) {
        if (d || d === 0) c += "&" + e + "=" + encodeURIComponent("" + d);
      });
      Qp(c, b);
    },
    Qp = function (a, b) {
      var c = window,
        d;
      b = b === void 0 ? !1 : b;
      d = d === void 0 ? !1 : d;
      if (c.fetch) {
        var e = {
          keepalive: !0,
          credentials: "include",
          redirect: "follow",
          method: "get",
          mode: "no-cors",
        };
        d &&
          ((e.mode = "cors"),
          "setAttributionReporting" in XMLHttpRequest.prototype
            ? (e.attributionReporting = {
                eventSourceEligible: "true",
                triggerEligible: "false",
              })
            : (e.headers = {
                "Attribution-Reporting-Eligible": "event-source",
              }));
        c.fetch(a, e);
      } else Pp(c, a, b === void 0 ? !1 : b, d === void 0 ? !1 : d);
    };
  var Sp = function () {
    this.P = this.P;
    this.C = this.C;
  };
  Sp.prototype.P = !1;
  Sp.prototype.dispose = function () {
    this.P || ((this.P = !0), this.oa());
  };
  Sp.prototype[Symbol.dispose] = function () {
    this.dispose();
  };
  Sp.prototype.addOnDisposeCallback = function (a, b) {
    this.P
      ? b !== void 0
        ? a.call(b)
        : a()
      : (this.C || (this.C = []), b && (a = a.bind(b)), this.C.push(a));
  };
  Sp.prototype.oa = function () {
    if (this.C) for (; this.C.length; ) this.C.shift()();
  };
  function Tp(a) {
    a.addtlConsent !== void 0 &&
      typeof a.addtlConsent !== "string" &&
      (a.addtlConsent = void 0);
    a.gdprApplies !== void 0 &&
      typeof a.gdprApplies !== "boolean" &&
      (a.gdprApplies = void 0);
    return (a.tcString !== void 0 && typeof a.tcString !== "string") ||
      (a.listenerId !== void 0 && typeof a.listenerId !== "number")
      ? 2
      : a.cmpStatus && a.cmpStatus !== "error"
      ? 0
      : 3;
  }
  var Up = function (a, b) {
    b = b === void 0 ? {} : b;
    Sp.call(this);
    this.j = null;
    this.X = {};
    this.lg = 0;
    this.K = null;
    this.H = a;
    var c;
    this.uc = (c = b.Bn) != null ? c : 500;
    var d;
    this.fb = (d = b.ko) != null ? d : !1;
  };
  ta(Up, Sp);
  Up.prototype.oa = function () {
    this.X = {};
    this.K && (tk(this.H, "message", this.K), delete this.K);
    delete this.X;
    delete this.H;
    delete this.j;
    Sp.prototype.oa.call(this);
  };
  var Wp = function (a) {
    return typeof a.H.__tcfapi === "function" || Vp(a) != null;
  };
  Up.prototype.addEventListener = function (a) {
    var b = this,
      c = { internalBlockOnErrors: this.fb },
      d = rk(function () {
        return a(c);
      }),
      e = 0;
    this.uc !== -1 &&
      (e = setTimeout(function () {
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d();
      }, this.uc));
    var f = function (g, k) {
      clearTimeout(e);
      g
        ? ((c = g),
          (c.internalErrorState = Tp(c)),
          (c.internalBlockOnErrors = b.fb),
          (k && c.internalErrorState === 0) ||
            ((c.tcString = "tcunavailable"), k || (c.internalErrorState = 3)))
        : ((c.tcString = "tcunavailable"), (c.internalErrorState = 3));
      a(c);
    };
    try {
      Xp(this, "addEventListener", f);
    } catch (g) {
      (c.tcString = "tcunavailable"),
        (c.internalErrorState = 3),
        e && (clearTimeout(e), (e = 0)),
        d();
    }
  };
  Up.prototype.removeEventListener = function (a) {
    a && a.listenerId && Xp(this, "removeEventListener", null, a.listenerId);
  };
  var Zp = function (a, b, c) {
      var d;
      d = d === void 0 ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (f !== void 0) {
            e = f[d === void 0 ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var g = e;
      if (g === 0) return !1;
      var k = c;
      c === 2
        ? ((k = 0), g === 2 && (k = 1))
        : c === 3 && ((k = 1), g === 1 && (k = 0));
      var m;
      if (k === 0)
        if (a.purpose && a.vendor) {
          var n = Yp(a.vendor.consents, d === void 0 ? "755" : d);
          m =
            n && b === "1" && a.purposeOneTreatment && a.publisherCC === "CH"
              ? !0
              : n && Yp(a.purpose.consents, b);
        } else m = !0;
      else
        m =
          k === 1
            ? a.purpose && a.vendor
              ? Yp(a.purpose.legitimateInterests, b) &&
                Yp(a.vendor.legitimateInterests, d === void 0 ? "755" : d)
              : !0
            : !0;
      return m;
    },
    Yp = function (a, b) {
      return !(!a || !a[b]);
    },
    Xp = function (a, b, c, d) {
      c || (c = function () {});
      var e = a.H;
      if (typeof e.__tcfapi === "function") {
        var f = e.__tcfapi;
        f(b, 2, c, d);
      } else if (Vp(a)) {
        $p(a);
        var g = ++a.lg;
        a.X[g] = c;
        if (a.j) {
          var k = {};
          a.j.postMessage(
            ((k.__tcfapiCall = {
              command: b,
              version: 2,
              callId: g,
              parameter: d,
            }),
            k),
            "*"
          );
        }
      } else c({}, !1);
    },
    Vp = function (a) {
      if (a.j) return a.j;
      var b;
      a: {
        for (var c = a.H, d = 0; d < 50; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (k) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var g = c.parent;
              if (g && g != c) {
                f = g;
                break b;
              }
            } catch (k) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.j = b;
      return a.j;
    },
    $p = function (a) {
      if (!a.K) {
        var b = function (c) {
          try {
            var d;
            d = (typeof c.data === "string" ? JSON.parse(c.data) : c.data)
              .__tcfapiReturn;
            a.X[d.callId](d.returnValue, d.success);
          } catch (e) {}
        };
        a.K = b;
        sk(a.H, "message", b);
      }
    },
    aq = function (a) {
      if (a.gdprApplies === !1) return !0;
      a.internalErrorState === void 0 && (a.internalErrorState = Tp(a));
      return a.cmpStatus === "error" || a.internalErrorState !== 0
        ? a.internalBlockOnErrors
          ? (Rp({ e: String(a.internalErrorState) }), !1)
          : !0
        : a.cmpStatus !== "loaded" ||
          (a.eventStatus !== "tcloaded" &&
            a.eventStatus !== "useractioncomplete")
        ? !1
        : !0;
    };
  var bq = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 };
  function cq() {
    return fo("tcf", function () {
      return {};
    });
  }
  var dq = function () {
    return new Up(z, { Bn: -1 });
  };
  function eq() {
    var a = cq(),
      b = dq();
    Wp(b) && !fq() && !gq() && S(124);
    if (!a.active && Wp(b)) {
      fq() &&
        ((a.active = !0),
        (a.purposes = {}),
        (a.cmpId = 0),
        (a.tcfPolicyVersion = 0),
        (gm().active = !0),
        (a.tcString = "tcunavailable"));
      Yn();
      try {
        b.addEventListener(function (c) {
          if (c.internalErrorState !== 0)
            hq(a), Zn([N.g.N, N.g.ra, N.g.O]), (gm().active = !0);
          else if (
            ((a.gdprApplies = c.gdprApplies),
            (a.cmpId = c.cmpId),
            (a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode),
            gq() && (a.active = !0),
            !iq(c) || fq() || gq())
          ) {
            a.tcfPolicyVersion = c.tcfPolicyVersion;
            var d;
            if (c.gdprApplies === !1) {
              var e = {},
                f;
              for (f in bq) bq.hasOwnProperty(f) && (e[f] = !0);
              d = e;
              b.removeEventListener(c);
            } else if (iq(c)) {
              var g = {},
                k;
              for (k in bq)
                if (bq.hasOwnProperty(k))
                  if (k === "1") {
                    var m,
                      n = c,
                      p = { qm: !0 };
                    p = p === void 0 ? {} : p;
                    m = aq(n)
                      ? n.gdprApplies === !1
                        ? !0
                        : n.tcString === "tcunavailable"
                        ? !p.sk
                        : (p.sk || n.gdprApplies !== void 0 || p.qm) &&
                          (p.sk ||
                            (typeof n.tcString === "string" &&
                              n.tcString.length))
                        ? Zp(n, "1", 0)
                        : !0
                      : !1;
                    g["1"] = m;
                  } else g[k] = Zp(c, k, bq[k]);
              d = g;
            }
            if (d) {
              a.tcString = c.tcString || "tcempty";
              a.purposes = d;
              var q = {},
                r = ((q[N.g.N] = a.purposes["1"] ? "granted" : "denied"), q);
              a.gdprApplies !== !0
                ? (Zn([N.g.N, N.g.ra, N.g.O]), (gm().active = !0))
                : ((r[N.g.ra] =
                    a.purposes["3"] && a.purposes["4"] ? "granted" : "denied"),
                  typeof a.tcfPolicyVersion === "number" &&
                  a.tcfPolicyVersion >= 4
                    ? (r[N.g.O] =
                        a.purposes["1"] && a.purposes["7"]
                          ? "granted"
                          : "denied")
                    : Zn([N.g.O]),
                  Tn(
                    r,
                    { eventId: 0 },
                    {
                      gdprApplies: a ? a.gdprApplies : void 0,
                      tcString: jq() || "",
                    }
                  ));
            }
          } else Zn([N.g.N, N.g.ra, N.g.O]);
        });
      } catch (c) {
        hq(a), Zn([N.g.N, N.g.ra, N.g.O]), (gm().active = !0);
      }
    }
  }
  function hq(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
  }
  function iq(a) {
    return (
      a.eventStatus === "tcloaded" ||
      a.eventStatus === "useractioncomplete" ||
      a.eventStatus === "cmpuishown"
    );
  }
  function fq() {
    return z.gtag_enable_tcf_support === !0;
  }
  function gq() {
    return cq().enableAdvertiserConsentMode === !0;
  }
  function jq() {
    var a = cq();
    if (a.active) return a.tcString;
  }
  function kq() {
    var a = cq();
    if (a.active && a.gdprApplies !== void 0) return a.gdprApplies ? "1" : "0";
  }
  function lq(a) {
    if (!bq.hasOwnProperty(String(a))) return !0;
    var b = cq();
    return b.active && b.purposes ? !!b.purposes[String(a)] : !0;
  }
  var mq = [N.g.N, N.g.R, N.g.O, N.g.ra],
    nq = {},
    oq = ((nq[N.g.N] = 1), (nq[N.g.R] = 2), nq);
  function pq(a) {
    if (a === void 0) return 0;
    switch (T(a, N.g.ma)) {
      case void 0:
        return 1;
      case !1:
        return 3;
      default:
        return 2;
    }
  }
  function qq(a) {
    if (ln() === "US-CO" && fc.globalPrivacyControl === !0) return !1;
    var b = pq(a);
    if (b === 3) return !1;
    switch (pm(N.g.ra)) {
      case 1:
      case 3:
        return !0;
      case 2:
        return !1;
      case 4:
        return b === 2;
      case 0:
        return !0;
      default:
        return !1;
    }
  }
  function rq() {
    return sm() || !om(N.g.N) || !om(N.g.R);
  }
  function sq() {
    var a = {},
      b;
    for (b in oq) oq.hasOwnProperty(b) && (a[oq[b]] = pm(b));
    return "G1" + Ne(a[1] || 0) + Ne(a[2] || 0);
  }
  var tq = {},
    uq =
      ((tq[N.g.N] = 0), (tq[N.g.R] = 1), (tq[N.g.O] = 2), (tq[N.g.ra] = 3), tq);
  function vq(a) {
    switch (a) {
      case void 0:
        return 1;
      case !0:
        return 3;
      case !1:
        return 2;
      default:
        return 0;
    }
  }
  function wq(a) {
    for (var b = "1", c = 0; c < mq.length; c++) {
      var d = b,
        e,
        f = mq[c],
        g = nm.delegatedConsentTypes[f];
      e = g === void 0 ? 0 : uq.hasOwnProperty(g) ? 12 | uq[g] : 8;
      var k = gm();
      k.accessedAny = !0;
      var m = k.entries[f] || {};
      e = (e << 2) | vq(m.implicit);
      b =
        d +
        ("" +
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
            e
          ] +
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
            (vq(m.declare) << 4) | (vq(m.default) << 2) | vq(m.update)
          ]);
    }
    var n = b,
      p = (ln() === "US-CO" && fc.globalPrivacyControl === !0 ? 1 : 0) << 3,
      q = (sm() ? 1 : 0) << 2,
      r = pq(a);
    b =
      n +
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        p | q | r
      ];
    return (b +=
      "" +
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        (nm.containerScopedDefaults.ad_storage << 4) |
          (nm.containerScopedDefaults.analytics_storage << 2) |
          nm.containerScopedDefaults.ad_user_data
      ] +
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        ((nm.usedContainerScopedDefaults ? 1 : 0) << 2) |
          nm.containerScopedDefaults.ad_personalization
      ]);
  }
  function xq() {
    if (!om(N.g.O)) return "-";
    for (
      var a = Object.keys(Sh), b = qm(a), c = "", d = l(a), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = e.value;
      b[f] && (c += Sh[f]);
    }
    (nm.usedCorePlatformServices ? nm.selectedAllCorePlatformServices : 1) &&
      (c += "o");
    return c || "-";
  }
  function yq() {
    return nn() || ((fq() || gq()) && kq() === "1") ? "1" : "0";
  }
  function zq() {
    return (nn() ? !0 : !(!fq() && !gq()) && kq() === "1") || !om(N.g.O);
  }
  function Aq() {
    var a = "0",
      b = "0",
      c;
    var d = cq();
    c = d.active ? d.cmpId : void 0;
    typeof c === "number" &&
      c >= 0 &&
      c <= 4095 &&
      ((a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        (c >> 6) & 63
      ]),
      (b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        c & 63
      ]));
    var e = "0",
      f;
    var g = cq();
    f = g.active ? g.tcfPolicyVersion : void 0;
    typeof f === "number" &&
      f >= 0 &&
      f <= 63 &&
      (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        f
      ]);
    var k = 0;
    nn() && (k |= 1);
    kq() === "1" && (k |= 2);
    fq() && (k |= 4);
    var m;
    var n = cq();
    m =
      n.enableAdvertiserConsentMode !== void 0
        ? n.enableAdvertiserConsentMode
          ? "1"
          : "0"
        : void 0;
    m === "1" && (k |= 8);
    gm().waitPeriodTimedOut && (k |= 16);
    return (
      "1" +
      a +
      b +
      e +
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[k]
    );
  }
  function Bq() {
    return ln() === "US-CO";
  }
  function Cq() {
    var a = !1;
    return a;
  }
  var Dq = { UA: 1, AW: 2, DC: 3, G: 4, GF: 5, GT: 12, GTM: 14, HA: 6, MC: 7 };
  function Eq(a) {
    a = a === void 0 ? {} : a;
    var b = Uf.ctid.split("-")[0].toUpperCase(),
      c = {
        ctid: Uf.ctid,
        pn: aj.Te,
        rn: aj.zh,
        Sm: Cl.Qe ? 2 : 1,
        wn: a.Ik,
        af: Uf.canonicalContainerId,
      };
    c.af !== a.Ba && (c.Ba = a.Ba);
    var d = Pl();
    c.fn = d ? d.canonicalContainerId : void 0;
    gj ? ((c.Cg = Dq[b]), c.Cg || (c.Cg = 0)) : (c.Cg = kj ? 13 : 10);
    uj.j
      ? ((c.Ag = 0), (c.Sl = 2))
      : ij
      ? (c.Ag = 1)
      : Cq()
      ? (c.Ag = 2)
      : (c.Ag = 3);
    var e = {};
    Q(74) && (e = Object.assign({}, nj));
    e[6] = Dl;
    uj.C === 2 ? (e[7] = !0) : uj.C === 1 && (e[2] = !0);
    if (ic) {
      var f = Rj(Xj(ic), "host");
      f && (e[8] = f.match(/^(www\.)?googletagmanager\.com$/) === null);
    }
    c.Vl = e;
    var g = a.ng,
      k;
    var m = c.Cg,
      n = c.Ag;
    m === void 0
      ? (k = "")
      : (n || (n = 0), (k = "" + Pe(1, 1) + Me((m << 2) | n)));
    var p = c.Sl,
      q = "4" + k + (p ? "" + Pe(2, 1) + Me(p) : ""),
      r,
      t = c.rn;
    r = t && Oe.test(t) ? "" + Pe(3, 2) + t : "";
    var v,
      u = c.pn;
    v = u ? "" + Pe(4, 1) + Me(u) : "";
    var w;
    var x = c.ctid;
    if (x && g) {
      var y = x.split("-"),
        A = y[0].toUpperCase();
      if (A !== "GTM" && A !== "OPT") w = "";
      else {
        var C = y[1];
        w = "" + Pe(5, 3) + Me(1 + C.length) + (c.Sm || 0) + C;
      }
    } else w = "";
    var D = c.wn,
      E = c.af,
      K = c.Ba,
      M = c.so,
      U =
        q +
        r +
        v +
        w +
        (D ? "" + Pe(6, 1) + Me(D) : "") +
        (E ? "" + Pe(7, 3) + Me(E.length) + E : "") +
        (K ? "" + Pe(8, 3) + Me(K.length) + K : "") +
        (M ? "" + Pe(9, 3) + Me(M.length) + M : ""),
      L;
    var ba = c.Vl;
    ba = ba === void 0 ? {} : ba;
    for (
      var fa = [], da = l(Object.keys(ba)), ca = da.next();
      !ca.done;
      ca = da.next()
    ) {
      var R = ca.value;
      fa[Number(R)] = ba[R];
    }
    if (fa.length) {
      var qa = Pe(10, 3),
        ma;
      if (fa.length === 0) ma = Me(0);
      else {
        for (var na = [], Ia = 0, Za = !1, Fa = 0; Fa < fa.length; Fa++) {
          Za = !0;
          var Wa = Fa % 6;
          fa[Fa] && (Ia |= 1 << Wa);
          Wa === 5 && (na.push(Me(Ia)), (Ia = 0), (Za = !1));
        }
        Za && na.push(Me(Ia));
        ma = na.join("");
      }
      var kb = ma;
      L = "" + qa + Me(kb.length) + kb;
    } else L = "";
    var uc = c.fn;
    return U + L + (uc ? "" + Pe(11, 3) + Me(uc.length) + uc : "");
  }
  function Fq(a) {
    var b = 1,
      c,
      d,
      e;
    if (a)
      for (b = 0, d = a.length - 1; d >= 0; d--)
        (e = a.charCodeAt(d)),
          (b = ((b << 6) & 268435455) + e + (e << 14)),
          (c = b & 266338304),
          (b = c !== 0 ? b ^ (c >> 21) : b);
    return b;
  }
  function Gq(a) {
    return a.origin !== "null";
  }
  function Hq(a, b, c, d) {
    var e;
    if (Iq(d)) {
      for (
        var f = [], g = String(b || Jq()).split(";"), k = 0;
        k < g.length;
        k++
      ) {
        var m = g[k].split("="),
          n = m[0].replace(/^\s*|\s*$/g, "");
        if (n && n === a) {
          var p = m
            .slice(1)
            .join("=")
            .replace(/^\s*|\s*$/g, "");
          p && c && (p = decodeURIComponent(p));
          f.push(p);
        }
      }
      e = f;
    } else e = [];
    return e;
  }
  function Kq(a, b, c, d, e) {
    if (Iq(e)) {
      var f = Lq(a, d, e);
      if (f.length === 1) return f[0].id;
      if (f.length !== 0) {
        f = Mq(
          f,
          function (g) {
            return g.bm;
          },
          b
        );
        if (f.length === 1) return f[0].id;
        f = Mq(
          f,
          function (g) {
            return g.hn;
          },
          c
        );
        return f[0] ? f[0].id : void 0;
      }
    }
  }
  function Nq(a, b, c, d) {
    var e = Jq(),
      f = window;
    Gq(f) && (f.document.cookie = a);
    var g = Jq();
    return e !== g || (c !== void 0 && Hq(b, g, !1, d).indexOf(c) >= 0);
  }
  function Oq(a, b, c, d) {
    function e(w, x, y) {
      if (y == null) return delete k[x], w;
      k[x] = y;
      return w + "; " + x + "=" + y;
    }
    function f(w, x) {
      if (x == null) return w;
      k[x] = !0;
      return w + "; " + x;
    }
    if (!Iq(c.Kb)) return 2;
    var g;
    b == null
      ? (g = a + "=deleted; expires=" + new Date(0).toUTCString())
      : (c.encode && (b = encodeURIComponent(b)),
        (b = Pq(b)),
        (g = a + "=" + b));
    var k = {};
    g = e(g, "path", c.path);
    var m;
    c.expires instanceof Date
      ? (m = c.expires.toUTCString())
      : c.expires != null && (m = "" + c.expires);
    g = e(g, "expires", m);
    g = e(g, "max-age", c.Wm);
    g = e(g, "samesite", c.sn);
    c.secure && (g = f(g, "secure"));
    var n = c.domain;
    if (n && n.toLowerCase() === "auto") {
      for (var p = Qq(), q = void 0, r = !1, t = 0; t < p.length; ++t) {
        var v = p[t] !== "none" ? p[t] : void 0,
          u = e(g, "domain", v);
        u = f(u, c.flags);
        try {
          d && d(a, k);
        } catch (w) {
          q = w;
          continue;
        }
        r = !0;
        if (!Rq(v, c.path) && Nq(u, a, b, c.Kb)) return 0;
      }
      if (q && !r) throw q;
      return 1;
    }
    n && n.toLowerCase() !== "none" && (g = e(g, "domain", n));
    g = f(g, c.flags);
    d && d(a, k);
    return Rq(n, c.path) ? 1 : Nq(g, a, b, c.Kb) ? 0 : 1;
  }
  function Sq(a, b, c) {
    c.path == null && (c.path = "/");
    c.domain || (c.domain = "auto");
    return Oq(a, b, c);
  }
  function Mq(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var k = a[g],
        m = b(k);
      m === c
        ? d.push(k)
        : f === void 0 || m < f
        ? ((e = [k]), (f = m))
        : m === f && e.push(k);
    }
    return d.length > 0 ? d : e;
  }
  function Lq(a, b, c) {
    for (var d = [], e = Hq(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        k = g.shift();
      if (!b || !k || b.indexOf(k) !== -1) {
        var m = g.shift();
        if (m) {
          var n = m.split("-");
          d.push({
            id: g.join("."),
            bm: Number(n[0]) || 1,
            hn: Number(n[1]) || 1,
          });
        }
      }
    }
    return d;
  }
  function Pq(a) {
    a && a.length > 1200 && (a = a.substring(0, 1200));
    return a;
  }
  var Tq = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Uq = /(^|\.)doubleclick\.net$/i;
  function Rq(a, b) {
    return (
      a !== void 0 &&
      (Uq.test(window.document.location.hostname) || (b === "/" && Tq.test(a)))
    );
  }
  function Vq(a) {
    if (!a) return 1;
    var b = a;
    oi(7) && a === "none" && (b = window.document.location.hostname);
    b = b.indexOf(".") === 0 ? b.substring(1) : b;
    return b.split(".").length;
  }
  function Wq(a) {
    if (!a || a === "/") return 1;
    a[0] !== "/" && (a = "/" + a);
    a[a.length - 1] !== "/" && (a += "/");
    return a.split("/").length - 1;
  }
  function Xq(a, b) {
    var c = "" + Vq(a),
      d = Wq(b);
    d > 1 && (c += "-" + d);
    return c;
  }
  var Jq = function () {
      return Gq(window) ? window.document.cookie : "";
    },
    Iq = function (a) {
      return a && oi(8)
        ? (Array.isArray(a) ? a : [a]).every(function (b) {
            return rm(b) && om(b);
          })
        : !0;
    },
    Qq = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (b.length === 4) {
        var c = b[b.length - 1];
        if (Number(c).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; d >= 0; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      Uq.test(e) || Tq.test(e) || a.push("none");
      return a;
    };
  function Yq(a) {
    var b = Math.round(Math.random() * 2147483647);
    return a ? String(b ^ (Fq(a) & 2147483647)) : String(b);
  }
  function Zq(a) {
    return [Yq(a), Math.round(qb() / 1e3)].join(".");
  }
  function $q(a, b, c, d, e) {
    var f = Vq(b);
    return Kq(a, f, Wq(c), d, e);
  }
  function ar(a, b, c, d) {
    return [b, Xq(c, d), a].join(".");
  }
  function br(a, b, c, d) {
    var e,
      f = Number(a.Jb != null ? a.Jb : void 0);
    f !== 0 && (e = new Date((b || qb()) + 1e3 * (f || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: e,
      Kb: d,
    };
  }
  var cr = ["ad_storage", "ad_user_data"];
  function dr(a, b) {
    if (!a) return 10;
    if (b === null || b === void 0 || b === "") return 11;
    var c = er(!1);
    if (c.error !== 0) return c.error;
    if (!c.value) return 2;
    c.value[a] = b;
    return fr(c);
  }
  function gr(a) {
    if (!a) return { error: 10 };
    var b = er();
    if (b.error !== 0) return b;
    if (!b.value) return { error: 2 };
    if (!(a in b.value)) return { value: void 0, error: 15 };
    var c = b.value[a];
    return c === null || c === void 0 || c === ""
      ? { value: void 0, error: 11 }
      : { value: c, error: 0 };
  }
  function er(a) {
    a = a === void 0 ? !0 : a;
    if (!om(cr)) return { error: 3 };
    try {
      if (!z.localStorage) return { error: 1 };
    } catch (f) {
      return { error: 14 };
    }
    var b = { schema: "gcl", version: 1 },
      c = void 0;
    try {
      c = z.localStorage.getItem("_gcl_ls");
    } catch (f) {
      return { error: 13 };
    }
    try {
      if (c) {
        var d = JSON.parse(c);
        if (d && typeof d === "object") b = d;
        else return { error: 12 };
      }
    } catch (f) {
      return { error: 8 };
    }
    if (b.schema !== "gcl") return { error: 4 };
    if (b.version !== 1) return { error: 5 };
    try {
      var e = hr(b);
      a && e && fr({ value: b, error: 0 });
    } catch (f) {
      return { error: 8 };
    }
    return { value: b, error: 0 };
  }
  function hr(a) {
    if (!a || typeof a !== "object") return !1;
    if ("expires" in a && "value" in a) {
      var b;
      typeof a.expires === "number"
        ? (b = a.expires)
        : (b = typeof a.expires === "string" ? Number(a.expires) : NaN);
      if (isNaN(b) || !(Date.now() <= b))
        return (a.value = null), (a.error = 9), !0;
    } else {
      for (
        var c = !1, d = l(Object.keys(a)), e = d.next();
        !e.done;
        e = d.next()
      )
        c = hr(a[e.value]) || c;
      return c;
    }
    return !1;
  }
  function fr(a) {
    if (a.error) return a.error;
    if (!a.value) return 2;
    var b = a.value,
      c;
    try {
      c = JSON.stringify(b);
    } catch (d) {
      return 6;
    }
    try {
      z.localStorage.setItem("_gcl_ls", c);
    } catch (d) {
      return 7;
    }
    return 0;
  }
  function ir() {
    if (!jr()) return -1;
    var a = kr();
    return a !== -1 && lr(a + 1) ? a + 1 : -1;
  }
  function kr() {
    if (!jr()) return -1;
    var a = gr("gcl_ctr");
    if (!a || a.error !== 0 || !a.value || typeof a.value !== "object")
      return -1;
    var b = a.value;
    try {
      if (!("value" in b && b.value) || typeof b.value !== "object") return -1;
      var c = b.value.value;
      return c == null || Number.isNaN(c) ? -1 : Number(c);
    } catch (d) {
      return -1;
    }
  }
  function jr() {
    return om(["ad_storage", "ad_user_data"]) ? oi(11) : !1;
  }
  function lr(a, b) {
    b = b || {};
    var c = qb();
    return dr("gcl_ctr", {
      value: { value: a, creationTimeMs: c },
      expires: Number(br(b, c, !0).expires),
    }) === 0
      ? !0
      : !1;
  }
  var mr;
  function nr() {
    function a(g) {
      c(g.target || g.srcElement || {});
    }
    function b(g) {
      d(g.target || g.srcElement || {});
    }
    var c = or,
      d = pr,
      e = qr();
    if (!e.init) {
      vc(B, "mousedown", a);
      vc(B, "keyup", a);
      vc(B, "submit", b);
      var f = HTMLFormElement.prototype.submit;
      HTMLFormElement.prototype.submit = function () {
        d(this);
        f.call(this);
      };
      e.init = !0;
    }
  }
  function rr(a, b, c, d, e) {
    var f = {
      callback: a,
      domains: b,
      fragment: c === 2,
      placement: c,
      forms: d,
      sameHost: e,
    };
    qr().decorators.push(f);
  }
  function sr(a, b, c) {
    for (var d = qr().decorators, e = {}, f = 0; f < d.length; ++f) {
      var g = d[f],
        k;
      if ((k = !c || g.forms))
        a: {
          var m = g.domains,
            n = a,
            p = !!g.sameHost;
          if (m && (p || n !== B.location.hostname))
            for (var q = 0; q < m.length; q++)
              if (m[q] instanceof RegExp) {
                if (m[q].test(n)) {
                  k = !0;
                  break a;
                }
              } else if (n.indexOf(m[q]) >= 0 || (p && m[q].indexOf(n) >= 0)) {
                k = !0;
                break a;
              }
          k = !1;
        }
      if (k) {
        var r = g.placement;
        r === void 0 && (r = g.fragment ? 2 : 1);
        r === b && tb(e, g.callback());
      }
    }
    return e;
  }
  function qr() {
    var a = jc("google_tag_data", {}),
      b = a.gl;
    (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
    return b;
  }
  var tr = /(.*?)\*(.*?)\*(.*)/,
    ur = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    vr = /^(?:www\.|m\.|amp\.)+/,
    wr = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function xr(a) {
    var b = wr.exec(a);
    if (b) return { ji: b[1], query: b[2], fragment: b[3] };
  }
  function yr(a) {
    return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
  }
  function zr(a, b) {
    var c = [
        fc.userAgent,
        new Date().getTimezoneOffset(),
        fc.userLanguage || fc.language,
        Math.floor(qb() / 60 / 1e3) - (b === void 0 ? 0 : b),
        a,
      ].join("*"),
      d;
    if (!(d = mr)) {
      for (var e = Array(256), f = 0; f < 256; f++) {
        for (var g = f, k = 0; k < 8; k++)
          g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
        e[f] = g;
      }
      d = e;
    }
    mr = d;
    for (var m = 4294967295, n = 0; n < c.length; n++)
      m = (m >>> 8) ^ mr[(m ^ c.charCodeAt(n)) & 255];
    return ((m ^ -1) >>> 0).toString(36);
  }
  function Ar(a) {
    return function (b) {
      var c = Xj(z.location.href),
        d = c.search.replace("?", ""),
        e = Qj(d, "_gl", !1, !0) || "";
      b.query = Br(e) || {};
      var f = Rj(c, "fragment"),
        g;
      var k = -1;
      if (vb(f, "_gl=")) k = 4;
      else {
        var m = f.indexOf("&_gl=");
        m > 0 && (k = m + 3 + 2);
      }
      if (k < 0) g = void 0;
      else {
        var n = f.indexOf("&", k);
        g = n < 0 ? f.substring(k) : f.substring(k, n);
      }
      b.fragment = Br(g || "") || {};
      a && Cr(c, d, f);
    };
  }
  function Dr(a, b) {
    var c = yr(a).exec(b),
      d = b;
    if (c) {
      var e = c[2],
        f = c[4];
      d = c[1];
      f && (d = d + e + f);
    }
    return d;
  }
  function Cr(a, b, c) {
    function d(g, k) {
      var m = Dr("_gl", g);
      m.length && (m = k + m);
      return m;
    }
    if (ec && ec.replaceState) {
      var e = yr("_gl");
      if (e.test(b) || e.test(c)) {
        var f = Rj(a, "path");
        b = d(b, "?");
        c = d(c, "#");
        ec.replaceState({}, "", "" + f + b + c);
      }
    }
  }
  function Er(a, b) {
    var c = Ar(!!b),
      d = qr();
    d.data || ((d.data = { query: {}, fragment: {} }), c(d.data));
    var e = {},
      f = d.data;
    f && (tb(e, f.query), a && tb(e, f.fragment));
    return e;
  }
  var Br = function (a) {
    try {
      var b = Fr(a, 3);
      if (b !== void 0) {
        for (
          var c = {}, d = b ? b.split("*") : [], e = 0;
          e + 1 < d.length;
          e += 2
        ) {
          var f = d[e],
            g = Ta(d[e + 1]);
          c[f] = g;
        }
        Va("TAGGING", 6);
        return c;
      }
    } catch (k) {
      Va("TAGGING", 8);
    }
  };
  function Fr(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; e < 3; ++e) {
          var f = tr.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var g = c;
      if (g && g[1] === "1") {
        var k = g[3],
          m;
        a: {
          for (var n = g[2], p = 0; p < b; ++p)
            if (n === zr(k, p)) {
              m = !0;
              break a;
            }
          m = !1;
        }
        if (m) return k;
        Va("TAGGING", 7);
      }
    }
  }
  function Gr(a, b, c, d, e) {
    function f(p) {
      p = Dr(a, p);
      var q = p.charAt(p.length - 1);
      p && q !== "&" && (p += "&");
      return p + n;
    }
    d = d === void 0 ? !1 : d;
    e = e === void 0 ? !1 : e;
    var g = xr(c);
    if (!g) return "";
    var k = g.query || "",
      m = g.fragment || "",
      n = a + "=" + b;
    d
      ? (m.substring(1).length !== 0 && e) || (m = "#" + f(m.substring(1)))
      : (k = "?" + f(k.substring(1)));
    return "" + g.ji + k + m;
  }
  function Hr(a, b) {
    function c(n, p, q) {
      var r;
      a: {
        for (var t in n)
          if (n.hasOwnProperty(t)) {
            r = !0;
            break a;
          }
        r = !1;
      }
      if (r) {
        var v,
          u = [],
          w;
        for (w in n)
          if (n.hasOwnProperty(w)) {
            var x = n[w];
            x !== void 0 &&
              x === x &&
              x !== null &&
              x.toString() !== "[object Object]" &&
              (u.push(w), u.push(Sa(String(x))));
          }
        var y = u.join("*");
        v = ["1", zr(y), y].join("*");
        d
          ? (oi(3) || oi(1) || !p) && Ir("_gl", v, a, p, q)
          : Jr("_gl", v, a, p, q);
      }
    }
    var d = (a.tagName || "").toUpperCase() === "FORM",
      e = sr(b, 1, d),
      f = sr(b, 2, d),
      g = sr(b, 4, d),
      k = sr(b, 3, d);
    c(e, !1, !1);
    c(f, !0, !1);
    oi(1) && c(g, !0, !0);
    for (var m in k) k.hasOwnProperty(m) && Kr(m, k[m], a);
  }
  function Kr(a, b, c) {
    c.tagName.toLowerCase() === "a"
      ? Jr(a, b, c)
      : c.tagName.toLowerCase() === "form" && Ir(a, b, c);
  }
  function Jr(a, b, c, d, e) {
    d = d === void 0 ? !1 : d;
    e = e === void 0 ? !1 : e;
    var f;
    if ((f = c.href)) {
      var g;
      if (!(g = !oi(5) || d)) {
        var k = z.location.href,
          m = xr(c.href),
          n = xr(k);
        g = !(m && n && m.ji === n.ji && m.query === n.query && m.fragment);
      }
      f = g;
    }
    if (f) {
      var p = Gr(a, b, c.href, d, e);
      Wb.test(p) && (c.href = p);
    }
  }
  function Ir(a, b, c, d, e) {
    d = d === void 0 ? !1 : d;
    e = e === void 0 ? !1 : e;
    if (c && c.action) {
      var f = (c.method || "").toLowerCase();
      if (f !== "get" || d) {
        if (f === "get" || f === "post") {
          var g = Gr(a, b, c.action, d, e);
          Wb.test(g) && (c.action = g);
        }
      } else {
        for (var k = c.childNodes || [], m = !1, n = 0; n < k.length; n++) {
          var p = k[n];
          if (p.name === a) {
            p.setAttribute("value", b);
            m = !0;
            break;
          }
        }
        if (!m) {
          var q = B.createElement("input");
          q.setAttribute("type", "hidden");
          q.setAttribute("name", a);
          q.setAttribute("value", b);
          c.appendChild(q);
        }
      }
    }
  }
  function or(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && d > 0; ) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        (f !== "http:" && f !== "https:") || Hr(e, e.hostname);
      }
    } catch (g) {}
  }
  function pr(a) {
    try {
      if (a.action) {
        var b = Rj(Xj(a.action), "host");
        Hr(a, b);
      }
    } catch (c) {}
  }
  function Lr(a, b, c, d) {
    nr();
    var e = c === "fragment" ? 2 : 1;
    d = !!d;
    rr(a, b, e, d, !1);
    e === 2 && Va("TAGGING", 23);
    d && Va("TAGGING", 24);
  }
  function Mr(a, b) {
    nr();
    rr(a, [Tj(z.location, "host", !0)], b, !0, !0);
  }
  function Nr() {
    var a = B.location.hostname,
      b = ur.exec(B.referrer);
    if (!b) return !1;
    var c = b[2],
      d = b[1],
      e = "";
    if (c) {
      var f = c.split("/"),
        g = f[1];
      e = g === "s" ? decodeURIComponent(f[2]) : decodeURIComponent(g);
    } else if (d) {
      if (d.indexOf("xn--") === 0) return !1;
      e = d.replace(/-/g, ".").replace(/\.\./g, "-");
    }
    var k = a.replace(vr, ""),
      m = e.replace(vr, "");
    return k === m || wb(k, "." + m);
  }
  function Or(a, b) {
    return a === !1 ? !1 : a || b || Nr();
  }
  var Pr = ["1"],
    Qr = {},
    Rr = {};
  function Sr(a, b) {
    b = b === void 0 ? !0 : b;
    var c = Tr(a.prefix);
    if (Qr[c]) Ur(a);
    else if (Vr(c, a.path, a.domain)) {
      var d = Rr[Tr(a.prefix)];
      b && Wr(a, d ? d.id : void 0, d ? d.ei : void 0);
      Ur(a);
    } else {
      var e = Zj("auiddc");
      if (e) Va("TAGGING", 17), (Qr[c] = e);
      else if (b) {
        var f = Tr(a.prefix),
          g = Zq();
        Xr(f, g, a);
        Vr(c, a.path, a.domain);
        Ur(a, !0);
      }
    }
  }
  function Ur(a, b) {
    if ((b === void 0 ? 0 : b) && jr()) {
      var c = er(!1);
      c.error === 0 &&
        c.value &&
        "gcl_ctr" in c.value &&
        (delete c.value.gcl_ctr, fr(c));
    }
    om(["ad_storage", "ad_user_data"]) && oi(10) && kr() === -1 && lr(0, a);
  }
  function Wr(a, b, c) {
    var d = Tr(a.prefix),
      e = Qr[d];
    if (e) {
      var f = e.split(".");
      if (f.length === 2) {
        var g = Number(f[1]) || 0;
        if (g) {
          var k = e;
          b && (k = e + "." + b + "." + (c ? c : Math.floor(qb() / 1e3)));
          Xr(d, k, a, g * 1e3);
        }
      }
    }
  }
  function Xr(a, b, c, d) {
    var e = ar(b, "1", c.domain, c.path),
      f = br(c, d);
    f.Kb = Yr();
    Sq(a, e, f);
  }
  function Vr(a, b, c) {
    var d = $q(a, b, c, Pr, Yr());
    if (!d) return !1;
    Zr(a, d);
    return !0;
  }
  function Zr(a, b) {
    var c = b.split(".");
    c.length === 5
      ? ((Qr[a] = c.slice(0, 2).join(".")),
        (Rr[a] = { id: c.slice(2, 4).join("."), ei: Number(c[4]) || 0 }))
      : c.length === 3
      ? (Rr[a] = { id: c.slice(0, 2).join("."), ei: Number(c[2]) || 0 })
      : (Qr[a] = b);
  }
  function Tr(a) {
    return (a || "_gcl") + "_au";
  }
  function $r(a) {
    function b() {
      om(c) && a();
    }
    var c = Yr();
    vm(function () {
      b();
      om(c) || wm(b, c);
    }, c);
  }
  function as(a) {
    var b = Er(!0),
      c = Tr(a.prefix);
    $r(function () {
      var d = b[c];
      if (d) {
        Zr(c, d);
        var e = Number(Qr[c].split(".")[1]) * 1e3;
        if (e) {
          Va("TAGGING", 16);
          var f = br(a, e);
          f.Kb = Yr();
          var g = ar(d, "1", a.domain, a.path);
          Sq(c, g, f);
        }
      }
    });
  }
  function bs(a, b, c, d, e) {
    e = e || {};
    var f = function () {
      var g = {},
        k = $q(a, e.path, e.domain, Pr, Yr());
      k && (g[a] = k);
      return g;
    };
    $r(function () {
      Lr(f, b, c, d);
    });
  }
  function Yr() {
    return ["ad_storage", "ad_user_data"];
  }
  var cs = {},
    ds =
      ((cs.k = { Z: /^[\w-]+$/ }),
      (cs.b = { Z: /^[\w-]+$/, ui: !0 }),
      (cs.i = { Z: /^[1-9]\d*$/ }),
      (cs.u = { Z: /^[1-9]\d*$/ }),
      cs);
  var es = {},
    hs =
      ((es[5] = { Sk: { 2: fs }, Kh: ["k", "i", "b", "u"] }),
      (es[4] = { Sk: { 2: fs, GCL: gs }, Kh: ["k", "i", "b"] }),
      es);
  function is(a) {
    var b = hs[5];
    if (b) {
      var c = a.split(".")[0];
      if (c) {
        var d = b.Sk[c];
        if (d) return d(a, 5);
      }
    }
  }
  function fs(a, b) {
    var c = a.split(".");
    if (c.length === 3) {
      var d = {},
        e = hs[b];
      if (e) {
        for (
          var f = e.Kh, g = l(c[2].split("$")), k = g.next();
          !k.done;
          k = g.next()
        ) {
          var m = k.value,
            n = m[0];
          if (f.indexOf(n) !== -1)
            try {
              var p = decodeURIComponent(m.substring(1)),
                q = ds[n];
              q && (q.ui ? ((d[n] = d[n] || []), d[n].push(p)) : (d[n] = p));
            } catch (r) {}
        }
        return d;
      }
    }
  }
  function js(a, b) {
    var c = hs[5];
    if (c) {
      for (var d = [], e = l(c.Kh), f = e.next(); !f.done; f = e.next()) {
        var g = f.value,
          k = ds[g];
        if (k) {
          var m = a[g];
          if (m !== void 0)
            if (k.ui && Array.isArray(m))
              for (var n = l(m), p = n.next(); !p.done; p = n.next())
                d.push(encodeURIComponent("" + g + p.value));
            else d.push(encodeURIComponent("" + g + m));
        }
      }
      return ["2", b || "1", d.join("$")].join(".");
    }
  }
  function gs(a) {
    var b = a.split(".");
    b.shift();
    var c = b.shift(),
      d = b.shift(),
      e = {};
    return (e.k = d), (e.i = c), (e.b = b), e;
  }
  var ks = new Map([
    [5, "ad_storage"],
    [4, ["ad_storage", "ad_user_data"]],
  ]);
  function ls(a) {
    if (hs[5]) {
      for (
        var b = [],
          c = Hq(a, void 0, void 0, ks.get(5)),
          d = l(c),
          e = d.next();
        !e.done;
        e = d.next()
      ) {
        var f = is(e.value);
        f && (ms(f), b.push(f));
      }
      return b;
    }
  }
  function ns(a, b, c, d) {
    c = c || {};
    var e = Xq(c.domain, c.path),
      f = js(b, e);
    if (f) {
      var g = br(c, d, void 0, ks.get(5));
      Sq(a, f, g);
    }
  }
  function os(a, b) {
    var c = b.Z;
    return typeof c === "function" ? c(a) : c.test(a);
  }
  function ms(a) {
    for (
      var b = l(Object.keys(a)), c = b.next(), d = {};
      !c.done;
      d = { cf: void 0 }, c = b.next()
    ) {
      var e = c.value,
        f = a[e];
      d.cf = ds[e];
      d.cf
        ? d.cf.ui
          ? (a[e] = Array.isArray(f)
              ? f.filter(
                  (function (g) {
                    return function (k) {
                      return os(k, g.cf);
                    };
                  })(d)
                )
              : void 0)
          : (typeof f === "string" && os(f, d.cf)) || (a[e] = void 0)
        : (a[e] = void 0);
    }
  }
  function ps(a) {
    for (
      var b = [],
        c = B.cookie.split(";"),
        d = new RegExp(
          "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"
        ),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f &&
        b.push({
          zi: f[1],
          value: f[2],
          timestamp: Number(f[2].split(".")[1]) || 0,
        });
    }
    b.sort(function (g, k) {
      return k.timestamp - g.timestamp;
    });
    return b;
  }
  function qs(a, b) {
    var c = ps(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (
        !(f[0] !== "1" || (b && f.length < 3) || (!b && f.length !== 3)) &&
        Number(f[1])
      ) {
        d[c[e].zi] || (d[c[e].zi] = []);
        var g = { version: f[0], timestamp: Number(f[1]) * 1e3, T: f[2] };
        b && f.length > 3 && (g.labels = f.slice(3));
        d[c[e].zi].push(g);
      }
    }
    return d;
  }
  function rs() {
    var a = String,
      b = z.location.hostname,
      c = z.location.pathname,
      d = (b = Eb(b));
    d.split(".").length > 2 &&
      (d = d.replace(/^(www[0-9]*|web|ftp|wap|home|m|w|amp|mobile)\./, ""));
    b = d;
    c = Eb(c);
    var e = c.split(";")[0];
    e = e.replace(/\/(ar|slp|web|index)?\/?$/, "");
    return a(Fq(("" + b + e).toLowerCase()));
  }
  var ss = /^\w+$/,
    ts = /^[\w-]+$/,
    us = {},
    vs =
      ((us.aw = "_aw"),
      (us.dc = "_dc"),
      (us.gf = "_gf"),
      (us.gp = "_gp"),
      (us.gs = "_gs"),
      (us.ha = "_ha"),
      (us.ag = "_ag"),
      (us.gb = "_gb"),
      us);
  function ws() {
    return ["ad_storage", "ad_user_data"];
  }
  function xs(a) {
    return !oi(8) || om(a);
  }
  function ys(a, b) {
    function c() {
      var d = xs(b);
      d && a();
      return d;
    }
    vm(function () {
      c() || wm(c, b);
    }, b);
  }
  function zs(a) {
    return As(a).map(function (b) {
      return b.T;
    });
  }
  function Bs(a) {
    return Cs(a)
      .filter(function (b) {
        return b.T;
      })
      .map(function (b) {
        return b.T;
      });
  }
  function Cs(a) {
    var b = Ds(a.prefix),
      c = Es("gb", b),
      d = Es("ag", b);
    if (!d || !c) return [];
    var e = function (k) {
        return function (m) {
          m.type = k;
          return m;
        };
      },
      f = As(c).map(e("gb")),
      g = Fs(d).map(e("ag"));
    return f.concat(g).sort(function (k, m) {
      return m.timestamp - k.timestamp;
    });
  }
  function Gs(a, b, c, d, e, f) {
    var g = eb(a, function (k) {
      return k.T === c;
    });
    g
      ? (g.timestamp < d && ((g.timestamp = d), (g.Sd = f)),
        (g.labels = Hs(g.labels || [], e || [])))
      : a.push({ version: b, T: c, timestamp: d, labels: e, Sd: f });
  }
  function Fs(a) {
    for (
      var b = ls(a) || [], c = [], d = l(b), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = e.value,
        g = f,
        k = g.k,
        m = g.b,
        n = Is(f);
      if (n) {
        var p = void 0;
        oi(9) && (p = f.u);
        Gs(c, "2", k, n, m || [], p);
      }
    }
    return c.sort(function (q, r) {
      return r.timestamp - q.timestamp;
    });
  }
  function As(a) {
    for (
      var b = [], c = Hq(a, B.cookie, void 0, ws()), d = l(c), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = Js(e.value);
      if (f != null) {
        var g = f;
        Gs(b, g.version, g.T, g.timestamp, g.labels);
      }
    }
    b.sort(function (k, m) {
      return m.timestamp - k.timestamp;
    });
    return Ks(b);
  }
  function Ls(a, b) {
    for (var c = [], d = l(a), e = d.next(); !e.done; e = d.next()) {
      var f = e.value;
      c.includes(f) || c.push(f);
    }
    for (var g = l(b), k = g.next(); !k.done; k = g.next()) {
      var m = k.value;
      c.includes(m) || c.push(m);
    }
    return c;
  }
  function Ms(a, b) {
    var c = eb(a, function (d) {
      return d.T === b.T;
    });
    c
      ? (c.timestamp < b.timestamp &&
          ((c.timestamp = b.timestamp), (c.Sd = b.Sd)),
        (c.Qa = c.Qa
          ? b.Qa
            ? c.timestamp < b.timestamp
              ? b.Qa
              : c.Qa
            : c.Qa || 0
          : b.Qa || 0),
        (c.labels = Ls(c.labels || [], b.labels || [])),
        (c.Yc = Ls(c.Yc || [], b.Yc || [])))
      : a.push(b);
  }
  function Ns() {
    var a = gr("gclid");
    if (!a || a.error || !a.value || typeof a.value !== "object") return null;
    var b = a.value;
    try {
      if (!("value" in b && b.value) || typeof b.value !== "object")
        return null;
      var c = b.value,
        d = c.value;
      return d && d.match(ts)
        ? {
            version: "",
            T: d,
            timestamp: Number(c.creationTimeMs) || 0,
            labels: [],
            Qa: c.linkDecorationSource || 0,
            Yc: [2],
          }
        : null;
    } catch (e) {
      return null;
    }
  }
  function Os(a) {
    for (
      var b = [], c = Hq(a, B.cookie, void 0, ws()), d = l(c), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = Js(e.value);
      f != null && ((f.Sd = void 0), (f.Qa = 0), (f.Yc = [1]), Ms(b, f));
    }
    var g = Ns();
    g && ((g.Sd = void 0), (g.Qa = g.Qa || 0), (g.Yc = g.Yc || [2]), Ms(b, g));
    b.sort(function (k, m) {
      return m.timestamp - k.timestamp;
    });
    return Ks(b);
  }
  function Hs(a, b) {
    if (!a.length) return b;
    if (!b.length) return a;
    var c = {};
    return a.concat(b).filter(function (d) {
      return c.hasOwnProperty(d) ? !1 : (c[d] = !0);
    });
  }
  function Ds(a) {
    return a && typeof a === "string" && a.match(ss) ? a : "_gcl";
  }
  function Ps(a, b, c) {
    var d = Xj(a),
      e = Rj(d, "query", !1, void 0, "gclsrc"),
      f = { value: Rj(d, "query", !1, void 0, "gclid"), Qa: c ? 4 : 2 };
    if (b && (!f.value || !e)) {
      var g = d.hash.replace("#", "");
      f.value || ((f.value = Qj(g, "gclid", !1)), (f.Qa = 3));
      e || (e = Qj(g, "gclsrc", !1));
    }
    return !f.value || (e !== void 0 && e !== "aw" && e !== "aw.ds") ? [] : [f];
  }
  function Qs(a, b) {
    var c = Xj(a),
      d = Rj(c, "query", !1, void 0, "gclid"),
      e = Rj(c, "query", !1, void 0, "gclsrc"),
      f = Rj(c, "query", !1, void 0, "wbraid");
    f = Cb(f);
    var g = Rj(c, "query", !1, void 0, "gbraid"),
      k = Rj(c, "query", !1, void 0, "gad_source"),
      m = Rj(c, "query", !1, void 0, "dclid");
    if (b && !(d && e && f && g)) {
      var n = c.hash.replace("#", "");
      d = d || Qj(n, "gclid", !1);
      e = e || Qj(n, "gclsrc", !1);
      f = f || Qj(n, "wbraid", !1);
      g = g || Qj(n, "gbraid", !1);
      k = k || Qj(n, "gad_source", !1);
    }
    return Rs(d, e, m, f, g, k);
  }
  function Ss() {
    return Qs(z.location.href, !0);
  }
  function Rs(a, b, c, d, e, f) {
    var g = {},
      k = function (m, n) {
        g[n] || (g[n] = []);
        g[n].push(m);
      };
    g.gclid = a;
    g.gclsrc = b;
    g.dclid = c;
    if (a !== void 0 && a.match(ts))
      switch (b) {
        case void 0:
          k(a, "aw");
          break;
        case "aw.ds":
          k(a, "aw");
          k(a, "dc");
          break;
        case "ds":
          k(a, "dc");
          break;
        case "3p.ds":
          k(a, "dc");
          break;
        case "gf":
          k(a, "gf");
          break;
        case "ha":
          k(a, "ha");
      }
    c && k(c, "dc");
    d !== void 0 && ts.test(d) && ((g.wbraid = d), k(d, "gb"));
    e !== void 0 && ts.test(e) && ((g.gbraid = e), k(e, "ag"));
    f !== void 0 && ts.test(f) && ((g.gad_source = f), k(f, "gs"));
    return g;
  }
  function Ts(a) {
    for (
      var b = Ss(), c = !0, d = l(Object.keys(b)), e = d.next();
      !e.done;
      e = d.next()
    )
      if (b[e.value] !== void 0) {
        c = !1;
        break;
      }
    c && ((b = Qs(z.document.referrer, !1)), (b.gad_source = void 0));
    Us(b, !1, a);
  }
  function Vs(a) {
    Ts(a);
    var b = Ps(z.location.href, !0, !1);
    b.length || (b = Ps(z.document.referrer, !1, !0));
    if (b.length) {
      var c = b[0];
      a = a || {};
      var d = qb(),
        e = br(a, d, !0),
        f = ws(),
        g = function () {
          xs(f) &&
            e.expires !== void 0 &&
            dr("gclid", {
              value: {
                value: c.value,
                creationTimeMs: d,
                linkDecorationSource: c.Qa,
              },
              expires: Number(e.expires),
            });
        };
      vm(function () {
        g();
        xs(f) || wm(g, f);
      }, f);
    }
  }
  function Us(a, b, c, d, e) {
    c = c || {};
    e = e || [];
    var f = Ds(c.prefix),
      g = d || qb(),
      k = Math.round(g / 1e3),
      m = ws(),
      n = !1,
      p = !1,
      q = function () {
        if (xs(m)) {
          var r = br(c, g, !0);
          r.Kb = m;
          for (
            var t = function (M, U) {
                var L = Es(M, f);
                L && (Sq(L, U, r), M !== "gb" && (n = !0));
              },
              v = function (M) {
                var U = ["GCL", k, M];
                e.length > 0 && U.push(e.join("."));
                return U.join(".");
              },
              u = l(["aw", "dc", "gf", "ha", "gp"]),
              w = u.next();
            !w.done;
            w = u.next()
          ) {
            var x = w.value;
            a[x] && t(x, v(a[x][0]));
          }
          if (!n && a.gb) {
            var y = a.gb[0],
              A = Es("gb", f);
            (!b &&
              As(A).some(function (M) {
                return M.T === y && M.labels && M.labels.length > 0;
              })) ||
              t("gb", v(y));
          }
        }
        if (!p && a.gbraid && xs("ad_storage") && ((p = !0), !n)) {
          var C = a.gbraid,
            D = Es("ag", f);
          if (
            b ||
            !Fs(D).some(function (M) {
              return M.T === C && M.labels && M.labels.length > 0;
            })
          ) {
            var E = {},
              K = ((E.k = C), (E.i = "" + k), (E.b = e), E);
            ns(D, K, c, g);
          }
        }
        Ws(a, f, g, c);
      };
    vm(function () {
      q();
      xs(m) || wm(q, m);
    }, m);
  }
  function Ws(a, b, c, d) {
    if (a.gad_source !== void 0 && xs("ad_storage")) {
      if (oi(4)) {
        var e = Ic();
        if (e === "r" || e === "h") return;
      }
      var f = a.gad_source,
        g = Es("gs", b);
      if (g) {
        var k = Math.floor((qb() - (Hc() || 0)) / 1e3),
          m;
        if (oi(9)) {
          var n = rs(),
            p = {};
          m = ((p.k = f), (p.i = "" + k), (p.u = n), p);
        } else {
          var q = {};
          m = ((q.k = f), (q.i = "" + k), q);
        }
        ns(g, m, d, c);
      }
    }
  }
  function Xs(a, b) {
    var c = Er(!0);
    ys(function () {
      for (var d = Ds(b.prefix), e = 0; e < a.length; ++e) {
        var f = a[e];
        if (vs[f] !== void 0) {
          var g = Es(f, d),
            k = c[g];
          if (k) {
            var m = Math.min(Ys(k), qb()),
              n;
            b: {
              for (
                var p = m, q = Hq(g, B.cookie, void 0, ws()), r = 0;
                r < q.length;
                ++r
              )
                if (Ys(q[r]) > p) {
                  n = !0;
                  break b;
                }
              n = !1;
            }
            if (!n) {
              var t = br(b, m, !0);
              t.Kb = ws();
              Sq(g, k, t);
            }
          }
        }
      }
      Us(Rs(c.gclid, c.gclsrc), !1, b);
    }, ws());
  }
  function Zs(a) {
    var b = ["ag"],
      c = Er(!0),
      d = Ds(a.prefix);
    ys(
      function () {
        for (var e = 0; e < b.length; ++e) {
          var f = Es(b[e], d);
          if (f) {
            var g = c[f];
            if (g) {
              var k = is(g);
              if (k) {
                var m = Is(k);
                m || (m = qb());
                var n;
                a: {
                  for (var p = m, q = ls(f), r = 0; r < q.length; ++r)
                    if (Is(q[r]) > p) {
                      n = !0;
                      break a;
                    }
                  n = !1;
                }
                if (n) break;
                k.i = "" + Math.round(m / 1e3);
                ns(f, k, a, m);
              }
            }
          }
        }
      },
      ["ad_storage"]
    );
  }
  function Es(a, b) {
    var c = vs[a];
    if (c !== void 0) return b + c;
  }
  function Ys(a) {
    return $s(a.split(".")).length !== 0
      ? (Number(a.split(".")[1]) || 0) * 1e3
      : 0;
  }
  function Is(a) {
    return a ? (Number(a.i) || 0) * 1e3 : 0;
  }
  function Js(a) {
    var b = $s(a.split("."));
    return b.length === 0
      ? null
      : {
          version: b[0],
          T: b[2],
          timestamp: (Number(b[1]) || 0) * 1e3,
          labels: b.slice(3),
        };
  }
  function $s(a) {
    return a.length < 3 ||
      (a[0] !== "GCL" && a[0] !== "1") ||
      !/^\d+$/.test(a[1]) ||
      !ts.test(a[2])
      ? []
      : a;
  }
  function at(a, b, c, d, e) {
    if (Array.isArray(b) && Gq(z)) {
      var f = Ds(e),
        g = function () {
          for (var k = {}, m = 0; m < a.length; ++m) {
            var n = Es(a[m], f);
            if (n) {
              var p = Hq(n, B.cookie, void 0, ws());
              p.length && (k[n] = p.sort()[p.length - 1]);
            }
          }
          return k;
        };
      ys(function () {
        Lr(g, b, c, d);
      }, ws());
    }
  }
  function bt(a, b, c, d) {
    if (Array.isArray(a) && Gq(z)) {
      var e = ["ag"],
        f = Ds(d),
        g = function () {
          for (var k = {}, m = 0; m < e.length; ++m) {
            var n = Es(e[m], f);
            if (!n) return {};
            var p = ls(n);
            if (p.length) {
              var q = p.sort(function (r, t) {
                return Is(t) - Is(r);
              })[0];
              k[n] = js(q);
            }
          }
          return k;
        };
      ys(
        function () {
          Lr(g, a, b, c);
        },
        ["ad_storage"]
      );
    }
  }
  function Ks(a) {
    return a.filter(function (b) {
      return ts.test(b.T);
    });
  }
  function ct(a, b) {
    if (Gq(z)) {
      for (var c = Ds(b.prefix), d = {}, e = 0; e < a.length; e++)
        vs[a[e]] && (d[a[e]] = vs[a[e]]);
      ys(function () {
        ib(d, function (f, g) {
          var k = Hq(c + g, B.cookie, void 0, ws());
          k.sort(function (t, v) {
            return Ys(v) - Ys(t);
          });
          if (k.length) {
            var m = k[0],
              n = Ys(m),
              p = $s(m.split(".")).length !== 0 ? m.split(".").slice(3) : [],
              q = {},
              r;
            r = $s(m.split(".")).length !== 0 ? m.split(".")[2] : void 0;
            q[f] = [r];
            Us(q, !0, b, n, p);
          }
        });
      }, ws());
    }
  }
  function dt(a) {
    var b = ["ag"],
      c = ["gbraid"];
    ys(
      function () {
        for (var d = Ds(a.prefix), e = 0; e < b.length; ++e) {
          var f = Es(b[e], d);
          if (!f) break;
          var g = ls(f);
          if (g.length) {
            var k = g.sort(function (q, r) {
                return Is(r) - Is(q);
              })[0],
              m = Is(k),
              n = k.b,
              p = {};
            p[c[e]] = k.k;
            Us(p, !0, a, m, n);
          }
        }
      },
      ["ad_storage"]
    );
  }
  function et(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  function ft(a) {
    function b(k, m, n) {
      n && (k[m] = n);
    }
    if (sm()) {
      var c = Ss(),
        d;
      a.includes("gad_source") &&
        (d = c.gad_source !== void 0 ? c.gad_source : Er(!1)._gs);
      if (et(c, a) || d) {
        var e = {};
        b(e, "gclid", c.gclid);
        b(e, "dclid", c.dclid);
        b(e, "gclsrc", c.gclsrc);
        b(e, "wbraid", c.wbraid);
        b(e, "gbraid", c.gbraid);
        Mr(function () {
          return e;
        }, 3);
        var f = {},
          g = ((f._up = "1"), f);
        b(g, "_gs", d);
        Mr(function () {
          return g;
        }, 1);
      }
    }
  }
  function gt(a) {
    if (!oi(1)) return null;
    var b = Er(!0).gad_source;
    if (b != null) return (z.location.hash = ""), b;
    if (oi(2)) {
      var c = Xj(z.location.href);
      b = Rj(c, "query", !1, void 0, "gad_source");
      if (b != null) return b;
      var d = Ss();
      if (et(d, a)) return "0";
    }
    return null;
  }
  function ht(a) {
    var b = gt(a);
    b != null &&
      Mr(function () {
        var c = {};
        return (c.gad_source = b), c;
      }, 4);
  }
  function it(a, b, c) {
    var d = [];
    if (b.length === 0) return d;
    for (var e = {}, f = 0; f < b.length; f++) {
      var g = b[f],
        k = g.type ? g.type : "gcl";
      (g.labels || []).indexOf(c) === -1
        ? (a.push(0), e[k] || d.push(g))
        : a.push(1);
      e[k] = !0;
    }
    return d;
  }
  function jt(a, b, c, d) {
    var e = [];
    c = c || {};
    if (!xs(ws())) return e;
    var f = As(a),
      g = it(e, f, b);
    if (g.length && !d)
      for (var k = l(g), m = k.next(); !m.done; m = k.next()) {
        var n = m.value,
          p = n.timestamp,
          q = [n.version, Math.round(p / 1e3), n.T]
            .concat(n.labels || [], [b])
            .join("."),
          r = br(c, p, !0);
        r.Kb = ws();
        Sq(a, q, r);
      }
    return e;
  }
  function kt(a, b) {
    var c = [];
    b = b || {};
    var d = Cs(b),
      e = it(c, d, a);
    if (e.length)
      for (var f = l(e), g = f.next(); !g.done; g = f.next()) {
        var k = g.value,
          m = Ds(b.prefix),
          n = Es(k.type, m);
        if (!n) break;
        var p = k,
          q = p.version,
          r = p.T,
          t = p.labels,
          v = p.timestamp,
          u = Math.round(v / 1e3);
        if (k.type === "ag") {
          var w = {},
            x = ((w.k = r), (w.i = "" + u), (w.b = (t || []).concat([a])), w);
          ns(n, x, b, v);
        } else if (k.type === "gb") {
          var y = [q, u, r].concat(t || [], [a]).join("."),
            A = br(b, v, !0);
          A.Kb = ws();
          Sq(n, y, A);
        }
      }
    return c;
  }
  function lt(a, b) {
    var c = Ds(b),
      d = Es(a, c);
    if (!d) return 0;
    var e;
    e = a === "ag" ? Fs(d) : As(d);
    for (var f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
    return f;
  }
  function mt(a) {
    for (var b = 0, c = l(Object.keys(a)), d = c.next(); !d.done; d = c.next())
      for (var e = a[d.value], f = 0; f < e.length; f++)
        b = Math.max(b, Number(e[f].timestamp));
    return b;
  }
  function nt(a) {
    var b = Math.max(lt("aw", a), mt(xs(ws()) ? qs() : {})),
      c = Math.max(lt("gb", a), mt(xs(ws()) ? qs("_gac_gb", !0) : {}));
    c = Math.max(c, lt("ag", a));
    return c > b;
  }
  function Et() {
    return fo("dedupe_gclid", function () {
      return Zq();
    });
  }
  var Ft = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
    Gt = /^www.googleadservices.com$/;
  function Ht(a) {
    a || (a = It());
    return a.Gn
      ? !1
      : a.Dm || a.Em || a.Hm || a.Fm || a.kf || a.om || a.Gm || a.vm
      ? !0
      : !1;
  }
  function It() {
    var a = {},
      b = Er(!0);
    a.Gn = !!b._up;
    var c = Ss();
    a.Dm = c.aw !== void 0;
    a.Em = c.dc !== void 0;
    a.Hm = c.wbraid !== void 0;
    a.Fm = c.gbraid !== void 0;
    a.Gm = c.gclsrc === "aw.ds";
    a.kf = qt().kf;
    var d = B.referrer ? Rj(Xj(B.referrer), "host") : "";
    a.vm = Ft.test(d);
    a.om = Gt.test(d);
    return a;
  }
  var Jt = RegExp(
      "^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"
    ),
    Kt = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    Lt = /^\d+\.fls\.doubleclick\.net$/,
    Mt = /;gac=([^;?]+)/,
    Nt = /;gacgb=([^;?]+)/;
  function Ot(a, b) {
    if (Lt.test(B.location.host)) {
      var c = B.location.href.match(b);
      return c && c.length === 2 && c[1].match(Jt)
        ? decodeURIComponent(c[1])
        : "";
    }
    for (
      var d = [], e = l(Object.keys(a)), f = e.next();
      !f.done;
      f = e.next()
    ) {
      for (var g = f.value, k = [], m = a[g], n = 0; n < m.length; n++)
        k.push(m[n].T);
      d.push(g + ":" + k.join(","));
    }
    return d.length > 0 ? d.join(";") : "";
  }
  function Pt(a, b, c) {
    for (
      var d = xs(ws()) ? qs("_gac_gb", !0) : {},
        e = [],
        f = !1,
        g = l(Object.keys(d)),
        k = g.next();
      !k.done;
      k = g.next()
    ) {
      var m = k.value,
        n = jt("_gac_gb_" + m, a, b, c);
      f =
        f ||
        (n.length !== 0 &&
          n.some(function (p) {
            return p === 1;
          }));
      e.push(m + ":" + n.join(","));
    }
    return { mm: f ? e.join(";") : "", lm: Ot(d, Nt) };
  }
  function Qt(a) {
    var b = B.location.href.match(new RegExp(";" + a + "=([^;?]+)"));
    return b && b.length === 2 && b[1].match(Kt) ? b[1] : void 0;
  }
  function Rt(a) {
    var b = oi(9),
      c = {},
      d,
      e,
      f;
    Lt.test(B.location.host) &&
      ((d = Qt("gclgs")), (e = Qt("gclst")), b && (f = Qt("gcllp")));
    if (d && e && (!b || f)) (c.ug = d), (c.wg = e), (c.vg = f);
    else {
      var g = qb(),
        k = Fs((a || "_gcl") + "_gs"),
        m = k.map(function (q) {
          return q.T;
        }),
        n = k.map(function (q) {
          return g - q.timestamp;
        }),
        p = [];
      b &&
        (p = k.map(function (q) {
          return q.Sd;
        }));
      m.length > 0 &&
        n.length > 0 &&
        (!b || p.length > 0) &&
        ((c.ug = m.join(".")),
        (c.wg = n.join(".")),
        b && p.length > 0 && (c.vg = p.join(".")));
    }
    return c;
  }
  function St(a, b, c, d) {
    d = d === void 0 ? !1 : d;
    if (Lt.test(B.location.host)) {
      var e = Qt(c);
      if (e) return [{ T: e }];
    } else {
      if (b === "gclid") {
        var f = (a || "_gcl") + "_aw";
        return d ? Os(f) : As(f);
      }
      if (b === "wbraid") return As((a || "_gcl") + "_gb");
      if (b === "braids") return Cs({ prefix: a });
    }
    return [];
  }
  function Tt(a) {
    return St(a, "gclid", "gclaw")
      .map(function (b) {
        return b.T;
      })
      .join(".");
  }
  function Ut(a) {
    var b = St(a, "gclid", "gclaw", !0),
      c = b
        .map(function (f) {
          return f.T;
        })
        .join("."),
      d = b
        .map(function (f) {
          return f.Qa || 0;
        })
        .join("."),
      e = b
        .map(function (f) {
          for (
            var g = 0, k = l(f.Yc || []), m = k.next();
            !m.done;
            m = k.next()
          ) {
            var n = m.value;
            n === 1 && (g |= 1);
            n === 2 && (g |= 2);
          }
          return g.toString();
        })
        .join(".");
    return { T: c, qk: d, rk: e };
  }
  function Vt(a) {
    return St(a, "braids", "gclgb")
      .map(function (b) {
        return b.T;
      })
      .join(".");
  }
  function Wt(a) {
    return Lt.test(B.location.host) ? !(Qt("gclaw") || Qt("gac")) : nt(a);
  }
  function Xt(a, b, c) {
    var d;
    d = c ? kt(a, b) : jt(((b && b.prefix) || "_gcl") + "_gb", a, b);
    return d.length === 0 ||
      d.every(function (e) {
        return e === 0;
      })
      ? ""
      : d.join(".");
  }
  function Yt() {
    var a = z.__uspapi;
    if (ab(a)) {
      var b = "";
      try {
        a("getUSPData", 1, function (c, d) {
          if (d && c) {
            var e = c.uspString;
            e && RegExp("^[\\da-zA-Z-]{1,20}$").test(e) && (b = e);
          }
        });
      } catch (c) {}
      return b;
    }
  }
  function iu(a) {
    var b = T(a.m, N.g.Sb),
      c = T(a.m, N.g.nc);
    b && !c
      ? (a.eventName !== N.g.ba && a.eventName !== N.g.bd && S(131),
        (a.isAborted = !0))
      : !b && c && (S(132), (a.isAborted = !0));
  }
  function ju(a) {
    var b = V(N.g.N) ? eo.pscdl : "denied";
    b != null && X(a, N.g.Of, b);
  }
  function ku(a) {
    var b = Uk(!0);
    X(a, N.g.Rb, b);
  }
  function lu(a) {
    Bq() && X(a, N.g.Jc, 1);
  }
  function au() {
    var a = B.title;
    if (a === void 0 || a === "") return "";
    var b = function (d) {
      try {
        return decodeURIComponent(d), !0;
      } catch (e) {
        return !1;
      }
    };
    a = encodeURIComponent(a);
    for (var c = 256; c > 0 && !b(a.substring(0, c)); ) c--;
    return decodeURIComponent(a.substring(0, c));
  }
  function mu(a) {
    nu(a, "ce", T(a.m, N.g.Ha));
  }
  function nu(a, b, c) {
    a.j[N.g.Hd] || X(a, N.g.Hd, {});
    a.j[N.g.Hd][b] = c;
  }
  function qu(a) {
    var b,
      c = z,
      d = [];
    try {
      c.navigation && c.navigation.entries && (d = c.navigation.entries());
    } catch (k) {}
    b = d;
    for (var e = b.length - 1; e >= 0; e--) {
      var f = b[e],
        g = f.url && f.url.match("[?&#]" + a + "=([^&#]+)");
      if (g && g.length === 2) return g[1];
    }
  }
  function zu(a, b, c, d) {
    var e = qc(),
      f;
    if (e === 1)
      a: {
        var g = mj;
        g = g.toLowerCase();
        for (
          var k = "https://" + g,
            m = "http://" + g,
            n = 1,
            p = B.getElementsByTagName("script"),
            q = 0;
          q < p.length && q < 100;
          q++
        ) {
          var r = p[q].src;
          if (r) {
            r = r.toLowerCase();
            if (r.indexOf(m) === 0) {
              f = 3;
              break a;
            }
            n === 1 && r.indexOf(k) === 0 && (n = 2);
          }
        }
        f = n;
      }
    else f = e;
    return (f === 2 || d || "http:" !== z.location.protocol ? a : b) + c;
  }
  function Au(a) {
    return typeof a !== "object" || a === null ? {} : a;
  }
  function Bu(a) {
    return a === void 0 || a === null
      ? ""
      : typeof a === "object"
      ? a.toString()
      : String(a);
  }
  function Cu(a) {
    if (a !== void 0 && a !== null) return Bu(a);
  }
  function Du(a) {
    return typeof a === "number" ? a : Cu(a);
  }
  function Pu(a) {
    return {
      getDestinationId: function () {
        return a.target.destinationId;
      },
      getEventName: function () {
        return a.eventName;
      },
      setEventName: function (b) {
        a.eventName = b;
      },
      getHitData: function (b) {
        return a.j[b];
      },
      setHitData: function (b, c) {
        X(a, b, c);
      },
      setHitDataIfNotDefined: function (b, c) {
        a.j[b] === void 0 && X(a, b, c);
      },
      copyToHitData: function (b, c) {
        a.copyToHitData(b, c);
      },
      getMetadata: function (b) {
        return a.metadata[b];
      },
      setMetadata: function (b, c) {
        W(a, b, c);
      },
      isAborted: function () {
        return a.isAborted;
      },
      abort: function () {
        a.isAborted = !0;
      },
      getFromEventContext: function (b) {
        return T(a.m, b);
      },
      Xb: function () {
        return a;
      },
      getHitKeys: function () {
        return Object.keys(a.j);
      },
    };
  }
  function Wu(a, b) {
    return arguments.length === 1 ? Xu("set", a) : Xu("set", a, b);
  }
  function Yu(a, b) {
    return arguments.length === 1 ? Xu("config", a) : Xu("config", a, b);
  }
  function Zu(a, b, c) {
    c = c || {};
    c[N.g.oc] = a;
    return Xu("event", b, c);
  }
  function Xu() {
    return arguments;
  }
  var av = function () {
    this.messages = [];
    this.j = [];
  };
  av.prototype.enqueue = function (a, b, c) {
    var d = this.messages.length + 1;
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    var e = Object.assign({}, c, {
        eventId: b,
        priorityId: d,
        fromContainerExecution: !0,
      }),
      f = { message: a, notBeforeEventId: b, priorityId: d, messageContext: e };
    this.messages.push(f);
    for (var g = 0; g < this.j.length; g++)
      try {
        this.j[g](f);
      } catch (k) {}
  };
  av.prototype.listen = function (a) {
    this.j.push(a);
  };
  av.prototype.get = function () {
    for (var a = {}, b = 0; b < this.messages.length; b++) {
      var c = this.messages[b],
        d = a[c.notBeforeEventId];
      d || ((d = []), (a[c.notBeforeEventId] = d));
      d.push(c);
    }
    return a;
  };
  av.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.messages.length; d++) {
      var e = this.messages[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.messages = c;
    return b;
  };
  function bv(a, b, c) {
    c.eventMetadata = c.eventMetadata || {};
    c.eventMetadata.source_canonical_id = Uf.canonicalContainerId;
    cv().enqueue(a, b, c);
  }
  function dv() {
    var a = ev;
    cv().listen(a);
  }
  function cv() {
    return fo("mb", function () {
      return new av();
    });
  }
  var fv,
    gv = !1;
  function hv() {
    gv = !0;
    fv = fv || {};
  }
  function iv(a) {
    gv || hv();
    return fv[a];
  }
  function jv() {
    var a = z.screen;
    return { width: a ? a.width : 0, height: a ? a.height : 0 };
  }
  function kv(a) {
    if (B.hidden) return !0;
    var b = a.getBoundingClientRect();
    if (b.top === b.bottom || b.left === b.right || !z.getComputedStyle)
      return !0;
    var c = z.getComputedStyle(a, null);
    if (c.visibility === "hidden") return !0;
    for (var d = a, e = c; d; ) {
      if (e.display === "none") return !0;
      var f = e.opacity,
        g = e.filter;
      if (g) {
        var k = g.indexOf("opacity(");
        k >= 0 &&
          ((g = g.substring(k + 8, g.indexOf(")", k))),
          g.charAt(g.length - 1) === "%" && (g = g.substring(0, g.length - 1)),
          (f = String(Math.min(Number(g), Number(f)))));
      }
      if (f !== void 0 && Number(f) <= 0) return !0;
      (d = d.parentElement) && (e = z.getComputedStyle(d, null));
    }
    return !1;
  }
  var mv = function (a) {
      var b = lv(),
        c = b.height,
        d = b.width,
        e = a.getBoundingClientRect(),
        f = e.bottom - e.top,
        g = e.right - e.left;
      return f && g
        ? (1 -
            Math.min(
              (Math.max(0 - e.left, 0) + Math.max(e.right - d, 0)) / g,
              1
            )) *
            (1 -
              Math.min(
                (Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f,
                1
              ))
        : 0;
    },
    lv = function () {
      var a = B.body,
        b = B.documentElement || (a && a.parentElement),
        c,
        d;
      if (B.compatMode && B.compatMode !== "BackCompat")
        (c = b ? b.clientHeight : 0), (d = b ? b.clientWidth : 0);
      else {
        var e = function (f, g) {
          return f && g ? Math.min(f, g) : Math.max(f, g);
        };
        c = e(b ? b.clientHeight : 0, a ? a.clientHeight : 0);
        d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0);
      }
      return { width: d, height: c };
    };
  var pv = function (a) {
      if (nv) {
        if (a >= 0 && a < ov.length && ov[a]) {
          var b;
          (b = ov[a]) == null || b.disconnect();
          ov[a] = void 0;
        }
      } else z.clearInterval(a);
    },
    sv = function (a, b, c) {
      for (var d = 0; d < c.length; d++)
        c[d] > 1 ? (c[d] = 1) : c[d] < 0 && (c[d] = 0);
      if (nv) {
        var e = !1;
        F(function () {
          e || qv(a, b, c)();
        });
        return rv(
          function (f) {
            e = !0;
            for (var g = { rf: 0 }; g.rf < f.length; g = { rf: g.rf }, g.rf++)
              F(
                (function (k) {
                  return function () {
                    a(f[k.rf]);
                  };
                })(g)
              );
          },
          b,
          c
        );
      }
      return z.setInterval(qv(a, b, c), 1e3);
    },
    qv = function (a, b, c) {
      function d(k, m) {
        var n = { top: 0, bottom: 0, right: 0, left: 0, width: 0, height: 0 },
          p = {
            boundingClientRect: k.getBoundingClientRect(),
            intersectionRatio: m,
            intersectionRect: n,
            isIntersecting: m > 0,
            rootBounds: n,
            target: k,
            time: qb(),
          };
        F(function () {
          a(p);
        });
      }
      for (var e = [], f = [], g = 0; g < b.length; g++) e.push(0), f.push(-1);
      c.sort(function (k, m) {
        return k - m;
      });
      return function () {
        for (var k = 0; k < b.length; k++) {
          var m = mv(b[k]);
          if (m > e[k])
            for (; f[k] < c.length - 1 && m >= c[f[k] + 1]; )
              d(b[k], m), f[k]++;
          else if (m < e[k])
            for (; f[k] >= 0 && m <= c[f[k]]; ) d(b[k], m), f[k]--;
          e[k] = m;
        }
      };
    },
    rv = function (a, b, c) {
      for (
        var d = new z.IntersectionObserver(a, { threshold: c }), e = 0;
        e < b.length;
        e++
      )
        d.observe(b[e]);
      for (var f = 0; f < ov.length; f++) if (!ov[f]) return (ov[f] = d), f;
      return ov.push(d) - 1;
    },
    ov = [],
    nv = !(!z.IntersectionObserver || !z.IntersectionObserverEntry);
  var Qf;
  var zw = Number("") || 5,
    Aw = Number("") || 50,
    Bw = fb();
  var Dw = function (a, b) {
      a &&
        (Cw("sid", a.targetId, b),
        Cw("cc", a.clientCount, b),
        Cw("tl", a.totalLifeMs, b),
        Cw("hc", a.heartbeatCount, b),
        Cw("cl", a.clientLifeMs, b));
    },
    Cw = function (a, b, c) {
      b != null && c.push(a + "=" + b);
    },
    Ew = function () {
      var a = B.referrer;
      if (a) {
        var b;
        return Rj(Xj(a), "host") ===
          ((b = z.location) == null ? void 0 : b.host)
          ? 1
          : 2;
      }
      return 0;
    },
    Fw = function (a) {
      this.P = a;
      this.H = 0;
    };
  Fw.prototype.C = function (a, b, c, d) {
    var e = Ew(),
      f,
      g = [];
    f =
      z === z.top && e !== 0 && b
        ? (b == null ? void 0 : b.clientCount) > 1
          ? e === 2
            ? 1
            : 2
          : e === 2
          ? 0
          : 3
        : 4;
    a && Cw("si", a.uf, g);
    Cw("m", 0, g);
    Cw("iss", f, g);
    Cw("if", c, g);
    Dw(b, g);
    d && Cw("fm", encodeURIComponent(d.substring(0, Aw)), g);
    this.K(g);
  };
  Fw.prototype.j = function (a, b, c, d, e) {
    var f = [];
    Cw("m", 1, f);
    Cw("s", a, f);
    Cw("po", Ew(), f);
    b && (Cw("st", b.state, f), Cw("si", b.uf, f), Cw("sm", b.Gf, f));
    Dw(c, f);
    Cw("c", d, f);
    e && Cw("fm", encodeURIComponent(e.substring(0, Aw)), f);
    this.K(f);
  };
  Fw.prototype.K = function (a) {
    a = a === void 0 ? [] : a;
    !ok ||
      this.H >= zw ||
      (Cw("pid", Bw, a),
      Cw("bc", ++this.H, a),
      a.unshift("ctid=" + Uf.ctid + "&t=s"),
      this.P("https://www.googletagmanager.com/a?" + a.join("&")));
  };
  var Gw = Number("") || 500,
    Hw = Number("") || 5e3,
    Iw = Number("20") || 10,
    Jw = Number("") || 5e3;
  function Kw(a) {
    return (a.performance && a.performance.now()) || Date.now();
  }
  var Lw = function (a, b) {
    var c;
    var d = function (e, f, g) {
      g = g === void 0 ? {} : g;
      this.Ml = e;
      this.j = f;
      this.H = g;
      this.X = this.oa = this.heartbeatCount = this.Ll = 0;
      this.Qj = !1;
      this.C = {};
      this.id = String(Math.floor(Number.MAX_SAFE_INTEGER * Math.random()));
      this.state = 0;
      this.uf = Kw(this.j);
      this.Gf = Kw(this.j);
      this.P = 10;
    };
    d.prototype.init = function () {
      this.K(1);
      this.fb();
    };
    d.prototype.getState = function () {
      return {
        state: this.state,
        uf: Math.round(Kw(this.j) - this.uf),
        Gf: Math.round(Kw(this.j) - this.Gf),
      };
    };
    d.prototype.K = function (e) {
      this.state !== e && ((this.state = e), (this.Gf = Kw(this.j)));
    };
    d.prototype.Tj = function () {
      return String(this.Ll++);
    };
    d.prototype.fb = function () {
      var e = this;
      this.heartbeatCount++;
      this.uc(
        {
          type: 0,
          clientId: this.id,
          requestId: this.Tj(),
          maxDelay: this.Rj(),
        },
        function (f) {
          if (f.type === 0) {
            var g;
            if (((g = f.failure) == null ? void 0 : g.failureType) != null)
              if (
                (f.stats && (e.stats = f.stats), e.X++, f.isDead || e.X > Iw)
              ) {
                var k = f.isDead && f.failure.failureType;
                e.P = k || 10;
                e.K(4);
                e.Kl();
                var m, n;
                (n = (m = e.H).Zm) == null ||
                  n.call(m, { failureType: k, data: f.failure.data });
              } else e.K(3), e.Vj();
            else {
              if (e.heartbeatCount > f.stats.heartbeatCount + Iw) {
                e.heartbeatCount = f.stats.heartbeatCount;
                var p, q;
                (q = (p = e.H).onFailure) == null ||
                  q.call(p, { failureType: 13 });
              }
              e.stats = f.stats;
              var r = e.state;
              e.K(2);
              if (r !== 2)
                if (e.Qj) {
                  var t, v;
                  (v = (t = e.H).po) == null || v.call(t);
                } else {
                  e.Qj = !0;
                  var u, w;
                  (w = (u = e.H).bn) == null || w.call(u);
                }
              e.X = 0;
              e.Ol();
              e.Vj();
            }
          }
        }
      );
    };
    d.prototype.Rj = function () {
      return this.state === 2 ? Hw : Gw;
    };
    d.prototype.Vj = function () {
      var e = this;
      this.j.setTimeout(function () {
        e.fb();
      }, Math.max(0, this.Rj() - (Kw(this.j) - this.oa)));
    };
    d.prototype.Rl = function (e, f, g) {
      var k = this;
      this.uc(
        { type: 1, clientId: this.id, requestId: this.Tj(), command: e },
        function (m) {
          if (m.type === 1)
            if (m.result) f(m.result);
            else {
              var n,
                p,
                q,
                r = {
                  failureType:
                    (q = (n = m.failure) == null ? void 0 : n.failureType) !=
                    null
                      ? q
                      : 12,
                  data: (p = m.failure) == null ? void 0 : p.data,
                },
                t,
                v;
              (v = (t = k.H).onFailure) == null || v.call(t, r);
              g(r);
            }
        }
      );
    };
    d.prototype.uc = function (e, f) {
      var g = this;
      if (this.state === 4) (e.failure = { failureType: this.P }), f(e);
      else {
        var k = this.state !== 2 && e.type !== 0,
          m = e.requestId,
          n,
          p = this.j.setTimeout(
            function () {
              var r = g.C[m];
              r && g.Pj(r, 7);
            },
            (n = e.maxDelay) != null ? n : Jw
          ),
          q = { request: e, Gk: f, Ck: k, Vm: p };
        this.C[m] = q;
        k || this.sendRequest(q);
      }
    };
    d.prototype.sendRequest = function (e) {
      this.oa = Kw(this.j);
      e.Ck = !1;
      this.Ml(e.request);
    };
    d.prototype.Ol = function () {
      for (
        var e = l(Object.keys(this.C)), f = e.next();
        !f.done;
        f = e.next()
      ) {
        var g = this.C[f.value];
        g.Ck && this.sendRequest(g);
      }
    };
    d.prototype.Kl = function () {
      for (var e = l(Object.keys(this.C)), f = e.next(); !f.done; f = e.next())
        this.Pj(this.C[f.value], this.P);
    };
    d.prototype.Pj = function (e, f) {
      this.lg(e);
      var g = e.request;
      g.failure = { failureType: f };
      e.Gk(g);
    };
    d.prototype.lg = function (e) {
      delete this.C[e.request.requestId];
      this.j.clearTimeout(e.Vm);
    };
    d.prototype.Bm = function (e) {
      this.oa = Kw(this.j);
      var f = this.C[e.requestId];
      if (f) this.lg(f), f.Gk(e);
      else {
        var g, k;
        (k = (g = this.H).onFailure) == null || k.call(g, { failureType: 14 });
      }
    };
    c = new d(a, z, b);
    return c;
  };
  var Mw;
  var Nw = function () {
      Mw ||
        (Mw = new Fw(function (a) {
          return void tc(a);
        }));
      return Mw;
    },
    Ow = function (a) {
      var b = a.substring(0, a.indexOf("/_/service_worker"));
      return "&1p=1" + (b ? "&path=" + encodeURIComponent(b) : "");
    },
    Pw = function (a) {
      var b = a,
        c = uj.oa;
      b
        ? (b.charAt(b.length - 1) !== "/" && (b += "/"), (a = b + c))
        : (a =
            "https://www.googletagmanager.com/static/service_worker/" +
            c +
            "/");
      var d;
      try {
        d = new URL(a);
      } catch (e) {
        return null;
      }
      return d.protocol !== "https:" ? null : d;
    },
    Qw = function (a) {
      var b = po(ko.Zj);
      return b && b[a];
    },
    Rw = function (a, b, c, d, e) {
      var f = this;
      this.C = d;
      this.P = this.K = !1;
      this.X = null;
      this.initTime = c;
      this.j = 15;
      this.H = this.Yl(a);
      z.setTimeout(function () {
        f.initialize();
      }, 1e3);
      F(function () {
        f.Lm(a, b, e);
      });
    };
  h = Rw.prototype;
  h.delegate = function (a, b, c) {
    this.getState() !== 2
      ? (this.C.j(
          this.j,
          {
            state: this.getState(),
            uf: this.initTime,
            Gf: Math.round(qb()) - this.initTime,
          },
          void 0,
          a.commandType
        ),
        c({ failureType: this.j }))
      : this.H.Rl(a, b, c);
  };
  h.getState = function () {
    return this.H.getState().state;
  };
  h.Lm = function (a, b, c) {
    var d = z.location.origin,
      e = this,
      f = rc();
    try {
      var g = f.contentDocument.createElement("iframe"),
        k = a.pathname,
        m = k[k.length - 1] === "/" ? a.toString() : a.toString() + "/",
        n = b ? Ow(k) : "",
        p;
      Q(120) && (p = { sandbox: "allow-same-origin allow-scripts" });
      rc(
        m +
          "sw_iframe.html?origin=" +
          encodeURIComponent(d) +
          n +
          (c ? "&e=1" : ""),
        void 0,
        p,
        void 0,
        g
      );
      var q = function () {
        f.contentDocument.body.appendChild(g);
        g.addEventListener("load", function () {
          e.X = g.contentWindow;
          f.contentWindow.addEventListener("message", function (r) {
            r.origin === a.origin && e.H.Bm(r.data);
          });
          e.initialize();
        });
      };
      f.contentDocument.readyState === "complete"
        ? q()
        : f.contentWindow.addEventListener("load", function () {
            q();
          });
    } catch (r) {
      f.parentElement.removeChild(f),
        (this.j = 11),
        this.C.C(void 0, void 0, this.j, r.toString());
    }
  };
  h.Yl = function (a) {
    var b = this,
      c = Lw(
        function (d) {
          var e;
          (e = b.X) == null || e.postMessage(d, a.origin);
        },
        {
          bn: function () {
            b.K = !0;
            b.C.C(c.getState(), c.stats);
          },
          Zm: function (d) {
            b.K
              ? ((b.j = (d == null ? void 0 : d.failureType) || 10),
                b.C.j(
                  b.j,
                  c.getState(),
                  c.stats,
                  void 0,
                  d == null ? void 0 : d.data
                ))
              : ((b.j = (d == null ? void 0 : d.failureType) || 4),
                b.C.C(c.getState(), c.stats, b.j, d == null ? void 0 : d.data));
          },
          onFailure: function (d) {
            b.j = d.failureType;
            b.C.j(b.j, c.getState(), c.stats, d.command, d.data);
          },
        }
      );
    return c;
  };
  h.initialize = function () {
    this.P || this.H.init();
    this.P = !0;
  };
  function Sw() {
    var a = Tf(Qf.j, "", function () {
      return {};
    });
    try {
      return a("internal_sw_allowed"), !0;
    } catch (b) {
      return !1;
    }
  }
  function Tw(a, b, c) {
    c = c === void 0 ? !1 : c;
    var d = z.location.origin;
    if (!d || !Sw()) return;
    yj() && (a = "" + d + xj() + "/_/service_worker");
    var e = Pw(a);
    if (e === null || Qw(e.origin)) return;
    if (!gc()) {
      Nw().C(void 0, void 0, 6);
      return;
    }
    var f = new Rw(e, !!a, b || Math.round(qb()), Nw(), c),
      g;
    a: {
      var k = ko.Zj,
        m = {},
        n = no(k);
      if (!n) {
        n = no(k, !0);
        if (!n) {
          g = void 0;
          break a;
        }
        n.set(m);
      }
      g = n.get();
    }
    g[e.origin] = f;
  }
  var Uw = function (a, b, c, d) {
    var e;
    if ((e = Qw(a)) == null || !e.delegate) {
      var f = gc() ? 16 : 6;
      Nw().j(f, void 0, void 0, b.commandType);
      d({ failureType: f });
      return;
    }
    Qw(a).delegate(b, c, d);
  };
  function Vw(a, b, c, d, e) {
    var f = Pw();
    if (f === null) {
      d(gc() ? 16 : 6);
      return;
    }
    var g,
      k = (g = Qw(f.origin)) == null ? void 0 : g.initTime,
      m = Math.round(qb()),
      n = {
        commandType: 0,
        params: {
          url: a,
          method: 0,
          templates: b,
          body: "",
          processResponse: !1,
          sinceInit: k ? m - k : void 0,
        },
      };
    e && (n.params.encryptionKeyString = e);
    Uw(
      f.origin,
      n,
      function (p) {
        c(p);
      },
      function (p) {
        d(p.failureType);
      }
    );
  }
  function Ww(a, b, c, d) {
    var e = Pw(a);
    if (e === null) {
      d("_is_sw=f" + (gc() ? 16 : 6) + "te");
      return;
    }
    var f = b ? 1 : 0,
      g = Math.round(qb()),
      k,
      m = (k = Qw(e.origin)) == null ? void 0 : k.initTime,
      n = m ? g - m : void 0;
    Uw(
      e.origin,
      {
        commandType: 0,
        params: {
          url: a,
          method: f,
          templates: c,
          body: b || "",
          processResponse: !0,
          sinceInit: n,
          attributionReporting: !0,
        },
      },
      function () {},
      function (p) {
        var q = "_is_sw=f" + p.failureType,
          r,
          t = (r = Qw(e.origin)) == null ? void 0 : r.getState();
        t !== void 0 && (q += "s" + t);
        d(n ? q + ("t" + n) : q + "te");
      }
    );
  }
  var Xw =
    "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(
      " "
    );
  function Yw(a) {
    var b;
    return (b = a.google_tag_data) != null ? b : (a.google_tag_data = {});
  }
  function Zw() {
    var a = z.google_tag_data,
      b;
    if (a != null && a.uach) {
      var c = a.uach,
        d = Object.assign({}, c);
      c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
      b = d;
    } else b = null;
    return b;
  }
  function $w() {
    var a, b;
    return (b = (a = z.google_tag_data) == null ? void 0 : a.uach_promise) !=
      null
      ? b
      : null;
  }
  function ax(a) {
    var b, c;
    return (
      typeof ((b = a.navigator) == null
        ? void 0
        : (c = b.userAgentData) == null
        ? void 0
        : c.getHighEntropyValues) === "function"
    );
  }
  function bx() {
    var a = z;
    if (!ax(a)) return null;
    var b = Yw(a);
    if (b.uach_promise) return b.uach_promise;
    var c = a.navigator.userAgentData
      .getHighEntropyValues(Xw)
      .then(function (d) {
        b.uach != null || (b.uach = d);
        return d;
      });
    return (b.uach_promise = c);
  }
  var dx = function (a, b) {
      if (a)
        for (
          var c = cx(a), d = l(Object.keys(c)), e = d.next();
          !e.done;
          e = d.next()
        ) {
          var f = e.value;
          X(b, f, c[f]);
        }
    },
    cx = function (a) {
      var b = {};
      b[N.g.Ge] = a.architecture;
      b[N.g.He] = a.bitness;
      a.fullVersionList &&
        (b[N.g.Ie] = a.fullVersionList
          .map(function (c) {
            return (
              encodeURIComponent(c.brand || "") +
              ";" +
              encodeURIComponent(c.version || "")
            );
          })
          .join("|"));
      b[N.g.Je] = a.mobile ? "1" : "0";
      b[N.g.Ke] = a.model;
      b[N.g.Le] = a.platform;
      b[N.g.Me] = a.platformVersion;
      b[N.g.Ne] = a.wow64 ? "1" : "0";
      return b;
    },
    fx = function (a) {
      var b = ex.En,
        c = function (g, k) {
          try {
            a(g, k);
          } catch (m) {}
        },
        d = Zw();
      if (d) c(d);
      else {
        var e = $w();
        if (e) {
          b = Math.min(Math.max(isFinite(b) ? b : 0, 0), 1e3);
          var f = z.setTimeout(function () {
            c.vf || ((c.vf = !0), S(106), c(null, Error("Timeout")));
          }, b);
          e.then(function (g) {
            c.vf || ((c.vf = !0), S(104), z.clearTimeout(f), c(g));
          }).catch(function (g) {
            c.vf || ((c.vf = !0), S(105), z.clearTimeout(f), c(null, g));
          });
        } else c(null);
      }
    },
    hx = function () {
      if (ax(z) && ((gx = qb()), !$w())) {
        var a = bx();
        a &&
          (a.then(function () {
            S(95);
          }),
          a.catch(function () {
            S(96);
          }));
      }
    },
    gx;
  function ix(a) {
    var b = a.location.href;
    if (a === a.top) return { url: b, Qm: !0 };
    var c = !1,
      d = a.document;
    d && d.referrer && ((b = d.referrer), a.parent === a.top && (c = !0));
    var e = a.location.ancestorOrigins;
    if (e) {
      var f = e[e.length - 1];
      f && b.indexOf(f) === -1 && ((c = !1), (b = f));
    }
    return { url: b, Qm: c };
  }
  var ay = {
    J: {
      Bi: "ads_conversion_hit",
      be: "container_execute_start",
      Ei: "container_setup_end",
      Fg: "container_setup_start",
      Ci: "container_blocking_end",
      Di: "container_execute_end",
      Fi: "container_yield_end",
      Gg: "container_yield_start",
      Hj: "event_execute_end",
      Gj: "event_evaluation_end",
      uh: "event_evaluation_start",
      Ij: "event_setup_end",
      Pe: "event_setup_start",
      Kj: "ga4_conversion_hit",
      Re: "page_load",
      Zn: "pageview",
      vc: "snippet_load",
      dk: "tag_callback_error",
      ek: "tag_callback_failure",
      fk: "tag_callback_success",
      gk: "tag_execute_end",
      Id: "tag_execute_start",
    },
  };
  function by() {
    function a(c, d) {
      var e = Xa(d);
      e && b.push([c, e]);
    }
    var b = [];
    a("u", "GTM");
    a("ut", "TAGGING");
    a("h", "HEALTH");
    return b;
  }
  var cy = !1;
  function My(a, b) {}
  function Ny(a, b) {}
  function Oy(a, b) {}
  function Py(a, b) {}
  function Qy() {
    var a = {};
    return a;
  }
  function Ey(a) {
    a = a === void 0 ? !0 : a;
    var b = {};
    return b;
  }
  function Ry() {}
  function Sy(a, b) {}
  function Ty(a, b, c) {}
  function Uy() {}
  function vz(a, b) {
    if (data.entities) {
      var c = data.entities[a];
      if (c) return c[b];
    }
  }
  function wz(a, b, c) {
    c = c === void 0 ? !1 : c;
    xz().addRestriction(0, a, b, c);
  }
  function yz(a, b, c) {
    c = c === void 0 ? !1 : c;
    xz().addRestriction(1, a, b, c);
  }
  function zz() {
    var a = Ol();
    return xz().getRestrictions(1, a);
  }
  var Az = function () {
      this.container = {};
      this.j = {};
    },
    Bz = function (a, b) {
      var c = a.container[b];
      c ||
        ((c = {
          _entity: { internal: [], external: [] },
          _event: { internal: [], external: [] },
        }),
        (a.container[b] = c));
      return c;
    };
  Az.prototype.addRestriction = function (a, b, c, d) {
    d = d === void 0 ? !1 : d;
    if (!d || !this.j[b]) {
      var e = Bz(this, b);
      a === 0
        ? d
          ? e._entity.external.push(c)
          : e._entity.internal.push(c)
        : a === 1 &&
          (d ? e._event.external.push(c) : e._event.internal.push(c));
    }
  };
  Az.prototype.getRestrictions = function (a, b) {
    var c = Bz(this, b);
    if (a === 0) {
      var d, e;
      return [].concat(
        va(
          (c == null
            ? void 0
            : (d = c._entity) == null
            ? void 0
            : d.internal) || []
        ),
        va(
          (c == null
            ? void 0
            : (e = c._entity) == null
            ? void 0
            : e.external) || []
        )
      );
    }
    if (a === 1) {
      var f, g;
      return [].concat(
        va(
          (c == null ? void 0 : (f = c._event) == null ? void 0 : f.internal) ||
            []
        ),
        va(
          (c == null ? void 0 : (g = c._event) == null ? void 0 : g.external) ||
            []
        )
      );
    }
    return [];
  };
  Az.prototype.getExternalRestrictions = function (a, b) {
    var c = Bz(this, b),
      d,
      e;
    return a === 0
      ? (c == null ? void 0 : (d = c._entity) == null ? void 0 : d.external) ||
          []
      : (c == null ? void 0 : (e = c._event) == null ? void 0 : e.external) ||
          [];
  };
  Az.prototype.removeExternalRestrictions = function (a) {
    var b = Bz(this, a);
    b._event && (b._event.external = []);
    b._entity && (b._entity.external = []);
    this.j[a] = !0;
  };
  function xz() {
    return fo("r", function () {
      return new Az();
    });
  }
  var Cz = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    Dz = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    Ez = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    Fz =
      "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
        " "
      );
  function Gz() {
    var a = Ej("gtm.allowlist") || Ej("gtm.whitelist");
    a && S(9);
    gj && (a = ["google", "gtagfl", "lcl", "zone"]);
    Cz.test(z.location && z.location.hostname) &&
      (gj
        ? S(116)
        : (S(117),
          Hz &&
            ((a = []),
            window.console &&
              window.console.log &&
              window.console.log("GTM blocked. See go/13687728."))));
    var b = a && ub(nb(a), Dz),
      c = Ej("gtm.blocklist") || Ej("gtm.blacklist");
    c || ((c = Ej("tagTypeBlacklist")) && S(3));
    c ? S(8) : (c = []);
    Cz.test(z.location && z.location.hostname) &&
      ((c = nb(c)),
      c.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
    nb(c).indexOf("google") >= 0 && S(2);
    var d = c && ub(nb(c), Ez),
      e = {};
    return function (f) {
      var g = f && f[Qe.qa];
      if (!g || typeof g !== "string") return !0;
      g = g.replace(/^_*/, "");
      if (e[g] !== void 0) return e[g];
      var k = rj[g] || [],
        m = !0;
      if (a) {
        var n;
        if ((n = m))
          a: {
            if (b.indexOf(g) < 0)
              if (k && k.length > 0)
                for (var p = 0; p < k.length; p++) {
                  if (b.indexOf(k[p]) < 0) {
                    S(11);
                    n = !1;
                    break a;
                  }
                }
              else {
                n = !1;
                break a;
              }
            n = !0;
          }
        m = n;
      }
      var q = !1;
      if (c) {
        var r = d.indexOf(g) >= 0;
        if (r) q = r;
        else {
          var t = gb(d, k || []);
          t && S(10);
          q = t;
        }
      }
      var v = !m || q;
      v ||
        !(k.indexOf("sandboxedScripts") >= 0) ||
        (b && b.indexOf("sandboxedScripts") !== -1) ||
        (v = gb(d, Fz));
      return (e[g] = v);
    };
  }
  var Hz = !1;
  Hz = !0;
  function Iz() {
    Dl &&
      wz(Ol(), function (a) {
        var b = Bf(a.entityId),
          c;
        if (Ef(b)) {
          var d = b[Qe.qa];
          if (!d)
            throw Error("Error: No function name given for function call.");
          var e = sf[d];
          c = !!e && !!e.runInSiloedMode;
        } else c = !!vz(b[Qe.qa], 4);
        return c;
      });
  }
  function Jz(a, b, c, d, e) {
    if (!Kz()) {
      var f = d.siloed ? Jl(a) : a;
      if (!Yl(f)) {
        $l(f, d, e);
        var g = Lz(a),
          k = Q(129)
            ? function () {
                zl().container[f] && (zl().container[f].state = 3);
                Mz();
              }
            : void 0,
          m = { destinationId: f, endpoint: 0 };
        if (yj()) ql(m, xj() + "/" + g, void 0, k);
        else {
          var n = vb(a, "GTM-"),
            p = ek(),
            q = c ? "/gtag/js" : "/gtm.js",
            r = dk(b, q + g);
          if (!r) {
            var t = aj.Lf + q;
            p &&
              ic &&
              n &&
              (t = ic.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
            r = zu("https://", "http://", t + g);
          }
          ql(m, r, void 0, k);
        }
      }
    }
  }
  function Mz() {
    bm() ||
      ib(cm(), function (a, b) {
        Nz(a, b.transportUrl, b.context);
        S(92);
      });
  }
  function Nz(a, b, c, d) {
    if (!Kz()) {
      var e = c.siloed ? Jl(a) : a;
      if (!Zl(e))
        if ((!Q(129) && c.siloed) || !bm()) {
          c.siloed && am({ ctid: e, isDestination: !0 });
          zl().destination[e] = { state: 1, context: c, parent: Rl() };
          yl({ ctid: e, isDestination: !0 }, d);
          var f = { destinationId: e, endpoint: 0 };
          if (yj()) ql(f, xj() + ("/gtd" + Lz(a, !0)));
          else {
            var g = "/gtag/destination" + Lz(a, !0),
              k = dk(b, g);
            k || (k = zu("https://", "http://", aj.Lf + g));
            ql(f, k);
          }
        } else
          (zl().destination[e] = {
            state: 0,
            transportUrl: b,
            context: c,
            parent: Rl(),
          }),
            yl({ ctid: e, isDestination: !0 }, d),
            S(91);
    }
  }
  function Lz(a, b) {
    b = b === void 0 ? !1 : b;
    var c = "?id=" + encodeURIComponent(a) + "&l=" + aj.Mb;
    if (!vb(a, "GTM-") || b)
      c = Q(117) ? c + (yj() ? "&sc=1" : "&cx=c") : c + "&cx=c";
    c += "&gtm=" + Eq();
    ek() && (c += "&sign=" + aj.Ah);
    var d = uj.C;
    d === 1 ? (c += "&fps=fc") : d === 2 && (c += "&fps=fe");
    Q(73) && vj() && (c += "&tag_exp=" + vj());
    return c;
  }
  function Kz() {
    if (Cq()) {
      return !0;
    }
    return !1;
  }
  var Oz = function () {
    this.C = 0;
    this.j = {};
  };
  Oz.prototype.addListener = function (a, b, c) {
    var d = ++this.C;
    this.j[a] = this.j[a] || {};
    this.j[a][String(d)] = { listener: b, Lb: c };
    return d;
  };
  Oz.prototype.removeListener = function (a, b) {
    var c = this.j[a],
      d = String(b);
    if (!c || !c[d]) return !1;
    delete c[d];
    return !0;
  };
  var Qz = function (a, b) {
    var c = [];
    ib(Pz.j[a], function (d, e) {
      c.indexOf(e.listener) < 0 &&
        (e.Lb === void 0 || b.indexOf(e.Lb) >= 0) &&
        c.push(e.listener);
    });
    return c;
  };
  function Rz(a, b, c) {
    return {
      entityType: a,
      indexInOriginContainer: b,
      nameInOriginContainer: c,
      originContainerId: Ml(),
    };
  }
  var Tz = function (a, b) {
      this.j = !1;
      this.K = [];
      this.eventData = { tags: [] };
      this.P = !1;
      this.C = this.H = 0;
      Sz(this, a, b);
    },
    Uz = function (a, b, c, d) {
      if (cj.hasOwnProperty(b) || b === "__zone") return -1;
      var e = {};
      Wc(d) && (e = Xc(d, e));
      e.id = c;
      e.status = "timeout";
      return a.eventData.tags.push(e) - 1;
    },
    Vz = function (a, b, c, d) {
      var e = a.eventData.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    Wz = function (a) {
      if (!a.j) {
        for (var b = a.K, c = 0; c < b.length; c++) b[c]();
        a.j = !0;
        a.K.length = 0;
      }
    },
    Sz = function (a, b, c) {
      b !== void 0 && a.Xe(b);
      c &&
        z.setTimeout(function () {
          Wz(a);
        }, Number(c));
    };
  Tz.prototype.Xe = function (a) {
    var b = this,
      c = sb(function () {
        F(function () {
          a(Ml(), b.eventData);
        });
      });
    this.j ? c() : this.K.push(c);
  };
  var Xz = function (a) {
      a.H++;
      return sb(function () {
        a.C++;
        a.P && a.C >= a.H && Wz(a);
      });
    },
    Yz = function (a) {
      a.P = !0;
      a.C >= a.H && Wz(a);
    };
  var Zz = {};
  function $z() {
    return z[aA()];
  }
  function aA() {
    return z.GoogleAnalyticsObject || "ga";
  }
  function dA() {
    var a = Ml();
  }
  function eA(a, b) {
    return function () {
      var c = $z(),
        d = c && c.getByName && c.getByName(a);
      if (d) {
        var e = d.get("sendHitTask");
        d.set("sendHitTask", function (f) {
          var g = f.get("hitPayload"),
            k = f.get("hitCallback"),
            m = g.indexOf("&tid=" + b) < 0;
          m &&
            (f.set(
              "hitPayload",
              g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b),
              !0
            ),
            f.set("hitCallback", void 0, !0));
          e(f);
          m &&
            (f.set("hitPayload", g, !0),
            f.set("hitCallback", k, !0),
            f.set("_x_19", void 0, !0),
            e(f));
        });
      }
    };
  }
  var kA = ["es", "1"],
    lA = {},
    mA = {};
  function nA(a, b) {
    if (ok) {
      var c;
      c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
      lA[a] = [
        ["e", c],
        ["eid", a],
      ];
      wp(a);
    }
  }
  function oA(a) {
    var b = a.eventId,
      c = a.Zc;
    if (!lA[b]) return [];
    var d = [];
    mA[b] || d.push(kA);
    d.push.apply(d, va(lA[b]));
    c && (mA[b] = !0);
    return d;
  }
  var pA = {},
    qA = {},
    rA = {};
  function sA(a, b, c, d) {
    ok &&
      Q(107) &&
      ((d === void 0 ? 0 : d)
        ? ((rA[b] = rA[b] || 0), ++rA[b])
        : c !== void 0
        ? ((qA[a] = qA[a] || {}), (qA[a][b] = Math.round(c)))
        : ((pA[a] = pA[a] || {}), (pA[a][b] = (pA[a][b] || 0) + 1)));
  }
  function tA(a) {
    var b = a.eventId,
      c = a.Zc,
      d = pA[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete pA[b];
    return e.length ? [["md", e.join(".")]] : [];
  }
  function uA(a) {
    var b = a.eventId,
      c = a.Zc,
      d = qA[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete qA[b];
    return e.length ? [["mtd", e.join(".")]] : [];
  }
  function vA() {
    for (
      var a = [], b = l(Object.keys(rA)), c = b.next();
      !c.done;
      c = b.next()
    ) {
      var d = c.value;
      a.push("" + d + rA[d]);
    }
    return a.length ? [["mec", a.join(".")]] : [];
  }
  var wA = {},
    xA = {};
  function yA(a, b, c) {
    if (ok && b) {
      var d = ik(b);
      wA[a] = wA[a] || [];
      wA[a].push(c + d);
      var e = (Ef(b) ? "1" : "2") + d;
      xA[a] = xA[a] || [];
      xA[a].push(e);
      wp(a);
    }
  }
  function zA(a) {
    var b = a.eventId,
      c = a.Zc,
      d = [],
      e = wA[b] || [];
    e.length && d.push(["tr", e.join(".")]);
    var f = xA[b] || [];
    f.length && d.push(["ti", f.join(".")]);
    c && (delete wA[b], delete xA[b]);
    return d;
  }
  function AA(a, b, c, d) {
    var e = qf[a],
      f = BA(a, b, c, d);
    if (!f) return null;
    var g = Ff(e[Qe.bk], c, []);
    if (g && g.length) {
      var k = g[0];
      f = AA(
        k.index,
        {
          onSuccess: f,
          onFailure: k.nk === 1 ? b.terminate : f,
          terminate: b.terminate,
        },
        c,
        d
      );
    }
    return f;
  }
  function BA(a, b, c, d) {
    function e() {
      function w() {
        fn(3);
        var K = qb() - E;
        yA(c.id, f, "7");
        Vz(c.wc, C, "exception", K);
        Q(95) && Ty(c, f, ay.J.dk);
        D || ((D = !0), k());
      }
      if (f[Qe.El]) k();
      else {
        var x = Df(f, c, []),
          y = x[Qe.Uk];
        if (y != null)
          for (var A = 0; A < y.length; A++)
            if (!V(y[A])) {
              k();
              return;
            }
        var C = Uz(c.wc, String(f[Qe.qa]), Number(f[Qe.We]), x[Qe.METADATA]),
          D = !1;
        x.vtp_gtmOnSuccess = function () {
          if (!D) {
            D = !0;
            var K = qb() - E;
            yA(c.id, qf[a], "5");
            Vz(c.wc, C, "success", K);
            Q(95) && Ty(c, f, ay.J.fk);
            g();
          }
        };
        x.vtp_gtmOnFailure = function () {
          if (!D) {
            D = !0;
            var K = qb() - E;
            yA(c.id, qf[a], "6");
            Vz(c.wc, C, "failure", K);
            Q(95) && Ty(c, f, ay.J.ek);
            k();
          }
        };
        x.vtp_gtmTagId = f.tag_id;
        x.vtp_gtmEventId = c.id;
        c.priorityId && (x.vtp_gtmPriorityId = c.priorityId);
        yA(c.id, f, "1");
        Q(95) && Sy(c, f);
        var E = qb();
        try {
          Gf(x, { event: c, index: a, type: 1 });
        } catch (K) {
          w(K);
        }
        Q(95) && Ty(c, f, ay.J.gk);
      }
    }
    var f = qf[a],
      g = b.onSuccess,
      k = b.onFailure,
      m = b.terminate;
    if (c.isBlocked(f)) return null;
    var n = Ff(f[Qe.hk], c, []);
    if (n && n.length) {
      var p = n[0],
        q = AA(p.index, { onSuccess: g, onFailure: k, terminate: m }, c, d);
      if (!q) return null;
      g = q;
      k = p.nk === 2 ? m : q;
    }
    if (f[Qe.Sj] || f[Qe.Gl]) {
      var r = f[Qe.Sj] ? rf : c.xn,
        t = g,
        v = k;
      if (!r[a]) {
        var u = CA(a, r, sb(e));
        g = u.onSuccess;
        k = u.onFailure;
      }
      return function () {
        r[a](t, v);
      };
    }
    return e;
  }
  function CA(a, b, c) {
    var d = [],
      e = [];
    b[a] = DA(d, e, c);
    return {
      onSuccess: function () {
        b[a] = EA;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = FA;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function DA(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function EA(a) {
    a();
  }
  function FA(a, b) {
    b();
  }
  var IA = function (a, b) {
    for (var c = [], d = 0; d < qf.length; d++)
      if (a[d]) {
        var e = qf[d];
        var f = Xz(b.wc);
        try {
          var g = AA(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
          if (g) {
            var k = e[Qe.qa];
            if (!k)
              throw Error("Error: No function name given for function call.");
            var m = sf[k];
            c.push({
              Lk: d,
              Ak: (m ? m.priorityOverride || 0 : 0) || vz(e[Qe.qa], 1) || 0,
              execute: g,
            });
          } else GA(d, b), f();
        } catch (p) {
          f();
        }
      }
    c.sort(HA);
    for (var n = 0; n < c.length; n++) c[n].execute();
    return c.length > 0;
  };
  function JA(a, b) {
    if (!Pz) return !1;
    var c = a["gtm.triggers"] && String(a["gtm.triggers"]),
      d = Qz(a.event, c ? String(c).split(",") : []);
    if (!d.length) return !1;
    for (var e = 0; e < d.length; ++e) {
      var f = Xz(b);
      try {
        d[e](a, f);
      } catch (g) {
        f();
      }
    }
    return !0;
  }
  function HA(a, b) {
    var c,
      d = b.Ak,
      e = a.Ak;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (c !== 0) f = c;
    else {
      var g = a.Lk,
        k = b.Lk;
      f = g > k ? 1 : g < k ? -1 : 0;
    }
    return f;
  }
  function GA(a, b) {
    if (ok) {
      var c = function (d) {
        var e = b.isBlocked(qf[d]) ? "3" : "4",
          f = Ff(qf[d][Qe.bk], b, []);
        f && f.length && c(f[0].index);
        yA(b.id, qf[d], e);
        var g = Ff(qf[d][Qe.hk], b, []);
        g && g.length && c(g[0].index);
      };
      c(a);
    }
  }
  var KA = !1,
    Pz;
  function LA() {
    Pz || (Pz = new Oz());
    return Pz;
  }
  function MA(a) {
    var b = a["gtm.uniqueEventId"],
      c = a["gtm.priorityId"],
      d = a.event;
    if (Q(95)) {
    }
    if (d === "gtm.js") {
      if (KA) return !1;
      KA = !0;
    }
    var e = !1,
      f = zz(),
      g = Xc(a, null);
    if (
      !f.every(function (t) {
        return t({ originalEventData: g });
      })
    ) {
      if (d !== "gtm.js" && d !== "gtm.init" && d !== "gtm.init_consent")
        return !1;
      e = !0;
    }
    nA(b, d);
    var k = a.eventCallback,
      m = a.eventTimeout,
      n = {
        id: b,
        priorityId: c,
        name: d,
        isBlocked: NA(g, e),
        xn: [],
        logMacroError: function () {
          S(6);
          fn(0);
        },
        cachedModelValues: OA(),
        wc: new Tz(function () {
          if (Q(95)) {
          }
          k && k.apply(k, Array.prototype.slice.call(arguments, 0));
        }, m),
        originalEventData: g,
      };
    Q(107) && ok && (n.reportMacroDiscrepancy = sA);
    Q(95) && Oy(n.id, n.name);
    var p = Lf(n);
    Q(95) && Py(n.id, n.name);
    e && (p = PA(p));
    if (Q(95)) {
    }
    var q = IA(p, n),
      r = JA(a, n.wc);
    Yz(n.wc);
    (d !== "gtm.js" && d !== "gtm.sync") || dA();
    return QA(p, q) || r;
  }
  function OA() {
    var a = {};
    a.event = Jj("event", 1);
    a.ecommerce = Jj("ecommerce", 1);
    a.gtm = Jj("gtm");
    a.eventModel = Jj("eventModel");
    return a;
  }
  function NA(a, b) {
    var c = Gz();
    return function (d) {
      if (c(d)) return !0;
      var e = d && d[Qe.qa];
      if (!e || typeof e !== "string") return !0;
      e = e.replace(/^_*/, "");
      var f,
        g = Ol();
      f = xz().getRestrictions(0, g);
      var k = a;
      b &&
        ((k = Xc(a, null)), (k["gtm.uniqueEventId"] = Number.MAX_SAFE_INTEGER));
      for (var m = rj[e] || [], n = l(f), p = n.next(); !p.done; p = n.next()) {
        var q = p.value;
        try {
          if (!q({ entityId: e, securityGroups: m, originalEventData: k }))
            return !0;
        } catch (r) {
          return !0;
        }
      }
      return !1;
    };
  }
  function PA(a) {
    for (var b = [], c = 0; c < a.length; c++)
      if (a[c]) {
        var d = String(qf[c][Qe.qa]);
        if (bj[d] || qf[c][Qe.Hl] !== void 0 || vz(d, 2)) b[c] = !0;
      }
    return b;
  }
  function QA(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && qf[c] && !cj[String(qf[c][Qe.qa])]) return !0;
    return !1;
  }
  function RA() {
    Q(8) &&
      LA().addListener("gtm.init", function (a, b) {
        uj.X = !0;
        Rm();
        b();
      });
  }
  function SA() {
    var a,
      b = Xj(z.location.href);
    (a = b.hostname + b.pathname) && Nm("dl", encodeURIComponent(a));
    var c;
    var d = Uf.ctid;
    if (d) {
      var e = Cl.Qe ? 1 : 0,
        f,
        g = Ql(Rl());
      f = g && g.context;
      c =
        d +
        ";" +
        Uf.canonicalContainerId +
        ";" +
        (f && f.fromContainerExecution ? 1 : 0) +
        ";" +
        ((f && f.source) || 0) +
        ";" +
        e;
    } else c = void 0;
    var k = c;
    k && Nm("tdp", k);
    var m = Uk(!0);
    m !== void 0 && Nm("frm", String(m));
  }
  var TA = !1,
    UA = 0,
    VA = [];
  function WA(a) {
    if (!TA) {
      var b = B.createEventObject,
        c = B.readyState === "complete",
        d = B.readyState === "interactive";
      if (!a || a.type !== "readystatechange" || c || (!b && d)) {
        TA = !0;
        for (var e = 0; e < VA.length; e++) F(VA[e]);
      }
      VA.push = function () {
        for (var f = za.apply(0, arguments), g = 0; g < f.length; g++) F(f[g]);
        return 0;
      };
    }
  }
  function XA() {
    if (!TA && UA < 140) {
      UA++;
      try {
        var a, b;
        (b = (a = B.documentElement).doScroll) == null || b.call(a, "left");
        WA();
      } catch (c) {
        z.setTimeout(XA, 50);
      }
    }
  }
  function YA() {
    TA = !1;
    UA = 0;
    if (
      (B.readyState === "interactive" && !B.createEventObject) ||
      B.readyState === "complete"
    )
      WA();
    else {
      vc(B, "DOMContentLoaded", WA);
      vc(B, "readystatechange", WA);
      if (B.createEventObject && B.documentElement.doScroll) {
        var a = !0;
        try {
          a = !z.frameElement;
        } catch (b) {}
        a && XA();
      }
      vc(z, "load", WA);
    }
  }
  function ZA(a) {
    TA ? a() : VA.push(a);
  }
  var $A = 0;
  var aB = {},
    bB = {};
  function cB(a, b) {
    for (
      var c = [], d = [], e = {}, f = 0;
      f < a.length;
      e = { mi: void 0, Th: void 0 }, f++
    ) {
      var g = a[f];
      if (g.indexOf("-") >= 0) {
        if (((e.mi = Bo(g, b)), e.mi)) {
          var k = El ? El : Ll();
          eb(
            k,
            (function (r) {
              return function (t) {
                return r.mi.destinationId === t;
              };
            })(e)
          )
            ? c.push(g)
            : d.push(g);
        }
      } else {
        var m = aB[g] || [];
        e.Th = {};
        m.forEach(
          (function (r) {
            return function (t) {
              r.Th[t] = !0;
            };
          })(e)
        );
        for (var n = Hl(), p = 0; p < n.length; p++)
          if (e.Th[n[p]]) {
            c = c.concat(Kl());
            break;
          }
        var q = bB[g] || [];
        q.length && (c = c.concat(q));
      }
    }
    return { Um: c, Xm: d };
  }
  function dB(a) {
    ib(aB, function (b, c) {
      var d = c.indexOf(a);
      d >= 0 && c.splice(d, 1);
    });
  }
  function eB(a) {
    ib(bB, function (b, c) {
      var d = c.indexOf(a);
      d >= 0 && c.splice(d, 1);
    });
  }
  var fB = "HA GF G UA AW DC MC".split(" "),
    gB = !1,
    hB = !1;
  function iB(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") ||
      Object.defineProperty(a, "gtm.uniqueEventId", { value: jo() });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return { eventId: b.eventId, priorityId: b.priorityId };
  }
  var jB = void 0,
    kB = void 0;
  function lB(a, b, c) {
    var d = Xc(a, null);
    d.eventId = void 0;
    d.inheritParentConfig = void 0;
    Object.keys(b).some(function (f) {
      return b[f] !== void 0;
    }) && S(136);
    var e = Xc(b, null);
    Xc(c, e);
    bv(Yu(Hl()[0], e), a.eventId, d);
  }
  function mB(a) {
    for (var b = l([N.g.qc, N.g.ob]), c = b.next(); !c.done; c = b.next()) {
      var d = c.value,
        e = (a && a[d]) || Ep.j[d];
      if (e) return e;
    }
  }
  var nB = {
      config: function (a, b) {
        var c = iB(a, b);
        if (!(a.length < 2) && bb(a[1])) {
          var d = {};
          if (a.length > 2) {
            if ((a[2] !== void 0 && !Wc(a[2])) || a.length > 3) return;
            d = a[2];
          }
          var e = Bo(a[1], b.isGtmEvent);
          if (e) {
            var f, g, k;
            a: {
              if (!Cl.Qe) {
                var m = Ql(Rl());
                if (dm(m)) {
                  var n = m.parent,
                    p = n.isDestination;
                  k = { gn: Ql(n), Tm: p };
                  break a;
                }
              }
              k = void 0;
            }
            var q = k;
            q && ((f = q.gn), (g = q.Tm));
            nA(c.eventId, "gtag.config");
            var r = e.destinationId,
              t = e.id !== r;
            if (t ? Kl().indexOf(r) === -1 : Hl().indexOf(r) === -1) {
              if (!b.inheritParentConfig && !d[N.g.Sb]) {
                var v = mB(d);
                if (t)
                  Nz(r, v, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
                else if (f !== void 0 && f.containers.indexOf(r) !== -1) {
                  var u = d;
                  jB ? lB(b, u, jB) : kB || (kB = Xc(u, null));
                } else
                  Jz(r, v, !0, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            } else {
              if (f && (S(128), g && S(130), b.inheritParentConfig)) {
                var w;
                var x = d;
                kB
                  ? (lB(b, kB, x), (w = !1))
                  : ((!x[N.g.sc] && ej && jB) || (jB = Xc(x, null)), (w = !0));
                w && f.containers && f.containers.join(",");
                return;
              }
              pk && ($A === 1 && (Km.mcc = !1), ($A = 2));
              if (ej && !t && !d[N.g.sc]) {
                var y = hB;
                hB = !0;
                if (y) return;
              }
              gB || S(43);
              if (!b.noTargetGroup)
                if (t) {
                  eB(e.id);
                  var A = e.id,
                    C = d[N.g.ze] || "default";
                  C = String(C).split(",");
                  for (var D = 0; D < C.length; D++) {
                    var E = bB[C[D]] || [];
                    bB[C[D]] = E;
                    E.indexOf(A) < 0 && E.push(A);
                  }
                } else {
                  dB(e.id);
                  var K = e.id,
                    M = d[N.g.ze] || "default";
                  M = M.toString().split(",");
                  for (var U = 0; U < M.length; U++) {
                    var L = aB[M[U]] || [];
                    aB[M[U]] = L;
                    L.indexOf(K) < 0 && L.push(K);
                  }
                }
              delete d[N.g.ze];
              var ba = b.eventMetadata || {};
              ba.hasOwnProperty("is_external_event") ||
                (ba.is_external_event = !b.fromContainerExecution);
              b.eventMetadata = ba;
              delete d[N.g.xd];
              for (var fa = t ? [e.id] : Kl(), da = 0; da < fa.length; da++) {
                var ca = d,
                  R = fa[da],
                  qa = Xc(b, null),
                  ma = Bo(R, qa.isGtmEvent);
                ma && Ep.push("config", [ca], ma, qa);
              }
            }
          }
        }
      },
      consent: function (a, b) {
        if (a.length === 3) {
          S(39);
          var c = iB(a, b),
            d = a[1],
            e;
          if (Q(124)) {
            var f = {},
              g = Au(a[2]),
              k;
            for (k in g)
              if (g.hasOwnProperty(k)) {
                var m = g[k];
                f[k] =
                  k === N.g.ae
                    ? Array.isArray(m)
                      ? NaN
                      : Number(m)
                    : k === N.g.sb
                    ? (Array.isArray(m) ? m : [m]).map(Bu)
                    : Cu(m);
              }
            e = f;
          } else e = a[2];
          var n = e;
          b.fromContainerExecution || (n[N.g.O] && S(139), n[N.g.ra] && S(140));
          d === "default"
            ? Rn(n)
            : d === "update"
            ? Tn(n, c)
            : d === "declare" && b.fromContainerExecution && Qn(n);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(a.length < 2) && bb(c)) {
          var d = void 0;
          if (a.length > 2) {
            if ((!Wc(a[2]) && a[2] !== void 0) || a.length > 3) return;
            d = a[2];
          }
          var e = d,
            f = {},
            g = ((f.event = c), f);
          e &&
            ((g.eventModel = Xc(e, null)),
            e[N.g.xd] && (g.eventCallback = e[N.g.xd]),
            e[N.g.we] && (g.eventTimeout = e[N.g.we]));
          var k = iB(a, b),
            m = k.eventId,
            n = k.priorityId;
          g["gtm.uniqueEventId"] = m;
          n && (g["gtm.priorityId"] = n);
          if (c === "optimize.callback")
            return (g.eventModel = g.eventModel || {}), g;
          var p;
          var q = d,
            r = q && q[N.g.oc];
          r === void 0 &&
            ((r = Ej(N.g.oc, 2)), r === void 0 && (r = "default"));
          if (bb(r) || Array.isArray(r)) {
            var t;
            t = b.isGtmEvent
              ? bb(r)
                ? [r]
                : r
              : r.toString().replace(/\s+/g, "").split(",");
            var v = cB(t, b.isGtmEvent),
              u = v.Um,
              w = v.Xm;
            if (w.length)
              for (var x = mB(q), y = 0; y < w.length; y++) {
                var A = Bo(w[y], b.isGtmEvent);
                if (A) {
                  var C = A.destinationId,
                    D;
                  if ((D = Q(127))) {
                    var E;
                    if (!(E = vb(C, "siloed_"))) {
                      var K = A.destinationId,
                        M = zl().destination[K];
                      E = !!M && M.state === 0;
                    }
                    D = E;
                  }
                  D ||
                    Nz(C, x, {
                      source: 3,
                      fromContainerExecution: b.fromContainerExecution,
                    });
                }
              }
            p = Co(u, b.isGtmEvent);
          } else p = void 0;
          var U = p;
          if (U) {
            nA(m, c);
            for (var L = [], ba = 0; ba < U.length; ba++) {
              var fa = U[ba],
                da = Xc(b, null);
              if (fB.indexOf(Sl(fa.prefix)) !== -1) {
                var ca = Xc(d, null),
                  R = da.eventMetadata || {};
                R.hasOwnProperty("is_external_event") ||
                  (R.is_external_event = !da.fromContainerExecution);
                da.eventMetadata = R;
                delete ca[N.g.xd];
                Fp(c, ca, fa.id, da);
                pk &&
                  R.source_canonical_id === void 0 &&
                  $A === 0 &&
                  (Nm("mcc", "1"), ($A = 1));
              }
              L.push(fa.id);
            }
            g.eventModel = g.eventModel || {};
            U.length > 0
              ? (g.eventModel[N.g.oc] = L.join())
              : delete g.eventModel[N.g.oc];
            gB || S(43);
            b.noGtmEvent === void 0 &&
              b.eventMetadata &&
              b.eventMetadata.syn_or_mod &&
              (b.noGtmEvent = !0);
            g.eventModel[N.g.nc] && (b.noGtmEvent = !0);
            return b.noGtmEvent ? void 0 : g;
          }
        }
      },
      get: function (a, b) {
        S(53);
        if (a.length === 4 && bb(a[1]) && bb(a[2]) && ab(a[3])) {
          var c = Bo(a[1], b.isGtmEvent),
            d = String(a[2]),
            e = a[3];
          if (c) {
            gB || S(43);
            var f = mB();
            if (
              !eb(Kl(), function (k) {
                return c.destinationId === k;
              })
            )
              Nz(c.destinationId, f, {
                source: 4,
                fromContainerExecution: b.fromContainerExecution,
              });
            else if (fB.indexOf(Sl(c.prefix)) !== -1) {
              iB(a, b);
              var g = {};
              Xc(((g[N.g.Ab] = d), (g[N.g.Qb] = e), g), null);
              Gp(
                d,
                function (k) {
                  F(function () {
                    e(k);
                  });
                },
                c.id,
                b
              );
            }
          }
        }
      },
      js: function (a, b) {
        if (a.length === 2 && a[1].getTime) {
          gB = !0;
          var c = iB(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return (
            (f.event = "gtm.js"),
            (f["gtm.start"] = a[1].getTime()),
            (f["gtm.uniqueEventId"] = d),
            (f["gtm.priorityId"] = e),
            f
          );
        }
      },
      policy: function (a) {
        if (a.length === 3 && bb(a[1]) && ab(a[2])) {
          if ((Rf(a[1], a[2]), S(74), a[1] === "all")) {
            S(75);
            var b = !1;
            try {
              b = a[2](Ml(), "unknown", {});
            } catch (c) {}
            b || S(76);
          }
        } else S(73);
      },
      set: function (a, b) {
        var c = void 0;
        a.length === 2 && Wc(a[1])
          ? (c = Xc(a[1], null))
          : a.length === 3 &&
            bb(a[1]) &&
            ((c = {}),
            Wc(a[2]) || Array.isArray(a[2])
              ? (c[a[1]] = Xc(a[2], null))
              : (c[a[1]] = a[2]));
        if (c) {
          var d = iB(a, b),
            e = d.eventId,
            f = d.priorityId;
          Xc(c, null);
          var g = Xc(c, null);
          Ep.push("set", [g], void 0, b);
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          delete c.event;
          b.overwriteModelFields = !0;
          return c;
        }
      },
    },
    oB = { policy: !0 };
  var qB = function (a) {
    if (pB(a)) return a;
    this.value = a;
  };
  qB.prototype.getUntrustedMessageValue = function () {
    return this.value;
  };
  var pB = function (a) {
    return !a || Uc(a) !== "object" || Wc(a)
      ? !1
      : "getUntrustedMessageValue" in a;
  };
  qB.prototype.getUntrustedMessageValue = qB.prototype.getUntrustedMessageValue;
  var rB = !1,
    sB = [];
  function tB() {
    if (!rB) {
      rB = !0;
      for (var a = 0; a < sB.length; a++) F(sB[a]);
    }
  }
  function uB(a) {
    rB ? F(a) : sB.push(a);
  }
  var vB = 0,
    wB = {},
    xB = [],
    yB = [],
    zB = !1,
    AB = !1;
  function BB(a, b) {
    return (
      a.messageContext.eventId - b.messageContext.eventId ||
      a.messageContext.priorityId - b.messageContext.priorityId
    );
  }
  function CB(a, b, c) {
    a.eventCallback = b;
    c && (a.eventTimeout = c);
    return DB(a);
  }
  function EB(a, b) {
    if (!cb(b) || b < 0) b = 0;
    var c = eo[aj.Mb],
      d = 0,
      e = !1,
      f = void 0;
    f = z.setTimeout(function () {
      e || ((e = !0), a());
      f = void 0;
    }, b);
    return function () {
      var g = c ? c.subscribers : 1;
      ++d === g &&
        (f && (z.clearTimeout(f), (f = void 0)), e || (a(), (e = !0)));
    };
  }
  function FB(a, b) {
    var c = a._clear || b.overwriteModelFields;
    ib(a, function (e, f) {
      e !== "_clear" && (c && Hj(e), Hj(e, f));
    });
    oj || (oj = a["gtm.start"]);
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    typeof d !== "number" &&
      ((d = jo()), (a["gtm.uniqueEventId"] = d), Hj("gtm.uniqueEventId", d));
    return MA(a);
  }
  function GB(a) {
    if (a == null || typeof a !== "object") return !1;
    if (a.event) return !0;
    if (jb(a)) {
      var b = a[0];
      if (b === "config" || b === "event" || b === "js" || b === "get")
        return !0;
    }
    return !1;
  }
  function HB() {
    var a;
    if (yB.length) a = yB.shift();
    else if (xB.length) a = xB.shift();
    else return;
    var b;
    var c = a;
    if (zB || !GB(c.message)) b = c;
    else {
      zB = !0;
      var d = c.message["gtm.uniqueEventId"],
        e,
        f;
      typeof d === "number"
        ? ((e = d - 2), (f = d - 1))
        : ((e = jo()), (f = jo()), (c.message["gtm.uniqueEventId"] = jo()));
      var g = {},
        k = {
          message:
            ((g.event = "gtm.init_consent"), (g["gtm.uniqueEventId"] = e), g),
          messageContext: { eventId: e },
        },
        m = {},
        n = {
          message: ((m.event = "gtm.init"), (m["gtm.uniqueEventId"] = f), m),
          messageContext: { eventId: f },
        };
      xB.unshift(n, c);
      Q(8) || (pk && Rm());
      b = k;
    }
    return b;
  }
  function IB() {
    for (var a = !1, b; !AB && (b = HB()); ) {
      AB = !0;
      delete Bj.eventModel;
      Dj();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (d == null) AB = !1;
      else {
        e.fromContainerExecution && Ij();
        try {
          if (ab(d))
            try {
              d.call(Fj);
            } catch (v) {}
          else if (Array.isArray(d)) {
            if (bb(d[0])) {
              var f = d[0].split("."),
                g = f.pop(),
                k = d.slice(1),
                m = Ej(f.join("."), 2);
              if (m != null)
                try {
                  m[g].apply(m, k);
                } catch (v) {}
            }
          } else {
            var n = void 0;
            if (jb(d))
              a: {
                if (d.length && bb(d[0])) {
                  var p = nB[d[0]];
                  if (p && (!e.fromContainerExecution || !oB[d[0]])) {
                    n = p(d, e);
                    break a;
                  }
                }
                n = void 0;
              }
            else n = d;
            n && (a = FB(n, e) || a);
          }
        } finally {
          e.fromContainerExecution && Dj(!0);
          var q = d["gtm.uniqueEventId"];
          if (typeof q === "number") {
            for (var r = wB[String(q)] || [], t = 0; t < r.length; t++)
              yB.push(JB(r[t]));
            r.length && yB.sort(BB);
            delete wB[String(q)];
            q > vB && (vB = q);
          }
          AB = !1;
        }
      }
    }
    return !a;
  }
  function KB() {
    if (Q(95)) {
      var a = !uj.H;
    }
    var b = IB();
    if (Q(95)) {
    }
    try {
      var c = Ml(),
        d = z[aj.Mb].hide;
      if (d && d[c] !== void 0 && d.end) {
        d[c] = !1;
        var e = !0,
          f;
        for (f in d)
          if (d.hasOwnProperty(f) && d[f] === !0) {
            e = !1;
            break;
          }
        e && (d.end(), (d.end = null));
      }
    } catch (g) {}
    return b;
  }
  function ev(a) {
    if (vB < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      wB[b] = wB[b] || [];
      wB[b].push(a);
    } else
      yB.push(JB(a)),
        yB.sort(BB),
        F(function () {
          AB || IB();
        });
  }
  function JB(a) {
    return { message: a.message, messageContext: a.messageContext };
  }
  function LB() {
    function a(f) {
      var g = {};
      if (pB(f)) {
        var k = f;
        f = pB(k) ? k.getUntrustedMessageValue() : void 0;
        g.fromContainerExecution = !0;
      }
      return { message: f, messageContext: g };
    }
    var b = jc(aj.Mb, []),
      c = io();
    c.pruned === !0 && S(83);
    wB = cv().get();
    dv();
    ZA(function () {
      if (!c.gtmDom) {
        c.gtmDom = !0;
        var f = {};
        b.push(((f.event = "gtm.dom"), f));
      }
    });
    uB(function () {
      if (!c.gtmLoad) {
        c.gtmLoad = !0;
        var f = {};
        b.push(((f.event = "gtm.load"), f));
      }
    });
    c.subscribers = (c.subscribers || 0) + 1;
    var d = b.push;
    b.push = function () {
      var f;
      if (eo.SANDBOXED_JS_SEMAPHORE > 0) {
        f = [];
        for (var g = 0; g < arguments.length; g++) f[g] = new qB(arguments[g]);
      } else f = [].slice.call(arguments, 0);
      var k = f.map(function (q) {
        return a(q);
      });
      xB.push.apply(xB, k);
      var m = d.apply(b, f),
        n = Math.max(100, Number("1000") || 300);
      if (this.length > n)
        for (S(4), c.pruned = !0; this.length > n; ) this.shift();
      var p = typeof m !== "boolean" || m;
      return IB() && p;
    };
    var e = b.slice(0).map(function (f) {
      return a(f);
    });
    xB.push.apply(xB, e);
    if (!uj.H) {
      if (Q(95)) {
      }
      F(KB);
    }
  }
  var DB = function (a) {
    return z[aj.Mb].push(a);
  };
  function MB() {
    var a;
    var b = Pl();
    if (b)
      if (b.canonicalContainerId) a = b.canonicalContainerId;
      else {
        var c,
          d =
            b.scriptContainerId ||
            ((c = b.destinations) == null ? void 0 : c[0]);
        a = d ? "_" + d : void 0;
      }
    else a = void 0;
    var e = a;
    e && Nm("pcid", e);
  }
  var NB = /^(https?:)?\/\//;
  function OB() {
    var a;
    var b = Ql(Rl());
    if (b) {
      for (; b.parent; ) {
        var c = Ql(b.parent);
        if (!c) break;
        b = c;
      }
      a = b;
    } else a = void 0;
    var d = a;
    if (!d) S(144);
    else if (Q(62) || d.canonicalContainerId) {
      var e;
      a: {
        var f,
          g = (f = d.scriptElement) == null ? void 0 : f.src;
        if (g) {
          var k;
          try {
            var m;
            k = (m = Jc()) == null ? void 0 : m.getEntriesByType("resource");
          } catch (w) {}
          if (k) {
            for (var n = -1, p = l(k), q = p.next(); !q.done; q = p.next()) {
              var r = q.value;
              if (r.initiatorType === "script") {
                n += 1;
                var t = r.name,
                  v = g;
                Q(61) && ((t = t.replace(NB, "")), (v = v.replace(NB, "")));
                if (t === v) {
                  e = n;
                  break a;
                }
              }
            }
            S(146);
          } else S(145);
        }
        e = void 0;
      }
      var u = e;
      u !== void 0 &&
        (d.canonicalContainerId && Nm("rtg", String(d.canonicalContainerId)),
        Nm("slo", String(u)),
        Nm("hlo", d.htmlLoadOrder || "-1"),
        Nm("lst", String(d.loadScriptType || "0")));
    }
  }
  function iC() {}
  var jC = function () {};
  jC.prototype.toString = function () {
    return "undefined";
  };
  var kC = new jC();
  var mC = function () {
      fo("rm", function () {
        return {};
      })[Ol()] = function (a) {
        if (lC.hasOwnProperty(a)) return lC[a];
      };
    },
    pC = function (a, b, c) {
      if (a instanceof nC) {
        var d = a,
          e = d.resolve,
          f = b,
          g = String(jo());
        oC[g] = [f, c];
        a = e.call(d, g);
        b = $a;
      }
      return { Jm: a, onSuccess: b };
    },
    qC = function (a) {
      var b = a ? 0 : 1;
      return function (c) {
        S(a ? 134 : 135);
        var d = oC[c];
        if (d && typeof d[b] === "function") d[b]();
        oC[c] = void 0;
      };
    },
    nC = function (a) {
      this.valueOf = this.toString;
      this.resolve = function (b) {
        for (var c = [], d = 0; d < a.length; d++)
          c.push(a[d] === kC ? b : a[d]);
        return c.join("");
      };
    };
  nC.prototype.toString = function () {
    return this.resolve("undefined");
  };
  var lC = {},
    oC = {};
  function rC(a, b) {
    function c(g) {
      var k = Xj(g),
        m = Rj(k, "protocol"),
        n = Rj(k, "host", !0),
        p = Rj(k, "port"),
        q = Rj(k, "path").toLowerCase().replace(/\/$/, "");
      if (
        m === void 0 ||
        (m === "http" && p === "80") ||
        (m === "https" && p === "443")
      )
        (m = "web"), (p = "default");
      return [m, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function sC(a) {
    return tC(a) ? 1 : 0;
  }
  function tC(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = Xc(a, {});
        Xc({ arg1: c[d], any_of: void 0 }, e);
        if (sC(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return tg(b, c);
      case "_css":
        var f;
        a: {
          if (b)
            try {
              for (var g = 0; g < pg.length; g++) {
                var k = pg[g];
                if (b[k] != null) {
                  f = b[k](c);
                  break a;
                }
              }
            } catch (m) {}
          f = !1;
        }
        return f;
      case "_ew":
        return qg(b, c);
      case "_eq":
        return ug(b, c);
      case "_ge":
        return vg(b, c);
      case "_gt":
        return xg(b, c);
      case "_lc":
        return String(b).split(",").indexOf(String(c)) >= 0;
      case "_le":
        return wg(b, c);
      case "_lt":
        return yg(b, c);
      case "_re":
        return sg(b, c, a.ignore_case);
      case "_sw":
        return zg(b, c);
      case "_um":
        return rC(b, c);
    }
    return !1;
  }
  function uC() {
    var a;
    a = a === void 0 ? "" : a;
    var b, c;
    return (
      (b = data) == null ? 0 : (c = b.blob) == null ? 0 : c.hasOwnProperty(1)
    )
      ? String(data.blob[1])
      : a;
  }
  function vC() {
    var a = [
      ["cv", Q(131) ? uC() : "18"],
      ["rv", aj.zh],
      [
        "tc",
        qf.filter(function (b) {
          return b;
        }).length,
      ],
    ];
    aj.Te && a.push(["x", aj.Te]);
    vj() && a.push(["tag_exp", vj()]);
    return a;
  }
  function wC() {
    Q(57) &&
      pk &&
      z.addEventListener("securitypolicyviolation", function (a) {
        if (a.disposition === "enforce") {
          var b = ll(a.effectiveDirective);
          if (b) {
            var c;
            var d = kl(a.blockedURI);
            c = d ? il[b][d] : void 0;
            c &&
              ((Sm[String(c.endpoint)] = !0),
              Nm("csp", Object.keys(Sm).join("~")));
          }
        }
      });
  }
  var xC = {},
    yC = {};
  function zC(a, b) {
    var c = AC(void 0);
    if (ok) {
      var d = String(c) + b;
      xC[a] = xC[a] || [];
      xC[a].push(d);
      yC[a] = yC[a] || [];
      yC[a].push("p" + b);
    }
  }
  function BC(a) {
    var b = a.eventId,
      c = a.Zc,
      d = [],
      e = xC[b] || [];
    e.length && d.push(["hf", e.join(".")]);
    var f = yC[b] || [];
    f.length && d.push(["ht", f.join(".")]);
    c && (delete xC[b], delete yC[b]);
    return d;
  }
  function CC() {
    return !1;
  }
  function DC() {
    var a = {};
    return function (b, c, d) {};
  }
  function EC() {
    var a = FC;
    return function (b, c, d) {
      var e = d && d.event;
      (b === "__html" && Q(97)) || GC(c);
      var f = vb(b, "__cvt_") ? void 0 : 1,
        g = new Na();
      ib(c, function (r, t) {
        var v = ld(t, void 0, f);
        v === void 0 && t !== void 0 && S(44);
        g.set(r, v);
      });
      a.j.j.C = Jf();
      var k = {
        kk: Yf(b),
        eventId: e == null ? void 0 : e.id,
        priorityId: e !== void 0 ? e.priorityId : void 0,
        Xe:
          e !== void 0
            ? function (r) {
                e.wc.Xe(r);
              }
            : void 0,
        qb: function () {
          return b;
        },
        log: function () {},
        km: {
          index: d == null ? void 0 : d.index,
          type: d == null ? void 0 : d.type,
          name: d == null ? void 0 : d.name,
        },
        qn: !!vz(b, 3),
        originalEventData: e == null ? void 0 : e.originalEventData,
      };
      e &&
        e.cachedModelValues &&
        (k.cachedModelValues = {
          gtm: e.cachedModelValues.gtm,
          ecommerce: e.cachedModelValues.ecommerce,
        });
      if (CC()) {
        var m = DC(),
          n,
          p;
        k.Xa = {
          yi: [],
          Ye: {},
          Hb: function (r, t, v) {
            t === 1 && (n = r);
            t === 7 && (p = v);
            m(r, t, v);
          },
          Bg: th(),
        };
        k.log = function (r) {
          var t = za.apply(1, arguments);
          n && m(n, 4, { level: r, source: p, message: t });
        };
      }
      var q = Ke(a, k, [b, g]);
      a.j.j.C = void 0;
      q instanceof Ba && (q.type === "return" ? (q = q.data) : (q = void 0));
      return G(q, void 0, f);
    };
  }
  function GC(a) {
    var b = a.gtmOnSuccess,
      c = a.gtmOnFailure;
    ab(b) &&
      (a.gtmOnSuccess = function () {
        F(b);
      });
    ab(c) &&
      (a.gtmOnFailure = function () {
        F(c);
      });
  }
  function HC(a) {}
  HC.F = "internal.addAdsClickIds";
  function IC(a, b) {
    var c = this;
  }
  IC.publicName = "addConsentListener";
  var JC = !1;
  function KC(a) {
    for (var b = 0; b < a.length; ++b)
      if (JC)
        try {
          a[b]();
        } catch (c) {
          S(77);
        }
      else a[b]();
  }
  function LC(a, b, c) {
    var d = this,
      e;
    return e;
  }
  LC.F = "internal.addDataLayerEventListener";
  function MC(a, b, c) {}
  MC.publicName = "addDocumentEventListener";
  function NC(a, b, c, d) {}
  NC.publicName = "addElementEventListener";
  function OC(a) {
    return a.D.j;
  }
  function PC(a) {}
  PC.publicName = "addEventCallback";
  var QC = function (a) {
      return typeof a === "string" ? a : String(jo());
    },
    TC = function (a, b) {
      RC(a, "init", !1) || (SC(a, "init", !0), b());
    },
    RC = function (a, b, c) {
      var d = UC(a);
      return rb(d, b, c);
    },
    VC = function (a, b, c, d) {
      var e = UC(a),
        f = rb(e, b, d);
      e[b] = c(f);
    },
    SC = function (a, b, c) {
      UC(a)[b] = c;
    },
    UC = function (a) {
      var b = fo("autoEventsSettings", function () {
        return {};
      });
      b.hasOwnProperty(a) || (b[a] = {});
      return b[a];
    },
    WC = function (a, b, c) {
      var d = {
        event: b,
        "gtm.element": a,
        "gtm.elementClasses": Gc(a, "className"),
        "gtm.elementId": a.for || xc(a, "id") || "",
        "gtm.elementTarget": a.formTarget || Gc(a, "target") || "",
      };
      c && (d["gtm.triggers"] = c.join(","));
      d["gtm.elementUrl"] =
        (a.attributes && a.attributes.formaction ? a.formAction : "") ||
        a.action ||
        Gc(a, "href") ||
        a.src ||
        a.code ||
        a.codebase ||
        "";
      return d;
    };
  function eD(a) {}
  eD.F = "internal.addFormAbandonmentListener";
  function fD(a, b, c, d) {}
  fD.F = "internal.addFormData";
  var gD = {},
    hD = [],
    iD = {},
    jD = 0,
    kD = 0;
  function rD(a, b) {}
  rD.F = "internal.addFormInteractionListener";
  function yD(a, b) {}
  yD.F = "internal.addFormSubmitListener";
  function DD(a) {}
  DD.F = "internal.addGaSendListener";
  function ED(a) {
    if (!a) return {};
    var b = a.km;
    return Rz(b.type, b.index, b.name);
  }
  function FD(a) {
    return a ? { originatingEntity: ED(a) } : {};
  }
  var HD = function (a, b, c) {
      GD().updateZone(a, b, c);
    },
    JD = function (a, b, c, d, e, f) {
      var g = GD();
      c = c && ub(c, ID);
      for (var k = g.createZone(a, c), m = 0; m < b.length; m++) {
        var n = String(b[m]);
        if (g.registerChild(n, Ml(), k)) {
          var p = n,
            q = a,
            r = d,
            t = e,
            v = f;
          if (vb(p, "GTM-"))
            Jz(p, void 0, !1, { source: 1, fromContainerExecution: !0 });
          else {
            var u = Xu("js", pb());
            Jz(p, void 0, !0, { source: 1, fromContainerExecution: !0 });
            var w = { originatingEntity: t, inheritParentConfig: v };
            Q(135) || bv(u, q, w);
            bv(Yu(p, r), q, w);
          }
        }
      }
      return k;
    },
    GD = function () {
      return fo("zones", function () {
        return new KD();
      });
    },
    LD = {
      zone: 1,
      cn: 1,
      css: 1,
      ew: 1,
      eq: 1,
      ge: 1,
      gt: 1,
      lc: 1,
      le: 1,
      lt: 1,
      re: 1,
      sw: 1,
      um: 1,
    },
    ID = {
      cl: ["ecl"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
    },
    KD = function () {
      this.j = {};
      this.C = {};
      this.H = 0;
    };
  h = KD.prototype;
  h.isActive = function (a, b) {
    for (var c, d = 0; d < a.length && !(c = this.j[a[d]]); d++);
    if (!c) return !0;
    if (!this.isActive([c.li], b)) return !1;
    for (var e = 0; e < c.Jf.length; e++) if (this.C[c.Jf[e]].Pd(b)) return !0;
    return !1;
  };
  h.getIsAllowedFn = function (a, b) {
    if (!this.isActive(a, b))
      return function () {
        return !1;
      };
    for (var c, d = 0; d < a.length && !(c = this.j[a[d]]); d++);
    if (!c)
      return function () {
        return !0;
      };
    for (var e = [], f = 0; f < c.Jf.length; f++) {
      var g = this.C[c.Jf[f]];
      g.Pd(b) && e.push(g);
    }
    if (!e.length)
      return function () {
        return !1;
      };
    var k = this.getIsAllowedFn([c.li], b);
    return function (m, n) {
      n = n || [];
      if (!k(m, n)) return !1;
      for (var p = 0; p < e.length; ++p) if (e[p].H(m, n)) return !0;
      return !1;
    };
  };
  h.unregisterChild = function (a) {
    for (var b = 0; b < a.length; b++) delete this.j[a[b]];
  };
  h.createZone = function (a, b) {
    var c = String(++this.H);
    this.C[c] = new MD(a, b);
    return c;
  };
  h.updateZone = function (a, b, c) {
    var d = this.C[a];
    d && d.K(b, c);
  };
  h.registerChild = function (a, b, c) {
    var d = this.j[a];
    if ((!d && eo[a]) || (!d && Yl(a)) || (d && d.li !== b)) return !1;
    if (d) return d.Jf.push(c), !1;
    this.j[a] = { li: b, Jf: [c] };
    return !0;
  };
  var MD = function (a, b) {
    this.C = null;
    this.j = [{ eventId: a, Pd: !0 }];
    if (b) {
      this.C = {};
      for (var c = 0; c < b.length; c++) this.C[b[c]] = !0;
    }
  };
  MD.prototype.K = function (a, b) {
    var c = this.j[this.j.length - 1];
    a <= c.eventId || (c.Pd !== b && this.j.push({ eventId: a, Pd: b }));
  };
  MD.prototype.Pd = function (a) {
    for (var b = this.j.length - 1; b >= 0; b--)
      if (this.j[b].eventId <= a) return this.j[b].Pd;
    return !1;
  };
  MD.prototype.H = function (a, b) {
    b = b || [];
    if (!this.C || LD[a] || this.C[a]) return !0;
    for (var c = 0; c < b.length; ++c) if (this.C[b[c]]) return !0;
    return !1;
  };
  function ND(a) {
    var b = eo.zones;
    return b
      ? b.getIsAllowedFn(Hl(), a)
      : function () {
          return !0;
        };
  }
  function OD() {
    var a = eo.zones;
    a && a.unregisterChild(Hl());
  }
  function PD() {
    yz(Ol(), function (a) {
      var b = a.originalEventData["gtm.uniqueEventId"],
        c = eo.zones;
      return c ? c.isActive(Hl(), b) : !0;
    });
    wz(Ol(), function (a) {
      var b, c;
      b = a.entityId;
      c = a.securityGroups;
      return ND(Number(a.originalEventData["gtm.uniqueEventId"]))(b, c);
    });
  }
  var QD = function (a, b) {
    this.tagId = a;
    this.af = b;
  };
  function RD(a, b) {
    var c = this,
      d = void 0;
    if (!I(a) || (!Jg(b) && !Lg(b)))
      throw H(this.getName(), ["string", "Object|undefined"], arguments);
    var e = G(b, this.D, 1) || {},
      f = e.firstPartyUrl,
      g = e.onLoad,
      k = e.loadByDestination === !0,
      m = e.isGtmEvent === !0,
      n = e.siloed === !0;
    d = n ? Jl(a) : a;
    KC([
      function () {
        J(c, "load_google_tags", a, f);
      },
    ]);
    if (k) {
      if (Zl(a)) return d;
    } else if (Yl(a)) return d;
    var p = 6,
      q = OC(this);
    m && (p = 7);
    q.qb() === "__zone" && (p = 1);
    var r = { source: p, fromContainerExecution: !0, siloed: n },
      t = function (v) {
        wz(
          v,
          function (u) {
            for (
              var w = xz().getExternalRestrictions(0, Ol()),
                x = l(w),
                y = x.next();
              !y.done;
              y = x.next()
            ) {
              var A = y.value;
              if (!A(u)) return !1;
            }
            return !0;
          },
          !0
        );
        yz(
          v,
          function (u) {
            for (
              var w = xz().getExternalRestrictions(1, Ol()),
                x = l(w),
                y = x.next();
              !y.done;
              y = x.next()
            ) {
              var A = y.value;
              if (!A(u)) return !1;
            }
            return !0;
          },
          !0
        );
        g && g(new QD(a, v));
      };
    k ? Nz(a, f, r, t) : Jz(a, f, !vb(a, "GTM-"), r, t);
    g &&
      q.qb() === "__zone" &&
      JD(Number.MIN_SAFE_INTEGER, [a], null, {}, ED(OC(this)));
    return d;
  }
  RD.F = "internal.loadGoogleTag";
  function SD(a) {
    return new dd("", function (b) {
      var c = this.evaluate(b);
      if (c instanceof dd)
        return new dd("", function () {
          var d = za.apply(0, arguments),
            e = this,
            f = Xc(OC(this), null);
          f.eventId = a.eventId;
          f.priorityId = a.priorityId;
          f.originalEventData = a.originalEventData;
          var g = d.map(function (m) {
              return e.evaluate(m);
            }),
            k = Ja(this.D);
          k.j = f;
          return c.ib.apply(c, [k].concat(va(g)));
        });
    });
  }
  function TD(a, b, c) {
    var d = this;
  }
  TD.F = "internal.addGoogleTagRestriction";
  var UD = {},
    VD = [];
  function bE(a, b) {}
  bE.F = "internal.addHistoryChangeListener";
  function cE(a, b, c) {}
  cE.publicName = "addWindowEventListener";
  function dE(a, b) {
    return !0;
  }
  dE.publicName = "aliasInWindow";
  function eE(a, b, c) {}
  eE.F = "internal.appendRemoteConfigParameter";
  function fE(a) {
    var b;
    return b;
  }
  fE.publicName = "callInWindow";
  function gE(a) {}
  gE.publicName = "callLater";
  function hE(a) {
    if (!Mg(a)) throw H(this.getName(), ["function"], arguments);
    J(this, "process_dom_events", "document", "DOMContentLoaded");
    J(this, "process_dom_events", "document", "readystatechange");
    J(this, "process_dom_events", "window", "load");
    ZA(G(a));
  }
  hE.F = "callOnDomReady";
  function iE(a) {}
  iE.F = "callOnWindowLoad";
  function jE(a, b) {
    var c;
    return c;
  }
  jE.F = "internal.computeGtmParameter";
  function kE(a, b) {
    var c = this;
  }
  kE.F = "internal.consentScheduleFirstTry";
  function lE(a, b) {
    var c = this;
  }
  lE.F = "internal.consentScheduleRetry";
  function mE(a) {
    var b;
    return b;
  }
  mE.F = "internal.copyFromCrossContainerData";
  function nE(a, b) {
    var c;
    var d = ld(c, this.D, vb(OC(this).qb(), "__cvt_") ? 2 : 1);
    d === void 0 && c !== void 0 && S(45);
    return d;
  }
  nE.publicName = "copyFromDataLayer";
  function oE(a) {
    var b = void 0;
    return b;
  }
  oE.F = "internal.copyFromDataLayerCache";
  function pE(a) {
    var b;
    return b;
  }
  pE.publicName = "copyFromWindow";
  function qE(a) {
    var b = void 0;
    return ld(b, this.D, 1);
  }
  qE.F = "internal.copyKeyFromWindow";
  var rE = function (a) {
      this.j = a;
    },
    sE = function (a, b, c, d) {
      var e;
      return (e = a.j[b]) != null && e[c]
        ? a.j[b][c].some(function (f) {
            return f(d);
          })
        : !1;
    };
  rE.prototype.reset = function () {
    this.j = {};
  };
  function tE(a) {
    switch (typeof a) {
      case "function":
        return a();
      default:
        return a;
    }
  }
  function uE(a) {
    return a === 1 && ym[a] === 1 && !V(N.g.N);
  }
  function vE() {
    return "0";
  }
  function wE(a) {
    return Yj(tE(a), ["gclid", "dclid", "wbraid", "_gl", "gbraid"], "0");
  }
  var xE = {},
    yE = {},
    zE = {},
    AE = {},
    BE = {},
    CE = {},
    DE = {},
    EE = {},
    FE = {},
    GE = {},
    HE = {},
    IE = {},
    JE = {},
    KE = {},
    LE = {},
    ME = {},
    NE = {},
    OE = {},
    PE = {},
    QE = {},
    RE = {},
    SE = {},
    TE = {},
    UE = {},
    VE =
      ((UE[N.g.za] = ((xE[2] = [uE]), xE)),
      (UE[N.g.Fe] = ((yE[2] = [uE]), yE)),
      (UE[N.g.Uf] = ((zE[2] = [uE]), zE)),
      (UE[N.g.gg] = ((AE[2] = [uE]), AE)),
      (UE[N.g.hg] = ((BE[2] = [uE]), BE)),
      (UE[N.g.ig] = ((CE[2] = [uE]), CE)),
      (UE[N.g.jg] = ((DE[2] = [uE]), DE)),
      (UE[N.g.kg] = ((EE[2] = [uE]), EE)),
      (UE[N.g.Mc] = ((FE[2] = [uE]), FE)),
      (UE[N.g.Ge] = ((GE[2] = [uE]), GE)),
      (UE[N.g.He] = ((HE[2] = [uE]), HE)),
      (UE[N.g.Ie] = ((IE[2] = [uE]), IE)),
      (UE[N.g.Je] = ((JE[2] = [uE]), JE)),
      (UE[N.g.Ke] = ((KE[2] = [uE]), KE)),
      (UE[N.g.Le] = ((LE[2] = [uE]), LE)),
      (UE[N.g.Me] = ((ME[2] = [uE]), ME)),
      (UE[N.g.Ne] = ((NE[2] = [uE]), NE)),
      (UE[N.g.Na] = ((OE[1] = [uE]), OE)),
      (UE[N.g.Fc] = ((PE[1] = [uE]), PE)),
      (UE[N.g.gd] = ((QE[1] = [uE]), QE)),
      (UE[N.g.he] = ((RE[1] = [uE]), RE)),
      (UE[N.g.la] = ((SE[1] = [uE]), SE)),
      (UE[N.g.ya] = ((TE[1] = [uE]), TE)),
      UE),
    WE = {},
    XE =
      ((WE[N.g.Na] = vE),
      (WE[N.g.Fc] = vE),
      (WE[N.g.gd] = vE),
      (WE[N.g.he] = vE),
      (WE[N.g.la] = wE),
      (WE[N.g.ya] = wE),
      WE),
    YE = {},
    ZE = {},
    $E = ((ZE.user_data = ((YE[2] = [uE]), YE)), ZE);
  var aF = function (a, b) {
      this.conditions = a;
      this.j = b;
    },
    bF = function (a, b, c, d) {
      return sE(a.conditions, b, 2, d)
        ? { status: 2 }
        : sE(a.conditions, b, 1, d)
        ? a.j[b] === void 0
          ? { status: 2 }
          : { status: 1, value: a.j[b](c, d) }
        : { status: 0, value: tE(c) };
    },
    cF = new aF(new rE(VE), XE),
    dF = new aF(new rE($E), {});
  function eF(a, b, c) {
    return bF(cF, a, b, c);
  }
  function fF(a, b, c) {
    return bF(dF, a, b, c);
  }
  function gF(a, b, c, d, e) {
    if (Q(100)) {
      var f = d(a, b, e);
      f.status === 2 ? delete c[a] : (c[a] = f.value);
    } else c[a] = b;
  }
  var hF = function (a, b, c) {
      var d = this;
      this.eventName = b;
      this.m = c;
      this.j = {};
      this.isAborted = !1;
      this.TEST_ONLY = {
        getMetadata: function () {
          return d.metadata;
        },
        setMetadata: function (e) {
          d.metadata = e;
        },
        getHitData: function () {
          return d.j;
        },
        setHitData: function (e) {
          d.j = e;
        },
      };
      this.target = a;
      this.metadata = Xc(c.eventMetadata || {}, {});
    },
    X = function (a, b, c) {
      gF(b, c, a.j, eF, a.metadata.transmission_type);
    },
    iF = function (a, b) {
      b = b === void 0 ? {} : b;
      return Xc(a.j, b);
    };
  hF.prototype.copyToHitData = function (a, b, c) {
    var d = T(this.m, a);
    d === void 0 && (d = b);
    if (d !== void 0 && c !== void 0 && bb(d) && Q(85))
      try {
        d = c(d);
      } catch (e) {}
    d !== void 0 && X(this, a, d);
  };
  var W = function (a, b, c) {
      gF(b, c, a.metadata, fF, a.metadata.transmission_type);
      if (Q(100) && b === "transmission_type") {
        for (
          var d = l(Object.keys(a.metadata)), e = d.next();
          !e.done;
          e = d.next()
        ) {
          var f = e.value;
          f !== "transmission_type" && W(a, f, a.metadata[f]);
        }
        for (var g = l(Object.keys(a.j)), k = g.next(); !k.done; k = g.next()) {
          var m = k.value;
          X(a, m, a.j[m]);
        }
      }
    },
    jF = function (a, b) {
      b = b === void 0 ? {} : b;
      return Xc(a.metadata, b);
    },
    uw = function (a, b, c) {
      var d = a.target.destinationId;
      Q(126) && !Dl && (d = Sl(d));
      var e = iv(d);
      return e && e[b] !== void 0 ? e[b] : c;
    };
  function kF(a, b) {
    var c;
    return c;
  }
  kF.F = "internal.copyPreHit";
  function lF(a, b) {
    var c = null;
    if (!I(a) || !I(b))
      throw H(this.getName(), ["string", "string"], arguments);
    J(this, "access_globals", "readwrite", a);
    J(this, "access_globals", "readwrite", b);
    var d = [z, B],
      e = a.split("."),
      f = xb(e, d),
      g = e[e.length - 1];
    if (f === void 0) throw Error("Path " + a + " does not exist.");
    var k = f[g];
    if (k) return ab(k) ? ld(k, this.D, 2) : null;
    var m;
    k = function () {
      if (!ab(m.push))
        throw Error("Object at " + b + " in window is not an array.");
      m.push.call(m, arguments);
    };
    f[g] = k;
    var n = b.split("."),
      p = xb(n, d),
      q = n[n.length - 1];
    if (p === void 0) throw Error("Path " + n + " does not exist.");
    m = p[q];
    m === void 0 && ((m = []), (p[q] = m));
    c = function () {
      k.apply(k, Array.prototype.slice.call(arguments, 0));
    };
    return ld(c, this.D, 2);
  }
  lF.publicName = "createArgumentsQueue";
  function mF(a) {
    return ld(
      function (c) {
        var d = $z();
        if (typeof c === "function")
          d(function () {
            c(function (f, g, k) {
              var m = $z(),
                n = m && m.getByName && m.getByName(f);
              return new z.gaplugins.Linker(n).decorate(g, k);
            });
          });
        else if (Array.isArray(c)) {
          var e = String(c[0]).split(".");
          b[e.length === 1 ? e[0] : e[1]] && d.apply(null, c);
        } else if (c === "isLoaded") return !!d.loaded;
      },
      this.D,
      1
    );
  }
  mF.F = "internal.createGaCommandQueue";
  function nF(a) {
    return ld(
      function () {
        if (!ab(e.push))
          throw Error("Object at " + a + " in window is not an array.");
        e.push.apply(e, Array.prototype.slice.call(arguments, 0));
      },
      this.D,
      vb(OC(this).qb(), "__cvt_") ? 2 : 1
    );
  }
  nF.publicName = "createQueue";
  function oF(a, b) {
    var c = null;
    return c;
  }
  oF.F = "internal.createRegex";
  function pF() {
    var a = {};
    return a;
  }
  function qF(a) {}
  qF.F = "internal.declareConsentState";
  function rF(a) {
    var b = "";
    return b;
  }
  rF.F = "internal.decodeUrlHtmlEntities";
  function sF(a, b, c) {
    var d;
    return d;
  }
  sF.F = "internal.decorateUrlWithGaCookies";
  function tF() {}
  tF.F = "internal.deferCustomEvents";
  function uF(a) {
    var b;
    return b;
  }
  uF.F = "internal.detectUserProvidedData";
  function zF(a, b) {
    return f;
  }
  zF.F = "internal.enableAutoEventOnClick";
  var CF = function (a) {
      if (!AF) {
        var b = function () {
          var c = B.body;
          if (c)
            if (BF)
              new MutationObserver(function () {
                for (var e = 0; e < AF.length; e++) F(AF[e]);
              }).observe(c, { childList: !0, subtree: !0 });
            else {
              var d = !1;
              vc(c, "DOMNodeInserted", function () {
                d ||
                  ((d = !0),
                  F(function () {
                    d = !1;
                    for (var e = 0; e < AF.length; e++) F(AF[e]);
                  }));
              });
            }
        };
        AF = [];
        B.body ? b() : F(b);
      }
      AF.push(a);
    },
    BF = !!z.MutationObserver,
    AF;
  function HF(a, b) {
    return p;
  }
  HF.F = "internal.enableAutoEventOnElementVisibility";
  function IF() {}
  IF.F = "internal.enableAutoEventOnError";
  var JF = {},
    KF = [],
    LF = {},
    MF = 0,
    NF = 0;
  function TF(a, b) {
    var c = this;
    return d;
  }
  TF.F = "internal.enableAutoEventOnFormInteraction";
  function YF(a, b) {
    var c = this;
    return f;
  }
  YF.F = "internal.enableAutoEventOnFormSubmit";
  function cG() {
    var a = this;
  }
  cG.F = "internal.enableAutoEventOnGaSend";
  var dG = {},
    eG = [];
  function lG(a, b) {
    var c = this;
    return f;
  }
  lG.F = "internal.enableAutoEventOnHistoryChange";
  var mG = ["http://", "https://", "javascript:", "file://"];
  function qG(a, b) {
    var c = this;
    return k;
  }
  qG.F = "internal.enableAutoEventOnLinkClick";
  var rG, sG;
  function DG(a, b) {
    var c = this;
    return d;
  }
  DG.F = "internal.enableAutoEventOnScroll";
  function EG(a) {
    return function () {
      if (a.limit && a.gi >= a.limit) a.zg && z.clearInterval(a.zg);
      else {
        a.gi++;
        var b = qb();
        DB({
          event: a.eventName,
          "gtm.timerId": a.zg,
          "gtm.timerEventNumber": a.gi,
          "gtm.timerInterval": a.interval,
          "gtm.timerLimit": a.limit,
          "gtm.timerStartTime": a.Kk,
          "gtm.timerCurrentTime": b,
          "gtm.timerElapsedTime": b - a.Kk,
          "gtm.triggers": a.Dn,
        });
      }
    };
  }
  function FG(a, b) {
    return f;
  }
  FG.F = "internal.enableAutoEventOnTimer";
  var GG = function (a, b, c) {
    function d() {
      var g = a();
      f += e ? ((qb() - e) * g.playbackRate) / 1e3 : 0;
      e = qb();
    }
    var e = 0,
      f = 0;
    return {
      createEvent: function (g, k, m) {
        var n = a(),
          p = n.Oh,
          q = m ? Math.round(m) : k ? Math.round(n.Oh * k) : Math.round(n.lk),
          r =
            k !== void 0
              ? Math.round(k * 100)
              : p <= 0
              ? 0
              : Math.round((q / p) * 100),
          t = B.hidden ? !1 : mv(c) >= 0.5;
        d();
        var v = void 0;
        b !== void 0 && (v = [b]);
        var u = WC(c, "gtm.video", v);
        u["gtm.videoProvider"] = "youtube";
        u["gtm.videoStatus"] = g;
        u["gtm.videoUrl"] = n.url;
        u["gtm.videoTitle"] = n.title;
        u["gtm.videoDuration"] = Math.round(p);
        u["gtm.videoCurrentTime"] = Math.round(q);
        u["gtm.videoElapsedTime"] = Math.round(f);
        u["gtm.videoPercent"] = r;
        u["gtm.videoVisible"] = t;
        return u;
      },
      Fk: function () {
        e = qb();
      },
      Jd: function () {
        d();
      },
    };
  };
  var $b = xa(["data-gtm-yt-inspected-"]),
    HG = ["www.youtube.com", "www.youtube-nocookie.com"],
    IG,
    JG = !1;
  var KG = function (a, b, c) {
      var d = a.map(function (g) {
        return { Ka: g, Ef: g, Cf: void 0 };
      });
      if (!b.length) return d;
      var e = b.map(function (g) {
        return { Ka: g * c, Ef: void 0, Cf: g };
      });
      if (!d.length) return e;
      var f = d.concat(e);
      f.sort(function (g, k) {
        return g.Ka - k.Ka;
      });
      return f;
    },
    LG = function (a) {
      a = a === void 0 ? [] : a;
      for (var b = [], c = 0; c < a.length; c++) a[c] < 0 || b.push(a[c]);
      b.sort(function (d, e) {
        return d - e;
      });
      return b;
    },
    MG = function (a) {
      a = a === void 0 ? [] : a;
      for (var b = [], c = 0; c < a.length; c++)
        a[c] > 100 || a[c] < 0 || (b[c] = a[c] / 100);
      b.sort(function (d, e) {
        return d - e;
      });
      return b;
    },
    NG = function (a, b) {
      var c, d;
      function e() {
        t = GG(
          function () {
            return {
              url: w,
              title: x,
              Oh: u,
              lk: a.getCurrentTime(),
              playbackRate: y,
            };
          },
          b.Lb,
          a.getIframe()
        );
        u = 0;
        x = w = "";
        y = 1;
        return f;
      }
      function f(E) {
        switch (E) {
          case 1:
            u = Math.round(a.getDuration());
            w = a.getVideoUrl();
            if (a.getVideoData) {
              var K = a.getVideoData();
              x = K ? K.title : "";
            }
            y = a.getPlaybackRate();
            b.Ih ? DB(t.createEvent("start")) : t.Jd();
            v = KG(b.ri, b.oi, a.getDuration());
            return g(E);
          default:
            return f;
        }
      }
      function g() {
        A = a.getCurrentTime();
        C = pb().getTime();
        t.Fk();
        r();
        return k;
      }
      function k(E) {
        var K;
        switch (E) {
          case 0:
            return n(E);
          case 2:
            K = "pause";
          case 3:
            var M = a.getCurrentTime() - A;
            K =
              Math.abs(((pb().getTime() - C) / 1e3) * y - M) > 1
                ? "seek"
                : K || "buffering";
            a.getCurrentTime() && (b.Hh ? DB(t.createEvent(K)) : t.Jd());
            q();
            return m;
          case -1:
            return e(E);
          default:
            return k;
        }
      }
      function m(E) {
        switch (E) {
          case 0:
            return n(E);
          case 1:
            return g(E);
          case -1:
            return e(E);
          default:
            return m;
        }
      }
      function n() {
        for (; d; ) {
          var E = c;
          z.clearTimeout(d);
          E();
        }
        b.Gh && DB(t.createEvent("complete", 1));
        return e(-1);
      }
      function p() {}
      function q() {
        d && (z.clearTimeout(d), (d = 0), (c = p));
      }
      function r() {
        if (v.length && y !== 0) {
          var E = -1,
            K;
          do {
            K = v[0];
            if (K.Ka > a.getDuration()) return;
            E = (K.Ka - a.getCurrentTime()) / y;
            if (E < 0 && (v.shift(), v.length === 0)) return;
          } while (E < 0);
          c = function () {
            d = 0;
            c = p;
            v.length > 0 &&
              v[0].Ka === K.Ka &&
              (v.shift(), DB(t.createEvent("progress", K.Cf, K.Ef)));
            r();
          };
          d = z.setTimeout(c, E * 1e3);
        }
      }
      var t,
        v = [],
        u,
        w,
        x,
        y,
        A,
        C,
        D = e(-1);
      d = 0;
      c = p;
      return {
        onStateChange: function (E) {
          D = D(E);
        },
        onPlaybackRateChange: function (E) {
          A = a.getCurrentTime();
          C = pb().getTime();
          t.Jd();
          y = E;
          q();
          r();
        },
      };
    },
    PG = function (a) {
      F(function () {
        function b() {
          for (
            var d = c.getElementsByTagName("iframe"), e = d.length, f = 0;
            f < e;
            f++
          )
            OG(d[f], a);
        }
        var c = B;
        b();
        CF(b);
      });
    },
    OG = function (a, b) {
      if (
        !a.getAttribute("data-gtm-yt-inspected-" + b.Lb) &&
        (bc(a, "data-gtm-yt-inspected-" + b.Lb), QG(a, b.jf))
      ) {
        a.id || (a.id = RG());
        var c = z.YT,
          d = c.get(a.id);
        d || (d = new c.Player(a.id));
        var e = NG(d, b),
          f = {},
          g;
        for (g in e)
          (f = { wf: f.wf }),
            (f.wf = g),
            e.hasOwnProperty(f.wf) &&
              d.addEventListener(
                f.wf,
                (function (k) {
                  return function (m) {
                    return e[k.wf](m.data);
                  };
                })(f)
              );
      }
    },
    QG = function (a, b) {
      var c = a.getAttribute("src");
      if (SG(c, "embed/")) {
        if (c.indexOf("enablejsapi=1") > 0) return !0;
        if (b) {
          var d;
          var e = c.indexOf("?") !== -1 ? "&" : "?";
          c.indexOf("origin=") > -1
            ? (d = c + e + "enablejsapi=1")
            : (IG ||
                ((IG = B.location.protocol + "//" + B.location.hostname),
                B.location.port && (IG += ":" + B.location.port)),
              (d = c + e + "enablejsapi=1&origin=" + encodeURIComponent(IG)));
          var f;
          f = Kb(d);
          a.src = Lb(f).toString();
          return !0;
        }
      }
      return !1;
    },
    SG = function (a, b) {
      if (!a) return !1;
      for (var c = 0; c < HG.length; c++)
        if (a.indexOf("//" + HG[c] + "/" + b) >= 0) return !0;
      return !1;
    },
    RG = function () {
      var a = "" + Math.round(Math.random() * 1e9);
      return B.getElementById(a) ? RG() : a;
    };
  function TG(a, b) {
    var c = this;
    var d = function () {
      PG(q);
    };
    if (!Jg(a)) throw H(this.getName(), ["Object", "any"], arguments);
    KC([
      function () {
        J(c, "detect_youtube_activity_events", {
          fixMissingApi: !!a.get("fixMissingApi"),
        });
      },
    ]);
    var e = QC(b),
      f = !!a.get("captureStart"),
      g = !!a.get("captureComplete"),
      k = !!a.get("capturePause"),
      m = MG(G(a.get("progressThresholdsPercent"))),
      n = LG(G(a.get("progressThresholdsTimeInSeconds"))),
      p = !!a.get("fixMissingApi");
    if (!(f || g || k || m.length || n.length)) return;
    var q = { Ih: f, Gh: g, Hh: k, oi: m, ri: n, jf: p, Lb: e },
      r = z.YT;
    if (r) return r.ready && r.ready(d), e;
    var t = z.onYouTubeIframeAPIReady;
    z.onYouTubeIframeAPIReady = function () {
      t && t();
      d();
    };
    F(function () {
      for (
        var v = B.getElementsByTagName("script"), u = v.length, w = 0;
        w < u;
        w++
      ) {
        var x = v[w].getAttribute("src");
        if (SG(x, "iframe_api") || SG(x, "player_api")) return e;
      }
      for (
        var y = B.getElementsByTagName("iframe"), A = y.length, C = 0;
        C < A;
        C++
      )
        if (!JG && QG(y[C], q.jf))
          return pc("https://www.youtube.com/iframe_api"), (JG = !0), e;
    });
    return e;
  }
  TG.F = "internal.enableAutoEventOnYouTubeActivity";
  JG = !1;
  function UG(a, b) {
    if (!I(a) || !Kg(b))
      throw H(this.getName(), ["string", "Object|undefined"], arguments);
    var c = b ? G(b) : {},
      d = a,
      e = !1;
    return e;
  }
  UG.F = "internal.evaluateBooleanExpression";
  var VG;
  function WG(a) {
    var b = !1;
    return b;
  }
  WG.F = "internal.evaluateMatchingRules";
  function DH() {
    return lq(7) && lq(9) && lq(10);
  }
  function yI(a, b, c, d) {}
  yI.F = "internal.executeEventProcessor";
  function zI(a) {
    var b;
    if (!I(a)) throw H(this.getName(), ["string"], arguments);
    J(this, "unsafe_run_arbitrary_javascript");
    try {
      var c = z.google_tag_manager;
      c && typeof c.e === "function" && (b = c.e(a));
    } catch (d) {}
    return ld(b, this.D, 1);
  }
  zI.F = "internal.executeJavascriptString";
  function AI(a) {
    var b;
    return b;
  }
  function BI(a) {
    var b = {};
    return ld(b);
  }
  BI.F = "internal.getAdsCookieWritingOptions";
  function CI(a) {
    var b = !1;
    return b;
  }
  CI.F = "internal.getAllowAdPersonalization";
  function DI(a, b) {
    b = b === void 0 ? !0 : b;
    var c;
    return c;
  }
  DI.F = "internal.getAuid";
  var EI = null;
  function FI() {
    var a = new Na();
    return a;
  }
  FI.publicName = "getContainerVersion";
  function GI(a, b) {
    b = b === void 0 ? !0 : b;
    var c;
    return c;
  }
  GI.publicName = "getCookieValues";
  function HI() {
    return kn();
  }
  HI.F = "internal.getCountryCode";
  function II() {
    var a = [];
    return ld(a);
  }
  II.F = "internal.getDestinationIds";
  function JI(a) {
    var b = new Na();
    return b;
  }
  JI.F = "internal.getDeveloperIds";
  function KI(a, b) {
    var c = null;
    return c;
  }
  KI.F = "internal.getElementAttribute";
  function LI(a) {
    var b = null;
    return b;
  }
  LI.F = "internal.getElementById";
  function MI(a) {
    var b = "";
    return b;
  }
  MI.F = "internal.getElementInnerText";
  function NI(a, b) {
    var c = null;
    return ld(c);
  }
  NI.F = "internal.getElementProperty";
  function OI(a) {
    var b;
    return b;
  }
  OI.F = "internal.getElementValue";
  function PI(a) {
    var b = 0;
    return b;
  }
  PI.F = "internal.getElementVisibilityRatio";
  function QI(a) {
    var b = null;
    return b;
  }
  QI.F = "internal.getElementsByCssSelector";
  function RI(a) {
    var b;
    if (!I(a)) throw H(this.getName(), ["string"], arguments);
    J(this, "read_event_data", a);
    var c;
    a: {
      var d = a,
        e = OC(this).originalEventData;
      if (e) {
        for (
          var f = e, g = {}, k = {}, m = {}, n = [], p = d.split("\\\\"), q = 0;
          q < p.length;
          q++
        ) {
          for (var r = p[q].split("\\."), t = 0; t < r.length; t++) {
            for (var v = r[t].split("."), u = 0; u < v.length; u++)
              n.push(v[u]), u !== v.length - 1 && n.push(m);
            t !== r.length - 1 && n.push(k);
          }
          q !== p.length - 1 && n.push(g);
        }
        for (
          var w = [], x = "", y = l(n), A = y.next();
          !A.done;
          A = y.next()
        ) {
          var C = A.value;
          C === m
            ? (w.push(x), (x = ""))
            : (x = C === g ? x + "\\" : C === k ? x + "." : x + C);
        }
        x && w.push(x);
        for (var D = l(w), E = D.next(); !E.done; E = D.next()) {
          if (f == null) {
            c = void 0;
            break a;
          }
          f = f[E.value];
        }
        c = f;
      } else c = void 0;
    }
    b = ld(c, this.D, 1);
    return b;
  }
  RI.F = "internal.getEventData";
  var SI = {};
  SI.enableAWFledge = Q(35);
  SI.enableAdsConversionValidation = Q(20);
  SI.enableAdsSupernovaParams = Q(31);
  SI.enableAutoPhoneAndAddressDetection = Q(33);
  SI.enableAutoPiiOnPhoneAndAddress = Q(34);
  SI.enableCachedEcommerceData = Q(43);
  SI.enableCloudRecommentationsErrorLogging = Q(44);
  SI.enableCloudRecommentationsSchemaIngestion = Q(45);
  SI.enableCloudRetailInjectPurchaseMetadata = Q(47);
  SI.enableCloudRetailLogging = Q(46);
  SI.enableCloudRetailPageCategories = Q(48);
  SI.enableConsentDisclosureActivity = Q(50);
  SI.enableDCFledge = Q(58);
  SI.enableDataLayerSearchExperiment = Q(116);
  SI.enableDecodeUri = Q(85);
  SI.enableDeferAllEnhancedMeasurement = Q(59);
  SI.enableFormSkipValidation = Q(79);
  SI.enableGa4OutboundClicksFix = Q(88);
  SI.enableGaAdsConversions = Q(109);
  SI.enableGaAdsConversionsClientId = Q(108);
  SI.enableLimitedDataModes = Q(100);
  SI.enableMerchantRenameForBasketData = Q(103);
  SI.enableUnsiloedModeGtmTags = Q(128);
  SI.enableUrlDecodeEventUsage = Q(130);
  SI.enableZoneConfigInChildContainers = Q(132);
  SI.useEnableAutoEventOnFormApis = Q(144);
  function TI() {
    return ld(SI);
  }
  TI.F = "internal.getFlags";
  function UI() {
    return new id(kC);
  }
  UI.F = "internal.getHtmlId";
  function VI(a) {
    var b;
    return b;
  }
  VI.F = "internal.getIframingState";
  function WI(a, b) {
    var c = {};
    return ld(c);
  }
  WI.F = "internal.getLinkerValueFromLocation";
  function XI() {
    var a = new Na();
    return a;
  }
  XI.F = "internal.getPrivacyStrings";
  function YI(a, b) {
    var c;
    return c;
  }
  YI.F = "internal.getProductSettingsParameter";
  function ZI(a, b) {
    var c;
    return c;
  }
  ZI.publicName = "getQueryParameters";
  function $I(a, b) {
    var c;
    return c;
  }
  $I.publicName = "getReferrerQueryParameters";
  function aJ(a) {
    var b = "";
    return b;
  }
  aJ.publicName = "getReferrerUrl";
  function bJ() {
    return ln();
  }
  bJ.F = "internal.getRegionCode";
  function cJ(a, b) {
    var c;
    return c;
  }
  cJ.F = "internal.getRemoteConfigParameter";
  function dJ() {
    var a = new Na();
    a.set("width", 0);
    a.set("height", 0);
    return a;
  }
  dJ.F = "internal.getScreenDimensions";
  function eJ() {
    var a = "";
    return a;
  }
  eJ.F = "internal.getTopSameDomainUrl";
  function fJ() {
    var a = "";
    return a;
  }
  fJ.F = "internal.getTopWindowUrl";
  function gJ(a) {
    var b = "";
    return b;
  }
  gJ.publicName = "getUrl";
  function hJ() {
    J(this, "get_user_agent");
    return fc.userAgent;
  }
  hJ.F = "internal.getUserAgent";
  function iJ() {
    var a;
    return a ? ld(cx(a)) : a;
  }
  iJ.F = "internal.getUserAgentClientHints";
  function qJ() {
    return (z.gaGlobal = z.gaGlobal || {});
  }
  function rJ() {
    var a = qJ();
    a.hid = a.hid || fb();
    return a.hid;
  }
  function sJ(a, b) {
    var c = qJ();
    if (c.vid === void 0 || (b && !c.from_cookie))
      (c.vid = a), (c.from_cookie = b);
  }
  function OJ(a) {
    (xw(a) || yj()) && X(a, N.g.Fj, ln() || kn());
    !xw(a) && yj() && X(a, N.g.Nj, "::");
  }
  function PJ(a) {
    if (Q(81) && yj()) {
      mu(a);
      nu(a, "cpf", Du(T(a.m, N.g.Ca)));
      var b = T(a.m, N.g.yb);
      nu(a, "cu", b === !0 ? 1 : b === !1 ? 0 : void 0);
      nu(a, "cf", Du(T(a.m, N.g.Oa)));
      nu(a, "cd", Xq(Cu(T(a.m, N.g.Ga)), Cu(T(a.m, N.g.ab))));
    }
  }
  var eK = function (a) {
      this.H = a;
      this.j = "";
    },
    fK = function (a, b) {
      a.C = b;
      return a;
    },
    gK = function (a, b) {
      b = a.j + b;
      for (var c = b.indexOf("\n\n"); c !== -1; ) {
        var d = a,
          e;
        a: {
          var f = l(b.substring(0, c).split("\n")),
            g = f.next().value,
            k = f.next().value;
          if (g.indexOf("event: message") === 0 && k.indexOf("data: ") === 0)
            try {
              e = JSON.parse(k.substring(k.indexOf(":") + 1));
              break a;
            } catch (M) {}
          e = void 0;
        }
        var m = d,
          n = e;
        if (n) {
          var p = n.send_pixel,
            q = n.options,
            r = m.H;
          if (p) {
            var t = p || [];
            if (Array.isArray(t))
              for (
                var v = Wc(q) ? q : {}, u = l(t), w = u.next();
                !w.done;
                w = u.next()
              )
                r(w.value, v);
          }
          var x = n.create_iframe,
            y = n.options,
            A = m.C;
          if (x && A) {
            var C = x || [];
            if (Array.isArray(C))
              for (
                var D = Wc(y) ? y : {}, E = l(C), K = E.next();
                !K.done;
                K = E.next()
              )
                A(K.value, D);
          }
        }
        b = b.substring(c + 2);
        c = b.indexOf("\n\n");
      }
      a.j = b;
    };
  function hK(a) {
    var b = a.search;
    return (
      a.protocol +
      "//" +
      a.hostname +
      a.pathname +
      (b ? b + "&richsstsse" : "?richsstsse")
    );
  }
  var VK = window,
    WK = document,
    XK = function (a) {
      var b = VK._gaUserPrefs;
      if (
        (b && b.ioo && b.ioo()) ||
        WK.documentElement.hasAttribute("data-google-analytics-opt-out") ||
        (a && VK["ga-disable-" + a] === !0)
      )
        return !0;
      try {
        var c = VK.external;
        if (c && c._gaUserPrefs && c._gaUserPrefs == "oo") return !0;
      } catch (p) {}
      for (
        var d = [], e = String(WK.cookie).split(";"), f = 0;
        f < e.length;
        f++
      ) {
        var g = e[f].split("="),
          k = g[0].replace(/^\s*|\s*$/g, "");
        if (k && k == "AMP_TOKEN") {
          var m = g
            .slice(1)
            .join("=")
            .replace(/^\s*|\s*$/g, "");
          m && (m = decodeURIComponent(m));
          d.push(m);
        }
      }
      for (var n = 0; n < d.length; n++) if (d[n] == "$OPT_OUT") return !0;
      return WK.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  function hL(a) {
    ib(a, function (c) {
      c.charAt(0) === "_" && delete a[c];
    });
    var b = a[N.g.pb] || {};
    ib(b, function (c) {
      c.charAt(0) === "_" && delete b[c];
    });
  }
  function OL(a, b) {}
  function PL(a, b) {
    var c = function () {};
    return c;
  }
  function QL(a, b, c) {}
  var RL = PL;
  var SL = function (a, b, c) {
    for (var d = 0; d < b.length; d++)
      a.hasOwnProperty(b[d]) && (a[String(b[d])] = c(a[String(b[d])]));
  };
  function TL(a, b, c) {
    var d = this;
    if (!I(a) || !Kg(b) || !Kg(c))
      throw H(
        this.getName(),
        ["string", "Object|undefined", "Object|undefined"],
        arguments
      );
    var e = b ? G(b) : {};
    KC([
      function () {
        return J(d, "configure_google_tags", a, e);
      },
    ]);
    var f = c ? G(c) : {},
      g = OC(this);
    f.originatingEntity = ED(g);
    bv(Yu(a, e), g.eventId, f);
  }
  TL.F = "internal.gtagConfig";
  function UL() {
    var a = {};
    return a;
  }
  function WL(a, b) {}
  WL.publicName = "gtagSet";
  function XL() {
    var a = {};
    return a;
  }
  function YL(a, b) {}
  YL.publicName = "injectHiddenIframe";
  var AC = (function () {
    var a = 0;
    return function (b) {
      switch (b) {
        case 1:
          a |= 1;
          break;
        case 2:
          a |= 2;
          break;
        case 3:
          a |= 4;
      }
      return a;
    };
  })();
  function ZL(a, b, c, d, e) {
    var f = this;
  }
  ZL.F = "internal.injectHtml";
  var cM = {};
  function eM(a, b, c, d) {}
  var fM = { dl: 1, id: 1 },
    gM = {};
  function hM(a, b, c, d) {}
  eM.publicName = "injectScript";
  hM.F = "internal.injectScript";
  function iM() {
    return pn();
  }
  iM.F = "internal.isAutoPiiEligible";
  function jM(a) {
    var b = !0;
    return b;
  }
  jM.publicName = "isConsentGranted";
  function kM(a) {
    var b = !1;
    return b;
  }
  kM.F = "internal.isDebugMode";
  function lM() {
    return nn();
  }
  lM.F = "internal.isDmaRegion";
  function mM(a) {
    var b = !1;
    return b;
  }
  mM.F = "internal.isEntityInfrastructure";
  function nM() {
    var a = !1;
    return a;
  }
  nM.F = "internal.isLandingPage";
  function oM() {
    var a = oh(function (b) {
      OC(this).log("error", b);
    });
    a.publicName = "JSON";
    return a;
  }
  function pM(a) {
    var b = void 0;
    return ld(b);
  }
  pM.F = "internal.legacyParseUrl";
  function qM() {
    return !1;
  }
  var rM = {
    getItem: function (a) {
      var b = null;
      return b;
    },
    setItem: function (a, b) {
      return !1;
    },
    removeItem: function (a) {},
  };
  function sM() {
    try {
      J(this, "logging");
    } catch (c) {
      return;
    }
    if (!console) return;
    for (
      var a = Array.prototype.slice.call(arguments, 0), b = 0;
      b < a.length;
      b++
    )
      a[b] = G(a[b], this.D);
    console.log.apply(console, a);
  }
  sM.publicName = "logToConsole";
  function tM(a, b) {}
  tM.F = "internal.mergeRemoteConfig";
  function uM(a, b, c) {
    c = c === void 0 ? !0 : c;
    var d = [];
    return ld(d);
  }
  uM.F = "internal.parseCookieValuesFromString";
  function vM(a) {
    var b = void 0;
    return b;
  }
  vM.publicName = "parseUrl";
  function wM(a) {}
  wM.F = "internal.processAsNewEvent";
  function xM(a, b, c) {
    var d;
    return d;
  }
  xM.F = "internal.pushToDataLayer";
  function yM(a) {
    var b = za.apply(1, arguments),
      c = !1;
    return c;
  }
  yM.publicName = "queryPermission";
  function zM(a) {
    var b = this;
  }
  zM.F = "internal.queueAdsTransmission";
  function AM() {
    var a = "";
    return a;
  }
  AM.publicName = "readCharacterSet";
  function BM() {
    return aj.Mb;
  }
  BM.F = "internal.readDataLayerName";
  function CM() {
    var a = "";
    return a;
  }
  CM.publicName = "readTitle";
  function DM(a, b) {
    var c = this;
  }
  DM.F = "internal.registerCcdCallback";
  function EM(a) {
    return !0;
  }
  EM.F = "internal.registerDestination";
  var FM = ["config", "event", "get", "set"];
  function GM(a, b, c) {}
  GM.F = "internal.registerGtagCommandListener";
  function HM(a, b) {
    var c = !1;
    return c;
  }
  HM.F = "internal.removeDataLayerEventListener";
  function IM(a, b) {}
  IM.F = "internal.removeFormData";
  function JM() {}
  JM.publicName = "resetDataLayer";
  function KM(a, b, c) {
    var d = void 0;
    return d;
  }
  KM.F = "internal.scrubUrlParams";
  function LM(a) {}
  LM.F = "internal.sendAdsHit";
  function MM(a, b, c, d) {}
  MM.F = "internal.sendGtagEvent";
  function NM(a, b, c) {}
  NM.publicName = "sendPixel";
  function OM(a, b) {}
  OM.F = "internal.setAnchorHref";
  function PM(a) {}
  PM.F = "internal.setContainerConsentDefaults";
  function QM(a, b, c, d) {
    var e = this;
    d = d === void 0 ? !0 : d;
    var f = !1;
    return f;
  }
  QM.publicName = "setCookie";
  function RM(a) {}
  RM.F = "internal.setCorePlatformServices";
  function SM(a, b) {}
  SM.F = "internal.setDataLayerValue";
  function TM(a) {}
  TM.publicName = "setDefaultConsentState";
  function UM(a, b) {}
  UM.F = "internal.setDelegatedConsentType";
  function VM(a, b) {}
  VM.F = "internal.setFormAction";
  function WM(a, b, c) {
    c = c === void 0 ? !1 : c;
  }
  WM.F = "internal.setInCrossContainerData";
  function XM(a, b, c) {
    return !1;
  }
  XM.publicName = "setInWindow";
  function YM(a, b, c) {}
  YM.F = "internal.setProductSettingsParameter";
  function ZM(a, b, c) {}
  ZM.F = "internal.setRemoteConfigParameter";
  var $M = {
      full_transmission: 0,
      limited_transmission: 1,
      no_transmission: 2,
    },
    aN = { no_queue: 0, ads: 1, analytics: 2, monitoring: 3 };
  function bN(a, b) {}
  bN.F = "internal.setTransmissionMode";
  function cN(a, b, c, d) {
    var e = this;
  }
  cN.publicName = "sha256";
  function dN(a, b, c) {}
  dN.F = "internal.sortRemoteConfigParameters";
  function eN(a, b) {
    var c = void 0;
    return c;
  }
  eN.F = "internal.subscribeToCrossContainerData";
  var fN = {},
    gN = {};
  fN.getItem = function (a) {
    var b = null;
    return b;
  };
  fN.setItem = function (a, b) {};
  fN.removeItem = function (a) {};
  fN.clear = function () {};
  fN.publicName = "templateStorage";
  function hN(a, b) {
    var c = !1;
    return c;
  }
  hN.F = "internal.testRegex";
  function iN(a) {
    var b;
    return b;
  }
  function jN(a) {
    var b;
    return b;
  }
  jN.F = "internal.unsiloId";
  function kN(a, b) {
    var c;
    return c;
  }
  kN.F = "internal.unsubscribeFromCrossContainerData";
  function lN(a) {}
  lN.publicName = "updateConsentState";
  var mN;
  function nN(a, b, c) {
    mN = mN || new zh();
    mN.add(a, b, c);
  }
  function oN(a, b) {
    var c = (mN = mN || new zh());
    if (c.j.hasOwnProperty(a))
      throw Error(
        "Attempting to add a private function which already exists: " + a + "."
      );
    if (c.contains(a))
      throw Error(
        "Attempting to add a private function with an existing API name: " +
          a +
          "."
      );
    c.j[a] = ab(b) ? Wg(a, b) : Xg(a, b);
  }
  function pN() {
    return function (a) {
      var b;
      var c = mN;
      if (c.contains(a)) b = c.get(a, this);
      else {
        var d;
        if ((d = c.j.hasOwnProperty(a))) {
          var e = !1,
            f = this.D.j;
          if (f) {
            var g = f.qb();
            if (g) {
              g.indexOf("__cvt_") !== 0 && (e = !0);
            }
          } else e = !0;
          d = e;
        }
        if (d) {
          var k = c.j.hasOwnProperty(a) ? c.j[a] : void 0;
          b = k;
        } else throw Error(a + " is not a valid API name.");
      }
      return b;
    };
  }
  function qN() {
    var a = function (c) {
        return void oN(c.F, c);
      },
      b = function (c) {
        return void nN(c.publicName, c);
      };
    b(IC);
    b(PC);
    b(dE);
    b(fE);
    b(gE);
    b(nE);
    b(pE);
    b(lF);
    b(oM());
    b(nF);
    b(FI);
    b(GI);
    b(ZI);
    b($I);
    b(aJ);
    b(gJ);
    b(WL);
    b(YL);
    b(eM);
    b(jM);
    b(sM);
    b(vM);
    b(yM);
    b(AM);
    b(CM);
    b(NM);
    b(QM);
    b(TM);
    b(XM);
    b(cN);
    b(fN);
    b(lN);
    nN("Math", ah());
    nN("Object", xh);
    nN("TestHelper", Ch());
    nN("assertApi", Yg);
    nN("assertThat", Zg);
    nN("decodeUri", ch);
    nN("decodeUriComponent", dh);
    nN("encodeUri", eh);
    nN("encodeUriComponent", fh);
    nN("fail", kh);
    nN("generateRandom", lh);
    nN("getTimestamp", mh);
    nN("getTimestampMillis", mh);
    nN("getType", nh);
    nN("makeInteger", ph);
    nN("makeNumber", qh);
    nN("makeString", rh);
    nN("makeTableMap", sh);
    nN("mock", vh);
    nN("mockObject", wh);
    nN("fromBase64", AI, !("atob" in z));
    nN("localStorage", rM, !qM());
    nN("toBase64", iN, !("btoa" in z));
    a(HC);
    a(LC);
    a(fD);
    a(rD);
    a(yD);
    a(DD);
    a(TD);
    a(bE);
    a(eE);
    a(hE);
    a(iE);
    a(jE);
    a(kE);
    a(lE);
    a(mE);
    a(oE);
    a(qE);
    a(kF);
    a(mF);
    a(oF);
    a(qF);
    a(rF);
    a(sF);
    a(tF);
    a(uF);
    a(zF);
    a(HF);
    a(IF);
    a(TF);
    a(YF);
    a(cG);
    a(lG);
    a(qG);
    a(DG);
    a(FG);
    a(TG);
    a(UG);
    a(WG);
    a(yI);
    a(zI);
    a(BI);
    a(CI);
    a(DI);
    a(HI);
    a(II);
    a(JI);
    a(KI);
    a(LI);
    a(MI);
    a(NI);
    a(OI);
    a(PI);
    a(QI);
    a(RI);
    a(TI);
    a(UI);
    a(VI);
    a(WI);
    a(XI);
    a(YI);
    a(bJ);
    a(cJ);
    a(dJ);
    a(eJ);
    a(fJ);
    a(iJ);
    a(TL);
    a(ZL);
    a(hM);
    a(iM);
    a(kM);
    a(lM);
    a(mM);
    a(nM);
    a(pM);
    a(RD);
    a(tM);
    a(uM);
    a(wM);
    a(xM);
    a(zM);
    a(BM);
    a(DM);
    a(EM);
    a(GM);
    a(HM);
    a(IM);
    a(Bh);
    a(KM);
    a(LM);
    a(MM);
    a(OM);
    a(PM);
    a(RM);
    a(SM);
    a(UM);
    a(VM);
    a(WM);
    a(YM);
    a(ZM);
    a(bN);
    a(dN);
    a(eN);
    a(hN);
    a(jN);
    a(kN);
    oN("internal.CrossContainerSchema", pF());
    oN("internal.GtagSchema", UL());
    oN("internal.IframingStateSchema", XL());
    return pN();
  }
  var FC;
  function rN() {
    var a = data.sandboxed_scripts,
      b = data.security_groups;
    a: {
      var c = data.runtime || [],
        d = data.runtime_lines;
      FC = new Ie();
      sN();
      mf = EC();
      var e = FC,
        f = qN(),
        g = new ed("require", f);
      g.Ja();
      e.j.j.set("require", g);
      for (var k = [], m = 0; m < c.length; m++) {
        var n = c[m];
        if (!Array.isArray(n) || n.length < 3) {
          if (n.length === 0) continue;
          break a;
        }
        d && d[m] && d[m].length && If(n, d[m]);
        try {
          FC.execute(n), Q(107) && ok && n[0] === 50 && k.push(n[1]);
        } catch (t) {}
      }
      Q(107) && (zf = k);
    }
    if (a && a.length)
      for (var p = ["sandboxedScripts"], q = 0; q < a.length; q++) {
        var r = a[q].replace(/^_*/, "");
        rj[r] = p;
      }
    tN(b);
  }
  function sN() {
    FC.j.j.H = function (a, b, c) {
      eo.SANDBOXED_JS_SEMAPHORE = eo.SANDBOXED_JS_SEMAPHORE || 0;
      eo.SANDBOXED_JS_SEMAPHORE++;
      try {
        return a.apply(b, c);
      } finally {
        eo.SANDBOXED_JS_SEMAPHORE--;
      }
    };
  }
  function tN(a) {
    a &&
      ib(a, function (b, c) {
        for (var d = 0; d < c.length; d++) {
          var e = c[d].replace(/^_*/, "");
          rj[e] = rj[e] || [];
          rj[e].push(b);
        }
      });
  }
  function uN(a) {
    bv(Wu("developer_id." + a, !0), 0, {});
  }
  var vN = Array.isArray;
  function wN(a, b) {
    return Xc(a, b || null);
  }
  function Y(a) {
    return window.encodeURIComponent(a);
  }
  function xN(a, b, c) {
    tc(a, b, c);
  }
  function yN(a, b) {
    if (!a) return !1;
    var c = Rj(Xj(a), "host");
    if (!c) return !1;
    for (var d = 0; b && d < b.length; d++) {
      var e = b[d] && b[d].toLowerCase();
      if (e) {
        var f = c.length - e.length;
        f > 0 && e.charAt(0) !== "." && (f--, (e = "." + e));
        if (f >= 0 && c.indexOf(e, f) === f) return !0;
      }
    }
    return !1;
  }
  function zN(a, b, c) {
    for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
      a[f] &&
        a[f].hasOwnProperty(b) &&
        a[f].hasOwnProperty(c) &&
        ((d[a[f][b]] = a[f][c]), (e = !0));
    return e ? d : null;
  }
  var IN = z.clearTimeout,
    JN = z.setTimeout;
  function KN(a, b, c) {
    if (Cq()) {
      b && F(b);
    } else return pc(a, b, c, void 0);
  }
  function LN() {
    return z.location.href;
  }
  function MN(a, b) {
    return Ej(a, b || 2);
  }
  function NN(a, b) {
    z[a] = b;
  }
  function ON(a, b, c) {
    b && (z[a] === void 0 || (c && !z[a])) && (z[a] = b);
    return z[a];
  }
  function PN(a, b) {
    if (Cq()) {
      b && F(b);
    } else rc(a, b);
  }
  var QN = {};
  var Z = { securityGroups: {} };
  (Z.securityGroups.f = ["google"]),
    (Z.__f = function (a) {
      var b = MN("gtm.referrer", 1) || B.referrer;
      return b
        ? a.vtp_component && a.vtp_component != "URL"
          ? Rj(
              Xj(String(b)),
              a.vtp_component,
              a.vtp_stripWww,
              a.vtp_defaultPages,
              a.vtp_queryKey
            )
          : Uj(Xj(String(b)))
        : String(b);
    }),
    (Z.__f.o = "f"),
    (Z.__f.isVendorTemplate = !0),
    (Z.__f.priorityOverride = 0),
    (Z.__f.isInfrastructure = !0),
    (Z.__f.runInSiloedMode = !1);

  (Z.securityGroups.access_globals = ["google"]),
    (function () {
      function a(b, c, d) {
        var e = { key: d, read: !1, write: !1, execute: !1 };
        switch (c) {
          case "read":
            e.read = !0;
            break;
          case "write":
            e.write = !0;
            break;
          case "readwrite":
            e.read = e.write = !0;
            break;
          case "execute":
            e.execute = !0;
            break;
          default:
            throw Error("Invalid " + b + " request " + c);
        }
        return e;
      }
      (function (b) {
        Z.__access_globals = b;
        Z.__access_globals.o = "access_globals";
        Z.__access_globals.isVendorTemplate = !0;
        Z.__access_globals.priorityOverride = 0;
        Z.__access_globals.isInfrastructure = !1;
        Z.__access_globals.runInSiloedMode = !1;
      })(function (b) {
        for (
          var c = b.vtp_keys || [],
            d = b.vtp_createPermissionError,
            e = [],
            f = [],
            g = [],
            k = 0;
          k < c.length;
          k++
        ) {
          var m = c[k],
            n = m.key;
          m.read && e.push(n);
          m.write && f.push(n);
          m.execute && g.push(n);
        }
        return {
          assert: function (p, q, r) {
            if (!bb(r)) throw d(p, {}, "Key must be a string.");
            if (q === "read") {
              if (e.indexOf(r) > -1) return;
            } else if (q === "write") {
              if (f.indexOf(r) > -1) return;
            } else if (q === "readwrite") {
              if (f.indexOf(r) > -1 && e.indexOf(r) > -1) return;
            } else if (q === "execute") {
              if (g.indexOf(r) > -1) return;
            } else
              throw d(
                p,
                {},
                "Operation must be either 'read', 'write', or 'execute', was " +
                  q
              );
            throw d(
              p,
              {},
              "Prohibited " + q + " on global variable: " + r + "."
            );
          },
          M: a,
        };
      });
    })();
  (Z.securityGroups.u = ["google"]),
    (function () {
      var a = function (b) {
        return {
          toString: function () {
            return b;
          },
        };
      };
      (function (b) {
        Z.__u = b;
        Z.__u.o = "u";
        Z.__u.isVendorTemplate = !0;
        Z.__u.priorityOverride = 0;
        Z.__u.isInfrastructure = !0;
        Z.__u.runInSiloedMode = !1;
      })(function (b) {
        var c;
        c =
          (c = b.vtp_customUrlSource
            ? b.vtp_customUrlSource
            : MN("gtm.url", 1)) || LN();
        var d = b[a("vtp_component")];
        if (!d || d == "URL") return Uj(Xj(String(c)));
        var e = Xj(String(c)),
          f;
        if (d === "QUERY")
          a: {
            var g = b[a("vtp_multiQueryKeys").toString()],
              k = b[a("vtp_queryKey").toString()] || "",
              m = b[a("vtp_ignoreEmptyQueryParam").toString()],
              n;
            n = g
              ? Array.isArray(k)
                ? k
                : String(k).replace(/\s+/g, "").split(",")
              : [String(k)];
            for (var p = 0; p < n.length; p++) {
              var q = Rj(e, "QUERY", void 0, void 0, n[p]);
              if (q != void 0 && (!m || q !== "")) {
                f = q;
                break a;
              }
            }
            f = void 0;
          }
        else
          f = Rj(
            e,
            d,
            d == "HOST" ? b[a("vtp_stripWww")] : void 0,
            d == "PATH" ? b[a("vtp_defaultPages")] : void 0
          );
        return f;
      });
    })();
  (Z.securityGroups.v = ["google"]),
    (Z.__v = function (a) {
      var b = a.vtp_name;
      if (!b || !b.replace) return !1;
      var c = MN(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
      return c !== void 0 ? c : a.vtp_defaultValue;
    }),
    (Z.__v.o = "v"),
    (Z.__v.isVendorTemplate = !0),
    (Z.__v.priorityOverride = 0),
    (Z.__v.isInfrastructure = !0),
    (Z.__v.runInSiloedMode = !1);

  (Z.securityGroups.read_event_data = ["google"]),
    (function () {
      function a(b, c) {
        return { key: c };
      }
      (function (b) {
        Z.__read_event_data = b;
        Z.__read_event_data.o = "read_event_data";
        Z.__read_event_data.isVendorTemplate = !0;
        Z.__read_event_data.priorityOverride = 0;
        Z.__read_event_data.isInfrastructure = !1;
        Z.__read_event_data.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_eventDataAccess,
          d = b.vtp_keyPatterns || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (g != null && !bb(g))
              throw e(f, { key: g }, "Key must be a string.");
            if (c !== "any") {
              try {
                if (c === "specific" && g != null && og(g, d)) return;
              } catch (k) {
                throw e(f, { key: g }, "Invalid key filter.");
              }
              throw e(f, { key: g }, "Prohibited read from event data.");
            }
          },
          M: a,
        };
      });
    })();
  (Z.securityGroups.process_dom_events = ["google"]),
    (function () {
      function a(b, c, d) {
        return { targetType: c, eventName: d };
      }
      (function (b) {
        Z.__process_dom_events = b;
        Z.__process_dom_events.o = "process_dom_events";
        Z.__process_dom_events.isVendorTemplate = !0;
        Z.__process_dom_events.priorityOverride = 0;
        Z.__process_dom_events.isInfrastructure = !1;
        Z.__process_dom_events.runInSiloedMode = !1;
      })(function (b) {
        for (
          var c = b.vtp_targets || [],
            d = b.vtp_createPermissionError,
            e = {},
            f = 0;
          f < c.length;
          f++
        ) {
          var g = c[f];
          e[g.targetType] = e[g.targetType] || [];
          e[g.targetType].push(g.eventName);
        }
        return {
          assert: function (k, m, n) {
            if (!e[m]) throw d(k, {}, "Prohibited event target " + m + ".");
            if (e[m].indexOf(n) === -1)
              throw d(
                k,
                {},
                "Prohibited listener registration for DOM event " + n + "."
              );
          },
          M: a,
        };
      });
    })();
  (Z.securityGroups.detect_youtube_activity_events = ["google"]),
    (function () {
      function a(b, c) {
        return { options: { fixMissingApi: !!c.fixMissingApi } };
      }
      (function (b) {
        Z.__detect_youtube_activity_events = b;
        Z.__detect_youtube_activity_events.o = "detect_youtube_activity_events";
        Z.__detect_youtube_activity_events.isVendorTemplate = !0;
        Z.__detect_youtube_activity_events.priorityOverride = 0;
        Z.__detect_youtube_activity_events.isInfrastructure = !1;
        Z.__detect_youtube_activity_events.runInSiloedMode = !1;
      })(function (b) {
        var c = !!b.vtp_allowFixMissingJavaScriptApi,
          d = b.vtp_createPermissionError;
        return {
          assert: function (e, f) {
            if (!c && f && f.fixMissingApi)
              throw d(e, {}, "Prohibited option: fixMissingApi.");
          },
          M: a,
        };
      });
    })();

  (Z.securityGroups.gaawe = ["google"]),
    (function () {
      function a(f, g, k) {
        for (var m = 0; m < g.length; m++)
          f.hasOwnProperty(g[m]) && (f[g[m]] = k(f[g[m]]));
      }
      function b(f, g, k) {
        var m = {},
          n = function (v, u) {
            m[v] = m[v] || u;
          },
          p = function (v, u, w) {
            w = w === void 0 ? !1 : w;
            c.push(6);
            if (v) {
              m.items = m.items || [];
              for (var x = {}, y = 0; y < v.length; x = { Af: void 0 }, y++)
                (x.Af = {}),
                  ib(
                    v[y],
                    (function (C) {
                      return function (D, E) {
                        w && D === "id"
                          ? (C.Af.promotion_id = E)
                          : w && D === "name"
                          ? (C.Af.promotion_name = E)
                          : (C.Af[D] = E);
                      };
                    })(x)
                  ),
                  m.items.push(x.Af);
            }
            if (u)
              for (var A in u) d.hasOwnProperty(A) ? n(d[A], u[A]) : n(A, u[A]);
          },
          q;
        f.vtp_getEcommerceDataFrom === "dataLayer"
          ? (q = f.vtp_gtmCachedValues.eventModel) ||
            (q = f.vtp_gtmCachedValues.ecommerce)
          : ((q = f.vtp_ecommerceMacroData),
            Wc(q) && q.ecommerce && !q.items && (q = q.ecommerce));
        if (Wc(q)) {
          var r = !1,
            t;
          for (t in q)
            q.hasOwnProperty(t) &&
              (r || (c.push(5), (r = !0)),
              t === "currencyCode"
                ? n("currency", q.currencyCode)
                : t === "impressions" && g === N.g.tb
                ? p(q.impressions, null)
                : t === "promoClick" && g === N.g.Ob
                ? p(q.promoClick.promotions, q.promoClick.actionField, !0)
                : t === "promoView" && g === N.g.ub
                ? p(q.promoView.promotions, q.promoView.actionField, !0)
                : e.hasOwnProperty(t)
                ? g === e[t] && p(q[t].products, q[t].actionField)
                : (m[t] = q[t]));
          wN(m, k);
        }
      }
      var c = [],
        d = { id: "transaction_id", revenue: "value", list: "item_list_name" },
        e = {
          click: "select_item",
          detail: "view_item",
          add: "add_to_cart",
          remove: "remove_from_cart",
          checkout: "begin_checkout",
          checkout_option: "checkout_option",
          purchase: "purchase",
          refund: "refund",
        };
      (function (f) {
        Z.__gaawe = f;
        Z.__gaawe.o = "gaawe";
        Z.__gaawe.isVendorTemplate = !0;
        Z.__gaawe.priorityOverride = 0;
        Z.__gaawe.isInfrastructure = !1;
        Z.__gaawe.runInSiloedMode = !1;
      })(function (f) {
        var g;
        g = f.vtp_migratedToV2
          ? String(f.vtp_measurementIdOverride)
          : String(f.vtp_measurementIdOverride || f.vtp_measurementId);
        if (bb(g) && g.indexOf("G-") === 0) {
          var k = String(f.vtp_eventName),
            m = {};
          c = [];
          f.vtp_sendEcommerceData &&
            (Ih.hasOwnProperty(k) || k === "checkout_option") &&
            b(f, k, m);
          var n = f.vtp_eventSettingsVariable;
          if (n) for (var p in n) n.hasOwnProperty(p) && (m[p] = n[p]);
          if (f.vtp_eventSettingsTable) {
            var q = zN(f.vtp_eventSettingsTable, "parameter", "parameterValue"),
              r;
            for (r in q) m[r] = q[r];
          }
          var t = zN(f.vtp_eventParameters, "name", "value"),
            v;
          for (v in t) t.hasOwnProperty(v) && (m[v] = t[v]);
          var u = f.vtp_userDataVariable;
          u && (m[N.g.Fa] = u);
          if (m.hasOwnProperty(N.g.pb) || f.vtp_userProperties) {
            var w = m[N.g.pb] || {};
            wN(zN(f.vtp_userProperties, "name", "value"), w);
            m[N.g.pb] = w;
          }
          var x = {
            originatingEntity: Rz(1, f.vtp_gtmEntityIndex, f.vtp_gtmEntityName),
          };
          if (c.length > 0) {
            var y = {};
            x.eventMetadata = ((y.event_usage = c), y);
          }
          a(m, Jh, function (C) {
            return mb(C);
          });
          a(m, Lh, function (C) {
            return Number(C);
          });
          var A = f.vtp_gtmEventId;
          x.noGtmEvent = !0;
          bv(Zu(g, k, m), A, x);
          F(f.vtp_gtmOnSuccess);
        } else F(f.vtp_gtmOnFailure);
      });
    })();

  (Z.securityGroups.load_google_tags = ["google"]),
    (function () {
      function a(b, c, d) {
        return { tagId: c, firstPartyUrl: d };
      }
      (function (b) {
        Z.__load_google_tags = b;
        Z.__load_google_tags.o = "load_google_tags";
        Z.__load_google_tags.isVendorTemplate = !0;
        Z.__load_google_tags.priorityOverride = 0;
        Z.__load_google_tags.isInfrastructure = !1;
        Z.__load_google_tags.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowedTagIds || "specific",
          d = b.vtp_allowFirstPartyUrls || !1,
          e = b.vtp_allowedFirstPartyUrls || "specific",
          f = b.vtp_urls || [],
          g = b.vtp_tagIds || [],
          k = b.vtp_createPermissionError;
        return {
          assert: function (m, n, p) {
            (function (q) {
              if (!bb(q)) throw k(m, {}, "Tag ID must be a string.");
              if (c !== "any" && (c !== "specific" || g.indexOf(q) === -1))
                throw k(m, {}, "Prohibited Tag ID: " + q + ".");
            })(n);
            (function (q) {
              if (q !== void 0) {
                if (!bb(q)) throw k(m, {}, "First party URL must be a string.");
                if (d) {
                  if (e === "any") return;
                  if (e === "specific")
                    try {
                      if (Fg(Xj(q), f)) return;
                    } catch (r) {
                      throw k(m, {}, "Invalid first party URL filter.");
                    }
                }
                throw k(m, {}, "Prohibited first party URL: " + q);
              }
            })(p);
          },
          M: a,
        };
      });
    })();

  (Z.securityGroups.unsafe_run_arbitrary_javascript = ["google"]),
    (function () {
      function a() {
        return {};
      }
      (function (b) {
        Z.__unsafe_run_arbitrary_javascript = b;
        Z.__unsafe_run_arbitrary_javascript.o =
          "unsafe_run_arbitrary_javascript";
        Z.__unsafe_run_arbitrary_javascript.isVendorTemplate = !0;
        Z.__unsafe_run_arbitrary_javascript.priorityOverride = 0;
        Z.__unsafe_run_arbitrary_javascript.isInfrastructure = !1;
        Z.__unsafe_run_arbitrary_javascript.runInSiloedMode = !1;
      })(function () {
        return { assert: function () {}, M: a };
      });
    })();

  (Z.securityGroups.gas = ["google"]),
    (Z.__gas = function (a) {
      var b = wN(a),
        c = b;
      c[Qe.qa] = null;
      c[Qe.xh] = null;
      var d = (b = c);
      d.vtp_fieldsToSet = d.vtp_fieldsToSet || [];
      var e = d.vtp_cookieDomain;
      e !== void 0 &&
        (d.vtp_fieldsToSet.push({ fieldName: "cookieDomain", value: e }),
        delete d.vtp_cookieDomain);
      return b;
    }),
    (Z.__gas.o = "gas"),
    (Z.__gas.isVendorTemplate = !0),
    (Z.__gas.priorityOverride = 0),
    (Z.__gas.isInfrastructure = !1),
    (Z.__gas.runInSiloedMode = !1);

  (Z.securityGroups.logging = ["google"]),
    (function () {
      function a() {
        return {};
      }
      (function (b) {
        Z.__logging = b;
        Z.__logging.o = "logging";
        Z.__logging.isVendorTemplate = !0;
        Z.__logging.priorityOverride = 0;
        Z.__logging.isInfrastructure = !1;
        Z.__logging.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_environments || "debug",
          d = b.vtp_createPermissionError;
        return {
          assert: function (e) {
            var f;
            if ((f = c !== "all" && !0)) {
              var g = !1;
              f = !g;
            }
            if (f) throw d(e, {}, "Logging is not enabled in all environments");
          },
          M: a,
        };
      });
    })();

  (Z.securityGroups.configure_google_tags = ["google"]),
    (function () {
      function a(b, c, d) {
        return { tagId: c, configuration: d };
      }
      (function (b) {
        Z.__configure_google_tags = b;
        Z.__configure_google_tags.o = "configure_google_tags";
        Z.__configure_google_tags.isVendorTemplate = !0;
        Z.__configure_google_tags.priorityOverride = 0;
        Z.__configure_google_tags.isInfrastructure = !1;
        Z.__configure_google_tags.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowedTagIds || "specific",
          d = b.vtp_tagIds || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (!bb(g)) throw e(f, {}, "Tag ID must be a string.");
            if (c !== "any" && (c !== "specific" || d.indexOf(g) === -1))
              throw e(f, {}, "Prohibited configuration for Tag ID: " + g + ".");
          },
          M: a,
        };
      });
    })();

  var ho = {
    dataLayer: Fj,
    callback: function (a) {
      qj.hasOwnProperty(a) && ab(qj[a]) && qj[a]();
      delete qj[a];
    },
    bootstrap: 0,
  };
  (ho.onHtmlSuccess = qC(!0)), (ho.onHtmlFailure = qC(!1));
  function RN() {
    go();
    Wl();
    Mz();
    tb(rj, Z.securityGroups);
    var a = Ql(Rl()),
      b,
      c = a == null ? void 0 : (b = a.context) == null ? void 0 : b.source;
    Fn(c, a == null ? void 0 : a.parent);
    (c !== 2 && c !== 4 && c !== 3) || S(142);
    mC(),
      vf({
        Om: function (d) {
          return d === kC;
        },
        Zl: function (d) {
          return new nC(d);
        },
        Pm: function (d) {
          for (var e = !1, f = !1, g = 2; g < d.length; g++)
            (e = e || d[g] === 8), (f = f || d[g] === 16);
          return e && f;
        },
        kn: function (d) {
          var e;
          if (d === kC) e = d;
          else {
            var f = jo();
            lC[f] = d;
            e = 'google_tag_manager["rm"]["' + Ol() + '"](' + f + ")";
          }
          return e;
        },
      });
    yf = { Wl: Of };
  }
  var SN = !1;
  (function (a) {
    function b() {
      n = B.documentElement.getAttribute("data-tag-assistant-present");
      sn(n) && (m = k.Jj);
    }
    function c() {
      m && ic ? g(m) : a();
    }
    if (!z["__TAGGY_INSTALLED"]) {
      var d = !1;
      if (B.referrer) {
        var e = Xj(B.referrer);
        d = Tj(e, "host") === "cct.google";
      }
      if (!d) {
        var f = Hq("googTaggyReferrer");
        d = !(!f.length || !f[0].length);
      }
      d &&
        ((z["__TAGGY_INSTALLED"] = !0),
        pc("https://cct.google/taggy/agent.js"));
    }
    var g = function (v) {
        var u = "GTM",
          w = "GTM";
        gj && ((u = "OGT"), (w = "GTAG"));
        var x = z["google.tagmanager.debugui2.queue"];
        x ||
          ((x = []),
          (z["google.tagmanager.debugui2.queue"] = x),
          pc(
            "https://" +
              aj.Lf +
              "/debug/bootstrap?id=" +
              Uf.ctid +
              "&src=" +
              w +
              "&cond=" +
              v +
              "&gtm=" +
              Eq()
          ));
        var y = {
          messageType: "CONTAINER_STARTING",
          data: {
            scriptSource: ic,
            containerProduct: u,
            debug: !1,
            id: Uf.ctid,
            targetRef: { ctid: Uf.ctid, isDestination: Fl() },
            aliases: Il(),
            destinations: Gl(),
          },
        };
        y.data.resume = function () {
          a();
        };
        aj.Vk && (y.data.initialPublish = !0);
        x.push(y);
      },
      k = { zl: 1, Lj: 2, Xj: 3, Li: 4, Jj: 5 };
    k[k.zl] = "GTM_DEBUG_LEGACY_PARAM";
    k[k.Lj] = "GTM_DEBUG_PARAM";
    k[k.Xj] = "REFERRER";
    k[k.Li] = "COOKIE";
    k[k.Jj] = "EXTENSION_PARAM";
    var m = void 0,
      n = void 0,
      p = Rj(z.location, "query", !1, void 0, "gtm_debug");
    sn(p) && (m = k.Lj);
    if (!m && B.referrer) {
      var q = Xj(B.referrer);
      Tj(q, "host") === "tagassistant.google.com" && (m = k.Xj);
    }
    if (!m) {
      var r = Hq("__TAG_ASSISTANT");
      r.length && r[0].length && (m = k.Li);
    }
    m || b();
    if (!m && rn(n)) {
      var t = !1;
      vc(
        B,
        "TADebugSignal",
        function () {
          t || ((t = !0), b(), c());
        },
        !1
      );
      z.setTimeout(function () {
        t || ((t = !0), b(), c());
      }, 200);
    } else c();
  })(function () {
    try {
      if (SN || !em()) {
        wj();
        uj.K = "";
        uj.uc = "ad_storage|analytics_storage|ad_user_data|ad_personalization";
        uj.fb = "ad_storage|analytics_storage|ad_user_data";
        uj.oa = "5230";
        uj.oa = "5230";
        Ul();
        if (Q(95)) {
        }
        mi[8] = !0;
        var a = fo("debugGroupId", function () {
          return String(Math.floor(Number.MAX_SAFE_INTEGER * Math.random()));
        });
        Mn(a);
        co();
        eq();
        so();
        if (Xl()) {
          OD();
          xz().removeExternalRestrictions(Ol());
        } else {
          hx();
          Iz();
          wf();
          sf = Z;
          tf = sC;
          Qf = new Xf();
          rN();
          RN();
          hn = jn();
          $n();
          LB();
          YA();
          rB = !1;
          B.readyState === "complete" ? tB() : vc(z, "load", tB);
          RA();
          ok &&
            (kp(zp),
            z.setInterval(yp, 864e5),
            kp(vC),
            kp(oA),
            kp(by),
            kp(Cp),
            kp(BC),
            kp(zA),
            Q(107) && (kp(tA), kp(uA), kp(vA)),
            wC());
          pk &&
            (Wm(),
            Qo(),
            SA(),
            OB(),
            MB(),
            Q(42) &&
              (Nm("bt", String(uj.j ? 2 : ij ? 1 : 0)),
              Nm("ct", String(uj.j ? 0 : ij ? 1 : Cq() ? 2 : 3))));
          iC();
          fn(1);
          PD();
          pj = qb();
          ho.bootstrap = pj;
          uj.H && KB();
          if (Q(95)) {
          }
          Q(121) &&
            (typeof z.name === "string" &&
            vb(z.name, "web-pixel-sandbox-CUSTOM") &&
            Kc()
              ? uN("dMDg0Yz")
              : z.Shopify && Kc() && uN("dNTU0Yz"));
        }
      }
    } catch (b) {
      fn(4), vp();
    }
  });
})();
