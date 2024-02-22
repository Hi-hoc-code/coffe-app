import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Navigator/Home';
import Call from './Navigator/Call';
import Article from './Navigator/Article';
import Setting from './Navigator/Settings';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const homeIcon = <Entypo name="home" size={20} color="black" />;
const articleIcon = <MaterialIcons name="article" size={20} color="black" />;
const callIcon = <Ionicons name="call" size={20} color="black" />;
const settingsIcon = <AntDesign name="setting" size={20} color="black" />;

const renderLabel = ({ focused, color, children }) => (
  <Text style={{ color: focused ? (color || '#ff6c22') : 'black' }}>{children}</Text>
);

const Tab = createBottomTabNavigator();

const Lab7 = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#ff6c22',
        inactiveTintColor: 'black',
        headerShown: false,
        tabBarLabelStyle: {
          flexDirection: 'row',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => homeIcon,
          tabBarLabel: props => renderLabel(props),
        }}
      />
      <Tab.Screen
        name="Article"
        component={Article}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => articleIcon,
          tabBarLabel: props => renderLabel(props),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Call}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => callIcon,
          tabBarLabel: props => renderLabel(props),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Setting}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => settingsIcon,
          tabBarLabel: props => renderLabel(props),
        }}
      />
    </Tab.Navigator>
  );
};

export default Lab7;
