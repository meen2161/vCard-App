import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#6D698D',
        alignItems: 'center',
        justifyContent: 'center',
    },
    maginTop26: {
        marginTop: 26,

    },
    textStyle: {
        fontSize: 24,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 26,
    },
    buttonContainer: {
        marginTop: 50,
    },
    button: {
        backgroundColor: '#4E5A77',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 5,
        padding: 30,
        borderRadius: 10,
        backgroundColor: '#4E5A77',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
    },
    background: {
        ...StyleSheet.absoluteFillObject
    },
    qrCodeContainer: {
        //borderWidth: 2,
        //borderColor: '#FFF',
        padding: 30,
        borderRadius: 10,
        backgroundColor: '#6D698D',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
});

export default styles;
