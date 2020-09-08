import 'react-native-gesture-handler';
import React from 'react';
import Router from 'navigation/Router';
import RootStore, { Stores } from 'stores/RootStore';
import AppStore from 'stores/AppStore';
import withMobxRootStore from 'enhancers/withMobxRootStore';
import { inject } from 'mobx-react';

interface Props {
  appStore: AppStore;
}

const App = ({ appStore }: Props) => {
  React.useEffect(() => {
    appStore.onAppStarted();
    return () => appStore.onAppFinished();
  }, []);
  return <Router />;
};

export default withMobxRootStore(new RootStore())(
  inject((allStores: Stores) => ({
    appStore: allStores.appStore,
  }))(App),
);
