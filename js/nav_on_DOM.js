// Navigation By DOM

const ul = document.querySelector("ul");
// console.log(ul);

const btnAdd = document.querySelector(".add");
// console.log(buttonAdd);

const parentbtnAdd = btnAdd.parentNode;
// console.log(parent);

const childrenUl = ul.children;
// console.log(childrenUl);

const lastChildUl = ul.lastElementChild;
// console.log(lastChildUl);

const firstChildUl = ul.firstElementChild;
// console.log(firstChildUl);

const nextSiblingLiBtnAdd = parentbtnAdd.nextElementSibling;
// console.log(nextSiblingLiBtnAdd);

// querySelector and querySelectorAll

const removeBtn = document.querySelector(".remove");
// console.log(removeBtn);

const allChildrenUl = document.querySelectorAll("li");
// console.log(allChildrenUl);
