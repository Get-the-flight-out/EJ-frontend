import React from 'react';

class FlightItem extends React.Component {

  render() {
    console.log('FLIGHT ITEM PROPS',this.props.lowFareSearch);

    return (
      <div className="flight-item">
        <img className="airport-image" src={this.props.airportImage}/>
        <h3 className="city-name">{this.props.lowFareSearch[0].itineraries[0].outbound.flights[0].destination.airport}</h3>
      </div>
    );
  }
}

export default FlightItem;
