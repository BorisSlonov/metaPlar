//burger
window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".header__list"),
    menuItem = document.querySelectorAll(".header__link"),
    hamburger = document.querySelector(".header__burger"),
    overflowHidden = document.querySelector("body");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("burger_active");
    menu.classList.toggle("menu_active");
    overflowHidden.classList.toggle("overflow-hidden-y");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("burger_active");
      menu.classList.toggle("menu_active");
      overflowHidden.classList.toggle("overflow-hidden-y");
    });
  });
});

const swiper = new Swiper(".swiper-advantages", {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  centeredSlidesBounds: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    draggable: true,
    clickable: true,
  },

  breakpoints: {
    // when window width is >= 320px
    1240: {
      slidesPerView: 3,
    },
  },
});

new WOW().init();

$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if ($(window).width() <= 1240) {
    } else {
      if (scroll <= 700) {
        $(".header").css({
          position: "absolute",
          top: "180px",
          bottom: "auto",
        });
      } else {
        $(".header").css({
          position: "fixed",
          top: "50px",
          bottom: "auto",
        });
      }
    }
  });

  $(".crypto-list__btn").click(function () {
    $(".crypto-list__row-hidden").addClass("crypto-list__row-hidden_show");
    $(".crypto-list__btn").addClass("crypto-list__btn-hidden");
  });
});
