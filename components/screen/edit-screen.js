import * as React from 'react';
import { StyleSheet, Text, Button, View, Alert, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import styles from '../css/edit-screen-css';

export default function EditScreen({ route, navigation }) {

    const { firstName: initialFirstName, lastName: initialLastName,
        phoneNumber: initialPhoneNumber, email: initialEmail,
        facebookURL: initialFacebookURL, lineURL: initialLineURL } = route.params || {};

    const [firstName, setFirstName] = React.useState(initialFirstName || '');
    const [lastName, setLastName] = React.useState(initialLastName || '');
    const [phoneNumber, setPhoneNumber] = React.useState(initialPhoneNumber || '');
    const [email, setEmail] = React.useState(initialEmail || '');
    const [facebookURL, setFacebookURL] = React.useState(initialFacebookURL || '');
    const [lineURL, setLineURL] = React.useState(initialLineURL || '');

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.label}>First name</Text>
            <TextInput
                style={styles.input}
                onChangeText={setFirstName}
                placeholder="Firstname"
                value={firstName}
            />
            <Text style={styles.label}>Last name</Text>
            <TextInput
                style={styles.input}
                onChangeText={setLastName}
                placeholder="Lastname"
                value={lastName}
            />
            <Text style={styles.label}>Phone number</Text>
            <TextInput
                style={styles.input}
                onChangeText={setPhoneNumber}
                value={phoneNumber}
                placeholder="Phone number"
                keyboardType="number-pad"
            />
            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="Email"
                keyboardType="email-address"
            />
            <Text style={styles.label}>Facebook URL</Text>
            <TextInput
                style={styles.input}
                onChangeText={setFacebookURL}
                value={facebookURL}
                placeholder="Facebook URL"
                keyboardType="url"
            />
            <Text style={styles.label}>Line URL</Text>
            <TextInput
                style={styles.input}
                onChangeText={setLineURL}
                value={lineURL}
                placeholder="Line URL"
                keyboardType="url"
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Home', {
                        firstName,
                        lastName,
                        phoneNumber,
                        email,
                        facebookURL,
                        lineURL,
                    })}
                >
                    <Text style={styles.buttonText}>Update infomation</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}