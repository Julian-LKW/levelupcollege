new Swiper('.swiper', {
    loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  breakpoints: {
    0: {
      slidesPerview: 2
    },
    768: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 8
    }
  }
});