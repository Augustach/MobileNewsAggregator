import * as types from '../constants/actionTypes';
import {getNewsService, getCurrentNewsService} from '../services/news';


export function fetchNews(from, limit) {
  return dispatch => {
    dispatch(compliteNews(false));
    return getNewsService(from, limit).then(data=>{
            dispatch(getNews(data));
            dispatch(compliteNews(true));
            }
    )
  }
}

export function getNews(news){
  let length = news.length;
  return {
    type: types.GET_NEWS,
    news: news,
    from: length,
    limit: length
  }
}

export function compliteNews(complite){
  return {
    type: types.COMPLITE_NEWS,
    complite
  }
}

//for current news
export function fetchCurrentNews(id){
  return dispatch => {
    return getCurrentNewsService(id).then(data=>{
      let news = data[0];
      news.text = news.text.replace(/<p>/g,"")
                            .replace(/<\/p>/g,"\n")
                            .replace(/<a.*?<\/a>/g,"")
                            .replace(/<[^>]*>/g, "")
                            .replace(/&nbsp;/g, " ");
      dispatch(getCurrentNews(news));
    })
  }
}

export function getCurrentNews(news){
  return {
    type: types.CURRENT_NEWS,
    currentNews: news
  }
}
