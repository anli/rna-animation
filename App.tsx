import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {PanGestureScreen} from './src/screens';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <PanGestureScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
