'use strict';
// test/integration/specs/app-spec.js
module.exports = {
	'should load default page': function(browser) {
		browser
			.url(browser.launchUrl)
			.waitForElementPresent('body', 1000)
			.assert.title('TDD Example')
			.end();
	},
	'should display jumbotron on default page': function(browser){
		browser
			.url(browser.launchUrl)
			.waitForElementPresent('body', 1000)
			.assert.elementPresent('.jumbotron')
			.assert.containsText('h1', 'TDD Example')
			.end();
	},
	//BDD Assertions
	'should use BDD style assertions': function(browser){
		browser.url(browser.launchUrl);
		browser.expect.element('article').to.be.present;
		browser.expect.element('h1').text.to.equal('TDD Example');
		browser.end();
	}
};
