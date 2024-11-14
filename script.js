const container = document.querySelector(".container");
const button = document.querySelector("button");

let number = 16;

function createBoxes(number) {
  for (let i = 0; i < number * number; i++) {
    const div = document.createElement("div");
    div.setAttribute("class", "box");
    div.style.width = `${100/number}%`;
    div.style.height = `${100/number}%`;
    container.appendChild(div);
  }
}

createBoxes(number);

button.addEventListener("click", () => {
  let number = prompt("How large should the grid become?");
  if(number > 100) {
    alert("This grid is too big, please enter a smaller number.")
  } else {
    container.replaceChildren();
    createBoxes(number);
    changeColor();
  }
})

// create randomize for background color on boxes
function randomColor() {
  return Math.floor(Math.random()*16777215).toString(16);
}


// fill boxes with random color when hover over them

const boxes = container.getElementsByTagName("div");
boxes[0].style.backgroundColor = `#${randomColor()}`;

console.log(boxes.length);


function changeColor() {

  for (let i = 0; i < boxes.length; i++) {
    let opa = 0;

    boxes[i].addEventListener("mouseover", () => {
      opa += 0.1;
      boxes[i].style.backgroundColor = `#${randomColor()}`;
      boxes[i].style.opacity = opa;
    });
  }
}

changeColor();




