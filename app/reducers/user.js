import * as types from '../constants/userActionTypes';

const initialState = {};

export default function login(state = initialState, user = {}) {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        ...action.data
      };
    default:
      return state;
  }
}
