const hamburger = document.querySelector('.hamburger'),
	menu = document.querySelector('.menu'),
	closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
	menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
	menu.classList.remove('active');
});

const counter = document.querySelectorAll('.skills__ratings-counter'),
	lines = document.querySelectorAll('.skills__ratings-line span');

counter.forEach((item, i) => {
	lines[i].style.width = item.innerHTML;
});

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
	anchor.addEventListener("click", function (event) {
		event.preventDefault();
		const blockId = anchor.getAttribute('href')
		document.querySelector('' + blockId).scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	});
}