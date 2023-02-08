import React from "react";

const Skills = (props) => {
    let { skill } = props
    return (
        <div className="headertext"> <span>Skills</span>
    
       
                <div key={skill.key} id={skill.key}>
                    <span>{skill.skills}</span>
                </div>
                
  
        </div>
    )
}

export default Skills