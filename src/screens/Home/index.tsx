import { View, FlatList, Dimensions} from 'react-native'
import React from 'react';
import Post from '../../components/Post';
import posts from '../../data/posts';


const Home = () => {
  return (
    <View>
      <FlatList
      data={posts}
      renderItem={({item}) => <Post post={item}/>}
      showsVerticalScrollIndicator={false}
      snapToInterval={Dimensions.get('window').height*1}
      snapToAlignment='start'
      decelerationRate={'fast'}
       />
    </View>
  )
};

export default Home