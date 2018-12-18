import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import App from './App';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path='/' component={App} />
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);
serviceWorker.unregister();