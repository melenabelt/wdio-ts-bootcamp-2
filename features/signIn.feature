Feature: Sign-in to Amazon 

    Scenario: The registered user signs in from header using right data
    Given The user enters the Amazon homepage
    When The user enters the correct email and password from header
    Then The user sees their first name above his address."Deliver to {first_name}"
    And The user sees their first name above Account & Lists. "Hello, {first_name}"

    Scenario: The registered user signs in from header using wrong data
    Given The user enters the Amazon homepage
    When The user enters the incorrect email or password from header
    Then The user sees an error message and sign-in is not possible

    Scenario: The registered user signs in from footer using right data
    Given The user enters the Amazon homepage
    When The user enters the correct email and password from footer
    Then The user sees their first name above his address."Deliver to {first_name}"
    And The user sees their first name above Account & Lists. "Hello, {first_name}"

    Scenario: The registered user signs in from footer using wrong data
    Given The user enters the Amazon homepage
    When The user enters the incorrect email or password from footer
    Then The user sees an error message and sign-in is not possible


    



    

    

    