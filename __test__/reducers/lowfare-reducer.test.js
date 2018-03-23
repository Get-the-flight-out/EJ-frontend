import reducer from '../../src/reducer/lowfare';
require('jest');

describe('Lowfare reducer', () => {
  it('should return the initial state on first call', () => {
    expect(reducer(undefined, {})).toEqual(null);
  });

  it('should return the payload with the type LOW_FARE_SEARCH', () => {
    let state = reducer(null, {
      type: 'LOW_FARE_SEARCH',
      payload: 'test-string',
    });

    expect(state).toEqual('test-string');
  });

  it('should return the null INSPIRATION_SEARCH', () => {
    let state = reducer('test-string', {
      type: 'INSPIRATION_SEARCH',
    });

    expect(state).toEqual(null);
  });
});
