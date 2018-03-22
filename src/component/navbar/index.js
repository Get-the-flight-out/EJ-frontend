import React from 'react';
import {Link} from 'react-router-dom';
import {renderIf} from '../../lib/utils';
import {tokenDelete} from '../../action/auth-actions';
import './navbar.scss';

class Navbar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      opaque: true,
    };
    this.makeOpaque = this.makeOpaque.bind(this);
  }
  makeOpaque(e) {
    let opaque = window.pageYOffset > 100 ? false : true;
    this.setState({opaque});
  }
  render() {
    window.onscroll = this.makeOpaque;
    return (
      <header className={this.state.opaque ? 'opaqueHeader' : 'non-opaqueHeader'}>
        <div className='container'>
          <Link to='/'>
            {/* <img className='logo' src='../../src/assets/logo.png' alt='logo' /> */}
          </Link>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/aboutus'>Discover</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Navbar;
