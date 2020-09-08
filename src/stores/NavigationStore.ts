// import { NavigationActions } from 'react-navigation';
import { action, observable } from 'mobx';
import BaseStore from './BaseStore';

export default class NavigationStore extends BaseStore {
  @observable.ref
  navigator = undefined;

  //   @action
  //   setNavigator = (navigator) => {
  //     this.navigator = navigator;
  //   };

  //   @action
  //   goBack = (key) => {
  //     this.navigator.dispatch(
  //       NavigationActions.back({
  //         key,
  //       }),
  //     );
  //     return true;
  //   };

  //   navigate = (routeName, params?, navAction?) => {
  //     console.log('start nav ', routeName);
  //     this.navigator.dispatch(
  //       NavigationActions.navigate({
  //         routeName,
  //         params,
  //       }),
  //     );
  //   };

  //   onNavigationStateChange = (prevState, newState, navAction) => {
  //     console.log('Nav state changed');
  //   };
}
