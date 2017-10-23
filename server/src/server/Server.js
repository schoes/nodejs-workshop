/**
 * @author Sven Koelpin
 */

const restify = require('restify');
const corsMiddleware = require('restify-cors-middleware');

const cors = corsMiddleware({
    origins: ['http://localhost:3000'],
    allowHeaders: ['authorization']
});


const server = restify.createServer();

//middlewares pre
server.pre(cors.preflight);
//middlewares use plugins
server.use(cors.actual);
server.use(restify.plugins.queryParser());
//TODO add queryParser middleware


module.exports = {
    start() {
        server.listen(3001, () => {
            console.log('server up');
        })
    },
    register(resource) {
        resource(server);
    },
    getServer() {
        return server;
    }
};
