import React from "react";

const Education = (props) => {
    const { handleChangeEducation, educationArray, addToEducation, removeFromEducation } = props
    if (educationArray.length === 0) {
        return (
            <div><button onClick={addToEducation}>+</button></div>
        )
    } else {
    return (
        educationArray.map((education) => 
        <div key={education.key} id={education.key} className='information'>
            <div id={education.key}>
                <button className="add" onClick={addToEducation}>+</button><button className="remove" onClick={removeFromEducation}>-</button>
            </div>
            <div className="row">
            <div className="columnone">
                <input type="text" placeholder="School" name="school" defaultValue={education.school} onChange={handleChangeEducation}></input>
                <input type="text" placeholder="Location" name="place" defaultValue={education.place} onChange={handleChangeEducation}></input>
            </div>
            <div className="columntwo">
                <input type="text" placeholder="Duration" name="time" defaultValue={education.time} onChange={handleChangeEducation}></input>
                <input type="text" placeholder="Degree" name="degree" defaultValue={education.degree} onChange={handleChangeEducation}></input>
            </div>
            </div>
            <div>
                <textarea rows="2" placeholder="Achievements" name="achievement" defaultValue={education.achievement} onChange={handleChangeEducation}></textarea>
        </div>
        </div>
        )
    )
    }
}

export default Education