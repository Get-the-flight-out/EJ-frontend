import reducer from '../../src/reducer/inspiration';
require('jest');

describe('Inspiration reducer', () => {
  it('should return the initial state on first call', () => {
    expect(reducer(undefined, {})).toEqual(null);
  });

  it('should handle an INSPIRATION_SEARCH request', () => {
    let state = reducer('temp_token', {
      type: 'INSPIRATION_SEARCH',
      payload: 'new_token',
    });

    expect(state).toEqual('new_token');
  });

  it('should delete the store LOW_FARE_SEARCH type is encountered', () => {
    let state = reducer('test_token', {
      type: 'LOW_FARE_SEARCH',
    });

    expect(state).toBeNull();
  });
});
