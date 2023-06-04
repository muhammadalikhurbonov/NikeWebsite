"use strict";
const header = document.querySelector(".header");
window.addEventListener("scroll", (e) => {
  if (scrollY >= 50) {
    header.classList.add("header_function");
  } else if (scrollY <= 50) {
    header.classList.remove("header_function");
  }
});
