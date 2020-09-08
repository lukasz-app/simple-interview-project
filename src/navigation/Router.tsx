import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DetailScreen, HomeScreen } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import { Item } from '../stores/DataStore';
const Stack = createStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  Detail: { item: Item };
};

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{}} />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ headerTransparent: true, title: '' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
