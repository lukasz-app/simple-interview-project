import * as React from 'react';
import { Pressable, Text, Animated } from 'react-native';
import { observer } from 'mobx-react';
import styles from './style';

type Props = {
  type: 'down' | 'up';
  value: number;
  onPress: () => void;
};

const VoteButton = ({ type, value, onPress }: Props) => {
  const [animatedValue] = React.useState(new Animated.Value(0));

  const onMountAnimation = () => {
    Animated.timing(animatedValue, {
      toValue: 100,
      delay: 100,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };
  const onClickAnimation = (firstTime = true) => {
    Animated.timing(animatedValue, {
      toValue: firstTime ? 150 : 100,
      duration: 100,
      useNativeDriver: true,
    }).start(() => firstTime && onClickAnimation(false));
  };

  const onButtonPress = () => {
    onClickAnimation();
    onPress();
  };

  React.useEffect(() => {
    onMountAnimation();
  }, []);

  return (
    <Pressable onPress={onButtonPress}>
      <Animated.View
        style={[
          styles.container,
          {
            backgroundColor: type === 'down' ? 'red' : 'green',
            transform: [
              {
                scale: animatedValue.interpolate({
                  inputRange: [0, 200],
                  outputRange: [0, 2],
                }),
              },
            ],
          },
        ]}>
        <Text style={styles.text}>{value}</Text>
      </Animated.View>
    </Pressable>
  );
};

export default observer(VoteButton);
