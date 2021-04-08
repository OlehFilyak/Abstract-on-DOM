const form = document.querySelector(".js-register-form"); // Вибрав поcилання на форму. // Блок вибірки елементів

form.addEventListener("submit", onFormSubmit); // Не ставимо клік, а форма реагує на відправку форми. // Блок підписок

function onFormSubmit(event) {
  // Блок вибірки обробників
  event.preventDefault(); // Метод, що відмінає дії браузера за замовчуванням, тобто в цьому випадку перезагрузку стрінки.
  // const formElements = event.currentTarget.elements; //Elements є тільки у форм, застосовується, щоб попрацювати з конкретним параметром форми, а не для того, щоб зібрати її дані
  // // console.dir(formElements); // В elements зберігається дані, що людина вводила в формі. Отримати посилання на email, пароль, посилання на радіо-баттони.
  // const mail = formElements.email.value;
  // const password = formElements.password.value;
  // const subscription = formElements.subscription.value;
  // console.log(mail);
  // console.log(password);
  // console.log(subscription);

  const formData = new FormData(event.currentTarget); // зробили нову форм дату. Передаємо посилання на сам DOM елемент
  // console.log(formData);
  formData.forEach((value, name) => {
    // Показує, що в ній є // Elements зберігає всі дані форми - це посилання на елементи, а не їх значення. Для того, щоб в середині форми звернутися до елементі, попрацювати з ними.
    console.log("onFormSubmit -> name", name); // Elements не для того, щоб збирати дані з форми. У властивості value можемо побачити власне дані форми.
    console.log("onFormSubmit -> value", value); // Для того, щоб зібрати всі дані з форми, то використовуємо Formdata. Вона збирає всі елементи з форми.
  }); // Проходиться по формі, збирає все в об'єкт з назваю та значенням. ЦЕ НАЙКРАЩИЙ ПОМІЧНИК ПРИ ЗБОРІ ФОРМИ.
}

// Ми завжди хочемо збирати і ім'я, і значення. Імена є обов'язкові.
