import reducer from '../../src/reducer/auth';
require('jest');

describe('Auth reducer', () => {
  it('should return the initial state on first call', () => {
    expect(reducer(undefined, {})).toEqual(null);
  });

  it('should handle TOKEN_SET', () => {
    let state = reducer('old_token', {
      type: 'TOKEN_SET',
      payload: 'new_token',
    });

    expect(state).toEqual('new_token');
  });

  it('should handle TOKEN_DELETE', () => {
    global.localStorage = {token: 'test_token'};

    let state = reducer('test_token', {
      type: 'TOKEN_DELETE',
    });

    expect(state).toBeNull();
    expect(global.localStorage).toEqual({});
  });
});
