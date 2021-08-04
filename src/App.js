// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';

import Navbar from "./component/navbar.component";
import CreateExercise from "./component/create-exercise.component";
import ExerciseList from "./component/exercises-list.component";

function App() {
  return (
    <Router>
      <Navbar/>
      <CreateExercise/>
      <ExerciseList/>
      
    </Router>
    
  );
}

export default App;
