import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

function TabBar(props) {
    return (
        <View style={styles.container}>
            <Text>button1</Text>
            <Text>button2</Text>
            <Text>button3</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'darkslateblue',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: .10
    }
})

export default TabBar;