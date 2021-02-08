import React, {Component} from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-elements'

export default class Article extends Component {
    render() {
        const {
            title,
            author,
            description,
            url,
            urlToImage
        } = this.props.article;

        const defaultImage = "https://secureservercdn.net/50.62.198.70/157.58a.myftpupload.com/wp-content/uploads/2017/01/empty-featured2-1.png"

        return(
            <Card containerStyle={{borderRadius:10}}>
                <Card.Image source={{uri: urlToImage || defaultImage}} containerStyle={{}} />
                <Card.Title>{title}</Card.Title>
                <Text>{description}</Text>
            </Card>
        )
    }
}
