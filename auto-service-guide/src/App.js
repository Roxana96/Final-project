import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import Service from './pages/Service.jsx';
import Review from './pages/Review.jsx';
import Authentification from './pages/Authentification.jsx';

class App extends Component {
  render () {
    return (
        <Router>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/service" component={Service}/>
            <Route path="/review" component={Review}/>
            <Route path="/authentification" component={Authentification}/>
          </div>
        </Router>
    );
  }
}
export default App;
