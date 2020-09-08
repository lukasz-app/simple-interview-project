import AppStore from './AppStore';
import AuthStore from './AuthStore';
import NavigationStore from './NavigationStore';
import DataStore from './DataStore';

export interface Stores {
  appStore: AppStore;
  authStore: AuthStore;
  navigationStore: NavigationStore;
  dataStore: DataStore;
}

class RootStore {
  stores: Stores;

  constructor() {
    this.stores = {
      appStore: new AppStore(this),
      authStore: new AuthStore(this),
      navigationStore: new NavigationStore(this),
      dataStore: new DataStore(this),
    };
  }
}

export default RootStore;
