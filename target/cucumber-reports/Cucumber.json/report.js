$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("myfeature.feature");
formatter.feature({
  "line": 1,
  "name": "Login browser",
  "description": "",
  "id": "login-browser",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Verification of reset button with numbers of credential",
  "description": "",
  "id": "login-browser;verification-of-reset-button-with-numbers-of-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": ": Open the firefox",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": ": Enter the Username \"\u003cUsername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": ": Enter Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": ": Click login button",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "login-browser;verification-of-reset-button-with-numbers-of-credential;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 10,
      "id": "login-browser;verification-of-reset-button-with-numbers-of-credential;;1"
    },
    {
      "cells": [
        "ranjitk",
        "ranjit7001"
      ],
      "line": 11,
      "id": "login-browser;verification-of-reset-button-with-numbers-of-credential;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Verification of reset button with numbers of credential",
  "description": "",
  "id": "login-browser;verification-of-reset-button-with-numbers-of-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": ": Open the firefox",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": ": Enter the Username \"ranjitk\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": ": Enter Password \"ranjit7001\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": ": Click login button",
  "keyword": "Then "
});
formatter.match({
  "location": "step.open_the_firefox()"
});
formatter.result({
  "duration": 42644247587,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ranjitk",
      "offset": 22
    }
  ],
  "location": "step.Enter_the_Username(String)"
});
formatter.result({
  "duration": 2376328291,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ranjit7001",
      "offset": 18
    }
  ],
  "location": "step.enter_pass(String)"
});
formatter.result({
  "duration": 28243832097,
  "status": "passed"
});
formatter.match({
  "location": "step.click_login_button()"
});
formatter.result({
  "duration": 54336,
  "status": "passed"
});
});