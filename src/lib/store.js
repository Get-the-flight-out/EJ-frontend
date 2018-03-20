import reducer from '../reducers';
import thunk from './redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import reduxReporter from '../middleware/reporter-middleware';


export default () => createStore(reducer, composeWithDevTools(applyMiddleware(thunk, reduxReporter)));
