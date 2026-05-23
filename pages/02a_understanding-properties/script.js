import gsap from 'gsap';

gsap.to('.box', {
	opacity: 1,
	rotate: 360,
	background: '#ff6f61',
	scale: 1.25,
	ease: 'power1.inOut',
	//repeatDelay: 2,
	//repeat: -1,
	duration: 1,
	delay: 0,
	onComplete: () => {
		gsap.to('.box', {
			x: 100
		})
	}
	// yoyo: true,
	// repeat: -1,
	// repeatDelay: 2
})