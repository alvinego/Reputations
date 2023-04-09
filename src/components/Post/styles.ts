import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    container: {
        width: '100%',
        height: Dimensions.get('window').height
        ,
    },
    ulcontainer: {
        height: '100%',
        justifyContent: 'flex-end',
    },
    rightContainer: {
        height: '100%',
        alignSelf: 'flex-end',
    },
    bottomContainer: {    
        padding: 10,
        paddingBottom: 30,
    },
    handle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '400',
        marginBottom: 5,
    },
    description: {
        color: '#fff',
        fontSize: 13,
        fontWeight: '300',
        marginBottom: 5,
    },
    songRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    songName: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '300',
        marginLeft: 5,
    }
 
});



export default styles
