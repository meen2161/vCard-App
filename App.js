import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QRCode from 'react-native-qrcode-svg';

const Stack = createStackNavigator();

export default function App() {
  let name = "Kongrak;Thanawat;"

  let data ="BEGIN:VCARD\n";
  data += "VERSION:4.0\n";
  data += "TITLE:\n";
  data += "ORG:\n";
  data += "N:" + name + "\n"
  data += "TEL;TYPE=CELL:+66 0642649867\n";
  data += "EMAIL:\n";
  data += "URL:\n";
  data += "URL:\n";
  data += "URL:\n";
  data += "END:VCARD";

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your Hello!</Text>
      <StatusBar style="auto" />
      <View>
        <QRCode value={data}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
