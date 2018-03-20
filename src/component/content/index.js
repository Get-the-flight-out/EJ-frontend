import React from 'react';
import {connect} from 'react-redux';
import LowFareForm from '../lowfare-form/index';
import FlightItem from '../flight-item/index';
import * as lowFareActions from '../../action/lowfare-actions';
import {renderIf} from '../../lib/utils';

class Content extends React.Component {

  render() {
    return (
      <div>
        <h1>Get The Flight Out!</h1>
        {console.log('$$$$$$$$$$$$$$$',this.props.lowFareSearch)}
        <LowFareForm onComplete={this.props.lowSearch}/>
        {this.props.lowFareSearch.length > 0 ?
          this.props.lowFareSearch[0].map(flight =>
            <div className="images" key={flight.fare.total_price}>
              <FlightItem lowFareSearch={flight}/>
            </div>)
          :
          undefined
        }
      </div>
    );
  }
}

let mapSetToProps = state => ({
  lowFareSearch: state.lowFareSearch,
});

const mapDispatchToProps = dispatch => ({
  lowSearch : search => dispatch(lowFareActions.lowFareSearchAction(search)),
});

export default connect(mapSetToProps, mapDispatchToProps)(Content);
