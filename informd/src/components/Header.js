import React from 'react';
import { Text, StyleSheet, SafeAreaView} from 'react-native'

import colors from '../config/colors'

function Header(props) {
    return (
        <SafeAreaView style={styles.header}>
            <Text style={styles.text}>Informd</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.primary,
    },
    text: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})

export default Header;