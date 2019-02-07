const ND = 'Not defined';

export default class User {
	constructor(token = ND, name = ND, mail = ND, photo = ND, uid = ND) {
		this.token = token;
		this.name = name;
		this.mail = mail;
		this.photo = photo;
		this.uid = uid;
	}
	getInfo() {
		return {
			token: this.token,
			name: this.name,
			mail: this.mail,
			photo: this.photo,
			uid: this.uid
		};
	}
	setInfo(token = ND, name = ND, mail = ND, photo = ND, uid = ND) {
		this.token = token;
		this.name = name;
		this.mail = mail;
		this.photo = photo;
		this.uid = uid;
	}
}
