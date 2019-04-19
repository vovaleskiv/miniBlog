import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
} from 'react-native';

export default class AddCommentScreen extends Component {
    static navigationOptions = {
        headerTitle: 'Add comment',
    };
    state = {
        comment: '',
    };

    changeInput = (text) => {
        this.setState({comment: text});
    };

    handleSubmit = () => {
        this.props.sendComment(this.state.comment)
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.txt}>Your comment</Text>
                <View style={styles.containerInput}>
                    <TextInput
                        value={this.state.comment}
                        onChangeText={this.changeInput}
                        multiline
                        placeholder='Write your comment here'
                        style={styles.input}
                    />
                </View>

                <TouchableOpacity
                    disabled={this.state.comment === ''}
                    style={[styles.button, this.state.comment === '' && styles.disabled]}
                    onPress={this.handleSubmit}>
                    <Text>{'Send'.toUpperCase()}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 15,
    },
    button: {
        backgroundColor: '#f00',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
    },
    disabled: {
        backgroundColor: '#e1e1e1',
    },
    input: {
        height: 135,
        textAlignVertical: 'top',
    },
    containerInput: {
        borderColor: '#ccc',
        borderWidth: 1,
        height: 135,
        padding: 10,
        marginBottom: 15,
    },
    txt: {
        color: '#656565',
        fontFamily: 'Avenir',
        fontSize: 16,
        lineHeight: 20,
        fontWeight: 'bold',
    },
});
