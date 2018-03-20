import superagent from 'superagent';

export const lowFareSearch = searchResults => ({
  type: 'LOW_FARE_SEARCH',
  payload: searchResults,
});

export const lowFareSearchAction = search => dispatch => {
  let token = JSON.parse(localStorage.getItem('token'));
  console.log('fuck search ***', search);
  return superagent.get(`${__API_URL__}/lowfare-search`)
    .set('Authorization', `Bearer ${token}`)
    .query({
      origin: search.origin,
      destination: search.destination,
      departure_date: search.departure_date,
      // nonstop: search.nonstop,
      // max_price: search.max_price,
      // return_date: search.return_date,
    })
    .then(res => {
      console.log('lowFareSearch action fucking words');
      return dispatch(lowFareSearch(res.body));
    })
    .catch(err => console.log(err));
};
