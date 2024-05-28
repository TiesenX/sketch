const container = document.querySelector(".container");
const button = document.querySelector("button");
const compStyles = window.getComputedStyle(container)
const WIDTH = parseInt(compStyles.getPropertyValue("width"), 10);
const HEIGHT = parseInt(compStyles.getPropertyValue("height"), 10);
let SIZE = 24;

console.log(WIDTH)
console.log(HEIGHT)
console.log(SIZE)

// container.style = "display: flex; flex-wrap: wrap; justify-content: center; align-items: center;"
// container.style.aspectRatio = "1/1";
function getRandomRGB() {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
  return `rgb(${r},${g},${b})`;
}
function createGrid(nBox){
  let boxSize = WIDTH / nBox; 
  for (let i = 0; i<nBox; i++){
    for (let j = 0; j<nBox; j++){
      let box = document.createElement("div")
      box.style = "border: 0.5px solid black; ";
      box.style.width = `${boxSize}px`;
      box.style.height = `${boxSize}px`;
      box.style.boxSizing = "border-box";
      // box.classList.add("grid");
      box.addEventListener("mouseover", e => {
        // console.log(box.style.background);
        if (box.style.getPropertyValue('background') === '') {
          box.style.background = getRandomRGB();
          console.log(box.style.background);
        }
        
        console.log("Clicked")
      });
      // box.style.flex = "0 1 auto";
      container.appendChild(box);
    }
  }
}

createGrid(SIZE);

button.addEventListener("click", e => {
  let size = prompt("Enter number of squares: ");
  container.textContent = '';
  createGrid(size);
});



