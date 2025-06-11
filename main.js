const menuToggle = document.getElementById("menu-toggle");
const sideMenu = document.getElementById("side-menu");
const closeMenu = document.getElementById("close-menu");

menuToggle.addEventListener("click", () => {
  sideMenu.classList.remove("hidden");
});

closeMenu.addEventListener("click", () => {
  sideMenu.classList.add("hidden");
});
