//app/src/app.js
export default class App {
	constructor(options) {
		this.options = options;
		console.log('App');
	}
	static sayHello(name = 'World') {
		return `Hello ${name}`;
	}
}
