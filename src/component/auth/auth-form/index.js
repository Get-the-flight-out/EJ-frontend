import React from 'react';
import {renderIf} from '../../../lib/utils';

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
          className="auth-form"
          onSubmit={this.handleSubmit}
          noValidate>

          <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={this.handleChange}/>

          {renderIf(this.state.usernameError,
            <span className="tooltip">{this.state.usernameError}</span>)}

          {renderIf(this.props.auth === 'signup',
            <input
              type="text"
              name="homeAirport"
              placeholder="SEA or LAX"
              pattern=""
              value={this.state.homeAirport}
              onChange={this.handleChange}/>
          )}

          {renderIf(this.props.auth === 'signup',
            <input
              type="email"
              name="email"
              placeholder="email"
              value={this.state.email}
              onChange={this.handleChange}/>
          )}

          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}/>

          <button type="submit">{this.props.auth}</button>
        </form>
      </div>
    );
  }
}
