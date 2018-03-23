import * as actions from '../../src/action/profile-actions';
require('jest');

describe('Profile actions', function() {
  beforeAll(() => {
    let profile = {
      email: 'foo@foo.com',
      name: 'bob',
      homeAirport: 'SEA',
    };
    this.action = actions.getMyProfile(profile);
  });

  it('should create an action with type of CLIENT_PROFILE_ME', () => {
    expect(this.action.type).toEqual('CLIENT_PROFILE_ME');
  });

  it('should create an action with a property email', () => {
    expect(this.action.payload).toHaveProperty('email');
  });

  it('should create an action with a property name', () => {
    expect(this.action.payload).toHaveProperty('name');
  });

  it('should create an action with the property homeAirport', () => {
    expect(this.action.payload).toHaveProperty('homeAirport');
  });
});
