const posts = require("./modules/posts");


const root = document.querySelector("#root");
const input = document.querySelector("#root input");
const text = document.querySelector("#root textarea");


posts(document.querySelector(".posts"), input.value, text.value);

root.addEventListener("submit", (e) => {
   e.preventDefault();
})