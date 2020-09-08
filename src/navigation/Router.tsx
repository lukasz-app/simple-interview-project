import React from 'react';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { DetailScreen, HomeScreen } from 'screens';
import { Item } from 'stores/DataStore';
const Stack = createStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  Detail: { item: Item };
};

export type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

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
