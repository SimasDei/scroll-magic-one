$(document).ready(function(){

  // Init ScrollMagic
  var controller = new ScrollMagic.Controller();

  // build a scene
  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#project01'
  })
  .setClassToggle('#project01', 'fade-in') // add class to project 01
  .addIndicators({
    name: 'fade scene',
    colorTrigger: 'black',
    indent: 200,
    colorStart: '#75c695'
  }) // this requires a plugin
  .addTo(controller);

});


















