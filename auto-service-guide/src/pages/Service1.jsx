import React, { Component } from 'react';
import Review from './components/Review.jsx';
import firebase from './db/firebase';
import {ActionCodeInfo as doc} from "firebase";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import './Service1.css';
class Service1 extends Component {
    render () {
        return (
            <div>
                <Navbar/>
                <div className="container">
                    <h2>Ager</h2>
                    <tbody>
                    <tr>
                        <td align="right"><strong>Web site:</strong></td>
                        <td>&nbsp;<a className="d_text" rel="nofollow" href="http://www.agerservice.ro"
                                     target="_blank">www.agerservice.ro</a></td>
                    </tr>
                    <tr>
                        <td align="right" valign="top"><strong>Email:</strong></td>
                        <td>&nbsp;iasi@agerservice.ro&nbsp;</td>
                    </tr>
                    <tr>
                        <td align="right" valign="top"><strong>Address:</strong></td>
                        <td valign="top">&nbsp;Str. Sf. Andrei nr. 79</td>
                    </tr>
                    <tr>
                        <td align="right"><strong>Phone number:</strong></td>
                        <td valign="top">0232-211.115 / 0232-242.876 / 0800 884 455</td>
                    </tr>
                    <tr>
                        <td align="right"><strong>Description:</strong></td>
                        <td valign="top">AGER Service, o companie specializata in montajul calificat de parbrize, lunete, laterale si folii auto omologate R.A.R.
                        </td>
                    </tr>
                    </tbody>
                </div>
                <Footer/>
            </div>
        );
    }
}
export default Service1