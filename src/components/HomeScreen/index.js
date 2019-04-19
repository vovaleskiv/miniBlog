import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, TextInput, FlatList} from 'react-native';

import Search from './images/search.png';

export default class HomeScreen extends Component {
    static navigationOptions = {
        headerTitle: 'Home',
    };

    state = {
        search: '',
        refreshing: false,
    };

    changeInput = (text) => {
        this.setState({search: text});
    };

    handleSearch = () => {
        this.props.searchPosts(this.state.search);
    };

    goPostDetail = (item) => () => {
        this.props.postDetail(item)
    };

    handleRefresh = () => {
        this.setState({refreshing: true}, () => {
            this.updatePostList();
        });
    };

    updatePostList = () => {
        this.setState({refreshing: false, search: ''});
        this.props.fetchPosts();
    };


    render() {
        const {posts} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <TextInput ref="input"
                               underlineColorAndroid="transparent"
                               autoCapitalize="none"
                               placeholder="Search keyword"
                               value={this.state.search}
                               onChangeText={this.changeInput}
                    />
                    <TouchableOpacity onPress={this.handleSearch}>
                        <Image source={Search} style={styles.searchIcon}/>
                    </TouchableOpacity>
                </View>
                <FlatList
                    keyExtractor={item => item.id.toString()}
                    extraData={this.state}
                    data={posts}
                    renderItem={({item, index}) => (
                        <TouchableOpacity style={styles.postBlock} onPress={this.goPostDetail(item)}>
                            <Text style={styles.postTitle} ellipsizeMode={'tail'} numberOfLines={1}>
                                {item.title}
                            </Text>
                            <Text style={styles.postText} ellipsizeMode={'tail'} numberOfLines={2}>
                                {item.body}
                            </Text>
                        </TouchableOpacity>
                    )}
                    refreshing={this.state.refreshing}
                    onRefresh={this.handleRefresh}
                />

            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
        borderBottomColor: '#E1E1E1',
        borderBottomWidth: 1,
        backgroundColor: '#fff',
        paddingTop: 10,
        paddingHorizontal: 15,
        marginBottom: 20,
    },
    searchIcon: {
        width: 30,
        height: 30,
    },
    postBlock: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 20,
        marginBottom: 10,
    },
    postTitle: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
    },
    postText: {
        color: '#000',
    },
});
