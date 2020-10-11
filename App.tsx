import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {BasicScreen, HomeScreen, PanGestureScreen} from '@screens';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';

const Stack = createStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen
            name="BasicScreen"
            component={BasicScreen.Component}
            options={BasicScreen.options}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen.Component}
            options={HomeScreen.options}
          />
          <Stack.Screen
            name="PanGestureScreen"
            component={PanGestureScreen.Component}
            options={PanGestureScreen.options}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
