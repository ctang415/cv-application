import React from "react";

const Skills = (props) => {
    let { skill } = props
    return (
        <div id={skill.id}> <div className="underline"><span className="headertext">Skills</span></div>
                <div key={skill.id} id={skill.id}>
                    <span className="text">{skill.skills}</span>
                </div>
        </div>
    )
}

export default Skills