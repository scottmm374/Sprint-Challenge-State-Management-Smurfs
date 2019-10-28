import axios from "axios";

// Get Smurfs
export const GET_SMURF_PENDING = "GET_SMURF_PENDING";
export const GET_SMURF_SUCCESS = "GET_SMURF_SUCCESS";
export const GET_SMURF_FAILED = "GET_SMURF_FAILED";

//Creating new smurfs
export const ADD_SMURF = "ADD_SMURF";

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

export function addSmurf(smurf) {
  return dispatch => {
    dispatch({ type: ADD_SMURF });
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(res => {
        dispatch({ type: GET_SMURF_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: GET_SMURF_FAILED, payload: err });
      });
  };
}
