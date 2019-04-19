import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import Modal from "react-native-modal";

export default class ModalAlert extends Component {

    render() {
        const {title, message, visible} = this.props;
        return (
            <Modal
                isVisible={visible}
                onBackdropPress={this.props.closeAlert}
                useNativeDriver={true}
            >
                <View style={styles.wrapper}>
                    <Text style={styles.text}>{`${title}`.toUpperCase()}</Text>
                    <Text style={styles.body}>{message}</Text>
                    <TouchableOpacity style={styles.modalButton} onPress={this.props.closeAlert}>
                        <View style={styles.buttonWrap}>
                            <Text style={styles.subheading}>{'Ok'.toUpperCase()}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </Modal>)
    }
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 30,
        borderRadius: 2,
        width: '100%',
    },
    title: {
        fontSize: 22,
        lineHeight: 22,
        textAlign: 'center',
        color: '#333',
        marginBottom: 20,
    },
    subheading: {
        fontSize: 18,
        lineHeight: 24,
        textAlign: 'center',
        color: '#333',
    },
    body: {
        fontSize: 14,
        lineHeight: 22,
        textAlign: 'center',
        color: '#333',
    },
    modalButton: {
        width: '100%',
    },
    buttonWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
});