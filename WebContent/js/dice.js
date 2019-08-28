//$(function() {
//	$('#roll').click(function() {
//		let msg = $('#text')
//		let num = Math.ceil(Math.random()*6);
//		msg.val(num);
//		if (num > 3) {
//			$('<div>You won</div>').css({color: 'green'}).appendTo('#colorresult');
//		} else {
//			$('<div>You lost</div>').css({color:'red'}).appendTo('#colorresult')	;
//		}
//	});
//});

$(function() {
	$('#roll').click(function() {
		let msg = $('#text');
		let num = Math.ceil(Math.random()*6);
		let Dice = $('#img');
//		switch 
//		case 1
		     
		msg.val(num);
		if (num > 3) {
			$('<div>You won</div>').addClass('green').appendTo('#colorresult');
		} else {
			$('<div>You lost</div>').addClass('red').appendTo('#colorresult')	;
		}
		let wins = $('.green').length;
		let losses = $('.red').length;
		let children= wins+losses;
		let winrateo= ((wins/children)*100);
		$('#colorresult').prop("title", "Your win rateo is" + winrateo + "% \n");
	});
	
});