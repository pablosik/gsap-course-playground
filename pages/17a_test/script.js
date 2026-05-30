import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to('.box1', {
	x: 500,
	rotate: 360,
	duration: 3,
	ease: 'power2.out',
	scrollTrigger: {
		trigger: '.box',
		start: 'center bottom',
		markers: true
	}
});

gsap.to('.box2', {
	x: 500,
	rotate: 360,
	duration: 3,
	ease: 'power2.out',
	scrollTrigger: {
		trigger: '.box2',
		start: 'top center',
		markers: true,
		scrub: 1.5, // This is the magic!
	},
})

