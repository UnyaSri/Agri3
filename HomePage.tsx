import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface HomePageProps {
  route: {
    params: {
      username: string;
      accountBalance: string;
    };
  };
}

const HomePage: React.FC<HomePageProps> = ({ route }) => {
  const { user, accountBalance } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {user}!</Text>
      <Text style={styles.balance}>Account Balance: £{accountBalance}</Text>
      <Text style={styles.message}>You are now logged in and can use the app.</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  balance: {
    fontSize: 20,
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default HomePage;
