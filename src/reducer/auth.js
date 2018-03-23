export default (state=null, {type, payload}) => {
  switch (type) {
  case 'TOKEN_SET': return payload;
  case 'TOKEN_DELETE':
    delete localStorage.token;
    return null;
  default: return state;
  }
};
