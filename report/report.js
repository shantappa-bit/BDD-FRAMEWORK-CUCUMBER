$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4708552000,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Successfull login with invalid credentials",
  "description": "",
  "id": "login;successfull-login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user has opened the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enters a url as \"https://ui.freecrm.com/\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "verify that login page should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enters user name as \"shantu147@gmail.com\" and password as \"Godvs400\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "verify that home page should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on the log out link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "verify that login page should be dispayed",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_has_opened_the_browser()"
});
formatter.result({
  "duration": 122140400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://ui.freecrm.com/",
      "offset": 22
    }
  ],
  "location": "Steps.user_enters_a_url_as(String)"
});
formatter.result({
  "duration": 80237597200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.verify_that_login_page_should_be_displayed()"
});
formatter.result({
  "duration": 18217500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shantu147@gmail.com",
      "offset": 26
    },
    {
      "val": "Godvs400",
      "offset": 64
    }
  ],
  "location": "Steps.user_enters_user_name_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 543829700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 659550000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.verify_that_home_page_should_be_displayed()"
});
formatter.result({
  "duration": 59791600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicks_on_the_log_out_link()"
});
formatter.result({
  "duration": 6100207700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//i[@class\u003d\u0027settings icon\u0027])[1]\"}\n  (Session info: chrome\u003d79.0.3945.130)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027BLRCND52100713\u0027, ip: \u002710.1.2.84\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.130, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\52100713\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:61118}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 11d9720b47c1964fa95e0ab54b122c87\n*** Element info: {Using\u003dxpath, value\u003d(//i[@class\u003d\u0027settings icon\u0027])[1]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat stepDefinition.Steps.user_clicks_on_the_log_out_link(Steps.java:87)\r\n\tat ✽.When user clicks on the log out link(./features/login.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.verify_that_login_page_should_be_dispayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 262608700,
  "status": "passed"
});
});