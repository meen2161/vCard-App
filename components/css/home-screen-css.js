import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    cardContainer: {
        backgroundColor: '#c8c8c8',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        position: 'relative',
        marginTop: 100,
        textAlign: 'center',
    },
    profileContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        position: 'absolute',
        top: -60,
        zIndex: 1,
        borderWidth: 4,
        borderColor: '#c8c8c8',
        backgroundColor: '#c8c8c8',
    },
    textStyle: {
        fontSize: 18,
        color: '#000000',
        textAlign: 'center',
        marginBottom: 10,
    },
    textStyle1: {
        fontSize: 18,
        color: '#000000',
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 10,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
    },

    qrCodeContainer: {
        padding: 20,
        borderRadius: 10,
        marginBottom: 10,
        backgroundColor: '#c8c8c8',
    },
    button: {
        backgroundColor: '#000000',
        paddingVertical: 10,
        paddingHorizontal: 82,
        borderRadius: 5,
        marginTop: 10,
        textAlign: 'center',
        alignSelf: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    footer: {
        flexDirection: 'row',
        backgroundColor: '#000',
        width: '100%',
        paddingBottom: 0,
        marginTop: 0,
    },
    footerButton: {
        flex: 1,
        padding: 15,
        alignItems: 'center',
    },
    footerButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    errorText: {
        color: 'red',
        fontSize: 30,
        textAlign: 'center',
        fontWeight:'bold',
        textDecorationLine:'underline',
        marginVertical: 100,
    },
});

export default styles;
