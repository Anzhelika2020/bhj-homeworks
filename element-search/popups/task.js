'use strict';

//1 показ окна при запуске

let modalMain = document.getElementById("modal_main");

let modalSuccess = document.getElementById("modal_success");

modalMain.className = "modal modal_active";


//2 закрытие окна разными кнопками
let closeElms = document.getElementsByClassName("modal__close");

for (let i = 0; i < closeElms.length; i++) {
  closeElms[i].onclick = function () {
    modalMain.className = "modal";
    modalSuccess.className = "modal";
  };
};


//3 открытие окна успеха
let showSuccessBtn = modalMain.querySelector(".show-success");

showSuccessBtn.onclick = function () {
  modalSuccess.className = "modal modal_active";
};
