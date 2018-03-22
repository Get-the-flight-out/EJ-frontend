import React from 'react';
import Fuse from  'fuse-js-latest';
import {renderIf} from '../../../lib/utils';
import airports from '../../../data/airports.json';
import FuzzySuggestion from '../../fuzzy-suggestion';

export default class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    let options = {
      shouldSort: true,
      threshold: 0.1,
      location: 0,
      distance: 75,
      maxPatternLength: 10,
      minMatchCharLength: 1,
      keys: [{
        name: 'iata',
        weight: 0.5,
      }, {
        name: 'name',
        weight: 0.3,
      }, {
        name: 'city',
        weight: 0.2,
      }],
    };

    this.state = {
      username: '',
      email: '',
      password: '',
      homeAirport: '',
      fuse: new Fuse(airports, options),
      fuseResults: [],
      usernameError: null,
      emailError: null,
      passwordError: null,
      error: null,
      fuzzyShown: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFuzzyIata = this.handleFuzzyIata.bind(this);
  }

  handleChange(e) {
    let {name, value} = e.target;
    this.setState({
      [name]: value,
      usernameError: name === 'username' && !value.trim() ? 'Username required' : null,
      emailError: name === 'email' && !value.trim() ? 'Email required' : null,
      passwordError: name === 'password' && !value.trim() ? 'Password required' : null,
      fuzzyShown: true,
    });
  }

  handleFuzzyIata(e) {
    this.handleChange(e);
    let {name, value} = e.target;
    const fuseResults = this.state.fuse.search(value).slice(0, 6);
    this.setState({fuseResults});
  }

  handleSubmit(e) {
    e.preventDefault();
    let {username, email, password, homeAirport} = this.state;
    this.props.onComplete({ username, email, password, homeAirport })
      .then(() => this.setState({ username: '', email: '', password: '', homeAirport: ''}))
      .then(() => this.props.history.push('/'))
      .catch(error => this.setState({error}));
  }

  render() {
    return (
      <div>
        <h3>Welcome</h3>
        <form
          className='auth-form'
          onSubmit={this.handleSubmit}
          noValidate>

          <input
            type='text'
            name='username'
            placeholder='username'
            value={this.state.username}
            onChange={this.handleChange}/>

          {renderIf(this.state.usernameError,
            <span className='tooltip'>{this.state.usernameError}</span>)}

          {renderIf(this.props.auth === 'signup',
            <input
              className='airport-code'
              type='text'
              name='homeAirport'
              placeholder='SEA or LAX'
              pattern=''
              value={this.state.homeAirport}
              onChange={this.handleFuzzyIata}/>
          )}
          {renderIf(this.state.fuzzyShown,
          <FuzzySuggestion
            fuseResults={this.state.fuseResults}
            setState={(state) => this.setState(state)}/>
          )}

          {renderIf(this.props.auth === 'signup',
            <input
              type='email'
              name='email'
              placeholder='email'
              value={this.state.email}
              onChange={this.handleChange}/>
          )}

          <input
            type='password'
            name='password'
            placeholder='password'
            value={this.state.password}
            onChange={this.handleChange}/>

          <button type='submit'>{this.props.auth}</button>
        </form>
      </div>
    );
  }
}
