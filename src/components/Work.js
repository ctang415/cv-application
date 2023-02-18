import React from "react";

const Work = ({removeFromWork, workArray, handleChangeWorkCompany, handleChangeWorkDescription, handleChangeWorkDuration, handleChangeWorkLocation, handleChangeWorkRole}) => {

        {workArray.map((work) => {
        return (
        <div key={work.id} id={work.id} className="information">
            <div id={work.id}>
                <button className="remove" onClick={removeFromWork}>-</button>
            </div>
            <div className="row">
            <div className="columnone" id={work.id}>
                <input type="text" placeholder="Role" name="role" defaultValue={work.role} onChange={handleChangeWorkRole}></input>
                <input type="text" placeholder="Company" name="company" defaultValue={work.company} onChange={handleChangeWorkCompany}></input>
            </div>
            <div className="columntwo" id={work.id}>
                <input type="text" placeholder="Duration" name="duration" defaultValue={work.duration} onChange={handleChangeWorkDuration}></input>
                <input type="text" placeholder="Location" name="location" defaultValue={work.location} onChange={handleChangeWorkLocation}></input>
            </div>
            </div>
            <div className="box" id={work.id}>
                <textarea rows="5" placeholder="Description: Use enter key to create bullet points on display" name="description" defaultValue={work.description} id="work" onChange={handleChangeWorkDescription}></textarea>
        </div>
        </div>
        )
        }
    )}
}

/*
const Work = (props) => {
    const { handleChangeWorkRole, handleChangeWorkCompany, handleChangeWorkDuration, handleChangeWorkLocation, handleChangeWorkDescription, workArray, removeFromWork } = props
    return (
        workArray.map((work) => 
        <div key={work.id} id={work.id} className="information">
            <div id={work.id}>
                <button className="remove" onClick={removeFromWork}>-</button>
            </div>
            <div className="row">
            <div className="columnone" id={work.id}>
                <input type="text" placeholder="Role" name="role" defaultValue={work.role} onChange={handleChangeWorkRole}></input>
                <input type="text" placeholder="Company" name="company" defaultValue={work.company} onChange={handleChangeWorkCompany}></input>
            </div>
            <div className="columntwo" id={work.id}>
                <input type="text" placeholder="Duration" name="duration" defaultValue={work.duration} onChange={handleChangeWorkDuration}></input>
                <input type="text" placeholder="Location" name="location" defaultValue={work.location} onChange={handleChangeWorkLocation}></input>
            </div>
            </div>
            <div className="box" id={work.id}>
                <textarea rows="5" placeholder="Description: Use enter key to create bullet points on display" name="description" defaultValue={work.description} id="work" onChange={handleChangeWorkDescription}></textarea>
        </div>
        </div>
        )
    )
}
*/

export default Work