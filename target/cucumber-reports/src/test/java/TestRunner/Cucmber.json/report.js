$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("myfeature.feature");
formatter.feature({
  "line": 1,
  "name": "Login browser",
  "description": "",
  "id": "login-browser",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verification of reset button with numbers of credential",
  "description": "",
  "id": "login-browser;verification-of-reset-button-with-numbers-of-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": ": Open the firefox",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": ": Enter the Username",
  "rows": [
    {
      "cells": [
        "ranjitk"
      ],
      "line": 7
    },
    {
      "cells": [
        "Rahul"
      ],
      "line": 8
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": ": Enter Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": ": Click login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": ": check my result",
  "keyword": "And "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "login-browser;verification-of-reset-button-with-numbers-of-credential;",
  "rows": [
    {
      "cells": [
        "Password",
        "",
        "ranjit7001"
      ],
      "line": 14,
      "id": "login-browser;verification-of-reset-button-with-numbers-of-credential;;1"
    }
  ],
  "keyword": "Examples"
});
});