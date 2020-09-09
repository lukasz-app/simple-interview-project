import 'react-native';
import React from 'react';
import { ImageListItem } from 'components';
import { create } from 'react-test-renderer';
jest.mock('@react-navigation/native');

it('renders correctly', () => {
  create(<ImageListItem item={{}} />);
});
