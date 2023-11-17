const body = document.querySelector("body");

const LightModeBtn = document.querySelector("#light-mode-btn");

LightModeBtn.addEventListener("click", function () {
  body.style.backgroundColor = "white";
  body.style.color = "black";
});

const DarkModeBtn = document.querySelector("#dark-mode-btn");

DarkModeBtn.addEventListener("click", function () {
  body.style.backgroundColor = "black";
  body.style.color = "white";
});
