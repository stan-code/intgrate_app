import React, {useState, Component} from 'react';
import { StyleSheet, Text, View, Image, Alert, Button, SafeAreaView, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { NativeRouter, Switch, Route } from 'react-router-native'
import Gong from './assets/gong.mp3'
import { Howl, Howler} from 'howler'






export default class Clock extends Component{

  state = {
    timer: null,
    counter: 0,
  };

  startTimer = () => {

    let timer = setInterval(this.manageTimer, 1000);
    this.setState({ timer });

  }

  manageTimer = () => {

    var states = this.state

    if (states.counter === 0) {
      alert(`Congratulations! You've completed the session`)
      clearInterval(this.state.timer)
      this.setState({
        counter: this.state.counter
      })
    }
    else {
      this.setState({
        counter: this.state.counter - 1
      });

    }
  }

  fiveMin = () => {
    var states = this.state
    this.setState({
      counter: this.state.counter +5
    })
  }

  tenMin = () => {
    var states = this.state
    this.setState({
      counter: this.state.counter + 10
    })
  }

  fifteenMin = () => {
    var states = this.state
    this.setState({
      counter: this.state.counter + 15
    })
  }

  thirtyMin = () => {
    var states = this.state
    this.setState({
      counter: this.state.counter + 30
    })
  }

  oneHour = () => {
    var states = this.state
    this.setState({
      counter: this.state.counter + 60
    })
  }

  twoHour = () => {
    var states = this.state
    this.setState({
      counter: this.state.counter + 120
    })
  }

  clearTime = () => {
    var states = this.state
    this.setState({
      counter: this.state.counter === 0
    })
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

 
  // const [counter, setTime] = useState(0)

  // const fiveMin = () => {
  //   setTime( counter + 5
  // }

  // const tenMin = () => {
  //   setTime(time + 10)
  // }

  // const fifteenMin = () => {
  //   setTime(time + 15)
  // }
  
  // function timeIt(){
  //   setTime(time - 1)
  // }
  // setInterval(timeIt, 1000)

  
render(){
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <ScrollView><View style={styles.header}>
          <Text style={styles.title}>Breathe</Text>

          <Image style={styles.logo} source={require('./assets/breathe.png')} /></View>
<View style={styles.menu}></View>
<View style={styles.timeView}>
            <Text style={styles.timetext}>{this.state.counter} minutes</Text>

            <View>
              <Button
                title='START'
                onPress={() => this.startTimer()}
              />
              <Button
                title='CLEAR'
                onPress={() => this.clearTime()}
              />
            </View>
          </View>

          <View style={styles.options}>
            <TouchableOpacity onPress={this.fiveMin}>
              <View style={styles.optiontime}><Text style={styles.timetext}>5</Text></View></TouchableOpacity>
            <TouchableOpacity onPress={this.tenMin}>
              <View style={styles.optiontime}><Text style={styles.timetext}>10</Text></View></TouchableOpacity>
            <TouchableOpacity onPress={this.fifteenMin}>
              <View style={styles.optiontime}><Text style={styles.timetext}>15</Text></View></TouchableOpacity>
          </View>
          <View style={styles.options}>
            <TouchableOpacity onPress={this.thirtyMin}>
              <View style={styles.optiontime}><Text style={styles.timetext}>30</Text></View></TouchableOpacity>
            <TouchableOpacity onPress={this.oneHour}>
              <View style={styles.optiontime}><Text style={styles.timetext}>1h</Text></View></TouchableOpacity>
            <TouchableOpacity onPress={this.twoHour}>
              <View style={styles.optiontime}><Text style={styles.timetext}>2h</Text></View></TouchableOpacity>
          </View>

          <View style={styles.options}>
            <TouchableOpacity>
              <View style={styles.optionlarger}></View></TouchableOpacity>
          </View>
          <View style={styles.options}>
            <TouchableOpacity>
              <View style={styles.optionlarger}></View></TouchableOpacity>
          </View>
          <View style={styles.options}>
            <TouchableOpacity>
              <View style={styles.optionlarger}></View></TouchableOpacity>
          </View>
      
          
         
       
        </ScrollView>
      </SafeAreaView>
    </View>
  );
  }
}




const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flexDirection: 'column',
  },
  title: {
    color: 'white',
    fontSize: 40,
    textAlign: 'left',
    marginTop: 30,
    marginLeft: 20,


  },
  timetext: {
  color: 'white',
  fontSize: 40,
  textAlign: 'center',


},
  logo: {
    width: 50,
    height: 50,
    marginTop: 30,
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
    alignSelf: 'center'
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
  optiontime: {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  backgroundColor: '#121212',
  width: 100,
  height: 110,
  borderRadius: 30,
  marginLeft: 7,
  marginRight: 7,
  marginTop: 7,
  marginBottom: 7,
},
  menu: {
    marginTop: 0,
    marginBottom: 30,
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
  },
  timeView: {
    height: 200,
    width: 200,
    backgroundColor: 'black',
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 5,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 20
  },
})
;
