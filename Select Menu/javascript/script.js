const wrapper = document.querySelector(".wrapper");
const selectBtn = document.querySelector(".select-btn");
const options = document.querySelector(".options");
const searchInput = document.querySelector("input");

let countries = [
  "Afghganestan",
  "Algeria",
  "Argantina",
  "Australia",
  "iran",
  "usa",
  "engalnd",
  "ghatar",
  "aragh",
  "holand",
  "swiss",
  "brzil",
];
selectBtn.addEventListener("click", () => {
  wrapper.classList.toggle("active");
});

function addCountry() {
  options.innerHTML = "";
  countries.forEach((country) => {
    let li = ` <li onclick='updatedName(this)'>${country}</li>`;
    options.insertAdjacentHTML("beforeend", li);
  });
}
addCountry();

function updatedName(selectedLi) {
  searchInput.value = "";
  addCountry();
  wrapper.classList.remove("active");
  selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInput.addEventListener("keyup", () => {
  let arr = [];
  let searchVal = searchInput.value.toLowerCase();
  arr = countries
    .filter((data) => {
      return data.toLowerCase().startsWith(searchVal);
    })
    .map((data) => `<li onclick='updatedName(this)'>${data}</li>`)
    .join("");
  options.innerHTML = arr ? arr : `<p>opps!!!: Country not found</p>`;
});
