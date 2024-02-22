import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const Demo = () => {   
    const myIcon = <Icon name="rocket" size={30} color="#900" />;
  return (
    <View>
    <Text>{myIcon}</Text>
    </View>
  )
}

export default Demo