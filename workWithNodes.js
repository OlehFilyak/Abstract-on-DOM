// Creating
const heading = document.createElement("h1"); //create
// console.log(heading);//<h1></h1>

heading.textContent = "Some buttons";
// console.log(heading); //<h1>Some buttons</h1>;

const newImage = document.createElement("img");
newImage.setAttribute(
  "src",
  "https://www.sciencemag.org/sites/default/files/styles/article_main_image_-_1280w__no_aspect_/public/dogs_1280p_0.jpg?itok=6jQzdNB8"
);
newImage.setAttribute("alt", "dogs");

// console.log(newImage);

// Additing
const Ul = document.querySelector("ul");
// console.log(Ul); //<ul>
//     <li><button class="add_new some_class second_new_class" name="add" data-index-number="777" data-author="Oleh" type="button" style="background-color: teal;">New Btn</button></li>
//     <li><button class="remove" id="remove" type="button" name="remove">Удалить</button></li>
//     <li><button class="clear" id="clear" type="button" name="clear" disabled="">Очистить</button></li>
// </ul>

// Ul.before(heading);
// console.log(document);
// Ul.replaceWith(newImage);
// Ul.after(newImage);

const anyBtn = document.createElement("li");
anyBtn.innerHTML =
  '<button type = "button" name="any_button">any Button</button>';
Ul.appendChild(anyBtn); //additing to the end

// Remove
const btnClear = document.querySelector(".clear");
// btnClear.remove();

const firstLi = document.querySelector("li");
// Ul.removeChild(firstLi);

// Cloning
const cloneUl = Ul.cloneNode(true);
Ul.after(cloneUl);
