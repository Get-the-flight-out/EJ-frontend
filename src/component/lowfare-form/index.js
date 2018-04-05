import React from 'react';
import './lowfare-form.scss';
import {renderIf} from '../../lib/utils';
import IataInput from '../iata-input/index';
import { RingLoader } from 'react-spinners';

class LowFareForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: '',
      destination: '',
      departure_date: '',
      nonstop: false,
      max_price: '',
      return_date: '',
      updating: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let {name, value} = e.target;
    this.setState({[name]: value});
  };

  handleSubmit(e) {
    e.preventDefault();
    this.setState({updating: true});
    this.props.onComplete(this.state)
      .then(() => this.setState({
        origin: '',
        destination: '',
        departure_date: '',
        nonstop: false,
        max_price: '',
        return_date: '',
        updating: false,
      }))
      .then(() => document.querySelector('#scott_was_here').click())
      .catch(error => this.setState({error}));
  }

  render() {
    return (
      <div>

        {this.state.updating === true ?
          <div className="loading">
            <RingLoader
              color={'#123abc'}
              loading={this.state.loading}
            />
            <h1 className="load-saying">Please wait</h1>
            <h1 className="load-saying-2">We are fiding the best flight just for you!</h1>
          </div>
          :
          undefined
        }

        <form
          className="lowfare-form generic-form"
          onSubmit={this.handleSubmit}
          noValidate>

          <div className="lowfare-leftside">

            <IataInput
              className="fuzzy-low-fare"
              name="origin"
              placeholder="What is your origin?"
              value={this.state.origin}
              setState={(state) => this.setState(state)}/>

            <label className="labels">Departure</label>
            <input
              type="date"
              name="departure_date"
              placeholder="departure Date"
              value={this.state.departure_date}
              onChange={this.handleChange}/>

            <input
              type="number"
              name="max_price"
              placeholder="Max Price"
              value={this.state.max_price}
              onChange={this.handleChange}/>

          </div>
          <div className="lowfare-rightside">
            <IataInput
              className="fuzzy-low-fare"
              name="destination"
              placeholder="What is your destination?"
              value={this.state.destination}
              setState={(state) => this.setState(state)}/>

            <label className="labels">Return</label>
            <input
              type="date"
              name="return_date"
              value={this.state.return_date}
              onChange={this.handleChange}/>
          </div>

          <a id="scott_was_here" href="#filter-form"></a>
          <button className="lowfare-btn" type="submit">Seach</button>
        </form>
      </div>
    );
  }
}

export default LowFareForm;
