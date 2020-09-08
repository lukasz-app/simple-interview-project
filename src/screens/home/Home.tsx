import * as React from 'react';
import { View, ListRenderItem } from 'react-native';
import styles from './style';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'navigation/Router';
import { inject, observer } from 'mobx-react';
import { Stores } from 'stores/RootStore';
import { FlatList } from 'react-native';
import DataStore, { Item } from 'stores/DataStore';
import { ImageListItem } from 'components';

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: ProfileScreenNavigationProp;
  dataStore: DataStore;
};

const Home = ({ navigation, dataStore }: Props) => {
  const renderItem: ListRenderItem<Item> = ({ item }) => {
    return <ImageListItem item={item} navigation={navigation} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={dataStore.data}
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
