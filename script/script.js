
$(document).ready(function(){
	$(function() {
		  $('#before-load').find('i').fadeOut().end().delay(400).fadeOut('slow');
		});


	$('.hamburger').on('click', () => {
		$('#mobile_menu').fadeIn(400);
		$('#mobile_menu').css('display', 'flex');
		if( $('#mobile_menu').css('display', 'flex')) {
			$('.hamburger img').css('opacity', '0');
		};
	});

	$('.close_menu').on('click', () => {
		$('#mobile_menu').fadeOut(400);
		if( $('#mobile_menu').fadeOut(400)) {
			$('.hamburger img').css('opacity', '1');
		};
	});

	$(() => {
		$('a[href^=".header_info"]').on('click', function(event) {
		event.preventDefault();

		const ref = $(this).attr("href"),
		      pos = $(ref).offset().top;

		$('html, body').animate({scrollTop: pos}, 1000);
		});
	});

	$('.grid').isotope({
	  itemSelector: '.grid_item',
	  layoutMode: 'fitRows'
	});



	var owl = $("#owl_carousel");
	owl.owlCarousel({
	      items : 3, 
	      pagination: false,
	      itemsDesktop : [1000,3],
	      itemsDesktopSmall : [920,2],
	      itemsTablet: [610,1],
	  });
	$(".next").click(function(){
		   owl.trigger('owl.next');
	 });
	$(".prev").click(function(){
		   owl.trigger('owl.prev');
	});


});

	$('#light').lightGallery();

	





	