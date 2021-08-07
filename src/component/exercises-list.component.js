import React, { Component } from "react";
import axios from 'axios';

export default class ExerciseList extends Component {
  constructor(props) {
    super(props);
    this.state = { records: [] };
  }

  componentDidMount() {
    axios
      .get("/exercises")
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
          <tbody>
           { this.state.records.map((element,i) => {
             return (
                  <tr>
                    <th>{element.name}</th>
                    <th>{element.email}</th>
                    <th>{element.mobile}</th>
                    <th>{element.dob}</th>
                  </tr>
             );
            })
            }  
          </tbody>
        </table>
      </div>
  
    );
  }
}