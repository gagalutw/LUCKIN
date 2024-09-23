$(function () {

  let thisYear = new Date().getFullYear();
  let year = $('#year');
    if (year.length) {
        year.text(thisYear);
    }

    $(window).on("scroll", function() {
        if ( $(window).scrollTop() > 50) {
            $(".header-nav .nav").addClass("-open-logo")
        } else {
            $(".header-nav .nav").removeClass("-open-logo")
        }
    })


})