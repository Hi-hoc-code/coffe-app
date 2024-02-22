import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';


const Lab3bai2 = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [thongtin, setThongtin] = useState([]);
    const click = () => {
        if (!name || !password || !phone) {
            Alert.alert('Vui lòng nhập đầy đủ thông tin');
            return;
        }
        setThongtin([...thongtin, { name, password, phone }]);
        setName('');
        setPhone('');
        setPassword('');
    }
    return (
        <View>
            <Text style={styles.text}>Nhập thông tin</Text>
            <View>
                <TextInput
                    value={name}
                    onChangeText={setName}
                    placeholder="Nhập họ tên"
                    style={styles.tipStyle}
                />
                <TextInput
                    value={phone}
                    onChangeText={setPhone}
                    placeholder="Nhập số điện thoại"
                    style={styles.tipStyle}
                />
                <TextInput
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Nhập mật khẩu"
                    style={styles.tipStyle}
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.buttonContainer} onPress={click}>
                    <Text style={styles.buttonLabel}>Submit</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.spacingView} />
            {thongtin.length > 0 && (
                <View>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableHeaderName}>Họ Tên</Text>
                        <Text style={styles.tableHeader}>Số điện thoại</Text>
                        <Text style={styles.tableHeader}>Mật khẩu</Text>
                    </View>
                    {thongtin.map((item, index) => (
                        <View key={index} style={styles.tableRow}>
                            <Text style={styles.tableCellName}>{item.name}</Text>
                            <Text style={styles.tableCell}>{item.phone}</Text>
                            <Text style={styles.tableCell}>{item.password}</Text>
                        </View>
                    ))}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    spacingView: {
        width: '100%',
        height: 2,
        marginTop: 30,
        backgroundColor: 'black',
        color: 'black',
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
        padding: 10,
        backgroundColor: '#C0C0C0',
        color: 'black',
        fontWeight: 'bold'
    },
    tipStyle: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        marginHorizontal: 15,
        marginTop: 10,
    },
    buttonLabel: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 50
    },
    buttonContainer: {
        marginTop: 20,
        width: '100%',
        height: 50,
        backgroundColor: 'blue',
        borderRadius: 10,
    },
    tableHeader: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        marginHorizontal: 10,
        fontSize: 10,
        color: 'blue',
        overflow: 'hidden',
    },
    tableHeaderName: {
        flex: 2,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 12,
        color: 'blue',
        overflow: 'hidden',
    },
    tableCell: {
        flex: 1,
        fontSize: 11,
        textAlign: 'center',
        marginHorizontal: 10,
        overflow: 'hidden',
    },
    tableCellName: {
        flex: 2,
        fontSize: 12,
        textAlign: 'center',
        marginHorizontal: 10,
        overflow: 'hidden',
    },
    tableRow: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
});

export default Lab3bai2;
