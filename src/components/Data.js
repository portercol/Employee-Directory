import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import Employees from './Employees';

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

};