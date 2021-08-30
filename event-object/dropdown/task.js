"use strict";

const btnValue = document.querySelector(".dropdown__value");

const menuList = document.querySelector(".dropdown__list");

const menuItems = Array.from(document.querySelectorAll(".dropdown__item"));

const menuLinks = Array.from(document.querySelectorAll(".dropdown__link"));

btnValue.onclick = function () {
  menuList.className.includes("list_active") ? 
  menuList.className = "dropdown__list" : 
  menuList.className = "dropdown__list dropdown__list_active";
};

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].onclick = function () {
    menuList.className = "dropdown__list";

    btnValue.textContent = menuLinks[i].textContent;

    return false;
  }

};
