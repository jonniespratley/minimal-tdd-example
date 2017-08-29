module.exports = {
  'page should load' : function (browser) {
    browser
      .url(browser.launchUrl)
      .end();
  }
};
