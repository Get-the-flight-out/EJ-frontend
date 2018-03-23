import superagent from 'superagent';

export const getMyProfile = profile => ({
  type: 'CLIENT_PROFILE_ME',
  payload: profile,
});

export const getMyProfileRequest = token => (dispatch, getState) => {
  return superagent.get(`${__API_URL__}/findme`)
    .set('Authorization', `Bearer ${JSON.parse(token)}`)
    .then(res => dispatch(getMyProfile(res.body)))
    .catch(err => console.log(err));
};
