import * as types from "../actionTypes";

export const setRepositories = (repositories) => {
  return {
    type: types.SET_REPOSITORIES,
    payload: repositories,
  };
};

export const selectedRepository = (repository) => {
  return {
    type: types.SELECTED_REPOSITORY,
    payload: repository,
  };
};

export const removeSelectedRepository = (repository) => {
  return {
    type: types.REMOVE_SELECTED_REPOSITORY,
    payload: repository,
  };
};

export const setStarredRepositories = (repositories) => {
  return {
    type: types.SET_STARRED_REPOSITORIES,
    payload: repositories,
  };
};

export const addStarredRepository = (repository) => {
  return {
    type: types.ADD_STARRED_REPOSITORY,
    payload: repository,
  };
};

export const removeStarredRepository = (repository) => {
  return {
    type: types.REMOVE_STARRED_REPOSITORY,
    payload: repository,
  };
};

export const setSearchedStarredRepositories = (repositories) => {
  return {
    type: types.SET_SEARCHED_STARRED_REPOSITORIES,
    payload: repositories,
  };
};

