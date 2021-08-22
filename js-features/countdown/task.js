'use strict';

const countId = setInterval(countdown, 1000);

function countdown() {
  let elementTimer = document.getElementById('timer');

  if (elementTimer.textContent == 0) {
    alert("Вы победили в конкурсе!");
    clearInterval(countId);
  } else {
    elementTimer.textContent -= 1;
  };
};
