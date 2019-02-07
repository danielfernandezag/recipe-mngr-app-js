import User from './user';

export const config = {
	apiKey: 'AIzaSyC48fghMdIX0-48krWLhWT2xIWFC7Zakj8',
	authDomain: 'personal-mini-projects.firebaseapp.com',
	databaseURL: 'https://personal-mini-projects.firebaseio.com',
	projectId: 'personal-mini-projects',
	storageBucket: 'personal-mini-projects.appspot.com',
	messagingSenderId: '684773986710'
};

export const googleLogin = () => {
	if (!firebase.auth().currentUser) {
		let provider = new firebase.auth.GoogleAuthProvider();
		provider.addScope('https://www.googleapis.com/auth/plus.login');
		firebase
			.auth()
			.signInWithPopup(provider)
			.then(result => {
				const user = result.user;
				const sessionUser = new User(result.credential.accessToken, user.displayName, user.email, user.photoURL, user.uid);
				sessionStorage.setItem('user', JSON.stringify(sessionUser));
				return sessionUser;
			})
			.catch(error => {
				let errorCode = error.code;
				let errorMessage = error.message;
				let errorMail = error.email;
				let errorCredential = error.credential;
				if (errorCode === 'auth/account-exists-with-different-credential') {
					alert('error de autenticacion');
				}
			});
	} else {
		firebase.auth().signOut();
	}
};
