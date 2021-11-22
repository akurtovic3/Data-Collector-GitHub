import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as reposActions from "../redux/actions/repositoryActions";
import moment from "moment"
import "./Repository.css"

const YourRepositoriesList = () => {

  const repositories = useSelector(state => state.repositories.repositories)
  const dispatch = useDispatch();

  const renderList = repositories.map((repo) => {
    const { id, name, pushed_at } = repo;
    return (
      <div className="repository" key={id}>
        <p className="title">{repo.owner.login}/{name}</p>
        <p>{repo.private ? "Private" : "Public"}</p>
        <p>Last commit: {moment(pushed_at).format('DD.MM.YYYY. HH:MM')}</p>
        <button onClick={() => dispatch(reposActions.removeSelectedRepository(id))} className="btn btn-main">Delete repository</button>
      </div>
    );
  });

  return <>{repositories.length ? renderList : <h4 style={{ color: "#fff", marginTop: "50px" }}>You don't have any repositories yet.</h4>}</>;

};

export default YourRepositoriesList;