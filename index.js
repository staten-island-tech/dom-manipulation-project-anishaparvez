const DOMSelectors = {
  submitForm: document.querySelector("#form"),
  text: document.querySelector("#text"),
  URL: document.querySelector("link"),
  box: document.getElementById("song"),
  Album: document.getElementById("title"),
  artist: document.querySelector("#artist"),
  GetRid: document.getElementById("Remove"),
  input: document.querySelector("text"),
  displaySection: document.getElementById("display"),
  removebtn: document.querySelectorAll(".remove-btn"),
};

// /* function clearfields() {
//   DOMSelectors.Album.value = "Mind Of Mine";
//   DOMSelectors.Singer.value = "Zayn";
//   DOMSelectors.url.value =
//     "https://www.google.com/search?q=mind+of+mine&rlz=1C1GCEU_enUS1022US1022&tbm=isch&source=lnms&sa=X&ved=2ahUKEwjhgK2h67X7AhUgEVkFHeqcDzcQ_AUoAnoECAoQBA&biw=1920&bih=969&dpr=1#imgrc=20e0e99YCba40M"; */
// }
DOMSelectors.submitForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let Album = DOMSelectors.Album.value;
  let artist = DOMSelectors.artist.value;
  let URL = DOMSelectors.URL.value;
});
let removebtn = document.querySelectorAll(".remove-btn");
const removeButton = document.querySelector(".remove");
  removeButton.addEventListener("click", (Album)) => {
    if (Album.target.tagName === "BUTTON")} {
      const button = Album.target;
      const card = button.parentNode;
      const display = card.parentNode;
      if (button.textContent === "Remove Album") {
        display.removeChild(card);
      }
    }
