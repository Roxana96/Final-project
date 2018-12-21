import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';

class Home extends Component {
    render () {
        return (
            <div>
                <Navbar/>
                <Jumbotron title="Welcome" subtitle="Here you can find auto services from Iasi"/>
                <div className="container">
                    <h2>Welcome</h2>
                    <p> This site contains information about some auto services from Iasi.</p>
                    <p> The information you can find here are about: service name, website, phone number, address and a brief description of what services they do.</p>
                </div>
                <Footer/>
            </div>
        );
    }
}
export default Home
