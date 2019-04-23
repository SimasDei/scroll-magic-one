$(document).ready(function() {
  // Init Scroll Magic
  var controller = new ScrollMagic.Controller();

  var ourScene = new ScrollMagic.Scene({
    triggerElement: "#project01 img",
    triggerHook: 0.9
  })
    .setClassToggle("#project01", "fade-in")
    .addIndicators({
      name: "fade scene",
      colorTrigger: "black",
      colorStart: "#75C695",
      colorEnd: "pink"
    })
    .addTo(controller);

  var ourScene2 = new ScrollMagic.Scene({
    triggerElement: "#project02 img",
    triggerHook: 0.9
  })
    .setClassToggle("#project02", "fade-in")
    .addIndicators({
      name: "fade scene 2",
      colorTrigger: "black",
      colorStart: "#75C695",
      colorEnd: "pink"
    })
    .addTo(controller);

  var ourScene3 = new ScrollMagic.Scene({
    triggerElement: "#project03 img",
    triggerHook: 0.9
  })
    .setClassToggle("#project03", "fade-in")
    .addIndicators({
      name: "fade scene 3",
      colorTrigger: "black",
      colorStart: "#75C695",
      colorEnd: "pink"
    })
    .addTo(controller);
});
