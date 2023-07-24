import { createBalloonElement } from "./createBalloonElement.js";

const container = document.querySelector(".container");
const house = document.querySelector(".house");

house.addEventListener("click", () => {
  const balloonContainer = createBalloonElement();
  container.appendChild(balloonContainer);

  balloonContainer.addEventListener("click", function () {
    this.remove();
  });
});

for (let i = 0; i < 30; i++) {
  const balloonContainer = createBalloonElement();

  container.appendChild(balloonContainer);

  balloonContainer.addEventListener("click", function () {
    this.remove();
  });
}
