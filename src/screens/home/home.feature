Feature: Home Screen
    Scenario: Home Screen UI
        Given any
        When I am at "Home Screen"
        Then I should see "Basic"
        And I should see "Animating the width of a bar"
        And I should see "Pan Gesture"
        And I should see "Animating the movement of a box"

    Scenario: See Basic screen
        Given I am at "Home Screen"
        When I press "Basic"
        Then I should see "Basic Screen"

    Scenario: See Pan Gesture screen
        Given I am at "Home Screen"
        When I press "Pan Gesture"
        Then I should see "Pan Gesture Screen"