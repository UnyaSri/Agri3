import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AddMoneyPage = () => {
  return (
    <View style={styles.container}>
      <Text>Add Money Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddMoneyPage;
