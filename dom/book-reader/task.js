"use strict";

const bookElm = document.getElementById("book");

const controlFS = document.querySelector(".book__control_font-size");

const fontSizeElms = Array.from(controlFS.querySelectorAll(".font-size"));

fontSizeElms.forEach((element) => {
  element.onclick = function () {
    if (this.className.includes("big")) {
      bookElm.className = "book book_fs-big";

    } else if (this.className.includes("small")) {
      bookElm.className = "book book_fs-small";

    } else {
      bookElm.className = "book";
    };

    if (this.className.includes("size_active")) {
      return false;
    } else {
      this.closest(".book__control").querySelector(".font-size_active").classList.remove("font-size_active");

      this.classList.add("font-size_active");

      bookElm.classList.add

      return false;
    };
  };
});