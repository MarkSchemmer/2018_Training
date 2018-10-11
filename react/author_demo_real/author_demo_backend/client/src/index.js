import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App/App'
import registerServiceWorker from './registerServiceWorker'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
//import { initializeActions } from './flux/actions/initializeActions'

//initializeActions.initApp()


ReactDOM.render((
<BrowserRouter> 
    <App /> 
</BrowserRouter>
) , document.getElementById('root'));
registerServiceWorker();
