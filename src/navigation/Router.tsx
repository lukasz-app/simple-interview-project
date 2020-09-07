import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { DetailScreen, HomeScreen } from '../screens';
const Stack = createSharedElementStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          sharedElementsConfig={(route, otherRoute, showing) => {
            return ['item'];
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
