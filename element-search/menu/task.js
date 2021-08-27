"use strict";

const menuLinks = document.querySelectorAll('ul.menu_main > li > a');

for (let i = 0; i < menuLinks.length; i++) { 
  let subMenu = menuLinks[i].parentElement.querySelector('ul');
  
  if (subMenu) {
    menuLinks[i].onclick = function () {
      if (subMenu.className.includes("menu_active")) {

        subMenu.className = 'menu menu_sub';

        return false;

      } else {
        if (document.querySelector('.menu_active')) {
          document.querySelector('.menu_active').className = 'menu menu_sub';
        };

        subMenu.className = 'menu menu_sub menu_active';

        return false;
      };
    };
  };
};
