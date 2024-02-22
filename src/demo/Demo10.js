import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Demo10 = () => {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.listitemcontai}>
                <View style={styles.listitem}>
                    <View style={styles.content}>
                        <Image source={require('../image/anhcho.jpg')} style={styles.avatar} />
                        <View style={styles.details}>
                            <Text style={styles.name}>Admin</Text>
                            <Text style={styles.birthDay}>Ngày sinh: 21-01-2004</Text>
                            <Text style={styles.phone}>Số điện thoại: 0123456789</Text>
                            <Text style={styles.email}>Email: Admin132@gmail.com</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.actionButton}>       
                        <Text style={styles.actionText}>Sửa thông tin</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                        <Text style={styles.actionText}>Xóa</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    avatar: {
        width: 100,
        height: 140,
        borderRadius: 20,
    },
    birthDay: {
        color: 'black',
        fontSize: 14,
        marginTop: 10,
    },
    name: {
        color: 'black',
        fontFamily: 'Poppins',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    content: {
        flexDirection: 'row',
    },
    details: {
        marginLeft: 10,
    },
    itemContainer: {
        padding: 10,
        borderRadius: 10,
    },
    listitem: {
        flexDirection: 'row',
    },
    listitemcontai: {
        backgroundColor: '#C0C0C0',
        padding: 10,
        marginVertical: 10,
        borderRadius: 10,
    },
    actionButton: {
        width: 150,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        backgroundColor: 'blue',
        borderRadius: 5,
    },
    actions: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    phone: {
        color: 'black',
        fontSize: 14,
        marginTop: 10,
    },
    email: {
        color: 'black',
        fontSize: 14,
        marginTop: 10,
    },
    actionText: {
        fontSize: 14,
        color: 'white',
    },
});

export default Demo10;
