import React from 'react';
import './iata-input.scss';
import Fuse from  'fuse-js-latest';
import {renderIf} from '../../lib/utils';
import airports from '../../data/airports.json';


export default class IataInput extends React.Component {
  constructor(props) {
    super(props);

    // FUSE configuration
    let options = {
      shouldSort: true,
      threshold: 0.1,
      location: 0,
      distance: 75,
      maxPatternLength: 10,
      minMatchCharLength: 1,
      keys: [{
        name: 'iata',
        weight: 0.5,
      }, {
        name: 'name',
        weight: 0.2,
      }, {
        name: 'city',
        weight: 0.4,
      }],
    };

    this.state = {
      fuseResults: [],
      fuzzyShown: false,
      fuse: new Fuse(airports, options),
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFuzzyClick = this.handleFuzzyClick.bind(this);
  }

  handleFuzzyClick(e) {
    e.preventDefault();
    let name = this.props.name;
    this.props.setState({[name]: e.target.dataset.iata});
    this.setState({fuzzyShown: false});
  };

  handleChange(e) {
    let {name, value} = e.target;
    this.props.setState({[name]: value});

    const fuseResults = this.state.fuse.search(value).slice(0, 6);
    this.setState({
      fuseResults,
      [name]: value,
      fuzzyShown: true,
    });
  };

  render() {
    return (
      <div className={this.props.className}>
        <input
          type="text"
          autoComplete="off"
          name={this.props.name}
          value={this.props.value}
          onChange={this.handleChange}
          placeholder={this.props.placeholder}
        />

        {renderIf(this.state.fuzzyShown,
          <ul className="fuzzy-input">
            {this.state.fuseResults.length ?
              this.state.fuseResults.map( (airport, index) => {
                return (
                  <li key={index} onClick={this.handleFuzzyClick}>
                    <h3 data-iata={airport.iata}>{airport.iata}</h3>
                    <p data-iata={airport.iata}>{airport.city}</p>
                    <p data-iata={airport.iata}>{airport.name}</p>
                  </li>
                );
              }) : undefined
            }
          </ul>
        )}
      </div>
    );
  }
}
