import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as userActions from "../redux/actions/userActions";
import swal from 'sweetalert';
import "./UpdateUserInfo.css"

const UpdateUserInfo = () => {

    const userInfo = useSelector(state => state.user.user)
    const dispatch = useDispatch();
    const [name, setName] = useState(userInfo.name ? userInfo.name : "");
    const [bio, setBio] = useState(userInfo.bio ? userInfo.bio : "");
    const [company, setCompany] = useState(userInfo.company ? userInfo.company : "");
    const [location, setLocation] = useState(userInfo.location ? userInfo.location : "");
    const [website, setWebsite] = useState(userInfo.website ? userInfo.website : "");

    const updateUser = () => {
        const user = { ...userInfo, name: name, bio: bio, company: company, location: location, website: website }
        dispatch(userActions.setUser(user));
        swal({ text: "User profile successfully updated!", icon: "success" })
    };

    const changesSaved = () => {
        if (name !== (userInfo.name ? userInfo.name : "") || bio !== (userInfo.bio ? userInfo.bio : "") || company !== (userInfo.company ? userInfo.company : "")
            || location !== (userInfo.location ? userInfo.location : "") || website !== (userInfo.website ? userInfo.website : ""))
            return false;
        else
            return true;
    }

    const handleDownload = async () => {
        if (!changesSaved()) {
            swal({ text: "You have to save changes first!", icon: "error" })
        }
        else {
            const fileName = "user_" + userInfo.login;
            const json = JSON.stringify(userInfo);
            const blob = new Blob([json], { type: 'application/json' });
            const href = await URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = href;
            link.download = fileName + ".json";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }

    return (
        <div className="update-container">
            <h4 className="title-update">Update your account info:</h4>
            <div className="form">
                <label>Name: </label>
                <input type="text" name="name" value={name} onChange={event => setName(event.target.value)} placeholder="Enter your name" />

                <label className="bio">Bio: </label>
                <input type="text" name="bio" value={bio} onChange={event => setBio(event.target.value)} placeholder="Add a bio" />

                <label>Company: </label>
                <input type="text" name="company" value={company} onChange={event => setCompany(event.target.value)} placeholder="Company" />

                <label>Location: </label>
                <input type="text" name="location" value={location} onChange={event => setLocation(event.target.value)} placeholder="Location" />

                <label> Website: </label>
                <input type="text" name="website" value={website} onChange={event => setWebsite(event.target.value)} placeholder="Website" />

            </div>
            <br></br>
            <div>
                <button className="btn-save" onClick={updateUser}>Save changes</button>
                <button className="btn-save" onClick={handleDownload}>Save as JSON</button>
            </div>
        </div>
    );

};

export default UpdateUserInfo;