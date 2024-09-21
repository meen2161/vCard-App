import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View, Alert, SafeAreaView, TouchableOpacity } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QRCode from 'react-native-qrcode-svg';
import styles from '../css/home-screen-css';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen({ route, navigation }) {
    const { firstName, lastName, phoneNumber, email, facebookURL, LineURL, } = route.params || {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        facebookURL: '',
        LineURL: '',
    };

    let title = "Student"; //Title on contact
    let org = "PSU"; //Organization name
    let name = lastName + ";" + firstName + ";" //Full name => "Lastname;Firstname;"
    let lineurl = ""; //Line URL
    let anyurl = ""; //Any URL

    let data = "BEGIN:VCARD\n";
    data += "VERSION:4.0\n";
    data += "TITLE:" + title + "\n";
    data += "ORG:" + org + "\n";
    data += "N:" + name + "\n"
    data += "TEL;TYPE=CELL:+66 " + phoneNumber + "\n";
    data += "EMAIL:" + email + "\n";
    data += "URL:" + facebookURL + "\n";
    data += "URL:" + lineurl + "\n";
    data += "URL:" + anyurl + "\n";
    data += "END:VCARD";

    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient
                colors={['#354A5F', '#4E5A77', '#6D698D']}
                style={styles.background}

            />
            <Text style={styles.textStyle}>Scan here{'\n'} to view my infomation</Text>
            <LinearGradient
                colors={['#354A5F', '#4E5A77', '#6D698D']}
                style={styles.qrCodeContainer}
            >
                <QRCode value={data} size={250} />
            </LinearGradient>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Edit', {
                        firstName,
                        lastName,
                        phoneNumber,
                        email,
                        facebookURL,
                        LineURL,
                    })}
                >
                    <Text style={styles.buttonText}>Edit infomation</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>

    );
}
