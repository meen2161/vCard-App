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
        color:'#fff',
        textAlign:'center',
        marginBottom:26,
    },
    buttonContainer: {
        marginTop: 50,
    },
    button: {
        backgroundColor: '#f194ff',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
    },
    background: {
        ...StyleSheet.absoluteFillObject
    },
});

export default styles;
