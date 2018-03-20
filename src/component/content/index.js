import React from 'react';
import {connect} from 'react-redux';
import LowFareForm from '../lowfare-form/index';
import * as lowFareActions from '../../action/lowfare-actions';

class Content extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, I am authorized to see this!</h1>
        <p>{this.props.token}</p>
        <LowFareForm onComplete={this.props.lowFareSearch}/>
      </div>
    );
  }
}

let mapSetToProps = state => ({
  lowFareSearch: state.lowFareSearch,
});

const mapDispatchToProps = dispatch => ({
  lowFareSearch : search => dispatch(lowFareActions.lowFareSearchAction(search)),
});

export default connect(mapSetToProps, mapDispatchToProps)(Content);
