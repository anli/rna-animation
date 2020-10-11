import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {List} from 'react-native-paper';

const Component = () => {
  const {navigate} = useNavigation();

  return (
    <View>
      <List.Item
        title="Basic"
        description="Animating the width of a bar"
        onPress={() => navigate('BasicScreen')}
      />

      <List.Item
        title="Pan Gesture"
        description="Animating the movement of a box"
        onPress={() => navigate('PanGestureScreen')}
      />
    </View>
  );
};

const options = {title: 'Animation Playground'};

export default class {
  static Component = Component;
  static options = options;
}
