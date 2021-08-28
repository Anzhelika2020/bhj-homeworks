"use strict";

const sliders = Array.from(document.querySelectorAll(".slider__item"));

const sliderArrowPrev = document.querySelector (".slider__arrow_prev");

const sliderArrowNext = document.querySelector(".slider__arrow_next");

const sliderDots = Array.from(document.querySelectorAll(".slider__dot"));

sliderDots[0].className = "slider__dot slider__dot_active";


//управление с помощъю стрелок
sliderArrowNext.onclick = sliderSwitch;

sliderArrowPrev.onclick = sliderSwitch;

function sliderSwitch () {
  let i = sliders.findIndex(element => element.className.includes("active"));
  
  sliders[i].className = "slider__item";

  sliderDots[i].className = "slider__dot";
  
  this.className.includes("next") ? i = сalcNextSlider(i) : i = сalcPrevSlider(i);

  sliders[i].className = "slider__item slider__item_active";

  sliderDots[i].className = "slider__dot slider__dot_active";
};

function сalcNextSlider (i) {
  i === sliders.length - 1 ? i = 0 : i++;

  return i;
};

function сalcPrevSlider (i) {
  i === 0 ? i = sliders.length - 1 : i--;
  
  return i;
};


//управление с помощъю точек
for (let i = 0; i < sliderDots.length; i++) {
  sliderDots[i].onclick = function() {
    document.querySelector(".slider__item_active").className = "slider__item";

    document.querySelector(".slider__dot_active").className = "slider__dot";
    
    sliders[i].className = "slider__item slider__item_active";

    sliderDots[i].className = "slider__dot slider__dot_active";
  };
};

