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
  jQuery('.post').addClass("hidden").viewportChecker({
      classToAdd: 'visible animated fadeIn', // Class to add to the elements when they are visible
      offset: 200 
     });  

  $('.btn').click(function () {
      $('.gallery-overlay').slideUp();
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


    });




