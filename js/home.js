const swiper = new Swiper(".mySwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 4000,
    disabledOnInteraction: false,
  },
});

const roomsSwiper = new Swiper(".roomsSwiper", {
  slidesPerView: "auto",

  spaceBetween: 40,

  loop: true,

  loopAdditionalSlides: 5,

  speed: 8000,

  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  },
});
