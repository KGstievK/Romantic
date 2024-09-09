const swiperElement = document.querySelector("swiper-container");
const swiperButtonPrev = document.querySelector(".swiper-prev");
const swiperButtonNext = document.querySelector(".swiper-next");



const swiperParams = {
  slidesPerView: 1,
  spaceBetween: 20,
  on: {
    init() {},
  },
};

Object.assign(swiperElement, swiperParams);

swiperButtonPrev.addEventListener("click", () => {
  swiperElement.swiper.slidePrev();
});
swiperButtonNext.addEventListener("click", () => {
  swiperElement.swiper.slideNext();
});

swiperElement.initialize();






