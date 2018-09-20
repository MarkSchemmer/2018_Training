import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './components/Main/Main';
import registerServiceWorker from './registerServiceWorker';

import { Router } from 'react-router'
import routes from './routes/routes'


Router.run(routes, (Handler) => {
    React.render(<Handler />, document.getElementById('root'))
    registerServiceWorker()
})

