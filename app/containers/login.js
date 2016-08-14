import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Component,
  TouchableOpacity,
  TextInput,
  StatusBar
} from 'react-native';
import {styles, clr, INDIGO} from "../constants/styles";
import { Actions } from 'react-native-router-flux';


export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
 //<StatusBar backgroundColor={INDIGO}/>
    var inputStyle = [innerStyle.input, styles.input];
    return (
      <View style={innerStyle.mainView}>

        <View style={[styles.container]}>
          <TextInput style={inputStyle}
                      placeholder="login"
                      underlineColorAndroid={INDIGO}
                      placeholderTextColor={INDIGO}
                      selectionColor={'red'}/>
          <TextInput  style={inputStyle}
                      placeholder="password"
                      underlineColorAndroid={INDIGO}
                      placeholderTextColor={INDIGO}/>
          <TouchableOpacity style={[styles.button, innerStyle.button]}
            onPress={Actions.newsfeed}>
            <Text style={[styles.buttonText, innerStyle.buttonText]}>
              Log in
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>
              Forgot your password?
            </Text>
          </TouchableOpacity>
        </View>
        <View style={innerStyle.createAccount}>
          <TouchableOpacity onPress={Actions.registration}>
          <Text style={innerStyle.loginLabel}>create new account</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const innerStyle = StyleSheet.create({
  button:{
    borderColor: INDIGO
  },
  buttonText: {
    color: INDIGO
  },
  input: {
    marginLeft: 30,
    marginRight: 30,
    fontSize: 20
  },
  mainView: {
    backgroundColor: '#ffffff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  createAccount: {
    marginBottom: 50
  },
  loginLabel: {
    color: INDIGO,
    fontSize: 24
  }
});
