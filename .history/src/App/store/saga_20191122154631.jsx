import {call, put, takeLatest} from 'redux-saga/effects';
import {actions} from './duck';
import * as constants from './constants';
import {fetchLogIn} from '../../core/utils/api';

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

export function* logInWatch() {
  yield takeLatest(constants.LOG_IN, fetchLoginInWorker);
}