import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { NativeRouter, Switch, Route } from 'react-router-native'

export default function Brain() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <ScrollView><View style={styles.header}>
          <Text style={styles.title}>Reflect</Text>

          <Image style={styles.logo} source={require('./assets/yin.png')} /></View>
          <Image style={styles.icon} source={require('./assets/breathe.png')} />

          <View style={styles.menu}>
            <View style={styles.options}>
              <TouchableOpacity>
                <View style={styles.option}>
                  <Image style={styles.optionimage} source={require('./assets/clock.png')} />
                  <Text style={styles.optiontext}>timer</Text>
                </View></TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.option}>
                  <Image style={styles.optionimage} source={require('./assets/history.png')} />
                  <Text style={styles.optiontext}>history</Text>
                </View></TouchableOpacity>
            </View>

            <View style={styles.options}>
              <TouchableOpacity>
                <View style={styles.option}>
                  <Image style={styles.optionimage} source={require('./assets/group.png')} />
                  <Text style={styles.optiontext}>group</Text>
                </View></TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.option}>
                  <Image style={styles.optionimage} source={require('./assets/preferences.png')} />
                  <Text style={styles.optiontext}>preferences</Text>
                </View></TouchableOpacity>
            </View>

            <View style={styles.options}>

              <TouchableOpacity>
                <View style={styles.optionlarge}>
                  <Image style={styles.optionimage} source={require('./assets/butterfly.png')} />
                  <Text style={styles.optiontext}>begin the 10 week process</Text>
                </View></TouchableOpacity>
            </View>
            <View style={styles.options}>
              <TouchableOpacity>
                <View style={styles.optionlarger}></View></TouchableOpacity>
            </View>
            <View style={styles.options}>
              <TouchableOpacity>
                <View style={styles.optionlarger}></View></TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
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
    flex: 2,
    justifyContent: 'space-evenly',
    backgroundColor: 'rgba(0, 0, 0, 0.50)',
    width: 380,
    height: 100,
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
