$(document).ready(function() {
  $(".headingSection").matchHeight();
  var tallness = $("#header").outerHeight(true);
  $("body").css({
    "padding-top": tallness
  });
  $("#footer").height((tallness/3));
  $("#footerDivideContainer").height((tallness/3));
  $("#bodyContainer").css({
    "margin-bottom" : tallness,
    "padding-bottom" : tallness
  });
  $(".currNavPage").show();


  $(".navTab").click(function() {
    var navPage = this.id.toString();
    if (!($("." + navPage).hasClass("currNavPage"))) {
      $(".currNavPage").slideUp();
      $(".currNavPage").removeClass("currNavPage");
      $("." + navPage).addClass("currNavPage");
      setTimeout(function() {
        $(".currNavPage").slideDown();
      }, 350);

      if ((navPage == "navHome") && (!$(".intro").hasClass("currEntry"))) {
        $(".currEntry").slideUp();
        $(".currEntry").removeClass("currEntry");
        $(".intro").addClass("currEntry");
        setTimeout(function() {
          $(".currEntry").slideDown();
        }, 350);
        console.log("ASODJIS");
      }
    }
    var colour;
    if (navPage == "navHome") {
      colour = "#374785";
    } else if (navPage == "navEdu") {
      colour = "#FF9A45";
    } else if (navPage == "navProj") {
      colour = "#F76C6C";
    } else {
      colour = "#FEE64C";
    }

    $("#bodyContainer, body, html").animate({
      "background-color": colour
    });
    console.log(colour);
  });

  $(".navEntry").click(function() {
    var entry = "." + this.id.toString();
    if (!$(entry).hasClass("currEntry")) {
      $(".currEntry").slideUp();
      $(".currEntry").removeClass("currEntry");
      $(entry).addClass("currEntry");
      setTimeout(function() {
        $(".currEntry").slideDown();
      }, 350);
    }

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
