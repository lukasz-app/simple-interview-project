import * as React from 'react';
import { View } from 'react-native';
import styles from './style';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/Router';
import { inject, observer } from 'mobx-react';
import { Stores } from '../../stores/RootStore';
import { FlatList } from 'react-native';
import DataStore from '../../stores/DataStore';
import ImageListItem from '../../components/ImageListItem';

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: ProfileScreenNavigationProp;
  dataStore: DataStore;
};

const Home = ({ navigation, dataStore }: Props) => {
  const renderItem = ({ item, index }) => {
    console.log(index, item.source);
    return <ImageListItem source={item.source} navigation={navigation} id={item.id} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={dataStore.data.slice()}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
      />
    </View>
  );
};

export default inject((allStores: Stores) => ({
  dataStore: allStores.dataStore,
}))(observer(Home));
