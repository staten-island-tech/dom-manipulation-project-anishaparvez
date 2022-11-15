const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  box: document.getElementById("big-black-box"),
  points: document.querySelectorAll(".point"),
};

function backgroundAndText(background, text) {
  background.style.backgroundColor = "red";
  text.innerHTML = "This is now a big red box";
  text.style.fontsize = "40px";
}

backgroundAndText(DOMSelectors.box, DOMSelectors.text);
DOMSelectors.button.addEventListener("click", function () {
  backgroundAndText(DOMSelectors.box, DOMSelectors.text);
});
