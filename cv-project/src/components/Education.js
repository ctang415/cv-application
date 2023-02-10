import React from "react";



const Education = (props) => {
    let { handleChangeEducation, handleChangeEducationEdit, editEdu, educationArray, addToEducation, removeFromEducation } = props
    if (editEdu === false) {
    return (
        educationArray.map((education) => 
        <div key={education.key} id={education.key} className='information'>
            <div id={education.key}>
                <button className="remove" onClick={removeFromEducation}>-</button>
            </div>
            <div className="row">
            <div className="columnone">
                <input type="text" placeholder="School" name="school" defaultValue={education.school} onChange={handleChangeEducationEdit}></input>
                <input type="text" placeholder="Location" name="place" defaultValue={education.place} onChange={handleChangeEducationEdit}></input>
            </div>
            <div className="columntwo">
                <input type="text" placeholder="Duration" name="time" defaultValue={education.time} onChange={handleChangeEducationEdit}></input>
                <input type="text" placeholder="Degree" name="degree" defaultValue={education.degree} onChange={handleChangeEducationEdit}></input>
            </div>
            </div>
            <div>
                <textarea rows="2" placeholder="Achievements" name="achievement" defaultValue={education.achievement} onChange={handleChangeEducationEdit}></textarea>
        </div>
        </div>
    )
    )}     if (educationArray.length === 0) {
    return (
        <div><button onClick={addToEducation}>+</button></div>
    )
} else {
return (
    educationArray.map((education) => 
    <div key={education.key} id={education.key} className='information'>
        <div id={education.key}>
            <button className="remove" onClick={removeFromEducation}>-</button>
        </div>
        <div className="row">
        <div className="columnone">
            <input type="text" placeholder="School" name="school" defaultValue={education.school} onChange={handleChangeEducationEdit}></input>
            <input type="text" placeholder="Location" name="place" defaultValue={education.place} onChange={handleChangeEducationEdit}></input>
        </div>
        <div className="columntwo">
            <input type="text" placeholder="Duration" name="time" defaultValue={education.time} onChange={handleChangeEducationEdit}></input>
            <input type="text" placeholder="Degree" name="degree" defaultValue={education.degree} onChange={handleChangeEducationEdit}></input>
        </div>
        </div>
        <div>
            <textarea rows="2" placeholder="Achievements" name="achievement" defaultValue={education.achievement} onChange={handleChangeEducationEdit}></textarea>
    </div>
    </div>
)
)
}
 }
    


export default Education
