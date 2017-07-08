$(document).ready(function() {
  $(".headingSection").matchHeight();
  var tallness = $("#header").outerHeight(true);
  $(".filler").css({
    "height": tallness
  });
  $("#footer").height((tallness/3));
  $("#footerDivideContainer").height((tallness/3));

  // variable to hold the cur nav page
  var currNavPage = "home";

  $("#navEdu").click(function(){
    $("#proj, #exp").fadeOut();
    if (currNavPage != "edu") {
      $("#edu").slideDown();
    }
    $("#bodyContainer, html, body").animate({
      "background-color": "#FF9A45"
    });
    currNavPage = "edu";
  });

  $("#navProj").click(function(){
    $("#edu, #exp").fadeOut();
    if (currNavPage != "proj") {
      $("#proj").slideDown();
    }
    $("#bodyContainer, html, body").animate({
      "background-color": "#F76C6C"
    });
    currNavPage = "proj";
  });

  $("#navExp").click(function(){
    $("#edu, #proj").fadeOut();
    if (currNavPage != "exp") {
      $("#exp").slideDown();
    }
    $("#bodyContainer, body, html").animate({
      "background-color": "#FDFF77"
    });
    currNavPage = "exp";

  });


  // $(window).resize(function(){
  //   var tallness = $("#header").outerHeight(true);
  //   $(".filler").css({
  //     "height": tallness
  //   });
  //   console.log(tallness);
  // });
});
