/**
 * s50.js
 * 
 * Slide 50
 */
$(function() {
	$('#colorOn').click(function() {
		$('#msg1').addClass('red');
	});

	$('#colorOff').click(function() {
		$('#msg1').removeClass('red');
	});

	$('#swapColor').click(function() {
		$('#msg2').toggleClass('red');
	});

	$('#cicleColor').click(function() {
		if ($('#msg3').hasClass('black')) {
			$('#msg3').addClass('red');
			$('#msg3').removeClass('black');
		} else if ($('#msg3').hasClass('red')) {
			$('#msg3').addClass('blue');
			$('#msg3').removeClass('red');
		} else if ($('#msg3').hasClass('blue')) {
			$('#msg3').addClass('black');
			$('#msg3').removeClass('blue');
		}
	});

	$('#redColor').click(function() {
		$('#msg4').addClass('red');
		$('#msg4').removeClass('blue');
	});

	$('#blueColor').click(function() {
		$('#msg4').addClass('blue');
		$('#msg4').removeClass('red');
	});
});
