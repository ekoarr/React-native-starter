import * as React from 'react';
import tabData from './data/tabData';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
    return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

export default function BottomTabNavigator() {

    return (
        <Tab.Navigator>
            {
                tabData.map((item, index) => (
                    <Tab.Screen
                        key={`tab_${index}`}
                        name={item.name}
                        component={item.component}
                        options={{
                            tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
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
