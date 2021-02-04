import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from "react-native";
import Article from "../components/Article"
import {getNews} from '../utils/news';


export default class NewsScreen extends Component {
    constructor(props) {
        super(props);

        // Class properties
        this.state = {
            articles: [],
            refreshing: true
        };
        this.fetchNews = this.fetchNews.bind(this)
    }

    // This method will run automatically if this screen is active
    componentDidMount() {
        this.fetchNews();
    }

    fetchNews() {
        getNews()
            .then(articles => this.setState({ articles, refreshing: false}))
            .catch(() => this.setState({ refreshing: false }));
    }

    handleRefresh() {
        this.setState(
            {
                refreshing: true
            },
            () => this.fetchNews()
        )
    }


    render(){
    return (
        <View style={styles.container}>
            <FlatList
                data = {this.state.articles}
                renderItem = {({ item }) => <Article article={item} />}
                keyExtractor = {item => item.url}
                refreshing = {this.state.refreshing}
                onRefresh = {this.handleRefresh.bind(this)}
            />
        </View>
    );
}}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'white',
    }
})

