const dmIcon = document.querySelector(".dm-icon");
const html = document.querySelector("html");

function checkTheme() {
  let theme = localStorage.getItem("darkmode");
  if(theme === null) {
    localStorage.getItem("darkmode", "false");
  } else if(theme === "true") {
    html.classList.add("dark-mode");
    dmIcon.classList.add("text-white");
    dmIcon.src = "/assets/img/sun.png";
    dmIcon.alt = "sun";
  }
}

function renderGenresButtons(list) {
  const containerButtons = document.querySelector(".container-buttons");
  list.reverse().forEach((item) => {
    containerButtons.insertAdjacentHTML(
      "afterbegin",
      `<button class="buttons-filter">${item}</button>`
    );
  });
}

function renderInput() {
  const form = document.querySelector(".form-price");
  form.insertAdjacentHTML(
    "beforeend",
    `<input type="range" class="input-price margin-2" name="price" id="price" min="0" step="1">`
  );
  const input = document.querySelector('.input-price');
  const maxValue = products.reduce((a, b)=> {
    return Math.max(a, b.price);
  }, -Infinity);

  input.max = maxValue;
  const p = document.querySelector('.max-value');
  p.innerText = `Até R$ ${maxValue.toFixed(2)}`;
}

function renderAlbums(list) {
  const listAlbums = document.querySelector(".list-albums");
  list.forEach((item) => {
    listAlbums.insertAdjacentHTML(
      "afterbegin",
      `<li class="album margin-3">
        <div class="container-img">
          <img class="img-album" src= ${item.img} alt="Imagem do album">
        </div>
        <section class="info flex column gap-2 padding-1">
          <div class="container-info flex align-center justify-between">
            <p class= "title-4">${item.band}</p>
            <p class= "title-4">${item.year}</p>
          </div>
            <p class= "title-2-bold">${item.title}</p>
          <div class="container-buy flex align-center justify-between">
            <p class= "title-3-bold">R$ ${item.price.toFixed(2)}</p>
            <button class="button-buy title-3-grey">Comprar</button>
          </div>
        </section>
      </li>`
    );
  });
}

function eventFilterBtn() {
  const filterBtn = document.querySelectorAll(".buttons-filter");
  const mainList = document.querySelector(".list-albums");
  filterBtn.forEach((button) => {
    button.addEventListener("click", () => {
      mainList.innerHTML = "";
      const filter = button.innerText;
      if (filter === "Todos") {
        renderAlbums(products);
      }
      const filteredList = filterAlbum(filter);
      renderAlbums(filteredList);
    });
  });
}

function filterAlbum(string) {
  const filteredAlbums = products.filter((item) => item.category === string);
  return filteredAlbums;
}

function eventFilterInput() {
  const input = document.querySelector(".input-price");
  const mainList = document.querySelector(".list-albums");
  input.addEventListener("change", () => {
    mainList.innerHTML = "";
    let value = event.target.value;
    const filteredAlbums = products.filter((item) => item.price <= value);
    renderAlbums(filteredAlbums);
  });
}


renderGenresButtons(categories);
eventFilterBtn();
renderInput();
renderAlbums(products);
eventFilterInput();
checkTheme();