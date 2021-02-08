import React, { Component } from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, TextInput, Button, Keyboard } from "react-native";
import {searchNews} from '../utils/news';
import Article from "../components/Article"

export default class SearchScreen extends Component {
    constructor(props) {
        super(props);

        // Class properties
        this.state = {
            articles: [],
            search: '',
        };
        this.fetchNews = this.fetchNews.bind(this)
    }

    fetchNews() {
        var searchInput = "";
        Keyboard.dismiss();
        if(this.state.search !== ""){
            searchInput = this.state.search;
        }
        else{
            return;
        }
        searchNews(searchInput)
            .then(articles => this.setState({ articles, refreshing: false}))
            .catch(() => this.setState({ refreshing: false }));
    }

    updateSearch = (search) => {
        this.setState({ search });
    }


    // Open to ArticleDetailScreen and displays selected article data
    navStack = (item) => {
        this.props.navigation.navigate('Article', {article: item})
    }


    render(){
        const { search } = this.state;
    return (
        <View style={styles.container}>
            <TextInput
                style={{height:40, backgroundColor:'gray'}}
                defaultValue="Search"
                onChangeText={this.updateSearch}
                enablesReturnKeyAutomatically={true}
            />
            <Button
                title="Search"
                onPress={this.fetchNews}
            />

            <FlatList
                data = {this.state.articles}
                renderItem = {({ item }) => 
                <TouchableOpacity onPress={() => this.navStack(item) }>
                    <Article article={item} />
                </TouchableOpacity>}
                keyExtractor = {item => item.url}
            />
        </View>
    );
}}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    }
})

