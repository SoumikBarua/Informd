import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'


function ArticleDetailScreen(props) {
    return (
        <View style={styles.container}>
            <WebView source={{ uri: props.route.params.article.url }}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default ArticleDetailScreen;