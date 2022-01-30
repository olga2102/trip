new Swiper(".training__swiper", {
  navigation: {
    nextEl: '.swiper-button--next',
    prevEl: '.swiper-button--prev',
  },
  // pagination: {
  //   el: '.swiper-pag',
  //   clickable: true,
  // },
  spaceBetween: 5,
  slidesPerGroup: 2,
  breakpoints: {
    320: {
    slidesPerView: 1,
    },
    768: {
      slidesPerView: 2.8,
    },
    1024: {
      slidesPerView: 5,
    }
  },
  loop: true,
  initialSlide: 1,
});

new Swiper(".tours__swiper", {
  navigation: {
    nextEl: '.swiper-button--next',
    prevEl: '.swiper-button--prev',
  },
  // pagination: {
  //   el: '.swiper-pag',
  //   clickable: true,
  // },
  spaceBetween: 10,
  // slidesPerGroup: 2,
  breakpoints: {
    320: {
    slidesPerView: 1,
    },
    768: {
      slidesPerView: 2.8,
    },
    1024: {
      slidesPerView: 3,
    }
  },
  loop: true,
  initialSlide: 1,
  centeredSlides: true,
});

new Swiper(".reviews__swiper", {
  navigation: {
    nextEl: '.swiper-button--next',
    prevEl: '.swiper-button--prev',
  },
  // pagination: {
  //   el: '.swiper-pag',
  //   clickable: true,
  // },
  spaceBetween: 10,
  // slidesPerGroup: 2,
  breakpoints: {
    320: {
    slidesPerView: 1,
    },
    768: {
      slidesPerView: 1.5,
    },
    1024: {
      slidesPerView: 3,
    }
  },
  loop: true,
  initialSlide: 1,
  // centeredSlides: true,
});
