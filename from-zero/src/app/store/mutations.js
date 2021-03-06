export const REQUEST_TASK_CREATION = 'REQUEST_TASK_CREATION';
export const CREATE_TASK = 'CREATE_TASK';

export const requestTaskCreation = (groupID) => ({
    type: REQUEST_TASK_CREATION,
    groupID
});

export const createTask = (taskID, groupID, ownerID) => ({
    type: CREATE_TASK,
    taskID, 
    groupID, 
    ownerID
});
export const SET_TASK_COMPLETE = 'SET_TASK_COMPLETE';
export const SET_TASK_GROUP = 'SET_TASK_GROUP';
export const SET_TASK_NAME = 'SET_TASK_NAME';

export const setTaskCompletion = (id, isComplete = true)=>({
    type:SET_TASK_COMPLETE,
    taskID:id,
    isComplete
});

export const setTaskGroup = (taskID, groupID)=>({
    type:SET_TASK_GROUP,
    taskID,
    groupID
});

export const setTaskName = (taskID, name)=>({
    type:SET_TASK_NAME,
    taskID,
    name
});

export const REQUEST_AUTHENTICATE_USER = `REQUEST_AUTHENTICATE_USER`;

export const requestCreateUserAccount = (username,password)=>({
    type:REQUEST_USER_ACCOUNT_CREATION,
    username,
    password
});

export const PROCESSING_AUTHENTICATE_USER = `PROCESSING_AUTHENTICATE_USER`;
export const AUTHENTICATING = `AUTHENTICATING`;
export const AUTHENTICATED = `AUTHENTICATED`;
export const NOT_AUTHENTICATED = `NOT_AUTHENTICATED`;

