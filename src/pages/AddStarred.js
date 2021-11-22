import React, { useState, useEffect } from "react";
import * as repositoriesActions from "../redux/actions/repositoryActions";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar"
import AddStarredList from "../components/AddStarredList"
import "./Repositories.css"

const AddStarred = () => {

    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const handleSearch = () => {
        fetch("https://api.github.com/search/repositories?q=" + input, {
            "method": "GET"
        })
            .then(response => response.json())
            .then(data => { dispatch(repositoriesActions.setSearchedStarredRepositories(data.items)) });

    };

    return (
        <div className="repositories-container">
            <Navbar tab="search" />
            <br />
            <div className="search-div">
                <input className="search-input" type="text" value={input} onChange={event => setInput(event.target.value)} placeholder="Search for repositories..."></input>
            </div>
            <button className="search-btn" onClick={handleSearch}>Search</button>
            <div className="repositories-list-search">
                <AddStarredList />
            </div>
        </div>
    );
};

export default AddStarred;