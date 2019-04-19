$(document).ready(function(){

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	// loop through each .project element
	$('.project').each(function(){
		// build a scene
		var ourScene = new ScrollMagic.Scene({
		triggerElement: this.children[0], // target first child element of .project
		triggerHook: 0.9,
		reverse: false // makes animation go only once
	})
	.setClassToggle(this, 'fade-in') // add class to project01
	.addIndicators({
		name: 'fade scene',
		colorTrigger: 'black',
		indent: 200,
		colorStart: 'darkgreen',
		colorEnd: 'darkblue'
	}) // this requires a plugin
	.addTo(controller);
	});

});


















