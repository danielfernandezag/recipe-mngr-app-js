import Recipe from './recipe';

window.addEventListener('load', () => {
	particlesJS.load('particles', './assets/particles.config.json', function() {
		console.log('callback - particles.js config loaded');
	});
	const login = document.getElementById('login-container');
	const main = document.getElementById('main-container');
	main.style.display = 'none';
});

const recipe = new Recipe(1, 'receta1', [], 'description', 'instructions');

console.log(recipe.getInfo());

recipe.addIngredient('sugar', 3, 'kg', 10);
recipe.addIngredient('oil', 4, 'lt', 100);
recipe.addIngredient('gold', 5, 'gm', 1000);
recipe.addIngredient('plutonium', 6, 'ml', 10000);
recipe.addIngredient('iridium', 7, 'gl', 100000);

console.log(recipe.getInfo().ingredients);

recipe.removeIngredient('gold');
recipe.setDescription('new description');
recipe.setInstructions('new instructions');
recipe.setName('new name');

console.log(recipe.getInfo());
console.log(recipe.getInfo().ingredients);
setTimeout(() => {
	recipe.editIngredient('plutonium', 'name', 'uno');
	console.log(recipe.getInfo());
	console.log(recipe.getInfo().ingredients);
}, 5000);
