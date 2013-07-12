
$(document).ready( function() {
	
	function setupMenuItem(menuItem,image,title) {
	    $(menuItem).mouseover(function(){
			$(menuItem).attr('src','images/' + image + '-up.jpg');
	    }).mouseout(function(){
			$(menuItem).attr('src','images/' + image + '.jpg');
		});
		$(menuItem).click(function(){
			$('#dialogBox').dialog({
				title: title,
				modal: true,
				height: 600,
				width: 800,
				open: function() {
					$('#dialogBox').load('content/' + image + '.html');
				}
			});
		});		
	}
	
	setupMenuItem('#menuHipHop','hiphop','Hip-Hop, Drum \'n Bass, House');
	setupMenuItem('#menuContact','contact','Contact Me');
	setupMenuItem('#menuVideo','video','Video Projects');
	setupMenuItem('#menuSwing','swing','Swing, Lindy and Blues');

});
