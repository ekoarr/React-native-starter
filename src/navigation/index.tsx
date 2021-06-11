// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import BottomTabNavigator from './BottomTabNavigator';

function Navigation() {
  return (
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
  );
}

export default Navigation;