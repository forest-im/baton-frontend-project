import { createBalloonElement } from "./createBalloonElement.js";

const container = document.querySelector(".container");
const house = document.querySelector(".house");

house.addEventListener("click", () => {
  const { balloonContainer, balloon } = createBalloonElement();

  container.appendChild(balloonContainer);

  balloon.addEventListener("click", function () {
    this.remove();
  });
});

for (let i = 0; i < 30; i++) {
  const { balloonContainer, balloon } = createBalloonElement();

  container.appendChild(balloonContainer);

  balloon.addEventListener("click", function () {
    this.remove();
  });
}
