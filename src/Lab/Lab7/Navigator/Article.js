import {View, Text, Image} from 'react-native';
import React from 'react';

const Article = () => {
  return (
    <View
      style={{
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{fontSize: 40, color: '#fff'}}>Article</Text>
    </View>
  );
};

export default Article;
