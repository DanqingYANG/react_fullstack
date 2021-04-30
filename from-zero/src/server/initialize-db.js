import {defaultState} from './defaultstate';
import {connectDB} from './connect-db';

async function initializeDB()
{
    let db = await connectDB();
    // notice: db is from MongoClient.connect(url, parser).db(), {MongoClient} from 'mongodb'
    let user = await db.collection(`users`).findOne({id:"U1"});
    if(!user)
    {
        for(let collectionName in defaultState)
        {
            let collection = db.collection(collectionName);
            // mongoDB method insertMany
            await collection.insertMany(defaultState[collectionName]);
        }
    }
}
// Promise
initializeDB();