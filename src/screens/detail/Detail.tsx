import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import styles from './style';
import { RootStackParamList } from '../../navigation/Router';
import FastImage from 'react-native-fast-image';
import VoteButton from '../../components/voteButton/VoteButton';
import { RouteProp } from '@react-navigation/native';
import { observer } from 'mobx-react';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;
type Props = {
  route: DetailScreenRouteProp;
};

const Detail = ({ route }: Props) => {
  const { height, width } = useWindowDimensions();
  const {
    item: { source, incrementVotesDown, incrementVotesUp, votesDown, votesUp },
  } = route.params;
  return (
    <View style={styles.container}>
      <FastImage source={{ uri: source }} style={{ width, height }} />
      <View style={styles.overlay}>
        <VoteButton type="down" value={votesDown} onPress={incrementVotesDown} />
        <VoteButton type="up" value={votesUp} onPress={incrementVotesUp} />
      </View>
    </View>
  );
};

export default observer(Detail);
