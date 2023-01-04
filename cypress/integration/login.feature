Feature: Admin logs in

Background: 
    Given Admin is in web staging

Scenario: Admin sees Main Page
    Then Admin sees welcome banner

Scenario: member can see login modal
    When Admin clicks "Login" button
    Then Admin should see Login modal

Scenario: Member can add username 
     When Admin clicks "Login" button
    Then Admin can add username in Login modal

Scenario: Member can log in to web
     When Admin clicks "Login" button
     And Admin can add username in Login modal
     And Admin can add password in Login Modal
     Then Admin clicks "Login" button
    # Then successfully log in web

Scenario: Member enters incorrect password
     When Member clicks "Login" button
     And Member can add username in Login modal
     And Member can add incorrect password in Login Modal
     And member clicks "Login" button
    Then should not login
