import React from 'react';
import { Component, Navigator, StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import { Scene, Router, Modal } from 'react-native-router-flux';

import * as reducers from '../reducers';
import {styles, clr, INDIGO} from "../constants/styles";
import Main from './main';
import News from './news';
import Options from './options';
import Login from './login';
import Registration from './registration';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ModalMenu from '../components/modal-menu';


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);
const ReduxRouter = connect()(Router);


class TabIcon extends React.Component {
    render(){
        return (
            <Image style={innerStyle.tabIcon} source={this.props.tabIcon}/>
        );
    }
}

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.createRightButton = this.createRightButton.bind(this);
  }
  render() {
    return (
      <Provider store={store}>
        <ReduxRouter>
          <Scene key="root">
            <Scene
              key="login"
              hideNavBar={true}
              initial={true}
              navigationBarStyle={innerStyle.navigationBar}
              component={Login}
              />
              <Scene
                key="registration"
                hideNavBar={false}
                navigationBarStyle={innerStyle.navigationBar}
                backButtonImage={require('image!ic_arrow_back_white_24dp')}
                component={Registration}
                type="push"
                />
              <Scene
                key="newsfeed"
                type="replace"
                hideNavBar={false}
                component={Main}
                navigationBarStyle={[innerStyle.navigationBar, innerStyle.elevation]}
                backButtonImage={require('image!ic_arrow_back_white_24dp')}
                titleStyle={innerStyle.titleFeed}
                renderRightButton={this.createRightButton}
                title="feed"
                />
                <Scene
                  key="news"
                  hideNavBar={false}
                  title="news"
                  duration={0}
                  titleStyle={innerStyle.title}
                  navigationBarStyle={[innerStyle.navigationBar, innerStyle.elevation]}
                  backButtonImage={require('image!ic_arrow_back_white_24dp')}
                  component={News}
                  />
          </Scene>
        </ReduxRouter>
      </Provider>
    );
  }

  createUser(){

  }

  createRightButton(){
    return (
      <View  style={innerStyle.settingIcon}>
          <ModalMenu
            button={()=>{
                return (
                  <Icon name="more-vert" size={30} style={innerStyle.icon}/>
                );
            }}
            >
            <TouchableOpacity onPress={()=>{}}>
                <View style={{flexDirection: 'row',justifyContent: 'center', width: 100, alignItems: 'center'}}>
                    <Icon name="person" size={22}/>
                    <Text style={{fontSize: 16, marginLeft: 10}}>profile</Text>
                </View>
            </TouchableOpacity>
            </ModalMenu>
      </View>
    )
  }
}

const innerStyle = StyleSheet.create({
  icon:{
    color: '#ffffff',
    position: 'relative',
    top: 5
  },
  tabIcon:{
    width:30,
    height:30
  },
  tabBarStyle: {
    backgroundColor: INDIGO,
    borderColor: INDIGO
  },
  navigationBar: {
    height: 45,
    backgroundColor: INDIGO,
    borderBottomColor: INDIGO,
  },
  rightButton:{
    color: clr,
    fontSize: 24
  },
  titleFeed: {
    color: '#ffffff',
    fontSize: 22,
    position: 'relative',
    top: -5
  },
  title: {
    color: '#ffffff',
    fontSize: 22,
    position: 'relative',
    top: -40
  },
  elevation:{
    elevation: 5
  },
  settingIcon:{
    position: 'absolute',
    top: 0,
    right: 0
  },
  test:{
    backgroundColor: "#ffffff",
    position: 'absolute',
    top: 0,
    left: 0,
    height: 500
  }
});
