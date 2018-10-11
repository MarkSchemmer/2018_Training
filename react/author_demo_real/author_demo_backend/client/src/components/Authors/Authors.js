import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AllAuthors from './AllAuthors'
import AddAuthor from './AddAuthor/AddAuthor'
import EditAuthor from './EditAuthor/EditAuthor'
import PageNotFound from '../PageNotFound/PageNotFound'

const Authors = (props) => (
        <Switch>
            <Route  exact path="/Authors" render={ () => <AllAuthors {...props} />} />
            <Route  path="/Authors/Create" render={ () => <AddAuthor {...props} />} />
            <Route  path="/Authors/edit/:id" render={(props) => <EditAuthor {...props} />} />
            <Route  path="/Authors/Create*" component={PageNotFound} />
        </Switch>
)

export default Authors 