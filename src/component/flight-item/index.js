import React from 'react';
import { airportLookup } from '../../lib/airport-lookup';

class FlightItem extends React.Component {

  render() {
    let retDate;
    let part1;
    const path = this.props.lowFareSearch.itineraries[0].outbound.flights;
    const iata = path[path.length - 1].destination.airport;
    const image = this.props.images[iata] ? this.props.images[iata] : this.props.images['GENERIC'];
    let origin = localStorage.getItem('origin');
    let airport = path[path.length - 1].destination.airport;
    let city = airportLookup(path[path.length - 1].destination.airport);
    let depDate = path[path.length - 1].departs_at;
    this.props.lowFareSearch.itineraries[0].inbound ? retDate = this.props.lowFareSearch.itineraries[0].inbound.flights[0].departs_at : undefined;

    {retDate !== undefined ?
      part1 = `${origin}-${airport}/${depDate}/${retDate}`
      :
      part1 = `${origin}-${airport}/${depDate}`;
    }
    return (
      <div className="flight-item"><a className="image-link"href={`https://www.kayak.com/flights/${part1}/?sort=price_a`}>
        <img className="airport-image" src={image}/>
        <h3 className="city-item-code">{airport}</h3>
        <h3 className="city-item-name">{city}</h3>
        <h3 className="city-depart"> Depart Time: {depDate}</h3>
        <h3 className="city-price"> ${this.props.lowFareSearch.fare.total_price}</h3>

        {this.props.lowFareSearch.itineraries[0].inbound ?
          <h3 className="city-return"> Return Date: {retDate}</h3>
          :
          undefined
        }

      </a>
      </div>
    );
  }
}

export default FlightItem;
