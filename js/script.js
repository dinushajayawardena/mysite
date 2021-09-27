//animated header
$(function() {
    $(window).scroll(function() {
      if ($(document).scrollTop() > 150) {
        $("header").addClass("sticky");
      } else {
        $("header").removeClass("sticky");
      }
    });
  });   

//typing animation script
var typed = new Typed(".typing", {
  strings: ["   ", "3D Modeler", "Developer", "Creative Designer"],
  typeSpeed: 30,
  backSpeed: 60,
  loop: true
})