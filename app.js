let nextButton = document.getElementById('next')
let prevButton = document.getElementById('prev')
let carousel = document.querySelector('.carousel')
let listHTML = document.querySelector('.carousel .list')
let seeMoreButtons = document.querySelectorAll('.seeMore')
let backButton = document.getElementById('back')

let unAcceppClick
let autoSlideInterval

const showSlider = type => {
	nextButton.style.pointerEvents = 'none'
	prevButton.style.pointerEvents = 'none'

	carousel.classList.remove('next', 'prev')
	let items = document.querySelectorAll('.carousel .list .item')
	if (type === 'next') {
		listHTML.appendChild(items[0])
		carousel.classList.add('next')
	} else {
		listHTML.prepend(items[items.length - 1])
		carousel.classList.add('prev')
	}
	clearTimeout(unAcceppClick)
	unAcceppClick = setTimeout(() => {
		nextButton.style.pointerEvents = 'auto'
		prevButton.style.pointerEvents = 'auto'
	}, 2000)

	resetAutoSlide()
}

const startAutoSlide = () => {
	autoSlideInterval = setInterval(() => {
		showSlider('next')
	}, 3500)
}

const resetAutoSlide = () => {
	clearInterval(autoSlideInterval)
	startAutoSlide()
}

nextButton.onclick = function () {
	showSlider('next')
}
prevButton.onclick = function () {
	showSlider('prev')
}

startAutoSlide()
// seeMoreButtons.forEach(button => {
// 	button.onclick = function () {
// 		carousel.classList.remove('next', 'prev')
// 		carousel.classList.add('showDetail')
// 	}
// })
// backButton.onclick = function () {
// 	carousel.classList.remove('showDetail')
// }

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

// rightBtn.addEventListener('click', handleRightBtn)
// leftBtn.addEventListener('click', handleLeftBtn)

window.addEventListener('resize', function () {
	carouselWidth = sliderBox.offsetWidth
	changeImage()
})

window.onload = function () {
	carouselWidth = sliderBox.offsetWidth
	changeImage()
}

const card = document.querySelectorAll('.cardy')

function showCard() {
	card.forEach(card => {
		card.classList.remove('activey')
		this.classList.add('activey')
	})
}
card.forEach(card => card.addEventListener('click', showCard))



// -----------timeline
document.addEventListener('scroll', function() {
	const components = document.querySelectorAll('.timeline__component');
	components.forEach(function(component) {
		const position = component.getBoundingClientRect().top;
		const screenPosition = window.innerHeight / 1.2;

		if(position < screenPosition) {
			component.classList.add('timeline__component--visible');
		}
	});
});