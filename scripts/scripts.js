$(document).ready(function() {
  $(".headingSection").matchHeight();
  var tallness = $("#header").outerHeight(true);
  $("body").css({
    "padding-top": tallness
  });
  $("#footer").height((tallness/3));
  $("#footerDivideContainer").height((tallness/3));
  $(".currNavPage").show();


  $("#navHome, #navEdu, #navProj, #navExp").click(function() {
    var classToShow = this.id.toString();
    if (!($("." + classToShow).hasClass("currNavPage"))) {
      $(".currNavPage").slideUp();
      $(".currNavPage").removeClass("currNavPage");
      $("." + classToShow).addClass("currNavPage");
      setTimeout(function() {
        $(".currNavPage").slideDown();
      }, 350);
    }
    var colour;
    if (classToShow == "navHome") {
      colour = "#374785";
    } else if (classToShow == "navEdu") {
      colour = "#FF9A45";
    } else if (classToShow == "navProj") {
      colour = "#F76C6C";
    } else {
      colour = "#FEE64C";
    }

    $("#bodyContainer, body, html").animate({
      "background-color": colour
    });
    console.log(colour);
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
