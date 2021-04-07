const btnAdd = document.querySelector(".add");
console.log(btnAdd);

// textContent;
btnAdd.textContent = "New Btn";

// style;
btnAdd.style.backgroundColor = "teal";

// classList
const hasBtnAddClass = btnAdd.classList;
console.log(hasBtnAddClass);

btnAdd.classList.add("new_class", "some_class", "second_new_class");
btnAdd.classList.remove("new_class");
btnAdd.classList.replace("add", "add_new");
btnAdd.classList.toggle("add");
btnAdd.classList.toggle("add");

btnAdd.classList.item(0); // повертає клас по індексу
// console.log(btnAdd.classList.item(0));
// console.log(btnAdd.classList.contains("add")); // повертає чи містить даний клас
// console.log(btnAdd.classList.length);
