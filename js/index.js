$(document).ready(function(){
	$('#fullpage').fullpage({
		sectionsColor: ['#131313', '#161616', '#191919', '#222222', '#252525', '#222222', '#191919', '#161616', '#131313', '#131313'],
		anchors: ['IntroPage', 'ImpulsePage', 'NinjaWayPage', 'DeeperPage', 'JeuxGratuitsPage', 'CaptivesPage', 'SwitchPage', '42daysPage', 'ContactPage'],
		menu: '#menu',
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['Intro', 'Impulse', 'Ninja Way', 'Deeper', 'Jeux-Gratuits', 'Captives', 'Switch ON-OFF', '42 Days Later', 'Contact'],
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

	//Responsive logic
	var paysage = true;

	function AdjustToViewport() {
		var viewportWidth = $(window).width();
		var viewportHeight = $(window).height();
		if (paysage) {
			if (viewportWidth < viewportHeight) {
				paysage = false;
				$('.demoContainer').css('height', '50%');
				$('.demoContainer').css('width', '100%');
				$('.descriptionContainer').css('top', '50%');
				$('.descriptionContainer').css('height', '50%');
				$('.descriptionContainer').css('width', '100%');
				$('.descriptionTextContainer').css('margin', '0 auto');
				$('.demoVideo').css('width', '90vw');
				$('.demoVideo').css('height', '50.625vw');
				$('.gallery').css('width', '90vw');
				$('.gallery').css('height', '45vw');
			}
		} else {
			if (viewportWidth > viewportHeight) {
				paysage = true;
				$('.demoContainer').css('height', '100%');
				$('.demoContainer').css('width', '50%');
				$('.descriptionContainer').css('top', '0%');
				$('.descriptionContainer').css('height', '100%');
				$('.descriptionContainer').css('width', '50%');
				$('.descriptionTextContainer').css('margin', '20% 10% 0 1%');
				$('.demoVideo').css('width', '45vw');
				$('.demoVideo').css('height', '25.3125vw');
				$('.gallery').css('width', '45vw');
				$('.gallery').css('height', '22.5vw');
			}
		}
		if (paysage && viewportWidth < 1200) {
			$('.title').css('font-size', '3em');
		} else {
			$('.title').css('font-size', '4em');
		}
		if (paysage && 0.015 * viewportWidth < 16) {
			$('#menu').css('font-size', '1.5vw');
		} else {
			$('#menu').css('font-size', '1em');
		}
	}

	$(window).resize(function() {
		AdjustToViewport();
	});

	//English
	function SetLanguageToEnglish() {
		$('#hello').text("Hello");
		$('#welcome').text("Welcome to my portfolio !");
		$('#introPhrase').text("Below are a few games I've worked on. Please feel free to get in touch with me if I can be of some help.");

		$('.technoUsed').text("Technologies used: ");

		$('#ImpulseDesc').text("Impulse is a first-person action-platform game set in a futuristic universe. The game is made under Unreal Engine 4 with a team of 3 people. We are aiming for a release on Steam at the end of 2017. Within the team, I mainly fulfill the roles of project manager and developer: I am solely responsible for everything related to code and scripting. We share the tasks of game design and level design, and then I take care of prototyping levels.");

		$('#NinjaWayTechnos').text("Unity 3D, Speech recognition");
		$('#NinjaWayDesc').text("Ninja Way is an infinite runner where the player controls a ninja by voice by telling him in which direction to go and when to jump. This little game made with Unity allowed me to learn how to create an infinite runner and made me discover the limitations of speech recognition for games.");

		$('#DeeperDesc').text("Deeper is a game for Android made during a gamejam with the theme \"platformer without a jump button\". The player must always keep the ball inside the screen while lowering it to the end of the level.");

		$('#JeuxGratuitsTechnos').text("HTML5 for the web and mobile, Cocos2D (Javascript), SmartFoxServer (Java), Multiplayer online");
		$('#JeuxGratuitsDesc').text("During a 6 months internship at Pinpin Team I had the task of recreating 3 multiplayer games for Jeux-Gratuits.com from their Flash version to a new HTML5 version for the web and mobile. I was a developer of both the client side in Javascript and the server side in Java. I worked on everything from adapting the UI to all resolutions on the client side to managing the player connections on the server side. I then helped putting these games into production. The most interesting part was developing and balancing the AI of the bots for the offline mode.");

		$('#CaptivesDesc').text("Captives is a virtual assistant in HTML5 for Android and iOS. This project from the Institute of Internet and Multimedia's research lab is an adaption of a fiction based on artificial intelligences. The user can interact with an artificial intelligence via text messages in a chat.");

		$('#SwitchDesc').text("Switch-ON-OFF is a small puzzle game made with Unity. The player activates and deactivates mechanisms to make the ball reach the end of the level.");

		$('#42daysTechnos').text("C# with Microsoft XNA");
		$('#42daysDesc').text("42 Days Later is an isometric 2D survival shooter game playable alone or in multiplayer online. This project was carried out in 1 year with a team of 4 people. I was responsible for the development of the different game mechanics and their balancing. I also developed the spawn system of enemies and their artificial intelligence.");

		$('#emailContact').text("You can send me an email at");
		$('#linkedInContact').text("If you wish you can also check");
		$('#linkedInProfile').text(" my LinkedIn profile.");
	};

	//Français
	function SetLanguageToFrench(){
		$('#hello').text("Bonjour");
		$('#welcome').text("Bienvenue sur mon portfolio !");
		$('#introPhrase').text("Vous trouverez ci-dessous quelques jeux sur lesquels j'ai travaillé. N'hésitez pas à me contacter si je peux être utile.");

		$('.technoUsed').text("Technologies utilisées: ");

		$('#ImpulseDesc').text("Impulse est un jeu d'action à la première personne situé dans un univers futuriste. Le jeu est fait sous Unreal Engine 4 avec une équipe de 3 personnes. Nous visons une sortie du jeu sur Steam à la fin de l'année 2017. Au sein de l'équipe, je remplis principalement les rôles de chef de projet et de développeur: je suis le seul responsable de tout ce qui se rapporte au code et au scripting. Nous partageons ensemble les tâches de game design et de level design, puis je m'occupe ensuite de prototyper les niveaux.");

		$('#NinjaWayTechnos').text("Unity 3D, Reconnaissance vocale");
		$('#NinjaWayDesc').text("Ninja Way est un runner infini où le joueur contrôle un ninja par la voix en lui disant dans quelle direction aller et quand sauter. Ce petit jeu fait sous Unity m'a permis d'apprendre à créer un runner infini et de découvrir les limitations de la reconnaissance vocale pour les jeux.");

		$('#DeeperDesc').text("Deeper est un jeu pour Android réalisé lors d'une gamejam avec le thème \"platformer sans bouton de saut\". Le joueur doit toujours garder la balle à l'intérieur de l'écran tout en la faisant descendre jusqu'à la fin du niveau.");

		$('#JeuxGratuitsTechnos').text("HTML5 pour le web et le mobile, Cocos2D (Javascript), SmartFoxServer (Java), Multi-joueurs en ligne");
		$('#JeuxGratuitsDesc').text("Lors d'un stage de 6 mois chez Pinpin Team j'ai eu la tâche de recréer 3 jeux multi-joueurs de Jeux-Gratuits.com depuis leur version Flash vers une nouvelle version HTML5 pour le web et mobile. En tant que développeur, j'ai travaillé sur tout aussi bien du côté client en Javascript que du côté serveur en Java: de l'adaptation de l'UI pour toutes les résolutions côté client jusqu'à la gestion des connexions des joueurs côté serveur. Puis j'ai accompagné la mise en production de ces jeux. La partie la plus intéressante fut de développer et d'équilibrer les IA des bots pour le mode hors-ligne.");

		$('#CaptivesDesc').text("Captives est un projet d'assistant virtuel en HTML5 pour Android et iOS. Ce projet du laboratoire de recherche de l'IIM est une adaptation d'une fiction basée sur les intelligences artificielles. L'utilisateur peut interagir avec une intelligence artificielle par message dans un chat.");

		$('#SwitchDesc').text("Switch-ON-OFF est un petit jeu de puzzle fait sous Unity pour Android. Le joueur active et désactive des mécanismes pour faire avancer la balle vers la fin du niveau.");

		$('#42daysTechnos').text("C# avec Microsoft XNA");
		$('#42daysDesc').text("42 Days Later est un jeu de tir en vue 2D isométrique jouable en solo ou en multi-joueurs en ligne. Ce projet a été réalisé en 1 an avec une équipe de 4 personnes. J'étais responsable du développement des différentes mécaniques de gameplay et de leur équilibrage. J'ai également développé le système d'apparition des ennemies et leur intelligence artificielle.");

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
	AdjustToViewport();
});

