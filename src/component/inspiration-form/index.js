import React from 'react';

class InspirationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: '',
      departure_date: '',
      area: '',
      direct: '',
      duration: '',
      max_price: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEnter(e) {
    this.setState({[e.target.name]: e.target.value});
  };

  handleChange(e) {
    let {name, value} = e.target;
    Promise.resolve(this.setState({[name]: value}))
      .then(() => {
        this.handleSubmit();
      });
  };

  handleSubmit(e) {
    this.setState({origin: this.props.profile.homeAirport});
    localStorage.setItem('area', this.state.area);
    localStorage.setItem('origin', this.state.origin);
    this.props.onComplete(this.state)
      .then(() => this.setState({
        origin: '',
        departure_date: '',
        direct: '',
        duration: '',
        max_price: '',
      }))
      .then(() => this.props.history.push('/content'))
      .catch(error => this.setState({error}));
  }

  render() {
    return (
      <div>
        <h3>GET OUT RIGHT NOW!!!!</h3>
        <form
          className="inspiration-form"
          noValidate>

          <input
            type="number"
            name="duration"
            placeholder="duration"
            value={this.state.duration}
            onChange={this.handleEnter}/>

          <input
            type="number"
            name="max_price"
            placeholder="Max Price"
            value={this.state.max_price}
            onChange={this.handleEnter}/>

          <input
            type="date"
            name="departure_date"
            placeholder="departure Date"
            value={this.state.departure_date}
            onChange={this.handleEnter}/>

          <input
            type="button"
            name="area"
            placeholder="USA"
            value="usa"
            onClick={this.handleChange}/>

          <input
            type="button"
            name="area"
            placeholder="EUROPE"
            value="eu"
            onClick={this.handleChange}/>

          <input
            type="button"
            name="area"
            placeholder="ASIA"
            value="asia"
            onClick={this.handleChange}/>

          <input
            type="button"
            name="area"
            placeholder="The WORLD!"
            value="all"
            onClick={this.handleChange}/>

        </form>
      </div>
    );
  }
}

export default InspirationForm;
