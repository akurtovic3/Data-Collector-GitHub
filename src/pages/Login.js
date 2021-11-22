import React, { useState, useEffect } from "react";
import * as actions from "../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import logo from "../icons8-github.svg"
import Navbar from "../components/Navbar"
import "./Login.css";

const Login = () => {

  const { user } = useSelector((state) => ({ ...state.user }));
  const token = useSelector((state) => state.user.token);
  const loading = useSelector((state) => state.user.loading);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user && !loading && token) {
      const headers = {
        "Authorization": `Token ${token}`
      }
      fetch("https://api.github.com/user", {
        "method": "GET",
        "headers": headers
      })
        .then(response => response.json())
        .then(data => { console.log(data); dispatch(actions.setUser(data)); history.push("/repos"); });

    }
  }, [user, history, loading, token]);

  const handleGithubSignIn = () => {
    dispatch(actions.githubSignInInitiate());
  };

  return (
    <div>
      <Navbar tab="login" />
      <div className="main-container">
        <div className="github-login">
          <h1 className="greetings">Welcome</h1>
          <h4 classNAme="message">Login to fetch data from your GitHub account!</h4>
          <br /><br />
          <button
            className="github-btn"
            type="button"
            onClick={handleGithubSignIn}
          >
          <span>
            <img src={logo} style={{ width: "40px", height: "30px" }} /> Login with GitHub
            </span>{" "}
          </button>
        </div>
      </div>
    </div>
  );

};

export default Login;