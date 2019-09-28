$(document).ready(function(){


  $('.scroll-to-top').click(function() {
    $('html, body').animate({scrollTop: 0}, 800);
  return false;
    });

$('.popup-close').on('click', function(){
			
			$('#subscribe-popup').fadeOut('slow');
		});

$('.subscribe-btn').on('click',function() {
			$('#subscribe-popup').fadeOut('slow');
		});



$(".expand-calculator").on('click', function(){
			$(this).siblings('#shipping-calculator').slideToggle('500');
		});



$(".expand_action").on('click', function(){
			var target = $(this).data('attr');
			$(target).slideToggle('slow');
		});



$('#hide-popup').on('click', function() {
        $('#subscribe-popup').hide();
        $(this).remove();
    });



$('.search-hide').hide();
$('.search-btn').on('click', function(e){
			e.preventDefault();
$(this).toggleClass('search-open');
$('.search-hide').fadeToggle('slow');
		});


});
