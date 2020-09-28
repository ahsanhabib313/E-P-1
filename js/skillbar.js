/**
 * Created by CB on 9/27/2020.
 */
/**
 * Created by CB on 9/27/2020.
 */
jQuery(document).ready(function(){
    var a = 0;
    $(window).scroll(function() {
        var oTop = $('#counter-section').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
    jQuery('.skillbar').each(function(){
        jQuery(this).find('.skillbar-bar').animate({
            width:jQuery(this).attr('data-percent')
        },3000);
    });
    a = 1;
}
});
});

jQuery('.Count').each(function () {
    var $this = $(this);
    jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
        duration: 6000,
        easing: 'swing',
        step: function () {
            $this.text(Math.ceil(this.Counter));
        }
    });
});