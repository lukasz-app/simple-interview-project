import 'react-native';
import React from 'react';
import { HomeScreen } from 'screens';
import renderer from 'react-test-renderer';
import withMobxRootStore from 'enhancers/withMobxRootStore';
import RootStore from 'stores/RootStore';
jest.mock('@react-navigation/native');

it('renders correctly', () => {
  renderer.create(withMobxRootStore(new RootStore())(<HomeScreen />));
});
