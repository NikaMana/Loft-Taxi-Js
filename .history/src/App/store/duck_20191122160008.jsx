import { combineReducers } from 'redux';
import {createAction} from 'redux-actions';
import * as constants from './constants';

const isAuth = JSON.parse(localStorage.getItem("isAuth"));

const initialState = {
  success: {},
  isAuth: true,
  loader: false,
  isNewUser: false
};

export const actions = {
  checkIsLogin: createAction(constants.CHECK_IS_LOGIN),
  logIn: createAction(constants.LOG_IN),
  logInSuccess: createAction(constants.LOG_IN_SUCCESS),
  logInFailure: createAction(constants.LOG_IN_FAILURE),
  signUp: createAction(constants.SIGN_UP),
  signUpSuccess: createAction(constants.SIGN_UP_SUCCESS),
  signUpFailure: createAction(constants.SIGN_UP_FAILURE),
  toogleNewUser: createAction(constants.TOGGLE_NEW_USER)
};

const isLogin = (state=initialState, action) => {
  switch (action.type) {
    case constants.CHECK_IS_LOGIN:
      if (isAuth) {
        return {...state, isAuth: false};
      } else {
        return {...state, isAuth: false};
      }
    case constants.LOG_IN:
      return {...state, loader: true};
    case constants.LOG_IN_SUCCESS:
      localStorage.setItem("isAuth", JSON.stringify(true));
      return {...state, isAuth: true, loader: false};
    case constants.LOG_IN_FAILURE:
      return {...state, loader: false};
    case constants.TOGGLE_NEW_USER:
      return {...state, isNewUser: !state.isNewUser};
    case constants.SIGN_UP_SUCCESS:
      return {...state, isNewUser: false};
   default:
     return state;
 }
};

const appReduser = combineReducers({ isLogin });

export default appReduser;