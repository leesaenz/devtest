import React from 'react'
import { render } from 'react-dom'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import './styles/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory()

render((
    <React.Fragment>
        <Router history={history}>
            <App />
        </Router>
    </React.Fragment>
), document.getElementById('root'));

serviceWorker.register();
