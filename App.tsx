import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {BasicScreen} from './src/screens';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <BasicScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
