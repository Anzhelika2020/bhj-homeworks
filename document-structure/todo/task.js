
"use strict";

const taskInput = document.getElementById("task__input");

const tasksAddBtn = document.getElementById("tasks__add");

const tasksList = document.getElementById("tasks__list");

//при нажатии на кнопку Добавить
tasksAddBtn.addEventListener("click", addingTask); 

//при нажатии Enter в поле ввода
taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addingTask(e);
  };
});

//функция добавление задачи (Вариант 1)
function addingTask (event) {
  event.preventDefault();

  if(taskInput.value) {
    let task = document.createElement("div");

    tasksList.appendChild(task);

    task.outerHTML = `
    <div class="task">
      <div class="task__title">${taskInput.value}</div>
      <a href="#" class="task__remove">&times;</a>
    </div>
    `;
    
    taskInput.value = "";

    //с рабочей кнопкой удаления
    let taskRemoveElm = tasksList.lastElementChild.querySelector(".task__remove");

    taskRemoveElm.onclick = () => taskRemoveElm.closest(".task").remove();
  };
};


//функция добавление задачи (Вариант 2)
/*
function addingTask (event) {
  event.preventDefault();

  if(taskInput.value) {
    tasksList.innerHTML += `
      <div class="task">
        <div class="task__title">${taskInput.value}</div>
        <a href="#" class="task__remove">&times;</a>
      </div>
    `;

    taskInput.value = "";
  };
};

//удаление задачи
tasksList.addEventListener("click", removeTask);

function removeTask (e) {
  if(e.target.className === "task__remove") {
    e.target.closest(".task").remove();
  };
};

*/

