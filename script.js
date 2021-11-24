const container = document.querySelector("#container");
const resetButton = document.getElementById('reset')
const input = document.querySelector('input')
const currentSize = document.getElementById('myRange').value
const slider = document.getElementById('myRange')
const output = document.getElementById('demo')
const rainbowButton = document.getElementById('rainbow')
const blackButton = document.getElementById('black')
const git_btn = document.getElementById('git_btn')

let rainbowButtonActive = false;
let blackButtonActive = false;
let removeLinesButtonActive = false;
let resetButtonActive = false;

function createGrid(size){
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for(let i = 0;i < size*size;i++){
        const square = document.createElement('div');
        square.classList.add('divs');
        container.appendChild(square);
    }
}

output.textContent = slider.value + "x" + slider.value;
slider.oninput = function() {
  output.textContent = this.value + "x" + this.value;
  createGrid(this.value);
}

function generateRandomColor() {
  let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  return randomColor;
}

container.addEventListener('mouseover', function (e) {
  if (e.target.matches('.divs') && rainbowButtonActive === true) {
    e.target.style.backgroundColor = generateRandomColor();
  } else if (e.target.matches('.divs') && blackButtonActive === true) {
      e.target.style.backgroundColor = 'black';
  } else if (e.target.matches('.divs') && resetButtonActive == true) {
    e.target.style.backgroundColor = 'black';
  } else if (e.target.matches('.divs')) {
      e.target.classList.add('active');
  } resetButton.addEventListener("click", () => {
      e.target.style.backgroundColor = "white";
      resetButtonActive = true;
    });
});

blackButton.addEventListener("click", () => {
  blackButtonActive = true;
  rainbowButtonActive = false;
});

rainbowButton.addEventListener("click", () => {
  rainbowButtonActive = true;
  blackButtonActive = false;
});

createGrid(currentSize);

git_btn.addEventListener('click', () => {
	window.open('https://github.com/Jonthejon10')
})