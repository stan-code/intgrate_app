import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView } from 'react-native';
import {NativeRouter, Switch, Route} from 'react-router-native'
import Home from './Home'
export default function App() {
  return (
    <NativeRouter>
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.title}>Integrate</Text>
      <Image style={styles.logo} source={require('./assets/yin.png')}/>
      </View>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.menu}>
        <View style={styles.options}>
              <Route exact path='/' component={Home}>
                <View style={styles.option}>
                <Image style={styles.optionimage} source={require('./assets/clock.png')} />
                <Text style={styles.optiontext}>timer</Text>
                </View></Route>
        <View style={styles.option}>
                <Image style={styles.optionimage} source={require('./assets/history.png')} />
                <Text style={styles.optiontext}>history</Text>
        </View>
        </View>

      <View style={styles.options}>
        <View style={styles.option}>
                <Image style={styles.optionimage} source={require('./assets/group.png')} />
                <Text style={styles.optiontext}>group</Text>
        </View>
        <View style={styles.option}>
                <Image style={styles.optionimage} source={require('./assets/preferences.png')} />
                <Text style={styles.optiontext}>preferences</Text>
        </View>
      </View>

      <View style={styles.options}>
        <View style={styles.optionlarge}>
                <Image style={styles.optionimage} source={require('./assets/butterfly.png')} />
                <Text style={styles.optiontext}>begin the 10 week process</Text>
        </View>
      </View>
      <View style={styles.options}>
        <View style={styles.optionlarger}></View>
      </View>
            <View style={styles.options}>
              <View style={styles.optionlarger}></View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <View style={styles.navbar}>

      </View>
    </View>
    </NativeRouter>
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
