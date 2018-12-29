/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, TouchableOpacity, TextInput, Button} from 'react-native';
import { Dimensions } from 'react-native';
import { BoxShadow } from 'react-native-shadow';
import LinearGradient from 'react-native-linear-gradient';

import { STYLE_CONSTANTS } from './Constants/Styles';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={{ width: deviceWidth, height: deviceHeight / 4, backgroundColor: 'rgba(41,56,148,1)'}} >
        <View style={styles.loginView}>

        <View style={{ height: deviceHeight / 7, justifyContent: "center", alignItems: "center"}} >
          <Text style={styles.headerText}> MyEvents</Text>
        </View>

        <View style={{ width: deviceWidth - 100, height: deviceHeight / 4, marginLeft: 10}}>
          <Text style={{marginTop:10, color: 'gray'}}>Username</Text>
          <TextInput style={styles.textField}/>
          <Text style={{marginTop:20, color: 'gray'}}>Password</Text>
          <TextInput style={styles.textField} secureTextEntry={true}/>
          <TouchableOpacity style={{ height: 30,width: 110, marginRight:1, marginTop:5, alignSelf: 'flex-end'}}>
          <Text style={{textAlign:'right', color: 'gray'}}>Forgot password</Text>
          </TouchableOpacity>
        </View>

        <View style={{ width: deviceWidth - 100, height: deviceHeight / 4, marginLeft: 10}}>
        <TouchableOpacity
            style={styles.loginButton}
            underlayColor='#fff' onPress={() => {
							this.props.navigator.push({
								screen: 'HomePage',
								navigatorStyle: {
									navBarBackgroundColor: 'rgba(232,236,244,1)',
									navBarNoBorder: true,
									navBarButtonColor: "black",
									drawUnderStatusBar: true,
									statusBarColor: 'transparent',
									statusBarTextColorScheme: 'dark',
									navBarHidden: true,
								},
							});
					}}>
            <Text style={styles.loginText}>LOGIN</Text>
         </TouchableOpacity>
         <TouchableOpacity
            style={styles.signupButton}
            underlayColor='#fff'>
            <Text style={styles.signupText}>Sign up</Text>
         </TouchableOpacity>
        </View>
        </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  loginView: {
    width: deviceWidth - 80,
    height: deviceHeight - 250,
    backgroundColor: 'rgba(255,255,255,1)',
    marginTop:125,
    marginLeft:40,
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowRadius: 20,
    shadowOffset: {
      height: 1,
      width: 1
    }
  },
  headerText: {
    fontSize: 25, 
    fontWeight: '300'
  },
  textField: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    height:35 ,
    textAlign:'left'
 },
 loginButton:{
  height: 40,
  backgroundColor:'rgba(139,230,62,1)',
  borderWidth: 1,
  borderColor: 'rgba(139,230,62,1)',
  justifyContent: 'center',
  shadowColor: "gray",
  shadowOpacity: 0.3,
  shadowRadius: 10,
  shadowOffset: {
    height: 1,
    width: 1
  }
},
signupButton:{
  height: 40,
  backgroundColor: 'white',
  borderWidth: 1,
  borderColor: '#fff',
  justifyContent: 'center'
},
loginText:{
    color:'#fff',
    textAlign:'center',
    paddingLeft : 10,
    paddingRight : 10
},
signupText:{
  color:'gray',
  textAlign:'center',
  paddingLeft : 10,
  paddingRight : 10
}

});

export default (App);