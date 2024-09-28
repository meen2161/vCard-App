import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native';
import * as React from 'react';
import QRCode from 'react-native-qrcode-svg';
import styles from '../css/home-screen-css';

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
        <SafeAreaView style={[styles.container, { backgroundColor: '#262525' }]}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                <View style={styles.cardContainer}>
                    
                    {image && (
                        <Image
                            source={{ uri: `data:image/jpeg;base64,${image}` }}
                            style={styles.profileImage}
                        />
                    )}
                    <Text style={styles.textStyle1}>{`${firstName} ${lastName}`} {'\n'}{'\n'} Scan here{'\n'} to view my information</Text>

                    <View style={styles.qrCodeContainer}>
                    <QRCode
                            value={data}
                            size={300}
                            color="black" 
                            backgroundColor="#c8c8c8" 
                        />
                    </View>

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
                            <Text style={styles.buttonText}>EDIT INFORMATION</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.footer}>
                    <TouchableOpacity style={styles.footerButton}>
                        <Text style={styles.footerButtonText}>SAVE QR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.footerButton}>
                        <Text style={styles.footerButtonText}>SHARE QR</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}