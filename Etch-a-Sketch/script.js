const container = document.getElementById("container");
const dimensionButton = document.getElementById("btn-dimension");

// Clears the container and draws a new grid
function createGrid(squaresPerSide) {
  container.innerHTML = "";

  const totalSquares = squaresPerSide * squaresPerSide;
  const percentageSize = 100 / squaresPerSide;

  for (let i = 0; i < totalSquares; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("square");

    // Exact sizing using Flexbox
    newDiv.style.flexBasis = `${percentageSize}%`;
    newDiv.style.maxWidth = `${percentageSize}%`;
    newDiv.style.height = `${percentageSize}%`;

    // Store a random hue (0-360) for this square's rainbow color
    const randomHue = Math.floor(Math.random() * 361);
    newDiv.dataset.hue = randomHue.toString();

    // Start with high lightness (90% = very light color)
    newDiv.dataset.lightness = "90";

    // Paint the square as the cursor passes over it
    newDiv.addEventListener("mouseover", () => {
      let currentLightness = parseInt(newDiv.dataset.lightness);

      // If it can still get darker, subtract 10 (10% less light)
      if (currentLightness > 0) {
        currentLightness -= 10;
        newDiv.dataset.lightness = currentLightness.toString();
      }

      // Apply the color using HSL (Hue, 100% Saturation, variable Lightness)
      // This only changes the background, keeping the CSS border intact
      newDiv.style.backgroundColor = `hsl(${newDiv.dataset.hue}, 100%, ${currentLightness}%)`;
    });

    container.appendChild(newDiv);
  }
}

// Listen for the button click to launch the prompt
dimensionButton.addEventListener("click", () => {
  let input = prompt(
    "Enter the number of squares per side (Maximum 100):",
  );
  let number = parseInt(input);

  if (isNaN(number) || number < 1 || number > 100) {
    alert("Please enter a valid number between 1 and 100.");
  } else {
    createGrid(number);
  }
});

// Initialize the grid with a default 16x16 size
createGrid(16);
