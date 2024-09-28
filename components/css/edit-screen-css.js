import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    input: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#c0c0c0',
        paddingVertical: 8, 
        paddingHorizontal: 20, 
        marginVertical: 8, 
        marginHorizontal: 20, 
        width: '90%', 
    },
    label: {
        fontSize: 18, 
        fontWeight: 'bold',
        color: "#000000",
        marginTop: 12,
        marginHorizontal: 20,
        alignSelf: 'flex-start',
    },
    button: {
        width: '90%',
        alignSelf:'center',
        paddingVertical: 12,
        paddingHorizontal: 24,
        padding: 30,

        marginTop:20,

        borderRadius: 5,
        borderRadius: 50,
        backgroundColor: '#000000',
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
        fontWeight: 'bold',
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20, 
    },
    circularButton: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#c8c8c8',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10, // Added spacing
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
        alignSelf: 'center',
    },
    plusButton: {
        position: 'absolute',
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#c0c0c0',
        justifyContent: 'center',
        alignItems: 'center',
        right: 10, 
        bottom: 10, 
    },
});

export default styles;
