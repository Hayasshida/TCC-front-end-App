import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Platform } from 'react-native';
import FormContent from './src/components/FormContent';

export default function App() {
  const isMobile = Platform.OS === 'android' || Platform.OS === 'ios'
  
  return (
    <ImageBackground
      source={isMobile ? require('./src/components/img/fundo-gradiente.png') : require('./src/components/img/fundo-gradiente.jpg') }
      style={styles.bgImage}  
    >
      <View style={styles.container}>
        <FormContent>
          
        </FormContent>
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: '6%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgImage:{
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
});
