import * as React from 'react';
import { View, useWindowDimensions, Image, Pressable, StyleSheet } from 'react-native';
import styles from './style';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/Router';
import FastImage from 'react-native-fast-image';
import VoteButton from '../../components/VoteButton';
import { RouteProp } from '@react-navigation/native';
import { Item } from '../../stores/DataStore';
import { observer } from 'mobx-react';

type DetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Detail'>;
type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

type Props = {
  navigation: DetailScreenNavigationProp;
  route: DetailScreenRouteProp;
};
const Detail = ({ navigation, route }: Props) => {
  const { height, width } = useWindowDimensions();
  const {
    item: { source, incrementVotesDown, incrementVotesUp, votesDown, votesUp },
  } = route.params;
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
        <VoteButton type="down" value={votesDown} onPress={incrementVotesDown} />
        <VoteButton type="up" value={votesUp} onPress={incrementVotesUp} />
      </View>
    </View>
  );
};

export default observer(Detail);
