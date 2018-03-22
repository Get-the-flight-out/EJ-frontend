import '../style/base/_reset.scss';
import '../style/main.scss';
import React from 'react';
import Content from './content';
import Landing from './landing';
import {Provider} from 'react-redux';
import createStore from '../lib/app-create-store';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import AuthRedirect from './auth-redirect';
import * as routes from '../routes';
import Navbar from './navbar/index';

const store = createStore();

export default class App extends React.Component {
  componentWillMount() {
    if (localStorage.token)
      store.dispatch({type: 'TOKEN_SET', payload: localStorage.token});
  }

  render() {
    let token = JSON.parse(store.getState().token);

    return (
      <main className="application">
        <Provider store={store}>
          <BrowserRouter>
            <React.Fragment>
              <Navbar/>
              <Route path={routes.CATCHALL} component={AuthRedirect} />
              <Route exact path={routes.SIGNUP} component={Landing} />
              <Route exact path={routes.SIGNIN} component={Landing} />
              <Route exact path={routes.ROOT} component={Landing} />
              <Route exact path={routes.CONTENT} component={Content} />
            </React.Fragment>
          </BrowserRouter>
        </Provider>
      </main>
    );
  }
}
