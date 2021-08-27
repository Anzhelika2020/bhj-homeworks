"use strict";

const sliders = document.querySelectorAll(".slider__item");

const sliderArrowPrev = document.querySelector (".slider__arrow_prev");

const sliderArrowNext = document.querySelector(".slider__arrow_next");

sliderArrowNext.onclick = sliderSwitch;

sliderArrowPrev.onclick = sliderSwitch;


function sliderSwitch () {
  for (let i = 0; i < sliders.length; i++) {
    if (sliders[i].className.includes("active")) {
      sliders[i].className = "slider__item";

      if (this.className.includes("next")) {
        i = CalcNextSlider(i);
      } else if (this.className.includes("prev")) {
        i = CalcPrevSlider(i);
      };

      sliders[i].className = "slider__item slider__item_active";
    };
  };
}

function CalcNextSlider (i) {
  if (i === sliders.length - 1) {
    i = 0;
  } else {
    i++;
  };

  return i;
}

function CalcPrevSlider (i) {
  if (i === 0) {
    i = sliders.length - 1;
  } else {
    i--;
  };

  return i;
}

