/**
 * @author Sven Koelpin
 */

const data = require('../db/FakeDatabase.es6');

//TODO
//- require FakeDataBase (located in folder db)

module.exports = server => {
    //TODO:
    return server.get('/tweets', (req, res) => {
        res.send(data.getTweetsTable());
    })
    // - implement a get method (server.get(...)) that returns all tweets (use fakeDatabase#getTweetsTable()). Path of the get method should be "/tweets"
};
