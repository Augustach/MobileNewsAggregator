import * as types from '../constants/userActionTypes';

export function login(){
  return {
    types.LOGIN
  };
}

export function fetchUser(user){
  return dispatch =>{
    dispatch(startLogin(true));
    return fetch()
  }

}
