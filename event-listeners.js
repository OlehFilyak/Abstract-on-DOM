const targetBtn = document.querySelector(".js-target-btn"),
  addEventListenerOnTargetBtn = document.querySelector(
    ".js-add-event-listener"
  ),
  removeEventListenerOnTargetBtn = document.querySelector(
    ".js-remove-event-listener"
  );

// console.log(targetBtn);
// console.log(addEventListenerOnTargetBtn);
// console.log(removeEventListenerOnTargetBtn);

addEventListenerOnTargetBtn.addEventListener("click", (event) => {
  console.log("Вішаємо клік по цільовій кнопці");
  targetBtn.addEventListener("click", onTargetBtnClick);
});

removeEventListenerOnTargetBtn.addEventListener("click", (event) => {
  console.log("Знімаємо клік із цільової кнопки");
  targetBtn.removeEventListener("click", onTargetBtnClick);
});

function onTargetBtnClick(event) {
  console.log("Клік по цільовій кнопці");
}
