import gsap from 'gsap';

const box = document.querySelector('.box');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');

gsap.to(box, {
	y: 300,
	duration: 1,
	ease: 'bounce.out(1.7)'
});

gsap.to(box2, {
	y: 300,
	duration: 1,
	ease: 'bounce.in(1.7)',
	delay: 1
});

gsap.to(box3, {
	y: 300,
	duration: 1,
	ease: 'bounce.inOut(1.7)',
	delay: 2
});