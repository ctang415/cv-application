import React from "react";

const Education = (props) => {
    const { handleChange, education, addToEducation, removeFromEducation } = props
    return (
        education.map(education => 
        <div key={education.key} id={education.key}>
        <button onClick={addToEducation}>+</button><button onClick={removeFromEducation}>-</button>
        <input type="text" placeholder="School" name="school" onChange={handleChange}></input>
        <input type="text" placeholder="Location" name="place" onChange={handleChange}></input>
        <input type="text" placeholder="Duration" name="time" onChange={handleChange}></input>
        <input type="text" placeholder="Degree" name="degree" onChange={handleChange}></input>
        <input type="text" placeholder="Achievements" name="achievement" onChange={handleChange}></input>
        </div>
        )
    )
}

export default Education