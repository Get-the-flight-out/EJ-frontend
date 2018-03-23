import React from 'react';
import {connect} from 'react-redux';
import LowFareForm from '../lowfare-form/index';
import FlightItem from '../flight-item/index';
import * as lowFareActions from '../../action/lowfare-actions';
import * as inspirationAction from '../../action/inspiration-actions';
import * as profileActions from '../../action/profile-actions';
import InspirationForm from '../inspiration-form/index';
import InspirationItem from '../inspiration-item/index';
import './content.scss';

class Content extends React.Component {
  componentWillMount() {
    console.log('componentWillMount: Attempting to get profile: token: ',
      JSON.parse(this.props.token));
    this.props.getMyProfile(this.props.token);
  }

  render() {
    return (
      <div id="content-div" className="content-div">
        <div className="lowfareform-wrapper">
          <LowFareForm onComplete={this.props.lowSearch}/>
        </div>
        <h3 id="discover-destinations" className="discover-destinations">Discover Destinations</h3>
        <InspirationForm
          onComplete={this.props.inpSearch}
          profile={this.props.profile}/>

        <div className="image-holder">
          {this.props.inspirationSearch ?
            this.props.inspirationSearch.map((flight, idx) =>
              <div className="flight-obj" key={'inspire_'.concat(idx)}>
                <InspirationItem
                  inspirationSearch={flight}/>
              </div>)
            :
            undefined
          }
        </div>

        <div className="image-holder">
          {this.props.lowFareSearch ?
            this.props.lowFareSearch.map((flight, idx) =>
              <div className="flight-obj" key={'lowfare_'.concat(idx)}>
                <FlightItem lowFareSearch={flight}/>
              </div>)
            :
            undefined
          }
        </div>
      </div>
    );
  }
}

let mapSetToProps = state => ({
  lowFareSearch: state.lowFareSearch,
  profile: state.profile,
  inspirationSearch: state.inspirationSearch,
  token: state.token,
});

const mapDispatchToProps = dispatch => ({
  lowSearch : search => dispatch(lowFareActions.lowFareSearchAction(search)),
  inpSearch : search => dispatch(inspirationAction.inspirationAction(search)),
  getMyProfile : token => dispatch(profileActions.getMyProfileRequest(token)),
});

export default connect(mapSetToProps, mapDispatchToProps)(Content);
