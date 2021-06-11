import * as React from 'react';
import tabData from './data/tabData';
import { Ionicons } from '@expo/vector-icons';
import { Text, Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import stackNavigationData from './data/stackData';
const Stack = createStackNavigator();

export default function StackNavigator() {


    return (
        <Stack.Navigator>
            {
                stackNavigationData.map((item, index) => (
                    <Stack.Screen
                        key={`tab_${index}`}
                        name={item.name}
                        component={item.component}
                    />
                ))
            }
        </Stack.Navigator>
    );
}
