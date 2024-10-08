import * as React from 'react';
import { Text, SafeAreaView, TouchableOpacity, TextInput, ScrollView, Image, View, KeyboardAvoidingView, Platform } from 'react-native';
import styles from '../css/edit-screen-css';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function EditScreen({ route, navigation }) {
    const { firstName: initialFirstName, lastName: initialLastName, phoneNumber: initialPhoneNumber, email: initialEmail,
        facebookURL: initialFacebookURL, lineURL: initialLineURL, image: initialImage, org: initialORG, title: initialTitle,
        team: initialTeam } = route.params || {};
    const [firstName, setFirstName] = React.useState(initialFirstName || '');
    const [lastName, setLastName] = React.useState(initialLastName || '');
    const [phoneNumber, setPhoneNumber] = React.useState(initialPhoneNumber || '');
    const [email, setEmail] = React.useState(initialEmail || '');
    const [facebookURL, setFacebookURL] = React.useState(initialFacebookURL || '');
    const [lineURL, setLineURL] = React.useState(initialLineURL || '');
    const [org, setOrg] = React.useState(initialORG || null);
    const [title, setTitle] = React.useState(initialTitle || null);
    const [team, setTeam] = React.useState(initialTeam || null);
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
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
                keyboardVerticalOffset={100}
            >
                <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.header}>INFORMATION</Text>
                    <View style={styles.imageContainer}>
                        <TouchableOpacity onPress={pickImage}>
                            {image ? (
                                <Image
                                    source={{ uri: `data:image/jpeg;base64,${image}` }}
                                    style={styles.profileImage}
                                />
                            ) : (
                                <View style={styles.circularButton}>
                                    <Icon name="user" size={50} color="white" />
                                </View>
                            )}
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.plusButton} onPress={pickImage}>
                            <Icon name="plus" size={20} color="white" />
                        </TouchableOpacity>
                    </View>
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
                    <Text style={styles.label}>Phone number <Text style={styles.star}>*</Text></Text>
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
                    <Text style={styles.label}>ORG</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setOrg}
                        value={org}
                        placeholder="Name of the organization"
                    />
                    <Text style={styles.label}>TITLE</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setTitle}
                        value={title}
                        placeholder="Specifies the job title"
                    />
                    <Text style={styles.label}>TEAM</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setTeam}
                        value={team}
                        placeholder="Unit(s) of the organization"
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
                    <View>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigation.navigate('Home', {
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
                            <Text style={styles.buttonText}>UPDATE INFORMATION</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView >
    );
}
