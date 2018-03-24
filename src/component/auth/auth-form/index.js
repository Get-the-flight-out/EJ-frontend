import './auth-form.scss';
import React from 'react';
import Fuse from  'fuse-js-latest';
import IataInput from '../../iata-input';
import {renderIf} from '../../../lib/utils';
import airports from '../../../data/airports.json';

export default class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      homeAirport: '',
      usernameError: null,
      emailError: null,
      passwordError: null,
      error: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(e) {
    e.preventDefault();
    let {username, email, password, homeAirport} = this.state;
    this.props.onComplete({ username, email, password, homeAirport });
    this.setState({ username: '', email: '', password: '', homeAirport: ''});
  }

  render() {
    let signupJsx =
      <React.Fragment>
        <IataInput
          className="fuzzy-auth"
          name="homeAirport"
          placeholder="SEA or SEATTLE"
          value={this.state.homeAirport}
          setState={(state) => {this.setState(state);}}
        />

        <input
          type='email'
          name='email'
          placeholder='email'
          value={this.state.email}
          onChange={this.handleChange}/>
      </React.Fragment>;


    return (
      <div className="auth-form-div">
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

          <button className="signin-btn" type='submit'>{ this.props.type === 'signin' ? 'Sign In' : 'Sign Up' }</button>
        </form>
      </div>
    );
  }
}
