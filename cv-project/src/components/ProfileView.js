import React from "react";

const ProfileView = (props) => {
    let {profile } = props
        return (
            <div>
            <div key={profile.id} id={profile.id}>
            <div className="fullname">
            <span className="headername">{profile.name}</span>
            </div>
            <div className="generalinfo">
            <ul>
                <li>{profile.email}</li>
                <li>{profile.number}</li>
                <li>{profile.address}</li>
                <li>{profile.website}</li>
            </ul>
            </div>
            <div className="summary">
                <div className="underline">
                <span className="headertext">Objective</span>
                </div>
                <div className="text">
                {profile.objective}
                </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileView