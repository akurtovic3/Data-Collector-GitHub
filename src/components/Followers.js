import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Repository.css"

const Followers = () => {

    const followers = useSelector(state => state.user.followers)

    const renderList = followers.map((follow) => {
        const { id, login } = repo;
        return (
            <div className="repository" key={id}>
                <p className="title">{login}</p>
            </div>
        );
    });

    return <>{followers.length ? renderList : <h4 style={{ color: "#fff", marginTop: "50px" }}>You don’t have any followers yet.</h4>}</>;

};

export default Followers;