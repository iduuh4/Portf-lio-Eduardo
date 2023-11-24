AOS.init();

const toggleButton = document.querySelector(".button-mobile");
const sidebar = document.querySelector(".sidebar");
const toggleButtonClose = document.querySelector(".button-mobile-close");
const overlay = document.querySelector(".main");

toggleButton.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  toggleButton.style.display = "none";
  toggleButtonClose.style.display = "flex";
  toggleButtonClose.style.position = "fixed";
  main.classList.add(".overlay");
});

toggleButtonClose.addEventListener("click", () => {
  sidebar.classList.remove("active");
  toggleButton.style.display = "flex";
  toggleButtonClose.style.display = "none";
});
