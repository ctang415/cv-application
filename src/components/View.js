import React from "react";
import ProfileView from "./ProfileView";
import EducationView from "./EducationView";
import WorkView from "./WorkView";
import Skills from "./Skills";

const View = ({swapToEdit, educationArray, workArray, profile, skill}) => {
    return (
        <div className="cv">
            <div className="header">
                <span>EZ CV</span>
                </div>
                <div className="button">
                    <button id="submit" onClick={swapToEdit}>Back to Edit</button>
                </div>
                <div className="resume">
                    <ProfileView
                    profile={profile}
                    />
                    <div className="resumetext">
                        <div className="workexperience">
                        <WorkView
                        workArray={workArray}
                        />
                        </div>
                        <div className="education">
                            <EducationView
                            educationArray={educationArray}
                            />
                        </div>
                        <div className="skills">
                            <Skills
                            skill={skill}
                            />
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default View