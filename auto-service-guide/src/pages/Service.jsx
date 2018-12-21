import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';

class Service extends Component {
    render () {
        return (
            <div>
                <Navbar/>
                <Jumbotron title="Services" subtitle="Here you can find a list with auto services from Iasi"/>
                <div className="container">
                    <h2>Auto services list</h2>
                    <p> Here you can chose a service from the list to find more information about the auto service you choose.</p>
                </div>
                <Footer/>
            </div>
        );
    }
}
export default Service
