# Feature: Admin logs in

# Background: 
#     Given Admin is in web staging

# Scenario: Admin successfully log in
#     When Admin clicks "Safer Gaming"
#     Then Admin should see Safer Gaming page

Feature: Admin logs in

Background: 
    Given Admin is in web staging

Scenario: Admin sees Main Page
    Then Admin sees welcome banner

Scenario: Admin sees Casino Page
    When Admin clicks "Casino" page
    Then Admin should see filter
     

Scenario: Admin sees Safer Gaming page
    When Admin clicks "Safer Gaming" page 3
    Then Admin should see Safer Gaming page

Scenario: Admin can see safer gaming filter
    When Admin clicks "Safer Gaming" page 3
    And Admin clicks safer gaming filter
    Then Admin should see safer gaming options

