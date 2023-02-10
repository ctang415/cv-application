import React from "react";

const EducationView = (props) => {
    let { educationArray } = props
    return (
        <div className="headertext"> <span>Education</span>
            {educationArray.map((education) => {
                return (
                <div key={education.key} id={education.key}>
                    <div className="education" id={education.key}>
                        {education.school}
                        {education.place}
                        {education.time}
                        {education.degree}
                        {education.achievement}
                        </div>
                </div>
                )
            })}
        </div>
    )

}

export default EducationView