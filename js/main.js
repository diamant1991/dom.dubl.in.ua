   var mydivs=new Array('.img','.img-2');

function opcl(arr, e){
    if ($(e).css('display') == 'none'){
        for(var i in arr){   
           $(arr[i]).hide();
        }
        $(e).show();       
    }
}

    $(document).ready(function() {
   $(".test").fancybox({
            
    });
  jQuery('.section2 h2').addClass("hidden").viewportChecker({
      classToAdd: 'visible animated fadeInRight', // Class to add to the elements when they are visible
      offset: -150 
     });  
  jQuery('.video-desc').addClass("hidden").viewportChecker({
      classToAdd: 'visible animated fadeInRight', // Class to add to the elements when they are visible
      offset: -100 
     }); 
    jQuery('.section2 p').addClass("hidden").viewportChecker({
      classToAdd: 'visible animated fadeInRight', // Class to add to the elements when they are visible
      offset: -100 
     }); 

     jQuery('.section3 h3').addClass("hidden").viewportChecker({
      classToAdd: 'visible animated fadeInUp', // Class to add to the elements when they are visible
      offset: -100 
     });  
     jQuery('.fadeinup').addClass("hidden").viewportChecker({
      classToAdd: 'visible animated fadeInUp', // Class to add to the elements when they are visible
      offset: -100 
     });  
     jQuery('.fadeindown').addClass("hidden").viewportChecker({
      classToAdd: 'visible animated fadeInDown', // Class to add to the elements when they are visible
      offset: -100 
     });  
      jQuery('.fadeinright').addClass("hidden").viewportChecker({
      classToAdd: 'visible animated fadeInRight', // Class to add to the elements when they are visible
      offset: -100 
     });  
       jQuery('.fadeinleft').addClass("hidden").viewportChecker({
      classToAdd: 'visible animated fadeInLeft', // Class to add to the elements when they are visible
      offset: -100 
     });  

  $('.post').addClass('animated fadeIn'); 



  $('.btn').click(function () {
      $(".gallery-overlay").animate({ top: "-=200"}, 500)
      .animate({opacity: "0"}, "fast")
      .slideUp()
    });
    

// Cache selectors
var lastId,
    topMenu = $(".main-nav"),
    topMenuHeight = topMenu.outerHeight()-150,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 1100);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("current")
         .end().filter("[href=#"+id+"]").parent().addClass("current");
   }                   
});
  /* $(".main-nav ul li a").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 1300
        });
        return false;
    });*/
var top_show = 130;
   $(window).scroll(function () { 
      if ($(this).scrollTop() > top_show) $('.scroll_menu').fadeIn();
      else $('.scroll_menu').fadeOut();
    });

$('.up').click(function () {
      $('body, html').animate({
        scrollTop: 0
      }, 1000);
    });



    });




