import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View, Alert, SafeAreaView, TouchableOpacity } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QRCode from 'react-native-qrcode-svg';
import HomeScreen from './components/screen/home-screen';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerTitleStyle: {
          fontSize: 24,
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'vCard',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#354A5F',
              shadowColor: '#000',
              shadowOffset: { width: 1, height: 0.1 },
              shadowOpacity: 0,
              shadowRadius: 10,
              elevation: 5,
            },
            headerTitleStyle: {
              flex: 1,
              marginTop: 5,
              textAlign: 'center',
              color: '#fff',
              fontWeight: 'bold',
              textShadowColor: '#000',
              fontSize: 36,
              textShadowOffset: { width: 1, height: 1 },  // Set shadow position
              textShadowRadius: 2,
            },
            headerTintColor: '#fff',
          }}


        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

