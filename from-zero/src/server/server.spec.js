// import {addNewTask} from './server'

// addNewTask({
//     name:"My task",
//     id:"12345"
// });

import {addNewTask, updateTask} from './server'

// invoking
(async function myFunc()
{
    await addNewTask({
        name:"My task",
        id:"789"
    });
    
    await updateTask({
        id:"123456",
        name:"My task-updated"
    });
})();