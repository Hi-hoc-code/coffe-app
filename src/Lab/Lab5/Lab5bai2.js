import React from 'react';
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const Lab5bai2 = ({ navigation }) => {
  const handleGetStartedPress = () => {
    navigation.navigate('Lab5bai3');
  };

  return (
    <View style={styles.container}>
       <StatusBar backgroundColor="#ff6347" barStyle="light-content" />
      <ImageBackground
        style={styles.image}
        source={require('../../image/back.jpg')}>
        <View style={styles.details}>
          <Text style={styles.text}>
            Discover{'\n'}
            the World with Us
          </Text>
          <Text style={styles.text2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </Text>
          <View style={styles.contaibutton}>
            <TouchableOpacity
              style={styles.button}
              onPress={handleGetStartedPress}>
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  details: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    padding:20,
    paddingEnd: 20,
  },
  text: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  text2: {
    fontSize: 16,
    color: 'white',
  },
  contaibutton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    width: '40%',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 13,
    color: 'black',
    fontWeight: 'normal',
  },
});

export default Lab5bai2;
