import {
    take, 
    put,
    select
} from 'redux-saga/effects';


import * as mutations from './mutations';
//import uuid from 'uuid';
import {v1 as uuidV1} from 'uuid';

export function * taskCreationSaga(){
    while(true)
    {
        const {groupID} = yield take(mutations.REQUEST_TASK_CREATION);
        const ownerID = 'U1';
        const taskID =uuidV1();
        //const taskID = uuid(); // no longer used

        yield put(mutations.createTask(taskID, groupID, ownerID));
        console.log("Got group ID", groupID);
    }
};
