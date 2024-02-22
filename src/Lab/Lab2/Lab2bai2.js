import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

const oldData = [
    { code: 'ab', name: 'Son môi' },
    { code: 'ac', name: 'Sửa rửa mặt' },
    { code: null, name: null },
    { code: null, name: '' },
];

const newData = {
    ab: { code: 'ab', name: 'Son môi' },
    ac: { code: 'ac', name: 'Sửa rửa mặt' },
};

const parseArrayToObject = ({ array = [], keyId = '' }) => Object.fromEntries(
    array?.map(item => [keyId ? item?.[keyId] : item, item]) || [],
);

const filterObject = obj => {
    Object.keys(obj).forEach(key => {
        const product = obj[key];
        if (!product || !product.code || !product.name) {
            delete obj[key];
        }
    });
    return obj;
};

const Lab2bai2 = () => {
    const chuyendoi = parseArrayToObject({ array: oldData || [], keyId: 'code' });
    const daloc = filterObject(chuyendoi);

    return (
        <View >
            <Text style={style.text}>Sản Phẩm mới đã được lọc:</Text>
            <View style={style.container}>
                <View>
                    <View style={style.tableRow}>
                        <Text style={style.tableHeader}>Code</Text>
                        <Text style={style.tableHeader}>Name</Text>
                    </View>
                </View>
                {Object.keys(daloc).map((key) => (
                    <View key={key} style={style.tableRowspnew}>
                        <Text style={style.tableCell}>{daloc[key].code}</Text>
                        <Text style={style.tableCell}>{daloc[key].name}</Text>
                    </View>
                ))}
            </View>
            <Image source={require('../../image/anhcho.jpg')} 
            style={{ margin:10,padding:10,width: 340, height: 500 }}
             resizeMode="cover" />

        </View>

    );
}

const style = StyleSheet.create({
    container: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
        padding: 10,
        backgroundColor: '#C0C0C0',
        color: 'red',
        fontWeight: 'bold'
    },
    tableRow: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#fff',
        backgroundColor: '#00FFFF',
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    tableRowspnew: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#fff',
        backgroundColor: '#9C9C9C',
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    tableHeader: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        marginHorizontal: 10,
        fontSize: 14,
        color: 'blue',
        overflow: 'hidden',
    },
    tableCell: {
        flex: 1,
        fontSize: 14,
        color: '#8B4513',
        textAlign: 'center',
        marginHorizontal: 10,
        overflow: 'hidden',
    },
});

export default Lab2bai2;
