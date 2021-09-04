"use strict";

const revealEls = document.querySelector(".reveal");

let topValue = revealEls.getBoundingClientRect().top; 
let bottomValue = revealEls.getBoundingClientRect().bottom;

let heightElm = bottomValue - topValue;

let viewportHeight = window.innerHeight;

window.onscroll = () => {
  topValue = revealEls.getBoundingClientRect().top;

  if (topValue < viewportHeight && topValue > -heightElm) {
    revealEls.classList.add("reveal_active");
  } else {
    revealEls.classList.remove("reveal_active");
  };
};

