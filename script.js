const container = document.querySelector(".container");
const button = document.querySelector("button");

let grid = 16;

function createBoxes(number) {
  for (let i = 0; i < number * number; i++) {
    const div = document.createElement("div");
    div.setAttribute("class", "box");
    div.style.width = `${100/number}%`;
    div.style.height = `${100/number}%`;
    container.appendChild(div);
    console.log(div.style.width, div.style.height);
  }
}

createBoxes(grid);


button.addEventListener("click", () => {
  let number = prompt("How large should the grid become?");
  if(number > 100) {
    alert("This grid is too big, please enter a smaller number.")
  } else {
    container.replaceChildren();
    console.log(number);
    createBoxes(number);
  }
})



