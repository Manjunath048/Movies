
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Movies from './src/screens/Movies';





const App = () => {

  return (
    <SafeAreaView style={{ backgroundColor: '#ffffff', height: '100%' }} >
      <Movies />
    </SafeAreaView>
  );
};



export default App;
