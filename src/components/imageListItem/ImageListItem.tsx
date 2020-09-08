import * as React from 'react';
import { View, useWindowDimensions, Pressable, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import { observer } from 'mobx-react';
import { Item } from 'stores/DataStore';
import styles from './style';

const ImageListItem = ({ item, navigation }: { item: Item; navigation: any }) => {
  const { width } = useWindowDimensions();
  const { source, votesProcentage } = item;
  const onPress = () => {
    navigation.push('Detail', { item });
  };

  return (
    <Pressable onPress={onPress}>
      <FastImage
        source={{ uri: source }}
        style={{
          width: width / 3,
          height: width / 3,
        }}
      />
      <View style={styles.overlay}>
        <Text style={styles.text}>{votesProcentage}</Text>
      </View>
    </Pressable>
  );
};

export default observer(ImageListItem);
