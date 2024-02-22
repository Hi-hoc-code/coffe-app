import {View, Text, Image} from 'react-native';
import React from 'react';

const Popular = () => {
  return (
    <View
      style={{
        backgroundColor: 'aqua',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{fontSize: 40, color: '#fff', fontWeight:'bold'}}>Popular</Text>
    </View>
  );
};

export default Popular;
