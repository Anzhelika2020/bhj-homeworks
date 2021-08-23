"use strict";

let deadElem = document.getElementById("dead");

let lostElem = document.getElementById("lost");

const getHole = i => {return document.getElementById(`hole${i}`)};

for (let i = 1; i < 10; i++) {
  getHole(i).onclick = function() {
    if (getHole(i).className === "hole hole_has-mole") {
      deadElem.textContent = +deadElem.textContent + 1;

      winCheck.call(deadElem, 10, "Вы выиграли!");

    } else {
      lostElem.textContent = +lostElem.textContent + 1;

      winCheck.call(lostElem, 5, "Вы проиграли!");
    };
  };
};

function winCheck(amount, text) {
  if (this.textContent == amount) {
    alert(text);

    deadElem.textContent = 0;

    lostElem.textContent = 0;
  }
}
