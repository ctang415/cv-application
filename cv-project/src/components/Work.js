import React from "react";

const Work = (props) => {
    const { work, handleChange, addToWork } = props
    return (
        work.map((work) => 
        <div key={work.key} id={work.key}>
            <button onClick={addToWork}>+</button><button>-</button>
            <input type="text" placeholder="Role" name="role" onChange={handleChange}></input>
            <input type="text" placeholder="Company" name="company" onChange={handleChange}></input>
            <input type="text" placeholder="Duration" name="duration" onChange={handleChange}></input>
            <input type="text" placeholder="Location" name="location" onChange={handleChange}></input>
            <input type="text" placeholder="Description" name="description" onChange={handleChange}></input>
        </div>
        )
    )
}

export default Work