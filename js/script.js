// Script for back to top button
if ($('#back-to-top').length) {
  var scrollTrigger = 100, // px
    backToTop = function () {
      var scrollTop = $(window).scrollTop();
      if (scrollTop > scrollTrigger) {
        $('#back-to-top').addClass('show');
      } else {
        $('#back-to-top').removeClass('show');
      }
    };
  backToTop();
  $(window).on('scroll', function () {
    backToTop();
  });
  $('#back-to-top').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: 0
    }, 700);
  });
}
// Script for client and partner carousel
var owl = $('#owl-carousel');
  owl.owlCarousel({
    loop: true,
    autoplay: true,
    slideBy: 2,
    autoplayTimeout: 5000,
    nav: true,
    navText: ["Prev","Next"],
    dots: true,
    responsive:{
      0:{
        items: 1
      },
      480:{
        items: 3
      },
      768:{
        items: 4
      }
    }
  });
