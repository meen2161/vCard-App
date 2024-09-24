import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        ...StyleSheet.absoluteFillObject,  
    },
    textStyle: {
        fontSize: 24,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 26,
        textShadowColor: '#000',  
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
        lineHeight: 30,          
        fontWeight: 'bold',       
    },
    textStyle2: {
        fontSize: 24,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 26,
    },
    profileContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginBottom: 20, 
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 75,
        marginBottom: 20,
        marginRight: 20,
        alignSelf: 'center',
    },
    buttonContainer: {
        marginTop: 50,
    },
    button: {
        backgroundColor: '#4E5A77',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 10,
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
    qrCodeContainer: {
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