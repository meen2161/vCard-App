import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View, Alert, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native';
import * as React from 'react';
import QRCode from 'react-native-qrcode-svg';
import styles from '../css/home-screen-css';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen({ route, navigation }) {
    const { firstName, lastName, phoneNumber, email, facebookURL, lineURL, image } = route.params || {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        facebookURL: '',
        lineURL: '',
        image: null,
    };

    let title = "";
    let org = "";
    let name = lastName + ";" + firstName + ";";
    let anyurl = "";

    let data = "BEGIN:VCARD\n";
    data += "VERSION:4.0\n";
    data += "TITLE:" + title + "\n";
    data += "ORG:" + org + "\n";
    data += "N:" + name + "\n";
    data += "TEL;TYPE=CELL:+66 " + phoneNumber + "\n";
    data += "EMAIL:" + email + "\n";
    data += "URL:" + facebookURL + "\n";
    data += "URL:" + lineURL + "\n";
    data += "URL:" + anyurl + "\n";
    data += "END:VCARD";

    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient colors={['#354A5F', '#4E5A77', '#6D698D']} style={styles.background} />
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
                
                <View style={styles.profileContainer}>
                    {image && (
                        <Image
                            source={{ uri: `data:image/jpeg;base64,${image}` }}
                            style={styles.profileImage}  
                        />
                    )}
                    <Text style={styles.textStyle}>{`${firstName} ${lastName}`}</Text>
                    
                </View>

                <Text style={styles.textStyle}>Scan here{'\n'} to view my information</Text>
                
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
                            lineURL,
                            image,
                        })}
                    >
                        <Text style={styles.buttonText}>Edit information</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>

    );
}