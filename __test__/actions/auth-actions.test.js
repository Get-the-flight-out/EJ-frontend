import * as actions from '../../src/action/auth-actions';
require('jest');

describe('Auth actions', function() {
  describe('#tokenSet', function() {
    beforeAll(() => {
      this.action = actions.tokenSet('fake-token');
    });

    it('should create an action with type of CLIENT_PROFILE_ME', () => {
      expect(this.action.type).toEqual('TOKEN_SET');
    });

    it('should create an action with a property email', () => {
      expect(this.action.payload).toEqual('fake-token');
    });
  });

  describe('#tokenDelete', function() {
    beforeAll(() => {
      this.action = actions.tokenDelete();
    });

    it('should create an action with type of TOKEN_DELETE', () => {
      expect(this.action.type).toEqual('TOKEN_DELETE');
    });
  });
});
