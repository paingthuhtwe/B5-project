const day = document.querySelector("#dayTheme");
const night = document.querySelector("#nightTheme");
const mainTheme = document.querySelector("#mainTheme");
const btnTheme = document.querySelector("#btnTheme");
const dropdownTheme = document.querySelector("#dropdownTheme");
const body = document.querySelector("html");
day.onclick = dayTheme;
night.onclick = nightTheme;

function dayTheme() {
  localStorage.setItem("theme", "light");
  themeControl();
}
function nightTheme() {
  localStorage.setItem("theme", "dark");
  themeControl();
}

function themeControl() {
  let theme = localStorage.getItem("theme");
  if (theme) {
    if (theme == "light") {
      btnTheme.classList.remove("btn-dark");
      btnTheme.classList.add("btn-light");
      dropdownTheme.classList.remove("dropdown-menu-dark");
      night.classList.remove("active");
      day.classList.add("active");
      mainTheme.classList.remove("fa-moon");
      mainTheme.classList.add("fa-sun");
    } else if (theme == "dark") {
      btnTheme.classList.remove("btn-light");
      btnTheme.classList.add("btn-dark");
      dropdownTheme.classList.add("dropdown-menu-dark");
      day.classList.remove("active");
      night.classList.add("active");
      mainTheme.classList.remove("fa-sun");
      mainTheme.classList.add("fa-moon");
    }
  }
}
themeControl();
