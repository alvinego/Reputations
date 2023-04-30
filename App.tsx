/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import Navigation from './src/navigation';

const App = () => {
  /* const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
 */
  return (
    <>
    <StatusBar barStyle= 'light-content' /* {isDarkMode ? 'light-content' : 'dark-content'} */ />
    <SafeAreaView style={{ flex:0, backgroundColor: 'red' }} />
    <SafeAreaView style={{ backgroundColor:'red', flex: 1}}>
      <Navigation />
    </SafeAreaView>
    </>
  );
};

export default App;