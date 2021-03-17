import React from 'react'
import { Provider } from 'react-redux'
import {store} from '../store'

export const Main = (props) => {
    return (
        <Provider store={store}>
            <div>
                Dashboard goes here
            </div>
        </Provider>
    )
}

