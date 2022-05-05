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
  slidesPerView: 3,
  centeredSlides: true,
  centeredSlidesBounds: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

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
        $(".header").css({ position: "fixed", top: "50px", bottom: "auto" });
      }
    }
  });

  jQuery(".form").submit(function () {
    var Name = jQuery("#Name").val();
    var Phone = jQuery("#Phone").val();
    var Quession = jQuery("#Quession").val();
    var http = new XMLHttpRequest();
    var url =
      "https://script.google.com/macros/s/AKfycbw1fEVCr9ib6GJ9JzAD-Tmy-ZWCRNLwZhW1Q6AGsJ7IcBwhL4W-/exec";
    var params = "p1=" + Name + "&p2=" + Phone + "&p3=" + Quession;
    http.open("GET", url + "?" + params, true);
    http.onreadystatechange = function () {
      if (http.readyState == 4 && http.status == 200) {
        //alert(http.responseText);
      }
    };
    http.send(null);
  });
});
