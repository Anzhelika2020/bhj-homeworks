"use strict";

const linksHasTooltip = document.querySelectorAll(".has-tooltip");

let tooltipElm = document.createElement("div");

tooltipElm.className = "tooltip";

tooltipElm.style.position = "absolute";
tooltipElm.style.background = "black";
tooltipElm.style.color = "white";
tooltipElm.style.borderRadius = "4px";

linksHasTooltip.forEach((elm) => {
  elm.onclick = function() {

    if (tooltipElm.textContent === elm.title) {
      tooltipElm.textContent = "";
      tooltipElm.className = "tooltip";

    } else {
      elm.insertAdjacentElement("afterEnd", tooltipElm);

      tooltipElm.textContent = elm.title;

      tooltipElm.className = "tooltip_active";

      tooltipElm.style.left = `${elm.getBoundingClientRect().left}px`;

      //топ нет смысла задавать, он и так на нужном нам уровне
      //tooltipElm.style.top = `${elm.getBoundingClientRect().bottom}px`;
    };

    return false;
  };
});

