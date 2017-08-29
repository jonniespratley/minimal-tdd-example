# bin/bash
set -x
set -e

SELENIUM_VERSION=3.0.1
CHROMEDRIVER_VERSION=2.31


cd ./bin

echo "Downloading Selenium Standalone Server $SELENIUM_VERSION"
curl -o ./selenium-server-standalone-$SELENIUM_VERSION.jar \
	https://selenium-release.storage.googleapis.com/3.0/selenium-server-standalone-$SELENIUM_VERSION.jar

echo "Downloading chromedriver $CHROMEDRIVER_VERSION"
curl -o ./chromedriver.zip \
	https://chromedriver.storage.googleapis.com/$CHROMEDRIVER_VERSION/chromedriver_mac64.zip

echo "Unzipping chromedriver $CHROMEDRIVER_VERSION"
unzip ./chromedriver.zip -d ./bin
