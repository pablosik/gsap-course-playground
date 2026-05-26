import gsap from 'gsap';

gsap.to('.button', {
	x: -300,
	y: 50,
	scale: 1,
	opacity: 1,
	ease: 'power4.inOut',
	duration: 1.5
});

gsap.to('.toast', {
	x: 0,
	ease: 'power2.inOut',
	duration: 1
});

gsap.to('.card', {
	scale: 1,
	opacity: 1,
	ease: 'power2.out',
	duration: 1
});