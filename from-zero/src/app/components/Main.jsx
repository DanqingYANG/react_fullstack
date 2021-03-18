import React from 'react'
import { Provider } from 'react-redux'
import {store} from '../store'

import {ConnectedDashboard} from './Dashboard'

export const Main = (props) => {
    return (
        <Provider store={store}>
            <div>
                {/* Dashboard goes here */}
                <ConnectedDashboard></ConnectedDashboard>
            </div>
        </Provider>
    )
}

