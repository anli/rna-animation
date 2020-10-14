import React, {useState} from 'react';
import {LayoutRectangle} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {Colors} from 'react-native-paper';
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
      {container && (
        <PanGesture
          color="purple"
          background={Colors.grey300}
          width={container.width}
          height={container.height / 2}
        />
      )}
      {container && (
        <PanGesture
          animated
          width={container.width}
          height={container.height / 2}
        />
      )}
    </Screen>
  );
};

const PanGesture = ({
  animated = false,
  color,
  background,
  width,
  height,
}: {
  animated?: boolean;
  color?: string;
  background?: string;
  width: number;
  height: number;
}) => {
  const boundX = width - 50;
  const boundY = height - 50;
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
      if (animated) {
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
        return;
      }
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
    <Container background={background}>
      <PanGestureHandler {...{onGestureEvent}}>
        <Animated.View {...{style}}>
          <Box color={color} />
        </Animated.View>
      </PanGestureHandler>
    </Container>
  );
};
const options = {title: 'Move the box!'};

export default class {
  static Component = Component;
  static options = options;
}

const Box = styled.View<{color?: string}>`
  width: 50px;
  height: 50px;
  background-color: ${(props) => props?.color || 'black'};
`;

const Screen = styled.View`
  flex: 1;
`;

const Container = styled.View<{background?: string}>`
  flex: 1;
  background-color: ${(props) => props?.background || 'white'};
`;
