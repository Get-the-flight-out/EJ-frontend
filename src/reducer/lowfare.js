export default (state=null, {type, payload}) => {

  switch (type) {
  case 'LOW_FARE_SEARCH':
    return payload;
  case 'INSPIRATION_SEARCH':
    return null;
  default:
    return state;
  }
};
