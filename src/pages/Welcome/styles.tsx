import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#192436'
    },
    containerLogo: {
        flex: 2,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#192436',
    },
    title: {
        fontSize: 26,
        color: 'white',
        marginLeft: 10,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#023696',
        paddingVertical: 12,
    },
    containerForm: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '4%',
        paddingEnd: '4%',
    },
    desc1: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 22,
        marginBottom: 12,
    },
    desc2: {
        fontSize:17,
    },
    button: {
        position: 'absolute',
        backgroundColor: '#023696',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '12%',
        alignItems: 'center',
        justifycontent: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    }
})