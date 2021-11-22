import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar"
import StarredRepository from "../components/StarredRepository"
import "./Repositories.css"

const StarredRepositories = () => {

  const user = useSelector((state) => ({ ...state.user.user }));
  const starred = useSelector((state) => ({ ...state.repositories.starred }));

  const handleDownload = async () => {
    const fileName = "starred_repositories_" + user.login;
    const json = JSON.stringify(starred);
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
      <Navbar tab="starred" />
      <br />
      <div className="repositories-list">
        <StarredRepository />
      </div>
      <button onClick={handleDownload} className="save-btn-rep">Save as JSON</button>
    </div>
  );

};

export default StarredRepositories;