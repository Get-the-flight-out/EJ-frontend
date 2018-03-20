import superagent from 'superagent';

export const lowFareSearch = searchResults => ({
  type: 'LOW_FARE_SEARCH',
  payload: searchResults,
});

export const lowFareSearchAction = search => dispatch => {
  let token = JSON.parse(localStorage.getItem('token'));
  // console.log('search', search);
  let queryData = {
    origin: search.origin,
    destination: search.destination,
    departure_date: search.departure_date,
  }
  if (search.nonstop) queryData.nonstop = search.nonstop;
  if (search.max_price) queryData.max_price = search.max_price;
  if (search.return_date) queryData.return_date = search.return_date;

  return superagent.get(`${__API_URL__}/lowfare-search`)
    .set('Authorization', `Bearer ${token}`)
    .query(queryData)
    .then(res => {
      // console.log('lowFareSearch action fucking words');
      return dispatch(lowFareSearch(res.body));
    })
    .catch(err => console.log(err));
};
