import React from 'react';
import './flight-item.scss';
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
    let depDate = new Date(path[path.length - 1].departs_at);
    this.props.lowFareSearch.itineraries[0].inbound ? retDate = new Date(this.props.lowFareSearch.itineraries[0].inbound.flights[0].departs_at) : undefined;

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
        <h3 className="city-depart"> Depart: {depDate.toLocaleDateString()} at {depDate.toLocaleTimeString('en-US')}</h3>
        <h3 className="city-price-item"> ${this.props.lowFareSearch.fare.total_price}</h3>

        {this.props.lowFareSearch.itineraries[0].inbound ?
          <h3 className="city-return-lowfare"> Return: {retDate.toLocaleDateString()} at {retDate.toLocaleTimeString('en-US')}</h3>
          :
          undefined
        }

        {path.length > 1 ?
          <h3 className="NonStop">layovers: {path.length - 1}</h3>
          :
          <h3 className="NonStop">NonStop flight</h3>
        }

      </a>
      </div>
    );
  }
}

export default FlightItem;


// test.toLocaleTimeString('en-US')
