import React from 'react';
import Swiper from 'react-native-swiper';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar
} from 'react-native';


import { Actions } from 'react-native-router-flux';
import * as newsActions from '../actions/newsActions';
import {styles, clr, INDIGO} from "../constants/styles";
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';
import FacebookTabBar from '../components/facebookTabBar';
import NewsBox from '../components/news-box';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as newsConst from '../constants/news';

export default class Main extends React.Component {

  constructor(props){
    super(props);
    this.state={};
    this.state.y = 0;
    this.state.ready = false;
  }

  componentWillMount() {
      this.props.actions.fetchNews(0, newsConst.LIMIT);
  }

  componentWillUpdate(nextProps, nextState){
    if(nextProps.complite && !this.state.ready){
      nextState.ready = true;
    }
  }

  render(){
    let self = this;
    let ready = this.state.ready;
    let { news, actions, limit, from, complite } = this.props;
    news = news || false;
    return (
      <View style={innerStyle.main}>
      <StatusBar backgroundColor='#000000'
        translucent={false}/>
      <ScrollView tabLabel="assignment" style={innerStyle.container}
          onScroll={(event)=>{
             let e = event.nativeEvent;
             let yOffset = e.contentOffset.y;
             let height = e.contentSize.height - e.layoutMeasurement.height;
             console.log(height/2 + "  " + yOffset + " complite: " + complite);
             if(height/2 < yOffset && complite){
               actions.fetchNews(from, limit);
             }
          }}
          >
        {
          ready ? news.map(function(item, index){
            return <NewsBox  key={index}
                             news={item}
                             onPress={(news)=>{
                               Actions.news({id: news.id});
                             }}/>
          }) :  <View style={innerStyle.loadingContainer}><Image source={require("../images/loadingWhite.gif")}
                 style={innerStyle.image}/></View> }
    </ScrollView>
  </View>
    );
  }
}

export default connect(state => ({
  news: state.news.newsMap,
  limit: state.news.limit,
  from: state.news.from,
  complite: state.news.complite
  }),
  (dispatch) => ({
    actions: bindActionCreators(newsActions, dispatch)
  })
)(Main);

const innerStyle = StyleSheet.create({
  container:{
    backgroundColor: INDIGO,
    borderColor: INDIGO,
    position: 'relative',
    top: 40
  },
  main: {
    flex: 1,
  },
  pageStyle: {
   backgroundColor: "#000000"
 },
 image:{
   width: 43,
   height: 43,
 },
 loadingContainer: {
   alignSelf: 'center',
   top: 5
 }
});
