import React from 'react'
import { Provider } from 'react-redux'
import {store} from '../store'
import Test from '../../test/Test.jsx'
//import {store} from '../store/index'

import {ConnectedDashboard} from './Dashboard'

import {Router, Route, Switch, Redirect} from 'react-router-dom'
import {history} from '../store/history'

import {ConnectedNavigation} from './Navigation'
import {ConnectTaskDetail} from './TaskDetail'
import PageNotFound from './PageNotFound.jsx'

import ConnectedLogin from './Login'
import {Signup} from './Signup'
import { TestRedux } from '../../test/TestRedux'


const RouteGuard = (Component =>({match}) => {
    console.info("Route guard", match);
    // if not authenticated, redirect to login page.
    if(!store.getState().session.authenticated)
    {
        return <Redirect to="/"/>;
    }{
        return <Component match={match}/>;
    }
})


export const Main = () => {
    return (
        <Router history= {history}>
            <Provider store={store}>
                <div>
                    {/* Dashboard goes here */}
                    {/* <ConnectedDashboard/> */}
                    <ConnectedNavigation />
                    <Test/>
                    <TestRedux/>
                    <Switch>
                        <Route exact path="/" component={ConnectedLogin}/>
                        <Route
                            exact
                            path = "/dashboard"
                            // render={() => (<ConnectedDashboard/>)}
                            render={RouteGuard(ConnectedDashboard)}
                        />
                        <Route
                            path = "/task/:id"
                            // render={({match}) => (<ConnectTaskDetail match={match} />)}
                            render={RouteGuard(ConnectTaskDetail)}
                        />
                        <Route
                            path = "/signup"
                            render={() => (<Signup/>)}
                        />
                        <Route component={PageNotFound}/>
                    </Switch>
                </div>
            </Provider>
        </Router>
    )
}