import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from "react-native";
import Header from "../components/Header";
import TabBar from "../components/TabBar";
import Article from "../components/Article"
import {getNews} from '../utils/news';


export default class NewsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            refreshing: true
        };
        this.fetchNews = this.fetchNews.bind(this)
    }

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
            <Header/>
            <View style={styles.content}>
                <FlatList
                    data = {this.state.articles}
                    renderItem = {({ item }) => <Article article={item} />}
                    keyExtractor = {item => item.url}
                    refreshing = {this.state.refreshing}
                    onRefresh = {this.handleRefresh.bind(this)}
                />
            </View>
            <TabBar/>
        </View> 
    );
}}

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

