import {combineReducers} from 'redux';
import appReducer from '../../App/store/duck';

const rootReduser = combineReducers({
  appReducer
});

export default rootReduser;