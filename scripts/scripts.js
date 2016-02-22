	$(function(){
	
		/***** AUDIO JS *****/
  	
  		audiojs.events.ready(function() {
	    	var as = audiojs.createAll();
	    	$('.episodeContainer__ContentBoxPlay').on('click', function(e) {
	    		e.preventDefault();
	    		as[0].playPause();
	    	});
	  	});
	
	  	/**** SMOOTH SCROLL *****/
	
	  	$('a').smoothScroll();
	
	  	/***** MOBILE SLIDE OUT NAV *****/
	
	  	$('.hamburger').on('click', function(){
			event.preventDefault();
			$('.headerLinks ul').slideToggle();
		});
	
		/********** EPISODE FILTERS *******/
	
		$('.episodes__One').on('click', function(){
			event.preventDefault();
			$('.one').show();
			$('.two').slideUp();
			$('.three').slideUp();
		});
		$('.episodes__Two').on('click', function(){
			event.preventDefault();
			$('.one').slideUp();
			$('.two').show();
			$('.three').slideUp();
		});
		$('.episodes__Three').on('click', function(){
			event.preventDefault();
			$('.one').slideUp();
			$('.two').slideUp();
			$('.three').show();
		});
		$('.episodes__All').on('click', function(){
			event.preventDefault();
			$('.one').show();
			$('.two').show();
			$('.three').show();

		});
	});