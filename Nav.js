import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { NativeRouter, Switch, Route } from 'react-router-native'

export default function Nav({history}) {
  return (


<View style={styles.navbar}>

  <TouchableOpacity onPress={() => history.push('/breathe')}>
    <View style={styles.navPic}>
      <Image style={styles.navimage} source={require('./assets/breathe.png')} /></View></TouchableOpacity>

      <TouchableOpacity onPress={() => history.push('/brain')}>
    <View style={styles.navPic}>
      <Image style={styles.navimage} source={require('./assets/brain.png')} /></View></TouchableOpacity>

      <TouchableOpacity onPress={() => history.push('/book')}>
    <View style={styles.navPic}>
      <Image style={styles.navimage} source={require('./assets/book.png')} /></View></TouchableOpacity>

      <TouchableOpacity onPress={() => history.push('/heart')}>
    <View style={styles.navPic}>
      <Image style={styles.navimage} source={require('./assets/heart.png')} /></View></TouchableOpacity>

</View>

  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flexDirection: 'column',
  },
  title: {
    color: 'white',
    fontSize: 60,
    textAlign: 'left',
    marginTop: 80,
    marginLeft: 20,


  },
  logo: {
    width: 70,
    height: 70,
    marginTop: 80,
    marginLeft: 10,
    resizeMode: 'contain',

  },
  icon: {
    width: 110,
    height: 90,
    marginLeft: 25,
    resizeMode: 'contain',

  },
  header: {
    display: 'flex',
    flexDirection: 'row',
  },
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'black',
    width: 380,
    height: 100,
    position: 'absolute',
    left: 0,
    bottom: 0,

  },
  options: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "center",
    alignContent: 'center',
  },
  option: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    width: 160,
    height: 100,
    borderRadius: 30,
    marginLeft: 7,
    marginRight: 7,
    marginTop: 7,
    marginBottom: 7,
  },
  optionimage: {
    width: 50,
    height: 50,
    resizeMode: 'contain'
  },
  optiontext: {
    color: 'white',
    marginTop: 10,
    fontFamily: 'Helvetica Neue',
    fontSize: 15
  },
  optionlarge: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    width: 325,
    height: 100,
    borderRadius: 30,
    marginLeft: 7,
    marginRight: 7,
    marginTop: 7,
    marginBottom: 7,
  },
  optionlarger: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#121212',
    width: 325,
    height: 200,
    borderRadius: 30,
    marginLeft: 7,
    marginRight: 7,
    marginTop: 7,
    marginBottom: 7,
  },
  menu: {
    marginTop: 30,
    marginBottom: 100,
  },
  navimage: {
    width: 30,
    height: 30,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    resizeMode: 'contain',
  },
  navpic: {
    width: 50,
    height: 30,
  }
});
