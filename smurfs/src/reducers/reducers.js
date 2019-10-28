import {
  GET_SMURF_PENDING,
  GET_SMURF_SUCCESS,
  GET_SMURF_FAILED,
  ADD_SMURF_PENDING,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILED
} from "../actions/actions";

const initialState = {
  isLoading: false,
  addSmurf: false,
  error: null,
  smurfs: []
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_SMURF_PENDING: {
      return {
        ...state,
        isLoading: true
      };
    }

    case GET_SMURF_SUCCESS: {
      return {
        ...state,
        smurfs: [...state.smurfs, ...action.payload],
        isLoading: false
      };
    }

    case GET_SMURF_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    }

    case ADD_SMURF_PENDING: {
      return {
        ...state,
        addSmurf: true
      };
    }

    case ADD_SMURF_SUCCESS: {
      return {
        ...state,
        smurfs: action.payload,
        addSmurf: false
      };
    }

    case ADD_SMURF_FAILED: {
      return {
        ...state,
        error: action.payload,
        addSmurf: false
      };
    }
    default:
      return state;
  }
}
