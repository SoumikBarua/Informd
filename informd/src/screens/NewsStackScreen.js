import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ArticleDetailScreen from './ArticleDetailScreen'

import DrawerMenu from '../components/DrawerMenu'

// Responsible for entering other screens within the current tab
// Check 'A stack navigator for each tab'
// https://reactnavigation.org/docs/tab-based-navigation/
function NewsStackScreen(props) {
    const NewsStack = createStackNavigator();
    return (
        <NewsStack.Navigator>
            <NewsStack.Screen name="News" options={{headerShown: false}} component={DrawerMenu}/>
            <NewsStack.Screen name="Article" options={{headerShown: false}} component={ArticleDetailScreen}/>
        </NewsStack.Navigator>
    );
}

export default NewsStackScreen;