$(document).ready(function(){
	$('#fullpage').fullpage({
		sectionsColor: ['#131313', '#181818', '#232323', '#282828'],
		anchors: ['introPage', 'page2', 'page3', 'contactPage'],
		menu: '#menu',
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['First page', 'Second page', 'Third page', 'Contact page'],
		loopHorizontal: false,
		onLeave: function(index, nextIndex, direction){
			$('#Fullscreen').fadeOut();
		}
	});

	$('.galleryImage').click(function(){
		var src = $(this).attr('src'); //get the source attribute of the clicked image
		$('#Fullscreen').attr('src', src); //assign it to the tag for your fullscreen div
		$('#Fullscreen').fadeIn();
	});

	$('#Fullscreen').click(function(){
		$(this).fadeOut(); //this will hide the fullscreen div if you click away from the image.
	});
});

