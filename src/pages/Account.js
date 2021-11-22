import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar"
import UpdateUserInfo from "../components/UpdateUserInfo"
import "./Account.css"

const Account = () => {

  const { user } = useSelector((state) => ({ ...state.user }));
  const followers = useSelector((state) => state.user.followers);

  const renderFollowers = followers.map((follow) => {
    return (
      <div className="follower" key={follow.id}>
        <p><img className="foll_acc_pic" src={follow.avatar_url} />{follow.login}</p>
      </div>
    );
  });



  return (
    <div className="user-container">
      <Navbar tab="account" />
      <br />
      <div className="user-info-container">

        <div className="user">
          <img src={user.avatar_url} className="profile_pic" />
          <p>Username: {user.login}</p>
          <p>Link to profile: <a href={user.html_url}> {user.html_url}</a> </p>
        </div>

        <div className="followers">
          <p>Followers:</p>
          <>{followers.length ? renderFollowers : <h4 style={{ color: "#fff", marginTop: "50px" }}>You have no followers</h4>}</>
        </div>

        <div className="update-info-list">
          <UpdateUserInfo />
        </div>

      </div>
    </div>
  );

};

export default Account;