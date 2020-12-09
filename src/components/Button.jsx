// Import React
import React from "react";

// Create Button function that stores the data we want to display on the page
// The button will all contain the modal from bootsrap to 'Add Employee'
function Button() {
    return (
        <button type="button" className="btn btn-outline-dark" data-toggle="modal" data-target="#employeeModal">Add Employee</button>
    )
}

// Export Button out of Button.jsx
export default Button;