import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Lab3 = () => {
    const navigation = useNavigation();

    const Bai1 = () => {
        navigation.navigate('BAI1');
    };

    const Bai2 = () => {
        navigation.navigate('BAI2');
    };

    const Bai3 = () => {
        navigation.navigate('BAI3');
    };

    return (
        <View>
            <TouchableOpacity onPress={Bai1}>
                <Text style={styles.buttonLabel}>Lab3 Bài 1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={Bai2}>
                <Text style={styles.buttonLabel}>Lab3 Bài 2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={Bai3}>
                <Text style={styles.buttonLabel}>Lab3 Bài 3</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonLabel: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
    },
});

export default Lab3;
