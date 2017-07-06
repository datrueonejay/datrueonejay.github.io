$(document).ready(function() {
  $(".headingSection").matchHeight();
  var tallness = $("#header").outerHeight(true);
  $(".filler").css({
    "height": tallness
  });
  $("#footer").height((tallness/3));

  // $(window).resize(function(){
  //   var tallness = $("#header").outerHeight(true);
  //   $(".filler").css({
  //     "height": tallness
  //   });
  //   console.log(tallness);
  // });
});
