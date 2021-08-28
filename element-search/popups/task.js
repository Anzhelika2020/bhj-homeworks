'use strict';

//1 показ окна при запуске

const modalMain = document.getElementById("modal_main");

const modalSuccess = document.getElementById("modal_success");

modalMain.className = "modal modal_active";


//2 закрытие окна разными кнопками
const closeElms = document.getElementsByClassName("modal__close");

for (let i = 0; i < closeElms.length; i++) {
  closeElms[i].onclick = function () {
    this.closest(".modal_active").className = "modal";
  };
};


//3 открытие окна успеха
const showSuccessBtn = modalMain.querySelector(".show-success");

showSuccessBtn.onclick = function () {
  modalMain.className = "modal";
  modalSuccess.className = "modal modal_active";
};
