import 'react-native';
import React from 'react';
import { VoteButton } from 'components';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<VoteButton />);
});
