const DOMselectors = {
  display: document.getElementById("display"),
  form: document.getElementById("form"),
  title: document.getElementById("title"),
  singer: document.getElementById("singer"),
  image: document.getElementById("image"),
  url: document.getElementById("url"),
  remove: document.getElementById("remove"),
};

DOMselectors.form.addEventListener("submit", function (event) {
  event.preventDefault();

  let album = {};
  album.singer = DOMselectors.singer.value;
  album.title = DOMselectors.title.value;
  album.url = DOMselectors.url.value;

  DOMselectors.display.insertAdjacentHTML(
    "afterend",
    `<div class= "display-card" id="display-card">
  <img class= "display-img" src= "${album.url}"/>
  <h2 class="display-singer">${album.singer}</h2>
  <h3 class= "display-album">${album.title}</h3>
  <button id = "removebtn">Remove Album</button>
  </div>`
  );

  function remove() {
    let removebtn = document.getElementById(`removebtn`);
    removebtn.addEventListener("click", function () {
      document.getElementById(`display-card`).remove();
    });
  }
  remove();

  function clearinput() {
    DOMselectors.title.value = "";
    DOMselectors.singer.value = "";
    DOMselectors.url.value = "";
  }
  clearinput();
});
