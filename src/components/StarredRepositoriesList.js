import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as reposActions from "../redux/actions/repositoryActions";
import moment from "moment"
import "./Repository.css"

const StarredRepositoriesList = () => {

    const starred = useSelector(state => state.repositories.starred)
    const dispatch = useDispatch();

    const renderList = starred.map((repo) => {
        const { id, name, pushed_at } = repo;
        return (
            <div className="repository" key={id}>
                <p className="title">{repo.owner.login}/{name}</p>
                <p>{repo.private ? "Private" : "Public"}</p>
                <p>Last commit: {moment(pushed_at).format('DD.MM.YYYY. HH:MM')}</p>
                <button onClick={() => dispatch(reposActions.removeStarredRepository(id))} className="btn btn-main">Remove repository</button>
            </div>
        );
    });

    return <>{starred.length ? renderList : <h4 style={{ color: "#fff", marginTop: "50px" }}>You don’t have any starred repositories yet.</h4>}</>;

};

export default StarredRepositoriesList;