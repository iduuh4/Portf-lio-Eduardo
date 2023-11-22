const toggleButton = document.querySelector(".button-mobile");
const sidebar = document.querySelector(".sidebar");
const toggleButtonClose = document.querySelector(".button-mobile-close");

toggleButton.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  toggleButton.style.display = "none";
  toggleButtonClose.style.display = "flex";
  toggleButtonClose.style.position = "fixed";
});

toggleButtonClose.addEventListener("click", () => {
  sidebar.classList.remove("active");
  toggleButton.style.display = "flex";
  toggleButtonClose.style.display = "none";
});
