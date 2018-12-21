import React, { Component } from 'react';
import Review from './components/Review.jsx';
import firebase from './db/firebase';
import {ActionCodeInfo as doc} from "firebase";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import './Service3.css';
class Service1 extends Component {
    render () {
        return (
            <div>
                <Navbar/>
                <div className="container">
                    <h2>Isocar</h2>
                    <tbody>
                    <tr>
                        <td align="right"><strong>Web site:</strong></td>
                        <td>&nbsp;<a className="d_text" rel="nofollow" href="http://www.isocar.ro"
                                     target="_blank">www.isocar.ro</a></td>
                    </tr>
                    <tr>
                        <td align="right" valign="top"><strong>Email:</strong></td>
                        <td>&nbsp;service@isocar.ro &nbsp;</td>
                    </tr>
                    <tr>
                        <td align="right" valign="top"><strong>Address:</strong></td>
                        <td valign="top">&nbsp;Soseaua Nicolina nr.161A</td>
                    </tr>
                    <tr>
                        <td align="right"><strong>Phone number:</strong></td>
                        <td valign="top">0754-292.292  </td>
                    </tr>
                    <tr>
                        <td align="right"><strong>Description:</strong></td>
                        <td valign="top">-</td>
                    </tr>
                    </tbody>
                </div>
                <Footer/>
            </div>
        );
    }
}
export default Service1