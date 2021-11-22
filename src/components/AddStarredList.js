import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as reposActions from "../redux/actions/repositoryActions";
import moment from "moment"
import "./Repository.css"

const AddStarredList = () => {

    const starred_ids = useSelector(state => state.repositories.starred_ids)
    const searched_repos = useSelector(state => state.repositories.searched_starred)
    const dispatch = useDispatch();

    const renderList = searched_repos.map((repo) => {
        const { id, name, pushed_at } = repo;
        return (
            <div className="repository" key={id}>
                <p className="title">{repo.owner.login}/{name}</p>
                <p>{repo.private ? "Private" : "Public"}</p>
                <p>Last commit: {moment(pushed_at).format('DD.MM.YYYY. HH:MM')}</p>
                {starred_ids.indexOf(id) > -1 ?
                    <button onClick={() => dispatch(reposActions.removeStarredRepository(parseInt(id)))} className="btn btn-main">Remove star</button> :
                    <button onClick={() => dispatch(reposActions.addStarredRepository(repo))} className="btn btn-main">Add star</button>
                }
            </div>
        );
    });

    return <>{searched_repos.length ? renderList : <p style={{ color: "#fff", marginTop: "50px", textAlign: "center", alignSelf: "center" }}>We couldn’t find any repositories matching the search input.</p>}</>;

};

export default AddStarredList;