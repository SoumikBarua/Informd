import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NewsScreen from '../screens/NewsScreen';
import SearchScreen from '../screens/SearchScreen';

function TabBar(props) {
    const Tab = createBottomTabNavigator();

    return(
        <NavigationContainer>
            <Tab.Navigator tabBarOptions={{
                style: {
                    backgroundColor: 'darkslateblue',
                }
            }}>
                <Tab.Screen name="News" component={NewsScreen}/>
                <Tab.Screen name="Search" component={SearchScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabBar;