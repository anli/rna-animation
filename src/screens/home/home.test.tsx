import React from 'react';
import 'react-native';
import {fireEvent, render} from 'react-native-testing-library';
import Screen from './home';

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
      And I should see "Animating the width of a bar"
      And I should see "Pan Gesture"
      And I should see "Animating the movement of a box"`, async () => {
    const component = render(<Screen.Component />);
    expect(component.getByText('Basic')).toBeDefined();
    expect(component.getByText('Animating the width of a bar')).toBeDefined();
    expect(component.getByText('Pan Gesture')).toBeDefined();
    expect(
      component.getByText('Animating the movement of a box'),
    ).toBeDefined();
  });

  it(`Scenario: See Basic screen
      Given I am at "Home Screen"
      When I press "Basic"
      Then I should see "Basic Screen"`, async () => {
    const component = render(<Screen.Component />);

    fireEvent.press(component.getByText('Basic'));
    expect(mockNavigate).toBeCalledTimes(1);
    expect(mockNavigate).toBeCalledWith('BasicScreen');
  });

  it(`Scenario: See Pan Gesture screen
      Given I am at "Home Screen"
      When I press "Pan Gesture"
      Then I should see "Pan Gesture Screen"`, async () => {
    const component = render(<Screen.Component />);

    fireEvent.press(component.getByText('Pan Gesture'));
    expect(mockNavigate).toBeCalledTimes(1);
    expect(mockNavigate).toBeCalledWith('PanGestureScreen');
  });
});
