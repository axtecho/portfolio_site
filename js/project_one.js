"use strict";

/* ---------------Nav / Burgermenu----------------------- */
document.querySelector("nav svg").addEventListener("click", slideOutMenu);
document.querySelector(".burgermenu li").addEventListener("click", closemenu);
const burgermenuClass = document.querySelector(".bgmenuWidth");
const burgermenu = document.querySelector(".burgermenu");

function closemenu() {
  if (!burgermenu.classList.contains(burgermenuClass)) {
    slideOutMenu();
  }
}
function slideOutMenu() {
  document.querySelector(".burgermenu").classList.toggle("bgmenuWidth");
  document.querySelector("nav svg").classList.toggle("nav_svg_fixed");
  document.querySelector(".one").classList.toggle("lineOne");
  document.querySelector(".two").classList.toggle("lineTwo");
  document.querySelector(".three").classList.toggle("lineThree");
  document.querySelector("main").classList.toggle("remove_display");
}

/* ----------------------Mediaquery------------------------- */

const mediaSize = window.matchMedia("(max-width: 784px)");
let welcomeSpan = document.querySelector("#welcome_span");
let filteringSpan = document.querySelector("#filtering_span");
let cleaningSpan = document.querySelector("#cleaning_span");
let messyDataSpan = document.querySelector("#messy_data_span");
let bloodSpan = document.querySelector("#blood_span");

if (mediaSize.matches) {
  console.log(welcomeSpan);
  welcomeSpan.textContent = "underneath here";
  filteringSpan.textContent = "underneath here";
  cleaningSpan.textContent = "underneath here";
  bloodSpan.textContent = "Underneath here";
  messyDataSpan.textContent = "The first of the images underneath here";
}
