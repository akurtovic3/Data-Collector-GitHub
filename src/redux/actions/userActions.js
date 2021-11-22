import * as types from "../actionTypes";
import { auth, githubAuthProvider } from "../../firebase";

const githubSignInStart = () => ({
  type: types.GITHUB_SIGN_IN_START,
});

const githubSignInSuccess = (user) => ({
  type: types.GITHUB_SIGN_IN_SUCCESS,
  payload: user,
});

const githubSignInFail = (error) => ({
  type: types.GITHUB_SIGN_IN_FAIL,
  payload: error,
});

const logoutStart = () => ({
  type: types.LOGOUT_START,
});

const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});

const logoutError = (error) => ({
  type: types.LOGOUT_FAIL,
  payload: error,
});

export const setToken = (token) => ({
  type: types.SET_TOKEN,
  payload: token,
});

export const setUser = (user) => ({
  type: types.SET_USER,
  payload: user,
});

export const setFollowers = (followers) => ({
  type: types.SET_FOLLOWERS,
  payload: followers,
});

export const setFollowing = (following) => ({
  type: types.SET_FOLLOWING,
  payload: following,
});

export const githubSignInInitiate = () => {
  return function (dispatch) {
    dispatch(githubSignInStart());
    auth
      .signInWithPopup(githubAuthProvider)
      .then((result) => {
        dispatch(githubSignInSuccess(result.user));
        dispatch(setToken(result.credential.accessToken))
      })
      .catch((error) => dispatch(githubSignInFail(error.message)));
  };
};

export const logOutInitiate = () => {
  return function (dispatch) {
    dispatch(logoutStart());
    auth
      .signOut()
      .then((resp) => dispatch(logoutSuccess()))
      .catch((error) => dispatch(logoutError(error.message)));
  };
};
