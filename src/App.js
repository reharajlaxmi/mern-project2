// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Navbar from "./component/navbar.component";
import CreateExercise from "./component/create-exercise.component";
import ExerciseList from "./component/exercises-list.component";

function App() {
  return (
    <Router>
      <BrowserRouter>
      <Navbar/>
      <Route path="/" exact component={CreateExercise}/>
      <Route path="/" exact component={ExerciseList}/>
      </BrowserRouter>
    </Router>
    
  );
}

export default App;
