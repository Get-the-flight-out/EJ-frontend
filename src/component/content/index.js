import React from 'react';
import {connect} from 'react-redux';
import LowFareForm from '../lowfare-form/index';
import FlightItem from '../flight-item/index';
import * as lowFareActions from '../../action/lowfare-actions';
import * as inspirationAction from '../../action/inspiration-actions';
import * as profileActions from '../../action/profile-actions';
import InspirationForm from '../inspiration-form/index';
import InspirationItem from '../inspiration-item/index';

class Content extends React.Component {
  componentWillMount() {
    this.props.getMyProfile();
  }

  render() {
    return (
      <div>
        <h1>Get The Flight Out!</h1>
        <LowFareForm onComplete={this.props.lowSearch}/>

        <InspirationForm
          onComplete={this.props.inpSearch}
          profile={this.props.profile}/>

        {this.props.inspirationSearch ?
          this.props.inspirationSearch.map((flight, idx) =>
            <div className="images" key={'inspire_'.concat(idx)}>
              <InspirationItem inspirationSearch={flight}/>
            </div>)
          :
          undefined
        }

        {this.props.lowFareSearch ?
          this.props.lowFareSearch.map((flight, idx) =>
            <div className="images" key={'lowfare_'.concat(idx)}>
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
  profile: state.profile,
  inspirationSearch: state.inspirationSearch,
});

const mapDispatchToProps = dispatch => ({
  lowSearch : search => dispatch(lowFareActions.lowFareSearchAction(search)),
  inpSearch : search => dispatch(inspirationAction.inspirationAction(search)),
  getMyProfile : profile => dispatch(profileActions.getMyProfileRequest(profile)),
});

export default connect(mapSetToProps, mapDispatchToProps)(Content);
