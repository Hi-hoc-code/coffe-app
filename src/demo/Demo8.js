import {
    StyleSheet, Text, View,
    TextInput, Button,
    TouchableOpacity
} from 'react-native'
import React, { useState } from 'react'
const Demo8 = () => {
    const [name, setName] = useState('')
    return (
        <View style={myStyle.container}>
            <Text>Demo8</Text>
            <TextInput
                placeholder="Enter your name"
                keyboardType='number-pad'
                secureTextEntry={false}
                style={myStyle.input}
                value={name}
                onChangeText={(text) => setName(text)}
            />
            <TouchableOpacity
                style={myStyle.buttonContainer} >
                <Text style={myStyle.buttonLabel}>Submit</Text>
            </TouchableOpacity>

            <Text>

            </Text>
        </View>
    )
}
export default Demo8
const myStyle = StyleSheet.create({
    buttonLabel: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 50
    },
    buttonContainer: {
        marginTop: 20,
        width: '90%',
        height: 50,
        backgroundColor: 'blue',
        borderRadius: 10,
    },
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginTop: 10
    },
    container: {
        padding: 19,
        backgroundColor: 'white',
        width: '100%',
        height: '100%'
    }
})