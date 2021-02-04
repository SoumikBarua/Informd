import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NewsScreen from '../screens/NewsScreen';
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
                <Tab.Screen name="News" component={NewsScreen}/>
                <Tab.Screen name="Search" component={SearchScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabBar;