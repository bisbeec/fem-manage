$(document).ready(function() { 


    $(".owl-carousel").owlCarousel({
      margin: 25,
      autoplay: 6000,
      autoplayHoverPause: true,
      loop: true,
      center: true,
      stagePadding: 300,
      items: 1,
      autoWidth: true,
      nav: false,
      responsive:{
        0:{
          items:1,
          stagePadding: 30,
          margin: 100,
          autoplay: false,
          autoWidth: false,
          nav: true,
          lazyLoad: true,
        },
        860:{
          items:3,
          nav: false,
        }
      }
    });

    $(".mobile-menu-toggle").click(function() {
      $("html").toggleClass("body-no-scroll");
      $(".primary-nav").toggleClass("mobile-nav-show");
      $(this).toggleClass("menu-open");
    });

}); 

  