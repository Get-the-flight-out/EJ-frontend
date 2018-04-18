import React from 'react';

import './inspiration-item.scss';
import {connect} from 'react-redux';
import { RingLoader } from 'react-spinners';
import { airportLookup } from '../../lib/airport-lookup';
import * as lowFareActions from '../../action/lowfare-actions';

class FlightItem extends React.Component {

  render() {
    let area = localStorage.getItem('area');
    let origin = localStorage.getItem('origin');
    let city = this.props.inspirationSearch.destination;
    let dep = new Date(this.props.inspirationSearch.departure_date);
    let ret = new Date(this.props.inspirationSearch.return_date);
    let depDate = dep.toString().split('17:00');
    let retDate = ret.toString().split('17:00');
    const iata = this.props.inspirationSearch.destination;
    const image = this.props.images[iata] ? this.props.images[iata] : this.props.images['GENERIC'];
    return (
      <div className="flight-item"><a className="image-link">
        <img className="airport-image" src={image} />
        <h3 className="city-item-name">{airportLookup(city)}</h3>
        <h3 className="city-item-code">{city}</h3>
        <h3 className="city-depart"> Depart Date: {depDate[0]}</h3>
        <h3 className="city-return"> Return Date: {retDate[0]}</h3>
        <h3 className="city-price"> ${this.props.inspirationSearch.price}</h3>

      </a>
      </div>
    );
  }
}

let mapStateToProps = state => ({
  profile: state.profile,
});


const mapDispatchToProps = dispatch => ({
  lowSearch : search => dispatch(lowFareActions.lowFareSearchAction(search)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FlightItem);
