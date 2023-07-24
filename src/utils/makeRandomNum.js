export function makeRandomNum(min, max) {
  if (min >= max) {
    throw new Error("Min value must be less than Max value.");
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
