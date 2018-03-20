import React from 'react';
import LowFareForm from '../lowfare-form/index';

export default class Content extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, I am authorized to see this!</h1>
        <p>{this.props.token}</p>
        <LowFareForm/>
      </div>
    );
  }
}
