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

	//English
	function SetLanguageToEnglish() {
		$('#hello').text("Hello");
		$('#welcome').text("Welcome to my portfolio !");
		$('#introPhrase').text("Below are a few games I've worked on. Please feel free to get in touch with me if I can be of some help.");

		$('#emailContact').text("You can send me an email at");
		$('#linkedInContact').text("If you wish you can also check");
		$('#linkedInProfile').text(" my LinkedIn profile.");
	};

	//Français
	function SetLanguageToFrench(){
		$('#hello').text("Bonjour");
		$('#welcome').text("Bienvenue sur mon portfolio !");
		$('#introPhrase').text("Vous trouverez ci-dessous quelques jeux sur lesquels j'ai travaillé. N'hésitez pas à me contacter si je peux être utile.");

		$('#emailContact').text("Vous pouvez m'envoyer un email à");
		$('#linkedInContact').text("Si vous le désirez, vous pouvez aussi voir");
		$('#linkedInProfile').text(" mon profil LinkedIn.");
	};


	$('#EnglishButton').click(function(){
		SetLanguageToEnglish();
	});


	$('#FrenchButton').click(function(){
		SetLanguageToFrench();
	});

	SetLanguageToFrench();
});

