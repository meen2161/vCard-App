import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View, Alert, SafeAreaView, TouchableOpacity } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QRCode from 'react-native-qrcode-svg';
import styles from '../css/home-screen-css';
import { LinearGradient } from 'expo-linear-gradient';


const Stack = createStackNavigator();

export default function HomeScreen() {
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
        <SafeAreaView style={styles.container}>
            <LinearGradient
                // Background Linear Gradient
                colors={['#354A5F', '#4E5A77','#6D698D']}
                style={styles.background}

            />
            <Text style={styles.textStyle}>Scan here{'\n'} to view my infomation</Text>
            <View>
                <QRCode value={data} size={250} />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => Alert.alert('Button pressed')}
                >
                    <Text style={styles.buttonText}>Edit infomation</Text>
                </TouchableOpacity>
            </View>
            
        </SafeAreaView>

    );
}
