// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu');
if (iconMenu) {
	iconMenu.addEventListener("click", function (event) {
		iconMenu.classList.toggle('active');
		menuBody.classList.toggle('show-menu');
		document.body.classList.toggle('lock');
	});
}

const headers = document.querySelectorAll("[data-name='accordeon-title']");
headers.forEach(function (item) {
    item.addEventListener('click', showContent);
})
function showContent() {
    this.parentNode.classList.toggle('active');
    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');
}