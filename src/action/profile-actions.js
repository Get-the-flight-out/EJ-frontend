import superagent from 'superagent';

export const getMyProfile = profile => ({
  type: 'CLIENT_PROFILE_ME',
  payload: profile,
});

export const getMyProfileRequest = profile => (dispatch, getState) => {
  let token = JSON.parse(localStorage.getItem('token'));
  console.log('$$$$$$$$', token);
  return superagent.get(`${__API_URL__}/findme`)
    .set('Authorization', `Bearer ${token}`)
    .then(res => dispatch(getMyProfile(res.body)));

};
