import React from 'react';
import 'react-native';
import {fireEvent, render} from 'react-native-testing-library';
import HomeScreen from './home';

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({navigate: mockNavigate}),
}));

describe('Home Screen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it(`Scenario: Home Screen UI
      Given any
      When I am at "Home Screen"
      Then I should see "Basic"
      And I should see "Animating the width of a bar"`, async () => {
    const component = render(<HomeScreen.Component />);
    expect(component.getByText('Basic')).toBeDefined();
    expect(component.getByText('Animating the width of a bar')).toBeDefined();
  });

  it(`Scenario: See basic screen
      Given I am at "Home Screen"
      When I press "Basic"
      Then I should see "Basic Screen"`, async () => {
    const component = render(<HomeScreen.Component />);

    fireEvent.press(component.getByText('Basic'));
    expect(mockNavigate).toBeCalledTimes(1);
    expect(mockNavigate).toBeCalledWith('BasicScreen');
  });
});
