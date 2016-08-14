import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Component,
  TouchableOpacity,
  TextInput,
  Image
} from 'react-native';
import {styles, clr, INDIGO} from "../constants/styles";
import { Actions } from 'react-native-router-flux';


export default class Registration extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    var inputStyle = [innerStyle.input, styles.input];
    return (
        <View style={[innerStyle.mainView]}>
          <TextInput style={inputStyle}
                      placeholder="mail"
                      underlineColorAndroid={clr}
                      placeholderTextColor={clr}/>
          <TextInput  style={inputStyle}
                      placeholder="user name"
                      underlineColorAndroid={clr}
                      placeholderTextColor={clr}/>
          <TextInput  style={inputStyle}
                      placeholder="password"
                      underlineColorAndroid={clr}
                      placeholderTextColor={clr}/>
          <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>
                  registration
              </Text>
          </TouchableOpacity>
        </View>
    );
  }
}

const innerStyle = StyleSheet.create({
  backButton: {
    borderColor: '#ffffff'
  },
  registrationButton:{
    backgroundColor: clr
  },
  registrationLabel:{
    color: '#ffffff'
  },
  input: {
    color: clr,
    marginLeft: 30,
    marginRight: 30
  },
  mainView: {
    backgroundColor: INDIGO,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    top: 44
  },
  createAccount: {
    marginBottom: 50
  },
  loginLabel: {
    color: clr,
    fontSize: 24
  }
});
