import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import * as newsActions from '../actions/newsActions';
import { Actions } from 'react-native-router-flux';
import {styles} from "../constants/styles";
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

export default class News extends React.Component {

  static defaultProps = {
    news: {
      author: "no author",
      title: "no title",
      text: "no text"
    }
  }

  constructor(props){
    super(props);
    this.state = {};
    this.state.update = false;
  }

  componentWillMount(){
    this.props.actions.fetchCurrentNews(this.props.id);
  }

  componentWillUnmount(){
    console.log("news was unmount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.news.id !== this.props.news.id;
  }

  componentDidMount(){
  //  this._component.setNativeProps({opacity: 1});
  }

  componentWillUpdate(nextProps, nextState){
    nextState.update = true;
  }

  componentDidUpdate(prevProps, prevState){
    //this._component.setNativeProps({opacity: 1});
  }

  render(){
    let news = this.props.news;
    let author = news.author.split('(')[0];
    if(this.state.update){
      return (
                <ScrollView style={innerStyle.container}>
                  <Text style={innerStyle.title}>{news.title}</Text>
                  <Text style={innerStyle.text}>{news.text}</Text>
                    <View style={innerStyle.footer}>
                          <View style={innerStyle.authorBox}>
                            <Image source={require("../images/lentach.jpg")}
                                    style={innerStyle.icon}/>
                                <Text style={innerStyle.name}>{author}</Text>
                            </View>
                          </View>
                        <View style={innerStyle.hack}>
                      </View>
                  </ScrollView>
                );
    } else {
      return (<View></View>);
    }
    }
}

const innerStyle = StyleSheet.create({
  container: {
    position: 'relative',
    top: 50,
    padding: 10,
    paddingTop: 0,
    backgroundColor: "#ffffff",
    opacity: 1
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  authorBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 48,
    height: 48,
    borderRadius: 50
  },
  name:{
    margin: 5,
    marginLeft: 10,
    fontSize: 16,
    color: "#000000",
  },
  title:{
    margin: 10,
    marginTop: 5,
    marginLeft: 15,
    fontSize: 20,
    color: "#000000",
    fontWeight: '600'
  },
  text: {
    fontSize: 17,
    color: "#000000"
  },
  hack:{
    height: 50
  }
});

export default connect(state => {
  //Actions.news();
  return ({
  news: state.news.currentNews,
})},
  (dispatch) => ({
    actions: bindActionCreators(newsActions, dispatch)
  })
)(News);
