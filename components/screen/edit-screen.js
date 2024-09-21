import * as React from 'react';
import { StyleSheet, Text, Button, View, Alert, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import styles from '../css/edit-screen-css';

export default function EditScreen({ route, navigation }) {

    const { firstName: initialFirstName, lastName: initialLastName, phoneNumber: initialPhoneNumber, email: initialEmail, facebookURL: initialFacebookURL } = route.params || {};

    const [firstName, setFirstName] = React.useState(initialFirstName || '');
    const [lastName, setLastName] = React.useState(initialLastName || '');
    const [phoneNumber, setPhoneNumber] = React.useState(initialPhoneNumber || '');
    const [email, setEmail] = React.useState(initialEmail || '');
    const [facebookURL, setFacebookURL] = React.useState(initialFacebookURL || '');
    
    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={setFirstName}
                placeholder="Firstname"
                value={firstName}
            />
            <TextInput
                style={styles.input}
                onChangeText={setLastName}
                placeholder="Lastname"
                value={lastName}
            />
            <TextInput
                style={styles.input}
                onChangeText={setPhoneNumber}
                value={phoneNumber}
                placeholder="Phone number"
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="Email"
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                onChangeText={setFacebookURL}
                value={facebookURL}
                placeholder="Facebook URL"
                keyboardType="url"
            />
            <Button
                title="Save and Go Back"
                onPress={() => {
                    // Pass data back to the HomeScreen (or any other screen)
                    navigation.navigate('Home', {
                        firstName,
                        lastName,
                        phoneNumber,
                        email,
                        facebookURL,
                    });
                }}
            />
        </SafeAreaView>
        // <View style={styles.container}>
        //     <Text style={styles.title}>Edit Your Information</Text>
        //     {/* Add any additional UI for editing here */}
        //     <Button
        //         title="Go Back"
        //         onPress={() => navigation.goBack()}
        //     />
        // </View>
    );
}