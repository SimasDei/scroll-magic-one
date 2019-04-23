$(document).ready(function(){

	// Init Scroll Magic
	var controller = new ScrollMagic.Controller();

	// loop through each .project element
	$('.project').each(function() {
		console.log(this);

		// build a scene

		var ourScene = new ScrollMagic.Scene({
			triggerElement: this.children[0],
			triggerHook: 0.9
		})
		.setClasstoggle(this, 'fade-in') // add class to project 01
		.addIndicators({
			name: 'fade scene',
			colorTrigger: 'black',
			colorStart: '#75c695',
			colorEnd: 'pink'
		}) // This requires a plugin
		.addTo(controller)
	})
	

});


















