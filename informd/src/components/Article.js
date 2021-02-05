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


        return(
            <Card containerStyle={{borderRadius:10}}>
                <Card.Image source={{uri: urlToImage}} containerStyle={{}} />
                <Card.Title>{title}</Card.Title>
                <Text>{description}</Text>
            </Card>
        )
    }
}
