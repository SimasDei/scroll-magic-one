$(document).ready(function() {
  // Init Scroll Magic
  var controller = new ScrollMagic.Controller();

  // pin intro
  var pinIntroScene = new ScrollMagic.Scene({
    triggerElement: "#intro",
    triggerHook: 0,
    duration: "30%"
  })
    .setPin("#intro", { pushFollowers: false })
    .addTo(controller);

  // pin again
  var pinIntroScene2 = new ScrollMagic.Scene({
    triggerElement: "#project01",
    triggerHook: 0.4
  })
    .setPin("#intro", { pushFollowers: false })
    .addTo(controller);

  $(".project").each(function() {
    var ourScene = new ScrollMagic.Scene({
      triggerElement: this.children[0],
      triggerHook: 0.9
    })
      .setClassToggle(this, "fade-in")
      .addIndicators({
        name: "fade scene",
        colorTrigger: "black",
        colorStart: "#75C695",
        colorEnd: "pink"
      })
      .addTo(controller);
  });
});
