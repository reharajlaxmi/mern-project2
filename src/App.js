// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Navbar from "./component/navbar.component";
import CreateExercise from "./component/create-exercise.component";
import ExerciseList from "./component/exercises-list.component";

function App() {
  return (
    <Router>
      <Navbar/>
      <Route exact path="/">
      <CreateExercise/>
      </Route>
      <Route exact path="/">
      <ExerciseList/>
      </Route>
    </Router>
    
  );
}

export default App;
