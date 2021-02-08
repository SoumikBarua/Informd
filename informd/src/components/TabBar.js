import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import NewsStackScreen from '../screens/NewsStackScreen';
import SearchStackScreen from '../screens/SearchStackScreen';

import colors from '../config/colors'

function TabBar(props) {
    const Tab = createBottomTabNavigator();

    return(
        <NavigationContainer>
            <Tab.Navigator tabBarOptions={{
                style: {
                    backgroundColor: colors.primary,
                }}}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ size }) => {
                        let iconName;

                        if (route.name === "News") {
                            iconName = 'ios-newspaper-outline'
                        } else if (route.name === "Search") {
                            iconName = 'search'
                        }

                        return <Ionicons name={iconName} size={size} color='white' />
                    }
                })}>
                <Tab.Screen name="News" component={NewsStackScreen}/>
                <Tab.Screen name="Search" component={SearchStackScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabBar;