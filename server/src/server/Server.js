/**
 * @author Sven Koelpin
 */

const restify = require('restify');
const webSocket = require('ws');
const logger = require('./Logger');
const security = require('../security/Security');
const eventEmitter = require('./Events');
restify.CORS.ALLOW_HEADERS.push('authorization');


module.exports = {
    create(){
        const server = restify.createServer({
            name: 'Twttr',
            version: '1.0.0'
        });

        server.pre(logger);
        server.pre(restify.pre.sanitizePath());


        server.pre(restify.throttle({burst: 2, rate: 2, ip: true}));
        server.use(restify.CORS());
        server.use(restify.queryParser());
        server.use(restify.bodyParser());

        server.use(restify.gzipResponse());

        server.use(security);

        const wss = new webSocket.Server({server});

        wss.on('connection', ws => {
            const onEventListener = newData => ws.send(JSON.stringify(newData));
            eventEmitter.addListener('newData', onEventListener);
            ws.on('close', () => eventEmitter.removeListener('newData', onEventListener));
        });

        return {
            start() {
                server.listen(3001, () => {
                    console.log('server up');
                })
            },
            register(resource){
                resource(server);
            },
            getServer(){
                return server;
            }
        }
    }
};
