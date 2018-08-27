import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';



let render = () => ReactDOM.render(<App />, document.getElementById('root'));
render()
registerServiceWorker();
