import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfilePage = () => {
  // Dummy user data (replace with your actual user data)
  const userData = {
    picture: require('./profilepic.jpg'), // Replace with actual path to the picture
    name: 'John Doe',
    address: '123 Main Street, City, Country',
    id: '1234567890',
    issueDate: '01/01/2023',
  };

  return (
    <View style={styles.container}>
      <Image source={userData.picture} style={styles.profilePicture} />
      <Text style={styles.label}>Name:</Text>
      <Text style={styles.text}>{userData.name}</Text>
      <Text style={styles.label}>Address:</Text>
      <Text style={styles.text}>{userData.address}</Text>
      <Text style={styles.label}>ID:</Text>
      <Text style={styles.text}>{userData.id}</Text>
      <Text style={styles.label}>Issue Date:</Text>
      <Text style={styles.text}>{userData.issueDate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5F6EA',
    padding: 20,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 15,
  },
});

export default ProfilePage;
