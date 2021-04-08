const btnAdd = document.querySelector(".add");
// console.log(btnAdd);

// textContent;
btnAdd.textContent = "New Btn";

// style;
btnAdd.style.backgroundColor = "teal";

// classList
const btnAddClassList = btnAdd.classList;
// console.log(btnAddClassList);

btnAdd.classList.add("new_class", "some_class", "second_new_class");
btnAdd.classList.remove("new_class");
btnAdd.classList.replace("add", "add_new");
btnAdd.classList.toggle("add");
btnAdd.classList.toggle("add");

btnAdd.classList.item(0); // повертає клас по індексу
// console.log(btnAdd.classList.item(0));
// console.log(btnAdd.classList.contains("add")); // повертає чи містить даний клас
// console.log(btnAdd.classList.length); //розмір псевдомасиву

// hasAttribute, getAttribute, setAttribute, removeAttribute, attributes
// console.log(btnAdd.hasAttribute("id")); //true
// console.log(btnAdd.getAttribute("id")); //add
btnAdd.setAttribute("type", "button"); // add type='button'
btnAdd.removeAttribute("id"); // remove id
// console.log(btnAdd.attributes); //NamedNodeMap {0: class, 1: name, 2: style, class: class, name: name, style: style, length: 3}

// dataAttributes for meta-information
// console.log(btnAdd.dataset.indexNumber); //777
// console.log(btnAdd.dataset.author); //Oleh
