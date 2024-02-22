import { View, Text,Image} from 'react-native'
import React from 'react'

const Chat = () => {
  return (
    <View style={{backgroundColor:'black', flex:1}}>
     <Image
        source={{uri: 'https://images.hdqwalls.com/download/girls-frontline-2020-4k-x1-1920x1080.jpg'}}
        style={{ width: '100%',}}
      />
    </View>
  )
}

export default Chat