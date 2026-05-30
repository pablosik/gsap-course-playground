import gsap from 'gsap';

const toastOne = document.querySelector('.toast.one');
const toastTwo = document.querySelector('.toast.two');

gsap.to(toastOne, {
	bottom: 0,
	scale: 1,
	opacity: 1,
	duration: 1,
	ease: 'power4.out',
	onComplete() {
		gsap.to(toastOne, {
			bottom: -120,
			scale: 0.95,
			opacity: 0,
			duration: 0.5,
			delay: 2,
			ease: 'power.in',
			onComplete() {
				gsap.to(toastTwo, {
					bottom: 0,
					scale: 1,
					opacity: 1,
					duration: 1,
					ease: 'power2.out'
				})
			}
		})
	}
})