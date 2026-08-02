const container = document.querySelector("#container");

//paragraphe
const paragraphe = document.createElement("p");
paragraphe.textContent = "Hey I'm red!";
paragraphe.style.color = "red";

container.appendChild(paragraphe);

//h3
const title_H3 = document.createElement("h3");
title_H3.textContent = "I'm a blue h3!";
title_H3.style.color = "blue";

container.appendChild(title_H3);

//div
const div = document.createElement("div");
div.style.border = "2px solid black";
div.style.backgroundColor = "pink";

//h1
const title_H1 = document.createElement("h1");
title_H1.textContent = "I'm in a div";

div.appendChild(title_H1);

//second paragraphe
const secondParagraphe = document.createElement("p");
secondParagraphe.textContent = "ME TOO!";

div.appendChild(secondParagraphe);

container.appendChild(div);
