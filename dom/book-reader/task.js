"use strict";

const bookElm = document.getElementById("book");

const controlFS = document.querySelector(".book__control_font-size");

const controlColor = document.querySelector(".book__control_color");

const controlBackground = document.querySelector(".book__control_background");


const fontSizeBtns = Array.from(controlFS.querySelectorAll(".font-size"));

const colorBtns = Array.from(controlColor.querySelectorAll(".color"));

const backgroundBtns = Array.from(controlBackground.querySelectorAll(".color"));


function changeBtn (button, classActiveBtn) {
  if (button.className.includes(classActiveBtn)) {
    return false;

  } else {
    button.closest(".book__control").querySelector(`.${classActiveBtn}`).classList.remove(classActiveBtn);

    button.classList.add(classActiveBtn);
  };
};


fontSizeBtns.forEach((button) => {
  button.onclick = function () {
    bookElm.classList.remove("book_fs-big", "book_fs-small");

    if (this.dataset.size ==="big") {
      bookElm.classList.add("book_fs-big");

    } else if (this.dataset.size === "small") {
      bookElm.classList.add("book_fs-small");
    };

    changeBtn(button, "font-size_active");

    return false;
  };
});

colorBtns.forEach((button) => {
  button.onclick = function () {
    bookElm.classList.remove("book_color-gray", "book_color-whitesmoke", "book_color-black");

    if (this.dataset.textColor === "gray") {
      bookElm.classList.add("book_color-gray");

    } else if (this.dataset.textColor === "whitesmoke") {
      bookElm.classList.add("book_color-whitesmoke");

    } else if (this.dataset.textColor === "black") {;
      bookElm.classList.add("book_color-black");
    };

    changeBtn(button, "color_active");

    return false;
  };
});

backgroundBtns.forEach((button) => {
  button.onclick = function () {
    bookElm.classList.remove("book_bg-gray", "book_bg-black", "book_bg-white");

    if (this.dataset.bgColor === "gray") {
      bookElm.classList.add("book_bg-gray");

    } else if (this.dataset.bgColor === "black") {
      bookElm.classList.add("book_bg-black");

    } else if (this.dataset.bgColor === "white") {
      bookElm.classList.add("book_bg-white");
    };

    changeBtn(button, "color_active");

    return false;
  };
});
