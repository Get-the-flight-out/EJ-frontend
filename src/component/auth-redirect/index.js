import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import * as routes from '../../routes';

class AuthRedirect extends React.Component {
  render() {
    // location and history comes from props directly
    // token comes from the store
    let {location, history, token} = this.props;
    let {pathname} = location;
    let reRoutePath = null;

    console.log('Hitting Auth-Redirect', pathname);

    // conditional rerouting based off token presence
    if (pathname === routes.ROOT ||
        pathname === routes.SIGNIN ||
        pathname === routes.SIGNUP) {
      // if the token exists, re-route to the content page
      if (token) {
        console.log('ROUTE: ', pathname, 'token: true, going to CONTENT');
        reRoutePath = routes.CONTENT;
      }
    } else {
      if (!token) {
        console.log('ROUTE: ', pathname, 'token: false, going to ROOT');
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
