import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

function SearchScreen(props) {
    return (
        <View style= {styles.container}>
            <Text>Seach Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    }
})

export default SearchScreen;