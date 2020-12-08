// Import React, Component, MDBDataTable and other components
import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import Employees from './Employees';
import Button from './Button';

// Create class Component using state to hold employee data
class Data extends Component {
  state = {
    columns: [
      {
        label: "Name",
        field: "name"
      },
      {
        label: "Position",
        field: "position"
      },
      {
        label: "Office",
        field: "office"
      },
      {
        label: "Age",
        field: "age"
      },
    ],
    rows: Employees
  }

  // A function that handles the button click to 'Add Employee'
  // Gets employee data based on ID and assigns a value
  buttonClick = e => {
    this.addEmployee(
      document.getElementById("name").value,
      document.getElementById("position").value,
      document.getElementById("office").value,
      document.getElementById("age").value,
    )
    // Gets data based on ID and assigns the value to empty string
      document.getElementById("name").value = "";
      document.getElementById("position").value = "";
      document.getElementById("office").value = "";
      document.getElementById("age").value = "";
  };

  // Create addEmployee function and pass through data.Make sure that all fields are validated by sending an error message if not
  addEmployee = (name, position, office, age) => {
    if (name === "" || position === "" || office === "" || age === "") {
      alert("Missing required fields!")
      return;
    }

    Employees.push({
      name: name,
      position: position,
      office: office,
      age: age
    })

    this.setState({ rows: Employees });
  };



};