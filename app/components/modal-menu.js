import React from 'react';
import {
  Text,
  View,
  Modal,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
  StatusBar
} from 'react-native';


var Button = React.createClass({
  getInitialState() {
    return {
      active: false,
    };
  },

  _onHighlight() {
    this.setState({active: true});
  },

  _onUnhighlight() {
    this.setState({active: false});
  },

  render() {
    var colorStyle = {
      color: this.state.active ? '#fff' : '#000',
    };
    return (
      <TouchableHighlight
        onPress={()=>{}}>
          {this.props.children}
      </TouchableHighlight>
    );
  }
});

export default class ModalMenu extends React.Component{

  constructor(props){
    super(props);
    this.state={modalVisible: false};
    this._onPressButton = this._onPressButton.bind(this);
  }

  _onPressButton(){
    // let onPressButton = this.props.onPressButton;
    // if(typeof onPressButton === 'function'){
    //   onPressButton();
    // }
    //let modalVisible = this.state.modalVisible;
    this._setModalVisible(true);
  }

  renderButtom(){
    let buttonCreator = typeof this.props.button == 'function' ? this.props.button : ()=>"button";

    return (
      <TouchableOpacity
        onPress={this._onPressButton}>
        {buttonCreator()}
      </TouchableOpacity>
    );
  }

  _setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render(){
    return (
      <View >
        <Modal
          animationType='none'
          transparent={true}
           visible={this.state.modalVisible}
           onRequestClose={() => {this._setModalVisible(false)}}
        >
        <StatusBar backgroundColor="#ffffff"/>
        <TouchableOpacity
          activeOpacity={1}
          onPress={this._setModalVisible.bind(this,false)} style={styles.main}>
              <View style={styles.container}>
                {this.props.children}
              </View>
        </TouchableOpacity>
        </Modal>
        {this.renderButtom()}
      </View>

    );
  }
}


const styles = StyleSheet.create({
  main:{
    flex: 1
  },
  container:{
    flexDirection: 'column',
    backgroundColor: "#ffffff",
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
    elevation: 7,
    borderRadius: 3
  },
  test:{
    backgroundColor: "#ffffff"
  }
});
