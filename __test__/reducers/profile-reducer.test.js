import reducer from '../../src/reducer/profile';
require('jest');

describe('Profile reducer', () => {
  it('should return the initial state on first call', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should return the payload with the type CLIENT_PROFILE_CREATE', () => {
    let state = reducer(null, {
      type: 'CLIENT_PROFILE_CREATE',
      payload: 'test-string',
    });

    expect(state).toEqual('test-string');
  });

  it('should return the payload with the type CLIENT_PROFILE_ME', () => {
    let state = reducer(null, {
      type: 'CLIENT_PROFILE_ME',
      payload: 'test-string',
    });

    expect(state).toEqual('test-string');
  });

  it('should return the payload with the type CLIENT_PROFILE_UPDATE', () => {
    let state = reducer(null, {
      type: 'CLIENT_PROFILE_UPDATE',
      payload: 'test-string',
    });

    expect(state).toEqual('test-string');
  });
});
