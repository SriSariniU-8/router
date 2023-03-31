// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Login from './Login'; 
import Home from './Home';
import { useState } from 'react';
import Form from './Form';

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
      </Routes>
    </div>
    </Router>
  );
}

export default App;
