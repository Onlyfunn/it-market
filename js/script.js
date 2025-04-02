if (document.querySelector(".swiper-card1")) {
  var swiper = new Swiper(".swiper-card1", {
    spaceBetween: 20,
    initialSlide: 1,
    slidesPerView: 4,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
if (document.querySelector(".swiper-card2")) {
  var swiper2 = new Swiper(".swiper-card2", {
    spaceBetween: 10,
    thumbs: {
      swiper: swiper,
    },
  });
}
if (document.querySelector(".user-stories-swiper")) {
  new Swiper(".user-stories-swiper", {
    spaceBetween: 20,
    loop: false,
    slidesPerView: "auto",
  });
}
if (document.querySelector(".gallery")) {
  lightGallery(document.querySelector(".gallery"), {
    licenseKey: "0000-0000-0000-0000",
  });
}

if ($("#header").length) {
  const $header = $("#header");
  let prevScroll;
  let lastShowPos;
  $(window).on("scroll", function () {
    console.log("123");
    const scrolled = $(window).scrollTop();
    if (scrolled > 0 && scrolled > prevScroll) {
      $header.addClass("header-out");
      lastShowPos = scrolled;
    } else if (scrolled <= Math.max(lastShowPos - 0, 0)) {
      $header.removeClass("header-out");
    }
    prevScroll = scrolled;
  });
}
