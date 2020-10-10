import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {BasicScreen, HomeScreen} from './src/screens';

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
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
