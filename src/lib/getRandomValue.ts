export function getRandomWord(min = 6, max = 9) {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  // return a string of min-max length
  return letters
    .split("")
    .sort(() => Math.random() - 0.5)
    .slice(min, Math.ceil(Math.random() * max + max))
    .join("");
}

export function getRandomNumber(min = 40, max = 999) {
  return Math.floor(Math.random() * (max - min) + min)
    .toString()
    .padStart(3, "0");
}
