import token from './auth';
import profile from './profile';
import {combineReducers} from 'redux';
import lowFareSearch from './lowfare';
import inspirationSearch from './inspiration';

export default combineReducers({
  token,
  lowFareSearch: lowFareSearch,
  profile: profile,
  inspirationSearch: inspirationSearch,
});
