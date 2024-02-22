import React, { useState } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';

const Lab3bai3 = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const anmodal = () => {
        Alert.alert('Thông báo', 'Bạn đã ẩn modal bằng nút back của thiết bị', [
            { text: 'OK', onPress: () => setModalVisible(false) },
        ]);
    };
    

    const handleBackButton = () => {
        setModalVisible(!modalVisible);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Text style={styles.openButton}>Mở Modal</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleBackButton}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Xin chào Nguyễn Minh Nhựt</Text>
                        <Image
                            source={require('../../image/anhcho.jpg')}
                            style={styles.img1}
                            resizeMode='cover'
                        />
                        <TouchableOpacity onPress={anmodal}>
                            <Text style={styles.anmodal}>Ẩn Modal</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    img1: {
        width: 260,
        height: 200,
        borderRadius: 20,
        marginVertical: 20,
    },
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    openButton: {
        backgroundColor: '#00FF00',
        color: 'black',
        height: 50,
        textAlign: 'center',
        fontSize: 18,
        width: 200,
        alignSelf: 'center',
        lineHeight: 50,
    },
    
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText: {
        padding: 10,
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        borderRadius: 5,
        textAlign: 'center'
    },
    anmodal: {
        backgroundColor: '#2196F3',
        padding: 10,
        color: 'white',
        borderRadius: 5,
    },
});

export default Lab3bai3;
