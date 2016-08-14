import React from 'react';
import  {
  View,
  Text,
  StyleSheet,
  Component,
  TouchableOpacity
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import {bindActionCreators} from 'redux';

import { connect } from 'react-redux';



class Launch extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Loading 23
        </Text>
      </View>
    );
  }
}
s

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20
  }
})
