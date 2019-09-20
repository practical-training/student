import React from 'react'
import { Router, Route, Switch } from 'dva/router'
import dynamic from 'dva/dynamic'

function RouterConfig({ history, app }) {
    const recordlists = dynamic({
        app,
        component: () => import('./routes/recordlists/recordlists')
    })
    const Category = dynamic({
        app,
        component: () => import('./routes/Category/Category')
    })
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={recordlists} />
                <Route path="/category" exact component={Category} />
            </Switch>
        </Router>
    )
}
export default RouterConfig