import React from 'react';
import {connect} from 'react-redux';
import LowFareForm from '../lowfare-form/index';
import FlightItem from '../flight-item/index';
import * as lowFareActions from '../../action/lowfare-actions';
import {renderIf} from '../../lib/utils';

class Content extends React.Component {

  // componentWillMount() {
  //   this.props.getMyProfile();
  //   if(this.props.picture.length === 0){
  //     this.props.getMyPicture();
  //   }
  // }
  render() {
    console.log('LOW FARE SEARCH', this.props.lowFareSearch);
    return (
      <div>
        <h1>Get The Flight Out!</h1>
        <LowFareForm onComplete={this.props.lowSearch}/>
        {this.props.lowFareSearch.length > 0 ?
          this.props.lowFareSearch.map(flight =>
            <div className="images" key={flight[0].fare.total_price}>
              <FlightItem lowFareSearch={flight}/>
            </div>)
          :
          undefined
        }
        {/* {renderIf(this.props.lowFareSearch.length > 0,
          this.props.lowFareSearch[0].map(flight =>
            <div className="images" key={flight[0].fare.total_price}>
              <FlightItem lowFareSearch={flight}/>
            </div>)
        )} */}
        {console.log(this.props.lowFareSearch[0])}
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
