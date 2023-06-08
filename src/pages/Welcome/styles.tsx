import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#192436'
    },
    containerLogo: {
        flex: 2.5,
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
    containerBox: {
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
    containerBtn: {
        position: 'absolute',
        alignSelf: 'center',
        bottom: '20%',
        alignItems: 'center',
        justifycontent: 'center'
    },
})