import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Lab6bai1 from './Lab6bai1';
import Detail from './Detail';
import Article from './Drawer/Article';
import Chat from './Drawer/Chat';
import Setting from './Drawer/Setting';
import Help from './Drawer/Help';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <LinearGradient
        style={styles.drawerContentPart1}
        colors={['#026466', '#cfdc00']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}>
        <View>
          <Image source={{ uri: 'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/366951547_963873168001490_5844081063537264814_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHBtbESaCeGN5FmqYgAW23d78uKUXrriUfvy4pReuuJRxaWHoIjyBVJ78HnvORuj4JH0qL6CxPfq5BPtH9yPJrD&_nc_ohc=CY-4CWmUueEAX95FGxJ&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfDFhVm_tCVXuGXmACfp0XwK9R2qFVZlz73GAusxAYAb4Q&oe=65BC3773' }} style={styles.image} />
          <Text style={styles.gradientText}>Admin</Text>
          <Text style={styles.textgmail}>Admin123@gmail.com</Text>
        </View>
      </LinearGradient>
      <View style={styles.drawerContentPart2}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
}

function Lab6bai2(props) {
  const { navigation } = props;
  return (
    // <NavigationContainer independent>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen
          name="Home"
          component={Lab6bai1}
          options={{
            drawerLabel: 'Home',
            drawerIcon: ({ size, color }) => (
              <Image
                source={require('./../../image/home.png')}
                style={{ width: size, height: size }}
              />
            ),
            drawerActiveBackgroundColor: 'light-blue',
            drawerContentStyle: {
              backgroundColor: '#fff',
              color: '#FFA500',
            },
          }}
        />
        <Drawer.Screen
          name="Article"
          component={Article}
          options={{
            drawerLabel: 'Article',
            drawerIcon: ({ size, color }) => (
              <Image
              source={require('./../../image/ic_article.png')}
                style={{ width: size, height: size }}
              />
            ),
            drawerActiveBackgroundColor: 'light-blue',
            drawerContentStyle: {
              backgroundColor: '#fff',
              color: '#FFA500',
            },
          }}
        />
        <Drawer.Screen
          name="Chat"
          component={Chat}
          options={{
            drawerLabel: 'Chat',
            drawerIcon: ({ size, color }) => (
              <Image
              source={require('./../../image/chat.png')}
                style={{ width: size, height: size }}
              />
            ),
            drawerActiveBackgroundColor: 'light-blue',
            drawerContentStyle: {
              backgroundColor: '#fff',
              color: '#FFA500',
            },
          }}
        />
        <Drawer.Screen
          name="Setting"
          component={Setting}
          options={{
            drawerLabel: 'Setting',
            drawerIcon: ({ size, color }) => (
              <Image
              source={require('./../../image/settings.png')}
                style={{ width: size, height: size }}
              />
            ),
            drawerActiveBackgroundColor: 'light-blue',
            drawerContentStyle: {
              backgroundColor: '#fff',
              color: '#FFA500',
            },
          }}
        />
        <Drawer.Screen
          name="Help"
          component={Help}
          options={{
            drawerLabel: 'Help',
            drawerIcon: ({ size, color }) => (
              <Image
              source={require('./../../image/help-web-button.png')}
                style={{ width: size, height: size }}
              />
            ),
            drawerActiveBackgroundColor: 'light-blue',
            drawerContentStyle: {
              backgroundColor: '#fff',
              color: '#FFA500',
            },
          }}
        />
        <Drawer.Screen
          name="Detail"
          component={Detail}
          options={{
            drawerLabel: 'Detail',
            drawerIcon: ({ size, color }) => (
              <Image
              source={require('./../../image/star.png')}
                style={{ width: size, height: size }}
              />
            ),
            drawerActiveBackgroundColor: 'light-blue',
            drawerContentStyle: {
              backgroundColor: '#fff',
              color: '#FFA500',
            },
          }}
        />
      </Drawer.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawerContentPart1: {
    padding: 20,
    bottom: 10,
  },
  drawerContentPart2: {},
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  gradientText: {
    color: '#bd081c',
    fontSize: 18,
    marginTop: 20,
    fontWeight: 'bold',
  },
  textgmail: {
    color: 'white',
    fontSize: 14,
    marginTop: 5,
  },
});

export default Lab6bai2;
