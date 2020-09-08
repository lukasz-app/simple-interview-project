import { action } from 'mobx';
import BaseStore from './BaseStore';

export default class AppStore extends BaseStore {
  @action
  onAppStarted = () => {
    this.rootStore.stores.dataStore.onAppStarted();
  };
}
