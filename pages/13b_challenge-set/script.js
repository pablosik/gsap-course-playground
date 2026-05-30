import gsap from 'gsap';

const box = document.querySelectorAll('.box');


gsap.set(box, {
	x: 20
});

gsap.to(box, {
	x: '100%',
	opacity: 0.5,
	ease: 'sine.inOut',
	duration: 2,
	stagger: 0.5
})