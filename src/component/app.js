import '../style/base/_reset.scss';
import '../style/main.scss';
import React from 'react';
import Content from './content';
import Landing from './landing';
import {Provider} from 'react-redux';
import createStore from '../lib/app-create-store';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import Navbar from './navbar/index';

const store = createStore();

export default class App extends React.Component {
  componentWillMount() {
    if (localStorage.token)
      store.dispatch({type: 'TOKEN_SET', payload: localStorage.token});
  }

  render() {
    let token = JSON.parse(store.getState().token);
    console.log('App token', token);

    return (
      <main className="application">
        <Provider store={store}>
          <BrowserRouter>
            <React.Fragment>
              <Navbar/>
              <Route exact path="/welcome/:auth" component={Landing}/>
              <Route exact path="/"
                component={() =>
                  token
                    ? <Content/>
                    : <Redirect to="/welcome/signin"/>}
              />
            </React.Fragment>
          </BrowserRouter>
        </Provider>
      </main>
    );
  }
}
