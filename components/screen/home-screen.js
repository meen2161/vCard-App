import { Alert, Text, View, SafeAreaView, TouchableOpacity, Image, ScrollView, Share } from 'react-native';
import * as React from 'react';
import QRCode from 'react-native-qrcode-svg';
import styles from '../css/home-screen-css';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';

export default function HomeScreen({ route, navigation }) {
    const { firstName, lastName, phoneNumber, email, org, title, team, facebookURL, lineURL, image } = route.params || {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        org: '',
        title: '',
        team: '',
        facebookURL: '',
        lineURL: '',
        image: null,
    };

    let name = lastName + ";" + firstName + ";";
    let anyurl = "";
    let data = "BEGIN:VCARD\n";
    data += "VERSION:4.0\n";
    data += "ORG:" + org + "Team;" + team + "\n";
    data += "TITLE:" + title + "\n";
    data += "N:" + name + "\n";
    data += "TEL;TYPE=CELL:+66 " + phoneNumber + "\n";
    data += "EMAIL:" + email + "\n";
    data += "URL:" + facebookURL + "\n";
    data += "URL:" + lineURL + "\n";
    data += "URL:" + anyurl + "\n";
    data += "END:VCARD";

    const qrCodeRef = React.useRef(null);

    const saveQrToDisk = async () => {
        if (qrCodeRef.current) {
            qrCodeRef.current.toDataURL(async (data) => {
                const fileUri = `${FileSystem.cacheDirectory}qr-code.png`;

                await FileSystem.writeAsStringAsync(fileUri, data, {
                    encoding: FileSystem.EncodingType.Base64,
                });

                const { status } = await MediaLibrary.requestPermissionsAsync();
                if (status === 'granted') {
                    await MediaLibrary.createAssetAsync(fileUri);
                    Alert.alert('Success', 'Saved to gallery!');
                } else {
                    Alert.alert('Error', 'Permission denied');
                }
            });
        }
    };

    const shareQrCode = async () => {
        if (qrCodeRef.current) {
            qrCodeRef.current.toDataURL(async (data) => {
                const fileUri = `${FileSystem.cacheDirectory}qr-code.png`;

                await FileSystem.writeAsStringAsync(fileUri, data, {
                    encoding: FileSystem.EncodingType.Base64,
                });

                try {
                    await Share.share({
                        url: fileUri,
                        message: 'Here is my contact QR code!',
                    });
                } catch (error) {
                    Alert.alert('Error', 'Unable to share the QR code');
                }
            });
        }
    };

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
                    <Text style={styles.textStyle1}>{`${firstName} ${lastName}`} {'\n'}{'\n'} SCAN HERE{'\n'}TO VIEW MY CONTACT</Text>

                    <View style={styles.qrCodeContainer}>
                        {phoneNumber ? (
                            <QRCode
                                value={data}
                                size={300}
                                color="black"
                                getRef={qrCodeRef}
                                backgroundColor="#c8c8c8"
                            />
                        ) : (
                            <Text style={styles.errorText}>PLEASE ENTER PHONE NUMBER</Text>
                        )}
                    </View>

                    <View>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigation.navigate('Edit', {
                                firstName,
                                lastName,
                                phoneNumber,
                                email,
                                org,
                                title,
                                team,
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
                    <TouchableOpacity style={styles.footerButton} onPress={saveQrToDisk}>
                        <Text style={styles.footerButtonText}>SAVE QR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.footerButton} onPress={shareQrCode}>
                        <Text style={styles.footerButtonText}>SHARE QR</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
