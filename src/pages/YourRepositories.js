import React, { useState, useEffect } from "react";
import * as repositoriesActions from "../redux/actions/repositoryActions";
import * as userActions from "../redux/actions/userActions"
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import Navbar from "../components/Navbar"
import YourRepositoriesList from "../components/YourRepositoriesList"
import "./Repositories.css"

const YourRepositories = () => {

  const user = useSelector((state) => ({ ...state.user.user }));
  const repositories = useSelector((state) => ({ ...state.repositories.repositories }));
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {

      const headers = {
        "Authorization": `Token ${token}`
      }

      fetch("https://api.github.com/user/repos", {
        "method": "GET",
        "headers": headers
      })
        .then(response => response.json())
        .then(data => { console.log(data); dispatch(repositoriesActions.setRepositories(data)) });


      fetch("https://api.github.com/user/starred", {
        "method": "GET",
        "headers": headers
      })
        .then(response => response.json())
        .then(data => { dispatch(repositoriesActions.setStarredRepositories(data)) });


      fetch("https://api.github.com/user/followers", {
        "method": "GET",
        "headers": headers
      })
        .then(response => response.json())
        .then(data => { dispatch(userActions.setFollowers(data)) });

    }
  }, [token]);

  const handleDownload = async () => {
    const fileName = "my_repositories_" + user.login;
    const json = JSON.stringify(repositories);
    const blob = new Blob([json], { type: 'application/json' });
    const href = await URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = fileName + ".json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="repositories-container">
      <Navbar tab="repos" />
      <br />
      <div className="repositories-list">
        <YourRepositoriesList />
      </div>
      <button onClick={handleDownload} className="save-btn-rep">Save as JSON</button>
    </div>
  );

};

export default YourRepositories;