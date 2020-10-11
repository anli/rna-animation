import React, {useState} from 'react';
import {LayoutRectangle} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withDecay,
} from 'react-native-reanimated';
import {clamp, withBouncing} from 'react-native-redash';
import styled from 'styled-components/native';

const Component = () => {
  const [container, setContainer] = useState<null | LayoutRectangle>(null);
  return (
    <Screen onLayout={({nativeEvent: {layout}}) => setContainer(layout)}>
      {container && <PanGesture {...container} />}
    </Screen>
  );
};

const PanGesture = ({width, height}: {width: number; height: number}) => {
  const boundX = width - 100;
  const boundY = height - 100;
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  console.log({boundX, boundY, translateX, translateY});
  const onGestureEvent = useAnimatedGestureHandler<
    any,
    {
      offsetX: number;
      offsetY: number;
    }
  >({
    onStart: (_, ctx) => {
      ctx.offsetX = translateX.value;
      ctx.offsetY = translateY.value;
    },
    onActive: (event, ctx) => {
      translateX.value = clamp(ctx.offsetX + event.translationX, 0, boundX);
      translateY.value = clamp(ctx.offsetY + event.translationY, 0, boundY);
    },
    onEnd: ({velocityX, velocityY}) => {
      translateX.value = withBouncing(
        withDecay({
          velocity: velocityX,
        }),
        0,
        boundX,
      );
      translateY.value = withBouncing(
        withDecay({
          velocity: velocityY,
        }),
        0,
        boundY,
      );
    },
  });

  const style = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: translateX.value},
        {translateY: translateY.value},
      ],
    };
  });

  return (
    <Screen>
      <PanGestureHandler {...{onGestureEvent}}>
        <Animated.View {...{style}}>
          <Box />
        </Animated.View>
      </PanGestureHandler>
    </Screen>
  );
};
const options = {title: 'Move the box!'};

export default class {
  static Component = Component;
  static options = options;
}

const Box = styled.View`
  width: 100px;
  height: 100px;
  background-color: black;
`;

const Screen = styled.View`
  flex: 1;
`;
