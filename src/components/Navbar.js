import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/actions/userActions";
import { useHistory, Link } from "react-router-dom";
import "./Navbar.css"
import logo from "../icons8-github.svg"

const Navbar = (props) => {

  const user = useSelector(state => state.user);
  const loading = useSelector((state) => state.user.loading);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (loading) history.push("/login")
  }, [loading]);

  const handleAuth = () => {
    if (user) {
      dispatch(actions.logOutInitiate());

    }
  };

  return (
    <header>
      <div className="container">
        <div className="inner-content" style={props.tab === "login" ? { pointerEvents: "none" } : null}>
          
          <div className="logo" >
            <Link className="link" to="/repos" ><img src={logo} style={{ width: "40px", height: "40px", paddingBottom: "5px" }} /> GitHub Repositories</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link className="link" to="/repos" style={props.tab === "repos" ? { fontWeight: "bolder", textDecoration: "underline" } : {}}>Your repositories</Link>
            </li>
            <li>
              <Link className="link" to="/starred" style={props.tab === "starred" ? { fontWeight: "bolder", textDecoration: "underline" } : {}}>Starred Repositories</Link>
            </li>
            <li>
              <Link className="link" to="/search" style={props.tab === "search" ? { fontWeight: "bolder", textDecoration: "underline" } : {}}>Add to Starred</Link>
            </li>
            <li>
              <Link className="link" to="/account" style={props.tab === "account" ? { fontWeight: "bolder", textDecoration: "underline" } : {}} >Account</Link>
            </li>
            {props.tab !== "login" ?
              <li>
                <button onClick={handleAuth} className="btn-logout">
                  Log Out
              </button>
              </li> : null}
          </ul>

        </div>
      </div>
    </header>
  );
};

export default Navbar;