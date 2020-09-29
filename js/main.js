/**
 * Created by CB on 9/26/2020.
 */
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        animateOut: 'fadeOut',
        item:1,
        margin: 10,
        nav: true,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:true
            },
            1000:{
                items:1,
                nav:true,

            }
        }
    });
    

});