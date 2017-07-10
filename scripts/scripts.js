$(document).ready(function() {
  $(".headingSection").matchHeight();
  var tallness = $("#header").outerHeight(true);
  $("body").css({
    "padding-top": tallness
  });
  $("#footer").height((tallness/3));
  $("#footerDivideContainer").height((tallness/3));

  // variable to hold the cur nav page
  var currNavPage = "home";

  $("#navHome").click(function() {
    $("#edu, #proj, #exp").slideUp();
    if (currNavPage != "home") {
      setTimeout(function() {
        $("#home").slideDown();
      }, 400);
    }
    $("#bodyContainer, html, body").animate({
      "background-color": "#374785"
    });
    currNavPage = "home";
  });

  $("#navEdu").click(function(){
    $("#home, #proj, #exp").slideUp();
    if (currNavPage != "edu") {
      setTimeout(function() {
        $("#edu").slideDown();
      }, 400);
    }
    $("#bodyContainer, html, body").animate({
      "background-color": "#FF9A45"
    });
    currNavPage = "edu";
  });

  $("#navProj").click(function(){
    $("#home, #edu, #exp").slideUp();
    if (currNavPage != "proj") {
      setTimeout(function() {
        $("#proj").slideDown();
      }, 400);
    }
    $("#bodyContainer, html, body").animate({
      "background-color": "#F76C6C"
    });
    currNavPage = "proj";
  });

  $("#navExp").click(function(){
    $("#home, #edu, #proj").slideUp();
    if (currNavPage != "exp") {
      setTimeout(function() {
        $("#exp").slideDown();
      }, 400);
    }
    $("#bodyContainer, body, html").animate({
      "background-color": "#FEE64C"
    });
    currNavPage = "exp";

  });


  $(window).resize(function(){
    var tallness = $("#header").outerHeight(true);
    $("body").css({
      "padding-top": tallness
    });
    console.log(tallness);
    console.log($("#headerFiller").height());
  });
});
