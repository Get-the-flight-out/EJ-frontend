import {combineReducers} from 'redux';
import token from './auth';
import lowFareSearch from './lowfare';
import profile from './profile';

export default combineReducers({
  token,
  lowFareSearch: lowFareSearch,
  profile: profile,
});
