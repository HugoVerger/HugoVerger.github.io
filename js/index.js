$(document).ready(function(){
	$('#fullpage').fullpage({
		sectionsColor: ['#131313', '#171717', '#212121', '#252525', '#292929', '#252525', '#212121', '#171717', '#131313'],
		anchors: ['IntroPage', 'ImpulsePage', 'NinjaWayPage', 'DeeperPage', 'JeuxGratuitsPage', 'CaptivesPage', 'SwitchPage', '42daysPage', 'ContactPage'],
		menu: '#menu',
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['Intro', 'Impulse', 'Ninja Way', 'Deeper', 'Jeux-Gratuits.com', 'Captives', 'Switch ON-OFF', '42 Days Later', 'Contact'],
		loopHorizontal: false,
		onLeave: function(index, nextIndex, direction){
			$('#Fullscreen').fadeOut();
		}
	});

	$('.galleryImage').click(function(){
		var src = $(this).attr('src');
		$('#Fullscreen').attr('src', src);
		$('#Fullscreen').fadeIn();
	});

	$('#Fullscreen').click(function(){
		$(this).fadeOut();
	});

	$('#EnglishButton').click(function(){
		alert("English !");
	});

	$('#FrenchButton').click(function(){
		alert("Français !");
	});

	$('#ImpulseLink').click(function(){
		$.fn.fullpage.moveTo(2);
	});

	$('#NinjaWayLink').click(function(){
		$.fn.fullpage.moveTo(3);
	});

	$('#DeeperLink').click(function(){
		$.fn.fullpage.moveTo(4);
	});

	$('#JeuxGratuitsLink').click(function(){
		$.fn.fullpage.moveTo(5);
	});

	$('#CaptivesLink').click(function(){
		$.fn.fullpage.moveTo(6);
	});

	$('#SwitchLink').click(function(){
		$.fn.fullpage.moveTo(7);
	});

	$('#42daysLink').click(function(){
		$.fn.fullpage.moveTo(8);
	});
});

