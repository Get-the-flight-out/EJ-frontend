import React from 'react';

import {connect} from 'react-redux';
import { airportLookup } from '../../lib/airport-lookup';
import * as inspirationAction from '../../action/inspiration-actions';
import missingImage from '../../assets/airport-img/Airport-manners.jpg';

class FlightItem extends React.Component {

  render() {
    let area = localStorage.getItem('area');
    let origin = localStorage.getItem('origin');
    let city = this.props.inspirationSearch.destination;
    let depDate = this.props.inspirationSearch.departure_date;
    let retDate = this.props.inspirationSearch.return_date;
    let image = `../../../src/assets/airport-img/${this.props.inspirationSearch.destination}.jpg`;
    return (
      <div className="flight-item">
        <object data={image} type="image/jpg">
          <img className="airport-image" src={missingImage}/>
        </object>

        <h3 className="city-name"> City: {airportLookup(city)}</h3>
        <h3 className="city-name"> Airport Code: {city}</h3>
        <h3 className="city-name"> Depart Date: {depDate}</h3>
        <h3 className="city-name"> Price: {this.props.inspirationSearch.price}</h3>
        <h3 className="city-name"> Return Date: {retDate}</h3>

        <a href={`https://www.kayak.com/flights/${origin}-${city}/${depDate}/${retDate}/?sort=price_a`}>Go To Flight</a>

        {area === 'usa' ?
          <button type='submit' onClick={() => this.props.inpSearch({origin: this.props.inspirationSearch.destination, area: 'all'})}>{'CLICK ME'}</button>
          :
          undefined
        }

      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  inpSearch : search => dispatch(inspirationAction.inspirationAction(search)),
});

export default connect(null, mapDispatchToProps)(FlightItem);
