import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'

const PostStats = () => {
  return (
    <View style={styles.statsContainer}>
      <View >
        <View>
        <Text> Fashola Babatunde </Text>
        <Text> Raji </Text>
        {/*  */}
        </View>
        <View>
        <Text> Governor 2009-2015 </Text>
        </View>
        <Text> The ExGovernor of Lagos </Text>
        
      </View>
      <View>
        <Text> Slaps: 9657 </Text>
        <Text> Salutes: 45</Text>
        <Text> Verdict: Villian </Text>
        <Text> RATING: 4.5 </Text>
      </View>
    </View>
  )
}

export default PostStats