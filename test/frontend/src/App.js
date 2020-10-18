import React from 'react';
import Navigation from './Navigation'
import Install from './Install'
import Testapi from './Testapi'

import Config from './Config'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (

    <div class="App">

    <Router>
      <Navigation />
      <div className="container p-4">
        <Route path="/" exact component={Install} />
        <Route path="/Config" component={Config} />
        <Route path="/Testapi" component={Testapi} />
      </div>
    </Router>
    

    </div>


    
  );
}

export default App;
