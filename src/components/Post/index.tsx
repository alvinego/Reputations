import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import React, { useState } from 'react';
import Video from 'react-native-video';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Post = () => {

  const [paused, setPaused] = useState(false);

  const onPlayPausePress = () => {
    setPaused(!paused);
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback  onPress={onPlayPausePress}>
      <Video 
      source={{uri: 'https://www.datocms-assets.com/22581/1603987530-1-pixabay.mp4'}}
      style={styles.video}
      onError={(e :LoadError ) => console.log(e)}
      resizeMode={'cover'}
      repeat={true}
      paused={paused}
      />
      </TouchableWithoutFeedback>
      <View style={styles.ulcontainer}>
        <View style={styles.rightContainer}>
          <View style={styles.profilePictureContainer}>
            <Image style={styles.profilePicture} source={{uri: 'https://static.onecms.io/wp-content/uploads/sites/6/2020/06/16/JohnLegend_05_1161_G.jpg'}}/>
          </View>  
          <View style={styles.iconContainer}>
          <AntDesign name={'heart'} size={30} />
              <Text style={styles.statsLabel}>245</Text>
            </View>
            <View style={styles.iconContainer}>
            <FontAwesome name={'commenting'} size={30} color="white" />
              <Text style={styles.statsLabel}>245</Text>
            </View>
            <View style={styles.iconContainer}>
            <Fontisto name={'share-a'} size={25} color="white" />
              <Text style={styles.statsLabel}>245</Text>
            </View>
        </View>

        <View style={styles.bottomContainer}>
          <Text style={styles.handle}>@davidoadeleke</Text>
          <Text style={styles.description}>The many men Album</Text>
          <View style={styles.songRow}>
            <Entypo name={'beamed-note'} size={20} color='white'/>
            <Text style={styles.songName}> The RUNT </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Post