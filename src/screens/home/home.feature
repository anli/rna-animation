Feature: Home Screen
    Scenario: Home Screen UI
        Given any
        When I am at "Home Screen"
        Then I should see "Basic"
        And I should see "Animating the width of a bar"

    Scenario: See basic screen
        Given I am at "Home Screen"
        When I press "Basic"
        Then I should see "Basic Screen"