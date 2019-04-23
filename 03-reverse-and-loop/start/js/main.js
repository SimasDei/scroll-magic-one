$(document).ready(function() {
  // Init Scroll Magic
  var controller = new ScrollMagic.Controller();

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
