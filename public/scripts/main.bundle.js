'use strict';

var _firebase = require('./firebase');

var sessionUser = null;
(function main() {
	// CONNECT FIREBASE
	var app = firebase.initializeApp(_firebase.config);
	// FETCH DATA FIREBASE
	var allRecipes = app.database().ref().child('RECIPES');
	console.log(allRecipes);
	//COMPONENTS
	var loginPage = document.querySelector('#login-container');
	// const mainPage = document.querySelector('#main-container');
	var googleLoginBtn = document.querySelector('#login-google');
	var emailLoginBtn = document.querySelector('#login-button');
	var logoutBtn = document.querySelector('#logout-btn');
	var logoutModal = document.querySelector('#modal-logout');
	var closeLogout = document.querySelector('#close-logout-modal');
	var addActionBtn = document.querySelector('#add-action-btn');
	var addActionModal = document.querySelector('#modal-add-recipe');
	var closeAddAction = document.querySelector('#close-add-modal');
	//EVENTS
	window.addEventListener('load', function () {
		particlesJS.load('particles', './assets/particles.config.json');
		loginPage.style.display = 'none';
	});
	window.addEventListener('click', function (e) {
		switch (e.target) {
			case addActionModal:
				addActionModal.style.display = 'none';
				break;
			case logoutModal:
				logoutModal.style.display = 'none';
				break;
		}
	});
	logoutBtn.addEventListener('click', function () {
		logoutModal.style.display = 'block';
	});
	closeLogout.addEventListener('click', function () {
		logoutModal.style.display = 'none';
	});
	addActionBtn.addEventListener('click', function () {
		addActionModal.style.display = 'block';
	});
	closeAddAction.addEventListener('click', function () {
		addActionModal.style.display = 'none';
	});

	//

	googleLoginBtn.addEventListener('click', setSessionUser);

	emailLoginBtn.addEventListener('click', function () {
		console.log(sessionUser);
	});
})();

function setSessionUser() {
	(0, _firebase.googleLogin)();
	sessionUser = JSON.parse(sessionStorage.getItem('user'));
	console.log(sessionUser);
}

// const recipe = new Recipe(1, 'receta1', [], 'description', 'instructions');
// console.log(recipe.getInfo());
// recipe.addIngredient('sugar', 3, 'kg', 10);
// recipe.addIngredient('oil', 4, 'lt', 100);
// recipe.addIngredient('gold', 5, 'gm', 1000);
// recipe.addIngredient('plutonium', 6, 'ml', 10000);
// recipe.addIngredient('iridium', 7, 'gl', 100000);
// console.log(recipe.getInfo().ingredients);
// recipe.removeIngredient('gold');
// recipe.setDescription('new description');
// recipe.setInstructions('new instructions');
// recipe.setName('new name');
// console.log(recipe.getInfo());
// console.log(recipe.getInfo().ingredients);
// setTimeout(() => {
// 	recipe.editIngredient('plutonium', 'name', 'uno');
// 	console.log(recipe.getInfo());
// 	console.log(recipe.getInfo().ingredients);
// }, 5000);
