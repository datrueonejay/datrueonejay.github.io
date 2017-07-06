$(document).ready(function() {
  $(".headingSection").matchHeight();
  var tallness = $("#header").outerHeight(true);
  $(".filler").css({
    "height": tallness
  });
  $("#footer").height((tallness/3));
  $("#nav0").hover(function(){
    $("#myCarousel").carousel(0);
  });
  $("#nav1").hover(function(){
    $("#myCarousel").carousel(1);
  });
  $("#nav2").hover(function(){
    $("#myCarousel").carousel(2);
  });
  // $(window).resize(function(){
  //   var tallness = $("#header").outerHeight(true);
  //   $(".filler").css({
  //     "height": tallness
  //   });
  //   console.log(tallness);
  // });
});
