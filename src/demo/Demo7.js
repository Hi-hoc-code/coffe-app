import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Demo7 = () => {
    return (
        <View style={myStyle.container}>
            <Text style={myStyle.text1}>Demo7</Text>
            <Text
                numberOfLines={2}
                style={myStyle.text2}>Demo7Demo7Demo7Demo7Demo7Demo7Demo7Demo7Demo7Demo7Demo7Demo7Demo7Demo7Demo7Demo7Demo7Demo7Demo7Demo7Demo7Demo7Demo7Demo7Demo7Demo7Demo7Demo7Demo7</Text>
            <Image
                source={require('../../assets/images/img.png')}
                style={myStyle.img1}
                resizeMode='cover'
            />
            <Image 
                source={{uri: 'https://i1-giaitri.vnecdn.net/2023/05/12/Chi-Pu-2-1683879525.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=a0uep4EXO06IlxcbE62uPA'}}
                style={myStyle.img1}
                resizeMode='cover'
            />

        </View>
    )
}

export default Demo7

const myStyle = StyleSheet.create({
    img1:{ 
        width: 200, 
        height: 200, 
        borderRadius: 20, 
        marginVertical: 20,
    },
    text2: {
        marginHorizontal: 50,
        marginVertical: 30,
        backgroundColor: 'blue',
        fontSize: 30,
        color: 'white'
    },
    text1: {
        backgroundColor: 'yellow',
        fontSize: 30,
    },
    container: {
        padding: 19,
        backgroundColor: 'orange',
        width: '100%',
        height: '100%'
    }
})