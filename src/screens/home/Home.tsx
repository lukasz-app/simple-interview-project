import * as React from 'react';
import { View, ListRenderItem } from 'react-native';
import styles from './style';
import { inject, observer } from 'mobx-react';
import { Stores } from 'stores/RootStore';
import { FlatList } from 'react-native';
import DataStore, { Item } from 'stores/DataStore';
import { ImageListItem } from 'components';

type Props = {
  dataStore: DataStore;
};

const Home = ({ dataStore }: Props) => {
  const renderItem: ListRenderItem<Item> = ({ item }) => {
    return <ImageListItem item={item} />;
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
