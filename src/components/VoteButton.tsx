import * as React from 'react';
import { View, Pressable, Text } from 'react-native';
import { observer } from 'mobx-react';

type Props = {
  type: 'down' | 'up';
  value: number;
  onPress: () => void;
};

const VoteButton = ({ type, value, onPress }: Props) => {
  return (
    <Pressable onPress={onPress}>
      <View
        style={{
          height: 60,
          minWidth: 60,
          borderRadius: 30,
          backgroundColor: type === 'down' ? 'red' : 'green',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 10,
        }}>
        <Text style={{ color: 'white', fontSize: 16, fontWeight: '800' }}>{value}</Text>
      </View>
    </Pressable>
  );
};

export default observer(VoteButton);
