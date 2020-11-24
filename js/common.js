 $(document).ready(function () {

     $('.center_slide').slick({
         centerMode: true,
         centerPadding: '40px',
         autoplay: true,
         autoplaySpeed: '5000',
         fade: true,
         slidesToShow: 1,
         responsive: [
             {
                 breakpoint: 768,
                 settings: {
                     arrows: false,
                     centerMode: true,
                     centerPadding: '40px',
                     slidesToShow: 3
                 }
    },
             {
                 breakpoint: 480,
                 settings: {
                     arrows: false,
                     centerMode: true,
                     centerPadding: '40px',
                     slidesToShow: 1
                 }
    }
  ]
     });
 });
