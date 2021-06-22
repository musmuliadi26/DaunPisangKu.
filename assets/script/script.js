const mainMenu = document.querySelector(".mainMenu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");
const listMainMenu = document.querySelectorAll("li");


openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
listMainMenu[0].addEventListener('click', close);
listMainMenu[1].addEventListener('click', close);
listMainMenu[2].addEventListener('click', close);
listMainMenu[3].addEventListener('click', close);

function show() {
	mainMenu.style.display = 'flex';
	mainMenu.style.top = '0';
}

function close() {
	mainMenu.style.top = '-100%';
}