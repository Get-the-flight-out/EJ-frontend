import {combineReducers} from 'redux';
import token from './auth';
import lowFareSearch from './lowfare';

export default combineReducers({
  token,
  lowFareSearch: lowFareSearch,
});
