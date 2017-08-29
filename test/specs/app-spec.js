import App from '../../src/app';
import {expect} from 'chai';

/*global expect*/
describe('App', () => {
	it('should be defined', () => {
		expect(App).to.not.be.null;
	});
	it('sayHello - should return Hello Jonnie', () => {
		expect(App.sayHello('Jonnie')).to.equal('Hello Jonnie');
	});
});
