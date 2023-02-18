import React from "react";

const Education = ({removeFromEducation, educationArray, handleChangeEducationAchievement, handleChangeEducationDegree, handleChangeEducationPlace, handleChangeEducationSchool, handleChangeEducationTime}) => {
    {educationArray.map((education) => {
        return (
        <div key={education.id} id={education.id} className='information'>
            <div id={education.id}>
                <button className="remove" onClick={removeFromEducation}>-</button>
            </div>
            <div className="row">
            <div className="columnone" id={education.id}>
                <input type="text" placeholder="School" name="school" defaultValue={education.school} onChange={handleChangeEducationSchool}></input>
                <input type="text" placeholder="Location" name="place" defaultValue={education.place} onChange={handleChangeEducationPlace}></input>
            </div>
            <div className="columntwo" id={education.id}>
                <input type="text" placeholder="Duration" name="time" defaultValue={education.time} onChange={handleChangeEducationTime}></input>
                <input type="text" placeholder="Degree" name="degree" defaultValue={education.degree} onChange={handleChangeEducationDegree}></input>
            </div>
            </div>
            <div id={education.id}>
                <textarea rows="2" placeholder="Achievements" name="achievement" defaultValue={education.achievement} onChange={handleChangeEducationAchievement}></textarea>
        </div>
        </div>
        )
    })}
 }

/*
const Education = (props) => {
    let { handleChangeEducationSchool, handleChangeEducationTime, handleChangeEducationPlace, handleChangeEducationDegree, handleChangeEducationAchievement, educationArray, removeFromEducation } = props
    return (
        educationArray.map((education) => 
        <div key={education.id} id={education.id} className='information'>
            <div id={education.id}>
                <button className="remove" onClick={removeFromEducation}>-</button>
            </div>
            <div className="row">
            <div className="columnone" id={education.id}>
                <input type="text" placeholder="School" name="school" defaultValue={education.school} onChange={handleChangeEducationSchool}></input>
                <input type="text" placeholder="Location" name="place" defaultValue={education.place} onChange={handleChangeEducationPlace}></input>
            </div>
            <div className="columntwo" id={education.id}>
                <input type="text" placeholder="Duration" name="time" defaultValue={education.time} onChange={handleChangeEducationTime}></input>
                <input type="text" placeholder="Degree" name="degree" defaultValue={education.degree} onChange={handleChangeEducationDegree}></input>
            </div>
            </div>
            <div id={education.id}>
                <textarea rows="2" placeholder="Achievements" name="achievement" defaultValue={education.achievement} onChange={handleChangeEducationAchievement}></textarea>
        </div>
        </div>
    )
    )
 }
 */


export default Education
