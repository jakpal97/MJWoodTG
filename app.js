// // Burger menu

const burgerBtn = document.querySelector('.burger')
const barsIco = document.querySelector('.fa-bars')
const xIco = document.querySelector('.fa-times')
const nav = document.querySelector('nav ul')

const handleNav = () => {
	nav.classList.toggle('active')
	burgerBtn.classList.toggle('active')
	barsIco.classList.toggle('hide')
	xIco.classList.toggle('hide')
}
burgerBtn.addEventListener('click', handleNav)

const navLinks = document.querySelectorAll('nav ul li a')

navLinks.forEach(link => {
	link.addEventListener('click', handleNav)
})

// ---------------------------------------------------------------------------------
// Carousel

const sliderBox = document.querySelector('.slider-box')
const leftBtn = document.querySelector('.btn-left')
const rightBtn = document.querySelector('.btn-right')
const carouselIMages = document.querySelectorAll('.slider-img')
let carouselWidth
const carouselSpeed = 5000

let index = 0

const handleCarouesl = () => {
	index++
	changeImage()
}

let startCarousel = setInterval(handleCarouesl, carouselSpeed)

const changeImage = () => {
	if (index > carouselIMages.length - 1) {
		index = 0
	} else if (index < 0) {
		index = carouselIMages.length - 1
	}

	sliderBox.style.transform = `translateX(${-index * 100}%)`
}

const handleRightBtn = () => {
	index++
	resetInterwal()
}
const handleLeftBtn = () => {
	index--
	resetInterwal()
}

const resetInterwal = () => {
	changeImage()
	clearInterval(startCarousel)
	startCarousel = setInterval(handleCarouesl, carouselSpeed)
}

rightBtn.addEventListener('click', handleRightBtn)
leftBtn.addEventListener('click', handleLeftBtn)

window.addEventListener('resize', function () {
	carouselWidth = sliderBox.offsetWidth
	changeImage()
})

window.onload = function () {
	carouselWidth = sliderBox.offsetWidth
	changeImage()
}

// --------------------------------------------------
// Finger slice function

let hammer = new Hammer(sliderBox)
hammer.on('swipeleft', function () {
	let currentSlide = document.querySelector('.slider-img')

	let nextSlide = currentSlide.nextElementSibling

	if (!nextSlide) {
		nextSlide = document.querySelector('.slider-img:first-child')
	}

	currentSlide.classList.remove('active')
	nextSlide.classList.add('active')
})

hammer.on('swiperight', function () {
	let currentSlide = document.querySelector('.slider-img')

	let prevSlide = currentSlide.previousElementSibling

	if (!prevSlide) {
		prevSlide = document.querySelector('.slider-img')
	}

	currentSlide.classList.remove('active')
	prevSlide.classList.add('active')
})

const navbar = document.querySelector('.navBar')
const menu = document.querySelector('.menu')

window.onscroll = function () {
	if (window.pageYOffset >= menu.offsetTop) {
		navbar.classList.add('sticky')
	} else {
		navbar.classList.remove('sticky')
	}
}
// ------------------------------------------------------------------------------

// Carousel header
const isMobile = window.matchMedia('(max-width: 600px)').matches

if (!isMobile) {
	const header = document.querySelector('.headerInfo')
	const images = ['../images/header2-min.jpg', '../images/header3-min.jpg', '../images/stolarz-min.jpg']

	let i = 0
	setInterval(() => {
		header.style.backgroundImage = `url(images/${images[i]})`
		i = (i + 1) % images.length
	}, 5000)
}

// -----------------------------------------------

//kod do hurtowni

const card = document.querySelectorAll('.card')

function showCard() {
	card.forEach(card => {
		card.classList.remove('active')
		this.classList.add('active')
	})
}
card.forEach(card => card.addEventListener('click', showCard))
