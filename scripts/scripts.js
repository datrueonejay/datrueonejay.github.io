$(document).ready(function() {
  $(".headingSection").matchHeight();
  var tallness = $("#header").outerHeight(true);
  $(".filler").css({
    "height": tallness
  });
  $("#footer").height((tallness/3));
  $("#footerDivideContainer").height((tallness/3));

  $("#nav0").click(function(){
    $("#myCarousel").carousel(0);
    $(".navPage").removeClass("active");
    $(this).addClass("active");
    $("#bodyContainer").css({
      "background-color": "#FF9A45"
    });
    $("body").css({
      "background-color": "#FF9A45"
    });
    $(this).css({
      "background-color": "#FF9A45"
    });
    // $("#bodyContainer").animate({backgroundColor: "red"});
  });



  $("#nav1").click(function(){
    $("#myCarousel").carousel(1);
    $(".navPage").removeClass("active");
    $(this).addClass("active");
    $("#bodyContainer").css({
      "background-color": "#F76C6C"
    });
    $("body").css({
      "background-color": "#F76C6C"
    });
  });
  $("#nav2").click(function(){
    $("#myCarousel").carousel(2);
    $(".navPage").removeClass("active");
    $(this).addClass("active");
    $("#bodyContainer").css({
      "background-color": "#FDFF77"
    });
    $("body").css({
      "background-color": "#FDFF77"
    });
  });
  // $(window).resize(function(){
  //   var tallness = $("#header").outerHeight(true);
  //   $(".filler").css({
  //     "height": tallness
  //   });
  //   console.log(tallness);
  // });
});
