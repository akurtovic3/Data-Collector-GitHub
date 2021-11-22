import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import YourRepositories from "./pages/YourRepositories";
import StarredRepositories from "./pages/StarredRepositories";
import AddStarred from "./pages/AddStarred"
import Login from "./pages/Login";
import Account from "./pages/Account";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { setUser } from "./redux/actions/userActions";


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setUser(authUser));
      } else {
        dispatch(setUser(null));
      }
    });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/login" component={Login} />
          <Route path="/repos" component={YourRepositories} />
          <Route path="/account" component={Account} />
          <Route path="/starred" component={StarredRepositories} />
          <Route path="/search" component={AddStarred} />
        </Switch>
      </div>
    </BrowserRouter>
  );

}

export default App;
