import React from "react";

const WorkView = (props) => {
    let {  workArray } = props
    return (
        <div className="headertext"> <span>Work Experience</span>
        {workArray.map((work) => {
            return (
                <div key={work.key} id={work.key}>
                    <div className="work">
                        {work.role}
                        {work.company}
                        {work.duration}
                        {work.location}
                        {work.description}
                    </div>
                    </div>
            )
        })}
        </div>
    )
    
}

export default WorkView