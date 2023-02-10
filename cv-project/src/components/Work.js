import React from "react";

const Work = (props) => {
    const { handleChangeWork, work, addToWork, workArray, removeFromWork } = props
    return (
        workArray.map((work) => 
        <div key={work.key} id={work.key} className="information">
            <div id={work.key}>
                <button className="remove" onClick={removeFromWork}>-</button>
            </div>
            <div className="row">
            <div className="columnone">
                <input type="text" placeholder="Role" name="role" defaultValue={work.role} onChange={handleChangeWork}></input>
                <input type="text" placeholder="Company" name="company" defaultValue={work.company} onChange={handleChangeWork}></input>
            </div>
            <div className="columntwo">
                <input type="text" placeholder="Duration" name="duration" defaultValue={work.duration} onChange={handleChangeWork}></input>
                <input type="text" placeholder="Location" name="location" defaultValue={work.location} onChange={handleChangeWork}></input>
            </div>
            </div>
            <div className="box">
                <textarea rows="5" placeholder="Description" name="description" defaultValue={work.description} id="work" onChange={handleChangeWork}></textarea>
        </div>
        </div>
        )
    )
}

export default Work