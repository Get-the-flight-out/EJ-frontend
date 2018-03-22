import React from 'react';
import './inspiration-form.scss';

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
        <form
          className="inspiration-form generic-form"
          noValidate>
          <div className="button-form">
            <input className="search-btn USA"
              type="button"
              name="area"
              placeholder="USA"
              value="usa"
              onClick={this.handleChange}/>

            <input className="search-btn EU"
              type="button"
              name="area"
              placeholder="EUROPE"
              value="eu"
              onClick={this.handleChange}/>

            <input className="search-btn ASIA"
              type="button"
              name="area"
              placeholder="ASIA"
              value="asia"
              onClick={this.handleChange}/>

            <input className="search-btn ALL"
              type="button"
              name="area"
              placeholder="The WORLD!"
              value="all"
              onClick={this.handleChange}/>
          </div>

          <div className="filter-form">
            <label className="form-label">Departure</label>
            <div>
              <input className="filters"
                type="date"
                name="departure_date"
                placeholder="departure Date"
                value={this.state.departure_date}
                onChange={this.handleEnter}/>
              <input className="filters"
                type="number"
                name="duration"
                placeholder="duration"
                value={this.state.duration}
                onChange={this.handleEnter}/>

              <input className="filters"
                type="number"
                name="max_price"
                placeholder="Max Price"
                value={this.state.max_price}
                onChange={this.handleEnter}/>

            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default InspirationForm;
