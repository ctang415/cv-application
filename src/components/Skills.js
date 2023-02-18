import React from "react";

const Skills = (props) => {
    let { skill } = props
    return (
        <div> <div className="underline"><span className="headertext">Skills</span></div>
                <div>
                    <span className="text">{skill}</span>
                </div>
        </div>
    )
}

export default Skills