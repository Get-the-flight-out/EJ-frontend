import React from 'react';
import { airportLookup } from '../../lib/airport-lookup';

class FlightItem extends React.Component {

  render() {
    let retDate;
    let image = `../../../src/assets/airport-img/${this.props.lowFareSearch.itineraries[0].outbound.flights[0].destination.airport}.jpg`;
    let origin = localStorage.getItem('origin');
    let airport = this.props.lowFareSearch.itineraries[0].outbound.flights[0].destination.airport;
    let city = airportLookup(this.props.lowFareSearch.itineraries[0].outbound.flights[0].destination.airport);
    let depDate = this.props.lowFareSearch.itineraries[0].outbound.flights[0].departs_at;
    this.props.lowFareSearch.itineraries[0].inbound ? retDate = this.props.lowFareSearch.itineraries[0].inbound.flights[0].departs_at : undefined;
    console.log('this is return', retDate);
    return (
      <div className="flight-item">
        <img className="airport-image" src={image}/>

        <h3 className="city-name"> Airport Code: {airport}</h3>

        <h3 className="city-name"> City: {city}</h3>

        <h3 className="city-name"> Depart Time: {depDate}</h3>

        <h3 className="city-name"> Price: {this.props.lowFareSearch.fare.total_price}</h3>

        {this.props.lowFareSearch.itineraries[0].inbound ?
          <h3 className="city-name"> Return Date: {retDate}</h3>
          :
          undefined
        }

        {retDate !== undefined ?
          <a href={`https://www.kayak.com/flights/${origin}-${airport}/${depDate}/${retDate}/?sort=price_a`}>Go To Flight</a>
          :
          <a href={`https://www.kayak.com/flights/${origin}-${airport}/${depDate}/?sort=price_a`}>Go To Flight</a>
        }
      </div>
    );
  }
}

export default FlightItem;
