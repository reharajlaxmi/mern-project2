import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";

export default class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Mern Project</Link>
            </nav>
      
        );
    }
}
