import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView } from 'react-native';


export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Integrate</Text>
        <Image style={styles.logo} source={require('./assets/yin.png')} />
      </View>
      
      <View style={styles.navbar}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

  },
  header: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    zIndex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.88)',
    width: 600,
    height: 160,

  },
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#1c1c1c',
    width: 400,
    height: 90,
    position: 'absolute',
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
    height: 50
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
    justifyContent: 'center',
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
    marginTop: 120,
    marginBottom: 100,
  },
});
