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


    containerLogo: {
        flex: 1,
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#192436',
    },

    urlFormContainer: {
        flex: 2,
        width: '100%',
        alignItems: 'center',
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
        height: 50,
        borderWidth: 1,
        borderRadius: 3,
        padding: 12,
        marginTop: 5,
        marginBottom: 12,
        fontSize: 16,
        backgroundColor: 'white'
    },

    description: {
        width: '90%',
        justifyContent: 'flex-start'
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
    },

    clearContentButton: {
        position: 'absolute',
        right: '5%',
        bottom: '5%',
    }
})