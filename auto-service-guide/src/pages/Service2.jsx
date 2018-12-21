import React, { Component } from 'react';
import Review from './components/Review.jsx';
import firebase from './db/firebase';
import {ActionCodeInfo as doc} from "firebase";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import './Service2.css';
class Service2 extends Component {
    render () {
        return (
            <div>
                <Navbar/>
                <div className="container">
                    <h2>Bosch</h2>
                    <tbody>
                    <tr>
                        <td align="right"><strong>Web site:</strong></td>
                        <td>&nbsp;<a className="d_text" rel="nofollow" href="http://www.bosch-romania.ro"
                                     target="_blank">www.bosch-romania.ro</a></td>
                    </tr>
                    <tr>
                        <td align="right" valign="top"><strong>Email:</strong></td>
                        <td>&nbsp; autoned2005@yahoo.com&nbsp;</td>
                    </tr>
                    <tr>
                        <td align="right" valign="top"><strong>Address:</strong></td>
                        <td valign="top">&nbsp;Şoseaua Bucium nr.4</td>
                    </tr>
                    <tr>
                        <td align="right"><strong>Phone number:</strong></td>
                        <td valign="top">0232-240.484</td>
                    </tr>
                    <tr>
                        <td align="right"><strong>Description:</strong></td>
                        <td valign="top">Testare şi diagnoză computerizată, lucrări de intreţinere periodică, testare acumulatori si faruri, reparaţii la instalaţiile electrice, reparaţii mecanice, reparaţii ale sistemului de franare si ale sistemului de ventilaţie/climatizare, reparare şi reglare pompe de injecţie diesel.
                        </td>
                    </tr>
                    </tbody>
                </div>
                <Footer/>
            </div>
        );
    }
}
export default Service2