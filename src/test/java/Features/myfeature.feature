Feature: Login browser
  
  // @SmokeTest

  Scenario Outline: Verification of reset button with numbers of credential
    Given : Open the firefox
    When : enter the uname "<username>"
    And : Enter Password "<Password>"
    Then : Click login button

    Examples: 
      | username |  | Password   |
      | ranjitk  |  | ranjit7001 |
