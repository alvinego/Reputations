import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    videoPlayButton: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 100,
    },
    container: {
        width: '100%',
        height: Dimensions.get('window').height*0.45
        ,
    },
    ulcontainer: {
        height: '100%',
        justifyContent: 'flex-end',
    },
    rightContainer: {
        alignSelf: 'flex-end',
        justifyContent:  'space-between',
        height: 150,
        alignItems: 'center',
        marginBottom: 25,
    },
    bottomContainer: {    
        padding: 10,
        paddingBottom: 30,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
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
    },
    profilePictureContainer: {},
    profilePicture: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#fff',
        //marginRight: 10,
        marginBottom: 15,
    },
    iconContainer: {
        alignItems: 'center',
    },
    statsLabel: {
        color: '#fff',
        alignSelf: 'center',
        fontSize: 12,
    },
    songImage: {
        width: 35,
        height: 35,
        borderRadius: 25,
        borderWidth: 5,
        borderColor: '#4c4c4c',
        marginTop: 25,
    }
    

 
});



export default styles
