import AppStore from './AppStore';
import DataStore from './DataStore';

export interface Stores {
  appStore: AppStore;
  dataStore: DataStore;
}

class RootStore {
  stores: Stores;

  constructor() {
    this.stores = {
      appStore: new AppStore(this),
      dataStore: new DataStore(this),
    };
  }
}

export default RootStore;
