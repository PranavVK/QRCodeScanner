import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, TouchableOpacity, TextInput, Button} from 'react-native';
import { Dimensions } from 'react-native';
import { BoxShadow } from 'react-native-shadow';
import LinearGradient from 'react-native-linear-gradient';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class HomePage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ width: deviceWidth, height: deviceHeight / 4, backgroundColor: 'rgba(41,56,148,1)'}}>
        <Text style={styles.headerText}>This is home page TODO</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  headerText: {
    fontSize: 25, 
    fontWeight: '300',
    height:100,
    marginTop:200
  }
});

export default (HomePage);