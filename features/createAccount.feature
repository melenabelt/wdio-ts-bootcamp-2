Feature: Create a new Amazon account

    Scenario: The unregistered user creates a new account from header using right data
        Given The user enters the Amazon page
        When The user enters the correct name, email and password from header
        Then OTP field is present

    Scenario: The unregistered user creates a new account from header using wrong data
        Given The user enters the Amazon page
        When The user don't enter name, email or password from header
        Then The user receives an error message for missing field

    # Scenario: The unregistered user creates a new account from Account and List button using right data
    #     Given The user enters the Amazon page
    #     When The user enters the correct name, email and password from Account and List link
    #     # Then The user sees Sign Out link on Account & Lists

    # Scenario: The unregistered user creates a new account from Account and List link using wrong data
    #     Given The user enters the Amazon page
    #     When The user don't enter name, email or password from Account and List link
    #     # Then The user receives an error message

    # Scenario: The unregistered user creates a new account from Starts here link using right data
    #     Given The user enters the Amazon page
    #     When The user enters the correct name, email and password from Starts here link
    #     # Then The user sees Sign Out link on Account & Lists

    # Scenario: The unregistered user creates a new account from Starts here link using wrong data
    #     Given The user enters the Amazon page
    #     When The user don't enter name, email or password from Starts here link
    #     # Then The user receives an error message

    Scenario: The registered user creates a new account from header using right data
        Given The user enters the Amazon page
        When The user enters the name, existing email and password from header
        Then The user receives an error message for existing email
