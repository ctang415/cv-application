import React from "react";

const Work = (props) => {
    const { work, handleChange, addToWork, removeFromWork } = props
    if (work.length === 0) {
        return (
        <div>
            <button onClick={addToWork}>+</button>
        </div>
        )
    }
    return (
        work.map((work) => 
        <div key={work.key} id={work.key} className="information">
            <div id={work.key}>
                <button onClick={addToWork}>+</button><button onClick={removeFromWork}>-</button>
            </div>
            <div className="row">
            <div className="columnone">
                <input type="text" placeholder="Role" name="role" onChange={handleChange}></input>
                <input type="text" placeholder="Company" name="company" onChange={handleChange}></input>
            </div>
            <div className="columntwo">
                <input type="text" placeholder="Duration" name="duration" onChange={handleChange}></input>
                <input type="text" placeholder="Location" name="location" onChange={handleChange}></input>
            </div>
            </div>
            <div>
                <input type="text" placeholder="Description" name="description" onChange={handleChange}></input>
            </div>
        </div>
        )
    )
}

export default Work