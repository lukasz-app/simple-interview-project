import AsyncStorage from '@react-native-community/async-storage';
import { observable, action } from 'mobx';
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
