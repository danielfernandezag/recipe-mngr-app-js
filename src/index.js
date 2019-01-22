class SimplePerson {
	constructor(age = 23, name = 'bob') {
		this.age = age;
		this.name = name;
	}
	getInfo() {
		return `Hello my name is ${this.name} and I am ${this.age} years old`;
	}
}

const newPerson = new SimplePerson(23, 'daniel');
const domPlaceholder = document.getElementById('placeholder');
domPlaceholder.innerHTML = newPerson.getInfo();
