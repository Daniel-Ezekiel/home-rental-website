"use strict";

const btnHamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav");

btnHamburger.addEventListener("click", function () {
  menu.classList.toggle("active");
  btnHamburger.classList.toggle("active");
});
