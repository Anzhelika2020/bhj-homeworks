"use strict";

const aHasTooltips = document.querySelectorAll(".has-tooltip");

let tooltipElm = document.createElement("div");

tooltipElm.className = "tooltip";

aHasTooltips.forEach((elm) => {
  elm.onclick = function() {

    if (tooltipElm.textContent === elm.title) {
      tooltipElm.textContent = "";
      tooltipElm.className = "tooltip";

    } else {
      elm.insertAdjacentElement("afterEnd", tooltipElm);

      tooltipElm.textContent = elm.title;

      tooltipElm.className = "tooltip_active";
      
      tooltipElm.style.position = "absolute";
      tooltipElm.style.background = "black";
      tooltipElm.style.color = "white";
      tooltipElm.style.borderRadius = "4px";
      tooltipElm.style.left = `${elm.getBoundingClientRect().left}px`;

      //топ нет смысла задавать, он и так на нужном нам уровне
      //tooltipElm.style.top = `${elm.getBoundingClientRect().bottom}px`;
    };

    return false;
  };
});

