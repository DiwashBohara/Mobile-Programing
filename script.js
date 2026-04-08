$(document).ready(function () {

  $("#fadeOut").click(function () {
    $(".box").fadeTo(500, 0.2); // reduce opacity
  });

  $("#fadeIn").click(function () {
    $(".box").fadeTo(500, 1); // full opacity
  });

  $("#toggle").click(function () {
    $(".box").fadeToggle(); // show/hide
  });

});