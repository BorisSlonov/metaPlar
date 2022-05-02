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

$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if ($(window).width() <= 1240) {
      if (scroll <= 40) {
        $(".header").css({
          position: "absolute",
          top: "40px",
          bottom: "auto",
        });
      } else {
        $(".header").css({ position: "fixed", top: "0", bottom: "auto" });
      }
    } else {
      if (scroll <= 180) {
        $(".header").css({
          position: "absolute",
          top: "180px",
          bottom: "auto",
        });
      } else {
        $(".header").css({ position: "fixed", top: "0", bottom: "auto" });
      }
    }
  });
});
