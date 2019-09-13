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





});


		
		
	