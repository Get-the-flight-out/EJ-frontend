import React from 'react';
import {connect} from 'react-redux';
import { airportLookup } from '../../lib/airport-lookup';
import * as inspirationAction from '../../action/inspiration-actions';
import missingImage from '../../assets/airport-img/Airport-manners.jpg';

class FlightItem extends React.Component {

  render() {
    let area = localStorage.getItem('area');
    let image = `../../../src/assets/airport-img/${this.props.inspirationSearch.destination}.jpg`;
    return (
      <div className="flight-item">>
      <object data={image} type="image/jpg">
        <img className="airport-image" src={missingImage}/>
      </object>

      <h3 className="city-name"> City: {airportLookup(this.props.inspirationSearch.destination)}</h3>
      <h3 className="city-name"> Airport Code: {this.props.inspirationSearch.destination}</h3>
      <h3 className="city-name"> Depart Date: {this.props.inspirationSearch.departure_date}</h3>
      <h3 className="city-name"> Price: {this.props.inspirationSearch.price}</h3>
      <h3 className="city-name"> Return Date: {this.props.inspirationSearch.return_date}</h3>


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

// export default FlightItem;

// onDoubleClick={this.props.onComplete({origin: this.props.inspirationSearch.destination})}
