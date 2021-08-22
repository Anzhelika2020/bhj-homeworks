"use strict";

let elmClickerCounter = document.getElementById("clicker__counter");

let elmtCookie = document.getElementById("cookie");

elmtCookie.onclick = function() {
  if (this.width <= 200) {
    elmtCookie.width *= 1.2;
  } else {
    this.width /= 1.2;
  };

  elmClickerCounter.textContent = +elmClickerCounter.textContent + 1;
};

