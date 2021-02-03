import React from 'react';
import { View, Text, FlatList, StyleSheet } from "react-native"
import Header from "../components/Header"

function NewsScreen(props) {
    return (
        <View style={styles.container}>
            <Header/>
            <View style={styles.content}>
                <Text>Hello World!</Text>
            </View>
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
        flex: 1,
        backgroundColor: 'white',
    }
})

export default NewsScreen;