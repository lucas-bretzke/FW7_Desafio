import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#192436',
        display: 'flex',
        flexdirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

    urlFormContainer: {
        flex: 2,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
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

    containerInput: {
        width: '90%',
        marginHorizontal: 'auto',
    },

    label: {
        fontWeight: '600',
        color: 'white'
    },

    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 3,
        padding: 12,
        marginTop: 5,
        marginBottom: 12,
        fontSize: 16,
        backgroundColor: 'white'
    },

    containerButtons: {
        width: '100%',
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    containsListOfLinks: {
        flex: 1,
        width: '100%',
        borderWidth: 1,
        backgroundColor: 'white'
    }
})