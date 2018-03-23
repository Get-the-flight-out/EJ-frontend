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
        <h2 className="welcome" >Welcome to Get The Flight Out</h2>
        <div className="links-to-site">
          <Link className="signup" to={routes.SIGNUP}>SignUp</Link>
          <Link className="signin" to={routes.SIGNIN}>SignIn</Link>
        </div>
      </div>;

    let signinJsx =
      <div className="auth-wrapper">
        <AuthForm type="signin" onComplete={this.handleSignin} />
        <p className="ask-about-account">don't have an account?</p>
        <Link className="signup-link" to={routes.SIGNUP}>signup</Link>
      </div>;

    let signupJsx =
      <div className="auth-wrapper">
        <AuthForm onComplete={this.handleSignup} />
        <p className="ask-about-account">already have an account?</p>
        <Link className="signin-link" to={routes.SIGNIN}>Sign in</Link>
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
