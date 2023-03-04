export const burgerBtn = document.querySelector('.burger')
export const barsIco = document.querySelector('.fa-bars')
export const xIco = document.querySelector('.fa-times')
export const nav = document.querySelector('nav ul')

export const handleNav = () => {
	nav.classList.toggle('active')
	burgerBtn.classList.toggle('active')
	barsIco.classList.toggle('hide')
	xIco.classList.toggle('hide')
}

export const navLinks = document.querySelectorAll('nav ul li a')

navLinks.forEach(link => {
	link.addEventListener('click', handleNav)
})
