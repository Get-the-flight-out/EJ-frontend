export default (state=null, {type, payload}) => {

  switch (type) {
  case 'INSPIRATION_SEARCH':
    return payload;
  case 'LOW_FARE_SEARCH':
    return null;
  default:
    return state;
  }
};
