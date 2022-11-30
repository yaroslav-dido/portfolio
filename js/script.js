const hamburger = document.querySelector('.hamburger'),
		menu = document.querySelector('.menu'),
		overlay = document.querySelector('.menu__overlay'),
		close = document.querySelector('.menu__block-close');
		

hamburger.addEventListener('click', () => {
	menu.classList.add('active');
});

close.addEventListener('click', () => {
	menu.classList.remove('active');
});

overlay.addEventListener('click', () => {
	menu.classList.remove('active');
});


const procents = document.querySelectorAll('.procents'),
		lines = document.querySelectorAll('.scales_scale div');

procents.forEach( (item, i) => {
	lines[i].style.width = item.innerHTML;
});


