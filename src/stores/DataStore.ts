/* eslint-disable @typescript-eslint/camelcase */
import { observable, action } from 'mobx';
import BaseStore from './BaseStore';
import { persist, create } from 'mobx-persist';
import AsyncStorage from '@react-native-community/async-storage';

const hydrate = create({ storage: AsyncStorage });

export default class DataStore extends BaseStore {
  @persist('list')
  @observable
  data = [];

  @observable
  fetchError = null;

  onAppStarted = () => {
    hydrate('dataStore', this).then((store) => {
      if (this.data.length != 0) return;
      this.fetchData();
    });
  };

  fetchData = () => {
    fetch('https://picsum.photos/v2/list')
      .then((response) => {
        if (response.status !== 200) {
          this.setError(response.status);
          return;
        }
        return response.json();
      })
      .then(this.saveData)
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        console.log('AAA', this.data);
      });
  };

  @action
  saveData = (rawData) => {
    this.data = rawData.map(({ id, download_url }) => ({
      id,
      source: download_url,
      pointsUp: 0,
      pointsDown: 0,
    }));
  };

  @action
  setError = (code) => {
    this.fetchError = code;
  };
}
