import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QRCode from 'react-native-qrcode-svg';

const Stack = createStackNavigator();

export default function App() {
  let title = ""; //Title on contact
  let org = ""; //Organization name
  let name = "Lastname;Firstname;" //Full name => "Lastname;Firstname;"
  let tel = ""; //Telephone number
  let email = ""; //Email address
  let facebookurl = ""; //Facebook URL
  let lineurl = ""; //Line URL
  let anyurl = ""; //Any URL

  let data = "BEGIN:VCARD\n";
  data += "VERSION:4.0\n";
  data += "TITLE:" + title + "\n";
  data += "ORG:" + org + "\n";
  data += "N:" + name + "\n"
  data += "TEL;TYPE=CELL:+66 " + tel + "\n";
  data += "EMAIL:" + email + "\n";
  data += "URL:" + facebookurl + "\n";
  data += "URL:" + lineurl + "\n";
  data += "URL:" + anyurl + "\n";
  data += "END:VCARD";

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your Hello!</Text>
      <StatusBar style="autodwa" />
      <View>
        <QRCode value={data} />
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
