import React from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native'

function Header(props) {
    return (
        <SafeAreaView style={styles.header}>
            <SafeAreaView>
                <Text style={styles.text}>Informd</Text>
            </SafeAreaView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'darkslateblue',
    },
    header: {
        backgroundColor: 'darkslateblue',
    },
    text: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default Header;