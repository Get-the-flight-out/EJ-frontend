import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import * as routes from '../../routes';

class AuthRedirect extends React.Component {
  render() {
    let {location, history, token} = this.props;
    let {pathname} = location;
    let reRoutePath = null;

    if (pathname === routes.ROOT ||
        pathname === routes.SIGNIN ||
        pathname === routes.SIGNUP) {
      if (token) {
        reRoutePath = routes.CONTENT;
      }
    } else {
      if (!token) {
        reRoutePath = routes.ROOT;
      }
    }

    return (
      <div className='auth-redirect'>
        { reRoutePath ? <Redirect to={reRoutePath} />: undefined }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  token : state.token,
});

export default connect(mapStateToProps)(AuthRedirect);
