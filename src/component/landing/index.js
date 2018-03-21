import React from 'react';
import {connect} from 'react-redux';
import AuthForm from '../auth/auth-form';
import {signupRequest, signinRequest} from '../../action/auth-actions';

class Landing extends React.Component {
  render() {
    console.log('__LANDING_PROPS__', this.props);
    let {params} = this.props.match;
    let onComplete = params.auth === 'signin'
      ? this.props.signin
      : this.props.signup;

    return (
      <div className="landing-container">
        {/* history:    pass down to redirect after submission
            auth:       will be signin or signup
            onComplete: will either be signinRequest or signupRequest
        */}
        <AuthForm
          history={this.props.history}
          auth={params.auth}
          onComplete={onComplete}/>
      </div>
    );
  }
}

let mapStateToProps = () => ({});
let mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signupRequest(user)),
  signin: user => dispatch(signinRequest(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
