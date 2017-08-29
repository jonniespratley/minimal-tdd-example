'use strict';
const path = require('path');

//http://nightwatchjs.org/gettingstarted#basic-settings
const config = {
  "src_folders" : ["test/integration/specs"],
  "output_folder" : "reports",
  "page_objects_path" : "test/integration/pages",
  "globals_path" : "",
  "selenium" : {
    "start_process" : true,
    "server_path" : path.resolve(__dirname, './bin/selenium-server-standalone-3.0.1.jar'),
    "port" : 4444,
    "cli_args" : {
      "webdriver.chrome.driver" : path.resolve(__dirname, './bin/chromedriver')
    }
  },

  "test_settings" : {
    "default" : {
      "launch_url" : "http://localhost:9001",
      "selenium_port"  : 4444,
      "selenium_host"  : "localhost",
      "desiredCapabilities": {
        "browserName": "chrome"
      }
    }
  }
};

module.exports = config;
