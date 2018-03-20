export default (state = [], { type, payload }) => {

  switch (type) {
  case 'CLIENT_PROFILE_CREATE':
    return payload;
  case 'CLIENT_PROFILE_ME':
    return payload;
  case 'CLIENT_PROFILE_UPDATE':
    return payload;
  case 'TOKEN_REMOVE':
    return null;
  default:
    return state;
  }
};
