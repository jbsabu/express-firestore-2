import {db} from './dbConnect.js';

export function addNewTv(req,res){
const newTv = req.body;


// CREATE: add new tv show
db.collection('tv-shows')
.add(newTv)
.then(doc => res.status(201).send(`New Tv Added: ${doc.id}`))
.catch(err => res.status(500).send(err))
}

export async function getAllTv(req,res){
const collection = await db.collection('tv-shows')
.get()
.catch(err => res.status(500).send(err))

const tvShowList = collection.docs.map(element=>({...element.data(),id: tvShowList.id}))
res.send(tvShowList)
}
