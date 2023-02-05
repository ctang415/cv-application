import React from "react";

const View = (props) => {
    const {swapToEdit} = props
    return (
        <div>
        <h1>EZ Generator</h1>
        <button onClick={swapToEdit}>Back to Edit</button>
      </div>
    )
}

export default View