$(document).ready(0);
	        $('#estimate').attr({'visfunction() {
    $('input,textarea').focus(function(){
      $(this).data('placeholder',$(this).attr('placeholder'))
      $(this).attr('placeholder','');
    });
    $('input,textarea').blur(function(){
      $(this).attr('placeholder',$(this).data('placeholder'));
    });

    $('.get-estimate').click(function(){
        if($('#estimate').attr('visible')!='true'){
            $('.form-mask').fadeIn(400);
            $('#estimate').fadeIn(400);
            $('#estimate').attr({'visible':'true'})
        }
        else{
            $('.form-mask').fadeOut(400);
            $('#estimate').fadeOut(40ible':'false'})
	  	}
	})
	$('.get-catalog').click(function(){
   		if($('#project').attr('visible')!='true'){
	   		$('.form-mask').fadeIn(400);
	        $('#project').fadeIn(400);
	        $('#project').attr({'visible':'true'})
	  	}
	  	else{
   			$('.form-mask').fadeOut(400);
        	$('#project').fadeOut(400);
	        $('#project').attr({'visible':'false'})
	  	}
	})
	$('.get-office').click(function(){
   		if($('#office').attr('visible')!='true'){
	   		$('.form-mask').fadeIn(400);
	        $('#office').fadeIn(400);
	        $('#office').attr({'visible':'true'})
	  	}
	  	else{
   			$('.form-mask').fadeOut(400);
        	$('#office').fadeOut(400);
	        $('#office').attr({'visible':'false'})
	  	}
	})
 $('.form-mask').click(function(){
   		$('.form-mask').fadeOut(400)
        $('#estimate,#project,#office').fadeOut(400)
        $('#estimate,#project,#office').attr({'visible':'false'})
	})

});


function popup_position(){
         var my_popup = $('.form'), // наш попап
                 my_popup_w = my_popup.width(), // ширина попапа
                 my_popup_h = my_popup.height(), // высота попапа
                 popup_half_w = my_popup_w/2, // половина ширины попапа
                 popup_half_h = my_popup_h/2, // половина высоты попапа
                 win_w = $(window).width(), // ширина окна
                 win_h = $(window).height(); // высота окна
 
         if ( win_w > my_popup_w ) { // если ширина окна больше ширины попапа
                 my_popup.css({'margin-left':-popup_half_w, 'left': '50%'});
         }
         if ( win_w < my_popup_w ) { // если ширина окна меньше ширины попапа                  
                 my_popup.css({'margin-left': 5, 'left': '0'});
         }
         if ( win_h > my_popup_h ) { // если высота окна больше ширины попапа
                 my_popup.css({'margin-top': -popup_half_h, 'top':'47%'});
         }
         if ( win_h < my_popup_h ) { // если высота окна меньше ширины попапа
                 my_popup.css({'margin-top': 5, 'top': '0'});
         }
 }

        $(document).ready(function(){ 
    popup_position();
    });
    $(window).resize(function(){  
    popup_position();
    });