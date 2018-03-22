import React from 'react';
import Fuse from  'fuse-js-latest';
import {renderIf} from '../../../lib/utils';
import airports from '../../../data/airports.json';

export default class AuthForm extends React.Component {
  constructor(props) {
    super(props);

    let options = {
      shouldSort: true,
      threshold: 0.2,
      location: 0,
      distance: 0,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [{
        name: 'iata',
        weight: 0.5,
      }, {
        name: 'name',

        weight: 0.2,
      }, {
        name: 'city',
        weight: 0.4,
      }],
    };

    this.state = {
      username: '',
      email: '',
      password: '',
      homeAirport: '',
      fuse: new Fuse(airports, options),
      usernameError: null,
      emailError: null,
      passwordError: null,
      error: null,
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
    });
  }

  handleFuzzyIata(e) {
    let {name, value} = e.target;
    let results = this.state.fuse.search(value);
    console.log('this is fuse:', results);
    this.handleChange(e);
  }

  handleSubmit(e) {
    e.preventDefault();
    let {username, email, password, homeAirport} = this.state;
    this.props.onComplete({ username, email, password, homeAirport })
    this.setState({ username: '', email: '', password: '', homeAirport: ''});
  }

  render() {
    let signupJsx =
      <React.Fragment>
        <input
          type='text'
          name='homeAirport'
          placeholder='SEA or SEATTLE'
          value={this.state.homeAirport}
          onChange={this.handleFuzzyIata}/>

        <input
          type='email'
          name='email'
          placeholder='email'
          value={this.state.email}
          onChange={this.handleChange}/>
      </React.Fragment>;


    return (
      <div className="auth-form-div">
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

          {/* sign-up specific fields */}
          { this.props.type !== 'signin' ? signupJsx : undefined }

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
