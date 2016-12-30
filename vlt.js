$('.inactiveIMG').hover(function() {
	$(this).removeClass('inactiveIMG');
	$(this).addClass('hoverIMG');
}, function() {
	$(this).removeClass('hoverIMG');
	$(this).addClass('inactiveIMG');
});

$('#laura-pp').on('click', function(event) {
	event.preventDefault();
	var lc = $('#laura-chien').html();
	$('#current-testimonial').html('');
});

$('#jamesl-pp').on('click', function(event) {
	event.preventDefault();
	var jl = $('#james-lee').html();
	$('#current-testimonial').fadeOut('fast', function() {
		$('#current-testimonial').fadeIn('fast').html(jl);
	});
});

$('#shenning-pp').on('click', function(event) {
	event.preventDefault();
	var sl = $('#shenning-loo').html();
	$('#current-testimonial').html();
	$('#current-testimonial').html(sl);	
});

$('#jameso-pp').on('click', function(event) {
	event.preventDefault();
	var jo = $('#james-ooi').html();
	$('#current-testimonial').fadeOut('fast', function() {
		$('#current-testimonial').fadeIn('fast').html(jo);
	});
});

// Testimonial Rotator

var testimonials = $('.testimonial');

