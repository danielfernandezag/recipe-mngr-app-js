export default class Ingredient {
	constructor(name = 'Not defined', quantity = 0, units = 'gm', price = 0) {
		this.name = name;
		this.quantity = quantity;
		this.units = units;
		this.price = price;
	}
	getInfo() {
		return {
			name: this.name,
			quantity: this.quantity,
			units: this.units,
			price: this.price
		};
	}
	setName(name = this.name) {
		this.name = name;
	}
	setQuantity(quantity = this.quantity) {
		this.quantity = quantity;
	}
	setUnits(units = this.units) {
		this.units = units;
	}
	setPrice(price = this.price) {
		this.price = price;
	}
}
