$(document).ready(function(){
  $(".navToggle").click(function() {
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      $(".navbar-responsive").css("display", "block");
      $(".navbar-responsive").css("visibility", "visible");
      $("body").css("overflow", "hidden");
    } else {
      $(".navbar-responsive").css("display", "none");
      $(".navbar-responsive").css("visibility", "hidden");
      $("body").css("overflow", "scroll");
    }
  });
});