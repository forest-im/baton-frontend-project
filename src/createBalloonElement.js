import { makeRandomNum } from "./utils/makeRandomNum.js";
import {
  balloonColors,
  balloonSizes,
  balloonShapes,
} from "./data/balloonStyle.js";

export function createBalloonElement() {
  const degree = makeRandomNum(-85, 85);
  const height = makeRandomNum(13, 35);
  const color = balloonColors[makeRandomNum(0, balloonColors.length - 1)];
  const size = balloonSizes[makeRandomNum(0, balloonSizes.length - 1)];
  const shape = balloonShapes[makeRandomNum(0, balloonShapes.length - 1)];

  const balloonContainer = document.createElement("div");
  balloonContainer.classList.add("balloon-container");
  balloonContainer.style.transform = `rotate(${degree}deg)`;
  const line = document.createElement("div");
  line.classList.add("line");
  line.style.height = `${height}rem`;
  const balloon = document.createElement("div");

  const bearBalloon = `
  <div class="bear-shape ${size}-size">
    <div class="bear-inner"></div>
    <div class="bear-ear-left">
      <div class="bear-ear-left-inner"></div>
    </div>
    <div class="bear-ear-right">
      <div class="bear-ear-right-inner"></div>
    </div>
    <div class="eyes"></div>
    <div class="nose"></div>
  </div>
  `;
  const basicBalloon = `<div class="${color}-color ${size}-size ${shape}-shape"></div>`;

  if (shape === "bear") {
    balloon.innerHTML = bearBalloon;

    balloonContainer.appendChild(line);
    line.appendChild(balloon);
  }

  if (shape === "heart") {
    const outlineHeart = document.createElement("div");
    outlineHeart.classList.add("heart-outline", `${size}-size`);
    balloon.classList.add(`${shape}-shape`, `${color}-color`, `${size}-size`);
    balloon.style.width = "95%";
    balloon.style.height = "95%";

    outlineHeart.appendChild(balloon);
    line.appendChild(outlineHeart);
    balloonContainer.appendChild(line);
  }

  if (shape === "basic") {
    balloon.classList.add(`${shape}-shape`, `${color}-color`, `${size}-size`);
    const balloonReflecting = document.createElement("div");
    balloonReflecting.classList.add("balloon-reflecting");
    balloon.appendChild(balloonReflecting);

    line.appendChild(balloon);
    balloonContainer.appendChild(line);
  }

  return { balloonContainer, balloon };
}
