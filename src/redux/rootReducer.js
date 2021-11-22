import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import repositoryReducer from "./reducers/repositoryReducer"

const rootReducer = combineReducers({
  user: userReducer,
  repositories: repositoryReducer
});

export default rootReducer;