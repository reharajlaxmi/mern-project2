import React,{ Component } from 'react';
// import {Link } from 'react-router-dom';
import axios from 'axios';

export default class CreateExercise extends Component{
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeMobile = this.onChangeMobile.bind(this);
        this.onChangeDob = this.onChangeDob.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
          name: "",
          email: "",
          mobile: "",
          dob: "",
        };
      }
      onChangeName(e) {
        this.setState({
          name: e.target.value,
        });
      }
    
      onChangeEmail(e) {
        this.setState({
          email: e.target.value,
        });
      }
      onChangeMobile(e) {
        this.setState({
          mobile: e.target.value,
        });
      }
    
      onChangeDob(e) {
        this.setState({
          dob: e.target.value,
        });
      }

      onSubmit(e) {
        e.preventDefault();
    
        const newperson = {
          name: this.state.name,
          email: this.state.email,
          mobile: this.state.mobile,
          dob: this.state.dob,
        };
        axios
      .post("http://localhost:3000/", newperson)
      .then((res) => console.log(res.data));


    this.setState({
      person_name: "",
      person_position: "",
      person_level: "",
    });
  }
    
      render() {
        return (
            
            <form onSubmit={this.onSubmit}>
                <h3>Enter Your Record</h3>
              <div className = "form-group">
                  <label>Enter Your Name : </label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.name}
                    onChange={this.onChangeName}
                   />  
              </div>
              <div className = "form-group">
                  <label>Enter Your Email : </label>
                  <input
                    type="email"
                    className="form-control"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                   />  
              </div>
              <div className = "form-group">
                  <label>Enter Your Mobile Number: </label>
                  <input
                    type="number"
                    className="form-control"
                    value={this.state.mobile}
                    onChange={this.onChangeMobile}
                   />  
              </div>
              <div className = "form-group">
                  <label>Enter Your D.O.B : </label>
                  <input
                    type="date"
                    className="form-control"
                    value={this.state.dob}
                    onChange={this.onChangeDob}
                   />  
              </div>
              <div className="form-group">
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary"
            />
          </div>
           
          </form>
        );
      }
    
}
