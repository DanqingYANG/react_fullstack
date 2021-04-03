import React from 'react'
import { Provider } from 'react-redux'
import {store} from '../store'
//import {store} from '../store/index'

import {ConnectedDashboard} from './Dashboard'

import {Router, Route, Switch} from 'react-router-dom'
import {history} from '../store/history'

import {ConnectedNavigation} from './Navigation'
import {ConnectTaskDetail} from './TaskDetail'
import PageNotFound from './PageNotFound.jsx'

export const Main = (props) => {
    return (
        <Router history= {history}>
            <Provider store={store}>
                <div>
                    {/* Dashboard goes here */}
                    {/* <ConnectedDashboard/> */}
                    <ConnectedNavigation/>
                    <Switch>
                        <Route
                            exact
                            path = "/dashboard"
                            render={() => (<ConnectedDashboard/>)}/>
                        <Route
                            path = "/task/:id"
                            render={({match}) => (<ConnectTaskDetail match={match} />)}/>
                        <Route render={()=>(<PageNotFound/>)}/> 
                    </Switch>
                </div>
            </Provider>
        </Router>
    )
}