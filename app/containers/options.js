import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Component,
  TouchableOpacity,
  TextInput
} from 'react-native';
import {styles, clr, INDIGO} from "../constants/styles";
import { Actions } from 'react-native-router-flux';


export default class Options extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
        <View style={[styles.container]}>
        <Text>Options</Text>
      </View>
    );
  }
}

const innerStyle = StyleSheet.create({
});
