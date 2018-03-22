import superagent from 'superagent';

export const inspirationSearch = searchResults => ({
  type: 'INSPIRATION_SEARCH',
  payload: searchResults,
});

export const inspirationAction = search => dispatch => {
  let token = JSON.parse(localStorage.getItem('token'));
  let queryData = {
    origin: search.origin,
    area: search.area,
  };
  if (search.direct) queryData.direct = search.direct;
  if (search.duration) queryData.duration = search.duration;
  if (search.max_price) queryData.max_price = search.max_price;
  if (search.destination) queryData.destination = search.destination;
  if (search.departure_date) queryData.departure_date = search.departure_date;

  return superagent.get(`${__API_URL__}/inspiration-search`)
    .set('Authorization', `Bearer ${token}`)
    .query(queryData)
    .then(res => {
      return dispatch(inspirationSearch(res.body));
    })
    .catch(err => console.log(err));
};
