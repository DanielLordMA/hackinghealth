function scrollToTop() { var e, t, o, n; e = void 0 !== e ? e : 0, t = $("body"), o = t.offset(), n = o.top, $("html, body").animate({ scrollTop: n }, 500, "linear") } function changeCSS(e, t) { var o = document.getElementsByTagName("link").item(t), n = document.createElement("link"); n.setAttribute("rel", "stylesheet"), n.setAttribute("type", "text/css"), n.setAttribute("href", e), document.getElementsByTagName("head").item(0).replaceChild(n, o) } Modernizr.svg || $(".logo").addClass("no-svg"); for (var elements = ["section", "article", "aside", "header", "footer", "nav", "figure", "figcaption", "time", "mark"], i = 0; i < elements.length; i++) document.createElement(elements[i]); $(document).ready(function () { $("#head-menu").hide(), $(".head-menu-toggle").click(function (e) { $("#head-menu").slideToggle(100), e.preventDefault() }) }), $(document).ready(function () { $(".head-menu").children("a").click(function () { $("#head-menu").hide() }) }), $(function () { $(document).on("scroll", function () { $(window).scrollTop() > 100 ? $(".scrolltop").addClass("show") : $(".scrolltop").removeClass("show") }) }), $(function () { $(document).on("scroll", function () { $(window).scrollTop() > 100 ? $(".scrolltop").addClass("show") : $(".scrolltop").removeClass("show") }), $(".scrolltop").on("click", scrollToTop) }), function () { /(trident|msie)/i.test(navigator.userAgent) && document.getElementById && window.addEventListener && window.addEventListener("hashchange", function () { var e = location.hash.substring(1), t; /^[A-z0-9_-]+$/.test(e) && (t = document.getElementById(e)) && (/^(?:a|select|input|button|textarea)$/i.test(t.tagName) || (t.tabIndex = -1), t.focus()) }, !1) }(), $(document).ready(function () { $(".cont-moreinfo").hide(), $(".cont-moreinfo-toggle").click(function () { $(this).next(".cont-moreinfo").slideToggle(100), event.preventDefault() }) }), $(document).ready(function () { $("#myonoffswitch").change(function () { this.checked ? (changeCSS("/Content/style.css", 0), scrollToTop()) : (changeCSS("/Content/style-dark.css", 0), scrollToTop()) }) });