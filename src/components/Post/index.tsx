import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import React, { useState } from 'react';
import Video from 'react-native-video';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Post = (props: any) => {
  
  const { post } = props;

  const [paused, setPaused] = useState(false);

  const onPlayPausePress = () => {
    setPaused(!paused);
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback  onPress={onPlayPausePress} style={styles.videoPlayButton}>
        <View>
      <Video 
      source={{uri: post.videoUri}}
      style={styles.video}
      onError={(e :LoadError ) => console.log(e)}
      resizeMode={'cover'}
      repeat={true}
      paused={paused}
      />
      
      <View style={styles.ulcontainer}>
        <View style={styles.rightContainer}>
          <View style={styles.profilePictureContainer}>
            <Image style={styles.profilePicture} source={{uri: post.user.imageUri}}/>
          </View>  
          <View style={styles.iconContainer}>
          <AntDesign name={'heart'} size={30} />
              <Text style={styles.statsLabel}> {post.likes} </Text>
            </View>
            <View style={styles.iconContainer}>
            <FontAwesome name={'commenting'} size={30} color="white" />
              <Text style={styles.statsLabel}> {post.comments} </Text>
            </View>
            <View style={styles.iconContainer}>
            <Fontisto name={'share-a'} size={25} color="white" />
              <Text style={styles.statsLabel}> {post.shares} </Text>
            </View>
        </View>

        <View style={styles.bottomContainer}>
          <View>
          <Text style={styles.handle}>@{post.user.username}</Text>
          <Text style={styles.description}>{post.description}</Text>
          <View style={styles.songRow}>
            <Entypo name={'beamed-note'} size={20} color='white'/>
            <Text style={styles.songName}> {post.song} </Text>
          </View>
          </View>
          <Image style={styles.songImage} source={{uri: post.songImage}}/>
        </View>
        </View>
      </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

export default Post