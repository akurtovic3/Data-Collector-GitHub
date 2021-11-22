import * as types from "../actionTypes";

const initialState = {
  loading: false,
  user: null,
  error: null,
  token: null,
  followers: null,
  following: null
}

const userReducer = (state = initialState, action) => {

  switch (action.type) {

    case types.GITHUB_SIGN_IN_START:
    case types.LOGOUT_START:
      return {
        ...state,
        loading: true,
      };

    case types.GITHUB_SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };

    case types.SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case types.SET_FOLLOWERS:
      return {
        ...state,
        followers: action.payload,
      };

    case types.SET_FOLLOWING:
      return {
        ...state,
        following: action.payload,
      };

    case types.SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };

    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        token: null,
        loading: false
      };

    case types.GITHUB_SIGN_IN_FAIL:
    case types.LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;