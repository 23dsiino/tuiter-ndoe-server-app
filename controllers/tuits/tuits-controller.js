import * as tuitsDao from './tuits-dao.js'
const TuitsController = (app) => {
    console.log('controller');
    app.get('/api/tuits', findTuits);
    app.post('/api/tuits', createTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
    app.put('/api/tuits/:tid', updateTuit);
}

const createTuit = async(req, res) => {
    const newTuit = req.body;
    newTuit.likes = 0;
    newTuit.liked = false;
    newTuit.image = "hg";
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
}

const findTuits = async (req, res) => {

        console.log('trying to find');
        const tuits = await tuitsDao.findTuits();
        console.log(tuits);
        res.json(tuits);

}


const updateTuit = async(req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    const status = await tuitsDao
        .updateTuit(tuitdIdToUpdate,
            updates);
    res.json(status);

}



const deleteTuit = async(req, res) => {
    const tuitdIdToDelete = req.params._id;
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);

    res.json(status);
}


export default TuitsController;