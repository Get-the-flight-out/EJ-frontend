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
        <h2 className="welcome" >Get The</h2>
        <h2 className="welcome" >Flight Out</h2>
        <h2 className="funny" >dont quit your day dream</h2>
        <div className="links-to-site">
          <Link className="signup" to={routes.SIGNUP}>Sign Up</Link>
          <Link className="signin" to={routes.SIGNIN}>Sign In</Link>
        </div>
      </div>;

    let signinJsx =
      <div className="auth-wrapper">
        <AuthForm type="signin" onComplete={this.handleSignin} />
        <Link className="signup-link" to={routes.SIGNUP}>don't have an account?</Link>
      </div>;

    let signupJsx =
      <div className="auth-wrapper">
        <AuthForm onComplete={this.handleSignup} />
        <Link className="signin-link" to={routes.SIGNIN}>already have an account?</Link>
      </div>;

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
