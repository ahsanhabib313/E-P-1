/**
 * Created by CB on 9/27/2020.
 */
/**
 * Created by CB on 9/26/2020.
 */
$(document).ready(function () {
    $('.testimonal-carousel-active').owlCarousel({
        loop:true,
        autoplay:true,
        margin:60,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1200:{
                items:3
            }
        }
    })


});