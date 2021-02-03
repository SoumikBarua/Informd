import React from 'react';
import { View, Text, FlatList, StyleSheet } from "react-native"
import Header from "../components/Header"
import TabBar from "../components/TabBar"

function NewsScreen(props) {
    return (
        <View style={styles.container}>
            <Header/>
            <View style={styles.content}>
                <Text>Hello World!</Text>
            </View>
            <TabBar/>
        </View> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: .90,
        backgroundColor: 'white',
    }
})

export default NewsScreen;