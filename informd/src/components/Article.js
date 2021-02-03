import React from 'react';
import { View, Text } from 'react-native'

export default class Article extends React.Component {
    render() {
        const {
            title,
            description,
            urlToImage
        } = this.props.article;

        return(
            <View>
                <Text>{title}</Text>
                <Text>{description}</Text>
                <Text>{urlToImage}</Text>
                <Text></Text>
            </View>
        )
    }
}