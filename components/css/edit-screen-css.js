import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        //backgroundColor: '#6D698D',
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    input: {
        height: 50,
        flex: 1,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        fontSize: 20,
        width: '100%', 
    },
    label:{
        fontSize: 20,
        fontWeight: 'bold',
        color: "#4E5A77",
        marginHorizontal: 20,
        marginTop: 12,
        alignSelf: 'flex-start',
    },
    button: {
        width: 300,
        alignSelf:'center',
        paddingVertical: 12,
        paddingHorizontal: 24,
        padding: 30,

        marginTop:20,

        borderRadius: 5,
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
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,  
        marginBottom: 20,
        alignSelf: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
    },
});

export default styles;
