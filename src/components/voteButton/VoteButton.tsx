import * as React from 'react';
import { Pressable, Text } from 'react-native';
import { observer } from 'mobx-react';
import styles from './style';

type Props = {
  type: 'down' | 'up';
  value: number;
  onPress: () => void;
};

const VoteButton = ({ type, value, onPress }: Props) => {
  return (
    <Pressable
      style={[
        styles.container,
        {
          backgroundColor: type === 'down' ? 'red' : 'green',
        },
      ]}
      onPress={onPress}>
      <Text style={styles.text}>{value}</Text>
    </Pressable>
  );
};

export default observer(VoteButton);
