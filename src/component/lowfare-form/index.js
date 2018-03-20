import React from 'react';
import './lowfare-form.scss';

class LowFareForm extends React.Component {
  constructor(props) {
    console.log('hello');
    super(props);
    this.state = {
      origin: '',
      destination: '',
      departure_date: '',
      nonstop: true,
      max_price: '',
      return_date: '',
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
        <h3>Welcome</h3>
        <form
          className="lowfare-form"
          onSubmit={this.handleSubmit}
          noValidate>

          <input
            type="text"
            name="origin"
            placeholder="origin"
            value={this.state.origin}
            onChange={this.handleChange}/>

          <input
            type="text"
            name="destination"
            placeholder="destination"
            value={this.state.destination}
            onChange={this.handleChange}/>

          <input
            type="date"
            name="departure_date"
            placeholder="departure Date"
            value={this.state.departure_date}
            onChange={this.handleChange}/>

          <input
            type="checkbox"
            name="nonstop"
            placeholder="non-stop"
            value={this.state.nonstop}
            onChange={this.handleChange}/>

          <input
            type="number"
            name="max_price"
            placeholder="Max Price"
            value={this.state.max_price}
            onChange={this.handleChange}/>

          <input
            type="date"
            name="return_date"
            value={this.state.return_date}
            onChange={this.handleChange}/>

          <button type="submit">GTFO!!</button>
        </form>
      </div>
    );
  }
}

export default LowFareForm;
