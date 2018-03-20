export default (state = [], {type, payload}) => {

  switch (type) {
  case 'LOW_FARE_SEARCH':
    return [payload, ...state];
  // case 'CLIENT_PICTURE_GETME':
  //   return [...payload.data, ...state];
  // case 'TOKEN_DELETE':
  //   return [];
  default:
    return state;
  }
};
