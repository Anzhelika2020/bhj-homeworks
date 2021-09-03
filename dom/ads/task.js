"use script";


document.addEventListener("DOMContentLoaded", changeAds);

function changeAds () {
  const cardsElms = Array.from(document.querySelectorAll(".card"));

  cardsElms.forEach((card) => {
    const rotatorCases = Array.from(card.querySelectorAll(".rotator__case"));

    let i = rotatorCases.indexOf(card.querySelector(".rotator__case_active"));

    setInterval(changeCase, 1000);

    function changeCase () {
      rotatorCases[i].classList.remove("rotator__case_active");

      i === rotatorCases.length - 1 ? i = 0 : i++;

      rotatorCases[i].classList.add("rotator__case_active");
    };
  });
};
