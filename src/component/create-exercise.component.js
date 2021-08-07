import React,{ Component } from 'react';
import axios from 'axios';


export default class CreateExercise extends Component{
    constructor(props) {
        super(props);

        this.state = {
          name: "",
          email: "",
          mobile: "",
          dob: "",
        };

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeMobile = this.onChangeMobile.bind(this);
        this.onChangeDob = this.onChangeDob.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        
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
      .post("/exercises/add", newperson)
      .then((res) => console.log(res.data));


    this.setState({
      name: "",
      email: "",
      mobile: "",
      dob: "",
    });

  
  }
 
    
      render() {
        return (
            
            <form onSubmit={this.onSubmit} method="POST">
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
