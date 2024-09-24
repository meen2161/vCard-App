import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        ...StyleSheet.absoluteFillObject,  // ให้พื้นหลังแสดงเต็มจอ
    },
    textStyle: {
        fontSize: 24,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 26,
    },
    profileContainer: {
        flexDirection: 'row', // จัดรูปภาพและชื่อให้อยู่ในแถวเดียวกัน
        alignItems: 'center', // จัดให้อยู่ตรงกลางในแนวตั้ง
        justifyContent: 'center', // จัดให้อยู่ตรงกลางในแนวนอน
        marginBottom: 20, // เพิ่มระยะห่างจากส่วนอื่น
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

