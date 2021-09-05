Feature: BDD Atlas Homepage
        I want to be able to submit quote and color

    @TC001 @YellowColor
    Scenario: I want to able to submit and delete yellow
        Given I open BDD Atlas Web
        When I type a quote: Menulis
        And I choose Yellow color
        Then I verify quote submitted "Yellow" and "Menulis"
        Then I verify quote has been deleted: Menulis
    
    @TC001 @AllColor
    Scenario Outline: I want to able to submit and delete <color>
        Given I open BDD Atlas Web
        When I type a quote: Menulis
        And I choose <color> color
        Then I verify quote submitted "<color>" and "Menulis"
        Then I verify quote has been deleted: Menulis
    Examples:
        | color | 
        | White |
        | Blue  | 
        | Cyan  | 
        | Yellow|