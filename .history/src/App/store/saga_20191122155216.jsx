import {call, put, takeLatest} from 'redux-saga/effects';
import {actions} from './duck';
import * as constants from './constants';
import {fetchLogIn, signUpApi} from '../../core/utils/api';

export function* fetchLoginInWorker(action) {
  const {payload} = action;
  try {
    const result = yield call(fetchLogIn, payload);
    console.log(result);
    const { success } = result;
    if (success) {
      yield put(actions.logInSuccess(result));
    } else {
      yield put(actions.logInFailure());
    }
  } catch (error) {
    yield put(actions.logInFailure());
  }
}

export function* signUpWorker(action) {
  const {payload} = action;
  try {
    const result = yield call(signUpApi, payload);
    console.log(result);
    const { success } = result;
    if (success) {
      yield put(actions.signUpSuccess(result));
    } else {
      yield put(actions.signUpFailure());
    }
  } catch (error) {
    yield put(actions.signUpFailure());
  }
}

export function* logInWatch() {
  yield takeLatest(constants.LOG_IN, fetchLoginInWorker);
}