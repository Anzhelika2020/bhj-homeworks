"use strict";

document.querySelector(".chat-widget").onclick = function () {
  this.classList.add("chat-widget_active");
};

const messagesRobot = [
  "К сожалению, все операторы заняты. Напишите нам позже", 
  "Нам некогда с Вами разговаривать. Напишите нам позже", 
  "Представьтесь, пожалуйста", 
  "До свидания!",
  "Вы еще не купили ни одного товара, чтобы так с нами разговаривать", 
  "Мы ничего Вам не предоставим"
];

const chatWidgetInput = document.getElementById("chat-widget__input");

const messages = document.querySelector( '.chat-widget__messages' );

let random;

chatWidgetInput.onkeydown = function (e) {
  if (e.key === "Enter") {
    if (chatWidgetInput.value) {
      messages.innerHTML += `
        <div class="message message_client">
          <div class="message__time">
          ${getDayTime()}
          </div>
          <div class="message__text">
          ${chatWidgetInput.value}
          </div>
        </div>
      `;

      chatWidgetInput.value = "";

      random = messagesRobot[Math.floor(Math.random() * messagesRobot.length)];

      messages.innerHTML += `
        <div class="message">
          <div class="message__time">
          ${getDayTime()}
          </div>
          <div class="message__text">
          ${random}
          </div>
        </div>
      `;

      // скролл чтобы всегда было видно последнее сообщение:
      messages.scrollIntoView(false);
    };
  };
};

function getDayTime () {
  let now = new Date();

  let formatted = data => {return data < 10 ? "0" + data : data};

  let date = `${formatted(now.getDate())}.${(formatted(now.getMonth() + 1))}.${now.getFullYear()}`;

  let time = `${formatted(now.getHours())}:${formatted(now.getMinutes())}`;

  let timeDate = (`${time} ${date}`);

  return timeDate;
};