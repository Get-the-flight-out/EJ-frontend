export default (state = [], { type, payload }) => {

  switch (type) {
  case 'CLIENT_PROFILE_CREATE':
  case 'CLIENT_PROFILE_ME':
  case 'CLIENT_PROFILE_UPDATE':
    return payload;
  default:
    return state;
  }
};
