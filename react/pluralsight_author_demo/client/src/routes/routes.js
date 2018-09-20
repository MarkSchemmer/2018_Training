import React from 'react'
import { IndexRoute, Route } from 'react-router'

import Main from '../components/Main/Main'


const routes = (
    <Route name="app" path="/" component={Main}>
            <IndexRoute component={Main} />
    </Route>
)

export default routes 