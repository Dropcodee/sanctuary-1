window.setInterval(bounceArrow, 5000);
window.setInterval(jelloAnimate, 2000);
window.setInterval(jelloAni, 3000);
function bounceArrow() {
  $("#logoImg")
    .removeClass("animated bounce")
    .delay(1000)
    .queue(function(next) {
      $(this).addClass("animated bounce");
      next();
    });
}
function jelloAni() {
  $("#cardImg")
    .removeClass("animated jello")
    .delay(400)
    .queue(function(next) {
      $(this).addClass("animated jello");
      next();
    });
}
function jelloAnimate() {
  $("#cardImg1")
    .removeClass("animated jello")
    .delay(200)
    .queue(function(next) {
      $(this).addClass("animated jello");
      next();
    });
}

// PAGE ANIMATION INITIALIZATION
$(document).ready(function() {
  $(".animsition").animsition({
    inClass: "fade-in-right",
    outClass: "fade-out-right",
    inDuration: 1500,
    outDuration: 800,
    linkElement: ".animsition-link",
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: "body", //animsition wrapper element
    loadingClass: "animsition-loading",
    loadingInner: "", // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: ["animation-duration", "-webkit-animation-duration"],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay: false,
    overlayClass: "animsition-overlay-slide",
    overlayParentElement: "body",
    transition: function(url) {
      window.location.href = url;
    }
  });
});
