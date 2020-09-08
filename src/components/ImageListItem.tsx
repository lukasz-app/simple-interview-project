import * as React from 'react';
import FastImage from 'react-native-fast-image';
import { View, useWindowDimensions, Pressable, Text } from 'react-native';

const ImageListItem = ({ id, source, pojntsUp, pointsDown, navigation }) => {
  const { height, width } = useWindowDimensions();
  const onPress = () => {
    navigation.push('Detail', { id, source });
  };
  console.log(id);
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
            0%
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ImageListItem;
