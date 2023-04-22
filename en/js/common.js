$(function () {
    $(window).on("scroll", function() {
        if ( $(window).scrollTop() > 50) {
            $(".header-nav .nav").addClass("-open-logo")
        } else {
            $(".header-nav .nav").removeClass("-open-logo")
        }
    })
})