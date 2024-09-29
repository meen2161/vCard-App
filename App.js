import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View, Alert, SafeAreaView, TouchableOpacity } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/screen/home-screen';
import EditScreen from './components/screen/edit-screen';
import appStyles from './components/css/App-css';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: appStyles.headerTitleStyle,
          headerStyle: appStyles.headerStyle,            
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'vCard',
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Edit"
          component={EditScreen}
          options={{
            title: 'vCard',
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

