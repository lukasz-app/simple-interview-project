import * as React from 'react';
import { View, useWindowDimensions, Image, Pressable, StyleSheet } from 'react-native';
import styles from './style';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/Router';
import FastImage from 'react-native-fast-image';
import VoteButton from '../../components/VoteButton';

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Detail'>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};
const Detail = ({ navigation, route }: Props) => {
  const { height, width } = useWindowDimensions();
  const { source, id } = route.params;
  return (
    <View style={styles.container}>
      <FastImage
        source={{ uri: source }}
        style={{
          width: width,
          height: height,
        }}
      />
      <View
        style={[
          StyleSheet.absoluteFill,
          {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          },
        ]}>
        <VoteButton type="down" value={10} />
        <VoteButton type="up" value={5} />
      </View>
    </View>
  );
};

export default Detail;
