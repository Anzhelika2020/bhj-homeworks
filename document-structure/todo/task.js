
"use strict";

const taskInput = document.getElementById("task__input");

const tasksAddBtn = document.getElementById("tasks__add");

const tasksList = document.getElementById("tasks__list");

//при нажатии на кнопку
tasksAddBtn.addEventListener("click", addingTask); 

//при нажатии Enter в поле ввода
taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addingTask();
  };
});

//функция добавление задачи
function addingTask () {
  if(taskInput.value) {
    event.preventDefault();

    tasksList.innerHTML += `
      <div class="task">
        <div class="task__title">${taskInput.value}</div>
        <a href="#" class="task__remove">&times;</a>
      </div>
    `;

    taskInput.value = "";

    tasksList.addEventListener("click", removeTask);
  }
};

//функция удаления задачи
function removeTask (e) {
  event.preventDefault();
  e.target.closest(".task").remove();
};


