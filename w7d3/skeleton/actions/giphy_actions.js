import * as APIUtil from '../util/api_util';

export const RECEIVE_SEARCH_GIPHYS = 'RECEIVE_SEARCH_GIPHYS';
export const REQUEST_SEARCH_GIPHYS = 'REQUEST_SEARCH_GIPHYS';

// regular action creator, which returns a POJO
export const receiveSearchGiphys = giphys => {
  return {
    type: RECEIVE_SEARCH_GIPHYS,
    giphys
  }
};

// thunk action creator, which will dispatch an action after successful api call
// We want this action creator to dispatch receiveSearchGiphys after the Giphy API call is successful.
export const fetchSearchGiphys = searchTerm => dispatch => {
  return APIUtil.fetchSearchGiphys(searchTerm).then(giphys => {
    receiveSearchGiphys(giphys.data);
  }) 
};
