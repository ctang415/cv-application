import React from "react";

const ProfileView = (props) => {
    let {profile } = props
        return (
            <div>
            <div key={profile.key} id={profile.key}>
            <div className="fullname">
            <span className="headername">{profile.name}</span>
            </div>
            <div className="generalinfo">
            <ul>
                <li>{profile.email}</li>
                <li>{profile.number}</li>
                <li>{profile.location}</li>
                <li>{profile.website}</li>
            </ul>
            </div>
            <div className="summary">
                <span className="headertext">Objective</span>
                {profile.objective}
                </div>
            </div>
        </div>
    )
}

export default ProfileView