import React from "react";

const WorkView = (props) => {
    let {  workArray } = props
    return (
        <div> <div className="underline"><span className="headertext">Work Experience</span></div>
        {workArray.map((work) => {
            return (
                <div key={work.id} id={work.id}>
                    <div className="educationview" id={work.id}>
                        <ul className="text">
                        <li className="bold">{work.role}</li>
                        <div className="split" id={work.id}><li>{work.company} - {work.location}</li> <li>{work.duration}</li></div>
                        </ul>
                        <div id={work.id} className="textbullets">{`\u2022 ${work.description.replace(/\n/g, '\n \u2022 ')}`}</div>
                    </div>
                    </div>
            )
        })}
        </div>
    )
    
}

export default WorkView