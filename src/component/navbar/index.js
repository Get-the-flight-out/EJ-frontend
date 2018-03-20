import React from 'react';
import {Link} from 'react-router-dom';
import {renderIf} from '../../lib/utils';
import {tokenDelete} from '../../action/auth-actions';
import './navbar.scss';

class Navbar extends React.Component {
  render() {
    return (
      <header>
        <div className='container'>
          <Link to='/content'>
            <img className='logo' src='../../src/assets/logo.png' alt='logo' />
          </Link>
          <nav>
            <ul>
              <li><Link to='/content'>Home</Link></li>
              <li><Link to='/aboutus'>About Us</Link></li>
              {renderIf(!this.props.token,
                <li><Link to="/welcome/signup">Signup</Link></li>
              )}
              {renderIf(this.props.token,
                <li><Link to="/welcome/signin">Signin</Link></li>
              )}
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Navbar;
