import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home/Home'
import Authors from '../Authors/Authors'
import About from '../About/About'
import PageNotFound from '../PageNotFound/PageNotFound'



const Main = (props) => {
 //onsole.log('Main',props)
 return (   <main>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route  path="/Authors" render={(props) => <Authors {...props} />} />
            <Route exact path="/About" component={About} />
            <Route path="*" component={PageNotFound} />
        </Switch>
    </main>)
}


export default Main 