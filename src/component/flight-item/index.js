import React from 'react';
// import image from '../../assets/Airport-manners.jpg';
import { airportLookup } from '../../lib/airport-lookup';

class FlightItem extends React.Component {

  render() {
    let image = `../../../src/assets/airport-img/${this.props.lowFareSearch.itineraries[0].outbound.flights[0].destination.airport}.jpg`;
    console.log('IMAGE', image);
    return (
      <div className="flight-item">
        <img className="airport-image" src={image}/>

        <h3 className="city-name"> Airport Code: {this.props.lowFareSearch.itineraries[0].outbound.flights[0].destination.airport}</h3>

        <h3 className="city-name"> City: {airportLookup(this.props.lowFareSearch.itineraries[0].outbound.flights[0].destination.airport)}</h3>

        <h3 className="city-name"> Depart Time: {this.props.lowFareSearch.itineraries[0].outbound.flights[0].departs_at}</h3>

        <h3 className="city-name"> Price: {this.props.lowFareSearch.fare.total_price}</h3>

        {this.props.lowFareSearch.itineraries[0].inbound ?
          <h3 className="city-name"> Return Date: {this.props.lowFareSearch.itineraries[0].inbound.flights[0].departs_at}</h3>
          :
          undefined
        }
      </div>
    );
  }
}

export default FlightItem;
