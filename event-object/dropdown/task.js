"use strict";

const btnsValueEls = Array.from(document.querySelectorAll(".dropdown__value"));

const menuItems = Array.from(document.querySelectorAll(".dropdown__item"));

const menuLinks = Array.from(document.querySelectorAll(".dropdown__link"));


for (let i = 0; i < btnsValueEls.length; i++) {
  btnsValueEls[i].onclick = function () {
    const activeMenuList = document.querySelector(".dropdown__list_active");

    const thisMenuList = this.parentElement.querySelector(".dropdown__list");

    if (thisMenuList.className.includes("list_active")) {
      activeMenuList.className = "dropdown__list";

    } else if (activeMenuList) {
      activeMenuList.className = "dropdown__list";

      thisMenuList.className = "dropdown__list dropdown__list_active";

    } else {
      thisMenuList.className = "dropdown__list dropdown__list_active";
    };
  };
};

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].onclick = function () {
    this.parentElement.className = "dropdown__list";

    this.closest(".dropdown").querySelector(".dropdown__value").textContent = menuLinks[i].textContent;

    return false;
  };
};