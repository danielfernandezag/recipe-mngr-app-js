'use strict';

window.addEventListener('load', function () {
	particlesJS.load('particles', './assets/particles.config.json', function () {
		console.log('callback - particles.js config loaded');
	});
	var login = document.getElementById('login-container');
	var main = document.getElementById('main-container');
	main.style.display = 'none';
});
