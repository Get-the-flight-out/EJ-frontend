import * as actions from '../../src/action/inspiration-actions';
require('jest');

describe('Inspiration actions', function() {
  beforeAll(() => {
    this.action = actions.inspirationSearch({
      origin: 'SEA',
      max_price: '1000',
      duration: '10',
    });
  });

  it('should create an action with type of INSPIRATION_SEARCH', () => {
    expect(this.action.type).toEqual('INSPIRATION_SEARCH');
  });

  it('should create an action with a property origin', () => {
    expect(this.action.payload).toHaveProperty('origin');
  });

  it('should create an action with a property duration', () => {
    expect(this.action.payload).toHaveProperty('duration');
  });

  it('should create an action with the property max_price', () => {
    expect(this.action.payload).toHaveProperty('max_price');
  });
});
