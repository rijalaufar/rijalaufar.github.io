var typed = new Typed(".typing", {
  strings: [
    "UI/UX Design",
    "Otomotif",
    "Animasi 3D",
    "Video Editing",
    "Web Programming",
    "Banking",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

// scroll
$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
  if (
    location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
    location.hostname == this.hostname
  ) {
    var target = $(this.hash);
    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
    if (target.length) {
      $("html, body").animate(
        {
          scrollTop: target.offset().top - 54,
        },
        1000,
        "easeInOutExpo"
      );
      return false;
    }
  }
});
