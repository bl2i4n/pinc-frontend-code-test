import * as types from './actionTypes';

function url() {
  return 'https://staging-api.pincapp.com/api/questions';
}

export function receiveData(json) {
  return {
    type: types.RECEIVE_DATA,
    data: json.data
  };
}

export function fetchData() {
  return dispatch => {
    return fetch(url(), {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(json => dispatch(receiveData(json)));
  };
}
