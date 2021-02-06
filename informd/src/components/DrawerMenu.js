import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NewsScreen from '../screens/NewsScreen';
  

function DrawerMenu(props) {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home"      component={NewsScreen} />
            <Drawer.Screen name="Business"  component={NewsScreen}  initialParams={{ category: "business" }} />
            <Drawer.Screen name="Science"   component={NewsScreen}  initialParams={{ category: "science" }} />
            <Drawer.Screen name="Health"    component={NewsScreen}  initialParams={{ category: "health" }} />
            <Drawer.Screen name="Sports"    component={NewsScreen}  initialParams={{ category: "sports" }} />
            <Drawer.Screen name="Technology" component={NewsScreen}  initialParams={{ category: "technology"}} />
        </Drawer.Navigator>
    );
}

export default DrawerMenu;