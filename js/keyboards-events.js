const refs = {
  output: document.querySelector(".js-output"), // Посилання на абзац
  clearBtn: document.querySelector(".js-clear"), // Посилання на кнопку очистки
};

window.addEventListener("keypress", onKeypress); // Вішаємо на все вікно слухача події нажаття клавіатури
refs.clearBtn.addEventListener("click", onClearOutput); // Кнопка очистки очищає весь абзац, що нижче

function onKeypress(event) {
  // console.log('event.key: ', event.key);   // Показує значення клавіші, яку нажали
  // console.log('event.code: ', event.code); // Показує фізично нажату клавішу

  refs.output.textContent += event.key; // Додаємо в абзац будь-яке нажимання клавіатури
}

function onClearOutput() {
  refs.output.textContent = ""; // Посилання на контент абзацу
}
