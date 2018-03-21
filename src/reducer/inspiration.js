export default (state = [], {type, payload}) => {

  switch (type) {
  case 'INSPIRATION_SEARCH':
    return [payload, ...state];
  case 'LOW_FARE_SEARCH':
    return delete state.data;
  default:
    return state;
  }
};
