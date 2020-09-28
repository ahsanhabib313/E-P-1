/**
 * Created by CB on 9/27/2020.
 */
$(document).ready(function() {
    var s = $(".header");
  //  var pos = s.position();
    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();
        if (windowpos > 50) {
            s.addClass("stick");
        } else {
            s.removeClass("stick");
        }
    });
});