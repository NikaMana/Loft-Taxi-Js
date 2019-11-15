import {all} from 'redux-saga/effects';
import {logInWatch} from '../../App/store/saga';

export default function* rootSaga() {
  yield all([logInWatch()]);
}