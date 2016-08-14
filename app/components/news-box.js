import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Component,
  TouchableOpacity,
  Image,
  Linking
} from 'react-native';
import {styles, clr, INDIGO} from "../constants/styles";
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class NewsBox extends React.Component{

  constructor(props){
    super(props);
    this.dateOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    }
    this._onPress = this._onPress.bind(this);
    this._gotToUrl = this._gotToUrl.bind(this);
  }

  getImage(news){
    if(news.image){
      return <Image source={require("../images/test.jpg")}
             style={innerStyle.image}/>
    }
    return <View/>;
  }

  getIconImage(news){
    if(typeof news.siteIconLink === 'string'){
      return <Image style={innerStyle.icon} source={{uri: news.siteIconLink}}/>
    } else {
      return <Image style={innerStyle.icon} source={require('../images/no_image.png')}/>
    }
  }

  _onPress(){
    var onPress = this.props.onPress;
    if(typeof onPress == 'function'){
      onPress(this.props.news);
    }
  }

  _gotToUrl(url){
        Linking.openURL(url);
  }

  render(){
    let news = this.props.news;
    let date = new  Date(news.pubDate);
    let dateToString = date.toLocaleString("en-US", this.dateOptions);
    let author = news.author.split('(')[0];
    //let siteIconLink;
    //typeof news.siteIconLink === 'string' ? siteIconLink = {uri: news.siteIconLink} : siteIconLink = require('./img/favicon.png');

    return (
      <TouchableOpacity activeOpacity={1} onPress={this._onPress}>
      <View style={innerStyle.main}>
          {this.getImage(news)}
          <Text style={innerStyle.date}>{dateToString}</Text>
          <Text style={innerStyle.title}>{news.title}</Text>
          <Text style={innerStyle.body}>{news.intro}</Text>
          <View style={innerStyle.footer}>
            <View style={innerStyle.authorBox}>
              {this.getIconImage(news)}
                   <Text style={innerStyle.name}>{author}</Text>
            </View>
              <TouchableOpacity onPress={()=>{
                  this._gotToUrl(news.link);
                }}>
                <Icon style={innerStyle.browser} name={"language"} size={30} color="#000000"/>
              </TouchableOpacity>
          </View>
      </View>
      </TouchableOpacity>
    );
  }
}


const innerStyle = StyleSheet.create({
  main:{
    backgroundColor: '#ffffff',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5,
    elevation: 3
  },
  image:{
    width: 340,
    height: 180
  },
  date:{
    margin: 10,
    marginLeft: 15,
    marginBottom: 0,
    color: '#F48FB1'
  },
  title:{
    margin: 10,
    marginTop: 5,
    marginLeft: 15,
    fontSize: 20,
    color: "#000000",
    fontWeight: '600'
  },
  body:{
    margin: 10,
    marginLeft: 15,
    marginTop: 0,
    fontSize: 17,
    color: "#000000"
  },
  icon:{
    width: 48,
    height: 48,
    borderRadius: 50
  },
  footer:{
    marginBottom: 5,
    marginLeft: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between"
  },
  authorBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name:{
    margin: 5,
    marginLeft: 10,
    fontSize: 16,
    color: "#000000",
  },
  browser:{
    margin: 5
  }
});
