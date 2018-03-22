import React from 'react';
import './lowfare-form.scss';
import {renderIf} from '../../lib/utils';
import FuzzySuggestion from '../fuzzy-suggestion/index';

class LowFareForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: '',
      destination: '',
      departure_date: '',
      nonstop: true,
      max_price: '',
      return_date: '',
      fuzzyShown: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let {name, value} = e.target;
    fuzzyShown: true,
    this.setState({[name]: value});
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state)
      .then(() => this.setState({
        origin: '',
        destination: '',
        departure_date: '',
        nonstop: true,
        max_price: '',
        return_date: '',
      }))
      .then(() => this.props.history.push('/content'))
      .catch(error => this.setState({error}));
  }

  render() {
    return (
      <div>
        <form
          className="lowfare-form generic-form"
          onSubmit={this.handleSubmit}
          noValidate>

          <div className="lowfare-leftside">
            <input
              type="text"
              name="origin"
              placeholder="What is your origin?"
              value={this.state.origin}
              onChange={this.handleChange}/>

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
            <input
              type="text"
              name="destination"
              placeholder="What is your destination?"
              value={this.state.destination}
              onChange={this.handleChange}/>

            {renderIf(this.state.fuzzyShown,
              <FuzzySuggestion
                fuseResults={this.state.fuseResults}
                setState={(state) => this.setState(state)}/>
            )}

            <label className="labels">Return</label>
            <input
              type="date"
              name="return_date"
              value={this.state.return_date}
              onChange={this.handleChange}/>
          </div>
          <button className="lowfare-btn" type="submit">Seach</button>
        </form>
      </div>
    );
  }
}

export default LowFareForm;
