import { AppState, AppStateStatus } from 'react-native';
import { observable, action } from 'mobx';
import BaseStore from './BaseStore';
import RootStore from './RootStore';

export default class AppStore extends BaseStore {
  constructor(rootStore: RootStore) {
    super(rootStore);
    this.appState = AppState.currentState;
  }

  @observable
  appState: AppStateStatus;

  @action
  onAppStarted = () => {
    console.log('On App Started');
    this.setEventListeners();
    this.rootStore.stores.dataStore.onAppStarted();
  };

  @action
  onAppFinished = () => {
    console.log('On App Started');
    this.removeEventListeners();
  };

  @action
  setEventListeners = () => {
    AppState.addEventListener('change', this.handleAppStateChange);
  };

  @action
  removeEventListeners = () => {
    AppState.removeEventListener('change', this.handleAppStateChange);
  };

  @action
  handleAppStateChange = (nextAppState: AppStateStatus) => {
    this.appState = nextAppState;
  };
}
