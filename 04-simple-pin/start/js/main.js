/*
I like pinning #intro once
with no duration
not needing the pushFollowers
property
*/

$(document).ready(function(){

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	// pin the intro
	var pinIntroScene = new ScrollMagic.Scene({
		triggerElement: '#intro',
		triggerHook: 0,
		duration: '30%' // Unpin after X% of scrolling
	})
	.setPin('#intro', {pushFollowers: false}) // Makes duration above work when above 0%
	.addTo(controller);

	// Repin #intro with a different trigger element
	var pinIntroSceneTwo = new ScrollMagic.Scene({
		triggerElement: '#project01',
		triggerHook: 0.4
	})
	.setPin('#intro')
	.addTo(controller);

	// loop through each .project element
	$('.project').each(function(){

		// build a scene
		var ourScene = new ScrollMagic.Scene({
			triggerElement: this.children[0],
			triggerHook: 0.9
		})
		.setClassToggle(this, 'fade-in') // add class to project01
		.addIndicators({
			name: 'fade scene',
			colorTrigger: 'black',
			colorStart: 'darkgreen',
			colorEnd: 'blue'
		}) // this requires a plugin
		.addTo(controller);

	});

});


















