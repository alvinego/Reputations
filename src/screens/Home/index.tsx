import { View, Text } from 'react-native'
import React from 'react';
import Post from '../../components/Post';

const post1 ={
  id: 'p1',
  user: {
    id: 'u1',
    username: 'oloralorala',
    imageUri: 'https://static.onecms.io/wp-content/uploads/sites/6/2020/06/16/JohnLegend_05_1161_G.jpg',
  },
  description: 'the useless govenor of kogi',
  song: 'Davido-Fall',
  songImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl8yaCUPqhEbLjDoTviGTEJGpQX2iVsN_MjmcWHT7Ace8c-0Ouko5N2RqXvY1OFKUpSdA&usqp=CAU',
  likes: 123,
  comments: 33,
  shares: 541,
  videoUri: 'https://www.datocms-assets.com/22581/1603987530-1-pixabay.mp4',
};

const post2 ={
  id: 'p2',
  user: {
    id: 'u2',
    username: 'Omona',
    imageUri: 'https://media.gettyimages.com/id/1463262163/photo/tems-attends-the-65th-grammy-awards-on-february-05-2023-in-los-angeles-california.jpg?s=612x612&w=gi&k=20&c=-fK0bLznPrWLgvdsYkcJcY1gUzLUsiFIuSEn7R3qqT4=',
  },
  description: 'the useless govenor of Delta',
  song: 'Tems-Try Me',
  songImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTprPeXaCOt6E6fUtnKDGgtKMYyl--xSDyo0_wSmklwuOhzeqziHpSam0HpX5x0lIpKYf0&usqp=CAU',
  likes: 123,
  comments: 33,
  shares: 541,
  videoUri: 'https://twitter.com/i/status/1545364075378606082',
};


const Home = () => {
  return (
    <View>
      <Post post={post2}/>
    </View>
  )
};

export default Home