import * as types from "../actionTypes";

const initialState = {
  repositories: [],
  starred: [],
  starred_ids: [],
  searched_starred: []
}

const repositoriesReducer = (state = initialState, action) => {

  switch (action.type) {

    case types.SET_REPOSITORIES:
      return {
        ...state,
        repositories: action.payload
      };

    case types.REMOVE_SELECTED_REPOSITORY:
      return {
        ...state,
        repositories: state.repositories.filter(repository => repository.id !== action.payload)
      };

    case types.SET_STARRED_REPOSITORIES:
      return {
        ...state,
        starred: action.payload,
        starred_ids: action.payload.map(repo => repo.id)
      };

    case types.SET_SEARCHED_STARRED_REPOSITORIES:
      return {
        ...state,
        searched_starred: action.payload
      };

    case types.REMOVE_STARRED_REPOSITORY:
      return {
        ...state,
        starred: state.starred.filter(repository => repository.id !== action.payload),
        starred_ids: state.starred.map(repo => { if (repo.id != action.payload) return repo.id; })
      };

    case types.ADD_STARRED_REPOSITORY:
      return {
        ...state,
        starred: [
          ...state.starred,
          action.payload
        ],
        starred_ids: [
          ...state.starred_ids,
          action.payload.id
        ]
      };

    default:
      return state;
  }
};

export default repositoriesReducer;