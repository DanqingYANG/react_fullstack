import {createStore, applyMiddleware, combineReducers} from 'redux';
import { defaultState } from '../../server/defaultstate';

import { createLogger } from 'redux-logger'

import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = createSagaMiddleware();

// import * as sagas from './sagas.mock';
import * as sagas from './sagas';
import * as mutations from './mutations';


export const store = createStore(
    combineReducers({
        // {} is for signup page, when defaultState.session is empty.
        session(session = defaultState.session || {}){
            console.log("I am here:");
            console.log(session.authenticated);
            return session;
        },
        // session(session = defaultState.session){
        //     return session;
        // },
        tasks(tasks = defaultState.tasks, action){
            switch(action.type){
                case mutations.CREATE_TASK:
                    //console.log(action);
                    return [...tasks, {
                        id: action.taskID,
                        name: "New Task",
                        group: action.groupID,
                        owner: action.ownerID,
                        isComplete: false
                    }];
                case mutations.SET_TASK_COMPLETE:
                    return tasks.map(task=>{
                        return (task.id === action.taskID) ?
                            {...task, isComplete:action.isComplete}:task;
                    });
                case mutations.SET_TASK_NAME:
                    return tasks.map(task=>{
                        return (task.id === action.taskID) ?
                            {...task, name:action.name}:task;
                    });
                // groupID matches input var in mutations (export const setTaskGroup = (taskID, groupID)=>({})
                case mutations.SET_TASK_GROUP:
                    return tasks.map(task=>{
                        return (task.id === action.taskID) ?
                            {...task, group:action.groupID}:task;
                    });
            }
            return tasks;
            },
            comments(comments = defaultState.comments)
            {
                return comments;
            },
            groups(groups = defaultState.groups)
            {
                return groups;
            },
            users(users = defaultState.users)
            {
                return users;
            },
    }),
    // function reducer(state = defaultState, action){
    //     return state;
    // },
    // here is something we need when a dev tool is added
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    // middleware
    applyMiddleware(createLogger(), sagaMiddleware)
);


for (let saga in sagas)
{
    sagaMiddleware.run(sagas[saga])
};