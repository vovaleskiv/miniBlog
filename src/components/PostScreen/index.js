import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';

import AddBtn from './images/addBtn.png';

export default class PostScreen extends Component {
    static navigationOptions = {
        headerTitle: 'Post',
    };

    render() {
        const {comments, post} = this.props;
        return (
            <View style={styles.wrapper}>
                <View style={styles.container}>
                    <ScrollView>
                        <View style={styles.postBlock}>
                            <Text style={styles.postTitle}>
                                {post.title}
                            </Text>
                            <Text style={styles.postText}>
                                {post.body}
                            </Text>
                            <View style={styles.userInfo}>
                                <Text style={styles.userName}>{post.user.name}</Text>
                                <Text style={styles.userMail}>{post.user.email}</Text>
                            </View>
                        </View>
                        {comments.length > 0 &&
                        <View>
                            <Text style={styles.text}>Comments: </Text>
                            {comments.map(item =>
                                <View key={item.id} style={styles.postBlock}>
                                    <Text style={[styles.text, styles.userMail]}>{item.email}</Text>
                                    <Text style={styles.postText}>
                                        {item.body}
                                    </Text>
                                </View>
                            )}
                        </View>
                        }
                    </ScrollView>
                </View>
                <TouchableOpacity onPress={this.props.goAddComment} style={styles.addButton}>
                    <Image source={AddBtn} style={styles.addImg}/>
                </TouchableOpacity>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        position: 'relative',
    },
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    postBlock: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 20,
        marginBottom: 15,
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
    text: {
        marginBottom: 15,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    userName: {
        color: '#ccc',
    },
    userMail: {
        color: '#00a8ff',
    },
    addButton: {
        position: 'absolute',
        bottom: 60,
        right: 10,
        width: 80,
        height: 80,
    },
    addImg: {
        width: 80,
        height: 80,
    },

});