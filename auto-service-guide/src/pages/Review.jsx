import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';

class Review extends Component {
    constructor (props) {
        super(props);
        this.state = {
            inputvalue: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (event) {
        this.setState({
            inputvalue: event.target.value
        })
    }
    render () {
        return (
            <div>
                <Navbar/>
                <Jumbotron title="Review" subtitle="Here you can leave a review for the service you visit."/>
                <h2>Leave us a review</h2>
                <div className="container">
                    <div className="review-form">
                        <form>
                            <label>Name</label>
                            <input type="text" value={this.state.inputvalue} onChange={this.handleChange}/>
                            <label>Email</label>
                            <input type="email" value={this.state.inputvalue} onChange={this.handleChange}/>
                            <label>Title</label>
                            <input type="text" value={this.state.inputvalue} onChange={this.handleChange}/>
                            <label>Review text</label>
                            <input type="text" value={this.state.inputvalue} onChange={this.handleChange}/>
                            <label>Rating</label>
                                <div id="starbarBackstars" className="starbar_backstars">
                                    <div className="starbar_frontstars"></div>
                                </div>
                            <input type="submit" value="Submit"/>
                                <div id="ratingUserStars" className="starbar">
                            </div>
                        </form>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
export default Review
