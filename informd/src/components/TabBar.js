import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NewsStackScreen from '../screens/NewsStackScreen';
import SearchScreen from '../screens/SearchScreen';

import colors from '../config/colors'

function TabBar(props) {
    const Tab = createBottomTabNavigator();

    return(
        <NavigationContainer>
            <Tab.Navigator tabBarOptions={{
                style: {
                    backgroundColor: colors.primary,
                }
            }}>
                <Tab.Screen name="News" component={NewsStackScreen}/>
                <Tab.Screen name="Search" component={SearchScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabBar;