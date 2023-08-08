import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faQrcode, faMoneyBillWave, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'; // Import FontAwesomeIcon only once

import LoginPage from './LoginPage';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';
import AddMoneyPage from './AddMoneyPage';
import WithdrawalPage from './WithdrawalPage';
import PriceIndicatePage from './PriceIndicatePage';
import BuySellPage from './BuySellPage';
import MorePage from './MorePage';

library.add(faQrcode, faMoneyBillWave, faChartLine);

type RootStackParamList = {
  Login: undefined;
  Home: { username: string; accountBalance: string };
  Profile: undefined;
  AddMoney: undefined;
  Withdrawal: undefined;
  PriceIndicate: undefined;
};


const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomePage}
      options={{
        headerTitle: 'Home',
        headerTitleAlign: 'center',
      }}
    />
    <Stack.Screen
      name="Profile"
      component={ProfilePage}
      options={{
        headerTitle: 'Profile',
        headerTitleAlign: 'center',
      }}
    />
    <Stack.Screen
      name="AddMoney"
      component={AddMoneyPage}
      options={{
        headerTitle: 'Add Money',
        headerTitleAlign: 'center',
      }}
    />
    <Stack.Screen
      name="Withdrawal"
      component={WithdrawalPage}
      options={{
        headerTitle: 'Withdrawal',
        headerTitleAlign: 'center',
      }}
    />
    <Stack.Screen
      name="PriceIndicate"
      component={PriceIndicatePage}
      options={{
        headerTitle: 'Price Indicate',
        headerTitleAlign: 'center',
      }}
    />
  </Stack.Navigator>
);

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={LoginPage} options={{ tabBarVisible: false }} />
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => <FontAwesomeIcon icon={faQrcode} size={size} color={color} />,
          }}
        />
        <Tab.Screen
          name="BuySell"
          component={BuySellPage}
          options={{
            tabBarLabel: 'Buy/Sell',
            tabBarIcon: ({ color, size }) => <FontAwesomeIcon icon={faMoneyBillWave} size={size} color={color} />,
          }}
        />
        <Tab.Screen
          name="More"
          component={MorePage}
          options={{
            tabBarLabel: 'More',
            tabBarIcon: ({ color, size }) => <FontAwesomeIcon icon={faChartLine} size={size} color={color} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;