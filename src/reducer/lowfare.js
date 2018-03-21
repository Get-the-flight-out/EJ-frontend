export default (state = [], {type, payload}) => {

  switch (type) {
  case 'LOW_FARE_SEARCH':
    return [payload, ...state];
  case 'INSPIRATION_SEARCH':
    return delete state.data;
  default:
    return state;
  }
};
