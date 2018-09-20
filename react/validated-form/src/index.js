import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import App from './components/App/App';
import Main from './components/Main/Main';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';

const AppWrapper = withRouter(({history}) => <App onLogin={
    () => history.push('/main')
} />)

let render = () => {
    ReactDOM.render(
    <BrowserRouter>
    <React.Fragment>
       <Route exact path="/" component={AppWrapper} />
       <Route exact path="/main" component={Main} />
    </React.Fragment>
    </BrowserRouter>, document.getElementById('root'));
}

render();
registerServiceWorker();
