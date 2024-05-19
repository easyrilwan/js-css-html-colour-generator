const colourContainer = document.querySelector(".colour-container");
const spawnbutton = document.querySelector("#spawn-button");

let colourBlocks = ["", "", "", ""];

function getRandomNumber() {
  return Math.floor(Math.random() * 255);
}

function spawn() {
  colourContainer.innerHTML = "";

  const commonColour = getRandomNumber();

  colourBlocks.forEach((_colourBlocks, index) => {
    colourBlocks[index] =
      "rgb(" +
      commonColour +
      "," +
      getRandomNumber() +
      "," +
      getRandomNumber() +
      ")";
  });

  colourBlocks.forEach((colourBlocks) => {
    const divElement = document.createElement("div");
    divElement.textContent = colourBlocks;
    divElement.style.backgroundColor = colourBlocks;
    colourContainer.append(divElement);
  });
}

spawn();
spawnbutton.addEventListener("click", spawn);
document.addEventListener("keydown", spawn);
