import { combineReducers } from 'redux';
import { display } from './displayReducer';

const mainReducer = combineReducers({
  display
})

export default mainReducer
