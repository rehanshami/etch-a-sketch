const num = 16;
const container = document.querySelector(".container");

      function makeGrid(num) {
        container.style.setProperty('--num', num);
        for (i = 0; i < num; i++) {
          for (j = 0; j < num; j++) {
            const row = document.createElement("div");
            row.classList.add("grid-square")
            container.appendChild(row);
          }
        }
        addHoverListener();
      }
      makeGrid(num);

// Setting up hover effect, so that grid divs change color when your mouse passes over them
// Leaving a pixelated trail through your grid like a pen
// Hovering is mouse enters a div amd when it leaves it
// adding class to the div

// Function to listen for hovers over div squares
function addHoverListener () {
  const divs = document.querySelectorAll(".grid-square");
  divs.forEach((div) => {
      div.addEventListener("mouseover", changeColor);
    });
}

    
    function changeColor() {
        this.classList.add("grid-color-change");
    }
    
    function revertColor() {
        this.classList.remove("grid-color-change");
    }


// Add a button to the top of the screen that will send the user a popup asking for the number of squares 
// per side for the new grid.    
const gridSize = document.querySelector("#size");
gridSize.addEventListener("click", promptGridSize);

function promptGridSize() {
  let gridSquares = prompt("Please enter a grid size between 2 and 200", "16");
  // Validate grid input is between 2 and 100
  if (gridSquares < 2 || gridSquares > 100) {
    let gridSquares = prompt("Please enter a grid size between 2 and 200", "16");
  }

  // Now let's run the grid function to create a new grid of gridSquares by gridSquares
  clearGrid ();
  makeGrid(gridSquares);
}

// Function to clear grid
function clearGrid () {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

// Once entered, the existing grid should be removed and a new grid should be 
// generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad. 
// Research button tags in HTML and how you can make a JavaScript function run when one is clicked.
// Also check out prompts.
// You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total 
// amount of pixels used.