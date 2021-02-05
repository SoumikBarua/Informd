import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NewsScreen from './NewsScreen'
import ArticleDetailScreen from './ArticleDetailScreen'

// Responsible for entering other screens within the current tab
// Check 'A stack navigator for each tab'
// https://reactnavigation.org/docs/tab-based-navigation/
function NewsStackScreen(props) {
    const NewsStack = createStackNavigator();
    return (
        <NewsStack.Navigator>
            <NewsStack.Screen name="News" options={{headerShown: false}} component={NewsScreen}/>
            <NewsStack.Screen name="Article" options={{headerShown: false}} component={ArticleDetailScreen}/>
        </NewsStack.Navigator>
    );
}

export default NewsStackScreen;