window.addEventListener('load', () => {
	particlesJS.load('particles', './assets/particles.config.json', function() {
		console.log('callback - particles.js config loaded');
	});
	const login = document.getElementById('login-container');
	const main = document.getElementById('main-container');
	main.style.display = 'none';
});
