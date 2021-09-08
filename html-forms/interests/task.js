"use strict";


const mainCheckbox  = document.querySelectorAll("div.interests > ul > li > label > input.interest__check");

console.log(mainCheckbox);

mainCheckbox.forEach((elm) => {
  elm.onchange = function () {
    const chldCheckbox = elm.closest("li.interest").querySelectorAll("ul.interests > li > label > input.interest__check");

    if (elm.checked) {
      chldCheckbox.forEach((elm) => elm.checked = true);
    } else {
      chldCheckbox.forEach((elm) => elm.checked = false);
    };
  };
});

