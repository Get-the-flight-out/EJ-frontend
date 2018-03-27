import React from 'react';

import './inspiration-item.scss';
import {connect} from 'react-redux';
import { airportLookup } from '../../lib/airport-lookup';
import * as inspirationAction from '../../action/inspiration-actions';

class FlightItem extends React.Component {

  render() {
    let area = localStorage.getItem('area');
    let origin = localStorage.getItem('origin');
    let city = this.props.inspirationSearch.destination;
    let depDate = this.props.inspirationSearch.departure_date;
    let retDate = this.props.inspirationSearch.return_date;
    const iata = this.props.inspirationSearch.destination;
    const image = this.props.images[iata] ? this.props.images[iata] : this.props.images['GENERIC'];
    return (
      <div className="flight-item" ><a className="image-link" href={`https://www.kayak.com/flights/${origin}-${city}/${depDate}/${retDate}/?sort=price_a`}>
        <img className="airport-image" src={image} />
        <h3 className="city-item-name">{airportLookup(city)}</h3>
        <h3 className="city-item-code">{city}</h3>
        <h3 className="city-depart"> Depart Date: {depDate}</h3>
        <h3 className="city-return"> Return Date: {retDate}</h3>
        <h3 className="city-price"> ${this.props.inspirationSearch.price}</h3>

      </a>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  inpSearch : search => dispatch(inspirationAction.inspirationAction(search)),
});

export default connect(null, mapDispatchToProps)(FlightItem);
