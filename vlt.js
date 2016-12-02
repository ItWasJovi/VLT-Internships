$('.inactiveIMG').hover(function() {
	$(this).removeClass('inactiveIMG');
	$(this).addClass('hoverIMG');
}, function() {
	$(this).removeClass('hoverIMG');
	$(this).addClass('inactiveIMG');
});

$('#laura-pp').on('click', function(event) {
	event.preventDefault();
	$('.testimonial-content').removeClass('active-testimonial');
	$('#laura-chien').addClass('active-testimonial');
});

$('#jamesl-pp').on('click', function(event) {
	event.preventDefault();
	$('.testimonial-content').removeClass('active-testimonial');
	$('#james-lee').addClass('active-testimonial');
});

$('#shenning-pp').on('click', function(event) {
	event.preventDefault();
	$('.testimonial-content').removeClass('active-testimonial');
	$('#shenning-loo').addClass('active-testimonial');
});

$('#jameso-pp').on('click', function(event) {
	event.preventDefault();
	$('.testimonial-content').removeClass('active-testimonial');
	$('#james-ooi').addClass('active-testimonial');
});