import * as actions from '../../src/action/lowfare-actions';
require('jest');

describe('Lowfare actions', function() {
  beforeAll(() => {
    this.action = actions.lowFareSearch({
      origin: 'SEA',
      destination: 'OMA',
      max_price: '1000',
      departure_date: '2018-12-01',
    });
  });

  it('should create an action with type of LOW_FARE_SEARCH', () => {
    expect(this.action.type).toEqual('LOW_FARE_SEARCH');
  });

  it('should create an action with a property origin', () => {
    expect(this.action.payload).toHaveProperty('origin');
  });

  it('should create an action with a property destination', () => {
    expect(this.action.payload).toHaveProperty('destination');
  });

  it('should create an action with the property max_price', () => {
    expect(this.action.payload).toHaveProperty('max_price');
  });
});
