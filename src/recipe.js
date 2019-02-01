import Ingredient from './ingredient';

const ND = 'Not defined';
const NA = 'N/A';

export default class Recipe {
	constructor(id = NA, name = ND, ingredients = [], description = ND, instructions = ND, image = null) {
		this.id = id;
		this.name = name;
		this.dateCreated = new Date().toLocaleDateString();
		this.lastEdited = new Date().toLocaleDateString();
		this.ingredients = ingredients;
		this.description = description;
		this.instructions = instructions;
		this.image = image;
	}
	getInfo() {
		return {
			id: this.id,
			name: this.name,
			created: this.dateCreated,
			edited: this.lastEdited,
			ingredients: this.ingredients,
			description: this.description,
			instructions: this.instructions,
			image: this.image
		};
	}
	setImage(image = this.image) {
		this.image = image;
		this.lastEdited = new Date().toLocaleDateString();
	}
	setName(name = this.name) {
		this.name = name;
		this.lastEdited = new Date().toLocaleDateString();
	}
	setDescription(description = this.description) {
		this.description = description;
		this.lastEdited = new Date().toLocaleDateString();
	}
	setInstructions(instructions = this.instructions) {
		this.instructions = instructions;
		this.lastEdited = new Date().toLocaleDateString();
	}
	setImage(image = this.image) {
		this.image = image;
		this.lastEdited = new Date().toLocaleDateString();
	}
	addIngredient(name = ND, quantity = 0, units = 'gm', price = 0) {
		const newIngredient = new Ingredient(name, quantity, units, price);
		this.ingredients.push(newIngredient);
		this.lastEdited = new Date().toLocaleDateString();
	}
	removeIngredient(name = NA) {
		this.ingredients = this.ingredients.filter(ingredient => ingredient.name !== name);
		this.lastEdited = new Date().toLocaleDateString();
	}
	editIngredient(name = NA, field = NA, value = NA) {
		const indexIngredientToEdit = this.ingredients.findIndex(ingredient => ingredient.name === name);
		const ingredientToEdit = this.ingredients.filter(ingredient => ingredient.name === name);
		const editedIngredient = ingredientToEdit[0];
		switch (field) {
			case 'name':
				editedIngredient.name = value;
				break;
			case 'quantity':
				editedIngredient.quantity = value;
				break;
			case 'units':
				editedIngredient.units = value;
				break;
			case 'price':
				editedIngredient.price = value;
				break;
		}
		this.ingredients.splice(indexIngredientToEdit, 1, editedIngredient);
		this.lastEdited = new Date().toLocaleDateString();
	}
}
