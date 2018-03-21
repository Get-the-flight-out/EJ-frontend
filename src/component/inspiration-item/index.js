import React from 'react';
import image from '../../images/Airport-manners.jpg';
class FlightItem extends React.Component {

  render() {
    return (
      <div className="flight-item">
        <img className="airport-image" src={image}/>

        <h3 className="city-name"> Airport Code: {this.props.inspirationSearch.destination}</h3>

        <h3 className="city-name"> Depart Date: {this.props.inspirationSearch.departure_date}</h3>

        <h3 className="city-name"> Price: {this.props.inspirationSearch.price}</h3>

        <h3 className="city-name"> Return Date: {this.props.inspirationSearch.return_date}</h3>

      </div>
    );
  }
}

export default FlightItem;
