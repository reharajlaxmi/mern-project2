import React, { Component } from "react";
import axios from 'axios';

// const Record = (props) => (
//   <tr>
//     <td>{props.record.name}</td>
//     <td>{props.record.email}</td>
//     <td>{props.record.mobile}</td>
//     <td>{props.record.dob}</td>
//   </tr>
// );

export default class ExerciseList extends Component {
  constructor(props) {
    super(props);
    this.state = { records: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/record")
      .then((response) => {
        this.setState({ records: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>D.O.B</th>
            </tr>
          </thead>
          <tbody>{this.setState}</tbody>
        </table>
      </div>
    );
  }
}