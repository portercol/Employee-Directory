// Import React and Data component
import React from "react";
import Data from "./Data";

// Create Card function and use props to get the specific employee data that we want to display on the page
function Card(props) {
    return <div className="card m-3 text-center" style={{width: "16rem"}} id={props.id}>
        <h1 className="header">Employee Directory</h1>
        <Data/>
    </div>
}

// Export Card out of Card.jsx
export default Card;