import { AsyncStorage } from 'react-native';
import { observable, action, computed } from 'mobx';
import { persist, create } from 'mobx-persist';
import BaseStore from './BaseStore';

const hydrate = create({ storage: AsyncStorage });

export default class AuthStore extends BaseStore {
  @persist
  @observable
  token = '';

  @action
  hydrateAuth = () => hydrate('token', this);
}
