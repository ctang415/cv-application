import React from "react";

const View = (props) => {
    const {swapToEdit} = props
    return (
        <div>
            <div className="header">
                EZ CV
                <div className="button">
                    <button onClick={swapToEdit}>Back to Edit</button>
                </div>
            </div>
        </div>
    )
}

export default View