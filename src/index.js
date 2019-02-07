import { config, googleLogin } from './firebase';
let sessionUser = null;
(function main() {
	// CONNECT FIREBASE
	const app = firebase.initializeApp(config);
	// FETCH DATA FIREBASE
	const allRecipes = app
		.database()
		.ref()
		.child('RECIPES');
	console.log(allRecipes);
	//COMPONENTS
	const loginPage = document.querySelector('#login-container');
	// const mainPage = document.querySelector('#main-container');
	const googleLoginBtn = document.querySelector('#login-google');
	const emailLoginBtn = document.querySelector('#login-button');
	const logoutBtn = document.querySelector('#logout-btn');
	const logoutModal = document.querySelector('#modal-logout');
	const closeLogout = document.querySelector('#close-logout-modal');
	const addActionBtn = document.querySelector('#add-action-btn');
	const addActionModal = document.querySelector('#modal-add-recipe');
	const closeAddAction = document.querySelector('#close-add-modal');
	//EVENTS
	window.addEventListener('load', () => {
		particlesJS.load('particles', './assets/particles.config.json');
		loginPage.style.display = 'none';
	});
	window.addEventListener('click', e => {
		switch (e.target) {
			case addActionModal:
				addActionModal.style.display = 'none';
				break;
			case logoutModal:
				logoutModal.style.display = 'none';
				break;
		}
	});
	logoutBtn.addEventListener('click', () => {
		logoutModal.style.display = 'block';
	});
	closeLogout.addEventListener('click', () => {
		logoutModal.style.display = 'none';
	});
	addActionBtn.addEventListener('click', () => {
		addActionModal.style.display = 'block';
	});
	closeAddAction.addEventListener('click', () => {
		addActionModal.style.display = 'none';
	});

	//

	googleLoginBtn.addEventListener('click', setSessionUser);

	emailLoginBtn.addEventListener('click', () => {
		console.log(sessionUser);
	});
})();

function setSessionUser() {
	googleLogin();
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
