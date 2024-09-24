import * as React from 'react';
import { StyleSheet, Text, Button, View, Alert, SafeAreaView, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import styles from '../css/edit-screen-css';
import * as ImagePicker from 'expo-image-picker';

export default function EditScreen({ route, navigation }) {
    const { firstName: initialFirstName, lastName: initialLastName, phoneNumber: initialPhoneNumber, email: initialEmail, facebookURL: initialFacebookURL, lineURL: initialLineURL, image: initialImage } = route.params || {};

    const [firstName, setFirstName] = React.useState(initialFirstName || '');
    const [lastName, setLastName] = React.useState(initialLastName || '');
    const [phoneNumber, setPhoneNumber] = React.useState(initialPhoneNumber || '');
    const [email, setEmail] = React.useState(initialEmail || '');
    const [facebookURL, setFacebookURL] = React.useState(initialFacebookURL || '');
    const [lineURL, setLineURL] = React.useState(initialLineURL || '');
    const [image, setImage] = React.useState(initialImage || null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
            base64: true,
        });

        if (!result.canceled) {
            setImage(result.assets[0].base64);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
                {image && (
                    <Image
                        source={{ uri: `data:image/jpeg;base64,${image}` }}
                        style={styles.profileImage}  
                    />
                )}
                <TouchableOpacity style={styles.button} onPress={pickImage}>
                    <Text style={styles.buttonText}>Upload Profile Picture</Text>
                </TouchableOpacity>
                
                {/* Other Input Fields */}
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
                            image,
                        })}
                    >
                        <Text style={styles.buttonText}>Update information</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
