import React from 'react';
import { View, StyleSheet } from 'react-native';
import TabBar from './src/components/TabBar';
import Header from './src/components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <TabBar/>
    </View>  
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'white',
  }
})
