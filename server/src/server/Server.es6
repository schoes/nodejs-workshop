/**
 * @author Sven Koelpin
 */
const restify = require('restify');

//TODO
//- require restify
//- create server
//- add get method to the server which uses the path "/" and returns the json : {message: "hello IJS"}

const server = restify.createServer();

server.get('/', (req, res, next) => {
    res.send({message: "hello IJS"});
    next();
});

module.exports = {
    start() {
        server.listen(3001, () => {
            console.log('server is running');
        });
    },
    register(resource) {
        resource(server);
    },
    getServer() {
        return server;
    }
};
