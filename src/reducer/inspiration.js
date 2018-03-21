export default (state = [], {type, payload}) => {

  switch (type) {
  case 'INSPIRATION_SEARCH':
    return [payload, ...state];
  default:
    return state;
  }
};
