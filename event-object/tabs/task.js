"use strict";

const tabNav = document.querySelector(".tab__navigation");

const tabNavEls = Array.from(tabNav.querySelectorAll(".tab"));

for (let i = 0; i < tabNavEls.length; i++) {
  tabNavEls[i].onclick = switchTabNavEls;
};

function switchTabNavEls () {
  if (this.className !== "tab tab_active") {
    this.parentElement.querySelector(".tab_active").className = "tab";

    this.className = "tab tab_active";

    let index = tabNavEls.indexOf(this);

    const contentElsParent = this.closest(".tabs");

    contentElsParent.querySelector(".tab__content_active").className = "tab__content";

    contentElsParent.querySelectorAll(".tab__content")[index].className = "tab__content tab__content_active";
  };
};
