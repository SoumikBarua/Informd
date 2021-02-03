import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'

function TabBar(props) {
    return (
        <View style={styles.container}>
            <Button title="Button 1" color="white"/>
            <Button title="Button 2" color="white"/>
            <Button title="Button 3" color="white"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'darkslateblue',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: .10,
    }
})

export default TabBar;