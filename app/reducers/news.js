import * as types from '../constants/actionTypes';
import * as newsConst from '../constants/news';

const initialState = {
  newsMap: [],
  from: 0,
  limit: newsConst.LIMIT,
  currentNews: {
    title: "no title",
    author: "no author",
    text: ""
  }
};

export default function news(state = initialState, action = {}) {
  switch (action.type) {
    case types.GET_NEWS:
      return Object.assign({},state, {
        newsMap: [...state.newsMap, ...action.news],
        limit: action.limit,
        from: state.from + action.from
      });
    case types.COMPLITE_NEWS:
      return Object.assign({}, state, {complite: action.complite});
    case types.CURRENT_NEWS:
      return Object.assign({}, state, {currentNews: action.currentNews})
    default:
      return state;
  }
}
