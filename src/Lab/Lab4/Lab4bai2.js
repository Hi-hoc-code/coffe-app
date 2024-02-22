import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react'

const Lab4bai2 = () => {
    const [securepassword, setSecurepassword] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const Register = () => {
        navigation.navigate('Register');
    };
    const submitbutton = () => {
        setEmailError('');
        setPasswordError('');
        if (!email.trim() && !password.trim()) {
            setEmailError('Email không được bỏ trống');
            setPasswordError('Password không được bỏ trống');
            return;
        } else if (!email.trim()) {
            setEmailError('Email không được bỏ trống');
            return;
        } else if (!password.trim()) {
            setPasswordError('Password không được bỏ trống');
            return;
        }

        if ((email === 'nhut333' && password === 'nhut333') || (email === 'nhut2306' && password === 'nhut2306')) {
            // navigation.navigate('TabNavigation');
        } else {
            setEmailError('Sai email hoặt mật khẩu');
        }
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.contaichu}>
                    <Text style={styles.textFont}>
                        Hi Welcome Back!
                    </Text>
                    <Image source={require('../../image/tay.png')} style={styles.image} resizeMode="contain" />
                </View>
                <View style={styles.contaihello}>
                    <Text style={styles.textFont2}>
                        Hello again you have been missed!
                    </Text>
                </View>
                <View style={styles.contaianh}>
                    <Image source={require('../../image/anh.png')} style={styles.photo} resizeMode="cover" />
                </View>
                <Text style={styles.textadd}>Email Address</Text>
                <View style={[styles.containerinput, styles.emailinput]}>

                    <TextInput style={styles.input} placeholder='Email' placeholderTextColor='#828282'
                        onChangeText={(text) => {
                            setEmail(text);
                            setEmailError('');
                        }} />
                    {!!emailError && <Text style={styles.errorText}>{emailError}</Text>}
                </View>
                <Text style={styles.textpassword}>Password</Text>
                <View style={[styles.containerinput, styles.passworinput]}>
                    <TextInput
                        style={styles.input}
                        placeholder='Password'
                        placeholderTextColor='#828282'
                        secureTextEntry={securepassword}
                        onChangeText={(test) => {
                            setPassword(test)
                            setPasswordError('');
                        }}
                    />
                    {!!passwordError && <Text style={styles.errorText}>{passwordError}</Text>}
                    <TouchableOpacity onPress={() => setSecurepassword(!securepassword)} style={styles.easypass}>
                        <Image
                            style={styles.easypass}
                            source={securepassword ? require('../../image/hide.png') : require('../../image/show.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.btncontailogin}>
                    <TouchableOpacity style={styles.btnlogin}>
                        <Text style={styles.textlogin}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.tong}>
                    <View style={styles.gach} />
                    <View>
                        <Text> Or Login with</Text>
                    </View>
                    <View style={styles.gach} />
                </View>
                <View style={styles.containerbutton}>   
                    <TouchableOpacity style={styles.buttongoogle}>
                        <Image style={styles.logogg} source={require('../../image/ic_facebook.png')} />
                        <Text style={styles.buttonText}>Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttongoogle}>
                        <Image style={styles.logogg} source={require('../../image/icongoogle.png')} />
                        <Text style={styles.buttonText}>Google</Text>
                    </TouchableOpacity> 
                </View>
                <View style={styles.textcontainer}>
                    <Text style={styles.textdont}>Don't have an account? </Text>
                    <Text style={styles.textgegister}>Register</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    btncontailogin:{
        paddingEnd:15,
        alignItems:'center',
        justifyContent:'center',
    },
    textlogin:{
      color:'black',
      fontWeight:'bold',
      fontSize:18,
    },
    btnlogin:{
        width: '100%',
        height: 48,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        borderRadius: 8,
        borderWidth: 1,
        paddingHorizontal: 17,
        backgroundColor:'#0000FF',
        paddingVertical: 11,
        color: 'black',
        marginTop:20,
        alignItems:'center',
    },
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        padding: 15,
        marginStart: 10,
    },
    image: {
        width: 20,
        height: 20,
        borderRadius: 100,
    },
    contaichu: {
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textFont: {
        marginRight: 10,
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
    contaihello: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textFont2: {
        color: 'black',
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 26,
        letterSpacing: 0.5,
    },
    contaianh: {
        width: '100%',
        height: 400,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingEnd: 15,
        marginTop: -40,
    },
    photo: {
        width: '100%',
        height: '100%',
        aspectRatio: 1,
    },
    containerinput: {
        width: '100%',
        paddingEnd: 15,
    },
    input: {
        width: '100%',
        height: 48,
        fontFamily: 'Poppins',
        flexShrink: 0,
        fontSize: 14,
        fontStyle: 'normal',
        borderRadius: 8,
        borderColor: '#252A32',
        borderWidth: 1,
        paddingHorizontal: 17,
        paddingVertical: 11,
        color: 'black',
        marginTop: -30,
    },
    emailinput: {
        marginTop: 20
    },
    textadd: {
        width: '100%',
        height: 48,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        borderColor: '#252A32',
        color: 'black',
        marginTop: -50,
    },
    textpassword: {
        width: '100%',
        height: 48,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        borderColor: '#252A32',
        color: 'black',
        marginTop: 20,
    },
    passworinput: {
        marginTop: 16
    },
    easypass: {
        width: 30,
        height: 30,
        position: 'absolute',
        right: 15,
        top: -10,
    },
    tong: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20,
        paddingEnd: 15,
    },
    gach: {
        flex: 1,
        height: 1,
        backgroundColor: '#252A32',
    },
    containerbutton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 9,
        paddingEnd: 15,
    },
    buttongoogle: {
        width: '48%',
        height: 57,
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 1,
        paddingHorizontal: 17,
        borderRadius: 20,
        paddingEnd: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logogg: {
        width: 15,
        height: 15,
        position: 'absolute',
        top: 20,
        left: 17,
    },
    buttonText: {
        fontSize: 14,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 26,
        letterSpacing: 0.5,
        color: '#121212',
    },
    textcontainer: {
      alignItems: 'center',
      justifyContent:'center',
      flexDirection: 'row',
      marginTop:30,
    },
    textdont:{
        color: 'black',
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 26,
        letterSpacing: 0.5,
    },
    textgegister:{
        color: '#FF00FF',
        fontSize: 15,
        fontWeight: 'bold',
        lineHeight: 26,
        letterSpacing: 0.5,
    }
});

export default Lab4bai2;
