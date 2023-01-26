import React, { useState } from "react";

const CleanUp = () => {
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing(!showing)
    return (
        <>
            <div>cleanUp Test</div>
            <button onClick={onClick}>{showing ? "show" : "hide"}</button>
        </>
    )
}

export default CleanUp;