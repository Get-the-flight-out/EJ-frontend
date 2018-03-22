import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './landing.scss';
import AuthForm from '../auth/auth-form';
import {signupRequest, signinRequest} from '../../action/auth-actions';
import * as routes from '../../routes';
import './landing.scss';

class Landing extends React.Component {
  constructor (props) {
    super(props);

    // Binding Handlers
    Object.getOwnPropertyNames(Landing.prototype)
      .filter(prop => prop.startsWith('handle'))
      .map(prop => this[prop] = this[prop].bind(this));
  }

  handleSignup(user) {
    // signup user, then re-route to content page
    return this.props.doSignup(user)
      .then(() => {
        this.props.history.push(routes.CONTENT);
      })
      .catch(console.error);
  }

  handleSignin(user) {
    return this.props.doSignin(user)
      .then(() => {
        this.props.history.push(routes.CONTENT);
      })
      .catch(console.error);
  }

  render() {
    let rootJsx =
      <div className="auth-wrapper">
        <h2>Welcome to Get The Flight Out</h2>
        <Link to={routes.SIGNUP}>SignUp</Link>
        <Link to={routes.SIGNIN}>SignIn</Link>
      </div>;

    let signinJsx =
      <div className="auth-wrapper">
        <h2>SignIn</h2>
        <AuthForm type="signin" onComplete={this.handleSignin} />
        <p>don't have an account?</p>
        <Link to={routes.SIGNUP}>signup</Link>
      </div>;

    let signupJsx =
      <div className="auth-wrapper">
        <h2>SignUp</h2>
        <AuthForm onComplete={this.handleSignup} />
        <p>already have an account?</p>
        <Link to={routes.SIGNIN}>signin</Link>
      </div>;

    console.log('landing: going to: ', location.pathname);
    return (
      <div className="landing-container">
        {location.pathname === routes.ROOT ? rootJsx : undefined}
        {location.pathname === routes.SIGNUP ? signupJsx : undefined}
        {location.pathname === routes.SIGNIN ? signinJsx : undefined}
      </div>
    );
  }
}

let mapStateToProps = () => ({});
let mapDispatchToProps = dispatch => ({
  doSignup: user => dispatch(signupRequest(user)),
  doSignin: user => dispatch(signinRequest(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
