import React from 'react';
import {Link} from 'react-router-dom';
import {renderIf} from '../../lib/utils';
import {tokenDelete} from '../../action/auth-actions';
import './navbar.scss';

class Navbar extends React.Component {
  render() {
    console.log('Navbar __PROPS__', this.props);
    return (
      <header>
        <div className='container'>
          <Link to='/'>
            <img className='logo' src='../../src/assets/logo.png' alt='logo' />
          </Link>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/aboutus'>About Us</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Navbar;
