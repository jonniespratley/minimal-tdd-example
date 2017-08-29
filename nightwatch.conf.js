'use strict';

//http://nightwatchjs.org/gettingstarted#basic-settings
const config = {
  "src_folders" : ["test/integration"],
  "output_folder" : "reports",
  "custom_commands_path" : "",
  "custom_assertions_path" : "",
  "page_objects_path" : "",
  "globals_path" : "",

  "selenium" : {
    "start_process" : false,
    "server_path" : "",
    "port" : 4444,
    "cli_args" : {
      "webdriver.chrome.driver" : ""
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

    "chrome" : {
      "desiredCapabilities": {
        "browserName": "chrome"
      }
    }
  }
};

module.exports = config;
