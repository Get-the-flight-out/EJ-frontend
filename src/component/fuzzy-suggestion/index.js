import React from 'react';
import './fuzzy-suggestion.scss';

export default class FuzzySuggestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shown: false,
    }
    this.handleFuzzyClick = this.handleFuzzyClick.bind(this);
  }
  handleFuzzyClick(e) {
    e.preventDefault();
    this.props.setState({homeAirport: e.target.dataset.iata, shown: false})
  }
  render() {
    return (<ul className="fuzzy-suggestions">
      {this.props.fuseResults.length ?
        this.props.fuseResults.map( (airport, index) => {
        return (
          <li key={index} onClick={this.handleFuzzyClick}>
            <h3 data-iata={airport.iata}>{airport.iata}</h3>
            <p data-iata={airport.iata}>{airport.city}</p>
            <p data-iata={airport.iata}>{airport.name}</p>
          </li>)
        }) : undefined
      }
    </ul>)
  }
}
