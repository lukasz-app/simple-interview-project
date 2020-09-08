import * as React from 'react';
import { View, Pressable, Text } from 'react-native';

type Props = {
  type: 'down' | 'up';
  value: number;
};

const VoteButton = ({ type, value }: Props) => {
  return (
    <Pressable>
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

export default VoteButton;
