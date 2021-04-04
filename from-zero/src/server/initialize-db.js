import {defaultState} from './defaultstate';
import {connectDB} from './connect-db';

async function initializeDB()
{
    let db = await connectDB();
    for(let collectionName in defaultState)
    {
        let collection = db.collection(collectionName);
        // mongoDB method insertMany
        await collection.insertMany(defaultState[collectionName]);
    }
}
// Promise
initializeDB();