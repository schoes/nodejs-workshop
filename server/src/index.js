/**
 * @author Sven Koelpin
 */
const restify = require('restify');
const tweetResource = require('./tweets/TweetsResource');
const server = require('./server/Server');




server.register(tweetResource);

server.start();

