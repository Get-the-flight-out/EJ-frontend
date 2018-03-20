export default store => next => action => {

  console.group(action.type || 'Initial State');
  console.info('DISPATCHING',action);

  let result = next(action);
  console.log('__NEXT_STATE__',store.getState());

  console.groupEnd(action.type || 'Initial State');

  return result;
};
