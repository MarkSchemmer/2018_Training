import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Link, withRouter, Router } from 'react-router-dom'
import AddForm from './AuthorQuizForm/add'
import authors from './author_data'


const AddAuthorWrapper = withRouter(({history}) => 
    <AddForm handleSubmit={ (author) => {
            authors.push(author)
            console.log(authors)
            history.push('/')
    }} />
)

function render() {
    ReactDOM.render(<BrowserRouter>
                    <div>
                        <Route exact path="/" component={App} />
                        <Route exact path="/add" component={AddAuthorWrapper} />
                    </div>
                    </BrowserRouter>, document.getElementById('root'))
}

render()
registerServiceWorker();
