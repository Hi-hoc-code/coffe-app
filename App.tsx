// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Lab6bai1 from './src/Lab/Lab6/Lab6bai1';
import Detail from './src/Lab/Lab6/Detail';
import Lab6bai2 from './src/Lab/Lab6/Lab6bai2';
import Lab7 from './src/Lab/Lab7/Lab7';
import Lab8bai1 from './src/Lab/Lab8/Lab8bai1';
import ThongTin from './src/Lab/Lab8/ThongTin';
import SuaThongTin from './src/Lab/Lab8/SuaThongTin';
import Demo10 from './src/demo/Demo10';
import Lab4bai1 from './src/Lab/Lab4/Lab4';
import Favourite from './src/Lab/Lab7/Navigator/Favourite';
import Direct from './src/Lab/Lab7/Navigator/Direct';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
    
      <Stack.Navigator screenOptions={{headerShown:false}} >
        {/* <Stack.Screen name="Lab6bai1" component={Lab6bai1} options={{ headerShown: false }} />
        <Stack.Screen name="Detail" component={Detail} options={{ headerShown: false }} />
        <Stack.Screen name="Lab6bai2" component={Lab6bai2} options={{ headerShown: false }} /> */}
        <Stack.Screen name="Lab7" component={Lab7} options={{ headerShown: false }} />
        <Stack.Screen name="Lab8bai1" component={Lab8bai1}  />
        <Stack.Screen name="ThongTin" component={ThongTin}  />
        <Stack.Screen name="SuaThongTin" component={SuaThongTin}  />
        <Stack.Screen name="Lab4" component={Lab4bai1}  />
        <Stack.Screen name="Demo10" component={Demo10} />
        <Stack.Screen name="Favourite" component={Favourite}  />
        <Stack.Screen name="Direct" component={Direct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
