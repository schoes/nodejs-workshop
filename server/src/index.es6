/**
 * @author Sven Koelpin
 */

const server = require('./server/Server.es6');
const tweetRessource = require('./tweets/TweetsResource.es6');
server.register(tweetRessource);

server.start();

