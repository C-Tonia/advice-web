const btnEl = document.querySelector(".btn");
const textEl = document.querySelector(".text");
const idEl = document.querySelector(".advice-id");
const dividerEl = document.querySelector(".divider");
// console.log(btnEl, textEl, idEl);
let data;
const getAdvice = async function () {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    if (!response.ok) throw new Error("Error in getting the advice");

    const { slip: data } = await response.json();
    textEl.textContent = data.advice;
    idEl.textContent = `#${data.id}`;
  } catch (error) {
    console.error(`${error}`);
  }
};
btnEl.addEventListener("click", getAdvice);

document.addEventListener("DOMContentLoaded", function () {
  console.log(screen.width);
  screen.width <= 500
    ? (dividerEl.src = "./images/pattern-divider-desktop.svg")
    : (dividerEl.src = "./images/pattern-divider-mobile.svg");
  getAdvice();
});
