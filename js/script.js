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
console.log(Swiper);
if (document.querySelector(".user-stories-swiper")) {
  new Swiper(".user-stories-swiper", {
    spaceBetween: 10,
    loop: false,
    slidesPerView: "auto",
  });
}
if (document.querySelector(".gallery")) {
  lightGallery(document.querySelector(".gallery"), {
    licenseKey: "0000-0000-0000-0000",
  });
}
