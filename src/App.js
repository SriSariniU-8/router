// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './Login'; 
import Home from './Home';
// import { useState } from 'react';
import Form from './Form';
import Edit from './Edit';
import Demo from './demo';

function App() {

  return (
    <Router>
    <div className="App">
      <h1>This is Parent</h1>
      <Routes>
      <Route exact path="/" element= {<Login/>}>
      
      </Route >
      <Route path='/home' element= {<Home/>}>
            <Route path="/home/form" element= {<Form/>}>
      </Route>
            </Route>

        <Route path='/edit/:name/:pass' element= {<Edit/>}>

        </Route>

        <Route path='/demo' element= {<Demo />}>
        </Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
