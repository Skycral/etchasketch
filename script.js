const container = document.querySelector(".container");
const button = document.querySelector("button");

let grid = 16;

function createBoxes(number) {
  for (let i = 0; i < grid * grid; i++) {
    const div = document.createElement("div");
    div.setAttribute("class", "box");
    container.appendChild(div);
  }
}









