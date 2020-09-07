import * as React from 'react';
import { View } from 'react-native';
import styles from './style';
import { SharedElement } from 'react-navigation-shared-element';

const Detail = () => {
  return (
    <View style={styles.container}>
      <SharedElement id={'item'}>
        <View style={styles.element}></View>
      </SharedElement>
    </View>
  );
};

export default Detail;
