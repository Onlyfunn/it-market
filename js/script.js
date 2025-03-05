var swiper = new Swiper(".swiper-card1", {
  spaceBetween: 10,
  initialSlide: 1,
  slidesPerView: 4,
  navigation: {
    nextEl: ".swiper-button-next",
  },
});
console.log(swiper);

var swiper2 = new Swiper(".swiper-card2", {
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
});

lightGallery(document.querySelector(".gallery"), {
  licenseKey: "0000-0000-0000-0000",
});
