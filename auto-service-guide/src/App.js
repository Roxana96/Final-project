import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home.jsx'
import firebase from './db/firebase'
import Service1 from './components/Service1'
import Service2 from './components/Service2'
import Service3 from './components/Service3'
import Service from './components/Service'
import Autentificare from './components/Autentificare'
import Review from './components/Review'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

const AppRouter = () => (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/home/">Service</Link>
            </li>
            <li>
              <Link to="/review/">Review</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home}/>
        <Route path="/home/" component={Service} />
        <Route path="/review/" component={Review} />
      </div>
    </Router>
);

export default AppRouter;
