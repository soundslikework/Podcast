'use strict';

$(function () {
	/***** LOAD MORE *****/
	$('.moreButton').on('click', function (e) {
		e.preventDefault();
		$('div.episodeContainer').append('<div class="episodeContainer__ContentBox aboutPod-1 three"><div class="contentBoxWhiteLine"></div><div class="headerContentBoxTopRow"><h3>Season 3</h3><h3><i class="fa fa-clock-o fa-flip-horizontal"></i>59 Mins</h3></div><h2>Episode 52: Chipotle Peppers</h2><p>October 11, 2015</p><h3 class="episodeContainer__ContentBoxPlay"><a href="#"><i class="fa fa-play"></i>Play Episode</a></h3></div>');
	});

	/***** AUDIO JS *****/

	audiojs.events.ready(function () {
		var as = audiojs.createAll();
		$('.episodeContainer__ContentBoxPlay').on('click', function (e) {
			e.preventDefault();
			as[0].playPause();
		});
	});

	/**** SMOOTH SCROLL *****/

	$('a').smoothScroll();

	/***** MOBILE SLIDE OUT NAV *****/

	$('.hamburger').on('click', function () {
		event.preventDefault();
		$('.headerLinks ul').slideToggle();
	});

	/********** EPISODE FILTERS *******/

	$('.episodes__One').on('click', function () {
		event.preventDefault();
		$('.one').show();
		$('.two').slideUp();
		$('.three').slideUp();
	});
	$('.episodes__Two').on('click', function () {
		event.preventDefault();
		$('.one').slideUp();
		$('.two').show();
		$('.three').slideUp();
	});
	$('.episodes__Three').on('click', function () {
		event.preventDefault();
		$('.one').slideUp();
		$('.two').slideUp();
		$('.three').show();
	});
	$('.episodes__All').on('click', function () {
		event.preventDefault();
		$('.one').show();
		$('.two').show();
		$('.three').show();
	});
}); //END DOC READY