/**
 * @author Sven Koelpin
 */

const service = require('./TweetService');

module.exports = server => {
    server.get('tweets', (req, res, next) => {
        //TODO
        const {page, size} = req.query;
        // - read page and size from query parameters (hint: req.query)
        // - provide default values if parameters are not set (1 ist default for page, 10 for size)
        // - use parseInt(value) to parse the page & size parameters to numbers!
        // - don't forget to register the queryParser-middleware in Server.js
        const start = (page - 1) * size;

        const allTweets = service.getTweets(start, size) //TODO use tweetservice, pass start + size as params
        res.send(allTweets);
        next();
    });
};
