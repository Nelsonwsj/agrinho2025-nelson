// Seleciona os elementos
const menuToggle = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('side-menu');
const closeMenu = document.getElementById('close-menu');

// Abre o menu ao clicar no botão ☰
menuToggle.addEventListener('click', () => {
  sideMenu.classList.remove('hidden');
});

// Fecha o menu ao clicar no botão ×
closeMenu.addEventListener('click', () => {
  sideMenu.classList.add('hidden');
});
