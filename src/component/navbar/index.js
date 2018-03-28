import React from 'react';
import {Link} from 'react-router-dom';
import {renderIf} from '../../lib/utils';
import {tokenDelete} from '../../action/auth-actions';
import logoPng from '../../assets/logos/logo-grey.png';
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
            <img className='logo' src={logoPng} alt='logo' />
          </Link>
          <nav>
            <ul>
              <li><a className="nav-links" href="#content-div">Home</a></li>
              <li><a className="nav-links" href="#discover-destinations">Discover</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Navbar;
