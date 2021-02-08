import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './SearchScreen';
import ArticleDetailScreen from './ArticleDetailScreen';

function SearchStackScreen(props) {

    const SearchStack = createStackNavigator();

    return (
        <SearchStack.Navigator>
            <SearchStack.Screen name="Search" options={{headerShown: false}} component={SearchScreen} />
            <SearchStack.Screen name="Article" options={{headerShown: false}} component={ArticleDetailScreen} />
        </SearchStack.Navigator>
    );
}

export default SearchStackScreen;