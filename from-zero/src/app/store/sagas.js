import {take, put, select} from 'redux-saga/effects';
import * as mutations from './mutations';
//import uuid from 'uuid';
import {v1 as uuidV1} from 'uuid';
import axios from 'axios';

const url = "http://localhost:7777";

export function * taskCreationSaga(){
    while(true)
    {
        // destruction {prop1, prop2} = dict; blabla
        const {groupID} = yield take(mutations.REQUEST_TASK_CREATION);
        const ownerID = 'U1';
        const taskID =uuidV1();
        //const taskID = uuid(); // no longer used
        yield put(mutations.createTask(taskID, groupID, ownerID));
        //console.log("Got group ID", groupID);

        const { res } = yield axios.post(url + `/task/new`, {
            task:{
                id: taskID,
                group: groupID,
                ownerID: ownerID,
                isComplete:false,
                name:"New task"
            }
        });
        console.log("Got response", res);
    }
};


export function * taskModificationSage()
{
    while(true)
    {
        // Declarative Effects, yield is something like iterator, we use next() to get next iterator
        const task = yield take([mutations.SET_TASK_NAME, mutations.SET_TASK_GROUP, mutations.SET_TASK_COMPLETE]);
        console.log("some", take([mutations.SET_TASK_NAME, mutations.SET_TASK_GROUP, mutations.SET_TASK_COMPLETE]));
        const { res } = yield axios.post(url + `/task/update`, {
            task:{
                id: task.taskID,
                group: task.groupID,
                name: task.name,
                isComplete:task.isComplete
            }
        });
        console.log("Got response", task);
    }
}
