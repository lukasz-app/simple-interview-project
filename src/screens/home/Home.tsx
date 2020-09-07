import * as React from 'react';
import { View, Pressable } from 'react-native';
import styles from './style';
import { SharedElement } from 'react-navigation-shared-element';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/Router';

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const Home = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          navigation.push('Detail');
        }}>
        <SharedElement id={'item'}>
          <View style={styles.element} />
        </SharedElement>
      </Pressable>
    </View>
  );
};

export default Home;
