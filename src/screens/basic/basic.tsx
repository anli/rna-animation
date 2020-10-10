import React from 'react';
import {View} from 'react-native';
import {Button as ButtonNative} from 'react-native-paper';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import styled from 'styled-components/native';

const Component = () => {
  const randomWidth = useSharedValue(10);

  const config = {
    duration: 1000,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(randomWidth.value, config),
    };
  });

  const animate = () => {
    randomWidth.value = Math.random() * 350;
  };

  return (
    <View>
      <AnimatedView style={style} />
      <Button mode="contained" onPress={animate}>
        Press me!
      </Button>
    </View>
  );
};

const options = {title: 'Basic Animations'};

export default class {
  static Component = Component;
  static options = options;
}

const AnimatedView = styled(Animated.View)`
  width: 100px;
  height: 80px;
  background-color: black;
  margin: 30px;
`;

const Button = styled(ButtonNative)`
  margin: 24px 24px 24px 24px;
`;
