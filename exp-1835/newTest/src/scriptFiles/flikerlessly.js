//flikerlessly code
(window.Flickerlessly = window.Flickerlessly || {}),
(function (t) {
  "use strict";
  var i = function (t, n, a, o) {
      var i = "atNodeInserted" + t,
        r = [],
        e = ["", "-moz-", "-webkit-", "-ms-", "-o-"];
      e.forEach(function (t, e) {
        r.push(
          "@" + t + "keyframes " + i + " {from {opacity:0.99} to {opacity:1}}"
        );
      }),
        r.push(n + "{"),
        e.forEach(function (t, e) {
          r.push(
            t + "animation-duration:0.001s;" + t + "animation-name:" + i + ";"
          );
        }),
        r.push("}");
      var s = document.getElementsByTagName("head")[0];
      if (s) {
        var c = document.createElement("style");
        c.setAttribute("type", "text/css"),
          c.styleSheet
            ? (c.styleSheet.cssText = r.join("\n"))
            : c.appendChild(document.createTextNode(r.join("\n"))),
          s.insertBefore(c, s.firstChild);
      }
      var l = function (t) {
        if (t.animationName === i && "object" == typeof t.target) {
          var e =
            !0 === o ||
            (!1 === o && null === t.target.getAttribute("data-flk-success"));
          u("('" + n + "') ready! Execute: " + e, t.target),
            "function" == typeof a && e
              ? (t.target.setAttribute("data-flk-success", i), a(t.target, u))
              : u("Won't Callback", e, a);
        }
      };
      ["animationstart", "MSAnimationStart", "webkitAnimationStart"].forEach(
        function (t, e) {
          document.addEventListener(t, l, !1);
        }
      );
    },
    u = function () {
      Array.prototype.unshift.call(arguments, "FLK:"),
        console.info.apply(this, arguments);
    },
    r = Math.floor(1e3 * Math.random() + 1);
  t.onReady = function () {
    for (var t = 0; t < arguments.length; t++) {
      var e = arguments[t],
        n = e.selector,
        a = e.success || null,
        o = e.persist || !1;
      i(r++, n, a, o);
    }
  };
})(Flickerlessly);