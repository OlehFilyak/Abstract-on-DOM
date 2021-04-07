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

console.log(newImage);

// Additing
