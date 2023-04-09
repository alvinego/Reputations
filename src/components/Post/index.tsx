import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react';
import Video from 'react-native-video';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';

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
          <Text style={{fontSize: 20, color: 'white'}}>The Side Component</Text>
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