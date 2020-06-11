// screen loader
$(window).on("load", function() {
  $(".loader-section .lds-grid").fadeOut(2000, function() {
    $(this)
      .parent()
      .fadeOut(2000, function() {
        $("body").css("overflow", "auto");
        $(this).remove();
      });
  });
});

$(document).ready(function() {
  var owl = $("#owl1");

  owl.owlCarousel({
    autoplay: true,
    loop: true,
    items: 3,
    ltr: true,
    nav: false,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        margin: 30
      },
      481: {
        items: 1,
        margin: 30
      },
      768: {
        items: 1,
        margin: 20
      },
      992: {
        items: 1,
        margin: 20
      }
    }
    // itemsMobile disabled - inherit from itemsTablet option
  });

  var owl2 = $("#owl2");

  owl2.owlCarousel({
    autoplay: true,
    loop: true,
    items: 6,
    rtl: true,
    margin: 20,
    nav: false,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        margin: 20
      },
      481: {
        items: 1,
        margin: 20
      },
      768: {
        items: 2,
        margin: 20
      },
      992: {
        items: 3,
        width: 240
      }
    }
    // itemsMobile disabled - inherit from itemsTablet option
  });
});
