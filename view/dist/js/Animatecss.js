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
