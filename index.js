const DOMSelectors = {
  submitForm: document.querySelector("form"),
  text: document.querySelector("#text"),
  box: document.getElementById("song"),
  Album: document.getElementById("title"),
  Singer: document.getElementById("singer"),
  GetRid: document.getElementById("Remove"),
  input: document.querySelector("text"),
  displaySection: document.getElementById("display"),
};

function clearfields() {
  DOMSelectors.Album.value = "Mind Of Mine";
  DOMSelectors.Singer.value = "Zayn";
  DOMSelectors.url.value =
    "https://www.google.com/search?q=mind+of+mine&rlz=1C1GCEU_enUS1022US1022&tbm=isch&source=lnms&sa=X&ved=2ahUKEwjhgK2h67X7AhUgEVkFHeqcDzcQ_AUoAnoECAoQBA&biw=1920&bih=969&dpr=1#imgrc=20e0e99YCba40M";
}
DOMSelectors.submitForm.addEventListener("submit", function (event) {
  let Singer = DOMSelectors.Singer.value;
  let Artist = DOMSelectors.Artist.value;
  let URL = DOMSelectors.URL.value;

  event.preventDefault();

  DOMSelectors.displaySection.insertAdjacentHTML(
    "beforeend",
    <div class="display-card">
      <h2 class="display-singer">{singer}</h2>
      <h3 class="display-album">{Album}</h3>
      <img class="display-img" src="${URL}" />
      <button class="remove-btn">Remove Album</button>
    </div>
  );
  clearfields();
});

/* DOMSelectors.submit.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  DOMSelectors.box.insertAdjacentHTML("beforeend", `<p>${input}</p>`);
  DOMSelectors.input.value = "";
}); */

/* DOMSelectors.submit.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(event);
});
 */

/* function backgroundAndText(background, text) {
  background.style.backgroundColor = "blue";
  text.textContent = "This is now a blue background";
} */

/* DOMSelectors.button.addEventListener("click", function () {
  backgroundAndText(DOMSelectors.box, DOMSelectors.text);
}); */

/* const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  box: document.getElementById("song"),
  input: document.querySelector(`btn`),
}; */
