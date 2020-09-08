import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DetailScreen, HomeScreen } from '../screens';
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
const Stack = createStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  Detail: { id: string; source: string };
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
