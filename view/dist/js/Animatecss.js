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

// SIGN UP FORM ANIMATION
$(".button").click(function() {
  var $btn = $(this),
    $step = $btn.parents(".modal-body"),
    stepIndex = $step.index(),
    $pag = $(".modal-header span").eq(stepIndex);

  if (stepIndex === 0 || stepIndex === 1) {
    step1($step, $pag);
  } else {
    step3($step, $pag);
  }
});

function step1($step, $pag) {
  console.log("step1");
  // animate the step out
  $step.addClass("animate-out");

  // animate the step in
  setTimeout(function() {
    $step
      .removeClass("animate-out is-showing")
      .next()
      .addClass("animate-in");
    $pag
      .removeClass("is-active")
      .next()
      .addClass("is-active");
  }, 600);

  // after the animation, adjust the classes
  setTimeout(function() {
    $step
      .next()
      .removeClass("animate-in")
      .addClass("is-showing");
  }, 1200);
}

function step3($step, $pag) {
  console.log("3");

  // animate the step out
  $step.parents(".modal-wrap").addClass("animate-up");

  setTimeout(function() {
    $(".rerun-button").css("display", "inline-block");
  }, 300);
}

$(".rerun-button").click(function() {
  $(".modal-wrap")
    .removeClass("animate-up")
    .find(".modal-body")
    .first()
    .addClass("is-showing")
    .siblings()
    .removeClass("is-showing");

  $(".modal-header span")
    .first()
    .addClass("is-active")
    .siblings()
    .removeClass("is-active");
  $(this).hide();
});
