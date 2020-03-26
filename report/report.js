$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6441465700,
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
  "duration": 84369000,
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
  "duration": 9309435800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.verify_that_login_page_should_be_displayed()"
});
formatter.result({
  "duration": 788334700,
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
  "duration": 6529909900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 659351300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.verify_that_home_page_should_be_displayed()"
});
formatter.result({
  "duration": 7550300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicks_on_the_log_out_link()"
});
formatter.result({
  "duration": 6491762500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.verify_that_login_page_should_be_dispayed()"
});
formatter.result({
  "duration": 2037161300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_the_browser()"
});
formatter.result({
  "duration": 50800,
  "status": "passed"
});
formatter.after({
  "duration": 516600,
  "error_message": "cucumber.runtime.CucumberException: When a hook declares an argument it must be of type cucumber.api.Scenario. public void stepDefinition.Steps.teardown(org.testng.ITestResult)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:52)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat myRunner.Runner.feature(Runner.java:40)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:283)\r\n\tat org.apache.maven.surefire.testng.TestNGXmlTestSuite.execute(TestNGXmlTestSuite.java:75)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:120)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:379)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:340)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:125)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:413)\r\n",
  "status": "failed"
});
});