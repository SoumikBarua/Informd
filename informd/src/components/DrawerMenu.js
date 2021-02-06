import React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NewsScreen from '../screens/NewsScreen';
  
import TestScreen from '../screens/TestScreen'

function BusinessScreen(props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TestScreen category={ props.route.params.category } />
        </View>
    );
}
  


function DrawerMenu(props) {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home"      component={NewsScreen} />
            <Drawer.Screen name="Business"  component={NewsScreen}  initialParams={{ category: "business" }} />
            <Drawer.Screen name="Science"   component={NewsScreen}  initialParams={{ category: "science" }} />
            <Drawer.Screen name="Health"    component={NewsScreen}  initialParams={{category: "health" }} />
        </Drawer.Navigator>
    );
}

export default DrawerMenu;