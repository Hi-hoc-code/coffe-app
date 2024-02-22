import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Demo9 = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View>
      <View style={styles.passwordContainer}>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Nhập mật khẩu"
          secureTextEntry={!showPassword}
          style={styles.tipStyle}
        />
        <TouchableOpacity onPress={toggleShowPassword} style={styles.eyeIcon}>
          <Image
            source={showPassword ? require('../../src/image/close.png') : require('../../src/image/hide.png')}
            style={styles.iconImage}
          />
        </TouchableOpacity>
      </View>
      {/* Visible password input */}
      {showPassword && (
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Nhập mật khẩu"
          style={[styles.tipStyle, styles.visiblePasswordInput]}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  tipStyle: {
    width: '80%',
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    paddingLeft: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    marginTop: 10,
  },
  eyeIcon: {
    marginLeft: -30,
    marginRight: 10,
  },
  iconImage: {
    width: 20,
    height: 20,
  },
  visiblePasswordInput: {
    marginTop: 10, // Adjust the margin as needed
    borderColor: 'transparent', // Make the border transparent
  },
});

export default Demo9;
