import React from 'react';
import { View, StyleSheet } from 'react-native';
import Favourite from './Favourite'; 

const ParentComponent = () => {
  const handleSubmit = data => {
    // Handle the submitted data here
    console.log('Submitted data:', data);
  };

  return (
    <View style={styles.container}>
      <Favourite onSubmit={handleSubmit} /> {/* Pass the handleSubmit function as prop */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default ParentComponent;
