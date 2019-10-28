import axios from "axios";

// Get Smurfs
export const GET_SMURF_PENDING = "GET_SMURF_PENDING";
export const GET_SMURF_SUCCESS = "GET_SMURF_SUCCESS";
export const GET_SMURF_FAILED = "GET_SMURF_FAILED";

//Creating new smurfs
export const ADD_SMURF_PENDING = "ADD_SMURF_PENDING";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILED = "ADD_SMURF_FAILED";

export function getSmurf() {
  return dispatch => {
    dispatch({ type: GET_SMURF_PENDING });

    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        dispatch({ type: GET_SMURF_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: GET_SMURF_FAILED, payload: err });
      });
  };
}

export function addSmurf() {
  return dispatch => {
    axios
      .post("http://localhost:3333/smurfs")
      .then(res => {
        dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: ADD_SMURF_FAILED, payload: err });
      });
  };
}
