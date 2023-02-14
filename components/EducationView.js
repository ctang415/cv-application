import React from "react";

const EducationView = (props) => {
    let { educationArray } = props
    return (
        <div> <div className="underline"><span className="headertext">Education</span></div>
            {educationArray.map((education) => {
                return (
                <div key={education.id} id={education.id}>
                    <div className="educationview" id={education.id}>
                        <ul className="text">
                        <li className="bold">{education.degree}</li>
                        <div className="split" id={education.id}><li>{education.school} - {education.place}</li> <li>{education.time}</li></div>
                        <li>{education.achievement}</li>
                        </ul>
                        </div>
                </div>
                )
            })}
        </div>
    )

}

export default EducationView