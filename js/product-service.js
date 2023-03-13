// sync1 sync2
$(document).ready(function() {
    
    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 4; //globaly define number of elements per page
    var syncedSecondary = true;
  
        sync1.owlCarousel({
          items : 1,
          slideSpeed : 2000,
          nav: true,
          autoplay: false,
          dots: false,
          loop: true,
          responsiveRefreshRate : 200,
          navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        }).on('changed.owl.carousel', syncPosition);
  
        sync2
          .on('initialized.owl.carousel', function () {
            sync2.find(".owl-item").eq(0).addClass("current");
          })
          .owlCarousel({
          items : slidesPerPage,
          dots: false,
          nav: false,
          margin:5,
          smartSpeed: 200,
          slideSpeed : 500,
          slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
          responsiveRefreshRate : 100
        }).on('changed.owl.carousel', syncPosition2);
  
    function syncPosition(el) {
      //if you set loop to false, you have to restore this next line
      //var current = el.item.index;
      
      //if you disable loop you have to comment this block
      var count = el.item.count-1;
      var current = Math.round(el.item.index - (el.item.count/2) - .5);
      
      if(current < 0) {
        current = count;
      }
      if(current > count) {
        current = 0;
      }
      
      //end block
  
      sync2
        .find(".owl-item")
        .removeClass("current")
        .eq(current)
        .addClass("current");
      var onscreen = sync2.find('.owl-item.active').length - 1;
      var start = sync2.find('.owl-item.active').first().index();
      var end = sync2.find('.owl-item.active').last().index();
      
      if (current > end) {
        sync2.data('owl.carousel').to(current, 100, true);
      }
      if (current < start) {
        sync2.data('owl.carousel').to(current - onscreen, 100, true);
      }
    }
    
    function syncPosition2(el) {
      if(syncedSecondary) {
        var number = el.item.index;
        sync1.data('owl.carousel').to(number, 100, true);
      }
    }
    
    sync2.on("click", ".owl-item", function(e){
      e.preventDefault();
      var number = $(this).index();
      sync1.data('owl.carousel').to(number, 300, true);
    });
});
// sync3 sync4
$(document).ready(function() {
    
    var sync3 = $("#sync3");
    var sync4 = $("#sync4");
    var slidesPerPage = 4; //globaly define number of elements per page
    var syncedSecondary = true;
  
        sync3.owlCarousel({
          items : 1,
          slideSpeed : 2000,
          nav: true,
          autoplay: false,
          dots: false,
          loop: true,
          responsiveRefreshRate : 200,
          navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        }).on('changed.owl.carousel', syncPosition);
  
        sync4
          .on('initialized.owl.carousel', function () {
            sync4.find(".owl-item").eq(0).addClass("current");
          })
          .owlCarousel({
          items : slidesPerPage,
          dots: false,
          nav: false,
          margin:5,
          smartSpeed: 200,
          slideSpeed : 500,
          slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
          responsiveRefreshRate : 100
        }).on('changed.owl.carousel', syncPosition2);
  
    function syncPosition(el) {
      //if you set loop to false, you have to restore this next line
      //var current = el.item.index;
      
      //if you disable loop you have to comment this block
      var count = el.item.count-1;
      var current = Math.round(el.item.index - (el.item.count/2) - .5);
      
      if(current < 0) {
        current = count;
      }
      if(current > count) {
        current = 0;
      }
      
      //end block
  
      sync4
        .find(".owl-item")
        .removeClass("current")
        .eq(current)
        .addClass("current");
      var onscreen = sync4.find('.owl-item.active').length - 1;
      var start = sync4.find('.owl-item.active').first().index();
      var end = sync4.find('.owl-item.active').last().index();
      
      if (current > end) {
        sync4.data('owl.carousel').to(current, 100, true);
      }
      if (current < start) {
        sync4.data('owl.carousel').to(current - onscreen, 100, true);
      }
    }
    
    function syncPosition2(el) {
      if(syncedSecondary) {
        var number = el.item.index;
        sync3.data('owl.carousel').to(number, 100, true);
      }
    }
    
    sync4.on("click", ".owl-item", function(e){
      e.preventDefault();
      var number = $(this).index();
      sync3.data('owl.carousel').to(number, 300, true);
    });
});
// sync5 sync6
$(document).ready(function() {
    
  var sync5 = $("#sync5");
  var sync6 = $("#sync6");
  var slidesPerPage = 4; //globaly define number of elements per page
  var syncedSecondary = true;

      sync5.owlCarousel({
        items : 1,
        slideSpeed : 2000,
        nav: true,
        autoplay: false,
        dots: false,
        loop: true,
        responsiveRefreshRate : 200,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
      }).on('changed.owl.carousel', syncPosition);

      sync6
        .on('initialized.owl.carousel', function () {
          sync6.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
        items : slidesPerPage,
        dots: false,
        nav: false,
        margin:5,
        smartSpeed: 200,
        slideSpeed : 500,
        slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
        responsiveRefreshRate : 100
      }).on('changed.owl.carousel', syncPosition2);

  function syncPosition(el) {
    //if you set loop to false, you have to restore this next line
    //var current = el.item.index;
    
    //if you disable loop you have to comment this block
    var count = el.item.count-1;
    var current = Math.round(el.item.index - (el.item.count/2) - .5);
    
    if(current < 0) {
      current = count;
    }
    if(current > count) {
      current = 0;
    }
    
    //end block

    sync6
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = sync6.find('.owl-item.active').length - 1;
    var start = sync6.find('.owl-item.active').first().index();
    var end = sync6.find('.owl-item.active').last().index();
    
    if (current > end) {
      sync6.data('owl.carousel').to(current, 100, true);
    }
    if (current < start) {
      sync6.data('owl.carousel').to(current - onscreen, 100, true);
    }
  }
  
  function syncPosition2(el) {
    if(syncedSecondary) {
      var number = el.item.index;
      sync5.data('owl.carousel').to(number, 100, true);
    }
  }
  
  sync6.on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).index();
    sync5.data('owl.carousel').to(number, 300, true);
  });
});
// sync7 sync8
$(document).ready(function() {
    
  var sync7 = $("#sync7");
  var sync8 = $("#sync8");
  var slidesPerPage = 3; //globaly define number of elements per page
  var syncedSecondary = true;

      sync7.owlCarousel({
        items : 1,
        slideSpeed : 2000,
        nav: true,
        autoplay: false,
        dots: false,
        loop: true,
        responsiveRefreshRate : 200,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
      }).on('changed.owl.carousel', syncPosition);

      sync8
        .on('initialized.owl.carousel', function () {
          sync8.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
        items : slidesPerPage,
        dots: false,
        nav: false,
        margin:5,
        smartSpeed: 200,
        slideSpeed : 500,
        slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
        responsiveRefreshRate : 100
      }).on('changed.owl.carousel', syncPosition2);

  function syncPosition(el) {
    //if you set loop to false, you have to restore this next line
    //var current = el.item.index;
    
    //if you disable loop you have to comment this block
    var count = el.item.count-1;
    var current = Math.round(el.item.index - (el.item.count/2) - .5);
    
    if(current < 0) {
      current = count;
    }
    if(current > count) {
      current = 0;
    }
    
    //end block

    sync8
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = sync8.find('.owl-item.active').length - 1;
    var start = sync8.find('.owl-item.active').first().index();
    var end = sync8.find('.owl-item.active').last().index();
    
    if (current > end) {
      sync8.data('owl.carousel').to(current, 100, true);
    }
    if (current < start) {
      sync8.data('owl.carousel').to(current - onscreen, 100, true);
    }
  }
  
  function syncPosition2(el) {
    if(syncedSecondary) {
      var number = el.item.index;
      sync7.data('owl.carousel').to(number, 100, true);
    }
  }
  
  sync8.on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).index();
    sync7.data('owl.carousel').to(number, 300, true);
  });
});

// sync9 sync10
$(document).ready(function() {
    
  var sync9 = $("#sync9");
  var sync10 = $("#sync10");
  var slidesPerPage = 4; //globaly define number of elements per page
  var syncedSecondary = true;

      sync9.owlCarousel({
        items : 1,
        slideSpeed : 2000,
        nav: true,
        autoplay: false,
        dots: false,
        loop: true,
        responsiveRefreshRate : 200,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
      }).on('changed.owl.carousel', syncPosition);

      sync10
        .on('initialized.owl.carousel', function () {
          sync10.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
        items : slidesPerPage,
        dots: false,
        nav: false,
        margin:5,
        smartSpeed: 200,
        slideSpeed : 500,
        slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
        responsiveRefreshRate : 100
      }).on('changed.owl.carousel', syncPosition2);

  function syncPosition(el) {
    //if you set loop to false, you have to restore this next line
    //var current = el.item.index;
    
    //if you disable loop you have to comment this block
    var count = el.item.count-1;
    var current = Math.round(el.item.index - (el.item.count/2) - .5);
    
    if(current < 0) {
      current = count;
    }
    if(current > count) {
      current = 0;
    }
    
    //end block

    sync10
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = sync10.find('.owl-item.active').length - 1;
    var start = sync10.find('.owl-item.active').first().index();
    var end = sync10.find('.owl-item.active').last().index();
    
    if (current > end) {
      sync10.data('owl.carousel').to(current, 100, true);
    }
    if (current < start) {
      sync10.data('owl.carousel').to(current - onscreen, 100, true);
    }
  }
  
  function syncPosition2(el) {
    if(syncedSecondary) {
      var number = el.item.index;
      sync9.data('owl.carousel').to(number, 100, true);
    }
  }
  
  sync10.on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).index();
    sync9.data('owl.carousel').to(number, 300, true);
  });
});

// sync11 sync12
$(document).ready(function() {
    
  var sync11 = $("#sync11");
  var sync12 = $("#sync12");
  var slidesPerPage = 3; //globaly define number of elements per page
  var syncedSecondary = true;

      sync11.owlCarousel({
        items : 1,
        slideSpeed : 2000,
        nav: true,
        autoplay: false,
        dots: false,
        loop: true,
        responsiveRefreshRate : 200,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
      }).on('changed.owl.carousel', syncPosition);

      sync12
        .on('initialized.owl.carousel', function () {
          sync12.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
        items : slidesPerPage,
        dots: false,
        nav: false,
        margin:5,
        smartSpeed: 200,
        slideSpeed : 500,
        slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
        responsiveRefreshRate : 100
      }).on('changed.owl.carousel', syncPosition2);

  function syncPosition(el) {
    //if you set loop to false, you have to restore this next line
    //var current = el.item.index;
    
    //if you disable loop you have to comment this block
    var count = el.item.count-1;
    var current = Math.round(el.item.index - (el.item.count/2) - .5);
    
    if(current < 0) {
      current = count;
    }
    if(current > count) {
      current = 0;
    }
    
    //end block

    sync12
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = sync12.find('.owl-item.active').length - 1;
    var start = sync12.find('.owl-item.active').first().index();
    var end = sync12.find('.owl-item.active').last().index();
    
    if (current > end) {
      sync12.data('owl.carousel').to(current, 100, true);
    }
    if (current < start) {
      sync12.data('owl.carousel').to(current - onscreen, 100, true);
    }
  }
  
  function syncPosition2(el) {
    if(syncedSecondary) {
      var number = el.item.index;
      sync11.data('owl.carousel').to(number, 100, true);
    }
  }
  
  sync12.on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).index();
    sync11.data('owl.carousel').to(number, 300, true);
  });
});

// sync13 sync14
$(document).ready(function() {
    
  var sync13 = $("#sync13");
  var sync14 = $("#sync14");
  var slidesPerPage = 4; //globaly define number of elements per page
  var syncedSecondary = true;

      sync13.owlCarousel({
        items : 1,
        slideSpeed : 2000,
        nav: true,
        autoplay: false,
        dots: false,
        loop: true,
        responsiveRefreshRate : 200,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
      }).on('changed.owl.carousel', syncPosition);

      sync14
        .on('initialized.owl.carousel', function () {
          sync14.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
        items : slidesPerPage,
        dots: false,
        nav: false,
        margin:5,
        smartSpeed: 200,
        slideSpeed : 500,
        slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
        responsiveRefreshRate : 100
      }).on('changed.owl.carousel', syncPosition2);

  function syncPosition(el) {
    //if you set loop to false, you have to restore this next line
    //var current = el.item.index;
    
    //if you disable loop you have to comment this block
    var count = el.item.count-1;
    var current = Math.round(el.item.index - (el.item.count/2) - .5);
    
    if(current < 0) {
      current = count;
    }
    if(current > count) {
      current = 0;
    }
    
    //end block

    sync14
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = sync14.find('.owl-item.active').length - 1;
    var start = sync14.find('.owl-item.active').first().index();
    var end = sync14.find('.owl-item.active').last().index();
    
    if (current > end) {
      sync14.data('owl.carousel').to(current, 100, true);
    }
    if (current < start) {
      sync14.data('owl.carousel').to(current - onscreen, 100, true);
    }
  }
  
  function syncPosition2(el) {
    if(syncedSecondary) {
      var number = el.item.index;
      sync13.data('owl.carousel').to(number, 100, true);
    }
  }
  
  sync14.on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).index();
    sync13.data('owl.carousel').to(number, 300, true);
  });
});

// sync15 sync16
$(document).ready(function() {
    
  var sync15 = $("#sync15");
  var sync16 = $("#sync16");
  var slidesPerPage = 4; //globaly define number of elements per page
  var syncedSecondary = true;

      sync15.owlCarousel({
        items : 1,
        slideSpeed : 2000,
        nav: true,
        autoplay: false,
        dots: false,
        loop: true,
        responsiveRefreshRate : 200,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
      }).on('changed.owl.carousel', syncPosition);

      sync16
        .on('initialized.owl.carousel', function () {
          sync16.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
        items : slidesPerPage,
        dots: false,
        nav: false,
        margin:5,
        smartSpeed: 200,
        slideSpeed : 500,
        slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
        responsiveRefreshRate : 100
      }).on('changed.owl.carousel', syncPosition2);

  function syncPosition(el) {
    //if you set loop to false, you have to restore this next line
    //var current = el.item.index;
    
    //if you disable loop you have to comment this block
    var count = el.item.count-1;
    var current = Math.round(el.item.index - (el.item.count/2) - .5);
    
    if(current < 0) {
      current = count;
    }
    if(current > count) {
      current = 0;
    }
    
    //end block

    sync16
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = sync16.find('.owl-item.active').length - 1;
    var start = sync16.find('.owl-item.active').first().index();
    var end = sync16.find('.owl-item.active').last().index();
    
    if (current > end) {
      sync16.data('owl.carousel').to(current, 100, true);
    }
    if (current < start) {
      sync16.data('owl.carousel').to(current - onscreen, 100, true);
    }
  }
  
  function syncPosition2(el) {
    if(syncedSecondary) {
      var number = el.item.index;
      sync15.data('owl.carousel').to(number, 100, true);
    }
  }
  
  sync16.on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).index();
    sync15.data('owl.carousel').to(number, 300, true);
  });
});