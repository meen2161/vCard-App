import { StyleSheet } from 'react-native';

export default appStyles = StyleSheet.create({
    headerStyle: {
        backgroundColor: '#000000',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 0.1 },
        shadowOpacity: 0,
        shadowRadius: 10,
        elevation: 5,
        
    },
    headerTitleStyle: {
        flex: 1,
        marginTop: 5,
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        textShadowColor: '#000',
        fontSize: 36,
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
});