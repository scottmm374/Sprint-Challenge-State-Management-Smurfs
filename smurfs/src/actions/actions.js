import axios from "axios";

export const GET_SMURF_PENDING = "GET_SMURF_PENDING";
export const GET_SMURF_SUCCESS = "GET_SMURF_SUCCESS";
export const GET_SMURF_FAILED = "GET_SMURF_FAILED";

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
