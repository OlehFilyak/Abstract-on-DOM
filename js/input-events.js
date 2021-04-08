const refs = {
  //Об'єкт в якому будемо зберігати всі потрібні посилання,
  // Мінуси в тому, що є ref., а плюси, що ми легше читаємо
  input: document.querySelector(".js-input"),
  nameLabel: document.querySelector(".js-button > span"),
  licenseCheckbox: document.querySelector(".js-license"),
  btn: document.querySelector(".js-button"),
};

// refs.input.addEventListener('focus', onInputFocus); // Коли концентруємося
// refs.input.addEventListener('blur', onInputBlur); // Коли втрачаємо фокус
// refs.input.addEventListener('change', onInputChange); // Воно відбувається при втраті фокусу, воно трішки не корсисно.
//Треба просто знати, що воно є. Ми будемо його в інших випадках застосовувати.
// refs.input.addEventListener('input', onInputChange); // Ця подія відбувається, коли змінується значення в середині інпута
refs.input.addEventListener("input", onInputChange); // Йдемо прослуховувати події на інпут
refs.licenseCheckbox.addEventListener("change", onLicenseChange); // Змінив текст іншого елементу цією зміною

function onInputFocus() {
  console.log("Инпут получил фокус - событие focus");
}

function onInputBlur() {
  console.log("Инпут потерял фокус - событие blur");
}

function onInputChange(event) {
  refs.nameLabel.textContent = event.currentTarget.value;
}

function onLicenseChange(event) {
  //Використовуємо подію зміни. Це спрацьовує при зміні їх стану. Для звичайних текстових полів використовується input.
  refs.btn.disabled = !event.currentTarget.checked; // Кнопка виключена, коли елемент не вибраний.
}
