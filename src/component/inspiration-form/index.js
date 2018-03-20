import React from 'react';

class InspirationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: '',
      destination: '',
      departure_date: '',
      area: '',
      direct: false,
      duration: '',
      max_price: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let {name, value} = e.target;
    Promise.resolve(this.setState({[name]: value}))
      .then(() => {
        this.handleSubmit();
      });
  };

  handleSubmit(e) {
    this.setState({origin: this.props.profile.homeAirport});
    this.props.onComplete(this.state)
      // .then(() => this.setState({
      //   origin: '',
      //   destination: '',
      //   departure_date: '',
      //   direct: true,
      //   duration: '',
      //   max_price: '',
      // }))
      .then(() => this.props.history.push('/content'))
      .catch(error => this.setState({error}));
  }

  render() {
    return (
      <div>
        <h3>Welcome</h3>
        <form
          className="inspiration-form"
          noValidate>

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

        </form>
      </div>
    );
  }
}

export default InspirationForm;
