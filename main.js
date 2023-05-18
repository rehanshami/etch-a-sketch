const grid = document.querySelector(".container");

// Create a webpage with a grid of square divs
function createGrid(num) {
  grid.innerHTML = ""; // Clear the existing grid

  for (let i = 0; i < num; i++) {
    for (let j=0; j < num; j++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("grid-square");
    grid.appendChild(gridSquare);
    }
  }
}

createGrid(6);