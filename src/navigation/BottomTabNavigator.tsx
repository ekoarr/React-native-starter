import * as React from 'react';
import tabData from './data/tabData';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, Image, StyleSheet, Platform } from 'react-native';
const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {


    return (
        <Tab.Navigator tabBarOptions={{ style: { height: Platform.OS === 'ios' ? 90 : 50 } }}>
            {
                tabData.map((item, index) => (
                    <Tab.Screen
                        key={`tab_${index}`}
                        name={item.name}
                        component={item.component}
                        options={{
                            tabBarLabel: ({ focused }) => {
                                return <Text>{item.label}</Text>
                            }
                        }}
                    />
                ))
            }
        </Tab.Navigator>
    );
}
