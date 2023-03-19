// All About Navbar
const menuIcon = document.querySelector('#menuIcon');
const outside = document.querySelector('#outside');
const navbar = document.querySelector('header .container .navbar');
outside.addEventListener('click', () => {
	navbar.classList.toggle('on');
	outside.classList.toggle('on');
});
menuIcon.addEventListener('click', () => {
	navbar.classList.toggle('on');
	outside.classList.toggle('on');
});
window.onscroll = () => {
	navbar.classList.remove('on');
	outside.classList.remove('on');
}

// Header Adding Some Styles...
const header = document.querySelector('#page-header');
window.addEventListener('scroll', () => {
	if(window.scrollY > 0) {
		header.classList.add('on');
	} else {
		header.classList.remove('on');
	};
});


// Auto Slider...
let slider = document.querySelector('.partners .slider');
let slides = document.querySelectorAll('.partners .slider .slide');
let sliderWidth = slider.offsetWidth;
let slideWidth = slides[0].offsetWidth;
let widthMovement = -(sliderWidth / 2) - slideWidth;

function moveSlide() {
	widthMovement = widthMovement >= sliderWidth / 2 ? -sliderWidth / 2 : widthMovement;
	slides.forEach(slide => {
		slide.style.transform = 'translateX('+widthMovement+'px)'
	});
	widthMovement += slideWidth;
};
setInterval(() => {
	slideWidth = slides[0].offsetWidth;
	sliderWidth = slider.offsetWidth;
	moveSlide();
}, 3000)

