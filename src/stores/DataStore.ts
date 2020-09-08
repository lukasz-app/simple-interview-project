/* eslint-disable @typescript-eslint/camelcase */
import { observable, action, computed } from 'mobx';
import BaseStore from './BaseStore';
import { persist, create } from 'mobx-persist';
import AsyncStorage from '@react-native-community/async-storage';

const hydrate = create({ storage: AsyncStorage });

export class Item {
  constructor(id: string, source: string) {
    this.id = id;
    this.source = source;
  }
  id = '';
  source = '';
  @persist
  @observable
  votesUp = 0;
  @persist
  @observable
  votesDown = 0;

  @computed
  get sum() {
    return this.votesDown + this.votesUp;
  }

  @computed
  get votesProcentage() {
    if (this.sum == 0) return `50%`;
    return `${((this.votesUp * 100) / this.sum).toFixed(1)}%`;
  }

  @action
  incrementVotesUp = () => {
    this.votesUp = this.votesUp + 1;
  };

  @action
  incrementVotesDown = () => {
    this.votesDown = this.votesDown + 1;
  };
}

export default class DataStore extends BaseStore {
  @persist('list')
  @observable
  data: Item[] = [];

  @observable
  fetchError = null;

  onAppStarted = () => {
    hydrate('dataStore', this).then(() => {
      console.log('Hydrate', this);
      if (this.data.length != 0) return;
      console.log('Hydrate AFTER FETXG');
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
      .finally();
  };

  @action
  saveData = (rawData) => {
    this.data = rawData.map(({ id, download_url }) => new Item(id, download_url));
  };

  @action
  setError = (code) => {
    this.fetchError = code;
  };
}
