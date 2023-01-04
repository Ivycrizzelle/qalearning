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
    When Admin clicks "Casino" page1
    Then Admin should see filter1 options
    |tab         |
    |Most Popular|
    |Newest      |
    |A-Z         |

Scenario: Admin can click filter button
    When Admin clicks "Casino" page1
    And Admin should see filter1 options
    And Admin click filter button
    Then Admin should see filter1 options
    |tab         |
    |Most Popular|
    |Newest      |
    |A-Z         |

Scenario: Admin sees Safer Gaming page
    When Admin clicks "Safer Gaming" page 3
    Then Admin should see Safer Gaming page