import * as React from 'react';
import FastImage from 'react-native-fast-image';
import { View, useWindowDimensions, Pressable, Text } from 'react-native';
import { observer } from 'mobx-react';
import { Item } from '../stores/DataStore';

const ImageListItem = ({ item, navigation }: { item: Item; navigation: any }) => {
  const { width } = useWindowDimensions();
  const { source, votesProcentage } = item;
  const onPress = () => {
    navigation.push('Detail', { item });
  };

  return (
    <Pressable onPress={onPress}>
      <View style={{}}>
        <FastImage
          source={{ uri: source }}
          style={{
            width: width / 3,
            height: width / 3,
          }}
        />
        <View style={{ position: 'absolute', bottom: 5, left: 5 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
            }}>
            {votesProcentage}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default observer(ImageListItem);
